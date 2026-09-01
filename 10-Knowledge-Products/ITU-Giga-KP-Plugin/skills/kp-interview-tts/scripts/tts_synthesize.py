#!/usr/bin/env python3
"""Synthesize a KP narration take from an InterviewScript with the Gemini multi-speaker TTS API.

    tts_synthesize.py <lang>/tts/KP1_M1_1.1_InterviewScript_v0.1.md
    tts_synthesize.py <script.md> --dry-run          # print the request + forecast, no spend
    tts_synthesize.py <script.md> --out /tmp/x.m4a   # write elsewhere (comparison run)
    tts_synthesize.py <script.md> --force            # overwrite the resolved output
    tts_synthesize.py <script.md> --skip-lint        # synthesize a script the linter FAILs
    tts_synthesize.py --audition Aoede,Charon        # §3.5: fixed 30s exchange -> /tmp
    tts_synthesize.py --list-models                  # what this key can actually call

One request per subtopic — the whole take, not per slide. Cues still come from the
SRT (Step 5), so there is nothing for chunking to buy.

Never overwrites: the output is the next free `…_Audio_v0.«v».m4a` in the sibling
`audio/` folder, and every run appends provenance and cost to `tts/takes.log`.

Exit 0 wrote a take, 1 anything else.
"""

import argparse
import array
import audioop
import json
import logging
import math
import os
import re
import shutil
import subprocess
import sys
import tempfile
import time
from datetime import datetime, timezone
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from tts_script_lint import check as lint_check, load_config, parse  # noqa: E402

KEYCHAIN_SERVICE = "gemini-api"
DEFAULT_MODEL = "gemini-3.1-flash-tts-preview"
PCM_RATE, PCM_CHANNELS = 24000, 1        # what the API returns: 24 kHz 16-bit mono
DURATION_TOLERANCE = 0.10                # ffprobe vs target
TAIL_SILENCE_S = 3.0                     # see pad_tail(); override per KP with TTSConfig.tail_silence_s
SLIDE_GAP_S = 0.7                        # silence inserted at each slide join. > the 0.6 s
                                         # SILENCE_GAP_S in kp-scribe-transcribe, so every slide
                                         # boundary lands on a real cue boundary in the SRT.
TARGET_RMS_DBFS = -20.0                  # per-chunk speech level; see level_match()
MAX_GAIN_DB = 18.0                       # never lift a chunk further than this
SPEECH_FLOOR = 300                       # |sample| below this is a pause, not speech
RETRIES, BACKOFF_S = 5, 15               # the preview model's per-minute quota is low and a
                                         # chunked take fires one request per slide back to back
INTER_REQUEST_S = 3.0                    # breathing room between chunks, cheaper than a retry
# https://ai.google.dev/pricing — text in / audio out, US dollars per million tokens.
PRICE_IN_PER_M, PRICE_OUT_PER_M = 1.00, 20.00

AUDITION_WORDS = 75                      # ~30 s at 150 wpm
AUDITION = [
    ("Interviewer", "Minister's office asked me a blunt question this morning. We already fund "
                    "six digital programmes. Why would we pay for an architecture on top of them?"),
    ("Expert", "Because none of those six can tell you what the other five have built. Every one "
               "of them is doing exactly what it was funded to do, and that is the problem. The "
               "architecture is not a seventh programme. It is the shared plan the other six are "
               "each quietly inventing for themselves, at your expense, six times over."),
    ("Interviewer", "And the first thing it puts on the minister's desk?"),
    ("Expert", "A register of what your government already runs, who owns each part, and where "
               "two systems hold the same people twice."),
]


# --- setup -------------------------------------------------------------------

def resolve_key():
    """env var, then Keychain. Same discipline as kp-scribe-transcribe: never a file."""
    key = os.environ.get("GEMINI_API_KEY")
    if key:
        print("key: GEMINI_API_KEY", file=sys.stderr)
        return key
    p = subprocess.run(["security", "find-generic-password", "-s", KEYCHAIN_SERVICE, "-w"],
                       capture_output=True, text=True)
    if p.returncode == 0 and p.stdout.strip():
        print(f"key: Keychain ({KEYCHAIN_SERVICE})", file=sys.stderr)
        return p.stdout.strip()
    if p.stderr.strip():
        print(f"keychain: {p.stderr.strip()}", file=sys.stderr)
    sys.exit(f"no API key. Set one up once with:\n"
             f'    security add-generic-password -a "$USER" -s {KEYCHAIN_SERVICE} -w\n'
             f"(prompts for the value, so it never reaches shell history)")


def make_client(key):
    logging.getLogger("google_genai.models").setLevel(logging.ERROR)  # AFC notice; we pass no tools
    try:
        import truststore
        from google import genai
    except ImportError as e:
        sys.exit(f"{e}. Build the venv first:\n"
                 f"    ~/.venvs/kp/bin/pip install google-genai truststore")
    # The proxy root here is trusted only by the macOS keychain, and httpx >= 0.28 ignores
    # SSL_CERT_FILE. kp-scribe-transcribe measured this; truststore is the fix, not a bundle.
    truststore.inject_into_ssl()
    return genai.Client(api_key=key)


def ffprobe_duration(path):
    exe = shutil.which("ffprobe") or "/usr/local/bin/ffprobe"
    p = subprocess.run([exe, "-v", "error", "-show_entries", "format=duration",
                        "-of", "default=nw=1:nokey=1", str(path)], capture_output=True, text=True)
    if p.returncode != 0:
        raise RuntimeError(f"ffprobe failed on {path}: {p.stderr.strip()}")
    return float(p.stdout.strip())


# --- the request --------------------------------------------------------------

def build_prompt(cfg, turns):
    """Director preamble + the stripped transcript. Slide comments never reach the API."""
    speakers = {s["role"]: s for s in cfg["speakers"]}
    lines = [cfg["director_preamble"].strip(), ""]
    # Only terms the dialogue actually says. An unused entry is a term the model has been
    # handed with no place to put it — the same trap the audio brief's §4 note describes.
    spoken = " ".join(tx for _, tx in turns).lower()
    pron = {k: v for k, v in (cfg.get("pronunciations") or {}).items() if k.lower() in spoken}
    if pron:
        lines.append("Pronounce these exactly: "
                     + "; ".join(f"{k} as {v}" for k, v in pron.items()) + ".")
        lines.append("")
    lines.append(f"{speakers['interviewer']['name']} is the interviewer. "
                 f"{speakers['expert']['name']} is the expert.")
    lines.append("")
    lines += [f"{sp}: {tx}" for sp, tx in turns]
    return "\n".join(lines)


def speech_config(cfg, types):
    return types.SpeechConfig(multi_speaker_voice_config=types.MultiSpeakerVoiceConfig(
        speaker_voice_configs=[
            types.SpeakerVoiceConfig(
                speaker=s["name"],
                voice_config=types.VoiceConfig(
                    prebuilt_voice_config=types.PrebuiltVoiceConfig(voice_name=s["voice"])))
            for s in cfg["speakers"]]))


def synthesize(client, model, cfg, prompt):
    """-> (pcm bytes, usage). Retries 429/5xx; anything else is a real error, raised at once."""
    from google.genai import types
    conf = types.GenerateContentConfig(response_modalities=["AUDIO"],
                                       speech_config=speech_config(cfg, types))
    for attempt in range(1, RETRIES + 1):
        try:
            r = client.models.generate_content(model=model, contents=prompt, config=conf)
            break
        except Exception as e:                       # noqa: BLE001 — the SDK's error type varies
            text = str(e)
            code = getattr(e, "code", None) or getattr(e, "status_code", None)
            # A per-DAY quota is not transient. Retrying it burns minutes of backoff to fail
            # anyway, and the message the operator needs is "enable billing", not "429".
            if "PerDay" in text or "RequestsPerDay" in text:
                sys.exit(
                    "\nDaily quota exhausted for this model on the FREE tier.\n"
                    "  Chunked synthesis sends one request per slide, so one 6-slide take is 6 of\n"
                    "  them, and an --audition is one more. The free tier allows 10 per day.\n"
                    "  Enable billing on the Google Cloud project behind this key to get the\n"
                    "  pay-per-use rates this skill quotes ($1/M in, $20/M audio out):\n"
                    "      https://aistudio.google.com/apikey  ->  the key's project -> billing\n"
                    f"  Server said: {text[:200]}")
            transient = code in (429, 500, 502, 503, 504) or re.search(r"\b(429|50[0234])\b", text)
            if not transient or attempt == RETRIES:
                raise
            # Honour the server's own RetryInfo when it gives one; our backoff is a guess.
            m = re.search(r"retryDelay['\"]?:\s*['\"]?(\d+(?:\.\d+)?)s", text)
            wait = min(float(m.group(1)) + 1, 120) if m else BACKOFF_S * attempt
            print(f"  {code or 'transient'} — retry {attempt}/{RETRIES - 1} in {wait:.0f}s",
                  file=sys.stderr, flush=True)
            time.sleep(wait)
    part = r.candidates[0].content.parts[0]
    if not getattr(part, "inline_data", None) or not part.inline_data.data:
        raise RuntimeError(f"no audio in the response: {getattr(part, 'text', part)!r}")
    return part.inline_data.data, r.usage_metadata


def speech_rms_dbfs(pcm, stride=7):
    """Speech-only RMS in dBFS, or None if the chunk is silent.

    Pauses are excluded, or a slide with long gaps reads as quiet and gets over-lifted. Sampled
    every `stride`th frame: RMS over ~300k samples is the same number as over 2M, and the whole
    point of this function is to run in milliseconds rather than minutes.
    """
    a = array.array("h")
    a.frombytes(pcm[:len(pcm) // 2 * 2])
    total, n = 0, 0
    for i in range(0, len(a), stride):
        v = a[i]
        if -SPEECH_FLOOR < v < SPEECH_FLOOR:
            continue
        total += v * v
        n += 1
    if not n:
        return None
    return 20 * math.log10(math.sqrt(total / n) / 32768)


def level_match(pcm, target_db=TARGET_RMS_DBFS):
    """Scale one chunk to a common speech level. Returns (pcm, gain_db_applied).

    This model's level decays badly across a long generation — measured on take v0.5, a single
    4-minute request fell 24 dB from start to end (-16.6 to -40.6 dBFS speech RMS) while a
    NotebookLM take of the same script held flat within 2 dB. Chunking bounds the decay inside
    each slide; this puts the chunks back on a common level so the joins are inaudible.
    The spectrum is preserved through the decay (the HF/LF ratio holds within ~2 dB), which is
    why a plain gain is the right correction and not an EQ.
    """
    cur = speech_rms_dbfs(pcm)
    if cur is None:
        return pcm, 0.0
    gain_db = max(min(target_db - cur, MAX_GAIN_DB), -MAX_GAIN_DB)
    factor = 10 ** (gain_db / 20)
    peak = audioop.max(pcm, 2)
    if peak * factor > 32000:                      # never clip; give up the last dB instead
        factor = 32000 / max(peak, 1)
        gain_db = 20 * math.log10(factor)
    return audioop.mul(pcm, 2, factor), gain_db


def silence(seconds):
    return b"\x00" * (int(PCM_RATE * PCM_CHANNELS * seconds) * 2)


def pad_tail(pcm, seconds):
    """Append silence so the Sources card has something to sit over.

    The take ends on the last syllable — this model emits no trailing silence, and on the pilot
    it left only 0.2 s between the final content line and the sources line. `videos/README.md`
    wants the Sources card held ~5 s, and slidecast holds the last slide until the audio ends,
    so without this every take on this path starves it. Raw s16le silence is just zero bytes.

    This does NOT move the audit: `srt_drift_check.py` reads runtime off the last cue end, and
    silence transcribes to no words. It moves only the file duration, which is what slidecast
    reads.
    """
    return pcm + b"\x00" * int(PCM_RATE * PCM_CHANNELS * 2 * max(seconds, 0))


def synthesize_slides(client, model, cfg, slides, verbose=True):
    """One request per slide, level-matched, joined by SLIDE_GAP_S of silence.

    NOT one request for the whole take. The plan chose whole-take synthesis; the pilot measured
    why that is wrong here (see level_match). Chunking also makes each slide boundary an exact,
    known timestamp instead of something the cue author infers from the SRT.
    """
    pcm, usage_in, usage_out, marks = b"", 0, 0, []
    for i, sl in enumerate(slides):
        if not sl["turns"]:
            continue
        marks.append((sl["n"], sl["title"], len(pcm) / 2 / PCM_RATE / PCM_CHANNELS))
        chunk, usage = synthesize(client, model, cfg, build_prompt(cfg, sl["turns"]))
        chunk, gain = level_match(chunk)
        usage_in += getattr(usage, "prompt_token_count", 0) or 0
        usage_out += getattr(usage, "candidates_token_count", 0) or 0
        if verbose:
            secs = len(chunk) / 2 / PCM_RATE / PCM_CHANNELS
            words = sum(len(tx.split()) for _, tx in sl["turns"])
            print(f"  slide {sl['n']}  {secs:5.1f}s  {words / (secs / 60):5.0f} wpm  "
                  f"gain {gain:+5.1f} dB  {sl['title'][:38]}", flush=True)
        pcm += chunk
        if i < len(slides) - 1:
            pcm += silence(SLIDE_GAP_S)
            time.sleep(INTER_REQUEST_S)
    return pcm, usage_in, usage_out, marks


def pcm_to_m4a(pcm, out):
    """Atomic: a kill mid-encode must leave no .m4a, or the next run's version number lies."""
    exe = shutil.which("ffmpeg") or "/usr/local/bin/ffmpeg"
    out = Path(out)
    fd, tmp = tempfile.mkstemp(dir=out.parent, prefix=out.name, suffix=".tmp.m4a")
    os.close(fd)
    try:
        p = subprocess.run([exe, "-y", "-loglevel", "error",
                            "-f", "s16le", "-ar", str(PCM_RATE), "-ac", str(PCM_CHANNELS),
                            "-i", "pipe:0", "-c:a", "aac", "-b:a", "128k", "-ar", str(PCM_RATE),
                            tmp], input=pcm, capture_output=True)
        if p.returncode != 0:
            raise RuntimeError(f"ffmpeg failed: {p.stderr.decode().strip()}")
        os.replace(tmp, out)
    except BaseException:
        Path(tmp).unlink(missing_ok=True)
        raise


# --- naming, cost, provenance --------------------------------------------------

def stem_of(script_path):
    m = re.match(r"(.+?)_InterviewScript_v", Path(script_path).name)
    if not m:
        sys.exit(f"cannot read a stem from {Path(script_path).name} — expected "
                 f"KP«n»_M«m»_«x.y»_InterviewScript_v0.«v».md")
    return m.group(1)


def next_audio_path(script_path):
    """The version sequence continues across paths — a NotebookLM v0.2 makes this v0.3."""
    stem = stem_of(script_path)
    audio = Path(script_path).resolve().parents[1] / "audio"
    audio.mkdir(parents=True, exist_ok=True)
    used = []
    for f in audio.glob("%s_Audio_v0.*.m4a" % stem):
        m = re.search(r"_v0\.(\d+)\.m4a$", f.name)
        if m:
            used.append(int(m.group(1)))
    return audio / f"{stem}_Audio_v0.{max(used, default=0) + 1}.m4a"


def cost(usage):
    tin = getattr(usage, "prompt_token_count", 0) or 0
    tout = getattr(usage, "candidates_token_count", 0) or 0
    return tin, tout, tin / 1e6 * PRICE_IN_PER_M + tout / 1e6 * PRICE_OUT_PER_M


LOG_FIELDS = ["ts", "script", "config", "audio", "model",
              "tokens_in", "tokens_out", "usd", "duration_s"]


def log_take(script_path, row):
    """The provenance record: the artefact does not advertise how it was made, this does."""
    log = Path(script_path).resolve().parent / "takes.log"
    new = not log.exists()
    with log.open("a", encoding="utf-8") as fh:
        if new:
            fh.write("\t".join(LOG_FIELDS) + "\n")
        fh.write("\t".join(str(v) for v in row) + "\n")
    return log


# --- commands -------------------------------------------------------------------

def run_audition(args):
    cfg = {"speakers": [{"name": "Interviewer", "role": "interviewer", "voice": args.voices[0]},
                        {"name": "Expert", "role": "expert", "voice": args.voices[1]}],
           "director_preamble": "Read this as a recorded policy interview between two senior "
                                "advisers preparing a government minister. Measured, collegial, "
                                "professional. Not a podcast — no reaction noises, no overlapping "
                                "speech. Pace about 140 words per minute. Leave a clear breath "
                                "between speakers so the recording can be cut against slides.",
           "pronunciations": {}}
    out = Path(args.out) if args.out else Path(f"/tmp/audition_{'_'.join(args.voices)}.m4a")
    prompt = build_prompt(cfg, AUDITION)
    if args.dry_run:
        print(prompt)
        return 0
    pcm, usage = synthesize(make_client(resolve_key()), args.model, cfg, prompt)
    pcm_to_m4a(pcm, out)
    tin, tout, usd = cost(usage)
    dur = ffprobe_duration(out)
    words = sum(len(tx.split()) for _, tx in AUDITION)
    print(f"-> {out}  {dur:.1f}s  {words / (dur / 60):.0f} wpm  {tin}+{tout} tokens  ${usd:.3f}")
    print(f"   open {out}")        # /tmp is hidden in Finder; give the operator a runnable line
    print("Listen, then freeze the winner in references/voice-pairs.md and the KP's TTSConfig.")
    return 0


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("script", nargs="?", help="the InterviewScript .md")
    ap.add_argument("--config", help="TTSConfig .json (default: the sibling named in the script)")
    ap.add_argument("--model", help=f"default: the config's, else {DEFAULT_MODEL}")
    ap.add_argument("--out", help="write the .m4a here instead of the next free version")
    ap.add_argument("--force", action="store_true", help="overwrite --out if it exists")
    ap.add_argument("--skip-lint", action="store_true", help="synthesize despite lint FAILs")
    ap.add_argument("--dry-run", action="store_true", help="print the request, spend nothing")
    ap.add_argument("--whole-take", action="store_true",
                    help="one request for the whole subtopic instead of one per slide. The level "
                         "decays badly over 4 minutes (see level_match) — for comparison runs only")
    ap.add_argument("--audition", metavar="VOICE_A,VOICE_B",
                    help="§3.5: the fixed 30 s exchange with this pair, to /tmp")
    ap.add_argument("--list-models", action="store_true", help="models this key can call")
    args = ap.parse_args()

    if not (args.script or args.audition or args.list_models):
        ap.error("give an InterviewScript, --audition A,B, or --list-models")

    if args.list_models:
        client = make_client(resolve_key())   # hold the reference: a temporary Client is
        for m in client.models.list():        # collected mid-iteration and closes its httpx

            if "tts" in m.name.lower():
                print(m.name)
        return 0

    if args.audition:
        args.voices = [v.strip() for v in args.audition.split(",")]
        if len(args.voices) != 2:
            ap.error("--audition takes exactly two voice names, comma separated")
        args.model = args.model or DEFAULT_MODEL
        return run_audition(args)

    script = Path(args.script)
    cfg = load_config(script, args.config)
    model = args.model or cfg.get("model") or DEFAULT_MODEL

    fails, warns, _ = lint_check(script, cfg)
    for w in warns:
        print(f"  WARN  {w}", file=sys.stderr)
    if fails:
        for f in fails:
            print(f"  FAIL  {f}", file=sys.stderr)
        if not args.skip_lint:
            sys.exit("lint failed — fix the InterviewScript, or --skip-lint to pay for it anyway")

    slides, _ = parse(script)
    turns = [(sp, tx) for s in slides for sp, tx in s["turns"]]
    prompt = build_prompt(cfg, turns)
    spoken = sum(len(tx.split()) for _, tx in turns)
    target = cfg["target_seconds"]

    out = Path(args.out) if args.out else next_audio_path(script)
    if out.exists() and not args.force:
        sys.exit(f"{out} exists — --force to overwrite (the version sequence normally makes "
                 f"this impossible; --out is what gets you here)")

    print(f"{script.name}  {spoken} spoken words  model {model}")
    print(f"  voices: " + ", ".join(f"{s['name']}={s['voice']}" for s in cfg["speakers"]))
    if args.dry_run:
        print(f"  -> would write {out}\n\n--- request ---\n{prompt}")
        return 0

    tail = cfg.get("tail_silence_s", TAIL_SILENCE_S)
    client = make_client(resolve_key())
    if args.whole_take:
        pcm, usage = synthesize(client, model, cfg, prompt)
        tin, tout = (getattr(usage, "prompt_token_count", 0) or 0,
                     getattr(usage, "candidates_token_count", 0) or 0)
        marks = []
    else:
        pcm, tin, tout, marks = synthesize_slides(client, model, cfg, slides)
    usd = tin / 1e6 * PRICE_IN_PER_M + tout / 1e6 * PRICE_OUT_PER_M
    pcm_to_m4a(pad_tail(pcm, tail), out)
    dur = ffprobe_duration(out) - tail        # the spoken take; the pad is not narration
    print(f"  -> {out}  {int(dur) // 60}:{dur % 60:04.1f} speech + {tail:g}s tail  "
          f"{spoken / (dur / 60):.0f} wpm  {tin}+{tout} tokens  ${usd:.3f}")
    if abs(dur - target) > target * DURATION_TOLERANCE:
        print(f"  WARNING: {dur:.0f}s vs target {target}s — outside ±{DURATION_TOLERANCE:.0%}. "
              f"At a fixed word count this should barely drift; check the preamble's pace line.",
              file=sys.stderr)

    if marks:
        print("  slide boundaries (exact — chunked synthesis, not inferred from the SRT):")
        for n, title, t in marks:
            print(f"    {int(t) // 60}:{int(t) % 60:02d}   # slide {n} — {title}")
    log = log_take(script, [datetime.now(timezone.utc).isoformat(timespec="seconds"),
                            script.name, Path(cfg.get("_path", "-")).name, out.name,
                            model, tin, tout, f"{usd:.4f}", f"{dur:.1f}"])
    print(f"  logged to {log.name}")
    print(f"\nNext:\n"
          f"  ~/.venvs/kp/bin/python …/kp-scribe-transcribe/scripts/transcribe.py {out}\n"
          f"  python3 …/kp-audio-brief/scripts/srt_drift_check.py {out.with_suffix('.srt')} "
          f"--target {target}\n"
          f"  then author the cue file (kp-slidecast Step 1) at this take's version")
    return 0


if __name__ == "__main__":
    sys.exit(main())

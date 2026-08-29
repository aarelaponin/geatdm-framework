#!/usr/bin/env python3
"""Transcribe a KP narration take to SRT with ElevenLabs Scribe v2.

    transcribe.py <file.m4a> [<file.m4a> ...]   one or more takes -> .srt beside each
    transcribe.py <lang>/audio/                 every .m4a in the folder with no .srt
    transcribe.py --balance                     credits + ledger totals, no upload
    transcribe.py <file.m4a> --force            overwrite an existing .srt
    transcribe.py <file.m4a> --dry-run          duration + forecast, no upload
    transcribe.py <file.m4a> --out <path>       write elsewhere (comparison run)
    transcribe.py <file.m4a> --language fra     override the path-derived language
    transcribe.py <dir>/ --strict               exit 2 on a credit warning

Scribe returns words, not cues, so this script owns the segmentation. The cue
shape is what `kp-audio-brief/scripts/srt_drift_check.py` and the cue author in
`kp-slidecast` Step 1 read, so the thresholds below are not free parameters:
SILENCE_GAP_S in particular must equal the checker's pause constant, or a break
this script makes for a reason other than silence gets reported as a pause that
is not there.

Exit 0 all good, 1 any file failed (or setup is missing), 2 credit warning
under --strict.
"""

import argparse
import csv
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from datetime import datetime, timezone
from pathlib import Path

# --- segmentation thresholds (tuned against real word timings, see SKILL.md) ---

SILENCE_GAP_S = 0.6      # == the pause constant in srt_drift_check.py. Keep equal.
SENTENCE_MIN_CHARS = 40  # below this a full stop is an abbreviation or an aside
SOFT_CAP_S = 7.0         # long cue + any real gap -> break
SOFT_CAP_GAP_S = 0.3
HARD_CAP_S = 10.0        # never exceeded
HARD_CAP_CHARS = 200
SMOOTH_RUN = 3           # a speaker run shorter than this is diarization jitter

# --- credit warning ----------------------------------------------------------

WARN_MINUTES_AHEAD = 25  # ~five more 4.5-minute takes
WARN_LIMIT_FRACTION = 0.10
METER_MIN_ROWS = 3
HOURS_METER_LAG_S = 900  # billing lag before zero deltas are believed
PLAN_HOURS_ENV = "KP_SCRIBE_PLAN_HOURS"

MODEL_ID = "scribe_v2"
REQUEST_TIMEOUT_S = 300  # 10 MB through the proxy; the SDK default of 60 s is not enough
KEYCHAIN_SERVICE = "elevenlabs-api-key"
LEDGER = Path.home() / ".local" / "state" / "kp-scribe" / "usage.csv"
LEDGER_FIELDS = ["ts", "file", "lang", "duration_s", "tier", "credits_before",
                 "credits_after", "delta", "limit", "reset_iso"]

LANG_BY_DIR = {"en": "eng", "fr": "fra"}
PUNCT_ONLY = re.compile(r"^[,.;:!?…]+$")


# --- setup -------------------------------------------------------------------

def resolve_key():
    """env var, then Keychain. Prints which source won; exits 1 with the setup line."""
    key = os.environ.get("ELEVENLABS_API_KEY")
    if key:
        print("key: ELEVENLABS_API_KEY", file=sys.stderr)
        return key
    p = subprocess.run(["security", "find-generic-password", "-s", KEYCHAIN_SERVICE, "-w"],
                       capture_output=True, text=True)
    if p.returncode == 0 and p.stdout.strip():
        print(f"key: Keychain ({KEYCHAIN_SERVICE})", file=sys.stderr)
        return p.stdout.strip()
    # "user denied access" is a real state and worth showing, not swallowing.
    if p.stderr.strip():
        print(f"keychain: {p.stderr.strip()}", file=sys.stderr)
    sys.exit(f"no API key. Set one up once with:\n"
             f'    security add-generic-password -a "$USER" -s {KEYCHAIN_SERVICE} -w\n'
             f"(prompts for the value, so it never reaches shell history)")


def make_client(key):
    try:
        import httpx
        import truststore
        from elevenlabs.client import ElevenLabs
    except ImportError as e:
        sys.exit(f"{e}. Build the venv first:\n"
                 f"    python3 -m venv ~/.venvs/kp && ~/.venvs/kp/bin/pip install elevenlabs truststore")
    import ssl
    # httpx >= 0.28 ignores SSL_CERT_FILE and trusts certifi only; truststore points
    # it at the macOS keychain instead, which is where the proxy root already lives.
    ctx = truststore.SSLContext(ssl.PROTOCOL_TLS_CLIENT)
    return ElevenLabs(api_key=key, httpx_client=httpx.Client(verify=ctx, timeout=REQUEST_TIMEOUT_S))


def ffprobe_duration(path):
    exe = shutil.which("ffprobe") or "/usr/local/bin/ffprobe"
    p = subprocess.run([exe, "-v", "error", "-show_entries", "format=duration",
                        "-of", "default=nw=1:nokey=1", str(path)],
                       capture_output=True, text=True)
    if p.returncode != 0:
        raise RuntimeError(f"ffprobe failed on {path}: {p.stderr.strip()}")
    return float(p.stdout.strip())


def language_for(path, override):
    if override:
        return override
    for parent in Path(path).resolve().parents:
        if parent.name in LANG_BY_DIR:
            return LANG_BY_DIR[parent.name]
    sys.exit(f"cannot derive a language from {path} (no en/ or fr/ parent). "
             f"Pass --language eng|fra. Auto-detect is never used: it mangles short French clips.")


# --- words -> cues -----------------------------------------------------------

def _f(obj, name, default=None):
    """Scribe words arrive as SDK objects; tolerate dicts so an SDK bump can't break this."""
    if isinstance(obj, dict):
        return obj.get(name, default)
    return getattr(obj, name, default)


def clean_words(raw):
    """Drop non-words, glue detached punctuation, fill missing timestamps, smooth speakers."""
    out = []
    for w in raw:
        if _f(w, "type", "word") != "word":
            continue  # spacing and audio_event never reach cue text: the checker regexes read it
        text = (_f(w, "text") or "").strip()
        if not text:
            continue
        start, end = _f(w, "start"), _f(w, "end")
        if PUNCT_ONLY.match(text) and out:
            out[-1]["text"] += text
            if end is not None:
                out[-1]["end"] = end
            continue
        if start is None or end is None:
            prev_end = out[-1]["end"] if out else 0.0
            start = end = prev_end
        out.append({"text": text, "start": float(start), "end": float(end),
                    "speaker": _f(w, "speaker_id") or "speaker_0"})
    _smooth_speakers(out)
    return out


def _smooth_speakers(words):
    """A run shorter than SMOOTH_RUN framed by one other speaker is jitter, not a turn."""
    i = 0
    while i < len(words):
        j = i
        while j < len(words) and words[j]["speaker"] == words[i]["speaker"]:
            j += 1
        before = words[i - 1]["speaker"] if i > 0 else None
        after = words[j]["speaker"] if j < len(words) else None
        if (j - i) < SMOOTH_RUN and before is not None and before == after:
            for k in range(i, j):
                words[k]["speaker"] = before
        i = j


def _text_of(cue):
    return " ".join(w["text"] for w in cue)


def _breaks(cue, w):
    prev = cue[-1]
    text = _text_of(cue)
    if w["speaker"] != cue[0]["speaker"]:
        return True                                        # a turn is a cue boundary
    if w["start"] - prev["end"] > SILENCE_GAP_S:
        return True
    if (prev["text"].endswith((".", "?", "!"))
            and len(text) >= SENTENCE_MIN_CHARS
            and w["text"][:1].isupper()):                  # guards "e.g.", "v0.2", "U.S."
        return True
    if (prev["end"] - cue[0]["start"] >= SOFT_CAP_S
            and w["start"] - prev["end"] > SOFT_CAP_GAP_S):
        return True
    if (w["end"] - cue[0]["start"] > HARD_CAP_S
            or len(text) + 1 + len(w["text"]) > HARD_CAP_CHARS):
        return True
    return False


def build_cues(words):
    cues, cur = [], []
    for w in words:
        if not cur:
            cur = [w]
        elif _breaks(cur, w):
            cues.append(cur)
            cur = [w]
        else:
            cur.append(w)
    if cur:
        cues.append(cur)
    return cues


def ts(sec):
    ms = int(round(sec * 1000))
    h, ms = divmod(ms, 3_600_000)
    m, ms = divmod(ms, 60_000)
    s, ms = divmod(ms, 1000)
    return f"{h:02d}:{m:02d}:{s:02d},{ms:03d}"


def render_srt(cues):
    blocks = []
    for n, cue in enumerate(cues, 1):
        start = cue[0]["start"]
        end = max(cue[-1]["end"], start + 0.001)
        blocks.append(f"{n}\n{ts(start)} --> {ts(end)}\n{_text_of(cue)}\n")
    return "\n".join(blocks)


def write_atomic(path, text):
    """A kill mid-write must leave no .srt at all — folder mode skips takes that have one."""
    path = Path(path)
    fd, tmp = tempfile.mkstemp(dir=path.parent, prefix=path.name, suffix=".tmp")
    try:
        with os.fdopen(fd, "w", encoding="utf-8", newline="\n") as fh:
            fh.write(text)
        os.replace(tmp, path)
    except BaseException:
        Path(tmp).unlink(missing_ok=True)
        raise


# --- ledger and credit meter --------------------------------------------------

def read_ledger():
    if not LEDGER.exists():
        return []
    with LEDGER.open(encoding="utf-8") as fh:
        return list(csv.DictReader(fh))


def append_ledger(row):
    LEDGER.parent.mkdir(parents=True, exist_ok=True)
    new = not LEDGER.exists()
    with LEDGER.open("a", encoding="utf-8", newline="") as fh:
        w = csv.DictWriter(fh, LEDGER_FIELDS)
        if new:
            w.writeheader()
        w.writerow(row)


def subscription(client):
    s = client.user.subscription.get()
    reset = _f(s, "next_character_count_reset_unix") or 0
    return {
        "tier": _f(s, "tier") or "?",
        "used": _f(s, "character_count") or 0,
        "limit": _f(s, "character_limit") or 0,
        "reset_unix": reset,
        "reset_iso": datetime.fromtimestamp(reset, timezone.utc).date().isoformat() if reset else "",
    }


def _num(row, field):
    try:
        return float(row[field])
    except (KeyError, TypeError, ValueError):
        return None


def period_rows(rows, sub):
    return [r for r in rows if r.get("reset_iso") == sub["reset_iso"]]


def period_spent(rows, sub):
    """Credits burned this period, live counter minus the counter before the first run.

    Deliberately NOT the sum of the per-row deltas. ElevenLabs bills STT with about
    one run of lag, so an individual row's delta is really the previous run's charge
    and is often 0 — measured on 2026-08-29, four runs of ~4.9 min logged deltas of
    0, 196, 0, 0 while the counter actually moved 392. Differencing the endpoints
    makes the lag cancel; only the final un-landed charge is missing, which biases
    the rate slightly low and shrinks with every run.
    """
    p = period_rows(rows, sub)
    if not p:
        return 0
    first = _num(p[0], "credits_before")
    return sub["used"] - first if first is not None else 0


def pick_meter(rows, sub, forced=None, plan_hours=None):
    """('credits'|'hours'|'unknown', detail) — measured from the ledger, never assumed.

    Scribe is billed per hour of audio; whether that also decrements character_count
    is undocumented, so the meter is whichever one the ledger has actually seen move.
    """
    minutes = period_minutes(rows, sub)
    spent = period_spent(rows, sub)
    if forced == "credits":
        return "credits", (spent / minutes if minutes else 0)
    if forced == "hours":
        return "hours", plan_hours
    if len(period_rows(rows, sub)) >= METER_MIN_ROWS and minutes > 0:
        if spent > 0:
            return "credits", spent / minutes
        # credits provably did not move; believe it only once the billing lag has passed
        last = period_rows(rows, sub)[-1]
        age = (datetime.now(timezone.utc) - datetime.fromisoformat(last["ts"])).total_seconds()
        if plan_hours and age >= HOURS_METER_LAG_S:
            return "hours", plan_hours
    return "unknown", None


def period_minutes(rows, sub):
    return sum((_num(r, "duration_s") or 0) / 60
               for r in rows if r.get("reset_iso") == sub["reset_iso"])


def credit_warning(meter, detail, rows, sub, upcoming_minutes):
    """Returns a warning string, or None. Best effort: it only sees runs made here."""
    if meter == "credits":
        remaining = sub["limit"] - sub["used"]
        need = (detail or 0) * WARN_MINUTES_AHEAD
        if remaining < need:
            return (f"{remaining:.0f} credits left, about {remaining / detail:.0f} more minutes "
                    f"of audio at {detail:.0f} credits/min")
        if sub["limit"] and remaining < sub["limit"] * WARN_LIMIT_FRACTION:
            return f"{remaining:.0f} credits left, under {WARN_LIMIT_FRACTION:.0%} of the limit"
    elif meter == "hours":
        used = period_minutes(rows, sub) + upcoming_minutes
        cap = detail * 60
        if used > cap * 0.8:
            return f"{used:.0f} min transcribed this period of about {cap:.0f} min on the plan"
    return None


# --- commands -----------------------------------------------------------------

def show_balance(client, args):
    sub = subscription(client)
    rows = read_ledger()
    meter, detail = pick_meter(rows, sub, args.meter, args.plan_hours)
    print(f"tier          {sub['tier']}")
    print(f"credits       {sub['used']:,} / {sub['limit']:,} used "
          f"({sub['limit'] - sub['used']:,} remaining)")
    print(f"resets        {sub['reset_iso'] or 'unknown'}")
    print(f"this period   {period_minutes(rows, sub):.1f} min transcribed, "
          f"{period_spent(rows, sub):,.0f} credits consumed, "
          f"{len(period_rows(rows, sub))} run(s) — ledger only")
    if meter == "credits":
        print(f"meter         credits ({detail:.0f} credits per audio minute this period)")
    elif meter == "hours":
        print(f"meter         hours ({detail:g} h plan; credits do not move for STT)")
    else:
        print("meter         unknown — no cost data yet; no warnings will fire")
    warn = credit_warning(meter, detail, rows, sub, 0)
    if warn:
        print(f"WARNING       {warn}")


def transcribe_one(client, path, out, lang, args, rows, sub_before, meter, detail):
    duration = ffprobe_duration(path)
    print(f"\n{path.name}  {duration / 60:.1f} min  {lang}")
    cache = Path(args.words_cache) if args.words_cache else None
    if cache and cache.exists():
        print(f"  words from cache {cache} (no upload)")
        words = json.loads(cache.read_text())
        cues = build_cues(words)
        write_atomic(out, render_srt(cues))
        print(f"  -> {out}  {len(cues)} cues, {len(words)} words")
        return
    if args.dry_run:
        if meter == "credits":
            print(f"  forecast ~{detail * duration / 60:,.0f} credits")
        elif meter == "hours":
            print(f"  forecast {duration / 60:.1f} min against the {detail:g} h plan")
        else:
            print("  forecast: no cost data yet")
        return
    with open(path, "rb") as fh:
        result = client.speech_to_text.convert(
            file=fh,
            model_id=MODEL_ID,
            language_code=lang,
            diarize=True,
            num_speakers=2,           # a maximum hint, not a pin; jitter is smoothed above
            tag_audio_events=False,
            timestamps_granularity="word",
            request_options={"timeout_in_seconds": REQUEST_TIMEOUT_S},
        )
    words = clean_words(_f(result, "words") or [])
    if not words:
        raise RuntimeError("Scribe returned no words")
    if cache:
        cache.write_text(json.dumps(words))
    cues = build_cues(words)
    write_atomic(out, render_srt(cues))
    speakers = sorted({w["speaker"] for w in words})
    print(f"  -> {out}  {len(cues)} cues, {len(words)} words, "
          f"speakers {', '.join(speakers)}, ends {cues[-1][-1]['end']:.1f}s")

    sub_after = subscription(client)
    append_ledger({
        "ts": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "file": path.name, "lang": lang, "duration_s": f"{duration:.1f}",
        "tier": sub_after["tier"], "credits_before": sub_before["used"],
        "credits_after": sub_after["used"], "delta": sub_after["used"] - sub_before["used"],
        "limit": sub_after["limit"], "reset_iso": sub_after["reset_iso"],
    })


def collect(targets, force):
    """Files given directly are always processed; a folder yields only takes with no .srt."""
    jobs = []
    for t in targets:
        p = Path(t)
        if p.is_dir():
            for m4a in sorted(p.glob("*.m4a")):
                if force or not m4a.with_suffix(".srt").exists():
                    jobs.append(m4a)
        elif p.is_file():
            jobs.append(p)
        else:
            sys.exit(f"not found: {t}")
    return jobs


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("targets", nargs="*", help=".m4a files, or a folder of them")
    ap.add_argument("--balance", action="store_true", help="credits and ledger totals, no upload")
    ap.add_argument("--force", action="store_true", help="overwrite an existing .srt")
    ap.add_argument("--dry-run", action="store_true", help="duration and forecast, no upload")
    ap.add_argument("--out", help="write the .srt here (single file only)")
    ap.add_argument("--language", help="eng / fra; default is derived from the en/ or fr/ parent")
    ap.add_argument("--strict", action="store_true", help="exit 2 on a credit warning")
    ap.add_argument("--meter", choices=["credits", "hours"], help="force the credit meter")
    ap.add_argument("--words-cache", help="load the word list from here if it exists (no upload, "
                                          "no charge), otherwise save it here after the call — so "
                                          "re-segmenting to tune the thresholds is free")
    ap.add_argument("--plan-hours", type=float,
                    default=float(os.environ.get(PLAN_HOURS_ENV) or 0) or None,
                    help=f"STT hours included in the plan (or ${PLAN_HOURS_ENV})")
    args = ap.parse_args()

    if not args.balance and not args.targets:
        ap.error("give at least one .m4a or folder, or --balance")
    if args.out and len(args.targets) != 1:
        ap.error("--out takes exactly one input file")

    client = make_client(resolve_key())
    if args.balance:
        show_balance(client, args)
        return 0

    jobs = collect(args.targets, args.force)
    if not jobs:
        print("nothing to do — every take already has an .srt (use --force to redo)")
        return 0

    rows = read_ledger()
    sub_before = subscription(client)
    meter, detail = pick_meter(rows, sub_before, args.meter, args.plan_hours)
    print(f"meter: {meter}" + (f" ({detail:.0f} credits/min)" if meter == "credits" else ""))

    upcoming = sum(ffprobe_duration(j) for j in jobs) / 60
    warn = credit_warning(meter, detail, rows, sub_before, upcoming)
    if warn:
        print(f"WARNING: {warn}", file=sys.stderr)
        if args.strict:
            return 2

    failed = []
    for path in jobs:
        out = Path(args.out) if args.out else path.with_suffix(".srt")
        if out.exists() and not args.force and not args.dry_run:
            print(f"\n{path.name}  SKIP — {out.name} exists (--force to overwrite)")
            continue
        try:
            lang = language_for(path, args.language)
            transcribe_one(client, path, out, lang, args, rows, sub_before, meter, detail)
        except Exception as e:            # batch mode keeps going; the summary carries the count
            print(f"  FAILED {path.name}: {e}", file=sys.stderr)
            failed.append(path.name)

    if len(jobs) > 1:
        print(f"\n{len(jobs) - len(failed)}/{len(jobs)} transcribed"
              + (f"; failed: {', '.join(failed)}" if failed else ""))
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())

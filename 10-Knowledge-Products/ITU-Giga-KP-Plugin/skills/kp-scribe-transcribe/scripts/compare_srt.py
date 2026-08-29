#!/usr/bin/env python3
"""Acceptance check for a Scribe SRT against the Whisper SRT of the same take.

    compare_srt.py <whisper.srt> <scribe.srt> [--audio take.m4a] [--cues cues.txt]
                   [--words words.json]

Two halves, and only the first is pass/fail:

  Segmenter fidelity (FAIL) — does the Scribe SRT time the video correctly?
  Cue boundaries are what the slide cue file is built from, so a shifted
  boundary is a shifted slide cut. Runtime, real silences landing on cue
  boundaries, cue caps, and no diarization or audio-event debris in cue text.

  The silence check reads --words (transcribe.py --words-cache), NOT the
  Whisper SRT. Measured on KP1 M1 1.1 and 1.2: Whisper's cue *end* times are
  not where speech stops, so its cue gaps are neither sound nor complete
  evidence of silence. On 1.2 the audio holds 15 silences >=0.6s and Whisper's
  SRT shows 0; on 1.1 it shows 3, of which only 2 sit on a real silence. So
  the Whisper pause diff below is a report line, never a FAIL.

  Transcript difference (report) — Scribe keeps disfluencies Whisper drops, so
  word count and filler density move. That is a judgement call about
  re-baselining srt_drift_check.py's 1.5/100w threshold, not a failure here.

Exit 1 if any fidelity check fails.
"""

import argparse
import importlib.util
import json
import re
import subprocess
import shutil
import sys
from pathlib import Path

PAUSE_GAP_S = 0.6        # == srt_drift_check.py and transcribe.py. Keep all three equal.
PAUSE_TOLERANCE_S = 0.5
SILENCE_ON_BOUNDARY_TOL_S = 0.05   # a real silence must land on a cue edge, not inside a cue
RUNTIME_TOLERANCE_S = 1.5
CUE_TOLERANCE_S = 0.5
HARD_CAP_S = 10.0
HARD_CAP_CHARS = 200

# reuse the checker's parser and filler list rather than keeping a second copy in sync
_checker = Path(__file__).resolve().parents[2] / "kp-audio-brief" / "scripts" / "srt_drift_check.py"
_spec = importlib.util.spec_from_file_location("srt_drift_check", _checker)
drift = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(drift)


def pauses(cues):
    """Where a pause starts — the same list srt_drift_check.py offers as slide-cut points."""
    return [a["end"] for a, b in zip(cues, cues[1:]) if b["start"] - a["end"] >= PAUSE_GAP_S]


def boundaries(cues):
    return sorted({c["start"] for c in cues} | {c["end"] for c in cues})


def nearest(value, candidates):
    return min((abs(value - c) for c in candidates), default=float("inf"))


def ffprobe_duration(path):
    exe = shutil.which("ffprobe") or "/usr/local/bin/ffprobe"
    out = subprocess.run([exe, "-v", "error", "-show_entries", "format=duration",
                          "-of", "default=nw=1:nokey=1", str(path)],
                         capture_output=True, text=True, check=True).stdout
    return float(out.strip())


def filler_per_100w(cues):
    text = " ".join(c["text"] for c in cues)
    low = text.lower()
    words = len(text.split())
    count = sum(low.count(f) for f in drift.FILLER)
    return words, count, count / max(words, 1) * 100


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("whisper")
    ap.add_argument("scribe")
    ap.add_argument("--audio", help="the .m4a, for the runtime check")
    ap.add_argument("--cues", help="a shipped cue file whose beats must survive")
    ap.add_argument("--words", help="transcribe.py --words-cache json; the real silence evidence")
    args = ap.parse_args()

    w_cues = drift.parse_srt(args.whisper)
    s_cues = drift.parse_srt(args.scribe)
    fails, notes = [], []

    # 1. runtime against the real audio
    if args.audio:
        dur = ffprobe_duration(args.audio)
        drift_s = abs(s_cues[-1]["end"] - dur)
        line = f"last cue ends {s_cues[-1]['end']:.1f}s vs audio {dur:.1f}s (Δ{drift_s:.1f}s)"
        (notes if drift_s <= RUNTIME_TOLERANCE_S else fails).append("RUNTIME — " + line)

    # 2. every real silence must be a cue boundary, or the cue author loses a cut point
    wp, sp = pauses(w_cues), pauses(s_cues)
    if args.words:
        words = json.loads(Path(args.words).read_text())
        real = [words[i - 1]["end"] for i in range(1, len(words))
                if words[i]["start"] - words[i - 1]["end"] >= PAUSE_GAP_S]
        edges = boundaries(s_cues)
        swallowed = [t for t in real if nearest(t, edges) > SILENCE_ON_BOUNDARY_TOL_S]
        if swallowed:
            fails.append(f"SILENCE SWALLOWED — {len(swallowed)} of {len(real)} real silence(s) "
                         f"≥{PAUSE_GAP_S}s fall inside a cue instead of on its edge: "
                         + ", ".join(f"{t:.1f}" for t in swallowed[:8]))
        else:
            notes.append(f"all {len(real)} real silence(s) ≥{PAUSE_GAP_S}s land on a cue boundary")
        notes.append(f"whisper reports {len(wp)} pause(s) against {len(real)} real — "
                     f"{sum(1 for t, in [(x,) for x in wp] if nearest(t, real) <= PAUSE_TOLERANCE_S)}"
                     f" of them backed by one (its cue ends are not where speech stops)")
    else:
        notes.append("no --words given; skipping the silence check (the only sound pause test)")
    notes.append(f"pauses ≥{PAUSE_GAP_S}s — whisper {len(wp)}, scribe {len(sp)} "
                 "(report only: whisper's cue gaps are not evidence of silence)")

    # 3. a shipped cue file's beats must still land on a boundary
    if args.cues:
        b = boundaries(s_cues)
        off = []
        for m in re.finditer(r"^\s*(\d+):(\d\d)\b", Path(args.cues).read_text(), re.M):
            t = int(m.group(1)) * 60 + int(m.group(2))
            if nearest(t, b) > CUE_TOLERANCE_S:
                off.append(f"{m.group(0).strip()}(Δ{nearest(t, b):.1f}s)")
        if off:
            fails.append(f"CUE BEATS — {len(off)} cue time(s) more than ±{CUE_TOLERANCE_S}s from "
                         "any scribe boundary: " + ", ".join(off[:8]))
        else:
            notes.append(f"all cue times land within ±{CUE_TOLERANCE_S}s of a scribe boundary")

    # 4. caps and debris — the cue text feeds the checker's regexes
    long_cues = [c for c in s_cues if c["end"] - c["start"] > HARD_CAP_S]
    wide_cues = [c for c in s_cues if len(c["text"]) > HARD_CAP_CHARS]
    if long_cues:
        fails.append(f"HARD CAP — {len(long_cues)} cue(s) longer than {HARD_CAP_S}s")
    if wide_cues:
        fails.append(f"HARD CAP — {len(wide_cues)} cue(s) over {HARD_CAP_CHARS} chars")
    debris = [c for c in s_cues if re.search(r"\[speaker_\w+\]|\(\s*[^)]*\s*\)", c["text"])]
    if debris:
        fails.append(f"DEBRIS — {len(debris)} cue(s) carry a speaker label or audio-event token: "
                     + repr(debris[0]["text"][:60]))

    # 5. transcript difference — reported, never failed on
    ww, wf, wp100 = filler_per_100w(w_cues)
    sw, sf, sp100 = filler_per_100w(s_cues)
    notes.append(f"words — whisper {ww}, scribe {sw} ({sw - ww:+d})")
    notes.append(f"filler/100w — whisper {wp100:.1f} ({wf}), scribe {sp100:.1f} ({sf}); "
                 f"threshold 1.5" + ("  <-- flips, decide on a re-baseline"
                                     if (wp100 <= 1.5) != (sp100 <= 1.5) else ""))
    notes.append(f"cues — whisper {len(w_cues)}, scribe {len(s_cues)}")

    print(f"=== scribe vs whisper — {args.scribe} ===\n")
    for f in fails:
        print("  FAIL  " + f)
    for n in notes:
        print("  ok    " + n)
    print(f"\n{len(fails)} fidelity fail(s)")
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())

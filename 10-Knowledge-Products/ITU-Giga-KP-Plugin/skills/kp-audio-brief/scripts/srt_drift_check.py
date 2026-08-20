#!/usr/bin/env python3
"""Audit a NotebookLM take (.srt) against the KP audio spec.

Usage:
    python3 srt_drift_check.py <audio.srt> [--target 240] [--tolerance 15]
                               [--deck deck.pptx]

Mechanical checks only — the things that are cheap to count and that were
wrong in every unbriefed NotebookLM take so far. Judgement calls (framing,
register, invented content) still need a read; this script tells you where
to look and gives you the runtime and filler numbers to argue with.

Exit code 1 if any FAIL fires, so it can gate a build.
"""

import argparse
import re
import sys
from collections import Counter

# --- the failure classes observed in unbriefed takes -------------------------

BANNED_PHRASES = [
    # podcast furniture
    "deep dive", "welcome to", "unpacking", "our sources", "the sources say",
    "here's where it gets", "here is where it gets", "buckle up",
    "let's get into it", "stick around",
    # reflective-outro tic
    "raises a fascinating question", "for you to consider", "think about",
    "look around at", "keep that in mind",
    # consumer-outrage register
    "broken", "chaos", "held hostage", "hostage", "extortionate", "nightmare",
    "insane", "crazy",
]

FILLER = [
    "you know", "i mean", "like,", "basically", "totally", "sort of",
    "kind of", "right?", "wow", "oh absolutely", "man,", "gosh", "yeah,",
    "actually,", "literally",
]

# term -> (wrong forms, correct form)
TERMINOLOGY = [
    (r"\bPRA framework\b", "PAERA (not 'PRA')"),
    (r"\bPara\b|\bPaira\b|\bPiera\b", "PAERA — spelled P-A-E-R-A on first mention"),
    (r"EU[- ]European Interoperability", "'the European Interoperability Framework'"),
    (r"\bask[- ]once\b", "'the once-only principle'"),
    (r"\bregistr(y|ies)\b", "'register' / 'registers' (KP house term)"),
]

# citizen-at-the-counter framing — the inversion that matters most
CITIZEN_FRAMING = [
    r"\byou (?:have )?(?:ever )?stood at\b",
    r"\byou(?:'re| are) (?:standing|queuing|waiting) (?:at|in)\b",
    r"\byour name, your address\b",
    r"\bfilling out your\b",
    r"\bthe next time you\b",
    r"\bwe(?:'ve| have) all been there\b",
]

REQUIRED_SIGNPOSTS = [
    (r"\bsign one\b", "sign one"),
    (r"\bsign two\b", "sign two"),
    (r"\bsign three\b", "sign three"),
    (r"\bsign four\b", "sign four"),
]


def parse_srt(path):
    text = open(path, encoding="utf-8-sig").read()
    blocks = re.split(r"\n\s*\n", text.strip())
    cues = []
    for b in blocks:
        lines = [l for l in b.splitlines() if l.strip()]
        if len(lines) < 2:
            continue
        m = re.search(r"(\d+):(\d+):(\d+)[,.](\d+)\s*-->\s*(\d+):(\d+):(\d+)[,.](\d+)",
                      "\n".join(lines[:2]))
        if not m:
            continue
        g = [int(x) for x in m.groups()]
        start = g[0] * 3600 + g[1] * 60 + g[2] + g[3] / 1000
        end = g[4] * 3600 + g[5] * 60 + g[6] + g[7] / 1000
        body = " ".join(lines[2:]) if not lines[1].strip().isdigit() else " ".join(lines[2:])
        cues.append({"start": start, "end": end, "text": body.strip()})
    return cues


def mmss(sec):
    return f"{int(sec) // 60}:{int(sec) % 60:02d}"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("srt")
    ap.add_argument("--target", type=int, default=240, help="target runtime, seconds")
    ap.add_argument("--tolerance", type=int, default=15, help="± seconds allowed")
    args = ap.parse_args()

    cues = parse_srt(args.srt)
    if not cues:
        sys.exit(f"no cues parsed from {args.srt}")
    full = " ".join(c["text"] for c in cues)
    low = full.lower()
    runtime = cues[-1]["end"]
    words = len(full.split())

    fails, warns, notes = [], [], []

    # 1. runtime
    lo, hi = args.target - args.tolerance, args.target + args.tolerance
    line = (f"runtime {mmss(runtime)} vs target {mmss(args.target)} "
            f"(±{args.tolerance}s)")
    if runtime > hi:
        fails.append(f"OVER — {line}; cut {int(runtime - args.target)}s")
    elif runtime < lo:
        fails.append(f"UNDER — {line}; add {int(args.target - runtime)}s")
    else:
        notes.append("runtime OK — " + line)
    notes.append(f"{words} words · {words / (runtime / 60):.0f} wpm "
                 f"(brief a slower 130–150 wpm for ESL audiences)")

    # 2. tail — the reflective outro usually lives in the last 45s
    tail = " ".join(c["text"] for c in cues if c["start"] > runtime - 45).lower()
    tail_hits = [p for p in BANNED_PHRASES if p in tail]
    if tail_hits:
        fails.append("REFLECTIVE OUTRO in the final 45s — "
                     + ", ".join(repr(h) for h in tail_hits)
                     + "; the take must end on the series handoff + one sources line")

    # 3. banned phrases anywhere
    hits = Counter()
    for p in BANNED_PHRASES:
        n = low.count(p)
        if n:
            hits[p] = n
    if hits:
        fails.append("BANNED PHRASES — "
                     + ", ".join(f"{k}×{v}" for k, v in hits.most_common()))

    # 4. filler density
    fcount = sum(low.count(f) for f in FILLER)
    per100 = fcount / max(words, 1) * 100
    if per100 > 1.5:
        fails.append(f"FILLER — {fcount} markers, {per100:.1f} per 100 words "
                     f"(brief target: under 1.5)")
    else:
        notes.append(f"filler OK — {fcount} markers, {per100:.1f}/100w")

    # 5. terminology
    for pat, fix in TERMINOLOGY:
        if re.search(pat, full, re.I):
            fails.append(f"TERMINOLOGY — say {fix}")

    # 6. framing inversion
    fr = [p for p in CITIZEN_FRAMING if re.search(p, low)]
    if fr:
        fails.append(f"FRAMING — {len(fr)} citizen-at-the-counter construction(s); "
                     "the listener is the official who runs these systems")

    # 7. numbered signposts (cue-ability)
    missing = [label for pat, label in REQUIRED_SIGNPOSTS
               if not re.search(pat, low)]
    if missing:
        warns.append("SIGNPOSTS — not numbered aloud: " + ", ".join(missing)
                     + " (only applies to videos with a four-signs slide)")

    # 8. silence gaps — where the slide cuts can land
    gaps = []
    for a, b in zip(cues, cues[1:]):
        g = b["start"] - a["end"]
        if g >= 0.6:
            gaps.append((a["end"], g))
    notes.append(f"{len(gaps)} pause(s) ≥0.6s available as slide-cut points: "
                 + ", ".join(f"{mmss(t)}({g:.1f}s)" for t, g in gaps[:12])
                 + (" …" if len(gaps) > 12 else ""))

    # --- report
    print(f"=== audio drift check — {args.srt} ===\n")
    for f in fails:
        print("  FAIL  " + f)
    for w in warns:
        print("  WARN  " + w)
    for n in notes:
        print("  ok    " + n)
    print(f"\n{len(fails)} fail, {len(warns)} warn")
    if fails:
        print("\nTwo or more FAILs: regenerate rather than patch. NotebookLM output "
              "is cheaper to re-roll than to edit, and re-rolls converge once the "
              "notebook holds only the audio brief.")
    sys.exit(1 if fails else 0)


if __name__ == "__main__":
    main()

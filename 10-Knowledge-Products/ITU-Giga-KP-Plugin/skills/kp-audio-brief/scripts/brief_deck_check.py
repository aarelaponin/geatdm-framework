#!/usr/bin/env python3
"""Check an audio brief's §2 against the deck it was written from.

The brief and the deck are two hands writing the same thing, so they drift: a deck is rebuilt,
slides merge, and §2 keeps budgeting for a slide that no longer exists — which NotebookLM then
narrates. This is the brief-side twin of the deck's vo_diff.py.

Checks, per brief:
  * one `### Slide N — …` heading per deck slide, numbered 1..N with none missing or doubled
  * the segment clocks tile without gaps or overlaps, from 0:00 to §0's total runtime
  * §0's slide count matches the deck's

    python3 brief_deck_check.py <lang_dir>          # every subtopic with a brief
    python3 brief_deck_check.py <lang_dir> 1.3      # one
"""
import re
import sys
from pathlib import Path

from pptx import Presentation

BRIEF_RE = re.compile(r"^(KP\d+_M\d+_(\d+\.\d+))_AudioBrief_v0\.(\d+)\.md$")
SLIDE_RE = re.compile(r"^### Slide (\d+) — .*?·\s*(\d+):(\d{2})[–-](\d+):(\d{2})", re.M)
RUNTIME_RE = re.compile(r"total runtime.*?(\d+)\s*minutes?(?:\s*(\d+)\s*seconds?)?", re.I)
DECKCOUNT_RE = re.compile(r"companion deck.*?(\d+)\s*slides", re.I)


def newest_briefs(nlm):
    best = {}
    for f in sorted(nlm.glob("*.md")):
        m = BRIEF_RE.match(f.name)
        if m and (m.group(2) not in best or int(m.group(3)) > best[m.group(2)][1]):
            best[m.group(2)] = (f, int(m.group(3)))
    return best


def check(sub, brief, decks):
    text = brief.read_text(encoding="utf-8")
    deck = sorted(decks.glob(f"*_{sub}_Deck_v0.*.pptx"))
    deck = [d for d in deck if not d.name.startswith("~$")]
    if not deck:
        return [f"{sub}: no deck in {decks}"]
    slides = len(Presentation(deck[-1]).slides)
    bad = []

    segs = SLIDE_RE.findall(text)
    nums = [int(s[0]) for s in segs]
    if nums != list(range(1, slides + 1)):
        bad.append(f"{sub}: §2 covers slides {nums}, deck {deck[-1].name} has {slides}")

    m = RUNTIME_RE.search(text)
    total = int(m.group(1)) * 60 + int(m.group(2) or 0) if m else None
    if total is None:
        bad.append(f"{sub}: §0 has no parseable total runtime")
    m = DECKCOUNT_RE.search(text)
    if m and int(m.group(1)) != slides:
        bad.append(f"{sub}: §0 says {m.group(1)} slides, deck has {slides}")

    prev = 0
    for n, a, b, c, d in segs:
        start, end = int(a) * 60 + int(b), int(c) * 60 + int(d)
        if start != prev:
            bad.append(f"{sub} slide {n}: starts {start}s, previous segment ended {prev}s")
        if end <= start:
            bad.append(f"{sub} slide {n}: ends at or before it starts")
        prev = end
    if total is not None and segs and prev != total:
        bad.append(f"{sub}: segments end at {prev}s, §0 runtime is {total}s")
    return bad


def main(argv):
    lang = Path(argv[1]).resolve()
    briefs = newest_briefs(lang / "notebooklm")
    if len(argv) > 2:
        briefs = {k: v for k, v in briefs.items() if k == argv[2]}
        if not briefs:
            sys.exit(f"no brief for {argv[2]} in {lang / 'notebooklm'}")
    bad = []
    for sub, (path, ver) in sorted(briefs.items()):
        errs = check(sub, path, lang / "decks")
        print(f"{'FAIL' if errs else 'ok  '}  {sub}  v0.{ver}  {path.name}")
        bad += errs
    for e in bad:
        print("  -", e)
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))

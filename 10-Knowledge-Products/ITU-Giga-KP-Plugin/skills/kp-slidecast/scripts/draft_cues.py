#!/usr/bin/env python3
"""Draft a cue file by matching the take's transcript to the deck's slides.

The narration is a remix of the script, not a read of it, so cue times cannot come from the
deck. They can come from the take: each slide has vocabulary distinctive to it, and the hosts
work through the slides in order, so the first sustained appearance of a slide's terms marks
where that slide should come up. The cut is then snapped back to the nearest real pause, so
slides change on a breath rather than mid-sentence.

Output is a DRAFT. Check it against the audio before assembling — `kp-slidecast` Step 1.

    python3 draft_cues.py <deck.pptx> <take.srt> [-o cues.txt]
"""
import argparse
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2] / "kp-audio-brief" / "scripts"))
from coverage_check import slide_terms                                    # noqa: E402
from srt_drift_check import parse_srt                                     # noqa: E402

from pptx import Presentation                                             # noqa: E402

WORD = re.compile(r"[a-z][a-z-]{3,}")
PAUSE_S = 0.6           # == kp-scribe-transcribe's segmenter gap
SOURCES_HOLD_S = 8.0    # the silent Sources bookend at the end


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("deck")
    ap.add_argument("srt")
    ap.add_argument("-o", "--out")
    a = ap.parse_args()

    prs = Presentation(a.deck)
    slides = slide_terms(prs)
    cues = parse_srt(a.srt)
    end = cues[-1]["end"]
    words = [set(WORD.findall(c["text"].lower())) for c in cues]

    # Align cues to slides with a monotonic DP rather than spotting a first match. The hosts
    # work through the slides in order, so this is a sequence-alignment problem: every cue is
    # assigned to a slide, assignments never go backwards, and the total affinity is maximised.
    # First-match scoring put slide 4 at "and then finally, sign four" — an incidental early
    # hit — because it only ever looked at one cue at a time.
    # The title card is body[0] and part of the alignment: the hosts' opener restates its
    # title and message, so the DP is what decides when the first content slide arrives —
    # which is the whole point. Only the silent Sources bookend is placed by hand.
    body = slides[:-1]
    S, N = len(body), len(cues)
    aff = [[len(words[i] & body[s][2]) for s in range(S)] for i in range(N)]

    NEG = float("-inf")
    dp = [[NEG] * S for _ in range(N)]
    back = [[0] * S for _ in range(N)]
    dp[0][0] = aff[0][0]
    for i in range(1, N):
        for s in range(S):
            stay = dp[i - 1][s]
            adv = dp[i - 1][s - 1] if s else NEG
            # a small cost to advance stops the path from sliding forward on stray words
            if adv - 0.5 > stay:
                dp[i][s], back[i][s] = adv + aff[i][s], s - 1
            else:
                dp[i][s], back[i][s] = stay + aff[i][s], s

    s_idx = max(range(S), key=lambda s: dp[N - 1][s])
    path = [0] * N
    for i in range(N - 1, -1, -1):
        path[i] = s_idx
        s_idx = back[i][s_idx]

    starts = [0.0]                                       # the title card is always 0:00
    for s in range(1, S):
        first = next((i for i in range(N) if path[i] == s), None)
        if first is None:
            starts.append(starts[-1] + 1.0)
            continue
        t = cues[first]["start"]
        for j in range(first, 0, -1):                    # snap back to a real pause
            if cues[j]["start"] - cues[j - 1]["end"] >= PAUSE_S:
                t = cues[j]["start"] - 0.15
                break
        starts.append(max(t, starts[-1] + 1.0))

    starts.append(max(end - SOURCES_HOLD_S, starts[-1] + 1.0))   # the silent Sources slide

    lines, weak = [], []
    for (n, title, _), t in zip(slides, starts):
        title = title.splitlines()[0].strip()[:46]
        lines.append(f"{int(t)//60}:{int(t)%60:02d}   # slide {n} — {title}")
        if n > 1 and t - starts[n - 2] < 5:
            weak.append(n)
    out = "\n".join(lines) + "\n"
    if a.out:
        Path(a.out).write_text(out)
        print(f"-> {a.out}")
    print(out, end="")
    if weak:
        print(f"\n!! slides {weak} are under 5 s apart — check these against the audio")
    return 0


if __name__ == "__main__":
    sys.exit(main())

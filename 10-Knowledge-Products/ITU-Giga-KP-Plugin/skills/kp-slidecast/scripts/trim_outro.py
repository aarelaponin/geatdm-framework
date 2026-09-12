#!/usr/bin/env python3
"""Cut the trailing reflective outro off a NotebookLM take, at a real pause.

Every take this format produces ends by turning to the listener — "which initiative could you
bring to life?", "how might this apply to our daily lives?" — and none has ever said the brief's
sources line. Five brief revisions did not move it, so it is treated as a property of the
generator and removed in the build instead of argued with in the source.

This is NOT the banned "edit the audio" fix: it derives the cut from the take's own SRT, writes
a NEW version rather than modifying the take of record, and re-runs identically after every
re-roll. The take of record stays exactly as generated.

    python3 trim_outro.py <take.srt>                    # writes the next free _Audio_v0.N.m4a + .srt
    python3 trim_outro.py <take.srt> --deck <deck.pptx> # cut the whole show-open, not just 4 cues
    python3 trim_outro.py <take.srt> --dry-run
"""
import argparse
import re
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2] / "kp-audio-brief" / "scripts"))
from coverage_check import slide_terms                                    # noqa: E402
from srt_drift_check import REFLECTIVE_CLOSE, parse_srt, mmss            # noqa: E402

WORD_RE = re.compile(r"[a-z][a-z-]{3,}")

TAIL_WINDOW_S = 75          # only ever look in the last 75 s; the outro lives there
HEAD_WINDOW_S = 30          # and the show-open in the first 30 s
MIN_PAUSE_S = 0.35          # cut on a breath, not mid-word

# The format opens by announcing itself — "welcome to the Deep Dive", "let's unpack this",
# "today we're looking at". Same problem as the outro and same fix: it is a property of the
# generator, not of the brief, and it is always the first turn or two.
SHOW_OPEN = [
    r"\bwelcome (?:to|back)\b", r"\bdeep dive\b", r"\blet'?s unpack\b", r"\bunpacking\b",
    r"\btoday,? we(?:'re| are)\b", r"\bwe(?:'re| are) (?:looking at|diving into|exploring)\b",
    r"\bokay,? so\b.{0,30}\bstart\b",
]


SECOND_PERSON = [
    r"\byou(?:r|rself)?\b", r"\bthink about\b", r"\bimagine\b", r"\bask yourself\b",
    r"\bcloser to home\b", r"\bfor you listening\b", r"\bin your own\b",
]


# The take's last line is boilerplate the brief asks for. It is not content, and the outro
# hides behind it: on 2.4 the closing turn ran cues 60-62 and the sources line was cue 63, so a
# strict walk back from the end stopped on the first cue and found nothing.
SOURCES_LINE = re.compile(r"\bsources are in the (?:video )?description\b", re.I)


def turns_to_listener(text):
    """A question, or an announced closing thought.

    Deliberately NOT bare second person: the brief REQUIRES "in your ministry", "your programme",
    "your vendor" throughout the content, so walking back over every cue containing "you" would
    eat the recap. A question mark or an explicit reflective closer is what marks the turn.
    """
    low = text.lower()
    return text.rstrip().endswith("?") or any(re.search(p, low) for p in REFLECTIVE_CLOSE)


def _to_sentence_start(cues, i):
    """Walk an outro cut back to a sentence boundary.

    The closing turn often begins mid-sentence — 5.5's "It\u2019s about owning the capability, not
    just renting the talent, / which leaves you with a pretty fascinating thought to mull over"
    is one sentence across two cues, and only the second carries the reflective marker. Cutting
    at the marker leaves the take ending on a comma.
    """
    while i > 0 and not cues[i - 1]["text"].rstrip().endswith((".", "!", "?")):
        i -= 1
    return i


def outro_start(cues, terms=None):
    """Index of the first cue belonging to the closing turn, or None.

    Without the deck this is the original rule: the first REFLECTIVE_CLOSE match or question in
    the tail window, abandoned if real content follows it.

    With the deck, it works from the END backwards instead, because the first match in a 75 s
    window is usually a mid-content question — on 4.4 it was "the third sign off, right?" at
    224 s, which the reset rule then discarded, leaving the actual outro 30 s later uncut. The
    closing turn is the run of cues at the end that says nothing about the subject and turns to
    the listener: "think about your own work", "so for you listening, think about it", "if you
    mapped your own organization's operations today". Deck vocabulary separates that from
    content, exactly as it does for the show-open at the other end.

    Deck vocabulary alone is not enough, though. The show-open is furniture — it says nothing
    about the subject — but the closing turn often aims the subject AT the listener: "how many
    fragmented fourth lists are hiding in your project?" is nine-tenths deck vocabulary, so the
    walk-back stopped on the very last cue and cut nothing. On the 8 Sep batch that left the
    closing turn standing in 5 of 6 takes. So the walk also steps over a cue that turns to the
    listener, not only one that is furniture.
    """
    end = cues[-1]["end"]
    if terms is not None:
        # An announced closing thought is unambiguous: everything after "I want to leave you with
        # a thought to mull over" is outro, including the cues that reuse deck vocabulary heavily
        # enough to read as content. The walk cannot see those — on 4.6 it stopped one cue in and
        # would have left half a sentence on air.
        for k, c in enumerate(cues):
            if c["start"] >= end - TAIL_WINDOW_S and k > 0 \
                    and any(re.search(p, c["text"].lower()) for p in REFLECTIVE_CLOSE):
                return _to_sentence_start(cues, k) or k
        i = stop = len(cues)
        while i > 0 and SOURCES_LINE.search(cues[i - 1]["text"]):
            i = stop = i - 1
        while i > 0 and cues[i - 1]["start"] >= end - TAIL_WINDOW_S \
                and (is_furniture(cues[i - 1]["text"], terms)
                     or turns_to_listener(cues[i - 1]["text"])):
            i -= 1
        # Never cut mid-sentence — 4.7 v0.16's closing question ran across two cues and only the
        # second ended in "?", so the walk stopped and left the take ending on "…evaluates
        # future policy".
        i = _to_sentence_start(cues, i)
        if i == stop or i == 0:
            # i == 0 means every cue back to the start read as furniture, which is not an outro —
            # it is a take with vocabulary the deck does not share. Cutting there would delete the
            # whole recording.
            return None
        # Only cut a tail that actually turns to the listener. A plain closing sentence that
        # happens to reuse no deck vocabulary is the recap landing, not an outro.
        tail = " ".join(c["text"] for c in cues[i:]).lower()
        if not any(re.search(p, tail) for p in SECOND_PERSON + REFLECTIVE_CLOSE) \
                and not cues[-1]["text"].rstrip().endswith("?"):
            return None
        return i

    cut = None
    for i, c in enumerate(cues):
        if c["start"] < end - TAIL_WINDOW_S:
            continue
        low = c["text"].lower()
        hit = any(re.search(p, low) for p in REFLECTIVE_CLOSE) or c["text"].rstrip().endswith("?")
        if hit:
            cut = i if cut is None else cut
        elif cut is not None and i - cut > 2:
            cut = None          # a real content cue after it — that was not the outro
    return cut


def is_furniture(text, terms):
    """A cue that says nothing about the subject.

    The deck's own distinctive vocabulary is the test. A cue carrying none of it is the format
    talking about itself — a teaser, a self-introduction, an exchange of pleasantries — and a cue
    carrying some of it is the video starting, however it is phrased.
    """
    words = set(WORD_RE.findall(text.lower()))
    return not (words & terms)


def open_end(cues, terms=None):
    """Index of the first cue of real content, or None if the take opens clean."""
    cut = None
    for i, c in enumerate(cues):
        if c["start"] > HEAD_WINDOW_S:
            break
        if any(re.search(p, c["text"].lower()) for p in SHOW_OPEN):
            cut = i + 1

    if cut is None:
        return None

    if terms is None:
        # Without the deck there is nothing to tell furniture from content, so keep the original
        # bound: never eat more than the first four cues. Six was tried and was wrong — on 1.3 it
        # cut 21.6 s and took the video's opening argument with it.
        return cut if cut <= 4 else None

    # With the deck, the bound is the content itself rather than a count. Walk back from the
    # show-open marker while the cues say nothing about the subject, and stop at the first one
    # that does. Anchoring on the marker alone was tried and over-cut: it dropped 4.1's "Meet
    # Progressa — it is a demonstration country …" and 2.5's "module two, video 2.5", which are
    # content and the brief's required cold open. Modules 2-4 open with a 30 s teaser BEFORE the
    # self-introduction, so a four-cue cap gives up on them entirely; this keeps both cases right.
    start = cut
    while start > 0 and is_furniture(cues[start - 1]["text"], terms):
        start -= 1
    return cut if start == 0 else None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("srt")
    ap.add_argument("--deck", help="the subtopic deck; lets the head cut reach past four cues "
                                   "by telling the show-open from the video's own opening")
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args()

    srt = Path(a.srt)
    cues = parse_srt(srt)
    terms = None
    if a.deck:
        from pptx import Presentation
        terms = set().union(*(t for _, _, t in slide_terms(Presentation(a.deck))))
    i = outro_start(cues, terms)
    j = open_end(cues, terms)
    if i is None and j is None:
        print(f"{srt.name}: nothing to trim — opens and ends on content")
        return 0

    # back up to the pause before the outro so the cut lands on a breath
    if i is None:
        cut = cues[-1]["end"]
    else:
        cut = cues[i]["start"]
        prev_end = cues[i - 1]["end"] if i else 0.0
        cut = (cut + prev_end) / 2 if cut - prev_end >= MIN_PAUSE_S else prev_end
    # and forward past the show-open, landing on the start of the first real cue
    start = 0.0
    if j is not None:
        start = max(0.0, cues[j]["start"] - 0.15)

    m4a = srt.with_suffix(".m4a")
    stem, ver = re.match(r"(.*_Audio_v0\.)(\d+)$", m4a.stem).groups()
    n = max(int(re.search(r"v0\.(\d+)", f.stem).group(1))
            for f in m4a.parent.glob(f"{stem}*.m4a")) + 1
    out = m4a.with_name(f"{stem}{n}.m4a")

    print(f"{m4a.name}  {mmss(cues[-1]['end'])} -> {mmss(cut - start)}  "
          f"(head {start:.1f}s, tail {cues[-1]['end'] - cut:.1f}s)")
    if j is not None:
        print(f"  dropped open: {' '.join(c['text'] for c in cues[:j])[:120]!r}")
    if i is not None:
        print(f"  dropped close: {' '.join(c['text'] for c in cues[i:])[:120]!r}")
    print(f"  -> {out.name}")
    if a.dry_run:
        return 0

    subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", f"{start:.3f}", "-i", str(m4a),
                    "-t", f"{cut - start:.3f}", "-c:a", "aac", "-b:a", "128k", str(out)],
                   check=True)
    # the SRT is truncated to match, so cue authoring reads the trimmed take
    def ts(x):
        return f"{int(x)//3600:02d}:{int(x)//60%60:02d}:{x%60:06.3f}".replace(".", ",")

    keep = cues[j or 0:i if i is not None else len(cues)]
    with out.with_suffix(".srt").open("w", encoding="utf-8") as fh:
        for k, c in enumerate(keep, 1):
            fh.write(f"{k}\n{ts(c['start'] - start)} --> "
                     f"{ts(min(c['end'], cut) - start)}\n{c['text']}\n\n")
    print(f"  -> {out.with_suffix('.srt').name}  ({len(keep)} cues)")
    return 0


if __name__ == "__main__":
    sys.exit(main())

#!/usr/bin/env python3
"""Self-check for the words -> cues segmenter.  Run: python3 test_segmenter.py

Covers what actually breaks the downstream contract: a cue that outlives the
hard cap, a break the checker would report as a pause that is not one, and
diarization or audio-event debris reaching the cue text.
"""

import importlib.util
import sys
from pathlib import Path

_spec = importlib.util.spec_from_file_location("t", Path(__file__).with_name("transcribe.py"))
t = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(t)


def w(text, start, end, speaker="s0", type_="word"):
    return {"text": text, "start": start, "end": end, "speaker_id": speaker, "type": type_}


def texts(cues):
    return [t._text_of(c) for c in cues]


# --- pre-pass ---------------------------------------------------------------

raw = [w("Hello", 0.0, 0.4), w(",", 0.4, 0.45), w("world", 0.45, 0.9),
       w("(laughs)", 0.9, 1.2, type_="audio_event"), w(" ", 1.2, 1.2, type_="spacing")]
cleaned = t.clean_words(raw)
assert [x["text"] for x in cleaned] == ["Hello,", "world"], cleaned
assert cleaned[0]["end"] == 0.45, "glued punctuation extends the word it attaches to"

# a word with no timestamps collapses onto the previous end rather than crashing
cleaned = t.clean_words([w("a", 0.0, 1.0), w("b", None, None), w("c", 1.2, 1.5)])
assert cleaned[1]["start"] == cleaned[1]["end"] == 1.0, cleaned

# a two-word run framed by one speaker is jitter; a three-word run is a turn
jitter = t.clean_words([w("one", 0, 1, "A"), w("two", 1, 2, "B"), w("three", 2, 3, "B"),
                        w("four", 3, 4, "A")])
assert [x["speaker"] for x in jitter] == ["A"] * 4, jitter
turn = t.clean_words([w("one", 0, 1, "A"), w("two", 1, 2, "B"), w("three", 2, 3, "B"),
                      w("four", 3, 4, "B"), w("five", 4, 5, "A")])
assert [x["speaker"] for x in turn] == ["A", "B", "B", "B", "A"], turn

# --- break rules -------------------------------------------------------------

# speaker change
cues = t.build_cues(t.clean_words([w("hi", 0, 0.5, "A"), w("yes", 0.6, 1.0, "B"),
                                   w("indeed", 1.0, 1.4, "B"), w("quite", 1.4, 1.8, "B")]))
assert texts(cues) == ["hi", "yes indeed quite"], texts(cues)

# silence under the checker's pause constant does not break; over it does
tight = t.build_cues(t.clean_words([w("a", 0, 1.0), w("b", 1.5, 2.0)]))
assert len(tight) == 1, "a gap under the pause constant is not a break"
wide = t.build_cues(t.clean_words([w("a", 0, 1.0), w("b", 1.7, 2.0)]))
assert len(wide) == 2, "a gap over the pause constant breaks"

# a full stop only breaks once the cue is long enough and the next word is capitalised
short = t.build_cues(t.clean_words([w("Right.", 0, 0.5), w("So", 0.5, 0.8)]))
assert len(short) == 1, "a short cue does not break on a full stop"
abbrev = t.build_cues(t.clean_words(
    [w("The register holds every citizen record in e.g.", 0, 3.0), w("estonia", 3.0, 3.5)]))
assert len(abbrev) == 1, "lowercase next word means the stop was an abbreviation"

# hard caps are evaluated before the append, so they are never exceeded
long_words = [w(f"word{i}", i * 0.4, i * 0.4 + 0.4) for i in range(60)]
cues = t.build_cues(t.clean_words(long_words))
assert all(c[-1]["end"] - c[0]["start"] <= t.HARD_CAP_S for c in cues), "cue over the time cap"
assert all(len(t._text_of(c)) <= t.HARD_CAP_CHARS for c in cues), "cue over the char cap"

# --- SRT shape ---------------------------------------------------------------

srt = t.render_srt(t.build_cues(t.clean_words(
    [w("Hello", 0, 0.4, "A"), w(",", 0.4, 0.45, "A"), w("world", 0.45, 1.0, "A"),
     w("Indeed", 2.0, 2.6, "B")])))
assert srt.startswith("1\n00:00:00,000 --> 00:00:01,000\nHello, world\n"), repr(srt)
assert srt.endswith("\n"), "trailing newline after the last block"
assert "[speaker" not in srt and "(" not in srt

# a zero-length cue still gets an end after its start
one = t.render_srt([[{"text": "x", "start": 1.0, "end": 1.0}]])
assert "00:00:01,000 --> 00:00:01,001" in one, one

# the real checker must parse what we write
checker = Path(__file__).resolve().parents[2] / "kp-audio-brief" / "scripts" / "srt_drift_check.py"
cspec = importlib.util.spec_from_file_location("d", checker)
drift = importlib.util.module_from_spec(cspec)
cspec.loader.exec_module(drift)
tmp = Path(__file__).with_name(".test_segmenter.srt")
tmp.write_text(srt, encoding="utf-8")
try:
    parsed = drift.parse_srt(str(tmp))
    assert [c["text"] for c in parsed] == ["Hello, world", "Indeed"], parsed
    assert parsed[-1]["end"] == 2.6
finally:
    tmp.unlink()

print("segmenter OK")

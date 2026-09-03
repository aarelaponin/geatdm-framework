#!/usr/bin/env python3
"""Self-check for qa_bundle's measurement helpers. Run: python3 test_qa_bundle.py"""

from qa_bundle import (beats, field, opener_words, recap_beat, slide_vo,
                       spoken_words, thin_slides)

BLOCK = r'''{
  num: "3.1 Subtopic 5.1",
  words: 600,
  practice: "a comparator-evidence pack with cited sources",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Is this proven?'. Voice-over begins." },
    { text: "one two three four five" },
    { cue: "Slide 2 — Title: 'Four governments'. Body: a \"quoted\" phrase, [1, 2, 3]." },
    { text: "six seven" },
    { text: "eight nine ten" },
    { cue: "Slide 3 — Title: 'In one sentence'." },
    { text: "the single message" },
    { cue: "Slide 4 — Title: 'Sources'." }
  ],
  aiTip: { title: "T", io: "Input: x. Output: a comparator-evidence pack with cited sources." }
}'''


def demo():
    assert field(BLOCK, "num") == "3.1 Subtopic 5.1"
    assert field(BLOCK, "practice") == "a comparator-evidence pack with cited sources"
    # the braces and brackets inside a cue string must not close the array early
    assert len(beats(BLOCK)) == 8, beats(BLOCK)
    assert [(a, b) for a, b, _ in slide_vo(BLOCK)] == [
        ("Slide 1", 5), ("Slide 2", 5), ("Slide 3", 3), ("Slide 4", 0)]
    # slide 1 (title), 3 (recap) and 4 (Sources) are short by design, not thin
    assert thin_slides(BLOCK) == ["Slide 2"]
    assert opener_words(BLOCK) == 5
    assert recap_beat(BLOCK) == (3, "the single message")
    assert spoken_words(BLOCK) == 13
    print("ok")


if __name__ == "__main__":
    demo()

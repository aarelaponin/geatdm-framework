#!/usr/bin/env python3
"""The one thing that can silently ship the wrong take: the runtime stalemate picker."""
from pathlib import Path

from take_until_pass import best_on_runtime, newest

OVER = "FAIL  OVER — runtime {} vs target 5:00 (±45s); cut 72s"
UNDER = "FAIL  UNDER — runtime {} vs target 5:00 (±45s)"
P = Path


def test_picks_the_take_closest_to_target():
    tried = [(P("a.m4a"), [OVER.format("6:12")]),
             (P("b.m4a"), [UNDER.format("4:20")]),      # 40s under — closest
             (P("c.m4a"), [OVER.format("5:55")])]
    take, off = best_on_runtime(tried, 300)
    assert take.name == "b.m4a" and off == -40, (take, off)


def test_a_non_runtime_defect_still_escalates():
    tried = [(P("a.m4a"), [OVER.format("6:12")]),
             (P("b.m4a"), [OVER.format("5:10"), "FAIL  BANNED PHRASES — nightmare×2"])]
    assert best_on_runtime(tried, 300) is None


def test_coverage_miss_is_not_a_runtime_defect():
    assert best_on_runtime([(P("a.m4a"), ["MISS slide 4"])], 300) is None


def test_newest_ignores_finder_copy_duplicates(tmp=None):
    """"…_Deck_v0.2 2.pptx" has no parseable version — it used to crash every caller."""
    import tempfile
    d = Path(tempfile.mkdtemp())
    for n in ("KP1_M2_2.4_Deck_v0.1.pptx", "KP1_M2_2.4_Deck_v0.2.pptx",
              "KP1_M2_2.4_Deck_v0.2 2.pptx"):
        (d / n).touch()
    assert newest(d, "*_2.4_Deck_v0.*.pptx").name == "KP1_M2_2.4_Deck_v0.2.pptx"
    assert newest(d, "*_9.9_Deck_v0.*.pptx") is None


if __name__ == "__main__":
    for name, fn in sorted(globals().items()):
        if name.startswith("test_"):
            fn()
            print("ok", name)
    print("all ok")

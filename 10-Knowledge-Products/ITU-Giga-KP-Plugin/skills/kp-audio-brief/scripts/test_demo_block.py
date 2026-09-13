#!/usr/bin/env python3
"""A deck's recorded demonstration reaches the hosts as numbered observations, and the take's
order is measured.

Fixture: theory slide, three demo-evidence slides (deck_lib), recap-less close. Checked: the brief
wraps exactly the demo run in one block and numbers it; a demo slide gives the hosts its caption,
never the capture's lines or the provenance line; the order check reads a take that keeps the
order as IN ORDER and a swapped one as out of order. Run: python3 test_demo_block.py
"""
import json
import os
import sys
import tempfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
sys.path.insert(0, str(HERE.parents[1] / "kp-deck-builder" / "scripts"))

import deck_lib as dl                                                   # noqa: E402
from PIL import Image                                                   # noqa: E402
from pptx import Presentation                                           # noqa: E402

import make_brief as mb                                                 # noqa: E402
from coverage_check import demo_order, slide_terms                     # noqa: E402

VO = {"theory": "VO: The ledger records every transfer between treasuries.",
      "C1": "VO: The frame shows zebra rows, every zebra blank.",
      "C2": "VO: The frame shows walrus stamps on each walrus field.",
      "C3": "VO: The capture prints narwhal checks, six narwhal lines."}


def build(tmp):
    json.dump({"xroad_version": "7.7.0", "pack_commit": "a" * 40, "captured_at": "2026-09-13T15:00:00Z",
               "beats": {}}, open(os.path.join(tmp, "takes.json"), "w"))
    png = os.path.join(tmp, "f.png")
    Image.new("RGB", (1920, 1080), "white").save(png)
    txt = os.path.join(tmp, "t.txt")
    open(txt, "w").write("SECRET-LOOKING capture line one\ncapture line two\n")
    prs = dl.open_template()
    dl.delete_template_slides(prs, keep=0)
    dl.rows_block(prs, "The ledger", [("Transfers", "between treasuries")], "", "tag", VO["theory"])
    dl.demo_slide(prs, "Zebra", png, "Zebra caption", "tag", VO["C1"])
    dl.demo_slide(prs, "Walrus", png, "Walrus caption", "tag", VO["C2"], clip=os.path.join(tmp, "c.mp4"))
    dl.terminal_slide(prs, "Narwhal", txt, "Narwhal caption", "tag", VO["C3"])
    dl.sources_slide(prs, "tag", ["x"])
    deck = os.path.join(tmp, "deck.pptx")
    prs.save(deck)
    return deck


def test_demo_slides_give_the_hosts_their_caption_only():
    with tempfile.TemporaryDirectory() as tmp:
        slides = mb.load(build(tmp))
        assert [s["demo"] for s in slides] == [False, True, True, True, False]
        narwhal = slides[3]
        assert mb.bullets(narwhal["texts"]) == ["Narwhal caption"], narwhal["texts"]
        assert "CLIP" not in slides[2]["staging"]


def test_the_block_numbers_the_run():
    with tempfile.TemporaryDirectory() as tmp:
        run = [s for s in mb.load(build(tmp)) if s["demo"]]
        block = mb.demo_block(run)
        assert "slides 2 to 4" in block and "three numbered observations" in block
        assert '"Third"' in block


def srt(path, lines):
    Path(path).write_text("\n\n".join(f"{i + 1}\n00:00:{i * 5:02d},000 --> 00:00:{i * 5 + 4:02d},000\n{t}"
                                      for i, t in enumerate(lines)) + "\n")


def test_order_check_reads_the_take():
    with tempfile.TemporaryDirectory() as tmp:
        deck = build(tmp)
        prs = Presentation(deck)
        terms = slide_terms(prs)
        from srt_drift_check import parse_srt
        srt(os.path.join(tmp, "a.srt"), ["treasuries and the ledger", "zebra rows, zebra blank",
                                         "walrus stamps on walrus fields", "narwhal checks, narwhal lines"])
        times = [t for _, t in demo_order(prs, terms, parse_srt(os.path.join(tmp, "a.srt")))]
        assert times == sorted(times) and None not in times, times
        srt(os.path.join(tmp, "b.srt"), ["treasuries and the ledger", "narwhal checks, narwhal lines",
                                         "zebra rows, zebra blank", "walrus stamps on walrus fields"])
        times = [t for _, t in demo_order(prs, terms, parse_srt(os.path.join(tmp, "b.srt")))]
        assert times != sorted(times), times


if __name__ == "__main__":
    for name, fn in sorted(globals().items()):
        if name.startswith("test_"):
            fn()
            print(f"ok  {name}")
    print("all ok")

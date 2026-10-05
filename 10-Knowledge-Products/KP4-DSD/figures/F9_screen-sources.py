"""F9 — A screen with the source of every value (subtopic 3.3).

    python3 F9_screen-sources.py   draws F9_screen-sources.png beside this file, from clean

Drawn from subtopic 3.3 of the plan: a screen of the provisional-licence goal, and the source
of each of its four values: the applicant's name from PNIA's sign-in, the kinds of institution
from the shared code list, the proposed name typed by the applicant and checked against the
register, the fee from the setting its owner keeps. The code list's three values, the fee's
owner and its amount are the fact sheet's. Every label is taken word for word from the KP4
plan, version 0.2, or the fact sheet; check_labels.py checks it.
"""

import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.dont_write_bytecode = True
sys.path.insert(0, HERE)
import kp4_style as s  # noqa: E402

NAME = "F9_screen-sources"

# (the value on the screen, what the field shows, the source's title, its body, its colour)
ROWS = (
    ("the applicant's name", "", "PNIA's sign-in", None, s.FOUNDATION),
    ("the kinds of institution", "university", "the shared code list",
     "university · university college · technical institute", s.RAIL),
    ("the proposed name", "", "the register of institutions",
     "typed by the applicant and checked against the register", s.SPINE),
    ("the fee", "1,200 in Progressa's currency", "the setting its owner keeps",
     "owned by PHEQA's finance officer", s.ACCENT),
)

XW, WW = 0.25, 5.2        # the screen
XS, WS = 6.35, 3.4        # the sources


def draw():
    fig, ax = s.new_figure(NAME, height=6.9)
    s.title(ax, "A screen with the source of every value")

    top, bottom = 6.15, 1.2
    s.rect(ax, XW, bottom, WW, top - bottom, edge=s.NAVY, fill=s.WHITE, lw=1.6)
    s.box(ax, XW, top - 0.55, WW, 0.55, body="apply for a provisional licence", role="heading",
          solid=True, align="left", radius=0.06)
    s.text(ax, XS, top - 0.28, "where it comes from", size=s.BODY, bold=True,
           color=s.GREY_TEXT)

    rh = 1.05
    for k, (value, shown, src, body, colour) in enumerate(ROWS):
        y = top - 0.75 - (k + 1) * rh
        s.text(ax, XW + 0.25, y + rh - 0.2, value, size=s.SMALL, bold=True, color=s.NAVY)
        s.box(ax, XW + 0.25, y + 0.12, WW - 0.5, 0.45, body=shown or None, body_size=s.SMALL,
              role="neutral", fill=s.WHITE, align="left", lw=1.0)
        s.box(ax, XS, y + 0.05, WS, rh - 0.12, title=src,
              body=s.wrap(body, WS - 0.3, s.SMALL) if body else None, body_size=s.SMALL,
              title_size=s.BODY, role=colour)
        s.arrow(ax, (XS - 0.02, y + 0.35), (XW + WW - 0.23, y + 0.35), color=colour, lw=1.6)

    s.text(ax, 0.25, 0.75, "Each screen serves a step; each value on it says where it comes "
                           "from.", size=s.SMALL, color=s.NAVY, bold=True)
    s.text(ax, 0.25, 0.4, s.MARK, size=s.SMALL, color=s.GREY_TEXT)
    return fig


if __name__ == "__main__":
    out = os.path.join(HERE, NAME + ".png")
    if os.path.exists(out):
        os.remove(out)
    s.save(draw(), out)
    print("wrote " + NAME + ".png")

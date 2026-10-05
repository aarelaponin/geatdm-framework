"""F14 — The data interface between the two bodies across the data exchange (subtopic 5.5).

    python3 F14_data-interface.py   draws F14_data-interface.png beside this file, from clean

Drawn from subtopic 5.5 of the plan and the fact sheet: MoEYS's application reading PHEQA's
register of institutions across Linkup, as two calls (an institution by its identifier; the
list of registered institutions) and what each returns; and the contract the calls are made by,
produced from PHEQA's description, listing what MoEYS can ask for and what it cannot. The
identifier and the fields of an entry are the fact sheet's. Every label is taken word for word
from the KP4 plan, version 0.2, or the fact sheet; check_labels.py checks it.
"""

import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.dont_write_bytecode = True
sys.path.insert(0, HERE)
import kp4_style as s  # noqa: E402

NAME = "F14_data-interface"

LANES = ((1.75, "MoEYS's application", s.SPINE), (5.0, "Linkup, operated by PDGA", s.ACCENT),
         (8.25, "PHEQA's application", s.SPINE))
# (height, from lane, to lane, label)
CALLS = (
    (5.55, 0, 2, "an institution by its identifier · INS-00217"),
    (4.85, 2, 0, "its name, its kind, its licence and its standing"),
    (4.05, 0, 2, "the list of registered institutions"),
    (3.35, 2, 0, "the list of registered institutions"),
)


def draw():
    fig, ax = s.new_figure(NAME, height=7.6)
    s.title(ax, "The data interface between the two bodies across the data exchange")

    for x, name, colour in LANES:
        s.box(ax, x - 1.4, 6.3, 2.8, 0.62, body=name, body_size=s.SMALL, role=colour,
              solid=colour == s.ACCENT)
        s.line(ax, [x, x], [6.3, 2.95], color=s.GREY_TEXT, dashed=True)
    s.text(ax, LANES[2][0], 2.75, "PHEQA's register of institutions", size=s.SMALL,
           color=s.SPINE, ha="center", bold=True)

    for y, a, b, label in CALLS:
        xa, xb = LANES[a][0], LANES[b][0]
        mid = LANES[1][0]
        reply = a > b
        colour = s.GREY_TEXT if reply else s.NAVY
        sign = 1 if xb > xa else -1
        s.line(ax, [xa, mid], [y, y], color=colour, lw=1.8, dashed=reply)
        s.arrow(ax, (mid, y), (xb - sign * 0.04, y), color=colour, lw=1.8)
        s.text(ax, (xa + xb) / 2, y + 0.22, label, size=s.SMALL, color=s.NAVY,
               ha="center").set_bbox(dict(facecolor=s.WHITE, edgecolor="none", pad=1.5))

    # the contract the calls are made by
    top, bottom = 2.4, 0.95
    s.rect(ax, 0.25, bottom, 9.5, top - bottom, edge=s.NAVY, lw=1.5)
    s.text(ax, 0.45, top - 0.27, "The contract of PHEQA's register of institutions as MoEYS "
                                 "reads it across Linkup", size=s.SMALL, bold=True,
           color=s.NAVY, container=(0.25, bottom, 9.5, top - bottom))
    s.text(ax, 0.45, top - 0.62, "what MoEYS can ask for", size=s.SMALL, bold=True,
           color=s.SPINE)
    s.text(ax, 0.45, top - 0.92, "an institution by its identifier", size=s.SMALL,
           color=s.NAVY)
    s.text(ax, 0.45, top - 1.2, "the list of registered institutions", size=s.SMALL,
           color=s.NAVY)
    s.text(ax, 5.2, top - 0.62, "what it cannot", size=s.SMALL, bold=True, color=s.GREY_TEXT)
    s.text(ax, 5.2, top - 0.92, "anything the register does not publish", size=s.SMALL,
           color=s.NAVY)
    s.text(ax, 5.2, top - 1.2, "produced from PHEQA's description · OpenAPI", size=s.SMALL,
           color=s.GREY_TEXT)

    s.text(ax, 0.25, 0.6, "The contract another system reads is produced from the description, "
                          "not written beside it.", size=s.SMALL, bold=True, color=s.NAVY)
    s.text(ax, 0.25, 0.27, s.MARK, size=s.SMALL, color=s.GREY_TEXT)
    return fig


if __name__ == "__main__":
    out = os.path.join(HERE, NAME + ".png")
    if os.path.exists(out):
        os.remove(out)
    s.save(draw(), out)
    print("wrote " + NAME + ".png")

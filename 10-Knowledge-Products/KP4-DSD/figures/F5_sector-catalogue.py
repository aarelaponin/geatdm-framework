"""F5 — The sector's catalogue: many services resting on the same blocks (subtopics 2.1 and 6.5).

    python3 F5_sector-catalogue.py   draws F5_sector-catalogue.png beside this file, from clean

The seven services and the bodies that owe them are Progressa's fact sheet's; which block each
service rests on is the catalogue row of example E2.1 (the plan's "catalogue row of round 2"),
with the digital wallet added for the credential as subtopic 6.5 of the plan places it ("the
one new block the service adds"). A filled mark: the service rests on the block; a hollow mark:
the next service, which will rest on it. Every label is taken word for word from the KP4 plan,
version 0.2, or the fact sheet; check_labels.py checks it.
"""

import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.dont_write_bytecode = True
sys.path.insert(0, HERE)
import kp4_style as s  # noqa: E402
from matplotlib.patches import Circle  # noqa: E402

NAME = "F5_sector-catalogue"

BLOCKS = ("PNIA's sign-in", "the register of institutions", "Linkup", "the Payments block",
          "digital wallet")
# service, owed by, marks for the five blocks: 1 rests on it, 0 does not, 2 the next service
ROWS = (
    ("Register an institution", "PHEQA", (1, 1, 0, 0, 0)),
    ("License an institution", "PHEQA, with the minister's decision", (1, 1, 1, 1, 0)),
    ("Hear an institution's appeal", "PHEQA", (1, 1, 0, 0, 0)),
    ("Approve a change of an institution's name", "MoEYS, with PHEQA writing the register",
     (1, 1, 1, 0, 0)),
    ("Publish the list of registered institutions", "MoEYS", (1, 1, 1, 0, 0)),
    ("Review a decision of PHEQA", "MoEYS", (1, 1, 1, 0, 0)),
    ("Issue a learner's credential", "PDCA", (2, 2, 2, 0, 2)),
)

X_SERVICE, W_SERVICE = 0.25, 2.95
X_OWED, W_OWED = 3.25, 2.05
X_BLOCK, W_BLOCK = 5.38, 0.87


def mark(ax, cx, cy, kind):
    if kind == 1:
        ax.add_patch(Circle((cx, cy), 0.11, facecolor=s.SPINE, edgecolor=s.SPINE, zorder=4))
    elif kind == 2:
        ax.add_patch(Circle((cx, cy), 0.11, facecolor=s.WHITE, edgecolor=s.RAIL, lw=2.0,
                            zorder=4))


def draw(width=s.CANVAS_W, height=7.75):
    fig, ax = s.new_figure(NAME, height=height, width=width)
    s.title(ax, "The sector's catalogue: many services resting on the same blocks")

    head_top, head_h = height - 0.55, 0.95
    y_head = head_top - head_h
    s.text(ax, X_SERVICE + 0.08, y_head + 0.2, "Service", size=s.BODY, bold=True,
           color=s.GREY_TEXT)
    s.text(ax, X_OWED + 0.08, y_head + 0.2, "Owed by", size=s.BODY, bold=True,
           color=s.GREY_TEXT)
    for j, b in enumerate(BLOCKS):
        x = X_BLOCK + j * W_BLOCK
        s.text(ax, x + W_BLOCK / 2, y_head + 0.08, s.wrap(b, W_BLOCK - 0.05, s.SMALL, True),
               size=s.SMALL, bold=True, color=s.SPINE if j < 4 else s.RAIL, ha="center",
               va="bottom")

    # the register's column, picked out
    rh, gap = 0.6, 0.06
    body_top = y_head - 0.1
    body_bottom = body_top - len(ROWS) * (rh + gap) + gap
    s.rect(ax, X_BLOCK + W_BLOCK + 0.04, body_bottom - 0.06, W_BLOCK - 0.08,
           body_top - body_bottom + 0.12, edge=s.ACCENT, lw=1.6, z=1)

    for i, (service, owed, marks) in enumerate(ROWS):
        y = body_top - (i + 1) * rh - i * gap
        nxt = i == len(ROWS) - 1
        s.box(ax, X_SERVICE, y, W_SERVICE, rh, body=s.wrap(service, W_SERVICE - 0.3, s.SMALL),
              body_size=s.SMALL, role="method" if nxt else "heading", align="left", lw=1.1,
              dashed=nxt)
        s.box(ax, X_OWED, y, W_OWED, rh, body=s.wrap(owed, W_OWED - 0.3, s.SMALL),
              body_size=s.SMALL, role="neutral", fill=s.WHITE, align="left", lw=1.1)
        ax.plot([X_BLOCK, X_BLOCK + 5 * W_BLOCK], [y, y], color=s.GREY_BG, lw=1.0, zorder=0)
        for j, k in enumerate(marks):
            mark(ax, X_BLOCK + j * W_BLOCK + W_BLOCK / 2, y + rh / 2, k)

    # how to read it
    ly = body_bottom - 0.45
    mark(ax, X_SERVICE + 0.15, ly, 1)
    s.text(ax, X_SERVICE + 0.4, ly, "the blocks it rests on", size=s.SMALL, color=s.NAVY)
    mark(ax, X_SERVICE + 3.15, ly, 2)
    s.text(ax, X_SERVICE + 3.4, ly, "The next service on the same foundation", size=s.SMALL,
           color=s.NAVY)
    s.text(ax, X_BLOCK + 1.5 * W_BLOCK, ly - 0.42, "six services resting on one register",
           size=s.SMALL, bold=True, color=s.ACCENT, ha="center")
    s.text(ax, 0.25, ly - 0.42, "Planning enables re-use", size=s.SMALL, bold=True,
           color=s.NAVY)
    s.text(ax, 0.25, 0.25, s.MARK, size=s.SMALL, color=s.GREY_TEXT)
    return fig


def draw_slide():
    """The same table on the slide's canvas (draw_all.py --slides, KP4_SLIDE=1): wider columns
    for the larger type."""
    global W_SERVICE, X_OWED, W_OWED, X_BLOCK, W_BLOCK
    W_SERVICE, X_OWED, W_OWED, X_BLOCK, W_BLOCK = 3.6, 3.95, 2.55, 6.7, 1.15
    return draw(width=s.SLIDE_W, height=7.3)


if __name__ == "__main__":
    out = os.path.join(HERE, NAME + ".png")
    if os.path.exists(out):
        os.remove(out)
    s.save(draw(), out)
    print("wrote " + NAME + ".png")

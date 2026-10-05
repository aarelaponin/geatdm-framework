"""F11 — The service workflow of the licence: states, moves and who may make each (subtopic 4.3).

    python3 F11_licence-workflow.py   draws F11_licence-workflow.png beside this file, from clean

Drawn from subtopic 4.3 of the plan and the fact sheet: the licence's three states (granted,
suspended, cancelled); the moves between them, among them the end of a suspension; a cancellation
set aside on appeal or on review returning the licence to the state it held before, so that no
state is one that cannot be left. Who may make each move is the fact sheet's table "The moves of a
licence", which says what the script of 4.3 and the example of 2.5 say: the minister decides a
licence on PHEQA's recommendation, decides to suspend or cancel it, and decides to end a suspension
on PHEQA's advice; the registration officer records every decision; a cancellation is set aside on
appeal, which PHEQA hears, or on review, which MoEYS makes. Every label is taken word for word from
the KP4 plan, version 0.2, or the fact sheet; check_labels.py checks it.
"""

import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.dont_write_bytecode = True
sys.path.insert(0, HERE)
import kp4_style as s  # noqa: E402
from matplotlib.patches import Circle  # noqa: E402

NAME = "F11_licence-workflow"

GRANTED = (1.9, 5.1, 2.1, 0.75)
SUSPENDED = (6.7, 5.1, 2.1, 0.75)
CANCELLED = (4.3, 3.35, 2.1, 0.75)

MOVES = (
    ("1", "grant", "the minister decides a licence on PHEQA's recommendation"),
    ("2", "suspend", "the minister decides"),
    ("3 · 4", "cancel", "the minister decides"),
    ("5", "end a suspension", "the minister decides, on PHEQA's advice"),
    ("6", "a cancellation set aside on appeal", "PHEQA · hears an institution's appeal"),
    ("6", "on review", "MoEYS · reviews a decision of PHEQA"),
)
RECORDS = "the registration officer records every decision"


def tag(ax, x, y, n, colour=s.NAVY):
    ax.add_patch(Circle((x, y), 0.16, facecolor=s.WHITE, edgecolor=colour, lw=1.6, zorder=5))
    s.text(ax, x, y, n, size=s.SMALL, bold=True, color=colour, ha="center").set_zorder(6)


def draw():
    fig, ax = s.new_figure(NAME, height=7.0)
    s.title(ax, "The service workflow of the licence: states, moves and who may make each")
    s.text(ax, 0.25, 6.3, "the states of a licence", size=s.BODY, bold=True,
           color=s.GREY_TEXT)

    for (x, y, w, h), name in ((GRANTED, "granted"), (SUSPENDED, "suspended"),
                               (CANCELLED, "cancelled")):
        s.box(ax, x, y, w, h, title=name, role="build", radius=0.3)

    s.start_node(ax, 0.7, 5.475)
    s.arrow(ax, (0.82, 5.475), (1.88, 5.475))
    tag(ax, 1.35, 5.75, "1")
    s.arrow(ax, (4.02, 5.6), (6.68, 5.6))
    tag(ax, 5.35, 5.88, "2")
    # the end of a suspension returns the licence to granted
    s.arrow(ax, (6.68, 5.3), (4.02, 5.3))
    tag(ax, 5.35, 5.02, "5")
    s.arrow(ax, (3.3, 5.08), (4.6, 4.12))
    tag(ax, 3.6, 4.45, "3")
    s.arrow(ax, (7.3, 5.08), (6.1, 4.12))
    tag(ax, 7.1, 4.45, "4")
    # a cancellation set aside returns the licence to the state it held before
    s.arrow(ax, (4.28, 3.6), (2.5, 5.08), color=s.RAIL, rad=-0.35)
    s.arrow(ax, (6.42, 3.6), (8.2, 5.08), color=s.RAIL, rad=0.35)
    tag(ax, 2.55, 3.95, "6", s.RAIL)
    tag(ax, 8.15, 3.95, "6", s.RAIL)

    # who may make each move
    s.text(ax, 0.25, 2.85, "every move between states", size=s.SMALL, bold=True,
           color=s.GREY_TEXT)
    s.text(ax, 4.6, 2.85, "who may make each move", size=s.SMALL, bold=True,
           color=s.GREY_TEXT)
    rh = 0.3
    for k, (num, move, who) in enumerate(MOVES):
        y = 2.5 - k * rh
        colour = s.RAIL if num == "6" else s.NAVY
        s.text(ax, 0.25, y, num, size=s.SMALL, bold=True, color=colour)
        s.text(ax, 0.95, y, move, size=s.SMALL, color=s.NAVY)
        s.text(ax, 4.6, y, who, size=s.SMALL, color=s.NAVY)
    s.text(ax, 4.6, 2.5 - len(MOVES) * rh, RECORDS, size=s.SMALL, bold=True, color=s.NAVY)

    s.text(ax, 0.25, 0.55, "no state is one that cannot be left", size=s.SMALL,
           color=s.GREY_TEXT)
    s.text(ax, 0.25, 0.25, s.MARK, size=s.SMALL, color=s.GREY_TEXT)
    return fig


if __name__ == "__main__":
    out = os.path.join(HERE, NAME + ".png")
    if os.path.exists(out):
        os.remove(out)
    s.save(draw(), out)
    print("wrote " + NAME + ".png")

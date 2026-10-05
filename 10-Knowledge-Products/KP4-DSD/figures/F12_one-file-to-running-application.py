"""F12 — From one file to a running application, with the refusal before it
(subtopics 4.4, 4.6 and 5.1).

    python3 F12_one-file-to-running-application.py
        draws F12_one-file-to-running-application.png beside this file, from clean

Drawn from subtopics 4.4, 4.5, 4.6 and 5.1 of the plan and its table of the twelve documents:
the agreed documents carried into the application model, the one file a program reads; the
person who approves it after reading what it assumed and could not express; the check that
refuses a model contradicting the accepted interaction design, with the refusal naming the
document and the row and the model corrected until it passes; and the admitted model turned
into the platform's forms, lists, menus and workflow and the running service. Every label is
taken word for word from the KP4 plan, version 0.2; check_labels.py checks it.
"""

import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.dont_write_bytecode = True
sys.path.insert(0, HERE)
import kp4_style as s  # noqa: E402
from matplotlib.patches import Polygon  # noqa: E402

NAME = "F12_one-file-to-running-application"

INPUTS = ("The entity model", "the agreed screens", "the accepted interaction design")


def draw():
    fig, ax = s.new_figure(NAME, height=6.6)
    s.title(ax, "From one file to a running application, with the refusal before it")

    ym = 4.7
    for k, name in enumerate(INPUTS):
        yc = ym + 0.9 - k * 0.9
        s.box(ax, 0.25, yc - 0.3, 2.25, 0.6, body=s.wrap(name, 1.95, s.SMALL), body_size=s.SMALL, role="method")
        s.arrow(ax, (2.52, yc), (2.88, ym + (1 - k) * 0.3), color=s.RAIL, lw=1.4)

    s.box(ax, 2.9, ym - 0.6, 2.2, 1.2, title="the application model",
          body=s.wrap("One file a program reads", 1.9, s.SMALL), body_size=s.SMALL,
          title_size=s.BODY, role="heading", solid=True)

    # the check before anything is built
    s.arrow(ax, (5.12, ym), (5.58, ym))
    cx, hw, hh = 6.35, 0.75, 0.6
    ax.add_patch(Polygon([(cx - hw, ym), (cx, ym + hh), (cx + hw, ym), (cx, ym - hh)],
                         closed=True, facecolor=s.FILL[s.ACCENT], edgecolor=s.ACCENT, lw=1.6,
                         zorder=2))
    s.text(ax, cx, ym, "the check", size=s.SMALL, bold=True, color=s.ACCENT, ha="center")

    # admitted: generated and installed
    s.arrow(ax, (cx + hw + 0.02, ym), (7.43, ym))
    s.text(ax, 8.6, ym + 0.82, "the model admitted", size=s.SMALL, bold=True,
           color=s.SPINE, ha="center")
    s.box(ax, 7.45, ym - 0.6, 2.3, 1.2, role="build", body_size=s.SMALL,
          body=s.wrap("the platform's forms, lists, menus and workflow", 2.0, s.SMALL))
    s.arrow(ax, (8.6, ym - 0.62), (8.6, 3.32), color=s.SPINE)
    s.box(ax, 7.45, 2.4, 2.3, 0.9, role="build", solid=True, body_size=s.SMALL,
          body=s.wrap("the running service on the low-code platform", 2.0, s.SMALL))

    # refused: the refusal names the document and the row; the model is corrected
    s.arrow(ax, (cx, ym - hh - 0.02), (cx, 3.32), color=s.ACCENT)
    s.text(ax, cx + 0.12, 3.75, "a program refuses it", size=s.SMALL, color=s.ACCENT)
    s.box(ax, 5.3, 2.4, 2.1, 0.9, role="accent", body_size=s.SMALL,
          body=s.wrap("the refusal names the document and the row", 1.8, s.SMALL))
    s.line(ax, [5.3, 4.4, 4.4], [2.85, 2.85, 3.4], color=s.RAIL, lw=1.8)
    s.arrow(ax, (4.4, 3.38), (4.4, ym - 0.62), color=s.RAIL)
    s.text(ax, 4.0, 2.15, "the model is corrected and passes", size=s.SMALL, color=s.RAIL)

    # the person who approves the model
    s.box(ax, 0.25, 2.4, 3.4, 0.9, title="The person who approves it", title_size=s.SMALL,
          body=s.wrap("after reading what it assumed and could not express", 3.1, s.SMALL),
          body_size=s.SMALL, role="heading")
    s.arrow(ax, (3.3, 3.32), (3.3, ym - 0.62), color=s.NAVY)

    s.text(ax, 0.25, 1.15, "A program refuses it if it contradicts the accepted interaction "
                           "design or breaks a platform rule", size=s.SMALL, color=s.NAVY)
    s.text(ax, 0.25, 0.8, "nobody switches the check off", size=s.SMALL, bold=True,
           color=s.ACCENT)
    s.text(ax, 0.25, 0.42, "Everything agreed is carried into one file, from which the "
                           "application is generated.", size=s.SMALL, color=s.GREY_TEXT)
    return fig


if __name__ == "__main__":
    out = os.path.join(HERE, NAME + ".png")
    if os.path.exists(out):
        os.remove(out)
    s.save(draw(), out)
    print("wrote " + NAME + ".png")

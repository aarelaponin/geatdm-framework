"""F2 — The three places an agreed service gets lost (subtopic 1.1).

    python3 F2_three-places.py   draws F2_three-places.png beside this file, from clean

Drawn from subtopic 1.1 of the plan: its single message (the three places) and its worked
example (the institution that registered at PHEQA and filled in the same particulars again at
MoEYS, with each loss placed at one of the three places). Every label is taken word for word
from the KP4 plan, version 0.2, or Progressa's fact sheet; check_labels.py checks it.
"""

import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.dont_write_bytecode = True
sys.path.insert(0, HERE)
import kp4_style as s  # noqa: E402
from matplotlib.patches import Circle  # noqa: E402

NAME = "F2_three-places"

PLACES = (
    ("a question nobody decided",
     "whether the ministry may read the authority's register was never decided"),
    ("an answer nobody passed on",
     "the authority's identifier for the institution was never passed to the ministry"),
    ("a rule nobody enforced",
     "the rule that a fact is entered once was written in a strategy and enforced nowhere"),
)


def draw():
    fig, ax = s.new_figure(NAME, height=5.9)
    s.title(ax, "The three places an agreed service gets lost")

    # the way from the request to the running service, with the three places on it
    s.text(ax, 5.0, 5.1, "from the request to the running service", size=s.BODY,
           color=s.GREY_TEXT, ha="center")
    s.arrow(ax, (0.35, 4.8), (9.65, 4.8), color=s.GREY_TEXT, lw=2.2)
    w, gap = 2.98, 0.28
    for k, (place, example) in enumerate(PLACES):
        x = 0.25 + k * (w + gap)
        cx = x + w / 2
        ax.add_patch(Circle((cx, 4.8), 0.2, facecolor=s.ACCENT, edgecolor=s.ACCENT, zorder=4))
        s.text(ax, cx, 4.8, str(k + 1), size=s.BODY, bold=True, color=s.WHITE,
               ha="center").set_zorder(6)
        s.arrow(ax, (cx, 4.6), (cx, 4.28), color=s.ACCENT, lw=1.6)
        s.box(ax, x, 3.58, w, 0.7, title=s.wrap(place, w - 0.2, s.HEADING, True),
              role="accent", solid=True)
        s.box(ax, x, 2.2, w, 1.2, body=s.wrap(example, w - 0.32, s.BODY), role="neutral",
              fill=s.WHITE)

    story = ("The story of a private institution in Progressa that registered at PHEQA and "
             "then filled in the same particulars again at MoEYS")
    s.box(ax, 0.25, 0.95, 9.5, 0.95, body=s.wrap(story, 9.0, s.BODY), role="heading",
          align="left")
    s.text(ax, 0.25, 0.55, "An agreed service is lost at three places", size=s.SMALL,
           color=s.GREY_TEXT)
    s.text(ax, 0.25, 0.25, s.MARK, size=s.SMALL, color=s.GREY_TEXT)
    return fig


if __name__ == "__main__":
    out = os.path.join(HERE, NAME + ".png")
    if os.path.exists(out):
        os.remove(out)
    s.save(draw(), out)
    print("wrote " + NAME + ".png")

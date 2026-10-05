"""F4 — Who writes, who checks, who accepts (subtopics 1.5 and 6.4).

    python3 F4_who-writes-checks-accepts.py   draws F4_who-writes-checks-accepts.png beside
                                              this file, from clean

Drawn from subtopic 1.5 of the plan: its single message, its worked example (PHEQA's
registration project: who writes, who checks, who accepts, and the counterpart at every review)
and the safeguard of its tip (no document is left with the AI assistant as its acceptor).
Every label is taken word for word from the KP4 plan, version 0.2; check_labels.py checks it.
"""

import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.dont_write_bytecode = True
sys.path.insert(0, HERE)
import kp4_style as s  # noqa: E402

NAME = "F4_who-writes-checks-accepts"

STAGES = (
    ("Who writes", "the supplier's analyst and an AI assistant write", s.ENGINE),
    ("Who checks", "a second analyst checks", s.SPINE),
    ("Who accepts", "the Registrar of PHEQA or the head of its ICT unit accepts", s.NAVY),
)


def draw():
    fig, ax = s.new_figure(NAME, height=6.0)
    s.title(ax, "Who writes, who checks, who accepts")
    s.text(ax, 0.25, 5.25, "PHEQA's registration project", size=s.BODY, bold=True,
           color=s.GREY_TEXT)

    w, gap = 2.7, 0.7
    for k, (head, body, colour) in enumerate(STAGES):
        x = 0.25 + k * (w + gap)
        s.box(ax, x, 3.35, w, 1.55, title=head, body=s.wrap(body, w - 0.35, s.BODY),
              role=colour)
        if k:
            s.arrow(ax, (x - gap + 0.08, 4.12), (x - 0.08, 4.12))

    # the acceptor's three answers go back to the writer
    s.line(ax, [8.95, 8.95, 1.6, 1.6], [3.35, 2.85, 2.85, 3.2], color=s.NAVY, lw=1.6)
    s.arrow(ax, (1.6, 3.0), (1.6, 3.33), color=s.NAVY, lw=1.6)
    s.text(ax, 5.27, 3.06, "accepts, amends or sets aside each proposal", size=s.SMALL,
           color=s.NAVY, ha="center")

    s.box(ax, 0.25, 1.75, 9.5, 0.7, role="method", align="left",
          body="the counterpart from the registration desk sits at every review")
    s.box(ax, 0.25, 0.95, 4.65, 0.6, role="heading", solid=True,
          body="only what was accepted stands")
    s.box(ax, 5.1, 0.95, 4.65, 0.6, role="ai", align="center", body_size=s.SMALL,
          body=s.wrap("no document is left with the AI assistant as its acceptor", 4.3,
                      s.SMALL))
    s.text(ax, 0.25, 0.55, "The AI assistant may draft; a named person accepts, amends or sets "
                           "aside each proposal", size=s.SMALL, color=s.GREY_TEXT)
    s.text(ax, 0.25, 0.25, s.MARK, size=s.SMALL, color=s.GREY_TEXT)
    return fig


if __name__ == "__main__":
    out = os.path.join(HERE, NAME + ".png")
    if os.path.exists(out):
        os.remove(out)
    s.save(draw(), out)
    print("wrote " + NAME + ".png")

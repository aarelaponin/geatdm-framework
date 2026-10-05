"""F10 — The four questions of the interaction design (subtopic 4.1).

    python3 F10_four-questions.py   draws F10_four-questions.png beside this file, from clean

Drawn from subtopic 4.1 of the plan: the four questions settled once for the whole application
(how officers pick, find, move and act), each with MoEYS's answer as the worked example gives
it, and the person at MoEYS who accepts the document. Every label is taken word for word from
the KP4 plan, version 0.2; check_labels.py checks it.
"""

import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.dont_write_bytecode = True
sys.path.insert(0, HERE)
import kp4_style as s  # noqa: E402

NAME = "F10_four-questions"

QUESTIONS = (
    ("Pick", "how an officer picks a value from a list",
     "seven lists, all held by another body"),
    ("Find", "how she finds one institution among many",
     "a search of the register of institutions"),
    ("Move", "how a record moves between states",
     "no record of this application has states, so nothing moves"),
    ("Act", "what is filled in for her when she acts on a record",
     "the acts that open another screen, each placed in one of five menu categories"),
)


def draw():
    fig, ax = s.new_figure(NAME, height=7.1)
    s.title(ax, "The four questions of the interaction design")
    s.text(ax, 0.25, 6.35, "MoEYS's interaction design", size=s.BODY, bold=True,
           color=s.GREY_TEXT)

    w, h, gx, gy = 4.65, 1.95, 0.2, 0.2
    for k, (word, question, answer) in enumerate(QUESTIONS):
        col, row = k % 2, k // 2
        x = 0.25 + col * (w + gx)
        y = 6.05 - (row + 1) * h - row * gy
        s.rect(ax, x, y, w, h, edge=s.SPINE, lw=1.5)
        s.text(ax, x + 0.2, y + h - 0.3, word, size=s.HEADING, bold=True, color=s.SPINE,
               container=(x, y, w, h))
        s.text(ax, x + 0.2, y + h - 0.62, s.wrap(question, w - 0.4, s.SMALL), size=s.SMALL,
               color=s.GREY_TEXT, va="top", container=(x, y, w, h))
        s.box(ax, x + 0.2, y + 0.18, w - 0.4, 0.85, body=s.wrap(answer, w - 0.75, s.SMALL),
              body_size=s.SMALL, role="neutral", fill=s.WHITE, align="left", lw=1.0, z=3)

    s.box(ax, 0.25, 1.0, 9.5, 0.5, role="heading", solid=True, align="left",
          body="The Director of Higher Education at MoEYS accepts the document")
    s.text(ax, 0.25, 0.28, s.MARK, size=s.SMALL, color=s.GREY_TEXT)
    s.text(ax, 0.25, 0.62, "How officers pick, find, move and act is settled for the whole "
                          "application in one document you accept.", size=s.SMALL,
           color=s.GREY_TEXT)
    return fig


if __name__ == "__main__":
    out = os.path.join(HERE, NAME + ".png")
    if os.path.exists(out):
        os.remove(out)
    s.save(draw(), out)
    print("wrote " + NAME + ".png")

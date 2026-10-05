"""F6 — The records of the service and whose each one is, as a data model (subtopic 2.3).

    python3 F6_records-and-keepers.py   draws F6_records-and-keepers.png beside this file,
                                        from clean

Drawn from subtopic 2.3 of the plan: PHEQA's four records (an institution, an application, a
licence and a decision) with how many of one go with one of another, and the three answers for
three facts (the institution's name kept by PHEQA; the applicant's identity taken from PNIA;
MoEYS taking the institution's record from PHEQA's register). How many of one record go with
another is read from example E2.3. The licence's states are those of the plan's 4.3. Every
label is taken word for word from the KP4 plan, version 0.2; check_labels.py checks it.
"""

import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.dont_write_bytecode = True
sys.path.insert(0, HERE)
import kp4_style as s  # noqa: E402

NAME = "F6_records-and-keepers"

# record boxes: (x, y, w, h)
INST = (2.05, 4.85, 3.05, 0.95)
LIC = (0.5, 3.15, 2.85, 0.95)
APP = (3.8, 3.15, 2.85, 0.95)
DEC = (2.05, 1.6, 3.05, 0.7)


def card(ax, x, y, s_text, ha="center"):
    s.text(ax, x, y, s_text, size=s.SMALL, color=s.GREY_TEXT, ha=ha)


def draw():
    fig, ax = s.new_figure(NAME, height=7.0)
    s.title(ax, "The records of the service and whose each one is, as a data model")

    # PHEQA's application and its four records
    s.rect(ax, 0.25, 1.3, 6.65, 5.0, edge=s.SPINE, fill=s.WHITE, lw=1.6)
    s.text(ax, 0.45, 6.05, "PHEQA's application", size=s.HEADING, bold=True, color=s.SPINE)
    s.box(ax, *INST, title="an institution", body="the institution's name is kept by PHEQA",
          body_size=s.SMALL, role="build")
    s.box(ax, *LIC, title="a licence", body="granted, suspended, cancelled", body_size=s.SMALL,
          role="build")
    s.box(ax, *APP, title="an application", role="build")
    s.box(ax, *DEC, title="a decision", role="build")

    # how many of one go with one of another
    s.line(ax, [2.75, 2.75, 1.92, 1.92], [4.85, 4.48, 4.48, 4.1], color=s.NAVY)
    s.line(ax, [4.4, 4.4, 5.22, 5.22], [4.85, 4.48, 4.48, 4.1], color=s.NAVY)
    s.line(ax, [1.92, 1.92, 2.75, 2.75], [3.15, 2.72, 2.72, 2.3], color=s.NAVY)
    s.line(ax, [5.22, 5.22, 4.4, 4.4], [3.15, 2.72, 2.72, 2.3], color=s.NAVY)
    card(ax, 2.68, 4.7, "one", ha="right")
    card(ax, 1.85, 4.23, "many", ha="right")
    card(ax, 4.47, 4.7, "one", ha="left")
    card(ax, 5.29, 4.23, "many", ha="left")
    card(ax, 1.85, 2.98, "one", ha="right")
    card(ax, 2.68, 2.45, "many", ha="right")
    card(ax, 5.29, 2.98, "one", ha="left")
    card(ax, 4.47, 2.45, "one", ha="left")

    # the bodies on the other side
    s.box(ax, 7.2, 4.6, 2.55, 1.6, title="MoEYS", role="neutral", dashed=True,
          body=s.wrap("MoEYS takes the institution's record from PHEQA's register instead of "
                      "keeping its own", 2.25, s.SMALL), body_size=s.SMALL)
    s.arrow(ax, (5.12, 5.32), (7.18, 5.32), color=s.GREY_TEXT, lw=1.6)
    s.box(ax, 7.2, 2.7, 2.55, 1.6, title="PNIA", role="library", dashed=True,
          body=s.wrap("the applicant's identity is taken from PNIA and never copied", 2.25,
                      s.SMALL), body_size=s.SMALL)
    s.arrow(ax, (7.18, 3.62), (6.67, 3.62), color=s.FOUNDATION, lw=1.6)

    # the three answers
    s.text(ax, 0.25, 0.95, "For every fact: we keep it, we take it from another body, or we "
                           "must not hold it.", size=s.SMALL, color=s.NAVY, bold=True)
    s.text(ax, 0.25, 0.6, "The records are read back to the registrar in plain sentences",
           size=s.SMALL, color=s.GREY_TEXT)
    s.text(ax, 0.25, 0.28, s.MARK, size=s.SMALL, color=s.GREY_TEXT)
    return fig


if __name__ == "__main__":
    out = os.path.join(HERE, NAME + ".png")
    if os.path.exists(out):
        os.remove(out)
    s.save(draw(), out)
    print("wrote " + NAME + ".png")

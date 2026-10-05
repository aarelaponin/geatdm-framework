"""F7 — The architecture: two applications, the shared blocks and the crossing
(subtopics 2.6, 5.4, 5.5 and 5.6).

    python3 F7_architecture.py   draws F7_architecture.png beside this file, from clean

Drawn from subtopic 2.6 of the plan and the fact sheet's table of building blocks: PHEQA's
application and MoEYS's, each on its own installation of the low-code platform; the sign-in
through PNIA; MoEYS reading PHEQA's register of institutions across Linkup; and the application
fee paid through the Payments block (subtopic 5.6). Every label is taken word for word from the
KP4 plan, version 0.2, or the fact sheet; check_labels.py checks it.
"""

import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.dont_write_bytecode = True
sys.path.insert(0, HERE)
import kp4_style as s  # noqa: E402

NAME = "F7_architecture"


def app(ax, x, title):
    s.rect(ax, x, 2.75, 4.05, 2.2, edge=s.SPINE, lw=1.6)
    s.text(ax, x + 0.2, 4.68, title, size=s.HEADING, bold=True, color=s.SPINE,
           container=(x, 2.75, 4.05, 2.2))
    s.text(ax, x + 3.85, 4.68, "low-code platform", size=s.SMALL, color=s.GREY_TEXT,
           ha="right", container=(x, 2.75, 4.05, 2.2))


def draw():
    fig, ax = s.new_figure(NAME, height=7.0)
    s.title(ax, "The architecture: two applications, the shared blocks and the crossing")

    # identity, used by both
    s.box(ax, 3.4, 5.5, 3.2, 0.78, title="Identity", body="PNIA's sign-in", role="library")
    s.text(ax, 5.0, 5.22, "The sign-in of an applicant and of an officer", size=s.SMALL,
           color=s.GREY_TEXT, ha="center")
    s.line(ax, [3.4, 2.3, 2.3], [5.89, 5.89, 5.3], color=s.FOUNDATION, lw=1.8)
    s.arrow(ax, (2.3, 5.32), (2.3, 4.97), color=s.FOUNDATION)
    s.line(ax, [6.6, 7.7, 7.7], [5.89, 5.89, 5.3], color=s.FOUNDATION, lw=1.8)
    s.arrow(ax, (7.7, 5.32), (7.7, 4.97), color=s.FOUNDATION)

    # the two applications, each on its own installation
    app(ax, 0.25, "PHEQA's application")
    s.box(ax, 0.5, 3.0, 3.55, 1.25, title="Registries", body="PHEQA's register of institutions",
          role="build", fill=s.WHITE)
    app(ax, 5.7, "MoEYS's application")
    s.box(ax, 5.95, 3.25, 3.55, 0.75, body="keeps no copy", role="neutral", fill=s.WHITE,
          dashed=True)

    # information mediation: the one crossing between the two bodies
    s.box(ax, 3.6, 1.45, 2.8, 0.8, title="Information mediation",
          body="Linkup, operated by PDGA", role="accent")
    s.line(ax, [3.35, 3.35], [2.75, 1.85], color=s.ACCENT, lw=1.8)
    s.arrow(ax, (3.35, 1.85), (3.58, 1.85), color=s.ACCENT)
    s.line(ax, [6.42, 6.65], [1.85, 1.85], color=s.ACCENT, lw=1.8)
    s.arrow(ax, (6.65, 1.85), (6.65, 2.73), color=s.ACCENT)
    s.text(ax, 5.0, 1.17, "MoEYS reading PHEQA's register of institutions across Linkup",
           size=s.SMALL, color=s.ACCENT, ha="center")

    # payments
    s.box(ax, 0.25, 1.45, 2.3, 0.8, title="Payments", body="The Payments block",
          role="library")
    s.arrow(ax, (1.0, 2.73), (1.0, 2.27), color=s.FOUNDATION, style="<|-|>")
    s.text(ax, 1.15, 2.5, "the application fee", size=s.SMALL, color=s.FOUNDATION)

    s.text(ax, 0.25, 0.6, "One document names the platform, the shared blocks it uses and "
                          "every flow that crosses to another body.", size=s.SMALL,
           color=s.GREY_TEXT)
    s.text(ax, 0.25, 0.28, s.MARK, size=s.SMALL, color=s.GREY_TEXT)
    return fig


if __name__ == "__main__":
    out = os.path.join(HERE, NAME + ".png")
    if os.path.exists(out):
        os.remove(out)
    s.save(draw(), out)
    print("wrote " + NAME + ".png")

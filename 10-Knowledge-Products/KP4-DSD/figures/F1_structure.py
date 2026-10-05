"""F1 — The structure of KP4: its modules and the two ways through them (the guide's opening).

    python3 F1_structure.py      draws F1_structure.png beside this file, from clean

Drawn from the plan's table "The structure of the product, and its figures" and its table of
modules: KP1 to KP3 before KP4, the six modules in order, each with the register it is written
for, and the two ways through them. Every label is taken word for word from the KP4 plan,
version 0.2; check_labels.py checks it.
"""

import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.dont_write_bytecode = True
sys.path.insert(0, HERE)
import kp4_style as s  # noqa: E402

NAME = "F1_structure"

MODULES = (
    ("Module 1", "Why digital services go wrong, and the method that prevents it", "method"),
    ("Module 2", "Break the service down before you design it", "method"),
    ("Module 3", "Design one service as a story your officials can check", "build"),
    ("Module 4", "Settle the whole application once, then describe it for the machine", "build"),
    ("Module 5", "Generate the service on a low-code platform and connect the blocks", "build"),
    ("Module 6", "Run the method in your administration", "method"),
)


def draw():
    fig, ax = s.new_figure(NAME, height=9.6)
    s.title(ax, "The structure of KP4: its modules and the two ways through them")

    # what comes before KP4
    s.rect(ax, 0.25, 7.55, 9.5, 1.45, edge=s.GREY_TEXT, lw=1.4)
    s.text(ax, 0.45, 8.75, "KP1 to KP3, before KP4", size=s.HEADING, bold=True,
           color=s.GREY_TEXT, container=(0.25, 7.55, 9.5, 1.45))
    for k, line in enumerate(("The enterprise architecture (KP1)",
                              "the data exchange layer and the rules of interoperability (KP2)",
                              "the proven foundational blocks and the roadmap (KP3)")):
        s.box(ax, 0.45 + k * 3.12, 7.68, 2.98, 0.82, role="neutral", fill=s.WHITE,
              body=s.wrap(line, 2.7, s.SMALL), body_size=s.SMALL)
    s.arrow(ax, (5.0, 7.55), (5.0, 7.3))

    # KP4 and its six modules, in the order an administration meets the method
    s.rect(ax, 0.25, 1.15, 9.5, 6.15, edge=s.NAVY, fill=s.WHITE, lw=1.6)
    s.text(ax, 0.45, 7.02, "KP4", size=s.TITLE, bold=True, color=s.NAVY)
    top, h, gap = 6.72, 0.78, 0.17
    for k, (num, name, role) in enumerate(MODULES):
        y = top - h - k * (h + gap)
        s.box(ax, 0.9, y, 8.65, h, title=num, body=name, role=role, align="left")
        reg = "the Strategist register" if role == "method" else "the Architect register"
        s.text(ax, 9.4, y + h - 0.2, reg, size=s.SMALL, color=s.GREY_TEXT, ha="right",
               container=(0.9, y, 8.65, h))
        if k < len(MODULES) - 1:
            s.arrow(ax, (0.62, y + 0.12), (0.62, y - gap - 0.12), color=s.GREY_TEXT, lw=1.4)
        ax.plot([0.62, 0.9], [y + h / 2, y + h / 2], color=s.GREY_TEXT, lw=1.2)

    # the two ways through
    for y, colour, words in ((0.78, s.RAIL, "A team that wants the method alone follows "
                                            "modules 1, 2 and 6."),
                             (0.42, s.SPINE, "A team that has a service specified and built "
                                             "follows modules 3, 4 and 5.")):
        s.rect(ax, 0.45, y - 0.08, 0.3, 0.16, edge=colour, fill=colour, lw=0, radius=0.02)
        s.text(ax, 0.9, y, words, size=s.SMALL, color=s.NAVY)
    return fig


if __name__ == "__main__":
    out = os.path.join(HERE, NAME + ".png")
    if os.path.exists(out):
        os.remove(out)
    s.save(draw(), out)
    print("wrote " + NAME + ".png")

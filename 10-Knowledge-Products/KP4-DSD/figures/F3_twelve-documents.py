"""F3 — The twelve documents in order, with where the manager stands (subtopics 1.4 and 6.1).

    python3 F3_twelve-documents.py   draws F3_twelve-documents.png beside this file, from clean

Drawn from the plan's table "The twelve documents of the method": each document in its fixed
order with who writes it and where a person decides, the column at which the manager stands
picked out. Every cell is copied word for word from that table; check_labels.py checks it.
"""

import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.dont_write_bytecode = True
sys.path.insert(0, HERE)
import kp4_style as s  # noqa: E402
from matplotlib.patches import Circle  # noqa: E402

NAME = "F3_twelve-documents"

# (document, who writes it, where a person decides), as the plan's table gives them
DOCS = (
    ("The customer's own documents", "The customer", "The customer, by what it hands over"),
    ("The register of requirements",
     "An AI assistant extracts it; the analyst rules on each entry",
     "The analyst accepts, amends or sets aside each entry"),
    ("The entity model, with its glossary and its business rules", "The analyst",
     "The read-back to the business side"),
    ("The use case model", "One named architect", "The model's owner at the review"),
    ("The software architecture", "The solution architect",
     "The architect, with the bodies on the other side of each crossing"),
    ("The rest of the shared groundwork", "A person, with an assistant",
     "The owner of each setting"),
    ("One use case, written out in full, for each goal",
     "An AI assistant writes it; a person rules on it", "The person who rules on the draft"),
    ("The screens of that use case", "Whoever wrote the use case, beside it",
     "The review of three people"),
    ("The walk-through", "Nobody: it is produced from the screens",
     "The officials who click it, at the review"),
    ("The interaction design", "One analyst writes it; the owner accepts it",
     "The owner accepts it before the model is written"),
    ("The application model",
     "An AI assistant writes it and must refuse to guess; a person reviews and approves it",
     "The person who approves it, after reading what it assumed and could not express"),
    ("The working application", "Nobody: it is generated",
     "The proof on the running system: a person finishes a real task"),
)

COLS = ((0.78, 2.72), (3.6, 2.95), (6.65, 3.1))   # (x, width) of the three columns
SIZE = s.SMALL


def draw():
    wrapped = [[s.wrap(c, w - 0.3, SIZE) for c, (_, w) in zip(row, COLS)] for row in DOCS]
    heights = [max(0.44, (max(c.count("\n") for c in row) + 1) * s.line_height(SIZE) + 0.2)
               for row in wrapped]
    gap = 0.06
    H = 1.6 + sum(heights) + gap * len(heights) + 0.75
    fig, ax = s.new_figure(NAME, height=H)
    s.title(ax, "The twelve documents in order, with where the manager stands")

    y = H - 0.95
    for (x, w), head in zip(COLS, ("Document", "Who writes it", "Where a person decides")):
        colour = s.ACCENT if head.startswith("Where") else s.GREY_TEXT
        s.text(ax, x + 0.1, y, head, size=s.BODY, bold=True, color=colour)
    y -= 0.25
    first_mid = last_mid = None
    for k, (row, h) in enumerate(zip(wrapped, heights), start=1):
        y -= h
        mid = y + h / 2
        first_mid = first_mid or mid
        last_mid = mid
        ax.add_patch(Circle((0.45, mid), 0.17, facecolor=s.NAVY, edgecolor=s.NAVY, zorder=4))
        s.text(ax, 0.45, mid, str(k), size=s.SMALL, bold=True, color=s.WHITE,
               ha="center").set_zorder(6)
        for c, (cx, w), role in zip(row, COLS, ("heading", "neutral", "accent")):
            s.box(ax, cx, y, w, h, body=c, body_size=SIZE, role=role, align="left",
                  fill=s.WHITE if role == "neutral" else None, lw=1.1)
        y -= gap
    ax.plot([0.45, 0.45], [last_mid, first_mid], color=s.NAVY, lw=1.6, zorder=2)

    s.text(ax, 0.25, 0.42, "Each document has a writer, an input, an output, a person who "
                           "accepts it and a check, in a fixed order.",
           size=s.SMALL, color=s.GREY_TEXT)
    return fig


if __name__ == "__main__":
    out = os.path.join(HERE, NAME + ".png")
    if os.path.exists(out):
        os.remove(out)
    s.save(draw(), out)
    print("wrote " + NAME + ".png")

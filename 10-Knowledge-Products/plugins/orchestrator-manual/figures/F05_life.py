"""Figure 5. The life of one piece of work, from the first question to the verdict.

One column for each party; one row for each act, top to bottom. An arrow that changes column is a
hand-over, and its label names what is handed over."""
from matplotlib.patches import Rectangle

from omstyle import (GREY, ROLE, T_BODY, T_SMALL, arrow, box, canvas, line, num, save, text)

H = 6.75
fig, ax = canvas(H)

COLS = {"owner": 0.1, "orch": 2.33, "work": 4.56, "review": 6.79}
CW = 2.11
NAMES = {"owner": "You", "orch": "Orchestrator", "work": "Working session",
         "review": "Reviewing session"}
for role, x in COLS.items():
    edge, light = ROLE[role]
    ax.add_patch(Rectangle((x, 0.08), CW, H - 0.16, facecolor=light, edgecolor="none", alpha=0.45,
                           zorder=0))
    box(ax, x, H - 0.5, CW, 0.42, NAMES[role], role=role, tsize=T_BODY + 1)

ROWS = (
    (1, "orch", "Size the question"),
    (2, "orch", "Answer, or instruct?"),
    (3, "orch", "Write the instruction"),
    (4, "orch", "Write the\n\u201cissued\u201d entry"),
    (5, "owner", "Start the\nworking session"),
    (6, "work", "Work; report;\n\u201cfinished\u201d"),
    (7, "orch", "Compare the\ndeclarations"),
    (8, "orch", "Write the review\ninstruction"),
    (8, "owner", "Start the\nreviewing session"),
    (8, "review", "Review; verdict;\n\u201cfinished\u201d"),
    (9, "orch", "Act on the verdict:\n\u201cclosed\u201d"),
)
HANDS = {4: "the start message", 5: "the instruction", 6: "the report",
         8: "the start message", 9: "the review instruction", 10: "the review"}

PITCH, BH = 0.55, 0.46
top = H - 0.62
prev = None
for i, (n, role, label) in enumerate(ROWS):
    y = top - i * PITCH - BH
    x = COLS[role] + 0.06
    w = CW - 0.12
    box(ax, x, y, w, BH, None, None, role=role, radius=0.06)
    num(ax, x + 0.2, y + BH / 2, n, role=role, r=0.13)
    text(ax, x + 0.4, y + BH / 2, label, size=T_SMALL, ha="left")
    if prev:
        px, py, pw, prole = prev
        if prole == role:
            arrow(ax, (px + pw / 2, py), (x + w / 2, y + BH))
        else:
            right = x > px
            sx = px + pw if right else px
            cy = py + BH / 2
            tx = x + w / 2
            line(ax, [(sx, cy), (tx, cy)])
            arrow(ax, (tx, cy), (tx, y + BH))
            if i in HANDS:
                lx = (sx + tx) / 2 + (0 if right else -0.12)
                text(ax, lx, cy + 0.13, HANDS[i], size=T_SMALL, color=GREY, style="italic")
    prev = (x, y, w, role)

save(fig, "F05_life.png")

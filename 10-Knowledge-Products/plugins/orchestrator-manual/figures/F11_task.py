"""Figure 11. One task in the log, from the first instruction to the last entry.

The KP4 example of chapter 8: the working task is not accepted at version 1, is accepted at
version 2, and one "closed" entry on the review ends both tasks."""
from omstyle import GREY, ROLE, T_BODY, T_SMALL, box, canvas, line, pill, save, text

fig, ax = canvas(5.45)

WX, RX = 3.95, 7.3          # centres of the two columns
text(ax, 1.1, 5.12, "Written by", size=T_BODY, weight="bold", color=GREY)
box(ax, 2.5, 4.9, 2.9, 0.45, "Working task  LIC-C-009", role="work", tsize=T_BODY)
box(ax, 5.85, 4.9, 2.9, 0.45, "Review task  LIC-C-010", role="review", tsize=T_BODY)
line(ax, [(WX, 4.85), (WX, 0.55)], color="#C9C2DE", lw=1.2)
line(ax, [(RX, 4.85), (RX, 0.55)], color="#BFD9C0", lw=1.2)

WHO = {"orch": "Orchestrator", "work": "Working session", "review": "Reviewing session"}
ROWS = (
    ("orch", "W", "issued (version 1)"),
    ("work", "W", "started"),
    ("work", "W", "finished"),
    ("orch", "R", "issued: reviews LIC-C-009"),
    ("review", "R", "started"),
    ("review", "R", "finished: not accepted"),
    ("orch", "W", "issued (version 2): names the review"),
    ("work", "W", "started"),
    ("work", "W", "finished"),
    ("orch", "R", "issued (version 2)"),
    ("review", "R", "started"),
    ("review", "R", "finished: accepted"),
)
y = 4.6
for writer, col, label in ROWS:
    text(ax, 0.2, y, WHO[writer], size=T_SMALL, color=ROLE[writer][0], ha="left")
    # version 0.2: 2.9 in wide, as wide as the column heading, so the longest label has room
    pill(ax, WX if col == "W" else RX, y, label, role="work" if col == "W" else "review",
         w=2.9, h=0.27)
    y -= 0.335

pill(ax, (WX + RX) / 2 + 0.08, y - 0.05, "closed: accepted — closes the review and the work",
     role="orch", w=6.3, h=0.32)
text(ax, 0.2, y - 0.05, WHO["orch"], size=T_SMALL, color=ROLE["orch"][0], ha="left")

save(fig, "F11_task.png")

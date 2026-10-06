"""Figure 10. The event log, and what is produced from it.

Version 0.2: the log program produces two views (the record of what is running and the list of
orchestrators). The record of a long delivery is written by the review, and the register of
instructions has no program yet; both are drawn apart from the produced views.
"""
from omstyle import (GREY, T_BODY, T_SMALL, arrow, box, canvas, doc, elbow, folder, line, pill,
                     save, text)

fig, ax = canvas(5.0)

TOP = 4.78
text(ax, 1.15, TOP, "Sessions write entries", size=T_BODY, weight="bold", color=GREY)
text(ax, 4.2, TOP, "The event log", size=T_BODY, weight="bold", color=GREY)
text(ax, 7.42, TOP, "Produced from the log", size=T_BODY, weight="bold", color=GREY)

# the three parties, each writing its own entries
box(ax, 0.15, 3.45, 2.0, 0.9, "Orchestrator", "issued, closed,\ntaken-up, given-up",
    role="orch", bsize=T_SMALL, gap=0.29)
box(ax, 0.15, 2.35, 2.0, 0.9, "Working session", "started, finished", role="work",
    bsize=T_SMALL, gap=0.29)
box(ax, 0.15, 1.25, 2.0, 0.9, "Reviewing session", "started, finished,\nwith the verdict",
    role="review", bsize=T_SMALL, gap=0.29)
for y in (3.9, 2.8, 1.7):
    arrow(ax, (2.15, y), (3.0, y))

# the log: one file per entry
folder(ax, 3.0, 1.15, 2.4, 3.2, "One file per entry", role="file", top=True)
entries = ("issued", "started", "finished", "issued", "started", "finished", "closed")
for k, e in enumerate(entries):
    pill(ax, 3.75 if k % 2 == 0 else 4.65, 3.72 - k * 0.32, e, role="file", w=0.85, h=0.27)
text(ax, 4.2, 1.36, "never edited, never deleted", size=T_SMALL, color=GREY, style="italic")

# the two views the log program produces
doc(ax, 6.0, 3.55, 2.85, 0.85, "Record of what is running", "its Open and Closed tables")
doc(ax, 6.0, 2.6, 2.85, 0.85, "List of orchestrators", "who holds each role")
arrow(ax, (5.4, 3.97), (6.0, 3.97))
arrow(ax, (5.4, 3.02), (6.0, 3.02))
text(ax, 7.42, 2.4, "rebuilt with each entry", size=T_SMALL, color=GREY, style="italic")

# what is not produced from the log
line(ax, [(6.0, 2.2), (8.85, 2.2)], color=GREY, lw=1.0, ls="--")
text(ax, 7.42, 2.0, "Not produced from the log", size=T_BODY, weight="bold", color=GREY)
doc(ax, 6.0, 1.0, 2.85, 0.8, "Record of a long delivery", "a row written by the review",
    role="review")
doc(ax, 6.0, 0.08, 2.85, 0.8, "Register of instructions", "no program in the plugin yet",
    role="note")

# the review writes its row in the record of a long delivery
elbow(ax, [(1.15, 1.25), (1.15, 0.62), (5.7, 0.62), (5.7, 1.4), (6.0, 1.4)], color="#2E7D32")
text(ax, 3.4, 0.4, "writes the row for its part, from its verdict", size=T_SMALL, color="#2E7D32",
     style="italic")

save(fig, "F10_log.png")

"""Figure 7. Two tasks that name the same file are one body of work."""
from omstyle import GREY, T_BODY, T_SMALL, arrow, box, canvas, doc, save, text

fig, ax = canvas(3.9)
RED = "#B71C1C"

text(ax, 1.35, 3.68, "Tasks", size=T_BODY, weight="bold", color=GREY)
text(ax, 4.65, 3.68, "The files their instructions name", size=T_BODY, weight="bold",
     color=GREY)
text(ax, 7.5, 3.68, "What the program says", size=T_BODY, weight="bold", color=GREY)

box(ax, 0.15, 2.6, 2.4, 0.8, "Task A", "running", role="work", bsize=T_SMALL)
box(ax, 0.15, 1.45, 2.4, 0.8, "Task B", "waits for task A", role="work", bsize=T_SMALL,
    ls="--")
box(ax, 0.15, 0.3, 2.4, 0.8, "Task C", "can start now", role="work", bsize=T_SMALL)

doc(ax, 3.55, 2.25, 2.2, 0.55, "work/roadmap.md", role="bad", tsize=T_SMALL)
doc(ax, 3.55, 1.3, 2.2, 0.55, "work/annex.md", tsize=T_SMALL)
doc(ax, 3.55, 0.42, 2.2, 0.55, "work/glossary.md", tsize=T_SMALL)

arrow(ax, (2.55, 3.0), (3.55, 2.6), color=RED)
arrow(ax, (2.55, 1.85), (3.55, 2.42), color=RED)
arrow(ax, (2.55, 1.85), (3.55, 1.57))
arrow(ax, (2.55, 0.7), (3.55, 0.69))

box(ax, 6.15, 1.45, 2.7, 1.95, "One body of work",
    "A and B both name\nwork/roadmap.md.\nB does not write\nwhile A runs, so A's\nresult is not overwritten.",
    role="bad", bsize=T_SMALL, gap=0.32)
box(ax, 6.15, 0.15, 2.7, 1.05, "Starts at once", "C shares no file with\na running task.",
    role="review", bsize=T_SMALL, gap=0.3)

save(fig, "F07_body.png")

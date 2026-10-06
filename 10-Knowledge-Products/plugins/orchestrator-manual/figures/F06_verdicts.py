"""Figure 6. What follows each verdict."""
from omstyle import GREY, T_SMALL, arrow, box, canvas, elbow, save, text

fig, ax = canvas(4.55)
RED, GREEN = "#B71C1C", "#2E7D32"

# row 1: the first attempt and its review
box(ax, 0.15, 3.35, 1.9, 0.95, "Instruction", "version 1", role="orch", bsize=T_SMALL)
arrow(ax, (2.05, 3.82), (2.5, 3.82))
box(ax, 2.5, 3.35, 2.15, 0.95, "Review", "of version 1", role="review", bsize=T_SMALL)
arrow(ax, (4.65, 3.82), (6.75, 3.82))
text(ax, 5.7, 3.98, "accepted", size=T_SMALL, color=GREEN, weight="bold")

# not accepted: the gaps go into the same instruction, as its next version
elbow(ax, [(3.57, 3.35), (3.57, 2.98), (1.1, 2.98), (1.1, 2.65)])
text(ax, 3.67, 3.17, "not accepted", size=T_SMALL, color=RED, weight="bold", ha="left")
text(ax, 2.33, 3.1, "same key, version raised", size=T_SMALL, color=GREY, style="italic")

# row 2: the second attempt, reviewed by the same party
box(ax, 0.15, 1.6, 1.9, 1.05, "Instruction", "version 2, with\nthe gaps added", role="orch",
    bsize=T_SMALL)
arrow(ax, (2.05, 2.12), (2.5, 2.12))
box(ax, 2.5, 1.6, 2.15, 1.05, "Review", "of version 2, by\nthe same reviewer", role="review",
    bsize=T_SMALL)
arrow(ax, (4.65, 2.12), (6.75, 2.12))
text(ax, 5.7, 2.28, "accepted", size=T_SMALL, color=GREEN, weight="bold")

# accepted: one entry closes both tasks
box(ax, 6.75, 1.6, 2.1, 2.7, "Accepted",
    "one “closed” entry\ncloses the review\nand the work\n\n"
    "“found, not fixed”\nbecomes candidate\ninstructions", role="review", bsize=T_SMALL)

# not accepted twice: the task is defined again
elbow(ax, [(3.57, 1.6), (3.57, 1.02)])
text(ax, 3.67, 1.31, "not accepted again", size=T_SMALL, color=RED, weight="bold", ha="left")
box(ax, 0.15, 0.15, 8.7, 0.87, "Re-scoped",
    "The instruction is withdrawn and the task is defined again. One “closed” entry "
    "closes both tasks.", role="bad", bsize=T_SMALL)

save(fig, "F06_verdicts.png")

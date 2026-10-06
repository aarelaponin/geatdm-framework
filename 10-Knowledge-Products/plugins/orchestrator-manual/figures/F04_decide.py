"""Figure 4. Answer, or write an instruction."""
from omstyle import GREY, T_BODY, T_SMALL, arrow, box, canvas, diamond, save, text

fig, ax = canvas(7.0)

CX, DW, DH = 2.55, 4.3, 1.05
OX, OW = 5.25, 3.6

box(ax, 1.15, 6.45, 2.8, 0.45, "A question arrives", role="plain", tsize=T_BODY + 1)
arrow(ax, (CX, 6.45), (CX, 6.17))

steps = (
    (5.65, "Is an instruction for this act\nalready waiting?",
     "Write nothing new. The waiting\ninstruction is started or\nwithdrawn within 24 hours.", "note"),
    (4.3, "Is the act part of the\norchestrator's own record?",
     "Do it. An instruction or a log\nentry is the orchestrator's\nown work.", "note"),
    (2.95, "Would it carry out or judge\nwork it commissioned itself?",
     "Write an instruction. Another\nsession does the work, and a\nthird one judges it.", "orch"),
)
for cy, q, out, role in steps:
    diamond(ax, CX, cy, DW, DH, q, size=T_BODY)
    arrow(ax, (CX + DW / 2, cy), (OX, cy))
    text(ax, (CX + DW / 2 + OX) / 2, cy + 0.14, "yes", size=T_SMALL, color=GREY)
    box(ax, OX, cy - 0.42, OW, 0.84, None, out, role=role, bsize=T_SMALL)
    arrow(ax, (CX, cy - DH / 2), (CX, cy - DH / 2 - 0.3))
    text(ax, CX + 0.22, cy - DH / 2 - 0.15, "no", size=T_SMALL, color=GREY)

cy = 1.6
diamond(ax, CX, cy, DW, DH, "Does one of the five\nconditions hold?", size=T_BODY)
arrow(ax, (CX + DW / 2, cy), (OX, cy))
text(ax, (CX + DW / 2 + OX) / 2, cy + 0.14, "yes", size=T_SMALL, color=GREY)
box(ax, OX, 0.15, OW, 2.12, "Write an instruction",
    "and say which condition held:\n1  more than three documents to read\n2  a lasting document\n"
    "3  a figure that will be quoted\n4  a change to a file\n5  evidence it cannot see",
    role="orch", ha="left", bsize=T_SMALL, tsize=T_BODY, gap=0.28)
arrow(ax, (CX, cy - DH / 2), (CX, 0.68))
text(ax, CX + 0.22, cy - DH / 2 - 0.15, "no", size=T_SMALL, color=GREY)
box(ax, 0.4, 0.15, 4.3, 0.53, None, "Answer directly. Say what was read or run, and when.",
    role="review", bsize=T_SMALL)

save(fig, "F04_decide.png")

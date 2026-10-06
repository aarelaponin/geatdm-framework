"""Figure 13. Handing over the role."""
from omstyle import GREY, T_SMALL, arrow, box, canvas, doc, elbow, lane, num, pill, save, text

fig, ax = canvas(4.7)

lane(ax, 3.15, 1.45, "Outgoing\norchestrator", "orch", label_w=1.45)
lane(ax, 2.1, 0.9, "You", "owner", label_w=1.45)
lane(ax, 0.1, 1.85, "Incoming\norchestrator", "orch", label_w=1.45)

# the outgoing session's last acts, left to right
# version 0.2: the note is wider, so that its heading stays clear of the folded corner
doc(ax, 1.8, 3.35, 1.9, 1.05, "Handover note", "what it should not\nhave done; what is\nowed; findings")
num(ax, 1.8, 4.4, 1, role="orch")
arrow(ax, (3.7, 3.87), (3.92, 3.87))
doc(ax, 3.92, 3.35, 1.55, 1.05, "First task", "the fixed form,\nwith the list\nof claims")
num(ax, 3.92, 4.4, 2, role="orch")
arrow(ax, (5.47, 3.87), (5.675, 3.87))
pill(ax, 6.2, 3.87, "issued", role="file", w=1.05)
num(ax, 5.69, 4.12, 3, role="orch")
arrow(ax, (6.725, 3.87), (7.025, 3.87))
pill(ax, 7.65, 3.87, "given-up", role="file", w=1.25)
num(ax, 7.045, 4.12, 4, role="orch")
text(ax, 7.65, 3.47, "its very last act", size=T_SMALL, color=GREY, style="italic")

# you start the incoming session
elbow(ax, [(8.275, 3.87), (8.55, 3.87), (8.55, 2.9)])
box(ax, 5.3, 2.25, 3.55, 0.65, None, "You start the incoming session\nwith the first task's start message",
    role="owner", bsize=T_SMALL)
num(ax, 5.3, 2.9, 5, role="owner")

# the incoming session's first acts, right to left
elbow(ax, [(8.55, 2.25), (8.55, 1.45), (8.2, 1.45)])
pill(ax, 7.6, 1.45, "started", role="file", w=1.15)
num(ax, 7.05, 1.7, 6, role="orch")
arrow(ax, (7.02, 1.45), (6.7, 1.45))
pill(ax, 6.05, 1.45, "taken-up", role="file", w=1.25)
num(ax, 5.45, 1.7, 7, role="orch")
text(ax, 6.05, 1.07, "holds the role from here", size=T_SMALL, color="#1565C0", weight="bold")
arrow(ax, (5.42, 1.45), (4.95, 1.45))
box(ax, 1.75, 0.55, 3.2, 1.25, "Checks, then stops",
    "produces the state from the log;\nchecks each claim before acting\non it; nothing is inherited as fact",
    role="orch", bsize=T_SMALL, tsize=T_SMALL + 1, gap=0.27)
num(ax, 1.75, 1.8, 8, role="orch")

save(fig, "F13_handover.png")

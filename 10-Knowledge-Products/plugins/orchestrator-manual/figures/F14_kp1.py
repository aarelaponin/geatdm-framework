"""Figure 14. The KP1 example: open judgement on the learner's identifier."""
from omstyle import T_SMALL, arrow, box, canvas, elbow, line, save

fig, ax = canvas(5.0)

# the question, the decision, the kind of work
box(ax, 0.15, 3.85, 4.1, 1.0, "The ICT Director asks",
    "Draft the target architecture. Should we key\nthe register on the birth registration number?",
    role="owner", bsize=T_SMALL)
arrow(ax, (4.25, 4.35), (4.55, 4.35))
box(ax, 4.55, 3.85, 2.0, 1.0, "Conditions 1, 2", "many documents;\na lasting document",
    role="orch", bsize=T_SMALL)
arrow(ax, (6.55, 4.35), (6.85, 4.35))
box(ax, 6.85, 3.85, 2.0, 1.0, "Open judgement", "two real positions\nFable · effort max",
    role="navy", bsize=T_SMALL)

# the two positions the work must be free to settle
line(ax, [(7.85, 3.85), (7.85, 3.62), (2.2, 3.62)])
arrow(ax, (2.2, 3.62), (2.2, 3.4))
arrow(ax, (6.75, 3.62), (6.75, 3.4))
box(ax, 0.15, 2.15, 4.1, 1.25, "Position A",
    "Key the register on the birth registration\nnumber. The Director prefers it.",
    role="note", bsize=T_SMALL, ls="--")
box(ax, 4.65, 2.15, 4.2, 1.25, "Position B",
    "The register issues its own learner number,\nlinks the birth registration number where it\n"
    "exists, and the national number at 16.", role="work", bsize=T_SMALL)

# report, review, and the decision that stays with the person
elbow(ax, [(6.75, 2.15), (6.75, 1.92), (1.55, 1.92), (1.55, 1.7)])
box(ax, 0.15, 0.15, 2.8, 1.55, "Report", "Position B. 29 in 100\nchildren have no birth\nregistration.",
    role="work", bsize=T_SMALL)
arrow(ax, (2.95, 0.92), (3.1, 0.92))
box(ax, 3.1, 0.15, 2.8, 1.55, "Review: accepted", "The age of 16 is\nchecked by another\nroute.",
    role="review", bsize=T_SMALL)
arrow(ax, (5.9, 0.92), (6.05, 0.92))
box(ax, 6.05, 0.15, 2.8, 1.55, "The decision is hers", "The Director takes\nthe design to the\nEA Board.",
    role="owner", bsize=T_SMALL)

save(fig, "F14_kp1.png")

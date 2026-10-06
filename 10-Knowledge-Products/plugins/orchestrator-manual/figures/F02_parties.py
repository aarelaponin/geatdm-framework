"""Figure 2. The three sessions, the three documents, and you."""
from omstyle import GREY, NAVY, T_BODY, T_SMALL, arrow, box, canvas, doc, elbow, save, text

fig, ax = canvas(4.75)

# the rule, as a banner
box(ax, 0.15, 4.2, 8.7, 0.45, None, None, role="bad", fill="#FFF7F7", lw=1.1)
text(ax, 4.5, 4.425, "The one rule with no exception: a session never carries out, and never "
     "judges, work it commissioned itself.", size=T_BODY, weight="bold", color="#B71C1C")

# the three sessions
Y, H = 1.75, 1.05
box(ax, 0.15, Y, 2.05, H, "Orchestrator", "writes the instruction;\nacts on the verdict",
    role="orch", bsize=T_SMALL)
box(ax, 3.47, Y, 2.05, H, "Working session", "does the work;\nwrites the report",
    role="work", bsize=T_SMALL)
box(ax, 6.8, Y, 2.05, H, "Reviewing session", "checks the report;\ngives the verdict",
    role="review", bsize=T_SMALL)

# the documents that pass between them
arrow(ax, (2.2, 2.27), (2.35, 2.27))
doc(ax, 2.35, 1.95, 0.97, 0.65, "Instruction")
arrow(ax, (3.32, 2.27), (3.47, 2.27))
arrow(ax, (5.52, 2.27), (5.67, 2.27))
doc(ax, 5.67, 1.95, 0.97, 0.65, "Report")
arrow(ax, (6.64, 2.27), (6.8, 2.27))
elbow(ax, [(7.82, 2.8), (7.82, 3.6), (5.05, 3.6)])
doc(ax, 3.95, 3.28, 1.1, 0.65, "Review")
elbow(ax, [(3.95, 3.6), (1.17, 3.6), (1.17, 2.8)])
text(ax, 6.45, 3.75, "the verdict goes back", size=T_SMALL, color=GREY, style="italic")

# you start every session
box(ax, 3.1, 0.15, 2.8, 0.88, "You, the owner", "start every session; make\nthe decisions that are yours",
    role="owner", bsize=T_SMALL, tsize=T_BODY + 1)
elbow(ax, [(3.1, 0.59), (1.17, 0.59), (1.17, 1.75)], color="#E65100", ls="--", lw=1.4)
elbow(ax, [(4.5, 1.03), (4.5, 1.75)], color="#E65100", ls="--", lw=1.4)
elbow(ax, [(5.9, 0.59), (7.82, 0.59), (7.82, 1.75)], color="#E65100", ls="--", lw=1.4)
text(ax, 2.1, 0.42, "you start it", size=T_SMALL, color="#E65100", style="italic")
text(ax, 6.9, 0.42, "you start it", size=T_SMALL, color="#E65100", style="italic")

save(fig, "F02_parties.png")

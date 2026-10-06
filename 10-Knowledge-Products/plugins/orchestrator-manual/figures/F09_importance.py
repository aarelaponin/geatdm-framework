"""Figure 9. The kind of work follows the work, not the importance of the subject."""
from omstyle import GREY, T_BODY, T_SMALL, box, canvas, save, text

fig, ax = canvas(4.4)

C1, C1W = 0.15, 1.9
C2, C3, CW = 2.15, 5.5, 3.35

box(ax, C2, 3.85, CW, 0.45, "A modest-looking subject", role="note", tsize=T_BODY, tcolor=GREY)
box(ax, C3, 3.85, CW, 0.45, "An important subject", role="note", tsize=T_BODY, tcolor=GREY)

rows = (
    (2.7, "Mechanical", "Sonnet, medium",
     "Count the schools in the\ncensus file",
     "Check that the decree covers\nevery exchange in the catalogue"),
    (1.5, "Exact", "Opus, high",
     "Write the glossary of the\naccepted records",
     "Write the minister's briefing\nfrom the accepted business case"),
    (0.3, "Open judgement", "Fable, max",
     "Choose the number that\nidentifies a learner",
     "Decide whether to build a new\nregister or reuse one"),
)
for y, kind, model, modest, important in rows:
    box(ax, C1, y, C1W, 1.05, kind, model, role="navy", bsize=T_SMALL, tsize=T_BODY + 1)
    box(ax, C2, y, CW, 1.05, None, modest, role="plain", bsize=T_SMALL)
    box(ax, C3, y, CW, 1.05, None, important, role="plain", bsize=T_SMALL)

text(ax, C1 + C1W / 2, 4.07, "The kind of work", size=T_BODY, weight="bold", color=GREY)

save(fig, "F09_importance.png")

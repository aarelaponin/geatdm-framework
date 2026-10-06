"""Figure 15. The KP2 example: a mechanical check that the decree matches the catalogue."""
from matplotlib.patches import Ellipse

from omstyle import ROLE, T_BODY, T_SMALL, arrow, box, canvas, save, text

fig, ax = canvas(4.8)

# the two lists, compared in both directions
R = 1.78
for (cx, role) in ((2.0, "work"), (3.95, "orch")):
    edge, light = ROLE[role]
    ax.add_patch(Ellipse((cx, 2.25), 2 * R, 2 * R, facecolor=light, edgecolor=edge, linewidth=1.5,
                         alpha=0.75, zorder=1))
text(ax, 1.45, 4.45, "The catalogue asks for 6", size=T_BODY, weight="bold",
     color=ROLE["work"][0])
text(ax, 4.6, 4.45, "Article 5 allows 9", size=T_BODY, weight="bold", color=ROLE["orch"][0])

text(ax, 1.1, 2.25, "3 not covered\nrows 4, 5, 6\n\na body is not\nin Annex I", size=T_SMALL)
text(ax, 2.98, 2.25, "3 covered\nrows 1, 2, 3\n\nrow 3 has no\nfield list", size=T_SMALL,
     weight="bold")
text(ax, 4.88, 2.25, "6 beyond the\ncatalogue\n\nsuch as MoEYS\nobtaining identity\nfrom PNIA",
     size=T_SMALL)

# the decision, the kind of work, the verdict and what followed
X, Wd = 6.15, 2.7
box(ax, X, 3.75, Wd, 0.95, "Conditions 2, 3", "a lasting table;\ncounts that will be quoted",
    role="orch", bsize=T_SMALL, gap=0.28)
arrow(ax, (X + Wd / 2, 3.75), (X + Wd / 2, 3.55))
box(ax, X, 2.6, Wd, 0.95, "Mechanical", "a check settles it\nSonnet · effort medium",
    role="navy", bsize=T_SMALL, gap=0.28)
arrow(ax, (X + Wd / 2, 2.6), (X + Wd / 2, 2.4))
box(ax, X, 1.45, Wd, 0.95, "Accepted", "nine is three times three,\nchecked by another route",
    role="review", bsize=T_SMALL, gap=0.28)
arrow(ax, (X + Wd / 2, 1.45), (X + Wd / 2, 1.25))
box(ax, X, 0.1, Wd, 1.15, "Next instruction",
    "redraft Article 5 and add a\nfield list for results; exact\nwork: Opus · effort high",
    role="orch", bsize=T_SMALL, gap=0.28)

save(fig, "F15_kp2.png")

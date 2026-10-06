"""Figure 8. Three questions, asked in order, point at the kind of work."""
from omstyle import GREY, T_BODY, T_SMALL, arrow, box, canvas, num, save, text

fig, ax = canvas(4.75)

QX, QW, KX, KW = 0.15, 5.5, 6.2, 2.65
rows = (
    (3.7, "Can you point at the check that decides whether the\nwork succeeded, and would running it settle the matter?",
     "Mechanical", "Sonnet · effort medium"),
    (2.5, "Can you point at the document that already settles\nthe content, so that what remains is to write it out exactly?",
     "Exact", "Opus · effort high"),
    (1.3, "Can you point at a real disagreement: two positions,\neach with a case, that the work must be free to settle?",
     "Open judgement", "Fable · effort max"),
)
for i, (y, q, kind, model) in enumerate(rows, 1):
    box(ax, QX, y, QW, 0.85, None, None, role="navy")
    num(ax, QX + 0.27, y + 0.425, i, r=0.15)
    text(ax, QX + 0.55, y + 0.425, q, size=T_BODY, ha="left")
    arrow(ax, (QX + QW, y + 0.425), (KX, y + 0.425))
    text(ax, (QX + QW + KX) / 2, y + 0.56, "yes", size=T_SMALL, color=GREY)
    box(ax, KX, y, KW, 0.85, kind, model, role="navy", bsize=T_SMALL, gap=0.3)
    arrow(ax, (2.9, y), (2.9, y - 0.35 if i < 3 else 0.75))
    text(ax, 3.12, y - 0.18, "no", size=T_SMALL, color=GREY)

box(ax, QX, 0.15, QW, 0.6, None, "None of the three: the question is not sized yet. Size it first.",
    role="bad", bsize=T_BODY)
text(ax, KX + KW / 2, 0.45, "The model names are the present\nexample with Claude.",
     size=T_SMALL, color=GREY, style="italic")

save(fig, "F08_kinds.png")

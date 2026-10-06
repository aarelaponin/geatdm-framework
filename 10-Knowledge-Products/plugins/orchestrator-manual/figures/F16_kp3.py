"""Figure 16. The KP3 example: exact work by a written rule, and the counter-rule afterwards."""
from omstyle import GREY, T_BODY, T_SMALL, arrow, box, canvas, num, pill, save, text

fig, ax = canvas(4.75)

# the written rule of priority settles the content
text(ax, 0.15, 4.55, "The rule of priority", size=T_BODY, weight="bold", color=GREY, ha="left")
for k, name in enumerate(("Impact", "Urgency", "Feasibility")):
    x = 0.15 + k * 1.3
    box(ax, x, 3.45, 1.05, 0.8, name, "1 to 3", role="navy", tsize=T_SMALL + 1, bsize=T_SMALL,
        gap=0.3)
    text(ax, x + 1.175, 3.85, "+" if k < 2 else "=", size=16, weight="bold", color=GREY)
box(ax, 4.05, 3.45, 1.05, 0.8, "Score", "3 to 9", role="navy", tsize=T_SMALL + 1, bsize=T_SMALL,
    gap=0.3)
for k, (rng, band) in enumerate((("8 or 9", "first band"), ("6 or 7", "second band"),
                                 ("5 or less", "third band"))):
    box(ax, 0.15 + k * 1.67, 2.5, 1.55, 0.78, rng, band, role="note", tsize=T_SMALL + 1,
        bsize=T_SMALL, gap=0.27)

# the first band, ordered by dependency
text(ax, 5.55, 4.55, "The first band, in order", size=T_BODY, weight="bold", color=GREY,
     ha="left")
items = ("G-02  no joint body for shared systems", "G-06  no common school identifier",
         "G-08  MoEYS not on the exchange", "G-05  no learner record: needs G-06")
for k, s in enumerate(items):
    y = 4.08 - k * 0.43
    num(ax, 5.7, y, k + 1, role="navy", r=0.14)
    text(ax, 5.95, y, s, size=T_SMALL, ha="left")

# a week later: the counter-rule, and then a new instruction
for y, q, why, out, role in (
        (1.25, "“Which gaps are in the\nfirst band?”", "one reading of the\naccepted register",
         "Answered directly\n(the counter-rule)", "review"),
        (0.15, "“What will it cost to\nclose them?”", "a figure that will be\nquoted: condition 3",
         "Instruction for step 8,\nthe investment case", "orch")):
    box(ax, 0.15, y, 2.6, 0.85, None, q, role="owner", bsize=T_SMALL)
    arrow(ax, (2.75, y + 0.42), (3.2, y + 0.42))
    text(ax, 4.5, y + 0.42, why, size=T_SMALL, color=GREY, style="italic")
    arrow(ax, (5.8, y + 0.42), (6.25, y + 0.42))
    box(ax, 6.25, y, 2.6, 0.85, None, out, role=role, bsize=T_SMALL)
text(ax, 0.15, 2.28, "A week later", size=T_BODY, weight="bold", color=GREY, ha="left")

save(fig, "F16_kp3.png")

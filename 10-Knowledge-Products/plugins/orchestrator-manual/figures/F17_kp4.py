"""Figure 17. The KP4 example: a goal not accepted, then accepted at version 2."""
from omstyle import GREY, ROLE, T_BODY, T_SMALL, arrow, box, canvas, line, num, pill, save, text

fig, ax = canvas(4.8)

# the goal's nine steps, and the three building blocks it calls
text(ax, 0.15, 4.6, "The goal: apply for a provisional licence", size=T_BODY, weight="bold",
     color=GREY, ha="left")
steps = ("sign in", "ask", "standards", "kind", "particulars", "give", "check", "pay", "record")
blocks = {1: "identity", 7: "registries", 8: "payments"}
xs = [0.65 + i * 0.97 for i in range(9)]
line(ax, [(xs[0], 3.7), (xs[-1], 3.7)], color=GREY, lw=1.2)
for i, (x, s) in enumerate(zip(xs, steps), 1):
    num(ax, x, 3.7, i, role="navy", r=0.16)
    text(ax, x, 3.35, s, size=T_SMALL)
    if i in blocks:
        pill(ax, x, 4.12, blocks[i], role="file", w=0.9, h=0.27)
text(ax, xs[7], 2.98, "the gap", size=T_SMALL, color="#B71C1C", weight="bold")

# two versions under one key
Y, H = 1.35, 1.25
box(ax, 0.15, Y, 1.95, H, "Version 1", "report: four\nfailures written", role="orch",
    bsize=T_SMALL)
arrow(ax, (2.1, Y + H / 2), (2.35, Y + H / 2))
box(ax, 2.35, Y, 2.05, H, "Not accepted", "T3: step 8 has\nno failure written", role="bad",
    bsize=T_SMALL)
arrow(ax, (4.4, Y + H / 2), (4.65, Y + H / 2))
box(ax, 4.65, Y, 1.95, H, "Version 2", "five failures;\none open question", role="orch",
    bsize=T_SMALL)
arrow(ax, (6.6, Y + H / 2), (6.85, Y + H / 2))
box(ax, 6.85, Y, 2.0, H, "Accepted", "by the same\nreviewer", role="review", bsize=T_SMALL)
text(ax, 4.52, Y + H + 0.18, "same key, version raised", size=T_SMALL, color=GREY,
     style="italic")

box(ax, 0.15, 0.15, 8.7, 0.88, None,
    "The open question goes to its owner. The head of the registration desk decides: without the "
    "fee,\nno application is made. The Registrar of PHEQA still accepts the goal at the review of "
    "the screens.", role="owner", bsize=T_SMALL)

save(fig, "F17_kp4.png")

"""Figure 19. The Orchestrator on one page: who writes what, where, and which entry each act leaves."""
from omstyle import T_SMALL, arrow, box, canvas, elbow, num, save

fig, ax = canvas(4.1)

W2, H2 = 1.95, 1.3
TOP, BOT = 2.65, 0.25
XS = (0.15, 2.4, 4.65, 6.9)
top = (("orch", "Orchestrator", "writes the instruction\nin _prompts/;\n“issued”"),
       ("owner", "You", "start the\nworking session"),
       ("work", "Working session", "“started”; works;\nreport in _reports/;\n“finished”"),
       ("orch", "Orchestrator", "compares the trace;\nreview instruction;\n“issued”"))
bottom = (("owner", "You", "start the\nreviewing session"),
          ("review", "Reviewing session", "“started”; review in\n_reviews/; “finished”\nwith the verdict"),
          ("orch", "Orchestrator", "acts on the verdict:\n“closed”"),
          ("plain", "Next", "the next piece\nof work begins"))
for k, (role, title, body) in enumerate(top):
    box(ax, XS[k], TOP, W2, H2, title, body, role=role, bsize=T_SMALL, tsize=T_SMALL + 2,
        gap=0.3)
    num(ax, XS[k] + 0.02, TOP + H2 - 0.02, k + 1, role="navy" if role == "plain" else role)
    if k < 3:
        arrow(ax, (XS[k] + W2, TOP + H2 / 2), (XS[k + 1], TOP + H2 / 2))
for k, (role, title, body) in enumerate(bottom):
    x = XS[3 - k]
    box(ax, x, BOT, W2, H2, title, body, role=role, bsize=T_SMALL, tsize=T_SMALL + 2, gap=0.3)
    if role != "plain":
        num(ax, x + 0.02, BOT + H2 - 0.02, k + 5, role=role)
    if k < 3:
        arrow(ax, (x, BOT + H2 / 2), (XS[2 - k] + W2, BOT + H2 / 2))
arrow(ax, (XS[3] + W2 / 2, TOP), (XS[3] + W2 / 2, BOT + H2))
arrow(ax, (XS[0] + W2 / 2, BOT + H2), (XS[0] + W2 / 2, TOP))

save(fig, "F19_cycle.png")

"""Figure 1. The two failures, and the two arrangements that answer them."""
from omstyle import (GREY, T_BODY, T_HEAD, T_SMALL, arrow, box, canvas, cross, doc, save, text,
                     tick)

fig, ax = canvas(5.9)

# the two rows, each with a title and two panels
for y0, h, title in ((3.1, 2.25, "1   The one who does the work also judges it"),
                     (0.1, 2.35, "2   What a conversation knows is lost when it ends")):
    text(ax, 0.12, y0 + h + 0.22, title, size=T_HEAD, weight="bold", color="#1F3864", ha="left")
    for x0, label in ((0.1, "Without the Orchestrator"), (4.6, "With the Orchestrator")):
        box(ax, x0, y0, 4.3, h, role="note", fill="#FAFAFA", lw=1.0, radius=0.06, z=0)
        text(ax, x0 + 0.15, y0 + h - 0.2, label, size=T_SMALL, weight="bold", color=GREY,
             ha="left")

# row 1, without: one session drafts and checks; the error passes
doc(ax, 0.3, 4.0, 1.15, 0.78, "Request", "8,000 schools")
arrow(ax, (1.45, 4.39), (1.75, 4.39))
box(ax, 1.75, 3.95, 2.45, 0.88, "One session", "drafts the case, then\nchecks its own draft",
    role="work", bsize=T_SMALL)
arrow(ax, (2.97, 3.95), (2.97, 3.72))
box(ax, 1.75, 3.22, 2.45, 0.5, role="bad")
cross(ax, 2.05, 3.47)
text(ax, 3.1, 3.47, "The error passes", size=T_HEAD, weight="bold", color="#B71C1C")

# row 1, with: a separate session checks by another route and finds it
box(ax, 4.75, 3.95, 1.95, 0.88, "Working session", "drafts from 8,000", role="work",
    bsize=T_SMALL)
arrow(ax, (6.7, 4.39), (7.0, 4.39))
doc(ax, 7.0, 4.0, 1.15, 0.78, "Report", "with evidence")
arrow(ax, (7.58, 4.0), (7.58, 3.75))
box(ax, 6.55, 3.2, 2.2, 0.55, None, "Reviewer checks the\ncontext pack: 8,200", role="review",
    bsize=T_SMALL)
arrow(ax, (6.55, 3.47), (6.3, 3.47))
box(ax, 4.75, 3.22, 1.55, 0.5, role="review")
tick(ax, 5.0, 3.47)
text(ax, 5.67, 3.47, "Error found", size=T_HEAD, weight="bold", color="#2E7D32")

# row 2, without: the decision dies with the conversation
box(ax, 0.3, 1.2, 1.7, 0.9, "Conversation 1", "agrees: secondary\nschools wait a year",
    role="work", bsize=T_SMALL, tsize=T_BODY)
cross(ax, 2.27, 1.72)
text(ax, 2.27, 1.38, "lost", size=T_SMALL, color="#B71C1C", weight="bold")
box(ax, 2.55, 1.2, 1.7, 0.9, "Conversation 2", "does not know;\nputs them back",
    role="work", bsize=T_SMALL, tsize=T_BODY)
arrow(ax, (1.15, 1.2), (1.15, 0.92))
arrow(ax, (3.4, 1.2), (3.4, 0.92))
box(ax, 0.3, 0.32, 3.95, 0.6, "Two versions of the case", role="bad")

# row 2, with: the decision is kept in a file, and the next session reads it
box(ax, 4.75, 1.2, 1.5, 0.9, "Session 1", "records the\ndecision", role="work",
    bsize=T_SMALL, tsize=T_BODY)
arrow(ax, (6.25, 1.65), (6.45, 1.65))
doc(ax, 6.45, 1.2, 1.12, 0.9, "File", "the decision")
arrow(ax, (7.57, 1.65), (7.75, 1.65))
box(ax, 7.75, 1.2, 1.0, 0.9, "Session 2", "reads it", role="work", bsize=T_SMALL,
    tsize=T_BODY)
arrow(ax, (7.0, 1.2), (7.0, 0.92))
box(ax, 4.75, 0.32, 4.0, 0.6, "One version, with its reason", role="review")

save(fig, "F01_why.png")

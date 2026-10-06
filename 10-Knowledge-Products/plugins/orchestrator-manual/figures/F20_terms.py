"""Figure 20. How the main terms fit together.

Version 0.2: the box of views names the two views the log program produces, and the label
"produced" has room on both sides.
"""
from omstyle import GREY, T_BODY, T_SMALL, arrow, box, canvas, doc, elbow, folder, save, text

fig, ax = canvas(4.6)

# the project and its constants
box(ax, 0.15, 3.6, 1.65, 0.8, "Project", "one folder", role="navy", bsize=T_SMALL)
arrow(ax, (1.8, 4.0), (2.15, 4.0))
doc(ax, 2.15, 3.5, 2.75, 1.0, "Constants file", "what the project is for;\nthe map of places; the code")
arrow(ax, (4.9, 4.17), (5.3, 4.17))
box(ax, 5.3, 3.78, 1.5, 0.78, "Code", "DPI", role="navy", bsize=T_SMALL, gap=0.3)
arrow(ax, (4.9, 3.62), (6.95, 3.62))
box(ax, 6.95, 3.4, 1.9, 1.05, "Three places", "_prompts/\n_reports/  _reviews/",
    role="file", bsize=T_SMALL)

# each instruction is a task with a key
doc(ax, 0.15, 1.95, 1.9, 0.95, "Instruction", "one task")
arrow(ax, (2.05, 2.42), (2.4, 2.42))
box(ax, 2.4, 1.9, 3.05, 1.05, "Task", "key = code + identifier\nversion = the attempt",
    role="work", bsize=T_SMALL)
elbow(ax, [(6.05, 3.78), (6.05, 2.42), (5.45, 2.42)])
text(ax, 6.12, 3.1, "goes into\nthe key", size=T_SMALL, color=GREY, style="italic", ha="left")

# every act on a task is an entry; the log program produces the two views from the entries
arrow(ax, (3.92, 1.9), (3.92, 1.45))
text(ax, 4.0, 1.68, "each act is an entry", size=T_SMALL, color=GREY, style="italic", ha="left")
box(ax, 0.15, 0.15, 2.4, 1.05, "Entries", "issued · started\nfinished · closed",
    role="file", bsize=T_SMALL)
elbow(ax, [(3.92, 1.45), (1.35, 1.45), (1.35, 1.2)])
arrow(ax, (2.55, 0.67), (2.9, 0.67))
folder(ax, 2.9, 0.15, 1.95, 0.95, "Event log", "one file per entry", role="file")
arrow(ax, (4.85, 0.67), (5.95, 0.67))
text(ax, 5.4, 0.86, "produced", size=T_SMALL, color=GREY, style="italic")
doc(ax, 5.95, 0.15, 2.9, 1.05, "Two views", "what is running;\nthe list of orchestrators")

save(fig, "F20_terms.png")

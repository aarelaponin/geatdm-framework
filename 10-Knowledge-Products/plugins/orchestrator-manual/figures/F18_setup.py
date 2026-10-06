"""Figure 18. What you set up before the first session."""
from omstyle import GREY, T_BODY, T_SMALL, arrow, box, canvas, doc, folder, save, text

fig, ax = canvas(4.75)

# the plugin, added to the assistant
box(ax, 0.15, 2.55, 2.85, 1.9, "The Orchestrator plugin",
    "the rules of the role\nthe forms\nthe log program,\nwhich needs Python 3",
    role="orch", bsize=T_SMALL, tsize=T_BODY + 1, gap=0.35)
arrow(ax, (1.57, 2.55), (1.57, 2.25))
box(ax, 0.15, 1.35, 2.85, 0.9, "Your assistant", "with the plugin added", role="plain",
    bsize=T_SMALL, tsize=T_BODY + 1)
text(ax, 1.57, 0.7, "The first orchestrator session\nreads the constants and writes\n"
     "“taken-up” in _log/", size=T_SMALL, color=GREY, style="italic")
arrow(ax, (3.0, 1.8), (3.4, 1.8))

# the project folder
folder(ax, 3.4, 0.15, 5.45, 4.3, "my-project/", role="note", top=True, lsize=T_BODY + 1)
files = (("CONSTANTS.md", "what the project is for;\nthe map of places; the code"),
         ("WHAT_IS_RUNNING.md", "the record of what is running"),
         ("orchestrators.txt", "who holds the role"))
for k, (name, what) in enumerate(files):
    doc(ax, 3.6, 3.05 - k * 1.2, 2.55, 0.95, name, what)
places = (("_prompts/", "instructions", "orch"), ("_reports/", "reports", "work"),
          ("_reviews/", "reviews", "review"), ("_log/", "the event log", "file"),
          ("work/", "what it makes", "note"))
for k, (name, what, role) in enumerate(places):
    y = 3.38 - k * 0.72
    folder(ax, 6.35, y, 1.1, 0.48, name, role=role, lsize=T_SMALL)
    text(ax, 7.55, y + 0.24, what, size=T_SMALL, color=GREY, ha="left")

save(fig, "F18_setup.png")

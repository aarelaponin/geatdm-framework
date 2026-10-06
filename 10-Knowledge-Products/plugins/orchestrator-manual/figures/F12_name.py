"""Figure 12. The session name, and why the code comes first."""
from omstyle import GREY, NAVY, T_BODY, T_SMALL, box, canvas, cross, line, save, text

fig, ax = canvas(3.6)

# the list of sessions, as the assistant shows it: long names cut at the end
box(ax, 0.15, 0.15, 3.35, 3.3, role="note", fill="#FAFAFA", lw=1.0, radius=0.06, z=0)
text(ax, 0.3, 3.22, "Your list of sessions", size=T_BODY, weight="bold", color=GREY, ha="left")
names = (("DPI · work · gap regi…", "work"),
         ("DPI · review · gap reg…", "review"),
         ("EA · work · target archi…", "work"),
         ("LIC · work · goal apply f…", "work"),
         ("DPI · orchestrator · fro…", "orch"),
         ("Gap register for the w…", "bad"))
for k, (n, role) in enumerate(names):
    y = 2.62 - k * 0.43
    box(ax, 0.3, y, 3.05, 0.34, None, None, role=role, radius=0.05, lw=1.0)
    text(ax, 0.42, y + 0.17, n, size=T_BODY, ha="left")
cross(ax, 3.12, 0.57, r=0.09)

# the three parts of a name
parts = ((4.25, "DPI", "the code:\nwhich\norchestrator"),
         (5.55, "work", "the kind:\nwork, review\nor orchestrator"),
         (7.55, "gap register", "the task, in a few\nwords: the same for\nthe work and its review"))
for x, word, meaning in parts:
    text(ax, x, 2.95, word, size=20, weight="bold", color=NAVY)
for x in (4.86, 6.2):
    text(ax, x, 2.95, "·", size=20, weight="bold", color=NAVY)
for x, half in ((4.25, 0.3), (5.55, 0.42), (7.55, 1.05)):
    line(ax, [(x - half, 2.62), (x - half, 2.55), (x + half, 2.55), (x + half, 2.62)],
         color=GREY, lw=1.3)
    line(ax, [(x, 2.55), (x, 2.4)], color=GREY, lw=1.3)
for x, word, meaning in parts:
    text(ax, x, 2.3, meaning, size=T_SMALL, va="top")

box(ax, 3.85, 0.15, 5.0, 0.95, None,
    "The list cuts a long name at its end. The code comes first,\nso it survives the cut, "
    "and a working session and its\nreview sit side by side.", role="navy", bsize=T_SMALL)

save(fig, "F12_name.png")

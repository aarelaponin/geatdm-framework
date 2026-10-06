"""Figure 3. One place for each kind of document."""
from omstyle import GREY, T_BODY, T_HEAD, T_SMALL, box, canvas, cross, doc, folder, save, text, tick

fig, ax = canvas(3.85)

# left: one kind to each place
box(ax, 0.1, 0.1, 5.55, 3.65, role="note", fill="#FAFAFA", lw=1.0, radius=0.06, z=0)
text(ax, 0.25, 3.55, "One kind of document to each place", size=T_BODY, weight="bold",
     color=GREY, ha="left")
for i, (name, prefix, n, role) in enumerate((("_prompts/", "PROMPT_", 12, "orch"),
                                             ("_reports/", "REPORT_", 11, "work"),
                                             ("_reviews/", "REVIEW_", 10, "review"))):
    x = 0.3 + i * 1.8
    folder(ax, x, 0.95, 1.55, 2.15, name, role="file", top=True)
    for k in range(3):
        doc(ax, x + 0.18, 2.12 - k * 0.48, 1.19, 0.4, prefix + "…", role=role, tsize=T_SMALL)
    tick(ax, x + 0.2, 0.55)
    text(ax, x + 0.4, 0.55, f"{n}, counted", size=T_SMALL, ha="left")

# right: three kinds in one place
box(ax, 5.85, 0.1, 3.05, 3.65, role="note", fill="#FAFAFA", lw=1.0, radius=0.06, z=0)
text(ax, 6.0, 3.55, "Three kinds in one place", size=T_BODY, weight="bold", color=GREY,
     ha="left")
folder(ax, 6.12, 0.95, 2.5, 2.15, "_work/", role="file", top=True)
mixed = (("PROMPT_…", "orch"), ("notes…", "note"), ("REPORT_…", "work"), ("REVIEW_…", "review"))
for k, (label, role) in enumerate(mixed):
    dx = 0.2 if k % 2 == 0 else 1.25
    dy = 2.12 if k < 2 else 1.5
    doc(ax, 6.12 + dx, dy, 1.0, 0.42, label, role=role, tsize=T_SMALL)
cross(ax, 6.3, 0.55)
text(ax, 6.5, 0.55, "cannot be counted or checked", size=T_SMALL, ha="left", color="#B71C1C")

save(fig, "F03_places.png")

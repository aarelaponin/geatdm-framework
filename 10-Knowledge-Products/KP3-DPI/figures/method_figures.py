"""method_figures — draws KP3's five method figures from nothing, into this folder.

    python3 method_figures.py                          draws F1, F2, F3, F5 and F16 as PNG files
    python3 method_figures.py --check-labels OUTLINE   draws nothing; checks that every label the
                                                       five figures write is found in the outline
                                                       file OUTLINE, and exits 1 if one is not

F1  The structure of KP3: its modules and the two ways through them
F2  The five domains on one page
F3  The nine steps with their roles and outputs
F5  The order of building: PAERA's four phases and the blocks of each
F16 The governance structure on one page

Every label is a name the KP3 outline uses, word for word. The style (colours, fonts, sizes,
the check that no text is cut or overlaps) is kp3_style.py beside this file.
"""

import argparse
import os
import re
import sys

from matplotlib.patches import Circle

HERE = os.path.dirname(os.path.abspath(__file__))
sys.dont_write_bytecode = True     # leave no compiled files in the folder of figures
sys.path.insert(0, HERE)
import kp3_style as s  # noqa: E402

SEP = " · "


# --- F1 ---------------------------------------------------------------------------------------
# Every box carries one line of description (fa-method:docx-diagram-style, "One-line
# descriptions"): the modules are drawn as rows across the page, not as three narrow columns.
def f1():
    fig, ax = s.new_figure("F1_structure", height=9.3)
    s.title(ax, "The structure of the DPI Roadmap: its modules and the two ways through them")

    # KP1 and KP2, each line of the outline's row in a box of its own
    s.rect(ax, 0.25, 7.45, 9.5, 1.35, edge=s.GREY_TEXT, lw=1.4)
    s.text(ax, 0.45, 8.56, "GEA and GIF, before the DPI Roadmap", size=s.HEADING, bold=True,
           color=s.GREY_TEXT, container=(0.25, 7.45, 9.5, 1.35))
    s.box(ax, 0.45, 7.98, 9.1, 0.38, role="neutral", fill=s.WHITE, align="left",
          body="The enterprise architecture and its target state (GEA);")
    s.box(ax, 0.45, 7.55, 9.1, 0.38, role="neutral", fill=s.WHITE, align="left",
          body="the data exchange layer and the rules of interoperability (GIF)")
    s.arrow(ax, (5.0, 7.45), (5.0, 7.2))

    s.rect(ax, 0.25, 1.4, 9.5, 5.8, edge=s.NAVY, fill=s.WHITE, lw=1.6)
    s.text(ax, 0.45, 6.95, "DPI Roadmap", size=s.TITLE, bold=True, color=s.NAVY)

    mods = (("Module 1", "Where your country stands, and what to build first", 5.75),
            ("Module 6", "From a proven foundation to a national roadmap", 2.05))
    for num, name, y in mods:
        s.box(ax, 1.15, y, 8.4, 0.85, title=num, body=name, role="method", align="left")
        s.text(ax, 9.4, y + 0.6, "the Strategist register", size=s.SMALL, color=s.GREY_TEXT,
               ha="right", container=(1.15, y, 8.4, 0.85))

    s.arrow(ax, (5.35, 5.75), (5.35, 5.5))
    s.rect(ax, 1.15, 3.15, 8.4, 2.35, edge=s.SPINE, lw=1.6)
    s.text(ax, 1.3, 5.25, "Modules 2 to 5", size=s.HEADING, bold=True, color=s.SPINE,
           container=(1.15, 3.15, 8.4, 2.35))
    s.text(ax, 9.4, 5.25, "the Architect register", size=s.SMALL, color=s.GREY_TEXT, ha="right",
           container=(1.15, 3.15, 8.4, 2.35))
    rows = ("2. The Registration block", "3. The Registry block", "4. Identity and payments",
            "5. Join the blocks and prove the foundation")
    for k, name in enumerate(rows):
        s.box(ax, 1.3, 4.6 - k * 0.45, 8.1, 0.38, body=name, role="build", align="left", z=3)
    s.arrow(ax, (5.35, 3.15), (5.35, 2.9))

    # the roadmap method joins modules 1 and 6 around the four building modules
    s.line(ax, [1.15, 0.72, 0.72, 1.15], [6.17, 6.17, 2.47, 2.47], color=s.RAIL, lw=2.2)
    s.text(ax, 0.52, 4.32, "the roadmap method", size=s.BODY, bold=True, color=s.RAIL,
           ha="center", rotation=90)

    for y, colour, words in ((1.83, s.RAIL,
                              "A team that wants the roadmap method alone follows modules 1 and 6."),
                             (1.58, s.SPINE,
                              "A team that wants the build follows modules 2 to 5.")):
        s.rect(ax, 1.15, y - 0.07, 0.28, 0.14, edge=colour, fill=colour, lw=0, radius=0.02)
        s.text(ax, 1.55, y, words, size=s.SMALL, color=s.NAVY)

    s.arrow(ax, (5.0, 1.4), (5.0, 1.15))
    s.box(ax, 0.25, 0.25, 9.5, 0.9, title="Building Block Approach, after the DPI Roadmap",
          body="Further education services built over them", role="neutral")
    return fig



# --- F2 ---------------------------------------------------------------------------------------
def f2():
    fig, ax = s.new_figure("F2_five-domains", height=4.2)
    s.title(ax, "The five domains on one page")

    s.text(ax, 5.0, 3.3, "the four pillars", size=s.BODY, bold=True, color=s.ACCENT, ha="center")
    w = (9.5 - 3 * 0.2) / 4
    for i, name in enumerate(("Access", "Digital Data", "Interoperability", "Digital Identity")):
        s.box(ax, 0.25 + i * (w + 0.2), 1.95, w, 1.1, title=name, role="accent")
    s.box(ax, 0.25, 1.0, 9.5, 0.8, title="A foundation of governance, policy and law",
          role="heading", solid=True)

    s.text(ax, 0.25, 0.62, "Reading the foundation as a fifth domain beside the four pillars "
                           "is the team's own reading of PAERA",
           size=s.SMALL, color=s.GREY_TEXT)
    s.text(ax, 0.25, 0.32, "PAERA 3.3.1", size=s.SMALL, color=s.GREY_TEXT)
    return fig


# --- F3 ---------------------------------------------------------------------------------------
STEPS = (
    ("Frame", "One-page map of the five domains"),
    ("Automatic assessment", "First findings and gaps"),
    ("Questionnaires", "A filled questionnaire with the evidence attached"),
    ("Verification", "Table of reconciled answers"),
    ("Taxonomy and scoring", "The five domain reports" + SEP + "the maturity table"),
    ("Gap consolidation and prioritisation", "The gap register" + SEP + "the matrix of priorities"),
    ("Roadmap", "The roadmap over time"),
    ("Investment breakdown", "Investment case in four sheets"),
    ("Validation and revision", "Response matrix" + SEP + "the adopted roadmap"),
)

ROLES = SEP.join(("facilitator", "respondent team", "section leads", "focal points", "reviewers",
                  "the adopting authority"))


def f3():
    fig, ax = s.new_figure("F3_nine-steps", height=8.0)
    s.title(ax, "The nine steps with their roles and outputs")
    s.text(ax, 0.9, 7.2, "Step", size=s.BODY, bold=True, color=s.GREY_TEXT)
    s.text(ax, 5.05, 7.2, "What comes out", size=s.BODY, bold=True, color=s.GREY_TEXT)

    tops = [6.62, 6.08, 5.54, 5.00, 4.46, 3.48, 2.94, 2.40, 1.86]
    s.text(ax, 0.25, 6.86, "Module 1", size=s.HEADING, bold=True, color=s.RAIL)
    s.text(ax, 0.25, 3.72, "Module 6", size=s.HEADING, bold=True, color=s.RAIL)
    h = 0.46
    for i, ((step, out), top) in enumerate(zip(STEPS, tops), start=1):
        y = top - h
        mid = y + h / 2
        ax.add_patch(Circle((0.5, mid), 0.2, facecolor=s.RAIL, edgecolor=s.RAIL, zorder=2))
        s.text(ax, 0.5, mid, str(i), size=s.BODY, bold=True, color=s.WHITE, ha="center",
               container=(0.3, mid - 0.2, 0.4, 0.4))
        s.box(ax, 0.9, y, 3.75, h, title=step, role="method", align="left", title_size=s.BODY)
        s.arrow(ax, (4.7, mid), (5.0, mid))
        s.box(ax, 5.05, y, 4.7, h, body=out, role="heading", align="left")

    s.box(ax, 0.25, 0.3, 9.5, 0.85, title="Roles", body=ROLES, role="heading", align="left",
          body_size=s.SMALL)
    return fig


# --- F5 ---------------------------------------------------------------------------------------
# Each phase is a row, so that its name is on one line. What a phase brings is drawn in two
# styles: a building block as a blue box, and an activity of PAERA that is not a block (the
# digitalisation of the registers, activity 3.2 of the third phase) as a dashed grey box; the
# key under the rows says which is which.
PHASES = (
    ("Inception", ("Identity", "Payments"), ()),
    ("High-priority use case implementation", ("Data exchange", "Registration"), ()),
    ("Initial transformation", (), ("Digitalisation of all main state registers",)),
    ("Mass-scale transformation", (), ()),
)


def f5():
    fig, ax = s.new_figure("F5_order-of-building", height=6.7)
    s.title(ax, "The order of building: PAERA's four phases and the blocks of each")
    pw = 4.1                       # the column of the phases
    bx, bw = 4.55, 5.2             # the column of what each phase brings
    rows = ((5.95, 0.62), (5.03, 0.62), (4.11, 0.97), (2.84, 0.62))   # (top, height)
    for i, ((phase, blocks, activities), (top, h)) in enumerate(zip(PHASES, rows)):
        y = top - h
        s.box(ax, 0.25, y, pw, h, title=phase, role="heading", solid=True, title_size=s.BODY)
        if i < 3:
            nxt = rows[i + 1][0]
            s.arrow(ax, (0.25 + pw / 2, y - 0.03), (0.25 + pw / 2, nxt + 0.03))
        if not blocks and not activities:
            continue    # the outline names nothing for this phase, so nothing is drawn
        s.rect(ax, bx, y, bw, h, edge=s.NAVY, lw=1.0)
        if blocks:
            w = (bw - 0.36) / 2
            for k, b in enumerate(blocks):
                s.box(ax, bx + 0.12 + k * (w + 0.12), y + 0.12, w, h - 0.24, body=b, role="build",
                      z=3)
        for a in activities:
            s.box(ax, bx + 0.12, top - 0.12 - 0.42, bw - 0.24, 0.42, body=a, role="neutral",
                  fill=s.WHITE, dashed=True, z=3)
            s.text(ax, bx + 0.2, y + 0.2, "Limit of 2-3 years", size=s.SMALL, color=s.GREY_TEXT,
                   container=(bx, y, bw, h))

    # the key of the two styles
    s.rect(ax, 0.25, 1.62, 0.5, 0.26, edge=s.SPINE, lw=1.4, radius=0.04)
    s.text(ax, 0.88, 1.75, "building blocks", size=s.SMALL, color=s.NAVY)
    s.rect(ax, 2.9, 1.62, 0.5, 0.26, edge=s.GREY_TEXT, fill=s.WHITE, lw=1.4, radius=0.04,
           dashed=True)
    s.text(ax, 3.53, 1.75, "activities", size=s.SMALL, color=s.NAVY)

    s.text(ax, 0.25, 1.25, "Every prerequisite is in place before a service is opened to the public",
           size=s.BODY, color=s.NAVY)
    s.text(ax, 0.25, 0.92, "Show one visible result early so that support holds",
           size=s.BODY, color=s.NAVY)
    s.text(ax, 0.25, 0.55, "PAERA 5.7.1 to 5.7.5", size=s.SMALL, color=s.GREY_TEXT)
    return fig



# --- F16 --------------------------------------------------------------------------------------
# Each band is the authority's box on the left and its bodies on the right, one line each.
# "Political leadership shown in words and budget" is a condition PAERA 3.1.1 sets, not a body,
# so it is drawn in a dashed white box; the key under the bands says which is which.
LAYERS = (
    ("Political authority", "decides money and policy", s.NAVY,
     ("A committee of ministers that decides funding",),
     ("Political leadership shown in words and budget",)),
    ("Programme authority", "coordinates the programme", s.ACCENT,
     ("A dedicated coordinating agency", "Digital officers in ministries"), ()),
    ("Technical authority", "runs each block and sets its technical rules", s.SPINE,
     ("The owner of each block",), ()),
)


def f16():
    fig, ax = s.new_figure("F16_governance", height=6.5)
    s.title(ax, "The governance structure on one page")
    tx, tw = 0.4, 4.55             # the authority's box
    bx, bw = 5.1, 4.5              # its bodies and conditions
    bands = ((4.4, 1.35), (2.95, 1.35), (1.95, 0.9))                 # (bottom, height)
    for (name, does, colour, bodies, conditions), (y, h) in zip(LAYERS, bands):
        s.rect(ax, 0.25, y, 9.5, h, edge=colour, lw=1.4)
        s.box(ax, tx, y + 0.1, tw, h - 0.2, title=name, body=does, role=colour, solid=True)
        items = [(b, False) for b in bodies] + [(c, True) for c in conditions]
        rh, gap = 0.45, 0.15
        top = y + h / 2 + (len(items) * rh + (len(items) - 1) * gap) / 2
        for k, (b, is_condition) in enumerate(items):
            yy = top - (k + 1) * rh - k * gap
            if is_condition:
                s.box(ax, bx, yy, bw, rh, body=b, role=colour, fill=s.WHITE, dashed=True, z=3)
            else:
                s.box(ax, bx, yy, bw, rh, body=b, role=colour, z=3)

    # the key of the two styles
    s.rect(ax, 0.25, 1.37, 0.5, 0.26, edge=s.NAVY, lw=1.4, radius=0.04)
    s.text(ax, 0.88, 1.5, "public bodies", size=s.SMALL, color=s.NAVY)
    s.rect(ax, 2.9, 1.37, 0.5, 0.26, edge=s.NAVY, fill=s.WHITE, lw=1.4, radius=0.04, dashed=True)
    s.text(ax, 3.53, 1.5, "conditions", size=s.SMALL, color=s.NAVY)

    s.text(ax, 0.25, 0.92, "Mandates come from law and from cabinet decisions", size=s.SMALL,
           color=s.NAVY)
    s.text(ax, 0.25, 0.6, SEP.join(("PAERA 3.1.1 and 3.1.2", "UNDP Playbook, pages 34 to 41",
                                    "the team's own synthesis of these sources")),
           size=s.SMALL, color=s.GREY_TEXT)
    return fig


FIGURES = (
    ("F1_structure.png", f1),
    ("F2_five-domains.png", f2),
    ("F3_nine-steps.png", f3),
    ("F5_order-of-building.png", f5),
    ("F16_governance.png", f16),
)


# --- The label check --------------------------------------------------------------------------
def _norm(t):
    t = t.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')
    t = t.replace("–", "-").replace("—", "-")
    return re.sub(r"\s+", " ", t).strip().lower()


def check_labels(outline_path):
    with open(outline_path, encoding="utf-8") as fh:
        outline = _norm(fh.read())
    for _, draw in FIGURES:
        fig = draw()
        fig.canvas.draw()
        import matplotlib.pyplot as plt
        plt.close(fig)
    missing = 0
    count = 0
    for fig_name, label in s.LABELS:
        for part in label.replace("\n", " ").split(SEP.strip()):
            part = _norm(part).rstrip(".;:")
            if not part:
                continue
            count += 1
            found = part in outline
            missing += not found
            print(f"{'found  ' if found else 'MISSING'}  {fig_name:22s}  {part}")
    print(f"\n{count} names in {len(s.LABELS)} labels across {len(FIGURES)} figures; "
          f"{count - missing} found in the outline, {missing} not found")
    return 1 if missing else 0


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--check-labels", metavar="OUTLINE",
                    help="check every label against this outline file and draw nothing")
    a = ap.parse_args()
    if a.check_labels:
        sys.exit(check_labels(a.check_labels))
    for fname, draw in FIGURES:
        path = os.path.join(HERE, fname)
        s.save(draw(), path)
        print(f"wrote {path}")


if __name__ == "__main__":
    main()

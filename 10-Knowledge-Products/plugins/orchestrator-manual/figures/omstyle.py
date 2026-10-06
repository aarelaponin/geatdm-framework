"""The shared style of the figures of the Orchestrator manual.

Every figure is drawn on a canvas 9 inches wide and placed in Word at 6.5 inches wide, a scale of
0.72. The smallest text on the canvas is 11 pt, which is 7.9 pt on the page; body text is 12 pt
(8.7 pt on the page) and box headings 14 pt (10.1 pt on the page).

One colour per party, used the same way in every figure: the orchestrator blue, the working
session purple, the reviewing session green, you (the owner) orange, files and the log slate, a
failure red. Every colour is a dark edge with a light fill, and every party also carries its name,
so a figure reads the same without colour.
"""
import os

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyArrowPatch, FancyBboxPatch, Polygon, Rectangle

W = 9.0            # canvas width, inches
DPI = 300
DISPLAY_W = 6.5    # width in Word, inches
SCALE = DISPLAY_W / W

T_HEAD = 14        # box heading
T_BODY = 12        # body text
T_SMALL = 11       # the smallest text on any figure

INK = "#263238"
GREY = "#595959"
NAVY = "#1F3864"
WHITE = "#FFFFFF"

ROLE = {
    "orch": ("#1565C0", "#E3F2FD"),
    "work": ("#5E35B1", "#EDE7F6"),
    "review": ("#2E7D32", "#E8F5E9"),
    "owner": ("#E65100", "#FFF3E0"),
    "file": ("#37474F", "#ECEFF1"),
    "bad": ("#B71C1C", "#FFEBEE"),
    "plain": ("#263238", "#FFFFFF"),
    "note": ("#595959", "#F2F2F2"),
    "navy": ("#1F3864", "#EAF0F8"),
}

plt.rcParams["font.family"] = "Arial"
plt.rcParams["font.size"] = T_BODY


def canvas(h):
    """A canvas W inches wide and h inches high; the axes are in inches from the lower left."""
    fig = plt.figure(figsize=(W, h), dpi=DPI)
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_xlim(0, W)
    ax.set_ylim(0, h)
    ax.axis("off")
    return fig, ax


def save(fig, name):
    """Save next to this module at the full canvas size, never cropped, so the scale holds."""
    out = os.path.join(os.path.dirname(os.path.abspath(__file__)), name)
    fig.savefig(out, dpi=DPI, facecolor=WHITE)
    plt.close(fig)
    return out


def text(ax, x, y, s, size=T_BODY, weight="normal", color=INK, ha="center", va="center",
         style="normal", ls=1.25, z=5):
    if size < T_SMALL:
        raise ValueError(f"{size} pt is below the smallest size, {T_SMALL} pt: {s!r}")
    return ax.text(x, y, s, fontsize=size, fontweight=weight, color=color, ha=ha, va=va,
                   fontstyle=style, linespacing=ls, zorder=z)


def box(ax, x, y, w, h, title=None, body=None, role="plain", tsize=T_HEAD, bsize=T_BODY,
        radius=0.08, lw=1.4, ha="center", ls="-", fill=None, z=2, tcolor=None, gap=0.30):
    """A rounded box. The title sits at the top in the role's colour; the body below it."""
    edge, light = ROLE[role]
    p = FancyBboxPatch((x, y), w, h, boxstyle=f"round,pad=0,rounding_size={radius}",
                       linewidth=lw, edgecolor=edge, facecolor=fill or light, linestyle=ls,
                       zorder=z)
    ax.add_patch(p)
    tx = x + w / 2 if ha == "center" else x + 0.14
    if title and body:
        text(ax, tx, y + h - 0.22, title, size=tsize, weight="bold", color=tcolor or edge,
             ha=ha, va="top", z=z + 1)
        text(ax, tx, y + h - 0.22 - gap, body, size=bsize, ha=ha, va="top", z=z + 1)
    elif title:
        text(ax, tx, y + h / 2, title, size=tsize, weight="bold", color=tcolor or edge, ha=ha,
             z=z + 1)
    elif body:
        text(ax, tx, y + h / 2, body, size=bsize, ha=ha, z=z + 1)
    return p


def doc(ax, x, y, w, h, title, body=None, role="file", tsize=T_BODY, bsize=T_SMALL, z=3):
    """A page with a folded corner: a document."""
    edge, light = ROLE[role]
    f = min(0.22, h / 3)
    pts = [(x, y), (x + w, y), (x + w, y + h - f), (x + w - f, y + h), (x, y + h)]
    ax.add_patch(Polygon(pts, closed=True, facecolor=light, edgecolor=edge, linewidth=1.3,
                         zorder=z))
    ax.add_patch(Polygon([(x + w - f, y + h), (x + w - f, y + h - f), (x + w, y + h - f)],
                         closed=True, facecolor=WHITE, edgecolor=edge, linewidth=1.1,
                         zorder=z + 1))
    if body:
        text(ax, x + w / 2, y + h - 0.2, title, size=tsize, weight="bold", color=edge, va="top",
             z=z + 2)
        text(ax, x + w / 2, y + h - 0.47, body, size=bsize, va="top", z=z + 2)
    else:
        text(ax, x + w / 2, y + h / 2, title, size=tsize, weight="bold", color=edge, z=z + 2)


def folder(ax, x, y, w, h, label, body=None, role="file", z=3, lsize=T_BODY, bsize=T_SMALL,
           top=False):
    """A folder: a box with a tab on its upper left."""
    edge, light = ROLE[role]
    tab_w, tab_h = min(0.9, w * 0.4), 0.13
    ax.add_patch(Polygon([(x, y + h), (x, y + h + tab_h), (x + tab_w - 0.1, y + h + tab_h),
                          (x + tab_w, y + h)], closed=True, facecolor=light, edgecolor=edge,
                         linewidth=1.3, zorder=z))
    ax.add_patch(Rectangle((x, y), w, h, facecolor=light, edgecolor=edge, linewidth=1.3,
                           zorder=z))
    if body:
        text(ax, x + w / 2, y + h - 0.2, label, size=lsize, weight="bold", color=edge, va="top",
             z=z + 1)
        text(ax, x + w / 2, y + h - 0.48, body, size=bsize, va="top", z=z + 1)
    elif top:
        text(ax, x + w / 2, y + h - 0.2, label, size=lsize, weight="bold", color=edge, va="top",
             z=z + 1)
    else:
        text(ax, x + w / 2, y + h / 2, label, size=lsize, weight="bold", color=edge, z=z + 1)


def diamond(ax, cx, cy, w, h, s, role="navy", size=T_BODY, z=3):
    edge, light = ROLE[role]
    ax.add_patch(Polygon([(cx - w / 2, cy), (cx, cy + h / 2), (cx + w / 2, cy), (cx, cy - h / 2)],
                         closed=True, facecolor=light, edgecolor=edge, linewidth=1.4, zorder=z))
    text(ax, cx, cy, s, size=size, z=z + 1)


def pill(ax, cx, cy, s, role="file", size=T_SMALL, w=None, h=0.30, weight="bold", z=4):
    """A small rounded label, used for entries in the log."""
    edge, light = ROLE[role]
    if w is None:
        w = 0.16 + 0.085 * len(s) * size / T_SMALL
    ax.add_patch(FancyBboxPatch((cx - w / 2, cy - h / 2), w, h,
                                boxstyle=f"round,pad=0,rounding_size={h / 2}", linewidth=1.1,
                                edgecolor=edge, facecolor=light, zorder=z))
    text(ax, cx, cy, s, size=size, weight=weight, color=edge, z=z + 1)
    return w


def arrow(ax, p1, p2, color=INK, lw=1.6, ls="-", rad=0.0, head=14, z=1, both=False):
    a = FancyArrowPatch(p1, p2, arrowstyle="<|-|>" if both else "-|>", mutation_scale=head,
                        linewidth=lw, color=color, linestyle=ls, zorder=z,
                        connectionstyle=f"arc3,rad={rad}", shrinkA=0, shrinkB=0)
    ax.add_patch(a)
    return a


def line(ax, pts, color=INK, lw=1.6, ls="-", z=1):
    xs, ys = zip(*pts)
    ax.plot(xs, ys, color=color, linewidth=lw, linestyle=ls, zorder=z, solid_capstyle="butt")


def elbow(ax, pts, color=INK, lw=1.6, ls="-", z=1, head=14):
    """A path of straight segments ending in an arrow head."""
    if len(pts) > 2:
        line(ax, pts[:-1], color=color, lw=lw, ls=ls, z=z)
    arrow(ax, pts[-2], pts[-1], color=color, lw=lw, ls=ls, z=z, head=head)


def lane(ax, y, h, label, role, x0=0.05, x1=None, label_w=1.35, size=T_BODY):
    """A horizontal band for one party, with its name on the left."""
    edge, light = ROLE[role]
    x1 = W - 0.05 if x1 is None else x1
    ax.add_patch(Rectangle((x0, y), x1 - x0, h, facecolor=light, edgecolor="none", zorder=0,
                           alpha=0.55))
    ax.add_patch(Rectangle((x0, y), label_w, h, facecolor=light, edgecolor=edge, linewidth=1.2,
                           zorder=0.5))
    text(ax, x0 + label_w / 2, y + h / 2, label, size=size, weight="bold", color=edge)


def num(ax, cx, cy, n, role="navy", r=0.15, size=T_SMALL):
    """A numbered disc, for the steps of a sequence."""
    edge, _ = ROLE[role]
    ax.add_patch(matplotlib.patches.Circle((cx, cy), r, facecolor=edge, edgecolor=edge, zorder=6))
    text(ax, cx, cy, str(n), size=size, weight="bold", color=WHITE, z=7)


def cross(ax, cx, cy, r=0.12, color="#B71C1C", lw=2.2):
    line(ax, [(cx - r, cy - r), (cx + r, cy + r)], color=color, lw=lw, z=8)
    line(ax, [(cx - r, cy + r), (cx + r, cy - r)], color=color, lw=lw, z=8)


def tick(ax, cx, cy, r=0.12, color="#2E7D32", lw=2.4):
    line(ax, [(cx - r, cy), (cx - r * 0.3, cy - r * 0.7), (cx + r, cy + r * 0.8)], color=color,
         lw=lw, z=8)

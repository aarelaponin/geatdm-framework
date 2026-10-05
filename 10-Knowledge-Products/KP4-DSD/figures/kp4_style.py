"""kp4_style — the shared style of every KP4 figure drawn with matplotlib.

It is KP3's style (kp3_style.py in KP3-DPI/figures), taken over unchanged so that KP4's figures
read as one family with KP3's, with helpers added at the end: width_of() and wrap(), which
measure a text and break it into lines that fit a width; start_node() and end_node(), the dot
of a beginning and the ring-and-dot mark of an ending; and MARK, the fact sheet's sentence
that the case is simulated. KP4's palette
is the project's locked visual vocabulary, the one KP3 uses (a recommendation taken
when the figures were first drawn: no separate KP4 palette is written down anywhere).

What it fixes
    Colours: the visual vocabulary of the project (navy for headings, mid blue for emphasis,
    blue for the build, purple for the roadmap method, green for the AI toolkit, slate for the
    reference library, grey for captions), each paired with a very light fill.
    Fonts: Arial, no text smaller than 12 pt on the 10-inch canvas, so that no text is smaller
    than 7.8 pt when the figure is placed at 6.5 inches, the width of a page's text column.
    Output: PNG at 300 dots per inch, written without a time stamp, so that drawing the same
    figure twice gives the same file.

How to use it
    import kp4_style as s

    fig, ax = s.new_figure("F2_three-places", height=5.0)   # 10 inches wide; 1 unit = 1 inch,
                                                           # origin at the bottom left
    s.title(ax, "The three places an agreed service gets lost")
    s.box(ax, x, y, w, h, title="PHEQA", body="keeps the register of institutions", role="build")
    s.text(ax, x, y, "a label", size=s.BODY, color=s.GREY_TEXT)
    s.arrow(ax, (x1, y1), (x2, y2))
    s.save(fig, "F2_three-places.png")

    Every word drawn goes through title(), box() or text(), and each records what it wrote in
    s.LABELS as (figure name, text). LABELS is one list for the whole run: it collects across
    every figure drawn since the module was imported, so a program that draws several figures
    and checks them reads it by figure name. A label made of separate names is written with
    " · " between them; each name is then checked on its own.
    save() first runs check_fit(), which refuses the figure if any text runs outside its box or
    outside the canvas, overlaps another text, or is smaller than MIN_PT.

The public names
    Colours     NAVY, ACCENT, SPINE, RAIL, ENGINE, FOUNDATION, GREY_TEXT, GREY_BG, WHITE;
                FILL maps each dark colour to its light fill; ROLE maps each role to its colour.
    Canvas      CANVAS_W (10 inches), DPI (300).
    Type        TITLE (16), HEADING (14), BODY (13), SMALL (12) in points; MIN_PT (12), the
                least size save() accepts; LINE (1.25), the line spacing; PAD (0.10 inch), the
                space kept clear inside a box; FONT, the family in use (Arial, or DejaVu Sans
                where Arial is missing).
    The record  LABELS.
    Functions   new_figure(name, height) -> (fig, ax)
                title(ax, s)                  the figure's title, top left
                text(ax, x, y, s, ...)        one text; container=(x, y, w, h) keeps it inside a box
                box(ax, x, y, w, h, title=, body=, role=, ...)
                                              a rounded box with a bold title and a body
                rect(ax, x, y, w, h, edge=, fill=, dashed=, ...)
                                              a rounded rectangle with no text
                line(ax, xs, ys, color=, dashed=)  a polyline with no head
                arrow(ax, start, end, ...)    an arrow
                line_height(size)             the height of one line, in inches
                check_fit(fig)                the list of texts that do not fit
                save(fig, path)               check, then write the PNG

    Roles for box(): "method", "build", "ai", "library", "heading", "accent", "neutral".
    box() also accepts a colour in place of a role (role=s.NAVY, for instance): the box is then
    drawn in that colour with its light fill. fill= replaces the light fill (fill=s.WHITE), and
    dashed=True draws the border dashed; both leave the default drawing unchanged when omitted.
"""

import matplotlib

matplotlib.use("Agg")

import matplotlib.pyplot as plt  # noqa: E402
from matplotlib import font_manager  # noqa: E402
from matplotlib.patches import FancyArrowPatch, FancyBboxPatch  # noqa: E402

# --- Colours: the project's visual vocabulary -------------------------------------------
NAVY = "#1F3864"         # primary heading: document structure
ACCENT = "#2E75B6"       # accent: visual emphasis
SPINE = "#1565C0"        # the build (technical content)
RAIL = "#5E35B1"         # the roadmap method (stakeholders and capability)
ENGINE = "#2E7D32"       # the AI toolkit
FOUNDATION = "#37474F"   # the reference architecture library
GREY_TEXT = "#595959"    # secondary text and captions
GREY_BG = "#F2F2F2"      # header backgrounds
WHITE = "#FFFFFF"

# Very light fills paired with each dark colour.
FILL = {
    NAVY: "#E6EAF2",
    ACCENT: "#DEEBF7",
    SPINE: "#E3F2FD",
    RAIL: "#EDE7F6",
    ENGINE: "#E8F5E9",
    FOUNDATION: "#ECEFF1",
    GREY_TEXT: GREY_BG,
}

ROLE = {
    "method": RAIL,
    "build": SPINE,
    "ai": ENGINE,
    "library": FOUNDATION,
    "heading": NAVY,
    "accent": ACCENT,
    "neutral": GREY_TEXT,
}

# --- Canvas and type ------------------------------------------------------------------------
CANVAS_W = 10.0          # inches
DPI = 300
TITLE = 16               # figure title, bold
HEADING = 14             # box heading, bold
BODY = 13                # box text
SMALL = 12               # captions, sources, notes
MIN_PT = 12              # 12 pt x 0.65 = 7.8 pt at a 6.5-inch column
LINE = 1.25              # line spacing, in multiples of the font size
PAD = 0.10               # inches kept clear between a text and its box edge

FONT = "Arial"
_available = {f.name for f in font_manager.fontManager.ttflist}
if FONT not in _available:
    FONT = "DejaVu Sans"
plt.rcParams["font.family"] = FONT
plt.rcParams["svg.fonttype"] = "none"

# --- The record of what was drawn -------------------------------------------------------------
LABELS = []              # (figure name, text) for every text drawn
_TEXTS = {}              # figure name -> [(Text, container box in inches or None)]
_current = {"name": None}


def new_figure(name, height):
    """Start a figure 10 inches wide and `height` inches high; returns (fig, ax)."""
    fig = plt.figure(figsize=(CANVAS_W, height), dpi=DPI)
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_xlim(0, CANVAS_W)
    ax.set_ylim(0, height)
    ax.axis("off")
    fig.patch.set_facecolor(WHITE)
    fig._kp4_name = name
    _current["name"] = name
    _TEXTS[name] = []
    return fig, ax


def _record(t, container=None):
    name = _current["name"]
    LABELS.append((name, t.get_text()))
    _TEXTS[name].append((t, container))
    return t


def line_height(size):
    """Height of one line of text of `size` points, in inches."""
    return size * LINE / 72.0


def text(ax, x, y, s, size=BODY, color=NAVY, bold=False, ha="left", va="center",
         container=None, rotation=0):
    """Draw one text and record it. `container` is (x, y, w, h) when it must stay inside a box."""
    t = ax.text(x, y, s, fontsize=size, color=color, ha=ha, va=va,
                fontweight="bold" if bold else "normal", linespacing=LINE,
                rotation=rotation, family=FONT)
    return _record(t, container)


def title(ax, s, y=None, size=TITLE):
    """The figure's title, left-aligned at the top."""
    h = ax.get_ylim()[1]
    y = h - 0.32 if y is None else y
    return text(ax, 0.25, y, s, size=size, color=NAVY, bold=True, ha="left", va="center")


def rect(ax, x, y, w, h, edge=NAVY, fill=None, lw=1.4, radius=0.08, dashed=False, z=1):
    """A rounded rectangle with no text."""
    p = FancyBboxPatch((x, y), w, h, boxstyle=f"round,pad=0,rounding_size={radius}",
                       linewidth=lw, edgecolor=edge,
                       facecolor=FILL.get(edge, WHITE) if fill is None else fill,
                       linestyle="--" if dashed else "-", zorder=z)
    ax.add_patch(p)
    return p


def box(ax, x, y, w, h, title=None, body=None, role="heading", solid=False, align="center",
        title_size=HEADING, body_size=BODY, lw=1.4, radius=0.08, z=2, fill=None, dashed=False):
    """A box with an optional bold title and body, stacked and centred vertically.

    role is one of the names in ROLE, or a colour. solid=True fills the box with the dark
    colour and writes white text; fill= gives another fill; dashed=True dashes the border.
    Lines are broken where the caller puts a newline; nothing is wrapped automatically.
    """
    dark = ROLE.get(role, role)
    if fill is None:
        fill = dark if solid else FILL.get(dark, WHITE)
    ink_title = WHITE if solid else dark
    ink_body = WHITE if solid else NAVY
    rect(ax, x, y, w, h, edge=dark, fill=fill, lw=lw, radius=radius, dashed=dashed, z=z)
    blocks = []
    if title:
        blocks.append((title, title_size, True, ink_title))
    if body:
        blocks.append((body, body_size, False, ink_body))
    gap = 0.06
    # the visible height of a block: its line pitch between lines, one font size for the last line
    heights = [(LINE * s.count("\n") + 1.0) * sz / 72.0 for s, sz, _, _ in blocks]
    total = sum(heights) + gap * (len(blocks) - 1)
    top = y + h / 2 + total / 2 - 0.02
    if align == "left":
        tx, ha = x + PAD + 0.04, "left"
    else:
        tx, ha = x + w / 2, "center"
    container = (x, y, w, h)
    out = []
    for (s, sz, bold, ink), bh in zip(blocks, heights):
        out.append(text(ax, tx, top, s, size=sz, color=ink, bold=bold, ha=ha, va="top",
                        container=container))
        top -= bh + gap
    return out


def arrow(ax, start, end, color=NAVY, lw=1.8, style="-|>", z=3, rad=0.0):
    """A plain arrow from start to end, in inches."""
    a = FancyArrowPatch(start, end, arrowstyle=style, mutation_scale=16, linewidth=lw,
                        color=color, zorder=z, shrinkA=0, shrinkB=0,
                        connectionstyle=f"arc3,rad={rad}")
    ax.add_patch(a)
    return a


def line(ax, xs, ys, color=NAVY, lw=1.6, z=1, dashed=False):
    """A polyline through the points (xs[i], ys[i]), in inches, with no arrow head."""
    ax.plot(xs, ys, color=color, linewidth=lw, zorder=z, solid_capstyle="round",
            linestyle="--" if dashed else "-")


def check_fit(fig):
    """List every text that runs outside its box or the canvas, overlaps another, or is too small."""
    name = fig._kp4_name
    fig.canvas.draw()
    r = fig.canvas.get_renderer()
    ax = fig.axes[0]
    pad_px = PAD * 0.5 * fig.dpi
    W, H = fig.bbox.width, fig.bbox.height
    problems = []
    boxes = []
    for t, cont in _TEXTS.get(name, []):
        if not t.get_text().strip():
            continue
        bb = t.get_window_extent(renderer=r)
        if t.get_fontsize() < MIN_PT:
            problems.append(f"{name}: '{t.get_text()}' is {t.get_fontsize()} pt, below {MIN_PT}")
        if bb.x0 < 0 or bb.y0 < 0 or bb.x1 > W or bb.y1 > H:
            problems.append(f"{name}: '{t.get_text()}' runs outside the canvas")
        if cont is not None:
            x, y, w, h = cont
            (cx0, cy0) = ax.transData.transform((x, y))
            (cx1, cy1) = ax.transData.transform((x + w, y + h))
            if (bb.x0 < cx0 + pad_px or bb.x1 > cx1 - pad_px or
                    bb.y0 < cy0 + pad_px * 0.5 or bb.y1 > cy1 - pad_px * 0.5):
                problems.append(f"{name}: '{t.get_text()}' runs outside its box")
        boxes.append((t.get_text(), bb))
    for i in range(len(boxes)):
        for j in range(i + 1, len(boxes)):
            a, b = boxes[i][1], boxes[j][1]
            ox = min(a.x1, b.x1) - max(a.x0, b.x0)
            oy = min(a.y1, b.y1) - max(a.y0, b.y0)
            if ox > 1 and oy > 1:
                problems.append(f"{name}: '{boxes[i][0]}' overlaps '{boxes[j][0]}'")
    return problems


def save(fig, path):
    """Check the fit, then write the PNG without a time stamp. Refuses a figure that does not fit."""
    problems = check_fit(fig)
    if problems:
        plt.close(fig)
        raise ValueError("figure does not fit:\n  " + "\n  ".join(problems))
    fig.savefig(path, dpi=DPI, facecolor=WHITE, metadata={"Software": None})
    plt.close(fig)
    return path


# --- Helpers added for KP4 ---------------------------------------------------------------------
from matplotlib.font_manager import FontProperties  # noqa: E402
from matplotlib.patches import Circle  # noqa: E402
from matplotlib.textpath import TextPath  # noqa: E402


def width_of(s, size=BODY, bold=False):
    """The width of one line of text, in inches."""
    prop = FontProperties(family=FONT, weight="bold" if bold else "normal")
    return TextPath((0, 0), s, size=size, prop=prop).get_extents().width / 72.0


def wrap(s, width, size=BODY, bold=False):
    """Break s into lines no wider than `width` inches, at spaces; returns the text with newlines."""
    lines, cur = [], ""
    for word in s.split():
        trial = word if not cur else cur + " " + word
        if cur and width_of(trial, size, bold) > width:
            lines.append(cur)
            cur = word
        else:
            cur = trial
    if cur:
        lines.append(cur)
    return "\n".join(lines)


def end_node(ax, x, y, r=0.13, color=NAVY):
    """The mark of an ending: a ring with a dot inside, as UML draws a final node."""
    ax.add_patch(Circle((x, y), r, facecolor=WHITE, edgecolor=color, linewidth=1.8, zorder=4))
    ax.add_patch(Circle((x, y), r * 0.55, facecolor=color, edgecolor=color, zorder=5))


def start_node(ax, x, y, r=0.1, color=NAVY):
    """The mark of a beginning: a filled dot."""
    ax.add_patch(Circle((x, y), r, facecolor=color, edgecolor=color, zorder=4))


MARK = "This is a simulated case for Progressa, a fictional country"

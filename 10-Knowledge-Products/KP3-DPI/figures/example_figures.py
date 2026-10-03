"""example_figures — draws the four KP3 figures of the worked examples, into this folder.

    python3 example_figures.py           reads the worked examples in ../examples and draws F4, F13,
                                         F14 and F15 as PNG files beside this file
    python3 example_figures.py --check   writes no file; lists every text each figure carries with
                                         the table cell, heading or sentence of the example it was
                                         read from, and exits 1 if a text differs from its source,
                                         stands in another row or column than its source, or a row
                                         of a source table is missing from the figure

    --examples DIR    read the worked examples from DIR instead of ../examples
    --out DIR         write the PNG files into DIR instead of this folder
    --check DIR       check against the examples in DIR (by default, the ones drawn from)
    --outline FILE    with --check, also look for each figure's title in FILE, the KP3 outline

F4   The maturity table of Progressa's five domains    E5: the maturity table, and the scale
F13  The roadmap over time: horizons and waves          E7: the horizons, the component register
                                                        and the four waves of the first horizon
F14  The matrix of dependencies                         E7: the component register and the table
                                                        of dependencies, with the critical path
F15  The investment case: its four sheets as tables     E8: sheets 1 to 4

Every value on a figure is read from the example's own table each time the program runs, and
none is typed here, so a figure follows the next correction of its example. Each figure carries
the word "Illustrative", as the examples mark their tables. Before a file is written, the check
that --check prints is run on the figure, and a figure that fails it is not written. The style
(colours, fonts, sizes, and the check that no text is cut or overlaps) is kp3_style.py beside
this file; long texts are broken into lines here, because the style module does not wrap.

F15 draws every row and every amount of the four sheets, with the columns that name each row;
the three columns that describe a row in words (the key activities, what a source funds and how
a return arises) are left to the example, so that the four sheets fit one page of the guide.
"""

import argparse
import hashlib
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.dont_write_bytecode = True     # leave no compiled files in the folder of figures
sys.path.insert(0, HERE)
import kp3_style as s  # noqa: E402

import matplotlib.pyplot as plt  # noqa: E402
from matplotlib.backends.backend_agg import FigureCanvasAgg  # noqa: E402
from matplotlib.figure import Figure  # noqa: E402

EXAMPLES = os.path.normpath(os.path.join(HERE, "..", "examples"))
FILES = {
    "E5": "E5_domain-report-and-maturity-table.md",
    "E7": "E7_roadmap.md",
    "E8": "E8_investment-case.md",
}
NAMES = {
    "F4": "F4_maturity-table",
    "F13": "F13_roadmap-over-time",
    "F14": "F14_dependency-matrix",
    "F15": "F15_investment-case",
}
# The figures' titles, as the outline's table of figures names what each one shows.
TITLES = {
    "F4": "The maturity table of Progressa's five domains",
    "F13": "The roadmap over time: horizons and waves",
    "F14": "The matrix of dependencies",
    "F15": "The investment case: its four sheets as tables",
}
# Columns of E8 that describe a row in words; F15 leaves them to the example (see above).
DESCRIPTIONS = ("Key activities", "What it funds", "How the return arises")

LEFT, RIGHT = 0.25, s.CANVAS_W - 0.25
WIDTH = RIGHT - LEFT
CELL_X = 0.08      # inches between a cell's side and its text
CELL_Y = 0.07      # inches above and below the text of a cell
TOP = 0.85         # inches from the top of a figure to the first thing below its title
NUMBER = re.compile(r"(—|[0-9][0-9,.]*(–[0-9][0-9,.]*)?)")


# --- Reading the examples ---------------------------------------------------------------------
def _cells(line):
    return [c.strip() for c in line.strip().split("|")[1:-1]]


def _plain(cell):
    return cell.replace("**", "").strip()


class Table:
    """One Markdown table of an example, as the file stands: its header, rows and line numbers."""

    def __init__(self, ex, head_i, first_i):
        self.ex = ex
        self.heading = ex.lines[head_i].lstrip("#").strip()
        self.header = [_plain(c) for c in _cells(ex.lines[first_i])]
        if not re.fullmatch(r"\|(\s*:?-+:?\s*\|)+", ex.lines[first_i + 1].strip()):
            raise SystemExit(f"{ex.file}: the table under '{self.heading}' has no rule line")
        self.rows, self.bold, self.line = [], [], []
        k = first_i + 2
        while k < len(ex.lines) and ex.lines[k].startswith("|"):
            raw = _cells(ex.lines[k])
            if len(raw) != len(self.header):
                raise SystemExit(f"{ex.file}, line {k + 1}: {len(raw)} cells, "
                                 f"{len(self.header)} in the header")
            self.rows.append({h: _plain(c) for h, c in zip(self.header, raw)})
            self.bold.append({h: c.startswith("**") for h, c in zip(self.header, raw)})
            self.line.append(k + 1)
            k += 1

    def col(self, name):
        """A column's name as the table writes it; stops if the table has no such column."""
        if name not in self.header:
            raise SystemExit(f"{self.ex.file}: '{self.heading}' has no column '{name}'")
        return name

    def index(self, keyfn):
        """The rows by their key; stops if two rows share one."""
        out = {}
        for i, row in enumerate(self.rows):
            k = keyfn(row)[1]
            if k in out:
                raise SystemExit(f"{self.ex.file}: two rows of '{self.heading}' have the key '{k}'")
            out[k] = i
        return out


class Example:
    """One worked example, read from its Markdown file."""

    def __init__(self, folder, code):
        self.code = code
        self.file = FILES[code]
        with open(os.path.join(folder, self.file), "rb") as fh:
            raw = fh.read()
        self.sha256 = hashlib.sha256(raw).hexdigest()
        self.text = raw.decode("utf-8")
        self.lines = self.text.split("\n")
        self.flat = norm(self.text.replace("*", "")).lower()   # for finding a sentence or heading

    def find(self, pattern, flags=re.M):
        """The first match of `pattern`, and the number of the line on which it starts."""
        m = re.search(pattern, self.text, flags)
        if not m:
            raise SystemExit(f"{self.file}: nothing matches {pattern!r}")
        return m, self.text.count("\n", 0, m.start()) + 1

    def table(self, heading):
        """The first table under the first heading that matches the pattern `heading`."""
        for i, ln in enumerate(self.lines):
            if ln.startswith("#") and re.match(heading, ln):
                break
        else:
            raise SystemExit(f"{self.file}: no heading matches {heading!r}")
        j = i + 1
        while j < len(self.lines) and not self.lines[j].startswith("|"):
            if self.lines[j].startswith("#"):
                break
            j += 1
        if j >= len(self.lines) or not self.lines[j].startswith("|"):
            raise SystemExit(f"{self.file}: no table under '{self.lines[i]}'")
        return Table(self, i, j)

    def case(self):
        """The example's own sentence saying that it is a simulated case."""
        m, ln = self.find(r"^\*\*Simulated case:\*\* (.+)$")
        return m.group(1).strip(), ln

    def has(self, text):
        return norm(text).lower() in self.flat


def read_examples(folder):
    return {code: Example(folder, code) for code in FILES}


def norm(t):
    """A text as the check compares it: lines joined, quotes and spaces made plain."""
    t = t.replace("–\n", "–").replace("\n", " ")
    t = t.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')
    return re.sub(r"\s+", " ", t).strip()


# --- Measuring and breaking texts into lines --------------------------------------------------
_MFIG = Figure(figsize=(s.CANVAS_W, 4), dpi=s.DPI)
FigureCanvasAgg(_MFIG)
_MREN = _MFIG.canvas.get_renderer()
_MEASURED = {}


def measure(text, size, bold=False):
    """Width and height in inches of `text` as the style module will draw it."""
    key = (text, size, bold)
    if key not in _MEASURED:
        t = _MFIG.text(0, 0, text, fontsize=size, family=s.FONT, linespacing=s.LINE,
                       fontweight="bold" if bold else "normal")
        bb = t.get_window_extent(renderer=_MREN)
        t.remove()
        _MEASURED[key] = (bb.width / s.DPI, bb.height / s.DPI)
    return _MEASURED[key]


def _pieces(word):
    """A word cut after each dash between figures, as in 3,600–5,400."""
    return [p for p in re.split(r"(?<=–)", word) if p]


def wrap(text, width, size, bold=False):
    """Break `text` at spaces, and after a dash inside a range of figures if a word is too wide,
    so that no line is wider than `width` inches. Nothing is shortened or changed."""
    out = []
    for para in text.split("\n"):
        line = ""
        for word in para.split(" "):
            trial = word if not line else line + " " + word
            if measure(trial, size, bold)[0] <= width:
                line = trial
                continue
            if line:
                out.append(line)
            line = ""
            for piece in _pieces(word):
                trial = line + piece
                if line and measure(trial, size, bold)[0] > width:
                    out.append(line)
                    trial = piece
                line = trial
        out.append(line)
    return "\n".join(out)


def widest_piece(text, size, bold=False):
    return max(measure(p, size, bold)[0] for w in text.split() for p in _pieces(w))


# --- What each text claims to be --------------------------------------------------------------
def tag(texts, **claim):
    """Write on each text what it claims to be; the check compares the claim with the example
    and with the place where the text was drawn."""
    for t in texts if isinstance(texts, (list, tuple)) else [texts]:
        t.set_gid(json.dumps(claim, ensure_ascii=False, sort_keys=True))
    return texts


def tag_patch(p, **claim):
    p.set_gid(json.dumps(claim, ensure_ascii=False, sort_keys=True))
    return p


# --- Pieces every figure uses -----------------------------------------------------------------
def label_box(ax, x, y, w, h, text, size=s.SMALL, bold=False, color=s.NAVY, edge=s.NAVY,
              fill=None, lw=1.0, radius=0.05, z=2, ha="center"):
    """A box with one text centred in it by its measured height. The style module's box()
    centres by an estimate of one font size per line, which sets a text low in a low box."""
    s.rect(ax, x, y, w, h, edge=edge, fill=fill, lw=lw, radius=radius, z=z)
    tx = x + w / 2 if ha == "center" else x + CELL_X + 0.04
    return s.text(ax, tx, y + h / 2, text, size=size, bold=bold, color=color, ha=ha,
                  va="center", container=(x, y, w, h))


def title_and_mark(ax, fig_id, h):
    tag(s.title(ax, TITLES[fig_id]), kind="title")
    tag(label_box(ax, RIGHT - 1.45, h - 0.53, 1.45, 0.4, "Illustrative", size=s.HEADING,
                  bold=True, color=s.ACCENT, edge=s.ACCENT, lw=1.4, radius=0.08), kind="badge")


def block_height(text, width, size=s.SMALL, bold=False):
    return measure(wrap(text, width, size, bold), size, bold)[1]


def text_block(ax, x, y_top, text, width, size=s.SMALL, color=s.GREY_TEXT, bold=False, **claim):
    """A text broken to `width`, its top at `y_top`; returns the y of its bottom."""
    body = wrap(text, width, size, bold)
    t = s.text(ax, x, y_top, body, size=size, color=color, bold=bold, va="top")
    tag(t, **claim)
    return y_top - measure(body, size, bold)[1]


def heading(ax, x, y_top, text, width, src, line):
    return text_block(ax, x, y_top, text, width, size=s.HEADING, color=s.RAIL, bold=True,
                      kind="text", src=src, line=line)


# --- Tables -----------------------------------------------------------------------------------
def numeric(table, col):
    vals = [r[col] for r in table.rows if r[col]]
    return bool(vals) and sum(bool(NUMBER.fullmatch(v)) for v in vals) * 2 >= len(vals)


def natural_widths(table, cols, rows, size=s.SMALL):
    """For each column, the width that holds its longest text on one line, and the least width
    that holds its longest word, both with the cell's margins."""
    nat, least = {}, {}
    for c in cols:
        texts = [(table.rows[i][c], table.bold[i][c]) for i in rows if table.rows[i][c]]
        nat[c] = max([measure(c, size, True)[0]] +
                     [measure(t, size, b)[0] for t, b in texts]) + 2 * CELL_X
        least[c] = max([widest_piece(c, size, True)] +
                       [widest_piece(t, size, b) for t, b in texts]) + 2 * CELL_X
    return nat, least


def share_widths(nat, least, cols, total, fixed=None):
    """Columns that are narrow keep their natural width; the wide ones share what is left, in
    proportion to their natural width and never below their least width."""
    fixed = fixed or {}
    widths = dict(fixed)
    todo = [c for c in cols if c not in fixed]
    left = total - sum(fixed.values())
    if sum(nat[c] for c in todo) <= left:
        grow = left / sum(nat[c] for c in todo)
        widths.update({c: nat[c] * grow for c in todo})
        return [widths[c] for c in cols]
    while todo:
        fair = left / len(todo)
        narrow = [c for c in todo if nat[c] <= fair]
        if not narrow:
            break
        for c in narrow:
            widths[c] = nat[c]
            left -= nat[c]
            todo.remove(c)
    tot = sum(nat[c] for c in todo)
    for c in todo:
        widths[c] = max(least[c], left * nat[c] / tot)
    return [widths[c] for c in cols]


class TablePlan:
    """The layout of some rows and columns of one table, worked out before anything is drawn.

    keyfn(row) gives (the column that holds the row's key, the key). A key whose column is not
    drawn, or whose drawn columns before it are empty, spans those empty columns, as a subtotal's
    words do. Every text drawn is tagged: a column's header, a row's key, or one cell's value.
    """

    def __init__(self, table, cols, widths, keyfn, rows=None, part=None, size=s.SMALL,
                 special=None, key_bold=False):
        self.t, self.cols, self.widths, self.keyfn = table, cols, widths, keyfn
        self.rows = list(range(len(table.rows))) if rows is None else rows
        self.part, self.size, self.special, self.key_bold = part, size, special or {}, key_bold
        self.num = {c: numeric(table, c) and c not in self.special for c in cols}
        self.head = [wrap(c, w - 2 * CELL_X, size, True) for c, w in zip(cols, widths)]
        self.head_h = max(measure(h, size, True)[1] for h in self.head) + 2 * CELL_Y
        self.cells = []      # per row: [(text, x0, width, column or None, bold, is key)]
        self.heights = []
        xs = [0.0]
        for w in widths:
            xs.append(xs[-1] + w)
        self.xs = xs
        for i in self.rows:
            row, bold = table.rows[i], table.bold[i]
            kcol, key = keyfn(row)
            if kcol in cols:
                k = cols.index(kcol)
                first = k
                while first > 0 and not row[cols[first - 1]]:
                    first -= 1
            else:
                first, k = 0, -1
                while k + 1 < len(cols) and not row[cols[k + 1]]:
                    k += 1
                if k < 0:
                    raise SystemExit(f"{table.ex.file}: no room for the key '{key}'")
            spanned = set(range(first, k + 1))
            kb = bold[kcol] or key_bold
            items = [(key, xs[first], xs[k + 1] - xs[first], None, kb, True)]
            for j, c in enumerate(cols):
                if j in spanned or not row[c]:
                    continue
                items.append((row[c], xs[j], widths[j], c, bold[c], False))
            laid, h = [], 0.0
            for text, x0, w, c, b, is_key in items:
                if c in self.special:
                    body = text
                    th = measure(text, size, b)[1]
                else:
                    body = wrap(text, w - 2 * CELL_X, size, b)
                    th = measure(body, size, b)[1]
                laid.append((body, x0, w, c, b, is_key))
                h = max(h, th)
            self.cells.append((i, kcol, key, laid, any(bold.values())))
            self.heights.append(h + 2 * CELL_Y)
        self.height = self.head_h + sum(self.heights)
        self.width = sum(widths)

    def draw(self, ax, x, y_top):
        """Draw the planned table with its top left corner at (x, y_top); returns its bottom."""
        t, src = self.t, self.t.ex.code
        y = y_top - self.head_h
        s.rect(ax, x, y, self.width, self.head_h, edge=s.GREY_BG, fill=s.GREY_BG, lw=0,
               radius=0.0)
        for c, h, x0, w in zip(self.cols, self.head, self.xs, self.widths):
            right = self.num[c]
            tx = x + x0 + w - CELL_X if right else x + x0 + CELL_X
            tag(s.text(ax, tx, y + self.head_h / 2, h, size=self.size, bold=True, color=s.NAVY,
                       ha="right" if right else "left", container=(x + x0, y, w, self.head_h)),
                kind="header", src=src, table=t.heading, col=c, part=self.part)
        s.line(ax, [x, x + self.width], [y, y], color=s.NAVY, lw=1.0, z=2)
        for (i, kcol, key, laid, total), rh in zip(self.cells, self.heights):
            y -= rh
            if total:
                s.rect(ax, x, y, self.width, rh, edge=s.FILL[s.ACCENT], fill=s.FILL[s.ACCENT],
                       lw=0, radius=0.0)
            for body, x0, w, c, b, is_key in laid:
                box = (x + x0, y, w, rh)
                if c in self.special:
                    texts = self.special[c](ax, box, body, i)
                else:
                    right = c is not None and self.num[c]
                    tx = x + x0 + w - CELL_X if right else x + x0 + CELL_X
                    texts = s.text(ax, tx, y + rh / 2, body, size=self.size, bold=b,
                                   color=s.NAVY, ha="right" if right else "left", container=box)
                if is_key:
                    tag(texts, kind="key", src=src, table=t.heading, row=key, col=kcol,
                        part=self.part, line=t.line[i])
                else:
                    tag(texts, kind="value", src=src, table=t.heading, row=key, col=c,
                        part=self.part, line=t.line[i])
            s.line(ax, [x, x + self.width], [y, y], color=s.GREY_TEXT, lw=0.4, z=2)
        return y


# --- F4: the maturity table -------------------------------------------------------------------
def read_f4(ex):
    e5 = ex["E5"]
    t = e5.table(r"#+ The maturity table")
    rng, rng_line = e5.find(r"range from (\d+(?:\.\d+)?) to (\d+(?:\.\d+)?), one unit to each stage")
    rule, rule_line = e5.find(r"below \d+(?:\.\d+)? [A-Z][a-z]+(?:, from \d+(?:\.\d+)? [A-Z][a-z]+)+")
    bounds = [float(b) for b in re.findall(r"from (\d+(?:\.\d+)?) [A-Z][a-z]+", rule.group(0))]
    return t, rng, rng_line, bounds


def f4(ex):
    t, rng, rng_line, bounds = read_f4(ex)
    lo, hi = float(rng.group(1)), float(rng.group(2))
    key_col, score_col = t.header[0], t.col("Score")
    keyfn = lambda row: (key_col, row[key_col])   # noqa: E731
    cols = list(t.header)
    rows = list(range(len(t.rows)))
    num_w = max(measure(r[score_col], s.SMALL, True)[0] for r in t.rows)
    bar_w = 1.25
    nat, least = natural_widths(t, cols, rows)
    widths = share_widths(nat, least, cols, WIDTH,
                          fixed={score_col: 2 * CELL_X + num_w + 0.15 + bar_w + 0.05})

    def score_cell(ax, box, text, i):
        x0, y0, w, h = box
        ym = y0 + h / 2
        out = s.text(ax, x0 + CELL_X, ym, text, size=s.SMALL, bold=True, color=s.NAVY,
                     container=box)
        bx = x0 + CELL_X + num_w + 0.15
        bw = w - (bx - x0) - CELL_X - 0.05
        tag_patch(s.rect(ax, bx, ym - 0.075, bw, 0.15, edge=s.RAIL, fill=s.FILL[s.RAIL], lw=0.8,
                         radius=0.02, z=2), kind="bar-track", row=t.rows[i][key_col])
        tag_patch(s.rect(ax, bx, ym - 0.075, bw * (float(text) - lo) / (hi - lo), 0.15,
                         edge=s.RAIL, fill=s.RAIL, lw=0.8, radius=0.02, z=3),
                  kind="bar", row=t.rows[i][key_col])
        for b in bounds:
            xb = bx + bw * (b - lo) / (hi - lo)
            s.line(ax, [xb, xb], [ym - 0.11, ym + 0.11], color=s.GREY_TEXT, lw=0.8, z=4)
        return out

    plan = TablePlan(t, cols, widths, keyfn, special={score_col: score_cell}, key_bold=True)
    case, case_line = t.ex.case()
    note = f"Each bar places the score on the {rng.group(0)}; the marks divide the stages."
    h = (TOP + plan.height + 0.25 + block_height(note, WIDTH) + 0.06
         + block_height(case, WIDTH) + 0.3)
    fig, ax = s.new_figure(NAMES["F4"], height=h)
    title_and_mark(ax, "F4", h)
    y = plan.draw(ax, LEFT, h - TOP)
    y = text_block(ax, LEFT, y - 0.25, note, WIDTH, kind="caption", src="E5",
                   reads=rng.group(0), line=rng_line)
    text_block(ax, LEFT, y - 0.06, case, WIDTH, kind="text", src="E5", line=case_line)
    return fig


# --- F13: the roadmap over time ---------------------------------------------------------------
def read_e7(ex):
    e7 = ex["E7"]
    hz = e7.table(r"## Part 2 ")
    reg = e7.table(r"#+ The component register")
    p2, p2_line = e7.find(r"^## Part 2 — (.+?) \(")
    p3, p3_line = e7.find(r"^## Part 3 — (.+?) \(")
    waves, current = [], None
    for i, ln in enumerate(e7.lines):
        m = re.match(r"^### Wave (\d+) — (.+?): (.+)$", ln)
        if m:
            current = {"n": m.group(1), "label": f"Wave {m.group(1)}", "period": m.group(2),
                       "name": m.group(3), "line": i + 1, "beacon": None}
            waves.append(current)
            continue
        if ln.startswith("#"):
            current = None          # the wave's section ends at the next heading
        b = re.search(r"\*\*Beacon (B\d+ — .+?)\.\*\*", ln)
        if b and current is not None:
            current["beacon"] = (b.group(1), i + 1)
    if not waves:
        raise SystemExit("E7: no wave of the first horizon found")
    return e7, hz, reg, (p2.group(1), p2_line), (p3.group(1), p3_line), waves


def years(cell):
    m = re.fullmatch(r"(\d{4})\D+(\d{4})", cell)
    if not m:
        raise SystemExit(f"E7: cannot read the years '{cell}'")
    return int(m.group(1)), int(m.group(2))


CHIP_W, CHIP_H, CHIP_GAP = 0.66, 0.3, 0.1


def chip(ax, x, y, comp, beacon):
    """One component of the roadmap; the component that delivers a beacon is drawn solid."""
    t = label_box(ax, x, y, CHIP_W, CHIP_H, comp, color=s.WHITE if beacon else s.NAVY,
                  edge=s.ACCENT if beacon else s.NAVY, fill=s.ACCENT if beacon else None,
                  lw=1.0, z=3)
    return tag(t, kind="chip", src="E7", row=comp)


def f13(ex):
    e7, hz, reg, (p2, p2_line), (p3, p3_line), waves = read_e7(ex)
    hcol, ycol, acol, kcol = hz.header[0], hz.col("Years"), hz.col("Aim"), hz.col("Components")
    ccol, wcol, tcol, dcol = (reg.header[0], reg.col("Wave"), reg.col("Track"),
                              reg.col("What it delivers"))
    rhcol = reg.col("Horizon")
    beacons = {r[ccol] for r in reg.rows if re.search(r"\b[Bb]eacon B\d+\b", r[dcol])}
    in_waves = [r for r in reg.rows if re.fullmatch(r"W\d+", r[wcol])]
    tracks = []
    for r in in_waves:
        if r[tcol] not in tracks:
            tracks.append(r[tcol])
    beacon_word = "Beacon"
    if not e7.has(beacon_word):
        raise SystemExit("E7: the word 'Beacon' is not in the example")

    # the three horizons, each as wide as its years
    spans = [years(r[ycol]) for r in hz.rows]
    first, last = min(a for a, b in spans), max(b for a, b in spans)
    gap = 0.15
    per_year = (WIDTH - gap * (len(hz.rows) - 1)) / (last - first + 1)
    hboxes, hb_h = [], 0.0
    for n, (r, (a, b)) in enumerate(zip(hz.rows, spans)):
        x = LEFT + (a - first) * per_year + gap * n
        w = (b - a + 1) * per_year
        code = r[hcol].split()[0]
        later = [c[ccol] for c in reg.rows
                 if c[rhcol] == code and not re.fullmatch(r"W\d+", c[wcol])]
        inner = w - 0.24
        parts = [(r[hcol], s.HEADING, True, s.RAIL, hcol), (r[ycol], s.SMALL, True, s.NAVY, ycol),
                 (r[acol], s.SMALL, False, s.NAVY, acol)]
        if not later:       # its components are drawn wave by wave below; name them here
            parts.append((r[kcol], s.SMALL, True, s.NAVY, kcol))
        body = [(wrap(t, inner, sz, b_), sz, b_, col, c_) for t, sz, b_, col, c_ in parts]
        hgt = sum(measure(t, sz, b_)[1] for t, sz, b_, _, _ in body) + 0.08 * (len(body) - 1)
        per_row = max(1, int((inner + CHIP_GAP) // (CHIP_W + CHIP_GAP)))
        chip_rows = -(-len(later) // per_row) if later else 0
        hgt += chip_rows * (CHIP_H + 0.08) + (0.06 if later else 0)
        hboxes.append((n, r, x, w, body, later, per_row))
        hb_h = max(hb_h, hgt + 0.24)

    # the four waves of the first horizon
    label_w = max(measure(t, s.SMALL, True)[0] for t in tracks + [beacon_word]) + 0.3
    col_w = (WIDTH - label_w) / len(waves)
    inner = col_w - 0.08 - 2 * 0.1
    whead = []
    for wv in waves:
        body = [(wv["label"], s.HEADING, True, s.RAIL, "label"),
                (wrap(wv["period"], inner, s.SMALL), s.SMALL, False, s.NAVY, "period"),
                (wrap(wv["name"], inner, s.SMALL), s.SMALL, False, s.GREY_TEXT, "name")]
        whead.append(body)
    wh_h = max(sum(measure(t, sz, b)[1] for t, sz, b, _, _ in body) + 0.05 * 2
               for body in whead) + 0.22
    cells = {}
    for r in in_waves:
        cells.setdefault((r[tcol], r[wcol]), []).append(r[ccol])
    per_cell = max(1, int((col_w - 0.2 + CHIP_GAP) // (CHIP_W + CHIP_GAP)))
    row_h = {}
    for tr in tracks:
        n = max([-(-len(cells.get((tr, f"W{wv['n']}"), [])) // per_cell) for wv in waves] + [1])
        row_h[tr] = n * CHIP_H + (n - 1) * 0.08 + 0.2
    btexts = {wv["n"]: wrap(wv["beacon"][0], inner, s.SMALL) for wv in waves if wv["beacon"]}
    beacon_h = max([measure(t, s.SMALL)[1] for t in btexts.values()] + [CHIP_H]) + 0.2

    case, case_line = e7.case()
    key_words = "the component that delivers the wave's beacon"
    h = (TOP + measure(p2, s.HEADING, True)[1] + 0.12 + hb_h + 0.4
         + measure(p3, s.HEADING, True)[1] + 0.12 + wh_h + sum(row_h.values()) + beacon_h
         + 0.25 + CHIP_H + 0.12 + block_height(case, WIDTH) + 0.3)
    fig, ax = s.new_figure(NAMES["F13"], height=h)
    title_and_mark(ax, "F13", h)

    y = heading(ax, LEFT, h - TOP, p2, WIDTH, "E7", p2_line) - 0.12
    for n, r, x, w, body, later, per_row in hboxes:
        box = (x, y - hb_h, w, hb_h)
        tag_patch(s.rect(ax, *box, edge=s.RAIL, fill=s.FILL[s.RAIL], lw=1.4), kind="hbox",
                  row=r[hcol])
        ty = y - 0.12
        for text, sz, b, colr, c in body:
            t = s.text(ax, x + 0.12, ty, text, size=sz, bold=b, color=colr, va="top", container=box)
            tag(t, kind="key" if c == hcol else "value", src="E7", table=hz.heading,
                row=r[hcol], col=c, line=hz.line[n])
            ty -= measure(text, sz, b)[1] + 0.08
        ty -= 0.02
        for k, comp in enumerate(later):
            cx = x + 0.12 + (k % per_row) * (CHIP_W + CHIP_GAP)
            cy = ty - (k // per_row) * (CHIP_H + 0.08) - CHIP_H
            chip(ax, cx, cy, comp, comp in beacons)
    y -= hb_h + 0.4

    y = heading(ax, LEFT, y, p3, WIDTH, "E7", p3_line) - 0.12
    x_waves = LEFT + label_w
    for k, (wv, body) in enumerate(zip(waves, whead)):
        bx = x_waves + k * col_w + 0.04
        box = (bx, y - wh_h, col_w - 0.08, wh_h)
        s.rect(ax, *box, edge=s.RAIL, fill=s.FILL[s.RAIL], lw=1.2)
        ty = y - 0.11
        for text, sz, b, colr, what in body:
            t = s.text(ax, bx + 0.1, ty, text, size=sz, bold=b, color=colr, va="top",
                       container=box)
            tag(t, kind="wave", src="E7", wave=f"W{wv['n']}", part=what, line=wv["line"])
            ty -= measure(text, sz, b)[1] + 0.05
    y -= wh_h
    for n, tr in enumerate(tracks + [beacon_word]):
        rh = row_h.get(tr, beacon_h)
        if n % 2 == 0:
            s.rect(ax, LEFT, y - rh, WIDTH, rh, edge=s.FILL[s.FOUNDATION],
                   fill=s.FILL[s.FOUNDATION], lw=0, radius=0.0, z=0)
        lab = (LEFT, y - rh, label_w - 0.08, rh)
        t = s.text(ax, LEFT + 0.1, y - rh / 2, tr, size=s.SMALL, bold=True, color=s.NAVY,
                   container=lab)
        if tr == beacon_word:
            tag(t, kind="beacon-row", src="E7")
        else:
            tag(t, kind="track", src="E7", track=tr)
        for k, wv in enumerate(waves):
            cx0 = x_waves + k * col_w
            if tr == beacon_word:
                if wv["n"] in btexts:
                    box = (cx0 + 0.04, y - rh, col_w - 0.08, rh)
                    t = s.text(ax, cx0 + 0.14, y - rh / 2, btexts[wv["n"]], size=s.SMALL,
                               color=s.NAVY, container=box)
                    tag(t, kind="beacon", src="E7", wave=f"W{wv['n']}", line=wv["beacon"][1])
                continue
            comps = cells.get((tr, f"W{wv['n']}"), [])
            for j, comp in enumerate(comps):
                in_row = min(per_cell, len(comps) - (j // per_cell) * per_cell)
                span = in_row * CHIP_W + (in_row - 1) * CHIP_GAP
                cx = cx0 + (col_w - span) / 2 + (j % per_cell) * (CHIP_W + CHIP_GAP)
                cy = y - 0.1 - (j // per_cell + 1) * CHIP_H - (j // per_cell) * 0.08
                chip(ax, cx, cy, comp, comp in beacons)
        y -= rh
    y -= 0.25
    s.rect(ax, LEFT, y - CHIP_H, CHIP_W, CHIP_H, edge=s.ACCENT, fill=s.ACCENT, lw=0, radius=0.05)
    tag(s.text(ax, LEFT + CHIP_W + 0.12, y - CHIP_H / 2, key_words, size=s.SMALL, color=s.NAVY),
        kind="caption")
    text_block(ax, LEFT, y - CHIP_H - 0.12, case, WIDTH, kind="text", src="E7", line=case_line)
    return fig


# --- F14: the matrix of dependencies ----------------------------------------------------------
def read_f14(ex):
    e7 = ex["E7"]
    reg = e7.table(r"#+ The component register")
    dep = e7.table(r"## Part 5 ")
    path, path_line = e7.find(r"\*\*Critical path:\*\* (.+?)\.(?:\s|$)")
    pairs = {}
    for i, r in enumerate(dep.rows):
        for item in r[dep.header[1]].split(","):
            m = re.fullmatch(r"(C-\d+)(?: \((.+)\))?", item.strip())
            if not m:
                raise SystemExit(f"E7, line {dep.line[i]}: cannot read '{item.strip()}'")
            pairs[(r[dep.header[0]], m.group(1))] = (m.group(2), dep.line[i])
    return e7, reg, dep, pairs, path.group(1), path_line


def groups_of(reg):
    """The components in order, grouped by wave, or by horizon after the first."""
    ccol, wcol, hcol = reg.header[0], reg.col("Wave"), reg.col("Horizon")
    out = []
    for r in reg.rows:
        g = r[wcol] if re.fullmatch(r"W\d+", r[wcol]) else r[hcol]
        if not out or out[-1][0] != g:
            out.append((g, []))
        out[-1][1].append(r[ccol])
    return out


def f14(ex):
    e7, reg, dep, pairs, path, path_line = read_f14(ex)
    ccol = reg.header[0]
    comps = [r[ccol] for r in reg.rows]
    groups = groups_of(reg)
    hdr_row, hdr_col = dep.header[0], dep.header[1]
    chain = [c.strip() for c in path.split("→")]
    critical = set(zip(chain[1:], chain[:-1]))     # (row depends on, column)
    base = max(measure(c, s.SMALL, True)[0] for c in comps) + 0.12
    cw = {c: base for c in comps}
    for (r, c), (q, _) in pairs.items():
        if q:
            cw[c] = max(cw[c], measure(q, s.SMALL)[0] + 0.16)
    # the band of groups is wide enough for its labels and, with the column of rows, for the
    # header of the rows written in the corner above them
    gw = max([measure(g, s.SMALL, True)[0] + 0.24 for g, _ in groups] +
             [measure(hdr_row, s.SMALL, True)[0] + 0.16 - 0.04 - base])
    rh = 0.34
    x_rows = LEFT + gw + 0.04
    x0 = x_rows + base
    xs = {}
    x = x0
    for c in comps:
        xs[c] = x
        x += cw[c]
    x_end = x
    matrix_w = x_end - x0
    corner_w = x0 - LEFT
    if x_end > RIGHT + 1e-9:
        raise SystemExit("F14: the matrix is wider than the page")
    case, case_line = e7.case()
    line_words = ("A mark in a row: the component of the row depends on the component "
                  "of the column")
    h = TOP + 0.3 + 0.34 + rh + rh * len(comps) + 0.3 + 0.3 + 0.3 + block_height(case, WIDTH) + 0.3
    fig, ax = s.new_figure(NAMES["F14"], height=h)
    title_and_mark(ax, "F14", h)

    y = h - TOP
    t = s.text(ax, x0 + matrix_w / 2, y - 0.15, hdr_col, size=s.SMALL, bold=True, color=s.RAIL,
               ha="center", container=(x0, y - 0.3, matrix_w, 0.3))
    tag(t, kind="header", src="E7", table=dep.heading, col=hdr_col)
    y -= 0.3
    for g, members in groups:
        gx = xs[members[0]]
        gwid = sum(cw[c] for c in members)
        tag(label_box(ax, gx + 0.02, y - 0.32, gwid - 0.04, 0.3, g, bold=True, color=s.RAIL,
                      edge=s.RAIL, radius=0.04), kind="group", src="E7", axis="column", group=g,
            first=members[0])
    y -= 0.34
    tag(s.text(ax, LEFT + 0.08, y - rh / 2, hdr_row, size=s.SMALL, bold=True, color=s.RAIL,
               container=(LEFT, y - rh, corner_w, rh)),
        kind="header", src="E7", table=dep.heading, col=hdr_row)
    for c in comps:
        box = (xs[c], y - rh, cw[c], rh)
        s.rect(ax, *box, edge=s.GREY_BG, fill=s.GREY_BG, lw=0, radius=0.0)
        tag(s.text(ax, xs[c] + cw[c] / 2, y - rh / 2, c, size=s.SMALL, bold=True, color=s.NAVY,
                   ha="center", container=box), kind="column", src="E7", comp=c)
    y -= rh
    top = y
    for g, members in groups:
        gh = rh * len(members)
        tag(label_box(ax, LEFT, y - gh + 0.02, gw, gh - 0.04, g, bold=True, color=s.RAIL,
                      edge=s.RAIL, radius=0.04), kind="group", src="E7", axis="row", group=g,
            first=members[0])
        for r in members:
            box = (x_rows, y - rh, base, rh)
            s.rect(ax, *box, edge=s.GREY_BG, fill=s.GREY_BG, lw=0, radius=0.0)
            tag(s.text(ax, x_rows + base / 2, y - rh / 2, r, size=s.SMALL, bold=True,
                       color=s.NAVY, ha="center", container=box), kind="row", src="E7", comp=r)
            for c in comps:
                cell = (xs[c], y - rh, cw[c], rh)
                if r == c:
                    s.rect(ax, *cell, edge=s.GREY_TEXT, fill=s.GREY_BG, lw=0.3, radius=0.0)
                elif (r, c) in critical and (r, c) in pairs:
                    tag_patch(s.rect(ax, *cell, edge=s.ACCENT, fill=s.FILL[s.ACCENT], lw=1.2,
                                     radius=0.0, z=2), kind="critical", row=r, col=c)
                else:
                    s.rect(ax, *cell, edge=s.GREY_TEXT, fill=s.WHITE, lw=0.3, radius=0.0)
                if (r, c) in pairs:
                    q, ln = pairs[(r, c)]
                    tag(s.text(ax, xs[c] + cw[c] / 2, y - rh / 2, q or "●", size=s.SMALL,
                               color=s.NAVY, ha="center", container=cell),
                        kind="dependency", src="E7", row=r, col=c, line=ln)
            y -= rh
    # the lines between groups
    for g, members in groups[1:]:
        gx = xs[members[0]]
        s.line(ax, [gx, gx], [top, y], color=s.NAVY, lw=1.2, z=4)
    yy = top
    for g, members in groups[:-1]:
        yy -= rh * len(members)
        s.line(ax, [x0, x_end], [yy, yy], color=s.NAVY, lw=1.2, z=4)
    y -= 0.3
    s.rect(ax, LEFT, y - 0.11, 0.42, 0.22, edge=s.ACCENT, fill=s.FILL[s.ACCENT], lw=1.2,
           radius=0.0)
    tag(s.text(ax, LEFT + 0.55, y, f"Critical path: {path}", size=s.SMALL, color=s.NAVY),
        kind="text", src="E7", line=path_line)
    y -= 0.3
    tag(s.text(ax, LEFT, y, line_words, size=s.SMALL, color=s.NAVY), kind="caption")
    text_block(ax, LEFT, y - 0.25, case, WIDTH, kind="text", src="E7", line=case_line)
    return fig


# --- F15: the investment case -----------------------------------------------------------------
def read_f15(ex):
    e8 = ex["E8"]
    sheets = []
    for i, ln in enumerate(e8.lines):
        m = re.match(r"^## (Sheet \d+ — .+)$", ln)
        if m:
            sheets.append((m.group(1), i + 1, e8.table(re.escape(ln))))
    if len(sheets) != 4:
        raise SystemExit(f"E8: {len(sheets)} sheets found, four expected")
    unit, unit_line = e8.find(r"All amounts are in [^.]+\.")
    return e8, sheets, unit.group(0), unit_line


def sheet_key(t):
    """The column that names each row of a sheet: the first column, unless it is empty for a
    row (a subtotal); then the first cell that is not empty."""
    first = t.header[0]

    def keyfn(row):
        if row[first]:
            return first, row[first]
        for c in t.header:
            if row[c]:
                return c, row[c]
        raise SystemExit(f"{t.ex.file}: an empty row in '{t.heading}'")
    return keyfn


def sheet_key_source(t):
    """Sheet 3 names a row by its source; its group is shared by several rows."""
    src = t.col("Source")
    return lambda row: (src, row[src])


def f15(ex):
    e8, sheets, unit, unit_line = read_f15(ex)
    plans = []
    gap = 0.3
    for n, (title, line, t) in enumerate(sheets, start=1):
        keyfn = sheet_key_source(t) if "Source" in t.header else sheet_key(t)
        t.index(keyfn)
        cols = [c for c in t.header if c not in DESCRIPTIONS]
        plans.append((title, line, t, keyfn, cols))

    # sheet 1, in two parts side by side, split after the subtotal nearest the middle
    title1, line1, t1, key1, cols1 = plans[0]
    part_w = (WIDTH - gap) / 2
    nat, least = natural_widths(t1, cols1, range(len(t1.rows)))
    w1 = share_widths(nat, least, cols1, part_w)
    cuts = [i + 1 for i in range(len(t1.rows) - 1) if any(t1.bold[i].values())]
    cut = min(cuts, key=lambda c: max(c, len(t1.rows) - c))
    p1a = TablePlan(t1, cols1, w1, key1, rows=list(range(cut)), part="first rows")
    p1b = TablePlan(t1, cols1, w1, key1, rows=list(range(cut, len(t1.rows))), part="last rows")

    # sheet 2 across the page
    title2, line2, t2, key2, cols2 = plans[1]
    nat, least = natural_widths(t2, cols2, range(len(t2.rows)))
    p2 = TablePlan(t2, cols2, share_widths(nat, least, cols2, WIDTH), key2)

    # sheets 3 and 4 side by side, each as wide as its columns need
    title3, line3, t3, key3, cols3 = plans[2]
    title4, line4, t4, key4, cols4 = plans[3]
    nat3, least3 = natural_widths(t3, cols3, range(len(t3.rows)))
    nat4, least4 = natural_widths(t4, cols4, range(len(t4.rows)))
    a3, a4 = sum(nat3.values()), sum(nat4.values())
    w3 = (WIDTH - gap) * a3 / (a3 + a4)
    w4 = WIDTH - gap - w3
    p3 = TablePlan(t3, cols3, share_widths(nat3, least3, cols3, w3), key3)
    p4 = TablePlan(t4, cols4, share_widths(nat4, least4, cols4, w4), key4)

    case, case_line = e8.case()
    hh1 = block_height(title1, WIDTH, s.HEADING, True)
    hh2 = block_height(title2, WIDTH, s.HEADING, True)
    hh34 = max(block_height(title3, w3, s.HEADING, True), block_height(title4, w4, s.HEADING, True))
    h = (TOP + block_height(unit, WIDTH) + 0.2
         + hh1 + 0.1 + max(p1a.height, p1b.height) + 0.3
         + hh2 + 0.1 + p2.height + 0.3
         + hh34 + 0.1 + max(p3.height, p4.height) + 0.25
         + block_height(case, WIDTH) + 0.3)
    fig, ax = s.new_figure(NAMES["F15"], height=h)
    title_and_mark(ax, "F15", h)
    y = text_block(ax, LEFT, h - TOP, unit, WIDTH, kind="text", src="E8", line=unit_line) - 0.2

    y = heading(ax, LEFT, y, title1, WIDTH, "E8", line1) - 0.1
    ya = p1a.draw(ax, LEFT, y)
    yb = p1b.draw(ax, LEFT + part_w + gap, y)
    y = min(ya, yb) - 0.3

    y = heading(ax, LEFT, y, title2, WIDTH, "E8", line2) - 0.1
    y = p2.draw(ax, LEFT, y) - 0.3

    top = y
    ya = heading(ax, LEFT, top, title3, w3, "E8", line3)
    yb = heading(ax, LEFT + w3 + gap, top, title4, w4, "E8", line4)
    y = min(ya, yb) - 0.1
    ya = p3.draw(ax, LEFT, y)
    yb = p4.draw(ax, LEFT + w3 + gap, y)
    y = min(ya, yb) - 0.25
    text_block(ax, LEFT, y, case, WIDTH, kind="text", src="E8", line=case_line)
    return fig


FIGURES = (("F4", f4), ("F13", f13), ("F14", f14), ("F15", f15))


# --- The check --------------------------------------------------------------------------------
def _box(cont):
    x, y, w, h = cont
    return x, y, x + w, y + h


def _mid(cont):
    x, y, w, h = cont
    return x + w / 2, y + h / 2


def _within(v, lo, hi):
    return lo - 1e-9 <= v <= hi + 1e-9


class Report:
    def __init__(self, verbose):
        self.verbose, self.bad, self.counts = verbose, 0, {}

    def __call__(self, ok, fig, kind, text, where):
        self.counts[(fig, kind)] = self.counts.get((fig, kind), 0) + 1
        if not ok:
            self.bad += 1
        if self.verbose or not ok:
            shown = norm(text)
            shown = shown if len(shown) <= 60 else shown[:57] + "..."
            print(f"  {'ok  ' if ok else 'FAIL'}  {kind:9s}  {shown:60s}  {where}")


def labels_of(name):
    """The texts the style module recorded for one figure (kp3_style.LABELS, read by figure
    name), each with what it claims to be and the box it was drawn in."""
    recs = s._TEXTS.get(name, [])
    labs = [t for n, t in s.LABELS if n == name]
    if len(recs) != len(labs) or any(r[0].get_text() != lab for r, lab in zip(recs, labs)):
        raise SystemExit(f"{name}: the record of labels does not match the texts drawn")
    return [(lab, json.loads(t.get_gid()) if t.get_gid() else {}, cont, t)
            for (t, cont), lab in zip(recs, labs)]


def check_table(rep, fig, items, table, keyfn):
    """Every header, key and value of one table drawn on `fig`: its text against the table, and
    each value's place against the header of its column and the key of its row."""
    T, src = table.heading, table.ex.code
    rows = table.index(keyfn)
    mine = [it for it in items if it[1].get("src") == src and it[1].get("table") == T]
    heads, keys = {}, {}
    for lab, cl, cont, _ in mine:
        if cl["kind"] == "header":
            ok = cl["col"] in table.header and norm(lab) == cl["col"]
            heads[(cl.get("part"), cl["col"])] = cont
            rep(ok, fig, "header", lab, f"{src} '{T}', column '{cl['col']}'")
        elif cl["kind"] == "key":
            i = rows.get(cl["row"])
            ok = i is not None and norm(lab) == norm(keyfn(table.rows[i])[1])
            keys.setdefault(cl["row"], []).append((cl.get("part"), cont))
            rep(ok, fig, "key", lab, f"{src} line {table.line[i] if i is not None else '?'}")
    seen = {}
    for lab, cl, cont, _ in mine:
        if cl["kind"] != "value":
            continue
        i = rows.get(cl["row"])
        if i is None or cl["col"] not in table.header:
            rep(False, fig, "value", lab, f"no cell '{cl['row']}' · '{cl['col']}' in {src}")
            continue
        want = table.rows[i][cl["col"]]
        same = norm(lab) == norm(want)
        cx, cy = _mid(cont)
        head = heads.get((cl.get("part"), cl["col"]))
        key = [k for k in keys.get(cl["row"], []) if k[0] == cl.get("part")]
        placed = (head is not None and _within(cx, _box(head)[0], _box(head)[2]) and
                  len(key) == 1 and _within(cy, _box(key[0][1])[1], _box(key[0][1])[3]))
        seen[(cl["row"], cl["col"])] = seen.get((cl["row"], cl["col"]), 0) + 1
        where = f"{src} line {table.line[i]}, {cl['row']} · {cl['col']}"
        if not same:
            where += f": the table has '{want}'"
        if not placed:
            where += ": drawn outside its row or column"
        rep(same and placed, fig, "value", lab, where)
    # every row drawn, with every cell of the drawn columns that is not empty
    cols = sorted({c for (_, c) in heads}, key=table.header.index)
    missing = 0
    for i, row in enumerate(table.rows):
        kcol, key = keyfn(row)
        if len(keys.get(key, [])) != 1:
            missing += 1
            rep(False, fig, "row", key, f"{src} line {table.line[i]}: drawn "
                f"{len(keys.get(key, []))} times")
            continue
        for c in cols:
            if c != kcol and row[c] and seen.get((key, c), 0) != 1:
                missing += 1
                rep(False, fig, "cell", row[c], f"{src} line {table.line[i]}, {key} · {c}: "
                    f"drawn {seen.get((key, c), 0)} times")
    left_out = [c for c in table.header if c not in cols]
    print(f"  {T}: {len(table.rows)} rows, {len(table.rows) - missing} drawn in full; "
          f"columns drawn: {', '.join(cols)}"
          + (f"; left to the example: {', '.join(left_out)}" if left_out else ""))
    return missing == 0


def check_f4(rep, items, ex, fig):
    t, rng, rng_line, bounds = read_f4(ex)
    key_col = t.header[0]
    keyfn = lambda row: (key_col, row[key_col])   # noqa: E731
    ok = check_table(rep, "F4", items, t, keyfn)
    lo, hi = float(rng.group(1)), float(rng.group(2))
    patches = {}
    for p in fig.axes[0].patches:
        if p.get_gid():
            cl = json.loads(p.get_gid())
            patches[(cl["kind"], cl.get("row"))] = p
    rows = t.index(keyfn)
    score_col = t.col("Score")
    for key, i in rows.items():
        bar, track = patches.get(("bar", key)), patches.get(("bar-track", key))
        if bar is None or track is None:
            rep(False, "F4", "bar", key, "no bar drawn")
            ok = False
            continue
        drawn = lo + (hi - lo) * bar.get_width() / track.get_width()
        want = float(t.rows[i][score_col])
        good = abs(drawn - want) < 1e-6 and abs(bar.get_x() - track.get_x()) < 1e-9
        rep(good, "F4", "bar", f"{key} {drawn:.3f}",
            f"E5 line {t.line[i]}: score {t.rows[i][score_col]} on the range "
            f"{rng.group(1)} to {rng.group(2)}")
        ok &= good
    return ok


def check_f13(rep, items, ex, fig):
    e7, hz, reg, (p2, p2_line), (p3, p3_line), waves = read_e7(ex)
    ok = True
    hcol, ycol = hz.header[0], hz.col("Years")
    ccol, wcol, tcol, rhcol = reg.header[0], reg.col("Wave"), reg.col("Track"), reg.col("Horizon")
    dcol = reg.col("What it delivers")
    hrows = {r[hcol]: i for i, r in enumerate(hz.rows)}
    regrows = reg.index(lambda r: (ccol, r[ccol]))
    hbox = {}       # horizon key -> its box
    wband, tband, bband = {}, {}, None
    for lab, cl, cont, _ in items:
        if cl.get("kind") == "key" and cl.get("table") == hz.heading:
            hbox[cl["row"]] = cont
        elif cl.get("kind") == "wave":
            wband.setdefault(cl["wave"], cont)
        elif cl.get("kind") == "track":
            tband[cl["track"]] = cont
        elif cl.get("kind") == "beacon-row":
            bband = cont
    chips = {}
    for lab, cl, cont, _ in items:
        k = cl.get("kind")
        if k in ("key", "value") and cl.get("table") == hz.heading:
            i = hrows.get(cl["row"])
            want = None if i is None else hz.rows[i][cl["col"]]
            good = want is not None and norm(lab) == norm(want) and cont == hbox.get(cl["row"])
            rep(good, "F13", k, lab, f"E7 line {hz.line[i] if i is not None else '?'}, "
                f"{cl['row']} · {cl['col']}, inside the box of {cl['row']}")
            ok &= good
        elif k == "wave":
            wv = [w for w in waves if f"W{w['n']}" == cl["wave"]]
            good = len(wv) == 1 and norm(lab) in norm(e7.lines[wv[0]["line"] - 1])
            rep(good, "F13", "wave", lab, f"E7 line {cl['line']}, the heading of {cl['wave']}")
            ok &= good
        elif k == "track":
            good = lab in {r[tcol] for r in reg.rows}
            rep(good, "F13", "track", lab, f"E7 '{reg.heading}', column {tcol}")
            ok &= good
        elif k == "beacon-row":
            good = e7.has(lab)
            rep(good, "F13", "text", lab, "E7, the waves of Part 3")
            ok &= good
        elif k == "beacon":
            wv = [w for w in waves if f"W{w['n']}" == cl["wave"] and w["beacon"]]
            cx, cy = _mid(cont)
            band = wband.get(cl["wave"])
            good = (len(wv) == 1 and norm(lab) == norm(wv[0]["beacon"][0]) and band is not None
                    and bband is not None and _within(cx, _box(band)[0], _box(band)[2])
                    and _within(cy, _box(bband)[1], _box(bband)[3]))
            rep(good, "F13", "beacon", lab, f"E7 line {cl['line']}, under {cl['wave']}")
            ok &= good
        elif k == "chip":
            chips[cl["row"]] = chips.get(cl["row"], 0) + 1
            i = regrows.get(cl["row"])
            if i is None or norm(lab) != cl["row"]:
                rep(False, "F13", "chip", lab, "not a component of the register")
                ok = False
                continue
            r = reg.rows[i]
            cx, cy = _mid(cont)
            if re.fullmatch(r"W\d+", r[wcol]):
                band, row = wband.get(r[wcol]), tband.get(r[tcol])
                good = (band is not None and row is not None
                        and _within(cx, _box(band)[0], _box(band)[2])
                        and _within(cy, _box(row)[1], _box(row)[3]))
                where = f"E7 line {reg.line[i]}: {r[wcol]}, track {r[tcol]}"
            else:
                hk = [k_ for k_ in hbox if k_.split()[0] == r[rhcol]]
                good = len(hk) == 1 and all(
                    _within(v, a, b) for v, a, b in ((cx, _box(hbox[hk[0]])[0], _box(hbox[hk[0]])[2]),
                                                     (cy, _box(hbox[hk[0]])[1], _box(hbox[hk[0]])[3])))
                where = f"E7 line {reg.line[i]}: horizon {r[rhcol]}"
            rep(good, "F13", "chip", lab, where)
            ok &= good
    # every horizon and every component drawn once, the boxes as wide as their years
    for key in hrows:
        if key not in hbox:
            rep(False, "F13", "row", key, "horizon not drawn")
            ok = False
    for comp in regrows:
        if chips.get(comp, 0) != 1:
            rep(False, "F13", "row", comp, f"drawn {chips.get(comp, 0)} times")
            ok = False
    pboxes = {}
    beacon_chips = set()
    for p in fig.axes[0].patches:
        if p.get_gid():
            cl = json.loads(p.get_gid())
            if cl["kind"] == "hbox":
                pboxes[cl["row"]] = p
    for lab, cl, cont, t in items:
        if cl.get("kind") == "chip" and t.get_color() == s.WHITE:
            beacon_chips.add(cl["row"])
    per = None
    for key, i in hrows.items():
        a, b = years(hz.rows[i][ycol])
        p = pboxes.get(key)
        if p is None:
            continue
        unit = p.get_width() / (b - a + 1)
        per = unit if per is None else per
        good = abs(unit - per) < 1e-9
        rep(good, "F13", "width", key, f"E7 line {hz.line[i]}: {b - a + 1} years, "
            f"{p.get_width():.3f} in wide")
        ok &= good
    want = {r[ccol] for r in reg.rows if re.search(r"\b[Bb]eacon B\d+\b", r[dcol])}
    good = beacon_chips == want
    rep(good, "F13", "beacons", ", ".join(sorted(beacon_chips)),
        f"E7 '{reg.heading}', column '{dcol}' names a beacon for {', '.join(sorted(want))}")
    ok &= good
    print(f"  {hz.heading}: {len(hz.rows)} rows, {len(hbox)} drawn; "
          f"{reg.heading}: {len(reg.rows)} rows, {sum(1 for c in regrows if chips.get(c) == 1)} "
          f"drawn once; waves of Part 3: {len(waves)}, {len(wband)} drawn")
    return ok


def check_f14(rep, items, ex, fig):
    e7, reg, dep, pairs, path, path_line = read_f14(ex)
    ok = True
    ccol = reg.header[0]
    comps = [r[ccol] for r in reg.rows]
    colband, rowband = {}, {}
    for lab, cl, cont, _ in items:
        if cl.get("kind") == "column":
            colband[cl["comp"]] = cont
            good = lab == cl["comp"] and cl["comp"] in comps
            rep(good, "F14", "column", lab, f"E7 '{reg.heading}'")
            ok &= good
        elif cl.get("kind") == "row":
            rowband[cl["comp"]] = cont
            good = lab == cl["comp"] and cl["comp"] in comps
            rep(good, "F14", "row", lab, f"E7 '{reg.heading}'")
            ok &= good
        elif cl.get("kind") == "header":
            good = lab in dep.header
            rep(good, "F14", "header", lab, f"E7 '{dep.heading}', the header")
            ok &= good
    drawn = {}
    for lab, cl, cont, _ in items:
        if cl.get("kind") != "dependency":
            continue
        cx, cy = _mid(cont)
        cols = [c for c, b in colband.items() if _within(cx, _box(b)[0], _box(b)[2])]
        rows = [r for r, b in rowband.items() if _within(cy, _box(b)[1], _box(b)[3])]
        if len(cols) != 1 or len(rows) != 1:
            rep(False, "F14", "dependency", lab, "not in one row and one column")
            ok = False
            continue
        r, c = rows[0], cols[0]
        drawn[(r, c)] = drawn.get((r, c), 0) + 1
        want = pairs.get((r, c))
        good = want is not None and lab == (want[0] or "●")
        rep(good, "F14", "dependency", lab, f"row {r}, column {c}: " +
            (f"E7 line {want[1]}, {r} depends on {c}" + (f" ({want[0]})" if want[0] else "")
             if want else "E7 has no such dependency"))
        ok &= good
    for (r, c), (q, ln) in pairs.items():
        if drawn.get((r, c), 0) != 1:
            rep(False, "F14", "row", f"{r} on {c}", f"E7 line {ln}: drawn {drawn.get((r, c), 0)} times")
            ok = False
    for c in comps:
        if c not in colband or c not in rowband:
            rep(False, "F14", "row", c, "component without its row or column")
            ok = False
    runs = {members[0]: (g, members) for g, members in groups_of(reg)}   # by first component
    placed = {}
    for lab, cl, cont, _ in items:
        if cl.get("kind") != "group":
            continue
        g, members = runs.get(cl.get("first"), (None, None))
        if not members or lab != g:
            rep(False, "F14", "group", lab, "no such wave or horizon in the register")
            ok = False
            continue
        placed[(cl["first"], cl["axis"])] = placed.get((cl["first"], cl["axis"]), 0) + 1
        x0, y0, x1, y1 = _box(cont)
        if cl["axis"] == "column":
            a = min(_box(colband[m])[0] for m in members)
            b = max(_box(colband[m])[2] for m in members)
            good = a - 1e-9 <= x0 and x1 <= b + 1e-9 and (x1 - x0) > (b - a) - 0.1
        else:
            a = min(_box(rowband[m])[1] for m in members)
            b = max(_box(rowband[m])[3] for m in members)
            good = a - 1e-9 <= y0 and y1 <= b + 1e-9 and (y1 - y0) > (b - a) - 0.1
        rep(good, "F14", "group", lab, f"E7 '{reg.heading}': {', '.join(members)} ({cl['axis']}s)")
        ok &= good
    for first, (g, members) in runs.items():
        for axis in ("column", "row"):
            if placed.get((first, axis), 0) != 1:
                rep(False, "F14", "group", g, f"over the {axis}s of {', '.join(members)}: drawn "
                    f"{placed.get((first, axis), 0)} times")
                ok = False
    chain = [c.strip() for c in path.split("→")]
    want = set(zip(chain[1:], chain[:-1]))
    shaded = set()
    for p in fig.axes[0].patches:
        if p.get_gid():
            cl = json.loads(p.get_gid())
            if cl["kind"] == "critical":
                shaded.add((cl["row"], cl["col"]))
    good = shaded == want and want <= set(pairs)
    rep(good, "F14", "critical", " → ".join(chain), f"E7 line {path_line}: "
        f"{len(shaded)} cells shaded, each a dependency of the table")
    ok &= good
    print(f"  {dep.heading}: {len(dep.rows)} rows, {len(pairs)} dependencies, "
          f"{sum(1 for v in drawn.values() if v == 1)} drawn once; {reg.heading}: "
          f"{len(comps)} rows, {sum(1 for c in comps if c in colband and c in rowband)} drawn "
          f"as a row and a column")
    return ok


def check_f15(rep, items, ex, fig):
    e8, sheets, unit, unit_line = read_f15(ex)
    ok = True
    for title, line, t in sheets:
        keyfn = sheet_key_source(t) if "Source" in t.header else sheet_key(t)
        ok &= check_table(rep, "F15", items, t, keyfn)
    return ok


CHECKS = {"F4": check_f4, "F13": check_f13, "F14": check_f14, "F15": check_f15}


def check_figure(fig_id, fig, ex, outline, verbose=True):
    """Check one drawn figure against the examples `ex`; True if nothing failed."""
    name = NAMES[fig_id]
    rep = Report(verbose)
    items = labels_of(name)
    print(f"{name}: {len(items)} labels")
    ok = CHECKS[fig_id](rep, items, ex, fig)
    marked = []
    for lab, cl, cont, _ in items:
        k = cl.get("kind")
        if k == "title":
            if outline is None:
                rep(True, fig_id, "title", lab, "the outline was not given")
            else:
                good = norm(lab).lower() in outline
                rep(good, fig_id, "title", lab, "in the outline's table of figures")
                ok &= good
        elif k in ("text",):
            good = ex[cl["src"]].has(lab)
            rep(good, fig_id, "text", lab, f"{cl['src']} line {cl.get('line', '?')}")
            ok &= good
        elif k == "caption":
            if cl.get("reads"):
                good = ex[cl["src"]].has(cl["reads"]) and cl["reads"] in lab
                rep(good, fig_id, "caption", lab, f"the figure's words, with "
                    f"'{cl['reads']}' read from {cl['src']} line {cl['line']}")
                ok &= good
            else:
                rep(True, fig_id, "caption", lab, "the figure's own words")
        elif k == "badge":
            rep(True, fig_id, "badge", lab, "the figure's own word")
        elif not k:
            rep(False, fig_id, "untagged", lab, "a text that claims nothing")
            ok = False
        if "illustrative" in lab.lower():
            marked.append(norm(lab))
    fit = s.check_fit(fig)
    if fit:
        for f_ in fit:
            print(f"  FAIL  fit        {f_}")
    print(f"  illustrative on its face: {'yes' if marked else 'NO'} — "
          + "; ".join(f'"{m}"' for m in marked[:3]) + (" …" if len(marked) > 3 else ""))
    print(f"  fit: {'no text outside its box, no overlap, none below ' + str(s.MIN_PT) + ' pt' if not fit else str(len(fit)) + ' problems'}")
    good = ok and rep.bad == 0 and bool(marked) and not fit
    kinds = {}
    for (f_, k), n in rep.counts.items():
        kinds[k] = kinds.get(k, 0) + n
    print(f"  {'PASS' if good else 'FAIL'}: " + ", ".join(f"{n} {k}" for k, n in kinds.items())
          + f"; {rep.bad} failed")
    return good


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--examples", default=EXAMPLES, metavar="DIR",
                    help="the folder of the worked examples (default: ../examples)")
    ap.add_argument("--out", default=HERE, metavar="DIR",
                    help="the folder the PNG files are written to (default: this folder)")
    ap.add_argument("--check", nargs="?", const="", default=None, metavar="DIR",
                    help="write nothing; check every label against the examples in DIR")
    ap.add_argument("--outline", metavar="FILE", help="with --check, the KP3 outline")
    a = ap.parse_args()
    ex = read_examples(a.examples)
    if a.check is not None:
        against = read_examples(a.check) if a.check else ex
        for e in against.values():
            print(f"checked against {e.file}  sha256 {e.sha256}")
        print()
        outline = None
        if a.outline:
            with open(a.outline, encoding="utf-8") as fh:
                outline = norm(fh.read()).lower()
        results = []
        for fig_id, draw in FIGURES:
            fig = draw(ex)
            results.append(check_figure(fig_id, fig, against, outline, verbose=True))
            plt.close(fig)
        print(f"\n{sum(results)} of {len(results)} figures pass")
        sys.exit(0 if all(results) else 1)
    for fig_id, draw in FIGURES:
        fig = draw(ex)
        if not check_figure(fig_id, fig, ex, None, verbose=False):
            plt.close(fig)
            raise SystemExit(f"{NAMES[fig_id]}: not written, the check failed")
        path = os.path.join(a.out, NAMES[fig_id] + ".png")
        s.save(fig, path)
        print(f"wrote {NAMES[fig_id]}.png")


if __name__ == "__main__":
    main()

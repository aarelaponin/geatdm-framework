#!/usr/bin/env python3
"""Helper library for building KP module video decks on the ITU template.

Extracted from the worked, QA'd generator for KP1 Module 1
(KP1-GEA/build_kp1_module1_deck_v01.py). Import these helpers when building a
new module's deck; the worked example remains the reference for composition.

Usage sketch:

    import deck_lib as dl
    prs = dl.open_template()          # the ITU template shipped next to this file
    dl.edit_cover(prs, title='...', kicker='KP1 · Government Enterprise Architecture · Module 2',
                  blurb='...', length='~30 mins across 8 videos', audience='...',
                  panel_heading='THE LIFECYCLE THIS MODULE TEACHES',
                  panel_items=['Discover', 'Assess', 'Adapt', 'Plan', 'Execute & Govern'],
                  panel_footer='4 sign-offs · 6 months to a roadmap · then ongoing')
    dl.edit_agenda(prs, header='Module 2 — eight videos', items=[('2.1  ...', '~4 min'), ...],
                   message_paras=['...', '...'])
    dl.delete_template_slides(prs, keep=2)
    s = dl.add_slide(prs, dl.LAYOUT_BLUE)   # then compose with the helpers below
    prs.save('out.pptx')

All sizes in inches unless noted. Slide canvas: 13.333 x 7.5 in.
"""
import os

from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
from pptx.oxml.ns import qn

# ---- ITU branding constants (from the template + KP video guide §3.i) ----
ITU_BLUE = RGBColor(0x00, 0x9C, 0xD6)        # ITU Blue
ITU_BLUE_DARK = RGBColor(0x00, 0x6E, 0x96)   # darker accent for text on white
INK = RGBColor(0x1A, 0x1A, 0x1A)             # near-black body text
GREY = RGBColor(0x59, 0x59, 0x59)            # captions, kickers, footers
LIGHT = RGBColor(0xE5, 0xF5, 0xFB)           # light-blue tint panels (guide bg colour)
PANEL_GREY = RGBColor(0xF2, 0xF2, 0xF2)      # neutral contrast panel
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
MIDGREY = RGBColor(0xBF, 0xBF, 0xBF)         # connector / timeline lines
SEPARATOR = RGBColor(0xDD, 0xEC, 0xF4)       # thin row separators

# ---- ITU_ppt_template.pptx layout indices (verified against the template) ----
LAYOUT_WHITE = 11        # 'Blank - Footer (white bg)' — white, www.itu.int + page no. baked in
LAYOUT_BLANK_WHITE = 12  # 'Blank (white bg)'
LAYOUT_BLUE = 13         # 'Blank (blue bg)' — full-bleed F5FAFC rectangle
LAYOUT_THANKS = 14       # '2_Thank you Slide' — "Thank you!" text baked into the layout


TEMPLATE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'ITU_ppt_template.pptx')


def open_template(path=None):
    """Open the ITU template. Defaults to the copy shipped with this skill."""
    return Presentation(path or TEMPLATE)


def add_slide(prs, layout_idx):
    return prs.slides.add_slide(prs.slide_layouts[layout_idx])


def delete_template_slides(prs, keep=2):
    """Drop every template slide after the first `keep` (cover, agenda).
    python-pptx discards the orphaned parts on save."""
    sldIdLst = prs.slides._sldIdLst
    for sld in list(sldIdLst)[keep:]:
        prs.part.drop_rel(sld.get(qn('r:id')))
        sldIdLst.remove(sld)


# ---------------------------------------------------------------- text/shape primitives
def set_text(tf, runs_spec, align=None, space_after=None):
    """runs_spec: list of paragraphs; each = list of (text, size_pt, bold, color, italic)."""
    tf.word_wrap = True
    first = True
    for para in runs_spec:
        p = tf.paragraphs[0] if first else tf.add_paragraph()
        first = False
        if align is not None:
            p.alignment = align
        if space_after is not None:
            p.space_after = space_after
        for (txt, size, bold, color, italic) in para:
            r = p.add_run()
            r.text = txt
            r.font.name = 'Arial'
            r.font.size = Pt(size)
            r.font.bold = bold
            r.font.italic = italic
            r.font.color.rgb = color


def retext(tf, paras):
    """Replace an existing text frame's content in place (keeps the box, kills old runs)."""
    for p in list(tf.paragraphs[1:]):
        p._p.getparent().remove(p._p)
    p0 = tf.paragraphs[0]
    for r in list(p0.runs):
        r._r.getparent().remove(r._r)
    first = True
    for para in paras:
        p = p0 if first else tf.add_paragraph()
        first = False
        for (txt, size, bold, color, italic) in para:
            r = p.add_run()
            r.text = txt
            r.font.name = 'Arial'
            r.font.size = Pt(size)
            r.font.bold = bold
            r.font.italic = italic
            r.font.color.rgb = color


def box(slide, x, y, w, h):
    tb = slide.shapes.add_textbox(Inches(x), Inches(y), Inches(w), Inches(h))
    tb.text_frame.word_wrap = True
    return tb


def solid(shape, color, line_color=None):
    shape.fill.solid()
    shape.fill.fore_color.rgb = color
    if line_color is None:
        shape.line.fill.background()
    else:
        shape.line.color.rgb = line_color
        shape.line.width = Pt(0.75)
    shape.shadow.inherit = False
    return shape


def panel(slide, x, y, w, h, fill, line=None, radius=0.045):
    p = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(x), Inches(y), Inches(w), Inches(h))
    p.adjustments[0] = radius
    return solid(p, fill, line)


def panel_text(slide, x, y, w, h, paras, m=0.22):
    tb = box(slide, x + m, y + 0.16, w - 2 * m, h - 0.3)
    set_text(tb.text_frame, paras, space_after=Pt(7))
    return tb


def centered_panel(slide, x, y, w, h, fill, text, size, bold, color):
    p = panel(slide, x, y, w, h, fill)
    tf = p.text_frame
    set_text(tf, [[(text, size, bold, color, False)]], align=PP_ALIGN.CENTER)
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    return p


def hline(slide, x, y, w, color=SEPARATOR, weight_pt=1):
    ln = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(x), Inches(y), Inches(w), Pt(weight_pt))
    return solid(ln, color)


def num_chip(slide, x, y, n, d=0.34):
    c = slide.shapes.add_shape(MSO_SHAPE.OVAL, Inches(x), Inches(y), Inches(d), Inches(d))
    solid(c, ITU_BLUE)
    tf = c.text_frame
    tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = 0
    set_text(tf, [[(str(n), 13, True, WHITE, False)]], align=PP_ALIGN.CENTER)
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    return c


def rows_block(prs, head, rows, closing, tag, note, numbered=True, top=1.6, bottom=6.3,
               head_size=19):
    """`rows_slide` with a headline, a footer tag and a closing line under the rows. The shape
    to reach for wherever a bundle cue says 'N text rows'; the closing line is where the list
    lands."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head)
    rows_slide(s, rows, top=top, bottom=bottom, numbered=numbered, head_size=head_size)
    if closing:
        tb = box(s, 0.72, bottom + 0.12, 11.9, 0.6)
        set_text(tb.text_frame, [[(closing, 15.5, True, ITU_BLUE_DARK, False)]])
    footer(s, tag)
    notes(s, note)
    return s


# ---------------------------------------------------------------- slide furniture
def tick(slide):
    """The small ITU-blue tick top-left of content slides (mirrors the template look)."""
    r = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.5), Inches(0.42), Inches(0.05), Inches(0.28))
    return solid(r, ITU_BLUE)


def title(slide, text, size=28, width=12.3):
    """Assertion headline. Guide branding: Arial Bold 28pt."""
    tick(slide)
    tb = box(slide, 0.68, 0.30, width, 1.0)
    set_text(tb.text_frame, [[(text, size, True, INK, False)]])
    return tb


def footer(slide, tag, itu=False):
    """Left wayfinding tag ('1.3 · Why projects can't…'). LAYOUT_WHITE already bakes
    www.itu.int + page number — set itu=True ONLY on blue-bg slides (no baked footer)."""
    tb = box(slide, 0.5, 7.08, 8.5, 0.32)
    set_text(tb.text_frame, [[(tag, 9, False, GREY, False)]])
    if itu:
        tb2 = box(slide, 11.0, 7.08, 1.83, 0.32)
        set_text(tb2.text_frame, [[('www.itu.int', 9, False, GREY, False)]], align=PP_ALIGN.RIGHT)


def notes(slide, text):
    """Voice-over + production cues. Notes are the spoken words, never a slide paraphrase."""
    slide.notes_slide.notes_text_frame.text = text


# ---------------------------------------------------------------- composite slides
def rows_slide(slide, rows, top=1.55, bottom=6.85, numbered=True, head_size=19, sub_size=15.5):
    """Stacked rows: bold headline + concrete example line, thin separators, optional chips.
    rows: list of (headline, sub_or_empty). Density is allowed to be lumpy."""
    n = len(rows)
    rh = (bottom - top) / n
    for i, (head, sub) in enumerate(rows):
        y = top + i * rh
        if numbered:
            num_chip(slide, 0.68, y + 0.05, i + 1)
            tx = 1.22
        else:
            tx = 0.72
        tb = box(slide, tx, y, 13.333 - tx - 0.6, rh - 0.05)
        paras = [[(head, head_size, True, INK, False)]]
        if sub:
            paras.append([(sub, sub_size, False, GREY, False)])
        set_text(tb.text_frame, paras, space_after=Pt(3))
        if i < n - 1:
            hline(slide, 0.68, top + (i + 1) * rh - 0.045, 11.9)


def section_slide(prs, kicker, code, name, message, runtime_line, note_text):
    """Blue-bg divider that doubles as the standalone video's opening slide.
    kicker e.g. 'KP1 · MODULE 1 · VIDEO 1.3' — module-scoped, never 'of N'."""
    s = add_slide(prs, LAYOUT_BLUE)
    tb = box(s, 0.9, 0.9, 8, 0.5)
    set_text(tb.text_frame, [[(kicker, 12, True, GREY, False)]])
    tb = box(s, 0.9, 2.0, 2.2, 1.2)
    set_text(tb.text_frame, [[(code, 60, True, ITU_BLUE, False)]])
    tb = box(s, 0.9, 3.15, 10.5, 1.5)
    set_text(tb.text_frame, [[(name, 34, True, INK, False)]])
    tb = box(s, 0.9, 4.75, 10.8, 1.7)
    set_text(tb.text_frame, [[(message, 17, False, GREY, True)]])
    tb = box(s, 0.9, 6.55, 8, 0.4)
    set_text(tb.text_frame, [[(runtime_line, 12, False, GREY, False)]])
    notes(s, note_text)
    return s


def big_slide(prs, text, tag, note_text, sub=None, label='IN ONE SENTENCE'):
    """The quotable, screenshot-ready climax slide that closes a video."""
    s = add_slide(prs, LAYOUT_BLUE)
    tb = box(s, 1.1, 2.3, 11.1, 2.6)
    set_text(tb.text_frame, [[(text, 30, True, INK, False)]])
    if sub:
        tb = box(s, 1.1, 5.1, 11.1, 1.0)
        set_text(tb.text_frame, [[(sub, 16, False, GREY, True)]])
    tb = box(s, 1.1, 1.7, 6, 0.4)
    set_text(tb.text_frame, [[(label, 12, True, ITU_BLUE_DARK, False)]])
    footer(s, tag, itu=True)
    notes(s, note_text)
    return s


def sources_slide(prs, tag, items, note_text=''):
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, 'Sources')
    tb = box(s, 0.72, 1.7, 11.8, 4.2)
    set_text(tb.text_frame, [[('•  ' + it, 17, False, INK, False)] for it in items], space_after=Pt(12))
    tb = box(s, 0.72, 6.35, 11.8, 0.5)
    set_text(tb.text_frame, [[('Find the link in the description.', 14, True, ITU_BLUE_DARK, False)]])
    footer(s, tag)
    notes(s, note_text or ('Sources slide, held ~5 seconds at the end of the video. Links are compiled '
                           'into the YouTube description per ITU convention; no URLs read aloud.'))
    return s


def block_slide(prs, head, lead, punch, tag, note, punch_fill=LIGHT, punch_ink=ITU_BLUE_DARK,
                lead_size=20):
    """A paragraph of argument, then the line it lands on. The shape to reach for wherever a
    bundle cue says 'single text block'. `lead` is a list of paragraphs."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head)
    tb = box(s, 0.72, 1.75, 11.9, 2.9)
    set_text(tb.text_frame, [[(p, lead_size, False, INK, False)] for p in lead], space_after=Pt(12))
    panel(s, 0.72, 4.85, 11.9, 1.45, punch_fill)
    panel_text(s, 0.72, 4.9, 11.9, 1.45, [[(punch, 23, True, punch_ink, False)]])
    footer(s, tag)
    notes(s, note)
    return s


def two_panel(prs, head, left, right, closing, tag, note, right_fill=PANEL_GREY):
    """Comparison columns: (heading, [lines]) each side, optional closing line beneath."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head)
    cw, ch, cy = 5.9, 4.35, 1.7
    for i, ((ph, lines), fill) in enumerate(zip((left, right), (LIGHT, right_fill))):
        x = 0.72 + i * (cw + 0.23)
        panel(s, x, cy, cw, ch, fill)
        paras = [[(ph, 19, True, ITU_BLUE_DARK, False)]]
        paras += [[(ln, 16, False, INK, False)] for ln in lines]
        panel_text(s, x, cy, cw, ch, paras)
    if closing:
        tb = box(s, 0.72, 6.25, 11.9, 0.6)
        set_text(tb.text_frame, [[(closing, 15.5, True, ITU_BLUE_DARK, False)]])
    footer(s, tag)
    notes(s, note)
    return s


def mini_strip(slide, n, active_idx, x=8.05, y=0.42, w=0.92, gap=0.06, h=0.34):
    """Progress strip top-right on per-phase / per-step slides."""
    for j in range(n):
        r = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE,
                                   Inches(x + j * (w + gap)), Inches(y), Inches(w), Inches(h))
        r.adjustments[0] = 0.35
        solid(r, ITU_BLUE if j == active_idx else LIGHT)


# ---------------------------------------------------------------- template slide 1 & 2 editing
def edit_cover(prs, title_text, kicker, blurb, length, audience,
               panel_heading, panel_items, panel_footer, note_text=''):
    """Rewrite the template's video-title cover (slide 1) in place and replace the grey
    [add image] block with a flat ITU-blue motif panel listing `panel_items`."""
    cover = prs.slides[0]
    for sh in list(cover.shapes):
        if (sh.shape_type == 6 and sh.name == 'Group 19') or sh.name == 'Picture Placeholder 6':
            sh._element.getparent().remove(sh._element)
    for sh in cover.shapes:
        if not sh.has_text_frame:
            continue
        t = sh.text_frame.text
        if 'Title of the Video' in t:
            retext(sh.text_frame, [[(title_text, 30, True, INK, False)]])
        elif 'Subtitle' in t:
            retext(sh.text_frame, [
                [(kicker, 16, True, ITU_BLUE_DARK, False)],
                [(blurb, 14, False, GREY, False)],
            ])
        elif 'Lenght' in t or t.startswith('Length'):
            retext(sh.text_frame, [
                [('Length: ', 14, True, INK, False), (length, 14, False, INK, False)],
                [('Target audience: ', 14, True, INK, False), (audience, 14, False, INK, False)],
            ])
    from pptx.util import Emu
    rp = cover.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(7.68), 0, Inches(5.653), Inches(7.5))
    solid(rp, ITU_BLUE)
    tbh = box(cover, 8.15, 0.5, 4.7, 0.5)
    set_text(tbh.text_frame, [[(panel_heading, 11, True, LIGHT, False)]])
    py = 1.05
    step = min(1.02, 5.2 / max(1, len(panel_items)))
    for i, ph in enumerate(panel_items):
        last = i == len(panel_items) - 1
        bxs = cover.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(8.15), Inches(py), Inches(4.2), Inches(0.72))
        bxs.adjustments[0] = 0.14
        solid(bxs, ITU_BLUE_DARK if last else WHITE)
        tf = bxs.text_frame
        tf.margin_left = Inches(0.18)
        set_text(tf, [[(ph, 15, True, WHITE if last else INK, False)]])
        tf.vertical_anchor = MSO_ANCHOR.MIDDLE
        py += step
    tbf = box(cover, 8.15, 6.35, 4.7, 0.8)
    set_text(tbf.text_frame, [[(panel_footer, 12, False, WHITE, False)]])
    if note_text:
        notes(cover, note_text)
    return cover


def edit_agenda(prs, header, items, message_paras, note_text=''):
    """Rewrite the template agenda (slide 2): left list of videos, right italic core message.
    items: list of (label, runtime). The list placeholder inherits RIGHT alignment from the
    template — this forces LEFT."""
    agenda = prs.slides[1]
    for sh in agenda.shapes:
        if not sh.has_text_frame:
            continue
        t = sh.text_frame.text
        if t.strip() == 'Agenda':
            retext(sh.text_frame, [[(header, 14, True, GREY, False)]])
        elif 'Subtopic 1' in t:
            paras = [[(name, 15, True, INK, False), ('   ' + rt, 12, False, GREY, False)]
                     for name, rt in items]
            retext(sh.text_frame, paras)
            for p in sh.text_frame.paragraphs:
                p.alignment = PP_ALIGN.LEFT
                p.space_after = Pt(9)
        elif 'core message' in t:
            retext(sh.text_frame, [[(m, 19, False, INK, True)] for m in message_paras])
            for p in sh.text_frame.paragraphs:
                p.space_after = Pt(10)
    if note_text:
        notes(agenda, note_text)
    return agenda

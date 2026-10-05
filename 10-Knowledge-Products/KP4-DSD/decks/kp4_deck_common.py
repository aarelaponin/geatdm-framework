#!/usr/bin/env python3
# Shared reader and composer for the KP4 module decks (modules 1 to 3), on the kit's deck builder.
# The three build_kp4_module{N}_deck_v01.py programs beside this file hold the content a person
# writes (cover, agenda, opener slides, layout exceptions); this file reads everything else from
# the module's bundle build script (build_kp4_module{N}_v01.js) at build time:
#   - each video's title, runtime, single message, AI tip title and practice field;
#   - each slide cue (title, rows, footer line, sources) and the voice-over that follows it;
#   - the number of rows in the bundle's on-screen slide specification.
# So a change to a bundle is taken in by running the program again; nothing is copied by hand.
# Every helper, colour and layout index comes from the kit's deck_lib.py; nothing here redraws one.
# Generated .pptx files are NEVER hand-edited — change the bundle or the program, then rebuild.
# Output goes to the production tree the video track and the tracker read, as KP3's builder does:
# ../videos/module_{N}/en/decks/ (the combined deck, split_spec.json, the per-video decks) and
# ../videos/module_{N}/en/scripts/ (the scripts-only companions). Override with OUT_DIR= (the
# scripts then go to OUT_DIR/scripts, the layout the 4 Oct 2026 build used under decks/module_N/).
# The figures of KP4 (figures/F1..F14) are made for the written guide; every bundle of modules 1
# to 3 says the slides stay text-only and places no figure on a slide, so none is placed here.
import json
import os
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
KP4 = os.path.dirname(HERE)
KP_KIT = os.environ.get('KP_KIT') or os.path.normpath(
    os.path.join(HERE, '..', '..', '..', '..', '..', 'claude-marketplace', 'plugins', 'itu-giga-kp'))
SCRIPTS = os.path.join(KP_KIT, 'skills', 'kp-deck-builder', 'scripts')
if not os.path.isdir(SCRIPTS):
    sys.exit('Set KP_KIT to the itu-giga-kp folder of your claude-marketplace clone (plugins/itu-giga-kp).')
sys.path.insert(0, SCRIPTS)
from deck_lib import (  # noqa: E402
    TITLE_CARD_NOTE, INK, GREY, ITU_BLUE_DARK, LAYOUT_THANKS,
    add_slide, big_slide, box, delete_template_slides, edit_agenda, edit_cover, hook_slide,
    notes, open_template, rows_block, section_slide, set_text, sources_slide, two_panel)

# The practice box is the video's only call to action and is never narrated (plan D5).
PRACTICE_NOTE = ('PRACTICE BOX (on-screen only — never read it, never paraphrase it, never point '
                 'at it). It replaces the narrated handoff: this video ends on the recap.')
NUMBERS = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7,
           'eight': 8, 'nine': 9, 'ten': 10}
STR = r'"((?:[^"\\]|\\.)*)"'


def js_str(s):
    """A JavaScript double-quoted string body, unescaped."""
    return json.loads('"' + s.replace("\\'", "'") + '"')


def quotes(text):
    """Single-quoted strings of a cue. An apostrophe inside a word (PHEQA's) is not a quote."""
    return [q.strip() for q in re.findall(r"(?<![A-Za-z])'(.+?)'(?![A-Za-z])", text)]


def parse_cue(cue):
    m = re.match(r"Slide (\d+) — Title: '(.+?)'(?![A-Za-z])\.?\s*(.*)$", cue, re.S)
    assert m, 'unreadable cue: %r' % cue[:80]
    n, head, rest = int(m.group(1)), m.group(2), m.group(3)
    footer = None
    if 'Footer line:' in rest:
        rest, f = rest.split('Footer line:', 1)
        footer = quotes(f)[0]
    c = dict(n=n, head=head, rest=rest, footer=footer, cue=cue)
    if head == 'Sources':
        body = rest.split('Body:', 1)[1].split(' Footer:')[0].strip()
        c['link'] = 'Footer:' in rest
        if body.startswith("'"):
            c['items'] = quotes(body)
        else:
            c['items'] = [i.strip().rstrip('.') for i in body.rstrip('.').split('; ')]
    else:
        c['rows'] = quotes(rest)
        w = re.search(r'\b(one|two|three|four|five|six|seven|eight|nine|ten)\b[\w\s-]*?\brows\b', rest)
        c['declared'] = NUMBERS[w.group(1)] if w else None
    return c


def parse_module(js_path):
    """Every video of the bundle: its fields, its slides (cue + voice-over) and its spec row count."""
    js = open(js_path, encoding='utf-8').read()
    marks = [(m.group(1), m.start()) for m in re.finditer(r'num:\s*"[\d.]+ Subtopic (\d+\.\d+)"', js)]
    marks.append(('END', len(js)))
    videos = []
    for i in range(len(marks) - 1):
        code, a = marks[i]
        blk = js[a:marks[i + 1][1]]
        field = lambda k: js_str(re.search(k + r':\s*' + STR, blk).group(1))
        beats = blk[blk.find('scriptBeats'):blk.find('slideSpecRows')]
        slides = []
        for m in re.finditer(r'\{\s*(cue|text):\s*' + STR, beats):
            kind, s = m.group(1), js_str(m.group(2))
            if kind == 'cue':
                slides.append(dict(parse_cue(s), vo=[]))
            else:
                slides[-1]['vo'].append(s)
        assert [s['n'] for s in slides] == list(range(1, len(slides) + 1)), code + ': slide numbers'
        spec = blk[blk.find('slideSpecRows'):blk.find('aiTip')]
        spec_rows = re.findall(r'\[\s*"(\d+)",\s*' + STR + r',\s*' + STR, spec)
        tip = blk[blk.find('aiTip'):]
        videos.append(dict(
            code=code, title=field('title'), runtime=field('runtime'),
            message=field('singleMessage'), practice=field('practice'),
            tip=js_str(re.search(r'title:\s*' + STR, tip).group(1)),
            slides=slides, spec=[(int(n), js_str(e), js_str(nt)) for n, e, nt in spec_rows]))
    return videos


def storyboard_steps(js_path):
    """The 'What is done' column of a module's storyboard table (section 4.8 of Module 3)."""
    js = open(js_path, encoding='utf-8').read()
    tbl = js[js.find('"Step", "What is done"'):]
    tbl = tbl[:tbl.find(']),')]
    return [js_str(s) for _, s in re.findall(r'\[\s*"(\d+)",\s*' + STR, tbl)]


def split_row(r):
    """'head — sub' or 'head → sub' into (head, sub); a third column joins the sub with a dot."""
    parts = [p.strip() for p in re.split(r' → | — ', r)]
    return (parts[0], '  ·  '.join(parts[1:])) if len(parts) > 1 else (r, '')


def sizes(rows):
    longest = max(len(h) for h, _ in rows)
    head = 19 if longest <= 90 else 17.5 if longest <= 125 else 16
    return min(head, 17) if len(rows) >= 7 else head


def vo_note(slide, spec_note):
    paras = ['VO: ' + t for t in slide['vo']]
    if spec_note:
        paras.append('Slide specification: ' + spec_note)
    return '\n\n'.join(paras)


def default_slide(prs, v, s, tag, note):
    """A content slide from its cue: rows (numbered where the cue says so), a table's columns as
    headline and line, two contrasting rows as two panels, the footer line as the closing line."""
    rows = s['rows']
    if s['declared'] is not None:
        assert len(rows) == s['declared'], '%s slide %d: %d rows read, cue declares %d' % (
            v['code'], s['n'], len(rows), s['declared'])
    if 'contrasting' in s['rest']:
        sides = [r.split(': ', 1) for r in rows]
        cap = lambda t: t[:1].upper() + t[1:]
        return two_panel(prs, s['head'], (sides[0][0].upper(), [cap(sides[0][1])]),
                         (sides[1][0].upper(), [cap(sides[1][1])]),
                         s['footer'], tag, note, height=2.6)
    numbered = 'numbered' in s['rest']
    if numbered:
        rows = [re.sub(r'^\d+\.\s*', '', r) for r in rows]
    pairs = [split_row(r) for r in rows]
    big = 'large text rows' in s['rest']
    bottom = 6.3 if s['footer'] else 6.75
    head = 26 if big else sizes(pairs)
    if len(pairs) <= 3 and not any(sub for _, sub in pairs):
        # Two or three short rows: a steady pitch and larger type, not rows stretched down the page.
        bottom = min(bottom, 1.6 + len(pairs) * (1.25 if big else 1.15))
        head = 26 if big else 22 if max(len(h) for h, _ in pairs) <= 80 else 20
    return rows_block(prs, s['head'], pairs, s['footer'], tag, note, numbered=numbered,
                      bottom=bottom, head_size=head)


def build_module(mod, hooks, cover, agenda, overrides=None, quoted=None):
    """Build the combined deck, the split spec, the per-video decks and the scripts-only companion
    for module `mod`, then prove the notes narrate the bundle (vo_diff.py)."""
    overrides, quoted = overrides or {}, quoted or {}
    js_path = os.path.join(KP4, 'build_kp4_module%d_v01.js' % mod)
    videos = parse_module(js_path)
    prs = open_template(os.environ.get('TEMPLATE'))
    edit_cover(prs, **cover)
    edit_agenda(prs, **agenda)
    delete_template_slides(prs, keep=2)

    for v in videos:
        assert len(v['slides']) == len(v['spec']), '%s: %d cues, %d spec rows' % (
            v['code'], len(v['slides']), len(v['spec']))
        tag = '%s · %s' % (v['code'], v['title'])
        spec_notes = {n: nt for n, _, nt in v['spec']}
        for s in v['slides']:
            if s['n'] == 1:
                section_slide(prs, 'MODULE %d · VIDEO %s' % (mod, v['code']), v['code'], v['title'],
                              v['message'], 'standalone video · voice-over on text slides', TITLE_CARD_NOTE)
                head, lines = hooks[v['code']]
                hook_slide(prs, head, lines, tag, vo_note(s, None))
                continue
            note = vo_note(s, spec_notes.get(s['n']))
            if s['head'] == 'In one sentence':
                big_slide(prs, s['rows'][0], tag, PRACTICE_NOTE + '\n\n' + note,
                          practice=(v['tip'], v['practice']))
            elif s['head'] == 'Sources':
                sl = sources_slide(prs, tag, s['items'])
                if not s['link']:   # 'This video cites no outside source': no link to point at
                    for sh in list(sl.shapes):
                        if sh.has_text_frame and sh.text_frame.text == 'Find the link in the description.':
                            sh._element.getparent().remove(sh._element)
                    notes(sl, 'Sources slide, held ~5 seconds at the end of the video. This video cites no '
                              'outside source; no narration.')
            elif (v['code'], s['n']) in overrides:
                overrides[(v['code'], s['n'])](prs, v, s, tag, note)
            else:
                if (v['code'], s['n']) in quoted:
                    s = dict(s, rows=['“%s”' % r if i in quoted[(v['code'], s['n'])] else r
                                      for i, r in enumerate(s['rows'])])
                default_slide(prs, v, s, tag, note)

    s = add_slide(prs, LAYOUT_THANKS)
    notes(s, 'Closing slide for the combined deck. Individual videos end on their recap or sources slide instead.')

    # Self-checks: the slide count the bundle implies (cover, agenda, each video's specified slides
    # plus its opener slide, thank-you), and voice-over or a note on every slide.
    expected = 2 + sum(len(v['spec']) + 1 for v in videos) + 1
    assert len(prs.slides._sldIdLst) == expected, 'slide count %d, bundle implies %d' % (
        len(prs.slides._sldIdLst), expected)
    assert all(sl.has_notes_slide and sl.notes_slide.notes_text_frame.text.strip() for sl in prs.slides), \
        'every slide carries its notes'
    for sl in prs.slides:   # nothing may overlap the practice box
        for pb in [sh for sh in sl.shapes if sh.has_text_frame
                   and sh.text_frame.text.startswith('Do this on your own sector')]:
            for sh in sl.shapes:
                if sh.shape_id == pb.shape_id or not sh.has_text_frame or not sh.text_frame.text.strip():
                    continue
                assert sh.top + sh.height <= pb.top or sh.top >= pb.top + pb.height, \
                    'shape overlaps the practice box: %r' % sh.text_frame.text[:60]

    if os.environ.get('OUT_DIR'):
        out_dir = os.environ['OUT_DIR']
        scripts_dir = os.path.join(out_dir, 'scripts')
    else:   # the video track's stage folders, one per language (see ../videos/README.md)
        lang_dir = os.path.join(KP4, 'videos', 'module_%d' % mod, 'en')
        out_dir = os.path.join(lang_dir, 'decks')
        scripts_dir = os.path.join(lang_dir, 'scripts')
    os.makedirs(out_dir, exist_ok=True)
    os.makedirs(scripts_dir, exist_ok=True)
    deck = os.path.join(out_dir, 'KP4_M%d_Deck_v0.1.pptx' % mod)
    prs.save(deck)
    print('slides:', len(prs.slides._sldIdLst))
    print('saved', deck)

    spec_path = os.path.join(out_dir, 'split_spec.json')
    json.dump({'kicker_prefix': cover['kicker'], 'audience': cover['audience'],
               'out_pattern': 'KP4_M%d_{code}_Deck_v0.1.pptx' % mod,
               'videos': [{'code': v['code'], 'title': v['title'], 'mins': v['runtime'].replace(' min', ''),
                           'range': None, 'message': v['message'],
                           'bundle_slides': len(v['spec'])} for v in videos]},
              open(spec_path, 'w', encoding='utf-8'), indent=2, ensure_ascii=False)
    run = lambda *a: subprocess.run([sys.executable] + list(a), check=True)
    run(os.path.join(SCRIPTS, 'split_module_deck.py'), deck, spec_path, out_dir, '--infer-ranges')
    run(os.path.join(SCRIPTS, 'scripts_from_deck.py'), deck, spec_path, scripts_dir,
        '--kp', 'KP4', '--module', str(mod), '--prefix', 'KP4_M%d' % mod, '--version', 'v0.1')
    run(os.path.join(SCRIPTS, 'vo_diff.py'), js_path, deck)
    return deck

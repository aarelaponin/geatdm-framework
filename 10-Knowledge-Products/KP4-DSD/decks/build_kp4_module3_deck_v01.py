#!/usr/bin/env python3
# Build the KP4 Module 3 video decks on the ITU template — v0.1 (4 October 2026).
# Content follows KP4_Module3_Script_Bundle_v0.1 (build_kp4_module3_v01.js): six videos, 3.1 – 3.6,
# Architect-facing; 3.4 is supplementary. The slide titles, rows, footer lines, sources, single
# messages, practice boxes and every VO paragraph are read from the .js at build time by
# kp4_deck_common.py, so the notes narrate the bundle verbatim (vo_diff.py proves it, run at the end
# of every build). This file holds only what a person writes: the cover, the agenda, the opener
# (hook) slide of each video, and the three slides whose cue is not a plain list of rows (3.5's stamp
# line over six pages, 3.5's storyboard stand-in read from the bundle's section 4.8, and 3.6's two
# quotations from PAERA with their source).
# One run writes, under ../videos/module_3/en/ (decks/ and scripts/): the combined deck with the voice-over in the speaker notes, the
# split spec, the per-video decks (each opening on its title card) and the scripts-only companion.
# Generated .pptx is NEVER hand-edited — fix here or in the bundle, then run this again.
# Conventions and design rules: the kit's kp-deck-builder SKILL.md. Override paths with KP_KIT=,
# TEMPLATE= and OUT_DIR=.
import os
import sys

sys.dont_write_bytecode = True   # no __pycache__ beside the decks
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from kp4_deck_common import (  # noqa: E402
    ITU_BLUE_DARK, KP4, box, build_module, rows_block, set_text, storyboard_steps)

AUDIENCE = 'The head of a sectoral ICT unit, or the project lead, who accepts the design'

HOOKS = {
    '3.1': ('The builder builds what the documents say, and guesses the rest.',
            ['A guess made late, under deadline, is how an agreed service changes on the way.',
             'So every goal is written as a story the builder can follow.']),
    '3.2': ('A service is judged on its bad days.',
            ['The sign-in that does not answer. The document left out. The payment that never arrives.',
             'If nobody wrote down what happens then, the builder decides, alone.']),
    '3.3': ('A screen built from a list of fields explains nothing.',
            ['A screen worked out from the story shows what a person needs at that step.',
             'And it says where each value on it comes from.']),
    '3.4': ('A small waste on an officer\'s screen is repeated thousands of times a year.',
            ['An applicant uses the self-service once or twice.',
             'An officer uses her screens many times a day.',
             'Every value typed again is a chance for a mistake.']),
    '3.5': ('Officials judge a service by clicking through it.',
            ['Not from a list of fields.',
             'A walk-through lets them do it before anything is built, on the screens the builder will build.']),
    '3.6': ('"We will look into it" decides nothing.',
            ['The review you convene ends with a record:',
             'every open question, the person who owns it, and the date it is due.']),
}

COVER = dict(
    title_text='Design one service as a story\nyour officials can check',
    kicker='KP4 · Designing Digital Government Services · Module 3',
    blurb='Six standalone videos on designing one goal: the story a builder can follow, every way '
          'it can go wrong, screens worked out from the story, screens officers can use, the '
          'walk-through officials click, and the review that names an owner for every open line.',
    length='~30 mins across 6 videos (3.1 – 3.6)',
    audience=AUDIENCE,
    panel_heading='WHAT THIS MODULE SETTLES',
    panel_items=['One goal, one story',
                 'Every failure, its ending',
                 'Screens from the story',
                 'Screens officers can use',
                 'A walk-through to click',
                 'A review with names on it'],
    panel_footer='1 story · every failure · every value sourced',
    note_text='Cover for the combined Module 3 deck. Each section that follows is one standalone '
              '~5 minute video for the Architect: the head of a sectoral ICT unit, or the project '
              'lead, who has a service specified and built and accepts its documents. 3.4 is '
              'supplementary. One demonstration segment (3.5) stands as a storyboard until recorded.')

AGENDA = dict(
    header='Module 3 — six videos',
    items=[('3.1  One goal, written as a story', '~5 min'),
           ('3.2  Every way it can go wrong', '~5 min'),
           ('3.3  Screens worked out from the story', '~5 min'),
           ('3.4  Screens officers can use (supplementary)', '~5 min'),
           ('3.5  The walk-through your officials click', '~5 min'),
           ('3.6  The review: every open line named', '~5 min')],
    message_paras=['Write one goal as a story, with every failure and its ending, and work the '
                   'screens out from it.',
                   'Officials click the walk-through; the review leaves nothing unowned.'],
    note_text='Navigation slide for the combined deck; the videos ship standalone. 3.1 to 3.3 '
              'write the goal and its screens; 3.4 is supplementary; 3.5 and 3.6 are how officials '
              'check and agree them.')


def stamp_and_pages(prs, v, s, tag, note):
    """3.5 slide 4 — 'one stamp line' over 'six text rows': the pages of one goal."""
    stamp, pages = s['rows'][0], s['rows'][1:]
    assert len(pages) == 6, '3.5 slide 4: %d pages read, the cue declares six' % len(pages)
    pairs = [tuple(p.strip() for p in r.split(' — ', 1)) if ' — ' in r else (r, '') for r in pages]
    sl = rows_block(prs, s['head'], pairs, s['footer'], tag, note, numbered=False,
                    top=2.15, bottom=6.75, head_size=18)
    tb = box(sl, 0.72, 1.45, 11.9, 0.5)
    set_text(tb.text_frame, [[(stamp, 16, True, ITU_BLUE_DARK, True)]])
    return sl


def storyboard(prs, v, s, tag, note):
    """3.5 slide 7 — the demonstration segment's text-only stand-in: the seven storyboard steps of
    the bundle's section 4.8, one line each, and 'Not yet recorded' at the foot."""
    steps = storyboard_steps(os.path.join(KP4, 'build_kp4_module3_v01.js'))
    assert len(steps) == 7, 'storyboard: %d steps read, the cue says seven' % len(steps)
    assert s['rows'] == ['Not yet recorded'], s['rows']
    cue = ('DEMONSTRATION SEGMENT — storyboard stand-in until recorded (bundle section 4.8). Replace '
           'with the recording of the 3.5 walk-through once its pages are produced in Progressa\'s '
           'names; until then nothing on this slide claims a recording.')
    return rows_block(prs, s['head'], [(t, '') for t in steps], 'Not yet recorded', tag,
                      cue + '\n\n' + note, numbered=True, bottom=6.3, head_size=17)


def paera_quotes(prs, v, s, tag, note):
    """3.6 slide 6 — 'two quoted text rows from PAERA, section 4.5, Digital Co-creation': each row
    in quotation marks with its source under it, so the quotation is attributed on the slide."""
    assert len(s['rows']) == 2, s['rows']
    src = 'PAERA, section 4.5, Digital Co-creation'
    return rows_block(prs, s['head'], [('“%s”' % r, src) for r in s['rows']], s['footer'], tag, note,
                      numbered=False, bottom=4.4, head_size=22)


if __name__ == '__main__':
    build_module(3, HOOKS, COVER, AGENDA,
                 overrides={('3.5', 4): stamp_and_pages, ('3.5', 7): storyboard,
                            ('3.6', 6): paera_quotes})

#!/usr/bin/env python3
# Build the KP4 Module 2 video decks on the ITU template — v0.1 (4 October 2026).
# Content follows KP4_Module2_Script_Bundle_v0.1 (build_kp4_module2_v01.js): six videos, 2.1 – 2.6,
# Strategist-facing. The slide titles, rows, footer lines, sources, single messages, practice boxes
# and every VO paragraph are read from the .js at build time by kp4_deck_common.py, so the notes
# narrate the bundle verbatim (vo_diff.py proves it, run at the end of every build). This file holds
# only what a person writes: the cover, the agenda, the opener (hook) slide of each video, and the
# one slide whose cue is not a list of rows (2.4's two lists, one per body).
# One run writes, under module_2/: the combined deck with the voice-over in the speaker notes, the
# split spec, the per-video decks (each opening on its title card) and the scripts-only companion.
# Generated .pptx is NEVER hand-edited — fix here or in the bundle, then run this again.
# Conventions and design rules: the kit's kp-deck-builder SKILL.md. Override paths with KP_KIT=,
# TEMPLATE= and OUT_DIR=.
import os
import sys

sys.dont_write_bytecode = True   # no __pycache__ beside the decks
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from kp4_deck_common import build_module, two_panel  # noqa: E402

AUDIENCE = 'The public-sector manager who commissions a service, judges the offer and accepts the result'

HOOKS = {
    '2.1': ('Before you say yes to one system, ask for one page.',
            ['A donor offers to fund a new licensing system for your quality authority.',
             'The page: every service your sector owes, and what each one rests on.']),
    '2.2': ('"It was never asked for." "It was."',
            ['Months into a project, nobody can point to the sentence.',
             'From the first week, somebody must be able to.']),
    '2.3': ('An institution changes its name. Other offices keep the old one.',
            ['Nobody did anything wrong: each office kept its own copy.',
             'You can stop this before the first screen is drawn.']),
    '2.4': ('"The design is complete." Complete against what?',
            ['A long list of screens does not answer that.',
             'One table answers it in both directions, and you can read it without technical training.']),
    '2.5': ('A new fee is announced. Changing it costs weeks.',
            ['The old figure is written into many screens.',
             'That cost was decided on the day nobody asked who owns the fee.']),
    '2.6': ('Has the other body agreed?',
            ['Your new service will read another body\'s register.',
             'A promise made on someone else\'s behalf can stall a project at the border between two offices.',
             'One page prevents it.']),
}

COVER = dict(
    title_text='Break the service down\nbefore you design it',
    kicker='KP4 · Designing Digital Government Services · Module 2',
    blurb='Six standalone videos on the documents written before any screen: the sector\'s '
          'catalogue of services, the register of what was asked, the records and whose each fact '
          'is, the goals, what every goal may use, and what crosses the service\'s boundary.',
    length='~30 mins across 6 videos (2.1 – 2.6)',
    audience=AUDIENCE,
    panel_heading='WHAT THIS MODULE SETTLES',
    panel_items=['One catalogue for the sector',
                 'What was asked, written first',
                 'The records, and whose each is',
                 'Goals tied to what was asked',
                 'Shared groundwork, nothing invented',
                 'Every crossing on one page'],
    panel_footer='1 catalogue · 1 register · every crossing named',
    note_text='Cover for the combined Module 2 deck. Each section that follows is one standalone '
              '~5 minute video for the manager who commissions the service. Module 2 teaches the '
              'documents written before any screen is designed. Nothing is generated in this module.')

AGENDA = dict(
    header='Module 2 — six videos',
    items=[('2.1  One catalogue of the sector\'s services', '~5 min'),
           ('2.2  Write down what was asked', '~5 min'),
           ('2.3  The records, and whose each one is', '~5 min'),
           ('2.4  Every goal tied to what was asked', '~5 min'),
           ('2.5  What every goal may use', '~5 min'),
           ('2.6  What crosses the boundary', '~5 min')],
    message_paras=['Break a service down before anyone designs it: the sector\'s services, what was '
                   'asked, the records, the goals.',
                   'Each document is checked against one the design did not write.'],
    note_text='Navigation slide for the combined deck; the videos ship standalone. 2.1 is the '
              'sector; 2.2 to 2.5 are the one service broken down; 2.6 is what it is built on and '
              'what crosses to another body.')


def two_lists(prs, v, s, tag, note):
    """2.4 slide 3 — 'two plain-text lists', one per body: PHEQA's five goals, MoEYS's four."""
    rows = s['rows']
    assert len(rows) == 9, '2.4 slide 3: %d goals read, the cue lists nine' % len(rows)
    return two_panel(prs, s['head'], ('PHEQA', rows[:5]), ('MoEYS, ALL THE MINISTER\'S', rows[5:]),
                     s['footer'], tag, note, height=4.6)


if __name__ == '__main__':
    build_module(2, HOOKS, COVER, AGENDA,
                 overrides={('2.4', 3): two_lists},
                 quoted={('2.5', 5): [0]})

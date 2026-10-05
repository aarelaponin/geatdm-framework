#!/usr/bin/env python3
# Build the KP4 Module 1 video decks on the ITU template — v0.1 (4 October 2026).
# Content follows KP4_Module1_Script_Bundle_v0.1 (build_kp4_module1_v01.js): five videos, 1.1 – 1.5,
# Strategist-facing. The slide titles, rows, footer lines, sources, single messages, practice boxes
# and every VO paragraph are read from the .js at build time by kp4_deck_common.py, so the notes
# narrate the bundle verbatim (vo_diff.py proves it, run at the end of every build). This file holds
# only what a person writes: the cover, the agenda and the opener (hook) slide of each video.
# One run writes, under ../videos/module_1/en/ (decks/ and scripts/): the combined deck with the voice-over in the speaker notes, the
# split spec, the per-video decks (each opening on its title card) and the scripts-only companion.
# Generated .pptx is NEVER hand-edited — fix here or in the bundle, then run this again.
# Conventions and design rules: the kit's kp-deck-builder SKILL.md. Override paths with KP_KIT=,
# TEMPLATE= and OUT_DIR=.
import os
import sys

sys.dont_write_bytecode = True   # no __pycache__ beside the decks
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from kp4_deck_common import build_module  # noqa: E402

AUDIENCE = 'The public-sector manager who commissions a service, judges the offer and accepts the result'

# Opener (hook) slide copy per video — headline + two or three supporting lines, written from the
# opener narration the hook's note carries. Not a preview of the next slide's list.
HOOKS = {
    '1.1': ('The service that arrives is not the one they agreed.',
            ['Your minister agreed a service with the officials who will run it.',
             'A year later, you will be asked why it changed.',
             'There is an answer you can give, and it has three parts.']),
    '1.2': ('A long, confident proposal lands on your desk.',
            ['It promises a complete service.',
             'Before you sign: will you be able to check what you are buying?']),
    '1.3': ('Every line looks certain. That is the moment to be careful.',
            ['A line that looks certain may be a guess.',
             'And nobody can tell a guess from a fact.']),
    '1.4': ('"The design is finished." What does that mean?',
            ['The method answers with twelve documents, in a fixed order.',
             'And it shows where in that order you must say yes.']),
    '1.5': ('If a machine wrote it, who is answerable for it?',
            ['An AI assistant can draft a register of requirements in an afternoon.',
             'That is real help. Your minister will still ask the question.']),
}

COVER = dict(
    title_text='Why digital services go wrong,\nand the method that prevents it',
    kicker='KP4 · Designing Digital Government Services · Module 1',
    blurb='Five standalone videos for the manager who commissions a service: where an agreed '
          'service gets lost, three rules to hold a supplier to, why a named question beats a '
          'guess, the twelve documents of the method, and who writes, checks and accepts each.',
    length='~25 mins across 5 videos (1.1 – 1.5)',
    audience=AUDIENCE,
    panel_heading='WHAT THIS MODULE SETTLES',
    panel_items=['Three places a service gets lost',
                 'Three rules for a supplier',
                 'A named question, not a guess',
                 'Twelve documents, in order',
                 'A named person accepts'],
    panel_footer='3 places · 3 rules · 12 documents',
    note_text='Cover for the combined Module 1 deck. Each section that follows is one standalone '
              '~5 minute video. Module 1 is the Strategist-facing entry point to KP4: the manager '
              'who commissions a digital public service, judges the supplier\'s offer, convenes the '
              'review and answers to the minister and the donor. Nothing is generated in this module.')

AGENDA = dict(
    header='Module 1 — five videos',
    items=[('1.1  Where an agreed service gets lost', '~5 min'),
           ('1.2  Three rules you can hold a supplier to', '~5 min'),
           ('1.3  A question with a name on it', '~5 min'),
           ('1.4  Twelve documents, request to running service', '~5 min'),
           ('1.5  Who writes, who checks, who accepts', '~5 min')],
    message_paras=['An agreed service is lost where a question was not decided, an answer not '
                   'passed on, or a rule not enforced.',
                   'Twelve documents, each accepted by a named person before the next is begun, '
                   'close those places.'],
    note_text='Navigation slide for the combined deck; the videos ship standalone. 1.1 and 1.2 are '
              'the why: where a service gets lost and the rules that stop it. 1.3 to 1.5 are the '
              'method: named questions, the twelve documents, and who accepts each.')

if __name__ == '__main__':
    build_module(1, HOOKS, COVER, AGENDA)

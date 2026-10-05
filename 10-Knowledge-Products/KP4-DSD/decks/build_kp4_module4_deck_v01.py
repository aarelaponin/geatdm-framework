#!/usr/bin/env python3
# Build the KP4 Module 4 video decks on the ITU template — v0.1.
# Content follows KP4_Module4_Script_Bundle_v0.1 (build_kp4_module4_v01.js): 6 videos,
# 4.1 – 4.6, Architect-facing (persona A). Every slide follows the bundle's on-screen slide specification, slide by slide:
# the bundle's slide 1 is the section slide (the standalone video's silent title card) and its
# opening voice-over goes on the hook slide the kit's grammar puts after it, so each video carries
# its specification's slide count plus that one hook slide. Every VO paragraph in the notes is a
# verbatim scriptBeats[].text of the .js (vo_diff.py proves it); the recap slide of every video
# carries the un-narrated practice box (task = the AI tip's title, artefact = the tip's practice
# field). The slides are text only, as the bundle and ITU's guide ask: the figures the
# specification names (F3 to F14) belong to the written guide and are not placed on any slide.
# Content only — every generic helper, branding constant and layout index comes from
# $KP_KIT/skills/kp-deck-builder/scripts/deck_lib.py (which also ships the template).
# Generated .pptx is NEVER hand-edited — fix here and run this program again: it writes the
# combined deck, writes the split spec, splits the per-video decks (--infer-ranges) and derives
# the scripts-only companion, all under decks/module_4/ (the layout the KP4 decks of
# modules 1 to 3 use).
# Override paths with KP_KIT=, TEMPLATE= and OUT_DIR= env vars.
import json
import os
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
KP4 = os.path.dirname(HERE)
KP_KIT = os.environ.get('KP_KIT') or os.path.normpath(os.path.join(
    HERE, '..', '..', '..', '..', '..', 'claude-marketplace', 'plugins', 'itu-giga-kp'))
SCRIPTS = os.path.join(KP_KIT, 'skills', 'kp-deck-builder', 'scripts')
if not os.path.isdir(SCRIPTS):
    sys.exit("Set KP_KIT to the itu-giga-kp folder of your claude-marketplace clone (plugins/itu-giga-kp).")
sys.path.insert(0, SCRIPTS)
from deck_lib import (
    TITLE_CARD_NOTE, hook_slide,
    INK, LAYOUT_THANKS, LAYOUT_WHITE,
    add_slide, big_slide, box, delete_template_slides, edit_agenda, edit_cover, footer, notes,
    open_template, rows_slide, section_slide, set_text, sources_slide, title)
from pptx.util import Pt
from kp4_deck_common import figure_slide  # noqa: E402  (the figure slides)

prs = open_template(os.environ.get('TEMPLATE'))

MODULE = '4'
AUDIENCE = "Head of a ministry ICT unit · service owner's project lead · counterpart to the supplier"
# (code, title, runtime, single message, slides in the bundle's on-screen slide specification)
VIDEOS = [('4.1',
  'Four questions decided once for every screen',
  '~5',
  'How officers pick, find, move and act is settled for the whole application in one document you '
  'accept.',
  8),
 ('4.2',
  'No list longer than nine: choose by category',
  '~5',
  'A long list is divided into categories, and the officer picks the category first.',
  8),
 ('4.3',
  'The service workflow: states, moves and who may make each',
  '~5',
  'Every state a case can be in, every move between states, and who may make each move, written '
  'once.',
  8),
 ('4.4',
  'One file a program reads: the application model',
  '~5',
  'Everything agreed is carried into one file, from which the application is generated.',
  8),
 ('4.5',
  'Reviewing the model: what it assumed, and what it could not express',
  '~5',
  'Every assumption and every loss is named for a person to rule on.',
  8),
 ('4.6',
  'Refused, not worked around',
  '~5',
  'A program refuses a description that contradicts what you accepted, and nobody switches the '
  'check off.',
  8)]

# The practice box is the video's only call to action and is never narrated (plan D5).
PRACTICE_NOTE = ('PRACTICE BOX (on-screen only — never read it, never paraphrase it, never point '
                 'at it). It replaces the narrated handoff: this video ends on its recap.')
STORYBOARD = 'Demonstration segment — a storyboard until it is recorded.'

# Opener (hook) slide copy per video — headline + two or three supporting lines, written from
# the same opener narration the hook's note carries. Not a preview of the next slide's list.
HOOKS = {'4.1': ('Four questions cross every screen, and none of them is settled yet.',
         ['The screens of each goal were agreed one goal at a time.',
          'Leave the four questions open, and the program that builds the application settles them '
          'for you.']),
 '4.2': ('A list of twenty: she scrolls, reads, and sometimes picks the neighbour.',
         ['The method has a plain rule for long lists.',
          'It costs nothing to apply while the application is designed.']),
 '4.3': ('A licence, an application, an appeal: each case passes through stages.',
         ['Write the stages down once.',
          'Otherwise every screen invents its own, and the law is enforced on some screens and not '
          'on others.']),
 '4.4': ('Everything agreed must reach the platform without anyone retyping it.',
         ['The stories, the screens, the lists and the workflow are agreed.',
          'The method carries all of it into one file, and a program builds the application from '
          'that file.']),
 '4.5': ('Does the AI assistant tell you, or does it quietly decide?',
         ['It writes the file your application is generated from.',
          'It will meet things nobody wrote down, and things the platform cannot do.']),
 '4.6': ('"Switch the check off, just this once."',
         ["Two days before a deadline, a program stops your supplier's build.",
          'Your answer should already be written down, and it is no.'])}


def section(code, name, message, note):
    """The bundle's slide 1: the section slide is the silent title card; the opener's VO goes
    on the hook slide after it. No runtime on the card: the take's length moves with every re-roll."""
    s = section_slide(prs, 'MODULE %s · VIDEO %s' % (MODULE, code), code, name, message,
                      'standalone video · voice-over on text slides', TITLE_CARD_NOTE)
    if len(name) > 48:   # a long title would run into the single message at 34pt
        for sh in s.shapes:
            if sh.has_text_frame and sh.text_frame.text == name:
                for r in sh.text_frame.paragraphs[0].runs:
                    r.font.size = Pt(28 if len(name) <= 62 else 25)
    head, lines = HOOKS[code]
    hook_slide(prs, head, lines, '%s · %s' % (code, name), note)
    return s


def rows(head, items, tag, note, closing=None, numbered=False):
    """The shape for every 'N text rows' or 'plain-text table' cue of the bundle: the cue's
    title as the headline, one row per quoted line (a label before its dash or colon in bold,
    the rest beneath it), and an optional closing line."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head, size=28 if len(head) <= 52 else 24)
    bottom = 6.3 if closing else 6.75
    big = all(not sub for _, sub in items) and len(items) <= 4
    rows_slide(s, items, top=1.6, bottom=bottom, numbered=numbered,
               head_size=22 if big else 19, sub_size=16)
    if closing:
        tb = box(s, 0.72, bottom + 0.12, 11.9, 0.6)
        set_text(tb.text_frame, [[(closing, 15.5, True, INK, True)]])
    footer(s, tag)
    notes(s, note)
    return s


def sources(items, tag, link):
    """The bundle's Sources slide. Where its cue carries no 'Find the link in the description'
    footer (the content is the method's own and no external source is cited), the kit's link line
    is taken off, so the slide does not point to links that do not exist."""
    if link:
        return sources_slide(prs, tag, items)
    s = sources_slide(prs, tag, items, 'Sources slide, held ~5 seconds at the end of the video. No '
                                        'external source is cited; no narration.')
    for sh in list(s.shapes):
        if sh.has_text_frame and sh.text_frame.text == 'Find the link in the description.':
            sh._element.getparent().remove(sh._element)
    return s


def figure(code, n, png, mode, head, items, tag, note, closing=None, numbered=False):
    """A slide whose cue ends "Figure Fn, slide variant (figures/slides/<png>), stands on the
    slide <mode> the rows": the figure's slide variant in place of the rows (or, for a tall
    figure, beside them). Same arguments as rows() after the figure's own, so the rows stay here
    as the figure's text equivalent, as the bundle keeps them. Drawn by kp4_deck_common.figure_slide."""
    if numbered:
        items = [(re.sub(r'^\d+\.\s*', '', h), sub) for h, sub in items]
    s = {'n': n, 'head': head, 'footer': closing,
         'figure': (png.split('_')[0], os.path.join(KP4, 'figures', 'slides', png), mode),
         'rows': [h if not sub else h + ' — ' + sub for h, sub in items]}
    return figure_slide(prs, {'code': code}, s, tag, note)


# ---------------------------------------------------------------- COVER (edit slide 1)
edit_cover(prs, **{'title_text': 'Settle the whole application once,\nthen describe it for the machine',
 'kicker': 'Designing Digital Government Services · Module 4',
 'blurb': 'Six standalone videos for the team that has the service specified: the four questions '
          'settled once for every screen, long lists chosen by category, the service workflow, the '
          'one file a program reads, its review, and the check that refuses a file which '
          'contradicts what you accepted.',
 'length': '~30 mins across 6 videos (4.1 – 4.6)',
 'panel_heading': 'FROM AGREED SCREENS TO ONE FILE',
 'panel_items': ['Pick, find, move, act — once',
                 'No list longer than nine',
                 'States, moves and who',
                 'One file a program reads',
                 'Every assumption ruled on',
                 'Refused, not worked around'],
 'panel_footer': '1 document accepted · 1 file · 1 check nobody switches off',
 'note_text': 'Cover for the combined Module 4 deck. Each section that follows is one standalone '
              '~5 minute video, for the team that has the service specified and built: the head of '
              "a ministry ICT unit, the service owner's project lead, the counterpart to the "
              'supplier.',
 'audience': "Head of a ministry ICT unit · service owner's project lead · counterpart to the "
             'supplier'})

# ---------------------------------------------------------------- AGENDA (edit slide 2)
edit_agenda(prs, **{'header': 'Module 4 — six videos',
 'items': [('4.1  Four questions decided once for every screen', '~5 min'),
           ('4.2  No list longer than nine: choose by category', '~5 min'),
           ('4.3  The service workflow: states, moves and who may make each', '~5 min'),
           ('4.4  One file a program reads: the application model', '~5 min'),
           ('4.5  Reviewing the model: what it assumed, and what it could not express', '~5 min'),
           ('4.6  Refused, not worked around', '~5 min')],
 'message_paras': ['Settle how officers pick, find, move and act once, for the whole application, '
                   'and accept it in writing.',
                   'Then carry everything agreed into one file, have every assumption ruled on, '
                   'and let a program refuse what contradicts it.'],
 'note_text': 'Navigation slide for the combined deck; the videos ship standalone. 4.1 to 4.3 '
              'settle the application once; 4.4 to 4.6 carry it into the one file, review it, and '
              'show the check that refuses it.'})

delete_template_slides(prs, keep=2)

# ================================================================ 4.1
T = "4.1 · Four questions decided once for every screen"
section("4.1",
        "Four questions decided once for every screen",
        "How officers pick, find, move and act is settled for the whole application in one "
        "document you accept.",
        "VO: Your officials have agreed the screens of each goal, one goal at a time. Four "
        "questions are still open, because each crosses many screens. If you do not settle "
        "them in one document, the program that builds the application settles them for you.")

figure("4.1", 2, "F10_four-questions.png", "in place of",
     "Four questions no single goal can answer",
     [("Pick", "how an officer chooses a value from a list."),
      ("Find", "how she finds one record among many."),
      ("Move", "how a case goes from one state to the next, and who may move it."),
      ("Act", "what opens, and what is filled in, when she acts on a record.")],
     T,
     "VO: The first question is how an officer picks a value from a list, such as the kind "
     "of licence. The second is how she finds one record among many, such as one institution "
     "among hundreds. The third is how a case moves from one state to the next, and who may "
     "move it. The fourth is what happens when she acts on a record: which screen opens, and "
     "what is already filled in. No single goal can answer these. One list serves many "
     "goals, and one case is moved by the acts of several goals.")

rows("One document, settled once",
     [("Each goal's screens were agreed on their own.", ''),
      ("Left open, the four questions are settled by default, screen by screen.", ''),
      ("The interaction design settles them once; you accept it before the application is "
       "described for the machine.", '')],
     T,
     "VO: Each goal's screens were agreed on their own, so nobody has yet looked across "
     "them. Left open, the four questions get answered by default while the application is "
     "built, and often differently on different screens. The method closes that gap with one "
     "document, the interaction design. One analyst writes it from the agreed screens of "
     "every goal. You, or the person you name, accept it. Only then is the application "
     "described for the machine. A decision settled once is re-used by every screen that "
     "needs it.")

rows("MoEYS: pick and find",
     [("Pick", "seven lists. Each is fixed by Progressa's Higher Education Regulations. MoEYS keeps "
       "none."),
      ("Find", "an institution is found by a search of PHEQA's register, never from a list of every "
       "institution."),
      ("Most often", "a list of what waits for the officer; she picks a row.")],
     T,
     "VO: Here is how MoEYS, Progressa's ministry of education, answered the first two "
     "questions for its application. To pick a value, an officer uses seven lists. Each is "
     "held elsewhere, fixed by Progressa's Higher Education Regulations. MoEYS keeps none, "
     "so no screen of its application changes a list. To find an institution, she searches "
     "PHEQA's register by name or register number. She never scrolls a list of every "
     "institution. Most of the time she does not search at all: she opens the list of what "
     "waits for her, and picks a row.")

rows("MoEYS: move and act",
     [("Move", "no record of this application has states. A decision is written once; a correction "
       "is a new version."),
      ("Act", "the record she acts on is carried into the screen that opens, filled in and locked."),
      ("Menu", "every entry sits in one of five categories: Licences; Names, the list and reviews; "
       "Suspension and cancellation; The Gazette; Requests for review.")],
     T,
     "VO: The third answer is short. No record of this application has states. A decision is "
     "written once, and a correction is a new version, so nothing moves. An institution's "
     "standing is shown as PHEQA's register gives it, and is never changed here. The fourth "
     "answer covers every act that opens another screen. The record she acted on is carried "
     "into that screen, filled in and locked, so she never types it again. Every menu entry "
     "sits in one of five categories, from Licences to Requests for review.")

rows("Who accepts it, and what she reads",
     [("Written by", "one analyst of the supplier."),
      ("Read by the owner", "a short answer, a table for each question, and sample pages to click."),
      ("Accepted by", "the Director of Higher Education at MoEYS, with her name and the date.")],
     T,
     "VO: The Director of Higher Education at MoEYS accepts the document. She reads a short "
     "answer, a table for each question, and a few sample pages that show each answer "
     "working. She does not read every screen again. Where the goals were silent, the "
     "analyst writes a recommended answer, and she agrees it or changes it. Her acceptance "
     "is written into the document with her name and the date. Everything described for the "
     "machine afterwards is measured against what she accepted.")

big_slide(prs,
          "How officers pick, find, move and act is settled for the whole application in one "
          "document you accept.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: Before the application is described for the machine, ask for the one document "
          "that settles pick, find, move and act. Click its pages, then accept it in writing.",
          practice=("Find where the four questions are still open",
                    "a table of the places where pick, find, move or act is still open"))

sources([
    "The specification-driven development (SDD) method: the interaction design. No external "
    "source is cited.",
], T, link=False)


# ================================================================ 4.2
T = "4.2 · No list longer than nine: choose by category"
section("4.2",
        "No list longer than nine: choose by category",
        "A long list is divided into categories, and the officer picks the category first.",
        "VO: Ask an officer to pick one value from a list of twenty, and she scrolls, reads, "
        "and sometimes picks the neighbour. The method has a plain rule for this, and it "
        "costs nothing to apply while the application is designed.")

rows("The rule",
     [("No step of a choice offers more than nine values. Seven is the aim.", ''),
      ("A longer list is divided into categories of no more than nine.", ''),
      ("The officer picks the category first, then the value.", ''),
      ("More than nine categories", "add a level above them.")],
     T,
     "VO: No step of a choice offers more than nine values, and seven is the aim. A longer "
     "list is divided into categories, each holding no more than nine values. The officer "
     "picks the category first, then the value inside it. If a list ever needs more than "
     "nine categories, another level is added above them. The categories are a list like any "
     "other: they have names, someone keeps them, and each new value is placed in one of "
     "them when it is added.")

rows("Why nine",
     [("A short list is read at a glance.", ''),
      ("A long list is scrolled, and the wrong value is one line away.", ''),
      ("Two short choices are faster and safer than one long one.", '')],
     T,
     "VO: Why should this matter to you? An officer reads a short list at a glance and finds "
     "her value. A long list must be scrolled, and the wrong value is always one line away. "
     "A wrong value chosen on a busy day sends a file to the wrong desk, and nobody notices "
     "until someone asks where it went. Two short choices are faster and safer than one long "
     "one, and the officers who use the screens every day will tell you so.")

rows("Who decides the categories",
     [("Not a program", "it cannot know how your officers think about a list."),
      ("Written once, in the interaction design, for the whole application.", ''),
      ("Confirmed by the officers who use the list.", '')],
     T,
     "VO: Who decides the categories? Not a program. A program can count the values, but it "
     "cannot know how your officers think about them. So the categories of each long list "
     "are decided once, in the interaction design, the one document that settles how "
     "officers use the whole application. The analyst proposes them, and the officers who "
     "use the list confirm that each value sits where they would look for it. After that, "
     "the program that checks the application's description refuses a long list with no "
     "categories.")

rows("Progressa: the matters PHEQA advises on",
     [("Licences", "8 matters, such as a provisional licence for a university."),
      ("Suspension and cancellation", "7 matters, such as suspending a full licence."),
      ("Other matters", "5 matters, such as a change of an institution's name.")],
     T,
     "VO: Here is the one long list in the application of MoEYS, Progressa's ministry of "
     "education. PHEQA, the quality authority, advises the minister on twenty kinds of "
     "matter, from a provisional licence for a university to a change of an institution's "
     "name. Twenty is too many for one step. So the list has three categories: licences, "
     "with eight matters; suspension and cancellation, with seven; and other matters, with "
     "five. No category holds more than nine, and each name is one the officers of MoEYS "
     "already use.",
     closing="20 matters, 3 categories, no step longer than 8.")

rows("Two steps on the screen",
     [("Step 1", "on the list of PHEQA's advice that waits for the minister, the officer picks the "
       "category: Suspension and cancellation."),
      ("Step 2", "seven matters appear; she picks: suspending a full licence."),
      ("The list now shows only the advice on that matter.", '')],
     T,
     "VO: Here is where the officer meets it. She opens the list of PHEQA's advice that "
     "waits for the minister's decision, and she wants only the advice on suspending a full "
     "licence. First she picks the category, suspension and cancellation. Seven matters "
     "appear, and she picks the one she wants. The list now shows only that advice. She "
     "never saw all twenty at once, and she never scrolled past a value she did not need.")

big_slide(prs,
          "A long list is divided into categories, and the officer picks the category first.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: When a screen offers a long list, ask how it is divided. No step should offer "
          "more than nine values, and the officers who use it should agree the categories.",
          practice=("Divide a long list into categories",
                    "a list of categories, none holding more than nine values, each with a "
                    "plain name"))

sources([
    "The specification-driven development (SDD) method: the rule that a long list is chosen "
    "by category. No external source is cited.",
], T, link=False)


# ================================================================ 4.3
T = "4.3 · The service workflow: states, moves and who may make each"
section("4.3",
        "The service workflow: states, moves and who may make each",
        "Every state a case can be in, every move between states, and who may make each "
        "move, written once.",
        "VO: A licence, an application, an appeal: each is a case that passes through "
        "stages. If nobody writes those stages down once, every screen invents its own, and "
        "the law ends up enforced on some screens and not on others.")

rows("Three things, written once",
     [("States", "every stage a case can be in."),
      ("Moves", "every step from one state to another."),
      ("Who", "the person who may make each move, and on what decision.")],
     T,
     "VO: The service workflow is three things, written once for the whole application. The "
     "states are every stage a case can be in. The moves are every step from one state to "
     "another; a move that is not written down cannot happen. And for each move, the "
     "workflow names who may make it, and on what decision. Every screen then offers only "
     "the moves the workflow allows, and only to the people it names.")

rows("What the published specifications say",
     [("A process", "linked activities, each a step done by a person or a machine."),
      ("A workflow block runs the process", "started by another system, by a click, or by the passage of time."),
      ("An officer decides on an application", "approve, reject, or send back for correction.")],
     T,
     "VO: The GovStack specifications give the same picture. The Workflow specification "
     "describes a process as a set of linked activities, each a step done by a person or by "
     "a machine. It asks a workflow block to run a process, not only to draw it: started by "
     "another system, by a person's click, or by the passage of time. The Registration "
     "specification gives an officer three decisions on an application: approve it, reject "
     "it, or send it back for correction. Its interface lets officers list the tasks that "
     "wait for them and complete each one. Find the link in the description.",
     closing="GovStack Workflow and Registration specifications.")

rows("PHEQA: the states of a licence",
     [("Granted", "the institution may operate."),
      ("Suspended", "it may not admit new students until the suspension ends."),
      ("Cancelled", "it may no longer operate under this licence.")],
     T,
     "VO: Here is the one case in Progressa's example that has states: an institution's "
     "licence at PHEQA, the quality authority. It has three. Granted: the institution may "
     "operate. Suspended: it may not admit new students until the suspension ends. "
     "Cancelled: it may no longer operate under this licence. These three are written once, "
     "in the groundwork every goal shares, and every goal that touches a licence reads them "
     "from there.")

figure("4.3", 5, "F11_licence-workflow.png", "in place of",
     "The moves, and who may make each",
     [("None → granted", "the minister decides to grant; the registration officer records it."),
      ("Granted → suspended or cancelled; suspended → cancelled: the minister decides; the "
       "registration officer records it.", ''),
      ("Suspended → granted", "the minister decides to end the suspension, on PHEQA's advice; the registration "
       "officer records it."),
      ("Cancelled → the state it held before", "a decision on appeal or on review sets the cancellation aside.")],
     T,
     "VO: Now the moves. A licence is granted when the minister decides to grant it, as "
     "Progressa's Higher Education Regulations provide, and the registration officer records "
     "the decision. It is suspended or cancelled on the minister's decision, recorded the "
     "same way, and a suspension is ended the same way, on PHEQA's advice. A cancellation is "
     "undone only by a decision on appeal or on review that sets it aside. Nobody moves a "
     "licence because a screen allows it. Every move rests on a decision someone is entitled "
     "to make.\n\nRetrieval prompt — ask before playing on: of granted, suspended and "
     "cancelled, which state looks like a dead end, and is it one? Answer on the next slide.")

rows("The check: can every state be left?",
     [("A state that cannot be left is a dead end.", ''),
      ("Cancelled looks like one.", ''),
      ("But a cancellation set aside on appeal or on review returns the licence to the state "
       "it held before: no state is a dead end.", '')],
     T,
     "VO: One check is worth asking for: can every state be left? A state that cannot be "
     "left is a dead end, and sometimes that is intended. Cancelled looks like one. But an "
     "institution may appeal, and a person may ask the minister to review a decision. If the "
     "cancellation is set aside, the licence returns to the state it held before. So no "
     "state is a dead end, and the drawn workflow shows the way out.")

big_slide(prs,
          "Every state a case can be in, every move between states, and who may make each "
          "move, written once.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: Ask for the service workflow on one page: every state, every move, and who "
          "may make each move. Check each move against the law, and look for dead ends.",
          practice=("Draft the states and moves of a case",
                    "a table of states and moves, each move with who may make it and its source"))

sources([
    "GovStack Workflow Building Block specification (23Q4 edition), sections 3 and 4.2",
    "GovStack Registration Building Block specification (23Q4 edition), sections 6.2.3 and 8.2",
], T, link=True)


# ================================================================ 4.4
T = "4.4 · One file a program reads: the application model"
section("4.4",
        "One file a program reads: the application model",
        "Everything agreed is carried into one file, from which the application is generated.",
        "VO: Your officials have agreed the stories, the screens, the lists and the "
        "workflow. All of it now has to reach the platform without anyone retyping it. The "
        "method carries it into one file, and a program builds the application from that "
        "file.")

rows("What a low-code platform is made of",
     [("Forms", "the screens where people enter and read values."),
      ("Lists", "the tables of records people search and open."),
      ("Menus", "the user interface that leads to each form and list."),
      ("Processes", "the steps of the work.")],
     T,
     "VO: A low-code platform builds an application from four kinds of part. Forms are the "
     "screens where people enter and read values. Lists are the tables of records that "
     "people search and open. The user interface, with its menus, leads to each form and "
     "list. Processes are the steps of the work. The platform's own documentation describes "
     "a builder for each of the four. Find the link in the description.")

figure("4.4", 3, "F12_one-file-to-running-application.png", "in place of",
     "One file instead of a thousand clicks",
     [("The usual way", "a builder clicks each part together, working from the documents."),
      ("The method's way", "one file, the application model, holds everything agreed."),
      ("A program generates the forms, lists, menus and processes from it.", ''),
      ("A correction goes into the file, never into what was generated.", '')],
     T,
     "VO: The usual way is for a builder to click each part together, working from the "
     "documents. Every click is a chance to drift from what was agreed. The method does it "
     "differently. One file, the application model, holds everything agreed: the records, "
     "the lists, the screens, the menus, the workflow, who may do what, and the tests. A "
     "program reads the file and generates the parts from it. If something is wrong, the "
     "file is corrected, never the parts.")

rows("Nothing in the file is new",
     [("Stories and screens → forms and lists.", ''),
      ("The interaction design → how lists, searches, moves and acts behave; the file names it.", ''),
      ("The service workflow → states and moves.", ''),
      ("What cannot be placed → written down for a person to rule on.", '')],
     T,
     "VO: Nothing in the file is new. Each goal's story and its screens become forms and "
     "lists. The interaction design you accepted decides how lists, searches, moves and acts "
     "behave, and the file names that document. The service workflow becomes the states and "
     "moves. The file is written by an AI assistant that must refuse to guess. When "
     "something cannot be placed cleanly, it is written down for a person to rule on, not "
     "quietly decided.")

rows("MoEYS: one section, in plain sentences",
     [("Goal", "approve a change of an institution's name."),
      ("Starts from", "PHEQA's advice on changes of name that waits for the minister."),
      ("Shows", "the institution's present name, read from PHEQA's register across Linkup; the new "
       "name asked for; PHEQA's advice."),
      ("Decision", "approve or do not approve, chosen, not typed."),
      ("Records", "the approval, sent to PHEQA across Linkup; officers of MoEYS see it in the list of "
       "approvals.")],
     T,
     "VO: Here is one section of MoEYS's file, for the goal 'approve a change of an "
     "institution's name', read in plain sentences. The minister opens the list of PHEQA's "
     "advice on changes of name that waits for a decision. On the screen, the institution's "
     "present name is read from PHEQA's register across Linkup, the data exchange, and never "
     "copied. The new name and PHEQA's advice come as PHEQA sent them. The decision is "
     "chosen, approve or do not approve, never typed. Recording it sends the approval to "
     "PHEQA, and officers of MoEYS see it in their list of approvals.")

rows("Ask for it in plain sentences",
     [("The file is written for a program.", ''),
      ("Ask for a plain-sentence reading of each section beside it.", ''),
      ("Your officials check the reading against the screens they agreed.", ''),
      ("Where the two differ, the file is what gets built.", '')],
     T,
     "VO: The file is written for a program, not for you. So ask the supplier for a "
     "plain-sentence reading of each section, beside the file. Your officials check the "
     "reading against the screens they agreed. Then the business side and the builder read "
     "the same thing, and a decision means the same in both rooms. Keep one thing in mind: "
     "where the reading and the file differ, the file is what gets built. Raise every "
     "difference before the file is approved.")

big_slide(prs,
          "Everything agreed is carried into one file, from which the application is generated.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: Ask for the one file the application is generated from, and a plain-sentence "
          "reading of it. Check the reading against what your officials agreed.",
          practice=("Read one section of the model in plain sentences",
                    "a plain-sentence reading of one section, with anything not agreed marked"))

sources([
    "Joget DX 9 Knowledge Base, the pages Form Builder, List Builder, UI Builder and Process "
    "Builder",
], T, link=True)


# ================================================================ 4.5
T = "4.5 · Reviewing the model: what it assumed, and what it could not express"
section("4.5",
        "Reviewing the model: what it assumed, and what it could not express",
        "Every assumption and every loss is named for a person to rule on.",
        "VO: An AI assistant writes the file your application is generated from. It will "
        "meet things nobody wrote down, and things the platform cannot do. The question for "
        "you is simple: does it tell you, or does it quietly decide?")

rows("Four ways a thing reaches the file",
     [("Placed directly", "there is only one place it can go."),
      ("Placed by a judgement", "written down as an assumption."),
      ("Cannot be placed", "written down as a loss."),
      ("Stays in its own document", "nothing is owed.")],
     T,
     "VO: Everything agreed reaches the file in one of four ways. Most things are placed "
     "directly, because there is only one place they can go. Some need a judgement, and the "
     "judgement is written down as an assumption: what was decided, and on what ground. Some "
     "cannot be placed at all, because the platform has no way to express them. These are "
     "written down as losses. A few stay in their own document, and nothing is owed for them "
     "in the file.")

rows("An assumption, and a loss",
     [("Assumption", "a decision the writer made where the documents were silent."),
      ("Loss", "something agreed that the file cannot express, with what was done instead."),
      ("Never", "a gap filled by invention, with nobody told.")],
     T,
     "VO: An assumption is a decision the writer had to make because the documents were "
     "silent. A loss is something you agreed that the file cannot express, with what was "
     "done instead, if anything. Both are normal. What is not acceptable is a gap filled by "
     "invention, with nobody told. That is why the assistant must refuse to guess. A gap it "
     "names can be ruled on. A gap it fills in silently becomes a fault in the running "
     "service.")

rows("The cards the owner reads",
     [("One card for each assumption and each loss.", ''),
      ("In plain words", "what the application will do because of it."),
      ("The document it rests on.", ''),
      ("The ruling", "yes or no, with a name and a date.")],
     T,
     "VO: You do not read the file. You read cards: one for each assumption and each loss. "
     "Each card says, in plain words, what the application will do because of it, and which "
     "document it rests on. The owner rules yes or no on each card, and the ruling is "
     "recorded with a name and a date. A 'no' is never typed into the file. It goes back to "
     "the document that owns the fact, and the file is written again from the corrected "
     "document.")

rows("MoEYS: two cards",
     [("Assumption", "a change of name takes effect on the day the minister approves it. Ruling: yes."),
      ("Loss", "the notice to the institution cannot be sent by the platform; it is kept as a task "
       "for an officer. Ruling: yes.")],
     T,
     "VO: Here are two cards from the review of the file of MoEYS, Progressa's ministry of "
     "education. The first is an assumption: a change of name takes effect on the day the "
     "minister approves it, because the goal's story did not say. The second is a loss: the "
     "story asks that the institution is told, and the platform cannot send that notice by "
     "itself, so it is kept as a task for an officer. The Director of Higher Education rules "
     "yes on both, and her rulings are recorded.",
     closing="Ruled by the Director of Higher Education, with her name and the date.")

rows("When the answer is no",
     [("'No' to an assumption → the goal's story is corrected.", ''),
      ("The file is written again from the story.", ''),
      ("The cards are read again.", ''),
      ("Approval waits until every card carries a ruling.", '')],
     T,
     "VO: Suppose she had said no to the first card, because a change of name should take "
     "effect only when it is published in the Gazette. Her answer would not be typed into "
     "the file. It would go back to the goal's story, the one document that owns that fact. "
     "The story is corrected, the file is written again, and the cards are read again. The "
     "head of the ICT unit approves the file only when every card carries a ruling.")

big_slide(prs,
          "Every assumption and every loss is named for a person to rule on.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: Before the file is approved, ask for every assumption and every loss as a "
          "card in plain words. Rule on each one, and record who ruled and when.",
          practice=("Turn the losses into yes-or-no questions",
                    "a list of yes-or-no questions, one for each loss, in the loss's own words"))

sources([
    "The specification-driven development (SDD) method: the review of the application model. "
    "No external source is cited.",
], T, link=False)


# ================================================================ 4.6
T = "4.6 · Refused, not worked around"
section("4.6",
        "Refused, not worked around",
        "A program refuses a description that contradicts what you accepted, and nobody "
        "switches the check off.",
        "VO: Two days before a deadline, a program stops your supplier's build. The supplier "
        "asks for one favour: switch the check off, just this once. Your answer should "
        "already be written down, and it is no.")

rows("What the program checks first",
     [("Does the file name the interaction design you accepted?", ''),
      ("Does that document say it was accepted, by a name, on a date?", ''),
      ("Is it the same document, unchanged since then?", ''),
      ("Does every list, search, move and act in the file match it?", '')],
     T,
     "VO: Before anything is generated, built or installed, a program reads the file the "
     "application will be generated from, and asks four questions. Does the file name the "
     "interaction design you accepted? Does that document say it was accepted, by a name, on "
     "a date? Is it the same document, unchanged since it was accepted? And does every list, "
     "every search, every move and every act in the file match what the document decided? If "
     "any answer is no, the program refuses, and nothing is built.")

rows("Nothing switches it off",
     [("No setting.", ''),
      ("No switch.", ''),
      ("No exception for a deadline.", ''),
      ("The check reads what the document says", "your acceptance line is its evidence.")],
     T,
     "VO: Nothing switches this check off. There is no setting, no switch, and no exception "
     "for a deadline. The check also cannot know that you accepted the document. It knows "
     "only that the document says so, and that the file agrees with it. That makes your "
     "acceptance line evidence. Write it exactly, with the name and the date, and never "
     "write it for a document nobody has read. A deadline does not change what was agreed; "
     "it changes only how soon the correction is needed.")

rows("Answered, not worked around",
     [("Either", "correct the file to match what was accepted."),
      ("Or", "if the decision should change, the owner accepts a revised interaction design, and "
       "the file names it."),
      ("Never", "switch the check off, or edit what was built.")],
     T,
     "VO: A refusal is answered, not worked around. There are two honest answers. Either the "
     "file is corrected to match what you accepted. Or, if the decision itself should "
     "change, the owner accepts a revised interaction design, and the file names that new "
     "version. Both leave a record of who decided what. Switching the check off leaves no "
     "record, and the same fault returns at the next build.")

rows("MoEYS: one list of twenty, refused",
     [("Accepted", "the matters PHEQA advises on are chosen in three categories, of 8, 7 and 5."),
      ("The file", "one list of twenty matters, no categories."),
      ("The program", "refused. It names the interaction design and the row for that list."),
      ("Nothing is generated.", '')],
     T,
     "VO: Here is how it looks for MoEYS, Progressa's ministry of education. The interaction "
     "design its director accepted says that the twenty matters PHEQA advises on are chosen "
     "in three categories, of eight, seven and five. A version of the file offers the "
     "officer all twenty in one list. The program refuses it before anything is built. The "
     "refusal names the document and the row it disagrees with, the row for that list, so "
     "the supplier knows exactly what to correct, and nobody has to guess.")

rows("Corrected, and admitted",
     [("First run: refused", "the row for the matters PHEQA advises on."),
      ("Correction", "the three categories, as accepted."),
      ("Second run", "admitted.")],
     T,
     "VO: The correction is small. The list in the file is given the three categories the "
     "document decided, and the program reads the file again. This time it is admitted, and "
     "generation may begin. That is the whole demonstration: one run refused with the row "
     "named, one run admitted after the correction. Until it is recorded on a real "
     "application, this is a storyboard: the steps and what counts as a pass, written before "
     "anything is run.\n\nProduction cue: demonstration segment, a storyboard until it is "
     "recorded (in the bundle: section 4.8). The text-only stand-in holds the screen until "
     "the recording replaces this slide.",
     closing=STORYBOARD)

big_slide(prs,
          "A program refuses a description that contradicts what you accepted, and nobody "
          "switches the check off.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: When the program refuses, do not ask who can switch it off. Ask which row it "
          "names, then correct the file or accept a revised decision.",
          practice=("Explain a refusal in plain words",
                    "a plain explanation of the refusal, naming the document to correct"))

sources([
    "The specification-driven development (SDD) method: the check before generation. No "
    "external source is cited.",
], T, link=False)


# ================================================================ Thank you
s = add_slide(prs, LAYOUT_THANKS)
notes(s, 'Closing slide for the combined deck. Individual videos end on their recap or sources slide.')

# Self-check: cover + agenda + every video's specification slides and its hook slide + thank-you.
EXPECTED = 57
assert len(prs.slides._sldIdLst) == EXPECTED, 'slide count changed from %d' % EXPECTED
assert all(sl.has_notes_slide and sl.notes_slide.notes_text_frame.text.strip() for sl in prs.slides), \
    'every slide carries its voice-over or its production note'

# The practice box is the last thing on its slide; anything overlapping it clips on render.
for sl in prs.slides:
    for pb in [sh for sh in sl.shapes if sh.has_text_frame
               and sh.text_frame.text.startswith('Do this on your own sector')]:
        for sh in sl.shapes:
            if sh.shape_id == pb.shape_id or not sh.has_text_frame or not sh.text_frame.text.strip():
                continue
            assert sh.top + sh.height <= pb.top or sh.top >= pb.top + pb.height, \
                'shape overlaps the practice box: %r' % sh.text_frame.text[:60]

# Output goes to the production tree the video track and the tracker read (see ../videos/README.md),
# as kp4_deck_common does for Modules 1 to 3; OUT_DIR= overrides (the scripts then go to OUT_DIR/scripts).
if os.environ.get('OUT_DIR'):
    DECKS = os.environ['OUT_DIR']
    SCRIPTS_DIR = os.path.join(DECKS, 'scripts')
else:
    LANG_DIR = os.path.join(KP4, 'videos', 'module_%s' % MODULE, 'en')
    DECKS = os.path.join(LANG_DIR, 'decks')
    SCRIPTS_DIR = os.path.join(LANG_DIR, 'scripts')
os.makedirs(DECKS, exist_ok=True)
os.makedirs(SCRIPTS_DIR, exist_ok=True)
OUT = os.path.join(DECKS, 'KP4_M%s_Deck_v0.1.pptx' % MODULE)
prs.save(OUT)
print('slides:', len(prs.slides._sldIdLst))
print('saved', OUT)

# The split spec is written from VIDEOS on every run; the ranges are read off the deck's
# section-slide kickers by --infer-ranges, so nothing is counted by hand.
SPEC = os.path.join(DECKS, 'split_spec.json')
with open(SPEC, 'w', encoding='utf-8') as f:
    json.dump({'kicker_prefix': 'Designing Digital Government Services · Module %s' % MODULE,
               'audience': AUDIENCE,
               'out_pattern': 'KP4_M%s_{code}_Deck_v0.1.pptx' % MODULE,
               'videos': [{'code': c, 'title': t, 'mins': m, 'range': [0, 0], 'message': msg,
                           'bundle_slides': n} for c, t, m, msg, n in VIDEOS]}, f, ensure_ascii=False, indent=2)
    f.write('\n')
subprocess.run([sys.executable, os.path.join(SCRIPTS, 'split_module_deck.py'), OUT, SPEC, DECKS,
                '--infer-ranges'], check=True)
subprocess.run([sys.executable, os.path.join(SCRIPTS, 'scripts_from_deck.py'), OUT, SPEC,
                SCRIPTS_DIR, '--kp', 'KP4', '--module', MODULE,
                '--prefix', 'KP4_M%s' % MODULE, '--version', 'v0.1'], check=True)
# Prove the speaker notes narrate the bundle word for word (the kit's vo_diff.py). Its result is printed,
# not enforced: a 'NARRATED' flag means a voice-over paragraph of the bundle itself says 'Find the link in
# the description' (4.3 slide 3, 4.4 slide 4 and 5.2 slide 7, as of 5 Oct 2026), which is the author's call.
r = subprocess.run([sys.executable, os.path.join(SCRIPTS, 'vo_diff.py'),
                    os.path.join(KP4, 'build_kp4_module%s_v01.js' % MODULE), OUT])
if r.returncode:
    print('vo_diff reported problems (see the table above): check the mismatch and NARRATED columns.')

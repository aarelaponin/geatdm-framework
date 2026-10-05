#!/usr/bin/env python3
# Build the KP4 Module 5 video decks on the ITU template — v0.1.
# Content follows KP4_Module5_Script_Bundle_v0.1 (build_kp4_module5_v01.js): 7 videos,
# 5.1 – 5.7, Architect-facing (persona A). Every slide follows the bundle's on-screen slide specification, slide by slide:
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
# the scripts-only companion, all under decks/module_5/ (the layout the KP4 decks of
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

MODULE = '5'
AUDIENCE = 'Head of a sectoral ICT unit · project lead who accepts the documents'
# (code, title, runtime, single message, slides in the bundle's on-screen slide specification)
VIDEOS = [('5.1',
  'From one file to a running application',
  '~5',
  "The kit turns the model into the platform's forms, lists, menus and workflow, and installs "
  'them.',
  9),
 ('5.2',
  'Nothing generated is edited by hand',
  '~5',
  'A correction goes into the description and the application is generated again; a program shows '
  'any hand edit.',
  9),
 ('5.3',
  "The platform's traps, caught before deployment",
  '~5',
  'What is known to fail on the platform is checked before anything is installed.',
  8),
 ('5.4',
  'Identity and registries: use the block, do not rebuild it',
  '~5',
  "The service takes a person's identity and an institution's record from the body that keeps "
  'them.',
  9),
 ('5.5',
  "The service's contract with the registration block, and its data interface",
  '~5',
  'The contract another system reads is produced from the description, not written beside it.',
  8),
 ('5.6',
  'Payments and information mediation as named crossings',
  '~5',
  'A payment or a call across the data exchange is a crossing the architecture names, not a block '
  'the service rebuilds.',
  8),
 ('5.7',
  'Proof on the running system: a task a person finishes',
  '~5',
  'The last check is a person finishing a real task on the running service, and the record that '
  'they did.',
  8)]

# The practice box is the video's only call to action and is never narrated (plan D5).
PRACTICE_NOTE = ('PRACTICE BOX (on-screen only — never read it, never paraphrase it, never point '
                 'at it). It replaces the narrated handoff: this video ends on its recap.')
STORYBOARD = 'Demonstration segment — a storyboard until it is recorded.'

# Opener (hook) slide copy per video — headline + two or three supporting lines, written from
# the same opener narration the hook's note carries. Not a preview of the next slide's list.
HOOKS = {'5.1': ('"The application is built." Built from what?',
         ["Before you accept the supplier's report, know what was built from what.",
          'One file decides almost everything you will see.']),
 '5.2': ('A wrong label, the evening before the demonstration.',
         ['The quickest fix is to change it on the platform.',
          'Your contract should forbid that fix, and a program can show whether it was made.']),
 '5.3': ('Every low-code platform has places where it does not do what its screens suggest.',
         ['Your officers should not be the ones who find them,',
          'on the first morning the new service is open to the public.']),
 '5.4': ('"We will add a table of users and a table of institutions."',
         ['It sounds helpful and quick.',
          'It is the start of copies that will disagree, and of facts the ministry may have no '
          'reason to keep.']),
 '5.5': ('Two applications rely on one contract: what may be asked, and what comes back.',
         ['Write that contract by hand beside the application, and the two drift apart.']),
 '5.6': ("A fee, another body's register, a sign-in: each leaves the service and comes back.",
         ['Your architecture names every one of them before anyone builds anything.']),
 '5.7': ('Every check reports a pass. Can an officer finish a real task?',
         ['Every document is accepted, and the application is installed.',
          'Only a person on the running service can answer, and the answer must be recorded.'])}


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
edit_cover(prs, **{'title_text': 'Generate the service on a\nlow-code platform and\nconnect the blocks',
 'kicker': 'Designing Digital Government Services · Module 5',
 'blurb': 'Seven standalone videos: from one file to a running application, nothing generated '
          "edited by hand, the platform's traps caught before deployment, identity and registries "
          'used rather than rebuilt, the contract and the data interface, payments and mediation '
          'as named crossings, and proof on the running system.',
 'length': '~35 mins across 7 videos (5.1 – 5.7)',
 'panel_heading': 'FROM THE FILE TO THE RUNNING SERVICE',
 'panel_items': ['Generated and installed',
                 'Never edited by hand',
                 'Traps checked first',
                 'Blocks used, not copied',
                 'Contract from the description',
                 'Crossings named',
                 'A task a person finishes'],
 'panel_footer': '1 file · no hand edits · 1 recorded run',
 'note_text': 'Cover for the combined Module 5 deck. Each section that follows is one standalone '
              '~5 minute video, for the head of a sectoral ICT unit or the project lead who has a '
              'service specified and built by a supplier. 5.6 is supplementary.',
 'audience': 'Head of a sectoral ICT unit · project lead who accepts the documents'})

# ---------------------------------------------------------------- AGENDA (edit slide 2)
edit_agenda(prs, **{'header': 'Module 5 — seven videos',
 'items': [('5.1  From one file to a running application', '~5 min'),
           ('5.2  Nothing generated is edited by hand', '~5 min'),
           ("5.3  The platform's traps, caught before deployment", '~5 min'),
           ('5.4  Identity and registries: use the block, do not rebuild it', '~5 min'),
           ("5.5  The service's contract with the registration block, and its data interface",
            '~5 min'),
           ('5.6  Payments and information mediation as named crossings (supplementary)', '~5 min'),
           ('5.7  Proof on the running system: a task a person finishes', '~5 min')],
 'message_paras': ['The application is generated from the one accepted file, and nothing generated '
                   'is edited by hand.',
                   'Identity, registries, payments and the data exchange are blocks the service '
                   'uses; the last check is a person finishing a real task.'],
 'note_text': 'Navigation slide for the combined deck; the videos ship standalone. 5.1 to 5.3 '
              'generate and guard the application; 5.4 to 5.6 connect it to the blocks; 5.7 proves '
              'it on the running system. 5.6 is supplementary.'})

delete_template_slides(prs, keep=2)

# ================================================================ 5.1
T = "5.1 · From one file to a running application"
section("5.1",
        "From one file to a running application",
        "The kit turns the model into the platform's forms, lists, menus and workflow, and "
        "installs them.",
        "VO: Your supplier reports that the ministry's new application is built. Before you "
        "accept that report, you need to know what was built from what, and which questions "
        "to ask of the result. One file decides almost everything you will see.")

rows("One file, read by a program",
     [("The application model", "the one file the application is generated from."),
      ("Written last, from documents your officials have already accepted.", ''),
      ("Checked by a program before anything is built.", '')],
     T,
     "VO: In the SDD method, specification-driven development, each document a person writes "
     "is accepted before the next one begins. The last of them is the application model: one "
     "file, written for a program to read. It carries every record, screen, list, menu and "
     "step of the workflow, each taken from documents your officials have already accepted. "
     "Before anything is built, a program checks the file, and refuses it if it contradicts "
     "what was accepted.")

figure("5.1", 3, "F12_one-file-to-running-application.png", "in place of",
     "What the kit makes from it",
     [("Forms", "the screens where an officer enters or reads a record."),
      ("Lists", "the worklists and registers an officer chooses from."),
      ("Menus", "what each role sees after signing in, in categories."),
      ("The workflow", "the steps of a goal and who may take each.")],
     T,
     "VO: The kit is the method's set of programs, which the supplier runs. From the file it "
     "makes the four things a low-code platform is built from. Forms are the screens where "
     "an officer enters or reads a record. Lists are the worklists and registers. Menus are "
     "what each role sees after signing in, grouped in categories. The workflow is the order "
     "of steps, and who may take each one. The platform's own documentation has a builder "
     "for each of them, and the kit fills those builders from the file instead of by hand.")

rows("Installed, not rebuilt",
     [("The kit packs the application and installs it on the platform's server.", ''),
      ("The same package can go to a test server first, then to the live one.", ''),
      ("Nothing is rebuilt by hand in between.", '')],
     T,
     "VO: Then the kit installs what it built. It packs the application's design and puts it "
     "on the platform's server. The platform's documentation describes the same kind of "
     "move, of one application from one server to another, and by default only the design "
     "travels, not the data. So the same package can go to a test server, be checked there, "
     "and then go to the live server, with nothing rebuilt by hand in between.")

rows("Progressa: MoEYS's application",
     [("Generated from MoEYS's model, onto MoEYS's own installation.", ''),
      ("Forms", "the minister's decisions; the Gazette entries."),
      ("Lists", "what awaits the minister's decision."),
      ("Menu in five categories", "Licences · Names, the list and reviews · Suspension and cancellation · The Gazette · "
       "Requests for review.")],
     T,
     "VO: In Progressa, MoEYS's application is generated from its model onto MoEYS's own "
     "installation of the platform. The model asks for the forms on which the minister "
     "decides and an officer records the Gazette, for lists of what awaits the minister, and "
     "for a menu in five categories: licences; names, the list and reviews; suspension and "
     "cancellation; the Gazette; and requests for review. It asks for no table of "
     "institutions, because MoEYS reads PHEQA's register instead.")

rows("The questions you ask of the result",
     [("Each goal", "where does it start, and who can start it?"),
      ("Each menu category", "present, and shown only to its role?"),
      ("Each list", "does it show only what awaits an act?"),
      ("Any screen that no accepted document asked for?", '')],
     T,
     "VO: Acceptance starts from the model, not from the supplier's account. For each goal, "
     "ask where it starts and who can start it. Check that every menu category is there, for "
     "the right role and no other. Open each list and check that it shows only what waits "
     "for an act. Then ask whether any screen exists that no accepted document asked for. "
     "Each answer is read on the running application, not on a slide.")

rows("From the file to the menu",
     [("The file admitted by the check.", ''),
      ("The application built and installed on MoEYS's installation.", ''),
      ("The menu, one form and one list opened.", ''),
      ("Pass", "no error; the application listed; every menu category present.")],
     T,
     "VO: The demonstration follows these steps. The check admits the file. The kit builds "
     "the application and installs it on MoEYS's installation. Then the menu, one form and "
     "one list are opened on the platform. It passes when the build ends without error, the "
     "application appears on the installation, and every menu category of the interaction "
     "design is there. Until MoEYS's application is generated, this is a storyboard: the "
     "steps and the pass, written before anything is recorded.\n\nProduction cue: "
     "demonstration segment, a storyboard until it is recorded (in the bundle: section 4.8). "
     "The text-only stand-in holds the screen until the recording replaces this slide.",
     closing=STORYBOARD)

big_slide(prs,
          "The kit turns the model into the platform's forms, lists, menus and workflow, and "
          "installs them.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: One accepted file, read by a program, becomes the forms, lists, menus and "
          "workflow on the platform. Ask your questions of the running result, one goal at a "
          "time.",
          practice=("Write the acceptance questions for a generated application",
                    "a numbered list of acceptance questions, one for each goal, each with "
                    "where on the running application to look"))

sources([
    "Joget DX 9 Knowledge Base, the platform's documentation, pages Form Builder, List "
    "Builder, UI Builder, Process Builder and Migrating a Single Joget App",
], T, link=True)


# ================================================================ 5.2
T = "5.2 · Nothing generated is edited by hand"
section("5.2",
        "Nothing generated is edited by hand",
        "A correction goes into the description and the application is generated again; a "
        "program shows any hand edit.",
        "VO: The evening before the minister's demonstration, someone notices a wrong label "
        "on a form. The quickest fix is to change it on the platform. That fix is the one "
        "your contract should forbid, and a program can show whether it was made.")

rows("Two versions of the truth",
     [("The accepted description says one thing.", ''),
      ("The platform now shows another.", ''),
      ("The next generation either overwrites the edit or is quietly stopped.", '')],
     T,
     "VO: A hand edit creates two versions of the truth. The accepted description says one "
     "thing, and the platform now shows another. When the application is next generated from "
     "the description, one of two things happens. Either the edit is overwritten and the "
     "wrong label comes back. Or someone protects the edit by not generating again, and from "
     "then on nobody can say what the application is built from.\n\nRetrieval prompt — ask "
     "before playing on: the label on the form is wrong; where does the correction go? "
     "Answer on the next slide.")

figure("5.2", 3, "F13_correct-up-generate-down.png", "beside",
     "Correct up, generate down",
     [("Find the document that owns the fact.", ''),
      ("Correct it there, and have the correction accepted.", ''),
      ("Generate the application again.", '')],
     T,
     "VO: The SDD method has one rule for this: nothing generated is edited by hand. A "
     "correction goes into the description that owns the fact, is accepted there, and the "
     "application is generated again. A label belongs to the screens of its goal, so it is "
     "corrected in those screens, carried into the model, and generated. It takes a little "
     "longer than a change on the platform. In exchange, the description and the platform "
     "never disagree.",
     numbered=True)

rows("The read-back",
     [("In step", "the file is what the description generates."),
      ("Out of date", "the description changed, and the file was not generated again."),
      ("Edited by hand", "the file differs from what the description generates.")],
     T,
     "VO: The method gives you a program to check this, the read-back. It compares each "
     "generated file on the platform with what the description would generate, and marks it "
     "in one of three ways: in step, out of date, or edited by hand. You do not need to read "
     "the files themselves. You read the program's list, and you ask about every line that "
     "is not in step.")

rows("Progressa: a label on MoEYS's form",
     [("The form on which the minister approves a new name.", ''),
      ("A label changed by hand on the platform, the evening before a demonstration.", ''),
      ("The read-back", "this form, edited by hand."),
      ("The label corrected in the goal's screens and the model; generated again; read back "
       "again.", '')],
     T,
     "VO: In Progressa, a builder changes a label on MoEYS's form for approving an "
     "institution's new name, directly on the platform, to meet the demonstration. The "
     "read-back lists that form as edited by hand. The head of MoEYS's ICT unit asks for the "
     "change to be made properly. The label is corrected in the goal's screens and in the "
     "model, the application is generated again, and the read-back is run once more. It "
     "passes only when every file shows in step.")

rows("A hand edit shown up",
     [("A label changed on the platform.", ''),
      ("Read-back", "the form, edited by hand."),
      ("The label corrected in the model; generated again.", ''),
      ("Read-back", "every file in step.")],
     T,
     "VO: The demonstration shows the same steps on a generated application. A label is "
     "changed by hand on the platform, the read-back runs and names the form, the correction "
     "is made in the model, and the read-back runs again. It passes when the first run names "
     "the edited file and the second shows every file in step. Until the application is "
     "generated, this is a storyboard.\n\nProduction cue: demonstration segment, a storyboard "
     "until it is recorded (in the bundle: section 4.9). The text-only stand-in holds the "
     "screen until the recording replaces this slide.",
     closing=STORYBOARD)

rows("Write it into the contract",
     [("No generated file is edited by hand.", ''),
      ("The read-back is run before every acceptance, and its list is handed over.", ''),
      ("A file edited by hand is a defect, corrected in the description.", '')],
     T,
     "VO: Put the rule into the supplier's contract, together with its evidence. No "
     "generated file may be edited by hand on the platform. The read-back is run before "
     "every acceptance, and its list is handed over with the delivery. A file marked as "
     "edited by hand is a defect, and it is corrected in the description, not argued about "
     "at the acceptance meeting.")

big_slide(prs,
          "A correction goes into the description and the application is generated again; a "
          "program shows any hand edit.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: Correct the accepted document, not the platform, and generate the application "
          "again. The read-back shows any file that someone changed by hand.",
          practice=("Draft the contract clause that forbids hand edits",
                    "one contract clause of four numbered parts, with the undefined terms "
                    "listed after it"))

sources([
    "This subtopic states the SDD method's own rule, that nothing generated is edited by "
    "hand, and its read-back, in plain words. It cites no external source.",
], T, link=False)


# ================================================================ 5.3
T = "5.3 · The platform's traps, caught before deployment"
section("5.3",
        "The platform's traps, caught before deployment",
        "What is known to fail on the platform is checked before anything is installed.",
        "VO: Every low-code platform has places where it does not do what its screens "
        "suggest. Your officers should not be the ones who find them, on the first morning "
        "the new service is open to the public.")

rows("Known, written down, checked",
     [("A register of the platform's known differences: what is promised, and what a release "
       "does.", ''),
      ("Each difference a program can test becomes a rule.", ''),
      ("The check applies the rules before anything is installed.", '')],
     T,
     "VO: The SDD method keeps a register of the platform's known differences: places where "
     "the documentation promises one thing and a particular release does another. Each entry "
     "was found once, the hard way, by a team that lost time to it. Each entry that a "
     "program can test becomes a rule. The check applies those rules to the application "
     "model before anything is built or installed, so the same trap is not found twice.")

rows("The maker's own lists",
     [("Known issues", "a page the platform's maker keeps."),
      ("What changed in each release", "release 9.0.7, published 18 May 2026."),
      ("A trap on either list becomes a check, not a surprise.", '')],
     T,
     "VO: The platform's maker publishes two lists that feed the register. One is a page of "
     "known issues. It records cases such as a screen that shows a step as completed while "
     "the workflow behind it does not move on. The other is a list of what each release "
     "changed. Release 9.0.7, the one Progressa's two installations run, was published on 18 "
     "May 2026, with bug fixes and security upgrades among its changes. Read both lists "
     "before you agree the release your service will run on.")

rows("Progressa: a list with two filters",
     [("MoEYS's list of what awaits the minister", "a filter by date, a filter by matter."),
      ("The platform saves the setting without complaint.", ''),
      ("On a list of this kind, one filter is honoured; the second is ignored, silently.", ''),
      ("An officer sees more than she asked for, and does not know it.", '')],
     T,
     "VO: Here is one trap, told by its kind. MoEYS's list of what awaits the minister's "
     "decision reads straight from the database, and it carries two filters: one by date, "
     "and one by the matter advised on. The platform saves that setting without complaint. "
     "But the register records that, on a list of this kind, the platform honours one filter "
     "at a time and quietly ignores the second. An officer who sets both sees more than she "
     "asked for, and never knows.")

rows("Caught by the check, not by an officer",
     [("The check reads the model and finds the list with two filters.", ''),
      ("It reports the list, the rule and the reason.", ''),
      ("The model is corrected, and checked again.", '')],
     T,
     "VO: The check is written to catch this before installation. It reads the model, finds "
     "a list of that kind with two filters, and reports the list, the rule and the reason. "
     "The model is then corrected, either to one filter or to a kind of list that honours "
     "both, and checked again. The trap is found at the review, where it costs an hour, and "
     "not at the counter, where it costs the public's trust.")

rows("What to ask a supplier",
     [("Which rules about this platform does your check apply?", ''),
      ("Show me the check running on our own model.", ''),
      ("Which rules were shown running, and which were only described?", '')],
     T,
     "VO: You cannot read the platform's code, and you do not need to. Ask the supplier "
     "three things. Which rules about this platform does your check apply? Show me the check "
     "running on our own model, not on a sample. And keep a table of the rules you saw "
     "running and the rules you were only told about. A rule that was only described is a "
     "promise, not evidence. Put the table in the acceptance file, beside the record of the "
     "check.")

big_slide(prs,
          "What is known to fail on the platform is checked before anything is installed.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: Known traps belong in a check that runs before installation. Ask to see that "
          "check run on your own model, and keep the record of what you saw.",
          practice=("Record which platform rules a supplier's checks apply",
                    "a table of the supplier's platform rules, each marked shown or only stated"))

sources([
    "Joget DX 9 Knowledge Base, the platform's documentation, pages Known Issues and Version "
    "9.0.7",
], T, link=True)


# ================================================================ 5.4
T = "5.4 · Identity and registries: use the block, do not rebuild it"
section("5.4",
        "Identity and registries: use the block, do not rebuild it",
        "The service takes a person's identity and an institution's record from the body "
        "that keeps them.",
        "VO: A supplier offers to add a table of users and a table of institutions to the "
        "ministry's new application. It sounds helpful and quick. It is the start of copies "
        "that will disagree, and of facts the ministry may have no reason to keep.")

rows("Who someone is: the identity sign-in",
     [("The application sends the person to the identity block's own sign-in page.", ''),
      ("The block asks which facts it may share; the person approves.", ''),
      ("The application receives a code, exchanges it for a token, and reads the approved facts.", '')],
     T,
     "VO: Identity comes from the body that keeps it. The GovStack Identity specification "
     "describes the sign-in step by step. The application sends the person to the identity "
     "block's own page. The person signs in there, and the block asks which facts it may "
     "share. The person approves. The application receives a code, exchanges it for a token "
     "that says who signed in, and then reads the facts that were approved. This follows "
     "OpenID Connect, an open standard for signing in.")

rows("Keep the identifier you are given",
     [("The identity block gives each service its own identifier for the person.", ''),
      ("The same person has a different identifier in each service.", ''),
      ("The application keeps that identifier, and never the national number.", '')],
     T,
     "VO: What the application keeps matters as much. The token carries an identifier that "
     "the block gives this one service for this one person. The Identity specification asks "
     "that the same person have a different identifier in each service, to protect privacy. "
     "So the application keeps the identifier it is given, and never the national number. "
     "Where a design must check a person who is not present, the specification requires the "
     "block to verify a person from a known identifier; settle with the identity authority "
     "what it offers before the design relies on it.")

rows("What an institution is: the register",
     [("The specification", "other systems work with a register's records through open interfaces, as the "
       "register authorises."),
      ("Progressa's design", "only PHEQA's application writes the register of institutions."),
      ("A reader takes the record when it needs it, and keeps no copy.", '')],
     T,
     "VO: An institution's record works the same way. The GovStack Digital Registries "
     "specification requires a register to let other systems search, read, create and update "
     "its records through open interfaces, and to authorise which systems and users may do "
     "so. Progressa's design authorises only PHEQA's application to write the register of "
     "institutions. Every other service reads the record when it needs it, and keeps no copy.")

figure("5.4", 5, "F7_architecture.png", "in place of",
     "Progressa: one sign-in, one register, no copies",
     [("An officer of MoEYS signs in through PNIA.", ''),
      ("MoEYS's application keeps PNIA's identifier for her, not her national number.", ''),
      ("Harbourview University College, INS-00217, is read from PHEQA's register when a case "
       "is opened.", ''),
      ("Beside it, a design with its own table of institutions: two copies, drifting apart.", '')],
     T,
     "VO: In Progressa, an officer of MoEYS signs in through PNIA, and MoEYS's application "
     "keeps the identifier PNIA gives it, not her national number. When she opens a case, "
     "the application reads Harbourview University College from PHEQA's register of "
     "institutions. Now picture the other design, with its own table of institutions inside "
     "MoEYS's application. One week PHEQA writes the college's new name into the register. "
     "MoEYS's copy keeps the old one, and the next week the minister signs a decision under "
     "a name the college no longer has.")

rows("A block used, not a copy kept",
     [("A block paid for once serves every service that needs it.", ''),
      ("A copy is a second register that nobody planned and nobody keeps.", '')],
     T,
     "VO: A block paid for once and used by many services is re-use that only someone "
     "planning for the whole sector can see. A copy is the opposite: a second register that "
     "nobody planned, nobody keeps and nobody corrects. The reference architecture PAERA "
     "puts the deeper point plainly: digital public infrastructure is not neutral, and it "
     "shapes what can be built on top of it. Build on the block, and the next service "
     "inherits the same identity and the same register.")

rows("Signed in, and read from the register",
     [("A test officer signs in through the identity sign-in.", ''),
      ("The application shows the identifier it was given; no national number.", ''),
      ("INS-00217 opened, as read from PHEQA's register.", ''),
      ("Pass", "sign-in complete; no national number; the record agrees with the register.")],
     T,
     "VO: The demonstration shows both on MoEYS's application. A test officer signs in "
     "through the identity sign-in. The application shows the identifier it was given and no "
     "national number. Then an institution's record is opened, read from PHEQA's register. "
     "It passes when the sign-in completes, no national number appears, and the record shown "
     "agrees with the register. Until both applications are generated, this is a "
     "storyboard.\n\nProduction cue: demonstration segment, a storyboard until it is recorded "
     "(in the bundle: section 4.10). The text-only stand-in holds the screen until the "
     "recording replaces this slide.",
     closing=STORYBOARD)

big_slide(prs,
          "The service takes a person's identity and an institution's record from the body "
          "that keeps them.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: Take who someone is from the identity block, and what an institution is from "
          "its register. Keep the identifier you are given, and no copy.",
          practice=("Find the copies of facts another body keeps",
                    "a table of the copied facts, each with the body that keeps it and the "
                    "block to use instead"))

sources([
    "GovStack Identity 2.0, sections 9.1.1, 7.2.1 and 8, and requirement 6.2-r2",
    "OpenID Connect Core 1.0 incorporating errata set 2, sections 2 and 3.1",
    "GovStack Digital Registries 3.0-alpha, requirement DRS-33 and sections 8.1 and 8.2",
    "PAERA v1.0, section 2.6",
], T, link=True)


# ================================================================ 5.5
T = "5.5 · The service's contract with the registration block, and its data interface"
section("5.5",
        "The service's contract with the registration block, and its data interface",
        "The contract another system reads is produced from the description, not written "
        "beside it.",
        "VO: When the ministry's application asks the quality authority's application for an "
        "institution, both sides rely on a contract: what may be asked, and what comes back. "
        "If someone writes that contract by hand beside the application, the two will drift "
        "apart.")

rows("What a contract is",
     [("What another system may ask for.", ''),
      ("What it must send, and what comes back.", ''),
      ("Written in a published standard form, the OpenAPI Specification.", '')],
     T,
     "VO: A contract, here, is the written promise one system makes to others. It says what "
     "they may ask for, what they must send, and what comes back. It is written in a "
     "published standard form, the OpenAPI Specification, so that a program on the other "
     "side can read it. The data exchange carries the call; the contract says what the call "
     "may be. Across the data exchange, each call names the service it is made to, and the "
     "exchange's own rules ask that each service be described in this standard form.")

rows("Produced from the description",
     [("The description already says what the register holds and what it publishes.", ''),
      ("A program writes the contract from it.", ''),
      ("When the description changes, the contract is produced again.", '')],
     T,
     "VO: In the SDD method, nobody writes the contract beside the application. The accepted "
     "description already says what the register holds and what it publishes. A program "
     "produces the contract from that description, in the same way the application itself is "
     "produced. When the description changes, the contract is produced again, so the "
     "application and the promise it makes to others cannot say different things. It is the "
     "same rule as for the application itself: correct the description, never the copy.")

rows("The contract with the registration block",
     [("Published operations for applying online", "the services and forms on offer, an application and its documents."),
      ("Published operations for processing", "applications and officers' tasks."),
      ("For designing services and workflows", "no interface specified yet."),
      ("The service's contract with the block is produced from the description.", '')],
     T,
     "VO: The same holds for a registration service and the GovStack Registration block. Its "
     "specification publishes the operations of applying online: the services and forms on "
     "offer, and sending an application with its documents. It publishes operations for "
     "processing: the applications and the officers' tasks. For managing and designing "
     "services and workflows, it says no interface is specified yet. So the service's "
     "contract with the block is produced from the description, in the block's published "
     "terms.")

figure("5.5", 5, "F14_data-interface.png", "in place of",
     "Progressa: PHEQA's register, as MoEYS reads it",
     [("MoEYS may ask", "one institution, by its register number, such as INS-00217."),
      ("MoEYS may ask", "the list of registered institutions."),
      ("MoEYS cannot ask", "applications, inspections, fees, or anything the register does not publish."),
      ("Every call goes through Linkup.", '')],
     T,
     "VO: Read as a list, the contract of PHEQA's register is short. MoEYS may ask for one "
     "institution by its register number, such as INS-00217, and receive its name, its kind, "
     "its licence and its standing. MoEYS may ask for the list of registered institutions. "
     "It cannot ask for applications, inspections, fees, or anything else the register does "
     "not publish. Every call goes through Linkup. The manager reads this list; the "
     "builder's program reads the same contract as a file. One document gives the business "
     "side and IT one shared language.")

rows("One institution, read across the exchange",
     [("MoEYS's application asks for INS-00217 across the data interface.", ''),
      ("Beside the call", "the contract it is read by."),
      ("Pass", "the record agrees with PHEQA's register; the call is one the contract publishes.")],
     T,
     "VO: The demonstration reads one institution. MoEYS's application asks for it across "
     "the data interface, and the contract it is read by is shown beside the call. It passes "
     "when the record returned agrees with PHEQA's register, and the call is one that the "
     "contract publishes. Until both applications are generated, this is a storyboard: the "
     "steps and the pass, written before anything is recorded.\n\nProduction cue: "
     "demonstration segment, a storyboard until it is recorded (in the bundle: section "
     "4.11). The text-only stand-in holds the screen until the recording replaces this slide.",
     closing=STORYBOARD)

big_slide(prs,
          "The contract another system reads is produced from the description, not written "
          "beside it.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: A contract produced from the accepted documents cannot drift from them. Read "
          "it as a plain list of what may be asked, and what may not.",
          practice=("Read an interface contract as a plain list",
                    "two plain lists, what the other body can ask for and what it cannot"))

sources([
    "GovStack Registration (default edition), sections 8.1, 8.2 and 8.3",
    "GovStack Information Mediator 1.1.1",
    "NIIS X-Road 7.7.0, Message Protocol for REST (PR-REST), sections 4.1 and 5.1",
    "OpenAPI Specification 3.0.3",
], T, link=True)


# ================================================================ 5.6
T = "5.6 · Payments and information mediation as named crossings"
section("5.6",
        "Payments and information mediation as named crossings",
        "A payment or a call across the data exchange is a crossing the architecture names, "
        "not a block the service rebuilds.",
        "VO: A registration service takes a fee, reads another body's register and signs "
        "people in. Each of these leaves the service and comes back. Your architecture "
        "should name every one of them before anyone builds anything.")

rows("A crossing, named",
     [("What crosses, and in which direction.", ''),
      ("The body on the other side.", ''),
      ("The block it goes through.", ''),
      ("Who on the other side has agreed to it.", '')],
     T,
     "VO: A crossing is any flow that leaves the service or enters it. The architecture "
     "names each one in a table: what crosses, in which direction, the body on the other "
     "side, and the block it passes through. The GovStack Registration specification expects "
     "all traffic into and out of a block to go through an Information Mediator or a secure "
     "gateway. A service that goes round the exchange builds a private road that nobody else "
     "can check.")

rows("The fee: through the Payments block",
     [("The service sends a payment request to the Payments block.", ''),
      ("The request carries the payer, the payee, the amount, the currency, the policy and "
       "the service's own transaction number.", ''),
      ("The block tracks the payment, and the confirmation comes back.", '')],
     T,
     "VO: Take the fee first. The registration service does not build its own payment screen "
     "or deal with banks. It sends a payment request to the government's Payments block. The "
     "GovStack Payments specification lists what such a request must carry at the least: who "
     "pays, who is paid, the amount, the currency, the policy, and the service's own "
     "transaction number. The block's payment portal tracks each payment's status and "
     "history, and the confirmation comes back to the service. The service keeps the "
     "confirmation, not the payment details.")

rows("When the block is not yet there",
     [("The applicant pays into the authority's bank account.", ''),
      ("The finance officer records the evidence of the payment.", ''),
      ("The table names this as a crossing still to move to the Payments block.", '')],
     T,
     "VO: The block may not be ready on the first day. Then the service does what many "
     "services do today: the applicant pays into the authority's bank account, and the "
     "finance officer records the evidence of the payment against the application: who paid, "
     "how much, and when. That is honest, and it works. The architecture still names it as a "
     "crossing, one still to move to the Payments block, so that the move is planned and "
     "budgeted, and not forgotten.")

figure("5.6", 5, "F7_architecture.png", "in place of",
     "Progressa: the crossings of PHEQA's registration service",
     [("The application fee", "out to the Payments block; the confirmation back."),
      ("An institution's record", "out to MoEYS when MoEYS asks, through Linkup."),
      ("Who signs in", "in from PNIA, through its sign-in."),
      ("Of the same kind", "a graduate's credential, issued by PDCA into the learner's digital wallet.")],
     T,
     "VO: Here is the table for PHEQA's registration service. The application fee goes out "
     "to the Payments block, and the confirmation comes back. An institution's record goes "
     "out to MoEYS when MoEYS asks for it, through Linkup, which PDGA operates. Who signs in "
     "comes in from PNIA. And one more crossing of the same kind lies ahead: a graduate's "
     "credential, issued by PDCA into the learner's digital wallet. Each row names a body "
     "that must agree to it.")

rows("Each row agreed by the other side",
     [("The operator of the Payments block", "the fee."),
      ("PDGA", "the use of Linkup."),
      ("PNIA", "the sign-in."),
      ("MoEYS", "what it reads from the register.")],
     T,
     "VO: A crossing is a promise made together with someone else, so each row needs that "
     "body's agreement. The operator of the Payments block confirms the fee crossing. PDGA "
     "confirms the use of Linkup. PNIA confirms the sign-in. MoEYS confirms what it will "
     "read from the register. Then the head of PHEQA's ICT unit accepts the table. A row "
     "that nobody on the other side has seen is a promise made on their behalf, and the "
     "first test will show it.")

big_slide(prs,
          "A payment or a call across the data exchange is a crossing the architecture "
          "names, not a block the service rebuilds.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: Name every crossing, the body on the other side and the block it goes "
          "through. Never rebuild a block that a crossing can use.",
          practice=("Draft the crossing table of a service",
                    "a crossing table, one row for each crossing"))

sources([
    "GovStack Payments 3.0, sections 6.4 and 6.6",
    "GovStack Information Mediator 1.1.1",
    "GovStack Registration (default edition), section 5.1.4",
], T, link=True)


# ================================================================ 5.7
T = "5.7 · Proof on the running system: a task a person finishes"
section("5.7",
        "Proof on the running system: a task a person finishes",
        "The last check is a person finishing a real task on the running service, and the "
        "record that they did.",
        "VO: Every document is accepted, every check reports a pass, and the application is "
        "installed. One question is still open: can an officer finish a real task on it? "
        "Only a person on the running service can answer, and the answer must be recorded.")

rows("The third rule",
     [("A check of a document is not a check of the service.", ''),
      ("At least one check ends on the running system.", ''),
      ("A person finishes a real task, and the run is recorded.", '')],
     T,
     "VO: Most checks in the SDD method read documents. They compare a screen with its "
     "story, or the model with the interaction design. Those checks are needed, and they say "
     "nothing about whether the service works for the person at the counter. A pass on a "
     "document is not a working counter. So the method's third rule is that at least one "
     "check ends on the running system. A person goes through a real task on the installed "
     "application, and the run is recorded.")

rows("A journey, written before it is run",
     [("Where it starts", "a menu entry, and the role signed in."),
      ("The steps", "each screen, and what the person does there."),
      ("What counts as finished.", '')],
     T,
     "VO: That check is written as a journey. A journey starts where an officer really "
     "starts: at a menu entry, signed in with a real role. It goes through the real screens, "
     "step by step, as the goal's story says. And it states exactly what counts as finished. "
     "A program can drive a journey through the screens, but the journey is written from the "
     "story your officials agreed, not from the screens the supplier built. The same journey "
     "is a story the business side recognises and a test the builder can run.")

rows("Progressa: approving a change of name",
     [("Sign in to MoEYS's application with the minister's role.", ''),
      ("Open Names, the list and reviews; choose the advice on Harbourview University College.", ''),
      ("Read PHEQA's advice, and the college as PHEQA's register shows it.", ''),
      ("Approve the new name.", ''),
      ("Finished", "the approval is recorded and sent to PHEQA.")],
     T,
     "VO: In Progressa the journey is the approval of a change of an institution's name. A "
     "test officer of MoEYS signs in with the minister's role. In the category Names, the "
     "list and reviews, she opens the list of advices that await a decision, and chooses the "
     "one on Harbourview University College. She reads PHEQA's advice, and the college as "
     "PHEQA's register shows it. She approves the new name. The journey is finished when the "
     "approval is recorded and sent to PHEQA.",
     numbered=True)

rows("The record that it happened",
     [("Which journey.", ''),
      ("On which installation.", ''),
      ("At what time, and with what result at each step.", ''),
      ("Written and not run", "reported as not run.")],
     T,
     "VO: The record of the run is the evidence of acceptance. It names the journey, the "
     "installation it ran on and the time, with the result of each step. A journey that was "
     "written and never run is reported as not run, never as passed. A journey that stopped "
     "at step three is reported as stopped at step three. The minister signs on records of "
     "what happened, not on descriptions of what should. Keep each record with the "
     "acceptance file.")

rows("The change of name, on the running application",
     [("The officer's journey, from the list of advices to the recorded approval.", ''),
      ("The record of the run beside it.", ''),
      ("Pass", "the journey ends on the recorded approval; the record names the journey, the "
       "installation and the time.")],
     T,
     "VO: The demonstration shows this journey on MoEYS's running application, with the "
     "record of the run beside it. It passes when the journey ends on the recorded approval, "
     "and the record names the journey, the installation and the time. Until MoEYS's "
     "application is generated, this is a storyboard: written now, and recorded when the "
     "application runs.\n\nProduction cue: demonstration segment, a storyboard until it is "
     "recorded (in the bundle: section 4.12). The text-only stand-in holds the screen until "
     "the recording replaces this slide.",
     closing=STORYBOARD)

big_slide(prs,
          "The last check is a person finishing a real task on the running service, and the "
          "record that they did.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: Acceptance ends with a person finishing a real task on the running service. "
          "Keep the record of the run; a journey not run is not passed.",
          practice=("Write acceptance journeys for officers from the goals' stories",
                    "one acceptance journey for each goal, each with its start, its steps "
                    "and what counts as finished"))

sources([
    "This subtopic states the SDD method's own third rule, that at least one check ends on "
    "the running system, in plain words. It cites no external source.",
], T, link=False)


# ================================================================ Thank you
s = add_slide(prs, LAYOUT_THANKS)
notes(s, 'Closing slide for the combined deck. Individual videos end on their recap or sources slide.')

# Self-check: cover + agenda + every video's specification slides and its hook slide + thank-you.
EXPECTED = 69
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

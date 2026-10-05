#!/usr/bin/env python3
# Build the KP4 Module 6 video decks on the ITU template — v0.1.
# Content follows KP4_Module6_Script_Bundle_v0.1 (build_kp4_module6_v01.js): 7 videos,
# 6.1 – 6.7, Strategist-facing (persona S). Every slide follows the bundle's on-screen slide specification, slide by slide:
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
# the scripts-only companion, all under decks/module_6/ (the layout the KP4 decks of
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

MODULE = '6'
AUDIENCE = 'Director who owns a service · head of a ministry ICT unit · programme lead'
# (code, title, runtime, single message, slides in the bundle's on-screen slide specification)
VIDEOS = [('6.1',
  'What to require from a supplier',
  '~5',
  'The twelve documents are deliverables you name in the contract, each accepted by a named '
  'person.',
  6),
 ('6.2',
  'When something changes, correct the document that owns the fact',
  '~5',
  'A change goes up to its source and everything below is produced again.',
  6),
 ('6.3',
  'Read where the work stands from the work',
  '~5',
  'Progress is a report the programs produce from the documents, never a figure someone remembers.',
  6),
 ('6.4',
  'The AI assistant at every step, and the person who rules',
  '~5',
  'The assistant drafts each document; a person rules on every proposal and every gap keeps its '
  'name.',
  6),
 ('6.5',
  'The next service on the same foundation',
  '~5',
  'The second service, a digital credential, reuses what the first one built and proved.',
  7),
 ('6.6',
  'Carry the method to another sector',
  '~5',
  "The method holds no sector's content; another sector brings its own catalogue and its own "
  'records.',
  6),
 ('6.7',
  'Before you rely on it: what the method does not claim',
  '~5',
  'The method states its own limits, and a manager reads them before relying on it.',
  6)]

# The practice box is the video's only call to action and is never narrated (plan D5).
PRACTICE_NOTE = ('PRACTICE BOX (on-screen only — never read it, never paraphrase it, never point '
                 'at it). It replaces the narrated handoff: this video ends on its recap.')
STORYBOARD = 'Demonstration segment — a storyboard until it is recorded.'

# Opener (hook) slide copy per video — headline + two or three supporting lines, written from
# the same opener narration the hook's note carries. Not a preview of the next slide's list.
HOOKS = {'6.1': ('"A working system and its documentation." What will you receive?',
         ['Neither phrase says what you receive, or who on your side decides it is good enough.',
          'Both can be settled in the contract, before any work begins.']),
 '6.2': ('The quickest fix is the one that brings the problem back later.',
         ['A service is in use, and someone asks for a change.',
          'The quickest fix changes the screen, or the running system, where the problem was '
          'seen.']),
 '6.3': ('The supplier answers with a percentage. Nobody in the room can check it.',
         ['A minister asks how far the new service has come.',
          'Nobody can say what the rest of the work is.']),
 '6.4': ('A register of requirements, drafted by an AI assistant in an afternoon.',
         ['That speed is real.',
          'Who decides what the draft says, and what happens to everything the assistant did not '
          'know?']),
 '6.5': ('The next request is already on the table.',
         ['Institutions register once with the quality authority, and the ministry reads that '
          'register.',
          'Now graduates want proof of their degree that an employer can trust.']),
 '6.6': ('Another ministry asks to use the same method.',
         ['Nothing in the method itself is about schools.',
          "What changes is the sector's own content, and the sector must bring it."]),
 '6.7': ('What could go wrong with this method?',
         ['The method answers that question about itself, in writing.',
          'Read its answer before you rely on it.'])}


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
edit_cover(prs, **{'title_text': 'Run the method in your administration',
 'kicker': 'Designing Digital Government Services · Module 6',
 'blurb': 'Seven standalone videos for the director who owns a service: what to require from a '
          'supplier, where a change goes, how to read where the work stands, the AI assistant and '
          'the person who rules, the next service on the same foundation, another sector, and what '
          'the method does not claim.',
 'length': '~35 mins across 7 videos (6.1 – 6.7)',
 'panel_heading': 'THE METHOD, RUN BY A MANAGER',
 'panel_items': ['Twelve deliverables in the contract',
                 'Correct up, generate down',
                 'Progress read from the work',
                 'The assistant drafts; a person rules',
                 'The next service reuses',
                 'Another sector brings its own',
                 'Limits read first'],
 'panel_footer': '12 documents · each accepted by a named person',
 'note_text': 'Cover for the combined Module 6 deck. Each section that follows is one standalone '
              '~5 minute video, for the director who owns a service, the head of a ministry ICT '
              'unit or the programme lead. 6.7 is supplementary.',
 'audience': 'Director who owns a service · head of a ministry ICT unit · programme lead'})

# ---------------------------------------------------------------- AGENDA (edit slide 2)
edit_agenda(prs, **{'header': 'Module 6 — seven videos',
 'items': [('6.1  What to require from a supplier', '~5 min'),
           ('6.2  When something changes, correct the document that owns the fact', '~5 min'),
           ('6.3  Read where the work stands from the work', '~5 min'),
           ('6.4  The AI assistant at every step, and the person who rules', '~5 min'),
           ('6.5  The next service on the same foundation', '~5 min'),
           ('6.6  Carry the method to another sector', '~5 min'),
           ('6.7  Before you rely on it: what the method does not claim (supplementary)',
            '~5 min')],
 'message_paras': ['Name the twelve documents in the contract, send every change to the document '
                   'that owns it, and read progress from the work.',
                   'Let the assistant draft and a person rule, reuse what the first service built, '
                   "and read the method's own limits before relying on it."],
 'note_text': 'Navigation slide for the combined deck; the videos ship standalone. 6.1 to 6.4 run '
              'the method on one service; 6.5 and 6.6 carry it to the next service and the next '
              'sector; 6.7, supplementary, states its limits.'})

delete_template_slides(prs, keep=2)

# ================================================================ 6.1
T = "6.1 · What to require from a supplier"
section("6.1",
        "What to require from a supplier",
        "The twelve documents are deliverables you name in the contract, each accepted by a "
        "named person.",
        "VO: A supplier's offer often promises a working system and its documentation. "
        "Neither phrase says what you will receive, or who on your side decides that it is "
        "good enough. Both can be settled in the contract, before any work "
        "begins.\n\nRetrieval prompt — ask before playing on: how many deliverables should the "
        "contract name? Answer on the next slide.")

figure("6.1", 2, "F3_twelve-documents.png", "in place of",
     "Twelve deliverables, not one system",
     [("1", "Your own documents, handed over and kept as received."),
      ("2 to 8", "What was asked, the records, the goals, the architecture, the shared lists, each "
       "goal as a story, its screens."),
      ("9", "The walk-through your officials click."),
      ("10 and 11", "The decisions for the whole application, and the one file a program reads."),
      ("12", "The working application, generated from that file.")],
     T,
     "VO: The SDD method, short for specification-driven development, writes a service down "
     "in twelve documents, in a fixed order. The first is your own: the law, the mandate and "
     "the requests, handed over and never edited. Seven more are written before anything is "
     "built: what was asked, the records the service keeps, the goals, the architecture, the "
     "shared lists and settings, each goal written as a story, and its screens. Then come "
     "the walk-through your officials click, the decisions settled once for the whole "
     "application, and the one file a program reads. The twelfth is the working application "
     "itself. Each of the twelve can be named in the contract as a deliverable.")

rows("Three things for each deliverable",
     [("The form", "the blank instrument it is written on."),
      ("The person", "who in your organisation accepts it."),
      ("The check", "what it must pass before it is accepted.")],
     T,
     "VO: For each deliverable, the contract names three things. The first is the form, a "
     "blank instrument the document is written on, so that what arrives can be compared with "
     "what was ordered. The second is the person in your organisation who accepts it, named "
     "by role: the director who owns the service, or the head of the ICT unit for the "
     "technical documents. The supplier never accepts its own work. The third is the check "
     "the document must pass before it is accepted: its own checklist, a comparison with an "
     "earlier document, or a program. The next document is written only from what was "
     "accepted.")

rows("Two clauses that protect you",
     [("The application is generated from the accepted model, and nothing generated is "
       "edited by hand.", ''),
      ("Every open question is delivered with an owner and a date.", '')],
     T,
     "VO: Two clauses protect you most. The first says that the working application is "
     "generated from the accepted model, the one file a program reads, and that nothing "
     "generated is edited by hand. A supplier who patches the running system leaves your "
     "documents saying one thing while the system does another. The second clause says that "
     "every open question is delivered with an owner and a date. A question with a name on "
     "it is part of what you receive. A question the supplier answered with a guess is a "
     "fault in the delivery.")

rows("MoEYS's deliverables annex (illustrative)",
     [("The register of what was asked", "accepted by the Director of Higher Education — its own checklist."),
      ("The screens of each goal", "accepted at a review of three people — checked against the goal's story."),
      ("The file a program reads", "approved by the head of the ICT unit — a program refuses it if it contradicts an "
       "accepted decision."),
      ("The working application", "accepted when an officer has finished a real task on it.")],
     T,
     "VO: Here is how Progressa's ministry of education, MoEYS, writes it, in an example "
     "built for this course. Its annex lists all twelve documents. The Director of Higher "
     "Education accepts the register of what was asked. The screens of each goal are "
     "accepted at a review of three people: their owner, the builder and the officer who "
     "will use them. The head of the ICT unit approves the file a program reads, once a "
     "program has checked it. And the working application is accepted only when an officer "
     "has finished a real task on it.")

big_slide(prs,
          "The twelve documents are deliverables you name in the contract, each accepted by "
          "a named person.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: Name the twelve documents as deliverables. For each one, name its form, the "
          "person on your side who accepts it, and the check it must pass.",
          practice=("Draft the deliverables annex of a terms of reference",
                    "a deliverables annex with one row for each of the twelve documents"))


# ================================================================ 6.2
T = "6.2 · When something changes, correct the document that owns the fact"
section("6.2",
        "When something changes, correct the document that owns the fact",
        "A change goes up to its source and everything below is produced again.",
        "VO: A service is in use, and someone asks for a change. The quickest fix is to "
        "change the screen, or the running system, where the problem was seen. That fix is "
        "the one that brings the problem back later.")

figure("6.2", 2, "F13_correct-up-generate-down.png", "beside",
     "Up to the owner, then down again",
     [("Find the document that owns the fact.", ''),
      ("Correct the fact there, and nowhere else.", ''),
      ("Produce everything below it again.", '')],
     T,
     "VO: The SDD method has one rule for every change. The change goes up to the document "
     "that owns the fact. It is corrected there, and nowhere else. Then everything below "
     "that document is produced again from it. The reason is simple. If you correct a fact "
     "where you happened to notice it, the document that owns the fact still says the old "
     "thing. The next time anything is produced from that document, the old fault returns. "
     "One statement of each fact, with every copy made from it, is the only arrangement that "
     "stays true over the years.")

rows("When the behaviour itself changes",
     [("First the story of the goal, agreed.", ''),
      ("Then the screens.", ''),
      ("Then the walk-through.", ''),
      ("Only then what was built.", '')],
     T,
     "VO: When the behaviour of the service itself must change, the order matters even more. "
     "The story of the goal changes first, and is agreed. Then the screens are brought into "
     "line. Then the walk-through is produced again. Only then does what was built change. "
     "People notice a screen first, so they ask for the screen to change first. Hold the "
     "order. A screen changed ahead of its story is a decision that nobody agreed, and the "
     "builder has no way to know it. Ask which story the change belongs to, before anything "
     "else is touched.")

rows("An institution asks to change its name (illustrative)",
     [("Harbourview University College asks PHEQA to change its name.", ''),
      ("Followed through both bodies, the new name could be written before the minister "
       "approves.", ''),
      ("The fact is owned by PHEQA's register of business rules.", ''),
      ("Corrected there", "no new name without the minister's approval.")],
     T,
     "VO: Here is an example built for Progressa. Harbourview University College asks the "
     "quality authority, PHEQA, to change its name. The request is followed through both "
     "bodies, PHEQA and the ministry of education, MoEYS. The head of the registration desk "
     "sees that an officer could write the new name into the register before the minister "
     "had approved it. The screen does not own that fact. PHEQA's register of business rules "
     "does. The rule is corrected there, to say that a new name is written only on the "
     "minister's approval, received from MoEYS. PHEQA's Registrar, who owns the rules, "
     "confirms the correction.")

rows("What the change makes stale",
     [("Corrected", "the register of business rules."),
      ("Stale", "the shared groundwork, two goals, their screens and walk-throughs, the interaction "
       "design, the model, the application."),
      ("Not stale", "MoEYS's documents."),
      ("Pass", "after generation, nothing is stale.")],
     T,
     "VO: Then a program lists everything made from the old version of the rule: the shared "
     "states of a request, two of PHEQA's goals, their screens and walk-throughs, the "
     "decisions for the whole application, the file a program reads, and the application "
     "itself. Nothing on the list is reviewed, agreed or built from until it has been "
     "produced again. MoEYS's documents are not on the list, because none of them was made "
     "from PHEQA's rule. The recording of this segment will show the list, the application "
     "generated again, and the change on the running service. It passes when the list names "
     "everything the change reaches, and nothing is stale afterwards.\n\nProduction cue: "
     "demonstration segment, a storyboard until it is recorded (in the bundle: the "
     "storyboard of 6.2, after its worked example). The text-only stand-in holds the screen "
     "until the recording replaces this slide.",
     closing=STORYBOARD)

big_slide(prs,
          "A change goes up to its source and everything below is produced again.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: A change goes up to the document that owns the fact. Correct it there, then "
          "produce everything below it again.",
          practice=("Find the document that owns the fact a change touches",
                    "the owning document with the reason, the list of documents to produce "
                    "again, and any question with its owner"))


# ================================================================ 6.3
T = "6.3 · Read where the work stands from the work"
section("6.3",
        "Read where the work stands from the work",
        "Progress is a report the programs produce from the documents, never a figure "
        "someone remembers.",
        "VO: A minister asks how far the new service has come. The supplier answers with a "
        "percentage. Nobody in the room can check it, and nobody can say what the rest of "
        "the work is.")

rows("Read from the work, never remembered",
     [("A figure someone remembers cannot be checked.", ''),
      ("A report a program produces from the documents can be produced again.", ''),
      ("Ask for the report, with its date.", '')],
     T,
     "VO: The SDD method has a plain rule for this: where the work stands is read from the "
     "work, never remembered. Every document of the method is written in a fixed form, and "
     "each one records what it was made from. So programs can read the documents and report "
     "what is there and what is still missing. A percentage given at a progress meeting "
     "cannot be checked by anyone. A report produced from the documents can be produced "
     "again, by anyone, and it gives the same answer. Ask for that report, with its date, "
     "instead of a figure.")

rows("The trace report",
     [("Every entry of what was asked.", ''),
      ("Followed to its goal, its screens, the part generated for it and its check.", ''),
      ("Every entry not yet traced to the end, listed by name.", '')],
     T,
     "VO: The most useful report for a manager is the trace report. A program produces it "
     "from the one file a program reads. It takes every entry of the register of what was "
     "asked, and follows it to the goal that serves it, to the screens of that goal, to the "
     "part of the application generated for it, and to the acceptance check written for it. "
     "Then it lists, by name, every entry that is not yet traced to the end, and says where "
     "each one stops. That list is your real progress: what is not yet done, said exactly.")

rows("MoEYS's trace report (illustrative)",
     [("Deciding a licence", "goal, screens, generated part, acceptance check."),
      ("Approving a change of name", "goal, screens, generated part, acceptance check."),
      ("Publishing the list in the Gazette", "goal, screens; nothing generated yet."),
      ("Reviewing a decision of PHEQA", "goal, screens, generated part; no acceptance check yet.")],
     T,
     "VO: Here is an example built for Progressa. The head of the ICT unit at the ministry "
     "of education, MoEYS, reads the trace report of the ministry's application. Deciding a "
     "licence and approving a change of name are traced to the end. Publishing the list of "
     "institutions in the Gazette has its goal and screens, but nothing is generated for it "
     "yet. The review of a decision at a person's request is generated, but no acceptance "
     "check has been written for it. From that report, the head of ICT writes the minister's "
     "status on one page, in plain words, with the date of the report beside every figure.")

rows("Three rules that keep the report honest",
     [("A gap stays open and counted until it is closed.", ''),
      ("A check is never changed to make its number look better.", ''),
      ("An empty column is information.", '')],
     T,
     "VO: Three of the method's rules keep such a report honest. A gap stays open and "
     "counted. It is never signed off just to make a report look complete. A check is never "
     "changed to make its number look better. And an empty column is information. It is "
     "often the most useful thing on the page. These rules matter most when progress is "
     "slow, because that is when a figure is most tempting to round up. When a supplier's "
     "report has no empty cell anywhere, ask what was left out of it.")

big_slide(prs,
          "Progress is a report the programs produce from the documents, never a figure "
          "someone remembers.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: Ask for the report the programs produce from the documents, with its date. "
          "Read the list of what is not yet traced, and take your figures from it.",
          practice=("Write the minister's one-page status from the trace report",
                    "a one-page status of no more than 300 words"))


# ================================================================ 6.4
T = "6.4 · The AI assistant at every step, and the person who rules"
section("6.4",
        "The AI assistant at every step, and the person who rules",
        "The assistant drafts each document; a person rules on every proposal and every gap "
        "keeps its name.",
        "VO: An AI assistant can draft a register of requirements in an afternoon. That "
        "speed is real. The question for a manager is who decides what the draft says, and "
        "what happens to everything the assistant did not know.")

figure("6.4", 2, "F4_who-writes-checks-accepts.png", "in place of",
     "The assistant drafts; a person rules",
     [("The assistant proposes each entry, step or line.", ''),
      ("A named person accepts, amends or sets aside each proposal.", ''),
      ("Only what the person accepted stands.", '')],
     T,
     "VO: The SDD method gives an assistant real work. It extracts the register of what was "
     "asked from your own documents. It drafts each goal as a story. It writes the one file "
     "a program reads. For each document a person writes, there is an assisting tool that "
     "walks that person through the document's standard, part by part. But no document is "
     "finished by an assistant alone. A named person reviews every proposal, and accepts it, "
     "amends it or sets it aside. Only what that person accepted stands in the document, "
     "with the person's name and the date.")

rows("Every gap keeps its name",
     [("The assistant does not fill a gap with a plausible answer.", ''),
      ("It records a question, with the person who must answer it.", ''),
      ("It never invents a figure to keep the work moving.", '')],
     T,
     "VO: Inventing something plausible is what an assistant does best. That is why the "
     "method's most important rule binds it here. When your documents do not settle "
     "something, the assistant must not fill the gap. It records a question, with the name "
     "of the person who must answer it. It never invents a figure to keep the work moving, "
     "and it never quietly answers a decision that is still open. A draft that comes back "
     "with named questions is a good draft. A draft with no questions at all deserves a "
     "second, careful reading. Ask for the list of open questions with every draft.")

rows("MoEYS's rules of use (illustrative)",
     [("The assistant may draft the register, the stories and the model.", ''),
      ("A named officer rules on every draft.", ''),
      ("Every open question carries an owner.", ''),
      ("No figure without its source.", ''),
      ("The ministry's data stay within the tools the ministry allows.", '')],
     T,
     "VO: Here is an example built for Progressa: the ministry of education's rules of use "
     "for an AI assistant, on one page. The assistant may draft the register, the stories "
     "and the model. A named officer rules on every draft, and the officer's name goes into "
     "the document. Every open question carries an owner. No figure enters a document "
     "without its source. And the ministry's data stay within the tools the ministry allows. "
     "The head of the ICT unit adopts the page, after it has been checked against the "
     "ministry's duties on personal data. It is short enough to keep beside every contract.")

rows("What you check in an assisted document",
     [("Whose name stands against each accepted part?", ''),
      ("Which questions are open, and who owns each?", ''),
      ("Is any figure without its source?", '')],
     T,
     "VO: When an assisted document reaches you for acceptance, three questions are enough. "
     "Whose name stands against each part that was accepted? Which questions are still open, "
     "and who owns each one? And is there any figure without its source? If a part has no "
     "name against it, nobody in your organisation has ruled on it, and it is still only the "
     "assistant's proposal. The same holds for the one file a program reads: the person who "
     "approves it reads every assumption the assistant made, and sends each one back to the "
     "document it rests on.")

big_slide(prs,
          "The assistant drafts each document; a person rules on every proposal and every "
          "gap keeps its name.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: Let the assistant draft each document. A named person rules on every "
          "proposal, and every gap stays a question with an owner.",
          practice=("Draft the rules of use for an AI assistant in your specification work",
                    "one page of rules of use, each rule with the paragraph of the policy it "
                    "rests on"))


# ================================================================ 6.5
T = "6.5 · The next service on the same foundation"
section("6.5",
        "The next service on the same foundation",
        "The second service, a digital credential, reuses what the first one built and proved.",
        "VO: In Progressa, private institutions now register with the quality authority "
        "once, and the ministry reads that register instead of asking again. The next "
        "request is already on the table: graduates want proof of their degree that an "
        "employer can trust.")

figure("6.5", 2, "F5_sector-catalogue.png", "in place of",
     "Planning enables re-use",
     [("A block paid for once can carry many services.", ''),
      ("Inside one project, building your own looks faster.", ''),
      ("Only someone who plans for the whole sector sees the sum.", '')],
     T,
     "VO: Inside one project, building your own list of institutions or your own sign-in "
     "always looks faster. That is what a project is paid to do. Procurement rules can make "
     "each contract cheaper, but only whole-of-government planning makes re-use possible. "
     "The sum that makes re-use worth it, one block paid for and many services carried, "
     "exists only at the level of the sector. UNDP describes digital public infrastructure "
     "as a set of shared digital systems. PAERA, the GovStack reference architecture, says "
     "that digital public infrastructure is not neutral and shapes what can be built on top "
     "of it. The first service chose the foundation; the second one builds on it.")

rows("The credential, one row of the catalogue",
     [("Issue a learner's credential", "owed by PDCA."),
      ("Reuses", "PNIA's sign-in."),
      ("Reuses", "PHEQA's register of institutions, read across Linkup."),
      ("Adds", "the credential, kept in the graduate's wallet.")],
     T,
     "VO: The second service is a digital credential for a graduate. It is already a row of "
     "Progressa's catalogue of services, owed by the digital credentials authority, PDCA, "
     "and the row shows what it rests on. The graduate signs in through the identity "
     "authority's sign-in, the same one the first service uses. PDCA reads the quality "
     "authority's register of institutions across Linkup, the data exchange, under the rules "
     "the register's keeper sets. One rule matters most: a credential is issued only for an "
     "institution whose licence is granted. PDCA keeps no copy of the register. None of "
     "these is built again.")

rows("Three of the roles in the W3C standard",
     [("The issuer gives the credential to the holder.", ''),
      ("The holder keeps it, for example in a digital wallet.", ''),
      ("The holder presents it, and the verifier checks it.", '')],
     T,
     "VO: The one new block is the credential itself. Of the roles the W3C standard for "
     "verifiable credentials names, three matter here. The issuer, here PDCA, gives the "
     "credential to the holder, the graduate. The holder stores it in what the standard "
     "calls a credential repository: for a person, usually a digital wallet. When an "
     "employer needs proof, the graduate presents the credential, in what the standard calls "
     "a verifiable presentation, and the employer, as the verifier, checks it. UNDP's "
     "compendium on digital public infrastructure counts verifiable credentials among the "
     "trust services that come with digital identity.")

rows("The same twelve documents, written once more",
     [("PDCA's own register of what was asked, records, goals and screens.", ''),
      ("Most crossings already exist.", ''),
      ("Each reuse confirmed with the body that keeps the block.", '')],
     T,
     "VO: The method does not change for the second service. PDCA's team writes the same "
     "twelve documents, in the same order, each accepted by a named person. What changes is "
     "the architecture. Most of its crossings already exist, and each one is confirmed with "
     "the body that keeps the block: the identity authority for the sign-in, the quality "
     "authority for the register. The second service pays for what it adds, the credential "
     "and the wallet, and not for the foundation the first one built. Each confirmation is "
     "written down before the plan is approved. For the minister, that is the argument in "
     "one line: the foundation is already paid for.")

big_slide(prs,
          "The second service, a digital credential, reuses what the first one built and proved.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: The second service reuses the sign-in, the register and the exchange that the "
          "first one built and proved. It adds only the credential.",
          practice=("List what a new service can reuse, and what it must add",
                    "a reuse list of blocks and records with their keepers"))

sources([
    "PAERA v1.0, section 2.6",
    "W3C, Verifiable Credentials Data Model v2.0, sections 1.2 and 4.13",
    "GovStack Identity specification, version 2.0",
    "GovStack Digital Registries specification, version 3.0-alpha",
    "UNDP, Accelerating the SDGs through Digital Public Infrastructure: A Compendium, 2023, "
    "pages 3 and 4",
], T, link=True)


# ================================================================ 6.6
T = "6.6 · Carry the method to another sector"
section("6.6",
        "Carry the method to another sector",
        "The method holds no sector's content; another sector brings its own catalogue and "
        "its own records.",
        "VO: Another ministry, health or agriculture, sees the education team's results and "
        "asks to use the same method. Nothing in the method itself is about schools. What "
        "changes is the sector's own content, and the sector must bring it.")

rows("What stays the same",
     [("The twelve documents, in the same order.", ''),
      ("The people who accept them, by role.", ''),
      ("The checks at each step.", ''),
      ("The rules that always hold.", '')],
     T,
     "VO: Most of the method stays exactly as it is. The twelve documents stay, in the same "
     "order. The people who accept them stay, by role: the owner of the service, the head of "
     "the ICT unit, and the official who will live with the result. The checks stay, and so "
     "do the rules that always hold, such as no hand edits and an open question with a name "
     "on it. So do the blank instruments. The twelve documents give the business side and "
     "the builders one shared language, so a decision means the same thing in both rooms.")

rows("What the sector brings",
     [("Its own catalogue of services.", ''),
      ("Its register of what was asked, from its own law.", ''),
      ("Its records, and who keeps each one.", ''),
      ("Its own reference pack.", '')],
     T,
     "VO: The new sector brings its own content. It writes its own catalogue of services, "
     "owed by its own bodies. It writes the register of what was asked from its own law, not "
     "from education's. It names its own records, and who keeps each one. And it brings a "
     "reference pack: its usual procedures, reusable pieces of design, a checklist of what "
     "is realistic in that sector, and one finished example to compare against. A program "
     "checks that the pack is complete, and that the method's own tools hold nothing of any "
     "one sector. The pack is the sector's own, kept by the sector.")

rows("Carry the method, not the results",
     [("Nothing found in education is a fact about another sector.", ''),
      ("Every example is rebuilt on the sector's own records and law.", ''),
      ("The sector's officials correct every draft.", '')],
     T,
     "VO: Carry the method, not the results. Nothing found in education is a fact about "
     "health or agriculture. Health has its own registers, its own law and its own "
     "officials. A sector's examples are rebuilt on its own records and its own law. An "
     "assistant can help adapt the examples, but every place where the sector's own law must "
     "be read is marked, and the sector's officials correct the drafts. Its officials know "
     "its law; the method only shows where to look. This course works through one sector "
     "only, education, because that is its demonstration. Another sector is described here "
     "as a list of what it brings, not as a worked case.")

rows("Names before the first document",
     [("Who owns the service in that ministry.", ''),
      ("Who writes the sector's catalogue.", ''),
      ("Which officials correct the adapted examples.", '')],
     T,
     "VO: Before the new sector writes its first document, it names the people the method "
     "relies on. Who owns the service in that ministry, as the Director of Higher Education "
     "owns it in the ministry of education? Who writes the sector's catalogue of services, "
     "once, for all the bodies of the sector? And which officials will read the adapted "
     "examples against their own law and correct them? With those names written down, the "
     "twelve documents can begin, in the same order, accepted by the same kinds of person as "
     "before.")

big_slide(prs,
          "The method holds no sector's content; another sector brings its own catalogue and "
          "its own records.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: The method holds no sector's content. Another sector brings its own "
          "catalogue, its own records and its own reference pack, and keeps the rest.",
          practice=("Adapt the method's examples to a service of another sector",
                    "the twelve examples adapted to the new service, with every place to be "
                    "read in the sector's law marked"))


# ================================================================ 6.7
T = "6.7 · Before you rely on it: what the method does not claim"
section("6.7",
        "Before you rely on it: what the method does not claim",
        "The method states its own limits, and a manager reads them before relying on it.",
        "VO: Before a ministry adopts any method for its next service, someone will ask what "
        "could go wrong with it. This method answers that question about itself, in writing. "
        "Read its answer before you rely on it.")

rows("What the method does not claim",
     [("That its standards have been shown to work well together.", ''),
      ("That every standard has been tested by use.", ''),
      ("That a program checks every step.", ''),
      ("That it is cheap.", '')],
     T,
     "VO: The SDD method states its own limits: seven things it does not claim. Four matter "
     "most to a manager. It does not claim that its standards have been shown to work well "
     "together: no analyst has yet been handed all of them and asked to produce a "
     "description from them. It does not claim that every one of its standards has been "
     "tested by use on a real project. It does not claim that a program checks every step: "
     "several of the most important handovers rest on a person. And it does not claim to be "
     "cheap. Twelve documents mean many places where a correction can be made, and only the "
     "discipline of correcting in the right place keeps that under control.")

rows("What it says is still missing",
     [("A standard of its own for accessibility.", ''),
      ("A standard for services in more than one language.", ''),
      ("Each missing piece has an owner.", '')],
     T,
     "VO: The method also lists what it still lacks, each item with an owner. Two of them "
     "matter to a ministry. There is no standard of its own for accessibility, and none for "
     "delivering a service in more than one language. Both have a partial home in the rules "
     "for screens, but a service could still leave them out without anyone noticing. If your "
     "service must serve people with disabilities, or people in several languages, write "
     "that into the register of what was asked, so that every screen has to answer it. A "
     "need that is not in the register will not be built.")

rows("The risk paragraph (illustrative)",
     [("A briefing note to the minister on adopting the method.", ''),
      ("The limits quoted as the method states them.", ''),
      ("All seven quoted; none added.", ''),
      ("Which bear on the service, and what the ministry will do.", '')],
     T,
     "VO: Here is an example built for Progressa. The head of the ICT unit at the ministry "
     "of education writes a briefing note for the minister on adopting the method for the "
     "ministry's next service. Its risk paragraph quotes all seven limits as the method "
     "states them, adds none of its own, and leaves none out. It then says which of them "
     "bear on the ministry's service, and what the ministry will do: accessibility and "
     "languages, for example, go into the register of what was asked. The head of ICT signs "
     "the note. The minister then decides knowing the risks, not after discovering them.")

rows("Why stated limits help you",
     [("A method that hides its limits teaches the wrong lesson.", ''),
      ("A stated limit can be planned around.", ''),
      ("An unstated limit is found after the money is spent.", '')],
     T,
     "VO: A list of limits can look like a weakness in a briefing. It is the opposite. The "
     "method itself says that a method which hides its own limits teaches the wrong lesson "
     "to everybody who reads it. A limit that is written down can be planned around: a check "
     "that rests on a person can be given a named reviewer, and a standard not yet tested by "
     "use can be watched more closely. A limit that nobody wrote down is found after the "
     "money is spent. That is why the list belongs in the briefing.")

big_slide(prs,
          "The method states its own limits, and a manager reads them before relying on it.",
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: The method states its own limits. Read them, and put them in your briefing, "
          "before you rely on it.",
          practice=("Write the risk paragraph of a briefing note on adopting the method",
                    "a risk paragraph of no more than 200 words"))


# ================================================================ Thank you
s = add_slide(prs, LAYOUT_THANKS)
notes(s, 'Closing slide for the combined deck. Individual videos end on their recap or sources slide.')

# Self-check: cover + agenda + every video's specification slides and its hook slide + thank-you.
EXPECTED = 53
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

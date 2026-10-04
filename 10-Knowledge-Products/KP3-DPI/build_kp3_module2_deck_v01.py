#!/usr/bin/env python3
# Build the KP3 Module 2 video deck on the ITU template — v0.1.
# Content follows KP3_Module2_Script_Bundle_v0.2 (build_kp3_module2_v02.js): six videos,
# 2.1 – 2.6, Architect-facing — the Registration block, the first build module. Every VO
# paragraph in the notes is a verbatim scriptBeats[].text from the .js (vo_diff.py proves it);
# the recap slide of every video carries the single message word for word and the un-narrated
# practice box (plan D5) — task = the AI tip's title, artefact = the subtopic's `practice` field.
# The demonstration walkthroughs of 2.3 to 2.6 rest on specimens 'not yet run'; their fifth
# slide is the text stand-in the bundle specifies, with the footer marking the storyboard.
# Content only — every generic helper, branding constant and layout index comes from
# $KP_KIT/skills/kp-deck-builder/scripts/deck_lib.py (which also ships the
# template). Conventions and design rules: that skill's SKILL.md. The content-shaped helpers
# below (table_slide, rows_with_foot, recap, three_panels, chain) compose deck_lib primitives.
# Generated .pptx is NEVER hand-edited — fix here, re-render, re-run the split
# (kp-deck-builder/scripts/split_module_deck.py + the split spec next to the decks).
# Override paths with TEMPLATE= and OUT_PATH= env vars.
import os
import sys

KP_KIT = os.environ.get('KP_KIT') or os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'ITU-Giga-KP-Plugin')
if not os.path.isdir(os.path.join(KP_KIT, 'skills', 'kp-deck-builder', 'scripts')):
    sys.exit("Set KP_KIT to the itu-giga-kp folder of your claude-marketplace clone (plugins/itu-giga-kp).")
sys.path.insert(0, os.path.join(KP_KIT, 'skills', 'kp-deck-builder', 'scripts'))
from deck_lib import (
    TITLE_CARD_NOTE, hook_slide, practice_box,
    GREY, INK, ITU_BLUE, ITU_BLUE_DARK, LIGHT, PANEL_GREY, WHITE,
    LAYOUT_BLUE, LAYOUT_THANKS, LAYOUT_WHITE,
    add_slide, big_slide, block_slide, box, delete_template_slides, edit_agenda,
    edit_cover, footer, hline, notes, open_template, rows_block, rows_slide, section_slide,
    set_text, sources_slide, title, two_panel)
from deck_diagrams import arrow, node

prs = open_template(os.environ.get('TEMPLATE'))

AUDIENCE = ('The ministry\'s technical lead or solution architect who sets up the registration '
            'service and judges the products offered for it')

# The practice box is the video's only call to action and is never narrated (plan D5).
PRACTICE_NOTE = ('PRACTICE BOX (on-screen only — never read it, never paraphrase it, never point '
                 'at it). It replaces the narrated handoff: this video ends on the recap and the '
                 'Sources slide.')
STORYBOARD_FOOT = 'Walkthrough: what a good run shows.'
STORYBOARD_NOTE = ('On screen: the text stand-in for the demonstration segment, with the footer '
                   'marking the storyboard, until the configurations it needs have passed their '
                   'checks and the segment is recorded. The narration never says that anything '
                   'has run.')


def block(prs, *a, **k):
    k.setdefault('punch_y', 4.35)
    return block_slide(prs, *a, **k)


def panels(prs, *a, **k):
    k.setdefault('height', 3.2)
    return two_panel(prs, *a, **k)


# Opener (hook) slide copy per video — headline + two to four supporting lines, written from
# the same opener narration the hook's note carries. Not a preview of the next slide's list.
HOOKS = {'2.1': ('Every ministry registers something.',
                 ['Schools register learners. A business registry registers companies. A '
                  'population registry records births.',
                  'Each office asks for information, checks it, decides, records it and gives '
                  'back proof. The Registration block is shared software that does exactly '
                  'that.']),
         '2.2': ('A vendor tells you the product is GovStack compliant.',
                 ['That sentence alone tells you very little.',
                  'What you need is the product shown against the published specification, one '
                  'requirement at a time, with evidence your own team can check.']),
         '2.3': ('The registration of a learner is written today in a law, a circular and a '
                 'paper form.',
                 ['Before any product can carry it, someone has to restate it in the block\'s '
                  'own terms.',
                  'An AI assistant can draft that restatement in an afternoon.']),
         '2.4': ('A registrar\'s time is the scarcest thing in a registration office.',
                 ['Every application that arrives with a wrong date, a wrong name or a missing '
                  'document costs that time twice.',
                  'Three kinds of check catch those faults before the file reaches the desk.']),
         '2.5': ('Software can check an application. It cannot take responsibility for it.',
                 ['In registration, a named officer decides, and the register is written only '
                  'after that decision.',
                  'Getting this order right is what makes the record worth trusting.']),
         '2.6': ('The second ministry that needs a registration service should not start from a '
                 'blank screen.',
                 ['If the first ministry kept its service as a description, the second can take '
                  'it, change what differs and test it.',
                  'That is how a shared block pays back.'])}


def section(code, name, message, note):
    # No runtime on the title card: the narration is generated per take and its length moves
    # with every re-roll.
    s = section_slide(prs, 'MODULE 2 · VIDEO %s' % code, code, name, message,
                      'standalone video · voice-over on text slides', TITLE_CARD_NOTE)
    head, lines = HOOKS[code]
    hook_slide(prs, head, lines, '%s · %s' % (code, name), note)
    return s


def closing_line(s, text, y, size=15.5):
    tb = box(s, 0.72, y, 11.9, 0.6)
    set_text(tb.text_frame, [[(text, size, True, ITU_BLUE_DARK, False)]])


def foot_line(s, text, y=6.35):
    """The small grey line under a worked example or a storyboard stand-in."""
    tb = box(s, 0.72, y, 11.9, 0.4)
    set_text(tb.text_frame, [[(text, 12, False, GREY, True)]])


def table_slide(prs, head, cols, widths, rows, tag, note, foot=None, size=13, top=1.55,
                bottom=6.25):
    """A plain text table — the shape the bundle's 'N-row text table' cues ask for. Header row
    in the accent colour, thin separators, no fills: text only, per the ITU guide."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head)
    xs = [0.72]
    for w in widths[:-1]:
        xs.append(xs[-1] + w)
    hh = 0.42
    for x, w, c in zip(xs, widths, cols):
        tb = box(s, x, top, w - 0.12, hh)
        set_text(tb.text_frame, [[(c, size, True, ITU_BLUE_DARK, False)]])
    hline(s, 0.72, top + hh, 11.9, color=ITU_BLUE_DARK, weight_pt=1.25)
    rh = (bottom - top - hh - 0.08) / len(rows)
    for i, row in enumerate(rows):
        y = top + hh + 0.08 + i * rh
        for j, (x, w, cell) in enumerate(zip(xs, widths, row)):
            tb = box(s, x, y + 0.04, w - 0.12, rh - 0.08)
            set_text(tb.text_frame, [[(cell, size, j == 0, INK, False)]])
        if i < len(rows) - 1:
            hline(s, 0.72, y + rh - 0.02, 11.9)
    if foot:
        foot_line(s, foot, bottom + 0.1)
    footer(s, tag)
    notes(s, note)
    return s


def rows_with_foot(prs, head, rows, foot, tag, note, numbered=False, bottom=5.9):
    """rows_block whose landing line is the bundle's grey footer, not a bold closing line —
    the stand-in slides of 2.3 to 2.6."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head)
    rows_slide(s, rows, top=1.6, bottom=bottom, numbered=numbered)
    foot_line(s, foot, bottom + 0.2)
    footer(s, tag)
    notes(s, note)
    return s


def recap(text, tag, note, practice):
    """big_slide, with the type stepped down for the longer single messages so the line stays
    clear of the practice box (the bundle carries each message word for word)."""
    if len(text) <= 150:
        return big_slide(prs, text, tag, note, practice=practice)
    s = add_slide(prs, LAYOUT_BLUE)
    tb = box(s, 1.1, 1.7, 6, 0.4)
    set_text(tb.text_frame, [[('IN ONE SENTENCE', 12, True, ITU_BLUE_DARK, False)]])
    tb = box(s, 1.1, 2.15, 11.1, 2.8)
    set_text(tb.text_frame, [[(text, 25 if len(text) <= 200 else 22, True, INK, False)]])
    practice_box(s, *practice, y=5.15)
    footer(s, tag, itu=True)
    notes(s, note)
    return s


def three_panels(prs, head, items, closing, tag, note):
    """The module's centrepiece: the block's three capabilities, side by side."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head)
    w, gap, y, h = 3.7, 0.4, 1.7, 2.7
    for i, (name, lines) in enumerate(items):
        node(s, 0.72 + i * (w + gap), y, w, h, name, lines, fill=LIGHT, head_size=16, size=15)
    if closing:
        closing_line(s, closing, y + h + 0.2)
    footer(s, tag)
    notes(s, note)
    return s


def chain(prs, head, steps, closing, tag, note):
    """A plain-text chain of steps joined by arrows — 2.5's flow (figure F7 in the guide)."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head)
    n = len(steps)
    gap = 0.45
    w = (11.9 - gap * (n - 1)) / n
    y, h = 2.0, 2.9
    for i in range(n - 1):   # connectors first, in the gaps between the nodes
        x = 0.72 + (i + 1) * w + i * gap
        arrow(s, x + 0.04, y + h / 2, x + gap - 0.04, y + h / 2)
    for i, (name, lines, dark) in enumerate(steps):
        node(s, 0.72 + i * (w + gap), y, w, h, name, lines,
             fill=ITU_BLUE_DARK if dark else LIGHT, ink=WHITE if dark else INK,
             head_ink=WHITE if dark else ITU_BLUE_DARK, head_size=14, size=14)
    closing_line(s, closing, y + h + 0.35)
    footer(s, tag)
    notes(s, note)
    return s


# ---------------------------------------------------------------- COVER (edit slide 1)
edit_cover(
    prs,
    title_text='The Registration block',
    kicker='KP3 · Education DPI Roadmap · Module 2',
    blurb='Six standalone videos for the architect who sets up the first block of the education '
          'foundation: what the Registration block does, how to judge a product against the '
          'published specification, how an AI assistant drafts the service description, the '
          'three checks before the officer, the officer\'s decision and the write to the register '
          '— and the whole service as a description a second ministry can start from.',
    length='~30 mins across 6 videos (2.1 – 2.6)',
    audience=AUDIENCE,
    panel_heading='WHAT THIS MODULE STANDS UP',
    panel_items=['Application · decision · record · proof',
                 'A product judged against the spec',
                 'The service drafted, imported, tested',
                 'Three checks before the officer',
                 'The officer decides, then the write',
                 'A service you can move'],
    panel_footer='42 requirements · 13 operations · 1 service description',
    note_text='Cover for the combined Module 2 deck. Each section that follows is one standalone '
              '~5 minute video. This is the first Architect-facing module of KP3 — the ministry\'s '
              'technical lead or solution architect who sets up the registration service and '
              'judges the products offered for it. Module 1 set the first proof: one service on '
              'four blocks. This module stands up the first of them.')

# ---------------------------------------------------------------- AGENDA (edit slide 2)
edit_agenda(
    prs,
    header='Module 2 — six videos',
    items=[
        ('2.1  What the Registration block does', '~5 min'),
        ('2.2  The published specification, and how to judge a product against it', '~5 min'),
        ('2.3  Generating the registration service', '~5 min'),
        ('2.4  Checks before the officer decides', '~5 min'),
        ('2.5  The officer decides, and the record is written', '~5 min'),
        ('2.6  The whole service as a description you can move', '~5 min'),
    ],
    message_paras=[
        'A registration block takes an application, lets an officer decide and, on approval, '
        'writes to a register and gives the applicant proof — built once for every ministry.',
        'Judge the product against the published specification; draft the service with an '
        'assistant, then import, test and correct it; keep it as a description you can move.',
    ],
    note_text='Navigation slide for the combined deck; the videos ship standalone on YouTube. '
              '2.1 and 2.2 are what the block is and how to judge a product for it. 2.3 to 2.5 '
              'are the build — the service description, the checks, the decision and the write. '
              '2.6 steps back to the service as a description.')

delete_template_slides(prs, keep=2)


# ================================================================ 2.1
T = '2.1 · What the Registration block does'
MSG = ('A registration block takes an application, lets an officer decide and, on approval, '
       'writes to a register and gives the applicant proof, and built once it serves every '
       'ministry that registers people or things.')
section('2.1', 'What the Registration block does', MSG,
        "VO: Every ministry registers something. Schools register learners. A business registry "
        "registers companies. A population registry records births. Each office asks for "
        "information, checks it, decides, records it and gives back proof. The Registration "
        "block is shared software that does exactly that.")

rows_block(prs, 'What registration means',
           [('An applicant asks for information to be recorded in a registry', ''),
            ('A registrar, the authorised representative of the registry, records it', ''),
            ('The applicant receives a credential as proof of registration', '')],
           'Two outcomes: a record is written, and proof goes back. A service that stops at '
           'capturing a form has done neither.',
           T,
           "VO: The GovStack Registration specification defines registration in one sentence. It "
           "is the process through which an applicant gets information recorded in a registry "
           "and receives a credential as proof of registration. At least two parties are "
           "involved: the applicant, and the authorised representative of the registry, whom the "
           "specification calls the registrar. Others may join. A witness, another public body "
           "or a database may confirm what the applicant says. A bank may receive a fee. Notice "
           "the two outcomes. A record is written, and proof goes back to the applicant. A "
           "service that stops at capturing a form has done neither.",
           numbered=False)

# The module's centrepiece.
three_panels(prs, 'Three capabilities',
             [('ONLINE REGISTRATION',
               ['The applicant fills in the form, uploads documents, sends and follows the '
                'status.']),
              ('PROCESSING',
               ['An operator approves, rejects or sends back; on approval the record is sent to '
                'a registry and a credential issued.']),
              ('DEVELOPMENT PLATFORM',
               ['An analyst sets up rules, screens and checks without programming.'])],
             None, T,
             "VO: The block has three capabilities. The first is online registration. The "
             "applicant fills in a form, uploads documents, pays a fee where there is one, sends "
             "the file and follows its status until a decision arrives. The second is "
             "processing. In the back office an operator, who may be a person or an automated "
             "role, approves the file, rejects it or sends it back for correction. On approval "
             "the system sends the information to a registry and issues the credential. The "
             "third is the development platform. There an analyst sets up the rules, the "
             "screens and the checks of each service, without writing code.\n\n"
             "Production cue: the centrepiece of the module — the three capabilities every later "
             "video returns to. Reveal the panels left to right. Hold it a beat longer.")

rows_block(prs, 'Progressa\'s learner registration, in three parts',
           [('The parent or the learner applies online', ''),
            ('The registrar of PLR decides in the back office', ''),
            ('The analyst configures the service',
             'The record itself is kept in the learner register.')],
           'Storage belongs to the Digital Registries block — the registration block writes '
           'there.',
           T,
           "VO: Here is Progressa's learner registration seen through those three parts. A "
           "parent, or a learner old enough, applies online. The registrar of PLR, the Progressa "
           "Learner Registry, decides in the back office. An analyst in the ministry configures "
           "the service. In the service, the parent meets the guide, the form, the documents and the "
           "send button, and later the decision and the confirmation. One thing the block does "
           "not do is keep the record for the long term. The specification leaves storage to the "
           "Digital Registries block. The registration block's job is to connect to it and write "
           "there.",
           numbered=False)

block(prs, 'Built once, used by every ministry',
      ['Digitising a state registry needs two building blocks: Registration and Digital '
       'Registry.',
       'Each new registration is a new service set up on the same block — not new software.'],
      'The ministry that builds the block first pays for it. Each ministry after it sets up a new '
      'service on the same block.',
      T,
      "VO: Now the reason this is a shared block and not a school system. PAERA, the GovStack "
      "reference architecture, says that digitising a state registry needs two building blocks: "
      "Registration and a Digital Registry. That holds for a business registry, a population "
      "registry and a learner register alike. So the ministry that builds the block first pays "
      "for it, and each ministry after it sets up a new service on the same block. That re-use "
      "is only visible to someone planning for the whole government, which is why the decision "
      "belongs above any single project.\n\n"
      "Production cue: the pivotal slide of this video — planning is what makes re-use "
      "possible. Hold it a beat longer.")

recap(MSG, T,
      PRACTICE_NOTE + "\n\n"
      "VO: An application comes in, an officer decides, the register is written and proof goes "
      "out. Build that once, and every ministry that registers can use it.",
      ('Map your paper registration onto the block\'s three capabilities',
       'a table that sorts each step of your procedure into the three capabilities, with the '
       'decisions an officer takes'))

sources_slide(prs, T, [
    'GovStack Registration Building Block specification, default edition — sections 2 and 4.1 '
    'to 4.4',
    'PAERA v1.0 — Annex 1, A1.2.5',
])


# ================================================================ 2.2
T = '2.2 · The published specification, and how to judge a product against it'
MSG = ('Ask every vendor to show the product against the published specification, requirement '
       'by requirement, and check whether GovStack lists it and at which compliance level.')
section('2.2', 'The published specification, and how to judge a product against it', MSG,
        "VO: A vendor tells you the product is GovStack compliant. That sentence alone tells you "
        "very little. What you need is the product shown against the published specification, "
        "one requirement at a time, with evidence your own team can check.")

rows_block(prs, 'What the specification contains',
           [('42 functional requirements', 'In three groups: the applicant, the operator, the '
                                           'analyst.'),
            ('12 data structures', ''),
            ('13 published operations', ''),
            ('Each requirement marked REQUIRED or RECOMMENDED', '')],
           'Name the edition — the site labels the default edition 23Q4 — in your tender and your '
           'questionnaire, so every answer refers to the same text.',
           T,
           "VO: Start by naming the edition. The GovStack site labels the default edition of the "
           "Registration specification 23Q4. Write that edition into your tender and your "
           "questionnaire, so every answer refers to the same text. The edition holds forty-two "
           "functional requirements in three groups: ten for the applicant, six for the operator "
           "who processes applications, and twenty-six for the analyst who builds services. It "
           "defines twelve data structures, such as the service, the registration and the role, "
           "and thirteen published operations. Each requirement is marked required or "
           "recommended.",
           numbered=False)

rows_block(prs, 'Requirement by requirement',
           [('For each requirement', 'Met as delivered, met by configuration, or not met.'),
            ('For each answer', 'The evidence — a screen, a test record, a document.'),
            ('For the operations', 'Which of the thirteen the product offers.')],
           'A product that answers in this form can be compared with the next one. A brochure '
           'cannot.',
           T,
           "VO: Turn that list into the vendor's homework. For every requirement, the vendor "
           "answers one of three things: met as delivered, met by configuration, or not met. "
           "Under every answer, ask for evidence you can check: a screen, a test record or a "
           "document. Do the same for the operations. Which of the thirteen does the product "
           "offer, and where are its test results? Ask also how the product exports and imports "
           "a service description, because the specification publishes no operation for creating "
           "or changing a service, and each product does it its own way. A product that answers "
           "in this form can be compared with the next one. A brochure cannot.\n\n"
           "Production cue: the pivotal slide of this video — the method the listener takes "
           "away. Hold it a beat longer.",
           numbered=False)

rows_block(prs, 'What GovStack itself offers',
           [('A self-assessment form for requirements, and automated tests of the interfaces', ''),
            ('A listing at Level 1 or Level 2', 'On the GovStack website.'),
            ('The level and a link to the full report', 'Shown in the listing.')],
           'When you quote a threshold, name its source.',
           T,
           "VO: Now what GovStack itself offers. Its testing application has a self-assessment "
           "form, where a software provider assesses the product against the functional "
           "requirements, and a set of automated tests of the interfaces. GovStack's website "
           "grades software at Level 1 or Level 2, depending on how many requirements are met. "
           "Its team checks a submission for completeness and plausibility, which is a review of "
           "what the provider sent, not a test of your installation. Accepted software is listed "
           "on the website with its level and a link to the full report. Be careful with thresholds, too: the website and the Architecture specification set different ones. When you quote a threshold, name its source.",
           numbered=False)

table_slide(prs, 'Progressa\'s self-assessment sheet',
            ['Requirement', 'Level', 'Answer', 'Evidence'], [3.7, 1.5, 2.3, 4.4],
            [('6.2.3 Make decisions about an application', 'REQUIRED', 'Met by configuration',
              'The registrar\'s screen with approve, reject and send back'),
             ('6.3.2.10 Import/Export of service descriptions', 'REQUIRED', 'Met',
              'An exported file imported into a second installation'),
             ('6.1.7 Pay fees for application', 'REQUIRED', 'Met — not used',
              'Learner registration carries no fee')],
            T,
            "VO: Here is such a sheet, built as an example for the product Progressa uses; it "
            "names no real product. Three rows show the pattern. The operator's decision is met "
            "by configuration, and the evidence is the registrar's screen with its three choices. "
            "Import and export of a service description is met, and the evidence is a file "
            "exported and imported into a second installation. The payment of fees is met but "
            "not used, because registering a learner carries no fee.",
            foot='Built as an example for the product Progressa uses; it names no real product.',
            size=14, bottom=5.6)

recap(MSG, T,
      PRACTICE_NOTE + "\n\n"
      "VO: Ask for evidence against each published requirement, and check whether GovStack "
      "lists the product and at which level.",
      ('Turn the specification\'s requirements into a vendor questionnaire',
       'a questionnaire for vendors with one row for each requirement and the evidence to ask '
       'for under it'))

sources_slide(prs, T, [
    'GovStack Registration Building Block specification, default edition — sections 6.1 to 6.3, '
    '7.2 and 8.1 to 8.3',
    'GovStack testing application; GovStack website pages \'How is Compliance Measured?\' and '
    '\'How to Submit Software?\'',
    'GovStack Architecture specification, edition 2.1.0 — section 5.5.4',
])


# ================================================================ 2.3
T = '2.3 · Generating the registration service'
MSG = ('Describe your registration in the specification\'s terms, and an AI assistant drafts '
       'the service description that sets the block up, which you then import, test and '
       'correct.')
section('2.3', 'Generating the registration service', MSG,
        "VO: The registration of a learner is written today in a law, a circular and a paper "
        "form. Before any product can carry it, someone has to restate it in the block's own "
        "terms. An AI assistant can draft that restatement in an afternoon.")

rows_block(prs, 'The specification\'s terms',
           [('Service', 'A name, holding one or more registrations.'),
            ('Registration', 'Its name and the entity in charge.'),
            ('Subjects and determinants', 'Who must register, and what changes the '
                                          'requirements.'),
            ('Result', 'The proof the applicant receives.'),
            ('Requirements', 'The documents and the data.'),
            ('Screens and fields', 'What the applicant sees, in order.')],
           'A shared language: the officer who knows the procedure and the analyst who sets up '
           'the product mean the same thing by each word.',
           T,
           "VO: The Registration specification gives you the words. A service is a name that "
           "holds one or more registrations. Each registration has a name and an entity in "
           "charge. Its subjects say who must register, and its determinants say what changes "
           "the requirements for a given case. Its result is the proof the applicant receives. "
           "Its requirements are the documents and the data asked for. Then come the screens and "
           "the fields, in order. These terms are a shared language: the officer who knows the "
           "procedure and the analyst who sets up the product mean the same thing by each word."
           "\n\n"
           "Production cue: the pivotal slide of this video — the vocabulary. Reveal the rows one "
           "at a time.",
           numbered=False, bottom=6.1)

rows_block(prs, 'Progressa\'s learner registration, in those terms',
           [('One registration', 'Entity in charge: PLR.'),
            ('Determinant', 'The learner transfers from another school — adds a required '
                            'document, the transfer letter.'),
            ('Data', 'Names, date of birth, school, grade.'),
            ('Result', 'A registration confirmation with the learner\'s register number.'),
            ('Screens', 'Guide, applicant form, documents, send — the payment screen switched '
                        'off, as there is no fee.')],
           None, T,
           "VO: Here is Progressa's learner registration written that way. There is one "
           "registration, and PLR, the learner registry, is in charge of it. One determinant "
           "matters: a learner who transfers from another school must add a transfer letter. The "
           "data are the learner's names, date of birth, school and grade. The result is a "
           "registration confirmation with the learner's register number. The screens are the "
           "guide, the applicant form, the documents and the send screen. The payment screen is "
           "switched off, because registering a learner carries no fee.",
           numbered=False)

rows_block(prs, 'What the file is',
           [('The specification requires that a full service description can be exported and '
             'imported', ''),
            ('It publishes no operation to create or change a service, and does not define the '
             'file\'s format', ''),
            ('So the file names the product and the format it is written in', '')],
           'Give the assistant the format as the product documents it, with an exported example — '
           'so that it does not invent one.',
           T,
           "VO: From that brief the assistant drafts the service description. Be clear about "
           "what this file is. The specification requires that a full service description can "
           "be exported and imported, with its screens, fields, process flow and settings. But "
           "it publishes no operation for creating or changing a service, and it does not define "
           "the file's format. The format is the product's own. So the description names the "
           "product and the format it is written in, and every assumption the assistant made is "
           "marked for someone to confirm. Give the assistant the format as the product "
           "documents it, with an exported example if you have one, so that it does not invent "
           "one.",
           numbered=False)

rows_with_foot(prs, 'Import, test, correct',
               [('Import the draft into a test installation', ''),
                ('The block lists the service, with its screens in order', ''),
                ('Confirm or correct every marked assumption', '')],
               'Progressa\'s description is a worked example.',
               T,
               "VO: Then the draft goes into a test installation. The check is simple to state. "
               "The block lists the service, and its screens come back in the order the brief "
               "gave. Then send one test application down each path the brief describes, one "
               "learner who transfers and one who does not; the two must be asked for different "
               "documents. Each marked assumption is confirmed by the registry's office or "
               "corrected. Progressa's description is a worked example, ready to import once the product is chosen.\n\n" + STORYBOARD_NOTE,
               numbered=True)

recap(MSG, T,
      PRACTICE_NOTE + "\n\n"
      "VO: Write the registration in the specification's words. The assistant drafts the file "
      "that sets the block up; you import it, test it and correct it before anyone relies on it.",
      ('Draft the service description from your registration brief',
       'a draft service description in the product\'s named format, with every assumption marked '
       'for confirmation'))

sources_slide(prs, T, [
    'GovStack Registration Building Block specification, default edition — sections 6.3.1.1, '
    '6.3.1.3 to 6.3.1.6, 6.3.1.8, 6.3.1.10, 6.3.2.1, 6.3.2.2, 6.3.2.10 and 8.3',
])


# ================================================================ 2.4
T = '2.4 · Checks before the officer decides'
MSG = ('Three kinds of check stop a bad application before it reaches the officer: rules on each '
       'field, a comparison with the identity authority\'s record, and a test of completeness on '
       'sending.')
section('2.4', 'Checks before the officer decides', MSG,
        "VO: A registrar's time is the scarcest thing in a registration office. Every "
        "application that arrives with a wrong date, a wrong name or a missing document costs "
        "that time twice. Three kinds of check catch those faults before the file reaches the "
        "desk.")

block(prs, 'Check one: rules on each field',
      ['Required or optional; numbers, ranges, patterns; dates earlier, later, older than an '
       'age; file size and type.',
       'Progressa: a date of birth that makes the learner two years old is refused — the rule '
       'asks for three or older.'],
      'Rules like these cost the analyst minutes and save the registrar hours.',
      T,
      "VO: The first kind is a rule on each field. The specification lets the analyst set them "
      "without code: whether a field is required, a number range, a text pattern, a date that "
      "must be earlier or later than another, a minimum age, the size and type of an uploaded "
      "file. In Progressa, the rule on date of birth asks for a learner aged three or older. An "
      "application whose date makes the learner two is refused, with a message the parent can "
      "understand. Rules like these cost the analyst minutes and save the registrar hours, so "
      "set one for every field the law constrains.")

rows_block(prs, 'Check two: the identity record, with the person present',
           [('The person signs in with PNIA and approves what is shared', ''),
            ('PNIA releases the name, and an identifier made for this one service', ''),
            ('The form compares the typed name with the released name', '')],
           'The service keeps PNIA\'s identifier for it — never the national number.',
           T,
           "VO: The second kind compares the application with an outside source. The "
           "specification's own example is a name and an identifier matched against a civil "
           "registry. For a person, the published way runs through the identity block's sign-in, "
           "OpenID Connect. The person signs in with PNIA, Progressa's identity authority, and "
           "approves what may be shared. PNIA releases the name, and an identifier made for this "
           "one service. The form's action compares the typed name with the released one, at the "
           "moment of applying, while the person is there. Progressa's second failing "
           "application has a name that differs, and it is refused. The service keeps PNIA's "
           "identifier for it, never the national number.\n\n"
           "Production cue: the pivotal slide of this video — the published way, with the person "
           "present. No sign-in screens of any product. Hold it a beat longer.")

block(prs, 'What is not published',
      ['A check from server to server, by a known identifier, is required of the block — but no '
       'interface for it is published.',
       'PNIA\'s one service on Linkup reads a person by national number: a Progressa contract, not a GovStack interface.'],
      'Wherever it appears, it is named as Progressa\'s own contract.',
      T,
      "VO: Be precise about one gap. The Identity specification requires a way to verify a "
      "person from a known identifier, but its published set of interfaces has none for it. "
      "Progressa has one service of that kind: PNIA's read of a person by national number on "
      "Linkup, a contract of Progressa's own that only the examination authority may call. "
      "Wherever it appears, it is named as Progressa's own contract, not as a GovStack "
      "interface.")

rows_with_foot(prs, 'Check three: complete before sending',
               [('Every required field filled, every required document uploaded — or no '
                 'sending, with a clear message', ''),
                ('Progressa: a transferring learner without the transfer letter cannot send', '')],
               STORYBOARD_FOOT, T,
               "VO: The third kind runs when the applicant presses send. Every required field "
               "must be filled and every required document uploaded, or the file cannot be sent, "
               "and the screen says what is missing. Write those messages with the registry's "
               "office, because a parent who cannot understand the message comes to the counter "
               "instead. Progressa's third application is a transferring learner without the "
               "transfer letter. It stops at the send screen. All three kinds of check act "
               "before a person sees the file, so the registrar's attention goes to judgement, "
               "not to typing errors.\n\n" + STORYBOARD_NOTE,
               bottom=4.7)

recap(MSG, T,
      PRACTICE_NOTE + "\n\n"
      "VO: Field rules, a comparison with PNIA's record made with the person present, and a "
      "completeness test on sending. Faulty applications stop there, not at the registrar's "
      "desk.",
      ('Derive the validation rules and the test applications',
       'a table of validation rules and a set of test applications that should pass and that '
       'should fail'))

sources_slide(prs, T, [
    'GovStack Registration Building Block specification, default edition — sections 6.3.2.7 and '
    '6.3.3.1 to 6.3.3.3',
    'GovStack Identity Building Block specification, Version 2.0 — sections 6.2, 7.2.1, 8 and '
    '9.1.1',
])


# ================================================================ 2.5
T = '2.5 · The officer decides, and the record is written'
MSG = ('A registrar approves, rejects or sends back each application, and only on approval does '
       'the block write the record to the register, in a sequence the specifications leave you '
       'to define and test.')
section('2.5', 'The officer decides, and the record is written', MSG,
        "VO: Software can check an application. It cannot take responsibility for it. In "
        "registration, a named officer decides, and the register is written only after that "
        "decision. Getting this order right is what makes the record worth trusting.")

rows_block(prs, 'The decision',
           [('Approve, reject, or send back for correction', 'With the wrong field marked.'),
            ('Each processing role has a list screen and a decision screen', ''),
            ('For each status, the analyst sets where the file goes next',
             'To another role, back to the applicant, or to the end.')],
           None, T,
           "VO: The specification gives the operator three decisions: approve, reject, or send "
           "back for correction, marking the field that is wrong so the applicant sees it. The "
           "analyst builds the processing part as a chain of roles. Each role has a list of "
           "files and a screen on which to decide. For each status a role may give, pending, "
           "approved, rejected or sent back, the analyst sets where the file goes next: to "
           "another role, back to the applicant, or to the end. A role can be a person or an "
           "automated role, and the specification lets an automated role carry actions, such as "
           "a call to another service. The tasks are read and completed through published "
           "operations.",
           numbered=False)

chain(prs, 'Progressa\'s flow',
      [('SENT', ['The application, as the parent sent it.'], False),
       ('AUTOMATED ROLE', ['Checks the file as sent. Decides nothing the law gives to the '
                           'registrar.'], False),
       ('REGISTRAR OF PLR', ['A person: approves, rejects or sends back.'], True),
       ('AUTOMATED ROLE', ['On approval: writes the record and issues the confirmation.'], False)],
      'A rejected file is closed, and nothing is written.',
      T,
      "VO: Progressa's flow has three roles. An automated role takes the file as sent and checks "
      "it again. It decides nothing that the law gives to the registrar; it only prepares the "
      "file for the person who does. The registrar of PLR, a person, then decides. Only on "
      "approval does a second automated role write the record to the register and issue the "
      "confirmation with the learner's register number. A rejected file is closed, and nothing "
      "is written.\n\n"
      "Production cue: the pivotal slide of this video — the order that makes the record worth "
      "trusting. Reveal the chain left to right. The written guide carries figure F7.")

rows_block(prs, 'The write, and what nobody publishes',
           [('On approval, an action sends the record to the register, through the Information '
             'Mediator', ''),
            ('The register accepts it through its create-or-update operation', ''),
            ('The order between the two blocks is not published', 'You define it, and you test '
                                                                   'it.')],
           'Write it down as a short agreement between the two owners — then test both outcomes.',
           T,
           "VO: Now the write. On approval, the specification says, the system sends the "
           "information to a registry, using an action that sends form data to another service. "
           "Its traffic must pass through an Information Mediator or a secure gateway; in "
           "Progressa that is Linkup. The register accepts the record through its "
           "create-or-update operation. But neither specification publishes the order of calls "
           "or the data between the two blocks. Joining them is your team's own work. Write it "
           "down as a short agreement between the two owners: which call is made, with which "
           "fields, at which moment, and what happens when the register refuses. Then test both "
           "outcomes: an approval that writes, and a refusal that leaves the file waiting.",
           numbered=False)

rows_with_foot(prs, 'Where the record lands',
               [('PLR: already a member of Linkup, with one enrolment service', ''),
                ('This course sets up the authoritative learner register behind it — the register this '
                 'service writes to', '')],
               STORYBOARD_FOOT, T,
               "VO: Where does the record land? PLR, the Progressa Learner Registry, is already a member of Linkup, with one enrolment service. This course sets up the authoritative learner register behind it, and that register is what this service "
               "writes to. The record carries the identifier PNIA gave the service, never the "
               "national number. And the order matters to a minister as much as to an "
               "architect: a record written before a decision is a record nobody answers for."
               "\n\n" + STORYBOARD_NOTE,
               bottom=4.7)

recap(MSG, T,
      PRACTICE_NOTE + "\n\n"
      "VO: The registrar decides. Only an approval writes the record. The order between the two "
      "blocks is yours to define, so write it down and test it.",
      ('Map the form to the register and write the test of the write',
       'a table mapping each form field to a register field, and the test sequence for the '
       'write'))

sources_slide(prs, T, [
    'GovStack Registration Building Block specification, default edition — sections 4.2, 5.1.4, '
    '6.2.3, 6.3.2.3, 6.3.2.4, 6.3.2.7, 8.2 and 9.2.2',
    'GovStack Digital Registries Building Block specification, Version 3.0-alpha — requirement '
    'DRS-33 and section 8.1',
])


# ================================================================ 2.6
T = '2.6 · The whole service as a description you can move'
MSG = ('The whole service is a description you can test, publish, export and import elsewhere, '
       'so a second ministry starts from yours and not from nothing.')
section('2.6', 'The whole service as a description you can move', MSG,
        "VO: The second ministry that needs a registration service should not start from a "
        "blank screen. If the first ministry kept its service as a description, the second can "
        "take it, change what differs and test it. That is how a shared block pays back.")

rows_block(prs, 'Test before anyone uses it',
           [('Preview each screen', ''),
            ('Preview the full service', ''),
            ('Run the full service in a test installation', 'Before publishing it to the live '
                                                            'one.')],
           'Nothing should reach a parent that has not been through that last step.',
           T,
           "VO: Start with testing. The specification requires the analyst to preview the service "
           "before applicants see it, at three depths: each screen on its own, the full service, "
           "and the full service in a test installation, where it can be tried from beginning to "
           "end before it is published to the live one. Use test cases that look like the real "
           "cases your office sees: a transferring learner, a missing document, a learner of the "
           "wrong age. The test installation is also where the registry's office reads every "
           "screen before the public does. Nothing should reach a parent that has not been "
           "through that last step.")

rows_block(prs, 'Export, import, publish',
           [('A service description holds at least the screens and fields, the process flow and '
             'the service settings', ''),
            ('Settings that belong to one installation are set there, and do not travel', ''),
            ('Export and import are the product\'s own tools', 'No published operation does '
                                                               'them.')],
           None, T,
           "VO: Then the description itself. The specification requires that the full service "
           "can be exported and imported, and that the description holds at least the screens "
           "and fields, the process flow and the service settings. Settings that belong to one "
           "installation are made there and do not travel. A service can also be published to "
           "another installation; the specification recommends this rather than requiring it, "
           "so ask your vendor whether the product does it. One caution: no published operation "
           "creates, changes or exports a service. Export and import are the product's own "
           "tools, so the file names its product and format.",
           numbered=False)

# The module's emotional peak — the only full-colour punch block in the deck.
block(prs, 'Combine, and count',
      ['Several registrations can be combined in one service; a requirement shared by two is '
       'asked only once.',
       'The block\'s statistics count applications processed by operator, registration, service '
       'and date.'],
      'Each service kept as a description is re-use waiting to happen.',
      T,
      "VO: Two more things make the description worth keeping. Several registrations can be "
      "combined in one service, and a document that two of them need is asked for only once; "
      "one registration's result can even be another's input. And the block keeps statistics: "
      "the number of applications processed, by operator, registration, service and date. That "
      "count is how the owner of a service shows it is used. This is where planning for the "
      "whole government pays: each service kept as a description is re-use waiting to happen."
      "\n\n"
      "Production cue: the pivotal slide of this video and the module's one full-colour block. "
      "Hold it a beat longer.",
      punch_fill=ITU_BLUE, punch_ink=WHITE)

rows_with_foot(prs, 'Progressa\'s service, moved',
               [('Exported from the first installation', ''),
                ('Imported into a clean installation, and compared screen by screen', ''),
                ('The number of applications processed read from the block\'s statistics', '')],
               STORYBOARD_FOOT, T,
               "VO: For Progressa, the learner registration is exported, imported into a clean "
               "installation and compared with the original, screen by screen. The comparison "
               "is the check. If the copy's screens equal the original's, the file carried "
               "everything that matters. If not, the difference is either a setting that belongs "
               "to one installation or a gap in the product's export, and you need to know "
               "which. The number of applications processed is read from the block's own "
               "statistics. When a second ministry needs a registration, it begins from this "
               "file.\n\n" + STORYBOARD_NOTE,
               numbered=True)

recap(MSG, T,
      PRACTICE_NOTE + "\n\n"
      "VO: Keep the whole service as one file. Test it, export it, import it elsewhere and "
      "compare. The next ministry then starts from your work, not from nothing.",
      ('Compare two exported descriptions of a service',
       'a note of changes between two versions of a service, written for the service\'s owner'))

sources_slide(prs, T, [
    'GovStack Registration Building Block specification, default edition — sections 6.3.1.2, '
    '6.3.1.9, 6.3.2.9, 6.3.2.10 and 8.3',
])


# ================================================================ Thank you
s = add_slide(prs, LAYOUT_THANKS)
notes(s, 'Closing slide for the combined deck. Individual videos end on their sources slide instead.')

# Self-check: the split spec's slide ranges depend on this count, and a helper that
# silently stops drawing shows up first as a slide with no voice-over.
assert len(prs.slides._sldIdLst) == 51, 'slide count changed — re-run the split with --infer-ranges'
assert all(sl.has_notes_slide and sl.notes_slide.notes_text_frame.text.strip() for sl in prs.slides), \
    'every slide carries its voice-over in the notes'

# The practice box is the last thing on its slide; anything overlapping it clips on render.
for sl in prs.slides:
    for pb in [sh for sh in sl.shapes if sh.has_text_frame
               and sh.text_frame.text.startswith('Do this on your own sector')]:
        for sh in sl.shapes:
            if sh.shape_id == pb.shape_id or not sh.has_text_frame or not sh.text_frame.text.strip():
                continue
            assert sh.top + sh.height <= pb.top or sh.top >= pb.top + pb.height, \
                'shape overlaps the practice box: %r' % sh.text_frame.text[:60]

OUT = os.environ.get('OUT_PATH') or os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    'videos', 'module_2', 'en', 'decks', 'KP3_M2_Deck_v0.1.pptx')
os.makedirs(os.path.dirname(OUT), exist_ok=True)
prs.save(OUT)
print('slides:', len(prs.slides._sldIdLst))
print('saved', OUT)

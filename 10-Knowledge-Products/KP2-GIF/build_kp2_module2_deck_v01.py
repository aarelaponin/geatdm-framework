#!/usr/bin/env python3
# Build the KP2 Module 2 (Topic 2) video deck on the ITU template — v0.1.
# Content follows KP2_Module2_Script_Bundle_v0.2 (build_kp2_module2_v02.js): six videos,
# 2.1 – 2.6, Strategist-facing — the legal layer and the Decree Drafting Kit. Every VO
# paragraph in the notes is a verbatim scriptBeats[].text from the .js (vo_diff.py proves it);
# the recap slide of every video carries the un-narrated practice box (plan D5) — task = the AI
# tip's title, artefact = the Output half of the tip's io. Tool names in a tip title are dropped
# from the box: nothing the learner reads names the kit.
# Content only — every generic helper, branding constant and layout index comes from
# ITU-Giga-KP-Plugin/skills/kp-deck-builder/scripts/deck_lib.py (which also ships the
# template). Conventions and design rules: that skill's SKILL.md.
# Generated .pptx is NEVER hand-edited — fix here, re-render, re-run the split
# (kp-deck-builder/scripts/split_module_deck.py + the split spec next to the decks).
# Override paths with TEMPLATE= and OUT_PATH= env vars.
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                '..', 'ITU-Giga-KP-Plugin', 'skills', 'kp-deck-builder', 'scripts'))
from deck_lib import (
    TITLE_CARD_NOTE, hook_slide,
    ITU_BLUE, ITU_BLUE_DARK, LIGHT, WHITE,
    LAYOUT_THANKS, LAYOUT_WHITE,
    add_slide, big_slide, block_slide, box, delete_template_slides, edit_agenda,
    edit_cover, footer, notes, open_template, rows_block, section_slide, set_text,
    sources_slide, title, two_panel)
from deck_diagrams import node

prs = open_template(os.environ.get('TEMPLATE'))

AUDIENCE = 'National interoperability authority · ministry CIO · Ministry of Justice sponsor'

# The practice box is the video's only call to action and is never narrated (plan D5).
PRACTICE_NOTE = ('PRACTICE BOX (on-screen only — never read it, never paraphrase it, never point '
                 'at it). It replaces the narrated handoff: this video ends on the recap and the '
                 'Sources slide.')


# Two-sentence leads and three-line comparison columns, as in Module 1.
def block(prs, *a, **k):
    k.setdefault('punch_y', 4.35)
    return block_slide(prs, *a, **k)


def panels(prs, *a, **k):
    k.setdefault('height', 3.2)
    return two_panel(prs, *a, **k)


# Opener (hook) slide copy per video — headline + two to four supporting lines, written from
# the same opener narration the hook's note carries. Not a preview of the next slide's list.
HOOKS = {'2.1': ('A perfect bus with no mandate carries nothing.',
                 ['No agency shares data without a clear lawful basis.',
                  'The most cautious official can stop any exchange — and be right to.']),
         '2.2': ('Stop waiting on the Ministry of Justice. Brief it.',
                 ['A decree looks like one dense block of legal text.',
                  'It is five parts, each with a different job and a different reader.']),
         '2.3': ('The first two parts are the ones a non-lawyer can lead on.',
                 ['They are about the case and the context, not the binding rules.',
                  'Both start from the Strategic Foundation Document you already have.']),
         '2.4': ('The articles are where the legal layer becomes enforceable.',
                 ['The binding rules — where precision matters most.',
                  'Drafted against a published model, never from imagination.']),
         '2.5': ('A perfect package can still stall.',
                 ['In a Ministry of Justice queue.',
                  'Or in a challenge from the data-protection authority.',
                  'The last two parts of the kit exist to stop both.']),
         '2.6': ('The step most teams skip: read the decree back against the catalogue.',
                 ['The decree is not a document beside the framework.',
                  'It is the legal configuration of it.'])}


def section(code, name, message, note):
    # No runtime on the title card: the narration is generated per take and its length moves
    # with every re-roll.
    s = section_slide(prs, 'KP2 · MODULE 2 · VIDEO %s' % code, code, name, message,
                      'standalone video · voice-over on text slides', TITLE_CARD_NOTE)
    head, lines = HOOKS[code]
    hook_slide(prs, head, lines, '%s · %s' % (code, name), note)
    return s


def kit_strip(prs, head, parts, closing, tag, note):
    """The module's centrepiece: the five parts of the Decree Drafting Kit side by side."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head)
    w, gap = 2.24, 0.175
    for i, (name, job) in enumerate(parts):
        node(s, 0.72 + i * (w + gap), 1.9, w, 3.0, name, [job], head_size=18, size=16)
    tb = box(s, 0.72, 5.2, 11.9, 0.6)
    set_text(tb.text_frame, [[(closing, 15.5, True, ITU_BLUE_DARK, False)]])
    footer(s, tag)
    notes(s, note)
    return s


# ---------------------------------------------------------------- COVER (edit slide 1)
edit_cover(
    prs,
    title_text='The legal mandate —\nthe Decree Drafting Kit',
    kicker='Government Interoperability Framework · Module 2',
    blurb='Six standalone videos for the person who carries the decree: why the bus needs a legal '
          'mandate, the five parts of an interoperability decree, drafting each one against a '
          'published model with AI and confirming it, getting it past the Ministry of Justice and '
          'the data-protection authority — and reading the finished decree as configuration.',
    length='~28 mins across 6 videos (2.1 – 2.6)',
    audience=AUDIENCE,
    panel_heading='WHAT THIS MODULE SETTLES',
    panel_items=['The decree is the on-switch',
                 'Five parts, five readers',
                 'Generate against a model, then confirm',
                 'Two tracks with data protection',
                 'Read it back as configuration'],
    panel_footer='5 components · 1 published model per article · 2 checks against the catalogue',
    note_text='Cover for the combined Module 2 deck. Each section that follows is one standalone '
              '~4–5 minute video. Still the Strategist: the national interoperability authority, the '
              'ministry CIO, the Ministry of Justice sponsor, the development-partner lead. This '
              'module produces the legal layer — the decree — as a drafting kit a qualified lawyer '
              'turns into law.')

# ---------------------------------------------------------------- AGENDA (edit slide 2)
edit_agenda(
    prs,
    header='Module 2 — six videos',
    items=[
        ('2.1  Why the platform needs a legal mandate', '~4 min'),
        ('2.2  Anatomy of an interoperability decree', '~5 min'),
        ('2.3  The Explanatory Memorandum and Preamble', '~5 min'),
        ('2.4  The Draft Articles Package', '~5 min'),
        ('2.5  The Cover Note and Two-Track Regulatory Memo', '~5 min'),
        ('2.6  The decree as configuration', '~5 min'),
    ],
    message_paras=[
        'The decree is the on-switch: it makes exchange lawful, connection mandatory and the '
        'citizen\'s data protected.',
        'Draft it in five parts against published models, confirm every clause — and check it '
        'authorises exactly what the bus will carry.',
    ],
    note_text='Navigation slide for the combined deck; the videos ship standalone on YouTube. '
              '2.1 is the why. 2.2 is the anatomy. 2.3 to 2.5 draft the five components. 2.6 reads '
              'the finished decree back against the Use-Case Catalogue.')

delete_template_slides(prs, keep=2)


# ================================================================ 2.1
T = '2.1 · Why the platform needs a legal mandate'
section('2.1', 'Why the platform needs a legal mandate',
        'Without the legal layer, the bus cannot lawfully carry one cross-agency message — the '
        'decree is the on-switch, not paperwork.',
        "VO: Of the four layers of interoperability, the one most often left for last is the legal "
        "layer — and it is the one that decides whether anything actually moves. You can build a "
        "perfect technical bus, agree the meaning of the data, and sign every organisational "
        "arrangement, and still carry nothing, because no agency will share data without a clear "
        "lawful basis to do so. A working bus with no legal mandate is not a working exchange. It is "
        "a standing risk that the most cautious official in any agency can stop, and be right to "
        "stop.")

rows_block(prs, 'A missing mandate shows up in one of three disguises',
           [('The refusal', 'An official declines to share, citing the data-protection law — and '
                            'cannot be overruled.'),
            ('The stall', 'A project waits months for a legal opinion that covers one exchange.'),
            ('The workaround', 'Data moves anyway, on an unclear basis — a breach waiting to '
                               'surface.')],
           'Each is a legal-layer failure wearing a technical or political disguise.',
           T,
           "VO: Without a mandate, you see one of three things. An official refuses to share, citing "
           "the data-protection law, and no one can overrule them. A project stalls for months "
           "waiting for a legal opinion that covers only that one exchange. Or — worst of all — data "
           "moves anyway, on an unclear basis, and becomes a breach waiting to surface. Each of these "
           "is a legal-layer failure wearing a technical or political disguise.\n\n"
           "Production cue: the recognition moment — the viewer has seen all three. Reveal one row "
           "at a time.")

rows_block(prs, 'One instrument fixes all three',
           [('Authorises cross-agency exchange', 'Makes the sharing lawful in the first place.'),
            ('Makes connection the default', 'Not something each agency may decline.'),
            ('Protects the citizen\'s data', 'A stated purpose, a basis for consent, security '
                                             'obligations.'),
            ('Names the operating authority', 'And the powers it holds to run the framework.')],
           'Exchange becomes the rule. Refusing to connect becomes the exception to justify.',
           T,
           "VO: A single legal instrument fixes all three. The decree authorises cross-agency "
           "exchange — it makes the sharing lawful in the first place. It makes connecting to the bus "
           "the default rather than something each agency may decline. It protects the citizen's "
           "data by binding every exchange to a stated purpose, a basis for consent where needed, and "
           "security obligations. And it names the operating authority and the powers it holds to run "
           "the framework. With the decree in force, exchange is the rule and refusing to connect "
           "becomes the exception that has to be justified.")

block(prs, 'Write the lawful basis once — for the whole of government',
      ['Every agency reuses the same mandate, instead of negotiating its own legal opinion for every '
       'exchange.',
       'That reuse exists only at the level of whole-of-government planning.'],
      'A project cannot grant itself a mandate that binds other agencies. Only the framework can.',
      T,
      "VO: Here is the part that makes the decree a framework artefact and not a project document. "
      "The lawful basis is written once, for the whole of government, so that every agency reuses "
      "the same mandate instead of each negotiating its own legal opinion for every exchange. That "
      "reuse — write the rule once, apply it everywhere — exists only at the level of "
      "whole-of-government planning. A project cannot grant itself a mandate that binds other "
      "agencies. Only the framework, through the decree, can.\n\n"
      "Production cue: the pivotal slide of this video. Hold it a beat longer.")

big_slide(prs,
          'The decree is the legal on-switch — it makes cross-agency exchange lawful, connection '
          'mandatory, and the citizen\'s data protected.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So when you explain the decree to your minister or to a Ministry of Justice, do not "
          "present it as paperwork that follows the technical build. Present it as the on-switch. It "
          "is the instrument that turns a technically capable bus into a lawfully operating "
          "framework. The rest of this module shows you how to draft it — five components, generated "
          "with AI, and made law by a qualified lawyer.",
          practice=('Assess your legal readiness for cross-agency exchange',
                    'a legal-readiness assessment table plus a list of what the decree must '
                    'establish'))

sources_slide(prs, T, [
    'EU European Interoperability Framework — legal layer',
    'PAERA v1.0 — §3.2 (Legal layer)',
    'PAERA v1.0 — §5.2, Principle #5 (Once-Only)',
])


# ================================================================ 2.2
T = '2.2 · Anatomy of an interoperability decree'
section('2.2', 'Anatomy of an interoperability decree',
        'A sound decree is five parts; knowing them lets you brief a Ministry of Justice instead of '
        'waiting on it.',
        "VO: A decree looks, to a non-lawyer, like one dense block of legal text. It is actually five "
        "parts, each with a different job and a different reader. If you know the five parts, you "
        "stop being a passenger waiting for the Ministry of Justice to produce something, and you "
        "become the person who hands them a structured, near-complete package and asks them to "
        "perfect it. That shift — from waiting to briefing — is what this module gives you, and it "
        "starts with knowing the anatomy.")

# The module's centrepiece.
kit_strip(prs, 'A decree is five parts, each with its own job',
          [('Explanatory Memorandum', 'The case for the decree, in plain language.'),
           ('Preamble', 'The legal authority and the recitals.'),
           ('Draft Articles Package', 'The operative, binding provisions.'),
           ('Cover Note', 'The transmittal to the Ministry of Justice.'),
           ('Two-Track Regulatory Memo', 'How the decree and the data-protection law fit together.')],
          'Together they are the Decree Drafting Kit — built component by component in 2.3 to 2.5.',
          T,
          "VO: The five parts are these. The Explanatory Memorandum — the case for the decree, in "
          "plain language a minister can read: what problem it solves, what it does, why now. The "
          "Preamble — the legal recitals that cite the authority under which the decree is made. The "
          "Draft Articles Package — the operative provisions, the binding rules themselves. The "
          "Cover Note — the short transmittal that goes to the Ministry of Justice with the package. "
          "And the Two-Track Regulatory Memo — the document that shows how the interoperability "
          "decree and the country's personal-data-protection law fit together, whether that law is "
          "in force or still being drafted, so the two instruments coordinate instead of "
          "colliding.\n\n"
          "Production cue: the centrepiece of the module — the spine the next three videos build "
          "out. Reveal the parts left to right. Hold it a beat longer.\n\n"
          "Retrieval prompt — ask before playing on: who do you think reads each of these parts? "
          "Answer on the next slide.")

rows_block(prs, 'Each part has a different reader — so each is separate',
           [('The minister reads the Memorandum', 'The case, not the clauses.'),
            ('The lawyer reads the Preamble and the Articles', 'The authority and the binding text.'),
            ('The data-protection authority reads the Two-Track Memo',
             'To see that the two laws fit together rather than compete.')],
           'Bundle them, and each reader digs for their part. Separate them, and each finds it.',
           T,
           "VO: Notice that each part has a different reader, which is why they are separate. The "
           "minister reads the Memorandum — the case, not the clauses. The lawyer at the Ministry of "
           "Justice reads the Preamble and the Articles — the authority and the binding text. And the "
           "data-protection authority reads the Two-Track Memo, to see that the decree and the "
           "data-protection law fit together rather than compete. Bundle them into one block and each "
           "reader has to dig for their part. Separate them, and each reader finds exactly what they "
           "need.\n\n"
           "Production cue: this slide answers the retrieval prompt set on the previous slide.",
           numbered=False)

rows_block(prs, 'Five parts, not one — for review and for production',
       [('Reviewable in parts',
         'The Ministry can perfect the Articles without reopening the case in the Memorandum.'),
        ('Generatable in parts',
         'Each component is one focused AI prompt, run against a published model.')],
       'Five focused drafts are far easier to get right than one sprawling one.',
       T,
       "VO: There are two reasons to build the decree as five parts rather than one. The first is "
       "review: a package built in parts is reviewable in parts. The Ministry of Justice can perfect "
       "the legal wording of the Articles without reopening the political case in the Memorandum. The "
       "second is production. Each component is a focused, separate drafting task — and each one "
       "maps to a single AI prompt, run against a published legal model, producing a reviewed draft "
       "of that one component. Five focused drafts are far easier to get right than one sprawling "
       "one.")

block(prs, 'You produce the kit. A lawyer makes the law',
      ['The Decree Drafting Kit is the five components as structured, well-sourced drafts — not a '
       'decree with legal force.',
       'A qualified lawyer in your jurisdiction turns it into an instrument valid in your legal '
       'system.'],
      'The kit speeds the lawyer — months of drafting become weeks of review. It does not replace them.',
      T,
      "VO: One important framing. What this module helps you produce is a Decree Drafting Kit — the "
      "five components, as structured, well-sourced drafts. It is not a decree with legal force. A "
      "qualified lawyer in your jurisdiction turns the kit into an instrument that is valid in your "
      "legal system. The kit's job is to give that lawyer a strong, structured starting point so they "
      "perfect rather than originate — turning months of drafting into weeks of review. That division "
      "of labour, AI-and-architect drafts, lawyer makes law, runs through the whole module.\n\n"
      "Production cue: the safeguard framing of the whole module. Hold it a beat longer.")

big_slide(prs,
          'A decree is five parts — Memorandum, Preamble, Articles, Cover Note, Two-Track Memo — each '
          'with its own reader and its own focused draft.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the anatomy is five parts, each with a job and a reader: the Memorandum makes the "
          "case, the Preamble cites the authority, the Articles bind, the Cover Note transmits, and "
          "the Two-Track Memo squares the decree with the data-protection law. Knowing them is what "
          "lets you brief a Ministry of Justice with a near-complete package instead of waiting on "
          "one. This module builds each part, component by component.",
          practice=('Outline your decree\'s five components from your foundation',
                    'a structured five-component decree outline'))

sources_slide(prs, T, [
    'EU European Interoperability Framework — legal layer',
    'Decree model — Estonia, Information Society Services Act',
    'Decree model — EU Single Digital Gateway Regulation',
])


# ================================================================ 2.3
T = '2.3 · The Explanatory Memorandum and Preamble'
section('2.3', 'The Explanatory Memorandum and Preamble',
        'Draft the case-for and the recitals with Claude from your Strategic Foundation Document — '
        'then check every claim against a real statute.',
        "VO: The first two components of the decree are the ones a non-lawyer can lead on, because "
        "they are about the case and the context rather than the binding rules. The Explanatory "
        "Memorandum makes the case for the decree. The Preamble sets out the legal authority and the "
        "recitals. Both can be drafted from a document you already have — the Strategic Foundation "
        "Document from Module 1 — and both are exactly the kind of focused, well-bounded drafting task "
        "an AI assistant does well, with you reviewing.")

rows_block(prs, 'The Memorandum is the case, written for the minister',
           [('The problem the decree solves', 'Fragmentation; the citizen asked the same thing many '
                                              'times.'),
            ('What the decree does', 'In plain language.'),
            ('Why now', 'The cost of another year without a mandate.'),
            ('The expected benefit', 'To citizens and to the state.')],
           'Largely a translation of your Strategic Foundation Document.',
           T,
           "VO: The Explanatory Memorandum is the case, written for the minister and the cabinet, not "
           "the lawyer. It states the problem the decree solves — fragmentation, the citizen asked the "
           "same thing many times. It says what the decree does, in plain language. It says why now — "
           "the cost of another year without a mandate. And it names the expected benefit. If you "
           "wrote a good Strategic Foundation Document in Module 1, the Memorandum is largely a "
           "translation of it into the form a Ministry of Justice expects. That is a task you can hand "
           "to Claude with the foundation document as input.")

rows_block(prs, 'The Preamble: every cited authority is a [confirm]',
           [('The recitals', 'The formal findings the decree rests on.'),
            ('The legal authority', 'The constitutional or statutory power to make this decree.'),
            ('[confirm] on every citation', 'Until a qualified lawyer verifies the power exists and '
                                            'supports this decree.')],
           'A wrong authority citation is the fastest way to have the whole decree sent back.',
           T,
           "VO: The Preamble is different. It sets out the recitals — the formal findings the decree "
           "rests on — and, critically, the legal authority: the constitutional or statutory power "
           "under which the decree is made. Here the AI is useful for structure and for a first draft "
           "of the recitals, but every citation of authority is a placeholder — a [confirm] — until a "
           "qualified lawyer verifies that the cited power actually exists and actually supports a "
           "decree of this kind in your country. An invented or wrong authority citation is the "
           "fastest way to have the whole decree sent back. So the Preamble is generated as a "
           "scaffold, then verified line by line.")

panels(prs, 'Generate fast, confirm carefully',
       ('THE AI PLAY — NINETY PER CENT',
        ['Turns the foundation document into a Memorandum draft and a Preamble scaffold.',
         'In minutes.']),
       ('YOU — THE ESSENTIAL TEN',
        ['Confirm every legal citation against a real statute.',
         'Soften any claim the evidence does not support; mark the rest [confirm].']),
       'The AI accelerates the drafting. It does not get the law right for you.',
       T,
       "VO: This is the pattern for the whole Decree Drafting Kit, and it appears first here. The AI "
       "prompt for this video takes your Strategic Foundation Document and produces a "
       "Memorandum draft and a Preamble scaffold in minutes. That is the easy ninety per cent. The "
       "hard, essential ten per cent is yours: confirm every legal citation against a real statute, "
       "soften every claim the evidence does not support, and mark anything unverified as a [confirm] "
       "for the lawyer. Generate fast; confirm carefully. The AI accelerates the drafting; it does not "
       "get the law right for you.\n\n"
       "Production cue: the pivotal slide of this video — the pattern the rest of the kit repeats. "
       "Hold it a beat longer.")

big_slide(prs,
          'Generate the Memorandum and Preamble from your foundation document — then confirm every '
          'legal citation against a real statute before anyone relies on it.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the first two components come quickly, because the Memorandum restates a document "
          "you already have and the Preamble is a scaffold to be verified. Lead on the case, generate "
          "the drafts, and confirm the law. The hardest component is the Draft Articles — the binding "
          "rules themselves.",
          practice=('Generate the Explanatory Memorandum and Preamble',
                    'a Memorandum draft, a Preamble scaffold, and a list of [confirm] items for legal '
                    'review'))

sources_slide(prs, T, [
    'PAERA v1.0 — §3.2 (Legal layer)',
    'EU European Interoperability Framework (EIF)',
    'The Strategic Foundation Document (Module 1, video 1.4)',
])


# ================================================================ 2.4
T = '2.4 · The Draft Articles Package'
section('2.4', 'The Draft Articles Package',
        'The operative articles — mandatory connection, once-only, data protection — generated '
        'against published models, every clause confirmed, not invented.',
        "VO: The Draft Articles are the heart of the decree — the operative provisions, the binding "
        "rules. This is the component where precision matters most, where the cost of getting it wrong "
        "is highest, and where the discipline of generating against a published model, rather than "
        "from imagination, matters more than anywhere else. The articles are where the legal layer "
        "stops being an idea and becomes enforceable.")

rows_block(prs, 'A sound decree carries a recognisable set of articles',
           [('Scope and definitions', 'Which exchanges and which agencies the decree covers.'),
            ('Mandatory connection', 'Designated agencies shall connect to the bus.'),
            ('Once-only obligation', 'Do not ask a person for data the state already holds.'),
            ('Data protection and consent', 'Purpose limits, lawful basis, security safeguards.'),
            ('The principles', 'About ten, adopted from the European framework — not drafted fresh.'),
            ('The operating authority', 'Its powers and duties.'),
            ('Enforcement — a ladder, not a hammer',
             'Warning → fine → restricted access → suspension → Council of Ministers.')],
           None,
           T,
           "VO: A sound interoperability decree carries a recognisable set of articles. Scope and "
           "definitions — what exchanges and which agencies the decree covers. Mandatory connection — "
           "that designated agencies shall connect to the bus, turning interoperability from optional "
           "to required. The once-only obligation — that an agency shall not ask a person for data the "
           "state already holds and can lawfully fetch. Data protection and consent — the purpose "
           "limits, the lawful basis, the security safeguards. The principles the decree commits the "
           "state to — about ten, adopted from the European framework rather than drafted fresh: "
           "openness, transparency, reusability, technological neutrality, security by design, "
           "administrative simplification, preservation of information, assessment of effectiveness, "
           "once-only. The operating authority's powers and duties. And enforcement — what happens, and "
           "who decides, when an agency refuses to connect or to share. Enforcement is a ladder, not a "
           "hammer: a warning, then an administrative fine, then restriction of access to the "
           "framework's services, then suspension, then escalation to the Council of Ministers. Each "
           "step must be proportionate, or the first sanction applied is the one a court strikes "
           "down.\n\n"
           "Production cue: the densest slide of the module. Reveal the rows as they are named; hold "
           "the enforcement row.",
           top=1.4, bottom=6.85, head_size=17)

# The module's emotional peak — the only full-colour punch block in the deck.
block(prs, 'Every article is drafted against a published law',
      ['Mandatory connection against Estonia\'s Information Society Services Act. Once-only against '
       'the EU\'s Once-Only provisions. Safeguards against a recognised data-protection regime.',
       'No published model behind an article? It is a [confirm] for a lawyer, not a clause.'],
      'Invented legal text reads convincingly — and is worthless or harmful.',
      T,
      "VO: Here is the rule that keeps the articles safe. Each article is drafted against a named, "
      "published legal model — Estonia's Information Society Services Act for the structure of "
      "mandatory connection, the EU's Once-Only provisions for the once-only obligation, a recognised "
      "data-protection regime for the safeguards. The AI's job is to adapt a real, published article "
      "to your context — not to invent plausible-sounding legal text from nothing. Invented legal text "
      "is the single most dangerous output in this whole knowledge product: it reads convincingly and "
      "is worthless or harmful. If no published model stands behind an article, it is a [confirm] for "
      "a lawyer, not a clause you ship.\n\n"
      "Production cue: the most important safeguard in the module, and its one full-colour block. "
      "Hold it a beat longer.",
      punch_fill=ITU_BLUE, punch_ink=WHITE, punch_y=4.85)

block(prs, 'The articles are where business and IT share one language',
      ['The mandatory-connection and once-only articles describe, in law, exactly the exchanges the '
       'architects will build.',
       'If the two sides disagree on what they cover, the decree authorises one thing and the bus '
       'carries another.'],
      'One binding text: the policy side writes it, the technical side implements it.',
      T,
      "VO: There is a reason the Strategist, not only the lawyer, must understand these articles. The "
      "mandatory-connection article and the once-only article describe, in legal language, exactly "
      "the exchanges the architects will build in the technical layer. If the legal-and-policy side "
      "and the IT side do not agree on what those articles cover, the decree will authorise one thing "
      "and the bus will carry another. The articles are where the two sides meet — the decree is the "
      "rare artefact where business and IT share one language, a single binding text that the policy "
      "side writes and the technical side implements. Getting them aligned here saves a painful "
      "discovery later.")

big_slide(prs,
          'Generate each article against a named published law, confirm every clause with a lawyer, '
          'and make the binding rules match exactly the exchanges you will build.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the Draft Articles are generated, one article at a time, each against a named "
          "published model, each carrying its [confirm] flags until a lawyer signs it off — and each "
          "aligned with the exchanges the framework will actually carry. This is the most demanding "
          "component and the most important. Once drafted, the finished package goes to the Ministry "
          "of Justice.",
          practice=('Draft one operative article against a published model',
                    'a draft article with [confirm] placeholders and flagged terms'))

sources_slide(prs, T, [
    'Estonia — Information Society Services Act',
    'EU Once-Only Regulation',
    'PAERA v1.0 — §5.2, Principle #5 (Once-Only)',
    'Your national data-protection framework',
])


# ================================================================ 2.5
T = '2.5 · The Cover Note and Two-Track Regulatory Memo'
section('2.5', 'The Cover Note and Two-Track Regulatory Memo',
        'Transmit the package with a specific ask, and show how the decree and the data-protection '
        'law fit together — so the decree moves instead of sitting in a queue, and the '
        'data-protection authority backs it instead of blocking it.',
        "VO: You can have a perfect Memorandum, Preamble and set of Articles, and still watch the "
        "decree stall — in a Ministry of Justice queue, or in a challenge from the data-protection "
        "authority. The last two components of the kit exist to stop both. The Cover Note transmits "
        "the package with a specific ask. The Two-Track Regulatory Memo shows how this decree and the "
        "country's personal-data-protection law run as two coordinated tracks, not two competing "
        "ones.")

rows_block(prs, 'The Cover Note: what it is, what you ask, and by when',
           [('What this package is', 'In three lines a busy official reads in thirty seconds.'),
            ('Exactly what is being asked',
             'Perfect the Articles · confirm the authorities · advise the route: a decree, or '
             'primary legislation.'),
            ('The timeline', 'And what it costs the country if the decree slips.')],
           'A clear ask moves. A thick document with no request waits.',
           T,
           "VO: The Cover Note is short and does three things. It says what the package is, in three "
           "lines a busy official reads in thirty seconds. It says exactly what is being asked — review "
           "and perfect the Articles, confirm the Preamble's authorities, and advise on the route to "
           "enactment: an executive decree, faster and lighter to amend but dependent on an enabling "
           "law, or primary legislation through parliament, slower but able to create authority that "
           "does not yet exist. And it states the timeline and what it costs the country if the decree "
           "slips. A clear ask moves; a thick document with no covering request waits.")

panels(prs, 'Two laws, one set of data — the memo shows where they meet',
       ('THE INTEROPERABILITY DECREE',
        ['Mandates connection and once-only.',
         'Names the operating authority.',
         'Sets sanctions.']),
       ('THE DATA-PROTECTION LAW',
        ['Lawful bases and data-subject rights.',
         'The data-protection authority and its officers.',
         'Its own sanctions.']),
       'They meet at: definitions · consent · cross-border transfers · the Data Protection Officer · sanctions',
       T,
       "VO: The Two-Track Regulatory Memo takes the two instruments that both govern the same data — "
       "the interoperability decree and the personal-data-protection law, whether that law is in "
       "force, in parliament, or still a draft — and lays out where they meet. The same definitions, "
       "or different ones. Consent and data-subject rights. Cross-border transfer. The Data Protection "
       "Officer each member must name. And two sanctions regimes that could punish one breach twice. "
       "For each meeting point the memo says one of three things: here the decree defers to the "
       "data-protection law and cross-references it; here the decree fills a gap the data-protection "
       "law leaves, in a way that stays compatible when that law is enacted; here the two could "
       "conflict, and this is how the conflict is resolved.\n\n"
       "Production cue: the pivotal slide of this video. Reveal the meeting-points line last.",
       right_fill=LIGHT)

block(prs, 'The memo turns the data-protection authority into a co-signer',
      ['A decree drafted in isolation is the decree the data-protection authority challenges.',
       'The memo proposes the coordination: joint subordinate regulation, a memorandum of '
       'understanding between the two authorities, joint enforcement.'],
      'Skip it, and the collision surfaces after enactment — in court.',
      T,
      "VO: Here is why this memo, and not a thicker set of articles, is what gets a decree enacted. A "
      "decree drafted in isolation from the data-protection law is exactly the decree the "
      "data-protection authority challenges — and a challenge from a regulator is the delay no Cover "
      "Note can talk past. The memo turns that regulator into a partner: it proposes the coordination "
      "mechanisms — joint subordinate regulation issued by the operating authority and the "
      "data-protection authority together, a memorandum of understanding between them, joint "
      "enforcement so a breach is sanctioned once. And it names the risk if the data-protection law "
      "changes materially while the decree is in the drafting cycle, and the forward-compatible "
      "choices that keep the decree standing when it does.")

big_slide(prs,
          'Transmit with a specific ask, and show the decree and the data-protection law as two '
          'coordinated tracks — so enactment is a decision, and the data-protection authority is a '
          'co-signer.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the Cover Note and the Two-Track Memo are what carry a finished kit across the line. "
          "A specific ask an official can act on — including the route to enactment. And a clean "
          "showing that the decree and the data-protection law fit together, so the one regulator who "
          "could stop it signs it instead. With these, the package moves. What remains is to read the "
          "finished decree back against the framework, as configuration.",
          practice=('Draft the Cover Note and the Two-Track Regulatory Memo',
                    'a Cover Note and a Two-Track Regulatory Memo coordinating the decree with the '
                    'data-protection law'))

sources_slide(prs, T, [
    'EU European Interoperability Framework — legal and governance layers',
    'Your country\'s personal-data-protection law and data-protection authority',
    'Your national legislative-process references',
])


# ================================================================ 2.6
T = '2.6 · The decree as configuration'
section('2.6', 'The decree as configuration',
        'The finished decree authorises exactly the exchanges in your Use-Case Catalogue — read it '
        'as the legal configuration that binds the technical bus.',
        "VO: There is one last thing to do with a finished decree before it goes to the bus, and it is "
        "the step most teams skip. Read the decree back against the Use-Case Catalogue from Module 1, "
        "and check that the two match. The decree is not a document that sits beside the technical "
        "framework. It is the legal configuration of it — the binding text that says which exchanges "
        "are lawful and required. If the decree and the catalogue disagree, the framework will "
        "authorise one thing and carry another.\n\n"
        "Retrieval prompt — ask before playing on: a decree and a catalogue can disagree in two "
        "directions. What are they? Answer on the next slide.")

panels(prs, 'Two checks: no less, and no more',
       ('COVERAGE — NO LESS',
        ['Every exchange in the catalogue has a lawful basis in the decree.',
         'A catalogue entry with no legal basis is an exchange you cannot build.']),
       ('SCOPE DISCIPLINE — NO MORE',
        ['No article authorises an exchange outside the catalogue or the principles.',
         'Broader powers than needed are a privacy risk and a political liability.']),
       'The decree should authorise exactly the framework\'s exchanges.',
       T,
       "VO: Run two checks. The first is coverage: every exchange in your Use-Case Catalogue must "
       "have a lawful basis somewhere in the decree. If the catalogue says the examination authority "
       "will fetch a learner's identity from the identity authority, the decree's articles must make "
       "that exchange lawful. A catalogue entry with no legal basis is an exchange you cannot build. "
       "The second check is the reverse — scope discipline: no article should authorise an exchange "
       "that is not in your catalogue or required by your principles. A decree that grants broader "
       "data-sharing powers than the framework actually needs is a privacy risk and a political "
       "liability. The decree should authorise exactly the framework's exchanges. No less, and no "
       "more.\n\n"
       "Production cue: the pivotal slide of this video, and it answers the retrieval prompt set on "
       "the opener. Hold it a beat longer.",
       right_fill=LIGHT)

rows_block(prs, 'The decree says, in law, what the bus does, in software',
           [('The mandatory-connection article makes agencies members of the bus',
             'The legal text creates the obligation the technical onboarding fulfils.'),
            ('The once-only obligation makes the exchange required',
             'Not a favour the providing agency may decline.')],
           'Read together, they are configuration — one binding, one running.',
           T,
           "VO: Once it matches, the decree binds the technical bus in concrete ways. The "
           "mandatory-connection article means the agencies it names must actually become members on "
           "the bus — the legal text creates the obligation that the technical onboarding fulfils. The "
           "once-only obligation means a covered exchange is required, not a favour the providing "
           "agency may decline. So the legal layer and the technical layer are two views of the same "
           "thing: the decree says, in law, what the bus does, in software. Read together, they are "
           "configuration — one binding, one running.",
           numbered=False)

block(prs, 'In the build pack, the decree is the legal-layer configuration',
      ['Its acceptance check is the match you just ran: every catalogue exchange has a lawful basis, '
       'and no article over-reaches.',
       'The once-only demonstration later in this knowledge product runs under this decree.'],
      'Pass that check, and the legal layer is done — verified, not filed and forgotten.',
      T,
      "VO: This is why, in the runnable build pack that accompanies this knowledge product, the decree "
      "is the legal-layer artefact — the first real configuration the framework produces. And its "
      "acceptance check is exactly the match we just ran: every catalogue exchange has a lawful basis "
      "in the decree, and no article over-reaches beyond the catalogue and the principles. When that "
      "check passes, the legal layer of the framework is genuinely done — not a document filed and "
      "forgotten, but a verified configuration the rest of the build depends on. The once-only "
      "demonstration later in the knowledge product runs under this decree.")

big_slide(prs,
          'A decree is finished not when it is signed, but when it authorises exactly the exchanges '
          'your framework will carry — no less, and no more.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So read your decree as configuration. A decree is finished not when it is signed, but "
          "when it authorises exactly the exchanges your framework will carry — every one with a lawful "
          "basis, and none beyond what the framework needs. That match is the legal layer's acceptance "
          "check, and passing it hands a verified legal configuration to the architects who build the "
          "bus. That is the whole job of Module 2: not paperwork, but the on-switch, checked.",
          practice=('Check your decree authorises exactly your catalogue',
                    'a coverage table plus lists of uncovered exchanges and over-reaching articles'))

sources_slide(prs, T, [
    'PAERA v1.0 — §3.2 (Legal layer)',
    'EU European Interoperability Framework (EIF)',
    'The Use-Case Catalogue (Module 1, video 1.5)',
])


# ================================================================ Thank you
s = add_slide(prs, LAYOUT_THANKS)
notes(s, 'Closing slide for the combined deck. Individual videos end on their sources slide instead.')

# Self-check: the split spec's slide ranges depend on this count, and a helper that
# silently stops drawing shows up first as a slide with no voice-over.
assert len(prs.slides._sldIdLst) == 46, 'slide count changed — re-run the split with --infer-ranges'
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
    'videos', 'module_2', 'en', 'decks', 'KP2_M2_Deck_v0.1.pptx')
os.makedirs(os.path.dirname(OUT), exist_ok=True)
prs.save(OUT)
print('slides:', len(prs.slides._sldIdLst))
print('saved', OUT)

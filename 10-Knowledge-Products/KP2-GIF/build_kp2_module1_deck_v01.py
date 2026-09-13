#!/usr/bin/env python3
# Build the KP2 Module 1 (Topic 1) video deck on the ITU template — v0.1.
# Content follows KP2_Module1_Script_Bundle_v0.2 (build_kp2_module1_v02.js): seven videos,
# 1.1 – 1.7, Strategist-facing. Every VO paragraph in the notes is a verbatim
# scriptBeats[].text from the .js (vo_diff.py proves it); the recap slide of every video
# carries the un-narrated practice box (plan D5) — task = the AI tip's title, artefact = the
# Output half of the tip's io (the KP2 bundles carry no separate `practice` field).
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
    INK, ITU_BLUE, ITU_BLUE_DARK, LIGHT, WHITE,
    LAYOUT_THANKS, LAYOUT_WHITE,
    add_slide, big_slide, block_slide, box, delete_template_slides, edit_agenda,
    edit_cover, footer, notes, open_template, rows_block, section_slide, set_text,
    sources_slide, title, two_panel)
from deck_diagrams import node

prs = open_template(os.environ.get('TEMPLATE'))

AUDIENCE = 'National interoperability authority · ministry CIO · development-partner lead'

# The practice box is the video's only call to action and is never narrated (plan D5).
PRACTICE_NOTE = ('PRACTICE BOX (on-screen only — never read it, never paraphrase it, never point '
                 'at it). It replaces the narrated handoff: this video ends on the recap and the '
                 'Sources slide.')


# Most text-block slides here carry a two-sentence lead and most comparisons three short lines a
# side — the same shape Module 5 of KP1 tuned these two values for.
def block(prs, *a, **k):
    k.setdefault('punch_y', 4.35)
    return block_slide(prs, *a, **k)


def panels(prs, *a, **k):
    k.setdefault('height', 3.2)
    return two_panel(prs, *a, **k)


# Opener (hook) slide copy per video — headline + two to four supporting lines, written from
# the same opener narration the hook's note carries. Not a preview of the next slide's list.
HOOKS = {'1.1': ('The requirement is written down. The result is not there.',
                 ['Every new contract already says: provide open interfaces.',
                  'The citizen still gives her ID number on paper — to the health ministry, and '
                  'again at her child\'s school.']),
         '1.2': ('Most failed exchanges had working wires.',
                 ['People assume the problem is technical. Sometimes it is.',
                  'More often the exchange fails at a layer nobody built.']),
         '1.3': ('The state never asks you for the same information twice.',
                 ['That is the outcome interoperability is for.',
                  'And it is the clearest test of whether your framework works.']),
         '1.4': ('One short document, before a single system is connected.',
                 ['A handful of pages, not a tome.',
                  'Skip it, and every meeting re-opens the same arguments.']),
         '1.5': ('A map of everything connecting to everything cannot be built.',
                 ['Start from your integration map: which government systems ought to exchange what.',
                  'No map yet? Inventory your systems, who owns them and the data they hold — first.',
                  'The catalogue turns the map into a short list of what to build next.']),
         '1.6': ('A bus with no members carries nothing.',
                 ['Interoperability is at least as much an agreement problem as a technical one.',
                  'Map the people whose agreement you need before you build.']),
         '1.7': ('You are not the first country to build this.',
                 ['The pattern has run for years, at national and cross-border scale.',
                  'The most expensive mistake is rebuilding a standard that already exists.'])}


def section(code, name, message, note):
    # No runtime on the title card: the narration is generated per take and its length moves
    # with every re-roll (KP1 dropped it on 12 Sep 2026).
    s = section_slide(prs, 'KP2 · MODULE 1 · VIDEO %s' % code, code, name, message,
                      'standalone video · voice-over on text slides', TITLE_CARD_NOTE)
    head, lines = HOOKS[code]
    hook_slide(prs, head, lines, '%s · %s' % (code, name), note)
    return s


def layer_stack(prs, head, closing, tag, note):
    """The module's centrepiece: the four layers drawn as a stack, Legal on top."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head)
    layers = [('LEGAL', 'The mandate that makes the exchange lawful.', ITU_BLUE_DARK, WHITE),
              ('ORGANISATIONAL', 'Who agrees to exchange with whom — and who governs it.', LIGHT, INK),
              ('SEMANTIC', 'What the data actually means.', LIGHT, INK),
              ('TECHNICAL', 'The wires, the bus, the message format.', LIGHT, INK)]
    for i, (name, gloss, fill, ink) in enumerate(layers):
        node(s, 0.72, 1.65 + i * 1.1, 11.9, 0.95, name, [gloss], fill=fill, ink=ink,
             head_ink=WHITE if fill == ITU_BLUE_DARK else ITU_BLUE_DARK, head_size=15, size=15)
    tb = box(s, 0.72, 6.2, 11.9, 0.6)
    set_text(tb.text_frame, [[(closing, 15.5, True, ITU_BLUE_DARK, False)]])
    footer(s, tag)
    notes(s, note)
    return s


# ---------------------------------------------------------------- COVER (edit slide 1)
edit_cover(
    prs,
    title_text='Why a Government\nInteroperability Framework',
    kicker='KP2 · Government Interoperability Framework · Module 1',
    blurb='Seven standalone videos for the person who mandates the framework: why '
          'interoperability cannot be bought but must be built, the four layers it is made of, '
          'the once-only outcome it is for, the three foundation artefacts that start the work — '
          'and the evidence that the pattern is already proven.',
    length='~31 mins across 7 videos (1.1 – 1.7)',
    audience=AUDIENCE,
    panel_heading='WHAT THIS MODULE SETTLES',
    panel_items=['Built, not bought',
                 'Four layers — skip none',
                 'Once-only — the outcome and the test',
                 'Three foundation artefacts',
                 'A pattern the world already proved'],
    panel_footer='4 layers · 3 foundation artefacts · 1 once-only test',
    note_text='Cover for the combined Module 1 deck. Each section that follows is one standalone '
              '~4–5 minute video. This is the Strategist-facing entry point to KP2 — the national '
              'interoperability authority, the ministry CIO, the Ministry of Justice sponsor, the '
              'development-partner lead. Where Enterprise Architecture plans the whole of government, '
              'this knowledge product teaches how to build the interoperability layer over that plan.')

# ---------------------------------------------------------------- AGENDA (edit slide 2)
edit_agenda(
    prs,
    header='Module 1 — seven videos',
    items=[
        ('1.1  Why interoperability can\'t be bought, only built', '~5 min'),
        ('1.2  The four layers of interoperability', '~5 min'),
        ('1.3  The once-only promise', '~4 min'),
        ('1.4  The Strategic Foundation Document', '~4 min'),
        ('1.5  The Use-Case Catalogue', '~5 min'),
        ('1.6  Mapping your stakeholders', '~4 min'),
        ('1.7  What the world already proved', '~4 min'),
    ],
    message_paras=[
        'Interoperability is planned for the whole of government and built in four layers — '
        'procurement only enforces it.',
        'Once-only is the test. Three short artefacts start the work, and the pattern is already '
        'proven.',
    ],
    note_text='Navigation slide for the combined deck; the videos ship standalone on YouTube. '
              '1.1 to 1.3 are the why — built not bought, the four layers, the once-only outcome. '
              '1.4 to 1.6 are the three foundation artefacts. 1.7 is the evidence.')

delete_template_slides(prs, keep=2)


# ================================================================ 1.1
T = '1.1 · Why interoperability can\'t be bought, only built'
section('1.1', 'Why interoperability can\'t be bought, only built',
        'Procurement rules can require interoperability. Only whole-of-government planning '
        'delivers it — and once the framework exists, procurement is how you enforce it.',
        "VO: Your government has probably already required interoperability. Every new system "
        "contract says the supplier must provide open interfaces. The national digital strategy "
        "says systems must connect. And yet the citizen still gives her ID number to the health "
        "ministry on paper, and gives it again on paper when she enrols her child in school. The "
        "requirement is written down. The result is not there. The question this video answers is "
        "why — and what actually works instead.")

panels(prs, 'A rule can require behaviour. It cannot make it the cheapest choice',
       ('THE CONTRACT SAYS',
        ['Provide open interfaces.',
         'Connect to the other ministries\' systems.']),
       ('THE PROJECT ASKS',
        ['What is the fastest way to ship on time and on budget?',
         'A point-to-point link of our own is faster.']),
       'That is not indiscipline. It is the project doing exactly what it was funded to do.',
       T,
       "VO: Here is the uncomfortable truth. A procurement rule can require a behaviour. It "
       "cannot make that behaviour the cheapest choice for the team doing the work. Inside any "
       "one project, the team has a budget and a deadline. Connecting to another ministry's "
       "system means learning that system, negotiating with that ministry's people, and waiting "
       "for their timelines. Building a quick point-to-point link of their own is faster. So they "
       "build their own. That is not indiscipline. That is the project doing exactly what it was "
       "funded to do.")

rows_block(prs, 'Every link is built from scratch — again',
           [('Last year: the tax office connected to the business register',
             'Built from zero.'),
            ('This year: the health ministry needs the same data',
             'Built from zero again.'),
            ('Next year: a third connection, from zero',
             'The bus that should carry them all does not exist.')],
           'Private, undocumented, and broken when either side changes. Nobody\'s job was to plan the road.',
           T,
           "VO: The result is point-to-point sprawl. Last year your team connected the tax office "
           "to the business register, and built that connection from scratch. This year the health "
           "ministry needs the same data, and the connection is built again, from scratch. Each "
           "link is private, undocumented, and breaks when either side changes. Nobody planned the "
           "shared road that every one of these journeys should travel on. There was no one whose "
           "job it was to plan it.\n\n"
           "Production cue: the recognition moment — the viewer has lived this. Reveal the rows "
           "one year at a time.")

rows_block(prs, 'Only the whole-of-government view makes interoperability rational',
           [('The first agency pays to build the shared exchange', ''),
            ('The second does not — it connects once and reuses', ''),
            ('The third and fourth do the same', ''),
            ('The country builds the road once, and everyone drives on it', '')],
           'That view exists only across the whole portfolio — and someone has to hold it on purpose.',
           T,
           "VO: Interoperability becomes the rational choice only from one vantage point — the "
           "whole of government. From there the maths changes. The first agency pays to build a "
           "shared way to exchange data. The second agency does not build its own; it connects to "
           "the shared one. The third and fourth do the same. The country builds the road once, and "
           "every agency reuses it. But this view does not exist inside any single project. It "
           "exists only at the level of your country's whole digital portfolio — and someone has to "
           "hold it deliberately. That is what an interoperability framework is for.\n\n"
           "Production cue: the pivotal slide of this video — planning is what makes re-use "
           "possible. Hold it a beat longer.")

rows_block(prs, 'A framework is four parts no contract clause can deliver',
           [('Legal', 'The mandate that makes exchange lawful and connection mandatory.'),
            ('Organisational', 'Who governs the bus, who joins, who is accountable.'),
            ('Semantic', 'Agreed meaning, so two agencies mean the same thing.'),
            ('Technical', 'The shared bus and the standards every member uses.')],
           'No procurement clause produces any of them. Only planning for the whole government does.',
           T,
           "VO: A framework is the plan, made of four parts that a contract clause cannot deliver. "
           "A legal mandate that makes data exchange lawful and connection mandatory. An "
           "organisational layer that names who owns the bus, who may join, and who is accountable. "
           "A semantic layer so that two agencies mean the same thing by the word 'learner'. And a "
           "technical layer — the shared bus and the standards every member uses. This knowledge "
           "product builds all four, in order, for a real exchange. The point here is that no "
           "procurement clause produces any of them. Only planning at the level of the whole "
           "government does.",
           numbered=False)

rows_block(prs, 'You will still buy — the framework changes what the tender says',
           [('What is still procured',
             'The platform, the security servers, the integration work — against the reference '
             'architecture as the spec.'),
            ('What every tender now says',
             'The framework\'s rules, as mandatory requirements. The buyer owns the architecture, '
             'not the vendor.'),
            ('What the contract is for',
             'A working, accepted platform — acceptance tests, warranty, penalties. Not advice.')],
           'Plan the framework first. Then let procurement enforce it.',
           T,
           "VO: None of this means you stop procuring. You will still buy — the central platform, "
           "the security servers, the integration services. What the framework changes is what the "
           "tender says. Once the framework exists, its reference architecture is the "
           "specification, its rules go into every new tender as mandatory requirements, and the "
           "country owns the architecture rather than inheriting whichever one the winning vendor "
           "brought. And the platform itself is bought as a working, accepted result — with "
           "acceptance tests, a warranty and penalties for delay — not as a consulting exercise. So "
           "the sequence is the whole lesson: plan the framework first, then let procurement "
           "enforce it. The toolkit behind this knowledge product carries that path, from reference "
           "architecture to an issuable tender.")

big_slide(prs,
          'Procurement can require interoperability. Only a planned framework can deliver it — and '
          'once it exists, procurement is how you enforce it.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: That is the case to make. Rules can require interoperability; only a framework, "
          "planned once for the whole of government, can deliver it — and once it exists, every "
          "tender carries its rules. Framework first, procurement as its lever.",
          practice=('Diagnose where your country procures interoperability instead of planning it',
                    'a diagnostic table plus a 3-bullet summary'))

sources_slide(prs, T, [
    'EU European Interoperability Framework (EIF)',
    'NIIS X-Road documentation (niis.org)',
    'PAERA v1.0 — §3.4.3 (Interoperability framing)',
    'PAERA v1.0 — §5.2 (Principles: Whole-of-Government, Once-Only)',
])


# ================================================================ 1.2
T = '1.2 · The four layers of interoperability'
section('1.2', 'The four layers of interoperability',
        'Interoperability fails at whichever of the four layers — Technical, Semantic, '
        'Organisational, Legal — you skip. The framework makes you address all four on purpose.',
        "VO: When two government systems fail to work together, people usually assume the problem "
        "is technical — a missing connection, an old system. Sometimes it is. More often, the wires "
        "are fine and the exchange still fails, because interoperability is not one thing. It is "
        "four. The European Interoperability Framework, and the X-Road systems built on it, "
        "describe interoperability as four layers stacked together. Skip any one, and the exchange "
        "breaks at that layer.\n\n"
        "Retrieval prompt — ask before playing on: think of an exchange between two ministries "
        "that stalled. Was the wire the problem? Answer on the Technical slide: usually not.")

# The module's centrepiece.
layer_stack(prs, 'Interoperability is four layers — a real exchange needs all four',
            'Skip any one, and the exchange breaks at that layer.',
            T,
            "VO: Picture the four layers stacked. At the bottom, technical — the wires, the bus, the "
            "message format. Above it, semantic — what the data actually means. Above that, "
            "organisational — who agrees to exchange data with whom, and who governs the "
            "arrangement. And at the top, legal — the mandate that makes the whole exchange lawful. "
            "A real exchange needs all four. Let us take them one at a time, from the one people "
            "think about first.\n\n"
            "Production cue: the centrepiece of the module — the spine every later video returns "
            "to. Reveal the layers bottom to top. Hold it a beat longer.")

block(prs, 'Technical — necessary, not sufficient',
      ['A shared bus and shared standards, so connecting is a one-time setup — not a new project '
       'each time.',
       'X-Road is one such bus. And it is not even the hardest part.'],
      'A working wire that carries the wrong meaning is still a failed exchange.',
      T,
      "VO: The technical layer is the shared bus and the standards every member uses — so that "
      "connecting is a one-time setup, not a new project each time. X-Road is one such bus. This "
      "layer is necessary. But it is not sufficient, and it is not even the hardest part. A "
      "perfectly working wire that delivers data the receiving agency misreads is still a failed "
      "exchange.\n\n"
      "Production cue: this slide answers the retrieval prompt set on the opener.")

block(prs, 'Semantic — two agencies must mean the same thing',
      ['The agriculture ministry\'s "farmer" and the cooperative bank\'s "farmer" must be the same '
       'person, identified the same way — or combining them does harm.',
       'Agreeing what "learner" or "enrolment" means is a business decision, written down precisely '
       'enough for systems to use.'],
      'Without a shared vocabulary, the wire carries confident nonsense.',
      T,
      "VO: The semantic layer is meaning. The agriculture ministry's record of a 'farmer' and the "
      "cooperative bank's record of a 'farmer' must point to the same person, identified the same "
      "way, or combining them does harm. This is where business and IT must speak a shared "
      "language — because agreeing what 'learner' or 'farmer' or 'enrolment' means is a business "
      "decision that only the people who own the data can make, written down precisely enough for "
      "the systems to use. The framework gives both sides that shared vocabulary. Without it, the "
      "wire carries confident nonsense.",
      punch_y=4.85)

rows_block(prs, 'Organisational — a governing body turns favours into a federation',
           [('Who provides which data, to whom, for what purpose', ''),
            ('What service to expect', 'Uptime, response, support.'),
            ('A governing body', 'Admits members and resolves disputes.')],
           'Where the business side decides what may be shared and why, and IT decides how.',
           T,
           "VO: The organisational layer is agreement and governance. Which agency provides which "
           "data, to which other agency, for what purpose, at what level of service. Who is "
           "accountable when an exchange fails. Who admits a new member to the bus and who resolves "
           "a dispute between two members. This is the layer where the minister and the chief "
           "architect sit at the same table — the business side deciding what may be shared and "
           "why, the IT side deciding how — and where a governing body turns a set of bilateral "
           "favours into a dependable federation.",
           numbered=False)

block(prs, 'Legal — the mandate that makes exchange the default',
      ['A decree or law that makes cross-agency exchange lawful, makes connection mandatory, and '
       'protects the citizen\'s data.',
       'Without it, every exchange is a legal risk one cautious official can stop.'],
      'The decree is not paperwork. It is the on-switch.',
      T,
      "VO: And the legal layer is the mandate. A decree or a law that makes cross-agency exchange "
      "lawful in the first place, that makes connecting to the bus mandatory rather than optional, "
      "and that protects the citizen's data as it moves. Without the legal layer, every exchange is "
      "a standing legal risk that one cautious official can stop. With it, exchange is the default "
      "and refusing to connect is the exception that needs justifying. The decree is not paperwork. "
      "It is the on-switch.")

rows_block(prs, 'The layers lock together at three seams — so build them in parallel',
           [('Legal authorises organisational',
             'No decree, no authority to set a binding standard or sanction an agency.'),
            ('Organisational governs technical and semantic',
             'The operating authority publishes the standards and curates the vocabulary.'),
            ('Technical and semantic make the legal obligations enforceable',
             'A once-only rule on paper cannot be enforced until the bus runs and meaning is shared.')],
           'Never technical first and legal later.',
           T,
           "VO: The four layers are not four separate projects — they lock together at three seams. "
           "The legal layer authorises the organisational one: without a decree there is no "
           "authority to set a binding standard or to sanction an agency that ignores it. The "
           "organisational layer governs the technical and semantic ones: the operating authority "
           "is who publishes the standards and curates the shared vocabulary. And the technical and "
           "semantic layers are what make the legal obligations enforceable: a once-only rule on "
           "paper cannot be enforced until the bus runs and the two agencies mean the same thing. "
           "That is why the layers are built in parallel, never technical first and legal later.\n\n"
           "Production cue: the pivotal slide of this video. Hold it a beat longer.")

big_slide(prs,
          'Interoperability is four layers — technical, semantic, organisational, legal. It fails '
          'at whichever one you skip.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the discipline is simple to state and hard to skip: four layers, built in "
          "parallel, and a failure at whichever one you neglect. Most failed exchanges had working "
          "wires.",
          practice=('Map a planned exchange across the four layers — and find the missing one',
                    'a four-row layer-readiness table plus the binding-constraint call'))

sources_slide(prs, T, [
    'EU European Interoperability Framework — the four-layer model',
    'NIIS X-Road documentation (niis.org)',
    'PAERA v1.0 — §3.4.3 (Interoperability framing)',
])


# ================================================================ 1.3
T = '1.3 · The once-only promise'
section('1.3', 'The once-only promise',
        'Once-only — the state never asks a citizen for the same data twice — is the outcome '
        'interoperability is for, and the test of whether it works.',
        "VO: It is easy to talk about interoperability in terms of buses and standards and lose "
        "sight of what it is for. So here is the outcome, in one sentence a citizen would recognise: "
        "the state never asks you for the same information twice. Give your identity once, and every "
        "service that is entitled to it can get it — with your consent and a lawful basis — without "
        "asking you again. This is the once-only principle, and it is the single clearest test of "
        "whether your interoperability framework actually works.")

# The module's emotional peak — the only full-colour punch block in the deck.
block(prs, 'Without once-only, the citizen carries the same proof three times',
      ['She proves her identity at the ID office. She proves it again at the school to enrol her '
       'child. She proves it again at the clinic.',
       'The same document, the same queue, three times — because the agencies cannot ask each '
       'other.'],
      'The burden lands on the person with the least power to carry it.',
      T,
      "VO: Picture a citizen's day without it. She proves her identity at the identity office. She "
      "proves it again, on paper, when she enrols her child at school. She proves it a third time "
      "at the clinic. Same document, same queue, three times — not because anyone wants to harass "
      "her, but because each agency has no way to ask the agency that already holds the answer. "
      "The burden is pushed onto the person with the least power to carry it.\n\n"
      "Production cue: the empathy beat and the module's one full-colour block. Hold it a beat "
      "longer.",
      punch_fill=ITU_BLUE, punch_ink=WHITE)

rows_block(prs, 'Once-only is not a feature you switch on',
           [('A trusted source for each fact', 'One authoritative holder — not five copies that disagree.'),
            ('A lawful basis, and the citizen\'s consent', 'Where appropriate.'),
            ('A real-time way to fetch it', 'At the moment of service, over the bus.')],
           'It is what you get when the four layers are built correctly.',
           T,
           "VO: Once-only sounds simple, but it requires all four layers we just named, working "
           "together. It requires a trusted source for each fact — one authoritative holder of "
           "identity, one of enrolment, rather than five copies that disagree. It requires a lawful "
           "basis and, where appropriate, the citizen's consent. And it requires a real-time way to "
           "fetch the fact at the moment of service, over the bus, instead of asking the citizen to "
           "carry it. Once-only is not a feature you switch on. It is what you get when the four "
           "layers are built correctly.")

rows_block(prs, 'In Progressa, the learner is asked once',
           [('A learner applies for a credential', 'At the national examination authority (PNEA).'),
            ('The authority pre-fills instead of re-asking',
             'Identity from the identity authority (PNIA), enrolment from the learner registry '
             '(PLR) — over the bus.'),
            ('Asked once', 'The data is fetched, with a lawful basis, in seconds.')],
           'The exchange this whole framework exists to make possible — built live in Module 5.',
           T,
           "VO: We will build exactly this, on a real federation, later in the knowledge product. In "
           "our demonstration country, Progressa, a learner applies for a credential at the national "
           "examination authority. Without once-only, the authority asks the learner to bring proof "
           "of identity and proof of enrolment on paper. With once-only, the authority pre-fills the "
           "learner's identity from the national identity authority and the learner's enrolment from "
           "the learner registry — fetched over the bus, with a lawful basis, in seconds. The learner "
           "is asked once. That single exchange is the thing this whole framework exists to make "
           "possible.\n\n"
           "Production cue: the pivotal slide of this video. Hold it a beat longer.")

panels(prs, 'Once-only is the right north star',
       ('IT IS MEASURABLE',
        ['Count the times a citizen is asked for data the state already holds.',
         'Then drive that number down.']),
       ('IT KEEPS THE FRAMEWORK HONEST',
        ['A bus nobody uses for a real once-only exchange is not yet working.',
         'An impressive bus is easy to build. A used one is the test.']),
       'Until a citizen is no longer asked twice, the framework is plumbing — not yet a result.',
       T,
       "VO: Make once-only your north star, for two reasons. It is measurable — you can literally "
       "count the number of times a citizen is asked for data the state already holds, and drive "
       "that number down. And it keeps the framework honest. It is possible to build a technically "
       "impressive bus that no real service uses. Once-only is the test that cuts through that: "
       "until a real service fetches a real fact for a real citizen who is no longer asked twice, "
       "the framework is plumbing, not yet a result.")

big_slide(prs,
          'Once-only is the promise to the citizen and the test of the framework: ask once, fetch '
          'the rest — lawfully, with consent, over the bus.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So when you explain interoperability to your minister or your cabinet, lead with "
          "this. The framework is not about buses. It is about a promise to the citizen — ask once, "
          "and let the state fetch the rest, lawfully and with consent. Once-only is both the "
          "promise and the measure. Everything else in this knowledge product is in service of "
          "making that one sentence true in your country.",
          practice=('Find your country\'s highest-value once-only exchange',
                    'a ranked once-only opportunity table plus a first-exchange recommendation'))

sources_slide(prs, T, [
    'PAERA v1.0 — §5.2, Principle #5 (Once-Only)',
    'EU Once-Only Technical System (OOTS)',
    'EU European Interoperability Framework (EIF)',
])


# ================================================================ 1.4
T = '1.4 · The Strategic Foundation Document'
section('1.4', 'The Strategic Foundation Document',
        'Name the mandate, the scope and the principles once, in writing, before any wiring — it '
        'is what every later decision is checked against.',
        "VO: Before a single system is connected, before the decree is drafted, before the first "
        "agency joins the bus, there is one document to write. It is short — a handful of pages, "
        "not a tome. It is the Strategic Foundation Document, and its job is to answer the questions "
        "that every later decision will be tested against. Skip it, and every meeting re-opens the "
        "same arguments. Write it, and you have a reference you can point to when the arguments "
        "come — and they will.")

rows_block(prs, 'Four questions every later decision is tested against',
           [('Mandate', 'By whose authority does this framework exist?'),
            ('Scope', 'Which agencies and exchanges are in — and which are not, yet?'),
            ('Principles', 'The rules every design decision must honour.'),
            ('Success', 'How we will know it is working, in eighteen months.')],
           'The full template has seven sections — all of them serve these four questions.',
           T,
           "VO: The document answers four questions. By whose authority does this framework exist — "
           "the mandate? Which agencies and which exchanges are in scope, and just as importantly, "
           "which are explicitly out of scope for now? What principles must every design decision "
           "honour? And how will we know it is working — what does success look like in eighteen "
           "months? Four questions. Answer them on paper, once, with the people who can make the "
           "answers stick. On paper, the full template runs to seven sections — policy intent, the "
           "sectors that want it first, the Tier 1 commitments, the target benefits, the objectives "
           "for two years and five, the political sponsorship, and the next steps — but they all "
           "serve those four questions.",
           bottom=6.0)

rows_block(prs, 'Name the principles, and they settle arguments before they start',
           [('Whole-of-government', 'Build the shared road once, reuse it everywhere.'),
            ('Once-only', 'Ask the citizen once.'),
            ('Reuse-first and cross-border ready',
             'Prefer published standards and shared building blocks over bespoke.')],
           'Not slogans on a wall — the criteria for the next design, procurement and exception.',
           T,
           "VO: The principles are the heart of the document, because they settle arguments before "
           "they start. Name whole-of-government — we build the shared road once and reuse it, rather "
           "than each agency building its own. Name once-only — we ask the citizen once. Name "
           "reuse-first and cross-border readiness — we prefer published standards and shared "
           "building blocks over bespoke ones, and we design so that an exchange could one day cross "
           "a border. These are not slogans on a wall. They are the criteria you will hold the next "
           "design decision to, and the next procurement, and the next request for an exception.\n\n"
           "Production cue: the pivotal slide of this video. Hold it a beat longer.")

panels(prs, 'Write it before the wiring, not after',
       ('THE CONSTITUTION',
        ['Every later technical and legal choice is checked against it.',
         'No re-litigating first principles in a technical meeting.']),
       ('THE TEN-MINUTE ON-RAMP',
        ['A new minister, CIO or donor reads it to understand the framework.',
         'Ten minutes, not ten meetings.']),
       'The thing everyone checks against — and the thing everyone reads first.',
       T,
       "VO: Why write it first, before the interesting technical work? Two reasons. It becomes the "
       "constitution of the framework — when a later choice about a standard, or a member, or an "
       "exception comes up, you check it against the foundation rather than re-litigating first "
       "principles in a technical meeting. And it is the on-ramp for everyone who joins later. A new "
       "minister, a new agency CIO, a new development partner can read these few pages and "
       "understand what the framework is, what it covers, and what it stands for — in ten minutes, "
       "not ten meetings.")

block(prs, 'Keep it short, keep it owned',
      ['A handful of pages a busy minister will read — signed by the authority that mandates the '
       'framework.',
       'Living, not frozen: reviewed when scope expands, stable enough to be the reference.'],
      'The first artefact in your build pack — and the one every other artefact answers to.',
      T,
      "VO: Two cautions. Keep it short — a handful of pages that a busy minister will actually read "
      "and sign. And keep it owned — it carries the signature of the authority that mandates the "
      "framework, so that pointing to it carries weight. It is a living document, reviewed when the "
      "scope expands to new agencies or new exchanges, but it is stable enough to be the thing "
      "everyone points back to. The Strategic Foundation Document is the first artefact in your "
      "build pack, and the one every other artefact answers to.")

big_slide(prs,
          'Write the mandate, scope, principles and success measures on a few pages first — so '
          'every later decision has something to be checked against.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the first move, before any wiring, is this document. Write the mandate, the "
          "scope, the principles and the success measures on a few pages, get them signed by the "
          "right authority, and put them where everyone can find them. It is the cheapest insurance "
          "you will buy in the whole programme — because it is what every later, more expensive "
          "decision gets checked against.",
          practice=('Draft your Strategic Foundation Document',
                    'a ~2-page Strategic Foundation Document draft in four sections'))

sources_slide(prs, T, [
    'EU European Interoperability Framework — interoperability strategy and governance',
    'PAERA v1.0 — §3.4.3 (Interoperability framing)',
    'PAERA v1.0 — §5.2 (Principles: Whole-of-Government, Once-Only, Cross-border)',
])


# ================================================================ 1.5
T = '1.5 · The Use-Case Catalogue'
section('1.5', 'The Use-Case Catalogue',
        'Turn your integration map into a ranked catalogue of exchanges worth building — and start '
        'with the one that removes the most counters for citizens.',
        "VO: If your country has already planned its Enterprise Architecture — the "
        "whole-of-government picture of which systems exist and how they should fit together — you "
        "already have a first-cut integration map: a picture of which government systems ought to "
        "exchange what. That map is the input to this step. If you do not have one yet, build it "
        "first — inventory your government's systems, who owns them and the data they hold, and "
        "sketch which ought to exchange what. That inventory is the first step of any Enterprise "
        "Architecture — discovering what exists and assessing it — and the companion knowledge "
        "product on Government Enterprise Architecture walks you through it. It is the precondition for everything in this knowledge product; without a "
        "picture of your current systems, you cannot rank the exchanges worth building. On its own, "
        "a map of everything-connects-to-everything is overwhelming and undeployable. The Use-Case "
        "Catalogue turns it into a ranked list of specific exchanges, so the framework starts with "
        "the few that matter most instead of trying to boil the ocean.")

rows_block(prs, 'One row per exchange keeps the conversation specific',
           [('Who provides the data, and who consumes it', ''),
            ('What data — and the citizen service it enables',
             'No exchange is built just because it is technically possible.'),
            ('Readiness at each of the four layers', 'So you can see what is missing.'),
            ('Priority', 'Value to the citizen, weighed against the effort to build.')],
           None,
           T,
           "VO: The catalogue is a table, and each row is one concrete exchange. Each row names who "
           "provides the data and who consumes it. It names what data moves, and — crucially — the "
           "citizen-facing service that the exchange enables, so that no exchange is built just "
           "because it is technically possible. It records readiness at each of the four layers, so "
           "you can see what is missing. And it carries a priority, set by weighing the value to the "
           "citizen against the effort to build. One row per exchange keeps the conversation "
           "specific.",
           bottom=6.7)

panels(prs, 'As a catalogue entry, a map line becomes a decision',
       ('THE MAP SAYS',
        ['PNEA could use identity from PNIA and enrolment from PLR.',
         'A line on a picture — a possibility.']),
       ('THE CATALOGUE SAYS',
        ['That exchange, for the learner credential service.',
         'Technical: ready. Legal: not yet.',
         'High citizen value, medium effort — first wave.']),
       'The map shows what is possible. The catalogue decides what is next.',
       T,
       "VO: Take a line from the integration map: the examination authority could use identity from "
       "the identity authority and enrolment from the learner registry. As a map line, it is just a "
       "possibility. As a catalogue entry, it becomes a decision: this exchange, enabling this "
       "credential service for learners, ready at the technical layer but not yet at the legal one, "
       "high citizen value, medium effort — therefore a strong candidate for the first wave. The map "
       "shows what is possible. The catalogue decides what is next.\n\n"
       "Production cue: the pivotal slide of this video. Reveal the right panel on 'As a catalogue "
       "entry'.",
       right_fill=LIGHT)

panels(prs, 'Rank on two axes — and build the high-high ones first',
       ('VALUE',
        ['How much citizen burden does this exchange remove?',
         'Count the counters and the repeated forms.']),
       ('FEASIBILITY',
        ['How ready are the four layers?',
         'How willing is the agency that owns the data?']),
       'The first builds prove the framework and build the appetite for the harder ones.',
       T,
       "VO: Rank on two axes. Value: how much citizen burden does this exchange remove? An exchange "
       "that lets thousands of parents stop carrying a document to enrol a child is worth more than "
       "one that saves a few officials a query. Count the counters. And feasibility: how ready are "
       "the four layers, and how willing is the agency that owns the data? An exchange where the "
       "provider agency is eager and the legal basis is close is more feasible than one where the "
       "data owner is reluctant. The first exchanges to build are the high-value, high-feasibility "
       "ones — they prove the framework and build the appetite for the harder ones.")

block(prs, 'Start small and visible — not with twenty exchanges',
      ['One real once-only exchange, working end to end, convinces more agencies than any strategy '
       'document.',
       'The catalogue is the backlog: nothing is forgotten, and the rest wait their turn in priority '
       'order.'],
      'Each delivered exchange is a visible win to point to before the next tranche.',
      T,
      "VO: Resist the urge to launch with twenty exchanges. One real once-only exchange, working "
      "end-to-end, convinces more agencies to join than any strategy document ever will. The "
      "catalogue holds the rest as a prioritised backlog — nothing is forgotten, but the team works "
      "the list in order. This is also how you keep the framework funded: each delivered exchange is "
      "a visible win you can point to before asking for the next tranche, instead of a long silence "
      "followed by a big-bang launch that may slip.")

big_slide(prs,
          'The Use-Case Catalogue turns a map of everything into a ranked list of next things — '
          'starting with the exchange that removes the most counters.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the second foundation artefact, after the Strategic Foundation Document, is the "
          "Use-Case Catalogue. It turns your integration map from a picture of everything into a "
          "ranked list of next things. It keeps the framework specific, fundable and honest about "
          "priorities. And it gives the architects who design the exchanges a clear first target — "
          "the highest-value, most-feasible exchange — to design and build for real.",
          practice=('Build your Use-Case Catalogue from your integration map',
                    'a Use-Case Catalogue table plus a ranked first-wave shortlist of three'))

sources_slide(prs, T, [
    'PAERA v1.0 — §3.4.3 (Interoperability framing)',
    'EU European Interoperability Framework — interoperability agreements',
])


# ================================================================ 1.6
T = '1.6 · Mapping your stakeholders'
section('1.6', 'Mapping your stakeholders',
        'Sort the agencies into Champions, Early Adopters and Observers, and you know who to '
        'onboard first and who to convince.',
        "VO: Interoperability is often described as a technical problem. It is at least as much an "
        "agreement problem. A bus with no members carries nothing. So before you build, you map the "
        "people whose agreement you need — the agencies who will provide data, the agencies who will "
        "consume it, and the leaders whose support or resistance will decide whether the framework "
        "lives. This map is the third foundation artefact, and it is what turns a good design into a "
        "thing that actually gets adopted.\n\n"
        "Retrieval prompt — ask before playing on: in a data exchange, which agency is more likely "
        "to stall it — the one that receives the data, or the one that gives it? Answer on the "
        "provider-and-consumer slide.")

rows_block(prs, 'Sort every agency into one of three tiers',
           [('Champions', 'Want this now, and will go first.'),
            ('Early Adopters', 'Willing — once they see it work.'),
            ('Observers', 'Not yet convinced, watching from the side.')],
           'You treat each tier differently. Knowing which is which is half the battle.',
           T,
           "VO: Sort the agencies into three tiers. Champions are the agencies that already feel the "
           "pain and want the exchange now — they will go first, and their willingness is your most "
           "valuable asset. Early Adopters are willing, but want to see it work before they commit "
           "their own systems and staff. Observers are not yet convinced — they are watching from the "
           "side, and some are quietly hoping it fails so they need not change. You will treat each "
           "tier differently, and knowing which is which is half the battle.")

panels(prs, 'Every exchange has two sides — with different incentives',
       ('THE CONSUMER',
        ['Wants the exchange.',
         'It makes their service easier.']),
       ('THE PROVIDER',
        ['Carries the cost and the risk.',
         'The load on their system; the blame if the data is wrong.']),
       'A provider that sees only cost is where adoption stalls. Map both sides of every exchange.',
       T,
       "VO: Interoperability adds a twist that other digital programmes do not have. Every exchange "
       "has two sides — an agency that provides the data and an agency that consumes it — and they "
       "have different incentives. The consumer usually wants the exchange; it makes their service "
       "easier. The provider often carries the cost and the risk — the load on their system, the "
       "responsibility if the data is wrong. So for each exchange in your catalogue, map both sides: "
       "who gains and who is asked to give. A provider agency that sees only cost and no benefit is "
       "where adoption stalls, and where you will need your minister's authority and a fair service "
       "agreement.\n\n"
       "Production cue: the pivotal slide of this video, and it answers the retrieval prompt set on "
       "the opener. Hold it a beat longer.")

rows_block(prs, 'The map tells you who to work first',
           [('Pair a Champion consumer with a willing provider', 'That is your first exchange.'),
            ('Use the first win to move the Early Adopters', 'They needed to see it before committing.'),
            ('Bring Observers along with evidence, not argument',
             'A working exchange citizens notice beats any strategy meeting.'),
            ('Lock the Champions in writing',
             'A one-day inception workshop, then a signed commitment letter from each.')],
           None,
           T,
           "VO: The map tells you the sequence. Find a Champion consumer paired with a willing "
           "provider, and that is your first exchange — the one most likely to succeed and prove the "
           "framework. Use that first working exchange to move the Early Adopters, who needed to see "
           "it before committing. And bring the Observers along with evidence rather than argument — a "
           "working once-only exchange that citizens notice is more persuasive than any number of "
           "strategy meetings. You spend your scarce political capital where it moves the most "
           "agencies. And lock the Champions in before you build on them: a one-day inception "
           "workshop with the Tier 1 ministries, ending in a signed commitment letter from each, a "
           "named focal point and an agreed quick win. Programmes that skip the signature stall at "
           "the first cross-ministry decision, when a Champion turns out to have been a well-wisher.",
           bottom=6.7)

block(prs, 'A bus needs an owner',
      ['None of this holds without a body that governs the framework — that admits members, sets '
       'service levels and resolves disputes.',
       'Designing that body is the subject of Module 3.'],
      'An interoperability platform with no owner decays in its second year.',
      T,
      "VO: One warning the stakeholder map makes visible. All of this — the tiers, the providers "
      "and consumers, the agreements — needs a body that governs the framework as a whole: that "
      "admits new members, sets the service levels, and resolves disputes when two agencies "
      "disagree. An interoperability platform with no owner decays in its second year, when the "
      "founding enthusiasm fades and no one is accountable for keeping it healthy. Designing that "
      "governing body is the subject of a later module. The stakeholder map is what shows you why it "
      "is not optional.")

big_slide(prs,
          'Map the agencies into Champions, Early Adopters and Observers — and provider against '
          'consumer for every exchange — so you spend authority where it moves the most agencies.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the third foundation artefact is the stakeholder map. Three tiers — Champions, "
          "Early Adopters, Observers. Two sides for every exchange — provider and consumer. Together "
          "they tell you who to onboard first, who to convince with evidence, and where you will need "
          "your minister to lean in. Interoperability is an agreement problem, and this map is how "
          "you solve it deliberately instead of hoping the agencies come along on their own.",
          practice=('Map your stakeholders into tiers and provider/consumer roles',
                    'a tier map, a provider/consumer table, an onboarding sequence and a '
                    'commitment-letter template'))

sources_slide(prs, T, [
    'EU European Interoperability Framework — organisational layer',
    'NIIS X-Road governance model (niis.org)',
])


# ================================================================ 1.7
T = '1.7 · What the world already proved'
section('1.7', 'What the world already proved',
        'Estonia\'s X-Road and the EU\'s once-only systems show the pattern; the education semantic '
        'standards show the vocabularies you will reuse rather than invent.',
        "VO: You are not the first country to build this, and that is good news. The pattern in this "
        "knowledge product is not a theory — it is drawn from systems that have run for years, at "
        "national and cross-border scale. Knowing the evidence does two things for you. It gives your "
        "minister confidence that the approach is proven. And it tells your team which parts to reuse "
        "rather than reinvent — because the most expensive mistake in interoperability is rebuilding "
        "a standard that already exists.\n\n"
        "On screen: country and standard names in plain typography only — no flags, emblems or "
        "logos.")

rows_block(prs, 'Estonia — two decades of X-Road show the pattern lasts',
           [('A shared bus connecting hundreds of organisations', 'Built from the early 2000s.'),
            ('Distributed registries', 'Each fact owned by one accountable agency.'),
            ('Once-only in law', 'Not left as an aspiration.')],
           'A proof that the pattern works — not a template to copy line for line.',
           T,
           "VO: The clearest example is Estonia's X-Road. Starting in the early 2000s, Estonia built a "
           "shared data-exchange layer that now connects hundreds of public and private "
           "organisations. Two design choices made it last. Registries are distributed — each fact "
           "has one accountable owner, rather than copies scattered across agencies. And once-only is "
           "built into law, not left as an aspiration. The technical bus your country will use — the "
           "one we demonstrate later on the Linkup federation — is from this same X-Road lineage. "
           "Estonia is a small state with different starting conditions, so use it as a proof that "
           "the pattern works, not as a template to copy line for line.",
           numbered=False)

block(prs, 'If once-only works across 27 countries, it can work across your ministries',
      ['The EU\'s Once-Only Technical System lets a citizen or business in one member state have '
       'official evidence fetched from another — with consent, instead of carrying paper across '
       'borders.',
       'Different languages, laws and systems. The same four layers.'],
      'The point is not the cross-border machinery. It is the proof of scale.',
      T,
      "VO: The second example raises the ambition. The European Union built the Once-Only Technical "
      "System so that a citizen or business dealing with one member state can have official "
      "evidence fetched from another member state, with consent, instead of carrying paper across "
      "borders. The point for you is not the cross-border machinery itself. It is the proof of "
      "scale: if once-only can be made to work across twenty-seven countries with different "
      "languages, laws and systems, then making it work across the ministries of a single country is "
      "an easier problem than it looks — provided you build the four layers properly.")

rows_block(prs, 'Reuse the vocabulary — don\'t invent it',
           [('Giga', 'A shared way to identify and locate schools.'),
            ('OneRoster', 'A standard for rostering and enrolment data.'),
            ('CEDS', 'A common vocabulary for education data.'),
            ('Europass / W3C Verifiable Credentials', 'A standard for digital credentials.')],
           'Spend your team\'s scarce time on what is specific to your country.',
           T,
           "VO: The third kind of evidence is the most practical. For the education sector, the "
           "semantic layer — the shared meaning of the data — is largely already published. Giga "
           "gives a shared way to identify and locate schools. OneRoster is a standard for rostering "
           "and enrolment data. CEDS offers a common vocabulary for education data elements. And "
           "Europass, with W3C Verifiable Credentials, is a published standard for digital "
           "credentials a learner can carry and a verifier can trust. Your team does not invent what "
           "a 'school' or a 'credential' is. They adopt these vocabularies, and spend their scarce "
           "time on what is genuinely specific to your country. That is the reuse-first principle "
           "made concrete.\n\n"
           "Production cue: the pivotal slide of this video — the most practical one. Hold it a beat "
           "longer.",
           numbered=False)

rows_block(prs, 'Different countries, different scale — the same four elements',
           [('A shared bus', 'Rather than point-to-point links.'),
            ('Distributed registries', 'With accountable owners.'),
            ('Once-only written into law', ''),
            ('Standards reused, not reinvented', '')],
           'It travels because it is built on how the problem works — not on one country\'s circumstances.',
           T,
           "VO: Look across the evidence and the same four elements appear every time. A shared bus "
           "rather than point-to-point links. Distributed registries with accountable owners. "
           "Once-only written into law. And standards reused rather than reinvented. Different "
           "countries, very different scale — the same pattern. It travels because it is built on how "
           "the problem actually works, not on any one country's circumstances. Your country can apply "
           "it too.")

big_slide(prs,
          'The pattern is proven and the vocabularies are published — your team\'s job is to apply '
          'them to your country, not to invent them.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So when you make the case, close with the evidence. The pattern is proven — Estonia at "
          "national scale, the EU across borders. The vocabularies are published — Giga, OneRoster, "
          "CEDS, Europass. Your team's job is not to invent interoperability. It is to apply a proven "
          "pattern and reuse published standards in your country's context. The rest of this "
          "knowledge product shows exactly how, building a real once-only exchange on the Linkup "
          "federation across our demonstration country, Progressa.",
          practice=('Find the published standards your sector should reuse',
                    'a table of candidate standards plus an "adopt first" shortlist'))

sources_slide(prs, T, [
    'Estonia — e-Estonia.com; RIA (ria.ee); X-Road (niis.org)',
    'EU Once-Only Technical System (OOTS)',
    'Giga',
    'OneRoster (1EdTech); CEDS',
    'Europass; W3C Verifiable Credentials',
])


# ================================================================ Thank you
s = add_slide(prs, LAYOUT_THANKS)
notes(s, 'Closing slide for the combined deck. Individual videos end on their sources slide instead.')

# Self-check: the split spec's slide ranges depend on this count, and a helper that
# silently stops drawing shows up first as a slide with no voice-over.
assert len(prs.slides._sldIdLst) == 62, 'slide count changed — re-run the split with --infer-ranges'
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
    'videos', 'module_1', 'en', 'decks', 'KP2_M1_Deck_v0.1.pptx')
os.makedirs(os.path.dirname(OUT), exist_ok=True)
prs.save(OUT)
print('slides:', len(prs.slides._sldIdLst))
print('saved', OUT)

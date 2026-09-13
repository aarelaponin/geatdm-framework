#!/usr/bin/env python3
# Build the KP2 Module 3 (Topic 3) video deck on the ITU template — v0.1.
# Content follows KP2_Module3_Script_Bundle_v0.2 (build_kp2_module3_v02.js): six videos,
# 3.1 – 3.6, Strategist-facing. Every VO paragraph in the notes is a verbatim
# scriptBeats[].text from the .js (vo_diff.py proves it); the recap slide of every video
# carries the un-narrated practice box (plan D5) — task = the AI tip's title, artefact = the
# Output half of the tip's io.
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


# Two-sentence leads and three-line comparisons, as in Module 1.
def block(prs, *a, **k):
    k.setdefault('punch_y', 4.35)
    return block_slide(prs, *a, **k)


def panels(prs, *a, **k):
    k.setdefault('height', 3.2)
    return two_panel(prs, *a, **k)


# Opener (hook) slide copy per video — headline + two to four supporting lines, written from
# the same opener narration the hook's note carries. Not a preview of the next slide's list.
HOOKS = {'3.1': ('Platforms rarely die technically. They decay in year two.',
                 ['Built in a burst of enthusiasm, celebrated at launch.',
                  'Then members drift, certificates expire — and nobody is accountable.']),
         '3.2': ('Governance fails in two opposite ways.',
                 ['Too top-heavy: ministers decide details they cannot judge, and decisions stall.',
                  'Too bottom-heavy: technicians make commitments they cannot keep, and decisions '
                  'get reversed.']),
         '3.3': ('The question that derails interoperability is "who decides?"',
                 ['Two bodies both think they admit a new member — or neither does.',
                  'A simple onboarding becomes a three-month turf fight.']),
         '3.4': ('Joining the bus is not just plugging in a cable.',
                 ['It is accepting a set of obligations.',
                  'One member\'s stale data can cost the whole framework its trust.']),
         '3.5': ('From two members to twenty, the technical work multiplies.',
                 ['Done ad hoc, agencies make incompatible local choices.',
                  'The framework slowly stops being one framework.']),
         '3.6': ('Governance is not a setup you finish at launch.',
                 ['New members, new standards, new exchanges, technology to retire.',
                  'Someone must own the changes — or the design drifts from what actually runs.'])}


def section(code, name, message, note):
    # No runtime on the title card: the narration is generated per take and its length moves
    # with every re-roll.
    s = section_slide(prs, 'KP2 · MODULE 3 · VIDEO %s' % code, code, name, message,
                      'standalone video · voice-over on text slides', TITLE_CARD_NOTE)
    head, lines = HOOKS[code]
    hook_slide(prs, head, lines, '%s · %s' % (code, name), note)
    return s


def tier_stack(prs, head, closing, tag, note):
    """The module's centrepiece: three governing tiers, the Operating Authority underneath."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head)
    tiers = [('STRATEGIC COUNCIL — political authority', 'Ministers and the most senior officials.'),
             ('STEERING COMMITTEE — programme leadership', 'The chief digital officer, the sector CIOs.'),
             ('TECHNICAL WORKING GROUPS — the specialists', 'Architects, security and semantic experts.')]
    for i, (name, gloss) in enumerate(tiers):
        node(s, 0.72, 1.65 + i * 1.05, 11.9, 0.9, name, [gloss], head_size=15, size=15)
    node(s, 0.72, 4.95, 11.9, 0.9, 'OPERATING AUTHORITY — runs the platform underneath all three',
         ['Governing sets direction. Operating runs the bus.'], fill=ITU_BLUE_DARK, ink=WHITE,
         head_ink=WHITE, head_size=15, size=15)
    tb = box(s, 0.72, 6.1, 11.9, 0.6)
    set_text(tb.text_frame, [[(closing, 15.5, True, ITU_BLUE_DARK, False)]])
    footer(s, tag)
    notes(s, note)
    return s


def raci_row(prs, head, decision, cells, closing, tag, note):
    """One RACI row drawn as four cells, the single Accountable highlighted."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head)
    tb = box(s, 0.72, 1.6, 11.9, 0.6)
    set_text(tb.text_frame, [[('DECISION:  ', 15, True, ITU_BLUE_DARK, False), (decision, 20, True, INK, False)]])
    w, gap = 2.8, 0.233
    for i, (role, body, what) in enumerate(cells):
        accountable = role == 'ACCOUNTABLE'
        node(s, 0.72 + i * (w + gap), 2.45, w, 2.6, role, [body, what],
             fill=ITU_BLUE_DARK if accountable else LIGHT, ink=WHITE if accountable else INK,
             head_ink=WHITE if accountable else ITU_BLUE_DARK, head_size=16, size=18)
    tb = box(s, 0.72, 5.4, 11.9, 0.9)
    set_text(tb.text_frame, [[(closing, 17, True, ITU_BLUE_DARK, False)]])
    footer(s, tag)
    notes(s, note)
    return s


# ---------------------------------------------------------------- COVER (edit slide 1)
edit_cover(
    prs,
    title_text='Who owns the bus —\nthe governance model',
    kicker='KP2 · Government Interoperability Framework · Module 3',
    blurb='Six standalone videos for the person who sets up the framework\'s governance: a named '
          'owner with the regulator split from the operator, three governing tiers, one '
          'Accountable body per decision, the obligations every member signs, four standing '
          'Working Groups — and the change control that keeps it all current.',
    length='~28 mins across 6 videos (3.1 – 3.6)',
    audience=AUDIENCE,
    panel_heading='THE GOVERNANCE PACK',
    panel_items=['A named owner — two hats',
                 'Three tiers, one job each',
                 'One Accountable per decision',
                 'Obligations every member signs',
                 'Governance that stays current'],
    panel_footer='3 tiers · 1 Accountable per decision · 4 standing groups',
    note_text='Cover for the combined Module 3 deck. Each section that follows is one standalone '
              '~4–5 minute video, for the Strategist who stands up the framework\'s governance. '
              'Together the six videos build the Governance Pack — the organisational-layer '
              'configuration of the framework, as the decree is its legal layer.')

# ---------------------------------------------------------------- AGENDA (edit slide 2)
edit_agenda(
    prs,
    header='Module 3 — six videos',
    items=[
        ('3.1  Why a bus needs an owner', '~5 min'),
        ('3.2  The three tiers of governance', '~5 min'),
        ('3.3  The RACI matrix', '~5 min'),
        ('3.4  Member obligations', '~4 min'),
        ('3.5  The four Technical Working Groups', '~4 min'),
        ('3.6  Governance as living configuration', '~5 min'),
    ],
    message_paras=[
        'A bus with no owner decays. Governance names the owner, sorts every decision to the body '
        'that can make it, and writes down what members commit to.',
        'Kept current through change control, it is configuration that lives — not a binder on a '
        'shelf.',
    ],
    note_text='Navigation slide for the combined deck; the videos ship standalone on YouTube. '
              '3.1 names the owner and splits the regulator from the operator. 3.2 and 3.3 are the '
              'structure and who decides. 3.4 and 3.5 are the members and the specialists. 3.6 '
              'keeps it all current.')

delete_template_slides(prs, keep=2)


# ================================================================ 3.1
T = '3.1 · Why a bus needs an owner'
section('3.1', 'Why a bus needs an owner',
        'An interoperability platform with no owner decays in its second year — name the owner '
        'before the first member joins, and split the body that sets the rules from the body that '
        'runs the bus.',
        "VO: The most common way an interoperability platform dies is not technical. A bus gets "
        "built in a burst of donor-funded enthusiasm, the launch is celebrated, and then in the "
        "second year no one is accountable for keeping it alive. Members drift away. Certificates "
        "expire. No one chases the next agency to connect. The platform does not fail dramatically "
        "— it just quietly decays, because nobody owned it. The cure is to name the owner before the "
        "first member ever joins.")

rows_block(prs, 'The owner is a standing operator, not a committee',
           [('Runs the bus day to day', ''),
            ('Admits and onboards new members', ''),
            ('Sets and monitors service levels', ''),
            ('Resolves disputes between members', ''),
            ('Owns the standards portfolio and keeps it current', '')],
           'Budget, staff and a mandate — starting at 8–15 people, growing to 30–80 at national scale.',
           T,
           "VO: The owner is the Operating Authority — a standing body whose full-time job is the "
           "framework. It runs the bus day to day. It admits and onboards new members. It sets the "
           "service levels and watches them. It resolves disputes when two agencies disagree. And it "
           "owns the standards portfolio, keeping it current as the framework grows. In our "
           "demonstration country, Progressa, this is the Digital Government Authority, PDGA. "
           "Crucially, it is a standing operator with budget, staff and a mandate — not a committee "
           "that meets once a quarter. Three forms are common: a dedicated agency inside the "
           "national ICT authority, the usual choice; a department of a ministry, which struggles "
           "when that ministry is also a member with its own interests; or an independent statutory "
           "body, rare and mostly federal. It starts small — eight to fifteen people — and grows to "
           "thirty to eighty at national scale, most of them on platform operations and member "
           "support.\n\n"
           "VO: Here is why the owner has to sit at the level of the whole of government. The bus is "
           "a shared road, built once for every agency to reuse — and a shared asset with no single "
           "accountable owner becomes nobody's responsibility. The planning that justifies building "
           "it once, and the authority to run it for everyone, exist only at whole-of-government "
           "level. No single project and no single ministry can own the shared bus on behalf of all "
           "the others; only a designated Operating Authority can.",
           numbered=False)

panels(prs, 'Two hats, two heads — the regulator and the operator',
       ('THE REGULATOR SETS THE RULES',
        ['Owns the architecture and the standards.',
         'Defines the compliance checks and the evidence.',
         'Grants written exceptions; applies sanctions.']),
       ('THE OPERATOR RUNS THE BUS',
        ['Operates the platform.',
         'Onboards members and validates their connections.',
         'Supports them.']),
       'No single body both runs the bus and judges compliance with it. Small country? Two units, '
       'two mandates.',
       T,
       "VO: The duties on the last slide are really two hats, and the most useful thing you can do "
       "at the start is to put them on two heads. One hat sets the rules: it owns the reference "
       "architecture and the standards, it defines the compliance checks and the evidence, it grants "
       "written exceptions and applies sanctions. That is the regulator. The other hat runs the bus: "
       "it operates the platform, onboards members, validates their connections and supports them. "
       "That is the operator. When one office does both, a platform outage, a missed standard and a "
       "compliance waiver are all decided by the same people, with no independent check — and the "
       "waiver always wins. So write the split into both mandates, so it survives staff turnover. A "
       "small administration does not need two agencies; two units inside one agency, each with its "
       "own mandate, is enough. And the member ministries keep the third hat: they own their "
       "services and their data, and they answer for their own compliance.\n\n"
       "Production cue: the pivotal slide of this video. Hold it a beat longer.")

# The module's emotional peak — the only full-colour punch block in the deck.
block(prs, 'Governing is not operating — you need both, kept distinct',
      ['The governing tiers set direction and make decisions. The Operating Authority runs the '
       'platform day to day.',
       'An operator with no governance runs a platform no one can be compelled to use.'],
      'Governance with no operator is a set of meetings with nothing underneath.',
      T,
      "VO: Keep two things separate, because confusing them is a common failure. Governing is "
      "setting direction and making decisions — the tiers do that. Operating is running the platform "
      "day to day — the Operating Authority does that. A framework with governance bodies but no "
      "operator is a set of meetings with nothing underneath; an operator with no governance is a "
      "team running a platform with no authority to compel anyone to use it. You need both, and you "
      "need them distinct.\n\n"
      "Production cue: the module's one full-colour block.",
      punch_fill=ITU_BLUE, punch_ink=WHITE)

big_slide(prs,
          'A shared bus needs a named owner with budget, staff and mandate before the first member '
          'joins — and the body that sets the rules is not the body that runs the bus.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the first governance decision is the simplest to state and the easiest to skip: "
          "name the owner, with budget, staff and a real mandate, before the first member joins — and "
          "keep the rule-maker and the operator apart. That is what stops the second-year decay.",
          practice=('Define the owner\'s mandate — and split the regulator from the operator',
                    'a mandate statement with the two hats separated, plus a list of mandate gaps'))

sources_slide(prs, T, [
    'EU European Interoperability Framework; NIIS X-Road governance (niis.org)',
    'Estonia — Ministry of Economic Affairs and Communications; RIA (ria.ee)',
    'The regulator/operator split — the framework\'s reference architecture',
    'PAERA v1.0 — §3.1.3 (Institutional setup)',
])


# ================================================================ 3.2
T = '3.2 · The three tiers of governance'
section('3.2', 'The three tiers of governance',
        'Strategic Council, Steering Committee, Technical Working Groups — political authority, '
        'programme leadership and the specialists, each with one job.',
        "VO: Governance fails in two opposite ways. Too top-heavy, and ministers are asked to decide "
        "technical details they cannot judge, so decisions stall. Too bottom-heavy, and technicians "
        "make political commitments they have no authority to keep, so decisions get reversed. The "
        "three-tier model, drawn from the EU's interoperability framework and the X-Road governance "
        "experience, avoids both by giving each kind of decision to the body that can actually make "
        "it.\n\n"
        "Retrieval prompt — ask before playing on: a Working Group cannot agree on a technical "
        "standard. Where does that decision go next — straight to the ministers? Answer on the "
        "escalation slide: to the Steering Committee, and to the Council only if it is political.")

# The module's centrepiece.
tier_stack(prs, 'Three tiers, one operator — each with one job',
           'The art of governance is keeping each decision at the right tier.',
           T,
           "VO: Picture three tiers, with the Operating Authority running underneath all of them. The "
           "top tier is the Strategic Council — political authority. The middle tier is the Steering "
           "Committee — programme leadership. The bottom tier is the Technical Working Groups — the "
           "specialists. Each tier has one job, and the art of governance is keeping each decision "
           "at the right tier.\n\n"
           "Production cue: the centrepiece of the module — every later video places its body on "
           "this picture. Reveal the tiers top to bottom, the operator last. Hold it a beat longer.")

rows_block(prs, 'The Strategic Council removes the obstacles no technician can',
           [('Sets direction and gives the framework political cover', ''),
            ('Removes political obstacles', 'The reluctant minister, the turf dispute, the budget fight.'),
            ('Meets rarely and decides big things', 'It does not decide technical questions.')],
           'A healthy framework protects its Council from being dragged into technical questions.',
           T,
           "VO: The Strategic Council is ministers and the most senior officials. It sets the "
           "direction, gives the framework political cover, and — most valuable of all — removes the "
           "political obstacles that no technician can: the reluctant minister, the turf dispute "
           "between two agencies, the budget fight. It meets rarely and decides big things. It does "
           "not decide technical questions, and a healthy framework protects its Council from being "
           "dragged into them.",
           numbered=False)

rows_block(prs, 'The Steering Committee is where the framework is steered, month to month',
           [('Prioritises the Use-Case Catalogue and approves the roadmap', ''),
            ('Holds the budget and reports up to the Council', ''),
            ('The chief digital officer, the sector CIOs, the head of the Operating Authority', '')],
           'Close enough to the work to make real decisions — senior enough to make them stick.',
           T,
           "VO: The Steering Committee is programme leadership — the chief digital officer, the "
           "sector CIOs, the head of the Operating Authority. It prioritises the Use-Case Catalogue, "
           "approves the roadmap, holds the budget, and reports up to the Council. This is where the "
           "framework is actually steered, month to month — close enough to the work to make real "
           "decisions, senior enough to make them stick.",
           numbered=False)

block(prs, 'The Technical Working Groups decide what they can, and recommend the rest',
      ['Architects, security experts and semantic experts do the detailed technical work.',
       'Questions beyond their competence go up to the Steering Committee as recommendations.'],
      'Where the architects from your Enterprise Architecture work find their home.',
      T,
      "VO: The Technical Working Groups are the specialists — architects, security experts, "
      "semantic experts. They do the detailed technical work, decide the questions within their "
      "competence, and recommend the rest up to the Steering Committee. This is also where the "
      "architects you trained in the Enterprise Architecture work find their home in the "
      "interoperability framework.")

block(prs, 'The tiers are where business and IT decide together',
      ['The Council and the Committee carry business and political authority. The Working Groups '
       'carry the IT expertise.',
       'The tiers give them a shared language and a shared rhythm — the same questions, in the same '
       'room.'],
      'That shared rhythm is what makes the hard, cross-cutting decisions possible at all.',
      T,
      "VO: There is a deeper reason for the three tiers than just sorting decisions. The Strategic "
      "Council and the Steering Committee carry the business and political authority; the Technical "
      "Working Groups carry the IT expertise. The tiered structure is what brings the two together — "
      "it gives business and IT a shared language and a shared rhythm, so that the people who decide "
      "what the framework is for and the people who decide how it works are deciding the same "
      "questions in the same room, rather than missing each other in separate meetings. That shared "
      "rhythm is what makes the hard, cross-cutting decisions possible at all.")

panels(prs, 'Decide at the lowest tier that can — escalate only what it cannot',
       ('ESCALATION UP',
        ['A Working Group cannot agree on a standard — it goes to the Steering Committee.',
         'The question is political — the Committee takes it to the Council.']),
       ('DELEGATION DOWN',
        ['Most decisions are made at the lowest tier that can make them.',
         'Ministers\' scarce time is kept for the few only they can make.']),
       'Get the rules wrong, and either nothing reaches the ministers — or everything does.',
       T,
       "VO: The tiers connect by escalation and delegation. A Working Group decides a standard; if it "
       "cannot agree, it escalates to the Steering Committee; if the question is political, the "
       "Committee escalates to the Council. The rule is that most decisions are made at the lowest "
       "tier that can make them, which keeps the ministers' scarce time for the few decisions only "
       "they can make. Get the escalation rules right and the framework runs smoothly; get them wrong "
       "and either nothing reaches the ministers or everything does.\n\n"
       "Production cue: the pivotal slide of this video, and it answers the retrieval prompt set on "
       "the opener.")

big_slide(prs,
          'Three tiers — political authority, programme leadership, the specialists — each with one '
          'job, connected by escalation up and delegation down.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the three tiers are the structure: the Strategic Council for political authority, "
          "the Steering Committee for programme leadership, the Technical Working Groups for the "
          "specialists, and the Operating Authority running underneath. Each has one job. Each decides "
          "at its level. That is how you govern an interoperability framework without either drowning "
          "the ministers in detail or letting technicians make commitments they cannot keep.",
          practice=('Draft the three-tier governance structure for your country',
                    'a three-tier structure with membership, scope, cadence, escalation rules and gaps'))

sources_slide(prs, T, [
    'EU European Interoperability Framework; NIIS X-Road governance (niis.org)',
    'Estonia governance model',
    'PAERA v1.0 — §3.1.3 (Institutional setup)',
])


# ================================================================ 3.3
T = '3.3 · The RACI matrix'
section('3.3', 'The RACI matrix',
        'Write down who decides, who runs, who is consulted, once — it is what stops every '
        'onboarding turning into a turf fight.',
        "VO: With three governing tiers, an Operating Authority and many member agencies, the "
        "question that derails interoperability is rarely 'can we do this technically?'. It is 'who "
        "decides?'. Two bodies both believe they are in charge of admitting a new member, or no one "
        "is, and a simple onboarding becomes a three-month turf fight. The RACI matrix is the cheap "
        "insurance against exactly that. It is one page that says, for each kind of decision, who "
        "decides and who does what.\n\n"
        "Retrieval prompt — ask before playing on: when a new agency joins, the Operating Authority "
        "does the onboarding work. Does that make it the body Accountable for the decision? Answer "
        "on the worked-row slide: no — it is Responsible; the Steering Committee is Accountable.")

rows_block(prs, 'RACI names four roles — and exactly one is Accountable',
           [('Responsible', 'Does the work.'),
            ('Accountable', 'Owns the decision — exactly one body, never two.'),
            ('Consulted', 'Must be asked before.'),
            ('Informed', 'Told after.')],
           'Two Accountables produce deadlock. None produces drift.',
           T,
           "VO: RACI names four roles for any decision. Responsible — who does the work. Accountable — "
           "who owns the decision; and the iron rule is exactly one Accountable, never two. Consulted "
           "— who must be asked before the decision. Informed — who is told after. The whole "
           "discipline rests on that one rule: one Accountable per decision. The most common "
           "governance failure is two bodies both thinking they are Accountable, which produces "
           "deadlock, or none, which produces drift.",
           numbered=False)

panels(prs, 'Map only the decisions that recur and cause friction',
       ('THE RECURRING SIX',
        ['Admit a new member.',
         'Approve a technical standard.',
         'Authorise a new exchange.',
         'Resolve a dispute between members.',
         'Change or retire a standard.',
         'Suspend a member that breaks the rules.']),
       ('THE TWO THE SPLIT ADDS',
        ['Publish the reference architecture and compliance checklist — the regulator is '
         'Accountable.',
         'Operate the platform and onboard members — the operator is Accountable.']),
       'Write both, and the split is no longer a principle but a matrix.',
       T,
       "VO: You do not map every decision — just the handful that recur and cause friction. Admitting "
       "a new member. Approving a technical standard. Authorising a new data exchange. Resolving a "
       "dispute between two members. Changing or retiring a standard. Suspending a member that breaks "
       "the rules. For each of these, write down which body is Accountable, who is Responsible, who "
       "must be Consulted, and who is Informed. And two rows the regulator-operator split makes "
       "visible: publishing the reference architecture and the compliance checklist — the regulator "
       "is Accountable and Responsible, the operator Consulted, the members Informed — and, its mirror "
       "image, operating the platform and onboarding members, where the operator is Accountable and "
       "the regulator merely Consulted. Write both, and the split is no longer a principle but a "
       "matrix.",
       height=4.1)

raci_row(prs, 'Write one row once, and the next onboarding is a process',
         'Admit a new member',
         [('RESPONSIBLE', 'The Operating Authority', 'Does the onboarding.'),
          ('ACCOUNTABLE', 'The Steering Committee', 'Approves.'),
          ('CONSULTED', 'The relevant Working Group', 'Checks readiness.'),
          ('INFORMED', 'The Strategic Council', '')],
         'Settled before the dispute: a five-minute conversation, not a months-long escalation.',
         T,
         "VO: Take one row, worked through. Admitting a new member: the Operating Authority is "
         "Responsible — it does the onboarding. The Steering Committee is Accountable — it approves. "
         "The relevant Technical Working Group is Consulted — it checks the agency is ready. The "
         "Strategic Council is Informed. Write that single row down once, agree it, and the next "
         "agency that wants to join follows a known process instead of starting a fresh negotiation "
         "about who is allowed to say yes.\n\n"
         "VO: The value of the matrix is that you settle these questions before the dispute, not "
         "during it. A turf fight resolved by pointing at an agreed matrix is a five-minute "
         "conversation. The same fight with no matrix is a months-long escalation that burns the "
         "political capital you needed for harder things. A RACI is only words on a page — but it is "
         "the words that stop the fights.\n\n"
         "Production cue: the pivotal slide of this video, and it answers the retrieval prompt set on "
         "the opener. Reveal the cells left to right. Hold it a beat longer.")

big_slide(prs,
          'One Accountable per decision, written down once — the RACI matrix is what turns every '
          'recurring governance question from a fight into a process.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the RACI matrix is the third piece of the Governance Pack. Map the handful of "
          "recurring decisions, give each exactly one Accountable body, and record who is "
          "Responsible, Consulted and Informed. It is quick to draft and it prevents the slow, "
          "expensive disputes that quietly stall interoperability frameworks. Agree it before the "
          "first member joins, while it is still abstract and uncontested.",
          practice=('Draft the governance RACI for your framework\'s key decisions',
                    'a RACI matrix plus a list of deadlock/drift risks and authority gaps'))

sources_slide(prs, T, [
    'EU European Interoperability Framework; NIIS X-Road governance — roles and responsibilities '
    '(niis.org)',
    'PAERA v1.0 — §3.1.3 (Institutional setup)',
])


# ================================================================ 3.4
T = '3.4 · Member obligations'
section('3.4', 'Member obligations',
        'What an agency signs up to when it joins is the difference between a federation and a '
        'free-for-all.',
        "VO: Joining the bus is not just plugging in a cable. It is accepting a set of obligations. A "
        "federation where each member picks and chooses which rules to follow is a free-for-all that "
        "no one can depend on — and the first time a member's stale data corrupts another agency's "
        "service, the whole framework loses trust. The member obligations, written down and signed, "
        "are what turn a collection of connections into a dependable federation.")

panels(prs, 'Eight obligations, the same for every member',
       ('EVERY MEMBER',
        ['Connects, and stays connected.',
         'Meets the agreed service levels.',
         'Keeps its data accurate and current.',
         'Answers the queries it must — honours once-only.',
         'Protects the data it receives.',
         'Follows the framework\'s standards.']),
       ('EASY TO FORGET, EXPENSIVE TO SKIP',
        ['Names a Technical Focal Point and a Data Protection Officer.',
         'Pays its share of the running cost, where the Council so decides.']),
       'A stale registry poisons every exchange that relies on it.',
       T,
       "VO: Every member accepts a common set of obligations. Connect, and stay connected — not drop "
       "off when attention moves elsewhere. Meet the agreed service levels — uptime, response time. "
       "Keep its data accurate and current, because a registry that is stale poisons every exchange "
       "that relies on it. Answer the queries it is obliged to, so that once-only actually works for "
       "the citizen. Protect the data it receives. And follow the standards the framework sets, rather "
       "than its own. Two more that are easy to forget and expensive to skip: name two people — a "
       "Technical Focal Point the operator can call, and a Data Protection Officer wherever personal "
       "data flows — and pay its share of the running cost, where the Council decides that members "
       "contribute. Eight obligations, the same for everyone.",
       height=4.1)

panels(prs, 'The provider carries more weight than the consumer',
       ('THE PROVIDER',
        ['The load on its systems.',
         'The duty to keep the data accurate.',
         'The availability others depend on.']),
       ('THE CONSUMER',
        ['Uses the data only for the agreed purpose.',
         'Protects it.',
         'Does not re-share it.']),
       'Ignore the difference, and provider agencies quietly resist joining.',
       T,
       "VO: But the obligations are not identical on both sides, and naming the difference is "
       "important for fairness. The agency that provides data carries more weight — the load on its "
       "systems, the duty to keep the data accurate, the availability its consumers depend on. The "
       "agency that consumes data carries obligations of purpose and protection — use the data only "
       "for the agreed purpose, protect it, do not re-share it. A fair member agreement recognises "
       "that the provider is being asked to do more, and that the Operating Authority and the service "
       "levels exist partly to support it. Ignore this, and provider agencies quietly resist "
       "joining.\n\n"
       "Production cue: the pivotal slide of this video. Hold it a beat longer.")

block(prs, 'A signed member agreement turns an assumption into a commitment',
      ['A CIO signs it when the agency joins — and the Operating Authority points to it when a '
       'member stops meeting it.',
       'The decree compels connection in law; the agreement records what each member commits to in '
       'practice.'],
      'The organisational-layer counterpart to the decree.',
      T,
      "VO: All of this becomes a member agreement — the document a CIO signs when their agency joins "
      "the bus. Putting the obligations in a signed agreement turns them from an assumption into a "
      "commitment, and gives the Operating Authority something concrete to point to when a member "
      "stops meeting them. The member agreement is the organisational-layer counterpart to the "
      "decree: the decree compels connection in law; the agreement records what each member commits "
      "to in practice.")

big_slide(prs,
          'A signed set of obligations — fair to provider and consumer alike — is what turns a '
          'collection of connections into a federation you can depend on.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So member obligations are the fourth piece of the Governance Pack. Eight common "
          "obligations, a fair split of weight between provider and consumer, and a signed member "
          "agreement that makes them real. They are quiet, unglamorous work, but they are the "
          "difference between a federation that agencies trust and a free-for-all they avoid. And "
          "they feed directly into the service-level agreements the implementation work will need.",
          practice=('Draft the member obligations and membership agreement',
                    'a two-page member agreement with common, provider and consumer obligations'))

sources_slide(prs, T, [
    'EU European Interoperability Framework',
    'NIIS X-Road member model and member obligations (niis.org)',
    'PAERA v1.0 — §3.1.3 (Institutional setup)',
])


# ================================================================ 3.5
T = '3.5 · The four Technical Working Groups'
section('3.5', 'The four Technical Working Groups',
        'Security, semantics, APIs, platform operations — the four standing groups that keep the bus '
        'coherent as it grows.',
        "VO: As a framework grows from two members to twenty, the technical work does not stop — it "
        "multiplies. New standards, new data models, new security questions, a steady stream of "
        "agencies to onboard. If that work is done ad hoc, by whoever is free, the bus drifts into "
        "incoherence: agencies make incompatible local choices and the framework slowly stops being "
        "one framework. Four standing Technical Working Groups are how you keep it coherent.")

rows_block(prs, 'Four groups, each owning one technical dimension',
           [('Security', 'The trust model, certificates, access control.'),
            ('Semantics', 'Shared data models, code lists, identifiers.'),
            ('APIs', 'The technical standards, service contracts, message formats.'),
            ('Platform operations', 'Running the bus, and the process to admit and connect a member.')],
           'One group per standards domain — the names can follow your own vocabulary.',
           T,
           "VO: Each group owns one technical dimension of the framework. Security owns the trust "
           "model — the certificates, the access control, the response when something goes wrong. "
           "Semantics owns the shared meaning — the data models, the code lists, the identifiers, so "
           "that two agencies mean the same thing by the same word. APIs owns the technical standards "
           "— the API styles, the service contracts, the message formats, the protocol every member "
           "uses. And Platform Operations owns the running of the bus and the process that admits and "
           "connects a new member cleanly, the same way every time. One group per standards domain is "
           "the rule; the names can follow your own vocabulary.")

block(prs, 'Semantics is where business and IT meet on the hardest problem',
      ['Agreeing that "enrolment" means the same to the examination authority and the learner '
       'registry is a business decision the data owners make.',
       'It has to be written down precisely enough for the systems to use.'],
      'Agree the meaning once, and reuse it everywhere — instead of re-arguing it in every exchange.',
      T,
      "VO: The Semantics group deserves a special word, because it is where business and IT meet on "
      "the hardest interoperability problem: agreeing what the data means. Deciding that 'enrolment' "
      "means the same thing to the examination authority and to the learner registry is not a "
      "technical choice — it is a business decision the data owners make, but it has to be written "
      "down precisely enough for the systems to use. The Semantics group is the forum that gives both "
      "sides a shared language for that work, so the meaning is agreed once and reused everywhere, "
      "rather than re-argued in every new exchange.\n\n"
      "Production cue: the pivotal slide of this video. Hold it a beat longer.")

panels(prs, 'Standing, not project — that is what stops the drift',
       ('A PROJECT TEAM',
        ['Disbands when the project ends.',
         'Its choices are left for no one to maintain.']),
       ('A WORKING GROUP',
        ['Persists for the life of the framework.',
         'Maintains its dimension as members multiply.']),
       'They decide within their competence, and recommend the rest up to the Steering Committee.',
       T,
       "VO: The key word is standing. A project team disbands when its project ends; a Working Group "
       "persists for the life of the framework. That persistence is exactly what prevents the slow "
       "drift into incompatible local choices that kills interoperability over years. The groups "
       "decide what lies within their competence and recommend the rest up to the Steering Committee "
       "— and they are where the architects from your Enterprise Architecture work find their ongoing "
       "home in the framework.")

big_slide(prs,
          'Four standing groups — security, semantics, APIs, platform operations — each owning one '
          'technical dimension, are what keep the bus one framework as it grows.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the four Technical Working Groups are the fifth piece of the Governance Pack. "
          "Security, semantics, APIs, platform operations — standing, not project; deciding within "
          "their competence and recommending up; the home of the framework's technical coherence. "
          "Charter them at launch, and the framework can absorb its twentieth member as cleanly as its "
          "second.",
          practice=('Charter the four Technical Working Groups',
                    'four Working Group charters plus coordination notes'))

sources_slide(prs, T, [
    'EU European Interoperability Framework',
    'NIIS X-Road technical governance — working groups (niis.org)',
    'PAERA v1.0 — §3.1.3 (Institutional setup)',
])


# ================================================================ 3.6
T = '3.6 · Governance as living configuration'
section('3.6', 'Governance as living configuration',
        'Change control and a named standards-portfolio owner keep the framework current instead of '
        'frozen at launch.',
        "VO: The last governance idea is the one most frameworks miss. Governance is not a one-time "
        "setup you complete at launch and file away. The framework keeps changing — new members, new "
        "standards, new exchanges, technology that has to be retired — and someone must own those "
        "changes deliberately, or the carefully designed framework drifts out of date until it no "
        "longer matches what is actually running on the bus.")

rows_block(prs, 'The live framework changes constantly',
           [('A new member joins', ''),
            ('A standard is updated or retired', ''),
            ('A new exchange is authorised', ''),
            ('The security model changes', '')],
           'Each change is proposed, reviewed, decided by its one Accountable, recorded and communicated.',
           T,
           "VO: Look at what changes, constantly. A new member joins. A standard is updated, or "
           "retired. A new exchange is authorised. The security model changes in response to a new "
           "threat. Each of these is a change to the live framework. And each needs a controlled way "
           "to happen — proposed, reviewed, decided by the body the RACI makes Accountable, recorded, "
           "and communicated to every member. Change control is simply the discipline of making those "
           "changes deliberately instead of by accident.",
           numbered=False)

block(prs, 'Name the standards-portfolio owner',
      ['A specific role inside the Operating Authority keeps the register of current standards, '
       'versions and exceptions.',
       'Without a named owner, the portfolio becomes documents nobody maintains — and members quietly '
       'diverge.'],
      'There is always an authoritative answer to "what is the current standard?"',
      T,
      "VO: One role makes change control work: a named standards-portfolio owner, sitting inside the "
      "Operating Authority, who keeps the register of what standards are current, at what version, "
      "and what exceptions have been granted to whom. Without a named owner, the standards portfolio "
      "becomes a pile of documents nobody maintains, and members quietly diverge until no two are "
      "quite compatible. With a named owner, there is always an authoritative answer to the question "
      "'what is the current standard?' — and that single answer is what holds a growing federation "
      "together.\n\n"
      "Production cue: the pivotal slide of this video. Hold it a beat longer.")

panels(prs, 'Two more standing assets need an owner',
       ('A CONFORMANCE REGIME',
        ['How a member proves it meets a binding standard: self-assessment, a third-party check, or '
         'a test suite the operator runs.',
         'A transition period for legacy systems.',
         'Re-certification every two years, and on every standards change.']),
       ('A SEMANTIC REGISTRY',
        ['The country\'s data dictionary, code lists and cross-walks between sector vocabularies.',
         'Stewarded by the operator.',
         'Owned by the sector data owners.']),
       'A binding standard with no way to prove conformance is a wish.',
       T,
       "VO: Two more things need a standing owner, and both are missed as often as change control. "
       "The first is a conformance regime. A binding standard with no way to prove conformance is a "
       "wish. So each standard in the register carries a binding date, a transition period for legacy "
       "systems, and a test approach — a member's self-assessment for the routine, a third-party check "
       "for high-risk services, or a conformance test suite the operator runs. Members are "
       "re-certified on a cycle, typically every two years, and whenever a standard changes. The "
       "second is the semantic registry — the country's data dictionary, its code lists, and the "
       "cross-walks between one sector's vocabulary and another's. The operator stewards it; the "
       "sector data owners own the entries. Without it, the semantic map you agree for the first "
       "exchange is agreed again, slightly differently, for the second.",
       height=3.6)

rows_block(prs, 'The Governance Pack is done when these checks pass',
           [('Every recurring decision has one named Accountable', ''),
            ('Every member has a signed agreement', ''),
            ('The standards portfolio has a named owner and a written change process', ''),
            ('A conformance regime, and a semantic registry with a steward', '')],
           'The organisational-layer configuration of the build pack — as the decree is the legal layer.',
           T,
           "VO: This is why everything in this module adds up to the Governance Pack — and why the "
           "Governance Pack is the organisational-layer configuration of the runnable build pack, just "
           "as the decree is the legal-layer configuration. The pack has a concrete acceptance check. "
           "Every recurring decision has exactly one named Accountable body. Every member has a signed "
           "agreement. There is a named owner for the standards portfolio, a written change-control "
           "process, a conformance regime, and a semantic registry with a steward. When those checks "
           "pass, the organisational layer of the framework is genuinely done — a living configuration "
           "that keeps working as the framework grows, not a binder that goes on a shelf after "
           "launch.")

big_slide(prs,
          'Change control and a named owner make governance a living configuration — so the framework '
          'stays current for years instead of freezing at launch.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So governance is configuration that lives. The decree is the legal configuration; the "
          "Governance Pack is the organisational configuration; together they decide who is on the bus "
          "and how it changes over time. With both in place and kept current through change control, "
          "an interoperability framework can grow for years without drifting away from what it was "
          "designed to be. That durability is the entire reason to govern it deliberately — and it is "
          "what hands a sound organisational layer to the architects who build the bus.",
          practice=('Set up your change-control process and standards-portfolio register',
                    'a change-control process, a standards-portfolio register template and a '
                    'semantic-registry charter'))

sources_slide(prs, T, [
    'EU European Interoperability Framework; NIIS X-Road — change control and standards governance '
    '(niis.org)',
    'ISO/IEC 11179 — the semantic registry',
    'PAERA v1.0 — §3.1.3 (Institutional setup)',
    'The Governance Pack — the build-pack artefact',
])


# ================================================================ Thank you
s = add_slide(prs, LAYOUT_THANKS)
notes(s, 'Closing slide for the combined deck. Individual videos end on their sources slide instead.')

# Self-check: the split spec's slide ranges depend on this count, and a helper that
# silently stops drawing shows up first as a slide with no voice-over.
assert len(prs.slides._sldIdLst) == 49, 'slide count changed — re-run the split with --infer-ranges'
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
    'videos', 'module_3', 'en', 'decks', 'KP2_M3_Deck_v0.1.pptx')
os.makedirs(os.path.dirname(OUT), exist_ok=True)
prs.save(OUT)
print('slides:', len(prs.slides._sldIdLst))
print('saved', OUT)

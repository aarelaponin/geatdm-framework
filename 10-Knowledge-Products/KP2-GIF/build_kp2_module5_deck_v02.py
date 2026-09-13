#!/usr/bin/env python3
# Build the KP2 Module 5 video deck on the ITU template — v0.2.
# v0.2: the 10 Sep script-vs-pack corrections (5.2–5.5 text; MEMBERS and HOSTING), and 5.6 rebuilt screen-led — seven
# of its slides are demo evidence recorded from the running federation, read from DEMO_DIR (the build pack's
# scripts/demo-capture.sh output). The build stops if a take it names is missing.
# Content follows KP2_Module5_Script_Bundle_v0.4 (build_kp2_module5_v04.js): ten videos,
# 5.1 – 5.10 — Architect-facing for 5.1–5.8, Strategist-facing for 5.9–5.10, which close the
# knowledge product. Every VO paragraph in the notes is a verbatim scriptBeats[].text from the
# .js (vo_diff.py proves it); the recap slide of every video carries the un-narrated practice
# box (plan D5) — task = the AI tip's title, artefact = the Output half of the tip's io.
# Content only — every generic helper, branding constant and layout index comes from
# ITU-Giga-KP-Plugin/skills/kp-deck-builder/scripts/deck_lib.py (which also ships the
# template). Conventions and design rules: that skill's SKILL.md.
# Generated .pptx is NEVER hand-edited — fix here, re-render, re-run the split
# (kp-deck-builder/scripts/split_module_deck.py + the split spec next to the decks).
# Override paths with TEMPLATE= and OUT_PATH= env vars.
import json
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                '..', 'ITU-Giga-KP-Plugin', 'skills', 'kp-deck-builder', 'scripts'))
from deck_lib import (
    TITLE_CARD_NOTE, hook_slide,
    INK, ITU_BLUE, ITU_BLUE_DARK, LIGHT, PANEL_GREY, WHITE,
    LAYOUT_THANKS, LAYOUT_WHITE,
    add_slide, big_slide, block_slide, box, delete_template_slides, demo_slide, edit_agenda,
    edit_cover, footer, notes, open_template, rows_block, section_slide, set_text,
    solid, sources_slide, terminal_slide, title, two_panel)
from deck_diagrams import arrow, label, node
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.text import PP_ALIGN
from pptx.util import Inches

prs = open_template(os.environ.get('TEMPLATE'))

# 5.6's demo evidence: the takes one capture run produced, copied in whole. A new capture is a new
# KP2_M5_Demo_v0.N directory, never an overwrite — the slides' provenance line names the run.
DEMO_DIR = os.environ.get('DEMO_DIR') or os.path.join(
    os.path.dirname(os.path.abspath(__file__)), 'videos', 'module_5', 'en', 'demo', 'KP2_M5_Demo_v0.1')
with open(os.path.join(DEMO_DIR, 'takes.json'), encoding='utf-8') as f:
    TAKES = json.load(f)['beats']


def take(beat_id, key='file'):
    """(path, caption) for a recorded beat; the build stops if the take is not on disk."""
    path = os.path.join(DEMO_DIR, TAKES[beat_id][key])
    assert os.path.isfile(path), 'missing demo take %s — run the build pack\'s scripts/demo-capture.sh' % path
    return path, TAKES[beat_id]['caption']

AUDIENCE = 'Chief or senior architect · integration lead · agency technical lead — and, for 5.9–5.10, the strategist'

# The demonstration as the build pack runs it (KP2_M5_Script_vs_Pack_Review_2026-09-10.md §2): MoEYS/PEMIS is
# retired, PDGA owns the federation and has its own Security Server. The hosting line is true of any single host,
# so it holds whichever way the hosting decision goes. Each appears on exactly one slide (5.5); the narration
# itself changes in the .js.
MEMBERS = [('PDGA', 'federation owner'),
           ('PNEA', 'examination authority'),
           ('PLR', 'learner registry'),
           ('PNIA', 'identity authority')]
HOSTING = ('For the demonstration, Linkup runs on a single host — a laptop or one VM — in sandboxed '
           'containers, sized for cross-agency calls, not production volumes.')

# The practice box is the video's only call to action and is never narrated (plan D5).
PRACTICE_NOTE = ('PRACTICE BOX (on-screen only — never read it, never paraphrase it, never point '
                 'at it). It replaces the narrated handoff: this video ends on the recap and the '
                 'Sources slide.')


# Two-sentence leads and short comparisons, as in Modules 1-4.
def block(prs, *a, **k):
    k.setdefault('punch_y', 4.35)
    return block_slide(prs, *a, **k)


def panels(prs, *a, **k):
    k.setdefault('height', 3.2)
    return two_panel(prs, *a, **k)


# Opener (hook) slide copy per video — headline + two to four supporting lines, written from
# the same opener narration the hook's note carries. Not a preview of the next slide's list.
HOOKS = {'5.1': ('You do not onboard a whole government at once.',
                 ['Four phases, each delivering something real.',
                  'A decision gate before the next phase is funded.']),
         '5.2': ('The fastest way to wreck an onboarding: find out on go-live day.',
                 ['No security server. No adopted standards. No lawful basis.',
                  'State what a member must have — and check it weeks ahead.']),
         '5.3': ('Connected is not the same as dependable.',
                 ['Up most of the time, slow to answer, and nobody to call when it breaks.',
                  'The Service-Level Agreement turns connected into dependable.']),
         '5.4': ('Everything so far was preparation. This step admits an agency.',
                 ['Registering a member produces real configuration.',
                  'The agency applies, the operator admits it — then the join runs itself.']),
         '5.5': ('Now the live platform the members connect to.',
                 ['A small set of components, each with a clear job.',
                  'Brought up from a run book, so anyone with the build pack can reproduce it.']),
         '5.6': ('The moment the whole framework exists for.',
                 ['A learner gives one number; the state fetches the rest.',
                  'Recorded from the running federation, exactly as it ran.']),
         '5.7': ('The demonstration proves the pattern. It is not production.',
                 ['Know exactly what changes before go-live.',
                  'After go-live is when the gap is most expensive to discover.']),
         '5.8': ('A running bus is not finished. It is operating, every day.',
                 ['Every call leaves a trace in the logs.',
                  'Reading them by hand does not scale past a few services.']),
         '5.9': ('Three documents that must agree — and, left alone, drift apart.',
                 ['The decree, the Governance Pack, the standards portfolio.',
                  'Find the contradictions before a reviewer does.']),
         '5.10': ('The framework was built on education. It is not education-specific.',
                  ['Know what carries to the next sector unchanged, and what is new.',
                   'Get that split right, and the second sector costs a fraction of the first.'])}


def section(code, name, message, note, form='voice-over on text slides'):
    # No runtime on the title card: the narration is generated per take and its length moves
    # with every re-roll.
    s = section_slide(prs, 'KP2 · MODULE 5 · VIDEO %s' % code, code, name, message,
                      'standalone video · ' + form, TITLE_CARD_NOTE)
    head, lines = HOOKS[code]
    hook_slide(prs, head, lines, '%s · %s' % (code, name), note)
    return s


def closing_line(s, text, y, h=0.6):
    tb = box(s, 0.72, y, 11.9, h)
    set_text(tb.text_frame, [[(text, 15.5, True, ITU_BLUE_DARK, False)]])


def flow(prs, head, steps, closing, tag, note, active=None, under=None, h=3.1, closing_y=5.55):
    """Steps left to right, joined by arrows. `active` darkens one step; `under` puts a small
    label under each step (e.g. the video that covers it)."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head)
    n, gap, y = len(steps), 0.35, 1.8
    w = (11.9 - gap * (n - 1)) / n
    for i in range(n - 1):   # connectors first, in the gaps
        x = 0.72 + (i + 1) * w + i * gap
        arrow(s, x + 0.03, y + h / 2, x + gap - 0.03, y + h / 2)
    for i, (name, lines) in enumerate(steps):
        on = i == active
        x = 0.72 + i * (w + gap)
        node(s, x, y, w, h, name, lines, fill=ITU_BLUE_DARK if on else LIGHT,
             ink=WHITE if on else INK, head_ink=WHITE if on else ITU_BLUE_DARK,
             head_size=14, size=16)
        if under and under[i]:
            label(s, x, y + h + 0.1, w, 0.4, under[i], size=13, bold=True, color=ITU_BLUE_DARK)
    closing_line(s, closing, closing_y)
    footer(s, tag)
    notes(s, note)
    return s


def gate(s, x, y, d=0.34):
    g = s.shapes.add_shape(MSO_SHAPE.DIAMOND, Inches(x), Inches(y), Inches(d), Inches(d))
    solid(g, ITU_BLUE_DARK)
    return g


def phase_strip(prs, head, groundwork, phases, closing, tag, note):
    """The build calendar: the groundwork before month 0, then four phases with a go / no-go
    gate between each."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head)
    y, h, gw, gap = 1.75, 3.3, 2.3, 0.5
    x0 = 0.72 + gw + gap
    w = (12.62 - x0 - gap * (len(phases) - 1)) / len(phases)
    arrow(s, 0.72 + gw + 0.05, y + h / 2, x0 - 0.05, y + h / 2)
    node(s, 0.72, y, gw, h, groundwork[0], groundwork[1], fill=PANEL_GREY, head_size=14, size=14.5)
    for i, (name, lines) in enumerate(phases):
        x = x0 + i * (w + gap)
        node(s, x, y, w, h, name, lines, head_size=14, size=14.5)
        if i < len(phases) - 1:
            gate(s, x + w + (gap - 0.34) / 2, y + h / 2 - 0.17)
    gate(s, 0.72, y + h + 0.2, d=0.26)
    label(s, 1.08, y + h + 0.14, 6, 0.38, 'a go / no-go gate — the next phase is funded only if this one delivered',
          size=12.5, bold=True, color=ITU_BLUE_DARK, align=PP_ALIGN.LEFT)
    closing_line(s, closing, 5.9, h=0.9)
    footer(s, tag)
    notes(s, note)
    return s


def federation(prs, head, members, closing, tag, note):
    """The Linkup federation: the Central Server and the Test CA above, one Security Server per
    member below, and the registration that ties them."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head)
    node(s, 0.72, 1.7, 7.4, 1.5, 'CENTRAL SERVER — OPERATED BY PDGA',
         ['The registry of members and services — every security server checks with it.'],
         fill=ITU_BLUE_DARK, ink=WHITE, head_ink=WHITE, head_size=17, size=16)
    node(s, 8.4, 1.7, 4.22, 1.5, 'TEST CA — THE TRUST ANCHOR',
         ['Issues the certificates. A real CA in production.'],
         fill=PANEL_GREY, head_size=17, size=16)
    label(s, 0.72, 3.4, 11.9, 0.45,
          'each Security Server registers with the Central Server and receives its certificate from the Test CA',
          size=13, bold=True, color=ITU_BLUE_DARK, fill=LIGHT)
    n, gap = len(members), 0.3
    w = (11.9 - gap * (n - 1)) / n
    for i, (name, what) in enumerate(members):
        node(s, 0.72 + i * (w + gap), 4.05, w, 1.85, name, ['Security Server', 'the ' + what],
             head_size=18, size=16)
    closing_line(s, closing, 6.15)
    footer(s, tag)
    notes(s, note)
    return s


def call_flow(prs, head, closing, tag, note):
    """The module's centrepiece: one learner, one application at PNEA, two fetches over the bus."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head)
    arrow(s, 3.27, 3.75, 3.83, 3.75, weight_pt=2.5)
    arrow(s, 7.25, 3.2, 8.87, 2.55, weight_pt=2.5)
    arrow(s, 7.25, 4.3, 8.87, 4.95, weight_pt=2.5)
    label(s, 7.25, 3.55, 1.6, 0.42, 'over the bus', size=14, bold=True, color=ITU_BLUE_DARK, fill=WHITE)
    node(s, 0.72, 2.6, 2.5, 2.3, 'THE LEARNER', ['Applies for a credential', 'Gives a national ID — once'],
         fill=PANEL_GREY, head_size=17, size=16)
    node(s, 3.9, 2.2, 3.3, 3.1, 'PNEA', ['The examination authority', 'Pre-fills the application — no paper proof'],
         fill=ITU_BLUE_DARK, ink=WHITE, head_ink=WHITE, head_size=22, size=17)
    node(s, 8.95, 1.7, 3.67, 1.75, 'PNIA', ['The identity authority', 'Returns the identity'],
         head_size=22, size=17)
    node(s, 8.95, 4.05, 3.67, 1.75, 'PLR', ['The learner registry', 'Returns the enrolment'],
         head_size=22, size=17)
    closing_line(s, closing, 6.1)
    footer(s, tag)
    notes(s, note)
    return s


def converge(prs, head, docs, target, closing, tag, note):
    """Three documents read together by one cross-check."""
    s = add_slide(prs, LAYOUT_WHITE)
    title(s, head)
    ys = [1.75, 3.1, 4.45]
    for yy in ys:
        arrow(s, 4.97, yy + 0.575, 6.85, 3.65, weight_pt=2)
    for yy, (name, lines) in zip(ys, docs):
        node(s, 0.72, yy, 4.2, 1.15, name, lines, head_size=17, size=16)
    node(s, 6.9, 2.4, 5.72, 2.5, target[0], target[1], fill=ITU_BLUE_DARK, ink=WHITE,
         head_ink=WHITE, head_size=19, size=17)
    closing_line(s, closing, 5.95)
    footer(s, tag)
    notes(s, note)
    return s


ONBOARDING = [('MEMBER REQUIREMENTS', ['Is the agency ready?']),
              ('APPROVAL', ['The RACI names the body that approves']),
              ('REGISTRATION', ['Subsystem and access-control list admit it']),
              ('CONFORMANCE TEST', ['The gate before its first service']),
              ('FIRST SERVICE LIVE', [])]
ONBOARDING_UNDER = ['video 5.2', 'Module 3', 'video 5.4', 'video 5.4', '']


# ---------------------------------------------------------------- COVER (edit slide 1)
edit_cover(
    prs,
    title_text='Stand it up, prove it,\nrun it',
    kicker='Government Interoperability Framework · Module 5',
    blurb='Ten standalone videos that take the framework live: the four-phase plan a funder can '
          'approve, the Member Requirements and the SLA, registering a member, standing up the '
          'federation, the once-only exchange running for real, the road to production — then '
          'watching the bus, keeping the documents consistent, and carrying it to the next sector.',
    length='~47 mins across 10 videos (5.1 – 5.10)',
    audience=AUDIENCE,
    panel_heading='FROM PLAN TO A RUNNING FRAMEWORK',
    panel_items=['A plan a funder can approve',
                 'Members admitted, and conforming',
                 'A federation, stood up',
                 'One call — the learner asked once',
                 'Watched, consistent, portable'],
    panel_footer='4 phases · 2 go-live approvals · 1 call that proves it',
    note_text='Cover for the combined Module 5 deck. Each section that follows is one standalone '
              '~4–5 minute video. 5.1 to 5.8 are for the Architect who builds and runs the bus; '
              '5.9 and 5.10 return to the Strategist and close the knowledge product.')

# ---------------------------------------------------------------- AGENDA (edit slide 2)
edit_agenda(
    prs,
    header='Module 5 — ten videos',
    items=[
        ('5.1  Plan the build in four phases', '~5 min'),
        ('5.2  The Member Requirements', '~4 min'),
        ('5.3  The SLA — connected to dependable', '~4 min'),
        ('5.4  Register a member on X-Road', '~5 min'),
        ('5.5  Stand up the federation', '~5 min'),
        ('5.6  Run the once-only exchange, live', '~3 min'),
        ('5.7  From demonstration to production', '~5 min'),
        ('5.8  Watch the bus — monitoring', '~5 min'),
        ('5.9  Keep the documents consistent', '~5 min'),
        ('5.10  Carry it to the next sector', '~4 min'),
    ],
    message_paras=[
        'Plan it so a funder can approve it, admit members who are ready, and prove it with one '
        'real call.',
        'Then run it: watch the bus, keep the documents honest, and reuse it for every sector after.',
    ],
    note_text='Navigation slide for the combined deck; the videos ship standalone on YouTube. '
              '5.1 is the plan. 5.2 to 5.4 onboard a member. 5.5 and 5.6 stand the federation up and '
              'prove it. 5.7 is the road to production. 5.8 to 5.10 run the framework and carry it on.')

delete_template_slides(prs, keep=2)


# ================================================================ 5.1
T = '5.1 · Plan the build in four phases'
section('5.1', 'Plan the build in four phases',
        'Foundation, Pilot, Expansion, Optimisation — four phases with decision gates, an honest '
        'calendar, and the four plans beside the schedule that a funder actually reads.',
        "VO: You do not onboard a whole government at once. You build the framework in four "
        "phases, each delivering something real, each with a decision gate before the next is "
        "funded — a pattern drawn from how Estonia and others actually built their buses."
        "\n\n"
        "Retrieval prompt — ask before playing on: from the start of the build, how long until the "
        "first citizen-visible once-only exchange? Answer on the next slide: about a year.")

phase_strip(prs, 'Four phases, a gate at each, on an honest calendar',
            ('BEFORE MONTH 0', ['The groundwork: decree, governance, architecture, standards',
                                'A year to eighteen months of work']),
            [('PHASE 1 · MONTHS 0–6', ['Foundation', 'Platform and trust anchor live',
                                        'Two pilot members']),
             ('PHASE 2 · MONTHS 7–12', ['Pilot and Validation', 'First cross-ministry once-only exchanges',
                                         'Five members']),
             ('PHASE 3 · MONTHS 13–18', ['Expansion', 'First-wave sectors covered',
                                          'Fifteen members, 20+ services']),
             ('PHASE 4 · MONTHS 19–24', ['Optimisation', 'Performance, the long tail, the next wave'])],
            'First citizen-visible once-only exchange: about a year in. National coverage: a '
            'four-to-six-year programme — say so on day one.',
            T,
            "VO: First, the honest calendar. The four build phases start when the foundation is "
            "laid — the decree, the governance, the architecture and the standards portfolio — "
            "and that groundwork is itself a year to eighteen months of team effort, longer in "
            "calendar time because legislative and budget cycles do not hurry. Then the phases. "
            "Phase one, Foundation, months zero to six — the central platform and its trust "
            "anchor go live, two pilot members connect, the first services run. Phase two, Pilot "
            "and Validation, seven to twelve — the first real cross-ministry once-only exchanges "
            "go live, the first five members are on, conformance testing is operating. Phase "
            "three, Expansion, thirteen to eighteen — the first-wave sectors are covered: "
            "fifteen members, twenty or more services. Phase four, Optimisation, nineteen to "
            "twenty-four — performance, the long tail, the next wave of sectors. So the first "
            "citizen-visible once-only exchange lands about a year into the build, and the first "
            "real milestone — the platform running with a handful of member services — two to "
            "three years from the day the programme starts. National coverage is a "
            "four-to-six-year programme. Say that to your minister on day one; it is the number "
            "that keeps the programme funded when the launch enthusiasm fades. Each phase ends "
            "with a decision gate: a go or no-go where the funder and the Steering Committee "
            "confirm the phase actually delivered before the next is funded."
            "\n\n"
            "Production cue: this slide answers the retrieval prompt set on the opener. Reveal the "
            "groundwork first, then the phases left to right.")

block(prs, 'Phase one builds the bus once — everything after reuses it',
      ['Every later phase and every agency that joins consumes that one investment.',
       'That is what a funder should see in the plan.'],
      'A funder paying for a national platform, not a project.',
      T,
      "VO: The phasing protects the re-use logic: phase one builds the shared bus once, and "
      "every phase and every agency after it reuses that one investment. A funder who sees that "
      "is paying for a national platform, not a project.")

panels(prs, 'These build phases are not the enterprise-architecture lifecycle',
       ('THE FIVE-PHASE LIFECYCLE',
        ['Produced your plan.',
         'Designs the target.']),
       ('THE FOUR BUILD PHASES',
        ['Build the bus.',
         'Run inside the lifecycle\'s final phase.']),
       'Same word, two different things — keep them apart in every briefing.',
       T,
       "VO: One caution, because the words collide: these four build phases are not the "
       "five-phase enterprise-architecture lifecycle that produced your plan. That lifecycle "
       "designs the target; this schedule builds the bus, inside its final phase.")

rows_block(prs, 'The plan is five documents, not one schedule',
           [('The phased schedule', 'Outcomes, a go / no-go gate and the risks, per phase.'),
            ('The investment plan', 'Capital and running costs, benchmarked — and the state\'s line to run what a donor built.'),
            ('The procurement plan', 'One lot per domain, never one big-bang contract; the platform bought as an accepted result.'),
            ('The workforce plan', 'The operator from eight to fifteen people towards thirty to eighty; a focal point per member.'),
            ('The risk register and the success metrics', 'Members, services, transactions, uptime, onboarding time, satisfaction.')],
           'A cost frame a funder can check is a cost frame a funder can approve.',
           T,
           "VO: Second, the plan is five documents, not one schedule. The phased schedule — for "
           "each phase its outcomes, its gate, its risks. The investment plan — capital and "
           "running costs across the years, benchmarked against what comparable platforms cost, "
           "and with the state's own budget line for running whatever a donor built, because the "
           "commonest failure is a platform funded to launch and not to operate. The procurement "
           "plan — one lot per domain, sequenced across the phases, and never a single big-bang "
           "contract that hands the architecture to whichever vendor wins; the platform itself "
           "is bought as a working, accepted result, with acceptance tests and penalties, "
           "against the framework's rules as mandatory requirements. The workforce plan — the "
           "operator grows from a first team of eight to fifteen towards thirty to eighty at "
           "national scale, and every member needs a named technical focal point. And the risk "
           "register with the success metrics — members onboarded, services registered, "
           "transactions a quarter, uptime, how long onboarding takes, member satisfaction — "
           "reviewed at every gate. A cost frame a funder can check is a cost frame a funder can "
           "approve."
           "\n\n"
           "Production cue: the pivotal slide of this video. Hold it a beat longer.",
           head_size=17, top=1.55, bottom=6.35)

big_slide(prs,
          'Four phases after the foundation, a gate at each, an honest calendar, and the four plans '
          'beside the schedule — a programme a funder can approve.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So you plan the build in four phases — Foundation, Pilot, Expansion, Optimisation "
          "— each with a gate and a benchmarked cost, on a calendar you have told the truth "
          "about, with the investment, procurement, workforce and risk plans beside the "
          "schedule. That is what turns an ambition into a fundable programme.",
          practice=('Draft your implementation plan — the phased schedule and the four plans beside it',
                    'the phased schedule plus the investment, procurement, workforce and risk plans'))

sources_slide(prs, T, [
    'Estonia — X-Road build-out (cost and timeline benchmark)',
    'ITU DPI Safeguards',
    'NIIS X-Road implementation guidance (niis.org)',
])


# ================================================================ 5.2
T = '5.2 · State what a member must have — the Member Requirements'
section('5.2', 'State what a member must have — the Member Requirements',
        'The Member Requirements template tells an agency exactly what it must have before it can '
        'join — no surprises at go-live.',
        "VO: The fastest way to wreck an onboarding schedule is to discover, on go-live day, "
        "that the joining agency is not actually ready — no security server, no adopted "
        "standards, no lawful basis. The Member Requirements template prevents that. It states, "
        "up front, exactly what an agency must have in place before it can join, so readiness is "
        "checked weeks ahead, not discovered at the deadline.")

rows_block(prs, 'Six things a member must have before it joins',
           [('A security server', 'Its gateway at the edge.'),
            ('A registered identity on the bus', 'Its subsystem.'),
            ('The standards portfolio, adopted', 'So its services speak the framework\'s language.'),
            ('Its data cleaned and conformed to the schema', 'Stale or malformed data poisons every exchange.'),
            ('A lawful basis for its exchanges', 'From the decree.'),
            ('A named technical contact', 'Someone who can fix things when they break.')],
           'Miss any one, and the agency is not ready — however willing it is.',
           T,
           "VO: The requirements are concrete. A security server — the gateway device at the "
           "agency's edge. A registered identity on the bus — its subsystem. The standards "
           "portfolio adopted, so its services speak the framework's language. Its data cleaned "
           "and conformed to the agreed schema, because a member with stale or malformed data "
           "poisons every exchange that uses it. A lawful basis for the exchanges it will take "
           "part in, drawn from the decree. And a named technical contact who can actually fix "
           "things when they break. Miss any one, and the agency is not ready, however willing "
           "it is.",
           head_size=17, top=1.5, bottom=6.4)

block(prs, 'Readiness becomes a checklist, not a judgement',
      ['The agency works the list and either meets each item or does not — no architect guessing '
       'whether someone seems ready.',
       'That objectivity lets you schedule onboarding with confidence, and keeps a half-ready member '
       'from breaking the exchanges it touches.'],
      'And the list says "not yet" for you.',
      T,
      "VO: The template turns readiness from a judgement call into an objective checklist. "
      "Instead of an architect deciding, agency by agency, whether someone seems ready, the "
      "agency works through the list and either meets each item or does not. That objectivity is "
      "what lets you schedule onboarding with confidence, and it protects the framework from a "
      "member that joins half-ready and breaks the exchanges it touches. It also takes the "
      "awkwardness out of saying 'not yet' — the list says it for you."
      "\n\n"
      "Production cue: the pivotal slide of this video. Hold it a beat longer.")

flow(prs, 'The Member Requirements are the front end of onboarding', ONBOARDING,
     'The six answers travel in the join request — checked before anyone approves it.',
     T,
     "VO: And the checklist is not a separate form that gets filed and forgotten. In the build "
     "pack it is the front of the join request itself: the six answers travel in the request an "
     "applying agency submits, and they are checked before any operator can approve it. Two "
     "things sit beside it on purpose — the signed membership agreement and the named "
     "data-protection officer — and the pack says plainly where it does not hold them. An agency "
     "that passes the Member Requirements is an agency ready to be registered on the bus, which "
     "is the technical step that admits it.",
     active=0, under=ONBOARDING_UNDER)

big_slide(prs,
          'A Member Requirements checklist makes readiness objective and checkable weeks before '
          'go-live — so onboarding is scheduled, not gambled.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So before any agency is registered on the bus, it passes the Member Requirements: "
          "a security server, a registered identity, the standards adopted, clean data, a lawful "
          "basis, a named contact. The checklist makes readiness objective, lets you schedule "
          "onboarding instead of gambling on it, and is reused for every member that follows.",
          practice=('Draft the Member Requirements checklist',
                    'a reusable Member Requirements checklist with evidence and a readiness verdict'))

sources_slide(prs, T, [
    'NIIS X-Road member requirements and onboarding (niis.org)',
    'EU European Interoperability Framework (EIF)',
])


# ================================================================ 5.3
T = '5.3 · Make \'connected\' mean \'dependable\' — the SLA'
section('5.3', 'Make \'connected\' mean \'dependable\' — the SLA',
        'A Service-Level Agreement turns \'connected\' into \'dependable\' — the template makes it a '
        'fill-in, not a negotiation from scratch.',
        "VO: A member being connected is not the same as a member being dependable. A service "
        "that is up most of the time, answers slowly, and has no one to call when it breaks is "
        "connected but useless to a consumer who needs the data at the moment a citizen is "
        "standing at the counter. The Service-Level Agreement is what turns connected into "
        "dependable — and a template turns writing one from a negotiation into a fill-in.")

rows_block(prs, 'The SLA sets five numbers a consumer can rely on',
           [('Availability', 'The uptime the provider commits to.'),
            ('Response time', 'How fast a call returns.'),
            ('Support hours', 'When there is someone to help.'),
            ('Incident response', 'Who to call when it fails — and how fast they respond.'),
            ('Change notice', 'How much warning before the service changes.')],
           'The numbers that turn a connection into a dependency.',
           T,
           "VO: The SLA sets the numbers a consumer can rely on. Availability — the uptime the "
           "provider commits to. Response time — how fast a call returns. Support hours — when "
           "there is someone to help. Incident response — who to call when the service fails, "
           "and how quickly they will respond. And change notice — how much warning a provider "
           "gives before changing the service, so consumers are not broken by a surprise. These "
           "are the numbers that turn a connection into a dependency a consumer can build a real "
           "citizen service on.",
           numbered=False)

panels(prs, 'The SLA makes the member obligations specific',
       ('THE OBLIGATION SAYS',
        ['"A member meets service levels."',
         'In principle — a wish.']),
       ('THE SLA SAYS',
        ['Specific numbers, agreed and signed.',
         'A commitment the Operating Authority can hold a member to.']),
       'One SLA per published service — a member that only consumes signs none.',
       T,
       "VO: The SLA operationalises the member obligations from the governance module. Those "
       "obligations said, in principle, that a member meets service levels; the SLA is where the "
       "service levels become specific numbers, agreed and signed. Without the SLA, 'meets "
       "service levels' is a wish. With it, it is a commitment the Operating Authority can hold "
       "a member to — and a number a consumer can plan around. And the SLA belongs to a service, "
       "not to a member: every service a provider publishes carries its own, and a member that "
       "only consumes publishes nothing, so it signs none.",
       right_fill=LIGHT)

block(prs, 'Set the numbers with the provider, not for them',
      ['A target the provider cannot meet is a target it will quietly ignore.',
       'Agree numbers it can genuinely hit, raise them as the platform matures — and reuse the '
       'template for every service on the bus.'],
      'An SLA everyone ignores is worse than none.',
      T,
      "VO: One rule of fairness, and it is the rule that actually gets SLAs signed: set the "
      "numbers with the provider, not for them. A target the provider cannot meet is a target "
      "the provider will quietly ignore, and an SLA everyone ignores is worse than none. Agree "
      "numbers the provider can genuinely hit — and raise them over time as the platform matures "
      "— and the SLA becomes real rather than decorative. The template then makes it fast: fill "
      "in the targets for each service, agree them with the provider, sign, and reuse the same "
      "template for every service on the bus."
      "\n\n"
      "Production cue: the pivotal slide of this video. Hold it a beat longer.")

big_slide(prs,
          'The SLA is the numbers that make a connection dependable — agreed with the provider, '
          'signed, and reused for every service.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the Service-Level Agreement is what turns a connected member into a dependable "
          "one. Availability, response time, support, incident response, change notice — the "
          "numbers a consumer can rely on, made specific from the governance obligations, agreed "
          "with the provider so they are real, and captured in a template you reuse for every "
          "service. That is the difference between a bus that works in a demonstration and one a "
          "country can run citizen services on.",
          practice=('Draft the Service-Level Agreement template',
                    'an SLA template with pilot and production targets per service'))

sources_slide(prs, T, [
    'NIIS X-Road service-level guidance (niis.org)',
    'The member obligations — Module 3',
    'EU European Interoperability Framework (EIF)',
])


# ================================================================ 5.4
T = '5.4 · Register a member on X-Road'
section('5.4', 'Register a member on X-Road',
        'The subsystem registration and the access-control list admit one agency to the bus — '
        'produced by an admitted, validated join, not typed by hand.',
        "VO: Everything so far has been preparation — the phased plan, the Member Requirements, "
        "the Service-Level Agreement. Registering a member on X-Road is the technical step that "
        "actually admits an agency to the bus, and it produces real configuration: the subsystem "
        "registration and the access-control list. This is a build step, and nobody types it into "
        "the bus by hand: the agency applies, the operator admits it, and the registration runs "
        "itself.")

panels(prs, 'Registration produces two configuration artefacts',
       ('THE SUBSYSTEM — WHO IT IS',
        ['The member\'s registered identity on the bus.',
         'Member class, member code, subsystem code — what the bus routes a call by.']),
       ('THE ACCESS-CONTROL LIST — WHO MAY CALL IT',
        ['Which other members may call its services.',
         'Granted deliberately, service by service.']),
       'Being on the bus does not mean everyone may call everything.',
       T,
       "VO: Registering a member produces two configuration artefacts. The subsystem — the "
       "member's registered identity on the bus, made of its member class, member code and "
       "subsystem code, the identifiers the bus uses to route a call to it. And the "
       "access-control list — which other members are allowed to call this member's services, "
       "because being on the bus does not mean everyone may call everything; access is granted "
       "deliberately, service by service. Together, these two artefacts admit the agency and say "
       "exactly who may talk to it.",
       right_fill=LIGHT)

# The module's emotional peak — the only full-colour punch block in the deck.
block(prs, 'Admit, validate — then the join runs itself',
      ['The agency submits a join request; a validator checks every identifier for legality and uniqueness, '
       'fetches the contract, and checks the access list.',
       'The operator approves only by citing the admission decision — then the registration runs over the '
       'admin interface and proves itself with a real call.'],
      'A wrong member code throws no error on the bus — so the validator refuses it before it gets there.',
      T,
      "VO: In the build pack, the agency submits a join request carrying its details, its services "
      "and who may call them. A validator checks it before any person acts on it: every identifier "
      "is allocated at admission and checked for legality and uniqueness, the service contract is "
      "fetched and screened, the access list is sane. Only then can the operator approve — and only "
      "by citing the admission decision, so the technical join cannot run ahead of the governance "
      "one. After approval, the registration runs itself over the bus's admin interface and proves "
      "itself with a real call. This is where the discipline matters most: a wrong member code "
      "throws no error on the bus. It silently routes nowhere, or to the wrong agency. So the "
      "validator refuses it before it gets there."
      "\n\n"
      "Production cue: the pivotal slide of this video, and the module's one full-colour block. "
      "Hold it a beat longer.",
      punch_fill=ITU_BLUE, punch_ink=WHITE)

flow(prs, 'One registration pattern, wrapped in a repeatable process', ONBOARDING,
     'The twentieth agency onboards as cleanly as the second.',
     T,
     "VO: And this is the same registration shape for every member — fill the member's details "
     "into the same template, generate the same two artefacts. The onboarding workflow and the "
     "governance RACI wrap it into a repeatable process: the Member Requirements confirm the "
     "agency is ready, the RACI says which body approves, and this registration configuration "
     "admits it. You produce the executable configuration here; the workflow and the approvals "
     "from the earlier modules surround it. That reuse — one registration pattern applied to "
     "every member — is what lets the framework onboard its twentieth agency as cleanly as its "
     "second.",
     active=2, under=ONBOARDING_UNDER)

rows_block(prs, 'Conformance is the gate between registration and going live',
           [('It proves it meets the standards portfolio',
             'Its server, its certificates and its services do what the framework requires.'),
            ('Checked in proportion to the risk',
             'Self-assessment for the routine, a third-party check for high-risk, the operator\'s test suite.'),
            ('Not a certificate for life',
             'Re-tested every two years, and on every change to a binding standard.')],
           'The step programmes skip in a hurry — and discover when one member\'s data breaks everyone\'s.',
           T,
           "VO: Registration is not the last gate. Between a member's security server going up "
           "and its first service going live sits the conformance test: the member proves, "
           "against the standards portfolio, that its server, its certificates and its services "
           "do what the framework requires. For routine members that is a self-assessment "
           "against a published checklist; for high-risk services a third-party check; and where "
           "the operator has built one, a conformance test suite it runs itself. A member that "
           "fails fixes and re-tests until it passes. And it is not a certificate for life — "
           "members are re-tested on a cycle, typically every two years, and whenever a binding "
           "standard changes. This is the step programmes skip when they are in a hurry, and the "
           "step whose absence is discovered when one member's malformed data breaks everyone "
           "else's service.",
           numbered=False, head_size=18)

block(prs, 'Registering a member is configuration, not paperwork',
      ['The subsystem and the access-control list go straight into the build pack, under the '
       'member\'s folder.',
       'They are part of the runnable proving slice — what the build pack\'s acceptance check '
       'deploys and tests.'],
      'Executable configuration that puts a real agency on the bus.',
      T,
      "VO: The configuration goes straight into the build pack, under the member's folder — it "
      "is part of the runnable proving slice, the thing the build pack's acceptance check "
      "deploys and tests. So registering a member is not paperwork that describes an intention. "
      "It is executable configuration that puts a real agency on the bus, ready to provide and "
      "consume services. The three Progressa members — PNEA, PLR and PNIA — are registered "
      "this way, beside PDGA, which owns the federation; together they are the participants a "
      "real exchange needs.")

big_slide(prs,
          'The subsystem registration and the access-control list admit a member — validated, '
          'approved, applied — and a conformance test is the gate before it goes live.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So registering a member is where onboarding becomes configuration. The agency is "
          "admitted, its request validated, and the subsystem and access-control list are written "
          "and applied for it. Two artefacts, the same shape for every member, admitting one "
          "agency to the bus and naming who may call it. That is the technical core of onboarding — and the configuration the "
          "demonstration runs on.",
          practice=('Generate the X-Road member registration (subsystem + ACL)',
                    'the subsystem registration and access-control list with [confirm] placeholders, '
                    'and an onboarding checklist'))

sources_slide(prs, T, [
    'NIIS X-Road member and subsystem registration (niis.org)',
    'X-Road access-control list configuration',
])


# ================================================================ 5.5
T = '5.5 · Stand up the federation'
section('5.5', 'Stand up the federation',
        'Central Server, four Security Servers, a Test CA — the Linkup federation, stood up from the '
        'run book.',
        "VO: With members registered, you stand up the federation itself — the live platform "
        "they connect to. For our demonstration this is Linkup, an X-Road federation that runs "
        "on a single host in sandboxed containers. It has a small set of components, each with a clear job, and you bring it up "
        "from a run book, so that anyone with the build pack can reproduce the same federation "
        "rather than admire a one-off.")

federation(prs, 'One registry, one gateway per member, one trust anchor', MEMBERS,
           'The Security Servers carry the trust burden at each edge.',
           T,
           "VO: The federation has three kinds of component. The Central Server, operated by "
           "PDGA, is the registry of who is a member and what services exist — the heart that "
           "every security server checks with before it routes a call. The four Security Servers "
           "— one for PDGA, which owns the federation and runs its management services, and one "
           "each for the examination authority PNEA, the learner registry PLR, and the identity "
           "authority PNIA — are the gateways, the devices that carry the trust burden at each edge. And the "
           "Test CA, the certification authority that issues the certificates the security "
           "servers use to prove who they are. In production that is a real certification "
           "authority; in the demonstration, a test one."
           "\n\n"
           "On screen: the member list and the hosting line live in MEMBERS and HOSTING at the top "
           "of the build script.")

rows_block(prs, 'Bring it up from the run book, in order',
           [('The Central Server first', 'The registry every other component checks with.'),
            ('Then the Test CA', 'Issues the certificates, with its certificate-status and time-stamping services.'),
            ('Then each Security Server', 'Registers, receives its certificate — and the Central Server approves it explicitly.')],
           HOSTING,
           T,
           "VO: Standing it up is a run-book exercise, deliberately. Each component is brought "
           "up in order — the Central Server first, then the Test CA with its certificate-status "
           "and time-stamping services, then each Security Server registers with the Central "
           "Server, receives its certificate, and waits for the Central Server to approve that "
           "registration explicitly — the technical footprint of the admission decision. The run book makes "
           "this reproducible: anyone with the build pack can stand up the same federation, "
           "which is exactly what makes the demonstration a template rather than a one-off. For "
           "the demonstration, Linkup runs all of this on a single host — a laptop or one VM — "
           "in sandboxed containers, sized for showing cross-agency calls, not for production "
           "volumes.",
           bottom=5.6)

block(prs, 'Standing up the federation is where the abstract becomes real',
      ['Four real security servers, registered with a central server, trusting a common certification '
       'authority.',
       'The build pack\'s acceptance check confirms it actually stands up — not merely that the files '
       'exist.'],
      'The bus exists, the members are on it — only the call is left.',
      T,
      "VO: When the federation is up, you have something concrete: four real security servers, "
      "registered with a central server, trusting a common certification authority, ready to "
      "carry a real call. The configuration that does this — the federation config and each "
      "member's registration — lives in the build pack, and the build pack's acceptance check is "
      "what confirms the federation actually stands up, not merely that the files exist. This is "
      "the moment the abstract becomes real: up to now this knowledge product has produced "
      "documents and configuration; standing up the federation turns that configuration into a "
      "running platform. The bus exists, the members are on it, and the only thing left is to "
      "make a real call across it."
      "\n\n"
      "Production cue: the pivotal slide of this video. Hold it a beat longer.")

big_slide(prs,
          'Central Server, four Security Servers, a Test CA — stood up from the run book, the '
          'federation is real and ready to carry a call.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So you stand up the federation from a run book: the Central Server at PDGA, four "
          "Security Servers for PDGA and the three Progressa members, the Test CA that anchors trust. "
          "Reproducible from the build pack, confirmed by its acceptance check. With the "
          "federation running, the framework has stopped being a design and become a platform — "
          "ready for the call that proves it.",
          practice=('Draft the federation stand-up run book',
                    'an ordered, reproducible stand-up run book with production-difference notes'))

sources_slide(prs, T, [
    'NIIS X-Road federation — Central Server, Security Server, Test CA (niis.org)',
    'The Linkup demonstration federation',
])


# ================================================================ 5.6
# Screen-led: slides 4–10 are demo evidence recorded from the running federation (DEMO_DIR). One observation per
# slide, the visible thing named before what it means. The drawn call flow stays as the picture of what the
# recording shows; v0.1's "every layer" rows slide is the layer view (C4) now, and the proving-slice block folded
# into the recap. The receipts capture (C3) is GitBook material, not a slide.
T = '5.6 · Run the once-only exchange, live'
section('5.6', 'Run the once-only exchange, live',
        'PNEA issues a credential and pre-fills identity from PNIA and enrolment from PLR — a real '
        'cross-server call, the data asked once.',
        "VO: This is the moment the whole framework exists for: a learner applies for a credential, "
        "gives one number, and the state fetches the rest. What you are about to see was recorded "
        "from the running federation, exactly as it ran.",
        form='voice-over on text slides and a recorded demonstration')

call_flow(prs, 'One call — identity from PNIA, enrolment from PLR',
          'Without once-only, the learner brings paper proof of both. With it, the learner is asked once.',
          T,
          "VO: Here is the call you are about to watch. A learner applies for a credential at PNEA, "
          "the examination authority. Without once-only, the learner brings paper proof of identity "
          "and of enrolment. With it, PNEA fetches the identity from PNIA and the enrolment from PLR, "
          "over the bus."
          "\n\n"
          "Production cue: the picture of what the recording shows. The frames that follow map onto "
          "these boxes.")

png, cap = take('C1-before')
demo_slide(prs, 'Before the bus: ten blank rows', png, cap, T,
           "VO: The form before the call: ten rows, all blank. Without the bus, that is ten questions "
           "the learner answers, and two sets of paper proof.")

png, cap = take('C2-after')
demo_slide(prs, 'One question asked, nine rows filled', png, cap, T,
           "VO: The same form once the learner gives the national ID. Nine rows fill in: five from "
           "PNIA, four from PLR, each labelled with its source. One question asked, nine fetched.")

png, cap = take('C4-layers')
demo_slide(prs, 'What PNIA sends — and what it withholds', png, cap, T,
           "VO: The second tab reads the same exchange by layer. In the legal pane, PNIA sends five "
           "fields and names three it holds but withholds: a mother's name, a birth registration "
           "number, an address. The purpose does not need them.")

png, cap = take('C5-allowed-denied')
demo_slide(prs, 'Same question, two callers, two answers', png, cap, T,
           "VO: The third tab asks PNIA the identical question from two callers. PNEA is allowed. "
           "PLR, a member of the same bus, gets an access-denied fault from PNIA's access list. "
           "Being on the bus is not permission.")

still, cap = take('C6-break-restore', 'still')
clip, _ = take('C6-break-restore')
demo_slide(prs, 'One grant withdrawn, one source broken', still, cap, T,
           "VO: Now the operator withdraws PNEA's permission and runs the form again. Within seconds "
           "the PNIA rows are denied, while the PLR rows still fill: one grant withdrawn, one source "
           "broken. Restore it, and the form is whole.",
           clip=clip)

txt, cap = take('C7-application')
terminal_slide(prs, 'The application, with every field\'s source', txt, cap, T,
               "VO: The exchange is also written to disk as the assembled application: one line per "
               "field, each with its source. The national ID is the only line the citizen supplied.")

txt, cap = take('C8-acceptance')
terminal_slide(prs, 'Six acceptance checks, all green', txt, cap, T,
               "VO: Last, the acceptance script runs this exchange as six checks: the call, the right "
               "learner, asked once, the denial, a clean not-found, and field conformance. All six pass "
               "— the technical half of go-live approval.")

big_slide(prs,
          'One field asked, nine fetched, only what the purpose needs — and six acceptance checks green.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the exchange is shown, not explained: one field asked, nine fetched, only what the "
          "purpose needs, a denial the access list enforces, six checks green. That is the "
          "framework, running.",
          practice=('Script and verify the once-only exchange (the acceptance check)',
                    'a given/when/then acceptance script with a negative check, mapped to the four '
                    'layers'))

sources_slide(prs, T, [
    'PAERA v1.0 — §5.2, Principle #5 (Once-Only)',
    'NIIS X-Road (niis.org)',
    'The Linkup demonstration federation',
])


# ================================================================ 5.7
T = '5.7 · From demonstration to production'
section('5.7', 'From demonstration to production',
        'What changes between the sandboxed Linkup demonstration and a production-grade federation a '
        'country would actually run.',
        "VO: The demonstration proves the pattern. It is not, and must not be mistaken for, a "
        "production system. The architect's last job in this module is to know exactly what "
        "changes between the demonstration and a production-grade federation, so the country "
        "plans and budgets for that gap rather than discovering it after go-live — which is the "
        "moment it is most expensive to discover.")

two_panel(prs, 'Production adds seven things around the same configuration',
          ('THE DEMONSTRATION',
           ['Everything on one VM, in sandboxed containers',
            'A Test CA',
            'A handful of demonstration calls']),
          ('PRODUCTION',
           ['Separate, sized hosts',
            'A real certification authority',
            'High availability and redundancy',
            'Real monitoring and alerting',
            'Capacity for real volumes',
            'Round-the-clock operational support',
            'Security hardening and audit']),
          'Specific, and plannable.',
          T,
          "VO: The differences are specific. The demonstration runs everything on one VM; "
          "production separates the components onto real, sized hosts. The demonstration uses a "
          "Test CA; production uses a real certification authority. Production adds high "
          "availability and redundancy, so a failed component does not stop the bus. It adds "
          "real monitoring and alerting, so problems are caught before citizens notice them. It "
          "is sized for real transaction volumes, not a handful of demonstration calls. It has "
          "round-the-clock operational support — the Operating Authority's standing team. And it "
          "is security-hardened and audited to the standard a national platform carrying citizen "
          "data must meet.",
          right_fill=LIGHT, height=4.1)

flow(prs, 'Retire the legacy links the bus replaces — agency by agency',
     [('STAND UP', ['The new once-only exchange']),
      ('PARALLEL-RUN', ['Beside the agency\'s old point-to-point link']),
      ('CONFIRM', ['The two agree']),
      ('CUT OVER', ['Switch the consumers across, decommission the old link'])],
     'Left alone, you run both — worse than either. This is the step that ends the sprawl.',
     T,
     "VO: There is one more production task, and it does not appear on the hardening list "
     "because it concerns the old world rather than the new: migrating each agency off the "
     "legacy point-to-point links the bus replaces, and retiring them. A new bus does not retire "
     "the old links by itself — left alone, you run both, which is worse than either. So per "
     "agency the pattern is parallel-run then cut over: stand up the new once-only exchange, run "
     "it beside the agency's existing point-to-point link until you have confirmed the two "
     "agree, then switch the consumers across and decommission the old link. Retiring those "
     "links is the step that actually ends the point-to-point sprawl Module 1 diagnosed — "
     "schedule it, agency by agency, in the multi-agency phase of the plan, with a "
     "migration-and-retirement step in each onboarding.",
     active=3)

block(prs, 'The shape of the configuration does not change',
      ['The subsystem registrations, the service descriptions, the semantic map — the same in '
       'production.',
       'Production changes the scale, the resilience and the operations around them, not the design.'],
      'Production is the same pattern, hardened — so the demonstration de-risks the build.',
      T,
      "VO: Here is the reassuring part, and it is the point of building a demonstration at all: "
      "none of this changes the shape of the configuration. The subsystem registrations, the "
      "service descriptions, the semantic map — they are the same in production. Production "
      "changes the scale, the resilience and the operations around the configuration, not the "
      "design of it. So the demonstration genuinely de-risks the production build. You have "
      "proven the pattern works; production is the same pattern, hardened and operated. The "
      "later phases of your four-phase plan are exactly where that production build is funded "
      "and delivered, against the cost frame."
      "\n\n"
      "Production cue: the pivotal slide of this video. Hold it a beat longer.")

panels(prs, 'Never ship the demonstration as production',
       ('PERFECT FOR',
        ['Proving the pattern.',
         'A sandboxed single-VM federation with a test CA.']),
       ('WRONG FOR',
        ['Carrying real citizen data at scale.',
         'Anything a country has to run.']),
       'Know the gap, plan it into the phased roadmap, budget it with the cost frame.',
       T,
       "VO: The one thing not to do is ship the demonstration as production. A sandboxed "
       "single-VM federation with a test certification authority is perfect for proving the "
       "pattern and wrong for carrying real citizen data at scale. Know the gap, plan it into "
       "the phased roadmap, budget it with the cost frame — and the move from demonstration to "
       "production becomes an engineering exercise the team can plan, not a surprise that "
       "derails go-live.")

big_slide(prs,
          'Production is the demonstration\'s pattern, hardened — separate hosts, a real CA, high '
          'availability, monitoring, support. Plan the gap; do not ship the demo.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So you close the implementation module by being honest about the gap between "
          "demonstration and production. Separate hosts, a real certification authority, high "
          "availability, monitoring, capacity, support, hardening — the production differences "
          "are specific and plannable. The configuration's shape does not change, so the "
          "demonstration de-risks the build. Plan the gap into the roadmap, budget it with the "
          "cost frame, and never ship the demonstration as the production platform. That is how "
          "a proven pattern becomes a system a country runs.",
          practice=('Build the demonstration-to-production gap checklist',
                    'a gap checklist mapped to the phased plan and cost frame'))

sources_slide(prs, T, [
    'NIIS X-Road production and operations guidance (niis.org)',
    'ITU DPI Safeguards',
])


# ================================================================ 5.8
T = '5.8 · Watch the bus — monitoring and anomaly detection'
section('5.8', 'Watch the bus — monitoring and anomaly detection',
        'Point Claude at the real bus logs to spot a failing or unusual exchange before a citizen does.',
        "VO: A production bus needs real monitoring and alerting, and this is what that "
        "monitoring is for. A running bus is not finished — it is operating, every day. Every "
        "call leaves a trace in the logs: success or failure, fast or slow, who called whom. "
        "Reading those logs by hand does not scale past a few services. The monitoring play "
        "points Claude at the real bus logs and turns them into something a Strategist can act "
        "on — a plain-language picture of the bus's health, and a flag when something looks "
        "wrong.")

rows_block(prs, 'The logs hold the operational truth',
           [('Which exchanges ran, and which failed', 'And how often.'),
            ('Latency', 'Whether calls are getting slower — a service under strain.'),
            ('Unusual patterns', 'A spike, a new caller, a surge at three in the morning.'),
            ('Compliance', 'Which members still meet the binding standards, and which are drifting.')],
           'The metadata of exchanges — never their contents.',
           T,
           "VO: The logs hold the operational truth. Which exchanges ran and which failed, and "
           "how often. Whether calls are getting slower — a sign of a service under strain. And "
           "unusual patterns — a sudden spike, an agency calling a service it never called "
           "before, a surge of activity at three in the morning. The play reads all of this and "
           "writes a plain-language health report, flagging the things that deserve a human's "
           "attention this week.",
           numbered=False)

panels(prs, 'Two loops: health every day, compliance every quarter',
       ('DAILY — OPERATIONAL HEALTH',
        ['A failing service caught before a citizen is turned away.',
         'A slowdown addressed before it becomes an outage.']),
       ('QUARTERLY — MEMBER COMPLIANCE',
        ['To the Steering Committee each quarter, the Council each year.',
         'To citizens twice a year, where transparency policy asks.']),
       'Monitoring that reaches a governance table is accountability. The rest is a dashboard.',
       T,
       "VO: The value is early warning. A failing service, caught in the logs, is fixed before a "
       "citizen standing at a counter is turned away. A creeping slowdown, spotted early, is "
       "addressed before it becomes an outage. The Operating Authority's team uses this to watch "
       "a growing federation without drowning in raw logs — the AI does the reading, the team "
       "does the acting. That is what lets a small operations team keep a hundred-service bus "
       "healthy. And the same reading serves a second, slower loop. Operational health is "
       "watched daily; member compliance is reviewed quarterly — which members still meet the "
       "binding standards, whose conformance has lapsed, what breaches occurred and what was "
       "done. That review goes to the Steering Committee each quarter, to the Council each year, "
       "and, where the country's transparency policy asks for it, to citizens twice a year. "
       "Monitoring that never reaches a governance table is a dashboard; monitoring that does is "
       "accountability."
       "\n\n"
       "Production cue: the pivotal slide of this video. Hold it a beat longer.",
       right_fill=LIGHT)

panels(prs, 'Two safeguards that are not optional',
       ('THE AI FLAGS, A HUMAN INVESTIGATES',
        ['An anomaly is a question to look into.',
         'Not a verdict to act on automatically.']),
       ('NO CITIZEN DATA IN THE PROMPT',
        ['Which service, success or failure, how fast.',
         'A monitoring tool that ingests citizen data becomes the risk.']),
       'Monitor the traffic, never the cargo.',
       T,
       "VO: Two safeguards matter here, and neither is optional. The AI flags; a human "
       "investigates — an anomaly is a question to look into, not a verdict to act on "
       "automatically. And, critically, the logs you feed the play must carry no citizen "
       "personal data. You monitor the metadata of exchanges — which service, success or "
       "failure, how fast — not the contents of what was exchanged. A monitoring tool that "
       "ingested citizen data would itself become a data-protection risk, the very thing the "
       "framework exists to prevent. Monitor the traffic, never the cargo.")

big_slide(prs,
          'The logs hold the bus\'s health — the AI makes it legible, a human acts on the flags, and '
          'citizen data never enters the prompt.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So monitoring is how a framework stays healthy as it grows from one exchange to "
          "hundreds. The bus tells you how it is doing, in its logs; the AI play makes that "
          "legible; the Operating Authority acts on the flags; and citizen data never enters the "
          "prompt. Monitoring is the difference between a federation someone is watching and one "
          "that fails silently until a citizen complains.",
          practice=('Summarise bus health and flag anomalies from the logs',
                    'a health summary plus a prioritised list of anomalies to investigate'))

sources_slide(prs, T, [
    'NIIS X-Road monitoring and operational logs (niis.org)',
    'The Linkup demonstration federation',
    'ITU DPI Safeguards',
])


# ================================================================ 5.9
T = '5.9 · Keep the documents honest — the consistency cross-check'
section('5.9', 'Keep the documents honest — the consistency cross-check',
        'Keep the decree, the Governance Pack and the standards portfolio saying the same thing — a '
        'cross-check that catches drift across the three.',
        "VO: A mature framework produces three big documents that must agree with each other: "
        "the decree, which is the legal layer; the Governance Pack, which is the organisational "
        "layer; and the standards portfolio, which is the technical layer. The trouble is that, "
        "separately maintained, they drift apart over time — a standard updated in the portfolio "
        "but not reflected in the decree, a role the Governance Pack renames but the decree "
        "still names the old way. The consistency cross-check reads the three for contradictions "
        "before a reviewer or a member finds them for you.")

rows_block(prs, 'Drift is specific and predictable',
           [('A standard updated in the portfolio', 'But the decree still references the old version.'),
            ('A body in the RACI', 'That the Governance Pack no longer describes.'),
            ('An exchange the decree authorises', 'That no service implements — or a service the decree never authorised.'),
            ('One term, three meanings', '"Member", "service", "authority" — used slightly differently in each.')],
           'Each one quietly undermines the framework the moment someone notices.',
           T,
           "VO: Drift is specific and predictable. The standards portfolio adopts a new version, "
           "but the decree still references the old one. The RACI names a body the Governance "
           "Pack no longer describes. The decree authorises an exchange that no service in the "
           "catalogue implements, or a service exists that the decree never authorised. And the "
           "same term — 'member', 'service', 'authority' — is used to mean slightly different "
           "things in the three documents. Each of these is a contradiction that quietly "
           "undermines the framework's credibility the moment someone notices it.")

converge(prs, 'Read the three together — before a reviewer does',
         [('THE DECREE', ['The legal layer']),
          ('THE GOVERNANCE PACK', ['The organisational layer']),
          ('THE STANDARDS PORTFOLIO', ['The technical layer'])],
         ('THE CROSS-CHECK', ['Reads all three documents together.',
                              'Reports where they disagree, and on what.',
                              'Bus monitoring watches the traffic; this watches the documents.']),
         'Caught by you — not by a Ministry of Justice reviewer, a joining member or an auditor.',
         T,
         "VO: The play reads all three documents and reports the contradictions — where they "
         "disagree, and on what. It is the document analogue of the bus monitoring in the "
         "previous video: instead of watching the live traffic, it watches the documents for "
         "inconsistency. The value is catching drift before a Ministry of Justice reviewer, a "
         "joining member, or an auditor catches it for you — because a framework whose own three "
         "foundational documents contradict each other loses trust faster than almost anything "
         "else can cost it."
         "\n\n"
         "Production cue: the pivotal slide of this video. Hold it a beat longer.")

block(prs, 'The AI finds the drift — a person decides which is right',
      ['Whether the catalogue or the decree is correct is a judgement with legal and governance '
       'consequences.',
       'So the play never edits the decree on its own. Run it whenever any of the three changes.'],
      'Consistency is a direction, not an automatic edit.',
      T,
      "VO: The safeguard is the same shape as always. The AI flags the contradiction; a human "
      "decides which of the three documents is correct and fixes it. The play does not edit the "
      "decree on its own, because deciding whether the catalogue or the decree is right is a "
      "judgement with legal and governance consequences. The play finds the drift; a person "
      "resolves it. Run it whenever any of the three documents changes, and the framework's "
      "documents stay honest with each other as it evolves.")

big_slide(prs,
          'Cross-check the decree, the Governance Pack and the standards portfolio — the AI finds the '
          'drift, a human resolves which document is right.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the consistency cross-check keeps the framework's three foundational documents "
          "telling the same story. The AI reads the decree, the Governance Pack and the "
          "standards portfolio together and flags where they have drifted apart; a human decides "
          "which is right and fixes it. Run it on every change, and you catch the contradictions "
          "yourself, before the reviewer, the member or the auditor does.",
          practice=('Cross-check the decree, Governance Pack and standards portfolio for drift',
                    'a contradiction table with a human question for each, ordered by risk'))

sources_slide(prs, T, [
    'The decree — Module 2',
    'The Governance Pack — Module 3',
    'The standards portfolio — Module 4',
    'EU European Interoperability Framework (EIF)',
])


# ================================================================ 5.10
T = '5.10 · Carry the framework to the next sector'
section('5.10', 'Carry the framework to the next sector',
        'The same four-layer framework stands up interoperability beyond education — the method is '
        'sector-portable, and the second sector is cheaper than the first.',
        "VO: Everything in this knowledge product was demonstrated on education — Progressa's "
        "schools, learners and credentials. But the framework is not education-specific, and now "
        "that it runs, the most important thing a Strategist can know is exactly which parts "
        "carry to the next sector unchanged and which parts are new. Get that split right, and "
        "the second sector costs a fraction of the first.")

two_panel(prs, 'Two things are new per sector — the rest carries unchanged',
          ('CARRIES UNCHANGED',
           ['The four layers',
            'The decree pattern',
            'The governance — tiers, RACI, Operating Authority',
            'The standards portfolio',
            'The bus itself, already running']),
          ('NEW PER SECTOR',
           ['The semantic layer — its vocabularies',
            'The specific exchanges and services']),
          'Whichever sector goes first pays for the platform. The next is cheaper either way.',
          T,
          "VO: Split the framework in two. What carries unchanged to health, or agriculture, or "
          "social protection: the four-layer model, the decree pattern, the governance — the "
          "tiers, the RACI, the Operating Authority — the standards portfolio, and the bus "
          "itself, already built and running. What is genuinely new per sector: the semantic "
          "layer, because health speaks a different vocabulary than education, and the specific "
          "exchanges and services that sector needs. That — the vocabularies and the services — "
          "is the whole of the difference. And a word on order. This knowledge product "
          "demonstrated on education because the worked case was to hand; most countries "
          "sequence the framework the other way round. The first wave is usually tax, civil "
          "registration, the business register and health — high-volume, foundational reference "
          "data that every other sector reads — with education, justice, social protection and "
          "customs in the second wave. Whichever sector goes first pays for the platform; the "
          "rule that the next is cheaper holds either way."
          "\n\n"
          "Production cue: the pivotal slide of this video. Hold it a beat longer.",
          right_fill=LIGHT, height=3.7)

block(prs, 'A planned framework gets cheaper with every sector',
      ['The first sector pays for the bus, the governance and the legal mandate.',
       'The second reuses all of it and pays only for its own semantics and services; the third '
       'reuses more still.'],
      'A set of separate sector projects never gets cheaper.',
      T,
      "VO: And this is the re-use argument at the scale of the whole framework. The first sector "
      "pays to build the bus, the governance and the legal mandate; the second sector reuses all "
      "of it and pays only for its own semantics and services; the third reuses more still. This "
      "is exactly the whole-of-government planning logic from the very first module, now visible "
      "across sectors: build the shared platform once, and every sector after consumes it. The "
      "second sector is cheaper than the first, and the third cheaper than the second — and only "
      "a framework built deliberately, for the whole of government, makes that compounding "
      "possible. A set of separate sector projects never gets cheaper; a planned framework does.")

block(prs, 'The portability map is the next sector\'s business case',
      ['Here is what we reuse — most of it.',
       'Here is the small, sector-specific part we build new.'],
      'The investment a strategist can defend for a decade.',
      T,
      "VO: Portability is built in on purpose, and it is not a footnote — it is the reason "
      "an interoperability framework is worth its cost. A platform that served only education "
      "would be hard to justify; a platform that serves education first and then every other "
      "sector at a fraction of the cost is the investment a strategist can defend for a decade. "
      "So when you take the next sector to your minister, bring the portability map: here is "
      "what we reuse, which is most of it, and here is the small, sector-specific part we build "
      "new. That map gets cheaper to make every time, and it is the business case for the next "
      "sector.",
      )

big_slide(prs,
          'The framework is sector-portable — build the platform once, reuse it everywhere, and the '
          'next sector is cheaper than the last.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the framework you built for education is sector-portable. Most of it — the "
          "bus, the governance, the legal mandate, the standards — carries unchanged; only the "
          "vocabularies and the services are new per sector. Build the platform once, reuse it "
          "everywhere, and let every sector after the first be cheaper than the one before. That "
          "compounding re-use is the framework's lasting value.",
          practice=('Map your framework\'s sector-portable vs sector-specific parts for a new sector',
                    'a sector-portability map (reused / new) plus a minister-ready business case'))

sources_slide(prs, T, [
    'Terms of Reference §4.4 — sector portability',
    'EU European Interoperability Framework — the four-layer model',
    'PAERA v1.0 — §3.4.3 (Interoperability framing)',
])


# ================================================================ Thank you
s = add_slide(prs, LAYOUT_THANKS)
notes(s, 'Closing slide for the combined deck. Individual videos end on their sources slide instead.')

# Self-check: the split spec's slide ranges depend on this count, and a helper that
# silently stops drawing shows up first as a slide with no voice-over.
assert len(prs.slides._sldIdLst) == 82, 'slide count changed — re-run the split with --infer-ranges'
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
    'videos', 'module_5', 'en', 'decks', 'KP2_M5_Deck_v0.2.pptx')
os.makedirs(os.path.dirname(OUT), exist_ok=True)
prs.save(OUT)
print('slides:', len(prs.slides._sldIdLst))
print('saved', OUT)

#!/usr/bin/env python3
# Build the KP1 Module 5 (Topic 5) video deck on the ITU template — v0.2.
# Content follows KP1_Module5_Script_Bundle_v0.2 (build_kp1_module5_v02.js): six videos —
# the former 5.3 (portability) and 5.6 (national rollout) merged into the new 5.3, the former
# 5.7 renumbered 5.6 and cut to four slides. Every VO paragraph in the notes is a verbatim
# scriptBeats[].text from the .js (vo_diff.py proves it); the recap slide of every video
# carries the un-narrated practice box (plan D5) in place of the old narrated handoff.
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
    ITU_BLUE, WHITE,
    LAYOUT_THANKS,
    add_slide, big_slide, block_slide, delete_template_slides, edit_agenda,
    edit_cover, notes, open_template, rows_block,
    section_slide, sources_slide, two_panel)
from deck_diagrams import stack_slide, wave_timeline

prs = open_template(os.environ.get('TEMPLATE'))

AUDIENCE = 'Director-general · head of a sectoral ICT unit · technical secretary'

# The practice box is the video's only call to action and is never narrated (plan D5).
# This line opens the notes of every recap slide, exactly as Module 1 writes it.
PRACTICE_NOTE = ('PRACTICE BOX (on-screen only — never read it, never paraphrase it, never point '
                 'at it). It replaces the narrated handoff: this video ends on the recap and the '
                 'Sources slide.')


# Every text-block slide in this module carries a two-sentence lead, and every comparison
# slide three short lines a side: raise the landing panel and shorten the columns so neither
# leaves a blank band (deck_lib.block_slide / two_panel keep the Module 1-4 defaults).
punch_after = 4.35   # block_slide punch_y for a two-sentence lead
panel_height = 3.2   # two_panel column height for three short lines


def block(prs, *a, **k):
    k.setdefault('punch_y', punch_after)
    return block_slide(prs, *a, **k)


def panels(prs, *a, **k):
    k.setdefault('height', panel_height)
    return two_panel(prs, *a, **k)


def section(code, name, message, runtime, note):
    return section_slide(prs, 'KP1 · MODULE 5 · VIDEO %s' % code, code, name, message,
                         runtime + ' · standalone video · voice-over on text slides', note)


# ---------------------------------------------------------------- COVER (edit slide 1)
edit_cover(
    prs,
    title_text='The case for a national\nEnterprise Architecture',
    kicker='KP1 · Government Enterprise Architecture · Module 5',
    blurb='Six standalone videos for the person who commissions the architecture and makes the '
          'case upward: the evidence from four real governments, what quietly kills these '
          'programmes, the wave rollout across sectors and why the second is cheaper, the '
          'business case that wins a minister\'s commitment, building capability from open '
          'knowledge products — and the whole case in one piece.',
    length='~23 mins across 6 videos (5.1 – 5.6)',
    audience=AUDIENCE,
    panel_heading='THE CASE YOU CARRY INTO THE ROOM',
    panel_items=['Proven — four real governments',
                 'Portable — sector after sector',
                 'The commitment — the one page',
                 'The capability — your own people',
                 'Necessary now, not just useful'],
    panel_footer='4 governments · 4 killers to design out · 1 page for the minister',
    note_text='Cover for the combined Module 5 deck. Each section that follows is one standalone '
              '~3–5 minute video. This is the capstone, and the first topic since Module 1 to '
              'address the Strategist rather than the Architect — the director-general, the head '
              'of a sectoral ICT unit, the technical secretary who commissions the work and makes '
              'the case to the minister. It answers the three questions asked before committing: '
              'is it proven, does it travel and how do I roll it out, and how do I win the '
              'commitment and build the team.')

# ---------------------------------------------------------------- AGENDA (edit slide 2)
edit_agenda(
    prs,
    header='Module 5 — six videos',
    items=[
        ('5.1  Is this proven? Evidence from real programmes', '~4 min'),
        ('5.2  What works, and what quietly kills them', '~3 min'),
        ('5.3  Roll it out across sectors — the second is cheaper', '~5 min'),
        ('5.4  Win the commitment — the business case', '~4 min'),
        ('5.5  Build capability with open knowledge products', '~4 min'),
        ('5.6  The closing case — proven, portable, necessary', '~3 min'),
    ],
    message_paras=[
        'Three questions decide whether this happens: is it proven, does it travel, and can I win '
        'the commitment and roll it out?',
        'This module answers all three — with the evidence, the numbers and the honest timeline — '
        'so you can make the case upward and defend it afterwards.',
    ],
    note_text='Navigation slide for the combined deck; the videos ship standalone on YouTube. '
              '5.1 and 5.2 are the evidence — what four governments built, and what makes these '
              'programmes live or die. 5.3 is the portability case and the wave rollout in one. '
              '5.4 and 5.5 are the commitment and the capability. 5.6 puts the whole case in one '
              'piece.')

delete_template_slides(prs, keep=2)


# ================================================================ 5.1
T = '5.1 · Is this proven, or just theory? — evidence from real programmes'
section('5.1', 'Is this proven, or just theory? — evidence from real programmes',
        'This is not a theory waiting for its first trial. Across four very different governments, '
        'the same architectural approach has already produced results — which means the question '
        'for you is not whether it works, but how to apply it where you are.',
        '~4 minutes',
        "VO, slide 1: Before you commit your agency, you are right to ask: is this proven, or a "
        "consultant's theory? The honest answer is that the core of it has already been done — in "
        "countries large and small, unitary and federal, well-resourced and not.\n\n"
        "On screen: the four countries appear as plain typography only — no flags, no national "
        "emblems, no agency logos. They are public examples cited to public sources, never the "
        "team's own engagements.")

# The module's centrepiece: the four signposts, then the pattern that recurs across them.
rows_block(prs, 'Four governments, four shapes',
           [('Rwanda — small, with a strong centre',
             'One citizen-services platform; a national identity linked across services.'),
            ('Kenya — one-stop centres and a unifying identity programme',
             'Results mixed and openly debated.'),
            ('South Africa — federal, so nothing can be imposed from the top',
             'Coordinated instead through a central agency and shared standards.'),
            ('Estonia — mature, and the reference the others are measured against',
             'Distributed registries; the once-only principle; almost every service online.')],
           'Four governments that could hardly differ more in size, resources and shape.',
           T,
           "VO: Four signposts, deliberately different. Rwanda — a small country with a strong "
           "centre, one citizen-services platform, a national identity linked across services. "
           "Kenya — physical one-stop centres and a unifying identity programme, with results that "
           "are mixed and openly debated. South Africa — a federal state where no architecture can "
           "be imposed from the top, coordinated instead through a central agency and shared "
           "standards. And Estonia — a mature reference, distributed registries, the once-only "
           "principle, almost every service online. Four governments that could hardly be more "
           "different in size, resources and shape.\n\n"
           "Production cue: the first half of the module's centrepiece. Hold it a beat longer — "
           "the next slide is what turns these four into evidence.",
           numbered=False)

rows_block(prs, 'The same four elements show in every one',
           [('A small central team with real authority',
             'Not a committee, and not a contractor.'),
            ('A published framework other agencies adopt',
             'Adopted because it helps them, not because it is forced on them.'),
            ('Governance that is binding, not advisory',
             'It can say no to a project that would fragment the architecture.'),
            ('Years to full maturity, with results visible in months',
             'The horizon is long; the first intermediate wins are not.')],
           'Four contexts, one recurring pattern — recurrence is what makes it evidence, not luck.',
           T,
           "VO: What makes them evidence is not that they are all the same — they are not — but "
           "that the same architectural elements show in every one. A small central team with real "
           "authority. A published framework that other agencies adopt rather than fight. A "
           "governance mechanism that is binding, not advisory. And a time horizon measured in "
           "years for full maturity, with intermediate results visible inside months. Four "
           "contexts, one recurring pattern. That recurrence is what tells you the pattern is "
           "real, not local luck.\n\n"
           "Production cue: the centrepiece slide of the module. Reveal the four rows one at a "
           "time; the closing line is the whole argument of this video.")

block(prs, 'The failures are documented too — which is what makes it evidence',
            ['Kenya\'s identity programme met real obstacles — in the courts, in parliament, in '
             'implementation — and the debate is public and documented.',
             'That is not a reason to dismiss the approach; it is part of the evidence. The '
             'programmes that struggled struggled for consistent, learnable reasons.'],
            'Not a brochure of successes. A record of what works and what does not.',
            T,
            "VO: And be honest about the mixed results, because that honesty is what makes the "
            "evidence trustworthy. Kenya's identity programme met real obstacles — in the courts, "
            "in parliament, in implementation — and the debate is public and documented. That is "
            "not a reason to dismiss the approach; it is part of the evidence. The programmes that "
            "struggled struggled for reasons you can learn from, and the reasons are remarkably "
            "consistent. The evidence is not a brochure of successes. It is a record of what works "
            "and what does not, which is far more useful to you.")

block(prs, 'You are not the first — the path is already charted',
            ['The common elements are known, and so are the common ways programmes fail. You are '
             'not being asked to invent an approach and hope it works.',
             'You are being asked to adapt a pattern four very different governments have already '
             'shown delivers — to your country, your constraints, your sector.'],
            'A far easier case to make than "trust me, this should work".',
            T,
            "VO: What this means for your agency is simple and freeing. You are not the first. The "
            "path is charted, the common elements are known, and so are the common ways "
            "programmes fail. You are not being asked to invent an approach and hope it works. You "
            "are being asked to adapt a pattern that four very different governments have already "
            "shown delivers — to your country, your constraints, your sector. That is a far easier "
            "case to make to a minister than 'trust me, this should work'.\n\n"
            "Production cue: the pivotal slide of this video. Hold it a beat longer.")

big_slide(prs,
          'Across four very different governments the same architectural pattern has already '
          'produced results — so your question is not whether it works, but how to apply it where '
          'you are.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So when someone asks whether this is proven, you have an answer: four governments, "
          "four shapes, one recurring pattern, with the failures as documented as the successes. "
          "Not theory — a charted path.",
          practice=('Generate comparator-country evidence tuned to your context',
                    'comparator cards with cited sources'))

sources_slide(prs, T, [
    'Rwanda — Irembo (irembo.gov.rw)',
    'Kenya — Huduma Kenya (huduma.go.ke)',
    'South Africa — SITA (sita.co.za)',
    'Estonia — e-Estonia.com and RIA (ria.ee)',
    'PAERA v1.0 — §5.7 (Recommended Roadmap); §2.1 (Problem statement)',
])


# ================================================================ 5.2
T = '5.2 · What the evidence says works — and what quietly kills these programmes'
section('5.2', 'What the evidence says works — and what quietly kills these programmes',
        'The public record is consistent about what makes these programmes succeed and what kills '
        'them — and the killers are organisational, not technical. Knowing both lets you design '
        'your programme to last, and brief your minister on the real risks.',
        '~3 minutes',
        "VO, slide 1: If the evidence shows what works, it also shows why programmes fail — and "
        "the failures are almost never technical. What works is known: a protected team, a "
        "framework agencies adopt, governance that can say no, funding sustained for years. The "
        "killers are the harder half.\n\n"
        "Retrieval prompt — ask before playing on: name the ways a programme like this dies. Are "
        "any of them technical? Answer on the next two slides.\n\n"
        "The four success factors are named in this opener only; the v0.2 script gives them no "
        "slide of their own.")

rows_block(prs, 'Four things quietly kill them — usually in the second year',
           [('The team is pulled onto the urgent flagship',
             'The architecture work simply stops.'),
            ('The sponsor changes',
             'The successor has their own priorities.'),
            ('Governance drifts to advisory under delivery pressure',
             'One powerful project through, then another, until its "no" means nothing.'),
            ('Funding becomes an annual favour',
             'One budget cycle removes it.')],
           'None of them is dramatic. Each one is a slow fade.',
           T,
           "VO: Now the failures, because forewarned is forearmed. The team gets pulled onto the "
           "flagship project that is in trouble, and the architecture work stops. The minister or "
           "director-general who championed it moves on, and the successor has their own "
           "priorities. The governance board, under delivery pressure, lets one powerful project "
           "through, then another, until its \"no\" means nothing. And the funding, never secured as a "
           "multi-year commitment, quietly becomes an annual favour that one budget cycle removes. "
           "None of these is dramatic. Each is a slow fade, usually in the second year.\n\n"
           "Production cue: this slide and the next answer the retrieval prompt set on the title "
           "slide.")

block(prs, 'Not one of the killers is about technology',
            ['They are about people, authority and money — protecting the team, securing the '
             'mandate, defending the governance, locking in the funding.',
             'Which is the good news, because those are what you can influence. The chief '
             'architect cannot protect their own team or secure their own five-year budget. Only '
             'the strategist who commissioned the work can.'],
            'The failures are organisational, which means they are yours to prevent.',
            T,
            "VO: Notice what every one of those killers has in common. Not one is about "
            "technology. They are about people, authority and money — protecting the team, "
            "securing the mandate, defending the governance, locking in the funding. And that is "
            "the good news, because those are exactly the things you, as the one making the case "
            "upward, can influence. The chief architect cannot protect their own team or secure "
            "their own five-year budget. Only the strategist who commissioned the work can. The "
            "failures are organisational, which means they are yours to prevent.\n\n"
            "Production cue: the pivotal reframe of this video, and it closes the retrieval "
            "prompt. Hold it a beat longer.")

block(prs, 'Design for the second year now, while you have the minister\'s attention',
            ['Get the team\'s protection in writing. Make the governance mandate legal, not just a '
             'memo. Secure a multi-year envelope, not an annual line.',
             'And plan to re-commit all of it when the sponsor changes, because the next minister '
             'will not feel bound by the last one\'s promises.'],
            'Not afterthoughts to add if the programme survives. They are how it survives.',
            T,
            "VO: So design for the second year now, while you have the minister's attention. Get "
            "the team's protection in writing. Make the governance mandate legal, not just a memo. "
            "Secure a multi-year funding envelope, not an annual line. And plan to re-commit all "
            "of it when the sponsor changes, because the next minister will not feel bound by the "
            "last one's promises. These are not afterthoughts to add if the programme survives. "
            "They are how it survives. Build them in at the start, and you have designed out the "
            "four most common ways these programmes die.")

big_slide(prs,
          'What kills these programmes is organisational, not technical — the team pulled, the '
          'sponsor changed, governance gone advisory, funding withdrawn — so design the '
          'protections in from the start.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the evidence gives you two lists: what to build in, and the four organisational "
          "failures to design out. A programme designed to survive its own second year is the one "
          "that delivers.",
          practice=("Build your programme's sustainment risk register",
                    'a four-row sustainment risk register plus early-warning signals'))

sources_slide(prs, T, [
    'PAERA v1.0 — §5.4 (Organisational Assessment & Roadmap)',
    'PAERA v1.0 — §4.2.1 (Management)',
])


# ================================================================ 5.3 (merge of the former 5.3 and 5.6)
T = '5.3 · Roll it out across sectors — and why the second is cheaper'
section('5.3', 'Roll it out across sectors — and why the second is cheaper',
        'The method is sector-agnostic — only the record at the centre changes — so roll it out as '
        'a wave roadmap: one sector first to build the shared platforms, then sectors one at a '
        'time, each cheaper than the last, governed into a single national architecture.',
        '~5 minutes',
        "VO, slide 1: Suppose you want this beyond one sector. Two questions follow: does the "
        "method travel, and how do you roll it out without trying to do everything at once? The "
        "answers are linked — and the second sector is cheaper than the first.")

block(prs, 'Most of the method does not change — only the record at the centre does',
            ['The five phases, the four sign-offs, the six deliverables, reuse-before-build, the '
             'binding board — none of it is sector-specific.',
             'Only the record at the centre changes: a learner, a patient, a farmer, a beneficiary. '
             'Different domain, identical shape — registered several times, re-entered on paper, '
             'blocking a flagship the minister has promised.'],
            'A portability statement, not worked examples — each sector still needs its own '
            'discovery on the ground.',
            T,
            "VO: Most of the method does not change. The five phases, the four sign-offs, the six "
            "deliverables, the reuse-before-build default, the binding governance board — none of "
            "that is specific to one sector. What changes is only the record at the centre of the "
            "fragmentation. In education it is the learner. In health it is the patient. In "
            "agriculture the farmer; in social protection the beneficiary. Different domain, "
            "identical shape — registered several times, re-entered on paper, blocking a flagship "
            "the minister has promised. The problem rhymes across sectors because the cause is the "
            "same: no shared plan. Which means you are not buying a one-sector tool. You are "
            "building a national capability, of which the first sector is the foundation and the "
            "proof.\n\n"
            "On screen: health, agriculture and social protection are named as sectors the method "
            "transfers to — this is the ToR §4.4 portability statement, not a set of worked "
            "examples.")

stack_slide(prs, 'Wave 1 looks like one sector. It is the foundation the rollout stands on',
            ('WAVE 1 — ONE SECTOR, THE FULL METHOD, END TO END',
             ['A sector with a clear flagship the minister cares about — the single learner record, '
              'the single patient record.']),
            ('WHAT WAVE 1 REALLY BUILDS — THE NATIONAL FOUNDATIONS',
             ['The permanent team  ·  the governance board  ·  the first shared platforms: identity, '
              'data exchange',
              'Every later sector stands on this — none of them builds it again.']),
            ['The sector is what the minister sees.',
             'The base is what the country keeps.'],
            'One sector, done well — and the national foundations, laid.',
            T,
            "VO: So roll it out in waves. Wave one is one sector, done well. Pick the sector with a "
            "clear flagship the minister cares about — the single learner record, the single "
            "patient record — and run the full method there, end to end. But notice what wave one "
            "really builds: not just that sector's architecture, but the national foundations. The "
            "permanent team. The governance board. The first shared platforms, identity and data "
            "exchange. Wave one looks like one sector. It is actually the foundation the whole "
            "rollout stands on.\n\n"
            "On screen: the sector block standing on a wider foundation block — reveal the base on "
            "'but notice what wave one really builds'.")

wave_timeline(prs, 'From Wave 2 each sector is cheaper — if the same board governs the pipeline',
              [('WAVE 1 — the foundation sector', ['Full method, end to end', 'Builds the team, the board, identity, data exchange'], 3.2, 1.0),
               ('WAVE 2 — health', ['Consumes the platforms', 'Lighter method — team, framework and governance in place'], 2.5, 0.78),
               ('WAVE 3 — agriculture', ['Consumes more', 'Faster, for less'], 2.0, 0.62),
               ('WAVE 4 — social protection', ['Easier still'], 1.6, 0.5)],
              'THE SAME BOARD GOVERNS THE NATIONAL PIPELINE — which sector next, what each must reuse, where an exception is warranted',
              'Shared platforms — more complete with every wave',
              'Launched and left, a rollout drifts back into fragmentation. Governed, it compounds.',
              T,
              "VO: From wave two, each new sector consumes what wave one built. The health sector "
              "uses the identity platform and the data-exchange backbone that already exist. Its "
              "run of the method is lighter, because the team, the framework and the governance are "
              "in place. It delivers faster and costs less, and every sector that joins makes the "
              "next one easier still. That is why the expensive part is building the muscle once. "
              "But it only compounds if you govern it. The same board that reviews projects inside "
              "a sector governs the national pipeline: which sector comes next, what each must "
              "reuse, where an exception is genuinely warranted. A rollout that is launched and "
              "left drifts back into fragmentation, one sector at a time.\n\n"
              "Production cue: the pivotal slide of this video — the compounding and the "
              "governance on one page. Hold it a beat longer. On screen: a wave roadmap — each "
              "wave a smaller block than the last, the platform bar beneath growing, the Board bar "
              "across the top. Reveal the waves left to right; the Board bar is already there.")

rows_block(prs, 'One page, every quarter — the national scorecard',
           [('Sectors live', 'How many have run the method end to end.'),
            ('The re-use rate across them',
             'How much of the new work consumes a shared block instead of rebuilding it.'),
            ('Shared platforms in place',
             'Which of identity and data exchange are authoritative and available.')],
           'It sustains funding across a change of government, and catches a drifting sector early.',
           T,
           "VO: Then report the national picture upward, on one page, every quarter. How many "
           "sectors are live. The re-use rate across them. Which shared platforms are in place. "
           "This shows the minister a national capability actually growing — which is what "
           "sustains funding across a change of government — and it lets you see early if a "
           "sector is drifting from the shared foundation, while correction is still cheap.",
           numbered=False)

big_slide(prs,
          'The method is sector-agnostic — only the central record changes — so roll it out in '
          'waves, each sector after the first cheaper, governed into a single national '
          'architecture.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So the method travels, and the rollout is a wave roadmap: one sector to build the "
          "foundations, then sectors one at a time, each cheaper than the last, governed into a "
          "single national architecture.",
          practice=('Sequence your national rollout into waves',
                    'a national wave sequence with per-wave reuse'))

sources_slide(prs, T, [
    'PAERA v1.0 — §5.7 (Recommended Roadmap)',
    'PAERA v1.0 — §5.4 (Organisational Assessment & Roadmap)',
])


# ================================================================ 5.4
T = '5.4 · Win the commitment — the business case that gets your minister to yes'
section('5.4', 'Win the commitment — the business case that gets your minister to yes',
        'Winning the minister\'s commitment is not about the architecture — it\'s about the '
        'number. Pair the whole-of-government re-use saving with the proven evidence and an honest '
        'time horizon, and you turn a technical case into one a minister can take to cabinet.',
        '~4 minutes',
        "VO, slide 1: The hardest step is getting your minister to commit the team, the mandate "
        "and the money. Ministers do not commit to architecture; they commit to numbers and to "
        "cases they can defend in cabinet. So bring three things: the saving, the proof, the "
        "honest cost.\n\n"
        "Retrieval prompt — ask before playing on: of everything in your case, what does a "
        "minister actually act on? Answer on the next slide.")

block(prs, 'Lead with the saving, not the architecture',
            ['The strongest number you have is the cost of fragmentation: every programme that '
             'builds its own identity, its own registry, its own integration means the country '
             'pays many times for one thing.',
             'A whole-of-government business case shows that consuming shared building blocks '
             'instead would save a meaningful share of the sectoral digital budget over five '
             'years. That number, not the four-layer diagram, opens a cabinet conversation.'],
            'The architecture is how you achieve the saving. The saving is what you sell.',
            T,
            "VO: Lead with the saving, because that is what a minister can act on. The strongest "
            "number you have is the cost of fragmentation: every programme that builds its own "
            "identity, its own registry, its own integration, means the country pays many times "
            "for one thing. A whole-of-government business case shows that consuming shared "
            "building blocks instead would save a meaningful share of the sectoral digital budget "
            "over five years. That number — not the four-layer diagram — is what opens a cabinet "
            "conversation. The architecture is how you achieve the saving; the saving is what you "
            "sell.\n\n"
            "Production cue: the pivotal slide of this video, and it answers the retrieval prompt "
            "set on the title slide. Hold it a beat longer.")

block(prs, 'Back the number with the proof, because a minister\'s first worry is risk',
            ['A saving that depends on an untested approach is easy to refuse. A saving backed by '
             'four governments that have already built the same pattern is much harder to wave '
             'away.',
             'This is a charted path that countries like yours have walked, with the obstacles '
             'documented.'],
            'Not a bet on a theory — a saving others have already proven is real.',
            T,
            "VO: Back the number with the proof, because a minister's first worry is risk. A "
            "saving that depends on an untested approach is easy to refuse. A saving backed by "
            "four governments that have already built the same pattern is much harder to wave "
            "away. So pair the business case with the evidence: this is not an experiment, it is a "
            "charted path that countries like yours have walked, with the obstacles documented. "
            "You are not asking the minister to bet on a theory. You are asking them to capture a "
            "saving that others have already proven is real.")

block(prs, 'Ministers fund people who tell them the real timeline',
            ['Name the real cost: a small permanent team and governance, typically around two per '
             'cent of the digital-government budget, sustained for five years.',
             'And the real horizon: about six months to a roadmap the minister can show, but years '
             'to full maturity — so the minister who launches this will likely not be the one who '
             'completes it.'],
            'Said as a weakness, that sinks the case. Said as the truth, it wins it.',
            T,
            "VO: Then be honest about the cost and the time, because overselling loses the case "
            "the moment a sharp official tests it. Name the real cost: a small permanent team and "
            "governance, typically around two per cent of the digital-government budget, sustained "
            "for five years. And name the real horizon: about six months to a roadmap the minister "
            "can show, but years to full maturity — which means the minister who launches this "
            "will likely not be the one who completes it. Said as a weakness, that sinks the case. "
            "Said as the truth about serious institution-building, it is what separates a credible "
            "proposal from a salesman's. Ministers fund people who tell them the real timeline.")

rows_block(prs, 'The one page, in the order a minister reads it',
           [('The saving', 'The country-level number over five years.'),
            ('The proof', 'The governments that have already done it.'),
            ('The ask',
             'A small permanent team, a board with real authority, ~2% sustained, protect the '
             'team.'),
            ('The horizon', 'Six months to a roadmap, then a sustained practice.')],
           'Saving, proof, ask, horizon — a request the minister can defend in cabinet.',
           T,
           "VO: Put it on one page, in that order. The saving — the country-level number over five "
           "years. The proof — the governments that have done it. The ask — a small permanent "
           "team, a board with real authority, around two per cent of the digital budget, and a "
           "promise to protect the team. And the horizon — six months to a roadmap, then a "
           "sustained practice. Saving, proof, ask, horizon. That single page turns a technical "
           "request the minister would defer into a business case they can defend in cabinet.")

big_slide(prs,
          'Ministers commit to numbers and proof, not architecture — pair the whole-of-government '
          'saving with the evidence and an honest cost, and you turn a technical request into a '
          'cabinet-ready case.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: Winning the commitment is not an architecture conversation. It is a one-page "
          "business case: the saving, the proof, the ask, the honest horizon. Bring that, and your "
          "minister can say yes and defend it.",
          practice=('Draft the one-page ministerial business case',
                    'a one-page ministerial business case'))

sources_slide(prs, T, [
    'PAERA v1.0 — §5.6 (Sourcing Strategy)',
    'PAERA v1.0 — §5.4 (Organisational Assessment & Roadmap)',
])


# ================================================================ 5.5
T = '5.5 · Build your team\'s capability with open knowledge products'
section('5.5', 'Build your team\'s capability with open knowledge products',
        'You don\'t have to train your team from scratch — open knowledge products, a shared '
        'framework, and a community of practising countries mean your people can learn the method '
        'from materials that already exist, freeing your budget for the work itself.',
        '~4 minutes',
        "VO, slide 1: One worry that stops strategists committing is capability: do we have the "
        "people, and can we afford to train them? You do not have to build the knowledge from "
        "scratch. The method, the framework and the training materials already exist as open "
        "knowledge products.")

block(prs, 'The method is not locked in a consultant\'s head',
            ['The reference architecture is published. The building-block specifications are open. '
             'The knowledge products — videos, written guides, worked examples — are made to teach '
             'a practising architect the method step by step.',
             'Your team does not start from a blank page. They start from a documented method that '
             'other countries are already using.'],
            'Your training cost is a fraction of building the knowledge yourself.',
            T,
            "VO: The method is not locked in a consultant's head. The reference architecture is "
            "published. The building-block specifications are open. And the knowledge products — "
            "videos, written guides, worked examples, the very materials this is part of — are "
            "made to teach a practising architect the method step by step. Your team does not "
            "start from a blank page. They start from a documented method that other countries are "
            "already using, which means your training cost is a fraction of what building the "
            "knowledge yourself would be.")

rows_block(prs, 'Three layers you draw on rather than build',
           [('The published framework',
             'What to do — the phases, the principles, the deliverables.'),
            ('The worked examples and the AI plays',
             'How to do it faster — a method turned into a draft in minutes.'),
            ('The community of countries and partners',
             'Who to ask when your team is stuck.')],
           'You are not equipping your team alone. You are connecting them to a network.',
           T,
           "VO: Think of the capability as three layers you can draw on rather than build. The "
           "published framework tells your team what to do — the phases, the principles, the "
           "deliverables. The worked examples and the AI plays show them how to do it faster — "
           "turning a method into a draft in minutes. And the community — the countries, the "
           "partners, the certification and the shared knowledge base around the framework — tells "
           "them who to ask when they are stuck. You are not equipping your team alone. You are "
           "connecting them to a network that is already solving these problems.")

block(prs, 'What you actually need to fund is time, not invention',
            ['Not the invention of a method — that exists. You fund a small team given the time to '
             'learn it and apply it to your country, and access to the materials and the '
             'community.',
             'The expensive thing — decades of accumulated knowledge about what works in '
             'public-sector architecture — you get for the cost of learning it, not the cost of '
             'discovering it.'],
            'Fund a team to apply a proven method, not consultants to invent one.',
            T,
            "VO: So what do you actually need to fund? Not the invention of a method — that "
            "exists. You need a small team given the time to learn it and apply it to your "
            "country, and access to the materials and the community. The expensive thing — the "
            "decades of accumulated knowledge about what works in public-sector architecture — you "
            "get for the cost of learning it, not the cost of discovering it. That is the "
            "difference between funding a team to apply a proven method and funding consultants to "
            "invent one. The first is affordable and builds lasting capability in your own people; "
            "the second is neither.")

block(prs, 'Build the capability in your own people',
            ['Open knowledge products let you build the capability inside your own institutions — '
             'architects who learn the method, apply it, and stay — instead of expertise that '
             'walks out of the door when a contract ends.',
             'A strategist\'s quiet goal in all of this is a national capability that outlasts any '
             'single contract or consultant.'],
            'Open knowledge products are how you build it in your own people.',
            T,
            "VO: And aim the capability at your own people, not at a consultancy you will depend "
            "on forever. The reason to use open knowledge products is not only that they are "
            "cheaper. It is that they let you build the capability inside your own institutions — "
            "architects who learn the method, apply it, and stay, instead of expertise that walks "
            "out the door when a contract ends. A strategist's quiet goal in all of this is a "
            "national capability that outlasts any single contract or consultant. Open knowledge "
            "products are how you build it in your own people.\n\n"
            "Production cue: the pivotal slide of this video. Hold it a beat longer.")

big_slide(prs,
          'The method, the framework and the training already exist as open knowledge products — '
          'so fund a small team to learn and apply them, not consultants to reinvent them, and '
          'build the capability in your own people.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So capability is not the barrier it appears to be. The knowledge is documented, "
          "open and taught. Use it to grow your own architects, and you build something that lasts "
          "longer than any contract.",
          practice=("Build your team's capability-building plan",
                    'a learning sequence, the three layers to use, what to fund, and how to retain '
                    'the capability'))

sources_slide(prs, T, [
    'PAERA v1.0 — §4.5 (Digital Co-creation)',
    'PAERA v1.0 — §1.3 (GovStack Vision)',
    'GovStack knowledge base — govstack.global',
])


# ================================================================ 5.6 (was 5.7)
T = '5.6 · The closing case — proven, portable, and necessary now'
section('5.6', 'The closing case — proven, portable, and necessary now',
        'The case for a national EA comes down to three things you can now say with confidence — '
        'it is proven, it is portable, and in the era of redesigning how government works it is no '
        'longer optional but necessary — held together by the two reasons an EA exists: it makes '
        're-use possible, and it gives business and IT a shared language.',
        '~3 minutes',
        "VO, slide 1: Bring it all together into the case you carry into the room. It reduces to "
        "three sentences a minister can hold: this is proven, it is portable, and it is necessary "
        "now. Underneath those sit the two reasons an Enterprise Architecture exists at all.\n\n"
        "Production cue: the closing video of the module and of KP1.")

panels(prs, 'Proven and portable — the first two you can say plainly',
          ('PROVEN',
           ['Four very different governments built the same pattern.',
            'Successes and failures both documented.',
            'You adapt a charted path rather than invent one.']),
          ('PORTABLE',
           ['The method is sector-agnostic.',
            'The same phases on a learner, a patient, a farmer.',
            'Each sector after the first costs less — the muscle is built once.']),
          'The third is the one that makes it urgent.',
          T,
          "VO: The first two you can say plainly. Proven — four very different governments have "
          "built the same pattern, with the successes and the failures both documented, so you "
          "adapt a charted path rather than invent one. Portable — the method is sector-agnostic, "
          "the same phases on a learner, a patient, a farmer, and each sector after the first "
          "costs less because the muscle is built once. The third is the one that makes it "
          "urgent.")

# The module's emotional peak — the only full-colour punch block in the deck.
block(prs, 'For thirty years, digital government meant putting paper online. That era is '
                 'ending',
            ['The form became a web form, the queue an appointment. The work that delivers today '
             'is different: once-only data sharing, a shared identity, a single record that '
             'follows a person across services.',
             'That is not putting paper online. It is changing how the government operates — and '
             'it cannot be done by the IT department alone, or the policy side alone.'],
            'Useful then. Necessary now.',
            T,
            "VO: Necessary now. For thirty years, digital government meant taking a paper process "
            "and putting it online — the form becomes a web form, the queue an appointment. That "
            "era is ending. The work that delivers results today is different: once-only data "
            "sharing, a shared identity, a single record that follows a person across services. "
            "That is not putting paper online. It is changing how the government operates, and it "
            "cannot be done by the IT department alone, or by the policy side alone. Useful then; "
            "necessary now.\n\n"
            "Production cue: the era-shift argument, told once and in about eighty words; the "
            "punch line is the module's one full-colour block. Hold it a beat longer.",
            punch_fill=ITU_BLUE, punch_ink=WHITE)

panels(prs, 'The two reasons an Enterprise Architecture exists',
          ('RE-USE',
           ['Inside any project, building your own is cheaper than reusing — so projects '
            'fragment.',
            'No procurement rule can change that.',
            'Only whole-of-government planning makes re-use rational, and only an EA gives that '
            'view.']),
          ('SHARED LANGUAGE',
           ['The new work needs the business side and the IT side to decide together.',
            'They do not speak the same language.',
            'An EA gives them a shared picture, shared words, and a forum to decide in.']),
          'The two ideas to carry out of this whole knowledge product.',
          T,
          "VO: And here are the two reasons an EA exists — the two ideas to carry out of this "
          "whole knowledge product. First: re-use. Inside any project, building your own is "
          "cheaper than reusing, so projects fragment, and no procurement rule can change that. "
          "Only planning at the level of the whole government makes re-use rational, and only an "
          "EA gives you that view. Second: shared language. The new work needs the business side "
          "and the IT side to decide together, and they do not speak the same language. An EA "
          "gives them one — a shared picture, shared words, and a standing forum to decide in.\n\n"
          "Production cue: the pivotal slide of this video — both structural arguments as the "
          "closing synthesis. Hold it a beat longer.")

big_slide(prs,
          'Proven, portable, and necessary now — held together by the two reasons an EA exists: it '
          'makes re-use possible, and it gives business and IT a shared language.',
          T,
          PRACTICE_NOTE + "\n\n"
          "VO: So that is the case, whole. Proven, portable, and necessary now — held together by "
          "the two reasons an EA exists: it makes re-use possible, and it gives business and IT a "
          "shared language.",
          practice=('Draft your closing one-page case for the minister',
                    'a one-page closing case'))

sources_slide(prs, T, [
    'PAERA v1.0 — §2.3 (Role of Enterprise Architecture)',
    'PAERA v1.0 — §2.5 (What is Digital Government?)',
])


# ================================================================ Thank you
s = add_slide(prs, LAYOUT_THANKS)
notes(s, 'Closing slide for the combined deck. Individual videos end on their sources slide instead.')

# Self-check: the split spec's slide ranges depend on this count, and a helper that
# silently stops drawing shows up first as a slide with no voice-over.
assert len(prs.slides._sldIdLst) == 43, 'slide count changed — update decks/split_spec.json'
assert all(sl.has_notes_slide and sl.notes_slide.notes_text_frame.text.strip() for sl in prs.slides), \
    'every slide carries its voice-over in the notes'

# The practice box is the last thing on its slide; anything overlapping it clips on render,
# which the contact sheet shows only if you happen to look at that slide.
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
    'videos', 'module_5', 'en', 'decks', 'KP1_M5_Deck_v0.2.pptx')
prs.save(OUT)
print('slides:', len(prs.slides._sldIdLst))
print('saved', OUT)

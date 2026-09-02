#!/usr/bin/env python3
# Build the KP1 Module 5 (Topic 5) video deck on the ITU template.
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
    ITU_BLUE_DARK, INK, LIGHT, PANEL_GREY,
    add_slide, big_slide, block_slide, delete_template_slides, edit_agenda,
    edit_cover, notes, open_template, rows_block,
    section_slide, sources_slide, two_panel)
from deck_diagrams import bars_slide, stack_slide, wave_timeline

prs = open_template(os.environ.get('TEMPLATE'))

AUDIENCE = 'Director-general · head of a sectoral ICT unit · technical secretary'

# Every subtopic's AI usage tip produces a Strategist artefact — evidence cards, a
# sustainment register, a one-page case. The prompts ship in the video description,
# not on a slide: the bundle's slide cues put no prompt text on screen.
PROMPT_CUE = ('On screen: the copy-paste prompt is not shown on a slide — it ships in the video '
              'description so the viewer can draft the artefact on the other half of the screen.')


def section(code, name, message, runtime, note):
    return section_slide(prs, 'KP1 · MODULE 5 · VIDEO %s' % code, code, name, message,
                         runtime + ' · standalone video · voice-over on text slides', note)


# ---------------------------------------------------------------- COVER (edit slide 1)
edit_cover(
    prs,
    title_text='The case for a national\nEnterprise Architecture',
    kicker='KP1 · Government Enterprise Architecture · Module 5',
    blurb='Seven standalone videos for the person who commissions the architecture and makes the '
          'case upward: the evidence from four real governments, what sustains these programmes '
          'and what quietly kills them, the cross-sector portability case, the business case that '
          'wins a minister\'s commitment, building capability from open knowledge products, the '
          'national rollout — and the whole case in one piece.',
    length='~33 mins across 7 videos (5.1 – 5.7)',
    audience=AUDIENCE,
    panel_heading='THE CASE YOU CARRY INTO THE ROOM',
    panel_items=['Proven — four real governments',
                 'Portable — sector after sector',
                 'The commitment — the one page',
                 'The capability — your own people',
                 'Necessary now, not just useful'],
    panel_footer='4 governments · 4 killers to design out · 1 page for the minister',
    note_text='Cover for the combined Module 5 deck. Each section that follows is one standalone '
              '~4–5 minute video. This is the capstone, and the first topic since Module 1 to '
              'address the Strategist rather than the Architect — the director-general, the head '
              'of a sectoral ICT unit, the technical secretary who commissions the work and makes '
              'the case to the minister. It answers the three questions asked before committing: '
              'is it proven, does it travel, and how do I win the commitment and roll it out.')

# ---------------------------------------------------------------- AGENDA (edit slide 2)
edit_agenda(
    prs,
    header='Module 5 — seven videos',
    items=[
        ('5.1  Is this proven? Evidence from real programmes', '~5 min'),
        ('5.2  What works, and what quietly kills them', '~5 min'),
        ('5.3  Will it work for your other sectors?', '~5 min'),
        ('5.4  Win the commitment — the business case', '~5 min'),
        ('5.5  Build capability with open knowledge products', '~4 min'),
        ('5.6  Roll it out to a national EA practice', '~4 min'),
        ('5.7  The closing case — proven, portable, necessary', '~5 min'),
    ],
    message_paras=[
        'Three questions decide whether this happens: is it proven, does it travel, and can I win '
        'the commitment and roll it out?',
        'This module answers all three — with the evidence, the numbers and the honest timeline — '
        'so you can make the case upward and defend it afterwards.',
    ],
    note_text='Navigation slide for the combined deck; the videos ship standalone on YouTube. '
              '5.1 and 5.2 are the evidence — what four governments built, and what makes these '
              'programmes live or die. 5.3 is the portability case. 5.4 to 5.6 are the '
              'commitment, the capability and the rollout. 5.7 puts the whole case in one piece.')

delete_template_slides(prs, keep=2)


# ================================================================ 5.1
T = '5.1 · Is this proven, or just theory? — evidence from real programmes'
section('5.1', 'Is this proven, or just theory? — evidence from real programmes',
        'This is not a theory waiting for its first trial. Across four very different governments '
        'the same architectural approach has already produced results — which means the question '
        'for you is not whether it works, but how to apply it where you are.',
        '~5 minutes',
        "VO, slide 1: Before you commit your agency to this approach, you are right to ask one "
        "question: is it proven, or is it a consultant's theory? The honest answer is that the "
        "core of it has already been done — in countries large and small, unitary and federal, "
        "well-resourced and not. Look at what four real governments built, and the question "
        "changes from whether it works to how you apply it.\n\n"
        "On screen: the four countries appear as plain typography only — no flags, no national "
        "emblems, no agency logos. They are public examples cited to public sources, never the "
        "team's own engagements.\n\n" + PROMPT_CUE)

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

block_slide(prs, 'The failures are documented too — which is what makes it evidence',
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

block_slide(prs, 'You are not the first — the path is already charted',
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
          "VO: So when someone asks whether this is proven, you have an answer. Four governments, "
          "four shapes, one recurring pattern, with the failures as well documented as the "
          "successes. It is not theory. It is a charted path. Your job is not to prove it again — "
          "it is to apply it well.")

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
        '~5 minutes',
        "VO, slide 1: If the evidence shows the pattern works, it also shows, just as clearly, why "
        "programmes fail. And the striking thing is that the failures are almost never technical. "
        "The technology works. What kills these programmes is organisational — and because it is "
        "organisational, you can design around it from the start. Here is what the record says, "
        "on both sides.\n\n"
        "Retrieval prompt — ask before playing on: name the ways a programme like this dies. Are "
        "any of them technical? Answer on the next two slides.\n\n" + PROMPT_CUE)

rows_block(prs, 'Four things make them work — build all four in deliberately',
           [('A small permanent team, protected',
             'Not pulled onto other work when something urgent appears.'),
            ('A framework agencies adopt, rather than are forced into',
             'They use it because it helps them.'),
            ('Governance that can actually say no',
             'To a project that would fragment the architecture.'),
            ('Funding sustained across years',
             'Not granted annually and withdrawn when priorities shift.')],
           'Where all four hold, the programmes deliver. Where any one is missing, they wobble.',
           T,
           "VO: Start with what works, because you will build these in deliberately. A small "
           "permanent team, protected from being pulled onto other work. A published framework "
           "that agencies adopt because it helps them, not because it is forced. Governance that "
           "can actually say no to a project that would fragment the architecture. And funding "
           "sustained across years, not granted annually and withdrawn when priorities shift. "
           "Where these four hold, the programmes deliver. Where any one is missing, they wobble.",
           numbered=False)

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

block_slide(prs, 'Not one of the killers is about technology',
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

block_slide(prs, 'Design for the second year now, while you have the minister\'s attention',
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
          "VO: So the evidence gives you two lists. What to build in — a protected team, an "
          "adopted framework, binding governance, sustained funding. And what to design out — the "
          "four organisational failures that quietly kill these programmes in their second year. "
          "Brief your minister on both. A programme designed to survive its own second year is the "
          "one that delivers.")

sources_slide(prs, T, [
    'PAERA v1.0 — §5.4 (Organisational Assessment & Roadmap)',
    'PAERA v1.0 — §4.2.1 (Management)',
])


# ================================================================ 5.3
T = '5.3 · Will it work for your other sectors? — the portability case'
section('5.3', 'Will it work for your other sectors? — the portability case',
        'The method is not tied to one sector — the same five phases run on any public-sector '
        'domain, and because the hard part is building the muscle once, each sector after the '
        'first is cheaper and faster.',
        '~5 minutes',
        "VO, slide 1: You may be watching this with education in mind, or you may be a "
        "director-general responsible for several sectors. Either way, a fair question is whether "
        "this approach is tied to one sector or works across your government. The answer matters "
        "for how big a commitment you are really making — and the answer is that the method is "
        "sector-agnostic, and it compounds.\n\n" + PROMPT_CUE)

block_slide(prs, 'Most of the method does not change at all',
            ['The five phases, the four sign-offs, the six deliverables, the reuse-before-build '
             'default, the binding governance board — none of it is specific to education. It is '
             'the method.',
             'What changes when you move to another sector is only the contents: the institutions '
             'you map, and the kind of record at the centre of the fragmentation.'],
            'The method travels. Only the contents change.',
            T,
            "VO: Start with what stays the same, because it is most of it. The five phases — "
            "discover, assess, adapt, plan, execute and govern. The four sign-offs. The six "
            "deliverables. The reuse-before-build default. The binding governance board. None of "
            "that is specific to education. It is the method. What changes when you move to "
            "another sector is only the contents: the institutions you map, and the kind of record "
            "at the centre of the fragmentation.")

rows_block(prs, 'What changes is the record at the centre',
           [('Education — the learner',
             'Registered in the school census, by the examination authority, by a grant '
             'programme.'),
            ('Health — the patient',
             'The record that should follow a person between facilities.'),
            ('Agriculture — the farmer',
             'The registry every subsidy and extension programme rebuilds.'),
            ('Social protection — the beneficiary',
             'The list each programme keeps its own copy of.')],
           'A portability statement, not worked examples — each sector needs its own discovery.',
           T,
           "VO: And that change is smaller than it looks. In education, the duplicated record at "
           "the heart of the fragmentation is the learner. In health it is the patient. In "
           "agriculture it is the farmer. In social protection it is the beneficiary. Different "
           "domain, identical shape — registered several times, re-entered on paper, blocking a "
           "flagship the minister has promised. The problem rhymes across sectors because the "
           "underlying cause is the same: no shared plan. So the same method resolves it.\n\n"
           "On screen: health, agriculture and social protection are named as sectors the method "
           "transfers to — this is the ToR §4.4 portability statement, not a set of worked "
           "examples. Each sector still needs its own discovery and assessment run on the ground.",
           numbered=False)

bars_slide(prs, 'The second sector is cheaper because the muscle is built once',
           [('GROUP', 'WHAT EACH SECTOR PAYS FOR — directional, not a costing'),
            ('Sector 1 — education',
             [('permanent team', 0.16, ITU_BLUE_DARK, WHITE), ('framework', 0.13, ITU_BLUE_DARK, WHITE),
              ('governance', 0.13, ITU_BLUE_DARK, WHITE), ('identity · data exchange', 0.24, ITU_BLUE_DARK, WHITE),
              ('its own architecture', 0.2, ITU_BLUE, WHITE)],
             ''),
            ('Sector 2 — health',
             [('its own architecture', 0.2, ITU_BLUE, WHITE), ('consumes', 0.11, LIGHT, ITU_BLUE_DARK)],
             'reuses the identity platform education stood up'),
            ('Sector 3 — agriculture',
             [('its own', 0.15, ITU_BLUE, WHITE), ('consumes', 0.11, LIGHT, ITU_BLUE_DARK)],
             'reuses the data-exchange backbone'),
            ('Sector 4 — social protection',
             [('its own', 0.12, ITU_BLUE, WHITE), ('consumes', 0.11, LIGHT, ITU_BLUE_DARK)],
             'the platforms are more complete each time')],
           'The investment you make for one sector is, in large part, an investment for all.',
           T,
           "VO: Here is the part that changes the size of your decision. The hard, expensive part "
           "of this work is building the muscle the first time — the permanent team, the "
           "localised framework, the governance, and above all the shared platforms like identity "
           "and data exchange. Once those exist, the second sector does not rebuild them. It "
           "consumes them. The health sector reuses the identity platform the education work "
           "stood up. The agriculture sector reuses the data-exchange backbone. So the second "
           "sector is cheaper and faster than the first, and the third cheaper still. The "
           "investment you make for one sector is, in large part, an investment for all of "
           "them.\n\n"
           "Production cue: the pivotal slide of this video. Hold it a beat longer. On screen: bar "
           "length is the argument and carries no figures — the dark segments are the muscle built "
           "once; every later sector's bar is only its own architecture plus a sliver for consuming "
           "what exists.",
           label_w=2.9, row_h=0.6, gap=0.22, y=1.65)

block_slide(prs, 'You are not buying a one-sector tool',
            ['You are building a national capability, of which the first sector is the foundation '
             'and the proof. The first sector carries more of the cost because it builds the '
             'shared muscle; every sector after it costs less.',
             'That is a stronger case to make, and an honest one.'],
            'A minister who funds this as one sector undersells it.',
            T,
            "VO: For the case you make upward, this changes the framing. You are not asking the "
            "minister to fund a tool for one sector. You are asking to build a national "
            "capability, of which the first sector is the foundation and the proof. That is a "
            "stronger case and an honest one: the first sector carries more of the cost because it "
            "builds the shared muscle; every sector after it benefits from that muscle and costs "
            "less. A minister who funds it as a one-sector project undersells it. A minister who "
            "funds it as the first wave of a national capability has understood it.")

big_slide(prs,
          'The method is sector-agnostic — same phases, only the central record changes — and '
          'because the muscle is built once, every sector after the first is cheaper and faster.',
          T,
          "VO: So when you are asked whether this works beyond education, the answer is yes, and "
          "it gets cheaper as you go. The same method, a different record at the centre, the same "
          "shared platforms reused sector after sector. You are not making a one-sector decision. "
          "You are making the first move in building a national capability — which is exactly how "
          "to frame it when you make the case.")

sources_slide(prs, T, [
    'PAERA v1.0 — §5.4 (Organisational Assessment & Roadmap)',
    'PAERA v1.0 — §5.7 (Recommended Roadmap)',
])


# ================================================================ 5.4
T = '5.4 · Win the commitment — the business case that gets your minister to yes'
section('5.4', 'Win the commitment — the business case that gets your minister to yes',
        'Winning the minister\'s commitment is not about the architecture — it is about the '
        'number. Pair the whole-of-government re-use saving with the proven evidence and an honest '
        'time horizon, and you turn a technical case into one a minister can take to cabinet.',
        '~5 minutes',
        "VO, slide 1: You have the evidence that it works and the case that it travels. Now the "
        "hardest step: getting your minister to commit the team, the mandate and the money. "
        "Ministers do not commit to architecture. They commit to outcomes, to numbers, and to "
        "cases they can defend in cabinet. So the case you bring cannot be about the architecture. "
        "It has to be about three things: the saving, the proof, and the honest cost.\n\n"
        "Retrieval prompt — ask before playing on: of everything in your case, what does a "
        "minister actually act on? Answer on the next slide.\n\n" + PROMPT_CUE)

block_slide(prs, 'Lead with the saving, not the architecture',
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

block_slide(prs, 'Back the number with the proof, because a minister\'s first worry is risk',
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

block_slide(prs, 'Ministers fund people who tell them the real timeline',
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
          "VO: So winning the commitment is not an architecture conversation. It is a one-page "
          "business case: the saving, the proof, the ask, the honest horizon. Bring that, and you "
          "give your minister something they can say yes to and defend afterwards. Bring a diagram "
          "of four layers, and you give them something to admire and postpone.")

sources_slide(prs, T, [
    'PAERA v1.0 — §5.6 (Sourcing Strategy)',
    'PAERA v1.0 — §5.4 (Organisational Assessment & Roadmap)',
])


# ================================================================ 5.5
T = '5.5 · Build your team\'s capability with open knowledge products'
section('5.5', 'Build your team\'s capability with open knowledge products',
        'You do not have to train your team from scratch — open knowledge products, a shared '
        'framework, and a community of practising countries mean your people can learn the method '
        'from materials that already exist, freeing your budget for the work itself.',
        '~4 minutes',
        "VO, slide 1: One worry that stops strategists committing is capability: do we have the "
        "people who can do this, and can we afford to train them? The reassuring answer is that "
        "you do not have to build the knowledge from scratch. The method, the framework and the "
        "training materials already exist as open knowledge products — which changes what you "
        "actually need to fund.\n\n" + PROMPT_CUE)

block_slide(prs, 'The method is not locked in a consultant\'s head',
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

block_slide(prs, 'What you actually need to fund is time, not invention',
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

block_slide(prs, 'Build the capability in your own people',
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
          "VO: So capability is not the barrier it appears to be. The knowledge is documented, "
          "open and taught; a community is already using it; and your budget goes to a team that "
          "applies it, not to reinventing it. Use the open knowledge products to grow your own "
          "architects — and you build something that lasts longer than any contract.")

sources_slide(prs, T, [
    'PAERA v1.0 — §4.5 (Digital Co-creation)',
    'PAERA v1.0 — §1.3 (GovStack Vision)',
    'GovStack knowledge base — govstack.global',
])


# ================================================================ 5.6
T = '5.6 · Roll it out — from one sector to a national EA practice'
section('5.6', 'Roll it out — from one sector to a national EA practice',
        'Rolling this out nationally is itself a wave roadmap — start with one sector that proves '
        'the pattern and builds the shared platforms, then bring sectors on one at a time, each '
        'cheaper than the last, until the architecture is how your whole government works.',
        '~4 minutes',
        "VO, slide 1: Suppose you have the commitment. How do you actually roll this out across a "
        "government, without trying to do everything at once and failing? The answer is the same "
        "discipline the method uses inside one sector, applied to the whole country: a wave "
        "roadmap. Start small, prove it, build the shared muscle, then bring sectors on one at a "
        "time.\n\n" + PROMPT_CUE)

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
            "VO: Wave one is one sector, done well. Pick the sector with a clear flagship the "
            "minister cares about — the single learner record, the single patient record. Run the "
            "full method there, end to end. But notice what wave one really builds: not just that "
            "sector's architecture, but the national foundations — the permanent team, the "
            "governance board, and the first shared platforms like identity and data exchange. "
            "Wave one looks like one sector. It is actually the foundation the whole rollout "
            "stands on.\n\n"
            "On screen: the sector block standing on a wider foundation block — reveal the base on "
            "'but notice what wave one really builds'.")

wave_timeline(prs, 'From Wave 2 the rollout accelerates instead of getting harder',
              [('WAVE 1 — education', ['Full method, end to end', 'Builds the team, the board, identity, data exchange'], 3.2, 1.0),
               ('WAVE 2 — health', ['Consumes the platforms', 'Lighter method — team and governance in place'], 2.5, 0.78),
               ('WAVE 3 — agriculture', ['Consumes more', 'Faster, for less'], 2.0, 0.62),
               ('WAVE 4 — social protection', ['Easier still'], 1.6, 0.5)],
              'THE EA BOARD GOVERNS THE PIPELINE — which sector next, what each must reuse, where an exception is warranted',
              'Shared platforms — more complete with every wave',
              'The opposite of a programme that gets harder under its own weight.',
              T,
              "VO: From wave two, each new sector reuses what wave one built. The health sector "
              "consumes the identity platform and the data-exchange backbone that already exist. Its "
              "run of the method is lighter, because the team, the framework and the governance are "
              "in place. It delivers faster and costs less. And every sector that joins makes the "
              "next one easier still, because the shared platforms get more complete and the team "
              "more practised. The rollout accelerates as it goes — the opposite of a programme that "
              "gets harder under its own weight.\n\n"
              "On screen: a wave roadmap — each wave a smaller block than the last, the platform bar "
              "beneath growing, the Board bar across the top (the next slide's subject). Reveal the "
              "waves left to right.")

block_slide(prs, 'Govern the rollout — do not just launch it',
            ['The same board that reviews projects inside a sector governs the national pipeline: '
             'which sector comes next, what each must reuse, and where an exception is genuinely '
             'warranted.',
             'A rollout that is launched and left drifts back into fragmentation, one sector at a '
             'time.'],
            'A governed rollout compounds into a single national architecture.',
            T,
            "VO: And govern the rollout rather than just launching it. The same board that reviews "
            "projects inside a sector governs the national pipeline: which sector comes next, what "
            "each must reuse, where an exception is genuinely warranted. This keeps the rollout "
            "coherent — every new sector building on the shared foundation instead of starting its "
            "own. A rollout that is launched and left drifts back into fragmentation, one sector "
            "at a time. A rollout that is governed compounds into a single national "
            "architecture.\n\n"
            "Production cue: the pivotal slide of this video. Hold it a beat longer.")

rows_block(prs, 'One page, every quarter — the national scorecard',
           [('Sectors live', 'How many have run the method end to end.'),
            ('The re-use rate across them',
             'How much of the new work consumes a shared block instead of rebuilding it.'),
            ('Shared platforms in place',
             'Which of identity, payments and data exchange are authoritative and available.')],
           'It sustains funding across a change of government, and catches a drifting sector early.',
           T,
           "VO: Finally, report the national picture upward, on one page, every quarter. How many "
           "sectors are live. The re-use rate across them. Which shared platforms are in place. "
           "This does two things. It shows the minister the national capability actually growing — "
           "sector by sector, saving by saving — which is what sustains the funding across a "
           "change of government. And it lets you see, early, if a sector is drifting from the "
           "shared foundation, while it is still cheap to correct. The national scorecard is how a "
           "multi-year rollout stays funded and stays coherent.",
           numbered=False)

big_slide(prs,
          'Roll it out as a wave roadmap — one sector first to prove the pattern and build the '
          'shared platforms, then sectors one at a time, each cheaper, governed into a single '
          'national architecture.',
          T,
          "VO: So the rollout is a wave roadmap at national scale. One sector to prove it and "
          "build the foundations. Then sectors one at a time, each reusing the last, each cheaper, "
          "all governed into one coherent architecture and reported on a single page. That is how "
          "an approach that works in one sector becomes how your whole government works.")

sources_slide(prs, T, [
    'PAERA v1.0 — §5.7 (Recommended Roadmap)',
    'PAERA v1.0 — §5.4 (Organisational Assessment & Roadmap)',
])


# ================================================================ 5.7
T = '5.7 · The closing case — proven, portable, and necessary now'
section('5.7', 'The closing case — proven, portable, and necessary now',
        'The case for a national EA comes down to three things you can now say with confidence — '
        'it is proven, it is portable, and in the era of redesigning how government works it is no '
        'longer optional but necessary — held together by the two reasons an EA exists: it makes '
        're-use possible, and it gives business and IT a shared language.',
        '~5 minutes',
        "VO, slide 1: Bring it all together into the case you carry into the room. After "
        "everything, it reduces to three sentences a minister can hold: this is proven, it is "
        "portable, and it is necessary now. And underneath those three sit the two reasons an "
        "Enterprise Architecture exists at all — the two ideas to leave with.\n\n"
        "Production cue: the closing video of the module and of KP1. Its AI usage tip drafts the "
        "closing one-page case for the minister, and ships in the description.")

two_panel(prs, 'Proven and portable — the first two you can now say plainly',
          ('PROVEN',
           ['Four very different governments built the same pattern.',
            'Successes and failures both documented.',
            'You adapt a charted path rather than invent one.']),
          ('PORTABLE',
           ['The method is sector-agnostic.',
            'The same phases on a learner, a patient, a farmer.',
            'Each sector after the first costs less.']),
          'Those two alone make a strong case. The third is what makes it urgent.',
          T,
          "VO: The first two you can now say plainly. Proven — four very different governments "
          "have built the same pattern, with the successes and the failures both documented, so "
          "you adapt a charted path rather than invent one. Portable — the method is "
          "sector-agnostic, the same phases on a learner, a patient, a farmer, and each sector "
          "after the first costs less because the muscle is built once. Proven and portable. Those "
          "alone make a strong case. But the third is the one that makes it urgent.")

block_slide(prs, 'For thirty years, digital government meant putting paper online. That era is '
                 'ending',
            ['The form became a web form, the queue an appointment. The work that delivers real '
             'results today is different: once-only data sharing, a shared identity, a single '
             'record that follows a person across services.',
             'That work is not putting paper online. It is changing how the government operates.'],
            'And it cannot be done by the IT department alone, or the policy side alone.',
            T,
            "VO: Necessary now. For thirty years, digital government meant taking a paper process "
            "and putting it online — the form becomes a web form, the queue an appointment. That "
            "era is ending. The work that delivers real results today is different: redesigning "
            "how government serves citizens — once-only data sharing, a shared identity, a single "
            "record that follows a person across services. That work is not putting paper online. "
            "It is changing how the government operates. And it cannot be done by the IT "
            "department alone, or by the policy side alone.")

two_panel(prs, 'The two reasons an Enterprise Architecture exists',
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
          'Everything else in this knowledge product serves those two.',
          T,
          "VO: And here are the two reasons an EA exists, which are the two ideas to carry out of "
          "this whole knowledge product. First: re-use. Inside any project, building your own is "
          "cheaper than reusing — so projects fragment, and no procurement rule can change that. "
          "Only planning at the level of the whole government makes re-use rational, and only an "
          "EA gives you that view. Second: shared language. The new work needs the business side "
          "and the IT side to decide together, and they do not speak the same language. An EA "
          "gives them one — a shared picture, shared words, and a standing forum to decide in. "
          "Re-use and shared language. Everything else in this knowledge product serves those "
          "two.\n\n"
          "Production cue: the two ideas the whole knowledge product reduces to. Hold it a beat "
          "longer.")

# The module's emotional peak — the only full-colour punch block in the deck.
block_slide(prs, 'Useful then. Necessary now',
            ['In the era of digitising paper, an Enterprise Architecture was useful — a '
             'nice-to-have that made things tidier.',
             'In the era of redesigning how government works, it is necessary: without it, re-use '
             'does not happen, and the business and IT sides cannot have the conversation the '
             'redesign requires.'],
            'The case is not that an EA would be a good idea. It is that the new work cannot be '
            'done well without one.',
            T,
            "VO: Which is why the third sentence is the urgent one. In the era of digitising "
            "paper, an Enterprise Architecture was useful — a nice-to-have that made things "
            "tidier. In the era of redesigning how government works, it is necessary — because "
            "without it, re-use does not happen and the business and IT sides cannot have the "
            "conversation the redesign requires. The countries delivering real results have "
            "understood this. The case you make is not that an EA would be a good idea. It is that "
            "the work your government is now being asked to do cannot be done well without one.\n\n"
            "Production cue: this is the pivotal slide of the whole module and its one full-colour "
            "block. Hold it a beat longer.",
            punch_fill=ITU_BLUE, punch_ink=WHITE)

big_slide(prs,
          'Proven, portable, and necessary now — held together by the two reasons an EA exists: it '
          'makes re-use possible, and it gives business and IT a shared language.',
          T,
          "VO: So that is the case, whole. Proven — four governments have done it. Portable — it "
          "works across your sectors and compounds. Necessary now — because the new work of "
          "government cannot be done without it. And underneath, the two reasons it exists: "
          "re-use, and a shared language between business and IT. Carry those into the room. That "
          "is the case for a national Enterprise Architecture — and the case for starting it where "
          "you are, now.")

sources_slide(prs, T, [
    'PAERA v1.0 — §2.3 (Role of Enterprise Architecture)',
    'PAERA v1.0 — §2.5 (What is Digital Government?)',
])


# ================================================================ Thank you
s = add_slide(prs, LAYOUT_THANKS)
notes(s, 'Closing slide for the combined deck. Individual videos end on their sources slide instead.')

# Self-check: the split spec's slide ranges depend on this count, and a helper that
# silently stops drawing shows up first as a slide with no voice-over.
assert len(prs.slides._sldIdLst) == 52, 'slide count changed — update decks/split_spec.json'
assert all(sl.has_notes_slide and sl.notes_slide.notes_text_frame.text.strip() for sl in prs.slides), \
    'every slide carries its voice-over in the notes'

OUT = os.environ.get('OUT_PATH') or os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    'videos', 'module_5', 'en', 'decks', 'KP1_M5_Deck_v0.1.pptx')
prs.save(OUT)
print('slides:', len(prs.slides._sldIdLst))
print('saved', OUT)

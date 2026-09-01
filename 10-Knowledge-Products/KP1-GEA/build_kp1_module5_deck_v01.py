#!/usr/bin/env python3
# Build the KP1 Module 5 (Topic 5) video deck on the ITU template.
# Content only — every generic helper, branding constant and layout index comes from
# ITU-Giga-KP-Plugin/skills/kp-deck-builder/scripts/deck_lib.py (which also ships the
# template). Conventions and design rules: that skill's SKILL.md.
# Generated .pptx is NEVER hand-edited — fix here, re-render, re-run the split
# (kp-deck-builder/scripts/split_module_deck.py + the split spec next to the decks).
# Override paths with TEMPLATE= and OUT_PATH= env vars.
import math
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                '..', 'ITU-Giga-KP-Plugin', 'skills', 'kp-deck-builder', 'scripts'))
from deck_lib import (
    INK, ITU_BLUE, ITU_BLUE_DARK, LIGHT, PANEL_GREY, WHITE,
    LAYOUT_THANKS,
    add_slide, big_slide, block_slide, delete_template_slides, edit_agenda,
    edit_cover, notes, open_template, rows_block,
    section_slide, sources_slide, two_panel)
from deck_diagrams import bars_slide, play_card, prompt_anatomy

prs = open_template(os.environ.get('TEMPLATE'))

AUDIENCE = 'Chief architect · senior architect · sector ICT lead'

# The AI usage tip of every video is a copy-paste prompt that ships in the YouTube
# description, not on a slide — the bundle's slide cues put no prompt text on screen.
PROMPT_CUE = ('On screen: the play\'s copy-paste prompt is not shown on a slide — it ships in the '
              'video description so the viewer can run it on the other half of the screen.')


# ---------------------------------------------------------------- module-local composites
def punch_after(lead):
    """Where the landing panel should sit for this lead — measured from the lead's own
    length instead of the fixed 4.85, which on a two-sentence lead leaves a blank band.
    ponytail: a character-count estimate of wrapped height, not a real text measurement;
    the clamp keeps it inside the safe range either way, and the render QA is the check."""
    lines = sum(max(1, math.ceil(len(para) / 85)) for para in lead)
    height = lines * 0.34 + (len(lead) - 1) * 0.17
    return min(4.85, max(3.55, round(1.75 + height + 0.5, 2)))


def blk(head, lead, punch, tag, note, **kw):
    """block_slide with the panel pulled up to meet the lead."""
    kw.setdefault('punch_y', punch_after(lead))
    return block_slide(prs, head, lead, punch, tag, note, **kw)


def section(code, name, message, runtime, note):
    return section_slide(prs, 'KP1 · MODULE 5 · VIDEO %s' % code, code, name, message,
                         runtime + ' · standalone video · voice-over on text slides', note)


# ---------------------------------------------------------------- COVER (edit slide 1)
edit_cover(
    prs,
    title_text='Five AI plays\nfor real EA work',
    kicker='KP1 · Government Enterprise Architecture · Module 5',
    blurb='Seven standalone videos on using AI well for enterprise-architecture work: the ground '
          'rules that make every play safe, five reusable plays that draft the assessment, the '
          're-use business case, the minister-to-architect translation, the governance documents '
          'and the comparator cases — and the four safeguards that keep a fast draft from becoming '
          'a liability.',
    length='~33 mins across 7 videos (5.1 – 5.7)',
    audience=AUDIENCE,
    panel_heading='THE FIVE PLAYS THIS MODULE TEACHES',
    panel_items=['Play 1 — Discovery and Assess',
                 'Play 2 — the re-use business case',
                 'Play 3 — minister and architects',
                 'Play 4 — the governance artefacts',
                 'Play 5 — comparators and transfer'],
    panel_footer='4-part prompt · 5 plays · 4 safeguards · you decide, the AI drafts',
    note_text='Cover for the combined Module 5 deck. Each section that follows is one standalone '
              '~4–5 minute video. Modules 1 to 4 each carried a single AI prompt in passing, to '
              'turn a method step into a draft. Module 5 is dedicated to using the tool well: the '
              'ground rules first, then five reusable plays for real EA work, then the safeguards '
              'that make all five safe.')

# ---------------------------------------------------------------- AGENDA (edit slide 2)
edit_agenda(
    prs,
    header='Module 5 — seven videos',
    items=[
        ('5.1  Use AI as a drafting partner, not an oracle', '~5 min'),
        ('5.2  Play 1 — Draft your Discovery and Assess artefacts', '~5 min'),
        ('5.3  Play 2 — Build the re-use business case', '~5 min'),
        ('5.4  Play 3 — Translate minister and architects', '~5 min'),
        ('5.5  Play 4 — Draft your governance artefacts', '~4 min'),
        ('5.6  Play 5 — Comparator cases and sector transfer', '~4 min'),
        ('5.7  Keep AI honest — verify, cite, and protect data', '~5 min'),
    ],
    message_paras=[
        'AI can save an architect days of drafting, and it can lead them confidently into a wrong '
        'answer. The difference is entirely in how it is used.',
        'So: the ground rules, five plays you will reuse on every engagement, and the four '
        'safeguards that sit under all of them. AI drafts. You decide.',
    ],
    note_text='Navigation slide for the combined deck; the videos ship standalone on YouTube. '
              '5.1 sets the ground rules and the four-part prompt every later play uses; 5.2 to '
              '5.6 are the five plays; 5.7 closes with the four safeguards. Each play video\'s AI '
              'usage tip is the play itself — a copy-paste prompt in the description.')

delete_template_slides(prs, keep=2)


# ================================================================ 5.1
T = '5.1 · Use AI as a drafting partner, not an oracle'
section('5.1', 'Use AI as a drafting partner, not an oracle — the ground rules',
        'AI is a fast drafting partner for EA work, not an oracle — it produces a strong first '
        'draft you verify, never a finding you trust. Learn the four-part prompt pattern and the '
        'one rule that makes every play safe: you decide, the AI drafts.',
        '~5 minutes',
        "VO, slide 1: AI can save you days of drafting on EA work, and it can also lead you "
        "confidently into a wrong answer. The difference is entirely in how you use it. So before "
        "any of the plays, learn the ground rules that make them safe — the small set of habits "
        "that turn AI from a risk into a fast, reliable drafting partner.\n\n"
        "Retrieval prompt — ask before playing on: what is the difference between a safeguard "
        "that helps you and one that does nothing? Answer on the fourth slide.\n\n"
        "Production cue: this is the foundation video for the whole module. Every play that "
        "follows assumes the four-part prompt taught here.")

blk('It states a wrong figure in exactly the tone it states a right one',
            ['AI produces a strong first draft in minutes — a gap analysis, a terms of reference, '
             'a business case. What it does not produce is a finding you can trust without '
             'checking.',
             'A wrong section number, a plausible but invented figure, a confident claim with no '
             'basis — each arrives in exactly the same tone as a correct one.'],
            'The draft is where your work starts, not where it ends.',
            T,
            "VO: The first rule. AI is a drafting partner, not an oracle. It produces a strong "
            "first draft of a gap analysis, a board terms of reference, a business case — in "
            "minutes instead of days. What it does not produce is a finding you can trust without "
            "checking. It will state a wrong section number, a plausible but invented figure, a "
            "confident claim with no basis, in exactly the same tone as a correct one. The draft "
            "is where your work starts, not where it ends. Treat every output as a hypothesis to "
            "verify, never a fact to forward.")

# The module's centrepiece — the prompt shape every later play reuses.
prompt_anatomy(prs, 'Every play in this module uses the same four-part prompt',
               [('Name the input you are pasting.',
                 '"Below is my Discovery brief for the education sector."'),
                ('Break the task into named outputs.',
                 '"Score the capabilities, list the gaps, rank them."'),
                ('State the exact output format you want.',
                 '"A four-row table plus three bullets."'),
                ('Add a safeguard line for this prompt\'s specific risk.',
                 '"Flag any gap involving a politically powerful body."')],
               'Four parts gives you a usable artefact. "Help me with my architecture" gives you mush.',
               T,
               "VO: Second, the shape of a good prompt. Every play in this module uses the same four "
               "parts. One — name the input you are pasting: below is my Discovery brief. Two — break "
               "the task into named outputs: score the capabilities, list the gaps, rank them. Three — "
               "state the exact output format you want: a four-row table plus three bullets. Four — "
               "add a safeguard line that names this prompt's specific risk. A prompt with these four "
               "parts gives you a usable artefact. A vague one — help me with my architecture — gives "
               "you vague mush.\n\n"
               "Production cue: the centrepiece slide of the module. The four parts are shown as one "
               "prompt block on the right, bracketed part by part. Reveal the four parts one at a "
               "time and hold the finished slide a beat longer — every later video refers back to it.")

two_panel(prs, 'A good safeguard names how THIS prompt can mislead you',
          ('FOR A GAP ANALYSIS',
           ['A severity judgement about a powerful ministry must be checked with the '
            'decision-maker.',
            'Not softened by the model.',
            'The trap here is a model being diplomatic about power.']),
          ('FOR A COMPARATOR CARD',
           ['Discard any country example where the cited source does not actually say what the '
            'prompt claims.',
            'Discard the claim, not just the citation.',
            'The trap here is a fluent, invented source.']),
          'Not "AI can make mistakes" — that helps no one.',
          T,
            "VO: On that safeguard line — it is the most important part, and the easiest to get "
            "lazy about. A good safeguard names the specific way this specific prompt can mislead "
            "you. For a gap analysis: a severity judgement about a powerful ministry must be "
            "checked with the decision-maker, not softened by the model. For a comparator card: "
            "discard any country example where the cited source does not actually say what the "
            "prompt claims. The safeguard is not 'AI can make mistakes' — that helps no one. It is "
            "the one check that catches this play's particular trap.\n\n"
            "Production cue: this slide answers the retrieval prompt set on the title slide.")

blk('You decide; the AI drafts',
            ['The AI prepares the Board paper; the Board rules. It ranks the gaps; you defend the '
             'ranking. It proposes a sourcing call; the architect and the EA Board own the '
             'decision.',
             'The moment the output becomes the decision instead of the input to one, you have '
             'handed your judgement to a tool with no accountability, that cannot be questioned in '
             'a meeting.'],
            'Use it to think faster, never to think less.',
            T,
            "VO: Fourth, the rule that sits above all the others. You decide; the AI drafts. The "
            "AI can prepare the board paper, but the board rules. It can rank the gaps, but you "
            "defend the ranking. It can propose a sourcing call, but the architect and the EA "
            "Board own the decision. The moment you let the AI's output be the decision instead of "
            "the input to a decision, you have handed your judgement to a tool that has no "
            "accountability and cannot be questioned in a meeting. Use it to think faster, never "
            "to think less.\n\n"
            "Production cue: the pivotal slide of this video — the rule the whole module sits "
            "under. Hold it a beat longer.")

big_slide(prs,
          'AI is a fast drafting partner for EA work, not an oracle — use the four-part prompt, '
          'write a specific safeguard, and remember: you decide, the AI drafts.',
          T,
          "VO: So these are the ground rules. AI is a drafting partner, not an oracle. Use the "
          "four-part prompt. Make the safeguard specific. And keep the decision yours. Hold to "
          "these, and the plays in this module save you days without leading you astray. Forget "
          "them, and AI becomes a fast way to be confidently wrong.")

sources_slide(prs, T, [
    'ITU Knowledge Products contract Terms of Reference — §4.3 (AI integration)',
    'GovStack knowledge base — govstack.global',
])


# ================================================================ 5.2
T = '5.2 · Play 1 — Draft your Discovery and Assess artefacts'
section('5.2', 'Play 1 — Draft your Discovery and Assess artefacts',
        'The first play turns your raw Discovery notes into a structured capture template and then '
        'a ranked gap analysis — the two hardest-to-start artefacts of the assessment — in a '
        'fraction of the time, with the politics flagged for you to handle honestly.',
        '~5 minutes',
        "VO, slide 1: The first play is the one you will use most: drafting the artefacts of "
        "Discovery and Assess. These are the slowest to start from a blank page — the capture "
        "template, and the ranked gap analysis. AI gets you from blank page to strong draft in "
        "minutes. Here is how it goes on a real sector.\n\n" + PROMPT_CUE)

play_card(prs, 'Step 1 — walk in with a structured sheet, not a blank notebook',
          ["A body's mandate.", 'Its known systems.', 'Its registries.'],
          ['A four-layer capture template.', 'The right questions per layer.',
           "A describe-don't-recommend reminder.", 'A column for where each answer came from.'],
          ['Ask the questions.', 'Record the real answers.',
           'The template is a structure, never the findings.'],
          'Blank page to structured sheet, before the first interview.',
          T,
            "VO: Step one, before the interviews. You paste what you know about a body — its "
            "mandate, its known systems, its registries. The AI returns a four-layer capture "
            "template: the right questions to ask per layer, a reminder to describe and not "
            "recommend, and a column to record where each answer came from. You walk into the "
            "Discovery interview with a structured sheet instead of a blank notebook. The template "
            "is a starting structure — you still ask the questions and record the real answers.")

play_card(prs, 'Step 2 — a ranked gap analysis in minutes instead of a week',
          ['Your Discovery findings.'],
          ['Capability maturity scored.', 'The four common gaps, found.',
           'Ranked by impact and effort.', 'Politically sensitive gaps flagged.'],
          ['Check the ground truth.', 'Defend the ranking.',
           'Decide how to handle the flagged gap.'],
          'The skeleton of the assessment that would otherwise take a week to structure.',
          T,
            "VO: Step two, after Discovery. You paste the findings back in and ask for a ranked "
            "gap analysis. On a sector like Progressa's education system, the AI scores the "
            "capabilities — register a learner low, certify a result high — scans for the four "
            "common gaps, ranks them by impact and effort, and, crucially, flags the gaps that "
            "involve a powerful body for honest handling. In minutes you have the skeleton of the "
            "assessment that would otherwise take a week to structure.")

two_panel(prs, 'The structure is the AI\'s. The truth and the judgement are yours',
          ('THE AI GETS RIGHT',
           ['Structure and completeness.',
            'It will not forget to score a capability.',
            'It will not forget to check for duplicate registries.']),
          ('THE AI CANNOT',
           ['Know the ground truth.',
            'Feel the political weight of a gap a powerful programme will fight to keep.',
            'Tell whether a "fact" in your notes is actually true.']),
          'It scores what your notes say, not what is real.',
          T,
          "VO: Be clear about the division of labour. The AI is good at structure and completeness "
          "— it will not forget to score a capability or to check for duplicate registries. What "
          "it cannot do is know the ground truth. It scores what your notes say, not what is real. "
          "It cannot feel the political weight of the gap that a powerful programme will fight to "
          "keep. And it cannot tell whether a fact in your notes is actually true. The structure "
          "is the AI's; the truth and the judgement are yours.")

blk('The play gives you the flag. You provide the courage',
            ['The AI marks the duplicate learner list a powerful programme owns as a politically '
             'sensitive gap. But it cannot decide how to handle it — that is your call, made with '
             'the decision-maker, not softened to avoid a fight.',
             'An assessment that flatters the current state to keep the peace fails quietly, a '
             'year later, when the flagship still does not exist.'],
            'Of everything this play produces, the honesty flag matters most.',
            T,
            "VO: Of everything this play produces, the honesty flag matters most. The AI will mark "
            "the duplicate learner list that a powerful programme owns as a politically sensitive "
            "gap. But it cannot decide how to handle it — that is your call, made with the "
            "decision-maker, not softened to avoid a fight. The play gives you the flag; you "
            "provide the courage. An assessment that flatters the current state to keep the peace "
            "fails quietly, a year later, when the flagship still does not exist.\n\n"
            "Production cue: the pivotal slide of this video. Hold it a beat longer.")

big_slide(prs,
          'This play turns raw Discovery notes into a capture template and a ranked gap analysis '
          'in minutes — the AI supplies the structure; you supply the ground truth and the '
          'honesty.',
          T,
          "VO: So the first play gets you from blank page to a structured capture template and a "
          "ranked gap analysis fast. Use it to skip the slow part — the structuring — and spend "
          "your time on the part only you can do: getting the truth right, and ranking the gaps "
          "honestly, including the ones that are uncomfortable to name.")

sources_slide(prs, T, [
    'PAERA v1.0 — §3.1.3 (Readiness Assessment)',
    'PAERA v1.0 — §5.1 (Capabilities Assessment)',
    'PAERA v1.0 — §5.4 (Organisational Assessment & Roadmap)',
])


# ================================================================ 5.3
T = '5.3 · Play 2 — Build the whole-of-government re-use business case'
section('5.3', 'Play 2 — Build the whole-of-government re-use business case',
        'The second play builds the business case that makes re-use visible — a cost comparison '
        'showing that each project building its own is cheaper for the project but ruinous for the '
        'country — the number that wins the budget argument.',
        '~5 minutes',
        "VO, slide 1: The second play helps you win the hardest argument in EA: that re-use saves "
        "money, even though no single project will choose it. The trouble is that the saving is "
        "invisible at the project level and only appears across the whole government. This play "
        "makes it visible — a business case with a number the budget authority can act on.\n\n"
        + PROMPT_CUE)

bars_slide(prs, 'Cheaper for the project. Ruinous for the country',
           [('GROUP', 'INSIDE ONE PROJECT — the project manager is making the right call, for the project'),
            ('Build its own', [('cheaper, faster', 0.22, ITU_BLUE, WHITE)], 'so every project builds its own'),
            ('Reuse the national one', [('learn it · negotiate · wait', 0.34, PANEL_GREY, INK)], ''),
            ('GROUP', 'ACROSS TEN PROJECTS — the column no single project ever sees'),
            ('Each builds its own', [('', 0.085, ITU_BLUE, WHITE)] * 10, 'paid ten times for identity'),
            ('Build once, consume ×9', [('build once', 0.22, ITU_BLUE, WHITE), ('nine consume', 0.16, LIGHT, ITU_BLUE_DARK)],
             'the citizen proves who they are once')],
           'The re-use saving only exists when you add up the whole government — the view no '
           'project has.',
           T,
           "VO: Here is the argument the play helps you make. Inside any one project, building its "
           "own small identity function is cheaper and faster than reusing the national one. So "
           "every project builds its own. Across ten projects, the country has paid ten times for "
           "identity, and the citizen proves who they are on paper at every counter. The saving "
           "from re-use is real, but it only exists when you add up the whole government — which is "
           "exactly the view no project has, and the budget authority rarely sees.\n\n"
           "On screen: bar length is the argument — no figures. The top pair shows why the project "
           "chooses to build; the bottom pair shows what that choice costs the country. Reveal the "
           "bottom pair on 'Across ten projects'.",
           label_w=2.75, row_h=0.6, gap=0.3, y=1.7)

rows_block(prs, 'What the play produces',
           [('You paste in three to five programmes',
             'Rough budget envelopes, plus the shared building blocks that already exist.'),
            ('It returns a per-programme cost table',
             'Build your own versus consume the shared block — honestly showing that consuming is '
             'often dearer for the single project.'),
            ('It totals across all programmes over five years',
             'Where the country-level saving finally appears as a single number.')],
           'The whole-of-government saving stops being a claim and becomes a calculation.',
           T,
           "VO: The play makes that addition for you. You paste in three to five of your country's "
           "programmes, with rough budgets, and the shared building blocks that exist. The AI "
           "produces a per-programme table: for each, the local cost of building its own versus "
           "consuming the shared block — and it honestly shows that consuming is often more "
           "expensive for the individual project. Then it totals across all programmes over five "
           "years, where the country-level saving finally appears as a single number.")

blk('A procurement rule cannot make re-use the cheapest choice for the project '
                 'doing the work',
            ['A procurement rule can require open standards, but it cannot change the arithmetic '
             'inside a single project. Only planning at the level of the whole government can show '
             'why re-use is worth it — and that is the view an Enterprise Architecture exists to '
             'give.',
             'This play takes that view, which usually lives in an architect\'s head, and puts it '
             'on one page the budget authority can read.'],
            'The central case for an EA, turned into a number.',
            T,
            "VO: This is the central case for an EA, turned into a number. A procurement rule can "
            "require open standards, but it cannot make re-use the cheapest choice for the project "
            "doing the work. Only planning at the level of the whole government can show why "
            "re-use is worth it — and that is the view an Enterprise Architecture exists to give. "
            "This play takes that view, which usually lives in an architect's head, and puts it on "
            "one page the budget authority can read. The whole-of-government saving stops being a "
            "claim and becomes a calculation.\n\n"
            "Production cue: the pivotal slide of this video. Hold it a beat longer.")

blk('Use the total to motivate a costing, not to quote it',
            ['The numbers are directional. Their job is to win the argument that re-use deserves a '
             'proper costing — not to be the costing.',
             'Present the country-level total as a reason to commission a detailed business case, '
             'and name the conditions that make the saving real: the shared blocks exist, the '
             'Board has authority, the funding is sustained.'],
            'Oversell the numbers and a sharp finance officer dismisses the whole case.',
            T,
            "VO: One discipline with this play. The numbers it produces are directional, not "
            "quotations. Their job is to make the shape of the saving visible — to win the "
            "argument that re-use is worth a proper costing — not to be the costing themselves. "
            "Present the country-level total as a reason to commission a detailed business case, "
            "and name the conditions that make the saving real: the shared blocks must exist, the "
            "Board must have authority, the funding must be sustained. Oversell the numbers and a "
            "sharp finance officer will dismiss the whole case.")

big_slide(prs,
          'This play makes the re-use saving visible — a per-programme cost table totalled to a '
          'country-level number — turning the whole-of-government argument into a figure the '
          'budget authority can act on.',
          T,
          "VO: So the second play is your re-use argument, made concrete. It shows, programme by "
          "programme, that building your own is locally cheaper and nationally ruinous, and it "
          "totals the saving the country gets from re-use. Use it to win the funding argument that "
          "an architect, armed only with a principle, usually loses.")

sources_slide(prs, T, [
    'PAERA v1.0 — §5.6 (Sourcing Strategy)',
    'PAERA v1.0 — §1.3 (GovStack Vision)',
])


# ================================================================ 5.4
T = '5.4 · Play 3 — Translate between the minister and the architects'
section('5.4', 'Play 3 — Translate between the minister and the architects',
        'The third play is a translator — it turns a minister\'s policy goal into architecture '
        'terms and a joint agenda, and architecture decisions back into outcomes a minister '
        'understands — so the business side and the IT side can actually decide together.',
        '~5 minutes',
        "VO, slide 1: The third play addresses the problem at the heart of modern EA work: the "
        "business side and the IT side do not share a language. The minister talks outcomes; the "
        "architect talks systems. They sit in the same meeting and miss each other. This play is a "
        "translator that helps both sides decide together.\n\n" + PROMPT_CUE)

play_card(prs, 'From the minister\'s sentence to the decisions it forces',
          ["The minister's goal, in their own words.",
           '"Every learner should have one record that follows them through school."'],
          ['The capabilities it implies.', 'The services and the data domains.',
           'Who owns the authoritative learner.', 'What to build and what to reuse.'],
          ['Confirm it is what was meant.', 'Take the decisions to the Board.'],
          'Architecture decisions, without losing what the minister actually asked for.',
          T,
            "VO: First direction: from policy to architecture. You paste the minister's goal in "
            "their words — every learner should have one record that follows them through school. "
            "The AI returns what that means in architecture terms: the capabilities involved, the "
            "services, the data domains, and the decisions it forces — who owns the authoritative "
            "learner, which bodies must consume it, what must be built versus reused. The "
            "minister's sentence becomes a structured set of architecture decisions, without "
            "losing what the minister actually asked for.")

play_card(prs, 'And back the other way — from a technical decision to what a parent notices',
          ['A technical decision.',
           '"The Examination Authority will consume the Learner Registry."'],
          ['Parents stop re-entering details.',
           'The single learner record becomes possible.', 'The flagship can be delivered.'],
          ['Brief the minister in their language.', 'Own the trade-offs it carries.'],
          'The architecture stops being a black box the minister has to trust.',
          T,
            "VO: Second direction, just as important: from architecture back to outcomes. You "
            "paste a technical decision — the Examination Authority will consume the Learner "
            "Registry over the data-exchange backbone. The AI returns what that means for the "
            "minister and the citizen: parents stop re-entering their child's details, the single "
            "learner record becomes possible, the flagship can be delivered. The architecture "
            "stops being a black box the minister has to trust, and becomes a set of choices they "
            "can understand and own.")

rows_block(prs, 'The most useful output is the joint agenda',
           [('Business decisions only the ministry can make',
             'Policy, legal, who owns what.'),
            ('Technical decisions only the architects can make',
             'Technology choice, security model, integration pattern.'),
            ('Joint decisions that need both in the room',
             'Named in plain language, with what each side needs from the other to decide well.')],
           'Exactly what an EA Board meeting needs, instead of two groups talking past each other.',
           T,
           "VO: The play's most useful output is the joint agenda. You give it an operating-model "
           "question — should we move to once-only data sharing for education — and it decomposes "
           "the decision into three parts: the business decisions only the ministry can make, the "
           "technical decisions only the architects can make, and the joint decisions that need "
           "both in the room. For each joint decision, it names what each side needs from the "
           "other to decide well. That agenda is exactly what an EA Board meeting needs to be "
           "productive instead of two groups talking past each other.")

blk('The tool translates. The architecture is what makes it stick',
            ['An Enterprise Architecture exists to give the business side and the IT side a shared '
             'language for the new work of redesigning services. This play does the translating in '
             'real time — in the meeting, not just in theory.',
             'But it does not replace the shared vocabulary or the standing forum.'],
            'A translator is not a shared language. Agree the metamodel; convene the Board.',
            T,
            "VO: This is the second great purpose of an EA, made practical. An Enterprise "
            "Architecture exists to give the business side and the IT side a shared language for "
            "the new work of redesigning services. This play is a tool that does the translating "
            "in real time. But a caution: the tool translates; it does not replace the shared "
            "vocabulary and the standing forum. The metamodel still has to be agreed, and the "
            "Board still has to meet. The play makes the translation faster; the architecture is "
            "what makes it stick.\n\n"
            "Production cue: the pivotal slide of this video. Hold it a beat longer.")

big_slide(prs,
          'This play translates a minister\'s goal into architecture and back, and decomposes a '
          'decision into business, IT and joint parts — so the two sides can finally decide '
          'together.',
          T,
          "VO: So the third play is a translator between the minister and the architects. Goal to "
          "architecture, architecture to outcome, and the joint agenda that gets both sides "
          "deciding together. It is the shared-language job an EA exists to do — with a tool that "
          "makes it happen in the meeting, not just in theory.")

sources_slide(prs, T, [
    'PAERA v1.0 — §2.3 (Role of Enterprise Architecture)',
    'PAERA v1.0 — §4.5 (Digital Co-creation)',
])


# ================================================================ 5.5
T = '5.5 · Play 4 — Draft your governance artefacts'
section('5.5', 'Play 4 — Draft your governance artefacts',
        'The fourth play drafts the institutional documents governance needs — the Board terms of '
        'reference, the review-gate checklist, the gate-decision paper — so you arrive at the '
        'meeting with a strong draft to edit, not a blank page to dread.',
        '~4 minutes',
        "VO, slide 1: The fourth play drafts the documents that make governance real — and that "
        "architects most dread starting. A Board terms of reference. A review-gate checklist. A "
        "gate-decision paper for a specific project. These are formal, structured, and slow to "
        "write from scratch. The play gets you a strong draft to edit.\n\n" + PROMPT_CUE)

rows_block(prs, 'The Board terms of reference — the one-to-two pages you take to the chair',
           [('Purpose', 'What the Board is for, in one paragraph.'),
            ('Binding decision scope',
             'Spelled out as specific decision types — not "provides guidance".'),
            ('Membership',
             'The digitalisation officer, the sector CIOs, the registry owners, the '
             'data-protection regulator.'),
            ('Cadence and reporting line', 'How often it meets, and who it reports to.'),
            ('Escalation path', 'What happens when a body refuses a ruling.')],
           'Give it your country\'s roles; get a draft instead of a blank page and a deadline.',
           T,
           "VO: First, the Board terms of reference. You give the AI your country's relevant roles "
           "— the digitalisation officer, the sector CIOs, the registry owners, the "
           "data-protection regulator. It drafts a terms of reference with the parts that matter: "
           "the purpose, the binding decision scope spelled out as specific decision types, the "
           "membership, the cadence, the reporting line, the escalation path. You get a "
           "one-to-two-page institutional document to take to the chair, instead of a blank page "
           "and a deadline.",
           numbered=False, top=1.55, bottom=6.35, head_size=17)

rows_block(prs, 'The review-gate checklist — the operational heart of governance',
           [('The intake questions', 'What every project answers before funding.'),
            ('What a pass looks like for each', 'So the gate is a test, not an opinion.'),
            ('An exception form with a sunset date',
             'Exceptions are granted in writing, and they expire.'),
            ('The decision-log fields', 'What was decided, and why.')],
           'Give it your adopted principles and your shared blocks; get a working draft in minutes.',
           T,
           "VO: Second, the review-gate checklist — the questions every project answers before "
           "funding. You give it your adopted principles and the shared building blocks you have. "
           "It drafts the intake questions, what a pass looks like for each, an exception form "
           "with a sunset date, and the fields for the decision log. This is the operational heart "
           "of governance, and the play gives you a working draft of it in minutes.",
           numbered=False)

play_card(prs, 'The gate-decision paper — arrive prepared, and let the Board rule',
          ['A real project proposal.',
           'The scholarship programme that wants its own learner list.'],
          ['The gate questions, answered.', 'A recommended ruling.',
           'The decision-log entry.'],
          ['The Board rules.',
           'Consume the registry, or a time-boxed written exception.'],
          'The Board still rules — on a structured paper, not an argument made on the spot.',
          T,
            "VO: Third, the gate-decision paper for a real project. You paste a project proposal — "
            "the scholarship programme that wants its own learner list — and the AI drafts the "
            "gate questions answered, a recommended ruling, consume the registry or a time-boxed "
            "exception, and the decision-log entry. You arrive at the Board with a prepared paper. "
            "The Board still rules — but it rules on a clear, structured recommendation instead of "
            "an argument made on the spot.")

blk('A Board claiming authority it does not legally hold is overruled on first test',
            ['The documents this play drafts are institutional, and some of them — especially the '
             'Board\'s binding decision scope — interact with your country\'s laws. The AI draft '
             'is a starting point for your legal counsel, never the final text.',
             'The first time a powerful ministry tests an authority the Board does not have, the '
             'overrule sets a precedent that is hard to undo.'],
            'Draft fast with the play. Ratify slowly, with counsel.',
            T,
            "VO: One firm caution with this play. The documents it drafts are institutional, and "
            "some of them — especially the Board's binding decision scope — interact with your "
            "country's laws. The AI draft is a starting point for your legal counsel, never the "
            "final text. A Board that claims authority it does not legally hold will be overruled "
            "the first time a powerful ministry tests it, and that overrule sets a precedent that "
            "is hard to undo. Draft fast with the play; ratify slowly, with counsel.\n\n"
            "Production cue: the operative beat of this video. Hold it a beat longer.")

big_slide(prs,
          'This play drafts the Board terms of reference, the review-gate checklist and the '
          'gate-decision paper — so governance arrives as a strong draft to edit, with legal '
          'review before anything is adopted.',
          T,
          "VO: So the fourth play drafts the institutional documents governance needs. The terms "
          "of reference, the review-gate checklist, the gate-decision paper. Use it to skip the "
          "dread of the blank page — and route every document that touches authority through your "
          "legal counsel before it is adopted.")

sources_slide(prs, T, [
    'PAERA v1.0 — §4.2.1 (Management)',
    'PAERA v1.0 — §5.4 (Organisational Assessment & Roadmap)',
])


# ================================================================ 5.6
T = '5.6 · Play 5 — Generate comparator cases and a sector-transfer plan'
section('5.6', 'Play 5 — Generate comparator cases and a sector-transfer plan',
        'The fifth play generates the persuasion material — comparator-country cards tuned to your '
        'context with real sources, and a one-page plan to run the method on a new sector — for '
        'the briefings and pitches where you need evidence and a path.',
        '~4 minutes',
        "VO, slide 1: The fifth play produces the material you need to persuade and to spread the "
        "method: comparator cases for a briefing, and a transfer plan for a new sector. Both are "
        "research-heavy and slow by hand. The play drafts them — with one strict rule about "
        "sources.\n\n"
        "Retrieval prompt — ask before playing on: what is the single most dangerous thing AI does "
        "on a comparator card? Answer on the next slide but one.\n\n" + PROMPT_CUE)

rows_block(prs, 'Comparator cards that look like your country, not always Estonia',
           [('Why it is comparable',
             'One sentence against your size, income level, governance type and region.'),
            ('What they actually built', 'Two or three bullets — substance, not marketing.'),
            ('One transferable lesson', 'The thing you could do differently on Monday.'),
            ('A public source for every substantive claim', 'A URL you can open.')],
           'Three to five countries, prioritising African and other developing-country examples.',
           T,
           "VO: First, comparator cards. You give the AI your country's characteristics — size, "
           "income level, governance type, region, the constraints you face. It returns three to "
           "five genuinely comparable countries, prioritising African and other developing-country "
           "examples: for each, why it is comparable, what they actually built, one transferable "
           "lesson, and a public source for every substantive claim. Instead of always reaching "
           "for Estonia, you get signposts that look like your country, which land far better in a "
           "cabinet briefing.",
           numbered=False)

blk('Cite or discard — this is where AI is most dangerous',
            ['Every claim on a comparator card needs a real, checkable source. AI invents '
             'plausible-looking citations that do not say what the card claims, or do not exist at '
             'all.',
             'So open the source for every example. If it does not actually document what the card '
             'says, throw that example out — discard the claim, not just the citation.'],
            'A fabricated citation, caught in a cabinet meeting, discredits your whole briefing.',
            T,
            "VO: Here is the strict rule for this play, because it is where AI is most dangerous. "
            "Every claim on a comparator card must have a real, checkable source — and AI will "
            "invent plausible-looking citations that do not say what the card claims, or do not "
            "exist at all. So the rule is: cite or discard. Open the source for every example. If "
            "it does not actually document what the card says, throw that example out. A "
            "comparator card with a fabricated citation, caught in a cabinet meeting, discredits "
            "your whole briefing.\n\n"
            "Production cue: this slide answers the retrieval prompt set on the title slide. The "
            "operative beat of the video — hold it a beat longer.")

rows_block(prs, 'The sector-transfer plan — one page to start on a sector you were just handed',
           [('The bodies, classified',
             'Policy unit, regulator, service authority — in health, agriculture or social '
             'protection.'),
            ('This sector\'s equivalent of the single learner record',
             'A patient record. A farmer registry. A beneficiary record.'),
            ('The five phase deliverables, named for this sector',
             'The same outputs, in this sector\'s language.'),
            ('A suggested first two waves',
             'Where to start, so something lands inside the first year.')],
           'Only the institutions and the data domains change. The method does not.',
           T,
           "VO: Second, the sector-transfer plan. The method you have built on education transfers "
           "to health, to agriculture, to social protection — only the institutions and the data "
           "domains change. You give the AI a new sector's bodies, and it returns a one-page plan: "
           "the bodies classified, this sector's equivalent of the single learner record, the five "
           "phase deliverables named for this sector, and a suggested first two waves. It is the "
           "fastest way to start the method on a sector you have just been handed.\n\n"
           "On screen: health, agriculture and social protection are named as places the method "
           "applies, not as worked examples — education is the worked sector throughout KP1.")

blk('A plan to start Discovery faster, not a reason to skip it',
            ['The transfer plan guesses the duplicated data domain and the likely gaps for the new '
             'sector — and it may guess wrong, because it has not looked.',
             'The real gaps come from running the method on the real sector, not from a plan '
             'written before anyone has looked.'],
            'It is a starting structure, not an assessment.',
            T,
            "VO: One caution on the transfer plan, the same as every play. It is a starting "
            "structure, not an assessment. It guesses the duplicated data domain and the likely "
            "gaps for the new sector — and it may guess wrong, because it has not looked. Use it "
            "to start Discovery faster, not to skip it. The real gaps come from running the method "
            "on the real sector, not from a plan written before anyone has looked.")

big_slide(prs,
          'This play generates comparator cards tuned to your context and a sector-transfer plan '
          '— fast — under one rule: cite every source or discard the claim, and confirm by '
          'looking.',
          T,
          "VO: So the fifth play gives you the persuasion and spread material — comparator cards "
          "that look like your country, and a plan to take the method to a new sector. Use it "
          "freely, under one discipline: cite or discard, and confirm by looking. Evidence you "
          "cannot verify is worse than none.")

sources_slide(prs, T, [
    'PAERA v1.0 — §5.7 (Recommended Roadmap)',
    'PAERA v1.0 — §5.4 (Organisational Assessment & Roadmap)',
])


# ================================================================ 5.7
T = '5.7 · Keep AI honest — verify, cite, and protect data'
section('5.7', 'Keep AI honest — verify, cite, and protect data',
        'The safeguards that make every play safe: verify each output against a named source, cite '
        'or discard, never paste confidential or personal data, and keep the decision human — the '
        'difference between AI that helps and AI that quietly harms.',
        '~5 minutes',
        "VO, slide 1: Every play in this module produces a draft fast. This last part is about the "
        "discipline that keeps those drafts from becoming liabilities. Four safeguards. Skip them, "
        "and AI becomes a fast way to put wrong facts, fabricated sources, or leaked data into a "
        "government decision.\n\n"
        "Production cue: the closing video of the module. Its AI usage tip is a meta-prompt — "
        "strip a prompt of sensitive data — and it ships in the description.")

blk('Every fact the AI states is a hypothesis until you check it',
            ['Check it against a real source — a document, a system, a named person. The plausible '
             'section number, the confident figure, the specific claim: each is exactly as '
             'convincing whether it is right or invented.',
             'A wrong reference in a deliverable, or a made-up statistic in a cabinet briefing, '
             'damages your credibility more than a gap in the work would.'],
            'Verify before you forward. Always.',
            T,
            "VO: First, verify. Every fact an AI states is a hypothesis until you check it against "
            "a real source — a document, a system, a named person. The plausible section number, "
            "the confident figure, the specific claim: each is exactly as convincing whether it is "
            "right or invented. This is not a small risk. A wrong reference in a deliverable, a "
            "made-up statistic in a cabinet briefing — these damage your credibility more than a "
            "gap in the work would. Verify before you forward. Always.")

blk('AI fabricates citations as fluently as it writes prose',
            ['Any claim about the outside world — what another country did, what a standard '
             'requires, what a benchmark shows — needs a real, checkable source.',
             'So open the source. If it does not say what the AI claims, discard the claim, not '
             'just the citation.'],
            'An unsourced claim you cannot verify is a liability you choose to carry into the room.',
            T,
            "VO: Second, cite or discard — the rule from the comparator play, applied everywhere. "
            "Any claim about the outside world — what another country did, what a standard "
            "requires, what a benchmark shows — needs a real, checkable source. AI fabricates "
            "citations as fluently as it writes prose. So open the source. If it does not say what "
            "the AI claims, discard the claim, not just the citation. An unsourced claim you "
            "cannot verify is a liability you are choosing to carry into a meeting.")

rows_block(prs, 'Treat the prompt box as a public place, because it is',
           [('Citizen personal data', 'Names, records, anything identifying a real person.'),
            ('Security configurations', 'How your systems are protected.'),
            ('Unpublished cabinet papers', 'Anything not yet public.'),
            ('Anything your data-protection act covers',
             'The act applies to what you type into a chatbot as it does to any other system.')],
           'The plays never need it — run every one with placeholders: "a learner", "country X".',
           T,
           "VO: Third, protect the data. Do not paste citizen personal data, security "
           "configurations, unpublished cabinet papers, or anything your data-protection act "
           "covers into a public AI tool. The plays never need it: you can run every one with "
           "placeholders — a learner, a powerful programme, country X — instead of real names and "
           "records. Your data-protection act applies to what you type into a chatbot exactly as "
           "it applies to any other system. Treat the prompt box as a public place, because it "
           "is.",
           numbered=False)

# The module's emotional peak — the only full-colour punch block in the deck.
blk('When something the AI drafted turns out wrong, it is your name on the decision',
            ['Across every play the pattern holds: the AI prepares, the human decides. The Board '
             'rules on the gate paper. The architect defends the ranking. Counsel approves the '
             'terms of reference. The minister owns the roadmap.',
             'Accountability cannot be handed to a tool that has no stake in the outcome and '
             'cannot be questioned afterward. The answer is never "the AI said so".'],
            'Use AI to decide faster and better. Never to avoid deciding.',
            T,
            "VO: Fourth, keep the decision human. Across every play, the pattern holds: the AI "
            "prepares, the human decides. The Board rules on the gate paper. The architect defends "
            "the ranking. The legal counsel approves the terms of reference. The minister owns the "
            "roadmap. Accountability cannot be handed to a tool that has no stake in the outcome "
            "and cannot be questioned afterward. When something the AI drafted turns out wrong, "
            "the answer is never the AI said so — it is your name on the decision. Use AI to "
            "decide faster and better, never to avoid deciding.\n\n"
            "Production cue: this is the pivotal slide of the whole module and its one full-colour "
            "block. Hold it a beat longer.",
            punch_fill=ITU_BLUE, punch_ink=WHITE)

big_slide(prs,
          'Verify against a source, cite or discard, never paste confidential data, and keep the '
          'decision human — four safeguards that separate AI that helps from AI that quietly '
          'harms.',
          T,
          "VO: So these are the safeguards that make the plays safe. Verify every fact. Cite or "
          "discard every claim. Protect the data. Keep the decision human. None of them slows you "
          "down much, and together they are the difference between AI that makes you faster and AI "
          "that makes you confidently, accountably wrong. Use the plays freely — inside these four "
          "rules.")

sources_slide(prs, T, [
    'ITU Knowledge Products contract Terms of Reference — §4.3 (AI integration)',
    'PAERA v1.0 — §3.4.2 (Digital Data)',
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

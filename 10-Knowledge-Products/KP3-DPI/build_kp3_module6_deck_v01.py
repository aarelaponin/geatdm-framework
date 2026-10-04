#!/usr/bin/env python3
# Build the KP3 Module 6 video deck on the ITU template — v0.1.
# Content follows KP3_Module6_Script_Bundle_v0.1 (build_kp3_module6_v01.js): 10 videos, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 6.10.
# Every VO paragraph in the notes is a verbatim scriptBeats[].text from the .js (vo_diff.py proves it);
# on-screen text is the slide cue's own quoted wording; the recap slide carries the single message word
# for word and the un-narrated practice box (task = the AI tip's title, artefact = the `practice` field).
# Demonstration segments that have not been recorded are text stand-ins under the footer
# "Walkthrough: what a good run shows." (the Module 2 convention, review finding 1).
# Content only — the KP3 layout helpers live in kp3_deck_common.py beside this file, and every generic
# helper behind them in $KP_KIT/skills/kp-deck-builder/scripts/deck_lib.py. Production cues in the notes
# are the slide specification's own notes column. Generated .pptx is NEVER hand-edited — fix here,
# re-render, re-run the split (split_module_deck.py --infer-ranges).
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from kp3_deck_common import Deck, STORYBOARD_FOOT, STORYBOARD_NOTE

d = Deck(6, 'KP3_M6_Deck_v0.1.pptx')

# ---------------------------------------------------------------- COVER (edit slide 1)
d.cover(
    title_text='From a proven foundation to a national roadmap',
    kicker='KP3 · Education DPI Roadmap · Module 6',
    blurb=('Ten standalone videos for the person who prepares the decision: the gap register, cost '
     'against reuse, horizons, waves and tracks, the investment case, sourcing without lock-in, '
     'governance, validation and adoption, keeping the foundation healthy, the AI plays, and '
     'carrying the method to another sector.'),
    length='~50 mins across 10 videos (6.1 – 6.10)',
    audience=("The head of a ministry's digital unit or the programme lead who ranks what to fund, sets it "
     'in order over the years, and prepares the case for the minister, the finance ministry and '
     'the development partners'),
    panel_heading='WHAT THIS MODULE PRODUCES',
    panel_items=['A ranked gap register',
                 'Cost against reuse',
                 'Horizons, waves and tracks',
                 'An investment case in four sheets',
                 'Sourcing and governance',
                 'Adoption, upkeep, carry-over'],
    panel_footer='Steps 6 to 9 of the method',
    note_text=('Cover for the combined Module 6 deck. Each section that follows is one standalone ~5 minute '
     'video, Strategist-facing. Module 1 assessed the country and Modules 2 to 5 proved one '
     'service on four blocks; this module turns that proof into a national roadmap — steps six to '
     'nine of the method.'))

# ---------------------------------------------------------------- AGENDA (edit slide 2)
d.agenda(
    header='Module 6 — ten videos',
    items=[
        ('6.1  From findings to priorities: the gap register', '~5 min'),
        ('6.2  What to fund first: cost against reuse', '~5 min'),
        ('6.3  The roadmap over time: horizons, waves and tracks', '~5 min'),
        ('6.4  The investment case your finance ministry can read', '~5 min'),
        ('6.5  Sourcing each block without lock-in', '~5 min'),
        ('6.6  Governance that keeps shared blocks shared', '~5 min'),
        ('6.7  Validate, revise, adopt', '~5 min'),
        ('6.8  Keep the foundation healthy and safe', '~5 min'),
        ('6.9  The AI plays, step by step', '~5 min'),
        ('6.10  Carry the method to another sector', '~5 min'),
    ],
    message_paras=[('Rank the gaps, fund first what many services reuse, set the work in waves, and put the case '
                    'in terms a finance ministry can read.'),
                   ('Source without lock-in, govern so shared blocks stay shared, adopt through validation, and '
                    'carry the method — not the results — to the next sector.')],
    note_text=('Navigation slide for the combined deck; the videos ship standalone on YouTube. 6.1 to 6.4 '
     'are priorities, order and money. 6.5 to 6.8 are sourcing, governance, adoption and upkeep. '
     '6.9 and 6.10 are the AI plays and the carry-over to a new sector.'))


# ================================================================ 6.1
MSG = ('Gather every gap into one register and rank each by impact, urgency, feasibility and what '
       'depends on it, so the list you take to your minister is short and ordered.')
d.video('6.1', 'From findings to priorities: the gap register', MSG,
        ('An assessment ends with many findings, spread over five domain reports.',
         ['A minister cannot act on all of them.',
          'A minister can act on a short list, in order, with a reason for each place on it.']),
        ('An assessment ends with many findings, spread over five domain reports. A minister cannot '
         'act on all of them. A minister can act on a short list, in order, with a reason for each '
         'place on it.'))

d.rows('From finding to gap',
       [('A finding says what exists today.', ''),
        ('A gap says the distance to what the country needs.', ''),
        ('Each gap names the findings it comes from.', '')],
       ('Start by turning each finding into a gap. A finding says what exists today. A gap says the '
       'distance between what exists and what the country needs. Write every gap into one register, '
       'whatever its domain, and let each gap name the findings it comes from, so that anyone can '
       "trace a line of the roadmap back to its evidence. UNDP's playbook on the DPI approach works "
       "the same way: from national priorities, to the gaps, to goals and targets. Progressa's "
       'register, built as an example, turns 15 findings into 14 gaps.'),
       cue='The step in plain words. Text-only.')

d.rows('Four criteria, three bands',
       [('Impact', 'On service delivery, efficiency and strategic goals: 1 to 3.'),
        ('Urgency', 'Is something planned waiting for it: 1 to 3.'),
        ('Feasibility', 'Can existing bodies, law and budget close it: 1 to 3.'),
        ('Dependencies', 'What others depend on comes first.'),
        ('Score 8 or 9: first band. 6 or 7: second. 5 or less: third.', '')],
       ('Rank each gap on four criteria. Impact asks how much the gap holds back service delivery, '
       "efficiency and the government's goals, the three things by which PAERA's assessment "
       'procedure ranks its recommendations. Urgency asks whether something already planned is '
       'waiting for it. Feasibility asks whether existing bodies, law and budget can close it, or '
       'whether it needs new law. Rate each of these three from 1 to 3 and add them. A score of 8 or '
       '9 is the first band, 6 or 7 the second, 5 or less the third. The fourth criterion, '
       'dependencies, sets the order inside a band: what others depend on comes first. The criteria '
       "are this course's own practice."),
       cue="The rule of the worked example E6, with PAERA's three grounds of impact. Text-only.")

d.table("Progressa's first band (illustrative)", ['Gap', 'Score', 'Why first'], [7.0, 1.4, 3.5],
        [('G-02 No joint body to decide education\u2019s shared infrastructure', '8', 'Quick win'),
         ('G-06 No common school identifier', '8', 'Quick win'),
         ('G-08 MoEYS is not on the national exchange', '8', 'Quick win'),
         ('G-05 No authoritative learner record', '8', 'Depends on G-01, G-06 and G-11')],
        ('In Progressa, four gaps reach the first band, each with a score of 8. Three are quick wins '
       "that existing bodies can close within six months: a joint body to decide education's shared "
       'infrastructure, one school identifier, and the ministry of education joining the national '
       'exchange. PAERA recommends this pairing: target the foundations, and make some quick wins '
       'that show the benefits early. The fourth gap matters most: there is no authoritative learner '
       'record. It depends on two gaps of the second band, the legal basis and the link to national '
       'identity. Both are brought forward without changing their band, and the law, the slowest, '
       'starts first.'),
        cue='The worked example, built for Progressa; every value illustrative. Text-only.')

d.rows('Patterns across domains',
       [('One missing record holds back three domains (G-05, with G-09, G-11 and G-12).', ''),
        ('The ministry of education is outside infrastructure that already runs (G-08, G-12).', ''),
        ('The law and the budget come before the build (G-01, G-03, G-04).', '')],
       ('Then read the register across domains. In Progressa, three patterns appear. The missing '
       'learner record holds back three domains: digital data, identity and the exchange. The '
       'ministry of education stays outside infrastructure that already runs, the identity '
       "authority's sign-in and the national exchange, and that is the cheapest kind of gap to "
       'close. And the law and the budget come before the build. These patterns are what you explain '
       'to the minister, because they show why the order makes sense.'),
       cue='What the Strategist explains to the minister. Text-only.')

d.recap(('One register, ranked on four criteria into three bands. Your minister receives a short list '
         'in order, with a reason for each place.'),
        ('Gather the gaps of five domain reports into one ranked register',
         ('a gap register with one row for each gap, its findings, its proposed ratings with reasons, '
          'its band and its dependencies')))
d.sources(['PAERA v1.0, section 5.4, step 5, and section 3.3.3',
           'UNDP, The DPI Approach: A Playbook, 2023, page 23'])


# ================================================================ 6.2
MSG = ('A shared block is paid for once and used by many, so judge each investment by its cost '
       'against the number of services that will use it, a sum only the whole government can do.')
d.video('6.2', 'What to fund first: cost against reuse', MSG,
        (('Every ministry asks for money for its own system, and each request looks reasonable on its '
          'own.'),
         ['The question a finance ministry rarely hears is how many services each system will serve.',
          'That answer changes what should be funded first.']),
        ('Every ministry asks for money for its own system, and each request looks reasonable on its '
         'own. The question a finance ministry rarely hears is how many services each system will '
         'serve. That answer changes what should be funded first.'))

d.rows('Who pays first?',
       [('Why invest in digital identity before any service uses it?', ''),
        ('How can a ministry build services for people without it?', ''),
        ('Target the foundations, and make some quick wins.', ''),
        ('Plan for the whole government, and fund what many agencies reuse.', '')],
       ('PAERA names the problem plainly. Why would anyone invest in digital identity when no digital '
       'service uses it yet? And how can a ministry build services for people without it? Its answer '
       'is to target the foundational elements while making some quick wins that show the benefits. '
       'PAERA also gives the reason to plan for the whole government: it makes a strong case for '
       'funding platforms, registries and workflows that many agencies reuse. Inside one project, '
       'building your own looks quicker. Across the government, it means paying again for something '
       'that already exists.'),
       cue='Carries the planning-enables-re-use argument. Text-only.')

d.rows('Cost against reuse',
       [('Each candidate block', 'A low and a high cost.'),
        ('Beside it', 'The services that will use it, and the blocks that depend on it.'),
        ('Fund first what others depend on and many services use.', ''),
        ('A dedicated budget for platforms used across government.', '')],
       ('The method is simple to state. List each candidate block with its cost, from a low to a high '
       'estimate. Beside it, list the services in your plans that will use it, and the blocks that '
       'depend on it. A block that others depend on and many services use is funded first, even when '
       'it costs more. PAERA recommends dedicated budgets for platforms used across government, and '
       "the World Bank's guide for identity systems asks for a complete cost-benefit analysis of the "
       'options. No public source gives a method that weighs cost against reuse, so this step is '
       "this course's own, drawn from implementation experience in several countries."),
       cue="The method is this course's own; the slide says so in the voice-over. Text-only.")

d.table("Progressa's table (illustrative)", ['Component', 'Cost (USD)', 'Reuse', 'Wave'],
        [3.6, 2.2, 4.9, 1.2],
        [('MoEYS on the exchange (C-04)', '80 to 120 thousand', 'Four components depend on it', '1'),
         ('The learner register PLR (C-06)', '600 to 900 thousand',
          'Registration, statistics, scholarships, examinations', '2'),
         ("The connection to PNIA's sign-in (C-07)", '150 to 220 thousand',
          'Registration and each later education service', '2'),
         ('The Payments block on the exchange (C-11)', '120 to 180 thousand',
          'The scholarship pilot', '4')],
        ("Here is Progressa's table, built as an example; every figure in it is illustrative. The "
       "ministry's place on the national exchange costs least, 80 to 120 thousand dollars, and four "
       'other components depend on it, so it is funded in the first wave. The learner register costs '
       'most, 600 to 900 thousand dollars, but four services in the roadmap use it: registration, '
       'statistics, scholarships and examinations. It comes in the second wave, with the identity '
       "connection. The Payments block's place on the exchange serves one service so far, the "
       "scholarship pilot, and waits for the fourth wave. The order that results is the roadmap's "
       'own.'),
        cue=('The worked example, built for Progressa from the illustrative lines of E8 and the components '
       'of E7. Text-only.'))

d.rows('Reuse, priced (illustrative)',
       [("Connecting to the identity authority's sign-in: USD 150 to 220 thousand.", ''),
        (('Building identity for 11.5 million people of school age, at USD 4 to 11 a person registered: '
          'USD 46 to 126.5 million.'), ''),
        ('An order of magnitude only. The rate is from a study the World Bank cites (2018, page 1).', '')],
       ("The reuse that is easiest to see is identity. Progressa's ministry of education does not "
       "build an identity for learners. It connects to the identity authority's sign-in, for an "
       'illustrative 150 to 220 thousand dollars. A study the World Bank cites puts building a '
       'foundational identity system in a low-income country at about 4 to 11 dollars a person '
       "registered, and warns that few data points stand behind that figure. For Progressa's 11.5 "
       'million people of school age, that is 46 to 126.5 million dollars. The comparison gives an '
       'order of magnitude only, but it shows what reuse is worth.'),
       cue='Every figure marked illustrative or given with its source. Text-only.')

d.recap(('A shared block is paid for once and used by many. Count the services that will use it before '
         'you decide what to fund first.'),
        ('Build the table of cost against reuse, and test its assumptions',
         ('a table of cost against reuse with one row for each candidate block and a proposed order of '
          'funding')))
d.sources(["PAERA v1.0, sections 3.3.3 and 4.5 ('Budget')",
           "World Bank, ID4D Practitioner's Guide, version 1.0, 2019, page 48",
           'World Bank, Understanding Cost Drivers of Identification Systems, 2018, page 1'])


# ================================================================ 6.3
MSG = ('A roadmap sets the years ahead in horizons and the first horizon in waves, each wave with a '
       'governance track, a track for each domain and one visible service that shows the result.')
d.video('6.3', 'The roadmap over time: horizons, waves and tracks', MSG,
        ('A ranked list is not yet a plan.',
         ['A plan says what happens in which year, who does it, and what people will see at each step.',
          'That is what the roadmap over time adds to the priorities.']),
        ('A ranked list is not yet a plan. A plan says what happens in which year, who does it, and '
         'what people will see at each step. That is what the roadmap over time adds to the '
         'priorities.'))

d.rows('Horizons, then waves',
       [('H1 Foundation', '2027 to 2028.'),
        ('H2 Scale', '2029 to 2030.'),
        ('H3 Extend', '2031 to 2033.'),
        ('The first horizon in detail', 'Four waves of six months.')],
       ("Set the years ahead in horizons, and write only the first horizon in detail. Progressa's "
       'roadmap, built as an example, has three horizons: foundation in 2027 and 2028, scale in 2029 '
       'and 2030, and extension from 2031 to 2033. The first horizon runs 24 months, in four waves '
       "of six months. PAERA orders a country's start in four phases, from inception to mass-scale "
       "transformation. Wave is the roadmap's own word, used inside the first horizon; phase is "
       "PAERA's word. UNDP's playbook ends its scoping assessment with the same step: develop the "
       'roadmap.'),
       cue=('Figure F13 (the roadmap over time: horizons and waves) belongs to the written guide and is '
       'not on the slide. Text-only.'))

d.rows('Inside each wave',
       [('A governance track opens every wave.', ''),
        ('A track for each domain with work in the wave.', ''),
        ('A beacon', 'One service people can see.'),
        ('A wave summary', 'What must be true before the following wave.')],
       ('Each wave has the same parts. It opens with a governance track, because the domain tracks '
       'cannot start lawfully or be paid for without it. Then comes a track for each domain that has '
       "work in the wave. A beacon project is the roadmap's name for a service people can see, which "
       'shows the foundation working. Every wave closes with a summary of what must be true before '
       'the following one starts. And each component moves through the five stages of the life cycle '
       'that the Universal DPI Safeguards Framework names, from conception and scoping to operations '
       'and maintenance.'),
       cue="The form of the roadmap is this course's own. Text-only.")

d.rows("Progressa's first horizon (illustrative)",
       [('Wave 1', 'Decide, and join what already runs.'),
        ('Wave 2', 'Build the register.'),
        ('Wave 3', 'Beacon B1: register once.'),
        ('Wave 4', 'Beacon B2: scholarships paid to the right learner.')],
       ("Here are Progressa's four waves. The first decides and joins what already runs: a joint "
       'board of the ministry of education and the digital government authority, the drafting of the '
       "law, one school identifier, and the ministry's membership of the exchange. The second builds "
       "the register and connects it to the identity authority's sign-in; before the third starts, "
       'the register holds the records of one district, and at least 95 per cent of them pass the '
       'quality gates. The third opens the first beacon: a parent registers a child once. The fourth '
       'pays scholarships to verified learners through the Payments block.'),
       cue='The worked example E7, built for Progressa; every date illustrative. Text-only.')

d.rows('The critical path',
       [('C-02 → C-06 → C-07 → C-08 → C-14.', ''),
        ('The law is drafted in wave 1 and must be in force before the national rollout.', ''),
        ('Nothing is scheduled before what it depends on.', '')],
       ('Last, the dependencies. For each component the roadmap lists what it waits for, and the '
       'longest chain is the critical path. In Progressa it runs from the law, through the register, '
       'the identity connection and the registration service, to the rollout in all 24 districts. '
       'The amendment to the education act closes the slowest gap of all, so it is drafted in the '
       'first wave, and the rollout waits until it is in force. PAERA describes enterprise '
       'architecture as the bridge between the business side and IT. The roadmap puts its target '
       'state in order, on one timeline that both sides read.'),
       cue=('Figure F14 (the matrix of dependencies) belongs to the written guide. Carries the '
       'shared-picture argument. Text-only.'))

d.recap(('Horizons for the years ahead, waves for the first horizon. Each wave opens with governance, '
         'works through each domain and ends with a service people can see.'),
        ('Draft the waves of the first horizon, and check their order',
         ('a draft of the waves of the first horizon, each with its governance track, domain tracks, '
          'beacon and summary')))
d.sources(['PAERA v1.0, sections 5.7.1 to 5.7.5 and section 2.3',
           'UNDP, The DPI Approach: A Playbook, 2023, page 23',
           'Universal DPI Safeguards Framework, United Nations, 2024, page 6'])


# ================================================================ 6.4
MSG = ("Set out the roadmap's cost the way a finance ministry reads it: by wave and component with a "
       'low and a high estimate, by domain, by source of funds, and with the returns expected.')
d.video('6.4', 'The investment case your finance ministry can read', MSG,
        ('A finance ministry does not fund a vision.',
         ['It funds lines it can read, check and place in a budget year.',
          'The investment case turns the roadmap into those lines.']),
        ('A finance ministry does not fund a vision. It funds lines it can read, check and place in a '
         'budget year. The investment case turns the roadmap into those lines.'))

d.rows('Sheet 1: by wave and component',
       [('Every component costed, with a low and a high estimate.', ''),
        (('Procurement can change the cost of an identity system by 25% to over 100% (World Bank, '
          '2018).'), ''),
        ('Progressa (illustrative)', 'USD 7.6 to 11.7 million over seven years; USD 2.5 to 3.8 million in the first horizon.')],
       ('The first sheet costs every component of the roadmap, wave by wave. Each line names the '
       'component it pays for, so the case and the roadmap can be checked against each other. Each '
       'line also gives a low and a high estimate instead of one figure, because the cost of a '
       'shared system depends heavily on how it is bought. The World Bank found that procurement '
       'strategy can change the overall cost of an identity system by 25 per cent to over 100 per '
       "cent. Progressa's case, built as an example, comes to an illustrative 7.6 to 11.7 million "
       'dollars over seven years, of which 2.5 to 3.8 million fall in the first horizon.'),
       cue=('Figure F15 (the investment case: its four sheets as tables) belongs to the written guide. '
       'Every Progressa figure marked illustrative. Text-only.'))

d.rows('Sheets 2 and 3: by domain, and by who pays',
       [('By domain', 'Digital data the largest share, identity the smallest (illustrative).'),
        ('Three groups of funders', "The government's budget, development partners, the private sector."),
        ('Diversified, phased and sustainable financing (UN, 2024).', ''),
        ('Four instruments', 'Public budgets, grants, private capital, debt (UNDP, 2023).')],
       ('The second sheet shows the same cost by domain and wave, so a minister sees where the money '
       'goes. In Progressa, digital data takes the largest share, because the register is rolled out '
       'to all 24 districts, and identity the smallest, because the identity authority is reused. '
       "The third sheet names who pays, in three groups: the government's budget, development "
       'partners and the private sector. The Universal DPI Safeguards Framework asks for '
       'diversified, phased and sustainable financing, with governments leading while the system is '
       "built. UNDP's playbook compares four instruments: public budgets, grants, private capital "
       'and debt.'),
       cue='Each public statement with its source. Text-only.')

d.rows('The budget cycle',
       [('A solid business case before any budget application.', ''),
        ('An application can take 2 to 3 years before funds are received.', ''),
        ('Projects funded by donors need a state budget commitment.', ''),
        ('Progressa asks in 2027 for a recurrent line from the budget year 2029 (illustrative).', '')],
       ('Then the calendar. PAERA warns that a budget application, backed by a solid business case, '
       'can take 2 to 3 years before funds are received, and that projects funded by donors need a '
       "state budget commitment to last. So Progressa's ministry asks in 2027 for a recurrent budget "
       'line from the budget year 2029, before the partner money ends. Its third sheet shows, as '
       "illustrative figures, 3.1 to 4.7 million dollars from the government's budget, 4.1 to 6.4 "
       'million from development partners, and 410 to 620 thousand from the private sector.'),
       cue='PAERA 4.5 in plain words. Text-only.')

d.rows('Sheet 4: the returns',
       [(('Enrolment paperwork removed; scholarships paid to the right learner; spreadsheet exchanges '
          'replaced; reuse by later services.'), ''),
        ('Valued returns over ten years', 'USD 11 to 19.5 million (illustrative).'),
        ('About 0.9 to 2.6 times the cost.', ''),
        ('The case rests on reuse.', '')],
       ("The fourth sheet says what the country gets back. Progressa's case values four returns over "
       'ten years: enrolment paperwork removed, scholarships paid to the right learner, spreadsheet '
       'exchanges replaced, and reuse by later services. Together they come to an illustrative 11 to '
       '19.5 million dollars, between about 0.9 and 2.6 times the cost. The case does not rest on '
       'the top of that range. It rests on reuse: later services pay for neither a register nor an '
       'identity check. Keep every figure illustrative until a costing confirms it; the World Bank '
       'says that even its own cost model does not predict actual costs.'),
       cue='Every figure marked illustrative. Text-only.')

d.recap(('Four sheets: by wave and component, by domain, by who pays, and the returns. Each figure '
         'carries its source or the word illustrative.'),
        ('Fill the four sheets of the investment case, and check that they agree',
         'the four sheets of the investment case with the check of their totals'))
d.sources(['Universal DPI Safeguards Framework, United Nations, 2024, principle O8, page 25',
           'UNDP, The DPI Approach: A Playbook, 2023, page 44',
           "PAERA v1.0, section 4.5 ('Budget')",
           'World Bank, Understanding Cost Drivers of Identification Systems, 2018, pages 7 and 9'])


# ================================================================ 6.5
MSG = ('For each block decide what your own teams build, what you outsource and what you do with a '
       'partner, and write open standards and the terms for leaving into every contract.')
d.video('6.5', 'Sourcing each block without lock-in', MSG,
        ('Lock-in is rarely one bad decision.',
         [('It is written into contracts, clause by clause, that nobody read for the day the ministry '
           'wants to leave.'),
          'Sourcing decides who builds each block; the contract decides whether you can leave later.']),
        ('Lock-in is rarely one bad decision. It is written into contracts, clause by clause, that '
         'nobody read for the day the ministry wants to leave. Sourcing decides who builds each block; '
         'the contract decides whether you can leave later.'))

d.rows('Three options for each block',
       [('In-house', 'What your own teams can build and keep running.'),
        ('Outsourcing', 'What they cannot, with a risk management framework.'),
        ('Partnership', 'With firms, agencies, universities or GovStack.'),
        ('Usually a combination of the three.', '')],
       ('PAERA gives three options for each block. Build in-house what your own teams can '
       'realistically create and keep running. Outsource what they cannot, such as software '
       'development, cloud services or cybersecurity, and manage the risks with a risk management '
       'framework. Work in partnership with technology firms, government agencies, universities or '
       'groups such as GovStack. A combination of the three usually gives the most flexibility. '
       "PAERA also says what the government's own staff should be: intelligent purchasers, not IT "
       'specialists, apart from the few who keep the overall architecture.'),
       cue="PAERA 5.6's three options, by their own names. Text-only.")

d.rows('Learn in the sandbox; ask for the evidence',
       [('The GovStack Sandbox', 'A demonstration and learning tool, not a production-ready system.'),
        ("GovStack's testing", ('A self-assessment against the requirements, tests of the interfaces, and a compliance level '
          'of 1 or 2.')),
        ('Test the product in your own installation as well.', '')],
       ('Two things are not options. The GovStack Sandbox is a place to learn: its own pages call it '
       'a demonstration and learning tool, and say that it is not a production-ready system. And a '
       "product's listing is evidence, not a promise. GovStack's testing pages describe a "
       'self-assessment of a product against the functional requirements, tests of its interfaces, '
       'and a compliance level of 1 or 2. Ask for those results, and still test the product in your '
       'own installation, because no listing tests your installation or your contract.'),
       cue="Each statement as GovStack's own pages make it. Text-only.")

d.rows('Where lock-in comes from',
       [(('Procurement can change the cost of an identity system by 25% to over 100% (World Bank, '
          '2018).'), ''),
        ('Open standards, and an architecture no single vendor controls, guard against it.', ''),
        ('Avoid vendor lock-in; share open specifications (UN, 2024).', ''),
        ('Four checks in every contract', 'Open standards named, export, help with leaving, licence terms.')],
       ('The World Bank found that, for identity systems, procurement can change the overall cost by '
       '25 per cent to over 100 per cent. It names open technology standards, and an architecture '
       'designed so that no single vendor controls it, as the guard against relying on one supplier. '
       'The Universal DPI Safeguards Framework asks that digital public infrastructure avoid vendor '
       'lock-in and share open specifications, and it counts lock-in among the causes of '
       'unsustainability, with long-term costs. So write four checks into every tender and contract: '
       'the open standards named, export of all data and configuration, help with leaving, and '
       'licence terms that outlive the contract.'),
       cue='Each public statement with its source. Text-only.')

d.table("Progressa's sourcing table (illustrative)", ['Block', 'Sourcing', 'Guard against lock-in'],
        [3.0, 4.6, 4.3],
        [('Registration service', 'Product bought, configured in-house',
          'The service description exportable at any time'),
         ('Learner register PLR', 'Product and first load outsourced, data steward in-house',
          'Every record and the schema exportable'),
         ('Identity', "PNIA's sign-in, used under an agreement", 'Nothing bought'),
         ('Payments', "The government's Payments block, in partnership with its owner",
          'Payment records exportable')],
        ("Here is Progressa's table, built as an example. The registration service runs on a product "
       "the ministry buys, and the ministry's analysts configure it in-house; the contract requires "
       "the service description to be exportable at any time. The learner register's product and its "
       "first load are outsourced, while the data steward is the ministry's own; every record and "
       'the schema must be exportable. Identity is not bought at all: the services use the identity '
       "authority's sign-in under an agreement. Payments go through the government's Payments block, "
       'in partnership with the ministry of finance, which runs it. Each row names the option chosen '
       'and the clause that keeps the ministry free to leave.'),
        cue='The worked example, built for Progressa. Text-only.')

d.recap(('Decide for each block who builds it. Then write the standards, the export, the exit and the '
         'licence into the contract.'),
        ('Check a draft tender or contract for lock-in',
         'a table of the four lock-in checks with the clause that meets each, or the word missing'))
d.sources(['PAERA v1.0, sections 5.6 and 3.1.1',
           'World Bank, Understanding Cost Drivers of Identification Systems, 2018, page 7',
           ('Universal DPI Safeguards Framework, United Nations, 2024, principle F4, page 23, principle '
            'O9, page 25, and the risk of unsustainability, page 15'),
           'GovStack Sandbox documentation, edition 1.1.1',
           "GovStack testing application and the GovStack page 'How is Compliance Measured?'"])


# ================================================================ 6.6
MSG = ('Shared blocks stay shared when it is written down who decides money and policy, who '
       'coordinates the programme, and who runs each block and sets its technical rules.')
d.video('6.6', 'Governance that keeps shared blocks shared', MSG,
        ('A shared block stays shared only while someone has the power to keep it shared.',
         ['Without that, each new project builds its own copy, and each copy is paid for again.',
          'Governance written down on one page prevents that.']),
        ('A shared block stays shared only while someone has the power to keep it shared. Without '
         'that, each new project builds its own copy, and each copy is paid for again. Governance '
         'written down on one page prevents that.'))

d.rows('Three layers',
       [('Political authority', 'Decides money and policy.'),
        ('Programme authority', 'Coordinates the programme across ministries.'),
        ('Technical authority', 'Runs each block and sets its technical rules.'),
        ("The three layers are the team's synthesis of public sources.", '')],
       ('Write governance down in three layers. The political layer decides money and policy. The '
       'programme layer coordinates the work across ministries. The technical layer runs each block '
       'and sets its technical rules. No public source names these three layers; they are this '
       "course's own way of putting together what the sources say. PAERA asks for political "
       'leadership shown in words and in budgets, and a dedicated agency with a coordinating role. '
       'It describes a committee of key ministers that decides funding and advises the cabinet, and '
       'a digital officer in each ministry.'),
       cue=('Figure F16 (the governance structure on one page) belongs to the written guide and is not on '
       'the slide. Text-only.'))

d.rows('Roles divided: two published examples',
       [("Estonia's data exchange", ('A ministry advocates policy; the Information System Authority registers members and '
          'supervises security; the Nordic Institute for Interoperability Solutions runs it day to day; '
          'the Data Protection Inspectorate supervises data protection (UNDP, 2023).')),
        ("Brazil's Pix", 'The central bank both operates the system and sets its rules (BIS, 2022).')],
       ("Two published examples show roles divided this way. UNDP's playbook describes Estonia's data "
       'exchange. A ministry advocates policy changes. The Information System Authority registers '
       'new members and supervises security. The Nordic Institute for Interoperability Solutions '
       'manages its day-to-day operations. The Data Protection Inspectorate supervises compliance '
       "with the data protection law. And the Bank for International Settlements describes Brazil's "
       'instant payment system, Pix, where the central bank both operates the system and sets its '
       'rules. In each case, one named body is answerable for running the shared system or setting '
       'its rules. Your page should name such a body for each shared block.'),
       cue='Each example with its published source. Text-only; no logos.')

d.table("Progressa's governance on one page (illustrative)", ['Layer', 'Who'], [2.9, 9.0],
        [('Political', 'A committee of ministers decides the funding; the cabinet adopts the laws and '
                       'the budget'),
         ('Programme', 'PDGA coordinates; the joint board of MoEYS and PDGA decides education\u2019s '
                       'shared infrastructure'),
         ('Technical', "PDGA for Linkup; PNIA for identity; PLR's product owner at MoEYS for the "
                       'learner register; the ministry of finance for the Payments block'),
         ("MoEYS's digital officer", 'Each new project uses the shared blocks')],
        ("Here is Progressa's page, built as an example. At the political layer, a committee of "
       'ministers decides the funding, and the cabinet adopts the laws and the budget. At the '
       'programme layer, the digital government authority coordinates, and a joint board of the '
       "ministry of education and that authority, meeting monthly, decides education's shared "
       'infrastructure. At the technical layer each block has one owner: the authority for the '
       "exchange, the identity authority for identity, the register's product owner at the ministry "
       'of education for the learner register, and the ministry of finance for the Payments block. '
       "The ministry's digital officer makes sure each new project uses them."),
        cue='The worked example, built for Progressa. Carries the shared-picture argument. Text-only.')

d.rows('Who decides for the learner',
       [(('A guardian or a parent can act for a child through delegated access (GovStack Digital '
          'Registries, DRS-6).'), ''),
        (('Consent is a voluntary declaration that can be withdrawn at any time (GovStack Consent, '
          'section 2).'), ''),
        ("The rules for children's data come from a regulation.", ''),
        ('Shared oversight bodies and regular published reports (UN, 2024).', '')],
       ('Governance also says who may act for a learner. The Digital Registries specification '
       'includes delegated access, so that a guardian, a parent or a representative can act for a '
       'learner. The Consent specification defines consent as a voluntary declaration that the '
       'person may withdraw at any time. Neither replaces the law: in Progressa, the rules for '
       "children's data come from a regulation drafted in the first wave. The Universal DPI "
       'Safeguards Framework asks for transparent and participatory governance, and recommends '
       'shared oversight bodies and regular published reports. One page that the minister and the '
       'architect both read gives them a shared language for every decision.'),
       cue='Each statement with its specification or framework. Text-only.')

d.recap(('Write down who decides money and policy, who coordinates, and who runs each block. Then the '
         'shared blocks stay shared.'),
        ('Draft the terms of reference of the governance board, and a table of who decides what',
         ('draft terms of reference for the governance board and a table of who decides what in three '
          'layers')))
d.sources(['PAERA v1.0, sections 3.1.1 and 3.1.2',
           'UNDP, The DPI Approach: A Playbook, 2023, pages 34 to 41',
           ('Universal DPI Safeguards Framework, United Nations, 2024, principle O7, page 25, and table '
            '3.1, page 36'),
           'BIS Bulletin No 52, 2022, page 5',
           'GovStack Digital Registries specification, Version 3.0-alpha, DRS-6',
           "GovStack Consent specification, version 1.3.0, section 2, 'What Consent Is'"])


# ================================================================ 6.7
MSG = ("A roadmap becomes the government's own only when the people it binds have commented, every "
       'comment has a written answer, and an authority has adopted it.')
d.video('6.7', 'Validate, revise, adopt', MSG,
        ('A roadmap written by a team, however good, binds no one.',
         [("It becomes the government's own when the bodies it binds have read it, seen their comments "
           'answered in writing, and an authority has adopted it.')]),
        ("A roadmap written by a team, however good, binds no one. It becomes the government's own "
         'when the bodies it binds have read it, seen their comments answered in writing, and an '
         'authority has adopted it.'))

d.rows('Six months from draft to adoption',
       [('Month 1', 'Consultation with each body.'),
        ('Month 2', 'Reconcile the initiatives under way; set the priorities.'),
        ('Month 3', 'Drafting.'),
        ('Month 4', 'Written comments from every body.'),
        ('Month 5', 'A high-level validation workshop.'),
        ('Month 6', 'Adoption.')],
       ("Plan the path to adoption from the start. In Progressa's example, the team consults each "
       'body in the first month. In the second it holds two workshops: one reconciles the '
       'initiatives already under way, and one sets the priorities on the gap register. The third '
       'month is a drafting sprint. In the fourth, each body comments in writing. In the fifth, a '
       'high-level workshop validates the revised text. In the sixth, the ministry of education and '
       'the digital government authority adopt it, and the cabinet does where the budget requires. '
       "These steps are this course's own practice."),
       cue="The development plan of the worked example E7; the steps are this course's own. Text-only.")

d.rows('Every comment answered',
       [('Response matrix', 'Comment, from whom, what it refers to, response, decision, change made.'),
        ('Decisions', 'Accepted, accepted in part, not accepted.'),
        ('Commenters named by role, never by name.', '')],
       ('Answer every comment in a response matrix. Each row holds the comment, the role of the '
       'person who made it, what it refers to, the response, the decision and the change made. Name '
       "commenters by role, never by name. In Progressa, the finance ministry's budget department "
       'asked for a basis for the high estimate of the learner register. The team stated the basis '
       'and kept the range: accepted in part. The examination authority asked to move examination '
       'registration into the first horizon. Not accepted, because it depends on the register '
       'covering every district, which happens in the second horizon. The answer is written down all '
       'the same.'),
       cue='The worked example E9. Text-only.')

d.rows('A comment that changed a score',
       [('CM-02, from PDGA', 'The Interoperability score is too high.'),
        ('The draft had scored I2 from a desk result, not from a verified position.', ''),
        ('I2 lowered from 2.5 to 1.5; the domain from 2.3 to 2.1; its stage unchanged (illustrative).', '')],
       ('Some comments change the evidence itself. The digital government authority said the '
       'Interoperability score was too high while the ministry of education was not a member of the '
       'exchange. It was right. The draft had scored that membership from a desk result, which '
       'breaks the rule that only verified positions are scored. The sub-component was lowered from '
       '2.5 to 1.5, and the domain from 2.3 to 2.1; its stage stayed Systematic. The change is '
       'recorded beside the maturity table, so any reader can see why the score moved.'),
       cue='Comment CM-02 of E9; every value illustrative. Text-only.')

d.rows('The revision, in four phases',
       [('Prepare', 'Abbreviations, the response matrix, the statistics to verify.'),
        ('Revise the assessment, section by section.', ''),
        ('Revise the roadmap and the investment case, part by part.', ''),
        ('Final checks', 'Consistency, a summary of changes, a cover note.')],
       ('An assistant can draft most of the revision, in four phases. First, prepare: a list of '
       'abbreviations, a draft of the response matrix, and the statistics that a comment questions. '
       'Second, revise the assessment section by section against the accepted comments. Third, '
       'revise the roadmap and the investment case part by part. Fourth, check that the documents '
       "still agree, and write a summary of changes and a cover note. PAERA's procedure ends the "
       'same way: an action plan with responsible parties, then monitoring and review, then '
       "continuous improvement. And UNDP's playbook rates stakeholder engagement high at the step "
       'where the roadmap is developed.'),
       cue="The four phases of E9, with PAERA's last three steps in the voice-over. Text-only.")

d.recap(('Every body comments, every comment gets a written answer, and an authority adopts the '
         "roadmap. Then it is the government's own."),
        ('Run the revision play in four phases',
         'a draft response matrix with a proposed decision for each comment'))
d.sources(['PAERA v1.0, section 5.4, steps 6 to 8',
           'UNDP, The DPI Approach: A Playbook, 2023, page 23'])


# ================================================================ 6.8
MSG = ('After launch, indicators read every month, quarter and year, quality checks and '
       'reconciliation on every load, and a regular review against the published safeguards keep the '
       'foundation trusted and safe.')
d.video('6.8', 'Keep the foundation healthy and safe', MSG,
        ('Launch day starts the work; it does not end it.',
         [('A register nobody checks fills with errors, and a payment nobody reconciles reaches the '
           'wrong person.'),
          'Upkeep is what keeps people trusting the foundation.']),
        ('Launch day starts the work; it does not end it. A register nobody checks fills with errors, '
         'and a payment nobody reconciles reaches the wrong person. Upkeep is what keeps people '
         'trusting the foundation.'))

d.rows('Indicators in three tiers',
       [('Every month, operational', 'Learners in PLR; records passing the quality gates; calls on Linkup by MoEYS.'),
        ('Every quarter, programme', 'Components on schedule; budget used against plan; board decisions taken.'),
        ('Every year, outcome', 'The stage of each domain against its target.')],
       ('Read indicators in three tiers. Operational indicators are read every month: in Progressa, '
       'the number of learners in the register, the share of records passing the quality gates, and '
       "the ministry's calls on the exchange. Programme indicators are read every quarter: "
       'components on schedule, budget used against plan, and decisions the board has taken. Outcome '
       'indicators are read every year: the stage of each domain against its target. The three tiers '
       "are this course's own form. PAERA's procedure asks for the same rhythm: monitor progress "
       'against the metrics, and revisit the assessment, perhaps once a year.'),
       cue="The tiers of the worked example E7, Part 8; the form is this course's own. Text-only.")

d.rows('Every load checked, every payment traced',
       [('Quality checks on every load; a row that fails is set aside with its reason.', ''),
        (('Every change and every read of the register logged, and visible to its analyst (DRS-7, '
          'DRS-21).'), ''),
        (('A deletion keeps the logical record unless the law requires hard deletion (Digital '
          'Registries, section 5.2).'), ''),
        (('A chain of identifiers for every payment, and an audit trail no user can edit (Payments, '
          'sections 6.8 and 6.12).'), '')],
       ('Below the indicators sit the checks on every load. Each load of the learner register passes '
       'its quality checks, and a row that fails is set aside with its reason. The Digital '
       'Registries specification requires every change and every read of the data to be logged, and '
       "the register's analyst to see both. A deletion keeps the logical record unless the law "
       'requires it to be erased. The Payments specification requires a chain of identifiers that '
       'traces each transaction from start to finish, and an audit trail that no user can edit. '
       "Reconciling each load against those records is the team's practice."),
       cue=('Each requirement with its specification. The checks and the reconciliation of the register '
       'run on a schedule. Text-only.'))

d.rows('A yearly review against the safeguards',
       [('The Universal DPI Safeguards Framework (UN, 2024): 18 principles; 13 risks in three groups', 'Safety, inclusion, structural vulnerabilities.'),
        ('Unsustainability is one of the risks.', ''),
        ('Five adoption pathways, each with self-assessment questions.', ''),
        ('ITU runs a course on the framework with UNDP, and is a member of its consultative group.', '')],
       ('Once a year, review the foundation against the published safeguards. The Universal DPI '
       'Safeguards Framework, released by the United Nations in 2024, sets out 18 principles and 13 '
       'risks in three groups: safety, inclusion and structural vulnerabilities. Unsustainability is '
       'one of them; it covers high running costs and vendor lock-in. The framework offers five '
       'adoption pathways, each with self-assessment questions, from legal and regulatory to the '
       "whole of society. ITU is a member of the framework's consultative group of international "
       'organisations, and runs a training course on it with UNDP.'),
       cue=("The framework named by its own title; ITU's part named as the course and the consultative "
       'group. Text-only.'))

d.rows("Progressa's first yearly review (illustrative)",
       [('Legal and regulatory', "The amendment and the regulation on children's data drafted and with cabinet."),
        ('Institutional structures', 'The joint board, with written terms, meets monthly.'),
        ('Technical foundations', "Quality gates on the first district's load."),
        ('Capacity and resources', 'A named data steward; a recurrent budget line requested from 2029.'),
        ('Whole of society', 'Every body commented on the roadmap.')],
       ("Here is Progressa's first yearly review against the five pathways, at the end of 2027, in "
       'outline and built as an example. Legal and regulatory: the amendment to the education act '
       "and the regulation on children's data are drafted and with the cabinet, not yet in force. "
       'Institutional structures: the joint board has written terms and meets monthly. Technical '
       "foundations: quality gates on the first district's load. Capacity and resources: a named "
       'data steward, and a recurrent budget line requested from 2029. Whole of society: every body '
       'commented on the roadmap. Each weak line becomes a decision for the board, with an owner and '
       'a date.'),
       cue='The worked example, built for Progressa; every entry illustrative. Text-only.')

d.recap(('Read indicators by month, quarter and year, check every load, and review against the '
         'safeguards each year. That keeps the foundation trusted and safe.'),
        ("Write the month's report of exceptions",
         ('a one-page report of exceptions in three parts: what moved, what failed and what needs a '
          'decision')))
d.sources([('Universal DPI Safeguards Framework, United Nations, 2024, pages 6, 15 and 43 and the '
            "framework's web page"),
           "ITU Academy course 'Accelerating digital public infrastructure with safeguards'",
           'GovStack Digital Registries specification, Version 3.0-alpha, section 5.2, DRS-7 and DRS-21',
           'GovStack Payments specification, Version 3.0, sections 6.8 and 6.12',
           'PAERA v1.0, section 5.4, steps 7 and 8'])


# ================================================================ 6.9
MSG = ('At every step of the method and of the build there is a task an AI assistant can draft and a '
       'check only a person can make, and no decision is handed over.')
d.video('6.9', 'The AI plays, step by step', MSG,
        ('An AI assistant can draft most of the paperwork of a roadmap.',
         ['It cannot decide anything in it.',
          'The skill is knowing, at each step, what to hand over and what to keep.']),
        ('An AI assistant can draft most of the paperwork of a roadmap. It cannot decide anything in '
         'it. The skill is knowing, at each step, what to hand over and what to keep.'))

d.rows('A play for each step',
       [('Assess', 'The desk assessment, the review of a questionnaire, the scorer.'),
        ('Plan', 'The gap register, cost against reuse, the waves, the investment sheets.'),
        ('Govern', "The contract check, the board's terms, the revision, the monthly exceptions."),
        ('Build', ("Four generators: the registration service, the register's schema, the identity connection, "
          'the payment connection.'))],
       ('A play is one task at one step, with a fixed input, a fixed output and a safeguard. In the '
       'assessment, plays draft the desk assessment from public sources, review a questionnaire '
       'against its evidence, and propose a stage for each domain. In planning, they gather the gap '
       'register, weigh cost against reuse, draft the waves and fill the investment sheets. In '
       "governance, they check a contract for lock-in, draft a board's terms, run the revision and "
       'write the monthly exceptions. In the build, four generators draft the configuration of each '
       'block. PAERA itself mentions a GovStack tool for a quick assessment.'),
       cue='The catalogue in four groups; the full catalogue is the worked example below. Text-only.')

d.rows('What the assistant drafts, what a person checks',
       [('The assistant drafts; a person decides.', ''),
        ('Every claim quotes its evidence.', ''),
        ('A missing answer is reported, never filled in.', ''),
        ('No personal data in a prompt; test persons in the build.', '')],
       ('Every play follows the same rules. The assistant drafts and a person decides: the assessor '
       'confirms the stage, the workshop sets the priorities, the lawyer reads the contract. Every '
       'claim the assistant makes quotes its evidence, so that the person can check it quickly. An '
       "answer that is missing is reported as missing, never filled in. And no one's personal data "
       'goes into a prompt: the plays work on descriptions of systems and bodies, and the build uses '
       "test persons only. These rules are this course's own practice."),
       cue="The rules every play follows; this course's own. Text-only.")

d.rows('Trust a play only after a known result',
       [('Run the play where the answer is already known.', ''),
        ('Compare its output with the known answer.', ''),
        ('Any difference', 'Find the cause before the play is used.'),
        ('Then run it on new evidence.', '')],
       ('Before you trust a play, run it where the answer is already known. Take the scorer. '
       "Progressa's Digital Data domain was scored and then validated: one sub-component at Basic, "
       'five at Opportunistic, and a domain score of 1.3. Give the scorer the same criteria and the '
       'same verified answers, without the result, and compare its proposal with the validated '
       'table. If they match, the play has reproduced a known result. If they differ, find the cause '
       'in the criteria, the evidence or the prompt, before anyone uses the play on new evidence. A '
       'play that passes on one domain is tested on a second before it is used on all five.'),
       cue=("The test of trust, with Progressa's validated scores (E5); every value illustrative. "
       'Text-only.'))

d.storyboard('The scorer, on a domain whose result is known',
             [('Set the known result aside', 'Digital Data as validated: score 1.3, Opportunistic.'),
              ('Assemble the inputs', 'The criteria, the verified answers, the desk result marked '
                                      'UNVERIFIED.'),
              ('Run the scoring prompt once', 'Proposals, arithmetic, answers not used, conflicts.'),
              ('Set the proposal beside the known result', 'The six stages and the score of 1.3 '
                                                           'match.'),
              ('A second known result', 'Interoperability, with its verified position.'),
              ('Record the confirmation', 'Each stage confirmed or changed, with its reason.')],
             ('The demonstration runs that test step by step. The known result is set aside before the run. '
       'The criteria and the verified answers go in, and one desk result that was never verified is '
       'marked as such. The scorer proposes a stage for each sub-component with its evidence, and '
       'lists the unverified result as not used. The pass is simple: the six stages and the score '
       'match the validated table. A second run uses Interoperability, where a draft once scored '
       'membership from a desk result, and the scorer must leave that result out.'),
             cue=('Needs only the scoring criteria of the assessment toolkit; the storyboard below stands in '
       'its place until the segment is recorded.'))

d.recap(('At each step the assistant drafts and a person checks. No decision is handed over, and a '
         'play is trusted only after it reproduces a known result.'),
        ('Run a play where the answer is known, before you trust it',
         ('a proposed stage and score for each sub-component, with quoted evidence, the domain score '
          'with its arithmetic, and the answers not used')))
d.sources(['PAERA v1.0, section 5.3'])


# ================================================================ 6.10
MSG = ("Change the sector's register and services and keep the five domains, the nine steps and the "
       'foundational blocks, and the same method produces a roadmap for health, agriculture or '
       'social protection.')
d.video('6.10', 'Carry the method to another sector', MSG,
        ('Education is the first sector here, not the only one.',
         ['The method does not belong to schools.',
          ('A ministry of health, of agriculture or of social protection can use it, if it knows what to '
           'keep and what to replace.')]),
        ('Education is the first sector here, not the only one. The method does not belong to schools. '
         'A ministry of health, of agriculture or of social protection can use it, if it knows what to '
         'keep and what to replace.'))

d.rows('What stays',
       [('The five domains.', ''),
        ('The nine steps, with their roles and templates.', ''),
        ('The foundational blocks', 'Identity, payments, data exchange.'),
        ('Sector applications sit above the core (UNDP, 2023, Exhibit 2).', '')],
       ('Most of the method stays as it is. The five domains stay: governance with the law, access, '
       'digital data, interoperability and digital identity. The nine steps stay, from framing the '
       'assessment to adopting the roadmap, with their roles, their decision points and their '
       "templates. The foundational blocks stay too. UNDP's framework for the DPI approach places "
       'digital identity, digital payments and consent-based data sharing in its core, and places '
       'sector applications, among them digital education, digital health and digital agriculture, '
       'above that core. A new sector builds on the same core.'),
       cue="UNDP's Exhibit 2 described in words; the exhibit itself is not shown. Text-only.")

d.rows('What changes',
       [("The sector's register", 'In health, providers and facilities; in social protection, social insurance.'),
        ("The sector's services, and the bodies that own them.", ''),
        ('Any state registry needs two blocks', 'Registration and a Digital Registry (PAERA, Annex 1).')],
       ("What changes is the sector's own part. Its register changes: in education it is the learner "
       'register; in health it may be a register of providers and facilities; in social protection, '
       'a social insurance register. Its services change, and with them the bodies that own them and '
       'answer the questionnaires. PAERA lists the main state registries a country should establish, '
       'and among them are health registers, a social insurance register and an education register. '
       'It also says that digitising a state registry needs two building blocks: Registration and a '
       "Digital Registry. So a new sector's register is set up with the same two kinds of block, "
       'whatever it records.'),
       cue="PAERA's Annex 3 and A1.2.5 in plain words. Text-only.")

d.table('The carry-over table', ['Part', 'Keep or replace', 'What changes'], [3.6, 3.2, 5.1],
        [('Domains', 'Keep', "Add the sector's own questions"),
         ('Nine steps', 'Keep', 'New bodies, sessions and documents'),
         ('Foundational blocks', 'Keep and reuse', 'The connections only'),
         ('Register and services', 'Replace', 'Assess afresh'),
         ('Worked examples', 'Keep the form', 'Rebuild every value')],
        ('Put the comparison on one page, part by part. For each part of the method, the table says '
       'what stays and what the new sector replaces. The domains stay, with questions added for the '
       'sector. The nine steps stay, while the bodies, the sessions and the documents change. The '
       'foundational blocks stay and are reused, so the new sector pays for a connection, not for a '
       "block. The sector's register and services are replaced and assessed afresh. And the examples "
       'keep their form, but every value is rebuilt, so a health roadmap is shown on its own '
       'registers, not on learners.'),
        cue="The team's blank instrument; the worked example below. Text-only.")

d.rows('Carry the method, not the results',
       [("Progressa's register came first because its own assessment put it there.", ''),
        ('A new sector may find a different first priority.', ''),
        ("Run the new sector's assessment in full.", '')],
       ("One warning. Carrying the method over does not carry the results over. Progressa's learner "
       'register came first because its own assessment found that the missing record held back three '
       'domains. A ministry of health may find something else first, such as its register of '
       "providers, or its link to the identity authority. Run the new sector's assessment in full, "
       'with its own questionnaires, its own sessions and its own verification, before anything from '
       'education is treated as a finding. Only the method moves from one sector to the other.'),
       cue="No second sector is worked through; the contract's demonstration is education. Text-only.")

d.recap(("Keep the domains, the steps and the foundational blocks. Change the sector's register and "
         'services, and assess the new sector afresh.'),
        ('Report what carries over to a new sector, and what must be assessed afresh',
         ('a carry-over table with one row for each part of the method, saying what stays, what is '
          'added and what is replaced')))
d.sources(['PAERA v1.0, Annex 3 and Annex 1, A1.2.5',
           ('UNDP, Accelerating the SDGs through Digital Public Infrastructure: A Compendium, 2023, page '
            '4, Exhibit 2')])

d.finish(expected=83)

#!/usr/bin/env python3
# Build the KP3 Module 5 video deck on the ITU template — v0.1.
# Content follows KP3_Module5_Script_Bundle_v0.1 (build_kp3_module5_v01.js): 6 videos, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6.
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

d = Deck(5, 'KP3_M5_Deck_v0.1.pptx')

# ---------------------------------------------------------------- COVER (edit slide 1)
d.cover(
    title_text='Join the blocks and prove the foundation',
    kicker='KP3 · Education DPI Roadmap · Module 5',
    blurb=('Six standalone videos for the architect who joins the blocks on the data exchange layer and '
     'proves them: what must be in place before a call, who puts the steps in order, the once-only '
     'registration from beginning to end, the acceptance checks, the evidence of a call, and what '
     'the next services can now use.'),
    length='~30 mins across 6 videos (5.1 – 5.6)',
    audience=('The DPI solution architect, integration lead or ministry technical lead who joins the blocks '
     'on the data exchange layer and proves them'),
    panel_heading='WHAT THIS MODULE PROVES',
    panel_items=['Member, service, grant',
                 'The sequence held by the registration service',
                 'Register once, end to end',
                 'Set up is not proven',
                 'Three records of every call',
                 'A page for the next team'],
    panel_footer='4 blocks · 1 exchange · 1 once-only run',
    note_text=('Cover for the combined Module 5 deck. Each section that follows is one standalone ~5 minute '
     'video, Architect-facing. Modules 2 to 4 set up the four blocks; this module joins them on '
     'the data exchange layer and proves that they work together.'))

# ---------------------------------------------------------------- AGENDA (edit slide 2)
d.agenda(
    header='Module 5 — six videos',
    items=[
        ('5.1  What must be in place before the blocks can call each other', '~5 min'),
        ('5.2  Who puts the steps in order: contracts, and the block that calls them', '~5 min'),
        ('5.3  The once-only registration, from beginning to end', '~5 min'),
        ('5.4  The acceptance checks: from "set up" to "proven"', '~5 min'),
        ('5.5  Reading the evidence of a call', '~5 min'),
        ('5.6  What the next services can now use', '~5 min'),
    ],
    message_paras=[('The blocks call each other through the data exchange layer, each call allowed by a grant and '
                    'recorded as evidence.'),
                   ('A foundation is proven only when every check has run and passed, with a date — then the next '
                    'service starts from it.')],
    note_text=('Navigation slide for the combined deck; the videos ship standalone on YouTube. 5.1 and 5.2 '
     'are the preconditions and the sequence. 5.3 is the once-only run. 5.4 and 5.5 are the proof '
     'and its evidence. 5.6 hands the foundation on.'))


# ================================================================ 5.1
MSG = ('Before one block can call another across ministries, each must be a member of the data '
       'exchange layer, each service registered with its contract, and access granted to the caller.')
d.video('5.1', 'What must be in place before the blocks can call each other', MSG,
        (('A minister is told that the new registration service will reuse identity and the learner '
          'register.'),
         ['Your job is to check whether those calls can happen at all.',
          'Across ministries, three things must be in place first, and each one has an owner.']),
        ('A minister is told that the new registration service will reuse identity and the learner '
         'register. Your job is to check whether those calls can happen at all. Across ministries, '
         'three things must be in place first, and each one has an owner.'))

d.rows('Three things, in this order',
       [('1. A member', 'The organisation is admitted to the data exchange layer.'),
        ('2. A registered service', 'Its contract, an OpenAPI description, is published.'),
        ('3. A grant', 'The owner of the service allows this caller.')],
       ('The first is membership. An organisation asks to join the data exchange layer, and the '
       'operator checks and accepts it. The second is a registered service. The provider publishes '
       'each service with its contract, an OpenAPI description, so that callers know exactly what it '
       'offers. The third is a grant. The provider decides who may call. The Information Mediator '
       "specification asks for all three. X-Road, the software behind Progressa's exchange, works "
       'the same way: a new service starts switched off, and the owner of the data controls who can '
       'use it.'),
       cue='The core payload. The order matters and is kept on screen.')

d.rows('Is the exchange required at all?',
       [('Strongly recommended for any exchange across the internet.', ''),
        ('Not required between blocks that sit together on one platform.', '')],
       ('One choice comes before the three. The specification strongly recommends the data exchange '
       'layer for any exchange across the internet. It does not require it between blocks that sit '
       'together on one platform. So sending every call through the exchange is a choice the '
       'specification allows, not a rule it imposes. Progressa makes that choice because its blocks '
       'belong to different authorities, and each authority must control who reads its data.'),
       cue='States the choice the specification leaves open. Text-only.')

d.table("Progressa's members today", ['Member', 'Role on the exchange'], [4.6, 7.3],
        [('PDGA', 'Owns and operates the exchange'),
         ('PNEA, the examination authority', 'The caller'),
         ('PLR, the learner registry', 'One enrolment service; only PNEA may call it'),
         ('PNIA, the identity authority',
          'One service, a read of a person by national number; only PNEA may call it')],
        ('Progressa already has an exchange, called Linkup. The digital government authority, PDGA, '
       'owns and operates it. The examination authority, PNEA, is the caller. The learner registry, '
       'PLR, publishes one enrolment service, and only PNEA may call it. The identity authority, '
       'PNIA, publishes one service, a read of a person by national number. That is a contract of '
       "Progressa's own, and only PNEA may call it. The ministry of education, MoEYS, is not a "
       'member.'),
        foot='Not a member: MoEYS, the ministry of education.',
        cue="Progressa's names as the outline gives them. No logos, no emblems.")

d.rows('What this course adds',
       [('A member for the registration service, with its application registered.', ''),
        ('A write service on the learner register, registered with its contract.', ''),
        ('Grants', 'The registration service may call the write service.'),
        ('The Payments block as a member, publishing its own interface.', '')],
       ('This course adds four things. The registration service gets a member of its own, with its '
       'application registered. The learner register gets a write service, registered with its '
       "contract, because PLR's one service today is a read. Grants let the registration service "
       "call that write service, and PNIA's service too if the build uses it. And the Payments block "
       "joins as a member, publishing its own interface. PayPro stays behind the block's payer bank, "
       'as one of the payment systems in the market.'),
       cue='The configuration codes may appear in small type at the end of each row.')

d.storyboard('A call without a grant is refused',
             [('Listed: the registration service', ''),
              ('Listed: the write service and its contract', ''),
              ('With a grant: answered', ''),
              ('Without a grant: access denied', '')],
             ('The check is easy to read. The list of members shows the registration service. The list of '
       "services shows the register's write service and its contract. Then a member without a grant "
       'makes the same call, and the exchange refuses it with an access-denied fault. Being on the '
       'exchange is not permission.'),
             cue=('Replaced by the recording of the 5.1 walkthrough when X1, X2, X3 and X7 are built and the '
       'federation runs again. Until then, nothing on this slide claims a run.'))

d.recap(('Before any plan says that two blocks will talk, check three things: membership, a registered '
         'contract, and a grant from the owner. If one is missing, the call fails.'),
        ('Check that every planned call can happen',
         'a table of members, services and access grants with the missing ones marked'))
d.sources(['GovStack Information Mediator 1.1.1, sections 2, 6.2, 7.2, 8.2 and 8.6.2',
           ('NIIS X-Road 7.7.0, Architecture (ARC-G) section 1.2 and Security Server User Guide (UG-SS) '
            'sections 6.1.2 and 7'),
           'GovStack Payments 3.0, section 5.1.14',
           'OpenAPI Specification 3.0.3'])


# ================================================================ 5.2
MSG = ('The data exchange layer carries each call and enforces who may make it, but the registration '
       'service puts the steps in order, so know which block holds the sequence before you approve '
       'an integration plan.')
d.video('5.2', 'Who puts the steps in order: contracts, and the block that calls them', MSG,
        (("A vendor's integration plan says the exchange will run the registration from start to "
          'finish.'),
         ['Before you approve it, ask one question: which block holds the order of the steps?',
          'The published answer is not the exchange.']),
        ("A vendor's integration plan says the exchange will run the registration from start to "
         'finish. Before you approve it, ask one question: which block holds the order of the steps? '
         'The published answer is not the exchange.'))

d.rows('What the exchange does',
       [('Carries each call between members.', ''),
        ('Checks that the caller holds a grant.', ''),
        ('Signs, time-stamps and logs the message.', ''),
        ("Goes through the caller's own security server.", '')],
       ('The data exchange layer does a narrow job, and does it well. It carries each call from the '
       'caller to the provider. It checks that the caller may make the call. It keeps a record of '
       'the message. The Information Mediator specification lists what it registers: members, '
       'services with their contracts, and the lists of who may call them. Each call goes first to '
       "the caller's own security server, the exchange's gateway, which forwards it."),
       cue='Text-only list.')

d.rows('What the exchange does not do',
       [('Allow the definition of steps for a particular transaction', ''),
        ('Map data structures and fields from the identification system to the registration '
         'system and vice versa', '')],
       ('The same specification is just as clear about what is not its job. Defining the steps of a '
       'transaction is out of its scope. So is mapping the fields of the identity system into a '
       'registration record. X-Road says the same about itself: its core does not convert protocols '
       "or data, and the organisation's own information system does that. A plan that puts the "
       'sequence in the exchange puts it where no published specification does.'),
       foot='Both marked \u2018out of scope\u2019 in the GovStack Information Mediator specification.',
       cue='Quoted word for word from section 4 of the specification, marked as quotations.')

d.rows('Who holds the sequence',
       [('The registration service holds the sequence, as configured actions.', ''),
        ('An action fires on an event', 'A form loads, a button is clicked, an application is submitted.'),
        ('An action can pull data from an outside register through the exchange, or send data to one.', '')],
       ('The registration service holds the sequence. The Registration specification lets the analyst '
       'configure actions that fire on an event: a form loading, a button click, an application '
       'submitted. An action can pull data from an outside register through the exchange, or send '
       "data to one. So the steps of learner registration are written in the registration service's "
       "own description, and each step calls another block's published contract."),
       cue='The core payload.')

d.rows('Why go through the exchange at all',
       [('Point-to-point', 'Every link built and kept on its own.'),
        ('Mediated', 'Every call through one exchange, under one set of rules.')],
       ('Why send the calls through the exchange at all, if it does not run the sequence? Because the '
       'alternative is a web of direct links between systems. The GovStack Architecture '
       'specification names that pattern fragmented point-to-point integration, and says it makes '
       'service delivery across agencies unpredictable and expensive to maintain. The Digital '
       'Registries specification asks for mediated integration rather than direct point-to-point '
       'coupling. One exchange, many calls, one set of rules.'),
       cue='Text boxes side by side are allowed; labels in plain text only.')

d.table('Progressa: the registration as one sequence',
        ['Step', 'Who calls whom', 'What the exchange does'], [3.4, 4.6, 3.9],
        [('1. Sign in', "The learner's browser goes to PNIA's sign-in", 'Not used'),
         ('2. Pre-fill from the released claims', 'Inside the registration service', 'Not used'),
         ('3. Submit and check', 'Inside the registration service', 'Not used'),
         ('4. Registrar approves', 'Inside the registration service', 'Not used'),
         ('5. Write the record', "Registration service calls PLR's write service",
          'Carries, checks the grant, signs and logs'),
         ('6. Confirm the record exists', 'Registration service calls PLR',
          'Carries, checks the grant, signs and logs')],
        ("Here is Progressa's learner registration as one sequence. The learner signs in with the "
       'identity authority, PNIA, and approves the release of a name and a date of birth. The '
       'registration service fills the form with them. The learner submits, the checks run, and the '
       'registrar approves. Then the registration service calls the write service of the learner '
       'registry, PLR, through the exchange, and asks whether the record exists. Drawn on one page, '
       'the sequence gives the business side and IT one shared language, so a decision means the '
       'same thing in both rooms.'),
        cue=('The drawn version of this sequence is figure F12 of the written guide; the slide stays '
       'text-only.'))

d.recap(('The exchange carries the calls and checks who may make them. The registration service holds '
         'the order. Ask which block holds it before you approve the plan.'),
        ('Write the sequence of a service as a list of calls',
         'a numbered list of calls, each with its caller, its contract and its operation'))
d.sources([('GovStack Information Mediator 1.1.1, section 4 (out-of-scope requirements) and sections 6.2, '
            '6.3 and 8.1'),
           'GovStack Registration, section 6.3.2.7',
           'GovStack Digital Registries 3.0-alpha, section 10.5.5',
           'GovStack Architecture 2.1.0, section 4.3',
           'NIIS X-Road 7.7.0, Architecture (ARC-G) section 1.2',
           'OpenAPI Specification 3.0.3'])


# ================================================================ 5.3
MSG = ('A learner signs in, the form fills with the facts the learner agrees to release, the '
       'registrar approves and the record is in the register: one run that proves four blocks work '
       'as one foundation.')
d.video('5.3', 'The once-only registration, from beginning to end', MSG,
        (('A parent should not carry the same birth details to a school, a district office and a '
          'ministry.'),
         ['Once-only means the state asks once and reuses what it already holds.',
          'One registration run shows whether your foundation can do it.']),
        ('A parent should not carry the same birth details to a school, a district office and a '
         'ministry. Once-only means the state asks once and reuses what it already holds. One '
         'registration run shows whether your foundation can do it.'))

d.chain('Once-only, as PAERA states it',
        [('Identity', []), ('Registration', []), ('Learner register', []),
         ('Data exchange layer', [])],
        ('PAERA states the principle plainly: citizens and businesses should only have to provide '
       "information to the government once. In education, that means a learner's name and date of "
       'birth, which the identity authority already holds, are not typed again on every form. Four '
       'blocks have to work together for that: identity, registration, the learner register, and the '
       'data exchange layer between them.'),
        closing='\u201cCitizens and businesses should only have to provide information to the '
                'government once.\u201d',
        cue='The quotation is word for word from PAERA v1.0, section 5.2.')

d.rows('Step 1 — sign in and approve',
       [("The learner signs in on PNIA's own sign-in page.", ''),
        ('PNIA asks which facts it may share with this service.', ''),
        ('The learner approves', 'Name and date of birth.'),
        ('The service receives only what was approved, and an identifier made for this service.', '')],
       ('The run starts with a sign-in. The registration service sends the learner to the identity '
       "authority's own sign-in page. The learner, with a parent beside them, signs in, and PNIA "
       'asks which facts it may share with this service. The learner approves a name and a date of '
       'birth. The service receives only those, with the identifier PNIA gives to this one service. '
       'It keeps that identifier, never the national number.'),
       cue='No screenshot of any real sign-in page; text only.')

d.panels('Step 2 — the form fills itself',
         ('Filled from PNIA', ['Name', 'Date of birth']),
         ('Typed by the parent', ['School', 'Grade', 'A contact number']),
         ('Next, the form fills. The Registration specification lets a screen pull data from an outside '
       'source through a configured action. Here, the action places the released name and date of '
       'birth into the form. The parent types only what PNIA does not hold: the school, the grade '
       'and a contact number. Mapping identity facts into a registration record is the registration '
       "service's work; the exchange specification places it outside the exchange."),
         closing='Nothing is typed twice.',
         cue=('The worked example of the outline: which facts came from the identity block and which the '
       'parent typed.'))

d.rows('Step 3 — submit, decide, write',
       [('The learner submits once.', ''),
        ('The automated checks run.', ''),
        ('The registrar, a person, approves.', ''),
        ('The service writes the record to the learner register, through the exchange.', ''),
        ('The register confirms that the record exists.', '')],
       ('The learner submits once. The automated checks run, and the application reaches the '
       'registrar, a person who decides. On approval, an automated role in the registration service '
       "calls the learner register's write service through the exchange. That call is synchronous, "
       'signed, time-stamped and logged. Last, the service asks the register whether the record '
       'exists, and the register confirms it. Four blocks, one run.'),
       cue='The drawn sequence is figure F12 of the written guide.')

d.rows('What the published Identity block does not offer',
       [("A query of a person's facts from server to server: required, but no interface is published.", ''),
        ("PNIA's present service on Linkup", "A read by national number, a contract of Progressa's own."),
        ('A build that uses it names it as such.', '')],
       ('One limit must be said plainly. The Identity specification requires the block to answer a '
       "query for a person's facts from server to server, but it publishes no interface for that "
       "query. What it publishes is the sign-in with the person present. PNIA's present service on "
       "Linkup, a read of a person by national number, is a contract of Progressa's own. If a build "
       'shows a pre-fill from server to server, it shows that contract under its own name.'),
       cue="Keeps the published interface and Progressa's own contract apart, by name.")

d.storyboard('The run, step by step',
             [("Sign in with the national identity: PNIA's own sign-in page", ''),
              ('Sign in as the enrolled test person', ''),
              ('Approve the name and the date of birth only', ''),
              ('Back on the form: those two facts filled from PNIA', ''),
              ('Type the school, the grade and a contact number', ''),
              ('Submit once; the automated checks run', ''),
              ('The registrar opens the application and approves it', ''),
              ('The record written to the learner register, through the exchange', ''),
              ('The register confirms that the record exists', '')],
             ('This run is the principal demonstration of the course. The walkthrough follows it step by '
       'step: what the viewer sees at each step, and what counts as a pass. Nine steps lead from the '
       "sign-in on PNIA's own page to the register's answer that the record exists. A pass counts "
       'only from a run that took place, with its date.'),
             cue=('Replaced by the recording of the 5.3 walkthrough when X4 and everything it uses is built and '
       'the federation runs again. If only a part is built, the recording runs as far as that part '
       'and the stand-in continues.'))

d.recap(('Sign in, approve, fill, submit, decide, write. One run, nothing typed twice, and four blocks '
         'working as one foundation.'),
        ('Write the acceptance script for the once-only run',
         'a numbered acceptance script for the run, each step with its pass condition'))
d.sources(['PAERA v1.0, section 5.2, Principle #5 (Once-Only)',
           'GovStack Registration, sections 6.3.2 and 6.3.2.7',
           'GovStack Identity 2.0, sections 9.1.1 and 7.2.1, and requirement 6.3-r1',
           'GovStack Information Mediator 1.1.1, section 4 (out-of-scope requirements) and section 9.1',
           'GovStack Digital Registries 3.0-alpha, section 8.2'])


# ================================================================ 5.4
MSG = ('Every configuration has a check that someone can run and read, and a block is called proven '
       'only when its checks have run and passed.')
d.video('5.4', 'The acceptance checks: from "set up" to "proven"', MSG,
        ('A vendor tells your steering committee the platform is GovStack compliant at Level 2.',
         ['That describes the product, not how your country set it up.',
          ('What you can ask for is simpler and stronger: a check for every configuration, run and '
           'passed, with its date.')]),
        ('A vendor tells your steering committee the platform is GovStack compliant at Level 2. That '
         'describes the product, not how your country set it up. What you can ask for is simpler and '
         'stronger: a check for every configuration, run and passed, with its date.'))

d.rows('What GovStack itself offers',
       [('A self-assessment of compliance against the requirements.', ''),
        ('Automated tests of the published interfaces.', ''),
        ('A compliance level for the product', 'Level 1 or Level 2.')],
       ("GovStack's own testing offers two things. A software provider can assess its product against "
       'the functional requirements: a self-assessment. And there are automated tests of the '
       'published interfaces, run against candidate software. The two tests lead to a compliance '
       'level for the product: Level 1, partial, or Level 2, full. The GovStack Architecture '
       'specification also asks each block for a machine-readable definition of every external '
       'interface, and for a mock implementation, so that others can test against it.'),
       cue=("States GovStack's testing and its two levels of compliance as its own pages describe them. "
       "All three concern the product; none checks a country's own configuration."))

d.rows('One check for each configuration',
       [('What is run, against which published interface.', ''),
        ('What counts as a pass.', ''),
        ('The result, and the date of the last run.', '')],
       ('This course follows the same idea, configuration by configuration. Every configuration has '
       'one check with the same name. The check says what is run, against which published interface, '
       'and what counts as a pass. For the exchange, check X1 lists the members and finds the '
       'registration service. Check X3 makes a call with a grant, which is answered, and the same '
       'call without one, which is refused. Check X4 is the whole run, from the sign-in to the '
       'register.'),
       cue='The core payload.')

d.rows('Set up is not proven',
       [('Set up', 'The configuration exists.'),
        ('Proven', 'Every check has run and passed, with a date.'),
        ('Until then', 'Set up, not yet proven.')],
       ('Keep two words apart. A configuration that exists is set up. A block is proven only when '
       'every one of its checks has run and passed, and the result is written down with its date. '
       'Until then, the configuration is set up, and no more than that.'),
       cue='The two words are set in bold; the rest plain.')

d.table("Progressa's sheet of checks",
        ['Configuration', 'What is run', 'What counts as a pass', 'Last run'], [3.8, 3.4, 3.1, 1.6],
        [('X1 The registration service as a member', 'List the members', 'Its member and application listed', 'not yet run'),
         ('X2 The write service and its contract', 'List the services; fetch the contract', 'Contract returned; a test record exists', 'not yet run'),
         ('X3 The grants', 'The call with a grant, and without one', 'Answered; refused', 'not yet run'),
         ('X4 The once-only sequence', 'The whole run, sign-in to register', 'The register confirms the record', 'not yet run'),
         ("X5 Each call through the caller's own server", 'Read the message log of the run', "Each request on the caller's own server", 'not yet run'),
         ('X6 Full logging and access to monitoring', 'Query the logs; read monitoring', 'A signed, time-stamped record of each call', 'not yet run'),
         ('X7 The Payments block as a member', 'List its services', 'Only its own operations listed', 'not yet run')],
        ("Here is Progressa's sheet of checks for the exchange. Each row names a configuration, what "
       'is run, what counts as a pass, and the result and date of the last run. Before the first '
       "run, the last column reads 'not yet run' in every row. That is not a weakness to hide. It is "
       'the honest state, and it tells the minister exactly what lies between a design and a proof.'),
        size=15,
        cue=('The worked example of the outline. The same sheet is in the specimens folder, '
       'KP3-DPI/specimens/composition/acceptance-sheet.md.'))

d.table('Running the checks',
        ['Configuration', 'What is run', 'What counts as a pass', 'Last run'], [3.8, 3.4, 3.1, 1.6],
        [('X1 The registration service as a member', 'List the members', 'Its member and application listed', 'not yet run'),
         ('X2 The write service and its contract', 'List the services; fetch the contract', 'Contract returned; a test record exists', 'not yet run'),
         ('X3 The grants', 'The call with a grant, and without one', 'Answered; refused', 'not yet run'),
         ('X4 The once-only sequence', 'The whole run, sign-in to register', 'The register confirms the record', 'not yet run'),
         ("X5 Each call through the caller's own server", 'Read the message log of the run', "Each request on the caller's own server", 'not yet run'),
         ('X6 Full logging and access to monitoring', 'Query the logs; read monitoring', 'A signed, time-stamped record of each call', 'not yet run'),
         ('X7 The Payments block as a member', 'List its services', 'Only its own operations listed', 'not yet run')],
        ('When the build is ready, the checks are run one after another, and the sheet fills with '
       'results and dates. A failed check stays on the sheet with its output until it passes, and '
       'nobody edits a result by hand. That is what a good run shows, and nothing less.'),
        size=15, foot=STORYBOARD_FOOT, extra=STORYBOARD_NOTE,
        cue=('Replaced by the recording of the 5.4 walkthrough when the configurations are built. Nothing '
       'on this slide claims a run.'))

d.recap(("Ask for the sheet, not only the product's compliance level. A block is proven when its "
         'checks have run and passed, each with a date.'),
        ('Turn a failed check into a note for the owner',
         'a plain-language note for the owner: what was run, what was expected and what came back'))
d.sources(["GovStack testing, 'Self-Assessment of Compliance' and API compliance testing",
           "GovStack website, 'How is Compliance Measured?'",
           'GovStack Architecture 2.1.0, section 6.4 (quality requirements 4 and 7)',
           'GovStack Information Mediator 1.1.1, sections 8.2.1 and 8.6.2',
           'GovStack Identity 2.0, section 9.1.1',
           'GovStack Digital Registries 3.0-alpha, section 8.2'])


# ================================================================ 5.5
MSG = ('Three records can show that a call took place, the message log, operational monitoring and '
       'the traffic view, but each only under settings you must choose before the first call.')
d.video('5.5', 'Reading the evidence of a call', MSG,
        (("An auditor asks you to prove that the registration service wrote a learner's record on a "
          'given day.'),
         [('Whether you can answer depends on choices made before the first call, not on what you do '
           'once the question arrives.')]),
        ("An auditor asks you to prove that the registration service wrote a learner's record on a "
         'given day. Whether you can answer depends on choices made before the first call, not on what '
         'you do once the question arrives.'))

d.rows('Record 1 — the message log',
       [('Full logging', 'The message and its details are kept; usable as evidence.'),
        ('Details only', 'Cannot be used as evidence.'),
        ('Off', 'No record at all.')],
       ('The first record is the message log on each security server. X-Road offers three settings. '
       'With full logging, the whole message is kept, and the records can be verified afterwards and '
       'used as evidence. With metadata logging, only the details around the message are kept, and '
       'the records cannot be used as evidence. Or logging is switched off. The Information Mediator '
       'specification requires a signed, time-stamped message log.'),
       cue="The words 'usable as evidence' and 'cannot be used as evidence' follow the X-Road guide.")

d.rows('Record 2 — operational monitoring',
       [('One record for each request.', ''),
        ('Who called, which service, when, how large, the result.', ''),
        ('Never the content of the message.', ''),
        ('A regular member sees only its own records.', '')],
       ('The second record is operational monitoring. One record is made for each request: who '
       'called, which service, when, how large, and whether it succeeded. It never holds the content '
       'of the message. Who may read it matters. The owner of the security server and the central '
       'monitoring client can read the records of all clients. A regular member reads only the '
       'records about itself, through a monitoring service of its own.'),
       cue='Text-only.')

d.rows('Record 3 — the traffic view',
       [('A graph of the requests through one security server.', ''),
        ('Filter by period, party, role and status.', ''),
        ('Needs the operational monitoring add-on.', '')],
       ("The third record is the traffic view on the security server's diagnostics page. It draws a "
       'graph of the requests that passed through, and you can filter it by period, by party, by '
       'role in the exchange, and by success or failure. It depends on the operational monitoring '
       'add-on. If that add-on is not installed, there is no traffic view to read.'),
       cue='Text-only. No screenshot of the diagnostics page until the recording exists.')

d.table('Progressa: one run, three readers', ['Reader', 'What it sees'], [4.6, 7.3],
        [('The owner of the learner register',
          'Its own message log; the monitoring records of calls to its service'),
         ('The registration service', 'Its own message log; the monitoring records of its own calls'),
         ('PDGA, the operator', 'The traffic view, and the records its role allows')],
        ("Take Progressa's registration run. The owner of the learner register sees, in its own "
       'message log, the request to write the record and its own answer. The registration service '
       'sees the same exchange from its side. PDGA, as operator, reads the traffic view and the '
       "records its role allows. No member sees another member's records by default. Each reader "
       'proves only what its own records show.'),
        foot=STORYBOARD_FOOT, extra=STORYBOARD_NOTE,
        cue=('Replaced by the recording of the 5.5 walkthrough when X6 is built and the federation runs '
       'again. Nothing on this slide claims a run.'))

d.rows('Choose before the first call',
       [('Full message logging on every security server that takes part.', ''),
        ('Access to monitoring for whoever must read the evidence.', ''),
        ('The monitoring add-on, so that the traffic view exists.', '')],
       ('So three settings are chosen before the first call. Full message logging on every security '
       'server that takes part. Access to monitoring for whoever must read the evidence, such as an '
       'auditor or the operator. And the monitoring add-on, so that the traffic view exists. Choose '
       'them late, and the first months of calls leave no evidence anyone can use.'),
       cue='The core payload.')

d.recap(('Three records can prove a call: the message log, monitoring and the traffic view. Each works '
         'only if you set it up before the first call.'),
        ('Report the calls of a period from the monitoring records',
         'a report of the calls by caller, service and result, with the failures listed'))
d.sources([('NIIS X-Road 7.7.0, Security Server User Guide (UG-SS) sections 11, 14.2 and 15, and '
            'Operational Monitoring Protocol (PR-OPMON) section 2'),
           'GovStack Information Mediator 1.1.1, sections 6.5 (logging services) and 6.6'])


# ================================================================ 5.6
MSG = ('Identity, the learner register and payments are now services with published contracts that '
       'the next education services can use without building them again, with consent and '
       'notification still to add.')
d.video('5.6', 'What the next services can now use', MSG,
        ('Another team in the ministry wants to pay scholarships.',
         ['Its first plan is to build its own learner list and its own payment link.',
          'Your job is to show the team what it can use instead, and on what terms.']),
        ('Another team in the ministry wants to pay scholarships. Its first plan is to build its own '
         'learner list and its own payment link. Your job is to show the team what it can use instead, '
         'and on what terms.'))

d.rows('On the exchange, with published contracts',
       [('Identity', "PNIA's sign-in, for a service registered as its client."),
        ('The learner register', "Its services, on the owner's grant."),
        ('Payments', "The Payments block's own interface.")],
       ('Once the checks of the foundation have passed, three things are services with published '
       "contracts. Identity, through PNIA's sign-in, for any service registered as its client. The "
       'learner register, whose services other services may call once the owner grants access. And '
       "payments, through the Payments block's own interface on the exchange. A new service asks for "
       'access, the owner of each service decides, and the call goes through the exchange.'),
       cue='Each row names the block and how a new service reaches it.')

d.rows('A scholarship, block by block',
       [('Confirm the learner', 'Call the learner register.'),
        ('Pay', "The Payments block's path for bulk payments from government to people."),
        ('Or', 'Vouchers that only schools can redeem.')],
       ('Take a scholarship service. It confirms the learner by calling the learner register. It pays '
       'through the Payments block, on the path the Payments specification describes for bulk '
       'payments from government to people. Or it issues vouchers, which the same specification '
       'describes, and which can be limited so that only schools redeem them. It builds no learner '
       'list and no payment link of its own.'),
       cue='The worked example of the outline.')

d.rows('Who sees the saving',
       [('Inside one project', 'Building your own looks quicker.'),
        ('Across the government', 'The second service costs less than the first.')],
       ('Inside one project, building your own list looks quicker than asking another ministry for '
       'access. Procurement rules can make each contract cheaper, but only whole-of-government '
       'planning makes re-use possible. The first service paid for the foundation, and every service '
       'after it uses it. Ask the next team to put both options side by side before it commits.'),
       cue='Carries the structural argument that planning enables re-use.')

d.rows('Still to add: consent and notification',
       [('Consent', 'Recorded at first registration, checked before data is used.'),
        ('Consent may be the wrong legal ground for a public authority.', ''),
        ('Notification', 'Telling a person that their registration is done.')],
       ('Two blocks are cited here but not built. The Consent specification records consent when a '
       'person first registers and checks it before data is processed. It also warns that consent '
       'may be the wrong legal ground where a public authority processes data, so ask your lawyers '
       'first. The Messaging specification names informing people about their registration among its '
       'first uses, and the Registration block as one source of such a message.'),
       cue=('Consent and Messaging are cited; their configurations, CN1 and MS1, are not part of the '
       'build.'))

d.headings('One page for the next team', ['Service', 'Contract', 'Conditions of access', 'Owner'],
           ('Give the next team one page. For each service, it lists the contract, the conditions of '
       "access and the owner to ask. Generate that page from the exchange's own list of services and "
       'their contracts, not from memory or an old slide, and it stays true as the list changes.'),
           cue='Text-only; no table data on screen.')

d.recap(('The foundation is now something to use, not to rebuild. Consent and notification are still '
         'to come.'),
        ("Draft the note 'what you may use' for the next service team",
         'a one-page note: each service, its contract, the conditions of access and its owner'))
d.sources(['GovStack Information Mediator 1.1.1, section 6.2',
           'GovStack Payments 3.0, sections 9.1 and 9.2',
           "GovStack Consent 1.3.0, section 2 ('What Consent Is') and sections 9.2 and 9.4",
           'GovStack Messaging, sections 4.1 and 6.2.1'])

d.finish(expected=58)

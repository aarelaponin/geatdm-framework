#!/usr/bin/env python3
# Build the KP3 Module 4 video deck on the ITU template — v0.1.
# Content follows KP3_Module4_Script_Bundle_v0.1 (build_kp3_module4_v01.js): 6 videos, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6.
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

d = Deck(4, 'KP3_M4_Deck_v0.1.pptx')

# ---------------------------------------------------------------- COVER (edit slide 1)
d.cover(
    title_text='Identity and payments',
    kicker='KP3 · Education DPI Roadmap · Module 4',
    blurb=('Six standalone videos for the architect who connects the ministry’s services to two blocks '
     'it should never build again: why identity is built once, what the published Identity block '
     'and the identity authority offer, the identity connection, the Payments block and the '
     'payment systems behind it, the payment connection, and reuse as the return on planning.'),
    length='~30 mins across 6 videos (4.1 – 4.6)',
    audience=("The ministry's technical lead or solution architect who connects its services to the "
     'identity block and the Payments block instead of building either again'),
    panel_heading='WHAT THIS MODULE CONNECTS',
    panel_items=['Identity built once, reused',
                 'A sign-in, not a copy of the register',
                 'An identifier made for each service',
                 'Payments through the market',
                 'One test payment, its status',
                 'Reuse as the return on planning'],
    panel_footer='2 shared blocks · 0 built again',
    note_text=('Cover for the combined Module 4 deck. Each section that follows is one standalone ~5 minute '
     'video, Architect-facing. Modules 2 and 3 stood up the registration service and the learner '
     'register; this module connects them to identity and payments, which the ministry reuses '
     'rather than builds.'))

# ---------------------------------------------------------------- AGENDA (edit slide 2)
d.agenda(
    header='Module 4 — six videos',
    items=[
        ('4.1  Why identity is built once', '~5 min'),
        ('4.2  The published Identity block, and what the identity authority offers today', '~5 min'),
        ('4.3  Generating the identity connection', '~5 min'),
        ('4.4  The Payments block and the payment systems behind it', '~5 min'),
        ('4.5  Generating the payment connection', '~5 min'),
        ('4.6  Reuse is the return on planning', '~5 min'),
    ],
    message_paras=[('Identity and payments are built once for the whole government; a ministry connects to them '
                    'and builds neither again.'),
                   ('Ask for little, keep the identifier the block gives you, route payments through the market — '
                    'and count the reuse, because only planning sees it.')],
    note_text=('Navigation slide for the combined deck; the videos ship standalone on YouTube. 4.1 to 4.3 '
     'are identity — why it is shared, what is offered, the connection. 4.4 and 4.5 are payments. '
     '4.6 steps back to reuse.'))


# ================================================================ 4.1
MSG = ('An identity system is costly to build and to run, so a country builds it once and every '
       'service uses it, and a ministry that builds its own pays those costs a second time.')
d.video('4.1', 'Why identity is built once', MSG,
        (('A ministry of education that wants to know who its learners are may be tempted to issue an '
          'identity of its own.'),
         [('Before it does, someone should show the finance ministry what that choice costs, and who has '
           'already paid it.')]),
        ('A ministry of education that wants to know who its learners are may be tempted to issue an '
         'identity of its own. Before it does, someone should show the finance ministry what that '
         'choice costs, and who has already paid it.'))

d.rows('Not an ordinary registration system',
       [("It establishes a person's foundational identity.", ''),
        ('Every digital interaction of that person rests on it.', ''),
        ('It attracts attackers, so it demands the highest security.', '')],
       ('The GovStack Identity specification makes a sharp point. An identity system is not like the '
       "registration screen of an ordinary application. It establishes a person's foundational "
       'identity, the base for every digital interaction that person will have. That makes it '
       'valuable to the person and attractive to attackers, so it demands the highest level of '
       'security. Enrolling people well takes time, documents and trained staff. Running it well is '
       'a national task, not a side task of one ministry.'),
       cue="The specification's own point, in plain words. Text-only.")

d.rows("What identity systems cost: the World Bank's study",
       [(('Six categories made up over 90 percent of the cost in the start-up phase: human resources; '
          'the identity credential; central IT infrastructure; physical establishments; enrolment IT '
          'infrastructure; information, education and communication.'), ''),
        ('Once the system runs, human resources are often greater than 80 percent of the annual cost.', '')],
       ('The World Bank studied what foundational identity systems cost. It found six categories: '
       'human resources, the identity credential, central IT infrastructure, physical establishments '
       'such as offices, enrolment IT infrastructure, and information, education and communication. '
       'Together they made up over 90 percent of the cost in the start-up phase. Once a system runs, '
       'human resources are often greater than 80 percent of its annual cost. That is people, '
       'offices and machines, paid every year.'),
       foot='World Bank, 2018, page 3.',
       cue='Each figure with its unit, its year and its page. Text-only.')

d.rows('Two findings for a ministry tempted to go alone',
       [('The credential ranged from as low as 3% to over 40% of total cost (page 5).', ''),
        (('The way the government bought the system changed the overall cost by 25 percent to over 100 '
          'percent (page 7).'), '')],
       ('Two more findings matter for a ministry tempted to go alone. The credential, the card or '
       "document in the person's hand, ranged from as low as 3 percent to over 40 percent of the "
       'total cost. And the way the government bought the system changed the overall cost by 25 '
       'percent to over 100 percent. A sector scheme would carry those costs again, and would have '
       'to get its own purchase right again.'),
       cue='Figures as the study states them, with their pages. Text-only.')

d.table("Progressa: a learner identity of its own, or PNIA's service",
        ['Cost category', 'If MoEYS ran its own learner identity', "If MoEYS uses PNIA's service"],
        [3.9, 4.2, 3.8],
        [('Human resources', 'Staff to enrol and support learners', 'Connecting the service and testing it'),
         ('The identity credential', 'Cards to print and hand out', 'Carried by PNIA'),
         ('Central IT infrastructure', 'Central systems and their back-up', 'Carried by PNIA'),
         ('Physical establishments', 'Offices for enrolment', 'Carried by PNIA'),
         ('Enrolment IT infrastructure', 'Kits for the schools', 'Carried by PNIA'),
         ('Information, education and communication', 'Campaigns to explain it all', 'Carried by PNIA')],
        ('Here is Progressa. Suppose the ministry of education, MoEYS, gave every learner an identity '
       'of its own. Category by category it would need staff to enrol and support learners, cards to '
       'print and hand out, central systems with their back-up, offices for enrolment, kits for the '
       'schools, and campaigns to explain it all. The national identity authority, PNIA, already '
       "carries each of these. Using PNIA's service, the ministry carries one thing: the work of "
       'connecting its service and testing it. No figures are given here. The point is which costs '
       'would appear twice.'),
        foot='No figures: the point is which costs would appear twice.',
        cue='The worked example, built for Progressa. The table names categories and invents no cost.')

d.rows('Reuse what exists',
       [('A country that runs an identity system reuses it behind a services facade.', ''),
        ('An applicant can register on a service by signing in with the foundational identity.', '')],
       ('The specifications expect exactly this. A country that already runs an identity system, such '
       'as a population register or an identity document system, reuses it, equipped with a services '
       'facade, so that every other block can use it. The Registration specification goes the same '
       'way: an applicant can register on a service by signing in with the foundational identity. '
       'The country builds identity once, and every service uses it.'),
       cue='Text-only.')

d.recap(('Identity costs a great deal to build and more to run. A country pays that cost once. A '
         'ministry that builds its own pays it again.'),
        ('Find which identity costs a sector scheme would pay twice',
         ("a table of the study's six cost categories, each marked as duplicated or not by the proposed "
          'scheme')))
d.sources([('GovStack Identity Building Block specification, Version 2.0 (December 2025), sections 2.3.1 '
            'and 2.4'),
           'GovStack Registration Building Block specification, section 9.1.3',
           'World Bank, Understanding Cost Drivers of Identification Systems (2018), pages 3, 5 and 7'])


# ================================================================ 4.2
MSG = ('The published Identity block verifies who a person is, releases only what that person '
       'approves and issues no learner identity, so check what your identity authority really offers '
       'before you plan on it.')
d.video('4.2', 'The published Identity block, and what the identity authority offers today', MSG,
        (('Before a ministry plans a service on the national identity, someone has to answer a plain '
          'question.'),
         [('What does the identity authority actually offer today, and is it what the published Identity '
           'block offers?'),
          'The two are often not the same.']),
        ('Before a ministry plans a service on the national identity, someone has to answer a plain '
         'question. What does the identity authority actually offer today, and is it what the '
         'published Identity block offers? The two are often not the same.'))

d.rows('Foundational, not functional',
       [('Foundational identity: proof of who a person is, for many public and private services', "The block's subject."),
        ('Functional identity: proof for one purpose or one sector, such as education', 'Outside the block.')],
       ("The block's subject is foundational identity: the proof of who a person is, which serves a "
       'wide range of public and private services. Functional identity, the proof used for one '
       'purpose or one sector, is outside it, and the specification names education among the '
       'functional domains. So the block issues no learner identity. A learner number belongs to the '
       "education sector and its register. The block's work is to verify the person behind it."),
       cue='The scope of the block, as the specification states it. Text-only.')

d.rows('What the block offers, and to whom',
       [('Six services', ('Enrolment, identity verification, queries, credential management, federation with other '
          'identities, notifications.')),
        ('Four actors', 'The administrator, registered partners, users, subscribers.')],
       ('The specification lists six services the block offers to others: enrolment, identity '
       'verification, queries on identity data for authorised partners, credential management, '
       "federation with a person's other identities, and notifications of events such as a birth. "
       'Four kinds of actor use it: the administrator who runs it, registered partners, the users '
       'who manage their own identity, and subscribers to notifications. A service of the ministry '
       'of education is a registered partner.'),
       cue='Text-only list; no product screens.')

d.rows('The national number stays inside',
       [('The unique identity number is kept secret inside the block.', ''),
        ('Each relying service receives an identifier made for that service and that person.', '')],
       ('Two rules shape every connection. When a person is enrolled, the block creates a unique '
       'identity number and keeps it secret inside the block. Each relying service receives instead '
       'an identifier made for that service and that person. It is the same each time the person '
       'signs in to that service, and different from the one any other service receives. The person '
       'can be verified everywhere, and no service holds the national number.'),
       cue='Text-only.')

d.rows('How the published block verifies',
       [('The published interfaces are a minimal set; verification is OpenID Connect.', ''),
        (("The person's browser goes to the block's own screens, where the person signs in and approves "
          'what may be shared.'), ''),
        ("Only the calls for the token and for the person's information pass from server to server.", '')],
       ('The published interfaces are a minimal set, and verification among them is OpenID Connect, a '
       "common standard for signing in. In the published flow the person's browser is taken to the "
       "block's own screens. The person signs in there and approves what may be shared, and the "
       "block releases only that. Only the calls for the token and for the person's information pass "
       'from server to server. The specification names the Information Mediator for building blocks '
       "that talk to one another, not for the person's own sign-in."),
       cue='Three text boxes at most; the drawn sign-in (figure F10) belongs to the written guide.')

d.table('Progressa: what PNIA offers today, beside the published block',
        ["PNIA's present service on Linkup", 'The published Identity block'], [5.95, 5.95],
        [('A read of a person by national number', 'A sign-in through OpenID Connect'),
         ('No person present', 'The person present, approving what is shared'),
         ('Keyed on the national number', 'Each service receives its own identifier'),
         ('Only the examination authority may call it', 'Any registered client'),
         ("A contract of Progressa's own", 'The published minimal set')],
        ('Now Progressa. On Linkup, PNIA offers one service today: a read of a person by national '
       "number, which only the examination authority may call. It is a contract of Progressa's own. "
       'It works server to server, with no person present, and it is keyed on the national number. '
       'The published block asks the person to sign in, and gives each service its own identifier. '
       "The specification's requirements also ask for a query of a person's attributes, but its "
       "published interfaces include none. So PNIA's read is useful, and it is Progressa's own, not "
       'the published block.'),
        cue='The worked example, built for Progressa. Text-only.')

d.recap(('Verify the person, release only what the person approves, issue nothing. Then check what '
         'your authority runs today before you plan on it.'),
        ('Compare your identity provider with the published Identity block',
         ('a table of the interfaces your provider offers set against the published minimal set, with '
          'what is missing and what goes beyond it')))
d.sources([('GovStack Identity Building Block specification, Version 2.0 (December 2025), sections 2, 3, '
            '4, 5.1.2, 6, 8 and 9.1.1')])


# ================================================================ 4.3
MSG = ('A service connects to the identity block as its registered client, asks only for what it '
       'needs, and keeps the identifier the block gives to that service, never the national number.')
d.video('4.3', 'Generating the identity connection', MSG,
        (('A registration service that needs to know who the applicant is does not need an identity '
          'system of its own.'),
         [('It needs a connection: registered once with the identity block, asking for little, and '
           'keeping the right identifier.')]),
        ('A registration service that needs to know who the applicant is does not need an identity '
         'system of its own. It needs a connection: registered once with the identity block, asking '
         'for little, and keeping the right identifier.'))

d.rows('Register the service as a client',
       [('The client registration', "The service's name, the addresses the person is sent back to, the service's signing key."),
        ('Two published addresses', "The block's configuration, and the keys that sign its tokens."),
        ('The client identifier the block returns.', '')],
       ('The first step is to register the service as a client of the identity block. The client '
       'registration names the service, the addresses to which the block may send the person back '
       'after signing in, and the key the service signs its requests with. The block publishes two '
       'addresses every client needs: one where it describes its own configuration, and one where it '
       'publishes the keys that sign its tokens. The client identifier the block returns is the name '
       'the service carries from then on.'),
       cue='Configurations I1 and I2. Text-only.')

d.rows('Choose the flow, and ask for little',
       [('With claims', 'The person signs in, sees what is asked, approves, and the service receives those claims.'),
        ('Without claims: scope openid', 'Proof of the person only, no consent page.'),
        ('Ask only for what a field of your form needs.', '')],
       ('The specification gives two flows. With claims, the person signs in, sees what the service '
       'asks for, approves it, and the service receives those claims. Without claims, the service '
       "asks only for proof of the person, with the scope 'openid', and no consent page is shown. "
       'Scopes such as profile, address, email and phone each release a set of claims. Ask only for '
       'what a field of your form needs. A registration that needs a name and a date of birth should '
       'not ask for an address.'),
       cue='Configurations I3 and I4. Text-only.')

d.rows('How the person signed in, and the tokens',
       [('The ID token', 'A signed record of who signed in, for which service, and when.'),
        ('Its authentication context value', 'PIN or password, one-time code, biometrics, or a combination.'),
        ('The access token', 'The key to the approved claims.')],
       ('Each sign-in comes back with an ID token, a signed record of who signed in, for which '
       'service, and when. It carries an authentication context value that says how the person '
       'signed in: with a PIN or a password, with a one-time code, with biometrics, or with a '
       'combination of these. The country chooses which methods it offers. The service states which '
       'values it accepts, and refuses a token whose value is not on its list. The access token lets '
       'the service fetch the claims the person approved.'),
       cue=('Configuration I5. The six authentication context values of the specification may be listed '
       'as plain text in the written guide.'))

d.rows('Keep the identifier the block gives you',
       [("The token's subject", 'An identifier made for this service and this person.'),
        ('Never the national number, which stays secret inside the block.', ''),
        ('Progressa', "The learner register keeps a learner number of its own, with PNIA's identifier beside it.")],
       ("Now the rule that protects every learner. The token's subject is an identifier the block "
       'made for this service and this person. Keep that identifier, never the national number, '
       'which the specification says must stay secret inside the block. In Progressa, the learner '
       "register this course sets up behind PLR keeps a learner number of its own and stores PNIA's "
       "identifier beside it. The Digital Registries specification makes the mark for the owner's "
       "identifier optional, so the register's design must state it rather than assume it."),
       cue='Configuration I6. Text-only.')

d.storyboard('The check: one sign-in, verified',
       [('A test person signs in.', ''),
        ("The token's signature is verified against the published keys.", ''),
        ('Two services, two identifiers.', '')],
       ('The check that proves the connection is a sign-in, not a single call. An enrolled test '
       "person, never a real one, signs in on the block's own screen. The service receives a code, "
       "exchanges it for a token, and verifies the token's signature against the block's published "
       'keys. The check passes when the issuer, the audience, the expiry and the subject are present '
       'and valid. A second test service then signs in the same person, and the two identifiers must '
       'differ.'),
       cue=('Configuration I7 and checks I1 to I7. Until the checks pass, the slide stays as text and the '
       'storyboard stands in for the recording.'))

d.recap(('Register once, ask for little, and keep the identifier the block gives you. The national '
         'number never leaves the block.'),
        ('Draft the identity connection for one service',
         ('a draft client registration with the flow, the scopes and claims, and the accepted levels of '
          'authentication, each claim tied to a field of your form')))
d.sources([('GovStack Identity Building Block specification, Version 2.0 (December 2025), sections 4.1.2, '
            '6.1, 6.2, 7.2, 8.1.1, 8.2, 9.1.1 and 9.1.2'),
           ('GovStack Digital Registries Building Block specification, Version 3.0-alpha (June 2026), '
            'DRS-14')])


# ================================================================ 4.4
MSG = ('The Payments block is not a new payment system: it connects government programmes to the '
       'payment systems your country already has, so every programme pays through one shared '
       'connection.')
d.video('4.4', 'The Payments block and the payment systems behind it', MSG,
        (('A ministry that pays scholarships or school grants may be offered a payment system of its '
          'own.'),
         [('The published Payments block offers something else: one connection from government to the '
           'payment systems the country already runs.')]),
        ('A ministry that pays scholarships or school grants may be offered a payment system of its '
         'own. The published Payments block offers something else: one connection from government to '
         'the payment systems the country already runs.'))

d.rows('Not a new payment scheme',
       [('It connects to existing systems in the market; it does not build a new payment scheme.', ''),
        ("It sits between the government's account systems and the switching the market offers.", ''),
        ('Payment systems in the market are required for it to work.', '')],
       ('The GovStack Payments specification is clear about its own limits. The block provides the '
       'connections to existing systems in the market, and it does not set out to build a new '
       "payment scheme. It sits between the government's account systems, at the ministry of finance "
       'or the central bank, and the public or private switching the market already offers. Payment '
       'systems in the market, run by a public body, a quasi-public body or a commercial firm, are '
       'required for the block to work at all.'),
       cue="The specification's own words. Text-only.")

d.rows('What is inside the block',
       [(('An account mapper, payment request initiation, a payment gateway, vouchers, reconciliation, '
          'logs and an audit trail.'), ''),
        ('One gateway for the calls of other blocks.', '')],
       ('Inside the block are the parts a government needs to pay many people safely. An account '
       'mapper finds where each beneficiary is paid. Payment requests start there. A payment gateway '
       'lets banks and other financial service providers work together. There are vouchers, '
       'reconciliation, logs and an audit trail, all behind one gateway that receives the calls of '
       'other blocks. The block lets government programmes channel payments through one shared '
       'infrastructure to accounts at many providers.'),
       cue='Text-only list.')

d.rows('What stays outside the block',
       [('Settlement between institutions.', ''),
        (('Identification of people, and the checks on customers: know-your-customer and '
          'anti-money-laundering.'), '')],
       ('Just as important is what stays outside. Settlement between the financial institutions is '
       'handled outside the block. So are the identification and registration of people, and the '
       'checks that banks must make on their customers, such as the rules on knowing the customer '
       'and on money laundering. Those stay with the financial institutions and the systems the law '
       'gives them to. A vendor who says the block will do them is offering something the '
       'specification does not describe.'),
       cue='Text-only.')

d.chain('Progressa: the path of a payment',
        [('Programme account', []), ('Payments block', []), ('Payer bank', []),
         ('Payment systems in the market', ['PayPro among them']), ("The learner's account", [])],
        ("In Progressa the path runs like this. The programme's account sits with the government. The "
       "Payments block receives the batch from the calling service, finds each beneficiary's account "
       'through its account mapper, and hands the batch to the payer bank, the bank that holds the '
       "programme's account. The payer bank executes the payment through the payment systems in the "
       "market. PayPro, Progressa's payment provider, is one of those systems, and it stands behind "
       'the payer bank.'),
        dark=1, size=15,
        cue=('Configuration P6. Text boxes and arrows only; the drawn path (figure F11) belongs to the '
       'written guide.'))

d.rows('A public payment system, built to be shared',
       [('Pix, Brazil', ('Large banks were required to take part; the central bank both operates it and sets its rules '
          '(page 3).')),
        ('67% of adults had used it 15 months after launch (page 5).', '')],
       ('Brazil shows how much a shared payment system can carry. The Bank for International '
       'Settlements reports that its instant payment system, Pix, rested on two things: large banks '
       'were required to take part, and the central bank both operates the system and sets its '
       'rules. Fifteen months after launch, 67 percent of adults had used it. A government programme '
       'gains from such a system by connecting to it, not by building another.'),
       foot='Bank for International Settlements, Bulletin No 52, 2022.',
       cue='Each figure with its unit, date and page. Text-only.')

d.recap(('The block is a connection, not a new payment system. Every programme pays through it, to the '
         'systems the country already runs.'),
        ("Place your country's payment systems on the Payments block",
         ("a table that places each of your payment systems and programme accounts on the block's "
          'components, with what is missing')))
d.sources([('GovStack Payments Building Block specification, Version 3.0 (December 2025), sections 2, 4, '
            '5.1, 6.5, 6.17 and 9.1.3'),
           'Bank for International Settlements, BIS Bulletin No 52, 23 March 2022, pages 3 and 5'])


# ================================================================ 4.5
MSG = ('To pay through the block you configure the sender, the programme, the beneficiary, the '
       'payment and the route for its status, and the proof is one test payment whose status comes '
       'back.')
d.video('4.5', 'Generating the payment connection', MSG,
        ('Once the Payments block is installed, a service still cannot pay anyone.',
         [('Five things have to be set up first, and the proof that they work is one small test payment '
           'whose status comes back.')]),
        ('Once the Payments block is installed, a service still cannot pay anyone. Five things have to '
         'be set up first, and the proof that they work is one small test payment whose status comes '
         'back.'))

d.rows('The sender and the programme',
       [('1. The sender', 'The calling block, configured as an accepted source of payment requests.'),
        ('2. The programme', 'Its payment account and its currency, by ISO 4217 code.')],
       ('First, the sender. The block accepts payment requests only from a calling block it has been '
       'configured to accept as a source. Second, the programme. Each programme has its payment '
       'account and its currency. The specification processes each currency on its own, without '
       'conversion, and names currencies by their ISO 4217 codes. So a programme that pays in one '
       'currency must pay into accounts held in that same currency.'),
       cue='Configurations P1 and P2. Text-only.')

d.rows('The beneficiary',
       [(('3. The beneficiary, registered in the account mapper: a functional identifier, the way of '
          'payment, the financial address.'), ''),
        (("The mapper answers on a callback address; the service's own register keeps no payment "
          'details.'), '')],
       ('Third, the beneficiary. Before anyone is paid, the service registers each beneficiary in the '
       "block's account mapper: a functional identifier, the way of payment, such as a bank account "
       'or mobile money, and the financial address where the money goes. The mapper answers on a '
       "callback address the service gives it. The service's own register keeps no payment details. "
       "In Progressa the functional identifier is the learner's number in the learner register, "
       'never the national number.'),
       cue='Configuration P3. Text-only.')

d.rows('The payment',
       [('4. The payment, sent as a batch of one or many.', ''),
        ('At the least', ("The payer's identifier, the payee's identifier, the amount, the currency, the policy, and "
          "the sender's own transaction identifier."))],
       ('Fourth, the payment. The service hands the block a batch, which may hold one payment or '
       "many. The specification sets the least a payment request must contain: the payer's "
       "identifier, the payee's identifier, the amount, the currency, the policy, and the sender's "
       'own identifier for the transaction. The block gives each payment in the batch an instruction '
       'identifier of its own, so that every payment can be followed.'),
       cue='Configuration P4. Text-only.')

d.rows('The route for status, and the security around it',
       [(('5. The route for status: an address to which status is sent, and a call for the status of '
          'one payment'), 'Success, failed, in progress.'),
        ('Around all five', ('The interface published through the Information Mediator, secure connections, authorisation '
          'tokens, authenticated messages.'))],
       ('Fifth, the route for status. The service gives the block an address to which status is sent, '
       'and it can also ask for the status of one payment. A status is success, failed, or in '
       "progress. Around all five sits transport and security. The block's interface is published "
       'through the Information Mediator, every call travels over a secure connection with an '
       'authorisation token, and the messages about a payment are authenticated.'),
       cue='Configurations P5 and P7. Text-only.')

d.storyboard('The check: one test payment, and its status',
       [('One test beneficiary registered.', ''),
        ('A batch of one payment submitted.', ''),
        ('Its status returned.', '')],
       ('The check that proves the connection uses one test beneficiary, one test amount, and a test '
       'environment. The beneficiary is registered, and the callback confirms it. A batch of one '
       'payment is submitted. The service then asks for the status of that payment. The check passes '
       'when the answer is a status, success, failed or in progress, rather than an error, and when '
       'the same status arrives at the address configured for it.'),
       cue=('Checks P1 to P7. Until the checks pass, the slide stays as text and the storyboard stands in '
       'for the recording.'))

d.recap(('Sender, programme, beneficiary, payment, and the route for status. Then one test payment, '
         'and its status comes back.'),
        ('Draft the payment connection for one programme',
         ('a draft configuration of the source, the programme, the onboarding, the batch and the route '
          'for status, with every test value marked')))
d.sources([('GovStack Payments Building Block specification, Version 3.0 (December 2025), sections 4.16, '
            '5.1.14, 5.3.1, 5.4, 6.3, 6.4, 6.11, 6.14, 7.1.1, 7.2.1, 8.1.2, 8.1.4 and 9.1.1')])


# ================================================================ 4.6
MSG = ('Learner registration reuses the identity block and the scholarship payment reuses the '
       'Payments block, a saving visible only to someone who plans for the whole government, because '
       'inside one project building your own looks quicker.')
d.video('4.6', 'Reuse is the return on planning', MSG,
        (('Inside a single project, building your own identity check or your own payment link often '
          'looks quicker than waiting for a shared one.'),
         ['Seen from the whole government, it is the more expensive choice.']),
        ('Inside a single project, building your own identity check or your own payment link often '
         'looks quicker than waiting for a shared one. Seen from the whole government, it is the more '
         'expensive choice.'))

d.table('Two services, two shared blocks', ['Service', 'Reuses'], [5.4, 6.5],
        [('Learner registration', 'The identity block'),
         ('Scholarship payment', 'The Payments block')],
        ('Take two services in Progressa. Learner registration needs to know who the applicant is, so '
       'it reuses the identity block: one sign-in, one identifier for the service, and no identity '
       'system of its own. The scholarship payment needs to pay learners, so it reuses the Payments '
       'block: one account mapper, and one route through the payer bank to the payment systems the '
       'country already runs. Neither service builds what the country already has.'),
        size=20,
        cue='The worked example, built for Progressa. Text-only.')

d.table('What each would have built alone', ['Alone', 'With the shared block'], [5.95, 5.95],
        [('Its own enrolment, credentials, security and support staff',
          'One verification service used by many'),
         ("Its own links to every bank and mobile money provider, and every learner's account "
          'details in its register',
          'One shared infrastructure; the account mapper keeps payment details out of the register')],
        ('Alone, the registration service would need its own enrolment, credentials, security and '
       'support staff, which are the costs of an identity system. Alone, the scholarship service '
       "would need its own links to each bank and mobile money provider, and every learner's account "
       'details in its own register. With the shared blocks, one verification service is used by '
       "many, and the account mapper keeps payment details out of each programme's register. The "
       'identity service can serve other blocks, public services and private services alike.'),
        size=18,
        cue='The worked example continued; no cost figures. Text-only.')

d.rows('Education is already in the specifications',
       [('The payment of school fees.', ''),
        ('Vouchers that can be redeemed only at schools.', ''),
        ('Conditional transfers for school fee payment.', '')],
       ('Education is not a stretch for these blocks. The Payments specification itself names the '
       'payment of school fees, a group of vouchers that can be redeemed only at schools, and '
       'conditional transfers for school fee payment. The Registration specification asks that '
       'several registrations can be combined in one service, so that an applicant fills in one form '
       'instead of several. Each of these can run on the same two blocks.'),
       closing='Several registrations combined in one service.',
       cue='Text-only.')

d.rows('Why only planning sees the saving',
       [('Each project is funded for its own service, on its own date.', ''),
        ('The first ministry pays; the second, third and fourth reuse.', ''),
        ('PAERA', 'Identify shared services, workflows and data; whole-of-government; once-only.')],
       ('So why does the saving so often go unclaimed? Each project is funded to deliver its own '
       'service on its own date, and inside the project building its own looks quicker. The first '
       'ministry pays for a shared block, and the second, third and fourth reuse it. That sum exists '
       'only at the level of the whole government. PAERA asks planners to identify shared services, '
       'workflows and data that meet the needs of several agencies, and its principles of '
       'whole-of-government and once-only point the same way. A table of which services reuse which '
       'block gives the business side and IT one shared language for that decision.'),
       cue='Carries the planning-enables-re-use argument. Text-only.')

d.recap(('Two services reuse two blocks. The saving is real, but only someone who plans for the whole '
         'government can see it.'),
        ('Count the services that would reuse each shared block',
         ('a count, for each shared block, of the services that would reuse it, confirmed by their '
          'owners')))
d.sources(['PAERA v1.0, sections 3.3.3 and 5.2',
           'GovStack Identity Building Block specification, Version 2.0, sections 2.4 and 4.1.2',
           ('GovStack Payments Building Block specification, Version 3.0, sections 2, 4, 4.3, 6.3, 9.2.1 '
            'and 9.2.2'),
           'GovStack Registration Building Block specification, section 6.3.1.9'])

d.finish(expected=56)

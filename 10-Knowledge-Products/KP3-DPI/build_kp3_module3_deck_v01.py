#!/usr/bin/env python3
# Build the KP3 Module 3 video deck on the ITU template — v0.1.
# Content follows KP3_Module3_Script_Bundle_v0.1 (build_kp3_module3_v01.js): 7 videos, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7.
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

d = Deck(3, 'KP3_M3_Deck_v0.1.pptx')

# ---------------------------------------------------------------- COVER (edit slide 1)
d.cover(
    title_text='The Registry block',
    kicker='KP3 · Education DPI Roadmap · Module 3',
    blurb=('Seven standalone videos for the team that sets up the learner register: what a register is '
     'for, the five tiers a load passes through, the schema an AI assistant drafts and the owner '
     'publishes, the checks that stop a bad row, a published pattern followed in the open, the '
     'reconciliation of every load, and the register as a service others call.'),
    length='~30 mins across 7 videos (3.1 – 3.7)',
    audience=("The team that configures the register: the head of the ministry's ICT unit, the registry "
     'architect, the data lead or the integration lead'),
    panel_heading='WHAT THIS MODULE STANDS UP',
    panel_items=['One authoritative record of each learner',
                 'Raw · bronze · staging · silver · gold',
                 'A schema the owner publishes',
                 'Checks that stop a bad row',
                 'Every load accounted for',
                 'Access by role, every read logged'],
    panel_footer='5 tiers · 1 schema · 2 lines that must balance',
    note_text=('Cover for the combined Module 3 deck. Each section that follows is one standalone ~5 minute '
     'video, Architect-facing — the team that configures the learner register. Module 2 stood up '
     'the Registration block; this module stands up the register it writes to.'))

# ---------------------------------------------------------------- AGENDA (edit slide 2)
d.agenda(
    header='Module 3 — seven videos',
    items=[
        ('3.1  What a register is for: one authoritative record', '~5 min'),
        ('3.2  Five tiers between a messy file and a trusted record', '~5 min'),
        ("3.3  Generating the register's schema", '~5 min'),
        ('3.4  Quality checks that stop a bad row', '~5 min'),
        ('3.5  A published pattern, followed in the open', '~5 min'),
        ('3.6  Account for every load', '~5 min'),
        ('3.7  The register as a service others can use', '~5 min'),
    ],
    message_paras=[('A register gives every service one authoritative record of each learner, held as a service '
                    'with rules on who may read and change it.'),
                   ('Fill it through a disciplined load, check every row, account for every load, and let others '
                    'reach it only through its published interface.')],
    note_text=('Navigation slide for the combined deck; the videos ship standalone on YouTube. 3.1 is what '
     'the register is for. 3.2 to 3.6 are the register and its load — tiers, schema, checks, the '
     'Giga pattern, reconciliation. 3.7 opens the register to other services.'))


# ================================================================ 3.1
MSG = ('A register gives every service one authoritative record of each learner, held as a service '
       'with rules on who may read and change it, and filled through a disciplined load.')
d.video('3.1', 'What a register is for: one authoritative record', MSG,
        ('Count the lists of learners your country keeps today.',
         ['The schools keep one. The examination body keeps one.',
          'A donor project keeps a third.',
          ('Each list says something different about the same child, and nobody can say which list is '
           'right.')]),
        ('Count the lists of learners your country keeps today. The schools keep one. The examination '
         'body keeps one. A donor project keeps a third. Each list says something different about the '
         'same child, and nobody can say which list is right.'))

d.rows('Many lists, no answer',
       [('One donor funded a school census system.', ''),
        ('Another funded a cash transfer for girls.', ''),
        ('A third funded an examination system.', '')],
       ('This is how fragmentation looks in education. One donor funded a school census system. '
       'Another funded a cash transfer for girls. A third funded an examination system. Each project '
       'built its own list of learners, because each project had to deliver on time. Now a parent '
       'fills the same form at five counters, and the ministry cannot say how many learners it has.'),
       closing='Three lists of the same learners.',
       cue='The recognition moment. Text only; no donor is named.')

d.rows('A register is a service',
       [('A schema', ''), ('Versions', ''), ('An interface other systems call', ''),
        ('Rules on who may read and change', ''), ('A log of every change', '')],
       ('The GovStack Digital Registries specification describes the answer. A register is a trusted, '
       'authoritative service, and the single source of truth for the records it holds. Notice the '
       'word service. A register is not a spreadsheet on a shared drive. It has a schema, versions, '
       'an interface that other systems call, rules on who may read and change each record, and a '
       'log of every change. The same specification names the avoidance of duplicated registries '
       'across government as a standard. PAERA, the GovStack reference architecture, lists an '
       "education register among a country's main state registries, and calls state registries the "
       'authoritative source of information.'),
       lead=['a trusted, authoritative service', 'the single source of truth'],
       cue="The quoted words are the specification's own, from its section 2.")

d.panels('Two building blocks',
         ('Registration', ['A person applies, an officer decides.']),
         ('Digital Registry', ['Keeps the record and serves it to others.']),
         ('PAERA also says that putting a state registry online needs two building blocks. Registration '
       'is where a person applies and an officer decides. The Digital Registry keeps the record and '
       'serves it to others. That is why a register is built once and called by many services. '
       'Procurement rules can make each contract cheaper, but only whole-of-government planning '
       'makes re-use possible.'),
         closing='Built once, called by many services.',
         cue='Boxes and plain text only. Carries the re-use argument.')

d.rows('Progressa today',
       [('PLR', 'A member of the data exchange layer, with one enrolment service.'),
        ('No basis in the education act.', ''),
        ('No record for every learner. No quality rules. No link to the national identity.', ''),
        ('This module sets up the register behind PLR.', '')],
       ('Take Progressa, the fictional country of this course. Its learner registry, PLR, is already '
       'a member of the data exchange layer. It publishes one enrolment service, which only the '
       'examination authority may call. It is not yet the authoritative register the country needs. '
       'The education act gives it no basis. It does not hold one record for every learner. It has '
       'no quality rules and no link to the national identity. This module sets up the register '
       'behind PLR.'),
       cue='The present state of PLR, as the course states it. Nothing is said to run.')

d.chain('Filled through a disciplined load',
        [('Messy file', []), ('Checked', []), ('Approved by a person', []),
         ('Written to the register', [])],
        ('One more part matters. A register is only as good as the data that reaches it. Records '
       'arrive from schools in messy files. They are checked, approved by a person, and only then '
       'written to the register. UNICEF Giga publishes such a flow for its school data, and says it '
       'applies ideas from master data management to produce a single source of truth. The edition '
       'of the Digital Registries specification used here is an early release, version 3.0-alpha, '
       'and its numbers may change.'),
        foot='Digital Registries specification, version 3.0-alpha: an early release.',
        dark=2,
        cue='Text arrows only. The tiers themselves are the subject of 3.2.')

d.recap(('One authoritative record of each learner, held as a service with rules on who reads and '
         'changes it, and filled through a disciplined load. That is what the register is for.'),
        ("Draft the register's one-page charter",
         'a one-page register charter with six headings'))
d.sources([('GovStack Digital Registries specification, version 3.0-alpha (section 2; section 10.5.8; '
            'release notes)'),
           'PAERA v1.0, Annex 1 section A1.2.5, Annex 3 and section 3.4.2',
           'UNICEF Giga, giga-dagster, docs/README.md'])


# ================================================================ 3.2
MSG = ('Data reaches the register through five tiers, raw, bronze, staging, silver and gold, with '
       "quality checks at bronze and a person's approval before silver.")
d.video('3.2', 'Five tiers between a messy file and a trusted record', MSG,
        ('Every term, schools send lists of learners.',
         ['Some are spreadsheets, some are exports, some were typed from paper.',
          'Column names differ. Dates are written three ways.',
          ('Write such a file straight into the register, and the register becomes one more list nobody '
           'trusts.')]),
        ('Every term, schools send lists of learners. Some are spreadsheets, some are exports, some '
         'were typed from paper. Column names differ. Dates are written three ways. Write such a file '
         'straight into the register, and the register becomes one more list nobody trusts.'))

d.chain('Five tiers',
        [('Raw', ['The file as it arrived.']),
         ('Bronze', ['Columns mapped; quality checks run; rows split into passed and failed.']),
         ('Staging', ['A person approves or rejects each passed row.']),
         ('Silver', ['Approved rows merged.']),
         ('Gold', ['Merged, then split into a master table and a reference table.'])],
        ('UNICEF Giga publishes a flow for school data that solves this. It has five tiers. Raw is the '
       'file as it arrived, with wrong column names and wrong data types. At bronze, the columns are '
       'mapped, the quality checks run, and the rows are split into two tables: those that passed '
       'and those that failed. At staging, a person with the right permission approves or rejects '
       'each passed row. Approved rows are merged into silver. Silver is merged into gold, which is '
       'split into a master table and a reference table.'),
        dark=2, size=14,
        cue=("A text list, top to bottom. The tier names are Giga's own: raw, bronze, staging, silver, "
       'gold.'))

d.rows('Two things to get right',
       [('Raw is a tier of its own. The checks run at bronze.', ''),
        ('A person approves before silver. No program replaces that act.', '')],
       ('Two things in this flow are easy to get wrong. First, raw is a tier of its own, and the '
       'checks run at bronze. The file is kept as it came, so you can always show what a school '
       'sent. Second, a person approves the rows before they reach silver. That approval is an act '
       'of responsibility. A program can prepare it, but it cannot replace it.'),
       cue='The two errors the module corrects. Text only.')

d.rows('Where the tiers live',
       [('A common pattern', 'Layers that improve data step by step.'),
        ('GovStack', 'Linked databases and scheduled, rule-based automation.'),
        ('Schools to learners', "This course's own adaptation.")],
       ('Giga says its tiers were inspired by a common data pattern, which Databricks describes as '
       'layers that improve the structure and quality of data step by step. The GovStack Digital '
       'Registries specification does not describe tiers. It does let you keep several linked '
       'databases in one installation, and run scheduled, rule-based automation that moves records '
       'between them. So the tiers can be held as linked databases beside the register, or in a data '
       "platform in front of it. Applying Giga's school flow to learners is this course's own "
       'adaptation.'),
       cue="The adaptation is named as the course's own.")

d.storyboard('What the walkthrough will show',
       [('A seeded file of learners, with faulty rows, enters raw.', ''),
        ('Faulty rows stop at bronze, in the failed table.', ''),
        ('An officer approves the passed rows at staging.', ''),
        ('Only approved rows reach silver; gold holds the master records.', '')],
       ('Here is what a good run of this walkthrough shows. A seeded file of Progressa learners, with '
       'some faulty rows in it, enters raw. At bronze, the faulty rows go to the failed table. At '
       'staging, an officer of the learner registry approves the passed rows. The count of rows is '
       'read at every tier. A good run passes when only approved rows reach silver and gold holds '
       'the master records.'),
       cue='Replaced by the recorded segment once check RG9 passes. Until then, text only.')

d.recap(("Raw, bronze, staging, silver, gold: checks at bronze, a person's approval before silver, and "
         'only then a record the register can trust.'),
        ('Design the five tiers for a new source file',
         'a tier design table with the column mapping, the bronze checks and the staging approver'))
d.sources(['UNICEF Giga, giga-dagster, docs/dataflow.md',
           "Databricks, 'What is Medallion Architecture?'",
           'GovStack Digital Registries specification, version 3.0-alpha, DRS-2 and DRS-19'])


# ================================================================ 3.3
MSG = ('The register is set up from one schema file, with its fields, rules, links and key, which an '
       'AI assistant drafts from the law and the form and the owner corrects and publishes.')
d.video('3.3', "Generating the register's schema", MSG,
        ('A register is set up from one file.',
         [('The file names the register, lists its fields, states the rules on each field, links it to '
           'other registers and names its key.'),
          'Get this file right, and the rest of the build follows from it.']),
        ('A register is set up from one file. The file names the register, lists its fields, states '
         'the rules on each field, links it to other registers and names its key. Get this file right, '
         'and the rest of the build follows from it.'))

d.rows('What the schema file holds',
       [('The register', 'Name, short code, owner, retention, classification, state.'),
        ('Fields', 'Name, type, required, unique, minimum, maximum.'),
        ('Links', 'Each learner to a school, with a rule on deletion.'),
        ('Versions', 'Each publication is a new version.'),
        ('Format', 'JSON or YAML, to export and to import.')],
       ('The Digital Registries specification says what goes in the file. The register has a name, a '
       'unique short code, an owning body, a retention policy, a classification and a lifecycle '
       'state, from draft to published to archived. Each field has a name and a type, such as text, '
       'date or a list of values. A field can be required or unique, with a minimum and a maximum. A '
       'link joins one database to another, for example each learner to a school, with a rule for '
       'what happens when the school is deleted. Every publication creates a new version. The schema '
       'can be exported and imported as JSON or YAML.'),
       cue=("Plain text. The terms are the specification's: name, short code, metadata, lifecycle state, "
       'field type, link, version.'))

d.rows('The key is not the national number',
       [('The register keeps a learner number of its own.', ''),
        ('Beside it, the identifier the identity authority gives to the service.', ''),
        ('Never the national identity number.', '')],
       ("One choice needs the owner's decision: the key. It is tempting to key the register on the "
       'national identity number. Do not. The GovStack Identity specification keeps that number '
       'secret inside the identity block. A service that checks a person signs the person in, with '
       "the person present, and receives an identifier made for that service alone. So Progressa's "
       'register keeps a learner number of its own, and stores beside it the identifier that the '
       'identity authority, PNIA, gives to the service. It never stores the national number.'),
       cue='The one decision the owner must take. Text only.')

d.rows('Drafted by AI, decided by the owner',
       [('Inputs', 'The education act, the registration form, the services that will read the register.'),
        ('Every rule traced to the line it came from.', ''),
        ('The owner decides the key and the personal-data fields, corrects and publishes.', '')],
       ('An AI assistant drafts this file well, because its inputs are written down: the education '
       'act, the registration form, and the list of services that will read the register. The prompt '
       'asks it to trace every rule to the line it came from. The owner then decides the key and the '
       'fields that hold personal data. The marks for personal data are optional in the '
       'specification, so no check depends on them. The owner corrects the draft and publishes it. '
       'The file states the edition of the specification it implements: version 3.0-alpha, an early '
       'release.'),
       cue='Who does what: the assistant drafts, the owner decides.')

d.storyboard('What the walkthrough will show',
       [('The schema drafted, and the register created from it.', ''),
        ('The register listed and read back', 'Schema, metadata, state published.'),
        ('A record without a required field', 'Refused.'),
        ('A second record with the same learner number: refused.', '')],
       ('The walkthrough of this subtopic shows the schema drafted, and the register created from it '
       'through the published interface. The check lists the registers and reads this one back: its '
       'schema, its metadata and the state published. A record without a required field must be '
       'refused, and so must a second record with the same learner number.'),
       cue=('Replaced by the recorded segment once checks RG1 to RG4 and RG12 pass. Until then, text '
       'only.'))

d.recap(('One schema file, drafted by AI from the law and the form, corrected and published by the '
         "owner, and keyed on the register's own number."),
        ("Draft the register's schema file",
         'a draft schema file in YAML with a trace table'))
d.sources([('GovStack Digital Registries specification, version 3.0-alpha (DRS-1, DRS-2, DRS-3, DRS-4, '
            'DRS-10, DRS-11, DRS-13, DRS-14, DRS-17, DRS-28, DRS-30, section 8.2)'),
           ('GovStack Identity specification, version 2.0 (sections 4.1.1 and 4.1.2, requirement 11 of '
            'section 6.1)')])


# ================================================================ 3.4
MSG = ('Every row is checked at the bronze tier, and a row that fails is set aside with its reason, '
       'so that the people who sent the data know what to correct.')
d.video('3.4', 'Quality checks that stop a bad row', MSG,
        ("A head teacher sends the term's list of learners.",
         ['Three rows are wrong.',
          'If the register takes them, every service that reads it inherits the mistakes.',
          'If the register drops them silently, the school never learns what to fix.']),
        ("A head teacher sends the term's list of learners. Three rows are wrong. If the register "
         'takes them, every service that reads it inherits the mistakes. If the register drops them '
         'silently, the school never learns what to fix.'))

d.rows('Checked at bronze',
       [('Every row is checked before anyone approves it.', ''),
        ('Rows split into two tables', 'Passed and failed.'),
        ('Rules on each field', 'Required, unique, minimum, maximum.')],
       ("So every row is checked at the bronze tier, before anyone approves it. Giga's published flow "
       'runs its data-quality checks at bronze and splits the rows into two tables: those that '
       'passed and those that failed. The GovStack Digital Registries specification names validation '
       'rules, deduplication and data-quality controls among the functions of a register. It lets '
       'each field carry rules such as required, unique, minimum and maximum. The checks at bronze '
       'apply the same rules before a row comes near the register.'),
       cue="The split into passed and failed is Giga's; the field rules are the specification's.")

d.table('Three faulty rows', ['Row', 'Reason'], [5.4, 6.5],
        [('The same learner twice', 'Duplicate learner number'),
         ('Date of birth empty', 'Missing date of birth'),
         ('Age three, grade six', 'Age outside the range for the grade')],
        ('Look at three faulty rows from a Progressa school. In the first, the same learner appears '
       'twice, with the same learner number. In the second, the date of birth is empty, and it is '
       'required. In the third, the date of birth says the child is three years old and in grade '
       'six. Each row goes to the failed table with its reason in plain words. Who sets the limits, '
       "such as the range of ages for each grade? The register's owner, not the programmer. A range "
       'is a policy choice.'),
        cue='Invented values for Progressa. Text only.')

d.rows('The sender is told',
       [('A failed row is kept, with its reason.', ''),
        ('A report goes to the person who sent the file.', ''),
        ('The share of failed rows, term by term.', '')],
       ("A failed row is not thrown away, and it is not a secret. In Giga's flow, a data-quality "
       'report is generated and emailed to the person who uploaded the file. Do the same. The head '
       'teacher gets a short list: which rows failed, and what to correct. The next file comes back '
       'cleaner. Over a few terms, the schools learn the rules, and the share of failed rows falls. '
       'That share is worth reporting to your director every term.'),
       cue='The feedback loop to the school.')

d.storyboard('What the walkthrough will show',
       [('A seeded load with three faulty rows.', ''),
        ('Each lands among the failed rows, with its reason.', ''),
        ('No faulty row reaches staging.', '')],
       ('The walkthrough of this subtopic shows a seeded load that contains three faulty rows: a '
       'duplicate, a missing required value and a value outside its range. A good run passes when '
       'each of the three lands among the failed rows with its reason stated, and no faulty row '
       'reaches staging.'),
       cue='Replaced by the recorded segment once check RG10 passes. Until then, text only.')

d.recap(('Check every row at bronze, set each failing row aside with its reason, and send the school '
         'the list of what to correct.'),
        ('Propose the checks and the failure messages',
         'a table of checks with one test row for each check'))
d.sources(['UNICEF Giga, giga-dagster, docs/dataflow.md (the bronze tier)',
           'GovStack Digital Registries specification, version 3.0-alpha (section 4.1; DRS-17)'])


# ================================================================ 3.5
MSG = ("Giga's School Master Data shows the pattern at work for schools, and you may follow it for "
       'learners if you say what you took and changed and copy no unlicensed code.')
d.video('3.5', 'A published pattern, followed in the open', MSG,
        ('A vendor tells you their data platform is unique.',
         ['A donor asks whether your register follows any known practice.',
          ('Both questions have the same good answer: a published pattern, followed in the open, with '
           'every change you made written down.')]),
        ('A vendor tells you their data platform is unique. A donor asks whether your register follows '
         'any known practice. Both questions have the same good answer: a published pattern, followed '
         'in the open, with every change you made written down.'))

d.rows('What Giga publishes',
       [('The aim', 'One source of truth, the School Master Data.'),
        ('Five tiers', 'Raw, bronze, staging, silver, gold.'),
        ('Gold split into a master table and a reference table.', '')],
       ('UNICEF Giga runs a data platform for school data. Its aim, in its own words, is to apply '
       'concepts from master data management and data governance to produce a single source of '
       'truth: the School Master Data. Its documentation shows five tiers, checks at bronze, a '
       "person's review at staging, and a gold tier split into a master table and a reference table. "
       'Giga says its tiers were inspired by the medallion pattern that Databricks describes. This '
       'is a real, published example of the pattern this module follows.'),
       cue="Giga's own words for its aim. No Giga logo, no screenshot of the repository.")

d.panels('What the learner register takes, and what it changes',
         ('Takes', ['The five tiers', 'The checks at bronze', 'The review before silver',
                    'The split of gold']),
         ('Changes', ['Learners in place of schools', 'A register as the destination']),
         ('Follow it, and say what you took. The learner register takes the five tiers, the checks at '
       "bronze, the person's review before silver, and the split of gold into master and reference. "
       "Then say what you changed. Giga's records are schools; Progressa's are learners. Giga's gold "
       "tier is its destination; Progressa's destination is a register, a service with its own rules "
       "of access. Applying a pattern built for schools to learners is this course's own adaptation, "
       'and it should be named as such.'),
         cue="The worked example: Giga's flow as published beside the table built for Progressa.")

d.rows('Follow the pattern, not the code',
       [('No licence', 'No permission to copy.'),
        ('Cite the pattern. Write your own code.', '')],
       ("One more line matters. Neither of Giga's two public repositories carries a licence. A "
       'repository without a licence gives no permission to copy its code, even when anyone can read '
       'it. So you may read the documentation, cite the pattern and follow it, and your team writes '
       "its own code. Put the citation in your design document and in the register's files, so that "
       'an auditor or a donor can see where the pattern came from.'),
       cue='The licence point, stated plainly.')

d.rows('Why this helps you',
       [('Easier to defend than a pattern a vendor invented.', ''),
        ('The next vendor can follow the same pattern.', ''),
        ('Written choices outlive the team and the project.', '')],
       ('This helps you in the room where the money is decided. A pattern that a global programme has '
       'published and runs is easier to defend than one your vendor invented. It also keeps you '
       'free: the next vendor can follow the same published pattern. And because your choices are '
       'written down, they survive a change of team, a change of vendor and the end of a donor '
       'project.'),
       cue='The case to make upward.')

d.recap(("Follow Giga's published pattern for learners, say what you took and what you changed, and "
         'write your own code.'),
        ("Read a repository's documentation and licence before you follow it",
         'a reuse note in three parts'))
d.sources([("UNICEF Giga, giga-dagster, docs/dataflow.md and docs/README.md, and the repository's licence "
            'field'),
           "Databricks, 'What is Medallion Architecture?'"])


# ================================================================ 3.6
MSG = ('After every load, show that the rows received equal the rows passed plus the rows set aside, '
       'and that the rows approved equal the records the register added or changed.')
d.video('3.6', 'Account for every load', MSG,
        (('After a load, a director asks a simple question: did every learner the schools sent reach '
          'the register?'),
         ['Most teams answer with a feeling.',
          'You can answer with two lines of arithmetic, and show your working.']),
        ('After a load, a director asks a simple question: did every learner the schools sent reach '
         'the register? Most teams answer with a feeling. You can answer with two lines of arithmetic, '
         'and show your working.'))

d.rows('Two lines',
       [('Rows received = rows passed + rows set aside', ''),
        ('Rows approved = records added + records changed', '')],
       ('The first line is about the checks. The rows received must equal the rows that passed plus '
       'the rows set aside at bronze. If they do not, rows were lost or counted twice inside the '
       'load. The second line is about the register. The rows approved at staging must equal the '
       'records the register added plus the records it changed. If they do not, the load did not '
       'write what the officer approved.'),
       big=True,
       cue='The two equations, nothing else on the slide.')

d.rows('Where the numbers come from',
       [('The change log', 'Every change, with the value before and after.'),
        ('Import, and the update of entries.', ''),
        ('Statistical queries', 'How many records.'),
        ('An operation that says whether a record exists.', '')],
       ('The numbers come from things the GovStack Digital Registries specification already requires. '
       'The register logs every change, and shows the value before and after. It can import data and '
       'update entries. It answers statistical queries, such as how many records it holds, and it '
       'has an operation that says whether a given record exists. So the reconciliation needs no new '
       'system. Count the tiers, read the log, and read the record count before and after.'),
       cue='Each row is a requirement or an operation of the specification.')

d.rows('An honest note, and a hard rule',
       [("No published source describes this check. It is this course's own practice.", ''),
        ('A line that does not balance stops the next load.', '')],
       ('Be clear with your readers on one point. No published source describes this reconciliation, '
       "neither the GovStack specification nor Giga's flow. It is the practice of the team that "
       'wrote this course, built on what the specification does publish. Present it to your auditors '
       'that way; it is simple enough for them to check. And keep one hard rule. A line that does '
       'not balance stops the next load until someone finds where the rows went and writes down the '
       'cause.'),
       cue="Says plainly that the practice is this course's own.")

d.storyboard('What the walkthrough will show',
       [('One load on one sheet', 'Received, passed, set aside, approved, added, changed.'),
        ('The record count before and after.', ''),
        ('A sample of records confirmed to exist.', '')],
       ('The walkthrough of this subtopic shows one load of Progressa learners reconciled on a single '
       "sheet: rows received, passed, set aside, approved, added and changed, and the register's "
       'record count before and after. A good run passes when both lines balance and a sample of the '
       'loaded records is confirmed to exist in the register.'),
       cue='Replaced by the recorded segment once checks RG7 and RG11 pass. Until then, text only.')

d.recap(('Received equals passed plus set aside; approved equals added plus changed. Show both lines '
         'after every load.'),
        ('Write the reconciliation note of a load',
         'a reconciliation note with both lines computed'))
d.sources([('GovStack Digital Registries specification, version 3.0-alpha (DRS-7, DRS-21, DRS-24, DRS-26; '
            "sections 8.1 and 8.2). The reconciliation is this course's own practice")])


# ================================================================ 3.7
MSG = ('Other services reach the register only through its published interface, each seeing no more '
       'than its role allows, and every learner or parent can see who read their record.')
d.video('3.7', 'The register as a service others can use', MSG,
        (('Once the register holds good records, every office will want them: the scholarship office, '
          'the school feeding programme, the examination authority.'),
         ['If each gets a copy, you are back to many lists.',
          'If each calls the register, you keep one.']),
        ('Once the register holds good records, every office will want them: the scholarship office, '
         'the school feeding programme, the examination authority. If each gets a copy, you are back '
         'to many lists. If each calls the register, you keep one.'))

d.rows('Only through the published interface',
       [('No one reaches the register directly.', ''),
        ('Services generated for each register, described with OpenAPI, listed with examples.', ''),
        ('Not yet published', 'Bulk operations, archive, event subscription.')],
       ('The GovStack Digital Registries specification is clear. Applicants do not reach the register '
       'directly. They come through other building blocks, such as the Registration block, with the '
       'Information Mediator between them. Each register generates services for creating, reading '
       'and updating records, described with OpenAPI, and lists them with a description and an '
       'example for every field. The specification also asks for bulk operations, archive and event '
       'subscription, but publishes no operation for them yet. Do not promise them to another '
       'ministry as published interfaces.'),
       cue='The third row says what is not yet published.')

d.rows('Through the data exchange layer',
       [('Each call passes through the data exchange layer, Linkup.', ''),
        ('The provider of a service decides who may call it.', '')],
       ('In Progressa, these calls pass through Linkup, the data exchange layer. The Information '
       'Mediator specification sets the rule: a service is registered with its OpenAPI description, '
       'a consumer must ask for the service it wants, and the provider of that service decides '
       'whether the consumer may call it. So the learner registry, not the caller, decides who '
       'reaches the register at all.'),
       cue='Text only; Linkup is named, nothing is said to run.')

d.rows('No more than the role allows',
       [('The registration service', 'Create and update.'),
        ('Every other service', 'Read only, and only the fields it needs.'),
        ('A parent', "Delegated access to their child's record.")],
       ('Inside the register, access is decided per service, per record and per field. A rule can '
       'rest on a role, an attribute, a policy or consent, and the specification names delegated '
       'access for a guardian or a parent. In Progressa, the registration service may create and '
       'update learner records. Every other service may only read, and only the fields it needs. A '
       'table of access rules gives the business side and IT one shared language, so a decision '
       "about a child's data means the same thing in both rooms."),
       cue='Carries the shared-language argument.')

d.rows("Who read my child's record?",
       [('Every read of personal data is logged.', ''),
        ('Every data owner may see who read their data.', ''),
        ('Deleting a record keeps the logical record.', '')],
       ('The register logs every read of personal data: which record, which field, who read it and '
       'when. Every data owner has the right to see who looked at their personal data, and the '
       'register offers an interface for that report. For a learner who is a child, the parent sees '
       'it. Few features build more trust. And deleting a record keeps the logical record, so the '
       'history stays.'),
       cue='The trust point for parents.')

d.storyboard('What the walkthrough will show',
       [('An update from a read-only service', 'Refused.'),
        ('The same update from the registration service: accepted.', ''),
        ("The parent's report", 'One read, the reader, the time.')],
       ('The walkthrough of this subtopic shows an update sent by a service that may only read, and '
       "refused. The same update sent by the registration service is accepted. Then the parent's "
       "report shows the one read of the learner's record, who read it and when. A good run passes "
       'on all three.'),
       cue='Replaced by the recorded segment once checks RG5 and RG6 pass. Until then, text only.')

d.recap(('One interface, each service seeing only what its role allows, and every parent able to see '
         "who read their child's record."),
        ("Draft the register's table of access rules",
         'an access-rules table, field by field, with test cases'))
d.sources([('GovStack Digital Registries specification, version 3.0-alpha (sections 4.2, 5.2, 8 and '
            '9.2.1; DRS-5, DRS-6, DRS-8, DRS-21, DRS-33, DRS-34, DRS-35, DRS-37)'),
           'GovStack Information Mediator specification, version 1.1.1 (sections 6.2 and 6.3)',
           'OpenAPI Specification 3.0.3'])

d.finish(expected=61)

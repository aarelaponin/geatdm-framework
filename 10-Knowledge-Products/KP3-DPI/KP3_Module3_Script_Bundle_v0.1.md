<!-- GENERATED from build_kp3_module3_v01.js by bundle_to_md.py — do not hand-edit; edit the build script and regenerate. -->

# KP3 Module 3 — Video Script Bundle v0.1 (ITU-aligned)

| Field | Value |
| --- | --- |
| Document | Video script bundle for Module 3 of KP3 |
| Version | v0.1 — written on the KP3 outline and content plan, version 0.3 |
| Date | 1 October 2026 |
| Module persona | A (Architect) — the team that configures the service: the head of the ministry's ICT unit, the registry architect, the data lead or the integration lead |
| Subtopics | Seven subtopics (3.1 – 3.7), each shipped as one ~5-minute standalone video, and five storyboards for the demonstration segments of 3.2, 3.3, 3.4, 3.6 and 3.7 |
| Module runtime | Approximately 26 minutes across seven standalone videos |
| Build artefacts | Configurations RG1 to RG13 of the learner register. They are shown here as two specimens, written for Progressa in the terms of the specification and marked 'specimen, not yet run': specimens/registry/plr-learner-register.schema.yaml and specimens/registry/plr-load-tiers.yaml |
| Prepared by | FiscalAdmin OÜ |

This bundle holds the seven video scripts of Module 3 of KP3 — Education DPI Roadmap. Module 3 sets up the learner register of Progressa, the fictional country of KP3, and fills it. It keeps two things apart. The first is the published building block: the GovStack Digital Registries specification describes a register as a service, with a schema, versions, interfaces, rules of access and logs. The second is the load: how data from schools reaches the register through checked tiers, which the specification does not describe and which follows the flow that UNICEF Giga publishes for its School Master Data. The register is written in the Architect register: plain English at an eighth-grade level, with the configuration explained one level deeper than for a minister. Each subtopic leads with what the listener can do with it. The seven videos are numbered to ITU's topic and subtopic convention (3.1 to 3.7), and each stands alone. All slide specifications follow ITU's text-only branding. Each subtopic carries an AI usage tip with a copy-paste Claude prompt. External references use the convention 'Find the link in the description'.

## 1. Document context

### 1.1 What this document is

This document collects the seven video scripts that make up Module 3 of Knowledge Product 3, Education DPI Roadmap, with their on-screen slide specifications, their AI usage tips and their metadata, and a storyboard for each of the five demonstration segments. Each script is written from its subtopic in the KP3 outline and content plan: the single message, the sources, the worked example, the AI usage tip and the configurations it carries are the outline's.

### 1.2 What Module 3 teaches

Module 3 teaches the team that configures the service to set up a register from a schema file, to load it through checked tiers, to account for every load, and to open it to other services under rules. In Progressa, the learner registry PLR has been a member of the data exchange layer, Linkup, since the interoperability work of KP2, with one enrolment service. It is not yet the authoritative learner register the country needs. Module 3 sets up the register behind PLR. The register is taught from the GovStack Digital Registries specification in its edition 'Version 3.0-alpha; June 2026', which is an early release whose numbers may change, so every requirement is cited by its number and its short title together. The load is taught from the five tiers of Giga's published data flow — raw, bronze, staging, silver and gold — with the quality checks at bronze and a person's approval before silver. Applying a flow built for schools to learners is KP3's own adaptation, and the reconciliation of each load is presented as the team's own practice, because no published source describes it.

### 1.3 What runs, and what does not

Nothing of the build runs today. The thirteen configurations of the learner register, RG1 to RG13, are built as a separate piece of work. Until each is built and its check has passed, it is shown as a specimen: a file written for Progressa in the terms of the specification, marked 'specimen, not yet run'. The scripts say what each configuration contains, what its check runs and what counts as a pass; they do not say that anything has run. Each demonstration segment exists as a storyboard, which is what the recording will follow. When a check passes on the built configuration, the specimen is replaced by the file as built, the segment is recorded, and the script gains one sentence that states the result and its date.

### 1.4 How to read this document

Section 2 gives Module 3 at a glance. Section 3 contains the full script of each subtopic, with its slide specification, its on-screen practice box, its AI usage tip and its metadata; the storyboard of a demonstration segment follows the subtopic it belongs to. Section 4 collects the production notes, including the two specimens. Section 5 records the open calibration items. Section 6 is the aggregate list of external links for ITU's production pipeline.

Within each script, italic shaded blocks are on-screen visual or production cues; regular paragraphs are the spoken voice-over. The slide specification, the practice box, the AI usage tip and the metadata follow the script.

## 2. Module 3 at a glance

Seven standalone videos in the Architect register, about twenty-six minutes in all. Each video has one single message and can be found and understood on its own; the playlist helps navigation but is not needed to follow any one video.

| # | Title | Single message | Runtime |
| --- | --- | --- | --- |
| 3.1 | What a register is for: one authoritative record | A register gives every service one authoritative record of each learner, held as a service with rules on who may read and change it, and filled through a disciplined load. | ~4 min |
| 3.2 | Five tiers between a messy file and a trusted record | Data reaches the register through five tiers, raw, bronze, staging, silver and gold, with quality checks at bronze and a person's approval before silver. | ~4 min |
| 3.3 | Generating the register's schema | The register is set up from one schema file, with its fields, rules, links and key, which an AI assistant drafts from the law and the form and the owner corrects and publishes. | ~4 min |
| 3.4 | Quality checks that stop a bad row | Every row is checked at the bronze tier, and a row that fails is set aside with its reason, so that the people who sent the data know what to correct. | ~4 min |
| 3.5 | A published pattern, followed in the open | Giga's School Master Data shows the pattern at work for schools, and you may follow it for learners if you say what you took and changed and copy no unlicensed code. | ~4 min |
| 3.6 | Account for every load | After every load, show that the rows received equal the rows passed plus the rows set aside, and that the rows approved equal the records the register added or changed. | ~3 min |
| 3.7 | The register as a service others can use | Other services reach the register only through its published interface, each seeing no more than its role allows, and every learner or parent can see who read their record. | ~4 min |

## 3. The scripts

## 3.1 Subtopic 3.1 — What a register is for: one authoritative record

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the team that configures the service: the head of the ministry's ICT unit, the registry architect, the data lead or the integration lead |
| Target runtime | ~4 min (≈466 spoken words) |
| PAERA anchor | Digital Registries 3.0-alpha, DR §2 and DR §10.5.8; PAERA v1.0 Annex 1, A1.2.5, Annex 3 and §3.4.2 |

> **Single message —** _A register gives every service one authoritative record of each learner, held as a service with rules on who may read and change it, and filled through a disciplined load._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'What a register is for: one authoritative record'. Voice-over begins._

Count the lists of learners your country keeps today. The schools keep one. The examination body keeps one. A donor project keeps a third. Each list says something different about the same child, and nobody can say which list is right.

> _Slide 2 — Title: 'Many lists, no answer'. Body, three text rows: 'One donor funded a school census system.' 'Another funded a cash transfer for girls.' 'A third funded an examination system.' Closing line: 'Three lists of the same learners.'_

This is how fragmentation looks in education. One donor funded a school census system. Another funded a cash transfer for girls. A third funded an examination system. Each project built its own list of learners, because each project had to deliver on time. Now a parent fills the same form at five counters, and the ministry cannot say how many learners it has.

> _Slide 3 — Title: 'A register is a service'. Body, two quoted lines from the GovStack Digital Registries specification: 'a trusted, authoritative service' and 'the single source of truth'. Below them, five text rows: 'a schema', 'versions', 'an interface other systems call', 'rules on who may read and change', 'a log of every change'._

The GovStack Digital Registries specification describes the answer. A register is a trusted, authoritative service, and the single source of truth for the records it holds. Notice the word service. A register is not a spreadsheet on a shared drive. It has a schema, versions, an interface that other systems call, rules on who may read and change each record, and a log of every change. The same specification names the avoidance of duplicated registries across government as a standard. PAERA, the GovStack reference architecture, lists an education register among a country's main state registries, and calls state registries the authoritative source of information.

> _Slide 4 — Title: 'Two building blocks'. Body, two text boxes side by side: 'Registration — a person applies, an officer decides' and 'Digital Registry — keeps the record and serves it to others'. Footer line: 'Built once, called by many services.'_

PAERA also says that putting a state registry online needs two building blocks. Registration is where a person applies and an officer decides. The Digital Registry keeps the record and serves it to others. That is why a register is built once and called by many services. Procurement rules can make each contract cheaper, but only whole-of-government planning makes re-use possible.

> _Slide 5 — Title: 'Progressa today'. Body, four text rows: 'PLR: a member of the data exchange layer, with one enrolment service.' 'No basis in the education act.' 'No record for every learner. No quality rules. No link to the national identity.' 'This module sets up the register behind PLR.'_

Take Progressa, the fictional country of this course. Its learner registry, PLR, has been a member of the data exchange layer since the interoperability work. It publishes one enrolment service, which only the examination authority may call. It is not yet the authoritative register the country needs. The education act gives it no basis. It does not hold one record for every learner. It has no quality rules and no link to the national identity. This module sets up the register behind PLR.

> _Slide 6 — Title: 'Filled through a disciplined load'. Body, one line: 'Messy file → checked → approved by a person → written to the register.' Note at the foot: 'Digital Registries specification, version 3.0-alpha: an early release.'_

One more part matters. A register is only as good as the data that reaches it. Records arrive from schools in messy files. They are checked, approved by a person, and only then written to the register. UNICEF Giga publishes such a flow for its school data, and says it applies ideas from master data management to produce a single source of truth. The edition of the Digital Registries specification used here is an early release, version 3.0-alpha, and its numbers may change.

> _Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'One authoritative record of each learner, held as a service with rules, and filled through a disciplined load.' The on-screen practice box sits below it._

One authoritative record of each learner, held as a service with rules on who reads and changes it, and filled through a disciplined load. That is what the register is for.

> _Slide 8 — Title: 'Sources'. Body: GovStack Digital Registries specification, version 3.0-alpha (section 2; section 10.5.8; release notes); PAERA v1.0, Annex 1 section A1.2.5, Annex 3 and section 3.4.2; UNICEF Giga, giga-dagster, docs/README.md. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'What a register is for: one authoritative record'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 3.1) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Many lists slide. Three text rows, one per donor-funded list, and a closing line. | The recognition moment. Text only; no donor is named. |
| 3 | A register is a service. Two quoted lines from the specification and five text rows. | The quoted words are the specification's own, from its section 2. |
| 4 | Two building blocks. Two text boxes side by side and a footer line. | Boxes and plain text only. Carries the re-use argument. |
| 5 | Progressa today. Four text rows. | The present state of PLR, as the course states it. Nothing is said to run. |
| 6 | Filled through a disciplined load. One line with arrows, and the edition note. | Text arrows only. The tiers themselves are the subject of 3.2. |
| 7 | Single-sentence summary slide, with the on-screen practice box. | The take-home line. The practice box is shown, not narrated. |
| 8 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Draft the register's one-page charter.** The prompt in the companion material gives you a one-page register charter with six headings. Before the next video.

### AI usage tip — Draft the register's one-page charter

**What the prompt does:** Before anyone designs a schema, the ministry needs to agree on paper what the register is for. This prompt drafts a one-page charter that the owner, the legal unit and the ICT unit can read together, and lists what the owner must confirm.

**Prompt template (copy-paste into Claude):**

```text
Below are [1] the articles of our education act on learner records [paste], [2] the ministry's brief for the learner register [paste], and [3] the list of services that will use the register, with what each needs [paste]. Draft a one-page charter for the register under six headings: (1) Purpose — what the register is the authoritative record of; (2) Owner — the body that answers for it; (3) Content — the facts it holds about each learner; (4) Who writes — which service may create and change records, and on whose decision; (5) Who reads — which services may read, and which fields each needs; (6) Retention — how long records are kept and what happens when a learner leaves. Under each heading, cite the article or the line of the brief it rests on. Where nothing supports a line, write it as a question for the owner. Output: the one-page charter, then a list of the points the owner must confirm.
```

**Inputs and outputs:** Input: the education act's articles on learner records, the ministry's brief and the list of services that will use the register. Output: a one-page register charter with six headings, and a list of the points the owner must confirm.

**Safeguard:** Retention and access follow the law, and the register's owner confirms both. A line the prompt cannot trace to an article or to the brief is a question for the legal unit, not an answer.

### Metadata

| Field | Value |
| --- | --- |
| Working title | What a register is for: one authoritative record |
| YouTube-optimised title | One record of every learner: what a learner register is for, and why it is a service |
| Description (60 words) | Most countries keep several lists of the same learners, and none can be trusted. A register is a trusted, authoritative service: one record of each learner, with rules on who reads and changes it, filled through a disciplined load. Four minutes for education ICT teams, on the GovStack Digital Registries specification. An AI prompt for the register's charter is in the description. |
| Tags | learner register, digital registries, GovStack, single source of truth, education data, PAERA, state registries, digital public infrastructure |
| Playlist (YouTube) | KP3 — Module 3: The Registry block |
| ToR §4 coverage | Terms of reference §3.3 (foundational and sectoral blocks identified); §4.2 (frameworks and standards referenced); §4.4 (demonstration in the education sector) — contract rows 2, 7 and 9 |
| PAERA citations | Annex 1, A1.2.5 State Registries; Annex 3 Main state registries; §3.4.2 Digital Data (State Registries) |
| External-link list | GovStack Digital Registries specification, version 3.0-alpha (sections 2 and 10.5.8, release notes); PAERA v1.0 (Annex 1 A1.2.5, Annex 3, §3.4.2); UNICEF Giga, giga-dagster, docs/README.md |

## 3.2 Subtopic 3.2 — Five tiers between a messy file and a trusted record

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the team that configures the service: the head of the ministry's ICT unit, the registry architect, the data lead or the integration lead |
| Target runtime | ~4 min (≈400 spoken words) |
| PAERA anchor | UNICEF Giga data flow (giga-dagster, docs/dataflow.md); Databricks, medallion architecture; Digital Registries 3.0-alpha, DRS-2 and DRS-19 |

> **Single message —** _Data reaches the register through five tiers, raw, bronze, staging, silver and gold, with quality checks at bronze and a person's approval before silver._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Five tiers between a messy file and a trusted record'. Voice-over begins._

Every term, schools send lists of learners. Some are spreadsheets, some are exports, some were typed from paper. Column names differ. Dates are written three ways. Write such a file straight into the register, and the register becomes one more list nobody trusts.

> _Slide 2 — Title: 'Five tiers'. Body, five text rows in order: 'Raw — the file as it arrived.' 'Bronze — columns mapped; quality checks run; rows split into passed and failed.' 'Staging — a person approves or rejects each passed row.' 'Silver — approved rows merged.' 'Gold — merged, then split into a master table and a reference table.'_

UNICEF Giga publishes a flow for school data that solves this. It has five tiers. Raw is the file as it arrived, with wrong column names and wrong data types. At bronze, the columns are mapped, the quality checks run, and the rows are split into two tables: those that passed and those that failed. At staging, a person with the right permission approves or rejects each passed row. Approved rows are merged into silver. Silver is merged into gold, which is split into a master table and a reference table.

> _Slide 3 — Title: 'Two things to get right'. Body, two text rows: 'Raw is a tier of its own. The checks run at bronze.' 'A person approves before silver. No program replaces that act.'_

Two things in this flow are easy to get wrong. First, raw is a tier of its own, and the checks run at bronze. The file is kept as it came, so you can always show what a school sent. Second, a person approves the rows before they reach silver. That approval is an act of responsibility. A program can prepare it, but it cannot replace it.

> _Slide 4 — Title: 'Where the tiers live'. Body, three text rows: 'A common pattern: layers that improve data step by step.' 'GovStack: linked databases and scheduled, rule-based automation.' 'Schools to learners: this course's own adaptation.'_

Giga says its tiers were inspired by a common data pattern, which Databricks describes as layers that improve the structure and quality of data step by step. The GovStack Digital Registries specification does not describe tiers. It does let you keep several linked databases in one installation, and run scheduled, rule-based automation that moves records between them. So the tiers can be held as linked databases beside the register, or in a data platform in front of it. Applying Giga's school flow to learners is this course's own adaptation.

> _Slide 5 — Title: 'What the walkthrough will show'. Body, four text rows: 'A seeded file of learners, with faulty rows, enters raw.' 'Faulty rows stop at bronze, in the failed table.' 'An officer approves the passed rows at staging.' 'Only approved rows reach silver; gold holds the master records.' Footer: 'Storyboard on the specimen. Not yet run.'_

Here is what the walkthrough of this subtopic will show, once the load is built. A seeded file of Progressa learners, with some faulty rows in it, enters raw. At bronze, the faulty rows go to the failed table. At staging, an officer of the learner registry approves the passed rows. The count of rows is read at every tier. The check passes when only approved rows reach silver and gold holds the master records. Until then, the tier layout is a specimen, and nothing here has run.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Raw, bronze, staging, silver, gold: checks at bronze, a person's approval before silver.' The on-screen practice box sits below it._

Raw, bronze, staging, silver, gold: checks at bronze, a person's approval before silver, and only then a record the register can trust.

> _Slide 7 — Title: 'Sources'. Body: UNICEF Giga, giga-dagster, docs/dataflow.md; Databricks, 'What is Medallion Architecture?'; GovStack Digital Registries specification, version 3.0-alpha, DRS-2 and DRS-19. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Five tiers between a messy file and a trusted record'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 3.2) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Five tiers. Five text rows in order, one per tier. | A text list, top to bottom. The tier names are Giga's own: raw, bronze, staging, silver, gold. |
| 3 | Two things to get right. Two text rows. | The two errors the module corrects. Text only. |
| 4 | Where the tiers live. Three text rows. | The adaptation is named as the course's own. |
| 5 | What the walkthrough will show. Four text rows and the footer 'Storyboard on the specimen. Not yet run.' | Replaced by the recorded segment once check RG9 passes. Until then, text only. |
| 6 | Single-sentence summary slide, with the on-screen practice box. | The take-home line. The practice box is shown, not narrated. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Design the five tiers for a new source file.** The prompt in the companion material gives you a tier design table with the column mapping, the bronze checks and the staging approver. Before the next video.

### AI usage tip — Design the five tiers for a new source file

**What the prompt does:** Each new body that sends learner data sends it in its own shape. This prompt designs how one source file passes through the five tiers: how its columns map, which checks run at bronze, and who approves at staging.

**Prompt template (copy-paste into Claude):**

```text
Below are the header row and ten invented sample rows of a file that [name of the sending body] will send to our learner register [paste], and the register's schema [paste]. Design the five tiers this file passes through: raw, bronze, staging, silver and gold. (1) Map every source column to a schema field, or mark it to be dropped; list the schema fields the file lacks and say whether each may be empty. (2) List the checks to run at bronze, one row per check: the field, the rule, whether a failure is critical, and the message the sender will read. (3) Name the role that approves rows at staging and what that person looks at before approving. (4) Say what moves from silver to gold and into the register. Mark every guess for confirmation. Output: a tier design table with the column mapping, the bronze checks and the staging approver, then a list of open questions.
```

**Inputs and outputs:** Input: the header row and invented sample rows of one source file, with the register's schema. Output: a tier design table with the column mapping, the bronze checks and the staging approver, and a list of open questions.

**Safeguard:** The approval at staging is a person's act and is not replaced by the prompt. Never paste real learners' records into the prompt; use the header row and invented sample rows.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Five tiers between a messy file and a trusted record |
| YouTube-optimised title | Raw, bronze, staging, silver, gold: loading a learner register through five checked tiers |
| Description (60 words) | Schools send messy files. Written straight into the register, they make one more list nobody trusts. UNICEF Giga publishes a flow of five tiers: raw, bronze, staging, silver and gold, with quality checks at bronze and a person's approval before silver. Four minutes for education ICT teams. An AI prompt to design the tiers for a new source file is in the description. |
| Tags | data quality, learner register, medallion architecture, Giga, data pipeline, digital registries, GovStack, education data |
| Playlist (YouTube) | KP3 — Module 3: The Registry block |
| ToR §4 coverage | Terms of reference §4.1 (method step with its validation); §4.2 (frameworks and standards referenced); §4.4 (demonstration in the education sector); §4.5 (data flow) — contract rows 6, 7, 9 and 10 |
| PAERA citations | None; the anchors are Giga's published data flow and the GovStack Digital Registries specification |
| External-link list | UNICEF Giga, giga-dagster, docs/dataflow.md at commit 46b72af; Databricks, 'What is Medallion Architecture?'; GovStack Digital Registries specification, version 3.0-alpha (DRS-2, DRS-19) |

### Storyboard — the demonstration segment of 3.2: a load passing through the five tiers

_A storyboard on the specimen plr-load-tiers.yaml. Nothing in it has run. It needs configuration RG9, the tiered load, and a seeded load of learners that includes faulty rows. When check RG9 passes on the built load, the segment is recorded from these steps and the specimen is replaced by the file as built._

| Step | What is shown | What the viewer sees | What counts as a pass |
| --- | --- | --- | --- |
| 1 | The seeded source file, as a school would send it | A file of Progressa learners with its own column names, three faulty rows among them, and the count of rows it holds | The file is stored unchanged in the raw tier, with the same count of rows |
| 2 | The bronze tier after the column mapping and the checks | Two tables side by side, passed and failed, each with its count of rows | Rows passed plus rows failed equal the rows received; every faulty row is in the failed table |
| 3 | The data-quality report | The report the sender receives: each failed row with its reason in plain words | Every failed row appears in the report with a reason |
| 4 | The staging tier | An officer of the learner registry approving the passed rows, and rejecting one on review | Only rows an officer approved move on; the rejected row stays at staging |
| 5 | The silver tier | The approved rows merged, with their count | The count in silver equals the rows approved; no row from the failed table is present |
| 6 | The gold tier | Gold split into the master table of learners and the reference table | The master table holds the records that will be written to the register |

## 3.3 Subtopic 3.3 — Generating the register's schema

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the team that configures the service: the head of the ministry's ICT unit, the registry architect, the data lead or the integration lead |
| Target runtime | ~4 min (≈437 spoken words) |
| PAERA anchor | Digital Registries 3.0-alpha, DRS-1, DRS-2, DRS-3, DRS-4, DRS-10, DRS-11, DRS-13, DRS-14, DRS-17, DRS-28, DRS-30 and DR §8.2; Identity 2.0, ID §4.1.1, ID §4.1.2 and ID 6.1-r11 |

> **Single message —** _The register is set up from one schema file, with its fields, rules, links and key, which an AI assistant drafts from the law and the form and the owner corrects and publishes._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Generating the register's schema'. Voice-over begins._

A register is set up from one file. The file names the register, lists its fields, states the rules on each field, links it to other registers and names its key. Get this file right, and the rest of the build follows from it.

> _Slide 2 — Title: 'What the schema file holds'. Body, five text rows: 'The register: name, short code, owner, retention, classification, state.' 'Fields: name, type, required, unique, minimum, maximum.' 'Links: each learner to a school, with a rule on deletion.' 'Versions: each publication is a new version.' 'Format: JSON or YAML, to export and to import.'_

The Digital Registries specification says what goes in the file. The register has a name, a unique short code, an owning body, a retention policy, a classification and a lifecycle state, from draft to published to archived. Each field has a name and a type, such as text, date or a list of values. A field can be required or unique, with a minimum and a maximum. A link joins one database to another, for example each learner to a school, with a rule for what happens when the school is deleted. Every publication creates a new version. The schema can be exported and imported as JSON or YAML.

> _Slide 3 — Title: 'The key is not the national number'. Body, three text rows: 'The register keeps a learner number of its own.' 'Beside it, the identifier the identity authority gives to the service.' 'Never the national identity number.'_

One choice needs the owner's decision: the key. It is tempting to key the register on the national identity number. Do not. The GovStack Identity specification keeps that number secret inside the identity block. A service that checks a person signs the person in, with the person present, and receives an identifier made for that service alone. So Progressa's register keeps a learner number of its own, and stores beside it the identifier that the identity authority, PNIA, gives to the service. It never stores the national number.

> _Slide 4 — Title: 'Drafted by AI, decided by the owner'. Body, three text rows: 'Inputs: the education act, the registration form, the services that will read the register.' 'Every rule traced to the line it came from.' 'The owner decides the key and the personal-data fields, corrects and publishes.'_

An AI assistant drafts this file well, because its inputs are written down: the education act, the registration form, and the list of services that will read the register. The prompt asks it to trace every rule to the line it came from. The owner then decides the key and the fields that hold personal data. The marks for personal data are optional in the specification, so no check depends on them. The owner corrects the draft and publishes it. The file states the edition of the specification it implements: version 3.0-alpha, an early release.

> _Slide 5 — Title: 'What the walkthrough will show'. Body, four text rows: 'The schema drafted, and the register created from it.' 'The register listed and read back: schema, metadata, state published.' 'A record without a required field: refused.' 'A second record with the same learner number: refused.' Footer: 'Storyboard on the specimen. Not yet run.'_

The walkthrough of this subtopic shows the schema drafted, and the register created from it through the published interface. The check lists the registers and reads this one back: its schema, its metadata and the state published. A record without a required field must be refused, and so must a second record with the same learner number. Until the register is built, the schema is a specimen written for Progressa, and none of this has run.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'One schema file: drafted by AI from the law and the form, corrected and published by the owner.' The on-screen practice box sits below it._

One schema file, drafted by AI from the law and the form, corrected and published by the owner, and keyed on the register's own number.

> _Slide 7 — Title: 'Sources'. Body: GovStack Digital Registries specification, version 3.0-alpha (DRS-1, DRS-2, DRS-3, DRS-4, DRS-10, DRS-11, DRS-13, DRS-14, DRS-17, DRS-28, DRS-30, section 8.2); GovStack Identity specification, version 2.0 (sections 4.1.1 and 4.1.2, requirement 11 of section 6.1). Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Generating the register's schema'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 3.3) Arial 18pt. Background #E5F5FB. No images. |
| 2 | What the schema file holds. Five text rows. | Plain text. The terms are the specification's: name, short code, metadata, lifecycle state, field type, link, version. |
| 3 | The key is not the national number. Three text rows. | The one decision the owner must take. Text only. |
| 4 | Drafted by AI, decided by the owner. Three text rows. | Who does what: the assistant drafts, the owner decides. |
| 5 | What the walkthrough will show. Four text rows and the footer 'Storyboard on the specimen. Not yet run.' | Replaced by the recorded segment once checks RG1 to RG4 and RG12 pass. Until then, text only. |
| 6 | Single-sentence summary slide, with the on-screen practice box. | The take-home line. The practice box is shown, not narrated. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Draft the register's schema file.** The prompt in the companion material gives you a draft schema file in YAML with a trace table. Before the next video.

### AI usage tip — Draft the register's schema file

**What the prompt does:** Writing a register's schema by hand takes weeks of meetings and still misses rules that sit in the law. This prompt drafts the whole schema file in the terms of the GovStack Digital Registries specification, traces every rule to its source, and lists what only the owner may decide.

**Prompt template (copy-paste into Claude):**

```text
You are drafting the schema of a learner register to the GovStack Digital Registries specification, version 3.0-alpha. Below are [1] the articles of our education act on learner records [paste], [2] the registration form, field by field [paste], and [3] the services that will read the register and what each needs [paste]. Draft one schema file in YAML with: the register's name, short code, owning body, retention policy, classification and lifecycle state; each field with its name, its type, whether it is required or unique, and its limits; the link from each learner to a school, with its rule on deletion; and the key. Do not use the national identity number as the key or as any field; provide a field for the identifier the identity authority gives to the service. Then give a trace table: each field and rule, and the article or form line it comes from. List every choice you made without a source as a decision for the owner. Output: a draft schema file in YAML with a trace table, then the list of decisions.
```

**Inputs and outputs:** Input: the education act's articles on learner records, the registration form and the list of services that will read the register. Output: a draft schema file in YAML with a trace table, and a list of decisions for the owner.

**Safeguard:** The owner decides the key and the fields that hold personal data, and the file states the edition of the specification it implements. The draft is imported into a test installation and passes its checks before anyone relies on it.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Generating the register's schema |
| YouTube-optimised title | One schema file sets up the register: drafting it with AI, deciding it as the owner |
| Description (60 words) | A register is set up from one schema file: its fields, rules, links and key. An AI assistant drafts it from the education act and the registration form; the owner decides the key, corrects the draft and publishes it. The key is never the national identity number. Four minutes for education ICT teams. The schema-drafting AI prompt is in the description. |
| Tags | schema, learner register, digital registries, GovStack, data model, AI for government, identity, JSON YAML |
| Playlist (YouTube) | KP3 — Module 3: The Registry block |
| ToR §4 coverage | Terms of reference §4.1 (method step with its tools and validation); §4.3 (AI across the steps); §4.4 (demonstration in the education sector); §4.5 (data model); §6 (templates) — contract rows 6, 8, 9, 10 and 14 |
| PAERA citations | None; the anchors are the GovStack Digital Registries and Identity specifications |
| External-link list | GovStack Digital Registries specification, version 3.0-alpha (DRS-1, DRS-2, DRS-3, DRS-4, DRS-10, DRS-11, DRS-13, DRS-14, DRS-17, DRS-28, DRS-30; section 8.2); GovStack Identity specification, version 2.0 (sections 4.1.1 and 4.1.2, and requirement 11 of section 6.1) |

### Storyboard — the demonstration segment of 3.3: the schema drafted, and the register created from it

_A storyboard on the specimen plr-learner-register.schema.yaml. Nothing in it has run. It needs configurations RG1, RG2, RG3, RG4 and RG12 on the product the build chooses for the register. When their checks pass, the segment is recorded from these steps and the specimen is replaced by the file as built, which names the product and its format._

| Step | What is shown | What the viewer sees | What counts as a pass |
| --- | --- | --- | --- |
| 1 | The AI assistant's draft and its trace table | The YAML file beside the table that traces each field and rule to an article of the act or a line of the form | Every rule has a source line, or is listed as a decision for the owner |
| 2 | The owner's decisions | The key set to the register's own learner number; the field for the identifier the identity authority gives to the service; the personal-data fields marked where the product offers the mark | No field holds the national identity number |
| 3 | The register created from the file | The file imported, or sent to the register's interface for creating a database (DR §8.2, POST /database/modify) | The register is created without error |
| 4 | The register listed and read back | GET /databases lists the learner register; GET /database/{id} returns its schema, its metadata and the state Published | Schema, metadata and state match the file (check RG1) |
| 5 | Two records that must be refused | A record without a date of birth, then a second record with an existing learner number, each sent with the create operation the build names | Both are refused with a reason (check RG2) |
| 6 | A record that names a school that does not exist | The record sent, and the register's answer | It is refused, or kept as an orphan, as the rule on the link says (check RG3) |
| 7 | A new version | One field added, the schema published again; both versions read with GET /data/{registryName}/{versionNumber} | Both versions answer (check RG4) |
| 8 | The schema moved | The schema exported as a file and imported into a clean installation | The new register's GET /database/{id} equals the original's (check RG12) |

## 3.4 Subtopic 3.4 — Quality checks that stop a bad row

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the team that configures the service: the head of the ministry's ICT unit, the registry architect, the data lead or the integration lead |
| Target runtime | ~4 min (≈379 spoken words) |
| PAERA anchor | UNICEF Giga data flow (giga-dagster, docs/dataflow.md, the bronze tier); Digital Registries 3.0-alpha, DR §4.1 and DRS-17 |

> **Single message —** _Every row is checked at the bronze tier, and a row that fails is set aside with its reason, so that the people who sent the data know what to correct._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Quality checks that stop a bad row'. Voice-over begins._

A head teacher sends the term's list of learners. Three rows are wrong. If the register takes them, every service that reads it inherits the mistakes. If the register drops them silently, the school never learns what to fix.

> _Slide 2 — Title: 'Checked at bronze'. Body, three text rows: 'Every row is checked before anyone approves it.' 'Rows split into two tables: passed and failed.' 'Rules on each field: required, unique, minimum, maximum.'_

So every row is checked at the bronze tier, before anyone approves it. Giga's published flow runs its data-quality checks at bronze and splits the rows into two tables: those that passed and those that failed. The GovStack Digital Registries specification names validation rules, deduplication and data-quality controls among the functions of a register. It lets each field carry rules such as required, unique, minimum and maximum. The checks at bronze apply the same rules before a row comes near the register.

> _Slide 3 — Title: 'Three faulty rows'. Body, a three-row text table with two columns, 'Row' and 'Reason': 'The same learner twice' — 'duplicate learner number'; 'Date of birth empty' — 'missing date of birth'; 'Age three, grade six' — 'age outside the range for the grade'._

Look at three faulty rows from a Progressa school. In the first, the same learner appears twice, with the same learner number. In the second, the date of birth is empty, and it is required. In the third, the date of birth says the child is three years old and in grade six. Each row goes to the failed table with its reason in plain words. Who sets the limits, such as the range of ages for each grade? The register's owner, not the programmer. A range is a policy choice.

> _Slide 4 — Title: 'The sender is told'. Body, three text rows: 'A failed row is kept, with its reason.' 'A report goes to the person who sent the file.' 'The share of failed rows, term by term.'_

A failed row is not thrown away, and it is not a secret. In Giga's flow, a data-quality report is generated and emailed to the person who uploaded the file. Do the same. The head teacher gets a short list: which rows failed, and what to correct. The next file comes back cleaner. Over a few terms, the schools learn the rules, and the share of failed rows falls. That share is worth reporting to your director every term.

> _Slide 5 — Title: 'What the walkthrough will show'. Body, three text rows: 'A seeded load with three faulty rows.' 'Each lands among the failed rows, with its reason.' 'No faulty row reaches staging.' Footer: 'Storyboard on the specimen. Not yet run.'_

The walkthrough of this subtopic shows a seeded load that contains three faulty rows: a duplicate, a missing required value and a value outside its range. The check passes when each of the three lands among the failed rows with its reason stated, and no faulty row reaches staging. Until the checks are built, they are written as a specimen, and nothing here has run.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Check every row at bronze; set each failing row aside with its reason.' The on-screen practice box sits below it._

Check every row at bronze, set each failing row aside with its reason, and send the school the list of what to correct.

> _Slide 7 — Title: 'Sources'. Body: UNICEF Giga, giga-dagster, docs/dataflow.md (the bronze tier); GovStack Digital Registries specification, version 3.0-alpha (section 4.1; DRS-17). Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Quality checks that stop a bad row'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 3.4) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Checked at bronze. Three text rows. | The split into passed and failed is Giga's; the field rules are the specification's. |
| 3 | Three faulty rows. A plain-text table, three rows by two columns. | Invented values for Progressa. Text only. |
| 4 | The sender is told. Three text rows. | The feedback loop to the school. |
| 5 | What the walkthrough will show. Three text rows and the footer 'Storyboard on the specimen. Not yet run.' | Replaced by the recorded segment once check RG10 passes. Until then, text only. |
| 6 | Single-sentence summary slide, with the on-screen practice box. | The take-home line. The practice box is shown, not narrated. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Propose the checks and the failure messages.** The prompt in the companion material gives you a table of checks with one test row for each check. Before the next video.

### AI usage tip — Propose the checks and the failure messages

**What the prompt does:** A check that the school cannot understand will not get the data corrected. This prompt proposes the checks for each field of the register's schema, writes the message a school will read when a row fails, and writes a test row for every check.

**Prompt template (copy-paste into Claude):**

```text
Below is the schema file of our learner register [paste] and the owner's notes on limits, such as the range of ages for each grade [paste]. For each field, propose the checks to run at the bronze tier: duplicates, required values, allowed values, ranges and formats. For each check give: the field, the rule, whether a failure is critical, the message a head teacher will read when a row fails (one plain sentence, no technical words), and one invented test row that must fail the check. Where a limit is not in the owner's notes, leave it open and list it as a question. Output: a table of checks with one test row for each check, then the list of open limits.
```

**Inputs and outputs:** Input: the register's schema file and the owner's notes on limits. Output: a table of checks with one test row for each check and its plain-language failure message, and a list of open limits.

**Safeguard:** The owner sets the limits of each range. Every check has a test row that exercises it; a check that no test row exercises is not trusted.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Quality checks that stop a bad row |
| YouTube-optimised title | Stop bad data at the door: quality checks that tell schools what to fix |
| Description (60 words) | A wrong row in a register spreads to every service that reads it. Check every row at the bronze tier, set each failing row aside with its reason, and tell the school what to correct, as Giga's published flow does. Four minutes for education ICT teams, with three faulty Progressa rows. An AI prompt that proposes the checks and their messages is in the description. |
| Tags | data quality, validation, learner register, Giga, digital registries, GovStack, education data, schools |
| Playlist (YouTube) | KP3 — Module 3: The Registry block |
| ToR §4 coverage | Terms of reference §4.1 (method step with its validation); §4.4 (demonstration in the education sector) — contract rows 6 and 9 |
| PAERA citations | None; the anchors are Giga's published data flow and the GovStack Digital Registries specification |
| External-link list | UNICEF Giga, giga-dagster, docs/dataflow.md at commit 46b72af; GovStack Digital Registries specification, version 3.0-alpha (section 4.1; DRS-17) |

### Storyboard — the demonstration segment of 3.4: a faulty row set aside with its reason

_A storyboard on the specimen plr-load-tiers.yaml. Nothing in it has run. It needs configuration RG10, the data-quality checks at bronze, and a seeded load with faulty rows. When check RG10 passes, the segment is recorded from these steps._

| Step | What is shown | What the viewer sees | What counts as a pass |
| --- | --- | --- | --- |
| 1 | The seeded load | A Progressa school's file with three faulty rows marked: a duplicate learner number, an empty date of birth, an age outside the range for the grade | The three faulty rows are present in raw |
| 2 | The checks configured for the bronze tier | The list of checks, each with its field, its rule and its message | Each of the three faults has a check that names it |
| 3 | The bronze tier after the run | The failed table with the three rows and a reason beside each | Each faulty row lands among the failed rows with its reason stated |
| 4 | The passed table | The passed rows, with their count | No faulty row is in the passed table, so none can reach staging |
| 5 | The report to the sender | The plain-language list the head teacher receives | It names each failed row and what to correct |

## 3.5 Subtopic 3.5 — A published pattern, followed in the open

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the team that configures the service: the head of the ministry's ICT unit, the registry architect, the data lead or the integration lead |
| Target runtime | ~4 min (≈374 spoken words) |
| PAERA anchor | UNICEF Giga data flow (giga-dagster, docs/dataflow.md and docs/README.md, and the repository's licence field); Databricks, medallion architecture |

> **Single message —** _Giga's School Master Data shows the pattern at work for schools, and you may follow it for learners if you say what you took and changed and copy no unlicensed code._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'A published pattern, followed in the open'. Voice-over begins._

A vendor tells you their data platform is unique. A donor asks whether your register follows any known practice. Both questions have the same good answer: a published pattern, followed in the open, with every change you made written down.

> _Slide 2 — Title: 'What Giga publishes'. Body, three text rows: 'The aim: one source of truth, the School Master Data.' 'Five tiers: raw, bronze, staging, silver, gold.' 'Gold split into a master table and a reference table.'_

UNICEF Giga runs a data platform for school data. Its aim, in its own words, is to apply concepts from master data management and data governance to produce a single source of truth: the School Master Data. Its documentation shows five tiers, checks at bronze, a person's review at staging, and a gold tier split into a master table and a reference table. Giga says its tiers were inspired by the medallion pattern that Databricks describes. This is a real, published example of the pattern this module follows.

> _Slide 3 — Title: 'What the learner register takes, and what it changes'. Body, a two-column text table. 'Takes': the five tiers; the checks at bronze; the review before silver; the split of gold. 'Changes': learners in place of schools; a register as the destination._

Follow it, and say what you took. The learner register takes the five tiers, the checks at bronze, the person's review before silver, and the split of gold into master and reference. Then say what you changed. Giga's records are schools; Progressa's are learners. Giga's gold tier is its destination; Progressa's destination is a register, a service with its own rules of access. Applying a pattern built for schools to learners is this course's own adaptation, and it should be named as such.

> _Slide 4 — Title: 'Follow the pattern, not the code'. Body, two text rows: 'No licence: no permission to copy.' 'Cite the pattern. Write your own code.'_

One more line matters. Neither of Giga's two public repositories carries a licence. A repository without a licence gives no permission to copy its code, even when anyone can read it. So you may read the documentation, cite the pattern and follow it, and your team writes its own code. Put the citation in your design document and in the register's files, so that an auditor or a donor can see where the pattern came from.

> _Slide 5 — Title: 'Why this helps you'. Body, three text rows: 'Easier to defend than a pattern a vendor invented.' 'The next vendor can follow the same pattern.' 'Written choices outlive the team and the project.'_

This helps you in the room where the money is decided. A pattern that a global programme has published and runs is easier to defend than one your vendor invented. It also keeps you free: the next vendor can follow the same published pattern. And because your choices are written down, they survive a change of team, a change of vendor and the end of a donor project.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Follow the published pattern; say what you took and what you changed; write your own code.' The on-screen practice box sits below it._

Follow Giga's published pattern for learners, say what you took and what you changed, and write your own code.

> _Slide 7 — Title: 'Sources'. Body: UNICEF Giga, giga-dagster, docs/dataflow.md and docs/README.md, and the repository's licence field; Databricks, 'What is Medallion Architecture?'. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'A published pattern, followed in the open'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 3.5) Arial 18pt. Background #E5F5FB. No images. |
| 2 | What Giga publishes. Three text rows. | Giga's own words for its aim. No Giga logo, no screenshot of the repository. |
| 3 | Takes and changes. A plain-text table, two columns. | The worked example: Giga's flow as published beside the table built for Progressa. |
| 4 | Follow the pattern, not the code. Two text rows. | The licence point, stated plainly. |
| 5 | Why this helps you. Three text rows. | The case to make upward. |
| 6 | Single-sentence summary slide, with the on-screen practice box. | The take-home line. The practice box is shown, not narrated. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Read a repository's documentation and licence before you follow it.** The prompt in the companion material gives you a reuse note in three parts. Before the next video.

### AI usage tip — Read a repository's documentation and licence before you follow it

**What the prompt does:** Teams find a public repository and copy from it without asking what they may do. This prompt reads a repository's documentation and its licence and says, plainly, what the team may follow, what it may copy, and on which conditions.

**Prompt template (copy-paste into Claude):**

```text
Below are the address of a public code repository [paste], the text of its documentation pages that describe the pattern we want to follow [paste], and the text of its licence file, or a note that the repository has no licence file and an empty licence field [paste]. Write a reuse note in three parts. (1) What we may follow: the ideas and the design that the documentation publishes, and how we should cite them. (2) What we may copy: name the licence exactly as given, say what it permits and requires, or say that without a licence no copying is permitted. (3) On which conditions: attribution, notices, and any obligation to share our own changes. Quote the licence words you rely on. Output: a reuse note in three parts, then the questions for a lawyer.
```

**Inputs and outputs:** Input: the repository's address, its documentation pages and its licence file or licence field. Output: a reuse note in three parts — what may be followed, what may be copied, and on which conditions — and the questions for a lawyer.

**Safeguard:** A repository without a licence gives no permission to copy, and a lawyer's reading stands above the prompt's. Paste the licence text itself; never let the prompt name a licence from memory.

### Metadata

| Field | Value |
| --- | --- |
| Working title | A published pattern, followed in the open |
| YouTube-optimised title | Follow a published pattern, not a vendor's: Giga's School Master Data for your learner register |
| Description (60 words) | UNICEF Giga publishes how it builds one source of truth for schools: five tiers, checks at bronze, a person's review, a master table. You may follow the pattern for learners if you say what you took and what you changed, and copy no unlicensed code. Four minutes for education ICT teams. An AI prompt that reads a repository's licence is in the description. |
| Tags | Giga, School Master Data, open source licence, reuse, data pattern, learner register, medallion architecture, education data |
| Playlist (YouTube) | KP3 — Module 3: The Registry block |
| ToR §4 coverage | Terms of reference §4.2 (frameworks and standards referenced); §4.6 (a real-life example of an output: Giga's published data flow) — contract rows 7 and 11 |
| PAERA citations | None; the anchor is Giga's published data flow |
| External-link list | UNICEF Giga, giga-dagster, docs/dataflow.md and docs/README.md at commit 46b72af; the repository's page, https://github.com/unicef/giga-dagster, whose licence field is empty; Databricks, 'What is Medallion Architecture?' |

## 3.6 Subtopic 3.6 — Account for every load

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the team that configures the service: the head of the ministry's ICT unit, the registry architect, the data lead or the integration lead |
| Target runtime | ~3 min (≈351 spoken words) |
| PAERA anchor | Digital Registries 3.0-alpha, DRS-7, DRS-21, DRS-24, DRS-26, DR §8.1 and DR §8.2; the reconciliation itself is the team's own practice |

> **Single message —** _After every load, show that the rows received equal the rows passed plus the rows set aside, and that the rows approved equal the records the register added or changed._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Account for every load'. Voice-over begins._

After a load, a director asks a simple question: did every learner the schools sent reach the register? Most teams answer with a feeling. You can answer with two lines of arithmetic, and show your working.

> _Slide 2 — Title: 'Two lines'. Body, two large text rows: 'Rows received = rows passed + rows set aside.' 'Rows approved = records added + records changed.'_

The first line is about the checks. The rows received must equal the rows that passed plus the rows set aside at bronze. If they do not, rows were lost or counted twice inside the load. The second line is about the register. The rows approved at staging must equal the records the register added plus the records it changed. If they do not, the load did not write what the officer approved.

> _Slide 3 — Title: 'Where the numbers come from'. Body, four text rows: 'The change log: every change, with the value before and after.' 'Import, and the update of entries.' 'Statistical queries: how many records.' 'An operation that says whether a record exists.'_

The numbers come from things the GovStack Digital Registries specification already requires. The register logs every change, and shows the value before and after. It can import data and update entries. It answers statistical queries, such as how many records it holds, and it has an operation that says whether a given record exists. So the reconciliation needs no new system. Count the tiers, read the log, and read the record count before and after.

> _Slide 4 — Title: 'An honest note, and a hard rule'. Body, two text rows: 'No published source describes this check. It is the team's own practice.' 'A line that does not balance stops the next load.'_

Be clear with your readers on one point. No published source describes this reconciliation, neither the GovStack specification nor Giga's flow. It is the practice of the team that wrote this course, built on what the specification does publish. Present it to your auditors that way; it is simple enough for them to check. And keep one hard rule. A line that does not balance stops the next load until someone finds where the rows went and writes down the cause.

> _Slide 5 — Title: 'What the walkthrough will show'. Body, three text rows: 'One load on one sheet: received, passed, set aside, approved, added, changed.' 'The record count before and after.' 'A sample of records confirmed to exist.' Footer: 'Storyboard on the specimen. Not yet run.'_

The walkthrough of this subtopic shows one load of Progressa learners reconciled on a single sheet: rows received, passed, set aside, approved, added and changed, and the register's record count before and after. The check passes when both lines balance and a sample of the loaded records is confirmed to exist in the register. Until the load is built, the sheet is a storyboard, and nothing here has run.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Received = passed + set aside. Approved = added + changed. After every load.' The on-screen practice box sits below it._

Received equals passed plus set aside; approved equals added plus changed. Show both lines after every load.

> _Slide 7 — Title: 'Sources'. Body: GovStack Digital Registries specification, version 3.0-alpha (DRS-7, DRS-21, DRS-24, DRS-26; sections 8.1 and 8.2). The reconciliation is the team's own practice. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Account for every load'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 3.6) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Two lines. Two large text rows. | The two equations, nothing else on the slide. |
| 3 | Where the numbers come from. Four text rows. | Each row is a requirement or an operation of the specification. |
| 4 | An honest note, and a hard rule. Two text rows. | Says plainly that the practice is the team's own. |
| 5 | What the walkthrough will show. Three text rows and the footer 'Storyboard on the specimen. Not yet run.' | Replaced by the recorded segment once checks RG7 and RG11 pass. Until then, text only. |
| 6 | Single-sentence summary slide, with the on-screen practice box. | The take-home line. The practice box is shown, not narrated. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Write the reconciliation note of a load.** The prompt in the companion material gives you a reconciliation note with both lines computed. Before the next video.

### AI usage tip — Write the reconciliation note of a load

**What the prompt does:** Counting a load is easy; writing it up so that a director or an auditor can follow it is where teams stop. This prompt takes the counts of one load and an extract of the register's change log, computes both lines and names every difference.

**Prompt template (copy-paste into Claude):**

```text
Below are the counts of one load into our learner register [paste]: rows received in raw, rows passed and rows failed at bronze, rows approved and rejected at staging. Below them are the register's record count before and after the load [paste] and an extract of its change log for the load, giving the number of records added and the number changed [paste]. (1) Compute line one: rows received against rows passed plus rows failed. (2) Compute line two: rows approved against records added plus records changed. (3) For each line, say whether it balances. (4) Where it does not, state the difference as a number and list the places in the load where the rows could have gone. Do not explain a difference away. Output: a reconciliation note with both lines computed, in five sentences or fewer, then the list of differences to investigate.
```

**Inputs and outputs:** Input: the counts of each tier of one load, the register's record count before and after, and an extract of its change log. Output: a reconciliation note with both lines computed, and a list of every difference to investigate.

**Safeguard:** A difference is investigated, never explained away by the prompt. Give the prompt counts and log extracts, never learners' personal data.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Account for every load |
| YouTube-optimised title | Did every learner reach the register? Two lines of arithmetic after every load |
| Description (60 words) | After every load into a learner register, show two lines: rows received equal rows passed plus rows set aside, and rows approved equal records added or changed. The numbers come from the register's own logs and counts. Four minutes for education ICT teams; the practice is the team's own, built on the GovStack specification. An AI prompt for the reconciliation note is in the description. |
| Tags | reconciliation, data load, audit, learner register, digital registries, GovStack, data quality, education data |
| Playlist (YouTube) | KP3 — Module 3: The Registry block |
| ToR §4 coverage | Terms of reference §4.1 (method step with its validation); §4.4 (demonstration in the education sector) — contract rows 6 and 9 |
| PAERA citations | None; the anchor is the GovStack Digital Registries specification |
| External-link list | GovStack Digital Registries specification, version 3.0-alpha (DRS-7, DRS-21, DRS-24, DRS-26; sections 8.1 and 8.2) |

### Storyboard — the demonstration segment of 3.6: the reconciliation of one load

_A storyboard on the specimen plr-load-tiers.yaml. Nothing in it has run. It needs configurations RG7, the load of the gold tier's records into the register, and RG11, the reconciliation of each load. When checks RG7 and RG11 pass, the segment is recorded from these steps._

| Step | What is shown | What the viewer sees | What counts as a pass |
| --- | --- | --- | --- |
| 1 | The register before the load | The register's record count, read with a statistical query (DRS-26) | A number is recorded before the load starts |
| 2 | The counts of the tiers | Rows received in raw; passed and failed at bronze; approved and rejected at staging | Line one balances: received equals passed plus failed |
| 3 | The load into the register | The gold tier's master records written to the register by import or by the update of entries (DRS-24; DR §8.1, updateEntries) | The load ends without error |
| 4 | The change log | The records the load added and changed, with the values before and after (DRS-7, DRS-21) | Line two balances: approved equals added plus changed, and the change in the record count equals the records added |
| 5 | A sample checked | Ten loaded records looked up with the operation that says whether a record exists (DR §8.2, exists) | Each answers true (check RG7) |
| 6 | The reconciliation sheet | One sheet with every count and both lines | Both lines balance (check RG11) |

## 3.7 Subtopic 3.7 — The register as a service others can use

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the team that configures the service: the head of the ministry's ICT unit, the registry architect, the data lead or the integration lead |
| Target runtime | ~4 min (≈430 spoken words) |
| PAERA anchor | Digital Registries 3.0-alpha, DR §4.2, DR §5.2, DR §8, DR §9.2.1, DRS-5, DRS-6, DRS-8, DRS-21, DRS-33, DRS-34, DRS-35 and DRS-37; Information Mediator 1.1.1, IM §6.2 and IM §6.3; OpenAPI |

> **Single message —** _Other services reach the register only through its published interface, each seeing no more than its role allows, and every learner or parent can see who read their record._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The register as a service others can use'. Voice-over begins._

Once the register holds good records, every office will want them: the scholarship office, the school feeding programme, the examination authority. If each gets a copy, you are back to many lists. If each calls the register, you keep one.

> _Slide 2 — Title: 'Only through the published interface'. Body, three text rows: 'No one reaches the register directly.' 'Services generated for each register, described with OpenAPI, listed with examples.' 'Not yet published: bulk operations, archive, event subscription.'_

The GovStack Digital Registries specification is clear. Applicants do not reach the register directly. They come through other building blocks, such as the Registration block, with the Information Mediator between them. Each register generates services for creating, reading and updating records, described with OpenAPI, and lists them with a description and an example for every field. The specification also asks for bulk operations, archive and event subscription, but publishes no operation for them yet. Do not promise them to another ministry as published interfaces.

> _Slide 3 — Title: 'Through the data exchange layer'. Body, two text rows: 'Each call passes through the data exchange layer, Linkup.' 'The provider of a service decides who may call it.'_

In Progressa, these calls pass through Linkup, the data exchange layer. The Information Mediator specification sets the rule: a service is registered with its OpenAPI description, a consumer must ask for the service it wants, and the provider of that service decides whether the consumer may call it. So the learner registry, not the caller, decides who reaches the register at all.

> _Slide 4 — Title: 'No more than the role allows'. Body, three text rows: 'The registration service: create and update.' 'Every other service: read only, and only the fields it needs.' 'A parent: delegated access to their child's record.'_

Inside the register, access is decided per service, per record and per field. A rule can rest on a role, an attribute, a policy or consent, and the specification names delegated access for a guardian or a parent. In Progressa, the registration service may create and update learner records. Every other service may only read, and only the fields it needs. A table of access rules gives the business side and IT one shared language, so a decision about a child's data means the same thing in both rooms.

> _Slide 5 — Title: 'Who read my child's record?'. Body, three text rows: 'Every read of personal data is logged.' 'Every data owner may see who read their data.' 'Deleting a record keeps the logical record.'_

The register logs every read of personal data: which record, which field, who read it and when. Every data owner has the right to see who looked at their personal data, and the register offers an interface for that report. For a learner who is a child, the parent sees it. Few features build more trust. And deleting a record keeps the logical record, so the history stays.

> _Slide 6 — Title: 'What the walkthrough will show'. Body, three text rows: 'An update from a read-only service: refused.' 'The same update from the registration service: accepted.' 'The parent's report: one read, the reader, the time.' Footer: 'Storyboard on the specimen. Not yet run.'_

The walkthrough of this subtopic shows an update sent by a service that may only read, and refused. The same update sent by the registration service is accepted. Then the parent's report shows the one read of the learner's record, who read it and when. The check passes on all three. Until the access rules are built, they are a specimen, and nothing here has run.

> _Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'One interface; each service sees only what its role allows; every parent can see who read the record.' The on-screen practice box sits below it._

One interface, each service seeing only what its role allows, and every parent able to see who read their child's record.

> _Slide 8 — Title: 'Sources'. Body: GovStack Digital Registries specification, version 3.0-alpha (sections 4.2, 5.2, 8 and 9.2.1; DRS-5, DRS-6, DRS-8, DRS-21, DRS-33, DRS-34, DRS-35, DRS-37); GovStack Information Mediator specification, version 1.1.1 (sections 6.2 and 6.3); OpenAPI Specification 3.0.3. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The register as a service others can use'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 3.7) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Only through the published interface. Three text rows. | The third row says what is not yet published. |
| 3 | Through the data exchange layer. Two text rows. | Text only; Linkup is named, nothing is said to run. |
| 4 | No more than the role allows. Three text rows. | Carries the shared-language argument. |
| 5 | Who read my child's record? Three text rows. | The trust point for parents. |
| 6 | What the walkthrough will show. Three text rows and the footer 'Storyboard on the specimen. Not yet run.' | Replaced by the recorded segment once checks RG5 and RG6 pass. Until then, text only. |
| 7 | Single-sentence summary slide, with the on-screen practice box. | The take-home line. The practice box is shown, not narrated. |
| 8 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Draft the register's table of access rules.** The prompt in the companion material gives you an access-rules table, field by field, with test cases. Before the next video.

### AI usage tip — Draft the register's table of access rules

**What the prompt does:** Access rules decided in a meeting and kept in someone's head are the first thing to break when a new service asks for data. This prompt drafts the register's access rules field by field from its charter, and writes the cases that test them.

**Prompt template (copy-paste into Claude):**

```text
Below are our learner register's one-page charter [paste], its schema with every field [paste], and the services that will call it, with what each needs [paste]. Draft a table of access rules: one row per service, or per role such as a parent, and one column per field, with C for create, R for read, U for update, or a dash for no access. Give the registration service create and update; give every other service read only, and only the fields its stated need requires. Add a row for a parent reading their own child's record. Under the table, write test cases: for each service, one request that must be allowed and one that must be refused. Mark every choice that rests on your judgment rather than the charter. Output: an access-rules table, field by field, with test cases, then the list of marked choices.
```

**Inputs and outputs:** Input: the register's charter, its schema and the list of services that will call it. Output: an access-rules table, field by field, with test cases that should be allowed and refused, and a list of marked choices.

**Safeguard:** The rules on a minor's data are confirmed against the law on guardianship and on data protection before they are configured. Every test case is run against the register; a rule that no case tests is not trusted.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The register as a service others can use |
| YouTube-optimised title | Share the register, not copies of it: access by role, and who read my child's record |
| Description (60 words) | Every office wants the learner register's data. Copies bring back many lists; calls through the published interface keep one. Each service sees only what its role allows, and every parent can see who read their child's record. Four minutes for education ICT teams, on the GovStack Digital Registries specification. An AI prompt for the register's access rules is in the description. |
| Tags | access control, personal data, learner register, digital registries, GovStack, Information Mediator, OpenAPI, data protection |
| Playlist (YouTube) | KP3 — Module 3: The Registry block |
| ToR §4 coverage | Terms of reference §4.1 (method step with its validation); §4.4 (demonstration in the education sector); §4.5 (API specifications) — contract rows 6, 9 and 10 |
| PAERA citations | None; the anchors are the GovStack Digital Registries and Information Mediator specifications |
| External-link list | GovStack Digital Registries specification, version 3.0-alpha (sections 4.2, 5.2, 8, 9.2.1; DRS-5, DRS-6, DRS-8, DRS-21, DRS-33, DRS-34, DRS-35, DRS-37); GovStack Information Mediator specification, version 1.1.1 (sections 6.2, 6.3); OpenAPI Specification 3.0.3 |

### Storyboard — the demonstration segment of 3.7: an update refused, an update accepted, and the record of use

_A storyboard on the specimen plr-learner-register.schema.yaml, whose access section holds the rules. Nothing in it has run. It needs configurations RG5, the access rules, and RG6, the audit log with the record of personal-data use. When checks RG5 and RG6 pass, the segment is recorded from these steps._

| Step | What is shown | What the viewer sees | What counts as a pass |
| --- | --- | --- | --- |
| 1 | The access rules | The table of rules: the registration service may create and update; other services may only read, field by field; a parent may read their own child's record | The rules shown are the ones configured |
| 2 | An update from a read-only service | A change to a learner's grade sent with the register's update operation (DR §8, update) by a service that may only read | The update is refused, and the record is unchanged (check RG5) |
| 3 | The same update from the registration service | The same change sent by the registration service | The update is accepted, and the change log shows the value before and after (check RG5) |
| 4 | One read of the learner's record | A permitted service reads the record once | The read is logged with the record, the reader and the time |
| 5 | The parent's report | The personal-data usage report for that learner (DR §8, mypersonalDataUsage) | It shows the read, the reader and the time (check RG6) |

## 4. Production notes

### 4.1 Standalone videos

Each of the seven videos stands alone. None opens with an introduction to the module or closes by pointing to another video. A viewer who finds 3.4 by search understands it without having watched 3.2.

### 4.2 Slide branding

Every slide follows ITU's template: title in Arial Bold 28pt, body in Arial 18pt, background #E5F5FB, text only. Diagrams appear only as text boxes and text arrows, with every label in plain text. No images, icons, thumbnails, country emblems or agency logos; Giga's repository and diagram are named and cited, not shown.

### 4.3 No individuals on screen

No person appears in any video. Narration is by an AI avatar generated by ITU's production pipeline or by voice-over over the screen alone; the scripts work with either.

### 4.4 Voice and tone

Direct address: 'your register', 'your director', 'your schools'. Plain English at about an eighth-grade level, short sentences and active verbs. The examples are African public-sector reality: donor-funded systems that each keep their own list, the parent at five counters, the head teacher's term list. Terms of the specification — schema, field, link, version, tier — are introduced in plain words the first time they are used.

### 4.5 External-link list and 'Find the link in the description'

No address is read aloud. Each subtopic's metadata carries its list of external links, and each Sources slide ends with 'Find the link in the description'. Section 6 gives the aggregate list with addresses for ITU's production pipeline.

### 4.6 What may be said to run

No script, slide or page says that anything runs, is live or is proven until its check has passed and the run is recorded. The demonstration segments of 3.2, 3.3, 3.4, 3.6 and 3.7 are storyboards. Each script says what the walkthrough will show, what its check runs and what counts as a pass, and that nothing has run. When a check passes on the built configuration, the segment is recorded from its storyboard, and the script gains one sentence stating the result and its date.

### 4.7 The specimens

The configurations of Module 3 are shown as two specimens, written for Progressa in the terms of the GovStack Digital Registries specification, version 3.0-alpha, and of Giga's published data flow. Each is marked at its head 'specimen, not yet run'. They are not the build: each is replaced by the file as built when its checks pass.

| Specimen | Configurations | Used by |
| --- | --- | --- |
| specimens/registry/plr-learner-register.schema.yaml | RG1, RG2, RG3, RG4, RG5, RG6, RG8, RG12 and RG13: the register, its schema, the link to the school, versions, access rules, the audit log, the list of services, the export, and deletion | 3.3 and 3.7, and the storyboards of 3.3 and 3.7 |
| specimens/registry/plr-load-tiers.yaml | RG7, RG9, RG10 and RG11: the five tiers, the checks at bronze, the load into the register and the reconciliation of each load | 3.2, 3.4 and 3.6, and their storyboards |

### 4.8 Three settings the build states

Three choices belong to the build of the configurations and are stated in the configuration files, not in the scripts. The scripts teach the rule; the build supplies the value. First, the key of the learner register: it is never the national identity number; the register keeps a number of its own, with the identifier the identity authority gives to the service stored beside it. Second, the identity interface of the demonstration, which Module 4 teaches. Third, the product and the format of the schema file: the file names the product and the format it is written in, and the edition of the specification it implements.

### 4.9 GitBook companion

Each subtopic has a page in the written KP3 guide that holds the content of its video written out in full, its worked example, its AI usage tip with the prompt ready to copy, and its sources with their links. The guide's page for each build subtopic links to the specimen it shows and, once built, to the configuration and its check.

## 5. Open calibration items

The drafting of Module 3 raised the items below. They are put forward for discussion with ITU/Giga at the Tuesday weekly call.

### 5.1 The edition of the Digital Registries specification

Module 3 cites the Digital Registries specification in its edition 'Version 3.0-alpha; June 2026'. Its release notes call it an early release that represents the direction of the working group, which has discussed a re-scope of both the Registries and the Registration blocks. The requirement numbers DRS-1 to DRS-37 may change in a later edition. Every requirement is cited by its number and its short title together, so that a renumbering can be traced; the scripts are checked again against each new edition before recording.

### 5.2 Giga's flow, its attribution and its licence

Module 3 follows the five tiers of UNICEF Giga's published data flow, cited at a fixed commit of the repository giga-dagster. The repository carries no licence, so the scripts teach that the pattern may be followed and cited and that its code may not be copied. Giga is the programme under which ITU commissions KP3, so ITU may wish to confirm that the attribution of the flow to UNICEF Giga, as the repository states it, is how ITU wants it named in its own Knowledge Product.

### 5.3 The demonstration segments

The five demonstration segments of Module 3 are storyboards until the register and its load are built. Where the demonstrations of KP3 are to run is a question put to ITU; the storyboards hold under any answer.

### 5.4 Sharp lines for a keep, soften or cut decision

'Write such a file straight into the register, and the register becomes one more list nobody trusts' (3.2); 'A program can prepare it, but it cannot replace it' (3.2); 'Most teams answer with a feeling' (3.6); 'Few features build more trust' (3.7).

### 5.5 Signposts

The project's standing rules ask that examples from other countries be drawn from three African signposts and one international one. The public sources read for Module 3 name no country's register, so the module cites no country signpost and uses the Progressa example throughout. A signpost is added only when a public source for it has been read and accepted.

## 6. Annex — aggregate external-link list

Compiled across the seven subtopics for ITU's video production pipeline, to be split per subtopic into the corresponding YouTube descriptions.

| Subtopic | Sources referenced, with their addresses |
| --- | --- |
| 3.1 | GovStack Digital Registries specification, version 3.0-alpha, sections 2 and 10.5.8 and the release notes — https://specs.govstack.global/registries; PAERA v1.0, Annex 1 section A1.2.5, Annex 3 and section 3.4.2 — https://paera.govstack.global/; UNICEF Giga, giga-dagster, docs/README.md — https://github.com/unicef/giga-dagster/blob/46b72af67066363a29d3d933dcdc619489bd0be5/docs/README.md |
| 3.2 | UNICEF Giga, giga-dagster, docs/dataflow.md — https://github.com/unicef/giga-dagster/blob/46b72af67066363a29d3d933dcdc619489bd0be5/docs/dataflow.md; Databricks, 'What is Medallion Architecture?' — https://www.databricks.com/blog/what-is-medallion-architecture; GovStack Digital Registries specification, version 3.0-alpha, DRS-2 and DRS-19 — https://specs.govstack.global/registries |
| 3.3 | GovStack Digital Registries specification, version 3.0-alpha, DRS-1, DRS-2, DRS-3, DRS-4, DRS-10, DRS-11, DRS-13, DRS-14, DRS-17, DRS-28, DRS-30 and section 8.2 — https://specs.govstack.global/registries; GovStack Identity specification, version 2.0, sections 4.1.1 and 4.1.2 and requirement 11 of section 6.1 — https://specs.govstack.global/identity |
| 3.4 | UNICEF Giga, giga-dagster, docs/dataflow.md — https://github.com/unicef/giga-dagster/blob/46b72af67066363a29d3d933dcdc619489bd0be5/docs/dataflow.md; GovStack Digital Registries specification, version 3.0-alpha, section 4.1 and DRS-17 — https://specs.govstack.global/registries |
| 3.5 | UNICEF Giga, giga-dagster, docs/dataflow.md and docs/README.md — https://github.com/unicef/giga-dagster/blob/46b72af67066363a29d3d933dcdc619489bd0be5/docs/dataflow.md; the repository page, whose licence field is empty — https://github.com/unicef/giga-dagster; Databricks, 'What is Medallion Architecture?' — https://www.databricks.com/blog/what-is-medallion-architecture |
| 3.6 | GovStack Digital Registries specification, version 3.0-alpha, DRS-7, DRS-21, DRS-24, DRS-26 and sections 8.1 and 8.2 — https://specs.govstack.global/registries |
| 3.7 | GovStack Digital Registries specification, version 3.0-alpha, sections 4.2, 5.2, 8 and 9.2.1 and DRS-5, DRS-6, DRS-8, DRS-21, DRS-33, DRS-34, DRS-35 and DRS-37 — https://specs.govstack.global/registries; GovStack Information Mediator specification, version 1.1.1, sections 6.2 and 6.3 — https://specs.govstack.global/information-mediator; OpenAPI Specification 3.0.3 — https://spec.openapis.org/oas/v3.0.3.html |

All references are public and can be checked by the reader.

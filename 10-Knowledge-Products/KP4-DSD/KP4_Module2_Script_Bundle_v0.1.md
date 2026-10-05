<!-- GENERATED from build_kp4_module2_v01.js by bundle_to_md.py — do not hand-edit; edit the build script and regenerate. -->

# KP4 Module 2 — Video Script Bundle v0.1 (ITU-aligned)

| Field | Value |
| --- | --- |
| Document | Video script bundle for Module 2 of KP4 |
| Version | v0.1 — written on the KP4 outline and content plan, version 0.2, of 4 October 2026 |
| Date | 4 October 2026 |
| Module persona | S (Strategist) — the public-sector middle manager in education who commissions the service, judges the supplier's offer, convenes the review and makes the case to the minister and the donor |
| Subtopics | Six subtopics (2.1 – 2.6), each shipped as one standalone video of about five minutes |
| Module runtime | Approximately 30 minutes across six standalone videos |
| Worked examples | E2-1 to E2-6, the accepted examples for Progressa in KP4-DSD/examples/, each a simulated case in which every name, date and figure is invented |
| Demonstration segments | None. Nothing is generated in this module; every subtopic is a voice-over over text-only slides |
| Self-check | Four questions for the manager, drawn from the six single messages (section 7) |
| Prepared by | FiscalAdmin OÜ |

This bundle is the v0.1 working draft of Module 2 of KP4 — Designing Digital Government Services using a Building Block Approach. Module 2 teaches how to break a service down before anyone designs a screen: the sector's catalogue of services and the blocks they share, the register of what was asked, the records the service keeps and whose each fact is, the goals tied to what was asked, what every goal may use, and what the service is built on with every flow that crosses its boundary. The register is plain English at about an eighth-grade level; technical terms are explained in plain words on first use, and each subtopic leads with what the listener can do. The six videos are numbered 2.1 to 2.6 and each stands alone. All slide specifications follow ITU's text-only branding. Each subtopic carries an AI usage tip with a copy-paste Claude prompt. External references use the convention 'Find the link in the description'.

## 1. Document context

### 1.1 What this document is

This document collects the six video scripts of Module 2 of Knowledge Product 4 (Designing Digital Government Services using a Building Block Approach), with slide specifications, metadata, AI usage tips, production notes and a self-check of four questions. It is the v0.1 working draft, written on the KP4 outline and content plan, version 0.2, whose section 1 fixes each subtopic's single message, public sources, worked example and AI usage tip.

### 1.2 What Module 2 teaches

Module 2 carries the first requirement that section 3.4 of the terms of reference places on KP4: how to break services down into reusable components. It teaches the documents a team writes before any screen is designed, in the order of the SDD method, specification-driven development, in which every document a person writes is accepted before the next is begun. The listener does not write these documents; staff, a supplier or an AI assistant does. The listener commissions them, judges them and accepts them, so each script says what the document is for, what the manager must see in it before accepting it, and where the manager's own decision lies.

Each subtopic uses one worked example, a filled extract of the documents of a two-body service in Progressa, the fictional country of these Knowledge Products: Progressa's quality authority for higher education registers and licenses private institutions, and its ministry of education reads the authority's register instead of asking the institution again. The examples are the accepted files E2-1 to E2-6 in KP4-DSD/examples/, used as they stand. Nothing is built or generated in this module.

### 1.3 The names used for Progressa

| Name | What it is, and its part in Module 2 |
| --- | --- |
| PHEQA | The Progressa Higher Education Quality Authority. It registers and licenses private higher-education institutions, keeps the register of institutions and hears an institution's appeal. |
| MoEYS | Progressa's ministry of education. The minister decides a licence on PHEQA's recommendation, approves a change of an institution's name, publishes the list of registered institutions in the Gazette and reviews a decision of PHEQA at a person's request. |
| PNIA | The Progressa National Identity Authority. Its sign-in tells a service who a person is and gives each service its own identifier for the person. |
| PDGA | The Progressa Digital Government Authority. It operates Linkup. |
| Linkup | The data exchange layer set up in KP2, which GovStack calls the Information Mediator. It carries the ministry's reading of PHEQA's register. |
| The Payments block | The government's Payments block, through which the application fee is paid. |
| PDCA | The Progressa Digital Credentials Authority, which will issue a learner's credential as the next service on the same foundation. |

### 1.4 How to read this document

Section 2 gives Module 2 at a glance. Section 3 holds the script of each subtopic: shaded blocks are on-screen cues, plain paragraphs are the voice-over, and the slide specification, AI usage tip and metadata follow. Section 4 collects the production notes. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate external-link list for ITU's production pipeline. Section 7 is the module's self-check.

## 2. Module 2 at a glance

Six standalone subtopic videos. One Strategist persona throughout. Total runtime approximately thirty minutes. Each video has a single message, quoted word for word from the KP4 outline and content plan, version 0.2, and is discoverable on its own; the playlist provides navigation but is not needed to understand any one video.

| # | Title | Single message | Runtime |
| --- | --- | --- | --- |
| 2.1 | One catalogue of the sector's services, and the blocks they share | List every service the sector's bodies owe once, with what each rests on, before you specify any one of them. | ~5 min |
| 2.2 | Write down what was asked before anyone designs | One entry for each separate thing asked, in the customer's words, with where it was said. | ~5 min |
| 2.3 | The records the service keeps, and whose each one is | For every fact: we keep it, we take it from another body, or we must not hold it. | ~5 min |
| 2.4 | Every goal named, and each tied to what was asked | A service is broken into the goals people have in it; every goal serves an entry and every entry is served by a goal. | ~5 min |
| 2.5 | What every goal may use, and may not invent | States, settings and code lists are written once and shared; a goal that needs something missing raises a question. | ~5 min |
| 2.6 | What the service is built on, and what crosses its boundary | One document names the platform, the shared blocks it uses and every flow that crosses to another body. | ~5 min |

## 3. The scripts

## 3.1 Subtopic 2.1 — One catalogue of the sector's services, and the blocks they share

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — the public-sector middle manager in education who commissions the service, judges the supplier's offer, convenes the review and makes the case to the minister and the donor |
| Target runtime | ~5 min (≈520 spoken words) |
| PAERA anchor | UNDP, 'Digital public infrastructure' web page; UNDP Compendium (21 August 2023), pages 3 and 4; PAERA v1.0 §2.6 |

> **Single message —** _List every service the sector's bodies owe once, with what each rests on, before you specify any one of them._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'One catalogue of the sector's services, and the blocks they share'. Voice-over begins._

A donor offers to fund a new licensing system for your quality authority. Before you say yes, ask for one page the donor has not asked for: every service your sector owes, and what each one rests on.

> _Slide 2 — Title: 'One catalogue, written once for the sector'. Body, four text rows: 'The service.' 'The body that owes it.' 'How it runs today.' 'The shared blocks it cannot run without.'_

That page is the sector's catalogue of services. It lists every service the sector's bodies owe to the public, once, before anyone specifies any one of them. Each row gives four things: the service, the body that owes it, how it runs today, and the shared blocks it cannot run without. The catalogue is written for the whole sector, not for one project. It comes before the first document of any single service, so that no project decides alone what the sector will share.

> _Slide 3 — Title: 'Progressa's higher-education services'. Body, a plain-text table of seven rows, service and body: 'Register an institution — PHEQA.' 'License an institution — PHEQA, with the minister's decision.' 'Hear an institution's appeal — PHEQA.' 'Approve a change of name — MoEYS.' 'Publish the list of registered institutions — MoEYS.' 'Review a decision of PHEQA — MoEYS.' 'Issue a learner's credential — PDCA, later.'_

Here is Progressa's catalogue for higher education. The quality authority, PHEQA, owes three services: registering an institution, licensing it, and hearing its appeal. The ministry, MoEYS, owes three more: approving a change of an institution's name, publishing the list of registered institutions in the Gazette, and reviewing a decision of PHEQA. The credentials authority, PDCA, will owe the seventh, a learner's credential. Today most of them run on paper, by letter, or from a spreadsheet at the registration desk.

> _Slide 4 — Title: 'Read down one column'. Body, three text rows: 'The register of institutions: one service writes it; six rest on it, five now and one later.' 'PNIA's sign-in: six services now, the seventh later.' 'One service in a column: a project's tool. Many: the sector's infrastructure.'_

Now read the catalogue down one column, the register of institutions. The first service writes it. Every one of the other six rests on it: five now, and the learner's credential later. Read the column of PNIA's sign-in the same way. Six services rest on it now, and the seventh will, and none of them needs its own way of knowing who a person is. A block with one service in its column is a project's tool. A block with many is the sector's infrastructure.

> _Slide 5 — Title: 'Why only the sector sees it'. Body, two contrasting text rows: 'Inside one project: its own list is always faster.' 'Across the sector: one register paid for, six services carried.'_

Inside one project, building your own list of institutions is always faster than agreeing to read somebody else's. That is not a failure of discipline. It is what a project is paid to do, and it is how one donor comes to fund a register at the authority while another funds a separate list at the ministry. Procurement rules can make each contract cheaper, but only planning for the whole sector makes re-use possible. If each service keeps its own list, Progressa pays for seven lists and spends years making them agree.

> _Slide 6 — Title: 'What the published sources say'. Body, three text rows: 'UNDP: a set of foundational digital systems; from fragmented systems to shared infrastructure.' 'UNDP compendium: shared digital systems at societal scale; digital identity, digital payments, consent-based data sharing.' 'PAERA: DPI is not neutral and shapes what can be built on top of it.'_

The published sources point the same way. The UNDP calls digital public infrastructure a set of foundational digital systems, and says that moving from fragmented systems to shared digital infrastructure requires more than new software: it demands improved governance, funding and institutional responsibilities. Its compendium describes digital public infrastructure as a set of shared digital systems that give access to services at societal scale, and names three categories: digital identity, digital payments and consent-based data sharing. PAERA, GovStack's reference architecture, adds that DPI is not neutral and shapes what can be built on top of it. The catalogue is where your sector decides that foundation, before a project decides it for you.

> _Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'List every service the sector's bodies owe once, with what each rests on, before you specify any one of them.'_

Before you approve the first project, ask for the catalogue and look down each column. A block that many services rest on should be planned and funded for the sector.

> _Slide 8 — Title: 'Sources'. Body: UNDP, 'Digital public infrastructure', web page; UNDP, Accelerating the SDGs through Digital Public Infrastructure: A Compendium of the Potential of Digital Public Infrastructure, 21 August 2023, pages 3 and 4 ('Introduction' and 'Understanding DPI'); PAERA version 1.0, GovStack, section 2.6. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'One catalogue of the sector's services, and the blocks they share'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 2.1) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Four text rows: the four things each row of the catalogue gives. | The core payload. Text-only list. |
| 3 | Plain-text table of Progressa's seven higher-education services, each with the body that owes it. | Progressa's names as the plan gives them. No logos, no emblems. |
| 4 | Three text rows: the column of the register, the column of the sign-in, and the rule for reading a column. | The drawn catalogue with its columns is figure F5 of the written guide; the slide stays text-only. |
| 5 | Two contrasting text rows: one project against the whole sector. | Carries the structural argument that planning enables re-use. Text boxes side by side are allowed; labels in plain text. |
| 6 | Three text rows, one for each published source, in short quoted phrases. | Each phrase is the source's own wording or a close paraphrase marked as such on the written page. |
| 7 | Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box. | The single message, word for word. |
| 8 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Draft the sector's catalogue of services from its mandate.** The prompt in the companion material gives you a draft catalogue of the sector's services, each row with its mandate sentence and the blocks it rests on. Before the next video.

### AI usage tip — Draft the sector's catalogue of services from its mandate

**What the prompt does:** A manager is asked to approve one project, but nobody has listed the services the sector owes or the blocks they would share. Without that list, nobody can see which block many services rest on, and each project builds its own.

**Prompt template (copy-paste into Claude):**

```text
Below is the mandate of the public bodies of [country X]'s [education sub-sector], as published in law or regulation [paste the text, keeping its article numbers], and the list of shared blocks the government has or plans, such as the national sign-in, a register, the data exchange layer and the payments block [paste the list]. Draft the sector's catalogue of services. Produce one row for each service a body owes to the public, with: (1) the service, named as what the public gets; (2) the body that owes it; (3) the sentence of the mandate that creates the duty, quoted word for word with its article; (4) how it is delivered today, or 'not known'; (5) for each shared block, whether the service cannot run without it, will need it later, or does not need it. Do not add a service that no sentence of the mandate supports; list any service you think is missing separately, marked 'not in the mandate'. Output: a table with one row per service and one column per block, then a count of the services in each block's column.
```

**Inputs and outputs:** Input: the mandate's text with its article numbers, and the list of shared blocks. Output: a draft catalogue of the sector's services, each row with its mandate sentence and the blocks it rests on.

**Safeguard:** The mandate is quoted for every row. A service the prompt adds without a sentence of the mandate behind it is struck out, or confirmed by the body that would owe it before it enters the catalogue.

### Metadata

| Field | Value |
| --- | --- |
| Working title | One catalogue of the sector's services, and the blocks they share |
| YouTube-optimised title | Before you fund one education system: list every service your sector owes |
| Description (60 words) | Before anyone specifies one service, list every service your sector's bodies owe, who owes it, how it runs today and the shared blocks it rests on. Progressa's catalogue shows six higher-education services resting on one register of institutions. Only planning for the whole sector makes that re-use visible. For managers. AI prompt for drafting the catalogue in the description. |
| Tags | service catalogue, building blocks, digital public infrastructure, DPI, re-use, PAERA, UNDP, higher education, Progressa |
| Playlist (YouTube) | KP4 — Module 2: Break the service down before you design it |
| ToR §4 coverage | §3.4 (decompose services into reusable components; the building blocks each service rests on); §4.1 (the sector's catalogue, written before the first step of the method); §4.2 (international frameworks: UNDP on digital public infrastructure, PAERA); §4.3 (AI integration — drafting the catalogue); §4.6 (a simulated example of the catalogue) |
| PAERA citations | PAERA v1.0 §2.6 (Change management: DPI is not neutral and shapes what can be built on top of it) |
| External-link list | UNDP, 'Digital public infrastructure' (web page); UNDP, Accelerating the SDGs through Digital Public Infrastructure: A Compendium of the Potential of Digital Public Infrastructure, 21 August 2023; PAERA v1.0 |

## 3.2 Subtopic 2.2 — Write down what was asked before anyone designs

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — the public-sector middle manager in education who commissions the service, judges the supplier's offer, convenes the review and makes the case to the minister and the donor |
| Target runtime | ~5 min (≈529 spoken words) |
| PAERA anchor | None outside the method: the register of requirements, a document of the SDD method |

> **Single message —** _One entry for each separate thing asked, in the customer's words, with where it was said._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Write down what was asked before anyone designs'. Voice-over begins._

Months into a project, the supplier says a feature was never asked for. The ministry says it was. Nobody can point to the sentence. Your job is to make sure that, from the first week, somebody can.

> _Slide 2 — Title: 'The register of what was asked'. Body, four text rows: 'One entry for each separate thing asked.' 'In the customer's own words.' 'With where it was said.' 'Written before anyone designs.'_

The answer is a register of what was asked. It lists every separate thing the customer asked for, one entry each. Each entry keeps the customer's own words, in quotation marks, and says where they were said: a law and its article, the minutes of a meeting, a letter from the minister. It is drawn from your organisation's own documents, the law, the mandate and the requests, which are kept as received and never edited. It is written before anyone designs anything. Later, every part of the design is measured against it, so it is the one list the design did not write.

> _Slide 3 — Title: 'Five entries from Progressa's regulations'. Body, a plain-text table of five rows: 'R-01 Apply through PHEQA's self-service — article 6(1).' 'R-02 Inspect before recommending — article 9(2).' 'R-03 The minister decides the licence — article 11(1).' 'R-04 The register of institutions is open to the public — article 14(3).' 'R-05 A person aggrieved may ask for a review — article 22(1).'_

Here are five entries from the register of Progressa's quality authority, PHEQA, drawn from its Higher Education Regulations. An application is made through PHEQA's self-service. PHEQA inspects before it recommends. The minister decides the licence. The register of institutions is open to the public. A person aggrieved by a decision of PHEQA may ask the minister to review it. Each entry quotes its article word for word and names it, so anyone can open the regulation and check. Each is one sentence of the regulation, not a summary of a chapter.

> _Slide 4 — Title: 'One thing per entry, and how to tell it is met'. Body, two text rows: 'A sentence that asks for three things becomes three entries.' 'Each entry says, in plain words, what would show it is met.'_

Two habits make a register useful. First, one thing per entry. A sentence that asks for three things becomes three entries, because each may be met, changed or dropped on its own. Second, for each entry the analyst writes in plain words what would show that it is met. For the inspection, that is: no recommendation can be sent to the minister for an application with no recorded inspection. Now the Registrar of PHEQA can tell whether a later design keeps the promise.

> _Slide 5 — Title: 'What the text does not say'. Body, three text rows: 'How many days to ask for a review? Owner: the Director of Higher Education, MoEYS.' 'Does the public register show the name of the person who runs an institution? Owner: the Registrar of PHEQA.' 'Both answers needed by 30 October 2026.'_

Reading the text closely also shows what it does not say. Article 22 gives the right to a review, but no period for asking. Article 14 opens the register to the public, but does not say whether that includes the name of the person who runs an institution. Neither gap is filled with a guess. A guessed period would look complete and could be wrong. Each becomes a question with an owner and a date: the Director of Higher Education at the ministry for the first, the Registrar of PHEQA for the second.

> _Slide 6 — Title: 'Who drafts, and who rules'. Body, three text rows: 'An AI assistant may draft the entries.' 'The analyst rules on every entry: accept, amend or set aside.' 'An entry with no source is struck out.'_

An AI assistant can do the first pass, splitting a long regulation into entries in minutes. But the assistant only proposes. The analyst rules on every entry: accept it, amend it, or set it aside with a reason, a date and a name. An entry that comes back with no article beside it is struck out, unless somebody can say where it was asked. In Progressa, the Registrar of PHEQA then reads each entry against its article before she accepts the register. Do the same: pick three entries at random and open the article each one cites.

> _Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'One entry for each separate thing asked, in the customer's words, with where it was said.'_

One thing per entry, in the customer's words, with its source. Every open question gets an owner and a date. Only then does design begin.

> _Slide 8 — Title: 'Sources'. Body: 'This video cites no outside source. The register of requirements is a document of the SDD method, specification-driven development. Progressa and its Higher Education Regulations are invented for this example.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Write down what was asked before anyone designs'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 2.2) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Four text rows: what the register is. | The core payload. Text-only list. |
| 3 | Plain-text table of five entries, each with its article. | The entries' identifiers may appear in small type. Progressa's regulations are invented for the example. |
| 4 | Two text rows: one thing per entry; what would show it is met. | Text-only. |
| 5 | Three text rows: the two open questions with their owners, and the date. | Names roles, never persons. |
| 6 | Three text rows: the assistant drafts, the analyst rules, an entry with no source is struck out. | Carries the rule that only what a person accepted stands. |
| 7 | Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box. | The single message, word for word. |
| 8 | Sources slide. One short text block; no footer, because the video cites no outside source. | Says where the content comes from. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Split an official text into entries of the register.** The prompt in the companion material gives you a draft register: one entry per thing asked, in the text's own words, with its source line, and a list of open questions. Before the next video.

### AI usage tip — Split an official text into entries of the register

**What the prompt does:** A team receives a regulation, a minister's letter or the minutes of a meeting and must turn it into the register of what was asked before design begins. Done by hand, entries merge, lose their source or drift from the official's words.

**Prompt template (copy-paste into Claude):**

```text
Below is an official text that says what a new service must do in [country X] [paste the text, keeping its article or paragraph numbers]. Split it into entries of a register of requirements. For each entry give: (1) a number, R-01, R-02 and so on; (2) what was asked, quoted word for word from the text, one separate thing per entry; (3) where it was said: the article, paragraph or line; (4) in plain words, what would show that the entry is met; (5) the kind: a function the service performs, or a constraint it must respect. Where one sentence asks for several things, make one entry for each. Do not add anything the text does not say. Then list the questions the text leaves open, each with the entry it arises from and why it matters. Output: a table of entries, then a table of open questions with an empty column for the owner.
```

**Inputs and outputs:** Input: the official text with its article numbers. Output: a draft register: one entry per thing asked, in the text's own words, with its source line, and a list of open questions.

**Safeguard:** An entry keeps the official's own words. The analyst rules on every entry, and nothing the prompt adds without a source line is kept. The owner of each open question is named by your organisation, not by the prompt.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Write down what was asked before anyone designs |
| YouTube-optimised title | Write down what was asked: the register every education service should start from |
| Description (60 words) | Disputes about what was asked start in the first week of a project. Write one entry for each separate thing asked, in the customer's own words, with the article or letter it came from. Five entries from Progressa's higher-education regulations show how, with two open questions given an owner and a date. For managers. AI prompt for splitting an official text in the description. |
| Tags | requirements, register of requirements, specification, open questions, AI assistant, higher education, Progressa |
| Playlist (YouTube) | KP4 — Module 2: Break the service down before you design it |
| ToR §4 coverage | §3.4 (decompose services into reusable components: what was asked, before the parts are named); §4.1 (a step of the method, with who writes it, who rules and how it is checked); §4.3 (AI integration — the assistant drafts the entries and a person rules on each); §4.6 (a simulated example of the register) |
| PAERA citations | None. The content is the SDD method's own. |
| External-link list | None. This subtopic cites no public source; the register of requirements is part of the SDD method. |

## 3.3 Subtopic 2.3 — The records the service keeps, and whose each one is

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — the public-sector middle manager in education who commissions the service, judges the supplier's offer, convenes the review and makes the case to the minister and the donor |
| Target runtime | ~5 min (≈510 spoken words) |
| PAERA anchor | GovStack Digital Registries 3.0-alpha §2 and §8.2; GovStack Identity 2.0 §9.1.1 |

> **Single message —** _For every fact: we keep it, we take it from another body, or we must not hold it._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The records the service keeps, and whose each one is'. Voice-over begins._

An institution changes its name. Weeks later, other offices of government still use the old one. Nobody did anything wrong: each office kept its own copy. You can stop this before the first screen is drawn.

> _Slide 2 — Title: 'Each record, defined in a single sentence'. Body, four text rows: 'An institution.' 'An application.' 'A licence.' 'A decision.' Footer line: 'A licence: one permission to one institution to operate, of one kind, from one day.'_

Start with the records the service keeps. For the licensing service of Progressa's quality authority, PHEQA, there are four: an institution, an application, a licence and a decision. Each gets one sentence saying what one of them means. A licence, for example, is one permission PHEQA grants to one institution to operate, of one kind, from one day, which may later be suspended or cancelled. An application is one request by one applicant, for one kind of licence, for one institution, made on one day. If two officers would define a record differently, that is a question for the Registrar, with her name on it.

> _Slide 3 — Title: 'Three answers for every fact'. Body, three large text rows: 'We keep it.' 'We take it from another body.' 'We must not hold it.'_

Then, for every fact the service uses, the team gives one of three answers. We keep it. We take it from another body. Or we must not hold it. A fact with no answer does not stay unanswered for long. It will be kept by whoever builds the first screen that needs it, and that is how several offices end up with several copies of one name.

> _Slide 4 — Title: 'Three facts, three answers'. Body, three text rows: 'The institution's name: PHEQA keeps it.' 'The applicant's identity: taken from PNIA, never copied.' 'The institution's record at MoEYS: read from PHEQA's register; only the register number kept.'_

Three facts from Progressa show all three answers. The institution's name: PHEQA keeps it, because PHEQA registers institutions. The applicant's identity: taken from PNIA, the identity authority, and never copied. PHEQA keeps the identifier PNIA gives it and the name PNIA releases, and never the national number. The institution's record, as the ministry needs it: MoEYS reads it from PHEQA's register each time and keeps only the register number. A ministry with no copy cannot drift out of step.

> _Slide 5 — Title: 'What the published blocks say'. Body, three text rows: 'Digital Registries: a trusted, authoritative service; the single source of truth.' 'Others check that a record exists, or read a value from it.' 'Identity: the person signs in and approves which facts are shared.'_

The GovStack specifications describe the same split. The Digital Registries specification calls a register a trusted, authoritative service and the single source of truth, and lists the functions by which another service checks that a record exists or reads a value from it. The Identity specification describes the person signing in on the identity block's own screen and choosing which personal data it may share. PHEQA uses the facts the person approved, and nothing more. A register is kept by one body and read by the others; it is not copied by each of them.

> _Slide 6 — Title: 'The read-back'. Body, three text rows: 'Read the records aloud to the official who runs the service.' 'Stop at any sentence the official does not recognise.' 'Progressa: the sentence on one licence of each kind was wrong.'_

Last comes the read-back. The supplier's analyst reads the records to the Registrar of PHEQA in plain sentences, with the head of the registration desk beside her. She stopped him at one: an institution may hold one licence of each kind. Not so. An institution whose provisional licence was cancelled may apply again. The records were changed. The read-back gives the business side and the builders one shared language, and a sentence the official does not recognise is a question for the records. Before you accept the records, ask for the read-back, read to the person who runs the service.

> _Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'For every fact: we keep it, we take it from another body, or we must not hold it.'_

For every fact, ask which of the three answers it has. A fact with no answer will be kept by whoever builds the screen that first needs it.

> _Slide 8 — Title: 'Sources'. Body: GovStack Digital Registries Building Block specification, version 3.0-alpha, June 2026, sections 2 and 8.2; GovStack Identity Building Block specification, version 2.0, December 2025, section 9.1.1. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The records the service keeps, and whose each one is'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 2.3) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Four text rows naming the records, and one footer line defining a licence. | The drawn records, with whose each fact is, are figure F6 of the written guide; the slide stays text-only. |
| 3 | Three large text rows: the three answers. | The core payload. Kept on screen while the voice-over gives the reason. |
| 4 | Three text rows: three facts and their answers. | Progressa's names as the plan gives them. |
| 5 | Three text rows, each a short phrase from the cited specification. | The registry phrases are the specification's own words. |
| 6 | Three text rows: the read-back, with the sentence that was wrong. | Carries the shared picture between the official and the builders. |
| 7 | Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box. | The single message, word for word. |
| 8 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Read the records back as plain sentences.** The prompt in the companion material gives you the records read back as plain sentences, and a list of facts with no keeper. Before the next video.

### AI usage tip — Read the records back as plain sentences

**What the prompt does:** The records a service keeps are usually drawn as a data model that the official who runs the service cannot read. Mistakes in it are found only after the screens are built, and a fact with no keeper is kept by whoever builds the first screen.

**Prompt template (copy-paste into Claude):**

```text
Below is the list of records a new service in [country X] will keep, with the facts each record holds and how the records relate [paste the supplier's list or data model]. Below that is the list of other bodies the service deals with [paste the list]. Do three things. (1) For each record, write one sentence saying what one of them means, in words the official who runs the service would use. (2) Write each relationship between records as a plain sentence, such as 'An institution may have many applications; each application is for one institution.' (3) For every fact, say which of three answers the list gives: we keep it, we take it from another body (name the body), or we must not hold it; where the list gives none, write 'keeper not stated'. Use no technical words such as entity, attribute or cardinality. Output: the sentences, numbered for reading aloud, then a table of every fact with its answer, with the facts that have no keeper listed first.
```

**Inputs and outputs:** Input: the supplier's list of records with their facts, and the bodies the service deals with. Output: the records read back as plain sentences, and a list of facts with no keeper.

**Safeguard:** The read-back is checked by the official who runs the service, read aloud to her. A sentence the official does not recognise is a question for the records, not a wording to polish.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The records the service keeps, and whose each one is |
| YouTube-optimised title | We keep it, we take it, or we must not hold it: who owns each fact in a public service |
| Description (60 words) | For every fact a service uses, decide: we keep it, we take it from another body, or we must not hold it. Progressa's quality authority keeps an institution's name and takes the applicant's identity from the identity authority, while the ministry reads the register instead of copying it. Plus the read-back that catches mistakes early. AI prompt for the read-back in the description. |
| Tags | data ownership, registries, single source of truth, identity, GovStack, once-only, higher education, Progressa |
| Playlist (YouTube) | KP4 — Module 2: Break the service down before you design it |
| ToR §4 coverage | §3.4 (decompose services into reusable components; integrate the identity and registry blocks); §4.1 (a step of the method, with its read-back); §4.3 (AI integration — the read-back in plain sentences); §4.5 (data models: the records and whose each fact is); §4.6 (a simulated example of the records) |
| PAERA citations | None. This subtopic rests on the GovStack documents in the external-link list. |
| External-link list | GovStack Digital Registries Building Block specification, version 3.0-alpha; GovStack Identity Building Block specification, version 2.0 |

## 3.4 Subtopic 2.4 — Every goal named, and each tied to what was asked

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — the public-sector middle manager in education who commissions the service, judges the supplier's offer, convenes the review and makes the case to the minister and the donor |
| Target runtime | ~5 min (≈516 spoken words) |
| PAERA anchor | None outside the method: the list of goals of the SDD method, and its check against what was asked in both directions |

> **Single message —** _A service is broken into the goals people have in it; every goal serves an entry and every entry is served by a goal._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Every goal named, and each tied to what was asked'. Voice-over begins._

A supplier shows you a long list of screens and says the design is complete. Complete against what? One table answers that question in both directions, and you can read it without any technical training.

> _Slide 2 — Title: 'A goal, not a function'. Body, three text rows: 'A goal: something one person gets done, in one sitting, with a result they can see.' 'Yes: apply for a provisional licence.' 'No: maintain institution data.'_

Start by breaking the service into goals. A goal is something one person wants to get done with the service, in one sitting, that leaves a result they can see. Apply for a provisional licence is a goal. Maintain institution data is not: nobody sits down to do it, and nobody can say when it is finished. Name each goal with the person who has it, and the list reads like the work of real people.

> _Slide 3 — Title: 'Progressa's goals'. Body, two plain-text lists. PHEQA: 'Apply for a provisional licence — the applicant.' 'Record the application fee — the finance officer.' 'Record an inspection visit — the inspector.' 'Recommend a decision to the minister — the registration officer.' 'Appeal against a decision of PHEQA — the institution.' MoEYS, all the minister's: 'Decide on a licence.' 'Approve a change of an institution's name.' 'Publish the list of registered institutions in the Gazette.' 'Review a decision of PHEQA at a person's request.'_

Here are the goals of Progressa's two applications. In the quality authority's, PHEQA's: the applicant applies for a provisional licence, the finance officer records the fee, the inspector records a visit, the registration officer recommends a decision to the minister, and an institution appeals. In the ministry's: the minister decides on a licence, approves a change of an institution's name, publishes the list of registered institutions in the Gazette, and reviews a decision of PHEQA at a person's request. Each goal starts with what the person does, and each has one person who wants it done.

> _Slide 4 — Title: 'The check in both directions'. Body, three text rows: 'Goals across the top, entries of the register down the side.' 'Every column needs a mark: each goal serves an entry.' 'Every row needs a mark: each entry is served by a goal.'_

Now tie each goal to the register of what was asked. Put the goals across the top and the entries down the side, and mark each goal against the entries it serves. Then read the table both ways. Every column should have a mark, because every goal must serve something that was asked. Every row should have a mark, because everything that was asked must be served by a goal. This is the first measure of completeness, and a manager can read it without help.

> _Slide 5 — Title: 'Progressa: one empty column, one empty row'. Body, two text rows: 'Empty column: record the application fee. No entry asks for a fee.' 'Empty row: the register of institutions is open to the public. No goal lets the public look.'_

In Progressa the table showed one of each. The goal record the application fee had an empty column: no entry of the register asked for a fee. The entry the register of institutions is open to the public had an empty row: no goal let a member of the public look an institution up. An empty column is something the supplier will build that nobody asked for. An empty row is something you asked for that nobody will build. Both are found by reading the table, long before anything is tested.

> _Slide 6 — Title: 'Each finding becomes a question'. Body, three text rows: 'Is a fee asked for anywhere? Owner: the finance officer of PHEQA.' 'Who looks up the public register? Owner: the Registrar of PHEQA.' 'Answers needed by 6 November 2026.'_

Neither finding was fixed on the spot. Each became a question with an owner and a date. The finance officer found the fee in a schedule PHEQA issues under article 7 of the regulations, which nobody had given the analyst. It became a new entry, and the fee goal now serves it. The Registrar added a goal for the public: look up an institution in the register. Both answers came from people who run the service, not from the supplier. Left to the supplier, one gap would have been filled by a guess at the law, and the other by a guess at what the public needs.

> _Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A service is broken into the goals people have in it; every goal serves an entry and every entry is served by a goal.'_

Ask for the table with goals across and entries down. Before you accept the list of goals, look for an empty column and an empty row.

> _Slide 8 — Title: 'Sources'. Body: 'This video cites no outside source. The list of goals and its check in both directions are part of the SDD method, specification-driven development. Progressa is invented for this example.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Every goal named, and each tied to what was asked'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 2.4) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Three text rows: what a goal is, one example of a goal and one of a non-goal. | Text-only. |
| 3 | Two plain-text lists: PHEQA's five goals with who has each, and the minister's four. | Progressa's names as the plan gives them. Roles, never persons. |
| 4 | Three text rows: the table and its two rules. | The core payload. A plain-text grid of a few cells may stand beside the rows; labels in plain text. |
| 5 | Two text rows: the empty column and the empty row found in Progressa. | Text-only. |
| 6 | Three text rows: the two questions with their owners, and the date. | Text-only. |
| 7 | Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box. | The single message, word for word. |
| 8 | Sources slide. One short text block; no footer, because the video cites no outside source. | Says where the content comes from. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Check the goals against the register in both directions.** The prompt in the companion material gives you a table with goals across and entries down, and the empty rows and columns written as questions. Before the next video.

### AI usage tip — Check the goals against the register in both directions

**What the prompt does:** A supplier presents a list of goals or screens and says the design is complete. The manager needs to know what will be built that nobody asked for, and what was asked that nobody will build.

**Prompt template (copy-paste into Claude):**

```text
Below is the full list of goals of a service in [country X], each with the person who has it [paste the list], and the full register of requirements, each entry with its number and its words [paste the register]. Build a table with the goals across the top and the entries down the side. Mark a cell only where the goal clearly serves the entry, and give one line of reason for each mark. Then list (1) every goal with no mark in its column and (2) every entry with no mark in its row. Write each of these as a question for the owner of the list of goals, for example: 'Goal G-02 serves no entry: was a fee asked for anywhere?' Do not propose new goals and do not change any entry. Output: the table, then the two lists of questions.
```

**Inputs and outputs:** Input: the full list of goals and the full register of requirements. Output: a table with goals across and entries down, and the empty rows and columns written as questions.

**Safeguard:** Give the prompt both lists in full, not a summary of either. Its result is a list of questions for the owner of the list of goals, not a change made to either list.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Every goal named, and each tied to what was asked |
| YouTube-optimised title | Is the design complete? The two-way check every manager can read |
| Description (60 words) | Break a service into the goals people have in it, then check the goals against what was asked, in both directions. Progressa's table found a fee goal that nobody had asked for and a public register that nobody would build, and turned each into a question with an owner. For managers who accept designs. AI prompt for the two-way check in the description. |
| Tags | goals, use cases, requirements, completeness, design review, higher education, Progressa |
| Playlist (YouTube) | KP4 — Module 2: Break the service down before you design it |
| ToR §4 coverage | §3.4 (decompose services into reusable components: the goals people have in a service); §4.1 (a step of the method, with its check in both directions); §4.3 (AI integration — the two-way check); §4.6 (a simulated example of the goals and their check) |
| PAERA citations | None. The content is the SDD method's own. |
| External-link list | None. This subtopic cites no public source; the list of goals and its check are part of the SDD method. |

## 3.5 Subtopic 2.5 — What every goal may use, and may not invent

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — the public-sector middle manager in education who commissions the service, judges the supplier's offer, convenes the review and makes the case to the minister and the donor |
| Target runtime | ~5 min (≈496 spoken words) |
| PAERA anchor | None outside the method: the shared groundwork of the SDD method, its states, settings and code lists |

> **Single message —** _States, settings and code lists are written once and shared; a goal that needs something missing raises a question._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'What every goal may use, and may not invent'. Voice-over begins._

A new fee is announced. The supplier quotes weeks of work to change it, because the old figure is written into many screens. That cost was decided long before, on the day nobody asked who owns the fee.

> _Slide 2 — Title: 'Written once, read by every goal'. Body, three text rows: 'States: the stages a record can be in.' 'Settings: a value with an owner, such as a fee.' 'Code lists: the choices offered, such as the kinds of institution.'_

Several goals of a service need the same things: the fee for an application, the kinds of institution, the states a licence can be in. If each goal writes its own, they will disagree within a year. So they are written once, in one shared document called the shared groundwork, and every goal reads them from there. Three kinds of thing live there: states, settings and code lists. A person writes the shared groundwork, with an AI assistant if they wish, and each setting has an owner, a named person who confirms its value.

> _Slide 3 — Title: 'A setting with an owner: the application fee'. Body, four text rows: 'Value: 1,200 in Progressa's currency.' 'Owner: the finance officer of PHEQA.' 'Source: PHEQA's fee schedule under article 7.' 'A new value carries the date it takes effect.'_

Take the application fee at Progressa's quality authority, PHEQA. Its value is 1,200 in Progressa's currency. Its owner is PHEQA's finance officer, and its source is the fee schedule PHEQA issues under article 7 of the regulations. Two goals read it: applying for a licence, to show the fee due, and recording the fee, to check the payment. When it changes, the finance officer records the new value with the date it takes effect. An application already made keeps its fee.

> _Slide 4 — Title: 'A code list and a set of states'. Body, three text rows: 'Kinds of institution: university, university college, technical institute.' 'A licence is granted, suspended or cancelled.' 'Each move is made by the registration officer, recording the minister's decision.'_

A code list works the same way. PHEQA's kinds of institution are three: university, university college and technical institute. Every goal that asks for a kind offers this list and no other, and a kind that is retired stays readable on every record that used it. A licence has three states: granted, suspended and cancelled. The shared groundwork says which moves between them are allowed and who may make each one: the registration officer, recording the minister's decision. No goal decides for itself what a suspended licence means.

> _Slide 5 — Title: 'A goal that invented a fee'. Body, two text rows: quoted, 'Step 6. The system shows the fee due, 1,000, and asks the applicant to pay it.' Then: 'Where did 1,000 come from? An old letter at the registration desk.'_

Here is what happens without it. The first draft of the goal apply for a provisional licence said that the system shows the fee due, 1,000. That figure appeared nowhere in the shared groundwork. The analyst had seen it in an old letter at the registration desk. Built that way, the self-service would have asked for the wrong fee, and the finance officer would have found out only when the payments did not match her schedule. Changing it later would have meant finding every goal that had copied the figure.

> _Slide 6 — Title: 'Ask, do not invent'. Body, two text rows: 'The step reads the setting: the application fee as the shared groundwork holds it.' 'Question: one amount, or different by kind of institution? Owner: the finance officer of PHEQA.'_

The step should read the setting, and if the setting does not exist yet, raise a question instead. Is the fee one amount, or does it differ by kind of institution? Owner: the finance officer of PHEQA. She answered: one amount for every kind. The setting was written once, with her name on it, and the step reads it. When you review a draft, search it for figures, periods and lists of choices. Each one should come from the shared groundwork.

> _Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'States, settings and code lists are written once and shared; a goal that needs something missing raises a question.'_

A figure that lives only in one goal's text is an invention, however reasonable it looks. Ask who owns it, and write it once.

> _Slide 8 — Title: 'Sources'. Body: 'This video cites no outside source. The shared groundwork of states, settings and code lists is part of the SDD method, specification-driven development. Progressa and its fee are invented for this example.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'What every goal may use, and may not invent'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 2.5) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Three text rows: states, settings and code lists, each with a short example. | The core payload. Text-only list. |
| 3 | Four text rows: the application fee as a setting with an owner. | The fee is invented for the example and is shown with its currency. |
| 4 | Three text rows: the kinds of institution, the licence's states, and who moves a licence. | The drawn states and moves of the licence are figure F11 of the written guide, used in module 4; the slide stays text-only. |
| 5 | Two text rows: the invented step, quoted, and where its figure came from. | The quotation is shown as a quotation. |
| 6 | Two text rows: the corrected step and the question it should have raised. | Text-only. |
| 7 | Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box. | The single message, word for word. |
| 8 | Sources slide. One short text block; no footer, because the video cites no outside source. | Says where the content comes from. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Find the figures a design invented.** The prompt in the companion material gives you a list of figures found in the design, each with a proposed setting, a proposed owner and its source or a question. Before the next video.

### AI usage tip — Find the figures a design invented

**What the prompt does:** Draft designs carry fees, periods, limits and lists of choices written straight into their text. Each one is a decision someone should own, and each copy drifts when the real value changes.

**Prompt template (copy-paste into Claude):**

```text
Below is a draft design of a service in [country X]: its goals, steps or screens [paste the text]. Below that is the shared list of settings, code lists and states the service already has, each with its owner [paste it, or write 'none yet']. Find every figure, period, limit, date, list of choices and set of states written into the draft. For each one give: (1) where it appears, quoting the line; (2) whether the shared list already holds it, and whether the two values agree; (3) if it is not held, a proposed name for a setting, code list or set of states; (4) a proposed owner, by role; (5) the source of the value if the draft names one, or 'no source: question'. Output: a table with one row for each item found, then the list of questions to put to each proposed owner.
```

**Inputs and outputs:** Input: the draft design and the shared list of settings, code lists and states. Output: a list of figures found in the design, each with a proposed setting, a proposed owner and its source or a question.

**Safeguard:** The prompt only proposes. The owner of each setting confirms its value, and a figure the prompt cannot trace to a source is recorded as a question, never kept as a value.

### Metadata

| Field | Value |
| --- | --- |
| Working title | What every goal may use, and may not invent |
| YouTube-optimised title | Who owns the fee? Settings, code lists and states written once |
| Description (60 words) | Fees, kinds of institution and the states of a licence belong in one shared document, each with an owner, and every goal of a service reads them from there. See how a fee copied from an old letter nearly reached Progressa's self-service, and the question that should have been asked instead. For managers. AI prompt for finding invented figures in the description. |
| Tags | settings, code lists, reference data, states, fees, design review, higher education, Progressa |
| Playlist (YouTube) | KP4 — Module 2: Break the service down before you design it |
| ToR §4 coverage | §3.4 (decompose services into reusable components: what every goal shares); §4.1 (a step of the method, with an owner for every setting); §4.3 (AI integration — finding invented figures); §4.6 (a simulated example of the shared groundwork) |
| PAERA citations | None. The content is the SDD method's own. |
| External-link list | None. This subtopic cites no public source; the shared groundwork is part of the SDD method. |

## 3.6 Subtopic 2.6 — What the service is built on, and what crosses its boundary

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — the public-sector middle manager in education who commissions the service, judges the supplier's offer, convenes the review and makes the case to the minister and the donor |
| Target runtime | ~5 min (≈521 spoken words) |
| PAERA anchor | GovStack Architecture 2.2.0 §3.2 and §4; GovStack Information Mediator 1.1.1 §2; GovStack Registration (default edition) §5.1.4 |

> **Single message —** _One document names the platform, the shared blocks it uses and every flow that crosses to another body._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'What the service is built on, and what crosses its boundary'. Voice-over begins._

Your new service will read another body's register. Has that body agreed? A promise made on someone else's behalf can stall a project at the border between two offices. One page prevents it.

> _Slide 2 — Title: 'One page: what the service is built on'. Body, three text rows: 'The platform it runs on.' 'The shared blocks it uses.' 'Every flow that crosses to another body.'_

That page is the software architecture. It names three things: the platform the service runs on, the shared blocks it uses instead of building its own, and every flow that crosses to another body, in either direction. The solution architect writes it once the register of what was asked, the records and the goals are settled, and agrees it with the bodies on the other side of each crossing. A manager can read it without a technical background.

> _Slide 3 — Title: 'Progressa: two applications on one page'. Body, three text rows: 'PHEQA's application: its own installation of the low-code platform; keeps and writes the register of institutions.' 'MoEYS's application: its own installation; no copy of the register.' 'Shared: PNIA's sign-in, Linkup, the Payments block.'_

Progressa's page shows two applications. The quality authority's, PHEQA's, runs on its own installation of the low-code platform and keeps the register of institutions. It is the only one that writes it. The ministry's, MoEYS's, runs on a second installation and keeps the minister's decisions and the list for the Gazette, but no copy of the register. Both use PNIA's sign-in. Every exchange between the two bodies passes through Linkup, the data exchange layer that PDGA operates, and the fee goes through the Payments block.

> _Slide 4 — Title: 'The table of crossings'. Body, a plain-text table of six rows: 'X-1 Who is signing in — in — from PNIA.' 'X-2 An institution's entry in the register — out, as an answer — to MoEYS, through Linkup.' 'X-3 PHEQA's recommendation — out — to MoEYS.' 'X-4 The minister's decision on a licence — in — from MoEYS.' 'X-5 The minister's approval of a new name — in — from MoEYS.' 'X-6 The fee request and its confirmation — out, then in — the Payments block.'_

The heart of the page is the table of crossings. As PHEQA's application sees it, there are six. Who is signing in comes in from PNIA. An institution's entry goes out to MoEYS, as the answer to the ministry's reading. PHEQA's recommendation goes out to the minister, and the minister's decision on a licence and approval of a new name come back. The fee request goes out to the Payments block, and its confirmation comes in. Each row names its direction, the body on the other side and the channel. For each crossing, the full document also says what happens when a value is missing or out of date, or when the other side cannot be reached. If PHEQA's register cannot be reached, the ministry's officer waits; there is no old copy to use.

> _Slide 5 — Title: 'What the published architecture says'. Body, three text rows: 'GovStack Architecture: loosely coupled building blocks, developed, maintained and replaced independently.' 'Registration block: traffic in and out goes through an Information Mediator or a secure API gateway, a controlled entry point that checks every request.' 'Information Mediator: the channel to registry, identity and payment services.'_

This is the building block approach as GovStack publishes it. Its Architecture specification asks that government systems be built from loosely coupled building blocks that can be developed, maintained and replaced independently, which supports reuse. The Registration specification asks that traffic in and out of the block pass through an Information Mediator or a secure API gateway: a controlled entry point that checks every request. The Information Mediator specification describes the mediator as the channel to registry, identity and payment services. In Progressa, that mediator is Linkup.

> _Slide 6 — Title: 'Every row agreed by the other side'. Body, three text rows: 'MoEYS confirms rows X-2 to X-5; PNIA confirms X-1; the operator of the Payments block confirms X-6.' 'PDGA confirms the use of Linkup.' 'Then the head of PHEQA's ICT unit accepts the page.'_

Before the head of PHEQA's ICT unit accepts the page, the body on the other side of each crossing confirms its row: the ministry for four rows, PNIA for the sign-in, the operator of the Payments block for the fee, and PDGA for the use of Linkup. GovStack's Architecture specification warns that when systems do not share the same rules, every connection becomes a custom project. A crossing nobody on the other side has agreed is a promise made on their behalf.

> _Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'One document names the platform, the shared blocks it uses and every flow that crosses to another body.'_

Count the crossings. For each one, ask who is on the other side, and whether they have seen and confirmed their row.

> _Slide 8 — Title: 'Sources'. Body: GovStack Architecture specification, edition 2.2.0, sections 3.2 and 4; GovStack Information Mediator Building Block specification, version 1.1.1, section 2; GovStack Registration Building Block specification, default edition (23Q4), section 5.1.4. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'What the service is built on, and what crosses its boundary'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 2.6) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Three text rows: the three things the page names. | The core payload. Text-only list. |
| 3 | Three text rows: the two applications and the blocks they share. | The drawn architecture is figure F7 of the written guide; the slide stays text-only, with plain-text boxes at most. |
| 4 | Plain-text table of six crossings: what crosses, direction, the body on the other side. | The crossing numbers may appear in small type at the start of each row. |
| 5 | Three text rows, each a short phrase from a cited specification. | Each phrase is the specification's own wording, shortened. |
| 6 | Three text rows: who confirms which rows, and who accepts the page. | Roles and bodies, never persons. |
| 7 | Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box. | The single message, word for word. |
| 8 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. List every crossing of the service's boundary.** The prompt in the companion material gives you a table of crossings: what crosses, its direction, the body on the other side and the channel it goes through. Before the next video.

### AI usage tip — List every crossing of the service's boundary

**What the prompt does:** A service description says what the service does but rarely lists every flow that crosses to another body. A crossing nobody lists is never agreed, and the project stalls when it reaches it.

**Prompt template (copy-paste into Claude):**

```text
Below is the description of a service in [country X]: what it does, who uses it, and which other bodies and shared blocks it deals with [paste the description]. List every flow that crosses the boundary of the service. For each crossing give: (1) a number, X-1, X-2 and so on; (2) what crosses, in plain words; (3) its direction: in, out, or out then in; (4) the body on the other side; (5) the channel it goes through, such as the national sign-in, the data exchange layer or the payments block; (6) when it happens; (7) the sentence of the description it rests on, quoted. Where you infer a crossing that no sentence states, mark it 'inferred: question'. Output: a table of crossings, then a list of the bodies that must confirm their rows.
```

**Inputs and outputs:** Input: the description of the service. Output: a table of crossings: what crosses, its direction, the body on the other side and the channel it goes through.

**Safeguard:** Each crossing is confirmed with the body on the other side before the page is accepted. A crossing the prompt infers without a sentence of the description behind it is marked as a question.

### Metadata

| Field | Value |
| --- | --- |
| Working title | What the service is built on, and what crosses its boundary |
| YouTube-optimised title | What crosses the border of your service? One page every partner must agree |
| Description (60 words) | One page names the platform a public service runs on, the shared blocks it uses and every flow that crosses to another body. See Progressa's two applications, their six crossings and who must confirm each row, read against GovStack's building block approach. For managers who accept architectures. AI prompt for listing every crossing of a service in the description. |
| Tags | software architecture, building blocks, GovStack, Information Mediator, data exchange, crossings, higher education, Progressa |
| Playlist (YouTube) | KP4 — Module 2: Break the service down before you design it |
| ToR §4 coverage | §3.4 (decompose services into reusable components; integrate identity, registries, information mediation and payments); §4.1 (a step of the method, agreed with the bodies on the other side); §4.2 (international standards: GovStack Architecture, Information Mediator and Registration); §4.3 (AI integration — listing every crossing); §4.5 (architecture: the platform, the blocks and the crossings); §4.6 (a simulated example of the architecture) |
| PAERA citations | None. This subtopic rests on the GovStack documents in the external-link list. |
| External-link list | GovStack Architecture specification, edition 2.2.0; GovStack Information Mediator Building Block specification, version 1.1.1; GovStack Registration Building Block specification, default edition (23Q4) |

## 4. Production notes

### 4.1 Design standard — the split-screen usability test

The bar for every video in Module 2 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to follow along and act on the other half. For Module 2, 'act' means produce the matching working document for the manager's own service: a draft catalogue of the sector's services, a draft register of what was asked, the records read back in plain sentences, the table of goals against what was asked, the list of figures a design invented, or the table of crossings. Each subtopic's AI usage tip produces that document.

### 4.2 Slide branding

Every slide follows the ITU template of the Knowledge Products and Video Materials Guide, section 3.i: title text Arial Bold 28pt; body text Arial 18pt; background colour #E5F5FB. Text only, with no images. Diagrams and text boxes are used only where strictly necessary, and all their labels are plain text. No country emblems and no agency logos. The single-sentence summary slide that closes each subtopic carries the single message word for word, in 28pt type, with the on-screen practice box. The figures the written guide carries for this module (F5, the sector's catalogue; F6, the records and whose each fact is; F7, the architecture) are made for the written guide; the slides stay text-only.

### 4.3 No individuals on screen

No individuals appear in any video. Two options are open: an AI-avatar narrator generated by ITU's production pipeline, or a voice-over over the screen only. The choice is ITU's; the scripts work with either.

### 4.4 Voice and tone

Direct address ('your sector', 'your quality authority', 'before you accept'). Plain language at about an eighth-grade English level. The listener commissions and accepts the documents and does not write them, so every script says what a document is for, what to look for in it and where the manager decides. The documents are named by what they are for: the sector's catalogue of services, the register of what was asked, the records, the goals, the shared groundwork and the software architecture. The method is named once as the SDD method, specification-driven development; no rule identifier, command, file format or file of the method appears. GovStack's name for the data exchange layer, the Information Mediator, is used when its specification is cited.

### 4.5 External links and 'Find the link in the description'

Every subtopic has an external-link list in its metadata, and every script refers to external material with the convention 'Find the link in the description' rather than reading addresses aloud. ITU's production pipeline compiles each list into the video's description. Subtopics 2.2, 2.4 and 2.5 cite no outside source, because their content is the method's own; their Sources slide says so. The aggregate list, with the addresses, is in section 6.

### 4.6 What the scripts claim, and what they do not

Nothing is built, generated or run in Module 2, and no script says otherwise. The worked examples are simulated cases for Progressa: every institution, name, date, article number and figure about Progressa is invented, including the application fee and Progressa's Higher Education Regulations. No figure from a public source is used. Each public source is quoted in short phrases that stand in the cited section, and the sources slide names the edition the plan fixes.

### 4.7 The worked examples, and where they live

Each subtopic draws on one accepted worked example in KP4-DSD/examples/: E2-1 (the catalogue), E2-2 (five entries of the register and two open questions), E2-3 (the records, the three answers and the read-back), E2-4 (the goals and the check in both directions), E2-5 (a setting, a code list, the licence's states and a goal that invented a fee) and E2-6 (the two applications on one page and the table of crossings). The facts they share are fixed in E0, the fact sheet. Each example ends with what to look for before accepting the document it shows; the written guide links each subtopic page to its example.

## 5. Open calibration items

The drafting raised the items below. They are forwarded for discussion with ITU at the Tuesday weekly call.

### 5.1 Source claims to keep under watch

The Digital Registries specification is an early release, version 3.0-alpha of June 2026; its sections 2 and 8.2 were read on 4 October 2026 and may be renumbered. The Registration specification, section 5.1.4, asks that traffic in and out of the block use an Information Mediator or a secure API gateway; subtopic 2.6 says it in those words. The UNDP page on digital public infrastructure carries no date. In the UNDP compendium, the passages cited stand on pages 3 ('Introduction') and 4 ('Understanding DPI'), which print the same numbers. The GovStack Architecture page is labelled 2.2.0 while its version history ends at 2.1.0; the bundle names the edition as the label shows it.

### 5.2 Editorial tone calls

Lines that deserve a deliberate keep, soften or cut decision: 'A block with one service in its column is a project's tool. A block with many is the sector's infrastructure' (2.1); 'An empty column is something the supplier will build that nobody asked for' (2.4); 'A figure that lives only in one goal's text is an invention, however reasonable it looks' (2.5); 'A crossing nobody on the other side has agreed is a promise made on their behalf' (2.6).

### 5.3 Signposts

The project's standing rules ask for African signposts and one international polestar. The plan names no public source on an African country for the matters of this module, so no country signpost is used; the worked examples are Progressa's throughout. Subtopic 2.1 uses the general picture of one donor funding a register at one body and another donor a separate list at the next, without naming a country.

### 5.4 The self-check

Section 7 holds a self-check of four questions drawn from the six single messages, proposed as an additional material for the final delivery. ITU may keep it beside the written guide, move it into the guide, or leave it out.

## 6. Annex — aggregate external-link list

Compiled across the six subtopics for ITU's video production pipeline, to be split per subtopic into the video descriptions. Every source is public and is one the KP4 outline and content plan, version 0.2, names for the subtopic, at the edition it names.

| Subtopic | Sources referenced, with addresses |
| --- | --- |
| 2.1 | UNDP, 'Digital public infrastructure', web page (https://www.undp.org/digital/digital-public-infrastructure); UNDP, Accelerating the SDGs through Digital Public Infrastructure: A Compendium of the Potential of Digital Public Infrastructure, 21 August 2023 (https://www.undp.org/publications/accelerating-sdgs-through-digital-public-infrastructure-compendium-potential-digital-public-infrastructure); PAERA v1.0, GovStack (https://paera.govstack.global/). |
| 2.2 | None. The content is the SDD method's own. |
| 2.3 | GovStack Digital Registries Building Block specification, version 3.0-alpha, June 2026 (https://specs.govstack.global/registries); GovStack Identity Building Block specification, version 2.0, December 2025 (https://specs.govstack.global/identity). |
| 2.4 | None. The content is the SDD method's own. |
| 2.5 | None. The content is the SDD method's own. |
| 2.6 | GovStack Architecture specification, edition 2.2.0 (https://specs.govstack.global/architecture/); GovStack Information Mediator Building Block specification, version 1.1.1 (https://specs.govstack.global/information-mediator); GovStack Registration Building Block specification, default edition, 23Q4 (https://specs.govstack.global/registration). |

All references are publicly accessible and verifiable.

## 7. Self-check for Module 2

Four questions for the manager who commissions the service, each drawn from the single messages of the module. Each has one right answer, given with the reason, so that a reader can check their own understanding without a tutor. The questions are written for the written guide and for the additional materials proposed for the final delivery; they are not read aloud in any video.

| # | Question | Choices | Answer, and why | Drawn from |
| --- | --- | --- | --- | --- |
| 1 | A donor offers to fund a new licensing system for your quality authority. What do you ask for before the first specification is approved? | A. A list of the screens the new system will have. B. The sector's catalogue: every service the sector's bodies owe, with the shared blocks each one rests on. C. The supplier's price for the licensing system alone. | B. Only the catalogue shows which blocks many services rest on, so that a block is planned for the sector and not rebuilt by each project. | 2.1 |
| 2 | The supplier's table of goals against the register of what was asked has a row with no mark. What does it tell you? | A. A goal that nobody asked for. B. Something that was asked, in the customer's words and with its source, that no goal will deliver. C. Nothing; empty rows are normal in a first design. | B. Each entry is one thing asked, with where it was said, and every entry must be served by a goal. The empty row becomes a question with an owner and a date. | 2.2, 2.4 |
| 3 | The ministry's draft design keeps its own copy of each institution's name, and the authority's draft design writes the application fee into a screen as a figure. What do you require? | A. Nothing; copies make the ministry faster. B. The name read from the authority's register, and the fee read from a setting with an owner, or raised as a question. C. A monthly check that the copies still agree. | B. For every fact the service keeps it, takes it from another body or must not hold it; settings are written once, with an owner, and a goal that needs a missing one raises a question. | 2.3, 2.5 |
| 4 | The software architecture lists a crossing to the ministry that the ministry has not seen. What do you do before you accept the page? | A. Accept it; the ministry can object later. B. Have the ministry confirm its row before you accept. C. Remove the crossing from the page. | B. The page names every flow that crosses to another body, and each row is agreed with the body on the other side; until then it is a promise made on their behalf. | 2.6 |

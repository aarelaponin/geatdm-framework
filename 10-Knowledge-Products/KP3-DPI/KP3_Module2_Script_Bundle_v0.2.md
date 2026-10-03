<!-- GENERATED from build_kp3_module2_v02.js by bundle_to_md.py — do not hand-edit; edit the build script and regenerate. -->

# KP3 Module 2 — Video Script Bundle v0.2 (ITU-aligned)

| Field | Value |
| --- | --- |
| Document | Video script bundle for Module 2 of KP3 |
| Version | v0.2 — written on the KP3 outline and content plan, version 0.3 (1 October 2026) |
| Date | 1 October 2026 |
| Module persona | A (Architect) — the ministry's technical lead or solution architect who sets up the registration service and judges the products offered for it |
| Subtopics | Six subtopics (2.1 – 2.6), each shipped as one ~5-minute standalone video |
| Module runtime | Approximately 30 minutes across six standalone videos |
| Specification taught | GovStack Registration Building Block specification, the site's default edition (site label 23Q4, version history to 1.0) |
| Configurations | R1 to R10, the colleague's build. None is built at the date of this bundle; subtopics 2.3 to 2.6 are taught on specimens marked 'specimen, not yet run', and their demonstration segments are storyboards |
| Prepared by | FiscalAdmin OÜ |

Module 2 builds the registration service of KP3's first proof for education. A learner or a parent applies; checks stop a faulty application before it reaches an officer; a registrar decides; and only on approval is the record written to the learner register and proof given to the applicant. The six videos teach what the Registration block does, how to judge a product against the published specification, how to draft the service description with an AI assistant, the three kinds of check, the registrar's decision and the write to the register, and the service kept as a description that can be moved to another installation. Every video is taught from the GovStack Registration specification and shown on Progressa, the fictional country of the Knowledge Products. Each subtopic carries an AI usage tip with a prompt ready to copy. External references use the convention 'Find the link in the description'.

## 1. Document context

### 1.1 What this document is

This document collects the six video scripts of Module 2 of Knowledge Product 3, the Education DPI Roadmap, with the specification of their text-only slides, the AI usage tip of each subtopic, the data that describe each video, and a storyboard for each of the four demonstration walkthroughs the module carries. It is written from the KP3 outline and content plan, version 0.3, which fixes for each subtopic its single message, its sources, its worked example, its AI usage tip and its configurations.

### 1.2 What Module 2 teaches, and what it does not claim

Module 2 is written for the Architect: the ministry's technical lead or solution architect who sets up the service and judges the products offered for it. It is taught from one public source, the GovStack Registration Building Block specification in the site's default edition, with the Identity specification (Version 2.0, December 2025) for the check of a person and the Digital Registries specification (Version 3.0-alpha, June 2026) for the write to the register. Subtopic 2.1 also cites PAERA, Annex 1, section A1.2.5. The worked examples are built for Progressa: the learner registry PLR, the national identity authority PNIA and Linkup, the data exchange that KP2 set up.

Three statements hold throughout. PLR has been a member of Linkup since KP2, with one enrolment service; KP3 sets up the authoritative learner register behind it, and that register is where the registration service writes. A service checks a person through PNIA's sign-in with OpenID Connect, with the person present, and keeps the identifier PNIA gives to that service, never the national number. And the registration service is a description in the format of the product that carries it, because the specification publishes no interface for creating or changing a service.

The ten configurations of the module, R1 to R10, are built by a colleague as a separate piece of work, which has not started. Until each is built and its check has passed, subtopics 2.3 to 2.6 show the configuration as a specimen, a file written for Progressa in the specification's terms and marked 'specimen, not yet run', and each demonstration segment exists as a storyboard. The scripts say what each check runs and what counts as a pass; they do not say that anything runs.

### 1.3 How to read this document

Section 2 gives the module at a glance. Section 3 holds the script of each subtopic, with its slide specification, its on-screen practice box, its AI usage tip and its metadata, followed, for subtopics 2.3 to 2.6, by the storyboard of its demonstration walkthrough. Section 4 collects the production notes. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate list of external links.

Within each script, three rendering conventions are used: shaded blocks are on-screen visual or production cues; regular paragraphs are the spoken voice-over; the slide specification, AI usage tip and metadata follow the script.

## 2. Module 2 at a glance

Six standalone videos, all in the Architect register. Total runtime approximately thirty minutes. Each video has one single message, taken word for word from the KP3 outline, and can be understood on its own.

| # | Title | Single message | Runtime |
| --- | --- | --- | --- |
| 2.1 | What the Registration block does | A registration block takes an application, lets an officer decide and, on approval, writes to a register and gives the applicant proof, and built once it serves every ministry that registers people or things. | ~5 min |
| 2.2 | The published specification, and how to judge a product against it | Ask every vendor to show the product against the published specification, requirement by requirement, and check whether GovStack lists it and at which compliance level. | ~5 min |
| 2.3 | Generating the registration service | Describe your registration in the specification's terms, and an AI assistant drafts the service description that sets the block up, which you then import, test and correct. | ~5 min |
| 2.4 | Checks before the officer decides | Three kinds of check stop a bad application before it reaches the officer: rules on each field, a comparison with the identity authority's record, and a test of completeness on sending. | ~5 min |
| 2.5 | The officer decides, and the record is written | A registrar approves, rejects or sends back each application, and only on approval does the block write the record to the register, in a sequence the specifications leave you to define and test. | ~5 min |
| 2.6 | The whole service as a description you can move | The whole service is a description you can test, publish, export and import elsewhere, so a second ministry starts from yours and not from nothing. | ~5 min |

## 3. The scripts

## 3.1 Subtopic 2.1 — What the Registration block does

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the ministry's technical lead or solution architect who sets up the registration service and judges the products offered for it |
| Target runtime | ~5 min (≈464 spoken words) |
| PAERA anchor | PAERA v1.0, Annex 1, A1.2.5 (State Registries); GovStack Registration specification, default edition: REG §2, REG §4.1 to REG §4.4 |

> **Single message —** _A registration block takes an application, lets an officer decide and, on approval, writes to a register and gives the applicant proof, and built once it serves every ministry that registers people or things._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'What the Registration block does'. Voice-over begins._

Every ministry registers something. Schools register learners. A business registry registers companies. A population registry records births. Each office asks for information, checks it, decides, records it and gives back proof. The Registration block is shared software that does exactly that.

> _Slide 2 — Title: 'What registration means'. Body, three text rows: 'An applicant asks for information to be recorded in a registry.' 'A registrar, the authorised representative of the registry, records it.' 'The applicant receives a credential as proof of registration.'_

The GovStack Registration specification defines registration in one sentence. It is the process through which an applicant gets information recorded in a registry and receives a credential as proof of registration. At least two parties are involved: the applicant, and the authorised representative of the registry, whom the specification calls the registrar. Others may join. A witness, another public body or a database may confirm what the applicant says. A bank may receive a fee. Notice the two outcomes. A record is written, and proof goes back to the applicant. A service that stops at capturing a form has done neither.

> _Slide 3 — Title: 'Three capabilities'. Body, three text rows: 'Online registration — the applicant fills in the form, uploads documents, sends and follows the status.' 'Processing — an operator approves, rejects or sends back; on approval the record is sent to a registry and a credential issued.' 'Development platform — an analyst sets up rules, screens and checks without programming.'_

The block has three capabilities. The first is online registration. The applicant fills in a form, uploads documents, pays a fee where there is one, sends the file and follows its status until a decision arrives. The second is processing. In the back office an operator, who may be a person or an automated role, approves the file, rejects it or sends it back for correction. On approval the system sends the information to a registry and issues the credential. The third is the development platform. There an analyst sets up the rules, the screens and the checks of each service, without writing code.

> _Slide 4 — Title: 'Progressa's learner registration, in three parts'. Body, three text rows: 'The parent or the learner applies online.' 'The registrar of PLR decides in the back office.' 'The analyst configures the service; the record itself is kept in the learner register.'_

Here is Progressa's learner registration seen through those three parts. A parent, or a learner old enough, applies online. The registrar of PLR, the Progressa Learner Registry, decides in the back office. An analyst in the ministry configures the service. On screen the parent meets the guide, the form, the documents and the send button, and later the decision and the confirmation. One thing the block does not do is keep the record for the long term. The specification leaves storage to the Digital Registries block. The registration block's job is to connect to it and write there.

> _Slide 5 — Title: 'Built once, used by every ministry'. Body, two text rows: 'Digitising a state registry needs two building blocks: Registration and Digital Registry.' 'Each new registration is a new service set up on the same block — not new software.'_

Now the reason this is a shared block and not a school system. PAERA, the GovStack reference architecture, says that digitising a state registry needs two building blocks: Registration and a Digital Registry. That holds for a business registry, a population registry and a learner register alike. So the ministry that builds the block first pays for it, and each ministry after it sets up a new service on the same block. That re-use is only visible to someone planning for the whole government, which is why the decision belongs above any single project.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A registration block takes an application, lets an officer decide and, on approval, writes to a register and gives the applicant proof, and built once it serves every ministry that registers people or things.' Below it, the on-screen practice box (not narrated)._

An application comes in, an officer decides, the register is written and proof goes out. Build that once, and every ministry that registers can use it.

> _Slide 7 — Title: 'Sources'. Body: GovStack Registration Building Block specification, default edition, sections 2 and 4.1 to 4.4; PAERA v1.0, Annex 1, A1.2.5. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'What the Registration block does'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 2.1) Arial 18pt. Background #E5F5FB. No images. |
| 2 | What-registration-means slide. Three text rows: applicant, registrar, credential as proof. | The specification's own definition, in plain words. Text-only. |
| 3 | Three-capabilities slide. Three text rows: online registration, processing, development platform. | The core of the video. Text-only list; no product screens. |
| 4 | Progressa slide. Three text rows: parent or learner applies, PLR's registrar decides, the analyst configures; the record is kept in the learner register. | The worked example, built for Progressa. Text-only. |
| 5 | Re-use slide. Two text rows: two building blocks for any state registry; each new registration a new service on the same block. | Carries the planning-enables-re-use argument. Text-only. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box. | The take-home line. The practice box is on screen and not narrated. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the specification and PAERA. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Map your paper registration onto the block's three capabilities.** The prompt in the companion material gives you a table that sorts each step of your procedure into the three capabilities, with the decisions an officer takes. Before the next video.

### AI usage tip — Map your paper registration onto the block's three capabilities

**What the prompt does:** Before anyone configures a service, the Architect needs to see an existing paper procedure in the block's terms: what the applicant does, what the officer decides, and what the analyst must set up. This prompt sorts the procedure into the three capabilities and lists every decision an officer takes in it.

**Prompt template (copy-paste into Claude):**

```text
Below is the description of a registration procedure as it works today in [country X], run by [the registering body]: [paste the procedure — the form, the steps at the counter, who signs what, what the applicant receives at the end]. Using the three capabilities of the GovStack Registration Building Block — (1) online registration by the applicant, (2) processing of registrations by operators, (3) the development platform used by an analyst — sort every step of the procedure into one capability. Then list every decision an officer takes in the procedure (approve, reject, send back for correction, or another), and for each decision say which office takes it today. Mark any step you cannot place. Output: a table that sorts each step of your procedure into the three capabilities, with the decisions an officer takes, plus a short list of the steps you could not place.
```

**Inputs and outputs:** Input: the description of one registration procedure as it works today. Output: a table that sorts each step of your procedure into the three capabilities, with the decisions an officer takes, and a list of the steps that could not be placed.

**Safeguard:** Who may decide is set by the law and the regulations that create the registration, not by the prompt. Take the deciding office for each decision from the legal text and correct the table where the model has guessed; a decision placed with the wrong office is the error that surfaces only after the service is live.

### Metadata

| Field | Value |
| --- | --- |
| Working title | What the Registration block does |
| YouTube-optimised title | The Registration building block: application, officer's decision, record and proof — built once for every ministry |
| Description (60 words) | Every ministry registers something: learners, companies, births. The GovStack Registration building block takes an application, lets an officer approve, reject or send it back, writes the approved record to a register and gives the applicant proof. Built once, it serves every ministry that registers people or things. Five minutes for architects. An AI prompt maps your paper procedure onto the block. |
| Tags | registration building block, GovStack, digital public infrastructure, education DPI, learner registration, state registry, re-use, digital government |
| Playlist (YouTube) | KP3 — Module 2: The Registration block |
| ToR §4 coverage | §3.3 (foundational and sectoral building blocks identified); §4.4 and §9 (the education demonstration); §4.3 (AI integration — procedure-mapping prompt) |
| PAERA citations | Annex 1, A1.2.5 State Registries |
| External-link list | GovStack Registration Building Block specification, default edition (https://specs.govstack.global/registration), sections 2 and 4.1 to 4.4; PAERA v1.0, Annex 1, A1.2.5 (https://paera.govstack.global/) |

## 3.2 Subtopic 2.2 — The published specification, and how to judge a product against it

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the ministry's technical lead or solution architect who sets up the registration service and judges the products offered for it |
| Target runtime | ~5 min (≈464 spoken words) |
| PAERA anchor | GovStack Registration specification, default edition: REG §6.1, REG §6.2, REG §6.3, REG §7.2, REG §8.1 to REG §8.3; GovStack testing; GovStack Architecture specification, edition 2.1.0, section 5.5.4 |

> **Single message —** _Ask every vendor to show the product against the published specification, requirement by requirement, and check whether GovStack lists it and at which compliance level._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The published specification, and how to judge a product against it'. Voice-over begins._

A vendor tells you the product is GovStack compliant. That sentence alone tells you very little. What you need is the product shown against the published specification, one requirement at a time, with evidence your own team can check.

> _Slide 2 — Title: 'What the specification contains'. Body, four text rows: '42 functional requirements, in three groups: the applicant, the operator, the analyst.' '12 data structures.' '13 published operations.' 'Each requirement marked REQUIRED or RECOMMENDED.'_

Start by naming the edition. The GovStack site labels the default edition of the Registration specification 23Q4. Write that edition into your tender and your questionnaire, so every answer refers to the same text. The edition holds forty-two functional requirements in three groups: ten for the applicant, six for the operator who processes applications, and twenty-six for the analyst who builds services. It defines twelve data structures, such as the service, the registration and the role, and thirteen published operations. Each requirement is marked required or recommended.

> _Slide 3 — Title: 'Requirement by requirement'. Body, three text rows: 'For each requirement: met as delivered, met by configuration, or not met.' 'For each answer: the evidence — a screen, a test record, a document.' 'For the operations: which of the thirteen the product offers.'_

Turn that list into the vendor's homework. For every requirement, the vendor answers one of three things: met as delivered, met by configuration, or not met. Under every answer, ask for evidence you can check: a screen, a test record or a document. Do the same for the operations. Which of the thirteen does the product offer, and where are its test results? Ask also how the product exports and imports a service description, because the specification publishes no operation for creating or changing a service, and each product does it its own way. A product that answers in this form can be compared with the next one. A brochure cannot.

> _Slide 4 — Title: 'What GovStack itself offers'. Body, three text rows: 'A self-assessment form for requirements, and automated tests of the interfaces.' 'A listing at Level 1 or Level 2 — on the GovStack website.' 'The level and a link to the full report are shown in the listing.'_

Now what GovStack itself offers. Its testing application has a self-assessment form, where a software provider assesses the product against the functional requirements, and a set of automated tests of the interfaces. GovStack's website grades software at Level 1 or Level 2, depending on how many requirements are met. Its team checks a submission for completeness and plausibility, which is a review of what the provider sent, not a test of your installation. Accepted software is listed on the website with its level and a link to the full report. Be careful with thresholds, too. The website lists software from Level 1. The Architecture specification, section 5.5.4, asks for every required requirement to be met before a product appears on GovMarket. When you quote a threshold, name its source.

> _Slide 5 — Title: 'Progressa's self-assessment sheet'. Body, a plain-text table of three rows: '6.2.3 Make decisions about an application — REQUIRED — met by configuration — evidence: the registrar's screen with approve, reject and send back.' '6.3.2.10 Import/Export of service descriptions — REQUIRED — met — evidence: an exported file imported into a second installation.' '6.1.7 Pay fees for application — REQUIRED — met — not used, as learner registration carries no fee.'_

Here is such a sheet, built as an example for the product Progressa uses; it names no real product. Three rows show the pattern. The operator's decision is met by configuration, and the evidence is the registrar's screen with its three choices. Import and export of a service description is met, and the evidence is a file exported and imported into a second installation. The payment of fees is met but not used, because registering a learner carries no fee.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Ask every vendor to show the product against the published specification, requirement by requirement, and check whether GovStack lists it and at which compliance level.' Below it, the on-screen practice box (not narrated)._

Ask for evidence against each published requirement, and check whether GovStack lists the product and at which level.

> _Slide 7 — Title: 'Sources'. Body: GovStack Registration Building Block specification, default edition, sections 6.1 to 6.3, 7.2 and 8.1 to 8.3; GovStack testing application and the GovStack website pages 'How is Compliance Measured?' and 'How to Submit Software?'; GovStack Architecture specification, edition 2.1.0, section 5.5.4. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The published specification, and how to judge a product against it'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 2.2) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Contents slide. Four text rows: 42 requirements in three groups, 12 data structures, 13 operations, REQUIRED or RECOMMENDED. | Counts from the default edition. Text-only. |
| 3 | Vendor-homework slide. Three text rows: the three answers, the evidence, the operations. | The method the listener takes away. Text-only. |
| 4 | GovStack slide. Three text rows: self-assessment and interface tests, Level 1 or Level 2 listing, the level and the full report shown in the listing. | Each line is said with its source in the voice-over. Text-only. |
| 5 | Progressa sheet slide. A plain-text table of three rows, each with requirement, level, answer and evidence. | The worked example, built for Progressa. Requirement headings quoted as the edition gives them. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box. | The take-home line. The practice box is on screen and not narrated. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the specification, the testing pages and the Architecture specification. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Turn the specification's requirements into a vendor questionnaire.** The prompt in the companion material gives you a questionnaire for vendors with one row for each requirement and the evidence to ask for under it. Before the next video.

### AI usage tip — Turn the specification's requirements into a vendor questionnaire

**What the prompt does:** An Architect who must compare registration products needs every vendor to answer the same questions in the same form. This prompt turns the published list of requirements into that questionnaire, with the evidence to ask for under each requirement.

**Prompt template (copy-paste into Claude):**

```text
Below are the functional requirements of the GovStack Registration Building Block specification, in the edition [name the edition and its date as the site shows it], copied from sections 6.1, 6.2 and 6.3: [paste the requirements, each with its number, heading and level]. Build a questionnaire for vendors. For each requirement, keep its number, its heading and its level (REQUIRED or RECOMMENDED) exactly as pasted. Add three answer options: met as delivered, met by configuration, not met. Under each requirement, name the evidence a vendor should attach: a screen, a test record, a configuration file or a document, and say what that evidence must show. Then add one question for each of the published operations in sections 8.1 to 8.3: does the product offer it, and where are its test results? Output: a questionnaire for vendors with one row for each requirement and the evidence to ask for under it, followed by the questions on operations.
```

**Inputs and outputs:** Input: the functional requirements and operations of the edition you procure against, pasted with their numbers. Output: a questionnaire for vendors with one row for each requirement and the evidence to ask for under it, and a short set of questions on the operations.

**Safeguard:** Requirement headings and their levels must be quoted from the edition named, not paraphrased. Compare the questionnaire with the pasted text line by line before it is issued; a heading the model has reworded, or a RECOMMENDED turned into REQUIRED, changes what the vendor is bound to answer.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The published specification, and how to judge a product against it |
| YouTube-optimised title | Judging a registration product: requirement by requirement, with evidence — and what a GovStack listing tells you |
| Description (60 words) | A vendor says the product is GovStack compliant. Ask instead for the product shown against the published Registration specification, requirement by requirement, with evidence. This video names the edition, counts its requirements, and explains what GovStack offers: a self-assessment, interface tests and a listing with a compliance level. Five minutes for architects. An AI prompt builds your vendor questionnaire. |
| Tags | GovStack, registration building block, specification compliance, vendor evaluation, procurement, self-assessment, GovMarket, digital public infrastructure |
| Playlist (YouTube) | KP3 — Module 2: The Registration block |
| ToR §4 coverage | §4.2 (international frameworks and standards referenced); §4.3 (AI integration — vendor questionnaire prompt) |
| PAERA citations | None; the subtopic is taught from the GovStack Registration specification and GovStack's testing pages |
| External-link list | GovStack Registration Building Block specification, default edition (https://specs.govstack.global/registration), sections 6.1 to 6.3, 7.2, 8.1 to 8.3; GovStack testing application (https://testing.govstack.global/en/requirements), with the GovStack website pages 'How is Compliance Measured?' and 'How to Submit Software?'; GovStack Architecture specification, edition 2.1.0, section 5.5.4 (https://specs.govstack.global/architecture/) |

## 3.3 Subtopic 2.3 — Generating the registration service

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the ministry's technical lead or solution architect who sets up the registration service and judges the products offered for it |
| Target runtime | ~5 min (≈460 spoken words) |
| PAERA anchor | GovStack Registration specification, default edition: REG §6.3.1.1, REG §6.3.1.3 to REG §6.3.1.6, REG §6.3.1.8, REG §6.3.1.10, REG §6.3.2.1, REG §6.3.2.2, REG §6.3.2.10, REG §8.3 |

> **Single message —** _Describe your registration in the specification's terms, and an AI assistant drafts the service description that sets the block up, which you then import, test and correct._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Generating the registration service'. Voice-over begins._

The registration of a learner is written today in a law, a circular and a paper form. Before any product can carry it, someone has to restate it in the block's own terms. An AI assistant can draft that restatement in an afternoon.

> _Slide 2 — Title: 'The specification's terms'. Body, six text rows: 'Service — a name, holding one or more registrations.' 'Registration — its name and the entity in charge.' 'Subjects and determinants — who must register, and what changes the requirements.' 'Result — the proof the applicant receives.' 'Requirements — the documents and the data.' 'Screens and fields — what the applicant sees, in order.'_

The Registration specification gives you the words. A service is a name that holds one or more registrations. Each registration has a name and an entity in charge. Its subjects say who must register, and its determinants say what changes the requirements for a given case. Its result is the proof the applicant receives. Its requirements are the documents and the data asked for. Then come the screens and the fields, in order. These terms are a shared language: the officer who knows the procedure and the analyst who sets up the product mean the same thing by each word.

> _Slide 3 — Title: 'Progressa's learner registration, in those terms'. Body, five text rows: 'One registration; entity in charge: PLR.' 'Determinant: the learner transfers from another school — adds a required document, the transfer letter.' 'Data: names, date of birth, school, grade.' 'Result: a registration confirmation with the learner's register number.' 'Screens: guide, applicant form, documents, send — the payment screen switched off, as there is no fee.'_

Here is Progressa's learner registration written that way. There is one registration, and PLR, the learner registry, is in charge of it. One determinant matters: a learner who transfers from another school must add a transfer letter. The data are the learner's names, date of birth, school and grade. The result is a registration confirmation with the learner's register number. The screens are the guide, the applicant form, the documents and the send screen. The payment screen is switched off, because registering a learner carries no fee.

> _Slide 4 — Title: 'What the file is'. Body, three text rows: 'The specification requires that a full service description can be exported and imported.' 'It publishes no operation to create or change a service, and does not define the file's format.' 'So the file names the product and the format it is written in.'_

From that brief the assistant drafts the service description. Be clear about what this file is. The specification requires that a full service description can be exported and imported, with its screens, fields, process flow and settings. But it publishes no operation for creating or changing a service, and it does not define the file's format. The format is the product's own. So the description names the product and the format it is written in, and every assumption the assistant made is marked for someone to confirm. Give the assistant the format as the product documents it, with an exported example if you have one, so that it does not invent one.

> _Slide 5 — Title: 'Import, test, correct'. Body, three text rows: 'Import the draft into a test installation.' 'The block lists the service, with its screens in order.' 'Confirm or correct every marked assumption.' Footer: 'Progressa's description is a specimen, not yet run.'_

Then the draft goes into a test installation. The check is simple to state. The block lists the service, and its screens come back in the order the brief gave. Then send one test application down each path the brief describes, one learner who transfers and one who does not; the two must be asked for different documents. Each marked assumption is confirmed by the registry's office or corrected. Progressa's description exists today as a specimen, not yet run; it will be imported when the product is chosen.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Describe your registration in the specification's terms, and an AI assistant drafts the service description that sets the block up, which you then import, test and correct.' Below it, the on-screen practice box (not narrated)._

Write the registration in the specification's words. The assistant drafts the file that sets the block up; you import it, test it and correct it before anyone relies on it.

> _Slide 7 — Title: 'Sources'. Body: GovStack Registration Building Block specification, default edition, sections 6.3.1.1, 6.3.1.3 to 6.3.1.6, 6.3.1.8, 6.3.1.10, 6.3.2.1, 6.3.2.2, 6.3.2.10 and 8.3. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Generating the registration service'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 2.3) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Terms slide. Six text rows: service, registration, subjects and determinants, result, requirements, screens and fields. | The specification's vocabulary. Carries the shared-language argument. Text-only. |
| 3 | Progressa slide. Five text rows: the registration, the determinant, the data, the result, the screens. | The worked example, built for Progressa. Text-only; no product screens. |
| 4 | What-the-file-is slide. Three text rows: export and import required, no operation and no format published, the file names its product and format. | The honest statement of what the specification gives. Text-only. |
| 5 | Import-test-correct slide. Three text rows and a footer marking the specimen. | Until configurations R1 to R4 and R10 pass their checks, this slide stands where the demonstration segment will be; see the storyboard below. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box. | The take-home line. The practice box is on screen and not narrated. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify each section cited. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Draft the service description from your registration brief.** The prompt in the companion material gives you a draft service description in the product's named format, with every assumption marked for confirmation. Before the next video.

### AI usage tip — Draft the service description from your registration brief

**What the prompt does:** Setting up a registration service by hand, screen by screen, is slow and loses the link to the rule it carries. This prompt turns a brief written in the specification's terms into a draft service description in the format of the product the ministry uses, and marks every assumption for someone to confirm.

**Prompt template (copy-paste into Claude):**

```text
Below is the brief of a registration in [country X], written in the terms of the GovStack Registration Building Block specification: the service name; the registration and its entity in charge; its subjects and determinants; its result; the documents and data it requires; the applicant's screens in order, with any screen switched off [paste the brief]. The product that will carry the service is [product name], and its service description format is [format name and version, as the product documents it; paste an exported example if you have one]. Draft the full service description in that format. Write at its head the product, the format and the edition of the specification it implements. Wherever the brief does not settle something the format needs, make the smallest assumption and mark it ASSUMPTION with a one-line question for the registry's office. Output: a draft service description in the product's named format, with every assumption marked for confirmation, followed by the list of those questions.
```

**Inputs and outputs:** Input: the registration brief in the specification's terms, and the name and an example of the product's description format. Output: a draft service description in the product's named format, with every assumption marked for confirmation, and the list of questions for the registry's office.

**Safeguard:** The draft is a starting point, not a service. Import it into a test installation and pass its checks — the service listed, its screens in order, every marked assumption answered — before anyone relies on it; a description that reads well can still fail to import, or import with a screen silently missing.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Generating the registration service |
| YouTube-optimised title | From registration brief to service description: drafting the GovStack registration service with an AI assistant |
| Description (60 words) | A learner registration lives in a law, a circular and a paper form. This video restates it in the GovStack Registration specification's terms — service, registration, determinants, result, requirements, screens — and shows how an AI assistant drafts the service description in the product's own format, to be imported, tested and corrected. Five minutes for architects. The generating AI prompt is included. |
| Tags | registration building block, GovStack, service description, AI generation, no-code, configuration, learner registration, education DPI |
| Playlist (YouTube) | KP3 — Module 2: The Registration block |
| ToR §4 coverage | §4.1 (step-by-step method, with its output and check); §4.3 (AI integration — the generating prompt); §4.4 and §9 (the education demonstration); §6 (templates) |
| PAERA citations | None; the subtopic is taught from the GovStack Registration specification |
| External-link list | GovStack Registration Building Block specification, default edition (https://specs.govstack.global/registration), sections 6.3.1.1, 6.3.1.3 to 6.3.1.6, 6.3.1.8, 6.3.1.10, 6.3.2.1, 6.3.2.2, 6.3.2.10 and 8.3 |

### Storyboard of the demonstration walkthrough — 2.3

This storyboard stands in the place of the demonstration segment until it can be recorded. It is written on the specimen KP3-DPI/specimens/registration/progressa-learner-registration.service.yaml, which is marked 'specimen, not yet run', and it needs configurations R1, R2, R3, R4 and R10. Nothing in it has been run. When their checks have passed on the built service, the segment is recorded from these steps, and the script gains one sentence stating the result and its date.

| Step | What is shown | What the viewer sees | What counts as a pass |
| --- | --- | --- | --- |
| 1 | The brief of Progressa's learner registration, in the specification's terms | The brief on screen: one registration, PLR in charge, the transfer determinant, the data, the result, the five screens with payment switched off | Every term of the brief is one the specification uses (REG §6.3.1 and §6.3.2) |
| 2 | The generating prompt run on the brief | The assistant's draft description, with the product, the format and the edition named at its head and each assumption marked | The head names product, format and edition; no assumption is left unmarked |
| 3 | The draft imported into a clean test installation | The product's import screen and its message on completion | The import completes with no error (configuration R10) |
| 4 | The block's list of services read through its published operation | The service 'Progressa learner registration' in the list, then its record with its version | The service is listed and its record returns as executable (check R1) |
| 5 | The service's screens read in order | The screens returned: guide, applicant form, documents, send; no payment screen | The screens come back in the brief's order with payment switched off (check R4) |

## 3.4 Subtopic 2.4 — Checks before the officer decides

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the ministry's technical lead or solution architect who sets up the registration service and judges the products offered for it |
| Target runtime | ~5 min (≈452 spoken words) |
| PAERA anchor | GovStack Registration specification, default edition: REG §6.3.3.1 to REG §6.3.3.3, REG §6.3.2.7; GovStack Identity specification, Version 2.0: ID §9.1.1, ID §7.2.1, ID 6.2-r2, ID §8 |

> **Single message —** _Three kinds of check stop a bad application before it reaches the officer: rules on each field, a comparison with the identity authority's record, and a test of completeness on sending._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Checks before the officer decides'. Voice-over begins._

A registrar's time is the scarcest thing in a registration office. Every application that arrives with a wrong date, a wrong name or a missing document costs that time twice. Three kinds of check catch those faults before the file reaches the desk.

> _Slide 2 — Title: 'Check one: rules on each field'. Body, two text rows: 'Required or optional; numbers, ranges, patterns; dates earlier, later, older than an age; file size and type.' 'Progressa: a date of birth that makes the learner two years old is refused — the rule asks for three or older.'_

The first kind is a rule on each field. The specification lets the analyst set them without code: whether a field is required, a number range, a text pattern, a date that must be earlier or later than another, a minimum age, the size and type of an uploaded file. In Progressa, the rule on date of birth asks for a learner aged three or older. An application whose date makes the learner two is refused, with a message the parent can understand. Rules like these cost the analyst minutes and save the registrar hours, so set one for every field the law constrains.

> _Slide 3 — Title: 'Check two: the identity record, with the person present'. Body, three text rows: 'The person signs in with PNIA and approves what is shared.' 'PNIA releases the name, and an identifier made for this one service.' 'The form compares the typed name with the released name.'_

The second kind compares the application with an outside source. The specification's own example is a name and an identifier matched against a civil registry. For a person, the published way runs through the identity block's sign-in, OpenID Connect. The person signs in with PNIA, Progressa's identity authority, and approves what may be shared. PNIA releases the name, and an identifier made for this one service. The form's action compares the typed name with the released one, at the moment of applying, while the person is there. Progressa's second failing application has a name that differs, and it is refused. The service keeps PNIA's identifier for it, never the national number.

> _Slide 4 — Title: 'What is not published'. Body, two text rows: 'A check from server to server, by a known identifier, is required of the block — but no interface for it is published.' 'PNIA's one service on Linkup reads a person by national number: a Progressa contract from KP2, not a GovStack interface.'_

Be precise about one gap. The Identity specification requires a way to verify a person from a known identifier, but its published set of interfaces has none for it. Progressa has one service of that kind: PNIA's read of a person by national number on Linkup, a contract of Progressa's from KP2 that only the examination authority may call. Wherever it appears, it is named as Progressa's own contract, not as a GovStack interface.

> _Slide 5 — Title: 'Check three: complete before sending'. Body, two text rows: 'Every required field filled, every required document uploaded — or no sending, with a clear message.' 'Progressa: a transferring learner without the transfer letter cannot send.' Footer: 'Storyboard — not yet run.'_

The third kind runs when the applicant presses send. Every required field must be filled and every required document uploaded, or the file cannot be sent, and the screen says what is missing. Write those messages with the registry's office, because a parent who cannot understand the message comes to the counter instead. Progressa's third application is a transferring learner without the transfer letter. It stops at the send screen. All three kinds of check act before a person sees the file, so the registrar's attention goes to judgement, not to typing errors.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Three kinds of check stop a bad application before it reaches the officer: rules on each field, a comparison with the identity authority's record, and a test of completeness on sending.' Below it, the on-screen practice box (not narrated)._

Field rules, a comparison with PNIA's record made with the person present, and a completeness test on sending. Faulty applications stop there, not at the registrar's desk.

> _Slide 7 — Title: 'Sources'. Body: GovStack Registration Building Block specification, default edition, sections 6.3.2.7 and 6.3.3.1 to 6.3.3.3; GovStack Identity Building Block specification, Version 2.0, sections 6.2, 7.2.1, 8 and 9.1.1. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Checks before the officer decides'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 2.4) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Field-rules slide. Two text rows: the kinds of rule; Progressa's date-of-birth refusal. | First kind of check, with the first failing application. Text-only. |
| 3 | Identity slide. Three text rows: sign-in with PNIA, what PNIA releases, the comparison. | The published way, with the person present. Text-only; no sign-in screens of any product. |
| 4 | Not-published slide. Two text rows: the required but unpublished interface; PNIA's KP2 contract named as Progressa's own. | Names the gap and the contract honestly. Text-only. |
| 5 | Completeness slide. Two text rows and a footer marking the storyboard. | Until configurations R5 and R6 pass their checks, the three refusals are shown as text; see the storyboard below. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box. | The take-home line. The practice box is on screen and not narrated. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify each section cited. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Derive the validation rules and the test applications.** The prompt in the companion material gives you a table of validation rules and a set of test applications that should pass and that should fail. Before the next video.

### AI usage tip — Derive the validation rules and the test applications

**What the prompt does:** Rules written from memory leave gaps, and a rule nobody tests is a rule nobody knows works. This prompt derives the field and completeness rules from the registration's data and document requirements, and writes test applications that should pass and that should fail, one failure for each rule.

**Prompt template (copy-paste into Claude):**

```text
Below are the data and document requirements of a registration in [country X], as the service description defines them: for each field its name, type and whether it is required; for each document its name and the determinant that requires it [paste the requirements]. The legal conditions are: [paste the rules from the law or circular, for example the age range]. Derive (1) the field rules, each tied to the field and to the legal condition it enforces; (2) the completeness rules for sending; (3) the comparison to make with the identity authority's released claims, naming the claim compared. Then write test applications: one that should pass, and for each rule one that should fail on that rule alone, with the message the applicant should see. Output: a table of validation rules and a set of test applications that should pass and that should fail.
```

**Inputs and outputs:** Input: the data and document requirements of the service, and the legal conditions behind them. Output: a table of validation rules and a set of test applications that should pass and that should fail, each failure tied to one rule.

**Safeguard:** Run the whole test set against the block itself. A rule that no test application exercises is not trusted, and a test that fails for a reason other than the one it was written for means the rule does something other than intended.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Checks before the officer decides |
| YouTube-optimised title | Three checks before the registrar: field rules, the identity record with the person present, and completeness |
| Description (60 words) | Faulty applications waste the registrar's time twice. This video teaches the three kinds of check the GovStack Registration specification provides: rules on each field, a comparison with the identity authority's record made through sign-in with the person present, and a completeness test on sending, each shown on a Progressa application. Five minutes for architects. An AI prompt derives rules and test applications. |
| Tags | registration building block, validation, data quality, identity verification, OpenID Connect, GovStack, learner registration, education DPI |
| Playlist (YouTube) | KP3 — Module 2: The Registration block |
| ToR §4 coverage | §4.1 (step-by-step method, with its validation); §4.4 and §9 (the education demonstration); §4.3 (AI integration — rules and test-set prompt) |
| PAERA citations | None; the subtopic is taught from the GovStack Registration and Identity specifications |
| External-link list | GovStack Registration Building Block specification, default edition (https://specs.govstack.global/registration), sections 6.3.2.7, 6.3.3.1 to 6.3.3.3; GovStack Identity Building Block specification, Version 2.0 (https://specs.govstack.global/identity), sections 6.2, 7.2.1, 8 and 9.1.1 |

### Storyboard of the demonstration walkthrough — 2.4

This storyboard stands in the place of the demonstration segment until it can be recorded. It is written on the specimens KP3-DPI/specimens/registration/progressa-learner-registration.service.yaml and test-applications.yaml, which are marked 'specimen, not yet run', and it needs configurations R5 and R6; R6 also needs an identity provider that offers PNIA's sign-in. Nothing in it has been run. When their checks have passed on the built service, the segment is recorded from these steps, and the script gains one sentence stating the result and its date.

| Step | What is shown | What the viewer sees | What counts as a pass |
| --- | --- | --- | --- |
| 1 | Application A1: a learner's date of birth that makes the learner two years old | The applicant form with the date entered, and the message beside the field | The field is refused with a readable message; the form does not move on (check R5) |
| 2 | Application A2: the enrolled test person signs in with PNIA and approves sharing; the name typed on the form differs from the released name | PNIA's sign-in and approval screens, then the form's message that the name does not match | The application is refused on the name; PNIA's service-specific identifier is held, and no national number appears anywhere (check R6) |
| 3 | Application A3: a transferring learner with no transfer letter uploaded | The send screen listing the missing document | Sending is blocked and the missing document is named (check R5) |
| 4 | Application A4: a correct application, with the names matching PNIA's released claims | The send screen confirming the file is sent | The application is sent and appears as a task for the first processing role |

## 3.5 Subtopic 2.5 — The officer decides, and the record is written

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the ministry's technical lead or solution architect who sets up the registration service and judges the products offered for it |
| Target runtime | ~5 min (≈453 spoken words) |
| PAERA anchor | GovStack Registration specification, default edition: REG §6.2.3, REG §6.3.2.3, REG §6.3.2.4, REG §8.2, REG §4.2, REG §6.3.2.7, REG §5.1.4, REG §9.2.2; GovStack Digital Registries specification, Version 3.0-alpha: DRS-33 (records processed through OpenAPI services), DR §8.1 |

> **Single message —** _A registrar approves, rejects or sends back each application, and only on approval does the block write the record to the register, in a sequence the specifications leave you to define and test._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The officer decides, and the record is written'. Voice-over begins._

Software can check an application. It cannot take responsibility for it. In registration, a named officer decides, and the register is written only after that decision. Getting this order right is what makes the record worth trusting.

> _Slide 2 — Title: 'The decision'. Body, three text rows: 'Approve, reject, or send back for correction — with the wrong field marked.' 'Each processing role has a list screen and a decision screen.' 'For each status, the analyst sets where the file goes next.'_

The specification gives the operator three decisions: approve, reject, or send back for correction, marking the field that is wrong so the applicant sees it. The analyst builds the processing part as a chain of roles. Each role has a list of files and a screen on which to decide. For each status a role may give, pending, approved, rejected or sent back, the analyst sets where the file goes next: to another role, back to the applicant, or to the end. A role can be a person or an automated role, and the specification lets an automated role carry actions, such as a call to another service. The tasks are read and completed through published operations.

> _Slide 3 — Title: 'Progressa's flow'. Body, a plain-text chain of four steps: 'Sent' → 'Automated role: checks the file as sent' → 'Registrar of PLR: approves, rejects or sends back' → 'On approval, automated role: writes the record and issues the confirmation'._

Progressa's flow has three roles. An automated role takes the file as sent and checks it again. It decides nothing that the law gives to the registrar; it only prepares the file for the person who does. The registrar of PLR, a person, then decides. Only on approval does a second automated role write the record to the register and issue the confirmation with the learner's register number. A rejected file is closed, and nothing is written.

> _Slide 4 — Title: 'The write, and what nobody publishes'. Body, three text rows: 'On approval, an action sends the record to the register, through the Information Mediator.' 'The register accepts it through its create-or-update operation.' 'The order between the two blocks is not published: you define it, and you test it.'_

Now the write. On approval, the specification says, the system sends the information to a registry, using an action that sends form data to another service. Its traffic must pass through an Information Mediator or a secure gateway; in Progressa that is Linkup. The register accepts the record through its create-or-update operation. But neither specification publishes the order of calls or the data between the two blocks. Joining them is your team's own work. Write it down as a short agreement between the two owners: which call is made, with which fields, at which moment, and what happens when the register refuses. Then test both outcomes: an approval that writes, and a refusal that leaves the file waiting.

> _Slide 5 — Title: 'Where the record lands'. Body, two text rows: 'PLR: a member of Linkup since KP2, with one enrolment service.' 'KP3 sets up the authoritative learner register behind it — the register this service writes to.' Footer: 'Storyboard — not yet run.'_

Where does the record land? PLR, the Progressa Learner Registry, has been a member of Linkup since KP2, with one enrolment service. KP3 sets up the authoritative learner register behind it, and that register is what this service writes to. The record carries the identifier PNIA gave the service, never the national number. And the order matters to a minister as much as to an architect: a record written before a decision is a record nobody answers for.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A registrar approves, rejects or sends back each application, and only on approval does the block write the record to the register, in a sequence the specifications leave you to define and test.' Below it, the on-screen practice box (not narrated)._

The registrar decides. Only an approval writes the record. The order between the two blocks is yours to define, so write it down and test it.

> _Slide 7 — Title: 'Sources'. Body: GovStack Registration Building Block specification, default edition, sections 4.2, 5.1.4, 6.2.3, 6.3.2.3, 6.3.2.4, 6.3.2.7, 8.2 and 9.2.2; GovStack Digital Registries Building Block specification, Version 3.0-alpha, requirement DRS-33 and section 8.1. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The officer decides, and the record is written'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 2.5) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Decision slide. Three text rows: the three decisions, the roles and their screens, where the file goes next. | The operator's side of the specification. Text-only. |
| 3 | Flow slide. A plain-text chain of four steps joined by text arrows. | A text diagram, strictly necessary to show order; all labels plain text. Figure F7 draws it for the written guide. |
| 4 | Write slide. Three text rows: the action, the register's operation, the unpublished order. | States the team's own joining of two published contracts. Text-only. |
| 5 | Landing slide. Two text rows and a footer marking the storyboard. | Until configurations R7 and R8 pass their checks, the approval and the write are shown as text; see the storyboard below. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box. | The take-home line. The practice box is on screen and not narrated. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify each section and requirement cited. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Map the form to the register and write the test of the write.** The prompt in the companion material gives you a table mapping each form field to a register field, and the test sequence for the write. Before the next video.

### AI usage tip — Map the form to the register and write the test of the write

**What the prompt does:** The write from the registration service to the register is the team's own joining of two published contracts, so nobody else will test it. This prompt maps each field of the form to a field of the register's schema and writes the sequence of steps that tests the write after approval.

**Prompt template (copy-paste into Claude):**

```text
Below are (1) the fields of a registration form in [country X], with their names and types [paste them], and (2) the schema of the register the approved record is written to, with its fields, types, required fields and the field it keys on [paste the schema]. Map each form field to one register field, or mark it NOT WRITTEN with the reason. Flag every field whose type or length differs. Do not map any national identity number; where the form holds the identifier the identity authority gave this service, map that instead. Then write the test sequence for the write: submit a test application, approve it as the registrar, read the register for the learner, and say what each step must return; add the same sequence for a rejected application, which must leave nothing in the register. Output: a table mapping each form field to a register field, and the test sequence for the write.
```

**Inputs and outputs:** Input: the form's fields and the register's schema. Output: a table mapping each form field to a register field, and the test sequence for the write, for an approved and a rejected application.

**Safeguard:** The owner of the register confirms the mapping before it is configured; the model cannot know which field the register treats as authoritative. And no national identity number is mapped, whatever the form holds: the register keys on its own number, with the identifier the identity authority gave the service kept beside it.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The officer decides, and the record is written |
| YouTube-optimised title | Approve, reject, send back: the registrar's decision and the write to the learner register |
| Description (60 words) | Software checks; an officer decides. This video shows the registrar's three decisions in the GovStack Registration specification, the chain of processing roles, and the write to the learner register that follows only an approval. Because neither specification publishes the order between the two blocks, the joining is your team's own, to define and test. Five minutes for architects. An AI prompt maps fields and tests. |
| Tags | registration building block, digital registries, registrar decision, workflow, GovStack, learner register, data exchange, education DPI |
| Playlist (YouTube) | KP3 — Module 2: The Registration block |
| ToR §4 coverage | §4.1 (step-by-step method, with its decision point); §4.4 and §9 (the education demonstration); §4.5 (service workflow diagram, figure F7); §4.3 (AI integration — mapping and test prompt) |
| PAERA citations | None; the subtopic is taught from the GovStack Registration and Digital Registries specifications |
| External-link list | GovStack Registration Building Block specification, default edition (https://specs.govstack.global/registration), sections 4.2, 5.1.4, 6.2.3, 6.3.2.3, 6.3.2.4, 6.3.2.7, 8.2 and 9.2.2; GovStack Digital Registries Building Block specification, Version 3.0-alpha (https://specs.govstack.global/registries), DRS-33 and section 8.1 |

### Storyboard of the demonstration walkthrough — 2.5

This storyboard stands in the place of the demonstration segment until it can be recorded. It is written on the specimens KP3-DPI/specimens/registration/progressa-learner-registration.service.yaml and write-mapping.yaml, which are marked 'specimen, not yet run', and it needs configurations R7 and R8, with the learner register of configurations RG1 and RG2. Nothing in it has been run. When their checks have passed on the built service, the segment is recorded from these steps, and the script gains one sentence stating the result and its date.

| Step | What is shown | What the viewer sees | What counts as a pass |
| --- | --- | --- | --- |
| 1 | Application A4 sent, and the task list of the processing roles | One task for the automated role, then the file passing to the registrar's list | Exactly one task appears for the first role, and the file reaches the registrar (check R7) |
| 2 | The registrar of PLR opens the file and approves it | The decision screen with approve, reject and send back; approve chosen | The file moves to the writing role; nothing has been written before the approval |
| 3 | The writing role's action sends the record to the learner register's create-or-update operation | The action's record of the call and the register's answer | The register accepts the record, keyed on its own number, with no national number in it |
| 4 | The learner register read for the learner | The learner's record, with the register number and PNIA's service-specific identifier | The learner is found in the register (check R8) |
| 5 | A second application rejected by the registrar | The rejection, then the register read for that learner | The file is closed and the register holds no record for it |

## 3.6 Subtopic 2.6 — The whole service as a description you can move

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the ministry's technical lead or solution architect who sets up the registration service and judges the products offered for it |
| Target runtime | ~5 min (≈450 spoken words) |
| PAERA anchor | GovStack Registration specification, default edition: REG §6.3.2.9, REG §6.3.2.10, REG §6.3.1.2, REG §6.3.1.9, REG §8.3 |

> **Single message —** _The whole service is a description you can test, publish, export and import elsewhere, so a second ministry starts from yours and not from nothing._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The whole service as a description you can move'. Voice-over begins._

The second ministry that needs a registration service should not start from a blank screen. If the first ministry kept its service as a description, the second can take it, change what differs and test it. That is how a shared block pays back.

> _Slide 2 — Title: 'Test before anyone uses it'. Body, three text rows: 'Preview each screen.' 'Preview the full service.' 'Run the full service in a test installation before publishing it to the live one.'_

Start with testing. The specification requires the analyst to preview the service before applicants see it, at three depths: each screen on its own, the full service, and the full service in a test installation, where it can be tried from beginning to end before it is published to the live one. Use test cases that look like the real cases your office sees: a transferring learner, a missing document, a learner of the wrong age. The test installation is also where the registry's office reads every screen before the public does. Nothing should reach a parent that has not been through that last step.

> _Slide 3 — Title: 'Export, import, publish'. Body, three text rows: 'A service description holds at least the screens and fields, the process flow and the service settings.' 'Settings that belong to one installation are set there, and do not travel.' 'Export and import are the product's own tools: no published operation does them.'_

Then the description itself. The specification requires that the full service can be exported and imported, and that the description holds at least the screens and fields, the process flow and the service settings. Settings that belong to one installation are made there and do not travel. A service can also be published to another installation; the specification recommends this rather than requiring it, so ask your vendor whether the product does it. One caution: no published operation creates, changes or exports a service. Export and import are the product's own tools, so the file names its product and format.

> _Slide 4 — Title: 'Combine, and count'. Body, two text rows: 'Several registrations can be combined in one service; a requirement shared by two is asked only once.' 'The block's statistics count applications processed by operator, registration, service and date.'_

Two more things make the description worth keeping. Several registrations can be combined in one service, and a document that two of them need is asked for only once; one registration's result can even be another's input. And the block keeps statistics: the number of applications processed, by operator, registration, service and date. That count is how the owner of a service shows it is used. This is where planning for the whole government pays: each service kept as a description is re-use waiting to happen.

> _Slide 5 — Title: 'Progressa's service, moved'. Body, three text rows: 'Exported from the first installation.' 'Imported into a clean installation, and compared screen by screen.' 'The number of applications processed read from the block's statistics.' Footer: 'Storyboard — not yet run.'_

For Progressa, the learner registration is exported, imported into a clean installation and compared with the original, screen by screen. The comparison is the check. If the copy's screens equal the original's, the file carried everything that matters. If not, the difference is either a setting that belongs to one installation or a gap in the product's export, and you need to know which. The number of applications processed is read from the block's own statistics. When a second ministry needs a registration, it begins from this file.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The whole service is a description you can test, publish, export and import elsewhere, so a second ministry starts from yours and not from nothing.' Below it, the on-screen practice box (not narrated)._

Keep the whole service as one file. Test it, export it, import it elsewhere and compare. The next ministry then starts from your work, not from nothing.

> _Slide 7 — Title: 'Sources'. Body: GovStack Registration Building Block specification, default edition, sections 6.3.1.2, 6.3.1.9, 6.3.2.9, 6.3.2.10 and 8.3. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The whole service as a description you can move'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 2.6) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Testing slide. Three text rows: preview each screen, the full service, the full service in a test installation. | The three depths of preview. Text-only. |
| 3 | Service-file slide. Three text rows: what a description holds, what does not travel, the product's own tools. | The honest statement of what is published. Text-only. |
| 4 | Combine-and-count slide. Two text rows: combined registrations; statistics of applications processed. | Carries the re-use argument through the combined service. Text-only. |
| 5 | Progressa slide. Three text rows and a footer marking the storyboard. | Until configurations R9 and R10 pass their checks, the export, import and comparison are shown as text; see the storyboard below. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box. | The take-home line. The practice box is on screen and not narrated. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify each section cited. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Compare two exported descriptions of a service.** The prompt in the companion material gives you a note of changes between two versions of a service, written for the service's owner. Before the next video.

### AI usage tip — Compare two exported descriptions of a service

**What the prompt does:** When a service is moved, copied or changed, its owner needs to know exactly what differs, in words, not in a file listing. This prompt compares two exported descriptions of the same service and writes the note of changes for the service's owner.

**Prompt template (copy-paste into Claude):**

```text
Below are two exported descriptions of the same registration service in [country X], in the format of [product name and format]: version A [paste file A] and version B [paste file B]. Compare them. List every difference under four headings: screens and fields (added, removed, renamed, made required or optional); rules and checks; the process flow (roles, their order, the statuses and where each sends the file); and service settings. For each difference, say in one plain sentence what it changes for the applicant or the officer. Mark any difference that would change who decides or what is written to the register. Output: a note of changes between two versions of a service, written for the service's owner, under the four headings.
```

**Inputs and outputs:** Input: the two exported description files themselves. Output: a note of changes between two versions of a service, written for the service's owner, with the changes that touch the decision or the write marked.

**Safeguard:** Give the prompt the two files themselves, never a summary of them: a summary has already decided what matters, and the change that is left out of it is the one the note must catch. Check each marked difference against the files before the note is sent.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The whole service as a description you can move |
| YouTube-optimised title | Test, export, import: the registration service as a description a second ministry can start from |
| Description (60 words) | A registration service built on the GovStack Registration block can be kept as a description: previewed and tested, exported, imported into another installation and compared. Several registrations can share one service, and the block counts the applications it processes. So the second ministry starts from your service, not from nothing. Five minutes for architects. An AI prompt compares two service descriptions. |
| Tags | registration building block, service description, export and import, re-use, GovStack, testing, statistics, education DPI |
| Playlist (YouTube) | KP3 — Module 2: The Registration block |
| ToR §4 coverage | §4.1 (step-by-step method, with its output and check); §4.4 and §9 (the education demonstration); §6 (templates); §4.3 (AI integration — comparison prompt) |
| PAERA citations | None; the subtopic is taught from the GovStack Registration specification |
| External-link list | GovStack Registration Building Block specification, default edition (https://specs.govstack.global/registration), sections 6.3.1.2, 6.3.1.9, 6.3.2.9, 6.3.2.10 and 8.3 |

### Storyboard of the demonstration walkthrough — 2.6

This storyboard stands in the place of the demonstration segment until it can be recorded. It is written on the specimen KP3-DPI/specimens/registration/progressa-learner-registration.service.yaml, which is marked 'specimen, not yet run', and it needs configurations R9 and R10. Nothing in it has been run. When their checks have passed on the built service, the segment is recorded from these steps, and the script gains one sentence stating the result and its date.

| Step | What is shown | What the viewer sees | What counts as a pass |
| --- | --- | --- | --- |
| 1 | The service exported from the first installation with the product's own tool | The exported file, with the product, the format and the edition named at its head | The file holds the screens and fields, the process flow and the service settings (configuration R10) |
| 2 | The file imported into a clean installation | The import completing, and the service in the new installation's list | The service is listed in the clean installation |
| 3 | The screens of both installations compared | The two lists of screens side by side | The imported service's screens equal the original's (check R10) |
| 4 | The comparison prompt run on the two exported files | The note of changes: no difference, or only the settings that belong to one installation | No difference outside installation-specific settings |
| 5 | The block's statistics read after the test applications | The count of applications processed, by service and date | The count equals the number of test applications processed (check R9) |

## 4. Production notes

### 4.1 Design standard — the split-screen usability test

The bar for every video in Module 2 is the split-screen test: a practitioner watching the video on one half of the screen must be able to act on the other half. For Module 2, 'act' means map a registration procedure, question a vendor, draft a service description, derive the checks and their test applications, map the form to the register, or compare two service descriptions. Each subtopic's AI usage tip carries that action, and the on-screen practice box on the recap slide names it.

### 4.2 Slide branding

Every slide follows the ITU template of the Knowledge Products and Video Materials Guide: title text Arial Bold 28pt; body text Arial 18pt; background colour #E5F5FB. Text only — no images, no product screens, no icons, no emblems, no logos. A diagram or text box is used only where strictly necessary; the one such case in this module is the chain of processing roles on slide 3 of subtopic 2.5, whose labels are plain text. The single-sentence summary slide uses 28pt body type and carries the subtopic's single message word for word.

### 4.3 No individuals on screen

No individual appears in any video. Two options are open: an AI-avatar narrator generated by ITU's production pipeline, or computer-screen-only voice-over. The choice is ITU's; the scripts are written for either.

### 4.4 Voice and tone

Direct address ('your ministry', 'your registry'), plain English at about the eighth-grade level, short sentences. The Architect register introduces the specification's terms — service, registration, determinant, processing role, service description — and defines each in plain words when it first appears. Each video stands on its own, with no reference to another video.

### 4.5 The demonstration segments, and what is not claimed

Subtopics 2.3, 2.4, 2.5 and 2.6 each carry a demonstration segment, a screen recording with voice-over, in the place of their fifth slide. None can be recorded yet: the configurations R1 to R10 are the colleague's build, which has not started, and the data exchange federation of KP2 runs nowhere today. Until a segment can be recorded, its storyboard stands in its place, and the slide shows its steps as text marked 'Storyboard — not yet run'. The voice-over says what each check runs and what counts as a pass, never that it has run. When a check has passed on the built service, the specimen it rests on is replaced by the file as built, the segment is recorded from the storyboard, and the script gains one sentence stating the result and its date.

### 4.6 The specimens

The specimens of this module are in the public repository under KP3-DPI/specimens/registration/: the service description of Progressa's learner registration, the four test applications of subtopic 2.4, and the mapping of the write of subtopic 2.5, with a README that lists them. Each is written for Progressa in the terms of the Registration specification and marked at its head 'specimen, not yet run'. They are not the build: the build pack is the colleague's, and nothing in it is written by this module.

### 4.7 External-link list and 'Find the link in the description'

Every subtopic includes an external-link list in its metadata, and every script refers to external material with the convention 'Find the link in the description' rather than reading addresses aloud. The aggregate list across the six subtopics is in Section 6.

## 5. Open calibration items

The drafting of version 0.2 raised the items below. They are forwarded for discussion with ITU and for the colleague's build.

### 5.1 Source claims to keep under watch

Subtopic 2.2 cites section 5.5.4 of the GovStack Architecture specification, edition 2.1.0, by the number the published site gives it (read on 1 October 2026). A compiled copy of the same edition held in the engagement's inputs numbers the same text 5.4.4. The script cites the site's number; if GovStack renumbers the site, the citation follows it. Subtopic 2.2 also quotes the website's Level 1 and Level 2 grading; both GovStack pages are web pages without an edition, so the wording is to be read again before the final delivery.

Subtopic 2.5 cites requirement DRS-33 of the Digital Registries specification, Version 3.0-alpha, an early release whose requirement numbers may change again; the script names the requirement by its content as well as its number.

### 5.2 Settings the build states

The product that carries the service and the format of its description are the build's choice (configuration R10). The specimen names neither and says so. Subtopics 2.3 and 2.6 teach the rule — the file names its product, its format and the edition it implements — and the build supplies the value.

The check of a person in subtopic 2.4 is taught as PNIA's sign-in through OpenID Connect, with the person present. If the build offers only the read by national number that KP2 left, the demonstration of 2.4 shows that read under its own name, as Progressa's contract, and the script does not change. Who signs in for a child below the age at which PNIA issues an identity is not settled by the outline; the storyboard uses the enrolled test person.

### 5.3 Editorial calls

Lines that deserve a deliberate keep, soften or cut decision: 'Software can check an application. It cannot take responsibility for it' (2.5); 'A brochure cannot' (2.2); 'Nothing should reach a parent that has not been through that last step' (2.6).

The project's standing rules ask for African signposts. No accepted research has read a public source on an African country's registration service, so this module names none; one is added only when a public source for it has been read and accepted.

### 5.4 Dependencies

The demonstration segments wait for the configurations R1 to R10, for a product chosen for the Registration block, for an identity provider that offers PNIA's sign-in (R6), and for the learner register of configurations RG1 and RG2 (R8). Where the demonstrations will run is a question put to ITU.

## 6. Annex — aggregate external-link list

Compiled across the six subtopics for ITU's video production pipeline, to be split by subtopic into the video descriptions. Every address is a public one, and each is the one the KP3 outline gives for its source.

| Subtopic | Sources referenced |
| --- | --- |
| 2.1 | GovStack Registration Building Block specification, default edition, sections 2 and 4.1 to 4.4 — https://specs.govstack.global/registration; PAERA v1.0, Annex 1, A1.2.5 — https://paera.govstack.global/ |
| 2.2 | GovStack Registration Building Block specification, default edition, sections 6.1 to 6.3, 7.2 and 8.1 to 8.3 — https://specs.govstack.global/registration; GovStack testing application — https://testing.govstack.global/en/requirements, with the GovStack website pages 'How is Compliance Measured?' and 'How to Submit Software?'; GovStack Architecture specification, edition 2.1.0, section 5.5.4 — https://specs.govstack.global/architecture/ |
| 2.3 | GovStack Registration Building Block specification, default edition, sections 6.3.1.1, 6.3.1.3 to 6.3.1.6, 6.3.1.8, 6.3.1.10, 6.3.2.1, 6.3.2.2, 6.3.2.10 and 8.3 — https://specs.govstack.global/registration |
| 2.4 | GovStack Registration Building Block specification, default edition, sections 6.3.2.7 and 6.3.3.1 to 6.3.3.3 — https://specs.govstack.global/registration; GovStack Identity Building Block specification, Version 2.0, sections 6.2, 7.2.1, 8 and 9.1.1 — https://specs.govstack.global/identity |
| 2.5 | GovStack Registration Building Block specification, default edition, sections 4.2, 5.1.4, 6.2.3, 6.3.2.3, 6.3.2.4, 6.3.2.7, 8.2 and 9.2.2 — https://specs.govstack.global/registration; GovStack Digital Registries Building Block specification, Version 3.0-alpha, DRS-33 and section 8.1 — https://specs.govstack.global/registries |
| 2.6 | GovStack Registration Building Block specification, default edition, sections 6.3.1.2, 6.3.1.9, 6.3.2.9, 6.3.2.10 and 8.3 — https://specs.govstack.global/registration |

All references are publicly accessible and verifiable.

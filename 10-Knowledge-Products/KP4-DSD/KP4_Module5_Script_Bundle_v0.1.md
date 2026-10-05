<!-- GENERATED from build_kp4_module5_v01.js by bundle_to_md.py — do not hand-edit; edit the build script and regenerate. -->

# KP4 Module 5 — Video Script Bundle v0.1 (ITU-aligned)

| Field | Value |
| --- | --- |
| Document | Video script bundle for Module 5 of KP4 |
| Version | v0.1 — written on the KP4 outline and content plan, version 0.2, of 4 October 2026 |
| Date | 4 October 2026 |
| Module persona | A (Architect) — the head of a sectoral ICT unit, or the project lead, who has a service specified and built by a supplier, convenes its reviews and accepts its documents; no knowledge of data models, version control, configuration files or the command line is assumed |
| Subtopics | Seven subtopics (5.1 – 5.7), each shipped as one standalone video of about five minutes; 5.6 is supplementary |
| Module runtime | Approximately 35 minutes across seven standalone videos |
| Worked examples | Written in this bundle for Progressa from the plan's worked-example row of each subtopic, in the names of the KP4 fact sheet (KP4-DSD/examples/E0_progressa-fact-sheet.md): the two applications of PHEQA and MoEYS on two installations of the low-code platform, with MoEYS reading PHEQA's register across Linkup |
| Demonstration segments | Five (5.1, 5.2, 5.4, 5.5 and 5.7), each written as a storyboard in sections 4.8 to 4.12 until it can be recorded |
| Self-check | Four questions drawn from the module's single messages, at the end of section 2 |
| Prepared by | FiscalAdmin OÜ |

This bundle is the v0.1 working draft of Module 5 of KP4 — Designing Digital Government Services using a Building Block Approach. Module 5 shows how a service that has been specified and accepted is generated on a low-code platform and connected to the shared building blocks: one accepted file turned by a program into the platform's forms, lists, menus and workflow; why nothing generated is edited by hand; how the platform's known traps are caught before anything is installed; how the service takes identity and an institution's record from the bodies that keep them; how the contract another system reads is produced from the description; how payments and the data exchange are named as crossings; and how acceptance ends with a person finishing a real task on the running service. The register is plain English at about an eighth-grade level; technical terms are explained in plain words on first use, and each subtopic leads with what the listener can do. The seven videos are numbered 5.1 to 5.7 and each stands alone. All slide specifications follow ITU's text-only branding. Each subtopic carries an AI usage tip with a copy-paste Claude prompt. External references use the convention 'Find the link in the description'.

## 1. Document context

### 1.1 What this document is

This document collects the seven video scripts of Module 5 of Knowledge Product 4 (Designing Digital Government Services using a Building Block Approach), with slide specifications, metadata, AI usage tips, production notes, the storyboards of the five demonstration segments and the module's self-check. It is the v0.1 working draft, written on the KP4 outline and content plan, version 0.2, whose section 1 fixes each subtopic's single message, sources, worked example and AI usage tip.

Module 5 is written in the Architect register, for the team that has a service specified and built. It carries two requirements of the terms of reference: how to integrate building blocks such as digital identity, registries, information mediation and digital payments, and how to implement services on a low-code platform. The content is the SDD method, specification-driven development, stated at the level of a manager who accepts the work: what each step produces, what to see before accepting it, and where the manager's own decision lies. No rule identifier, command of the method's programs or file format is given; a technical word is replaced by the thing it names.

### 1.2 How the module is taught before anything is generated

The worked example of this module is a working demonstration application, built as its own project and recast in Progressa: its structure, its goals and its crossing between two bodies are kept, and every name and value is replaced. On the date of this bundle its application models are not yet written and its applications are not yet generated; two installations of the low-code platform are set up, and the data interface between them has been tried in both directions with a test application. No script, slide or metadata line in this bundle therefore says that anything has been generated, installed or proven. Each script says what a check runs and what counts as a pass. Each of the five demonstration segments exists as a storyboard (sections 4.8 to 4.12). When a check has passed on the generated application, the segment is recorded from the run, and the script gains one sentence that states the result and its date.

### 1.3 The names used for Progressa

| Name | What it is, and its part in Module 5 |
| --- | --- |
| PHEQA | The Progressa Higher Education Quality Authority. It registers and licenses private higher-education institutions and keeps the register of institutions, which only its application writes. Its application runs on its own installation of the low-code platform. |
| MoEYS | Progressa's ministry of education, youth and skills. The minister decides licences, approves a change of an institution's name, publishes the list of registered institutions in the Gazette and reviews a decision of PHEQA. Its application runs on a second installation, reads PHEQA's register across Linkup and keeps no copy of it. |
| PNIA | The Progressa National Identity Authority. Its sign-in tells a service who a person is, and gives each service its own identifier for the person; the service never keeps the national number. |
| Linkup and PDGA | Linkup is Progressa's data exchange, which GovStack calls the Information Mediator. PDGA, the Progressa Digital Government Authority, operates it. Every exchange between PHEQA and MoEYS passes through it. |
| The Payments block | The government's Payments block. PHEQA's application fee, 1,200 in Progressa's currency, is paid through it and its confirmation returned to PHEQA. PayPro, the payment provider that runs Progressa's fast-payment system, is reached through the block's payer bank. |
| PDCA | The Progressa Digital Credentials Authority, which will issue a graduate's credential into the learner's digital wallet: the next service on the same foundation. |
| Harbourview University College | A private institution in the register of institutions, under the register number INS-00217. It asks to change its name; MoEYS approves the change and PHEQA writes the new name into the register. |

### 1.4 How to read this document

Section 2 gives Module 5 at a glance, with the module's self-check. Section 3 holds the script of each subtopic: shaded blocks are on-screen cues, plain paragraphs are the voice-over, and the slide specification, AI usage tip and metadata follow. Section 4 collects the production notes, with the storyboards of the five demonstration segments. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate external-link list for ITU's production pipeline.

## 2. Module 5 at a glance

Seven standalone subtopic videos. One Architect persona throughout. Total runtime approximately thirty-five minutes. Each video has a single message, quoted word for word from the KP4 outline and content plan version 0.2, and is discoverable on its own; the playlist provides navigation but is not needed to understand any one video.

| # | Title | Single message | Class | Runtime |
| --- | --- | --- | --- | --- |
| 5.1 | From one file to a running application | The kit turns the model into the platform's forms, lists, menus and workflow, and installs them. | Core | ~5 min |
| 5.2 | Nothing generated is edited by hand | A correction goes into the description and the application is generated again; a program shows any hand edit. | Core | ~5 min |
| 5.3 | The platform's traps, caught before deployment | What is known to fail on the platform is checked before anything is installed. | Core | ~5 min |
| 5.4 | Identity and registries: use the block, do not rebuild it | The service takes a person's identity and an institution's record from the body that keeps them. | Core | ~5 min |
| 5.5 | The service's contract with the registration block, and its data interface | The contract another system reads is produced from the description, not written beside it. | Core | ~5 min |
| 5.6 | Payments and information mediation as named crossings | A payment or a call across the data exchange is a crossing the architecture names, not a block the service rebuilds. | Supplementary | ~5 min |
| 5.7 | Proof on the running system: a task a person finishes | The last check is a person finishing a real task on the running service, and the record that they did. | Core | ~5 min |

### The module's self-check

Four questions on what a manager decides, each drawn from the single messages of the module's subtopics. A learner answers them after watching the videos; the third column gives the answer the module teaches, for the learner to check against or for a facilitator to use.

| # | Question | The answer the module gives | Drawn from |
| --- | --- | --- | --- |
| 1 | The supplier says the ministry's application is built and installed. Where do your acceptance questions come from, and where are they answered? | From the accepted file the application was generated from, one question for each goal and each menu category; they are answered on the running application, not from the supplier's account of it. | 5.1 |
| 2 | The evening before a demonstration, a builder offers to fix a wrong label directly on the platform. What do you ask for instead, and how will you know it was done? | The correction made in the description that owns the label, and the application generated again. The read-back shows whether any file was edited by hand, and after the correction it must show every file in step. | 5.2 |
| 3 | A design keeps its own table of institutions and stores officers' national numbers. What should it use instead, and how do you check the contract another ministry reads? | The institution's record read from the register of the body that keeps it, with no copy, and the identifier the identity sign-in gives the service. The contract is produced from the description, so you read it as a plain list of what may be asked and what may not. | 5.4 and 5.5 |
| 4 | Every check reported by the supplier has passed. What is still missing before you accept the service? | A person finishing a real task on the running service, and the record of that run naming the journey, the installation and the time. A journey written and not run is reported as not run. | 5.7 |

## 3. The scripts

## 3.1 Subtopic 5.1 — From one file to a running application

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the head of a sectoral ICT unit, or the project lead, who has a service specified and built by a supplier, convenes its reviews and accepts its documents; no knowledge of data models, version control, configuration files or the command line is assumed |
| Target runtime | ~5 min (≈534 spoken words) |
| PAERA anchor | Joget DX 9 Knowledge Base, the platform's documentation: the pages Form Builder, List Builder, UI Builder and Process Builder, and Migrating a Single Joget App |

> **Single message —** _The kit turns the model into the platform's forms, lists, menus and workflow, and installs them._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'From one file to a running application'. Voice-over begins._

Your supplier reports that the ministry's new application is built. Before you accept that report, you need to know what was built from what, and which questions to ask of the result. One file decides almost everything you will see.

> _Slide 2 — Title: 'One file, read by a program'. Body, three text rows: 'The application model: the one file the application is generated from.' 'Written last, from documents your officials have already accepted.' 'Checked by a program before anything is built.'_

In the SDD method, specification-driven development, each document a person writes is accepted before the next one begins. The last of them is the application model: one file, written for a program to read. It carries every record, screen, list, menu and step of the workflow, each taken from documents your officials have already accepted. Before anything is built, a program checks the file, and refuses it if it contradicts what was accepted.

> _Slide 3 — Title: 'What the kit makes from it'. Body, four text rows: 'Forms: the screens where an officer enters or reads a record.' 'Lists: the worklists and registers an officer chooses from.' 'Menus: what each role sees after signing in, in categories.' 'The workflow: the steps of a goal and who may take each.' Figure F12, slide variant (figures/slides/F12_one-file-to-running-application.png), stands on the slide in place of the rows._

The kit is the method's set of programs, which the supplier runs. From the file it makes the four things a low-code platform is built from. Forms are the screens where an officer enters or reads a record. Lists are the worklists and registers. Menus are what each role sees after signing in, grouped in categories. The workflow is the order of steps, and who may take each one. The platform's own documentation has a builder for each of them, and the kit fills those builders from the file instead of by hand.

> _Slide 4 — Title: 'Installed, not rebuilt'. Body, three text rows: 'The kit packs the application and installs it on the platform's server.' 'The same package can go to a test server first, then to the live one.' 'Nothing is rebuilt by hand in between.'_

Then the kit installs what it built. It packs the application's design and puts it on the platform's server. The platform's documentation describes the same kind of move, of one application from one server to another, and by default only the design travels, not the data. So the same package can go to a test server, be checked there, and then go to the live server, with nothing rebuilt by hand in between.

> _Slide 5 — Title: 'Progressa: MoEYS's application'. Body, four text rows: 'Generated from MoEYS's model, onto MoEYS's own installation.' 'Forms: the minister's decisions; the Gazette entries.' 'Lists: what awaits the minister's decision.' 'Menu in five categories: Licences · Names, the list and reviews · Suspension and cancellation · The Gazette · Requests for review.'_

In Progressa, MoEYS's application is generated from its model onto MoEYS's own installation of the platform. The model asks for the forms on which the minister decides and an officer records the Gazette, for lists of what awaits the minister, and for a menu in five categories: licences; names, the list and reviews; suspension and cancellation; the Gazette; and requests for review. It asks for no table of institutions, because MoEYS reads PHEQA's register instead.

> _Slide 6 — Title: 'The questions you ask of the result'. Body, four text rows: 'Each goal: where does it start, and who can start it?' 'Each menu category: present, and shown only to its role?' 'Each list: does it show only what awaits an act?' 'Any screen that no accepted document asked for?'_

Acceptance starts from the model, not from the supplier's account. For each goal, ask where it starts and who can start it. Check that every menu category is there, for the right role and no other. Open each list and check that it shows only what waits for an act. Then ask whether any screen exists that no accepted document asked for. Each answer is read on the running application, not on a slide.

> _Slide 7 — Title: 'From the file to the menu'. Demonstration segment, storyboard until recorded (section 4.8). Text-only stand-in until the recording exists: 'The file admitted by the check.' 'The application built and installed on MoEYS's installation.' 'The menu, one form and one list opened.' 'Pass: no error; the application listed; every menu category present.'_

The demonstration follows these steps. The check admits the file. The kit builds the application and installs it on MoEYS's installation. Then the menu, one form and one list are opened on the platform. It passes when the build ends without error, the application appears on the installation, and every menu category of the interaction design is there. Until MoEYS's application is generated, this is a storyboard: the steps and the pass, written before anything is recorded.

> _Slide 8 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The kit turns the model into the platform's forms, lists, menus and workflow, and installs them.'_

One accepted file, read by a program, becomes the forms, lists, menus and workflow on the platform. Ask your questions of the running result, one goal at a time.

> _Slide 9 — Title: 'Sources'. Body: Joget DX 9 Knowledge Base, the platform's documentation, pages Form Builder, List Builder, UI Builder, Process Builder and Migrating a Single Joget App. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'From one file to a running application'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 5.1) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Three text rows: the application model, written last, checked by a program. | Names the model by what it is for; no file format is shown. |
| 3 | Figure F12 (slide variant) in place of four text rows: forms, lists, menus, the workflow. | Figure F12, its slide variant (figures/slides/F12_one-file-to-running-application.png, drawn by the figure's own program in slide mode): the application model admitted by the check and generated into the platform's forms, lists, menus and workflow; boxes, arrows and words only, no imagery and no person on screen. The rows are its text equivalent. Calibration item: a drawn figure under ITU's text-only rule. |
| 4 | Three text rows: packed, installed, moved from a test server to the live one. | Text-only list. |
| 5 | Four text rows: MoEYS's application, its forms, its lists and its menu in five categories. | Progressa's names as the fact sheet gives them. No logos, no emblems. |
| 6 | Four text rows: the acceptance questions. | Each row is a question the manager can ask on the running application. |
| 7 | Demonstration segment (storyboard until recorded). Text-only stand-in of four short lines. | Replaced by the recording of the 5.1 walkthrough, the principal walkthrough of KP4, when MoEYS's application is generated. Until then, nothing on this slide claims a run. |
| 8 | Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box. | The single message, word for word. |
| 9 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Write the acceptance questions for a generated application.** The prompt in the companion material gives you a numbered list of acceptance questions, one for each goal, each with where on the running application to look. Before the next video.

### AI usage tip — Write the acceptance questions for a generated application

**What the prompt does:** A manager about to accept a generated application needs questions that come from what was agreed, not from the supplier's demonstration: one for each goal and one for each menu category, each answerable by looking at the running application.

**Prompt template (copy-paste into Claude):**

```text
Below is the list of goals of an application in [your administration], each with its name, the role that starts it and where it starts, taken from the accepted application model or its interaction design [paste the list]. Below that are the menu categories and the roles that see each [paste them]. For each goal, write one acceptance question that a person can answer by looking at the running application: (1) the goal; (2) the question, in one sentence; (3) where on the running application to look: the menu category and the entry; (4) what answer counts as yes. Then add one question for each menu category: is it present, and is it shown only to its role? Do not invent a goal, a role or a category that is not in the pasted lists; write 'not in the list' instead. Output: a numbered list of acceptance questions, one for each goal, each with where on the running application to look.
```

**Inputs and outputs:** Input: the goals, the roles and the menu categories, from the accepted model or its interaction design. Output: a numbered list of acceptance questions, one for each goal, each with where on the running application to look.

**Safeguard:** The questions are answered on the running application by the person who accepts it, not from the supplier's account of it, a screenshot or a slide. A question that the running application cannot answer goes back to the owner of the model as an open line with a name and a date.

### Metadata

| Field | Value |
| --- | --- |
| Working title | From one file to a running application |
| YouTube-optimised title | How a low-code application is generated from one accepted file, and what to ask before you accept it |
| Description (60 words) | One accepted file, the application model, is turned by a program into the forms, lists, menus and workflow of a low-code platform, and installed. See what each of the four is, how the package moves from a test server to the live one, and which questions to ask of the result. For managers. AI prompt for writing acceptance questions in the description. |
| Tags | low-code, application model, generated application, acceptance, specification-driven development, digital government services, education, Progressa |
| Playlist (YouTube) | KP4 — Module 5: Generate the service on a low-code platform and connect the blocks |
| ToR §4 coverage | §3.4 (implement services on a low-code platform); §4.1 (a step of the method with its output and its check); §4.3 (AI integration — the acceptance questions); §4.4 (demonstration in the education sector, the principal walkthrough); §4.5 (the generated forms, lists and workflow); §4.6 (a simulated example of the step's output). Rows 4, 6, 9, 10 and 11 of the plan's coverage table. |
| PAERA citations | None. This subtopic rests on the platform's published documentation in the external-link list. |
| External-link list | Joget DX 9 Knowledge Base, Form Builder (https://kb.joget.org/jw/web/userview/jdocs/docs/DX9/form-builder); Joget DX 9 Knowledge Base, List Builder (https://kb.joget.org/jw/web/userview/jdocs/docs/DX9/list-builder); Joget DX 9 Knowledge Base, UI Builder (https://kb.joget.org/jw/web/userview/jdocs/docs/DX9/ui-builder); Joget DX 9 Knowledge Base, Process Builder (https://kb.joget.org/jw/web/userview/jdocs/docs/DX9/process-builder); Joget DX 9 Knowledge Base, Migrating a Single Joget App (https://kb.joget.org/jw/web/userview/jdocs/docs/DX9/migrating-a-single-joget-app) |

## 3.2 Subtopic 5.2 — Nothing generated is edited by hand

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the head of a sectoral ICT unit, or the project lead, who has a service specified and built by a supplier, convenes its reviews and accepts its documents; no knowledge of data models, version control, configuration files or the command line is assumed |
| Target runtime | ~5 min (≈481 spoken words) |
| PAERA anchor | None of its own: the SDD method's own rule that nothing generated is edited by hand, and its read-back, stated in plain words |

> **Single message —** _A correction goes into the description and the application is generated again; a program shows any hand edit._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Nothing generated is edited by hand'. Voice-over begins._

The evening before the minister's demonstration, someone notices a wrong label on a form. The quickest fix is to change it on the platform. That fix is the one your contract should forbid, and a program can show whether it was made.

> _Slide 2 — Title: 'Two versions of the truth'. Body, three text rows: 'The accepted description says one thing.' 'The platform now shows another.' 'The next generation either overwrites the edit or is quietly stopped.'_

A hand edit creates two versions of the truth. The accepted description says one thing, and the platform now shows another. When the application is next generated from the description, one of two things happens. Either the edit is overwritten and the wrong label comes back. Or someone protects the edit by not generating again, and from then on nobody can say what the application is built from.

> _Slide 3 — Title: 'Correct up, generate down'. Body, three numbered text rows: '1. Find the document that owns the fact.' '2. Correct it there, and have the correction accepted.' '3. Generate the application again.' Figure F13, slide variant (figures/slides/F13_correct-up-generate-down.png), stands on the slide beside the rows._

The SDD method has one rule for this: nothing generated is edited by hand. A correction goes into the description that owns the fact, is accepted there, and the application is generated again. A label belongs to the screens of its goal, so it is corrected in those screens, carried into the model, and generated. It takes a little longer than a change on the platform. In exchange, the description and the platform never disagree.

> _Slide 4 — Title: 'The read-back'. Body, three text rows: 'In step: the file is what the description generates.' 'Out of date: the description changed, and the file was not generated again.' 'Edited by hand: the file differs from what the description generates.'_

The method gives you a program to check this, the read-back. It compares each generated file on the platform with what the description would generate, and marks it in one of three ways: in step, out of date, or edited by hand. You do not need to read the files themselves. You read the program's list, and you ask about every line that is not in step.

> _Slide 5 — Title: 'Progressa: a label on MoEYS's form'. Body, four text rows: 'The form on which the minister approves a new name.' 'A label changed by hand on the platform, the evening before a demonstration.' 'The read-back: this form, edited by hand.' 'The label corrected in the goal's screens and the model; generated again; read back again.'_

In Progressa, a builder changes a label on MoEYS's form for approving an institution's new name, directly on the platform, to meet the demonstration. The read-back lists that form as edited by hand. The head of MoEYS's ICT unit asks for the change to be made properly. The label is corrected in the goal's screens and in the model, the application is generated again, and the read-back is run once more. It passes only when every file shows in step.

> _Slide 6 — Title: 'A hand edit shown up'. Demonstration segment, storyboard until recorded (section 4.9). Text-only stand-in until the recording exists: 'A label changed on the platform.' 'Read-back: the form, edited by hand.' 'The label corrected in the model; generated again.' 'Read-back: every file in step.'_

The demonstration shows the same steps on a generated application. A label is changed by hand on the platform, the read-back runs and names the form, the correction is made in the model, and the read-back runs again. It passes when the first run names the edited file and the second shows every file in step. Until the application is generated, this is a storyboard.

> _Slide 7 — Title: 'Write it into the contract'. Body, three text rows: 'No generated file is edited by hand.' 'The read-back is run before every acceptance, and its list is handed over.' 'A file edited by hand is a defect, corrected in the description.'_

Put the rule into the supplier's contract, together with its evidence. No generated file may be edited by hand on the platform. The read-back is run before every acceptance, and its list is handed over with the delivery. A file marked as edited by hand is a defect, and it is corrected in the description, not argued about at the acceptance meeting.

> _Slide 8 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A correction goes into the description and the application is generated again; a program shows any hand edit.'_

Correct the accepted document, not the platform, and generate the application again. The read-back shows any file that someone changed by hand.

> _Slide 9 — Title: 'Sources'. Body: 'This subtopic states the SDD method's own rule, that nothing generated is edited by hand, and its read-back, in plain words. It cites no external source.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Nothing generated is edited by hand'. | Standard ITU template. No images. |
| 2 | Three text rows: two versions of the truth. | Text-only list. |
| 3 | Figure F13 (slide variant) beside three numbered text rows: find the owning document, correct it, generate again. | Figure F13, its slide variant (figures/slides/F13_correct-up-generate-down.png, drawn by the figure's own program in slide mode), on the left of the slide, with the three rows beside it: the twelve documents in a column, the change going up to the document that owns the fact and everything below produced again; boxes, arrows and words only, no imagery and no person on screen. The rows are its text equivalent. Calibration item: a drawn figure under ITU's text-only rule. |
| 4 | Three text rows: in step, out of date, edited by hand. | The three marks of the read-back, in the program's own order. |
| 5 | Four text rows: Progressa's label on MoEYS's form. | Progressa's names as the fact sheet gives them. |
| 6 | Demonstration segment (storyboard until recorded). Text-only stand-in of four short lines. | Replaced by the recording of the 5.2 walkthrough when an application is generated. Until then, nothing on this slide claims a run. |
| 7 | Three text rows: the contract clause in outline. | The rows are the clause's substance; the wording of a clause is the AI tip's output. |
| 8 | Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box. | The single message, word for word. |
| 9 | Sources slide. One line: the subtopic rests on the method itself. | No external link for this subtopic. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Draft the contract clause that forbids hand edits.** The prompt in the companion material gives you one contract clause of four numbered parts, with the undefined terms listed after it. Before the next video.

### AI usage tip — Draft the contract clause that forbids hand edits

**What the prompt does:** A ministry's contract with a supplier often says nothing about who may change a generated application, or how a change is proven. The manager needs a clause that forbids hand edits and names the evidence.

**Prompt template (copy-paste into Claude):**

```text
Below is the section of a supplier contract in [your administration] that covers changes to the delivered application [paste it]. Below that is a short description of how the application is generated from an accepted description, and checked by a read-back program that marks each generated file as in step, out of date or edited by hand [paste or adapt the description]. Draft one clause that: (1) forbids any hand edit of a generated file on the platform; (2) requires every correction to be made in the accepted description and the application to be generated again; (3) names the read-back's list, run before each acceptance, as the evidence; (4) states what follows when a file is marked as edited by hand. Keep the language plain and short. Mark every term that the pasted contract does not define. Output: one contract clause of four numbered parts, with the undefined terms listed after it.
```

**Inputs and outputs:** Input: the contract's section on changes, and a description of the generation and the read-back. Output: one contract clause of four numbered parts, with the undefined terms listed after it.

**Safeguard:** The clause is a draft. It is reviewed by the ministry's legal officer before it enters a contract, and checked against the procurement rules that govern the contract; the assistant does not know them.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Nothing generated is edited by hand |
| YouTube-optimised title | Why nobody should fix a generated application by hand, and the program that shows it |
| Description (60 words) | A quick fix made by hand on the platform leaves two versions of the truth. See the rule that every correction goes into the accepted description and the application is generated again, the read-back that marks each file as in step, out of date or edited by hand, and how to put both into a supplier contract. AI prompt for the clause in the description. |
| Tags | low-code, generated application, hand edits, read-back, supplier contract, specification-driven development, education, Progressa |
| Playlist (YouTube) | KP4 — Module 5: Generate the service on a low-code platform and connect the blocks |
| ToR §4 coverage | §3.4 (implement services on a low-code platform); §4.1 (the governance of a step: who may change what, and its check); §4.3 (AI integration — the contract clause); §4.4 (demonstration in the education sector). Rows 4, 6 and 9 of the plan's coverage table. |
| PAERA citations | None. The content is the SDD method's own. |
| External-link list | None. This subtopic cites no external source. |

## 3.3 Subtopic 5.3 — The platform's traps, caught before deployment

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the head of a sectoral ICT unit, or the project lead, who has a service specified and built by a supplier, convenes its reviews and accepts its documents; no knowledge of data models, version control, configuration files or the command line is assumed |
| Target runtime | ~5 min (≈459 spoken words) |
| PAERA anchor | Joget DX 9 Knowledge Base, the platform's documentation: the pages Known Issues and Version 9.0.7 |

> **Single message —** _What is known to fail on the platform is checked before anything is installed._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The platform's traps, caught before deployment'. Voice-over begins._

Every low-code platform has places where it does not do what its screens suggest. Your officers should not be the ones who find them, on the first morning the new service is open to the public.

> _Slide 2 — Title: 'Known, written down, checked'. Body, three text rows: 'A register of the platform's known differences: what is promised, and what a release does.' 'Each difference a program can test becomes a rule.' 'The check applies the rules before anything is installed.'_

The SDD method keeps a register of the platform's known differences: places where the documentation promises one thing and a particular release does another. Each entry was found once, the hard way, by a team that lost time to it. Each entry that a program can test becomes a rule. The check applies those rules to the application model before anything is built or installed, so the same trap is not found twice.

> _Slide 3 — Title: 'The maker's own lists'. Body, three text rows: 'Known issues: a page the platform's maker keeps.' 'What changed in each release: release 9.0.7, published 18 May 2026.' 'A trap on either list becomes a check, not a surprise.'_

The platform's maker publishes two lists that feed the register. One is a page of known issues. It records cases such as a screen that shows a step as completed while the workflow behind it does not move on. The other is a list of what each release changed. Release 9.0.7, the one Progressa's two installations run, was published on 18 May 2026, with bug fixes and security upgrades among its changes. Read both lists before you agree the release your service will run on.

> _Slide 4 — Title: 'Progressa: a list with two filters'. Body, four text rows: 'MoEYS's list of what awaits the minister: a filter by date, a filter by matter.' 'The platform saves the setting without complaint.' 'On a list of this kind, one filter is honoured; the second is ignored, silently.' 'An officer sees more than she asked for, and does not know it.'_

Here is one trap, told by its kind. MoEYS's list of what awaits the minister's decision reads straight from the database, and it carries two filters: one by date, and one by the matter advised on. The platform saves that setting without complaint. But the register records that, on a list of this kind, the platform honours one filter at a time and quietly ignores the second. An officer who sets both sees more than she asked for, and never knows.

> _Slide 5 — Title: 'Caught by the check, not by an officer'. Body, three text rows: 'The check reads the model and finds the list with two filters.' 'It reports the list, the rule and the reason.' 'The model is corrected, and checked again.'_

The check is written to catch this before installation. It reads the model, finds a list of that kind with two filters, and reports the list, the rule and the reason. The model is then corrected, either to one filter or to a kind of list that honours both, and checked again. The trap is found at the review, where it costs an hour, and not at the counter, where it costs the public's trust.

> _Slide 6 — Title: 'What to ask a supplier'. Body, three text rows: 'Which rules about this platform does your check apply?' 'Show me the check running on our own model.' 'Which rules were shown running, and which were only described?'_

You cannot read the platform's code, and you do not need to. Ask the supplier three things. Which rules about this platform does your check apply? Show me the check running on our own model, not on a sample. And keep a table of the rules you saw running and the rules you were only told about. A rule that was only described is a promise, not evidence. Put the table in the acceptance file, beside the record of the check.

> _Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'What is known to fail on the platform is checked before anything is installed.'_

Known traps belong in a check that runs before installation. Ask to see that check run on your own model, and keep the record of what you saw.

> _Slide 8 — Title: 'Sources'. Body: Joget DX 9 Knowledge Base, the platform's documentation, pages Known Issues and Version 9.0.7. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The platform's traps, caught before deployment'. | Standard ITU template. No images. |
| 2 | Three text rows: the register, the rules, the check before installation. | The core payload. No rule identifier is shown. |
| 3 | Three text rows: the maker's page of known issues and the list of changes of release 9.0.7. | The release and its date as the platform's documentation gives them. |
| 4 | Four text rows: MoEYS's list with two filters. | Told as a story of the trap's kind, not as a named entry of the register. |
| 5 | Three text rows: the check finds, reports, and the model is corrected. | Text-only list. |
| 6 | Three questions for the supplier. | Each row is a question the manager asks at the review. |
| 7 | Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box. | The single message, word for word. |
| 8 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Record which platform rules a supplier's checks apply.** The prompt in the companion material gives you a table of the supplier's platform rules, each marked shown or only stated. Before the next video.

### AI usage tip — Record which platform rules a supplier's checks apply

**What the prompt does:** A supplier says its checks catch the platform's known problems. The manager needs a record of which rules were shown running on the ministry's own model, and which were only claimed.

**Prompt template (copy-paste into Claude):**

```text
Below is the supplier's written answer to the question 'Which rules about the low-code platform do your checks apply before anything is installed?', from the procurement or acceptance file of [your administration] [paste it]. Below that are my notes from the meeting where the supplier ran its checks on our own application model [paste them]. Produce a table with one row for each rule the supplier names: (1) the rule, in one plain sentence; (2) what it protects against; (3) whether I saw it run on our model, with the date, or it was only stated; (4) the question still to ask. Do not add rules the supplier did not name, and do not mark a rule as shown unless my notes say I saw it run. Output: a table of the supplier's platform rules, each marked shown or only stated, with the open questions listed after it.
```

**Inputs and outputs:** Input: the supplier's written answer, and the notes of the meeting where the checks were run. Output: a table of the supplier's platform rules, each marked shown or only stated, with the open questions listed after it.

**Safeguard:** The supplier's answer is evidence only when the check is shown running; the table records which rules were shown and which were only stated. Keep the table with the acceptance file, and ask again for every rule marked only stated.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The platform's traps, caught before deployment |
| YouTube-optimised title | Low-code platforms have known traps: how a check catches them before installation |
| Description (60 words) | Every low-code platform has places where it does not do what its screens suggest. See how a register of known differences becomes rules that a check applies before anything is installed, one trap told as a story on the ministry's list, and three questions to ask a supplier about its checks. For managers. AI prompt for recording the supplier's answer in the description. |
| Tags | low-code, platform traps, known issues, release notes, pre-deployment check, supplier, specification-driven development, Progressa |
| Playlist (YouTube) | KP4 — Module 5: Generate the service on a low-code platform and connect the blocks |
| ToR §4 coverage | §3.4 (implement services on a low-code platform); §4.1 (the check of a step before deployment); §4.3 (AI integration — the record of the supplier's rules). Rows 4 and 6 of the plan's coverage table. |
| PAERA citations | None. This subtopic rests on the platform's published documentation in the external-link list. |
| External-link list | Joget DX 9 Knowledge Base, Known Issues (https://kb.joget.org/jw/web/userview/jdocs/docs/DX9/known-issues); Joget DX 9 Knowledge Base, Version 9.0.7 (https://kb.joget.org/jw/web/userview/jdocs/docs/DX9/version-907) |

## 3.4 Subtopic 5.4 — Identity and registries: use the block, do not rebuild it

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the head of a sectoral ICT unit, or the project lead, who has a service specified and built by a supplier, convenes its reviews and accepts its documents; no knowledge of data models, version control, configuration files or the command line is assumed |
| Target runtime | ~5 min (≈538 spoken words) |
| PAERA anchor | GovStack Identity 2.0 §9.1.1, §7.2.1 and §8, requirement 6.2-r2; OpenID Connect Core 1.0 §2 and §3.1; GovStack Digital Registries 3.0-alpha, requirement DRS-33, §8.1 and §8.2; PAERA v1.0 §2.6 |

> **Single message —** _The service takes a person's identity and an institution's record from the body that keeps them._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Identity and registries: use the block, do not rebuild it'. Voice-over begins._

A supplier offers to add a table of users and a table of institutions to the ministry's new application. It sounds helpful and quick. It is the start of copies that will disagree, and of facts the ministry may have no reason to keep.

> _Slide 2 — Title: 'Who someone is: the identity sign-in'. Body, three text rows: 'The application sends the person to the identity block's own sign-in page.' 'The block asks which facts it may share; the person approves.' 'The application receives a code, exchanges it for a token, and reads the approved facts.'_

Identity comes from the body that keeps it. The GovStack Identity specification describes the sign-in step by step. The application sends the person to the identity block's own page. The person signs in there, and the block asks which facts it may share. The person approves. The application receives a code, exchanges it for a token that says who signed in, and then reads the facts that were approved. This follows OpenID Connect, an open standard for signing in.

> _Slide 3 — Title: 'Keep the identifier you are given'. Body, three text rows: 'The identity block gives each service its own identifier for the person.' 'The same person has a different identifier in each service.' 'The application keeps that identifier, and never the national number.'_

What the application keeps matters as much. The token carries an identifier that the block gives this one service for this one person. The Identity specification asks that the same person have a different identifier in each service, to protect privacy. So the application keeps the identifier it is given, and never the national number. Where a design must check a person who is not present, the specification requires the block to verify a person from a known identifier; settle with the identity authority what it offers before the design relies on it.

> _Slide 4 — Title: 'What an institution is: the register'. Body, three text rows: 'The specification: other systems work with a register's records through open interfaces, as the register authorises.' 'Progressa's design: only PHEQA's application writes the register of institutions.' 'A reader takes the record when it needs it, and keeps no copy.'_

An institution's record works the same way. The GovStack Digital Registries specification requires a register to let other systems search, read, create and update its records through open interfaces, and to authorise which systems and users may do so. Progressa's design authorises only PHEQA's application to write the register of institutions. Every other service reads the record when it needs it, and keeps no copy.

> _Slide 5 — Title: 'Progressa: one sign-in, one register, no copies'. Body, four text rows: 'An officer of MoEYS signs in through PNIA.' 'MoEYS's application keeps PNIA's identifier for her, not her national number.' 'Harbourview University College, INS-00217, is read from PHEQA's register when a case is opened.' 'Beside it, a design with its own table of institutions: two copies, drifting apart.' Figure F7, slide variant (figures/slides/F7_architecture.png), stands on the slide in place of the rows._

In Progressa, an officer of MoEYS signs in through PNIA, and MoEYS's application keeps the identifier PNIA gives it, not her national number. When she opens a case, the application reads Harbourview University College from PHEQA's register of institutions. Now picture the other design, with its own table of institutions inside MoEYS's application. One week PHEQA writes the college's new name into the register. MoEYS's copy keeps the old one, and the next week the minister signs a decision under a name the college no longer has.

> _Slide 6 — Title: 'A block used, not a copy kept'. Body, two text rows: 'A block paid for once serves every service that needs it.' 'A copy is a second register that nobody planned and nobody keeps.'_

A block paid for once and used by many services is re-use that only someone planning for the whole sector can see. A copy is the opposite: a second register that nobody planned, nobody keeps and nobody corrects. The reference architecture PAERA puts the deeper point plainly: digital public infrastructure is not neutral, and it shapes what can be built on top of it. Build on the block, and the next service inherits the same identity and the same register.

> _Slide 7 — Title: 'Signed in, and read from the register'. Demonstration segment, storyboard until recorded (section 4.10). Text-only stand-in until the recording exists: 'A test officer signs in through the identity sign-in.' 'The application shows the identifier it was given; no national number.' 'INS-00217 opened, as read from PHEQA's register.' 'Pass: sign-in complete; no national number; the record agrees with the register.'_

The demonstration shows both on MoEYS's application. A test officer signs in through the identity sign-in. The application shows the identifier it was given and no national number. Then an institution's record is opened, read from PHEQA's register. It passes when the sign-in completes, no national number appears, and the record shown agrees with the register. Until both applications are generated, this is a storyboard.

> _Slide 8 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The service takes a person's identity and an institution's record from the body that keeps them.'_

Take who someone is from the identity block, and what an institution is from its register. Keep the identifier you are given, and no copy.

> _Slide 9 — Title: 'Sources'. Body: GovStack Identity 2.0, sections 9.1.1, 7.2.1 and 8, and requirement 6.2-r2; OpenID Connect Core 1.0 incorporating errata set 2, sections 2 and 3.1; GovStack Digital Registries 3.0-alpha, requirement DRS-33 and sections 8.1 and 8.2; PAERA v1.0, section 2.6. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Identity and registries: use the block, do not rebuild it'. | Standard ITU template. No images. |
| 2 | Three text rows: the steps of the identity sign-in. | In the order the Identity specification gives them; no technical names of the messages. |
| 3 | Three text rows: the identifier the block gives each service; never the national number. | The core payload for identity. |
| 4 | Three text rows: open interfaces in the specification; one writer in Progressa's design; no copies. | The core payload for registries. |
| 5 | Figure F7 (slide variant) in place of four text rows: Progressa's sign-in, register and the drifting copy. | Figure F7, its slide variant (figures/slides/F7_architecture.png, drawn by the figure's own program in slide mode): PHEQA's and MoEYS's applications on one page, the sign-in from PNIA above them, PHEQA's register of institutions, MoEYS keeping no copy, and the fee and the read across Linkup as crossings; boxes, arrows and words only, no imagery and no person on screen. The rows are its text equivalent. Calibration item: a drawn figure under ITU's text-only rule. |
| 6 | Two contrasting text rows: a block used, a copy kept. | Text boxes side by side are allowed; labels in plain text only. |
| 7 | Demonstration segment (storyboard until recorded). Text-only stand-in of four short lines. | Replaced by the recording of the 5.4 walkthrough when both applications are generated. Until then, nothing on this slide claims a run. |
| 8 | Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box. | The single message, word for word. |
| 9 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Find the copies of facts another body keeps.** The prompt in the companion material gives you a table of the copied facts, each with the body that keeps it and the block to use instead. Before the next video.

### AI usage tip — Find the copies of facts another body keeps

**What the prompt does:** A design can quietly keep its own copy of facts that another body keeps, such as who a person is or an institution's record, and those copies drift apart from the original.

**Prompt template (copy-paste into Claude):**

```text
Below is the list of records and their fields from the design of a service in [your administration] [paste it]. Below that is the list of the bodies that keep identity or registers in the country, with what each keeps and the shared block through which it is reached [paste it]. For each field that holds a fact another body keeps: (1) name the record and the field; (2) name the body that keeps the fact; (3) name the block the service should use instead, such as the identity sign-in or a reading of the register; (4) say whether the design keeps a copy, and what reason the design gives for it. Flag every national identity number held anywhere in the design. Do not decide whether a copy is lawful. Output: a table of the copied facts, each with the body that keeps it and the block to use instead.
```

**Inputs and outputs:** Input: the design's records and fields, and the list of the bodies that keep identity or registers. Output: a table of the copied facts, each with the body that keeps it and the block to use instead.

**Safeguard:** Whether a fact may be copied is a question of law and of the other body's terms. The prompt only flags; the architect settles each flag with the body that keeps the fact, and records the answer.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Identity and registries: use the block, do not rebuild it |
| YouTube-optimised title | Use the identity sign-in and the register, do not copy them: building blocks in a government service |
| Description (60 words) | A government service should take who a person is from the identity block and an institution's record from the register that keeps it. See the sign-in step by step, why the service keeps its own identifier and never the national number, and how a copied table of institutions drifts. For managers. AI prompt for finding copied facts in a design in the description. |
| Tags | digital identity, OpenID Connect, digital registries, GovStack, building blocks, re-use, education, Progressa |
| Playlist (YouTube) | KP4 — Module 5: Generate the service on a low-code platform and connect the blocks |
| ToR §4 coverage | §3.4 (integrate building blocks: digital identity and registries); §4.1 (a step of the method: the crossings of the architecture); §4.2 (international standards: GovStack, OpenID Connect, PAERA); §4.3 (AI integration — the copied-facts check); §4.4 (demonstration in the education sector); §4.5 (architecture). Rows 3, 6, 7, 9 and 10 of the plan's coverage table. |
| PAERA citations | PAERA v1.0, section 2.6 (Change management): digital public infrastructure is not neutral and shapes what can be built on top of it. |
| External-link list | GovStack Identity 2.0; OpenID Connect Core 1.0 incorporating errata set 2; GovStack Digital Registries 3.0-alpha; PAERA v1.0 |

## 3.5 Subtopic 5.5 — The service's contract with the registration block, and its data interface

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the head of a sectoral ICT unit, or the project lead, who has a service specified and built by a supplier, convenes its reviews and accepts its documents; no knowledge of data models, version control, configuration files or the command line is assumed |
| Target runtime | ~5 min (≈467 spoken words) |
| PAERA anchor | GovStack Registration (default edition) §8.1 to §8.3; GovStack Information Mediator 1.1.1; NIIS X-Road 7.7.0, Message Protocol for REST (PR-REST) §4.1 and §5.1; OpenAPI Specification 3.0.3 |

> **Single message —** _The contract another system reads is produced from the description, not written beside it._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The service's contract with the registration block, and its data interface'. Voice-over begins._

When the ministry's application asks the quality authority's application for an institution, both sides rely on a contract: what may be asked, and what comes back. If someone writes that contract by hand beside the application, the two will drift apart.

> _Slide 2 — Title: 'What a contract is'. Body, three text rows: 'What another system may ask for.' 'What it must send, and what comes back.' 'Written in a published standard form, the OpenAPI Specification.'_

A contract, here, is the written promise one system makes to others. It says what they may ask for, what they must send, and what comes back. It is written in a published standard form, the OpenAPI Specification, so that a program on the other side can read it. The data exchange carries the call; the contract says what the call may be. Across the data exchange, each call names the service it is made to, and the exchange's own rules ask that each service be described in this standard form.

> _Slide 3 — Title: 'Produced from the description'. Body, three text rows: 'The description already says what the register holds and what it publishes.' 'A program writes the contract from it.' 'When the description changes, the contract is produced again.'_

In the SDD method, nobody writes the contract beside the application. The accepted description already says what the register holds and what it publishes. A program produces the contract from that description, in the same way the application itself is produced. When the description changes, the contract is produced again, so the application and the promise it makes to others cannot say different things. It is the same rule as for the application itself: correct the description, never the copy.

> _Slide 4 — Title: 'The contract with the registration block'. Body, four text rows: 'Published operations for applying online: the services and forms on offer, an application and its documents.' 'Published operations for processing: applications and officers' tasks.' 'For designing services and workflows: no interface specified yet.' 'The service's contract with the block is produced from the description.'_

The same holds for a registration service and the GovStack Registration block. Its specification publishes the operations of applying online: the services and forms on offer, and sending an application with its documents. It publishes operations for processing: the applications and the officers' tasks. For managing and designing services and workflows, it says no interface is specified yet. So the service's contract with the block is produced from the description, in the block's published terms.

> _Slide 5 — Title: 'Progressa: PHEQA's register, as MoEYS reads it'. Body, four text rows: 'MoEYS may ask: one institution, by its register number, such as INS-00217.' 'MoEYS may ask: the list of registered institutions.' 'MoEYS cannot ask: applications, inspections, fees, or anything the register does not publish.' 'Every call goes through Linkup.' Figure F14, slide variant (figures/slides/F14_data-interface.png), stands on the slide in place of the rows._

Read as a list, the contract of PHEQA's register is short. MoEYS may ask for one institution by its register number, such as INS-00217, and receive its name, its kind, its licence and its standing. MoEYS may ask for the list of registered institutions. It cannot ask for applications, inspections, fees, or anything else the register does not publish. Every call goes through Linkup. The manager reads this list; the builder's program reads the same contract as a file. One document gives the business side and IT one shared language.

> _Slide 6 — Title: 'One institution, read across the exchange'. Demonstration segment, storyboard until recorded (section 4.11). Text-only stand-in until the recording exists: 'MoEYS's application asks for INS-00217 across the data interface.' 'Beside the call: the contract it is read by.' 'Pass: the record agrees with PHEQA's register; the call is one the contract publishes.'_

The demonstration reads one institution. MoEYS's application asks for it across the data interface, and the contract it is read by is shown beside the call. It passes when the record returned agrees with PHEQA's register, and the call is one that the contract publishes. Until both applications are generated, this is a storyboard: the steps and the pass, written before anything is recorded.

> _Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The contract another system reads is produced from the description, not written beside it.'_

A contract produced from the accepted documents cannot drift from them. Read it as a plain list of what may be asked, and what may not.

> _Slide 8 — Title: 'Sources'. Body: GovStack Registration (default edition), sections 8.1, 8.2 and 8.3; GovStack Information Mediator 1.1.1; NIIS X-Road 7.7.0, Message Protocol for REST (PR-REST), sections 4.1 and 5.1; OpenAPI Specification 3.0.3. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The service's contract with the registration block, and its data interface'. | Standard ITU template. No images. |
| 2 | Three text rows: what a contract says, and the standard it is written in. | The name of the standard is shown; no file is shown. |
| 3 | Three text rows: produced from the description, produced again on change. | The core payload. |
| 4 | Four text rows: the Registration block's published operations, and what it does not yet specify. | Plain words for each group of operations; no technical names. |
| 5 | Figure F14 (slide variant) in place of four text rows: what MoEYS may and may not ask of PHEQA's register. | Figure F14, its slide variant (figures/slides/F14_data-interface.png, drawn by the figure's own program in slide mode): MoEYS's application, Linkup and PHEQA's application as three columns, the two calls and their answers as arrows between them, and the contract under them, what MoEYS can ask for and what it cannot; boxes, arrows and words only, no imagery and no person on screen. The rows are its text equivalent. Calibration item: a drawn figure under ITU's text-only rule. |
| 6 | Demonstration segment (storyboard until recorded). Text-only stand-in of three short lines. | Replaced by the recording of the 5.5 walkthrough when both applications are generated. Until then, nothing on this slide claims a run. |
| 7 | Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box. | The single message, word for word. |
| 8 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Read an interface contract as a plain list.** The prompt in the companion material gives you two plain lists, what the other body can ask for and what it cannot. Before the next video.

### AI usage tip — Read an interface contract as a plain list

**What the prompt does:** An interface contract is written for programs. A manager who must agree it with another body needs to know, in plain sentences, what the other body can ask for and what it cannot.

**Prompt template (copy-paste into Claude):**

```text
Below is the interface contract that [your body]'s system publishes to [the other body], written in the OpenAPI form [paste the contract itself]. Read it and write: (1) every request the other body can make, one plain sentence each, with what it must send and what comes back; (2) what the contract does not let it ask for, judged from the records and fields the contract leaves out; (3) every operation that writes, changes or deletes data, marked clearly. Quote each operation's name exactly as the contract gives it. Do not describe any request that is not in the contract. Output: two plain lists, what the other body can ask for and what it cannot, with every operation that writes data marked.
```

**Inputs and outputs:** Input: the interface contract itself. Output: two plain lists, what the other body can ask for and what it cannot, with every operation that writes data marked.

**Safeguard:** The prompt is given the contract itself, never a summary of it. Its plain lists are checked by the architect against the contract before they are sent to the other body.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The service's contract with the registration block, and its data interface |
| YouTube-optimised title | Interface contracts between ministries: produced from the description, read as a plain list |
| Description (60 words) | When one ministry's system reads another's register, both rely on a contract: what may be asked and what comes back. See why the contract is produced from the accepted description instead of being written beside it, what the GovStack Registration block publishes, and the contract of a register read as a plain list. For managers. AI prompt for reading a contract in the description. |
| Tags | interface contract, OpenAPI, data exchange, X-Road, GovStack Registration, information mediator, education, Progressa |
| Playlist (YouTube) | KP4 — Module 5: Generate the service on a low-code platform and connect the blocks |
| ToR §4 coverage | §3.4 (integrate building blocks: registries and information mediation); §4.1 (a step of the method and its output); §4.2 (international standards: GovStack, X-Road, OpenAPI); §4.3 (AI integration — the plain reading of a contract); §4.4 (demonstration in the education sector); §4.5 (API specifications); §6 (demonstration materials). Rows 3, 6, 7, 9, 10 and 14 of the plan's coverage table. |
| PAERA citations | None. This subtopic rests on the GovStack, X-Road and OpenAPI documents in the external-link list. |
| External-link list | GovStack Registration; GovStack Information Mediator 1.1.1; NIIS X-Road 7.7.0, Message Protocol for REST (PR-REST); OpenAPI Specification 3.0.3 |

## 3.6 Subtopic 5.6 — Payments and information mediation as named crossings

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the head of a sectoral ICT unit, or the project lead, who has a service specified and built by a supplier, convenes its reviews and accepts its documents; no knowledge of data models, version control, configuration files or the command line is assumed |
| Target runtime | ~5 min (≈457 spoken words) |
| PAERA anchor | GovStack Payments 3.0 §6.4 and §6.6; GovStack Information Mediator 1.1.1; GovStack Registration (default edition) §5.1.4 |

> **Single message —** _A payment or a call across the data exchange is a crossing the architecture names, not a block the service rebuilds._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Payments and information mediation as named crossings'. Voice-over begins._

A registration service takes a fee, reads another body's register and signs people in. Each of these leaves the service and comes back. Your architecture should name every one of them before anyone builds anything.

> _Slide 2 — Title: 'A crossing, named'. Body, four text rows: 'What crosses, and in which direction.' 'The body on the other side.' 'The block it goes through.' 'Who on the other side has agreed to it.'_

A crossing is any flow that leaves the service or enters it. The architecture names each one in a table: what crosses, in which direction, the body on the other side, and the block it passes through. The GovStack Registration specification expects all traffic into and out of a block to go through an Information Mediator or a secure gateway. A service that goes round the exchange builds a private road that nobody else can check.

> _Slide 3 — Title: 'The fee: through the Payments block'. Body, three text rows: 'The service sends a payment request to the Payments block.' 'The request carries the payer, the payee, the amount, the currency, the policy and the service's own transaction number.' 'The block tracks the payment, and the confirmation comes back.'_

Take the fee first. The registration service does not build its own payment screen or deal with banks. It sends a payment request to the government's Payments block. The GovStack Payments specification lists what such a request must carry at the least: who pays, who is paid, the amount, the currency, the policy, and the service's own transaction number. The block's payment portal tracks each payment's status and history, and the confirmation comes back to the service. The service keeps the confirmation, not the payment details.

> _Slide 4 — Title: 'When the block is not yet there'. Body, three text rows: 'The applicant pays into the authority's bank account.' 'The finance officer records the evidence of the payment.' 'The table names this as a crossing still to move to the Payments block.'_

The block may not be ready on the first day. Then the service does what many services do today: the applicant pays into the authority's bank account, and the finance officer records the evidence of the payment against the application: who paid, how much, and when. That is honest, and it works. The architecture still names it as a crossing, one still to move to the Payments block, so that the move is planned and budgeted, and not forgotten.

> _Slide 5 — Title: 'Progressa: the crossings of PHEQA's registration service'. Body, four text rows: 'The application fee: out to the Payments block; the confirmation back.' 'An institution's record: out to MoEYS when MoEYS asks, through Linkup.' 'Who signs in: in from PNIA, through its sign-in.' 'Of the same kind: a graduate's credential, issued by PDCA into the learner's digital wallet.' Figure F7, slide variant (figures/slides/F7_architecture.png), stands on the slide in place of the rows._

Here is the table for PHEQA's registration service. The application fee goes out to the Payments block, and the confirmation comes back. An institution's record goes out to MoEYS when MoEYS asks for it, through Linkup, which PDGA operates. Who signs in comes in from PNIA. And one more crossing of the same kind lies ahead: a graduate's credential, issued by PDCA into the learner's digital wallet. Each row names a body that must agree to it.

> _Slide 6 — Title: 'Each row agreed by the other side'. Body, four text rows: 'The operator of the Payments block: the fee.' 'PDGA: the use of Linkup.' 'PNIA: the sign-in.' 'MoEYS: what it reads from the register.'_

A crossing is a promise made together with someone else, so each row needs that body's agreement. The operator of the Payments block confirms the fee crossing. PDGA confirms the use of Linkup. PNIA confirms the sign-in. MoEYS confirms what it will read from the register. Then the head of PHEQA's ICT unit accepts the table. A row that nobody on the other side has seen is a promise made on their behalf, and the first test will show it.

> _Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A payment or a call across the data exchange is a crossing the architecture names, not a block the service rebuilds.'_

Name every crossing, the body on the other side and the block it goes through. Never rebuild a block that a crossing can use.

> _Slide 8 — Title: 'Sources'. Body: GovStack Payments 3.0, sections 6.4 and 6.6; GovStack Information Mediator 1.1.1; GovStack Registration (default edition), section 5.1.4. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Payments and information mediation as named crossings'. | Standard ITU template. No images. |
| 2 | Four text rows: the columns of the crossing table. | The core payload. |
| 3 | Three text rows: the payment request and its confirmation. | The fields of the request in the order the Payments specification gives them. |
| 4 | Three text rows: the officer's recording of a payment, named as a crossing still to move. | Shown beside the published way, not instead of it. |
| 5 | Figure F7 (slide variant) in place of four text rows: the crossing table of PHEQA's registration service. | Figure F7, its slide variant (figures/slides/F7_architecture.png, drawn by the figure's own program in slide mode): the crossings of PHEQA's registration service drawn as arrows, the fee to the Payments block, the record to MoEYS across Linkup, the sign-in from PNIA; the credential crossing of the same kind is spoken, not drawn; boxes, arrows and words only, no imagery and no person on screen. The rows are its text equivalent. Calibration item: a drawn figure under ITU's text-only rule. |
| 6 | Four text rows: who confirms each row. | Text-only list. |
| 7 | Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box. | The single message, word for word. |
| 8 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Draft the crossing table of a service.** The prompt in the companion material gives you a crossing table, one row for each crossing. Before the next video.

### AI usage tip — Draft the crossing table of a service

**What the prompt does:** A service that pays a fee and reads another body's register crosses its own boundary several times. The architect needs every crossing named, each with its direction, the body on the other side and the block it goes through, before anyone builds.

**Prompt template (copy-paste into Claude):**

```text
Below is a short description of a public service in [your administration]: what it asks of applicants, whether it takes a fee, and which other bodies' records it needs [paste it]. Below that is the list of the country's shared blocks and their operators: identity, registers, payments and the data exchange [paste it]. Draft the crossing table of the service, with one row for each flow that leaves the service or enters it: (1) what crosses; (2) the direction; (3) the body on the other side; (4) the block it goes through; (5) who must confirm the row. Mark every flow that goes round a block instead of through it. Do not invent a block or an operator that is not in the list. Output: a crossing table, one row for each crossing, with the rows that go round a block marked.
```

**Inputs and outputs:** Input: the description of the service, and the list of the shared blocks and their operators. Output: a crossing table, one row for each crossing, with the rows that go round a block marked.

**Safeguard:** The table is confirmed with the operator of each block before the architecture relies on it. A crossing that goes round a block instead of through it is a question for the architect, not a row to keep.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Payments and information mediation as named crossings |
| YouTube-optimised title | Fees, registers and sign-in: name every crossing of a government service |
| Description (60 words) | A service that takes a fee, reads another body's register and signs people in crosses its own boundary each time. See how the architecture names every crossing, how a fee goes through the Payments block, what a service does while the block is not ready, and who must agree to each row. For managers. AI prompt for drafting a crossing table in the description. |
| Tags | digital payments, information mediation, crossings, GovStack Payments, data exchange, digital wallet, education, Progressa |
| Playlist (YouTube) | KP4 — Module 5: Generate the service on a low-code platform and connect the blocks |
| ToR §4 coverage | §3.4 (integrate building blocks: digital payments, information mediation, and the digital wallet named as a crossing); §4.2 (international standards: GovStack); §4.3 (AI integration — the crossing table); §4.5 (architecture). Rows 3, 7 and 10 of the plan's coverage table. |
| PAERA citations | None. This subtopic rests on the GovStack documents in the external-link list. |
| External-link list | GovStack Payments 3.0; GovStack Information Mediator 1.1.1; GovStack Registration |

## 3.7 Subtopic 5.7 — Proof on the running system: a task a person finishes

| Field | Value |
| --- | --- |
| Persona | A (Architect) — the head of a sectoral ICT unit, or the project lead, who has a service specified and built by a supplier, convenes its reviews and accepts its documents; no knowledge of data models, version control, configuration files or the command line is assumed |
| Target runtime | ~5 min (≈458 spoken words) |
| PAERA anchor | None of its own: the SDD method's third rule, that at least one check ends on the running system, and its running-system checks, stated in plain words |

> **Single message —** _The last check is a person finishing a real task on the running service, and the record that they did._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Proof on the running system: a task a person finishes'. Voice-over begins._

Every document is accepted, every check reports a pass, and the application is installed. One question is still open: can an officer finish a real task on it? Only a person on the running service can answer, and the answer must be recorded.

> _Slide 2 — Title: 'The third rule'. Body, three text rows: 'A check of a document is not a check of the service.' 'At least one check ends on the running system.' 'A person finishes a real task, and the run is recorded.'_

Most checks in the SDD method read documents. They compare a screen with its story, or the model with the interaction design. Those checks are needed, and they say nothing about whether the service works for the person at the counter. A pass on a document is not a working counter. So the method's third rule is that at least one check ends on the running system. A person goes through a real task on the installed application, and the run is recorded.

> _Slide 3 — Title: 'A journey, written before it is run'. Body, three text rows: 'Where it starts: a menu entry, and the role signed in.' 'The steps: each screen, and what the person does there.' 'What counts as finished.'_

That check is written as a journey. A journey starts where an officer really starts: at a menu entry, signed in with a real role. It goes through the real screens, step by step, as the goal's story says. And it states exactly what counts as finished. A program can drive a journey through the screens, but the journey is written from the story your officials agreed, not from the screens the supplier built. The same journey is a story the business side recognises and a test the builder can run.

> _Slide 4 — Title: 'Progressa: approving a change of name'. Body, five numbered text rows: '1. Sign in to MoEYS's application with the minister's role.' '2. Open Names, the list and reviews; choose the advice on Harbourview University College.' '3. Read PHEQA's advice, and the college as PHEQA's register shows it.' '4. Approve the new name.' '5. Finished: the approval is recorded and sent to PHEQA.'_

In Progressa the journey is the approval of a change of an institution's name. A test officer of MoEYS signs in with the minister's role. In the category Names, the list and reviews, she opens the list of advices that await a decision, and chooses the one on Harbourview University College. She reads PHEQA's advice, and the college as PHEQA's register shows it. She approves the new name. The journey is finished when the approval is recorded and sent to PHEQA.

> _Slide 5 — Title: 'The record that it happened'. Body, four text rows: 'Which journey.' 'On which installation.' 'At what time, and with what result at each step.' 'Written and not run: reported as not run.'_

The record of the run is the evidence of acceptance. It names the journey, the installation it ran on and the time, with the result of each step. A journey that was written and never run is reported as not run, never as passed. A journey that stopped at step three is reported as stopped at step three. The minister signs on records of what happened, not on descriptions of what should. Keep each record with the acceptance file.

> _Slide 6 — Title: 'The change of name, on the running application'. Demonstration segment, storyboard until recorded (section 4.12). Text-only stand-in until the recording exists: 'The officer's journey, from the list of advices to the recorded approval.' 'The record of the run beside it.' 'Pass: the journey ends on the recorded approval; the record names the journey, the installation and the time.'_

The demonstration shows this journey on MoEYS's running application, with the record of the run beside it. It passes when the journey ends on the recorded approval, and the record names the journey, the installation and the time. Until MoEYS's application is generated, this is a storyboard: written now, and recorded when the application runs.

> _Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The last check is a person finishing a real task on the running service, and the record that they did.'_

Acceptance ends with a person finishing a real task on the running service. Keep the record of the run; a journey not run is not passed.

> _Slide 8 — Title: 'Sources'. Body: 'This subtopic states the SDD method's own third rule, that at least one check ends on the running system, in plain words. It cites no external source.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Proof on the running system: a task a person finishes'. | Standard ITU template. No images. |
| 2 | Three text rows: the method's third rule. | The core payload. |
| 3 | Three text rows: the start, the steps and the finish of a journey. | Text-only list. |
| 4 | Five numbered text rows: the change-of-name journey in Progressa. | Progressa's names as the fact sheet gives them. |
| 5 | Four text rows: what the record of a run names. | The last row is kept on screen for as long as the voice-over speaks of it. |
| 6 | Demonstration segment (storyboard until recorded). Text-only stand-in of three short lines. | Replaced by the recording of the 5.7 walkthrough when MoEYS's application is generated. Until then, nothing on this slide claims a run. |
| 7 | Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box. | The single message, word for word. |
| 8 | Sources slide. One line: the subtopic rests on the method itself. | No external link for this subtopic. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Write acceptance journeys for officers from the goals' stories.** The prompt in the companion material gives you one acceptance journey for each goal, each with its start, its steps and what counts as finished. Before the next video.

### AI usage tip — Write acceptance journeys for officers from the goals' stories

**What the prompt does:** Acceptance tests are often written from the screens the supplier built. They should come from the stories the officials agreed, so that each one tests a real task from its real start to its real finish.

**Prompt template (copy-paste into Claude):**

```text
Below are the stories of the goals of a service in [your administration], each with its main steps as the officials agreed them [paste them]. Below that are the roles of the application and the menu categories each role sees [paste them]. For each goal, write one acceptance journey for an officer: (1) the role to sign in with; (2) where it starts: the menu category and the entry; (3) the steps, one for each screen, each with what the officer does and sees; (4) what counts as finished, in one sentence; (5) a line 'Run: not yet', to be filled with the installation, the time and the result when a person runs it. Use only the steps in the stories; mark a step the stories do not settle as 'to settle'. Output: one acceptance journey for each goal, each with its start, its steps and what counts as finished.
```

**Inputs and outputs:** Input: the goals' stories, and the roles and menu categories of the application. Output: one acceptance journey for each goal, each with its start, its steps and what counts as finished.

**Safeguard:** A journey is accepted only when a person has finished it on the running service; a journey written and not run is reported as not run. Keep the line 'Run: not yet' until the record of a real run replaces it.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Proof on the running system: a task a person finishes |
| YouTube-optimised title | Accept a government service only when a person finishes a real task on it, and the run is recorded |
| Description (60 words) | Checks of documents say nothing about whether a service works. See the rule that at least one check ends on the running system, how an acceptance journey is written from the story officials agreed, a ministry officer approving a change of an institution's name, and what the record of the run must name. For managers. AI prompt for writing acceptance journeys in the description. |
| Tags | acceptance testing, running system, acceptance journey, low-code, specification-driven development, digital government services, education, Progressa |
| Playlist (YouTube) | KP4 — Module 5: Generate the service on a low-code platform and connect the blocks |
| ToR §4 coverage | §3.4 (implement services on a low-code platform); §4.1 (the validation of the last step of the method); §4.3 (AI integration — the acceptance journeys); §4.4 (demonstration in the education sector); §4.6 (a simulated example of the step's output). Rows 4, 6, 9 and 11 of the plan's coverage table. |
| PAERA citations | None. The content is the SDD method's own. |
| External-link list | None. This subtopic cites no external source. |

## 4. Production notes

### 4.1 Design standard — the split-screen usability test

The bar for every video in Module 5 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to follow along and act on the other half. For Module 5, 'act' means produce the matching working artefact: the acceptance questions for a generated application, a contract clause forbidding hand edits, a record of the platform rules a supplier's checks apply, a table of copied facts, a plain reading of an interface contract, a crossing table, or the acceptance journeys of a service. Each subtopic's AI usage tip produces that artefact.

### 4.2 Slide branding

Every slide follows the ITU template of the Knowledge Products and Video Materials Guide, section 3.i: title text Arial Bold 28pt; body text Arial 18pt; background colour #E5F5FB. Text only, with no images. Diagrams and text boxes are used only where strictly necessary, and all their labels are plain text. No country emblems and no agency logos. The single-sentence summary slide that closes each subtopic carries the single message word for word, in 28pt type, with the on-screen practice box.

### 4.3 No individuals on screen

No individuals appear in any video. Two options are open: an AI-avatar narrator generated by ITU's production pipeline, or a voice-over over the screen only. The choice is ITU's; the scripts work with either. The demonstration segments are recordings of the screen with a voice-over.

### 4.4 Voice and tone

Direct address ('your supplier', 'your contract'). Plain language at about an eighth-grade English level, held although the Architect register goes one level deeper. The documents of the method are named by what they are for; the application model is 'the one file the application is generated from' or 'the file a program reads', and the check before generation is 'a program checks the file, and refuses it'. No rule identifier, command or file format is spoken or shown. Technical words that the module cannot avoid (the kit, the read-back, a contract, a crossing, a journey) are explained in plain words on first use; headlines stay capability-led.

### 4.5 External links and 'Find the link in the description'

Every subtopic with an external source has an external-link list in its metadata, and every script refers to external material with the convention 'Find the link in the description' rather than reading addresses aloud. Subtopics 5.2 and 5.7 state the method's own rules and cite no external source. ITU's production pipeline compiles each list into the video's description. The aggregate list, with the addresses, is in section 6.

### 4.6 What runs, and what is said about it

On the date of this bundle the application models of the worked example are not yet written and its applications are not yet generated. No script, slide or metadata line in this bundle says that an application was generated, installed or checked, or that a journey was run. Each script says what a check runs and what counts as a pass, and each demonstration segment is a storyboard, given below. When a check passes on the generated application, its segment is recorded from the run and the script of that subtopic gains one sentence that states the result and its date. The worked example's two installations are set up and the data interface between them has been tried with a test application; the segment of 5.5 can therefore be recorded as soon as both applications are generated.

### 4.7 The storyboards of the five demonstration segments, in sections 4.8 to 4.12

Each storyboard lists the steps the recording will show, in order, with what the viewer sees and what counts as a pass. It is written from the plan's demonstration row of the subtopic and from the worked example's accepted documents, recast in Progressa. Every step below is still to be run; none has been.

### 4.8 Storyboard for 5.1 — from the file to the menu, on MoEYS's installation

| Step | What is done | What the viewer sees | What counts as a pass |
| --- | --- | --- | --- |
| 1 | Run the check on MoEYS's application model. | The check's report. | The model is admitted: it contradicts neither the accepted interaction design nor a rule of the platform. |
| 2 | Build the application from the model. | The end of the build's report. | The build ends without error. |
| 3 | Install the application on MoEYS's installation. | The application in the platform's list of applications. | The application appears on the installation. |
| 4 | Sign in with the minister's role and open the menu. | The categories Licences; Names, the list and reviews; Suspension and cancellation. | Each category the interaction design gives the minister is present, and no other. |
| 5 | Sign in with the officer's role, and then with the role of a person asking for a review. | The categories The Gazette, and Requests for review. | Every menu category of the interaction design is present, each for its own role. |
| 6 | Open one list and one form: the applications that await the minister's decision, and the decision form. | The list and the form. | Both open without error; the list shows only what awaits the act. |

### 4.9 Storyboard for 5.2 — a hand edit shown up by the read-back

| Step | What is done | What the viewer sees | What counts as a pass |
| --- | --- | --- | --- |
| 1 | Run the read-back on the generated application. | Every file marked in step. | The trial starts from an application with no file out of date or edited by hand. |
| 2 | On the platform, change the label of one field on the form on which the minister approves a new name. | The changed label on the form. | The change is made on the platform only, not in any document. |
| 3 | Run the read-back. | The form marked as edited by hand. | The first read-back names the edited file. |
| 4 | Correct the label in the goal's screens and in the model; generate and install the application again. | The corrected label on the form. | The correction is in the description, not on the platform. |
| 5 | Run the read-back again. | Every file marked in step. | The second read-back shows every file in step. |

### 4.10 Storyboard for 5.4 — signed in through PNIA, and an institution read from PHEQA's register

| Step | What is done | What the viewer sees | What counts as a pass |
| --- | --- | --- | --- |
| 1 | Open MoEYS's application and choose to sign in. | The browser goes to PNIA's own sign-in page. | The sign-in page is PNIA's, not the application's. |
| 2 | Sign in as the test officer, and approve the facts PNIA asks to share. | PNIA's page asking which facts may be shared. | The sign-in completes; only the facts the application needs are asked for. |
| 3 | Back in the application, open the test officer's own details. | The identifier PNIA gave the application for her. | The application shows the identifier it was given, and no national number appears. |
| 4 | Open the advice on Harbourview University College, INS-00217. | The college's name, kind, licence and standing, as read from PHEQA's register. | The record shown agrees with PHEQA's register at that moment. |

### 4.11 Storyboard for 5.5 — one institution read across the data interface, with its contract

| Step | What is done | What the viewer sees | What counts as a pass |
| --- | --- | --- | --- |
| 1 | Show the contract of PHEQA's register as a plain list. | Two requests MoEYS may make: one institution by its register number; the list of registered institutions. | The list is read from the contract, which is produced from PHEQA's description. |
| 2 | From MoEYS's application, ask for INS-00217 across the data interface. | The call, and beside it the entry of the contract it is made under. | The call is one the contract publishes. |
| 3 | Show the answer beside PHEQA's register. | Harbourview University College: its name, kind, licence and standing, in the answer and in the register. | The record returned agrees with the register. |

### 4.12 Storyboard for 5.7 — the change of name, finished on the running application

| Step | What is done | What the viewer sees | What counts as a pass |
| --- | --- | --- | --- |
| 1 | As a test officer of MoEYS, sign in to the running application with the minister's role. | The minister's menu. | The journey starts at a real menu entry, with a real role. |
| 2 | Open Names, the list and reviews, and the list of advices on a change of name that await a decision. | The advice on Harbourview University College. | The advice is on the list. |
| 3 | Choose it, and read the advice and the college. | PHEQA's advice, and the college as PHEQA's register shows it. | Everything the advice carries is shown. |
| 4 | Approve the new name. | The message that the approval is recorded and sent to PHEQA. | The journey ends on the recorded approval. |
| 5 | Open the record of the run. | The journey, the installation, the time and the result of each step. | The record names the journey, the installation and the time. |

## 5. Open calibration items

The drafting raised the items below. They are forwarded for discussion with ITU at the Tuesday weekly call, or to the owner of the plan where marked.

### 5.1 When the demonstrations can be recorded

Four of the five segments need the worked example's generated applications, and the fifth (5.2) needs any generated application. The application models are not yet written, so every segment stands as a storyboard. The segment of 5.1 is the principal walkthrough of KP4 and should be the first recorded.

### 5.2 Verifying a person from a known identifier (5.4)

The plan's sources line for 5.4 says that the Identity specification requires verification from a known identifier and publishes no interface for it. The specification's section 8.1 publishes verification interfaces that follow OpenID Connect, and whether any of them serves verification from a known identifier was not established when the sources were fixed. The script therefore says only that the requirement exists and that the published interfaces follow OpenID Connect, and asks the manager to settle with the identity authority what it offers. For the owner of the plan.

### 5.3 The gateway beside the Information Mediator (5.6)

Section 5.1.4 of the Registration specification asks that traffic in and out of a block use 'an Information Mediator or secure API gateway'. The script of 5.6 says so; the plan's wording names only the Information Mediator. For the owner of the plan.

### 5.4 The payment portal (5.6)

Section 6.6 of the Payments specification describes the payment portal mainly for payments from government to persons. The script cites only its requirement to track payment status and payment history, which holds for a fee as well.

### 5.5 The platform's documentation is not pinned to one release

The Joget DX 9 Knowledge Base covers every DX 9 release in one site. The pages cited in 5.1 and 5.3 were read on 4 October 2026; a later reading may show later text. The release date of 9.0.7 is read from its own page.

### 5.6 Who approves a change of name on the running application (5.7)

The fact sheet makes the minister the one who approves a change of an institution's name; the plan's worked example names an officer of MoEYS. The script has a test officer of MoEYS sign in with the minister's role, which keeps both.

### 5.7 Editorial tone calls

Lines that deserve a deliberate keep, soften or cut decision: 'A rule that was only described is a promise, not evidence' (5.3); 'A copy is a second register that nobody planned, nobody keeps and nobody corrects' (5.4); 'A row that nobody on the other side has seen is a promise made on their behalf' (5.6); 'The minister signs on records of what happened, not on descriptions of what should' (5.7).

### 5.8 Signposts

The project's standing rules ask for African signposts and one international polestar. No public source on an African country is cited for the matters of this module, so no country signpost is used; the worked examples are Progressa's throughout.

## 6. Annex — aggregate external-link list

Compiled across the seven subtopics for ITU's video production pipeline, to be split per subtopic into the video descriptions. Every source is public and is one the KP4 outline and content plan version 0.2 names for the subtopic, at the edition it names.

| Subtopic | Sources referenced, with addresses |
| --- | --- |
| 5.1 | Joget DX 9 Knowledge Base: Form Builder (https://kb.joget.org/jw/web/userview/jdocs/docs/DX9/form-builder); List Builder (https://kb.joget.org/jw/web/userview/jdocs/docs/DX9/list-builder); UI Builder (https://kb.joget.org/jw/web/userview/jdocs/docs/DX9/ui-builder); Process Builder (https://kb.joget.org/jw/web/userview/jdocs/docs/DX9/process-builder); Migrating a Single Joget App (https://kb.joget.org/jw/web/userview/jdocs/docs/DX9/migrating-a-single-joget-app). |
| 5.2 | None: the subtopic states the method's own rule. |
| 5.3 | Joget DX 9 Knowledge Base: Known Issues (https://kb.joget.org/jw/web/userview/jdocs/docs/DX9/known-issues); Version 9.0.7 (https://kb.joget.org/jw/web/userview/jdocs/docs/DX9/version-907). |
| 5.4 | GovStack Identity 2.0 (https://specs.govstack.global/identity); OpenID Connect Core 1.0 incorporating errata set 2 (https://openid.net/specs/openid-connect-core-1_0.html); GovStack Digital Registries 3.0-alpha (https://specs.govstack.global/registries); PAERA v1.0 (https://paera.govstack.global/). |
| 5.5 | GovStack Registration (https://specs.govstack.global/registration); GovStack Information Mediator 1.1.1 (https://specs.govstack.global/information-mediator); NIIS X-Road 7.7.0, Message Protocol for REST PR-REST (https://github.com/nordic-institute/X-Road/tree/7.7.0/doc); OpenAPI Specification 3.0.3 (https://spec.openapis.org/oas/v3.0.3.html). |
| 5.6 | GovStack Payments 3.0 (https://specs.govstack.global/payments); GovStack Information Mediator 1.1.1; GovStack Registration. |
| 5.7 | None: the subtopic states the method's own rule. |

All references are publicly accessible and verifiable.

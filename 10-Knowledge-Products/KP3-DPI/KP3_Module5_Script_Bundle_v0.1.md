<!-- GENERATED from build_kp3_module5_v01.js by bundle_to_md.py — do not hand-edit; edit the build script and regenerate. -->

# KP3 Module 5 — Video Script Bundle v0.1 (ITU-aligned)

| Field | Value |
| --- | --- |
| Document | Video script bundle for Module 5 of KP3 |
| Version | v0.1 — written on the KP3 outline and content plan, version 0.3, of 1 October 2026 |
| Date | 1 October 2026 |
| Module persona | A (Architect) — DPI solution architect, integration lead or ministry technical lead who joins the blocks on the data exchange layer and proves them |
| Subtopics | Six subtopics (5.1 – 5.6), each shipped as one standalone video of about four minutes |
| Module runtime | Approximately 24 minutes across six standalone videos |
| Configurations | X1 to X7, the composition on the data exchange layer. They are the colleague's build and do not exist yet; this bundle shows them as specimens marked 'specimen, not yet run' (KP3-DPI/specimens/composition/) |
| Demonstration segments | Four (5.1, 5.3, 5.4 and 5.5), each written as a storyboard in sections 4.7 to 4.11 until it can be recorded |
| Prepared by | FiscalAdmin OÜ |

This bundle is the v0.1 working draft of Module 5 of KP3 — Education DPI Roadmap. Module 5 joins the four building blocks of the first proof through the data exchange layer and shows, by one registration run from beginning to end, how a country proves that they work as one foundation. It teaches what must be in place before blocks can call each other across ministries, which block puts the steps of a service in order, the once-only registration of a learner, the acceptance checks that turn 'set up' into 'proven', the records that show a call took place, and what the next education services can now use. The register is plain English at about an eighth-grade level; technical terms are explained in plain words on first use, and each subtopic leads with what the listener can do. The six videos are numbered 5.1 to 5.6 and each stands alone. All slide specifications follow ITU's text-only branding. Each subtopic carries an AI usage tip with a copy-paste Claude prompt. External references use the convention 'Find the link in the description'.

## 1. Document context

### 1.1 What this document is

This document collects the six video scripts of Module 5 of Knowledge Product 3 (Education DPI Roadmap), with slide specifications, metadata, AI usage tips, production notes and the storyboards of the four demonstration segments. It is the v0.1 working draft, written on the KP3 outline and content plan, version 0.3, whose section 1 fixes each subtopic's single message, sources, worked example and AI usage tip.

Module 5 is the last of the four build modules. Modules 2 to 4 set up a registration service, a learner register, and the connections to identity and payments. Module 5 joins them through the data exchange layer, which GovStack calls the Information Mediator and which Progressa runs as Linkup, an X-Road 7.7.0 federation set up in KP2. Its main correction to the earlier plan is that the data exchange layer carries calls and enforces who may make them, but does not put the steps of a service in order: the registration service does.

### 1.2 How the module is taught before anything is built

The seven configurations of this module, X1 to X7, belong to a build that a colleague carries out separately. On the date of this bundle none of them exists, and the data exchange federation of KP2 does not run anywhere; it is started again for the recordings. The scripts are therefore written from the published specifications and the X-Road documents: they say what each configuration contains, what its check runs and what counts as a pass, and never that anything runs. Each configuration is shown as a specimen, a file written for Progressa in the specification's own terms and marked 'specimen, not yet run', in KP3-DPI/specimens/composition/. Each demonstration segment exists as a storyboard (section 4.7). When a check has passed on the built configuration, the specimen is replaced by the file as built, the segment is recorded, and the script gains one sentence that states the result and its date.

### 1.3 The names used for Progressa

| Name | What it is, and its part in Module 5 |
| --- | --- |
| PDGA | Progressa Digital Government Authority. It owns and operates Linkup, the data exchange federation, and sets its technical rules. |
| PNEA | Progressa National Examination Authority. A member of Linkup since KP2; in KP2's configuration, the one member allowed to call the identity and enrolment services. KP3 builds nothing on it. |
| PLR | Progressa Learner Registry. A member of Linkup since KP2, publishing one enrolment service that only PNEA may call. KP3 sets up the authoritative learner register behind it (module 3); module 5 adds its write service. |
| PNIA | Progressa National Identity Authority. A member of Linkup since KP2. Its one service on Linkup is a read of a person by national number, a contract of Progressa's own, which only PNEA may call. An education service checks a person through PNIA's sign-in with OpenID Connect, with the person present. |
| MoEYS | Progressa's ministry of education. It is not a member of Linkup. |
| The Payments block and PayPro | The government's Payments block, which module 4 configures and which joins Linkup as a member in module 5. PayPro is Progressa's payment provider, one of the payment systems in the market, reached through the block's payer bank. |
| Linkup | The X-Road federation that KP2 set up, release 7.7.0: the data exchange layer, which GovStack calls the Information Mediator. |

### 1.4 How to read this document

Section 2 gives Module 5 at a glance. Section 3 holds the script of each subtopic: shaded blocks are on-screen cues, plain paragraphs are the voice-over, and the slide specification, AI usage tip and metadata follow. Section 4 collects the production notes, with the storyboards of the four demonstration segments. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate external-link list for ITU's production pipeline.

## 2. Module 5 at a glance

Six standalone subtopic videos. One Architect persona throughout. Total runtime approximately twenty-four minutes. Each video has a single message, quoted word for word from the KP3 outline version 0.3, and is discoverable on its own; the playlist provides navigation but is not needed to understand any one video.

| # | Title | Single message | Runtime |
| --- | --- | --- | --- |
| 5.1 | What must be in place before the blocks can call each other | Before one block can call another across ministries, each must be a member of the data exchange layer, each service registered with its contract, and access granted to the caller. | ~4 min |
| 5.2 | Who puts the steps in order: contracts, and the block that calls them | The data exchange layer carries each call and enforces who may make it, but the registration service puts the steps in order, so know which block holds the sequence before you approve an integration plan. | ~4 min |
| 5.3 | The once-only registration, from beginning to end | A learner signs in, the form fills with the facts the learner agrees to release, the registrar approves and the record is in the register: one run that proves four blocks work as one foundation. | ~4 min |
| 5.4 | The acceptance checks: from "set up" to "proven" | Every configuration has a check that someone can run and read, and a block is called proven only when its checks have run and passed. | ~4 min |
| 5.5 | Reading the evidence of a call | Three records can show that a call took place, the message log, operational monitoring and the traffic view, but each only under settings you must choose before the first call. | ~4 min |
| 5.6 | What the next services can now use | Identity, the learner register and payments are now services with published contracts that the next education services can use without building them again, with consent and notification still to add. | ~4 min |

## 3. The scripts

## 3.1 Subtopic 5.1 — What must be in place before the blocks can call each other

| Field | Value |
| --- | --- |
| Persona | A (Architect) — DPI solution architect, integration lead or ministry technical lead who joins the blocks on the data exchange layer and proves them |
| Target runtime | ~4 min (≈443 spoken words) |
| PAERA anchor | Information Mediator 1.1.1 §6.2 and §7.2 (members, applications, services); X-Road 7.7.0 ARC-G section 1.2 and UG-SS sections 6.1.2 and 7 |

> **Single message —** _Before one block can call another across ministries, each must be a member of the data exchange layer, each service registered with its contract, and access granted to the caller._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'What must be in place before the blocks can call each other'. Voice-over begins._

A minister is told that the new registration service will reuse identity and the learner register. Your job is to check whether those calls can happen at all. Across ministries, three things must be in place first, and each one has an owner.

> _Slide 2 — Title: 'Three things, in this order'. Body, three text rows: '1. A member: the organisation is admitted to the data exchange layer.' '2. A registered service: its contract, an OpenAPI description, is published.' '3. A grant: the owner of the service allows this caller.'_

The first is membership. An organisation asks to join the data exchange layer, and the operator checks and accepts it. The second is a registered service. The provider publishes each service with its contract, an OpenAPI description, so that callers know exactly what it offers. The third is a grant. The provider decides who may call. The Information Mediator specification asks for all three. X-Road, the software behind Progressa's exchange, works the same way: a new service starts switched off, and the owner of the data controls who can use it.

> _Slide 3 — Title: 'Is the exchange required at all?'. Body, two text rows: 'Strongly recommended for any exchange across the internet.' 'Not required between blocks that sit together on one platform.'_

One choice comes before the three. The specification strongly recommends the data exchange layer for any exchange across the internet. It does not require it between blocks that sit together on one platform. So sending every call through the exchange is a choice the specification allows, not a rule it imposes. Progressa makes that choice because its blocks belong to different authorities, and each authority must control who reads its data.

> _Slide 4 — Title: 'Progressa's members today'. Body, a plain-text table of four rows: 'PDGA — owns and operates the exchange.' 'PNEA, the examination authority — the caller.' 'PLR, the learner registry — one enrolment service; only PNEA may call it.' 'PNIA, the identity authority — one service, a read of a person by national number; only PNEA may call it.' Footer line: 'Not a member: MoEYS, the ministry of education.'_

Progressa already has an exchange, called Linkup. The digital government authority, PDGA, owns and operates it. The examination authority, PNEA, is the caller. The learner registry, PLR, publishes one enrolment service, and only PNEA may call it. The identity authority, PNIA, publishes one service, a read of a person by national number. That is a contract of Progressa's own, and only PNEA may call it. The ministry of education, MoEYS, is not a member.

> _Slide 5 — Title: 'What this course adds'. Body, four text rows: 'A member for the registration service, with its application registered.' 'A write service on the learner register, registered with its contract.' 'Grants: the registration service may call the write service.' 'The Payments block as a member, publishing its own interface.'_

This course adds four things. The registration service gets a member of its own, with its application registered. The learner register gets a write service, registered with its contract, because PLR's one service today is a read. Grants let the registration service call that write service, and PNIA's service too if the build uses it. And the Payments block joins as a member, publishing its own interface. PayPro stays behind the block's payer bank, as one of the payment systems in the market.

> _Slide 6 — Title: 'A call without a grant is refused'. Demonstration segment, storyboard until recorded (section 4.8): the list of members and services, then the same call made with a grant and without one. Text-only stand-in until the recording exists: 'Listed: the registration service. Listed: the write service and its contract. With a grant: answered. Without a grant: access denied.'_

The check is easy to read. The list of members shows the registration service. The list of services shows the register's write service and its contract. Then a member without a grant makes the same call, and the exchange refuses it with an access-denied fault. Being on the exchange is not permission.

> _Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Before one block can call another across ministries, each must be a member of the data exchange layer, each service registered with its contract, and access granted to the caller.'_

Before any plan says that two blocks will talk, check three things: membership, a registered contract, and a grant from the owner. If one is missing, the call fails.

> _Slide 8 — Title: 'Sources'. Body: GovStack Information Mediator 1.1.1, sections 2, 6.2, 7.2, 8.2 and 8.6.2; NIIS X-Road 7.7.0, Architecture (ARC-G) section 1.2 and Security Server User Guide (UG-SS) sections 6.1.2 and 7; GovStack Payments 3.0, section 5.1.14; OpenAPI Specification 3.0.3. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'What must be in place before the blocks can call each other'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 5.1) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Three numbered text rows: member, registered service, grant. | The core payload. The order matters and is kept on screen. |
| 3 | Two text rows: recommended across the internet; not required between blocks on one platform. | States the choice the specification leaves open. Text-only. |
| 4 | Plain-text table of Progressa's four members today, with a footer line naming MoEYS as not a member. | Progressa's names as the outline gives them. No logos, no emblems. |
| 5 | Four text rows: what this course adds (X1, X2, X3, X7). | The configuration codes may appear in small type at the end of each row. |
| 6 | Demonstration segment (storyboard until recorded). Text-only stand-in of four short lines. | Replaced by the recording of the 5.1 walkthrough when X1, X2, X3 and X7 are built and the federation runs again. Until then, nothing on this slide claims a run. |
| 7 | Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box. | The single message, word for word. |
| 8 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Check that every planned call can happen.** The prompt in the companion material gives you a table of members, services and access grants with the missing ones marked. Before the next video.

### AI usage tip — Check that every planned call can happen

**What the prompt does:** An architect is handed an integration plan that says which services will call which. Before approving it, the architect needs to know which memberships, registered services and grants each call depends on, and which of them are missing today.

**Prompt template (copy-paste into Claude):**

```text
Below is a list of the calls an integration plan expects between building blocks in [country X], one per line as caller → provider → service [paste the list]. Below that is the current list of members and registered services of the data exchange layer, exported from the exchange itself [paste the export], and the current access grants [paste them]. For each planned call, produce one row with: (1) the caller, and whether it is a member; (2) the provider, and whether it is a member; (3) the service, and whether it is registered with an OpenAPI contract; (4) whether the caller holds a grant on that service; (5) what is missing, and who must act: the operator of the exchange, the provider or the caller. Do not assume anything that is not in the pasted lists; write 'not in the list' instead. Output: a table with one row per planned call, then a short list of the actions grouped by who must take them.
```

**Inputs and outputs:** Input: the planned calls, and the lists of members, services and grants exported from the exchange. Output: a table of members, services and access grants with the missing ones marked.

**Safeguard:** The table is only as good as the lists behind it. Paste the exchange's own export of members, services and grants, not a list from memory or from an old design document, and confirm every 'missing' mark with the operator of the exchange before it goes into a plan.

### Metadata

| Field | Value |
| --- | --- |
| Working title | What must be in place before the blocks can call each other |
| YouTube-optimised title | Before government systems can talk: members, registered contracts and access grants |
| Description (60 words) | A registration service cannot reuse identity or a learner register until three things are in place on the data exchange layer: membership, a service registered with its contract, and a grant from the owner. See Progressa's members, what the build adds, and how a refused call proves the rule. For architects. AI prompt for checking an integration plan in the description. |
| Tags | data exchange, Information Mediator, X-Road, GovStack, access rights, OpenAPI, education DPI, Progressa |
| Playlist (YouTube) | KP3 — Module 5: Join the blocks and prove the foundation |
| ToR §4 coverage | §4.1 (a build step of the method, with its check); §4.3 (AI integration — the integration-plan check); §4.4 (demonstration in the education sector); §4.5 (architecture and API specifications) |
| PAERA citations | None. This subtopic rests on the GovStack and X-Road documents in the external-link list. |
| External-link list | GovStack Information Mediator 1.1.1; NIIS X-Road 7.7.0 Architecture (ARC-G) and Security Server User Guide (UG-SS); GovStack Payments 3.0; OpenAPI Specification 3.0.3 |

## 3.2 Subtopic 5.2 — Who puts the steps in order: contracts, and the block that calls them

| Field | Value |
| --- | --- |
| Persona | A (Architect) — DPI solution architect, integration lead or ministry technical lead who joins the blocks on the data exchange layer and proves them |
| Target runtime | ~4 min (≈446 spoken words) |
| PAERA anchor | Information Mediator 1.1.1 §4 (Out-of-scope requirements), §6.2, §6.3 and §8.1; Registration §6.3.2.7 (actions) |

> **Single message —** _The data exchange layer carries each call and enforces who may make it, but the registration service puts the steps in order, so know which block holds the sequence before you approve an integration plan._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Who puts the steps in order'. Subtitle: 'Contracts, and the block that calls them'. Voice-over begins._

A vendor's integration plan says the exchange will run the registration from start to finish. Before you approve it, ask one question: which block holds the order of the steps? The published answer is not the exchange.

> _Slide 2 — Title: 'What the exchange does'. Body, four text rows: 'Carries each call between members.' 'Checks that the caller holds a grant.' 'Signs, time-stamps and logs the message.' 'Goes through the caller's own security server.'_

The data exchange layer does a narrow job, and does it well. It carries each call from the caller to the provider. It checks that the caller may make the call. It keeps a record of the message. The Information Mediator specification lists what it registers: members, services with their contracts, and the lists of who may call them. Each call goes first to the caller's own security server, the exchange's gateway, which forwards it.

> _Slide 3 — Title: 'What the exchange does not do'. Body, two quoted text rows marked 'out of scope': 'Allow the definition of steps for a particular transaction.' 'Map data structures and fields from the identification system to the registration system and vice versa.'_

The same specification is just as clear about what is not its job. Defining the steps of a transaction is out of its scope. So is mapping the fields of the identity system into a registration record. X-Road says the same about itself: its core does not convert protocols or data, and the organisation's own information system does that. A plan that puts the sequence in the exchange puts it where no published specification does.

> _Slide 4 — Title: 'Who holds the sequence'. Body, three text rows: 'The registration service holds the sequence, as configured actions.' 'An action fires on an event: a form loads, a button is clicked, an application is submitted.' 'An action can pull data from an outside register through the exchange, or send data to one.'_

The registration service holds the sequence. The Registration specification lets the analyst configure actions that fire on an event: a form loading, a button click, an application submitted. An action can pull data from an outside register through the exchange, or send data to one. So the steps of learner registration are written in the registration service's own description, and each step calls another block's published contract.

> _Slide 5 — Title: 'Why go through the exchange at all'. Body, two text rows: 'Point-to-point: every link built and kept on its own.' 'Mediated: every call through one exchange, under one set of rules.'_

Why send the calls through the exchange at all, if it does not run the sequence? Because the alternative is a web of direct links between systems. The GovStack Architecture specification names that pattern fragmented point-to-point integration, and says it makes service delivery across agencies unpredictable and expensive to maintain. The Digital Registries specification asks for mediated integration rather than direct point-to-point coupling. One exchange, many calls, one set of rules.

> _Slide 6 — Title: 'Progressa: the registration as one sequence'. Body, a plain-text table of six rows with three columns (step; who calls whom; what the exchange does): '1. Sign in — the learner's browser goes to PNIA's sign-in — not used.' '2. Pre-fill from the released claims — inside the registration service — not used.' '3. Submit and check — inside the registration service — not used.' '4. Registrar approves — inside the registration service — not used.' '5. Write the record — registration service calls PLR's write service — carries, checks the grant, signs and logs.' '6. Confirm the record exists — registration service calls PLR — carries, checks the grant, signs and logs.'_

Here is Progressa's learner registration as one sequence. The learner signs in with the identity authority, PNIA, and approves the release of a name and a date of birth. The registration service fills the form with them. The learner submits, the checks run, and the registrar approves. Then the registration service calls the write service of the learner registry, PLR, through the exchange, and asks whether the record exists. Drawn on one page, the sequence gives the business side and IT one shared language, so a decision means the same thing in both rooms.

> _Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The data exchange layer carries each call and enforces who may make it, but the registration service puts the steps in order, so know which block holds the sequence before you approve an integration plan.'_

The exchange carries the calls and checks who may make them. The registration service holds the order. Ask which block holds it before you approve the plan.

> _Slide 8 — Title: 'Sources'. Body: GovStack Information Mediator 1.1.1, section 4 (out-of-scope requirements) and sections 6.2, 6.3 and 8.1; GovStack Registration, section 6.3.2.7; GovStack Digital Registries 3.0-alpha, section 10.5.5; GovStack Architecture 2.1.0, section 4.3; NIIS X-Road 7.7.0, Architecture (ARC-G) section 1.2; OpenAPI Specification 3.0.3. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Who puts the steps in order'; subtitle 'Contracts, and the block that calls them'. | Standard ITU template. No images. |
| 2 | Four text rows: what the exchange does. | Text-only list. |
| 3 | Two quoted rows from the Information Mediator's out-of-scope list. | Quoted word for word from section 4 of the specification, marked as quotations. |
| 4 | Three text rows: the registration service holds the sequence as actions. | The core payload. |
| 5 | Two contrasting text rows: point-to-point and mediated. | Text boxes side by side are allowed; labels in plain text only. |
| 6 | Plain-text table: Progressa's registration as six steps, with who calls whom and what the exchange does at each. | The drawn version of this sequence is figure F12 of the written guide; the slide stays text-only. |
| 7 | Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box. | The single message, word for word. |
| 8 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Write the sequence of a service as a list of calls.** The prompt in the companion material gives you a numbered list of calls, each with its caller, its contract and its operation. Before the next video.

### AI usage tip — Write the sequence of a service as a list of calls

**What the prompt does:** An architect reviewing an integration plan needs to see, step by step, which block calls which contract and what the exchange does at each call, and to catch any step that rests on an operation no one has published.

**Prompt template (copy-paste into Claude):**

```text
Below are the steps of a public service in [country X] as its owner describes them [paste the steps], and the published contracts of the building blocks it uses, as OpenAPI descriptions or as the lists of operations in each specification [paste them]. Write the service as a numbered list of calls. For each call give: (1) the step it serves; (2) the caller; (3) the provider and its contract; (4) the operation called, quoted exactly as the contract names it; (5) whether the call crosses the data exchange layer, and if it does, what the layer does at that call: carry it, check the caller's grant, sign and log it. Name the block that holds the order of the steps. Mark any step for which no published operation exists as 'NO PUBLISHED OPERATION' and do not invent one. Output: a numbered list of calls, then a list of the steps marked as having no published operation.
```

**Inputs and outputs:** Input: the steps of the service and the contracts of the blocks it uses. Output: a numbered list of calls, each with its caller, its contract and its operation, with the steps that have no published operation marked.

**Safeguard:** A model asked for a complete sequence will fill a gap with an operation that sounds right and that no one publishes. Check every operation in the list against the contract it names, and treat a step marked 'NO PUBLISHED OPERATION' as a question for the provider, not as a design decision.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Who puts the steps in order: contracts, and the block that calls them |
| YouTube-optimised title | The data exchange layer does not run your service: who holds the sequence of calls |
| Description (60 words) | The data exchange layer carries each call and checks who may make it, but it does not decide the order of the steps. The registration service does, through its configured actions. See Progressa's learner registration drawn as one sequence, and why calls still go through one exchange. For architects. AI prompt for writing a service as a list of calls in the description. |
| Tags | Information Mediator, X-Road, GovStack Registration, service sequence, integration plan, point-to-point, education DPI, Progressa |
| Playlist (YouTube) | KP3 — Module 5: Join the blocks and prove the foundation |
| ToR §4 coverage | §4.1 (a build step of the method); §4.2 (international standards: GovStack, X-Road, OpenAPI); §4.3 (AI integration — the sequence prompt); §4.4 (demonstration in the education sector); §4.5 (architecture and API specifications) |
| PAERA citations | None. This subtopic rests on the GovStack and X-Road documents in the external-link list. |
| External-link list | GovStack Information Mediator 1.1.1; GovStack Registration; GovStack Digital Registries 3.0-alpha; GovStack Architecture 2.1.0, section 4.3; NIIS X-Road 7.7.0 Architecture (ARC-G); OpenAPI Specification 3.0.3 |

## 3.3 Subtopic 5.3 — The once-only registration, from beginning to end

| Field | Value |
| --- | --- |
| Persona | A (Architect) — DPI solution architect, integration lead or ministry technical lead who joins the blocks on the data exchange layer and proves them |
| Target runtime | ~4 min (≈465 spoken words) |
| PAERA anchor | PAERA v1.0 §5.2, Principle #5 (Once-Only); Registration §6.3.2 and §6.3.2.7; Identity §9.1.1 |

> **Single message —** _A learner signs in, the form fills with the facts the learner agrees to release, the registrar approves and the record is in the register: one run that proves four blocks work as one foundation._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The once-only registration, from beginning to end'. Voice-over begins._

A parent should not carry the same birth details to a school, a district office and a ministry. Once-only means the state asks once and reuses what it already holds. One registration run shows whether your foundation can do it.

> _Slide 2 — Title: 'Once-only, as PAERA states it'. Body, one quoted line: 'Citizens and businesses should only have to provide information to the government once.' Below it, four text boxes in a row: 'Identity' 'Registration' 'Learner register' 'Data exchange layer'._

PAERA states the principle plainly: citizens and businesses should only have to provide information to the government once. In education, that means a learner's name and date of birth, which the identity authority already holds, are not typed again on every form. Four blocks have to work together for that: identity, registration, the learner register, and the data exchange layer between them.

> _Slide 3 — Title: 'Step 1 — sign in and approve'. Body, four text rows: 'The learner signs in on PNIA's own sign-in page.' 'PNIA asks which facts it may share with this service.' 'The learner approves: name and date of birth.' 'The service receives only what was approved, and an identifier made for this service.'_

The run starts with a sign-in. The registration service sends the learner to the identity authority's own sign-in page. The learner, with a parent beside them, signs in, and PNIA asks which facts it may share with this service. The learner approves a name and a date of birth. The service receives only those, with the identifier PNIA gives to this one service. It keeps that identifier, never the national number.

> _Slide 4 — Title: 'Step 2 — the form fills itself'. Body, two columns of text: 'Filled from PNIA: name; date of birth.' 'Typed by the parent: school; grade; a contact number.' Footer line: 'Nothing is typed twice.'_

Next, the form fills. The Registration specification lets a screen pull data from an outside source through a configured action. Here, the action places the released name and date of birth into the form. The parent types only what PNIA does not hold: the school, the grade and a contact number. Mapping identity facts into a registration record is the registration service's work; the exchange specification places it outside the exchange.

> _Slide 5 — Title: 'Step 3 — submit, decide, write'. Body, five text rows: 'The learner submits once.' 'The automated checks run.' 'The registrar, a person, approves.' 'The service writes the record to the learner register, through the exchange.' 'The register confirms that the record exists.'_

The learner submits once. The automated checks run, and the application reaches the registrar, a person who decides. On approval, an automated role in the registration service calls the learner register's write service through the exchange. That call is synchronous, signed, time-stamped and logged. Last, the service asks the register whether the record exists, and the register confirms it. Four blocks, one run.

> _Slide 6 — Title: 'What the published Identity block does not offer'. Body, three text rows: 'A query of a person's facts from server to server: required, but no interface is published.' 'PNIA's present service on Linkup: a read by national number, a contract of Progressa's own.' 'A build that uses it names it as such.'_

One limit must be said plainly. The Identity specification requires the block to answer a query for a person's facts from server to server, but it publishes no interface for that query. What it publishes is the sign-in with the person present. PNIA's present service on Linkup, a read of a person by national number, is a contract of Progressa's own. If a build shows a pre-fill from server to server, it shows that contract under its own name.

> _Slide 7 — Title: 'The run, step by step'. Demonstration segment, storyboard until recorded (section 4.9): the principal walkthrough of KP3, from the sign-in to the register's confirmation. Text-only stand-in until the recording exists: the nine steps of the storyboard, one line each, under the footer 'Walkthrough: what a good run shows.'._

This run is the principal demonstration of the course. The walkthrough follows it step by step: what the viewer sees at each step, and what counts as a pass. Nine steps lead from the sign-in on PNIA's own page to the register's answer that the record exists. A pass counts only from a run that took place, with its date.

> _Slide 8 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A learner signs in, the form fills with the facts the learner agrees to release, the registrar approves and the record is in the register: one run that proves four blocks work as one foundation.'_

Sign in, approve, fill, submit, decide, write. One run, nothing typed twice, and four blocks working as one foundation.

> _Slide 9 — Title: 'Sources'. Body: PAERA v1.0, section 5.2, Principle #5 (Once-Only); GovStack Registration, sections 6.3.2 and 6.3.2.7; GovStack Identity 2.0, sections 9.1.1 and 7.2.1, and requirement 6.3-r1; GovStack Information Mediator 1.1.1, section 4 (out-of-scope requirements) and section 9.1; GovStack Digital Registries 3.0-alpha, section 8.2. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The once-only registration, from beginning to end'. | Standard ITU template. No images. |
| 2 | One quoted line from PAERA's Principle #5, and four plain text boxes naming the blocks. | The quotation is word for word from PAERA v1.0, section 5.2. |
| 3 | Four text rows: the sign-in and the approval of claims. | No screenshot of any real sign-in page; text only. |
| 4 | Two columns of text: what PNIA filled and what the parent typed, with a footer line. | The worked example of the outline: which facts came from the identity block and which the parent typed. |
| 5 | Five text rows: submit, checks, the registrar's decision, the write, the confirmation. | The drawn sequence is figure F12 of the written guide. |
| 6 | Three text rows: the query the Identity specification requires but does not publish, and PNIA's Progressa contract. | Keeps the published interface and Progressa's own contract apart, by name. |
| 7 | Demonstration segment (storyboard until recorded). Text-only stand-in: the nine storyboard steps, one line each, and the footer 'Walkthrough: what a good run shows.' | Replaced by the recording of the 5.3 walkthrough when X4 and everything it uses is built and the federation runs again. If only a part is built, the recording runs as far as that part and the stand-in continues. |
| 8 | Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box. | The single message, word for word. |
| 9 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Write the acceptance script for the once-only run.** The prompt in the companion material gives you a numbered acceptance script for the run, each step with its pass condition. Before the next video.

### AI usage tip — Write the acceptance script for the once-only run

**What the prompt does:** Before anyone records the run, the team needs a script that says, step by step, what is done, what is observed and what counts as a pass, so that the recording proves something and a failed step is caught.

**Prompt template (copy-paste into Claude):**

```text
Below is the configuration of a registration service in [country X] that pre-fills a form from the identity block and writes to a register [paste the service description, the identity client registration and the contract of the register's write service]. Write the acceptance script for one run, from the sign-in to the register's confirmation. For each step give: (1) the step number and its name; (2) who acts: the test person, the registrar or the service; (3) what is done; (4) what is observed, on screen or in a response; (5) what counts as a pass, stated so that anyone can judge it. Include these checks: only the approved claims arrive; the identifier stored is the one the identity block gives this service, not the national number; no field is typed twice; the register confirms that the record exists. Use only the enrolled test person and the test register named in the configuration. Output: a numbered table of steps with the five columns, and a final line for the date and result of the run, left blank.
```

**Inputs and outputs:** Input: the service description, the identity client registration and the register's contract. Output: a numbered acceptance script for the run, each step with its pass condition.

**Safeguard:** A script is not a result. Run it with the enrolled test person against a test register, never with a real learner, and record a pass only from a run that took place, with its date; leave the result line blank until then.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The once-only registration, from beginning to end |
| YouTube-optimised title | Register a learner once: sign in, pre-fill, approve and write, across four building blocks |
| Description (60 words) | A learner signs in with the identity authority, approves the release of a name and date of birth, and the form fills itself. The registrar approves, and the record is written to the learner register through the data exchange layer. One run shows four blocks working as one foundation. For architects. AI prompt for writing the run's acceptance script in the description. |
| Tags | once-only, learner registration, OpenID Connect, GovStack Identity, GovStack Registration, Digital Registries, data exchange, Progressa |
| Playlist (YouTube) | KP3 — Module 5: Join the blocks and prove the foundation |
| ToR §4 coverage | §4.1 (a build step of the method, with its check); §4.3 (AI integration — the acceptance script); §4.4 (the principal demonstration in the education sector); §6 (demonstration materials and templates) |
| PAERA citations | §5.2 Principles — Principle #5 (Once-Only) |
| External-link list | PAERA v1.0, section 5.2; GovStack Registration; GovStack Identity 2.0; GovStack Information Mediator 1.1.1; GovStack Digital Registries 3.0-alpha |

## 3.4 Subtopic 5.4 — The acceptance checks: from "set up" to "proven"

| Field | Value |
| --- | --- |
| Persona | A (Architect) — DPI solution architect, integration lead or ministry technical lead who joins the blocks on the data exchange layer and proves them |
| Target runtime | ~4 min (≈395 spoken words) |
| PAERA anchor | GovStack testing (self-assessment and automated interface tests); GovStack Architecture 2.1.0, section 6.4; the published interfaces of the Information Mediator, Identity and Digital Registries specifications |

> **Single message —** _Every configuration has a check that someone can run and read, and a block is called proven only when its checks have run and passed._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The acceptance checks: from "set up" to "proven"'. Voice-over begins._

A vendor tells your steering committee the platform is GovStack compliant at Level 2. That describes the product, not how your country set it up. What you can ask for is simpler and stronger: a check for every configuration, run and passed, with its date.

> _Slide 2 — Title: 'What GovStack itself offers'. Body, three text rows: 'A self-assessment of compliance against the requirements.' 'Automated tests of the published interfaces.' 'A compliance level for the product: Level 1 or Level 2.'_

GovStack's own testing offers two things. A software provider can assess its product against the functional requirements: a self-assessment. And there are automated tests of the published interfaces, run against candidate software. The two tests lead to a compliance level for the product: Level 1, partial, or Level 2, full. The GovStack Architecture specification also asks each block for a machine-readable definition of every external interface, and for a mock implementation, so that others can test against it.

> _Slide 3 — Title: 'One check for each configuration'. Body, three text rows: 'What is run, against which published interface.' 'What counts as a pass.' 'The result, and the date of the last run.'_

This course follows the same idea, configuration by configuration. Every configuration has one check with the same name. The check says what is run, against which published interface, and what counts as a pass. For the exchange, check X1 lists the members and finds the registration service. Check X3 makes a call with a grant, which is answered, and the same call without one, which is refused. Check X4 is the whole run, from the sign-in to the register.

> _Slide 4 — Title: 'Set up is not proven'. Body, three text rows: 'Set up: the configuration exists.' 'Proven: every check has run and passed, with a date.' 'Until then: set up, not yet proven.'_

Keep two words apart. A configuration that exists is set up. A block is proven only when every one of its checks has run and passed, and the result is written down with its date. Until then, the configuration is set up, and no more than that.

> _Slide 5 — Title: 'Progressa's sheet of checks'. Body, a plain-text table with four columns (configuration; what is run; what counts as a pass; last run) and seven rows, X1 to X7. The last column reads 'not yet run' in every row._

Here is Progressa's sheet of checks for the exchange. Each row names a configuration, what is run, what counts as a pass, and the result and date of the last run. Before the first run, the last column reads 'not yet run' in every row. That is not a weakness to hide. It is the honest state, and it tells the minister exactly what lies between a design and a proof.

> _Slide 6 — Title: 'Running the checks'. Demonstration segment, storyboard until recorded (section 4.10): the checks run one after another, and the sheet filled with their results. Text-only stand-in until the recording exists: the sheet of slide 5, unchanged._

When the build is ready, the checks are run one after another, and the sheet fills with results and dates. A failed check stays on the sheet with its output until it passes, and nobody edits a result by hand. That is what a good run shows, and nothing less.

> _Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Every configuration has a check that someone can run and read, and a block is called proven only when its checks have run and passed.'_

Ask for the sheet, not only the product's compliance level. A block is proven when its checks have run and passed, each with a date.

> _Slide 8 — Title: 'Sources'. Body: GovStack testing, 'Self-Assessment of Compliance' and API compliance testing; GovStack website, 'How is Compliance Measured?'; GovStack Architecture 2.1.0, section 6.4 (quality requirements 4 and 7); GovStack Information Mediator 1.1.1, sections 8.2.1 and 8.6.2; GovStack Identity 2.0, section 9.1.1; GovStack Digital Registries 3.0-alpha, section 8.2. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The acceptance checks: from "set up" to "proven"'. | Standard ITU template. No images. |
| 2 | Three text rows: self-assessment, automated interface tests, a compliance level of 1 or 2 for the product. | States GovStack's testing and its two levels of compliance as its own pages describe them. All three concern the product; none checks a country's own configuration. |
| 3 | Three text rows: what a check states. | The core payload. |
| 4 | Three text rows: set up, proven, specimen. | The two words are set in bold; the rest plain. |
| 5 | Plain-text table: Progressa's sheet of checks, X1 to X7, last column 'not yet run'. | The worked example of the outline. The same sheet is in the specimens folder, KP3-DPI/specimens/composition/acceptance-sheet.md. |
| 6 | Demonstration segment (storyboard until recorded). Text-only stand-in: the sheet of slide 5. | Replaced by the recording of the 5.4 walkthrough when the configurations are built. Nothing on this slide claims a run. |
| 7 | Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box. | The single message, word for word. |
| 8 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Turn a failed check into a note for the owner.** The prompt in the companion material gives you a plain-language note for the owner: what was run, what was expected and what came back. Before the next video.

### AI usage tip — Turn a failed check into a note for the owner

**What the prompt does:** When an acceptance check fails, its output is technical, and the owner of the block needs to know what failed and what to ask. A plain-language note, with the output quoted, gets the right person acting.

**Prompt template (copy-paste into Claude):**

```text
Below is the output of an acceptance check that failed in [country X]'s build of [the block] [paste the full output], and the check's definition: what is run and what counts as a pass [paste it]. Write a note for the owner of the block in four parts: (1) what was run, in one sentence; (2) what was expected, quoted from the check's definition; (3) what came back, quoting the relevant lines of the output exactly; (4) the most likely cause, marked as a hypothesis, and the one question to put to the team that configured it. Do not shorten or paraphrase the quoted output. Output: a note of four short parts, under 200 words, with the output quoted where it matters.
```

**Inputs and outputs:** Input: the failed check's output and its definition. Output: a plain-language note for the owner: what was run, what was expected and what came back.

**Safeguard:** A summary can hide the one line that matters. The note quotes the output and does not summarise it away, and the cause it suggests is a hypothesis for the team to confirm, never a finding to act on unchecked.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The acceptance checks: from "set up" to "proven" |
| YouTube-optimised title | GovStack compliance is about the product: how to prove a building block with acceptance checks |
| Description (60 words) | GovStack's self-assessment and automated interface tests measure a product's compliance, at Level 1 or 2, not your own configuration. What proves a block is a check for every configuration: what is run, what counts as a pass, and the result with its date. See Progressa's sheet of checks, honestly marked 'not yet run'. For architects and steering committees. AI prompt for turning a failed check into a plain note in the description. |
| Tags | acceptance test, GovStack compliance, building block, OpenAPI, mock implementation, data exchange, education DPI, Progressa |
| Playlist (YouTube) | KP3 — Module 5: Join the blocks and prove the foundation |
| ToR §4 coverage | §4.1 (validation of each build step); §4.3 (AI integration — the failed-check note); §4.4 (demonstration in the education sector); §6 (demonstration materials and templates: the sheet of checks) |
| PAERA citations | None. This subtopic rests on the GovStack documents in the external-link list. |
| External-link list | GovStack testing (requirements and API testing); GovStack, 'How is Compliance Measured?'; GovStack Architecture 2.1.0, section 6.4; GovStack Information Mediator 1.1.1; GovStack Identity 2.0; GovStack Digital Registries 3.0-alpha |

## 3.5 Subtopic 5.5 — Reading the evidence of a call

| Field | Value |
| --- | --- |
| Persona | A (Architect) — DPI solution architect, integration lead or ministry technical lead who joins the blocks on the data exchange layer and proves them |
| Target runtime | ~4 min (≈392 spoken words) |
| PAERA anchor | X-Road 7.7.0 UG-SS sections 11, 14.2 and 15, and PR-OPMON section 2; Information Mediator 1.1.1 §6.5 (Logging Services) and §6.6 |

> **Single message —** _Three records can show that a call took place, the message log, operational monitoring and the traffic view, but each only under settings you must choose before the first call._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Reading the evidence of a call'. Voice-over begins._

An auditor asks you to prove that the registration service wrote a learner's record on a given day. Whether you can answer depends on choices made before the first call, not on what you do once the question arrives.

> _Slide 2 — Title: 'Record 1 — the message log'. Body, three text rows: 'Full logging: the message and its details are kept; usable as evidence.' 'Details only: cannot be used as evidence.' 'Off: no record at all.'_

The first record is the message log on each security server. X-Road offers three settings. With full logging, the whole message is kept, and the records can be verified afterwards and used as evidence. With metadata logging, only the details around the message are kept, and the records cannot be used as evidence. Or logging is switched off. The Information Mediator specification requires a signed, time-stamped message log.

> _Slide 3 — Title: 'Record 2 — operational monitoring'. Body, four text rows: 'One record for each request.' 'Who called, which service, when, how large, the result.' 'Never the content of the message.' 'A regular member sees only its own records.'_

The second record is operational monitoring. One record is made for each request: who called, which service, when, how large, and whether it succeeded. It never holds the content of the message. Who may read it matters. The owner of the security server and the central monitoring client can read the records of all clients. A regular member reads only the records about itself, through a monitoring service of its own.

> _Slide 4 — Title: 'Record 3 — the traffic view'. Body, three text rows: 'A graph of the requests through one security server.' 'Filter by period, party, role and status.' 'Needs the operational monitoring add-on.'_

The third record is the traffic view on the security server's diagnostics page. It draws a graph of the requests that passed through, and you can filter it by period, by party, by role in the exchange, and by success or failure. It depends on the operational monitoring add-on. If that add-on is not installed, there is no traffic view to read.

> _Slide 5 — Title: 'Progressa: one run, three readers'. Body, a plain-text table of three rows: 'The owner of the learner register — its own message log; the monitoring records of calls to its service.' 'The registration service — its own message log; the monitoring records of its own calls.' 'PDGA, the operator — the traffic view, and the records its role allows.' Demonstration segment, storyboard until recorded (section 4.11): the three records of the run of 5.3, as each party sees them._

Take Progressa's registration run. The owner of the learner register sees, in its own message log, the request to write the record and its own answer. The registration service sees the same exchange from its side. PDGA, as operator, reads the traffic view and the records its role allows. No member sees another member's records by default. Each reader proves only what its own records show.

> _Slide 6 — Title: 'Choose before the first call'. Body, three text rows: 'Full message logging on every security server that takes part.' 'Access to monitoring for whoever must read the evidence.' 'The monitoring add-on, so that the traffic view exists.'_

So three settings are chosen before the first call. Full message logging on every security server that takes part. Access to monitoring for whoever must read the evidence, such as an auditor or the operator. And the monitoring add-on, so that the traffic view exists. Choose them late, and the first months of calls leave no evidence anyone can use.

> _Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Three records can show that a call took place, the message log, operational monitoring and the traffic view, but each only under settings you must choose before the first call.'_

Three records can prove a call: the message log, monitoring and the traffic view. Each works only if you set it up before the first call.

> _Slide 8 — Title: 'Sources'. Body: NIIS X-Road 7.7.0, Security Server User Guide (UG-SS) sections 11, 14.2 and 15, and Operational Monitoring Protocol (PR-OPMON) section 2; GovStack Information Mediator 1.1.1, sections 6.5 (logging services) and 6.6. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Reading the evidence of a call'. | Standard ITU template. No images. |
| 2 | Three text rows: the three settings of the message log. | The words 'usable as evidence' and 'cannot be used as evidence' follow the X-Road guide. |
| 3 | Four text rows: what an operational monitoring record holds, and who may read it. | Text-only. |
| 4 | Three text rows: the traffic view. | Text-only. No screenshot of the diagnostics page until the recording exists. |
| 5 | Plain-text table: the three readers of Progressa's run and the records each sees. Demonstration segment (storyboard until recorded). | Replaced by the recording of the 5.5 walkthrough when X6 is built and the federation runs again. Nothing on this slide claims a run. |
| 6 | Three text rows: the three settings chosen before the first call. | The core payload. |
| 7 | Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box. | The single message, word for word. |
| 8 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Report the calls of a period from the monitoring records.** The prompt in the companion material gives you a report of the calls by caller, service and result, with the failures listed. Before the next video.

### AI usage tip — Report the calls of a period from the monitoring records

**What the prompt does:** An operator or an auditor needs a short account of who called which service in a period and which calls failed, taken from the monitoring records rather than from anyone's memory of events.

**Prompt template (copy-paste into Claude):**

```text
Below are the operational monitoring records exported from the security server of [the member] in [country X] for the period [dates] [paste the export]. Report: (1) a table of the calls by caller and service, with the number of successful and failed calls; (2) a list of every failed call, with its time, caller, service and the error the record shows; (3) any caller or service that appears for the first time in the period. Use only the fields present in the records. The records hold no message content, so do not say what was sent. Output: one table, one list of failures, and one list of first appearances.
```

**Inputs and outputs:** Input: the monitoring records exported for a period. Output: a report of the calls by caller, service and result, with the failures listed.

**Safeguard:** Monitoring records carry no message content, so the prompt is not asked what was sent and must not guess it. A regular member's export holds only its own records, so a report made from it says nothing about other members' calls.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Reading the evidence of a call |
| YouTube-optimised title | Can you prove the call happened? Message log, monitoring and traffic view on X-Road |
| Description (60 words) | Three records can show that a call between government systems took place: the message log, operational monitoring and the traffic view. Each works only under settings chosen before the first call, and each reader sees only what its role allows. See Progressa's registration run through three readers' eyes. For architects and auditors. AI prompt for a monitoring report in the description. |
| Tags | X-Road, message log, operational monitoring, audit evidence, Information Mediator, security server, education DPI, Progressa |
| Playlist (YouTube) | KP3 — Module 5: Join the blocks and prove the foundation |
| ToR §4 coverage | §4.1 (validation of a build step); §4.3 (AI integration — the monitoring report); §4.4 (demonstration in the education sector) |
| PAERA citations | None. This subtopic rests on the X-Road and GovStack documents in the external-link list. |
| External-link list | NIIS X-Road 7.7.0 Security Server User Guide (UG-SS); NIIS X-Road 7.7.0 Operational Monitoring Protocol (PR-OPMON); GovStack Information Mediator 1.1.1 |

## 3.6 Subtopic 5.6 — What the next services can now use

| Field | Value |
| --- | --- |
| Persona | A (Architect) — DPI solution architect, integration lead or ministry technical lead who joins the blocks on the data exchange layer and proves them |
| Target runtime | ~4 min (≈370 spoken words) |
| PAERA anchor | Information Mediator 1.1.1 §6.2 (registered, callable services); Payments §9.1 and §9.2; Consent §9.2 and §9.4; Messaging §4.1 |

> **Single message —** _Identity, the learner register and payments are now services with published contracts that the next education services can use without building them again, with consent and notification still to add._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'What the next services can now use'. Voice-over begins._

Another team in the ministry wants to pay scholarships. Its first plan is to build its own learner list and its own payment link. Your job is to show the team what it can use instead, and on what terms.

> _Slide 2 — Title: 'On the exchange, with published contracts'. Body, three text rows: 'Identity: PNIA's sign-in, for a service registered as its client.' 'The learner register: its services, on the owner's grant.' 'Payments: the Payments block's own interface.'_

Once the checks of the foundation have passed, three things are services with published contracts. Identity, through PNIA's sign-in, for any service registered as its client. The learner register, whose services other services may call once the owner grants access. And payments, through the Payments block's own interface on the exchange. A new service asks for access, the owner of each service decides, and the call goes through the exchange.

> _Slide 3 — Title: 'A scholarship, block by block'. Body, three text rows: 'Confirm the learner: call the learner register.' 'Pay: the Payments block's path for bulk payments from government to people.' 'Or: vouchers that only schools can redeem.'_

Take a scholarship service. It confirms the learner by calling the learner register. It pays through the Payments block, on the path the Payments specification describes for bulk payments from government to people. Or it issues vouchers, which the same specification describes, and which can be limited so that only schools redeem them. It builds no learner list and no payment link of its own.

> _Slide 4 — Title: 'Who sees the saving'. Body, two text rows: 'Inside one project: building your own looks quicker.' 'Across the government: the second service costs less than the first.'_

Inside one project, building your own list looks quicker than asking another ministry for access. Procurement rules can make each contract cheaper, but only whole-of-government planning makes re-use possible. The first service paid for the foundation, and every service after it uses it. Ask the next team to put both options side by side before it commits.

> _Slide 5 — Title: 'Still to add: consent and notification'. Body, three text rows: 'Consent: recorded at first registration, checked before data is used.' 'Consent may be the wrong legal ground for a public authority.' 'Notification: telling a person that their registration is done.'_

Two blocks are cited here but not built. The Consent specification records consent when a person first registers and checks it before data is processed. It also warns that consent may be the wrong legal ground where a public authority processes data, so ask your lawyers first. The Messaging specification names informing people about their registration among its first uses, and the Registration block as one source of such a message.

> _Slide 6 — Title: 'One page for the next team'. Body, four column headings in plain text: 'Service' 'Contract' 'Conditions of access' 'Owner'._

Give the next team one page. For each service, it lists the contract, the conditions of access and the owner to ask. Generate that page from the exchange's own list of services and their contracts, not from memory or an old slide, and it stays true as the list changes.

> _Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Identity, the learner register and payments are now services with published contracts that the next education services can use without building them again, with consent and notification still to add.'_

The foundation is now something to use, not to rebuild. Consent and notification are still to come.

> _Slide 8 — Title: 'Sources'. Body: GovStack Information Mediator 1.1.1, section 6.2; GovStack Payments 3.0, sections 9.1 and 9.2; GovStack Consent 1.3.0, section 2 ('What Consent Is') and sections 9.2 and 9.4; GovStack Messaging, sections 4.1 and 6.2.1. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'What the next services can now use'. | Standard ITU template. No images. |
| 2 | Three text rows: identity, the learner register, payments. | Each row names the block and how a new service reaches it. |
| 3 | Three text rows: a scholarship service, block by block. | The worked example of the outline. |
| 4 | Two contrasting text rows: one project against the whole government. | Carries the structural argument that planning enables re-use. |
| 5 | Three text rows: consent and notification, cited and not built. | Consent and Messaging are cited; their configurations, CN1 and MS1, are not part of the build. |
| 6 | Four plain-text column headings: the note 'what you may use'. | Text-only; no table data on screen. |
| 7 | Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box. | The single message, word for word. |
| 8 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

**On-screen practice box (recap slide, not narrated):** **Do this on your own sector. Draft the note 'what you may use' for the next service team.** The prompt in the companion material gives you a one-page note: each service, its contract, the conditions of access and its owner. Before the next video.

### AI usage tip — Draft the note 'what you may use' for the next service team

**What the prompt does:** A new service team needs to know which shared services exist, what each contract offers, how to get access and whom to ask, before it plans to build anything of its own.

**Prompt template (copy-paste into Claude):**

```text
Below is the list of services registered on [country X]'s data exchange layer, exported from the exchange, with the OpenAPI contract of each [paste them], and the description of a new service [paste it]. Draft a note titled 'What you may use' for the team of the new service. For each registered service the new service could use, give: (1) the service and its owner; (2) what its contract offers, naming the operations; (3) the conditions of access: who decides, and what the team must ask for; (4) what the new service would otherwise have to build. Then name any need of the new service that no registered service meets. Output: a one-page note with one table and a short list of unmet needs.
```

**Inputs and outputs:** Input: the exchange's list of services with their contracts, and the description of the new service. Output: a one-page note: each service, its contract, the conditions of access and its owner.

**Safeguard:** The note is generated from the exchange's own list of services and their contracts. A service that someone remembers but the list does not show is left out, and every condition of access is confirmed with the owner of that service before the note is sent.

### Metadata

| Field | Value |
| --- | --- |
| Working title | What the next services can now use |
| YouTube-optimised title | Build once, use many times: what a proven DPI foundation offers the next education service |
| Description (60 words) | Once the foundation is proven, identity, the learner register and payments are services with published contracts. A scholarship service can confirm the learner and pay through them instead of building its own. Consent and notification are still to add. Only whole-of-government planning sees that saving. For architects. AI prompt for the note 'what you may use' in the description. |
| Tags | reuse, DPI, GovStack Payments, Consent, Messaging, scholarship, data exchange, education DPI, Progressa |
| Playlist (YouTube) | KP3 — Module 5: Join the blocks and prove the foundation |
| ToR §4 coverage | §4.2 (international standards: GovStack Payments, Consent and Messaging); §4.3 (AI integration — the note 'what you may use'); §4.4 (demonstration in the education sector) |
| PAERA citations | None. This subtopic rests on the GovStack documents in the external-link list. |
| External-link list | GovStack Information Mediator 1.1.1; GovStack Payments 3.0; GovStack Consent 1.3.0; GovStack Messaging |

## 4. Production notes

### 4.1 Design standard — the split-screen usability test

The bar for every video in Module 5 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to follow along and act on the other half. For Module 5, 'act' means produce the matching working artefact: a table of members, services and grants for an integration plan, a service written as a list of calls, an acceptance script for the once-only run, a plain note on a failed check, a report of calls from monitoring records, or the note 'what you may use' for the next service team. Each subtopic's AI usage tip produces that artefact.

### 4.2 Slide branding

Every slide follows the ITU template of the Knowledge Products and Video Materials Guide, section 3.i: title text Arial Bold 28pt; body text Arial 18pt; background colour #E5F5FB. Text only, with no images. Diagrams and text boxes are used only where strictly necessary, and all their labels are plain text. No country emblems and no agency logos. The single-sentence summary slide that closes each subtopic carries the single message word for word, in 28pt type, with the on-screen practice box.

### 4.3 No individuals on screen

No individuals appear in any video. Two options are open: an AI-avatar narrator generated by ITU's production pipeline, or a voice-over over the screen only. The choice is ITU's; the scripts work with either.

### 4.4 Voice and tone

Direct address ('your plan', 'your steering committee'). Plain language at about an eighth-grade English level, held even though the Architect audience is technical. Technical terms (member, registered service, grant, security server, message log, operational monitoring) are explained in plain words on first use; headlines stay capability-led. The data exchange layer is called by that name, and by Progressa's name for it, Linkup; GovStack's name for the block, the Information Mediator, is used when its specification is cited.

### 4.5 External links and 'Find the link in the description'

Every subtopic has an external-link list in its metadata, and every script refers to external material with the convention 'Find the link in the description' rather than reading addresses aloud. ITU's production pipeline compiles each list into the video's description. The aggregate list, with the addresses, is in section 6.

### 4.6 What runs, and what is said about it

Nothing of the build exists on the date of this bundle, and the data exchange federation does not run. No script, slide or metadata line in this bundle says that a configuration runs or that a check has passed. The configurations X1 to X7 are shown as specimens in KP3-DPI/specimens/composition/, each marked 'specimen, not yet run'. The four demonstration segments are storyboards, given below. When a check passes on the built configuration, its specimen is replaced by the file as built, its segment is recorded from the run, and the script of that subtopic gains one sentence that states the result and its date. If only part of the build exists, the run of 5.3 is recorded as far as that part reaches, and the script says where the recording stops and the storyboard continues.

### 4.7 The storyboards of the four demonstration segments, in sections 4.8 to 4.11

Each storyboard lists the steps the recording will show, in order, with what the viewer sees and what counts as a pass. It is written from the published specifications, the X-Road documents and the acceptance checks of the specification analysis, and it rests on the specimens. Every step below is still to be run; none has been.

### 4.8 Storyboard for 5.1 — the members and services, and a call refused for want of a grant (X1, X2, X3, X7)

| Step | What is done | What the viewer sees | What counts as a pass |
| --- | --- | --- | --- |
| 1 | List the members of the instance from the registration service's security server (the Information Mediator's member discovery, listClients). | The members PDGA, PNEA, PLR and PNIA, and the member and application of the registration service. | The registration service's member and application are listed (check X1). |
| 2 | List the services of the learner registry and fetch the contract of its write service (listMethods and getOpenApi). | PLR's enrolment service and its write service; the write service's OpenAPI contract with its create-or-update operation. | The write operation is listed and its contract is returned (check X2). |
| 3 | List the services of the Payments block's member (listMethods). | The operations the Payments block publishes. | Only the block's own operations are listed; no operation of a payment provider appears as the block's (check X7). |
| 4 | The registration service calls the learner register's write service with a test record. | A successful response. | The call holding a grant is answered (check X3). |
| 5 | A member without a grant makes the same call. | The fault Server.ServerProxy.AccessDenied. | The call without a grant is refused (check X3). |

### 4.9 Storyboard for 5.3 — the once-only registration, from beginning to end (X4, with R8, I1 and the register of module 3)

| Step | What is done | What the viewer sees | What counts as a pass |
| --- | --- | --- | --- |
| 1 | Open the learner registration service and choose to sign in with the national identity. | The browser goes to PNIA's own sign-in page. | The sign-in page is PNIA's, not the service's. |
| 2 | Sign in as the enrolled test person. | The sign-in succeeds. | The test person, never a real person, is signed in. |
| 3 | PNIA asks which facts it may share; approve the name and the date of birth only. | The permission page listing the facts requested. | Only the facts the service needs are requested, and only the approved ones are released. |
| 4 | Return to the registration form. | Name and date of birth filled in, each marked as coming from PNIA. | Exactly the approved facts are filled; the identifier the service stores is the one PNIA gives this service, not the national number. |
| 5 | Type the school, the grade and a contact number. | The remaining fields filled by hand. | No field filled from PNIA is typed again. |
| 6 | Submit the application. | The automated checks run and the application reaches the registrar's list. | The application is submitted once and passes the automated checks. |
| 7 | The registrar opens the application and approves it. | The approval recorded with the registrar's name and time. | A person, not the system, makes the decision. |
| 8 | On approval, the automated role calls the learner register's write service through the exchange. | A successful response from the register. | The write is made through the caller's own security server and answered. |
| 9 | Ask the register whether the record exists. | The answer true. | The register confirms the record (check X4). |

### 4.10 Storyboard for 5.4 — the acceptance checks run, and the sheet of their results

| Step | What is done | What the viewer sees | What counts as a pass |
| --- | --- | --- | --- |
| 1 | Open the sheet of checks before any run. | Rows X1 to X7, each with 'not yet run'. | Every configuration has a row with what is run and what counts as a pass. |
| 2 | Run checks X1, X2 and X7. | The outputs of the member and service listings. | Each output meets the row's pass condition; the result and date are written in the row. |
| 3 | Run check X3. | One call answered, the same call refused. | Both halves as stated; result and date written. |
| 4 | Run check X4: the run of the 5.3 storyboard. | The steps of 5.3. | All nine steps pass; result and date written. |
| 5 | Run checks X5 and X6 on the records of X4. | The message log records on the security servers that took part, each request on the caller's own server. | A signed, time-stamped record of each request and response, with full logging; result and date written. |
| 6 | Open the sheet after the run. | Every row with a result and a date; any failed row with its output. | Every result comes from a run that took place; a failed row stays failed until a later run passes. |

### 4.11 Storyboard for 5.5 — the three records of the run of 5.3 (X6)

| Step | What is done | What the viewer sees | What counts as a pass |
| --- | --- | --- | --- |
| 1 | Show the message log setting on each security server that took part. | Full logging set. | Full logging, not metadata only, on every server that took part. |
| 2 | Find the record of the write call in the registration service's message log. | A signed, time-stamped record of the request and the response. | The record matches the time of the run. |
| 3 | Find the same call in the learner register's message log. | The provider's record of the same exchange. | The record matches the time of the run. |
| 4 | Read operational monitoring as the registration service, a regular client. | Only the records of the registration service's own calls. | No other member's records are shown. |
| 5 | Read operational monitoring as the owner of the security server. | The records of all clients of that server. | The run's calls appear, with no message content. |
| 6 | Open the traffic view on the diagnostics page, filtered to the period of the run. | A graph of the requests of the run. | The run's requests are counted, with their status. |

## 5. Open calibration items

The drafting raised the items below. They are forwarded for discussion with ITU at the Tuesday weekly call.

### 5.1 Where the demonstrations run

The data exchange federation of KP2 was never set up on ITU's cloud and does not run anywhere on the date of this bundle. The four demonstration segments of Module 5 need it running again, with the configurations X1 to X7 and everything modules 2 to 4 build. Where the demonstrations are to run is a question put to ITU; the storyboards hold under any answer.

### 5.2 The identity connection shown in 5.3

The published Identity specification offers the sign-in with the person present, through OpenID Connect; it requires but does not publish a query of a person's facts from server to server. PNIA's present service on Linkup is a read of a person by national number, a contract of Progressa's own. If the build offers only that contract, the run of 5.3 shows it under its own name, and the grant in X3 on PNIA's service is added only for that purpose. The choice is the build's and is stated in its configuration file.

### 5.3 Editorial tone calls

Lines that deserve a deliberate keep, soften or cut decision: 'Being on the exchange is not permission' (5.1); 'Choose them late, and the first months of calls leave no evidence anyone can use' (5.5).

### 5.4 Signposts

The project's standing rules ask for African signposts and one international polestar. The accepted research read no public source on an African country for the matters of this module, so no country signpost is used; the worked examples are Progressa's throughout.

## 6. Annex — aggregate external-link list

Compiled across the six subtopics for ITU's video production pipeline, to be split per subtopic into the video descriptions. Every source is public and is one the KP3 outline version 0.3 names for the subtopic.

| Subtopic | Sources referenced, with addresses |
| --- | --- |
| 5.1 | GovStack Information Mediator 1.1.1 (https://specs.govstack.global/information-mediator); NIIS X-Road 7.7.0, Architecture ARC-G and Security Server User Guide UG-SS (https://github.com/nordic-institute/X-Road/tree/7.7.0/doc); GovStack Payments 3.0 (https://specs.govstack.global/payments); OpenAPI Specification 3.0.3 (https://spec.openapis.org/oas/v3.0.3.html). |
| 5.2 | GovStack Information Mediator 1.1.1; GovStack Registration (https://specs.govstack.global/registration); GovStack Digital Registries 3.0-alpha (https://specs.govstack.global/registries); GovStack Architecture 2.1.0 (https://specs.govstack.global/architecture/); NIIS X-Road 7.7.0, ARC-G; OpenAPI Specification 3.0.3. |
| 5.3 | PAERA v1.0 (https://paera.govstack.global/); GovStack Registration; GovStack Identity 2.0 (https://specs.govstack.global/identity); GovStack Information Mediator 1.1.1; GovStack Digital Registries 3.0-alpha. |
| 5.4 | GovStack testing (https://testing.govstack.global/en/requirements); GovStack, 'How is Compliance Measured?' (https://govstack.global/software/how-is-compliance-measured/); GovStack Architecture 2.1.0; GovStack Information Mediator 1.1.1; GovStack Identity 2.0; GovStack Digital Registries 3.0-alpha. |
| 5.5 | NIIS X-Road 7.7.0, Security Server User Guide UG-SS and Operational Monitoring Protocol PR-OPMON (https://github.com/nordic-institute/X-Road/tree/7.7.0/doc); GovStack Information Mediator 1.1.1. |
| 5.6 | GovStack Information Mediator 1.1.1; GovStack Payments 3.0; GovStack Consent 1.3.0 (https://consent.govstack.global/); GovStack Messaging (https://specs.govstack.global/messaging). |

All references are publicly accessible and verifiable.

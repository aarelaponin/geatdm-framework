<!-- GENERATED from build_kp3_module2_v01.js by bundle_to_md.py — do not hand-edit; edit the build script and regenerate. -->

# KP3 Module 2 — Video Script Bundle v0.1 (ITU-aligned)

| Field | Value |
| --- | --- |
| Document | Video script bundle for Topic 2 of KP3 |
| Version | v0.1 — aligned to ITU Knowledge Products and Video Materials Guide |
| Date | 28 June 2026 |
| Contract reference | RFQ-S-GIGA-2026-022 / Purchase Order #334304 (signed 24 April 2026) |
| Topic persona | A (Architect) — DPI solution architect or ministry technical lead who configures, generates and stands up the building blocks |
| Subtopics | Six subtopics (2.1 – 2.6), each shipped as one ~5-minute standalone video |
| Topic runtime | Approximately 27 minutes across six standalone videos |
| Build pack | KP3-DPI/KP3-build-pack — Topic 2 stands up the registration block (configs/registration/) |
| Prepared by | FiscalAdmin OÜ — Aare Lapõnin (Engagement Lead) |
| For review by | ITU/Giga at Tuesday weekly call; FiscalAdmin team (Karin Kaup, Arne Lapõnin) |

This bundle is the v0.1 working draft of Topic 2 of KP3 — Education DPI Roadmap. Topic 1 framed the foundation and set the build order; Topic 2 is the first build module, where the work becomes hands-on. It stands up the Registration building block — the front door that captures a learner once, validates the record, and writes it to the registry — built to the published GovStack Registration specification and generated as configuration with Claude. The persona shifts from Strategist to Architect: the listener is the solution architect or technical lead who will configure and stand up the block, not only make the case for it. The register stays plain English, eighth-grade level; the public-sector outcome leads each subtopic. The six videos are numbered to ITU's topic/subtopic convention (2.1 through 2.6), each reworked to stand alone. All slide specifications follow ITU's text-only branding. Each subtopic carries an AI usage tip with a copy-paste Claude prompt that produces a real piece of the block's configuration. External references use the convention 'Find the link in the description'.

## 1. Document context

### 1.1 What this document is

This document collects the six video scripts that make up Topic 2 of Knowledge Product 3 (Education DPI Roadmap), with on-screen slide specifications, per-subtopic metadata, AI usage tips and production notes. It is the v0.1 working draft, aligned to ITU's Knowledge Products and Video Materials Guide, submitted for team review and for discussion with ITU/Giga at the Tuesday weekly call.

Topic 2 is the first build module of KP3, and the first Architect-facing topic. It stands up the Registration building block for the Progressa education sector: what the block does, how the published GovStack specification defines it, how to generate its intake flow and validation as configuration with Claude, and how it writes a clean record to the registry over the interoperability bus.

### 1.2 KP3 is an implementation Knowledge Product

KP3 ships two things. The first is this video bundle, which teaches the build. The second is a runnable build pack — the configuration, prompts, scripts and acceptance checks that stand up a real DPI foundation on the Linkup federation KP2 already runs. Topic 2 is where the configuration starts to appear: the registration form, the validation rules and the intake API are generated here as configuration, and they land in the build pack under configs/registration/, with a generating prompt and an acceptance check. The building block is built to the published GovStack Registration Building Block specification; PAERA anchors the data/registry framing at §3.4.2 (Digital Data) and the reuse principle at §5.2.

### 1.3 How to read this document

Section 2 gives Topic 2 at a glance — the six subtopics with persona, runtime and single message. Section 3 contains the full script for each subtopic, with on-screen slide specification, AI usage tip and metadata. Section 4 collects the production notes that apply across all six videos. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate external-link list for ITU's production pipeline.

Within each script section, three rendering conventions are used: italic shaded blocks denote on-screen visual or production cues; regular paragraphs are the spoken voice-over; the slide specification, AI usage tip and metadata follow the script. A reader should be able to imagine the video from these layers without a separate storyboard.

## 2. Topic 2 at a glance

Six standalone subtopic videos. One Architect persona throughout. Total runtime approximately twenty-seven minutes. Each video has a single message and a single learning outcome, and is discoverable individually via search; the playlist provides navigation but is not required to comprehend any single video.

| # | Title | Single message | Runtime |
| --- | --- | --- | --- |
| 2.1 | What the Registration block does | Registration is the front door: it captures a person once, validates them, and hands a clean record to the registry. Build it once and every service that enrols someone reuses it. | ~5 min |
| 2.2 | Build to the GovStack spec | Build the block to the published GovStack Registration specification, not a bespoke form — so it is portable, partners recognise it, and you are not inventing what registration means. | ~4 min |
| 2.3 | Generate the intake flow | Turn a plain field brief into the registration form and intake API as configuration with Claude — the block stood up in an afternoon, not hand-coded for weeks. | ~5 min |
| 2.4 | Validation that protects the record | The rules that reject a bad record at the door keep the whole registry trustworthy — and they are the shared definition of a valid learner that business and IT agree once. | ~5 min |
| 2.5 | Writing to the registry, over the bus | Registration's output is the registry's input: the block writes a validated record to the learner registry over the bus, so the record is captured once and reused everywhere. | ~4 min |
| 2.6 | The Registration block as configuration | Read the whole block as configuration you generated and can regenerate — not code you own and must maintain — which is what makes it cheap to stand up and easy to keep current. | ~4 min |

## 3. The scripts

## 3.1 Subtopic 2.1 — What the Registration block does

| Field | Value |
| --- | --- |
| Persona | A (Architect) — DPI solution architect or ministry technical lead who configures, generates and stands up the building blocks |
| Target runtime | ~5 min (≈600 spoken words) |
| PAERA anchor | GovStack Registration Building Block specification; PAERA §3.4.2 Digital Data; §5.2 (reuse) |

> **Single message —** _Registration is the front door: it captures a person once, validates them, and hands a clean record to the registry. Build it once and every service that enrols someone reuses it._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'What the Registration block does'. Voice-over begins._

Every digital service that deals with people has to get them into the system in the first place. A learner has to be enrolled before a scholarship can be paid or a certificate issued. That getting-in is registration, and it is the front door of the whole foundation. The mistake most governments make is letting every service build its own front door. The Registration building block is the alternative: one front door, built once, that every service uses to bring a person in cleanly.

> _Slide 2 — Title: 'Three things the block does'. Body, three text rows: 'Capture — collect the data about a person or thing, once.' 'Validate — check it is complete, correct and not a duplicate.' 'Hand off — write a clean record to the registry.'_

The block does three things, in order. It captures — it collects the data about a person or a thing, through a form or an interface, once. It validates — it checks that the data is complete, correct and not a duplicate of someone already registered. And it hands off — it writes a clean, validated record to the registry, the trusted store that keeps it as the single source of truth. Capture, validate, hand off. That is registration, and the block does it the same way for every service that needs it.

> _Slide 3 — Title: 'A process block, not a database'. Body, two text rows: 'Registration is the process that creates a record; the registry is the store that keeps it.' 'Keep them separate: one front door can feed one trusted store used by many services.'_

It is worth being precise about what registration is and is not, because the two are often confused. Registration is the process that brings a person in and creates a record. The registry — the next block — is the store that keeps that record as the single source of truth. They are different blocks with different jobs. Keeping them separate is what lets one front door feed one trusted store that many services read from. Blur them together inside one application and you are back to every service owning its own copy. Separate them and you have a foundation.

> _Slide 4 — Title: 'Build the front door once'. Body, three text rows: 'Without the block: enrolment, scholarships, credentials each build their own intake.' 'With the block: one registration flow, reused by all of them.' 'The citizen registers once; the services share the result.'_

Here is the reuse that makes the block worth building. Without it, the enrolment service builds its own intake form, the scholarship service builds another, the credential service a third — three front doors, three sets of rules, three places a learner's data can be entered differently. With the block, there is one registration flow, and every service reuses it. The learner is captured once, cleanly, and every service builds on that same clean record. That is the whole-of-government reuse this foundation is for, applied at the very first step a citizen takes.

> _Slide 5 — Title: 'Registration in Progressa'. Body, two text rows: 'A learner is registered once — name, date of birth, identity reference, school.' 'The clean record is written to the learner registry (PLR) and reused by enrolment, scholarships and credentials.'_

In our demonstration country, Progressa, the Registration block captures a learner once — the basics like name, date of birth, a reference to their national identity, and their school. It validates that record, and writes it to the learner registry, PLR. From that moment, the learner exists as one clean record that the enrolment service, the scholarship service and the credential service all reuse. We do not register the learner three times. We register once, at the front door, and the foundation carries the result everywhere it is needed.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Registration is the shared front door — capture once, validate, hand a clean record to the registry — that every service reuses.'_

So the first build is the front door. The Registration block captures a person once, validates the record, and hands it to the registry — and it does this as one shared block that every service reuses rather than rebuilds. Get the front door right and every service behind it starts from a clean, single record. The rest of this topic stands the block up: the specification it is built to, how to generate it as configuration, the validation that protects the record, and how it writes to the registry.

> _Slide 7 — Title: 'Sources'. Body: GovStack Registration Building Block specification (govstack.global); PAERA v1.0 §3.4.2 Digital Data; §5.2 Principles. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'What the Registration block does'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 2.1) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Three-things slide. Three text rows: capture, validate, hand off. | The block's job in three verbs. The spine of the video. Text-only. |
| 3 | Process-not-database slide. Two text rows: registration creates the record, the registry keeps it. | The key distinction that keeps the front door separate from the store. Sets up Topic 3. |
| 4 | Build-the-front-door-once slide. Three text rows: without, with, register once. | Carries the planning-enables-re-use argument. The most important slide. |
| 5 | Progressa slide. Two text rows: the learner captured once; written to PLR and reused. | Makes it concrete with the bound institutions. Text-only. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the GovStack and PAERA references. |

### AI usage tip — Map every place your services register the same person

**What the prompt does:** An Architect needs to show that several services are each registering the same people separately — the duplication a shared Registration block removes. This prompt produces the duplication map that justifies building the block once.

**Prompt template (copy-paste into Claude):**

```text
Below are the citizen-facing services my ministry runs, and for each one, the data it collects from a person when they first use it [paste a list: service name, and the intake fields it captures — e.g. name, date of birth, ID number, school, address]. Identify: (1) which fields are collected by more than one service (the same data captured repeatedly); (2) where the same person is effectively registered two or more times across services; (3) which single set of fields a shared Registration block should capture so that every service can reuse one clean record. Output: a field-overlap table (field / services that collect it / collected more than once?), a list of the duplicate-registration points, and a proposed shared registration record (the fields the block should capture once).
```

**Inputs and outputs:** Input: your services and the intake fields each collects. Output: a field-overlap table, the duplicate-registration points, and a proposed shared registration record.

**Safeguard:** The proposed shared record is a starting point — confirm with each service that the shared fields meet its needs, and check data-protection rules before one block collects a field on behalf of many services, because collecting more than a service needs is its own risk.

### Metadata

| Field | Value |
| --- | --- |
| Working title | What the Registration block does |
| YouTube-optimised title | The registration building block: one front door every government service reuses |
| Description (60 words) | Every service has to get a person into the system first. Most governments let each service build its own front door. This five-minute video for solution architects shows the alternative: a shared Registration building block that captures a learner once, validates the record, and hands it to the registry — reused by every service. AI duplication-mapping prompt in the description. |
| Tags | registration building block, GovStack, digital public infrastructure, enrolment, registries, reuse, digital government, education |
| Playlist (YouTube) | KP3 — Topic 2: The Registration Building Block |
| ToR §4 coverage | §4.1 (methodology — building blocks); §4.3 (AI integration — duplication-mapping prompt); §4.6 (Progressa worked example) |
| PAERA citations | §3.4.2 Digital Data; §5.2 (reuse) |
| External-link list | GovStack Registration Building Block specification (govstack.global); PAERA v1.0 §3.4.2; PAERA v1.0 §5.2 |

## 3.2 Subtopic 2.2 — Build to the GovStack spec

| Field | Value |
| --- | --- |
| Persona | A (Architect) — DPI solution architect or ministry technical lead who configures, generates and stands up the building blocks |
| Target runtime | ~4 min (≈520 spoken words) |
| PAERA anchor | GovStack Registration Building Block specification (APIs, data model); PAERA §5.2 (reuse-first) |

> **Single message —** _Build the block to the published GovStack Registration specification, not a bespoke form — so it is portable, partners recognise it, and you are not inventing what registration means._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Build to the GovStack spec'. Voice-over begins._

When you build the Registration block, you face a choice that decides how much it costs you for years. You can design it from scratch, your own way — or you can build it to a published specification that the world has already agreed. For a foundational block, the published specification almost always wins, and the specification to build to is the GovStack Registration building-block specification. This video says what it gives you and why building to it is the cheaper, safer path.

> _Slide 2 — Title: 'What the specification gives you'. Body, three text rows: 'A defined data model — the fields and their meaning.' 'Defined interfaces — the APIs other blocks and services call.' 'Defined behaviour — how registration, validation and deduplication work.'_

A building-block specification is a published agreement about how a block behaves. The GovStack Registration specification gives you three things. A data model — the fields a registration holds and what they mean. A set of interfaces — the APIs that other blocks and services use to register someone or check a registration. And defined behaviour — how the block handles intake, validation and the detection of duplicates. You are not guessing at any of this, and you are not inventing it. You are adopting an agreement many countries and vendors already follow.

> _Slide 3 — Title: 'Why build to a published spec'. Body, three text rows: 'Portable — a partner or vendor recognises it instead of learning your bespoke design.' 'Replaceable — you can swap the implementation without rewriting everyone who calls it.' 'Reuse-first — you adopt a standard rather than reinventing one.'_

Three benefits make this the right default. Portability: a development partner, a vendor or a new team recognises a GovStack-conformant block, instead of having to learn your one-of-a-kind design. Replaceability: because the interfaces are standard, you can change the implementation underneath without rewriting every service that calls it. And reuse-first: adopting a published standard rather than inventing your own is the same principle that runs through this whole foundation — you reuse what the world has already built and agreed, and spend your effort on what is genuinely specific to your country. Inventing your own registration standard is rebuilding a road that already exists.

> _Slide 4 — Title: 'What stays specific to you'. Body, two text rows: 'The spec defines the shape; your country fills in the local fields and rules.' 'Conform to the interfaces; tailor the content — that is the balance.'_

Building to the specification does not mean giving up what is local. The specification defines the shape of the block — its interfaces and its core behaviour — but your country fills in the specifics: which fields a learner record needs, which local identifiers apply, which validation rules your law requires. The discipline is simple: conform to the interfaces so the block is portable and replaceable, and tailor the content so it fits your sector and your law. You get the benefits of the standard and the fit of a local design at the same time.

> _Slide 5 — Title: 'The spec is the shared definition'. Body, two text rows: 'When two teams build to the same spec, registration means the same thing to both.' 'The specification is a shared language between your architects, your partners and your vendors.'_

There is a deeper reason to build to the specification. When your team, a partner's team and a vendor all build to the same published spec, registration means the same thing to all of them — the same fields, the same interfaces, the same behaviour. The specification becomes a shared language between everyone who touches the block, so that integration is a matter of conforming to a known contract rather than reverse-engineering someone's private design. That shared language is exactly what lets a foundation be built by more than one team without falling apart.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Build the Registration block to the published GovStack specification — adopt the shape, tailor the content — so it is portable, replaceable and recognised.'_

So before you design a single field, adopt the specification. Build the Registration block to the published GovStack Registration specification — conform to its interfaces and behaviour, and fill in the fields and rules your sector needs. You get a block that a partner recognises, that you can re-implement without breaking its callers, and that speaks the same language as everyone else's foundation. That is reuse-first, applied to the first block you build.

> _Slide 7 — Title: 'Sources'. Body: GovStack Registration Building Block specification (govstack.global); PAERA v1.0 §5.2 Principles (reuse-first). Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Build to the GovStack spec'. | Standard ITU template. No images. |
| 2 | What-the-spec-gives slide. Three text rows: data model, interfaces, behaviour. | What a building-block specification actually is. Cite the GovStack Registration spec at citation-verify. |
| 3 | Why-build-to-it slide. Three text rows: portable, replaceable, reuse-first. | The argument for conformance. Carries the planning-enables-re-use / reuse-first thread. |
| 4 | What-stays-local slide. Two text rows: conform to interfaces, tailor content. | Pre-empts the 'a standard won't fit us' objection. Text-only. |
| 5 | Shared-definition slide. Two text rows: same spec = same meaning; the spec as a shared language. | Carries the lingua-franca argument — a shared contract between architects, partners, vendors. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the GovStack specification reference. |

### AI usage tip — Check your registration design against the GovStack specification

**What the prompt does:** An Architect with a draft registration design needs to know where it conforms to the GovStack Registration specification and where it drifts into a bespoke design that will cost portability. This prompt produces a conformance gap-check.

**Prompt template (copy-paste into Claude):**

```text
Below is my draft design for a Registration building block [paste what you have: the fields it captures, the interfaces or APIs it exposes, and how it handles validation and duplicates]. Compare it, point by point, against the published GovStack Registration Building Block specification. For the DATA MODEL, the INTERFACES/APIs, and the BEHAVIOUR (intake, validation, deduplication): mark each part of my design as CONFORMS, DIFFERS, or MISSING versus the specification, with a one-line note. Flag any place where I have invented something the specification already standardises (a portability risk), and any place where my local need genuinely justifies an extension. Output: a conformance table (area / my design / spec position / conforms-differs-missing / note) and a short list of changes to bring the design into conformance without losing the local fields I actually need.
```

**Inputs and outputs:** Input: your draft registration design. Output: a conformance table against the GovStack spec plus a change list.

**Safeguard:** Confirm the conformance findings against the current published version of the specification before acting — specifications evolve, and a model trained on an older version can mislead. Where the prompt says you may extend the spec, keep the standard interfaces intact so the block stays portable.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Build to the GovStack spec |
| YouTube-optimised title | Why you should build your registration block to the GovStack specification |
| Description (60 words) | Design your registration block your own way, or build it to a published specification the world already agreed? This four-minute video for solution architects makes the case for the GovStack Registration specification: portable, replaceable, recognised by partners. Adopt the shape, tailor the local content. AI conformance gap-check prompt in the description to test your own design. |
| Tags | GovStack, registration building block, specification, conformance, interoperability, reuse, digital government, standards |
| Playlist (YouTube) | KP3 — Topic 2: The Registration Building Block |
| ToR §4 coverage | §4.1 (methodology — standards); §4.2 (reference frameworks — GovStack); §4.3 (AI integration — conformance prompt) |
| PAERA citations | §5.2 (reuse-first; the block is built to the GovStack Registration specification) |
| External-link list | GovStack Registration Building Block specification (govstack.global); PAERA v1.0 §5.2 |

## 3.3 Subtopic 2.3 — Generate the intake flow

| Field | Value |
| --- | --- |
| Persona | A (Architect) — DPI solution architect or ministry technical lead who configures, generates and stands up the building blocks |
| Target runtime | ~5 min (≈600 spoken words) |
| PAERA anchor | GovStack Registration Building Block specification (data model, intake API); PAERA §5.2 |

> **Single message —** _Turn a plain field brief into the registration form and intake API as configuration with Claude — the block stood up in an afternoon, not hand-coded for weeks._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Generate the intake flow'. Voice-over begins._

Now we build. The Registration block's intake — the form a registrar fills in and the interface a service calls — is configuration: a structured description of the fields, their types, which are required, and the rules around them. And configuration is exactly the kind of thing you can generate with Claude from a plain-language brief, then review and refine. This is the heart of what this knowledge product teaches: you do not hand-code each block for weeks; you describe what you need and generate the configuration that stands it up.

> _Slide 2 — Title: 'The intake flow is configuration'. Body, three text rows: 'The fields and their types — text, date, a reference to another record.' 'Which are required, and their allowed values.' 'The intake API — how a service submits a registration.'_

Be clear about what the intake flow is made of, because that is what you generate. It is the set of fields and their types — a name is text, a date of birth is a date, an identity reference points to a record in the identity block. It is the rules on each field — which are required, which have a fixed list of allowed values. And it is the intake interface — the API a service calls to submit a registration, defined to the GovStack specification. All of that is configuration: structured text, not bespoke program code. That is why it can be generated.

> _Slide 3 — Title: 'From a brief to a configuration'. Body, two text rows: 'You write a plain brief: the fields a Progressa learner registration needs.' 'Claude produces the form schema and the intake API config, to the GovStack shape — which you review.'_

The workflow is straightforward. You write a plain-language brief: the fields a Progressa learner registration needs — name, date of birth, a reference to national identity, the school, the year of enrolment. You give Claude that brief and the GovStack Registration shape to conform to. Claude produces the configuration — the form schema and the intake API definition — in the structured format the block consumes. You read it, correct what is wrong, and regenerate. What used to be weeks of a developer translating a requirements document into code becomes an afternoon of generating and reviewing configuration. The architect stays in control; the machine does the typing.

> _Slide 4 — Title: 'Why this is safe — you review the output'. Body, two text rows: 'Generated configuration is readable: an architect can check every field and rule.' 'You are reviewing a draft, not trusting a black box — the judgement stays human.'_

This is safe precisely because configuration is readable. A generated form schema is a list of fields and rules an architect can read line by line and check against the brief and the specification. You are not trusting a black box to make decisions; you are reviewing a draft that a competent human checks and signs off. The machine accelerates the mechanical part — turning a brief into well-formed configuration — while the judgement about what is correct stays with the architect. That division of labour is the whole point: speed on the typing, human control on the meaning.

> _Slide 5 — Title: 'The configuration lands in the build pack'. Body, two text rows: 'The generated form and intake API are saved as the block's configuration.' 'The prompt that produced them is saved beside them — so the block can be regenerated, not hand-patched.'_

The output is not a throwaway. The generated form schema and intake API become the Registration block's configuration in the build pack, under the registration folder. And the prompt that generated them is saved right beside them. That pairing matters: when the fields change next year, you do not hand-edit the configuration and let it drift from how it was made — you update the brief, regenerate, and review. The block stays reproducible. The configuration and the prompt that made it travel together, so the block is always something you can rebuild, not a hand-tuned artefact no one dares touch.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Describe the registration you need; generate the form and intake API as configuration; review it — the block, stood up in an afternoon.'_

So the build move is generation, not hand-coding. You write a plain brief of the fields a registration needs, generate the form and the intake API as configuration to the GovStack shape, review it as the architect, and save it with its prompt in the build pack. The Registration block's intake is stood up in an afternoon, reproducibly, with your judgement on every field. That is how this knowledge product builds every block — and the next thing to get right is the validation that keeps the records clean.

> _Slide 7 — Title: 'Sources'. Body: GovStack Registration Building Block specification (data model, intake API); PAERA v1.0 §5.2. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Generate the intake flow'. | Standard ITU template. No images. |
| 2 | Intake-is-configuration slide. Three text rows: fields/types, rules, the intake API. | Defines what gets generated. Text-only. |
| 3 | Brief-to-config slide. Two text rows: the plain brief; Claude produces the schema and API config. | The core build workflow of the whole KP. Uses the Progressa learner fields. |
| 4 | Why-it-is-safe slide. Two text rows: configuration is readable; review a draft, not a black box. | Addresses the trust question head-on. The judgement-stays-human beat. |
| 5 | Lands-in-the-build-pack slide. Two text rows: saved as config; the prompt saved beside it. | The reproducibility/cardinal-rule beat (regenerate, don't hand-patch). |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the GovStack data-model reference. |

### AI usage tip — Generate the registration form and intake API as configuration

**What the prompt does:** An Architect needs the registration block's intake configuration — the form schema and the intake API — generated from a plain field brief, conforming to the GovStack shape. This prompt produces that configuration, ready to review and save into the build pack.

**Prompt template (copy-paste into Claude):**

```text
Generate the configuration for a Registration building block's intake, conforming to the GovStack Registration Building Block specification. Here is the registration I need [paste a plain brief: the fields a registration captures, e.g. for a Progressa learner — full name, date of birth, national identity reference, school code, enrolment year — noting for each whether it is required, its type, and any allowed-value list]. Produce: (1) a form/data schema listing each field with its name, type, required flag, and validation constraints, structured as configuration (e.g. YAML or JSON); (2) the intake API definition (the endpoint and request body a service uses to submit a registration), aligned to the GovStack interface; (3) a note of any field where a reference to another building block (identity, school registry) is implied. Keep it to configuration only — no application code. Output: the schema, the intake API definition, and the cross-block reference notes.
```

**Inputs and outputs:** Input: a plain brief of the registration fields and rules. Output: a form/data schema, an intake API definition (as configuration), and cross-block reference notes.

**Safeguard:** Generated configuration is a reviewed draft, not a finished block — read every field and rule against your brief and the current GovStack specification, and confirm each required flag and allowed-value list with the service owner before deploying. Save the prompt with the output so the block can be regenerated rather than hand-edited.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Generate the intake flow |
| YouTube-optimised title | Generate a registration block's form and API as configuration — with Claude |
| Description (60 words) | A registration block's intake is configuration: fields, rules and an API. This five-minute video for solution architects shows how to generate the form schema and intake API from a plain field brief with Claude, conforming to the GovStack shape, then review and save it into the build pack — the block stood up in an afternoon, reproducibly. The generating AI prompt is in the description. |
| Tags | configuration generation, registration building block, GovStack, Claude, form schema, API, digital government, low-code |
| Playlist (YouTube) | KP3 — Topic 2: The Registration Building Block |
| ToR §4 coverage | §4.1 (methodology — build); §4.3 (AI integration — the generating prompt, primary); §4.6 (Progressa worked example) |
| PAERA citations | §5.2 (reuse; block built to the GovStack Registration specification) |
| External-link list | GovStack Registration Building Block specification (data model, intake API); PAERA v1.0 §5.2 |

## 3.4 Subtopic 2.4 — Validation that protects the record

| Field | Value |
| --- | --- |
| Persona | A (Architect) — DPI solution architect or ministry technical lead who configures, generates and stands up the building blocks |
| Target runtime | ~5 min (≈600 spoken words) |
| PAERA anchor | GovStack Registration Building Block specification (validation, deduplication); PAERA §3.4.2 Digital Data; §3.4.4 Digital Identity |

> **Single message —** _The rules that reject a bad record at the door keep the whole registry trustworthy — and they are the shared definition of a valid learner that business and IT agree once._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Validation that protects the record'. Voice-over begins._

A registry is only as trustworthy as the records that get into it. If the front door lets through incomplete records, duplicates, and references to people who do not exist, then the registry behind it is a rumour, and every service that reuses it inherits the mess. Validation is the part of the Registration block that stops that at the door. It is not a technical afterthought — it is where the block earns the trust that makes the whole foundation worth building.

> _Slide 2 — Title: 'Four kinds of check'. Body, four text rows: 'Complete — the required fields are present.' 'Correct — each field is the right type and within its allowed values.' 'Real — references point to records that exist (the identity reference resolves).' 'Unique — this person is not already registered.'_

Validation does four kinds of check, and a sound block does all four. Complete: the required fields are actually present — no registration with a blank date of birth. Correct: each field is the right type and within its allowed values — a school code that is a real school code. Real: references point to records that exist — the learner's identity reference resolves to an actual record in the identity block. And unique: this person is not already in the registry under another entry, so you do not create a duplicate. Complete, correct, real, unique. A record that passes all four is one the registry can trust.

> _Slide 3 — Title: 'Deduplication — the hardest and most valuable'. Body, two text rows: 'The same learner, entered twice, splits their history and breaks every service.' 'Checking uniqueness at the door — against identity — is what keeps one person to one record.'_

Of the four, uniqueness is the hardest and the most valuable. The same learner entered twice — once as 'Mary' and once as 'Maria', with slightly different dates — becomes two records, and now their enrolment is on one and their scholarship on the other, and no service sees the whole person. Deduplication prevents that by checking, at the moment of registration, whether this person already exists — ideally by resolving against the identity block, which holds the one authoritative identity. Getting uniqueness right at the front door is what keeps the principle of one person, one record true. It is worth more effort than any other single check.

> _Slide 4 — Title: 'Validation rules are the shared definition of a valid record'. Body, two text rows: 'What counts as a valid learner is a business decision, written precisely enough for the system to enforce.' 'Business and IT agree the rules once — a shared language both sides can hold the block to.'_

Here is the part architects often miss. The validation rules are not just technical settings — they are the definition of what counts as a valid learner, and that is a business decision. Which fields are mandatory, what makes two records the same person, which identity references are acceptable — these are decisions the ministry owns, written down precisely enough for the block to enforce. So validation is where business and IT meet: the business side decides what a valid record means, the technical side expresses it as rules the block runs. The rules become a shared language — a definition both sides agreed and can hold the block to. Skip that agreement and you get a block that enforces one team's private assumptions on everyone.

> _Slide 5 — Title: 'The rules are configuration too'. Body, two text rows: 'Generate the validation rules from the agreed definition, the same way as the form.' 'When the definition changes, regenerate the rules — they never drift from what was agreed.'_

And like the form, the validation rules are configuration — a structured list of checks the block runs, which you can generate from the agreed definition, review, and save in the build pack. When the ministry changes what counts as a valid record — adds a required field, tightens the duplicate check — you update the definition and regenerate the rules, so the running block never drifts from the agreed definition. The rules are readable, reviewable, and reproducible, exactly like the intake form. That is what keeps validation honest as the block lives and changes.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Validation — complete, correct, real, unique — is the agreed definition of a valid record, enforced at the door, that keeps the whole registry trustworthy.'_

So validation is where the block earns its trust. Four checks — complete, correct, real, unique — reject a bad record at the door so the registry behind it stays clean. The rules that define a valid record are a business decision, agreed between business and IT as a shared definition, and held as configuration you can regenerate. Get validation right and every service that reuses the registry inherits clean data. The next step is where that clean record actually goes — written to the registry, over the bus.

> _Slide 7 — Title: 'Sources'. Body: GovStack Registration Building Block specification (validation, deduplication); PAERA v1.0 §3.4.2 Digital Data; §3.4.4 Digital Identity. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Validation that protects the record'. | Standard ITU template. No images. |
| 2 | Four-checks slide. Four text rows: complete, correct, real, unique. | The validation taxonomy. The spine of the video. Text-only. |
| 3 | Deduplication slide. Two text rows: the split-record problem; check uniqueness against identity. | The hardest, most valuable check. Bridges to the identity block (Topic 4). |
| 4 | Shared-definition slide. Two text rows: a valid record is a business decision; business and IT agree it. | Carries the lingua-franca argument — validation rules as a shared language. |
| 5 | Rules-are-configuration slide. Two text rows: generate from the definition; regenerate when it changes. | Keeps validation reproducible. Reinforces the cardinal rule. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the GovStack validation/dedup reference. |

### AI usage tip — Generate the validation rules from your definition of a valid record

**What the prompt does:** An Architect needs the registration block's validation rules — completeness, correctness, referential and deduplication checks — generated as configuration from the ministry's agreed definition of a valid record. This prompt produces those rules, ready to review.

**Prompt template (copy-paste into Claude):**

```text
Generate the validation rules for a Registration building block, as configuration, from this agreed definition of a valid record [paste: the fields and, for each, whether it is required, its type and allowed values; the rule for what makes two records the same person (deduplication); and which references must resolve to another block, e.g. the national identity reference]. Produce four groups of rules: (1) COMPLETENESS — required-field checks; (2) CORRECTNESS — type and allowed-value checks; (3) REFERENTIAL — checks that references (e.g. identity, school) resolve to an existing record; (4) UNIQUENESS — the deduplication check that prevents registering the same person twice. Express each rule as readable configuration with a clear failure message. Flag any rule where the definition I gave is ambiguous and needs a business decision. Output: the four rule groups as configuration, plus the list of ambiguities to resolve with the ministry.
```

**Inputs and outputs:** Input: the agreed definition of a valid record (fields, dedup rule, references). Output: four groups of validation rules as configuration, plus a list of ambiguities to resolve.

**Safeguard:** The rules enforce exactly the definition you paste — if the definition is wrong or incomplete, the block will faithfully enforce the wrong thing. Resolve every flagged ambiguity with the business owner, and test the deduplication rule against real sample data before trusting it, since a loose rule merges different people and a strict one splits the same person.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Validation that protects the record |
| YouTube-optimised title | Registration validation: the rules that keep your whole registry trustworthy |
| Description (60 words) | A registry is only as good as the records let through the front door. This five-minute video for solution architects covers the four validation checks — complete, correct, real, unique — and shows that the rules defining a valid record are a business decision business and IT agree once, then generate as configuration. AI prompt to generate your validation rules in the description. |
| Tags | validation, deduplication, registration building block, data quality, GovStack, identity, digital government, configuration |
| Playlist (YouTube) | KP3 — Topic 2: The Registration Building Block |
| ToR §4 coverage | §4.1 (methodology — build); §4.3 (AI integration — validation-rule prompt); §4.6 (Progressa worked example) |
| PAERA citations | §3.4.2 Digital Data; §3.4.4 Digital Identity (deduplication resolves against identity) |
| External-link list | GovStack Registration Building Block specification (validation, deduplication); PAERA v1.0 §3.4.2; PAERA v1.0 §3.4.4 |

## 3.5 Subtopic 2.5 — Writing to the registry, over the bus

| Field | Value |
| --- | --- |
| Persona | A (Architect) — DPI solution architect or ministry technical lead who configures, generates and stands up the building blocks |
| Target runtime | ~4 min (≈520 spoken words) |
| PAERA anchor | GovStack Registration & Registries interaction; NIIS X-Road (the bus); PAERA §3.4.3 Interoperability; §5.2 |

> **Single message —** _Registration's output is the registry's input: the block writes a validated record to the learner registry over the bus, so the record is captured once and reused everywhere._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Writing to the registry, over the bus'. Voice-over begins._

A validated registration is only useful if it lands somewhere trusted and reusable. That somewhere is the registry — the next block we build — and the path it travels is the interoperability bus that KP2 already stood up. This video shows the hand-off: how the Registration block writes a clean record to the learner registry, over the bus, so that one capture becomes a record every service can reuse.

> _Slide 2 — Title: 'Registration out, registry in'. Body, two text rows: 'The Registration block's output is a clean, validated record.' 'It is written to the registry as one authoritative entry — the golden record.'_

The hand-off is the whole point of the front door. The Registration block's output — a complete, correct, real, unique record — is written into the registry as one authoritative entry. The registry keeps it as the golden record for that learner: the single version every service trusts. Registration creates; the registry keeps. The clean record the front door produced is now the record of truth, ready to be read by enrolment, scholarships and credentials without any of them re-capturing it.

> _Slide 3 — Title: 'Over the bus, not a private wire'. Body, two text rows: 'The write travels over the interoperability bus KP2 built — not a point-to-point link.' 'Reusing the bus is why any service can reach the registry the same way.'_

Notice how the record travels: over the shared interoperability bus that KP2 built — the Linkup federation — not over a private wire between two systems. This matters for the same reason it mattered in KP2. A private link would tie the Registration block to one registry forever and would have to be rebuilt for the next connection. Going over the bus means the block reaches the registry the same standard way any block reaches any other, and the next service reuses that same path. We do not build a new road for this write; we reuse the road KP2 already laid. The foundation is cumulative — each block stands on the bus beneath it.

> _Slide 4 — Title: 'Write once, reuse everywhere'. Body, three text rows: 'The learner is captured once at the front door.' 'The record is written once to the registry, over the bus.' 'Every service reads it — none re-registers the learner.'_

Follow the record through and the reuse is obvious. The learner is captured once, at the front door. The clean record is written once, to the registry, over the bus. And from there every service reads it — the enrolment service, the scholarship service, the credential service — and none of them registers the learner again. One capture, one write, many reuses. That is the shape of the whole foundation, and the Registration block writing to the registry over the bus is the first place a learner actually experiences it: they give their details once, and the state remembers.

> _Slide 5 — Title: 'Registration in Progressa, end to end'. Body, two text rows: 'A Progressa learner is registered, validated, and written to PLR over Linkup.' 'The same record is later read by the scholarship and credential services — captured once.'_

End to end in Progressa: a learner is registered at the front door, the record passes the four validation checks, and the Registration block writes it to the learner registry, PLR, over the Linkup bus. Later, when that learner applies for a scholarship or a credential, those services read the same PLR record over the same bus. The learner was asked once. That is the once-only outcome KP2 framed, now produced by the Registration block at the very first step — and it is exactly what the later blocks and services will build on.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The block writes the validated record to the registry over the bus — captured once, kept as the golden record, reused by every service.'_

So the front door closes by handing off. The Registration block writes its clean, validated record to the registry, over the bus KP2 built, where it becomes the golden record every service reuses. Capture once, write once, reuse everywhere. The registry that keeps that record is the next block we build — and it is the deep one, because being the single source of truth is a job worth doing properly.

> _Slide 7 — Title: 'Sources'. Body: GovStack Registration & Registries interaction; NIIS X-Road (niis.org); PAERA v1.0 §3.4.3 Interoperability; §5.2. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Writing to the registry, over the bus'. | Standard ITU template. No images. |
| 2 | Registration-out-registry-in slide. Two text rows: the clean record; the golden record. | The hand-off. Bridges to Topic 3 (the registry). Text-only. |
| 3 | Over-the-bus slide. Two text rows: the shared bus, not a private wire; reuse the KP2 bus. | Carries the reuse / cumulative-foundation argument. Binds to KP2. |
| 4 | Write-once-reuse-everywhere slide. Three text rows: captured once, written once, read by all. | The shape of the foundation. The most important slide. |
| 5 | Progressa-end-to-end slide. Two text rows: written to PLR over Linkup; reused by later services. | Concrete once-only, using the bound institutions. Previews KP4. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the GovStack interaction and X-Road references. |

### AI usage tip — Define the registration-to-registry write as a service call over the bus

**What the prompt does:** An Architect needs to specify how the Registration block writes a record to the registry over the interoperability bus — the service call and its contract — rather than a private link. This prompt drafts that write interface as configuration.

**Prompt template (copy-paste into Claude):**

```text
I need the Registration building block to write a validated record to the learner registry over an X-Road-style interoperability bus, not a point-to-point link. Below is the registration record it produces [paste the fields of the validated record]. Draft, as configuration: (1) the write service call — the operation the Registration block invokes on the registry to create or update a record, with its request body mapped from the registration record; (2) the idempotency rule that ensures re-sending the same registration does not create a duplicate in the registry; (3) the success and failure responses the registry returns, and what the Registration block does with each. Keep it aligned to the GovStack Registration/Registries interaction and expressed as a service contract over the bus. Output: the write service call, the idempotency rule, and the response handling — all as configuration.
```

**Inputs and outputs:** Input: the validated registration record's fields. Output: the write service call, the idempotency rule, and response handling, as configuration over the bus.

**Safeguard:** Confirm the registry's actual create/update interface before finalising the call — this draft assumes the GovStack shape, and the real registry block (Topic 3) defines the contract it accepts. Test the idempotency rule with a repeated registration, because a missing idempotency key is the commonest cause of duplicate golden records.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Writing to the registry, over the bus |
| YouTube-optimised title | How a registration block writes the golden record — over the interoperability bus |
| Description (60 words) | A validated registration has to land somewhere trusted and reusable. This four-minute video for solution architects shows the hand-off: the Registration block writes a clean record to the learner registry over the bus KP2 built — not a private wire — so the learner is captured once and every service reuses the golden record. AI prompt to define the write call in the description. |
| Tags | registries, registration, X-Road, interoperability bus, golden record, once-only, GovStack, digital government |
| Playlist (YouTube) | KP3 — Topic 2: The Registration Building Block |
| ToR §4 coverage | §4.1 (methodology — build); §4.3 (AI integration — write-call prompt); §4.6 (Progressa once-only) |
| PAERA citations | §3.4.3 Interoperability; §5.2 (reuse) |
| External-link list | GovStack Registration & Registries interaction; NIIS X-Road (niis.org); PAERA v1.0 §3.4.3; PAERA v1.0 §5.2 |

## 3.6 Subtopic 2.6 — The Registration block as configuration

| Field | Value |
| --- | --- |
| Persona | A (Architect) — DPI solution architect or ministry technical lead who configures, generates and stands up the building blocks |
| Target runtime | ~4 min (≈520 spoken words) |
| PAERA anchor | GovStack Registration Building Block specification; PAERA §5.2 (reuse); §5.6 (sourcing — build/buy/share) |

> **Single message —** _Read the whole block as configuration you generated and can regenerate — not code you own and must maintain — which is what makes it cheap to stand up and easy to keep current._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The Registration block as configuration'. Voice-over begins._

Step back and look at what you built across this topic. You did not write a registration application from scratch. You generated configuration — a form schema, a set of validation rules, an intake API, a write call to the registry — each from a plain brief, each reviewed, each saved with the prompt that made it. The Registration block is configuration, not bespoke code. Seeing it that way changes how much it costs you to run and to change, and it is the mental model this whole knowledge product is built on.

> _Slide 2 — Title: 'What the block actually is'. Body, four text rows: 'The form/data schema — the fields.' 'The validation rules — the agreed definition of a valid record.' 'The intake API and the write call — how services and the registry talk to it.' 'The prompts that generated all of the above.'_

List what the Registration block actually consists of. The form and data schema — the fields it captures. The validation rules — the agreed definition of a valid record. The intake API a service calls and the write call to the registry — its interfaces. And, kept beside all of these, the prompts that generated them. That is the whole block: four pieces of configuration and the prompts that produce them. There is no large, hand-written application underneath that only one developer understands. The block is the configuration, and the configuration is readable by anyone on the team.

> _Slide 3 — Title: 'Configuration is cheaper to own'. Body, two text rows: 'Bespoke code is owned forever — every change is a development project.' 'Generated configuration is regenerated — a change is a new brief and a review.'_

Why does this framing matter so much? Because bespoke code is owned forever. Every change to a hand-coded registration system is a small development project — a developer, a test cycle, a release. Generated configuration is different: when the registration needs to change, you update the brief, regenerate the configuration, review it, and redeploy. The cost of a change drops from a project to an afternoon. Over the life of the block — and foundational blocks live for many years — that difference is enormous. You are choosing, deliberately, to own configuration you can regenerate rather than code you must maintain.

> _Slide 4 — Title: 'Regenerate, never hand-patch'. Body, two text rows: 'The cardinal rule: a change goes to the brief and the prompt, then you regenerate.' 'Hand-editing the running configuration breaks the link to how it was made — and it drifts.'_

This gives the block one firm rule. When something must change, the change goes to the brief and the prompt, and you regenerate — you never hand-patch the running configuration. The moment you hand-edit the deployed form or rules directly, the configuration drifts from the brief that documents it, and the next regeneration either overwrites your fix or conflicts with it. Keeping every change flowing through the brief-and-prompt keeps the block reproducible: anyone can rebuild it from its inputs and get the same block. That discipline is what makes 'configuration, not code' a durable advantage rather than a one-time convenience.

> _Slide 5 — Title: 'It ships with an acceptance check'. Body, two text rows: 'The block is proven by a test: a sample registration is captured, validated and written.' 'The acceptance check is how you know the block runs — not just that the configuration exists.'_

One last piece makes the block real rather than just described. It ships with an acceptance check — a small, runnable test that takes a sample learner registration, runs it through the block, and confirms the record is captured, validated and written to the registry as expected. That check is the difference between configuration that exists and a block that runs. When the acceptance check passes on the live stack, the Registration block is not a diagram or a draft — it is a working front door. Every block in this foundation ships with one, and standing the foundation up means watching each acceptance check go green.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The Registration block is generated configuration with an acceptance check — regenerate it, do not hand-patch it, and prove it runs.'_

So the Registration block is configuration — a schema, rules, interfaces, and the prompts that made them — proven by an acceptance check. You own something you can read, regenerate and re-prove, not a bespoke application you must maintain forever. That is the front door of the Progressa foundation, stood up. The next block is the one it writes to — the registry, the golden record — and it is the deep build of this knowledge product.

> _Slide 7 — Title: 'Sources'. Body: GovStack Registration Building Block specification; PAERA v1.0 §5.2 Principles (reuse); §5.6 Sourcing Strategy. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The Registration block as configuration'. | Standard ITU template. No images. |
| 2 | What-the-block-is slide. Four text rows: schema, rules, interfaces, prompts. | The block decomposed into configuration. Text-only. |
| 3 | Cheaper-to-own slide. Two text rows: bespoke code owned forever; configuration regenerated. | The cost argument. Sets up the §5.6 sourcing thread (Topic 6). |
| 4 | Regenerate-never-hand-patch slide. Two text rows: change the brief/prompt; hand-edits drift. | The cardinal rule, stated plainly. The durable-advantage beat. |
| 5 | Acceptance-check slide. Two text rows: a sample registration proven; runs, not just exists. | Introduces the acceptance check that kp-solution-verify runs. Bridges to the build pack. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line, and the bridge to the registry (Topic 3). |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the GovStack and PAERA references. |

### AI usage tip — Write the acceptance check that proves the Registration block runs

**What the prompt does:** An Architect needs the runnable acceptance check that proves the Registration block works end to end — a sample registration captured, validated and written. This prompt drafts that given/when/then check for the build pack.

**Prompt template (copy-paste into Claude):**

```text
Draft an acceptance check that proves a Registration building block runs end to end, for the build pack. The block captures a learner, validates the record, and writes it to the learner registry over the bus. Below is the block's configuration [paste or summarise: the fields, the validation rules, and the write call]. Produce a given/when/then acceptance check that: (1) GIVEN the block is deployed and the registry is reachable; (2) WHEN a sample valid learner registration is submitted, THEN the record is created in the registry exactly once with the expected fields; and add at least two negative cases — WHEN an incomplete record is submitted THEN it is rejected with a clear message, and WHEN a duplicate of an existing learner is submitted THEN no second record is created. Specify the exact observable result for each case (what to query in the registry, what count or message to expect). Output: the acceptance check as given/when/then steps with concrete expected results.
```

**Inputs and outputs:** Input: the block's configuration (fields, rules, write call). Output: a given/when/then acceptance check with a valid case and negative cases, each with concrete expected results.

**Safeguard:** An acceptance check is only meaningful if its expected results are exact — 'the record is created' must say which fields and that the count is exactly one. Run the check on the live stack, not just on paper; a check that has never been executed proves nothing, and the negative cases (rejection, deduplication) are the ones most likely to expose a misconfigured block.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The Registration block as configuration |
| YouTube-optimised title | Configuration, not code: how to own a registration block you can regenerate |
| Description (60 words) | Step back: you didn't write a registration app, you generated configuration — a schema, validation rules, interfaces and the prompts that made them. This four-minute video for solution architects shows why that's cheaper to own, why you regenerate rather than hand-patch, and how an acceptance check proves the block runs. AI prompt to write that acceptance check in the description. |
| Tags | configuration not code, registration building block, acceptance test, reproducibility, GovStack, sourcing, digital government |
| Playlist (YouTube) | KP3 — Topic 2: The Registration Building Block |
| ToR §4 coverage | §4.1 (methodology — build/own); §4.3 (AI integration — acceptance-check prompt); §4.6 (Progressa worked example) |
| PAERA citations | §5.2 (reuse); §5.6 Sourcing Strategy (build/buy/share) |
| External-link list | GovStack Registration Building Block specification; PAERA v1.0 §5.2; PAERA v1.0 §5.6 |

## 4. Production notes

### 4.1 Design standard — the split-screen usability test

The bar for every video in Topic 2 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to follow along and act on the other half. For the Architect-facing videos in Topic 2, 'act' means generate the corresponding piece of the block's configuration — the duplication map, the conformance check, the intake form and API, the validation rules, the write call, the acceptance check. Each subtopic's AI usage tip operationalises this: the prompt produces real configuration the architect can review and save into the build pack.

### 4.2 Slide branding

Every slide follows the ITU template per the Knowledge Products and Video Materials Guide §3.i: Title text Arial Bold 28pt; Body text Arial 18pt; Background colour #E5F5FB. Text only — no images. Diagrams and text boxes are permitted only where strictly necessary; where used, all labels remain plain text. No country emblems, no agency logos. The recurring single-sentence summary slide that closes each subtopic uses 28pt body type so the line is screenshot-friendly for the listener's own briefings.

### 4.3 No individuals on screen

Per the Guide §3 Note, no individuals appear in any video. Two options are open: an AI-avatar narrator generated by ITU's production pipeline, or computer-screen-only voice-over with no narrator visible. The choice is ITU's; the scripts are agnostic to it. No human narrator is shown in any video.

### 4.4 Voice and tone

Direct address ('your country', 'your ministry', 'your block'). Plain language at approximately an eighth-grade English level, even as the register turns Architect — the listener configures and stands up the block, so the videos show real configuration concepts (schema, validation rules, an intake API, a write over the bus) in plain words, with the heavy mechanics deferred to the build pack. Examples are drawn from the Progressa education sector — a learner registered once, written to PLR. Honest framing throughout: a building block is generated, reviewed configuration proven by an acceptance check, not a black box.

### 4.5 External-link list and 'Find the link in the description'

Every subtopic includes an external-link list in its metadata, and every script references external materials with the convention 'Find the link in the description' rather than reading URLs aloud. ITU's production pipeline compiles the per-video list into the YouTube description. The aggregate list across the six subtopics is in Section 6.

### 4.6 GitBook companion and the build pack

Each subtopic ships with the video script, slide specification, AI usage tip and metadata. The GitBook companion content — written, in-depth implementation guidance — is produced as a parallel deliverable mirroring the same subtopic numbering. For KP3 Topic 2, the build pack (KP3-DPI/KP3-build-pack) is where the block actually lives: the generated form schema, validation rules and intake/write configuration land under configs/registration/, with the generating prompts in prompts/ and the acceptance check in acceptance/. The AI usage tips in this topic are the prompts that produce those artefacts; running them, reviewing the output and saving it is how the Registration block is stood up.

## 5. Open calibration items

The v0.1 drafting raised the editorial and structural decisions below. These are forwarded for ITU's discussion at the Tuesday weekly call.

### 5.1 Citations to verify before lock

References to confirm against the published source at citation-verify: the GovStack Registration Building Block specification — its data model, its intake/validation/deduplication interfaces and behaviour — is the primary anchor for the whole topic, and the exact section and API names must be checked against the current published specification, not paraphrased (2.1–2.6); the GovStack Registration-to-Registries interaction for the write hand-off (2.5); NIIS X-Road as the bus the write travels over (2.5). PAERA anchors used: §3.4.2 Digital Data, §3.4.3 Interoperability, §3.4.4 Digital Identity, §5.2 Principles, §5.6 Sourcing Strategy — all confirmed against the v1.0 headings.

### 5.2 Editorial tone calls

Sharp lines that deserve a deliberate keep / soften / cut decision: 'a registry without clean records is a rumour' (2.4); 'the machine does the typing, the architect keeps the judgement' (2.3); 'bespoke code is owned forever' (2.6). Each is doing real teaching work and is defensible.

### 5.3 Structural calls — the Architect register

Topic 2 is the first Architect-facing module and the first to show configuration on screen. The calibration question for ITU is how much generated configuration to render in the videos versus keep in the build pack: this draft keeps the heavy artefacts (full schemas, rule sets) in the build pack and shows only their shape and purpose in the slides, with the AI tips generating the real thing. Confirm this is the right split for the Architect topics (it recurs in Topics 3–5).

### 5.4 Dependencies and Progressa canon

(1) The Registration block writes to the Progressa Learner Registry (PLR), the deep registry built in Topic 3, over the Linkup bus stood up in KP2 — KP3 reuses that bus and does not rebuild it. (2) Deduplication resolves against the identity block (PNIA, Topic 4); Topic 2 introduces the dependency and Topic 4 makes identity reachable. (3) The build-pack artefacts under configs/registration/ are generated by the AI tips here and proven by the acceptance check; filling and running them on the live stack depends on ITU cloud access (Inception Report action item A4). Settle the schedule in the re-phasing discussion with ITU (KP2–4 Delivery Plan §6).

## 6. Annex — aggregate external-link list

Compiled across the six subtopics for ITU's video production pipeline. To be split per subtopic and inserted into the corresponding YouTube descriptions.

| Subtopic | Sources referenced |
| --- | --- |
| 2.1 | GovStack Registration Building Block specification (govstack.global); PAERA v1.0 §3.4.2 Digital Data; §5.2 Principles. |
| 2.2 | GovStack Registration Building Block specification (data model, interfaces, behaviour); PAERA v1.0 §5.2 (reuse-first). |
| 2.3 | GovStack Registration Building Block specification (data model, intake API); PAERA v1.0 §5.2. |
| 2.4 | GovStack Registration Building Block specification (validation, deduplication); PAERA v1.0 §3.4.2 Digital Data; §3.4.4 Digital Identity. |
| 2.5 | GovStack Registration & Registries interaction; NIIS X-Road documentation (niis.org); PAERA v1.0 §3.4.3 Interoperability; §5.2. |
| 2.6 | GovStack Registration Building Block specification; PAERA v1.0 §5.2 Principles; §5.6 Sourcing Strategy. |

All references are publicly accessible and verifiable. The Tuesday review may add or refine items based on ITU's preferred citation style for the YouTube channel.

<!-- GENERATED from build_kp2_module2_v01.js by bundle_to_md.py — do not hand-edit; edit the build script and regenerate. -->

# KP2 Module 2 — Video Script Bundle v0.1 (ITU-aligned)

| Field | Value |
| --- | --- |
| Document | Video script bundle for Topic 2 of KP2 |
| Version | v0.1 — aligned to ITU Knowledge Products and Video Materials Guide |
| Date | 27 June 2026 |
| Contract reference | RFQ-S-GIGA-2026-022 / Purchase Order #334304 (signed 24 April 2026) |
| Topic persona | S (Strategist) — national interoperability authority, ministry CIO, Ministry of Justice sponsor, or development-partner lead |
| Subtopics | Six subtopics (2.1 – 2.6), each shipped as one ~5-minute standalone video |
| Topic runtime | Approximately 28 minutes across six standalone videos |
| Build pack | KP2-GIF/KP2-build-pack — this topic produces the decree, the legal-layer configuration of the build pack |
| Prepared by | FiscalAdmin OÜ — Aare Lapõnin (Engagement Lead) |
| For review by | ITU/Giga at Tuesday weekly call; FiscalAdmin team (Karin Kaup, Arne Lapõnin) |

This bundle is the v0.1 working draft of Topic 2 of KP2 — Government Interoperability Framework. Topic 2 is the legal foundation of the framework: the legal layer, without which no cross-agency exchange is lawful. It produces the first artefact of the runnable build pack — the decree that mandates cross-agency data exchange, makes connection to the bus the default, and protects the citizen's data as it moves. The six videos walk the Strategist through why the platform needs a legal mandate, the five components of an interoperability decree, how to generate each component with Claude against published legal models, how to move the decree through a Ministry of Justice, and how to read the finished decree as the configuration that authorises exactly the exchanges the framework will carry. The register is plain English, eighth-grade level; legal terms are explained in plain words; each subtopic leads with the public-sector outcome the listener can carry out of the video. The six videos are numbered to ITU's topic/subtopic convention (2.1 through 2.6), each reworked to stand alone. All slide specifications follow ITU's text-only branding. Each subtopic carries an AI usage tip with a copy-paste Claude prompt. External references use the convention 'Find the link in the description'.

## 1. Document context

### 1.1 What this document is

This document collects the six video scripts that make up Topic 2 of Knowledge Product 2 (Government Interoperability Framework), with on-screen slide specifications, per-subtopic metadata, AI usage tips and production notes. It is the v0.1 working draft, aligned to ITU's Knowledge Products and Video Materials Guide, submitted for team review and for discussion with ITU/Giga at the Tuesday weekly call.

Topic 2 is the legal foundation of KP2. It establishes why an interoperability platform needs a legal mandate — the legal layer, without which no cross-agency exchange is lawful — walks the five components of an interoperability decree, shows how to generate each with Claude against published legal models, and explains how to move the decree through a Ministry of Justice. It closes by reading the decree as configuration: the legal text that authorises exactly the exchanges in the Use-Case Catalogue.

### 1.2 KP2 is an implementation Knowledge Product

KP2 ships two things. The first is this video bundle, which teaches the build. The second is a runnable build pack — the configuration, prompts, scripts and acceptance checks that stand up a real once-only exchange on the Linkup (X-Road 7.x) federation across the Progressa institutions. Topic 2 produces the first build-pack artefact — the decree, the legal-layer configuration that makes lawful cross-agency exchange possible; the technical configuration follows in the architecture and implementation topics. The structural backbone throughout is the four-layer interoperability model — Technical, Semantic, Organisational, Legal — drawn from the EU European Interoperability Framework and the NIIS X-Road documentation. The four-layer model is cited to those public references, not to PAERA; PAERA anchors the interoperability framing (§3.4.3), the relevant principles including Once-Only (§5.2), the legal layer (§3.2) and the governance setup (§3.1.3).

### 1.3 How to read this document

Section 2 gives Topic 2 at a glance — the six subtopics with persona, runtime and single message. Section 3 contains the full script for each subtopic, with on-screen slide specification, AI usage tip and metadata. Section 4 collects the production notes that apply across all six videos. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate external-link list for ITU's production pipeline.

Within each script section, three rendering conventions are used: italic shaded blocks denote on-screen visual or production cues; regular paragraphs are the spoken voice-over; the slide specification, AI usage tip and metadata follow the script. A reader should be able to imagine the video from these layers without a separate storyboard.

## 2. Topic 2 at a glance

Six standalone subtopic videos. One Strategist persona throughout. Total runtime approximately twenty-eight minutes. Each video has a single message and a single learning outcome, and is discoverable individually via search; the playlist provides navigation but is not required to comprehend any single video.

| # | Title | Single message | Runtime |
| --- | --- | --- | --- |
| 2.1 | Why the platform needs a legal mandate | Without the legal layer, the bus cannot lawfully carry one cross-agency message — the decree is the on-switch, not paperwork. | ~4 min |
| 2.2 | Anatomy of an interoperability decree | A sound decree is five parts; knowing them lets you brief a Ministry of Justice instead of waiting on it. | ~5 min |
| 2.3 | The Explanatory Memorandum and Preamble | Draft the case-for and the recitals with Claude from your Strategic Foundation Document — then check every claim against a real statute. | ~5 min |
| 2.4 | The Draft Articles Package | The operative articles — mandatory connection, once-only, data protection — generated against published models, every clause confirmed, not invented. | ~5 min |
| 2.5 | The Cover Note and Two-Track Regulatory Memo | Give the Ministry of Justice the two routes to enactment, so the decree moves instead of sitting in a queue. | ~4 min |
| 2.6 | The decree as configuration | The finished decree authorises exactly the exchanges in your Use-Case Catalogue — read it as the legal configuration that binds the technical bus. | ~5 min |

## 3. The scripts

## 3.1 Subtopic 2.1 — Why the platform needs a legal mandate

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — national interoperability authority, ministry CIO, Ministry of Justice sponsor, or development-partner lead |
| Target runtime | ~4 min (≈520 spoken words) |
| PAERA anchor | EIF legal layer; PAERA §3.2 (legal layer); §5.2 Principle #5 (Once-Only) |

> **Single message —** _Without the legal layer, the bus cannot lawfully carry one cross-agency message — the decree is the on-switch, not paperwork._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Why the platform needs a legal mandate'. Voice-over begins._

Of the four layers of interoperability, the one most often left for last is the legal layer — and it is the one that decides whether anything actually moves. You can build a perfect technical bus, agree the meaning of the data, and sign every organisational arrangement, and still carry nothing, because no agency will share data without a clear lawful basis to do so. A working bus with no legal mandate is not a working exchange. It is a standing risk that the most cautious official in any agency can stop, and be right to stop.

> _Slide 2 — Title: 'What a missing mandate looks like'. Body, three text rows: 'An official refuses to share data, citing the data-protection law — and cannot be overruled.' 'A project stalls for months waiting for a one-off legal opinion.' 'Data moves anyway, on an unclear basis, and becomes a breach waiting to surface.'_

Without a mandate, you see one of three things. An official refuses to share, citing the data-protection law, and no one can overrule them. A project stalls for months waiting for a legal opinion that covers only that one exchange. Or — worst of all — data moves anyway, on an unclear basis, and becomes a breach waiting to surface. Each of these is a legal-layer failure wearing a technical or political disguise.

> _Slide 3 — Title: 'What the decree does'. Body, four text rows: 'Authorises cross-agency data exchange — makes it lawful in the first place.' 'Makes connection to the bus the default, not optional.' 'Protects the citizen's data — purpose, consent, security.' 'Names the operating authority and its powers.'_

A single legal instrument fixes all three. The decree authorises cross-agency exchange — it makes the sharing lawful in the first place. It makes connecting to the bus the default rather than something each agency may decline. It protects the citizen's data by binding every exchange to a stated purpose, a basis for consent where needed, and security obligations. And it names the operating authority and the powers it holds to run the framework. With the decree in force, exchange is the rule and refusing to connect becomes the exception that has to be justified.

Here is the part that makes the decree a framework artefact and not a project document. The lawful basis is written once, for the whole of government, so that every agency reuses the same mandate instead of each negotiating its own legal opinion for every exchange. That reuse — write the rule once, apply it everywhere — exists only at the level of whole-of-government planning. A project cannot grant itself a mandate that binds other agencies. Only the framework, through the decree, can.

> _Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The decree is the legal on-switch — it makes cross-agency exchange lawful, connection mandatory, and the citizen's data protected.'_

So when you explain the decree to your minister or to a Ministry of Justice, do not present it as paperwork that follows the technical build. Present it as the on-switch. It is the instrument that turns a technically capable bus into a lawfully operating framework. The rest of this topic shows you how to draft it — five components, generated with AI, and made law by a qualified lawyer.

> _Slide 5 — Title: 'Sources'. Body: EU European Interoperability Framework (legal layer); PAERA v1.0 §3.2 (legal layer); §5.2. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Why the platform needs a legal mandate'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP2 / 2.1) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Missing-mandate slide. Three text rows: the refusal, the stall, the unlawful workaround. | The recognition moment — the listener has seen all three. Text-only. |
| 3 | What-the-decree-does slide. Four text rows: authorise, mandate connection, protect data, name the authority. | The core payload. Text-only list. |
| 4 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The 'on-switch' take-home line. |
| 5 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the legal-layer references. |

### AI usage tip — Assess your legal readiness for cross-agency exchange

**What the prompt does:** A Strategist needs to know, before drafting, where the country's current law already permits cross-agency data exchange and where it blocks or is silent — the gap the decree must close. This prompt produces a legal-readiness diagnostic.

**Prompt template (copy-paste into Claude):**

```text
Below is what I know of [country X]'s current legal framework relevant to cross-agency data exchange [paste any relevant instruments: the data-protection law, any e-government or digital-government act, sectoral confidentiality rules, any existing data-sharing provisions]. Assess: (1) where existing law ALREADY permits cross-agency exchange and on what basis; (2) where it BLOCKS exchange (e.g. sectoral secrecy, consent rules) ; (3) where it is SILENT. For each planned exchange type, mark whether it is currently permitted, blocked or unclear. Then identify what a new interoperability decree would need to establish to close the gaps — mandate, lawful basis, data-protection safeguards, mandatory connection, the operating authority's powers. Output: a current-law assessment table plus a bulleted list of what the decree must provide.
```

**Inputs and outputs:** Input: the country's relevant current legal instruments. Output: a legal-readiness assessment table plus a list of what the decree must establish.

**Safeguard:** This is a scoping aid for the legal drafting, not a legal opinion. A qualified lawyer in the jurisdiction must confirm how existing law actually applies before you rely on any 'already permitted' finding — sectoral secrecy rules in particular are easy to miss from a summary.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Why the platform needs a legal mandate |
| YouTube-optimised title | The legal layer: why a working interoperability bus carries nothing without a decree |
| Description (60 words) | You can build a perfect technical bus and still move no data, because no agency shares without a lawful basis. The legal layer is the on-switch. A decree authorises cross-agency exchange, makes connection the default, and protects the citizen's data — written once for the whole of government. Four minutes for digital-government leaders. AI legal-readiness prompt in the description. |
| Tags | interoperability law, data sharing legal basis, government decree, data protection, GovStack, EIF, digital government, once-only |
| Playlist (YouTube) | KP2 — Topic 2: Legal framework — the Decree Drafting Kit |
| ToR §4 coverage | §4.1 (methodology, legal layer); §4.3 (AI integration — legal-readiness prompt) |
| PAERA citations | §3.2 Legal layer; §5.2 Principle #5 (Once-Only) |
| External-link list | EU European Interoperability Framework (legal layer); PAERA v1.0 §3.2; PAERA v1.0 §5.2 |

## 3.2 Subtopic 2.2 — Anatomy of an interoperability decree

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — national interoperability authority, ministry CIO, Ministry of Justice sponsor, or development-partner lead |
| Target runtime | ~5 min (≈580 spoken words) |
| PAERA anchor | EIF legal layer; decree models — Estonia Information Society Services Act, EU Single Digital Gateway Regulation |

> **Single message —** _A sound decree is five parts; knowing them lets you brief a Ministry of Justice instead of waiting on it._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Anatomy of an interoperability decree'. Voice-over begins._

A decree looks, to a non-lawyer, like one dense block of legal text. It is actually five parts, each with a different job and a different reader. If you know the five parts, you stop being a passenger waiting for the Ministry of Justice to produce something, and you become the person who hands them a structured, near-complete package and asks them to perfect it. That shift — from waiting to briefing — is what this topic gives you, and it starts with knowing the anatomy.

> _Slide 2 — Title: 'Five components'. Body, five text rows: 'Explanatory Memorandum — the case for the decree, in plain language.' 'Preamble — the legal authority and the recitals.' 'Draft Articles Package — the operative, binding provisions.' 'Cover Note — the transmittal to the Ministry of Justice.' 'Two-Track Regulatory Memo — the decree-versus-legislation choice.'_

The five parts are these. The Explanatory Memorandum — the case for the decree, in plain language a minister can read: what problem it solves, what it does, why now. The Preamble — the legal recitals that cite the authority under which the decree is made. The Draft Articles Package — the operative provisions, the binding rules themselves. The Cover Note — the short transmittal that goes to the Ministry of Justice with the package. And the Two-Track Regulatory Memo — the document that lays out the choice between a decree and primary legislation, so the decision-maker chooses the instrument with eyes open.

> _Slide 3 — Title: 'Each part has a different reader'. Body, three text rows: 'The minister reads the Memorandum.' 'The lawyer reads the Preamble and the Articles.' 'The decision-maker reads the Two-Track Memo to choose the instrument.'_

Notice that each part has a different reader, which is why they are separate. The minister reads the Memorandum — the case, not the clauses. The lawyer at the Ministry of Justice reads the Preamble and the Articles — the authority and the binding text. And whoever decides how to enact reads the Two-Track Memo to choose between a quick decree and slower primary legislation. Bundle them into one block and each reader has to dig for their part. Separate them, and each reader finds exactly what they need.

> _Slide 4 — Title: 'Why five, not one'. Body, two text rows: 'A package built in parts is reviewable in parts — the Ministry can perfect the Articles without reopening the case.' 'And it is generatable in parts — each component is one focused AI prompt against a published model.'_

There are two reasons to build the decree as five parts rather than one. The first is review: a package built in parts is reviewable in parts. The Ministry of Justice can perfect the legal wording of the Articles without reopening the political case in the Memorandum. The second is production. Each component is a focused, separate drafting task — and each one maps to a single AI prompt, run against a published legal model, producing a reviewed draft of that one component. Five focused drafts are far easier to get right than one sprawling one.

> _Slide 5 — Title: 'The kit, not the decree'. Body, single text block: 'What you produce is a Decree Drafting Kit — the five components as structured drafts. A qualified lawyer turns the kit into a decree that has legal force in your country. The kit speeds the lawyer; it does not replace them.'_

One important framing. What this topic helps you produce is a Decree Drafting Kit — the five components, as structured, well-sourced drafts. It is not a decree with legal force. A qualified lawyer in your jurisdiction turns the kit into an instrument that is valid in your legal system. The kit's job is to give that lawyer a strong, structured starting point so they perfect rather than originate — turning months of drafting into weeks of review. That division of labour, AI-and-architect drafts, lawyer makes law, runs through the whole topic.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A decree is five parts — Memorandum, Preamble, Articles, Cover Note, Two-Track Memo — each with its own reader and its own focused draft.'_

So the anatomy is five parts, each with a job and a reader: the Memorandum makes the case, the Preamble cites the authority, the Articles bind, the Cover Note transmits, and the Two-Track Memo frames the enactment choice. Knowing them is what lets you brief a Ministry of Justice with a near-complete package instead of waiting on one. This topic builds each part, component by component.

> _Slide 7 — Title: 'Sources'. Body: EU European Interoperability Framework (legal layer); decree models — Estonia Information Society Services Act; EU Single Digital Gateway Regulation. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Anatomy of an interoperability decree'. | Standard ITU template. No images. |
| 2 | Five-component slide. Five text rows naming each part and its one-line job. | The spine of the topic. Plain text list. |
| 3 | Different-reader slide. Three text rows mapping component to reader. | Explains why the parts are separate. Text-only. |
| 4 | Why-five slide. Two text rows: reviewable in parts; generatable in parts. | Justifies the structure and previews the AI generation. |
| 5 | Kit-not-decree slide. Single text block on the AI-drafts / lawyer-makes-law division. | The critical safeguard framing, stated up front. Recurs through the topic. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the decree models cited. |

### AI usage tip — Outline your decree's five components from your foundation

**What the prompt does:** A Strategist starting the decree needs a structured outline of all five components, tailored to the country and grounded in the Strategic Foundation Document, before drafting any one of them. This prompt produces that outline.

**Prompt template (copy-paste into Claude):**

```text
I am preparing an interoperability decree for [country X]. Here is the Strategic Foundation Document (or its mandate, scope and principles) [paste it or summarise]. Produce a structured outline of a five-component Decree Drafting Kit: (1) EXPLANATORY MEMORANDUM — list the points the case should make (problem, objective, what the decree does, why now, expected benefit); (2) PREAMBLE — list the kinds of legal authority and recitals it should cite (note these must be confirmed against [country X]'s actual constitution and statutes); (3) DRAFT ARTICLES PACKAGE — list the operative articles needed (scope/definitions, mandatory connection, once-only obligation, data protection and consent, the operating authority's powers, dispute and enforcement); (4) COVER NOTE — what the transmittal to the Ministry of Justice should contain; (5) TWO-TRACK REGULATORY MEMO — the decree-versus-primary-legislation considerations for [country X]. For each component, note which inputs it draws on. Output: the five-part outline with sub-points and input notes.
```

**Inputs and outputs:** Input: the Strategic Foundation Document (or its mandate/scope/principles) and the country. Output: a structured five-component decree outline.

**Safeguard:** The outline is a drafting plan, not legal content — every authority and article it names must be confirmed against the country's actual law by a qualified lawyer. Treat the Preamble's authority list especially as placeholders to verify, not citations.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Anatomy of an interoperability decree |
| YouTube-optimised title | The five parts of an interoperability decree — and how to brief your Ministry of Justice |
| Description (60 words) | A decree isn't one block of legal text — it's five parts, each with its own reader and job: Explanatory Memorandum, Preamble, Draft Articles, Cover Note, and a Two-Track Regulatory Memo. Knowing the anatomy lets you hand a Ministry of Justice a near-complete package instead of waiting on one. Five minutes for digital-government leaders. AI outline prompt in the description. |
| Tags | interoperability decree, legislative drafting, government law, Ministry of Justice, GovStack, EIF, digital government, decree drafting kit |
| Playlist (YouTube) | KP2 — Topic 2: Legal framework — the Decree Drafting Kit |
| ToR §4 coverage | §4.1 (methodology, legal layer); §4.3 (AI integration — decree-outline prompt) |
| PAERA citations | §3.2 Legal layer (the decree models are cited to published statutes, not PAERA) |
| External-link list | EU European Interoperability Framework (legal layer); Estonia Information Society Services Act; EU Single Digital Gateway Regulation |

## 3.3 Subtopic 2.3 — The Explanatory Memorandum and Preamble

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — national interoperability authority, ministry CIO, Ministry of Justice sponsor, or development-partner lead |
| Target runtime | ~5 min (≈560 spoken words) |
| PAERA anchor | PAERA §3.2 (legal layer); EU EIF; input: the Strategic Foundation Document |

> **Single message —** _Draft the case-for and the recitals with Claude from your Strategic Foundation Document — then check every claim against a real statute._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The Explanatory Memorandum and Preamble'. Voice-over begins._

The first two components of the decree are the ones a non-lawyer can lead on, because they are about the case and the context rather than the binding rules. The Explanatory Memorandum makes the case for the decree. The Preamble sets out the legal authority and the recitals. Both can be drafted from a document you already have — the Strategic Foundation Document from Topic 1 — and both are exactly the kind of focused, well-bounded drafting task an AI assistant does well, with you reviewing.

> _Slide 2 — Title: 'The Explanatory Memorandum — the case'. Body, four text rows: 'The problem the decree solves.' 'What the decree does, in plain language.' 'Why now — the cost of waiting.' 'The expected benefit to citizens and the state.'_

The Explanatory Memorandum is the case, written for the minister and the cabinet, not the lawyer. It states the problem the decree solves — fragmentation, the citizen asked the same thing many times. It says what the decree does, in plain language. It says why now — the cost of another year without a mandate. And it names the expected benefit. If you wrote a good Strategic Foundation Document in Topic 1, the Memorandum is largely a translation of it into the form a Ministry of Justice expects. That is a task you can hand to Claude with the foundation document as input.

> _Slide 3 — Title: 'The Preamble — the authority'. Body, three text rows: 'The recitals — the findings the decree rests on.' 'The legal authority — the constitutional or statutory power to make this decree.' 'Every citation a [confirm] until a lawyer verifies it.'_

The Preamble is different. It sets out the recitals — the formal findings the decree rests on — and, critically, the legal authority: the constitutional or statutory power under which the decree is made. Here the AI is useful for structure and for a first draft of the recitals, but every citation of authority is a placeholder — a [confirm] — until a qualified lawyer verifies that the cited power actually exists and actually supports a decree of this kind in your country. An invented or wrong authority citation is the fastest way to have the whole decree sent back. So the Preamble is generated as a scaffold, then verified line by line.

> _Slide 4 — Title: 'Generate, then confirm'. Body, two text rows: 'gif-decree-draft turns the foundation document into a Memorandum draft and a Preamble scaffold.' 'You confirm every legal citation against a real statute before the package goes anywhere.'_

This is the pattern for the whole Decree Drafting Kit, and it appears first here. The AI play — we call it gif-decree-draft — takes your Strategic Foundation Document and produces a Memorandum draft and a Preamble scaffold in minutes. That is the easy ninety per cent. The hard, essential ten per cent is yours: confirm every legal citation against a real statute, soften every claim the evidence does not support, and mark anything unverified as a [confirm] for the lawyer. Generate fast; confirm carefully. The AI accelerates the drafting; it does not get the law right for you.

> _Slide 5 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Generate the Memorandum and Preamble from your foundation document — then confirm every legal citation against a real statute before anyone relies on it.'_

So the first two components come quickly, because the Memorandum restates a document you already have and the Preamble is a scaffold to be verified. Lead on the case, generate the drafts, and confirm the law. The hardest component is the Draft Articles — the binding rules themselves.

> _Slide 6 — Title: 'Sources'. Body: PAERA v1.0 §3.2 (legal layer); EU European Interoperability Framework; the Strategic Foundation Document (Topic 1). Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The Explanatory Memorandum and Preamble'. | Standard ITU template. No images. |
| 2 | Memorandum slide. Four text rows: problem, what it does, why now, benefit. | The case structure. Text-only. |
| 3 | Preamble slide. Three text rows: recitals, authority, [confirm] discipline. | Introduces the [confirm] placeholder convention. Text-only. |
| 4 | Generate-then-confirm slide. Two text rows: gif-decree-draft generates; you confirm citations. | Names the AI play and the division of labour. |
| 5 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 6 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

### AI usage tip — Generate the Explanatory Memorandum and Preamble (gif-decree-draft)

**What the prompt does:** A Strategist with a Strategic Foundation Document needs a first draft of the decree's Memorandum and a Preamble scaffold. This is the gif-decree-draft play for the first two components — fast draft, citations flagged for confirmation.

**Prompt template (copy-paste into Claude):**

```text
Below is the Strategic Foundation Document for [country X]'s Government Interoperability Framework [paste it]. Draft two components of an interoperability decree. (1) EXPLANATORY MEMORANDUM — in plain language for a minister: the problem, what the decree does, why now, and the expected benefit; 1-2 pages. (2) PREAMBLE — a scaffold of formal recitals leading to the enacting clause, AND a list of the legal authorities the decree would need to cite (constitutional articles, enabling statutes). CRITICAL: for every legal authority, output a placeholder in the form [confirm: <the kind of authority needed>] rather than naming a specific article or act — you do not have [country X]'s statute book and must not invent citations. Flag any factual claim in the Memorandum that would need evidence. Output: the Memorandum draft, then the Preamble scaffold, then a list of every [confirm] a lawyer must resolve.
```

**Inputs and outputs:** Input: the Strategic Foundation Document. Output: a Memorandum draft, a Preamble scaffold, and a list of [confirm] items for legal review.

**Safeguard:** Never let a [confirm] placeholder reach the Ministry of Justice as if it were a real citation. The Memorandum may be near-final; the Preamble is a scaffold whose every legal authority must be supplied and verified by a qualified lawyer in the jurisdiction.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The Explanatory Memorandum and Preamble |
| YouTube-optimised title | Draft a decree's case and recitals with AI — then verify every citation |
| Description (60 words) | The first two parts of an interoperability decree — the Explanatory Memorandum (the case) and the Preamble (the legal authority) — can be drafted from your Strategic Foundation Document. AI generates fast; you confirm every legal citation against a real statute. Five minutes for digital-government leaders. The gif-decree-draft prompt for both components is in the description. |
| Tags | explanatory memorandum, decree preamble, legislative drafting, AI legal drafting, interoperability decree, GovStack, digital government |
| Playlist (YouTube) | KP2 — Topic 2: Legal framework — the Decree Drafting Kit |
| ToR §4 coverage | §4.1 (methodology, legal layer); §4.3 (AI integration — gif-decree-draft, components 1-2) |
| PAERA citations | §3.2 Legal layer |
| External-link list | PAERA v1.0 §3.2; EU European Interoperability Framework |

## 3.4 Subtopic 2.4 — The Draft Articles Package

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — national interoperability authority, ministry CIO, Ministry of Justice sponsor, or development-partner lead |
| Target runtime | ~5 min (≈580 spoken words) |
| PAERA anchor | Estonia Information Society Services Act; EU Once-Only Regulation; PAERA §5.2 #5 (Once-Only); national data-protection framework |

> **Single message —** _The operative articles — mandatory connection, once-only, data protection — generated against published models, every clause confirmed, not invented._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The Draft Articles Package'. Voice-over begins._

The Draft Articles are the heart of the decree — the operative provisions, the binding rules. This is the component where precision matters most, where the cost of getting it wrong is highest, and where the discipline of generating against a published model, rather than from imagination, matters more than anywhere else. The articles are where the legal layer stops being an idea and becomes enforceable.

> _Slide 2 — Title: 'The core articles'. Body, six text rows: 'Scope and definitions — what and who the decree covers.' 'Mandatory connection — agencies shall connect to the bus.' 'Once-only obligation — do not re-ask for data the state holds.' 'Data protection and consent — purpose, basis, safeguards.' 'The operating authority — its powers and duties.' 'Disputes and enforcement — what happens when an agency refuses.'_

A sound interoperability decree carries a recognisable set of articles. Scope and definitions — what exchanges and which agencies the decree covers. Mandatory connection — that designated agencies shall connect to the bus, turning interoperability from optional to required. The once-only obligation — that an agency shall not ask a person for data the state already holds and can lawfully fetch. Data protection and consent — the purpose limits, the lawful basis, the security safeguards. The operating authority's powers and duties. And disputes and enforcement — what happens, and who decides, when an agency refuses to connect or to share.

> _Slide 3 — Title: 'Generated against a model, never invented'. Body, two text rows: 'Each article is drafted against a named published law — Estonia's Information Society Services Act, the EU Once-Only Regulation.' 'An article with no published model behind it is a [confirm], not a clause.'_

Here is the rule that keeps the articles safe. Each article is drafted against a named, published legal model — Estonia's Information Society Services Act for the structure of mandatory connection, the EU's Once-Only provisions for the once-only obligation, a recognised data-protection regime for the safeguards. The AI's job is to adapt a real, published article to your context — not to invent plausible-sounding legal text from nothing. Invented legal text is the single most dangerous output in this whole knowledge product: it reads convincingly and is worthless or harmful. If no published model stands behind an article, it is a [confirm] for a lawyer, not a clause you ship.

> _Slide 4 — Title: 'Where business and IT meet'. Body, single text block: 'The articles are where the legal-and-policy side and the IT side must agree in one binding text — the mandatory-connection and once-only articles bind exactly the exchanges the architects will build. The decree is the rare artefact where business and IT share one language.'_

There is a reason the Strategist, not only the lawyer, must understand these articles. The mandatory-connection article and the once-only article describe, in legal language, exactly the exchanges the architects will build in the technical layer. If the legal-and-policy side and the IT side do not agree on what those articles cover, the decree will authorise one thing and the bus will carry another. The articles are where the two sides meet — the decree is the rare artefact where business and IT share one language, a single binding text that the policy side writes and the technical side implements. Getting them aligned here saves a painful discovery later.

> _Slide 5 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Generate each article against a named published law, confirm every clause with a lawyer, and make the binding rules match exactly the exchanges you will build.'_

So the Draft Articles are generated, one article at a time, each against a named published model, each carrying its [confirm] flags until a lawyer signs it off — and each aligned with the exchanges the framework will actually carry. This is the most demanding component and the most important. Once drafted, the finished package goes to the Ministry of Justice.

> _Slide 6 — Title: 'Sources'. Body: Estonia Information Society Services Act; EU Once-Only Regulation; PAERA v1.0 §5.2 #5 (Once-Only); national data-protection framework. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The Draft Articles Package'. | Standard ITU template. No images. |
| 2 | Core-articles slide. Six text rows naming each operative article. | The substantive payload. Plain text list, readable on mobile. |
| 3 | Generate-against-a-model slide. Two text rows: named model per article; no model means [confirm]. | The anti-invention discipline — the most important safeguard in the topic. |
| 4 | Business-IT-meet slide. Single text block on the articles binding the exchanges the architects build. | Carries the shared-language argument. Text-only. |
| 5 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 6 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the legal models cited. |

### AI usage tip — Draft one operative article against a published model (gif-decree-draft)

**What the prompt does:** A Strategist drafting the articles needs each one generated against a real, named legal model rather than invented — the gif-decree-draft play for the binding provisions, with strict anti-invention discipline.

**Prompt template (copy-paste into Claude):**

```text
I am drafting one article of an interoperability decree for [country X]: the [mandatory-connection / once-only / data-protection / operating-authority / dispute-resolution] article. Below is a published legal model to adapt from [paste or name the source — e.g. the relevant section of Estonia's Information Society Services Act, or the EU Once-Only provision]. Adapt this published model into a draft article for [country X]'s decree. Rules: (1) stay close to the structure and force of the published model; (2) where the model refers to an institution, law or value specific to its own country, replace it with a [confirm: <what is needed for country X>] placeholder rather than inventing the [country X] equivalent; (3) do not add obligations that are not in the model or clearly required by the framework's principles; (4) flag any term that has a specific legal meaning needing local-counsel review. Output: the draft article, then a list of every [confirm] and every flagged term.
```

**Inputs and outputs:** Input: which article, plus a named published legal model to adapt. Output: a draft article with [confirm] placeholders and flagged terms.

**Safeguard:** If you cannot supply a published model for an article, do not let the AI generate it from scratch — invented legal text reads convincingly and can be harmful. Every article and every [confirm] must be reviewed and made valid by a qualified lawyer in the jurisdiction before the package is filed.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The Draft Articles Package |
| YouTube-optimised title | Drafting the binding articles of an interoperability decree — without inventing law |
| Description (60 words) | The Draft Articles are the binding heart of the decree: scope, mandatory connection, the once-only obligation, data protection, the operating authority, enforcement. Each is generated against a named published law — never invented — and confirmed by a lawyer. They must bind exactly the exchanges the architects build. Five minutes for digital-government leaders. The gif-decree-draft article prompt is in the description. |
| Tags | draft articles, interoperability decree, mandatory connection, once-only, data protection law, legislative drafting, GovStack, digital government |
| Playlist (YouTube) | KP2 — Topic 2: Legal framework — the Decree Drafting Kit |
| ToR §4 coverage | §4.1 (methodology, legal layer); §4.3 (AI integration — gif-decree-draft, the articles) |
| PAERA citations | §5.2 Principle #5 (Once-Only) — the once-only article; legal models cited to published statutes |
| External-link list | Estonia Information Society Services Act; EU Once-Only Regulation; PAERA v1.0 §5.2; national data-protection framework reference |

## 3.5 Subtopic 2.5 — The Cover Note and Two-Track Regulatory Memo

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — national interoperability authority, ministry CIO, Ministry of Justice sponsor, or development-partner lead |
| Target runtime | ~4 min (≈480 spoken words) |
| PAERA anchor | EU EIF (legal & governance layers); national legislative-process references |

> **Single message —** _Give the Ministry of Justice the two routes to enactment, so the decree moves instead of sitting in a queue._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The Cover Note and Two-Track Regulatory Memo'. Voice-over begins._

You can have a perfect Memorandum, Preamble and set of Articles, and still watch the decree sit untouched in a Ministry of Justice queue for a year. The last two components of the kit exist to stop that. The Cover Note transmits the package clearly, and the Two-Track Regulatory Memo gives the decision-maker a real, framed choice about how to enact — so the answer is a decision, not a delay.

> _Slide 2 — Title: 'The Cover Note'. Body, three text rows: 'What this package is, in three lines.' 'What is being asked of the Ministry of Justice, specifically.' 'The timeline, and the cost of slipping it.'_

The Cover Note is short and does three things. It says what the package is, in three lines a busy official reads in thirty seconds. It says exactly what is being asked — review and perfect the Articles, confirm the Preamble's authorities, advise on the route to enactment — so the request is specific rather than 'please look at this'. And it states the timeline and what it costs the country if the decree slips, so the package carries its own urgency. A clear ask is far more likely to move than a thick document with no covering request.

> _Slide 3 — Title: 'Two routes to enactment'. Body, two columns. Left 'Decree / regulation': 'Executive act — faster.' 'Lighter to amend later.' 'Force depends on existing enabling law.' Right 'Primary legislation': 'Through parliament — slower.' 'Strongest, most durable force.' 'Can create authority that does not yet exist.'_

The Two-Track Regulatory Memo lays out the choice honestly. One route is a decree or regulation — an executive act. It is faster, it is lighter to amend as the framework grows, but its force depends on an enabling law already existing. The other route is primary legislation — through parliament. It is slower, but it carries the strongest, most durable force, and it can create authority that does not yet exist in current law. Which route fits depends on your country's legal system and on how much force the mandatory-connection obligation needs to carry against a reluctant agency.

> _Slide 4 — Title: 'Let the decision-maker choose with eyes open'. Body, single text block: 'The memo does not hide the trade-off — speed against durability and force. It frames the decision so it can be made quickly, by the person whose decision it is, rather than deferred because no one laid out the options.'_

The point of the memo is not to push one route. It is to frame the trade-off — speed against durability and legal force — so the decision can actually be made, quickly, by the person whose decision it is. Many interoperability efforts stall here, not because the answer is hard, but because no one laid the options out cleanly and the choice kept getting deferred. A decree that sits in a queue for a year is a framework that has not started. The kit's last job is to make the enactment decision easy to take.

> _Slide 5 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Transmit the package with a specific ask, and frame the decree-versus-legislation choice — so enactment is a decision, not a delay.'_

So the Cover Note and the Two-Track Memo are what carry a finished kit across the line. A specific ask that an official can act on, and a clean framing of the enactment choice that a decision-maker can settle in one meeting. With these, the package moves. What remains is to read the finished decree back against the framework, as configuration.

> _Slide 6 — Title: 'Sources'. Body: EU European Interoperability Framework (legal & governance layers); national legislative-process references. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The Cover Note and Two-Track Regulatory Memo'. | Standard ITU template. No images. |
| 2 | Cover Note slide. Three text rows: what it is, the specific ask, the timeline. | The transmittal structure. Text-only. |
| 3 | Two-routes slide. Two-column text: decree/regulation vs primary legislation, three rows each. | The core comparison. Text columns, no icons. |
| 4 | Eyes-open slide. Single text block on framing the trade-off for a quick decision. | The 'why this unsticks the queue' beat. |
| 5 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 6 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

### AI usage tip — Draft the Cover Note and the two-track options memo

**What the prompt does:** A Strategist ready to file the decree package needs a clear transmittal note and a balanced decree-versus-legislation memo for the decision-maker. This prompt drafts both.

**Prompt template (copy-paste into Claude):**

```text
I am transmitting an interoperability decree package to the Ministry of Justice in [country X]. Draft two short documents. (1) COVER NOTE — three short paragraphs: what the package contains, the specific actions requested of the Ministry (review and perfect the Articles, confirm the Preamble authorities, advise on enactment route), and the timeline with the cost of delay. (2) TWO-TRACK REGULATORY MEMO — a balanced one-page comparison of enacting via (a) a decree or executive regulation versus (b) primary legislation, covering speed, durability, legal force, amendability, and the level of authority each can create. Note that the right choice depends on [country X]'s legal system and on how much force the mandatory-connection obligation must carry — and mark [confirm: whether an enabling law already exists] where that determines whether a decree is even available. Do not recommend one route as universally correct. Output: the Cover Note, then the Two-Track Memo.
```

**Inputs and outputs:** Input: the country and the package contents. Output: a Cover Note and a balanced two-track enactment memo.

**Safeguard:** Whether a decree has legal force at all, versus requiring primary legislation, is a jurisdiction-specific legal question — present the memo as options for the country's own counsel and decision-makers to choose between, never as a settled recommendation.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The Cover Note and Two-Track Regulatory Memo |
| YouTube-optimised title | How to get an interoperability decree out of the Ministry of Justice queue |
| Description (60 words) | A finished decree can still stall in a Ministry of Justice queue. The Cover Note transmits the package with a specific ask; the Two-Track Regulatory Memo frames the decree-versus-primary-legislation choice — speed against durability and force — so enactment is a decision, not a delay. Four minutes for digital-government leaders. The AI prompt for both documents is in the description. |
| Tags | regulatory memo, decree enactment, primary legislation, Ministry of Justice, interoperability decree, legislative process, GovStack, digital government |
| Playlist (YouTube) | KP2 — Topic 2: Legal framework — the Decree Drafting Kit |
| ToR §4 coverage | §4.1 (methodology, legal layer); §4.3 (AI integration — cover note + two-track memo prompt) |
| PAERA citations | (legal & governance layers cited to EIF; legislative process cited to national references) |
| External-link list | EU European Interoperability Framework (legal & governance layers); national legislative-process references |

## 3.6 Subtopic 2.6 — The decree as configuration

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — national interoperability authority, ministry CIO, Ministry of Justice sponsor, or development-partner lead |
| Target runtime | ~5 min (≈560 spoken words) |
| PAERA anchor | PAERA §3.2 (legal layer); EU EIF; input: the Use-Case Catalogue |

> **Single message —** _The finished decree authorises exactly the exchanges in your Use-Case Catalogue — read it as the legal configuration that binds the technical bus._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The decree as configuration'. Voice-over begins._

There is one last thing to do with a finished decree before it goes to the bus, and it is the step most teams skip. Read the decree back against the Use-Case Catalogue from Topic 1, and check that the two match. The decree is not a document that sits beside the technical framework. It is the legal configuration of it — the binding text that says which exchanges are lawful and required. If the decree and the catalogue disagree, the framework will authorise one thing and carry another.

> _Slide 2 — Title: 'Two checks against the catalogue'. Body, two text rows: 'Coverage — every exchange in the catalogue has a lawful basis in the decree.' 'Scope discipline — no article authorises an exchange that is not in the catalogue or the principles.'_

Run two checks. The first is coverage: every exchange in your Use-Case Catalogue must have a lawful basis somewhere in the decree. If the catalogue says the examination authority will fetch a learner's identity from the identity authority, the decree's articles must make that exchange lawful. A catalogue entry with no legal basis is an exchange you cannot build. The second check is the reverse — scope discipline: no article should authorise an exchange that is not in your catalogue or required by your principles. A decree that grants broader data-sharing powers than the framework actually needs is a privacy risk and a political liability. The decree should authorise exactly the framework's exchanges. No less, and no more.

> _Slide 3 — Title: 'How the decree binds the bus'. Body, two text rows: 'Mandatory-connection article → the bus must have those agencies as members.' 'Once-only obligation → the exchange is required, not a favour one agency may decline.'_

Once it matches, the decree binds the technical bus in concrete ways. The mandatory-connection article means the agencies it names must actually become members on the bus — the legal text creates the obligation that the technical onboarding fulfils. The once-only obligation means a covered exchange is required, not a favour the providing agency may decline. So the legal layer and the technical layer are two views of the same thing: the decree says, in law, what the bus does, in software. Read together, they are configuration — one binding, one running.

> _Slide 4 — Title: 'The decree is the legal config of the build pack'. Body, single text block: 'In the runnable build pack, the decree is the legal-layer artefact, and its acceptance check is this match: every catalogue exchange has a lawful basis, and no article over-reaches. Pass that check, and the legal layer is done.'_

This is why, in the runnable build pack that accompanies KP2, the decree is the legal-layer artefact — the first real configuration the framework produces. And its acceptance check is exactly the match we just ran: every catalogue exchange has a lawful basis in the decree, and no article over-reaches beyond the catalogue and the principles. When that check passes, the legal layer of the framework is genuinely done — not a document filed and forgotten, but a verified configuration the rest of the build depends on. The once-only demonstration later in the knowledge product runs under this decree.

> _Slide 5 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A decree is finished not when it is signed, but when it authorises exactly the exchanges your framework will carry — no less, and no more.'_

So read your decree as configuration. A decree is finished not when it is signed, but when it authorises exactly the exchanges your framework will carry — every one with a lawful basis, and none beyond what the framework needs. That match is the legal layer's acceptance check, and passing it hands a verified legal configuration to the architects who build the bus. That is the whole job of Topic 2: not paperwork, but the on-switch, checked.

> _Slide 6 — Title: 'Sources'. Body: PAERA v1.0 §3.2 (legal layer); EU European Interoperability Framework; the Use-Case Catalogue (Topic 1). Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The decree as configuration'. | Standard ITU template. No images. |
| 2 | Two-checks slide. Two text rows: coverage; scope discipline. | The core acceptance logic. Text-only. |
| 3 | How-it-binds slide. Two text rows: mandatory connection → members; once-only → required exchange. | Connects legal text to technical reality. Text-only. |
| 4 | Legal-config-of-the-build-pack slide. Single text block naming the decree as the legal-layer artefact and its acceptance check. | The build-pack connection — the decree is a verified config, not a filed document. |
| 5 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line that closes the topic. |
| 6 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

### AI usage tip — Check your decree authorises exactly your catalogue (the legal acceptance check)

**What the prompt does:** A Strategist with a draft decree and a Use-Case Catalogue needs to verify the two match — every exchange covered, nothing over-reaching. This prompt runs the legal-layer acceptance check.

**Prompt template (copy-paste into Claude):**

```text
Below are two things for [country X]'s interoperability framework: (A) the Use-Case Catalogue — the list of cross-agency exchanges the framework intends to carry [paste it]; and (B) the draft Articles of the interoperability decree [paste them]. Run two checks. COVERAGE: for each exchange in the catalogue, identify which article(s) of the decree provide its lawful basis, or flag it as NOT COVERED if none does. SCOPE: for each article that authorises or compels data exchange, check whether the exchanges it permits are all within the catalogue and the framework's principles, or whether it OVER-REACHES by authorising broader sharing than the framework needs. Output: a coverage table (catalogue exchange / authorising article / status), a list of NOT COVERED exchanges, and a list of OVER-REACHING articles — each with a one-line note on the fix.
```

**Inputs and outputs:** Input: the Use-Case Catalogue and the draft decree articles. Output: a coverage table plus lists of uncovered exchanges and over-reaching articles.

**Safeguard:** This check tests alignment between two of your own documents — it is not a ruling on whether an article is lawful or well-drafted. A covered exchange can still rest on a legally defective article; keep the lawyer's review of the articles separate from this catalogue-match check.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The decree as configuration |
| YouTube-optimised title | A decree is finished when it authorises exactly what your framework carries — here's the check |
| Description (60 words) | Read your finished decree against the Use-Case Catalogue: every exchange must have a lawful basis, and no article should over-reach beyond what the framework needs. The decree is the legal configuration of the build pack, and that match is its acceptance check. Five minutes for digital-government leaders. The AI legal-acceptance-check prompt is in the description. |
| Tags | decree as configuration, legal acceptance check, use case catalogue, interoperability decree, scope discipline, data protection, GovStack, digital government |
| Playlist (YouTube) | KP2 — Topic 2: Legal framework — the Decree Drafting Kit |
| ToR §4 coverage | §4.1 (methodology, legal layer); §4.3 (AI integration — legal acceptance-check prompt); §4.5 (build-pack acceptance) |
| PAERA citations | §3.2 Legal layer |
| External-link list | PAERA v1.0 §3.2; EU European Interoperability Framework; the Use-Case Catalogue (Topic 1) |

## 4. Production notes

### 4.1 Design standard — the split-screen usability test

The bar for every video in Topic 2 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to follow along and act on the other half. For the videos in Topic 2, 'act' means draft the corresponding part of the decree — the explanatory memorandum, the preamble, an article in the draft articles package, the cover note, or the two-track regulatory memo. Each subtopic's AI usage tip operationalises this: the prompt is an instance of gif-decree-draft, and its output is a component of the decree the video is teaching, ready to refine and take to legal counsel.

### 4.2 Slide branding

Every slide follows the ITU template per the Knowledge Products and Video Materials Guide §3.i: Title text Arial Bold 28pt; Body text Arial 18pt; Background colour #E5F5FB. Text only — no images. Diagrams and text boxes are permitted only where strictly necessary; where used, all labels remain plain text. No country emblems, no agency logos. The recurring single-sentence summary slide that closes each subtopic uses 28pt body type so the line is screenshot-friendly for the listener's own briefings.

### 4.3 No individuals on screen

Per the Guide §3 Note, no individuals appear in any video. Two options are open: an AI-avatar narrator generated by ITU's production pipeline, or computer-screen-only voice-over with no narrator visible. The choice is ITU's; the scripts are agnostic to it. No human narrator is shown in any video.

### 4.4 Voice and tone

Direct address ('your country', 'your minister', 'your agencies'). Plain language at approximately an eighth-grade English level. Examples are drawn from African public-sector reality — donor-funded fragmentation, the citizen filling the same form at five counters, the cross-ministry coordination meeting. The four-layer model, once-only, X-Road and the Progressa institutions are introduced in plain words; the deeper technical configuration is deferred to the architecture and implementation topics. Honest framing throughout: interoperability is a sustained build, not a procurement.

### 4.5 External-link list and 'Find the link in the description'

Every subtopic includes an external-link list in its metadata, and every script references external materials with the convention 'Find the link in the description' rather than reading URLs aloud. ITU's production pipeline compiles the per-video list into the YouTube description. The aggregate list across the six subtopics is in Section 6.

### 4.6 GitBook companion and the build pack

Each subtopic ships with the video script, slide specification, AI usage tip and metadata. The GitBook companion content — written, in-depth implementation guidance — is produced as a parallel deliverable mirroring the same subtopic numbering. For KP2, the GitBook companion links each subtopic to the runnable build pack (KP2-GIF/KP2-build-pack): the five decree components produced in Topic 2 are the legal-layer configuration of the build pack — the first artefact the framework actually ships, and the lawful basis the Topic-5 once-only demonstration runs under.

## 5. Open calibration items

The v0.1 drafting raised the editorial and structural decisions below. These are forwarded for ITU's discussion at the Tuesday weekly call.

### 5.1 Legal-source claims to verify

The decree draws on published legal models that must be confirmed against the actual source before final lock, because the Draft Articles Package (2.4) leans on them: the Estonia Information Society Services Act; the EU Single Digital Gateway Regulation and the EU Once-Only Technical System / Once-Only Regulation; and the alignment of PAERA §3.2 as the legal-layer chapter. Confirm wording and currency of each — statutes are amended, and a superseded clause cited as current is the kind of error a Ministry of Justice reviewer will catch.

### 5.2 Editorial tone calls

Sharp lines that deserve a deliberate keep / soften / cut decision: 'the decree is the on-switch, not paperwork' (2.1); 'a decree that sits in a Ministry of Justice queue for a year is a framework that has not started' (2.5); 'generate the draft, but only a lawyer makes it law' (2.3, 2.4).

### 5.3 Legal-adaptation calls (the important one)

The Decree Drafting Kit produces a MODEL, not a jurisdiction-ready instrument, and the videos must say so. Two confirmations are needed. (1) The right legal instrument differs by legal system — a decree, a regulation, or primary legislation — and whether a decree carries sufficient force depends on the country; the Two-Track Regulatory Memo (2.5) frames this choice and should be validated with ITU as the correct way to present it. (2) Every article gif-decree-draft generates carries a [confirm] until a qualified lawyer in the jurisdiction has checked it; no subtopic may imply the AI output is legally final. The discipline the kit teaches is explicit: gif-decree-draft produces a reviewed draft; counsel makes it law.

### 5.4 Dependencies and consistency with the demonstration

The decree is the legal-layer artefact the Topic-5 once-only demonstration runs under, so the worked exchange — PNEA pre-filling identity from PNIA and enrolment from PLR — must be among the exchanges the decree authorises (the decree-as-configuration check in 2.6). The Progressa demonstration membership (the four-server canon — MoEYS/PEMIS, PNEA, PLR, PNIA) and the schedule / Linkup cloud-access items carried from Topic 1 still apply; see the KP2 Plan §7 and the KP2–4 Delivery Plan §6.

## 6. Annex — aggregate external-link list

Compiled across the six subtopics for ITU's video production pipeline. To be split per subtopic and inserted into the corresponding YouTube descriptions.

| Subtopic | Sources referenced |
| --- | --- |
| 2.1 | EU European Interoperability Framework (EIF) — legal layer; PAERA v1.0 §3.2 (legal layer) and §3.4.3 (interoperability framing). |
| 2.2 | EU EIF legal layer; published interoperability laws as decree models — Estonia Information Society Services Act; EU Single Digital Gateway Regulation. |
| 2.3 | PAERA v1.0 §3.2 (legal layer); EU EIF; the Strategic Foundation Document (Topic 1 input). |
| 2.4 | Estonia Information Society Services Act; EU Once-Only Regulation; PAERA v1.0 §5.2 Principle #5 (Once-Only); national data-protection framework (GDPR-style reference). |
| 2.5 | EU EIF (legal & governance layers); national legislative-process references (decree vs primary legislation). |
| 2.6 | PAERA v1.0 §3.2 (legal layer); the Use-Case Catalogue (Topic 1 input); EU EIF. |

All references are publicly accessible and verifiable. The Tuesday review may add or refine items based on ITU's preferred citation style for the YouTube channel.

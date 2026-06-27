<!-- GENERATED from build_kp2_module1_v01.js by bundle_to_md.py — do not hand-edit; edit the build script and regenerate. -->

# KP2 Module 1 — Video Script Bundle v0.1 (ITU-aligned)

| Field | Value |
| --- | --- |
| Document | Video script bundle for Topic 1 of KP2 |
| Version | v0.1 — aligned to ITU Knowledge Products and Video Materials Guide |
| Date | 27 June 2026 |
| Contract reference | RFQ-S-GIGA-2026-022 / Purchase Order #334304 (signed 24 April 2026) |
| Topic persona | S (Strategist) — national interoperability authority, ministry CIO, Ministry of Justice sponsor, or development-partner lead |
| Subtopics | Seven subtopics (1.1 – 1.7), each shipped as one ~5-minute standalone video |
| Topic runtime | Approximately 31 minutes across seven standalone videos |
| Build pack | KP2-GIF/KP2-build-pack — the runnable Progressa interoperability slice this topic introduces |
| Prepared by | FiscalAdmin OÜ — Aare Lapõnin (Engagement Lead) |
| For review by | ITU/Giga at Tuesday weekly call; FiscalAdmin team (Karin Kaup, Arne Lapõnin) |

This bundle is the v0.1 working draft of Topic 1 of KP2 — Government Interoperability Framework — the first implementation Knowledge Product. Where KP1 taught a country how to plan an Enterprise Architecture, KP2 teaches how to build the interoperability layer over that plan: the legal mandate, the governance, the technical bus, the standards portfolio, and the member-onboarding workflow — demonstrated end-to-end as a real once-only exchange on the Linkup federation. Topic 1 is the Strategist-facing entry point: why interoperability cannot be bought but must be built, the four layers it is made of, the once-only outcome it is for, and the three foundation artefacts that start the work. The register is plain English, eighth-grade level; architectural terms sit in the body, not the headline; each subtopic leads with the public-sector outcome the listener can carry out of the video. The seven videos are numbered to ITU's topic/subtopic convention (1.1 through 1.7), each reworked to stand alone. All slide specifications follow ITU's text-only branding. Each subtopic carries an AI usage tip with a copy-paste Claude prompt. External references use the convention 'Find the link in the description'.

## 1. Document context

### 1.1 What this document is

This document collects the seven video scripts that make up Topic 1 of Knowledge Product 2 (Government Interoperability Framework), with on-screen slide specifications, per-subtopic metadata, AI usage tips and production notes. It is the v0.1 working draft, aligned to ITU's Knowledge Products and Video Materials Guide, submitted for team review and for discussion with ITU/Giga at the Tuesday weekly call.

Topic 1 is the Strategist-facing entry point to KP2. It establishes why interoperability cannot be procured but must be planned and built, presents the four layers of interoperability, names once-only as the outcome the framework is for, and equips the listener with the three foundation artefacts that begin the work — the Strategic Foundation Document, the Use-Case Catalogue, and the stakeholder map. It closes by pointing to the real-world evidence the framework is drawn from.

### 1.2 KP2 is an implementation Knowledge Product

KP2 ships two things. The first is this video bundle, which teaches the build. The second is a runnable build pack — the configuration, prompts, scripts and acceptance checks that stand up a real once-only exchange on the Linkup (X-Road 7.x) federation across the Progressa institutions. Topic 1 introduces the framework and the foundation artefacts; the technical configuration is generated and demonstrated in the later topics (architecture and standards; implementation and the live demonstration). The structural backbone throughout is the four-layer interoperability model — Technical, Semantic, Organisational, Legal — drawn from the EU European Interoperability Framework and the NIIS X-Road documentation. The four-layer model is cited to those public references, not to PAERA; PAERA anchors the interoperability framing (§3.4.3), the relevant principles including Once-Only (§5.2), the legal layer (§3.2) and the governance setup (§3.1.3).

### 1.3 How to read this document

Section 2 gives Topic 1 at a glance — the seven subtopics with persona, runtime and single message. Section 3 contains the full script for each subtopic, with on-screen slide specification, AI usage tip and metadata. Section 4 collects the production notes that apply across all seven videos. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate external-link list for ITU's production pipeline.

Within each script section, three rendering conventions are used: italic shaded blocks denote on-screen visual or production cues; regular paragraphs are the spoken voice-over; the slide specification, AI usage tip and metadata follow the script. A reader should be able to imagine the video from these layers without a separate storyboard.

## 2. Topic 1 at a glance

Seven standalone subtopic videos. One Strategist persona throughout. Total runtime approximately thirty-one minutes. Each video has a single message and a single learning outcome, and is discoverable individually via search; the playlist provides navigation but is not required to comprehend any single video.

| # | Title | Single message | Runtime |
| --- | --- | --- | --- |
| 1.1 | Why interoperability can't be bought, only built | Procurement rules can require interoperability. Only whole-of-government planning delivers it. That is why the answer is a framework, not a clause in a contract. | ~5 min |
| 1.2 | The four layers of interoperability | Interoperability fails at whichever of the four layers — Technical, Semantic, Organisational, Legal — you skip. The framework makes you address all four on purpose. | ~5 min |
| 1.3 | The once-only promise | Once-only — the state never asks a citizen for the same data twice — is the outcome interoperability is for, and the test of whether it works. | ~4 min |
| 1.4 | The Strategic Foundation Document | Name the mandate, the scope and the principles once, in writing, before any wiring — it is what every later decision is checked against. | ~4 min |
| 1.5 | The Use-Case Catalogue | Turn your integration map into a ranked catalogue of exchanges worth building — and start with the one that removes the most counters for citizens. | ~5 min |
| 1.6 | Mapping your stakeholders | Sort the agencies into Champions, Early Adopters and Observers, and you know who to onboard first and who to convince. | ~4 min |
| 1.7 | What the world already proved | Estonia's X-Road and the EU's once-only systems show the pattern; the education semantic standards show the vocabularies you will reuse rather than invent. | ~4 min |

## 3. The scripts

## 3.1 Subtopic 1.1 — Why interoperability can't be bought, only built

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — national interoperability authority, ministry CIO, Ministry of Justice sponsor, or development-partner lead |
| Target runtime | ~5 min (≈600 spoken words) |
| PAERA anchor | EIF four layers; NIIS X-Road; PAERA §3.4.3 (interoperability framing); §5.2 (Whole-of-Government, Once-Only) |

> **Single message —** _Procurement rules can require interoperability. Only whole-of-government planning delivers it. That is why the answer is a framework, not a clause in a contract._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Why interoperability can't be bought, only built'. Voice-over begins._

Your government has probably already required interoperability. Every new system contract says the supplier must provide open interfaces. The national digital strategy says systems must connect. And yet the citizen still gives her ID number to the health ministry on paper, and gives it again on paper when she enrols her child in school. The requirement is written down. The result is not there. The question this video answers is why — and what actually works instead.

> _Slide 2 — Title: 'A rule can require behaviour. It cannot make it the cheapest choice.'. Body, two text rows: 'The contract says: provide open interfaces.' 'The project asks: what is the fastest way to ship on time and on budget?'_

Here is the uncomfortable truth. A procurement rule can require a behaviour. It cannot make that behaviour the cheapest choice for the team doing the work. Inside any one project, the team has a budget and a deadline. Connecting to another ministry's system means learning that system, negotiating with that ministry's people, and waiting for their timelines. Building a quick point-to-point link of their own is faster. So they build their own. That is not indiscipline. That is the project doing exactly what it was funded to do.

> _Slide 3 — Title: 'Every link built from scratch'. Body, three text rows: 'Last year: tax office connected to the business register — built from zero.' 'This year: health ministry needs the same data — built from zero again.' 'Next year: a third connection, from zero. The bus that should carry them all does not exist.'_

The result is point-to-point sprawl. Last year your team connected the tax office to the business register, and built that connection from scratch. This year the health ministry needs the same data, and the connection is built again, from scratch. Each link is private, undocumented, and breaks when either side changes. Nobody planned the shared road that every one of these journeys should travel on. There was no one whose job it was to plan it.

> _Slide 4 — Title: 'The view that makes interoperability rational'. Body, four text rows: 'First agency pays to build the shared exchange.' 'Second agency does not — it connects once and reuses.' 'Third and fourth do the same.' 'Across the whole of government, the country builds the road once and everyone drives on it.'_

Interoperability becomes the rational choice only from one vantage point — the whole of government. From there the maths changes. The first agency pays to build a shared way to exchange data. The second agency does not build its own; it connects to the shared one. The third and fourth do the same. The country builds the road once, and every agency reuses it. But this view does not exist inside any single project. It exists only at the level of your country's whole digital portfolio — and someone has to hold it deliberately. That is what an interoperability framework is for.

> _Slide 5 — Title: 'A framework, not a clause'. Body, four text rows: 'Legal — the mandate that makes exchange lawful and connection mandatory.' 'Organisational — who governs the bus, who joins, who is accountable.' 'Semantic — agreed meaning, so two agencies mean the same thing.' 'Technical — the shared bus and standards every member uses.'_

A framework is the plan, made of four parts that a contract clause cannot deliver. A legal mandate that makes data exchange lawful and connection mandatory. An organisational layer that names who owns the bus, who may join, and who is accountable. A semantic layer so that two agencies mean the same thing by the word 'learner'. And a technical layer — the shared bus and the standards every member uses. This knowledge product builds all four, in order, for a real exchange. The point here is that no procurement clause produces any of them. Only planning at the level of the whole government does.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Procurement can require interoperability. Only a planned framework — legal, organisational, semantic, technical — can deliver it.'_

So when you make the case for an interoperability framework, this is the case. Procurement rules and strategies can require interoperability. They cannot deliver it, because no single project is funded to build the shared road. Only a framework — planned once, for the whole of government, across four layers — can. That is why this is work your minister commissions deliberately, with sustained funding, and not a line your procurement office can simply insert into the next contract.

> _Slide 7 — Title: 'Sources'. Body: EU European Interoperability Framework; NIIS X-Road (niis.org); PAERA v1.0 §3.4.3; §5.2. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Why interoperability can't be bought, only built'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP2 / 1.1) Arial 18pt. Background #E5F5FB. No images. |
| 2 | The rule-vs-cheapest-choice contrast. Two text rows: what the contract says, what the project asks. | Frames the local-rational behaviour without judging it — the maths, not the morality. |
| 3 | Point-to-point sprawl. Three text rows showing the same connection rebuilt year after year. | The recognition moment — the listener has lived this. Text-only, no diagram needed. |
| 4 | Whole-of-government math. Four text rows: build once, reuse many. Concludes that the view exists only at portfolio level. | The structural argument: planning enables re-use. The most important slide in the video. |
| 5 | Framework-not-clause. Four text rows naming the four layers in plain language. | Previews 1.2. Text labels only. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line, quotable in a cabinet briefing. |
| 7 | Sources slide. Bulleted text. Footer: 'Find the link in the description.' | Lets viewers verify the framing via the YouTube description. |

### AI usage tip — Diagnose where your country procures interoperability instead of planning it

**What the prompt does:** A Strategist needs to show, concretely, that the country's current approach relies on procurement clauses that cannot deliver — and to identify where a planned framework would change the outcome. This prompt produces a defensible diagnostic the Strategist can take into a budget or cabinet discussion.

**Prompt template (copy-paste into Claude):**

```text
Below is a description of how [country X] currently handles cross-agency data exchange [paste 1-3 paragraphs: any interoperability clauses in procurement rules, the national digital or interoperability strategy, any known point-to-point integrations, any shared platform or bus if one exists]. Assess: (1) where interoperability is currently REQUIRED by rule or strategy; (2) where it is actually DELIVERED by a shared, planned mechanism; (3) the gap between the two. For each known cross-agency data need, mark whether it is met by a one-off point-to-point link, a shared bus, or not at all. Output: a table (data need / how it is met now / planned-vs-procured / risk if the supplier changes), plus a 3-bullet summary of where a whole-of-government framework would most change the outcome. Be conservative — mark 'delivered by a shared mechanism' only if the input names one.
```

**Inputs and outputs:** Input: 1-3 paragraphs on the country's current cross-agency exchange approach. Output: a diagnostic table plus a 3-bullet summary.

**Safeguard:** Treat the output as a hypothesis to test with the agencies named, not a finding. A clause in a strategy is not evidence that the exchange actually works — confirm each 'delivered' row against a real, running integration before citing it upward.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Why interoperability can't be bought, only built |
| YouTube-optimised title | Why procurement rules don't make government systems talk to each other — and what does |
| Description (60 words) | Your contracts already require open interfaces, yet citizens still repeat the same data at every counter. Why? Because a rule can require interoperability but cannot make it the cheapest choice for any single project. Only whole-of-government planning — a framework across four layers — delivers it. Five minutes for digital-government leaders. AI diagnostic prompt to map procured-versus-planned interoperability in the description. |
| Tags | interoperability, government interoperability framework, GovStack, X-Road, EIF, whole-of-government, digital government, data exchange |
| Playlist (YouTube) | KP2 — Topic 1: Why a Government Interoperability Framework |
| ToR §4 coverage | §4.1 (methodology framing); §4.3 (AI integration — diagnostic prompt) |
| PAERA citations | §3.4.3 Interoperability framing; §5.2 Principles (Whole-of-Government) |
| External-link list | EU European Interoperability Framework; NIIS X-Road (niis.org); PAERA v1.0 §3.4.3; PAERA v1.0 §5.2 |

## 3.2 Subtopic 1.2 — The four layers of interoperability

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — national interoperability authority, ministry CIO, Ministry of Justice sponsor, or development-partner lead |
| Target runtime | ~5 min (≈620 spoken words) |
| PAERA anchor | EIF four-layer model (Technical, Semantic, Organisational, Legal); NIIS X-Road; PAERA §3.4.3 |

> **Single message —** _Interoperability fails at whichever of the four layers — Technical, Semantic, Organisational, Legal — you skip. The framework makes you address all four on purpose._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The four layers of interoperability'. Voice-over begins._

When two government systems fail to work together, people usually assume the problem is technical — a missing connection, an old system. Sometimes it is. More often, the wires are fine and the exchange still fails, because interoperability is not one thing. It is four. The European Interoperability Framework, and the X-Road systems built on it, describe interoperability as four layers stacked together. Skip any one, and the exchange breaks at that layer.

> _Slide 2 — Title: 'Four layers, bottom to top'. Body, four stacked text rows: 'Technical — the wires and the bus.' 'Semantic — the meaning of the data.' 'Organisational — who agrees to exchange, and how it is governed.' 'Legal — the mandate that makes it lawful.'_

Picture the four layers stacked. At the bottom, technical — the wires, the bus, the message format. Above it, semantic — what the data actually means. Above that, organisational — who agrees to exchange data with whom, and who governs the arrangement. And at the top, legal — the mandate that makes the whole exchange lawful. A real exchange needs all four. Let us take them one at a time, from the one people think about first.

> _Slide 3 — Title: 'Technical — necessary, not sufficient'. Body, two text rows: 'A shared bus and shared standards, so systems can connect without a new link each time.' 'X-Road is one such bus. But a working wire that carries the wrong meaning is still a failure.'_

The technical layer is the shared bus and the standards every member uses — so that connecting is a one-time setup, not a new project each time. X-Road is one such bus. This layer is necessary. But it is not sufficient, and it is not even the hardest part. A perfectly working wire that delivers data the receiving agency misreads is still a failed exchange.

> _Slide 4 — Title: 'Semantic — the shared language'. Body, two text rows: 'The agriculture ministry's 'farmer' and the bank's 'farmer' must mean the same person, or the data is worse than useless.' 'Agreed data models, code lists and identifiers are what make meaning travel.'_

The semantic layer is meaning. The agriculture ministry's record of a 'farmer' and the cooperative bank's record of a 'farmer' must point to the same person, identified the same way, or combining them does harm. This is where business and IT must speak a shared language — because agreeing what 'learner' or 'farmer' or 'enrolment' means is a business decision that only the people who own the data can make, written down precisely enough for the systems to use. The framework gives both sides that shared vocabulary. Without it, the wire carries confident nonsense.

> _Slide 5 — Title: 'Organisational — who agrees, who governs'. Body, three text rows: 'Which agency provides which data, to whom, for what purpose.' 'Service-level expectations: uptime, response, support.' 'A governing body that admits members and resolves disputes.'_

The organisational layer is agreement and governance. Which agency provides which data, to which other agency, for what purpose, at what level of service. Who is accountable when an exchange fails. Who admits a new member to the bus and who resolves a dispute between two members. This is the layer where the minister and the chief architect sit at the same table — the business side deciding what may be shared and why, the IT side deciding how — and where a governing body turns a set of bilateral favours into a dependable federation.

> _Slide 6 — Title: 'Legal — the mandate'. Body, two text rows: 'A decree or law that makes cross-agency exchange lawful, makes connection mandatory, and protects the citizen's data.' 'Without it, every exchange is a legal risk one official can veto.'_

And the legal layer is the mandate. A decree or a law that makes cross-agency exchange lawful in the first place, that makes connecting to the bus mandatory rather than optional, and that protects the citizen's data as it moves. Without the legal layer, every exchange is a standing legal risk that one cautious official can stop. With it, exchange is the default and refusing to connect is the exception that needs justifying. The decree is not paperwork. It is the on-switch.

> _Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Interoperability is four layers — technical, semantic, organisational, legal. It fails at whichever one you skip.'_

So the discipline the framework gives you is simple to state and hard to skip. Interoperability is four layers — technical, semantic, organisational, legal. Most failed projects had a working technical layer and skipped one of the other three. The rest of this knowledge product builds all four for a real exchange, in order — and the reason we keep returning to the layers is that the framework's whole job is to make you address every one of them on purpose.

> _Slide 8 — Title: 'Sources'. Body: EU European Interoperability Framework (four-layer model); NIIS X-Road documentation; PAERA v1.0 §3.4.3. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The four layers of interoperability'. | Standard ITU template. No images. |
| 2 | Four-layer stack. Four text rows bottom-to-top (Technical / Semantic / Organisational / Legal), one short gloss each. | The spine of the whole topic. A plain stacked text diagram — text-box rows, no icons. |
| 3 | Technical layer slide. Two text rows: what it is; why it is necessary but not sufficient. | Deflates the 'it's just a technical problem' assumption. |
| 4 | Semantic layer slide. Two text rows: the same-person problem; what makes meaning travel. | Carries the shared-language argument — business and IT must agree meaning together. |
| 5 | Organisational layer slide. Three text rows: data-sharing agreements, service levels, a governing body. | Sets up Topic 3 (governance). Text-only. |
| 6 | Legal layer slide. Two text rows: the mandate; the cost of skipping it. 'The decree is the on-switch.' | Sets up Topic 2 (the decree). The 'on-switch' line is the memorable beat. |
| 7 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 8 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the four-layer model is from EIF/NIIS, not invented. |

### AI usage tip — Map a planned exchange across the four layers — and find the missing one

**What the prompt does:** A Strategist scoping a cross-agency exchange needs to check it is covered at all four layers, not just the technical one — the single most common cause of stalled interoperability. This prompt produces a four-layer readiness check for one exchange.

**Prompt template (copy-paste into Claude):**

```text
Below is one cross-agency data exchange [country X] wants to enable [describe it in 2-4 sentences: which agency needs what data from which other agency, for what citizen-facing purpose]. Assess its readiness at each of the four interoperability layers: TECHNICAL (is there a shared bus / standard both sides can use?), SEMANTIC (do both sides agree on the meaning, identifiers and code lists for the data?), ORGANISATIONAL (is there an agreement on who provides what, service levels, and a body to govern it?), LEGAL (is there a lawful basis and a mandate to exchange, with data protection?). For each layer output: status (Ready / Partial / Missing), what specifically is missing, and the one action that would close it. End with: which single layer is the binding constraint for this exchange right now.
```

**Inputs and outputs:** Input: a 2-4 sentence description of one planned exchange. Output: a four-row layer-readiness table plus the binding-constraint call.

**Safeguard:** The output reflects only what you described — a 'Ready' on the legal layer means you told it a mandate exists, not that counsel has confirmed it. Validate the legal and semantic rows with the data owner and legal counsel before treating the exchange as ready to build.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The four layers of interoperability |
| YouTube-optimised title | The four layers of interoperability — and why projects fail at the one they skip |
| Description (60 words) | Interoperability isn't one thing, it's four layers: technical, semantic, organisational and legal. Most failed exchanges had working wires and skipped meaning, agreement or mandate. This five-minute video for digital-government leaders walks all four — drawn from the EU EIF and X-Road — and shows where business and IT must agree a shared language. AI four-layer readiness prompt in the description. |
| Tags | interoperability layers, EIF, semantic interoperability, X-Road, data exchange, GovStack, digital government, interoperability framework |
| Playlist (YouTube) | KP2 — Topic 1: Why a Government Interoperability Framework |
| ToR §4 coverage | §4.1 (methodology framing); §4.2 (reference frameworks — EIF/NIIS); §4.3 (AI integration — readiness prompt) |
| PAERA citations | §3.4.3 Interoperability framing (the four-layer model is cited to EIF/NIIS, not PAERA) |
| External-link list | EU European Interoperability Framework (four-layer model); NIIS X-Road documentation (niis.org); PAERA v1.0 §3.4.3 |

## 3.3 Subtopic 1.3 — The once-only promise

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — national interoperability authority, ministry CIO, Ministry of Justice sponsor, or development-partner lead |
| Target runtime | ~4 min (≈520 spoken words) |
| PAERA anchor | PAERA §5.2 Principle #5 (Once-Only); EU Once-Only Technical System (OOTS); EU EIF |

> **Single message —** _Once-only — the state never asks a citizen for the same data twice — is the outcome interoperability is for, and the test of whether it works._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The once-only promise'. Voice-over begins._

It is easy to talk about interoperability in terms of buses and standards and lose sight of what it is for. So here is the outcome, in one sentence a citizen would recognise: the state never asks you for the same information twice. Give your identity once, and every service that is entitled to it can get it — with your consent and a lawful basis — without asking you again. This is the once-only principle, and it is the single clearest test of whether your interoperability framework actually works.

> _Slide 2 — Title: 'The citizen's day, without once-only'. Body, single text block: 'She proves her identity at the ID office. She proves it again at the school to enrol her child. She proves it again at the clinic. The same document, the same queue, three times — because the agencies cannot ask each other.'_

Picture a citizen's day without it. She proves her identity at the identity office. She proves it again, on paper, when she enrols her child at school. She proves it a third time at the clinic. Same document, same queue, three times — not because anyone wants to harass her, but because each agency has no way to ask the agency that already holds the answer. The burden is pushed onto the person with the least power to carry it.

> _Slide 3 — Title: 'What once-only actually requires'. Body, three text rows: 'A trusted source for each fact — one authoritative holder.' 'A lawful basis and the citizen's consent to share it.' 'A real-time way to fetch it at the moment of service.'_

Once-only sounds simple, but it requires all four layers we just named, working together. It requires a trusted source for each fact — one authoritative holder of identity, one of enrolment, rather than five copies that disagree. It requires a lawful basis and, where appropriate, the citizen's consent. And it requires a real-time way to fetch the fact at the moment of service, over the bus, instead of asking the citizen to carry it. Once-only is not a feature you switch on. It is what you get when the four layers are built correctly.

> _Slide 4 — Title: 'Once-only in Progressa'. Body, three text rows: 'A learner applies for a credential at the examination authority.' 'Instead of re-asking, the authority pre-fills identity from the identity authority and enrolment from the learner registry — over the bus.' 'The learner is asked once. The data is fetched, with consent, in seconds.'_

We will build exactly this, on a real federation, later in the knowledge product. In our demonstration country, Progressa, a learner applies for a credential at the national examination authority. Without once-only, the authority asks the learner to bring proof of identity and proof of enrolment on paper. With once-only, the authority pre-fills the learner's identity from the national identity authority and the learner's enrolment from the learner registry — fetched over the bus, with a lawful basis, in seconds. The learner is asked once. That single exchange is the thing this whole framework exists to make possible.

> _Slide 5 — Title: 'Why once-only is the right north star'. Body, two text rows: 'It is measurable — count the times a citizen is asked for data the state already holds.' 'It keeps the framework honest — a bus nobody uses for a real once-only exchange is not yet working.'_

Make once-only your north star, for two reasons. It is measurable — you can literally count the number of times a citizen is asked for data the state already holds, and drive that number down. And it keeps the framework honest. It is possible to build a technically impressive bus that no real service uses. Once-only is the test that cuts through that: until a real service fetches a real fact for a real citizen who is no longer asked twice, the framework is plumbing, not yet a result.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Once-only is the promise to the citizen and the test of the framework: ask once, fetch the rest — lawfully, with consent, over the bus.'_

So when you explain interoperability to your minister or your cabinet, lead with this. The framework is not about buses. It is about a promise to the citizen — ask once, and let the state fetch the rest, lawfully and with consent. Once-only is both the promise and the measure. Everything else in this knowledge product is in service of making that one sentence true in your country.

> _Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §5.2 Principle #5 (Once-Only); EU Once-Only Technical System (OOTS); EU EIF. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The once-only promise'. | Standard ITU template. No images. |
| 2 | Citizen's day slide. Single text block describing the same proof demanded three times. | The empathy beat — concrete, citizen-level. Text-only. |
| 3 | What once-only requires. Three text rows: trusted source, lawful basis/consent, real-time fetch. | Connects the outcome back to the four layers without re-teaching them. |
| 4 | Progressa once-only. Three text rows: the learner, the pre-fill from PNIA and PLR, asked once. | Previews the Topic 5 demonstration. Uses the bound Progressa institutions. |
| 5 | Why once-only is the north star. Two text rows: measurable; keeps the framework honest. | Reframes once-only as a management metric, not a slogan. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The quotable line for a ministerial briefing. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the once-only references. |

### AI usage tip — Find your country's highest-value once-only exchange

**What the prompt does:** A Strategist needs to pick the first once-only exchange to build — the one that removes the most citizen burden for the least effort. This prompt produces a ranked shortlist that motivates the framework with a concrete first win.

**Prompt template (copy-paste into Claude):**

```text
Below are the main public services [country X] delivers to citizens and the data each one currently asks citizens to provide on paper [paste a list of 5-15 services with the documents/data each demands at intake — e.g. national ID, proof of address, proof of enrolment, proof of income, birth certificate]. Identify, across these services, the facts that citizens are asked to provide more than once (the same data demanded by multiple services). For each repeated fact, name the likely authoritative source agency, and estimate how many citizen interactions per year could drop the paper requirement if that fact were fetched once-only over a bus. Output: a ranked table (repeated fact / authoritative source / services that re-ask it / rough annual interactions affected / build difficulty Low-Med-High), and recommend the single best first once-only exchange to build.
```

**Inputs and outputs:** Input: a list of services and the data each demands at intake. Output: a ranked once-only opportunity table plus a first-exchange recommendation.

**Safeguard:** The interaction estimates are directional, for prioritisation only — confirm the authoritative source agency actually holds the fact reliably (a registry that is incomplete is not yet a trusted source) before committing it as the first build.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The once-only promise |
| YouTube-optimised title | Once-only: the one principle that tells you if your interoperability actually works |
| Description (60 words) | Once-only means the state never asks a citizen for the same data twice — ask once, fetch the rest, lawfully and with consent. It is the outcome interoperability is for and the test of whether your framework works. This four-minute video shows what once-only requires and previews a real example. AI prompt to find your highest-value once-only exchange in the description. |
| Tags | once-only principle, interoperability, digital government, citizen services, X-Road, GovStack, OOTS, data exchange |
| Playlist (YouTube) | KP2 — Topic 1: Why a Government Interoperability Framework |
| ToR §4 coverage | §4.1 (methodology framing); §4.3 (AI integration — once-only prioritisation prompt); §4.6 (real-life example — Progressa) |
| PAERA citations | §5.2 Principle #5 (Once-Only) |
| External-link list | PAERA v1.0 §5.2 (Once-Only principle); EU Once-Only Technical System (OOTS); EU European Interoperability Framework |

## 3.4 Subtopic 1.4 — The Strategic Foundation Document

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — national interoperability authority, ministry CIO, Ministry of Justice sponsor, or development-partner lead |
| Target runtime | ~4 min (≈520 spoken words) |
| PAERA anchor | EU EIF (interoperability strategy & governance); PAERA §3.4.3; §5.2 (Whole-of-Government, Once-Only, Cross-border) |

> **Single message —** _Name the mandate, the scope and the principles once, in writing, before any wiring — it is what every later decision is checked against._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The Strategic Foundation Document'. Voice-over begins._

Before a single system is connected, before the decree is drafted, before the first agency joins the bus, there is one document to write. It is short — a handful of pages, not a tome. It is the Strategic Foundation Document, and its job is to answer the questions that every later decision will be tested against. Skip it, and every meeting re-opens the same arguments. Write it, and you have a reference you can point to when the arguments come — and they will.

> _Slide 2 — Title: 'What it answers'. Body, four text rows: 'Mandate — by whose authority does this framework exist?' 'Scope — which agencies and which exchanges are in, and which are not, yet?' 'Principles — the rules every design decision must honour.' 'Success — how we will know it is working.'_

The document answers four questions. By whose authority does this framework exist — the mandate? Which agencies and which exchanges are in scope, and just as importantly, which are explicitly out of scope for now? What principles must every design decision honour? And how will we know it is working — what does success look like in eighteen months? Four questions. Answer them on paper, once, with the people who can make the answers stick.

> _Slide 3 — Title: 'The principles to name'. Body, three text rows: 'Whole-of-government — build the shared road once, reuse it everywhere.' 'Once-only — ask the citizen once.' 'Cross-border and reuse-first — prefer published standards and shared building blocks over bespoke.'_

The principles are the heart of the document, because they settle arguments before they start. Name whole-of-government — we build the shared road once and reuse it, rather than each agency building its own. Name once-only — we ask the citizen once. Name reuse-first and cross-border readiness — we prefer published standards and shared building blocks over bespoke ones, and we design so that an exchange could one day cross a border. These are not slogans on a wall. They are the criteria you will hold the next design decision to, and the next procurement, and the next request for an exception.

> _Slide 4 — Title: 'Why write it before the wiring'. Body, two text rows: 'Every technical and legal choice later is checked against it — it is the constitution of the framework.' 'It is what a new minister, a new CIO or a new donor reads to understand the framework in ten minutes.'_

Why write it first, before the interesting technical work? Two reasons. It becomes the constitution of the framework — when a later choice about a standard, or a member, or an exception comes up, you check it against the foundation rather than re-litigating first principles in a technical meeting. And it is the on-ramp for everyone who joins later. A new minister, a new agency CIO, a new development partner can read these few pages and understand what the framework is, what it covers, and what it stands for — in ten minutes, not ten meetings.

> _Slide 5 — Title: 'Keep it short, keep it owned'. Body, two text rows: 'A handful of pages, signed by the authority that mandates the framework.' 'Living, not frozen — reviewed when scope expands, but stable enough to be a reference.'_

Two cautions. Keep it short — a handful of pages that a busy minister will actually read and sign. And keep it owned — it carries the signature of the authority that mandates the framework, so that pointing to it carries weight. It is a living document, reviewed when the scope expands to new agencies or new exchanges, but it is stable enough to be the thing everyone points back to. The Strategic Foundation Document is the first artefact in your build pack, and the one every other artefact answers to.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Write the mandate, scope, principles and success measures on a few pages first — so every later decision has something to be checked against.'_

So the first move, before any wiring, is this document. Write the mandate, the scope, the principles and the success measures on a few pages, get them signed by the right authority, and put them where everyone can find them. It is the cheapest insurance you will buy in the whole programme — because it is what every later, more expensive decision gets checked against.

> _Slide 7 — Title: 'Sources'. Body: EU European Interoperability Framework (interoperability strategy & governance); PAERA v1.0 §3.4.3; §5.2. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The Strategic Foundation Document'. | Standard ITU template. No images. |
| 2 | Four-question slide. Four text rows: mandate, scope, principles, success. | The structure of the document, in four words. Text-only. |
| 3 | Principles slide. Three text rows: whole-of-government, once-only, reuse-first/cross-border. | Reinforces the structural argument (planning enables re-use) as a named principle. |
| 4 | Why-first slide. Two text rows: the constitution; the ten-minute on-ramp. | Justifies the sequencing — foundation before wiring. |
| 5 | Short-and-owned slide. Two text rows: keep it short; keep it signed and living. | Practical cautions. Names it as the first build-pack artefact. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the EIF and PAERA references. |

### AI usage tip — Draft your Strategic Foundation Document

**What the prompt does:** A Strategist starting an interoperability framework needs a first draft of the foundation document to circulate — short, signed-off-able, and tailored to the country. This prompt produces that draft from a short brief.

**Prompt template (copy-paste into Claude):**

```text
Draft a Strategic Foundation Document for a Government Interoperability Framework in [country X]. Use this context [paste 1-3 paragraphs: who is mandating the framework, the agencies expected to be in the first wave, the top one or two exchanges you want to enable first, and any legal or political constraints]. Structure the document in four short sections: (1) MANDATE — by whose authority the framework exists and what it is authorised to do; (2) SCOPE — which agencies and which exchanges are in the first wave, and what is explicitly out of scope for now; (3) PRINCIPLES — state and briefly explain whole-of-government, once-only, reuse-first, and cross-border readiness, with a one-line implication of each for design decisions; (4) SUCCESS MEASURES — 3 to 5 measurable outcomes for the first 18 months, including at least one once-only measure. Keep the whole document to roughly two pages. Tone: formal, signed by a minister or interoperability authority.
```

**Inputs and outputs:** Input: a 1-3 paragraph brief on mandate, first-wave agencies, first exchanges and constraints. Output: a ~2-page Strategic Foundation Document draft in four sections.

**Safeguard:** This is a starting draft to negotiate, not a final charter — the scope and mandate sections in particular must be agreed with the named agencies and cleared by legal counsel before signature, because they create real obligations.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The Strategic Foundation Document |
| YouTube-optimised title | The two-page document to write before you build any interoperability |
| Description (60 words) | Before any system is connected, write one short document: the Strategic Foundation Document. It names the mandate, the scope, the principles — whole-of-government, once-only, reuse-first — and the success measures. It becomes the constitution every later decision is checked against, and the ten-minute on-ramp for anyone who joins. Four minutes for digital-government leaders. AI drafting prompt in the description. |
| Tags | interoperability strategy, government interoperability framework, digital government, EIF, governance, GovStack, strategic foundation |
| Playlist (YouTube) | KP2 — Topic 1: Why a Government Interoperability Framework |
| ToR §4 coverage | §4.1 (methodology, step 1); §4.3 (AI integration — foundation-document prompt) |
| PAERA citations | §3.4.3 Interoperability framing; §5.2 Principles (Whole-of-Government, Once-Only, Cross-border) |
| External-link list | EU European Interoperability Framework (strategy & governance); PAERA v1.0 §3.4.3; PAERA v1.0 §5.2 |

## 3.5 Subtopic 1.5 — The Use-Case Catalogue

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — national interoperability authority, ministry CIO, Ministry of Justice sponsor, or development-partner lead |
| Target runtime | ~5 min (≈600 spoken words) |
| PAERA anchor | PAERA §3.4.3 (interoperability framing); EU EIF (interoperability agreements) |

> **Single message —** _Turn your integration map into a ranked catalogue of exchanges worth building — and start with the one that removes the most counters for citizens._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The Use-Case Catalogue'. Voice-over begins._

If your country has done the Enterprise Architecture work — Knowledge Product 1 — you already have a first-cut integration map: a picture of which government systems ought to exchange what. That map is the input to this step. If you do not have one yet, build it first — inventory your government's systems, who owns them and the data they hold, and sketch which ought to exchange what. That inventory is the Discover-and-Assess work KP1 covers, and it is the precondition for everything in this knowledge product; without a picture of your current systems, you cannot rank the exchanges worth building. On its own, a map of everything-connects-to-everything is overwhelming and undeployable. The Use-Case Catalogue turns it into a ranked list of specific exchanges, so the framework starts with the few that matter most instead of trying to boil the ocean.

> _Slide 2 — Title: 'One row per exchange'. Body, four text rows: 'Who provides the data, and who consumes it.' 'What data, and the citizen service it enables.' 'Readiness at each of the four layers.' 'Priority — value to the citizen against effort to build.'_

The catalogue is a table, and each row is one concrete exchange. Each row names who provides the data and who consumes it. It names what data moves, and — crucially — the citizen-facing service that the exchange enables, so that no exchange is built just because it is technically possible. It records readiness at each of the four layers, so you can see what is missing. And it carries a priority, set by weighing the value to the citizen against the effort to build. One row per exchange keeps the conversation specific.

> _Slide 3 — Title: 'From the integration map to the catalogue'. Body, three text rows: 'The map says: PNEA could use identity from PNIA and enrolment from PLR.' 'The catalogue says: that exchange, this citizen service, this readiness, this priority.' 'A map shows what is possible; a catalogue decides what is next.'_

Take a line from the integration map: the examination authority could use identity from the identity authority and enrolment from the learner registry. As a map line, it is just a possibility. As a catalogue entry, it becomes a decision: this exchange, enabling this credential service for learners, ready at the technical layer but not yet at the legal one, high citizen value, medium effort — therefore a strong candidate for the first wave. The map shows what is possible. The catalogue decides what is next.

> _Slide 4 — Title: 'How to rank'. Body, two text rows: 'Value — how much citizen burden does this exchange remove? Count the counters and the repeated forms.' 'Feasibility — how ready are the four layers, and how willing is the data owner?'_

Rank on two axes. Value: how much citizen burden does this exchange remove? An exchange that lets thousands of parents stop carrying a document to enrol a child is worth more than one that saves a few officials a query. Count the counters. And feasibility: how ready are the four layers, and how willing is the agency that owns the data? An exchange where the provider agency is eager and the legal basis is close is more feasible than one where the data owner is reluctant. The first exchanges to build are the high-value, high-feasibility ones — they prove the framework and build the appetite for the harder ones.

> _Slide 5 — Title: 'Why start small and visible'. Body, two text rows: 'One real once-only exchange, working, convinces more agencies than any strategy document.' 'The catalogue is the backlog — the rest wait their turn, in priority order.'_

Resist the urge to launch with twenty exchanges. One real once-only exchange, working end-to-end, convinces more agencies to join than any strategy document ever will. The catalogue holds the rest as a prioritised backlog — nothing is forgotten, but the team works the list in order. This is also how you keep the framework funded: each delivered exchange is a visible win you can point to before asking for the next tranche, instead of a long silence followed by a big-bang launch that may slip.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The Use-Case Catalogue turns a map of everything into a ranked list of next things — starting with the exchange that removes the most counters.'_

So the second foundation artefact, after the Strategic Foundation Document, is the Use-Case Catalogue. It turns your integration map from a picture of everything into a ranked list of next things. It keeps the framework specific, fundable and honest about priorities. And it gives the architects who design the exchanges a clear first target — the highest-value, most-feasible exchange — to design and build for real.

> _Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §3.4.3 (interoperability framing); EU European Interoperability Framework (interoperability agreements). Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The Use-Case Catalogue'. | Standard ITU template. No images. |
| 2 | Catalogue-row anatomy. Four text rows: provider/consumer, data/service, four-layer readiness, priority. | Defines the artefact structure. Text-only table-like layout. |
| 3 | Map-to-catalogue slide. Three text rows using the Progressa example line. | Makes the transformation concrete with the bound institutions. |
| 4 | Ranking slide. Two text rows: value (counters removed); feasibility (layer readiness + owner willingness). | The prioritisation method. Text-only. |
| 5 | Start-small slide. Two text rows: one visible win convinces; the catalogue is the backlog. | The funding-and-momentum argument. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the references. |

### AI usage tip — Build your Use-Case Catalogue from your integration map

**What the prompt does:** A Strategist with an integration map (or a list of desired exchanges) needs to turn it into a ranked catalogue that names the citizen value and the readiness of each exchange. This prompt produces the first catalogue draft.

**Prompt template (copy-paste into Claude):**

```text
Below is [country X]'s integration map or list of desired cross-agency data exchanges [paste the list: each line naming roughly which agency would provide what data to which consuming agency; include any citizen service each enables if known]. Turn this into a Use-Case Catalogue. For each exchange, produce a row with: provider agency, consumer agency, data exchanged, citizen-facing service enabled, a rough readiness flag at each of the four layers (Technical / Semantic / Organisational / Legal: Ready / Partial / Missing), an estimate of citizen burden removed (High / Medium / Low), and a build-effort estimate (High / Medium / Low). Then rank the rows by (citizen burden removed) against (build effort and readiness), and recommend the top 3 exchanges for the first wave with a one-line justification each. Output: the catalogue table plus the ranked first-wave shortlist.
```

**Inputs and outputs:** Input: an integration map or list of desired exchanges. Output: a Use-Case Catalogue table plus a ranked first-wave shortlist of three.

**Safeguard:** Readiness flags are first guesses from your description — the Legal and Semantic flags especially must be confirmed with the data owner and counsel. Do not commit a first-wave exchange on the strength of the AI's readiness guess alone.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The Use-Case Catalogue |
| YouTube-optimised title | How to choose which government data exchange to build first |
| Description (60 words) | An integration map shows everything that could connect — which is overwhelming. The Use-Case Catalogue turns it into a ranked list of specific exchanges, each naming the citizen service it enables and its readiness across the four layers. Start with the exchange that removes the most counters. Five minutes for digital-government leaders. AI prompt to build your catalogue in the description. |
| Tags | use case catalogue, interoperability roadmap, data exchange, prioritisation, government interoperability framework, GovStack, digital government |
| Playlist (YouTube) | KP2 — Topic 1: Why a Government Interoperability Framework |
| ToR §4 coverage | §4.1 (methodology, step 2); §4.3 (AI integration — catalogue prompt) |
| PAERA citations | §3.4.3 Interoperability framing |
| External-link list | PAERA v1.0 §3.4.3; EU European Interoperability Framework (interoperability agreements) |

## 3.6 Subtopic 1.6 — Mapping your stakeholders

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — national interoperability authority, ministry CIO, Ministry of Justice sponsor, or development-partner lead |
| Target runtime | ~4 min (≈520 spoken words) |
| PAERA anchor | EU EIF (organisational layer, governance); NIIS X-Road governance model |

> **Single message —** _Sort the agencies into Champions, Early Adopters and Observers, and you know who to onboard first and who to convince._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Mapping your stakeholders'. Voice-over begins._

Interoperability is often described as a technical problem. It is at least as much an agreement problem. A bus with no members carries nothing. So before you build, you map the people whose agreement you need — the agencies who will provide data, the agencies who will consume it, and the leaders whose support or resistance will decide whether the framework lives. This map is the third foundation artefact, and it is what turns a good design into a thing that actually gets adopted.

> _Slide 2 — Title: 'Three tiers'. Body, three text rows: 'Champions — agencies that want this now and will go first.' 'Early Adopters — willing once they see it work.' 'Observers — not yet convinced, watching from the side.'_

Sort the agencies into three tiers. Champions are the agencies that already feel the pain and want the exchange now — they will go first, and their willingness is your most valuable asset. Early Adopters are willing, but want to see it work before they commit their own systems and staff. Observers are not yet convinced — they are watching from the side, and some are quietly hoping it fails so they need not change. You will treat each tier differently, and knowing which is which is half the battle.

> _Slide 3 — Title: 'Provider and consumer — the interoperability twist'. Body, two text rows: 'Every exchange has a data provider and a data consumer — and they are different agencies with different incentives.' 'The consumer wants the exchange; the provider carries the cost and the risk. Map both sides for every exchange.'_

Interoperability adds a twist that other digital programmes do not have. Every exchange has two sides — an agency that provides the data and an agency that consumes it — and they have different incentives. The consumer usually wants the exchange; it makes their service easier. The provider often carries the cost and the risk — the load on their system, the responsibility if the data is wrong. So for each exchange in your catalogue, map both sides: who gains and who is asked to give. A provider agency that sees only cost and no benefit is where adoption stalls, and where you will need your minister's authority and a fair service agreement.

> _Slide 4 — Title: 'Who to work first'. Body, three text rows: 'Pair a Champion consumer with a willing provider — that is your first exchange.' 'Use the first win to move Early Adopters.' 'Bring Observers along with evidence, not argument.'_

The map tells you the sequence. Find a Champion consumer paired with a willing provider, and that is your first exchange — the one most likely to succeed and prove the framework. Use that first working exchange to move the Early Adopters, who needed to see it before committing. And bring the Observers along with evidence rather than argument — a working once-only exchange that citizens notice is more persuasive than any number of strategy meetings. You spend your scarce political capital where it moves the most agencies.

> _Slide 5 — Title: 'A bus needs an owner'. Body, single text block: 'None of this holds together without a body that governs the framework — admits members, sets service levels, resolves disputes. An interoperability platform with no owner decays in its second year. Governance is the next topic.'_

One warning the stakeholder map makes visible. All of this — the tiers, the providers and consumers, the agreements — needs a body that governs the framework as a whole: that admits new members, sets the service levels, and resolves disputes when two agencies disagree. An interoperability platform with no owner decays in its second year, when the founding enthusiasm fades and no one is accountable for keeping it healthy. Designing that governing body is the subject of a later topic. The stakeholder map is what shows you why it is not optional.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Map the agencies into Champions, Early Adopters and Observers — and map provider against consumer for every exchange — so you spend authority where it moves the most agencies.'_

So the third foundation artefact is the stakeholder map. Three tiers — Champions, Early Adopters, Observers. Two sides for every exchange — provider and consumer. Together they tell you who to onboard first, who to convince with evidence, and where you will need your minister to lean in. Interoperability is an agreement problem, and this map is how you solve it deliberately instead of hoping the agencies come along on their own.

> _Slide 7 — Title: 'Sources'. Body: EU European Interoperability Framework (organisational layer); NIIS X-Road governance model (niis.org). Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Mapping your stakeholders'. | Standard ITU template. No images. |
| 2 | Three-tier slide. Three text rows: Champions, Early Adopters, Observers. | The core model. Text-only. |
| 3 | Provider-vs-consumer slide. Two text rows on the two sides and their different incentives. | The interoperability-specific insight. Sets up fair service agreements (Topic 3/5). |
| 4 | Sequencing slide. Three text rows: first exchange, move Early Adopters, evidence for Observers. | Turns the map into an onboarding sequence. |
| 5 | Bus-needs-an-owner slide. Single text block previewing governance. | Sets up Topic 3. The 'decays in its second year' line is the memorable beat. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the EIF/NIIS references. |

### AI usage tip — Map your stakeholders into tiers and provider/consumer roles

**What the prompt does:** A Strategist needs to turn a list of agencies into an actionable stakeholder map — who is a Champion, who is an Observer, and who provides versus consumes for the first exchanges. This prompt produces that map and an onboarding sequence.

**Prompt template (copy-paste into Claude):**

```text
Below are the government agencies relevant to [country X]'s first interoperability exchanges, with what I know of each one's attitude and their role in the data exchanges [paste a list: agency name, what data it holds or needs, and any sense of whether its leadership is enthusiastic, cautious or resistant]. Produce two things. First, a tier map sorting each agency into Champion, Early Adopter or Observer, with a one-line rationale and a suggested engagement approach for each. Second, for the top exchanges, a provider-versus-consumer table showing, per exchange, which agency provides the data (and what it is asked to give) and which consumes it (and what it gains) — flagging any exchange where the provider bears cost with little benefit and will need incentives or ministerial authority. End with a recommended onboarding sequence: which agency pairing to approach first and why.
```

**Inputs and outputs:** Input: a list of agencies with their data roles and attitudes. Output: a tier map, a provider/consumer table, and a recommended onboarding sequence.

**Safeguard:** Attitudes change with leadership and incentives — treat the tiering as a snapshot to test through real conversations, not a fixed label. An agency mapped as an Observer may become a Champion the moment the exchange is reframed around a benefit it cares about.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Mapping your stakeholders |
| YouTube-optimised title | Interoperability is an agreement problem: how to map the agencies you need |
| Description (60 words) | A bus with no members carries nothing. Interoperability is as much an agreement problem as a technical one. Sort agencies into Champions, Early Adopters and Observers, and map provider against consumer for every exchange — because the agency that gives the data often bears the cost. Four minutes for digital-government leaders. AI stakeholder-mapping prompt in the description. |
| Tags | stakeholder mapping, interoperability governance, change management, digital government, GovStack, EIF, onboarding, government interoperability framework |
| Playlist (YouTube) | KP2 — Topic 1: Why a Government Interoperability Framework |
| ToR §4 coverage | §4.1 (methodology, stakeholder model); §4.3 (AI integration — stakeholder-mapping prompt) |
| PAERA citations | (organisational layer cited to EIF/NIIS; governance setup anchors at PAERA §3.1.3, developed in Topic 3) |
| External-link list | EU European Interoperability Framework (organisational layer); NIIS X-Road governance model (niis.org) |

## 3.7 Subtopic 1.7 — What the world already proved

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — national interoperability authority, ministry CIO, Ministry of Justice sponsor, or development-partner lead |
| Target runtime | ~4 min (≈520 spoken words) |
| PAERA anchor | Estonia X-Road & EU OOTS (interoperability exemplars); education semantic standards; PAERA §3.4.3 |

> **Single message —** _Estonia's X-Road and the EU's once-only systems show the pattern; the education semantic standards show the vocabularies you will reuse rather than invent._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'What the world already proved'. Voice-over begins._

You are not the first country to build this, and that is good news. The pattern in this knowledge product is not a theory — it is drawn from systems that have run for years, at national and cross-border scale. Knowing the evidence does two things for you. It gives your minister confidence that the approach is proven. And it tells your team which parts to reuse rather than reinvent — because the most expensive mistake in interoperability is rebuilding a standard that already exists.

> _Slide 2 — Title: 'Estonia — X-Road, the data-exchange backbone'. Body, three text rows: 'A shared bus connecting hundreds of agencies, run for two decades.' 'Distributed registries — each fact owned by one accountable agency.' 'Once-only as the law, not the aspiration.'_

The clearest example is Estonia's X-Road. Starting in the early 2000s, Estonia built a shared data-exchange layer that now connects hundreds of public and private organisations. Two design choices made it last. Registries are distributed — each fact has one accountable owner, rather than copies scattered across agencies. And once-only is built into law, not left as an aspiration. The technical bus your country will use — the one we demonstrate later on the Linkup federation — is from this same X-Road lineage. Estonia is a small state with different starting conditions, so use it as a proof that the pattern works, not as a template to copy line for line.

> _Slide 3 — Title: 'The EU — once-only across borders'. Body, two text rows: 'The Once-Only Technical System lets a citizen of one country use official data held in another.' 'If once-only can work across 27 countries, it can work across your ministries.'_

The second example raises the ambition. The European Union built the Once-Only Technical System so that a citizen or business dealing with one member state can have official evidence fetched from another member state, with consent, instead of carrying paper across borders. The point for you is not the cross-border machinery itself. It is the proof of scale: if once-only can be made to work across twenty-seven countries with different languages, laws and systems, then making it work across the ministries of a single country is an easier problem than it looks — provided you build the four layers properly.

> _Slide 4 — Title: 'Reuse the vocabulary, don't invent it'. Body, four text rows: 'Giga — a shared way to identify and locate schools.' 'OneRoster — a standard for rostering and enrolment data.' 'CEDS — a common vocabulary for education data.' 'Europass / W3C Verifiable Credentials — a standard for digital credentials.'_

The third kind of evidence is the most practical. For the education sector, the semantic layer — the shared meaning of the data — is largely already published. Giga gives a shared way to identify and locate schools. OneRoster is a standard for rostering and enrolment data. CEDS offers a common vocabulary for education data elements. And Europass, with W3C Verifiable Credentials, is a published standard for digital credentials a learner can carry and a verifier can trust. Your team does not invent what a 'school' or a 'credential' is. They adopt these vocabularies, and spend their scarce time on what is genuinely specific to your country. That is the reuse-first principle made concrete.

> _Slide 5 — Title: 'The pattern travels'. Body, two text rows: 'A shared bus, distributed registries, once-only in law, reused standards.' 'Different countries, different scale — the same four elements, every time.'_

Look across the evidence and the same four elements appear every time. A shared bus rather than point-to-point links. Distributed registries with accountable owners. Once-only written into law. And standards reused rather than reinvented. Different countries, very different scale — the same pattern. It travels because it is built on how the problem actually works, not on any one country's circumstances. Your country can apply it too.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The pattern is proven and the vocabularies are published — your team's job is to apply them to your country, not to invent them.'_

So when you make the case, close with the evidence. The pattern is proven — Estonia at national scale, the EU across borders. The vocabularies are published — Giga, OneRoster, CEDS, Europass. Your team's job is not to invent interoperability. It is to apply a proven pattern and reuse published standards in your country's context. The rest of this knowledge product shows exactly how, building a real once-only exchange on the Linkup federation across our demonstration country, Progressa.

> _Slide 7 — Title: 'Sources'. Body: Estonia — e-Estonia.com, RIA (ria.ee), X-Road (niis.org); EU Once-Only Technical System; Giga; OneRoster (1EdTech); CEDS; Europass / W3C Verifiable Credentials. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'What the world already proved'. | Standard ITU template. No images. |
| 2 | Estonia slide. Three text rows: shared bus, distributed registries, once-only in law. | Country name in plain typography, no national emblem. Polestar framing — proven, different context. |
| 3 | EU OOTS slide. Two text rows: cross-border once-only; the scale argument. | The ambition-raising beat. Text-only. |
| 4 | Reuse-the-vocabulary slide. Four text rows naming the education semantic standards. | The most practical slide — concrete standards to adopt. No logos, plain text names. |
| 5 | Pattern-travels slide. Two text rows: the four recurring elements; different scale, same pattern. | The synthesis. Reinforces reuse-first. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line, and the bridge into the rest of KP2. |
| 7 | Sources slide. Bulleted text across Estonia, EU, and the education standards. Footer: 'Find the link in the description.' | Lets viewers verify each example and standard via the description. |

### AI usage tip — Find the published standards your sector should reuse

**What the prompt does:** A Strategist wants to avoid reinventing semantic standards that already exist for their sector. This prompt produces a shortlist of published standards to adopt for a given sector and country, with what each covers.

**Prompt template (copy-paste into Claude):**

```text
My interoperability work is in the [education / health / agriculture / social protection] sector in [country X]. List the established, publicly published standards and reference vocabularies my team should consider adopting rather than inventing, for: (1) identifying the core entities in this sector (e.g. schools, learners, facilities, beneficiaries); (2) the main data records exchanged; (3) credentials or certificates issued; (4) any sector-specific code lists or classifications. For each standard: its name, the body that maintains it, what it covers in one line, and how mature/widely adopted it is. Flag where two standards overlap or compete so I can choose. Prefer open, internationally recognised standards, and note where a regional or national profile would still be needed on top. Output: a table (standard / maintainer / what it covers / maturity / note), plus a 3-bullet 'adopt first' recommendation.
```

**Inputs and outputs:** Input: the sector and country. Output: a table of candidate standards plus an 'adopt first' shortlist.

**Safeguard:** Standards adoption is also a political and licensing decision — confirm each candidate is genuinely open and acceptable to your data owners and regulators before committing, and check the version, since standards evolve and a superseded version can mislead.

### Metadata

| Field | Value |
| --- | --- |
| Working title | What the world already proved |
| YouTube-optimised title | Estonia, the EU, and the education standards you should reuse — not reinvent |
| Description (60 words) | You're not the first country to build interoperability. Estonia's X-Road proves the pattern at national scale; the EU's Once-Only Technical System proves it across borders; and the education standards — Giga, OneRoster, CEDS, Europass — are vocabularies to reuse, not reinvent. Four minutes for digital-government leaders. AI prompt to find the published standards your sector should adopt in the description. |
| Tags | X-Road, Estonia digital government, once-only, OOTS, OneRoster, CEDS, Europass, verifiable credentials, Giga, interoperability standards, GovStack |
| Playlist (YouTube) | KP2 — Topic 1: Why a Government Interoperability Framework |
| ToR §4 coverage | §4.6 (real-life examples) — primary; §4.2 (reference frameworks/standards); §4.3 (AI integration — standards-reuse prompt) |
| PAERA citations | §3.4.3 Interoperability framing (Estonia X-Road exemplar) |
| External-link list | Estonia — e-Estonia.com, RIA (ria.ee), X-Road (niis.org); EU Once-Only Technical System; Giga; OneRoster (1EdTech); CEDS; Europass / W3C Verifiable Credentials |

## 4. Production notes

### 4.1 Design standard — the split-screen usability test

The bar for every video in Topic 1 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to follow along and act on the other half. For the Strategist-facing videos in Topic 1, 'act' means draft the corresponding foundation artefact — the Strategic Foundation Document, an entry in the Use-Case Catalogue, a stakeholder map, the opening of a decree memorandum. Each subtopic's AI usage tip operationalises this: the prompt produces the artefact the video is teaching, ready to refine.

### 4.2 Slide branding

Every slide follows the ITU template per the Knowledge Products and Video Materials Guide §3.i: Title text Arial Bold 28pt; Body text Arial 18pt; Background colour #E5F5FB. Text only — no images. Diagrams and text boxes are permitted only where strictly necessary; where used, all labels remain plain text. No country emblems, no agency logos. The recurring single-sentence summary slide that closes each subtopic uses 28pt body type so the line is screenshot-friendly for the listener's own briefings.

### 4.3 No individuals on screen

Per the Guide §3 Note, no individuals appear in any video. Two options are open: an AI-avatar narrator generated by ITU's production pipeline, or computer-screen-only voice-over with no narrator visible. The choice is ITU's; the scripts are agnostic to it. No human narrator is shown in any video.

### 4.4 Voice and tone

Direct address ('your country', 'your minister', 'your agencies'). Plain language at approximately an eighth-grade English level. Examples are drawn from African public-sector reality — donor-funded fragmentation, the citizen filling the same form at five counters, the cross-ministry coordination meeting. The four-layer model, once-only, X-Road and the Progressa institutions are introduced in plain words; the deeper technical configuration is deferred to the architecture and implementation topics. Honest framing throughout: interoperability is a sustained build, not a procurement.

### 4.5 External-link list and 'Find the link in the description'

Every subtopic includes an external-link list in its metadata, and every script references external materials with the convention 'Find the link in the description' rather than reading URLs aloud. ITU's production pipeline compiles the per-video list into the YouTube description. The aggregate list across the seven subtopics is in Section 6.

### 4.6 GitBook companion and the build pack

Each subtopic ships with the video script, slide specification, AI usage tip and metadata. The GitBook companion content — written, in-depth implementation guidance — is produced as a parallel deliverable mirroring the same subtopic numbering. For KP2, the GitBook companion also links each relevant subtopic to the runnable build pack (KP2-GIF/KP2-build-pack): the foundation artefacts introduced in Topic 1 (Strategic Foundation Document, Use-Case Catalogue, stakeholder map) become the inputs the later topics turn into configuration.

## 5. Open calibration items

The v0.1 drafting raised the editorial and structural decisions below. These are forwarded for ITU's discussion at the Tuesday weekly call.

### 5.1 Factual claims to verify

Quantitative and historical claims that are defensible at the chosen level of generality but should be web-verified before final lock: the Estonia X-Road origin date and build-out timeline (1.1, 1.7); the EU Once-Only Technical System / OOTS as the cross-border once-only benchmark (1.3, 1.7); the characterisation of the education semantic standards — Giga, OneRoster, CEDS, Europass / W3C Verifiable Credentials (1.2, 1.7). Cost and timeline figures benchmarked to Estonia's X-Road are deferred to Topic 5 (implementation) but flagged here for consistency.

### 5.2 Editorial tone calls

Sharp lines that deserve a deliberate keep / soften / cut decision: 'procurement rules can require behaviour, they cannot make it the cheapest choice' (1.1); 'an interoperability platform with no owner decays in its second year' (1.6, previewing governance); 'the decree is not paperwork, it is the on-switch' (previewed in 1.1, developed in Topic 2).

### 5.3 Structural calls

(1) Progressa demonstration membership. The Inception Report §6.2 names the Topic-5 demonstration as 'PEMIS ↔ PLR ↔ PDCA ↔ PNIA', but §4.3 lists the four Linkup Security Servers as MoEYS/PEMIS, PNEA, PLR and PNIA — with PDCA being the Digital Credentials Authority used in KP4. This bundle binds to the §4.3 four-server canon (MoEYS/PEMIS, PNEA, PLR, PNIA, Central Server at PDGA). Confirm with ITU; if PDCA is wanted in the KP2 demonstration it becomes a fifth Security Server. (2) The proposed once-only worked flow for Topic 5 — PNEA pre-filling identity from PNIA and enrolment from PLR — is previewed in 1.3 and should be confirmed as the single most compelling once-only story before the demonstration is built.

### 5.4 Dependencies

The Topic-5 live demonstration and the build pack depend on the full Linkup federation being live on ITU cloud (Inception Report action item A4) and on ITU's video look-and-feel template (action item A5). The schedule for taking KP2 to full depth — modules plus the runnable four-system pack — should be settled in the re-phasing discussion with ITU (see the KP2–4 Delivery Plan §6).

## 6. Annex — aggregate external-link list

Compiled across the seven subtopics for ITU's video production pipeline. To be split per subtopic and inserted into the corresponding YouTube descriptions.

| Subtopic | Sources referenced |
| --- | --- |
| 1.1 | EU European Interoperability Framework (EIF); NIIS X-Road documentation (niis.org); PAERA v1.0 §3.4.3 (interoperability framing) and §5.2 (Whole-of-Government, Once-Only). |
| 1.2 | EU EIF four-layer model (Technical, Semantic, Organisational, Legal); NIIS X-Road documentation; PAERA v1.0 §3.4.3. |
| 1.3 | PAERA v1.0 §5.2 Principle #5 (Once-Only); EU Once-Only Technical System (OOTS) reference; EU EIF. |
| 1.4 | EU EIF (interoperability strategy / governance); PAERA v1.0 §3.4.3 and §5.2. |
| 1.5 | PAERA v1.0 §3.4.3 (interoperability framing); EU EIF use-case / interoperability-agreement guidance. |
| 1.6 | EU EIF (organisational layer, stakeholder governance); NIIS X-Road governance model (niis.org). |
| 1.7 | Estonia — e-Estonia.com, RIA (ria.ee), X-Road (niis.org); EU Once-Only Technical System (OOTS); education semantic standards — Giga, OneRoster (1EdTech), CEDS, Europass / W3C Verifiable Credentials. |

All references are publicly accessible and verifiable. The Tuesday review may add or refine items based on ITU's preferred citation style for the YouTube channel.

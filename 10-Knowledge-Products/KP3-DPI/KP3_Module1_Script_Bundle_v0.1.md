<!-- GENERATED from build_kp3_module1_v01.js by bundle_to_md.py — do not hand-edit; edit the build script and regenerate. -->

# KP3 Module 1 — Video Script Bundle v0.1 (ITU-aligned)

| Field | Value |
| --- | --- |
| Document | Video script bundle for Topic 1 of KP3 |
| Version | v0.1 — aligned to ITU Knowledge Products and Video Materials Guide |
| Date | 28 June 2026 |
| Contract reference | RFQ-S-GIGA-2026-022 / Purchase Order #334304 (signed 24 April 2026) |
| Topic persona | S (Strategist) — government DPI lead, sector-ministry digital team, or development-partner lead funding digital public infrastructure |
| Subtopics | Six subtopics (1.1 – 1.6), each shipped as one ~5-minute standalone video |
| Topic runtime | Approximately 27 minutes across six standalone videos |
| Build pack | KP3-DPI/KP3-build-pack — the runnable Progressa DPI foundation this topic frames |
| Prepared by | FiscalAdmin OÜ — Aare Lapõnin (Engagement Lead) |
| For review by | ITU/Giga at Tuesday weekly call; FiscalAdmin team (Karin Kaup, Arne Lapõnin) |

This bundle is the v0.1 working draft of Topic 1 of KP3 — Education DPI Roadmap — the second implementation Knowledge Product. KP1 taught a country how to plan an Enterprise Architecture; KP2 taught how to build the interoperability bus over that plan. KP3 puts the shared building blocks on that bus: the registration block, the master-data registry, the identity block and the payment rail — the foundation every citizen service reuses. Topic 1 is the Strategist-facing frame: what makes infrastructure foundational, the five domains that map it, how to read your own maturity in an afternoon, the costly difference between a foundational block and a sectoral app, the order to build in, and the shortlist of blocks the rest of this knowledge product stands up. The register is plain English, eighth-grade level; technical terms sit in the body, not the headline; each subtopic leads with the public-sector outcome the listener can carry out of the video. The six videos are numbered to ITU's topic/subtopic convention (1.1 through 1.6), each reworked to stand alone. All slide specifications follow ITU's text-only branding. Each subtopic carries an AI usage tip with a copy-paste Claude prompt. External references use the convention 'Find the link in the description'.

## 1. Document context

### 1.1 What this document is

This document collects the six video scripts that make up Topic 1 of Knowledge Product 3 (Education DPI Roadmap), with on-screen slide specifications, per-subtopic metadata, AI usage tips and production notes. It is the v0.1 working draft, aligned to ITU's Knowledge Products and Video Materials Guide, submitted for team review and for discussion with ITU/Giga at the Tuesday weekly call.

Topic 1 is the Strategist-facing frame for KP3. It establishes what makes digital infrastructure foundational rather than sectoral, presents the five domains that map a country's DPI, shows how to read maturity quickly, and ends by naming the build order and the shortlist of foundational blocks the rest of the knowledge product stands up — the registration block, the master-data registry, the identity block and the payment rail.

### 1.2 KP3 is an implementation Knowledge Product

KP3 ships two things. The first is this video bundle, which teaches the build. The second is a runnable build pack — the configuration, prompts, scripts and acceptance checks that stand up a real DPI foundation on the Linkup federation KP2 already runs, across the Progressa institutions. Topic 1 frames the foundation and sets the build order; the configuration is generated and demonstrated in the build topics that stand up each block. The structural backbone throughout is the five-domain DPI model — Access, Data, Interoperability, Identity, Governance. Four of these are PAERA's Foundational Pillars (Access, Digital Data, Interoperability, Digital Identity), the fifth — Governance — is PAERA's governance domain, and the maturity scale is drawn from the UNDP DPI Maturity Model. The building blocks themselves are built to the published GovStack specifications. PAERA anchors the DPI framing (§3.3 Digital Infrastructure, §3.4 Foundational Pillars), the governance domain (§3.1), the sequencing in waves (§5.7 Recommended Roadmap) and the reuse principle (§5.2 Principles).

### 1.3 How to read this document

Section 2 gives Topic 1 at a glance — the six subtopics with persona, runtime and single message. Section 3 contains the full script for each subtopic, with on-screen slide specification, AI usage tip and metadata. Section 4 collects the production notes that apply across all six videos. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate external-link list for ITU's production pipeline.

Within each script section, three rendering conventions are used: italic shaded blocks denote on-screen visual or production cues; regular paragraphs are the spoken voice-over; the slide specification, AI usage tip and metadata follow the script. A reader should be able to imagine the video from these layers without a separate storyboard.

## 2. Topic 1 at a glance

Six standalone subtopic videos. One Strategist persona throughout. Total runtime approximately twenty-seven minutes. Each video has a single message and a single learning outcome, and is discoverable individually via search; the playlist provides navigation but is not required to comprehend any single video.

| # | Title | Single message | Runtime |
| --- | --- | --- | --- |
| 1.1 | What makes infrastructure 'foundational' | A foundational block is population-scale, neutral and reused by many services. That test — not the word 'digital' — tells you what DPI is and what it is not. | ~5 min |
| 1.2 | The five domains, as a map | Access, Data, Interoperability, Identity, Governance — five domains let you see, on one page, which blocks your government already has and which it is missing. | ~5 min |
| 1.3 | Read your maturity in an afternoon | A simple maturity scale and a short questionnaire put a defensible score on each domain — enough to decide where to build, without a six-month study. | ~4 min |
| 1.4 | Foundational blocks vs sectoral apps | The commonest, costliest mistake is funding a sectoral app as if it were DPI. Knowing the difference protects the budget and the reuse. | ~4 min |
| 1.5 | The build order — what comes first | Identity and the registry come before the services that need them. The build order is the actionable core of a 'roadmap'. | ~5 min |
| 1.6 | The shortlist for education | For an education ministry: registration, the learner registry, identity, payment — the four blocks this knowledge product stands up, in that order. | ~4 min |

## 3. The scripts

## 3.1 Subtopic 1.1 — What makes infrastructure 'foundational'

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — government DPI lead, sector-ministry digital team, or development-partner lead funding digital public infrastructure |
| Target runtime | ~5 min (≈600 spoken words) |
| PAERA anchor | UNDP DPI definition; PAERA §3.3 Digital Infrastructure and §3.4 Foundational Pillars; India / Brazil DPI as scale benchmarks |

> **Single message —** _A foundational block is population-scale, neutral and reused by many services. That test — not the word 'digital' — tells you what DPI is and what it is not._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'What makes infrastructure foundational'. Voice-over begins._

Digital public infrastructure is one of the most used phrases in government technology, and one of the least precise. Almost any system gets called DPI by the team that built it. That vagueness is expensive, because a government that cannot tell foundational infrastructure from an ordinary application will fund the wrong things and wonder why nothing connects. This video gives you a sharp test you can apply in a meeting — three questions that separate a foundational block from a system that merely happens to be digital.

> _Slide 2 — Title: 'Three questions that define foundational'. Body, three text rows: 'Population-scale — is it meant to serve everyone, not one programme?' 'Neutral — is it indifferent to the sector or service using it?' 'Reused — do many services build on it instead of each building their own?'_

A block is foundational if it passes three tests. First, population-scale: it is meant to serve the whole population, not the clients of one programme. Second, neutral: it does not care which sector or service is using it — identity does not know or care whether it is verifying a learner, a patient or a farmer. Third, reused: many services build on top of it rather than each building its own copy. Identity, a population registry, a payment rail — these pass all three. They are roads, not destinations.

> _Slide 3 — Title: 'Build the road once'. Body, three text rows: 'Without foundations: every service builds its own identity check, its own registry, its own payment.' 'With foundations: the country builds each once, and every service reuses it.' 'The saving is not the code. It is never building it again.'_

Here is why the distinction is worth money. Without foundational blocks, every new service builds its own way to check identity, its own little registry, its own payment handling. Ten services, ten identity checks, none of which agree. With foundational blocks, the country builds identity once, the registry once, payment once — and every service reuses them. This is the whole-of-government case again, the same case KP1 and KP2 made: you build the road once and everyone drives on it. The reuse is the return on planning, and it is only available to a government that plans its infrastructure as shared, not as a feature of whichever project happens to need it first.

> _Slide 4 — Title: 'Proven at national scale'. Body, two text rows: 'India built population-scale identity and payments that thousands of services now reuse.' 'Brazil's instant-payment rail became shared infrastructure the whole economy builds on.'_

This is not theory. India built population-scale identity and a payments layer that thousands of public and private services now reuse rather than rebuild. Brazil built an instant-payment rail that became shared infrastructure the whole economy now depends on. The lesson for your country is not the specific technology — it is the pattern. A small number of neutral, population-scale, reusable blocks carries an enormous number of services. Get those few blocks right and the services become cheap. Get them wrong, or skip them, and every service stays expensive forever.

> _Slide 5 — Title: 'The cost of calling everything DPI'. Body, two text rows: 'If a single-programme system is funded as foundational, you pay foundational prices for sectoral value.' 'And the real foundations go unfunded, because the budget was already spent.'_

The reason precision matters is budgetary. Foundational blocks deserve sustained, central funding because the whole government depends on them. If you let a single-programme system be dressed up as foundational, you pay those foundational prices for narrow value — and worse, the blocks that really are foundational go unfunded, because the money was already spent on something that only ever served one programme. The three-question test is what keeps that from happening. It is the difference between an infrastructure budget and a pile of disconnected projects.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Foundational means population-scale, neutral and reused. Fund those blocks once, centrally — and let every service stand on them.'_

So when someone calls a system DPI, ask the three questions. Is it for the whole population, is it neutral across sectors, and is it reused by many services? If yes, it is foundational, and it deserves to be planned and funded as shared infrastructure. If no, it is a valuable application — but it belongs on top of the foundations, not in place of them. That single distinction is what the rest of this knowledge product is built on.

> _Slide 7 — Title: 'Sources'. Body: UNDP DPI definition and maturity work; PAERA v1.0 §3.3 and §3.4; India and Brazil DPI as public benchmarks. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'What makes infrastructure foundational'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 1.1) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Three-question test. Three text rows: population-scale, neutral, reused. | The core definition and the spine of the video. Text-only. |
| 3 | Build-the-road-once. Three text rows: without foundations, with foundations, the real saving. | The structural argument: planning enables re-use. The most important slide in the video. |
| 4 | Proven-at-scale. Two text rows: India identity/payments; Brazil instant payments. | Country names in plain typography, no emblems. Benchmarks, not templates to copy. |
| 5 | Cost-of-vagueness. Two text rows: paying foundational prices for sectoral value; real foundations unfunded. | The budget argument. Sets up 1.4 (foundational vs sectoral). |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line, quotable in a budget discussion. |
| 7 | Sources slide. Bulleted text. Footer: 'Find the link in the description.' | Lets viewers verify the definition and the benchmarks via the description. |

### AI usage tip — Test whether a system is foundational DPI or a sectoral application

**What the prompt does:** A Strategist reviewing a portfolio or an investment proposal needs to separate the genuinely foundational blocks from the systems merely called DPI — the judgement that decides what gets central infrastructure funding. This prompt produces a defensible screen.

**Prompt template (copy-paste into Claude):**

```text
Below is a list of digital systems [country X] runs or is proposing to fund [paste a list: each system with a one-line description of what it does and who uses it]. For each system, apply three tests and answer Yes/No/Partial with a one-line reason: (1) POPULATION-SCALE — is it intended to serve the whole population rather than the clients of one programme? (2) NEUTRAL — is it indifferent to sector or service, usable across many? (3) REUSED — do (or could) many services build on it instead of each building their own? Classify each system as FOUNDATIONAL (passes all three), SHARED-BUT-NARROW (passes one or two), or SECTORAL APPLICATION (passes none). Output: a table (system / population-scale / neutral / reused / classification), then a 3-bullet summary naming which systems deserve central infrastructure funding and which should sit on top of the foundations.
```

**Inputs and outputs:** Input: a list of systems with one-line descriptions. Output: a three-test classification table plus a funding-focus summary.

**Safeguard:** The classification reflects only your descriptions — a system can be designed to be neutral yet implemented for one programme. Confirm each 'foundational' call against how the system is actually governed and funded before using it to redirect a budget.

### Metadata

| Field | Value |
| --- | --- |
| Working title | What makes infrastructure foundational |
| YouTube-optimised title | What is digital public infrastructure, really — the three-question test |
| Description (60 words) | Almost every government system gets called DPI, and that vagueness wastes budgets. This five-minute video for digital-government leaders gives a sharp test: a foundational block is population-scale, neutral and reused by many services. Identity, registries and payments pass; a single-programme app does not. Build the foundations once and every service reuses them. AI screening prompt in the description. |
| Tags | digital public infrastructure, DPI, foundational infrastructure, identity, registries, payments, whole-of-government, digital government, GovStack |
| Playlist (YouTube) | KP3 — Topic 1: DPI Foundations and the Build Order |
| ToR §4 coverage | §4.1 (methodology framing); §4.3 (AI integration — screening prompt) |
| PAERA citations | §3.3 Digital Infrastructure; §3.4 Foundational Pillars |
| External-link list | UNDP DPI definition / maturity work; PAERA v1.0 §3.3; PAERA v1.0 §3.4; India and Brazil DPI (public benchmarks) |

## 3.2 Subtopic 1.2 — The five domains, as a map

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — government DPI lead, sector-ministry digital team, or development-partner lead funding digital public infrastructure |
| Target runtime | ~5 min (≈600 spoken words) |
| PAERA anchor | PAERA §3.4 Foundational Pillars (Access, Digital Data, Interoperability, Digital Identity) + §3.1 Governance; UNDP DPI Maturity Model (maturity scale) |

> **Single message —** _Access, Data, Interoperability, Identity, Governance — five domains let you see, on one page, which blocks your government already has and which it is missing._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The five domains, as a map'. Voice-over begins._

Once you can tell a foundational block from a sectoral app, the next question is: which foundations does a country actually need, and how do you keep track of them all without drowning in detail? The answer is a map with five domains. It is small enough to fit on one page and complete enough that every foundational block has a home. Put your country's systems on this map and you can see, at a glance, what you already have and what is missing.

> _Slide 2 — Title: 'Five domains'. Body, five text rows: 'Access — can people reach digital services at all (connectivity, devices, channels)?' 'Data — is data held as trusted registries with quality and protection?' 'Interoperability — can systems exchange data over a shared bus?' 'Identity — can a person or thing be identified and verified?' 'Governance — who decides, funds and protects across all of it?'_

The five domains are these. Access — can people actually reach digital services: connectivity, devices, the channels they use. Data — is the country's data held as trusted registries, with quality and protection, rather than scattered copies. Interoperability — can systems exchange data over a shared bus, which is exactly what KP2 built. Identity — can a person or a school or a payment be identified and verified reliably. And Governance — who decides, who funds, who protects, across all four of the others. Four domains are the things you build; Governance is the domain that holds them together.

> _Slide 3 — Title: 'A shared language, not a filing system'. Body, two text rows: 'The map is the words a minister, an engineer and a funder can all use for the same thing.' 'When business and IT name the gap the same way, the argument is about priorities, not vocabulary.'_

The map is more than a filing system. It is a shared language. A minister, a chief engineer and a development-partner officer usually describe the same problem in three different vocabularies, and half of every meeting is spent discovering they meant the same thing. The five-domain map is the lingua franca that ends that — it gives business and IT one shared language for the country's infrastructure, so the conversation can be about priorities and money instead of about what the words mean. This is the same idea KP1 made about enterprise architecture: a shared language between the business side and the technical side is what lets a government actually plan together.

> _Slide 4 — Title: 'Governance is a domain, not a footnote'. Body, two text rows: 'The commonest failure is treating governance as something you add later.' 'On this map it is a domain in its own right — scored, owned and funded like the rest.'_

Notice that Governance is one of the five domains, not a footnote at the end. This is deliberate, and it is where many DPI efforts go wrong. They build identity and registries and a bus, and leave who-decides-and-who-pays as something to sort out later. Later never comes, and the blocks decay because no one owns them. Putting Governance on the map as a full domain forces you to score it, assign it and fund it like any other — so the foundations stay shared and healthy after the launch enthusiasm fades. We come back to governance in depth at the end of this knowledge product, but it earns its place on the map from the very first look.

> _Slide 5 — Title: 'Progressa on the map'. Body, three text rows: 'Identity — a national identity authority exists, reaches most adults.' 'Interoperability — the bus is live; few services use it yet.' 'Data — the learner registry is partial; school data is scattered.'_

Put our demonstration country, Progressa, on the map and the picture is typical. Identity: a national identity authority exists and reaches most adults — reasonably strong. Interoperability: the bus is live, because KP2 built it, but only a few services use it yet — emerging. Data: there is a learner registry, but it is incomplete, and school data is scattered across spreadsheets — weak. Access and Governance each have their own readings. One page, five readings, and now the team can argue about where to invest with a shared picture in front of them instead of five private ones.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Five domains — Access, Data, Interoperability, Identity, Governance — are the one-page shared language for what your country has built and what it has not.'_

So the second tool, after the three-question test, is the five-domain map. It is complete enough that nothing foundational falls through the cracks, small enough to brief a minister from, and shared enough that business and IT finally use the same words. Score your country on these five domains and you have the picture every later decision in this knowledge product depends on. Putting a defensible number on each domain — quickly, with evidence — is the piece of the method that turns this map into a baseline, and it is well within reach in a single afternoon.

> _Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §3.4 (Foundational Pillars) and §3.1 (Governance); UNDP DPI Maturity Model (maturity scale). Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The five domains, as a map'. | Standard ITU template. No images. |
| 2 | Five-domain map. Five text rows: Access, Data, Interoperability, Identity, Governance, one gloss each. | The spine of the whole topic. A plain stacked text layout — text-box rows, no icons. |
| 3 | Shared-language slide. Two text rows: one vocabulary for minister, engineer, funder; argue priorities not words. | Carries the lingua-franca structural argument — business and IT, one shared language. |
| 4 | Governance-as-a-domain slide. Two text rows: the common failure; governance scored and owned. | Sets up Topic 6 (governance). The 'later never comes' beat is the memorable line. |
| 5 | Progressa-on-the-map slide. Three text rows: identity strong, interoperability emerging, data weak. | Makes the map concrete with the bound Progressa institutions and the KP2 bus. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line for a ministerial briefing. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the five-domain model is from UNDP/PAERA, not invented. |

### AI usage tip — Map your government's systems onto the five DPI domains

**What the prompt does:** A Strategist needs a one-page picture of what the country has across the five domains before deciding where to invest. This prompt sorts a list of existing systems and initiatives into the five domains and surfaces the gaps.

**Prompt template (copy-paste into Claude):**

```text
Below are the digital systems, registries and initiatives [country X] currently has or is planning [paste a list with a one-line description of each]. Sort each one into the five DPI domains — ACCESS (connectivity, devices, service channels), DATA (registries, data quality, protection), INTEROPERABILITY (a shared exchange bus and standards), IDENTITY (identifying and verifying people and things), GOVERNANCE (decision-making, funding, oversight across the others). A system may touch more than one domain; note where. Then, for each domain, give a one-line read of how well covered it looks (Strong / Emerging / Weak / Absent) based only on what the list shows, and name the single most visible gap. Output: a table (system / domain(s) it serves), then a five-row domain summary (domain / coverage read / biggest gap).
```

**Inputs and outputs:** Input: a list of the country's systems and initiatives. Output: a system-to-domain table plus a five-domain coverage summary.

**Safeguard:** Coverage reads are first impressions from your list, not an assessment — a domain can look 'Strong' because a system exists on paper while the registry behind it is empty. Treat this as the map you take into the proper maturity scoring, not as the score itself.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The five domains, as a map |
| YouTube-optimised title | The five domains of digital public infrastructure — your country on one page |
| Description (60 words) | You can't plan infrastructure you can't see. This five-minute video gives digital-government leaders a one-page map with five domains — Access, Data, Interoperability, Identity and Governance — so a minister, an engineer and a funder finally share one language for what the country has and lacks. Governance is a domain, not a footnote. AI prompt to map your own systems in the description. |
| Tags | DPI domains, digital public infrastructure, UNDP DPI maturity, identity, registries, interoperability, governance, digital government, GovStack |
| Playlist (YouTube) | KP3 — Topic 1: DPI Foundations and the Build Order |
| ToR §4 coverage | §4.1 (methodology framing); §4.2 (reference frameworks — UNDP DPI maturity); §4.3 (AI integration — mapping prompt) |
| PAERA citations | §3.4 Foundational Pillars; §3.1 Governance (maturity scale cited to the UNDP DPI Maturity Model) |
| External-link list | PAERA v1.0 §3.4 (Foundational Pillars); PAERA v1.0 §3.1 (Governance); UNDP DPI Maturity Model (maturity scale) |

## 3.3 Subtopic 1.3 — Read your maturity in an afternoon

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — government DPI lead, sector-ministry digital team, or development-partner lead funding digital public infrastructure |
| Target runtime | ~4 min (≈520 spoken words) |
| PAERA anchor | UNDP DPI Maturity Model (maturity levels); PAERA §3.4 (the Foundational Pillars being scored) |

> **Single message —** _A simple maturity scale and a short questionnaire put a defensible score on each domain — enough to decide where to build, without a six-month study._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Read your maturity in an afternoon'. Voice-over begins._

A common reason DPI work stalls before it starts is the belief that you first need a six-month, consultant-led assessment to know where you stand. You do not. To decide where to build, you need a defensible reading of each of the five domains, and you can get that in an afternoon with two simple tools: a maturity scale and a short questionnaire. This video shows you how to score your country quickly enough to actually use the result.

> _Slide 2 — Title: 'A maturity scale, level 0 to 5'. Body, three text rows: 'Low levels — absent, or one-off pilots that do not connect.' 'Middle levels — the block exists and works for some services.' 'High levels — population-scale, reused by default, well governed.'_

Start with a scale. Each domain is scored from the lowest level — the block is absent, or exists only as disconnected pilots — through the middle levels, where it works for some services, up to the highest, where it is population-scale, reused by default, and properly governed. The exact number of levels follows a published maturity model, so your score means the same thing to a development partner as it does to you. What matters is that the scale describes observable reality at each step, so two honest people scoring the same domain land close to the same number.

> _Slide 3 — Title: 'A short questionnaire per domain'. Body, three text rows: 'A handful of plain questions with evidence behind each answer.' 'A facilitator version to run the session; a respondent version to send ahead.' 'Evidence: statistics, a document, or a named official — not an opinion.'_

Behind each domain is a short questionnaire — a handful of plain questions whose answers, taken together, place the domain on the scale. There are two versions: a facilitator version to run a scoring session, and a respondent version you can send to an agency ahead of time. The discipline that makes the score defensible is evidence: every answer points to a statistic, a document, or a named official who confirmed it — not to someone's impression in the room. A score with evidence behind it survives a challenge; a score that is just a feeling does not. These questionnaires ship as a reusable toolkit in the build pack, so you run the same instrument every time and your scores stay comparable year to year.

> _Slide 4 — Title: 'Score, then point at the gaps'. Body, two text rows: 'Five numbers and the evidence behind them — that is the baseline.' 'The lowest, highest-leverage domains are where you build first.'_

The output is a baseline: five numbers, one per domain, each with its evidence. That baseline does two jobs. It tells you honestly where you are, which protects you from both despair and over-confidence. And it points directly at where to invest — the domains that are both low and high-leverage, where moving up a level unlocks the most services. The baseline is not the goal; it is the instrument that aims the investment. A team that has scored itself can argue about priorities from shared facts instead of competing anecdotes.

> _Slide 5 — Title: 'Quick, but honest'. Body, two text rows: 'An afternoon gets you a working baseline, not a final audit.' 'Re-run it as evidence improves — the score is a living number, not a monument.'_

Two cautions keep the speed honest. An afternoon gets you a working baseline, good enough to direct the next decisions — it is not a final audit, and you should not pretend it is. And the score is a living number: you re-run the questionnaire as the evidence improves and as you build, so the baseline tracks reality rather than freezing at the moment of the first workshop. Because the instrument is the same each time, the re-runs are cheap and the trend is meaningful. Speed and honesty are not in tension if you are clear about what the number is for.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A maturity scale plus a short, evidence-backed questionnaire turns an afternoon into a defensible baseline that aims your investment.'_

So you do not wait six months to begin. You take the five-domain map, apply a published maturity scale and a short questionnaire with evidence behind each answer, and in an afternoon you have a baseline you can defend and act on. That baseline is what every later choice in this knowledge product — what to build, in what order, for what cost — is anchored to. And because the questionnaire is a reusable tool, you can hand it to the next ministry and get a comparable reading the same day.

> _Slide 7 — Title: 'Sources'. Body: UNDP DPI Maturity Model (maturity levels); PAERA v1.0 §3.4 (Foundational Pillars). Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Read your maturity in an afternoon'. | Standard ITU template. No images. |
| 2 | Maturity-scale slide. Three text rows: low, middle, high levels described. | The scale in plain words. Cite the published level count at citation-verify. Text-only. |
| 3 | Questionnaire slide. Three text rows: plain questions, two versions, evidence behind each answer. | Names the reusable toolkit shipped in the build pack. The evidence discipline is the key beat. |
| 4 | Score-and-aim slide. Two text rows: five numbers as baseline; low-and-high-leverage domains first. | Reframes the baseline as an instrument that aims investment, not an end in itself. |
| 5 | Quick-but-honest slide. Two text rows: working baseline not final audit; living number, re-run it. | Guards against over-claiming. Text-only. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the maturity model. |

### AI usage tip — Score a DPI domain from your evidence

**What the prompt does:** A Strategist running a quick maturity assessment needs help turning raw evidence about one domain into a defensible level on the scale, with the reasoning shown. This prompt drafts the score and, crucially, names what evidence is still missing.

**Prompt template (copy-paste into Claude):**

```text
I am scoring the [Identity / Data / Interoperability / Access / Governance] domain of [country X]'s digital public infrastructure on a maturity scale from level 0 (absent) to the top level (population-scale, reused by default, well governed). Below is the evidence I have gathered [paste what you know: statistics, documents, what officials told you, what systems exist]. Based only on this evidence: (1) propose a maturity level with a one-paragraph justification that quotes the specific evidence; (2) list what would have to be true to be one level higher; (3) flag every claim in my evidence that is an assertion without a source, because those weaken the score. Output: proposed level, justification, the gap to the next level, and a list of evidence to firm up before the score is final.
```

**Inputs and outputs:** Input: the domain and the evidence gathered for it. Output: a proposed maturity level with justification, the next-level gap, and a list of weak evidence to confirm.

**Safeguard:** The proposed level is only as good as the evidence pasted in — and the model cannot tell a real registry from a claimed one. Treat the level as a draft to confirm with the named sources, and take the 'unsourced claims' list seriously before you publish the baseline.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Read your maturity in an afternoon |
| YouTube-optimised title | Score your country's DPI maturity in an afternoon — without a six-month study |
| Description (60 words) | You don't need a six-month consultancy to know where your digital public infrastructure stands. This four-minute video for digital-government leaders shows how a maturity scale and a short, evidence-backed questionnaire turn an afternoon into a defensible baseline across the five domains — enough to aim your investment. The questionnaires ship as a reusable toolkit. AI scoring prompt in the description. |
| Tags | DPI maturity, maturity assessment, UNDP DPI maturity model, digital public infrastructure, baseline, digital government, GovStack |
| Playlist (YouTube) | KP3 — Topic 1: DPI Foundations and the Build Order |
| ToR §4 coverage | §4.1 (methodology — assessment); §4.3 (AI integration — scoring prompt) |
| PAERA citations | §3.4 Foundational Pillars (maturity scale cited to the UNDP DPI Maturity Model) |
| External-link list | UNDP DPI Maturity Model (maturity levels); PAERA v1.0 §3.4 |

## 3.4 Subtopic 1.4 — Foundational blocks vs sectoral apps

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — government DPI lead, sector-ministry digital team, or development-partner lead funding digital public infrastructure |
| Target runtime | ~4 min (≈520 spoken words) |
| PAERA anchor | UNDP DPI definition (foundational vs application layer); PAERA §3.3 Digital Infrastructure, §3.4 Foundational Pillars; §5.2 (reuse) |

> **Single message —** _The commonest, costliest mistake is funding a sectoral app as if it were DPI. Knowing the difference protects the budget and the reuse._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Foundational blocks vs sectoral apps'. Voice-over begins._

There is one mistake that wastes more DPI money than any other, and it is easy to make with the best intentions. A ministry builds a system its sector genuinely needs — and funds it, names it and governs it as if it were foundational infrastructure. It is not. It is a sectoral application sitting where a foundation should be. This video shows you how to catch that mistake before the money is committed, using the test from the first video applied to a single hard question: build this as a shared block, or as one service's own?

> _Slide 2 — Title: 'The same data, two ways to build it'. Body, two text rows: 'As a sectoral app: the education ministry builds its own learner database, for its own use.' 'As a foundational block: a population registry holds learner identity, and every service reuses it.'_

Take a concrete case. An education ministry needs to know who its learners are. It can build that two ways. The sectoral way: a learner database inside the ministry's own application, designed for the ministry's own use, invisible to everyone else. The foundational way: a shared registry block that holds learner records as part of the country's data layer, governed centrally, with the education service as its first reuser but not its owner. Both store learner data. Only one of them is reusable by the next service that needs to know who a learner is — the scholarship service, the health service, the credential service.

> _Slide 3 — Title: 'Why the sectoral default is so tempting'. Body, two text rows: 'It is faster for the one project, and the ministry controls it entirely.' 'But the second service rebuilds it, the third rebuilds it, and the records never agree.'_

The sectoral default is tempting for the same reason point-to-point integration was tempting in KP2: it is faster for the one project in front of you, and the ministry keeps full control. But it externalises a cost onto the whole government. The second service that needs learner data builds its own copy. The third does the same. Now there are three learner databases that disagree, and a citizen whose record is right in one and wrong in another. The sectoral choice looks cheaper on the project budget and is far more expensive on the country's budget — the opposite of the reuse the country is paying for.

> _Slide 4 — Title: 'The test, applied to spending'. Body, three text rows: 'Will more than one service need this? Then build it as a shared block.' 'Is it population-scale and neutral? Then it is foundational — fund it centrally.' 'Is it truly specific to one service? Then it is an app — build it on top of the foundations.'_

So apply the three-question test to the spending decision. Will more than one service need this capability? If yes, build it as a shared block, not inside one application. Is it population-scale and neutral across sectors? Then it is foundational and belongs on central infrastructure funding. Is it genuinely specific to one service — the rules of one scholarship, the workflow of one exam? Then it is a sectoral application, and the right place for it is on top of the foundations, reusing the shared blocks underneath. The test is not academic. It is the question that decides whether a budget line builds infrastructure or builds another island.

> _Slide 5 — Title: 'Reuse is the whole point'. Body, two text rows: 'Foundations are worth funding precisely because many services stand on them.' 'A foundation with one user is just an expensive app with a grand name.'_

Keep the reason in view. Foundational blocks earn their central funding precisely because many services reuse them — the registry that serves education, scholarships, health and credentials is worth far more than four separate databases. The corollary is sharp: a so-called foundation with only one user is not foundational at all. It is an expensive application with a grand name, and calling it infrastructure does not make it reusable. Protecting the reuse is protecting the entire case for DPI, and this single distinction is how you protect it at the moment the money is allocated.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'If more than one service needs it, build it once as a shared block — not inside the first application that happens to need it.'_

So before you fund the next system, ask whether it is a foundation or an app. If more than one service will need it, build it once as a shared block and let the services reuse it. If it is truly specific to one service, build it on top of the foundations, not in place of them. Get this one judgement right, repeatedly, and your infrastructure budget compounds into shared value. Get it wrong, and you fund a landscape of islands that each cost foundational money and deliver sectoral value.

> _Slide 7 — Title: 'Sources'. Body: UNDP DPI definition (foundational vs application layer); PAERA v1.0 §3.3, §3.4 and §5.2. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Foundational blocks vs sectoral apps'. | Standard ITU template. No images. |
| 2 | Two-ways-to-build slide. Two text rows: learner data as a sectoral app vs as a shared registry block. | The concrete contrast, using the education example. Text-only. |
| 3 | Why-sectoral-is-tempting slide. Two text rows: faster and controlled; but rebuilt and divergent. | Echoes KP2's point-to-point argument. The recognition beat. |
| 4 | The-test-applied slide. Three text rows: more than one user, population-scale/neutral, truly specific. | The decision rule applied to spending. The operational heart of the video. |
| 5 | Reuse-is-the-point slide. Two text rows: foundations earn funding by reuse; one-user foundation is an app. | Carries the planning-enables-re-use argument to the budget decision. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line for a budget committee. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the foundational-vs-application distinction. |

### AI usage tip — Decide whether to build a capability as a shared block or a sectoral app

**What the prompt does:** A Strategist facing an investment proposal needs to decide, defensibly, whether the capability should be built once as a shared foundational block or as one service's own application. This prompt produces the build-vs-embed recommendation with its reasoning.

**Prompt template (copy-paste into Claude):**

```text
Below is a capability [country X] is about to fund [describe it in 2-4 sentences: what it does, which service is asking for it, and what data or function it provides]. Help me decide whether to build it as a SHARED FOUNDATIONAL BLOCK (built once, governed centrally, reused by many services) or as a SECTORAL APPLICATION (specific to the requesting service, built on top of shared foundations). Work through: (1) how many current and foreseeable services would need this capability; (2) whether it is population-scale and neutral across sectors; (3) what is lost if a second service later has to reuse it but it was built inside the first service; (4) what genuinely is service-specific here and should stay in the application. Output: a recommendation (shared block / sectoral app / a split — which parts go where), the reasoning, and the one question to ask the requesting ministry to confirm.
```

**Inputs and outputs:** Input: a 2-4 sentence description of the capability and who is asking for it. Output: a build-vs-embed recommendation with reasoning and a confirming question.

**Safeguard:** The recommendation rests on your estimate of future reusers, which is uncertain — be conservative about declaring something sectoral just because only one service needs it today. When in doubt, design the interface so it could become shared later, even if it is built for one service first.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Foundational blocks vs sectoral apps |
| YouTube-optimised title | The costliest mistake in DPI: funding a sectoral app as if it were infrastructure |
| Description (60 words) | The most expensive DPI mistake is building a sectoral system where a shared foundation belongs. This four-minute video for digital-government leaders shows the test: if more than one service needs a capability, build it once as a shared block — not inside the first application. Reuse is the whole point, and it is what you protect at budget time. AI build-vs-embed prompt in the description. |
| Tags | foundational vs sectoral, DPI, shared services, reuse, registries, identity, digital government, GovStack, budgeting |
| Playlist (YouTube) | KP3 — Topic 1: DPI Foundations and the Build Order |
| ToR §4 coverage | §4.1 (methodology framing); §4.3 (AI integration — build-vs-embed prompt) |
| PAERA citations | §3.3, §3.4 (foundational infrastructure); §5.2 (reuse) |
| External-link list | UNDP DPI definition (foundational vs application layer); PAERA v1.0 §3.3; PAERA v1.0 §3.4; PAERA v1.0 §5.2 |

## 3.5 Subtopic 1.5 — The build order — what comes first

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — government DPI lead, sector-ministry digital team, or development-partner lead funding digital public infrastructure |
| Target runtime | ~5 min (≈600 spoken words) |
| PAERA anchor | PAERA §5.7 (sequencing in waves); §5.2 (reuse); UNDP DPI maturity (dependencies) |

> **Single message —** _Identity and the registry come before the services that need them. The build order is the actionable core of a 'roadmap'._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The build order — what comes first'. Voice-over begins._

A DPI roadmap can become a long document that impresses funders and changes nothing. The part of it that actually matters is short, and it is the part everyone argues about: the order. Which block do you build first? Get the order right and each block stands on the one before it. Get it wrong and you build a service that has nothing to stand on. This video gives you the rule that sets the order — and it comes from dependencies, not from politics.

> _Slide 2 — Title: 'Build what others depend on, first'. Body, three text rows: 'Identity — almost everything needs to know who.' 'The registry — services need a trusted record to read and write.' 'Then the services that reuse both.'_

The rule is simple to state: build what others depend on, first. Identity comes early, because almost every service needs to know who it is dealing with. The registry comes early, because services need a trusted record to read from and write to. Payment comes when services need to move money. And the citizen-facing services come after the blocks they reuse exist — not before. A scholarship service that needs identity, a registry and payment cannot be the first thing you build, however urgently the minister wants it. The blocks underneath it have to be there for it to stand on.

> _Slide 3 — Title: 'A dependency is not a preference'. Body, two text rows: 'You cannot pre-fill a learner's identity from a registry that does not exist yet.' 'The order is forced by what needs what — argue the priorities, not the physics.'_

It is worth being firm about the difference between a dependency and a preference, because meetings blur them. A preference is which service the minister wants to launch first. A dependency is what a service physically cannot run without. You cannot pre-fill a learner's identity from a registry that has not been built. You cannot verify a person against an identity block that does not exist. Those are not opinions to be negotiated; they are the physics of the system. The build order respects the physics first, and then, within what the dependencies allow, you choose by priority. Confusing the two is how programmes commit to a launch date the foundations cannot support.

> _Slide 4 — Title: 'Sequence the work in waves'. Body, three text rows: 'Wave 1 — the foundations almost everything needs (identity, the registry).' 'Wave 2 — the first services that reuse them, end to end.' 'Later waves — more services, more reuse, wider scale.'_

Group the order into waves, because a country builds in stages, not all at once. Wave 1 is the foundations that almost everything depends on — identity and the registry, the blocks with the most services hanging off them. Wave 2 is the first services that reuse those foundations, taken end to end so you prove the whole chain works for a real citizen. Later waves add more services and widen the scale. This wave shape is the standard sequencing pattern, and the principle inside it is the one running through all of KP3: you build the shared blocks once, in dependency order, so that every wave reuses what the waves before it built rather than starting over.

> _Slide 5 — Title: 'A beacon first, then scale'. Body, two text rows: 'Pick one end-to-end service for Wave 2 that proves the foundations in public.' 'One visible success funds the next wave better than any roadmap document.'_

One refinement makes the order political as well as technical. In Wave 2, pick a single beacon — one end-to-end service that uses the foundations to do something a citizen visibly notices, like registering a learner once and having identity pre-filled automatically. A beacon does two things at once: it proves the foundations are real, and it earns the credibility to fund the next wave. A working service that citizens feel is far more persuasive to a finance ministry than the most polished roadmap document. So the order is: foundations first because of dependencies, then a beacon service that turns those foundations into a visible win.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Build what others depend on first — identity and the registry — then the services that reuse them, one visible beacon at a time.'_

So the actionable core of a DPI roadmap is the build order, and the rule that sets it is dependency, not preference. Build identity and the registry first, because everything reuses them. Build the services that depend on them next, starting with one beacon that proves the foundations in public. Sequence the rest in waves, each reusing the last. Which blocks go in the first waves for an education ministry is a concrete question with a concrete answer — the shortlist this knowledge product then stands up.

> _Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §5.7 (sequencing in waves) and §5.2 (reuse); UNDP DPI maturity (dependencies). Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The build order — what comes first'. | Standard ITU template. No images. |
| 2 | Build-what-others-depend-on slide. Three text rows: identity, registry, then services. | The ordering rule. The spine of the video. Text-only. |
| 3 | Dependency-not-preference slide. Two text rows: cannot read a registry that does not exist; physics not politics. | The key distinction that settles the order arguments. Memorable beat. |
| 4 | Waves slide. Three text rows: Wave 1 foundations, Wave 2 first services, later waves scale. | Cite the wave-sequencing pattern (PAERA §5.7) at citation-verify. Carries the reuse argument. |
| 5 | Beacon slide. Two text rows: pick one visible end-to-end service; one success funds the next wave. | Adds the funding-and-momentum logic. Sets up the Progressa Wave-1/2 build. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the wave-sequencing references. |

### AI usage tip — Derive your build order from dependencies

**What the prompt does:** A Strategist needs to turn a list of wanted blocks and services into a defensible build order and wave plan — driven by what depends on what, not by who is loudest. This prompt produces the ordered waves with the dependencies shown.

**Prompt template (copy-paste into Claude):**

```text
Below are the digital building blocks and citizen services [country X] wants to build [paste a list: foundational blocks such as identity, registries, payments; and services such as learner registration, scholarship, credentials]. For each item, note what it depends on to function. Then produce a build order in waves: WAVE 1 should contain the foundational blocks that the most other items depend on and that depend on the least; later waves should contain items only once the things they depend on are already built. Within what the dependencies allow, you may note where a high-priority service argues for pulling a foundation earlier. For Wave 2, recommend one 'beacon' end-to-end service that visibly exercises the Wave 1 foundations. Output: a dependency list per item, the waves with their contents, and the recommended beacon with a one-line justification.
```

**Inputs and outputs:** Input: a list of blocks and services the country wants. Output: a dependency-ordered wave plan plus a recommended beacon service.

**Safeguard:** A dependency plan is only correct if the dependencies are correct — confirm each 'depends on' with the people who will build the item, because a missed dependency puts a service in a wave before its foundation exists. Treat ministerial priority as a tie-breaker within the dependencies, never as a reason to override them.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The build order — what comes first |
| YouTube-optimised title | Which digital building block to build first — the rule that sets the order |
| Description (60 words) | A DPI roadmap's only part that matters is the order. This five-minute video for digital-government leaders gives the rule: build what others depend on first — identity and the registry — then the services that reuse them, sequenced in waves, starting with one visible beacon. Dependencies set the order, not politics. AI prompt to derive your own build order in the description. |
| Tags | DPI roadmap, build order, sequencing, waves, dependencies, identity, registries, digital government, GovStack, PAERA |
| Playlist (YouTube) | KP3 — Topic 1: DPI Foundations and the Build Order |
| ToR §4 coverage | §4.1 (methodology — roadmap/sequencing); §4.3 (AI integration — build-order prompt) |
| PAERA citations | §5.7 (sequencing in waves); §5.2 (reuse) |
| External-link list | PAERA v1.0 §5.7; PAERA v1.0 §5.2; UNDP DPI Maturity Model (dependencies) |

## 3.6 Subtopic 1.6 — The shortlist for education

| Field | Value |
| --- | --- |
| Persona | S (Strategist) — government DPI lead, sector-ministry digital team, or development-partner lead funding digital public infrastructure |
| Target runtime | ~4 min (≈520 spoken words) |
| PAERA anchor | GovStack BB specifications (Registration, Digital Registries, Identity, Payments); Giga School Master Data; PAERA §5.2 |

> **Single message —** _For an education ministry: registration, the learner registry, identity, payment — the four blocks this knowledge product stands up, in that order._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'The shortlist for education'. Voice-over begins._

Everything so far has been a method: test what is foundational, map the five domains, score your maturity, separate blocks from apps, set the order. Now apply it to a real sector and get a concrete answer. For an education ministry standing up its DPI foundation, the shortlist is four blocks — registration, the learner registry, identity and payment. This video names them, says what each is for, and fixes the order in which the rest of this knowledge product stands them up.

> _Slide 2 — Title: 'Four foundational blocks'. Body, four text rows: 'Registration — the front door that captures and validates a record.' 'Registry — the trusted golden record every service reads.' 'Identity — knowing and verifying who.' 'Payment — moving money to or from a person.'_

The four blocks are these. Registration is the front door — the block that captures a person or a record, validates it, and hands a clean entry to the registry. The registry is the trusted golden record: one reliable record per learner that every service reads from and writes to. Identity is knowing and verifying who you are dealing with. And payment is the rail that moves money — a scholarship to a learner, a fee from a parent. Each is built to a published GovStack specification, so the block is portable and a partner can recognise it rather than puzzle over a bespoke design. These four are the foundation; the citizen services come on top.

> _Slide 3 — Title: 'Why these four, for education'. Body, two text rows: 'Every education service needs to register someone, identify them, find their record, and sometimes pay.' 'Build these four once and the services — enrolment, scholarships, credentials — reuse them all.'_

Why these four and not others? Because almost every education service is some combination of the same four moves: register someone or something, identify them, look up or update their record, and sometimes move money. Enrolment registers a learner and reads identity. A scholarship reads the registry and makes a payment. A credential reads identity and the registry. Build these four blocks once, as shared foundations, and every education service is assembled from them rather than rebuilding them. That is the reuse this whole knowledge product is for, made concrete for one ministry — and it is exactly how KP4 will compose its services on top of what KP3 stands up.

> _Slide 4 — Title: 'On the bus KP2 already built'. Body, two text rows: 'These blocks do not float free — they sit on the interoperability bus from KP2.' 'Identity and the learner registry are already members; this knowledge product makes them reusable blocks.'_

These four blocks do not float free. They sit on the interoperability bus KP2 built — the Linkup federation — so that a service can reach any of them over the same shared connection. Two of them are already on that bus as members: the national identity authority and the learner registry were wired up in KP2. KP3's job is to turn them, and the registration and payment blocks, into properly governed, reusable foundational blocks that any service can call. We do not rebuild the bus; we reuse it, and we put the foundations on it. Building on what already exists, rather than starting over, is the reuse-first principle applied to our own work.

> _Slide 5 — Title: 'The order we build them'. Body, four text rows: 'Registration — the front door. ' 'Registry — the golden record it feeds, built deep with quality gates. ' 'Identity and payment — reused, made reachable. ' 'Then wired together and proven with a real once-only call.'_

And the order, following the dependency rule — build what others depend on first — is this. Registration first, as the front door that captures records. The registry next, built in depth with quality gates, because it is the golden record everything else reads. Then identity and payment, which the country already has in some form and which we make reusable and reachable rather than rebuild. And finally the four wired together and proven with a real once-only call on the bus — a learner registered once, identity pre-filled automatically. That sequence is the spine of the rest of this knowledge product, and the build pack that ships with it stands up exactly these four blocks.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Registration, registry, identity, payment — four shared blocks an education ministry builds once, and every service reuses.'_

So the method lands on a concrete shortlist. For education: registration, the learner registry, identity and payment — four foundational blocks, built to published specifications, standing on the bus KP2 already runs, in dependency order. Build these four well and your education services become cheap to assemble and consistent for the citizen. The rest of this knowledge product stands each one up, generates its configuration with Claude, and proves the foundation runs end to end.

> _Slide 7 — Title: 'Sources'. Body: GovStack BB specifications (Registration, Digital Registries, Identity, Payments); Giga School Master Data; PAERA v1.0 §5.2. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'The shortlist for education'. | Standard ITU template. No images. |
| 2 | Four-blocks slide. Four text rows: registration, registry, identity, payment, one gloss each. | The concrete shortlist. Names the GovStack specs. Text-only. |
| 3 | Why-these-four slide. Two text rows: the four recurring moves; services reuse all four. | Carries the planning-enables-re-use argument into the sector. Bridges to KP4. |
| 4 | On-the-KP2-bus slide. Two text rows: blocks sit on the Linkup bus; identity and registry already members. | Binds to the cumulative Progressa build and the reuse-first principle. Uses bound institutions. |
| 5 | Build-order slide. Four text rows: registration, registry deep, identity/payment reachable, wired and proven. | Sets the spine for Topics 2–5 of KP3 and the build pack. Text-only. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line, and the bridge into the build topics. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the GovStack and Giga references. |

### AI usage tip — Draft your sector's foundational-block shortlist

**What the prompt does:** A Strategist in any sector needs to turn the general method into a concrete shortlist of foundational blocks for their own ministry, mapped to the services that will reuse them. This prompt produces that shortlist and the reuse map.

**Prompt template (copy-paste into Claude):**

```text
I lead digital work for the [education / health / social-protection / agriculture] ministry in [country X]. List the citizen-facing services my ministry delivers or plans [paste 5-15 services]. From these services, derive the shortlist of FOUNDATIONAL building blocks the ministry should stand up — drawing on the standard set (registration, registries, identity, payments, consent, notification) but keeping only those that more than one of my services needs. For each block: name it, say what it does in one line, list which of my services would reuse it, and map it to a published GovStack building-block specification. Then propose a build order using the dependency rule (blocks that others depend on first). Output: the block shortlist (block / purpose / reusing services / GovStack spec), and the recommended build order.
```

**Inputs and outputs:** Input: the ministry's list of services. Output: a foundational-block shortlist with a reuse map and a recommended build order.

**Safeguard:** The shortlist is only as good as the service list — a block that looks single-use today may be foundational once you count services you have not listed. Confirm the reuse map with the other ministries that hold or need the same data before committing to build a block centrally.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The shortlist for education |
| YouTube-optimised title | The four digital building blocks every education ministry should build first |
| Description (60 words) | Method becomes concrete here. For an education ministry, the foundational shortlist is four blocks — registration, the learner registry, identity and payment — built to GovStack specifications and standing on the interoperability bus. Build them once and every service, from enrolment to credentials, reuses them. Four minutes for digital-government leaders. AI prompt to draft your own sector's shortlist in the description. |
| Tags | GovStack building blocks, registration, registries, identity, payments, education DPI, reuse, digital government, Giga |
| Playlist (YouTube) | KP3 — Topic 1: DPI Foundations and the Build Order |
| ToR §4 coverage | §4.1 (methodology — block selection); §4.3 (AI integration — shortlist prompt); §4.6 (Progressa worked example) |
| PAERA citations | §5.2 (reuse; blocks cited to the GovStack BB specifications) |
| External-link list | GovStack BB specifications (Registration, Digital Registries, Identity, Payments); Giga School Master Data; PAERA v1.0 §5.2 |

## 4. Production notes

### 4.1 Design standard — the split-screen usability test

The bar for every video in Topic 1 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to follow along and act on the other half. For the Strategist-facing videos in Topic 1, 'act' means produce the corresponding artefact — a three-question screen of the portfolio, a five-domain map of the country's systems, a maturity score with its evidence, a build-vs-embed decision, a dependency-ordered wave plan, a sector block shortlist. Each subtopic's AI usage tip operationalises this: the prompt produces the artefact the video is teaching, ready to refine.

### 4.2 Slide branding

Every slide follows the ITU template per the Knowledge Products and Video Materials Guide §3.i: Title text Arial Bold 28pt; Body text Arial 18pt; Background colour #E5F5FB. Text only — no images. Diagrams and text boxes are permitted only where strictly necessary; where used, all labels remain plain text. No country emblems, no agency logos. The recurring single-sentence summary slide that closes each subtopic uses 28pt body type so the line is screenshot-friendly for the listener's own briefings.

### 4.3 No individuals on screen

Per the Guide §3 Note, no individuals appear in any video. Two options are open: an AI-avatar narrator generated by ITU's production pipeline, or computer-screen-only voice-over with no narrator visible. The choice is ITU's; the scripts are agnostic to it. No human narrator is shown in any video.

### 4.4 Voice and tone

Direct address ('your country', 'your minister', 'your ministry'). Plain language at approximately an eighth-grade English level. Examples are drawn from public-sector reality — the ministry tempted to build its own learner database, the budget that funds an island, the citizen whose record disagrees between two systems. The five domains, the maturity scale, the GovStack blocks and the Progressa institutions are introduced in plain words; the deeper configuration is built in the topics that stand up each block. Honest framing throughout: DPI is a sequenced build on shared foundations, not a single procurement.

### 4.5 External-link list and 'Find the link in the description'

Every subtopic includes an external-link list in its metadata, and every script references external materials with the convention 'Find the link in the description' rather than reading URLs aloud. ITU's production pipeline compiles the per-video list into the YouTube description. The aggregate list across the six subtopics is in Section 6.

### 4.6 GitBook companion and the build pack

Each subtopic ships with the video script, slide specification, AI usage tip and metadata. The GitBook companion content — written, in-depth implementation guidance — is produced as a parallel deliverable mirroring the same subtopic numbering. For KP3, the GitBook companion also links each relevant subtopic to the runnable build pack (KP3-DPI/KP3-build-pack): the five-domain map and the block shortlist framed in Topic 1 become the inputs the build topics turn into the configuration that stands up each foundational block on the Linkup bus.

## 5. Open calibration items

The v0.1 drafting raised the editorial and structural decisions below. These are forwarded for ITU's discussion at the Tuesday weekly call.

### 5.1 Citations to verify before lock

Claims and references to confirm against the published source at citation-verify: the five-domain DPI model (Access, Data, Interoperability, Identity, Governance) — its four build domains map to PAERA §3.4 Foundational Pillars (Access, Digital Data, Interoperability, Digital Identity) and Governance to §3.1, both confirmed against the document headings; the maturity scale (its exact name and number of levels) is attributed to the UNDP DPI Maturity Model and must be checked against the UNDP model rather than paraphrased (1.2, 1.3); the India and Brazil DPI characterisations as scale benchmarks (1.1); the GovStack building-block specifications for Registration, Digital Registries, Identity and Payments (1.6); the Giga School Master Data architecture as the sectoral-registry pattern (1.6). PAERA anchors verified against the v1.0 headings: §3.1 Governance & Policy, §3.3 Digital Infrastructure, §3.4 Foundational Pillars, §5.2 Principles (incl. Principle #5 Once-Only), §5.7 Recommended Roadmap (Inception → High-priority Use Case → Initial Transformation → Mass-scale).

### 5.2 Editorial tone calls

Sharp lines that deserve a deliberate keep / soften / cut decision: 'roads, not destinations' (1.1); 'an expensive application with a grand name' (1.4); 'argue the priorities, not the physics' (1.5). Each is doing real teaching work; all are defensible at the chosen level of generality.

### 5.3 Structural calls — the build-first re-weighting

KP3 in the Inception Report §7 is framed as an assessment-and-roadmap method (five-domain maturity, gap analysis, wave roadmap, investment, governance) with the Progressa build appearing as a worked example. This bundle re-weights KP3 toward the actionable build: Topic 1 is the lean method frame, and Topics 2–5 stand up the four foundational blocks (registration, registry, identity, payment), with the questionnaires shipped as a reusable assessment toolkit in the build pack rather than taught as a standalone module. This is a sharpening of the IR's intent — a runnable DPI foundation — but a visible change of emphasis. Confirm with ITU. See the KP3 Plan (_02_Design/_KP03/KP3_Plan_v0.1.md) §7.

### 5.4 Dependencies and Progressa canon

(1) The deep registry block is proposed as the Progressa Learner Registry (PLR), built on the Giga School Master Data (bronze/silver/gold) pattern; confirm versus standing up the school master-data registry itself as the deep build. (2) The payment block (PayPro) is new in KP3 — it was not one of the four KP2 Linkup Security Servers; confirm it joins the federation as a reachable endpoint for the demonstration. (3) KP3 reuses the live Linkup federation from KP2 (Inception Report action item A4); no new federation stand-up. The schedule for taking KP3 to full depth should be settled in the re-phasing discussion with ITU (see the KP2–4 Delivery Plan §6).

## 6. Annex — aggregate external-link list

Compiled across the six subtopics for ITU's video production pipeline. To be split per subtopic and inserted into the corresponding YouTube descriptions.

| Subtopic | Sources referenced |
| --- | --- |
| 1.1 | UNDP DPI definition and maturity work; PAERA v1.0 §3.3 and §3.4; India and Brazil DPI as public scale benchmarks. |
| 1.2 | PAERA v1.0 §3.4 (Foundational Pillars: Access, Digital Data, Interoperability, Digital Identity) and §3.1 (Governance); UNDP DPI Maturity Model (maturity scale). |
| 1.3 | UNDP DPI Maturity Model (maturity levels); PAERA v1.0 §3.4. |
| 1.4 | UNDP DPI definition (foundational vs application layer); PAERA v1.0 §3.3, §3.4 and §5.2. |
| 1.5 | PAERA v1.0 §5.7 (sequencing in waves) and §5.2 (reuse); UNDP DPI Maturity Model (dependencies). |
| 1.6 | GovStack building-block specifications (Registration, Digital Registries, Identity, Payments); Giga School Master Data architecture; PAERA v1.0 §5.2. |

All references are publicly accessible and verifiable. The Tuesday review may add or refine items based on ITU's preferred citation style for the YouTube channel.

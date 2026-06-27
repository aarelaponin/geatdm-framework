<!-- GENERATED from build_kp2_module5_v01.js by bundle_to_md.py — do not hand-edit; edit the build script and regenerate. -->

# KP2 Module 5 — Video Script Bundle v0.1 (ITU-aligned)

| Field | Value |
| --- | --- |
| Document | Video script bundle for Topic 5 of KP2 |
| Version | v0.1 — aligned to ITU Knowledge Products and Video Materials Guide |
| Date | 27 June 2026 |
| Contract reference | RFQ-S-GIGA-2026-022 / Purchase Order #334304 (signed 24 April 2026) |
| Topic persona | A (Architect) — chief or senior architect, integration lead, or agency technical lead building on the interoperability bus |
| Subtopics | Seven subtopics (5.1 – 5.7), each shipped as one ~5-minute standalone video |
| Topic runtime | Approximately 33 minutes across seven standalone videos |
| Build pack | KP2-GIF/KP2-build-pack — this topic stands up the runnable proving slice: the Linkup federation, the member registrations, and the live once-only exchange that is the build pack's acceptance check |
| Prepared by | FiscalAdmin OÜ — Aare Lapõnin (Engagement Lead) |
| For review by | ITU/Giga at Tuesday weekly call; FiscalAdmin team (Karin Kaup, Arne Lapõnin) |

This bundle is the v0.1 working draft of Topic 5 of KP2 — Government Interoperability Framework. Topic 5 is where the framework is stood up and proven. It takes the configuration the earlier topics produced — the decree, the Governance Pack, the semantic map and the service contracts — and turns it into a running solution: a phased implementation plan, the onboarding of real members, and a live once-only exchange on the Linkup federation. It produces the runnable proving slice of the build pack: the Linkup federation, the member registrations, and the cross-server call that is the framework's acceptance check. The seven videos walk the Architect through the four-phase implementation pattern, the Member Requirements, the Service-Level Agreement, registering a member on X-Road, standing up the federation, the live once-only exchange, and what changes from demonstration to production. The register stays plain English, eighth-grade level; technical terms are introduced in plain words on first use, and each subtopic leads with the capability the listener gains. The seven videos are numbered to ITU's convention (5.1 through 5.7), each reworked to stand alone. All slide specifications follow ITU's text-only branding. Each subtopic carries an AI usage tip with a copy-paste Claude prompt. External references use the convention 'Find the link in the description'.

## 1. Document context

### 1.1 What this document is

This document collects the seven video scripts that make up Topic 5 of Knowledge Product 2 (Government Interoperability Framework), with on-screen slide specifications, per-subtopic metadata, AI usage tips and production notes. It is the v0.1 working draft, aligned to ITU's Knowledge Products and Video Materials Guide, submitted for team review and for discussion with ITU/Giga at the Tuesday weekly call.

Topic 5 is the implementation and demonstration topic of KP2, and the second Architect-facing one. It presents the four-phase implementation pattern with its decision gates and cost frame, the member-onboarding artefacts (the Member Requirements and the Service-Level Agreement), the technical onboarding step of registering a member on X-Road, standing up the Linkup federation, and the live once-only exchange that proves the framework. It closes with what changes from the sandboxed demonstration to a production-grade federation. It stands up the runnable proving slice of the build pack — the framework running, not just described.

### 1.2 KP2 is an implementation Knowledge Product

KP2 ships two things. The first is this video bundle, which teaches the build. The second is a runnable build pack — the configuration, prompts, scripts and acceptance checks that stand up a real once-only exchange on the Linkup (X-Road 7.x) federation across the Progressa institutions. Topic 5 stands up the runnable build pack itself — the Linkup federation, the member registrations, and the live once-only exchange that proves the whole framework works. It is the proving slice: the legal config (the decree), the organisational config (the Governance Pack) and the technical config (the semantic map and service contracts) from the earlier topics all come together here and are demonstrated as one running solution. The structural backbone throughout is the four-layer interoperability model — Technical, Semantic, Organisational, Legal — drawn from the EU European Interoperability Framework and the NIIS X-Road documentation. The four-layer model is cited to those public references, not to PAERA; PAERA anchors the interoperability framing (§3.4.3), the relevant principles including Once-Only (§5.2), the legal layer (§3.2) and the governance setup (§3.1.3).

### 1.3 How to read this document

Section 2 gives Topic 5 at a glance — the seven subtopics with persona, runtime and single message. Section 3 contains the full script for each subtopic, with on-screen slide specification, AI usage tip and metadata. Section 4 collects the production notes that apply across all seven videos. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate external-link list for ITU's production pipeline.

Within each script section, three rendering conventions are used: italic shaded blocks denote on-screen visual or production cues; regular paragraphs are the spoken voice-over; the slide specification, AI usage tip and metadata follow the script. A reader should be able to imagine the video from these layers without a separate storyboard.

## 2. Topic 5 at a glance

Seven standalone subtopic videos. One Architect persona throughout. Total runtime approximately thirty-three minutes. Each video has a single message and a single learning outcome, and is discoverable individually via search; the playlist provides navigation but is not required to comprehend any single video.

| # | Title | Single message | Runtime |
| --- | --- | --- | --- |
| 5.1 | Plan the build in four phases | Core Platform, Pilot, Multi-agency, Optimisation — four phases with decision gates and a cost frame you can defend to a funder. | ~5 min |
| 5.2 | State what a member must have — the Member Requirements | The Member Requirements template tells an agency exactly what it must have before it can join — no surprises at go-live. | ~4 min |
| 5.3 | Make 'connected' mean 'dependable' — the SLA | A Service-Level Agreement turns 'connected' into 'dependable' — the template makes it a fill-in, not a negotiation from scratch. | ~4 min |
| 5.4 | Register a member on X-Road | Generate the subsystem registration and the access-control list — the configuration that admits one agency to the bus. | ~5 min |
| 5.5 | Stand up the federation | Central Server, four Security Servers, a Test CA — the Linkup federation, stood up from the run book. | ~5 min |
| 5.6 | Run the once-only exchange, live | PNEA issues a credential and pre-fills identity from PNIA and enrolment from PLR — a real cross-server call, the data asked once. | ~5 min |
| 5.7 | From demonstration to production | What changes between the sandboxed Linkup demonstration and a production-grade federation a country would actually run — including migrating off and retiring the legacy point-to-point links. | ~5 min |

## 3. The scripts

## 3.1 Subtopic 5.1 — Plan the build in four phases

| Field | Value |
| --- | --- |
| Persona | A (Architect) — chief or senior architect, integration lead, or agency technical lead building on the interoperability bus |
| Target runtime | ~5 min (≈580 spoken words) |
| PAERA anchor | Estonia X-Road build-out (cost/timeline benchmark); ITU DPI Safeguards; NIIS X-Road implementation |

> **Single message —** _Core Platform, Pilot, Multi-agency, Optimisation — four phases with decision gates and a cost frame you can defend to a funder._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Plan the build in four phases'. Voice-over begins._

You do not onboard a whole government at once. You build the framework in four phases, each delivering something real, each with a decision gate before the next is funded, and each with a cost you can put in front of a funder. The phasing is what keeps the programme alive in the long stretch between the launch enthusiasm and the mature federation — and it is drawn from how Estonia and others actually built their buses, not from a textbook.

> _Slide 2 — Title: 'Four phases'. Body, four text rows: 'Phase 1 — Core Platform (months 0–6): the bus, the first two members, one real exchange.' 'Phase 2 — Pilot Services (6–12): a handful of real once-only services.' 'Phase 3 — Multi-agency Onboarding (12–18): scale the members onto the proven platform.' 'Phase 4 — Optimisation and Scale (18–24+): performance, monitoring, the long tail.'_

The four phases. Phase one, Core Platform, in the first six months — stand up the bus, onboard the first two members, and run one real exchange end to end. Phase two, Pilot Services, months six to twelve — turn that into a handful of real once-only services that citizens actually notice. Phase three, Multi-agency Onboarding, twelve to eighteen — bring the wider set of agencies onto a platform that has already been proven. Phase four, Optimisation and Scale, eighteen months and beyond — performance, monitoring, and the long tail of services. Each phase ends with a decision gate: a go or no-go where the funder and the Steering Committee confirm the phase actually delivered before the next is funded.

Notice what the phasing protects. Phase one builds the shared bus once — and every phase after it, and every agency that later joins, reuses that one investment rather than rebuilding it. That is the whole-of-government re-use logic turned into a delivery plan: the country pays for the platform once, in phase one, and consumes it many times after. A funder who sees that is paying for a national platform, not a single project — which is exactly the case the phasing lets you make.

One caution, because the words collide: these four build phases are not the five-phase EA lifecycle from KP1 — Discover, Assess, Adapt, Plan, Execute and Govern. That lifecycle is the enterprise-architecture method that produced your plan; this four-phase plan is how you deliver the interoperability framework inside its Execute-and-Govern phase. The lifecycle designs the target architecture; this schedule builds the bus. Keep the two straight when you brief anyone who took KP1.

> _Slide 3 — Title: 'Each phase carries four things'. Body, four text rows: 'Outcomes — what it delivers.' 'A decision gate — go / no-go before the next phase.' 'Risks — named honestly.' 'A cost frame — benchmarked, not guessed.'_

For each phase, write down four things. The outcomes it delivers. The decision gate that closes it. The risks, named honestly. And the cost frame — what the phase costs, benchmarked against what comparable platforms have cost. Estonia's X-Road build-out and the ITU DPI Safeguards investment guidance give you defensible benchmarks, so your numbers are anchored to real experience rather than guessed. A cost frame a funder can check is a cost frame a funder can approve — and cost is the number a funder scrutinises hardest.

The discipline the phasing enforces is to deliver a visible win early and often. A platform that goes dark for two years and then tries to launch everything at once is the programme most likely to slip, lose its funding, or lose its political cover when the minister changes. Four phases, each with a real deliverable and a gate, keep the framework funded and trusted the whole way up.

> _Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Four phases, four decision gates, a benchmarked cost frame at each — a build plan a funder can approve and a programme that survives its second year.'_

So you plan the build in four phases: Core Platform, Pilot, Multi-agency, Optimisation. Each delivers a real outcome, each ends with a gate, each carries a benchmarked cost frame. That is how you turn an interoperability framework from an ambition into a fundable, deliverable programme — one that pays for the shared platform once and reuses it across the whole of government.

> _Slide 5 — Title: 'Sources'. Body: Estonia X-Road build-out (cost/timeline benchmark); ITU DPI Safeguards; NIIS X-Road implementation. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Plan the build in four phases'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP2 / 5.1) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Four-phases slide. Four text rows with phase, window and outcome. | The implementation spine. Plain text rows, no icons. |
| 3 | Each-phase-four-things slide. Four text rows: outcomes, gate, risks, cost frame. | The per-phase template. Text-only. |
| 4 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 5 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the cost benchmarks. |

### AI usage tip — Draft your four-phase implementation plan with gates and cost frame

**What the prompt does:** An architect needs a phased implementation plan — outcomes, decision gates, risks and a benchmarked cost frame per phase — to take to a funder. This prompt drafts it.

**Prompt template (copy-paste into Claude):**

```text
Draft a four-phase implementation plan for [country X]'s Government Interoperability Framework. The phases are: Phase 1 Core Platform (months 0–6), Phase 2 Pilot Services (6–12), Phase 3 Multi-agency Onboarding (12–18), Phase 4 Optimisation and Scale (18–24+). Use this context [paste: the first agencies and exchanges from your Use-Case Catalogue, any budget envelope, key constraints]. For each phase, produce: (1) the outcomes it delivers; (2) the decision gate that closes it (the go/no-go criteria); (3) the top 3 risks and a mitigation each; (4) a cost frame — the main cost drivers, benchmarked to comparable platforms (note where to verify against Estonia's X-Road experience and the ITU DPI Safeguards). CRITICAL: mark every specific cost or duration figure as [confirm: benchmark before quoting], since these are the numbers a funder scrutinises. Output: the four-phase plan plus a one-line funding ask per phase.
```

**Inputs and outputs:** Input: the first agencies/exchanges, any budget envelope and constraints. Output: a four-phase plan with outcomes, gates, risks and a cost frame.

**Safeguard:** Cost and duration figures are the most scrutinised and the easiest to get wrong — treat every number as [confirm] and benchmark it against documented comparable builds before putting it in front of a funder. A phased plan with invented costs loses credibility on the first challenged figure.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Plan the build in four phases |
| YouTube-optimised title | The four-phase plan that gets an interoperability platform funded — and keeps it funded |
| Description (60 words) | You don't onboard a whole government at once. Build in four phases — Core Platform, Pilot, Multi-agency, Optimisation — each with a real deliverable, a decision gate, named risks and a benchmarked cost frame. Phase one builds the shared bus once; every phase after re-uses it. It's how the programme survives its second year. Five minutes for architects. AI plan prompt in the description. |
| Tags | implementation plan, phased delivery, interoperability roadmap, cost frame, X-Road build, decision gates, GovStack, digital government |
| Playlist (YouTube) | KP2 — Topic 5: Implementation, onboarding and the live demonstration |
| ToR §4 coverage | §4.1 (methodology, implementation); §4.3 (AI integration — phased-plan prompt) |
| PAERA citations | (implementation pattern cited to NIIS X-Road and the Estonia build-out; cost guidance to ITU DPI Safeguards) |
| External-link list | Estonia X-Road build-out; ITU DPI Safeguards; NIIS X-Road implementation guidance (niis.org) |

## 3.2 Subtopic 5.2 — State what a member must have — the Member Requirements

| Field | Value |
| --- | --- |
| Persona | A (Architect) — chief or senior architect, integration lead, or agency technical lead building on the interoperability bus |
| Target runtime | ~4 min (≈480 spoken words) |
| PAERA anchor | NIIS X-Road member requirements and onboarding; EU EIF |

> **Single message —** _The Member Requirements template tells an agency exactly what it must have before it can join — no surprises at go-live._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'State what a member must have — the Member Requirements'. Voice-over begins._

The fastest way to wreck an onboarding schedule is to discover, on go-live day, that the joining agency is not actually ready — no security server, no adopted standards, no lawful basis. The Member Requirements template prevents that. It states, up front, exactly what an agency must have in place before it can join, so readiness is checked weeks ahead, not discovered at the deadline.

> _Slide 2 — Title: 'What a member must have'. Body, six text rows: 'A security server — its gateway at the edge.' 'A registered identity on the bus — its subsystem.' 'The standards portfolio adopted.' 'Its data cleaned and conformed to the schema.' 'A lawful basis for its exchanges — from the decree.' 'A named technical contact who can fix things.'_

The requirements are concrete. A security server — the gateway device at the agency's edge. A registered identity on the bus — its subsystem. The standards portfolio adopted, so its services speak the framework's language. Its data cleaned and conformed to the agreed schema, because a member with stale or malformed data poisons every exchange that uses it. A lawful basis for the exchanges it will take part in, drawn from the decree. And a named technical contact who can actually fix things when they break. Miss any one, and the agency is not ready, however willing it is.

> _Slide 3 — Title: 'Readiness becomes a checklist, not a judgement'. Body, single text block: 'Instead of an architect deciding, agency by agency, whether someone seems ready, the agency works the list and either meets each item or does not. That objectivity lets you schedule onboarding with confidence — and protects the framework from a half-ready member that breaks things.'_

The template turns readiness from a judgement call into an objective checklist. Instead of an architect deciding, agency by agency, whether someone seems ready, the agency works through the list and either meets each item or does not. That objectivity is what lets you schedule onboarding with confidence, and it protects the framework from a member that joins half-ready and breaks the exchanges it touches. It also takes the awkwardness out of saying 'not yet' — the list says it for you.

And the template is reused for every member: fill it once as a template, apply it to each joining agency in turn. It is the front end of the onboarding workflow — an agency that passes the Member Requirements is an agency ready to be registered on the bus, which is the technical step that admits it.

> _Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A Member Requirements checklist makes readiness objective and checkable weeks before go-live — so onboarding is scheduled, not gambled.'_

So before any agency is registered on the bus, it passes the Member Requirements: a security server, a registered identity, the standards adopted, clean data, a lawful basis, a named contact. The checklist makes readiness objective, lets you schedule onboarding instead of gambling on it, and is reused for every member that follows.

> _Slide 5 — Title: 'Sources'. Body: NIIS X-Road member requirements and onboarding; EU EIF. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'State what a member must have — the Member Requirements'. | Standard ITU template. No images. |
| 2 | What-a-member-must-have slide. Six text rows of requirements. | The checklist. Plain text, readable on mobile. |
| 3 | Readiness-is-a-checklist slide. Single text block on objectivity. | The value of the template. Text-only. |
| 4 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 5 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the member-onboarding references. |

### AI usage tip — Draft the Member Requirements checklist

**What the prompt does:** An architect needs a Member Requirements checklist an agency completes before joining the bus — objective, reusable, tied to the decree and the standards portfolio. This prompt drafts it.

**Prompt template (copy-paste into Claude):**

```text
Draft a Member Requirements checklist for an agency joining [country X]'s interoperability bus. Cover, as objective yes/no items an agency can self-assess: (1) a security server deployed at the agency's edge; (2) a registered identity (subsystem) requested; (3) the framework's standards portfolio adopted by the agency's services; (4) the data it will provide cleaned and conformed to the agreed schema, with a named authoritative source and identifier; (5) a lawful basis for each exchange it will join, referencing the relevant decree article; (6) a named technical contact and an incident channel. For each item, state what 'met' looks like and what evidence confirms it. Add a final readiness verdict (Ready / Not yet, with the gaps). Output: the checklist as a table (requirement / met? / evidence) plus the verdict block.
```

**Inputs and outputs:** Input: the framework's standards portfolio and decree (referenced). Output: a reusable Member Requirements checklist with evidence and a readiness verdict.

**Safeguard:** A self-assessed 'met' is a claim, not proof — require the evidence column to be filled and spot-check the highest-risk items (clean data, lawful basis) before scheduling go-live. An agency that ticks every box on paper but has not actually cleaned its data will still poison the exchanges it joins.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The Member Requirements |
| YouTube-optimised title | What an agency must have before it can join an interoperability bus |
| Description (60 words) | Onboarding wrecks on go-live day when an agency turns out not to be ready. The Member Requirements template states up front what every member must have: a security server, a registered identity, the standards adopted, clean data, a lawful basis, a named contact. It makes readiness an objective checklist, checked weeks ahead. Four minutes for architects. AI checklist prompt in the description. |
| Tags | member requirements, onboarding, interoperability, security server, member readiness, X-Road, GovStack, digital government |
| Playlist (YouTube) | KP2 — Topic 5: Implementation, onboarding and the live demonstration |
| ToR §4 coverage | §4.1 (methodology, onboarding); §4.3 (AI integration — member-requirements prompt) |
| PAERA citations | (member requirements cited to NIIS X-Road onboarding and EIF) |
| External-link list | NIIS X-Road member requirements and onboarding (niis.org); EU EIF |

## 3.3 Subtopic 5.3 — Make 'connected' mean 'dependable' — the SLA

| Field | Value |
| --- | --- |
| Persona | A (Architect) — chief or senior architect, integration lead, or agency technical lead building on the interoperability bus |
| Target runtime | ~4 min (≈480 spoken words) |
| PAERA anchor | NIIS X-Road service-level / SLA guidance; the member obligations (Topic 3); EU EIF |

> **Single message —** _A Service-Level Agreement turns 'connected' into 'dependable' — the template makes it a fill-in, not a negotiation from scratch._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Make 'connected' mean 'dependable' — the SLA'. Voice-over begins._

A member being connected is not the same as a member being dependable. A service that is up most of the time, answers slowly, and has no one to call when it breaks is connected but useless to a consumer who needs the data at the moment a citizen is standing at the counter. The Service-Level Agreement is what turns connected into dependable — and a template turns writing one from a negotiation into a fill-in.

> _Slide 2 — Title: 'What the SLA sets'. Body, five text rows: 'Availability — the uptime the provider commits to.' 'Response time — how fast a call returns.' 'Support hours — when there is someone to help.' 'Incident response — who to call, and how fast.' 'Change notice — how much warning before a change.'_

The SLA sets the numbers a consumer can rely on. Availability — the uptime the provider commits to. Response time — how fast a call returns. Support hours — when there is someone to help. Incident response — who to call when the service fails, and how quickly they will respond. And change notice — how much warning a provider gives before changing the service, so consumers are not broken by a surprise. These are the numbers that turn a connection into a dependency a consumer can build a real citizen service on.

> _Slide 3 — Title: 'The SLA makes the member obligations specific'. Body, single text block: 'The governance obligations said a member meets service levels. The SLA is where those service levels become specific numbers, agreed and signed. Without it, 'meets service levels' is a wish; with it, it is a commitment you can hold a member to.'_

The SLA operationalises the member obligations from the governance topic. Those obligations said, in principle, that a member meets service levels; the SLA is where the service levels become specific numbers, agreed and signed. Without the SLA, 'meets service levels' is a wish. With it, it is a commitment the Operating Authority can hold a member to — and a number a consumer can plan around.

One rule of fairness, and it is the rule that actually gets SLAs signed: set the numbers with the provider, not for them. A target the provider cannot meet is a target the provider will quietly ignore, and an SLA everyone ignores is worse than none. Agree numbers the provider can genuinely hit — and raise them over time as the platform matures — and the SLA becomes real rather than decorative. The template then makes it fast: fill in the targets for each service, agree them with the provider, sign, and reuse the same template for every service on the bus.

> _Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The SLA is the numbers that make a connection dependable — agreed with the provider, signed, and reused for every service.'_

So the Service-Level Agreement is what turns a connected member into a dependable one. Availability, response time, support, incident response, change notice — the numbers a consumer can rely on, made specific from the governance obligations, agreed with the provider so they are real, and captured in a template you reuse for every service. That is the difference between a bus that works in a demonstration and one a country can run citizen services on.

> _Slide 5 — Title: 'Sources'. Body: NIIS X-Road service-level / SLA guidance; the member obligations (Topic 3); EU EIF. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Make 'connected' mean 'dependable' — the SLA'. | Standard ITU template. No images. |
| 2 | What-the-SLA-sets slide. Five text rows of the SLA dimensions. | The core list. Text-only. |
| 3 | SLA-makes-obligations-specific slide. Single text block linking to the governance obligations. | Ties the SLA to Topic 3. Text-only. |
| 4 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 5 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the SLA references. |

### AI usage tip — Draft the Service-Level Agreement template

**What the prompt does:** An architect needs an SLA template that turns the governance obligations into specific, signable service-level numbers for each service on the bus. This prompt drafts it.

**Prompt template (copy-paste into Claude):**

```text
Draft a Service-Level Agreement template for services on [country X]'s interoperability bus. Cover, as fields to set per service: (1) availability / uptime target; (2) response-time target; (3) support hours; (4) incident response — contact channel and response/resolution times by severity; (5) change-notice period; (6) the reporting that proves the levels are being met. For each field, suggest a sensible starting value for a demonstration/pilot phase and a separate, higher target for production, and note that the value must be agreed with the provider agency (mark as [confirm: agree with provider]). Reference the member obligations from the governance pack as the source of these commitments. Output: the SLA template (field / pilot value / production value / agreed-with-provider?) plus a short note on raising targets as the platform matures.
```

**Inputs and outputs:** Input: the governance member obligations (referenced). Output: an SLA template with pilot and production targets per service.

**Safeguard:** An SLA target set without the provider's agreement will be ignored — every number must be confirmed as achievable with the provider agency before signing. Start with honest pilot-phase numbers and raise them as the platform matures; an over-ambitious SLA signed under pressure damages trust the first time it is breached.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The Service-Level Agreement |
| YouTube-optimised title | Connected isn't dependable: the SLA that makes a government data service reliable |
| Description (60 words) | A connected service that's slow, often down, and has no one to call is useless when a citizen is at the counter. The Service-Level Agreement turns 'connected' into 'dependable': availability, response time, support, incident response, change notice. Set the numbers with the provider, sign, reuse. Four minutes for architects. AI SLA-template prompt in the description. |
| Tags | SLA, service level agreement, reliability, interoperability operations, X-Road, member obligations, GovStack, digital government |
| Playlist (YouTube) | KP2 — Topic 5: Implementation, onboarding and the live demonstration |
| ToR §4 coverage | §4.1 (methodology, operations); §4.3 (AI integration — SLA-template prompt) |
| PAERA citations | (SLA cited to NIIS X-Road guidance; obligations to the Topic-3 governance pack) |
| External-link list | NIIS X-Road service-level guidance (niis.org); EU EIF |

## 3.4 Subtopic 5.4 — Register a member on X-Road

| Field | Value |
| --- | --- |
| Persona | A (Architect) — chief or senior architect, integration lead, or agency technical lead building on the interoperability bus |
| Target runtime | ~5 min (≈560 spoken words) |
| PAERA anchor | NIIS X-Road member and subsystem registration; access-control list configuration |

> **Single message —** _Generate the subsystem registration and the access-control list — the configuration that admits one agency to the bus._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Register a member on X-Road'. Voice-over begins._

Everything so far has been preparation — the phased plan, the Member Requirements, the Service-Level Agreement. Registering a member on X-Road is the technical step that actually admits an agency to the bus, and it produces real configuration: the subsystem registration and the access-control list. This is a build step, and you can generate the configuration with Claude — then confirm it against the live registry before it goes anywhere.

> _Slide 2 — Title: 'Two configuration artefacts'. Body, two text rows: 'The subsystem — the member's registered identity on the bus: member class, member code, subsystem code.' 'The access-control list — which other members may call this member's services.'_

Registering a member produces two configuration artefacts. The subsystem — the member's registered identity on the bus, made of its member class, member code and subsystem code, the identifiers the bus uses to route a call to it. And the access-control list — which other members are allowed to call this member's services, because being on the bus does not mean everyone may call everything; access is granted deliberately, service by service. Together, these two artefacts admit the agency and say exactly who may talk to it.

> _Slide 3 — Title: 'Generate, then confirm against the registry'. Body, two text rows: 'bb-config-gen drafts the subsystem and the access-control entries from the member's details and the access policy.' 'Every identifier is a [confirm] until checked against the live X-Road registry — a wrong member code routes nowhere, or to the wrong agency.'_

The bb-config-gen play generates these from the member's details and the access policy. But every identifier — the member code, the subsystem code, the certificate references — is a [confirm] until you check it against the live X-Road registry. This is the place the confirm discipline matters most in the whole framework: a wrong member code does not throw a clear error. It silently routes nowhere, or worse, to the wrong agency, which in an interoperability bus means one citizen's data going to a service that asked about another. Generate the registration; confirm every identifier against the registry before you deploy it.

And this is the same registration shape for every member — fill the member's details into the same template, generate the same two artefacts. The onboarding workflow and the governance RACI wrap it into a repeatable process: the Member Requirements confirm the agency is ready, the RACI says which body approves, and this registration configuration admits it. You produce the executable configuration here; the workflow and the approvals from the earlier topics surround it. That reuse — one registration pattern applied to every member — is what lets the framework onboard its twentieth agency as cleanly as its second.

> _Slide 4 — Title: 'It is config, not paperwork'. Body, single text block: 'The subsystem and access-control list go straight into the build pack, under the member's folder. They are part of the runnable proving slice — what kp-solution-verify deploys and checks. Registering a member is executable configuration that puts an agency on the bus.'_

The configuration goes straight into the build pack, under the member's folder — it is part of the runnable proving slice, the thing kp-solution-verify deploys and checks. So registering a member is not paperwork that describes an intention. It is executable configuration that puts a real agency on the bus, ready to provide and consume services. When you have registered the four Progressa members this way, the federation has the participants it needs for a real exchange.

> _Slide 5 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The subsystem registration and the access-control list are the configuration that admits a member — generated, confirmed against the registry, and deployed.'_

So registering a member is where onboarding becomes configuration. Generate the subsystem and the access-control list with bb-config-gen, confirm every identifier against the live registry, and deploy them into the build pack. Two artefacts, the same shape for every member, admitting one agency to the bus and naming who may call it. That is the technical core of onboarding — and the configuration the demonstration runs on.

> _Slide 6 — Title: 'Sources'. Body: NIIS X-Road member and subsystem registration; access-control list configuration. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Register a member on X-Road'. | Standard ITU template. No images. |
| 2 | Two-artefacts slide. Two text rows: the subsystem, the access-control list. | The config artefacts. Identifiers glossed in plain words. Text-only. |
| 3 | Generate-then-confirm slide. Two text rows: bb-config-gen drafts; [confirm] against the registry. | The anti-invention safeguard, at its highest-stakes point. |
| 4 | It-is-config slide. Single text block on the build pack and kp-solution-verify. | The build-pack connection — executable config, not paperwork. |
| 5 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 6 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the registration references. |

### AI usage tip — Generate the X-Road member registration (subsystem + ACL)

**What the prompt does:** An architect onboarding an agency needs the X-Road subsystem registration and the access-control list generated from the member's details and the access policy — the config that admits the member. This is the bb-config-gen play for member onboarding.

**Prompt template (copy-paste into Claude):**

```text
Generate the X-Road member-registration configuration for an agency joining [country X]'s bus. Inputs: the member's details [paste: organisation name, the member class and any known member/subsystem codes], the services it will provide [from its service contracts], and the access policy [which other members may call which of its services]. Produce: (1) the SUBSYSTEM registration — member class, member code, subsystem code, and the service codes it exposes; (2) the ACCESS-CONTROL LIST — for each service, the consumer subsystems permitted to call it. CRITICAL: output every member code, subsystem code and service code as [confirm: verify against the live X-Road registry] — do not invent identifiers, because a wrong code silently routes nowhere or to the wrong agency. Also list, for an onboarding checklist: the certificate steps and the approval (per the governance RACI) that must happen alongside this config. Output: the subsystem registration, the access-control list, and the [confirm] / approval checklist.
```

**Inputs and outputs:** Input: the member's details, its services, and the access policy. Output: the subsystem registration and access-control list, with [confirm] placeholders and an onboarding checklist.

**Safeguard:** Every X-Road identifier must be confirmed against the live registry before deployment — this is the single highest-stakes [confirm] in the framework, because a wrong code can route one citizen's data to a service that asked about another. Deploy to a sandbox first and verify the access-control list denies an unauthorised caller, not only that it permits the authorised one.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Register a member on X-Road |
| YouTube-optimised title | Registering an agency on X-Road — the configuration that admits a member to the bus |
| Description (60 words) | Registering a member on X-Road is the technical step that admits an agency: it produces two config artefacts — the subsystem (its identity on the bus) and the access-control list (who may call its services). Generate them with AI, but confirm every identifier against the live registry — a wrong code routes nowhere or to the wrong agency. Five minutes for architects. AI registration prompt in the description. |
| Tags | X-Road registration, subsystem, access control list, member onboarding, interoperability config, GovStack, AI, digital government |
| Playlist (YouTube) | KP2 — Topic 5: Implementation, onboarding and the live demonstration |
| ToR §4 coverage | §4.1 (methodology, onboarding); §4.3 (AI integration — bb-config-gen member registration); §4.5 (build-pack artefact) |
| PAERA citations | (member/subsystem registration cited to NIIS X-Road) |
| External-link list | NIIS X-Road member and subsystem registration; access-control list configuration (niis.org) |

## 3.5 Subtopic 5.5 — Stand up the federation

| Field | Value |
| --- | --- |
| Persona | A (Architect) — chief or senior architect, integration lead, or agency technical lead building on the interoperability bus |
| Target runtime | ~5 min (≈560 spoken words) |
| PAERA anchor | NIIS X-Road federation (Central Server, Security Server, Test CA); the Linkup federation (ITU cloud) |

> **Single message —** _Central Server, four Security Servers, a Test CA — the Linkup federation, stood up from the run book._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Stand up the federation'. Voice-over begins._

With members registered, you stand up the federation itself — the live platform they connect to. For our demonstration this is Linkup, the X-Road federation on the ITU cloud. It has a small set of components, each with a clear job, and you bring it up from a run book, so that anyone with the build pack can reproduce the same federation rather than admire a one-off.

> _Slide 2 — Title: 'The components'. Body, three text rows: 'Central Server (at PDGA) — the registry of members and services; the heart every security server checks with.' 'Four Security Servers (MoEYS/PEMIS, PNEA, PLR, PNIA) — each member's gateway at the edge.' 'A Test CA — the trust anchor that issues the certificates.'_

The federation has three kinds of component. The Central Server, operated by PDGA, is the registry of who is a member and what services exist — the heart that every security server checks with before it routes a call. The four Security Servers — one each at MoEYS with its school-information system PEMIS, the examination authority PNEA, the learner registry PLR, and the identity authority PNIA — are the members' gateways, the devices that carry the trust burden at each edge. And the Test CA, the certification authority that issues the certificates the security servers use to prove who they are. In production that is a real certification authority; in the demonstration, a test one.

> _Slide 3 — Title: 'Bring it up from the run book'. Body, single text block: 'Central Server first, then the Test CA, then each Security Server registers with the Central Server and receives its certificate. The run book makes it reproducible — anyone with the build pack stands up the same federation. For the demonstration, Linkup runs it all on one cloud VM in sandboxed containers.'_

Standing it up is a run-book exercise, deliberately. Each component is brought up in order — the Central Server first, then the Test CA, then each Security Server registers with the Central Server and receives its certificate. The run book makes this reproducible: anyone with the build pack can stand up the same federation, which is exactly what makes the demonstration a template rather than a one-off. For the demonstration, Linkup runs all of this on a single cloud VM in sandboxed containers — sized for showing cross-agency calls, not for production volumes.

When the federation is up, you have something concrete: four real security servers, registered with a central server, trusting a common certification authority, ready to carry a real call. The configuration that does this — the federation config and each member's registration — lives in the build pack, and kp-solution-verify is what confirms the federation actually stands up, not merely that the files exist. This is the moment the abstract becomes real: up to now KP2 has produced documents and configuration; standing up the federation turns that configuration into a running platform. The bus exists, the members are on it, and the only thing left is to make a real call across it.

> _Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Central Server, four Security Servers, a Test CA — stood up from the run book, the federation is real and ready to carry a call.'_

So you stand up the federation from a run book: the Central Server at PDGA, the four Security Servers at the Progressa members, the Test CA that anchors trust. Reproducible from the build pack, confirmed by kp-solution-verify. With the federation running, the framework has stopped being a design and become a platform — ready for the call that proves it.

> _Slide 5 — Title: 'Sources'. Body: NIIS X-Road federation — Central Server, Security Server, Test CA; the Linkup federation (ITU cloud). Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Stand up the federation'. | Standard ITU template. No images. |
| 2 | Components slide. Three text rows: Central Server, Security Servers, Test CA. | The federation topology. Uses the bound Progressa institutions. Text-only. |
| 3 | Run-book slide. Single text block on the stand-up order and reproducibility. | The reproducible-from-the-build-pack point. Text-only. |
| 4 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 5 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the federation references. |

### AI usage tip — Draft the federation stand-up run book

**What the prompt does:** An architect needs a reproducible run book to stand up the X-Road federation — the Central Server, the Security Servers and the Test CA, in order — for the demonstration. This prompt drafts it.

**Prompt template (copy-paste into Claude):**

```text
Draft a stand-up run book for an X-Road demonstration federation for [country X] / Progressa. The components are: a Central Server (operated by the digital-government authority), four Security Servers (one each at the four member agencies), and a Test CA. Produce the run book as ordered, reproducible steps: (1) bring up the Central Server and its configuration; (2) bring up the Test CA and register it as the trust anchor; (3) for each Security Server: install, register with the Central Server, obtain its certificate from the Test CA, and verify it is registered; (4) a verification step confirming all four members appear in the Central Server registry. Note which steps are demonstration-only (single VM, sandboxed containers, Test CA) and would differ in production. Mark every server identifier and address as [confirm: set per the actual environment]. Output: the ordered run book plus a 'differs in production' note per step.
```

**Inputs and outputs:** Input: the federation topology (Central Server, four Security Servers, Test CA). Output: an ordered, reproducible stand-up run book with production-difference notes.

**Safeguard:** A run book is only reproducible if it has been run — execute it end to end in the sandbox and confirm all four members register, before treating it as the build-pack run book. Keep the demonstration-only steps (Test CA, single VM) clearly marked so no one mistakes the run book for a production deployment guide.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Stand up the federation |
| YouTube-optimised title | Standing up an X-Road federation: Central Server, Security Servers, and a CA |
| Description (60 words) | With members registered, you stand up the federation: a Central Server (the registry of members and services), four Security Servers (each member's gateway), and a Test CA (the trust anchor). Bring it up from a reproducible run book so anyone with the build pack stands up the same federation. Five minutes for architects. AI run-book prompt in the description. |
| Tags | X-Road federation, central server, security server, certification authority, Linkup, interoperability deployment, GovStack, digital government |
| Playlist (YouTube) | KP2 — Topic 5: Implementation, onboarding and the live demonstration |
| ToR §4 coverage | §4.1 (methodology, deployment); §4.3 (AI integration — run-book prompt); §4.5 (build-pack — the federation) |
| PAERA citations | (federation topology cited to NIIS X-Road) |
| External-link list | NIIS X-Road federation — Central Server, Security Server, configuration and Test CA (niis.org); the Linkup federation (ITU cloud) |

## 3.6 Subtopic 5.6 — Run the once-only exchange, live

| Field | Value |
| --- | --- |
| Persona | A (Architect) — chief or senior architect, integration lead, or agency technical lead building on the interoperability bus |
| Target runtime | ~5 min (≈560 spoken words) |
| PAERA anchor | PAERA §5.2 Principle #5 (Once-Only); NIIS X-Road; the build-pack acceptance check (kp-solution-verify) |

> **Single message —** _PNEA issues a credential and pre-fills identity from PNIA and enrolment from PLR — a real cross-server call, the data asked once._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Run the once-only exchange, live'. Voice-over begins._

This is the moment the whole framework exists for: a real once-only exchange, running across the federation, for an ordinary citizen scenario. Not a mock, not a diagram — a genuine cross-server call in which the state asks the citizen once and fetches the rest. Everything in KP2 has been leading to this single call.

> _Slide 2 — Title: 'The scenario'. Body, three text rows: 'A learner applies for a credential at the examination authority, PNEA.' 'Without once-only: the learner brings paper proof of identity and of enrolment.' 'With once-only: PNEA pre-fills identity from PNIA and enrolment from PLR, over the bus, in seconds.'_

The scenario is concrete and ordinary. A learner applies for a credential at the national examination authority, PNEA. Without once-only, PNEA asks the learner to bring paper proof of who they are and proof that they were enrolled. With once-only, the moment the learner gives their national ID, PNEA's service pre-fills their identity from the national identity authority, PNIA, and their enrolment from the learner registry, PLR — both fetched over the bus, with a lawful basis, in seconds. The learner is asked once. That is the promise from the very first topic of this knowledge product, now actually running.

> _Slide 3 — Title: 'Every layer is in this one call'. Body, four text rows: 'Technical — routed across the trust zones, secured by mutual TLS.' 'Legal — returns only the fields the purpose needs, under the decree.' 'Organisational — between members the governance admitted, under their obligations.' 'Semantic — resolves only because the agencies agree what 'learner' and 'enrolment' mean.'_

And every layer you built is in that single call. The call routes across the trust zones, secured by mutual TLS — the technical layer. It returns only the fields the purpose needs, under the decree's lawful basis — the legal layer. It runs between members the governance admitted, under their obligations — the organisational layer. And it returns meaning, not just bytes, because it resolves only thanks to the semantic map: PNEA, PNIA and PLR agree what 'learner' and 'enrolment' mean. That agreement came from the data owners and the architects sitting together — the shared language between business and IT — and without it the call would return confident nonsense. One exchange, all four layers, all at once.

> _Slide 4 — Title: 'This is the acceptance check'. Body, single text block: 'kp-solution-verify deploys the federation, the members, the service and the data, makes the call, and confirms once-only actually happens: the cross-server call resolves, identity and enrolment return, the learner is not asked twice. When it passes, KP2 is not a framework explained — it is a framework that runs.'_

This is the build pack's acceptance check, and it is deliberately a single, observable thing: the cross-server call resolves, the identity and the enrolment come back, the learner is not asked twice. kp-solution-verify runs exactly this — it deploys the federation, the members, the service and the demonstration data, then makes the call and confirms once-only actually happens. When that check passes, KP2 stops being a framework explained and becomes a framework that runs. That distinction — explained versus running — is the entire reason this is an implementation Knowledge Product.

And this is why one small exchange is the proving slice for the whole of KP2 and the KPs that follow. Prove once-only here, on four members, and you have proven the pattern that KP3's building blocks and KP4's services will reuse. The smallest real once-only call is the largest possible proof that the framework works — because if the state can ask once and fetch the rest for one learner, lawfully and securely, it can do it for every service a country builds on the bus.

> _Slide 5 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A real cross-server call, the learner asked once — every layer proven in a single exchange, and the framework with it.'_

So the once-only exchange, live, is where KP2 proves itself. PNEA pre-fills identity from PNIA and enrolment from PLR, over the bus, for a real learner asked once. Technical, legal, organisational and semantic — all four layers in one resolving call, confirmed by kp-solution-verify. That single exchange is the acceptance of the whole framework, and the template every later service reuses.

> _Slide 6 — Title: 'Sources'. Body: PAERA v1.0 §5.2 Principle #5 (Once-Only); NIIS X-Road; the build-pack acceptance check (kp-solution-verify). Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Run the once-only exchange, live'. | Standard ITU template. No images. |
| 2 | Scenario slide. Three text rows: the learner, without once-only, with once-only. | The concrete citizen scenario, on the bound Progressa institutions. Text-only. |
| 3 | Every-layer slide. Four text rows mapping the call to the four layers. | The synthesis of all of KP2 in one call. Carries the lingua-franca argument (semantic row). Text-only. |
| 4 | Acceptance-check slide. Single text block on kp-solution-verify and 'explained vs running'. | The build-pack acceptance — the proving moment. |
| 5 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line that crowns the topic. |
| 6 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the once-only reference. |

### AI usage tip — Script and verify the once-only exchange (the acceptance check)

**What the prompt does:** An architect needs to script the once-only demonstration exchange and its acceptance check — the call, the expected result, and the proof that the learner is asked once. This prompt produces the acceptance script.

**Prompt template (copy-paste into Claude):**

```text
Script the once-only acceptance check for [country X] / Progressa's interoperability demonstration. The scenario: a learner applies for a credential at the examination authority (PNEA), which pre-fills identity from the identity authority (PNIA) and enrolment from the learner registry (PLR) over the X-Road bus. Produce: (1) the GIVEN — the federation deployed, the four members registered, the service published, the demonstration data seeded; (2) the WHEN — the exact cross-server call(s) PNEA makes to PNIA and PLR; (3) the THEN — the expected result: identity and enrolment returned over the bus, the learner asked once, no paper re-entry; (4) the negative check — that a member NOT authorised by the access-control list cannot make the call. Map each step to the layer it exercises (technical/legal/organisational/semantic). Mark every identifier and endpoint as [confirm: against the live registry]. Output: the given/when/then acceptance script plus the negative check.
```

**Inputs and outputs:** Input: the Progressa once-only scenario and the federation. Output: a given/when/then acceptance script with a negative check, mapped to the four layers.

**Safeguard:** An acceptance check that only proves the happy path is half a check — include the negative case (an unauthorised member is denied) and confirm the data returned is the right learner's, not merely that data returned. Run it against the sandbox federation, and treat a passing check as proof for this exchange only, not a guarantee for exchanges you have not tested.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Run the once-only exchange, live |
| YouTube-optimised title | The live once-only exchange: a government framework proven in one real call |
| Description (60 words) | The moment the framework exists for: a real cross-server call where a learner applies for a credential and the examination authority pre-fills identity and enrolment over the bus — asked once, not on paper. Every layer (technical, legal, organisational, semantic) is in that one call, and kp-solution-verify confirms it. Five minutes for architects. AI acceptance-script prompt in the description. |
| Tags | once-only, live demonstration, X-Road, cross-server call, acceptance test, interoperability proof, Progressa, GovStack, digital government |
| Playlist (YouTube) | KP2 — Topic 5: Implementation, onboarding and the live demonstration |
| ToR §4 coverage | §4.6 (real-life demonstration) — primary; §4.1 (methodology); §4.3 (AI integration — acceptance-script prompt); §4.5 (build-pack acceptance) |
| PAERA citations | §5.2 Principle #5 (Once-Only) |
| External-link list | PAERA v1.0 §5.2 (Once-Only); NIIS X-Road; the build-pack acceptance check (kp-solution-verify) |

## 3.7 Subtopic 5.7 — From demonstration to production

| Field | Value |
| --- | --- |
| Persona | A (Architect) — chief or senior architect, integration lead, or agency technical lead building on the interoperability bus |
| Target runtime | ~5 min (≈590 spoken words) |
| PAERA anchor | NIIS X-Road production and operations guidance; ITU DPI Safeguards |

> **Single message —** _What changes between the sandboxed Linkup demonstration and a production-grade federation a country would actually run._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'From demonstration to production'. Voice-over begins._

The demonstration proves the pattern. It is not, and must not be mistaken for, a production system. The architect's last job in this topic is to know exactly what changes between the demonstration and a production-grade federation, so the country plans and budgets for that gap rather than discovering it after go-live — which is the moment it is most expensive to discover.

> _Slide 2 — Title: 'What changes for production'. Body, eight text rows: 'Separate hosts, not one VM.' 'A real certification authority, not a Test CA.' 'High availability and redundancy.' 'Real monitoring and alerting.' 'Capacity for real volumes.' '24/7 operational support.' 'Security hardening and audit.' 'Migrate and retire the legacy point-to-point links the bus replaces.'_

The differences are specific. The demonstration runs everything on one VM; production separates the components onto real, sized hosts. The demonstration uses a Test CA; production uses a real certification authority. Production adds high availability and redundancy, so a failed component does not stop the bus. It adds real monitoring and alerting, so problems are caught before citizens notice them. It is sized for real transaction volumes, not a handful of demonstration calls. It has round-the-clock operational support — the Operating Authority's standing team. And it is security-hardened and audited to the standard a national platform carrying citizen data must meet.

There is one more production task, and it does not appear on the hardening list because it concerns the old world rather than the new: migrating each agency off the legacy point-to-point links the bus replaces, and retiring them. A new bus does not retire the old links by itself — left alone, you run both, which is worse than either. So per agency the pattern is parallel-run then cut over: stand up the new once-only exchange, run it beside the agency's existing point-to-point link until you have confirmed the two agree, then switch the consumers across and decommission the old link. Retiring those links is the step that actually ends the point-to-point sprawl Topic 1 diagnosed — schedule it, agency by agency, in the multi-agency phase of the plan, with a migration-and-retirement step in each onboarding.

> _Slide 3 — Title: 'The shape of the config does not change'. Body, single text block: 'The subsystem registrations, the service descriptions, the semantic map are the same. Production changes the scale, the resilience and the operations around them — not the design. So the demonstration genuinely de-risks the production build: you proved the pattern, and production is the same pattern, hardened.'_

Here is the reassuring part, and it is the point of building a demonstration at all: none of this changes the shape of the configuration. The subsystem registrations, the service descriptions, the semantic map — they are the same in production. Production changes the scale, the resilience and the operations around the configuration, not the design of it. So the demonstration genuinely de-risks the production build. You have proven the pattern works; production is the same pattern, hardened and operated. The later phases of your four-phase plan are exactly where that production build is funded and delivered, against the cost frame.

The one thing not to do is ship the demonstration as production. A sandboxed single-VM federation with a test certification authority is perfect for proving the pattern and wrong for carrying real citizen data at scale. Know the gap, plan it into the phased roadmap, budget it with the cost frame — and the move from demonstration to production becomes an engineering exercise the team can plan, not a surprise that derails go-live.

> _Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Production is the demonstration's pattern, hardened — separate hosts, a real CA, high availability, monitoring, support. Plan the gap; do not ship the demo.'_

So you close the implementation topic by being honest about the gap between demonstration and production. Separate hosts, a real certification authority, high availability, monitoring, capacity, support, hardening — the production differences are specific and plannable. The configuration's shape does not change, so the demonstration de-risks the build. Plan the gap into the roadmap, budget it with the cost frame, and never ship the demonstration as the production platform. That is how a proven pattern becomes a system a country runs.

> _Slide 5 — Title: 'Sources'. Body: NIIS X-Road production and operations guidance; ITU DPI Safeguards. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'From demonstration to production'. | Standard ITU template. No images. |
| 2 | What-changes slide. Eight text rows of production differences (incl. migrating off and retiring the legacy point-to-point links). | The gap, made specific. Plain text list, readable on mobile. |
| 3 | Config-shape-unchanged slide. Single text block on de-risking. | The reassuring synthesis — the demo de-risks the build. Text-only. |
| 4 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line that closes the topic. |
| 5 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the production-guidance references. |

### AI usage tip — Build the demonstration-to-production gap checklist

**What the prompt does:** An architect needs a checklist of what must change to take the demonstration federation to production, sized and sequenced into the phased plan. This prompt produces it.

**Prompt template (copy-paste into Claude):**

```text
Build a demonstration-to-production gap checklist for [country X]'s X-Road federation. The demonstration runs on a single VM with sandboxed containers and a Test CA; production must carry real citizen data at scale. For each area, state what the demonstration has, what production requires, and roughly when in the four-phase plan it should be delivered: (1) hosting — single VM vs separate sized hosts; (2) certification authority — Test CA vs real CA; (3) availability — single instance vs high availability and redundancy; (4) monitoring and alerting; (5) capacity for expected transaction volumes; (6) operational support hours; (7) security hardening and audit. For each, note that the configuration shape (subsystem registrations, service descriptions) does NOT change — only scale, resilience and operations do. Mark cost-bearing items for the cost frame. Output: a gap checklist (area / demo / production / phase / cost-bearing?) plus a one-line 'do not ship the demo as production' caution.
```

**Inputs and outputs:** Input: the demonstration federation. Output: a demonstration-to-production gap checklist mapped to the phased plan and cost frame.

**Safeguard:** The gap checklist is a planning aid, not a security sign-off — production hardening and audit must be done and independently reviewed, not merely listed. Never let the existence of a working demonstration become pressure to put the sandboxed federation into production; the gap items exist precisely because the demo is unsafe at scale.

### Metadata

| Field | Value |
| --- | --- |
| Working title | From demonstration to production |
| YouTube-optimised title | What changes from an interoperability demo to a production-grade federation |
| Description (60 words) | The demonstration proves the pattern — it isn't a production system. Production means separate hosts, a real CA, high availability, monitoring, capacity, 24/7 support and hardening. But the configuration's shape doesn't change, so the demo de-risks the build. Plan the gap into the roadmap; never ship the demo as production. Four minutes for architects. AI gap-checklist prompt in the description. |
| Tags | production readiness, X-Road production, high availability, operations, demo to production, interoperability, GovStack, digital government |
| Playlist (YouTube) | KP2 — Topic 5: Implementation, onboarding and the live demonstration |
| ToR §4 coverage | §4.1 (methodology, production); §4.3 (AI integration — gap-checklist prompt) |
| PAERA citations | (production guidance cited to NIIS X-Road and ITU DPI Safeguards) |
| External-link list | NIIS X-Road production and operations guidance (niis.org); ITU DPI Safeguards |

## 4. Production notes

### 4.1 Design standard — the split-screen usability test

The bar for every video in Topic 5 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to follow along and act on the other half. For the videos in Topic 5, 'act' means produce the corresponding implementation artefact — a four-phase plan with gates and a cost frame, a Member Requirements checklist, a Service-Level Agreement, an X-Road member registration (subsystem + access-control list), a federation run book, or the once-only test call. Each subtopic's AI usage tip operationalises this: the member-registration prompt is an instance of bb-config-gen, and the artefacts go straight into the runnable build pack, ready to deploy and verify on the stack with kp-solution-verify.

### 4.2 Slide branding

Every slide follows the ITU template per the Knowledge Products and Video Materials Guide §3.i: Title text Arial Bold 28pt; Body text Arial 18pt; Background colour #E5F5FB. Text only — no images. Diagrams and text boxes are permitted only where strictly necessary; where used, all labels remain plain text. No country emblems, no agency logos. The recurring single-sentence summary slide that closes each subtopic uses 28pt body type so the line is screenshot-friendly for the listener's own briefings.

### 4.3 No individuals on screen

Per the Guide §3 Note, no individuals appear in any video. Two options are open: an AI-avatar narrator generated by ITU's production pipeline, or computer-screen-only voice-over with no narrator visible. The choice is ITU's; the scripts are agnostic to it. No human narrator is shown in any video.

### 4.4 Voice and tone

Direct address ('your country', 'your agencies', 'your architects'). Plain language at approximately an eighth-grade English level, held even though the Architect audience is more technical. Examples are drawn from African public-sector reality — the duplicate registry found at assessment, the orphan system no one owns, the citizen filling the same form at five counters. Technical terms — security server, subsystem, access-control list, Central Server, Test CA, federation — are introduced in plain words on first use, because the Architect needs them to work; headlines stay capability-led, never concept-led. Honest framing throughout: interoperability is a sustained build, not a procurement.

### 4.5 External-link list and 'Find the link in the description'

Every subtopic includes an external-link list in its metadata, and every script references external materials with the convention 'Find the link in the description' rather than reading URLs aloud. ITU's production pipeline compiles the per-video list into the YouTube description. The aggregate list across the seven subtopics is in Section 6.

### 4.6 GitBook companion and the build pack

Each subtopic ships with the video script, slide specification, AI usage tip and metadata. The GitBook companion content — written, in-depth implementation guidance — is produced as a parallel deliverable mirroring the same subtopic numbering. For KP2, the GitBook companion links each subtopic to the runnable build pack (KP2-GIF/KP2-build-pack): Topic 5 stands up the proving slice — the federation configuration, the member registrations (subsystem + access-control list) generated by bb-config-gen, the deploy/seed/acceptance scripts, and the once-only test call that is the build pack's acceptance check, run by kp-solution-verify. The legal, organisational and technical configuration from the earlier topics is deployed and demonstrated here as one running solution.

## 5. Open calibration items

The v0.1 drafting raised the editorial and structural decisions below. These are forwarded for ITU's discussion at the Tuesday weekly call.

### 5.1 Cost-frame and topology claims to verify

Claims that should be confirmed against the source before final lock: the four-phase implementation timeline (Core Platform 0–6 months, Pilot 6–12, Multi-agency 12–18, Optimisation 18–24+) and the cost frame benchmarked to Estonia's X-Road build-out and the ITU DPI Safeguards (5.1) — confirm the figures and the timeline, since cost claims are the most scrutinised by funders; and the Linkup federation topology (Central Server at PDGA, four Security Servers at MoEYS/PEMIS, PNEA, PLR, PNIA, a Test CA) against the Inception Report §4.3 (5.5).

### 5.2 Editorial tone calls

Sharp lines that deserve a deliberate keep / soften / cut decision: 'the demonstration proves the pattern, not the production system' (5.7); 'the once-only call resolving is the whole framework's acceptance' (5.6); 'do not ship the demonstration as production' (5.7).

### 5.3 The live-demonstration realities

Three items to settle with ITU. (1) The once-only worked flow — PNEA pre-filling identity from PNIA and enrolment from PLR — should be confirmed as the single most compelling once-only story before the demonstration is built (alternative: an MoEYS/PEMIS service pre-filling from PNIA). (2) The demonstration depends on the full Linkup federation being live on ITU cloud (Inception Report action item A4); without it, 5.5 and 5.6 are scripted against a federation that does not yet exist. (3) Whether 5.6 is shown as a genuinely live call or a recorded screencast of one — either way the scripts reference real endpoints and a real cross-server call, never a mock, per the Inception Report commitment.

### 5.4 The runnable build pack and the handoff

Topic 5 is where the build pack becomes runnable: the federation configuration, the member registrations (subsystem + access-control list, generated by bb-config-gen with a [confirm] on every X-Road identifier), the deploy/seed/acceptance scripts, and the once-only test call that kp-solution-verify runs as the acceptance check. This assumes the technical config from Topic 4 and the legal and organisational config from Topics 2–3. The Progressa membership (the four-server canon) and the schedule / Linkup cloud-access items carried from earlier topics still apply; see the KP2 Plan §7 and the KP2–4 Delivery Plan §6.

## 6. Annex — aggregate external-link list

Compiled across the seven subtopics for ITU's video production pipeline. To be split per subtopic and inserted into the corresponding YouTube descriptions.

| Subtopic | Sources referenced |
| --- | --- |
| 5.1 | Estonia X-Road build-out (cost and timeline benchmark); ITU DPI Safeguards (investment guidance); NIIS X-Road implementation guidance. |
| 5.2 | NIIS X-Road member requirements and onboarding (niis.org); EU EIF. |
| 5.3 | NIIS X-Road service-level / SLA guidance; the member obligations (Topic 3); EU EIF. |
| 5.4 | NIIS X-Road member and subsystem registration; access-control list configuration (niis.org). |
| 5.5 | NIIS X-Road federation — Central Server, Security Server, configuration and Test CA (niis.org); the Linkup federation (ITU cloud). |
| 5.6 | PAERA v1.0 §5.2 Principle #5 (Once-Only); NIIS X-Road; the build-pack acceptance check (kp-solution-verify). |
| 5.7 | NIIS X-Road production and operations guidance; ITU DPI Safeguards. |

All references are publicly accessible and verifiable. The Tuesday review may add or refine items based on ITU's preferred citation style for the YouTube channel.

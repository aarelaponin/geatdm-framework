<!-- GENERATED from build_kp2_module4_v01.js by bundle_to_md.py — do not hand-edit; edit the build script and regenerate. -->

# KP2 Module 4 — Video Script Bundle v0.1 (ITU-aligned)

| Field | Value |
| --- | --- |
| Document | Video script bundle for Topic 4 of KP2 |
| Version | v0.1 — aligned to ITU Knowledge Products and Video Materials Guide |
| Date | 27 June 2026 |
| Contract reference | RFQ-S-GIGA-2026-022 / Purchase Order #334304 (signed 24 April 2026) |
| Topic persona | A (Architect) — chief or senior architect, integration lead, or agency technical lead building on the interoperability bus |
| Subtopics | Eight subtopics (4.1 – 4.8), each shipped as one ~5-minute standalone video |
| Topic runtime | Approximately 39 minutes across eight standalone videos |
| Build pack | KP2-GIF/KP2-build-pack — this topic produces the technical-layer configuration: the semantic map, the OpenAPI service contracts, and the X-Road service descriptions |
| Prepared by | FiscalAdmin OÜ — Aare Lapõnin (Engagement Lead) |
| For review by | ITU/Giga at Tuesday weekly call; FiscalAdmin team (Karin Kaup, Arne Lapõnin) |

This bundle is the v0.1 working draft of Topic 4 of KP2 — Government Interoperability Framework. Topic 4 is the technical heart of the framework — the architecture, the standards, and a real worked exchange — and it is where KP2 shifts register from the Strategist who commissions the framework to the Architect who builds it. It produces the technical-layer configuration of the runnable build pack: the semantic map, the OpenAPI service contracts, and the X-Road service descriptions that put a real service on the bus. The eight videos walk the Architect through the four functional layers, the three-zone trust model, the standards portfolio, generating the semantic map and the service contracts with Claude, the Giga end-to-end worked case, wiring a service onto the bus, and the data-protection envelope that makes an exchange lawful. The register stays plain English, eighth-grade level; technical terms — OpenAPI, mTLS, X-Road service description — are introduced in plain words on first use, because the Architect needs them to work. Each subtopic leads with the capability the listener gains. The eight videos are numbered to ITU's convention (4.1 through 4.8), each reworked to stand alone. All slide specifications follow ITU's text-only branding. Each subtopic carries an AI usage tip with a copy-paste Claude prompt. External references use the convention 'Find the link in the description'.

## 1. Document context

### 1.1 What this document is

This document collects the eight video scripts that make up Topic 4 of Knowledge Product 2 (Government Interoperability Framework), with on-screen slide specifications, per-subtopic metadata, AI usage tips and production notes. It is the v0.1 working draft, aligned to ITU's Knowledge Products and Video Materials Guide, submitted for team review and for discussion with ITU/Giga at the Tuesday weekly call.

Topic 4 is the technical-architecture layer of KP2 and the first Architect-facing topic. It presents the four functional layers of the reference architecture, the three-zone trust model, the technical standards portfolio, and then turns to building: generating the semantic map and the OpenAPI service contracts with Claude, the Giga end-to-end worked case, wiring a service onto the bus, and the data-protection envelope that makes an exchange lawful. It produces the technical-layer configuration of the build pack — the artefacts a real once-only exchange runs on.

### 1.2 KP2 is an implementation Knowledge Product

KP2 ships two things. The first is this video bundle, which teaches the build. The second is a runnable build pack — the configuration, prompts, scripts and acceptance checks that stand up a real once-only exchange on the Linkup (X-Road 7.x) federation across the Progressa institutions. Topic 4 produces the technical-layer configuration — the semantic map, the OpenAPI service contracts and the X-Road service descriptions that put a real service on the bus. It is also where KP2 shifts register: from the Strategist who commissions the framework to the Architect who builds it. Technical terms are introduced in plain words on first use; the implementation and the live demonstration follow. The structural backbone throughout is the four-layer interoperability model — Technical, Semantic, Organisational, Legal — drawn from the EU European Interoperability Framework and the NIIS X-Road documentation. The four-layer model is cited to those public references, not to PAERA; PAERA anchors the interoperability framing (§3.4.3), the relevant principles including Once-Only (§5.2), the legal layer (§3.2) and the governance setup (§3.1.3).

### 1.3 How to read this document

Section 2 gives Topic 4 at a glance — the eight subtopics with persona, runtime and single message. Section 3 contains the full script for each subtopic, with on-screen slide specification, AI usage tip and metadata. Section 4 collects the production notes that apply across all eight videos. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate external-link list for ITU's production pipeline.

Within each script section, three rendering conventions are used: italic shaded blocks denote on-screen visual or production cues; regular paragraphs are the spoken voice-over; the slide specification, AI usage tip and metadata follow the script. A reader should be able to imagine the video from these layers without a separate storyboard.

## 2. Topic 4 at a glance

Eight standalone subtopic videos. One Architect persona throughout. Total runtime approximately thirty-nine minutes. Each video has a single message and a single learning outcome, and is discoverable individually via search; the playlist provides navigation but is not required to comprehend any single video.

| # | Title | Single message | Runtime |
| --- | --- | --- | --- |
| 4.1 | Place every component — the four functional layers | Four functional layers — Service Access, Event Distribution, Trust and Security, Governance and Administration — give every component of the platform a place. | ~5 min |
| 4.2 | Secure every call — the three trust zones | Public, Member-Internal, Trust-Anchor — knowing which zone a call crosses tells you exactly what security it needs. | ~5 min |
| 4.3 | Adopt the standards portfolio | Adopt the published standards — REST/OpenAPI, OAuth/OIDC, mTLS, X-Road — instead of writing your own; the portfolio is the menu every member shares. | ~5 min |
| 4.4 | Generate the semantic map | Generate a semantic map so two agencies mean the same 'learner' before they exchange one — the hardest layer, made tractable. | ~5 min |
| 4.5 | Generate a service contract | Turn a service brief into an OpenAPI contract, then an X-Road service description — the configuration that puts a service on the bus. | ~5 min |
| 4.6 | Put a real data source on the bus — the Giga case | Take Giga's real school data through a bronze/silver/gold pipeline onto the bus — a worked exchange you can copy for your sector. | ~5 min |
| 4.7 | Wire a service onto the bus | The OpenAPI contract becomes an X-Road service description and the call resolves — the GovStack Information Mediation pattern. | ~5 min |
| 4.8 | Make the exchange lawful — the data-protection envelope | Letters of Interest plus a data-protection envelope make a real exchange lawful as well as technically possible. | ~4 min |

## 3. The scripts

## 3.1 Subtopic 4.1 — Place every component — the four functional layers

| Field | Value |
| --- | --- |
| Persona | A (Architect) — chief or senior architect, integration lead, or agency technical lead building on the interoperability bus |
| Target runtime | ~5 min (≈580 spoken words) |
| PAERA anchor | EU EIF / NIIS X-Road reference architecture (four functional layers); PAERA §3.4.3 |

> **Single message —** _Four functional layers — Service Access, Event Distribution, Trust and Security, Governance and Administration — give every component of the platform a place._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Place every component — the four functional layers'. Voice-over begins._

As an architect, your first move is not to draw a new platform. It is to adopt a reference architecture, so you spend your scarce time on what is specific to your country instead of re-deriving the shape of an interoperability platform that other countries have already settled. The European framework and the X-Road experience give you a reference with four functional layers. Every component you will build or buy fits one of the four.

> _Slide 2 — Title: 'Four functional layers'. Body, four text rows: 'Service Access — how a member reaches the bus and calls a service.' 'Event Distribution — how messages and events move across the federation.' 'Trust and Security Infrastructure — certificates, identities, encryption.' 'Governance and Administration — registries of members and services, and monitoring.'_

The four layers, by what they do. Service Access — how a member system reaches the bus and calls a service. Event Distribution — how messages and events actually move across the federation. Trust and Security Infrastructure — the certificates, the identities and the encryption that make a call trustworthy. And Governance and Administration — the registries of who is a member, what services exist, and the monitoring that watches it all run.

The value of the layers is that they are a filing system for decisions. When you ask 'where does the service catalogue live?', the answer is Governance and Administration. 'Where does mutual encryption sit?' — Trust and Security. Every component, every standard, every piece of configuration has a home. And when two architects disagree about where something belongs, the reference architecture settles it rather than the louder voice.

There is a deeper payoff, and it is the re-use argument seen from the architect's chair. The reference architecture is shared — built once and reused by every country and every sector that adopts it — so your agencies, and the next sector after education, plug into the same four-layer shape instead of each inventing their own. That is whole-of-government planning made concrete at the technical level: you re-use a settled structure rather than paying, again, to discover it.

> _Slide 3 — Title: 'Map your components to the layers'. Body, single text block: 'Take every component you plan to build or buy — the security server, the central registry, the monitoring tool, the identity adapter — and place each in its layer. The layers that come out sparse show you what you have not yet planned for.'_

The practical exercise is simple. Take every component you plan to build or buy — the security server, the central registry, the monitoring tool, the identity adapter — and place each one in its layer. The layers that come out sparse show you exactly what you have not yet planned for. Used this way, the reference architecture is a checklist as much as a diagram: it tells you not only where things go, but what is still missing.

> _Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Adopt the four-layer reference architecture, place every component in its layer, and the gaps show you what you still have to build.'_

So the architecture work starts not with a blank page but with a borrowed, proven structure. Four functional layers — Service Access, Event Distribution, Trust and Security, Governance and Administration. Place every component. Read off the gaps. You have re-used the world's experience of what an interoperability platform looks like, and kept your effort for what only your country can decide.

> _Slide 5 — Title: 'Sources'. Body: EU EIF / NIIS X-Road reference architecture (four functional layers); PAERA v1.0 §3.4.3. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Place every component — the four functional layers'. | Standard ITU template. Title Arial Bold 28pt; subtitle (KP2 / 4.1) Arial 18pt. Background #E5F5FB. No images. |
| 2 | Four-layers slide. Four text rows naming each functional layer and its job. | The spine of the topic. Plain stacked text, no icons. |
| 3 | Map-components slide. Single text block on placing components and reading the gaps. | Turns the architecture into a checklist. Text-only. |
| 4 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 5 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the reference architecture. |

### AI usage tip — Map your platform components to the four functional layers

**What the prompt does:** An architect planning the interoperability platform needs to place every component into the four-layer reference architecture and find the gaps. This prompt produces that mapping.

**Prompt template (copy-paste into Claude):**

```text
Below are the components [country X] plans to build or buy for its interoperability platform [paste the list — e.g. security servers, a central server/registry, a monitoring dashboard, an identity adapter, a service catalogue, a logging store]. Place each component into one of the four functional layers of the reference architecture: SERVICE ACCESS, EVENT DISTRIBUTION, TRUST AND SECURITY INFRASTRUCTURE, GOVERNANCE AND ADMINISTRATION. For each component: its layer, a one-line reason, and any component that spans two layers (note which). Then list, per layer, what a complete interoperability platform usually needs that is NOT in the input — the gaps. Output: a component-to-layer table plus a per-layer gap list.
```

**Inputs and outputs:** Input: the planned platform components. Output: a component-to-layer mapping plus a per-layer list of gaps.

**Safeguard:** The gap list is a prompt for discussion, not a procurement list — a 'missing' component may already be provided by the X-Road software you are adopting. Check each gap against what your chosen bus platform includes before treating it as something new to build or buy.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The four functional layers |
| YouTube-optimised title | The four-layer reference architecture for a government interoperability platform |
| Description (60 words) | Don't design an interoperability platform from scratch — adopt the four-layer reference architecture: Service Access, Event Distribution, Trust and Security, Governance and Administration. Place every component in its layer and the gaps show what you still need. It's a shared structure you re-use, not re-derive. Five minutes for architects. AI component-mapping prompt in the description. |
| Tags | reference architecture, interoperability architecture, functional layers, X-Road, EIF, GovStack, digital government, solution architecture |
| Playlist (YouTube) | KP2 — Topic 4: Architecture, standards and the Giga case |
| ToR §4 coverage | §4.1 (methodology, architecture); §4.2 (reference frameworks); §4.3 (AI integration — component-mapping prompt) |
| PAERA citations | §3.4.3 Interoperability framing (the reference architecture is cited to EIF/NIIS) |
| External-link list | EU EIF; NIIS X-Road reference architecture (niis.org); PAERA v1.0 §3.4.3 |

## 3.2 Subtopic 4.2 — Secure every call — the three trust zones

| Field | Value |
| --- | --- |
| Persona | A (Architect) — chief or senior architect, integration lead, or agency technical lead building on the interoperability bus |
| Target runtime | ~5 min (≈560 spoken words) |
| PAERA anchor | EU EIF / NIIS X-Road trust model (three zones); mTLS; the X-Road message protocol |

> **Single message —** _Public, Member-Internal, Trust-Anchor — knowing which zone a call crosses tells you exactly what security it needs._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Secure every call — the three trust zones'. Voice-over begins._

Security on an interoperability bus is not one wall around everything. It is zones, and the security a call needs depends on which zone boundaries it crosses. The X-Road trust model uses three zones. Once you know them, you can look at any exchange and state, precisely, what protects it — which is exactly the conversation a security reviewer or a data-protection officer will want to have with you.

> _Slide 2 — Title: 'Three trust zones'. Body, three text rows: 'Public — the open internet; nothing trusted by default.' 'Member-Internal — inside an agency's own network; trusted by that agency.' 'Trust-Anchor — the certification authority everyone trusts to vouch for identities.'_

The three zones. Public — the open internet, where nothing is trusted by default. Member-Internal — inside an agency's own network, where that agency trusts its own systems. And the Trust-Anchor — the certification authority that everyone in the federation trusts to vouch for who is who. A message from one agency to another starts in one member's internal zone, crosses the public zone, and arrives in another member's internal zone — with the Trust-Anchor underwriting the identities at both ends.

> _Slide 3 — Title: 'What protects each crossing'. Body, three text rows: 'Between security servers: mutual TLS — both sides prove who they are.' 'The message itself is signed and logged — the X-Road message protocol.' 'The Trust-Anchor issues and can revoke the certificates.'_

Now the security falls out of the zones. When a message crosses the public zone between two security servers, it is protected by mutual TLS — meaning both sides present a certificate and prove who they are, not just one side as on an ordinary website. The message itself is signed and logged using the X-Road message protocol, so it cannot be forged, and neither side can later deny sending or receiving it. And the Trust-Anchor — the certification authority — issues those certificates and can revoke a compromised one, which is precisely how a misbehaving member gets cut off from the bus.

> _Slide 4 — Title: 'The security server carries the trust burden'. Body, single text block: 'A security server sits at each member's edge and does this work — it is the member's gateway into the federation. The member's own systems stay in their internal zone and never face the public zone directly.'_

One device makes this practical: the security server, which sits at each member's edge and carries the trust burden. It is the member's gateway into the federation — it holds the certificates, does the mutual TLS, signs and logs the messages. The member's own systems stay safely in their internal zone and never face the public zone directly. That separation is exactly what lets a cautious agency join the bus without exposing its internal systems to the open internet — which is often the deciding factor in whether an agency will join at all.

> _Slide 5 — Title: 'Trace an exchange across the zones'. Body, single text block: 'A call from the examination authority to the identity authority crosses one internal zone, the public zone, and another internal zone — so it needs mutual TLS, a signed message, and valid Trust-Anchor certificates at both ends. Say that, and you have specified its security.'_

The skill to take away is tracing any planned exchange across the zones and reading off its requirements. A call from the examination authority to the identity authority crosses from one internal zone, through the public zone, to another internal zone — so it needs mutual TLS between the two security servers, a signed and logged message, and valid certificates from the Trust-Anchor at both ends. Say exactly that, and you have specified the security of the exchange in terms any reviewer will accept.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Name the zones a call crosses — public, member-internal, trust-anchor — and its security requirements are specified, not guessed.'_

So security on the bus is zoned, not uniform. Three zones — public, member-internal, trust-anchor. The security server carries the trust burden at each member's edge. And the discipline is to trace each exchange across the zones, because that is what turns 'is it secure?' from a worried question into a specified answer.

> _Slide 7 — Title: 'Sources'. Body: EU EIF / NIIS X-Road trust model (three zones); mTLS; the X-Road message protocol. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Secure every call — the three trust zones'. | Standard ITU template. No images. |
| 2 | Three-zones slide. Three text rows naming the zones. | The model. Text-only. |
| 3 | What-protects-each-crossing slide. Three text rows: mutual TLS, signed messages, the Trust-Anchor. | Derives security from zones. Technical terms glossed in plain words. |
| 4 | Security-server slide. Single text block on the edge gateway. | The practical device. Explains why agencies can join safely. |
| 5 | Trace-an-exchange slide. Single text block walking the PNEA-to-PNIA call across zones. | The take-home skill, worked on a Progressa exchange. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the trust-model references. |

### AI usage tip — Trace an exchange across the trust zones and name its security

**What the prompt does:** An architect specifying a cross-agency exchange needs to state its security requirements precisely, by tracing the zones it crosses. This prompt produces that trust-zone analysis.

**Prompt template (copy-paste into Claude):**

```text
Below is a cross-agency exchange on [country X]'s interoperability bus [describe it: which agency's system calls which other agency's service, and what data flows]. Trace the call across the three trust zones — Member-Internal (the caller's network), Public (between security servers), Member-Internal (the callee's network) — with the Trust-Anchor underwriting identities. For each boundary crossing, state the security control required: mutual TLS between security servers, message signing and logging (X-Road message protocol), and valid Trust-Anchor certificates at both ends. Then list: which component holds each control (the security server at each edge), and what would have to be true for this exchange to be insecure (e.g. a revoked or expired certificate, a member system exposed directly to the public zone). Output: a zone-by-zone security specification plus a short 'how this could fail' list.
```

**Inputs and outputs:** Input: a description of one cross-agency exchange. Output: a zone-by-zone security specification plus failure modes.

**Safeguard:** This specifies the transport and identity security of the exchange; it does not cover whether the data should be shared at all — that is the legal and data-protection question (the decree and the data-protection envelope). A perfectly secured call can still be an unlawful one; keep the two assessments separate.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The three trust zones |
| YouTube-optimised title | The three trust zones that tell you exactly how to secure a government data exchange |
| Description (60 words) | Security on an interoperability bus is zoned, not one wall. Three zones — Public, Member-Internal, Trust-Anchor — and which boundaries a call crosses tells you its security: mutual TLS, signed messages, valid certificates. The security server carries the trust burden at each member's edge. Five minutes for architects. AI trust-zone tracing prompt in the description. |
| Tags | trust model, mTLS, X-Road security, certificates, security server, interoperability security, EIF, GovStack, digital government |
| Playlist (YouTube) | KP2 — Topic 4: Architecture, standards and the Giga case |
| ToR §4 coverage | §4.1 (methodology, security architecture); §4.3 (AI integration — trust-zone tracing prompt) |
| PAERA citations | (the trust model is cited to EIF / NIIS X-Road, not PAERA) |
| External-link list | EU EIF; NIIS X-Road trust model and message protocol (niis.org) |

## 3.3 Subtopic 4.3 — Adopt the standards portfolio

| Field | Value |
| --- | --- |
| Persona | A (Architect) — chief or senior architect, integration lead, or agency technical lead building on the interoperability bus |
| Target runtime | ~5 min (≈560 spoken words) |
| PAERA anchor | Technical standards (REST / OpenAPI 3.x, OAuth 2.x / OIDC, mTLS, X-Road); semantic standards (ISO/IEC 11179, JSON-LD, W3C VC); EU EIF |

> **Single message —** _Adopt the published standards — REST/OpenAPI, OAuth/OIDC, mTLS, X-Road — instead of writing your own; the portfolio is the menu every member shares._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Adopt the standards portfolio'. Voice-over begins._

The fastest way to break interoperability is to let each agency choose its own technical standards. The framework's answer is a standards portfolio — a single, published menu of the standards every member uses. As an architect, your job here is not to invent these. It is to select from the published menu, record your choices and their versions, and hold every member to them.

> _Slide 2 — Title: 'The technical standards'. Body, four text rows: 'Describing services — REST with OpenAPI 3.x.' 'Proving identity and permissions — OAuth 2.x / OpenID Connect.' 'Securing the connection — mutual TLS.' 'The bus itself — the X-Road message protocol.'_

The technical standards, in plain terms. For how a service describes and offers itself — REST with OpenAPI 3.x, the common way to define a web service. For proving who a user or system is and what they are allowed to do — OAuth 2.x and OpenID Connect. For securing the connection — mutual TLS, where both ends prove their identity. And for the bus itself — the X-Road message protocol. None of these is invented for your country; each is a widely used published standard, with tools, documentation and people who already know it.

> _Slide 3 — Title: 'The semantic standards'. Body, three text rows: 'Describing data elements — ISO/IEC 11179.' 'Linking data so meaning travels — JSON-LD.' 'Credentials a holder carries — W3C Verifiable Credentials.'_

Alongside the technical standards sit the semantic ones — the standards for meaning. ISO/IEC 11179 for describing data elements consistently. JSON-LD for linking data so its meaning travels with it. And W3C Verifiable Credentials for credentials a holder can carry and a verifier can trust without phoning the issuer. These are the published vocabularies you reuse rather than invent.

The whole point of a portfolio is re-use across the whole of government. A standard chosen once, for the framework, is reused by every member and by every new sector that joins — so the second agency does not re-decide how a service is described, and the education work you do now is reused when health comes onto the bus. Interoperability is, at bottom, the discipline of everyone choosing the same published standards instead of each building their own — and only whole-of-government planning can impose that discipline. A procurement clause cannot.

> _Slide 4 — Title: 'Your deliverable — the portfolio document'. Body, single text block: 'A short document that names, for each need, the chosen standard, its version, and any profile (your small local refinements). The Specification Working Group maintains it; every member conforms to it. Name the version — a standard at the wrong version is a quiet incompatibility.'_

Your actual deliverable is the portfolio itself — a short document that names, for each need, the chosen standard, its version, and any profile, meaning the small local refinements you add on top. It becomes the thing the Specification Working Group maintains and every member conforms to. Two cautions. Name the version, because a standard adopted at the wrong version is a quiet incompatibility that surfaces only when two members fail to connect. And keep the profile thin — every local refinement you add is something the next sector must also adopt, so refine only where you must.

> _Slide 5 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Select from the published menu, record the standard and its version, and hold every member to the same portfolio.'_

So the standards portfolio is the agreed menu, not a free choice. Select the technical and semantic standards from the published options, write them down with versions and any thin profile, and hold every member to the same list. That shared, reused portfolio is what lets twenty agencies behave as one framework instead of twenty incompatible projects.

> _Slide 6 — Title: 'Sources'. Body: REST / OpenAPI 3.x; OAuth 2.x / OIDC; mTLS; X-Road; ISO/IEC 11179; JSON-LD; W3C Verifiable Credentials; EU EIF. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Adopt the standards portfolio'. | Standard ITU template. No images. |
| 2 | Technical-standards slide. Four text rows mapping need to standard. | Each standard glossed in plain words. Text-only. |
| 3 | Semantic-standards slide. Three text rows. | Text-only. |
| 4 | Portfolio-document slide. Single text block on the deliverable, with the version and thin-profile cautions. | The practical artefact. Carries the re-use point in the body. |
| 5 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 6 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the standards. |

### AI usage tip — Assemble your standards portfolio from the published menu

**What the prompt does:** An architect needs to assemble the framework's standards portfolio — the chosen standard and version for each need — from the published options, with thin local profiles. This prompt drafts it.

**Prompt template (copy-paste into Claude):**

```text
Help me assemble a standards portfolio for [country X]'s Government Interoperability Framework. For each of these needs, recommend the established published standard(s) to adopt, with the current version, and note where a thin local profile is usually required: (1) describing and offering services (APIs); (2) authentication and authorisation; (3) transport security; (4) the data-exchange bus/protocol; (5) describing data elements; (6) linking data so meaning travels; (7) verifiable credentials. For each: standard name, maintaining body, current version, what it covers in one line, and any widely used alternative I should be aware of (with the trade-off). Flag where two standards compete so I can choose deliberately. CRITICAL: mark the version of each as [confirm] — verify against the standard's own site, since versions change. Output: a portfolio table (need / standard / version [confirm] / maintainer / note) plus a short list of the choices that most need a deliberate decision.
```

**Inputs and outputs:** Input: the country (and any standards already in use). Output: a standards-portfolio table plus the decisions that need deliberation.

**Safeguard:** Confirm every version against the standard's own publication before locking the portfolio — an AI's recollection of a version number can be stale, and the portfolio is the one document every member must match exactly. Also check each choice against what your chosen X-Road platform already mandates, to avoid adopting a standard that conflicts with the bus.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Adopt the standards portfolio |
| YouTube-optimised title | The standards portfolio: the shared menu that makes government systems interoperable |
| Description (60 words) | Let each agency pick its own standards and interoperability breaks. The fix is a standards portfolio — one published menu every member shares: REST/OpenAPI, OAuth/OIDC, mTLS, X-Road, and the semantic standards. Select from the menu, record the versions, hold everyone to them. A standard chosen once is re-used by every sector. Five minutes for architects. AI portfolio prompt in the description. |
| Tags | standards portfolio, OpenAPI, OAuth, mTLS, X-Road, interoperability standards, ISO 11179, verifiable credentials, EIF, GovStack |
| Playlist (YouTube) | KP2 — Topic 4: Architecture, standards and the Giga case |
| ToR §4 coverage | §4.1 (methodology, standards); §4.2 (reference frameworks/standards); §4.3 (AI integration — portfolio prompt) |
| PAERA citations | (standards cited to their published bodies and EIF, not PAERA) |
| External-link list | REST / OpenAPI 3.x; OAuth 2.x / OpenID Connect; mTLS; NIIS X-Road; ISO/IEC 11179; JSON-LD; W3C Verifiable Credentials; EU EIF |

## 3.4 Subtopic 4.4 — Generate the semantic map

| Field | Value |
| --- | --- |
| Persona | A (Architect) — chief or senior architect, integration lead, or agency technical lead building on the interoperability bus |
| Target runtime | ~5 min (≈600 spoken words) |
| PAERA anchor | ISO/IEC 11179; JSON-LD; W3C VC; education vocabularies — OneRoster (1EdTech), CEDS; EU EIF semantic layer |

> **Single message —** _Generate a semantic map so two agencies mean the same 'learner' before they exchange one — the hardest layer, made tractable._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Generate the semantic map'. Voice-over begins._

Of the four interoperability layers, the semantic one — meaning — is the hardest, and the one most projects skip, because it is slow, unglamorous and a little political. It is also where exchanges silently fail: a working wire that carries data the receiver misreads is still a failure, and a worse one, because it looks like success. The good news for the architect is that meaning can be made tractable by building a semantic map — and you can generate a first draft of one with Claude.

> _Slide 2 — Title: 'What a semantic map is'. Body, five text rows: 'The entities in the exchange — learner, school.' 'Their fields — name, date of birth, enrolment status.' 'The code lists — the allowed values.' 'The identifier — which key links the same learner across two agencies.' 'The mapping — each agency's terms onto one shared definition.'_

A semantic map, for a single exchange, sets out five things. The entities involved — a learner, a school. Their fields — name, date of birth, enrolment status. The code lists — the allowed values for, say, enrolment status, because one agency's 'active' may be another's 'enrolled'. The identifier — which key reliably links the same learner across two agencies. And the mapping itself — each agency's own terms reconciled to one shared definition, so that the examination authority's 'learner' and the registry's 'learner' are confirmed to mean the same person, identified the same way.

> _Slide 3 — Title: 'Reuse the published vocabularies'. Body, three text rows: 'OneRoster — rostering and enrolment data.' 'CEDS — a common vocabulary of education data elements.' 'ISO/IEC 11179 — how to describe a data element precisely; W3C VC for credentials.'_

You do not invent these definitions from scratch. For education, much of the meaning is already published. OneRoster gives you rostering and enrolment data. CEDS gives you a common vocabulary of education data elements. ISO/IEC 11179 gives you the discipline of describing each data element precisely, and W3C Verifiable Credentials covers the credential case. The semantic map's job is to adopt these published vocabularies and map your agencies' actual fields onto them — not to start from a blank page.

> _Slide 4 — Title: 'Where business and IT meet'. Body, single text block: 'Deciding that 'enrolment' means the same to the examination authority and the learner registry is a decision the data owners make — but it must be written precisely enough for the systems to use. The semantic map is that shared language: agreed once, reused by every exchange.'_

This is the layer where business and IT must meet, and the semantic map is their shared language. Deciding that 'enrolment' means the same thing to the examination authority and to the learner registry is not a technical choice — it is a decision the business data owners make. But it has to be written down precisely enough for the systems to use. The semantic map is exactly that shared object: it lets the people who own the data and the architects who move it agree, once, what the data means — and then every exchange that touches a learner reuses that one agreement instead of re-arguing it.

> _Slide 5 — Title: 'gif-semantic-map — generate, then confirm'. Body, two text rows: 'Give Claude the published vocabulary and the two agencies' field lists; it drafts the mapping.' 'Every identifier and code value is a [confirm] until checked against the real registries — an invented mapping is confident and wrong.'_

The AI play is gif-semantic-map. Give Claude the published vocabulary and the two agencies' field lists, and it drafts the mapping — which field maps to which, where the code lists differ and need translating, which identifier to use as the link. That is the fast ninety per cent. The essential ten per cent is yours: every identifier and every code value is a [confirm] until you check it against the real registries. An invented mapping reads convincingly and is wrong — and in the semantic layer, wrong means a learner's records silently merged with someone else's. Generate fast; confirm against the registries carefully.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A semantic map is the shared meaning of an exchange — drafted by AI from the published vocabularies, confirmed against the real registries.'_

So you make the hardest layer tractable by building it, one exchange at a time, as a semantic map: the entities, fields, code lists, identifier and the mapping onto published vocabularies. It is the shared language between the data owners and the architects, generated with gif-semantic-map and confirmed against the registries. Get the semantic map right and the exchange carries meaning, not just bytes — which is the whole difference between interoperability that works and interoperability that only appears to.

> _Slide 7 — Title: 'Sources'. Body: ISO/IEC 11179; JSON-LD; W3C Verifiable Credentials; OneRoster (1EdTech); CEDS; EU EIF semantic layer. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Generate the semantic map'. | Standard ITU template. No images. |
| 2 | What-a-semantic-map-is slide. Five text rows: entities, fields, code lists, identifier, mapping. | The artefact anatomy. Text-only. |
| 3 | Reuse-vocabularies slide. Three text rows: OneRoster, CEDS, ISO 11179 / W3C VC. | Names the published education vocabularies. No logos, plain text. |
| 4 | Business-and-IT slide. Single text block on meaning as a business decision written for systems. | Carries the lingua-franca argument. Text-only. |
| 5 | gif-semantic-map slide. Two text rows: generate, then [confirm] against registries. | Names the AI play and the anti-invention safeguard. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the semantic standards and vocabularies. |

### AI usage tip — Generate a semantic map for an exchange (gif-semantic-map)

**What the prompt does:** An architect needs a semantic map for one exchange — the entities, fields, code lists, identifier and the mapping onto published vocabularies — drafted from the two agencies' field lists. This is the gif-semantic-map play.

**Prompt template (copy-paste into Claude):**

```text
Below are two agencies that need to exchange data on [country X]'s bus, with each one's field list for the shared entity [paste: the entity, e.g. a learner; agency A's fields and code lists; agency B's fields and code lists; and the published vocabulary to align to, e.g. OneRoster / CEDS]. Produce a semantic map for this exchange: (1) the shared entity and its fields, aligned to the published vocabulary; (2) for each field, the mapping from agency A's term and agency B's term to the shared definition; (3) code-list reconciliation — where A's allowed values differ from B's, the translation; (4) the identifier to use to link the same record across both agencies, and the risk if it is not unique. CRITICAL: output every identifier choice and every code-list value as [confirm: check against the live registry], because you do not have the real registries and an invented mapping can merge two people's records. Output: the semantic map plus a list of every [confirm] to resolve.
```

**Inputs and outputs:** Input: two agencies' field lists for a shared entity, and the published vocabulary to align to. Output: a semantic map with [confirm] placeholders for identifiers and code values.

**Safeguard:** Identifier and code-list errors in a semantic map are the most dangerous defects in the whole framework — a wrong identifier silently merges two citizens' records. Confirm every [confirm] against the live registries with the data owners before any exchange uses the map; do not deploy a semantic map on the strength of the AI's mapping alone.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Generate the semantic map |
| YouTube-optimised title | The semantic map: making two agencies mean the same thing before they exchange data |
| Description (60 words) | Meaning is the hardest interoperability layer and the one projects skip — a working wire carrying misread data is still a failure. A semantic map fixes it: entities, fields, code lists, the identifier, and the mapping onto published vocabularies like OneRoster and CEDS. It's the shared language between data owners and architects. Five minutes for architects. The gif-semantic-map prompt is in the description. |
| Tags | semantic interoperability, semantic map, data mapping, OneRoster, CEDS, ISO 11179, identifiers, code lists, EIF, GovStack, AI |
| Playlist (YouTube) | KP2 — Topic 4: Architecture, standards and the Giga case |
| ToR §4 coverage | §4.1 (methodology, semantic layer); §4.3 (AI integration — gif-semantic-map) |
| PAERA citations | (semantic standards cited to ISO/JSON-LD/W3C and EIF, not PAERA) |
| External-link list | ISO/IEC 11179; JSON-LD; W3C Verifiable Credentials; OneRoster (1EdTech); CEDS; EU EIF semantic layer |

## 3.5 Subtopic 4.5 — Generate a service contract

| Field | Value |
| --- | --- |
| Persona | A (Architect) — chief or senior architect, integration lead, or agency technical lead building on the interoperability bus |
| Target runtime | ~5 min (≈580 spoken words) |
| PAERA anchor | OpenAPI 3.x specification; OAuth 2.x / OIDC; NIIS X-Road service description; EU EIF |

> **Single message —** _Turn a service brief into an OpenAPI contract, then an X-Road service description — the configuration that puts a service on the bus._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Generate a service contract'. Voice-over begins._

To put a service on the bus, you need a contract — a precise description of what the service offers: the operations, the inputs, the outputs, the errors. That contract is an OpenAPI document, and it is the configuration that makes the service callable. As an architect, you generate it from a short service brief and the semantic map, and then turn it into the X-Road service description the bus actually uses to route a call.

> _Slide 2 — Title: 'What an OpenAPI contract specifies'. Body, five text rows: 'The operations — e.g. get a learner record.' 'The inputs — the identifier and parameters.' 'The outputs — the fields, taken from the semantic map.' 'The errors it can return.' 'The security — OAuth 2.x / OpenID Connect.'_

An OpenAPI 3.x contract specifies, for one service, the operations it offers — say, 'get a learner's record' — the inputs each operation takes, the outputs it returns, the errors it can raise, and the security it requires. The outputs come straight from the semantic map you built: the contract is where the agreed meaning becomes a concrete, callable interface. A consumer reads the contract and knows exactly how to call the service — the field names, the types, the errors — without a single meeting.

> _Slide 3 — Title: 'gif-openapi-gen — generate, then confirm'. Body, two text rows: 'Give Claude the service brief and the semantic map; it drafts the OpenAPI document — paths, request and response shapes, errors, security.' 'Every endpoint, field and type is a [confirm] until checked — a contract naming a field the provider does not expose fails at the first call.'_

The AI play is gif-openapi-gen. Give Claude the service brief — what the service does — and the semantic map for the data it returns, and it drafts the OpenAPI document: the paths, the request and response shapes, the error responses, the security scheme. As with the semantic map, every endpoint, field name and type is a [confirm] until you check it against what the provider system actually exposes. An OpenAPI document that looks right but names a field the provider does not return is a contract that fails at the first real call — and looks fine until then.

> _Slide 4 — Title: 'One contract, two forms'. Body, single text block: 'The OpenAPI contract becomes the X-Road service description — the form the bus uses to register and route to the service. OpenAPI for humans and tools to read; the X-Road service description for the bus to route. Generate the first, derive the second.'_

The OpenAPI contract then becomes the X-Road service description — the form the bus uses to register the service and route a call to it. They are the same contract in two forms: OpenAPI for humans and tools to read, the X-Road service description for the bus to route. Generating the first and deriving the second is the core move of this whole knowledge product — using Claude to produce the configuration that puts a real service on the bus.

And this is why the contract is a build-pack artefact, not a diagram. It is executable configuration — it is what the consumer's code calls and what the bus routes. When you have done the semantic map and the service contract for one exchange, you hold, for that exchange, the agreed meaning and the callable interface: the technical-layer configuration the live demonstration runs on. That is real output, not a picture of output.

> _Slide 5 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The OpenAPI contract is the service made callable — generated from the brief and the semantic map, confirmed, and turned into an X-Road service description.'_

So the service contract is where meaning becomes a callable interface. Generate the OpenAPI document with gif-openapi-gen from the brief and the semantic map, confirm every field against the provider, and derive the X-Road service description. That is the configuration that puts a service on the bus — executable, in the build pack, ready for a real call.

> _Slide 6 — Title: 'Sources'. Body: OpenAPI 3.x specification; OAuth 2.x / OpenID Connect; NIIS X-Road service description; EU EIF. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Generate a service contract'. | Standard ITU template. No images. |
| 2 | OpenAPI-specifies slide. Five text rows: operations, inputs, outputs, errors, security. | The contract anatomy. Text-only. |
| 3 | gif-openapi-gen slide. Two text rows: generate; [confirm] every field. | Names the AI play and the anti-invention safeguard. |
| 4 | One-contract-two-forms slide. Single text block: OpenAPI and the X-Road service description. | The core 'config that wires a service' move. Text-only. |
| 5 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 6 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the OpenAPI and X-Road references. |

### AI usage tip — Generate an OpenAPI service contract (gif-openapi-gen)

**What the prompt does:** An architect needs an OpenAPI 3.x contract for a service, generated from the service brief and the semantic map, ready to derive an X-Road service description. This is the gif-openapi-gen play.

**Prompt template (copy-paste into Claude):**

```text
Generate an OpenAPI 3.x contract for a service on [country X]'s interoperability bus. Inputs: the service brief [paste: what the service does, e.g. 'return a learner's identity and enrolment given a national ID'] and the semantic map for the data it returns [paste the relevant fields, types and identifier from your semantic map]. Produce: (1) the path(s) and operation(s); (2) the request parameters, including the identifier; (3) the response schema, with field names and types taken from the semantic map; (4) the error responses; (5) the security scheme (OAuth 2.x / OIDC). CRITICAL: mark every path, field name and type as [confirm: verify against what the provider system actually exposes] — do not invent fields the provider may not return. Then note which parts become the X-Road service description. Output: the OpenAPI document (YAML), a list of [confirm] items, and the X-Road service-description notes.
```

**Inputs and outputs:** Input: the service brief and the relevant semantic-map fields. Output: an OpenAPI 3.x contract with [confirm] placeholders, plus X-Road service-description notes.

**Safeguard:** An OpenAPI contract that names fields the provider does not actually expose fails at the first real call — confirm every path and field against the provider system's real interface (not its documentation alone, which drifts) before publishing the contract or deriving the X-Road service description.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Generate a service contract |
| YouTube-optimised title | From a service brief to an OpenAPI contract to a service on the bus — with AI |
| Description (60 words) | To put a service on the bus you need a contract: an OpenAPI document specifying operations, inputs, outputs, errors and security. Generate it from the service brief and the semantic map, confirm every field against the provider, and derive the X-Road service description. It's executable configuration, not a diagram. Five minutes for architects. The gif-openapi-gen prompt is in the description. |
| Tags | OpenAPI, service contract, API design, X-Road service description, OAuth, interoperability, GovStack, AI, digital government |
| Playlist (YouTube) | KP2 — Topic 4: Architecture, standards and the Giga case |
| ToR §4 coverage | §4.1 (methodology, service contracts); §4.3 (AI integration — gif-openapi-gen); §4.5 (build-pack artefact) |
| PAERA citations | (OpenAPI / X-Road service description cited to their published specs, not PAERA) |
| External-link list | OpenAPI 3.x specification; OAuth 2.x / OpenID Connect; NIIS X-Road service description (niis.org); EU EIF |

## 3.6 Subtopic 4.6 — Put a real data source on the bus — the Giga case

| Field | Value |
| --- | --- |
| Persona | A (Architect) — chief or senior architect, integration lead, or agency technical lead building on the interoperability bus |
| Target runtime | ~5 min (≈580 spoken words) |
| PAERA anchor | Giga open APIs and schemas (school-master, qos); GeoJSON; ISO 3166-1 alpha-3; bronze/silver/gold MDM |

> **Single message —** _Take Giga's real school data through a bronze/silver/gold pipeline onto the bus — a worked exchange you can copy for your sector._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Put a real data source on the bus — the Giga case'. Voice-over begins._

Everything so far has been the method. Now a real worked case, so you have a template to copy rather than a theory to apply. Giga — the ITU and UNICEF initiative that maps the world's schools and their connectivity — publishes open APIs and real school data. Putting Giga's data onto the bus is a complete, concrete example of every step at once: the standards, the semantics, the contract, and the data pipeline that feeds them.

> _Slide 2 — Title: 'What Giga gives you'. Body, four text rows: 'Open APIs you can call.' 'A school-master schema and a qos (connectivity) schema.' 'GeoJSON for each school's location.' 'ISO 3166-1 alpha-3 country codes for indexing.'_

Giga gives you real, published material to work from. Open APIs you can actually call. A school-master schema describing each school, and a qos schema describing its connectivity — the quality of its internet service. GeoJSON, the standard way to express a location, for where each school sits. And ISO 3166-1 alpha-3, the three-letter country codes, for indexing. These are exactly the kind of published standards and schemas the standards portfolio and the semantic map told you to reuse — and here they are, in one real dataset, ready to practise on.

> _Slide 3 — Title: 'The bronze / silver / gold pipeline'. Body, three text rows: 'Bronze — the raw data, exactly as received; kept for audit.' 'Silver — cleaned and validated, conformed to the schema and the semantic map; bad records flagged.' 'Gold — the published, authoritative version other services consume.'_

Real source data is never clean enough to publish straight onto the bus, so it moves through a pipeline in three stages. Bronze — the raw data exactly as received from the source, kept untouched for audit. Silver — the cleaned and validated version, conformed to the schema and the semantic map, with bad or duplicate records flagged. Gold — the published, authoritative version that other services on the bus actually consume. This bronze, silver, gold pattern is how a messy real source becomes a registry other agencies can trust, and every data source you put on the bus follows it.

> _Slide 4 — Title: 'The whole topic, on one source'. Body, single text block: 'School data lands as bronze, is conformed to the schema and semantic map as silver, and is published as gold. A gold service gets an OpenAPI contract, an X-Road service description, trust-zone security, and a data-protection envelope. That is Topic 4, applied end to end.'_

Now watch the whole topic tie together on one source. The school-master data lands as bronze. It is cleaned and conformed to the schema and the semantic map as silver. It is published as gold. The gold-layer service is described by an OpenAPI contract, registered as an X-Road service description, secured across the three trust zones, and made lawful by the data-protection envelope. Every piece of this topic appears, in order, on one real dataset. That is the template — and it is the same template whether the source is schools, health facilities, or a farmer registry.

The reason to learn it on Giga rather than your own data is that Giga is public, real and already standards-aligned, so you can practise the full pipeline before you touch a live national registry where a mistake has consequences. Once you have run it once on Giga, you apply the identical pattern — bronze, silver, gold, contract, bus — to your country's own school data, and then to the next sector.

> _Slide 5 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Bronze, silver, gold, contract, bus — the Giga case is the full method on one real source, ready to copy for your own sector.'_

So the Giga case is the method made concrete. A real source, real schemas, the bronze-silver-gold pipeline, a service contract, and the bus — every step of this topic on one dataset you can actually run. Learn it here, where the data is public and forgiving, and you have a template to copy onto your own national registries with confidence.

> _Slide 6 — Title: 'Sources'. Body: Giga open APIs and schemas (school-master, qos); GeoJSON; ISO 3166-1 alpha-3; bronze/silver/gold MDM (Giga School Master Data architecture). Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Put a real data source on the bus — the Giga case'. | Standard ITU template. No images. |
| 2 | What-Giga-gives slide. Four text rows: APIs, schemas, GeoJSON, country codes. | Names the real Giga assets. No logos, plain text. |
| 3 | Bronze-silver-gold slide. Three text rows for the three pipeline stages. | The MDM pattern. Text-only. |
| 4 | Whole-topic-on-one-source slide. Single text block tying every step together. | The synthesis — the template the architect copies. |
| 5 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 6 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the Giga assets and the MDM pattern. |

### AI usage tip — Map a real sector data source through bronze/silver/gold onto the bus

**What the prompt does:** An architect needs to plan how a real source dataset (Giga schools, or the country's own sector registry) moves through a bronze/silver/gold pipeline to a gold service on the bus. This prompt produces that plan.

**Prompt template (copy-paste into Claude):**

```text
I want to put a real data source onto [country X]'s interoperability bus: [describe the source — e.g. Giga school data, or the national school registry; name its schema/fields if known]. Plan its bronze/silver/gold pipeline and its path onto the bus. (1) BRONZE — what raw data is ingested as-is, and what is retained for audit. (2) SILVER — the cleaning and validation rules, the conformance to a schema and semantic map, and how bad/duplicate records are flagged (note the identifier used for de-duplication as [confirm: verify uniqueness]). (3) GOLD — the published authoritative dataset and the service it backs. (4) ONTO THE BUS — the OpenAPI contract, the X-Road service description, the trust-zone security, and the data-protection basis required. Output: the pipeline plan stage by stage, plus a checklist of what must be confirmed against the real source before go-live.
```

**Inputs and outputs:** Input: a description of the source dataset. Output: a bronze/silver/gold pipeline plan plus a path-onto-the-bus checklist.

**Safeguard:** The de-duplication identifier in the silver stage is the highest-risk decision — a non-unique key merges records for different people. Confirm its uniqueness against the real source before building the pipeline, and validate the gold dataset against the source counts before any service consumes it.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The Giga end-to-end case |
| YouTube-optimised title | Putting real school data on an interoperability bus — the Giga worked example |
| Description (60 words) | A real worked case: Giga's open school data — school-master and connectivity schemas, GeoJSON, country codes — moved through a bronze/silver/gold pipeline to a gold service, given an OpenAPI contract and an X-Road service description, secured and made lawful. Every step of the topic on one real source. A template you copy for your sector. Five minutes for architects. AI pipeline prompt in the description. |
| Tags | Giga, school data, bronze silver gold, MDM, data pipeline, GeoJSON, interoperability, X-Road, GovStack, digital government |
| Playlist (YouTube) | KP2 — Topic 4: Architecture, standards and the Giga case |
| ToR §4 coverage | §4.6 (real-life example — Giga) — primary; §4.1 (methodology, data pipeline); §4.3 (AI integration — pipeline prompt) |
| PAERA citations | (Giga assets and the MDM pattern cited to Giga and the published schemas, not PAERA) |
| External-link list | Giga (giga.global) — open APIs, school-master and qos schemas; GeoJSON; ISO 3166-1 alpha-3 |

## 3.7 Subtopic 4.7 — Wire a service onto the bus

| Field | Value |
| --- | --- |
| Persona | A (Architect) — chief or senior architect, integration lead, or agency technical lead building on the interoperability bus |
| Target runtime | ~5 min (≈540 spoken words) |
| PAERA anchor | NIIS X-Road service description / Information Mediator; GovStack Information Mediation Building Block; EU EIF |

> **Single message —** _The OpenAPI contract becomes an X-Road service description and the call resolves — the GovStack Information Mediation pattern._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Wire a service onto the bus'. Voice-over begins._

You have the meaning — the semantic map. The contract — the OpenAPI document. And the data — the gold dataset. Wiring is the step that makes them callable on the bus: registering the service so that a consumer in another agency can discover it and call it. The pattern has a name in the GovStack world — Information Mediation, the building block whose whole job is to mediate exchanges between systems.

> _Slide 2 — Title: 'What 'wired' means'. Body, three text rows: 'The service description is registered on the provider's security server.' 'A consumer in another agency can discover the service.' 'A consumer call routes through both security servers and returns the data.'_

'Wired' means three concrete things. The service's description is registered on the provider agency's security server. A consumer in another agency can discover that the service exists. And when the consumer calls it, the request routes through the consumer's security server, across the bus, to the provider's security server, which runs the service and returns the data — all secured across the trust zones you mapped earlier. When that round trip works, the service is genuinely on the bus, not just designed for it.

> _Slide 3 — Title: 'The configuration that makes it work'. Body, three text rows: 'The subsystem — the member's registered identity on the bus.' 'The service description — derived from your OpenAPI contract.' 'The access-control list — which members may call this service.'_

Three configuration artefacts make wiring real, and you have largely produced them already. The subsystem — the member's registered identity on the bus. The service description — derived directly from your OpenAPI contract. And the access-control list — which other members are allowed to call this service, because being on the bus does not mean everyone may call everything. Registering the member as a subsystem and setting its access-control list is member-onboarding work; here you supply the service description that goes with it.

> _Slide 4 — Title: 'The GovStack Information Mediation pattern'. Body, single text block: 'Information Mediation is the published GovStack building block for the component that routes and mediates exchanges. Cross-linking to it keeps your framework aligned with the wider ecosystem — a vendor's compliant Information Mediator drops into the role rather than being built bespoke.'_

The GovStack Information Mediation building block is the published pattern for all of this — the reusable specification for the component that routes and mediates exchanges between agencies. Cross-linking your framework to it keeps you aligned with the wider GovStack ecosystem, which matters practically: a vendor's compliant Information Mediator implementation can drop into the role, rather than your country building the mediation component bespoke. That is the re-use principle reaching all the way down to the routing component itself.

> _Slide 5 — Title: 'The acceptance is a test call'. Body, single text block: 'A consumer security server calls the service and gets the expected data back, once, over the bus. That single resolving call proves the technical layer works for this exchange: meaning agreed, contract honoured, security enforced, data returned. It is exactly the check the live demonstration runs.'_

And the acceptance here is concrete and runnable — a test call. A consumer's security server calls the service and gets the expected data back, once, over the bus. That single resolving call is the proof that the technical layer works for this exchange: meaning agreed, contract honoured, security enforced, data returned. It is exactly the check the live demonstration runs, and it is the moment the technical-layer configuration stops being a set of documents and becomes a working exchange.

> _Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Register the service description, set who may call it, and a test call that resolves proves the service is on the bus.'_

So wiring is where the pieces become a working service. Register the service description on the security server, set the access-control list for who may call it, align to the GovStack Information Mediation pattern, and prove it with a test call that resolves. That resolving call is the technical layer's acceptance — and the technical configuration the framework actually runs on.

> _Slide 7 — Title: 'Sources'. Body: NIIS X-Road service description / Information Mediator; GovStack Information Mediation Building Block (govstack.global); EU EIF. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Wire a service onto the bus'. | Standard ITU template. No images. |
| 2 | What-wired-means slide. Three text rows: register, discover, route-and-return. | Defines 'wired' concretely. Text-only. |
| 3 | Configuration slide. Three text rows: subsystem, service description, access-control list. | The config artefacts. Links to member onboarding (Topic 5). Text-only. |
| 4 | Information-Mediation slide. Single text block on the GovStack BB pattern. | Cross-links GovStack; carries re-use to the routing component. |
| 5 | Test-call slide. Single text block on the resolving call as acceptance. | The runnable acceptance — the demonstration's check. |
| 6 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line. |
| 7 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the X-Road and GovStack references. |

### AI usage tip — Generate the X-Road service description and wiring checklist

**What the prompt does:** An architect needs to turn an OpenAPI contract into the X-Road service description and the wiring configuration (subsystem, access-control list), with a test-call plan. This prompt produces them.

**Prompt template (copy-paste into Claude):**

```text
I am wiring a service onto [country X]'s X-Road bus. Inputs: the OpenAPI contract for the service [paste it or its key paths/fields], the provider agency and the consumer agency [name them], and the access policy [who may call this service]. Produce: (1) the X-Road service-description notes derived from the OpenAPI contract (service code, version, the operations exposed); (2) the wiring configuration — the provider's subsystem identity, and the access-control list entries naming which consumer subsystems may call the service; (3) a test-call plan — the exact call a consumer would make and the expected response, to prove the service resolves over the bus. CRITICAL: mark every member/subsystem identifier and service code as [confirm: verify against the live registry], since an invented identifier breaks routing. Note where this aligns to the GovStack Information Mediation building block. Output: the service-description notes, the access-control entries, and the test-call plan.
```

**Inputs and outputs:** Input: the OpenAPI contract, the provider and consumer agencies, the access policy. Output: X-Road service-description notes, access-control entries, and a test-call plan.

**Safeguard:** Every member and subsystem identifier must be confirmed against the live X-Road registry before deployment — a wrong identifier does not error clearly, it silently routes nowhere or to the wrong place. Run the test call in a sandbox first, and confirm the access-control list denies a consumer that should not have access, not only that it permits the one that should.

### Metadata

| Field | Value |
| --- | --- |
| Working title | Wire a service onto the bus |
| YouTube-optimised title | Wiring a service onto an X-Road bus — the GovStack Information Mediation pattern |
| Description (60 words) | Wiring makes a service callable on the bus: register the service description on the security server, set the access-control list for who may call it, align to the GovStack Information Mediation pattern, and prove it with a test call that resolves. That resolving call is the technical layer's acceptance. Five minutes for architects. AI service-description and wiring prompt in the description. |
| Tags | X-Road, service description, Information Mediation, GovStack, access control, subsystem, interoperability wiring, EIF, digital government |
| Playlist (YouTube) | KP2 — Topic 4: Architecture, standards and the Giga case |
| ToR §4 coverage | §4.1 (methodology, wiring); §4.3 (AI integration — service-description prompt); §4.5 (build-pack acceptance — the test call) |
| PAERA citations | Annex A1.3 (Building Block patterns — the Information Mediation BB; cited to GovStack) |
| External-link list | NIIS X-Road service description / Information Mediator (niis.org); GovStack Information Mediation Building Block (govstack.global); EU EIF |

## 3.8 Subtopic 4.8 — Make the exchange lawful — the data-protection envelope

| Field | Value |
| --- | --- |
| Persona | A (Architect) — chief or senior architect, integration lead, or agency technical lead building on the interoperability bus |
| Target runtime | ~4 min (≈480 spoken words) |
| PAERA anchor | ITU DPI Safeguards / data-protection guidance; bilateral Letters of Interest; the Topic-2 decree; EU EIF legal layer |

> **Single message —** _Letters of Interest plus a data-protection envelope make a real exchange lawful as well as technically possible._

### Script (voice-over over text-only slides)

> _Slide 1 — Title: 'Make the exchange lawful — the data-protection envelope'. Voice-over begins._

A service can be perfectly wired and perfectly secured and still must not be switched on, because technical capability is not lawful authority. The last thing the architect checks for an exchange is its data-protection envelope — the agreements and safeguards that make moving this data lawful, not merely possible. This is where the technical work you have done meets the legal and organisational layers built earlier in KP2.

> _Slide 2 — Title: 'The envelope has three parts'. Body, three text rows: 'A lawful basis — from the decree; the exchange must be one the decree authorises.' 'A bilateral Letter of Interest — the two agencies agree to this specific exchange, on these terms.' 'Data-protection safeguards — minimisation, purpose, consent where needed, retention.'_

The envelope has three parts. A lawful basis, which comes from the decree you drafted in the legal topic — the exchange must be one the decree actually authorises. A bilateral agreement — a Letter of Interest between the two agencies, the practical record that they agree to this specific exchange, on these terms. And the data-protection safeguards — that the exchange uses only the data it needs, for the stated purpose, with consent where required, and a clear retention rule. Technical capability plus these three is what makes an exchange lawful.

> _Slide 3 — Title: 'Data protection by design'. Body, three text rows: 'Minimisation is in the contract — the service returns only the fields the purpose needs.' 'Purpose and the access-control list match — only agencies with a lawful purpose can call.' 'Retention and logging are configured, not promised.'_

The architect's specific job is data protection by design — building the safeguards into the configuration rather than bolting them on after. Minimisation lives in the OpenAPI contract: the service returns only the fields the purpose needs, not the whole record. The purpose and the access-control list match: only the agencies with a lawful purpose can call the service. And retention and logging are configured, not merely promised in a policy. Built this way, the safeguards are part of the configuration the demonstration runs, not a document filed somewhere separate from the system.

> _Slide 4 — Title: 'Where the three layers meet'. Body, single text block: 'The decree (legal) authorises the exchange. The member agreement and access-control list (organisational) record who may do it. The contract, security and minimisation (technical) carry it out within the envelope. An exchange is ready only when all three line up.'_

This is where the three layers meet on a single exchange. The decree, the legal layer, authorises it. The member agreement and the access-control list, the organisational layer, record who may do it. The contract, the security and the minimisation, the technical layer, carry it out within the envelope. An exchange is ready only when all three line up — and that is the architect's final check before a service goes live. It is also why the data-protection officer signs off, not the architect alone: the envelope is a shared responsibility, by design.

> _Slide 5 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A lawful basis, a Letter of Interest, and data protection by design — the envelope that makes a wired exchange a lawful one.'_

So the data-protection envelope is the final layer on a real exchange. A lawful basis from the decree, a Letter of Interest between the agencies, and data protection built into the configuration by design. With the technical work inside that envelope, an exchange is not just possible — it is lawful, and ready to go live. That completes the architecture topic: meaning, contract, security, wiring, and the envelope that makes it all lawful.

> _Slide 6 — Title: 'Sources'. Body: ITU DPI Safeguards / data-protection guidance; bilateral Letters of Interest; the Topic-2 decree (legal basis); EU EIF legal layer. Footer: 'Find the link in the description.'_

### On-screen slide specification

| Slide | Element (text-only) | Notes |
| --- | --- | --- |
| 1 | Title slide. Title: 'Make the exchange lawful — the data-protection envelope'. | Standard ITU template. No images. |
| 2 | Three-parts slide. Three text rows: lawful basis, Letter of Interest, safeguards. | The envelope anatomy. Text-only. |
| 3 | Data-protection-by-design slide. Three text rows: minimisation, purpose match, retention configured. | The architect's concrete job. Text-only. |
| 4 | Three-layers-meet slide. Single text block tying legal, organisational, technical together. | The synthesis across KP2's layers. Text-only. |
| 5 | Single-sentence summary slide. One large text block (Arial Bold 28pt). | The take-home line that closes the topic. |
| 6 | Sources slide. Footer: 'Find the link in the description.' | Lets viewers verify the data-protection references. |

### AI usage tip — Draft the data-protection envelope for an exchange

**What the prompt does:** An architect needs the data-protection envelope for an exchange — the lawful basis, the Letter of Interest, and the by-design safeguards — assembled and checked against the decree. This prompt drafts it.

**Prompt template (copy-paste into Claude):**

```text
Below is a planned exchange on [country X]'s bus [describe it: provider agency, consumer agency, the data, the citizen-facing purpose], and the relevant articles of the interoperability decree [paste them]. Assemble its data-protection envelope. (1) LAWFUL BASIS — identify which decree article authorises this exchange, or flag NOT AUTHORISED if none does. (2) LETTER OF INTEREST — draft the bilateral agreement between the two agencies recording the exchange, its purpose, the data, and the terms. (3) DATA PROTECTION BY DESIGN — specify: which fields the service should return (minimisation — only what the purpose needs), how the access-control list enforces purpose, the retention rule, and the logging. Output: the lawful-basis finding, the draft Letter of Interest, and a data-protection-by-design checklist — with a clear flag if the exchange is not yet authorised by the decree.
```

**Inputs and outputs:** Input: the exchange and the relevant decree articles. Output: a lawful-basis finding, a draft Letter of Interest, and a data-protection-by-design checklist.

**Safeguard:** If the lawful-basis check flags NOT AUTHORISED, the exchange must not go live regardless of how well it is built — route it back to the legal layer to amend the decree or the Use-Case Catalogue. And have the data-protection officer, not the architect, sign off the final envelope; data protection by design is necessary but not sufficient on its own.

### Metadata

| Field | Value |
| --- | --- |
| Working title | The data-protection envelope |
| YouTube-optimised title | Why a perfectly built data exchange still can't go live without this |
| Description (60 words) | A service can be perfectly wired and secured and still be unlawful to switch on. The data-protection envelope makes it lawful: a basis from the decree, a bilateral Letter of Interest, and data protection by design — minimisation in the contract, purpose-matched access, configured retention. It's where the legal, organisational and technical layers meet. Four minutes for architects. AI envelope prompt in the description. |
| Tags | data protection, data protection by design, lawful basis, Letter of Interest, minimisation, interoperability, decree, ITU DPI safeguards, digital government |
| Playlist (YouTube) | KP2 — Topic 4: Architecture, standards and the Giga case |
| ToR §4 coverage | §4.1 (methodology, data protection); §4.3 (AI integration — envelope prompt) |
| PAERA citations | §3.2 Legal layer (the lawful basis comes from the decree); data-protection guidance cited to ITU DPI Safeguards |
| External-link list | ITU DPI Safeguards / data-protection guidance; bilateral Letters of Interest; the Topic-2 decree (legal basis); EU EIF legal layer |

## 4. Production notes

### 4.1 Design standard — the split-screen usability test

The bar for every video in Topic 4 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to follow along and act on the other half. For the videos in Topic 4, 'act' means produce the corresponding technical artefact — a component-to-layer map, a trust-zone trace, a standards-portfolio selection, a semantic map for an exchange, an OpenAPI service contract, or an X-Road service description. Each subtopic's AI usage tip operationalises this: several prompts are instances of gif-semantic-map and gif-openapi-gen, and their output is configuration that goes straight into the build pack, ready to validate against the published spec.

### 4.2 Slide branding

Every slide follows the ITU template per the Knowledge Products and Video Materials Guide §3.i: Title text Arial Bold 28pt; Body text Arial 18pt; Background colour #E5F5FB. Text only — no images. Diagrams and text boxes are permitted only where strictly necessary; where used, all labels remain plain text. No country emblems, no agency logos. The recurring single-sentence summary slide that closes each subtopic uses 28pt body type so the line is screenshot-friendly for the listener's own briefings.

### 4.3 No individuals on screen

Per the Guide §3 Note, no individuals appear in any video. Two options are open: an AI-avatar narrator generated by ITU's production pipeline, or computer-screen-only voice-over with no narrator visible. The choice is ITU's; the scripts are agnostic to it. No human narrator is shown in any video.

### 4.4 Voice and tone

Direct address ('your country', 'your agencies', 'your architects'). Plain language at approximately an eighth-grade English level, held even though the Architect audience is more technical. Examples are drawn from African public-sector reality — the duplicate registry found at assessment, the orphan system no one owns, the citizen filling the same form at five counters. Technical terms — OpenAPI, OAuth, mTLS, X-Road service description, bronze/silver/gold — are introduced in plain words on first use, because the Architect needs them to work; headlines stay capability-led, never concept-led. Honest framing throughout: interoperability is a sustained build, not a procurement.

### 4.5 External-link list and 'Find the link in the description'

Every subtopic includes an external-link list in its metadata, and every script references external materials with the convention 'Find the link in the description' rather than reading URLs aloud. ITU's production pipeline compiles the per-video list into the YouTube description. The aggregate list across the eight subtopics is in Section 6.

### 4.6 GitBook companion and the build pack

Each subtopic ships with the video script, slide specification, AI usage tip and metadata. The GitBook companion content — written, in-depth implementation guidance — is produced as a parallel deliverable mirroring the same subtopic numbering. For KP2, the GitBook companion links each subtopic to the runnable build pack (KP2-GIF/KP2-build-pack): the technical-layer configuration produced in Topic 4 — the semantic map, the OpenAPI service contracts and the X-Road service descriptions — is generated by the gif-semantic-map and gif-openapi-gen plays (instances of bb-config-gen) and is what the Topic-5 once-only demonstration actually runs on.

## 5. Open calibration items

The v0.1 drafting raised the editorial and structural decisions below. These are forwarded for ITU's discussion at the Tuesday weekly call.

### 5.1 Standards and schema claims to verify

The technical and semantic standards named in this topic must be confirmed against their published specifications — version and currency — before final lock: the technical standards (REST / OpenAPI 3.x, OAuth 2.x / OIDC, mTLS, the X-Road message protocol) in 4.3 and 4.5; the semantic standards (ISO/IEC 11179, JSON-LD, W3C Verifiable Credentials) and the education vocabularies (OneRoster, CEDS) in 4.4; and the Giga assets (the school-master and qos schemas, GeoJSON, ISO 3166-1 alpha-3) plus the GovStack Information Mediation Building Block in 4.6 and 4.7. A standard cited at the wrong version is the kind of error a technical reviewer will catch.

### 5.2 Editorial tone calls

Sharp lines that deserve a deliberate keep / soften / cut decision: 'the semantic layer is the hardest layer, and the one most projects skip' (4.4); 'invented configuration reads convincingly and is worthless' (4.5); 'a working wire that carries the wrong meaning is still a failure' (4.4, echoing Topic 1).

### 5.3 The register shift (first Architect-facing topic)

Topic 4 is where KP2 moves from the Strategist to the Architect. Confirm with ITU that the depth of technical detail — OpenAPI, OAuth/OIDC, mTLS, X-Road service descriptions, bronze/silver/gold — is right for the audience: the videos hold eighth-grade English and capability-led headlines and introduce each term in plain words, but the body necessarily carries more technical vocabulary than the Strategist topics. The recommendation is that the deeper, fully-worked technical examples (complete OpenAPI documents, real X-Road configs) live in the GitBook companion and the build pack, not in the ~5-minute videos.

### 5.4 The [confirm] discipline and the demonstration handoff

The gif-semantic-map and gif-openapi-gen plays (instances of bb-config-gen) generate configuration with a [confirm] placeholder for every X-Road member/subsystem identifier, every code-list value and every endpoint, until it is confirmed against the published spec or the live registry — an invented identifier silently breaks routing. The technical config produced here is the direct input to the Topic-5 demonstration, so the semantic map and the service contracts must match the Use-Case-Catalogue exchange the demonstration runs (PNEA pre-filling identity from PNIA and enrolment from PLR). The Progressa membership (the four-server canon) and the schedule / Linkup cloud-access items carried from earlier topics still apply; see the KP2 Plan §7 and the KP2–4 Delivery Plan §6.

## 6. Annex — aggregate external-link list

Compiled across the eight subtopics for ITU's video production pipeline. To be split per subtopic and inserted into the corresponding YouTube descriptions.

| Subtopic | Sources referenced |
| --- | --- |
| 4.1 | EU EIF / NIIS X-Road reference architecture (four functional layers); PAERA v1.0 §3.4.3 (interoperability framing). |
| 4.2 | EU EIF / NIIS X-Road trust model (three zones); mTLS; the X-Road message protocol. |
| 4.3 | Technical standards — REST / OpenAPI 3.x, OAuth 2.x / OIDC, mTLS, X-Road; semantic standards — ISO/IEC 11179, JSON-LD, W3C Verifiable Credentials; EU EIF. |
| 4.4 | ISO/IEC 11179; JSON-LD; W3C Verifiable Credentials; education vocabularies — OneRoster (1EdTech), CEDS; EU EIF semantic layer. |
| 4.5 | OpenAPI 3.x specification; OAuth 2.x / OIDC; NIIS X-Road service description; EU EIF. |
| 4.6 | Giga open APIs and schemas (school-master, qos); GeoJSON; ISO 3166-1 alpha-3; bronze/silver/gold MDM (Giga School Master Data architecture). |
| 4.7 | NIIS X-Road service description / Information Mediator (niis.org); GovStack Information Mediation Building Block (govstack.global); EU EIF. |
| 4.8 | ITU DPI Safeguards / data-protection guidance; bilateral Letters of Interest; the Topic-2 decree (legal basis); EU EIF legal layer. |

All references are publicly accessible and verifiable. The Tuesday review may add or refine items based on ITU's preferred citation style for the YouTube channel.

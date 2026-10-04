# KP2 Module 4 (EN) — YouTube upload metadata

Eight videos. Everything YouTube Studio asks for, copy-paste ready.
Upload in order, 4.1 first. Keep all eight **Unlisted** until the last one is up, then switch to Public.

**Before you start:** replace `<gitbook-url>` throughout with the GitBook companion URL, and
`[playlist link]` with the playlist URL once you have created it.

Same rule as Module 1: the videos link into the companion, so **merge the GitBook change request
first, upload second.**

---

## 1. Upload manifest

| Order | MP4 (upload this) | SRT (upload as subtitles) | Title | Duration |
|---|---|---|---|---|
| 1 | `video/KP2_M4_4.1_Video_v0.1.mp4` | `audio/KP2_M4_4.1_Audio_v0.1.srt` | The four-layer reference architecture for a government interoperability platform | 3:43 |
| 2 | `video/KP2_M4_4.2_Video_v0.6.mp4` | `audio/KP2_M4_4.2_Audio_v0.6.srt` | The three trust zones that tell you exactly how to secure a government data exchange | 3:56 |
| 3 | `video/KP2_M4_4.3_Video_v0.15.mp4` | `audio/KP2_M4_4.3_Audio_v0.15.srt` | The standards portfolio: the shared menu that makes government systems interoperable | 3:44 |
| 4 | `video/KP2_M4_4.4_Video_v0.1.mp4` | `audio/KP2_M4_4.4_Audio_v0.1.srt` | The semantic map: making two agencies mean the same thing before they exchange data | 4:10 |
| 5 | `video/KP2_M4_4.5_Video_v0.8.mp4` | `audio/KP2_M4_4.5_Audio_v0.8.srt` | From a service brief to an OpenAPI contract to a service on the bus — with AI | 3:21 |
| 6 | `video/KP2_M4_4.6_Video_v0.13.mp4` | `audio/KP2_M4_4.6_Audio_v0.13.srt` | Putting real school data on an interoperability bus — the Giga worked example | 4:54 |
| 7 | `video/KP2_M4_4.7_Video_v0.13.mp4` | `audio/KP2_M4_4.7_Audio_v0.13.srt` | Wiring a service onto an X-Road bus — the GovStack Information Mediation pattern | 3:31 |
| 8 | `video/KP2_M4_4.8_Video_v0.6.mp4` | `audio/KP2_M4_4.8_Audio_v0.6.srt` | Why a perfectly built data exchange still can't go live without this | 4:36 |

Total 31:55.

---

## 2. Settings identical for all eight

| Field | Value |
|---|---|
| Playlist | GIF Module 4 — Architecture and technical standards (Architect) |
| Audience | No, it's not made for kids |
| Show more → Language | English |
| Show more → Subtitle certification | None |
| Category | Education |
| Licence | Standard YouTube Licence |
| Visibility | Unlisted (→ Public when the module is complete) |
| Comments | On, hold potentially inappropriate for review |
| Recording date | *(leave blank)* |

Set **Language = English before uploading the SRT** — that is what attaches the caption track.
Do not use auto-captions; they mangle the acronyms (X-Road, mTLS, OIDC, CEDS, GeoJSON).

---

## 3. Playlist

**Title:** GIF Module 4 — Architecture and technical standards (Architect)

**Description:**

```text
Module 4 of Building a Government Interoperability Framework (GIF).

Eight short videos for the chief architect, integration lead or agency technical
lead building on the interoperability bus: the four functional layers and three
trust zones, the standards portfolio adopted rather than written, the semantic
map and the OpenAPI contract for a real exchange, Giga's school data taken
bronze-to-gold onto the bus, the X-Road wiring, and the data-protection envelope
that makes an exchange lawful.

Each video stands alone — start anywhere. Each ends with a play you can run on
your own country's material.

Written companion, with the worked examples and the full prompts:
https://<gitbook-url>/kp2/module-4

The plays run in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

---

## 4. Per-video details

### 4.1 — Place every component — the four functional layers

**File:** `video/KP2_M4_4.1_Video_v0.1.mp4` · **Subtitles:** `audio/KP2_M4_4.1_Audio_v0.1.srt`

**Title:** The four-layer reference architecture for a government interoperability platform

**Description:**

```text
Don't draw a new interoperability platform — adopt a reference architecture.
Four functional layers give every component a place, and the layers that come
out sparse show you what you have not yet planned for.

GIF · Module 4 · 4.1 — Place every component — the four functional layers

Service Access, Event Distribution, Trust and Security, Governance and
Administration. What each layer does, why the layers work as a filing system for
decisions, and why a shared reference architecture is re-use seen from the
architect's chair. Plus the one layer countries drop by accident — event
distribution: defer it on purpose, never skip it.

Sources
· EU European Interoperability Framework (EIF) —
  https://interoperable-europe.ec.europa.eu/collection/nifo-national-interoperability-framework-observatory/european-interoperability-framework-detail
· NIIS X-Road reference architecture — the four functional layers —
  https://docs.x-road.global
· PAERA v1.0 §3.4.3 (Interoperability framing) — https://paera.govstack.global

The play from this video — map your platform components to the four functional
layers and list the gaps, with a worked example:
https://<gitbook-url>/kp2/module-4/4-1
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `reference architecture, interoperability architecture, functional layers, X-Road, EIF, GovStack, digital government, solution architecture`

---

### 4.2 — Secure every call — the three trust zones

**File:** `video/KP2_M4_4.2_Video_v0.6.mp4` · **Subtitles:** `audio/KP2_M4_4.2_Audio_v0.6.srt`

**Title:** The three trust zones that tell you exactly how to secure a government data exchange

**Description:**

```text
Security on an interoperability bus is not one wall around everything. It is
zones — and knowing which zones a call crosses tells you exactly what security
it needs.

GIF · Module 4 · 4.2 — Secure every call — the three trust zones

Public, Member-Internal, Trust-Anchor. How the security falls out of the zones:
mutual TLS between security servers, a signed and logged message, certificates
the Trust-Anchor can revoke — and the timestamped, signed log that is the
evidence base of the legal layer. Why the security server at each member's edge
carries the trust burden, and how to trace any exchange across the zones so its
security is specified, not guessed.

Sources
· EU European Interoperability Framework (EIF) —
  https://interoperable-europe.ec.europa.eu/collection/nifo-national-interoperability-framework-observatory/european-interoperability-framework-detail
· NIIS X-Road trust model and message protocol — https://docs.x-road.global
· Mutual TLS (mTLS)
· RFC 3161 — time-stamping

The play from this video — trace an exchange across the trust zones and name
its security, with a worked example: https://<gitbook-url>/kp2/module-4/4-2
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `trust model, mTLS, X-Road security, certificates, security server, interoperability security, EIF, GovStack, digital government`

---

### 4.3 — Adopt the standards portfolio

**File:** `video/KP2_M4_4.3_Video_v0.15.mp4` · **Subtitles:** `audio/KP2_M4_4.3_Audio_v0.15.srt`

**Title:** The standards portfolio: the shared menu that makes government systems interoperable

**Description:**

```text
The fastest way to break interoperability is to let each agency choose its own
standards. Adopt the published ones instead — the portfolio is the menu every
member shares.

GIF · Module 4 · 4.3 — Adopt the standards portfolio

Four technical needs, four published standards: REST with OpenAPI 3.x, OAuth 2.x
and OpenID Connect, mutual TLS, the X-Road message protocol. Alongside them, the
semantic standards for meaning: ISO/IEC 11179, JSON-LD, W3C Verifiable
Credentials. Your deliverable is the portfolio document — standard, version and
thin local profile for each need, with a binding date, a transition period and
a conformance test. A standard with no binding date and no test is advice, not
a standard.

Sources
· REST / OpenAPI 3.x — https://spec.openapis.org/oas/latest.html
· OAuth 2.x / OpenID Connect — https://oauth.net/2/
· mTLS — https://datatracker.ietf.org/doc/html/rfc8446
· NIIS X-Road — https://docs.x-road.global
· ISO/IEC 11179 — https://www.iso.org/standard/78914.html
· JSON-LD — https://json-ld.org
· W3C Verifiable Credentials — https://www.w3.org/TR/vc-data-model/
· EU European Interoperability Framework (EIF) —
  https://interoperable-europe.ec.europa.eu/collection/nifo-national-interoperability-framework-observatory/european-interoperability-framework-detail

The play from this video — assemble your standards portfolio from the published
menu, with a worked example: https://<gitbook-url>/kp2/module-4/4-3
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `standards portfolio, OpenAPI, OAuth, mTLS, X-Road, interoperability standards, ISO 11179, verifiable credentials, EIF, GovStack`

---

### 4.4 — Generate the semantic map

**File:** `video/KP2_M4_4.4_Video_v0.1.mp4` · **Subtitles:** `audio/KP2_M4_4.4_Audio_v0.1.srt`

**Title:** The semantic map: making two agencies mean the same thing before they exchange data

**Description:**

```text
A working wire that carries data the receiver misreads is still a failure — and
a worse one, because it looks like success. Make two agencies mean the same
'learner' before they exchange one.

GIF · Module 4 · 4.4 — Generate the semantic map

Meaning is the hardest interoperability layer and the one projects skip. A
semantic map sets out five things for one exchange: the entities, their fields,
the code lists, the identifier that links the same learner across agencies, and
the mapping onto published vocabularies like OneRoster and CEDS. It is the shared
language between the data owners and the architects. Generate the draft fast
with AI; confirm every identifier and code value against the real registries.

Sources
· ISO/IEC 11179 — https://www.iso.org/standard/78914.html
· JSON-LD — https://json-ld.org
· W3C Verifiable Credentials — https://www.w3.org/TR/vc-data-model/
· OneRoster (1EdTech) — https://www.1edtech.org/standards/oneroster
· CEDS — https://ceds.ed.gov
· EU European Interoperability Framework — semantic layer —
  https://interoperable-europe.ec.europa.eu/collection/nifo-national-interoperability-framework-observatory/european-interoperability-framework-detail

The play from this video — generate a semantic map for an exchange, with a
worked example: https://<gitbook-url>/kp2/module-4/4-4
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `semantic interoperability, semantic map, data mapping, OneRoster, CEDS, ISO 11179, identifiers, code lists, EIF, GovStack, AI`

---

### 4.5 — Generate a service contract

**File:** `video/KP2_M4_4.5_Video_v0.8.mp4` · **Subtitles:** `audio/KP2_M4_4.5_Audio_v0.8.srt`

**Title:** From a service brief to an OpenAPI contract to a service on the bus — with AI

**Description:**

```text
To put a service on the bus you need a contract. Turn a service brief into an
OpenAPI contract, then an X-Road service description — the configuration that
puts a service on the bus.

GIF · Module 4 · 4.5 — Generate a service contract

An OpenAPI 3.x contract specifies the operations, inputs, outputs, errors and
security of one service; its outputs come straight from the semantic map.
Generate it with AI from the service brief, confirm every endpoint, field and
type against what the provider actually exposes, then derive the X-Road service
description — one contract, two forms. Executable configuration, not a diagram.

Sources
· OpenAPI 3.x specification — https://spec.openapis.org/oas/latest.html
· OAuth 2.x / OpenID Connect — https://oauth.net/2/
· NIIS X-Road service description — https://docs.x-road.global
· EU European Interoperability Framework (EIF) —
  https://interoperable-europe.ec.europa.eu/collection/nifo-national-interoperability-framework-observatory/european-interoperability-framework-detail

The play from this video — generate an OpenAPI service contract, with a worked
example: https://<gitbook-url>/kp2/module-4/4-5
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `OpenAPI, service contract, API design, X-Road service description, OAuth, interoperability, GovStack, AI, digital government`

---

### 4.6 — Put a real data source on the bus — the Giga case

**File:** `video/KP2_M4_4.6_Video_v0.13.mp4` · **Subtitles:** `audio/KP2_M4_4.6_Audio_v0.13.srt`

**Title:** Putting real school data on an interoperability bus — the Giga worked example

**Description:**

```text
Enough method — here is a real source to copy. Take Giga's real school data
through a bronze/silver/gold pipeline onto the bus: a worked exchange you can
copy for your sector.

GIF · Module 4 · 4.6 — Put a real data source on the bus — the Giga case

Giga, the ITU and UNICEF initiative that maps the world's schools and their
connectivity, publishes open APIs, a school-master schema, a qos schema,
GeoJSON locations and ISO country codes. The data lands as bronze, is cleaned
and conformed as silver, and is published as gold — then given an OpenAPI
contract, registered as an X-Road service description, secured across the trust
zones and made lawful. Every step of the module on one real dataset. Practise
on Giga before you touch a live national registry.

Sources
· Giga — open APIs; school-master and qos schemas — https://giga.global
· GeoJSON — https://geojson.org
· ISO 3166-1 alpha-3 — https://www.iso.org/iso-3166-country-codes.html
· Bronze / silver / gold — Giga School Master Data architecture

The play from this video — map a real sector data source through
bronze/silver/gold onto the bus, with a worked example:
https://<gitbook-url>/kp2/module-4/4-6
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `Giga, school data, bronze silver gold, MDM, data pipeline, GeoJSON, interoperability, X-Road, GovStack, digital government`

---

### 4.7 — Wire a service onto the bus

**File:** `video/KP2_M4_4.7_Video_v0.13.mp4` · **Subtitles:** `audio/KP2_M4_4.7_Audio_v0.13.srt`

**Title:** Wiring a service onto an X-Road bus — the GovStack Information Mediation pattern

**Description:**

```text
You have the meaning, the contract and the data. Wiring makes them callable: the
OpenAPI contract becomes an X-Road service description, and the call resolves.

GIF · Module 4 · 4.7 — Wire a service onto the bus

'Wired' means three concrete things: the service description is registered on
the provider's security server, a consumer can discover it, and a call routes
across the bus and back. Three configuration artefacts make it real — the
subsystem, the service description and the access-control list. Align to the
GovStack Information Mediation building block so a compliant implementation can
drop into the role. The acceptance is one test call that resolves.

Sources
· NIIS X-Road service description / Information Mediator —
  https://docs.x-road.global
· GovStack Information Mediation Building Block —
  https://govstack.gitbook.io/bb-information-mediation
· EU European Interoperability Framework (EIF) —
  https://interoperable-europe.ec.europa.eu/collection/nifo-national-interoperability-framework-observatory/european-interoperability-framework-detail

The play from this video — generate the X-Road service description and wiring
checklist, with a worked example: https://<gitbook-url>/kp2/module-4/4-7
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `X-Road, service description, Information Mediation, GovStack, access control, subsystem, interoperability wiring, EIF, digital government`

---

### 4.8 — Make the exchange lawful — the data-protection envelope

**File:** `video/KP2_M4_4.8_Video_v0.6.mp4` · **Subtitles:** `audio/KP2_M4_4.8_Audio_v0.6.srt`

**Title:** Why a perfectly built data exchange still can't go live without this

**Description:**

```text
A service can be perfectly wired and perfectly secured and still must not be
switched on — technical capability is not lawful authority. Letters of Interest
plus a data-protection envelope make an exchange lawful as well as possible.

GIF · Module 4 · 4.8 — Make the exchange lawful — the data-protection envelope

Three parts: a lawful basis from the interoperability decree, a bilateral Letter
of Interest between the two agencies, and data protection by design —
minimisation in the contract, an access-control list matched to the purpose,
retention and logging configured rather than promised. An exchange is ready only
when the legal, organisational and technical layers line up. And the quiet rule:
joining the bus never, by itself, grants access to anything.

Sources
· ITU DPI Safeguards — data-protection guidance — https://www.dpi-safeguards.org
· Bilateral Letters of Interest — https://<gitbook-url>/kp2/module-4/4-8
· The interoperability decree — Module 2 of this course (the lawful basis) —
  https://<gitbook-url>/kp2/module-2
· EU European Interoperability Framework — legal layer —
  https://interoperable-europe.ec.europa.eu/collection/nifo-national-interoperability-framework-observatory/european-interoperability-framework-detail

The play from this video — draft the data-protection envelope for an exchange,
with a worked example: https://<gitbook-url>/kp2/module-4/4-8
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `data protection, data protection by design, lawful basis, Letter of Interest, minimisation, interoperability, decree, ITU DPI safeguards, digital government`

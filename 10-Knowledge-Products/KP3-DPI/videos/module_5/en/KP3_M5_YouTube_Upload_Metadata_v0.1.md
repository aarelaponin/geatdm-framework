# Education DPI Roadmap Module 5 (EN) — YouTube upload metadata

Six videos. Everything YouTube Studio asks for, copy-paste ready.
Upload in order, 5.1 first. Keep all six **Unlisted** until the last one is up, then switch to Public.

**Before you start:** replace `<gitbook-url>` throughout with the GitBook companion URL, and
`[playlist link]` with the playlist URL once you have created it.

Same rule as the other modules: the videos link into the companion, so **merge the GitBook change
request first, upload second.**

---

## 1. Upload manifest

| Order | MP4 (upload this) | SRT (upload as subtitles) | Title | Duration |
|---|---|---|---|---|
| 1 | `video/KP3_M5_5.1_Video_v0.3.mp4` | `audio/KP3_M5_5.1_Audio_v0.3.srt` | Before government systems can talk: members, registered contracts and access grants | 4:01 |
| 2 | `video/KP3_M5_5.2_Video_v0.7.mp4` | `audio/KP3_M5_5.2_Audio_v0.7.srt` | The data exchange layer does not run your service: who holds the sequence of calls | 4:04 |
| 3 | `video/KP3_M5_5.3_Video_v0.12.mp4` | `audio/KP3_M5_5.3_Audio_v0.12.srt` | Register a learner once: sign in, pre-fill, approve and write, across four building blocks | 4:15 |
| 4 | `video/KP3_M5_5.4_Video_v0.6.mp4` | `audio/KP3_M5_5.4_Audio_v0.6.srt` | GovStack compliance is about the product: how to prove a building block with acceptance checks | 5:14 |
| 5 | `video/KP3_M5_5.5_Video_v0.6.mp4` | `audio/KP3_M5_5.5_Audio_v0.6.srt` | Can you prove the call happened? Message log, monitoring and traffic view on X-Road | 5:27 |
| 6 | `video/KP3_M5_5.6_Video_v0.8.mp4` | `audio/KP3_M5_5.6_Audio_v0.8.srt` | Build once, use many times: what a proven DPI foundation offers the next education service | 5:25 |

Total 28:26.

---

## 2. Settings identical for all six

| Field | Value |
|---|---|
| Playlist | Education DPI Roadmap Module 5 — Join the blocks and prove the foundation (Architect) |
| Audience | No, it's not made for kids |
| Show more → Language | English |
| Show more → Subtitle certification | None |
| Category | Education |
| Licence | Standard YouTube Licence |
| Visibility | Unlisted (→ Public when the module is complete) |
| Comments | On, hold potentially inappropriate for review |
| Recording date | *(leave blank)* |

Set **Language = English before uploading the SRT** — that is what attaches the caption track.
Do not use auto-captions; they mangle the acronyms (PNIA, PLR, PNEA, PDGA, MoEYS, X-Road).

---

## 3. Playlist

**Title:** Education DPI Roadmap Module 5 — Join the blocks and prove the foundation (Architect)

**Description:**

```text
Module 5 of the Education Digital Public Infrastructure (DPI) Roadmap.

Six short videos for the architect who joins the blocks and proves them: what
must be in place on the data exchange layer before one block can call another,
which block holds the sequence, the once-only registration of a learner from
beginning to end, the acceptance checks that turn "set up" into "proven", the
evidence a call leaves behind, and what the next services can now use.

Each video stands alone — start anywhere. Each ends with an AI usage tip you can
run on your own country's material.

Written companion, with the worked examples and the full prompts:
https://<gitbook-url>/kp3/module-5

The tips run in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

---

## 4. Per-video details

### 5.1 — What must be in place before the blocks can call each other

**File:** `video/KP3_M5_5.1_Video_v0.3.mp4` · **Subtitles:** `audio/KP3_M5_5.1_Audio_v0.3.srt`

**Title:** Before government systems can talk: members, registered contracts and access grants

**Description:**

```text
Before one block can call another across ministries, each must be a member of
the data exchange layer, each service registered with its contract, and access
granted to the caller.

Education DPI Roadmap · Module 5 · 5.1 — What must be in place before the blocks can call each other

A registration service cannot reuse identity or a learner register just because
a minister was told it would. Three things come first, and each has an owner:
membership, admitted by the operator; a service published with its contract, an
OpenAPI description; and a grant from the owner of the service. Then Progressa's
members today, what the build adds — a member for the registration service, a
write service on the learner register, the grants, the Payments block — and the
check: the same call answered with a grant and refused without one. Being on the
exchange is not permission.

Progressa is a demonstration country, fictional on purpose.

Sources
· GovStack Information Mediator 1.1.1 — https://specs.govstack.global/information-mediator
· NIIS X-Road 7.7.0, Architecture (ARC-G) and Security Server User Guide (UG-SS) —
  https://github.com/nordic-institute/X-Road/tree/7.7.0/doc
· GovStack Payments 3.0 — https://specs.govstack.global/payments
· OpenAPI Specification 3.0.3 — https://spec.openapis.org/oas/v3.0.3.html

The AI usage tip from this video — check that every planned call has its member,
service and grant, with a worked example: https://<gitbook-url>/kp3/module-5/5-1
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `data exchange, Information Mediator, X-Road, GovStack, access rights, OpenAPI, education DPI, Progressa`

---

### 5.2 — Who puts the steps in order: contracts, and the block that calls them

**File:** `video/KP3_M5_5.2_Video_v0.7.mp4` · **Subtitles:** `audio/KP3_M5_5.2_Audio_v0.7.srt`

**Title:** The data exchange layer does not run your service: who holds the sequence of calls

**Description:**

```text
The data exchange layer carries each call and enforces who may make it, but the
registration service puts the steps in order. Know which block holds the
sequence before you approve an integration plan.

Education DPI Roadmap · Module 5 · 5.2 — Who puts the steps in order: contracts, and the block that calls them

A vendor's plan says the exchange will run the registration from start to
finish. The published specifications say otherwise: the exchange carries each
call, checks the grant, and signs and logs the message — defining the steps of a
transaction and mapping identity fields into a record are out of its scope. The
registration service holds the sequence, as configured actions that fire on an
event and call other blocks' published contracts. Why still go through one
exchange? Because the alternative is a web of point-to-point links. Then
Progressa's learner registration drawn as one sequence of calls.

Sources
· GovStack Information Mediator 1.1.1 — https://specs.govstack.global/information-mediator
· GovStack Registration — https://specs.govstack.global/registration
· GovStack Digital Registries 3.0-alpha — https://specs.govstack.global/registries
· GovStack Architecture 2.1.0, section 4.3 — https://specs.govstack.global/architecture/
· NIIS X-Road 7.7.0, Architecture (ARC-G) —
  https://github.com/nordic-institute/X-Road/tree/7.7.0/doc
· OpenAPI Specification 3.0.3 — https://spec.openapis.org/oas/v3.0.3.html

The AI usage tip from this video — write the sequence of a service as a numbered
list of calls, with a worked example: https://<gitbook-url>/kp3/module-5/5-2
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `Information Mediator, X-Road, GovStack Registration, service sequence, integration plan, point-to-point, education DPI, Progressa`

---

### 5.3 — The once-only registration, from beginning to end

**File:** `video/KP3_M5_5.3_Video_v0.12.mp4` · **Subtitles:** `audio/KP3_M5_5.3_Audio_v0.12.srt`

**Title:** Register a learner once: sign in, pre-fill, approve and write, across four building blocks

**Description:**

```text
A learner signs in, the form fills with the facts the learner agrees to release,
the registrar approves and the record is in the register: one run that proves
four blocks work as one foundation.

Education DPI Roadmap · Module 5 · 5.3 — The once-only registration, from beginning to end

Once-only means the state asks once and reuses what it already holds. The run:
the learner signs in on the identity authority's own page and approves the
release of a name and date of birth; the form fills itself, and the parent types
only the school, the grade and a contact number; the learner submits once, the
checks run, the registrar approves; the record is written to the learner register
through the data exchange layer, and the register confirms it exists. One limit
said plainly: the published Identity block requires a server-to-server query of a
person's facts but publishes no interface for it.

Progressa is a demonstration country, fictional on purpose.

Sources
· PAERA v1.0 §5.2 (Principle #5, Once-Only) — https://paera.govstack.global/
· GovStack Registration — https://specs.govstack.global/registration
· GovStack Identity 2.0 — https://specs.govstack.global/identity
· GovStack Information Mediator 1.1.1 — https://specs.govstack.global/information-mediator
· GovStack Digital Registries 3.0-alpha — https://specs.govstack.global/registries

The AI usage tip from this video — write the acceptance script for the once-only
run, step by step with its pass conditions, with a worked example:
https://<gitbook-url>/kp3/module-5/5-3
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `once-only, learner registration, OpenID Connect, GovStack Identity, GovStack Registration, Digital Registries, data exchange, Progressa`

---

### 5.4 — The acceptance checks: from "set up" to "proven"

**File:** `video/KP3_M5_5.4_Video_v0.6.mp4` · **Subtitles:** `audio/KP3_M5_5.4_Audio_v0.6.srt`

**Title:** GovStack compliance is about the product: how to prove a building block with acceptance checks

**Description:**

```text
Every configuration has a check that someone can run and read, and a block is
called proven only when its checks have run and passed.

Education DPI Roadmap · Module 5 · 5.4 — The acceptance checks: from "set up" to "proven"

A vendor says the platform is GovStack compliant at Level 2. That describes the
product, not how your country set it up. GovStack's self-assessment and automated
interface tests measure a product's compliance; what proves your block is a check
for every configuration — what is run, what counts as a pass, and the result with
its date. Keep two words apart: a configuration that exists is set up; a block is
proven only when every check has run and passed. Then Progressa's sheet of checks
for the exchange, honestly marked "not yet run" before the first run.

Sources
· GovStack testing (requirements and API testing) —
  https://testing.govstack.global/en/requirements
· GovStack, "How is Compliance Measured?" —
  https://govstack.global/software/how-is-compliance-measured/
· GovStack Architecture 2.1.0, section 6.4 — https://specs.govstack.global/architecture/
· GovStack Information Mediator 1.1.1 — https://specs.govstack.global/information-mediator
· GovStack Identity 2.0 — https://specs.govstack.global/identity
· GovStack Digital Registries 3.0-alpha — https://specs.govstack.global/registries

The AI usage tip from this video — turn a failed check into a plain note for the
owner, with a worked example: https://<gitbook-url>/kp3/module-5/5-4
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `acceptance test, GovStack compliance, building block, OpenAPI, mock implementation, data exchange, education DPI, Progressa`

---

### 5.5 — Reading the evidence of a call

**File:** `video/KP3_M5_5.5_Video_v0.6.mp4` · **Subtitles:** `audio/KP3_M5_5.5_Audio_v0.6.srt`

**Title:** Can you prove the call happened? Message log, monitoring and traffic view on X-Road

**Description:**

```text
Three records can show that a call took place — the message log, operational
monitoring and the traffic view — but each only under settings you must choose
before the first call.

Education DPI Roadmap · Module 5 · 5.5 — Reading the evidence of a call

An auditor asks you to prove the registration service wrote a learner's record
on a given day. The message log keeps the whole message only under full logging;
metadata logging cannot be used as evidence. Operational monitoring keeps one
record per request — who, which service, when, whether it succeeded — never the
content, and each reader sees only what its role allows. The traffic view exists
only if the monitoring add-on is installed. Then Progressa's registration run
through three readers' eyes, and the three settings to choose before the first
call.

Sources
· NIIS X-Road 7.7.0, Security Server User Guide (UG-SS) —
  https://github.com/nordic-institute/X-Road/tree/7.7.0/doc
· NIIS X-Road 7.7.0, Operational Monitoring Protocol (PR-OPMON) —
  https://github.com/nordic-institute/X-Road/tree/7.7.0/doc
· GovStack Information Mediator 1.1.1 — https://specs.govstack.global/information-mediator

The AI usage tip from this video — report the calls of a period from the
monitoring records, with a worked example: https://<gitbook-url>/kp3/module-5/5-5
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `X-Road, message log, operational monitoring, audit evidence, Information Mediator, security server, education DPI, Progressa`

---

### 5.6 — What the next services can now use

**File:** `video/KP3_M5_5.6_Video_v0.8.mp4` · **Subtitles:** `audio/KP3_M5_5.6_Audio_v0.8.srt`

**Title:** Build once, use many times: what a proven DPI foundation offers the next education service

**Description:**

```text
Identity, the learner register and payments are now services with published
contracts that the next education services can use without building them again,
with consent and notification still to add.

Education DPI Roadmap · Module 5 · 5.6 — What the next services can now use

Another team wants to pay scholarships, and its first plan is its own learner
list and its own payment link. Instead: it confirms the learner by calling the
learner register, and pays through the Payments block — bulk payments from
government to people, or vouchers only schools can redeem. Inside one project,
building your own looks quicker; only whole-of-government planning sees the
saving. Two blocks are cited but not built: Consent, with its warning that
consent may be the wrong legal ground for a public authority, and Messaging.

Sources
· GovStack Information Mediator 1.1.1 — https://specs.govstack.global/information-mediator
· GovStack Payments 3.0 — https://specs.govstack.global/payments
· GovStack Consent 1.3.0 — https://consent.govstack.global/
· GovStack Messaging — https://specs.govstack.global/messaging

The AI usage tip from this video — draft the one-page note "what you may use" for
the next service team, with a worked example:
https://<gitbook-url>/kp3/module-5/5-6
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `reuse, DPI, GovStack Payments, Consent, Messaging, scholarship, data exchange, education DPI, Progressa`

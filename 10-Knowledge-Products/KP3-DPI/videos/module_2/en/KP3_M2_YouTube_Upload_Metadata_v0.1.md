# Education DPI Roadmap Module 2 (EN) — YouTube upload metadata

Six videos. Everything YouTube Studio asks for, copy-paste ready.
Upload in order, 2.1 first. Keep all six **Unlisted** until the last one is up, then switch to Public.

**Before you start:** replace `<gitbook-url>` throughout with the GitBook companion URL, and
`[playlist link]` with the playlist URL once you have created it.

Same rule as Module 1: the videos link into the companion, so **merge the GitBook change request
first, upload second.**

---

## 1. Upload manifest

| Order | MP4 (upload this) | SRT (upload as subtitles) | Title | Duration |
|---|---|---|---|---|
| 1 | `video/KP3_M2_2.1_Video_v0.4.mp4` | `audio/KP3_M2_2.1_Audio_v0.4.srt` | What a registration building block does — and why one block can serve every ministry | 5:44 |
| 2 | `video/KP3_M2_2.2_Video_v0.4.mp4` | `audio/KP3_M2_2.2_Audio_v0.4.srt` | Judging a registration product against the GovStack specification — evidence, not brochures | 3:45 |
| 3 | `video/KP3_M2_2.3_Video_v0.2.mp4` | `audio/KP3_M2_2.3_Audio_v0.2.srt` | From registration brief to service description: drafting a GovStack registration service with AI | 4:43 |
| 4 | `video/KP3_M2_2.4_Video_v0.3.mp4` | `audio/KP3_M2_2.4_Audio_v0.3.srt` | Three checks before the registrar decides: field rules, the identity record and completeness | 5:12 |
| 5 | `video/KP3_M2_2.5_Video_v0.8.mp4` | `audio/KP3_M2_2.5_Audio_v0.8.srt` | Approve, reject, send back: the registrar's decision and the write to the learner register | 4:40 |
| 6 | `video/KP3_M2_2.6_Video_v0.4.mp4` | `audio/KP3_M2_2.6_Audio_v0.4.srt` | Test, export, import: the registration service as a description a second ministry can start from | 3:23 |

Total 27:27.

---

## 2. Settings identical for all six

| Field | Value |
|---|---|
| Playlist | Education DPI Roadmap Module 2 — The Registration block (Architect) |
| Audience | No, it's not made for kids |
| Show more → Language | English |
| Show more → Subtitle certification | None |
| Category | Education |
| Licence | Standard YouTube Licence |
| Visibility | Unlisted (→ Public when the module is complete) |
| Comments | On, hold potentially inappropriate for review |
| Recording date | *(leave blank)* |

Set **Language = English before uploading the SRT** — that is what attaches the caption track.
Do not use auto-captions; they mangle the names and acronyms (GovStack, PNIA, PLR, Linkup).

---

## 3. Playlist

**Title:** Education DPI Roadmap Module 2 — The Registration block (Architect)

**Description:**

```text
Module 2 of the Education Digital Public Infrastructure (DPI) Roadmap.

Six short videos for the technical lead who sets up the service: what a
registration building block does, how to judge a product against the published
GovStack specification, how to draft the service from a description, the checks
that run before the officer decides, the decision and the write to the register,
and the whole service as a description a second ministry can start from.

Each video stands alone — start anywhere. Each ends with an AI usage tip you can
run on your own country's material.

Written companion, with the worked examples and the full prompts:
https://<gitbook-url>/kp3/module-2

GovStack Registration Building Block specification:
https://specs.govstack.global/registration

The tips run in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

---

## 4. Per-video details

### 2.1 — What the Registration block does

**File:** `video/KP3_M2_2.1_Video_v0.4.mp4` · **Subtitles:** `audio/KP3_M2_2.1_Audio_v0.4.srt`

**Title:** What a registration building block does — and why one block can serve every ministry

**Description:**

```text
Every ministry registers something: schools register learners, a business
registry registers companies, a population registry records births. A
registration block takes an application, lets an officer decide and, on
approval, writes to a register and gives the applicant proof.

Education DPI Roadmap · Module 2 · 2.1 — What the Registration block does

The GovStack definition of registration, and its two outcomes: a record is
written, and proof goes back to the applicant — a service that stops at
capturing a form has done neither. The block's three capabilities: online
registration by the applicant, processing by an operator who approves, rejects
or sends back, and a development platform where an analyst sets up rules,
screens and checks without code. Then why it is a shared block, not a school
system: digitising any state registry needs Registration and a Digital Registry,
so each ministry after the first sets up a new service on the same block.

Shown on Progressa's learner registration. Progressa is a demonstration
country, fictional on purpose.

Sources
· GovStack Registration Building Block specification, default edition,
  sections 2 and 4.1 to 4.4 — https://specs.govstack.global/registration
· PAERA v1.0, Annex 1, A1.2.5 (State Registries) — https://paera.govstack.global

The AI usage tip from this video — map your paper registration onto the
block's three capabilities, with a worked example:
https://<gitbook-url>/kp3/module-2/2-1
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `registration building block, GovStack, digital public infrastructure, education DPI, learner registration, state registry, re-use, digital government`

---

### 2.2 — The published specification, and how to judge a product against it

**File:** `video/KP3_M2_2.2_Video_v0.4.mp4` · **Subtitles:** `audio/KP3_M2_2.2_Audio_v0.4.srt`

**Title:** Judging a registration product against the GovStack specification — evidence, not brochures

**Description:**

```text
A vendor says the product is GovStack compliant. That sentence alone tells you
very little. Ask for the product shown against the published specification,
requirement by requirement, with evidence your own team can check.

Education DPI Roadmap · Module 2 · 2.2 — The published specification, and how to judge a product against it

Name the edition in your tender. The Registration specification holds 42
functional requirements in three groups — applicant, operator, analyst — 12
data structures and 13 published operations. For every requirement the vendor
answers met as delivered, met by configuration, or not met, with a screen, a
test record or a document as evidence. Then what GovStack itself offers: a
self-assessment form, automated interface tests, and a listing at Level 1 or
Level 2 with a link to the full report — a review of what the provider sent,
not a test of your installation.

Shown on a self-assessment sheet built for Progressa, a demonstration country,
fictional on purpose; it names no real product.

Sources
· GovStack Registration Building Block specification, default edition,
  sections 6.1 to 6.3, 7.2, 8.1 to 8.3 —
  https://specs.govstack.global/registration
· GovStack testing application, with the GovStack website pages 'How is
  Compliance Measured?' and 'How to Submit Software?' —
  https://testing.govstack.global/en/requirements
· GovStack Architecture specification, edition 2.1.0, section 5.5.4 —
  https://specs.govstack.global/architecture/

The AI usage tip from this video — turn the specification's requirements into
a vendor questionnaire, with a worked example:
https://<gitbook-url>/kp3/module-2/2-2
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `GovStack, registration building block, specification compliance, vendor evaluation, procurement, self-assessment, GovMarket, digital public infrastructure`

---

### 2.3 — Generating the registration service

**File:** `video/KP3_M2_2.3_Video_v0.2.mp4` · **Subtitles:** `audio/KP3_M2_2.3_Audio_v0.2.srt`

**Title:** From registration brief to service description: drafting a GovStack registration service with AI

**Description:**

```text
A learner registration lives in a law, a circular and a paper form. Describe it
in the specification's terms, and an AI assistant drafts the service description
that sets the block up — which you then import, test and correct.

Education DPI Roadmap · Module 2 · 2.3 — Generating the registration service

The specification's terms as a shared language: service, registration and the
entity in charge, subjects and determinants, result, requirements, screens and
fields. What the file is: the specification requires that a full service
description can be exported and imported, but publishes no operation to create
one and does not define the format — so the file names the product and its
format, and every assumption is marked for someone to confirm. Then import into
a test installation, check the screens come back in order, and send one test
application down each path.

Shown on Progressa's learner registration. Progressa is a demonstration
country, fictional on purpose.

Sources
· GovStack Registration Building Block specification, default edition,
  sections 6.3.1.1, 6.3.1.3 to 6.3.1.6, 6.3.1.8, 6.3.1.10, 6.3.2.1, 6.3.2.2,
  6.3.2.10 and 8.3 — https://specs.govstack.global/registration

The AI usage tip from this video — draft the service description from your
registration brief, with a worked example:
https://<gitbook-url>/kp3/module-2/2-3
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `registration building block, GovStack, service description, AI generation, no-code, configuration, learner registration, education DPI`

---

### 2.4 — Checks before the officer decides

**File:** `video/KP3_M2_2.4_Video_v0.3.mp4` · **Subtitles:** `audio/KP3_M2_2.4_Audio_v0.3.srt`

**Title:** Three checks before the registrar decides: field rules, the identity record and completeness

**Description:**

```text
A registrar's time is the scarcest thing in a registration office. Three kinds
of check stop a bad application before it reaches the officer's desk.

Education DPI Roadmap · Module 2 · 2.4 — Checks before the officer decides

One: rules on each field, set by the analyst without code — required fields,
ranges, patterns, dates, a minimum age, file size and type. Two: a comparison
with the identity authority's record, made through sign-in while the person is
present; the service keeps the identifier made for it, never the national
number. Where a check from server to server is required but no interface for it
is published, say so plainly. Three: a completeness test on sending — every
required field and document, or no sending, with a message the applicant can
understand.

Shown on three failing applications in Progressa, a demonstration country,
fictional on purpose.

Sources
· GovStack Registration Building Block specification, default edition,
  sections 6.3.2.7, 6.3.3.1 to 6.3.3.3 —
  https://specs.govstack.global/registration
· GovStack Identity Building Block specification, Version 2.0, sections 6.2,
  7.2.1, 8 and 9.1.1 — https://specs.govstack.global/identity

The AI usage tip from this video — derive the validation rules and the test
applications, with a worked example:
https://<gitbook-url>/kp3/module-2/2-4
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `registration building block, validation, data quality, identity verification, OpenID Connect, GovStack, learner registration, education DPI`

---

### 2.5 — The officer decides, and the record is written

**File:** `video/KP3_M2_2.5_Video_v0.8.mp4` · **Subtitles:** `audio/KP3_M2_2.5_Audio_v0.8.srt`

**Title:** Approve, reject, send back: the registrar's decision and the write to the learner register

**Description:**

```text
Software can check an application. It cannot take responsibility for it. A
named officer decides, and the register is written only after that decision —
a record written before a decision is a record nobody answers for.

Education DPI Roadmap · Module 2 · 2.5 — The officer decides, and the record is written

The three decisions — approve, reject, send back with the wrong field marked —
and the processing chain of roles, each with a list and a decision screen, and
a route for every status. Then the write: on approval, an action sends the
record to the register through the data exchange layer, and the register
accepts it through its create-or-update operation. Neither specification
publishes the order of calls between the two blocks, so joining them is your
team's own work: write it down as an agreement between the two owners, and test
both an approval that writes and a refusal that leaves the file waiting.

Shown on Progressa's learner register. Progressa is a demonstration country,
fictional on purpose.

Sources
· GovStack Registration Building Block specification, default edition,
  sections 4.2, 5.1.4, 6.2.3, 6.3.2.3, 6.3.2.4, 6.3.2.7, 8.2 and 9.2.2 —
  https://specs.govstack.global/registration
· GovStack Digital Registries Building Block specification, Version 3.0-alpha,
  DRS-33 and section 8.1 — https://specs.govstack.global/registries

The AI usage tip from this video — map the form to the register and write the
test of the write, with a worked example:
https://<gitbook-url>/kp3/module-2/2-5
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `registration building block, digital registries, registrar decision, workflow, GovStack, learner register, data exchange, education DPI`

---

### 2.6 — The whole service as a description you can move

**File:** `video/KP3_M2_2.6_Video_v0.4.mp4` · **Subtitles:** `audio/KP3_M2_2.6_Audio_v0.4.srt`

**Title:** Test, export, import: the registration service as a description a second ministry can start from

**Description:**

```text
The second ministry that needs a registration service should not start from a
blank screen. Keep the whole service as a description you can test, publish,
export and import elsewhere, and the next ministry starts from yours.

Education DPI Roadmap · Module 2 · 2.6 — The whole service as a description you can move

Test at three depths before anyone uses it: each screen, the full service, and
the full service in a test installation. What the description holds — screens
and fields, the process flow, the service settings — and what does not travel.
Export and import are the product's own tools, so the file names its product
and format. Several registrations can share one service, asking for a common
document only once, and the block counts the applications it processes. The
check: export, import into a clean installation, and compare screen by screen.

Shown on Progressa's learner registration. Progressa is a demonstration
country, fictional on purpose.

Sources
· GovStack Registration Building Block specification, default edition,
  sections 6.3.1.2, 6.3.1.9, 6.3.2.9, 6.3.2.10 and 8.3 —
  https://specs.govstack.global/registration

The AI usage tip from this video — compare two exported descriptions of a
service, with a worked example:
https://<gitbook-url>/kp3/module-2/2-6
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `registration building block, service description, export and import, re-use, GovStack, testing, statistics, education DPI`

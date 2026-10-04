# KP3 Module 3 (EN) — YouTube upload metadata

Seven videos. Everything YouTube Studio asks for, copy-paste ready.
Upload in order, 3.1 first. Keep all seven **Unlisted** until the last one is up, then switch to Public.

**Before you start:** replace `<gitbook-url>` throughout with the GitBook companion URL, and
`[playlist link]` with the playlist URL once you have created it.

Same rule as the earlier modules: the videos link into the companion, so **merge the GitBook change
request first, upload second.**

---

## 1. Upload manifest

| Order | MP4 (upload this) | SRT (upload as subtitles) | Title | Duration |
|---|---|---|---|---|
| 1 | `video/KP3_M3_3.1_Video_v0.14.mp4` | `audio/KP3_M3_3.1_Audio_v0.14.srt` | One record of every learner: what a learner register is for, and why it is a service | 4:06 |
| 2 | `video/KP3_M3_3.2_Video_v0.6.mp4` | `audio/KP3_M3_3.2_Audio_v0.6.srt` | Raw, bronze, staging, silver, gold: loading a learner register through five checked tiers | 5:12 |
| 3 | `video/KP3_M3_3.3_Video_v0.4.mp4` | `audio/KP3_M3_3.3_Audio_v0.4.srt` | One schema file sets up the register: drafting it with AI, deciding it as the owner | 4:31 |
| 4 | `video/KP3_M3_3.4_Video_v0.10.mp4` | `audio/KP3_M3_3.4_Audio_v0.10.srt` | Stop bad data at the door: quality checks that tell schools what to fix | 5:23 |
| 5 | `video/KP3_M3_3.5_Video_v0.5.mp4` | `audio/KP3_M3_3.5_Audio_v0.5.srt` | Follow a published pattern, not a vendor's: Giga's School Master Data for your learner register | 5:36 |
| 6 | `video/KP3_M3_3.6_Video_v0.11.mp4` | `audio/KP3_M3_3.6_Audio_v0.11.srt` | Did every learner reach the register? Two lines of arithmetic after every load | 5:10 |
| 7 | `video/KP3_M3_3.7_Video_v0.6.mp4` | `audio/KP3_M3_3.7_Audio_v0.6.srt` | Share the register, not copies of it: access by role, and who read my child's record | 5:52 |

Total 35:50.

---

## 2. Settings identical for all seven

| Field | Value |
|---|---|
| Playlist | Education DPI Roadmap Module 3 — The Registry block (Architect) |
| Audience | No, it's not made for kids |
| Show more → Language | English |
| Show more → Subtitle certification | None |
| Category | Education |
| Licence | Standard YouTube Licence |
| Visibility | Unlisted (→ Public when the module is complete) |
| Comments | On, hold potentially inappropriate for review |
| Recording date | *(leave blank)* |

Set **Language = English before uploading the SRT** — that is what attaches the caption track.
Do not use auto-captions; they mangle the names and acronyms (GovStack, Giga, PNIA, OpenAPI, Progressa).

---

## 3. Playlist

**Title:** Education DPI Roadmap Module 3 — The Registry block (Architect)

**Description:**

```text
Module 3 of the Education Digital Public Infrastructure (DPI) Roadmap.

Seven short videos for the team that sets up the learner register: what a
register is for, the five tiers a file passes through before it becomes a
trusted record, the schema file the register is set up from, the quality checks
that stop a bad row, a published pattern you may follow in the open, the two
lines that account for every load, and how other services use the register
under rules. Shown on Progressa, a fictional country.

Each video stands alone — start anywhere. Each ends with an AI usage tip you can
run on your own country's material.

Written companion, with the worked examples and the full prompts:
https://<gitbook-url>/kp3/module-3

GovStack Digital Registries specification: https://specs.govstack.global/registries

The tips run in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

---

## 4. Per-video details

### 3.1 — What a register is for: one authoritative record

**File:** `video/KP3_M3_3.1_Video_v0.14.mp4` · **Subtitles:** `audio/KP3_M3_3.1_Audio_v0.14.srt`

**Title:** One record of every learner: what a learner register is for, and why it is a service

**Description:**

```text
The schools keep one list of learners, the examination body another, a donor
project a third. Nobody knows which is right, and nobody can say how many
learners the country has.

Education DPI Roadmap · Module 3 · 3.1 — What a register is for: one authoritative record

A register is not a shared spreadsheet. It is a trusted, authoritative service:
a schema, versions, an interface other systems call, rules on who may read and
change, and a log of every change. Two building blocks share the work —
Registration, where a person applies and an officer decides, and the Digital
Registry, which keeps the record and serves it to others. Then Progressa, a
fictional country: its learner registry is already on the data exchange layer,
but has no basis in the education act, no link to national identity and no
quality rules. The fix starts with a disciplined load.

Sources
· GovStack Digital Registries specification, version 3.0-alpha (sections 2 and
  10.5.8, release notes) — https://specs.govstack.global/registries
· PAERA v1.0 (Annex 1 A1.2.5, Annex 3, §3.4.2) — https://paera.govstack.global/
· UNICEF Giga, giga-dagster, docs/README.md —
  https://github.com/unicef/giga-dagster/blob/46b72af67066363a29d3d933dcdc619489bd0be5/docs/README.md

The AI usage tip from this video — draft your register's one-page charter, with
a worked example: https://<gitbook-url>/kp3/module-3/3-1
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `learner register, digital registries, GovStack, single source of truth, education data, PAERA, state registries, digital public infrastructure`

---

### 3.2 — Five tiers between a messy file and a trusted record

**File:** `video/KP3_M3_3.2_Video_v0.6.mp4` · **Subtitles:** `audio/KP3_M3_3.2_Audio_v0.6.srt`

**Title:** Raw, bronze, staging, silver, gold: loading a learner register through five checked tiers

**Description:**

```text
Hundreds of schools send their learner lists — spreadsheets, PDFs, dates
written three different ways. Written straight into the register, they make one
more list nobody trusts.

Education DPI Roadmap · Module 3 · 3.2 — Five tiers between a messy file and a trusted record

UNICEF Giga publishes a flow of five tiers. Raw keeps the file exactly as it
arrived. Bronze maps the columns, runs the quality checks and splits rows into
passed and failed. At staging a person approves or rejects each passed row — no
program replaces that act. Silver merges the approved rows; gold splits them
into a master table and a reference table. Applying a flow built for schools to
learners is this course's own adaptation.

Sources
· UNICEF Giga, giga-dagster, docs/dataflow.md at commit 46b72af —
  https://github.com/unicef/giga-dagster/blob/46b72af67066363a29d3d933dcdc619489bd0be5/docs/dataflow.md
· Databricks, 'What is Medallion Architecture?' —
  https://www.databricks.com/blog/what-is-medallion-architecture
· GovStack Digital Registries specification, version 3.0-alpha (DRS-2,
  DRS-19) — https://specs.govstack.global/registries

The AI usage tip from this video — design the five tiers for a new source file,
with a worked example: https://<gitbook-url>/kp3/module-3/3-2
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `data quality, learner register, medallion architecture, Giga, data pipeline, digital registries, GovStack, education data`

---

### 3.3 — Generating the register's schema

**File:** `video/KP3_M3_3.3_Video_v0.4.mp4` · **Subtitles:** `audio/KP3_M3_3.3_Audio_v0.4.srt`

**Title:** One schema file sets up the register: drafting it with AI, deciding it as the owner

**Description:**

```text
A register is set up from one schema file: its fields, its rules, its links and
its key. An AI assistant can draft it from the law and the form. The owner
decides.

Education DPI Roadmap · Module 3 · 3.3 — Generating the register's schema

What the schema file holds: the register's name, short code, owner, retention,
classification and state; each field with its type and rules; the link from
each learner to a school; a new version at every publication; JSON or YAML to
export and import. Why the key is never the national identity number — the
register keeps a learner number of its own beside the identifier the identity
authority gives to the service. And how the work splits: the AI drafts from the
education act, the registration form and the services that will read the
register, tracing every rule to its line; the owner decides the key and the
personal-data fields, corrects the draft and publishes it.

Sources
· GovStack Digital Registries specification, version 3.0-alpha (DRS-1, DRS-2,
  DRS-3, DRS-4, DRS-10, DRS-11, DRS-13, DRS-14, DRS-17, DRS-28, DRS-30;
  section 8.2) — https://specs.govstack.global/registries
· GovStack Identity specification, version 2.0 (sections 4.1.1 and 4.1.2, and
  requirement 11 of section 6.1) — https://specs.govstack.global/identity

The AI usage tip from this video — draft your register's schema file, with a
worked example: https://<gitbook-url>/kp3/module-3/3-3
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `schema, learner register, digital registries, GovStack, data model, AI for government, identity, JSON YAML`

---

### 3.4 — Quality checks that stop a bad row

**File:** `video/KP3_M3_3.4_Video_v0.10.mp4` · **Subtitles:** `audio/KP3_M3_3.4_Audio_v0.10.srt`

**Title:** Stop bad data at the door: quality checks that tell schools what to fix

**Description:**

```text
A wrong row in a register spreads to every service that reads it. A row dropped
in silence is worse: the school thinks it went through, and the error stays.

Education DPI Roadmap · Module 3 · 3.4 — Quality checks that stop a bad row

Raw data is never checked; it lands. The checks run at the bronze tier, as in
Giga's published flow, which splits rows into a passed table and a failed one.
Three faulty rows from a school in Progressa, a fictional country: a duplicate
learner number, an empty date of birth, and a three-year-old in grade six. Each
is set aside with its reason, so the school knows what to correct. And why a
limit such as the age range for a grade is a policy choice for the register's
owner, not a guess by a programmer.

Sources
· UNICEF Giga, giga-dagster, docs/dataflow.md at commit 46b72af —
  https://github.com/unicef/giga-dagster/blob/46b72af67066363a29d3d933dcdc619489bd0be5/docs/dataflow.md
· GovStack Digital Registries specification, version 3.0-alpha (section 4.1;
  DRS-17) — https://specs.govstack.global/registries

The AI usage tip from this video — propose the checks and the messages a head
teacher reads when a row fails, with a worked example:
https://<gitbook-url>/kp3/module-3/3-4
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `data quality, validation, learner register, Giga, digital registries, GovStack, education data, schools`

---

### 3.5 — A published pattern, followed in the open

**File:** `video/KP3_M3_3.5_Video_v0.5.mp4` · **Subtitles:** `audio/KP3_M3_3.5_Audio_v0.5.srt`

**Title:** Follow a published pattern, not a vendor's: Giga's School Master Data for your learner register

**Description:**

```text
A vendor's "unique" data platform usually means one supplier, and a costly
change later. The more defensible choice is a published pattern, followed in
the open, with every choice written down.

Education DPI Roadmap · Module 3 · 3.5 — A published pattern, followed in the open

UNICEF Giga publishes how it builds one source of truth for schools: five
tiers, checks at bronze, a person's review at staging, and a gold tier split
into a master table and a reference table. A learner is not a school building,
but the pattern holds: swap the subject, keep the tiers, the checks, the review
and the split. You may follow it if you say what you took and what you changed
— and copy no code, because the repository publishes no licence.

Sources
· UNICEF Giga, giga-dagster, docs/dataflow.md and docs/README.md at commit
  46b72af —
  https://github.com/unicef/giga-dagster/blob/46b72af67066363a29d3d933dcdc619489bd0be5/docs/dataflow.md
· The repository's page, whose licence field is empty —
  https://github.com/unicef/giga-dagster
· Databricks, 'What is Medallion Architecture?' —
  https://www.databricks.com/blog/what-is-medallion-architecture

The AI usage tip from this video — read a repository's documentation and
licence before you follow it, with a worked example:
https://<gitbook-url>/kp3/module-3/3-5
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `Giga, School Master Data, open source licence, reuse, data pattern, learner register, medallion architecture, education data`

---

### 3.6 — Account for every load

**File:** `video/KP3_M3_3.6_Video_v0.11.mp4` · **Subtitles:** `audio/KP3_M3_3.6_Audio_v0.11.srt`

**Title:** Did every learner reach the register? Two lines of arithmetic after every load

**Description:**

```text
"Upload complete" does not tell you that every learner made it in. Two lines of
arithmetic do.

Education DPI Roadmap · Module 3 · 3.6 — Account for every load

Line one: the rows received equal the rows passed plus the rows set aside.
Line two: the rows approved equal the records the register added or changed.
If a line does not balance, records were lost or counted twice — and a learner
may go without a certificate or a benefit. The numbers come from the register's
own change log and counts, which the GovStack specification already requires,
so no new system is needed. The practice is this course's own, built on that
specification.

Sources
· GovStack Digital Registries specification, version 3.0-alpha (DRS-7, DRS-21,
  DRS-24, DRS-26; sections 8.1 and 8.2) — https://specs.govstack.global/registries

The AI usage tip from this video — write the reconciliation note of a load,
with a worked example: https://<gitbook-url>/kp3/module-3/3-6
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `reconciliation, data load, audit, learner register, digital registries, GovStack, data quality, education data`

---

### 3.7 — The register as a service others can use

**File:** `video/KP3_M3_3.7_Video_v0.6.mp4` · **Subtitles:** `audio/KP3_M3_3.7_Audio_v0.6.srt`

**Title:** Share the register, not copies of it: access by role, and who read my child's record

**Description:**

```text
Every office wants the learner register's data. Copies bring back a dozen lists,
each out of date. Calls through the published interface keep one.

Education DPI Roadmap · Module 3 · 3.7 — The register as a service others can use

Other services never reach the register directly. They call its published
services, described in OpenAPI, through the data exchange layer — in Progressa,
a fictional country, that layer is called Linkup. The register, as provider,
decides who may call which service, and each service sees no more than its role
allows. Every learner or parent can see who read their record.

Sources
· GovStack Digital Registries specification, version 3.0-alpha (sections 4.2,
  5.2, 8, 9.2.1; DRS-5, DRS-6, DRS-8, DRS-21, DRS-33, DRS-34, DRS-35, DRS-37) —
  https://specs.govstack.global/registries
· GovStack Information Mediator specification, version 1.1.1 (sections 6.2,
  6.3) — https://specs.govstack.global/information-mediator
· OpenAPI Specification 3.0.3 — https://spec.openapis.org/oas/v3.0.3.html

The AI usage tip from this video — draft the register's table of access rules,
field by field, with a worked example: https://<gitbook-url>/kp3/module-3/3-7
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `access control, personal data, learner register, digital registries, GovStack, Information Mediator, OpenAPI, data protection`

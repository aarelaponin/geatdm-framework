# KP1 Module 2 (EN) — YouTube upload metadata

Seven videos. Everything YouTube Studio asks for, copy-paste ready.
Upload in order, 2.1 first. Keep all seven **Unlisted** until the last one is up, then switch to Public.

**Before you start:** replace `<gitbook-url>` throughout with the GitBook companion URL, and
`[playlist link]` with the playlist URL once you have created it.

Same rule as Module 1: the videos link into the companion, so **merge the GitBook change request
first, upload second.**

---

## 1. Upload manifest

| Order | MP4 (upload this) | SRT (upload as subtitles) | Title | Duration |
|---|---|---|---|---|
| 1 | `video/KP1_M2_2.1_Video_v0.15.mp4` | `audio/KP1_M2_2.1_Audio_v0.15.srt` | How to read any government in four layers — the BDAT model explained | 5:08 |
| 2 | `video/KP1_M2_2.2_Video_v0.19.mp4` | `audio/KP1_M2_2.2_Audio_v0.19.srt` | Why two ministries can't share systems — and the shared vocabulary that fixes it | 5:04 |
| 3 | `video/KP1_M2_2.3_Video_v0.2.mp4` | `audio/KP1_M2_2.3_Audio_v0.2.srt` | Don't spend a year drafting architecture principles — adopt the ten that exist | 4:53 |
| 4 | `video/KP1_M2_2.4_Video_v0.10.mp4` | `audio/KP1_M2_2.4_Audio_v0.10.srt` | Classify a public body before you model it — the PAERA organisational taxonomy | 5:45 |
| 5 | `video/KP1_M2_2.5_Video_v0.11.mp4` | `audio/KP1_M2_2.5_Audio_v0.11.srt` | The four layers on a real ministry — a full BDAT walkthrough of an education sector | 4:22 |
| 6 | `video/KP1_M2_2.6_Video_v0.7.mp4` | `audio/KP1_M2_2.6_Audio_v0.7.srt` | How to run a Phase 2 Assess — the quality tests and the gaps you will always find | 4:56 |
| 7 | `video/KP1_M2_2.7_Video_v0.2.mp4` | `audio/KP1_M2_2.7_Audio_v0.2.srt` | The bespoke trap and the vendor trap — two ways governments lose their architecture | 5:40 |

Total 35:51.

---

## 2. Settings identical for all seven

| Field | Value |
|---|---|
| Playlist | KP1 Module 2 — EA principles, the metamodel and the BDAT layers (Architect) |
| Audience | No, it's not made for kids |
| Show more → Language | English |
| Show more → Subtitle certification | None |
| Category | Education |
| Licence | Standard YouTube Licence |
| Visibility | Unlisted (→ Public when the module is complete) |
| Comments | On, hold potentially inappropriate for review |
| Recording date | *(leave blank)* |

Set **Language = English before uploading the SRT** — that is what attaches the caption track.
Do not use auto-captions; they mangle "PAERA".

---

## 3. Playlist

**Title:** KP1 Module 2 — EA principles, the metamodel and the BDAT layers (Architect)

**Description:**

```text
Module 2 of Knowledge Product 1 — Government Enterprise Architecture.

Seven short videos for the architect who does the work: the four layers you read
any government in, the shared vocabulary that makes re-use possible, the ten
principles you adopt rather than draft, how to classify a public body before you
model it, and the two traps to catch while they are still a line in a project
plan.

Each video stands alone — start anywhere. Each ends with a play you can run on
your own country's material.

Written companion, with the worked examples and the full prompts:
https://<gitbook-url>/kp1/module-2

PAERA v1.0: https://paera.govstack.global

The plays run in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

---

## 4. Per-video details

### 2.1 — Read any government in four layers

**File:** `video/KP1_M2_2.1_Video_v0.15.mp4` · **Subtitles:** `audio/KP1_M2_2.1_Audio_v0.15.srt`

**Title:** How to read any government in four layers — the BDAT model explained

**Description:**

```text
Every government, in any sector, can be read in four layers. Learn the question
each one answers and the deliverable it produces, and you can decompose any
ministry put in front of you.

KP1 · Module 2 · 2.1 — Read any government in four layers

Business, Data, Application, Technology. For each layer: the question it answers,
the deliverable you produce, and the mistake that catches first-time architects —
copying the org chart instead of describing capabilities, listing databases
instead of data domains, inventorying software with no link to the business,
going too deep too early on technology. Then how the layers connect downward,
from a service a citizen receives to the infrastructure it all runs on.

Sources
· PAERA v1.0 Annex 2 (Metamodel) — https://paera.govstack.global
· PAERA v1.0 §2.3 (Role of Enterprise Architecture) — https://paera.govstack.global

The play from this video — generate a four-layer reading template for a ministry,
with a worked example: https://<gitbook-url>/kp1/module-2/2-1
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `BDAT, enterprise architecture, capability map, data domain, application portfolio, digital government, PAERA, GovStack`

---

### 2.2 — The shared vocabulary that makes re-use possible

**File:** `video/KP1_M2_2.2_Video_v0.19.mp4` · **Subtitles:** `audio/KP1_M2_2.2_Audio_v0.19.srt`

**Title:** Why two ministries can't share systems — and the shared vocabulary that fixes it

**Description:**

```text
One ministry calls a thing a service; the other calls the same thing a function.
You cannot compare them, connect them, or tell whether they are doing the same
work twice. A metamodel is the small shared dictionary that fixes it.

KP1 · Module 2 · 2.2 — The shared vocabulary that makes re-use possible

Capability, Service, Application, Data Domain, Technology Component — five
entities and the relationships between them, already defined in PAERA Annex 2.
Why the relationships matter as much as the entities, why re-use is a vocabulary
problem before it is a goodwill problem, and why you adopt the metamodel rather
than design one — extending it only where your country genuinely needs a new
entity.

Sources
· PAERA v1.0 Annex 2 (Metamodel — entities and relationships) —
  https://paera.govstack.global

The play from this video — check a draft architecture against the PAERA
metamodel, with a worked example: https://<gitbook-url>/kp1/module-2/2-2
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `metamodel, enterprise architecture, interoperability, re-use, data domain, capability, PAERA, GovStack`

---

### 2.3 — Adopt your principles, don't draft them

**File:** `video/KP1_M2_2.3_Video_v0.2.mp4` · **Subtitles:** `audio/KP1_M2_2.3_Audio_v0.2.srt`

**Title:** Don't spend a year drafting architecture principles — adopt the ten that exist

**Description:**

```text
Three months, forty drafts, no agreement. Half of them contradict each other.
There is a faster way: the principles already exist, already debated across many
countries.

KP1 · Module 2 · 2.3 — Adopt your principles, don't draft them

A principle is a short rule that settles a design argument before it starts — and
if it never changes a decision, it is not a principle. PAERA publishes ten. What
adopting them actually takes: inherit the ten as your baseline, tailor the wording
to your own laws and procurement rules so they have teeth, and add one only where
your context genuinely needs it. Then how to make a principle bite — statement,
reason, implication — so the EA Board can rule with it.

Sources
· PAERA v1.0 §5.2 (Principles) — https://paera.govstack.global
· PAERA v1.0 §3.3 (Digital Infrastructure principles) —
  https://paera.govstack.global

The play from this video — turn a PAERA principle into a country-tailored
principle card, with a worked example: https://<gitbook-url>/kp1/module-2/2-3
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `architecture principles, once-only, reuse before build, enterprise architecture, digital government, PAERA, GovStack`

---

### 2.4 — Classify any public body before you model it

**File:** `video/KP1_M2_2.4_Video_v0.10.mp4` · **Subtitles:** `audio/KP1_M2_2.4_Audio_v0.10.srt`

**Title:** Classify a public body before you model it — the PAERA organisational taxonomy

**Description:**

```text
The kind of body tells you in advance what it does, what data it owns, and how it
is governed. Classify first, and the interview confirms a profile instead of
starting from a blank page.

KP1 · Module 2 · 2.4 — Classify any public body before you model it

Three types cover most of government: the policy unit that owns the rules, the
regulatory agency that licenses and supervises, the service-delivery authority
that runs services at scale. Around them sit the foundations — state registries
that exist to be the one place the truth lives, and shared platforms for identity,
payments and data exchange. Each type comes with an expected profile, and the
mismatches are findings in themselves: a body that should be a neutral registry
behaving like something else.

Sources
· PAERA v1.0 §4.6 (Organisational taxonomy) — https://paera.govstack.global
· PAERA v1.0 Annex A1.2 (taxonomy detail) — https://paera.govstack.global

The play from this video — classify a public body and generate its expected
profile, with a worked example: https://<gitbook-url>/kp1/module-2/2-4
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `organisational taxonomy, public sector, regulatory agency, state registry, enterprise architecture, digital government, PAERA, GovStack`

---

### 2.5 — BDAT on a real ministry: the Progressa walkthrough

**File:** `video/KP1_M2_2.5_Video_v0.11.mp4` · **Subtitles:** `audio/KP1_M2_2.5_Audio_v0.11.srt`

**Title:** The four layers on a real ministry — a full BDAT walkthrough of an education sector

**Description:**

```text
The four layers and the shared entities, applied end to end to one education
sector — a ministry, an examination authority, a learner registry, an identity
authority. The abstract method becomes a picture you can reproduce.

KP1 · Module 2 · 2.5 — BDAT on a real ministry: the Progressa walkthrough

Classify the bodies first, because that is where the head start comes from. Then
the Business layer, where capabilities belong to bodies and services sit on top;
the Data layer, where each domain has one owner and one authoritative copy, and
once-only becomes concrete — others consume, they do not copy; and Application and
Technology, where every system points up to a capability and across to a data
domain.

Progressa is a demonstration country, fictional on purpose, with an education
system like many across the continent.

Sources
· PAERA v1.0 Annex 2 (Metamodel) — https://paera.govstack.global
· PAERA v1.0 §5.2 (Principles — once-only) — https://paera.govstack.global

The play from this video — draft a first-pass BDAT skeleton for a sector, with a
worked example: https://<gitbook-url>/kp1/module-2/2-5
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `BDAT, worked example, education sector, learner registry, once-only, enterprise architecture, PAERA, GovStack`

---

### 2.6 — Run a Phase 2 Assess

**File:** `video/KP1_M2_2.6_Video_v0.7.mp4` · **Subtitles:** `audio/KP1_M2_2.6_Audio_v0.7.srt`

**Title:** How to run a Phase 2 Assess — the quality tests and the gaps you will always find

**Description:**

```text
A current-state picture is judged by a few quality tests, not by its length. A
description that covers what matters beats a five-hundred-page audit no one reads.

KP1 · Module 2 · 2.6 — Run a Phase 2 Assess

Three tests apply to every layer — complete enough to decide, every element owned,
every claim traceable — and then each layer has its own. Four gaps show up in
almost every first assessment, so look for them on purpose: duplicate registries,
orphan systems, point-to-point integration, and unowned data. Then the part that
turns a list of gaps into an assessment: the priority order, judged on how much
each gap hurts and how hard it is to close. The sign-off has one quality test of
its own — honesty, including the politically uncomfortable gap.

Sources
· PAERA v1.0 §3.1.3 (Readiness Assessment) — https://paera.govstack.global
· PAERA v1.0 §5.4 (Organisational Assessment & Roadmap) —
  https://paera.govstack.global

The play from this video — turn AS-IS notes into a scored gap analysis, with a
worked example: https://<gitbook-url>/kp1/module-2/2-6
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `gap analysis, as-is assessment, maturity scorecard, enterprise architecture, digital government, PAERA, GovStack`

---

### 2.7 — The two traps to catch at Assess

**File:** `video/KP1_M2_2.7_Video_v0.2.mp4` · **Subtitles:** `audio/KP1_M2_2.7_Audio_v0.2.srt`

**Title:** The bespoke trap and the vendor trap — two ways governments lose their architecture

**Description:**

```text
Building your own is rational for a project and ruinous for a country. A vendor's
product should fit your architecture, not become it. Assess is where you catch
both, while they are still a line in a project plan.

KP1 · Module 2 · 2.7 — The two traps to catch at Assess

Trap one: reusing the national platform means learning it and accepting someone
else's timelines, so every project builds its own — and procurement rules cannot
catch it, which is exactly why this is architecture work. Trap two: a product
solves one problem, then processes bend to fit it, then data is stored the way it
wants, then other systems integrate to the product rather than to a standard.
Four questions catch both, asked while both are still cheap to change.

Sources
· PAERA v1.0 §1.3 (GovStack Vision) — https://paera.govstack.global
· PAERA v1.0 §3.3 (Digital Infrastructure principles) —
  https://paera.govstack.global
· PAERA v1.0 §5.2 (Principles) — https://paera.govstack.global
· PAERA v1.0 §5.6 (Sourcing Strategy — build / buy / share / sandbox) —
  https://paera.govstack.global

The play from this video — run a two-trap screen on a project proposal, with a
worked example: https://<gitbook-url>/kp1/module-2/2-7
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `vendor lock-in, build buy share, sourcing strategy, procurement, enterprise architecture, digital government, PAERA, GovStack`

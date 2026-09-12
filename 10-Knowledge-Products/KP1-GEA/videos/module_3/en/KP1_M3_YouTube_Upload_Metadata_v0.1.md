# KP1 Module 3 (EN) — YouTube upload metadata

Seven videos. Everything YouTube Studio asks for, copy-paste ready.
Upload in order, 3.1 first. Keep all seven **Unlisted** until the last one is up, then switch to Public.

**Before you start:** replace `<gitbook-url>` throughout with the GitBook companion URL, and
`[playlist link]` with the playlist URL once you have created it.

Same rule as Module 1: the videos link into the companion, so **merge the GitBook change request
first, upload second.**

---

## 1. Upload manifest

| Order | MP4 (upload this) | SRT (upload as subtitles) | Title | Duration |
|---|---|---|---|---|
| 1 | `video/KP1_M3_3.1_Video_v0.5.mp4` | `audio/KP1_M3_3.1_Audio_v0.5.srt` | What an EA repository is — and why a second copy destroys it | 5:38 |
| 2 | `video/KP1_M3_3.2_Video_v0.7.mp4` | `audio/KP1_M3_3.2_Audio_v0.7.srt` | Choosing an EA tool without locking yourself in — the one question to ask | 5:00 |
| 3 | `video/KP1_M3_3.3_Video_v0.6.mp4` | `audio/KP1_M3_3.3_Audio_v0.6.srt` | An architecture six months out of date is worse than none — the update discipline | 4:13 |
| 4 | `video/KP1_M3_3.4_Video_v0.10.mp4` | `audio/KP1_M3_3.4_Audio_v0.10.srt` | How to stand up an EA Board that can actually say no | 4:44 |
| 5 | `video/KP1_M3_3.5_Video_v0.1.mp4` | `audio/KP1_M3_3.5_Audio_v0.1.srt` | The architecture review gate — five questions every project answers before funding | 5:16 |
| 6 | `video/KP1_M3_3.6_Video_v0.2.mp4` | `audio/KP1_M3_3.6_Audio_v0.2.srt` | Is the EA actually working? The four metrics to put in front of your minister | 5:19 |
| 7 | `video/KP1_M3_3.7_Video_v0.2.mp4` | `audio/KP1_M3_3.7_Audio_v0.2.srt` | EA programmes don't fail, they fade — the four fade-modes and how to counter each | 5:25 |

Total 35:39.

---

## 2. Settings identical for all seven

| Field | Value |
|---|---|
| Playlist | KP1 Module 3 — EA repository, tooling and governance (Architect) |
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

**Title:** KP1 Module 3 — EA repository, tooling and governance (Architect)

**Description:**

```text
Module 3 of Knowledge Product 1 — Government Enterprise Architecture.

Seven short videos on the machinery that makes an architecture stick: the one
place it lives, the tooling choice that can quietly lock you in, the discipline
that keeps the picture true, the Board that can say no, the gate every project
passes, the few metrics worth reporting, and the four ways the practice fades in
year two.

Each video stands alone — start anywhere. Each ends with a play you can run on
your own country's material.

Written companion, with the worked examples and the full prompts:
https://<gitbook-url>/kp1/module-3

PAERA v1.0: https://paera.govstack.global

The plays run in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

---

## 4. Per-video details

### 3.1 — Set up the one place your architecture lives

**File:** `video/KP1_M3_3.1_Video_v0.5.mp4` · **Subtitles:** `audio/KP1_M3_3.1_Audio_v0.5.srt`

**Title:** What an EA repository is — and why a second copy destroys it

**Description:**

```text
You have the four-layer picture of a sector. Where does it live? A slide deck on
your laptop is out of date within a month and disagreed with within two. It needs
a home.

KP1 · Module 3 · 3.1 — Set up the one place your architecture lives

A repository is a discipline, not a product: it holds the four layers, the
relationships expressed in shared entities, and the decisions the EA Board made
with the reasons it made them. Why the second copy is the real danger — two copies
drift, then disagree, and people stop arguing about the architecture and start
arguing about whose copy is right. What it holds concretely, why a spreadsheet
everyone uses beats a platform nobody does, and why the repository is the object
both the minister and the architect can point at.

Sources
· PAERA v1.0 §4.2.2 (Architecture — the EA function) —
  https://paera.govstack.global
· PAERA v1.0 §3.1 (Governance & Policy) — https://paera.govstack.global
· PAERA v1.0 Annex 2 (Metamodel) — https://paera.govstack.global

The play from this video — design your EA repository's structure, with a worked
example: https://<gitbook-url>/kp1/module-3/3-1
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `EA repository, single source of truth, enterprise architecture, architecture governance, digital government, PAERA, GovStack`

---

### 3.2 — Choose EA tooling without locking yourself in

**File:** `video/KP1_M3_3.2_Video_v0.7.mp4` · **Subtitles:** `audio/KP1_M3_3.2_Audio_v0.7.srt`

**Title:** Choosing an EA tool without locking yourself in — the one question to ask

**Description:**

```text
In buying a tool to help your government avoid vendor lock-in, you can lock
yourself into the tool. One question decides whether you own your architecture or
the tool does.

KP1 · Module 3 · 3.2 — Choose EA tooling without locking yourself in

Graduate from the spreadsheet when it hurts in three specific ways — not before.
Then apply to your own tool the rule you enforce on every ministry: reuse before
buy, buy before build. The question to ask any tool before adopting it: can I
export everything, in a format I can read without this tool, whenever I want? And
the mistake that follows adoption — letting the tool's built-in metamodel quietly
replace the one you adopted. The content is the asset; the tool is only a viewer.

Sources
· PAERA v1.0 §5.6 (Sourcing Strategy — build / buy / share / sandbox) —
  https://paera.govstack.global
· PAERA v1.0 §3.3 (Digital Infrastructure principles — technology neutrality) —
  https://paera.govstack.global

The play from this video — score EA tool options against lock-in and fit, with a
worked example: https://<gitbook-url>/kp1/module-3/3-2
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `EA tooling, vendor lock-in, open formats, technology neutrality, enterprise architecture, digital government, PAERA, GovStack`

---

### 3.3 — Keep the repository true: the update discipline

**File:** `video/KP1_M3_3.3_Video_v0.6.mp4` · **Subtitles:** `audio/KP1_M3_3.3_Audio_v0.6.srt`

**Title:** An architecture six months out of date is worse than none — the update discipline

**Description:**

```text
A missing architecture makes people ask questions. A wrong one answers them. An
architecture six months behind reality is worse than none, because people trust
it and it lies to them.

KP1 · Module 3 · 3.3 — Keep the repository true: the update discipline

One person is accountable for the repository being current — not a committee, not
everyone. Updates tie to events, because a yearly review is eleven months stale: a
system goes live, a system is retired, a new data domain appears, the Board makes a
decision. A light conformance gate keeps the shared entities used correctly and
every data domain down to exactly one owner. And the cheapest moment to update is
when a project comes to the Board, because the project is already telling you what
it will build, what it will consume, and what data it touches.

Sources
· PAERA v1.0 §4.2.2 (Architecture) — https://paera.govstack.global
· PAERA v1.0 §5.4 (Organisational Assessment & Roadmap) —
  https://paera.govstack.global

The play from this video — draft the repository update policy, with a worked
example: https://<gitbook-url>/kp1/module-3/3-3
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `EA repository, architecture governance, data ownership, enterprise architecture, digital government, PAERA, GovStack`

---

### 3.4 — Stand up an EA Board that can actually say no

**File:** `video/KP1_M3_3.4_Video_v0.10.mp4` · **Subtitles:** `audio/KP1_M3_3.4_Audio_v0.10.srt`

**Title:** How to stand up an EA Board that can actually say no

**Description:**

```text
The repository holds the architecture. The Board gives it authority. Without a
governance board, the architecture is a document people can ignore.

KP1 · Module 3 · 3.4 — Stand up an EA Board that can actually say no

An advisory board produces minutes; a binding board produces decisions that are a
condition of proceeding. The chair decides whether the no sticks, which is why it
is the Chief Digitalisation Officer or the minister — and not you: you prepare the
Board, you advise it, you do not chair it. Membership follows the affected systems
rather than convenience: sector CIOs, the owners of the major state registries,
the data-protection regulator, one external adviser. And a cadence that does not
become the bottleneck, because a Board that is slow gets routed around.

Sources
· PAERA v1.0 §4.2.1 (Management) — https://paera.govstack.global
· PAERA v1.0 §3.1 (Governance & Policy) — https://paera.govstack.global
· PAERA v1.0 §5.4 (Organisational Assessment & Roadmap) —
  https://paera.govstack.global

The play from this video — draft your EA Board's Terms of Reference, with a worked
example: https://<gitbook-url>/kp1/module-3/3-4
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `EA Board, architecture governance, terms of reference, Chief Digitalisation Officer, enterprise architecture, digital government, PAERA, GovStack`

---

### 3.5 — Review projects against the architecture

**File:** `video/KP1_M3_3.5_Video_v0.1.mp4` · **Subtitles:** `audio/KP1_M3_3.5_Audio_v0.1.srt`

**Title:** The architecture review gate — five questions every project answers before funding

**Description:**

```text
A Board with authority needs something to do with it. The architecture review gate
is where the whole-of-government view meets the decision — while it can still be
changed cheaply.

KP1 · Module 3 · 3.5 — Review projects against the architecture

Five questions, asked of every significant project, the same way every time,
before funding: does a shared building block already exist, what data domains do
you touch and do you consume the owner's copy, do you meet the principles, and the
rest. Why the gate is not a wall — sometimes the project is right, so it grants
exceptions, but every exception is written down with its reason and given a sunset
date, because an exception without an expiry quietly becomes the permanent normal.
And why the decision log is the architecture's memory: two years on, the reason is
in the log rather than lost with the architect who moved on.

Sources
· PAERA v1.0 §5.4 (Organisational Assessment & Roadmap) —
  https://paera.govstack.global
· PAERA v1.0 §5.2 (Principles) — https://paera.govstack.global
· PAERA v1.0 §5.6 (Sourcing Strategy) — https://paera.govstack.global
· GovStack Building Block specifications — https://govstack.global

The play from this video — build your architecture review gate checklist, with a
worked example: https://<gitbook-url>/kp1/module-3/3-5
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `architecture review gate, project assurance, building blocks, re-use, enterprise architecture, digital government, PAERA, GovStack`

---

### 3.6 — Show the EA is working: the few metrics that matter

**File:** `video/KP1_M3_3.6_Video_v0.2.mp4` · **Subtitles:** `audio/KP1_M3_3.6_Audio_v0.2.srt`

**Title:** Is the EA actually working? The four metrics to put in front of your minister

**Description:**

```text
Your minister's fair question: is this EA work actually doing anything? You need
an answer that is honest, short and true — a handful of metrics, not a fifty-page
report.

KP1 · Module 3 · 3.6 — Show the EA is working: the few metrics that matter

Four numbers carry most of the signal: coverage that is current, the re-use rate,
open exceptions and how long they have been open, and gate decisions made. The
re-use rate is the one to put in front of the budget authority, because every
project that consumed the shared platform instead of building its own is a system
the country paid for once. The test that separates a real metric from a vanity
one: if it would still rise while the architecture stopped mattering, it is wrong.
And why a scorecard that is always green is believed exactly once.

Sources
· PAERA v1.0 §5.4 (Organisational Assessment & Roadmap) —
  https://paera.govstack.global
· PAERA v1.0 §5.7 (Recommended Roadmap — intermediate-results pattern) —
  https://paera.govstack.global

The play from this video — build your EA health scorecard, with a worked example:
https://<gitbook-url>/kp1/module-3/3-6
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `EA metrics, re-use rate, scorecard, architecture governance, digital government, PAERA, GovStack`

---

### 3.7 — Keep the practice alive past year two

**File:** `video/KP1_M3_3.7_Video_v0.2.mp4` · **Subtitles:** `audio/KP1_M3_3.7_Audio_v0.2.srt`

**Title:** EA programmes don't fail, they fade — the four fade-modes and how to counter each

**Description:**

```text
Most EA programmes do not fail dramatically. The first six months go well, then
somewhere in the second year the practice quietly stops mattering. The fade is
predictable, and it comes in four forms.

KP1 · Module 3 · 3.7 — Keep the practice alive past year two

Fade one: your architects are the obvious people to second to the crisis, and the
counter is a written protection. Fade two: updates slip, someone gets burned, and
an unused repository is a dead one. Fade three: a Board overruled in silence is a
Board being dismantled. Fade four: an EA that depends on one champion dies with
that champion — so institutionalise it, with a legal mandate rather than a memo.
A mature practice takes about five years, and the architect who stands it up is
rarely the one who sees it mature. That is the job.

Sources
· PAERA v1.0 §4.2.1 (Management) — https://paera.govstack.global
· PAERA v1.0 §4.2.2 (Architecture) — https://paera.govstack.global
· PAERA v1.0 §5.4 (Organisational Assessment & Roadmap) —
  https://paera.govstack.global

The play from this video — build your EA sustainment risk register, with a worked
example: https://<gitbook-url>/kp1/module-3/3-7
Full module: [playlist link]

The play runs in any AI assistant. Optional Claude kit:
https://github.com/alaponin/ea-plays-kit

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `EA sustainment, programme risk, architecture governance, institutional capacity, digital government, PAERA, GovStack`

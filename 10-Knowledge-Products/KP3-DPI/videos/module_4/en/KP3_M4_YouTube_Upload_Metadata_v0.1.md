# KP3 Module 4 (EN) — YouTube upload metadata

Six videos. Everything YouTube Studio asks for, copy-paste ready.
Upload in order, 4.1 first. Keep all six **Unlisted** until the last one is up, then switch to Public.

**Before you start:** replace `<gitbook-url>` throughout with the GitBook companion URL, and
`[playlist link]` with the playlist URL once you have created it.

Same rule as the other modules: the videos link into the companion, so **merge the GitBook change request
first, upload second.**

---

## 1. Upload manifest

| Order | MP4 (upload this) | SRT (upload as subtitles) | Title | Duration |
|---|---|---|---|---|
| 1 | `video/KP3_M4_4.1_Video_v0.5.mp4` | `audio/KP3_M4_4.1_Audio_v0.5.srt` | Why a country builds identity once — what the World Bank found identity systems cost | 3:19 |
| 2 | `video/KP3_M4_4.2_Video_v0.8.mp4` | `audio/KP3_M4_4.2_Audio_v0.8.srt` | The GovStack Identity block — what it verifies, what it releases, and what to check first | 5:04 |
| 3 | `video/KP3_M4_4.3_Video_v0.9.mp4` | `audio/KP3_M4_4.3_Audio_v0.9.srt` | Connect a service to the identity block with OpenID Connect — and keep the right identifier | 5:43 |
| 4 | `video/KP3_M4_4.4_Video_v0.12.mp4` | `audio/KP3_M4_4.4_Audio_v0.12.srt` | The GovStack Payments block — one shared connection to the payment systems your country already has | 5:51 |
| 5 | `video/KP3_M4_4.5_Video_v0.2.mp4` | `audio/KP3_M4_4.5_Audio_v0.2.srt` | Set up a government programme to pay through the Payments block — and prove it with one test payment | 4:24 |
| 6 | `video/KP3_M4_4.6_Video_v0.6.mp4` | `audio/KP3_M4_4.6_Audio_v0.6.srt` | Reuse is the return on planning — why only whole-of-government planning sees the saving | 4:43 |

Total 29:04.

---

## 2. Settings identical for all six

| Field | Value |
|---|---|
| Playlist | Education DPI Roadmap Module 4 — Identity and payments (Architect) |
| Audience | No, it's not made for kids |
| Show more → Language | English |
| Show more → Subtitle certification | None |
| Category | Education |
| Licence | Standard YouTube Licence |
| Visibility | Unlisted (→ Public when the module is complete) |
| Comments | On, hold potentially inappropriate for review |
| Recording date | *(leave blank)* |

Set **Language = English before uploading the SRT** — that is what attaches the caption track.
Do not use auto-captions; they mangle the acronyms and names (PNIA, GovStack, OpenID Connect, ISO 4217, Pix).

---

## 3. Playlist

**Title:** Education DPI Roadmap Module 4 — Identity and payments (Architect)

**Description:**

```text
Module 4 of the Education Digital Public Infrastructure (DPI) Roadmap.

Six short videos for the architect who connects a ministry's services to the
country's shared building blocks: why identity is built once, what the published
Identity block really offers, how a service connects to it, what the Payments
block is and is not, how a programme pays through it, and why the saving of
reuse is visible only to someone who plans for the whole government.

Each video stands alone — start anywhere. Each ends with an AI usage tip you can
run on your own country's material.

Written companion, with the worked examples and the full prompts:
https://<gitbook-url>/kp3/module-4

GovStack Identity specification: https://specs.govstack.global/identity
GovStack Payments specification: https://specs.govstack.global/payments

The tips run in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

---

## 4. Per-video details

### 4.1 — Why identity is built once

**File:** `video/KP3_M4_4.1_Video_v0.5.mp4` · **Subtitles:** `audio/KP3_M4_4.1_Audio_v0.5.srt`

**Title:** Why a country builds identity once — what the World Bank found identity systems cost

**Description:**

```text
An identity system is costly to build and to run, so a country builds it once and
every service uses it. A ministry that builds its own pays those costs a second
time.

Education DPI Roadmap · Module 4 · 4.1 — Why identity is built once

An identity system is not an ordinary registration screen: it establishes a
person's foundational identity and demands the highest security. The World Bank
found six cost categories making up over 90 percent of start-up cost, and human
resources often above 80 percent of the annual cost once a system runs. Then
Progressa: a learner identity of the education ministry's own, set category by
category beside the use of the national identity authority's service — no figures,
just which costs would appear twice. The specifications expect a country to reuse
the identity system it already runs.

Progressa is a demonstration country, fictional on purpose.

Sources
· GovStack Identity specification v2.0, §2.3.1 and §2.4 —
  https://specs.govstack.global/identity
· GovStack Registration specification, §9.1.3 —
  https://specs.govstack.global/registration
· World Bank, Understanding Cost Drivers of Identification Systems (2018),
  pages 3, 5 and 7 —
  https://documents1.worldbank.org/curated/en/702641544730830097/pdf/Understanding-Cost-Drivers-of-Identification-Systems.pdf

The AI usage tip from this video — find which identity costs a sector scheme would
pay twice, with a worked example: https://<gitbook-url>/kp3/module-4/4-1
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `digital identity, foundational identity, identity cost, World Bank, GovStack identity building block, reuse, education DPI, digital public infrastructure`

---

### 4.2 — The published Identity block, and what the identity authority offers today

**File:** `video/KP3_M4_4.2_Video_v0.8.mp4` · **Subtitles:** `audio/KP3_M4_4.2_Audio_v0.8.srt`

**Title:** The GovStack Identity block — what it verifies, what it releases, and what to check first

**Description:**

```text
The published Identity block verifies who a person is, releases only what that
person approves and issues no learner identity. So check what your identity
authority really offers before you plan on it.

Education DPI Roadmap · Module 4 · 4.2 — The published Identity block, and what the identity authority offers today

Foundational identity is the block's subject; a learner identity is functional,
and belongs to the education sector and its register. The six services the block
offers and the four kinds of actor that use it. The national number stays secret
inside the block, and each service receives an identifier made for that service
and that person. Verification is OpenID Connect: the person signs in on the
block's own screens and approves what may be shared. Then Progressa: the identity
authority's present read of a person by national number, set beside the published
block — useful, but a contract of the country's own.

Progressa is a demonstration country, fictional on purpose.

Sources
· GovStack Identity specification v2.0, §2, §3, §4, §5.1.2, §6, §8 and §9.1.1 —
  https://specs.govstack.global/identity

The AI usage tip from this video — compare your identity provider with the
published Identity block, with a worked example:
https://<gitbook-url>/kp3/module-4/4-2
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `GovStack identity building block, OpenID Connect, foundational identity, functional identity, pairwise identifier, education DPI, digital public infrastructure`

---

### 4.3 — Generating the identity connection

**File:** `video/KP3_M4_4.3_Video_v0.9.mp4` · **Subtitles:** `audio/KP3_M4_4.3_Audio_v0.9.srt`

**Title:** Connect a service to the identity block with OpenID Connect — and keep the right identifier

**Description:**

```text
A service connects to the identity block as its registered client, asks only for
what it needs, and keeps the identifier the block gives to that service — never
the national number.

Education DPI Roadmap · Module 4 · 4.3 — Generating the identity connection

Register the service as a client: its name, the addresses the person is sent back
to, its signing key. Choose the flow — with claims and a consent page, or proof of
the person only — and ask only for what a field of your form needs. The ID token,
the level of authentication it carries, and the access token. Keep the identifier
made for this service; in Progressa the learner register keeps a learner number of
its own with the identity authority's identifier beside it. The check that proves
it: an enrolled test person signs in, the token's signature is verified against
the published keys, and two services get two different identifiers.

Progressa is a demonstration country, fictional on purpose.

Sources
· GovStack Identity specification v2.0, §4.1.2, §6.1, §6.2, §7.2.1–7.2.4,
  §8.1.1, §8.2, §9.1.1 and §9.1.2 — https://specs.govstack.global/identity
· GovStack Digital Registries specification v3.0-alpha, DRS-14 —
  https://specs.govstack.global/registries

The AI usage tip from this video — draft the identity connection for one service,
with a worked example: https://<gitbook-url>/kp3/module-4/4-3
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `OpenID Connect, GovStack identity building block, client registration, ID token, pairwise identifier, data minimisation, learner registration, education DPI`

---

### 4.4 — The Payments block and the payment systems behind it

**File:** `video/KP3_M4_4.4_Video_v0.12.mp4` · **Subtitles:** `audio/KP3_M4_4.4_Audio_v0.12.srt`

**Title:** The GovStack Payments block — one shared connection to the payment systems your country already has

**Description:**

```text
The Payments block is not a new payment system. It connects government programmes
to the payment systems your country already has, so every programme pays through
one shared connection.

Education DPI Roadmap · Module 4 · 4.4 — The Payments block and the payment systems behind it

What the specification says the block is not: a new payment scheme. What is
inside it: an account mapper, payment requests, a payment gateway, vouchers,
reconciliation and an audit trail. What stays outside: settlement between the
financial institutions, the registration of people, and the checks banks make on
their customers. Then the path of a payment in Progressa — programme account,
Payments block, payer bank, the payment systems in the market. And Brazil's Pix,
as the Bank for International Settlements reports it, for how much a shared
payment system can carry.

Progressa is a demonstration country, fictional on purpose.

Sources
· GovStack Payments specification v3.0, §2, §4, §5.1.1, §5.1.4, §5.1.11,
  §5.1.12, §6.5, §6.17 and §9.1.3 — https://specs.govstack.global/payments
· BIS Bulletin No 52 (23 March 2022), pages 3 and 5 —
  https://www.bis.org/publ/bisbull52.htm

The AI usage tip from this video — place your country's payment systems on the
Payments block, with a worked example: https://<gitbook-url>/kp3/module-4/4-4
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `GovStack payments building block, government-to-person payments, payer bank, payment systems, Pix, education DPI, digital public infrastructure`

---

### 4.5 — Generating the payment connection

**File:** `video/KP3_M4_4.5_Video_v0.2.mp4` · **Subtitles:** `audio/KP3_M4_4.5_Audio_v0.2.srt`

**Title:** Set up a government programme to pay through the Payments block — and prove it with one test payment

**Description:**

```text
To pay through the block you configure the sender, the programme, the beneficiary,
the payment and the route for its status — and the proof is one test payment
whose status comes back.

Education DPI Roadmap · Module 4 · 4.5 — Generating the payment connection

The sender the block accepts. The programme, with its account and its currency,
named by its ISO 4217 code and never converted. The beneficiary, registered in
the account mapper with a functional identifier — in Progressa the learner number,
never the national number — so the service's own register keeps no payment
details. The batch and the least a payment request must contain. The route for
status, and the transport and security around all five. The check: one test
beneficiary, one test amount, a test environment, and a status that comes back
rather than an error.

Progressa is a demonstration country, fictional on purpose.

Sources
· GovStack Payments specification v3.0, §4.16, §5.1.14, §5.3.1, §5.4, §6.3,
  §6.4, §6.11, §6.14, §7.1.1, §7.2.1, §8.1.2, §8.1.4 and §9.1.1 —
  https://specs.govstack.global/payments

The AI usage tip from this video — draft the payment connection for one
programme, with a worked example: https://<gitbook-url>/kp3/module-4/4-5
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `GovStack payments building block, account mapper, bulk payment, payment status, ISO 4217, government-to-person payments, scholarship payment, education DPI`

---

### 4.6 — Reuse is the return on planning

**File:** `video/KP3_M4_4.6_Video_v0.6.mp4` · **Subtitles:** `audio/KP3_M4_4.6_Audio_v0.6.srt`

**Title:** Reuse is the return on planning — why only whole-of-government planning sees the saving

**Description:**

```text
Inside one project, building your own identity check or payment link looks
quicker. Seen from the whole government, it is the more expensive choice.

Education DPI Roadmap · Module 4 · 4.6 — Reuse is the return on planning

Two services in Progressa: learner registration reuses the identity block, the
scholarship payment reuses the Payments block. What each would have built alone —
its own enrolment, credentials and support staff; its own links to every bank and
mobile money provider. Education is already in the specifications: school fees,
vouchers redeemable only at schools, conditional transfers, several registrations
combined in one form. And why the saving goes unclaimed: the first ministry pays
for a shared block and the others reuse it, a sum that exists only at the level
of the whole government.

Progressa is a demonstration country, fictional on purpose.

Sources
· PAERA v1.0 §3.3.3 (Building Infrastructure) and §5.2 (Principles — whole of
  government, once-only) — https://paera.govstack.global
· GovStack Identity specification v2.0, §2.4 and §4.1.2 —
  https://specs.govstack.global/identity
· GovStack Payments specification v3.0, §2, §4, §4.3, §6.3, §9.2.1 and §9.2.2 —
  https://specs.govstack.global/payments
· GovStack Registration specification, §6.3.1.9 —
  https://specs.govstack.global/registration

The AI usage tip from this video — count the services that would reuse each
shared block, with a worked example: https://<gitbook-url>/kp3/module-4/4-6
Full module: [playlist link]

The tip runs in any AI assistant — Claude, ChatGPT, Gemini.

Produced by FiscalAdmin OÜ for ITU/Giga.
```

**Tags:** `reuse, whole-of-government, once-only, shared building blocks, GovStack, PAERA, school fees, scholarship payment, education DPI`

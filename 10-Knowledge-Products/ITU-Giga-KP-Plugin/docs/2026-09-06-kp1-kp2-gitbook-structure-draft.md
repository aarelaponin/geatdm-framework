# KP1 + KP2 on GitBook — structure draft

**Status:** draft v1 for discussion · **Date:** 2026-09-06 · **Owner:** Arne
**Inputs:** `gitbook-demo/` (Module 1 as built, 30 Aug), `KP1_Tightening_Transmittal_2026-09-03.md` (35 videos: 7/7/7/8/6), the KP2 v0.1 bundles (40 subtopics: 7/6/6/8/7/6), `ea-plays-kit/plugins/ea-plays/README.md` (play → skill table).
**Purpose:** agree the site shape, the page anatomy and the shared "working with AI" chapter *before* Modules 2–5 and KP2 are rendered. Videos are in production; every video slot ships as a placeholder until the URL exists.

---

## 1. What the demo already settled (keep)

The Module 1 demo is the pattern. Nothing below changes it — it generalises it.

| Settled in the demo | Keep as-is |
| --- | --- |
| Subtopic page anatomy: video → "watch first" line → single message → persona / PAERA anchor / play row → concept → play (5 tabs) → sources | Yes |
| Play tabs: **Prompt · Example input · Example output · Reading the output · What next** — Reading the output is the longest, on purpose | Yes |
| Kind badges 🔍 diagnostic / ✍️ drafting / 🔁 translation | Yes |
| Play 0 → A0 context pack; A-numbered artefacts; per-KP "Your country workbook" with mermaid chain | Yes |
| Progressa as the single worked example; `Draft worked example` warning until a `kp-play-run` pass | Yes |
| "With the kit" line per play naming the primary `ea-plays` skill | Yes — this becomes the "AI tooltip" (§4) |
| Importer lessons: `{% expandable %}` is dropped → `<details>`; tabs/hints/stepper/mermaid/card tables import fine; ref-links resolve only inside one `updateChangeRequestContent` batch, otherwise `/pages/<id>` | Yes — and cross-**space** links must be absolute URLs (§2) |
| Practice box on the recap slide is the only CTA in the video; the description links the play *page*, never the raw prompt | Yes |

What the demo does **not** yet have, and this draft adds: a KP-level intro page with its own video; module pages that carry a module intro video; a placeholder convention; a shared AI chapter split into "trust" and "technique"; KP2; a fixed tooltip block that names skills.

---

## 2. Site shape

One site, three spaces now, two more later. Spaces are heavyweight in GitBook (own slug, own search scope, own Git Sync), so the split follows audience and lifecycle, not neatness.

```
Giga Knowledge Products (site)
├── Start here            ← shared: AI ground rules, prompting, the kit, Progressa. Changes rarely.
├── KP1 — Government Enterprise Architecture     ← 5 modules, 34 plays + Play 0
├── KP2 — Government Interoperability Framework  ← 6 modules, 40 plays, + build-pack pages
├── (KP3 — DPI roadmap)                          later
└── (KP4 — Building-block services)              later
```

- **No sections** until KP3 exists (three spaces do not need a top-nav row). When KP3/KP4 land: sections "Start here" and "Knowledge Products".
- **Why a separate `Start here` space:** the AI chapter is linked from *every* play page in *every* KP and from every YouTube description. It must have one URL that never moves when a KP space is restructured. Same for Progressa.
- **Consequence:** links from a KP page to `Start here` are absolute site URLs (`https://<host>/start-here/working-with-ai`), not `.md` ref-links. `publish_prep.py` already normalises links; add a rule for cross-space targets.
- **Demo site today:** one space with everything in it. Migration = create `Start here`, move `how-to-use-the-plays`, `play-0`, `progressa` there, leave a stub in KP1 that links across. Play 0 stays *per KP* only if KP2 needs different A0 sections (it does — see §6.3); otherwise it lives in `Start here` and KP2 adds a "B0 supplement" page.

### 2.1 `Start here` — page tree

| Page | Icon | What it holds | Source |
| --- | --- | --- | --- |
| Home | house | What the KPs are, the Watch → Play → Read → Carry loop, cards to the four pages below and to each KP | new |
| **How to use the plays** | compass | The mechanics only: what a play is, the badges, the two-step rhythm (Play 0 then the play), text-in/text-out, the five habits, how plays chain | demo `how-to-use-the-plays.md`, trimmed |
| **Working with AI — the ground rules** | shield | The page you asked for. Drafting partner not oracle; the ways an assistant misleads; the four safeguards; the two meta-plays (four-part rewrite, de-identify); keep the decision human; which assistant. See §5 | demo page, split out and expanded |
| **Prompting techniques** | wand | The four-part prompt as *the* KP technique, then the current general techniques and how each maps to a play. See §5 | new |
| **The ea-plays kit** | plug | Install in two lines; the play → skill table; "the plays run bare"; what a provenance header is; Cowork / Claude-app routes | `ea-plays-kit/plugins/ea-plays/README.md` |
| **Play 0 — Build your country context** | search | Seven research prompts → A0 | demo `play0.py` |
| **Progressa — the demonstration country** | flag | The fixture | demo `fixture.py` |
| Video index | video | One table per KP per module, status column — the tracker for the placeholder swap | demo `video-links.md`, extended |

Eight pages. Nothing else goes here.

---

## 3. Page templates (three levels)

### 3.1 KP home page — `README.md` of each KP space

```
frontmatter: description, icon: house
# KP1 — Government Enterprise Architecture
[VIDEO SLOT — KP intro, ~2–3 min]            ← §3.4 placeholder until live
{% hint success %} How the course works — Watch → Play → Read → Carry {% endhint %}
Card table (4): Working with AI (→ Start here) · Module 1 · Play 0 (→ Start here) · Your country workbook
## The modules   — table: #, topic, persona, videos, plays, status
## Where this sits — the four KPs, Progressa, GEATDM, PAERA link
{% hint info %} Use this site from your AI assistant — llms.txt + MCP endpoint {% endhint %}
```

The KP intro video is the one that introduces the modules (replaces the retired "AI plays" module in KP1 per the 3 Sep decision). Its GitBook page is the KP home; there is no separate "Introduction" page.

### 3.2 Module page — `module-N/README.md`

```
frontmatter: description (= the module's one-paragraph purpose)
# Module N — <title>
[VIDEO SLOT — module intro, ~1–2 min]
**Persona:** Strategist / Architect. **You leave with:** <artefact list, e.g. A1–A7 = cabinet-briefing pack>
## Subtopics — table: #, title (link), single message, play kind + artefact, kit skill
## How the plays chain in this module — small mermaid (module-scoped subset of the workbook chain)
{% hint info %} Before you start: A0 from Play 0; if you have no country, use Progressa {% endhint %}
```

This replaces the demo's "Outline only" stubs for Modules 2–5. The module intro video is a new slot — 5 for KP1, 6 for KP2 — that the video-links tracker must gain a row for.

### 3.3 Subtopic page — unchanged from the demo, plus the tooltip block

Exactly the demo's 1-1.md anatomy, with one insertion: an **AI tooltip** hint block at the head of the play section (§4). Order:

1. `{% embed %}` or placeholder (§3.4) + "Watch first — ~N min" line
2. `> Single message`
3. Persona / PAERA anchor / Your play table
4. `## The concept` (prose from the script, 3–5 paragraphs)
5. `## Do this on your own sector — <play title>` → **AI tooltip block** → tabs (Prompt · Example input · Example output · Reading the output · What next)
6. `## Sources`

### 3.4 Placeholder convention for every video slot

One block, identical everywhere, swapped for the embed by the build script when `yt` is set:

```markdown
{% hint style="info" %}
🎬 **Video in production** — *<YouTube-optimised title>* (~N min).
The play below does not depend on the video: the concept section carries what the video will say. Come back for the embed, or subscribe to the [video index](https://<host>/start-here/video-index).
{% endhint %}
```

Rules: the placeholder carries the real title and runtime from the bundle metadata so the page is already searchable; the "Watch first" line is *omitted* while the placeholder is up (nothing to watch first); the video-index row says *in production*. Render logic: `yt is None → placeholder`. Nothing manual on the site.

---

## 4. The AI tooltip block — one per play, same shape everywhere

The demo carries the pieces (kind badge, input, output, "With the kit" line) spread across the Prompt tab. Pull them into one hint block *above* the tabs so a learner sees at a glance what the play needs, what it gives and which skill helps — the "tooltip".

```markdown
{% hint style="success" %}
**🔍 Diagnostic play · produces A1 Fragmentation diagnostic**
**Bring:** 1–3 paragraphs on your digital landscape — A0 §1 from [Play 0](…).
**Get:** a 4-row table + 3 bullets, as text in the chat.
**Time:** ~10 min · **Assistant:** any; one that browses helps.
**With the kit:** `country-context-pack` (also runs `cite-or-discard`) — brings the sourced input in and checks every claim. Optional: the prompt runs bare.
**Watch for:** Severe claimed without evidence in your input. ← the play's own safeguard, one line
{% endhint %}
```

Six lines, fixed order: **kind + artefact · Bring · Get · Time/Assistant · With the kit · Watch for**. The tabs below stay as they are. `render.py` gets a `tooltip()` function; the fields all exist in the tip schema already (`kind`, `artefact`, `input_ref`, `output`, `skill`, safeguard) — nothing new to author for KP1 Modules 1–5. For KP2 the `skill` field is the gap (§6.4).

Where the example in the tooltip comes from: **Watch for** is the safeguard's first sentence; **Get** is the tip's "Inputs and outputs" output clause. Both are already machine-checked substrings, so the box cannot drift from the tip.

---

## 5. The "Working with AI" chapter — curated, not authored

You asked for a page that makes sure learners know not to trust everything the assistant outputs and what the current prompting techniques are, with a link to the kit. The demo's how-to already carries the course's own *ground rules* (they moved there from the retired KP1 5.1/5.7 — the four-part prompt, the four safeguards, the two meta-plays, the five habits). Those stay: they came from the bundles and ITU has seen them.

Everything else on these two pages is **curated from named authorities, not written here**. Rule for the chapter: every claim about how assistants behave, and every technique, links to a source a learner can open; the page adds only the one-line bridge to the plays. This is the course's own "cite or discard" applied to itself — and it means the pages date visibly (each link carries its publication date) instead of quietly.

Proposal: split into two pages, both short, both linking the kit.

### 5.1 Working with AI — the ground rules (trust)

| Section | Course's own text (keep) | Links to (verified 6 Sep 2026) |
| --- | --- | --- |
| Drafting partner, not oracle | existing paragraph | — |
| Why it makes things up | one bridge sentence | OpenAI, *Why language models hallucinate* (5 Sep 2025) — models are trained and scored in ways that reward a confident guess over "I don't know"; the learner's takeaway is that fluency is not evidence |
| What that costs when nobody checks | one bridge sentence + "this is why 1.5 and 5.1 say *open the source*" | Damien Charlotin, *AI Hallucination Cases* database — ~2,000 court decisions worldwide (2023→, updated daily) where fabricated citations or quotes reached a judge. Concrete, non-technical, and the pattern is exactly the KP risk |
| It agrees with you | one bridge sentence + "this is why every play says *claim Severe only if the evidence is in the input*" | OpenAI, *Expanding on what we missed with sycophancy* (May 2025) — a vendor's own account of a model that flattered users' framing |
| What a government expects of its staff | one bridge sentence | GOV.UK, *AI Playbook for the UK Government* (Feb 2025, updated Sep 2026) — the ten principles, incl. verification, accountability and data protection; the reference point for "keep the decision human" and "never paste confidential data". Pair with the African Union *Continental AI Strategy* (Aug 2024) for the regional policy frame |
| The four safeguards | existing text | each safeguard gets one "see also" pointer into the Playbook |
| Two meta-plays | existing (keep the "run de-identification locally" warning) | — |
| Which assistant | existing tool-neutral paragraph | — |
| With the kit | three lines | *The ea-plays kit* page; `cite-or-discard` |

Dropped from v1: the "five ways it misleads" list and the "when to stop" list I proposed. Both were invented here. The two OpenAI posts and the Charlotin database carry the same lesson with evidence.

### 5.2 Prompting techniques (technique)

| Section | Course's own text (keep) | Links to (verified 6 Sep 2026) |
| --- | --- | --- |
| The four-part prompt | the stepper from the demo; 1.1 as the worked example; "every play on this site has this shape" | — |
| How the vendors say the same thing | one table row per guide: their structure ↔ the four parts | **Google**, *Prompting guide 101* (Oct 2024, PDF): Persona · Task · Context · Format. **OpenAI Help Center**, *Prompt engineering best practices for ChatGPT*: be specific, iterate, set the tone. **Anthropic**, *Prompt engineering overview* → *Prompting best practices* (platform.claude.com, living page): clarity and examples, structure, roles, thinking, prompt chaining. The bridge: Persona/role ≈ the play's persona line; Task ≈ named outputs; Context ≈ "Below is …"; Format ≈ the output contract; none of the three has the *safeguard line* — that is the course's addition, say so |
| Going deeper | one sentence | DAIR.AI, *Prompt Engineering Guide* (promptingguide.ai) — the community reference: few-shot, chain-of-thought, RAG, and a section on hallucination reduction. For readers who want the vocabulary |
| Learning to work with AI, not just prompt it | one sentence | Anthropic, *AI Fluency: Framework & Foundations* (Claude Academy, free, ~4 h): Delegation · Description · Discernment · Diligence. Discernment and Diligence are the Watch/Read/Do/Run/Prove loop in other words — the natural "if you want a course on this" pointer |
| Where the plays use each technique | the mapping table from v1, trimmed to the techniques the guides above actually name (context, role, named outputs, format, examples, iterate, chaining) | each row cites which guide names it |
| Skills — what they are | two sentences | *The ea-plays kit* page; the repo |

Dropped from v1: "techniques we deliberately do not teach" (opinion, no source) and the "projects / uploaded context" and "browsing" rows unless a guide names them.

### 5.3 Reading list — the one table both pages share

Render as a card table on each page; the same rows, so the list is maintained once (a GitBook reusable content block).

| Source | Publisher · date | Used for | Tier |
| --- | --- | --- | --- |
| [AI Playbook for the UK Government](https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government) | GOV.UK · Feb 2025, upd. Sep 2026 | the ten principles; verification, accountability, data protection | T1 government |
| [Continental Artificial Intelligence Strategy](https://au.int/en/documents/20240809/continental-artificial-intelligence-strategy) | African Union · Aug 2024 | regional policy frame; responsible and equitable use | T1 intergovernmental |
| [Governing with Artificial Intelligence](https://www.oecd.org/en/publications/2025/06/governing-with-artificial-intelligence_398fa287.html) | OECD · Sep 2025 | 200 government AI cases, risks and oversight — for the Strategist who wants the policy picture | T1 intergovernmental |
| [Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/) | OpenAI · Sep 2025 | why fluency is not evidence | T2 vendor research |
| [Expanding on what we missed with sycophancy](https://openai.com/index/expanding-on-sycophancy/) | OpenAI · May 2025 | why it agrees with your framing | T2 vendor |
| [AI Hallucination Cases](https://www.damiencharlotin.com/hallucinations/) | Damien Charlotin · 2023→, daily | what unchecked citations cost | T2 curated primary sources |
| [Prompting guide 101](https://services.google.com/fh/files/misc/gemini_for_workspace_prompt_guide_october_2024_digital_final.pdf) | Google · Oct 2024 | Persona · Task · Context · Format | T2 vendor guide |
| [Prompt engineering best practices for ChatGPT](https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt) | OpenAI · living | be specific, iterate, tone | T2 vendor guide |
| [Prompt engineering overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) | Anthropic · living | clarity, examples, structure, roles, chaining | T2 vendor guide |
| [Prompt Engineering Guide](https://www.promptingguide.ai/) | DAIR.AI · living | the technique vocabulary; hallucination-reduction section | T3 community reference |
| [AI Fluency: Framework & Foundations](https://academy.claude.com/courses/ai-fluency-framework-foundations) | Anthropic / Claude Academy · free course | the 4 Ds — a course, not a page | T2 vendor course |

Three vendors, deliberately, so the page stays tool-neutral (the ITU calibration item). Two rules for the list: (1) it is re-checked with `cite-or-discard` before every publish and the "verified" date on the page is updated — the *Governing with AI* and Playbook links are the ones most likely to move; (2) "living" pages are cited by title, not by a quoted passage, since the wording changes.

Not included, and why: the OECD.AI entry for Argentina's *Prompting Guide for Public Administration* (ROCLET framework) — a close cousin of the four-part prompt from a public administration, but it is not yet formally published (OECD.AI, Aug 2026); add it when it is. NIST AI 600-1 (the generative-AI risk profile, which uses "confabulation") — authoritative but written for risk officers, not this audience; mention by name only if a reader asks for the standard.

Both pages end with the same card row: *How to use the plays · The ea-plays kit · Play 0*.

---

## 6. KP1 — page tree (post-tightening, 3 Sep)

Space: **KP1 — Government Enterprise Architecture**. Home (§3.1) + workbook + 5 module folders. 34 subtopic pages + 1 companion-only play.

| Module | Persona | Subtopics (videos) | Plays → artefacts | Primary kit skill(s) |
| --- | --- | --- | --- | --- |
| **1 Why a PAERA-anchored EA** | Strategist | 1.1–1.7 (7) | A1–A7 | country-context-pack, ea-institution-mapper, ea-cost-case, ea-legal-context, paera-reference-check, ea-governance-drafter ×2 |
| **2 Principles, metamodel, BDAT** | Architect | 2.1–2.7 (7) | A9–A15 | bdat-assessor ×3, paera-reference-check ×2, ea-institution-mapper, bb-landscape-check |
| **3 Repository, tooling, governance** | Architect | 3.1–3.7 (7) | A16–A21, A7 rev.2 | ea-governance-drafter ×6, ea-tool-evaluator |
| **4 Progressa end-to-end** | Architect | 4.1–4.8 (8) | A22–A28, A14 rev.2 | ea-institution-mapper, ea-method-runner ×7 |
| **5 Evidence, rollout, the case** | Strategist | 5.1–5.6 (6) | A8 rev.2, A21 rev.2, A31, A29, A30, A29 rev.2 | ea-comparator-evidence ×2, ea-governance-drafter, ea-method-runner, ea-cost-case, ea-open-learning-catalogue |

Per-module detail (titles from the v0.2/v0.3 bundles; artefact ids from the kit's play map):

**Module 1** — 1.1 Why your country needs a national EA (A1) · 1.2 What an EA actually is, in one breath (A2) · 1.3 Why projects can't do this themselves (A3) · 1.4 Why an EA matters more now (A4) · 1.5 Why PAERA-anchored (A5) · 1.6 The lifecycle on one page (A6) · 1.7 What you will need from your minister (A7). **1.8 is retired**: delete the demo page, its comparator play is now 5.1's tip; keep the URL as a redirect to 5.1 (YouTube description of 1.7 v1 may still point at it).

**Module 2** — 2.1 Read any government in four layers (A9) · 2.2 The shared vocabulary that makes re-use possible (A10) · 2.3 Adopt your principles, don't draft them (A11) · 2.4 Classify any public body before you model it (A12) · 2.5 BDAT on a real ministry — the Progressa walkthrough (A13) · 2.6 Run a Phase 2 Assess (A14) · 2.7 The two traps to catch at Assess (A15).

**Module 3** — 3.1 Set up the one place your architecture lives (A16) · 3.2 Choose EA tooling without locking yourself in (A17) · 3.3 Keep the repository true (A18) · 3.4 Stand up an EA Board that can actually say no (A7 rev.2) · 3.5 Review projects against the architecture (A19) · 3.6 Show the EA is working (A20) · 3.7 Keep the practice alive past year two (A21).

**Module 4** — 4.1 Meet Progressa (A22) · 4.2 Discover (A23) · 4.3 Assess (A14 rev.2) · 4.4 Adapt — build, buy or share (A24) · 4.5 Plan — target architecture (A25) · 4.6 Plan — roadmap and cost (A26) · 4.7 Execute & Govern — gate decision (A27) · 4.8 Run this on your own sector (A28).

**Module 5** — 5.1 Is this proven, or just theory? (A8 rev.2 comparator cards) · 5.2 What works and what quietly kills these programmes (A21 rev.2) · 5.3 Roll it out across sectors (**A31 national rollout waves** — the former 5.6 tip) · 5.4 Win the commitment (A29) · 5.5 Build your team's capability (A30) · 5.6 The closing case (A29 rev.2). **Companion-only play on the 5.3 page:** *Map the method to a second sector* (A28 rev.2, the former 5.3 tip) — rendered as a second play section on the same page, badged "GitBook only — no video", per bundle §4.6.

**Workbook page for KP1:** the demo's Module 1 chain + the Module 2/4 chain, extended with Module 3 and 5 rows; artefact table A0–A31 with rev.2 rows.

### 6.1 Numbering drift to fix before any page cites a skill

The kit's `README.md` and `tests/play-map.json` still use pre-tightening ids: **1.8**, **5.3 = sector map**, **5.6 = rollout**, **5.7 = closing case**. After 3 Sep the GitBook needs: 1.8 → gone (play lives at 5.1); 5.3 → rollout (A31) + companion sector map (A28 rev.2); 5.6 → closing case (A29 rev.2); no 5.7. The kit plan froze skill *names* at v0.1.0 — play *ids* were not frozen, so this is a kit patch release, not a GitBook workaround. Do it before Module 5 is rendered.

---

## 7. KP2 — page tree (v0.1 bundles, 40 subtopics)

Space: **KP2 — Government Interoperability Framework**. Same three templates. Two additions KP1 does not have: a **Build pack** page group, and a KP2 workbook whose artefacts are the *configuration* of the framework (legal / organisational / technical), not briefing documents.

| Module | Persona | Subtopics | Plays → artefacts (proposed B-series) | What the artefact *is* |
| --- | --- | --- | --- | --- |
| **1 Why, the four layers, the foundation** | Strategist | 1.1–1.7 (7) | B1 procured-vs-planned diagnostic · B2 four-layer exchange map · B3 highest-value once-only exchange · B4 Strategic Foundation Document · B5 Use-Case Catalogue · B6 stakeholder tiers · B7 standards-to-reuse list | the foundation |
| **2 Legal — the Decree Drafting Kit** | Strategist | 2.1–2.6 (6) | B8 legal-readiness assessment · B9 decree outline (five components) · B10 explanatory memorandum + preamble · B11 one operative article · B12 cover note + two-track memo · B13 legal acceptance check | the decree = legal configuration |
| **3 Governance — three tiers + RACI** | Strategist | 3.1–3.6 (6) | B14 Operating Authority mandate · B15 three-tier structure · B16 governance RACI · B17 member obligations + agreement · B18 four TWG charters · B19 change-control + standards register | the Governance Pack = organisational configuration |
| **4 Architecture, standards, the Giga case** | Architect | 4.1–4.8 (8) | B20 component-to-layer map · B21 trust-zone trace · B22 standards portfolio · B23 semantic map · B24 OpenAPI contract · B25 bronze/silver/gold source map · B26 X-Road service description + wiring checklist · B27 data-protection envelope | technical configuration |
| **5 Implementation, onboarding, the Linkup demo** | Architect | 5.1–5.7 (7) | B28 four-phase plan · B29 Member Requirements · B30 SLA template · B31 X-Road member registration · B32 federation run book · B33 once-only acceptance script · B34 demo-to-production gap list | the runnable slice |
| **6 AI plays, dissemination, storyboard** | Strategist | 6.1–6.6 (6) | B35 AI-play catalogue · B36 bus-health summary · B37 consistency cross-check · B38 sector-portable map · B39 four role-path outlines · B40 storyboard | reuse and handover |

### 7.1 KP2-specific pages

- **Build pack** (folder, 4 pages): *What the build pack is* (manifest, the three configuration layers, acceptance) · *Run it* (runbook, prerequisites, Linkup access) · *Acceptance — the once-only proof* (PNEA ← PNIA + PLR) · *Exercises*. Source: `KP2-build-pack/README.md`, `runbook.md`, `exercises.md`. Modules 4–5 play pages link to the specific `configs/` and `prompts/` files; the pack is the Progressa "example output" for those plays, so the *Example output* tab can point at the real file instead of a pasted draft.
- **Your framework workbook** (KP2's workbook): the B-chain grouped by configuration layer, with the KP1 hand-offs — A7 Board ToR → 3.1 Operating Authority; A24 sourcing matrix → 4.3 standards portfolio; A0 → 1.1, 1.5, 1.6.
- **Play 0 supplement for KP2** (one page, in the KP2 space): the A0 sections KP2 needs that KP1's seven do not cover — the current exchange approach (procurement clauses, existing bus), the integration map, the data-protection law and DPA. Three research prompts; they extend A0, they do not replace it.

### 7.2 KP2 module-page and subtopic-page differences

None in shape. Two in content: Module 4–5 subtopic pages get an extra *Files* line in the tooltip block (`Bring: … · Files: KP2-build-pack/configs/…`), and Modules 2 and 4 pages carry a "published model" link (the model decree, the EIF, the X-Road docs) as the named source for the safeguard.

### 7.3 Two things to decide for KP2 before rendering

1. **Module 6 mirrors the KP1 Module 5 problem.** 6.1 "Assemble your GIF AI-play catalogue" produces the thing this GitBook *is*. 6.3 (consistency cross-check) and 6.4 (sector-portable map) are real plays; 6.2 (bus monitoring) is real; 6.5–6.6 are dissemination. Same treatment as KP1 on 3 Sep? — retire 6.1 into the KP2 intro video, keep the catalogue as the KP2 home page's module table, ship five videos. This draft assumes six pages and flags 6.1.
2. **The `gif-*` skills named in the tips do not exist.** 2.3, 2.4, 4.4, 4.5 and 6.1 name `gif-decree-draft`, `gif-semantic-map`, `gif-openapi-gen` in the prompt text; neither `ea-plays-kit` nor `itu-giga-kp` has them (`bb-config-gen` exists in the production kit only). Options: (a) build the three as `ea-plays` skills — they are the KP2 equivalents of `ea-governance-drafter` / `ea-method-runner` and the natural second release of the kit; (b) reword the five tips to be tool-neutral now and add the skills later. Either way the tooltip block cannot name them until they exist. Recommendation: (b) now, (a) as `ea-plays` v0.2 — the plan's non-goals already say "no KP2–4 skills yet; the layout leaves room for them".

### 7.4 KP2 tooltip skill mapping with what exists today

Where an existing kit skill already serves a KP2 play, the tooltip can name it now:

| KP2 play | Existing skill | Why |
| --- | --- | --- |
| 1.1, 1.3, 1.5 | `country-context-pack` + `cite-or-discard` | A0-style sourced input |
| 1.6, 3.1, 3.2 | `ea-institution-mapper` | bodies, mandates, posts |
| 1.7, 4.3 | `ea-comparator-evidence`, `paera-reference-check` | published standards and cases, checked |
| 2.1, 4.8 | `ea-legal-context` | the national legal register, the DPA |
| 3.3–3.6, 5.2, 5.3 | `ea-governance-drafter` | RACI, obligations, charters, SLA are its document family |
| 5.1, 5.7 | `ea-method-runner` | phased plan, gap list |
| 4.1, 4.2 | `bb-landscape-check` | what is live on the bus today |
| 2.2–2.6, 4.4–4.7, 5.4–5.6, 6.x | *none yet* — "runs bare" only | the gif-* gap |

---

## 8. Build path — what to do now, what waits for the videos

**Now (no video needed):**
1. Extend `render.py` → `tooltip()` block (§4), placeholder block (§3.4), module-page template (§3.2), cross-space absolute links. Port the extended tip schema to `bundle_to_md.py` so KP1 M2–5 and KP2 render from the build scripts, not from hand-written `moduleN.py` files. Module 1 stays the hand-authored reference until the port reproduces it.
2. Create the `Start here` space; move the three shared pages; write the two AI pages (§5) and the kit page.
3. Patch the kit play map (§6.1) and tag `ea-plays` v0.1.x.
4. Render KP1 Modules 2–5 with placeholders and *draft* worked examples (fixture in, model out, the `Draft worked example` warning on) — the same status Module 1 had on 30 Aug.
5. Render KP2 Modules 1–5 the same way; Module 6 as an outline pending 7.3(1); build-pack pages from the pack's own docs.

**When each video lands:** set `yt` in the module data → placeholder becomes the embed, video-index row flips. One change request per module.

**Before anything goes to the Giga GitBook:** the `kp-play-run` pass on every worked example (the warning comes off), `cite-or-discard` on every Sources list, and the tool-neutral wording of the practice box confirmed by ITU.

**Page count when done:** Start here 8 · KP1 1 + 1 + 5 + 34 = 41 · KP2 1 + 1 + 1 + 6 + 40 + 4 = 53 → ~102 pages.

---

## 9. Open decisions (yours)

1. Three spaces with `Start here` shared — or keep everything in one space per KP and duplicate the AI chapter? (Draft assumes shared.)
2. Tooltip block *above* the tabs (§4) — or keep the demo's placement inside the Prompt tab and add only the **Watch for** and **With the kit** lines?
3. KP2 Module 6.1 — retire into the KP2 intro (mirror of the KP1 decision) or keep as a video?
4. `gif-*` skills — reword the five tips now and build the skills as `ea-plays` v0.2?
5. KP2 artefact ids — B-series as proposed, or continue A32…?
6. The retired 1.8 URL — redirect to 5.1, or leave the page as a "GitBook-only play" as it is on the demo today?

---

## 10. Making it real in the repo — content stays in git, GitBook reads git

### 10.1 The one problem to solve

Today a play exists in two places with two schemas:

| Where | Schema | Lifecycle |
| --- | --- | --- |
| `build_kpN_moduleM_vXX.js` → `aiTip {title, problem, prompt, io, safeguard}` + `practice` | what ITU signs off; gated by `kp-bundle-qa`; rendered to the .docx | frozen at sign-off, reopened only with a transmittal |
| `gitbook-demo/module1.py` → `play {kind, when, feeds, artefact, skill, skill_also, input_ref, example_input, example_output, annotations, what_next}` + `concept`, `yt` | the learner page | changes after sign-off: a worked example is re-run, a video URL arrives, a skill is renamed |

The demo README already says the schema extension "should be ported to the build scripts". Port **only the structural half** there; the narrative half has a different lifecycle and must not live in a file ITU signs.

**Rule: one file per lifecycle.**

| Content | Source of truth | Why |
| --- | --- | --- |
| Script, slides, tip (title/prompt/io/safeguard), metadata, practice box | `.js` build script (unchanged) | ITU deliverable; already gated |
| Play structure: `kind`, `artefact`, `feeds`, `inputRef`, `skill`, `skillAlso` | `.js` `aiTip` — six new fields | small, stable, machine-checkable against the kit's play map and the practice-box substring rule; no docx impact (the docx renderer ignores them) |
| Concept prose on the page | **derived** from the script's voice-over beats (`text` only, cues dropped) | zero duplication; the demo's Module 1 concept was hand-derived from exactly this |
| Worked example, annotations, what-next, a concept override if a derived one reads badly | a **sidecar** per play: `KPn/gitbook/plays/<id>.md` with YAML front matter | produced/refreshed by `kp-play-run`; draft-marked until then; never in the ITU docx |
| Video URLs (KP intro, module intros, subtopics) | `KPn/gitbook/videos.yaml` | one file to touch when a video lands; drives placeholders and the video index |
| Module/KP page copy (blurb, persona line, "you leave with") | `KPn/gitbook/kp.yaml` | small, hand-written |
| Play → skill map, artefact chain | `ea-plays-kit` (`tests/play-map.json`, `shared/workbook-chain.md`) — **read, not copied** | it is the public contract; v0.2.2 just proved it drifts when copied |
| Progressa fixture | `10-Knowledge-Products/gitbook/_shared/progressa.md` | today it exists three times (demo `fixture.py`, kit `tests/progressa.md`, KP2 build pack); the kit keeps its copy under its existing divergence check |
| Reading list for the AI chapter | `gitbook/_shared/sources.yaml` (title, url, publisher, date, tier, used-for) | link-checked in CI; rendered into both AI pages |

### 10.2 Repo layout

```
10-Knowledge-Products/
├── gitbook/                         ← the Git Sync root; everything GitBook shows is under here
│   ├── _shared/
│   │   ├── progressa.md             canonical fixture
│   │   └── sources.yaml             the AI-chapter reading list
│   ├── start-here/                  SPACE 1 — hand-authored (+ generated blocks between markers)
│   │   ├── .gitbook.yaml  SUMMARY.md  README.md
│   │   ├── how-to-use-the-plays.md  working-with-ai.md  prompting-techniques.md
│   │   ├── ea-plays-kit.md          ← generated from the kit's README + play map
│   │   ├── play-0.md  progressa.md  video-index.md   ← generated
│   ├── kp1/                         SPACE 2 — fully generated, committed
│   │   ├── .gitbook.yaml  SUMMARY.md  README.md  your-country-workbook.md
│   │   └── module-1/README.md  module-1/1-1.md … module-5/5-6.md
│   └── kp2/                         SPACE 3 — same, + build-pack/ (generated from the pack's own docs)
├── KP1-GEA/
│   ├── build_kp1_moduleM_vXX.js     (+ six aiTip fields)
│   └── gitbook/
│       ├── kp.yaml                  modules → build script, persona, blurb, intro copy
│       ├── videos.yaml              kp_intro, modules[n].intro, subtopics["1.1"] …
│       └── plays/1.1.md … 5.3b.md   sidecars (front matter + example/annotations/what-next)
├── KP2-GIF/  (same shape)
└── ITU-Giga-KP-Plugin/skills/kp-gitbook-render/     ← the renderer, as a kit skill
    └── scripts/render_site.py  gitbook_qa.py
```

Delete when the new render reproduces the demo: `KP1-GEA/gitbook-demo/{module1.py, fixture.py, play0.py, render.py, publish_prep.py, out/}` and the bundle copies in `KP1-GEA/gitbook/`. Keep the demo's `.md` notes (plans, reviews) — move them to `KP1-GEA/docs/`.

### 10.3 Publishing: Git Sync instead of API change requests

The demo was published through the API (`publish_prep.py` + `updateChangeRequestContent` batches), which is why ref-links only resolved inside one batch and `{% expandable %}` was dropped. With **GitBook Git Sync** each space is bound to the repo, branch `main`, and a *project directory* (`gitbook/start-here`, `gitbook/kp1`, `gitbook/kp2` — GitBook's monorepo option). A push is a publish; relative `.md` links resolve natively; `SUMMARY.md` is the page tree, so page order and nesting are in git too. `publish_prep.py` and `ids.json` go away. Git Sync is wired in the GitBook UI, once per space; the MCP cannot do it.

Two consequences to accept: the generated `.md` files are **committed** (Git Sync reads files, not scripts) — so the kit's "never hand-edit the .md" rule is enforced by CI, not by absence (§10.5); and cross-space links stay absolute URLs, resolved from a `site_base` in `kp.yaml`.

### 10.4 The renderer — `kp-gitbook-render`

`render_site.py --kp KP1-GEA` reads `kp.yaml`, parses each build script with the existing `bundle_to_md.py` parser (reuse `balanced()`/`renderSubtopic` extraction — do not write a second .js parser), merges `videos.yaml` and the sidecars, reads the kit's play map from a pinned checkout (`EA_PLAYS_KIT=../ea-plays-kit`, tag in `kp.yaml`), and writes `gitbook/kpN/`. Page functions carried over from the demo's `render.py`: subtopic (5 tabs), module, home, workbook, video index, Play 0, Progressa — plus the two new blocks from §3.4 and §4 (placeholder, tooltip). `--all` renders every KP and `start-here`.

Sidecar shape (`plays/1.1.md`):

```markdown
---
id: "1.1"
example_status: draft          # draft | run   (draft → the warning hint renders)
example_run: 2026-08-30        # date of the kp-play-run pass, if any
concept_override: false
---
## Example input
…
## Example output
…
## Reading the output
### 1. The Severe on duplicate registries is earned
…
## What next
…
```

A missing sidecar is legal: the page renders with the Prompt tab only and a "worked example not yet run" hint — that is how KP2's forty pages ship on day one.

`videos.yaml`:

```yaml
kp_intro: null                       # null → placeholder block
modules:
  1: {intro: null, playlist: null}
subtopics:
  "1.1": {url: https://youtu.be/4uK-9qHofqw, runtime: "~4 min"}
  "1.2": {url: null}
```

### 10.5 Gates — extend what exists, add one

- `kp-bundle-qa`: the six new `aiTip` fields are required; `artefact` must match the kit's play map; `skill` and `skillAlso` must ship in the kit at the pinned tag; the practice-box substring rule already covers `io`.
- `gitbook_qa.py` (new, in the renderer skill): every relative link resolves; every play id in `plays/` and `videos.yaml` exists in a build script; `feeds` agree with the kit's workbook chain (same check the kit runs on itself); every URL in `sources.yaml` and every subtopic `Sources` line answers (the `cite-or-discard` rule, as a script); no forbidden strings on learner pages.
- **Regenerate-clean**: CI runs `render_site.py --all` and fails on `git diff --exit-code gitbook/`. That is what makes a committed generated file safe.
- The kit's own CI already checks `play-map.json` ↔ README ↔ chain; pin the kit tag in `kp.yaml` and bump it deliberately.

### 10.6 Across the four KPs

Nothing above is KP1-specific. Each KP is `KPn/build_*.js` + `KPn/gitbook/{kp.yaml, videos.yaml, plays/}` and appears as `gitbook/kpN/`; `start-here` is shared and rendered once. KP2 adds two things the renderer must allow for: a `build-pack/` page group (rendered from `KP2-build-pack/README.md`, `runbook.md`, `exercises.md` with a header line, not copied by hand) and a per-play `files:` list in the sidecar for Modules 4–5 so the tooltip can point at the config the play generates. The artefact prefix (A/B/…) is a `kp.yaml` field. KP3 and KP4 need only their folder and a Git-Sync binding.

### 10.7 Order of work

1. `kp.yaml`, `videos.yaml`, six `aiTip` fields in the KP1 Module 1 build script; `kp-bundle-qa` extended. *(half a day)*
2. `kp-gitbook-render` from `render.py` + `bundle_to_md.py`'s parser; render KP1 Module 1 from the build script + eight sidecars lifted from `module1.py`; diff against `gitbook-demo/out/` until the only differences are the two new blocks. *(1–2 days — this is the port the demo README asked for)*
3. `gitbook/start-here/` hand pages; `_shared/sources.yaml`; `gitbook_qa.py` with the link check. *(1 day)*
4. Git Sync on the demo org: three spaces bound to `gitbook/start-here|kp1|kp2`. Retire the API path. *(an hour, UI)*
5. KP1 Modules 2–5: add the six fields to four build scripts, render with placeholders and no sidecars; then KP2 the same way (after the `gif-*` decision, §7.3). *(1 day)*
6. Delete `gitbook-demo/` code and `KP1-GEA/gitbook/` copies; move the notes to `docs/`. *(minutes)*
7. Sidecars fill in module by module as `kp-play-run` passes happen; `videos.yaml` fills in as videos land. Neither needs a code change.

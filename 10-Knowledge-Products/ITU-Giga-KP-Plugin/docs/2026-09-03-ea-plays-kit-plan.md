# Plan: build the `ea-plays-kit` — the "with the kit" skill layer for the KP1 AI plays

**Status:** draft (v2) · **Date:** 2026-09-05 (v1 2026-09-03) · **Owner:** Arne
**Source:** `KP1_AI_Tips_Skill_Review_2026-09-02.md` (the review this plan implements — read it first; this plan does not repeat its reasoning).
**Scope:** a new public repo `ea-plays-kit` holding one Claude Code plugin `ea-plays` with twelve skills (eight new, four extensions of the six existing account skills), a shared trusted-source policy, a play-fixture test set, and the packaging for Claude Code, Cowork and the Claude app. Plus the small repoints in the KP1 GitBook and build scripts listed in §3.9. The kit is self-standing: it names no upstream framework or repo, and nothing in it depends on one. The plays on GitBook, the video bundles and the `itu-giga-kp` production kit do not change.

## 1. Goal and non-goals

**Goal.** A learner who has installed the kit and runs any KP1 play gets what the Gambia test runs got with skills loaded — sourced country context instead of "paste 1–3 paragraphs", building-block status that is a fact rather than "note if unknown", comparator cards whose URLs survive a check, governance documents that cite the real statute — with every claim carrying a URL, tier and date, and every artefact carrying a provenance header so it can feed the next play. The kit installs in two lines, versions against the GitBook, and lives in its own repo so the install command in every video description stays valid for years.

**Non-goals.** No change to the play prompts on GitBook (they remain the canonical, tool-neutral artefact). No autonomous chaining — every skill returns to the learner between plays. No KP2–4 skills yet; the layout leaves room for them. No re-authoring of the six existing account skills beyond the four named extensions. No `.plugin` binaries in git.

## 2. Contract we must preserve

| Consumer | Depends on |
|---|---|
| The play pages (GitBook, `gitbook-demo/render.py`) | Play ids `1.1`–`5.7`; the "With the kit" table naming one skill per play; the A0…An workbook artefact numbering; the four-part prompt shape. Skill names must be stable once the first GitBook page cites them. |
| The country workbook chain | Text in, text out: every skill's output is a markdown table or headed text in the chat, never a file, chart or image, so the next play can consume it. Every output opens with the provenance header (§3.4). Posts, not names. |
| The existing six account skills | `country-context-data`, `paera-assessor`, `bdat-assessor`, `ea-lifecycle-method`, `govstack-cost-estimator`, `bb-sourcing-researcher` keep their names and trigger descriptions where carried over, so users who already have them installed are not surprised. The four extensions ship under **new** names (`country-context-pack`, `paera-reference-check`, `ea-method-runner`, `ea-cost-case`) and leave the originals untouched. |
| The `itu-giga-kp` kit | `kp-bundle-qa` and `kp-citation-verify` grep the KP1 bundles; the bundles gain only the `play.skill` / `play.input` schema fields already proposed, rendered into the "With the kit" line. No forbidden-string or numbering impact. |
| ITU calibration | Plays run bare in any assistant; the kit is optional. Every skill description and the README say so. |

Consequences:

1. **Skill names are frozen at v0.1.0.** Rename before the first GitBook page cites them, never after.
2. **Self-contained skills.** A learner may upload one skill folder to the Claude app with no plugin root, so `shared/` is *copied* into each skill's `references/` at package time; nothing in a SKILL.md depends on `${CLAUDE_PLUGIN_ROOT}` existing.
3. **Cite-or-discard is not optional.** Any skill that emits a claim with a URL runs the verification step before returning; an unsupported claim is dropped or marked *unverified — learner to confirm*, never kept silently.

## 3. Design

### 3.1 Repo and plugin layout

```
ea-plays-kit/
├── .claude-plugin/marketplace.json          name: ea-plays-kit · plugins: [ea-plays]
├── plugins/ea-plays/
│   ├── .claude-plugin/plugin.json           name: ea-plays · version · description · author · keywords (only file here)
│   ├── README.md                            install in two lines · play → skill table · "plays run bare" line
│   ├── LICENSE-CONTENT (CC-BY-4.0) · LICENSE-CODE (MIT)
│   ├── shared/
│   │   ├── source-tiers.md                  the four tiers + the verification loop (review §2)
│   │   ├── provenance-header.md             the header every output opens with (§3.4)
│   │   ├── workbook-chain.md                A0…An numbering; which play consumes which artefact
│   │   └── output-contract.md               text in / text out · posts not names · strip reasoning · record clarifying answers
│   ├── skills/<name>/SKILL.md [+ references/ + scripts/]   fourteen folders (§3.2)
│   └── scripts/
│       ├── sync-shared.sh                   shared/*.md → skills/*/references/ (idempotent; run before validate/package)
│       └── package.sh                       sync → claude plugin validate → skills-standalone.zip → (Cowork .plugin via cowork-plugin skill)
├── tests/plays/<play-id>/                   input.md (Progressa fixture) · expected.md (shape, not wording) · gambia.md (real-run excerpt, names stripped)
├── CHANGELOG.md
└── README.md
```

### 3.2 The skills — one row each, build order = row order

| # | Skill | Kind | Serves plays | Reads | Returns | Sources it must hit (tier) |
|---|---|---|---|---|---|---|
| 1 | `cite-or-discard` | new, cross-cutting | 1.5, 1.8, 3.2, 4.2 (audit mode), 5.1, 5.4, 5.5, 5.7; called by 3, 6, 7 | any output with claims + URLs; or an input pack (audit mode) | verification table: claim · URL · tier · supported / partly / not · passage · keep / downgrade / drop | WebFetch on every URL; `source-tiers.md` |
| 2 | `country-context-pack` | extends `country-context-data` | Play 0 → feeds 1.1–1.8, 2.1–2.5, 4.1 | country name (+ sector) | A0 pack, seven sections each tagged with the plays it feeds; date-stamped | World Bank, ITU DataHub, UN EGDI, national budget docs, donor project docs (PADs/ICRs) (T1); DIAL/ADLI, ID4Africa (T2) |
| 3 | `bb-landscape-check` | new | 2.7, 4.4, 4.5, 4.7, 5.3, 5.6, 3.5 | country | BB status register: block · live/pilot/planned/none · operator · coverage · URL · tier · date | ID4D, MOSIP deployments, NIIS X-Road map, GovStack engagements, central-bank payment pages, UNICEF CRVS, national G-cloud pages (T1/T2) |
| 4 | `ea-institution-mapper` | new | 1.2, 1.6, 2.4, 2.5, 4.1, 4.8, 5.3 | country + sector | A5 bodies register (mandate + instrument, systems, registries, head post, 7-type PAERA A1.2 class + confidence + hybrid flag); roles register with confirmed/partial/gap tags; pre-filled 4.1 canvas | official portals, establishing acts, national strategies, PADs, ID4D/CRVS assessments, Giga (T1/T2) |
| 5 | `ea-legal-context` | new | 1.7, 3.4, 2.3, 2.4, 4.2 | country | legal register: instrument · citation · status · regulator created · the one line that matters for EA; ends with legal-counsel flag | national gazette / law portal (T1); UNCTAD Cyberlaw Tracker, DLA Piper DP handbook, ID4D diagnostics, OGP plans (T2) |
| 6 | `ea-comparator-evidence` | new | 1.8, 5.1 → 5.4, 5.7 | A0 characteristics one-liner | 3–5 comparator cards, ≥1 contested case with both sides, recurring-elements synthesis; self-runs #1 | published national EA frameworks, UN EGDI, WB GTMI, OECD DGI (T1); peer-reviewed cases (T1); named journalism for contested cases (T3) |
| 7 | `ea-cost-case` | extends `govstack-cost-estimator` | 1.3, 5.4 | A0 programme list | per-programme table + 5-year country total, assumption block first, benchmark sources named; text tables only | GovStack CBA material, ID4D cost models, published X-Road operating costs, WB project cost tables (T1/T2) |
| 8 | `paera-reference-check` | extends `paera-assessor` | 1.5, 2.2, 2.3 | a draft model / initiative list / principle | conformance table against full Annex 2; foundation → PAERA-section map; notes where the video subset was applied | PAERA v1.0 text embedded in `references/`; re-reads paera.govstack.global when version differs |
| 9 | `ea-method-runner` | extends `ea-lifecycle-method` | 4.2–4.7, 2.6, 4.3, 4.8, 5.3, 5.6 | A-numbered artefacts from the workbook | the six deliverables with provenance headers; calls #3 at sourcing/target/gate, #1 at Discovery-brief audit | none directly — grounding is the five-phase method as taught in Module 4, carried in `references/` |
| 10 | `ea-governance-drafter` | new, reference-grounded | 1.6, 1.7, 3.1, 3.3, 3.4, 3.5, 3.6, 3.7, 4.7, 5.2 | roles register (#4), legal register (#5), BB register (#3) | ToR · RACI · repository schema · update policy · gate checklist · scorecard · risk register | the kit's own document templates in `references/` (ToR, RACI, repository schema, update policy, gate checklist, scorecard, risk register — written from the Module 1, 3 and 5 scripts and the decision-log convention); 2–3 published real exemplars per document type (T1) for illustration only |
| 11 | `ea-tool-evaluator` | new, narrow | 3.2 | 2–4 candidates + requirements | comparison table on licence · export formats · ArchiMate certification · metamodel extensibility · pricing; plus an export-test script | OSI, Open Group tool register, vendor docs, DPGA registry (T1/T2) |
| 12 | `ea-open-learning-catalogue` | new, small | 5.5 | team size + backgrounds | learning sequence with URL + *checked on* date per item; paywalled/stale flagged | PAERA site, GovStack, ITU Academy, DPGA, KP playlists/GitBook, WB OLC (T1) |
| 13 | `bdat-assessor` | carried over unchanged | 2.1, 2.5, 2.6 | — | — | — |
| 14 | `bb-sourcing-researcher` | carried over unchanged | 2.7, 4.4 (product options) | — | — | — |

The four originals that were extended (`country-context-data`, `paera-assessor`, `ea-lifecycle-method`, `govstack-cost-estimator`) are committed in the baseline tag (§4, step 0) but **not** shipped in the plugin, to avoid two skills competing for the same trigger. Their `references/` are inherited by the extension.

### 3.3 SKILL.md shape (all twelve)

```
---
name: <skill>
description: >-  trigger written in the learner's words: the play numbers it serves, the artefact
                 names, the questions a learner would type ("is the national ID live", "draft the
                 Board ToR"), and the sources it reads. ≤ 1,500 chars.
---
## What this skill does            two sentences; the play(s) it serves; "runs bare without it, better with it"
## Inputs                          which A0 section / earlier artefact; what to do if missing (run Play 0 first)
## Procedure                       numbered; where each step queries which source (by tier); where cite-or-discard runs
## Output contract                 the exact table/headings; provenance header first; text only; posts not names
## Safeguard handed back           the tip's own safeguard, restated as the learner's next action
## References                      files in references/ loaded on demand (source list, API notes, PAERA annex, TK templates)
```

`allowed-tools: WebSearch WebFetch Read` on every skill that hits the web; `disallowed-tools: Write` on all of them (text in the chat, never a file — this is the fix for the 1.7 `.docx` and 1.4 screenshot drift).

### 3.4 Provenance header (every output)

```
> **Artefact** A6 — Roles register · **Country** The Gambia · **Sector** Education · **Built** 2026-09-03
> **Skill** ea-institution-mapper v0.1.0 · **Consumed** A0 §1, A0 §6 · **Feeds** 1.6, 1.7
> **Sources** 4 × Tier 1, 2 × Tier 2, 0 × Tier 3 · **Unverified lines** 1 (marked ⚠)
```

Defined once in `shared/provenance-header.md`; `tests/` checks its presence and field set on every fixture run.

### 3.5 Shared reference sync

`scripts/sync-shared.sh` copies `shared/*.md` into `skills/*/references/` and exits non-zero if any copy differs from the source after the copy (guards hand-edits in the wrong place). `package.sh` calls it first; CI (a GitHub Action running `sync-shared.sh --check` and `claude plugin validate --strict`) fails the PR if a skill's copy has drifted.

### 3.6 Test fixtures

One folder per play under `tests/plays/`. `input.md` is the Progressa fixture (from the `gitbook-demo/fixture.py` data and the Module 4 scripts — one canonical Progressa page, also the input to "mirror the Progressa example" plays). `expected.md` states the *shape*: headings, table columns, provenance fields, the safeguard line — not wording. `gambia.md` is the real-run excerpt from the 30 Aug tests with office-holders' names replaced by posts; it is the comparison baseline for "did the skill do at least what the bare play did with skills loaded". `skill-creator`'s eval runner drives these.

### 3.7 Packaging targets (one source tree, three outputs)

| Target | How | Attached to |
|---|---|---|
| Claude Code | `/plugin marketplace add alaponin/ea-plays-kit` · `/plugin install ea-plays@ea-plays-kit` | nothing — pulled from the repo at the tag |
| Cowork | `cowork-plugin` skill packages `plugins/ea-plays/` → `ea-plays-v0.1.0.plugin` | GitHub release asset (not committed) |
| Claude app, single skills | `package.sh` → `skills-standalone-v0.1.0.zip` (twelve self-contained folders) | GitHub release asset |

### 3.8 Versioning

Semver in both manifests, bumped together. Patch: source-tier or reference fix. Minor: new skill, changed output contract, PAERA version change (named in CHANGELOG). Major: reserved for a workbook-chain change that breaks artefact numbering. Video descriptions and GitBook link the install command, never a release number.

### 3.9 Repoints outside the new repo (expected diff)

| File | Change |
|---|---|
| `KP1-GEA/gitbook-demo/out/how-to-use-the-plays.md` → GitBook | "With the kit" table grows from 5 rows to the §3.2 mapping; adds the install command; adds "plays run bare anywhere" |
| `KP1-GEA/gitbook-demo/render.py` + `build_kp1_module*_v0*.js` | `play.skill`, `play.input` fields rendered into each play page's "With the kit" line (schema already proposed in the 30 Aug synthesis §H) |
| KP1 video descriptions (all five modules) | one line: the install command |
| `ITU-Giga-KP-Plugin/README.md` | one line under "Installing": the learner kit is a separate repo |

## 4. Work breakdown

| Step | Deliverable | Depends on | Est. |
|---|---|---|---|
| 0 | Create `ea-plays-kit` repo; export the six account skills unchanged into `plugins/ea-plays/skills/`; both manifests; licences; tag `v0.0.1-baseline` | — | ½ day |
| 1 | `shared/` — `source-tiers.md`, `provenance-header.md`, `workbook-chain.md`, `output-contract.md`; `sync-shared.sh`; CI check | 0 | ½ day |
| 2 | Progressa fixture page + `tests/plays/` skeleton for all 37 plays (input + expected shape); Gambia excerpts for M1, M2, 3.2, M4 with names stripped | 0 | 1 day |
| 3 | `cite-or-discard` (both modes) + eval | 1, 2 | 1 day |
| 4 | `country-context-pack` (fork `country-context-data`, restructure output into A0 sections, add budget/PAD sources, posts-not-names) + eval on Progressa and The Gambia | 1, 2, 3 | 1½ days |
| 5 | `bb-landscape-check` + eval | 1, 2, 3 | 1 day |
| 6 | `ea-institution-mapper` (7-type taxonomy in `references/paera-a1-2.md`; status-tagged roles register) + eval | 3, 4 | 1½ days |
| 7 | `ea-legal-context` + eval | 3, 4 | 1 day |
| 8 | `ea-comparator-evidence` + eval (must include a contested case on The Gambia run) | 3, 4 | 1 day |
| 9 | Extensions: `ea-cost-case`, `paera-reference-check` (embed Annex 2 + A1.2 + §5.2 verbatim), `ea-method-runner` (workbook read/write, calls #3 and #1) | 3, 4, 5 | 2 days |
| 10 | `ea-governance-drafter` (TK templates into `references/`; exemplar list with URLs through #3) | 6, 7, 5 | 1 day |
| 11 | `ea-tool-evaluator`, `ea-open-learning-catalogue` | 3 | ½ day |
| 12 | **Smoke chain** Play 0 → 1.6 → 1.7 on Progressa, then on The Gambia, via `claude --plugin-dir` | 3–7, 10 | ½ day |
| 13 | `package.sh`; `claude plugin validate --strict`; Cowork `.plugin`; standalone zip; README; CHANGELOG; tag `v0.1.0`; GitHub release with assets | 12 | ½ day |
| 14 | §3.9 repoints; GitBook "With the kit" page; video-description line; `play.skill` / `play.input` in the build scripts | 13 | ½ day |

Roughly three working weeks. Steps 3–5 are the value core and could ship alone as `v0.1.0` if time is short; the rest is `v0.2.0`.

## 5. Acceptance

1. **Install works cold.** On a machine that has never seen the repo: the two-line install, then `/ea-plays:` shows fourteen skills. Cowork `.plugin` installs from Settings → Capabilities. A single skill folder from the standalone zip uploads to the Claude app and triggers.
2. **Every play maps.** All 37 play ids appear in the README table with exactly one primary skill; `tests/plays/` has a folder per id.
3. **Provenance on everything.** Every fixture run's output starts with the header and its field set is complete (automated check).
4. **Cite-or-discard bites.** Fed the 1.8 Gambia run (which contained docplayer and Medium sources), it downgrades those to secondary and finds or fails to find the primary; fed a fabricated URL, it drops the claim. Fed the 5.1 prompt on The Gambia, `ea-comparator-evidence` returns ≥1 contested case with both sides cited.
5. **BB status is a fact.** `bb-landscape-check` on The Gambia returns identity, payments, data exchange and CRVS rows each with a URL that, opened, states the status the row claims.
6. **No drift.** Across the smoke chain no skill returns a file, image or chart; no real office-holder's name appears in any output; no model reasoning precedes a table.
7. **Not worse than bare.** For 1.1–1.8, 2.1–2.7, 3.2 and 4.1–4.8, the skill-backed Progressa output contains every section the `expected.md` shape lists, and the Gambia output is at least as specific as `gambia.md` on a side-by-side read.
8. **Validate clean.** `claude plugin validate --strict` passes; `sync-shared.sh --check` passes; CI green on the tag.

## 6. Risks and open questions

- **Source availability drifts.** Registries move (ID4D datasets, NIIS map URL) — mitigated by `source-tiers.md` naming the *organisation*, `references/` naming the URL, and a quarterly `ea-open-learning-catalogue`-style link check on the source list itself.
- **WebFetch blocked on some government portals.** `cite-or-discard` must report *could not fetch* as its own state, distinct from *not supported*, and the learner verifies by hand. Do not let it downgrade a claim because a site refused the fetch.
- **Trigger competition.** Twelve descriptions in one plugin plus the learner's own account skills; `ea-governance-drafter` and `ea-method-runner` overlap on 4.7. Decide: 4.7 → `ea-method-runner` (it holds the chain), `ea-governance-drafter` only when there is no workbook. Write that into both descriptions.
- **The seven-type taxonomy vs the video's five.** `ea-institution-mapper` will classify bodies as Horizontal System / Public Ecosystem that the play pages never mention. Resolution: the skill emits the full type and, in brackets, the nearest teaching type; the "How to use the plays" page gets one paragraph on the mapping.
- **ITU tool-neutrality.** Still an open calibration item. The README line and the "plays run bare" sentence in every description are the mitigation; if ITU objects to naming Claude, the GitBook page links the repo without naming the tool in the play text.
- **Licence of embedded PAERA text** in `paera-reference-check/references/`. Confirm PAERA v1.0's licence permits verbatim annex excerpts; otherwise reference sections by number and re-read the site at run time.
- **Which account skills are "the originals".** The synced copies in the Claude app are the only source; confirm with Arne that no newer local versions exist before step 0 tags the baseline.
- **Open:** one plugin or per-KP plugins from the start? Plan says one; revisit when KP2 skills are drafted (a `plays-core` split then is a marketplace.json edit, not a rename).

## 7. Rollback

Nothing outside the new repo changes until step 14, and step 14 is five one-line repoints. Reverting means deleting the "With the kit" rows and the install line; the plays themselves are untouched throughout. Within the repo, `v0.0.1-baseline` is the six skills exactly as they were exported.

## 8. Review log

| Date | Reviewer | Outcome |
|---|---|---|
| 2026-09-03 | — | v1 drafted from the 2 Sep review; awaiting Arne's read |
| 2026-09-05 | Arne | v2: kit made self-standing — repo renamed `ea-plays-kit`, marketplace `ea-plays-kit`, plugin stays `ea-plays`; all references to the upstream framework repo, its toolkit template ids and its plays catalogue removed; governance templates and method grounding now carried inside the kit's own `references/` |

## 9. Implementation log

Repo: `~/Documents/Dev/ea-plays-kit`, branch `main`.

| Step | Commit | Date | Note |
|---|---|---|---|
| 0 | `d1873b9`, tag `v0.0.1-baseline` | 2026-09-05 | Six account skills exported from the `~/Downloads/*.skill` archives (May–Jul 2026) — confirmed with Arne as the originals. `country-context-skill.skill` contains `name: country-context-data`. |
| 1 | `a2774a7` | 2026-09-05 | `shared/` ×4, `sync-shared.sh` (+`--check`), CI. A0–A8 frozen; **A9–A31 defined here** for Modules 2–5. |
| 2 | `a2774a7` | 2026-09-05 | `tests/progressa.md` as one canonical A0 pack; 38 fixture folders (37 plays + Play 0); `tests/play-map.json` as the single source of truth; `check_fixtures.py`. |
| 3–7 | `c09f6dd` | 2026-09-05 | `cite-or-discard`, `country-context-pack`, `bb-landscape-check`, `ea-institution-mapper`, `ea-legal-context`. `country-context-data` retired from the shipped plugin. |
| 8–11 | `6b478eb` | 2026-09-05 | `ea-comparator-evidence`; the three extensions (the other three originals retired); `ea-governance-drafter`, `ea-tool-evaluator`, `ea-open-learning-catalogue`; plugin README play table. |
| 12 | — | 2026-09-05 | Partial. All 14 skills load via `claude --plugin-dir`. Play 1.6 run on Progressa: provenance header first with all nine fields, text only, posts not names, no leaked reasoning, and chain discipline fired unprompted — it named A4/A5 as missing rather than inventing them. The full Play 0 → 1.6 → 1.7 chain on **The Gambia** needs an interactive session with live web access; not run. |
| 13 | `87385a8` | 2026-09-05 | `package.sh`; both manifests at 0.1.0; `dist/ea-plays-v0.1.0.plugin` (537K) and `dist/skills-standalone-v0.1.0.zip` (242K) built and verified — a single skill folder unzips with all four shared references beside its own. |
| 14 | uncommitted, `geatdm-framework` | 2026-09-05 | `module1.py` gains `play.skill`/`play.skill_also`; `render.py` renders a **With the kit** line per play and the how-to table grows 5 → 14 rows with the install command and "the plays run bare anywhere"; all five `build_kp1_module*.js` gain `play`/`input`/`skill`/`skillAlso` on every `aiTip` (37 tips) plus a `kitLine()` renderer — `node --check` clean on all five; the kit line added to both video-description templates; the learner-kit pointer added to `ITU-Giga-KP-Plugin/README.md`. **Left uncommitted for review**; `gitbook-demo/` is untracked in that repo anyway. |

### Deviations from the plan, and why

1. **`skill-creator`'s eval runner (§3.6) was not used** — it is not available in this
   environment. `claude plugin eval` is the native equivalent and exists, but 38 LLM-graded
   cases is a long, paid run for a v0.1.0. Instead `tests/check_fixtures.py` is the one
   runnable check, and it guards acceptance 2, 3 and 8 mechanically. Eval cases are the
   obvious v0.2.0 addition.
2. **`gambia.md` exists for Module 1 only** (8 of 37). The four raw test documents from
   30 Aug are in no repo; the 30 Aug synthesis is the only surviving record and its per-play
   table covers Module 1. `tests/README.md` says so and says how to close it.
3. **The PAERA annex is referenced, not embedded** (§3.2 row 8, §4 step 9 asked for it
   verbatim). §6 flags the licence as unconfirmed and names this as the fallback; it also
   means the check runs against the current text rather than an ageing copy. Embedding it
   is a minor bump once the licence is confirmed.
4. **No `cowork-plugin` skill was needed** — the existing `.plugin` files are stored zips,
   so `package.sh` builds one in a line.
5. **§3.9's `.js` repoint** was read as the bundle's `aiTip` block, since the play *pages*
   are rendered by `render.py` and the `.js` files render the video script bundle. Both got
   the fields.

### Open, carried forward

- Acceptance **4, 5 and 7** need live runs on The Gambia — cite-or-discard against the 1.8
  docplayer/Medium sources, the BB register's four rows, and the side-by-side against
  `gambia.md`. All three are interactive-session work.
- Acceptance **1**'s Cowork and Claude-app install paths are built and structurally verified
  but not installed on a clean machine.
- `build_kp1_module*.js` cannot run here — `docx` is not installed. Pre-existing; the
  syntax checks pass.

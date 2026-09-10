# KP1 GitBook — implementation plan for the 7 Sep review fixes

Source review: `10-Knowledge-Products/KP1-GEA/KP1_GitBook_Review_2026-09-07.md` (findings A1–A6, B1–B6, C, D, E).
Renderer in scope: today `10-Knowledge-Products/KP1-GEA/gitbook-demo/render.py` → `10-Knowledge-Products/gitbook/`; after WP0 the same code at `ITU-Giga-KP-Plugin/skills/kp-gitbook-render/scripts/` (structure draft §10.4), and `gitbook-demo/` is deleted.

---

## 1. Goal and non-goals

**Goal.** Every finding in the review is closed by a change to a *source* — `render.py`, `module1.py`, `fixture.py`, `bundles.py`, `play0.py`, `_shared/sources.yaml` or the kit's `play-map.json`, all living in `kp-gitbook-render/scripts/` after WP0 — after which `python3 render.py && python3 gitbook_qa.py` regenerates all 55 pages clean. No page under `gitbook/` is edited by hand (the video-index page's own rule).

**Non-goals.** No change to the ITU-signed `.js` build scripts' narration (`scriptBeats[].text`) — the concept-text findings are handled in the renderer, not by re-writing the scripts that the decks and voice-overs are cut from. No `kp-play-run` pass on Modules 2–5 in this plan; WP5 only builds the procedure and the sidecar hook that the pass writes into, and runs it once on 1.3 as the proof. No KP2 pages. No PAERA re-verification beyond the anchor check in WP6.

---

## 2. What the repo looks like today — constraints that shape the edits

**One renderer, four sources.** `render.py` renders Module 1 from hand-authored Python (`module1.py`: concept, play, `example_input/output`, `annotations`, `what_next`) and Modules 2–5 from the `.js` build scripts through `bundles.py`, which takes concept = the `scriptBeats[].text` joined, and play kind / artefact / skill / consumes from `ea-plays-kit/tests/play-map.json`. So a Module 1 fix is a data edit; a Module 2–5 fix is a renderer rule or a play-map edit. Three review findings (B1, B2, B4) are template strings in `render.py` and fix everywhere at once.

**The recap line has a hook.** Every Module 2–5 subtopic's closing recap is the `text` beat that follows the cue `Title: 'In one sentence'` (6/7 in M2, 7/7 M3, 8/8 M4, 6/6 M5). `bundles.load_module` can drop that beat without touching the script. Module 1's concept is hand-derived and has no recap beat.

**Two `In production`/`Published` sources.** `render_home` prints `**Published**` for every module in `PUBLISHED` (env `KP1_PUBLISHED`, default all five), and `render_start_here` has "Module 1 is published" hard-coded. The status needs to come from one place (WP3).

**`kp-play-run` does not exist.** It is named on 28 pages, in `gitbook-demo/README.md` and in the structure draft §10, but there is no such skill in `ITU-Giga-KP-Plugin/skills/` or the kit. Until it is real the pages should not name it (B3), and the worked-example pass needs a written procedure (WP5).

**The kit's chain is richer than what the pages read.** `bundles._link_feeds` derives every Module 2–5 "This artefact feeds" line from `play-map.json` `consumes`. But the kit's checked source is `plugins/ea-plays/shared/workbook-chain.md`, and `play-map.json` has drifted from it for **seven plays** (2.5 lacks A10; 3.1 lacks A17; 3.5 lacks A18; 4.1 lacks A13; 4.4 lacks A15; 4.7 lacks A15 and A7; 3.2 has free text). The "dead ends" on 2.2 and 2.7 (review B6) are that drift, not missing links: the chain already routes A10 → 2.5 and A15 → 4.4, 4.7. `check_fixtures.py` checks consumes↔feeds *inside* the chain file only; nothing compares the map to the chain.

**The kit's Progressa is canonical on facts, and it says the PLR does not exist.** `ea-plays-kit/tests/progressa.md` is the one tagged fixture (kit plan `2026-09-05-fixture-separation.md`); its §6 row reads *"Progressa Learner Registry (PLR) — Intended single list of learners — none, not started — planned"*, and the kit plan explicitly reverted a skill that modelled the PLR as an operating body: *"the absence of PLR is the sector problem."* The kit fixture also already carries **§7 Legal and policy list**, the sector-problem paragraph and the initiatives list, all in Simplified Technical English (v0.2.0). `gitbook-demo/fixture.py` is an older wording: §2 and §4 match, §1/§3/§5 differ materially (similarity 0.60 / 0.44 / 0.40). The wording difference is deliberate (D7); the fact differences are the review's A5.

**The kit already has the worked-example harness.** `tests/plays/<id>/input.md` is each play's prompt with the fixture section named; `expected.md` is the output *shape* (provenance header, artefact, safeguard, contract checks) that `check_fixtures.py` and a kit run are judged against. That is most of `kp-play-run`; what is missing is the bare run (no skill loaded — the GitBook example must be the bare result), the annotation step and the sidecar.

**The structure draft §10 plans a port** (`kp-gitbook-render`, per-play sidecars, `videos.yaml`). Everything below is written to survive that port: template-string changes go in one function each, data changes go in the data, and WP5's sidecar format is the §10.2 one.

---

## 3. Decisions (to take before WP1; defaults shown)

| # | Decision | Default | Why it matters |
|---|---|---|---|
| D1 | Fix in `gitbook-demo/` now, or wait for the §10.4 port? | **Now.** Every change is a function or a data field the port carries over. | The Giga move is gated on these fixes; the port is not scheduled. |
| D2 | A5 — does the Progressa Learner Registry exist? | **No — follow the kit.** PLR is planned, not started; the NLR programme creates it. The GitBook `render_progressa` paragraph, 2.5's concept page and the KP2 build pack are the three places that drift and get a note; the kit fixture is not touched. | The kit already took this decision (fixture-separation plan, 5 Sep) and reverted a skill that said otherwise; two canonical answers would be worse than either. 2.5's narration is signed script → concept note on the page + transmittal item, not a script edit. |
| D3 | A6 — renumber A8 or annotate? | **Annotate.** One line on the Module 2 README and the workbook. | Renumbering touches `play-map.json` (public contract), every kit skill reference, the workbook chain and the practice boxes already cut into the decks. |
| D4 | A2 — chained-session convention, or extend each Example input? | **Convention** on *How to use the plays*, plus a per-play `example_context` field that lists the chain artefacts the run had in context (rendered as one line under "The bracketed context…"). | Honest, cheap, and gives WP5's procedure a field to fill. |
| D5 | Module status vocabulary | Three states per module, from one dict: `prompts` (concept + prompt live) · `examples` (worked examples run) · `videos` (embeds live). Home table shows the highest reached state; Start-here card shows KP-level summary. | Closes A3 and B5 with one source. |
| D6 | Recap beat on Modules 2–5 concept pages | **Drop it in the renderer** (bundles.py), keep the script. | E: the Single-message quote already carries it. |
| D7 | Which Progressa text does the GitBook show? | **The site's own wording** (`fixture.py` + `render_progressa`), kept stylistically in the site's voice — not the kit's Simplified-Technical-English `tests/progressa.md`. The two are aligned on **facts** (bodies, systems, numbers, status), not on text; a small facts check guards the alignment (WP4.4). | The kit text is written for a skill to read; the site text is written for a learner. Two voices are acceptable; two sets of facts are not. |

---

## 4. Work packages and order

| WP | Closes | Touches | Size |
|---|---|---|---|
| WP0 Move the renderer, delete `gitbook-demo/` | the §10.7 step 6 the structure draft planned | new `ITU-Giga-KP-Plugin/skills/kp-gitbook-render/scripts/` ← `render.py`, `bundles.py`, `module1.py`, `fixture.py`, `play0.py`, `gitbook_qa.py`; `gitbook-demo/` removed | ~1 h |
| WP1 Data fixes, Module 1 | A1, A2 (1.2, 1.7), A4, D-uncited sources | `module1.py`, `play0.py` | ~1 h |
| WP2 Renderer template fixes | B1, B2, B3, B4, B6 (minutes), E (recap), C (video-index note) | `render.py`, `bundles.py` | ~2 h |
| WP3 Status model | A3, B5 | `render.py` (`render_home`, `render_start_here`, `render_howto`, `render_module_page`, `render_videos`) | ~1.5 h |
| WP4 Progressa page from the kit fixture | A5, C (progressa §7 tab), 2.5 naming, D7 | `render_progressa`, `bundles.py` (concept_note), KP2 build pack (note only); kit untouched | ~1.5 h |
| WP5 Chain and worked-example procedure | A6, B6 (play-map drift), A2 (procedure), the `kp-play-run` naming | kit: `play-map.json` + `check_fixtures.py` (patch 0.2.3); `bundles.py` (feeds from chain, sidecar hook); new `docs/kp-play-run.md` | ~3 h + two play runs |
| WP6 Sources and anchors | C (dates), D (PAERA year, anchors) | `_shared/sources.yaml`, `module1.py` `sources` | ~1 h + PDF time |
| WP7 QA gate | prevents regression of A4, B1, B3, A3 | `gitbook_qa.py` | ~1 h |

Order: **WP0** first (so every later diff lands in the permanent home once) → **WP1 → WP2 → WP3 → WP7** (render, QA, commit — this alone makes the site consistent) → **WP4 → WP5 → WP6** → final render, QA, commit. WP1–WP3 are independent of each other and can be one sitting. Nothing goes to the Giga GitBook before WP6.

---

## 5. Work package detail

### WP0 — Move the renderer, delete `gitbook-demo/`

`gitbook-demo/` holds two different things: the renderer that still produces `gitbook/` (nothing else does — `kp-build-render/bundle_to_gitbook_md.py` is the docx twin, not the site) and the leftovers of the 30 Aug demo site (`out/`, `out/ids.json`, `publish_prep.py`, `_to_delete/`, the change-request notes in `README.md`). Only the second half is deletable.

1. Create `ITU-Giga-KP-Plugin/skills/kp-gitbook-render/` with a short `SKILL.md` (render + QA, one command) and `scripts/` holding `render.py`, `bundles.py`, `module1.py`, `fixture.py`, `play0.py`, `gitbook_qa.py`. Fix the three path assumptions: `ROOT` in `render.py`, `KP1` and the `bundle_to_md` import path in `bundles.py` (now a sibling skill: `../../kp-build-render/scripts`), `ROOT` in `gitbook_qa.py`. Keep `EA_PLAYS_KIT` as the env var.
2. Move the three notes that are still worth keeping — `2026-09-06-kp1-kp2-gitbook-structure-draft.md`, `KP1_Play_Tests_Synthesis_2026-08-30.md`, `KP1_AI_Tips_Skill_Review_2026-09-02.md`, `2026-09-03-ea-plays-kit-plan.md` — to `ITU-Giga-KP-Plugin/docs/`. The importer lessons paragraph from `gitbook-demo/README.md` goes into the new `SKILL.md`.
3. Delete `gitbook-demo/` (needs delete permission on the folder; otherwise `_to_delete/` one level up). `KP1-GEA/gitbook/` (the five script-bundle `.md` copies) goes with it — they are `bundle_to_gitbook_md.py` output and regenerate.
4. Render from the new location; `diff -r` against the committed `gitbook/` tree must be empty before anything else changes. That diff is WP0's acceptance.

### WP1 — Module 1 data fixes (`module1.py`, `play0.py`)

1. **A1 — 1.3 annotation 1.** Replace the first `annotations` tuple of subtopic 1.3 (`module1.py` ~line 51) with a note that catches the asymmetry. Draft:
   > *"The headline says break-even. The table says otherwise"* — Option (b) is priced with five years of platform run cost (1.5m); option (a) is priced with zero years of maintenance, although the same paragraph says bespoke components carry ≈15 %/yr. Add 5 × 0.6m to column (a) and it is ≈6.9m against ≈4.2m — the shared route wins by ~2.7m on these five programmes, not "from programme six". The model built a good structure and then compared a build cost with a total cost of ownership. That asymmetry is the first thing a finance official will find; find it first.

   Keep annotation 4 ("check the arithmetic yourself") and add one clause: *"— here it was the comparison, not the sums, that was wrong."* Do **not** edit `example_output`: the wrong headline is the teaching material.
2. **A2 — 1.2 and 1.7.** Add `example_context="A1 Fragmentation diagnostic was in the session above the prompt."` to 1.2 and `example_context="A1, A3 and A6 were in the session above the prompt."` to 1.7 (the model's own annotations name them). Add the field to every other Module 1 play as `None`. Rendering is WP2 item 6.
3. **A4 — "Discovery (Module 3)".** `module1.py` line 36 (`when=` of 1.1): → "Re-run it after Discovery (Module 4, play 4.2) with the real inventory…". `render.py` `render_play0` line ~912: → "Expect to add to it as Discovery (Module 4) replaces desk research…". Also check `render_workbook` line 851 `→ Module 3` on the Module 1 chain diagram: correct as is (A7 feeds 3.4), leave.
4. **D — uncited sources.** 1.2 `sources`: replace "TOGAF BDAT layering reference" with the TOGAF Standard, 10th Edition, Architecture Content chapter, with URL; 1.5 `sources`: "GovMarket" → `GovMarket — https://govmarket.govstack.global` (or whatever `cite-or-discard` confirms; drop if the URL does not resolve). Every entry in every `sources` list ends with a URL — WP7 checks this.
5. **Play 0 §5 hidden eighth prompt** (review C). In `play0.py`, either promote the "fuller country brief" sentence to a §5b box with its own prompt, or cut the sentence. Default: cut; §1–§7 already cover Modules 1–4.

### WP2 — Renderer template fixes (`render.py`, `bundles.py`)

1. **B1 — kind badge.** `KIND_BADGE`: drop the "Input needed: …" clause from all three help strings. The **Bring** line in the tooltip already carries the play-specific input.
2. **B2 — "With the kit" per skill.** Add a `SKILL_ADDS` dict (one line per skill, seeded from the `KIT_SKILLS` table's "What it adds" column so both stay identical — better: build the dict *from* `KIT_SKILLS` so there is one source) and use it in `tooltip()` and `kit_line()`:
   `**With the kit:** \`{skill}\` — {SKILL_ADDS[skill]}.{also} Optional: the prompt runs bare.`
   Fail loudly (`KeyError`) if a play names a skill the table does not list.
3. **B3 — placeholder tabs.** In `example_tabs()` (no-example branch): rename the tab to "Example on Progressa — coming" and rewrite the hint without the pipeline name: *"Worked example pending. The prompt above is final and runs today. The Progressa worked example, the annotated reading and the what-next notes are added when this module's examples are run (Module 1 shows the shape)."* In the has-example branch, replace "have not yet been through the `kp-play-run` and annotation steps" with "are drafts: generated for the demo site and not yet re-run under the worked-example procedure" — or, once WP5 lands, drive it from the sidecar's `example_status`.
4. **B3 — "What next" stub.** `derived_what_next()`: stop repeating the safeguard. New text: *"File the output as **A9** in your country workbook once you have worked it the way **Watch for** asks. A fuller what-next is added with the worked example."*
5. **B4 — A0 section names.** In `tooltip()`, expand `input_ref` through a lookup built from `play0.py`'s section list (`{"§1": "Digital-landscape brief", … "§7": "Legal and policy list"}`): `A0 §6` → `A0 §6 Public bodies, systems and registries`. Apply with a regex so `A0 §6, A5, A9, A12` expands only the A0 part.
6. **A2 — example context line.** In `example_tabs()` has-example branch, after "The bracketed context in the prompt was replaced with the following:", render `p.get("example_context")` as *"Also in the session: {…}. A bare run with only the input below will differ where the annotations say so."* when set.
7. **E / D6 — recap beat.** In `bundles.load_module`, while walking `scriptBeats`, skip the `text` beat that immediately follows a cue containing `Title: 'In one sentence'`. Log the count skipped per module; expect 6/7/8/6.
8. **B6 — minutes.** `render_start_here` "about fifteen minutes" and `render_module_page` "ten minutes" → one constant, `READ_ONCE_MIN = "about fifteen minutes"` (three pages) and the module-page line names the same two pages with "ten minutes"; simplest: make the module page say "fifteen minutes for the three Start-here pages".
9. **C — video-index closing line.** `render_videos` line ~1007: keep the mechanics sentence, drop "Nothing on the site is edited by hand." (author's note, not learner text) or move it to `gitbook-demo/README.md`.
10. **C — de-identification fallback.** `render_working_with_ai` meta-play hint: add one sentence after "never a public one": *"No local model? Do it by hand: the table the play asks for — removed item / category / placeholder — is a ten-minute checklist a person can apply before pasting."*
11. **C — Charlotin figure.** `render_working_with_ai` line ~588: "roughly two thousand court decisions" → "well over a thousand court decisions (the database is updated daily)".

### WP3 — Status model (`render.py`)

1. Add `STATUS = {1: "examples", 2: "prompts", 3: "prompts", 4: "prompts", 5: "prompts"}` with the ladder `prompts < examples < videos`, and derive it where possible: `examples` iff every play in the module has `example_input`; `videos` iff every subtopic has `yt`. `PUBLISHED` (env) stays as the "is on GitBook at all" switch.
2. `render_home` modules table — Status column becomes: *Prompts live* / *Worked examples live* / *Videos live*, with a legend line under the table: *"Prompts live — concept and play on every page, worked example pending. Worked examples live — Progressa run and annotated. Videos live — embeds on every page."*
3. `render_start_here` KP1 card and four-KP table: replace the hard-coded "Module 1 is published" with a summary computed from `STATUS`: *"Module 1 with worked examples; Modules 2–5 prompts live."*
4. `render_module_page`: add a one-line status hint under the video block when the module is at `prompts`: *"Worked examples for this module are pending — every prompt runs today."*
5. **B5** `render_howto`: "That is why every play page has a **Reading the output** tab…" → "That is why every *completed* play page has a **Reading the output** tab, and why it is the longest one." (The chapter is shared across KPs; it must not make module-level promises.)
6. `render_videos`: unchanged — `in production` is the per-video status and stays.

### WP4 — Progressa page, facts aligned to the kit (`render_progressa`, `fixture.py`, `bundles.py`; kit untouched)

1. **A5 / D2.** In `render_progressa`, the sector paragraph's PLR sentence becomes *"The Progressa Learner Registry (PLR) is the single list of learners the Education Sector Plan calls for — planned, not started; today three bodies keep their own."* Baseline keeps "no National Learner Registry". `fixture.py` `PROGRESSA_LANDSCAPE` already says "not yet started" — unchanged.
2. **2.5 concept note.** Per-subtopic `concept_note` field in `bundles.py` (rendered as an info hint above the concept when set), populated for 2.5: *"The bodies in this walkthrough are Progressa's: Ministry = MoEYS, Examination Authority = PNEA, Identity Authority = PNIA, Digital Government Authority = PDGA. The Learner Registry (PLR) is drawn as the **target** owner of the Learner domain — in the Progressa baseline it is planned, not started, and its absence is the sector problem Module 4 works on."* Log the 2.5 narration ("The Learner Registry is a state registry — the authoritative single source") as a KP1 v0.2 script erratum for the next transmittal.
3. **§7 tab** (2.3 consumes A0 §7). Add `PROGRESSA_LEGAL` to `fixture.py`, written in the site's voice from the **facts** in the kit's §7 table (Data Protection Act 2023; Public Procurement Act; e-Government Interoperability Framework 2021; Roadmap 2024–2030 draft; Education Sector Plan 2023–2028; Civil Registration Act; no e-transactions or access-to-information act), and render it as a §7 tab. Also add the sector-problem paragraph as the input 4.1 names, if not already on the page.
4. **Facts check, not text check.** Add `progressa_facts_check.py` (in the renderer skill) that extracts the fixed facts from both `fixture.py` and the kit's `tests/progressa.md` — the body acronyms (MoEYS, PNEA, PLR, PNIA, PDGA), the numbers (16.8m, 78 %, 71 %, 2018, 2024, 2025, USD budgets), and the PLR status word — and fails on any mismatch. Run it in WP7's gate. The kit's `check_fixtures.py` stays as it is.
5. **KP2 build pack.** One README note that the PNEA ← PNIA + PLR exchange is the *target-state* slice the NLR programme delivers; no content change.

### WP5 — Chain, numbering, and the worked-example procedure

1. **A6 / D3.** `render_module_page` for module 2 and `render_workbook`: one hint line — *"Artefact numbers follow the curriculum order in which the plays were first written; **A8** (comparator-country cards) is produced in Module 5, play 5.1."*
2. **B6 dead ends = play-map drift.** Do **not** invent new consumers. Two steps:
   - *Renderer:* `bundles._link_feeds` derives `feeds` from `workbook-chain.md`'s Feeds column (parse the artefact table; the chain is the checked source) instead of inverting `play-map.json` `consumes`. `tooltip()` **Bring** still reads `consumes` from the map. 2.2 then feeds 2.5; 2.7 feeds 4.4 and 4.7; no dead ends, no new edges.
   - *Kit patch (0.2.3):* align `play-map.json` `consumes` with the chain for the seven drifted plays (2.5 +A10; 3.1 +A17; 3.2 "A16, candidate list"; 3.5 +A18; 4.1 +A13; 4.4 +A15; 4.7 +A15, +A7) and add a `check_fixtures.py` check that every play's map `consumes` equals the chain's Consumes cell — the drift the structure draft §10.1 predicted, now caught. Patch, not minor: no artefact number, skill name or output contract changes. Note in `CHANGELOG.md` under 0.2.3.
   - Do this kit patch *before* the renderer step lands, so the GitBook's **Bring** lines (map) and **feeds** lines (chain) agree on the same day.
3. **`kp-play-run` naming.** After WP2 item 3 no page names it. The kit already supplies the harness — `tests/plays/<id>/input.md` (prompt + which fixture section to paste) and `expected.md` (output shape) — so the procedure is thin. Default for this plan: **procedure first**, at `KP1-GEA/gitbook-demo/docs/kp-play-run.md`; a `kp-play-run` skill in `ITU-Giga-KP-Plugin` is the follow-on once the procedure has run twice:
   - inputs: play id; `tests/plays/<id>/input.md` from the kit, with the fixture section it names pasted from `tests/progressa.md`; the chain artefacts already produced for Progressa in this module (recorded → `example_context`);
   - **bare run** in one assistant, no kit skills loaded — the site says the prompt runs bare, so the example must be the bare result; text in the chat. This is the GitBook example. A second run *with* the primary skill loaded is checked against `expected.md` and goes into the play's "With the kit" note as one line (provenance header shown), never as the example;
   - annotate: four `<details>` notes in the Module 1 pattern — earned / invented / missing / what the safeguard fired on — and a what-next that names the next play and the workbook id;
   - write the sidecar `KP1-GEA/gitbook/plays/<id>.md` in the §10.2 front-matter shape (`example_status: run`, `example_run: <date>`, `example_context`), which `bundles.load_module` reads if present (new: `_sidecar(sid)` merges `example_input/output/annotations/what_next/example_context` into the play dict) — so Modules 2–5 gain worked examples one file at a time with no code change;
   - re-render; the warning hint switches on `example_status`.
4. **Proof run.** Run the procedure once on **1.3** with the corrected reading (A1) as the acceptance case, and once on **2.1** to prove the sidecar path for a bundle-sourced module. Modules 2–5 in full are the next plan.

### WP6 — Sources and anchors (`_shared/sources.yaml`, `module1.py`)

1. Open each of the three flagged rows and fix the date to what the page shows today: UK Playbook "upd. Sep 2026" (confirm or correct — a future-looking date on a published KP is exactly what the chapter warns against); OECD "Sep 2025" vs URL `2025/06`; bump `verified:`.
2. 1.5 concept "PAERA … published in 2024": confirm against the PAERA v1.0 front matter; fix in `module1.py` if wrong.
3. PAERA anchors: with the PAERA PDF open, check the eight distinct anchors used across Modules 1–2 (§1.2, §1.3, §2.1, §2.3, §3.1.3, §3.3, §4.2.1/4.2.2, §4.5, §4.6 + Annex A1.2, §5.2, §5.4, Annex 2). Module 1 anchors live in `module1.py` `paera=`; Modules 2–5 in the `.js` `paeraAnchor` field — an anchor error there is a script erratum and goes into the next tightening transmittal, not a silent edit.

### WP7 — QA gate (`gitbook_qa.py`)

Extend the existing link check with forbidden-string and consistency checks over `gitbook/**/*.md`, exit 1 on any hit:

- forbidden strings: `kp-play-run`, `Discovery (Module 3)`, `Input needed:`, `Nothing on the site is edited by hand`, `brings the sourced input in and checks every claim` (the old B2 boilerplate);
- every `- ` line under `## Sources` on a play page contains `http` (WP1 item 4);
- the home-page Status column uses only the three WP3 words;
- every `**With the kit:**` line names a skill present in the kit page's table;
- `A0 §n` in a **Bring** line is followed by a section title (B4).

Wire it into `build_render.sh` (or the Makefile) so `render` always ends with `qa`.

---

## 6. Acceptance

| Finding | Done when |
|---|---|
| A1 | 1.3 "Reading the output" note 1 names the build-vs-TCO asymmetry and the ≈6.9m figure; note 4 kept |
| A2 | *How to use the plays* carries the chained-session convention; 1.2 and 1.7 show the "Also in the session" line |
| A3 / B5 | Home table, Start-here card and module pages all derive from `STATUS`; "Published" appears nowhere |
| A4 | grep `Discovery (Module 3)` = 0 |
| WP0 | `gitbook-demo/` gone; render from `kp-gitbook-render/scripts` reproduces the committed `gitbook/` tree byte-for-byte before WP1 starts |
| A5 / D2 / D7 | PLR is "planned, not started" on the Progressa page, in 2.5's concept note and in the KP2 note; §7 tab present; `progressa_facts_check.py` passes against the kit; kit diff empty |
| A6 | Hint on Module 2 README and workbook |
| B1–B4 | grep the four old strings = 0; 2.1's box reads "A0 §6 Public bodies, systems and registries"; 2.2's kit line reads "checks against PAERA as published…" |
| B6 | 2.2 feeds 2.5 and 2.7 feeds 4.4, 4.7 on the pages; `play-map.json` consumes == chain Consumes for all 37 plays and `check_fixtures.py` enforces it; kit at 0.2.3 |
| E | Module 2–5 concept sections no longer end with the Single-message sentence; bundle log shows 27 recap beats dropped |
| C / D | `sources.yaml verified` bumped; no future-dated `upd.`; 1.2/1.5 sources carry URLs |
| WP7 | `python3 render.py && python3 gitbook_qa.py` exits 0 |

---

## 7. Risks

- **Editing the demo renderer that §10 plans to replace.** Mitigated by keeping every change inside one function or one data field; the port copies functions, not pages. If the port starts before WP4, do WP4–WP6 in the port.
- **Recap-beat rule over-matches.** A concept slide titled "In one sentence" that is *not* the recap would be dropped. The count check (6/7/8/6) catches it.
- **Play-map edits are a public contract.** WP5 item 2 aligns `consumes` to the chain for seven plays — a correction, not a new contract, but every SKILL.md that quotes its play's Consumed line must be re-checked (`sync-shared.sh --check`, `check_fixtures.py`). Patch bump 0.2.3.
- **Reading the kit at render time** (`play-map.json`, `workbook-chain.md`) means a render is only reproducible against a kit tag. Record the kit tag in the rendered `pages.json` (one field) and in the WP5 sidecar front matter.
- **Two Progressa wordings (D7) can drift on facts** without anyone noticing, exactly as the skills did in August. The facts check (WP4.4) is the only guard; keep its fact list short and update it when the fixture gains a number.
- **Deleting `gitbook-demo/` before the render from the new home is proven** loses the only site renderer. WP0.4's empty diff is the gate; do not delete before it passes.
- **2.5's narration disagrees with the canonical fixture** on whether the PLR exists. The page note (WP4.2) covers the GitBook; the video keeps saying it until the next re-narration, which is why it goes on the transmittal list rather than being patched in the renderer and forgotten.
- **WP6 may find a wrong PAERA anchor in a signed script.** That is a transmittal item, not a page fix; do not paper over it in the renderer.

---

## 8. Out of scope, noted for later

- Full `kp-play-run` pass on Modules 2–5 (next plan; WP5 makes it a file-per-play job).
- Whether `kp-play-run` becomes a plugin skill.
- The §10 renderer port, `videos.yaml`, Git Sync.
- Tool-neutral wording of the "Open in Claude" links and the kit page — ITU calibration item, unchanged here.

---

## 9. Addendum — 7 Sep, after connecting `ea-plays-kit`

Three things in the kit changed the plan above (edits are already folded in; this section is the diff for the record):

1. **D2 reversed.** The kit's canonical fixture says the PLR is planned, not started, and the kit's 5 Sep fixture-separation plan reverted a skill that said otherwise. The GitBook follows the kit; the drift is on the GitBook side (sector paragraph, 2.5 concept, KP2 note), not the fixture side. WP4 no longer edits `tests/progressa.md`.
2. **B6 is play-map drift, not missing links.** `workbook-chain.md` already routes A10 → 2.5 and A15 → 4.4/4.7; `play-map.json` `consumes` is stale for seven plays and nothing checks the two against each other. WP5.2 becomes: derive `feeds` from the chain, align the map to the chain, add the check (kit patch 0.2.3). No new edges are invented.
3. **`kp-play-run` is mostly built.** `tests/plays/<id>/input.md` + `expected.md` are the harness; the procedure adds only the bare run, the annotations and the sidecar. A skill can follow after the procedure has run twice.

Plus one new decision, D7 — settled the same day: the GitBook keeps its **own** Progressa wording (learner voice, not the kit's Simplified Technical English) and aligns with the kit on **facts** only, guarded by a small facts check. And WP0 added: `gitbook-demo/` is deleted after its renderer code moves to `ITU-Giga-KP-Plugin/skills/kp-gitbook-render/scripts/` and reproduces the committed `gitbook/` tree from there.

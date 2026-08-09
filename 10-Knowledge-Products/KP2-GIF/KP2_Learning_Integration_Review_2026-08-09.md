# KP2 content × build pack — learning-integration review

**Date:** 9 August 2026
**Scope:** the six KP2 module bundles (`KP2-GIF/KP2_ModuleN_Script_Bundle_v0.1.md`) read against `KP2-GIF/KP2-build-pack/` as it stands today, with three questions: (1) how a learner should use the pack alongside the content, (2) whether the pack is a sound substrate for the KP4 Joget artefact, and (3) what to improve in the console, the prompts, and the multi-layer onboarding/set-up.
**Builds on:** `KP2_Build_Pack_Fitness_Review_2026-08-03.md` and `KP2_Build_Pack_Four_Layer_Plan_2026-08-03.md`. Where those two already made a recommendation, this review notes what has since landed rather than repeating it.

---

## 0. What has changed since the 3 August review — worth saying first

Several of the fitness review's findings are now closed or half-closed, and the pack is in better shape than that document reads today:

- **A semantic map artefact now exists** (`configs/semantic/semantic-map.yaml`, enforced by `apps/join-api/validate.py` check 8, per README). It is small (~0.6 KB) — closer to a registration of entities/anchors than the six-element map the Four-Layer Plan §1.2 specifies — but the dangling reference is no longer dangling.
- **Member Requirements and SLA landed**, folded into member configs (`prompts/member.md` items (5)–(6)) and rendered into the per-member onboarding record (`onboarding/<key>/02-requirements.md`, `03-sla/`) rather than the plan's `configs/onboarding/` template shape. Pragmatic and arguably better: the record lives where the gates live.
- **The onboarding record and catalogue are a genuinely strong addition**: `onboarding/<key>/00-gates.md` per member, `catalogue.yaml` + `GET /catalogue`, all generated, with the "publication is not permission" discipline stated on the artefact itself.
- **`docs/path-conformance.md`** (74 clauses, four honest statuses, evidence-existence-checked by a test) is exactly the "keep the documents honest" pattern Module 6.3 teaches — the pack now practises what M6.3 preaches, which is itself teachable.
- **PTSB residue is mostly resolved**: `configs/member-ptsb/` is gone from the tree; `app-ptsb` remains in `docker-compose.yml` as a generic mock to demo joins against, with a comment saying so. (The tracked `apps/specs/ptsb-awards.openapi.yaml` is still there — fine if it is now framed as the join-exercise fixture, see §3.3.)

Still open from the earlier reviews, and still the two things that matter most for learning:

- **The legal (M2 decree) and organisational (M3 Governance Pack) layers have no artefact.** No `configs/legal/`, no `configs/governance/`. Two of the four layers the videos teach, and two of M6.5's four role-paths, still end nowhere on disk.
- **Module ids and video refs have drifted apart in presentation**: `manifest.yaml` uses named ids (`federation-core`, `register-member`, …) with `video_ref` per module — good — but `join-member` still carries `video_ref: "?"`, and nothing learner-facing renders the module→video→file crosswalk.

---

## 1. The learner journey — how the pack should sit alongside the content

### 1.1 The structural insight: five modes of engagement, only two currently guided

KP2 already implies a rich learning loop for every subtopic:

| Mode | What the learner does | Where it lives today | Guided? |
|---|---|---|---|
| **Watch** | 5-min video | script bundles → rendered video | yes |
| **Read** | GitBook companion depth | bundle §4.6 (planned parallel deliverable) | yes |
| **Do** | run the AI usage tip against their own country | every subtopic's AI tip | partially — tips exist, but no bridge to the pack's own prompts |
| **Run** | stand up / exercise the real artefact | `KP2-build-pack/` | **no per-subtopic guidance** |
| **Prove** | acceptance check, [confirm:] resolution | `acceptance/`, `verify.sh` | **no learner framing** |

The pack is the "Run" and "Prove" modes made real — that is its whole pedagogical value over a video: *the learner can hold the artefact the video described, break it, and watch the acceptance check catch the break.* But today the connective tissue is one-directional and coarse: `manifest.yaml` knows which Topic-5 subtopic each module realises (`video_ref`), while nothing the learner reads knows which pack files each subtopic produced. A viewer of M4.4 ("Generate the semantic map") has no pointer to `configs/semantic/semantic-map.yaml`; a viewer of M5.2 has no pointer to `onboarding/plr/02-requirements.md`.

**Recommendation R1 — generate a learner crosswalk (`docs/learning-map.md`) from `manifest.yaml`.** One row per subtopic (all six modules, not just Topic 5): *watch this → open these files → run this command → this check proves it → this AI tip is the same play as this pack prompt*. Generate it the way `catalogue.yaml` and `path-conformance.md` are generated, so it cannot drift; `video_ref` already carries half the join key. This is cheap (a render script over data that exists) and it is the single highest-leverage learning improvement available: it converts the pack from "a repo the course mentions" into "the course's file system."

### 1.2 Three consumption tiers — because most learners will never run Docker

The pack needs ~11 GiB RAM, Docker ≥ 24, and a ~9-minute deploy. A ministry strategist watching Modules 1–3 has none of that, and should not need it. Define three explicit tiers and say them in the pack README's first screen:

- **Tier 0 — the artefact tour (no Docker, 20 minutes).** A guided read: `manifest.yaml` → one member config → the semantic map → one OpenAPI contract → `onboarding/plr/00-gates.md` → `catalogue.yaml` → `acceptance/once-only-exchange.md` → a committed sample `out/application-<nin>.json`. Every layer of the framework, held in the hand, zero infrastructure. Today this tour is possible but undocumented; the fitness review's W5 ("README as engineering journal") is exactly what stands in its way. **Ship one committed example `application-<nin>.json`** so Tier 0 ends at the same tangible object Tier 1 does.
- **Tier 1 — the proving run (Docker, ~30 minutes).** `preflight → gen-secrets → deploy → seed → acceptance → console.sh up`, ending in the console's "Run the demonstration" button and `out/application-<nin>.json`. This is the fitness review's W6 canonical path; it still deserves a single wrapper (`scripts/demo.sh`) that runs the sequence with narration and prints the console URL at the end — six commands is five too many for a first contact.
- **Tier 2 — the exercises (the learner as operator).** The pack is already full of superb exercises that are documented as operations rather than framed as learning: join PTSB through the console tab and watch the gate records appear; `member.sh drift` after editing the mock's spec; the permissions break-and-restore; un-join and watch `RETIRED`; read the `FAILED`-job recovery path. **Write them as numbered exercises with expected observations** ("after approve, `onboarding/ptsb/01-admission.md` exists and names your decision reference"). The PTSB spec + `app-ptsb` compose service are then not residue but the exercise fixture — say so where they appear.

### 1.3 Per-persona paths, honestly stated

M6.5 promises four role-paths. Map them to tiers and be honest about the two that end early:

- **Architect (M4–M5):** Tier 0 → 1 → 2. Fully served today — the pack is effectively an Architect's pack.
- **Onboarding lead (M5.2–5.4, 2.7):** Tier 0 + the join exercise. Well served by `onboarding/` + join API.
- **Legal drafter (M2):** ends at… nothing. Until `configs/legal/decree.yaml` exists (fitness review W1), the honest fix is a *named absence* the learner meets: a `configs/legal/README.md` stub in the path-conformance style ("not built; M2's acceptance criterion is: every catalogue exchange has a lawful basis and no article over-reaches; the `lawful_basis:` fields in `catalogue.yaml` are the hook it will check"). The pack already has a house style for saying "not built, and here is where you'd meet it" — use it here rather than silence.
- **Governance lead (M3):** same treatment (`configs/governance/`). Note the acceptance criteria are already written verbatim in the modules; the W1 close remains the real fix, and it is still the cheapest high-value work in the backlog (documents + document checks, no Docker).

The lesson the *absence* teaches, when named, is itself on-message: the path-conformance doc's own principle ("a named absence teaches as well as an implementation," `onboarding-alignment-design.md` P2) is the framework's pedagogy — apply it to the framework's own missing layers.

---

## 2. The KP4 seam — is this pack something a real Joget app can connect to?

Short answer: **yes, the seam is real and already half-proven — but it is currently a set of scattered remarks, not a stated contract.** Five places touch it: README ("Joget-free by design… the seam where KP4's Joget DX apps plug in"), PLAN.md §"a Joget DX app can replace any mock later behind the same spec", `acceptance/once-only-exchange.md` ("the seam a KP4 Joget form later replaces"), the runbook's long-`r1`-URL note (which shows a Joget DX backend under `/jw/` was already exercised in a live join), and the console's two on-screen seam captions. What is missing is one document that a KP4 author can build against and a check that proves the seam held.

### 2.1 Two distinct KP4 connection shapes — name them both

The material conflates two different ways a Joget app meets this bus, and they have different contracts:

**Shape A — Joget replaces a canonical mock** (the once-only continuity story). `app-plr` or `app-pnia` is swapped for a Joget DX app serving the *same* OpenAPI contract; the X-Road configuration does not move because the Security Server reads its forwarding target from the spec's own `servers.url`. The contract is: same spec, same fields, same `servers.url` semantics, reachable on the `linkup` network. The proof already exists: `acceptance.sh` unchanged, and specifically assertion 5 (field conformance, G5.9) — which was built for exactly this moment, since a Joget form that silently adds a field the contract withholds is precisely what purpose limitation must catch.

**Shape B — Joget joins as a new member** (the onboarding story, and the one the runbook has evidently already run live). The Joget app is the backend of a *joining* agency (the PTSB pattern): submit payload → validate (13 checks) → approve → `ACTIVE` → catalogue + gate records regenerate. The contract is `apps/join-api/schema.py` + `docs/conventions.md` + the join policy's `allowed_methods`.

Shape B is the richer KP4 story (it exercises the whole onboarding path, not just the wire), and Shape A is the sharper *framework* story (the four canonical members and the once-only exchange stay the frozen curriculum). Recommend: **KP4's canonical demo is Shape B; Shape A is the "replace a mock" appendix.** Both keep `manifest.yaml`'s `identifiers:` block frozen, which is the point of it.

### 2.2 What to add so KP4 can actually build against it — the seam contract

**R2 — write `docs/kp4-seam.md`** (one page, generated where possible), stating:

1. **The frozen join keys** — restate (or link) `manifest.yaml`'s `identifiers:` block and the amendment rule (KP3/KP4 sign-off).
2. **Shape A contract:** the three OpenAPI specs in `apps/specs/` are normative; `servers.url` is the forwarding seam; the network attachment point (`linkup`); and the acceptance criterion — `scripts/acceptance.sh` green, with assertion 5 named as the Joget-specific one. Add the one thing currently missing: **a documented swap procedure** ("point `SPEC_FILE`/container at your app, or override the compose service, then run acceptance") — today a KP4 author would have to reverse-engineer it from `docker-compose.yml`.
3. **Shape B contract:** `schema.py` payload shape, `docs/conventions.md` identifier rules, join policy (`allowed_methods` read-only today — a Joget app that POSTs needs a policy decision, and the join-member prompt already flags exactly this), the `/jw/<app>/<version>` path-prefix note lifted from the runbook, and `hosted_on` as the default (right for a 16 GB host; an own-server join additionally hits the known `verified: false` retry-budget defect — a KP4 demo should either use `hosted_on` or budget for the caveat).
4. **The data contract.** This is the quiet gap: `apps/data/*.csv` + `gen_seed_data.py` define the learner/NIN/enrolment universe the acceptance check asserts against. A Joget app replacing PLR must serve *those* records or assertion 2 ("right learner") fails. Declare the CSVs (or better, the generator's output) as the KP4 seed fixture — importable into Joget's own tables — and note that `seed.sh`'s fixed provider list (`app-pnia app-plr app-pemis`, per the fitness review §3.4) will not reseed a Joget backend; reseeding it is the app's own job.
5. **What the seam does *not* promise:** Test CA, demo tokens, single host, no production SLAs — one line pointing at `docs/production-delta.md`.

**R3 — make the seam checkable.** A tiny `acceptance/kp4-seam.md` (or a section in `member.md`'s generic check): *given* a backend that is not the pack's mock, *when* acceptance runs unchanged, *then* all five assertions hold. Even before KP4 exists, this is runnable today against `app-ptsb` as a stand-in third-party backend — which quietly turns the leftover PTSB assets into the seam's standing test fixture.

### 2.3 One capacity note for KP4 planning

Steady state is already ~11 GiB in 16 GB. Joget DX (its own JVM + DB) on the same host is tight. The `hosted_on` default already avoids a fifth Security Server; say explicitly in `kp4-seam.md` that the KP4 topology budget is "the standard four servers + join-api + one Joget container, hosted join only" — or KP4 targets a second host / the Linkup cloud (PLAN.md §9's re-target).

---

## 3. Improvements — console, prompts, multi-layer onboarding/set-up

### 3.1 The console

The console is the best learner-facing asset in the pack: the four tabs already tell the course's story in order (ask once → four layers → who's allowed → a member joins), the break-proof is real, the reset discipline (journal, watchdog, acceptance refusal) is genuinely good engineering, and the two KP4-seam captions in the counter tab are exactly the right teaching move. Improvements, in value order:

1. **Add a catalogue view — "What's on this bus."** `GET /catalogue` exists, applicant-token-gated, server-side; the console already proxies join-api the same way. A fifth tab (or a panel inside Join) rendering the catalogue — service id, provider, semantic entity/anchor, lawful basis, ACL subjects, "publication is not permission" banner verbatim — closes the loop for three audiences at once: the learner (M5's catalogue teaching), the joining agency (the first question is "what can I reach"), and the KP4 developer (the first question is the same). It is also the only piece of the onboarding record currently invisible from the UI.
2. **Deep-link the inspector to the artefacts.** The inspector's four layer cards cite `configs/x-road-bus/once-only-exchange.yaml` in prose; make each layer card link to (or embed a snippet of) its file — legal → the `lawful_basis` line in `catalogue.yaml`, semantic → the map entry, organisational → the ACL block, technical → the r1 URL. That turns the console into the front door of the Tier-0 artefact tour instead of a parallel world.
3. **Degrade gracefully when join-api is down.** `app.py` reads `KP2_JOIN_OPERATOR_TOKEN` via `os.environ[...]` at import — a missing key kills the whole console (the README's own `.env`-from-before-join-b bullet documents the blast radius). Read it lazily; if absent or join-api unreachable, tabs 1–3 work and tab 4 shows "join API not running — `scripts/join.sh up`". The demo asset should not be hostage to the newest module's env var.
4. **Surface the own-server `verified: false` caveat in the UI.** The runbook says "if you are demonstrating this, say so before the badge appears" — have the join tab say it itself: when a request has `own_server: true` and lands `ACTIVE, verified: false`, render the known-defect one-liner ("reachability re-check starved by the propagation wait; `acceptance.sh 2.7.r1` a minute later is the real answer") instead of leaving a presenter to explain a red-looking badge.
5. **Link the artefact out.** After a successful demonstration run, the counter tab's receipts panel should link `out/application-<nin>.json` — it is the pack's single tangible object and the video's on-screen prop; today the console produces it and never shows it.
6. Small copy point: the counter tab's two seam captions both say KP4 replaces *the form*; per §2.1 the stronger phrasing is "a KP4 Joget app replaces this form **and/or the registries behind it** — same OpenAPI contracts either way."

### 3.2 The prompts

The prompt set has a strong, consistent house shape (problem → copy-paste prompt → inputs/outputs → safeguard, `[confirm:]` discipline throughout), and `join-member.md`'s honesty about being written after the fact is good teaching. Gaps:

1. **The prompts ship without their inputs.** Every prompt opens "Below is [the NIIS reference / the service brief] [paste both]" — but no example brief ships anywhere in the pack. A learner cannot run the play; they can only read it. **Ship one worked example per prompt**: the actual PTSB brief used in the 3 August join, plus the committed expected output — `prompts/examples/ptsb-brief.md` → the two YAML documents. That makes each prompt a reproducible exercise (run it, diff against the committed answer) rather than a recipe without ingredients, and it costs nothing: the materials existed and were used.
2. **Uniform "prove it" footer.** `member.md` ends with the generate/deploy path, others trail off after the safeguard. Give every prompt the same final block: *"Prove it: run `<command>` (`--fast` / `--live`)"* — mirroring the verification-tier discipline the README already teaches for code changes. Prompt → artefact → check is the pack's whole epistemology; make every prompt end on the check.
3. **Bridge module AI tips ↔ pack prompts.** M4.4/M4.5/M5.4's AI usage tips and `prompts/*.md` are the same plays at different fidelity, with no cross-reference in either direction. The R1 crosswalk should carry this column; additionally, each pack prompt's header could name its subtopic ("this is M5.4's play, production-grade"). Same story for naming: bundles/reviews still reference `prompts/2.4.md`-style names that no longer exist — the crosswalk is also the migration map.
4. **Missing plays for the missing layers.** When the legal/governance layers land (§1.3), their generating prompts land with them — the modules' AI tips (M2's decree kit, M3's governance pack) are ~80% of the prompt text already, which is the same lift-verbatim move the Four-Layer Plan prescribed for 5.2/5.3.

### 3.3 The multi-layer onboarding and set-up

**Set-up flow.** `preflight.sh` reporting all gaps at once is the right pattern; two extensions:

1. **Teach preflight about `.env` completeness.** The README spends a paragraph on the stale-`.env` trap (missing join tokens break *every* compose invocation via `${VAR:?}` interpolation). That paragraph is a symptom: preflight (or a `gen-secrets.sh --check` it calls) should diff `.env` keys against `.env.example` and print the exact remedial line ("re-run `scripts/gen-secrets.sh`, no flags"). A documented trap that a script could catch should be caught by the script.
2. **One wrapper for Tier 1** (`scripts/demo.sh`, §1.2), with printed stage timings against the documented expectations so a learner knows a 6-minute silence is normal. Keep the granular scripts as the teaching surface; the wrapper is for first contact and for presenters.

**The onboarding record (gates).** `onboarding/<key>/00-gates.md` is excellent. Three refinements:

1. **Give the Status column the four-status vocabulary.** Today it mixes links, "passed", "mostly passed", and "not implemented in this demo" prose. `path-conformance.md` already solved this — implemented / simulated / named absence / out of scope, rendered from data. Generating `00-gates.md` rows from `path-conformance.yaml` (they overlap heavily: G0–GX appear in both) would also remove a latent double-maintenance drift between the two files.
2. **Number the gap.** `01-admission.md` is written by the API on a real join, but the canonical members' folders jump `00 → 02` with nothing saying why. One line in `00-gates.md` ("01 is written at admission time; canonical members predate the join API") turns a puzzle into a lesson.
3. **Wire the record into the learner journey.** The gates register is the best artefact for teaching that onboarding is *layered* (legal → organisational → technical, G0→G6) — but nothing in the modules, the console, or the README's first screen points a learner at it. It belongs in the Tier-0 tour, the crosswalk (M5.2/5.3/5.4 rows), and the console's join tab (a joined member's card could link its own `onboarding/<key>/` record — the record the join just wrote is the payoff of the whole flow).

**The four-layer gap itself.** Repeating §1.3 once because it is the headline: the multi-layer story is the course's central claim, the pack proves layers 3–4 magnificently, and layers 1–2 (legal, organisational) still have no artefact. Named-absence stubs this week; W1's real close (decree + governance configs, document-tier acceptance checks, generating prompts lifted from M2/M3) as the next block of work — it remains no-Docker, low-risk, and the single biggest step toward the pack matching the course that teaches it.

---

## 4. Priority list

| # | Action | Serves | Effort |
|---|---|---|---|
| 1 | R1 — generated learner crosswalk `docs/learning-map.md` (subtopic → files → command → check → prompt) | learning | S |
| 2 | Three-tier consumption framing in README first screen + Tier-0 artefact tour + committed sample `application-<nin>.json` | learning | S |
| 3 | R2 — `docs/kp4-seam.md` (both shapes, data contract, swap procedure, capacity note) | KP4 | S–M |
| 4 | R3 — seam acceptance check, runnable today against `app-ptsb` | KP4 | M |
| 5 | Console: catalogue tab + join-api graceful degradation | both | M |
| 6 | Prompts: worked example inputs (PTSB brief) + uniform "prove it" footer | learning | S |
| 7 | Preflight `.env` completeness check + `demo.sh` wrapper | set-up | S |
| 8 | Gates register: four-status vocabulary, generated; explain the 01 gap | onboarding | S |
| 9 | Legal + governance: named-absence stubs now, W1 close next | learning, contract | stubs S / close M |
| 10 | Console: inspector deep-links, artefact link, own-server caveat in UI | demo polish | M |

Items 1, 2, 6 and 7 are a coherent "learner release" that could ship together without touching the deploy path at all; items 3–4 are the KP4 unblockers and are mostly writing down contracts the pack already honours.

# KP2 build pack — fitness review

**Date:** 3 August 2026
**Scope:** `KP2-GIF/KP2-build-pack/` judged against (a) the `kp-build-pack` anatomy, (b) `kp-solution-verify`'s VERIFIED contract, and (c) what the six KP2 module bundles actually promise the build pack contains.

---

## Verdict

The pack is **over-built in one dimension and unbuilt in three**.

The X-Road slice is genuinely excellent engineering — parameterised topology, generated config-as-code, a real reproducibility proof, honest demo/production separation. That part is better than it needs to be.

But the build pack that KP2's own modules describe is a **four-layer** artefact: legal (M2's decree), organisational (M3's Governance Pack), technical (M4's semantic map + contracts), and the proving slice (M5). What exists on disk is layer three-and-a-half. `configs/` contains nothing but X-Road. The KP2-GIF README's claim — *"the build pack's three configuration layers are specified across the modules: legal, organisational, technical"* — is not true of the directory.

Your two instincts are both right, but they point at different things than you may expect:

- **"Too much hard-coded"** — the X-Road *topology* is well parameterised (that work is done). What is hard-coded is the **scenario**: country, sector, the once-only form schema, the seed data, the domain vocabulary. That is precisely the layer the videos claim is reusable ("the template a country reuses for its own framework and its next sector," M6 §3) and precisely what `PLAN.md` §9 parks as "a separate, not-yet-started spec."
- **"The demo is too convoluted"** — yes, and it is measurable. 257 tracked files, 291 tests, a ~14.5-minute full cycle, a 716-line acceptance script, a 70 KB join-orchestration service, a four-tab web console, and ~300 KB of internal planning documents committed *inside* the deliverable. The teaching target is one federation, four members, one call.

---

## 1. The pack builds one of four layers

| Module | Promised build-pack artefact | On disk |
|---|---|---|
| M2 (decree) | "the legal-layer configuration… its acceptance check is this match: every catalogue exchange has a lawful basis, and no article over-reaches" | **absent** |
| M3 (governance) | Governance Pack — three-tier ToR, RACI, member obligations, TWG charters, change control. "Acceptance check: every recurring decision has one named Accountable; every member has a signed agreement; the standards portfolio has a named owner and a written change process." | **absent** |
| M4 (technical) | semantic map, OpenAPI contracts, X-Road service descriptions | OpenAPI present (`apps/specs/`); **no semantic map artefact**; service descriptions exist only implicitly inside Hurl fragments |
| M5.2 | Member Requirements checklist | **absent** (flagged in `REVIEW.md` §2.6 on 19 July; still open) |
| M5.3 | Service-Level Agreement template | **absent** |
| M5.4–5.6 | member registrations, federation, once-only exchange | present, thoroughly |

This is the single highest-value gap, and it is also the **cheapest to close** — these are YAML/Markdown artefacts with document-level acceptance checks. No Docker, no X-Road, no risk to anything that currently works. The modules have already written the acceptance criteria for you, almost verbatim.

It also breaks M6's role-path promise: *"the legal drafter's path ends at the decree config; the architect's at the semantic map and contracts; the onboarding lead's at the member registrations."* Today three of those four paths end nowhere.

---

## 2. The demo has outgrown the knowledge product that teaches it

**Module 2.7 has `video_ref: "?"`** in `manifest.yaml` — the pack has grown a module no video covers. That is the clearest single symptom. The manifest's spine is *module → BB → config → prompt → acceptance → video*; 2.7 resolves to everything except a video, and it is the largest module in the pack (`apps/join-api/job.py` 70 KB, its tests 65 KB, a design spec of 78 KB, plus a fourth console tab, plus `2.7.unjoin`, plus own-server joins).

Related coupling problems:

- **The console is declared out of scope and wired in anyway.** `README.md` says it is "a demo asset, not a module, never in the acceptance path." But `scripts/acceptance.sh:60-64` aborts the whole suite if the console's ACL journal is non-empty, and `verify.sh --full` smoke-tests it. Coupled in both directions, against its own stated contract.
- **The pack ships in a post-demo state.** PTSB — a member created by a demonstration join on 3 August — is now committed into `configs/member-ptsb/ptsb.yaml`, into `manifest.yaml`'s `identity.members`, into `docker-compose.yml` as `app-ptsb`, and into `apps/specs/ptsb-awards.openapi.yaml`, with three job records in `out/join/`. A learner who clones this gets a five-member federation the modules describe as four.
- **Cost of the loop.** `--full` is ~872 s (full) / ~466 s (lite). `--fast` has grown 8 s → 49 s in six days and, as `README.md` itself notes, compounds because `--full` runs it inside the reproducibility proof. That trend line has no natural stopping point.

**The structural read:** somewhere around 26 July the pack stopped being *the artefact KP2 teaches* and became *a product that KP2 mentions*. Both are legitimate things to build. They are not the same deliverable, and only one of them is under contract.

---

## 3. Hard-coding — the actual map

Credit where due. These are genuinely parameterised, and the work should not be undone:

- Member set, hosting and stand-up order — `hurl/topology.json` → `SS_UI` / `SS_REST` / `HOST_SS`, consumed by loops rather than fixed lists (`acceptance.sh:112`, `:143`).
- ACL expectations — derived from `topology.json`, including the empty-ACL case.
- Exchange shape (consumer, negative caller, r1 paths) — read from `configs/x-road-bus/2.6.yaml`.
- Ports, digests, profile — `deployment.yaml` + `generate.py`'s `PINNED_PORTS`.

What is still hard-coded, in rough order of how much it matters:

1. **The once-only form schema is duplicated as a bash-embedded Python literal.** `acceptance.sh:259-261` restates ten field names that `configs/x-road-bus/2.6.yaml`'s `asked_once` block already declares. This is the exact drift the pack elsewhere goes to great lengths to prevent — and it sits in the pack's headline check.
2. **Instance and member class as literals.** `acceptance.sh:88-90` asserts `"PROGRESSA"` and `"GOV"` while `manifest.yaml`'s `identity.instance` / `identity.member_class` exist for exactly this.
3. **Seed data and domain vocabulary.** `gen_seed_data.py` + `apps/data/` encode the education/learner/NIN/region/school domain as Python literals; the OpenAPI specs, console copy and acceptance prose repeat it. There is no seam at which a country or sector is chosen.
4. **`seed.sh` restarts a fixed provider list** (`app-pnia app-plr app-pemis`) — `app-ptsb` is omitted, so a joined member's backend is never reseeded.
5. **`verify.sh` depends on the author's directory tree.** It hard-fails on `../../ITU-Giga-KP-Plugin/skills/kp-solution-verify/scripts/check_pack.py` and on `.venv/bin/python3`. Anyone who receives this pack on its own cannot run `--fast` at all.
6. **`join-api` bind-mounts the enclosing monorepo read-write** and shells out to `git status` against a repo root three levels above the pack. The pack is not a self-contained unit; it is a subdirectory of your working tree.

> **The pattern:** the parameterisation effort went into the layer that did not need it for the deliverable (X-Road topology, which the learner never retargets) and stopped short of the layer that does (the scenario, which M6 explicitly promises is reusable).

---

## 4. It cannot be shipped or reused as-is

> **Corrected 3 August, after repo access.** An earlier draft of this section claimed the pack had no version control. That was wrong — it was written without visibility above the two connected folders. The pack is tracked in `github.com/aarelaponin/geatdm-framework` (branch `itu-presentation-skills-files`), 257 files, with `.env`, `out/`, `.venv/`, `.pytest_cache/`, `hurl/scenarios/` and `.DS_Store` all correctly untracked. The three bullets that follow replace the originals; the rest of this section stands.

- **The working tree is mid-demo, and the tracked state is internally inconsistent.** `git status` shows `configs/member-ptsb/` untracked and `manifest.yaml` modified — the PTSB join of 3 August is uncommitted local state. But `apps/specs/ptsb-awards.openapi.yaml` **is** tracked. So a clean checkout carries a published OpenAPI contract for a member whose config and identity entry do not exist. That is a sharper version of the residue problem than the one first written here, not a milder one.
- **`apps/join-api`'s dirty-checkout guard is being exercised right now.** `writer.apply_real()` shells out to `git status --porcelain configs/ manifest.yaml` (design spec S9). Both are currently dirty. Whatever that guard does when it trips is happening on every join today.
- **No `VERSION` / `CHANGELOG`,** so "which build pack did ITU receive" still has no answer — a commit SHA is an engineering answer, not a deliverable one.
- **The internal record is committed, not merely present.** `docs/superpowers/` (13 plans and specs) and `docs/reviews/` (2 branch reviews) are tracked and would ship with any checkout or archive. W5 below applies in full. `docs/do-terraform-brainstorm.md` is untracked and so already effectively excluded.
- **No `VERSION` / `CHANGELOG`,** so "which build pack did ITU receive" has no answer.
- **Structural divergence from the sibling packs.** `KP3-build-pack/` is the canonical seven-item anatomy. KP2 has added `apps/`, `hurl/`, `tests/`, `docs/`, `deployment.yaml`, `docker-compose.yml`, `PLAN.md`, `REVIEW.md`. Some of that is unavoidable (X-Road needs Compose). But KP3 and KP4 are supposed to consume KP2 bottom-up, and they will inherit its shape.

---

## 5. Video ↔ pack contradictions still open

- **Four vs five Security Servers.** M5.5 says "four Security Servers" in the script, the slide spec, the AI prompt and the YouTube description. The pack runs five under `full` and three under `lite`. `REVIEW.md` §2.1 raised this on 19 July; `PLAN.md` §9 still carries it as an open calibration item. A viewer can count. Recommended fix: amend the M5.5 script to "four member Security Servers, plus PDGA's own management server" — edit `build_kp2_module5_v01.js`, regenerate. That is a source-of-truth edit, not a pack change.
- **Module 2.7 has no video** (above).
- **`kp-solution-verify` in the scripts is aspirational.** M5.5/5.6 tell the viewer that `kp-solution-verify` deploys the federation and runs the acceptance check. In practice `scripts/verify.sh` does, and `check_pack.py` only does static completeness. Either the scripts should say "the build pack's own `verify.sh`, gated by `kp-solution-verify`," or the skill should genuinely wrap it.

---

## 6. The documentation has become an engineering journal

`README.md` is 150 lines, of which a large fraction is measured timings, dated re-measurements, tier-selection advice and rationale about why `--live` stays vacuous. It is a superb engineering record. It is not a README for a ministry architect who has just watched a five-minute video.

The same pattern runs through `scripts/lib-stack.sh` and `acceptance.sh`, where multi-paragraph comments narrate bugs found, dates, and decisions withdrawn. That commentary is valuable — but it belongs in a record, not in the artefact a learner reads to understand what the pack does.

Shipped inside the pack today: `PLAN.md` (30 KB), `REVIEW.md` (12 KB, dated 19 July, some items resolved and some not, with no way to tell which from the file), `docs/superpowers/` (9 plans + 3 specs, ~300 KB), `docs/reviews/` (2 branch reviews, 55 KB), `docs/do-terraform-brainstorm.md` (a brainstorm). The `kp-build-pack` scope rule — *"everything in configs/, prompts/, runbook.md and acceptance/ is deliverable content the learner sees"* — has no counterpart rule for what must **not** be there, and the gap has filled.

---

# What should be done

## Target shape

Three tiers, clearly separated — physically, not just by convention:

```
KP2-build-pack/               ← THE DELIVERABLE (learner-facing, ITU-facing)
├── manifest.yaml  README.md  runbook.md  VERSION
├── configs/
│   ├── legal/                ← NEW: the decree config (M2)
│   ├── governance/           ← NEW: the Governance Pack (M3)
│   ├── semantics/            ← NEW: the semantic map (M4)
│   ├── onboarding/           ← NEW: Member Requirements + SLA (M5.2/5.3)
│   ├── x-road-bus/  member-*/
├── prompts/  acceptance/  scripts/
└── engine/                   ← docker-compose, hurl/, apps/, tests/, deployment.yaml
                                 (the runtime; documented as machinery, not content)

extras/                       ← OPTIONAL DEMO SURFACE: console, join-api
KP2-GIF/_working/             ← THE RECORD: PLAN, REVIEW, superpowers/, reviews/, brainstorms
```

## Workstreams, in priority order

### W1 — Close the four-layer gap *(highest value, lowest risk, no Docker)*

Add the three missing configuration layers and their acceptance checks. The modules have written the criteria; lift them.

- `configs/legal/decree.yaml` + `acceptance/2.L.md` — "every catalogue exchange has a lawful basis in the decree; no article over-reaches" (M2 §3.6).
- `configs/governance/{tiers,raci,member-obligations,twg-charters,change-control}.yaml` + `acceptance/2.O.md` — "every recurring decision has exactly one named Accountable; every member has a signed agreement; the standards portfolio has a named owner and a written change process" (M3 §3.6).
- `configs/semantics/learner-credential.map.yaml` + `configs/onboarding/{member-requirements,sla}.yaml` — from M4 and M5.2/5.3.
- One generating prompt each in `prompts/`, per the bb-config-gen rule.
- Wire each into `manifest.yaml` with its `video_ref`.

**Effect:** the pack matches its own README, all four M6 role-paths land somewhere, and `configs/` stops being a synonym for "X-Road."

### W2 — Re-cut the module spine to what KP2 teaches

- **Decide 2.7's status.** Either commission a subtopic for it (a 5.8, or fold into 5.4) by editing `build_kp2_module5_v01.js` and regenerating — or move `apps/join-api/` + the console's join tab to `extras/` and drop 2.7 from `manifest.modules`. Do not leave `video_ref: "?"` in a deliverable index.
- **Reset the pack to canonical state.** Remove PTSB from `configs/`, `manifest.yaml`, `docker-compose.yml` and `apps/specs/`; clear `out/join/`. Re-express PTSB as a documented *exercise* in the runbook ("join a fifth member, then un-join it"), not as committed state.
- **Decouple the console from acceptance.** Move the ACL-journal check out of `acceptance.sh` into `console.sh`, or have `console.sh reset` run automatically. The stated contract ("never in the acceptance path") should be true.

### W3 — Make the scenario a parameter *(this is the "hard-coded" fix that matters)*

Introduce a single scenario source of truth — extend `manifest.yaml` or add `scenario.yaml` — carrying: instance, member class, country/sector labels, the once-only form schema (`asked_once`), and the seed-data specification. Then:

- `acceptance.sh:88-90` reads instance/class from it instead of `"PROGRESSA"`/`"GOV"`.
- `acceptance.sh:259-261` reads the form schema from `configs/x-road-bus/2.6.yaml`'s `asked_once` instead of restating it.
- `gen_seed_data.py` takes the data spec as input rather than embedding it.
- `seed.sh` derives its provider list from `topology.json` rather than three literals.

This is the spec `PLAN.md` §9 parks as "not yet started." Until it exists, M6's "template a country reuses for its next sector" is a claim the artefact does not support — and if you decide not to do it, **M6's wording should be softened instead**. One of the two must move.

### W4 — Make the pack shippable standalone

- Commit or discard the PTSB working-tree state before anything else here starts, and resolve the tracked/untracked asymmetry (`ptsb-awards.openapi.yaml` tracked, its config not). Every other workstream assumes a clean, self-consistent base.
- Vendor `check_pack.py` into the pack, or make `verify.sh` degrade gracefully when the sibling kit is absent — the `--fast` tier must work for a recipient.
- Replace the `.venv/bin/python3` hard dependency with `python3 -m pytest` + a `requirements.txt`.
- Remove `join-api`'s monorepo bind-mount and git-root dependency (or move it to `extras/`, which resolves this for free).
- Add `VERSION` + `CHANGELOG.md`. Clean `.DS_Store`, `.venv/`, `.pytest_cache/`, `out/`. Decide explicitly whether `out/` ships (the `application-<nin>.json` artefact arguably should; 5,000 Hurl report files should not).

### W5 — Separate the record from the deliverable

- Move `PLAN.md`, `REVIEW.md`, `docs/superpowers/`, `docs/reviews/`, `docs/do-terraform-brainstorm.md` to `KP2-GIF/_working/`. Keep `docs/production-delta.md`, `docs/xroad-770-notes.md`, `docs/xroad-8-delta.md` — those are learner content (M5.7).
- Rewrite `README.md` to one page: what this is, prerequisites, three commands, what you will see, where to go next. Move all timings to `docs/performance.md`.
- Either annotate `REVIEW.md` item-by-item as resolved/open, or retire it into the record. As it stands it reads as current and is not.

### W6 — Simplify the headline demo

- Make `profile: lite` the default in `deployment.yaml` (~8 min vs ~14.5, ~8.9 GB vs ~13 GB), with `full` documented as the pre-release gate.
- Define one canonical demo path in the runbook: `preflight → gen-secrets → deploy → seed → acceptance --only 2.6`, ending at `out/application-<nin>.json` — the one tangible on-screen object. That is the five-minute take for M5.6.
- Everything else (join, un-join, console, own-server, tiers) becomes clearly labelled optional depth, below the fold.

---

## What NOT to do

- **Do not delete the engineering.** The Hurl generation, the topology parameterisation, the golden corpus, the exposure and secrets discipline, `production-delta.md` — all of it is real value and some of it (the identity parameterisation) is a prerequisite for W3. The problem is placement and prominence, not existence.
- **Do not re-write the acceptance suite from scratch.** The generalised loops are correct. W3 is four surgical edits inside them.
- **Do not hand-edit configs to close the W1 gap.** Write the prompt first, run it, commit its output — the pack's own cardinal rule, and the one `REVIEW.md` §2.3 already caught you on once.

---

## Decisions I need from you

1. **Does the member-join API stay inside KP2's teaching scope?** If yes, it needs a video subtopic and M5 must be re-rendered. If no, it moves to `extras/` and 2.7 leaves the manifest. (This is the largest single fork in the analysis.)
2. **Is country/sector retargeting in KP2's contract, or deferred?** If deferred, M6's reuse claim needs softening before the module locks.
3. **What physically ships to ITU** — a folder, a zip, a git repo, a GitBook link? W4 and W5 depend on the answer.
4. **Does the console ship at all?** It is the most demo-compelling asset in the pack and the least contractually required.
5. **Four vs five Security Servers** — amend the M5.5 script, or fold management onto PDGA on screen? Open since 19 July; blocks nothing but will embarrass at review.

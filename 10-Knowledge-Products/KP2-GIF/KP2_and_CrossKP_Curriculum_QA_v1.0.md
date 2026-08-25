# Curriculum QA — KP2 (intra) and KP1 ↔ KP2 (inter)

**v1.0 · 27 June 2026 · internal QA record (not an ITU deliverable; kept local per the KP1 precedent).**

> **Update — 28 June 2026: all four content findings below have been applied** (re-gated, 0/0; curriculum QA re-run, 0 hard findings; the migration gap-candidate now covered, 7 hits). Fixes: M1 1.5 names KP1 as the prerequisite and adds the inventory-first path; M5 5.1 adds a sentence distinguishing the four-phase build plan from KP1's five-phase EA lifecycle; M5 5.7 adds the legacy point-to-point migration/retirement step (parallel-run → cut over → decommission); M6 6.3 normalises the names to *Governance Pack* and *standards portfolio*. The minor notes (in-video cross-references, PDGA continuity, cosmetic terminology) are left for the Tuesday review.

Run with the new `kp-curriculum-qa` gate — the level above the per-module gates. Two halves: the deterministic analyzer (`curriculum_qa.py`) over the generated `.md` corpus, and a fresh-eyes subagent reading the rendered modules. All six KP1 and six KP2 modules had already passed their per-module gates (`kp-bundle-qa`, `kp-citation-verify`); this checks coherence and coverage *across* modules and *across* the two KPs.

## Verdict

KP2 coheres as a curriculum and delivers its outcome (a full four-layer interoperability framework ending in a running once-only exchange). KP1 and KP2 cohere as a programme — **no hard inconsistencies at the seam.** One real defect was found and fixed (a Markdown-generator persona bug affecting five Strategist modules). The remaining findings are content decisions for the Tuesday review, not blockers.

| Check | KP2 intra | KP1↔KP2 inter |
|---|---|---|
| Competency coverage (hard) | pass | pass |
| Citation consistency | pass | pass |
| Forbidden strings | pass | pass |
| Progressa canon | pass (PDCA only in the flagged note) | pass |

## Fixed this pass

- **Per-subtopic persona wrong in the `.md` for every Strategist module.** The subtopic "Persona" field read *A (Architect)* in KP2 Modules 1, 2, 3, 6 **and KP1 Module 6**, while the cover correctly read *S (Strategist)*. Cause: a bug in the kit's Markdown generator (`bundle_to_md.py`) — its persona-default heuristic resolved a `PERSONA_A` constant or a quoted literal but not `["Persona", PERSONA_S]`, so Strategist modules fell through to a hardcoded `"A (Architect)"`. The build scripts (`.js`) and therefore the **`.docx` deliverables were always correct**; only the GitBook-ready `.md` was affected. Fixed the generator to resolve whichever `PERSONA_*` token the helper references, and regenerated all twelve `.md`. Verified: persona is now correct in every module. *(This is exactly the kind of cross-cutting defect the per-module gates cannot see — the curriculum gate earned its keep on its first run, and caught a latent KP1 defect too.)*

## What is sound (confirmed)

- **The once-only thread is the spine and it is coherent** end-to-end: promise (KP2 1.3) → Strategic Foundation principle (1.4) → decree article (2.4) → member obligation (3.4) → semantic map + contract (4.4/4.5) → the live cross-server call and acceptance check (5.6), which explicitly calls back to "the promise from the very first topic … now actually running." One demonstration scenario (PNEA pre-fills identity from PNIA and enrolment from PLR) held constant throughout.
- **All four layers land**, each with a build-pack acceptance check: legal (decree, 2.6), organisational (Governance Pack, 3.6), technical/semantic (4.x), proven (5.6).
- **Topic-to-topic hand-offs are explicit and configuration-shaped** — each topic produces an artefact the next consumes.
- **Progressa demo membership is consistent** — the four Security Servers (MoEYS/PEMIS, PNEA, PLR, PNIA) + Central Server PDGA, everywhere. "PDCA" appears only in the Module-1 calibration note that documents and resolves the Inception-Report discrepancy — a flagged, not a live, inconsistency.
- **The KP1→KP2 seam holds**: KP1 Module 4.5 produces a first-cut integration map and forwards it ("the interoperability work the next knowledge product covers"); KP2 Topic 1.5 picks it up as its input. Shared concepts (PAERA, once-only, the four-layer model, whole-of-government re-use, building blocks) are defined consistently across both KPs; the earlier §5.2-"Principles" and §4.5-"Digital Co-creation" citation fixes hold in both.
- **Register/reading-level consistent** (eighth-grade held through the technical modules); the Strategist→Architect→Strategist arc reads cleanly at topic level.

## Findings for the Tuesday review (decisions, not blockers)

**Coverage**

1. **No legacy-migration / retirement step.** KP2 teaches building the new bus but never teaches retiring the old point-to-point links it replaces (no cut-over, parallel-run, or decommission). The opening (1.1) diagnoses point-to-point sprawl as the disease; the cure never closes the old roads. *Recommendation:* a short addition — a beat in Topic 5.7 (demonstration → production) or a Use-Case-Catalogue note in 1.5 — or an explicit "out of scope, see [X]". Analyzer flagged this as the one absent gap-candidate; the subagent independently confirmed it.
2. **Assessing the existing landscape is assumed, not taught.** KP2 1.5 opens "if your country has done the EA work, you already have a first-cut integration map" and treats that map as the input. A learner entering at KP2 (without KP1) has no taught path from a fragmented government to a ranked Use-Case Catalogue. *Recommendation:* name KP1 explicitly as the prerequisite at 1.5, or add a brief "inventory your current exchanges" step.

**Cheap consistency fixes (recommended)**

3. **Lifecycle vs four-phase conflation risk.** KP1's five-phase EA *lifecycle* (Discover…Execute & Govern) and KP2's four-phase *implementation* plan (Core Platform…Optimisation) are different things, both called "phases," both gated. One sentence in KP2 5.1 — e.g. "this four-phase build plan sits inside the Execute & Govern phase of the EA lifecycle" — removes the risk.
4. **Naming drift in the Module-6 capstone.** 6.3 refers to "the governance manual" and "the standards catalogue"; earlier modules call these the **Governance Pack** (M3) and the **standards portfolio** (4.3). Normalise to the established names.

**Minor / note for ITU**

5. **A few in-video cross-references** to other topics survive in voice-over (2.6 "later in the knowledge product"; 5.6 "from the very first topic"; 6.6 "the message it opened with") — cumulative-narrative and arguably fine for a capstone, but technically against the standalone-video rule. (The `kp-bundle-qa` gate catches "next video"/"in the next" forms; these softer forms passed it.)
6. **PDGA role continuity.** KP1 4.1 gives PDGA "the shared backbone **and payments**"; KP2 makes PDGA the X-Road Central Server / Operating Authority. Compatible (same body, expanded role) but a one-line reconciliation would smooth the KP1→KP2 continuity.
7. **Cosmetic terminology:** "whole of government" (mostly the legitimate noun phrase, not the compound adjective), "Open API" ×2, "access control list" ×1 — optional light normalisation.

## How this was produced

`python3 curriculum_qa.py --matrix kp2 --dir KP2-GIF` (intra) and `--matrix kp1-kp2 --dir KP1-GEA --dir KP2-GIF` (inter), then a `general-purpose` fresh-eyes subagent over the six KP2 modules + the KP1 seam. The analyzer needed two rule refinements on first run (a citation rule was catching legitimate prose; a terminology check was case-insensitive) — tuning the instrument is part of the method, and it is now sharper for KP3/KP4.

---

*FiscalAdmin OÜ. Produced by `kp-curriculum-qa`. The competency matrices are in `ITU-Giga-KP-Plugin/skills/kp-curriculum-qa/references/competency-matrices.md`.*

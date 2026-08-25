# KP1 Curriculum QA — consistency & quality check against the learning outcome

**Scope.** A cross-module audit of all six KP1 bundles (42 video scripts), judged against a single success criterion: *can a learner who completes KP1 produce a complete national Enterprise Architecture?* Method: programmatic cross-module checks over the six build scripts and generated Markdown, an independent fresh-eyes subagent review, and lead-author synthesis. Per-module compliance (`kp-bundle-qa`) and PAERA fidelity (`kp-citation-verify`) were already green for all six; this report is about the **whole curriculum**, not the individual modules.

**Date.** 26 June 2026. FiscalAdmin OÜ.

---

## Verdict — Conditional pass, with one decisive gap

A learner who completes KP1 can reliably produce **three of the four** parts of a national EA: the **AS-IS picture**, the **roadmap**, and the **governance** to execute and sustain it. They **cannot** produce the fourth — the **TO-BE / target architecture** — because the curriculum never teaches it as a step. The lifecycle as taught runs **Discover → Assess → Adapt (sourcing) → Plan (roadmap) → Govern**, jumping from *diagnosing the current state* straight to *deciding how to source the fixes*, with **no phase that designs the future-state architecture** as an integrated deliverable.

This matters directly to your stated outcome — "a full-blown national EA with **the target architecture and roadmap**." The roadmap is well covered; the target architecture is the hole. **The curriculum is conditional-pass: green once a dedicated target-architecture step is added, plus two small citation-consistency fixes.**

Everything else is in good shape: the persona arc, the lifecycle, the terminology, the two structural arguments, and (with two exceptions) the PAERA citations are all consistent across the six modules.

---

## Part A — Competency coverage map

The four deliverables of a national EA, decomposed into the competencies that produce them, mapped to where each is taught.

| National-EA deliverable | Competency a learner needs | Taught in | Coverage |
|---|---|---|---|
| **1. AS-IS picture** | Read a government in BDAT layers; use the metamodel; classify bodies; run Discovery; run Assess and rank gaps | M2 (2.1–2.6), M4 (4.2 Discover, 4.3 Assess) | **Strong** — an entire module of craft plus a worked demonstration |
| **Principles & standards baseline** | Adopt the architectural principles; adopt the taxonomy | M2 (2.3, 2.4) | **Strong** |
| **2. TO-BE / target architecture** | Design the future state: target capability model, target data-ownership map, target shared-platform set, target technology standards, cross-agency integration map | — (only implied in M4 4.4 Adapt = sourcing, and a one-line "target state" in 4.5 Plan) | **MISSING — see below** |
| **3. Roadmap** | Sequence into waves; cost it; sign-off; national rollout | M4 (4.5 Plan), M6 (6.6 rollout) | **Strong** |
| **4. Governance to execute** | Repository; tooling; update discipline; EA Board; review gate; metrics; sustainment | M3 (3.1–3.7), M4 (4.6) | **Strong** |
| Cross-cutting: make & sustain the case | The two structural arguments; the four asks; the business case; evidence; portability | M1 (all), M6 (6.1–6.7) | **Strong** |
| Cross-cutting: accelerate with AI | The reusable plays + safeguards | M5 (all) | **Strong** |

### The decisive gap — there is no "Design the Target Architecture" step

Corpus-wide keyword counts (across all six modules' prose) make the imbalance impossible to miss:

| Current-state language | count | | Future-state language | count |
|---|---|---|---|---|
| "assess" | 276 | | "target architecture" | **0** |
| "discover" | 116 | | "to-be" | **0** |
| "gap analysis" | 47 | | "target capability" | **0** |
| "current state" | 7 | | "target data" | **0** |
| "as-is" | 4 | | "integration map" | **0** |
| | | | "target state" | **1** |

The phrase "target state" appears **twice substantively in the entire 42-script corpus**, both as throwaway clauses inside Phase 4 Plan (M1 1.6: *"architects describe the target state and sequence the work into a roadmap"*; M4 4.5: *"how does Progressa get from today to the target"*). In both, the target is named as a *precondition of the roadmap*, then skipped. The nearest substitute — **M4 4.4 "Adapt"** — produces a build/buy/share/sandbox **sourcing matrix**, which answers *"how will we obtain each piece"*, not *"what should the future-state architecture look like and how do the pieces fit together"*.

Element by element, against what a real target architecture contains:

- **Target capability model** — not taught. Capabilities are *scored for current maturity* in Assess (M2 2.6, M4 4.3), never *designed forward*.
- **Target data-ownership map** — only implicit. The *AS-IS* one-owner-per-domain catalogue is taught hard (M2 2.1, M3 3.1); the *target* appears only as a single sourcing line ("make PLR authoritative") for one domain in one sector. No method for the national target data-ownership map.
- **Target shared-platform set** — treated as a sourcing decision ("Identity → SHARE"), not a designed target-platform layer; which platforms a country *should stand up* is assumed, never designed.
- **Cross-agency integration / interoperability map** — **absent as a deliverable**. It appears only as an AS-IS gap ("point-to-point spaghetti", "no shared data exchange"), a roadmap wave ("Wave 3 — the data-exchange backbone"), and a sourcing label — never as a *designed* map of which agencies exchange which data over which mechanism. (Note: a sibling kit in this repo, `interop-ra-to-rfp:national-baseline-extractor`, exists precisely to *mine* the integration map from a National EA — confirming it is expected to live in the EA, but KP1 produces nothing that creates it.)
- **Target technology standards** — not taught; the Technology layer is taught AS-IS and learners are explicitly warned off depth ("going too deep, too early").

**Consequence:** a learner finishing KP1 sequences a roadmap (Plan) toward a "target" they were never taught to design. Three deliverables out of four. The most architecturally central output — the target architecture — is the one missing.

---

## Part B — Cross-module consistency audit

| Dimension | Result | Detail |
|---|---|---|
| **Persona arc** | ✅ Clean | M1 = S, M2–M5 = A, M6 = S, exactly as intended (Strategist → Architect → Strategist). |
| **Lifecycle integrity** | ✅ Clean (one known item) | All modules use the same five phases (Discover, Assess, Adapt, Plan, Execute & Govern) and **four sign-offs**, consistently. The only "six-phase" mention is in M1's own calibration item flagging the long-standing tension with the Inception Report §3's six-phase delivery spine — a known carried item, not an internal contradiction. |
| **Terminology** | ✅ Clean | The Progressa institutions (MoEYS, PNEA, PLR, PNIA, PDGA) are used identically in M2, M4 (and a consistent subset in M3); the metamodel, BDAT, building block, data domain, once-only are used consistently. No drift. |
| **Two structural arguments** | ✅ Clean | Both *planning-enables-re-use* and *EA-as-lingua-franca* are present in all six modules, framed consistently (e.g., the closing synthesis in 6.7 restates them in the same terms as 1.3/1.4). |
| **Persona-appropriate titling** | ✅ Clean | Capability-led headlines throughout; the Strategist modules (1, 6) lead with "make the case / win it / roll it out", the Architect modules with "read / classify / run / draft". |
| **PAERA citation consistency** | ⚠️ Two fixes | See below — §5.6 in Module 2, and the §5.2 gloss. |
| **Duplication vs progression** | ✅ Acceptable, confirm at review | The flagged boundaries (1.8↔6.1 signposts, 1.7↔6.4 the ask, 2.5↔M4 Progressa, 2.6↔4.3 Assess, M3↔4.6 governance, 1.4↔6.7 the era framing) each read as *deepening* (introduce → use as evidence; list → win; teach → demonstrate), not repetition. Each is carried as an explicit calibration item in the relevant module for ITU to confirm. |
| **Calibration consistency** | ✅ Clean | Recurring open items (AI-tool naming, prompt-on-screen, the five-vs-six-phase reconciliation) are stated consistently; no contradictions between modules. |

### The two citation-consistency fixes

1. **§5.6 in Module 2 is stale.** Module 2 cites PAERA §5.6 as **"Sourcing"** / "Sourcing — build/buy/share/sandbox", while Modules 3–6 cite it as **"Sourcing Strategy"** — which is PAERA's actual published heading. Module 2 predates the §5.6 correction applied from Module 3 onward. **Fix:** update Module 2's build script, §5.6 → "Sourcing Strategy", re-render and regenerate its MD. (Same class of fix as the §4.5 anchor-map correction already made.)
2. **§5.2 gloss varies.** §5.2 is cited as **"Architectural principles"** in M1–M3 but **"Principles"** (PAERA's literal heading) in M4. Minor, but pick one. **Recommendation:** keep "Architectural principles" everywhere as the clearer gloss (and note in the anchor map that PAERA's heading is "Principles"), or standardise on "Principles" — either is defensible; consistency is the point.

(The many "inconsistent" groupings the scan flagged under §4.1/§4.2/§4.3/§4.4/§4.6 are **not** PAERA-citation drift — they are the descriptive *ToR §4.x coverage* labels, which legitimately differ per subtopic. Those are fine.)

---

## Part C — The deliverable trace

Tracing each of the four national-EA deliverables to the teaching *and* the AI prompt that produces it:

| Deliverable | Taught in | Producing AI prompt | Traceable? |
|---|---|---|---|
| **AS-IS picture** | M2 2.1–2.6; M4 4.2–4.3 | 2.1 capture template → 4.3 / 5.2 ranked gap analysis | ✅ Yes |
| **Target architecture** | — | — (no target-architecture prompt exists) | ❌ **No** |
| **Roadmap** | M4 4.5; M6 6.6 | 4.5 wave-sequencing → 6.6 national-rollout sequencing | ✅ Yes |
| **Governance pack** | M3 3.1–3.7; M4 4.6 | 3.4 Board ToR, 3.5 review-gate checklist, 5.5 gate-decision paper | ✅ Yes |

Three of four deliverables trace cleanly from teaching to a copy-paste prompt that produces them. The target architecture has neither a teaching step nor a producing prompt.

---

## Part D — Remediation plan (prioritised)

**P1 — Close the target-architecture gap (required for the learning outcome).** Add an explicit **"Design the Target Architecture"** treatment, demonstrated on Progressa, that produces: the target capability model, the target data-ownership map, the target shared-platform/building-block set, the target technology standards, and the cross-agency integration map. Two options:

- *Option A (recommended): extend Module 4.* Insert a new subtopic between Assess (4.3) and Adapt (4.4) — e.g., **"Phase 2.5 / a 'Design the target state' step — from gaps to a target architecture"** — that turns the ranked gaps into a designed future state, with its own AI prompt (a "target-architecture skeleton" generator, mirroring the 4.3 gap-analysis prompt). This makes Module 4 an 8-subtopic module and slots the missing step exactly where the lifecycle skips it. It also resolves the dangling "target state" references in 4.5 and 1.6 (which would now point to a real, taught deliverable).
- *Option B: a short standalone module.* A dedicated "Designing the target architecture" module. Heavier; only worth it if ITU wants the target-design craft taught at the same depth as the AS-IS modelling in Module 2.

A decision is needed on the **integration map** specifically: it is a core national-EA artefact, but it is also the heart of KP2 (Government Interoperability Framework). Recommendation: KP1's target-architecture step should produce a *first-cut* integration map (which agencies exchange which domains, at what priority) as part of the target architecture, and KP2 deepens it into the full interoperability design — with an explicit hand-off note so the two KPs complement rather than duplicate.

**P2 — Fix the two citation-consistency issues** (§5.6 in Module 2 → "Sourcing Strategy"; standardise the §5.2 gloss). Small, mechanical, run through `kp-citation-verify` + `kp-build-render`.

**P3 — Confirm the deliberate cross-module echoes at the Tuesday review** (1.7↔6.4, 1.8↔6.1, 1.4↔6.7). The audit judges them as deepening, not repetition, but they are editorial calls ITU should ratify.

**What is already solid and needs no change:** the AS-IS modelling and assessment craft (M2), the governance treatment (M3), the roadmap and the end-to-end demonstration (M4), the AI plays (M5), and the evidence/case/rollout (M6). Five of the six modules are in good shape; the curriculum-level gap is the single missing step, not a weakness in what is taught.

---

## One-line bottom line

KP1 teaches a learner to **see** the current state, **plan** the roadmap, and **govern** the practice — but not to **design** the target architecture the roadmap is meant to deliver. Add one "Design the Target Architecture" step (best as a new Module 4 subtopic) and fix two stale citations, and the curriculum will fully meet the outcome: a learner able to produce a complete national EA with both the target architecture and the roadmap.

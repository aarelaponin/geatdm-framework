# KP1 — Government Enterprise Architecture · video-script bundles

The versioned home of the FiscalAdmin OÜ — ITU/Giga **Knowledge Product 1** (Government Enterprise Architecture) video-script bundles. These are the deliverable scripts produced under contract RFQ-S-GIGA-2026-022 / PO #334304, built with the `itu-giga-kp` kit in `../ITU-Giga-KP-Plugin/`.

## What's here

| Module | Topic | Persona | Videos | Runtime | Source | Markdown |
|---|---|---|---|---|---|---|
| 1 | Why a PAERA-anchored EA, and the lifecycle in one page | Strategist | 7 (1.1–1.7) | ~29 min | `build_kp1_module1_v03.js` | `KP1_Module1_Script_Bundle_v0.3.md` |
| 2 | EA principles, the metamodel and the BDAT layers | Architect | 7 (2.1–2.7) | ~32 min | `build_kp1_module2_v02.js` | `KP1_Module2_Script_Bundle_v0.2.md` |
| 3 | EA repository, tooling and governance | Architect | 7 (3.1–3.7) | ~29 min | `build_kp1_module3_v02.js` | `KP1_Module3_Script_Bundle_v0.2.md` |
| 4 | Progressa demonstration — applying the method end-to-end | Architect | 8 (4.1–4.8) | ~28 min | `build_kp1_module4_v02.js` | `KP1_Module4_Script_Bundle_v0.2.md` |
| 5 | Cross-country evidence, cross-sector applicability and dissemination | Strategist | 6 (5.1–5.6) | ~23 min | `build_kp1_module5_v02.js` | `KP1_Module5_Script_Bundle_v0.2.md` |

**35 videos, ~141 minutes of target runtime** (was 37 videos and ~190 minutes before the September 2026 tightening pass). The v0.1 / v0.2 build scripts and their `.md` are kept alongside the new ones as the pre-tightening record.

**All five KP1 modules are authored** (Modules 1 and 5 Strategist-facing; 2–4 Architect-facing). The original Module 5 (AI plays) was retired in September 2026: its plays duplicated the AI usage tips already carried in the other modules, and its ground rules and safeguards now live only in the GitBook companion as a standalone section. The cross-country capstone that was Module 6 was renumbered to Module 5 at the same time, subtopics and all (6.1–6.7 → 5.1–5.7). Each passes the `kp-bundle-qa` compliance gate and has had its PAERA citations verified against the source.

## The source-of-truth rule

**The `.js` build script is the single source of truth.** The `.md` here and the `.docx` deliverable are BOTH generated from it — never hand-edit either; edit the build script and regenerate. This is the same single-source discipline the bundles themselves teach (see Module 3.1 and 3.3).

```
build_kp1_moduleN_v0X.js   ← edit this (the source)
        │
        ├── kp-build-render  → KP1_ModuleN_Script_Bundle_v0.X.docx   (ITU deliverable)
        └── bundle_to_md.py  → KP1_ModuleN_Script_Bundle_v0.X.md     (this folder, GitBook-ready)
```

- **The `.md`** is the readable, diffable, GitBook-ready rendering — committed here so module changes show up as text diffs in git and feed the GitBook companion.
- **The `.docx`** is the Word deliverable sent to ITU. It is *not* stored here (it is a regenerable binary); it is produced into the contract working folder when needed.

## Regenerating

From this folder, using the kit scripts in `../ITU-Giga-KP-Plugin/skills/`:

```bash
# Markdown (regenerate after any build-script edit)
python3 ../ITU-Giga-KP-Plugin/skills/kp-build-render/scripts/bundle_to_md.py build_kp1_module3_v01.js

# Word deliverable into the contract working folder (OUT_PATH override)
SCRATCH=/tmp/kpdocx OUT_PATH="/path/to/itu-knowledge/_02_Design/_KP01/KP1_Module3_Script_Bundle_v0.1.docx" \
  bash ../ITU-Giga-KP-Plugin/skills/kp-build-render/scripts/build_render.sh build_kp1_module3_v01.js
```

Before any module is shared with ITU, run the two gates: `kp-citation-verify` (PAERA fidelity) and `kp-bundle-qa` (ITU compliance). See the kit README.

## The September 2026 tightening pass

All five build scripts were tightened in September 2026 against the plan in
`../ITU-Giga-KP-Plugin/docs/plans/2026-09-03-kp1-tightening-implementation.md`:
opener and recap word caps throughout, duplicated cross-module teaching replaced by
one self-contained sentence, the former 1.8 retired into a two-slide close on 1.7,
and the former 5.3 and 5.6 merged into one video with 5.7 renumbered 5.6. Every
subtopic gained a `practice` field — the artefact named by its AI usage tip — which
renders as an un-narrated on-screen practice box on the recap slide and replaces the
narrated "Your play" handoff.

**19,350 spoken words / 272 slides / 37 videos → 15,585 / 247 / 35** (−19% words, −9% slides).

> **Status of everything downstream of the scripts.** Only the `.js` build scripts and
> their `.md` renderings are tightened. The deck scripts (`build_kp1_moduleN_deck_v01.py`),
> the per-video `.pptx` files, the split specs under `videos/`, and the eight published
> Module 1 videos are all still v0.1 and are **known-stale against these scripts**. They
> are regenerated from these scripts when production resumes (Phase B of the plan:
> `vo_diff.py` and the deck practice-box helper first, then the deck scripts module by
> module, then the Module 1 re-narration and YouTube swap). No take should be generated
> for a module until `vo_diff.py` reports zero mismatches for it.
>
> `videos/module_1/en/scripts/KP1_M1_1.0_IntroScript_v0.2.md` still says "over the next
> eight short videos"; it is re-cut with the Module 1 videos, not before.

## Status

All five modules pass the compliance gate (0 hard failures) and the curriculum gate
(`kp-curriculum-qa --matrix kp1`: 0 findings, 0 warnings). PAERA citations are unchanged
by the tightening — no section reference was added, and every surviving subtopic keeps
the anchor it had. Open calibration items for ITU's Tuesday-call review are carried in
Section 5 of each bundle.

Four subtopics — 1.1, 1.3, 1.6 and 2.1 — have no "In one sentence" recap slide, so the
practice box has no recap slide to sit on. `qa_bundle.py` check 9 reports them. Adding a
slide works against the slide targets, so the decision is ITU's; it is in the transmittal.

---

*FiscalAdmin OÜ. Bundles co-located with the `itu-giga-kp` kit. Last tightened 3 September 2026.*

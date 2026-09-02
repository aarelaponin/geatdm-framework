# KP1 — Government Enterprise Architecture · video-script bundles

The versioned home of the FiscalAdmin OÜ — ITU/Giga **Knowledge Product 1** (Government Enterprise Architecture) video-script bundles. These are the deliverable scripts produced under contract RFQ-S-GIGA-2026-022 / PO #334304, built with the `itu-giga-kp` kit in `../ITU-Giga-KP-Plugin/`.

## What's here

| Module | Topic | Persona | Source | Markdown |
|---|---|---|---|---|
| 1 | Why a PAERA-anchored EA, and the lifecycle in one page | Strategist | `build_kp1_module1_v02.js` | `KP1_Module1_Script_Bundle_v0.2.md` |
| 2 | EA principles, the metamodel and the BDAT layers | Architect | `build_kp1_module2_v01.js` | `KP1_Module2_Script_Bundle_v0.1.md` |
| 3 | EA repository, tooling and governance | Architect | `build_kp1_module3_v01.js` | `KP1_Module3_Script_Bundle_v0.1.md` |
| 4 | Progressa demonstration — applying the method end-to-end | Architect | `build_kp1_module4_v01.js` | `KP1_Module4_Script_Bundle_v0.1.md` |
| 5 | Cross-country evidence, cross-sector applicability and dissemination | Strategist | `build_kp1_module5_v01.js` | `KP1_Module5_Script_Bundle_v0.1.md` |

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

## Status

All five modules pass the compliance gate (0 hard failures) and have had their PAERA citations verified against `itu-knowledge/_inputs/PAERA_document_v.1.0.docx`. Open calibration items for ITU's Tuesday-call review are carried in Section 5 of each bundle.

---

*FiscalAdmin OÜ. Bundles co-located with the `itu-giga-kp` kit, 26 June 2026.*

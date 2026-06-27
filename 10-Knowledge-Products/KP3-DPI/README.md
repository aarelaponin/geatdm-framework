# KP3 — Education DPI Roadmap (build-first)

The third Knowledge Product deliverable home: the video script bundles (`.js` build scripts + generated `.md`) and the runnable **build pack**. KP3 is **build-first** — after a lean foundations frame, four straight Architect modules stand up the foundational Building Blocks (Registration, Registry, Identity, Payment) on the Linkup bus KP2 left running. The five-domain assessment and the wave roadmap survive as the build-order frame (Module 1) and a reusable toolkit in the build pack, not as standalone advisory modules.

## Contents

- `build_kp3_moduleN_v0X.js` — the video-script-bundle build scripts (the single source of truth). The `.docx` ITU deliverables are generated from these and live in the engagement folder, not here.
- `KP3_ModuleN_Script_Bundle_v0.X.md` — GitBook-ready Markdown, generated from the `.js` by the kit's `bundle_to_md.py`. Never hand-edited.
- `KP3-build-pack/` — the runnable Progressa DPI foundation: `manifest.yaml`, `configs/`, `prompts/`, `scripts/`, `acceptance/`, `runbook.md`. Filled by `bb-config-gen`, proven by `kp-solution-verify`. Reuses the KP2 `x-road-bus` (bottom-up: depends_on KP2).

## Status

- **Module 1 — DPI foundations & the build order** (6 Strategist subtopics: foundational test, the five domains, reading maturity, foundational vs sectoral, the build order, the education shortlist): authored and gated — `kp-bundle-qa` 0 hard / 0 soft, both structural arguments present, PAERA anchors verified against the v1.0 document (§3.3, §3.4, §3.1, §5.2, §5.7). v0.1 draft.
- **Module 2 — The Registration Building Block** (6 Architect subtopics: what the block does, build to the GovStack spec, generate the intake flow, validation that protects the record, writing to the registry over the bus, the block as configuration): authored and gated — `kp-bundle-qa` 0 hard / 0 soft, both structural arguments present, GovStack Registration spec + PAERA anchors (§3.4.2, §3.4.3, §3.4.4, §5.2, §5.6) used. First build module; the persona turns Architect. v0.1 draft.
- **Build pack**: scaffolded (4 blocks: registration, registry-plr, identity-pnia, payment-paypro), `manifest.yaml` aligned to the module plan, static check PASS (configs pending `bb-config-gen`).
- **Modules 3–6** (Registry MDM · Identity & Payment · Wire & prove · AI plays/govern): planned, not yet authored.

Built with the `itu-giga-kp` kit (v0.3). The module structure and the build-first rationale are in the KP3 Plan (engagement folder, `_02_Design/_KP03/KP3_Plan_v0.1.md`). Scope: Education only, public anchors only.

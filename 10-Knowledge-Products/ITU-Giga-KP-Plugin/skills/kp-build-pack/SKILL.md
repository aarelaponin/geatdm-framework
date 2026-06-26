---
name: kp-build-pack
description: >-
  Scaffold and assemble the runnable BUILD PACK that ships alongside an implementation KP's video bundle
  (KP2 interoperability, KP3 DPI, KP4 service delivery) — the configs, prompt library, deploy/seed/acceptance
  scripts, run book and acceptance suite that make "ready solution" literal rather than illustrative. Use
  WHENEVER the task is to start, lay out, or assemble the runnable companion for a KP2/3/4 module: "scaffold
  the build pack", "set up the Progressa reference implementation", "where do the configs/prompts/scripts go",
  "assemble the runnable pack", "lay out KP2's build pack", "add a build artefact to the pack". It owns the
  build-pack anatomy and manifest so every track is laid out the same way and the cumulative Progressa solution
  assembles bottom-up. Mirrors kp-build-render (which builds the video docx): this builds the runnable side.
  Pairs with bb-config-gen (fills the configs) and kp-solution-verify (proves the pack runs).
compatibility: Python 3 (standard library only) for the scaffolder. The pack's own deploy/acceptance scripts target the live Linkup (X-Road) + Joget stack and run there, not in the sandbox.
---

# KP build pack — the runnable-companion mechanics

## Why this exists

KP1 shipped one artefact: a video bundle that taught how to *plan*. KP2–4 ship two: the video bundle (built by `kp-build-render`) **and a build pack** — the runnable side that delivers on "end-to-end ready solution." The pack is where the configuration the modules generate actually lives, deploys and is proven. Without a fixed layout, three tracks drift into three incompatible shapes and the cumulative Progressa solution never assembles. This skill fixes the layout once.

**The cardinal rule still holds:** the pack's artefacts are generated, never hand-fabricated. Configs come from `bb-config-gen`; the video that teaches them comes from the build script. A change goes to the generator or the spec, then you regenerate — you do not hand-patch a config in the pack and let it drift from the module that teaches it.

## What an implementation KP delivers

```
KPn (e.g. KP2 — interoperability)
├── video bundle            (build_render → .docx / .md)   ← teaches the build
└── build pack              (this skill)                   ← IS the ready solution
```

The video bundle and the build pack are versioned together in the KP's home (`10-Knowledge-Products/KPn-*/`), the same way `KP1-GEA/` holds KP1.

## The build-pack anatomy (fixed across all three tracks)

```
KPn-build-pack/
├── manifest.yaml          # the pack's index: track, BBs, modules→artefacts→acceptance
├── README.md              # what this pack is, prerequisites, how to stand it up
├── configs/               # the generated configuration artefacts (the deliverable core)
│   └── <bb>/...            # one folder per Building Block / exchange point
├── prompts/               # the generating prompts (prompt → config), copy-paste ready
│   └── <module>.md        # the AI play whose OUTPUT is the config in configs/
├── scripts/
│   ├── deploy.*           # load configs onto the stack (reuse joget-deploy / X-Road CLI)
│   ├── seed.*             # load Progressa demo data
│   └── acceptance.*       # run the acceptance suite (reuse joget-db-inspect / test calls)
├── acceptance/            # one named, runnable check per module
│   └── <module>.md        # given → when → then; the proof the slice runs
└── runbook.md             # stand-up-from-zero on the Linkup/Joget stack
```

**The manifest is the spine.** `manifest.yaml` lists, per module: the Building Block(s) it configures, the config artefact(s) under `configs/`, the generating prompt under `prompts/`, and the acceptance check under `acceptance/`. `kp-solution-verify` reads the manifest to check the pack is complete and to drive the live run. Every module must resolve to all four (config, prompt, acceptance, and the deploy/seed step that loads it).

## How to use it

1. **Scaffold:** `python3 scripts/scaffold_build_pack.py <kp> <track> [--bbs id,registry,payment] [--modules 1..6]` creates the skeleton above with a populated `manifest.yaml`, placeholder `configs/<bb>/` folders, one `prompts/<module>.md` stub and one `acceptance/<module>.md` stub per module, and a `runbook.md` outline. Pure Python, runs offline.
2. **Fill the configs** with `bb-config-gen` — it routes each Building Block to the right engine (X-Road for KP2, the `mtca-data-platform` MDM skills for KP3, the `joget-*` family for KP4) and writes the artefact into `configs/<bb>/` plus its generating prompt into `prompts/`.
3. **Wire the scripts** — `deploy.*` / `seed.*` / `acceptance.*` reuse the existing engine skills; they target the live stack, so they run there (see `mtca-dev-workflow` / `joget-deploy` for the two-track method), not in the sandbox.
4. **Prove it** with `kp-solution-verify` — static completeness from the manifest, then the live run on the stack.

## The cumulative Progressa rule (bottom-up)

The three packs are not independent. Built KP2 → KP3 → KP4, each pack **consumes the one below**:

- **KP2** stands up the bus: Progressa member systems (PLR, PNEA, PNIA, MoEYS, PDGA) registered on Linkup, a once-only exchange proven.
- **KP3** puts BBs on that bus: the school master-data registry (bronze/silver/gold), identity, the PayPro rail — its `runbook.md` lists the KP2 pack as a prerequisite.
- **KP4** composes services over those BBs: the three Joget services — its `runbook.md` lists KP2 + KP3 as prerequisites.

Stood up in order, the three packs assemble into one running Progressa reference implementation. Keep the Progressa institution names and the BB set identical across packs (they are the join keys).

## Scope discipline

Everything in `configs/`, `prompts/`, `runbook.md` and `acceptance/` is deliverable content the learner sees. The same rules as the videos apply: Education only; public anchors only (GovStack BB specs, X-Road/NIIS, EIF, UNDP, W3C VC); no `GEATDM` / `TK-IO-` / `TK-DPI-` / IMF-TA-RA strings; the internal engine provenance (`joget-*`, `mtca`) stays out of the pack text. `kp-bundle-qa` greps the pack files for these alongside the build script.

## What good looks like

The pack scaffolds with a complete `manifest.yaml`; every module resolves to a config + a prompt + an acceptance check; the run book stands the slice up from zero on the live stack; and `kp-solution-verify` passes (static + live). Then the pack is a v0.x deliverable, paired with a gated video bundle.

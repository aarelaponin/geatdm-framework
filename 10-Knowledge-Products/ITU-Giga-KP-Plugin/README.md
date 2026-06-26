# ITU-Giga-KP Plugin

**Production kit for the FiscalAdmin OÜ — ITU/Giga Knowledge Products contract** (RFQ-S-GIGA-2026-022, Purchase Order #334304).

The contract produces four Knowledge Products on Education Digital Transformation. Each KP is decomposed into modules; each module into subtopics (1.1, 1.2, …); each subtopic ships as one ~5-minute standalone video plus written GitBook content plus an embedded AI usage prompt. This kit encodes the discipline that makes each module land close to deliverable quality on the first draft instead of after three revision cycles.

It is modelled on the `interop-ra-to-rfp` kit in `08-Interoperability/RA-to-RFP-Plugin/`: one **author** skill plus dedicated **gate** and **mechanic** skills that the author skill hands off to.

## The two families

KP1 taught how to **plan** — its deliverable is a video bundle. KP2–4 teach how to **build** that plan along PAERA's three implementation tracks (Interoperability, DPI, Service delivery) — their deliverable is a video bundle **plus a runnable build pack** that stands a Progressa solution up on the Linkup (X-Road) + Joget stack. The KP1 skills apply to every module; three more skills add the build-pack side for KP2–4.

## The skills

| Skill | Role | Use when |
|---|---|---|
| `itu-giga-kp-bundle` | **Author** | Produce or revise a KP module script bundle — the full subtopic structure, scripts, slide specs, AI prompts, metadata. Owns the audience lock, the eight ITU compliance rules, the two structural arguments, and (Step 10) the implementation-KP authoring mode. |
| `kp-build-render` | **Mechanic** | Build the Node.js docx and verify it — docx install, `NODE_PATH`, `node build`, `soffice` → PDF → page images. Removes the per-module setup friction. |
| `kp-citation-verify` | **Gate** | Drive every PAERA citation and paraphrased term from DRAFT → VERIFIED against the real PAERA document (and, for KP2–4, every config's spec citation), before a module is shared. |
| `kp-bundle-qa` | **Gate** | Run the ITU compliance QA gate after any build or edit — forbidden strings, seven-element completeness, numbering, no in-video intros/outros, both structural arguments, metadata and word-count checks, plus a fresh-eyes render review. Greps the build pack too. |
| `kp-build-pack` | **Mechanic** *(KP2–4)* | Scaffold and assemble the runnable build pack (configs / prompts / scripts / acceptance / runbook / manifest) that ships alongside the video bundle. |
| `bb-config-gen` | **Generator** *(KP2–4)* | Turn a Building-Block spec + a Progressa service brief into the configuration that wires the block, routing to the right engine (X-Road / mtca / joget-*). The IR's "bb-decompose". |
| `kp-solution-verify` | **Gate** *(KP2–4)* | Confirm the build pack is complete and actually runs — static manifest completeness, then the live acceptance suite on the stack. A pack is UNVERIFIED until it runs. |

## The workflow

```
                 ┌─────────────────────────────────────────────┐
   lock structure│  itu-giga-kp-bundle  (author the module)     │
        ───────► │  references/: paera-anchor-map,              │
                 │  register-transposition, ai-prompt-patterns  │
                 └───────────────┬─────────────────────────────┘
                                 │ build script ready
                                 ▼
                 ┌─────────────────────────────────────────────┐
                 │  kp-build-render   (node build → docx → PDF) │
                 └───────────────┬─────────────────────────────┘
                                 ▼
        ┌────────────────────────┴────────────────────────┐
        ▼                                                  ▼
 ┌──────────────────────┐                      ┌──────────────────────────┐
 │ kp-citation-verify   │                      │ kp-bundle-qa             │
 │ (PAERA fidelity)     │                      │ (ITU compliance gate)    │
 └──────────┬───────────┘                      └────────────┬─────────────┘
            └───────────────► fixes go to the build script ◄┘
                              (never edit the docx), then re-build & re-gate
```

The cardinal rule, inherited from the contract's build-script convention: **fixes go to the build script and the spec, never to the docx.** Every gate emits a list of edits to apply upstream, then you re-render.

## Relationship to the contract memory

The authoritative project memory lives in the contract tree at `itu-knowledge/CLAUDE.md` (audience lock, the eight ITU compliance rules, the two structural arguments, scope boundary, visual vocabulary, anti-patterns). These skills operationalise it. If a skill and the CLAUDE.md ever conflict, the CLAUDE.md wins and the skill is updated.

## Installing

This folder is the version-controlled **source of truth** for the kit. To use the skills live in Claude, install the plugin via the app's plugin/marketplace mechanism (Settings → Capabilities), or package the folder as a `.plugin` archive. Editing the files here does not change an already-installed copy — re-install or re-sync after changes.

---

For KP2–4 the flow extends: after authoring, `kp-build-pack` scaffolds the runnable pack, `bb-config-gen` fills its configs from public specs, and `kp-solution-verify` proves it runs — in addition to `kp-citation-verify` and `kp-bundle-qa` on the video. See `itu-giga-kp-bundle` Step 10 and `references/implementation-kp-pattern.md`.

---

*FiscalAdmin OÜ. Kit v0.2.0, 26 June 2026 — KP1 complete; the implementation-KP extension (kp-build-pack, bb-config-gen, kp-solution-verify) added for KP2–4. Created v0.1.0 on 2 June 2026.*

# ITU-Giga-KP Plugin

**Production kit for the FiscalAdmin OÜ — ITU/Giga Knowledge Products contract** (RFQ-S-GIGA-2026-022, Purchase Order #334304).

The contract produces four Knowledge Products on Education Digital Transformation. Each KP is decomposed into modules; each module into subtopics (1.1, 1.2, …); each subtopic ships as one ~5-minute standalone video plus written GitBook content plus an embedded AI usage prompt. This kit encodes the discipline that makes each module land close to deliverable quality on the first draft instead of after three revision cycles.

It is modelled on the `interop-ra-to-rfp` kit in `08-Interoperability/RA-to-RFP-Plugin/`: one **author** skill plus dedicated **gate** and **mechanic** skills that the author skill hands off to.

## The skills

| Skill | Role | Use when |
|---|---|---|
| `itu-giga-kp-bundle` | **Author** | Produce or revise a KP module script bundle — the full subtopic structure, scripts, slide specs, AI prompts, metadata. Owns the audience lock, the eight ITU compliance rules, and the two structural arguments. |
| `kp-citation-verify` | **Gate** | Drive every PAERA citation and paraphrased term from DRAFT → VERIFIED against the real PAERA document, before a module is shared. Retires the "paraphrased, not verified" calibration risk. |
| `kp-bundle-qa` | **Gate** | Run the ITU compliance QA gate after any build or edit — forbidden strings, seven-element completeness, numbering, no in-video intros/outros, both structural arguments present, metadata and word-count checks, plus a fresh-eyes render review. |
| `kp-build-render` | **Mechanic** | Build the Node.js docx and verify it — docx install, `NODE_PATH`, `node build`, `soffice` → PDF → page images. Removes the per-module setup friction. |

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

*FiscalAdmin OÜ. Kit v0.1.0, created 2 June 2026, after KP1 Modules 1 and 2.*

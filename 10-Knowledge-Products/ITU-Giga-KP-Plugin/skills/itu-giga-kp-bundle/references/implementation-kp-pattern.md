# Implementation-KP pattern (KP2–4)

How KP2, KP3 and KP4 differ from KP1, and the shape every implementation-KP module follows. Read this before authoring any KP2–4 module; it is the companion to `bb-config-gen/references/bb-spec-map.md`.

## The shift: plan → build

| | KP1 | KP2–4 |
|---|---|---|
| Teaches | how to **plan** | how to **build** the plan |
| PAERA track | the EA / lifecycle | Interoperability (KP2) · DPI (KP3) · Service delivery (KP4) |
| AI play produces | a **document** (diagnostic, slide, ToR) | **configuration that runs** |
| Deliverable | a video bundle | a video bundle **+ a runnable build pack** |
| Gates | citation-verify, bundle-qa | the same **+ solution-verify** (does it run) |

The repeated pattern in every KP2–4 module:

> learner + Claude + (methodology + Building-Block spec + API) → generate **configuration** → wire a **Building Block** → **working solution** on the Linkup (X-Road) + Joget stack.

## The build-module anatomy

Keep the seven KP1 elements (header, single-message, script beats, text-only slide spec, four-part AI tip, metadata, page break). The video stays text-only and ~5 minutes. Add five **build elements** — in the GitBook companion and the build pack, not on screen:

1. **The public spec/API** the step teaches against (cite it; see `bb-spec-map.md`).
2. **The generating prompt** — its output *is* the config artefact (the AI play is now load-bearing).
3. **The config artefact** — lands in the pack's `configs/<bb>/`.
4. **The wiring/run step** — how it loads onto the stack and what "it works" means.
5. **The acceptance check** — the runnable proof, in the pack's `acceptance/<module>.md`.

## The three tracks and their Building Blocks

| KP | Track | Building Blocks | Public anchors (cite these) |
|---|---|---|---|
| **KP2** | Interoperability — the bus | X-Road bus, member subsystems (PLR, PNEA, PNIA), access control, service descriptions, the legal/data-sharing layer | EIF four layers; NIIS X-Road; PAERA §3.4.3, §3.2, §3.3; once-only §5.2 #5 |
| **KP3** | DPI — the blocks on the bus | registry (MDS bronze/silver/gold), identity, payment (PayPro), consent, notification; five-domain maturity; wave roadmap | GovStack BB specs; UNDP DPI Maturity; ID4D / ITU DPI Safeguards; PAERA §3, §5.6, §5.7 |
| **KP4** | Service delivery — services over the blocks | Learner Registration, Scholarship Management, Digital Credential Issuance | GovStack BB patterns (PAERA Annex A1.3); Joget DX 8.x docs; W3C Verifiable Credentials |

Engines are internal (X-Road CLI for KP2; `mtca-data-platform` for KP3; `joget-*` for KP4) and never cited in deliverable content.

## The cumulative Progressa chain (bottom-up)

Build KP2 → KP3 → KP4; each consumes the one below, assembling into one running solution:

```
KP1 (the plan) ─ Module 4.5 first-cut integration map ─▶
KP2  X-Road bus + members registered            ──▶  a once-only exchange runs
KP3  registry · identity · payment on the bus   ──▶  the DPI foundation runs
KP4  the three services over the BBs            ──▶  Progressa runs end-to-end
```

Keep identical across all packs (they are the join keys): the Progressa institutions **MoEYS, PLR, PNEA, PNIA, PDGA, PayPro** and the BB ids.

## The kit flow for an implementation KP

```
itu-giga-kp-bundle (author the video module, Steps 1–10)
        │
        ├─ kp-build-render   → the video .docx / .md
        ├─ kp-build-pack     → scaffold the runnable pack (manifest + skeleton)
        ├─ bb-config-gen     → fill configs from specs (+ capture the prompts)
        │
        ├─ kp-citation-verify   (video + config citations vs the published specs)
        ├─ kp-bundle-qa         (video ITU compliance + pack forbidden-string scan)
        └─ kp-solution-verify   (the pack is complete AND runs on the stack)
```

A KP2–4 module ships only when the video passes citation-verify + bundle-qa **and** the build pack passes solution-verify. Fixes go upstream (build script / generating prompt / spec), then regenerate — never hand-edit the docx or a deployed config.

---

*Maintained alongside `itu-giga-kp-bundle/SKILL.md` (Step 10). Pairs with `bb-config-gen/references/bb-spec-map.md`. Source: KP2–4 Delivery Plan v0.1 (`itu-knowledge/_02_Design/`).*

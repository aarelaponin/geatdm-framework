---
name: bb-config-gen
description: >-
  Turn a Building-Block spec + a Progressa service brief into the CONFIGURATION that wires that block — the core
  "use Claude to produce config that talks to a BB" engine behind KP2–4. Use WHENEVER the task is to generate or
  design the configuration/adapter for a Building Block or exchange point: "generate the X-Road config", "wire
  PLR to PNEA", "configure the identity / registry / payment BB", "build the services.yml", "turn this BB spec
  into config", "what config does this exchange need". It routes each block to the right existing engine —
  X-Road for interoperability (KP2), mtca-data-platform for DPI (KP3), joget-* for service delivery (KP4) — and
  emits the config artefact plus the generating prompt that reproduces it, both landing in the build pack. The
  IR's "bb-decompose". Pairs with kp-build-pack and kp-solution-verify; references/bb-spec-map.md is the
  BB → spec → engine crosswalk.
compatibility: Python 3 (standard library only) for the scaffolder. The actual generation is Claude reasoning over the public spec + service brief; the engines it routes to (X-Road CLI, mtca-data-platform, joget-*) run on the live stack.
---

# BB config gen — spec + brief → configuration

## Why this exists

The promise of KP2–4 is that a learner uses Claude, a Building-Block spec and an API to **generate the configuration** that makes a real solution run — not to read about it. That generation is one repeatable move applied to many blocks: *take the public spec section + the Progressa service brief, produce the config artefact, and capture the prompt that produced it.* This skill owns that move so every block is configured the same way, cites the right public spec, and lands in the build pack in the right place. It is the engine `kp-build-pack` calls to fill `configs/` and `prompts/`.

**It does not reinvent the build engines — it routes to them.** The team already owns the generators; this skill points the right one at the right block and standardises the output.

## The one move (every Building Block, every track)

```
public BB spec section  +  Progressa service brief
            │
            ▼   (the generating prompt — Claude reasons over both)
   configuration artefact   ─────────────►  configs/<bb>/...
            │                               prompts/<module>.md   (the prompt, captured)
            ▼
   acceptance check (how we know it works) ─►  acceptance/<module>.md
```

The prompt's **output is the artefact**. Capture both: the artefact ships in the pack; the prompt ships as the teaching AI play in the video module and in `prompts/`. Never write a config by hand — if it can't be generated from a public spec + a brief, the module can't teach it.

## Routing — which engine builds which block

See `references/bb-spec-map.md` for the full crosswalk. In short:

| Track | Block(s) | Public spec to cite | Engine that generates the config |
|---|---|---|---|
| **KP2 interoperability** | X-Road bus, member subsystems, access control, service descriptions | X-Road API docs (niis.org); EIF four layers | X-Road CLI / API configs (subsystem ids, ACL, OpenAPI/WSDL service descriptions) |
| **KP3 DPI** | registry (MDS bronze/silver/gold), identity, payment (PayPro), consent, notification | GovStack BB specs (govstack.global); UNDP DPI Maturity; ID4D | `mtca-data-platform`: `build-dbt-model`, `onboard-source`, `add-dq-checks`, `import-schema-to-catalogue`, `expose-api` |
| **KP4 service delivery** | the three services over the BBs | GovStack BB patterns (PAERA Annex A1.3); Joget docs; W3C VC | `joget-*`: `joget-req-analyst`, `joget-component-architect`, `joget-form-gen`, `joget-workflow-gen`, `joget-datalist-gen`, `joget-userview-gen` |

The provenance of the engine stays internal: the **video and the pack cite the public spec**, never `joget-*` / `mtca` / `GEATDM`.

## How to use it

1. **Pick the block and the module** it belongs to (from the pack's `manifest.yaml`).
2. **Scaffold the artefact + prompt:** `python3 scripts/new_bb_config.py <track> <bb> --module <m.n> --out <pack_dir>` writes a config-artefact stub (with `[confirm]` placeholders, not invented values) into `configs/<bb>/` and a four-part generating-prompt stub into `prompts/<m.n>.md`, pre-filled with the right public-spec pointer for the block. Pure Python, offline.
3. **Generate for real** — run the routed engine (X-Road / `mtca` / `joget-*`) against the public spec + the Progressa brief to produce the actual config; replace the stub.
4. **Define the acceptance check** in `acceptance/<m.n>.md` — the test call or `joget-db-inspect` query that proves this config does its job.
5. **Verify** with `kp-citation-verify` (the spec citation is real and matches) and later `kp-solution-verify` (the config deploys and the check passes).

## The `[confirm]` discipline (borrowed from the interop-ra-to-rfp kit)

The scaffolder emits placeholders, not guesses. A subsystem identifier, an ACL entry, a data field, a payment endpoint — each is `[confirm: <what to look up in the spec>]` until checked against the published spec or the live registry. Inventing an identifier that looks plausible is the failure this prevents: a wrong member id silently breaks routing, and a reviewer who checks the spec catches it. Generate from the spec; confirm against the spec.

## What good looks like

Every block in the pack has a generated config artefact (no hand-fabricated values, every identifier confirmed against a public spec or the live registry), a captured four-part generating prompt that reproduces it, and a paired acceptance check. The config cites only public specs. Then `kp-solution-verify` can deploy it and prove it runs.

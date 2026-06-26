---
name: kp-solution-verify
description: >-
  Runnable-acceptance gate for an implementation KP (KP2–4): confirm the build pack is COMPLETE and actually
  RUNS — every module resolves to a config + prompt + acceptance check, and the acceptance suite passes on the
  live Linkup (X-Road) + Joget stack. Use WHENEVER a build pack is finished or edited and before it is shared:
  "verify the solution", "does the pack run", "is the build pack complete", "run the acceptance suite", "did the
  exchange / service actually work", "prove the Progressa slice", "gate the build pack". A build pack is
  UNVERIFIED until its acceptance suite passes on the stack — the runnable analogue of kp-citation-verify's
  DRAFT→VERIFIED. The static half (manifest completeness, unresolved [confirm], well-formedness) runs offline
  via scripts/check_pack.py; the live half runs on the stack reusing joget-deploy, joget-db-inspect and X-Road
  test calls. Run after kp-build-pack + bb-config-gen, alongside kp-bundle-qa (videos) and kp-citation-verify
  (specs), before any KP2–4 module ships.
compatibility: Python 3 (standard library only) for the static manifest check. The live run targets the Linkup (X-Road) + Joget DX 8.x stack and reuses joget-deploy / joget-db-inspect; it runs on the workstation, not the sandbox.
---

# KP solution verify — does the ready solution actually run?

## Why this exists

KP1 had one thing to verify: a clean document. KP2–4 add a second, harder thing: a build pack that is supposed to **run**. "Ready solution" is a claim that either holds on the stack or does not — the same discipline as `kp-citation-verify`'s DRAFT→VERIFIED, applied to a running system instead of a citation. A pack with a missing acceptance check, an unresolved `[confirm:` identifier, or a config that deploys but returns nothing is not a deliverable; it is a draft that looks finished. This gate makes "it runs" a checked fact.

**A build pack is UNVERIFIED until its acceptance suite passes on the live stack.** Only a VERIFIED pack ships alongside its gated video bundle.

This gate does not check the videos (that is `kp-bundle-qa`) or the spec citations (that is `kp-citation-verify`). Run all three.

## Two halves

### 1. Static — completeness and well-formedness (offline)

`scripts/check_pack.py <pack_dir>` reads `manifest.yaml` and checks, without touching the stack:

- every module resolves to an existing **config**, **prompt** and **acceptance** file;
- the `scripts/` (deploy, seed, acceptance) and `runbook.md` / `README.md` are present;
- no config is still a `.placeholder` and no `[confirm: ...]` placeholder is left unresolved (these fail under `--ready`, the ship gate; otherwise they are warnings, since they are expected mid-build);
- `depends_on` packs are named so the run order is explicit.

Exit 0 = structurally complete. `--ready` additionally fails on any unresolved placeholder — run it before shipping.

### 2. Live — the acceptance suite on the stack

The pack only earns VERIFIED when it runs. On the workstation against the live stack (see `mtca-dev-workflow` / `joget-deploy` for the two-track method — this never runs in the sandbox):

1. **Deploy** the prerequisite packs first, bottom-up (KP2 before KP3 before KP4), then this pack — `scripts/deploy.*` (reuses `joget-deploy` for KP4, the X-Road admin API for KP2, the `mtca` load for KP3).
2. **Seed** Progressa demo data — `scripts/seed.*`.
3. **Run the acceptance suite** — `scripts/acceptance.*`. Each `acceptance/<module>.md` is a named *given → when → then*; the proof is observed, not assumed:
   - **KP2:** a once-only cross-system query (e.g. PNEA → PLR over X-Road) returns the record without re-entry — an X-Road test call.
   - **KP3:** the registry loads through bronze→silver→gold with DQ gates green; identity validates a learner; the payment rail is reachable — `joget-db-inspect` / DQ checks.
   - **KP4:** the service deploys and a citizen journey completes; `joget-db-inspect` shows the record in the expected state.

Every check passes, or the pack stays UNVERIFIED and the failure goes back to `bb-config-gen` (fix the config / the generating prompt) — never hand-patch the deployed artefact.

## The fix loop — one cycle

Collect every static finding and every failed live check. **Fixes go upstream** — to the generating prompt or the spec in `bb-config-gen`, to the manifest in `kp-build-pack` — then regenerate, redeploy and re-run. A second cycle that finds new breakage means a config is fighting the spec; fix the spec reading, not the symptom.

## What good looks like

`check_pack.py --ready` exits 0 (every module complete, no unresolved `[confirm:`); the prerequisite packs deploy bottom-up; the acceptance suite passes on the live stack for every module; and the once-only exchange / the running services are observed, not asserted. Then the build pack is VERIFIED and ships with its `kp-bundle-qa`-passed, `kp-citation-verify`-passed video bundle.

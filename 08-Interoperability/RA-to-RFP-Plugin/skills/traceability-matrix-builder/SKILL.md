---
name: traceability-matrix-builder
description: >-
  Build the requirements-traceability matrix (RTM) for a government system RFP — an Excel workbook
  mapping every requirement to the RFP clause that imposes it and to the acceptance test the
  independent IV&V agent uses to verify it, at both theme level and full per-REQ-ID level, plus the
  national integration map and a blank IV&V verification log. Use WHENEVER building or updating the
  traceability / compliance matrix / RTM / requirement-to-test map for a tender: "build the
  traceability matrix", "RTM", "map requirements to acceptance tests", "the IV&V verification log",
  "requirement compliance matrix", "trace REQ-IDs to clauses and tests". Produces a multi-sheet
  .xlsx with zero formula errors. Pairs with framework-to-sor (the REQ-IDs), is-rfp-builder and
  annex-pack-builder (the clauses/tests it points to).
compatibility: Python with openpyxl; LibreOffice for formula recalculation (optional).
---

# Traceability Matrix Builder

## What this builds

The artefact that ties the whole tender together and becomes the **IV&V agent's test basis**: an Excel workbook that, for every requirement, shows *where it is imposed* (the RFP/SoR clause) and *how it is verified* (the acceptance test), plus a place to record the verdict. Sheets:

1. **README** — purpose, sheet guide, how-to, and the **granularity decision** (below).
2. **Requirements Traceability (theme level)** — the management/oversight layer: each requirement theme → source reference → RFP clause → owning stream → acceptance test → phase → priority. This is the readable, briefable view.
3. **National Integration Map** — the integration points from the national baseline, each flagged in-pilot vs follow-on, with its mapping and acceptance test.
4. **Verification Log** — blank columns (status Pass/Fail/Partial, evidence, verifier, date, notes) the IV&V agent fills during delivery.
5. **REQ-ID Trace (line-by-line)** — every numbered requirement (REQ-<Layer>-NN from the SoR) with its area, the obligation text, applicable standard, acceptance basis, phase, and a blank verification-status column.

## The granularity decision (record it)

There are two useful levels and you should be explicit about which the IV&V regime needs:

- **Theme + REQ-ID rows + gate checklists** (sheets 2 + 5 + the annex-pack gate checklists) is workable for most IV&V regimes, and the **bespoke per-REQ-ID test specs are baselined by the Supplier with the IV&V agent at the Inception gate** (an inception deliverable).
- **A distinct, authored acceptance test per REQ-ID** up front is the maximal option — only do it if the funder/IV&V explicitly requires line-by-line tests pre-award.

Record the chosen approach in the README so it is a conscious decision, not a surprise at verification.

## Build method

Generate with **openpyxl**. A proven generator is bundled at **`assets/example_build_matrix.py`** (5 sheets, zero formula errors). Adapt it: the **sheet structure, styling, the priority colour-coding, and the REQ-ID generation from the authored-requirements JSON are reusable as-is**; replace the requirement rows and the integration-map rows. The REQ-ID Trace sheet should be generated *from the same JSON the SoR was built from* (`framework-to-sor` output), so the matrix and the RFP never drift. After writing, recalculate (`python scripts/recalc.py out.xlsx` via the xlsx skill) and confirm **zero formula errors**.

## Doctrine to preserve

- **One source of truth.** Generate the REQ-ID rows from the same requirements JSON the RFP uses, so a requirement edit can't leave the matrix stale.
- **Every mandatory requirement must reach a test.** A requirement with no acceptance test is a gap; surface it.
- **Names must agree across the whole package.** The matrix is where cross-document naming drift gets caught — if the RFP says "GovPay" the matrix must not say "GamPay". (See `procurement-qa`.)
- **The verification log is the IV&V hand-off.** Leave it blank but structured; it is filled during delivery, not at authoring.

## Pairs with

`framework-to-sor` (the REQ-IDs and acceptance bases) · `is-rfp-builder` / `annex-pack-builder` (the clauses and gate checklists it references) · `procurement-qa` (consistency gate).

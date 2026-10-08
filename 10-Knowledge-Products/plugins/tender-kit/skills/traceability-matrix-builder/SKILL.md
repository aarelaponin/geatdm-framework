---
name: traceability-matrix-builder
description: >-
  Build the requirements-traceability matrix (RTM) for a government system RFP — the sheets of a
  workbook, as text tables, mapping every requirement to the RFP clause that imposes it and to the
  acceptance test the independent IV&V agent uses to verify it, at both theme level and full
  per-REQ-ID level, plus the national integration map and a blank IV&V verification log. Use
  WHENEVER building or updating the traceability / compliance matrix / RTM / requirement-to-test
  map for a tender: "build the traceability matrix", "RTM", "map requirements to acceptance
  tests", "the IV&V verification log", "requirement compliance matrix", "trace REQ-IDs to clauses
  and tests". Returns the five sheets as text tables, ready to paste into a spreadsheet. Pairs
  with framework-to-sor (the REQ-IDs), is-rfp-builder and annex-pack-builder (the clauses/tests
  it points to).
---

# Traceability Matrix Builder

## What this builds

The artefact that ties the whole tender together and becomes the **IV&V agent's test basis**: five tables, one for each sheet of a workbook, that, for every requirement, shows *where it is imposed* (the RFP/SoR clause) and *how it is verified* (the acceptance test), plus a place to record the verdict. Sheets:

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

Write the five sheets as text tables. The template to write from is **`../../references/traceability-matrix-progressa.md`**: the five sheets filled for Progressa's first lot (*a simulated case: Progressa is the fictional country of the courses*). The **sheet structure, the columns, the priority column and the rule that numbers and phases each REQ-ID are reusable as they are**; replace the requirement rows and the integration-map rows. The REQ-ID Trace sheet is generated *from the same list the SoR was built from* (the `framework-to-sor` output, in the shape of **`../../references/progressa-requirements.json`**), one row per obligation, numbered REQ-<L>-NN with the count starting again in each layer, so the matrix and the RFP never drift. Then check that every REQ-ID the gate checklists of Annex E cite exists in sheet 5, and that every mandatory line reaches a test. If the buyer needs an Excel workbook, paste each table into its own sheet, or turn the accepted tables into a workbook as a last step, for example with Anthropic's document skill for Excel; this kit carries no program for it.

## Doctrine to preserve

- **One source of truth.** Generate the REQ-ID rows from the same requirements list the RFP uses, so a requirement edit can't leave the matrix stale.
- **Every mandatory requirement must reach a test.** A requirement with no acceptance test is a gap; surface it.
- **Names must agree across the whole package.** The matrix is where cross-document naming drift gets caught — if the RFP says "the Progressa Learner Registry (PLR)" the matrix must not say "the National Learner Registry (NLR)", which is the name of the programme that funds it. (See `procurement-qa`.)
- **The verification log is the IV&V hand-off.** Leave it blank but structured; it is filled during delivery, not at authoring.

## Pairs with

`framework-to-sor` (the REQ-IDs and acceptance bases) · `is-rfp-builder` / `annex-pack-builder` (the clauses and gate checklists it references) · `procurement-qa` (consistency gate).

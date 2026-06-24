---
name: annex-pack-builder
description: >-
  Generate the supporting annex pack for a Supply and Installation of an Information System RFP: the
  Bid Data Sheet (procurement parameters with recommended [confirm] defaults) and the technical
  annexes — Cross-Functional Requirements (CFR) baseline, systems-and-data inventory,
  deliverable-acceptance-criteria templates with phase-gate checklists and an Operational Acceptance
  Test, the SLA schedule with service credits, and the two-agreement (membership + data-sharing)
  templates. Use WHENEVER drafting the RFP's annexes / schedules / data sheet for a platform tender:
  "draft the annexes", "Bid Data Sheet", "CFR baseline", "acceptance criteria templates", "SLA
  schedule", "data-sharing agreement template", "the annex pack for the RFP". Produces a styled
  .docx. Pairs with is-rfp-builder (the main document), framework-to-sor (requirement IDs the
  acceptance criteria reference) and traceability-matrix-builder.
compatibility: Node.js with the `docx` package (docx-js).
---

# Annex Pack Builder

## What this builds

The supporting documents an IS RFP refers to but keeps out of the main body — where the *measurable acceptance teeth* live. One styled `.docx` containing:

- **Bid Data Sheet (BDS)** — the specific procurement parameters the main RFP points at: method, award basis, evaluation weighting, qualification thresholds, securities (%), liquidated-damages rates and caps, warranty term, validity, dates. Every policy value is a **recommended default flagged `[confirm]`** for the buyer to finalise against the procurement plan and contract value.
- **Annex C — CFR baseline** — the one national quality floor every connected service must meet, as checkable requirements across security, availability, performance, interoperability, observability, and data-protection/maintainability/accessibility/documentation, each with a target and a verification method. Adopt the funder/standard set (e.g. GovStack Cross-Functional Specifications; OWASP API Security Top 10).
- **Annex D — systems & data inventory** — the systems the platform connects to (from the national baseline), with role (source/consumer/infra), interface, pilot relevance, and a "to complete in inception" note. Mark separate national systems as *integrate, not build*.
- **Annex E — acceptance criteria** — the standard deliverable-acceptance template; **phase-gate checklists** (inception / foundation / pilot–Operational-Acceptance / transfer) mapped to requirement IDs; and the **Operational Acceptance Test** (stability period + pass conditions). Record that bespoke per-REQ-ID tests are baselined with the IV&V agent at inception.
- **Annex F — SLA schedule** — availability/performance targets, a severity-based incident table, support/backup/DR/reporting, and the **service-credit / performance-LD** schedule with caps.
- **Annex G — agreement templates** — the **two-agreement model**: a Platform Membership Agreement (operator ↔ member) and a Data-Sharing / Service-Use Agreement (data owner ↔ consumer), clause-by-clause as structure-and-guidance for the buyer's lawyers (not finalised legal text).

## Build method

Generate with **docx-js**, matching the main RFP's styling so the pack reads as one set. A proven generator is bundled at **`assets/example_build_annexes.js`** (it produced a real 15-page pack). Adapt it: the **templates, the BDS field list, the CFR categories, the acceptance-gate structure, the SLA tables and the two-agreement clause lists are reusable as-is**; replace the inventory rows and any country-specific targets, and keep the `[confirm]` markers on policy values. Validate and render a page or two to check table headers.

## Doctrine to preserve

- **`[confirm]` defaults, not invented certainties.** The BDS shows recommended values aligned to funder norms; the buyer confirms them. Never present a policy choice as fixed.
- **Acceptance teeth live here.** Annex E's Operational Acceptance Test and Annex F's service credits are what make the result obligation enforceable; keep them concrete and measurable.
- **CFR is the quality floor**, mandatory at the three checkpoints (before procurement, before go-live, in operation) — not a wish-list.
- **Annex G is structure, not legal advice.** Flag that the binding text is finalised by the buyer's legal team.
- **The requirement list is not the whole obligation.** State plainly that the measurable acceptance detail lives in C/E/F, so reviewers don't read the SoR REQ list as the entire bargain.

## Pairs with

`is-rfp-builder` (the main document this annexes) · `framework-to-sor` (the REQ-IDs the acceptance criteria reference) · `traceability-matrix-builder` (the REQ→test matrix and IV&V log) · `procurement-qa`.

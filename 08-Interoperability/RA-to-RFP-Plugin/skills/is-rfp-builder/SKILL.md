---
name: is-rfp-builder
description: >-
  Assemble a funder-compliant Supply and Installation of an Information System RFP document for a
  government platform (e.g. a national interoperability / data-exchange platform), built around a
  Statement of Requirements and carrying the result-obligation machinery (acceptance/Operational
  Acceptance, performance security, warranty, liquidated damages) and rated-criteria evaluation. Use
  WHENEVER assembling, drafting or regenerating the main bidding document / RFP / tender for a
  system build once the requirements exist: "assemble the RFP", "build the bidding document", "draft
  the tender for the platform", "put the Statement of Requirements into an RFP", "write the
  RFP sections", "produce the supply-and-install RFP". Produces a styled .docx with the standard
  sections (background, scope of supply, governance, evaluation, acceptance/securities, payment,
  annexes). Pairs with framework-to-sor (the SoR), procurement-vehicle-selector (the method),
  annex-pack-builder and traceability-matrix-builder.
compatibility: Node.js with the `docx` package (docx-js) for .docx generation.
---

# IS RFP Builder

## What this builds

The main bidding document for procuring a government information system as an **obligation of result** — a World Bank *Supply and Installation of Information Systems* RFP (or the AfDB/EU/national equivalent). It wraps the **Statement of Requirements** (from `framework-to-sor`) in the full RFP structure and adds the contract machinery a result obligation needs. Output is a single styled `.docx`.

This skill assumes the upstream decisions are made: the **vehicle** is a supply/IS RFP with rated criteria (`procurement-vehicle-selector`), and the **requirements** exist as a numbered SoR (`framework-to-sor`). If either is missing, do those first.

## Document structure (sections)

Build these sections, in order. The SoR is issued as **Annex A**; the document body is the management/commercial wrapper around it.

1. **Background & context** — country, financing programme (and its closing date if funding-window-constrained), the platform, the problem.
2. **Objectives** — development objective + specific objectives.
3. **Scope of supply and services** — the three streams if mixed (build / advisory / capacity); the **explicit in-scope vs out-of-scope (build vs integrate)** statement.
4. **Governance & institutional arrangements** — the **regulator/operator split**; steering committee; the **independent IV&V agent retained separately** (resolves the self-marking risk); buyer counterpart team.
5. **Pilot / initial scope** — the proving flows.
6. **Implementation approach & phasing** — compressed to the funding window if there is a cliff; the phase gates.
7. **Technical & functional requirements** — point to Annex A as binding; restate the headline mandatory standards (the published ones).
8. **Operate & transfer** — SLAs/service metrics; transfer to the buyer.
9. **Capacity building & knowledge transfer.**
10. **Key personnel.**
11. **Supplier qualifications & eligibility** — proportionate, JV/subcontracting encouraged; **the critical platform-delivery capability must sit with a jointly-and-severally-liable JV member** (not a subcontractor alone); **skills transfer scored on substance, not nationality** (see `local-participation-designer`).
12. **Duration & timeline** — inside the funding window.
13. **Client inputs & facilities** — hosting, data, access, counterpart staff.
14. **Reporting.**
15. **Evaluation & award** — **rated criteria → Most Advantageous Proposal**; pass/fail mandatory gates; a scored live demonstration for a platform.
16. **Acceptance, securities, warranty & liquidated damages** — the result-obligation teeth: acceptance testing → **Operational Acceptance** (the trigger for go-live, payment and warranty start); **performance security**; **warranty/defects-liability**; **delay and performance LDs / service credits**; advance-payment guarantee.
17. **Payment schedule** — milestone-based on accepted/Operational-Acceptance criteria; capex/opex split; tranches inside the funding window.
18. **Risks, assumptions & dependencies.**
19. **Annexes** — A: Statement of Requirements (the SoR, in full); B: national integration baseline; plus the annex pack (C CFR baseline, D inventory, E acceptance criteria, F SLA, G agreement templates — from `annex-pack-builder`); H: confirmed pilot list. Note clearly which annexes are still to be finalised before issuance.

## Build method

Generate the `.docx` with **docx-js** (Node `docx` package) from a styled template, not by hand. Use a consistent style set (Arial; coloured H1/H2/H3; tables with explicit DXA column widths and a coloured header row; a header/footer with page numbers; a cover and a field-driven TOC). Tables need both `columnWidths` on the table and `width` on each cell, and `ShadingType.CLEAR` for fills — these are the docx-js gotchas that otherwise render wrong.

A proven, working generator is bundled at **`assets/example_build_rfp.js`** — it produced a real 28-page IS RFP. Adapt it: the document *structure, styling and the result-obligation sections are reusable as-is*; replace the country/platform-specific content (background, scope, pilot list, integration map, dates) and read the SoR requirement areas from a JSON the `framework-to-sor` step produced (see `assets/example_authored_reqs.json` for the shape). Validate the output (`python scripts/office/validate.py out.docx` via the docx skill) and render a couple of pages to eyeball table headers before handing off.

## Doctrine to preserve

- **Obligation of result ⇒ acceptance/Operational Acceptance + performance security + warranty + LDs.** Section 16 is not optional; it is the difference between a supply contract and a consulting ToR.
- **Independent IV&V sits outside this contract.** The buyer owns acceptance; the verifier is not the builder.
- **Scope boundary stated** (build the backbone; integrate the rest).
- **Schedule respects the funding cliff**; recurrent cost moves to the national budget after close.
- **Self-contained:** the RFP cites only published standards and its own annexes — never an unpublished source.

## Pairs with

`framework-to-sor` (Annex A) · `procurement-vehicle-selector` (the method & machinery) · `annex-pack-builder` (Data Sheet + Annexes C–G) · `traceability-matrix-builder` (the RTM) · `local-participation-designer` (Section 11 design) · `procurement-qa` (run before issuance).

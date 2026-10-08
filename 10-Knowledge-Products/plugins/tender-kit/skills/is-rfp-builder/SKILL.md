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
  RFP sections", "produce the supply-and-install RFP". Returns the RFP as text with the standard
  sections (background, scope of supply, governance, evaluation, acceptance/securities, payment,
  annexes). Pairs with framework-to-sor (the SoR), procurement-vehicle-selector (the method),
  annex-pack-builder and traceability-matrix-builder.
---

# IS RFP Builder

## What this builds

The main bidding document for procuring a government information system as an **obligation of result** — a World Bank *Supply and Installation of Information Systems* RFP (or the AfDB/EU/national equivalent). It wraps the **Statement of Requirements** (from `framework-to-sor`) in the full RFP structure and adds the contract machinery a result obligation needs. Output is the RFP as text (Markdown), section by section.

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

Write the RFP as text, section by section, in the order above. The skeleton to write from is **`../../references/rfp-skeleton-progressa.md`**: the nineteen sections, each filled for Progressa's first lot (*a simulated case: Progressa is the fictional country of the courses*). The *structure and the result-obligation sections are reusable as they are*; replace the country- and platform-specific content (background, scope, pilot list, integration map, dates) with the buyer's own. Read the requirement areas of Annex A from the list the `framework-to-sor` step handed on, in the shape of **`../../references/progressa-requirements.json`**, so that the RFP and the traceability matrix are built from one source.

Keep every policy choice as a bracketed **[confirm]** value for the buyer, and mark which annexes are still to be finalised. If the buyer needs a Word document, turn the accepted text into one as a last step, for example with Anthropic's document skill for Word; this kit carries no program for it.

## Doctrine to preserve

- **Obligation of result ⇒ acceptance/Operational Acceptance + performance security + warranty + LDs.** Section 16 is not optional; it is the difference between a supply contract and a consulting ToR.
- **Independent IV&V sits outside this contract.** The buyer owns acceptance; the verifier is not the builder.
- **Scope boundary stated** (build the backbone; integrate the rest).
- **Schedule respects the funding cliff**; recurrent cost moves to the national budget after close.
- **Self-contained:** the RFP cites only published standards and its own annexes — never an unpublished source.

## Pairs with

`framework-to-sor` (Annex A) · `procurement-vehicle-selector` (the method & machinery) · `annex-pack-builder` (Data Sheet + Annexes C–G) · `traceability-matrix-builder` (the RTM) · `local-participation-designer` (Section 11 design) · `procurement-qa` (run before issuance).

# Task 06 — Integration Architecture (To-Be)

## Overview

This folder contains the Section 6 outputs for D6: Future State "To-Be" Architecture — Ministry of Health. The integration architecture defines how MoH's health information systems exchange data through a national Health Information Exchange (HIE) based on OpenHIM, using HL7 FHIR R4 as the canonical integration standard.

## Task Breakdown

| Task | Description | Status | Output File |
|------|-------------|--------|-------------|
| 06a | Integration Vision & Standards (Sections 6.1, 6.3) | ✅ Complete | `D6-S06-part1-vision-standards.md` |
| 06b | Priority Integration Flows 1–3 (Section 6.2, part 1) | Pending | — |
| 06c | Priority Integration Flows 4–6 (Section 6.2, part 2) | Pending | — |
| 06d | API Management, Governance & Assembly (Sections 6.4, 6.5) | Pending | — |

## Outputs

- **`D6-S06-part1-vision-standards.md`** — Section 6 introduction, Section 6.1 (Integration Architecture Vision), and Section 6.3 (Integration Standards). Covers:
  - Current state analysis (point-to-point silos, sole SPT→DHIS2 flow)
  - Target state (hub-and-spoke via OpenHIM)
  - Integration architecture diagrams (current and target)
  - 4-phase maturity model (Batch → API → Mediated → Event-driven, 2026–2030+)
  - 8 integration design principles (IP-01 through IP-08)
  - FHIR R4 resource mapping to integration use cases (14 resources)
  - FHIR Façade strategy per system (5 systems)
  - ADX for aggregate data exchange
  - REST/JSON sunset criteria
  - IHE profiles (PIXm/PDQm, mCSD, XDS/MHD)
  - Standards adoption roadmap across all 4 phases

- **`_inputs.md`** — List of all input documents and cross-references used

## Key Design Decisions Referenced

| ID | Decision | Section |
|----|----------|---------|
| DD-01 | OpenHIE/OpenHIM as interoperability framework | 6.1.2, 6.1.4 |
| DD-06 | FHIR R4 as target integration standard | 6.3.1 |
| DD-12 | FHIR Façade for legacy systems | 6.3.2 |

## Approximate Page Count

- Section 6.1 (Vision): ~3 pages
- Section 6.3 (Standards): ~3.5 pages
- Total Part 1: ~6.5 pages

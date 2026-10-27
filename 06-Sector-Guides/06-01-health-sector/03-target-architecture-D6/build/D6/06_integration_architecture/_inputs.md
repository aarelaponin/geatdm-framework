# Task 06a — Input Documents

**Task:** Setup, Integration Vision & Standards
**Created:** 2026-02-10

## Primary Inputs

| # | Document | Location | Purpose |
|---|----------|----------|---------|
| 1 | Workflow state tracker | `_tracker/workflow_state.md` | Task sequencing, prior task completion status |
| 2 | Context synthesis (Task 01) | `01_context_loading/task_01_doc_context_synthesis.md` | AS-IS integration state, eHealth reference architecture mapping, key design decisions |
| 3 | D6 Section 4 — Data Architecture | `04_data_architecture/D6-S04-data-architecture.md` | FHIR R4 resource profiles (14 priority resources), data exchange standards (FHIR/ADX/REST-JSON), MPI strategy, terminology phasing, master data registries |
| 4 | D6 Section 5 — Application Architecture | `05_application_architecture/D6-S05-application-architecture.md` | Target application portfolio (18 systems), 4-layer landscape, HIE specification (OpenHIM), application integration interfaces, modernisation decisions |
| 5 | D6 Master Prompt | `prompt-D6-MoH-Future-State-Architecture.md` | Section 6 structure, contract requirements for integration architecture |
| 6 | eHealth Ref Arch — Ch3 (Technical Architecture) | `_ehealth/e-health-ref-arch-ch3.md` | 5-layer architecture model, integration layer specification, FHIR intermediary, API gateway patterns |
| 7 | eHealth Ref Arch — Ch6 (Standards & Interoperability) | `_ehealth/e-health-ref-arch-ch6.md` | Standards selection framework, FHIR adoption guidance, IHE profiles, terminology standards |
| 8 | eHealth Ref Arch — Ch2 (Legal & Governance) | `_ehealth/e-health-ref-arch-ch2.md` | Governance structures, data protection, consent models |

## Key Cross-References from Prior Sections

| Reference | Source Section | Relevance to Section 6 |
|-----------|--------------|----------------------|
| HP-01 through HP-10 (Architecture Principles) | Section 2.2 | Integration design principles (especially HP-02 Interoperability by Design, HP-05 Open Standards) |
| DD-01 (OpenHIE/OpenHIM) | Section 2.4 | HIE platform selection — central to integration vision |
| DD-06 (FHIR R4 as target standard) | Section 2.4 | Integration standards selection |
| DD-12 (FHIR Façade for legacy) | Section 2.4 | Strategy for wrapping non-FHIR systems |
| 14 FHIR resource profiles table | Section 4.3.1 | Canonical data model for integration flows |
| Data exchange standards (FHIR/ADX/REST-JSON) | Section 4.3.2 | Three-tier standards strategy |
| OpenHIM 5 core functions | Section 5.2.2 | HIE interoperability layer specification |
| HIE 3-phase deployment | Section 5.2.2 | Phased integration rollout |
| Application portfolio summary (18 systems) | Section 5.7 | Systems requiring integration |
| IHE PIXm/PDQm profiles | Section 4.2.1 | MPI integration patterns |
| IHE mCSD profile | Section 4.2.2 | Facility registry discovery |

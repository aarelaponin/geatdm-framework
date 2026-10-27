# Task 03: Inputs

## Prerequisites Read
- [x] `_tracker/workflow_state.md` — Task 03 pending, 20% progress
- [x] `01_context_loading/task_01_doc_context_synthesis.md` — Full AS-IS synthesis across BDAT domains
- [x] `01_context_loading/task_01_data_key_numbers.md` — All quantitative metrics
- [x] `02_introduction_vision/D6-S02-introduction-vision.md` — Front matter, Sections 1–2 (complete)
- [x] `prompt-D6-MoH-Future-State-Architecture.md` — Section 3 structure requirements

## Additional Inputs Read
- [x] `_ext-research/MoH-current.md` — Digital health governance models (Rwanda, Tanzania, Kenya, Ethiopia), sustainability, capacity building, data privacy
- [x] `_ehealth/e-health-ref-arch-ch1.md` — Legal, governance, organisational framework; 5-layer architecture; stakeholder ecosystem

## Key Data Points Used

### Governance (from MoH-current.md)
- WHO Global Strategy on Digital Health 2020–2025 governance recommendations
- Tanzania: NDHSC + Digital Health Secretariat under MoH
- Rwanda: MoH → Rwanda Biomedical Centre digital health programme
- Kenya: National eHealth Strategy + Digital Health Agency
- Ethiopia: Health Sector Transformation Plan + Digital Health Innovation Centre
- Recommended: single national owner + steering committee + TWGs + investment gatekeeping

### Capacity (from MoH-current.md)
- National team: 10–20 staff for small country (MoH Digital Health unit)
- Regional: 1 HIS focal person per region
- HISP regional node: covers 23 countries in the region, supports DHIS2 training

### Current State Metrics (from task_01 synthesis)
- ~90 health facilities, ~2–3M population
- 9 Directorates + NHIA (semi-autonomous)
- 8 digital health systems operating as silos
- ~90% paper-based clinical registers
- DHIS2 since 2010, SPT at all ~90 facilities
- e-NHIS: 15,000–20,000 of 60,000 beneficiaries
- eCRVS: about 1 million registered (~50%)
- No HIE, no MPI, no EHR, no data governance framework

### Design Decisions Referenced (from Section 2)
- DD-04: EHR vertical-first at 15–20 facilities
- DD-05: SPT → DHIS2 Tracker EIR phased transition
- DD-06: DHIS2 Tracker for case-based IDSR
- DD-07: e-NHIS enhancement (mobile enrollment, offline claims)
- DD-09: OpenLMIS as primary eLMIS
- DD-10: Governance model — HMIS team → DHDD + NDHSC

### Architecture Principles Referenced (from Section 2)
- HP-01: Build on What Works
- HP-02: Interoperability by Design
- HP-03: Offline-First
- HP-06: Patient-Centred Identity
- HP-07: Conservative Phasing
- HP-10: Sustainability Planning

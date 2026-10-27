# Task 03: Outputs

## Deliverables Produced

### Primary Output
- **`D6-S03-business-architecture.md`** — Section 3: Business Architecture (To-Be)
  - ~12 pages of substantive content
  - 4 major subsections (3.1–3.4)

### Supporting Files
- **`README.md`** — Task summary and key decisions
- **`_inputs.md`** — Input files and data points used
- **`_outputs.md`** — This file

## Content Summary

### 3.1 Future Health Service Delivery Model
- **NDHSC**: 14-member steering committee chaired by MoH PS; quarterly meetings; investment authority (>$50K); established by Ministerial Order
- **DHDD**: Upgraded from HMIS team; 12–15 national staff + 7 regional HIS focal persons; phased recruitment 2026–2028; 6 core functions
- **3 TWGs**: Architecture & Interoperability, Data Standards & Governance, Implementation & Capacity — all monthly cadence
- **Target Operating Model**: 4 major shifts (integrated management, automated data flows, proactive information use, architecture-governed investment)
- **5 Organisational Changes**: HMIS→DHDD elevation, NDHSC establishment, regional HIS focal persons, NHIA-MoH coordination protocol, system-level data stewards

### 3.2 Target Business Capability Map
- **11 Tier 1 (Core PDU)** capabilities: Policy, legislation, strategic planning, stakeholder coordination, performance monitoring, health financing, DMS, communications, HR, finance, procurement
- **12 Tier 2 (Health-Sector-Specific)** capabilities: HMIS, surveillance, immunisation, health insurance, laboratory, eCRVS, drug supply, facility management, vital statistics, community health, workforce management, clinical care (EHR)
- Maturity scale: 0 (Non-existent) to 5 (Optimised)
- Most Tier 1 capabilities target Level 2–3; most Tier 2 capabilities target Level 3–4
- **3 priority layers**: Foundation (2026–2027), Integration (2027–2029), Clinical (2028–2032)

### 3.3 Future Business Process Architecture
- **8 priority processes** fully specified with current/target state tables:
  1. Patient Registration and Identification
  2. Clinical Encounter Documentation
  3. Immunisation Service Delivery and Recording
  4. Disease Notification and Outbreak Response
  5. Health Insurance Enrolment and Claims
  6. Laboratory Ordering and Results Reporting
  7. Drug Supply Chain Management
  8. Aggregate Health Data Reporting
- Each process includes: system support, integration flows, and key changes
- Summary table with integration complexity assessment

### 3.4 Stakeholder Ecosystem and Governance
- **NDHSC TOR**: Full formal Terms of Reference (establishment, purpose, authority, composition, quorum, reporting)
- **Architecture & Interoperability TWG**: 7 responsibilities, monthly cadence
- **Data Standards & Governance TWG**: 8 responsibilities, monthly + quarterly data quality reviews
- **Implementation & Capacity TWG**: 7 responsibilities, monthly + quarterly regional coordination
- **Investment Decision Flow**: 5-step process (proposal → architecture review → data review → NDHSC decision → implementation coordination)

## Consistency Checks
- [x] All numbers match task_01_data_key_numbers.md
- [x] Design decisions consistent with Section 2 (DD-01 through DD-12)
- [x] Architecture principles referenced consistently (HP-01 through HP-10)
- [x] Governance structure consistent with DD-10 and MoH-current.md recommendations
- [x] Process architecture covers all 8 processes specified in task instructions
- [x] Capability map covers both PDU core and health-sector-specific as required
- [x] Staffing model within range recommended by WHO/comparable country evidence
- [x] All proposals realistic for Progressa's capacity and resource constraints

## Downstream Dependencies
- **Section 4 (Data Architecture)**: References data governance framework, data stewards, data classification from 3.4
- **Section 5 (Application Architecture)**: References capability map and system support from 3.2–3.3
- **Section 6 (Integration Architecture)**: References integration flows from 3.3
- **Section 7 (Technology Architecture)**: References DHDD infrastructure operations mandate from 3.1
- **Section 9 (Appendices)**: NDHSC TOR and TWG mandates may be included as appendices

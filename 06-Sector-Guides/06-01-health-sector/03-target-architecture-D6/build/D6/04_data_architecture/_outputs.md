# Task 04: Output Deliverables

## Deliverables

| File | Status | Description |
|------|--------|-------------|
| `D6-S04-data-architecture.md` | ✅ Complete | Section 4: Data Architecture (To-Be) — ~12 pages |
| `README.md` | ✅ Complete | Task overview and dependencies |
| `_inputs.md` | ✅ Complete | Input materials catalogue |
| `_outputs.md` | ✅ Complete | This file |

## Section 4 Structure

- **4.1 Data Governance Framework**
  - 4.1.1 Data Ownership Model (11 data domains with designated owners)
  - 4.1.2 Data Stewardship Roles (3 levels: national, regional, facility)
  - 4.1.3 Data Quality Management Framework (5 dimensions with baselines and targets)
  - 4.1.4 Health Data Protection Policy (8 core principles; interim measure pending legislation)

- **4.2 Master Data Management Strategy**
  - 4.2.1 Master Patient Index — OpenCR with eCRVS NIN as foundational ID; 6 identifier types; probabilistic + deterministic matching; 3-phase deployment
  - 4.2.2 Facility Registry — DHIS2 organisation units as canonical source; IHE mCSD compliance
  - 4.2.3 Health Worker Registry — iHRIS platform; FHIR Practitioner/PractitionerRole
  - 4.2.4 Terminology Services — 4-phase adoption: ICD-11 (2026-27), LOINC (2027-28), SNOMED CT GPS (2028-30), ATC (2029-30); OCL as terminology platform

- **4.3 Data Integration Architecture**
  - 4.3.1 Unified Data Model — FHIR R4 as canonical; 14 priority resource profiles
  - 4.3.2 Data Exchange Standards — FHIR R4 + ADX + REST/JSON/CSV (transitional)
  - 4.3.3 National Health Data Dictionary
  - 4.3.4 Data Lineage and Provenance — FHIR Provenance resource; OpenHIM transaction logging

- **4.4 Analytics and Business Intelligence**
  - 4.4.1 DHIS2 as national health analytics platform — enhanced dashboards, GIS, WHO packages
  - 4.4.2 Future Health Data Warehouse — 3-phase conservative approach
  - 4.4.3 Reporting Pipeline — facility → district → region → national → international

- **4.5 Data Classification and Privacy**
  - 4.5.1 4-tier classification (Public, Internal, Confidential, Restricted)
  - 4.5.2 Consent Management — opt-in for cross-system sharing; statutory exception for surveillance
  - 4.5.3 De-identification Requirements — pseudonymisation and full anonymisation
  - 4.5.4 Data Residency — sovereign hosting for Tier 3/4 data

## Completion Criteria Assessment

| Criterion | Met? | Evidence |
|-----------|------|---------|
| MPI strategy is specific (OpenCR, identifier types, matching approach) | ✅ | Section 4.2.1: OpenCR platform, 6 identifier types with trust hierarchy, probabilistic + deterministic matching with field weights, PIXm/PDQm profiles, 3-phase deployment |
| Terminology services cover health-specific coding systems | ✅ | Section 4.2.4: ICD-11, LOINC (50-80 tests), SNOMED CT GPS (~7,500 concepts), ATC; phased deployment; OCL platform |
| Data governance is actionable with named roles/responsibilities | ✅ | Section 4.1.1: 11 data domains with specific owners; Section 4.1.2: Chief Data Steward, DHIS2 Data Manager, Integration Data Steward, Security Officer, 7 regional officers, facility focal points |
| Standards selections are justified with rationale | ✅ | Each standard selection includes rationale and country evidence (Tanzania LOINC, Rwanda/Maldives FHIR, Ghana claims) |
| ~10-12 pages | ✅ | Approximately 12 pages of content |

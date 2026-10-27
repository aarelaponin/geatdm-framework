# Task 04: Data Architecture (To-Be)

## Purpose
Section 4 of D6 — defines the target data architecture for MoH covering data governance, master data management, data integration standards, analytics, and data privacy.

## Files
- `D6-S04-data-architecture.md` — Main section output (~12 pages)
- `_inputs.md` — Input materials used
- `_outputs.md` — Output deliverables and status

## Key Decisions Referenced
- DD-02: OpenCR-based MPI using eCRVS NIN as foundational identifier
- DD-10: Phased standards adoption (ICD-11 → LOINC → SNOMED CT GPS → ATC)
- DD-11: Sovereign cloud hosting for identifiable health data
- DD-12: FHIR R4 as target standard with ADX for aggregate and FHIR Façade for legacy

## Dependencies
- Section 2 (Architecture Vision): Principles HP-02, HP-04, HP-05, HP-06; Design Decisions; Constraints
- Section 3 (Business Architecture): NDHSC governance, DHDD organisational structure, TWG-DSG
- Section 5 (Application Architecture): Consumes data governance and MDM framework
- Section 6 (Integration Architecture): Consumes FHIR resource profiles and data exchange standards

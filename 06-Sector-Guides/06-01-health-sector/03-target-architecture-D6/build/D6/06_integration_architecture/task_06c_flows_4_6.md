### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted

### Task 06c — Priority Integration Flows (Flows 4–6)

### Environment
- This task folder: `03-target-architecture-D6/build/D6/06_integration_architecture/`

### Prerequisites
Read these files first:
- `03-target-architecture-D6/build/D6/06_integration_architecture/D6-S06-part1-vision-standards.md` (output from Task 06a — vision, standards)
- `03-target-architecture-D6/build/D6/06_integration_architecture/D6-S06-part2-flows-1-3.md` (output from Task 06b — Flows 1–3, use as style/structure template)
- `03-target-architecture-D6/build/D6/04_data_architecture/D6-S04-data-architecture.md` (FHIR profiles, data classification)
- `03-target-architecture-D6/build/D6/05_application_architecture/D6-S05-application-architecture.md` (e-NHIS, EMR, DHIS2 details)
- `03-target-architecture-D6/build/D6/01_context_loading/task_01_doc_context_synthesis.md`

### Actions (EXECUTE ALL IN ORDER)

1. Read all prerequisite files (especially Part 1 and Part 2 outputs for consistency)
2. **Write Section 6.2 (second half) — Priority Integration Flows 4–6** using the same structured format as Flows 1–3:

   - **Flow 4: Clinical Encounter → Aggregate Reporting** (~1.5 pages)
     - Narrative: EMR (OpenMRS) records patient visit → FHIR resources to Shared Health Record (SHR) via HIE → aggregate extraction → DHIS2 indicators
     - Actors: OpenMRS, OpenHIM, HAPI FHIR SHR, DHIS2
     - FHIR resources: Encounter, Condition, Observation, Procedure, MedicationRequest
     - Aggregation strategy: FHIR→aggregate mapping rules, frequency (daily batch vs. real-time)
     - Error handling: offline EMR scenarios, sync conflicts, data quality validation

   - **Flow 5: Insurance Eligibility and Claims** (~1.5 pages)
     - Narrative: Facility EMR checks patient eligibility via e-NHIS API → provides service → submits FHIR Claim → e-NHIS adjudicates → payment via ProgressaPay
     - Actors: OpenMRS, OpenHIM, e-NHIS, ProgressaPay
     - FHIR resources: Coverage, CoverageEligibilityRequest, CoverageEligibilityResponse, Claim, ClaimResponse
     - Synchronous eligibility check pattern (real-time at point of care)
     - Asynchronous claims submission and adjudication pattern
     - ProgressaPay integration for provider payments
     - Offline claims workflow (CLAIM-it): store-and-forward when connectivity is lost

   - **Flow 6: National → Regional/Global Reporting** (~1 page)
     - Narrative: DHIS2 aggregate data → ADX format → WHO DHIS2 instance / RHO regional platform
     - Actors: DHIS2, WHO Global DHIS2, RHO regional platform
     - ADX (Aggregate Data Exchange) format specification
     - Data mapping: national indicators → WHO/RHO indicator sets
     - Frequency: monthly/quarterly reporting cycles
     - Quality assurance: validation rules before submission, reconciliation process

3. Save as `D6-S06-part3-flows-4-6.md`

### Deliverables
- [ ] `06_integration_architecture/D6-S06-part3-flows-4-6.md`

### Completion Criteria
- All 3 flows have complete structured descriptions matching Flows 1–3 format
- Insurance flow covers both real-time eligibility and async claims patterns
- ProgressaPay integration is addressed
- Offline scenarios are handled (especially for Flow 5)
- International reporting flow addresses WHO and RHO separately
- ~4–5 pages total

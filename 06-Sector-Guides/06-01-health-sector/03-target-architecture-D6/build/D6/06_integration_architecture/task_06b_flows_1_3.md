### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted

### Task 06b — Priority Integration Flows (Flows 1–3)

### Environment
- This task folder: `03-target-architecture-D6/build/D6/06_integration_architecture/`

### Prerequisites
Read these files first:
- `03-target-architecture-D6/build/D6/06_integration_architecture/D6-S06-part1-vision-standards.md` (output from Task 06a — vision, standards, maturity model)
- `03-target-architecture-D6/build/D6/04_data_architecture/D6-S04-data-architecture.md` (MPI strategy, FHIR profiles, data ownership)
- `03-target-architecture-D6/build/D6/05_application_architecture/D6-S05-application-architecture.md` (system descriptions, integration needs per application)
- `03-target-architecture-D6/build/D6/01_context_loading/task_01_doc_context_synthesis.md`

Additionally read:
- `01-reference-and-research/e-health-reference-architecture/markdown/e-health-ref-arch-ch2.md` (technical architecture, interoperability layer)
- `01-reference-and-research/e-health-reference-architecture/markdown/e-health-ref-arch-ch5.md` (standards and interoperability)

### Actions (EXECUTE ALL IN ORDER)

1. Read all prerequisite files (especially Part 1 output)
2. **Write Section 6.2 (first half) — Priority Integration Flows 1–3** with detailed descriptions for each flow:

   - **Flow 1: Birth Registration → MPI → NHIS Enrollment** (~1.5 pages)
     - Narrative: eCRVS registers birth → sends FHIR Patient resource to HIE → OpenCR creates/updates MPI record → triggers e-NHIS enrollment notification
     - Structured details for each flow:
       - Actors (source system, target system(s), intermediaries)
       - Trigger event (what initiates the flow)
       - Pre-conditions (system readiness, data quality)
       - Data exchanged (specific fields: name, DOB, sex, mother's NIN, facility of birth)
       - FHIR resources (Patient, RelatedPerson, MessageHeader)
       - Message exchange pattern (synchronous/asynchronous, request/response)
       - Sequence of steps (numbered, showing OpenHIM mediation)
       - Error handling (what happens if MPI match fails, if e-NHIS is unavailable, retry logic)
       - Phase (when this flow becomes operational — cross-reference maturity model)

   - **Flow 2: Immunization Recording → Aggregate Reporting** (~1.5 pages)
     - Narrative: EIR/SPT records vaccination → individual record in DHIS2 Tracker (or SPT scan) → automatic aggregation → DHIS2 aggregate dataset → WHO/RHO
     - Same structured details as Flow 1
     - Address SPT→DHIS2 Tracker EIR transition (interim: SPT batch; target: native DHIS2 Tracker)
     - FHIR resources: Immunization, Patient, ImmunizationRecommendation
     - ADX format for international reporting

   - **Flow 3: Lab Result → Surveillance Notification** (~1.5 pages)
     - Narrative: LIS records result for notifiable disease → triggers IDSR notification via HIE → case created in DHIS2 Tracker surveillance
     - Same structured details as Flow 1
     - FHIR resources: DiagnosticReport, Observation, Condition, MessageHeader
     - Notifiable disease list and trigger criteria
     - Real-time vs. batch considerations

3. Save as `D6-S06-part2-flows-1-3.md`

### Deliverables
- [ ] `06_integration_architecture/D6-S06-part2-flows-1-3.md`

### Completion Criteria
- All 3 flows have complete structured descriptions (actors, trigger, data, FHIR resources, error handling, phase)
- FHIR resources are specific (not generic) and cross-reference Section 4 profiles
- Error handling is realistic for Progressa context (intermittent connectivity, system unavailability)
- Each flow clearly states which phase of the maturity model it maps to
- ~4–5 pages total

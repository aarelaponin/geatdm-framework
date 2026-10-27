### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted

### Task 06a — Setup, Integration Vision & Standards

### Environment
- This task folder: `03-target-architecture-D6/build/D6/06_integration_architecture/`

### Prerequisites
Read these files first:
- `03-target-architecture-D6/build/D6/_tracker/workflow_state.md`
- `03-target-architecture-D6/build/D6/01_context_loading/task_01_doc_context_synthesis.md`
- `03-target-architecture-D6/build/D6/04_data_architecture/D6-S04-data-architecture.md` (data standards, FHIR resources)
- `03-target-architecture-D6/build/D6/05_application_architecture/D6-S05-application-architecture.md` (application inventory, integration needs)
- `03-target-architecture-D6/build/prompt-D6-MoH-Future-State-Architecture.md` (Section 6 structure)

Additionally read:
- `01-reference-and-research/e-health-reference-architecture/markdown/e-health-ref-arch-ch2.md` (technical architecture, interoperability layer)
- `01-reference-and-research/e-health-reference-architecture/markdown/e-health-ref-arch-ch5.md` (standards and interoperability)

### Actions (EXECUTE ALL IN ORDER)

1. Read tracker and all prerequisite files
2. Create task folder `06_integration_architecture/` (if not already existing)
3. Create `_inputs.md` listing all input documents used
4. **Write the first part of Section 6** covering:

   - **6.1 Integration Architecture Vision** (~2–3 pages)
     - Current state summary: point-to-point silos, no integration layer, sole operational integration is SPT→DHIS2
     - Target state: hub-and-spoke via national HIE (OpenHIM) as the single mediation point
     - Integration maturity progression model:
       - Phase 1 (2026): Batch/file-based — stabilise existing flows (SPT→DHIS2), introduce basic CSV/JSON exports
       - Phase 2 (2027): API point-to-point — RESTful APIs for priority flows (eCRVS→MPI, e-NHIS eligibility)
       - Phase 3 (2028–2029): Mediated via HIE — OpenHIM mediates all inter-system flows, FHIR canonical messages
       - Phase 4 (2030+): Event-driven — publish/subscribe for real-time notifications, FHIR Subscriptions
     - Integration architecture diagram (text-based, showing HIE as central hub with spokes to all systems)
     - Design principles specific to integration (reference HP-01–HP-10 and DD-01–DD-12 from Section 2)

   - **6.3 Integration Standards** (~2–3 pages)
     - HL7 FHIR R4 as target standard; specify which FHIR resources map to each use case (cross-reference Section 4 FHIR profiles)
     - FHIR Façade pattern: strategy for wrapping legacy systems (DHIS2, eCRVS, e-NHIS) with FHIR-compliant API adapters
     - ADX (Aggregate Data Exchange): for DHIS2 aggregate data flows to WHO/RHO
     - REST/JSON: transitional mechanism for systems not yet FHIR-ready (with clear sunset criteria)
     - IHE profiles: applicable profiles for health information exchange:
       - PIX/PDQv3 (Patient Identity Cross-referencing / Patient Demographics Query) for MPI
       - mCSD (Mobile Care Services Discovery) for facility registry
       - XDS (Cross-Enterprise Document Sharing) — future consideration for document-based exchange
     - Standards adoption roadmap (which standards in which phase)

5. Save as `D6-S06-part1-vision-standards.md`
6. Create `README.md` for the task folder

### Deliverables
- [ ] `06_integration_architecture/D6-S06-part1-vision-standards.md`
- [ ] `06_integration_architecture/_inputs.md`
- [ ] `06_integration_architecture/README.md`

### Completion Criteria
- Integration vision clearly articulates current → target state progression
- Maturity model has 4 concrete phases with dates
- All standards selections are justified with rationale
- FHIR resource mappings cross-reference Section 4
- ~4–6 pages total

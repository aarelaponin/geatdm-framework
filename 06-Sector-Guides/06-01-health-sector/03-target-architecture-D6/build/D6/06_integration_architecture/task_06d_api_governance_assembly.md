### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted

### Task 06d — API Management, Integration Governance & Assembly

### Environment
- This task folder: `03-target-architecture-D6/build/D6/06_integration_architecture/`

### Prerequisites
Read these files first:
- `03-target-architecture-D6/build/D6/06_integration_architecture/D6-S06-part1-vision-standards.md` (vision, standards)
- `03-target-architecture-D6/build/D6/06_integration_architecture/D6-S06-part2-flows-1-3.md` (Flows 1–3)
- `03-target-architecture-D6/build/D6/06_integration_architecture/D6-S06-part3-flows-4-6.md` (Flows 4–6)
- `03-target-architecture-D6/build/D6/03_business_architecture/D6-S03-business-architecture.md` (governance structures: NDHSC, TWGs)
- `03-target-architecture-D6/build/D6/04_data_architecture/D6-S04-data-architecture.md` (data classification, security requirements)

### Actions (EXECUTE ALL IN ORDER)

1. Read all prerequisite files (all 3 parts and governance/security context from Sections 3–4)
2. **Write Sections 6.4 and 6.5:**

   - **6.4 API Management and Governance** (~2 pages)
     - API design standards: RESTful conventions, URI structure, versioning (URL-based: /v1/, /v2/), pagination, error response format (HTTP status codes + FHIR OperationOutcome)
     - API lifecycle management: design → develop → test → publish → monitor → deprecate → retire
     - Security model:
       - OAuth 2.0 (client credentials grant) for user-context APIs
       - API keys + IP whitelisting for system-to-system
       - Mutual TLS (mTLS) for sensitive data (e.g., patient clinical records)
       - Token expiry, refresh, and revocation policies
     - Rate limiting: per-client quotas, burst handling, backpressure signalling
     - Monitoring and logging: API call logging, performance dashboards, alerting thresholds
     - API catalogue/registry: documenting all published APIs (OpenAPI/Swagger specs)

   - **6.5 Integration Governance Model** (~2 pages)
     - Standards approval process: Architecture & Interoperability TWG reviews and approves all integration specifications before implementation
     - Integration certification requirements: new systems must demonstrate API compliance (FHIR conformance testing) before connecting to the HIE
     - Connection onboarding process: request → specification review → sandbox testing → certification → production deployment
     - Change management: semantic versioning, backward compatibility requirements, deprecation notice periods (minimum 6 months), migration windows
     - Integration testing environment: sandbox HIE instance with synthetic data, regression testing for existing flows before new deployments
     - SLA framework: availability targets (99.5% for HIE), response time thresholds (<2s for eligibility checks, <30s for batch operations), incident escalation
     - Integration monitoring and incident management: who monitors, how alerts are routed, escalation to DHDD and TWG

3. **Assemble the complete Section 6 document** by combining all 4 parts in order:
   - Part 1: Section 6.1 (Vision) + Section 6.3 (Standards)
   - Part 2: Section 6.2 Flows 1–3
   - Part 3: Section 6.2 Flows 4–6
   - Part 4: Section 6.4 (API Management) + Section 6.5 (Integration Governance)
   - Renumber sections to final order: 6.1, 6.2, 6.3, 6.4, 6.5
   - Add cross-references between sections (e.g., flows reference standards, governance references TWGs from Section 3)
   - Ensure consistent terminology and formatting throughout

4. Save assembled document as `D6-S06-integration-architecture.md`
5. Update `_outputs.md` with all deliverables
6. Update `03-target-architecture-D6/build/D6/_tracker/workflow_state.md`:
   - Mark Task 06 as complete
   - Update progress percentage
   - Add completion note with summary of what was produced

### Deliverables
- [ ] `06_integration_architecture/D6-S06-part4-api-governance.md` (standalone part for reference)
- [ ] `06_integration_architecture/D6-S06-integration-architecture.md` (FINAL assembled document)
- [ ] `06_integration_architecture/_outputs.md`
- [ ] Updated tracker: `_tracker/workflow_state.md`

### Completion Criteria
- API management section is practical and enforceable in Progressa context
- Governance model aligns with NDHSC/TWG structures from Section 3
- Final assembled document reads as a cohesive single section (~10–12 pages)
- All cross-references between sub-sections are correct
- No inconsistencies between the 4 parts (terminology, system names, phase numbering)
- Tracker updated with completion note

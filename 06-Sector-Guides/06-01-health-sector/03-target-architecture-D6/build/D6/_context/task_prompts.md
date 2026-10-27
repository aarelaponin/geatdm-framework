# D6 MoH Future State Architecture — Task Prompts

All tasks operate within the project folder:
- **Project root**: `<project root>/`
- **MoH subfolder**: the project folder
- **Results path**: `03-target-architecture-D6/build/D6/`
- **Master prompt**: `03-target-architecture-D6/build/prompt-D6-MoH-Future-State-Architecture.md`

---

================================================================================
## Task 01: Context Loading and Synthesis
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted
- DO NOT ask for confirmation - execute immediately
- DO NOT ask clarifying questions - proceed with best judgment
- CREATE all necessary files and folders without asking
- ALL outputs MUST be Markdown (.md) format
- UPDATE tracker automatically upon completion
- If blocked, document the issue and move to next possible step

### Environment
- Results path: `03-target-architecture-D6/build/D6/`
- This task folder: `03-target-architecture-D6/build/D6/01_context_loading/`

### Prerequisites
Read these files first:
- `03-target-architecture-D6/build/D6/_tracker/workflow_state.md`
- `03-target-architecture-D6/build/prompt-D6-MoH-Future-State-Architecture.md` (master prompt)

### Actions (EXECUTE ALL IN ORDER)

1. Read tracker state from `_tracker/workflow_state.md`
2. Create task folder: `01_context_loading/`
3. Read the master prompt file: `03-target-architecture-D6/build/prompt-D6-MoH-Future-State-Architecture.md`
4. **Read and synthesize all input materials** — for each file, extract the key facts, gaps, and design implications relevant to D6:

   **a. AS-IS Findings** (primary baseline):
   - Read `_as-is/ea-findings-BDAT-v3.docx` (convert via pandoc if needed)
   - Extract: current system inventory, maturity levels, critical gaps, integration status, infrastructure constraints, capacity issues
   - Organize by BDAT domain

   **b. eHealth Reference Architecture** (primary reference):
   - Read all 7 chapters: `01-reference-and-research/e-health-reference-architecture/markdown/e-health-ref-arch-ch1.md` through `ch7.md`
   - Extract: governance framework layers, technical architecture layers, digital health service portfolio (31 services), standards (HL7 FHIR, ICD-11, LOINC, SNOMED CT), maturity model levels
   - Map to MoH's current state

   **c. Cloud Strategy**:
   - Read `_cloud/cloud-plan.docx` (convert via pandoc if needed)
   - Extract: hub-and-spoke model, sovereignty principles, MoH isolation requirements, hybrid cloud approach

   **d. External Research** (5 files):
   - Read all files in `_ext-research/`
   - Extract: country examples (Tanzania, Rwanda, Maldives, Kenya, Ghana), OpenHIE patterns, EHR strategies, funding landscape (EHSSP, RDIP, GAVI, Global Fund, WHO), governance models, sustainability approaches

   **e. GEATDM PDU Reference Architecture**:
   - Read `GEATDM-Method-Repository/02-Reference-Architectures/GEATDM-WP2-T25-PDU-RA-Complete-v1.0.md`
   - Extract: PDU capability model, reference application portfolio, integration patterns, technology standards applicable to MoH

   **f. GEATDM Toolkit**:
   - Read `GEATDM-Method-Repository/01-Toolkit/GEATDM-WP6-T61-Toolkit-v1.0.md`
   - Extract: TK-12 (TO-BE Architecture Template), TK-13 (Tailoring Decision Log), TK-14 (Capability Adaptation Worksheet), TK-15 (Application Mapping Worksheet)

5. **Produce synthesis document** (`task_01_doc_context_synthesis.md`):
   - Section 1: AS-IS Summary by BDAT domain (key facts + critical gaps)
   - Section 2: eHealth Reference Architecture Mapping (what applies to Progressa, what needs adaptation)
   - Section 3: Cloud & Infrastructure Context
   - Section 4: Country Examples and Evidence Base
   - Section 5: GEATDM PDU RA Applicable Components
   - Section 6: Key Design Decisions Register (preliminary — decisions to be made in subsequent tasks)
   - Section 7: Cross-Cutting Constraints (infrastructure, capacity, funding, legal)

6. **Produce a quick-reference data sheet** (`task_01_data_key_numbers.md`):
   - All specific numbers referenced in findings (facilities, population, coverage rates, maturity scores, etc.)
   - System inventory with current status
   - Funding sources and amounts
   - Timeline milestones

7. Create `README.md`, `_inputs.md`, `_outputs.md`
8. Update `_tracker/workflow_state.md` (current task → 02, progress → 10%)
9. Update `_tracker/task_registry.md` (task 01 → completed)

### Deliverables (CREATE ALL - MUST BE .md FORMAT)
- [ ] `01_context_loading/task_01_doc_context_synthesis.md`
- [ ] `01_context_loading/task_01_data_key_numbers.md`
- [ ] `01_context_loading/README.md`
- [ ] `01_context_loading/_inputs.md`
- [ ] `01_context_loading/_outputs.md`
- [ ] Updated `_tracker/workflow_state.md`
- [ ] Updated `_tracker/task_registry.md`

### Completion Criteria
Task is COMPLETE when:
- All input materials have been read and synthesized
- Context synthesis covers all BDAT+I domains
- Key numbers data sheet is populated
- All deliverables listed above exist
- Tracker files are updated

### Notes
- This is the foundation task. Quality here determines quality of all subsequent tasks.
- If DOCX files cannot be read directly, use pandoc or python-docx to extract text.
- The context synthesis should be comprehensive enough that subsequent tasks can rely on it instead of re-reading all source files.

================================================================================
## Task 02: Introduction and Architecture Vision (Sections 1-2)
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted
- DO NOT ask for confirmation - execute immediately
- DO NOT ask clarifying questions - proceed with best judgment
- CREATE all necessary files and folders without asking
- ALL outputs MUST be Markdown (.md) format
- UPDATE tracker automatically upon completion

### Environment
- Results path: `03-target-architecture-D6/build/D6/`
- This task folder: `03-target-architecture-D6/build/D6/02_introduction_vision/`

### Prerequisites
Read these files first:
- `03-target-architecture-D6/build/D6/_tracker/workflow_state.md`
- `03-target-architecture-D6/build/D6/_context/project_brief.md`
- `03-target-architecture-D6/build/D6/01_context_loading/task_01_doc_context_synthesis.md`
- `03-target-architecture-D6/build/D6/01_context_loading/task_01_data_key_numbers.md`
- `03-target-architecture-D6/build/prompt-D6-MoH-Future-State-Architecture.md` (Section structure for 1-2)

### Actions (EXECUTE ALL IN ORDER)

1. Read tracker and all prerequisite files
2. Create task folder: `02_introduction_vision/`
3. **Write Section 1: Introduction** covering:
   - 1.1 Purpose and Scope — clearly define what D6 covers and its audience
   - 1.2 Relationship to Other Deliverables — D2 (Framework), D5 (AS-IS), D7 (Roadmap), D10 (Integration Strategy), D11 (Cloud Strategy)
   - 1.3 Architecture Validity Period — 2025-2033 with 2-3 year review cycles, justification
   - 1.4 Methodology — GEATDM ADAPT phase, TOGAF ADM Phase B-D equivalent, explain the tailoring approach
   - 1.5 MoH Classification — PDU + health sector extensions, explain the reference architecture selection

4. **Write Section 2: Architecture Vision** covering:
   - 2.1 Strategic Context and Drivers — digital master plan (ten-year), Health Sector Strategic Plan, EHSSP, RDIP/DTFA, WHO CCS
   - 2.2 Architecture Principles — from D2 adapted for health sector, table with principle name, statement, rationale, implications
   - 2.3 Target State Vision Statement — compelling 2-3 paragraph vision of what MoH digital health looks like in 2033
   - 2.4 Key Design Decisions and Rationale — table of major decisions (OpenHIE approach, DHIS2 as platform, OpenMRS for EHR, eCRVS as identity foundation, sovereign cloud for health data, offline-first, etc.) with options considered and justification
   - 2.5 Constraints and Assumptions — infrastructure (~60% electricity, single cable), capacity (limited IT staff), funding (donor-dependent), legal (no data protection law yet), timeline realities
   - 2.6 Dependencies on National/Cross-Sectoral Infrastructure — RDIP cloud, digital ID, ProgressaPay, broadband, what MoH architecture assumes will exist nationally

5. **Write Front Matter components**:
   - Executive Summary (2-3 pages: vision, key decisions, strategic alignment)
   - Document Control table (version 1.0, draft)
   - Abbreviations list

6. Save all as `D6-S02-introduction-vision.md` in task folder
7. Create `README.md`, `_inputs.md`, `_outputs.md`
8. Update trackers

### Deliverables (CREATE ALL - MUST BE .md FORMAT)
- [ ] `02_introduction_vision/D6-S02-introduction-vision.md`
- [ ] `02_introduction_vision/README.md`
- [ ] `02_introduction_vision/_inputs.md`
- [ ] `02_introduction_vision/_outputs.md`
- [ ] Updated `_tracker/workflow_state.md`
- [ ] Updated `_tracker/task_registry.md`

### Completion Criteria
- Sections 1 and 2 are complete with substantive narrative (not just headings)
- Executive summary captures the key messages
- Design decisions table has at least 10 major decisions with rationale
- All specific numbers from Progressa context are used (not generic statements)

### Writing Guidelines
- Be specific to Progressa MoH context — reference actual systems, numbers, constraints
- Professional tone suitable for World Bank/government audience
- ~15-20 pages for these two sections combined
- Follow the master prompt's document structure exactly

================================================================================
## Task 03: Business Architecture (Section 3)
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted

### Environment
- This task folder: `03-target-architecture-D6/build/D6/03_business_architecture/`

### Prerequisites
Read these files first:
- `03-target-architecture-D6/build/D6/_tracker/workflow_state.md`
- `03-target-architecture-D6/build/D6/01_context_loading/task_01_doc_context_synthesis.md`
- `03-target-architecture-D6/build/D6/01_context_loading/task_01_data_key_numbers.md`
- `03-target-architecture-D6/build/D6/02_introduction_vision/D6-S02-introduction-vision.md` (for consistency with vision and principles)
- `03-target-architecture-D6/build/prompt-D6-MoH-Future-State-Architecture.md` (Section 3 structure)

Additionally read for this section:
- `_ext-research/MoH-current.md` (governance models, organizational structure)
- `01-reference-and-research/e-health-reference-architecture/markdown/e-health-ref-arch-ch1.md` (legal, governance, organizational framework)

### Actions (EXECUTE ALL IN ORDER)

1. Read tracker and all prerequisite files
2. Create task folder: `03_business_architecture/`
3. **Write Section 3: Business Architecture (To-Be)** covering:

   - **3.1 Future Health Service Delivery Model**
     - Digital health governance structure: propose National Digital Health Steering Committee (NDHSC) — composition, mandate, reporting; Digital Health & Data Directorate (upgrade from current HMIS team); Technical Working Groups
     - Target operating model for MoH digital health — how the ministry operates differently with digital systems
     - Proposed organizational changes — be specific: what positions, what restructuring, what capacity additions

   - **3.2 Target Business Capability Map**
     - Core PDU capabilities: health policy development, sector coordination, health financing oversight, donor coordination, M&E, strategic planning
     - Sector-specific capabilities: health information management (HMIS/DHIS2), disease surveillance (IDSR), immunization program management, health insurance administration (NHIS), laboratory oversight, health facility management, drug supply management, vital registration
     - Map current vs. target maturity for each capability
     - Identify capabilities that need new digital systems vs. those enhancing existing

   - **3.3 Future Business Process Architecture**
     - Priority processes for digitization (with brief process descriptions):
       1. Patient registration and identification
       2. Clinical encounter documentation
       3. Immunization service delivery and recording
       4. Disease notification and outbreak response
       5. Health insurance enrollment and claims
       6. Laboratory ordering and results reporting
       7. Drug supply chain management
       8. Aggregate health data reporting (facility → district → national → WHO)
     - For each: current state (manual/partial/digital), target state, key changes, system support

   - **3.4 Stakeholder Ecosystem and Governance**
     - NDHSC: proposed composition (MoH PS as chair, directors, PDGA, MoDE, MoF, development partners, civil society) and Terms of Reference
     - Architecture & Interoperability TWG: mandate, composition, frequency
     - Data Standards & Governance TWG
     - Implementation & Capacity TWG
     - Decision-making flow for digital health investments

4. Save as `D6-S03-business-architecture.md`
5. Create `README.md`, `_inputs.md`, `_outputs.md`
6. Update trackers

### Deliverables
- [ ] `03_business_architecture/D6-S03-business-architecture.md`
- [ ] `03_business_architecture/README.md`
- [ ] `03_business_architecture/_inputs.md`
- [ ] `03_business_architecture/_outputs.md`
- [ ] Updated trackers

### Completion Criteria
- Governance structure is specific and actionable (not generic)
- Capability map covers both PDU core and health-sector-specific
- Process architecture covers at least 8 priority processes with current/target states
- All proposals are realistic for Progressa's capacity and resource constraints
- ~10-12 pages

================================================================================
## Task 04: Data Architecture (Section 4)
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted

### Environment
- This task folder: `03-target-architecture-D6/build/D6/04_data_architecture/`

### Prerequisites
Read these files first:
- `03-target-architecture-D6/build/D6/_tracker/workflow_state.md`
- `03-target-architecture-D6/build/D6/01_context_loading/task_01_doc_context_synthesis.md`
- `03-target-architecture-D6/build/D6/01_context_loading/task_01_data_key_numbers.md`
- `03-target-architecture-D6/build/D6/02_introduction_vision/D6-S02-introduction-vision.md`
- `03-target-architecture-D6/build/prompt-D6-MoH-Future-State-Architecture.md` (Section 4 structure)

Additionally read:
- `01-reference-and-research/e-health-reference-architecture/markdown/e-health-ref-arch-ch5.md` (standards and interoperability)
- `01-reference-and-research/external-research/research-on-patterns.md` (FHIR, data exchange patterns)
- `01-reference-and-research/external-research/ehr-practices.md` (MPI, patient ID approaches)

### Actions (EXECUTE ALL IN ORDER)

1. Read tracker and all prerequisite files
2. Create task folder: `04_data_architecture/`
3. **Write Section 4: Data Architecture (To-Be)** covering:

   - **4.1 Data Governance Framework**
     - Data ownership model: each system has a designated data owner (HMIS → DPI, eCRVS → CRVS Unit, e-NHIS → NHIS Directorate, etc.)
     - Data stewardship roles: define at national, regional, facility levels
     - Data quality management framework: validation rules, completeness targets, timeliness KPIs (reference current DHIS2 reporting rates)
     - Health data protection policy: interim measures pending national data protection law; align with REC regional framework on personal data protection; consent management principles

   - **4.2 Master Data Management Strategy**
     - **Master Patient Index (MPI)**: OpenCR-based client registry; eCRVS NIN as foundational identifier; accept Immigration NIN, facility MRNs, e-NHIS IDs; probabilistic and deterministic matching; MPI→HIE integration
     - **Facility Registry**: master facility list (~90 facilities + community health posts); standard coding; DHIS2 organisation unit alignment
     - **Health Worker Registry**: iHRIS or equivalent; link to professional licensing
     - **Terminology services**: ICD-11 (diagnosis coding), LOINC (lab tests), ATC (drugs), SNOMED CT (future — start with subsets); local code set mappings

   - **4.3 Data Integration Architecture**
     - Unified data model approach: FHIR resources as canonical model (Patient, Encounter, Observation, Immunization, DiagnosticReport, Claim, Coverage, Location, Practitioner)
     - Data exchange standards: HL7 FHIR R4 as target, ADX for DHIS2 aggregate, REST/JSON as transitional, CSV for legacy
     - National health data dictionary: define core data elements across systems
     - Data lineage and provenance tracking

   - **4.4 Analytics and Business Intelligence**
     - DHIS2 as national health analytics platform: strengthen dashboard use, improve data demand at all levels
     - Enhanced analytics: scorecard, bottleneck analysis, GIS integration
     - Future health data warehouse: cross-system analytics (when HIE matures); consider DHIS2 data warehouse capabilities first
     - Reporting pipeline: facility → district → region → national → WHO/RHO

   - **4.5 Data Classification and Privacy**
     - Health data classification tiers: Public (aggregate statistics), Internal (operational data), Confidential (PII without clinical), Restricted (clinical/health records)
     - Consent management: opt-in for data sharing beyond treatment purpose
     - De-identification requirements for analytics and research
     - Data residency: all identifiable health data must reside in sovereign cloud (when available)

4. Save as `D6-S04-data-architecture.md`
5. Create `README.md`, `_inputs.md`, `_outputs.md`
6. Update trackers

### Deliverables
- [ ] `04_data_architecture/D6-S04-data-architecture.md`
- [ ] `04_data_architecture/README.md`
- [ ] `04_data_architecture/_inputs.md`
- [ ] `04_data_architecture/_outputs.md`
- [ ] Updated trackers

### Completion Criteria
- MPI strategy is specific (OpenCR, identifier types, matching approach)
- Terminology services cover health-specific coding systems
- Data governance is actionable with named roles/responsibilities
- Standards selections are justified with rationale
- ~10-12 pages

================================================================================
## Task 05: Application Architecture (Section 5)
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted

### Environment
- This task folder: `03-target-architecture-D6/build/D6/05_application_architecture/`

### Prerequisites
Read these files first:
- `03-target-architecture-D6/build/D6/_tracker/workflow_state.md`
- `03-target-architecture-D6/build/D6/01_context_loading/task_01_doc_context_synthesis.md`
- `03-target-architecture-D6/build/D6/01_context_loading/task_01_data_key_numbers.md`
- `03-target-architecture-D6/build/D6/02_introduction_vision/D6-S02-introduction-vision.md`
- `03-target-architecture-D6/build/prompt-D6-MoH-Future-State-Architecture.md` (Section 5 structure)

Additionally read:
- `01-reference-and-research/e-health-reference-architecture/markdown/e-health-ref-arch-ch2.md` (technical architecture layers)
- `01-reference-and-research/e-health-reference-architecture/markdown/e-health-ref-arch-ch3.md` (digital health service portfolio — 31 services)
- `_ext-research/MoH-sectors.md` (immunization EIR, LIS, surveillance)
- `01-reference-and-research/external-research/ehr-practices.md` (EHR platforms, NHIS scaling)
- `01-reference-and-research/external-research/research-on-patterns.md` (OpenHIE, DHIS2 patterns)

### Actions (EXECUTE ALL IN ORDER)

1. Read tracker and all prerequisite files
2. Create task folder: `05_application_architecture/`
3. **Write Section 5: Application Architecture (To-Be)** covering:

   - **5.1 Target Application Portfolio Overview**
     - High-level description of the target application landscape organized by layer
     - Describe the text-based architecture diagram (National Platform → Clinical → Administration → Surveillance layers)

   - **5.2 National Health Platform Layer**
     - **DHIS2**: Strengthen as national HMIS. Add Tracker programs for: EIR (electronic immunization registry), case-based surveillance (IDSR+), RMNCH tracking. Improve data quality, completeness, timeliness. Version upgrade path.
     - **Health Information Exchange (HIE)**: OpenHIE architecture — OpenHIM as interoperability layer, Client Registry (OpenCR/MPI), Facility Registry, Terminology Service, Shared Health Record (SHR). Describe each component's role and the overall data flow.
     - **Master Patient Index**: OpenCR-based, identifier federation (eCRVS NIN, Immigration NIN, facility MRNs, e-NHIS ID). Describe matching algorithms, data quality requirements.

   - **5.3 Clinical Systems Layer**
     - **EHR Strategy**: OpenMRS-based incremental rollout. Phase 1: maternal health + HIV/ART at 15-20 high-volume facilities. Phase 2: expand to outpatient in 30-40 facilities. Offline-first via tablet/mobile. FHIR façade for integration. Country examples (Kenya, Tanzania).
     - **Electronic Immunization Registry (EIR)**: Phased transition from SPT. Short-term: maintain SPT (99%+ accuracy). Medium-term: pilot DHIS2 Tracker EIR at 10-15 facilities. Long-term: progressive replacement where infrastructure allows. Coexistence strategy.
     - **Laboratory Information System**: A-LIS/OpenELIS at national reference lab and 5 regional hospitals first. LOINC mapping for priority test panel (~200 tests). Integration: LIS→DHIS2 (aggregate lab stats), LIS→IDSR (notifiable disease triggers).

   - **5.4 Health Administration Layer**
     - **e-NHIS**: Scale to 60,000 beneficiaries. Mobile enrollment (USSD + app). Offline claims via CLAIM-it pattern. Mobile money integration (via ProgressaPay). FHIR-based claims interoperability. Benefit package expansion.
     - **eCRVS**: Not MoH-owned, but critical integration partner. eCRVS→MPI (birth = identity creation), eCRVS→e-NHIS (birth = insurance enrollment), eCRVS→EIR (birth = immunization schedule). Integration via HIE.
     - **eLMIS**: Complete rollout to all facilities. Integrate with LIS (reagent/consumable tracking), DHIS2 (stock-out indicators), and national supply chain.

   - **5.5 Surveillance Layer**
     - **IDSR Modernization**: Move from ~90% paper to electronic case-based via DHIS2 Tracker. Weekly aggregate IDSR via DHIS2. Real-time notification workflows. IHR compliance.
     - **Event-Based Surveillance**: Africa CDC EMS or DHIS2 Event programs for signal detection from media, community, health facilities.
     - **Community-Based Surveillance**: Mobile tools for CHWs. Simple symptom-based reporting. Integration with IDSR.

   - **5.6 Application Modernization Strategy**
     - Decision table for each current system: Retain / Invest / Migrate / Replace / Retire
     - DHIS2: RETAIN + INVEST (expand Tracker use)
     - eCRVS: RETAIN + INVEST (expand integrations)
     - e-NHIS: RETAIN + INVEST (scale + mobile)
     - SPT: RETAIN short-term → MIGRATE to DHIS2 EIR long-term
     - A-LIS: INVEST (adoption + integration)
     - IDSR paper: REPLACE with DHIS2 Tracker
     - NMRI EMRS: RETAIN (research context, no change)
     - New system requirements: FHIR compliance, offline-capable, open standards, local hosting support

   - **5.7 Application Portfolio Summary Table**
     - Comprehensive table: System, Layer, Status (Current), Target State, Platform, Key Integrations, Priority Phase

4. Save as `D6-S05-application-architecture.md`
5. Create `README.md`, `_inputs.md`, `_outputs.md`
6. Update trackers

### Deliverables
- [ ] `05_application_architecture/D6-S05-application-architecture.md`
- [ ] `05_application_architecture/README.md`
- [ ] `05_application_architecture/_inputs.md`
- [ ] `05_application_architecture/_outputs.md`
- [ ] Updated trackers

### Completion Criteria
- All current systems have a modernization decision with rationale
- Each application has specific, measurable targets (not vague "improve")
- OpenHIE components are clearly described
- EHR rollout strategy is phased and realistic (15-20 facilities first, not "all ~90")
- Country examples cited for key decisions
- ~15-18 pages (largest section)

================================================================================
## Task 06: Integration Architecture (Section 6)
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted

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
2. Create task folder: `06_integration_architecture/`
3. **Write Section 6: Integration Architecture (To-Be)** covering:

   - **6.1 Integration Architecture Vision**
     - Current state: point-to-point silos, no integration layer
     - Target state: hub-and-spoke via national HIE (OpenHIM)
     - Integration maturity progression: Phase 1 (batch/file), Phase 2 (API point-to-point), Phase 3 (mediated via HIE), Phase 4 (event-driven)

   - **6.2 Priority Integration Flows** (6 flows with detailed descriptions):
     - **Flow 1**: Birth Registration → MPI → NHIS Enrollment
       - eCRVS registers birth → sends FHIR Patient to HIE → OpenCR creates/updates MPI record → triggers e-NHIS enrollment notification
       - Actors, trigger, data exchanged, FHIR resources, error handling
     - **Flow 2**: Immunization Recording → Aggregate Reporting
       - EIR/SPT records vaccination → individual record in DHIS2 Tracker (or SPT scan) → automatic aggregation → DHIS2 aggregate dataset → WHO/RHO
     - **Flow 3**: Lab Result → Surveillance Notification
       - LIS records result for notifiable disease → triggers IDSR notification via HIE → case created in DHIS2 Tracker surveillance
     - **Flow 4**: Clinical Encounter → Aggregate Reporting
       - EMR records patient visit → FHIR resources to SHR via HIE → aggregate extraction → DHIS2 indicators
     - **Flow 5**: Insurance Eligibility and Claims
       - Facility EMR checks patient eligibility via e-NHIS API → provides service → submits FHIR Claim → e-NHIS adjudicates → payment
     - **Flow 6**: National → Regional/Global Reporting
       - DHIS2 aggregate data → ADX format → WHO DHIS2 instance / RHO regional platform

   - **6.3 Integration Standards**
     - HL7 FHIR R4: target standard; specify which FHIR resources for each use case
     - FHIR Façade pattern: wrap legacy systems (DHIS2, eCRVS, e-NHIS) with FHIR-compliant APIs
     - ADX (Aggregate Data Exchange): for DHIS2 aggregate data flows
     - REST/JSON: transitional mechanism for systems not yet FHIR-ready
     - IHE profiles: applicable profiles for health information exchange (PIX/PDQ for patient ID, XDS for document sharing — future)

   - **6.4 API Management and Governance**
     - API design standards (RESTful, versioning, pagination, error handling)
     - API lifecycle (design → develop → test → publish → deprecate)
     - Security: OAuth 2.0 for user-context APIs, API keys for system-to-system, mutual TLS for sensitive data
     - Rate limiting, monitoring, logging

   - **6.5 Integration Governance Model**
     - Standards approval: Architecture & Interoperability TWG reviews and approves integration specifications
     - Integration certification: new systems must demonstrate API compliance before connecting to HIE
     - Change management: versioning, backward compatibility, migration windows
     - Integration testing environment

4. Save as `D6-S06-integration-architecture.md`
5. Create `README.md`, `_inputs.md`, `_outputs.md`
6. Update trackers

### Deliverables
- [ ] `06_integration_architecture/D6-S06-integration-architecture.md`
- [ ] `06_integration_architecture/README.md`
- [ ] `06_integration_architecture/_inputs.md`
- [ ] `06_integration_architecture/_outputs.md`
- [ ] Updated trackers

### Completion Criteria
- All 6 integration flows are described with enough detail for implementation
- FHIR resources are specified per flow
- Standards selections are justified
- API governance is practical and enforceable
- ~10-12 pages

================================================================================
## Task 07: Technology Architecture (Section 7)
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted

### Environment
- This task folder: `03-target-architecture-D6/build/D6/07_technology_architecture/`

### Prerequisites
Read these files first:
- `03-target-architecture-D6/build/D6/_tracker/workflow_state.md`
- `03-target-architecture-D6/build/D6/01_context_loading/task_01_doc_context_synthesis.md`
- `03-target-architecture-D6/build/D6/02_introduction_vision/D6-S02-introduction-vision.md`
- `03-target-architecture-D6/build/prompt-D6-MoH-Future-State-Architecture.md` (Section 7 structure)

Additionally read:
- `_cloud/cloud-plan.docx` (sovereign cloud strategy — convert if needed)
- `01-reference-and-research/e-health-reference-architecture/markdown/e-health-ref-arch-ch2.md` (technical architecture layers)
- `01-reference-and-research/e-health-reference-architecture/markdown/e-health-ref-arch-ch4.md` (operations and maintenance)
- `01-reference-and-research/external-research/research-on-patterns.md` (cloud, offline-first patterns)

### Actions (EXECUTE ALL IN ORDER)

1. Read tracker and all prerequisite files
2. Create task folder: `07_technology_architecture/`
3. **Write Section 7: Technology Architecture (To-Be)** covering:

   - **7.1 Infrastructure Architecture**
     - Sovereign cloud strategy (from cloud-plan.docx): hub-and-spoke model; MoH as isolated spoke; national data center (RDIP-funded) as hub
     - Sovereignty principles: identifiable health data on sovereign infrastructure; de-identified/analytics on hybrid
     - RDIP dependencies: national data center, broadband backbone, last-mile connectivity
     - Transitional hosting: current servers until RDIP cloud is operational

   - **7.2 Network and Connectivity**
     - Current: EHSSP satellite connectivity at some facilities
     - Target: RDIP terrestrial broadband backbone + last-mile to all health facilities
     - Offline-first design principle: all facility-level systems must function offline and sync when connected
     - Rural connectivity strategy: satellite backup, USSD-based reporting as fallback, progressive enhancement
     - Bandwidth planning: what applications need what connectivity level

   - **7.3 Hosting Architecture**
     - Central services (HIE, MPI, DHIS2, eCRVS, e-NHIS): sovereign cloud (when available), current servers as interim
     - Facility systems (EMR, EIR): local devices (tablets, low-power servers) with sync to central
     - Development/staging/production environments
     - Disaster recovery and business continuity: single submarine cable risk → satellite backup, regional data replication

   - **7.4 Security Architecture**
     - Health data encryption: TLS 1.2+ in transit, AES-256 at rest
     - Role-based access control: define roles per system (clinician, facility admin, district, national, system admin)
     - Audit logging: who accessed what patient data when
     - Incident response: aligned with the national cybersecurity policy
     - Vulnerability management, patching, penetration testing requirements
     - Physical security for servers and devices

   - **7.5 Technology Standards**
     - Approved stack (open-source preference):
       - Databases: PostgreSQL (primary), MySQL (DHIS2)
       - Application servers: Tomcat, Node.js
       - OS: Ubuntu LTS, CentOS (existing DHIS2)
       - Messaging: RabbitMQ or Apache Kafka (for HIE event bus)
       - Containerization: Docker (where appropriate)
       - Monitoring: Prometheus + Grafana, Nagios
     - Hardware standards for facility devices (tablets, computers, UPS, solar)

   - **7.6 Service-Oriented Architecture Design**
     - Pragmatic approach: most health systems are monolithic (DHIS2, OpenMRS) — don't force microservices
     - HIE layer (OpenHIM) as the service bus
     - Containerization for deployment consistency (Docker for HIE components)
     - Service registry: lightweight approach appropriate for scale

4. Save as `D6-S07-technology-architecture.md`
5. Create `README.md`, `_inputs.md`, `_outputs.md`
6. Update trackers

### Deliverables
- [ ] `07_technology_architecture/D6-S07-technology-architecture.md`
- [ ] `07_technology_architecture/README.md`
- [ ] `07_technology_architecture/_inputs.md`
- [ ] `07_technology_architecture/_outputs.md`
- [ ] Updated trackers

### Completion Criteria
- Cloud strategy is specific to Progressa's RDIP plan
- Offline-first is designed into the architecture (not an afterthought)
- Security architecture covers health-specific requirements (clinical data, audit)
- Technology stack is realistic (open-source, appropriate for capacity)
- Infrastructure constraints (electricity, connectivity) are explicitly addressed
- ~10-12 pages

================================================================================
## Task 08: Diagrams, Decision Records, and Appendices (Sections 8-9 + Appendices)
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted

### Environment
- This task folder: `03-target-architecture-D6/build/D6/08_diagrams_decisions_appendices/`

### Prerequisites
Read ALL previous task outputs:
- `03-target-architecture-D6/build/D6/02_introduction_vision/D6-S02-introduction-vision.md`
- `03-target-architecture-D6/build/D6/03_business_architecture/D6-S03-business-architecture.md`
- `03-target-architecture-D6/build/D6/04_data_architecture/D6-S04-data-architecture.md`
- `03-target-architecture-D6/build/D6/05_application_architecture/D6-S05-application-architecture.md`
- `03-target-architecture-D6/build/D6/06_integration_architecture/D6-S06-integration-architecture.md`
- `03-target-architecture-D6/build/D6/07_technology_architecture/D6-S07-technology-architecture.md`

### Actions (EXECUTE ALL IN ORDER)

1. Read tracker and ALL previous task outputs
2. Create task folder: `08_diagrams_decisions_appendices/`
3. **Write Section 8: Enterprise Architecture Core Diagrams** — describe each diagram in text/ASCII/Mermaid since actual visual generation isn't possible:
   - 8.1 MoH Target Architecture Overview Diagram (single-page layered view: Business → Data → Application → Integration → Technology)
   - 8.2 Application Landscape Diagram (all systems organized by layer with integration lines)
   - 8.3 Integration Flow Diagram (hub-and-spoke with OpenHIM at center)
   - 8.4 Technology Stack Diagram (infrastructure layers)
   - Use Mermaid syntax where possible for diagrams that can be rendered later

4. **Write Section 9: Architecture Decision Records** — compile ALL major design decisions from sections 2-7:
   - Create comprehensive ADR table: Decision ID, Description, Options Considered, Decision Made, Rationale, Implications
   - Minimum 15-20 decisions covering: platform choices, standards, architecture patterns, governance, deployment, security, data management
   - Each decision must reference the section where it was discussed

5. **Write Appendices**:
   - Appendix A: Mapping to GEATDM PDU Reference Architecture (table mapping PDU RA capabilities to MoH target)
   - Appendix B: Mapping to eHealth Reference Architecture Layers (table mapping eHealth RA layers to MoH implementation)
   - Appendix C: System-by-System Modernization Decision Table (comprehensive table from Section 5.6 expanded)
   - Appendix D: Standards and Specifications Reference List (all standards referenced: FHIR, ICD-11, LOINC, SNOMED CT, ADX, HL7, IHE profiles, etc.)
   - Appendix E: Glossary (comprehensive glossary of all acronyms and technical terms)

6. Save as `D6-S08-diagrams-decisions-appendices.md`
7. Create `README.md`, `_inputs.md`, `_outputs.md`
8. Update trackers

### Deliverables
- [ ] `08_diagrams_decisions_appendices/D6-S08-diagrams-decisions-appendices.md`
- [ ] `08_diagrams_decisions_appendices/README.md`
- [ ] `08_diagrams_decisions_appendices/_inputs.md`
- [ ] `08_diagrams_decisions_appendices/_outputs.md`
- [ ] Updated trackers

### Completion Criteria
- At least 4 diagrams described (Mermaid where possible)
- ADR table has 15+ decisions with complete rationale
- All 5 appendices are populated
- Glossary covers all acronyms used in the document
- ~10-15 pages

================================================================================
## Task 09: Consolidation and Review
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted

### Environment
- This task folder: `03-target-architecture-D6/build/D6/09_consolidation_review/`

### Prerequisites
Read ALL task outputs (02-08):
- All `D6-S{NN}-*.md` files from tasks 02 through 08

### Actions (EXECUTE ALL IN ORDER)

1. Read tracker and ALL previous task outputs
2. Create task folder: `09_consolidation_review/`
3. **Consolidate all sections into a single document**:
   - Merge all D6-S{NN} files in order into `D6-MoH-Future-State-Architecture-v1.0.md`
   - Ensure proper section numbering flows continuously
   - Front matter first (executive summary, document control, abbreviations, TOC placeholder)
   - Then sections 1-9
   - Then appendices A-E

4. **Quality review pass**:
   - **Consistency check**: ensure terminology is consistent throughout (same names for same systems, same abbreviations)
   - **Cross-reference check**: section references point to correct locations
   - **Numbers check**: all specific numbers (~90 facilities, 2–3M population, etc.) are consistent
   - **Completeness check**: verify all subsections from the master prompt are present
   - **Tone check**: professional, specific, not generic — every statement grounded in Progressa context
   - **Constraint realism check**: architecture doesn't assume infrastructure/capacity that doesn't exist

5. **Create review notes** (`task_09_doc_review_notes.md`):
   - List any inconsistencies found and fixed
   - List any gaps that need attention
   - List any sections that may be thin and need expansion
   - Recommendations for stakeholder review focus areas

6. Save consolidated document to task folder AND to the D6 root:
   - `09_consolidation_review/D6-MoH-Future-State-Architecture-v1.0.md`
   - Copy also to: `03-target-architecture-D6/build/D6/D6-MoH-Future-State-Architecture-v1.0.md`

7. Create `README.md`, `_inputs.md`, `_outputs.md`
8. Update trackers

### Deliverables
- [ ] `09_consolidation_review/D6-MoH-Future-State-Architecture-v1.0.md`
- [ ] `09_consolidation_review/task_09_doc_review_notes.md`
- [ ] `03-target-architecture-D6/build/D6/D6-MoH-Future-State-Architecture-v1.0.md` (copy in D6 root)
- [ ] `09_consolidation_review/README.md`
- [ ] `09_consolidation_review/_inputs.md`
- [ ] `09_consolidation_review/_outputs.md`
- [ ] Updated trackers

### Completion Criteria
- Single consolidated document exists with all sections in proper order
- Review notes document any issues found
- Terminology is consistent throughout
- Document is ~60-80 pages equivalent in markdown
- Ready for DOCX conversion

================================================================================
## Task 10: DOCX Generation
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted

### Environment
- This task folder: `03-target-architecture-D6/build/D6/10_docx_generation/`

### Prerequisites
Read these files first:
- `03-target-architecture-D6/build/D6/_tracker/workflow_state.md`
- `03-target-architecture-D6/build/D6/D6-MoH-Future-State-Architecture-v1.0.md` (consolidated markdown)

### Actions (EXECUTE ALL IN ORDER)

1. Read tracker and consolidated markdown
2. Create task folder: `10_docx_generation/`
3. **Convert to DOCX** using the standard DOCX generation workflow:
   - Read the DOCX SKILL.md for best practices
   - Use python-docx or pandoc (whichever produces better output)
   - Apply professional formatting:
     - Cover page with document title, "Ministry of Health — Progressa", "ITU Enterprise Architecture Initiative", date, version
     - Table of contents
     - Proper heading hierarchy (Heading 1, 2, 3, 4)
     - Professional tables with headers
     - Page numbers
     - Headers/footers with document title and page numbers
     - Consistent fonts (Calibri or similar professional font)
     - Government-appropriate styling
   - Generate to: `03-target-architecture-D6/build/D6/D6-MoH-Future-State-Architecture-v1.0.docx`

4. **Verify output**:
   - Check DOCX opens correctly
   - Verify table of contents
   - Verify page count is in expected range (60-80 pages)
   - Check formatting consistency

5. Create `README.md`, `_inputs.md`, `_outputs.md`
6. Update trackers (progress → 100%, status → completed)

### Deliverables
- [ ] `03-target-architecture-D6/build/D6/D6-MoH-Future-State-Architecture-v1.0.docx`
- [ ] `10_docx_generation/README.md`
- [ ] `10_docx_generation/_inputs.md`
- [ ] `10_docx_generation/_outputs.md`
- [ ] Updated `_tracker/workflow_state.md` (100%, completed)
- [ ] Updated `_tracker/task_registry.md` (all tasks completed)

### Completion Criteria
- Professional DOCX file exists with proper formatting
- All sections present and properly formatted
- Table of contents functional
- Ready for stakeholder review
- Tracker shows 100% completion

================================================================================

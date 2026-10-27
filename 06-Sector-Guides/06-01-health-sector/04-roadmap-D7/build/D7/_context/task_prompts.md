# D7 Task Prompts — EA Implementation Roadmap for Ministry of Health

This file contains all task prompts for the D7 workflow. Execute tasks in order, respecting dependencies.

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
- Results path: `04-roadmap-D7/build/D7/`
- This task folder: `04-roadmap-D7/build/D7/01_context_loading/`

### Prerequisites
Read these files first:
- `04-roadmap-D7/build/D7/_tracker/workflow_state.md`

### Actions (EXECUTE ALL IN ORDER)
1. Read tracker state from `_tracker/workflow_state.md`
2. Create task folder: `01_context_loading/`
3. Read the **consolidated D6 document**: `03-target-architecture-D6/build/D6/D6-MoH-Future-State-Architecture-v1.0.md` — Extract the complete target state architecture across all BDAT domains
4. Read the **AS-IS findings**: `_as-is/ea-findings-BDAT-v3.docx` — Extract current state by domain (Business, Data, Application, Technology)
5. Read **all 5 research files** from `_ext-research/`:
   - `research-on-patterns.md` — timeline/cost benchmarks
   - `ehr-practices.md` — EHR deployment patterns
   - `1. EHSSP (Progressa Essential Health Services Streng.md` — funding program details
   - `MoH-current.md` — governance models, staffing, sustainability
   - `MoH-sectors.md` — sector-specific implementation patterns
6. Read `01-reference-and-research/e-health-reference-architecture/markdown/e-health-ref-arch-ch7.md` — Maturity model for phasing
7. Read `_cloud/cloud-plan.docx` — Cloud strategy timeline
8. Search Project Knowledge for: PDGA EA Framework Phase 4 (Gap Analysis & Roadmap), PAERA framework, contract D7 specifications
9. Create `task_01_doc_d6_target_summary.md` — Structured summary of D6 target architecture by domain (Business, Data, Application, Integration, Technology). For each domain: list all target components/capabilities with their key specifications.
10. Create `task_01_doc_asis_baseline.md` — Structured summary of AS-IS state by domain. For each system: maturity, integration status, coverage, key gaps.
11. Create `task_01_data_funding_landscape.md` — Summary of all funding programs with amounts, periods, digital health relevance, and transition timelines (especially EHSSP closing Aug 2025).
12. Create `task_01_data_benchmarks.md` — Extracted benchmarks from research files: timelines, costs, staffing ratios, country comparisons for each major system type (HIE, EHR, EIR, LIS, IDSR, eLMIS).
13. Create `README.md` in task folder
14. Create `_inputs.md` listing all files read
15. Create `_outputs.md` listing all files created
16. Update `_tracker/workflow_state.md` and `_tracker/task_registry.md`

### Deliverables (CREATE ALL - MUST BE .md FORMAT)
- [ ] `01_context_loading/task_01_doc_d6_target_summary.md`
- [ ] `01_context_loading/task_01_doc_asis_baseline.md`
- [ ] `01_context_loading/task_01_data_funding_landscape.md`
- [ ] `01_context_loading/task_01_data_benchmarks.md`
- [ ] `01_context_loading/README.md`
- [ ] `01_context_loading/_inputs.md`
- [ ] `01_context_loading/_outputs.md`
- [ ] Updated `_tracker/workflow_state.md`
- [ ] Updated `_tracker/task_registry.md`

### Completion Criteria
Task is COMPLETE when:
- All 4 synthesis documents exist with substantive, structured content
- D6 target state is fully captured by domain
- AS-IS baseline is fully captured by system/domain
- Funding landscape includes all programs with amounts and timelines
- Benchmarks are extracted with specific numbers (months, costs, ratios)
- Tracker files are updated
================================================================================


================================================================================
## Task 02: Introduction and Gap Analysis — Generic/Cross-Sectoral
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted
- DO NOT ask for confirmation - execute immediately
- ALL outputs MUST be Markdown (.md) format

### Environment
- Results path: `04-roadmap-D7/build/D7/`
- This task folder: `04-roadmap-D7/build/D7/02_intro_gap_generic/`

### Prerequisites
Read these files first:
- `04-roadmap-D7/build/D7/_tracker/workflow_state.md`
- `04-roadmap-D7/build/D7/01_context_loading/task_01_doc_d6_target_summary.md`
- `04-roadmap-D7/build/D7/01_context_loading/task_01_doc_asis_baseline.md`
- `04-roadmap-D7/build/D7/01_context_loading/task_01_data_funding_landscape.md`

### Actions (EXECUTE ALL IN ORDER)
1. Read tracker and all prerequisite files
2. Create task folder: `02_intro_gap_generic/`
3. Write **Section 1: Introduction** (1.1-1.5):
   - Purpose and scope of D7
   - Relationship to D5, D6, and other deliverables
   - Methodology (GEATDM PLAN phase, TOGAF ADM Phase E-F)
   - Roadmap horizon: 2025-2033 (3 waves)
   - How to read the document
4. Write **Section 2.1: Generic/Cross-Sectoral Component Gaps**:
   - For each gap area (sovereign cloud, broadband, digital ID, data protection law, interoperability platform, government cloud policy): describe AS-IS, TO-BE, gap, dependency owner, MoH implications if gap persists
   - Use structured table format per the prompt specification
   - Include narrative analysis after the table
5. Save as `D7-S02-introduction-gap-generic.md`
6. Create README, _inputs, _outputs
7. Update tracker files

### Deliverables
- [ ] `02_intro_gap_generic/D7-S02-introduction-gap-generic.md`
- [ ] `02_intro_gap_generic/README.md`
- [ ] `02_intro_gap_generic/_inputs.md`
- [ ] `02_intro_gap_generic/_outputs.md`
- [ ] Updated trackers

### Completion Criteria
- Section 1 covers all 5 subsections with proper framing
- Section 2.1 covers all 6+ cross-sectoral gap areas with AS-IS/TO-BE/gap/owner/implications
- Each gap links to a specific dependency owner and funding source
- Consequences for MoH are concrete (not generic)
================================================================================


================================================================================
## Task 03: Gap Analysis — Sector-Specific (Health) Components
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted
- ALL outputs MUST be Markdown (.md) format

### Environment
- Results path: `04-roadmap-D7/build/D7/`
- This task folder: `04-roadmap-D7/build/D7/03_gap_sector_specific/`

### Prerequisites
Read these files first:
- `04-roadmap-D7/build/D7/_tracker/workflow_state.md`
- `04-roadmap-D7/build/D7/01_context_loading/task_01_doc_d6_target_summary.md`
- `04-roadmap-D7/build/D7/01_context_loading/task_01_doc_asis_baseline.md`
- `04-roadmap-D7/build/D7/02_intro_gap_generic/D7-S02-introduction-gap-generic.md` (for consistency)

### Actions (EXECUTE ALL IN ORDER)
1. Read tracker and all prerequisite files
2. Create task folder: `03_gap_sector_specific/`
3. Write **Section 2.2: Sector-Specific (Health) Component Gaps** organized by BDAT domain:
   - **Business Architecture Gaps**: governance, strategy, data governance framework, data protection policy, project management
   - **Data Architecture Gaps**: MPI, patient identifier, data dictionary, terminology services, data warehouse, data quality
   - **Application Architecture Gaps**: HIE, EHR, e-NHIS, SPT→EIR, A-LIS, IDSR, eLMIS, eCRVS integration
   - **Technology Architecture Gaps**: sovereign hosting, connectivity, offline-first, security, disaster recovery
   - **Integration Architecture Gaps**: silos→HIE, API standards, FHIR, specific integration flows
   - For each gap: AS-IS state (with specific numbers from D5), TO-BE target (from D6), gap description, severity/priority
4. Save as `D7-S03-gap-sector-specific.md`
5. Create README, _inputs, _outputs
6. Update tracker files

### Deliverables
- [ ] `03_gap_sector_specific/D7-S03-gap-sector-specific.md`
- [ ] `03_gap_sector_specific/README.md`
- [ ] `03_gap_sector_specific/_inputs.md`
- [ ] `03_gap_sector_specific/_outputs.md`
- [ ] Updated trackers

### Completion Criteria
- All 5 BDAT domains + Integration covered
- Each gap references specific AS-IS numbers (e.g., "15,000–20,000 of 60,000 target") and D6 targets
- Gaps are prioritized (Critical/High/Medium)
- Total gap count is comprehensive (expect 25-30+ individual gaps)
================================================================================


================================================================================
## Task 04: Opportunities and Solutions
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted
- ALL outputs MUST be Markdown (.md) format

### Environment
- Results path: `04-roadmap-D7/build/D7/`
- This task folder: `04-roadmap-D7/build/D7/04_opportunities_solutions/`

### Prerequisites
Read these files first:
- `04-roadmap-D7/build/D7/_tracker/workflow_state.md`
- `04-roadmap-D7/build/D7/02_intro_gap_generic/D7-S02-introduction-gap-generic.md`
- `04-roadmap-D7/build/D7/03_gap_sector_specific/D7-S03-gap-sector-specific.md`
- `04-roadmap-D7/build/D7/01_context_loading/task_01_data_benchmarks.md`

### Actions (EXECUTE ALL IN ORDER)
1. Read tracker and all prerequisite files
2. Create task folder: `04_opportunities_solutions/`
3. Write **Section 3: Opportunities and Solutions**:
   - For each gap cluster from Sections 2.1 and 2.2, identify:
     - **Solution approach**: Build, buy, configure, integrate, or leverage existing
     - **Platform/product options**: Open-source preference with justification (OpenHIM, OpenCR, OpenMRS, DHIS2 Tracker, OpenELIS, etc.)
     - **Country precedents**: Reference specific implementations from research (Tanzania HIE, Rwanda Mutuelle, Maldives DHIS2 EIR, Kenya OpenMRS, Ghana NHIS, etc.)
     - **Quick wins**: Low-effort, high-impact actions that can start immediately
     - **Strategic investments**: Large initiatives requiring sustained funding and capacity
   - Group solutions by theme: Governance & Policy, Data & Registries, Clinical Systems, Infrastructure, Integration
4. Save as `D7-S04-opportunities-solutions.md`
5. Create README, _inputs, _outputs
6. Update tracker files

### Deliverables
- [ ] `04_opportunities_solutions/D7-S04-opportunities-solutions.md`
- [ ] `04_opportunities_solutions/README.md`
- [ ] `04_opportunities_solutions/_inputs.md`
- [ ] `04_opportunities_solutions/_outputs.md`
- [ ] Updated trackers

### Completion Criteria
- Every gap from Sections 2.1 and 2.2 has a mapped solution approach
- Country precedents cited with specific details (country, system, timeline, outcome)
- Quick wins clearly distinguished from strategic investments
- Open-source options justified against proprietary alternatives
================================================================================


================================================================================
## Task 05: Phasing Strategy and Wave 1 Detailed Plan
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted
- ALL outputs MUST be Markdown (.md) format

### Environment
- Results path: `04-roadmap-D7/build/D7/`
- This task folder: `04-roadmap-D7/build/D7/05_wave1_plan/`

### Prerequisites
Read these files first:
- `04-roadmap-D7/build/D7/_tracker/workflow_state.md`
- `04-roadmap-D7/build/D7/03_gap_sector_specific/D7-S03-gap-sector-specific.md`
- `04-roadmap-D7/build/D7/04_opportunities_solutions/D7-S04-opportunities-solutions.md`
- `04-roadmap-D7/build/D7/01_context_loading/task_01_data_funding_landscape.md`
- `04-roadmap-D7/build/D7/01_context_loading/task_01_data_benchmarks.md`

### Actions (EXECUTE ALL IN ORDER)
1. Read tracker and all prerequisite files
2. Create task folder: `05_wave1_plan/`
3. Write **Section 4.1: Phasing Strategy** — Three waves overview, rationale, funding alignment, key outcomes per wave
4. Write **Section 4.2: Wave 1 Detailed Plan (2025-2026)** — "Govern, Connect, Register"
   - For EACH Wave 1 initiative, provide the full detail template:
     - Initiative name and ID (W1-01 through W1-NN)
     - Description, prerequisites, dependencies (internal + cross-sectoral)
     - Deliverables/outputs (concrete, measurable)
     - Estimated duration (months)
     - Resource requirements (staff FTE, TA, equipment)
     - Indicative cost (USD range)
     - Funding source (specific program)
     - Risks and mitigations
     - Success criteria
   - Expected Wave 1 initiatives include (at minimum):
     - W1-01: Establish Digital Health Governance (NDHSC + Directorate)
     - W1-02: Develop National Digital Health Strategy
     - W1-03: Establish Interim Health Data Governance Framework
     - W1-04: Strengthen DHIS2 (reporting completeness, Tracker pilot, analytics)
     - W1-05: Deploy MPI/Client Registry Pilot (leveraging eCRVS NIN)
     - W1-06: Operationalize eCRVS-NHIS Integration
     - W1-07: Complete eLMIS National Rollout
     - W1-08: Pilot Broadband Transition at Priority Facilities
     - W1-09: Establish MoH Cloud Spoke on G-Cloud (when available)
     - W1-10: Digital Health Workforce Foundation (core team recruitment + initial training)
     - W1-11: EHSSP Digital Health Transition Plan
5. Save as `D7-S05-phasing-wave1.md`
6. Create README, _inputs, _outputs
7. Update tracker files

### Deliverables
- [ ] `05_wave1_plan/D7-S05-phasing-wave1.md`
- [ ] `05_wave1_plan/README.md`
- [ ] `05_wave1_plan/_inputs.md`
- [ ] `05_wave1_plan/_outputs.md`
- [ ] Updated trackers

### Completion Criteria
- Phasing strategy clearly justifies 3-wave approach with funding alignment
- Wave 1 has 10-12 fully specified initiatives with all detail fields populated
- Every initiative has a specific, realistic funding source identified
- Dependencies between initiatives are explicit
- Cost estimates reference benchmarks from research files
- Total Wave 1 cost is realistic for Progressa context
================================================================================


================================================================================
## Task 06: Waves 2-3 Plans and Dependency Map
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted
- ALL outputs MUST be Markdown (.md) format

### Environment
- Results path: `04-roadmap-D7/build/D7/`
- This task folder: `04-roadmap-D7/build/D7/06_waves23_dependencies/`

### Prerequisites
Read these files first:
- `04-roadmap-D7/build/D7/_tracker/workflow_state.md`
- `04-roadmap-D7/build/D7/05_wave1_plan/D7-S05-phasing-wave1.md`
- `04-roadmap-D7/build/D7/01_context_loading/task_01_data_funding_landscape.md`
- `04-roadmap-D7/build/D7/01_context_loading/task_01_data_benchmarks.md`

### Actions (EXECUTE ALL IN ORDER)
1. Read tracker and all prerequisite files
2. Create task folder: `06_waves23_dependencies/`
3. Write **Section 4.3: Wave 2 Plan (2027-2029)** — "Exchange, Digitize, Scale" (summary level):
   - Initiative-level descriptions for each Wave 2 initiative (W2-01 through W2-NN)
   - Dependencies on Wave 1 outcomes and cross-sectoral dependencies
   - Indicative costs per initiative
   - Funding source mapping (RDIP, Global Fund next cycle, GAVI, government budget)
   - Expected initiatives: HIE deployment, EHR pilot and scale, e-NHIS expansion, EIR transition, LIS deployment, electronic IDSR, FHIR adoption
4. Write **Section 4.4: Wave 3 Plan (2030-2033)** — "Analyze, Optimize, Sustain" (summary level):
   - Initiative descriptions, dependencies, indicative costs
   - Focus: Full coverage, advanced analytics, sustainability, health data warehouse, cross-border surveillance
5. Write **Section 4.5: Visual Roadmap** — Describe a Gantt-chart-style timeline in markdown table format:
   - All initiatives across 3 waves with start/end dates
   - Color-coding by domain (describe in legend)
   - Funding program alignment bars
   - Key milestones marked
6. Write **Section 4.6: Dependency Map** — Critical path analysis:
   - Which initiatives must complete before others
   - Cross-sectoral dependencies (RDIP, MoDE, Immigration)
   - Risk impact if cross-sectoral dependencies delayed
   - Fallback plans
7. Save as `D7-S06-waves23-dependencies.md`
8. Create README, _inputs, _outputs
9. Update tracker files

### Deliverables
- [ ] `06_waves23_dependencies/D7-S06-waves23-dependencies.md`
- [ ] `06_waves23_dependencies/README.md`
- [ ] `06_waves23_dependencies/_inputs.md`
- [ ] `06_waves23_dependencies/_outputs.md`
- [ ] Updated trackers

### Completion Criteria
- Wave 2 has 8-10 initiatives with summary details and cost estimates
- Wave 3 has 6-8 initiatives at higher level
- Visual roadmap covers all 3 waves in a readable timeline format
- Dependency map clearly shows critical path and cross-sectoral risks
- Fallback plans exist for major external dependencies
================================================================================


================================================================================
## Task 07: Investment Requirements
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted
- ALL outputs MUST be Markdown (.md) format

### Environment
- Results path: `04-roadmap-D7/build/D7/`
- This task folder: `04-roadmap-D7/build/D7/07_investment/`

### Prerequisites
Read these files first:
- `04-roadmap-D7/build/D7/_tracker/workflow_state.md`
- `04-roadmap-D7/build/D7/05_wave1_plan/D7-S05-phasing-wave1.md`
- `04-roadmap-D7/build/D7/06_waves23_dependencies/D7-S06-waves23-dependencies.md`
- `04-roadmap-D7/build/D7/01_context_loading/task_01_data_funding_landscape.md`
- `04-roadmap-D7/build/D7/01_context_loading/task_01_data_benchmarks.md`

### Actions (EXECUTE ALL IN ORDER)
1. Read tracker and all prerequisite files
2. Create task folder: `07_investment/`
3. Write **Section 5: Investment Requirements**:
   - 5.1 Cost Estimation Methodology (basis, comparables, caveats)
   - 5.2 Investment Summary by Wave (CAPEX, OPEX/year, Total per wave — table format)
   - 5.3 Investment by Domain (Governance, Data, Applications, Technology, Integration, HR/Capacity, Operations)
   - 5.4 Funding Source Mapping (each investment line → specific program: EHSSP residual, RDIP, Global Fund, GAVI, WHO, government, new donors)
   - 5.5 Sustainability Financial Model:
     - Transition from donor-funded to government recurrent budget
     - Target: MoH digital health budget line at 1-2% of health expenditure by 2028
     - Co-financing strategy: donors fund CAPEX, government absorbs OPEX progressively
     - Exit/handover plans for donor-funded initiatives
   - Identify funding gaps requiring resource mobilization
4. Ensure cost estimates are internally consistent with Wave 1 initiative costs from Task 05 and Wave 2-3 from Task 06
5. Save as `D7-S07-investment.md`
6. Create README, _inputs, _outputs
7. Update tracker files

### Deliverables
- [ ] `07_investment/D7-S07-investment.md`
- [ ] `07_investment/README.md`
- [ ] `07_investment/_inputs.md`
- [ ] `07_investment/_outputs.md`
- [ ] Updated trackers

### Completion Criteria
- Investment summary totals are consistent across all breakdowns (by wave, by domain)
- Every cost line has a methodology note (benchmark source or assumption)
- Funding source mapping covers all investment lines with no unaccounted gaps
- Sustainability model shows a credible path from 100% donor-funded to majority government-funded
- Grand total is realistic for Progressa context (reference: EHSSP was about USD 100–150 million total)
================================================================================


================================================================================
## Task 08: Organizational Structure and Governance
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted
- ALL outputs MUST be Markdown (.md) format

### Environment
- Results path: `04-roadmap-D7/build/D7/`
- This task folder: `04-roadmap-D7/build/D7/08_governance_org/`

### Prerequisites
Read these files first:
- `04-roadmap-D7/build/D7/_tracker/workflow_state.md`
- `04-roadmap-D7/build/D7/01_context_loading/task_01_doc_d6_target_summary.md` (governance sections)
- `04-roadmap-D7/build/D7/01_context_loading/task_01_doc_asis_baseline.md` (organizational baseline)
- `04-roadmap-D7/build/D7/05_wave1_plan/D7-S05-phasing-wave1.md` (governance initiatives)

Also search Project Knowledge for: PDGA EA Framework governance model, EA Board structure

### Actions (EXECUTE ALL IN ORDER)
1. Read tracker and all prerequisite files
2. Create task folder: `08_governance_org/`
3. Write **Section 6: Organizational Structure and Governance**:
   - 6.1 AS-IS Organizational Structure for Digital Health (fragmented teams, ad-hoc decision-making)
   - 6.2 TO-BE Organizational Structure:
     - NDHSC: composition, TORs, cadence, decision authority
     - Digital Health & Data Directorate: organogram, key positions, reporting lines
     - Technical Working Groups: Architecture & HIE TWG, Data Standards & Governance TWG, Implementation & Capacity TWG
     - Ministry EA Focal Point role
   - 6.3 Federated Custodianship Model:
     - System ownership/governance matrix (DHIS2, eCRVS, e-NHIS, SPT/EIR, A-LIS, IDSR)
     - Link to whole-of-government EA governance (EA Board, DTSC)
     - MoDE/PDGA as national EA custodian vs MoH as sector custodian
   - 6.4 Staffing Plan (per research evidence from MoH-current.md):
     - National level: 15-20 positions with specific roles
     - Regional level: 1 HIS/digital focal person per region (7)
     - Facility level: IT officers for hospitals, data focal persons
     - Phased recruitment timeline aligned with waves
   - 6.5 Policy Support Requirements (5 key policies/amendments)
4. Save as `D7-S08-governance-org.md`
5. Create README, _inputs, _outputs
6. Update tracker files

### Deliverables
- [ ] `08_governance_org/D7-S08-governance-org.md`
- [ ] `08_governance_org/README.md`
- [ ] `08_governance_org/_inputs.md`
- [ ] `08_governance_org/_outputs.md`
- [ ] Updated trackers

### Completion Criteria
- AS-IS and TO-BE organizational structures are clearly contrasted
- NDHSC has full specification (composition, TORs, authority)
- Federated custodianship model links sector to national governance
- Staffing plan has specific numbers, roles, and phased timeline
- All 5 policy requirements are identified with responsible bodies
================================================================================


================================================================================
## Task 09: Capacity Building and Risk Management
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted
- ALL outputs MUST be Markdown (.md) format

### Environment
- Results path: `04-roadmap-D7/build/D7/`
- This task folder: `04-roadmap-D7/build/D7/09_capacity_risk/`

### Prerequisites
Read these files first:
- `04-roadmap-D7/build/D7/_tracker/workflow_state.md`
- `04-roadmap-D7/build/D7/08_governance_org/D7-S08-governance-org.md` (staffing plan)
- `04-roadmap-D7/build/D7/05_wave1_plan/D7-S05-phasing-wave1.md` (initiative risks)
- `04-roadmap-D7/build/D7/06_waves23_dependencies/D7-S06-waves23-dependencies.md` (dependency risks)
- `04-roadmap-D7/build/D7/01_context_loading/task_01_data_benchmarks.md` (training benchmarks)

### Actions (EXECUTE ALL IN ORDER)
1. Read tracker and all prerequisite files
2. Create task folder: `09_capacity_risk/`
3. Write **Section 7: Capacity Building Roadmap**:
   - 7.1 Current Capacity Assessment
   - 7.2 Capacity Building Strategy (short/medium/long-term)
   - 7.3 Training Plan by System (DHIS2, HIE/OpenHIM, MPI/OpenCR, EHR/OpenMRS, LIS, data governance, info security)
   - Reference HISP regional node Academies, MSc Health Informatics programs (KNUST, UGhana), train-the-trainer models
   - Use specific training benchmarks (20-40 hours per staff for EHR, 1:10-15 IT support ratio)
4. Write **Section 8: Risk Management**:
   - 8.1 Risk Register — for each of 10+ risks: ID, description, category, likelihood, impact, overall rating, mitigation, owner, contingency
   - Address ALL 10 critical risks from the prompt + any additional identified
   - 8.2 Risk Response Strategy: Accept/Mitigate/Transfer/Avoid per risk, monitoring indicators, escalation triggers
5. Save as `D7-S09-capacity-risk.md`
6. Create README, _inputs, _outputs
7. Update tracker files

### Deliverables
- [ ] `09_capacity_risk/D7-S09-capacity-risk.md`
- [ ] `09_capacity_risk/README.md`
- [ ] `09_capacity_risk/_inputs.md`
- [ ] `09_capacity_risk/_outputs.md`
- [ ] Updated trackers

### Completion Criteria
- Capacity building covers all 3 time horizons with specific programs
- Training plan has hours/duration per system per role
- Risk register has 10+ risks fully specified
- Each risk has a concrete mitigation (not generic)
- Risk owners are identified (specific bodies, not "project team")
================================================================================


================================================================================
## Task 10: M&E Framework and Transition Architecture
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted
- ALL outputs MUST be Markdown (.md) format

### Environment
- Results path: `04-roadmap-D7/build/D7/`
- This task folder: `04-roadmap-D7/build/D7/10_me_transition/`

### Prerequisites
Read these files first:
- `04-roadmap-D7/build/D7/_tracker/workflow_state.md`
- `04-roadmap-D7/build/D7/05_wave1_plan/D7-S05-phasing-wave1.md`
- `04-roadmap-D7/build/D7/06_waves23_dependencies/D7-S06-waves23-dependencies.md`
- `04-roadmap-D7/build/D7/01_context_loading/task_01_doc_d6_target_summary.md`
- `04-roadmap-D7/build/D7/01_context_loading/task_01_doc_asis_baseline.md`

### Actions (EXECUTE ALL IN ORDER)
1. Read tracker and all prerequisite files
2. Create task folder: `10_me_transition/`
3. Write **Section 9: Monitoring and Evaluation Framework**:
   - 9.1 Key Performance Indicators — table with baseline (2025), Wave 1 target (2026), Wave 2 target (2029), Wave 3 target (2033)
   - Cover all KPIs from prompt: EA maturity, HIE integrations, digital clinical records facilities, NHIS beneficiaries, surveillance coverage, DHIS2 timeliness, Health ID coverage, digital health budget %
   - 9.2 Review Cadence: quarterly NDHSC, annual EA maturity assessment, 2-3 year major revision
4. Write **Section 10: Transition Architecture**:
   - 10.1 Intermediate Architecture States — describe architecture at end of each wave:
     - End of Wave 1 (2026): what's operational, what's integrated, what's not yet
     - End of Wave 2 (2029): expanded architecture state
     - End of Wave 3 (2033): target D6 architecture substantially realized
   - 10.2 Architecture Transition Diagrams — describe in markdown:
     - For each state: systems operational (green), being implemented (amber), planned (gray)
     - Integration flows: live vs planned
5. Save as `D7-S10-me-transition.md`
6. Create README, _inputs, _outputs
7. Update tracker files

### Deliverables
- [ ] `10_me_transition/D7-S10-me-transition.md`
- [ ] `10_me_transition/README.md`
- [ ] `10_me_transition/_inputs.md`
- [ ] `10_me_transition/_outputs.md`
- [ ] Updated trackers

### Completion Criteria
- KPI table has all 8+ indicators with baselines and 3 wave targets
- Baselines are consistent with AS-IS data from Task 01
- Wave targets are consistent with initiative plans from Tasks 05-06
- Transition architecture describes 3 intermediate states with specificity
- Transition diagrams are described in sufficient detail for later rendering
================================================================================


================================================================================
## Task 11: Executive Summary, Front Matter, and Appendices
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted
- ALL outputs MUST be Markdown (.md) format

### Environment
- Results path: `04-roadmap-D7/build/D7/`
- This task folder: `04-roadmap-D7/build/D7/11_frontmatter_appendices/`

### Prerequisites
Read these files first:
- `04-roadmap-D7/build/D7/_tracker/workflow_state.md`
- ALL section outputs from Tasks 02-10 (D7-S02 through D7-S10)

### Actions (EXECUTE ALL IN ORDER)
1. Read tracker and ALL section outputs
2. Create task folder: `11_frontmatter_appendices/`
3. Write **Executive Summary** (3-4 pages):
   - Roadmap overview and rationale
   - Total investment estimate (from Task 07)
   - Key milestones by wave
   - Critical dependencies (cross-sectoral)
   - Governance requirements
   - Call to action
4. Write **Front Matter**:
   - Document control (version, date, authors, reviewers)
   - Table of contents (section listing with page reference placeholders)
   - List of abbreviations
5. Write **Appendices**:
   - A: Detailed Gap Analysis Matrix (consolidate from Tasks 02-03)
   - B: Initiative Catalog (consolidate from Tasks 05-06 — all initiatives across 3 waves)
   - C: Dependency Matrix (initiative-to-initiative and cross-sectoral)
   - D: Cost Estimation Basis and Assumptions (from Task 07)
   - E: Risk Register full detail (from Task 09)
   - F: RACI Matrix for Roadmap Governance
   - G: Glossary
6. Save as `D7-S11-frontmatter-appendices.md`
7. Create README, _inputs, _outputs
8. Update tracker files

### Deliverables
- [ ] `11_frontmatter_appendices/D7-S11-frontmatter-appendices.md`
- [ ] `11_frontmatter_appendices/README.md`
- [ ] `11_frontmatter_appendices/_inputs.md`
- [ ] `11_frontmatter_appendices/_outputs.md`
- [ ] Updated trackers

### Completion Criteria
- Executive Summary is compelling, concise (3-4 pages), with specific numbers
- Investment total in Executive Summary matches Section 5 totals
- All 7 appendices have substantive content
- Abbreviations list is comprehensive
- RACI matrix covers all governance bodies and key decisions
================================================================================


================================================================================
## Task 12: Consolidation and Review
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted
- ALL outputs MUST be Markdown (.md) format

### Environment
- Results path: `04-roadmap-D7/build/D7/`
- This task folder: `04-roadmap-D7/build/D7/12_consolidation/`

### Prerequisites
Read these files first:
- `04-roadmap-D7/build/D7/_tracker/workflow_state.md`
- ALL section outputs from Tasks 02-11

### Actions (EXECUTE ALL IN ORDER)
1. Read tracker and ALL section outputs (D7-S02 through D7-S11)
2. Create task folder: `12_consolidation/`
3. **Consolidate** all sections into a single markdown file in correct document order:
   - Front matter (from S11)
   - Executive Summary (from S11)
   - Section 1-2.1 (from S02)
   - Section 2.2 (from S03)
   - Section 3 (from S04)
   - Section 4.1-4.2 (from S05)
   - Section 4.3-4.6 (from S06)
   - Section 5 (from S07)
   - Section 6 (from S08)
   - Sections 7-8 (from S09)
   - Sections 9-10 (from S10)
   - Appendices (from S11)
4. **Cross-reference check**: Verify consistency across sections:
   - Investment totals match between Executive Summary, Section 5, and Appendix D
   - Initiative IDs are consistent (W1-01 through W3-NN) across all references
   - KPI baselines match AS-IS data; targets match initiative plans
   - Timeline/phasing is consistent
   - No contradictions between sections
5. Create `task_12_doc_review_notes.md` documenting any inconsistencies found and corrections made
6. Save consolidated document as `D7-MoH-EA-Implementation-Roadmap-v1.0.md`
7. Create README, _inputs, _outputs
8. Update tracker files

### Deliverables
- [ ] `12_consolidation/D7-MoH-EA-Implementation-Roadmap-v1.0.md`
- [ ] `12_consolidation/task_12_doc_review_notes.md`
- [ ] `12_consolidation/README.md`
- [ ] `12_consolidation/_inputs.md`
- [ ] `12_consolidation/_outputs.md`
- [ ] Updated trackers

### Completion Criteria
- Single consolidated markdown file contains complete D7 document
- Review notes document all inconsistencies checked and corrections made
- Document flows logically from executive summary through appendices
- All cross-references are consistent
- Document is ready for DOCX generation
================================================================================


================================================================================
## Task 13: DOCX Generation
================================================================================

### EXECUTION MODE
🟢 DIRECT EXECUTION - All permissions granted

### Environment
- Results path: `04-roadmap-D7/build/D7/`
- This task folder: `04-roadmap-D7/build/D7/13_docx_generation/`

### Prerequisites
Read these files first:
- `04-roadmap-D7/build/D7/_tracker/workflow_state.md`
- `04-roadmap-D7/build/D7/12_consolidation/D7-MoH-EA-Implementation-Roadmap-v1.0.md`

Also read the DOCX skill: `/mnt/skills/public/docx/SKILL.md` (for professional DOCX formatting guidance)

Additionally, check the D6 DOCX for formatting reference: `03-target-architecture-D6/build/D6/D6-MoH-Future-State-Architecture-v1.0.docx`

### Actions (EXECUTE ALL IN ORDER)
1. Read tracker and consolidated markdown file
2. Create task folder: `13_docx_generation/`
3. Read the DOCX skill file for formatting best practices
4. Generate professional DOCX document from the consolidated markdown:
   - Cover page: "Deliverable D7: EA Implementation Roadmap — Ministry of Health"
   - Proper heading styles (Heading 1-4)
   - Table formatting with consistent styling
   - Table of contents (auto-generated if possible)
   - Header/footer with document title and page numbers
   - Professional color scheme consistent with D6 document
   - Proper section breaks
5. Save DOCX as `D7-MoH-EA-Implementation-Roadmap-v1.0.docx` in the D7 root folder
6. Also copy the final markdown to D7 root: `D7-MoH-EA-Implementation-Roadmap-v1.0.md`
7. Create README, _inputs, _outputs
8. Update tracker files — mark project as COMPLETED

### Deliverables
- [ ] `04-roadmap-D7/build/D7/D7-MoH-EA-Implementation-Roadmap-v1.0.docx`
- [ ] `04-roadmap-D7/build/D7/D7-MoH-EA-Implementation-Roadmap-v1.0.md`
- [ ] `13_docx_generation/README.md`
- [ ] `13_docx_generation/_inputs.md`
- [ ] `13_docx_generation/_outputs.md`
- [ ] Updated trackers (status: COMPLETED)

### Completion Criteria
- DOCX file is professionally formatted with cover page, TOC, headers/footers
- Formatting is consistent with D6 DOCX style
- All tables render correctly
- Document is ready for stakeholder review
- Tracker shows project COMPLETED
================================================================================

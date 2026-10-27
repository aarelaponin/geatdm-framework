# PROMPT: D7 — EA Implementation Roadmap for Ministry of Health

## ROLE AND OBJECTIVE

You are the ITU Lead Enterprise Architect developing Deliverable D7: **EA Implementation Roadmap** for Progressa's Ministry of Health (MoH). This deliverable is part of the Progressa Enterprise Architecture Initiative under World Bank contract [contract reference].

Your task is to produce a comprehensive, actionable, multi-year implementation roadmap that bridges the gap between the current state (D5) and the future state (D6), following the GEATDM method's PLAN phase.

---

## CONTRACT REQUIREMENTS FOR D7

Per the ITU-PDGA agreement, D7 must deliver:

**EA Roadmap** — Map discrepancies between current and future states; Identify potential improvements and interventions; Develop a strategic plan for transitioning; Define governance frameworks and organizational structures; Visual representation of architecture.

**Required content:**
- Comprehensive gap analysis between AS-IS and TO-BE states
- Opportunities and solutions identification
- Strategic transition plan with:
  - Phased implementation approach
  - Milestones and timelines
  - Dependencies mapping
  - Required capabilities and platforms
  - Investment requirements
  - Risk mitigation strategies
- EA Governance Approach documentation
- Governance Model specification
- Enterprise Architecture Core EA Diagram
- Visual representation of architecture transitions
- Organizational structure recommendations for federated custodianship
- Policy support requirements

**Additional requirements from contract:**
- One gap analysis for **generic components** (cross-sectoral infrastructure MoH depends on)
- One gap analysis for **sector-specific components** (health domain)
- "As-is" and "to-be" organizational structure for federated custodianship, investment and policy support

---

## RELATIONSHIP TO D6

D7 directly depends on and operationalizes D6 (Future State "To-Be" Architecture). While D6 defines WHAT the target state looks like, D7 defines HOW and WHEN to get there.

**D6 provides:**
- Target Business Architecture (governance, operating model, capability map)
- Target Application Portfolio (HIE, MPI, EHR, EIR, LIS, e-NHIS, DHIS2 enhancements, IDSR modernization)
- Target Data Architecture (master data, governance, analytics, privacy)
- Target Integration Architecture (OpenHIE, FHIR, priority flows)
- Target Technology Architecture (sovereign cloud, connectivity, security)

**D7 must address:**
- Gap analysis: what's missing to get from AS-IS to each TO-BE component
- Sequencing: what must come first (dependencies, prerequisites, quick wins)
- Phasing: realistic multi-year implementation waves
- Costing: indicative investment requirements per phase
- Risks: what can go wrong and how to mitigate
- Governance: who decides, who implements, who funds
- Sustainability: how this survives beyond project funding

---

## STRATEGIC ALIGNMENT AND FUNDING LANDSCAPE

The roadmap must be anchored to real funding programs and timelines:

### Active Funding Programs

| Program | Amount | Period | Digital Health Relevance |
|---------|--------|--------|--------------------------|
| **EHSSP** (World Bank/IDA) | about USD 100–150 million total | 2020-Aug 2025 (closing soon) | NHIS digitalization, eCRVS, eLMIS, DHIS2 interoperability, facility satellite connectivity, devices, training |
| **RDIP/DTFA** (World Bank/IDA) | USD 50M for Progressa | Five-year | Broadband, data center/cloud, digital ID, interoperability platform, digital public services |
| **Global Fund** | ~USD 40M | 2024-2027 | eLMIS software, lab networks, surveillance, HIV/TB/malaria programs |
| **GAVI** | Varies by cycle | Ongoing | SPT/immunization registry, cold chain, data quality, potential EIR transition |
| **WHO CCS** | Framework (not direct financing) | Five-year | Digital health capacity, data and technology strengthening |
| **HISP regional node** | TA funded via various donors | Ongoing | DHIS2 capacity building, system configuration, regional Academies |

### Key Funding Transitions
- **EHSSP closes Aug 2025** — digital activities funded under EHSSP (NHIS, eCRVS devices, eLMIS hardware, connectivity) must transition to either RDIP or government budget
- **RDIP** is the primary vehicle for infrastructure (broadband replacing satellite, sovereign cloud, digital ID alignment)
- **Global Fund 2024-2027** covers eLMIS software and lab/surveillance — next grant cycle will be critical for continuity
- **GAVI's next strategic period** will determine SPT→EIR transition funding

### Budget Reality
- MoH has no dedicated digital health budget line — all systems are donor-funded
- WHO recommends 1-3% of health budget for digital health operations
- Creating a government recurrent budget line is a prerequisite for sustainability
- Each roadmap initiative must identify a realistic funding source

---

## CURRENT STATE SUMMARY (for gap analysis baseline)

### System Status Matrix

| System | Maturity | Integration | Coverage | Key Gaps |
|--------|----------|-------------|----------|----------|
| DHIS2 | Operational (since 2010) | Limited APIs used | National aggregate | Incomplete reporting, limited Tracker, no advanced analytics |
| eCRVS/CIVIS | Operational | Planned integration (not live) | ~50% population, ~1M records | Separate NIN from Immigration, no MPI, eCRVS-NHIS not operational |
| e-NHIS | Operational | Minimal | 15,000–20,000 of 60,000 target; about 70 facilities | Manual enrollment, limited claims digitization, ~30% of target |
| SPT (Vaxa) | Operational | DHIS2 aggregate only | All ~90 facilities, 350,000–400,000 children | Scanning delay, no real-time decision support, no FHIR |
| A-LIS | Early stage | None | Guidelines only | Minimal adoption, weak DHIS2 integration |
| IDSR | Partially electronic | DHIS2 aggregate | ~90% paper-based | No case-based electronic, no EBS/CBS, no automated notification |
| eLMIS | Pilot | GF software + EHSSP hardware | ~50 facilities pilot | Not yet full rollout |
| ProgressaPay | Operational (cross-govt) | Point-to-point | Limited health use | Only operational cross-ministry integration in Progressa |

### Infrastructure Baseline
- Satellite connectivity to all facilities (EHSSP-funded) — expensive, limited bandwidth
- No sovereign data center (RDIP planned)
- ~60% electricity access; power unreliable in rural areas
- Single submarine cable — no redundancy
- Limited IT workforce: insufficient for maintaining current systems

### Organizational Baseline
- No Digital Health Directorate
- No National Digital Health Steering Committee
- No health data governance framework
- No data protection law
- No eHealth strategy document

---

## INPUT MATERIALS AND REFERENCES

### Files in the project folder:

1. **`_as-is/ea-findings-BDAT-v3.docx`** — Comprehensive AS-IS assessment. PRIMARY source for gap identification.

2. **`_to-be/D6/`** — D6 Future State Architecture document(s). PRIMARY source for target state definition. Read ALL D6 sections before writing the roadmap.

3. **`_ehealth/e-health-ref-arch-*.md`** — eHealth Reference Architecture, especially:
   - Ch7: Implementation Maturity Model (Level 1→4 progression — use as phasing guide)

4. **`_ext-research/`** — Five research files with implementation evidence:
   - `research-on-patterns.md` — Timeline/cost benchmarks: 18-30 months for minimal HIE, 3-5 years for stable multi-system use
   - `ehr-practices.md` — EHR rollout: 3-5 year program for 30-50 facilities; IT support ratio 1:10-15 facilities; 20-40 hours training per staff
   - `EHSSP...md` — Funding program details, timelines, digital health components, disbursement patterns
   - `MoH-current.md` — Governance models (Rwanda, Tanzania, Kenya, Ethiopia), sustainability financing, capacity building programs, staffing models (10-20 national team), data protection interim measures
   - `MoH-sectors.md` — SPT→EIR transition (3-5 years phased), LIS phasing (reference labs first), IDSR modernization patterns, Africa CDC EBS framework

5. **`_cloud/cloud-plan.docx`** — Cloud strategy timeline and phasing

### Framework References (in GEATDM-Method-Repository/):

6. **`01-Toolkit/GEATDM-WP6-T61-Toolkit-v1.0.md`** — PLAN phase tools:
   - TK-16: Implementation Roadmap Template
   - TK-17: Business Case Template
   - TK-18: Phase Definition Template
   - TK-19: Risk Register Template
   - TK-20: Resource Estimation Template

### Project Knowledge (PK):
7. **PAERA Framework** — Organization classification and reference models
8. **PDGA EA Framework** — Phase 4: Gap Analysis & Roadmap methodology
9. **Contract** — Deliverable specifications and outcomes

---

## DOCUMENT STRUCTURE

### Front Matter
- Cover page: "Deliverable D7: EA Implementation Roadmap — Ministry of Health"
- Document control (version, date, authors, reviewers, approval)
- Table of contents
- Executive summary (3-4 pages: roadmap overview, total investment estimate, key milestones, critical dependencies, governance requirements)
- List of abbreviations

### 1. Introduction
- 1.1 Purpose and Scope
- 1.2 Relationship to D5 (AS-IS), D6 (TO-BE), and Other Deliverables
- 1.3 Methodology (GEATDM PLAN phase, TOGAF ADM Phase E-F equivalent)
- 1.4 Roadmap Horizon: 2025-2033 (3 implementation waves)
- 1.5 How to Read This Document

### 2. Gap Analysis

**Structure the gap analysis in two tiers per the contract requirement:**

#### 2.1 Generic/Cross-Sectoral Component Gaps
These are gaps in national infrastructure that MoH depends on but cannot solve alone:

| Gap Area | AS-IS | TO-BE | Gap Description | Dependency Owner |
|----------|-------|-------|-----------------|------------------|
| Sovereign cloud/data center | None | G-Cloud hub-and-spoke | No hosting for health systems | MoDE/PDGA via RDIP |
| Broadband connectivity | Satellite only | Terrestrial + satellite backup | Limited bandwidth, high cost | MoDE via RDIP |
| National digital ID | Separate eCRVS/Immigration NIDs | Unified or interoperable ID | No single citizen identifier | MoDE/Immigration |
| Data protection law | None | National DPA + authority | No legal framework for health data | MoJ/Parliament |
| Interoperability platform | ProgressaPay only | National service bus / X-Road type | No government-wide integration layer | MoDE/PDGA via RDIP |
| Government cloud policy | Policy exists | Operational cloud services | Policy but no infrastructure | MoDE/PDGA |

For each gap: describe the current state, the required target state, the gap, who owns resolution, and the implications for MoH if the gap persists.

#### 2.2 Sector-Specific (Health) Component Gaps
These are gaps within MoH's domain that MoH must resolve:

Organize by BDAT domain:

**Business Architecture Gaps:**
- No digital health governance structure → NDHSC + Digital Health Directorate + TWGs
- No eHealth strategy → National Digital Health Strategy aligned with EA
- No health data governance framework → Data governance policy and stewardship roles
- No health data protection policy → Interim MoH policy pending national law
- Fragmented digital health project management → Unified project portfolio under EA governance

**Data Architecture Gaps:**
- No Master Patient Index → MPI/Client Registry (OpenCR-based)
- No unified patient identifier → Health ID leveraging eCRVS NIN
- No national health data dictionary → Standardized data definitions and code sets
- No terminology services → ICD-11, LOINC, SNOMED CT subset mappings
- No health data warehouse → Analytics platform beyond DHIS2 dashboards
- Incomplete data quality management → DQA framework and routine assessments

**Application Architecture Gaps:**
- No HIE/interoperability layer → OpenHIE stack (OpenHIM + registries)
- No national EHR → OpenMRS-based incremental rollout (30-40 facilities)
- e-NHIS at ~30% of target → Platform scaling with mobile enrollment and digital claims
- SPT not real-time → EIR transition (DHIS2 Tracker pilot)
- A-LIS early stage → LIS deployment in reference/regional labs
- IDSR ~90% paper → Electronic case-based surveillance + EBS/CBS
- eLMIS pilot → Full rollout to all facilities
- eCRVS not integrated → Integration with MPI, e-NHIS, EIR via HIE

**Technology Architecture Gaps:**
- No sovereign hosting → Cloud spoke for MoH on G-Cloud
- Satellite-only connectivity → Hybrid broadband/satellite
- No offline-first architecture standard → Design guidelines for unreliable connectivity
- Inadequate security → Encryption, RBAC, audit logging across all systems
- No disaster recovery → Backup and continuity planning

**Integration Architecture Gaps:**
- Systems operate as silos → HIE-mediated integration via OpenHIM
- No API standards → National health API design standards
- No FHIR adoption → FHIR Façade for existing systems, FHIR-native for new
- eCRVS-NHIS planned not live → Priority integration flow via HIE
- No LIS-surveillance integration → Automated disease notification
- No EMR-DHIS2 individual data flow → Tracker/FHIR-based exchange

### 3. Opportunities and Solutions

For each gap cluster, identify:
- **Solution approach**: Build, buy, configure, integrate, or leverage existing
- **Platform/product options**: Open-source preference with justification (OpenHIM, OpenCR, OpenMRS, DHIS2 Tracker, OpenELIS, etc.)
- **Country precedents**: Reference specific implementations from research (Tanzania HIE, Rwanda Mutuelle, Maldives DHIS2 EIR, Kenya OpenMRS, Ghana NHIS CLAIM-it, etc.)
- **Quick wins**: Low-effort, high-impact actions that can start immediately
- **Strategic investments**: Large initiatives requiring sustained funding and capacity

### 4. Implementation Roadmap

#### 4.1 Phasing Strategy

Three implementation waves aligned with funding cycles and infrastructure availability:

**Wave 1: Foundation (2025-2026)** — "Govern, Connect, Register"
- Focus: Governance establishment, infrastructure prerequisites, foundational registries
- Funding alignment: EHSSP transition, RDIP early deliverables, Global Fund current cycle
- Key outcomes: NDHSC operational, Digital Health Directorate established, MPI pilot, eCRVS-NHIS integration live, eLMIS fully rolled out, DHIS2 strengthened, interim data governance policy, broadband pilots at priority facilities

**Wave 2: Integration (2027-2029)** — "Exchange, Digitize, Scale"
- Focus: HIE establishment, EHR pilot and scale, e-NHIS expansion, EIR transition, LIS deployment
- Funding alignment: RDIP infrastructure available, Global Fund next cycle, GAVI next strategic period, government budget line for digital health
- Key outcomes: HIE operational with 3-5 priority flows, EHR in 15-20 facilities, e-NHIS at 50%+ target, DHIS2 Tracker EIR piloted in 2-3 regions, LIS in reference + regional labs, electronic case-based surveillance for priority diseases, FHIR interfaces for new systems

**Wave 3: Optimization (2030-2033)** — "Analyze, Optimize, Sustain"
- Focus: Full coverage, advanced analytics, sustainability, maturity
- Funding alignment: Government recurrent budget as primary, donor support for innovation
- Key outcomes: EHR in 30-40 facilities, e-NHIS universal coverage path, EIR replacing SPT nationally, full electronic IDSR + EBS, health data warehouse operational, cross-border surveillance, EA maturity 4.0+

#### 4.2 Wave 1 Detailed Plan (2025-2026)

For each initiative in Wave 1, provide:
- **Initiative name and ID** (e.g., W1-01: Establish Digital Health Governance)
- **Description**: What will be done
- **Prerequisites**: What must be in place before starting
- **Dependencies**: Other initiatives this depends on (within MoH and cross-sectoral)
- **Deliverables/outputs**: Concrete, measurable outcomes
- **Estimated duration**: In months
- **Resource requirements**: Staff (FTE), technical assistance, equipment
- **Indicative cost**: Range estimate (USD)
- **Funding source**: Which program/budget
- **Risks**: Key risks and mitigations
- **Success criteria**: How completion will be measured

Provide this detail for all Wave 1 initiatives. For Waves 2-3, provide initiative-level descriptions with dependencies and indicative costs (less detail, to be refined when Wave 1 outcomes are known).

#### 4.3 Wave 2 Plan (2027-2029) — Summary Level

#### 4.4 Wave 3 Plan (2030-2033) — Summary Level

#### 4.5 Visual Roadmap
- Gantt-chart-style timeline showing all initiatives across 3 waves
- Color-coded by domain (governance = blue, data = green, application = orange, technology = gray, integration = purple)
- Dependency arrows between initiatives
- Funding program alignment bars
- Key milestones marked

#### 4.6 Dependency Map
- Critical path: which initiatives must complete before others can start
- Cross-sectoral dependencies: what MoH needs from RDIP, MoDE, Immigration
- Risk: impact if cross-sectoral dependencies are delayed

### 5. Investment Requirements

#### 5.1 Cost Estimation Methodology
- Explain basis for estimates (country comparisons, vendor benchmarks, WHO guidance)
- Caveat: indicative estimates requiring validation through detailed costing studies

#### 5.2 Investment Summary by Wave

| Wave | CAPEX (USD) | OPEX/year (USD) | Total 2025-2033 (USD) |
|------|-------------|-----------------|------------------------|
| Wave 1 (2025-2026) | | | |
| Wave 2 (2027-2029) | | | |
| Wave 3 (2030-2033) | | | |
| **Total** | | | |

#### 5.3 Investment by Domain
- Governance and organizational change
- Data infrastructure (MPI, registries, data warehouse)
- Application systems (HIE, EHR, e-NHIS, EIR, LIS, IDSR)
- Technology infrastructure (cloud, connectivity, devices)
- Integration (HIE platform, API development, FHIR interfaces)
- Human resources and capacity building
- Ongoing operations (hosting, support, maintenance)

#### 5.4 Funding Source Mapping
- Map each investment line to realistic funding sources (EHSSP residual, RDIP, Global Fund, GAVI, WHO, government budget, potential new donors)
- Identify funding gaps that need to be addressed

#### 5.5 Sustainability Financial Model
- Transition from donor-funded to government recurrent budget
- Target: MoH digital health budget line at 1-2% of health expenditure by 2028
- Co-financing strategy: donor projects fund CAPEX, government absorbs OPEX progressively
- Exit/handover plans for each donor-funded initiative

### 6. Organizational Structure and Governance

#### 6.1 AS-IS Organizational Structure for Digital Health
- Current fragmented arrangement (HMIS team, eCRVS team, NHIS team, etc.)
- Current decision-making: ad-hoc, donor-driven

#### 6.2 TO-BE Organizational Structure
- **National Digital Health Steering Committee (NDHSC)**: composition, TORs, meeting cadence, decision authority
- **Digital Health & Data Directorate** (upgraded from HMIS team): organogram, key positions, reporting lines
- **Technical Working Groups**: Architecture & HIE TWG, Data Standards & Governance TWG, Implementation & Capacity TWG
- **Ministry EA Focal Point**: role within broader Progressa EA governance

#### 6.3 Federated Custodianship Model
- Who owns/governs each major system (DHIS2, eCRVS, e-NHIS, SPT/EIR, A-LIS, IDSR)
- How sector governance links to whole-of-government EA governance (EA Board, Digital Transformation Steering Committee)
- Role of MoDE/PDGA as national EA custodian vs. MoH as sector custodian

#### 6.4 Staffing Plan
Based on research evidence (MoH-current.md):
- **National level** (Digital Health Directorate): 15-20 positions
  - Director/Chief Architect (1)
  - HMIS/DHIS2 specialists (2-3)
  - Systems and integration engineers (2-3)
  - Data analysts/epidemiologists (2-3)
  - Support/helpdesk and training officers (2-3)
  - Information security focal point (1)
  - Project managers (2)
  - Administrative support (1-2)
- **Regional level**: 1 HIS/digital focal person per health region (7 regions)
- **Facility level**: IT officers for hospitals (1-2 per hospital), data focal persons for primary facilities
- Phased recruitment aligned with Wave 1-2 timelines

#### 6.5 Policy Support Requirements
- National Digital Health Strategy (to be developed, aligned with EA)
- Health Data Governance and Protection Policy (MoH-level, interim)
- Digital Health Investment and Interoperability Policy (donor alignment requirement)
- Amendment to Health Act for health information system mandates
- Advocacy for national Data Protection legislation

### 7. Capacity Building Roadmap

#### 7.1 Current Capacity Assessment
- Limited IT/HIS staff at all levels
- Dependency on external TA (HISP regional node, WHO, project consultants)
- No health informatics training pipeline in Progressa

#### 7.2 Capacity Building Strategy
- **Short-term (2025-2026)**: Core team formation, DHIS2 Academies via HISP regional node, targeted training for priority systems, super-user programs at facilities
- **Medium-term (2027-2029)**: Scholarships for MSc Health Informatics (KNUST Ghana, University of Ghana), train-the-trainer cascading, MoU with HISP regional node for sustained support
- **Long-term (2030-2033)**: Local training capacity, regional mentorship networks, continuous professional development program

#### 7.3 Training Plan by System
- DHIS2 (configuration, Tracker, analytics)
- HIE/OpenHIM (integration engineering)
- MPI/OpenCR (identity management)
- EHR/OpenMRS (clinical system administration)
- LIS (laboratory informatics)
- Data governance and quality
- Information security

### 8. Risk Management

#### 8.1 Risk Register
For each risk:
- Risk ID, Description, Category (technical/organizational/financial/political/external)
- Likelihood (High/Medium/Low), Impact (High/Medium/Low), Overall Rating
- Mitigation strategy, Risk owner, Contingency plan

**Critical risks to address:**
1. RDIP infrastructure delays → MoH cannot deploy cloud-dependent systems
2. Insufficient government budget allocation → systems decay when projects end
3. IT workforce attrition → trained staff leave for private sector/international organizations
4. Donor funding gaps between cycles → implementation stalls
5. Resistance to organizational change → governance structures not adopted
6. Data protection law delayed → health data sharing constrained
7. Connectivity/power unreliable → digital systems fail at facility level
8. Submarine cable outage → national internet disruption
9. Over-ambitious scope → resource spreading too thin
10. Vendor/platform lock-in → dependency on specific products/partners

#### 8.2 Risk Response Strategy
- Accept, Mitigate, Transfer, or Avoid for each risk
- Monitoring indicators and escalation triggers

### 9. Monitoring and Evaluation Framework

#### 9.1 Key Performance Indicators (KPIs)
Define measurable KPIs for each wave with baselines and targets:

| KPI | Baseline (2025) | Wave 1 Target (2026) | Wave 2 Target (2029) | Wave 3 Target (2033) |
|-----|-----------------|----------------------|----------------------|----------------------|
| EA maturity level | 2.19 | 2.5 | 3.5 | 4.1+ |
| Systems integrated via HIE | 0 | 2 | 5 | 8+ |
| Facilities with digital clinical records | 0 | 5 (pilot) | 20 | 40 |
| NHIS digital beneficiaries | 15,000–20,000 | 30,000 | 150,000 | 500,000+ |
| Electronic surveillance coverage | ~8% | 20% | 60% | 90% |
| DHIS2 reporting timeliness | ~70% | 85% | 90% | 95% |
| Patient records with Health ID | 0% | 10% | 40% | 70% |
| MoH digital health budget as % of health budget | 0% | 0.5% | 1% | 2% |

#### 9.2 Review Cadence
- Quarterly: NDHSC reviews roadmap progress
- Annually: EA maturity re-assessment, roadmap adjustment
- Every 2-3 years: Major roadmap revision aligned with D6 architecture review cycle

### 10. Transition Architecture

#### 10.1 Intermediate Architecture States
Describe the architecture at the end of each wave — what systems exist, what's integrated, what's not yet done. These are "stepping stones" from AS-IS to final TO-BE.

- **End of Wave 1 (2026)**: Governance in place, MPI pilot, eCRVS-NHIS live, eLMIS complete, DHIS2 strengthened, broadband in priority facilities, interim data governance
- **End of Wave 2 (2029)**: HIE operational, EHR in 20 facilities, e-NHIS scaled, EIR piloted, LIS in major labs, electronic IDSR for priority diseases, FHIR emerging
- **End of Wave 3 (2033)**: Full target architecture from D6 substantially realized

#### 10.2 Architecture Transition Diagrams
For each transition state, provide a simplified architecture diagram showing:
- What's operational (green)
- What's being implemented (amber)
- What's planned for next wave (gray)
- Integration flows that are live vs. planned

### Appendices
- A: Detailed Gap Analysis Matrix (system-by-system)
- B: Initiative Catalog (all initiatives across 3 waves with full details)
- C: Dependency Matrix (initiative-to-initiative and cross-sectoral)
- D: Cost Estimation Basis and Assumptions
- E: Risk Register (full detail)
- F: RACI Matrix for Roadmap Governance
- G: Glossary

---

## WRITING GUIDELINES

1. **Actionable, not aspirational**: Every roadmap item must have a realistic funding source, a responsible party, and a measurable outcome. Avoid vague statements like "improve health information systems" — instead specify "Deploy DHIS2 Tracker immunization eRegistry in two pilot regions by Q2 2028."

2. **Grounded in evidence**: Use implementation timelines, costs, and staffing models from the research files. When estimating, cite comparable country experiences (e.g., "Based on Tanzania's HIE deployment timeline of 18-24 months for minimal stack...").

3. **Conservative and phased**: This environment has limited capacity, infrastructure constraints, and uncertain funding continuity. The roadmap should be under-ambitious rather than over-ambitious. It is better to deliver 5 things well than to plan 20 and complete 2.

4. **Funding-realistic**: Every initiative must map to a plausible funding source. If no funding source exists, flag it as a gap requiring resource mobilization. Do not assume unlimited budgets.

5. **Dependencies explicit**: Make cross-sectoral dependencies (RDIP, MoDE, Immigration) crystal clear, with fallback plans if they are delayed. MoH should not be blocked entirely by external dependencies.

6. **Build on existing investments**: SPT works — evolve it. DHIS2 is established — extend it. EHSSP connectivity is in place — leverage it until RDIP broadband arrives. eCRVS has ~1M records — build MPI on it.

7. **Governance first**: The roadmap should front-load governance and organizational changes (NDHSC, Digital Health Directorate, policies) because everything else depends on having decision-making capacity.

8. **Sustainability thread**: Every section should address how the initiative will be sustained beyond initial project funding. The sustainability question should not be an afterthought appendix — it must be woven throughout.

---

## EXECUTION APPROACH

This is a large document (~70-90 pages). Produce it in sections:

1. **Session 1**: Front matter + Sections 1-2 (Introduction, Gap Analysis)
2. **Session 2**: Section 3 (Opportunities and Solutions)
3. **Session 3**: Section 4.1-4.2 (Phasing Strategy, Wave 1 Detailed Plan)
4. **Session 4**: Section 4.3-4.6 (Waves 2-3, Visual Roadmap, Dependencies)
5. **Session 5**: Section 5 (Investment Requirements)
6. **Session 6**: Section 6 (Organizational Structure and Governance)
7. **Session 7**: Sections 7-8 (Capacity Building, Risk Management)
8. **Session 8**: Sections 9-10 + Appendices (M&E, Transition Architecture, Appendices)
9. **Session 9**: Review, consolidation, and DOCX generation

**IMPORTANT**: At the start of each session, read the D6 output files first (from `_to-be/D6/`) and relevant AS-IS findings (from `_as-is/`), so the gap analysis and roadmap are precisely aligned with the documented current and target states. Also read the relevant research files for evidence to support timelines and costs.

---

## OUTPUT LOCATION

Save all outputs to: `04-roadmap-D7/build/D7/`

File naming convention: `D7-S{session}-{description}.md`
- Example: `D7-S1-introduction-gap-analysis.md`, `D7-S3-wave1-plan.md`, etc.
- Final consolidated: `D7-MoH-EA-Implementation-Roadmap-v1.0.md`
- Final DOCX: `D7-MoH-EA-Implementation-Roadmap-v1.0.docx`

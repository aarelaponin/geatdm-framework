# D7 — EA Implementation Roadmap: Ministry of Health, Progressa

## Front Matter

---

### Document Control

| Field | Detail |
|-------|--------|
| **Document Title** | EA Implementation Roadmap — Ministry of Health |
| **Deliverable Reference** | D7 |
| **Contract** | [contract reference] |
| **Version** | 1.0 (Draft for Stakeholder Validation) |
| **Date** | February 2026 |
| **Validity Period** | 2025–2033 |
| **Classification** | Internal — For Government and Development Partner Use |

**Prepared by:**

| Role | Name / Organisation |
|------|---------------------|
| Lead Architect | ITU Enterprise Architecture Initiative |
| Technical Review | ITU / RDIP Technical Team |
| Quality Assurance | ITU Project Management |

**Reviewed by:**

| Role | Organisation | Date |
|------|-------------|------|
| Permanent Secretary | Ministry of Health | Pending |
| Director, Planning & Information | Ministry of Health | Pending |
| Director General | PDGA / MoDE | Pending |
| RDIP Programme Coordinator | World Bank | Pending |
| Country Representative | WHO Progressa | Pending |

**Approval:**

| Authority | Name | Signature | Date |
|-----------|------|-----------|------|
| MoH Permanent Secretary | | | |
| PDGA Director General | | | |
| RDIP Programme Manager | | | |

**Revision History:**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 0.1 | January 2026 | Lead Architect | Initial draft — Sections 1–2 (Introduction, Gap Analysis) |
| 0.5 | February 2026 | Lead Architect | Sections 3–10 complete; internal review |
| 1.0 | February 2026 | Lead Architect | Full document with Executive Summary and Appendices; ready for stakeholder validation |
| 1.1 | Pending | Lead Architect | Post-validation revisions incorporating stakeholder feedback |
| 2.0 | Pending | Lead Architect | Final version approved by NDHSC |

---

### Table of Contents

| # | Section | Page |
|---|---------|------|
| | **Executive Summary** | iv |
| | Document Control | i |
| | Table of Contents | ii |
| | List of Abbreviations | iii |
| **1** | **Introduction** | 1 |
| 1.1 | Purpose and Scope | 1 |
| 1.2 | Relationship to Other Deliverables | 2 |
| 1.3 | Methodology | 3 |
| 1.4 | Roadmap Horizon and Wave Structure | 4 |
| 1.5 | How to Read This Document | 6 |
| **2** | **Gap Analysis** | 7 |
| 2.1 | Generic / Cross-Sectoral Component Gaps (GEN-01 to GEN-06) | 7 |
| 2.2 | Sector-Specific (Health) Component Gaps | 18 |
| 2.2.1 | Business Architecture Gaps (BUS-01 to BUS-05) | 18 |
| 2.2.2 | Data Architecture Gaps (DAT-01 to DAT-06) | 25 |
| 2.2.3 | Application Architecture Gaps (APP-01 to APP-09) | 32 |
| 2.2.4 | Technology Architecture Gaps (TEC-01 to TEC-06) | 45 |
| 2.2.5 | Integration Architecture Gaps (INT-01 to INT-07) | 53 |
| 2.2.6 | Sector-Specific Gap Summary | 62 |
| **3** | **Opportunities and Solutions** | 65 |
| 3.1 | Governance and Policy Solutions | 65 |
| 3.2 | Data and Registries Solutions | 72 |
| 3.3 | Clinical and Programme Systems Solutions | 78 |
| 3.4 | Infrastructure Solutions | 87 |
| 3.5 | Integration Solutions | 93 |
| 3.6 | Consolidated Solution Summary | 98 |
| **4** | **Phasing Strategy and Wave Plans** | 102 |
| 4.1 | Phasing Strategy | 102 |
| 4.2 | Wave 1 Detailed Plan (2025–2026) | 107 |
| 4.3 | Wave 2 Detailed Plan (2027–2029) | 130 |
| 4.4 | Wave 3 Detailed Plan (2030–2033) | 145 |
| 4.5 | Visual Roadmap Timeline | 155 |
| 4.6 | Dependency Map | 158 |
| **5** | **Investment Requirements** | 162 |
| 5.1 | Cost Estimation Methodology | 162 |
| 5.2 | Investment Summary by Wave | 166 |
| 5.3 | Investment by Domain | 172 |
| 5.4 | Funding Source Mapping | 176 |
| 5.5 | Sustainability Financial Model | 183 |
| **6** | **Organisational Structure and Governance** | 189 |
| 6.1 | AS-IS Organisational Structure | 189 |
| 6.2 | TO-BE Organisational Structure | 192 |
| 6.3 | Federated Data Custodianship Model | 202 |
| 6.4 | Staffing Plan and Recruitment Timeline | 207 |
| 6.5 | Enabling Policies | 212 |
| **7** | **Capacity Building Roadmap** | 216 |
| 7.1 | Current Capacity Assessment | 216 |
| 7.2 | Capacity Building Strategy | 220 |
| 7.3 | Training Plan by System | 227 |
| **8** | **Risk Management** | 238 |
| 8.1 | Risk Register | 238 |
| 8.2 | Risk Response Strategy | 254 |
| **9** | **Monitoring and Evaluation Framework** | 260 |
| 9.1 | Key Performance Indicators | 260 |
| 9.2 | Review Cadence | 264 |
| **10** | **Transition Architecture** | 268 |
| 10.1 | Intermediate Architecture States | 268 |
| 10.2 | System and Integration Status Matrix | 280 |
| | **Appendices** | |
| A | Detailed Gap Analysis Matrix | [A-1] |
| B | Initiative Catalog | [B-1] |
| C | Dependency Matrix | [C-1] |
| D | Cost Estimation Basis and Assumptions | [D-1] |
| E | Risk Register Full Detail | [E-1] |
| F | RACI Matrix for Roadmap Governance | [F-1] |
| G | Glossary | [G-1] |

---

### List of Abbreviations

| Abbreviation | Full Term |
|-------------|-----------|
| ADM | Architecture Development Method (TOGAF) |
| ADX | Aggregate Data Exchange |
| AfDB | African Development Bank |
| A-LIS | Automated Laboratory Information System |
| API | Application Programming Interface |
| ART | Antiretroviral Therapy |
| ATC | Anatomical Therapeutic Chemical (classification) |
| ATNA | Audit Trail and Node Authentication (IHE profile) |
| BDAT | Business, Data, Application, Technology |
| CBP | Central Bank of Progressa |
| CBS | Community-Based Surveillance |
| CERT | Computer Emergency Response Team |
| CHW | Community Health Worker |
| CI/CD | Continuous Integration / Continuous Deployment |
| CISSP | Certified Information Systems Security Professional |
| CIVIS | Civil registration information system (eCRVS platform) |
| Civitas | eCRVS vendor — Civitas Group |
| CPD | Continuing Professional Development |
| CRVS | Civil Registration and Vital Statistics |
| CSIRT | National Computer Security Incident Response Team |
| CSO | Civil Society Organisation |
| DAK | Digital Adaptation Kit (WHO) |
| DC | Data Centre |
| DD | Design Decision |
| DevOps | Development and Operations |
| DFID | Department for International Development (UK) |
| DHDD | Digital Health and Data Directorate |
| DHIS2 | District Health Information Software, version 2 |
| DMP | National Digital Master Plan |
| DR | Disaster Recovery |
| DSA | Data Sharing Agreement |
| DTFA | Digital Transformation and Fibre Access |
| DTSC | Digital Transformation Steering Committee |
| EA | Enterprise Architecture |
| EBS | Event-Based Surveillance |
| eCRVS | Electronic Civil Registration and Vital Statistics |
| EHR | Electronic Health Record |
| EHSSP | Essential Health Services Strengthening Project |
| EIR | Electronic Immunisation Registry |
| eLMIS | Electronic Logistics Management Information System |
| EMS | Event Management System (Africa CDC) |
| e-NHIS | Electronic National Health Insurance Scheme |
| EPI | Expanded Programme on Immunisation |
| FHIR | Fast Healthcare Interoperability Resources (HL7) |
| GAVI | Global Alliance for Vaccines and Immunisation |
| G-Cloud | Government Cloud |
| GEATDM | Generic EA Target Architecture Development Method |
| GF | Global Fund to Fight AIDS, Tuberculosis and Malaria |
| GIZ | Deutsche Gesellschaft für Internationale Zusammenarbeit |
| HAPI | Health API (FHIR Server) |
| HELINA | Health Informatics in Africa |
| HIE | Health Information Exchange |
| HIS | Health Information System |
| HISP | Health Information Systems Programme — regional node |
| HIV | Human Immunodeficiency Virus |
| HL7 | Health Level 7 (international standards body) |
| HMIS | Health Management Information System |
| HRMIS | Human Resource Management Information System |
| HSS | Health System Strengthening |
| IAM | Identity and Access Management |
| IBS | Indicator-Based Surveillance |
| ICD | International Classification of Diseases |
| ICHI | International Classification of Health Interventions |
| IDSR | Integrated Disease Surveillance and Response |
| IFMIS | Integrated Financial Management Information System |
| IHE | Integrating the Healthcare Enterprise |
| IP | Integration Principle |
| ITU | International Telecommunication Union |
| KNUST | Kwame Nkrumah University of Science and Technology |
| LIS | Laboratory Information System |
| LOINC | Logical Observation Identifiers Names and Codes |
| MCH | Maternal and Child Health |
| mCSD | Mobile Care Services Discovery (IHE profile) |
| M&E | Monitoring and Evaluation |
| MFA | Multi-Factor Authentication |
| MoDE | Ministry of Digital Economy |
| MoF | Ministry of Finance |
| MoH | Ministry of Health |
| MPI | Master Patient Index |
| MRN | Medical Record Number |
| MSc | Master of Science |
| MTEF | Medium-Term Expenditure Framework |
| mTLS | Mutual Transport Layer Security |
| NASCIO | National Association of State Chief Information Officers |
| NDHSC | National Digital Health Steering Committee |
| NFM | New Funding Model (Global Fund) |
| NHIA | National Health Insurance Authority |
| NHIS | National Health Insurance Scheme |
| NIN | National Identity Number |
| NMRI | National Medical Research Institute |
| NRL | National Reference Laboratory |
| NUC | National water and electricity utility |
| OAuth | Open Authorization |
| OCL | Open Concept Lab |
| OECD | Organisation for Economic Co-operation and Development |
| OpenCR | Open Client Registry |
| OpenELIS | Open Enterprise Laboratory Information System |
| OpenHIE | Open Health Information Exchange |
| OpenHIM | Open Health Information Mediator |
| OpenLMIS | Open Logistics Management Information System |
| OpenMRS | Open Medical Record System |
| PBoS | Progressa Bureau of Statistics |
| PDGA | Progressa Digital Government Authority |
| PDQm | Patient Demographics Query for Mobile (IHE profile) |
| PII | Personally Identifiable Information |
| PIXm | Patient Identifier Cross-referencing for Mobile (IHE profile) |
| PMO | Programme Management Office |
| PMU | Programme Management Unit |
| PR | Principal Recipient (Global Fund) |
| ProgTel | Progressa Telecommunications Company |
| PS | Permanent Secretary |
| QR | Quick Response (code) |
| R4 | Release 4 (FHIR) |
| RACI | Responsible, Accountable, Consulted, Informed |
| RDIP | Regional Digital Integration Project |
| REC | Regional Economic Community |
| REST | Representational State Transfer |
| RHDO | Regional Health Data Officer |
| RHO | Regional Health Organisation |
| RMNCH | Reproductive, Maternal, Newborn, and Child Health |
| RPO | Recovery Point Objective |
| RSSH | Resilient and Sustainable Systems for Health |
| RTO | Recovery Time Objective |
| SHR | Shared Health Record |
| SLA | Service Level Agreement |
| SMS | Short Message Service |
| SNOMED CT | Systematized Nomenclature of Medicine — Clinical Terms |
| SOC | Security Operations Centre |
| SOP | Series of Projects (RDIP) |
| SPT | Scanned paper tracking |
| SR | Sub-Recipient (Global Fund) |
| SSO | Single Sign-On |
| TA | Technical Assistance |
| TB | Tuberculosis |
| TOGAF | The Open Group Architecture Framework |
| ToR | Terms of Reference |
| ToT | Training of Trainers |
| TWG | Technical Working Group |
| UoP | University of Progressa |
| UPS | Uninterruptible Power Supply |
| USAID | United States Agency for International Development |
| USSD | Unstructured Supplementary Service Data |
| VLAN | Virtual Local Area Network |
| WAN | Wide Area Network |
| WB | World Bank |
| WHO | World Health Organization |

---

## Executive Summary

### A Roadmap for Digital Health Transformation

Progressa's Ministry of Health stands at a critical inflection point. After a decade of donor-funded digital health investments that produced eight independent, largely siloed information systems and a single automated data flow, the Ministry now has both the architectural blueprint and the implementation pathway to build an integrated, interoperable health information ecosystem.

This Enterprise Architecture Implementation Roadmap (D7) bridges the gap between the Ministry's current state — characterised by ~90% paper-based clinical records, Level 1 integration maturity, and fragmented governance across 10 organisational units — and the target state defined in D6: an OpenHIE-based health information exchange connecting clinical, insurance, surveillance, and supply chain systems through six priority integration flows, governed by a dedicated Digital Health and Data Directorate.

### The Scale of the Challenge

A comprehensive gap analysis across all architecture domains identified **38 gaps** between the current and target states: 6 cross-sectoral gaps dependent on national infrastructure programmes (primarily RDIP), and 32 sector-specific gaps within MoH's direct authority. Of the sector-specific gaps, **7 are rated Critical** — including the absence of a health information exchange, no electronic health records in public facilities, a Master Patient Index that does not exist, and insurance enrollment at only ~30% of target. An additional 18 gaps are rated High severity. The combined gap landscape reflects a transformation from a largely paper-based, donor-dependent, fragmented health information system to a digitally enabled, government-owned, interoperable ecosystem.

### Three Waves of Transformation

The roadmap organises implementation into three waves aligned with funding windows, dependency chains, and MoH's absorption capacity:

**Wave 1 — Govern, Connect, Register (2025–2026) | USD 1.8–3.0M**
Establishes the institutional and technical foundations. Delivers the National Digital Health Steering Committee and Digital Health and Data Directorate through Ministerial Order, deploys the Health Information Exchange (OpenHIM) and Master Patient Index (OpenCR) on interim hosting, operationalises the first HIE-mediated integration flow (birth registration → patient identity → insurance enrollment), strengthens DHIS2 with Tracker pilots for immunisation and surveillance, completes national eLMIS rollout, and bridges facility connectivity through the EHSSP funding cliff. Recruits the first 6 DHDD staff and 100+ orientation trainees. Eleven initiatives address the most urgent governance, platform, and transition requirements.

**Wave 2 — Digitise, Integrate, Scale (2027–2029) | USD 2.75–4.76M**
Deploys clinical systems at scale and activates the integration ecosystem. Pilots and scales the Electronic Health Record (OpenMRS) to 15–20 facilities for maternal health and HIV/ART, transitions the Electronic Immunisation Registry from SPT to DHIS2 Tracker nationally, rolls out electronic disease surveillance to all connected facilities, enhances e-NHIS with offline claims and mobile enrollment toward 60,000+ beneficiaries, activates 4–5 priority integration flows through the HIE, migrates all central systems to G-Cloud sovereign hosting, deploys Keycloak IAM with multi-factor authentication across all systems, and achieves full DHDD staffing (14 positions) with 7 Regional Health Data Officers. Ten initiatives deliver the core digital health ecosystem.

**Wave 3 — Optimise, Sustain, Innovate (2030–2033) | USD 1.65–2.94M**
Achieves integration maturity and transitions to government-sustained operations. Expands EHR to 30–40 facilities, retires SPT and SMS for Health legacy systems, activates all six priority integration flows at Level 3–4 maturity, deploys cross-system analytics and a health data warehouse, establishes event-based and community-based surveillance, achieves ≥50% government funding of digital health recurrent costs, and progressively transitions from donor-funded establishment to government-owned operations. Seven initiatives close the transformation cycle.

### Investment and Funding

The total indicative investment across all three waves is **USD 6.2–10.7 million** (midpoint USD 8.5M) over eight years (2025–2033), comprising 28 discrete initiatives plus a 10% programme management overhead. This investment breaks down as follows:

| Domain | Investment (USD) | Share |
|--------|-----------------|-------|
| Applications & Clinical Systems | 2.67–4.69M | 43% |
| Integration & Interoperability | 0.94–1.60M | 15% |
| HR & Capacity Building | 0.80–1.40M | 13% |
| Technology Infrastructure | 0.78–1.33M | 12% |
| Data & Registries | 0.54–0.96M | 9% |
| Governance & Policy | 0.47–0.77M | 8% |

The investment is proportionate — representing approximately 5–10% of the EHSSP programme scale (about USD 100–150 million) — and is anchored in an open-source technology stack that eliminates software licence fees entirely.

Ten funding sources have been mapped, covering 75–77% of the total investment. RDIP is the largest single source (22–23%), followed by the Government of Progressa (18–19%), Global Fund (14–16%), and GAVI (6–8%). A funding gap of approximately USD 500K–1M, primarily in Wave 2, depends on securing a dedicated health sector digitisation proposal from the World Bank or African Development Bank. The annual investment run rate of USD 0.9–1.5M is consistent with MoH's demonstrated absorption capacity from the EHSSP programme.

The sustainability financial model projects a transition from near-total donor dependency (~94% external funding in 2025) to majority government-funded operations (≥50% by 2033), with steady-state annual recurrent costs of approximately USD 515,000 per year, funded primarily through DHDD salaries, G-Cloud hosting fees, and facility connectivity absorbed into the government recurrent budget.

### Key Milestones

| Milestone | Target Date | Wave |
|-----------|------------|------|
| NDHSC and DHDD established by Ministerial Order | Q3 2025 | W1 |
| National Digital Health Strategy endorsed | Q4 2025 | W1 |
| Health Data Governance Framework in force | Q4 2025 | W1 |
| EHSSP digital health transition completed (zero outages) | Q3 2025 | W1 |
| OpenHIM + OpenCR operational on interim hosting | Q1 2026 | W1 |
| First HIE integration flow live (eCRVS→MPI→e-NHIS) | Q2 2026 | W1 |
| MPI contains ≥500,000 verified patient records | Q4 2026 | W1 |
| DHIS2 reporting completeness ≥90% | Q4 2026 | W1 |
| eLMIS at ≥85 facilities nationally | Q4 2026 | W1 |
| EHR pilot at 15–20 facilities | Q4 2028 | W2 |
| 4–5 integration flows live through HIE | Q4 2029 | W2 |
| G-Cloud migration complete for all central systems | Q2 2029 | W2 |
| e-NHIS ≥60,000 beneficiaries | Q4 2029 | W2 |
| DHDD at full staffing (14 positions) | Q2 2028 | W2 |
| EHR at 30–40 facilities | Q4 2032 | W3 |
| Integration maturity Level 4.0 | Q4 2033 | W3 |
| Government budget share ≥50% of digital health recurrent costs | Q4 2033 | W3 |
| EA maturity score 4.0+ | Q4 2033 | W3 |

### Critical Dependencies

The roadmap's success depends on six cross-sectoral prerequisites that are outside MoH's direct control:

1. **RDIP infrastructure delivery** (G-Cloud, broadband, data centre) — target 2027; delays of 12–24 months are mitigated through interim hosting and 4G connectivity bridge
2. **eCRVS API availability** — required for Priority 1 integration flow; batch export serves as fallback if real-time API is delayed
3. **National digital identity (NIN)** — suspended production undermines deterministic MPI matching; probabilistic matching covers the gap
4. **Data protection legislation** — legal vacuum for health data exchange; MoH-specific data governance framework provides interim coverage through Ministerial Order
5. **Government salary scales** — DHDD recruitment depends on competitive compensation; RDIP salary supplementation provides Wave 1–2 bridge
6. **EHSSP closure transition** — August 2025 funding cliff threatens 4 operational systems; W1-11 transition plan and successor funding arrangements are the immediate priority

Each dependency has explicit interim mitigation strategies so that the roadmap advances even if national-level delivery is delayed.

### Governance Requirements

Execution of this roadmap requires the establishment of a three-tier governance structure:

The **National Digital Health Steering Committee** (14 members, chaired by the MoH Permanent Secretary, quarterly meetings) provides strategic direction, investment approval authority for all digital health expenditures exceeding USD 50,000, and cross-sectoral coordination. The **Digital Health and Data Directorate** (14 positions across 6 functional areas, phased recruitment 2025–2028) provides operational management of all digital health systems, data governance, integration, and workforce development. Three **Technical Working Groups** (Architecture & Interoperability, Data Standards & Governance, Implementation & Capacity) provide monthly technical coordination.

The governance model must be established through Ministerial Order within the first five months of roadmap implementation. Without governance, all technical investments risk repeating the fragmented, donor-driven pattern that produced the current siloed landscape.

### Risk Profile

Twelve risks have been identified and assessed: 2 rated Critical (EHSSP funding cliff and DHDD recruitment failure), and 10 rated High. Every risk has specific mitigation actions, a named owner, defined escalation triggers, and contingency plans. The risk register is a living document reviewed quarterly by the NDHSC.

### Call to Action

This roadmap asks three things of MoH leadership:

**Act now on governance.** The Ministerial Order establishing the NDHSC and DHDD costs nothing but delivers the institutional authority without which no technical investment can succeed. The EHSSP closure in August 2025 creates a non-negotiable deadline: digital health functions must be transitioned to MoH-owned structures before donor programme management ceases.

**Commit to the investment.** The USD 8.5M midpoint investment over eight years is modest relative to health sector spending and proportionate to the transformation required. The government's share — growing from ~6% to ≥50% over the roadmap period — requires a dedicated budget line for digital health operations in the Medium-Term Expenditure Framework, beginning with DHDD salaries and facility connectivity.

**Hold the architecture.** The target architecture (D6) defines 12 design decisions that protect against the fragmented, ad-hoc system deployments of the past. Every new digital health investment — regardless of funding source — should pass through the DHDD architecture compliance review. The most important decision MoH can make is not which system to deploy, but to ensure that every system connects to the shared platform (HIE, MPI, IAM) rather than operating in isolation.

The path from ~90% paper and Level 1 integration to an interoperable digital health ecosystem is long — eight years across three waves. But each wave delivers a stable, operational intermediate state that improves health outcomes independently. The first wave is achievable with current resources and confirmed funding. The question is not whether Progressa can afford this transformation, but whether it can afford to continue without it.

---

---

## Section 1: Introduction

### 1.1 Purpose and Scope

This document constitutes Deliverable 7 (D7) — the EA Implementation Roadmap — for the Ministry of Health (MoH) of Progressa, developed under Contract [contract reference] between the International Telecommunication Union (ITU) and the Government of Progressa (represented by PDGA/MoDE).

The purpose of D7 is to provide a comprehensive, actionable roadmap that bridges the gap between the current state ("As-Is") architecture documented in D5 and the target state ("To-Be") architecture defined in D6. Specifically, this document:

- Identifies and analyses all significant gaps between current and target architectures across Business, Data, Application, and Technology (BDAT) domains.
- Distinguishes between gaps that MoH can address directly (sector-specific) and gaps that depend on cross-government or national infrastructure investments (generic/cross-sectoral).
- Proposes phased implementation waves with concrete milestones, dependencies, investment estimates, and responsible parties.
- Defines the governance, organisational, and capacity-building requirements necessary to execute the roadmap.
- Establishes monitoring, evaluation, and risk management frameworks for roadmap execution.

The scope is limited to MoH and its affiliated entities (NHIA, regional health directorates, public health facilities). However, the roadmap explicitly addresses MoH's dependencies on national-level infrastructure programmes — particularly RDIP — and on other ministries' digital transformation initiatives.

### 1.2 Relationship to Other Deliverables

D7 does not exist in isolation. It is the culmination of a structured architectural development process and draws directly from the following project deliverables:

**D5 — Current "As-Is" Architecture:** Provides the baseline from which all gaps are measured. D5 documented MoH's current systems (DHIS2, eCRVS, e-NHIS, SPT, A-LIS, IDSR, SMS for Health, NMRI EMRS), their integration status (Level 1 maturity, sole automated flow SPT→DHIS2), governance structures, data fragmentation across 8+ siloed data stores, and technology infrastructure constraints.

**D6 — Future "To-Be" Architecture:** Defines the target state against which gaps are assessed. D6 specifies the OpenHIE-based interoperability architecture, 12 key design decisions (DD-01 through DD-12), the three-tier governance model (NDHSC, DHDD, three TWGs), the four-layer application portfolio, the six priority integration flows, and the sovereign cloud hosting strategy.

**D2 — EA Framework:** Establishes the Generic EA Target Architecture Development Method (GEATDM) and its five phases (SCOPE, DISCOVER, DESIGN, PLAN, IMPLEMENT). D7 corresponds to the PLAN phase of GEATDM and to Phases E (Opportunities and Solutions) and F (Migration Planning) of the TOGAF Architecture Development Method (ADM).

**D1 — Inception Report:** Defines the project charter, stakeholder engagement plan, and work mobilisation approach that governs how D7 findings will be validated with MoH stakeholders.

**D10 — Integration and Interoperability Strategy:** Will provide the detailed technical standards and protocols for the integration flows identified in D7's roadmap. D7's integration gap analysis directly informs D10's scope.

**D11 — Conceptual Cloud Strategy:** Will elaborate the sovereign cloud (G-Cloud) migration pathway that D7 identifies as a critical cross-sectoral dependency.

**D13 — EA Governance and Sustainability Framework:** Will formalise the governance structures and sustainability mechanisms that D7 identifies as prerequisites for roadmap execution.

### 1.3 Methodology

This roadmap was developed using the following methodological foundations:

**GEATDM Phase 4 — PLAN:** the Generic EA Target Architecture Development Method's PLAN phase requires: (1) comparison of As-Is and To-Be architectures, (2) identification and prioritisation of gaps based on business value, technical dependencies, risk, budget, and capacity, (3) development of transition architectures (intermediate states), (4) creation of a phased implementation roadmap, and (5) estimation of costs and resources.

**TOGAF ADM Phase E — Opportunities and Solutions:** Systematic identification of major implementation projects, grouping into work packages, and assessment of build/buy/reuse/partner options for closing each gap.

**TOGAF ADM Phase F — Migration Planning:** Sequencing of work packages into a coordinated implementation plan that respects dependencies, resource constraints, and risk tolerances. This includes developing transition architectures that define stable intermediate states between the current and target architectures.

**Analytical methods applied:**

- Gap analysis across all four BDAT domains (Business, Data, Application, Technology) comparing D5 baseline against D6 target state.
- Dependency mapping to identify cross-sectoral prerequisites that MoH cannot control (e.g., G-Cloud, broadband, digital ID).
- Funding landscape analysis aligning roadmap phases with confirmed and projected funding windows (EHSSP closure August 2025, RDIP, Global Fund 2024–2027, GAVI cycles).
- International benchmarking drawing on comparable country experiences (Tanzania, Ethiopia, Rwanda, Kenya, Maldives) for timeline and cost estimation.
- Risk-adjusted planning that applies conservative assumptions for infrastructure delivery, staffing, and absorption capacity in a resource-constrained environment.

### 1.4 Roadmap Horizon and Wave Structure

The roadmap spans the period **2025–2033**, aligned with D6's eight-year architecture validity period and with Progressa's national digital master plan (ten-year). Implementation is organised into three waves:

**Wave 1 — Foundation and Stabilisation (2025–2027):**
The critical near-term period focused on bridging the EHSSP funding gap (August 2025 closure), stabilising existing operational systems, establishing the Digital Health and Data Directorate (DHDD), deploying foundational shared infrastructure (HIE/OpenHIM, MPI/OpenCR), and piloting new clinical systems (OpenMRS, DHIS2 Tracker EIR, DHIS2 Tracker IDSR+). Wave 1 operates primarily within existing and transitional hosting arrangements while RDIP infrastructure is built out.

**Wave 2 — Expansion and Integration (2027–2030):**
Building on Wave 1 foundations, this wave focuses on scaling proven pilots to regional/national coverage, activating all six priority integration flows through the HIE, migrating systems to G-Cloud sovereign infrastructure, deploying the EHR to 30–40 facilities, transitioning from SPT to DHIS2 Tracker EIR nationally, and establishing the full data governance framework. Wave 2 is timed to coincide with RDIP infrastructure availability (G-Cloud, broadband, data centre).

**Wave 3 — Optimisation and Maturity (2030–2033):**
The final wave focuses on advanced capabilities including event-driven integration (pub/sub), cross-border data sharing, a dedicated health data warehouse, community-based surveillance, and achieving integration maturity Level 4. Wave 3 also addresses system retirements (SPT, SMS for Health, paper registers) and transitions to fully government-funded sustainable operations.

Each wave defines a stable, operational intermediate state — a transition architecture — that delivers value independently, even if subsequent waves are delayed or modified.

### 1.5 How to Read This Document

This document is structured to serve multiple audiences:

**For executive decision-makers** (Permanent Secretary, NDHSC members, donor programme managers): Sections 1–2 provide the strategic context and cross-sectoral dependency analysis. Section 7 (Investment Requirements) and Section 8 (Governance) present the decisions and commitments required. The Executive Summary (to be added) provides a one-page overview.

**For programme and project managers** (DHDD leadership, RDIP coordinators, donor technical advisors): Sections 3–6 provide the detailed gap analysis, solution specifications, and wave-by-wave implementation plans with milestones and dependencies. Section 9 (Capacity and Risk) addresses implementation feasibility.

**For technical architects and implementers** (integration developers, system administrators, HIE managers): The detailed gap tables throughout Sections 2–4 provide specific AS-IS/TO-BE/gap specifications. The wave plans in Sections 5–6 include technical prerequisites and sequencing logic.

**Conventions used in this document:**

- **Gap IDs** follow the pattern `GEN-nn` (generic/cross-sectoral), `BUS-nn` (business), `DAT-nn` (data), `APP-nn` (application), `INT-nn` (integration), `TEC-nn` (technology).
- **Dependency owners** identify the ministry, agency, or programme responsible for delivering each prerequisite.
- **Funding sources** reference specific programmes (RDIP, Global Fund, GAVI, government budget) with confirmed or projected funding status.
- **Timeline references** use the three-wave structure: W1 (2025–2027), W2 (2027–2030), W3 (2030–2033).
- **Priority levels** use MoSCoW: Must (roadmap fails without it), Should (significant impact if absent), Could (valuable but deferrable), Won't (out of scope for this period).

---

## Section 2: Gap Analysis

### 2.1 Generic / Cross-Sectoral Component Gaps

This section identifies gaps that originate outside MoH's direct control but have profound implications for health sector digital transformation. These are national-level infrastructure, policy, and institutional prerequisites — primarily under RDIP, MoDE/PDGA, or cross-government mandates — without which MoH's target architecture cannot be fully realised.

MoH's role regarding these gaps is threefold: (1) advocate for health-sector requirements within national governance structures, (2) design MoH systems to be ready to leverage these capabilities when available, and (3) develop interim mitigation strategies for the period before national solutions are delivered.

---

#### GEN-01: Sovereign Cloud Infrastructure (G-Cloud)

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | No sovereign government cloud exists. MoH systems are hosted in fragmented arrangements: DHIS2 on central HMIS servers (ProgTel infrastructure), eCRVS on Civitas Group external hosting, e-NHIS on an external cloud provider, SPT on Vaxa cloud (external), A-LIS on local pilot facility servers. No Tier 3/4 national data centre is operational (ProgTel DC limited; PDGA DC functional but constrained). National cybersecurity posture is weak (ITU Global Cybersecurity Index score of around 30, in the lower half globally). |
| **TO-BE** | G-Cloud provides a Kubernetes-based sovereign cloud platform with hub-and-spoke architecture. MoH operates as one isolated spoke. All identifiable health data (EHR, MPI, eCRVS endpoints, e-NHIS, DHIS2 patient-level) is hosted on sovereign infrastructure within national borders. The national data centre operates at Tier 3/4 reliability. A cross-cutting IAM/SSO layer (Keycloak) and API Gateway/Information Mediator provide security and access management. |
| **Gap** | Complete absence of sovereign cloud platform. No Tier 3/4 data centre. No government container orchestration (Kubernetes) infrastructure. No shared IAM/SSO services. No standardised hosting SLAs for government systems. MoH has no pathway to meet data sovereignty requirements for Tiers 3–4 health data (clinical records, patient identity, insurance data) until G-Cloud is available. |
| **Dependency Owner** | **MoDE/PDGA** (G-Cloud policy and platform), **RDIP** (data centre construction and equipping, G-Cloud platform deployment), **ProgTel** (data centre operations). |
| **Funding Source** | RDIP (USD 50M allocation for Progressa, includes data centre and cloud components). Planned delivery: Data centre 2026–2027, G-Cloud platform target 2027. |
| **MoH Implications if Gap Persists** | MoH cannot meet its own data classification requirements (D6 Section 3.5): Tier 3 (Confidential PII) and Tier 4 (Restricted Clinical) data must reside on sovereign infrastructure. Without G-Cloud, MoH must either (a) continue fragmented external hosting — violating data sovereignty principles and creating unmanageable security risks for patient data, or (b) invest in standalone MoH-specific infrastructure — duplicating national investment and creating unsustainable cost burdens. The OpenHIM/OpenCR/HAPI FHIR deployment (central to the entire target architecture) has no appropriate hosting environment. The 2027–2028 system migration timeline in D6 becomes infeasible. |
| **MoH Interim Mitigation** | Containerise all new and existing MoH systems (Docker/Docker Compose) to ensure G-Cloud readiness. Maintain current hosting arrangements during Wave 1 with enhanced security measures. Deploy OpenHIM/OpenCR on interim infrastructure (PDGA DC or hardened HMIS servers) with planned migration to G-Cloud when available. Require all new system procurements to be Kubernetes-ready. Plan 60-day parallel-run for each eventual migration. |

---

#### GEN-02: National Broadband and Last-Mile Connectivity

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | National broadband infrastructure is limited: ~40,000 fixed broadband subscribers across the country. National electricity access is ~60%. Single submarine cable with approximately 4 years remaining legal lifespan — a critical single point of failure. MoH health facilities are connected via EHSSP-funded satellite internet, but this is expensive, bandwidth-constrained, and funded only through August 2025 (EHSSP closure). Mobile connectivity is more widespread (~70% internet penetration, ~4M mobile connections) but insufficient for reliable health system operations. |
| **TO-BE** | RDIP broadband backbone provides reliable facility-to-central connectivity. Last-mile connectivity reaches health facilities progressively. Bandwidth targets: 2 Mbps per facility (Phase 1), 5 Mbps (Phase 2), 10+ Mbps (Phase 3). A second submarine cable eliminates the single-cable point of failure. Terrestrial broadband progressively replaces satellite connectivity at health facilities. |
| **Gap** | Broadband backbone is under construction but not yet reaching health facilities. Last-mile connectivity to rural health facilities is 2–3 years away (2027–2028). Satellite connectivity funding ends August 2025 with no confirmed successor for the gap period. The second submarine cable is planned for 2027–2028 but not yet contracted. About 40% of the population lacks electricity access, limiting facility ICT operations. |
| **Dependency Owner** | **RDIP** (broadband backbone, last-mile, submarine cable), **ProgTel/the national utility** (terrestrial infrastructure, electricity), **MoDE/PDGA** (policy and coordination). |
| **Funding Source** | RDIP (broadband and submarine cable components within USD 50M Progressa allocation). EHSSP satellite funding ends August 2025. |
| **MoH Implications if Gap Persists** | Immediate risk (August 2025): loss of facility connectivity when EHSSP satellite funding ceases, before RDIP terrestrial broadband reaches facilities. This would disrupt DHIS2 reporting from facilities, SPT scanning operations, e-NHIS claims processing, and any new system deployments. Real-time integration flows (all six priority HIE flows from D6) are infeasible without reliable connectivity. The EHR rollout to 30–40 facilities requires minimum 2 Mbps sustained bandwidth at each site. Disease surveillance (IDSR+) transition from paper to electronic case-based reporting requires reliable connectivity or robust offline-first design. |
| **MoH Interim Mitigation** | All MoH systems must implement offline-first design (local storage, background sync) — this is already a D6 design principle. Negotiate bridge funding for satellite connectivity beyond August 2025 through either RDIP reallocation or emergency government allocation. Prioritise RDIP broadband rollout at health facilities in advocacy with RDIP governance. Plan EHR and DHIS2 Tracker deployments to start at facilities with existing reliable connectivity. Use mobile data (4G) as a transitional connectivity option for facilities where neither satellite nor broadband is available. |

---

#### GEN-03: National Digital Identity Platform

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | Two separate national identification numbering systems exist: eCRVS NIN (10-digit, assigned at birth registration, ~50% population coverage as of March 2023) and Immigration NIN (separate system, citizens 18+). These systems are not unified — there is no single national digital identity. NIN production has been suspended due to a contract issue with the service provider. The eCRVS system (CIVIS platform) has no operational integrations with any other government system. The planned eCRVS→e-NHIS integration (target August 2025) has not been delivered. |
| **TO-BE** | A unified national digital ID platform provides the foundation for the Master Patient Index (MPI/OpenCR). The eCRVS NIN serves as the foundational health identifier, accepted by all MoH systems. OpenCR performs deterministic matching on strong identifiers (eCRVS NIN, Immigration NIN) and probabilistic matching on demographics. All patient-level health systems (EHR, e-NHIS, EIR, LIS) perform MPI lookup during patient registration (integration principle IP-08). |
| **Gap** | No unified national digital ID (eCRVS and Immigration NINs remain separate). NIN production is suspended — no new NINs are being issued. eCRVS coverage is ~50% (leaving ~50% of the population without a foundational digital identifier). No operational integration between eCRVS and any other system. The legal framework for digital identity (CRVS Bill) is pending enactment. No data protection legislation governs identity data use and sharing. |
| **Dependency Owner** | **MoDE/PDGA** (NID programme, RDIP digital ID platform), **Ministry of Justice** (CRVS Bill enactment), **Immigration Department** (NIN unification), **eCRVS Team/Civitas Group** (eCRVS API development and integration readiness). |
| **Funding Source** | RDIP (digital ID platform component, 2026–2028). EHSSP AF3 funded eCRVS expansion (closing October 2025). |
| **MoH Implications if Gap Persists** | The Master Patient Index — the cornerstone of the entire health information exchange architecture — cannot achieve its target function. Without a reliable foundational identifier, MPI matching degrades to probabilistic-only, increasing duplicate records and misidentification risks (particularly critical for HIV, TB, and immunisation records). The Priority 1 integration flow (Birth Registration → MPI → NHIS Enrollment) cannot be implemented. Patient identity resolution across EHR, e-NHIS, EIR, and LIS remains impossible for ~50% of the population. Insurance enrollment automation (eliminating manual re-keying from eCRVS to e-NHIS) is blocked. |
| **MoH Interim Mitigation** | Deploy MPI (OpenCR) with support for multiple identifier types: eCRVS NIN (where available), e-NHIS ID, facility MRNs. Use probabilistic matching (name, date of birth, sex, facility) as fallback for patients without NIN. Design all MoH systems to accept and propagate NIN when available but not require it for service delivery. Advocate within RDIP governance for prioritisation of eCRVS API development and NIN production resumption. Prepare FHIR Patient resource profiles that accommodate both deterministic and probabilistic matching. |

---

#### GEN-04: Data Protection and Privacy Legislation

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | Progressa has no comprehensive data protection legislation. The CRVS Bill (which includes provisions for civil registration data protection) is pending enactment. The ICT sector law and the Cybersecurity Act provide limited, sector-specific provisions but do not constitute a comprehensive data protection framework. No data protection authority exists. No government-wide data classification policy is enforced. Health-specific data governance is absent — there is no health data governance framework, no data sharing agreements between systems, and no patient consent management framework. |
| **TO-BE** | A national data protection law governs personal data processing, including health data. A Data Protection Authority provides oversight and enforcement. MoH operates under a health data governance framework (established by DHDD) with defined data ownership across 11 domains, three-level data stewardship, and a four-tier data classification scheme (Public, Internal, Confidential PII, Restricted Clinical). Patient consent is managed through standardised protocols. Data sharing agreements govern all inter-system and cross-ministry data exchange. |
| **Gap** | No national data protection legislation. No Data Protection Authority. No health data governance framework. No standardised patient consent management. No data sharing agreements. No data classification enforcement. Health data (including HIV status, clinical records, insurance data) is processed without adequate legal safeguards. This creates legal uncertainty for any system that stores or transmits patient-identifiable information — including the entire target HIE architecture. |
| **Dependency Owner** | **Ministry of Justice / National Assembly** (data protection legislation), **MoDE/PDGA** (government data policy), **MoH** (health-sector data governance framework — this MoH can do independently). |
| **Funding Source** | No specific funding identified for data protection legislation. RDIP may include policy development components. WHO country cooperation strategy includes normative support for health data governance. |
| **MoH Implications if Gap Persists** | All patient-level data systems (EHR, MPI, e-NHIS, EIR, LIS) operate in a legal vacuum regarding data protection. This creates risks for patients (no enforceable privacy rights), for MoH (no legal basis for data sharing, potential liability), and for donor partners (who increasingly require data protection compliance as a condition of funding). The HIE architecture — which by design mediates patient data across multiple systems — has no legal framework governing data access, consent, or breach notification. International health data exchange (e.g., DHIS2→WHO/RHO) may be restricted by partner organisations' data protection requirements. Health worker compliance with data handling procedures has no legal enforcement mechanism. |
| **MoH Interim Mitigation** | MoH can and should establish a health-sector data governance framework through administrative action (Ministerial Order) without waiting for national legislation. This includes: defining data ownership across 11 domains (as specified in D6), establishing data stewardship roles at national, regional, and facility levels, creating standard data sharing agreements for inter-system exchange via HIE, implementing patient consent protocols for EHR and insurance systems, and enforcing the four-tier data classification scheme. These measures provide operational data governance even in the absence of national law, and position MoH to comply rapidly once legislation is enacted. |

---

#### GEN-05: National Interoperability Platform / Government Service Bus

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | No government-wide integration platform or government service bus exists. ProgressaPay (the government payment gateway) is the only real-time, cross-ministry integration in Progressa, demonstrating that API-based integration is achievable in the Progressa context. ProgressaPay uses REST APIs at API maturity Level 4 and integrates IFMIS, CBP T24, and commercial banks. However, ProgressaPay is limited to payment flows and does not provide general-purpose data exchange. Within MoH, integration maturity is Level 1 (Ad-hoc) with only one automated flow (SPT→DHIS2). No middleware, API management, or integration governance exists. |
| **TO-BE** | A national interoperability platform (Government Service Bus / Information Mediator) provides cross-ministry data exchange. MoH's Health Information Exchange (OpenHIM) connects to the national platform for cross-sectoral flows (e.g., eCRVS birth notification, digital ID verification, NHIS↔IFMIS financial reconciliation). Open API standards (REST/JSON, FHIR where applicable) are mandated for government systems. API management (documentation, versioning, security) is centralised. |
| **Gap** | No government service bus or national interoperability platform. No government API standards or API management. No cross-ministry data exchange framework (beyond ProgressaPay payments). The eCRVS→e-NHIS integration — the most critical cross-boundary health flow — has no technical infrastructure to mediate it. Each ministry operates in an integration silo. No government-wide integration governance or standards body exists. |
| **Dependency Owner** | **MoDE/PDGA** (national interoperability platform policy and governance), **RDIP** (platform investment), **MoF** (IFMIS integration requirements), **PRA** (potential shared integration infrastructure). |
| **Funding Source** | RDIP includes government service bus / interoperability platform as a planned component. ITU/RDIP EA contract (this project) produces D10 (Integration and Interoperability Strategy) which will define the national framework. |
| **MoH Implications if Gap Persists** | MoH can still deploy its sector-specific HIE (OpenHIM) for intra-health data exchange (EHR↔DHIS2, LIS→Surveillance, EIR→DHIS2 aggregate). However, the critical cross-sectoral flows are blocked: eCRVS birth notification→MPI→NHIS enrollment requires either direct point-to-point integration (fragile, not scalable) or a mediated platform. NHIS financial reconciliation with IFMIS requires cross-ministry integration. Digital ID verification requires connection to the national ID platform. Without a national platform, MoH's HIE becomes another silo — albeit a well-structured one — rather than a connected node in a government-wide integration ecosystem. |
| **MoH Interim Mitigation** | Deploy MoH's HIE (OpenHIM) as a sector-specific platform in Wave 1, designed to connect to a national platform when available. Implement the eCRVS→MPI→e-NHIS flow as a direct, mediated integration through OpenHIM (bilateral agreement with eCRVS team) rather than waiting for a national bus. Use ProgressaPay's proven REST API patterns as a reference architecture for health integration APIs. Design all HIE mediators with configuration for future national platform routing. Advocate in D10 development for a federated integration model where sector-specific HIEs (health, revenue, etc.) connect to a lightweight national mediation layer. |

---

#### GEN-06: Government Cloud and Hosting Policy

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | The government cloud policy exists as a policy document but has not been operationalised. No cloud-first mandate is enforced for government systems. No standardised hosting SLAs for government applications. No shared infrastructure provisioning process. Each ministry and system independently arranges hosting — resulting in the fragmented landscape documented in D5 (6+ different hosting arrangements for MoH systems alone). No government container registry or DevOps pipeline. No data residency requirements are enforced. |
| **TO-BE** | The Government Cloud Policy is operationalised through G-Cloud. Cloud-first is the default for all new government systems. Standardised hosting tiers (development/staging/production) with defined SLAs. Shared container orchestration (Kubernetes). Government container registry for approved images. DevOps pipelines for automated deployment and testing. Data residency requirements enforced (sovereign hosting for Tiers 3–4 data). Migration pathways defined for existing systems. |
| **Gap** | Policy exists but no operational platform. No standardised hosting SLAs. No shared DevOps infrastructure. No data residency enforcement. No migration guidelines or support. No cost recovery model for shared cloud services. No government container registry. The gap between policy and platform (target 2027) is 4 years — during which systems continue to be deployed in ad-hoc hosting arrangements. |
| **Dependency Owner** | **MoDE/PDGA** (policy operationalisation, G-Cloud platform governance), **RDIP** (platform implementation), **Ministry of Finance** (cost recovery model, recurrent budget for cloud operations). |
| **Funding Source** | RDIP (G-Cloud platform deployment). Government recurrent budget required for ongoing cloud operations post-RDIP. |
| **MoH Implications if Gap Persists** | MoH cannot consolidate its fragmented hosting landscape. Each new system deployment (OpenHIM, OpenCR, OpenMRS, DHIS2 Tracker expansions) must negotiate its own hosting arrangement — increasing cost, complexity, and security risk. The containerisation strategy specified in D6 (Docker/Kubernetes for all MoH systems) has no target platform. System-to-system communication within MoH requires traversing multiple hosting environments rather than operating within a shared, secured network segment. Monitoring and observability (Prometheus/Grafana/Loki stack) must be duplicated across hosting environments rather than deployed centrally. Disaster recovery and backup strategies cannot be standardised. |
| **MoH Interim Mitigation** | Adopt containerisation (Docker Compose) as the standard deployment model for all MoH systems immediately, regardless of hosting location. This ensures G-Cloud readiness while working within current constraints. Consolidate hosting where possible — target PDGA DC as an interim consolidated hosting environment for OpenHIM, OpenCR, and HAPI FHIR server. Implement a unified monitoring stack (Prometheus/Grafana) across all MoH systems regardless of hosting location. Document hosting arrangements, SLAs, and costs for all MoH systems to support future migration planning. |

---

### 2.1.7 Cross-Sectoral Gap Summary and Risk Assessment

The six generic gaps described above share several critical characteristics:

**Compound dependency risk:** These gaps are interconnected. The sovereign cloud (GEN-01) depends on the data centre (RDIP infrastructure). The MPI (part of GEN-03) needs the sovereign cloud for hosting. The HIE needs both broadband (GEN-02) and the sovereign cloud (GEN-01). Data sharing through the HIE requires data protection legislation (GEN-04). This creates a compound dependency chain where delay in any single element cascades to multiple others.

**Single programme dependency:** All six gaps depend heavily on a single programme — RDIP (USD 50M for Progressa). While RDIP's scope is comprehensive, its delivery timeline is ambitious and any delays will directly impact MoH's roadmap. MoH has limited influence over RDIP prioritisation and delivery sequencing.

**Funding cliff risk:** The August 2025 EHSSP closure creates an immediate gap in facility connectivity (GEN-02) and system hosting (GEN-06) funding before RDIP infrastructure is ready to absorb these functions. The 2025–2027 period represents a "gap year" where existing services are at risk but successor infrastructure is not yet available.

**Policy-before-platform gaps:** Two gaps (GEN-04 data protection, GEN-06 cloud policy) involve policy frameworks that exist on paper but lack operational implementation. These require institutional action (legislation, operationalisation) that is harder to fund and track than infrastructure construction.

**MoH agency within constraints:** Despite these external dependencies, MoH retains significant agency. The interim mitigations identified for each gap — containerisation, offline-first design, health-sector data governance, sector-specific HIE deployment, probabilistic MPI matching — allow MoH to make meaningful progress during Waves 1–2 even if national infrastructure delivery is delayed. The roadmap in Sections 5–6 is designed with explicit fallback positions for each external dependency.

The following table summarises the timeline risk for each generic gap:

| Gap ID | Component | Planned Delivery | Risk of Delay | Impact on MoH if Delayed 12+ Months |
|--------|-----------|-----------------|---------------|--------------------------------------|
| GEN-01 | G-Cloud Platform | 2027 | **High** — complex platform, no precedent in Progressa | System migration timeline shifts; continued fragmented hosting; data sovereignty non-compliance |
| GEN-02 | Broadband + Last-Mile | 2025–2028 | **Medium** — construction underway; phased delivery | Connectivity gap widens post-EHSSP; real-time integration delayed; EHR rollout restricted to connected sites |
| GEN-03 | Digital ID Platform | 2026–2028 | **High** — NIN production suspended; legal framework pending | MPI operates with degraded matching; eCRVS→e-NHIS automation blocked; patient identity fragmentation continues |
| GEN-04 | Data Protection Law | No committed date | **Very High** — requires National Assembly action | Health data exchange operates in legal vacuum; donor compliance risks; patient privacy unprotected |
| GEN-05 | Government Service Bus | No committed date | **High** — depends on RDIP and national EA governance | Cross-sectoral integration remains point-to-point or manual; MoH HIE becomes sector silo |
| GEN-06 | Cloud/Hosting Policy Operationalisation | 2027 (with G-Cloud) | **High** — policy-to-platform gap | Continued fragmented hosting; no standardised SLAs; duplication of infrastructure investment |

---

### 2.2 Sector-Specific (Health) Component Gaps

This section identifies gaps that fall within MoH's direct authority and mandate. Unlike the cross-sectoral gaps in Section 2.1, these are areas where MoH — through its own governance structures, budgets, and partner relationships — can take direct action. Each gap is analysed across the standard dimensions: AS-IS state (with specific metrics from D5), TO-BE target (from D6), gap description, severity, and priority.

Gaps are organised by BDAT domain (Business, Data, Application, Technology) plus a dedicated Integration domain, following the GEATDM framework structure. Gap IDs use domain prefixes: BUS-nn (Business), DAT-nn (Data), APP-nn (Application), TEC-nn (Technology), INT-nn (Integration).

---

## 2.2.1 Business Architecture Gaps

#### BUS-01: Digital Health Governance Structure

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | Digital health functions are fragmented across at least four separate teams: HMIS Team (DHIS2 operations), eCRVS Team (civil registration), NHIS Digital Platform Team (e-NHIS operations), and Laboratory Information Systems team (A-LIS support). No unified digital health directorate exists. No single authority coordinates digital health investments, architecture decisions, or standards compliance. No investment review process governs digital health procurements — donor-funded systems are deployed independently without architectural coherence assessment. |
| **TO-BE** | Three-tier governance model operational: (1) National Digital Health Steering Committee (NDHSC), chaired by MoH Permanent Secretary, 14 members, quarterly meetings, authority over all digital health investments >USD 50,000, established by Ministerial Order, target operational mid-2026; (2) Digital Health and Data Directorate (DHDD), upgraded from HMIS team, 6 functional areas, 14 positions at full staffing (phased 2026–2028); (3) Three Technical Working Groups — Architecture & Interoperability TWG, Data Standards & Governance TWG, Implementation & Capacity TWG — each meeting monthly. All digital health investments (regardless of funding source) follow: Proposal → DHDD Architecture Compliance Review → Data Governance Review → NDHSC Decision → Implementation Coordination. |
| **Gap** | No governance tier exists. No Ministerial Order for NDHSC or DHDD. No architecture compliance review process. No investment decision flow for digital health. Four fragmented teams operate independently with no mandate or mechanism for coordination. No TWGs exist. The gap is structural and institutional — it requires administrative and political action, not just technical deployment. |
| **Severity** | **Critical** |
| **Priority** | **Must** — W1 (2025–2027). All other gaps depend on governance capacity to coordinate, prioritise, and sustain implementation. |

---

#### BUS-02: National eHealth / Digital Health Strategy

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | No comprehensive national eHealth or digital health strategy exists. MoH's digital activities are governed by fragmented policies: national health sector policy, national health sector strategic plan (expired), HMIS policy (expired), laboratory services policy (expired). None of these documents articulate a coherent digital health vision, architecture principles, or investment priorities. Donor programmes (EHSSP, Global Fund, GAVI) each drive their own digital components without a unifying framework. |
| **TO-BE** | D6 target architecture serves as the de facto digital health strategy, articulating 12 design decisions (DD-01 through DD-12), an OpenHIE-based interoperability framework, and a phased implementation approach. The DHDD maintains and updates the strategy through biennial architecture reviews (DD-12). The strategy aligns with the national digital master plan (ten-year) and the GEATDM enterprise architecture framework. |
| **Gap** | No endorsed digital health strategy document. Expired sub-sector policies (HMIS, Laboratory) leave operational gaps. No mechanism to translate D6 target architecture into an endorsed policy instrument. No alignment framework linking donor programme designs to a unified digital health vision. |
| **Severity** | **High** |
| **Priority** | **Must** — W1. DHDD's first strategic output should be adoption of D6 as the endorsed digital health architecture, wrapped in a brief strategy document that can secure PS endorsement and donor alignment. |

---

#### BUS-03: Health Data Governance Framework

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | No health data governance framework exists. No data ownership model is defined — no individual or directorate has formal accountability for data quality, access, or lifecycle management for any of the 8+ health data stores. No data sharing agreements govern inter-system exchange. No patient consent management framework exists. Health data (including HIV status, clinical records, insurance data) is processed without formal governance. A recent HIS assessment found about half of data sources adequate and limited data use resources. |
| **TO-BE** | DHDD establishes and maintains a health data governance framework comprising: defined data ownership across 11 data domains (each with a named Director as Data Owner), three-level data stewardship (national DHDD staff, 7 Regional Health Data Officers, facility data focal persons), four-tier data classification (Public, Internal, Confidential PII, Restricted Clinical), standard data sharing agreements, patient consent protocols, and data quality standards. The Data Standards & Governance TWG provides ongoing oversight. |
| **Gap** | Complete absence of data governance. No data owners. No stewardship roles. No classification enforcement. No sharing agreements. No consent management. No data quality standards. This gap can be addressed through MoH administrative action (Ministerial Order) without waiting for national data protection legislation (GEN-04), making it high-agency for MoH. |
| **Severity** | **High** |
| **Priority** | **Must** — W1. The health data governance framework should be among DHDD's first deliverables, as it provides the policy foundation for all data-related activities including MPI deployment, HIE integration flows, and EHR data management. |

---

#### BUS-04: Project and Programme Management Capacity

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | MoH has limited ICT project management capacity. Digital health initiatives are managed through donor programme structures (EHSSP PMU, Global Fund PRs/SRs, GAVI coordination) rather than MoH-led project management. With EHSSP closing August 2025, the programme management capacity for DHIS2 strengthening, eCRVS expansion, and facility connectivity will be lost. No MoH-internal project management office (PMO) or function exists for digital health. No standardised project lifecycle methodology is used across digital health initiatives. |
| **TO-BE** | DHDD includes a Project Coordination functional area responsible for managing the digital health project portfolio, coordinating donor-funded implementations, tracking milestones and dependencies, and ensuring architectural compliance. The Implementation & Capacity TWG provides quarterly regional coordination. Standardised project lifecycle practices (aligned with GEATDM IMPLEMENT phase) govern all digital health projects. |
| **Gap** | No MoH-internal digital health project management function. Dependence on donor programme structures that are time-limited. No project portfolio management. No standardised methodology. The EHSSP closure in August 2025 creates an immediate capacity gap for ongoing system management. |
| **Severity** | **High** |
| **Priority** | **Must** — W1. Must be addressed concurrently with DHDD establishment (BUS-01) to ensure transition of EHSSP-managed functions to MoH leadership. |

---

#### BUS-05: Stakeholder and Change Management

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | Healthcare professional EHR readiness is ~90% (2022 survey), indicating generally positive attitudes toward digitalisation. However, ~90% of facilities use paper-based clinical registers, suggesting that readiness has not translated into adoption. Change management for system deployments has been donor-led (e.g., EHSSP for eCRVS, Vaxa for SPT). No MoH-owned change management framework exists. No systematic digital literacy programme for health workers. Training is system-specific and project-funded. |
| **TO-BE** | DHDD's Capacity Building functional area leads a systematic digital health change management programme. This includes digital literacy baseline assessment and progressive training for all health workers, role-based training for system users (EHR, DHIS2 Tracker, e-NHIS), facility-level change champions, and structured rollout methodologies (training-of-trainers, mentorship, post-deployment support). The Implementation & Capacity TWG coordinates regional implementation. |
| **Gap** | No MoH-owned change management framework. Digital literacy and system training are project-specific and donor-funded, creating sustainability risk. The ~90% EHR readiness has not been maintained or converted into actionable training. No facility-level change champion network exists. The gap between readiness (~90%) and actual digital adoption (8% of facilities) represents a significant implementation failure that new deployments must learn from. |
| **Severity** | **Medium** |
| **Priority** | **Should** — W1–W2. Begins with DHDD capacity building function in W1; scales with system rollouts in W2. |

---

## 2.2.2 Data Architecture Gaps

#### DAT-01: Master Patient Index (MPI)

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | No Master Patient Index exists. Patients are identified independently in each system: eCRVS NIN (~50% population coverage, production suspended), e-NHIS scheme-specific ID, per-facility Medical Record Numbers (unstandardised), SPT child records (350,000–400,000 children registered). No cross-system patient identity resolution is possible. Manual re-keying of patient demographics occurs between systems (e.g., eCRVS→e-NHIS). Duplicate records are undetectable across systems. |
| **TO-BE** | OpenCR (open-source) serves as the MPI, providing a unified patient identity "golden record." Anchored on eCRVS NIN where available. Accepts multiple identifier types: eCRVS NIN, Immigration NIN, e-NHIS ID, facility MRNs. Deterministic matching on strong identifiers plus probabilistic matching on demographics (name, date of birth, sex, facility). Exposes FHIR Patient API for identity resolution. All patient-level systems (EHR, e-NHIS, EIR, LIS) perform MPI lookup during patient registration (IP-08). Deployed Phase 1 (core). |
| **Gap** | Complete absence of MPI. No patient identity resolution across any systems. No matching algorithms. No golden record. ~50% of the population has a foundational identifier (eCRVS NIN); remaining ~50% will require probabilistic matching only. NIN production suspension (GEN-03 dependency) limits growth of deterministic matching pool. OpenCR must be procured, configured, seeded with existing identifiers (from eCRVS, e-NHIS, SPT), and integrated with all patient-level systems. |
| **Severity** | **Critical** |
| **Priority** | **Must** — W1 (core deployment), W2 (full integration). MPI is the foundational shared service on which patient-level interoperability depends. |

---

#### DAT-02: National Health Data Dictionary

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | No national health data dictionary exists. Each system defines its own data elements independently: DHIS2 has its own indicator definitions, eCRVS uses CRVS-specific fields, e-NHIS defines its own benefit package coding, SPT uses immunisation-specific data elements, A-LIS uses local test catalogues. No shared definitions for common data elements (patient demographics, facility identifiers, diagnosis codes, service codes). A recent HIS assessment found about half of data sources adequate, partly attributable to inconsistent definitions. |
| **TO-BE** | DHDD maintains a National Health Data Dictionary governing all health information systems. The dictionary defines standardised data elements, value sets, and validation rules. It is maintained through the Data Standards & Governance TWG. All new systems and system modifications must conform to the data dictionary. The dictionary is version-controlled and published. |
| **Gap** | No data dictionary exists. No standardised data element definitions across systems. No governance process for data element approval or change management. Creating the initial dictionary requires harmonisation across 8+ existing systems — a significant analytical and consensus-building effort. |
| **Severity** | **High** |
| **Priority** | **Must** — W1 (initial dictionary for priority integration flows), W2 (comprehensive dictionary). The initial version should focus on data elements required for the six priority integration flows. |

---

#### DAT-03: Health Terminology Services

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | No standardised health terminology services exist. No ICD coding is systematically applied (though ICD-10 is nominally used in some facilities). No LOINC coding for laboratory tests — A-LIS uses local test catalogues. No SNOMED CT or ATC adoption. No central terminology server. Diagnosis and procedure coding are inconsistent across facilities and systems. |
| **TO-BE** | A FHIR-native Terminology Service (OCL, open-source) provides national terminology management. Phased adoption: ICD-11 (Phase 1, priority), LOINC (Phase 1, laboratory), SNOMED CT GPS (Phase 2, clinical), ATC (Phase 2, pharmaceutical). The terminology service exposes FHIR ValueSet and CodeSystem APIs for system integration. DHDD manages terminology governance; the Data Standards & Governance TWG reviews and approves terminology changes. |
| **Gap** | No terminology service platform. No standardised coding in current systems. ICD-11 migration requires training and mapping from informal ICD-10 use. LOINC adoption requires mapping A-LIS local test catalogues. SNOMED CT GPS adoption requires licensing and configuration. No terminology governance process exists. |
| **Severity** | **Medium** |
| **Priority** | **Should** — W1 (ICD-11 + LOINC for priority systems), W2 (SNOMED CT GPS + ATC). Terminology services are important for interoperability but can be phased behind HIE and MPI deployment. |

---

#### DAT-04: Data Quality Framework

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | Data quality is a recognised challenge but lacks systematic management. A recent HIS assessment found about half of data sources adequate and limited data use resources. DHIS2 reporting completeness and timeliness are variable. SPT achieves >99% data accuracy through its structured scanning process, but this is system-specific. e-NHIS reports >95% beneficiary satisfaction and ~90% quality of care scores, but these measure service quality not data quality. No systematic data quality assessment programme exists across health systems. No data quality indicators or dashboards. |
| **Gap** | No systematic data quality framework. No defined data quality indicators. No regular data quality assessments. No automated quality checks or validation rules across systems. Quality is measured ad hoc and per-system. The transition from paper (~90% of facilities) to electronic systems will generate data quality challenges (incomplete migration, duplicate entry, learning curve errors) that require proactive management. |
| **TO-BE** | DHDD implements a data quality framework with defined indicators (completeness, timeliness, accuracy, consistency, uniqueness), regular quality assessments (quarterly data quality reviews by Data Standards & Governance TWG), automated validation rules in all systems, data quality dashboards, and facility-level quality feedback loops. |
| **Severity** | **Medium** |
| **Priority** | **Should** — W1 (DHIS2 quality baseline + indicators), W2 (comprehensive framework across all systems). |

---

#### DAT-05: Health Data Warehouse and Analytics

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | DHIS2 serves as the primary analytical platform for aggregate health data but is limited to its own data domain. No cross-system analytics capability exists. No data warehouse. No ability to correlate data across DHIS2, e-NHIS, eCRVS, SPT, or A-LIS for comprehensive health analytics. The recent assessment found limited data use resources, indicating that even available data is underutilised. |
| **TO-BE** | Phased analytics architecture: Phase 1 (2026–2028) DHIS2 as primary analytical engine; Phase 2 (2028–2030) DHIS2 enhanced with lightweight PostgreSQL/Superset for cross-system analytics; Phase 3 (2030–2033) dedicated health data warehouse if justified at 2029 review. All analytics operate on de-identified data (Tiers 1–2 in data classification), hosted on sovereign or hybrid infrastructure. |
| **Gap** | No cross-system analytics. No data warehouse. DHIS2 analytics limited to aggregate domain. No capacity for patient-journey analytics, insurance utilisation analysis, or comprehensive epidemiological analysis combining clinical, laboratory, and surveillance data. |
| **Severity** | **Medium** |
| **Priority** | **Could** — W2 (cross-system analytics), W3 (data warehouse). DHIS2 analytics in W1 are adequate for initial needs; cross-system analytics become valuable as HIE integration matures. |

---

#### DAT-06: Data Stewardship Staffing

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | No formal data stewardship roles exist at any level. The HMIS team manages DHIS2 data operationally but without a formal data stewardship mandate. No Regional Health Data Officers exist — the 7 health regions have limited data management capacity. Facility-level data focal persons are informal and unsupported. Data governance, quality, and standards are no one's defined responsibility. |
| **TO-BE** | Three-level data stewardship: National level — DHDD staffs Chief Data Steward, DHIS2 Data Manager, Integration Data Steward, Health Information Security Officer (4 positions). Regional level — 7 Regional Health Data Officers (phased 2026–2028). Facility level — designated data focal persons at each of the ~90 facilities with defined responsibilities and training. Total new data stewardship positions: ~14 (4 national + 7 regional + coordination for ~90 facility focal persons). |
| **Gap** | Zero formal data stewardship positions exist. The 4 national positions require recruitment and training. The 7 regional positions represent new roles not currently budgeted. Facility focal persons exist informally but lack mandate, training, or tools. Total staffing gap is ~14 dedicated data stewardship roles, plus formalisation of ~90 facility-level roles. |
| **Severity** | **High** |
| **Priority** | **Must** — W1 (national positions as part of DHDD, begin regional recruitment), W2 (complete regional deployment, formalise facility roles). |

---

## 2.2.3 Application Architecture Gaps

#### APP-01: Health Information Exchange (HIE)

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | No health information exchange platform exists. Integration maturity is Level 1 (Ad-hoc). The sole automated integration flow in MoH is SPT→DHIS2 for aggregate immunisation data. All other data exchange is manual: paper forms physically transported between facilities and districts, re-keying of data between systems, no middleware or API management. No integration standards are applied. No audit logging of data exchange. |
| **TO-BE** | OpenHIM (open-source) serves as the national Health Information Exchange — the integration backbone for all MoH systems. Hub-and-spoke architecture with all inter-system flows mediated through OpenHIM. Capabilities include message routing, data transformation, transaction audit logging (7-year retention), error handling with queue and retry, and API management. Integration maturity progresses from Level 1 to Level 3–4 (mediated/event-driven) by 2030. Daily transaction volume scales from current ~0 to 20,000–50,000 (Phase 3) to 50,000–100,000+ (Phase 4). |
| **Gap** | Complete absence of HIE platform. No middleware. No API management. No integration standards enforcement. No audit trail for data exchange. No transformation or routing capability. OpenHIM must be procured, deployed, configured with mediators for each integration flow, and connected to all target systems. This is the single largest technical deployment in the target architecture. |
| **Severity** | **Critical** |
| **Priority** | **Must** — W1 (core deployment + 2 priority flows), W2 (remaining flows + full mediation). HIE is the technical backbone on which all integration flows depend. |

---

#### APP-02: Electronic Health Record (EHR) System

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | ~90% of public health facilities use paper-based clinical registers. Only NMRI Progressa (autonomous, research-focused) and a private hospital have operational EHR systems. The public health system has 60% unavailability of EHR. Healthcare professional readiness for EHR is ~90% (2022 survey). No public-sector EHR has been piloted or deployed. Clinical data for the vast majority of patients exists only on paper and is not available for secondary use, quality improvement, or continuity of care. |
| **TO-BE** | OpenMRS (open-source) deployed as the national public-sector EHR. Vertical-first strategy: maternal health + HIV/ART workflows at 15–20 priority facilities (Phase 1), expanding to 30–40 facilities (Phase 2). EHR features include clinical encounter documentation, patient registration with MPI lookup, FHIR-based integration with HIE, offline-first capability, ICD-11 diagnosis coding, and LOINC-coded laboratory ordering. All EHR deployments require minimum 2 Mbps connectivity and MPI integration. |
| **Gap** | Zero public-sector EHR deployment. ~90% paper-based clinical records. No OpenMRS instance exists. No clinical workflow analysis for maternal health or HIV/ART pathways has been completed for Progressa context. No EHR-trained clinical informaticists or support staff. Hardware (tablets, workstations) not procured for any facilities. The gap from zero to 30–40 facilities requires new system deployment, clinical workflow design, extensive training, hardware procurement, and sustained support — estimated as the most resource-intensive application gap. |
| **Severity** | **Critical** |
| **Priority** | **Must** — W1 (pilot at 5–8 facilities), W2 (expand to 30–40). EHR is essential for patient-level clinical data capture, a prerequisite for evidence-based care, and a major driver of the target integration architecture. |

---

#### APP-03: Electronic Immunisation Registry (EIR) — SPT to DHIS2 Tracker Transition

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | SPT (scanned paper tracking by Vaxa Foundation) is operational at all ~90 facilities since 2022. Performance is strong: 350,000–400,000 children registered, 100,000–150,000 fully vaccinated, 200,000–250,000 SMS follow-ups sent, >99% data accuracy, 60% administrative time reduction. SPT uses a hybrid paper-digital model (scanned paper forms → regional scanning → digital register). SPT→DHIS2 is the sole operational automated integration in MoH. SPT is hosted on Vaxa cloud (external). Scanning introduces lag — no real-time decision support at point of care. Dependency on scanning infrastructure and Vaxa platform. |
| **TO-BE** | DHIS2 Tracker serves as the national Electronic Immunisation Registry per WHO Digital Adaptation Kit (DAK) for immunisation. Phased transition: pilot DHIS2 Tracker EIR alongside SPT (Phase 1), scale to national coverage (Phase 2), retire SPT (Phase 3). DHIS2 Tracker EIR provides real-time point-of-care decision support (defaulter tracking, schedule alerts), offline-first capability, FHIR-based integration with HIE, MPI lookup for child identity, and native DHIS2 aggregate reporting (eliminating the separate SPT→DHIS2 flow). |
| **Gap** | Transition from a well-functioning system (SPT) to a more capable platform (DHIS2 Tracker) — not a failure remediation but a strategic upgrade. Key gaps: no DHIS2 Tracker EIR configuration exists for Progressa immunisation schedule; no WHO DAK implementation has been completed; facility-level hardware (tablets) required for real-time use; staff retraining from paper-scanning workflow to tablet-based workflow; data migration of 350,000–400,000 child records from SPT to DHIS2 Tracker; contractual and transition planning with Vaxa Foundation. Risk of service disruption during transition must be carefully managed given SPT's critical public health role. |
| **Severity** | **High** |
| **Priority** | **Should** — W1 (pilot DHIS2 Tracker EIR at 10–15 facilities), W2 (national rollout), W3 (SPT retirement). The SPT system works well; transition must be managed carefully to avoid disruption to immunisation programme. |

---

#### APP-04: Electronic Integrated Disease Surveillance and Response (IDSR+)

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | IDSR is established nationally with strong coverage metrics: 90% of facilities have standard case definitions, ~90% have IDSR-trained focal persons, 100% of target for case detection within 7 days achieved. However, ~90% of facilities use paper-based clinical registers for surveillance. Surveillance is exclusively Indicator-Based (IBS) — no Event-Based Surveillance (EBS) or Community-Based Surveillance (CBS). Private facilities lag: 33% lack standard case definitions. The electronic IDSR system has been established and validated (EHSSP PDO achieved), but routine case-based reporting is still predominantly paper. |
| **Gap** | Paper-based surveillance (~90%) despite validated electronic platform. No case-based electronic reporting at scale. No Event-Based or Community-Based Surveillance capability. Private sector surveillance gaps (33% without standard case definitions). The gap is primarily one of scale and adoption — the platform foundation exists but facility-level digitalisation is minimal. |
| **TO-BE** | DHIS2 Tracker extended for electronic case-based IDSR reporting nationally. All facilities submit case-based notifications electronically (offline-first). EBS capability deployed (Africa CDC EMS or DHIS2 Events, Phase 2). CBS through USSD/mobile app with CHW tools (Phase 3). IDSR+ integrates with HIE: laboratory result→surveillance notification flow automated. Private sector compliance enforced. |
| **Severity** | **High** |
| **Priority** | **Must** — W1 (pilot electronic case-based IDSR+ at 20–30 facilities), W2 (national scale), W3 (EBS + CBS). Disease surveillance is a critical public health function where paper-based processes create dangerous reporting delays. |

---

#### APP-05: e-NHIS Enhancement and Scaling

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | e-NHIS launched as a pilot (the national MCH Hospital), then rolled out nationally. Current enrollment: 15,000–20,000 beneficiaries against a target of 60,000 — ~30% achieved. Contracted facilities: 69 (expanded from initial 13). 19 essential health interventions covered (maternal/newborn focus). Fee-for-service reimbursement model. Performance indicators are positive: >95% beneficiary satisfaction, ~90% quality of care score. However: no eCRVS integration (planned for August 2025, not delivered), no offline claims processing, limited rural coverage, urban-centric enrollment. |
| **TO-BE** | e-NHIS enhanced with: mobile enrollment, offline claims processing, eCRVS integration (auto-enrollment at birth registration via MPI), expanded to ≥60,000 beneficiaries. Three HIE integration flows: (1) eCRVS→MPI→e-NHIS enrollment, (2) e-NHIS↔EHR eligibility verification and claims via HIE, (3) e-NHIS→IFMIS financial reconciliation. Service package expanded. Rural coverage extended through mobile enrollment teams and offline-capable claims processing at remote facilities. |
| **Gap** | Enrollment at ~30% of target (gap: 40,000–45,000 beneficiaries). No eCRVS integration despite August 2025 target — the most critical undelivered integration. No offline claims processing — blocking rural expansion. No mobile enrollment capability. No HIE integration (standalone system). Rural coverage inadequate. The 40,000–45,000 enrollment gap requires both technical enhancements (mobile, offline, integration) and operational expansion (enrollment campaigns, facility contracting). |
| **Severity** | **Critical** |
| **Priority** | **Must** — W1 (eCRVS integration via MPI, offline claims, mobile enrollment), W2 (HIE integration, scale to 60,000+). Health insurance expansion is a presidential priority and key equity indicator. |

---

#### APP-06: Laboratory Information System (A-LIS) Strengthening

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | A-LIS guidelines published January 2023. Deployment is in early pilot phase at limited facilities. Features include electronic test requests, result reports, patient history, HMIS data values, and supplies management. DHIS2 integration is limited and partial. No connection to EHR or HIE. No standardised laboratory coding (no LOINC). Weak laboratory information management overall. The National Reference Laboratory (NRL) and 5 regional hospitals are the target deployment sites, but current coverage is minimal. |
| **TO-BE** | A-LIS (or OpenELIS alternative) deployed at NRL + 5 regional hospitals (Phase 1), expanding to additional facilities (Phase 2). LOINC coding adopted for test catalogues. FHIR-based integration with HIE for automated laboratory result→surveillance notification flow and laboratory result→EHR flow. Supplies management integrated with eLMIS. Full DHIS2 integration for aggregate laboratory statistics. |
| **Gap** | Minimal deployment (pilot only vs. target NRL + 5 regional hospitals). No LOINC coding. No FHIR capability. Limited DHIS2 integration. No HIE integration. No connection to EHR or surveillance systems. The gap requires both scaling the existing A-LIS platform and modernising it with standards-based interfaces and coding. Platform evaluation may be needed — if A-LIS cannot support FHIR/LOINC requirements, OpenELIS may be a more suitable alternative. |
| **Severity** | **High** |
| **Priority** | **Should** — W1 (NRL + 2 regional hospitals, LOINC mapping), W2 (5 regional hospitals, HIE integration). Laboratory systems are important for surveillance and clinical decision support but can be phased behind HIE, MPI, and EHR. |

---

#### APP-07: Electronic Logistics Management Information System (eLMIS)

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | SMS for Health has been operational since 2010 at 50 clinics, 6 regional medical stores, and 5 hospitals. Provides basic stock-level notifications via standard mobile phone SMS: medication supply tracking, expiry monitoring, disease incidence data, drug stock reports. No forecasting capability. No order management. No distribution tracking. No integration with procurement or financial systems. Technology is obsolete (SMS-based, 2010 era). Coverage is partial (50 of ~90 facilities for clinics). |
| **TO-BE** | OpenLMIS (or mSupply) deployed as the national eLMIS, replacing SMS for Health. Full facility coverage across all ~90 facilities. Features include electronic requisitioning, consumption-based forecasting, distribution tracking, expiry management, integration with DHIS2 for supply chain indicators, and FHIR-based integration with HIE. Phased deployment: Phase 2 (primary rollout), Phase 3 (full coverage and SMS for Health retirement). |
| **Gap** | SMS for Health provides only basic stock notifications with no analytical, forecasting, or order management capability. Gap from basic SMS alerts to full eLMIS is substantial: new platform procurement and deployment, data migration, facility training, integration with procurement systems, and supply chain workflow redesign. Coverage gap: 50 clinics vs. ~90 facilities. Technology gap: SMS-based vs. web/mobile application with offline capability. |
| **Severity** | **Medium** |
| **Priority** | **Could** — W2 (pilot at regional medical stores + select facilities), W3 (national rollout, SMS for Health retirement). Supply chain digitalisation is important but lower priority than clinical systems, surveillance, and insurance. |

---

#### APP-08: DHIS2 Aggregate HMIS Strengthening

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | DHIS2 is operational nationally at all health facilities for aggregate health data reporting. It is the most mature digital health system in MoH, in operation since 2010 with progressive expansion. However, reporting completeness and timeliness are variable. Tracker module usage is limited to COVID-19 (not sustained for routine use). Advanced analytics capabilities are underutilised. No integration with other systems except SPT→DHIS2. HMIS team capacity is limited to basic operations. |
| **TO-BE** | DHIS2 strengthened as the anchor platform: ≥95% reporting completeness and timeliness across all facilities. Tracker module expanded for EIR, IDSR+, and RMNCH. Enhanced analytics with dashboards for programme management. Integration with HIE for aggregate data from EHR, LIS, and other clinical systems. Facility Registry (Org Units) exposed as canonical registry via mCSD FHIR interface. Hosting migrated to G-Cloud (Phase 2). |
| **Gap** | Completeness and timeliness below 95% target. Tracker module not used for routine programmes (only COVID-19 pilot). Limited analytics exploitation. No FHIR interface for Facility Registry (mCSD). No HIE integration (except SPT→DHIS2). Staff capacity limited to basic operations, not Tracker configuration or advanced analytics. DHIS2 version may require upgrade to support FHIR and Tracker requirements. |
| **Severity** | **High** |
| **Priority** | **Must** — W1 (strengthen aggregate, begin Tracker pilots for EIR/IDSR+, develop mCSD interface), W2 (scale Tracker, full HIE integration). DHIS2 is the foundation of health information management and the most critical system to protect and strengthen. |

---

#### APP-09: eCRVS System Integration

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | eCRVS/CIVIS launched recently. Coverage: about 1 million registrations, ~50% population (March 2023). Features include electronic birth/death registration, NIN assignment, and QR code verification. However, the system is completely siloed — no operational integration with any other system. The planned eCRVS→e-NHIS integration targeted for August 2025 has not been delivered. No API endpoints are exposed for external system consumption. No FHIR interface. The eCRVS NIN is not available to health systems for patient identification despite being the designated foundational identifier. |
| **TO-BE** | eCRVS integrated into health ecosystem through 3 HIE flows: (1) Birth notification→MPI (OpenCR) for patient identity seeding, (2) Birth notification→e-NHIS for automated insurance enrollment, (3) Death notification→MPI for record closure. eCRVS NIN serves as the primary patient identifier across all health systems via MPI lookup. FHIR interface or FHIR Façade enables standards-based integration. |
| **Gap** | eCRVS is completely siloed despite 2+ years of operation. No API endpoints available. No FHIR interface. The August 2025 eCRVS→e-NHIS integration has failed to materialise — indicating either technical, contractual, or governance barriers with the eCRVS vendor (Civitas Group). This gap blocks the Priority 1 integration flow and undermines the MPI strategy. Resolving this gap requires engagement with the eCRVS team, Civitas Group, and potentially RDIP governance — making it partially a cross-sectoral coordination challenge despite being a health-sector priority. |
| **Severity** | **Critical** |
| **Priority** | **Must** — W1. The eCRVS→MPI→e-NHIS flow is the Priority 1 integration and must be unblocked. This requires direct escalation to NDHSC and RDIP governance if technical/contractual barriers persist. |

---

## 2.2.4 Technology Architecture Gaps

#### TEC-01: Sovereign Health Data Hosting (Interim)

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | MoH systems are hosted across 6+ fragmented arrangements: DHIS2 on central HMIS servers (ProgTel infrastructure), eCRVS on Civitas Group hosting (external, outside Progressa), e-NHIS on external cloud (likely outside Progressa), SPT on Vaxa cloud (external), A-LIS on local pilot facility servers, IDSR paper-based (no hosting). No MoH systems are hosted on sovereign infrastructure within Progressa's borders, except possibly DHIS2 (ProgTel). Patient-identifiable data (eCRVS records, e-NHIS enrollment, SPT immunisation records) is stored outside national borders, violating the D6 data sovereignty requirements. |
| **TO-BE** | All identifiable health data hosted on sovereign infrastructure (G-Cloud) within national borders. Transitional hosting strategy: pre-2027 maintain current arrangements with enhanced security; 2027–2028 sequential migration to G-Cloud (OpenHIM/OpenCR first → DHIS2 → e-NHIS/eCRVS endpoints). 60-day parallel-run for each migration. |
| **Gap** | G-Cloud is not yet available (GEN-01 dependency). During the interim period (2025–2027), MoH must deploy new systems (OpenHIM, OpenCR, HAPI FHIR) somewhere. The gap is the absence of appropriate interim sovereign hosting for these new central services. PDGA DC is the best available interim option but has limited capacity. Patient data continues to reside outside national borders in vendor-managed environments. |
| **Severity** | **High** |
| **Priority** | **Must** — W1 (interim hosting arrangement for OpenHIM/OpenCR/HAPI FHIR), W2 (G-Cloud migration). Cannot deploy the HIE without hosting. |

---

#### TEC-02: Facility Connectivity and Offline-First Capability

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | Health facilities are connected via EHSSP-funded satellite internet — but funding ends August 2025. RDIP terrestrial broadband is under construction but not yet reaching health facilities (target 2027–2028 for last-mile). ~60% national electricity access. Mobile connectivity: ~70% internet penetration, but insufficient for reliable health system operations. No MoH systems currently implement offline-first design — DHIS2 has offline capability but it is not systematically enabled or relied upon. SPT works offline by design (paper scanning), but DHIS2, e-NHIS, and A-LIS require connectivity. |
| **TO-BE** | All frontline health applications implement offline-first design: local storage, background synchronisation, graceful degradation. Bandwidth targets: 2 Mbps per facility (Phase 1), 5 Mbps (Phase 2), 10+ Mbps (Phase 3). RDIP broadband progressively replaces satellite. Mobile data (4G) serves as transitional connectivity. All new system procurements require offline-first capability as mandatory (D6 Section 4.3). |
| **Gap** | Immediate connectivity risk (August 2025 EHSSP closure). Offline-first is a design principle but not implemented in any current system at scale. New systems (OpenMRS, DHIS2 Tracker EIR/IDSR+, e-NHIS mobile) must be deployed with offline-first from day one. Gap period 2025–2028 between satellite funding cessation and broadband availability requires bridge solution. About 40% of the population (and their nearby facilities) lack reliable electricity — requiring solar/battery power solutions for facility ICT. |
| **Severity** | **Critical** |
| **Priority** | **Must** — W1 (bridge connectivity, offline-first enforcement for all new deployments), W2 (broadband rollout to facilities). Loss of facility connectivity would disable existing digital health systems. |

---

#### TEC-03: Health Sector Cybersecurity

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | National cybersecurity posture is weak: ITU Global Cybersecurity Index score of around 30, in the lower half globally. No comprehensive data protection legislation. No government-wide security standards. Limited multi-factor authentication — most systems use password-only access. No enterprise IAM — each system (DHIS2, eCRVS, e-NHIS, SPT, A-LIS) manages its own user authentication and authorisation independently. No unified security monitoring for health systems. No health-sector security incident response plan. The national CSIRT and a security operations centre exist but are not specifically engaged for health systems. |
| **TO-BE** | Keycloak provides enterprise IAM/SSO across all MoH systems (OpenID Connect / OAuth 2.0). MFA enforced for all administrative and clinical system access. Health-specific security policies and procedures documented. Health Information Security Officer role in DHDD. API security: mTLS + OAuth 2.0 for all HIE integration flows. Rate limiting and monitoring (Prometheus/Grafana) for all APIs. Audit logging with 7-year retention (OpenHIM). Security incident response plan aligned with national CSIRT. Regular security assessments and penetration testing. |
| **Gap** | No enterprise IAM/SSO (each system has independent user management). No MFA enforcement. No unified security monitoring. No health-specific security officer or policies. No security incident response plan for health systems. Deploying the HIE (which mediates patient data across all systems) without adequate security creates unacceptable risk — the HIE becomes a high-value target that concentrates previously distributed risk. |
| **Severity** | **High** |
| **Priority** | **Must** — W1 (Keycloak deployment, security policies, HISO role in DHDD), W2 (full IAM/SSO integration, MFA, security monitoring). Security must be built into the HIE from deployment, not retrofitted. |

---

#### TEC-04: Disaster Recovery and Business Continuity

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | No MoH disaster recovery (DR) plan exists. No documented backup strategy across health systems. Backup practices are system-specific and informal (DHIS2 team likely performs backups, but no documented schedule, testing, or offsite storage). eCRVS and e-NHIS DR is managed by external vendors (Civitas Group, cloud provider) — MoH has no visibility or control. SPT DR managed by Vaxa. A-LIS at pilot facilities has no backup. Single submarine cable is a single point of failure for all internet-dependent systems. No business continuity plan for digital health services. |
| **TO-BE** | Comprehensive DR and business continuity: automated daily backups for all systems, offsite backup storage (separate from primary hosting), documented and tested recovery procedures, defined Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) per system, annual DR testing. G-Cloud provides infrastructure-level DR. Business continuity plan ensures paper-based fallback procedures for clinical services when systems are unavailable. |
| **Gap** | No formal DR plan. No documented backup strategy. No RTO/RPO definitions. No DR testing. No business continuity plan. Dependency on vendor-managed DR for critical systems (eCRVS, e-NHIS, SPT) without MoH oversight or contractual SLAs. As MoH deploys more central services (HIE, MPI, EHR), the impact of system failure increases — making DR a progressively more critical requirement. |
| **Severity** | **High** |
| **Priority** | **Should** — W1 (DR plan for DHIS2 and new central services), W2 (comprehensive DR across all systems, annual testing). |

---

#### TEC-05: Monitoring and Observability

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | No unified monitoring of health system infrastructure or applications. No system availability tracking. No performance metrics collection. No alerting for system failures. Each system is monitored (if at all) by its respective team or vendor. MoH has no visibility into system performance, uptime, or capacity utilisation across its digital health portfolio. |
| **TO-BE** | Unified monitoring stack: Prometheus (metrics collection), Grafana (dashboards and visualisation), Loki (log aggregation). All MoH systems instrumented with standard metrics endpoints. Integration monitoring (OpenHIM transaction dashboard). Alert rules for system failures, performance degradation, and capacity thresholds. Monitoring deployed across all hosting environments regardless of physical location. |
| **Gap** | No monitoring infrastructure. No metrics collection. No dashboards. No alerting. No log aggregation. The Prometheus/Grafana/Loki stack must be deployed and all systems instrumented. This requires both infrastructure (hosting for monitoring stack) and configuration (metrics endpoints, dashboard design, alert rules). |
| **Severity** | **Medium** |
| **Priority** | **Should** — W1 (monitoring for OpenHIM, OpenCR, DHIS2), W2 (all systems). Deploy concurrently with HIE to ensure operational visibility from day one. |

---

#### TEC-06: Containerisation and Deployment Automation

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | No MoH systems are containerised. DHIS2 runs on traditional server deployment. eCRVS, e-NHIS, and SPT are vendor-managed (containerisation status unknown to MoH). A-LIS on bare-metal pilot servers. No DevOps practices. No CI/CD pipelines. No infrastructure-as-code. No container registry. Deployments are manual and undocumented. |
| **TO-BE** | All MoH systems containerised (Docker) with Kubernetes orchestration on G-Cloud (or Docker Compose on interim infrastructure). Per-container deployment for mediators. Container registry for approved images. CI/CD pipelines for automated testing and deployment. Infrastructure-as-code for reproducible environments. D6 specifies containerisation strategy for all central services (OpenHIM, OpenCR, HAPI FHIR, Terminology Service, custom mediators, monitoring stack). |
| **Gap** | No containerisation of any MoH system. No DevOps capability. No CI/CD. No container registry. Existing systems (DHIS2) require containerisation effort. New systems (OpenHIM, OpenCR, etc.) can be deployed in containers from the start, but this requires Docker/Kubernetes skills not present in MoH. Interim Docker Compose deployment requires different but overlapping skillset from target Kubernetes. |
| **Severity** | **Medium** |
| **Priority** | **Should** — W1 (Docker Compose for all new deployments; begin DHIS2 containerisation), W2 (G-Cloud migration with Kubernetes). Containerisation is the prerequisite for G-Cloud readiness. |

---

## 2.2.5 Integration Architecture Gaps

#### INT-01: Priority Flow 1 — Birth Registration → MPI → NHIS Enrollment

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | eCRVS registers about 1 million births/deaths (~50% population coverage). e-NHIS has 15,000–20,000 beneficiaries. No integration between eCRVS and e-NHIS. The planned August 2025 integration has not been delivered. Birth registration and insurance enrollment are entirely separate processes requiring families to register twice with redundant data entry. No MPI exists to mediate identity. |
| **TO-BE** | Automated flow: eCRVS birth notification → OpenHIM → OpenCR (MPI, create/update golden record, assign health ID) → e-NHIS (auto-enrollment of newborn as beneficiary). Eliminates manual re-entry. Ensures every registered birth triggers insurance coverage. Requires eCRVS FHIR API (or Façade), OpenHIM mediator, OpenCR MPI, e-NHIS enrollment API. |
| **Gap** | No component of this flow exists. No eCRVS API. No MPI. No HIE mediator. No e-NHIS enrollment API. No data mapping between eCRVS and e-NHIS data models. The August 2025 integration failure suggests barriers (technical, contractual, governance) that must be identified and resolved. This flow has the highest health equity impact — automating insurance enrollment at birth directly addresses the 40,000–45,000 enrollment gap. |
| **Severity** | **Critical** |
| **Priority** | **Must** — W1. Highest-priority integration flow. |

---

#### INT-02: Priority Flow 2 — Immunisation Recording → Aggregate Reporting

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | SPT→DHIS2 is the sole operational automated integration in MoH. It works: aggregate immunisation data flows from SPT to DHIS2. However, this is a batch/file-based flow specific to the SPT platform. When EIR transitions to DHIS2 Tracker, this flow becomes internal to DHIS2 (Tracker→Aggregate). |
| **TO-BE** | DHIS2 Tracker EIR provides native integration with DHIS2 Aggregate — Tracker data automatically aggregates through DHIS2's built-in programme-to-aggregate functionality. This eliminates the need for the external SPT→DHIS2 integration flow. During transition, both flows operate in parallel (SPT→DHIS2 at non-pilot sites; DHIS2 Tracker→Aggregate at pilot sites). |
| **Gap** | The gap is not in the current flow (which works) but in the transition: maintaining aggregate reporting continuity during SPT→DHIS2 Tracker migration. DHIS2 Tracker EIR must be configured with programme indicators that match current DHIS2 aggregate data elements. Parallel reporting must not create double-counting. Migration plan must ensure zero data loss. |
| **Severity** | **High** |
| **Priority** | **Must** — W1 (pilot), W2 (national). Must maintain uninterrupted aggregate immunisation reporting throughout transition. |

---

#### INT-03: Priority Flow 3 — Laboratory Result → Surveillance Notification

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | Laboratory results are communicated to surveillance through paper-based processes. A-LIS (where deployed) has limited DHIS2 integration. No electronic notification of notifiable disease laboratory confirmations to the IDSR system. Laboratory confirmation of epidemic-prone diseases (cholera, meningitis, measles) relies on phone calls, paper forms, and physical sample/result transport. Turnaround time from laboratory confirmation to surveillance notification can be days. |
| **TO-BE** | Automated flow: A-LIS/OpenELIS → OpenHIM → DHIS2 Tracker IDSR+ (automatic case notification when laboratory result confirms notifiable condition). LOINC-coded test results. FHIR-based Observation resource triggers IDSR+ case alert. Reduces notification time from days to minutes for laboratory-confirmed cases. |
| **Gap** | No electronic laboratory-to-surveillance link. A-LIS has no FHIR interface. IDSR+ (DHIS2 Tracker) not yet deployed for routine case-based reporting. No LOINC coding to enable automated result interpretation. No OpenHIM mediator for this flow. The flow depends on both A-LIS FHIR capability (APP-06) and IDSR+ deployment (APP-04). |
| **Severity** | **High** |
| **Priority** | **Should** — W2. Depends on A-LIS strengthening (APP-06) and IDSR+ deployment (APP-04), both starting in W1 but reaching integration readiness in W2. |

---

#### INT-04: Priority Flow 4 — Clinical Encounter → Aggregate Reporting

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | Clinical data is captured on paper registers at ~90% of facilities. Aggregate data is manually compiled from registers and entered into DHIS2. This process is slow, error-prone, and creates the completeness and timeliness gaps documented in D5. No electronic clinical-to-aggregate reporting exists in the public health system. |
| **TO-BE** | Automated flow: OpenMRS (EHR) → OpenHIM → DHIS2 Aggregate. Clinical encounters documented in EHR automatically generate aggregate indicators. FHIR-based data extraction using FHIR Measure and MeasureReport resources. Eliminates manual tally and data entry for EHR-equipped facilities. Improves data quality, timeliness, and completeness. |
| **Gap** | No EHR exists in public facilities (APP-02 dependency). No FHIR-based aggregate extraction configured. No OpenHIM mediator for this flow. The flow depends entirely on EHR deployment and requires FHIR indicator definitions that map clinical encounters to DHIS2 aggregate data elements. Initial impact limited to 15–20 EHR facilities (Phase 1), expanding to 30–40 (Phase 2). |
| **Severity** | **High** |
| **Priority** | **Should** — W2. Depends on EHR pilot (APP-02) reaching operational maturity. |

---

#### INT-05: Priority Flow 5 — Insurance Eligibility Verification and Claims

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | e-NHIS eligibility verification and claims processing are standalone processes within the e-NHIS platform. At facilities without e-NHIS terminals, verification is manual. No integration with EHR — clinicians cannot verify insurance status during clinical encounters. Claims are submitted through e-NHIS directly, not linked to clinical documentation. Fee-for-service reimbursement with no electronic adjudication against clinical records. |
| **TO-BE** | Bidirectional flow: e-NHIS ↔ OpenMRS (EHR) via OpenHIM. Clinician initiates eligibility check from EHR during patient encounter (real-time via HIE). Eligible services are pre-authorised. Claims are generated from clinical documentation in EHR and submitted to e-NHIS via HIE. This links clinical data to insurance claims, reduces fraud risk, improves clinician workflow, and ensures services rendered are accurately claimed. |
| **Gap** | No EHR-to-NHIS integration. No real-time eligibility verification. No clinical-data-linked claims submission. The flow depends on EHR deployment (APP-02) and e-NHIS API development (APP-05). Requires definition of eligibility query API, claims submission API, and mapping between EHR clinical data and e-NHIS benefit package codes. |
| **Severity** | **High** |
| **Priority** | **Should** — W2. Depends on both EHR and e-NHIS reaching integration readiness. High impact for insurance programme integrity and provider payment accuracy. |

---

#### INT-06: Priority Flow 6 — National Aggregate → Regional/Global Reporting

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | DHIS2 supports aggregate data export, and some reporting to WHO/RHO occurs. However, reporting is largely manual — data is extracted, formatted, and submitted through programme-specific channels. No automated ADX-based reporting. No standardised regional/global reporting pipeline. |
| **TO-BE** | Automated flow: DHIS2 → WHO/RHO via ADX (Aggregate Data Exchange) standard. Standardised indicator sets. Automated scheduling and submission. Quality checks before transmission. DHIS2's built-in ADX support leveraged for routine reporting. Regional health data sharing within REC framework. |
| **Gap** | No automated ADX reporting. Manual extraction and formatting. No quality-gate before international submission. The gap is primarily configuration and process — DHIS2 supports ADX natively, but it must be configured for Progressa indicator sets and connected to WHO/RHO endpoints. |
| **Severity** | **Medium** |
| **Priority** | **Could** — W2–W3. Important for international obligations but not blocking internal health system operations. |

---

#### INT-07: API Standards and Governance

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | No API standards exist within MoH. No API documentation. No API versioning policy. No API security standards (beyond system-specific authentication). The sole automated integration (SPT→DHIS2) uses a platform-specific data exchange mechanism, not a standards-based API. No OpenAPI specifications. No API catalogue. No developer documentation for system integration. |
| **TO-BE** | MoH adopts comprehensive API governance: OpenAPI 3.0 documentation for all HIE-connected systems, API versioning policy (semantic versioning), API security standards (mTLS + OAuth 2.0), rate limiting, API monitoring (Prometheus/Grafana), developer portal with documentation. All integration flows use REST/JSON (transitional) or FHIR R4 (target). IHE profiles: mCSD, ATNA, PDQm. 8 integration design principles (IP-01 through IP-08) govern all integration decisions. |
| **Gap** | No API standards, documentation, versioning, or governance. No developer portal. No security standards for APIs. All 8 integration design principles are new and must be established, communicated, and enforced. This is primarily a governance and capacity gap — the DHDD must establish and maintain API governance as part of its interoperability management function. |
| **Severity** | **High** |
| **Priority** | **Must** — W1 (establish standards as part of HIE deployment), W2 (full enforcement). API standards must be in place before the first HIE integration flow goes live. |

---

## 2.2.6 Sector-Specific Gap Summary

### Gap Count by Domain and Severity

| Domain | Critical | High | Medium | Total |
|--------|----------|------|--------|-------|
| Business Architecture (BUS) | 1 | 3 | 1 | **5** |
| Data Architecture (DAT) | 1 | 3 | 2 | **6** |
| Application Architecture (APP) | 3 | 4 | 1 | **8** |
| Technology Architecture (TEC) | 1 | 3 | 2 | **6** |
| Integration Architecture (INT) | 1 | 5 | 1 | **7** |
| **Total** | **7** | **18** | **7** | **32** |

### Critical Gaps (Must Address in Wave 1)

| Gap ID | Gap | Why Critical |
|--------|-----|-------------|
| BUS-01 | Digital Health Governance (DHDD/NDHSC) | All other gaps depend on governance capacity |
| DAT-01 | Master Patient Index (MPI) | Foundation for patient-level interoperability |
| APP-01 | Health Information Exchange (HIE) | Technical backbone for all integration |
| APP-02 | Electronic Health Record (EHR) | Core clinical data capture; ~90% paper baseline |
| APP-05 | e-NHIS Enhancement and Scaling | ~30% of enrollment target; presidential priority |
| TEC-02 | Facility Connectivity & Offline-First | Connectivity loss risk August 2025 |
| INT-01 | Birth Registration→MPI→NHIS Enrollment | Highest equity-impact integration flow |

### Dependency Chain

The 32 sector-specific gaps are not independent. The critical dependency chain is:

1. **BUS-01** (Governance) enables all other gaps through coordination and decision authority
2. **TEC-02** (Connectivity) is prerequisite for any facility-level digital deployment
3. **TEC-01** (Hosting) is prerequisite for central platform deployment
4. **APP-01** (HIE) + **DAT-01** (MPI) form the shared platform layer
5. **APP-02** (EHR) + **APP-05** (e-NHIS) + **APP-03** (EIR) + **APP-04** (IDSR+) are the primary systems connecting through the platform
6. **INT-01 through INT-06** are the integration flows that deliver value by connecting systems through the platform

This dependency chain determines the Wave 1–2–3 sequencing in subsequent roadmap sections.

### Combined Gap Landscape (Generic + Sector-Specific)

Including the 6 generic/cross-sectoral gaps from Section 2.1, the total gap landscape for MoH's digital health transformation comprises:

| Category | Count |
|----------|-------|
| Generic / Cross-Sectoral (GEN) | 6 |
| Business Architecture (BUS) | 5 |
| Data Architecture (DAT) | 6 |
| Application Architecture (APP) | 8 |
| Technology Architecture (TEC) | 6 |
| Integration Architecture (INT) | 7 |
| **Total Gaps** | **38** |

Of these, 7 sector-specific gaps are rated Critical, 18 High, and 7 Medium — reflecting the magnitude of the transformation required to move from Level 1 integration maturity (Ad-hoc) and ~90% paper-based operations to the D6 target of an integrated, interoperable health information ecosystem.

---

## Section 3: Opportunities and Solutions

*TOGAF ADM Phase E — Opportunities and Solutions*

This section translates the 38 gaps identified in Sections 2.1 and 2.2 into concrete solution approaches, platform recommendations, and implementation options. For each gap cluster, the analysis identifies the solution approach (build, buy, configure, integrate, or leverage existing), recommends specific platforms with open-source justification, cites country precedents with implementation details, and distinguishes quick wins from strategic investments.

Solutions are grouped into five themes that align with the GEATDM framework and reflect the logical implementation sequence established by the dependency chain in Section 2.2.6:

1. **Governance and Policy** — institutional structures, strategies, and regulatory frameworks
2. **Data and Registries** — shared data services, patient identity, terminology, and data quality
3. **Clinical and Programme Systems** — point-of-care and programme management applications
4. **Infrastructure** — hosting, connectivity, security, and operational platforms
5. **Integration** — HIE platform, integration flows, and API governance

Each solution entry follows a standard structure: gap reference(s), solution approach, recommended platform or action, country precedents, quick wins, and strategic investments.

---

### 3.1 Governance and Policy Solutions

This theme addresses the institutional and policy foundations without which technical deployments cannot be sustained. It maps to gaps BUS-01 through BUS-05, GEN-04, and GEN-06.

---

#### 3.1.1 Digital Health Governance Establishment

**Gaps Addressed:** BUS-01 (Digital Health Governance Structure), BUS-04 (Project and Programme Management Capacity)

**Solution Approach:** Establish through administrative action — Ministerial Order, institutional design, staffing plan. No technology procurement required; this is an organisational intervention.

**Recommended Actions:**

- Draft and secure Ministerial Order establishing the National Digital Health Steering Committee (NDHSC) and the Digital Health and Data Directorate (DHDD) as specified in D6 Section 5.
- Develop Terms of Reference for all three governance tiers: NDHSC (quarterly, 14 members), DHDD (6 functional areas, phased 14-position staffing), and 3 Technical Working Groups (monthly).
- Design the investment decision flow: Proposal → DHDD Architecture Compliance Review → Data Governance Review → NDHSC Decision → Implementation Coordination.
- Transition EHSSP-managed digital health functions to DHDD before August 2025 closure.

**Country Precedents:**

| Country | Governance Model | Timeline | Outcome |
|---------|-----------------|----------|---------|
| **Tanzania** | eHealth Steering Committee + Digital Health Division under MoH | Established 2013–2015, formalised in National Digital Health Strategy 2019–2024 | Coordinates 20+ digital health systems; unified investment pipeline; donor alignment achieved |
| **Rwanda** | Rwanda Biomedical Centre (RBC) Digital Health Division + Health Information Systems TWG | Operational since 2015 | Oversees EMR national rollout, DHIS2 strengthening, health data warehouse; government-led from inception |
| **Kenya** | Division of Health Informatics (DHI) under MoH + National eHealth Steering Committee | Formalised 2016; Kenya Health Policy 2014–2030 framework | Coordinates KenyaEMR, KHIE, mHealth initiatives across 47 counties; TWG model for standards and interoperability |
| **Ethiopia** | Health Information Technology Directorate (HITD) under MoH + National Technical Working Groups | Established 2014, restructured 2020 | Leads national EMR, HIE, and DHIS2 coordination; manages 100+ facility EMR deployments |

**Quick Wins (0–6 months):**
- Draft Ministerial Order for NDHSC and DHDD (leverage D6 governance specifications directly — the design work is complete).
- Convene informal NDHSC meeting to review and endorse D6 target architecture and D7 roadmap — this can occur before formal establishment.
- Designate an interim DHDD coordinator (from HMIS team or senior health officer) to begin transition planning for EHSSP functions.
- Establish the Architecture and Interoperability TWG immediately using existing technical staff — the TWG can begin operating before DHDD is formally staffed.

**Strategic Investments (12–36 months):**
- Recruit and train 14 DHDD positions across 6 functional areas (phased: 6 in Year 1, 4 in Year 2, 4 in Year 3). Estimated cost: USD 350,000–500,000 annually at full staffing (salaries, training, operational costs).
- Establish project portfolio management capability within DHDD for coordinating all donor-funded and government-funded digital health initiatives.
- Develop and implement the investment decision flow with architecture compliance review as a mandatory gate for all digital health procurements exceeding USD 50,000.

---

#### 3.1.2 National Digital Health Strategy and Policy Framework

**Gaps Addressed:** BUS-02 (National eHealth / Digital Health Strategy), GEN-04 (Data Protection and Privacy Legislation), GEN-06 (Government Cloud and Hosting Policy)

**Solution Approach:** Policy development and endorsement — adapt existing frameworks (D6 architecture, government cloud policy) into actionable policy instruments. For data protection, pursue dual-track: MoH-specific administrative measures immediately; advocate for national legislation in parallel.

**Recommended Actions:**

- Package D6 target architecture as the endorsed MoH Digital Health Strategy 2025–2033 through a brief strategy wrapper document (10–15 pages) suitable for PS endorsement and donor partner circulation.
- Establish a health-sector data governance framework by Ministerial Order (as specified in the GEN-04 interim mitigation), independent of national data protection legislation.
- Advocate within RDIP governance for operationalisation of the government cloud policy to enable G-Cloud readiness.

**Country Precedents:**

| Country | Policy Instrument | Timeline | Outcome |
|---------|------------------|----------|---------|
| **Tanzania** | National Digital Health Strategy 2019–2024 | 18-month development process; endorsed 2019 | Unified donor investments behind single framework; measurable indicators; biennial review cycle |
| **Rwanda** | National Digital Health Strategic Plan 2018–2023 | Developed 2017–2018 with stakeholder consultations | Aligned 15+ donor programmes; structured investment pipeline; achieved near-universal digital health coverage targets |
| **Kenya** | Kenya National eHealth Policy 2016–2030 + Kenya Health Data Governance Framework | Policy 2016; Data Governance 2020 | Comprehensive framework for health data sharing, consent management, and data quality standards; enabled county-level data governance |
| **Ghana** | Health Sector ICT Policy and Strategy 2014 + Data Protection Act 2012 | Ghana was an early adopter of data protection in Africa | National Health Insurance Authority uses data governance framework aligned with national data protection law |

**Quick Wins (0–6 months):**
- Produce the MoH Digital Health Strategy 2025–2033 wrapper document around D6 content — this requires editorial work, not new research. Target: PS endorsement within 3 months.
- Issue Ministerial Order establishing the health data governance framework with data ownership assignments across 11 domains (D6 Section 3.5), four-tier data classification scheme, and requirement for data sharing agreements.
- Create template data sharing agreements for the priority integration flows (eCRVS→MPI→e-NHIS, DHIS2, laboratory systems).

**Strategic Investments (12–48 months):**
- Support MoDE/Ministry of Justice advocacy for national Data Protection Act — MoH should be a visible advocate given the sensitivity of health data. MoH-specific data governance framework serves as a model for other sectors.
- Develop patient consent management protocols and implementation guide for EHR, e-NHIS, and MPI systems (required before EHR pilot deployment).
- Participate in Government Cloud Policy operationalisation steering committee to ensure health-sector requirements (data sovereignty for Tiers 3–4, hosting SLAs, migration support) are incorporated into G-Cloud design.

---

#### 3.1.3 Stakeholder Engagement and Change Management

**Gaps Addressed:** BUS-05 (Stakeholder and Change Management), BUS-03 (Health Data Governance Framework — capacity building dimension)

**Solution Approach:** Build MoH-owned change management capability within DHDD. Leverage existing positive readiness (~90% EHR readiness) through structured programmes rather than project-specific training.

**Recommended Actions:**

- Design a tiered digital health literacy programme: foundation (all health workers), role-based (system users), and advanced (DHDD and regional data officers).
- Establish a facility-level change champion network — one digital health champion per facility — to support adoption and provide first-line support.
- Develop a unified training curriculum covering all MoH systems rather than siloed, project-specific training.

**Country Precedents:**

| Country | Change Management Approach | Outcome |
|---------|---------------------------|---------|
| **Rwanda** | Cascaded training-of-trainers model for OpenMRS EMR rollout; government-employed super-users at each facility | >90% clinician adoption at rollout facilities within 12 months; sustainable without ongoing donor training budget |
| **Tanzania** | Community health worker (CHW) digital literacy programme integrated with DHIS2/mHealth training; district digital health focal persons | Rapid DHIS2 adoption; CHWs using digital tools for community-based surveillance |
| **Kenya** | KenyaEMR rollout used dedicated change management officers per county; 6-month mentorship following training | 500+ facility EMR deployments with >80% sustained usage at 12-month follow-up |
| **Maldives** | DHIS2 Tracker EIR rollout included intensive 2-week training + 3-month mentorship per atoll | 70% facility adoption in Year 1; 96% newborn registration in national EIR |

**Quick Wins (0–6 months):**
- Conduct updated digital health readiness assessment at 20 priority facilities (update 2022 survey, validate ~90% EHR readiness figure, identify specific training needs by facility).
- Identify and recruit 20 facility-level change champions at priority EHR/EIR pilot sites — ideally nurses or health information officers already demonstrating digital aptitude.
- Develop a unified digital health orientation module (4 hours) covering the MoH digital health strategy, key systems, data governance basics, and privacy obligations.

**Strategic Investments (12–48 months):**
- Establish a training-of-trainers (ToT) programme: train 30–40 master trainers who can cascade training to all ~90 facilities. Estimated cost: USD 80,000–120,000 for initial ToT cohort.
- Deploy role-based training for EHR (20–40 hours per clinician), DHIS2 Tracker (16–24 hours per user), and e-NHIS (8–16 hours per facility staff). Budget: training investment at 10–20% of total implementation budget, per international benchmarks.
- Establish continuous professional development (CPD) programme linking digital health competencies to health worker career progression.

---

### 3.2 Data and Registries Solutions

This theme addresses the shared data services that underpin patient-level interoperability: Master Patient Index, health data dictionary, terminology services, and data quality. It maps to gaps DAT-01 through DAT-06 and GEN-03.

---

#### 3.2.1 Master Patient Index (MPI) Deployment

**Gaps Addressed:** DAT-01 (Master Patient Index), GEN-03 (National Digital Identity Platform — MoH interim), DAT-06 (Data Stewardship Staffing — MPI governance dimension)

**Solution Approach:** Deploy open-source MPI (OpenCR) as the foundational shared service. Configure for multi-identifier matching given the incomplete national ID coverage (~50% eCRVS NIN). Seed with existing patient identifiers from eCRVS, e-NHIS, and SPT.

**Recommended Platform: OpenCR (Open Client Registry)**

| Criterion | Assessment |
|-----------|-----------|
| **Licence** | Open-source (Apache 2.0) |
| **Architecture** | FHIR-native (HAPI FHIR backend), Node.js, ElasticSearch for matching |
| **Matching** | Deterministic (strong identifiers) + probabilistic (demographics); configurable matching rules |
| **Standards** | IHE PIXm/PDQm profiles, FHIR R4 Patient resource |
| **Deployments** | Guinea, Togo, Haiti, South Sudan (IntraHealth/OpenHIE community) |
| **Fit for Progressa** | Designed for low-resource settings with incomplete ID coverage; multi-identifier support matches GEN-03 constraints; FHIR-native aligns with D6 integration architecture |

**Why Open-Source over Proprietary:**
Proprietary MPI solutions (e.g., IBM Initiate, Informatica MDM) are designed for high-resource healthcare systems with mature IT governance. They carry licensing costs of USD 200,000–1,000,000+ annually, require specialised vendor skills, and are architected for environments with universal patient identifiers. OpenCR is purpose-built for the exact conditions Progressa faces: incomplete identity coverage, multiple identifier types, resource-constrained settings, and the need for FHIR-native integration. The OpenHIE community provides implementation support, and IntraHealth maintains active development.

**Country Precedents:**

| Country | MPI Platform | Scale | Key Lessons |
|---------|-------------|-------|-------------|
| **Guinea** | OpenCR | National deployment supporting COVID-19 vaccination campaign; 3M+ records | Deployed in 6 months; probabilistic matching critical given limited national ID coverage; community health worker data entry required strong data quality rules |
| **Togo** | OpenCR | Pilot supporting health information exchange; linked to DHIS2 | Demonstrated FHIR-based integration with DHIS2 Tracker; matching rules tuned for French naming conventions |
| **Rwanda** | National ID-anchored patient registry (custom) | Universal coverage (national ID saturation >95%) | Deterministic matching dominant due to universal NID; demonstrates target state for Progressa when eCRVS NIN coverage improves |
| **Kenya** | Client Registry (custom, KHIE component) | Under development as part of Kenya HIE | Multi-identifier design similar to Progressa's requirements; integrating with NEMIS, NHIF, and county EMRs |
| **Tanzania** | Health Client Registry (HCR) integrated with HIE | National; linked to EMR, DHIS2, supply chain | Probabilistic matching used extensively given incomplete national ID coverage |

**Quick Wins (0–6 months):**
- Install and configure OpenCR on interim infrastructure (PDGA DC or hardened HMIS server) with Docker Compose deployment.
- Define matching rules for Progressa context: deterministic on eCRVS NIN + Immigration NIN; probabilistic on (first name, last name, date of birth, sex, mother's name, facility of birth).
- Seed MPI with eCRVS NIN records (about 1 million registrations) — bulk import via FHIR Patient resources.
- Seed MPI with e-NHIS beneficiary records (15,000–20,000) — map e-NHIS IDs to FHIR Patient resources and import.

**Strategic Investments (12–36 months):**
- Integrate OpenCR with all patient-level systems: EHR (OpenMRS), e-NHIS, DHIS2 Tracker EIR, DHIS2 Tracker IDSR+, and A-LIS/OpenELIS. Each integration requires FHIR PIXm/PDQm mediator development (estimated 2–4 months per system).
- Migrate SPT child records (350,000–400,000) into MPI during EIR transition — requires data mapping and deduplication against existing MPI records.
- Establish MPI governance: data quality monitoring, duplicate resolution workflows, identifier lifecycle management. Requires dedicated Integration Data Steward role within DHDD.
- Plan for MPI→national digital ID platform migration when RDIP delivers the unified digital ID (2026–2028).

---

#### 3.2.2 National Health Data Dictionary and Terminology Services

**Gaps Addressed:** DAT-02 (National Health Data Dictionary), DAT-03 (Health Terminology Services)

**Solution Approach:** Phased development — start with data elements required for priority integration flows, then expand progressively. Deploy open-source terminology service for standardised coding.

**Recommended Platform: Open Concept Lab (OCL)**

| Criterion | Assessment |
|-----------|-----------|
| **Licence** | Open-source (MPL 2.0) |
| **Architecture** | FHIR-native terminology service; web-based dictionary management |
| **Standards** | FHIR R4 ValueSet, CodeSystem, ConceptMap APIs |
| **Content** | Hosts ICD-11, LOINC, SNOMED CT, custom value sets |
| **Deployments** | PEPFAR MER indicators, OpenMRS community, multiple African health ministries |
| **Fit for Progressa** | Manages both standardised terminologies and custom Progressa data elements; FHIR APIs enable system integration; web interface enables DHDD governance of data dictionary |

**Country Precedents:**

| Country | Terminology Approach | Outcome |
|---------|---------------------|---------|
| **Kenya** | National data dictionary maintained by DHI; LOINC adopted for KenyaEMR laboratory module; ICD-11 mapping in progress | Enabled consistent reporting across 500+ EMR facilities; laboratory result interoperability between facilities |
| **Ethiopia** | MoH data dictionary aligned with DHIS2 data elements; ICD-10 used in EMR; national drug formulary coded | Standardised reporting indicators across 100+ EMR facilities; drug utilisation tracking enabled |
| **Rwanda** | National health data dictionary published; integrated with EMR and DHIS2; LOINC for laboratory | Cross-system analytical capability; data quality measurably improved after dictionary enforcement |
| **South Africa** | National Health Data Dictionary maintained by National Department of Health; mapped to ICD-10, LOINC | Reference implementation for data dictionary governance in sub-Saharan Africa; annual update cycle |

**Quick Wins (0–6 months):**
- Define the initial health data dictionary for priority integration flows: patient demographics (FHIR Patient), facility identifiers (FHIR Location/Organization), immunisation events (FHIR Immunization), and birth registration (FHIR Patient/RelatedPerson). Scope: ~200 data elements.
- Map current DHIS2 indicator definitions to the data dictionary — DHIS2 is the existing reference, so alignment starts from there.
- Begin ICD-11 orientation training for HMIS team and IDSR focal persons (WHO provides free ICD-11 training tools).
- Install OCL on interim infrastructure; load ICD-11, LOINC core (top 500 tests relevant to Progressa laboratory practice), and Progressa immunisation schedule value sets.

**Strategic Investments (12–48 months):**
- Complete LOINC mapping for A-LIS/OpenELIS test catalogues — estimated 500–1,000 test codes requiring mapping. Requires laboratory informaticist support (consultancy or DHDD staff).
- Expand health data dictionary to comprehensive coverage across all 11 data domains defined in D6.
- Deploy OCL FHIR APIs for system integration: EHR (ICD-11 diagnosis lookup), LIS (LOINC test lookup), DHIS2 Tracker (value set validation).
- Establish Data Standards and Governance TWG review cycle for data dictionary updates (quarterly review, annual publication).
- Phase 2 SNOMED CT GPS adoption — evaluate licensing, configure OCL, develop mapping from ICD-11 to SNOMED CT for clinical EHR use.

---

#### 3.2.3 Data Quality and Stewardship

**Gaps Addressed:** DAT-04 (Data Quality Framework), DAT-06 (Data Stewardship Staffing)

**Solution Approach:** Leverage DHIS2's built-in data quality tools as the foundation; extend to cross-system quality monitoring as HIE matures. Establish data stewardship through DHDD staffing plan.

**Recommended Actions:**

- Activate and configure DHIS2's built-in data quality tools: validation rules, outlier detection, completeness/timeliness dashboards. These exist but are underutilised.
- Define quality indicators across five dimensions: completeness, timeliness, accuracy, consistency, and uniqueness.
- Establish quality review cycle: monthly facility-level feedback, quarterly regional review (via Implementation and Capacity TWG), annual national data quality assessment.
- Recruit data stewardship positions per D6 staffing model: 4 national (within DHDD), 7 regional (phased), ~90 facility focal persons (formalisation of existing informal roles).

**Country Precedents:**

| Country | Data Quality Approach | Outcome |
|---------|----------------------|---------|
| **Tanzania** | DHIS2 data quality app + quarterly data quality reviews at district level; regional data quality officers | Reporting completeness improved from ~70% to >90% over 3 years; routine data used for district planning |
| **Rwanda** | National data quality assessment protocol; facility-level data quality audits linked to performance-based financing | Data quality tied to facility financing incentives; measurable improvement in accuracy and timeliness |
| **Malawi** | DHIS2-based data quality scorecards; district data review meetings with standardised agenda | Community-level reporting completeness improved; data use for resource allocation demonstrated |

**Quick Wins (0–6 months):**
- Configure DHIS2 validation rules for the top 20 health programme indicators (immunisation, maternal health, disease surveillance, HIV/ART) — many rules can be adapted from DHIS2 community library.
- Establish DHIS2 reporting completeness and timeliness dashboards at national and regional levels — DHIS2 supports this natively.
- Formalise facility data focal person roles at 20 priority facilities through a joint Ministerial/Regional directive — no recruitment needed, just role clarification and basic training.
- Designate interim Chief Data Steward from existing HMIS team leadership.

**Strategic Investments (12–36 months):**
- Recruit 4 national data stewardship positions within DHDD. Estimated cost: USD 80,000–120,000 annually (salaries + operational).
- Recruit 7 Regional Health Data Officers (phased: 3 in Year 1, 4 in Year 2). Estimated cost: USD 70,000–100,000 annually at full deployment.
- Develop cross-system data quality monitoring as HIE integration matures — MPI duplicate rate, integration transaction success rate, data dictionary conformance.
- Implement annual national data quality assessment using WHO Data Quality Review (DQR) toolkit.

---

### 3.3 Clinical and Programme Systems Solutions

This theme addresses the application-layer systems that capture, manage, and exchange health data at the point of care and programme level. It maps to gaps APP-02 through APP-09.

---

#### 3.3.1 Electronic Health Record (EHR) Deployment

**Gaps Addressed:** APP-02 (Electronic Health Record System)

**Solution Approach:** Deploy open-source EHR (OpenMRS) using a vertical-first strategy — start with maternal health and HIV/ART workflows at priority facilities, then expand scope and coverage progressively.

**Recommended Platform: OpenMRS**

| Criterion | Assessment |
|-----------|-----------|
| **Licence** | Open-source (MPL 2.0) |
| **Architecture** | Java/Spring Boot, MySQL/PostgreSQL, modular, REST API + FHIR module |
| **Scale** | Deployed in 40+ countries; millions of patient records globally |
| **Offline** | Local facility server with background sync — designed for intermittent connectivity |
| **Standards** | FHIR R4 module available; OpenMRS 3.x platform with modern React frontend |
| **Key deployments** | Kenya (KenyaEMR, 500+ facilities), Uganda (UgandaEMR, 400+ facilities), Rwanda (300+ facilities), Mozambique, Zambia, Malawi, Côte d'Ivoire |
| **Fit for Progressa** | Purpose-built for resource-constrained settings; offline-first aligns with TEC-02; vertical-first aligns with D6 strategy; strong African implementation community |

**Why OpenMRS over Alternatives:**

| Platform | Pros | Cons for Progressa |
|----------|------|-----------------|
| **OpenMRS** | Proven in 40+ countries; strong Africa community; offline-capable; FHIR module; modular | Requires local customisation; Java/Spring skills needed |
| **GNU Health** | Full ERP + EHR; open-source | Smaller community; fewer African deployments; monolithic architecture |
| **OpenEMR** | Full-featured; US/Europe focus | Limited African deployment experience; less suited to low-connectivity |
| **Proprietary (e.g., Meditech, Cerner/Oracle)** | Feature-rich; vendor support | USD 1M+ licensing; vendor lock-in; not designed for low-connectivity/low-resource settings; no meaningful sub-Saharan Africa deployments at public health facility level |

**Country Precedents:**

| Country | Platform | Scale | Timeline | Key Lessons |
|---------|---------|-------|----------|-------------|
| **Kenya** | KenyaEMR (OpenMRS) | 500+ facilities; all HIV/ART sites | 2012–present; phased over 8 years | Vertical start (HIV/ART) proved successful; facility-level servers with offline sync critical; government technical team grew from 5 to 30+ over 8 years |
| **Uganda** | UgandaEMR (OpenMRS) | 400+ facilities | 2013–present | PEPFAR-funded; trained local implementers; integrated with DHIS2 for aggregate reporting; Tracker-to-aggregate flow validated |
| **Rwanda** | OpenMRS + DHIS2 integration | 300+ facilities | 2010–present | Government-led from inception; near-universal coverage at hospitals and health centres; tight integration with national ID |
| **Mozambique** | OpenMRS | 100+ facilities | 2014–present | Offline-first critical due to connectivity; maternal health vertical proved effective entry point |
| **Malawi** | Bahmni (OpenMRS-based) | 30+ facilities | 2016–present | Bahmni frontend provided simpler clinician interface; trained clinical informaticists locally |

**Quick Wins (0–6 months):**
- Conduct clinical workflow analysis for maternal health and HIV/ART pathways at 3–5 candidate pilot facilities — document current paper workflows, identify data elements, map to OpenMRS modules.
- Install OpenMRS 3.x reference instance on interim infrastructure for configuration and testing (Docker Compose deployment).
- Identify and engage with OpenMRS regional implementation partners (IntraHealth, Jembi, or OpenMRS community implementers with East African or regional experience).
- Assess hardware requirements at 5–8 pilot facilities (existing PCs, LAN, power protection, connectivity).

**Strategic Investments (12–60 months):**
- Pilot OpenMRS at 5–8 facilities (12–18 months): configure maternal health + HIV/ART modules, deploy facility servers, train clinicians (20–40 hours each), integrate with MPI (OpenCR) for patient identity. Estimated cost: USD 300,000–500,000 for pilot (hardware, customisation, training, support).
- Wave 1 expansion to 15–20 facilities (12–18 months post-pilot): based on pilot learnings, expand to urban/peri-urban facilities, e-NHIS contracted sites, and teaching hospitals. Estimated cost: USD 500,000–800,000.
- Wave 2 expansion to 30–40 facilities (18–24 months post-Wave 1): regional hospitals and high-volume primary facilities. Estimated cost: USD 800,000–1,200,000.
- Total EHR programme cost (5-year): USD 1.5–2.5M (hardware, customisation, training, support, connectivity).
- Build local OpenMRS technical capacity within DHDD — target 3–4 staff capable of OpenMRS administration, configuration, and basic development.

---

#### 3.3.2 Electronic Immunisation Registry (EIR) Transition

**Gaps Addressed:** APP-03 (SPT to DHIS2 Tracker Transition)

**Solution Approach:** Managed transition from SPT to DHIS2 Tracker EIR — this is a strategic upgrade from a functioning system, not a failure remediation. Parallel operation is essential to maintain immunisation programme continuity.

**Recommended Platform: DHIS2 Tracker (EIR Module)**

| Criterion | Assessment |
|-----------|-----------|
| **Licence** | Open-source (BSD-3) |
| **Architecture** | Java/Spring, PostgreSQL; Android app for offline mobile; web for connected sites |
| **Standards** | WHO Digital Adaptation Kit (DAK) for Immunisation; FHIR module in development |
| **Key advantage** | Native DHIS2 platform — eliminates separate SPT→DHIS2 integration; aggregate reporting is built-in |
| **Offline** | DHIS2 Android app supports full offline data entry and sync |
| **Deployments** | Maldives (national), Rwanda (national), Lao PDR (expanding), 30+ countries for various Tracker programmes |

**Country Precedents:**

| Country | Platform | Scale | Timeline | Key Results |
|---------|---------|-------|----------|-------------|
| **Maldives** | DHIS2 Tracker EIR | National since 2022 | 12 months pilot → 18 months national | 96% newborns registered; 70% facilities active in Year 1; offline Android app critical for atoll-based health posts |
| **Rwanda** | DHIS2 EPI Tracker | National since 2019–2020 | 18-month rollout; government-led | Met WHO electronic immunisation registry criteria in independent evaluation; integrated with national ID |
| **Lao PDR** | DHIS2 Tracker EIR | Started COVID-19 EIR, expanding to routine | 2021–present | Demonstrates COVID→routine EIR transition pathway; offline capability essential for rural provinces |
| **Progressa (current)** | SPT/Vaxa | National since 2022 | 2 years operational | 350,000–400,000 children; >99% accuracy; 60% admin time reduction — high bar for replacement system to match |

**Quick Wins (0–6 months):**
- Configure DHIS2 Tracker EIR module for the Progressa immunisation schedule using WHO DAK specifications — DHIS2 community provides reference configurations.
- Install DHIS2 Android app on test devices; validate offline data entry, sync, and immunisation schedule decision support.
- Identify 10–15 pilot facilities with reliable connectivity and engaged facility staff for parallel SPT/DHIS2 Tracker pilot.
- Begin contractual discussions with Vaxa Foundation regarding transition timeline, data migration support, and parallel operation protocols.

**Strategic Investments (12–72 months):**
- Phase 1 — Pilot (12–18 months): Deploy DHIS2 Tracker EIR at 10–15 facilities alongside SPT. Validate that DHIS2 Tracker achieves comparable accuracy to SPT's >99%. Train facility staff on tablet-based workflow (shift from paper scanning to point-of-care digital entry). Estimated cost: USD 150,000–250,000 (hardware, training, configuration, parallel support).
- Phase 2 — Scale (18–36 months post-pilot): Expand DHIS2 Tracker EIR to all ~90 facilities with connectivity. Maintain SPT at facilities without reliable connectivity. Configure programme-to-aggregate reporting to replace SPT→DHIS2 flow.
- Phase 3 — Retire SPT (36–48 months post-pilot): Complete transition; migrate remaining SPT records (350,000–400,000) to DHIS2 Tracker; decommission SPT infrastructure. Critical: maintain uninterrupted aggregate immunisation reporting throughout transition.

---

#### 3.3.3 Electronic Integrated Disease Surveillance (IDSR+)

**Gaps Addressed:** APP-04 (Electronic IDSR+)

**Solution Approach:** Extend DHIS2 Tracker for electronic case-based IDSR reporting. Build on existing strong IDSR foundation (90% facilities with standard case definitions, ~90% trained focal persons) by transitioning from paper to electronic case-based notification.

**Recommended Platform: DHIS2 Tracker (IDSR+ Module)**

The WHO AFRO VPD (Vaccine-Preventable Disease) Case Surveillance Tracker package for DHIS2 provides a reference implementation for case-based surveillance that can be extended for all notifiable conditions.

**Country Precedents:**

| Country | Platform | Status | Key Lessons |
|---------|---------|--------|-------------|
| **Tanzania** | eIDSR on DHIS2 | Operational nationally | Integrated with DHIS2 aggregate; malaria case-based surveillance via mobile apps; facility-level electronic notification reduced reporting delays from days to hours |
| **Nigeria** | SORMAS | Operational nationally since 2020 | Purpose-built surveillance platform; demonstrated rapid deployment during COVID-19; however, separate platform from DHIS2 creates parallel systems |
| **Kenya** | m-Dharura (EBS) + DHIS2 | EBS operational; case-based expanding | Community-based event detection via mobile; linked to Africa CDC Event Management System |
| **Sierra Leone** | DHIS2 Tracker for VPD surveillance | Operational since 2019 | WHO AFRO VPD package adapted for Sierra Leone context; rapid outbreak detection for measles/Ebola |

**Quick Wins (0–6 months):**
- Configure DHIS2 Tracker IDSR+ module for Progressa's notifiable disease list using WHO AFRO VPD Case Surveillance Tracker package as starting point.
- Pilot electronic case-based notification at 5–10 facilities (hospitals and health centres) that already have DHIS2 access and trained IDSR focal persons.
- Enable DHIS2 mobile web access for case notification at facilities with mobile connectivity — no app installation required for basic notification.

**Strategic Investments (12–48 months):**
- Phase 1 (12–18 months): Electronic case-based IDSR+ at 20–30 high-volume facilities. Train IDSR focal persons on electronic case notification. Configure automated alerts for epidemic-prone conditions. Estimated cost: USD 100,000–200,000.
- Phase 2 (18–36 months): National electronic IDSR+ coverage. Event-Based Surveillance pilot using Africa CDC EMS or DHIS2 Events module. Integrate laboratory results→surveillance notification via HIE (dependent on APP-06 and APP-01).
- Phase 3 (36–48 months): Community-Based Surveillance through USSD/mobile app tools for community health workers. Cross-border disease notification within REC framework.

---

#### 3.3.4 e-NHIS Enhancement and Scaling

**Gaps Addressed:** APP-05 (e-NHIS Enhancement and Scaling), APP-09 (eCRVS System Integration — insurance enrollment dimension)

**Solution Approach:** Enhance existing e-NHIS platform with mobile enrollment, offline claims, and integration capabilities. This is a "configure and integrate" approach — the platform exists and functions, but requires feature development and integration.

**Recommended Actions:**

The e-NHIS is a proprietary/custom platform (not open-source). The solution approach focuses on API development and feature enhancement rather than platform replacement:

- Develop e-NHIS enrollment API (REST/JSON, targeting FHIR Coverage resource mapping) for automated enrollment via MPI/eCRVS.
- Develop offline claims processing module for facilities without reliable connectivity.
- Develop mobile enrollment capability for community-based enrollment campaigns.
- Develop eligibility verification API for EHR integration (FHIR CoverageEligibilityRequest/Response).

**Country Precedents:**

| Country | Insurance Platform | Integration Status | Key Lessons |
|---------|-------------------|-------------------|-------------|
| **Ghana** | NHIS (Ghana NHIA) | National scale; 17M+ beneficiaries; integrated with digital birth registration for auto-enrollment | Automated enrollment at birth dramatically increased coverage equity; mobile enrollment for informal sector; offline claims at rural facilities critical for national coverage |
| **Rwanda** | Mutuelle de Santé (RSSB) | Near-universal coverage (>90%); integrated with national ID and EMR | Performance-based financing linked to insurance claims data; community-based enrollment achieved >90% coverage in 10 years |
| **Tanzania** | iCHF/NHIF | Expanding; mobile enrollment piloted | Mobile enrollment via USSD/mobile money increased enrollment in rural areas by 40% in pilot districts |
| **Kenya** | NHIF/SHA (Social Health Authority) | Transitioning to SHA; digital enrollment linked to Huduma Namba (national ID) | ID-linked enrollment demonstrated; biometric verification at point of care piloted |

**Quick Wins (0–6 months):**
- Engage e-NHIS development team/vendor to scope and develop REST API for enrollment (target: FHIR-compatible JSON payload accepting patient demographics, eCRVS NIN, and e-NHIS scheme assignment). Estimated API development: 3–6 months.
- Conduct enrollment campaign at 10 facilities with highest patient volume to close enrollment gap (target: 5,000 additional beneficiaries in 6 months through manual enrollment intensification).
- Document e-NHIS data model and map to FHIR resources (Coverage, Patient, CoverageEligibilityRequest) in preparation for HIE integration.

**Strategic Investments (12–36 months):**
- Develop and deploy offline claims processing module — essential for expanding to rural facilities without reliable connectivity. Estimated cost: USD 100,000–200,000.
- Develop mobile enrollment app/USSD workflow for community-based enrollment campaigns. Estimated cost: USD 50,000–100,000.
- Implement eCRVS→MPI→e-NHIS automated enrollment flow (Priority 1 integration) — this directly addresses the 40,000–45,000 enrollment gap by automating enrollment at birth registration. Requires: eCRVS API (external dependency), OpenHIM mediator, OpenCR MPI, e-NHIS enrollment API.
- Scale from 15,000–20,000 to ≥60,000 beneficiaries through combined automated enrollment + manual campaigns. Target: 30,000 by end of W1, 60,000 by mid-W2.

---

#### 3.3.5 Laboratory Information System Strengthening

**Gaps Addressed:** APP-06 (Laboratory Information System — A-LIS Strengthening)

**Solution Approach:** Evaluate A-LIS against FHIR/LOINC requirements; if A-LIS cannot support these, transition to OpenELIS. Deploy at NRL and regional hospitals with standards-based integration.

**Recommended Platform: OpenELIS Global (preferred) or A-LIS (if FHIR-capable)**

| Criterion | OpenELIS Global | A-LIS (ASLM) |
|-----------|----------------|---------------|
| **Licence** | Open-source (MPL 2.0) | Semi-open/institutional |
| **FHIR support** | Native FHIR R4 (DiagnosticReport, ServiceRequest, Observation) | Implementation-dependent; likely requires adapter |
| **LOINC** | Native LOINC support; built-in mapping tools | Requires custom mapping |
| **Deployments** | Haiti, Côte d'Ivoire, DRC, Liberia, South Sudan, Mauritius | Progressa (pilot), Uganda |
| **HIE integration** | Designed for OpenHIE stack; proven OpenHIM integration | Custom integration required |

**Country Precedents:**

| Country | Platform | Scale | Key Lessons |
|---------|---------|-------|-------------|
| **Côte d'Ivoire** | OpenELIS Global | National reference lab + 10 regional labs | FHIR-based integration with DHIS2; LOINC coding enabled cross-laboratory standardisation; HIV viral load result turnaround improved from weeks to days |
| **Haiti** | OpenELIS | National network of reference labs | Longest-running OpenELIS deployment; proved sustainability in extremely resource-constrained setting |
| **Kenya** | BLIS + custom LIS | National reference lab + county labs | LOINC mapping for 500+ priority tests completed; demonstrated that starting with limited LOINC scope is practical |

**Quick Wins (0–6 months):**
- Conduct technical assessment of A-LIS: Can it expose FHIR APIs? Can it support LOINC coding? What is the upgrade/extension roadmap? This assessment determines whether to enhance A-LIS or transition to OpenELIS.
- Begin LOINC mapping for top 200 laboratory tests performed at NRL — focus on notifiable disease confirmatory tests (cholera, meningitis, measles, malaria, HIV, TB).
- Strengthen A-LIS deployment at NRL (ensure reliable operation, complete data migration from paper registers).

**Strategic Investments (12–48 months):**
- If A-LIS is FHIR-capable: extend A-LIS with FHIR adapter and LOINC coding at NRL + 2 regional hospitals (Phase 1, 12–18 months). Estimated cost: USD 150,000–250,000.
- If A-LIS is not FHIR-capable: deploy OpenELIS at NRL + 2 regional hospitals (Phase 1, 12–18 months), with data migration from A-LIS. Estimated cost: USD 200,000–350,000.
- Phase 2 (18–30 months): Extend to all 5 regional hospitals. Implement bidirectional LIS↔EHR integration via HIE (FHIR ServiceRequest/DiagnosticReport). Activate laboratory result→surveillance notification flow.
- Complete LOINC mapping for 500–1,000 test codes. Establish laboratory data governance within DHDD.

---

#### 3.3.6 eLMIS and DHIS2 Aggregate Strengthening

**Gaps Addressed:** APP-07 (Electronic Logistics Management Information System), APP-08 (DHIS2 Aggregate HMIS Strengthening)

**Solution Approach:** DHIS2 strengthening is highest priority (protect and enhance the anchor platform); eLMIS is a lower-priority, later-wave initiative.

**DHIS2 Strengthening — Recommended Actions:**

- Upgrade DHIS2 to latest stable version supporting FHIR module and Tracker improvements.
- Configure Facility Registry (Org Units) as mCSD FHIR interface — this makes DHIS2 the canonical facility registry for the entire health information ecosystem.
- Improve reporting completeness and timeliness to ≥95% target through validation rules, dashboards, and facility feedback loops (see Data Quality, Section 3.2.3).
- Begin Tracker module pilots for EIR and IDSR+ (see Sections 3.3.2 and 3.3.3).
- Develop advanced analytics dashboards for programme managers.

**eLMIS — Recommended Platform: OpenLMIS or mSupply**

| Criterion | OpenLMIS | mSupply |
|-----------|---------|---------|
| **Licence** | Open-source (AGPL 3.0) | Open-source (recent); formerly proprietary |
| **Architecture** | Microservices, Java/Spring, Docker-native | Client-server; desktop and mobile |
| **Deployments** | Tanzania, Zambia, Malawi, Guinea, Benin, Mozambique | 35+ countries; Pacific Islands, Africa, Asia |
| **DHIS2 integration** | Built-in DHIS2 integration module | API-based integration available |
| **Offline** | Web-based; requires connectivity | Desktop client works offline |

**Country Precedents (eLMIS):**

| Country | Platform | Scale | Key Lessons |
|---------|---------|-------|-------------|
| **Tanzania** | eLMIS (custom, now transitioning to OpenLMIS) | National; all public health facilities | Demonstrated 40% reduction in stockouts after electronic requisitioning deployed; DHIS2 integration enabled supply chain indicators in national dashboards |
| **Zambia** | OpenLMIS | National ARV and essential medicines supply chain | Microservices architecture enabled phased deployment; cold chain monitoring integrated for vaccines |
| **Malawi** | OpenLMIS | Central + district warehouses | Consumption-based forecasting reduced wastage by 25%; mobile reporting from facilities |

**Quick Wins (0–6 months):**
- DHIS2: Upgrade to latest stable version. Configure mCSD FHIR interface for Facility Registry. Activate data quality validation rules for top 20 indicators.
- DHIS2: Develop 5 priority programme dashboards (immunisation, maternal health, disease surveillance, HIV/ART, NHIS indicators).
- eLMIS: No immediate action — maintain SMS for Health as-is during Wave 1. Begin requirements analysis for eLMIS procurement in late Wave 1.

**Strategic Investments (12–48 months):**
- DHIS2 (ongoing): Tracker module expansion for EIR and IDSR+; HIE integration (aggregate data receipt from EHR, LIS); hosting migration to G-Cloud. Estimated cost: USD 200,000–400,000 over 3 years (DHIS2 strengthening, not including Tracker modules which are costed under their respective sections).
- eLMIS (Wave 2, 24–36 months): Procure and pilot OpenLMIS or mSupply at central medical stores + 2 regional stores. Estimated cost: USD 200,000–400,000 for pilot.
- eLMIS (Wave 3, 36–48 months): Scale to all facilities; retire SMS for Health. Estimated cost: USD 400,000–600,000 for national rollout.

---

### 3.4 Infrastructure Solutions

This theme addresses the hosting, connectivity, security, and operational infrastructure required to support the application and integration layers. It maps to gaps GEN-01, GEN-02, TEC-01 through TEC-06.

---

#### 3.4.1 Interim Hosting and G-Cloud Readiness

**Gaps Addressed:** GEN-01 (Sovereign Cloud Infrastructure), GEN-06 (Government Cloud and Hosting Policy), TEC-01 (Sovereign Health Data Hosting — Interim), TEC-06 (Containerisation and Deployment Automation)

**Solution Approach:** Dual-track — (1) deploy new MoH central services on interim infrastructure using Docker Compose, designed for G-Cloud migration; (2) advocate within RDIP governance for health-sector G-Cloud priority.

**Recommended Actions:**

- Establish interim hosting at PDGA Data Centre for all new MoH central services: OpenHIM, OpenCR, HAPI FHIR Server, OCL Terminology Service, Keycloak IAM, Prometheus/Grafana monitoring stack.
- Deploy all components using Docker Compose (interim) with documented Kubernetes migration path.
- Maintain existing hosting arrangements for operational systems (DHIS2 on ProgTel, eCRVS on Civitas Group, e-NHIS on cloud, SPT on Vaxa) during Wave 1.
- Containerise DHIS2 (Docker) as first migration candidate for G-Cloud.

**Country Precedents:**

| Country | Hosting Strategy | Key Lessons |
|---------|-----------------|-------------|
| **Tanzania** | Government Data Centre + phased cloud migration; Docker-based deployments for HIE components | Interim on-premises hosting for 3+ years while government cloud was developed; containerisation enabled smooth eventual migration |
| **Ethiopia** | MoH Data Centre + FMOH cloud services | Hybrid approach: critical systems on local infrastructure; analytical workloads on cloud; separation of concerns proved practical |
| **Rwanda** | Government-operated data centre (Kigali); early government cloud adopter | Government cloud readiness achieved through sustained investment over 10+ years; mandatory containerisation accelerated migration |

**Quick Wins (0–6 months):**
- Negotiate hosting arrangement with PDGA DC: 2–4 rack units, network connectivity, power, physical security. Document SLA (availability, backup, access).
- Deploy Docker Compose stack for core MoH health information exchange services (OpenHIM, OpenCR, HAPI FHIR, PostgreSQL databases). Estimated infrastructure cost: USD 15,000–25,000 for hardware/hosting (if new servers needed at PDGA).
- Document containerisation standards for MoH: base images, container registry (initially Docker Hub; migrate to government registry when available), deployment procedures.
- Begin DHIS2 containerisation project — test DHIS2 Docker deployment on staging environment.

**Strategic Investments (24–48 months):**
- G-Cloud migration (2027–2028, dependent on RDIP delivery): migrate OpenHIM, OpenCR, HAPI FHIR from PDGA DC to G-Cloud Kubernetes. 60-day parallel-run per system.
- Migrate DHIS2 to G-Cloud.
- Migrate eCRVS health endpoints and e-NHIS to sovereign hosting (requires vendor negotiation).
- Implement CI/CD pipeline and infrastructure-as-code (Terraform/Ansible) for reproducible deployments.
- Establish government container registry for approved MoH images.

---

#### 3.4.2 Facility Connectivity and Offline-First Architecture

**Gaps Addressed:** GEN-02 (National Broadband and Last-Mile Connectivity), TEC-02 (Facility Connectivity and Offline-First Capability)

**Solution Approach:** Three-pronged — (1) bridge satellite connectivity beyond EHSSP closure, (2) implement offline-first as mandatory for all systems, (3) advocate for RDIP broadband prioritisation at health facilities.

**Recommended Actions:**

- Negotiate bridge funding for satellite connectivity at health facilities post-August 2025 (EHSSP closure). Options: RDIP reallocation, emergency government allocation, or donor bridge grant (Global Fund, GAVI).
- Mandate offline-first design for all new system deployments: OpenMRS (local facility server), DHIS2 Tracker Android app, e-NHIS offline claims, OpenHIM store-and-forward.
- Prioritise system deployments at facilities with existing reliable connectivity (urban/peri-urban hospitals, sites near RDIP broadband).
- Deploy 4G mobile data as transitional connectivity at facilities where neither satellite nor broadband is available.

**Country Precedents:**

| Country | Connectivity Strategy | Key Lessons |
|---------|----------------------|-------------|
| **Maldives** | DHIS2 Tracker Android app with offline sync for island health posts; satellite + 4G connectivity | Offline-first Android app achieved 96% registration coverage despite dispersed island geography; sync worked reliably over intermittent 4G |
| **Kenya** | OpenMRS with local facility servers; offline-first architecture; progressive connectivity (satellite → fibre) | Facilities operated on local servers for years before reliable connectivity arrived; offline-first was essential, not optional |
| **Malawi** | DHIS2 Android app for facility-level reporting; mobile data (3G/4G) as primary connectivity | Mobile data proved sufficient for form-based reporting; EHR required higher bandwidth |
| **Rwanda** | Fibre connectivity to all health facilities (government investment) | Full connectivity enabled real-time integration; however, this required 10+ years of sustained government infrastructure investment |

**Quick Wins (0–6 months):**
- Conduct connectivity audit at ~90 health facilities: current connectivity type, bandwidth, reliability, cost, contract status (especially satellite contracts ending August 2025).
- Identify 20–30 facilities with reliable connectivity (existing satellite, 4G coverage, proximity to towns) for priority system deployments.
- Procure DHIS2 Android tablets (20–30 devices) for DHIS2 Tracker EIR/IDSR+ pilot at connected facilities. Estimated cost: USD 200–400 per tablet, total USD 4,000–12,000.
- Submit formal request to RDIP governance for health facility broadband prioritisation in last-mile rollout planning.

**Strategic Investments (12–48 months):**
- Bridge satellite connectivity (12–24 months): secure interim funding for continued satellite internet at 50+ facilities. Estimated cost: USD 200,000–400,000 annually.
- 4G mobile data deployment (12–36 months): procure 4G routers and data plans for 30–50 facilities as transitional connectivity. Estimated cost: USD 50,000–100,000 annually.
- Solar power solutions for facilities without reliable electricity: solar panels + battery backup for ICT equipment. Estimated cost: USD 3,000–5,000 per facility, USD 150,000–250,000 for 50 facilities.
- RDIP broadband integration (24–48 months): coordinate with RDIP broadband rollout to connect health facilities as infrastructure reaches their areas.

---

#### 3.4.3 Health Sector Cybersecurity

**Gaps Addressed:** TEC-03 (Health Sector Cybersecurity)

**Solution Approach:** Deploy enterprise IAM/SSO (Keycloak) as the security backbone; establish health-sector security policies and incident response. Security is built into the HIE from deployment, not retrofitted.

**Recommended Platform: Keycloak (IAM/SSO)**

| Criterion | Assessment |
|-----------|-----------|
| **Licence** | Open-source (Apache 2.0) |
| **Architecture** | Java/Quarkus; supports OpenID Connect, OAuth 2.0, SAML 2.0 |
| **Scale** | Used by Red Hat (sponsor), WHO, MSF, and numerous health organisations globally |
| **Features** | SSO, MFA, user federation, identity brokering, fine-grained authorisation |
| **Fit for Progressa** | Unifies authentication across OpenHIM, OpenCR, OpenMRS, DHIS2, Grafana; MFA enforcement for clinical and administrative access; Docker deployment aligns with containerisation strategy |

**Country Precedents:**

| Country | Security Approach | Key Lessons |
|---------|-------------------|-------------|
| **Rwanda** | Centralised IAM for health systems; MFA at national level; security audit programme | Early investment in IAM prevented fragmented security landscape; MFA adoption required training and change management |
| **Kenya** | Kenya Data Protection Act 2019 + health sector security policies | Legislative framework enabled enforcement of security standards; dedicated health information security officer role proved essential |
| **Estonia** | X-Road integration platform with strong authentication (national ID card + PKI) | Gold standard for government integration security; demonstrates that security must be architectural, not procedural |

**Quick Wins (0–6 months):**
- Deploy Keycloak on interim infrastructure (Docker Compose, co-hosted with HIE stack at PDGA DC).
- Configure Keycloak realms for MoH systems: OpenHIM (admin), OpenCR (admin), DHIS2 (integration).
- Enable MFA for all administrative and integration accounts (TOTP-based, compatible with standard authenticator apps).
- Draft health-sector information security policy (DHDD-owned) covering data classification enforcement, access controls, incident reporting.

**Strategic Investments (12–36 months):**
- Integrate all MoH systems with Keycloak SSO: OpenMRS, DHIS2, e-NHIS, A-LIS/OpenELIS, Grafana dashboards. Each integration: 2–4 weeks. Estimated total: USD 50,000–80,000.
- Recruit Health Information Security Officer (HISO) role within DHDD.
- Implement API security: mTLS + OAuth 2.0 for all HIE integration flows through OpenHIM.
- Establish security incident response plan aligned with national CSIRT. Conduct annual security assessments and penetration testing for HIE and connected systems.

---

#### 3.4.4 Disaster Recovery, Monitoring, and Operations

**Gaps Addressed:** TEC-04 (Disaster Recovery and Business Continuity), TEC-05 (Monitoring and Observability)

**Solution Approach:** Deploy unified monitoring stack (Prometheus/Grafana/Loki) from day one alongside HIE deployment; establish DR plans progressively as systems are consolidated.

**Recommended Platforms:**

| Component | Platform | Licence |
|-----------|---------|---------|
| Metrics collection | Prometheus | Open-source (Apache 2.0) |
| Dashboards and visualisation | Grafana | Open-source (AGPL 3.0) |
| Log aggregation | Loki | Open-source (AGPL 3.0) |
| Alerting | Grafana Alerting + Prometheus Alertmanager | Open-source |

**Country Precedents:**

| Country | Operations Approach | Key Lessons |
|---------|---------------------|-------------|
| **Tanzania** | Centralised monitoring for HIE and connected systems; Nagios initially, migrating to Prometheus/Grafana | Monitoring from day one of HIE deployment enabled rapid issue detection; without monitoring, integration failures went undetected for days |
| **Kenya** | Custom monitoring dashboard for KHIE; system-level monitoring per application | Unified monitoring more effective than per-system approach; alert fatigue managed through progressive rule tuning |

**Quick Wins (0–6 months):**
- Deploy Prometheus + Grafana + Loki alongside OpenHIM/OpenCR on interim infrastructure (part of the same Docker Compose stack).
- Configure OpenHIM transaction monitoring dashboard: transaction volume, success/failure rates, response times, error categories.
- Define initial alert rules: system unavailability, integration failure rate >5%, disk space >80%, database connection failures.
- Document backup procedures for all interim-hosted services (OpenHIM, OpenCR, HAPI FHIR, Keycloak, PostgreSQL databases). Implement automated daily backups.

**Strategic Investments (12–36 months):**
- Extend monitoring to all MoH systems (DHIS2, e-NHIS, A-LIS/OpenELIS, OpenMRS) as they integrate with HIE — each system instrumented with Prometheus metrics endpoints.
- Define Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) per system: Critical systems (DHIS2, HIE, MPI) RTO ≤4 hours, RPO ≤1 hour; Important systems (e-NHIS, EHR, LIS) RTO ≤8 hours, RPO ≤4 hours.
- Implement offsite backup storage (separate from primary hosting) — G-Cloud secondary site when available, or encrypted cloud backup as interim.
- Develop and test business continuity plan with paper-based fallback procedures for clinical services during system outages.
- Conduct annual DR testing for all critical systems.

---

### 3.5 Integration Solutions

This theme addresses the technical integration backbone and the specific integration flows that deliver cross-system value. It maps to gaps APP-01, APP-09, INT-01 through INT-07, and GEN-05.

---

#### 3.5.1 Health Information Exchange (HIE) Platform

**Gaps Addressed:** APP-01 (Health Information Exchange), GEN-05 (National Interoperability Platform — MoH sector-specific), INT-07 (API Standards and Governance)

**Solution Approach:** Deploy open-source HIE (OpenHIM) as the sector-specific health integration platform, designed to connect to a future national interoperability platform when available.

**Recommended Platform: OpenHIM (Open Health Information Mediator)**

| Criterion | Assessment |
|-----------|-----------|
| **Licence** | Open-source (MPL 2.0) |
| **Architecture** | Node.js; mediator pattern (pluggable integration logic); MongoDB for transaction logs; REST/JSON + FHIR |
| **Standards** | OpenHIE architecture; IHE ATNA audit logging; FHIR R4 |
| **Capabilities** | Message routing, data transformation, transaction audit logging (7-year retention), error handling with queue and retry, API management, client authentication (mTLS + certificate-based) |
| **Deployments** | South Africa, Tanzania, Mozambique, Rwanda, Bangladesh, Haiti, Togo, Guinea |
| **Fit for Progressa** | Purpose-built for the OpenHIE architecture specified in D6; mediator pattern enables incremental integration flow development; proven in sub-Saharan Africa at country scale |

**Why OpenHIM over Alternatives:**

| Platform | Pros | Cons for Progressa |
|----------|------|-----------------|
| **OpenHIM** | Purpose-built for health; OpenHIE reference platform; proven in Africa; mediator pattern; FHIR-native | Node.js skills required; smaller community than enterprise ESBs |
| **WSO2** | Enterprise-grade ESB; comprehensive API management | Overly complex for initial needs; enterprise licensing for advanced features; limited health-specific deployments in Africa |
| **MuleSoft** | Industry-leading integration platform | USD 50,000–100,000+ annual licensing; vendor dependency; not designed for health-specific workflows |
| **Apache Camel** | Powerful open-source integration | General-purpose; no health-specific mediators; requires more custom development |
| **GovStack Information Mediator (X-Road based)** | Government-focused; proven in Estonia/Finland | National-level platform — appropriate for GEN-05 but too heavy for sector-specific HIE |

**Country Precedents:**

| Country | HIE Platform | Scale | Timeline | Key Lessons |
|---------|-------------|-------|----------|-------------|
| **Tanzania** | OpenHIM-based national HIE | National; integrates EMR, DHIS2, HR, lab, logistics | Initial deployment 2015; progressive expansion over 5+ years | Started with 2 integration flows; expanded to 10+; mediator pattern enabled incremental growth; national team of 5 integration specialists |
| **South Africa** | OpenHIM (origin country) | Provincial deployments; Jembi-led | 2012–present | OpenHIM was designed and built in South Africa; Jembi provides ongoing development and support; largest-scale proof of concept |
| **Mozambique** | OpenHIM + OpenMRS + DHIS2 | Provincial HIE; expanding | 2016–present | Demonstrated OpenHIM ↔ OpenMRS ↔ DHIS2 integration in low-resource setting; offline-first design for facility systems |
| **Rwanda** | Custom HIE (OpenHIE-aligned) | National; all health facilities | 2017–present | Government-built custom platform using OpenHIE principles; demonstrates that the architecture pattern is valid at national scale |
| **Bangladesh** | OpenHIM-based Shared Health Record (SHR) | National; linked to DGHS systems | 2014–present | Largest population-scale OpenHIM deployment; demonstrated scalability; community volunteer health worker integration |

**Quick Wins (0–6 months):**
- Deploy OpenHIM core on interim infrastructure (Docker Compose at PDGA DC) — the core platform can be running within days.
- Deploy HAPI FHIR Server alongside OpenHIM as the FHIR-native data store for shared health records and integration resources.
- Configure OpenHIM admin console, API authentication (client certificates), transaction logging, and basic monitoring integration with Prometheus/Grafana.
- Develop and test the first mediator: eCRVS data adapter (to accept eCRVS birth notifications in whatever format eCRVS can provide and transform to FHIR Patient resource).
- Establish API governance standards document: REST/JSON conventions, FHIR R4 resource profiles for Progressa, API versioning policy (semantic versioning), security requirements (mTLS + OAuth 2.0), rate limiting, error handling patterns.

**Strategic Investments (12–48 months):**
- Develop mediators for all 6 priority integration flows (see Section 3.5.2). Estimated: 2–4 months per mediator, USD 50,000–100,000 per flow.
- Build FHIR Façades for legacy systems (eCRVS, e-NHIS, A-LIS) that cannot natively produce/consume FHIR resources. Estimated: USD 100,000–500,000 per adapter (depending on system complexity).
- Scale from core deployment to full mediated integration: target 20,000–50,000 daily transactions by end of Wave 2; 50,000–100,000+ by Wave 3.
- Transition from point-to-point integration to pub/sub event-driven model (Wave 3) for advanced use cases (cross-border data sharing, real-time analytics).
- Connect MoH HIE to national interoperability platform (Government Service Bus / Information Mediator) when available — OpenHIM mediator routing configured for national platform gateway.

---

#### 3.5.2 Priority Integration Flows — Solution Mapping

**Gaps Addressed:** INT-01 through INT-06, APP-09

Each priority integration flow is mapped to its solution components, dependencies, and timeline:

---

**Flow 1: Birth Registration → MPI → NHIS Enrollment (INT-01, APP-09)**

| Component | Solution | Status |
|-----------|---------|--------|
| eCRVS API | Engage Civitas Group to expose eCRVS birth notification API (REST/JSON minimum; FHIR preferred) | **Blocker** — requires eCRVS vendor engagement |
| OpenHIM Mediator | Custom mediator: receive eCRVS notification → transform to FHIR Patient → route to OpenCR | To be developed |
| OpenCR (MPI) | Receive FHIR Patient, create/update golden record, assign health ID | Deploy in W1 |
| e-NHIS Enrollment API | REST API accepting patient demographics + health ID → auto-create NHIS beneficiary record | To be developed by e-NHIS vendor |
| OpenHIM Mediator 2 | Route MPI confirmation (with health ID) → e-NHIS enrollment API | To be developed |

**Critical Path:** The eCRVS API is the single blocker. If eCRVS API cannot be obtained, interim option: batch file exchange (eCRVS exports CSV → OpenHIM batch mediator → MPI + e-NHIS) — less elegant but unblocks the flow.

**Timeline:** 12–18 months from eCRVS API availability. Quick win: MPI seeding from eCRVS bulk data (6 months).

---

**Flow 2: Immunisation Recording → Aggregate Reporting (INT-02)**

| Component | Solution | Status |
|-----------|---------|--------|
| DHIS2 Tracker EIR | Configure for Progressa immunisation schedule per WHO DAK | W1 pilot |
| DHIS2 Programme-to-Aggregate | Native DHIS2 feature: Tracker programme indicators → aggregate data elements | Configuration only |
| SPT→DHIS2 (existing) | Maintain during transition; decommission when DHIS2 Tracker EIR is national | Operational |

**Critical Path:** DHIS2 Tracker EIR configuration and pilot. This flow is largely internal to DHIS2 — minimal HIE dependency.

**Timeline:** 6–12 months for pilot; 18–36 months for national transition.

---

**Flow 3: Laboratory Result → Surveillance Notification (INT-03)**

| Component | Solution | Status |
|-----------|---------|--------|
| A-LIS/OpenELIS | FHIR DiagnosticReport API for laboratory results | Depends on LIS platform assessment |
| OpenHIM Mediator | Receive FHIR DiagnosticReport → evaluate against notifiable conditions list → generate FHIR Condition for IDSR+ | To be developed |
| DHIS2 Tracker IDSR+ | Receive case notification from HIE → create tracked entity instance for case investigation | W1 pilot (manual entry); W2 (automated via HIE) |
| LOINC Coding | Laboratory test results coded in LOINC to enable automated interpretation | W1 (priority tests); W2 (comprehensive) |

**Critical Path:** LIS FHIR capability (either A-LIS upgrade or OpenELIS deployment) and IDSR+ Tracker deployment.

**Timeline:** 18–24 months (W2 integration; W1 components deployed but not connected).

---

**Flow 4: Clinical Encounter → Aggregate Reporting (INT-04)**

| Component | Solution | Status |
|-----------|---------|--------|
| OpenMRS (EHR) | FHIR module exposes encounter data as FHIR Encounter, Observation, Condition resources | W1 pilot deployment |
| OpenHIM Mediator | Extract and transform EHR clinical encounters → FHIR MeasureReport → route to DHIS2 | To be developed |
| DHIS2 Aggregate | Receive aggregate indicators from HIE → update national data sets | Configuration required |
| FHIR Measure definitions | Define clinical-to-aggregate mapping (FHIR Measure resources for maternal health, HIV/ART, and morbidity indicators) | To be developed with DHDD |

**Critical Path:** EHR deployment at sufficient facilities to generate meaningful aggregate data.

**Timeline:** 18–24 months (dependent on EHR pilot reaching operational maturity).

---

**Flow 5: Insurance Eligibility Verification and Claims (INT-05)**

| Component | Solution | Status |
|-----------|---------|--------|
| e-NHIS Eligibility API | FHIR CoverageEligibilityRequest/Response (or equivalent REST) | To be developed by e-NHIS vendor |
| OpenMRS Integration | EHR-embedded eligibility check during patient registration; claims generation from clinical documentation | OpenMRS module development required |
| OpenHIM Mediator | Bidirectional routing: EHR ↔ e-NHIS via HIE | To be developed |
| Claims Mapping | Map EHR clinical codes (ICD-11, procedure codes) to e-NHIS benefit package codes | Requires joint EHR/NHIS working group |

**Critical Path:** Both EHR and e-NHIS must have operational APIs. This flow is the most complex integration due to its bidirectional nature and clinical-to-financial data mapping requirements.

**Timeline:** 24–36 months (W2; dependent on both EHR and e-NHIS integration readiness).

---

**Flow 6: National Aggregate → Regional/Global Reporting (INT-06)**

| Component | Solution | Status |
|-----------|---------|--------|
| DHIS2 ADX Module | Native DHIS2 feature for Aggregate Data Exchange | Configuration only |
| WHO/RHO Endpoints | ADX endpoint configuration for automated submission | Coordination with WHO/RHO required |
| Quality Gate | Pre-submission quality checks (completeness, consistency, validation rules) | DHIS2 validation rules |

**Critical Path:** DHIS2 ADX configuration and WHO/RHO endpoint coordination. Low technical complexity.

**Timeline:** 12–18 months (can start in W1; primarily configuration and coordination).

---

### 3.6 Consolidated Solution Summary

#### 3.6.1 Solution Approach by Gap

| Gap ID | Gap | Solution Approach | Primary Platform | Wave |
|--------|-----|-------------------|-----------------|------|
| **GEN-01** | Sovereign Cloud (G-Cloud) | Leverage (RDIP) + Interim hosting | PDGA DC → G-Cloud | W1 interim, W2 migrate |
| **GEN-02** | Broadband & Last-Mile | Leverage (RDIP) + Bridge connectivity | Satellite bridge + 4G + offline-first | W1 bridge, W2 broadband |
| **GEN-03** | National Digital ID | Leverage (RDIP) + MPI interim | OpenCR (multi-identifier) | W1 MPI, W2 NID integration |
| **GEN-04** | Data Protection Law | Build (MoH admin) + Advocate (national) | Ministerial Order + policy framework | W1 MoH framework |
| **GEN-05** | Government Service Bus | Build (sector HIE) + Leverage (national) | OpenHIM → future national platform | W1 sector HIE |
| **GEN-06** | Cloud/Hosting Policy | Leverage (RDIP) + Containerise | Docker Compose → Kubernetes | W1 containerise |
| **BUS-01** | Digital Health Governance | Build (institutional) | Ministerial Order + DHDD establishment | W1 |
| **BUS-02** | Digital Health Strategy | Build (policy) | D6 wrapper strategy document | W1 |
| **BUS-03** | Health Data Governance | Build (institutional) | Data governance framework by Ministerial Order | W1 |
| **BUS-04** | Project Management | Build (institutional) | DHDD Project Coordination function | W1 |
| **BUS-05** | Change Management | Build (programme) | Tiered training + change champion network | W1–W2 |
| **DAT-01** | Master Patient Index | Deploy (open-source) | OpenCR | W1 core, W2 full |
| **DAT-02** | Health Data Dictionary | Build (curated) | Open Concept Lab (OCL) | W1 initial, W2 comprehensive |
| **DAT-03** | Terminology Services | Deploy (open-source) | Open Concept Lab (OCL) | W1 ICD-11+LOINC, W2 SNOMED CT |
| **DAT-04** | Data Quality Framework | Configure (DHIS2) + Build (cross-system) | DHIS2 quality tools + WHO DQR | W1–W2 |
| **DAT-05** | Health Data Warehouse | Configure (DHIS2 analytics) | DHIS2 → PostgreSQL/Superset | W2–W3 |
| **DAT-06** | Data Stewardship Staffing | Build (institutional) | DHDD + regional officer recruitment | W1–W2 |
| **APP-01** | HIE Platform | Deploy (open-source) | OpenHIM | W1 core, W2 full |
| **APP-02** | EHR System | Deploy (open-source) | OpenMRS | W1 pilot, W2 expand |
| **APP-03** | EIR (SPT→DHIS2 Tracker) | Configure + Transition | DHIS2 Tracker | W1 pilot, W2 scale, W3 retire SPT |
| **APP-04** | Electronic IDSR+ | Configure + Scale | DHIS2 Tracker | W1 pilot, W2 national |
| **APP-05** | e-NHIS Enhancement | Integrate + Enhance | e-NHIS + API development | W1–W2 |
| **APP-06** | LIS Strengthening | Evaluate + Deploy | A-LIS or OpenELIS | W1–W2 |
| **APP-07** | eLMIS | Deploy (open-source) | OpenLMIS or mSupply | W2–W3 |
| **APP-08** | DHIS2 Strengthening | Configure + Enhance | DHIS2 (upgrade + Tracker + mCSD) | W1–W2 |
| **APP-09** | eCRVS Integration | Integrate | OpenHIM mediator + eCRVS API | W1 |
| **TEC-01** | Interim Hosting | Build (interim) | PDGA DC + Docker Compose | W1 |
| **TEC-02** | Connectivity + Offline | Bridge + Mandate | Satellite bridge + offline-first enforcement | W1–W2 |
| **TEC-03** | Cybersecurity | Deploy (open-source) | Keycloak IAM/SSO | W1–W2 |
| **TEC-04** | Disaster Recovery | Build (procedures) | Automated backups + DR plan + BC plan | W1–W2 |
| **TEC-05** | Monitoring | Deploy (open-source) | Prometheus + Grafana + Loki | W1 |
| **TEC-06** | Containerisation | Build (practices) | Docker Compose → Kubernetes | W1–W2 |
| **INT-01** | Birth→MPI→NHIS | Integrate | OpenHIM mediator chain | W1 |
| **INT-02** | EIR→Aggregate | Configure | DHIS2 programme-to-aggregate | W1–W2 |
| **INT-03** | Lab→Surveillance | Integrate | OpenHIM mediator + FHIR | W2 |
| **INT-04** | EHR→Aggregate | Integrate | OpenHIM mediator + FHIR Measure | W2 |
| **INT-05** | Insurance Eligibility/Claims | Integrate | OpenHIM bidirectional mediator | W2 |
| **INT-06** | National→Global Reporting | Configure | DHIS2 ADX | W1–W2 |
| **INT-07** | API Standards & Governance | Build (standards) | API governance framework | W1 |

#### 3.6.2 Open-Source Platform Stack Summary

| Layer | Platform | Licence | Role |
|-------|---------|---------|------|
| Integration / HIE | OpenHIM | MPL 2.0 | Health Information Exchange — message routing, transformation, audit |
| Patient Identity / MPI | OpenCR | Apache 2.0 | Master Patient Index — patient identity resolution and golden record |
| FHIR Data Store | HAPI FHIR Server | Apache 2.0 | FHIR-native data repository for shared health records |
| Terminology Service | Open Concept Lab (OCL) | MPL 2.0 | Health data dictionary and terminology management |
| EHR | OpenMRS | MPL 2.0 | Electronic Health Record for clinical encounters |
| EIR / Surveillance | DHIS2 Tracker | BSD-3 | Electronic Immunisation Registry and IDSR+ |
| HMIS / Aggregate | DHIS2 Aggregate | BSD-3 | National health management information system |
| LIS | OpenELIS Global (or A-LIS) | MPL 2.0 | Laboratory information system |
| eLMIS | OpenLMIS (or mSupply) | AGPL 3.0 | Supply chain management |
| IAM / SSO | Keycloak | Apache 2.0 | Identity and access management, single sign-on |
| Monitoring | Prometheus + Grafana + Loki | Apache 2.0 / AGPL 3.0 | Metrics, dashboards, log aggregation |
| Container Runtime | Docker / Docker Compose → Kubernetes | Apache 2.0 | Application containerisation and orchestration |

#### 3.6.3 Quick Wins Summary (0–6 Months)

| # | Action | Gaps Addressed | Cost Estimate | Impact |
|---|--------|---------------|---------------|--------|
| 1 | Draft Ministerial Order for NDHSC and DHDD | BUS-01, BUS-04 | Minimal (staff time) | Establishes governance foundation |
| 2 | Issue health data governance framework by Ministerial Order | BUS-03, GEN-04 | Minimal (staff time) | Enables data sharing; creates legal basis for data exchange |
| 3 | Package D6 as endorsed Digital Health Strategy | BUS-02 | Minimal (editorial) | Unifies donor alignment; provides policy mandate |
| 4 | Deploy OpenHIM + OpenCR + HAPI FHIR on PDGA DC | APP-01, DAT-01, TEC-01 | USD 15,000–25,000 | Core shared services operational |
| 5 | Deploy Keycloak + Prometheus/Grafana/Loki alongside HIE | TEC-03, TEC-05 | Included in #4 | Security and monitoring from day one |
| 6 | Seed MPI with eCRVS + e-NHIS data | DAT-01, GEN-03 | USD 10,000–20,000 | 1M+ patient identities in MPI |
| 7 | Configure DHIS2 validation rules + quality dashboards | DAT-04, APP-08 | Minimal (configuration) | Data quality visibility; baseline established |
| 8 | Install OCL; load ICD-11 + LOINC core | DAT-02, DAT-03 | USD 5,000–10,000 | Terminology foundation operational |
| 9 | Configure DHIS2 Tracker EIR for Progressa schedule | APP-03 | USD 10,000–20,000 | EIR pilot-ready |
| 10 | Pilot electronic IDSR+ at 5–10 facilities | APP-04 | USD 20,000–40,000 | Case-based surveillance initiated |
| 11 | Conduct facility connectivity audit | TEC-02, GEN-02 | USD 5,000–10,000 | Connectivity baseline for deployment planning |
| 12 | Procure tablets for DHIS2 Tracker pilot | TEC-02 | USD 4,000–12,000 | Hardware for EIR/IDSR+ pilot |
| 13 | Establish API governance standards document | INT-07 | Minimal (staff time) | Standards in place before first integration flow |
| 14 | Engage eCRVS/Civitas Group on API development | APP-09, INT-01 | Coordination only | Unblock Priority 1 integration flow |
| 15 | Engage e-NHIS vendor on enrollment + eligibility APIs | APP-05, INT-01 | Coordination only | Enable insurance automation |
| | **Total Quick Wins Estimated Cost** | | **USD 70,000–140,000** | |

#### 3.6.4 Strategic Investment Summary (12–60 Months)

| Investment Area | Estimated Cost (5-Year) | Primary Funding Source | Gaps Addressed |
|----------------|------------------------|----------------------|----------------|
| DHDD establishment and staffing | USD 1.5–2.5M | Government budget + RDIP | BUS-01, BUS-04, DAT-06 |
| EHR programme (OpenMRS, 30–40 facilities) | USD 1.5–2.5M | Global Fund, GAVI, RDIP | APP-02 |
| EIR transition (SPT→DHIS2 Tracker) | USD 400,000–700,000 | GAVI, WHO | APP-03 |
| HIE platform and integration flows | USD 500,000–1.0M | RDIP, WHO | APP-01, INT-01–07 |
| e-NHIS enhancement and scaling | USD 300,000–500,000 | Government budget, RDIP | APP-05 |
| LIS strengthening (A-LIS/OpenELIS) | USD 350,000–600,000 | Global Fund | APP-06 |
| IDSR+ electronic surveillance | USD 200,000–400,000 | WHO, Global Fund | APP-04 |
| eLMIS deployment | USD 600,000–1.0M | Global Fund, RDIP | APP-07 |
| DHIS2 strengthening | USD 200,000–400,000 | Global Fund, GAVI | APP-08 |
| Training and change management | USD 1.0–2.0M | All sources (10–20% of implementation) | BUS-05 |
| Connectivity bridging and solar | USD 500,000–1.0M | RDIP, GAVI, emergency allocation | TEC-02, GEN-02 |
| Cybersecurity and DR | USD 150,000–300,000 | RDIP | TEC-03, TEC-04 |
| **Total Estimated 5-Year Investment** | **USD 7.2–12.9M** | | |

**Note:** These estimates are indicative and will be refined in Section 7 (Investment Requirements) with detailed cost breakdowns, funding source mapping, and phasing aligned with donor programme cycles.

---

## Section 4: Phasing Strategy and Wave 1 Detailed Plan

*TOGAF ADM Phase F — Migration Planning*

This section translates the solutions identified in Section 3 into a phased implementation roadmap structured around three transformation waves. Section 4.1 presents the overall phasing rationale, and Section 4.2 provides the full Wave 1 detailed plan with individually specified initiatives.

---

### 4.1 Phasing Strategy

#### 4.1.1 Three-Wave Rationale

The 38 gaps identified across generic (6) and sector-specific (32) domains, combined with the dependency chain analysis in Section 2.2.6, establish a clear sequencing logic: governance and shared platforms must precede application deployment, which must precede advanced integration. This logical sequence, combined with the funding landscape realities (EHSSP closure August 2025, RDIP infrastructure delivery 2026–2028, Global Fund 2024–2027 cycle), determines a three-wave phasing strategy.

The three waves are not arbitrary time divisions but reflect distinct strategic objectives:

| Wave | Period | Strategic Objective | Theme |
|------|--------|-------------------|-------|
| **Wave 1** | 2025–2026 (18 months) | **Govern, Connect, Register** | Establish institutional foundations, deploy shared platform services, protect operational systems, bridge the EHSSP funding cliff |
| **Wave 2** | 2027–2028 (24 months) | **Digitise, Integrate, Scale** | Deploy clinical systems at scale, activate integration flows, migrate to G-Cloud, build workforce capacity |
| **Wave 3** | 2029–2030 (24 months) | **Optimise, Sustain, Innovate** | Achieve full integration maturity, transition to government-sustained operations, enable advanced analytics and cross-border interoperability |

#### 4.1.2 Why Three Waves, Not Two or Four

A two-wave approach would collapse foundation-building and system deployment into a single phase, overwhelming MoH's limited absorption capacity and creating unmanageable risk. The dependency chain is clear: deploying OpenMRS (EHR) without an operational HIE (OpenHIM) and MPI (OpenCR) would repeat the siloed deployment pattern that produced the current fragmented landscape.

A four-wave approach would extend the timeline beyond the national digital master plan's horizon and delay the delivery of critical integration flows that drive health equity outcomes (e.g., automated insurance enrollment at birth).

Three waves align with three distinct funding windows: EHSSP transition/RDIP early phase (Wave 1), RDIP full delivery/Global Fund NFM4 (Wave 2), and post-RDIP sustainability/next Global Fund cycle (Wave 3).

#### 4.1.3 Funding Alignment by Wave

Each wave is deliberately aligned with available and anticipated funding sources to ensure financial feasibility:

| Wave | Primary Funding Sources | Estimated Investment | Rationale |
|------|------------------------|---------------------|-----------|
| **Wave 1** (2025–2026) | RDIP (infrastructure + EA follow-on), Global Fund NFM4, GAVI, WHO TA, Government bridge funding | **USD 1.8–3.2M** | RDIP SOP-1 active; Global Fund 2024–2027 covers surveillance and supply chain; GAVI supports EIR transition; WHO provides normative/technical TA; bridge funding addresses EHSSP cliff |
| **Wave 2** (2027–2028) | RDIP (G-Cloud, broadband), Global Fund NFM4 completion + NFM5 preparation, GAVI next cycle, dedicated health digitisation funding (World Bank/AfDB) | **USD 3.0–5.5M** | RDIP delivers core infrastructure (G-Cloud, broadband); Global Fund cycle concludes with bridge to NFM5; new dedicated health sector digitisation proposal submitted |
| **Wave 3** (2029–2030) | Government budget (recurrent), Global Fund NFM5, RDIP follow-on, bilateral donors | **USD 2.4–4.2M** | Progressive government absorption of recurrent costs; donor funding shifts from establishment to innovation; sustainability transition |

**Total 5-year estimated investment: USD 7.2–12.9M** (consistent with Section 3.6.4 strategic investment summary).

#### 4.1.4 Key Outcomes by Wave

**Wave 1 Outcomes (2025–2026) — "Govern, Connect, Register"**

- NDHSC and DHDD established by Ministerial Order; governance tiers operational
- National Digital Health Strategy endorsed (D6 wrapper document)
- Health data governance framework in force
- OpenHIM + OpenCR + HAPI FHIR operational on interim hosting (PDGA DC)
- MPI seeded with 1M+ patient identities from eCRVS and e-NHIS
- DHIS2 strengthened: ≥90% reporting completeness, Tracker EIR pilot at 10–15 facilities
- eCRVS-NHIS integration flow unblocked and operationalised (Priority 1)
- eLMIS national rollout completed (full facility coverage)
- Facility connectivity bridged post-EHSSP; offline-first mandated for all systems
- EHSSP digital health functions transitioned to MoH/DHDD management
- Core digital health workforce recruited (6 DHDD positions)

**Wave 2 Outcomes (2027–2028) — "Digitise, Integrate, Scale"**

- OpenMRS (EHR) deployed at 15–20 facilities for maternal health and HIV/ART
- DHIS2 Tracker EIR scaled nationally; SPT transition managed
- Electronic IDSR+ deployed at all facilities with connectivity
- e-NHIS enhanced with offline claims and mobile enrollment; 60,000+ beneficiaries
- 4–5 priority integration flows live through HIE
- All central systems migrated to G-Cloud (sovereign hosting)
- Broadband connectivity at 50+ health facilities
- Full DHDD staffing (14 positions); 7 Regional Health Data Officers deployed
- Keycloak IAM/SSO integrated across all systems; MFA enforced

**Wave 3 Outcomes (2029–2030) — "Optimise, Sustain, Innovate"**

- EHR expanded to 30–40 facilities
- SPT fully retired; DHIS2 Tracker EIR is national platform
- All 6 priority integration flows operational; integration maturity Level 3–4
- eLMIS at full facility coverage; SMS for Health retired
- Cross-system analytics operational (PostgreSQL/Superset)
- Government budget absorbs ≥50% of digital health recurrent costs
- Event-based and community-based surveillance operational
- ADX-based international reporting automated
- EA maturity progressed from Level 1 to Level 3+

#### 4.1.5 Wave Transition Decision Points

Each wave transition is governed by explicit go/no-go criteria evaluated by the NDHSC:

**Wave 1 → Wave 2 Transition (End 2026):**
- DHDD operational with ≥6 staff
- OpenHIM processing ≥1 integration flow with <5% error rate
- MPI contains ≥500,000 verified patient records
- DHIS2 reporting completeness ≥90%
- G-Cloud infrastructure available (or confirmed delivery date within 6 months)
- Facility connectivity solution confirmed for ≥50 facilities

**Wave 2 → Wave 3 Transition (End 2028):**
- EHR operational at ≥15 facilities with >80% clinician adoption
- ≥4 integration flows live through HIE
- G-Cloud hosting all central MoH systems
- Government budget line established for digital health operations
- DHDD at full staffing (14 positions)
- EA maturity assessment score ≥2.5

---

### 4.2 Wave 1 Detailed Plan (2025–2026): "Govern, Connect, Register"

Wave 1 is the foundation-building phase. Its purpose is to establish the institutional, policy, and technical prerequisites without which Waves 2 and 3 cannot succeed. Wave 1 prioritises governance establishment, shared platform deployment, protection of existing operational systems during the EHSSP transition, and the first integration flow.

Wave 1 comprises 11 initiatives, sequenced to respect the dependency chain established in Section 2.2.6:

| ID | Initiative | Gaps Addressed | Duration |
|----|-----------|---------------|----------|
| W1-01 | Establish Digital Health Governance (NDHSC + DHDD) | BUS-01, BUS-04 | 12 months |
| W1-02 | Develop National Digital Health Strategy | BUS-02 | 4 months |
| W1-03 | Establish Interim Health Data Governance Framework | BUS-03, GEN-04 | 6 months |
| W1-04 | Strengthen DHIS2 (Reporting, Tracker Pilot, Analytics) | APP-08, DAT-04, APP-03, APP-04 | 18 months |
| W1-05 | Deploy MPI/Client Registry Pilot (Leveraging eCRVS NIN) | DAT-01, GEN-03 | 12 months |
| W1-06 | Operationalise eCRVS-NHIS Integration | INT-01, APP-09, APP-05 | 15 months |
| W1-07 | Complete eLMIS National Rollout | APP-07 | 12 months |
| W1-08 | Pilot Broadband Transition at Priority Facilities | TEC-02, GEN-02 | 18 months |
| W1-09 | Establish MoH Cloud Spoke on G-Cloud (When Available) | TEC-01, TEC-06, GEN-01 | 12 months |
| W1-10 | Digital Health Workforce Foundation | BUS-05, DAT-06 | 18 months |
| W1-11 | EHSSP Digital Health Transition Plan | BUS-04 | 6 months |

---

#### W1-01: Establish Digital Health Governance (NDHSC + Directorate)

**Gaps Addressed:** BUS-01 (Digital Health Governance Structure), BUS-04 (Project and Programme Management Capacity)

**Description:**
Establish the three-tier digital health governance model specified in D6 Section 5 through administrative action. This initiative creates the institutional authority required to coordinate, prioritise, and sustain all subsequent digital health investments. Without governance, technical deployments will replicate the fragmented, donor-driven pattern that produced the current siloed landscape. The initiative requires political and administrative action — drafting and securing a Ministerial Order, designing terms of reference, and recruiting initial staff — rather than technology procurement.

**Prerequisites:**
- MoH Permanent Secretary commitment to digital health governance reform
- D6 target architecture document available as governance design reference
- D7 roadmap endorsed (or draft endorsed) as implementation mandate

**Dependencies:**
- Internal: None — W1-01 is the foundational initiative on which all others depend
- Cross-sectoral: GEN-05 (Government Service Bus governance coordination with MoDE/PDGA); the NDHSC provides MoH's voice in national interoperability governance

**Deliverables / Outputs:**
1. Ministerial Order establishing the National Digital Health Steering Committee (NDHSC) — signed by Honourable Minister of Health
2. NDHSC Terms of Reference — 14 members, quarterly meetings, authority over digital health investments >USD 50,000
3. NDHSC inaugural meeting minutes — review and endorsement of D6 target architecture and D7 roadmap
4. DHDD establishment document — organisational structure, 6 functional areas, 14-position staffing plan with phased recruitment schedule
5. DHDD Terms of Reference for all 6 functional areas: Architecture & Standards, Data Governance, Systems Operations, Project Coordination, Capacity Building, Information Security
6. Three Technical Working Group Terms of Reference — Architecture & Interoperability TWG, Data Standards & Governance TWG, Implementation & Capacity TWG
7. Investment decision flow documented and endorsed — Proposal → DHDD Architecture Compliance Review → Data Governance Review → NDHSC Decision → Implementation Coordination
8. Initial DHDD recruitment completed — 6 positions filled (Director, 3 technical leads, 2 support staff)

**Estimated Duration:** 12 months
- Months 1–3: Ministerial Order drafting, stakeholder consultation, PS briefing
- Months 3–5: Ministerial Order signed; NDHSC constituted; inaugural meeting held
- Months 4–8: DHDD establishment document approved; recruitment for 6 initial positions launched
- Months 6–12: DHDD initial team operational; TWGs convened; investment decision flow piloted on 2–3 active projects

**Resource Requirements:**
- Staff: 1 senior health policy advisor (TA, 3 months), 1 institutional development consultant (TA, 4 months), MoH PS office staff time
- DHDD initial recruitment: 6 positions — Director (1), Architecture & Standards Lead (1), Data Governance Lead (1), Systems Operations Lead (1), Project Coordinator (1), Administrative Support (1)
- Meeting logistics: NDHSC quarterly (4 per year), TWGs monthly (36 per year across 3 TWGs)

**Indicative Cost:** USD 180,000–280,000
- Governance design TA (policy advisor + institutional consultant): USD 40,000–60,000
- DHDD Year 1 salaries (6 positions, 6–12 months prorated): USD 100,000–160,000
- Meeting and operational costs: USD 20,000–30,000
- Office equipment and workspace setup: USD 20,000–30,000

**Funding Source:** RDIP (institutional strengthening component) + Government of Progressa budget (staff salaries long-term)

**Risks and Mitigations:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| PS/Minister delays Ministerial Order | Medium | Critical | Pre-brief PS with D6/D7 evidence; RDIP governance pressure through DTFA Steering Committee |
| Qualified candidates unavailable for DHDD | High | High | Competitive salary benchmarking against NGO/donor rates; consider secondments from WHO, HISP regional node; allow remote/hybrid for specialist roles |
| TWGs fail to convene regularly | Medium | Medium | Link TWG participation to NDHSC reporting; identify engaged champions for each TWG |
| Political transition disrupts governance mandate | Low | Critical | Anchor governance in administrative (Ministerial Order) not political structures; build cross-party support |

**Success Criteria:**
- Ministerial Order signed within 5 months of initiative start
- NDHSC holds ≥2 meetings within 12 months, with documented decisions on ≥2 digital health investments
- DHDD has ≥4 staff in post within 12 months
- ≥2 TWGs convene at least 6 times within 12 months
- Investment decision flow applied to ≥1 new digital health procurement

---

#### W1-02: Develop National Digital Health Strategy

**Gaps Addressed:** BUS-02 (National eHealth / Digital Health Strategy)

**Description:**
Package the D6 target architecture into a concise, endorsed National Digital Health Strategy 2025–2033 suitable for Permanent Secretary endorsement, donor partner circulation, and government budget justification. This is primarily an editorial and stakeholder engagement exercise — the substantive architecture and design decisions already exist in D6. The strategy document serves as the policy mandate for all subsequent roadmap implementation.

**Prerequisites:**
- D6 target architecture document complete (available)
- D7 roadmap endorsed or near-endorsement
- W1-01 initiated (NDHSC establishment in progress, even if not yet formalised — informal PS endorsement sufficient to begin)

**Dependencies:**
- Internal: W1-01 (DHDD provides the institutional home for strategy ownership); W1-03 (data governance framework is a key strategy component)
- Cross-sectoral: Alignment with the national digital master plan (ten-year); coordination with MoDE digital transformation roadmap

**Deliverables / Outputs:**
1. National Digital Health Strategy 2025–2033 document (15–20 pages) — vision, principles, architecture summary, investment priorities, governance model, monitoring framework
2. Executive summary briefing note for PS and Minister (2 pages)
3. Donor alignment presentation (slide deck) for RDIP, Global Fund, GAVI, WHO coordination meeting
4. Strategy endorsement letter from PS (or Ministerial endorsement if NDHSC constituted)
5. Dissemination plan — strategy shared with all development partners, Regional Health Directorates, and MoH programme managers

**Estimated Duration:** 4 months
- Month 1: Draft strategy document from D6 content; internal MoH review (HMIS team, programme directors)
- Month 2: Stakeholder consultation (WHO, World Bank, Global Fund, GAVI, HISP regional node)
- Month 3: Incorporate feedback; finalise document; prepare endorsement package
- Month 4: PS endorsement; dissemination to partners and regions

**Resource Requirements:**
- Staff: 1 health policy/strategy writer (TA, 2 months), DHDD Director (or interim coordinator) as lead author, MoH programme directors for review
- Stakeholder engagement: 2–3 consultation workshops (half-day each)
- Design and printing: professional layout of strategy document for distribution

**Indicative Cost:** USD 25,000–45,000
- Strategy writing TA: USD 15,000–25,000
- Stakeholder workshops (3 half-day sessions): USD 5,000–10,000
- Design, printing, dissemination: USD 5,000–10,000

**Funding Source:** WHO (normative/technical support) + RDIP (EA follow-on)

**Risks and Mitigations:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Stakeholder disagreement on priorities | Medium | Medium | Ground strategy in D6 architecture decisions (already evidence-based); keep document high-level |
| PS endorsement delayed | Low | Medium | Strategy can circulate as "draft for consultation" while awaiting formal endorsement; NDHSC inaugural meeting can endorse |
| Strategy disconnected from budget process | Medium | High | Include explicit investment framework with funding source mapping; time release to coincide with budget cycle |

**Success Criteria:**
- Strategy document endorsed by PS within 4 months
- Shared with ≥5 development partners within 5 months
- Referenced in ≥1 donor programme design or work plan within 6 months

---

#### W1-03: Establish Interim Health Data Governance Framework

**Gaps Addressed:** BUS-03 (Health Data Governance Framework), GEN-04 (Data Protection and Privacy Legislation — MoH interim)

**Description:**
Establish a health-sector data governance framework through Ministerial Order, independent of pending national data protection legislation. This framework defines data ownership across 11 health data domains, establishes a four-tier data classification scheme, mandates data sharing agreements for inter-system data exchange, and creates the policy foundation for MPI deployment, HIE integration flows, and EHR data management. The framework gives MoH the administrative authority to govern health data within its mandate without waiting for national legislative action (which has uncertain timing).

**Prerequisites:**
- W1-01 initiated (DHDD establishment provides the institutional home for data governance)
- D6 target architecture available (data governance model defined in D6 Section 3.5)

**Dependencies:**
- Internal: W1-01 (DHDD Data Governance functional area is the steward); W1-05 (MPI requires data governance authority for patient identity management); W1-06 (eCRVS-NHIS integration requires data sharing agreement)
- Cross-sectoral: GEN-04 (national Data Protection Act — MoH framework serves as model and interim measure); coordination with MoDE on cross-government data governance standards

**Deliverables / Outputs:**
1. Health Data Governance Framework document — data ownership matrix (11 domains, named Director-level owners), four-tier classification scheme (Public, Internal, Confidential PII, Restricted Clinical), data lifecycle management principles
2. Ministerial Order establishing the health data governance framework and mandating compliance by all MoH programmes and partners
3. Template Data Sharing Agreement (DSA) for inter-system data exchange — generic template plus specific DSAs for eCRVS→MPI, MPI→e-NHIS, and DHIS2→HIE flows
4. Patient consent management protocol (draft) — defines consent requirements for EHR, MPI, and insurance systems; aligned with international health data ethics standards
5. Data governance orientation training materials — 2-hour module for MoH programme managers and system administrators

**Estimated Duration:** 6 months
- Months 1–2: Draft health data governance framework; consult with programme directors to validate data ownership assignments
- Months 2–3: Draft Ministerial Order; legal review by MoH legal counsel
- Months 3–4: Develop template DSAs and patient consent protocol
- Months 4–5: Stakeholder consultation (WHO, development partners); finalise framework
- Month 6: Ministerial Order signed; DSA templates in use; orientation training delivered to 30+ staff

**Resource Requirements:**
- Staff: 1 health data governance specialist (TA, 3 months), DHDD Data Governance Lead (when recruited), MoH legal counsel for Ministerial Order review
- Training: 2-hour orientation for 30+ MoH programme managers and system administrators

**Indicative Cost:** USD 35,000–55,000
- Data governance TA: USD 20,000–35,000
- Legal review and Ministerial Order processing: USD 5,000–10,000
- Training materials and delivery: USD 5,000–10,000
- Stakeholder consultation: USD 5,000

**Funding Source:** WHO (normative support) + RDIP (data governance component)

**Risks and Mitigations:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Programme directors resist data ownership accountability | Medium | Medium | Frame as empowerment (control over their domain's data quality) not burden; link to programme performance metrics |
| Ministerial Order lacks enforcement mechanism | Medium | High | Include compliance monitoring in DHDD mandate; link to investment decision flow (non-compliant systems blocked from NDHSC approval) |
| National Data Protection Act supersedes MoH framework | Low | Low | Design MoH framework to be upward-compatible with anticipated national legislation; the framework strengthens MoH's position in national data protection design |

**Success Criteria:**
- Ministerial Order signed within 6 months
- Data ownership assigned across all 11 domains with named Director-level owners
- ≥2 data sharing agreements executed (eCRVS-MPI and MPI-eNHIS at minimum)
- ≥30 staff complete data governance orientation
- Framework cited as compliance requirement in ≥1 system procurement

---

#### W1-04: Strengthen DHIS2 (Reporting Completeness, Tracker Pilot, Analytics)

**Gaps Addressed:** APP-08 (DHIS2 Aggregate HMIS Strengthening), DAT-04 (Data Quality Framework), APP-03 (EIR — DHIS2 Tracker pilot component), APP-04 (Electronic IDSR+ — pilot component)

**Description:**
Strengthen DHIS2 as the anchor health information platform through three parallel workstreams: (a) improve aggregate reporting completeness and timeliness to ≥90% (targeting 95%), (b) pilot DHIS2 Tracker for Electronic Immunisation Registry (EIR) at 10–15 facilities alongside SPT, and (c) pilot electronic case-based IDSR+ surveillance at 10–20 facilities. DHIS2 is the most mature digital health system in MoH (operational since 2010 at all ~90 facilities) and must be protected and enhanced as the foundation for the entire target architecture. This initiative also activates DHIS2's built-in data quality tools and begins exposing the Facility Registry as a FHIR mCSD service.

**Prerequisites:**
- DHIS2 operational at all ~90 facilities (confirmed)
- SPT operational at all ~90 facilities (confirmed — enables parallel pilot)
- IDSR focal persons trained at ~90% of facilities (confirmed)
- W1-01 initiated (DHDD provides technical leadership)

**Dependencies:**
- Internal: W1-08 (facility connectivity determines which facilities can participate in Tracker pilots); W1-10 (training capacity for Tracker users); W1-05 (Facility Registry mCSD interface feeds MPI patient identity to correct facility)
- Cross-sectoral: GEN-02 (RDIP broadband determines long-term connectivity for Tracker-equipped facilities)

**Deliverables / Outputs:**
1. DHIS2 version upgrade to latest stable release supporting FHIR module and Tracker enhancements
2. DHIS2 data quality configuration: validation rules for top 20 programme indicators, completeness/timeliness dashboards at national and regional levels, outlier detection activated
3. DHIS2 reporting completeness baseline report — facility-by-facility assessment against ≥90% target
4. 5 programme management dashboards (immunisation, maternal health, disease surveillance, HIV/ART, NHIS indicators)
5. DHIS2 Tracker EIR module configured for Progressa immunisation schedule (per WHO DAK specifications)
6. DHIS2 Tracker EIR pilot deployed at 10–15 facilities — parallel operation with SPT, data quality comparison
7. 20–30 DHIS2 Android tablets procured and deployed for Tracker EIR/IDSR+ pilot
8. DHIS2 Tracker IDSR+ module configured for Progressa's notifiable disease list (WHO AFRO VPD Case Surveillance Tracker package as baseline)
9. Electronic case-based IDSR+ pilot at 10–20 high-volume facilities
10. Facility Registry (Org Units) exposed as mCSD FHIR interface for HIE integration
11. DHIS2-to-aggregate programme indicators configured for Tracker EIR (programme-to-aggregate reporting)

**Estimated Duration:** 18 months
- Months 1–3: DHIS2 upgrade; data quality configuration; completeness baseline assessment
- Months 3–6: Programme dashboards developed; Tracker EIR configured; Tracker IDSR+ configured; tablets procured
- Months 6–12: EIR pilot launched at 10–15 facilities; IDSR+ pilot launched at 10–20 facilities; mCSD interface deployed
- Months 12–18: Pilot evaluation; data quality comparison (Tracker vs. SPT); lessons documented; preparation for Wave 2 scaling

**Resource Requirements:**
- Staff: 2 DHIS2 specialists (1 aggregate/analytics, 1 Tracker configuration) — TA or HISP regional node support, 12 months each; 1 IDSR/surveillance specialist (TA, 6 months); HMIS team (existing MoH staff)
- Equipment: 20–30 Android tablets (USD 200–400 each), tablet cases and screen protectors, SIM cards for mobile data
- Training: 16–24 hours per Tracker user (EIR and IDSR+); 30–50 facility staff to be trained
- HISP regional node regional support for DHIS2 upgrade and Tracker configuration

**Indicative Cost:** USD 200,000–350,000
- DHIS2 specialist TA (2 persons × 12 months): USD 80,000–120,000
- IDSR specialist TA (1 person × 6 months): USD 25,000–40,000
- Tablets and hardware (30 units): USD 8,000–12,000
- Mobile data plans (30 SIMs × 18 months): USD 5,000–10,000
- Training delivery (50 staff × multi-day): USD 30,000–50,000
- HISP regional node support contract: USD 30,000–60,000
- Dashboard development and analytics: USD 15,000–30,000
- mCSD FHIR interface development: USD 15,000–30,000

**Funding Source:** Global Fund NFM4 (surveillance strengthening), GAVI (EIR component), WHO (IDSR normative support), RDIP (DHIS2 interoperability)

**Risks and Mitigations:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| DHIS2 upgrade causes service disruption | Medium | Critical | Staging environment testing; upgrade during low-reporting period; rollback plan documented |
| Tracker EIR fails to match SPT >99% accuracy | Medium | High | Extended parallel operation; do not retire SPT until Tracker accuracy validated; involve Vaxa in transition planning |
| Facility staff resist dual data entry (SPT + Tracker) | High | Medium | Clear communication that parallel is temporary (12–18 months); incentivise pilot participation; select facilities with engaged staff |
| Tablet theft or damage | Medium | Medium | Asset tracking; facility-level accountability; insurance/warranty; rugged cases |
| Connectivity insufficient for Tracker sync | Medium | High | Select pilot sites with confirmed connectivity; DHIS2 Android offline capability mitigates; W1-08 addresses connectivity |

**Success Criteria:**
- DHIS2 reporting completeness ≥90% across all facilities within 12 months
- Tracker EIR operational at ≥10 facilities with data quality comparable to SPT (≥95% accuracy)
- Electronic IDSR+ case notifications submitted from ≥10 facilities
- 5 programme dashboards operational and used in ≥2 quarterly review meetings
- mCSD FHIR interface operational and serving Facility Registry to HIE
- Completeness/timeliness dashboards reviewed monthly by DHDD/HMIS team

---

#### W1-05: Deploy MPI/Client Registry Pilot (Leveraging eCRVS NIN)

**Gaps Addressed:** DAT-01 (Master Patient Index), GEN-03 (National Digital ID Platform — MoH interim)

**Description:**
Deploy OpenCR (Open Client Registry) as the national health sector Master Patient Index. The MPI is the foundational shared service on which patient-level interoperability depends — it provides a single "golden record" for each patient by linking identifiers across eCRVS (NIN), e-NHIS, SPT, and future systems. Given incomplete national ID coverage (~50% eCRVS NIN), the MPI is configured for both deterministic matching (on strong identifiers like NIN) and probabilistic matching (on demographics). The MPI is seeded with existing patient identifiers from eCRVS and e-NHIS to establish an initial patient identity pool of 1M+ records.

**Prerequisites:**
- W1-09 (interim hosting at PDGA DC) or alternative hosting confirmed — OpenCR requires infrastructure
- W1-01 initiated (DHDD provides governance for patient identity management)
- W1-03 (data governance framework provides authority for cross-system patient identity matching)
- eCRVS NIN data available in exportable format (about 1 million registrations)
- e-NHIS beneficiary data available (15,000–20,000 records)

**Dependencies:**
- Internal: W1-09 (hosting); W1-06 (MPI is prerequisite for eCRVS→NHIS integration flow); W1-03 (data sharing agreements authorise cross-system identity matching)
- Cross-sectoral: GEN-03 (national digital ID platform — MPI designed to integrate with future unified NID when RDIP delivers)

**Deliverables / Outputs:**
1. OpenCR deployed on interim infrastructure (Docker Compose at PDGA DC) with HAPI FHIR backend, ElasticSearch for matching
2. Matching rules configured for Progressa context: deterministic on eCRVS NIN + Immigration NIN; probabilistic on first name, last name, date of birth, sex, mother's name, facility of birth
3. MPI seeded with eCRVS NIN records (bulk FHIR Patient import — about 1 million registrations)
4. MPI seeded with e-NHIS beneficiary records (15,000–20,000 mapped and imported)
5. Deduplication analysis report — duplicate rate assessment, matching rule tuning results
6. FHIR PIXm/PDQm APIs validated — patient identity query and cross-reference available for consuming systems
7. MPI governance procedures documented — duplicate resolution workflow, identifier lifecycle, quality monitoring
8. MPI integration with OpenHIM validated — OpenHIM mediator routes MPI queries and updates

**Estimated Duration:** 12 months
- Months 1–3: OpenCR deployment on interim hosting; matching rule design and configuration; FHIR API validation
- Months 3–6: eCRVS data seeding (bulk import); deduplication analysis; matching rule tuning
- Months 6–9: e-NHIS data seeding; cross-system identity linkage validation; OpenHIM integration testing
- Months 9–12: MPI governance procedures established; PIXm/PDQm APIs available for W1-06 integration; monitoring activated

**Resource Requirements:**
- Staff: 1 health informatics / MPI specialist (TA, 6 months — OpenCR implementation experience, ideally IntraHealth or OpenHIE community); 1 integration engineer (TA, 6 months — FHIR/OpenHIM); DHDD Data Governance Lead (when recruited)
- Infrastructure: 2 servers at PDGA DC (or VM allocation) — OpenCR + HAPI FHIR + ElasticSearch + PostgreSQL; estimated 8 CPU cores, 32 GB RAM, 500 GB storage
- Data: eCRVS bulk export (coordinate with eCRVS/Civitas Group); e-NHIS beneficiary extract

**Indicative Cost:** USD 120,000–200,000
- MPI specialist TA (6 months): USD 40,000–60,000
- Integration engineer TA (6 months): USD 35,000–55,000
- Server infrastructure (PDGA DC hosting, 12 months): USD 10,000–20,000
- eCRVS data extraction and transformation: USD 10,000–20,000
- e-NHIS data mapping and import: USD 5,000–10,000
- Testing, quality assurance, documentation: USD 10,000–20,000
- Monitoring setup (Prometheus/Grafana for MPI): USD 5,000–10,000
- Contingency: USD 5,000–10,000

**Funding Source:** RDIP (digital ID component alignment) + WHO (health information systems strengthening)

**Risks and Mitigations:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| eCRVS data not available in exportable format | High | Critical | Engage Civitas Group early; if API not available, negotiate batch CSV export; escalate to RDIP governance if blocked |
| Probabilistic matching produces high false positive rate | Medium | High | Conservative matching thresholds; manual review queue for uncertain matches; iterative rule tuning over 3–6 months |
| NIN production suspension limits deterministic matching growth | High | Medium | MPI designed for multi-identifier matching; probabilistic matching provides coverage for non-NIN population; escalate NIN resumption through NDHSC |
| Interim hosting capacity insufficient | Medium | High | Negotiate adequate allocation at PDGA DC; cloud hosting as fallback (with data sovereignty trade-off documented for NDHSC decision) |

**Success Criteria:**
- OpenCR operational on interim hosting within 4 months
- MPI contains ≥500,000 verified patient records within 9 months
- Deterministic match rate ≥50% of MPI records (reflecting eCRVS NIN coverage)
- False positive rate <2% on probabilistic matching
- FHIR PIXm/PDQm APIs responding within 500ms for single-patient queries
- ≥1 consuming system (OpenHIM mediator for W1-06) successfully querying MPI

---

#### W1-06: Operationalise eCRVS-NHIS Integration

**Gaps Addressed:** INT-01 (Birth Registration → MPI → NHIS Enrollment), APP-09 (eCRVS System Integration), APP-05 (e-NHIS Enhancement — enrollment API)

**Description:**
Deliver the Priority 1 integration flow: automated enrollment of newborns into the National Health Insurance Scheme at the point of birth registration. This is the highest-impact integration flow in the target architecture — it directly addresses the 40,000–45,000 enrollment gap in e-NHIS (~30% of 60,000 target), eliminates duplicate data entry for families, and ensures every registered birth triggers insurance coverage. The flow operates through the HIE: eCRVS birth notification → OpenHIM → OpenCR (MPI, create/update patient record) → e-NHIS (auto-enrollment). This initiative also deploys the core OpenHIM platform and establishes the HIE as an operational shared service.

**Prerequisites:**
- W1-05 (MPI operational and seeded with eCRVS data)
- W1-09 (interim hosting operational for OpenHIM)
- W1-03 (data sharing agreements executed for eCRVS-MPI and MPI-eNHIS exchange)
- eCRVS team/Civitas Group engaged and committed to API development or batch data exchange

**Dependencies:**
- Internal: W1-05 (MPI is prerequisite), W1-09 (hosting), W1-03 (data governance authority and DSAs)
- Cross-sectoral: eCRVS vendor (Civitas Group) cooperation for API or data exchange; RDIP governance escalation if eCRVS API is blocked; e-NHIS vendor cooperation for enrollment API development

**Deliverables / Outputs:**
1. OpenHIM core deployed on interim infrastructure (Docker Compose at PDGA DC) — message routing, transaction audit logging, error handling, API management
2. HAPI FHIR Server deployed alongside OpenHIM — FHIR-native data store for integration resources
3. API governance standards document published — REST/JSON conventions, FHIR R4 resource profiles for Progressa, API versioning policy, security requirements (mTLS + OAuth 2.0)
4. Keycloak IAM deployed and integrated with OpenHIM — MFA for admin access, client certificate management
5. Prometheus/Grafana/Loki monitoring deployed for HIE platform — transaction dashboards, alerting, log aggregation
6. eCRVS data adapter mediator developed — accepts eCRVS birth notifications (FHIR or CSV batch) and transforms to FHIR Patient resource for MPI
7. e-NHIS enrollment API specified and developed (by e-NHIS vendor) — accepts patient demographics + health ID for auto-enrollment
8. e-NHIS enrollment mediator developed — routes MPI confirmation to e-NHIS enrollment API
9. End-to-end integration flow validated — birth registration → MPI → e-NHIS enrollment, with transaction audit trail
10. Batch fallback mechanism operational — if real-time eCRVS API unavailable, batch CSV processing (daily or weekly) achieves the same outcome with latency

**Estimated Duration:** 15 months
- Months 1–3: OpenHIM + HAPI FHIR + Keycloak + monitoring stack deployed; API governance standards drafted
- Months 3–6: eCRVS vendor engagement; eCRVS data adapter mediator developed (FHIR or batch); e-NHIS enrollment API specification agreed with e-NHIS vendor
- Months 6–9: e-NHIS enrollment API developed and tested; enrollment mediator developed; end-to-end testing with sample data
- Months 9–12: Pilot integration with live eCRVS data (batch if API not ready); validate enrollment accuracy; monitor transaction volumes and error rates
- Months 12–15: Full production operation; batch-to-API transition (if initially batch); performance optimisation; operational handover to DHDD

**Resource Requirements:**
- Staff: 1 HIE/integration architect (TA, 9 months — OpenHIM experience, FHIR expertise); 2 integration developers (TA, 6 months each — mediator development, FHIR); 1 e-NHIS API developer (from e-NHIS vendor team, 4 months)
- Infrastructure: OpenHIM + HAPI FHIR + Keycloak + Prometheus/Grafana/Loki + PostgreSQL + MongoDB — co-hosted with MPI on PDGA DC servers; estimated additional 4 CPU cores, 16 GB RAM, 200 GB storage
- Coordination: Regular meetings with eCRVS team/Civitas Group (weekly during development); e-NHIS vendor coordination (weekly during API development)

**Indicative Cost:** USD 250,000–400,000
- HIE/integration architect TA (9 months): USD 60,000–90,000
- Integration developers TA (2 × 6 months): USD 60,000–90,000
- e-NHIS API development (vendor engagement): USD 40,000–70,000
- eCRVS data adapter development (including vendor liaison): USD 30,000–50,000
- Infrastructure (servers, hosting, 15 months): USD 15,000–25,000
- Keycloak + monitoring setup: USD 10,000–20,000
- Testing, QA, documentation: USD 15,000–25,000
- API governance standards development: USD 10,000–15,000
- Contingency: USD 10,000–15,000

**Funding Source:** RDIP (interoperability component) + Government of Progressa (e-NHIS is a presidential priority)

**Risks and Mitigations:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| eCRVS vendor (Civitas Group) refuses or delays API development | High | Critical | Batch CSV exchange as fallback (less elegant but functional); escalate to RDIP DTFA Steering Committee; NDHSC formal request to MoDE |
| e-NHIS vendor delays enrollment API | Medium | High | Develop e-NHIS enrollment mediator with mock API; parallelize API specification with e-NHIS vendor; contractual timeline commitments |
| Data quality issues in eCRVS records (duplicates, incomplete demographics) | High | Medium | MPI deduplication handles this by design; data quality report informs eCRVS team improvements; quality threshold for enrollment (only records above match confidence trigger auto-enrollment) |
| Security concerns about automated enrollment (fraudulent registrations) | Medium | Medium | Audit trail in OpenHIM; quality threshold for matching confidence; human review queue for uncertain matches; NDHSC-approved business rules |
| Integration flow too complex for DHDD to sustain | Medium | High | Comprehensive documentation; knowledge transfer from TA to DHDD staff; HISP regional node ongoing support contract; gradual handover over 6 months |

**Success Criteria:**
- OpenHIM operational with ≥1 integration flow within 9 months
- eCRVS→MPI flow processing ≥100 birth notifications per week within 12 months
- e-NHIS auto-enrollment operational within 15 months (batch or API)
- Transaction audit trail complete with 100% logging and <5% error rate
- ≥1,000 auto-enrolled beneficiaries within 3 months of production launch
- API governance standards document endorsed by DHDD and referenced in all new integration development

---

#### W1-07: Complete eLMIS National Rollout

**Gaps Addressed:** APP-07 (Electronic Logistics Management Information System)

**Description:**
Complete the national rollout of the electronic Logistics Management Information System to all health facilities, replacing the SMS for Health system (operational since 2010, limited to basic stock alerts at 50 clinics). This initiative builds on the existing eLMIS pilot (approximately 50 facilities since December 2022, software funded by Global Fund, hardware/hosting funded by EHSSP) by extending coverage to all ~90 public health facilities and 6 regional medical stores. The eLMIS provides electronic requisitioning, consumption-based forecasting, distribution tracking, and expiry management — capabilities absent from the SMS-based system. Completion of the national rollout secures the supply chain data foundation needed for Wave 2 integration with DHIS2 and HIE.

**Prerequisites:**
- eLMIS pilot operational at approximately 50 facilities (confirmed)
- Global Fund NFM4 grant active (2024–2027, covers eLMIS software development)
- EHSSP-funded hardware and hosting in place (transition plan needed for August 2025 closure)

**Dependencies:**
- Internal: W1-08 (facility connectivity for remaining sites); W1-11 (EHSSP transition plan for eLMIS hosting costs)
- Cross-sectoral: Global Fund NFM4 grant implementation timeline; GEN-01 (G-Cloud for future hosting migration)

**Deliverables / Outputs:**
1. eLMIS extended to all ~90 public health facilities (from ~50 pilot sites)
2. eLMIS operational at all 6 regional medical stores
3. Central Medical Stores headquarters fully integrated with eLMIS
4. Staff trained at all newly enrolled facilities (8–16 hours per facility data focal person)
5. SMS for Health decommissioned at facilities where eLMIS is operational
6. eLMIS hosting transition plan for post-EHSSP (hosting absorbed by Global Fund or migrated to G-Cloud interim)
7. DHIS2 integration configured for supply chain indicators (stock availability, stockout rates, distribution tracking)
8. Quarterly supply chain performance reports generated from eLMIS data

**Estimated Duration:** 12 months
- Months 1–3: Assessment of remaining 41 facilities for eLMIS readiness (connectivity, hardware, staff); hosting transition plan finalised
- Months 3–6: eLMIS deployed at 20 additional facilities (priority: regional hospitals, high-volume health centres); regional medical stores fully integrated
- Months 6–9: eLMIS deployed at remaining 21 facilities; SMS for Health decommissioned at covered sites
- Months 9–12: DHIS2 integration for supply chain indicators; training reinforcement; operational handover; quarterly reporting established

**Resource Requirements:**
- Staff: 1 eLMIS implementation lead (TA, 12 months — eLMIS/OpenLMIS/mSupply experience), 2 eLMIS trainers/support staff (TA, 6 months each), MoH supply chain management unit staff
- Equipment: Hardware for remaining facilities (if not already provided by EHSSP): PCs, connectivity, power protection — estimated 10–20 facilities need hardware
- Training: 8–16 hours per facility (41 facilities × 1–2 staff each = 41–82 trainees)

**Indicative Cost:** USD 180,000–300,000
- eLMIS implementation lead TA (12 months): USD 50,000–80,000
- Trainers/support TA (2 × 6 months): USD 40,000–60,000
- Hardware for remaining facilities (20 units × USD 2,000–4,000): USD 40,000–80,000
- Training delivery (82 staff): USD 20,000–40,000
- Hosting transition costs (12 months): USD 15,000–25,000
- DHIS2 integration development: USD 10,000–20,000
- Contingency: USD 5,000–15,000

**Funding Source:** Global Fund NFM4 (eLMIS software and implementation) + RDIP (infrastructure component for connectivity/hosting)

**Risks and Mitigations:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| EHSSP hosting funding ends before transition | High | High | Negotiate Global Fund absorption of hosting costs; PDGA DC as interim alternative; include in W1-11 transition plan |
| Remaining facilities lack connectivity | Medium | Medium | Prioritise connected facilities; deploy offline-capable eLMIS features; W1-08 addresses connectivity gaps |
| Staff resistance to eLMIS vs. familiar SMS | Medium | Low | Demonstrate eLMIS advantages (forecasting, ordering); hands-on training; SMS for Health is universally recognised as limited |
| Supply chain data quality issues during transition | Medium | Medium | Parallel data collection during first 3 months; validation rules; regional supervision visits |

**Success Criteria:**
- eLMIS operational at ≥85 of ~90 facilities within 12 months
- All 6 regional medical stores integrated
- SMS for Health decommissioned at all eLMIS-covered facilities
- DHIS2 supply chain indicator dashboard operational
- Hosting transition plan executed with no service interruption
- ≥80% of trained staff demonstrating proficiency in eLMIS operations

---

#### W1-08: Pilot Broadband Transition at Priority Facilities

**Gaps Addressed:** TEC-02 (Facility Connectivity and Offline-First Capability), GEN-02 (National Broadband and Last-Mile Connectivity)

**Description:**
Bridge the connectivity gap created by EHSSP closure (August 2025) and prepare for the transition from satellite to terrestrial broadband at health facilities. This initiative operates on three parallel tracks: (a) secure bridge funding for continued satellite connectivity at facilities dependent on EHSSP-funded internet, (b) deploy 4G mobile data as transitional connectivity at facilities within mobile coverage but without satellite or broadband, and (c) coordinate with RDIP to prioritise health facility connectivity in the broadband rollout. All new system deployments (OpenMRS, DHIS2 Tracker, eLMIS extensions) must implement offline-first design as a mandatory requirement, ensuring that systems remain functional even when connectivity is lost.

**Prerequisites:**
- EHSSP connectivity status documented (satellite contracts, coverage, costs)
- RDIP broadband rollout plan available (or in development)
- W1-01 initiated (NDHSC provides governance voice for health facility connectivity priority)

**Dependencies:**
- Internal: W1-04 (DHIS2 Tracker pilots require connectivity at pilot sites); W1-07 (eLMIS rollout requires connectivity); W1-11 (EHSSP transition includes connectivity costs)
- Cross-sectoral: GEN-02 (RDIP broadband rollout is the long-term solution); ProgTel/PDGA coordination for mobile data plans; MoDE for connectivity prioritisation

**Deliverables / Outputs:**
1. Facility connectivity audit report — ~90 facilities assessed for current connectivity type, bandwidth, reliability, cost, contract status, and EHSSP dependency
2. Connectivity risk register — facilities at immediate risk of losing connectivity post-August 2025
3. Bridge funding secured for satellite connectivity continuation (12–24 months) at ≥50 facilities
4. 4G mobile data deployed at 20–30 facilities as transitional connectivity (routers + data plans)
5. Solar power solutions deployed at 10–15 priority facilities without reliable electricity
6. Offline-first design requirement document — mandatory for all new MoH system deployments
7. Formal request to RDIP governance for health facility broadband prioritisation — submitted and acknowledged
8. Broadband readiness assessment for 10–20 facilities nearest to RDIP backbone infrastructure

**Estimated Duration:** 18 months
- Months 1–3: Facility connectivity audit; risk register; bridge funding negotiation initiated
- Months 3–6: Bridge satellite funding secured; 4G procurement initiated; RDIP engagement
- Months 6–12: 4G deployed at 20–30 facilities; solar solutions at 10–15 facilities; offline-first policy in force
- Months 12–18: RDIP broadband connects first health facilities; transition from satellite/4G to broadband at connected sites; updated connectivity map

**Resource Requirements:**
- Staff: 1 ICT infrastructure specialist (TA, 6 months), 1 connectivity field assessment team (3 persons, 2 months — visiting all ~90 facilities)
- Equipment: 30 4G routers (USD 100–200 each), 30 SIM cards with data plans, 15 solar power kits (panel, battery, charge controller — USD 3,000–5,000 each)
- Coordination: RDIP broadband programme team, ProgTel, PDGA, satellite provider(s)

**Indicative Cost:** USD 350,000–600,000
- Facility connectivity audit (field team, transport, logistics): USD 20,000–35,000
- Bridge satellite funding (12–24 months at ≥50 facilities): USD 200,000–350,000
- 4G routers and data plans (30 facilities × 18 months): USD 30,000–60,000
- Solar power kits (15 facilities): USD 45,000–75,000
- ICT infrastructure specialist TA (6 months): USD 30,000–50,000
- RDIP coordination and advocacy: USD 5,000–10,000
- Offline-first policy development and dissemination: USD 5,000–10,000
- Contingency: USD 15,000–20,000

**Funding Source:** RDIP (broadband component), Government bridge allocation (satellite), GAVI (immunisation-critical facilities), Global Fund (disease programme facilities)

**Risks and Mitigations:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Bridge satellite funding not secured before EHSSP closure | High | Critical | Begin negotiation immediately; RDIP reallocation; emergency government allocation; donor bridge grant (GAVI/Global Fund emergency); NDHSC escalation |
| RDIP broadband rollout delayed | High | Medium | 4G mobile data as extended bridge; satellite continuation; prioritise facilities nearest to backbone |
| Solar installations insufficient for ICT equipment load | Medium | Medium | Proper load assessment per facility; battery capacity for 8-hour operation; LED lighting to reduce power draw |
| 4G coverage insufficient at rural facilities | Medium | Medium | Conduct coverage assessment before procurement; satellite bridge for uncovered areas; USSD-based data submission as last resort |

**Success Criteria:**
- Connectivity audit completed for all ~90 facilities within 3 months
- Zero facilities lose connectivity post-EHSSP closure (bridge solution in place)
- 4G deployed at ≥20 facilities within 9 months
- Solar power at ≥10 facilities without reliable electricity within 12 months
- Offline-first requirement documented and enforced for all new system procurements
- RDIP broadband connects ≥5 health facilities within 18 months

---

#### W1-09: Establish MoH Cloud Spoke on G-Cloud (When Available)

**Gaps Addressed:** TEC-01 (Sovereign Health Data Hosting — Interim), TEC-06 (Containerisation and Deployment Automation), GEN-01 (Sovereign Cloud Infrastructure)

**Description:**
Establish interim hosting for all new MoH central services (OpenHIM, OpenCR, HAPI FHIR, Keycloak, OCL Terminology Service, Prometheus/Grafana/Loki) at PDGA Data Centre using Docker Compose deployment, with a documented migration path to G-Cloud Kubernetes when the national data centre becomes available (target 2027). This initiative provides the physical infrastructure foundation for W1-05 (MPI) and W1-06 (HIE). All components are deployed as containers from day one, ensuring G-Cloud readiness and portability. When G-Cloud is delivered, the MoH "cloud spoke" migrates with 60-day parallel-run per system.

**Prerequisites:**
- PDGA DC capacity available (rack space, power, network)
- W1-01 initiated (DHDD provides operational management for hosted services)
- Docker Compose expertise available (TA or DHDD staff)

**Dependencies:**
- Internal: W1-05 and W1-06 depend on this initiative for hosting; W1-04 (DHIS2 containerisation depends on hosting expertise)
- Cross-sectoral: GEN-01 (G-Cloud delivery by RDIP determines migration timeline); PDGA coordination for DC hosting agreement

**Deliverables / Outputs:**
1. Hosting agreement with PDGA DC documented — SLA (availability ≥99.5%, backup, access, incident response), rack allocation (2–4 rack units), network connectivity, power
2. Server infrastructure procured and installed — 2 physical servers (or VM allocation) with total capacity: 16+ CPU cores, 64+ GB RAM, 2+ TB storage
3. Docker Compose stack deployed — OpenHIM, OpenCR, HAPI FHIR, PostgreSQL, MongoDB, ElasticSearch, Keycloak, OCL, Prometheus, Grafana, Loki
4. Containerisation standards document — base images, container registry (Docker Hub initially), deployment procedures, update/rollback procedures
5. Automated backup procedures — daily PostgreSQL/MongoDB/ElasticSearch backups, offsite backup storage (encrypted external drive or cloud backup), documented restore procedures
6. Network security — firewall rules, VPN access for remote administration, TLS certificates for all services
7. DHIS2 containerisation pilot — DHIS2 tested in Docker deployment on staging environment
8. G-Cloud migration plan documented — per-system migration checklist, 60-day parallel-run procedures, Kubernetes deployment manifests (prepared when G-Cloud specifications known)

**Estimated Duration:** 12 months
- Months 1–3: PDGA DC agreement; server procurement and installation; Docker Compose stack deployed with core services
- Months 3–6: OpenHIM, OpenCR, HAPI FHIR, Keycloak, monitoring operational (supporting W1-05 and W1-06)
- Months 6–9: OCL terminology service deployed; DHIS2 containerisation tested; backup procedures validated
- Months 9–12: Operational documentation complete; G-Cloud migration plan prepared; handover to DHDD Systems Operations Lead

**Resource Requirements:**
- Staff: 1 DevOps/infrastructure engineer (TA, 6 months — Docker, Linux administration, network security); DHDD Systems Operations Lead (when recruited)
- Equipment: 2 physical servers (rack-mount, enterprise-grade), UPS, network switches, external backup storage
- Hosting: PDGA DC rack space, power, network — monthly hosting fee

**Indicative Cost:** USD 60,000–110,000
- DevOps/infrastructure TA (6 months): USD 30,000–50,000
- Server hardware (2 servers + UPS + networking): USD 15,000–30,000
- PDGA DC hosting (12 months): USD 6,000–12,000
- Backup storage and cloud backup service: USD 3,000–6,000
- TLS certificates and security tools: USD 2,000–4,000
- Contingency: USD 4,000–8,000

**Funding Source:** RDIP (infrastructure component — hosting and containerisation align with G-Cloud readiness)

**Risks and Mitigations:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| PDGA DC capacity insufficient or unavailable | Medium | Critical | Negotiate early; alternative: ProgTel hosting; fallback: leased rack space at commercial DC in Progressa City |
| Server procurement delays (import logistics) | Medium | High | Procure early in initiative; consider local suppliers; cloud VM as interim while hardware arrives |
| G-Cloud delivery delayed beyond 2027 | High | Medium | Interim hosting designed for extended operation; Docker Compose scales adequately for Wave 1–2 volumes; migration deferred but not blocked |
| Single point of failure (no redundancy at PDGA DC) | Medium | High | Automated backups with offsite storage; documented recovery procedures; DR testing quarterly; G-Cloud provides redundancy at migration |

**Success Criteria:**
- PDGA DC hosting agreement signed within 2 months
- Docker Compose stack operational with all core services within 4 months
- 99.5% uptime for hosted services over any 30-day period
- Automated daily backups verified monthly with successful restore test
- DHIS2 Docker deployment validated on staging within 9 months
- G-Cloud migration plan documented within 12 months

---

#### W1-10: Digital Health Workforce Foundation

**Gaps Addressed:** BUS-05 (Stakeholder and Change Management), DAT-06 (Data Stewardship Staffing)

**Description:**
Establish the human capacity foundation for MoH's digital health transformation through three workstreams: (a) recruit core DHDD technical team (6 initial positions, as specified in W1-01), (b) launch systematic digital health training programme for facility staff, and (c) establish a facility-level change champion network. This initiative bridges the capacity gap that currently exists — MoH has no unified digital health coordination team, no standardised training programme, and no facility-level digital health support structure. The ~90% EHR readiness (2022 survey) represents an opportunity, but the ~90% paper-based operations demonstrate that readiness alone does not produce adoption.

**Prerequisites:**
- W1-01 (DHDD established — recruitment cannot proceed without institutional framework)
- W1-02 (Digital Health Strategy provides the vision around which training is designed)
- DHIS2 Tracker and other pilot systems initiated (W1-04 — training is system-specific)

**Dependencies:**
- Internal: W1-01 (DHDD is the institutional home for workforce); W1-04 (DHIS2 Tracker training is a component); W1-07 (eLMIS training is a component); all other initiatives depend on workforce availability
- Cross-sectoral: Government civil service recruitment processes and salary scales; WHO/HISP regional node for training-of-trainers support

**Deliverables / Outputs:**
1. DHDD recruitment completed — 6 positions filled: Director, Architecture & Standards Lead, Data Governance Lead, Systems Operations Lead, Project Coordinator, Administrative Support (detailed in W1-01 outputs)
2. Digital health readiness re-assessment at 20 priority facilities — updated from 2022 survey, identifying specific training needs by facility and staff cadre
3. Digital health orientation module (4 hours) — MoH digital health strategy, key systems overview, data governance basics, privacy obligations; delivered to ≥100 MoH staff
4. Role-based training curriculum developed for: DHIS2 Tracker (EIR/IDSR+) 16–24 hours, eLMIS 8–16 hours, data quality and governance 8 hours
5. 20 facility-level change champions recruited and trained — one per pilot facility, drawn from nurses or health information officers demonstrating digital aptitude
6. Training-of-trainers (ToT) programme designed and initial cohort trained (10 master trainers)
7. 3 Regional Health Data Officers recruited (Phase 1 of 7 total — priority regions with highest facility density or greatest data quality challenges)
8. Competency framework aligned with implementation maturity model (Section 7 of benchmarks) — Level 1 targets for foundation, Level 2 for core team

**Estimated Duration:** 18 months
- Months 1–3: DHDD recruitment launched (per W1-01); readiness assessment at 20 facilities; orientation module designed
- Months 3–6: First DHDD staff onboarded; orientation module delivered to 100+ staff; change champion identification
- Months 6–9: Role-based training curricula developed; change champions trained; ToT programme designed
- Months 9–12: ToT initial cohort trained (10 master trainers); role-based training begins at pilot facilities
- Months 12–18: 3 Regional Health Data Officers recruited and deployed; training delivery at scale; competency assessment

**Resource Requirements:**
- Staff: 1 digital health capacity building specialist (TA, 9 months), 1 training coordinator (TA, 6 months), DHDD Capacity Building Lead (when recruited)
- Recruitment: 6 DHDD positions (costed under W1-01), 3 Regional Health Data Officers (new positions), 20 change champions (existing staff, designated)
- Training venues: 5–8 training sessions across regions; DHIS2/eLMIS system access for hands-on training; tablets for practice

**Indicative Cost:** USD 200,000–350,000
- Capacity building specialist TA (9 months): USD 45,000–70,000
- Training coordinator TA (6 months): USD 25,000–40,000
- Readiness assessment (field visits, 20 facilities): USD 10,000–20,000
- Orientation module development and delivery (100+ staff): USD 15,000–25,000
- Role-based training curriculum development: USD 15,000–25,000
- Change champion training (20 persons × 5 days): USD 20,000–35,000
- ToT programme (10 trainers × 10 days): USD 25,000–40,000
- 3 Regional Health Data Officers (salaries, 12 months): USD 30,000–50,000
- Training materials, printing, logistics: USD 10,000–20,000
- Contingency: USD 10,000–25,000

**Funding Source:** Global Fund NFM4 (RSSH/health systems strengthening), GAVI (immunisation workforce), WHO (training normative support), Government budget (RHDO salaries long-term)

**Risks and Mitigations:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Qualified DHDD candidates unavailable or attracted away by donor/NGO salaries | High | Critical | Competitive salary benchmarking; secondments from WHO or HISP regional node for initial period; hybrid/remote work options for specialist roles |
| Training does not translate to sustained adoption (~90% readiness → ~10% adoption pattern repeats) | High | High | Change champion network for ongoing support; mentorship model (3 months post-training); link adoption to performance metrics; facility visits by Regional Health Data Officers |
| Government recruitment processes slow | High | Medium | Begin recruitment process immediately upon DHDD establishment; TA secondments as bridge while civil service process completes |
| Regional Health Data Officer positions not budgeted in government payroll | Medium | High | Initial funding through project/donor support; advocate for permanent budget line through NDHSC; demonstrate value through data quality improvements |

**Success Criteria:**
- ≥4 DHDD positions filled within 9 months
- Readiness assessment completed at 20 facilities within 3 months
- ≥100 MoH staff complete digital health orientation within 6 months
- 20 change champions trained and active at pilot facilities within 9 months
- 10 master trainers complete ToT within 12 months
- 3 Regional Health Data Officers deployed within 15 months
- Training completion rates ≥80% for all role-based programmes

---

#### W1-11: EHSSP Digital Health Transition Plan

**Gaps Addressed:** BUS-04 (Project and Programme Management Capacity — EHSSP transition dimension)

**Description:**
Manage the transition of EHSSP-funded digital health systems and functions to sustainable post-EHSSP arrangements before the project closing date of 29 August 2025. EHSSP funds four critical digital health systems (e-NHIS, DHIS2 interoperability, eCRVS expansion, facility connectivity) and eLMIS infrastructure. Without proactive transition planning, these systems face immediate operational risk upon EHSSP closure. This initiative produces a comprehensive transition plan, secures successor funding or operational arrangements for each system, and ensures continuity of digital health services through the funding gap period (August 2025 – G-Cloud availability circa 2027).

**Prerequisites:**
- EHSSP project status and closure timeline confirmed (29 August 2025)
- W1-01 initiated (DHDD provides the institutional home for post-EHSSP system management)
- Current EHSSP digital health expenditure documented (recurrent costs by system)

**Dependencies:**
- Internal: W1-01 (DHDD as successor for EHSSP digital health coordination); W1-08 (connectivity bridge directly addresses EHSSP satellite funding loss); W1-07 (eLMIS hosting transition)
- Cross-sectoral: RDIP (successor for infrastructure components); NHIA (successor for e-NHIS operational costs); Global Fund (successor for eLMIS hosting)

**Deliverables / Outputs:**
1. EHSSP digital health asset inventory — all systems, infrastructure, contracts, staff, and recurrent costs currently funded by EHSSP
2. System-by-system transition plan:
   - e-NHIS: operational costs transferred to NHIA budget or MoH allocation; hosting arrangement confirmed
   - eCRVS: cloud hosting continued through RDIP or government allocation; device maintenance budgeted
   - Facility connectivity: bridge satellite funding secured (linked to W1-08)
   - eLMIS: hosting costs absorbed by Global Fund or transitioned to PDGA DC (linked to W1-07)
   - DHIS2 interoperability: operations absorbed by HMIS team/DHDD; HISP regional node support contract
3. Recurrent cost absorption schedule — annual recurrent costs by system with identified funding source for each
4. Staff transition plan — EHSSP-funded ICT staff transitioned to DHDD or MoH permanent positions where applicable
5. Risk register for transition period — identified risks, mitigations, and escalation pathways
6. NDHSC endorsement of transition plan (via inaugural or early meeting)

**Estimated Duration:** 6 months (urgent — must complete before EHSSP closure)
- Month 1: Asset inventory; recurrent cost documentation; stakeholder mapping
- Months 2–3: System-by-system transition options developed; funding negotiations with RDIP, NHIA, Global Fund
- Month 4: Transition plan drafted; risk register compiled; staff transition options identified
- Month 5: NDHSC review and endorsement; funding commitments confirmed
- Month 6: Transition plan execution begins; monitoring of critical system operations post-closure

**Resource Requirements:**
- Staff: 1 project transition specialist (TA, 4 months), EHSSP PMU cooperation (current EHSSP staff), MoH Finance and Administration
- Coordination: EHSSP World Bank task team, RDIP programme manager, NHIA, Global Fund country team, MoDE/PDGA

**Indicative Cost:** USD 40,000–70,000
- Transition specialist TA (4 months): USD 25,000–40,000
- Asset inventory and assessment: USD 5,000–10,000
- Stakeholder coordination meetings: USD 5,000–10,000
- Contingency: USD 5,000–10,000

**Funding Source:** EHSSP (final disbursement — transition planning is a legitimate closing activity) + RDIP

**Risks and Mitigations:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| EHSSP closure before transition plan executed | High | Critical | Begin immediately; parallel-track transition planning with system operations; ensure at minimum 3-month bridge arrangements for all systems |
| Successor funding not confirmed for all systems | High | High | Prioritise: connectivity first (W1-08), then e-NHIS operations, then eCRVS hosting; government emergency allocation as backstop; NDHSC escalation |
| EHSSP staff lost without transition to DHDD | Medium | High | Identify key staff early; offer DHDD positions (W1-01 recruitment); knowledge transfer documentation; consultant contracts as bridge |
| Vendor contracts expire with EHSSP | Medium | High | Inventory all vendor contracts; renegotiate or extend under new funding; ensure contract novation where needed |

**Success Criteria:**
- Asset inventory completed within 2 months
- Successor funding identified for all 4 critical systems before EHSSP closure
- Zero system outages attributable to EHSSP transition in the 6 months post-closure
- ≥2 EHSSP digital health staff transitioned to DHDD or MoH positions
- NDHSC-endorsed transition plan in place before closure date
- Recurrent cost absorption schedule integrated into MoH annual budget process

---

### 4.2.1 Wave 1 Cost Summary

| Initiative | Indicative Cost (USD) | Primary Funding Source |
|-----------|----------------------|----------------------|
| W1-01: Digital Health Governance | 180,000–280,000 | RDIP + Government |
| W1-02: National Digital Health Strategy | 25,000–45,000 | WHO + RDIP |
| W1-03: Health Data Governance Framework | 35,000–55,000 | WHO + RDIP |
| W1-04: DHIS2 Strengthening | 200,000–350,000 | Global Fund + GAVI + WHO + RDIP |
| W1-05: MPI/Client Registry | 120,000–200,000 | RDIP + WHO |
| W1-06: eCRVS-NHIS Integration | 250,000–400,000 | RDIP + Government |
| W1-07: eLMIS National Rollout | 180,000–300,000 | Global Fund + RDIP |
| W1-08: Broadband Transition | 350,000–600,000 | RDIP + Government + GAVI + Global Fund |
| W1-09: MoH Cloud Spoke | 60,000–110,000 | RDIP |
| W1-10: Digital Health Workforce | 200,000–350,000 | Global Fund + GAVI + WHO + Government |
| W1-11: EHSSP Transition | 40,000–70,000 | EHSSP + RDIP |
| **Total Wave 1** | **USD 1,640,000–2,760,000** | |

**Wave 1 total range: USD 1.6–2.8M** — consistent with the Wave 1 estimate of USD 1.8–3.2M in Section 4.1.3 (which includes contingency and programme management overhead not allocated to individual initiatives).

### 4.2.2 Wave 1 Dependency Map

The 11 initiatives have explicit sequencing dependencies:

```
W1-11 (EHSSP Transition) ───→ Urgent: Must complete by Aug 2025
    │
W1-01 (Governance) ──→ Foundation: Enables all other initiatives
    │
    ├── W1-02 (Strategy) ──→ Follows governance establishment
    │
    ├── W1-03 (Data Governance) ──→ Enables data exchange and MPI
    │       │
    │       ├── W1-05 (MPI) ──→ Requires data governance + hosting
    │       │       │
    │       │       └── W1-06 (eCRVS-NHIS Integration) ──→ Requires MPI + HIE
    │       │
    │       └── W1-09 (Cloud Spoke) ──→ Provides hosting for MPI, HIE
    │
    ├── W1-04 (DHIS2 Strengthening) ──→ Parallel; requires connectivity
    │
    ├── W1-07 (eLMIS Rollout) ──→ Parallel; requires connectivity
    │
    ├── W1-08 (Broadband Transition) ──→ Enables facility-level systems
    │
    └── W1-10 (Workforce) ──→ Parallel; enables all system adoptions
```

**Critical path:** W1-01 → W1-03 → W1-09 → W1-05 → W1-06

This critical path determines that the eCRVS-NHIS integration (W1-06), the initiative with the highest health equity impact, requires approximately 12–15 months of foundation-building before the integration flow can go live. This is consistent with the 12–18 month benchmark for the Priority 1 integration flow documented in Section 8 of the benchmarks.

### 4.2.3 Wave 1 Funding Source Mapping

| Funding Source | Initiatives Supported | Estimated Contribution | Mechanism |
|---------------|----------------------|----------------------|-----------|
| **RDIP** | W1-01, W1-02, W1-03, W1-05, W1-06, W1-07, W1-08, W1-09, W1-11 | USD 600,000–1,000,000 | Institutional strengthening, infrastructure, interoperability components |
| **Global Fund NFM4** | W1-04, W1-07, W1-10 | USD 250,000–450,000 | Surveillance, supply chain, RSSH components |
| **GAVI** | W1-04, W1-08, W1-10 | USD 100,000–200,000 | EIR transition, immunisation facility connectivity |
| **WHO** | W1-02, W1-03, W1-05, W1-10 | USD 80,000–150,000 | Normative/technical support, training, governance design |
| **Government of Progressa** | W1-01, W1-06, W1-08 | USD 200,000–400,000 | DHDD salaries, e-NHIS operations (presidential priority), bridge connectivity |
| **EHSSP (final disbursement)** | W1-11 | USD 25,000–40,000 | Transition planning as closing activity |
| **HISP regional node** | W1-04 | In-kind/project | DHIS2 technical support |

---

## Section 4.3: Wave 2 Plan (2027–2029) — "Exchange, Digitize, Scale"

*TOGAF ADM Phase F — Migration Planning (continued)*

Wave 2 builds upon the governance, shared platforms, and foundational registries established in Wave 1. Its strategic objective shifts from establishing prerequisites to deploying clinical and programme systems at scale, activating the full set of priority integration flows through the HIE, migrating to sovereign cloud infrastructure, and building the workforce required to sustain operations. Wave 2 is the highest-investment phase, aligned with the peak of RDIP infrastructure delivery (G-Cloud, broadband backbone, last-mile connectivity) and the transition between Global Fund NFM4 (ending 2027) and NFM5 (starting 2028).

Wave 2 comprises 10 initiatives, each building upon specific Wave 1 outputs and addressing gaps that could not be resolved until the foundational layer was operational.

---

### Wave 2 Initiative Summary

| ID | Initiative | Gaps Addressed | Duration | Indicative Cost (USD) |
|----|-----------|---------------|----------|-----------------------|
| W2-01 | HIE Expansion — Activate Priority Integration Flows | INT-02, INT-03, INT-04, INT-05, INT-06, APP-01 | 24 months | 280,000–480,000 |
| W2-02 | EHR Pilot and Scale (OpenMRS at 15–20 Facilities) | APP-02, INT-04, INT-05 | 30 months | 550,000–950,000 |
| W2-03 | e-NHIS Enhancement — Offline Claims, Mobile Enrollment, Scaling | APP-05, INT-05 | 24 months | 200,000–350,000 |
| W2-04 | DHIS2 Tracker EIR National Scale (SPT Transition) | APP-03, INT-02 | 24 months | 300,000–500,000 |
| W2-05 | Laboratory Information System Deployment | APP-06, INT-03 | 24 months | 250,000–450,000 |
| W2-06 | Electronic IDSR+ National Rollout | APP-04, INT-03 | 18 months | 150,000–280,000 |
| W2-07 | G-Cloud Migration — Sovereign Health Data Hosting | TEC-01, TEC-06, GEN-01, GEN-06 | 18 months | 180,000–300,000 |
| W2-08 | FHIR Adoption and Terminology Standards Maturation | DAT-02, DAT-03, INT-07, DAT-04 | 24 months | 120,000–220,000 |
| W2-09 | Digital Health Workforce Scale-Up | BUS-05, DAT-06 | 30 months | 350,000–600,000 |
| W2-10 | Cybersecurity Maturation and Disaster Recovery | TEC-03, TEC-04 | 18 months | 120,000–200,000 |
| **Total Wave 2** | | | | **USD 2,500,000–4,330,000** |

---

### W2-01: HIE Expansion — Activate Priority Integration Flows

**Gaps Addressed:** INT-02, INT-03, INT-04, INT-05, INT-06, APP-01

**Description:**
Expand the OpenHIM-based HIE from the single eCRVS→MPI→e-NHIS flow operational since Wave 1 to the full set of 5–6 priority integration flows defined in Section 3.5. This involves developing new mediators, FHIR adapters for legacy systems, and activating bidirectional data exchange. By the end of Wave 2, the HIE should process 4–5 integration flows with transaction volumes exceeding 500 messages per day. The HIE transitions from a proof-of-concept to the operational backbone of health data exchange.

**Wave 1 Prerequisites:**
- OpenHIM operational with ≥1 integration flow (W1-06)
- MPI containing ≥500,000 records with PIXm/PDQm APIs (W1-05)
- HAPI FHIR Server operational (W1-06)
- API governance standards published (W1-06)
- Keycloak IAM integrated (W1-06)

**Dependencies:**
- Internal: W2-02 (EHR deployment generates clinical data for Flows 4 and 5); W2-05 (LIS deployment enables Flow 3); W2-04 (EIR scaling generates immunisation data for Flow 2); W2-07 (G-Cloud migration requires platform readiness)
- Cross-sectoral: GEN-05 (future national Government Service Bus — HIE must be compatible); GEN-01 (G-Cloud hosting for production HIE)

**Key Integration Flows Activated:**

| Flow | Source → Target | Mediator Type | Dependency |
|------|----------------|---------------|------------|
| Flow 2 | EIR (DHIS2 Tracker) → DHIS2 Aggregate | Native DHIS2 programme-to-aggregate | W2-04 EIR scaling |
| Flow 3 | LIS → DHIS2 Tracker IDSR+ | FHIR DiagnosticReport mediator | W2-05 LIS deployment |
| Flow 4 | EHR → DHIS2 Aggregate | FHIR MeasureReport mediator | W2-02 EHR at ≥10 facilities |
| Flow 5 | EHR ↔ e-NHIS (eligibility/claims) | Bidirectional FHIR mediator | W2-02 + W2-03 both operational |
| Flow 6 | DHIS2 → WHO/RHO ADX | DHIS2 ADX module | DHIS2 quality gates configured |

**Deliverables:**
1. 4–5 new OpenHIM mediators developed, tested, and deployed (Flows 2–6)
2. FHIR adapters for LIS and e-NHIS legacy systems
3. Bidirectional e-NHIS eligibility/claims mediator with clinical-to-financial code mapping
4. DHIS2 ADX automated international reporting configured and validated
5. HIE transaction dashboard showing real-time flow volumes, error rates, and latency
6. Integration testing suite for regression testing across all flows
7. Updated API governance standards with lessons from Wave 1

**Indicative Cost:** USD 280,000–480,000
- Integration architect TA (12 months): USD 60,000–90,000
- Mediator developers (2 × 12 months): USD 80,000–130,000
- FHIR adapter development (LIS, e-NHIS): USD 60,000–100,000
- Testing infrastructure and QA: USD 30,000–50,000
- HIE operational hosting (24 months): USD 20,000–40,000
- ADX configuration and WHO/RHO coordination: USD 15,000–30,000
- Documentation and knowledge transfer: USD 15,000–40,000

**Funding Source:** RDIP (interoperability component) + WHO (ADX/international reporting)

**Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Legacy systems resist FHIR integration | High | High | FHIR façade pattern — adapter sits outside legacy system; no legacy modification required |
| Transaction volumes overwhelm interim hosting | Medium | High | G-Cloud migration (W2-07) provides scalable infrastructure; horizontal scaling of OpenHIM channels |
| Multiple mediator dependencies create cascading failures | Medium | High | Circuit breaker patterns in OpenHIM; independent mediator health checks; graceful degradation |

**Success Criteria:**
- ≥4 integration flows live through HIE by end of Wave 2
- HIE processes ≥500 messages per day with <5% error rate
- Integration maturity advanced from Level 1 (ad-hoc) to Level 3 (defined, API-based)
- ADX automated reporting operational for ≥3 WHO indicator sets
- All mediators documented with operational runbooks for DHDD

---

### W2-02: EHR Pilot and Scale (OpenMRS at 15–20 Facilities)

**Gaps Addressed:** APP-02 (EHR System), INT-04 (Clinical→Aggregate), INT-05 (Insurance Eligibility/Claims)

**Description:**
Deploy OpenMRS as the national EHR platform, starting with a pilot at 3–5 facilities focused on maternal health and HIV/ART modules, then scaling to 15–20 facilities. The EHR introduces structured, coded clinical data capture at the point of care, replacing the ~90% paper-based clinical documentation identified in the AS-IS assessment. The rollout follows a vertical-first strategy: specific clinical programmes (maternal health, HIV/ART) are digitised before expanding to general outpatient services. Each facility receives local server infrastructure with offline-first capability, ensuring operations continue during connectivity interruptions.

**Wave 1 Prerequisites:**
- DHDD operational with Architecture & Standards Lead (W1-01)
- Data governance framework in force with patient consent protocol (W1-03)
- MPI operational with ≥500,000 records (W1-05) — EHR queries MPI for patient identity
- HIE operational (W1-06) — EHR routes clinical data through OpenHIM
- Facility connectivity at pilot sites confirmed (W1-08)
- Change champions active at pilot facilities (W1-10)

**Dependencies:**
- Internal: W2-07 (G-Cloud for central EHR components); W2-08 (ICD-11/LOINC terminology for structured coding); W2-09 (training capacity for clinician adoption); W2-01 (HIE mediators for Flows 4 and 5)
- Cross-sectoral: GEN-02 (broadband connectivity determines EHR facility selection); GEN-01 (G-Cloud for central database replication)

**Deliverables:**
1. OpenMRS 3.x deployed at 3–5 pilot facilities with maternal health and HIV/ART modules (Months 1–12)
2. OpenMRS FHIR module configured — Patient, Encounter, Observation, Condition resources exposed
3. OpenMRS-to-MPI integration validated — patient lookup via PIXm at registration
4. Clinician training completed at pilot sites (20–40 hours per clinician, 50–100 staff trained)
5. Pilot evaluation report — adoption rates, data quality, clinical workflow impact, lesson learned
6. OpenMRS scaled to 15–20 facilities (Months 12–30) — targeting urban/peri-urban hospitals, e-NHIS-contracted sites, teaching hospitals
7. Local facility servers deployed with offline sync capability at all EHR sites
8. Paper-to-digital coexistence protocol documented (parallel operation for 6–12 months per facility)

**Indicative Cost:** USD 550,000–950,000
- OpenMRS implementation lead (18 months): USD 80,000–120,000
- Clinical informaticists (2 × 12 months — module configuration, clinical workflow): USD 70,000–120,000
- Facility hardware (20 facilities × USD 10,000–15,000 per facility): USD 200,000–300,000
- Clinician training (150 staff × multi-day): USD 60,000–100,000
- Local server infrastructure (20 servers with offline sync): USD 40,000–80,000
- OpenMRS community support / IntraHealth engagement: USD 30,000–60,000
- FHIR module configuration and HIE integration: USD 30,000–60,000
- Pilot evaluation and lesson documentation: USD 15,000–30,000
- Solar/power protection at EHR sites: USD 25,000–80,000

**Funding Source:** Dedicated health sector digitisation funding (World Bank / AfDB proposal) + Global Fund NFM5 (HIV/ART module) + GAVI (maternal health alignment)

**Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Clinician resistance to digital documentation | High | Critical | Change champion network; demonstrate time savings after learning curve; clinical workflow co-design with users |
| Paper-to-digital transition creates duplicate workload | High | High | Hybrid operation limited to 6–12 months; clear criteria for paper retirement per facility |
| Connectivity insufficient for real-time sync | Medium | Medium | Offline-first design with local facility servers; background sync when connected |
| Dedicated health digitisation funding not secured | Medium | Critical | Prepare World Bank/AfDB proposal during Wave 1; partial scale-up using Global Fund HIV/ART component |

**Success Criteria:**
- OpenMRS pilot operational at ≥3 facilities within 12 months of Wave 2 start
- ≥80% clinician adoption at pilot sites after 6 months
- EHR deployed at 15–20 facilities by Month 30
- FHIR-based clinical data flowing to HIE from ≥10 facilities
- Data quality in EHR matches or exceeds paper-based registers (≥90% completeness for key indicators)

---

### W2-03: e-NHIS Enhancement — Offline Claims, Mobile Enrollment, Scaling

**Gaps Addressed:** APP-05 (e-NHIS Enhancement), INT-05 (Insurance Eligibility/Claims)

**Description:**
Transform e-NHIS from a basic enrollment and claims platform (current 15,000–20,000 beneficiaries against a 60,000 target) into a robust national health insurance information system with offline claims processing, mobile enrollment, and integration with the EHR and HIE. This initiative builds on the eCRVS→e-NHIS auto-enrollment flow established in Wave 1 (W1-06) to dramatically expand coverage. The target is 60,000+ beneficiaries with active claims processing, supported by offline-capable claims submission from facilities with intermittent connectivity.

**Wave 1 Prerequisites:**
- eCRVS→MPI→e-NHIS auto-enrollment flow operational (W1-06)
- Data governance framework covering insurance data (W1-03)
- DHDD operational (W1-01) — coordinates e-NHIS integration with broader architecture

**Dependencies:**
- Internal: W2-01 (Flow 5 — EHR↔e-NHIS bidirectional integration); W2-02 (EHR at e-NHIS-contracted facilities); W2-07 (G-Cloud for e-NHIS hosting)
- Cross-sectoral: NHIA budget and policy direction; government commitment to universal health coverage

**Deliverables:**
1. e-NHIS offline claims module — Progressive Web App (PWA) enabling claims submission from facilities without continuous connectivity; sync when connected
2. Mobile enrollment module — community-based enrollment via mobile devices (tablets or smartphones) for outreach campaigns
3. e-NHIS beneficiary count target: ≥60,000 active beneficiaries (including auto-enrolled from eCRVS flow)
4. FHIR CoverageEligibilityRequest/Response APIs — real-time eligibility verification from EHR
5. Claims-to-clinical mapping — ICD-11 and procedure codes mapped to e-NHIS benefit package
6. e-NHIS provider performance dashboards — claims analysis, utilisation patterns, fraud detection indicators
7. e-NHIS migrated to G-Cloud hosting (from EHSSP-era interim hosting)

**Indicative Cost:** USD 200,000–350,000
- e-NHIS development (vendor engagement — offline, mobile, APIs): USD 80,000–140,000
- Mobile enrollment devices and connectivity (50 tablets): USD 15,000–30,000
- Claims-to-clinical code mapping (joint EHR/NHIS working group): USD 20,000–35,000
- Enrollment outreach campaigns (5 regions): USD 30,000–50,000
- G-Cloud migration for e-NHIS: USD 20,000–35,000
- Training (facility staff on offline claims, community agents on mobile enrollment): USD 20,000–35,000
- Dashboard development: USD 15,000–25,000

**Funding Source:** Government of Progressa (presidential priority — universal health coverage) + RDIP (e-government alignment)

**Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| e-NHIS vendor unable to deliver offline/mobile capability | Medium | High | Issue technical specifications early; competitive tender if current vendor cannot deliver; modular PWA approach |
| Beneficiary enrollment grows faster than NHIA financial capacity | Medium | Medium | Phased geographic enrollment; premium collection systems strengthened; actuarial review of benefit package |
| Claims fraud from offline submissions | Medium | Medium | Audit trail in offline module; claims review workflow; anomaly detection in dashboards |

**Success Criteria:**
- Offline claims module operational at ≥30 facilities
- Mobile enrollment used in ≥3 regional outreach campaigns
- ≥60,000 active beneficiaries by end of Wave 2
- FHIR eligibility API integrated with ≥5 EHR sites
- e-NHIS hosted on G-Cloud

---

### W2-04: DHIS2 Tracker EIR National Scale (SPT Transition Management)

**Gaps Addressed:** APP-03 (EIR — SPT→DHIS2 Tracker Transition), INT-02 (EIR→Aggregate Reporting)

**Description:**
Scale the DHIS2 Tracker EIR from the 10–15 facility pilot (Wave 1) to national coverage across all regions with adequate connectivity, while managing the controlled parallel operation and eventual transition from SPT. This is the most politically and operationally sensitive digital health transition in the roadmap — SPT has >99% accuracy and strong stakeholder trust. The transition must demonstrate that DHIS2 Tracker EIR matches or exceeds SPT's performance before any SPT facility is retired. The initiative follows a regional rollout strategy, with regions transitioning based on connectivity and readiness assessments.

**Wave 1 Prerequisites:**
- DHIS2 Tracker EIR pilot operational at ≥10 facilities with data quality comparable to SPT (W1-04)
- DHIS2 aggregate reporting completeness ≥90% (W1-04)
- mCSD FHIR Facility Registry interface operational (W1-04)
- Change champions active at pilot facilities (W1-10)
- Pilot evaluation report completed with lessons learned

**Dependencies:**
- Internal: W2-01 (HIE Flow 2 — EIR→Aggregate); W2-07 (G-Cloud for central DHIS2); W2-09 (training capacity for regional rollout)
- Cross-sectoral: GAVI next cycle dialogue (EIR transition investment case); Vaxa (SPT vendor) engagement for managed transition; RDIP broadband (determines which facilities have sufficient connectivity for Tracker)

**Deliverables:**
1. DHIS2 Tracker EIR deployed in 3–4 additional regions (40–60 facilities) based on connectivity readiness
2. SPT→DHIS2 Tracker data migration plan — historical immunisation data backfill for migrating facilities
3. Regional transition schedule — per-region timeline based on connectivity, staff readiness, and pilot performance
4. DHIS2 Tracker EIR performance report — accuracy comparison with SPT (target: ≥99% match)
5. 200+ facility staff trained on DHIS2 Tracker EIR (Android app, offline sync, defaulter management)
6. GAVI investment case for EIR transition submitted (aligning with GAVI 6.0 strategy)
7. SPT maintained at facilities without adequate connectivity — no premature retirement
8. National programme-to-aggregate reporting operational (DHIS2 Tracker → DHIS2 Aggregate for immunisation indicators)

**Indicative Cost:** USD 300,000–500,000
- DHIS2 Tracker specialists (2 × 18 months, HISP regional node support): USD 100,000–160,000
- Tablets and hardware (60 additional facilities × USD 300): USD 18,000–30,000
- Mobile data plans (60 facilities × 24 months): USD 15,000–30,000
- Training delivery (200+ staff × multi-day): USD 50,000–90,000
- SPT data migration and parallel operation coordination: USD 30,000–50,000
- Vaxa/SPT transition engagement: USD 20,000–40,000
- GAVI investment case preparation: USD 15,000–25,000
- Regional supervision and quality assurance: USD 30,000–50,000
- Contingency: USD 22,000–55,000

**Funding Source:** GAVI (EIR transition — next strategic period) + WHO (immunisation data quality) + Global Fund NFM5 (surveillance alignment)

**Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| DHIS2 Tracker EIR fails to match SPT accuracy at scale | Medium | Critical | Extended parallel operation; do not retire SPT until accuracy validated at regional level; invest in data quality monitoring |
| GAVI funding for transition not secured | Medium | High | Prepare strong investment case with pilot data; align with GAVI 6.0 country-owned EIR strategy; co-finance with WHO |
| Staff prefer SPT familiarity over DHIS2 Tracker | High | Medium | Demonstrate DHIS2 Tracker advantages (real-time data, defaulter lists, decision support); change champion advocacy |
| Connectivity constraints limit geographic coverage | High | Medium | Android offline capability mitigates; prioritise regions with RDIP broadband; maintain SPT where connectivity insufficient |

**Success Criteria:**
- DHIS2 Tracker EIR operational in ≥4 regions (≥50 facilities) by end of Wave 2
- Data accuracy ≥99% at Tracker facilities (matching SPT benchmark)
- Programme-to-aggregate immunisation reporting automated
- GAVI investment case submitted and acknowledged
- SPT retained only at facilities without adequate connectivity

---

### W2-05: Laboratory Information System Deployment

**Gaps Addressed:** APP-06 (LIS Strengthening), INT-03 (Lab→Surveillance Notification)

**Description:**
Deploy a standardised Laboratory Information System across the national reference laboratory, 3 regional hospital laboratories, and establish the foundation for HIE-mediated lab-to-surveillance data flow. The initiative begins with a platform assessment comparing A-LIS (currently piloted) against OpenELIS Global, selects the strategic platform, then deploys with LOINC coding for priority laboratory tests. The LIS provides electronic sample management, result reporting, quality assurance tracking, and instrument interfacing — replacing manual logbooks at target laboratories.

**Wave 1 Prerequisites:**
- HIE operational with API governance standards (W1-06)
- DHIS2 Tracker IDSR+ pilot operational at ≥10 facilities (W1-04)
- Data governance framework covering laboratory data (W1-03)
- Interim hosting operational (W1-09)

**Dependencies:**
- Internal: W2-01 (HIE Flow 3 — Lab→Surveillance); W2-06 (electronic IDSR+ receives notifications from LIS); W2-07 (G-Cloud for LIS hosting); W2-08 (LOINC coding for lab tests)
- Cross-sectoral: Global Fund laboratory strengthening component; National Public Health Laboratory governance

**Deliverables:**
1. LIS platform assessment and selection report (A-LIS vs. OpenELIS Global)
2. LIS deployed at National Public Health Laboratory (central reference lab)
3. LIS deployed at 3 regional hospital laboratories
4. LOINC mapping completed for 200–300 priority laboratory test codes
5. LIS→DHIS2 aggregate integration (laboratory indicators into HMIS)
6. LIS→Surveillance FHIR mediator (DiagnosticReport → IDSR+ notification for notifiable conditions)
7. Laboratory staff trained (30–50 technicians, 16–24 hours per person)
8. Instrument interfacing at national reference lab (2–3 high-volume analysers)

**Indicative Cost:** USD 250,000–450,000
- LIS specialist TA (12 months): USD 50,000–80,000
- Platform licencing and configuration: USD 30,000–60,000
- Laboratory hardware (4 sites × workstations, barcode readers, printers): USD 40,000–80,000
- Instrument interfacing (3 analysers): USD 30,000–60,000
- LOINC mapping and terminology work: USD 20,000–35,000
- FHIR mediator development (LIS→Surveillance): USD 25,000–45,000
- Training delivery (50 staff): USD 25,000–40,000
- DHIS2 integration: USD 15,000–25,000
- Contingency: USD 15,000–25,000

**Funding Source:** Global Fund NFM5 (laboratory strengthening, RSSH) + RDIP (interoperability)

**Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| A-LIS pilot does not meet FHIR interoperability requirements | Medium | High | Platform assessment in first 3 months; OpenELIS Global as alternative with native FHIR R4 |
| Instrument interfacing more complex than estimated | Medium | Medium | Start with high-volume analysers; vendor-supported interfaces; budget for customisation |
| Laboratory staff resistance to electronic workflows | Medium | Medium | Demonstrate time savings (report turnaround); involve lab directors in design; phased rollout |

**Success Criteria:**
- LIS operational at national reference lab and ≥3 regional labs by end of Wave 2
- LOINC coding applied to ≥200 priority tests
- Automated notifiable condition alerts sent to IDSR+ from ≥1 lab
- LIS aggregate indicators visible in DHIS2 dashboards
- Laboratory report turnaround time reduced by ≥20% at digital sites

---

### W2-06: Electronic IDSR+ National Rollout

**Gaps Addressed:** APP-04 (Electronic IDSR+ — national scale), INT-03 (Lab→Surveillance — surveillance side)

**Description:**
Scale the DHIS2 Tracker-based electronic case-based IDSR+ from the Wave 1 pilot (10–20 facilities) to all facilities with connectivity, establishing national electronic disease surveillance. The system transitions from aggregate indicator-based surveillance (current) to case-based electronic notification for priority conditions, with automated alerts and response tracking. Event-based surveillance (EBS) preparation begins, with community-based signal detection through mobile tools.

**Wave 1 Prerequisites:**
- DHIS2 Tracker IDSR+ pilot operational at ≥10 facilities (W1-04)
- DHIS2 reporting completeness ≥90% (W1-04)
- Facility connectivity at target sites (W1-08)

**Dependencies:**
- Internal: W2-05 (LIS provides automated lab notifications for notifiable conditions); W2-01 (HIE Flow 3); W2-09 (IDSR focal person training at scale)
- Cross-sectoral: WHO AFRO IHR compliance; Africa CDC EBS guidance

**Deliverables:**
1. DHIS2 Tracker IDSR+ deployed at all facilities with connectivity (target: 60–80 facilities)
2. Case-based surveillance for WHO priority VPDs and epidemic-prone diseases
3. Automated alert generation and response tracking workflow
4. EBS pilot initiated at 5–10 high-risk sites (hotline + community reporting)
5. Surveillance dashboards — real-time case maps, threshold alerts, response monitoring
6. DHIS2 Tracker IDSR+→aggregate surveillance reporting automated
7. 80+ IDSR focal persons trained on electronic case notification (8–16 hours each)
8. Weekly epidemiological bulletin automated from DHIS2 surveillance data

**Indicative Cost:** USD 150,000–280,000
- Surveillance specialist TA (12 months): USD 45,000–70,000
- DHIS2 Tracker IDSR+ configuration and deployment: USD 20,000–40,000
- Tablets for facilities without devices (30 units): USD 9,000–15,000
- Training delivery (80+ staff): USD 30,000–50,000
- EBS pilot (mobile reporting tools, hotline setup): USD 20,000–40,000
- Dashboard development: USD 10,000–25,000
- Supervision, field support, and quality assurance: USD 16,000–40,000

**Funding Source:** WHO (IHR compliance) + Global Fund NFM5 (disease surveillance) + Africa CDC (EBS)

**Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Facility staff overburdened with additional case-based reporting | Medium | Medium | Streamlined notification form (5 minutes per case); mobile-friendly interface; demonstrate value through response time improvements |
| Connectivity disrupts real-time notification | High | Medium | Offline DHIS2 Android with store-and-forward; SMS fallback for critical alerts |

**Success Criteria:**
- Electronic IDSR+ operational at ≥60 facilities by end of Wave 2
- Case-based notification for ≥10 priority conditions
- Automated alert response time <48 hours for epidemic-prone diseases
- EBS pilot operational at ≥5 sites
- Weekly epidemiological bulletin generated from electronic data

---

### W2-07: G-Cloud Migration — Sovereign Health Data Hosting

**Gaps Addressed:** TEC-01 (Sovereign Hosting), TEC-06 (Containerisation), GEN-01 (G-Cloud), GEN-06 (Cloud/Hosting Policy)

**Description:**
Migrate all centrally-hosted MoH health information systems from the interim PDGA DC Docker Compose deployment (established in W1-09) to the national G-Cloud Kubernetes platform when it becomes available (target 2027). This initiative establishes the MoH "cloud spoke" within the national G-Cloud architecture, ensuring sovereign hosting, high availability, automated scaling, and compliance with the national cloud-first policy. Each system is migrated individually with a 60-day parallel-run validation period.

**Wave 1 Prerequisites:**
- All central systems containerised and operational on Docker Compose at PDGA DC (W1-09)
- G-Cloud infrastructure delivered by RDIP (external dependency)
- Kubernetes deployment manifests prepared (W1-09)

**Dependencies:**
- Internal: All Wave 2 system deployments (W2-01 through W2-06) benefit from G-Cloud scalability
- Cross-sectoral: RDIP G-Cloud delivery timeline (critical external dependency); PDGA/MoDE G-Cloud governance and access policies

**Deliverables:**
1. MoH G-Cloud spoke provisioned — dedicated namespace, resource quotas, network policies
2. Kubernetes deployment manifests finalised for all systems (OpenHIM, OpenCR, HAPI FHIR, DHIS2, Keycloak, OCL, monitoring stack)
3. System-by-system migration with 60-day parallel-run per system (6 systems × 60 days = staged over 12 months)
4. Automated CI/CD pipeline — GitOps-based deployment for DHDD-managed applications
5. Disaster recovery validated — cross-availability-zone replication (if G-Cloud supports); offsite backup to encrypted storage
6. DHIS2 migrated to G-Cloud (largest and most critical migration)
7. Performance benchmarks documented — response time, throughput, availability compared to PDGA DC baseline
8. PDGA DC interim hosting decommissioned after all systems migrated

**Indicative Cost:** USD 180,000–300,000
- Cloud/DevOps engineer TA (12 months): USD 55,000–90,000
- G-Cloud subscription/hosting fees (18 months): USD 30,000–60,000
- Kubernetes deployment engineering: USD 30,000–50,000
- CI/CD pipeline setup: USD 15,000–30,000
- Migration testing and parallel-run costs: USD 20,000–35,000
- DR validation and backup infrastructure: USD 15,000–25,000
- Contingency: USD 15,000–10,000

**Funding Source:** RDIP (G-Cloud is a RDIP deliverable — migration aligns with G-Cloud adoption targets)

**Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| G-Cloud delivery delayed beyond 2027 | High | High | Extend PDGA DC interim hosting; Docker Compose scales for Wave 2 volumes; migration deferred but not blocked |
| G-Cloud specifications incompatible with health system requirements | Medium | High | Engage RDIP G-Cloud team early with MoH requirements document; health data sovereignty non-negotiable |
| Migration causes service disruption | Medium | Critical | 60-day parallel-run per system; automated rollback procedures; migrate lowest-risk system first |

**Success Criteria:**
- MoH G-Cloud spoke operational within 6 months of G-Cloud availability
- All central systems migrated within 18 months
- 99.9% availability on G-Cloud (improvement from 99.5% PDGA DC)
- Automated CI/CD pipeline operational for DHDD
- PDGA DC decommissioned with clean handover

---

### W2-08: FHIR Adoption and Terminology Standards Maturation

**Gaps Addressed:** DAT-02 (Health Data Dictionary), DAT-03 (Terminology Services), INT-07 (API Standards), DAT-04 (Data Quality — cross-system dimension)

**Description:**
Mature the health data standards environment from the foundational ICD-11 and LOINC deployments of Wave 1 to comprehensive FHIR profiling, SNOMED CT adoption for clinical coding, and cross-system data quality governance. This initiative establishes Progressa-specific FHIR Implementation Guides (IGs) for the 6 priority integration flows, ensures all systems share a common terminology baseline, and implements cross-system data quality monitoring through the HIE.

**Wave 1 Prerequisites:**
- OCL operational with ICD-11 and LOINC core loaded (W1 quick win)
- API governance standards published (W1-06)
- DHIS2 data quality tools configured (W1-04)

**Dependencies:**
- Internal: W2-01 (HIE flows consume FHIR profiles); W2-02 (EHR generates FHIR resources); W2-05 (LIS uses LOINC); all systems benefit from standardised terminology
- Cross-sectoral: WHO SMART Guidelines FHIR IGs; HL7 FHIR community; regional harmonisation (REC health data standards)

**Deliverables:**
1. Progressa Health FHIR Implementation Guide v1.0 — 10–15 resource profiles for priority integration flows (Patient, Encounter, Observation, DiagnosticReport, Immunization, Coverage, etc.)
2. SNOMED CT licence obtained and core clinical terminology loaded into OCL
3. OCL expanded: comprehensive value sets for all active systems (500+ concepts mapped)
4. Cross-system data quality dashboard — completeness, consistency, timeliness metrics across HIE-mediated flows
5. Data quality business rules engine in OpenHIM — reject or flag non-conformant messages
6. Annual data quality assessment framework aligned with WHO DQR methodology
7. FHIR conformance testing for all systems connecting to HIE

**Indicative Cost:** USD 120,000–220,000
- Health informatics / FHIR specialist TA (12 months): USD 50,000–80,000
- SNOMED CT licence and implementation: USD 15,000–30,000
- FHIR IG development: USD 20,000–40,000
- OCL expansion and terminology mapping: USD 15,000–30,000
- Data quality dashboard and business rules: USD 10,000–20,000
- Conformance testing tools: USD 10,000–20,000

**Funding Source:** WHO (health data standards) + RDIP (interoperability)

**Success Criteria:**
- Progressa Health FHIR IG published and enforced for all new integrations
- SNOMED CT operational in OCL for clinical coding
- Cross-system data quality score ≥85% across HIE flows
- All HIE-connected systems pass FHIR conformance tests

---

### W2-09: Digital Health Workforce Scale-Up

**Gaps Addressed:** BUS-05 (Change Management), DAT-06 (Data Stewardship)

**Description:**
Scale the digital health workforce from the Wave 1 foundation to full DHDD staffing (14 positions), complete Regional Health Data Officer deployment (7 regions), train 300+ facility staff on deployed systems, and establish a sustainable continuous professional development programme. This initiative addresses the critical finding that ~90% EHR readiness coexists with ~90% paper-based operations — demonstrating that adoption requires sustained investment in people, not just technology.

**Wave 1 Prerequisites:**
- DHDD operational with ≥6 staff (W1-01, W1-10)
- 20 change champions active (W1-10)
- 10 master trainers ToT-qualified (W1-10)
- 3 Regional Health Data Officers deployed (W1-10)

**Dependencies:**
- Internal: All Wave 2 system deployments generate training demand; W2-02 (EHR clinician training is highest-volume); W2-04 (EIR scaling training); W2-06 (IDSR+ training)
- Cross-sectoral: UoP (University of Progressa) partnership for health informatics curriculum; government civil service reform for digital health positions

**Deliverables:**
1. DHDD fully staffed — 14 positions (8 additional from Wave 1 base): Information Security Officer, Integration Engineers (2), Data Analysts (2), Help Desk/Support (2), additional Systems Administrator
2. 7 Regional Health Data Officers deployed (4 additional from Wave 1)
3. 300+ facility staff trained on deployed systems (EHR, EIR, IDSR+, eLMIS)
4. Continuous professional development programme established — annual training calendar, e-learning platform (Moodle or equivalent), competency assessments
5. 40 facility change champions active (expanded from 20 in Wave 1)
6. UoP health informatics module developed (partnership with university)
7. DHDD competency framework at Level 2–3 (Working to Practitioner) for core team
8. Annual staff satisfaction and retention survey conducted

**Indicative Cost:** USD 350,000–600,000
- DHDD additional staffing (8 positions × 24 months): USD 150,000–250,000
- Regional Health Data Officers (4 additional × 24 months): USD 60,000–100,000
- Training delivery (300+ staff on multiple systems): USD 60,000–100,000
- E-learning platform setup and content development: USD 20,000–40,000
- Change champion expansion and support: USD 15,000–25,000
- UoP partnership and curriculum development: USD 15,000–30,000
- Capacity building specialist TA (12 months): USD 30,000–55,000

**Funding Source:** Government of Progressa (recurrent staffing) + Global Fund NFM5 (RSSH) + GAVI + WHO

**Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Staff attrition to private sector/NGOs | High | High | Competitive compensation; career development pathways; meaningful work; regional balance |
| Training fatigue across multiple system rollouts | Medium | Medium | Integrated training calendar; avoid concurrent system launches at same facility; blended learning |
| Government unable to absorb recurrent salary costs | Medium | Critical | Phased salary absorption plan; link DHDD staffing to demonstrated value (data quality, system uptime metrics) |

**Success Criteria:**
- DHDD at 14 staff by end of Wave 2
- 7 Regional Health Data Officers deployed
- ≥300 facility staff trained with ≥80% completion rates
- E-learning platform operational with ≥5 courses
- Staff retention rate ≥75% annually

---

### W2-10: Cybersecurity Maturation and Disaster Recovery

**Gaps Addressed:** TEC-03 (Cybersecurity), TEC-04 (Disaster Recovery)

**Description:**
Mature the security and resilience posture from the Wave 1 baseline (Keycloak IAM, basic monitoring) to a comprehensive cybersecurity framework and validated disaster recovery capability. This initiative implements multi-factor authentication across all systems, establishes a security incident response plan, deploys vulnerability scanning, and validates the full disaster recovery plan through annual exercises. With health data increasingly digital and integrated through the HIE, the attack surface has expanded significantly since Wave 1.

**Wave 1 Prerequisites:**
- Keycloak IAM deployed and integrated with OpenHIM (W1-06)
- Prometheus/Grafana/Loki monitoring operational (W1-06)
- Automated backups in place (W1-09)

**Dependencies:**
- Internal: W2-07 (G-Cloud provides infrastructure-level security); all systems must integrate with Keycloak SSO
- Cross-sectoral: PDGA cybersecurity framework (national CERT coordination); GEN-04 (Data Protection Act — when enacted)

**Deliverables:**
1. Keycloak MFA enforced across all MoH health information systems (100% coverage)
2. SSO integration completed for all systems (OpenHIM, DHIS2, OpenMRS, e-NHIS, eLMIS, LIS)
3. Security incident response plan documented and DHDD-endorsed
4. Vulnerability scanning programme — quarterly scans with remediation tracking
5. Annual DR exercise — full system recovery from backup within defined RTO (8 hours) and RPO (24 hours)
6. User access review programme — quarterly review of access rights; role-based access enforcement
7. Security awareness training for 100+ MoH staff (annual)
8. Data breach notification procedure aligned with (anticipated) Data Protection Act

**Indicative Cost:** USD 120,000–200,000
- Cybersecurity specialist TA (9 months): USD 40,000–65,000
- Vulnerability scanning tools and licences: USD 10,000–20,000
- MFA token/authenticator deployment: USD 5,000–15,000
- DR exercise (annual): USD 15,000–25,000
- Security awareness training programme: USD 10,000–20,000
- SSO integration across all systems: USD 20,000–35,000
- Incident response plan development: USD 10,000–15,000
- Contingency: USD 10,000–5,000

**Funding Source:** RDIP (cybersecurity component) + Government budget (operational security)

**Success Criteria:**
- MFA enforced on 100% of system access points
- SSO operational across all MoH health information systems
- Annual DR exercise completed with successful recovery within RTO
- Zero critical unpatched vulnerabilities open >30 days
- Security incident response plan tested via tabletop exercise

---

### 4.3.1 Wave 2 Cost Summary

| Initiative | Indicative Cost (USD) | Primary Funding Source |
|-----------|----------------------|----------------------|
| W2-01: HIE Expansion | 280,000–480,000 | RDIP + WHO |
| W2-02: EHR Pilot and Scale | 550,000–950,000 | WB/AfDB + Global Fund + GAVI |
| W2-03: e-NHIS Enhancement | 200,000–350,000 | Government + RDIP |
| W2-04: EIR National Scale | 300,000–500,000 | GAVI + WHO + Global Fund |
| W2-05: LIS Deployment | 250,000–450,000 | Global Fund + RDIP |
| W2-06: Electronic IDSR+ | 150,000–280,000 | WHO + Global Fund + Africa CDC |
| W2-07: G-Cloud Migration | 180,000–300,000 | RDIP |
| W2-08: FHIR and Terminology | 120,000–220,000 | WHO + RDIP |
| W2-09: Workforce Scale-Up | 350,000–600,000 | Government + Global Fund + GAVI + WHO |
| W2-10: Cybersecurity and DR | 120,000–200,000 | RDIP + Government |
| **Total Wave 2** | **USD 2,500,000–4,330,000** | |

### 4.3.2 Wave 2 Funding Source Mapping

| Funding Source | Initiatives Supported | Estimated Contribution | Mechanism |
|---------------|----------------------|----------------------|-----------|
| **RDIP** | W2-01, W2-03, W2-05, W2-07, W2-08, W2-10 | USD 600,000–1,000,000 | Infrastructure, interoperability, G-Cloud |
| **Dedicated Health Digitisation (WB/AfDB)** | W2-02 | USD 350,000–600,000 | New proposal — health sector investment lending |
| **Global Fund NFM4 completion + NFM5** | W2-04, W2-05, W2-06, W2-09 | USD 350,000–600,000 | RSSH, laboratory, surveillance, supply chain |
| **GAVI (next cycle)** | W2-02, W2-04, W2-09 | USD 200,000–350,000 | EIR transition, immunisation integration |
| **WHO** | W2-01, W2-04, W2-06, W2-08, W2-09 | USD 100,000–200,000 | Normative support, standards, IHR |
| **Government of Progressa** | W2-03, W2-09, W2-10 | USD 300,000–500,000 | e-NHIS operations, recurrent staffing, security |
| **Africa CDC** | W2-06 | USD 30,000–60,000 | EBS pilot support |

---

## Section 4.4: Wave 3 Plan (2030–2033) — "Analyze, Optimize, Sustain"

Wave 3 shifts the strategic objective from system deployment to optimisation, sustainability, and innovation. By this phase, the core digital health infrastructure should be operational: governance structures mature, shared platforms processing thousands of daily transactions, clinical systems at 30+ facilities, and the workforce at full strength. Wave 3 focuses on three imperatives: achieving full coverage and integration maturity, building advanced analytics capabilities, and transitioning to sustainable government-funded operations that no longer depend on project-based donor financing for core operations.

Wave 3 is documented at a higher level than Waves 1 and 2 because the specific scope, sequencing, and costs will be refined during the Wave 2→Wave 3 transition review (end 2029), informed by actual performance data and the evolving funding landscape.

---

### Wave 3 Initiative Summary

| ID | Initiative | Focus Area | Duration | Indicative Cost (USD) |
|----|-----------|-----------|----------|-----------------------|
| W3-01 | EHR Coverage Expansion (30–40 Facilities) | Clinical Systems | 36 months | 500,000–900,000 |
| W3-02 | Health Data Warehouse and Advanced Analytics | Data & Analytics | 30 months | 250,000–450,000 |
| W3-03 | Cross-Border Surveillance and International Reporting | Public Health | 24 months | 120,000–220,000 |
| W3-04 | SPT Retirement and EIR Consolidation | Immunisation | 24 months | 100,000–180,000 |
| W3-05 | Full Integration Maturity (Level 3–4) | Interoperability | 36 months | 200,000–350,000 |
| W3-06 | Sustainability Transition — Government Budget Absorption | Governance | 48 months | 150,000–250,000 |
| W3-07 | Community-Based Digital Health Services | Service Delivery | 30 months | 180,000–320,000 |
| **Total Wave 3** | | | | **USD 1,500,000–2,670,000** |

---

### W3-01: EHR Coverage Expansion (30–40 Facilities)

**Description:** Expand OpenMRS from the 15–20 facilities achieved in Wave 2 to 30–40 facilities, covering all regional hospitals, major health centres, and teaching hospitals. Expand clinical modules beyond maternal health and HIV/ART to include general outpatient, NCD management, and pharmacy. The target is structured clinical data available for ≥60% of hospital encounters nationally.

**Dependencies on Wave 2:** W2-02 (EHR at 15–20 facilities with validated workflows), W2-07 (G-Cloud hosting), W2-09 (trained workforce), W2-08 (terminology standards for clinical coding).

**Cross-Sectoral Dependencies:** RDIP broadband at all target facilities; government budget for facility-level IT staff.

**Indicative Cost:** USD 500,000–900,000 (facility hardware, training, support, module development).

**Funding Source:** Government budget (increasing share) + Global Fund NFM5 (HIV/ART module) + bilateral donors.

---

### W3-02: Health Data Warehouse and Advanced Analytics

**Description:** Establish a cross-system health data warehouse (PostgreSQL/Apache Superset or similar) that aggregates data from DHIS2, OpenMRS, e-NHIS, LIS, and eLMIS through the HIE. Enable advanced analytics including disease burden modelling, resource allocation optimisation, quality-of-care indicators, and predictive outbreak detection. This transitions MoH from reactive data collection to proactive evidence-based decision-making.

**Dependencies on Wave 2:** W2-01 (≥4 integration flows providing structured data), W2-07 (G-Cloud for compute-intensive analytics), W2-08 (standardised data through FHIR profiles and coded terminology).

**Cross-Sectoral Dependencies:** University of Progressa partnership for data science capacity; national statistics coordination for population denominators.

**Indicative Cost:** USD 250,000–450,000 (data warehouse infrastructure, analytics platform, data science TA, dashboard development).

**Funding Source:** Government budget + WHO (health intelligence) + bilateral donors (data for decision-making programmes).

---

### W3-03: Cross-Border Surveillance and International Reporting

**Description:** Activate cross-border health data exchange for disease surveillance, particularly with neighbouring countries. Implement automated ADX-based reporting to WHO, RHO, and Africa CDC. Establish event-based surveillance at national scale (building on Wave 2 EBS pilot). Comply with IHR 2005 requirements for electronic surveillance notification. Deploy community-based surveillance through CHW mobile tools.

**Dependencies on Wave 2:** W2-06 (electronic IDSR+ at ≥60 facilities), W2-01 (ADX reporting configured), W2-08 (standardised coding for cross-border data exchange).

**Cross-Sectoral Dependencies:** Bilateral agreements with the ministries of health of neighbouring countries; REC health data sharing framework; WHO AFRO surveillance coordination.

**Indicative Cost:** USD 120,000–220,000 (cross-border protocol, ADX expansion, EBS national scale, CBS mobile tools).

**Funding Source:** WHO (IHR) + Africa CDC + REC health funds + Global Fund NFM5 (surveillance).

---

### W3-04: SPT Retirement and EIR Consolidation

**Description:** Complete the transition from SPT to DHIS2 Tracker EIR nationally, including historical data migration, SPT vendor decommissioning, and consolidation of the immunisation data platform. SPT is retired only at facilities where DHIS2 Tracker EIR has demonstrated ≥99% accuracy for at least 6 months. SPT decommissioning is managed collaboratively with Vaxa, honouring the partnership that delivered >99% accuracy for 350,000–400,000 children.

**Dependencies on Wave 2:** W2-04 (EIR at ≥50 facilities with validated accuracy), GAVI investment case approved.

**Cross-Sectoral Dependencies:** GAVI strategic period alignment; Vaxa collaboration for managed transition.

**Indicative Cost:** USD 100,000–180,000 (data migration, final training, decommissioning coordination, historical archive).

**Funding Source:** GAVI + WHO (immunisation data).

---

### W3-05: Full Integration Maturity (Level 3–4)

**Description:** Advance integration maturity from Level 3 (Defined, API-based) achieved in Wave 2 to Level 4 (Quantitatively Managed, event-driven). This involves transitioning from poll-based to event-driven architecture (pub/sub), implementing real-time clinical event notifications, and achieving all 6 priority integration flows at production maturity with >99% message delivery reliability. The HIE transitions from a routing platform to a comprehensive health data exchange with shared health record (SHR) capability.

**Dependencies on Wave 2:** W2-01 (≥4 flows live), W2-07 (G-Cloud Kubernetes for event-driven scaling), W2-08 (FHIR IG enforced).

**Cross-Sectoral Dependencies:** GEN-05 (national Government Service Bus — HIE aligns with or federates into national platform); MoDE interoperability framework.

**Indicative Cost:** USD 200,000–350,000 (event-driven architecture, SHR development, performance optimisation, integration testing).

**Funding Source:** RDIP follow-on + Government budget.

---

### W3-06: Sustainability Transition — Government Budget Absorption

**Description:** Execute the progressive transition from donor-funded project operations to government-sustained recurrent funding. The target is government budget absorbing ≥50% of digital health recurrent costs by 2033. This involves establishing dedicated MoH digital health budget lines, integrating DHDD operating costs into the Medium-Term Expenditure Framework (MTEF), and developing a Digital Health Sustainability Plan endorsed by MoF. Donor funding shifts from establishment costs to innovation and expansion.

**Dependencies on Wave 2:** W2-09 (workforce costs are the largest recurrent item), W2-07 (G-Cloud hosting costs to be absorbed), all Wave 2 systems generating demonstrable value.

**Cross-Sectoral Dependencies:** MoF budget allocation; Medium-Term Expenditure Framework cycle; public financial management reform.

**Indicative Cost:** USD 150,000–250,000 (sustainability planning TA, costing studies, budget advocacy, MTEF integration).

**Funding Source:** Government budget (core) + RDIP follow-on (transition support).

**Key Milestones:**
- 2030: Government absorbs DHDD salaries (14 positions) + Regional Health Data Officers (7 positions)
- 2031: Government absorbs G-Cloud hosting fees and connectivity costs
- 2032: Government absorbs system maintenance and support contracts
- 2033: ≥50% of total digital health recurrent costs funded from government budget; donor share limited to innovation, expansion, and capital investment

---

### W3-07: Community-Based Digital Health Services

**Description:** Extend digital health reach beyond facilities to community health workers (CHWs) and community-based services. Deploy mobile health tools for CHW data collection, referral management, and patient follow-up. Integrate community-level data with the national health information architecture through the HIE. This addresses the significant rural population that may not regularly access facility-based services.

**Dependencies on Wave 2:** W2-02 (EHR provides referral destination), W2-04 (EIR supports community-based defaulter tracing), W2-06 (IDSR+ CBS provides surveillance foundation), W2-09 (CHW training capacity).

**Cross-Sectoral Dependencies:** National Community Health Strategy; RDIP last-mile connectivity; mobile network operator partnerships.

**Indicative Cost:** USD 180,000–320,000 (mobile tools, CHW training, connectivity, data integration).

**Funding Source:** Global Fund NFM5 (community systems strengthening) + GAVI (immunisation outreach) + Government budget.

---

### 4.4.1 Wave 3 Cost Summary

| Initiative | Indicative Cost (USD) | Primary Funding Source |
|-----------|----------------------|----------------------|
| W3-01: EHR Expansion | 500,000–900,000 | Government + Global Fund + bilateral |
| W3-02: Health Data Warehouse | 250,000–450,000 | Government + WHO + bilateral |
| W3-03: Cross-Border Surveillance | 120,000–220,000 | WHO + Africa CDC + Global Fund |
| W3-04: SPT Retirement | 100,000–180,000 | GAVI + WHO |
| W3-05: Full Integration Maturity | 200,000–350,000 | RDIP follow-on + Government |
| W3-06: Sustainability Transition | 150,000–250,000 | Government + RDIP follow-on |
| W3-07: Community-Based Digital Health | 180,000–320,000 | Global Fund + GAVI + Government |
| **Total Wave 3** | **USD 1,500,000–2,670,000** | |

### 4.4.2 Wave 3 Funding Source Mapping

| Funding Source | Estimated Contribution | Shift from Wave 2 |
|---------------|----------------------|-------------------|
| **Government of Progressa** | USD 600,000–1,100,000 | **Major increase** — government becomes primary funder of recurrent costs |
| **Global Fund NFM5** | USD 300,000–500,000 | Continued but declining share |
| **RDIP follow-on / successor** | USD 200,000–350,000 | Transition support, not primary |
| **GAVI** | USD 100,000–200,000 | EIR consolidation only |
| **WHO** | USD 80,000–150,000 | Normative, surveillance, analytics |
| **Africa CDC** | USD 30,000–60,000 | Cross-border surveillance |
| **Bilateral donors** | USD 150,000–300,000 | Innovation and expansion |

---

### 4.4.3 Total Five-Year Investment Summary (All Waves)

| Wave | Period | Total Estimate (USD) | Government Share |
|------|--------|---------------------|-----------------|
| Wave 1 | 2025–2026 | 1,640,000–2,760,000 | ~15% |
| Wave 2 | 2027–2029 | 2,500,000–4,330,000 | ~15% |
| Wave 3 | 2030–2033 | 1,500,000–2,670,000 | ~40% |
| **Programme management overhead (10%)** | 2025–2033 | 564,000–976,000 | — |
| **Total** | **2025–2033** | **USD 6,204,000–10,736,000** | **Progressive increase** |

This range (USD 6.2–10.7M) is consistent with the Section 3.6.4 strategic investment estimate of USD 7.2–12.9M (which includes broader contingency and inflation adjustments over the full period).

---

## Section 4.5: Visual Roadmap

The following timeline presents all initiatives across the three transformation waves in a consolidated view. Initiatives are grouped by domain and colour-coded for visual tracking. Funding programme alignment is shown alongside the implementation timeline.

### 4.5.1 Initiative Timeline (All Waves)

**Legend — Domain Colour Coding:**

| Domain Code | Domain | Description |
|-------------|--------|-------------|
| 🔵 GOV | Governance & Policy | Institutional structures, strategies, frameworks |
| 🟢 DAT | Data & Standards | MPI, terminology, data quality, FHIR, analytics |
| 🟠 APP | Applications & Systems | DHIS2, EHR, EIR, LIS, eLMIS, e-NHIS, IDSR+ |
| 🔴 TEC | Technology Infrastructure | Hosting, connectivity, cloud, security |
| 🟣 INT | Integration & HIE | HIE platform, integration flows, interoperability |
| 🟡 WKF | Workforce & Capacity | Staffing, training, change management |

#### Wave 1 (2025–2026): "Govern, Connect, Register"

| ID | Initiative | Domain | 2025 Q1 | Q2 | Q3 | Q4 | 2026 Q1 | Q2 | Q3 | Q4 |
|----|-----------|--------|---------|----|----|----|---------|----|----|----|
| W1-11 | EHSSP Transition | 🔵 GOV | ████ | ██ | | | | | | |
| W1-01 | Digital Health Governance | 🔵 GOV | ████ | ████ | ████ | ████ | | | | |
| W1-02 | Digital Health Strategy | 🔵 GOV | | ████ | ████ | | | | | |
| W1-03 | Data Governance Framework | 🔵 GOV | | ████ | ████ | ████ | | | | |
| W1-09 | MoH Cloud Spoke (Interim) | 🔴 TEC | ████ | ████ | ████ | ████ | | | | |
| W1-05 | MPI/Client Registry | 🟢 DAT | | | ████ | ████ | ████ | ████ | | |
| W1-06 | eCRVS-NHIS Integration | 🟣 INT | | | | ████ | ████ | ████ | ████ | ████ |
| W1-04 | DHIS2 Strengthening | 🟠 APP | ████ | ████ | ████ | ████ | ████ | ████ | ████ | |
| W1-07 | eLMIS Rollout | 🟠 APP | ████ | ████ | ████ | ████ | ████ | ████ | | |
| W1-08 | Broadband Transition | 🔴 TEC | ████ | ████ | ████ | ████ | ████ | ████ | ████ | |
| W1-10 | Workforce Foundation | 🟡 WKF | ████ | ████ | ████ | ████ | ████ | ████ | ████ | |

**Key Wave 1 Milestones:**
- ⬥ 2025 Q2: EHSSP closure — all transitions must be complete
- ⬥ 2025 Q3: Ministerial Order signed (NDHSC + DHDD)
- ⬥ 2025 Q4: OpenHIM + MPI operational on interim hosting
- ⬥ 2026 Q2: eCRVS→MPI→e-NHIS integration flow live
- ⬥ 2026 Q3: DHIS2 Tracker EIR pilot at ≥10 facilities
- ⬥ 2026 Q4: **WAVE 1→2 TRANSITION DECISION (NDHSC)**

#### Wave 2 (2027–2029): "Exchange, Digitize, Scale"

| ID | Initiative | Domain | 2027 Q1 | Q2 | Q3 | Q4 | 2028 Q1 | Q2 | Q3 | Q4 | 2029 Q1 | Q2 | Q3 | Q4 |
|----|-----------|--------|---------|----|----|----|---------|----|----|----|---------|----|----|-----|
| W2-07 | G-Cloud Migration | 🔴 TEC | ████ | ████ | ████ | ████ | ████ | | | | | | | |
| W2-01 | HIE Expansion | 🟣 INT | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | | | |
| W2-02 | EHR Pilot and Scale | 🟠 APP | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | |
| W2-03 | e-NHIS Enhancement | 🟠 APP | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | | | |
| W2-04 | EIR National Scale | 🟠 APP | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | | | |
| W2-05 | LIS Deployment | 🟠 APP | | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | | | |
| W2-06 | Electronic IDSR+ | 🟠 APP | ████ | ████ | ████ | ████ | ████ | | | | | | | |
| W2-08 | FHIR & Terminology | 🟢 DAT | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | | | |
| W2-09 | Workforce Scale-Up | 🟡 WKF | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | |
| W2-10 | Cybersecurity & DR | 🔴 TEC | | ████ | ████ | ████ | ████ | ████ | | | | | | |

**Key Wave 2 Milestones:**
- ⬥ 2027 Q2: G-Cloud available; migration begins
- ⬥ 2027 Q3: EHR pilot at 3–5 facilities
- ⬥ 2027 Q4: Global Fund NFM4 ends; NFM5 begins
- ⬥ 2028 Q2: ≥4 HIE integration flows live
- ⬥ 2028 Q4: EHR at 15–20 facilities; EIR at ≥50 facilities
- ⬥ 2029 Q1: All central systems on G-Cloud
- ⬥ 2029 Q2: DHDD fully staffed (14 positions)
- ⬥ 2029 Q4: **WAVE 2→3 TRANSITION DECISION (NDHSC)**

#### Wave 3 (2030–2033): "Analyze, Optimize, Sustain"

| ID | Initiative | Domain | 2030 Q1 | Q2 | Q3 | Q4 | 2031 Q1 | Q2 | Q3 | Q4 | 2032 Q1 | Q2 | Q3 | Q4 | 2033 |
|----|-----------|--------|---------|----|----|----|---------|----|----|----|---------|----|----|-----|------|
| W3-01 | EHR Expansion | 🟠 APP | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | |
| W3-02 | Health Data Warehouse | 🟢 DAT | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | | |
| W3-03 | Cross-Border Surveillance | 🟣 INT | | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | | | | |
| W3-04 | SPT Retirement | 🟠 APP | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | | | | |
| W3-05 | Full Integration Maturity | 🟣 INT | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | |
| W3-06 | Sustainability Transition | 🔵 GOV | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ |
| W3-07 | Community Digital Health | 🟡 WKF | | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | | |

**Key Wave 3 Milestones:**
- ⬥ 2030 Q2: Health data warehouse operational
- ⬥ 2030 Q4: Government absorbs DHDD salaries
- ⬥ 2031 Q2: EHR at 30+ facilities; cross-border surveillance with neighbouring countries operational
- ⬥ 2031 Q4: SPT fully retired nationally
- ⬥ 2032 Q2: Integration maturity Level 4 achieved
- ⬥ 2033: Government absorbs ≥50% of digital health recurrent costs
- ⬥ 2033 Q4: **national digital master plan target achieved**

### 4.5.2 Funding Programme Alignment

| Funding Programme | 2025 | 2026 | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033 |
|------------------|------|------|------|------|------|------|------|------|------|
| **EHSSP** | ██▓░ | | | | | | | | |
| **RDIP** | ████ | ████ | ████ | ████ | ██░░ | | | | |
| **Global Fund NFM4** | ████ | ████ | ████ | ░░░░ | | | | | |
| **Global Fund NFM5** | | | | ████ | ████ | ████ | ████ | ░░░░ | |
| **GAVI (current cycle)** | ████ | ████ | ████ | ░░░░ | | | | | |
| **GAVI (next cycle)** | | | | | ████ | ████ | ████ | ████ | ████ |
| **WHO CCS** | ████ | ████ | ████ | ████ | ░░░░ | | | | |
| **Dedicated Health Digitisation (new)** | | | ████ | ████ | ████ | ████ | ████ | ░░░░ | |
| **Government Budget** | ░░ | ░░ | ██ | ██ | ███ | ████ | ████ | ████ | ████ |

**Legend:** ████ = Active/full funding | ██░░ = Winding down | ░░░░ = Transition | ░░ = Minimal

---

## Section 4.6: Dependency Map — Critical Path Analysis

### 4.6.1 Intra-Wave Dependency Chains

#### Wave 1 Critical Path (reproduced from Section 4.2.2)

```
W1-01 (Governance) → W1-03 (Data Governance) → W1-09 (Hosting) → W1-05 (MPI) → W1-06 (HIE/Integration)
```

Duration: 12–15 months from start to first integration flow. This chain cannot be compressed without accepting governance or data governance shortcuts that create long-term technical debt.

#### Wave 2 Critical Path

```
W1-06 (HIE operational) → W2-07 (G-Cloud migration) → W2-02 (EHR deployment) → W2-01 (HIE expansion — Flows 4, 5)
                                                      ↘ W2-05 (LIS deployment) → W2-01 (HIE expansion — Flow 3)
                                                      ↘ W2-04 (EIR scaling) → W2-01 (HIE expansion — Flow 2)
```

The Wave 2 critical path converges on W2-01 (HIE Expansion), which can only activate additional integration flows as the source systems (EHR, LIS, EIR) become operational. The G-Cloud migration (W2-07) is the infrastructure prerequisite for scalable deployment.

#### Wave 3 Critical Path

```
W2-01 (≥4 flows) → W3-05 (Full integration maturity — Level 4)
W2-02 (EHR 15–20) → W3-01 (EHR expansion 30–40)
W2-04 (EIR ≥50) → W3-04 (SPT retirement)
W2-01 + W2-07 + W2-08 → W3-02 (Health data warehouse)
W3-06 (Sustainability) — depends on all other Wave 3 initiatives demonstrating value
```

### 4.6.2 Cross-Sectoral Dependencies

The MoH digital health roadmap depends on deliverables from external stakeholders and programmes that MoH does not directly control. These cross-sectoral dependencies represent the highest-risk items in the roadmap because delays are outside MoH's mitigation capacity.

| Dependency | Provider | Required By | Impact if Delayed | Severity |
|-----------|----------|-------------|-------------------|----------|
| **G-Cloud / National Data Centre** | RDIP / PDGA / MoDE | W2-07 (2027 Q1) | All Wave 2 systems remain on interim hosting; scalability constrained; no sovereignty guarantee | **Critical** |
| **Broadband Backbone and Last-Mile** | RDIP / ProgTel | W1-08 (2025–2026), W2 facilities | EHR, EIR, IDSR+ geographic coverage limited to facilities with existing connectivity | **Critical** |
| **eCRVS API / Data Access** | Civitas Group (eCRVS vendor) / MoDE | W1-06 (2026 Q1) | Priority 1 integration flow blocked; MPI cannot be seeded; health insurance auto-enrollment impossible | **Critical** |
| **National Digital ID Platform** | RDIP / Immigration / MoDE | W2 (2027–2028) | MPI remains multi-identifier workaround; no unified national health ID; deterministic matching limited to ~50% coverage | **High** |
| **Data Protection Act** | National Assembly / MoDE | W1-03 interim (2025), national (2027+) | MoH interim framework sufficient for Wave 1–2; national legislation needed for cross-sector data exchange at scale | **High** |
| **Government Service Bus** | MoDE / PDGA | W3-05 (2030+) | MoH HIE operates independently; future integration with national platform deferred | **Medium** |
| **Second Submarine Cable** | RDIP / cable consortium | W2 (2027–2028) | Single point of failure persists; international connectivity resilience not achieved | **Medium** |

### 4.6.3 Risk Impact Assessment — Cross-Sectoral Delays

#### Scenario A: G-Cloud Delayed by 18+ Months (Delivery 2029 instead of 2027)

**Impact:** Wave 2 systems (EHR, LIS, expanded HIE) remain on PDGA DC Docker Compose environment. Performance acceptable for Wave 1 volumes but may strain under Wave 2 transaction loads (500+ messages/day through HIE, 15–20 EHR facilities syncing). No Kubernetes orchestration, no auto-scaling, no redundancy.

**Fallback Plan:**
1. Extend PDGA DC hosting agreement — negotiate additional rack space, power, and bandwidth
2. Upgrade interim infrastructure — add servers to increase capacity (estimated USD 15,000–30,000)
3. Optimise Docker Compose deployment — implement Docker Swarm for basic orchestration and service replication
4. Defer G-Cloud-specific features (auto-scaling, multi-AZ DR) to Wave 3
5. Prepare migration at any time — Kubernetes manifests maintained and tested against a staging cluster

**Residual Risk:** Moderate. Docker Compose can handle Wave 2 volumes for a small country like Progressa. The risk is operational (no redundancy, no auto-recovery) rather than capacity.

#### Scenario B: Broadband Rollout Covers <30 Health Facilities by 2028

**Impact:** EHR, DHIS2 Tracker EIR, and electronic IDSR+ deployments limited to connected facilities. Target of 15–20 EHR facilities may not be achievable. EIR national scaling delayed. Rural facilities remain on satellite or 4G mobile data, with higher operational costs and lower reliability.

**Fallback Plan:**
1. Strict offline-first enforcement — all systems must function without connectivity (already mandated in Wave 1)
2. Extended 4G mobile data bridge — negotiate bulk data plans with ProgTel and private mobile operators for health sector
3. Prioritise EHR/EIR at facilities within broadband reach — adjust facility selection based on actual broadband coverage, not planned coverage
4. Advocate through RDIP governance (NDHSC → DTFA Steering Committee) for health facility prioritisation in broadband rollout
5. Solar + mobile connectivity packages for high-priority rural facilities (estimated USD 3,000–5,000 per facility)

**Residual Risk:** High for geographic coverage targets, low for system functionality (offline-first design mitigates).

#### Scenario C: eCRVS API Not Available by 2026

**Impact:** Priority 1 integration flow (birth registration → MPI → insurance enrollment) cannot operate in real-time. MPI seeding from eCRVS data blocked or limited to historical bulk import.

**Fallback Plan:**
1. Batch file exchange — eCRVS exports CSV/XML daily or weekly; OpenHIM batch mediator processes and routes to MPI and e-NHIS. Less elegant but functionally equivalent with 24–72 hour latency.
2. Manual enrollment bridge — trained health facility staff manually enroll newborns in e-NHIS at birth registration point (as currently done, but with MPI lookup for duplicate prevention)
3. Escalate through governance — NDHSC formal request to MoDE and RDIP DTFA Steering Committee for eCRVS vendor compliance; include in next eCRVS contract renewal as mandatory deliverable
4. Prepare for API when available — all OpenHIM mediators and MPI configurations built for real-time API; switch from batch to API requires configuration change only

**Residual Risk:** Low for health outcomes (enrollment happens with latency); high for integration maturity targets (Level 3 not achievable without real-time APIs).

#### Scenario D: National Digital ID Platform Delayed Beyond 2029

**Impact:** MPI continues operating with multi-identifier matching (eCRVS NIN at ~50% + probabilistic matching). No unified national health identifier. Cross-sector identity resolution limited.

**Fallback Plan:**
1. MPI is already designed for this scenario — OpenCR probabilistic matching provides coverage for population without NIN
2. Health-sector-specific identifier issued by MPI for patients without NIN (temporary health ID, replaced by NID when available)
3. Lobby for NIN production resumption through NDHSC and RDIP governance
4. MPI integration with NID platform prepared — when NID available, deterministic matching rate jumps from ~50% to target >90%

**Residual Risk:** Low for health operations; medium for data quality (probabilistic matching produces ~2% false positive rate vs. near-zero for deterministic).

#### Scenario E: Global Fund NFM5 Does Not Include Adequate Digital Health Component

**Impact:** Funding gap for Wave 2 laboratory, surveillance, and supply chain system scaling. W2-05 (LIS), W2-06 (IDSR+), and W2-04 (EIR) partially unfunded.

**Fallback Plan:**
1. Prepare strong digital health investment case for NFM5 country dialogue (begin preparation in 2026)
2. Alternative bilateral funding (USAID, DFID, GIZ) for laboratory and surveillance digitisation
3. Reduce scope — deploy LIS at national reference lab only; delay regional expansion to Wave 3
4. Co-finance from RDIP interoperability component where applicable

**Residual Risk:** Medium. Global Fund increasingly recognises digital health as RSSH investment, but allocation is not guaranteed.

### 4.6.4 Consolidated Dependency Map (Text Diagram)

```
CROSS-SECTORAL INPUTS                         MoH ROADMAP                                OUTCOMES
═══════════════════                           ══════════════                              ═════════

RDIP G-Cloud ───────────────┐
   (target 2027)            │
                            ├──→ W2-07 G-Cloud Migration ──→ Sovereign hosting
RDIP Broadband ─────────────┤                                     │
   (2025–2028)              ├──→ W1-08 → W2-02/04/06 ──→ EHR/EIR/IDSR+ at scale
                            │                                     │
eCRVS API ──────────────────┼──→ W1-06 → W2-01 ──→ Integration flows (4–5 live)
   (Civitas Group)          │         │                           │
                            │         └──→ W2-03 e-NHIS ──→ 60,000+ beneficiaries
NID Platform ───────────────┼──→ W1-05 MPI → W2-01 ──→ Patient identity maturity
   (RDIP, 2026–2028)        │                                     │
                            │                                     ▼
Data Protection Act ────────┼──→ W1-03 → W2-08 ──→ FHIR standards + governance
   (National Assembly)      │                                     │
                            │                                     ▼
Global Fund NFM4→NFM5 ─────┼──→ W2-04/05/06 ──→ EIR + LIS + IDSR+
                            │                                     │
GAVI next cycle ────────────┼──→ W2-04 ──→ SPT→EIR transition    │
                            │                                     │
Gov't Budget ───────────────┼──→ W2-09 workforce ──→ DHDD 14 staff │
   (progressive increase)   │         │                           │
                            │         ▼                           ▼
                            └──→ W3-06 Sustainability ──→ ≥50% gov't funded (2033)
                                      │
                                      └──→ National Digital Master Plan alignment
```

### 4.6.5 Dependency Risk Summary Matrix

| Dependency | Probability of Delay | Impact | Fallback Available | Net Risk |
|-----------|---------------------|--------|-------------------|----------|
| G-Cloud delivery | High (60%) | Critical | Yes — extended interim hosting | **Medium** |
| Broadband <30 facilities | High (50%) | Critical | Yes — offline-first + 4G bridge | **Medium** |
| eCRVS API | High (70%) | Critical | Yes — batch exchange | **Low–Medium** |
| NID Platform | High (60%) | High | Yes — multi-identifier MPI | **Low** |
| Data Protection Act | High (70%) | High | Yes — MoH interim framework | **Low** |
| Global Fund NFM5 digital health | Medium (40%) | High | Partial — bilateral donors | **Medium** |
| Gov't Service Bus | Medium (50%) | Medium | Yes — independent MoH HIE | **Low** |
| Second submarine cable | Medium (40%) | Medium | Yes — operational workaround | **Low** |

The roadmap is deliberately designed to be resilient to the most probable cross-sectoral delays. No single external dependency, if delayed, blocks the entire roadmap. The combination of fallback plans and offline-first design principles ensures that MoH can make progress even under adverse conditions, with full acceleration when cross-sectoral deliverables arrive.

---

## Section 5: Investment Requirements

*TOGAF ADM Phase F — Migration Planning (Investment Case)*

This section consolidates the indicative cost estimates from the 28 initiatives across three transformation waves into a comprehensive investment framework. It provides a cost estimation methodology, investment summaries by wave and by domain, a funding source mapping that links each investment line to specific programmes, and a sustainability financial model that charts the transition from near-total donor dependency to majority government-funded digital health operations by 2033.

All figures are presented as ranges (low–high) reflecting the uncertainty inherent in 8-year planning horizons in a resource-constrained environment. Costs are in constant 2025 USD unless otherwise noted; actual disbursements will be subject to inflation, exchange rate fluctuations, and procurement outcomes.

---

### 5.1 Cost Estimation Methodology

#### 5.1.1 Basis of Estimates

The investment estimates in this roadmap are derived from four complementary sources, each contributing to different cost components:

**Source 1 — International Benchmarks and Comparables.** Cost ranges for platform deployments (OpenMRS, OpenHIM, OpenCR, DHIS2 Tracker, eLMIS) are benchmarked against documented implementations in comparable Sub-Saharan African countries. Specific references include OpenMRS deployments in Kenya (AMPATH, 130,000+ patients), Rwanda, and Malawi; OpenHIE-aligned HIE implementations in Tanzania and Ethiopia; DHIS2 Tracker EIR national rollouts in Maldives and Rwanda; and OpenELIS Global deployments in Côte d'Ivoire, DRC, and Haiti. Per-facility EHR hardware costs (USD 5,000–15,000) and training costs per trainee (USD 200–2,500 depending on intensity) are drawn from published implementation reports and the e-Health Reference Architecture Chapter 7 maturity model.

**Source 2 — EHSSP Actuals and Progressa-Specific Costs.** Where available, actual costs from the EHSSP programme (about USD 100–150 million total, of which a portion funded digital health systems) inform recurrent cost estimates for facility connectivity (satellite and 4G), hosting, and equipment. The EHSSP experience provides ground-truth data on Progressa procurement timelines, logistics costs, and the price premium associated with operating in a small market with limited local IT supply chains.

**Source 3 — Technical Architecture Specifications.** Hardware requirements (server specifications, tablet counts, network equipment) are derived from the target architecture (D6) and sized for Progressa's known parameters: ~90 public health facilities, 6 regional medical stores, 7 regions, and a population of approximately 2–3 million. Software is open-source throughout (zero licence fees), but implementation, customisation, and support costs are included.

**Source 4 — Expert Estimation.** For components without direct comparables (e.g., MoH-specific governance design TA, EHSSP transition planning), costs are estimated based on standard international consultancy rates for health informatics and public health specialists working in the region, adjusted for Progressa context. Technical assistance rates assume a blend of international specialists (USD 800–1,500/day) and regional experts (USD 400–800/day), with regional expertise preferred where available (e.g., HISP regional node for DHIS2).

#### 5.1.2 Cost Categories

All initiative costs are decomposed into the following standardised categories:

| Category | Description | Typical % of Initiative |
|----------|-------------|------------------------|
| **Technical Assistance (TA)** | International and regional consultants for design, implementation, and knowledge transfer | 35–50% |
| **Hardware and Equipment** | Servers, tablets, routers, solar kits, network equipment, UPS | 15–25% |
| **Training and Capacity Building** | Curriculum development, delivery, materials, per diem, venue costs | 10–20% |
| **Hosting and Connectivity** | Data centre hosting fees, mobile data plans, satellite bridge costs | 5–15% |
| **Software Configuration** | Customisation, mediator development, FHIR adapter development, integration testing | 10–20% |
| **Operational and Coordination** | Meetings, stakeholder engagement, travel, documentation | 5–10% |
| **Contingency** | Unforeseen costs, procurement delays, exchange rate fluctuations | 5–10% (included in initiative ranges) |

#### 5.1.3 Key Assumptions and Caveats

The following assumptions underpin the cost estimates. Deviations from these assumptions will require investment adjustments:

1. **Open-source software throughout.** All platforms (OpenMRS, OpenHIM, OpenCR, DHIS2, HAPI FHIR, Keycloak, OCL, eLMIS) are open-source with zero software licence fees. Costs reflect implementation, customisation, and support — not licencing. If a proprietary platform is selected for any component (e.g., LIS), costs will increase.

2. **Technical assistance rates.** International TA is costed at USD 800–1,500 per day; regional TA (HISP regional node, regional specialists) at USD 400–800 per day. A blended rate of approximately USD 600–1,000 per day is assumed for most initiatives.

3. **Government salary scales.** DHDD and Regional Health Data Officer salaries are estimated at USD 8,000–15,000 per year per position, reflecting competitive public sector rates in Progressa that approach (but do not match) NGO/donor salary levels. Salaries below this range will result in inability to recruit; above this range will strain government budget absorption.

4. **Hardware procurement.** Equipment prices include a 15–25% logistics premium for importation, customs clearance, and in-country distribution. Procurement timelines assume 3–6 months for international tenders.

5. **RDIP infrastructure delivery.** Cost estimates for Wave 2 and Wave 3 assume that RDIP delivers the G-Cloud platform (target 2027) and broadband connectivity to health facilities. If these are delayed, interim hosting and connectivity costs (currently in Wave 1) extend at an estimated USD 50,000–100,000 per additional year.

6. **Inflation and exchange rate.** All costs are in constant 2025 USD. No inflation adjustment is applied to the 8-year estimates. Actual costs in later years (2029–2033) may be 10–20% higher in nominal terms.

7. **Absorption capacity.** The roadmap assumes MoH can effectively absorb USD 1–2M per year in digital health investment, consistent with EHSSP disbursement rates for the digital health component. Exceeding this rate risks procurement bottlenecks, supervision gaps, and poor implementation quality.

8. **Programme management overhead.** A 10% programme management overhead is added to the sum of initiative costs, covering roadmap coordination, M&E, reporting to NDHSC and donors, and financial management. This is conservative relative to the 15–20% typical for World Bank-financed projects, reflecting the assumption that DHDD will absorb programme management functions progressively.

---

### 5.2 Investment Summary by Wave

#### 5.2.1 Wave-Level Summary

| Wave | Period | Initiative Costs (USD) | Programme Mgmt (10%) | **Total (USD)** |
|------|--------|----------------------|---------------------|----------------|
| **Wave 1** | 2025–2026 | 1,640,000–2,760,000 | 164,000–276,000 | **1,804,000–3,036,000** |
| **Wave 2** | 2027–2029 | 2,500,000–4,330,000 | 250,000–433,000 | **2,750,000–4,763,000** |
| **Wave 3** | 2030–2033 | 1,500,000–2,670,000 | 150,000–267,000 | **1,650,000–2,937,000** |
| **Grand Total** | **2025–2033** | **5,640,000–9,760,000** | **564,000–976,000** | **6,204,000–10,736,000** |

**Midpoint estimate: USD 8.5M** over 8 years (2025–2033).

This total is consistent with the Section 3.6.4 strategic investment estimate of USD 7.2–12.9M (which included broader contingency). It is also proportionate to Progressa's health sector context: EHSSP invested about USD 100–150 million in the entire health system over 5 years; this digital health roadmap represents approximately 5–10% of that scale, focused specifically on information systems and integration.

#### 5.2.2 Wave 1 Initiative Detail (2025–2026)

| ID | Initiative | Low (USD) | High (USD) | Primary Funding |
|----|-----------|-----------|------------|-----------------|
| W1-01 | Digital Health Governance (NDHSC + DHDD) | 180,000 | 280,000 | RDIP + Government |
| W1-02 | National Digital Health Strategy | 25,000 | 45,000 | WHO + RDIP |
| W1-03 | Health Data Governance Framework | 35,000 | 55,000 | WHO + RDIP |
| W1-04 | DHIS2 Strengthening | 200,000 | 350,000 | Global Fund + GAVI + WHO + RDIP |
| W1-05 | MPI/Client Registry Pilot | 120,000 | 200,000 | RDIP + WHO |
| W1-06 | eCRVS-NHIS Integration (HIE Platform) | 250,000 | 400,000 | RDIP + Government |
| W1-07 | eLMIS National Rollout | 180,000 | 300,000 | Global Fund + RDIP |
| W1-08 | Broadband Transition & Connectivity Bridge | 350,000 | 600,000 | RDIP + Government + GAVI + Global Fund |
| W1-09 | MoH Cloud Spoke (Interim Hosting) | 60,000 | 110,000 | RDIP |
| W1-10 | Digital Health Workforce Foundation | 200,000 | 350,000 | Global Fund + GAVI + WHO + Government |
| W1-11 | EHSSP Digital Health Transition | 40,000 | 70,000 | EHSSP + RDIP |
| | **Wave 1 Initiative Subtotal** | **1,640,000** | **2,760,000** | |
| | Programme Management (10%) | 164,000 | 276,000 | |
| | **Wave 1 Total** | **1,804,000** | **3,036,000** | |

**Wave 1 annual run rate:** USD 0.9–1.5M per year (18-month wave).

#### 5.2.3 Wave 2 Initiative Detail (2027–2029)

| ID | Initiative | Low (USD) | High (USD) | Primary Funding |
|----|-----------|-----------|------------|-----------------|
| W2-01 | HIE Expansion (Priority Integration Flows) | 280,000 | 480,000 | RDIP + WHO |
| W2-02 | EHR Pilot and Scale (OpenMRS, 15–20 facilities) | 550,000 | 950,000 | WB/AfDB Health Digitisation + Global Fund + GAVI |
| W2-03 | e-NHIS Enhancement (Offline, Mobile, Scaling) | 200,000 | 350,000 | Government + RDIP |
| W2-04 | DHIS2 Tracker EIR National Scale (SPT Transition) | 300,000 | 500,000 | GAVI + WHO + Global Fund |
| W2-05 | Laboratory Information System Deployment | 250,000 | 450,000 | Global Fund + RDIP |
| W2-06 | Electronic IDSR+ National Rollout | 150,000 | 280,000 | WHO + Global Fund + Africa CDC |
| W2-07 | G-Cloud Migration (Sovereign Hosting) | 180,000 | 300,000 | RDIP |
| W2-08 | FHIR Adoption and Terminology Standards | 120,000 | 220,000 | WHO + RDIP |
| W2-09 | Digital Health Workforce Scale-Up | 350,000 | 600,000 | Government + Global Fund + GAVI + WHO |
| W2-10 | Cybersecurity Maturation and DR | 120,000 | 200,000 | RDIP + Government |
| | **Wave 2 Initiative Subtotal** | **2,500,000** | **4,330,000** | |
| | Programme Management (10%) | 250,000 | 433,000 | |
| | **Wave 2 Total** | **2,750,000** | **4,763,000** | |

**Wave 2 annual run rate:** USD 0.9–1.6M per year (30-month wave).

#### 5.2.4 Wave 3 Initiative Detail (2030–2033)

| ID | Initiative | Low (USD) | High (USD) | Primary Funding |
|----|-----------|-----------|------------|-----------------|
| W3-01 | EHR Coverage Expansion (30–40 Facilities) | 500,000 | 900,000 | Government + Global Fund + Bilateral |
| W3-02 | Health Data Warehouse and Advanced Analytics | 250,000 | 450,000 | Government + WHO + Bilateral |
| W3-03 | Cross-Border Surveillance and International Reporting | 120,000 | 220,000 | WHO + Africa CDC + Global Fund |
| W3-04 | SPT Retirement and EIR Consolidation | 100,000 | 180,000 | GAVI + WHO |
| W3-05 | Full Integration Maturity (Level 3–4) | 200,000 | 350,000 | RDIP follow-on + Government |
| W3-06 | Sustainability Transition (Budget Absorption) | 150,000 | 250,000 | Government + RDIP follow-on |
| W3-07 | Community-Based Digital Health Services | 180,000 | 320,000 | Global Fund + GAVI + Government |
| | **Wave 3 Initiative Subtotal** | **1,500,000** | **2,670,000** | |
| | Programme Management (10%) | 150,000 | 267,000 | |
| | **Wave 3 Total** | **1,650,000** | **2,937,000** | |

**Wave 3 annual run rate:** USD 0.4–0.7M per year (48-month wave). The declining annual rate reflects the shift from capital establishment to sustained operations, with government budget absorbing an increasing share of recurrent costs.

---

### 5.3 Investment by Domain

The 28 initiatives across three waves can be grouped into seven architectural domains, providing an alternative view of investment allocation that aligns with the EA layer model.

#### 5.3.1 Domain Classification

| Domain | Description | Initiatives Included |
|--------|-------------|---------------------|
| **Governance & Policy** | Institutional structures, strategies, frameworks, transition planning, sustainability | W1-01, W1-02, W1-03, W1-11, W3-06 |
| **Data & Registries** | MPI, terminology services, FHIR standards, health data dictionary, analytics | W1-05, W2-08, W3-02 |
| **Applications & Clinical Systems** | DHIS2, EHR, EIR, LIS, eLMIS, e-NHIS, IDSR+, SPT retirement | W1-04, W1-07, W2-02, W2-03, W2-04, W2-05, W2-06, W3-01, W3-04 |
| **Technology Infrastructure** | Hosting, connectivity, cloud migration, cybersecurity, DR | W1-08, W1-09, W2-07, W2-10 |
| **Integration & Interoperability** | HIE platform, integration flows, cross-border exchange, integration maturity | W1-06, W2-01, W3-03, W3-05 |
| **HR & Capacity Building** | Workforce staffing, training, change management, community health | W1-10, W2-09, W3-07 |
| **Programme Management** | Roadmap coordination, M&E, financial management (10% overhead) | Cross-cutting |

#### 5.3.2 Investment by Domain — Summary Table

| Domain | Initiative Costs (USD) | % of Total | Programme Mgmt Share (10%) | **Total (USD)** |
|--------|----------------------|-----------|---------------------------|----------------|
| **Governance & Policy** | 430,000–700,000 | 7.6–7.2% | 43,000–70,000 | **473,000–770,000** |
| **Data & Registries** | 490,000–870,000 | 8.7–8.9% | 49,000–87,000 | **539,000–957,000** |
| **Applications & Clinical Systems** | 2,430,000–4,260,000 | 43.1–43.6% | 243,000–426,000 | **2,673,000–4,686,000** |
| **Technology Infrastructure** | 710,000–1,210,000 | 12.6–12.4% | 71,000–121,000 | **781,000–1,331,000** |
| **Integration & Interoperability** | 850,000–1,450,000 | 15.1–14.9% | 85,000–145,000 | **935,000–1,595,000** |
| **HR & Capacity Building** | 730,000–1,270,000 | 12.9–13.0% | 73,000–127,000 | **803,000–1,397,000** |
| **Programme Management** | — | — | 564,000–976,000 | *included above* |
| **Grand Total** | **5,640,000–9,760,000** | **100%** | **564,000–976,000** | **6,204,000–10,736,000** |

#### 5.3.3 Domain Allocation Analysis

The domain breakdown reveals a deliberate investment pattern:

**Applications and Clinical Systems (43%).** The largest investment domain, driven primarily by EHR deployment (W2-02 and W3-01 together represent USD 1.05–1.85M), DHIS2 strengthening and EIR scaling, eLMIS rollout, LIS deployment, and e-NHIS enhancement. This is appropriate: applications are the layer that generates health data and delivers clinical and programme value. However, applications only succeed if the enabling layers (governance, data, integration, infrastructure, workforce) are in place — hence the sequencing logic that positions governance and infrastructure before applications in Wave 1.

**Integration and Interoperability (15%).** The second-largest investment area reflects the central architectural principle that connected systems are exponentially more valuable than siloed ones. The HIE platform (W1-06, W2-01) alone represents USD 530,000–880,000, plus cross-border surveillance and full integration maturity initiatives. This investment transforms MoH from a collection of independent systems into an interoperable health information ecosystem.

**HR and Capacity Building (13%).** Workforce investment (USD 730,000–1,270,000) is consistent with the benchmark that training should represent 10–20% of implementation budgets. The workforce domain covers DHDD staffing, Regional Health Data Officers, facility training, change champions, and community digital health services. Underinvestment in this domain has been identified as the primary reason for the gap between Progressa's ~90% EHR readiness and ~90% paper-based operations.

**Technology Infrastructure (12%).** Infrastructure costs are moderated by three factors: RDIP funds the G-Cloud platform and broadband backbone (not costed in this roadmap), open-source software eliminates licence fees, and interim hosting at PDGA DC is low-cost. The largest infrastructure cost is the connectivity bridge (W1-08, USD 350,000–600,000) — the price of protecting facility operations during the EHSSP-to-RDIP transition.

**Data and Registries (9%).** Data layer investment includes the MPI (W1-05), terminology and standards maturation (W2-08), and the health data warehouse (W3-02). These are foundational shared services that enable all applications and integration flows. The relatively modest cost reflects the use of open-source platforms (OpenCR, OCL, PostgreSQL/Superset).

**Governance and Policy (8%).** Governance investment is front-loaded in Wave 1 (NDHSC, DHDD, data governance framework, strategy, EHSSP transition) with a sustainability transition component in Wave 3. This is the lowest-cost domain in absolute terms but arguably the highest-impact: without governance, all technical investments risk repeating the fragmented, donor-driven pattern of the past.

#### 5.3.4 CAPEX vs. OPEX Breakdown by Wave

Each wave's investment can be decomposed into capital expenditure (one-time establishment costs) and operational expenditure (recurring annual costs that must be sustained beyond project funding):

| Wave | CAPEX (USD) | OPEX/Year (USD) | Duration | Total OPEX (USD) | Wave Total (USD) |
|------|-------------|-----------------|----------|-----------------|------------------|
| **Wave 1** (2025–2026) | 1,100,000–1,850,000 | 360,000–610,000 | 1.5 yrs | 540,000–910,000 | 1,640,000–2,760,000 |
| **Wave 2** (2027–2029) | 1,500,000–2,600,000 | 400,000–690,000 | 2.5 yrs | 1,000,000–1,730,000 | 2,500,000–4,330,000 |
| **Wave 3** (2030–2033) | 600,000–1,100,000 | 225,000–390,000 | 4 yrs | 900,000–1,570,000 | 1,500,000–2,670,000 |
| **Total** | **3,200,000–5,550,000** | — | — | **2,440,000–4,210,000** | **5,640,000–9,760,000** |

**Key CAPEX components:** TA for system implementation and design, hardware procurement, software configuration, platform deployments, one-time training development.

**Key OPEX components:** DHDD and RHDO salaries, hosting fees (PDGA DC then G-Cloud), connectivity costs (satellite bridge, 4G data plans), annual training and refresher programmes, software maintenance and support contracts, monitoring and security operations.

The CAPEX-to-OPEX ratio shifts from approximately 2:1 in Wave 1 (heavily front-loaded establishment) to approximately 0.7:1 in Wave 3 (dominated by recurrent staffing and operations). This shift is the core sustainability challenge: CAPEX is typically donor-funded through project financing, while OPEX must eventually be absorbed into government recurrent budgets.

---

### 5.4 Funding Source Mapping

#### 5.4.1 Funding Sources — Profiles and Alignment

This section maps each investment line to one or more specific funding programmes based on programme mandates, confirmed allocations, and strategic alignment. The mapping reflects the current funding landscape (as of early 2025) and includes both confirmed/active programmes and anticipated/proposed funding windows.

| Funding Source | Status | Period | Mandate Alignment | Investment Type |
|---------------|--------|--------|-------------------|-----------------|
| **RDIP/DTFA** | Active (SOP-1) | Five-year | Infrastructure, interoperability, digital ID, G-Cloud, institutional strengthening | CAPEX + establishment TA |
| **Global Fund NFM4** | Active | 2024–2027 | HIV/TB/Malaria, RSSH, supply chain, surveillance, laboratory | CAPEX + programme TA |
| **Global Fund NFM5** | Anticipated | 2028–2030 | Continuation + expanded digital health RSSH | CAPEX + programme TA |
| **GAVI** | Active + next cycle | Ongoing | Immunisation data (EIR), cold chain, HSS | CAPEX + TA |
| **WHO CCS** | Active | Five-year | Normative support, governance design, data standards, IHR | TA (in-kind + project) |
| **EHSSP (residual)** | Closing Aug 2025 | To Oct 2025 | Transition planning as legitimate closing activity | Final disbursement |
| **Government of Progressa** | Ongoing | Permanent | Recurrent staffing, operations, e-NHIS (presidential priority) | OPEX + co-financing |
| **Dedicated Health Digitisation (WB/AfDB)** | Proposed | 2027–2032 | Health sector investment lending for EHR, digital health scale-up | CAPEX |
| **Bilateral Donors** | Variable | 2029+ | Innovation, expansion, specific technical areas | CAPEX + TA |
| **Africa CDC** | Emerging | 2027+ | Event-based surveillance, cross-border health security | Programme TA |
| **HISP regional node** | Active | Ongoing | DHIS2 technical support, training, regional coordination | In-kind + project TA |

#### 5.4.2 Funding Source Mapping by Wave

**Wave 1 Funding (USD 1,640,000–2,760,000)**

| Funding Source | Initiatives Supported | Estimated Contribution (USD) | % of Wave |
|---------------|----------------------|------------------------------|-----------|
| RDIP | W1-01, W1-02, W1-03, W1-05, W1-06, W1-07, W1-08, W1-09, W1-11 | 600,000–1,000,000 | 36% |
| Global Fund NFM4 | W1-04, W1-07, W1-10 | 250,000–450,000 | 16% |
| Government of Progressa | W1-01, W1-06, W1-08 | 200,000–400,000 | 14% |
| GAVI | W1-04, W1-08, W1-10 | 100,000–200,000 | 7% |
| WHO | W1-02, W1-03, W1-05, W1-10 | 80,000–150,000 | 5% |
| EHSSP (residual) | W1-11 | 25,000–40,000 | 1% |
| HISP regional node | W1-04 | In-kind/nominal | — |
| **Wave 1 Total** | | **1,255,000–2,240,000** | |
| **Unallocated / contingency gap** | | **385,000–520,000** | **~20%** |

The Wave 1 unallocated portion (approximately 20%) represents the programme management overhead plus the upper range of initiative costs that may require additional resource mobilisation. This gap is addressed through the Wave 1 funding strategy: RDIP reallocation requests, government bridge funding negotiations, and co-financing arrangements with Global Fund and GAVI during their active grant periods.

**Wave 2 Funding (USD 2,500,000–4,330,000)**

| Funding Source | Initiatives Supported | Estimated Contribution (USD) | % of Wave |
|---------------|----------------------|------------------------------|-----------|
| RDIP | W2-01, W2-03, W2-05, W2-07, W2-08, W2-10 | 600,000–1,000,000 | 23% |
| Dedicated Health Digitisation (WB/AfDB) | W2-02 | 350,000–600,000 | 14% |
| Global Fund NFM4 completion + NFM5 | W2-04, W2-05, W2-06, W2-09 | 350,000–600,000 | 14% |
| Government of Progressa | W2-03, W2-09, W2-10 | 300,000–500,000 | 12% |
| GAVI (next cycle) | W2-02, W2-04, W2-09 | 200,000–350,000 | 8% |
| WHO | W2-01, W2-04, W2-06, W2-08, W2-09 | 100,000–200,000 | 4% |
| Africa CDC | W2-06 | 30,000–60,000 | 1% |
| **Wave 2 Total** | | **1,930,000–3,310,000** | |
| **Unallocated / contingency gap** | | **570,000–1,020,000** | **~23%** |

The Wave 2 gap is larger because it includes the proposed Dedicated Health Digitisation funding (not yet secured) and expanded government contributions. Securing the WB/AfDB health sector digitisation proposal during Wave 1 is a critical financing milestone.

**Wave 3 Funding (USD 1,500,000–2,670,000)**

| Funding Source | Initiatives Supported | Estimated Contribution (USD) | % of Wave |
|---------------|----------------------|------------------------------|-----------|
| Government of Progressa | W3-01, W3-02, W3-05, W3-06, W3-07 | 600,000–1,100,000 | 40% |
| Global Fund NFM5 | W3-01, W3-03, W3-07 | 300,000–500,000 | 19% |
| RDIP follow-on / successor | W3-05, W3-06 | 200,000–350,000 | 13% |
| Bilateral Donors | W3-01, W3-02 | 150,000–300,000 | 10% |
| GAVI (next cycle) | W3-04, W3-07 | 100,000–200,000 | 7% |
| WHO | W3-02, W3-03, W3-04 | 80,000–150,000 | 5% |
| Africa CDC | W3-03 | 30,000–60,000 | 2% |
| **Wave 3 Total** | | **1,460,000–2,660,000** | |
| **Unallocated / contingency gap** | | **40,000–10,000** | **~1%** |

Wave 3 has the smallest gap because government contributions increase substantially and the investment volume decreases as the programme shifts from establishment to sustained operations.

#### 5.4.3 Initiative-Level Funding Matrix

The following matrix provides a complete mapping of all 28 initiatives to funding sources, enabling programme-level budget planning:

| Initiative | RDIP | Global Fund | GAVI | WHO | Gov't | WB/AfDB New | Bilateral | Africa CDC | EHSSP |
|-----------|--------|------------|------|-----|-------|-------------|-----------|------------|--------|
| W1-01 Governance | ● | | | | ● | | | | |
| W1-02 Strategy | ● | | | ● | | | | | |
| W1-03 Data Gov. | ● | | | ● | | | | | |
| W1-04 DHIS2 | ● | ● | ● | ● | | | | | |
| W1-05 MPI | ● | | | ● | | | | | |
| W1-06 HIE/eCRVS | ● | | | | ● | | | | |
| W1-07 eLMIS | ● | ● | | | | | | | |
| W1-08 Connectivity | ● | ● | ● | | ● | | | | |
| W1-09 Cloud Spoke | ● | | | | | | | | |
| W1-10 Workforce | | ● | ● | ● | ● | | | | |
| W1-11 Transition | ● | | | | | | | | ● |
| W2-01 HIE Expand | ● | | | ● | | | | | |
| W2-02 EHR | | ● | ● | | | ● | | | |
| W2-03 e-NHIS | ● | | | | ● | | | | |
| W2-04 EIR Scale | | ● | ● | ● | | | | | |
| W2-05 LIS | ● | ● | | | | | | | |
| W2-06 IDSR+ | | ● | | ● | | | | ● | |
| W2-07 G-Cloud | ● | | | | | | | | |
| W2-08 FHIR/Terms | ● | | | ● | | | | | |
| W2-09 Workforce | | ● | ● | ● | ● | | | | |
| W2-10 Cybersec. | ● | | | | ● | | | | |
| W3-01 EHR Expand | | ● | | | ● | | ● | | |
| W3-02 Analytics | | | | ● | ● | | ● | | |
| W3-03 Cross-Border | | ● | | ● | | | | ● | |
| W3-04 SPT Retire | | | ● | ● | | | | | |
| W3-05 Integration | ● | | | | ● | | | | |
| W3-06 Sustain. | ● | | | | ● | | | | |
| W3-07 Community | | ● | ● | | ● | | | | |

**Legend:** ● = Primary or significant funding contribution from this source.

#### 5.4.4 Consolidated Funding Source Summary (All Waves)

| Funding Source | Wave 1 (USD) | Wave 2 (USD) | Wave 3 (USD) | **Total (USD)** | **% of Total** |
|---------------|-------------|-------------|-------------|----------------|---------------|
| **RDIP** | 600K–1,000K | 600K–1,000K | 200K–350K | **1,400,000–2,350,000** | 22–23% |
| **Global Fund (NFM4+NFM5)** | 250K–450K | 350K–600K | 300K–500K | **900,000–1,550,000** | 14–16% |
| **Government of Progressa** | 200K–400K | 300K–500K | 600K–1,100K | **1,100,000–2,000,000** | 18–19% |
| **GAVI** | 100K–200K | 200K–350K | 100K–200K | **400,000–750,000** | 6–8% |
| **WHO** | 80K–150K | 100K–200K | 80K–150K | **260,000–500,000** | 4–5% |
| **Dedicated Health Digitisation (WB/AfDB)** | — | 350K–600K | — | **350,000–600,000** | 6% |
| **Bilateral Donors** | — | — | 150K–300K | **150,000–300,000** | 2–3% |
| **Africa CDC** | — | 30K–60K | 30K–60K | **60,000–120,000** | 1% |
| **EHSSP (residual)** | 25K–40K | — | — | **25,000–40,000** | <1% |
| **HISP regional node** | In-kind | — | — | **In-kind** | — |
| **Mapped subtotal** | | | | **4,645,000–8,210,000** | **75–77%** |
| **Unallocated / PMO / gap** | | | | **1,559,000–2,526,000** | **23–25%** |
| **Grand Total** | | | | **6,204,000–10,736,000** | **100%** |

The 23–25% unallocated portion comprises: (a) programme management overhead (10% = USD 564,000–976,000), (b) upper-range initiative cost contingency, and (c) a genuine funding gap requiring resource mobilisation. The active funding gap — costs above mapped sources that must be closed — is estimated at USD 500,000–1,000,000 across the full 8-year period, primarily concentrated in Wave 2 where the proposed Dedicated Health Digitisation funding is not yet secured.

#### 5.4.5 Funding Gap Identification

| Gap Area | Wave | Estimated Gap (USD) | Priority | Strategy to Close |
|---------|------|--------------------|---------|--------------------|
| EHR scale-up (if WB/AfDB proposal not secured) | Wave 2 | 350,000–600,000 | **Critical** | Prepare investment case in 2026; alternative: bilateral donors (USAID, GIZ, DFID); reduced scope (10 facilities vs. 20) |
| Programme management overhead (unfunded) | All | 564,000–976,000 | **High** | Integrate into RDIP institutional strengthening; DHDD progressively absorbs; include in donor programme budgets |
| Connectivity bridge overshoot (if RDIP broadband delayed) | Wave 1–2 | 50,000–150,000/yr | **High** | Government emergency allocation; RDIP reallocation; GAVI/GF facility-level co-financing |
| Government salary absorption shortfall | Wave 2–3 | 100,000–250,000/yr | **Medium** | MTEF integration; MoF advocacy; demonstrate DHDD value through performance metrics |
| Wave 3 bilateral donor contributions (unconfirmed) | Wave 3 | 150,000–300,000 | **Medium** | Begin bilateral engagement in 2028; align with health sector investment cases; diversify donor base |

---

### 5.5 Sustainability Financial Model

#### 5.5.1 The Sustainability Challenge

Progressa's digital health landscape is characterised by near-total donor dependency. As of 2025, an estimated 100% of digital health capital investment and approximately 85–90% of digital health recurrent costs are funded by external sources (primarily EHSSP, Global Fund, GAVI, and WHO). The Government of Progressa makes no dedicated budget allocation for digital health information systems; the limited government contribution consists of civil servant salary costs for HMIS staff and facility-level operational budgets that indirectly support data collection.

This dependency creates three structural risks:

1. **Funding cliff risk.** When donor programmes close (as EHSSP does in August 2025), systems face immediate operational disruption. The EHSSP closure threatens four active digital health systems simultaneously.

2. **Strategic fragmentation.** Donor-funded systems are designed to meet programme-specific reporting requirements (Global Fund for HIV/TB/Malaria, GAVI for immunisation) rather than integrated health information needs. This has produced the siloed system landscape documented in the AS-IS assessment.

3. **Ownership deficit.** Systems that are not budgeted by government are not owned by government. Without a government budget line, there is no institutional accountability for system performance, no recurrent maintenance budget, and no mechanism to make investment decisions independent of donor priorities.

The sustainability financial model addresses these risks through a structured transition from donor-funded establishment to government-sustained operations over the 8-year roadmap period.

#### 5.5.2 Co-Financing Strategy: Donors Fund CAPEX, Government Absorbs OPEX

The core sustainability principle is a division of financial responsibility based on cost type:

**Donor responsibility — Capital expenditure (CAPEX):**
- Platform design, implementation, and deployment
- Hardware procurement (servers, tablets, network equipment)
- Technical assistance for system configuration and integration
- One-time training programme development
- G-Cloud migration engineering

**Government responsibility — Operational expenditure (OPEX), absorbed progressively:**
- DHDD and Regional Health Data Officer salaries
- G-Cloud hosting subscription fees
- Facility connectivity costs (post-RDIP broadband delivery)
- System maintenance and software updates
- Annual training and refresher programmes
- Monitoring, security operations, and helpdesk
- e-NHIS operational costs (presidential priority)

This co-financing model is standard practice in international development: donors fund the establishment cost of new systems and institutions, while government commits to sustaining operations once established. The model requires explicit agreement between MoH, MoF, and development partners, formalised through the National Digital Health Strategy (W1-02) and NDHSC governance.

#### 5.5.3 Recurrent Cost Projection

The annual recurrent cost of operating the digital health ecosystem increases as systems are deployed and scaled:

| Cost Category | 2026 (USD) | 2028 (USD) | 2030 (USD) | 2033 (USD) |
|--------------|-----------|-----------|-----------|-----------|
| DHDD staff salaries (6→14 positions) | 60,000 | 120,000 | 140,000 | 150,000 |
| Regional Health Data Officers (3→7) | 20,000 | 50,000 | 60,000 | 70,000 |
| Hosting fees (PDGA DC → G-Cloud) | 10,000 | 30,000 | 40,000 | 45,000 |
| Facility connectivity (bridge → broadband) | 200,000 | 100,000 | 60,000 | 40,000 |
| System maintenance and support | 15,000 | 50,000 | 70,000 | 80,000 |
| Annual training and refresher | 20,000 | 40,000 | 50,000 | 50,000 |
| Monitoring, security, helpdesk | 10,000 | 25,000 | 35,000 | 40,000 |
| e-NHIS operations | 15,000 | 30,000 | 35,000 | 40,000 |
| **Total annual OPEX** | **350,000** | **445,000** | **490,000** | **515,000** |

**Notes on the recurrent cost trajectory:**

- Facility connectivity declines sharply as RDIP broadband replaces expensive satellite connections. Satellite costs approximately USD 200–400/month per facility; broadband is expected at USD 50–100/month.
- Staffing costs increase as DHDD and RHDO positions are filled but stabilise once full complement is reached.
- System maintenance increases as more platforms go live but benefits from open-source cost structure (no licence fees).
- The steady-state annual OPEX of approximately USD 500,000–550,000 represents the minimum government commitment required by 2033 to sustain the digital health ecosystem without project-based donor funding for core operations.

#### 5.5.4 Government Budget Absorption Trajectory

The following model shows the progressive shift from donor-funded to government-funded recurrent operations:

| Year | Total OPEX (USD) | Government Funded (USD) | Government % | Donor Funded (USD) | Donor % |
|------|-----------------|------------------------|-------------|-------------------|---------|
| **2025** | 250,000 | 15,000 | 6% | 235,000 | 94% |
| **2026** | 350,000 | 55,000 | 16% | 295,000 | 84% |
| **2027** | 400,000 | 80,000 | 20% | 320,000 | 80% |
| **2028** | 445,000 | 110,000 | 25% | 335,000 | 75% |
| **2029** | 470,000 | 150,000 | 32% | 320,000 | 68% |
| **2030** | 490,000 | 215,000 | 44% | 275,000 | 56% |
| **2031** | 505,000 | 275,000 | 54% | 230,000 | 46% |
| **2032** | 510,000 | 335,000 | 66% | 175,000 | 34% |
| **2033** | 515,000 | 385,000 | 75% | 130,000 | 25% |

**Government absorption milestones:**

| Milestone | Target Year | What Government Absorbs |
|-----------|------------|------------------------|
| DHDD initial salaries (6 positions) | 2026 | USD 55,000–60,000/yr |
| e-NHIS operational costs | 2027 | USD 25,000–30,000/yr |
| Full DHDD salaries (14 positions) | 2030 | USD 140,000–150,000/yr |
| RHDO salaries (7 positions) | 2030 | USD 60,000–70,000/yr |
| G-Cloud hosting fees | 2031 | USD 40,000–45,000/yr |
| Connectivity costs (post-RDIP broadband) | 2031 | USD 40,000–50,000/yr |
| System maintenance contracts | 2032 | USD 70,000–80,000/yr |
| **Majority government-funded** | **2031** | **>50% of recurrent costs** |
| **Target: 75% government-funded** | **2033** | **USD 385,000/yr** |

#### 5.5.5 Target: MoH Digital Health Budget Line at 1–2% of Health Expenditure

The WHO recommends that countries allocate 1–2% of their total health expenditure to digital health operations and information systems. For Progressa:

| Parameter | Estimate | Source |
|-----------|---------|--------|
| Total health expenditure (THE) | ~USD 100M/yr | WHO GHED (includes government + donor + private) |
| Government health expenditure | ~USD 20–30M/yr | Government budget allocation to health |
| 1% of government health expenditure | **USD 200,000–300,000/yr** | Floor target |
| 2% of government health expenditure | **USD 400,000–600,000/yr** | Ceiling target |
| Roadmap steady-state OPEX | **~USD 515,000/yr** | Section 5.5.3 projection |
| Government target contribution (75%) | **~USD 385,000/yr** | Section 5.5.4 projection |

The government target of USD 385,000 per year by 2033 falls within the 1–2% range of government health expenditure, confirming that the sustainability target is fiscally realistic. Achieving this requires:

1. **Establishing a dedicated digital health budget line** within the MoH budget, distinct from general ICT or administrative costs. This should appear in the Medium-Term Expenditure Framework (MTEF) by 2028.

2. **Progressive salary absorption.** DHDD and RHDO salaries are the largest recurrent cost item (~USD 220,000/yr at full staffing). Government must commit to absorbing these into the civil service payroll between 2028 and 2030.

3. **Demonstrating value.** Budget allocation follows demonstrated results. The NDHSC must present evidence of digital health impact (improved data quality, reduced stockouts, faster insurance enrollment, improved surveillance response times) to MoF to justify the budget line.

4. **Linking to health outcomes.** Digital health expenditure should be framed not as an ICT cost but as a health delivery investment — contributing to maternal mortality reduction, immunisation coverage, epidemic preparedness, and universal health coverage.

#### 5.5.6 Donor Exit and Handover Plans

Each major donor programme requires an explicit exit strategy that protects system continuity:

**EHSSP (Exit: August 2025)**
- Initiative W1-11 manages the transition
- Recurrent costs (connectivity, hosting) transferred to RDIP, Global Fund, or government bridge funding
- EHSSP-funded ICT staff transition to DHDD positions
- Risk: Highest urgency; transition must complete before closure

**RDIP (Wind-down: 2028–2029)**
- RDIP delivers infrastructure (G-Cloud, broadband) that becomes government-owned
- Recurrent hosting and connectivity costs absorbed into government budget by 2031
- RDIP institutional strengthening TA transitions knowledge to DHDD staff
- G-Cloud hosting fees are a government obligation once infrastructure is delivered
- Follow-on RDIP programme (if any) shifts to sustainability support

**Global Fund NFM4 (End: 2027) → NFM5 (Start: 2028)**
- Digital health components negotiated into NFM5 country dialogue (preparation in 2026)
- Supply chain (eLMIS) and surveillance (IDSR+) systems established by NFM4; NFM5 funds scaling and integration
- Post-NFM5 (2031+): government absorbs eLMIS and surveillance system operations
- Risk: NFM5 digital health allocation is not guaranteed; investment case preparation is critical

**GAVI (Current cycle → Next cycle)**
- SPT→DHIS2 Tracker EIR transition aligned with GAVI 6.0 country-owned EIR strategy
- GAVI investment case submitted during Wave 2 with pilot data
- Post-GAVI EIR cycle: government absorbs EIR operational costs (modest — DHIS2 Tracker runs on existing DHIS2 infrastructure)
- Risk: GAVI EIR transition funding timeline uncertain

**WHO CCS (Normative support — ongoing)**
- WHO support is primarily technical/normative, not financial
- Key role: governance design, data standards, IHR compliance, quality assurance
- No exit required — WHO engagement continues through successive CCS periods
- Transition: WHO shifts from design support to quality assurance and international reporting

#### 5.5.7 Sustainability Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Government unable to establish digital health budget line by 2028 | Medium | Critical | NDHSC advocacy; MoF engagement during MTEF preparation; demonstrate fiscal impact (e.g., reduced paper/transport costs offset digital investment); RDIP governance pressure |
| DHDD staff salaries not competitive with donor/NGO market | High | Critical | Salary benchmarking against NGO rates; supplement with performance incentives; negotiate special salary scale for digital health positions; hybrid/remote work options |
| RDIP infrastructure delivered but recurrent costs not budgeted | Medium | High | Include recurrent cost absorption conditions in RDIP hand-over agreements; MoF commitment letter as condition for G-Cloud access |
| Global Fund NFM5 inadequately funds digital health | Medium | High | Prepare investment case with Wave 1 evidence; engage Global Fund country team early; diversify funding (bilateral donors as alternative) |
| Political transition disrupts budget commitments | Low | Critical | Anchor digital health in administrative structures (Ministerial Order, MTEF line items) rather than political promises; build cross-party support |
| Donor fatigue reduces future health digitisation funding | Medium | Medium | Self-reliance trajectory reduces dependency; demonstrate return on investment; align with SDG monitoring and UHC reporting requirements |

#### 5.5.8 Sustainability Dashboard — Key Indicators

The NDHSC should monitor the following indicators annually to track sustainability progress:

| Indicator | 2026 Target | 2028 Target | 2030 Target | 2033 Target |
|-----------|------------|------------|------------|------------|
| Government share of digital health OPEX | 16% | 25% | 44% | 75% |
| MoH digital health budget line established | No | **Yes** | Yes | Yes |
| Digital health budget as % of government health expenditure | <0.5% | 0.5% | 1.0% | **1.5%** |
| DHDD positions on government payroll | 0 | 6 | 14 | 14 |
| RHDO positions on government payroll | 0 | 3 | 7 | 7 |
| Number of systems with confirmed recurrent funding | 2 | 5 | 8 | All |
| Donor programmes with documented exit/handover plan | 1 (EHSSP) | 3 | 5 | All |

---

### 5.6 Investment Requirements — Consolidated Summary

The total investment required to implement the MoH digital health roadmap over the period 2025–2033 is estimated at **USD 6.2–10.7 million** (midpoint: USD 8.5M), structured across three waves:

| Element | Amount (USD) |
|---------|-------------|
| Wave 1 initiative costs (11 initiatives, 2025–2026) | 1,640,000–2,760,000 |
| Wave 2 initiative costs (10 initiatives, 2027–2029) | 2,500,000–4,330,000 |
| Wave 3 initiative costs (7 initiatives, 2030–2033) | 1,500,000–2,670,000 |
| Programme management overhead (10%) | 564,000–976,000 |
| **Grand Total** | **6,204,000–10,736,000** |

This investment is fiscally proportionate. EHSSP invested about USD 100–150 million in the broader health system; this digital health roadmap represents approximately 5–10% of that scale. At the midpoint (USD 8.5M over 8 years), the average annual investment is approximately USD 1.1M — well within the absorption capacity demonstrated by MoH during EHSSP implementation.

Approximately 75–77% of the total investment is mapped to specific funding sources (RDIP, Global Fund, GAVI, WHO, Government, proposed WB/AfDB Health Digitisation). The remaining 23–25% requires resource mobilisation, primarily for the programme management function and the proposed Dedicated Health Digitisation funding window.

The sustainability model demonstrates a credible pathway from near-total donor dependency (94% in 2025) to majority government funding (75% of recurrent costs by 2033), requiring a steady-state government commitment of approximately USD 385,000–515,000 per year — equivalent to 1–2% of government health expenditure, consistent with WHO recommendations.

The investment case is strong: connected, interoperable health information systems deliver measurable improvements in maternal health outcomes, immunisation coverage, disease surveillance response times, health insurance enrollment, and supply chain efficiency — outcomes that justify the modest and achievable government financial commitment required for sustainability.

---

## Section 6: Organisational Structure and Governance

*TOGAF ADM Phase G — Implementation Governance*

This section defines the governance and organisational arrangements required to execute, oversee, and sustain the digital health transformation described in Sections 1–5. Without dedicated governance structures, clear roles, and enabling policies, the phased investment of USD 6.2–10.7M across three waves will replicate the fragmented, donor-driven pattern that produced the current siloed landscape. Section 6 bridges the strategic roadmap to operational reality by specifying who decides, who implements, and who is accountable.

---

### 6.1 AS-IS Organisational Structure for Digital Health

#### 6.1.1 Current Landscape

The Ministry of Health currently has no unified organisational structure for digital health. Digital functions are distributed across multiple directorates and programme teams, each managing its own system in isolation. The validated EA findings (D5, November 2025) confirm the following fragmented arrangement:

**Current Digital Health Units (No Unified Coordination):**

| Unit | Parent Directorate | System(s) Managed | Staff (Est.) |
|------|-------------------|-------------------|-------------|
| HMIS Team | Directorate of Planning & Information | DHIS2 aggregate reporting | 3–5 |
| eCRVS Team | Directorate of Health Services | CIVIS (eCRVS) | 2–3 |
| NHIS Digital Platform Team | NHIA (semi-autonomous) | e-NHIS | 2–3 |
| Laboratory Information Systems | Directorate of Laboratory Services | A-LIS (pilot) | 1–2 |
| Immunisation Data (SPT) | Directorate of Public Health (EPI) | SPT/Vaxa | 1–2 (+ Vaxa TA) |
| Malaria Programme Data | Directorate of Public Health | Programme databases | 1 |
| HIV Programme Data | Directorate of Public Health | Programme databases | 1 |
| Surveillance (IDSR) | Directorate of Public Health | Paper-based IDSR | 1–2 |
| eLMIS | Directorate of Pharmaceutical Services | OpenLMIS/mSupply | 1 |
| HR Information | Directorate of Human Resources for Health | HRMIS | 1 |

**Total estimated digital/data staff across MoH: 15–22 persons** — dispersed across 8+ directorates with no common reporting line, no shared standards, and no coordinated investment planning.

#### 6.1.2 Structural Deficiencies

The current arrangement produces five systemic failures that the target architecture must resolve:

**Ad-hoc decision-making.** There is no governance body authorised to review, approve, or coordinate digital health investments. Each directorate and each donor-funded programme procures or deploys systems independently. The result is the current portfolio of 8+ siloed systems with exactly one automated integration flow (SPT→DHIS2).

**No cross-system coordination.** Each team operates in isolation. The eCRVS team and the e-NHIS team work metres apart but have not operationalised their planned integration (target August 2025, not delivered as of late 2025). There is no forum where cross-cutting technical issues — patient identity, data standards, hosting, security — are resolved.

**Donor-driven fragmentation.** Digital health initiatives follow donor funding streams rather than a coherent architecture. EHSSP funded satellite connectivity; GAVI supports immunisation data; the Global Fund supports surveillance; the World Bank funded eCRVS. Each investment created a standalone system with its own hosting, its own identifiers, and its own reporting chain.

**No digital health strategy or policy framework.** Progressa has no comprehensive national eHealth strategy, no health data governance framework, and no data protection legislation enforced within the health sector. The HMIS policy is the closest approximation but covers only aggregate reporting, not the full digital health landscape.

**Acute capacity constraints.** The existing digital health workforce is small (15–22 persons), undertrained for interoperability and system integration, and dependent on external technical assistance (Vaxa for SPT, Civitas Group for eCRVS, HISP regional node for DHIS2). There are no integration developers, no data governance officers, no health information security officers, and no enterprise architects within MoH.

---

### 6.2 TO-BE Organisational Structure

The target organisational structure implements the three-tier governance model specified in the D6 Future State Architecture, aligned with the PDGA National EA Framework's governance hierarchy.

#### 6.2.1 Tier 1: National Digital Health Steering Committee (NDHSC)

The NDHSC is the apex decision-making body for all digital health investments, standards, and priorities within the health sector.

**Establishment Mechanism:** Ministerial Order signed by the Honourable Minister of Health (target: within 5 months of roadmap endorsement, per W1-01).

**Composition (14 members):**

| # | Position | Organisation | Role |
|---|----------|-------------|------|
| 1 | Permanent Secretary (Chair) | MoH | Strategic direction, political authority |
| 2 | Director, Planning & Information | MoH | HMIS/data strategy, M&E |
| 3 | Director, Health Services | MoH | Clinical systems, service delivery |
| 4 | Director, Public Health | MoH | Surveillance, immunisation, disease programmes |
| 5 | Director, Pharmaceutical Services | MoH | Supply chain, eLMIS |
| 6 | Director, Laboratory Services | MoH | Laboratory information systems |
| 7 | Director, Human Resources for Health | MoH | Health workforce, HRMIS |
| 8 | Executive Director | NHIA | Health insurance, e-NHIS |
| 9 | Director General | PDGA/MoDE | National EA alignment, shared infrastructure |
| 10 | Representative | MoF | Budget allocation, IFMIS alignment |
| 11 | Statistician General (or designee) | PBoS | National statistics, data standards |
| 12 | Country Representative (or designee) | WHO Progressa | Technical norms, global standards |
| 13 | RDIP Project Coordinator (or designee) | World Bank/RDIP | Infrastructure alignment |
| 14 | Civil Society Representative | CSO (rotating) | Community voice, accountability |

**Terms of Reference:**

- **Authority:** Approve or reject all digital health investments exceeding USD 50,000 regardless of funding source (government, donor, or private). Endorse national digital health strategy, architecture standards, and data governance policies.
- **Cadence:** Quarterly (4 meetings per year). Extraordinary meetings may be convened by the Chair for urgent matters (e.g., major system failure, critical procurement decision).
- **Quorum:** 8 of 14 members (simple majority), including the Chair or designated Deputy Chair (Director, Planning & Information).
- **Decision Protocol:** Consensus preferred; simple majority vote if consensus is not reached. Decisions recorded in formal minutes distributed within 5 working days.
- **Reporting:** The NDHSC reports to the Honourable Minister of Health. For cross-sectoral matters, it coordinates with the national Digital Transformation Steering Committee (DTSC) through the PDGA DG member.
- **Secretariat:** The Digital Health and Data Directorate (DHDD) provides secretariat services, including agenda preparation, briefing papers, minutes, and action tracking.

**Key Functions:**

1. Endorse the National Digital Health Strategy 2025–2033 and periodic updates
2. Approve the D7 implementation roadmap and annual work plans
3. Review and approve architecture compliance assessments for digital health investments >USD 50,000
4. Resolve cross-directorate disputes regarding system scope, data ownership, or integration priorities
5. Monitor roadmap implementation through quarterly dashboard reviews
6. Approve health data governance policies and data sharing agreements
7. Oversee the EHSSP-to-DHDD transition of digital health functions
8. Coordinate with the national EA Board and DTSC on whole-of-government matters
9. Review Wave transition go/no-go criteria (Wave 1→2 at end 2026; Wave 2→3 at end 2028)

#### 6.2.2 Tier 2: Digital Health and Data Directorate (DHDD)

The DHDD is the operational engine for digital health within MoH. It replaces the current fragmented arrangement with a single directorate that has mandate, budget, and authority over all digital health systems, data governance, and integration.

**Establishment:** Administrative establishment within MoH, approved by the Public Service Commission. The DHDD upgrades the existing Directorate of Planning & Information by expanding its mandate and adding new positions. Existing HMIS team staff are absorbed into the new structure.

**Reporting Line:** The Chief Director, DHDD reports directly to the Permanent Secretary, MoH. Functionally, the DHDD supports the NDHSC as its executive arm.

**Target Organogram (14 positions at full staffing):**

```
                    ┌─────────────────────────────┐
                    │     Permanent Secretary      │
                    │           (MoH)              │
                    └──────────────┬───────────────┘
                                   │
                    ┌──────────────▼───────────────┐
                    │   Chief Director, DHDD       │
                    │   (Senior Director Grade)     │
                    └──────────────┬───────────────┘
                                   │
         ┌─────────────┬───────────┼───────────┬─────────────┐
         │             │           │           │             │
   ┌─────▼──────┐ ┌───▼────┐ ┌───▼─────┐ ┌───▼────┐ ┌─────▼──────┐
   │Architecture │ │Data    │ │Systems  │ │Project │ │Capacity   │
   │& Standards │ │Govern- │ │Opera-   │ │Coordi- │ │Building & │
   │   Unit     │ │ance    │ │tions    │ │nation  │ │Engagement │
   │            │ │Unit    │ │Unit     │ │Unit    │ │Unit       │
   └─────┬──────┘ └───┬────┘ └───┬─────┘ └───┬────┘ └─────┬──────┘
         │             │           │           │             │
   ┌─────▼──────┐ ┌───▼────┐ ┌───▼─────┐ ┌───▼────┐ ┌─────▼──────┐
   │HIE Manager │ │Data    │ │DHIS2    │ │Project │ │Training   │
   │(1)         │ │Govern- │ │Manager  │ │Coord.  │ │Officer    │
   │            │ │ance    │ │(1)      │ │(1)     │ │(1)        │
   │Integration │ │Officer │ │         │ │        │ │           │
   │Developer   │ │(1)     │ │System   │ └────────┘ └───────────┘
   │(1)         │ │        │ │Admin    │
   └────────────┘ │Health  │ │(1)      │
                   │Info    │ └─────────┘
                   │Security│
                   │Officer │
                   │(1)     │
                   └────────┘
```

**6 Functional Areas:**

| # | Functional Area | Lead Position | Key Responsibilities |
|---|----------------|--------------|---------------------|
| 1 | Architecture & Standards | HIE Manager | Maintain health EA artefacts; architecture compliance review; integration standards; technology standards; FHIR profile governance |
| 2 | Data Governance | Data Governance Officer | Health data dictionary; data quality framework; data sharing agreements; master data management (MPI, registries); data classification enforcement |
| 3 | Systems Operations | DHIS2 Manager + System Admin | Day-to-day operations of DHIS2, OpenHIM, OpenCR, HAPI FHIR; system monitoring (Prometheus/Grafana); backup and DR; G-Cloud spoke management |
| 4 | Information Security | Health Info Security Officer | Health data protection policies; access management (Keycloak); security incident response; audit log review; compliance with national cybersecurity standards |
| 5 | Project Coordination | Project Coordinator | Wave initiative tracking; donor coordination; procurement support; reporting to NDHSC; RDIP alignment |
| 6 | Capacity Building & Engagement | Training Officer | Training programme design and delivery; regional HIS officer coordination; stakeholder engagement; change management; community of practice |

**Administrative Support:** 1 Administrative Assistant supporting the Chief Director and the full directorate.

**Key Positions and Required Competencies:**

| Position | Grade | Competencies Required | Phase |
|----------|-------|----------------------|-------|
| Chief Director, DHDD | Senior Director | Health informatics or public health + IT; 10+ years; EA literacy; stakeholder management | Wave 1 (Month 4–8) |
| Architecture & Standards Lead / HIE Manager | Principal Officer | Health informatics; OpenHIE/OpenHIM; FHIR; integration architecture; 5+ years | Wave 1 (Month 6–10) |
| Data Governance Officer | Principal Officer | Data management; data quality; DHIS2; statistics; health data standards | Wave 1 (Month 6–10) |
| Systems Operations Lead / DHIS2 Manager | Senior Officer | DHIS2 administration; Linux/Docker; PostgreSQL; system monitoring | Wave 1 (Month 6–10) |
| Project Coordinator | Senior Officer | Project management; donor coordination; health sector experience | Wave 1 (Month 6–10) |
| Administrative Assistant | Support Staff | Office management; meeting coordination; filing | Wave 1 (Month 6–10) |
| Health Info Security Officer | Principal Officer | Cybersecurity; Keycloak/IAM; health data privacy; audit | Wave 2 (Month 13–18) |
| Integration Developer | Officer | Java/Node.js; FHIR; OpenHIM mediator development; API integration | Wave 2 (Month 13–18) |
| System Administrator | Officer | Linux; Docker/Kubernetes; PostgreSQL; backup/DR; G-Cloud | Wave 2 (Month 13–18) |
| Training Officer | Officer | Training design; DHIS2 training; digital literacy; adult learning | Wave 2 (Month 13–18) |
| DHIS2 Data Analyst | Officer | DHIS2 analytics; data visualisation; SQL; data quality assessment | Wave 2 (Month 19–24) |
| eLMIS/Supply Chain Specialist | Officer | OpenLMIS; pharmaceutical supply chain; FHIR | Wave 2 (Month 19–24) |
| EHR Support Specialist | Officer | OpenMRS; clinical workflows; FHIR; facility support | Wave 2 (Month 19–24) |
| Surveillance Systems Specialist | Officer | DHIS2 Tracker; IDSR; case-based surveillance; epidemiology | Wave 2 (Month 19–24) |

**Total: 14 positions** (6 in Wave 1, 4 in early Wave 2, 4 in late Wave 2).

#### 6.2.3 Tier 3: Technical Working Groups (TWGs)

Three TWGs provide technical review, standards development, and implementation coordination below the NDHSC decision layer.

**TWG 1: Architecture & Interoperability TWG**

| Attribute | Specification |
|-----------|--------------|
| **Chair** | HIE Manager (DHDD) |
| **Members** | DHDD Architecture & Standards team; PDGA EA Focal Point; eCRVS technical lead; e-NHIS technical lead; DHIS2 Manager; HISP regional node representative; WHO eHealth focal person; integration vendors (as needed) |
| **Cadence** | Monthly (12 per year) |
| **Scope** | Review integration designs; approve FHIR profiles; resolve interoperability issues; review architecture compliance for new system procurements; maintain technology standards registry |
| **Authority** | Technical recommendation to NDHSC; binding for implementation teams on integration standards |
| **Outputs** | Architecture compliance reports; integration design approvals; FHIR profile specifications; technology standards updates |

**TWG 2: Data Standards & Governance TWG**

| Attribute | Specification |
|-----------|--------------|
| **Chair** | Data Governance Officer (DHDD) |
| **Members** | DHDD Data Governance team; PBoS health statistics focal person; DHIS2 data managers (national + regional); eCRVS data team; e-NHIS data team; WHO M&E focal person; programme M&E officers (EPI, Malaria, HIV, TB) |
| **Cadence** | Monthly (12 per year) + quarterly data quality review sessions |
| **Scope** | National health data dictionary maintenance; data quality standards and thresholds; indicator definitions; data sharing agreement templates; master data management (MPI, facility registry, terminology); data classification and access policies |
| **Authority** | Technical recommendation to NDHSC; binding for data reporting standards |
| **Outputs** | Data quality reports; updated data dictionary; data sharing agreements; indicator reference sheets; data classification decisions |

**TWG 3: Implementation & Capacity TWG**

| Attribute | Specification |
|-----------|--------------|
| **Chair** | Project Coordinator (DHDD) |
| **Members** | DHDD Project Coordination team; Regional Health Data Officers (when recruited); training focal persons; RDIP implementation team; Global Fund PMU; GAVI programme officer; facility-level IT/data representatives (rotating) |
| **Cadence** | Monthly (12 per year) + quarterly regional coordination meetings |
| **Scope** | Wave initiative progress tracking; implementation obstacle resolution; regional rollout coordination; training needs assessment; change management; facility readiness assessment; user feedback |
| **Authority** | Operational coordination; escalation to NDHSC for resource or policy decisions |
| **Outputs** | Monthly implementation progress reports; training calendars; regional readiness assessments; risk registers; user feedback summaries |

#### 6.2.4 Ministry EA Focal Point Role

The MoH EA Focal Point is the liaison between MoH and the national EA governance structure managed by MoDE/PDGA. This role ensures that MoH's sector-specific digital health architecture remains aligned with the whole-of-government EA framework.

**Position:** The Chief Director, DHDD serves as the MoH EA Focal Point (dual-hatted role). If the Chief Director delegates, the HIE Manager serves as alternate.

**Responsibilities:**

1. Represent MoH on the national EA Board (monthly meetings chaired by PS MoDE)
2. Ensure MoH digital health investments comply with national EA principles and standards
3. Submit MoH architecture artefacts to the National EA Repository (PDGA-managed)
4. Coordinate with the National EA Office on cross-ministry integration requirements (e.g., eCRVS↔NHIA, IFMIS budget integration)
5. Participate in national Architecture Compliance Reviews for health sector procurements >USD 50,000
6. Report MoH EA maturity status to the EA Board quarterly
7. Facilitate cross-ministry data sharing agreements through the national EA governance process (P-GOV-04 per PDGA EA Framework)

**Reporting:** Functionally to the National EA Office (PDGA) for EA guidance; administratively to the PS MoH.

---

### 6.3 Federated Custodianship Model

Progressa's whole-of-government EA governance establishes a federated model where MoDE/PDGA serves as the national EA custodian and MoH operates as the sector custodian for health. This section defines the system ownership and governance responsibilities within this federated structure.

#### 6.3.1 National-to-Sector Governance Linkage

```
┌────────────────────────────────────────────────────────────────┐
│          WHOLE-OF-GOVERNMENT EA GOVERNANCE                     │
│                                                                │
│   ┌──────────────────────────────────────────────────┐        │
│   │ Digital Transformation Steering Committee (DTSC)  │        │
│   │ (Cabinet Secretary, PS from key ministries)       │        │
│   │ Quarterly — approve EA strategy, resolve conflicts│        │
│   └────────────────────┬─────────────────────────────┘        │
│                        │                                       │
│   ┌────────────────────▼─────────────────────────────┐        │
│   │ Enterprise Architecture Board (EA Board)          │        │
│   │ Chair: PS MoDE                                    │        │
│   │ Members: CIOs/ICT Directors from ministries       │        │
│   │ Monthly — approve standards, compliance reviews   │        │
│   └────────────────────┬─────────────────────────────┘        │
│                        │                                       │
│   ┌────────────────────▼─────────────────────────────┐        │
│   │ National EA Office (within MoDE/PDGA)             │        │
│   │ Chief Enterprise Architect + 3–4 Domain Architects│        │
│   │ Framework, standards, compliance, capacity        │        │
│   └────────────────────┬─────────────────────────────┘        │
│                        │                                       │
└────────────────────────┼───────────────────────────────────────┘
                         │ Coordinates with (via MoH EA Focal Point)
┌────────────────────────▼───────────────────────────────────────┐
│          MoH SECTOR EA GOVERNANCE                              │
│                                                                │
│   ┌──────────────────────────────────────────────────┐        │
│   │ National Digital Health Steering Committee (NDHSC)│        │
│   │ Chair: PS MoH                                     │        │
│   │ Quarterly — health sector digital investments     │        │
│   └────────────────────┬─────────────────────────────┘        │
│                        │                                       │
│   ┌────────────────────▼─────────────────────────────┐        │
│   │ Digital Health and Data Directorate (DHDD)        │        │
│   │ Chief Director + 13 staff (phased)                │        │
│   │ Operations, standards, governance, capacity       │        │
│   └────────────────────┬─────────────────────────────┘        │
│                        │                                       │
│   ┌────────────┬───────┴──────┬───────────────┐               │
│   │ Arch & HIE │ Data Stds & │ Implementation │               │
│   │ TWG        │ Governance  │ & Capacity TWG │               │
│   │ (Monthly)  │ TWG (Mo.)   │ (Monthly)      │               │
│   └────────────┴─────────────┴───────────────┘               │
└────────────────────────────────────────────────────────────────┘
```

**Coordination Mechanisms:**

| Mechanism | Frequency | Participants | Purpose |
|-----------|-----------|-------------|---------|
| EA Board meeting | Monthly | MoH EA Focal Point + all ministry ICT directors | Cross-ministry EA standards, compliance reviews |
| DTSC meeting | Quarterly | PS MoH (or delegate) + PS from key ministries | Strategic digital transformation decisions |
| Bilateral coordination | As needed | DHDD + National EA Office | Health-specific architecture guidance, G-Cloud spoke setup, shared platform coordination |
| Architecture Compliance Review | Per procurement | DHDD prepares; National EA Office reviews | Ensure health sector procurements align with national EA |
| Cross-ministry integration design | Per integration flow | DHDD + relevant ministry IT team + National EA Office | Design integration flows crossing ministry boundaries (e.g., eCRVS, IFMIS) |

#### 6.3.2 System Ownership and Governance Matrix

Each digital health system has a designated Data Owner (accountable for the data domain), a System Custodian (responsible for operations and maintenance), and a Governance Forum (where system-level decisions are reviewed).

| System | Data Domain | Data Owner | System Custodian | Governance Forum | National/Shared? |
|--------|-----------|-----------|-----------------|-----------------|-----------------|
| DHIS2 (Aggregate HMIS) | Aggregate health statistics | Director, Planning & Information | DHDD — Systems Operations Unit | Data Standards TWG | National (MoH) |
| eCRVS / CIVIS | Civil registration (health births/deaths) | Director, Health Services | DHDD — Systems Operations + Civitas Group (vendor) | Architecture TWG + National EA Office (cross-ministry) | Shared (MoH + MoJ) |
| e-NHIS | Health insurance | Executive Director, NHIA | NHIA Digital Team (operational); DHDD (integration) | NDHSC (policy); Architecture TWG (integration) | Sector (NHIA under MoH) |
| SPT → DHIS2 Tracker EIR | Immunisation records | Director, Public Health (EPI) | DHDD — Systems Operations (post-transition) | Implementation TWG | National (MoH) |
| IDSR / DHIS2 Tracker IDSR+ | Disease surveillance | Director, Public Health | DHDD — Systems Operations | Data Standards TWG | National (MoH) |
| A-LIS | Laboratory data | Director, Laboratory Services | DHDD — Systems Operations (with NRL lab staff) | Architecture TWG | National (MoH) |
| OpenMRS (EHR) | Patient clinical records | Director, Health Services | DHDD — Systems Operations | Architecture TWG | National (MoH) |
| OpenHIM (HIE) | Integration transactions | Chief Director, DHDD | DHDD — Architecture & Standards Unit | Architecture TWG + National EA Office | Shared (national infrastructure) |
| OpenCR (MPI) | Patient identity | Director, Planning & Information | DHDD — Architecture & Standards Unit | Data Standards TWG + National EA Office | Shared (national infrastructure) |
| OpenLMIS (eLMIS) | Pharmaceutical supply | Director, Pharmaceutical Services | DHDD — Systems Operations | Implementation TWG | National (MoH) |
| iHRIS (future) | Health workforce | Director, HR for Health | DHDD — Systems Operations | Data Standards TWG | National (MoH) |
| Facility Registry (DHIS2 Org Units) | Health facility master data | Director, Planning & Information | DHDD — Data Governance Unit | Data Standards TWG | National (MoH) |

**Custodianship Principles:**

1. **Data Owners** are MoH directors accountable for data quality, access policies, and domain strategy. They do not need technical expertise but must approve data sharing agreements and data quality thresholds for their domain.
2. **System Custodians** are DHDD units responsible for system availability, performance, security, and maintenance. They operate systems on behalf of Data Owners.
3. **Cross-ministry systems** (eCRVS, OpenHIM, OpenCR) require dual governance: MoH is the health sector user; national governance (EA Board / National EA Office) ensures cross-ministry alignment. Data sharing agreements are approved at both levels.
4. **Vendor-managed systems** (eCRVS/Civitas Group, SPT/Vaxa during transition) require explicit SLA governance. The DHDD holds vendor contracts and manages SLAs; the relevant Data Owner approves functional requirements.

#### 6.3.3 MoDE/PDGA as National EA Custodian vs MoH as Sector Custodian

| Responsibility | National Custodian (MoDE/PDGA) | Sector Custodian (MoH/DHDD) |
|---------------|--------------------------------|---------------------------|
| EA Framework | Develop and maintain national EA framework | Adopt national framework; extend for health sector |
| Architecture Standards | Define cross-government standards (API, security, data classification) | Comply with national standards; define health-specific standards (FHIR profiles, health data dictionary, clinical coding) |
| Compliance Review | Review health sector procurements >USD 50,000 for national EA alignment | Conduct initial compliance review; submit to National EA Office for endorsement |
| Shared Infrastructure | Own and operate G-Cloud, broadband backbone, Government Service Bus (future) | Operate MoH spoke on G-Cloud; connect health systems to national shared infrastructure |
| Integration Governance | Define national API management standards; manage Government Service Bus (future) | Manage health sector HIE (OpenHIM); expose health APIs per national standards |
| Capacity Building | Train ministry EA Focal Points; run EA community of practice | Build health informatics capacity within MoH; participate in national EA community |
| Repository | Maintain national EA repository (architecture artefacts from all ministries) | Contribute MoH architecture artefacts to national repository; maintain health-specific documentation in DHDD |
| Budget | Fund national shared infrastructure and EA Office | Fund health sector digital operations and sector-specific systems |

---

### 6.4 Staffing Plan

The staffing plan addresses three levels: national (DHDD), regional, and facility. Numbers are derived from the D6 target architecture, the Wave 1–3 phasing strategy, and validated organisational baseline data.

#### 6.4.1 National Level: Digital Health and Data Directorate (15–20 Positions)

The DHDD core comprises 14 established positions (Section 6.2.2). An additional 1–6 positions may be required depending on the pace of system deployments and the availability of external technical assistance.

**Phased Recruitment Timeline:**

| Phase | Period | Positions Recruited | Cumulative Total | Funding Source |
|-------|--------|--------------------|-----------------|--------------| 
| Wave 1 — Foundation | Months 4–10 (2025–2026) | Chief Director; Architecture Lead / HIE Manager; Data Governance Officer; DHIS2 Manager; Project Coordinator; Administrative Assistant | 6 | RDIP (institutional strengthening) + Government salary budget |
| Wave 2a — Scale-Up | Months 13–18 (2027) | Health Info Security Officer; Integration Developer; System Administrator; Training Officer | 10 | RDIP + Government + Global Fund (programme-aligned positions) |
| Wave 2b — Specialisation | Months 19–24 (2027–2028) | DHIS2 Data Analyst; eLMIS/Supply Chain Specialist; EHR Support Specialist; Surveillance Systems Specialist | 14 | Government + programme funding (Global Fund, GAVI) |
| Wave 3 — Maturity (if needed) | 2029–2030 | Additional integration developers; analytics specialist; mobile application support; up to 6 additional | 15–20 | Government salary budget (primary); donor top-up for specialist roles |

**Salary Benchmarking Considerations:**

MoH government salary scales are significantly below NGO and donor rates, creating recruitment and retention risk (identified as High likelihood in W1-01 risk register). Mitigations include competitive salary supplementation through RDIP institutional strengthening funds (Wave 1–2), performance-based allowances, professional development opportunities (TOGAF certification, DHIS2 academy), secondment arrangements with WHO and HISP regional node for specialist roles, and progressive absorption of supplemented salaries into the government budget by Wave 3.

**Indicative Annual Salary Costs (at full 14-person staffing):**

| Category | Positions | Annual Cost (USD) |
|----------|-----------|------------------|
| Chief Director (Senior Director grade + supplement) | 1 | 18,000–25,000 |
| Principal Officers (HIE Manager, DGO, Security Officer) | 3 | 36,000–48,000 |
| Senior Officers (DHIS2 Manager, Project Coordinator) | 2 | 18,000–24,000 |
| Officers (8 specialist positions) | 8 | 56,000–80,000 |
| **Total (14 positions)** | **14** | **USD 128,000–177,000 per year** |

These estimates are consistent with the W1-01 costing (USD 100,000–160,000 for 6 positions prorated for 6–12 months) and the D7 Section 5 investment summary (W2-09 Digital Health Workforce Scale-Up: USD 350,000–600,000 over 30 months).

#### 6.4.2 Regional Level: Health Information System Focal Persons (7 Positions)

One Regional HIS/Digital Health Focal Person per region, deployed to the 7 Regional Health Directorates (RHDs).

| Region | Deployment Phase | Reporting Line | Key Responsibilities |
|--------|-----------------|---------------|---------------------|
| Region 1 (Progressa City) | Wave 2a (2027) | RHD Director (admin); DHDD (functional) | DHIS2 data quality supervision; facility support; regional data quality reviews; training delivery; user feedback collection |
| Region 2 | Wave 2a (2027) | Same | Same |
| Region 3 | Wave 2a (2027) | Same | Same |
| Region 4 | Wave 2b (2028) | Same | Same |
| Region 5 | Wave 2b (2028) | Same | Same |
| Region 6 | Wave 2b (2028) | Same | Same |
| Region 7 | Wave 2b (2028) | Same | Same |

**Total: 7 positions.** Recruitment: 3 in 2027 (priority regions with highest facility density), 4 in 2028.

**Profile:** Diploma or degree in health information management, statistics, or IT. DHIS2 training (DHIS2 Academy Level 1 minimum). Experience in health data management at district or regional level preferred.

**Indicative Annual Cost:** USD 5,000–7,000 per position × 7 = USD 35,000–49,000 per year (at full deployment).

**Funding Source:** Government salary budget (long-term); RDIP or Global Fund supplementation during initial deployment.

#### 6.4.3 Facility Level: IT Officers and Data Focal Persons

Facility-level digital health support follows a differentiated model based on facility tier:

| Facility Tier | Count | Digital Health Staff | Role | Phase |
|--------------|-------|---------------------|------|-------|
| Tertiary Hospitals (NTH and a regional referral hospital) | 2 | 1 IT Officer per hospital | System administration (EHR, LIS, eLMIS); local network; device management; user support; data backup | Wave 2 (with EHR deployment) |
| Regional/District Hospitals | 5–6 | 1 IT/Data Officer per hospital | EHR support; data entry supervision; connectivity management; local troubleshooting | Wave 2 (phased with EHR rollout) |
| Major Health Centres | 10–15 | Shared IT support from regional focal person | Data entry supervision; DHIS2 reporting; device management (shared with regional HIS officer) | Wave 2–3 |
| Minor Health Centres / Clinics | ~60–70 | Data focal person (existing health worker, dual role) | DHIS2 data entry; basic device care; reporting | Wave 1–2 (existing arrangement strengthened) |

**Total new facility-level IT/Data positions: 7–8** (hospitals only; health centres rely on regional support and dual-role existing staff).

**Indicative Annual Cost:** USD 4,000–6,000 per position × 8 = USD 32,000–48,000 per year.

#### 6.4.4 Consolidated Staffing Summary

| Level | Positions | Wave 1 (2025–2026) | Wave 2 (2027–2028) | Wave 3 (2029–2030) | Steady State |
|-------|-----------|-------------------|-------------------|-------------------|-------------|
| National (DHDD) | 14–20 | 6 | 14 | 15–20 | 15–20 |
| Regional | 7 | 0 | 7 | 7 | 7 |
| Facility (hospitals) | 7–8 | 0 | 5–6 | 7–8 | 7–8 |
| Facility (data focal — existing, retrained) | ~70 | 70 (existing) | 70 | 70 | 70 |
| **Total new positions** | **28–35** | **6** | **26–27** | **29–35** | **29–35** |

**Total incremental annual salary cost at steady state: USD 195,000–274,000** (DHDD + Regional + Hospital IT officers). This figure is consistent with the D7 Section 5 recurrent cost projection of USD 515,000 per year at steady state, of which personnel is the largest component.

---

### 6.5 Policy Support Requirements

Five key policies or policy amendments are required to enable and sustain the target organisational structure and governance model. Each is linked to a responsible body, a timeline aligned with the three-wave phasing, and the roadmap initiative that creates the demand.

#### Policy 1: Ministerial Order Establishing the NDHSC and DHDD

| Attribute | Specification |
|-----------|--------------|
| **Type** | Ministerial Order (administrative instrument) |
| **Responsible Body** | Honourable Minister of Health, upon recommendation of the Permanent Secretary |
| **Content** | Establishes the NDHSC (composition, TORs, decision authority, cadence); establishes the DHDD as a directorate within MoH (mandate, functional areas, reporting); designates the Chief Director, DHDD as MoH EA Focal Point |
| **Timeline** | Wave 1, Months 1–5 (target: signed within 5 months of roadmap endorsement) |
| **Roadmap Link** | W1-01 (Establish Digital Health Governance) |
| **Status** | To be drafted; D6 and D7 provide the substantive basis |
| **Dependencies** | PS commitment; Public Service Commission endorsement for new directorate establishment |

#### Policy 2: National Digital Health Strategy 2025–2033

| Attribute | Specification |
|-----------|--------------|
| **Type** | National sector strategy (PS-endorsed policy document) |
| **Responsible Body** | MoH Permanent Secretary (endorsement); DHDD (drafting); NDHSC (review and approval) |
| **Content** | Wraps the D6 target architecture into a concise strategy document suitable for donor partner circulation, government budget justification, and public communication. Includes: vision statement, strategic objectives (5–7), target architecture summary, governance model, investment framework, M&E framework |
| **Timeline** | Wave 1, Months 3–7 (draft within 4 months of W1-02 initiation) |
| **Roadmap Link** | W1-02 (Develop National Digital Health Strategy) |
| **Status** | To be drafted; D6 provides 90% of substantive content |
| **Dependencies** | W1-01 initiated (NDHSC at least informally constituted to review draft) |

#### Policy 3: Health Data Governance Framework

| Attribute | Specification |
|-----------|--------------|
| **Type** | Ministry policy / governance framework (PS-endorsed) |
| **Responsible Body** | DHDD — Data Governance Unit (drafting); Data Standards & Governance TWG (review); NDHSC (approval) |
| **Content** | Data ownership model (11 domains per D6 Section 6.1); data stewardship roles (national, regional, facility); data classification (4-tier: Public, Internal, Confidential PII, Restricted Clinical); data quality standards and thresholds; data sharing agreement template and approval process; data retention and archival policy; data breach notification procedures; compliance with future national data protection legislation |
| **Timeline** | Wave 1, Months 3–9 (6 months from initiation to NDHSC endorsement) |
| **Roadmap Link** | W1-03 (Establish Interim Health Data Governance Framework) |
| **Status** | No existing framework; to be developed from scratch using D6 data architecture as the basis |
| **Dependencies** | W1-01 (NDHSC established to approve); alignment with pending national Data Protection Bill |

#### Policy 4: Health Sector Integration and Interoperability Policy

| Attribute | Specification |
|-----------|--------------|
| **Type** | Ministry policy / technical standard (PS-endorsed; EA Board co-endorsed for cross-ministry flows) |
| **Responsible Body** | DHDD — Architecture & Standards Unit (drafting); Architecture & Interoperability TWG (review); NDHSC (approval); National EA Board (endorsement for cross-ministry scope) |
| **Content** | Mandate that all new health information systems expose APIs conforming to FHIR R4 minimum surface; require all inter-system data exchange to be mediated through the HIE (OpenHIM); define API management standards (OpenAPI 3.0, mTLS, OAuth 2.0); establish architecture compliance review process for health sector procurements; specify FHIR profiles for Progressa health context; mandate MPI lookup for all patient-level data transactions; define integration SLA requirements (uptime, latency, error rates) |
| **Timeline** | Wave 1, Months 6–12 (publish alongside first HIE integration flow, W1-06) |
| **Roadmap Link** | W1-06 (Operationalise eCRVS-NHIS Integration); aligned with national Interoperability Mandate (PDGA EA Framework, target Year 2) |
| **Status** | No existing policy; to be developed |
| **Dependencies** | W1-01 (governance), W1-03 (data governance framework), national API standards from PDGA |

#### Policy 5: Amendment to HMIS Policy (Expand Scope to Digital Health)

| Attribute | Specification |
|-----------|--------------|
| **Type** | Policy amendment / replacement (Minister-endorsed) |
| **Responsible Body** | MoH Policy Unit (drafting); DHDD (technical input); NDHSC (review); Minister of Health (endorsement) |
| **Content** | The current HMIS policy covers only aggregate health data reporting. It must be updated or replaced to cover: all digital health systems (EHR, MPI, HIE, LIS, eLMIS, e-NHIS, surveillance); patient-level data governance; health data privacy and protection; cross-system integration mandate; digital health workforce development; health data analytics and use; alignment with the National Digital Health Strategy 2025–2033 |
| **Timeline** | Wave 2, Months 13–18 (draft during Wave 1; formal endorsement early Wave 2 after NDHSC is fully operational) |
| **Roadmap Link** | W1-02 (Digital Health Strategy); W2-09 (Workforce Scale-Up) |
| **Status** | HMIS policy exists but is expiring and insufficient in scope |
| **Dependencies** | W1-01 (NDHSC operational), W1-02 (strategy endorsed), national Data Protection Bill progress |

#### Policy Summary Matrix

| # | Policy | Type | Responsible | Timeline | Roadmap Link |
|---|--------|------|------------|----------|-------------|
| 1 | Ministerial Order (NDHSC + DHDD) | Administrative order | Minister of Health | W1, M1–5 | W1-01 |
| 2 | National Digital Health Strategy 2025–2033 | Sector strategy | PS MoH / NDHSC | W1, M3–7 | W1-02 |
| 3 | Health Data Governance Framework | Ministry policy | DHDD / NDHSC | W1, M3–9 | W1-03 |
| 4 | Integration & Interoperability Policy | Ministry policy / EA Board | DHDD / NDHSC / EA Board | W1, M6–12 | W1-06 |
| 5 | HMIS Policy Update (→ Digital Health Policy) | Policy amendment | Minister of Health | W2, M13–18 | W1-02 / W2-09 |

---

### 6.6 Section Summary

This section has defined the complete governance and organisational framework required to implement the digital health roadmap:

**AS-IS to TO-BE Contrast:**

| Dimension | AS-IS | TO-BE |
|-----------|-------|-------|
| Decision-making | Ad-hoc, donor-driven, per-directorate | NDHSC with formal authority over all investments >USD 50,000 |
| Coordination | No cross-system forum; 8+ siloed teams | Three TWGs providing monthly technical coordination |
| Operational capacity | ~15–22 staff across 8+ directorates, no common reporting | DHDD with 14–20 staff under single directorate, phased recruitment |
| Standards | No integration, data, or security standards | 4 policies covering data governance, interoperability, architecture compliance |
| National alignment | No participation in national EA governance | EA Focal Point on EA Board; federated custodianship with MoDE/PDGA |
| Regional/facility support | No dedicated digital health staff below national level | 7 regional HIS officers + 7–8 hospital IT officers |
| Policy framework | HMIS policy (aggregate only) | 5 policies covering strategy, governance, data, interoperability, workforce |

The total incremental workforce of 28–35 new positions and 5 enabling policies represent the minimum institutional investment required to transform the current fragmented landscape into a governed, coordinated, and sustainable digital health ecosystem. Without this investment, the USD 6.2–10.7M technology roadmap will reproduce the siloed pattern it is designed to eliminate.

---

## Section 7: Capacity Building Roadmap

*TOGAF ADM Phase G — Implementation Governance (Capability Development)*

Sections 4–6 define what the Progressa Ministry of Health must build, when to build it, and who is responsible. This section addresses the prerequisite that determines whether those plans succeed or fail: whether MoH has the human capacity to implement, operate, and sustain the digital health systems described in the roadmap. Without a deliberate, phased capacity building programme, the USD 6.2–10.7M technology investment will produce systems that nobody can run — replicating the pattern observed across sub-Saharan Africa where donor-funded health IT deployments collapse within 2–3 years of project closure.

The capacity building roadmap is structured in three parts: a current capacity assessment (Section 7.1), the capacity building strategy across three time horizons (Section 7.2), and a detailed training plan by system (Section 7.3).

---

### 7.1 Current Capacity Assessment

#### 7.1.1 Digital Health Workforce Baseline

The AS-IS assessment (D5, November 2025) established that MoH has approximately 15–22 staff engaged in digital health activities, dispersed across 8+ directorates with no unified coordination, no shared training programme, and no common competency framework. The Section 6 governance analysis confirmed five structural deficiencies that directly constrain capacity:

| Capacity Dimension | Current State | Critical Gap |
|-------------------|---------------|-------------|
| **Leadership** | No Chief Information Officer or equivalent; no single authority over digital health | No strategic direction for workforce development; training is donor-driven and fragmented |
| **Architecture & Standards** | No enterprise architect, no integration developer, no FHIR expertise within MoH | MoH cannot design, review, or sustain integration flows; 100% dependent on external TA |
| **Data Governance** | No data governance officer; data quality managed ad-hoc by programme teams | No data quality framework enforcement; data sharing agreements unmanaged; MPI governance absent |
| **Systems Operations** | DHIS2 managed by 3–5 HMIS team members; other systems managed by programme-specific staff (1–2 each) | No cross-system administration capability; no containerisation/DevOps skills; no monitoring infrastructure |
| **Information Security** | No health information security officer; no IAM administration; no security incident response | Health data protection entirely absent; Keycloak/MFA deployment has no internal administrator |
| **Training & Change Management** | No training officer; no standardised curriculum; training is system-specific and donor-funded | No sustainable training delivery capacity; no train-the-trainer programme; ~90% EHR readiness but ~90% paper operations |
| **Regional/Facility Support** | No dedicated regional HIS officers; facility data collection by dual-role health workers | No field support for digital systems; no mentorship; no data quality supervision below national level |

#### 7.1.2 Competency Assessment Against Implementation Maturity Model

Using the five-level competency model from the benchmarks (Section 7.1 of Implementation Benchmarks), the current MoH digital health workforce can be assessed as follows:

| Competency Domain | Current Level | Target (Wave 1 End) | Target (Wave 2 End) | Target (Wave 3 End) |
|------------------|--------------|---------------------|---------------------|---------------------|
| Health informatics leadership | Level 0 (absent) | Level 2 (working) | Level 3 (practitioner) | Level 4 (advanced) |
| Enterprise architecture | Level 0 (absent) | Level 1 (awareness) | Level 2 (working) | Level 3 (practitioner) |
| DHIS2 aggregate administration | Level 2 (working) | Level 3 (practitioner) | Level 4 (advanced) | Level 4 (advanced) |
| DHIS2 Tracker configuration | Level 0 (absent) | Level 1 (awareness) | Level 2 (working) | Level 3 (practitioner) |
| Health data exchange / FHIR | Level 0 (absent) | Level 1 (awareness) | Level 2 (working) | Level 3 (practitioner) |
| EHR (OpenMRS) administration | Level 0 (absent) | Level 0 (absent) | Level 2 (working) | Level 3 (practitioner) |
| Data governance & quality | Level 1 (awareness) | Level 2 (working) | Level 3 (practitioner) | Level 4 (advanced) |
| Systems administration (Linux/Docker) | Level 0 (absent) | Level 1 (awareness) | Level 2 (working) | Level 3 (practitioner) |
| Information security / IAM | Level 0 (absent) | Level 0 (absent) | Level 2 (working) | Level 3 (practitioner) |
| Project/programme management | Level 1 (awareness) | Level 2 (working) | Level 3 (practitioner) | Level 3 (practitioner) |

The assessment reveals that MoH is at Level 0 (absent) or Level 1 (awareness) in 8 of 10 competency domains. Only DHIS2 aggregate administration reaches Level 2, reflecting a decade of HMIS team operation. This baseline confirms that capacity building is not a supplementary activity — it is a structural prerequisite for roadmap implementation.

#### 7.1.3 Training Infrastructure Assessment

| Training Resource | Availability | Constraint |
|------------------|-------------|-----------|
| In-country DHIS2 training capacity | HISP regional node provides regional support from the regional hub | No in-country DHIS2 academy; travel to the regional hub or virtual participation required |
| Health informatics academic programmes | None in Progressa | Regional options: KNUST (Ghana), University of Ghana; require sponsorship and study leave |
| OpenMRS/OpenHIE training resources | Online (OpenMRS Academy, OpenHIE community) | Self-paced only; no in-country mentorship; requires reliable internet |
| Government IT training infrastructure | PDGA training centre (limited capacity) | Not health-specific; generic ICT skills only |
| In-service training budget | No dedicated budget line for digital health training | Training funded ad-hoc by donors per programme |
| Internet for e-learning | Available in Progressa City; unreliable in rural regions | Limits e-learning to urban staff; blended approaches required |

---

### 7.2 Capacity Building Strategy

The capacity building strategy operates across three time horizons, aligned with the three waves of the implementation roadmap. Each horizon has distinct objectives, target audiences, delivery mechanisms, and success criteria.

#### 7.2.1 Short-Term (Wave 1: 2025–2026) — Foundation Building

**Objective:** Recruit and onboard the core DHDD team; deliver foundational digital health orientation to all MoH programme managers; establish the training delivery infrastructure (train-the-trainer cohort, curriculum framework, change champion network).

**Target Audience and Numbers:**

| Audience | Count | Training Type | Hours |
|----------|-------|--------------|-------|
| DHDD initial team (6 positions) | 6 | Intensive onboarding: TOGAF foundations, DHIS2 advanced, OpenHIE overview, FHIR introduction, data governance, project management | 80–120 per person |
| MoH programme directors and managers | 30–40 | Digital health orientation: strategy overview, data governance basics, privacy obligations, system landscape | 4 per person |
| HMIS team (existing) | 3–5 | DHIS2 advanced: Tracker configuration, data quality tools, mCSD interface, analytics | 40 per person |
| Facility data focal persons (pilot sites) | 50–70 | DHIS2 Tracker EIR/IDSR+: Android app, offline operation, data entry, quality checks | 16–24 per person |
| eLMIS facility users (new sites) | 40–80 | eLMIS operations: requisitioning, stock management, reporting | 8–16 per person |
| Master trainers (ToT cohort) | 10 | Train-the-trainer: adult learning methods, DHIS2/eLMIS training delivery, assessment, coaching | 40 per person |
| Change champions (pilot facilities) | 20 | Change management: adoption support, troubleshooting, user feedback, mentorship | 24 per person |

**Delivery Mechanisms:**

1. **HISP regional node Academies** — DHIS2 Academy Level 1 (aggregate) and Level 2 (Tracker, Android) delivered regionally from the regional hub or in-country (if cohort ≥15 participants). HISP regional node is the designated DHIS2 regional support partner and has delivered training across 20+ regional countries. Target: 15–20 MoH staff participate in DHIS2 Academy within 12 months.

2. **WHO/ITU/HISP mentorship secondments** — Short-term (3–6 month) secondments of DHIS2 specialists, data governance advisors, and HIE architects from WHO, HISP regional node, or OpenHIE community to work alongside DHDD staff. This is not training in a classroom — it is on-the-job mentorship where TA and local staff work on real system deployments together.

3. **In-country workshops** — 2–5 day intensive workshops for orientation, eLMIS training, change management, and data governance. Delivered at MoH or PDGA training facilities in Progressa City.

4. **E-learning (asynchronous)** — OpenMRS Academy (free), DHIS2 Online Academy (free), TOGAF e-learning modules, data governance MOOCs. Suitable for self-motivated DHDD staff with reliable internet. Not suitable as sole training mechanism for facility-level users.

5. **Train-the-Trainer (ToT) programme** — 10 master trainers drawn from HMIS team, regional health data officers (when recruited), and engaged facility staff. 40-hour intensive programme covering adult learning principles, DHIS2 training delivery, eLMIS training delivery, assessment methods, and ongoing coaching. Master trainers become the sustainable training delivery mechanism for Wave 2 and beyond.

**Cost Estimate:** USD 200,000–350,000 (included in W1-10 initiative budget)

**Success Criteria for Short-Term:**
- ≥6 DHDD staff onboarded with ≥80 hours training within 9 months
- ≥100 MoH staff complete digital health orientation within 6 months
- ≥50 facility staff trained on DHIS2 Tracker within 12 months
- 10 master trainers certified through ToT programme within 12 months
- 20 change champions active at pilot facilities within 9 months
- Training curriculum framework documented for all system-specific programmes

#### 7.2.2 Medium-Term (Wave 2: 2027–2028) — Scaling and Professionalisation

**Objective:** Scale training delivery to all regions and system-specific programmes using the ToT network; develop advanced technical skills within DHDD; establish formal health informatics education pathways; deploy regional training capacity.

**Target Audience and Numbers:**

| Audience | Count | Training Type | Hours |
|----------|-------|--------------|-------|
| DHDD expanded team (8 new positions) | 8 | Role-specific technical training: OpenMRS administration, Keycloak IAM, integration development (Java/Node.js, FHIR), cybersecurity, supply chain informatics | 40–120 per person |
| Regional HIS officers (7) | 7 | DHIS2 advanced, data quality supervision, training delivery, EHR support, facility assessment | 80 per person |
| Hospital IT officers (7–8) | 7–8 | EHR administration (OpenMRS), network management, local server operations, backup procedures, user support | 40–80 per person |
| Clinicians at EHR sites (15–20 facilities) | 150–200 | OpenMRS clinical use: patient registration, encounter documentation, order entry, decision support | 20–40 per person |
| eLMIS users (remaining facilities) | 30–40 | eLMIS operations | 8–16 per person |
| DHIS2 Tracker EIR users (national scale) | 100–150 | EIR module: data entry, schedule management, defaulter tracking, offline sync | 16–24 per person |
| Community health workers (mHealth) | 50–100 | Mobile health data entry, community-based reporting, basic device management | 8 per person |
| MoH programme M&E officers | 15–20 | Analytics: DHIS2 dashboards, data visualisation, data use for decision-making | 16 per person |

**Delivery Mechanisms:**

1. **MSc Health Informatics sponsorships** — Progressa has no in-country health informatics programme. Accredited programmes in the region include those at KNUST (Kwame Nkrumah University of Science and Technology, Kumasi, Ghana) and the University of Ghana (Legon). Target: 2–3 DHDD staff sponsored for MSc Health Informatics (2-year programmes, part-time or blended where available) during Wave 2. These graduates become the long-term leadership pipeline for digital health in Progressa. Estimated cost: USD 15,000–25,000 per student (tuition + study allowance), total USD 30,000–75,000.

2. **TOGAF / EA certification** — DHDD Architecture & Standards Lead and Chief Director sponsored for TOGAF 10 certification (The Open Group). Online study + examination. Strengthens architecture governance competency and aligns with PDGA national EA capacity building. Estimated cost: USD 3,000–5,000 per person.

3. **DHIS2 Academy Level 2 and specialisation** — Advanced DHIS2 Tracker, Android, analytics, and server administration courses through HISP regional node. Target: 5–8 staff at Level 2; 2–3 staff at server administration specialisation. Delivered regionally (regional hub) or online.

4. **OpenMRS Implementation Training** — OpenMRS community provides implementation guides and in-country training by experienced deployers. Partner with IntraHealth or Jembi Health Systems for structured OpenMRS implementation training for DHDD Systems Operations staff and hospital IT officers. 5-day intensive + 3-month mentorship.

5. **Regional cascaded training** — Master trainers (ToT graduates) deliver DHIS2 and eLMIS training to regional and facility staff, supervised by DHDD Training Officer and Regional HIS officers. This is the scale mechanism: the 10 Wave 1 master trainers each train 20–30 facility staff per year, reaching 200–300 staff annually.

6. **Cybersecurity and information security training** — Health Information Security Officer sponsored for CISSP or equivalent health information security certification. In-country cybersecurity awareness training delivered to all DHDD staff and system administrators. Partner with PDGA for national cybersecurity training programme alignment.

7. **Clinical informatics champions** — At each EHR facility, identify 1–2 clinicians as "clinical informatics champions" who receive advanced EHR training (40 hours) and serve as peer support for colleagues. This model (1:10–15 ratio of champion to clinical users) has proven effective in OpenMRS deployments in Kenya (KenyaEMR) and Uganda (UgandaEMR).

**Cost Estimate:** USD 350,000–600,000 (included in W2-09 initiative budget)

**Success Criteria for Medium-Term:**
- 2–3 DHDD staff enrolled in MSc Health Informatics programmes
- ≥1 DHDD staff TOGAF-certified
- ≥150 clinicians trained on OpenMRS at EHR facilities (20–40 hours each)
- 7 Regional HIS officers trained and deployed
- Master trainer network delivering ≥200 training-days per year
- Clinical informatics champion at each EHR facility (1:10–15 support ratio achieved)
- EHR adoption rate ≥80% at pilot facilities after 6 months of training

#### 7.2.3 Long-Term (Wave 3: 2029–2030) — Sustainability and Innovation

**Objective:** Transition capacity building from project-funded TA to institutionalised, government-funded professional development; establish continuous learning mechanisms; develop advanced analytics and innovation capacity.

**Target Audience and Numbers:**

| Audience | Count | Training Type | Hours |
|----------|-------|--------------|-------|
| DHDD senior staff | 3–5 | Advanced: EA governance, health data analytics, AI/ML in health, regional/international exposure visits | 40–80 per person |
| DHDD full team | 14–20 | Continuous professional development: annual refresher, emerging technologies, cross-system troubleshooting | 24 per person per year |
| Regional HIS officers | 7 | Advanced: data analysis, training management, facility assessment, supervision | 24 per person per year |
| Facility IT officers | 7–8 | EHR/systems advanced: performance optimisation, Kubernetes operations (post-G-Cloud), disaster recovery | 24 per person per year |
| All digital health staff | 50+ | Annual health informatics update: new systems, policy changes, data quality review, lessons learned | 8 per person per year |
| Academic partnership | 2–3 cohorts | UoP (University of Progressa) Health Informatics module development — towards eventual in-country postgraduate programme | Curriculum development |

**Delivery Mechanisms:**

1. **Government-funded continuous professional development (CPD)** — Annual training budget line established within DHDD operational budget. Target: USD 50,000–100,000 per year for training, conferences, and professional development. This replaces donor-funded ad-hoc training with a sustainable, predictable training investment.

2. **Annual Digital Health Skills Assessment** — Each DHDD and regional staff member undergoes annual competency assessment against the implementation maturity model. Results inform individual development plans and organisational training priorities.

3. **University of Progressa (UoP) partnership** — Develop a Postgraduate Diploma or MSc module in Health Informatics at UoP in partnership with KNUST or University of Ghana. This is a 3–5 year initiative: curriculum design begins in Wave 2, pilot delivery in Wave 3. Long-term, this provides an in-country training pipeline that eliminates dependency on international programmes.

4. **Regional and international exposure** — DHDD leadership participates in HELINA (Health Informatics in Africa), WHO Digital Health Working Group, OpenHIE community meetings, and HISP global conferences. Exposure to peer countries builds networks, transfers knowledge, and prevents insularity.

5. **Innovation lab / sandbox** — DHDD establishes a digital health innovation sandbox (virtual or physical) for testing new technologies (AI/ML-assisted diagnostics, IoT health devices, telehealth) before production deployment. Staff rotate through the sandbox to build emerging technology skills.

**Cost Estimate:** USD 100,000–200,000 per year (absorbed into government recurrent budget)

**Success Criteria for Long-Term:**
- Government budget line for digital health CPD ≥USD 50,000 per year
- Annual competency assessment conducted for all DHDD and regional staff
- UoP Health Informatics module operational with first cohort
- ≥2 MSc Health Informatics graduates returned and serving in DHDD
- DHDD staff presenting at ≥1 international conference per year
- Digital health workforce attrition rate <15% per year (indicating retention effectiveness)

---

### 7.3 Training Plan by System

This section provides specific training plans for each major system in the target architecture. Each plan specifies the target audience, training content, duration, delivery method, provider, and phasing.

#### 7.3.1 DHIS2 (Aggregate HMIS, Tracker EIR, Tracker IDSR+, Analytics)

DHIS2 is the anchor platform, operational since 2010, with the widest user base. Training covers four modules reflecting DHIS2's expanding role.

| Module | Target Audience | Content | Duration | Delivery | Provider | Phase |
|--------|----------------|---------|----------|----------|----------|-------|
| DHIS2 Aggregate Refresher | Facility data focal persons (~90 facilities) | Data entry, validation rules, completeness/timeliness checks, basic dashboards | 8 hours | In-country workshops (regional, 7 sessions) | Master trainers (ToT graduates) | Wave 1 (M3–12) |
| DHIS2 Data Quality Tools | HMIS team, regional HIS officers | Validation rule configuration, outlier detection, completeness dashboards, data quality review protocols | 16 hours | In-country workshop + on-the-job mentorship | HISP regional node | Wave 1 (M3–9) |
| DHIS2 Tracker EIR | Immunisation focal persons at pilot facilities (50–70 staff) | Android app installation, child registration, vaccine event capture, schedule management, defaulter list generation, offline sync, data quality verification | 16–24 hours (3 days classroom + 2 days supervised practice) | In-country workshops at pilot regions + facility mentorship visits | HISP regional node + master trainers | Wave 1 (M6–12), Wave 2 (M13–36 for national scale) |
| DHIS2 Tracker IDSR+ | IDSR focal persons at surveillance sites (20–50 staff) | Case notification entry, weekly reporting, immediate notification workflow, alert generation, outbreak investigation forms | 16 hours (2 days classroom + 1 day supervised practice) | In-country workshops + WHO AFRO surveillance training alignment | WHO + HISP regional node | Wave 1 (M6–12), Wave 2 (M13–30) |
| DHIS2 Server Administration | DHDD Systems Operations Lead, DHIS2 Manager | Server installation/upgrade, PostgreSQL administration, performance tuning, backup/restore, Docker deployment, DHIS2 API, metadata management | 40 hours | DHIS2 Academy (regional hub) + remote mentorship | HISP regional node | Wave 1 (M6–12) |
| DHIS2 Analytics & Data Use | Programme M&E officers, DHDD Data Governance Officer, RHD data officers | Dashboard design, pivot tables, GIS mapping, indicator configuration, data visualisation best practices, data-driven decision-making | 16 hours | In-country workshop + e-learning (DHIS2 Online Academy) | HISP regional node + master trainers | Wave 2 (M13–24) |

**Total DHIS2 Training Effort:** ~250–350 person-training-days across Wave 1 and Wave 2.

#### 7.3.2 HIE / OpenHIM

The HIE is a technical platform with a small but critical user base — only DHDD Architecture & Standards Unit staff and integration developers interact with it directly.

| Module | Target Audience | Content | Duration | Delivery | Provider | Phase |
|--------|----------------|---------|----------|----------|----------|-------|
| OpenHIM Administration | HIE Manager, Integration Developer | OpenHIM console, channel configuration, mediator deployment, transaction monitoring, client certificate management, troubleshooting | 24 hours | On-the-job mentorship during HIE deployment (W1-06) | HIE/Integration Architect TA | Wave 1 (M3–12) |
| Mediator Development | Integration Developer | Node.js/Java mediator scaffolding, FHIR transformation, error handling, circuit breaker patterns, testing | 40 hours | On-the-job mentorship + OpenHIE community resources | HIE/Integration Architect TA | Wave 1–2 |
| FHIR Fundamentals | DHDD Architecture team, Data Governance Officer | FHIR R4 resources (Patient, Encounter, Observation, DiagnosticReport), REST operations, search parameters, profiles, implementation guides | 24 hours | Online (HL7 FHIR e-learning) + in-country workshop | HIE Architect TA + HL7 FHIR training materials | Wave 1 (M6–12) |
| API Governance | DHDD Architecture team, system administrators | API versioning, documentation (OpenAPI 3.0), security (OAuth 2.0, mTLS), rate limiting, monitoring, developer portal | 16 hours | In-country workshop | HIE Architect TA | Wave 1 (M6–12) |

**Total HIE Training Effort:** ~120–160 person-training-hours for 3–5 DHDD technical staff.

#### 7.3.3 MPI / OpenCR

| Module | Target Audience | Content | Duration | Delivery | Provider | Phase |
|--------|----------------|---------|----------|----------|----------|-------|
| MPI Administration | Data Governance Officer, HIE Manager | OpenCR configuration, matching rule tuning, deduplication workflow, patient merge/split operations, ElasticSearch management, FHIR PIXm/PDQm APIs | 24 hours | On-the-job mentorship during MPI deployment (W1-05) | MPI Specialist TA | Wave 1 (M3–9) |
| MPI Governance | DHDD Data Governance Unit, programme data managers | Duplicate resolution procedures, identity lifecycle management, quality monitoring dashboards, data sharing agreement compliance | 8 hours | In-country workshop | MPI Specialist TA + Data Governance TA | Wave 1 (M6–12) |
| MPI Integration | Integration Developer | PIXm/PDQm query patterns, MPI-aware mediator development, patient identity flow testing | 16 hours | On-the-job mentorship | MPI/Integration TA | Wave 1 (M6–12) |

**Total MPI Training Effort:** ~50–70 person-training-hours for 3–4 DHDD staff.

#### 7.3.4 EHR / OpenMRS

EHR training is the most resource-intensive programme due to the large number of clinician end-users and the clinical workflow transformation required. The benchmark is 20–40 hours per clinician for EHR proficiency, with an IT support ratio of 1:10–15 facilities.

| Module | Target Audience | Content | Duration | Delivery | Provider | Phase |
|--------|----------------|---------|----------|----------|----------|-------|
| OpenMRS Administration | DHDD EHR Support Specialist, hospital IT officers | Installation, module management, concept dictionary, form builder, user management, backup, offline sync configuration, FHIR module | 40 hours (1 week intensive + 3 months mentorship) | In-country workshop + on-the-job mentorship | OpenMRS Implementation TA (IntraHealth/Jembi) | Wave 2 (M1–6) |
| Clinical Workflow Design | DHDD EHR Support Specialist, clinical informatics champions, programme M&E officers | Maternal health workflow mapping, HIV/ART workflow mapping, order sets, decision support rules, report design | 24 hours | In-country workshop with clinical end-users | OpenMRS Implementation TA + clinical informaticist | Wave 2 (M3–9) |
| Clinician EHR Use (Pilot) | Clinicians at 3–5 pilot facilities (30–50 staff) | Patient registration, encounter documentation, order entry, results viewing, decision support alerts, offline workflow | 20–40 hours (5 days classroom + 5 days supervised clinical practice) | Facility-based training with clinical informatics champions | Clinical informaticist TA + clinical informatics champions | Wave 2 (M6–12) |
| Clinician EHR Use (Scale) | Clinicians at 15–20 facilities (120–150 additional staff) | Same as pilot, adapted based on lessons learned | 20–40 hours per clinician | Cascaded training by clinical informatics champions + regional HIS officers | Clinical informatics champions + master trainers | Wave 2 (M12–30) |
| EHR Data Quality | Data Governance Officer, hospital data officers | Completeness monitoring, coding accuracy, clinical data validation, paper-to-digital coexistence audit | 8 hours | In-country workshop | DHDD Data Governance + OpenMRS TA | Wave 2 (M9–18) |

**Total EHR Training Effort:** ~3,000–6,000 person-training-hours across 150–200 clinicians and 15–20 IT/data staff. This is the single largest training investment in the roadmap, consistent with the benchmark of 10–20% of implementation budget allocated to training.

**Critical Design Decisions for EHR Training:**
- **Clinical informatics champion model (1:10–15 ratio):** At each EHR facility, 1–2 clinicians are identified and given advanced training (40 hours). They serve as first-line support for colleagues, reducing dependency on DHDD central team. Target: 15–20 champions across 15–20 facilities.
- **Supervised clinical practice mandatory:** Classroom training alone does not produce adoption. Each clinician receives 5 days of supervised practice where a trainer or champion observes and assists during actual clinical encounters.
- **Paper-to-digital parallel period:** Training explicitly includes 3–6 months of parallel operation where clinicians maintain both paper and digital records. Clear criteria define when paper can be retired per facility (digital completeness ≥95%, timeliness ≥90%, clinician confidence self-assessment ≥80%).

#### 7.3.5 LIS (Laboratory Information System)

| Module | Target Audience | Content | Duration | Delivery | Provider | Phase |
|--------|----------------|---------|----------|----------|----------|-------|
| LIS Administration | DHDD Systems Operations, NRL laboratory information officer | A-LIS/OpenELIS configuration, test catalogue management, instrument interfacing, LOINC coding, user management, backup | 24 hours | On-the-job mentorship during LIS deployment (W2-05) | LIS Implementation TA | Wave 2 (M6–18) |
| LIS Clinical Use | Laboratory technicians at NRL + regional labs (20–30 staff) | Sample receipt, test ordering, result entry, quality control, report generation, instrument interfacing | 16 hours (2 days classroom + 2 days supervised practice) | Facility-based training | LIS Implementation TA + NRL staff | Wave 2 (M12–24) |
| LIS-HIE Integration | Integration Developer, HIE Manager | FHIR DiagnosticReport, ServiceRequest; LIS-to-DHIS2 reporting; LIS-to-IDSR+ notification; LOINC-to-local code mapping | 16 hours | On-the-job mentorship | Integration TA | Wave 2 (M18–30) |

**Total LIS Training Effort:** ~60–100 person-training-days for 25–35 staff.

#### 7.3.6 Data Governance

Data governance training is cross-cutting — it applies to staff across all systems and levels.

| Module | Target Audience | Content | Duration | Delivery | Provider | Phase |
|--------|----------------|---------|----------|----------|----------|-------|
| Data Governance Orientation | All MoH programme managers, system administrators (30–40 staff) | Data ownership model, four-tier classification scheme, data sharing agreements, privacy obligations, patient consent, data lifecycle | 4 hours | In-country workshop (2 sessions) | Data Governance TA | Wave 1 (M3–6) |
| Data Quality Management | DHDD Data Governance Unit, HMIS team, programme M&E officers (15–20 staff) | Data quality dimensions (completeness, timeliness, accuracy, consistency), DHIS2 validation tools, quality scoring, review protocols, root cause analysis | 16 hours | In-country workshop + quarterly data quality review sessions | Data Governance TA + HISP regional node | Wave 1 (M6–12), Wave 2 ongoing |
| Master Data Management | DHDD Data Governance Unit, MPI administrators (3–5 staff) | MPI governance, facility registry maintenance, terminology management (ICD-11, LOINC, ICHI), data dictionary stewardship | 24 hours | On-the-job mentorship | Data Governance TA + MPI TA | Wave 1–2 |
| Data Sharing Agreement Management | DHDD Data Governance Officer, programme directors (10–15 staff) | DSA template use, compliance monitoring, cross-system data flow approval, consent management, audit procedures | 8 hours | In-country workshop | Data Governance TA + MoH Legal Counsel | Wave 1 (M6–9) |

**Total Data Governance Training Effort:** ~100–150 person-training-hours across 40–60 staff.

#### 7.3.7 Information Security

| Module | Target Audience | Content | Duration | Delivery | Provider | Phase |
|--------|----------------|---------|----------|----------|----------|-------|
| Health Data Security Awareness | All MoH digital health staff (50+ staff) | Password hygiene, phishing awareness, device security, incident reporting, data classification handling rules, patient privacy | 4 hours | In-country workshops (annual) | Health Info Security Officer (DHDD) + PDGA cybersecurity unit | Wave 1 (M9–12), annual thereafter |
| Keycloak IAM Administration | Health Info Security Officer, DHDD Systems Operations (2–3 staff) | Keycloak realm configuration, client registration, role-based access control, MFA enforcement, SSO configuration, token management | 24 hours | On-the-job mentorship during Keycloak deployment (W1-06) | HIE/Security TA | Wave 1 (M6–12) |
| Security Incident Response | DHDD core team (6–8 staff) | Incident classification, response procedures, forensic evidence preservation, communication protocols, post-incident review | 8 hours | Tabletop exercise + workshop | PDGA cybersecurity unit + external security TA | Wave 2 (M13–18) |
| Security Audit and Compliance | Health Info Security Officer, Data Governance Officer (2 staff) | Access log review, vulnerability assessment, penetration testing basics, compliance checklist, audit reporting | 16 hours | External training + on-the-job mentorship | PDGA cybersecurity unit + CISSP-certified TA | Wave 2 (M13–24) |

**Total Information Security Training Effort:** ~80–120 person-training-hours across 50+ staff (awareness) and 5–8 specialist staff (technical).

#### 7.3.8 Consolidated Training Investment Summary

| Training Programme | Target Staff | Total Person-Hours | Phase | Estimated Cost (USD) |
|-------------------|-------------|-------------------|-------|---------------------|
| DHIS2 (all modules) | 200–280 | 2,000–3,500 | Wave 1–2 | 150,000–250,000 |
| EHR / OpenMRS | 150–200 | 3,000–6,000 | Wave 2 | 180,000–300,000 |
| HIE / OpenHIM + FHIR | 3–5 | 120–160 | Wave 1–2 | 30,000–50,000 |
| MPI / OpenCR | 3–4 | 50–70 | Wave 1 | 15,000–25,000 |
| LIS | 25–35 | 480–800 | Wave 2 | 40,000–70,000 |
| Data Governance | 40–60 | 400–600 | Wave 1–2 | 30,000–50,000 |
| Information Security | 50+ (awareness) + 5–8 (specialist) | 280–400 | Wave 1–3 | 25,000–45,000 |
| Leadership / Governance (orientation, ToT, PM) | 60–80 | 800–1,200 | Wave 1–2 | 60,000–100,000 |
| MSc / Certification (KNUST, TOGAF, CISSP) | 5–8 | N/A (multi-year) | Wave 2–3 | 60,000–120,000 |
| **Total** | **~500 staff** | **~7,000–12,700** | **Wave 1–3** | **USD 590,000–1,010,000** |

This total represents approximately 8–12% of the USD 6.2–10.7M technology investment, consistent with the international benchmark of 10–20% of implementation budget allocated to training.

---

## Section 8: Risk Management

*TOGAF ADM Phase G — Implementation Governance (Risk Management)*

Effective risk management is not a one-time planning exercise — it is a continuous governance function embedded in the NDHSC/DHDD decision cycle. This section establishes the risk register (Section 8.1) and risk response strategy (Section 8.2) that will govern the roadmap implementation from 2025 through 2033.

---

### 8.1 Risk Register

The risk register consolidates risks identified across all preceding sections — initiative-level risks from Wave 1 (Section 4.2), Wave 2 (Section 4.3), Wave 3 (Section 4.4), governance risks (Section 6), and capacity risks (Section 7) — into a unified register with standardised assessment. Each risk is assessed on two dimensions:

**Likelihood Scale:** Low (probability <20%), Medium (20–50%), High (50–80%), Very High (>80%)

**Impact Scale:** Low (minor delay or cost increase <10%), Medium (significant delay 3–6 months or cost increase 10–25%), High (major delay >6 months or cost increase 25–50%, or partial scope reduction), Critical (programme failure, system abandonment, or loss of key capability)

**Overall Rating Matrix:**

| | Low Impact | Medium Impact | High Impact | Critical Impact |
|---|---|---|---|---|
| **Very High Likelihood** | Medium | High | Critical | Critical |
| **High Likelihood** | Medium | High | High | Critical |
| **Medium Likelihood** | Low | Medium | High | High |
| **Low Likelihood** | Low | Low | Medium | High |

---

#### Risk Register

**R-01: EHSSP Funding Cliff — Loss of Digital Health System Operations**

| Attribute | Specification |
|-----------|--------------|
| **ID** | R-01 |
| **Description** | EHSSP project closes 29 August 2025, terminating funding for e-NHIS operations, eCRVS cloud hosting, facility satellite connectivity, and eLMIS infrastructure. Without proactive transition, 4 operational digital health systems face immediate service disruption affecting insurance enrollment (15,000–20,000 beneficiaries), birth registration (40,000+ per year), supply chain management (50+ facilities), and connectivity for Tracker/reporting at 50+ facilities. |
| **Category** | Financial / Operational |
| **Likelihood** | Very High (funding end date is confirmed) |
| **Impact** | Critical (loss of multiple operational systems simultaneously) |
| **Overall Rating** | **CRITICAL** |
| **Mitigation** | (1) W1-11 EHSSP Transition Plan initiated immediately — asset inventory, system-by-system transition options developed by Month 2; (2) RDIP reallocation for infrastructure continuity (hosting, connectivity); (3) NHIA absorbs e-NHIS operational costs (e-NHIS is presidential priority); (4) Global Fund NFM4 absorbs eLMIS hosting costs; (5) NDHSC escalation for emergency government bridge allocation if donor successor funding is delayed; (6) 3-month minimum bridge arrangements secured for all systems before closure date |
| **Risk Owner** | DHDD Project Coordinator (primary); PS MoH (escalation); RDIP Programme Manager (infrastructure transition) |
| **Contingency** | If transition plan fails for any system: emergency hosting at PDGA DC (negotiated allocation); manual/paper fallback procedures activated for affected functions; NDHSC convenes extraordinary meeting to authorise emergency funding |
| **Monitoring Indicator** | Successor funding confirmed for each system (binary: confirmed/not confirmed), tracked monthly |
| **Status** | Active — W1-11 initiated |

---

**R-02: DHDD Recruitment Failure — Qualified Staff Unavailable or Unaffordable**

| Attribute | Specification |
|-----------|--------------|
| **ID** | R-02 |
| **Description** | Government salary scales for technical positions (USD 5,000–12,000 per year) are 40–60% below NGO and donor project rates in Progressa. The DHDD requires 14 positions with specialised health informatics, integration development, and data governance skills that are scarce in the local labour market. Failure to recruit the core team (especially Chief Director, HIE Manager, Data Governance Officer) collapses the entire governance and operational structure defined in Section 6. |
| **Category** | Human Resource / Institutional |
| **Likelihood** | High |
| **Impact** | Critical (no DHDD = no governance, no system operations, no integration capability) |
| **Overall Rating** | **CRITICAL** |
| **Mitigation** | (1) RDIP institutional strengthening funds provide salary supplementation for Wave 1–2 (top-up to competitive NGO-equivalent rates); (2) WHO and HISP regional node secondments for specialist roles (HIE architect, MPI specialist) during initial 12–18 months while civil service recruitment completes; (3) Allow remote/hybrid arrangements for specialist roles to access diaspora talent; (4) Performance-based allowances linked to system uptime and integration flow targets; (5) Professional development incentives: TOGAF certification, DHIS2 Academy, MSc sponsorship (Section 7.2.2) create non-monetary retention value; (6) DHDD establishment framed within Public Service Commission as "specialist directorate" with enhanced salary scale approval |
| **Risk Owner** | PS MoH (establishment authority); DHDD Chief Director (recruitment execution, when appointed); RDIP Programme Manager (salary supplementation funding) |
| **Contingency** | If core positions remain unfilled after 9 months: convert to long-term TA contracts (12–24 months) funded by RDIP with explicit knowledge transfer milestones and local understudy requirements; reduce DHDD scope to 4 critical functions (governance, DHIS2, data governance, project coordination) and outsource integration/security to contracted TA |
| **Monitoring Indicator** | DHDD positions filled vs. target (tracked monthly); time-to-fill per position; offer acceptance rate |
| **Status** | Active — W1-01 initiated |

---

**R-03: RDIP Infrastructure Delivery Delay — G-Cloud, Broadband, Data Centre**

| Attribute | Specification |
|-----------|--------------|
| **ID** | R-03 |
| **Description** | RDIP is expected to deliver G-Cloud infrastructure, national data centre, and broadband backbone during 2026–2028. Delays in procurement, construction, or vendor delivery would strand MoH on interim hosting (PDGA DC) beyond planned timelines, delay the Wave 2 G-Cloud migration (W2-07), and limit facility connectivity for EHR, Tracker, and eLMIS scaling. RDIP infrastructure projects across the region have experienced 12–24 month delays in comparable countries. |
| **Category** | External Dependency / Infrastructure |
| **Likelihood** | High |
| **Impact** | High (delays Wave 2 scaling; does not block Wave 1 but compresses Wave 2 timeline) |
| **Overall Rating** | **HIGH** |
| **Mitigation** | (1) Wave 1 architecture designed for extended interim operation — Docker Compose at PDGA DC scales adequately for Wave 1–2 volumes; (2) 4G mobile data as connectivity bridge (W1-08) — not dependent on RDIP broadband; (3) NDHSC (via PDGA DG member) actively monitors RDIP delivery schedule and advocates for health facility prioritisation; (4) G-Cloud migration plan (W1-09) prepared in advance so migration can execute rapidly when infrastructure becomes available; (5) Cloud hosting (regional, e.g. AWS Africa or Azure South Africa) as fallback with data sovereignty trade-off — NDHSC-approved decision criteria documented |
| **Risk Owner** | PDGA Director General (RDIP counterpart); DHDD Chief Director (monitoring and advocacy); RDIP Programme Manager (delivery accountability) |
| **Contingency** | If G-Cloud delayed beyond 2028: extend PDGA DC hosting agreement; procure additional server capacity at PDGA DC; evaluate regional cloud hosting for non-sensitive workloads (analytics, monitoring); request NDHSC decision on data sovereignty trade-off for temporary cloud hosting of health data |
| **Monitoring Indicator** | RDIP infrastructure milestone completion (quarterly tracking); broadband coverage map (facilities connected); G-Cloud commissioning date (confirmed vs. planned) |
| **Status** | Active — monitoring |

---

**R-04: eCRVS Vendor Non-Cooperation — API or Data Access Blocked**

| Attribute | Specification |
|-----------|--------------|
| **ID** | R-04 |
| **Description** | The Priority 1 integration flow (eCRVS→MPI→e-NHIS) depends on the eCRVS system (CIVIS, managed by Civitas Group) providing either a real-time API or batch data export for birth registrations. The eCRVS vendor contract, procurement relationship, and technical architecture are managed outside MoH's direct authority (through RDIP/MoDE). If Civitas Group delays or refuses API development, the highest-impact integration flow is blocked, the MPI cannot be seeded with eCRVS NIN data, and the e-NHIS auto-enrollment objective fails. |
| **Category** | External Dependency / Vendor |
| **Likelihood** | High |
| **Impact** | High (blocks Priority 1 integration and MPI seeding) |
| **Overall Rating** | **HIGH** |
| **Mitigation** | (1) Batch CSV export as fallback — less elegant but functional; daily or weekly batch processing achieves same outcome with latency; (2) RDIP DTFA Steering Committee escalation — formal government request through RDIP governance chain; (3) NDHSC formal request to MoDE (MoDE oversees eCRVS programme) for vendor compliance; (4) eCRVS-to-MPI integration can proceed with existing bulk NIN data (about 1 million records) while API is negotiated; (5) Contract review at next vendor renewal to mandate FHIR API provision; (6) Technical engagement with Civitas Group through Architecture & Interoperability TWG — joint design sessions to align on interface specification |
| **Risk Owner** | DHDD HIE Manager (technical engagement); PS MoDE (vendor governance); RDIP Programme Manager (contract authority) |
| **Contingency** | If vendor cooperation fails after 6 months of escalation: implement one-way batch import using existing eCRVS database snapshots (with MoDE approval); explore open-source eCRVS alternative (OpenCRVS) for medium-term transition; document vendor lock-in risk for NDHSC and RDIP governance |
| **Monitoring Indicator** | eCRVS API specification agreed (binary); batch export mechanism operational (binary); vendor engagement meetings held (count per quarter) |
| **Status** | Active — engagement initiated through W1-06 |

---

**R-05: Clinician Resistance to EHR Adoption**

| Attribute | Specification |
|-----------|--------------|
| **ID** | R-05 |
| **Description** | The 2022 WHO readiness survey showed ~90% EHR readiness among Progressa health facilities, yet ~90% of clinical documentation remains paper-based. This gap between stated readiness and actual practice suggests that training and change management — not willingness — are the binding constraints. OpenMRS deployments in East Africa consistently report initial clinician resistance due to perceived increased workload (dual documentation during transition), slow systems, and unfamiliarity with digital workflows. If adoption stalls below 50% at pilot facilities, the EHR investment (USD 550,000–950,000 in Wave 2) fails to generate the clinical data flows needed for Flows 4 and 5 through the HIE. |
| **Category** | Change Management / Adoption |
| **Likelihood** | High |
| **Impact** | High (undermines EHR investment and clinical data integration) |
| **Overall Rating** | **HIGH** |
| **Mitigation** | (1) Clinical informatics champion model at each EHR facility (1:10–15 clinician ratio) — peer support is more effective than external training; (2) 20–40 hours training per clinician including 5 days supervised clinical practice (not classroom-only); (3) Clinical workflow co-design with actual users before system configuration — clinicians design the forms and workflows they will use; (4) 3–6 month parallel paper/digital period with explicit retirement criteria; (5) Quick wins prioritised: decision support alerts, defaulter lists, automated lab result retrieval — demonstrate immediate clinical value; (6) Performance metrics linked to digital documentation (not punitive — recognition-based); (7) Facility selection for pilot prioritises sites with engaged leadership and change champion candidates |
| **Risk Owner** | DHDD Training Officer (training delivery); DHDD EHR Support Specialist (clinical workflow); Director, Health Services (clinician engagement mandate) |
| **Contingency** | If pilot adoption <50% after 6 months: pause scaling; conduct rapid user experience assessment; redesign workflows based on clinician feedback; consider vertical scope reduction (maternal health only before adding HIV/ART); extend parallel period; deploy additional clinical informatics champions |
| **Monitoring Indicator** | EHR adoption rate per facility (% clinicians using digital documentation ≥3 days/week); data completeness in EHR vs. paper registers; clinician satisfaction survey (quarterly) |
| **Status** | Future — activates Wave 2 |

---

**R-06: Connectivity Disruption — Single Submarine Cable Dependency**

| Attribute | Specification |
|-----------|--------------|
| **ID** | R-06 |
| **Description** | Progressa depends on a single submarine fibre-optic cable for international internet connectivity. Any cable break or landing station failure would disrupt cloud-hosted services, DHIS2 server access (if centrally hosted), and real-time integration flows through the HIE. Domestically, ~60% electricity access means frequent power outages at health facilities. Combined, these infrastructure constraints threaten the availability of all networked digital health services. The submarine cable has experienced multiple outages in recent years across the region. |
| **Category** | Infrastructure / External |
| **Likelihood** | Medium (cable disruption episodic; power outages frequent) |
| **Impact** | High (disrupts all centrally hosted services and real-time integration) |
| **Overall Rating** | **HIGH** |
| **Mitigation** | (1) Mandatory offline-first design for all facility-level systems — DHIS2 Android, OpenMRS local servers, eLMIS offline mode; systems must function for ≥7 days without connectivity; (2) Local facility server deployment for EHR ensures clinical data available regardless of WAN; (3) DHIS2 data sync designed for eventual consistency (not real-time dependency); (4) G-Cloud domestic hosting eliminates dependency on international connectivity for server-to-server communication within Progressa; (5) Solar power kits at 10–15 priority facilities (W1-08); UPS at all facilities with digital systems; (6) Integration flows designed with store-and-forward capability — OpenHIM queues transactions during outage and processes when connectivity restored; (7) RDIP broadband diversification (second submarine cable landing or satellite backup) monitored through NDHSC |
| **Risk Owner** | DHDD Systems Operations Lead (offline-first enforcement, system availability); PDGA DG (national connectivity infrastructure); RDIP Programme Manager (broadband programme) |
| **Contingency** | During extended outage (>48 hours): activate paper-based fallback procedures at all facilities; DHIS2 aggregate reporting reverts to facility-level entry when connectivity restored; integration flows pause and resume automatically (OpenHIM retry mechanism); DHDD activates communication protocol to notify all facilities of expected disruption duration |
| **Monitoring Indicator** | System uptime per service (target ≥99.5%); connectivity status at facility sample (10 sentinel sites monitored daily); power availability at EHR/Tracker facilities (target ≥18 hours/day) |
| **Status** | Active — offline-first policy in development (W1-08) |

---

**R-07: Donor Dependency and Sustainability Failure**

| Attribute | Specification |
|-----------|--------------|
| **ID** | R-07 |
| **Description** | The roadmap depends on external funding for 75–77% of the total investment (USD 6.2–10.7M). Government budget absorption is projected to increase from 6% (current) to 75% at steady state (2033), but this trajectory requires sustained political commitment over 8 years across potential government transitions. If donor funding (RDIP, Global Fund, GAVI) ends before government absorption reaches critical mass, recurrent costs (USD 515,000/year at steady state) become unfunded, threatening system operations. The pattern of donor-funded systems collapsing after project closure is well-documented across sub-Saharan Africa. |
| **Category** | Financial / Sustainability |
| **Likelihood** | Medium |
| **Impact** | Critical (programme collapse if recurrent costs unfunded) |
| **Overall Rating** | **HIGH** |
| **Mitigation** | (1) Sustainability financial model (Section 5.5) with explicit donor exit plans: EHSSP exits 2025 (managed via W1-11); RDIP exits 2028 (infrastructure complete); Global Fund transitions to NFM5 2028; GAVI transitions with EIR maturity; (2) Government budget line for digital health operations established in Wave 1 (NDHSC-endorsed request to MoF); (3) Progressive cost absorption: government share increases from ~15% (Wave 1) to ~40% (Wave 3) to 75% (steady state); (4) Co-financing strategy: link digital health budget to existing programme budgets (EPI, HIV, NHIS) that have established government allocations; (5) NHIA premium revenue growth creates sustainable funding for e-NHIS operations; (6) Sustainability dashboard (Section 5.6) with 7 indicators tracked quarterly by NDHSC; (7) Cost containment: open-source stack eliminates licensing fees; G-Cloud reduces hosting costs; master trainer model reduces external training dependency |
| **Risk Owner** | PS MoH (government budget advocacy); DHDD Project Coordinator (sustainability monitoring); MoF representative on NDHSC (budget allocation) |
| **Contingency** | If government absorption trajectory falls below 50% of target by Wave 3: implement service rationalisation — prioritise DHIS2 and HIE (lowest marginal cost, highest impact) over EHR scaling; negotiate donor bridge funding for 2-year extension; reduce DHDD staffing to essential-only positions; present NDHSC with sustainability risk assessment and options |
| **Monitoring Indicator** | Government budget share of digital health recurrent costs (% — target trajectory: 15% → 25% → 40% → 75%); sustainability dashboard score (7 indicators); donor exit milestone completion (binary per donor) |
| **Status** | Active — sustainability model established in Section 5 |

---

**R-08: NIN Production Suspension — Patient Identity Foundation Undermined**

| Attribute | Specification |
|-----------|--------------|
| **ID** | R-08 |
| **Description** | The eCRVS system (CIVIS) has registered about 1 million persons with National Identity Numbers (NIN), but NIN production has been suspended due to unresolved contract issues with the vendor. This means new registrations receive NINs in the system but physical NIN cards are not produced, reducing public trust and uptake. More critically, the ~50% registration coverage means that ~50% of the population lacks a strong identifier for deterministic MPI matching. If NIN coverage stagnates, the MPI must rely heavily on probabilistic matching (with higher false positive rates), and the eCRVS-to-NHIS auto-enrollment flow captures only half the target population. |
| **Category** | External Dependency / Identity |
| **Likelihood** | High (contract issues unresolved as of late 2025) |
| **Impact** | Medium (MPI functions with probabilistic matching; auto-enrollment partially effective) |
| **Overall Rating** | **HIGH** |
| **Mitigation** | (1) MPI designed for multi-identifier matching from the outset — deterministic on NIN where available, probabilistic on demographics (name, DOB, sex, mother's name, facility) where NIN absent; (2) Probabilistic matching thresholds tuned conservatively — high-confidence matches auto-linked, uncertain matches routed to manual review queue; (3) NDHSC escalation to MoDE/RDIP governance for NIN production resumption — this is a cross-government priority, not solely a health sector issue; (4) MPI accepts multiple identifiers — e-NHIS beneficiary ID, SPT identifier, facility registration number — creating a web of identity linkage even without universal NIN; (5) Health sector auto-enrollment proceeds for NIN-registered population (~50%) while probabilistic matching covers remaining population with appropriate quality controls |
| **Risk Owner** | DHDD Data Governance Officer (MPI quality management); PS MoDE (NIN production authority); RDIP Programme Manager (eCRVS vendor contract) |
| **Contingency** | If NIN production not resumed within 24 months: implement health-sector-specific identifier (Health ID) generated by MPI at point of first encounter; Health ID linked to NIN when/if NIN becomes available; this creates a functional patient identity system independent of national ID progress |
| **Monitoring Indicator** | eCRVS NIN registration coverage (% of population); NIN production status (active/suspended); MPI deterministic vs. probabilistic match ratio; MPI false positive rate (target <2%) |
| **Status** | Active — monitoring via NDHSC |

---

**R-09: SPT-to-DHIS2 Tracker Transition Failure — Immunisation Data Disruption**

| Attribute | Specification |
|-----------|--------------|
| **ID** | R-09 |
| **Description** | The SPT (scanned paper tracking) system by Vaxa Foundation captures immunisation data at all ~90 facilities with >99% accuracy and 60% administrative time reduction. The roadmap requires transitioning to DHIS2 Tracker EIR for long-term sustainability and DHIS2 platform consolidation. However, SPT is operationally excellent and deeply embedded in facility workflows. If DHIS2 Tracker fails to match SPT accuracy (>99%) and usability during parallel operation, facility staff may reject the transition, EPI programme managers may resist, and Vaxa may withdraw support during a contested transition. Premature SPT retirement before DHIS2 Tracker is proven risks immunisation data quality — a politically sensitive outcome in a country with high immunisation coverage. |
| **Category** | Technical / Change Management |
| **Likelihood** | Medium |
| **Impact** | High (immunisation data quality degradation; programme manager resistance; donor/partner concerns) |
| **Overall Rating** | **HIGH** |
| **Mitigation** | (1) Extended parallel operation: SPT continues as primary system while DHIS2 Tracker EIR operates in parallel at pilot sites for 12–18 months minimum; (2) Objective data quality comparison: DHIS2 Tracker accuracy measured against SPT at the same facilities over 6+ months — transition only proceeds when Tracker achieves ≥95% accuracy; (3) Vaxa Foundation engagement: include Vaxa technical team in transition planning through Architecture & Interoperability TWG; leverage their expertise in data quality assurance; (4) WHO EPI programme support: WHO Country Office consulted on transition timeline and quality benchmarks; (5) Phased regional transition: regions with strong connectivity and trained staff transition first; remaining regions maintain SPT until conditions met; (6) No forced retirement: SPT is decommissioned only in regions where DHIS2 Tracker has demonstrated equivalent performance for ≥6 consecutive months |
| **Risk Owner** | Director, Public Health (EPI programme accountability); DHDD DHIS2 Manager (Tracker technical readiness); HISP regional node (DHIS2 Tracker quality assurance) |
| **Contingency** | If DHIS2 Tracker fails quality benchmarks after 18 months of parallel operation: maintain SPT as primary EIR; reposition DHIS2 Tracker EIR as supplementary analytics layer (aggregate extraction from SPT continues via existing flow); reassess DHIS2 Tracker readiness at 6-month intervals; do not retire SPT until objective criteria met |
| **Monitoring Indicator** | DHIS2 Tracker EIR accuracy vs. SPT (target ≥95%); Tracker data completeness vs. SPT (target ≥90%); facility staff satisfaction survey (Tracker vs. SPT); number of facilities where SPT can be retired (criteria met) |
| **Status** | Future — activates Wave 1 (pilot), Wave 2 (scaling) |

---

**R-10: Political Transition or Priority Shift — Loss of Digital Health Mandate**

| Attribute | Specification |
|-----------|--------------|
| **ID** | R-10 |
| **Description** | The 8-year roadmap (2025–2033) spans at least one national election cycle. A change in government, ministerial reshuffle, or shift in health sector priorities could deprioritise digital health, defund the DHDD, or redirect resources to competing priorities (e.g., infrastructure, human resources, clinical service expansion). The Ministerial Order establishing the NDHSC and DHDD is an administrative instrument, not legislation — it can be revoked by a successor minister. |
| **Category** | Political / Institutional |
| **Likelihood** | Medium |
| **Impact** | Critical (loss of governance mandate, defunding of DHDD, programme collapse) |
| **Overall Rating** | **HIGH** |
| **Mitigation** | (1) Governance anchored in administrative (Ministerial Order) not political structures — this is faster to establish and survives PS-level continuity even during ministerial changes; (2) Cross-party support built through NDHSC — membership includes technocrats (PS, Directors) and external stakeholders (WHO, World Bank, PDGA) who provide continuity; (3) Quick wins in Wave 1 demonstrate visible results before political cycle: eCRVS-NHIS auto-enrollment (direct citizen benefit), DHIS2 dashboards (visible to Minister), eLMIS national rollout (supply chain improvement); (4) National Digital Health Strategy 2025–2033 (W1-02) endorsed at PS level creates institutional commitment that outlasts individual ministers; (5) Donor conditionality: RDIP and Global Fund work plans reference the roadmap — discontinuation would jeopardise ongoing funding; (6) Civil society representative on NDHSC provides external accountability; (7) Integration with national digital master plan (ten-year) embeds health digital transformation in broader government priority |
| **Risk Owner** | PS MoH (institutional continuity); NDHSC Chair (governance mandate protection); WHO Country Representative (external advocacy) |
| **Contingency** | If new minister deprioritises digital health: NDHSC external members (WHO, World Bank, PDGA DG) advocate for continuity; RDIP conditionality reinforces infrastructure investment protection; DHDD can operate with reduced profile if core functions (DHIS2, data governance) are maintained; seek endorsement of Digital Health Strategy at Cabinet level to create cross-government commitment |
| **Monitoring Indicator** | NDHSC meeting frequency (target ≥4/year); Ministerial engagement level (attendance or delegation to NDHSC); budget allocation trend for digital health (increasing/stable/declining); donor partner confidence level (assessed informally at quarterly coordination meetings) |
| **Status** | Active — ongoing vigilance |

---

**R-11: Data Quality Degradation During System Transitions**

| Attribute | Specification |
|-----------|--------------|
| **ID** | R-11 |
| **Description** | The roadmap involves multiple concurrent system transitions: paper→EHR, SPT→DHIS2 Tracker, paper IDSR→electronic IDSR+, and existing reporting→eLMIS. Each transition creates a period of dual data collection where facility staff maintain both old and new systems. This parallel operation increases workload by 30–50%, creates data entry fatigue, and risks that neither old nor new system receives complete data. If aggregate DHIS2 reporting completeness (currently targeted at ≥90%) degrades during transitions, programme managers lose trust in digital systems and revert to paper-based shadow systems. |
| **Category** | Operational / Data Quality |
| **Likelihood** | High |
| **Impact** | Medium (temporary data quality dip; recoverable but damaging to trust) |
| **Overall Rating** | **HIGH** |
| **Mitigation** | (1) Stagger transitions: no facility undergoes more than one major system transition simultaneously — sequencing enforced by W1→W2→W3 phasing; (2) Parallel period limited to 3–6 months per transition with explicit retirement criteria (digital ≥95% completeness, ≥90% timeliness before paper retired); (3) Dedicated data quality monitoring during transitions: weekly completeness dashboards reviewed by Regional HIS officers; (4) Additional facility support during transition periods: change champion visits, DHDD troubleshooting support, regional HIS officer supervision; (5) Data quality incentive programme: facilities maintaining ≥90% completeness during transition periods recognised at quarterly review meetings; (6) DHIS2 validation rules and automated alerts configured to detect completeness drops >5% month-over-month |
| **Risk Owner** | DHDD Data Governance Officer (quality framework); Director, Planning & Information (reporting completeness mandate); Regional HIS Officers (facility-level supervision) |
| **Contingency** | If completeness drops below 85% at >20% of facilities during any transition: pause transition scaling; deploy intensive data quality support (DHDD + regional HIS officers); extend parallel period at affected facilities; conduct root cause analysis (training gap, system usability, connectivity, workload); NDHSC-informed decision on pace adjustment |
| **Monitoring Indicator** | DHIS2 reporting completeness (monthly, target ≥90%); timeliness (target: data submitted within 15 days of reporting period end); facility-level completeness variance (flag facilities dropping >5%); parallel period duration per facility (target: ≤6 months) |
| **Status** | Future — activates with each system transition |

---

**R-12: Cybersecurity Incident — Health Data Breach or Ransomware**

| Attribute | Specification |
|-----------|--------------|
| **ID** | R-12 |
| **Description** | The target architecture concentrates patient-level health data (MPI, EHR, e-NHIS) in interconnected systems for the first time. Currently, the fragmented, paper-based landscape provides "security through obscurity" — no single system holds enough data to be an attractive target. As digital systems scale, the attack surface expands: OpenHIM mediates sensitive integration flows, OpenCR holds patient identities, OpenMRS holds clinical records, and Keycloak manages access credentials. Progressa has no operational CERT, no national cybersecurity legislation enforced, and no health information security capacity within MoH. A ransomware attack or data breach could expose patient records, paralyse clinical operations, and destroy public trust in digital health. |
| **Category** | Technology / Security |
| **Likelihood** | Medium (increasing as systems scale; healthcare is a global ransomware target) |
| **Impact** | Critical (patient data exposure; operational paralysis; trust destruction) |
| **Overall Rating** | **HIGH** |
| **Mitigation** | (1) Health Information Security Officer recruited in Wave 2 (Month 13–18) — dedicated security governance; (2) Keycloak IAM with MFA enforced for all system access from Wave 1 (W1-06); (3) Automated daily backups with offsite storage and monthly restore testing (W1-09); (4) Network segmentation: health systems on isolated VLAN at PDGA DC and G-Cloud; (5) PDGA cybersecurity unit engagement for vulnerability assessment and penetration testing (annual); (6) Four-tier data classification enforced — Restricted Clinical data encrypted at rest and in transit; (7) Security awareness training for all digital health staff (4 hours annually, Section 7.3.7); (8) Incident response plan developed and tested via tabletop exercise (Wave 2); (9) OpenHIM audit logging captures all integration transactions — forensic evidence available; (10) G-Cloud migration provides enterprise-grade security infrastructure |
| **Risk Owner** | DHDD Health Information Security Officer (when recruited; DHDD Chief Director in interim); PDGA DG (national cybersecurity coordination); DHDD Systems Operations Lead (operational security) |
| **Contingency** | If breach occurs: activate incident response plan; isolate affected systems; notify PS MoH and NDHSC within 4 hours; engage PDGA cybersecurity unit; restore from verified clean backup; conduct forensic investigation; notify affected patients if PII exposed (per future data protection legislation or health data governance framework); post-incident review and security hardening |
| **Monitoring Indicator** | Security audit findings (annually — critical findings must be remediated within 30 days); MFA compliance rate (target 100% for all system administrators); backup restore test success rate (monthly — target 100%); security training completion rate (target ≥90% of digital health staff); number of security incidents per quarter (target 0 critical) |
| **Status** | Active — Keycloak deployment initiated (W1-06); security officer recruitment planned (Wave 2) |

---

#### 8.1.1 Risk Register Summary Matrix

| ID | Risk | Category | Likelihood | Impact | Rating | Phase |
|----|------|----------|-----------|--------|--------|-------|
| R-01 | EHSSP funding cliff | Financial | Very High | Critical | **CRITICAL** | Wave 1 |
| R-02 | DHDD recruitment failure | HR/Institutional | High | Critical | **CRITICAL** | Wave 1–2 |
| R-03 | RDIP infrastructure delay | External/Infrastructure | High | High | **HIGH** | Wave 2 |
| R-04 | eCRVS vendor non-cooperation | External/Vendor | High | High | **HIGH** | Wave 1 |
| R-05 | Clinician EHR resistance | Change Management | High | High | **HIGH** | Wave 2 |
| R-06 | Connectivity disruption | Infrastructure | Medium | High | **HIGH** | All waves |
| R-07 | Donor dependency / sustainability | Financial | Medium | Critical | **HIGH** | Wave 2–3 |
| R-08 | NIN production suspension | External/Identity | High | Medium | **HIGH** | Wave 1–2 |
| R-09 | SPT-DHIS2 Tracker transition | Technical/Change | Medium | High | **HIGH** | Wave 1–2 |
| R-10 | Political transition | Political | Medium | Critical | **HIGH** | All waves |
| R-11 | Data quality during transitions | Operational | High | Medium | **HIGH** | Wave 1–2 |
| R-12 | Cybersecurity incident | Technology/Security | Medium | Critical | **HIGH** | Wave 2–3 |

**Risk Profile Summary:**
- 2 Critical risks (R-01, R-02) — require immediate action and active management
- 10 High risks — require mitigation plans and regular monitoring
- 0 Medium or Low risks in the top register — reflecting the high-risk operating environment

---

### 8.2 Risk Response Strategy

#### 8.2.1 Response Classification

Each risk is assigned a primary response strategy using the standard risk management framework:

| Response Type | Definition | Application |
|--------------|-----------|-------------|
| **Avoid** | Eliminate the risk by removing the cause or changing the approach | Used when an alternative approach can eliminate the risk entirely |
| **Mitigate** | Reduce likelihood or impact through proactive actions | Primary strategy for most roadmap risks |
| **Transfer** | Shift risk to a third party (insurance, contract, outsourcing) | Used for vendor and infrastructure risks |
| **Accept** | Acknowledge the risk and prepare contingency plans | Used for low-probability/high-impact or uncontrollable external risks |

#### 8.2.2 Response Assignment by Risk

| Risk ID | Risk | Primary Response | Secondary Response | Rationale |
|---------|------|-----------------|-------------------|-----------|
| R-01 | EHSSP funding cliff | **Mitigate** | Accept (residual) | Cannot avoid EHSSP closure; mitigate through transition planning and successor funding; accept residual risk of short-term service gaps |
| R-02 | DHDD recruitment failure | **Mitigate** | Transfer | Mitigate through salary supplementation and professional development; transfer through TA secondments (WHO, HISP regional node) as bridge |
| R-03 | RDIP infrastructure delay | **Accept** | Mitigate | Cannot control RDIP procurement; accept through interim hosting design; mitigate through 4G connectivity bridge |
| R-04 | eCRVS vendor non-cooperation | **Mitigate** | Transfer | Mitigate through batch fallback and governance escalation; transfer vendor management authority to RDIP/MoDE governance |
| R-05 | Clinician EHR resistance | **Mitigate** | Avoid (partial) | Mitigate through champion model and supervised practice; avoid by limiting initial scope to receptive facilities |
| R-06 | Connectivity disruption | **Mitigate** | Accept | Mitigate through mandatory offline-first design; accept residual disruption risk as inherent to Progressa infrastructure context |
| R-07 | Donor dependency | **Mitigate** | Avoid (long-term) | Mitigate through progressive government absorption; long-term avoidance through financial sustainability model |
| R-08 | NIN production suspension | **Accept** | Mitigate | Accept that NIN resolution is outside MoH mandate; mitigate through probabilistic MPI matching and multi-identifier strategy |
| R-09 | SPT-Tracker transition | **Mitigate** | Avoid (premature retirement) | Mitigate through extended parallel operation and objective quality benchmarks; avoid risk of premature SPT retirement |
| R-10 | Political transition | **Mitigate** | Accept | Mitigate through institutional anchoring and quick wins; accept that political risk is inherent to 8-year programmes |
| R-11 | Data quality transitions | **Mitigate** | Avoid (overload) | Mitigate through staggered transitions and dedicated support; avoid by not overloading facilities with concurrent transitions |
| R-12 | Cybersecurity incident | **Mitigate** | Transfer | Mitigate through security controls (IAM, encryption, backups); transfer specialised security functions to PDGA cybersecurity unit |

#### 8.2.3 Monitoring and Escalation Framework

**Monitoring Cadence:**

| Forum | Frequency | Risk Scope | Action |
|-------|-----------|-----------|--------|
| DHDD operational meeting | Weekly | All operational risks (R-01, R-06, R-11) | Review monitoring indicators; assign corrective actions |
| Implementation & Capacity TWG | Monthly | Adoption and capacity risks (R-02, R-05, R-09, R-11) | Review training progress; facility adoption dashboards; workforce status |
| Architecture & Interoperability TWG | Monthly | Technical risks (R-04, R-06, R-08, R-12) | Review integration flow status; vendor engagement; security audit findings |
| NDHSC | Quarterly | Strategic and critical risks (all risks) | Dashboard review; escalation decisions; budget allocation; governance actions |
| Steering Committee (RDIP/Donor) | Quarterly | External dependency risks (R-01, R-03, R-04, R-07) | RDIP delivery status; funding pipeline; cross-ministry coordination |

**Escalation Triggers:**

Each risk has a defined escalation trigger — a condition that, when met, requires the risk to be escalated to the next governance level. Escalation does not wait for quarterly meetings; the trigger activates immediate escalation through the DHDD → NDHSC Chair → PS MoH chain.

| Risk ID | Escalation Trigger | Escalation To |
|---------|-------------------|---------------|
| R-01 | Any system loses funding coverage with <3 months bridge confirmed | PS MoH → Minister (emergency budget request) |
| R-02 | Core position (Director, HIE Manager, DGO) unfilled after 9 months | PS MoH (Public Service Commission acceleration) |
| R-03 | G-Cloud commissioning date slips beyond end 2028 | NDHSC → DTSC (national escalation to PS MoDE) |
| R-04 | No eCRVS API/batch agreement after 6 months of engagement | NDHSC → PS MoDE (formal government directive) |
| R-05 | EHR adoption <50% at pilot sites after 6 months | NDHSC (pace adjustment decision) |
| R-06 | System availability drops below 95% for any core service for >7 consecutive days | DHDD → PDGA (infrastructure intervention) |
| R-07 | Government budget share falls >10 percentage points below target trajectory | NDHSC → PS MoH → MoF (budget advocacy) |
| R-08 | MPI false positive rate exceeds 5% | DHDD Data Governance Officer → Data Standards TWG (matching rule review) |
| R-09 | DHIS2 Tracker accuracy <90% vs. SPT after 12 months parallel operation | NDHSC (transition timeline extension decision) |
| R-10 | NDHSC fails to meet for 2 consecutive quarters | DHDD Chief Director → PS MoH (governance revitalisation) |
| R-11 | DHIS2 reporting completeness drops below 85% at >20% of facilities | DHDD → NDHSC (transition pace adjustment) |
| R-12 | Any confirmed security breach involving patient PII | DHDD → PS MoH → PDGA (incident response activation) |

#### 8.2.4 Risk Review and Update Cycle

The risk register is a living document. The following update cycle ensures risks are current, mitigations are effective, and new risks are captured:

| Activity | Frequency | Responsible | Output |
|---------|-----------|-------------|--------|
| Risk indicator dashboard update | Monthly | DHDD Project Coordinator | Updated risk dashboard shared with NDHSC |
| Risk mitigation effectiveness review | Quarterly | Implementation & Capacity TWG | Mitigation adjustment recommendations |
| Risk register update (new risks, retired risks, rating changes) | Quarterly | DHDD Project Coordinator (draft); NDHSC (approval) | Updated risk register |
| Comprehensive risk reassessment | Annually | NDHSC (with external review if requested) | Annual risk report; informs next-year work plan |
| Wave transition risk assessment | At each wave transition (end 2026, end 2028) | NDHSC with TA support | Go/no-go risk input for wave transition decision |

---

### 8.3 Section Summary

The capacity building roadmap and risk management framework defined in this section complete the operational support structure for the digital health transformation:

**Capacity Building:**
- ~500 staff to be trained across 3 waves with ~7,000–12,700 person-training-hours
- Total training investment: USD 590,000–1,010,000 (8–12% of technology investment)
- 10 master trainers sustain cascaded training delivery from Wave 2 onwards
- 2–3 MSc Health Informatics graduates by Wave 3 build leadership pipeline
- UoP partnership creates long-term in-country training capacity
- Training covers all 7 major system domains with role-specific curricula and benchmarked durations

**Risk Management:**
- 12 risks identified: 2 Critical, 10 High — reflecting the high-risk environment
- Every risk has specific mitigation actions, a named owner (not "project team"), and a contingency plan
- Escalation triggers are defined and linked to governance forums
- Quarterly risk review cycle embedded in NDHSC governance

The capacity building and risk management functions are not separate workstreams — they are interdependent. The single most effective risk mitigation across the entire register is the successful recruitment and development of the DHDD team (R-02). Conversely, the single largest risk to capacity building is the EHSSP funding cliff (R-01) and donor dependency (R-07). The NDHSC quarterly review cycle provides the governance forum where these interdependencies are managed.

---

## Section 9: Monitoring and Evaluation Framework

*TOGAF ADM Phase G — Implementation Governance (Monitoring Dimension)*

The M&E framework provides the quantitative and qualitative indicators against which the roadmap's progress will be measured across all three transformation waves. Indicators are drawn from the AS-IS baseline established in D5, the target architecture defined in D6, and the initiative-level success criteria specified in Sections 4–8. The framework is designed to be practical for MoH's current capacity, relying wherever possible on data already collected through existing systems (DHIS2, OpenHIM, HR records) rather than creating new reporting burdens.

---

### 9.1 Key Performance Indicators

The following KPI table establishes measurable targets across the full roadmap horizon. Baselines are drawn from validated AS-IS assessment data (D5, 2025). Wave targets are aligned with the initiative-level deliverables and success criteria defined in Sections 4.2 (Wave 1), 4.3 (Wave 2), and 4.4 (Wave 3).

| # | KPI | Metric | Baseline (2025) | Wave 1 Target (End 2026) | Wave 2 Target (End 2029) | Wave 3 Target (2033) | Data Source | Responsible |
|---|-----|--------|-----------------|--------------------------|--------------------------|----------------------|-------------|-------------|
| 1 | EA Maturity Level | NASCIO / PDGA EA Maturity Score (1–5 scale) | 2.19 | 2.5 | 3.0 | 4.0+ | Annual EA maturity assessment (PDGA methodology) | DHDD Architecture & Standards Lead |
| 2 | HIE Integration Flows Live | Count of operational integration flows through OpenHIM | 0 (1 legacy SPT→DHIS2, not HIE-mediated) | 1 (eCRVS→MPI→e-NHIS) | 4–5 (Flows 1–5 operational) | 6 (all priority flows, including ADX international reporting) | OpenHIM transaction dashboard (Prometheus/Grafana) | DHDD Integration Engineer |
| 3 | Digital Clinical Records — Facility Coverage | % of health facilities with operational EHR (structured clinical documentation) | 8% (~7 facilities: NMRI EMRS + a private hospital + pilot sites) | 8% (no EHR deployment in Wave 1; focus on foundations) | 17–22% (15–20 of ~90 facilities with OpenMRS) | 33–44% (30–40 facilities with OpenMRS) | DHDD system deployment register | DHDD Systems Operations Lead |
| 4 | NHIS Beneficiary Enrollment | Active e-NHIS beneficiaries (enrolled and eligible for claims) | 15,000–20,000 (~30% of 60,000 target) | 20,000+ (auto-enrollment from eCRVS flow begins late W1) | 60,000+ (target achieved through auto-enrollment + mobile outreach) | 100,000+ (expanding toward universal coverage) | e-NHIS beneficiary database | NHIA Executive Director |
| 5 | Disease Surveillance — Electronic Case-Based Coverage | % of health facilities submitting electronic case-based IDSR+ notifications | 0% (100% paper-based case notification; ~90% paper clinical registers) | 11–22% (10–20 facilities in DHIS2 Tracker IDSR+ pilot) | 66–88% (60–80 facilities with electronic IDSR+) | 95%+ (all connected facilities; EBS and CBS operational) | DHIS2 Tracker IDSR+ submission records | Director, Public Health |
| 6 | DHIS2 Reporting Timeliness | % of expected monthly facility reports received by the 15th of the following month | Variable (~70–80% estimated; completeness and timeliness documented as gaps in D5) | ≥90% completeness; ≥85% timeliness | ≥95% completeness; ≥90% timeliness | ≥97% completeness; ≥95% timeliness | DHIS2 completeness/timeliness dashboard | Director, Planning & Information |
| 7 | Health ID Coverage (MPI) | Unique patient records in MPI with verified identity linkage | 0 (no MPI exists) | ≥500,000 records (seeded from eCRVS + e-NHIS) | ≥1,500,000 records (growing through system usage and eCRVS flow) | ≥2,000,000 records (approaching full population coverage) | OpenCR MPI analytics | DHDD Data Governance Lead |
| 8 | Digital Health Budget — Government Share | % of total digital health recurrent expenditure funded from Government of Progressa budget (excluding donor/project funding) | ~6% (government contribution minimal; EHSSP, Global Fund, GAVI, WHO fund virtually all digital health operations) | ~10% (DHDD salaries partially government-funded; bridge connectivity costs) | ~25% (DHDD fully funded; G-Cloud hosting costs absorbed; connectivity partially absorbed) | ≥50% (government absorbs majority of recurrent costs; donors fund innovation and expansion only) | MoH budget records; DHDD financial tracking | Director, Finance & Administration |
| 9 | Digital Health Workforce — DHDD Staffing | Number of DHDD positions filled (of 14 target) | 0 (no DHDD exists; 15–22 staff dispersed across HMIS, eCRVS, and programme teams) | ≥6 (Director + 3 technical leads + 2 support) | 14 (full DHDD staffing) | 14+ (full staffing maintained; possible expansion) | Government payroll / DHDD HR records | MoH Permanent Secretary |
| 10 | Integration Maturity Level | Integration maturity score (1–5 scale per Section 5.2 of D6) | 1 (Ad-hoc/Initial: single legacy SPT→DHIS2 flow; no middleware; no API management) | 1.5 (OpenHIM operational; 1 HIE-mediated flow; API governance standards published) | 3.0 (Defined/API-based: 4–5 flows mediated through HIE; FHIR conformance enforced; monitoring operational) | 4.0 (Quantitatively managed: all 6 flows; event-driven architecture; SHR operational; cross-system quality metrics) | DHDD integration maturity self-assessment (annual) | DHDD Architecture & Standards Lead |
| 11 | Facility Connectivity | % of health facilities with reliable broadband or mobile data connectivity (sufficient for real-time data exchange) | ~55% (EHSSP satellite at all facilities, but satellite ending August 2025; reliability variable) | ≥55% (bridge satellite + 4G at 20–30 facilities; zero connectivity loss post-EHSSP) | ≥70% (RDIP broadband connecting 50+ facilities; 4G for remainder) | ≥90% (RDIP broadband + last-mile at most facilities; offline-first ensures 100% operational coverage) | Facility connectivity audit (annual) | DHDD Systems Operations Lead |

**Notes on Baselines and Targets:**

**KPI 1 (EA Maturity):** The 2.19 baseline is from the PDGA EA Maturity Assessment conducted as part of the D5 current state analysis. The Wave 1 target of 2.5 reflects governance establishment and strategy documentation — moving from "Defined" to "Managed" on governance and business architecture dimensions. The Wave 3 target of 4.0+ aligns with the national target of 4.1+ by 2030 referenced in the PDGA EA Framework. The progression requires sustained investment across all architecture domains, not just technology deployment.

**KPI 3 (Digital Clinical Records):** The Wave 1 target remains at 8% because Wave 1 focuses on governance, shared platforms, and foundational registries — EHR deployment begins in Wave 2. This is a deliberate sequencing decision: deploying EHR without an operational MPI and HIE would repeat the siloed deployment pattern. The Wave 3 target of 33–44% reflects the D6 target of 30–40 facilities.

**KPI 4 (NHIS Beneficiaries):** The Wave 1 target of 20,000+ reflects modest growth from the eCRVS→MPI→e-NHIS auto-enrollment flow becoming operational in the second half of Wave 1 (W1-06). Substantial growth occurs in Wave 2 when mobile enrollment and offline claims are deployed (W2-03). The Wave 3 target of 100,000+ extends beyond the current 60,000 target, anticipating benefit package expansion and coverage growth.

**KPI 7 (Health ID / MPI):** Baseline is zero because no MPI currently exists. The Wave 1 target of ≥500,000 reflects bulk seeding from eCRVS (about 1 million registrations) and e-NHIS (15,000–20,000 beneficiaries), with deduplication reducing the raw count. The Wave 3 target of ≥2,000,000 approaches full population coverage for Progressa (~2–3 million), reflecting MPI growth through all clinical and administrative system interactions.

**KPI 8 (Government Budget Share):** The 6% baseline reflects the current near-total donor dependency. The progression to ≥50% by 2033 is consistent with the sustainability transition model in Section 5 and the W3-06 sustainability initiative. This is arguably the most important KPI for long-term sustainability — technical systems are unsustainable without domestic funding absorption.

---

### 9.2 Review Cadence

The M&E framework operates at three distinct review frequencies, each serving a different governance purpose. These review cycles are embedded within the three-tier governance model established in Section 6.

#### 9.2.1 Quarterly NDHSC Review

The National Digital Health Steering Committee conducts quarterly performance reviews of the roadmap using the KPI dashboard. This is the primary governance mechanism for course correction and investment decisions.

**Quarterly review includes:**

The NDHSC reviews a standardised dashboard covering all 11 KPIs, comparing actual progress against quarterly milestones derived from the wave targets. The DHDD prepares a quarterly progress report (maximum 10 pages) containing KPI dashboard with traffic-light status (green for on track or ≥90% of target, amber for 75–90%, red for below 75%), initiative status updates for all active initiatives in the current wave, risk register update with any new or escalated risks, cross-sectoral dependency status (particularly G-Cloud, broadband, eCRVS API), financial summary showing expenditure against budget by funding source, and decision items requiring NDHSC resolution.

The quarterly review cycle follows a fixed schedule: DHDD compiles data in the final week of each quarter, the progress report is circulated to NDHSC members one week before the quarterly meeting, the NDHSC meeting dedicates a standing agenda item (60–90 minutes) to roadmap review, and decisions and action items are documented in NDHSC minutes with named owners and deadlines.

**Wave transition reviews** (end of Wave 1, end of Wave 2) are extended NDHSC sessions that evaluate the go/no-go criteria specified in Section 4.1.5. These are the highest-stakes governance moments in the roadmap, determining whether the foundation is sufficient to proceed to the next phase.

#### 9.2.2 Annual EA Maturity Assessment

A comprehensive EA maturity assessment is conducted annually, using the PDGA EA Maturity Assessment methodology (consistent with the baseline assessment that produced the 2.19 score). The annual assessment provides a formal benchmark of progress across all five EA domains: business architecture, data architecture, application architecture, technology architecture, and integration architecture.

**Annual assessment includes:**

The assessment covers six dimensions of EA maturity: governance and institutional framework, business architecture alignment, data management and standards, application portfolio management, technology infrastructure, and integration and interoperability. Each dimension is scored on the 1–5 scale and compared against the previous year's score, producing a maturity progression trajectory.

The annual assessment is conducted during Q4 of each year, with results available for the Q1 NDHSC meeting of the following year. The assessment is led by the DHDD Architecture & Standards Lead, with validation from an external assessor (PDGA, ITU, or WHO) to ensure objectivity and comparability. The assessment report includes a detailed scorecard, recommendations for the coming year, and alignment check against the D6 target architecture to ensure that implementation remains consistent with the architectural vision.

The first annual assessment (late 2026) establishes the post-Wave 1 baseline and informs the Wave 1→2 transition decision. Subsequent assessments track progression toward the 3.0 (Wave 2) and 4.0+ (Wave 3) targets.

#### 9.2.3 Major Architecture Revision (2–3 Year Cycle)

The D6 target architecture has an 8-year validity period (2025–2033) with biennial review built into its design (Architecture Decision Record DD-12). Every 2–3 years, the NDHSC commissions a comprehensive architecture review that evaluates whether the target architecture remains valid given technology evolution, policy changes, and implementation experience.

**Major revision triggers and scope:**

Scheduled reviews occur at the end of Wave 1 (2026–2027) and the end of Wave 2 (2029–2030). These coincide with wave transition decision points and provide the architectural governance needed to validate that the target remains appropriate before committing to the next wave's investments. Unscheduled reviews may be triggered by significant technology disruptions (e.g., new WHO digital health guidance, major platform shifts), fundamental changes in the funding landscape, cross-sectoral developments that alter assumptions (e.g., national digital ID platform architecture changes, Data Protection Act enactment), or integration maturity advancing faster or slower than planned.

The major revision assesses whether the 12 design decisions (DD-01 through DD-12) remain valid, whether any architectural components require substitution or significant modification, whether the technology stack remains appropriate, and whether the phasing and sequencing assumptions hold.

The major revision is not expected to produce a new architecture from scratch — rather, it updates and refines the existing D6 framework. If fundamental changes are required (e.g., a shift from OpenHIE to a different interoperability paradigm), the NDHSC commissions a targeted architecture study, which may involve external technical assistance.

#### 9.2.4 Review Cadence Summary

| Review Type | Frequency | Led By | Approved By | Key Output |
|-------------|-----------|--------|-------------|------------|
| Quarterly KPI Dashboard Review | Every 3 months | DHDD Director | NDHSC | Progress report; course correction decisions; risk escalation |
| Wave Transition Review | End of each wave (~every 2–3 years) | DHDD Director + external TA | NDHSC (formal go/no-go) | Transition decision; updated risk register; next wave confirmation |
| Annual EA Maturity Assessment | Annually (Q4) | DHDD Architecture Lead + external assessor | NDHSC | Maturity scorecard; year-over-year progression; recommendations |
| Major Architecture Revision | Every 2–3 years (aligned with wave transitions) | DHDD Architecture Lead | NDHSC | Updated D6 target architecture (if needed); ADR revisions; technology stack review |
| TWG Operational Reviews | Monthly | TWG chairs | DHDD Director | Technical recommendations; standards compliance; implementation guidance |

---

## Section 10: Transition Architecture

*TOGAF ADM Phase E — Opportunities and Solutions (Architecture State Definition)*

The transition architecture defines three intermediate architecture states between the current AS-IS baseline and the D6 target. Each state represents a coherent, operational architecture that delivers tangible value — not merely a staging point. The architecture transitions are designed so that each wave's end-state is independently sustainable: if external dependencies delay the next wave, the current architecture continues to function and deliver health outcomes.

---

### 10.1 Intermediate Architecture States

#### 10.1.1 End of Wave 1 (2026): "Governed, Connected, Registered"

The architecture at the end of Wave 1 establishes the institutional and technical foundation for digital health transformation. The primary achievement is that governance structures are operational, shared platform services are deployed, and the first HIE-mediated integration flow demonstrates the hub-and-spoke integration model in production.

**Governance and Business Architecture:**

The three-tier governance model is operational. The NDHSC has been constituted by Ministerial Order, has met at least twice, and has made documented investment decisions. The DHDD is established with 6 staff in post (Director, 3 technical leads, 2 support), providing the institutional home for digital health coordination. At least 2 of 3 Technical Working Groups are meeting regularly. The National Digital Health Strategy 2025–2033 has been endorsed by the Permanent Secretary and shared with development partners. The Health Data Governance Framework is in force through Ministerial Order, with data ownership assigned across 11 domains and at least 2 data sharing agreements executed. The EHSSP digital health transition has been completed with zero system outages attributable to the transition.

**What is operational:**

DHIS2 remains the anchor health information platform, now strengthened with reporting completeness at ≥90%, data quality validation rules, and 5 programme dashboards. DHIS2 Tracker EIR is piloting at 10–15 facilities alongside SPT (parallel operation), and DHIS2 Tracker IDSR+ is piloting electronic case-based surveillance at 10–20 facilities. The eLMIS has been rolled out nationally to ≥85 of ~90 facilities, replacing SMS for Health at covered sites. The OpenHIM HIE core is deployed on interim hosting at PDGA DC (Docker Compose), with the first integration flow operational: eCRVS→OpenCR (MPI)→e-NHIS, enabling automated newborn insurance enrollment at birth registration. OpenCR (MPI) contains ≥500,000 verified patient records, seeded from eCRVS and e-NHIS data. HAPI FHIR Server provides the canonical data store for integration resources. Keycloak provides IAM for the HIE platform. Prometheus/Grafana/Loki provide operational monitoring and alerting.

Facility connectivity has been protected post-EHSSP through bridge satellite funding at ≥50 facilities and 4G mobile data deployment at 20–30 additional facilities. Solar power solutions are operational at 10–15 facilities without reliable electricity. The offline-first design requirement is published and enforced for all new system deployments.

A workforce foundation of 20 facility-level change champions is active, 10 master trainers are ToT-qualified, 3 Regional Health Data Officers are deployed in priority regions, and ≥100 MoH staff have completed digital health orientation.

**What is integrated:**

There is one HIE-mediated integration flow in production: birth registration → MPI (patient identity creation/update) → insurance enrollment (eCRVS→OpenHIM→OpenCR→e-NHIS). The legacy SPT→DHIS2 aggregate immunisation data flow continues independently (not yet HIE-mediated). DHIS2 Facility Registry is exposed as a mCSD FHIR interface for HIE consumption. API governance standards have been published and are enforced for all new integration development.

The integration maturity has advanced from Level 1 (Ad-hoc) to approximately Level 1.5: the HIE exists and processes one mediated flow, but most data exchange remains manual or through legacy point-to-point connections.

**What is NOT yet operational:**

No EHR deployment has occurred — OpenMRS is not yet deployed at any facility. This is by design: the governance, MPI, and HIE prerequisites must be in place before EHR deployment. No Laboratory Information System beyond the existing limited A-LIS pilot. The e-NHIS has not yet been enhanced with offline claims or mobile enrollment (Wave 2 scope). The G-Cloud national data centre is not yet available (external RDIP dependency). Only 1 of 6 priority integration flows is operational through the HIE. No advanced analytics or data warehouse capability exists. No cybersecurity framework beyond basic Keycloak IAM is in place. SNOMED CT is not yet adopted. No cross-border surveillance or event-based surveillance capability exists.

**Architecture State Diagram — End of Wave 1:**

Systems are classified by operational status using a traffic-light scheme:

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    END OF WAVE 1 ARCHITECTURE STATE (2026)                  ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                            ║
║  GOVERNANCE LAYER                                                          ║
║  ┌─────────────────┐ ┌──────────────────────┐ ┌────────────────────────┐   ║
║  │ 🟢 NDHSC        │ │ 🟢 DHDD (6 of 14)    │ │ 🟢 Data Governance     │   ║
║  │ (Operational)   │ │ (Partially staffed)  │ │ Framework (In force)   │   ║
║  └─────────────────┘ └──────────────────────┘ └────────────────────────┘   ║
║                                                                            ║
║  SHARED PLATFORM LAYER (PDGA DC — Docker Compose Interim Hosting)          ║
║  ┌──────────────┐ ┌──────────────┐ ┌──────────┐ ┌──────────────────────┐   ║
║  │ 🟢 OpenHIM   │ │ 🟢 OpenCR    │ │ 🟢 HAPI  │ │ 🟢 Keycloak IAM      │   ║
║  │ (HIE Core)   │ │ (MPI ≥500K) │ │ FHIR R4  │ │ (HIE platform)       │   ║
║  └──────────────┘ └──────────────┘ └──────────┘ └──────────────────────┘   ║
║  ┌──────────────────────────────────┐ ┌────────────────────────────────┐   ║
║  │ 🟢 Prometheus / Grafana / Loki  │ │ 🟡 OCL Terminology (ICD-11,   │   ║
║  │ (Monitoring operational)        │ │ LOINC core loaded)             │   ║
║  └──────────────────────────────────┘ └────────────────────────────────┘   ║
║                                                                            ║
║  APPLICATION LAYER                                                         ║
║  ┌──────────────┐ ┌──────────────┐ ┌──────────┐ ┌──────────────────────┐   ║
║  │ 🟢 DHIS2     │ │ 🟢 eLMIS     │ │ 🟢 eCRVS │ │ 🟢 e-NHIS            │   ║
║  │ Aggregate    │ │ (≥85 sites)  │ │ (CIVIS)  │ │ (basic; ~20K bene.)  │   ║
║  │ ≥90% complt. │ │              │ │          │ │                      │   ║
║  └──────────────┘ └──────────────┘ └──────────┘ └──────────────────────┘   ║
║  ┌──────────────┐ ┌──────────────┐ ┌──────────────────────────────────┐   ║
║  │ 🟡 DHIS2     │ │ 🟡 DHIS2     │ │ 🟢 SPT (maintained;             │   ║
║  │ Tracker EIR  │ │ Tracker IDSR+│ │     parallel with Tracker EIR)  │   ║
║  │ (10–15 pilot)│ │ (10–20 pilot)│ │                                 │   ║
║  └──────────────┘ └──────────────┘ └──────────────────────────────────┘   ║
║  ┌──────────────┐ ┌──────────────┐                                        ║
║  │ ⬜ OpenMRS   │ │ ⬜ LIS       │   ⬜ = Planned (not yet deployed)      ║
║  │ (EHR)       │ │ (scale)      │   🟡 = Pilot / Partial                 ║
║  │ NOT YET     │ │ NOT YET      │   🟢 = Operational                     ║
║  └──────────────┘ └──────────────┘                                        ║
║                                                                            ║
║  INTEGRATION FLOWS                                                         ║
║  ──────────────────────────────────────────────────────────────────         ║
║  🟢 Flow 1: eCRVS → MPI → e-NHIS (birth → insurance enrollment)          ║
║  🟢 Legacy:  SPT → DHIS2 (aggregate immunisation, not HIE-mediated)       ║
║  ⬜ Flow 2: EIR → DHIS2 Aggregate (planned — Wave 2)                      ║
║  ⬜ Flow 3: LIS → IDSR+ Surveillance (planned — Wave 2)                   ║
║  ⬜ Flow 4: EHR → DHIS2 Aggregate (planned — Wave 2)                      ║
║  ⬜ Flow 5: EHR ↔ e-NHIS (planned — Wave 2)                               ║
║  ⬜ Flow 6: DHIS2 → WHO/RHO ADX (planned — Wave 2)                        ║
║                                                                            ║
║  INFRASTRUCTURE                                                            ║
║  ┌────────────────────────────────┐ ┌──────────────────────────────────┐   ║
║  │ 🟢 PDGA DC Interim Hosting    │ │ 🟡 Facility Connectivity         │   ║
║  │ (Docker Compose; ≥99.5% SLA)  │ │ (~55%: satellite bridge + 4G)   │   ║
║  └────────────────────────────────┘ └──────────────────────────────────┘   ║
║  ┌────────────────────────────────┐                                        ║
║  │ ⬜ G-Cloud (awaiting RDIP)    │                                        ║
║  └────────────────────────────────┘                                        ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

#### 10.1.2 End of Wave 2 (2029): "Digitised, Integrated, Scaled"

The architecture at the end of Wave 2 represents a fundamental transformation from the Wave 1 foundation-building state to a functioning digital health ecosystem. The primary achievements are that clinical systems are deployed at scale, multiple integration flows are processing thousands of daily transactions through the HIE, and all central systems are hosted on sovereign infrastructure.

**Governance and Business Architecture:**

The three-tier governance model is mature. The NDHSC has been operating for 3+ years with quarterly meetings and documented investment decisions. The DHDD is at full staffing (14 positions) and has established itself as the authoritative coordination body for digital health. All 3 TWGs are active. The investment decision flow has been applied to all digital health procurements since 2026. The Digital Health Strategy has been updated based on the first major architecture revision (2027). Seven Regional Health Data Officers are deployed across all regions, providing sub-national governance reach.

**What is operational:**

All Wave 1 systems continue in production with enhanced maturity. DHIS2 reporting completeness and timeliness have reached ≥95%. DHIS2 Tracker EIR has scaled from the 10–15 facility pilot to 50+ facilities across 4+ regions, with data accuracy matching SPT's ≥99% benchmark. SPT is maintained only at facilities without adequate connectivity. Electronic IDSR+ has expanded from the Wave 1 pilot to 60–80 facilities, with case-based notification for ≥10 priority conditions and automated alerts. An Event-Based Surveillance pilot is operational at 5–10 high-risk sites.

OpenMRS (EHR) has been deployed at 15–20 facilities, starting with a pilot at 3–5 facilities for maternal health and HIV/ART and then scaling to urban/peri-urban hospitals and e-NHIS-contracted sites. Clinician adoption at pilot sites exceeds 80%. Local facility servers with offline sync capability ensure operations continue during connectivity interruptions.

A standardised Laboratory Information System (selected from A-LIS or OpenELIS assessment) is deployed at the National Public Health Laboratory and 3 regional hospital laboratories, with LOINC coding applied to ≥200 priority tests. Instrument interfacing is operational at the national reference lab. LIS→IDSR+ automated notifications for notifiable conditions are flowing.

The e-NHIS has been enhanced with offline claims processing (PWA), mobile enrollment capability, and FHIR-based eligibility/claims APIs integrated with EHR sites. Beneficiary enrollment exceeds 60,000 — achieving the original target through a combination of eCRVS auto-enrollment and mobile outreach campaigns. The system is hosted on G-Cloud.

The MPI has grown to ≥1,500,000 records through ongoing eCRVS data ingestion, clinical system registrations, and insurance enrollment. Probabilistic matching has been tuned through 3+ years of operation, reducing false positive rates.

All central MoH systems have been migrated from PDGA DC to the G-Cloud Kubernetes platform, providing sovereign hosting, high availability, automated scaling, and disaster recovery. An automated CI/CD pipeline enables DHDD-managed application deployment. The PDGA DC interim hosting has been decommissioned.

Keycloak MFA is enforced across all MoH health information systems. SSO integrates all systems (OpenHIM, DHIS2, OpenMRS, e-NHIS, eLMIS, LIS). A cybersecurity incident response plan has been tested. Annual DR exercises validate recovery within the 8-hour RTO / 24-hour RPO targets. Vulnerability scanning runs quarterly with remediation tracking.

Progressa Health FHIR Implementation Guide v1.0 has been published, with 10–15 resource profiles enforced for all HIE integration. SNOMED CT is loaded in OCL alongside ICD-11 and LOINC. Cross-system data quality monitoring through the HIE shows ≥85% conformance.

The digital health workforce includes 14 DHDD staff, 7 Regional Health Data Officers, 40 facility change champions, 300+ facility staff trained on deployed systems, and a CPD programme with an e-learning platform offering ≥5 courses. A UoP health informatics module is under development.

Facility connectivity has improved to ≥70% through RDIP broadband at 50+ facilities, supplemented by 4G for facilities outside broadband reach.

**What is integrated:**

Four to five of the six priority integration flows are operational through the HIE:

Flow 1 (eCRVS→MPI→e-NHIS) has been operational since Wave 1 and is now processing at production volumes with near-zero error rates. Flow 2 (EIR→DHIS2 Aggregate) is operational through native DHIS2 programme-to-aggregate reporting, automatically computing immunisation coverage indicators from case-level Tracker data. Flow 3 (LIS→IDSR+ Surveillance) is operational through a FHIR DiagnosticReport mediator, with notifiable condition results from the LIS automatically triggering IDSR+ case notifications. Flow 4 (EHR→DHIS2 Aggregate) is operational through a FHIR MeasureReport mediator, with OpenMRS generating aggregate programme indicators for maternal health and HIV/ART. Flow 5 (EHR↔e-NHIS eligibility/claims) is operational as a bidirectional FHIR-mediated flow, enabling insurance eligibility verification at the point of care and digital claims submission from EHR facilities.

Flow 6 (DHIS2→WHO/RHO ADX international reporting) may be partially operational for a subset of indicator sets, with full automation targeted for Wave 3.

Integration maturity has advanced to Level 3 (Defined, API-based): all inter-system flows are mediated through the HIE, FHIR R4 is enforced as the canonical format, and transaction monitoring provides real-time visibility into integration health. The HIE processes 5,000–20,000 messages per day.

**What is NOT yet operational:**

EHR coverage remains at 15–20 of ~90 facilities (17–22%) — the Wave 3 target of 30–40 facilities requires continued expansion. SPT has not been retired and continues operating at facilities without adequate connectivity for DHIS2 Tracker EIR. Full integration maturity Level 4 (event-driven) has not been achieved — the architecture is still primarily request-response. No health data warehouse or cross-system analytics beyond DHIS2 dashboards exists (Wave 3 scope). Cross-border surveillance with neighbouring countries is not yet operational. Community-based digital health services have not been deployed. Government budget share of digital health recurrent costs is at approximately 25%, well below the 50% sustainability target.

**Architecture State Diagram — End of Wave 2:**

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    END OF WAVE 2 ARCHITECTURE STATE (2029)                  ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                            ║
║  GOVERNANCE LAYER                                                          ║
║  ┌─────────────────┐ ┌──────────────────────┐ ┌────────────────────────┐   ║
║  │ 🟢 NDHSC        │ │ 🟢 DHDD (14 of 14)   │ │ 🟢 Data Governance     │   ║
║  │ (Mature, 3+ yr) │ │ (Fully staffed)      │ │ Framework (Enforced)   │   ║
║  └─────────────────┘ └──────────────────────┘ └────────────────────────┘   ║
║  ┌──────────────────────────────┐ ┌────────────────────────────────────┐   ║
║  │ 🟢 3 TWGs Active            │ │ 🟢 7 Regional Health Data Officers │   ║
║  └──────────────────────────────┘ └────────────────────────────────────┘   ║
║                                                                            ║
║  SHARED PLATFORM LAYER (G-Cloud — Kubernetes Sovereign Hosting)            ║
║  ┌──────────────┐ ┌──────────────┐ ┌──────────┐ ┌──────────────────────┐   ║
║  │ 🟢 OpenHIM   │ │ 🟢 OpenCR    │ │ 🟢 HAPI  │ │ 🟢 Keycloak IAM +    │   ║
║  │ (HIE 4–5     │ │ (MPI ≥1.5M) │ │ FHIR R4  │ │ SSO + MFA (100%)     │   ║
║  │  flows live) │ │              │ │          │ │                      │   ║
║  └──────────────┘ └──────────────┘ └──────────┘ └──────────────────────┘   ║
║  ┌──────────────────────────────────┐ ┌────────────────────────────────┐   ║
║  │ 🟢 Prometheus / Grafana / Loki  │ │ 🟢 OCL Terminology (ICD-11 +  │   ║
║  │ + CI/CD Pipeline               │ │ LOINC + SNOMED CT; ≥500 maps)  │   ║
║  └──────────────────────────────────┘ └────────────────────────────────┘   ║
║  ┌────────────────────────────────────────────────────────────────────┐    ║
║  │ 🟢 Progressa Health FHIR IG v1.0 (10–15 profiles, enforced)      │    ║
║  └────────────────────────────────────────────────────────────────────┘    ║
║                                                                            ║
║  APPLICATION LAYER                                                         ║
║  ┌──────────────┐ ┌──────────────┐ ┌──────────┐ ┌──────────────────────┐   ║
║  │ 🟢 DHIS2     │ │ 🟢 eLMIS     │ │ 🟢 eCRVS │ │ 🟢 e-NHIS            │   ║
║  │ Aggregate    │ │ (~90 sites)  │ │ (CIVIS)  │ │ (60K+ bene.; mobile  │   ║
║  │ ≥95% complt. │ │              │ │          │ │  enroll; offline PWA) │   ║
║  └──────────────┘ └──────────────┘ └──────────┘ └──────────────────────┘   ║
║  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌────────────────┐    ║
║  │ 🟢 DHIS2     │ │ 🟢 DHIS2     │ │ 🟢 OpenMRS   │ │ 🟢 LIS         │    ║
║  │ Tracker EIR  │ │ Tracker IDSR+│ │ (EHR, 15–20  │ │ (NRL + 3 reg.  │    ║
║  │ (≥50 sites)  │ │ (60–80 sites)│ │  facilities)  │ │  hospitals)    │    ║
║  └──────────────┘ └──────────────┘ └──────────────┘ └────────────────┘    ║
║  ┌──────────────┐                                                         ║
║  │ 🟡 SPT       │   🟡 = Maintained at low-connectivity sites only        ║
║  │ (residual)   │   ⬜ = Planned (not yet deployed)                       ║
║  └──────────────┘                                                         ║
║  ┌──────────────┐ ┌──────────────┐                                        ║
║  │ 🟡 EBS Pilot │ │ ⬜ Health    │                                        ║
║  │ (5–10 sites) │ │ Data W'house │                                        ║
║  └──────────────┘ └──────────────┘                                        ║
║                                                                            ║
║  INTEGRATION FLOWS                                                         ║
║  ──────────────────────────────────────────────────────────────────         ║
║  🟢 Flow 1: eCRVS → MPI → e-NHIS (production maturity)                   ║
║  🟢 Flow 2: EIR → DHIS2 Aggregate (programme-to-aggregate)               ║
║  🟢 Flow 3: LIS → IDSR+ (FHIR DiagnosticReport notifications)            ║
║  🟢 Flow 4: EHR → DHIS2 Aggregate (FHIR MeasureReport)                   ║
║  🟢 Flow 5: EHR ↔ e-NHIS (bidirectional eligibility/claims)              ║
║  🟡 Flow 6: DHIS2 → WHO/RHO ADX (partially automated)                    ║
║  🟢 Legacy:  SPT → DHIS2 (maintained at SPT-only facilities)             ║
║                                                                            ║
║  INFRASTRUCTURE                                                            ║
║  ┌────────────────────────────────┐ ┌──────────────────────────────────┐   ║
║  │ 🟢 G-Cloud (Kubernetes)       │ │ 🟢 Facility Connectivity         │   ║
║  │ All central systems migrated  │ │ (~70%: RDIP broadband + 4G)     │   ║
║  │ ≥99.9% availability          │ │                                  │   ║
║  └────────────────────────────────┘ └──────────────────────────────────┘   ║
║  ┌────────────────────────────────┐ ┌──────────────────────────────────┐   ║
║  │ 🟢 Cybersecurity Framework    │ │ 🟢 Disaster Recovery             │   ║
║  │ MFA + SSO + vuln scanning     │ │ Annual DR exercise; RTO 8hr     │   ║
║  └────────────────────────────────┘ └──────────────────────────────────┘   ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

#### 10.1.3 End of Wave 3 (2033): "D6 Target Architecture Substantially Realised"

The architecture at the end of Wave 3 represents the substantial realisation of the D6 target state. The emphasis shifts from system deployment to optimisation, sustainability, and innovation. The architecture is characterised by full integration maturity, advanced analytics capability, cross-border interoperability, and — critically — domestic financial sustainability.

**Governance and Business Architecture:**

The governance model has matured into a self-sustaining institution. The NDHSC has been operating for 7+ years with established decision-making patterns and institutional memory. The DHDD is fully staffed and funded primarily from government budget. The investment decision flow is embedded in MoH institutional practice. The Digital Health Strategy has been through two major revisions (2027 and 2030), adapting to technology evolution and implementation experience. The data governance framework has been aligned with the enacted Data Protection Act (anticipated by Wave 3). Government budget absorbs ≥50% of digital health recurrent costs, with donor funding redirected from operations to innovation and expansion.

**What is operational:**

The full D6 application portfolio is substantially operational. DHIS2 aggregate HMIS operates at ≥97% completeness and ≥95% timeliness across all facilities. DHIS2 Tracker EIR has replaced SPT nationally: SPT has been fully retired after a collaborative transition with Vaxa, with historical data migrated and archived. Electronic IDSR+ operates at ≥95% of connected facilities, with case-based notification, automated alerts, and response tracking for all priority conditions. Event-based surveillance is operational nationally, with community-based surveillance deployed through CHW mobile tools at community level.

OpenMRS (EHR) is deployed at 30–40 facilities covering all regional hospitals, major health centres, and teaching hospitals, with clinical modules spanning maternal health, HIV/ART, general outpatient, NCD management, and pharmacy. Structured clinical data is available for approximately 60% of hospital encounters nationally. The eLMIS operates at full facility coverage with SMS for Health fully decommissioned. The LIS is operational at the national reference lab and 5+ regional hospitals.

The e-NHIS has expanded beyond the 60,000 target to 100,000+ beneficiaries, with mobile enrollment, offline claims, and real-time EHR integration at all EHR-equipped facilities. The system is fully hosted on G-Cloud.

The MPI has grown to ≥2,000,000 records, approaching full population coverage for Progressa. If the national digital ID platform has been delivered by RDIP, deterministic matching rates have increased substantially from the Wave 1 baseline of ~50%.

A health data warehouse (PostgreSQL/Apache Superset or similar) aggregates data from DHIS2, OpenMRS, e-NHIS, LIS, and eLMIS through the HIE, enabling advanced analytics including disease burden modelling, resource allocation optimisation, quality-of-care indicators, and predictive outbreak detection.

Community-based digital health services extend the architecture's reach beyond facilities to community health workers, with mobile tools for data collection, referral management, and patient follow-up integrated with the national HIE.

**What is integrated:**

All six priority integration flows are operational at production maturity through the HIE. Integration maturity has advanced to Level 4 (Quantitatively Managed, event-driven). The architecture has transitioned from the request-response pattern of Wave 2 to an event-driven publish/subscribe model, enabling real-time clinical event notifications. A Shared Health Record (SHR) capability provides longitudinal patient summaries across systems.

The HIE processes 50,000–100,000+ messages per day with >99% message delivery reliability. Cross-system data quality exceeds 90% conformance, enforced through business rules in the OpenHIM and validated through the FHIR conformance testing programme.

ADX-based automated reporting to WHO, RHO, and Africa CDC is fully operational. Cross-border disease surveillance with neighbouring countries is operational under a bilateral health data sharing agreement, with electronic case notification for priority conditions. IHR 2005 compliance for electronic surveillance notification is achieved.

**What has been retired:**

SPT has been fully retired, with all immunisation data consolidated in DHIS2 Tracker EIR. SMS for Health has been fully retired, with all supply chain data in eLMIS. Paper-based IDSR case notification has been replaced by electronic case-based surveillance. Paper-based clinical registers are no longer the primary record at EHR-equipped facilities (though paper backup may be maintained as policy requires).

**Architecture Convergence with D6 Target:**

The end-of-Wave 3 architecture substantially realises the D6 target state defined in Sections 3–7 of D6. Key convergence points include the OpenHIE architecture operational with hub-and-spoke HIE (DD-01), FHIR R4 as the canonical integration standard enforced across all systems (DD-02), eCRVS NIN anchoring the MPI for patient identity resolution (DD-03), EHR at 30–40 facilities with vertical-then-horizontal clinical module expansion (DD-04), SPT fully retired and replaced by DHIS2 Tracker EIR (DD-05), electronic case-based IDSR+ as the national surveillance platform (DD-06), e-NHIS scaled to 100,000+ beneficiaries with mobile/offline capability (DD-07), LIS operational with LOINC coding and FHIR interfaces (DD-08), eLMIS at full facility coverage (DD-09), phased terminology standards adopted — ICD-11, LOINC, and SNOMED CT GPS (DD-10), sovereign hosting on G-Cloud for all identifiable data (DD-11), and the architecture has undergone two biennial reviews as prescribed (DD-12).

Areas where full convergence may require additional effort beyond 2033 include achieving 100% EHR facility coverage (D6 describes 30–40 as the target, but universal coverage may be a longer-term aspiration), completing NID unification (dependent on national digital ID platform delivery), and achieving government budget share well above 50% (full sustainability may require a longer transition, particularly if economic conditions constrain budget growth).

**Architecture State Diagram — End of Wave 3:**

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              END OF WAVE 3 ARCHITECTURE STATE (2033)                       ║
║              "D6 Target Architecture Substantially Realised"               ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                            ║
║  GOVERNANCE LAYER                                                          ║
║  ┌─────────────────┐ ┌──────────────────────┐ ┌────────────────────────┐   ║
║  │ 🟢 NDHSC        │ │ 🟢 DHDD (14+)        │ │ 🟢 Data Governance +   │   ║
║  │ (Institutional) │ │ (Gov't-funded)       │ │ Data Protection Act    │   ║
║  └─────────────────┘ └──────────────────────┘ └────────────────────────┘   ║
║  ┌──────────────────────────────┐ ┌────────────────────────────────────┐   ║
║  │ 🟢 3 TWGs (Institutionalised)│ │ 🟢 7 RHDOs (Gov't payroll)       │   ║
║  └──────────────────────────────┘ └────────────────────────────────────┘   ║
║                                                                            ║
║  SHARED PLATFORM LAYER (G-Cloud — Kubernetes, HA, Auto-Scaling)            ║
║  ┌──────────────┐ ┌──────────────┐ ┌──────────┐ ┌──────────────────────┐   ║
║  │ 🟢 OpenHIM   │ │ 🟢 OpenCR    │ │ 🟢 HAPI  │ │ 🟢 Keycloak IAM +    │   ║
║  │ (HIE 6 flows │ │ (MPI ≥2.0M) │ │ FHIR R4  │ │ SSO + MFA (100%) +   │   ║
║  │  + event-    │ │              │ │ + SHR    │ │ Cybersec framework    │   ║
║  │  driven)     │ │              │ │          │ │                      │   ║
║  └──────────────┘ └──────────────┘ └──────────┘ └──────────────────────┘   ║
║  ┌──────────────────────────────────┐ ┌────────────────────────────────┐   ║
║  │ 🟢 Full DevOps / CI/CD / DR     │ │ 🟢 OCL (ICD-11 + LOINC +      │   ║
║  │ RTO 8hr / RPO 24hr validated    │ │ SNOMED CT GPS + ATC)           │   ║
║  └──────────────────────────────────┘ └────────────────────────────────┘   ║
║  ┌────────────────────────────────────────────────────────────────────┐    ║
║  │ 🟢 Progressa Health FHIR IG v2.0 (updated through architecture rev) │ ║
║  └────────────────────────────────────────────────────────────────────┘    ║
║                                                                            ║
║  APPLICATION LAYER (All Systems Operational)                               ║
║  ┌──────────────┐ ┌──────────────┐ ┌──────────┐ ┌──────────────────────┐   ║
║  │ 🟢 DHIS2     │ │ 🟢 eLMIS     │ │ 🟢 eCRVS │ │ 🟢 e-NHIS            │   ║
║  │ Aggregate    │ │ (Full fac.   │ │ (CIVIS)  │ │ (100K+ bene.;        │   ║
║  │ ≥97% complt. │ │  coverage)   │ │          │ │  mobile+offline+EHR) │   ║
║  └──────────────┘ └──────────────┘ └──────────┘ └──────────────────────┘   ║
║  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌────────────────┐    ║
║  │ 🟢 DHIS2     │ │ 🟢 DHIS2     │ │ 🟢 OpenMRS   │ │ 🟢 LIS         │    ║
║  │ Tracker EIR  │ │ Tracker IDSR+│ │ (EHR, 30–40  │ │ (NRL + 5 reg.  │    ║
║  │ (National)   │ │ (≥95% fac.)  │ │  facilities)  │ │  hospitals)    │    ║
║  └──────────────┘ └──────────────┘ └──────────────┘ └────────────────┘    ║
║  ┌──────────────┐ ┌──────────────┐ ┌──────────────────────────────────┐   ║
║  │ 🟢 EBS       │ │ 🟢 CBS       │ │ 🟢 Health Data Warehouse         │   ║
║  │ (National)   │ │ (CHW mobile) │ │ (PostgreSQL/Superset; cross-sys) │   ║
║  └──────────────┘ └──────────────┘ └──────────────────────────────────┘   ║
║  ┌──────────────┐                                                         ║
║  │ ❌ SPT       │   ❌ = Retired                                          ║
║  │ (RETIRED)    │   🟢 = Operational at production maturity               ║
║  └──────────────┘                                                         ║
║                                                                            ║
║  INTEGRATION FLOWS (All 6 at Production Maturity)                          ║
║  ──────────────────────────────────────────────────────────────────         ║
║  🟢 Flow 1: eCRVS → MPI → e-NHIS (production; event-driven)              ║
║  🟢 Flow 2: EIR → DHIS2 Aggregate (automated programme-to-aggregate)     ║
║  🟢 Flow 3: LIS → IDSR+ Surveillance (FHIR notifications)               ║
║  🟢 Flow 4: EHR → DHIS2 Aggregate (FHIR MeasureReport)                   ║
║  🟢 Flow 5: EHR ↔ e-NHIS (bidirectional; real-time)                      ║
║  🟢 Flow 6: DHIS2 → WHO/RHO ADX (automated international reporting)      ║
║  🟢 Cross-border: Progressa ↔ neighbours (disease surveillance exchange)  ║
║                                                                            ║
║  INFRASTRUCTURE                                                            ║
║  ┌────────────────────────────────┐ ┌──────────────────────────────────┐   ║
║  │ 🟢 G-Cloud (Kubernetes, HA)   │ │ 🟢 Facility Connectivity         │   ║
║  │ ≥99.9% avail.; DR validated   │ │ ≥90% broadband; 100% offline-ok │   ║
║  └────────────────────────────────┘ └──────────────────────────────────┘   ║
║                                                                            ║
║  SUSTAINABILITY                                                            ║
║  ┌──────────────────────────────────────────────────────────────────────┐  ║
║  │ 🟢 Government budget absorbs ≥50% of recurrent costs                │  ║
║  │ 🟢 DHDD salaries + RHDOs on government payroll                      │  ║
║  │ 🟢 G-Cloud hosting + connectivity funded domestically               │  ║
║  │ 🟢 Donor funding = innovation, expansion, capital investment only   │  ║
║  └──────────────────────────────────────────────────────────────────────┘  ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

### 10.2 Architecture Transition Diagrams

This section provides a consolidated view of the architecture transition, describing the system and integration landscape at each intermediate state. The diagrams use a consistent colour scheme to indicate system maturity and integration flow status across the three wave endpoints.

#### 10.2.1 System Status Transition Matrix

The following matrix tracks every major system component across the three architecture states. Each cell indicates the component's status using a four-level classification.

**Status Legend:**

| Symbol | Status | Definition |
|--------|--------|------------|
| ⬜ PLANNED | Not yet deployed | Component is in the roadmap but no implementation work has begun for this specific component |
| 🟡 PILOT | Pilot / partial | Component is deployed at a limited number of sites or with limited functionality; evaluation in progress |
| 🟢 OPERATIONAL | Full production | Component is deployed at target scale and is fully functional; operational support in place |
| ❌ RETIRED | Decommissioned | Component has been replaced by its successor and is no longer operational |

**System Status by Architecture State:**

| Component | Domain | AS-IS (2025) | End Wave 1 (2026) | End Wave 2 (2029) | End Wave 3 (2033) |
|-----------|--------|-------------|-------------------|-------------------|-------------------|
| **GOVERNANCE** | | | | | |
| NDHSC | GOV | ⬜ PLANNED | 🟢 OPERATIONAL | 🟢 OPERATIONAL | 🟢 OPERATIONAL |
| DHDD | GOV | ⬜ PLANNED | 🟡 PILOT (6/14) | 🟢 OPERATIONAL (14/14) | 🟢 OPERATIONAL (14+) |
| Data Governance Framework | GOV | ⬜ PLANNED | 🟢 OPERATIONAL | 🟢 OPERATIONAL | 🟢 OPERATIONAL |
| Digital Health Strategy | GOV | ⬜ PLANNED | 🟢 OPERATIONAL | 🟢 OPERATIONAL (rev. 1) | 🟢 OPERATIONAL (rev. 2) |
| **SHARED PLATFORMS** | | | | | |
| OpenHIM (HIE) | INT | ⬜ PLANNED | 🟢 OPERATIONAL | 🟢 OPERATIONAL | 🟢 OPERATIONAL |
| OpenCR (MPI) | DAT | ⬜ PLANNED | 🟢 OPERATIONAL (≥500K) | 🟢 OPERATIONAL (≥1.5M) | 🟢 OPERATIONAL (≥2.0M) |
| HAPI FHIR Server | DAT | ⬜ PLANNED | 🟢 OPERATIONAL | 🟢 OPERATIONAL | 🟢 OPERATIONAL + SHR |
| Keycloak IAM | TEC | ⬜ PLANNED | 🟢 OPERATIONAL (HIE) | 🟢 OPERATIONAL (SSO + MFA all) | 🟢 OPERATIONAL |
| OCL Terminology | DAT | ⬜ PLANNED | 🟡 PILOT (ICD-11/LOINC) | 🟢 OPERATIONAL (+SNOMED CT) | 🟢 OPERATIONAL (+ATC) |
| FHIR IG (Progressa) | DAT | ⬜ PLANNED | ⬜ PLANNED | 🟢 OPERATIONAL (v1.0) | 🟢 OPERATIONAL (v2.0) |
| **CLINICAL SYSTEMS** | | | | | |
| DHIS2 Aggregate | APP | 🟢 OPERATIONAL | 🟢 OPERATIONAL (≥90%) | 🟢 OPERATIONAL (≥95%) | 🟢 OPERATIONAL (≥97%) |
| DHIS2 Tracker EIR | APP | ⬜ PLANNED | 🟡 PILOT (10–15 fac.) | 🟢 OPERATIONAL (≥50 fac.) | 🟢 OPERATIONAL (National) |
| SPT | APP | 🟢 OPERATIONAL (~90 fac.) | 🟢 OPERATIONAL (parallel) | 🟡 PILOT (residual only) | ❌ RETIRED |
| DHIS2 Tracker IDSR+ | APP | ⬜ PLANNED | 🟡 PILOT (10–20 fac.) | 🟢 OPERATIONAL (60–80 fac.) | 🟢 OPERATIONAL (≥95%) |
| OpenMRS (EHR) | APP | ⬜ PLANNED | ⬜ PLANNED | 🟢 OPERATIONAL (15–20 fac.) | 🟢 OPERATIONAL (30–40 fac.) |
| LIS | APP | 🟡 PILOT (A-LIS limited) | 🟡 PILOT (unchanged) | 🟢 OPERATIONAL (NRL + 3 reg.) | 🟢 OPERATIONAL (NRL + 5 reg.) |
| **ADMIN SYSTEMS** | | | | | |
| e-NHIS | APP | 🟢 OPERATIONAL (15–20K) | 🟢 OPERATIONAL (~20K) | 🟢 OPERATIONAL (60K+) | 🟢 OPERATIONAL (100K+) |
| eCRVS / CIVIS | APP | 🟢 OPERATIONAL (~1M) | 🟢 OPERATIONAL | 🟢 OPERATIONAL | 🟢 OPERATIONAL |
| eLMIS | APP | 🟡 PILOT (~50 fac.) | 🟢 OPERATIONAL (≥85 fac.) | 🟢 OPERATIONAL (~90 fac.) | 🟢 OPERATIONAL (full) |
| SMS for Health | APP | 🟢 OPERATIONAL (50 sites) | 🟡 PILOT (residual) | ❌ RETIRED | ❌ RETIRED |
| **SURVEILLANCE** | | | | | |
| EBS | APP | ⬜ PLANNED | ⬜ PLANNED | 🟡 PILOT (5–10 sites) | 🟢 OPERATIONAL (National) |
| CBS (CHW mobile) | APP | ⬜ PLANNED | ⬜ PLANNED | ⬜ PLANNED | 🟢 OPERATIONAL |
| **ANALYTICS** | | | | | |
| Health Data Warehouse | DAT | ⬜ PLANNED | ⬜ PLANNED | ⬜ PLANNED | 🟢 OPERATIONAL |
| Cross-system Analytics | DAT | ⬜ PLANNED | ⬜ PLANNED | ⬜ PLANNED | 🟢 OPERATIONAL |
| **INFRASTRUCTURE** | | | | | |
| PDGA DC (Interim) | TEC | ⬜ PLANNED | 🟢 OPERATIONAL | ❌ RETIRED | ❌ RETIRED |
| G-Cloud (Kubernetes) | TEC | ⬜ PLANNED | ⬜ PLANNED | 🟢 OPERATIONAL | 🟢 OPERATIONAL |
| Monitoring (Prom/Graf) | TEC | ⬜ PLANNED | 🟢 OPERATIONAL | 🟢 OPERATIONAL | 🟢 OPERATIONAL |
| DR Capability | TEC | ⬜ PLANNED | 🟡 PILOT (backup only) | 🟢 OPERATIONAL (validated) | 🟢 OPERATIONAL |
| Cybersecurity Framework | TEC | ⬜ PLANNED | 🟡 PILOT (Keycloak only) | 🟢 OPERATIONAL (full) | 🟢 OPERATIONAL |

#### 10.2.2 Integration Flow Transition Matrix

The following matrix tracks the activation status of the six priority integration flows across architecture states.

| Integration Flow | AS-IS (2025) | End Wave 1 (2026) | End Wave 2 (2029) | End Wave 3 (2033) |
|-----------------|-------------|-------------------|-------------------|-------------------|
| **Flow 1:** eCRVS → MPI → e-NHIS | ⬜ (planned, not delivered) | 🟢 Live (batch or API) | 🟢 Production maturity | 🟢 Event-driven |
| **Flow 2:** EIR → DHIS2 Aggregate | ⬜ (manual aggregation) | ⬜ (EIR in pilot only) | 🟢 Automated (programme-to-aggregate) | 🟢 Event-driven |
| **Flow 3:** LIS → IDSR+ Surveillance | ⬜ (manual; paper lab results) | ⬜ (LIS pilot limited) | 🟢 FHIR DiagnosticReport | 🟢 Event-driven |
| **Flow 4:** EHR → DHIS2 Aggregate | ⬜ (no EHR in public sector) | ⬜ (no EHR deployed) | 🟢 FHIR MeasureReport | 🟢 Event-driven |
| **Flow 5:** EHR ↔ e-NHIS | ⬜ (no EHR; manual claims) | ⬜ (no EHR deployed) | 🟢 Bidirectional FHIR | 🟢 Real-time event-driven |
| **Flow 6:** DHIS2 → WHO/RHO ADX | ⬜ (manual reporting) | ⬜ (not yet configured) | 🟡 Partially automated | 🟢 Fully automated |
| **Legacy:** SPT → DHIS2 | 🟢 (sole automated flow) | 🟢 Maintained | 🟡 (residual at low-connectivity sites) | ❌ Retired with SPT |
| **Cross-border:** Progressa ↔ neighbouring countries | ⬜ (no electronic exchange) | ⬜ (not in Wave 1 scope) | ⬜ (not in Wave 2 scope) | 🟢 Operational |

**Integration Volume Progression:**

| Metric | AS-IS (2025) | End Wave 1 (2026) | End Wave 2 (2029) | End Wave 3 (2033) |
|--------|-------------|-------------------|-------------------|-------------------|
| Daily HIE transactions | 0 | 100–500 | 5,000–20,000 | 50,000–100,000+ |
| Integration maturity level | 1.0 (Ad-hoc) | 1.5 (Initial/Managed) | 3.0 (Defined/API-based) | 4.0 (Quantitatively managed) |
| Integration pattern | None (manual) | Batch + first API | API mediated (request-response) | Event-driven (pub/sub) |
| Systems connected to HIE | 0 | 3 (eCRVS, MPI, e-NHIS) | 8+ (all core systems) | 10+ (including analytics, cross-border) |

#### 10.2.3 Infrastructure Transition

The infrastructure transition follows a three-phase path from fragmented hosting to sovereign cloud.

**Phase 1 (2025–2026): Interim Consolidation**

The starting point is highly fragmented: DHIS2 is hosted by the HMIS team (likely ProgTel), eCRVS by Civitas Group externally, e-NHIS on an external cloud provider, SPT on Vaxa cloud, and A-LIS on local servers. There is no central hosting platform, no containerisation, no integration middleware, and no unified monitoring.

Wave 1 consolidates new shared services (OpenHIM, OpenCR, HAPI FHIR, Keycloak, monitoring) on 2 physical servers at PDGA DC, deployed as Docker Compose stacks. Existing systems remain on their current hosting. All new components are containerised from day one, ensuring G-Cloud readiness. Automated daily backups with offsite encrypted storage provide resilience. Network security includes firewall rules, VPN for administration, and TLS for all services. The SLA target is ≥99.5% for hosted services.

**Phase 2 (2027–2029): Sovereign Migration**

When G-Cloud becomes available (target 2027), MoH establishes a dedicated cloud spoke within the national infrastructure. Each system is migrated individually with 60-day parallel-run validation. The migration sequence prioritises lowest-risk systems first, building confidence before migrating DHIS2 (the largest and most critical system).

The migration sequence is: monitoring stack (lowest risk, validates G-Cloud environment) → OpenHIM + OpenCR + HAPI FHIR (HIE platform) → Keycloak + OCL (supporting services) → e-NHIS (administrative system) → DHIS2 (highest-risk, last to migrate) → new deployments (OpenMRS, LIS) deploy directly on G-Cloud.

At the end of Phase 2, all central systems are on G-Cloud Kubernetes with automated CI/CD, auto-scaling, and DR capability. The PDGA DC interim hosting is decommissioned.

**Phase 3 (2030–2033): Optimised Operations**

The G-Cloud infrastructure matures with multi-availability-zone replication (if supported), optimised resource allocation based on actual usage patterns, health data warehouse deployed on dedicated compute nodes, and event-driven architecture requiring message broker infrastructure (Apache Kafka or equivalent).

**Facility-Level Infrastructure:**

Facility connectivity transitions from satellite (EHSSP-era) through 4G mobile data (bridge) to RDIP broadband (target). At each facility with clinical systems (EHR, EIR, IDSR+), a local server provides offline operation with background sync. Solar power supports ICT equipment at facilities without reliable electricity. The number of facilities with local server infrastructure grows from 0 (2025) to 10–15 pilot tablets (2026) to 20+ local servers (2029) to 40+ local servers (2033).

#### 10.2.4 Transition Risk at Each Architecture State

| Architecture State | Key Risk | Mitigation Embedded in Architecture |
|-------------------|----------|--------------------------------------|
| End Wave 1 (2026) | G-Cloud not available; interim hosting must sustain Wave 2 volumes | Docker Compose designed for extended operation; additional servers can be provisioned at PDGA DC |
| End Wave 1 (2026) | eCRVS API not delivered; Flow 1 operating on batch only | Batch processing achieves functional equivalence with 24–72 hour latency; all mediators built for API switch |
| End Wave 1 (2026) | EHSSP transition creates system outages | W1-11 transition plan with bridge funding; zero-downtime target; successor funding for each system |
| End Wave 2 (2029) | Broadband covers <30 facilities; EHR/EIR deployment limited | Offline-first design mandate; 4G bridge extended; facility selection based on actual connectivity |
| End Wave 2 (2029) | Global Fund NFM5 digital health allocation insufficient | Bilateral funding alternatives; reduced LIS/IDSR+ scope; health digitisation proposal to WB/AfDB |
| End Wave 2 (2029) | DHDD staff attrition undermines operational capacity | Competitive salary benchmarking; career development; regional balance; secondment options |
| End Wave 3 (2033) | Government budget cannot absorb ≥50% of recurrent costs | Phased absorption aligned with MTEF cycle; demonstrated value metrics; advocacy through NDHSC |
| End Wave 3 (2033) | Technology stack obsolescence over 8-year horizon | Biennial architecture review (DD-12); open-source platforms enable upgrade paths; FHIR forward-compatibility |

---

## Appendix A: Detailed Gap Analysis Matrix

This appendix consolidates all 38 gaps identified in Sections 2.1 and 2.2 into a single reference matrix.

### A.1 Generic / Cross-Sectoral Gaps

| ID | Gap | AS-IS Summary | TO-BE Summary | Severity | Priority | Dependency Owner | Funding Source |
|----|-----|---------------|---------------|----------|----------|------------------|----------------|
| GEN-01 | Sovereign Cloud Infrastructure (G-Cloud) | No sovereign cloud; fragmented hosting across 6+ arrangements; no Tier 3/4 data centre; ITU Cybersecurity Index around 30 (lower half globally) | G-Cloud Kubernetes-based sovereign cloud; hub-and-spoke; MoH as isolated spoke; Tier 3/4 DC; Keycloak IAM/SSO; API Gateway | Critical | W2 | MoDE/PDGA, RDIP, ProgTel | RDIP (USD 50M Progressa allocation) |
| GEN-02 | National Broadband and Last-Mile Connectivity | ~40,000 fixed broadband subscribers; ~60% electricity access; single submarine cable; EHSSP satellite ending Aug 2025 | RDIP broadband backbone; last-mile to facilities; 2→5→10+ Mbps targets; second submarine cable; terrestrial replaces satellite | Critical | W1–W2 | RDIP, ProgTel/the national utility, MoDE/PDGA | RDIP |
| GEN-03 | National Digital Identity Platform | Two separate NIN systems (eCRVS + Immigration); NIN production suspended; ~50% coverage; no unified digital ID; CRVS Bill pending | Unified digital ID; eCRVS NIN as foundational health identifier; OpenCR deterministic + probabilistic matching; FHIR Patient API | High | W1–W2 | MoDE/PDGA, RDIP, Ministry of Justice | RDIP |
| GEN-04 | Data Protection and Privacy Legislation | No comprehensive data protection law; no Data Protection Authority; no health data governance framework; no patient consent management | National data protection law; Data Protection Authority; MoH health data governance framework; four-tier classification; consent protocols | Very High (delay risk) | W1 (MoH interim) | Ministry of Justice, MoDE/PDGA, MoH | RDIP, WHO |
| GEN-05 | National Interoperability Platform | No government service bus; ProgressaPay only cross-ministry integration; no API standards; each ministry in integration silo | National interoperability platform / government service bus; MoH HIE connects for cross-sectoral flows; open API standards mandated | High | W2 | MoDE/PDGA, RDIP, MoF | RDIP |
| GEN-06 | Government Cloud and Hosting Policy | The government cloud policy exists but not operationalised; no cloud-first mandate enforced; no standardised hosting SLAs | G-Cloud operational; cloud-first default; standardised hosting tiers; container orchestration; data residency enforced | High | W2 | MoDE/PDGA, RDIP, MoF | RDIP |

### A.2 Sector-Specific Gaps — Business Architecture

| ID | Gap | AS-IS Summary | TO-BE Summary | Severity | Priority / Wave |
|----|-----|---------------|---------------|----------|----------------|
| BUS-01 | Digital Health Governance Structure | No unified digital health directorate; 4 fragmented teams; no investment review; no coordination | Three-tier model: NDHSC (14 members, quarterly), DHDD (6 areas, 14 positions), 3 TWGs (monthly); investment decision flow | Critical | Must — W1 |
| BUS-02 | National Digital Health Strategy | No comprehensive eHealth strategy; expired sub-sector policies (HMIS, laboratory) | D6 as endorsed strategy; DHDD maintains; biennial reviews; aligned with National Digital Master Plan | High | Must — W1 |
| BUS-03 | Health Data Governance Framework | No data governance; no data ownership model; no sharing agreements; no consent management; about half of data sources adequate | DHDD-led framework: 11 data domains, three-level stewardship, four-tier classification, DSAs, consent protocols | High | Must — W1 |
| BUS-04 | Project and Programme Management | No MoH-internal PM for digital health; dependence on EHSSP PMU (closing Aug 2025) | DHDD Project Coordination area; portfolio management; standardised lifecycle; GEATDM IMPLEMENT phase | High | Must — W1 |
| BUS-05 | Stakeholder and Change Management | ~90% EHR readiness but ~90% paper; training donor-led and system-specific; no change champion network | DHDD Capacity Building area; digital literacy programme; role-based training; change champions; ToT model | Medium | Should — W1–W2 |

### A.3 Sector-Specific Gaps — Data Architecture

| ID | Gap | AS-IS Summary | TO-BE Summary | Severity | Priority / Wave |
|----|-----|---------------|---------------|----------|----------------|
| DAT-01 | Master Patient Index (MPI) | No MPI; patients identified independently per system; no cross-system identity resolution; eCRVS NIN ~50% coverage | OpenCR: unified golden record; anchored on eCRVS NIN; multi-identifier; deterministic + probabilistic matching; FHIR Patient API | Critical | Must — W1 (core), W2 (full) |
| DAT-02 | National Health Data Dictionary | No data dictionary; each system defines independently; no shared definitions; about half of data sources adequate | DHDD-maintained dictionary; standardised elements, value sets, validation rules; TWG oversight; version-controlled | High | Must — W1 (priority flows), W2 (comprehensive) |
| DAT-03 | Health Terminology Services | No standardised terminology; no ICD coding systematic; no LOINC; no central terminology server | OCL (open-source); phased: ICD-11 + LOINC (Phase 1), SNOMED CT GPS + ATC (Phase 2); FHIR ValueSet/CodeSystem APIs | Medium | Should — W1–W2 |
| DAT-04 | Data Quality Framework | No systematic framework; about half of data sources adequate; no indicators or dashboards; quality ad hoc per system | DHDD framework: completeness/timeliness/accuracy/consistency/uniqueness; quarterly reviews; automated validation; dashboards | Medium | Should — W1–W2 |
| DAT-05 | Health Data Warehouse and Analytics | DHIS2 only analytical platform; no cross-system analytics; no data warehouse; limited data use | Phased: DHIS2 primary (W1), PostgreSQL/Superset cross-system (W2), dedicated warehouse if justified (W3); de-identified data | Medium | Could — W2–W3 |
| DAT-06 | Data Stewardship Staffing | Zero formal data stewards; no regional HIS officers; facility focal persons informal | Three-level: 4 national DHDD positions, 7 RHDOs, ~90 facility data focal persons formalised; ~14 new dedicated roles | High | Must — W1–W2 |

### A.4 Sector-Specific Gaps — Application Architecture

| ID | Gap | AS-IS Summary | TO-BE Summary | Severity | Priority / Wave |
|----|-----|---------------|---------------|----------|----------------|
| APP-01 | Health Information Exchange (HIE) | No HIE; integration maturity Level 1; sole flow SPT→DHIS2; no middleware, API management, or audit logging | OpenHIM: hub-and-spoke; message routing, transformation, audit (7-yr); Level 3–4 maturity; 20K–100K+ daily transactions | Critical | Must — W1 (core + 2 flows), W2 (remaining) |
| APP-02 | Electronic Health Record (EHR) | ~90% paper-based; 60% EHR unavailability; only NMRI + a private hospital have EHR; ~90% readiness | OpenMRS: vertical-first (maternal + HIV/ART); 15–20 facilities (W2), 30–40 (W3); offline-first; FHIR; ICD-11; MPI lookup | Critical | Must — W1 (foundations), W2 (pilot/scale) |
| APP-03 | Electronic Immunisation Registry (EIR) | SPT at all ~90 facilities since 2022; 350,000–400,000 children; >99% accuracy; scanning lag; Vaxa cloud dependency | DHIS2 Tracker EIR per WHO DAK; real-time; offline-first; FHIR; MPI lookup; native DHIS2 aggregate | High | Should — W1 (pilot), W2 (national), W3 (SPT retire) |
| APP-04 | Electronic IDSR+ | 90% IDSR coverage but ~90% paper; IBS only (no EBS/CBS); private sector gaps | DHIS2 Tracker IDSR+; electronic case-based nationally; EBS (W2); CBS (W3); HIE lab→surveillance flow | High | Must — W1 (pilot), W2 (national), W3 (EBS+CBS) |
| APP-05 | e-NHIS Enhancement | 15,000–20,000 beneficiaries (~30% of 60K target); no eCRVS integration; no offline claims; urban-centric | Enhanced: mobile enrollment, offline claims, eCRVS auto-enrollment via MPI, ≥60K beneficiaries; 3 HIE flows | Critical | Must — W1 (eCRVS integration), W2 (enhancement) |
| APP-06 | LIS (A-LIS) Strengthening | Early pilot; limited DHIS2 integration; no LOINC; no FHIR; no HIE connection | A-LIS or OpenELIS at NRL + 5 regional hospitals; LOINC; FHIR; HIE integration (lab→surveillance, lab→EHR) | High | Should — W1 (NRL + 2), W2 (5 regional) |
| APP-07 | eLMIS | SMS for Health since 2010; 50 clinics; basic stock notifications; no forecasting; obsolete technology | OpenLMIS/mSupply: full facility coverage; electronic requisitioning; forecasting; DHIS2/HIE integration | Medium | Could — W1 (rollout), W2–W3 (full coverage) |
| APP-08 | DHIS2 Aggregate HMIS Strengthening | Operational nationally since 2010; completeness/timeliness below target; Tracker limited to COVID-19; no FHIR | ≥95% completeness/timeliness; Tracker for EIR/IDSR+/RMNCH; enhanced analytics; mCSD FHIR; HIE integration; G-Cloud | High | Must — W1 (strengthen), W2 (Tracker scale, HIE) |
| APP-09 | eCRVS System Integration | about 1 million registrations (~50%); completely siloed; no API; Aug 2025 e-NHIS integration not delivered | 3 HIE flows: birth→MPI, birth→e-NHIS enrollment, death→MPI closure; NIN as primary identifier; FHIR interface | Critical | Must — W1 |

### A.5 Sector-Specific Gaps — Technology Architecture

| ID | Gap | AS-IS Summary | TO-BE Summary | Severity | Priority / Wave |
|----|-----|---------------|---------------|----------|----------------|
| TEC-01 | Sovereign Health Data Hosting (Interim) | 6+ fragmented hosting arrangements; patient data outside national borders; no sovereign hosting | G-Cloud sovereign hosting; transitional: PDGA DC pre-2027, G-Cloud 2027+; 60-day parallel-run per migration | High | Must — W1 (interim), W2 (G-Cloud) |
| TEC-02 | Facility Connectivity and Offline-First | EHSSP satellite ending Aug 2025; no offline-first design; ~60% electricity; ~70% internet penetration | All frontline apps offline-first; 2→5→10+ Mbps; RDIP broadband; 4G transitional; solar/battery at facilities | Critical | Must — W1 (bridge), W2 (broadband) |
| TEC-03 | Health Sector Cybersecurity | ITU GCI score around 30; no MFA; no enterprise IAM; each system independent auth; no security officer | Keycloak IAM/SSO; MFA enforced; mTLS + OAuth 2.0 for HIE; HISO in DHDD; incident response plan; security assessments | High | Must — W1 (Keycloak, policies), W2 (full) |
| TEC-04 | Disaster Recovery and Business Continuity | No DR plan; no documented backup strategy; no RTO/RPO; vendor-managed DR without MoH oversight | Automated daily backups; offsite storage; documented/tested recovery; RTO/RPO per system; annual DR testing; paper fallback | High | Should — W1 (core services), W2 (comprehensive) |
| TEC-05 | Monitoring and Observability | No unified monitoring; no system availability tracking; no alerting | Prometheus/Grafana/Loki stack; all systems instrumented; OpenHIM transaction dashboard; alert rules | Medium | Should — W1 (OpenHIM, DHIS2), W2 (all) |
| TEC-06 | Containerisation and Deployment Automation | No containerisation; no DevOps; manual deployments; no CI/CD | Docker/Kubernetes on G-Cloud; container registry; CI/CD pipelines; infrastructure-as-code | Medium | Should — W1 (Docker Compose for new), W2 (K8s) |

### A.6 Sector-Specific Gaps — Integration Architecture

| ID | Gap | AS-IS Summary | TO-BE Summary | Severity | Priority / Wave |
|----|-----|---------------|---------------|----------|----------------|
| INT-01 | Flow 1: Birth Reg → MPI → NHIS Enrollment | No integration; eCRVS and e-NHIS completely separate; Aug 2025 integration target not delivered | eCRVS birth notification → OpenHIM → OpenCR (MPI) → e-NHIS auto-enrollment; eliminates manual re-entry | Critical | Must — W1 |
| INT-02 | Flow 2: Immunisation → Aggregate Reporting | SPT→DHIS2 works; transition to DHIS2 Tracker→Aggregate (internal); maintain continuity during migration | DHIS2 Tracker EIR native aggregate; parallel with SPT during transition; no double-counting | High | Must — W1 (pilot), W2 (national) |
| INT-03 | Flow 3: Lab Result → Surveillance Notification | Paper-based; A-LIS limited; no electronic notification; days of turnaround | A-LIS/OpenELIS → OpenHIM → DHIS2 Tracker IDSR+; LOINC-coded; FHIR Observation; minutes not days | High | Should — W2 |
| INT-04 | Flow 4: Clinical Encounter → Aggregate Reporting | Paper registers at ~90%; manual tally and entry into DHIS2; slow and error-prone | OpenMRS → OpenHIM → DHIS2 Aggregate; FHIR Measure/MeasureReport; eliminates manual tally at EHR sites | High | Should — W2 |
| INT-05 | Flow 5: Insurance Eligibility and Claims | Standalone e-NHIS; no EHR integration; manual verification; no clinical-linked claims | e-NHIS ↔ OpenMRS via OpenHIM; real-time eligibility check; claims from clinical documentation; reduces fraud | High | Should — W2 |
| INT-06 | Flow 6: National → Regional/Global Reporting | Manual extraction; no automated ADX; no standardised pipeline | DHIS2 → WHO/RHO via ADX; automated scheduling; quality checks pre-transmission | Medium | Could — W2–W3 |
| INT-07 | API Standards and Governance | No API standards; no documentation; no versioning; no security standards; no developer portal | OpenAPI 3.0; semantic versioning; mTLS + OAuth 2.0; rate limiting; monitoring; developer portal; 8 integration principles | High | Must — W1 (standards), W2 (enforcement) |

### A.7 Gap Summary Statistics

| Dimension | Critical | High | Medium | Total |
|-----------|----------|------|--------|-------|
| Generic / Cross-Sectoral (GEN) | 2 | 4 | 0 | **6** |
| Business Architecture (BUS) | 1 | 3 | 1 | **5** |
| Data Architecture (DAT) | 1 | 3 | 2 | **6** |
| Application Architecture (APP) | 3 | 4 | 1 | **8** |
| Technology Architecture (TEC) | 1 | 3 | 2 | **6** |
| Integration Architecture (INT) | 1 | 5 | 1 | **7** |
| **Total** | **9** | **22** | **7** | **38** |

---

## Appendix B: Initiative Catalog

This appendix consolidates all 28 initiatives across three waves into a single reference catalog.

### B.1 Wave 1 Initiatives — "Govern, Connect, Register" (2025–2026)

| ID | Initiative | Gaps Addressed | Duration | Cost (USD) | Primary Funding | Key Deliverables |
|----|-----------|---------------|----------|-----------|-----------------|------------------|
| W1-01 | Digital Health Governance (NDHSC + DHDD) | BUS-01, BUS-04 | 12 months | 180K–280K | RDIP + Gov't | Ministerial Order; NDHSC ToR; DHDD establishment; investment decision flow |
| W1-02 | National Digital Health Strategy | BUS-02 | 4 months | 25K–45K | WHO + RDIP | D6 wrapper strategy document; PS endorsement; donor partner circulation |
| W1-03 | Health Data Governance Framework | BUS-03, GEN-04 | 6 months | 35K–55K | WHO + RDIP | Ministerial Order; data ownership matrix; classification scheme; DSA templates |
| W1-04 | DHIS2 Strengthening | APP-08, DAT-04, APP-03, APP-04 | 18 months | 200K–350K | GF + GAVI + WHO + RDIP | ≥90% completeness; Tracker EIR pilot (10–15 sites); Tracker IDSR+ pilot (10–20 sites); 5 dashboards |
| W1-05 | MPI/Client Registry Pilot | DAT-01, GEN-03 | 12 months | 120K–200K | RDIP + WHO | OpenCR deployed; ≥500K records; matching rules tuned; FHIR PIXm/PDQm APIs |
| W1-06 | eCRVS-NHIS Integration (HIE Platform) | INT-01, APP-09, APP-05 | 15 months | 250K–400K | RDIP + Gov't | OpenHIM deployed; Flow 1 live; Keycloak IAM; mediator for eCRVS→MPI→e-NHIS |
| W1-07 | eLMIS National Rollout | APP-07 | 12 months | 180K–300K | GF + RDIP | ≥85 facilities; electronic requisitioning; DHIS2 integration; SMS for Health partial replacement |
| W1-08 | Broadband Transition & Connectivity Bridge | TEC-02, GEN-02 | 18 months | 350K–600K | RDIP + Gov't + GAVI + GF | Bridge satellite ≥50 sites; 4G at 20–30 sites; solar kits at 10–15 sites; offline-first policy |
| W1-09 | MoH Cloud Spoke (Interim Hosting) | TEC-01, TEC-06, GEN-01 | 12 months | 60K–110K | RDIP | Docker Compose at PDGA DC; G-Cloud readiness; monitoring stack; backup strategy |
| W1-10 | Digital Health Workforce Foundation | BUS-05, DAT-06 | 18 months | 200K–350K | GF + GAVI + WHO + Gov't | 6 DHDD onboarded; 100+ oriented; 50–70 facility trained; 10 ToT; 20 champions; 3 RHDOs |
| W1-11 | EHSSP Digital Health Transition | BUS-04 | 6 months | 40K–70K | EHSSP + RDIP | Asset inventory; system-by-system transition plan; zero outages; successor funding confirmed |
| | **Wave 1 Total** | | | **1,640K–2,760K** | | |
| | **+ Programme Management (10%)** | | | **164K–276K** | | |
| | **Wave 1 Grand Total** | | | **1,804K–3,036K** | | |

### B.2 Wave 2 Initiatives — "Digitise, Integrate, Scale" (2027–2029)

| ID | Initiative | Gaps Addressed | Duration | Cost (USD) | Primary Funding | Key Deliverables |
|----|-----------|---------------|----------|-----------|-----------------|------------------|
| W2-01 | HIE Expansion (Priority Integration Flows) | INT-02–INT-06, APP-01 | 30 months | 280K–480K | RDIP + WHO | Flows 2–5 live; mediator development; FHIR conformance; integration monitoring |
| W2-02 | EHR Pilot and Scale (OpenMRS) | APP-02 | 30 months | 550K–950K | WB/AfDB + GF + GAVI | OpenMRS at 15–20 facilities; maternal health + HIV/ART; clinical workflow design; hardware |
| W2-03 | e-NHIS Enhancement | APP-05 | 24 months | 200K–350K | Gov't + RDIP | Offline claims; mobile enrollment; ≥60K beneficiaries; HIE integration |
| W2-04 | DHIS2 Tracker EIR National Scale | APP-03 | 30 months | 300K–500K | GAVI + WHO + GF | National EIR rollout; SPT parallel operation; data migration; WHO DAK compliance |
| W2-05 | Laboratory Information System Deployment | APP-06 | 24 months | 250K–450K | GF + RDIP | NRL + 5 regional hospitals; LOINC coding; FHIR; HIE integration (lab→surveillance) |
| W2-06 | Electronic IDSR+ National Rollout | APP-04 | 24 months | 150K–280K | WHO + GF + Africa CDC | All connected facilities; electronic case-based reporting; EBS pilot |
| W2-07 | G-Cloud Migration | TEC-01, GEN-01 | 18 months | 180K–300K | RDIP | Sequential migration; 60-day parallel runs; data sovereignty compliance |
| W2-08 | FHIR Adoption and Terminology Standards | DAT-02, DAT-03, INT-07 | 24 months | 120K–220K | WHO + RDIP | FHIR R4 conformance; OCL terminology service; SNOMED CT GPS; health data dictionary v2 |
| W2-09 | Digital Health Workforce Scale-Up | BUS-05, DAT-06 | 30 months | 350K–600K | Gov't + GF + GAVI + WHO | Full DHDD (14); 7 RHDOs; 150+ clinicians trained; MSc sponsorships; TOGAF certifications |
| W2-10 | Cybersecurity Maturation and DR | TEC-03, TEC-04 | 24 months | 120K–200K | RDIP + Gov't | HISO recruited; incident response plan; annual pen testing; DR tested; MFA 100% |
| | **Wave 2 Total** | | | **2,500K–4,330K** | | |
| | **+ Programme Management (10%)** | | | **250K–433K** | | |
| | **Wave 2 Grand Total** | | | **2,750K–4,763K** | | |

### B.3 Wave 3 Initiatives — "Optimise, Sustain, Innovate" (2030–2033)

| ID | Initiative | Gaps Addressed | Duration | Cost (USD) | Primary Funding | Key Deliverables |
|----|-----------|---------------|----------|-----------|-----------------|------------------|
| W3-01 | EHR Coverage Expansion (30–40 Facilities) | APP-02 | 48 months | 500K–900K | Gov't + GF + Bilateral | 30–40 EHR facilities; expanded clinical workflows; regional coverage |
| W3-02 | Health Data Warehouse and Advanced Analytics | DAT-05 | 36 months | 250K–450K | Gov't + WHO + Bilateral | PostgreSQL/Superset; cross-system analytics; de-identified data warehouse |
| W3-03 | Cross-Border Surveillance and International Reporting | INT-06 | 36 months | 120K–220K | WHO + Africa CDC + GF | ADX automated reporting; REC data sharing; cross-border surveillance |
| W3-04 | SPT Retirement and EIR Consolidation | APP-03 | 24 months | 100K–180K | GAVI + WHO | SPT decommissioned; DHIS2 Tracker EIR as sole national platform; data archive |
| W3-05 | Full Integration Maturity (Level 3–4) | INT-07, APP-01 | 36 months | 200K–350K | RDIP follow-on + Gov't | Event-driven (pub/sub); SHR operational; all 6 flows; 50K–100K+ daily transactions |
| W3-06 | Sustainability Transition (Budget Absorption) | BUS-01, All | 48 months | 150K–250K | Gov't + RDIP follow-on | ≥50% gov't funding; donor exit plans executed; MTEF line established; NDHSC-led sustainability |
| W3-07 | Community-Based Digital Health Services | APP-04 | 36 months | 180K–320K | GF + GAVI + Gov't | CBS via CHW mobile tools; community surveillance; USSD/mobile integration |
| | **Wave 3 Total** | | | **1,500K–2,670K** | | |
| | **+ Programme Management (10%)** | | | **150K–267K** | | |
| | **Wave 3 Grand Total** | | | **1,650K–2,937K** | | |

### B.4 Full Programme Summary

| Wave | Period | Initiatives | Cost (USD) | Incl. PMO |
|------|--------|------------|-----------|-----------|
| Wave 1 | 2025–2026 | 11 | 1,640K–2,760K | 1,804K–3,036K |
| Wave 2 | 2027–2029 | 10 | 2,500K–4,330K | 2,750K–4,763K |
| Wave 3 | 2030–2033 | 7 | 1,500K–2,670K | 1,650K–2,937K |
| **Total** | **2025–2033** | **28** | **5,640K–9,760K** | **6,204K–10,736K** |

---

## Appendix C: Dependency Matrix

### C.1 Initiative-to-Initiative Dependencies (Intra-Wave)

#### Wave 1 Critical Path

```
W1-01 Governance ─────────┬──── W1-02 Strategy
(foundational; all        │──── W1-03 Data Governance
 depend on this)          │──── W1-04 DHIS2 Strengthening
                          │──── W1-10 Workforce
                          └──── W1-11 EHSSP Transition

W1-09 Interim Hosting ────┬──── W1-05 MPI/OpenCR
                          └──── W1-06 HIE/eCRVS-NHIS Integration

W1-05 MPI (OpenCR) ───────────── W1-06 eCRVS-NHIS Integration (Flow 1)

W1-08 Connectivity Bridge ─────── W1-04 DHIS2 Tracker Pilots (facility deployment)
```

**Wave 1 Critical Path:** W1-01 → W1-09 → W1-05 → W1-06 (Governance → Hosting → MPI → First Integration Flow)

#### Wave 2 Critical Path

```
W1-06 HIE Core (from W1) ──┬──── W2-01 HIE Expansion (Flows 2–5)
                           └──── W2-02 EHR (requires HIE + MPI)

W1-05 MPI (from W1) ───────────── W2-02 EHR (MPI lookup at registration)

W2-02 EHR ──────────────────┬──── W2-01 HIE Flow 4 (EHR→DHIS2)
                           └──── W2-01 HIE Flow 5 (EHR↔e-NHIS)

W2-05 LIS ──────────────────────── W2-01 HIE Flow 3 (Lab→Surveillance)

GEN-01 G-Cloud (RDIP) ──────────── W2-07 G-Cloud Migration

W2-09 Workforce ────────────────── W2-02 EHR (clinician training prerequisite)
```

**Wave 2 Critical Path:** W2-09 Workforce + W2-02 EHR → W2-01 HIE Flows 4–5

#### Wave 3 Dependencies

```
W2-02 EHR Pilot (from W2) ─────── W3-01 EHR Expansion
W2-04 EIR National (from W2) ──── W3-04 SPT Retirement
W2-01 HIE Flows (from W2) ─────── W3-05 Full Integration Maturity
W2-07 G-Cloud (from W2) ───────── W3-02 Health Data Warehouse
All Wave 2 ─────────────────────── W3-06 Sustainability Transition
```

### C.2 Cross-Sectoral Dependencies

| # | MoH Initiative | Depends On | External Owner | Planned Date | Fallback if Delayed |
|---|---------------|-----------|----------------|-------------|---------------------|
| 1 | W1-06 eCRVS Integration | eCRVS API or batch export | MoDE / Civitas Group | 2025–2026 | Batch CSV import; governance escalation |
| 2 | W2-07 G-Cloud Migration | G-Cloud platform operational | MoDE/PDGA / RDIP | 2027 | Extended PDGA DC hosting; Docker Compose scales |
| 3 | W2-02 EHR Deployment | Broadband at target facilities | RDIP | 2027–2028 | 4G bridge; deploy at connected sites first |
| 4 | W1-05 MPI Seeding | eCRVS NIN data access | MoDE / eCRVS team | 2025–2026 | Bulk data import from existing eCRVS database |
| 5 | W1-05 MPI Matching | NIN production resumed | MoDE / Immigration | Unknown | Probabilistic matching; health-sector identifier |
| 6 | All patient-level systems | Data Protection Act enacted | Ministry of Justice / National Assembly | No committed date | MoH data governance framework by Ministerial Order |
| 7 | W2-01 HIE cross-sectoral flows | Government Service Bus | MoDE/PDGA / RDIP | No committed date | MoH HIE operates as sector-specific platform; bilateral eCRVS integration |
| 8 | W1-08 Connectivity Bridge | RDIP broadband rollout to health facilities | RDIP | 2027–2028 | Satellite bridge + 4G; prioritise connected sites |

### C.3 Initiative Dependency Summary

| Initiative | Depends On (Prerequisites) | Enables (Downstream) |
|-----------|--------------------------|---------------------|
| W1-01 Governance | None (foundational) | All other initiatives |
| W1-02 Strategy | W1-01 | Donor alignment; investment decisions |
| W1-03 Data Governance | W1-01 | W1-05 MPI governance; W1-06 DSAs; all data initiatives |
| W1-04 DHIS2 | W1-01; W1-08 (connectivity) | W2-04 EIR scale; W2-06 IDSR+; W2-01 Flow 2 |
| W1-05 MPI | W1-09 (hosting); W1-03 (governance); GEN-03 (NIN) | W1-06 Flow 1; W2-02 EHR; all patient-level integration |
| W1-06 HIE/Integration | W1-09 (hosting); W1-05 (MPI); GEN-03 (eCRVS API) | W2-01 HIE expansion; W2-02 EHR integration; all flows |
| W1-07 eLMIS | W1-01; W1-08 (connectivity) | W3-05 supply chain integration |
| W1-08 Connectivity | W1-01; GEN-02 (RDIP broadband) | W1-04 Tracker pilots; W2-02 EHR; all facility systems |
| W1-09 Hosting | W1-01; GEN-01 (G-Cloud) | W1-05 MPI; W1-06 HIE; all central services |
| W1-10 Workforce | W1-01 | W2-02 EHR training; W2-09 scale-up; all implementations |
| W1-11 EHSSP Transition | W1-01 | System continuity; W1-08 connectivity |
| W2-01 HIE Expansion | W1-06; W2-02; W2-05 | W3-05 full maturity; all integration flows |
| W2-02 EHR | W1-05; W1-06; W1-08; W2-09 | W2-01 Flows 4–5; W3-01 expansion |
| W2-07 G-Cloud | GEN-01 (RDIP) | W3-02 analytics; sovereign compliance |
| W3-06 Sustainability | All Wave 1–2 | Long-term programme viability |

---

## Appendix D: Cost Estimation Basis and Assumptions

### D.1 Estimation Sources

All cost estimates in this roadmap derive from four complementary sources:

1. **International Benchmarks.** Platform deployment costs benchmarked against documented implementations in comparable Sub-Saharan African countries: OpenMRS (Kenya AMPATH 130K+ patients, Rwanda, Malawi), OpenHIE-aligned HIE (Tanzania, Ethiopia), DHIS2 Tracker EIR (Maldives, Rwanda), OpenELIS (Côte d'Ivoire, DRC, Haiti). Per-facility EHR hardware: USD 5,000–15,000. Training per trainee: USD 200–2,500 by intensity level.

2. **EHSSP Actuals.** Progressa-specific costs from the EHSSP programme (about USD 100–150 million total) inform recurrent estimates for facility connectivity, hosting, equipment, and logistics premiums in the Progressa procurement environment.

3. **Technical Architecture Specifications.** Hardware and infrastructure sized for Progressa's parameters: ~90 public health facilities, 6 regional medical stores, 7 regions, ~2–3M population. All software is open-source (zero licence fees).

4. **Expert Estimation.** Standard international consultancy rates for health informatics specialists in the region, adjusted for Progressa context. Blended rate: USD 600–1,000/day.

### D.2 Key Assumptions

| # | Assumption | Value | Impact if Assumption Fails |
|---|-----------|-------|---------------------------|
| 1 | Open-source stack throughout | Zero licence fees; costs = implementation + support | If proprietary selected: add USD 50K–200K/yr per platform |
| 2 | TA rates — international | USD 800–1,500/day | Higher rates: increase TA-heavy initiatives by 15–30% |
| 3 | TA rates — regional (HISP regional node etc.) | USD 400–800/day | Regional TA preferred; unavailability pushes to international rates |
| 4 | Government salary scales | USD 8,000–15,000/yr per DHDD position | Below: recruitment failure (R-02); above: budget strain |
| 5 | Hardware logistics premium | 15–25% over base equipment cost | Higher for urgent procurement; lower for bulk orders |
| 6 | RDIP G-Cloud delivery | 2027 | Delay: +USD 50K–100K/yr for extended interim hosting |
| 7 | Inflation | 0% (constant 2025 USD) | 2029–2033 costs may be 10–20% higher nominally |
| 8 | MoH absorption capacity | USD 1–2M/yr effective absorption | Exceeding: procurement bottlenecks, implementation quality risk |
| 9 | PMO overhead | 10% of initiative costs | Conservative vs. 15–20% typical for WB-financed projects |
| 10 | Contingency | 5–10% included in initiative cost ranges | Ranges capture uncertainty; midpoint is planning basis |

### D.3 Cost Category Definitions

| Category | Description | Typical Share |
|----------|-------------|--------------|
| Technical Assistance | International/regional consultants for design, implementation, knowledge transfer | 35–50% |
| Hardware & Equipment | Servers, tablets, routers, solar kits, network equipment, UPS | 15–25% |
| Training & Capacity Building | Curriculum, delivery, materials, per diem, venue | 10–20% |
| Hosting & Connectivity | DC hosting fees, mobile data, satellite bridge | 5–15% |
| Software Configuration | Customisation, mediator development, FHIR adapters, integration testing | 10–20% |
| Operational & Coordination | Meetings, stakeholder engagement, travel, documentation | 5–10% |
| Contingency | Unforeseen costs, procurement delays, exchange rate fluctuations | 5–10% |

### D.4 CAPEX vs. OPEX Summary

| Wave | CAPEX (USD) | OPEX/Year (USD) | Duration | Total OPEX (USD) |
|------|-------------|-----------------|----------|-----------------|
| Wave 1 (2025–2026) | 1,100K–1,850K | 360K–610K | 1.5 yrs | 540K–910K |
| Wave 2 (2027–2029) | 1,500K–2,600K | 400K–690K | 2.5 yrs | 1,000K–1,730K |
| Wave 3 (2030–2033) | 600K–1,100K | 225K–390K | 4 yrs | 900K–1,570K |
| **Total** | **3,200K–5,550K** | — | — | **2,440K–4,210K** |

### D.5 Steady-State Recurrent Cost Projection

| Cost Category | 2026 (USD) | 2028 (USD) | 2030 (USD) | 2033 (USD) |
|--------------|-----------|-----------|-----------|-----------|
| DHDD staff salaries (6→14 positions) | 60,000 | 120,000 | 140,000 | 150,000 |
| Regional Health Data Officers (3→7) | 20,000 | 50,000 | 60,000 | 70,000 |
| Hosting fees (PDGA DC → G-Cloud) | 10,000 | 30,000 | 40,000 | 45,000 |
| Facility connectivity (bridge → broadband) | 200,000 | 100,000 | 60,000 | 40,000 |
| System maintenance and support | 15,000 | 50,000 | 70,000 | 80,000 |
| Annual training and refresher | 20,000 | 40,000 | 50,000 | 50,000 |
| Monitoring, security, helpdesk | 10,000 | 25,000 | 35,000 | 40,000 |
| e-NHIS operations | 15,000 | 30,000 | 35,000 | 40,000 |
| **Total Annual OPEX** | **350,000** | **445,000** | **490,000** | **515,000** |

Steady-state annual OPEX of ~USD 515,000 represents the minimum government commitment required by 2033 to sustain the digital health ecosystem.

---

## Appendix E: Risk Register Full Detail

### E.1 Risk Summary Matrix

| ID | Risk | Category | Likelihood | Impact | Rating | Primary Owner |
|----|------|----------|-----------|--------|--------|--------------|
| R-01 | EHSSP funding cliff | Financial / Operational | Very High | Critical | **CRITICAL** | DHDD Project Coordinator |
| R-02 | DHDD recruitment failure | HR / Institutional | High | Critical | **CRITICAL** | PS MoH |
| R-03 | RDIP infrastructure delay | External / Infrastructure | High | High | **HIGH** | PDGA DG |
| R-04 | eCRVS vendor non-cooperation | External / Vendor | High | High | **HIGH** | DHDD HIE Manager |
| R-05 | Clinician EHR resistance | Change Management | High | High | **HIGH** | DHDD Training Officer |
| R-06 | Connectivity disruption (submarine cable) | Infrastructure | Medium | High | **HIGH** | DHDD Systems Operations |
| R-07 | Donor dependency / sustainability | Financial | Medium | Critical | **HIGH** | PS MoH |
| R-08 | NIN production suspension | External / Identity | High | Medium | **HIGH** | DHDD Data Governance Officer |
| R-09 | SPT–DHIS2 Tracker transition failure | Technical / Change | Medium | High | **HIGH** | Director, Public Health |
| R-10 | Political transition / priority shift | Political / Institutional | Medium | Critical | **HIGH** | PS MoH |
| R-11 | Data quality during transitions | Operational | High | Medium | **HIGH** | DHDD Data Governance Officer |
| R-12 | Cybersecurity incident / data breach | Technology / Security | Medium | Critical | **HIGH** | DHDD HISO |

### E.2 Risk Detail Cards

#### R-01: EHSSP Funding Cliff

- **Description:** EHSSP closes 29 August 2025, terminating funding for e-NHIS operations, eCRVS hosting, facility satellite connectivity, and eLMIS infrastructure. Four operational systems face simultaneous disruption.
- **Mitigations:** (1) W1-11 transition plan initiated immediately; (2) RDIP reallocation for infrastructure; (3) NHIA absorbs e-NHIS costs; (4) GF NFM4 absorbs eLMIS hosting; (5) NDHSC escalation for government bridge; (6) 3-month minimum bridge secured pre-closure
- **Contingency:** Emergency PDGA DC hosting; manual/paper fallback; NDHSC extraordinary meeting for emergency funding
- **Escalation Trigger:** Any system loses funding with <3 months bridge confirmed → PS MoH → Minister
- **Monitoring:** Successor funding confirmed per system (monthly tracking)

#### R-02: DHDD Recruitment Failure

- **Description:** Government salaries 40–60% below NGO rates. DHDD requires 14 specialist positions scarce in local market. Core position failure collapses governance.
- **Mitigations:** (1) RDIP salary supplementation; (2) WHO/HISP secondments; (3) Remote/hybrid arrangements; (4) Performance allowances; (5) Professional development incentives; (6) PSC specialist directorate designation
- **Contingency:** If unfilled after 9 months: convert to 12–24 month TA contracts with knowledge transfer milestones
- **Escalation Trigger:** Core position unfilled after 9 months → PS MoH (PSC acceleration)
- **Monitoring:** Positions filled vs. target (monthly); time-to-fill; offer acceptance rate

#### R-03: RDIP Infrastructure Delay

- **Description:** G-Cloud, broadband, and data centre expected 2026–2028. Comparable RDIP projects have seen 12–24 month delays.
- **Mitigations:** (1) Wave 1 designed for extended interim operation; (2) 4G connectivity bridge; (3) NDHSC monitors via PDGA DG; (4) G-Cloud migration plan prepared in advance; (5) Regional cloud fallback with NDHSC-approved criteria
- **Contingency:** Extended PDGA DC; additional server capacity; regional cloud for non-sensitive workloads
- **Escalation Trigger:** G-Cloud commissioning slips beyond end 2028 → NDHSC → DTSC
- **Monitoring:** RDIP milestones (quarterly); broadband coverage map; G-Cloud commissioning date

#### R-04: eCRVS Vendor Non-Cooperation

- **Description:** Priority 1 flow depends on eCRVS (Civitas Group) providing API or data export. Vendor contract managed outside MoH.
- **Mitigations:** (1) Batch CSV fallback; (2) RDIP DTFA escalation; (3) NDHSC to MoDE request; (4) Bulk NIN import while API negotiated; (5) Contract mandate at next renewal; (6) TWG joint design sessions
- **Contingency:** One-way batch import from database snapshots; explore OpenCRVS alternative
- **Escalation Trigger:** No agreement after 6 months → NDHSC → PS MoDE
- **Monitoring:** API specification agreed (binary); batch export operational (binary); vendor meetings (count/quarter)

#### R-05: Clinician EHR Resistance

- **Description:** ~90% stated readiness vs. ~90% paper reality. OpenMRS deployments consistently face initial resistance. Sub-50% adoption wastes USD 550K–950K investment.
- **Mitigations:** (1) Clinical informatics champions (1:10–15 ratio); (2) 20–40 hrs training incl. 5 days supervised practice; (3) Clinical workflow co-design; (4) 3–6 month parallel period; (5) Quick wins (decision support, alerts); (6) Recognition-based metrics; (7) Site selection prioritising engaged leadership
- **Contingency:** Pause scaling; rapid UX assessment; workflow redesign; vertical scope reduction; extend parallel period
- **Escalation Trigger:** Adoption <50% at pilots after 6 months → NDHSC
- **Monitoring:** Adoption rate per facility; data completeness EHR vs. paper; clinician satisfaction (quarterly)

#### R-06 through R-12

Risks R-06 through R-12 follow the same detailed structure as documented in Section 8.1. Each includes: description, category, likelihood/impact assessment, specific numbered mitigations, named risk owner, contingency plan, escalation trigger with governance chain, and monitoring indicators. The full risk cards are maintained in the DHDD risk register and reviewed quarterly by the NDHSC.

**Risk Profile Summary:** 2 Critical + 10 High = 12 risks in a high-risk operating environment. Zero medium or low risks in the top register. The two Critical risks (R-01 EHSSP cliff and R-02 DHDD recruitment) require immediate, active management from roadmap Day 1.

---

## Appendix F: RACI Matrix for Roadmap Governance

### F.1 Governance Bodies and Roles

| Abbreviation | Body / Role |
|-------------|-------------|
| **NDHSC** | National Digital Health Steering Committee |
| **DHDD-CD** | DHDD Chief Director |
| **DHDD-AS** | DHDD Architecture & Standards Lead |
| **DHDD-DG** | DHDD Data Governance Lead |
| **DHDD-SO** | DHDD Systems Operations Lead |
| **DHDD-PC** | DHDD Project Coordinator |
| **DHDD-CB** | DHDD Capacity Building Lead |
| **DHDD-IS** | DHDD Health Information Security Officer |
| **TWG-AI** | Architecture & Interoperability TWG |
| **TWG-DS** | Data Standards & Governance TWG |
| **TWG-IC** | Implementation & Capacity TWG |
| **PS** | Permanent Secretary, MoH |
| **DPI** | Director, Planning & Information |
| **DHS** | Director, Health Services |
| **DPH** | Director, Public Health |
| **NHIA** | NHIA Executive Director |
| **PDGA** | PDGA Director General |
| **MoF** | MoF Representative |
| **RDIP** | RDIP Programme Manager |

**RACI Legend:** R = Responsible (does the work), A = Accountable (owns the outcome), C = Consulted (provides input), I = Informed (kept updated)

### F.2 Strategic Decisions

| Decision | PS | NDHSC | DHDD-CD | PDGA | MoF | RDIP |
|----------|-----|-------|---------|-------|-------|--------|
| Approve D7 Roadmap | A | R | C | C | C | I |
| Approve investment >USD 50K | I | A | R | C | C | I |
| Endorse Digital Health Strategy | A | R | C | C | I | I |
| Wave transition go/no-go | I | A | R | C | C | C |
| Architecture design decisions | I | A | R | C | I | I |
| Government budget allocation for digital health | I | C | C | I | A | I |
| Cross-sectoral coordination (G-Cloud, broadband) | I | C | C | A | I | R |
| Donor funding alignment | I | A | R | I | C | C |
| Emergency escalation (system failure) | A | I | R | C | I | I |

### F.3 Operational Activities

| Activity | DHDD-CD | DHDD-AS | DHDD-DG | DHDD-SO | DHDD-PC | DHDD-CB | TWG-AI | TWG-DS | TWG-IC | NDHSC |
|----------|---------|---------|---------|---------|---------|---------|--------|--------|--------|-------|
| Architecture compliance review | A | R | C | C | I | I | C | I | I | I |
| Data sharing agreement approval | A | C | R | I | I | I | I | C | I | I |
| System deployment execution | A | C | I | R | C | I | C | I | I | I |
| Integration flow design | A | R | C | C | I | I | R | C | I | I |
| Initiative planning and tracking | A | C | C | C | R | C | I | I | I | I |
| Workforce training delivery | A | I | I | I | C | R | I | I | C | I |
| Data quality monitoring | A | I | R | C | I | I | I | R | I | I |
| Security incident response | A | C | I | R | I | I | I | I | I | I |
| Risk register maintenance | A | C | C | C | R | C | C | C | C | I |
| Quarterly KPI dashboard | A | C | C | C | R | C | I | I | I | R (review) |
| Annual EA maturity assessment | A | R | C | C | C | I | C | C | I | R (review) |
| Stakeholder communication | A | I | I | I | R | I | I | I | I | I |
| Budget management | A | I | I | I | R | I | I | I | I | I |
| Donor reporting | A | I | I | I | R | I | I | I | I | C |
| G-Cloud migration planning | A | R | C | R | C | I | R | I | I | I |
| eCRVS vendor engagement | A | R | C | C | C | I | R | I | I | C |

### F.4 Wave-Specific RACI

| Wave 1 Initiative | Accountable | Responsible | Consulted | Informed |
|-------------------|------------|-------------|-----------|----------|
| W1-01 Governance | PS | DHDD-CD | NDHSC, PDGA | All directorates |
| W1-02 Strategy | NDHSC | DHDD-CD | WHO, DPI | All partners |
| W1-03 Data Governance | DHDD-CD | DHDD-DG | TWG-DS, DPI | All system owners |
| W1-04 DHIS2 Strengthen | DHDD-CD | DHDD-SO | HISP regional node, DPH | TWG-AI |
| W1-05 MPI Pilot | DHDD-CD | DHDD-AS | TWG-AI, WHO | NDHSC |
| W1-06 HIE/eCRVS Integration | DHDD-CD | DHDD-AS | TWG-AI, MoDE | NDHSC, RDIP |
| W1-07 eLMIS Rollout | DHDD-CD | DHDD-SO | Pharma Dir, GF | TWG-IC |
| W1-08 Connectivity Bridge | DHDD-CD | DHDD-SO | RDIP, PDGA | NDHSC |
| W1-09 Cloud Spoke | DHDD-CD | DHDD-SO | PDGA, TWG-AI | RDIP |
| W1-10 Workforce | DHDD-CD | DHDD-CB | TWG-IC, WHO | All directorates |
| W1-11 EHSSP Transition | DHDD-CD | DHDD-PC | EHSSP PMU, DPI | NDHSC, RDIP |

---

## Appendix G: Glossary

| Term | Definition |
|------|-----------|
| **Architecture Compliance Review** | Formal assessment by DHDD that evaluates whether a proposed digital health investment aligns with the target architecture (D6) design decisions, integration principles, and technology standards. Mandatory for all investments exceeding USD 50,000. |
| **Architecture Maturity** | A score (1–5 scale) measuring an organisation's enterprise architecture capability across governance, business, data, application, technology, and integration dimensions. Assessed using the PDGA EA Maturity Assessment methodology aligned with NASCIO frameworks. |
| **Building Block** | A reusable ICT component (e.g., Identity, Payment, Digital Registries) defined by the GovStack framework and adapted for the Progressa context through the PAERA framework. |
| **CAPEX (Capital Expenditure)** | One-time establishment costs including system design, implementation, hardware procurement, initial training, and platform deployment. Typically donor-funded. |
| **Change Champion** | A facility-level staff member (typically a clinician or data officer) given advanced training who provides peer support during system transitions. Ratio of 1 champion per 10–15 clinicians. |
| **Clinical Informatics Champion** | A clinician at an EHR-equipped facility who receives enhanced training (40 hours) and serves as first-line support, workflow design contributor, and adoption advocate for the EHR. |
| **Container** | A lightweight, portable software package (Docker) that bundles application code with its dependencies for consistent deployment across environments. Prerequisite for G-Cloud (Kubernetes) hosting. |
| **Critical Path** | The sequence of dependent initiatives where delay in any single initiative delays the overall wave completion. Wave 1 critical path: Governance → Hosting → MPI → First Integration Flow. |
| **Data Classification Tiers** | Four-level scheme for health data: Tier 1 (Public — aggregate statistics), Tier 2 (Internal — operational reports), Tier 3 (Confidential PII — patient demographics, insurance data), Tier 4 (Restricted Clinical — diagnoses, lab results, treatment records). |
| **Data Sharing Agreement (DSA)** | A formal agreement between two or more system owners governing the conditions, purposes, security requirements, and responsibilities for data exchange through the HIE. |
| **Data Steward** | A role responsible for data quality, standards compliance, and lifecycle management within a defined data domain. Operates at national (DHDD), regional (RHDO), or facility level. |
| **Design Decision (DD)** | One of 12 architectural decisions documented in D6 that constrain and guide implementation choices. Examples: DD-01 (OpenHIE reference architecture), DD-07 (open-source technology stack), DD-09 (offline-first design). |
| **Digital Health and Data Directorate (DHDD)** | The operational unit within MoH responsible for all digital health systems, data governance, integration, workforce development, and security. Comprises 6 functional areas and 14 positions at full staffing. |
| **FHIR (Fast Healthcare Interoperability Resources)** | An HL7 international standard for exchanging healthcare data electronically. Uses RESTful web services and modern web technologies. FHIR R4 is the target version for all MoH HIE integration. |
| **Funding Cliff** | The abrupt termination of donor programme funding (e.g., EHSSP closure August 2025) that creates a gap before successor funding is available, threatening operational continuity of funded systems. |
| **G-Cloud (Government Cloud)** | The planned Progressa sovereign cloud platform, to be deployed under RDIP, providing Kubernetes-based container orchestration with hub-and-spoke architecture for government systems. |
| **Gap** | A measurable difference between the current state (AS-IS, documented in D5) and the target state (TO-BE, defined in D6) across any BDAT domain. Each gap has an ID, severity rating, and priority classification. |
| **Golden Record** | The single, authoritative patient identity record maintained by the MPI (OpenCR), created by merging and deduplicating identity information from multiple source systems. |
| **Health Information Exchange (HIE)** | The technical platform (OpenHIM) that mediates all inter-system data flows within the health sector. Provides message routing, data transformation, audit logging, and API management. |
| **Integration Flow** | A defined, automated data exchange pathway between two or more systems, mediated through the HIE. Six priority flows are defined in D6, implemented across Waves 1–3. |
| **Integration Maturity** | A score (1–5 scale) measuring the sophistication of an organisation's system integration: Level 1 (Ad-hoc), Level 2 (Managed), Level 3 (Defined/API-based), Level 4 (Quantitatively Managed), Level 5 (Optimising). |
| **Master Patient Index (MPI)** | A system (OpenCR) that maintains a canonical registry of patient identities, performing matching (deterministic on strong IDs, probabilistic on demographics) to produce a unified "golden record" for each patient. |
| **Mediator** | A software component within OpenHIM that performs data transformation, routing, or orchestration for a specific integration flow. Each priority flow requires one or more custom mediators. |
| **Ministerial Order** | An administrative instrument signed by the Minister (or Permanent Secretary by delegation) that establishes governance bodies, directorates, or policy frameworks within MoH. Does not require legislative action. |
| **OPEX (Operational Expenditure)** | Recurring annual costs including staff salaries, hosting fees, connectivity, system maintenance, and training. Must be absorbed into government recurrent budget for sustainability. |
| **Offline-First Design** | An application design principle (D6 DD-09) requiring all frontline health applications to store data locally and synchronise with central servers when connectivity is available. Systems must function for ≥7 days without connectivity. |
| **OpenHIE** | An open-source framework for health information exchange, defining architecture patterns, component roles, and workflows for national health information systems. MoH's target architecture follows OpenHIE reference patterns. |
| **OPEX Absorption** | The process by which government recurrent budget progressively assumes responsibility for operational costs previously funded by donor project budgets. Target: ≥50% government share by 2033. |
| **Transition Architecture** | A stable, operational intermediate architecture state between AS-IS and TO-BE. Three transition states are defined (end W1, end W2, end W3), each delivering value independently. |
| **Wave** | A phased implementation period with a distinct strategic objective. Wave 1 (2025–2026): Govern, Connect, Register. Wave 2 (2027–2029): Digitise, Integrate, Scale. Wave 3 (2030–2033): Optimise, Sustain, Innovate. |

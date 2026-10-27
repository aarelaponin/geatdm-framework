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

---

*End of D7 Front Matter and Appendices*

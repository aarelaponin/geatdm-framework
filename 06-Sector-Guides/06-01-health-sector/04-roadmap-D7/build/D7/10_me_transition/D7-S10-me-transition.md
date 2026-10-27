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

*End of Sections 9–10 — Monitoring and Evaluation Framework; Transition Architecture*

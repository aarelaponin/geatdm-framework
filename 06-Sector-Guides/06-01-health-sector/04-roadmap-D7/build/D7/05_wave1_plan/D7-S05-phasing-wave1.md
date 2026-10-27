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

*End of Section 4 — Phasing Strategy and Wave 1 Detailed Plan*
*Section 5 (Wave 2 and Wave 3 Plans) continues in Task 06.*

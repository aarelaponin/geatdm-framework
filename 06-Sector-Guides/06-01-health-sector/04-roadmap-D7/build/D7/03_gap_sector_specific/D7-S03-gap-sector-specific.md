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

*End of Section 2.2 — Sector-Specific (Health) Component Gaps*
*Section 3 (Solution Architecture and Work Packages) continues in Task 04.*

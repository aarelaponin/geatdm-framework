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

*End of Section 3 — Opportunities and Solutions*
*Section 4 (Work Packages and Transition Architectures) continues in Task 05.*

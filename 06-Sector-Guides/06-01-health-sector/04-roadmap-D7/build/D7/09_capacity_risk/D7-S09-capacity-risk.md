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

*End of Section 7 (Capacity Building Roadmap) and Section 8 (Risk Management)*

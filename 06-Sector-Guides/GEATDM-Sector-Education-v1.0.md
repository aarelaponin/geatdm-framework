# GEATDM Education Sector Guide

## Practitioner's Handbook for Education Target Architecture

**Document:** GEATDM-Sector-Education-v1.0
**Part of:** Sector Guides
**Version:** 1.0
**Date:** May 2026
**Status:** Released
**License:** Creative Commons Attribution 4.0

---

## Document Control

| Attribute | Value |
|-----------|-------|
| Document ID | GEATDM-Sector-Education |
| Title | GEATDM Education Sector Guide |
| Version | 1.0 |
| Date | May 2026 |
| Status | Released |
| Authors | FiscalAdmin OÜ |
| Reviewers | TBD |
| License | CC-BY 4.0 |

### Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | May 2026 | Initial release. |

---

## Table of Contents

- Section 1: Education Sector Overview
- Section 2: Education Capability Architecture
- Section 3: Education Application Architecture
- Section 4: Education Data Architecture
- Section 5: Education Process Architecture
- Section 6: Building Blocks for Education
- Section 7: Implementation Path — the Progressa Worked Example

---

# Section 1: Education Sector Overview

## 1.1 The education sector in GEATDM organisation-type terms

The education sector spans all three GEATDM organisation types, similar to health but with two distinguishing features. First, the boundary between policy (PDU) and regulation (RA) is often less sharp than in health, because in many countries the Ministry of Education performs both roles directly. Second, the SDA layer is unusually broad: it includes thousands of schools, hundreds of district education offices, dozens of higher-education institutions, and (in countries with strong vocational systems) a parallel TVET sector. The practitioner running an education-sector EA has to map this breadth onto a manageable set of GEATDM Reference Architectures.

| GEATDM type | Typical education-sector entity | Reference Architecture |
|-------------|--------------------------------|-----------------------|
| **PDU — Policy Development Unit** | Ministry of Education (also Youth, Skills, Higher Education in some countries); sub-national education authorities where federal or devolved | T25 PDU RA |
| **RA — Regulatory Agency** | National Examinations Authority; Quality Assurance / Accreditation Council; Teacher Registration Council; School Inspectorate (where independent of MoE) | T35 RA RA |
| **SDA — Service Delivery Authority** | Public school network (operated centrally where centralised, by district authorities where devolved); higher education institutions; vocational training institutes; district education offices | T47 SDA RA |
| **State Registry** | National Learner Registry; Teacher Registry; School Facility Registry (anchored on Giga School data); Digital Credentials Authority register | PAERA Annex A1.2.5 |
| **Horizontal System** | Education Management Information System (EMIS); national learning content repository; national scholarship platform | PAERA Annex A1.2.6 |
| **Natural Digital Environment** | Learner / parent portal; teacher portal; school management portal | PAERA Annex A1.2.7 |

The implication for the EA practitioner is the same as in health: a national education EA cannot be produced as a single SDA architecture. It is produced as a portfolio. The portfolio is held together by a small number of cross-cutting elements — the National Learner Registry as the spine of clinical-style data, the National ID for citizen identification, the Information Mediator BB (X-Road or equivalent) for cross-organisation exchange, and the fragmented semantic interoperability stack described in Section 4.

## 1.2 Education sector mission and functions

A national education system fulfils five mission categories.

**Education service delivery.** The day-to-day work of teaching and learning. Delivered primarily by SDAs (schools, higher education institutions, vocational institutes). Supporting digital systems are Student Information Systems (SIS), Learning Management Systems (LMS), school administrative systems, learning content repositories, and teacher tools.

**Educational quality and assessment.** Examinations, accreditation, inspection, performance monitoring of learners and institutions. Delivered by RAs (Examinations Authority, Accreditation Council, Inspectorate). Supporting digital systems are examination platforms, accreditation registers, inspection reporting platforms, and learner-assessment data warehouses.

**Education system stewardship.** Policy development, system financing, planning, resource allocation, and the digital education strategy. Delivered by PDUs (Ministry of Education). Supporting digital systems are EMIS for statistics and planning, the digital education strategy platform, and policy modelling tools.

**Education system regulation.** Teacher registration and discipline; school licensing; curriculum approval; private-provider regulation. Delivered primarily by RAs (Teacher Registration Council, School Inspectorate, accreditation councils) and by the Ministry where regulators are not independent.

**Cross-sectoral education functions.** School health (intersects health sector), school feeding (intersects social protection and agriculture), school transport, school safety, parental engagement, school connectivity (intersects ICT/digital sector — this is where Giga's mandate sits). These are not contained within the education sector EA but require explicit cross-sector data exchange.

## 1.3 Key stakeholders

The education sector has the broadest stakeholder set after health, and a population dimension that is unusual: roughly half of every country's citizens are either current learners, current teachers, or parents/guardians of learners. The Stakeholder Engagement Method Guide (T59) tier model applies, with the typical mapping:

| Tier | Education-sector stakeholders | Engagement model |
|------|-------------------------------|------------------|
| **Tier 1 — Champions** | Ministry of Education (PDU); Ministry of Finance (cross-government); Ministry of ICT / Digital Authority; the largest examinations / assessment authority (RA) where it is independent of MoE | Weekly working sessions; bi-weekly Steering Committee; quarterly Cabinet briefing |
| **Tier 2 — Early Adopters** | National Learner Registry authority (where established); Teacher Registration Council; the country's two or three largest universities (when in scope); the Ministry of Higher Education (if separate); national TVET authority | Bi-weekly working sessions; sector workshops |
| **Tier 3 — Observers** | School Inspectorate; private-school associations; teacher unions; parent-teacher associations; international development partners (UNICEF, UNESCO country office, GPE, FCDO, USAID, World Bank); civil-society organisations focused on education | Monthly bulletin; quarterly community-of-practice |

Citizen / learner stakeholders (and their parents or guardians, in the case of minors) are addressed through formal consultation channels in Tier 2 working sessions and through periodic public consultation on major architectural decisions (the National Learner Registry consent model is typically the most visible). Their primary architectural representation is the learner-centricity principle and the consent management framework.

Teachers, school leaders, and other education professionals are addressed through professional-society and union representation in Tier 2 and through teacher focus-groups during ADAPT phase. Their primary architectural representation is usability and workflow design.

International development partners deserve specific attention in education. The sector receives substantial donor funding in low- and middle-income countries (Global Partnership for Education, World Bank human-capital lending, FCDO and USAID programmes, UNICEF, EU Erasmus+ in adjacent regions). This shapes the budget cycle (PAERA §4.5) and the procurement environment (T15 §3.4). The PLAN phase explicitly accounts for donor-funded versus state-budget components and the sustainability commitment per PAERA §4.5 Budget.

## 1.4 Architectural principles for education (sector-specific extensions to T12)

The 33 principles in GEATDM-WP1-T12 EA Principles apply to education as to any sector. Three principles require sector-specific elaboration.

**Principle 1 — Learner-centricity and data ownership (extends BA-01 Customer-Centric Service Design).** The learner is the primary subject of education-sector data. For minors, data subject rights are exercised by parents or legal guardians until the learner reaches the age of majority defined by national law (commonly 16, 18, or 21 depending on jurisdiction and data category). Architecturally, this requires a National Learner Registry keyed to citizen identity (PAERA §3.4.4), parent or guardian linkage for learners under the age of majority, learner access logs visible to the learner and (for minors) to the parent or guardian, and a consent management framework that distinguishes minor and adult data subjects.

**Principle 2 — Privacy by design and security by default (extends DA-05 Privacy and Data Protection by Design).** Education data is a special category of personal data under most national privacy regimes. Children's data carries additional protections in many jurisdictions. The architectural treatment is the same in shape as health (encryption in transit and at rest, role-based access control, comprehensive audit logging, data minimisation, explicit consent for secondary use) and additionally requires age-appropriate consent flows and parental-consent workflows.

**Principle 3 — Open standards and reuse (extends DA-06 Data Sharing and Interoperability).** Education has a fragmented semantic interoperability landscape rather than a comprehensive standard equivalent to FHIR for health (Section 4.2 below). The architectural default is to use the canonical sub-layer for each entity — Giga School for school identity and connectivity, 1EdTech OneRoster for rostering, W3C Verifiable Credentials and Europass / European Learning Model for credentials, CEDS as a data-definition reference — and to compose them, rather than to build a country-specific complete data model.

## 1.5 International standards

The education sector standards landscape is wider but shallower than health. There is no single comprehensive standard analogous to HL7 FHIR. The standards listed below are the working set; not all are deployed in every country.

### 1.5.1 Education classification and statistics standards

| Standard | Issuing body | Relevance |
|----------|--------------|-----------|
| **UNESCO ISCED 2011** | UNESCO Institute for Statistics | International Standard Classification of Education. Defines education levels (ISCED 0–8: pre-primary through doctoral) and orientations (general, vocational). The reference for cross-country comparability and SDG-4 reporting. |
| **UNESCO ISCED-F 2013** | UNESCO Institute for Statistics | Fields of education and training classification. |
| **CEDS (Common Education Data Standards)** | US Department of Education | Comprehensive data-definition reference. US-centric; useful as a canonical source even in countries that do not adopt it directly. |
| **OECD INES indicator framework** | OECD | Indicators for the international comparison of education systems. |

### 1.5.2 Learner, teacher, and rostering standards

| Standard | Issuing body | Relevance |
|----------|--------------|-----------|
| **1EdTech OneRoster** | 1EdTech (formerly IMS Global) | Rostering of learners, teachers, classes, and enrolments. REST-API based. Mature for K–12. |
| **1EdTech CASE** | 1EdTech | Competencies and Academic Standards Exchange. Machine-readable representation of curricula and learning standards. |
| **schema.org / Person, EducationalOrganization, Course** | W3C / schema.org community | Web-discoverable representation of education entities. |

### 1.5.3 Digital credentials standards

| Standard | Issuing body | Relevance |
|----------|--------------|-----------|
| **W3C Verifiable Credentials Data Model** | W3C | The canonical standard for issuing, holding, and verifying digital credentials (diplomas, certificates, micro-credentials). Used by Digital Credentials Authority. |
| **W3C Decentralized Identifiers (DID)** | W3C | Self-sovereign identifiers complementing VC. |
| **Europass / European Learning Model (ELM)** | European Commission | The EU implementation profile of W3C VC for education credentials. Authoritative reference even outside the EU. |
| **Open Badges 3.0** | 1EdTech | The credentials profile aligned with W3C VC. |
| **MicroCredentials Recommendation** | UNESCO / Council of Europe | Policy framework for micro-credentials; not a technical standard but referenced in implementations. |

### 1.5.4 School connectivity and facility standards

| Standard | Issuing body | Relevance |
|----------|--------------|-----------|
| **Giga School (Project Connect)** | ITU / UNICEF | The canonical reference for school identity and connectivity attributes. Schema includes school identifier, country, administrative levels, location, school type, enrolment range, connectivity status. Used directly via the Project Connect API. |
| **`gigaspatial` toolkit** | ITU / UNICEF | Reference toolkit for working with Giga School data. |
| **GS1 GLN** | GS1 | Global Location Number. Used for facility identification in supply-chain contexts (school feeding, materials distribution); referenced where cross-sector. |

### 1.5.5 Learning content and tool integration

| Standard | Issuing body | Relevance |
|----------|--------------|-----------|
| **1EdTech LTI 1.3 + Advantage** | 1EdTech | Learning Tools Interoperability. The canonical standard for embedding third-party content and tools in learning platforms. Mature, widely deployed. |
| **1EdTech Caliper Analytics** | 1EdTech | Learning analytics event model. |
| **1EdTech QTI (Question and Test Interoperability)** | 1EdTech | Assessment item and test exchange. |
| **1EdTech Common Cartridge** | 1EdTech | Content package format. |
| **xAPI / cmi5** | ADL Initiative | Learning experience tracking. Niche relative to LTI; used in some corporate learning, niche in K–12. |
| **SCORM** (legacy) | ADL Initiative | Older content packaging standard; still widely deployed; migrate to LTI / Common Cartridge. |
| **UNESCO Open Educational Resources guidance** | UNESCO | Policy guidance on OER; not a technical standard. |

### 1.5.6 Privacy, accessibility, and quality standards

| Standard | Issuing body | Relevance |
|----------|--------------|-----------|
| **WCAG 2.1 AA** | W3C | Web accessibility. Mandatory for public-sector education portals in many jurisdictions. |
| **GDPR / UNCRC Article 16** | EU / UN | Personal data protection; children's right to privacy. Authoritative even outside the EU. |
| **ISO/IEC 23988:2007** | ISO | IT for learning, education, and training; quality requirements for assessment delivery. |
| **OECD AI Principles applied to Education** | OECD | Policy guidance on AI in education. |

### 1.5.7 Reference architectures and policy frameworks

| Document | Issuing body | Use |
|----------|--------------|-----|
| **OECD EdTech 2023 — OECD Digital Education Outlook** | OECD | Policy reference for digital-education investment. |
| **World Bank EdTech Hub publications** | World Bank / FCDO / Jacobs Foundation | Practical guidance on EdTech investment in low- and middle-income contexts. |
| **UNICEF Foundational Learning ICT4D guidance** | UNICEF | Strategy and architecture guidance. |
| **GEATDM-Sector-Health-v1.0 §1.5** | FiscalAdmin OÜ | Cross-reference for the standards-management discipline (selection framework, conformance testing) which transfers from health. |

---

# Section 2: Education Capability Architecture

## 2.1 PDU/RA/SDA capability mapping for education

The PDU, RA, and SDA Reference Architectures define the generic capabilities. The education sector inherits these and adds sector-specific capabilities. The taxonomy below is the starting point; tailoring follows in the ADAPT phase.

### 2.1.1 PDU capabilities — Ministry of Education

Inherits all 72 PDU capabilities from T25. Adds 12 education-specific capabilities:

| ID | Capability | Description |
|----|-----------|-------------|
| E-PDU-01 | National Education Strategy Development | Multi-year national education strategy and digital education strategy. |
| E-PDU-02 | Education System Performance Monitoring | SDG-4 indicators, UNESCO INES, country-specific indicators. |
| E-PDU-03 | Teacher Workforce Planning | National teacher workforce strategy, training pipeline, deployment planning. |
| E-PDU-04 | Education Financing Policy | Public, private, and external financing of education; fee policy. |
| E-PDU-05 | Universal Education Access Policy | Access targets, equity policy, special-needs policy, free-education guarantees. |
| E-PDU-06 | Curriculum Policy | National curriculum framework, syllabus approval, learning standards. |
| E-PDU-07 | Education Standards and Accreditation Policy | Quality standards, accreditation policy, standards-setting authority. |
| E-PDU-08 | Digital Education Strategy | National digital-education strategy aligned with GEATDM and PAERA; school connectivity policy aligned with Giga. |
| E-PDU-09 | School Health and Safety Policy | School health programmes, child protection, safety policy. |
| E-PDU-10 | Lifelong Learning and TVET Policy | Vocational training, micro-credentials, recognition of prior learning. |
| E-PDU-11 | Cross-Sectoral Education Policy | Determinants of education (nutrition, transport, water/sanitation, health). |
| E-PDU-12 | International Education Engagement | UNESCO, regional education bodies, cross-border recognition agreements, mobility programmes. |

### 2.1.2 RA capabilities — Education regulators

Where the country has independent regulators (the GEATDM-recommended pattern), the principal RAs are the Examinations Authority, the Teacher Registration Council, and the Quality Assurance / Accreditation Council. Where these are functions within the Ministry of Education, the same capabilities apply but are exercised within the PDU.

**National Examinations Authority** (PNEA in Progressa). Inherits all PDU + RA capabilities from T35. Adds 8 sector-specific capabilities:

| ID | Capability | Description |
|----|-----------|-------------|
| E-EXA-01 | Examination Design and Standards | Setting the syllabus and standards for end-of-level and qualification examinations. |
| E-EXA-02 | Examination Item Bank Management | Authoring, classification, and security of examination items. |
| E-EXA-03 | Examination Administration | Registration of candidates, scheduling, invigilation, security. |
| E-EXA-04 | Examination Marking | Marking workflow, double-marking, moderation. |
| E-EXA-05 | Result Issuance and Certification | Result publication, certificate generation (paper and digital). |
| E-EXA-06 | Examination Quality Assurance | Standardisation across years and across centres; psychometric analysis. |
| E-EXA-07 | Cross-Border Recognition | Recognition of foreign qualifications; outbound recognition support. |
| E-EXA-08 | Vocational Qualification Framework Operation | Vocational examinations and certification; recognition of prior learning. |

**Teacher Registration Council** (or equivalent). Inherits all PDU + RA capabilities. Adds 6 sector-specific capabilities:

| ID | Capability | Description |
|----|-----------|-------------|
| E-TRC-01 | Teacher Initial Registration | Initial registration of teachers. |
| E-TRC-02 | Continuing Professional Development | CPD compliance tracking. |
| E-TRC-03 | Disciplinary Process | Investigation and adjudication of complaints. |
| E-TRC-04 | Specialty Recognition | Subject-specialist registration. |
| E-TRC-05 | Cross-Border Mobility | Recognition of foreign-trained teachers; outbound recognition. |
| E-TRC-06 | Teacher Performance Evaluation Framework | Performance management framework for the public-school teacher workforce. |

**Quality Assurance / Accreditation Council** (where independent). Inherits all PDU + RA capabilities. Adds 6 sector-specific capabilities:

| ID | Capability | Description |
|----|-----------|-------------|
| E-QAC-01 | Institutional Accreditation | Accreditation of education institutions. |
| E-QAC-02 | Programme Accreditation | Accreditation of specific programmes (especially HE and TVET). |
| E-QAC-03 | School Inspection | Routine and event-driven school inspection. |
| E-QAC-04 | Performance Reporting | Public reporting of institution and programme performance. |
| E-QAC-05 | Accreditation Standards Development | Setting of accreditation standards. |
| E-QAC-06 | Cross-Border Quality Recognition | Mutual recognition of accreditation with regional and international peers. |

### 2.1.3 SDA capabilities — Education service-delivery entities

Public school network or district-level delivery. Inherits all PDU + RA + SDA capabilities. Adds 16 sector-specific capabilities:

| ID | Capability | Description |
|----|-----------|-------------|
| E-NSC-01 | Learner Enrolment and Registration | Link learners to the National Learner Registry. |
| E-NSC-02 | Class and Cohort Management | Class formation, learner-teacher allocation, cohort tracking. |
| E-NSC-03 | Curriculum Delivery | Day-to-day teaching against the national curriculum. |
| E-NSC-04 | Continuous Assessment and Reporting | Classroom assessment, internal grading, parent reporting. |
| E-NSC-05 | Attendance Management | Daily attendance, absence follow-up. |
| E-NSC-06 | Teacher Deployment | Posting, transfers, leave, absence cover. |
| E-NSC-07 | Learning Resource Management | Textbook procurement, distribution, and inventory; digital content management. |
| E-NSC-08 | School Operations | Timetabling, examinations coordination, infrastructure. |
| E-NSC-09 | School Health and Nutrition | School-feeding programmes, school health screening, vaccination linkage. |
| E-NSC-10 | Parent and Guardian Engagement | Parent-school communication, formal consent capture, guardian portals. |
| E-NSC-11 | Examinations Coordination | Coordination with the Examinations Authority for delivery at the school level. |
| E-NSC-12 | Special Educational Needs | Identification and support of learners with special needs. |
| E-NSC-13 | Counselling and Welfare | Learner welfare and child-protection workflow. |
| E-NSC-14 | Cross-School Transition | Learner transfer between schools, between phases (primary → secondary → post-secondary). |
| E-NSC-15 | School-Level Reporting | EMIS reporting, fiscal reporting, performance reporting. |
| E-NSC-16 | School Fundraising and Procurement | Fees, donations, in-kind contributions, school-level procurement. |

Higher Education Institution. Inherits all PDU + RA + SDA capabilities. Adds 12 sector-specific capabilities:

| ID | Capability | Description |
|----|-----------|-------------|
| E-HEI-01 | Application and Admission | Application receipt, evaluation, admission decisions. |
| E-HEI-02 | Programme Design and Approval | Internal programme design and approval, alignment with QAC requirements. |
| E-HEI-03 | Academic Records Management | Course registration, credit accumulation, transcript generation. |
| E-HEI-04 | Examination Coordination | Internal examinations and external moderation. |
| E-HEI-05 | Research Records | Research-grant management, research-output records, research-ethics workflow. |
| E-HEI-06 | Student Welfare | Counselling, accommodation, financial-aid administration. |
| E-HEI-07 | International Mobility | Exchange programmes, international student admission, recognition of prior learning. |
| E-HEI-08 | Library Services | Library catalogue, loans, e-resources, inter-library loan. |
| E-HEI-09 | Alumni and Employability | Alumni records, graduate-tracking surveys, employer engagement. |
| E-HEI-10 | Continuing Education | Adult education, micro-credentials, executive education. |
| E-HEI-11 | Quality Assurance | Internal quality assurance, accreditation submission. |
| E-HEI-12 | Public Engagement | Public outreach, third-mission activity. |

## 2.2 Capability priorities by maturity level

The education sector benefits from the same maturity-level discipline as health. The four maturity levels, adapted from the e-Health Reference Model and from OECD / World Bank digital-education guidance, are:

| Maturity Level | Definition | Indicative national context |
|---------------|-----------|------------------------------|
| **Level 1 — Initial / Ad-Hoc** | Paper-based learner records dominate; EMIS partial; no national learner registry; ad-hoc credential issuance | Many low-income and lower-middle-income countries today |
| **Level 2 — Managed / Fragmented** | EMIS operational at district level; partial digitisation in higher-education institutions; first attempts at a National Learner Registry | Lower-middle-income countries with active digital-education programmes |
| **Level 3 — Defined / Integrated** | National Learner Registry operational; FHIR-equivalent semantic stack adopted; cross-system data exchange via Information Mediator BB; digital credentials issued to all higher-education graduates | Upper-middle-income countries; pilot deployments in low-income contexts |
| **Level 4 — Optimized / Innovating** | Continuous learning trajectories captured digitally; AI-assisted analytics for personalised learning; cross-border recognition automated; lifelong-learning records portable | OECD reference implementations (Estonia, Finland); aspirational for most countries |

The capability priorities follow:

| Maturity Level | Wave | Capability priorities |
|----------------|------|----------------------|
| Level 1 | Pre-Wave 1 (mobilisation) | E-PDU-01, E-PDU-08; E-NSC-01 (basic learner registration); national EMIS Wave-0 |
| Level 2 | Wave 1 (0–18 months team-effort) | E-NSC-02, E-NSC-04, E-NSC-05, E-NSC-15; E-EXA-03 (examination administration); E-TRC-01 (teacher registration); National Learner Registry Wave 1 |
| Level 3 | Waves 2–3 (18–48 months) | E-NSC-09, E-NSC-10, E-NSC-12, E-NSC-14; E-EXA-05 (digital credential issuance); E-QAC-01, E-QAC-03; E-HEI-01, E-HEI-03, E-HEI-09 |
| Level 4 | Wave 4 (48+ months) | E-PDU-10 (lifelong learning); E-HEI-06, E-HEI-07, E-HEI-10; advanced analytics and AI capability across the architecture |

Wave allocation is indicative. Country context (existing capability, donor commitments, political priorities, school connectivity at start of programme) shifts it.

---

# Section 3: Education Application Architecture

## 3.1 Core systems landscape

The education sector core systems landscape is broader than health, with a sharper distinction between system-of-record and learning-delivery platforms.

| Application domain | Function | Typical product class |
|--------------------|----------|----------------------|
| **EMIS — Education Management Information System** | National statistics, planning, performance monitoring | DHIS2 with education modules; OpenEMIS; commercial EMIS; bespoke national systems |
| **National Learner Registry (NLR)** | Authoritative learner identity and longitudinal record | Country-specific, typically built on OpenEMPI-style MPI patterns; integrated with National ID |
| **SIS — Student Information System** | School- or HEI-level student records: enrolment, attendance, grades | Open-source (OpenSIS, Fedena) and commercial (PowerSchool, Infinite Campus); HEI-level (Banner, PeopleSoft Campus, Anthology) |
| **LMS — Learning Management System** | Content delivery, assignments, forum, assessment | Moodle, Open edX, Canvas, Blackboard; LMS-as-a-service offerings |
| **Examinations Platform** | Examination registration, item bank, marking workflow, certificate issuance | Country-specific; commercial platforms (Pearson, ETS); open-source (TAO) |
| **Digital Credentials Authority (DCA)** | Issuance, holding, and verification of digital credentials | Country-specific built on W3C VC; Europass for EU; Blockcerts and similar |
| **Teacher Management System** | Teacher registry, deployment, payroll-linked records | Often a function of EMIS or HRMS; some countries deploy dedicated systems |
| **Scholarship Platform** | Application, eligibility, disbursement | Built on Registration BB + Payment BB + Workflow BB; case-management low-code |
| **Library and Open Educational Resources Repository** | Library catalogue, OER repository | Koha (library); DSpace (institutional repository); national OER platforms |
| **Inspection Platform** | School and programme inspection workflow | Workflow BB on a low-code platform; commercial inspection products |
| **Parent and Guardian Portal** | Parental access to learner data, communication, consent | Built on Identity BB + portal framework |
| **Learner Portal** | Learner access to records, transcripts, credentials | Built on Identity BB + portal framework + Digital Wallet BB |
| **Education Data Warehouse and Analytics** | Cross-source analytics for policy, research, and operations | Configured open-source data platform (dbt + ClickHouse + Airflow style); bespoke analytical models |
| **National Curriculum Repository** | Authoritative curriculum, syllabi, learning objectives | Often built on 1EdTech CASE; can be a DSpace or content-management platform |
| **School Connectivity and Facility Registry** | Facility identification, location, connectivity status | The country's instance of Giga School data (Section 4); maintained via Project Connect API |
| **Examinations Item Bank** | Authoring, classification, security, and serving of examination items | Built on 1EdTech QTI; commercial item-bank products |

## 3.2 Application domain mapping to GEATDM organisation types

| GEATDM type | Typical applications |
|-------------|---------------------|
| PDU (Ministry of Education) | EMIS; education data warehouse; national dashboards; statistical platform; policy-modelling tools; school connectivity registry (Giga-aligned) |
| RA — Examinations Authority | Examinations Platform; Item Bank; certificate issuance; cross-border recognition database |
| RA — Teacher Registration Council | Teacher registry; CPD tracking; disciplinary case management |
| RA — Quality Assurance / Accreditation Council | Inspection Platform; accreditation register; performance reporting |
| SDA — Public school network | SIS at school level; LMS; library; school administration; parent portal; exam coordination |
| SDA — Higher Education Institution | HEI-level SIS; LMS; library; research-management; alumni-management; admissions |
| State Registry | National Learner Registry; Teacher Registry; School Facility Registry (Giga); Digital Credentials Authority register |
| Horizontal System | National scholarship platform; National Curriculum Repository; Learning Content / OER repository; Education Data Warehouse |
| Natural Digital Environment | Learner portal; parent portal; teacher portal |

The application-domain mapping is the input to procurement decomposition (T60 §6.3, T16 §3.5). Bundled "national e-education platform" procurements that span EMIS, NLR, SIS, LMS, examinations, and credentials are a Vendor-Driven Architecture Trap.

## 3.3 Integration patterns

Education-sector applications exchange data through a smaller set of canonical integration patterns than health, reflecting the fragmented semantic standards landscape.

### 3.3.1 OneRoster integration (rostering)

Where rostering is in scope (which is whenever an LMS or assessment platform needs to know which learners are in which classes with which teachers), 1EdTech OneRoster 1.2 is the canonical integration pattern. The SIS publishes OneRoster CSV or REST exports; the LMS consumes them; the examinations platform consumes them. OneRoster is well-tooled, mature, and vendor-neutral.

### 3.3.2 LTI 1.3 integration (content and tools)

Where third-party learning tools are embedded in the LMS, 1EdTech LTI 1.3 + LTI Advantage is the canonical integration pattern. LTI is to learning content what FHIR is to clinical data: a published, mature, vendor-neutral standard with many conformant implementations. Bespoke content-tool integration is an architectural anti-pattern.

### 3.3.3 W3C Verifiable Credentials integration (credentials)

Credentials issuance, holding, and verification follow the W3C VC Data Model. The Digital Credentials Authority issues VCs; the learner holds them in a digital wallet (Digital Wallet BB or Europass European Digital Identity Wallet); third parties verify them. Europass / European Learning Model is the EU implementation profile.

### 3.3.4 Information Mediator BB integration (cross-organisation)

Where the country operates an Information Mediator BB (X-Road or equivalent), education-sector applications integrate cross-organisation through the same bus. National Learner Registry exchange with civil registration, with social protection (scholarship eligibility), and with health (school health, vaccinations) runs through the bus. Cross-government integration follows the same pattern as the health sector.

### 3.3.5 Giga Project Connect integration (school identity)

The School Facility Registry is anchored on Giga Project Connect data. Applications that reference schools (NLR, EMIS, SIS, LMS, scholarship platform) reference the Giga `school_id` as the foreign key. Where the country participates in Giga, the country's Giga records are the authoritative source. Where it does not yet participate, the country maintains a local school registry with Giga-compatible schema so future integration is mechanical.

### 3.3.6 Legacy CSV and spreadsheet exchange (transitional)

In Maturity Level 1 and Level 2 contexts, much education-sector exchange is by CSV file or spreadsheet (typically Excel) rather than by API. The Strangler Fig pattern (T16 §5) treats these legacy exchanges as transitional: new exchanges use OneRoster, LTI, VC, and Information Mediator; existing CSV exchanges are wrapped with adapters that publish OneRoster or FHIR-equivalent at the boundary.

---

# Section 4: Education Data Architecture

## 4.1 Education data domains

A national education EA covers seven canonical data domains.

| Domain | Authoritative source | Semantic standard |
|--------|---------------------|-------------------|
| **Learner identity and demographics** | National Learner Registry (referencing civil registration and National ID) | OneRoster `User` (sub-type Learner); national identifier OID |
| **Teacher identity and demographics** | Teacher Registry | OneRoster `User` (sub-type Teacher); national professional ID |
| **School / institution directory** | School Facility Registry (Giga-anchored) | Giga School schema; supplemented with country fields |
| **Class and enrolment** | SIS (school-level) feeding NLR | OneRoster `Class`, `Enrollment`, `AcademicSession` |
| **Curriculum and learning objectives** | National Curriculum Repository | 1EdTech CASE |
| **Assessment and qualifications** | Examinations Platform; SIS for continuous assessment | 1EdTech QTI for items; W3C VC for resulting credentials |
| **Learning content and resources** | National OER Repository; LMS-level | LTI for tool integration; Common Cartridge / SCORM for content packaging |

## 4.2 The fragmented semantic interoperability stack

The education sector has no single comprehensive semantic interoperability standard analogous to FHIR for health. The space is fragmented across sub-domains, each with a canonical standard authoritative within its own scope. The architectural rule for the education-sector EA is to adopt the canonical sub-layer for each entity, not to invent a country-specific complete data model.

| Sub-domain | Canonical layer | Publisher | Maturity |
|-----------|-----------------|-----------|----------|
| Schools — location, type, connectivity | **Giga School (Project Connect)** | ITU / UNICEF | Operational, scaling |
| Student / teacher / class rostering | **1EdTech OneRoster** | 1EdTech | Mature, mostly K–12 |
| Learning content / tool interoperability | **1EdTech LTI 1.3 + LTI Advantage; Caliper; Common Cartridge** | 1EdTech | Mature |
| Credentials and diplomas | **W3C Verifiable Credentials + Europass / ELM** | W3C / European Commission | Maturing fast |
| Curriculum and standards alignment | **1EdTech CASE** | 1EdTech | Mature |
| Assessment items and tests | **1EdTech QTI** | 1EdTech | Mature |
| Learning experience tracking | **xAPI / cmi5** | ADL Initiative | Niche, mostly corporate L&D |
| Common data definitions | **CEDS** | US Department of Education | Mature, US-centric |

The implication is that an education-sector EA is a composition. The National Learner Registry is keyed by national identity (PAERA §3.4.4) and by OneRoster `sourcedId`; it carries OneRoster `User` attributes plus country-specific extensions; it references schools via Giga `school_id`; it references curriculum via CASE identifiers; its credential outputs follow W3C VC. None of these standards is comprehensive on its own; together they cover the operational data needs of a national education system.

## 4.3 Master Data Management — the National Learner Registry

The National Learner Registry (NLR) is the single most important architectural decision in a national education EA. It is the authoritative source of learner identity across the education system and serves as the foreign-key target for every record that references a learner — enrolment, attendance, assessment, credential, scholarship.

### 4.3.1 NLR architecture options

Three architectural options, similar in shape to the National Patient Index (Health §4.3.1):

| Option | Description | Suitable for |
|--------|-------------|-------------|
| **Option A — NLR is the National ID** | Learners use their National ID as their learner identifier. No separate education identifier. | Countries with mature digital National ID coverage (>90%) for the school-age population, and legal authorisation for cross-sector use. |
| **Option B — NLR references National ID** | Education system maintains a Learner Identifier; the NLR is keyed to the National ID for linkage to civil registration. | Most common model. Suitable for countries with National ID coverage 60–90% or legal restrictions on direct cross-sector use. |
| **Option C — NLR is independent** | Education system maintains its own learner identifier; National ID linkage is opportunistic. | Countries with low National ID coverage among children, or no functioning National ID system. Plan migration to Option B as National ID matures. |

The choice is a Wave 1 architectural decision recorded as an Architecture Decision Record (T13 governance, TK-30).

### 4.3.2 Specific challenges for learners

Three considerations distinguish NLR from NPI:

1. **Children may not have a National ID.** Birth registration in many countries does not produce a National ID until adolescence. The NLR architecture must accommodate provisional learner identifiers that are reconciled with the National ID once it is issued.
2. **Parental or guardian linkage.** For learners under the age of majority, the NLR carries a relationship to one or more parents or guardians (the parent record is also typically a National ID). Architecturally this is a relationship resource; OneRoster does not natively model it; a country-specific extension is typical.
3. **Multi-school enrolment over time.** A learner moves through pre-primary, primary, secondary, possibly TVET or higher education. The NLR holds the longitudinal record; individual schools see only their own period. Architecture must support enrolment history, transcripts, and credential aggregation.

### 4.3.3 Learner access logs

The NLR architecture specifies that every access to learner data is logged, and that the learner (for adults) or the parent/guardian (for minors) can view the access log. Same architectural pattern as the patient access log in health, with the additional consideration that logs concerning minor learners are accessible to parents/guardians until the age of majority.

## 4.4 Master Data Management — Teacher and Facility registries

Teacher Registry and School Facility Registry are smaller registries than the NLR but architecturally similar. The School Facility Registry is the country's instance of Giga School data (or Giga-compatible data where the country does not participate in Project Connect). The Teacher Registry is the authoritative source of teacher identity and qualification.

| Registry | Authoritative source | Foreign-key targets |
|----------|---------------------|---------------------|
| National Learner Registry | Ministry of Education (often delegated to a registry authority) | OneRoster `User`-Learner; National ID (where Option A or B); parent / guardian relationships |
| Teacher Registry | Teacher Registration Council | OneRoster `User`-Teacher; National ID; CPD records |
| School Facility Registry | Ministry of Education (alongside Giga participation where applicable) | Giga `school_id`; GS1 GLN where in supply-chain contexts; PAERA Annex A1.1.5 (Identity Pillar) where ID system identifies institutions |

A common implementation is for the country's Information Mediator BB to publish all three registries as services consumable by every education-sector application.

## 4.5 Consent and minor-specific provisions

Consent management in education has the additional complexity of minors. Architectural choices:

**Consent model.** Opt-in for most secondary uses; explicit parental consent for processing of children's data beyond the educational purpose; opt-out for routine educational processing where the legal basis is the public-task or contract performance.

**Age of majority transitions.** The architecture implements the gradual transition of consent rights from the parent / guardian to the learner. This is country-specific (commonly 16 for some categories of data, 18 for others, 21 in some jurisdictions) and requires age-aware consent flows.

**Data minimisation in inter-school transfer.** When a learner moves between schools, the NLR delivers only the data the receiving school needs for its current period, not the entire longitudinal record. The longitudinal record is held by the NLR and is accessible by the learner.

**Cross-border transfer.** Where a learner moves to a school in another jurisdiction, cross-border data transfer follows the country's privacy regime. The Europass / ELM model is the canonical example: learners hold their credentials in a personal digital wallet and present them across borders without intermediary databases.

---

# Section 5: Education Process Architecture

## 5.1 Core processes

A national education EA covers the following core processes.

| Process | Trigger | Outcome |
|---------|---------|---------|
| **Birth-linked learner pre-registration** | Civil registration of a birth | Provisional learner record created in the NLR; automated triggers for school-readiness age (typically 4–6 depending on country). |
| **First-time school enrolment** | Family selects a school for the learner | Learner registered against a school in the NLR; class assignment in the school's SIS. |
| **Learner transfer between schools** | Parent or guardian initiates transfer | Records transferred from previous SIS to receiving SIS; NLR longitudinal record updated. |
| **Continuous assessment and reporting** | School-defined cycle (term, semester) | Internal grades captured in SIS; reports transmitted to parents through the parent portal. |
| **Examinations administration** | Examinations Authority schedule | Candidates registered, examinations administered, marked, results published. |
| **Digital credential issuance** | Examinations result; HEI graduation | Credential issued by the Digital Credentials Authority as W3C VC; held in the learner's digital wallet. |
| **Scholarship application and award** | Eligibility criteria met (income, performance, programme) | Application captured, eligibility checked, award disbursed via Payment BB. |
| **Teacher deployment** | Recruitment cycle, transfer cycle, leave / absence | Teacher allocated to a school; payroll updated. |
| **School inspection** | Routine cycle, event-driven | Inspection workflow; report published; remediation tracking. |
| **Cross-border recognition** | Learner moves jurisdiction | Credential verified by destination jurisdiction via VC presentation. |
| **Learner transition to TVET, HEI, employment** | End of phase | Learner record handed over to the next-phase platform; longitudinal continuity preserved in the NLR. |

## 5.2 The learner journey end-to-end (Progressa worked example)

The learner journey illustrates how the architectural elements compose. The example below is set in Progressa (the imaginary demonstration country described in the KP outline) and tracks one learner from pre-school registration to first credential.

```
1. The learner is born in Akaba (Progressa's capital). Civil registration
   creates a National ID record at birth. The Ministry of Education's
   pre-registration trigger creates a provisional learner record in the
   PLR (Progressa Learner Registry), keyed by National ID, with
   age-derived eligibility for primary enrolment in 2030.

2. In 2030 the learner's parent enrols the learner in a primary school
   selected from the School Facility Registry (anchored on Giga School
   data). The school's SIS creates an OneRoster Enrollment;
   Linkup (Progressa's X-Road bus) propagates the enrolment to the PLR.
   The PLR record is now active; the SIS is the day-to-day source for
   continuous assessment.

3. The school operates on Joget DX 8.x with the GEATDM education
   configuration. Daily attendance, grades, parent communication,
   library lending all run on the same low-code platform. Where the
   school has connectivity (Giga's record shows under-connected status
   for this rural school), the SIS synchronises to the PLR daily;
   where connectivity is intermittent, the SIS operates offline-first
   and synchronises when bandwidth is available.

4. In 2036 the learner sits the end-of-primary examination. PNEA
   (Progressa National Examinations Authority) registers the candidate
   from the PLR; administers the examination; marks; and issues the
   result. The result is stored in the PLR as a longitudinal data
   element. PDCA (Progressa Digital Credentials Authority) issues a
   primary-completion credential as a W3C VC.

5. The learner transitions to lower-secondary school. Linkup carries the
   PLR record handover from the primary-school SIS to the
   lower-secondary SIS. The previous record remains in the PLR as part
   of the longitudinal history; the lower-secondary SIS sees the
   relevant subset. The credential issued by PDCA is held by the
   learner in the Progressa Digital Wallet (or by the parent until the
   learner turns 14, the country's age of digital majority for
   credentials).

6. In 2042 the learner completes upper-secondary, sits the
   school-leaving examination, and receives a school-leaving
   credential as a W3C VC. The learner can present the credential to
   any HEI or employer through the digital wallet.

7. In 2042 the learner applies to a Progressa university for an
   undergraduate programme in agricultural science. The HEI
   receives the credential by VC presentation. The learner's PLR
   record is handed over to the HEI's SIS for the period of the
   programme. The PLR retains the longitudinal record.

8. In 2046 the learner graduates with a bachelor's degree. PDCA
   issues the degree credential as a W3C VC, profile-conformant
   with Europass European Learning Model. The learner moves the
   credential to a personal digital wallet of their choice.

9. The learner can present the credential to employers in Progressa,
   to other African countries that participate in the African Union
   Continental Qualification Framework, and to any other jurisdiction
   that recognises W3C VC. Cross-border recognition is mechanical
   rather than paper-based.
```

The journey illustrates four architectural properties that were stated in the KP outline: (1) the National Learner Registry is the spine; (2) the fragmented semantic stack — Giga, OneRoster, W3C VC, CASE — is composed rather than replaced by a single standard; (3) the Information Mediator BB connects the actors; (4) the learner sees and controls the credential record through a Natural Digital Environment.

## 5.3 Examinations flow

The examinations workflow is the most operationally complex single process in the education sector. Its architectural shape:

1. **Item authoring.** Subject experts author examination items in the Item Bank, classified by curriculum (CASE), difficulty, and security level. Items are reviewed and approved through the Examinations Authority's internal workflow.
2. **Item bank security.** The Item Bank operates with strict access control, audit, and segregation. Items in active use are not shared.
3. **Test assembly.** A test is assembled from the Item Bank by the Examinations Authority, adhering to the syllabus and the psychometric characteristics agreed for the cycle.
4. **Candidate registration.** Schools register candidates from their SIS into the Examinations Platform, using OneRoster references back to the PLR. Late registrations and special-needs accommodations are captured.
5. **Examination delivery.** Either paper-based (logistics-heavy, security-sensitive) or computer-based (technology-heavy, infrastructure-dependent). Most countries operate a mix during the transition from paper to digital.
6. **Marking.** Online marking platforms (often based on 1EdTech QTI) support double-marking, moderation, and quality control. AI-assisted marking is in increasing use for objective items; reserved-judgment items remain with human markers.
7. **Result publication.** Results are returned to the PLR and to the candidate. Schools see only their own candidates' results; districts see district aggregates; the Ministry sees national statistics.
8. **Credential issuance.** PDCA (or equivalent) issues the qualification credential as a W3C VC.
9. **Cross-border recognition.** The credential travels with the learner.

## 5.4 Process metrics

| Metric | Source | Target |
|--------|--------|--------|
| NLR coverage of school-age population | NLR | >90% by Wave 3 |
| OneRoster-conformant rostering rate | SIS / LMS adoption | 100% of public schools by Wave 3 |
| Examination result turnaround time | Examinations Platform | <30 days from examination to result issuance |
| Digital credential issuance rate | DCA | 100% of public-school school-leaving credentials by Wave 2 end |
| Learner access log views | Learner / parent portal | >5% of registered learners (or parents) per year by Wave 3 |
| Learner transfer accuracy | NLR vs SIS reconciliation | <0.5% reconciliation errors by Wave 3 |
| Cross-system data exchange latency | Information Mediator BB | <500 ms 95th percentile |
| Giga school connectivity status freshness | School Facility Registry | <30 days median age of connectivity record per school |

---

# Section 6: Building Blocks for Education

## 6.1 GovStack BB usage in the education sector

The GovStack Building Block catalogue (PAERA Annex A1.3) provides the foundational BBs. The education sector uses a subset directly, plus a small number of education-specific complementary BBs.

### 6.1.1 Direct use of GovStack foundational BBs

| GovStack BB | Education-sector use |
|------------|----------------------|
| **Identity BB** | Learner identification linked to National ID; teacher authentication; parental authentication for parent portal access. |
| **Information Mediator BB** (X-Road or equivalent) | Cross-organisation exchange — NLR ↔ civil registration ↔ social protection ↔ health (school health). |
| **Registration BB** | Learner registration; teacher registration; school enrolment; scholarship application registration. |
| **Workflow BB** | Examinations marking workflow; school-inspection workflow; scholarship-eligibility workflow; teacher-deployment workflow. |
| **Payment BB** | Scholarship disbursement; school-feeding payments; fee collection. |
| **Consent BB** | Cross-system consent management; parental consent for minors. |
| **Digital Wallet BB** | Learner holds credentials (school-leaving, qualifications, micro-credentials); parental wallet for minors. |
| **Messaging BB** | School-parent communication; examination-schedule notifications; public-information campaigns. |

### 6.1.2 Education-specific complementary BBs

Three complementary BBs are specific to the education sector. They are not in the GovStack core but are widely deployed in mature national education architectures.

| Education BB | Function | Reference implementations |
|--------------|----------|---------------------------|
| **OneRoster Service** | Rostering of learners, teachers, classes, enrolments. | Open-source OneRoster libraries; commercial rostering products from EdTech vendors; can be embedded in a configured Identity BB. |
| **Verifiable Credentials Issuance Service** | Issuance, holding, and verification of W3C VC for educational credentials. | Open-source (digital-credentials.org reference implementations, Veramo, Mattr libraries); Europass for EU member states; commercial (Velocity Network, Hyland, TrueCert). |
| **Giga School Resource Service** | Authoritative school identity and connectivity record. | Project Connect API (giga.global); local Giga-compatible deployment for non-participating countries. |

These three are part of every national education EA at Maturity Level 3 and above. None is country-specific bespoke; mature open-source implementations exist for all three.

## 6.2 Priority Building Blocks for Education by maturity level

| Maturity / Wave | BBs deployed |
|-----------------|--------------|
| **Wave 1 (Maturity Level 2)** | Identity BB; Registration BB; Information Mediator BB; OneRoster Service; School Facility Registry (Giga-compatible) |
| **Wave 2 (Maturity Level 3)** | Workflow BB; Payment BB (scholarships); Verifiable Credentials Issuance Service; Messaging BB |
| **Wave 3 (Maturity Level 3 → 4)** | Consent BB; Digital Wallet BB; cross-border VC verification |
| **Wave 4 (Maturity Level 4)** | Advanced BBs (learning analytics platform, AI-assisted personalisation, lifelong-learning record platform) |

A country with mature foundational DPI (Identity BB, Information Mediator BB, Registration BB already in place across other sectors) can deploy Wave 1 education BBs in 9–12 months team-effort time. A country without these foundations needs the Wave-0 health-or-education-foundation programme first.

## 6.3 BB integration with education-sector applications

| Application | BBs consumed |
|-------------|--------------|
| EMIS | Identity (institutional); Information Mediator; OneRoster Service for rostering aggregation |
| National Learner Registry | Identity (learner via National ID); Information Mediator; OneRoster Service |
| SIS (school-level) | Identity; OneRoster Service; LMS integration via LTI |
| LMS | Identity; OneRoster Service; LTI for content/tool integration; Caliper for analytics |
| Examinations Platform | Identity (candidate); Information Mediator; Workflow; OneRoster Service for candidate rostering |
| Digital Credentials Authority | Identity (subject); Information Mediator; Workflow; VC Issuance Service |
| Scholarship Platform | Identity; Information Mediator; Workflow; Payment; Registration |
| Parent/Learner Portal | Identity (via National ID, with parental linkage for minors); Consent BB; Digital Wallet |

## 6.4 BBs vs sourcing decisions

Per T60 §3 default sourcing patterns, foundational DPI BBs are Configure (the country operates them as DPI; the education sector integrates). Education-specific BBs (OneRoster Service, VC Issuance Service, Giga School Resource Service) are Configure where mature open-source or standards-conformant commercial implementations exist. Build is reserved for sectoral business logic — eligibility predicates for sector-specific programmes (scholarships, school feeding), country-specific examination-marking rules, country-specific curriculum-mapping logic.

A representative Bespoke Footprint for a deployed national education EA at Maturity Level 3 is in the range 12–18% — comparable to health, with the additional bespoke load coming from country-specific examination logic and from the parent-guardian relationship modelling.

---

# Section 7: Implementation Path — the Progressa Worked Example

## 7.1 Programme context

This section uses Progressa (the imaginary demonstration country described in the KP outline) as the worked example for an education-sector EA programme at Maturity Level 1 entry. Progressa's relevant baseline at programme start (year 2026):

- Population 16.8 million; 11.5 million school-age (4–22); median age 18.7.
- 8,200 schools (62% public, 28% private, 10% community-managed); ~47,000 teachers; primary enrolment 92%, primary completion 73%, lower-secondary completion 51%, tertiary enrolment 11%.
- Mobile penetration 87%; smartphone 45%; internet 38%; school connectivity uneven.
- National ID rollout since 2018, 78% adult coverage; PNIA (Progressa National ID Authority) e-KYC platform operational since 2024.
- Linkup (X-Road 7.x deployment) launched 2025 in pilot phase.
- EMIS partial (district-level only); no National Learner Registry; paper-based learner records in primary schools; partial digitisation in secondary schools at provincial level; ad-hoc credential issuance by examining boards.

Progressa joined GovStack in 2024 and is a 50-in-5 DPI pilot country. The Digital Transformation Roadmap 2024–2030 is in cabinet approval. The Ministry of Education, Youth and Skills (MoEYS) has been allocated state-budget envelope plus World Bank human-capital programme funding for the foundational education-EA work.

## 7.2 Wave-based implementation

Progressa's education-sector EA programme is structured as four Waves over 48 months team-effort time. Calendar time per T15 §4.2 is approximately 60–72 months given budget and procurement cycles.

### 7.2.1 Wave 1 — Foundation (months 0–18 team-effort)

**Objectives.** Establish the institutional spine of the architecture: legal framework, governance, NLR, School Facility Registry aligned with Giga, the first SDA on FHIR-equivalent semantic stack.

**Deliverables.**
- Education Sector Digital Strategy 2026–2030 (E-PDU-08) approved.
- Legal touch points addressed (TK-32): Personal Data Protection Act amendment for child-data processing; Education Act amendment authorising the National Learner Registry; PNIA Data Access SOP revised to include education sector (per T15 §3.1 example).
- Architecture governance: Education EA Board operational, joint with the central PDGA (Progressa Digital Government Authority).
- PLR (Progressa Learner Registry) Wave 1: Option B architecture (NLR references National ID); covers all primary-school learners enrolled from 2027 onwards; backfill of existing primary cohort over 18 months.
- School Facility Registry: Progressa joins Giga Project Connect; data quality reaches the Silver tier (per Giga MDM model) by end of Wave 1.
- First SDA on EMIS-modernised stack: one provincial education department serving ~120 schools.
- OneRoster integration for the first SDA's SIS systems.
- Teacher Registry Wave 1: registration of all public-sector teachers.
- Stakeholder Commitment Letters from Tier 1 ministries (per T59 §5.1 and TK-36).

**Bespoke Footprint commitment.** End of Wave 1 < 15%.

**Sourcing summary (per TK-39).**
- Identity BB, Registration BB, Information Mediator BB: Configure on existing Progressa DPI.
- OneRoster Service: Configure open-source (deployed alongside the SIS systems).
- School Facility Registry: Configure on Project Connect API.
- SIS at provincial-department level: Configure on Joget DX 8.x with the GEATDM education configuration; light bespoke for parent-guardian relationship modelling.
- PLR: Build sectoral business logic (probabilistic matching for child registration; parent-guardian linkage; longitudinal-record management); Configure registry mechanics on a low-code platform.
- EMIS modernisation: Configure on DHIS2 with education modules.

### 7.2.2 Wave 2 — Pilot expansion (months 18–30)

**Objectives.** Scale to additional provincial education departments; introduce digital credentials; integrate with social protection (scholarships) and health (school health).

**Deliverables.**
- Five additional provincial education departments onboarded; ~3,000 schools.
- PNEA (Progressa National Examinations Authority) on the modernised platform: end-of-primary examination digitised; result publication via PLR; PDCA (Progressa Digital Credentials Authority) issues primary-completion credentials as W3C VC, Europass-conformant.
- Scholarship Platform Wave 1: integrating Registration + Payment + Workflow BBs; PayPro (Progressa fast-payment system) used for disbursement.
- School Feeding integration with the Ministry of Agriculture's procurement system.
- School Health integration with the Ministry of Health's Public Health Institute (vaccination records, health screening).
- Parent Portal Wave 1; Learner Portal Wave 1 (read-only access to records and credentials).
- Bespoke Footprint review at end of Wave 2: target < 16%.

### 7.2.3 Wave 3 — National rollout (months 30–48)

**Objectives.** National coverage of the public-school network; full digital credential issuance; parent and learner consent management; cross-border recognition pilot.

**Deliverables.**
- All 24 districts and all public-sector schools on the architecture.
- Lower- and upper-secondary examinations fully digitised; school-leaving credential issued by PDCA as W3C VC at scale.
- Parent and Learner Portals fully featured: appointment scheduling, fee payment, examination registration, secure messaging, learner-access log.
- Consent BB and Digital Wallet BB deployed; parental consent flows for minors implemented.
- Cross-border recognition pilot: Progressa qualifications recognised in two regional partner countries (via VC presentation under the African Union Continental Qualification Framework).
- TVET integration: vocational qualifications follow the same architecture.
- Bespoke Footprint review at end of Wave 3: target < 18%.

### 7.2.4 Wave 4 — Optimisation (months 48+, ongoing)

**Objectives.** Lifelong-learning records, AI-assisted personalisation, cross-sector mobility.

**Deliverables.**
- Lifelong-learning record platform: portable across employers, formal education, and TVET re-engagement.
- AI-assisted analytics for early-warning of learners at risk of dropout, integrated with Tier 2 SDAs.
- Higher-education integration: HEIs onboarded with the same architecture; PLR coverage extended to all enrolled HEI students.
- Cross-border recognition with all African Union partner countries.
- Continuous improvement of the Bespoke Footprint discipline; quarterly EA Board review.

## 7.3 Critical path

The critical path runs through:

1. Legal framework. The Education Act amendment authorising the PLR is the longest-lead item. Estimated 12–18 months for new legislation.
2. National Learner Registry Wave 1. Without an authoritative learner identifier, the entire architecture is unreliable.
3. First-SDA delivery. Demonstrates the architecture and produces the lessons that shape Wave 2 onwards.
4. Workforce capacity. Education-sector ICT capacity in country governments is typically thinner than for other sectors; intentional capacity-building from Wave 1 (per T59 §5.1 and §5.2 engagement model).

## 7.4 Common anti-patterns in education-sector implementations

The four most common anti-patterns observed in education-sector EA programmes:

- **National e-education platform single procurement.** Bundling EMIS, NLR, SIS, LMS, examinations, credentials into one contract. The Vendor-Driven Architecture Trap (T16 §3) in canonical form. Treated by domain decomposition (T60 §3) and procurement governance (T16 §3.5).
- **Private-sector LMS adoption without rostering or credential plumbing.** Schools or HEIs adopt commercial LMS without integrating to OneRoster, leaving the National Learner Registry blind to learning activity. Treated by mandating OneRoster compliance from the start.
- **Examination digitisation without PLR foundation.** Going digital on examinations before the National Learner Registry is operational. Treated by Wave-1 sequencing: PLR first, examination digitisation in Wave 2.
- **Bespoke parent-portal development.** Each district building its own parent portal. Treated by the national parent-portal pattern in Wave 3, configured on a single Identity-BB-aware low-code platform.

## 7.5 Cross-references

| Topic | Reference |
|-------|-----------|
| Public-sector reality (legal, political, budget, procurement, capacity) | T15 |
| Architectural traps and Strangler Fig | T16 |
| Stakeholder engagement (Tier 1 / Tier 2 / Tier 3) | T59 |
| Sourcing strategy and Bespoke Footprint | T60 |
| Interoperability framework (the substrate the education sector consumes — Information Mediator BB; cross-government integration with civil registration, social protection, health) | 08-Interoperability |
| DPI roadmap (the foundational pillars the education-sector EA depends on; see also the education semantic stack §6.1 of the KP outline) | 09-DPI |
| Education semantic interoperability stack across the four KPs | KP Working Outline §6.1 |
| Health sector parallel patterns (NPI vs NLR) | GEATDM-Sector-Health §4.3 |
| 1EdTech standards (OneRoster, LTI, CASE, QTI, Common Cartridge, Caliper) | 1edtech.org |
| W3C VC and DID | w3.org/TR/vc-data-model, w3.org/TR/did-core |
| Europass / European Learning Model | europa.eu/europass; europass.europa.eu |
| Giga / Project Connect | giga.global; projectconnect.unicef.org |
| GovStack BB specifications | specs.govstack.global |
| UNESCO ISCED 2011 | uis.unesco.org/en/topic/international-standard-classification-education-isced |
| OECD EdTech 2023 | oecd.org/education/digital-education-outlook |
| World Bank EdTech Hub | edtechhub.org |
| US Education EA Guidebook (reference) | sites.ed.gov/octae |
| WSO2 Connected Education RA (reference) | wso2.com (Connected Education whitepaper) |

---

# DOCUMENT CONTROL

## Approval Record

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Author | FiscalAdmin OÜ | May 2026 | — |
| Reviewer | TBD | — | — |
| Approver | TBD | — | — |

## Distribution

| Recipient | Format | Date |
|-----------|--------|------|
| GEATDM Method Repository | Markdown | May 2026 |
| ITU / Giga | DOCX + PDF | TBD |

---

*GEATDM — Making Digital Transformation Practical*

# GEATDM Health Sector Guide

## Practitioner's Handbook for Health Target Architecture

**Document:** GEATDM-Sector-Health-v1.0
**Part of:** Sector Guides
**Version:** 1.0
**Date:** May 2026
**Status:** Released
**License:** Creative Commons Attribution 4.0

---

## Document Control

| Attribute | Value |
|-----------|-------|
| Document ID | GEATDM-Sector-Health |
| Title | GEATDM Health Sector Guide |
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

- Section 1: Health Sector Overview
- Section 2: Health Capability Architecture
- Section 3: Health Application Architecture
- Section 4: Health Data Architecture
- Section 5: Health Process Architecture
- Section 6: Building Blocks for Health
- Section 7: Implementation Path

---

# Section 1: Health Sector Overview

## 1.1 The health sector spans all three GEATDM organisation types

Unlike Customs, which is always a Service Delivery Authority (SDA), the health sector is unusual among public-sector domains in that it spans all three GEATDM organisation types simultaneously, plus several State Registries and Government Horizontal Systems. A practitioner running an EA engagement covering "the health sector" is in fact running engagements with several distinct organisation types at the same time. The sector guide maps this taxonomy explicitly.

| GEATDM type | Typical health-sector entity | Reference Architecture |
|-------------|-----------------------------|-----------------------|
| **PDU — Policy Development Unit** | Ministry of Health; Health Strategy Unit | T25 PDU RA |
| **RA — Regulatory Agency** | Medicines and Pharmaceutical Authority; Health Professional Council; Public Health Institute (regulatory mandate); Health Insurance Regulator | T35 RA RA |
| **SDA — Service Delivery Authority** | National Health Service / Public Hospitals; Primary Care network; Ambulance Service; Public Health Institute (delivery mandate); Health Insurance Fund (single-payer or multiple-payer) | T47 SDA RA |
| **State Registry** | National Patient Index; National Provider Index; Health Facility Registry; Civil Registration (referenced for births, deaths) | PAERA Annex A1.2.5 |
| **Horizontal System** | E-Prescription Service; Laboratory Information Mediator; Imaging Repository; Vaccination Registry | PAERA Annex A1.2.6 |
| **Natural Digital Environment** | Patient health record (citizen-owned); Provider portal; Health data exchange platform | PAERA Annex A1.2.7 |

The implication for the EA practitioner is that a national health EA cannot be produced as a single SDA architecture. It is produced as a *portfolio*: PDU architecture for the Ministry of Health, RA architecture for each regulator, SDA architecture for each service-delivery entity, plus the registries and horizontal systems that connect them. The portfolio is held together by cross-cutting elements — semantic interoperability standards (HL7 FHIR, SNOMED CT, ICD-11), the National Patient Index, and the Information Mediator BB (X-Road or equivalent).

## 1.2 Health Sector Mission and Functions

A national health system fulfils four mission categories. Each maps to one or more GEATDM organisation types.

**Patient care delivery** — primary, secondary, and tertiary care; emergency response; rehabilitation; long-term care. Delivered primarily by SDAs (hospitals, clinics, ambulance services). The supporting digital systems are EHR (Electronic Health Record), Hospital Information Management System (HMIS), Laboratory Information System (LIS), and Radiology / PACS.

**Public health protection** — disease surveillance; outbreak response; vaccination programmes; health promotion; non-communicable disease prevention. Delivered primarily by Public Health Institutes (typically with both regulatory and delivery mandates) and SDAs. The supporting digital systems are surveillance platforms, vaccination registries, mass-screening systems, and population-level analytics.

**Health system stewardship** — health policy development; resource allocation; service planning; quality assurance; price-setting (for insurance); standards-setting. Delivered primarily by PDUs (Ministry of Health) supported by data from SDAs. The supporting digital systems are statistical platforms, performance management, and policy modelling.

**Health system regulation** — licensing of professionals, facilities, and medicines; pharmacovigilance; clinical-quality oversight; insurance regulation. Delivered primarily by RAs. The supporting digital systems are licensing systems, professional registries, adverse-event reporting, and audit platforms.

A national EA covering the health sector covers all four mission categories. A sectoral EA covering only one mission (for example, "the EA for hospital information management") covers only a subset and must explicitly state its boundaries.

## 1.3 Key Stakeholders

The health sector has the most extensive stakeholder set of any public-sector domain. The Stakeholder Engagement Method Guide (T59) tier model applies, with the following typical mapping:

| Tier | Health-sector stakeholders | Engagement model |
|------|----------------------------|------------------|
| **Tier 1 — Champions** | Ministry of Health (PDU); Ministry of Finance (cross-government); the largest SDA (typically the public-hospital network or the health insurance fund); the Ministry of ICT / Digital Authority | Weekly working sessions; bi-weekly Steering Committee; quarterly Cabinet briefing |
| **Tier 2 — Early Adopters** | Public Health Institute; Primary Care network; Medicines Authority; the second-largest SDA (typically a teaching hospital or specialised cancer/maternal/paediatric service) | Bi-weekly working sessions; sector workshops |
| **Tier 3 — Observers** | Health Professional Council; private hospital associations; medical societies; pharmaceutical industry association; NGOs; international development partners (WHO country office) | Monthly bulletin; quarterly community-of-practice |

Citizen / patient stakeholders are addressed through patient-organisation representatives in Tier 2 working sessions and through periodic public consultation, not through individual engagement. Their primary architectural representation is the patient-centricity principle (Section 1.4 below) and the consent management framework (Section 4.5).

Healthcare professionals (clinicians, nurses, allied health professionals) are addressed through professional-society representation in Tier 2 working sessions and through clinician focus-groups during ADAPT phase. Their primary architectural representation is the usability principle and the workflow design discipline.

## 1.4 Architectural principles for health (sector-specific extensions to T12)

The 33 principles in GEATDM-WP1-T12 EA Principles apply to health as to any sector. Three principles require sector-specific elaboration in the health domain.

**Principle 1 — Patient-centricity and data ownership (extends BA-01 Customer-Centric Service Design).** Health data belongs to the patient, who has the right to access it, share it with providers of their choice, and revoke that access. Architecturally, this requires a National Patient Index (Section 4.3) keyed to citizen identity (PAERA §3.4.4), patient access logs visible to the patient (ADR-007 in the e-Health Reference Model), and a consent management framework that permits granular delegation.

**Principle 2 — Privacy by design and security by default (extends DA-05 Privacy and Data Protection by Design and TECH-01 Security by Design).** Health data is among the most sensitive personal data; its architectural treatment is the most demanding security and privacy regime in any public-sector EA. Specifically: encryption in transit (TLS 1.3) and at rest; role-based access control with break-the-glass override for emergency access (ADR-009); comprehensive audit logging (ADR-008); data minimisation in API responses; explicit consent for secondary use; and pseudonymisation for research.

**Principle 3 — Standards-based interoperability (extends DA-06 Data Sharing and Interoperability).** Health is the public-sector domain with the most mature semantic interoperability standards: HL7 FHIR for clinical data exchange, SNOMED CT for clinical concepts, LOINC for laboratory observations, ICD-11 for diagnoses, ATC for medications, DICOM for medical imaging. The architectural default for any new health system is FHIR-first design (ADR-001). Bespoke clinical data formats are an architectural anti-pattern.

## 1.5 International Standards

The health sector has the densest standards landscape of any public-sector domain. The standards listed below are the working set for any national health EA. Standards bodies are referenced; specific version selection is part of the ADAPT phase.

### 1.5.1 Clinical data exchange standards

| Standard | Issuing body | Relevance |
|----------|--------------|-----------|
| **HL7 FHIR R5** | HL7 International | The canonical standard for health-data exchange. RESTful, JSON-based. Defines ~150 resource types covering patients, encounters, observations, medications, conditions, procedures, etc. |
| **HL7 v2.x** | HL7 International | Legacy messaging standard, still widely deployed for hospital-internal exchange (ADT, orders, results). Migrate progressively to FHIR. |
| **HL7 CDA (Clinical Document Architecture)** | HL7 International | XML-based clinical documents (discharge summaries, referrals). Often replaced by FHIR Composition resources. |
| **DICOM** | NEMA / DICOM Standards Committee | Medical imaging exchange and storage. Used by all RIS/PACS systems. |
| **IHE profiles** | Integrating the Healthcare Enterprise | Cross-vendor integration profiles (XDS for document sharing, PIX/PDQ for patient identity, ATNA for audit, BPPC for consent). |

### 1.5.2 Clinical terminology standards

| Standard | Issuing body | Coverage |
|----------|--------------|----------|
| **SNOMED CT** | SNOMED International | Clinical concepts (diagnoses, procedures, anatomy, findings). |
| **LOINC** | Regenstrief Institute | Laboratory observations and clinical measurements. Open licence. |
| **ICD-11** | World Health Organization | Diagnosis classification for clinical, statistical, and reimbursement use. |
| **ICD-O-3** | WHO | Oncology classification. |
| **ICF** | WHO | Functioning, disability, and health classification. |
| **ATC / DDD** | WHO Collaborating Centre | Medication classification and defined daily doses. |
| **Orphanet** | INSERM | Rare disease classification. |
| **MedDRA** | ICH | Adverse-event terminology (post-marketing surveillance). |

### 1.5.3 Identifier and registry standards

| Standard | Purpose |
|----------|---------|
| **OID (Object Identifiers, ISO/IEC 9834)** | Unique identification of code systems and registries |
| **HL7 V3 OID Registry** | Standardised OIDs for HL7 systems |
| **GS1 GTIN / GLN** | Pharmaceutical product identification (GTIN) and facility identification (GLN) |
| **National Patient Identifier** | Country-specific; integrates with civil registration |

### 1.5.4 Privacy, security, and quality standards

| Standard | Purpose |
|----------|---------|
| **ISO/TC 215** | Health Informatics — wide range of supporting standards |
| **ISO 27799** | Health-specific information security management |
| **NIST SP 800-66** | HIPAA Security Rule implementation guidance |
| **GDPR** (EU) / national equivalents | Personal data protection — health data is "special category" |
| **HL7 FHIR SMART on FHIR** | OAuth 2.0-based authorisation profile for FHIR |
| **OAuth 2.0 + OpenID Connect** | Authentication and authorisation |
| **NIST SP 800-53** | General security control framework |

### 1.5.5 Governance and operational standards

| Standard | Purpose |
|----------|---------|
| **WHO Guidelines on Digital Health** | Policy-level guidance |
| **WHO/ITU National eHealth Strategy Toolkit** | Strategy development |
| **WHO Classification of Digital Health Interventions (DHI)** | Functional taxonomy of digital health interventions |
| **Asian Development Bank / World Bank Digital Health Frameworks** | Investment and procurement guidance |

---

# Section 2: Health Capability Architecture

## 2.1 PDU/RA/SDA capability mapping for health

The PDU, RA, and SDA Reference Architectures (T25, T35, T47) define generic capabilities applicable to any sector. The health sector inherits these (per the inheritance principle PDU ⊂ RA ⊂ SDA in T58) and adds sector-specific capabilities. This section sets out the additions.

### 2.1.1 PDU capabilities — Ministry of Health

Inherits all 72 PDU capabilities from T25. Adds 12 health-specific capabilities:

| ID | Capability | Description |
|----|-----------|-------------|
| H-PDU-01 | National Health Strategy Development | Multi-year national health strategy and digital health strategy. |
| H-PDU-02 | Health System Performance Monitoring | Monitor SDG-3 indicators, WHO core indicators, country-specific indicators. |
| H-PDU-03 | Health Workforce Planning | National workforce strategy, training pipeline, retention. |
| H-PDU-04 | Health Financing Policy | Public, private, and external health financing policy. |
| H-PDU-05 | Universal Health Coverage Policy | Benefit package definition, prioritisation, equity targets. |
| H-PDU-06 | Public Health Emergency Policy | Pandemic preparedness, outbreak response policy, IHR compliance. |
| H-PDU-07 | National Health Information Strategy | Data sources, governance, quality, dissemination. |
| H-PDU-08 | Digital Health Strategy | National e-health strategy aligned with GEATDM and PAERA. |
| H-PDU-09 | Pharmaceutical Policy | Essential medicines list, procurement policy, generic-substitution policy. |
| H-PDU-10 | Health Standards and Guidelines Development | Clinical practice guidelines, accreditation standards, quality standards. |
| H-PDU-11 | Cross-Sectoral Health Policy | Determinants of health (water, sanitation, nutrition, education, transport). |
| H-PDU-12 | International Health Engagement | WHO, regional health bodies, bilateral health diplomacy. |

### 2.1.2 RA capabilities — Health regulators

The two largest health-sector regulators:

**Medicines and Pharmaceutical Authority** (or equivalent). Inherits all PDU + RA capabilities from T35. Adds 8 sector-specific capabilities:

| ID | Capability | Description |
|----|-----------|-------------|
| H-MED-01 | Medicines Marketing Authorisation | Evaluation and licensing of medicinal products. |
| H-MED-02 | Pharmaceutical Establishment Licensing | Licensing of manufacturers, importers, wholesalers, retail pharmacies. |
| H-MED-03 | Pharmacovigilance | Adverse-event reporting, signal detection, regulatory action. |
| H-MED-04 | Clinical Trial Authorisation | Evaluation and oversight of clinical trials. |
| H-MED-05 | GMP / GDP Inspection | Good Manufacturing Practice and Good Distribution Practice inspection. |
| H-MED-06 | Pharmaceutical Track and Trace | End-to-end traceability of pharmaceutical products. |
| H-MED-07 | Medicines Pricing | Reference pricing, pricing approval (where applicable). |
| H-MED-08 | Substance Control | Controlled-substances register, prescription audit. |

**Health Professional Council** (or equivalents — Medical Council, Nursing Council, Pharmacy Council). Inherits all PDU + RA capabilities. Adds 6 sector-specific capabilities:

| ID | Capability | Description |
|----|-----------|-------------|
| H-HPC-01 | Professional Registration | Initial registration of health professionals. |
| H-HPC-02 | Continuing Professional Development | CPD compliance tracking. |
| H-HPC-03 | Disciplinary Process | Investigation and adjudication of complaints against professionals. |
| H-HPC-04 | Accreditation of Training Programmes | Recognition of training institutions and programmes. |
| H-HPC-05 | Professional Mobility | Recognition of foreign-trained professionals; outbound recognition. |
| H-HPC-06 | Specialty Recognition | Specialist registration and recertification. |

### 2.1.3 SDA capabilities — Health service-delivery entities

Public hospital network / National Health Service. Inherits all PDU + RA + SDA capabilities from T47. Adds 22 sector-specific capabilities:

| ID | Capability | Description |
|----|-----------|-------------|
| H-NHS-01 | Patient Registration and Identity Management | Link patients to National Patient Index. |
| H-NHS-02 | Encounter Management | Inpatient, outpatient, day-care, emergency encounters. |
| H-NHS-03 | Clinical Documentation | Structured and free-text clinical documentation. |
| H-NHS-04 | Order Management (CPOE) | Computerised provider order entry — labs, imaging, prescriptions. |
| H-NHS-05 | Medication Management | Inpatient medication administration; prescription management. |
| H-NHS-06 | Laboratory Workflow | Specimen collection, processing, results reporting. |
| H-NHS-07 | Radiology Workflow | Imaging order, acquisition, reporting, distribution. |
| H-NHS-08 | Surgical Scheduling and Workflow | Theatre management, surgical safety. |
| H-NHS-09 | Bed Management | Bed availability, transfers, discharge planning. |
| H-NHS-10 | Pharmacy Management | Inpatient and outpatient dispensing, inventory. |
| H-NHS-11 | Referral Management | Internal and external referrals with closed-loop tracking. |
| H-NHS-12 | Emergency Department Workflow | Triage, ED disposition, observation. |
| H-NHS-13 | Antenatal, Intrapartum, Postnatal Care | Maternity workflow. |
| H-NHS-14 | Paediatric Care and Vaccination | Child health, growth monitoring, vaccination. |
| H-NHS-15 | Chronic Disease Management | Diabetes, hypertension, HIV/AIDS, TB, mental health management. |
| H-NHS-16 | Palliative and Long-Term Care | End-of-life and chronic-condition management. |
| H-NHS-17 | Telemedicine | Synchronous and asynchronous remote consultation. |
| H-NHS-18 | Patient Portal | Patient access to records, appointments, secure messaging. |
| H-NHS-19 | Provider Portal | Clinician access to patient data, order entry, decision support. |
| H-NHS-20 | Clinical Decision Support | Order checking, drug-drug interactions, clinical guidelines, alerts. |
| H-NHS-21 | Quality Reporting and Clinical Audit | Mandatory reporting, clinical audit, quality dashboards. |
| H-NHS-22 | Revenue Cycle and Claims | Insurance claims, co-payments, billing reconciliation. |

Public Health Institute. Inherits all PDU + RA + SDA capabilities. Adds 8 sector-specific capabilities:

| ID | Capability | Description |
|----|-----------|-------------|
| H-PHI-01 | Notifiable Disease Surveillance | Mandatory disease reporting and case investigation. |
| H-PHI-02 | Outbreak Detection and Response | Statistical anomaly detection and field response. |
| H-PHI-03 | Vaccination Registry | Population-wide immunisation records. |
| H-PHI-04 | Mass Screening Programmes | Cancer screening, NCD screening, tuberculosis, HIV. |
| H-PHI-05 | Population Health Statistics | Vital statistics, morbidity, mortality, life expectancy. |
| H-PHI-06 | Health Promotion and Communication | Public information campaigns, behavioural-change interventions. |
| H-PHI-07 | Public Health Laboratory | Reference laboratory for surveillance and confirmation. |
| H-PHI-08 | International Health Reporting | IHR reporting, WHO statistics, global health monitoring. |

Health Insurance Fund (where single-payer or multi-payer with regulator). Inherits all PDU + RA + SDA capabilities. Adds 12 sector-specific capabilities. (Listed in the e-Health Reference Model §1.1; included in the deeper-dive document, omitted here for length.)

## 2.2 Detailed capability taxonomy for health

The 56+ health-specific capabilities above (12 PDU, 14 RA across the two regulators, 30 SDA across NHS and PHI) are the GEATDM-aligned taxonomy. The taxonomy is a starting point; a national health EA tailors it to country structure (some countries combine the Public Health Institute with the Ministry of Health, some separate medicines and devices regulation, some operate health insurance separately from service delivery).

The complete tailoring procedure follows T58 §12 (ADAPT phase). The sector guide provides the starting taxonomy and the country-specific extension rules (Section 2.3 below).

## 2.3 Country-specific extensions

A national health EA will typically extend the taxonomy with three categories of country-specific capabilities:

**Health insurance specifics.** Where a country operates national health insurance (single-payer or multi-payer), capabilities for benefit-package administration, contribution collection, claims adjudication, fraud detection, and risk equalisation are added. These align with the SDA Reference Architecture and may sit with a Health Insurance Fund (SDA) or with the Ministry of Finance (cross-sector).

**Pharmaceutical supply specifics.** Where a country operates a national medical stores, central medical procurement, or rural pharmacy network, supply-chain capabilities are added (forecasting, procurement, warehousing, distribution, last-mile traceability). These align with the SDA Reference Architecture for the medical stores entity.

**Cross-sector determinants.** Health intersects with civil registration (birth, death), social protection (disability, chronic-illness benefits), and education (school health, occupational health). Cross-sector data exchange is captured in the Information Mediator BB integration architecture (Section 6) rather than as health-specific capabilities.

## 2.4 Capability priorities by maturity level

The e-Health Reference Model defines four maturity levels for national e-health ecosystems. The sector guide aligns capability priorities to these levels. The table below maps the 56+ capabilities to maturity bands.

| Maturity Level | Indicative Wave | Capability priorities |
|----------------|-----------------|----------------------|
| **Level 1 — Initial / Ad-Hoc** | Pre-Wave 1 (mobilisation) | H-PDU-01, H-PDU-08; H-NHS-01 (basic patient registration); H-PHI-05 (vital statistics) |
| **Level 2 — Managed / Fragmented** | Wave 1 (0–12 months team-effort time) | H-NHS-02, H-NHS-03, H-NHS-04 (encounter, documentation, orders for the largest SDA); H-NHS-22 (claims, where insurance exists); H-MED-01, H-MED-02 (medicines authority foundational systems); H-PHI-01 (notifiable disease surveillance); H-HPC-01 (professional registration) |
| **Level 3 — Defined / Integrated** | Waves 2–3 (12–36 months) | H-NHS-05, H-NHS-10, H-NHS-11, H-NHS-19, H-NHS-20; H-MED-03, H-MED-04, H-MED-05; H-PHI-02, H-PHI-03, H-PHI-04 |
| **Level 4 — Optimized / Innovating** | Wave 4 (36+ months) | H-NHS-15, H-NHS-16, H-NHS-17 (chronic care, palliative, telemedicine); H-PHI-06, H-PHI-08; H-MED-06, H-MED-07; advanced analytics and decision-support across the architecture |

The Wave assignment is indicative. Country context (existing capability, political priorities, donor commitments, public health emergencies) shifts the Wave allocation. The PLAN phase (T58 §13) produces the country-specific Wave plan.

---

# Section 3: Health Application Architecture

## 3.1 Core systems landscape

A national health EA covers a recognisable set of application domains. The taxonomy below uses GEATDM application categories.

| Application domain | Function | Typical product class |
|--------------------|----------|----------------------|
| **EHR — Electronic Health Record** | Longitudinal patient record across providers | OpenMRS, OpenEMR, commercial EHR (Cerner, Epic, MEDITECH); open-source platforms |
| **HMIS — Hospital Management Information System** | Hospital operations (admission, transfer, discharge, billing) | Bahmni, Care2x, commercial HMIS; integrated EHR/HMIS suites |
| **LIS — Laboratory Information System** | Laboratory workflow | OpenELIS, BLIS, commercial LIS |
| **RIS / PACS — Radiology Information System / Picture Archiving Communication System** | Imaging order, acquisition, reporting, archive | dcm4chee, OHIF, commercial RIS/PACS |
| **Pharmacy Management** | Inpatient and outpatient pharmacy | OpenMRS pharmacy modules; dedicated pharmacy systems |
| **e-Prescription Service** | National prescription registry; prescription transmission to pharmacies | Country-specific platforms (Estonia ePrescription, Greek ePrescription) |
| **National Patient Index** | Authoritative patient identifier and demographics | Country-specific platform — typically built on OpenEMPI, dedicated MPI products, or as part of the Identity BB |
| **National Provider Index** | Authoritative provider and facility registry | Country-specific platform |
| **Public Health Surveillance** | Notifiable disease reporting and outbreak management | DHIS2, country-specific platforms, surveillance modules |
| **Vaccination Registry** | Population-wide immunisation records | DHIS2 vaccination modules, OpenIIS, country-specific |
| **Telemedicine Platform** | Synchronous and asynchronous remote consultation | OpenMRS telemedicine modules, Jitsi-based, commercial platforms |
| **Patient Portal** | Citizen access to records, appointments, secure messaging | Country-specific (Estonia digilugu.ee pattern) |
| **Health Insurance Claims Platform** | Claims submission, adjudication, payment | Country-specific |
| **Health Information Exchange (HIE)** | Cross-provider clinical-data exchange | OpenHIE-aligned platforms; FHIR Server (HAPI FHIR, Microsoft FHIR Server) |
| **Clinical Data Repository** | Aggregate clinical data for analytics, research, public health | Country-specific data platform |
| **Decision Support / Clinical Knowledge Management** | Order checking, drug-drug interactions, clinical guidelines | Commercial (First Databank, Lexicomp, Wolters Kluwer); open-source (RxNorm-based engines) |

## 3.2 Application domain mapping to GEATDM organisation types

| GEATDM type | Typical applications |
|-------------|---------------------|
| PDU (Ministry of Health) | Health Information Strategy platform; national dashboards; statistical platform; policy-modelling tools |
| RA — Medicines Authority | Marketing authorisation system; pharmacovigilance database; track-and-trace platform |
| RA — Health Professional Council | Professional registration; CPD tracking |
| SDA — National Hospital Network | EHR + HMIS suite; LIS; RIS/PACS; Pharmacy; CPOE |
| SDA — Public Health Institute | Surveillance platform; vaccination registry; mass-screening systems |
| SDA — Health Insurance Fund | Claims platform; benefit-package administration; revenue cycle |
| State Registry | National Patient Index; National Provider Index; Health Facility Registry |
| Horizontal System | E-Prescription Service; Health Information Exchange (HIE); Clinical Data Repository |

The application-domain mapping is the key input to procurement decomposition (T60 §6.3, T16 §3.5). A single procurement should not span more than one architectural domain. A "national e-health platform" procurement that bundles EHR, HMIS, LIS, RIS/PACS, pharmacy, surveillance, and insurance into one contract is a Vendor-Driven Architecture Trap waiting to happen (T16 §3).

## 3.3 Integration patterns

Health-sector applications exchange data through a small number of canonical integration patterns. The patterns generalise across countries.

### 3.3.1 FHIR-first integration (the Localistan pattern, ADR-001 in the e-Health Reference Model)

A FHIR Intermediary Server (HAPI FHIR or equivalent) sits at the centre of the health information exchange. Every application that produces clinical data publishes FHIR resources. Every application that consumes clinical data reads FHIR resources. The intermediary server provides identity resolution, terminology services, audit, and consent enforcement. The pattern is suited to greenfield deployments and to mid-maturity countries adopting modern integration without an existing X-Road-class bus.

### 3.3.2 X-Road / Information Mediator BB integration (the Estonia pattern, ADR-003)

Where the country operates an Information Mediator BB (X-Road or equivalent) for cross-government integration, health-sector applications integrate through the same bus. Each application is a "subsystem"; cross-application calls are routed through the bus with PKI-based mutual authentication, consent, and audit. The pattern is suited to countries where the Information Mediator BB is mature and used across all sectors.

The two patterns are not mutually exclusive. The mature pattern is typically a hybrid: FHIR resources at the application API layer; X-Road as the cross-government information mediator. FHIR servers are subsystems on the X-Road bus. This is the GEATDM-recommended target architecture for countries operating both.

### 3.3.3 Legacy HL7 v2 messaging (transitional)

Hospital-internal exchange between legacy systems (HMIS to LIS to RIS) typically uses HL7 v2.x messaging (ADT, ORM, ORU). The pattern is well-supported by every legacy health-IT product. The GEATDM PLAN phase treats HL7 v2 as transitional: new systems use FHIR; existing systems are wrapped with FHIR adapters during the Strangler Fig modernisation (T16 §5).

### 3.3.4 Document-centric exchange (XDS / IHE profiles)

For cross-organisation clinical document exchange (discharge summaries, referrals), the IHE XDS profile remains widely deployed. FHIR Composition resources are increasingly used as a modern alternative. The PLAN phase chooses based on country context: existing investment in XDS infrastructure favours XDS; greenfield deployments default to FHIR.

### 3.3.5 Imaging exchange (DICOM)

Medical imaging exchange uses DICOM exclusively. The DICOM standard covers acquisition, storage, query/retrieve, and rendering. RIS/PACS systems are DICOM-conformant. FHIR ImagingStudy resources reference DICOM studies; the imaging payload itself remains DICOM.

---

# Section 4: Health Data Architecture

## 4.1 Health data domains

A national health EA covers seven canonical data domains. Each domain has authoritative sources, data quality standards, and semantic interoperability standards.

| Domain | Authoritative source | Semantic standard |
|--------|---------------------|-------------------|
| **Patient demographics** | National Patient Index (referencing civil registration) | FHIR Patient + national identifier OID |
| **Provider directory** | National Provider Index | FHIR Practitioner + national professional ID |
| **Facility directory** | Health Facility Registry | FHIR Organization + Location + facility ID (often GS1 GLN) |
| **Clinical observations and orders** | EHR / HMIS / LIS / RIS at point of care | FHIR Observation, ServiceRequest, DiagnosticReport; LOINC for codes |
| **Diagnoses and procedures** | EHR / HMIS at point of care | FHIR Condition, Procedure; ICD-11, SNOMED CT, ICD-9-PCS |
| **Medications** | e-Prescription Service + EHR | FHIR Medication, MedicationRequest, MedicationDispense; ATC, RxNorm |
| **Adverse events and pharmacovigilance** | Pharmacovigilance database | FHIR AdverseEvent; MedDRA terminology |

## 4.2 The FHIR Resource Model as the canonical data model

GEATDM Health Sector Guide adopts HL7 FHIR R5 as the canonical data model for clinical data exchange across the health-sector EA. The FHIR resource model is rich (~150 resource types) and operates as a domain-specific semantic interoperability layer for the health sector. The four KPs of the broader GEATDM v1.1 release reference this in their cross-cutting framing (the education-sector equivalent for schools is Giga School from Project Connect; the health-sector equivalent for clinical data is FHIR).

### 4.2.1 Foundation resources (always implemented)

| FHIR resource | Use | National Index resource |
|--------------|-----|------------------------|
| Patient | Patient demographics and identifiers | National Patient Index |
| Practitioner | Health professional identity | National Provider Index |
| PractitionerRole | Practitioner's role at a specific Organization | National Provider Index |
| Organization | Health organisation (hospital, clinic, laboratory, pharmacy) | Health Facility Registry |
| Location | Physical location within an Organization | Health Facility Registry |
| HealthcareService | Service offered at a Location | Health Facility Registry |

### 4.2.2 Clinical resources (Wave 1 → Wave 4)

Wave 1 (Maturity Level 2 onwards):

| FHIR resource | Use |
|--------------|-----|
| Encounter | Clinical encounter (visit, admission, episode of care) |
| Condition | Diagnosis or problem |
| Observation | Clinical measurement (vital sign, lab result, finding) |
| ServiceRequest | Order (for lab, imaging, procedure, referral) |
| DiagnosticReport | Lab or imaging report |

Waves 2–3 (Maturity Level 3):

| FHIR resource | Use |
|--------------|-----|
| MedicationRequest | Prescription |
| MedicationDispense | Pharmacy dispensing |
| MedicationAdministration | Inpatient medication administration |
| Procedure | Procedure performed |
| AllergyIntolerance | Allergy and intolerance record |
| Immunization | Vaccination record |
| CarePlan | Care plan (chronic disease, antenatal) |
| Composition | Clinical document (discharge summary, referral) |
| DocumentReference | Reference to clinical document (PDF, DICOM, CDA) |

Wave 4 (Maturity Level 4):

| FHIR resource | Use |
|--------------|-----|
| Goal | Treatment goal |
| Task | Workflow task |
| Appointment | Appointment scheduling |
| Coverage | Insurance coverage |
| Claim, ClaimResponse | Insurance claim and adjudication |
| AdverseEvent | Adverse-event reporting |
| ResearchStudy, ResearchSubject | Clinical research |

### 4.2.3 FHIR profiles and extensions

A national health EA does not use raw FHIR R5. It produces a country-specific FHIR Implementation Guide (IG) consisting of FHIR Profiles (specifying which fields are required, optional, prohibited for the country) and Extensions (country-specific data elements not in the core specification). The IG is published by the Ministry of Health, conformance-tested through Connectathons (Section 6.4 of the e-Health Reference Model), and treated as a binding national standard.

## 4.3 Master Data Management — the National Patient Index

The single most important architectural decision in a national health EA is the National Patient Index (NPI). The NPI is the authoritative source of patient identity across the health system. It links patients to citizen identity (the National ID system, PAERA §3.4.4) and serves as the foreign-key target for every clinical resource that references a patient.

### 4.3.1 NPI architecture options

Three architectural options. Each is suitable for a different country context.

| Option | Description | Suitable for |
|--------|-------------|-------------|
| **Option A — NPI is the National ID** | Citizens use their National ID as their patient identifier. No separate health-sector identifier. | Countries with mature digital National ID coverage (>90%) and legal authorisation for cross-sector use. |
| **Option B — NPI references National ID** | Health system maintains a Patient Identifier; the NPI is keyed to the National ID for linkage to civil registration. | Most common model. Suitable for countries with National ID coverage 60–90% or legal restrictions on direct cross-sector use. |
| **Option C — NPI is independent** | Health system maintains its own patient identifier; National ID linkage is opportunistic. | Countries with low National ID coverage or no functioning National ID system. Plan migration to Option B as National ID matures. |

The choice is a Wave 1 architectural decision and is recorded as an Architecture Decision Record (T13 governance, TK-30 ADR template).

### 4.3.2 NPI matching algorithm

Where Option B or Option C is chosen, the NPI must implement probabilistic matching to reconcile patient records from multiple sources (hospitals, clinics, public-health programmes). The matching algorithm uses demographic attributes (name, date of birth, sex, address) plus available identifiers (National ID where present, professional registry numbers for healthcare workers receiving care, insurance numbers). The algorithm is country-specific (calibrated to country naming conventions, address formats, ID structures) and is published as part of the National Patient Index specification.

### 4.3.3 Patient access logs

The NPI architecture specifies that every access to patient data is logged and that the patient can view the access log (ADR-007 in the e-Health Reference Model). This is a transparency requirement that increases public trust and supports legal compliance under GDPR-equivalent regimes.

## 4.4 Master Data Management — Provider and Facility registries

The National Provider Index (NPrI) and Health Facility Registry (HFR) are smaller registries than the NPI but architecturally similar.

| Registry | Authoritative source | Foreign-key targets |
|----------|---------------------|---------------------|
| National Provider Index | Health Professional Council | FHIR Practitioner, PractitionerRole; cross-references to National ID for individual professionals |
| Health Facility Registry | Ministry of Health (typically the Hospitals Inspectorate or equivalent) | FHIR Organization, Location, HealthcareService; cross-references to GS1 GLN for international interoperability and to the country's business-licensing registry |

A common implementation is for the same Information Mediator BB (X-Road) to publish all three registries (NPI, NPrI, HFR) as services consumable by every health-sector application.

## 4.5 Consent management

Consent management is a sector-specific data architecture concern in health. The architectural choices are:

**Consent model.** Opt-in (patient must explicitly authorise data sharing) versus opt-out (data sharing is the default; patient can opt out) versus hybrid (opt-in for sensitive categories — mental health, HIV, reproductive — opt-out for general health data). The choice is a country-level legal decision that the architecture implements.

**Consent granularity.** Document-level (consent applies to entire documents) versus data-element-level (consent applies to specific data elements). Data-element-level granularity is technically harder; most national systems start with document-level and move to data-element-level as the FHIR-first architecture matures.

**Consent storage.** A national Consent Repository keyed to the patient identifier. Every clinical-data access checks the consent repository before disclosure.

**Break-the-glass override.** Emergency access to clinical data over consent restrictions, with mandatory audit and patient notification (ADR-009).

ADR-004 in the e-Health Reference Model documents the recommended choice (opt-out with break-the-glass and patient access logs) for the Localistan reference implementation.

---

# Section 5: Health Process Architecture

## 5.1 Core processes

A national health EA covers the following core processes. Each process is described as a high-level workflow; the detailed activity-level workflow is produced during the ADAPT phase using the SDA Reference Architecture (T47).

| Process | Trigger | Outcome |
|---------|---------|---------|
| **Patient registration** | Patient contacts the health system for the first time | Patient identified in the NPI; demographic and identity data captured. |
| **Outpatient encounter** | Patient presents at primary care, outpatient clinic, or ED | Clinical assessment, diagnosis, plan documented; follow-up scheduled. |
| **Hospital admission** | Patient admitted as inpatient | Admission documented; care plan initiated; ward and bed assigned. |
| **Lab order and result** | Clinician orders a lab investigation | Specimen collected, result generated, result reviewed and acted on. |
| **Prescription** | Clinician prescribes medication | Prescription transmitted to pharmacy; medication dispensed; administration recorded (inpatient) or self-administered (outpatient). |
| **Referral** | Clinician refers patient to specialist or higher level | Referral transmitted; appointment scheduled; consultation completed; closed-loop feedback to referring clinician. |
| **Discharge** | Patient discharged from inpatient or ED | Discharge summary generated; medication reconciliation; follow-up plan. |
| **Insurance claim** | Service provided to insured patient | Claim submitted, adjudicated, payment processed. |
| **Notifiable disease report** | Clinician identifies a notifiable disease | Case reported to Public Health Institute; surveillance database updated. |
| **Vaccination** | Vaccine administered | Vaccination registry updated; certificate generated. |
| **Adverse event** | Healthcare provider observes adverse event | Report to pharmacovigilance database; signal detection; regulatory action. |

## 5.2 The patient journey end-to-end

The patient journey integrates the core processes from a citizen's perspective. The journey below is illustrative; it shows how the GEATDM-aligned architecture supports a hypothetical year of healthcare consumption for one patient.

```
1. The citizen (registered in National ID, with Patient Identity in NPI) has
   their first interaction in January when they visit a primary care clinic
   for a routine check-up.
   - The clinic's EHR queries the NPI by National ID → returns Patient.
   - Clinical assessment recorded as FHIR Encounter, Observations, Conditions.
   - Lab order entered as FHIR ServiceRequest → routed to the LIS.

2. In February the lab returns elevated cholesterol. Result published as
   FHIR Observation linked to the Encounter.
   - Decision support engine (ADR-006-aligned) detects threshold breach.
   - Clinician issues a prescription as FHIR MedicationRequest → routed
     to the e-Prescription Service.

3. In March the patient visits any pharmacy. The pharmacy queries the
   e-Prescription Service by Patient Identifier → retrieves the
   MedicationRequest. Dispensing recorded as FHIR MedicationDispense.

4. In June the patient has a cardiac event and is taken to the ED of the
   public hospital network.
   - ED triage queries the NPI → retrieves Patient and links to the
     existing record.
   - Break-the-glass invoked (ADR-009) for emergency access.
   - Cardiologist reviews prior Observations (the cholesterol result),
     prior MedicationRequest, prior MedicationDispense → comprehensive
     clinical context within seconds.
   - Patient admitted; admission documented as Encounter; care plan
     captured as CarePlan.

5. In July the patient is discharged. Discharge summary generated as
   FHIR Composition; transmitted to the primary care clinician
   (Practitioner) via the Information Mediator BB.

6. In September the patient visits the primary care clinic for follow-up.
   The clinic's EHR retrieves the discharge summary and the
   hospitalisation Encounter via the FHIR-based HIE.

7. The patient accesses the patient portal (PAERA Annex A1.2.7 — Natural
   Digital Environment) and reviews all of the above data plus the
   patient access log showing every healthcare worker who accessed the
   record.
```

The journey illustrates four architectural properties: (1) the National Patient Index is the spine; (2) FHIR resources are the lingua franca; (3) the Information Mediator BB connects the clinic, the lab, the pharmacy, the hospital ED, and the discharge process; (4) the patient sees the entire record through a Natural Digital Environment.

## 5.3 Public health surveillance flow

Surveillance is a process that runs in parallel with the patient journey and is invisible to most patients. Its architectural shape:

1. Clinician at any point of care records a Condition or Observation that is on the notifiable list.
2. The EHR / HMIS publishes the resource to the Health Information Exchange.
3. The Public Health Surveillance platform subscribes to FHIR resources matching the notifiable list (FHIR Subscription resource).
4. The surveillance platform aggregates the data, runs statistical anomaly detection, and triggers alerts when thresholds are breached.
5. Confirmed outbreaks trigger response procedures (case investigation, contact tracing, vaccination campaigns) coordinated through the Public Health Institute.
6. WHO IHR reporting is automated where the country has chosen to report through the GEATDM-aligned architecture.

The surveillance flow demonstrates the architectural value of FHIR-first design (ADR-001): the same clinical data that supports patient care also supports public health, without separate data collection.

## 5.4 Process metrics

A national health EA includes process metrics that the EA Board (T13) tracks quarterly:

| Metric | Source | Target |
|--------|--------|--------|
| Patient registration rate (NPI coverage) | National Patient Index | >90% of population by Wave 3 |
| FHIR resource publication rate | FHIR Server | All Wave-1 SDAs publishing by Wave 2 end |
| HIE query response time (95th percentile) | Information Mediator BB monitoring | <500 ms |
| Notifiable disease reporting completeness | Surveillance platform vs estimated incidence | >80% by Wave 3 |
| Patient access log queries | Patient Portal | >10% of registered patients access log per year by Wave 3 |
| Clinical decision support fire rate | EHR clinical decision support | Tracked, reviewed for false-positive reduction |
| Adverse event reporting rate | Pharmacovigilance | >50 reports per million population per year by Wave 3 (WHO target) |

---

# Section 6: Building Blocks for Health

## 6.1 GovStack BB usage in the health sector

The GovStack Building Block catalogue (PAERA Annex A1.3) provides eight foundational building blocks. The health sector uses a subset of these directly, plus a small number of health-specific complementary BBs.

### 6.1.1 Direct use of GovStack foundational BBs

| GovStack BB | Health-sector use |
|------------|-------------------|
| **Identity BB** | Patient identification linked to National ID; healthcare professional authentication; workforce credential management. |
| **Information Mediator BB** (X-Road or equivalent) | Cross-organisation clinical-data exchange; integration to civil registration, social protection, education (school health). |
| **Registration BB** | Patient registration; provider registration; facility registration; clinical-trial registration. |
| **Workflow BB** | Surgical scheduling, referral workflow, prior-authorisation workflow, claim adjudication workflow. |
| **Payment BB** | Insurance contribution collection; provider claim payment; user co-payment. |
| **Consent BB** (where the country implements it as a shared service) | Cross-system consent management. |
| **Digital Wallet BB** | Patient holds health credentials (vaccination certificates, prescription QR codes, insurance card). |
| **Messaging BB** | Patient appointment reminders, vaccination notifications, public-health communications. |

### 6.1.2 Health-specific complementary BBs

The health sector requires three complementary BBs that are not in the GovStack core but are widely deployed in mature national e-health architectures.

| Health BB | Function | Reference implementations |
|-----------|----------|---------------------------|
| **FHIR Server** | Canonical clinical-data exchange API; consumed by every EHR, LIS, RIS, pharmacy, and HIE. | HAPI FHIR (open-source); Microsoft FHIR Server; Smile CDR (commercial). |
| **Master Patient Index** | Probabilistic patient matching across sources; authoritative patient identity for the health system. | OpenEMPI; commercial MPI products; integrated within FHIR Server in some deployments. |
| **Clinical Terminology Service** | Lookups, validation, expansion, and translation across SNOMED CT, LOINC, ICD-11, ATC, country-specific value sets. | Terminology Server (HAPI); Snowstorm (SNOMED); commercial terminology services. |

These three BBs are part of every national e-health EA. They are not country-specific bespoke; mature open-source implementations exist for all three.

## 6.2 Priority Building Blocks for Health by maturity level

The deployment sequence for the eleven BBs (eight GovStack + three health-specific) follows the maturity-level mapping in Section 2.4. A typical sequence:

| Maturity / Wave | BBs deployed |
|-----------------|--------------|
| **Wave 1 (Maturity Level 2)** | Identity BB; Registration BB; Information Mediator BB; FHIR Server; Master Patient Index |
| **Wave 2 (Maturity Level 3)** | Workflow BB; Payment BB (where insurance exists); Clinical Terminology Service; Messaging BB |
| **Wave 3 (Maturity Level 3 → 4)** | Consent BB; Digital Wallet BB |
| **Wave 4 (Maturity Level 4)** | Advanced BBs (data analytics platform, AI-assisted diagnostics, telehealth platform extensions) |

The Wave allocation is indicative. Country context shifts it. A country with mature National ID and an existing X-Road bus can deploy Wave 1 health BBs in 6–9 months team-effort time. A country without these foundations needs to deploy them first (typically as a Wave 0 health-foundation programme) before health-specific BBs become useful.

## 6.3 BB integration with health-sector applications

Each application domain (Section 3.1) consumes a recognisable subset of BBs.

| Application | BBs consumed |
|-------------|--------------|
| EHR / HMIS | Identity (patient + clinician); MPI; FHIR Server; Information Mediator; Workflow; Messaging; Terminology |
| LIS | FHIR Server; Identity (clinician); Terminology (LOINC) |
| RIS / PACS | FHIR Server; Identity (clinician); imaging-specific (DICOM, IHE XDS-I) |
| Pharmacy | FHIR Server; Identity; Payment (where applicable); e-Prescription Service |
| Public Health Surveillance | FHIR Server; Information Mediator; Messaging; Terminology |
| Patient Portal | Identity (patient via National ID); FHIR Server; Consent BB; Digital Wallet |
| Health Insurance Claims | Identity; Information Mediator; Workflow; Payment; FHIR Server (Claim resource) |

## 6.4 Building blocks vs sourcing decisions

The Sourcing Decision Matrix (TK-39, T60 §6.1) is applied to every BB-consuming capability. Per the per-domain defaults in T60 §3.1, foundational DPI BBs are Configure (the country operates them as DPI; the health sector integrates). Health-specific BBs (FHIR Server, MPI, Terminology Service) are also Configure where mature open-source or commercial implementations exist (HAPI FHIR, OpenEMPI, Snowstorm). Build is reserved for sectoral business logic (notifiable-disease detection rules, eligibility predicates for disease-specific programmes, country-specific clinical decision-support content).

A representative Bespoke Footprint for a deployed national health EA at Maturity Level 3 is in the range 10–15% — higher than Customs (8%) or Lesotho ASMS (8%) because the sectoral business logic is more complex, but well below the 20% overall target.

---

# Section 7: Implementation Path

## 7.1 Indicative timeline

The implementation timeline is indicative and assumes a country at Maturity Level 1 (Initial / Ad-Hoc) at programme start. Mobilisation phase per T15 §4.1 (legal, political, budget, procurement, capacity readiness) precedes Wave 1 and typically takes 12–24 months for a national health EA programme. Team-effort time inside each Wave is shown in the table below.

| Wave | Maturity target | Team-effort time | Indicative deliverables |
|------|----------------|------------------|-----------------------|
| Wave 1 — Foundation | Level 2 | 18 months | NPI; FHIR Server; HIE infrastructure; Identity/Registration/Information Mediator BB integration; first SDA (typically a teaching hospital) on FHIR-first EHR; H-PDU-08 Digital Health Strategy in force; legal and governance framework |
| Wave 2 — Pilot | Level 3 partial | 12 months | Five additional SDAs onboarded; Workflow + Payment + Terminology BBs deployed; e-Prescription Service operational; surveillance platform live for top-five notifiable diseases |
| Wave 3 — National rollout | Level 3 | 24 months | National coverage of public-hospital network; insurance claims platform live; patient portal live; vaccination registry national-scale |
| Wave 4 — Optimisation | Level 4 | Ongoing | Telemedicine; AI-assisted decision support; advanced analytics; cross-border health data exchange |

Calendar time is longer than team-effort time per T15 §4.2. A national health EA typically takes 4–6 years calendar time from Wave 1 start to Wave 3 completion.

## 7.2 Critical path

The critical path runs through:

1. Legal framework (T15 §3.1; the e-Health Reference Model §2.1 universal legal requirements). Health data protection legislation is a precondition for FHIR-first deployment. Estimated 12–18 months for new legislation.
2. National Patient Index (Wave 1). Without an authoritative patient identifier, the entire architecture is unreliable.
3. First SDA (Wave 1). Demonstrates the architecture and produces the lessons that shape Wave 2 onwards.
4. Workforce capacity (T15 §3.5; the e-Health Reference Model §7). Health-IT capacity in country governments is typically thinner than for general digital government; intentional capacity-building from Wave 1.

## 7.3 Common anti-patterns

The e-Health Reference Model §3.6 catalogues ten anti-patterns. The four most common in practice are:

- **Anti-Pattern #1 — Big-Bang National Deployment.** Trying to deploy the national e-health platform across all SDAs simultaneously. Treated by the Strangler Fig pattern in T16 §5; Wave-based roadmap in PAERA §5.7.
- **Anti-Pattern #2 — Vendor Lock-In Architecture.** A single vendor's product covering EHR, HMIS, LIS, RIS/PACS, pharmacy, surveillance. Treated by domain decomposition in T60 §3 and procurement governance in T16 §3.5.
- **Anti-Pattern #3 — Standards Adoption Delayed.** Deploying systems without committing to FHIR-first. Treated by Architectural Principle 3 in Section 1.4 above.
- **Anti-Pattern #5 — Insufficient Security & Privacy.** Treating GDPR-equivalent requirements as a Wave 4 concern. Treated by Architectural Principle 2 in Section 1.4 above and by the legal-touch-points discipline in T60 §6.2 and TK-32.

## 7.4 Cross-references

| Topic | Reference |
|-------|-----------|
| Public-sector reality (legal, political, budget, procurement, capacity) | T15 |
| Architectural traps and Strangler Fig | T16 |
| Stakeholder engagement (Tier 1 / Tier 2 / Tier 3) | T59 |
| Sourcing strategy and Bespoke Footprint | T60 |
| Interoperability framework (the substrate the health sector consumes — Information Mediator BB; X-Road; cross-government integration) | 08-Interoperability |
| DPI roadmap (the foundational pillars — Identity, Data, Interoperability, Access, Governance — that health-sector EA depends on) | 09-DPI |
| Detailed technical architecture, ADRs, anti-patterns | e-Health Ecosystem Architecture Reference Model v1.0 (FiscalAdmin OÜ, October 2025) |
| FHIR specification | hl7.org/fhir |
| GovStack BB specifications | specs.govstack.global |
| WHO Digital Health resources | who.int/health-topics/digital-health |
| ITU/WHO National eHealth Strategy Toolkit | who.int + itu.int |

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

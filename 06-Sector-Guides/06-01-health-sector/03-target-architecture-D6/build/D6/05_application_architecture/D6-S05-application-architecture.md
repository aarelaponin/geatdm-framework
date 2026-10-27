# 5. Application Architecture (To-Be)

The application architecture defines the target application portfolio for the Ministry of Health's digital health ecosystem — the specific systems, platforms, and tools that will deliver the business capabilities described in Section 3, manage the data governed by Section 4, and operate through the integration flows specified in Section 6 and the technology infrastructure detailed in Section 7. It translates strategic intent into a concrete, actionable landscape of health information systems.

The current state, documented in D5, reveals an application landscape of at least eight distinct systems operating largely in isolation. DHIS2 (operational since 2010) serves as the national HMIS but is used almost exclusively for aggregate facility reporting, with limited exploitation of its Tracker capabilities for individual-level data. eCRVS/CIVIS (about 1 million registrations, ~50% population coverage) and e-NHIS (15,000–20,000 beneficiaries against a 60,000 target) function as standalone applications with no automated data exchange between them — the planned eCRVS-to-e-NHIS integration targeted for August 2025 remains undelivered. SPT provides immunisation tracking across all ~90 facilities with over 99% data accuracy, but its hybrid paper-scan workflow introduces digitisation delays that prevent real-time decision support. A-LIS exists at early pilot stage with limited adoption. IDSR surveillance remains ~90% paper-based. The NMRI clinical EMR operates autonomously within a research context. The sole operational automated integration flow within MoH is SPT-to-DHIS2 for aggregate immunisation data.

This section specifies the target application portfolio across four functional layers — national health platform (Section 5.2), clinical systems (Section 5.3), health administration (Section 5.4), and surveillance (Section 5.5) — followed by a comprehensive application modernisation strategy (Section 5.6) that maps every current system to a specific disposition decision, and a portfolio summary table (Section 5.7) that consolidates the complete target landscape. Every application decision in this section is governed by the twelve design decisions established in Section 2 and grounded in the architecture principles HP-01 through HP-10.

---

## 5.1 Target Application Portfolio Overview

### 5.1.1 Application Landscape Organisation

The target application portfolio is organised into four functional layers, each aligned with a distinct set of business capabilities from the capability map defined in Section 3. This layered organisation reflects the eHealth Reference Architecture's five-layer model (Foundation, Data, Integration, Service, User Interface) adapted to Progressa's health sector context and maturity level. The layers are:

**Layer 1 — National Health Platform.** The foundational data and interoperability infrastructure on which all other health applications depend. This layer comprises DHIS2 (strengthened as national HMIS and program management platform), the Health Information Exchange (HIE) based on OpenHIE architecture, and the Master Patient Index (MPI). These are shared national assets, not owned by any single program or directorate, governed through the NDHSC and operated by the Digital Health and Data Directorate (DHDD).

**Layer 2 — Clinical Systems.** Patient-facing applications that capture individual-level clinical data at the point of care. This layer includes the Electronic Health Record (EHR) based on OpenMRS, the Electronic Immunisation Registry (EIR) transitioning from SPT to DHIS2 Tracker, and the Laboratory Information System (A-LIS/OpenELIS). These systems serve health workers directly and generate the clinical data that flows upward through the HIE to aggregate reporting, surveillance, and analytics.

**Layer 3 — Health Administration.** Systems that support the administrative functions underpinning health service delivery — health insurance (e-NHIS), civil registration (eCRVS), and pharmaceutical supply chain (eLMIS). These systems are critical integration partners rather than clinical tools; they exchange data with clinical systems through the HIE to enable automated processes such as insurance verification at the point of care, birth-triggered immunisation scheduling, and stock-informed prescribing.

**Layer 4 — Surveillance.** Applications dedicated to public health surveillance and outbreak detection. This layer includes the modernised IDSR (transitioning from paper to DHIS2 Tracker-based electronic case reporting), event-based surveillance for signal detection, and community-based surveillance through mobile tools for Community Health Workers (CHWs). Surveillance applications consume data from clinical systems and feed into DHIS2 analytics and international reporting obligations (IHR).

### 5.1.2 Target Application Landscape Diagram

The following text-based diagram illustrates the target application landscape and its primary data flows. All inter-application communication passes through the HIE (OpenHIM) integration layer, eliminating point-to-point integrations. Systems above the integration layer produce and consume health data; the integration layer mediates, routes, and transforms that data; the national platform layer provides shared registries and the aggregate data platform.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        LAYER 4: SURVEILLANCE                                │
│  ┌──────────────┐  ┌─────────────────────┐  ┌──────────────────────────┐   │
│  │ IDSR (DHIS2  │  │ Event-Based         │  │ Community-Based          │   │
│  │ Tracker)     │  │ Surveillance (EBS)  │  │ Surveillance (CBS/CHW)   │   │
│  └──────┬───────┘  └──────────┬──────────┘  └────────────┬─────────────┘   │
└─────────┼──────────────────────┼──────────────────────────┼─────────────────┘
          │                      │                          │
┌─────────┼──────────────────────┼──────────────────────────┼─────────────────┐
│         │          LAYER 3: HEALTH ADMINISTRATION         │                 │
│  ┌──────┴───────┐  ┌──────────┴──────────┐  ┌────────────┴─────────────┐   │
│  │ e-NHIS       │  │ eCRVS / CIVIS       │  │ eLMIS                    │   │
│  │ (Insurance)  │  │ (Civil Registration)│  │ (Supply Chain)           │   │
│  └──────┬───────┘  └──────────┬──────────┘  └────────────┬─────────────┘   │
└─────────┼──────────────────────┼──────────────────────────┼─────────────────┘
          │                      │                          │
┌─────────┼──────────────────────┼──────────────────────────┼─────────────────┐
│         │            LAYER 2: CLINICAL SYSTEMS            │                 │
│  ┌──────┴───────┐  ┌──────────┴──────────┐  ┌────────────┴─────────────┐   │
│  │ EHR          │  │ EIR                 │  │ LIS                      │   │
│  │ (OpenMRS)    │  │ (DHIS2 Tracker /    │  │ (A-LIS / OpenELIS)      │   │
│  │              │  │  SPT coexistence)   │  │                          │   │
│  └──────┬───────┘  └──────────┬──────────┘  └────────────┬─────────────┘   │
└─────────┼──────────────────────┼──────────────────────────┼─────────────────┘
          │                      │                          │
          ▼                      ▼                          ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                    INTEGRATION LAYER (OpenHIM)                               │
│  ┌───────────┐  ┌──────────┐  ┌────────────┐  ┌───────────────────────┐    │
│  │ Routing &  │  │ FHIR     │  │ Audit &    │  │ Legacy Adapters       │    │
│  │ Mediation  │  │ Façades  │  │ Logging    │  │ (ADX, custom API)     │    │
│  └───────────┘  └──────────┘  └────────────┘  └───────────────────────┘    │
└────────────────────────────────────┬────────────────────────────────────────┘
                                     │
┌────────────────────────────────────┼────────────────────────────────────────┐
│                   LAYER 1: NATIONAL HEALTH PLATFORM                         │
│  ┌──────────────┐  ┌──────────────┴──────────────┐  ┌──────────────────┐   │
│  │ DHIS2        │  │ Master Registries            │  │ Terminology      │   │
│  │ (National    │  │ ┌─────────┐ ┌────────────┐  │  │ Service (OCL)    │   │
│  │  HMIS +      │  │ │ MPI     │ │ Facility   │  │  │                  │   │
│  │  Tracker)    │  │ │(OpenCR) │ │ Registry   │  │  │                  │   │
│  │              │  │ └─────────┘ └────────────┘  │  │                  │   │
│  └──────────────┘  └─────────────────────────────┘  └──────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

The key architectural principle governing this diagram is **mediated integration** (Design Decision DD-01): no application communicates directly with another application. All data exchange passes through the OpenHIM integration layer, which enforces security policies, transforms data between formats (FHIR, ADX, legacy APIs), logs all transactions for audit, and routes requests to the appropriate destination system. This principle eliminates the spaghetti of point-to-point integrations that characterise the current landscape and enables independent evolution of individual applications without breaking the broader ecosystem.

---

## 5.2 National Health Platform Layer

The national health platform layer provides the shared data infrastructure and interoperability services on which all other health applications depend. This layer is not a clinical system — health workers do not interact with it directly. It operates as the backbone that connects clinical, administrative, and surveillance applications into a coherent ecosystem.

### 5.2.1 DHIS2 — National Health Management Information System

**Current State.** DHIS2 has been operational since 2010 and serves as Progressa's national HMIS platform. All ~90 health facilities report monthly aggregate data through DHIS2. The platform also receives aggregate immunisation data from SPT and weekly IDSR surveillance reports. However, DHIS2 is used predominantly for aggregate reporting and basic indicator dashboards. Its Tracker module — capable of individual-level longitudinal data capture — has been deployed for COVID-19 vaccination tracking but is not systematically used for routine health programs.

**Target State.** DHIS2 will be retained and significantly strengthened as the national health data platform, serving three distinct but integrated functions:

*Aggregate HMIS (continuing role).* Monthly facility reporting remains the backbone of national health statistics. The target is to increase reporting completeness from approximately 70–80% to 95% or above by 2033, with timeliness (reporting within 15 days of month-end) reaching 95%. This requires expanding the validation rule library (currently limited) to cover all priority indicators, enforcing rules at data entry time to block submission of invalid data, and deploying the full WHO Health Data Toolkit packages for standardised dashboards, scorecards, and bottleneck analysis.

*Tracker Programs (expanded role).* DHIS2 Tracker will be deployed for three priority individual-level programs:

- **Electronic Immunisation Registry (EIR):** A DHIS2 Tracker-based EIR programme aligned with the WHO Digital Adaptation Kit for immunisation, providing real-time individual child records, automated defaulter tracking, and decision support at the point of care. This programme will progressively replace SPT's aggregate reporting function (see Section 5.3.2 for the detailed coexistence and transition strategy).
- **Case-Based Disease Surveillance (IDSR+):** Individual case notification and follow-up for notifiable diseases, replacing the current ~90% paper-based IDSR workflow. Each suspected case generates a tracked entity instance with event-based follow-up (investigation, laboratory confirmation, outcome, contact tracing). This enables real-time outbreak detection rather than weekly aggregate reporting (see Section 5.5.1).
- **RMNCH Tracking:** Reproductive, maternal, newborn, and child health tracking for antenatal care, delivery, postnatal care, and child growth monitoring. This aligns with the e-NHIS maternal health focus (the 19 essential interventions currently covered are predominantly maternal and newborn) and creates the individual-level clinical data needed for continuity of care.

*Analytics Platform (strengthened role).* DHIS2's analytics capabilities will be systematically expanded through WHO standard packages (Health Data Toolkit), GIS-based coverage mapping leveraging eCRVS geo-coded facility data, equity analysis dashboards disaggregating coverage by region and facility type, and integration with the national health data warehouse (Section 4.4) for advanced cross-system analytics.

**Version Upgrade Path.** The current DHIS2 instance should be upgraded to the latest stable Long-Term Support (LTS) release to gain improved Tracker performance, enhanced FHIR support, and better offline capabilities for the Android Capture App. Upgrades should follow the DHIS2 recommended upgrade path (one major version at a time), with each upgrade validated in a staging environment before production deployment. The DHDD DHIS2 Data Manager (Section 4.1.2) is accountable for managing the upgrade lifecycle.

**Integration Interfaces.** DHIS2 participates in the HIE through several interface types: its native REST API for aggregate data operations (indicator queries, data value sets, organisation unit management); ADX (Aggregate Data Exchange) profile for standardised aggregate data interchange with other systems via OpenHIM; a FHIR Façade adapter exposing Tracker data (individual immunisation records, case-based surveillance events) as FHIR resources (Immunization, Condition, Encounter) for consumption by other HIE-connected systems; and inbound data feeds from eLMIS (stock data mapped to DHIS2 data elements for stock-out indicators), LIS (aggregate laboratory statistics), and facility-level clinical systems.

### 5.2.2 Health Information Exchange (HIE)

**Design Decision Reference.** DD-01 (OpenHIE as the interoperability framework) and DD-06 (FHIR R4 as target integration standard, with FHIR Façade wrappers for existing systems).

The Health Information Exchange is the integration backbone that connects all health applications into a coherent ecosystem. It is based on the OpenHIE architecture — an internationally recognised, standards-based reference architecture implemented in varying degrees of maturity in Tanzania, Ethiopia, Rwanda, Uganda, Malawi, and Kenya. Progressa's HIE implementation follows the OpenHIE logical architecture while adapting to the country's scale (~2–3 million population, ~90 health facilities) and resource constraints.

**Core HIE Components.**

*OpenHIM — Interoperability Layer.* OpenHIM (Open Health Information Mediator) serves as the central mediator through which all inter-system data exchange flows. It performs five critical functions:

- **Routing:** Directs incoming requests from source systems to the appropriate destination system or registry based on message type, content, and routing rules.
- **Orchestration:** Coordinates multi-step workflows that involve multiple systems. For example, a birth registration event from eCRVS triggers a sequence: create identity in MPI → create enrollment record in e-NHIS → generate immunisation schedule in EIR. OpenHIM orchestrates this sequence, handling success, partial failure, and retry logic.
- **Transformation:** Converts data between formats and standards. Legacy systems that expose custom APIs or ADX are transformed to FHIR for downstream consumers, and vice versa. This includes DHIS2 ADX-to-FHIR conversion, e-NHIS proprietary format-to-FHIR Claims mapping, and SPT data-to-FHIR Immunization resource mapping during the coexistence period.
- **Security Enforcement:** Authenticates and authorises all system-to-system requests. Each connected application has a registered identity, certificate, and permission set defining which HIE services it may access. All requests are validated before routing.
- **Audit Logging:** Every transaction processed by OpenHIM is logged with timestamp, source, destination, payload hash, response code, and processing time. These logs provide the transaction audit trail required for data governance compliance (Section 4.1) and are essential for debugging integration issues.

OpenHIM is lightweight by design and suitable for Progressa's scale. A single OpenHIM instance hosted on the G-Cloud infrastructure (or on interim PDGA data centre resources before G-Cloud is available) can handle the anticipated transaction volume — estimated at fewer than 50,000 transactions per day in the target state, based on facility visit volumes, surveillance notifications, and insurance claims.

*Client Registry / Master Patient Index (MPI).* See Section 5.2.3 for detailed specification.

*Facility Registry.* The DHIS2 organisation unit hierarchy serves as the canonical facility registry, as established in Section 4.2.2. The HIE exposes facility data through an IHE mCSD-compliant FHIR interface (Location and Organization resources), allowing any connected application to discover and validate facility identifiers, names, coordinates, service types, and administrative hierarchy. This eliminates the current problem of inconsistent facility identification across systems — each system currently maintains its own facility list with different codes and naming conventions.

*Terminology Service.* The Open Concept Lab (OCL) platform provides managed health terminology services for the HIE, as specified in Section 4.2.3. It manages ICD-11 (diagnosis coding, priority Phase 1), LOINC (laboratory test coding, priority Phase 1), SNOMED CT GPS (clinical terminology, Phase 2), and ATC (pharmaceutical classification, Phase 2). The terminology service exposes FHIR CodeSystem and ValueSet resources, enabling connected applications to validate codes, look up display terms, and map between code systems.

*Shared Health Record (SHR).* A lightweight longitudinal patient record repository that stores FHIR documents (Bundle resources) contributed by connected clinical systems. The SHR does not replace source system databases — it aggregates summary clinical information (encounter summaries, immunisation records, laboratory results, diagnosis lists) into a patient-centred longitudinal view accessible through the MPI identifier. This enables continuity of care when a patient moves between facilities or programs. The SHR is implemented as a FHIR server (such as HAPI FHIR) fronted by OpenHIM for access control. Its initial scope is limited to immunisation history, maternal health encounter summaries, and HIV/ART status (matching the EHR Phase 1 scope).

**HIE Implementation Phasing.**

- **Phase 1 (2026–2027, 18–24 months):** Minimal viable HIE — OpenHIM deployment, MPI with eCRVS NIN federation, facility registry (DHIS2 org units exposed via mCSD), and 2–3 priority integration flows: eCRVS→MPI→e-NHIS (birth triggers insurance enrollment), SPT/EIR→DHIS2 (immunisation data), IDSR Tracker→DHIS2 (case-based surveillance to aggregate dashboard).
- **Phase 2 (2027–2029):** Extended HIE — terminology service deployment, SHR initialisation, EHR (OpenMRS) integration with MPI and SHR, LIS→DHIS2 and LIS→IDSR flows, eLMIS→DHIS2 stock data, e-NHIS claims integration with EHR.
- **Phase 3 (2029–2033):** Mature HIE — full SHR with cross-program patient summaries, advanced orchestration workflows, cross-border data exchange capabilities (REC health data portability), and FHIR-native interfaces for all connected systems (retiring legacy adapters).

### 5.2.3 Master Patient Index (MPI)

**Design Decision Reference.** DD-05 (eCRVS NIN as foundational patient identifier) and DD-06 (FHIR R4 as target integration standard).

The absence of a unified patient identifier is the single most critical data architecture gap in Progressa's current health information landscape. Patients exist in eCRVS (with a NIN), in e-NHIS (with an NHIS ID), in SPT (with a child ID), in facility registers (with medical record numbers — MRNs — that are facility-specific), and potentially in future EHR systems — with no mechanism to link these identities. This prevents continuity of care across facilities, accurate insurance verification, complete immunisation histories, and reliable epidemiological analysis.

**Platform Selection: OpenCR.** The MPI will be built on OpenCR (Open Client Registry), an open-source client registry developed by IntraHealth International and aligned with the OpenHIE architecture. OpenCR is designed specifically for low- and middle-income country health systems and provides:

- A FHIR-native data model (Patient resources with multiple identifiers).
- Configurable matching algorithms supporting both deterministic and probabilistic matching.
- An identifier federation model that links multiple identifiers to a single golden record.
- Integration with OpenHIM for mediated access.
- Support for bulk data loading (initial population from eCRVS and e-NHIS records) and real-time matching (new registrations and encounter-time lookups).

**Identifier Federation Model.** The MPI federates six identifier types, arranged in a trust hierarchy reflecting data quality and verification rigour:

| Rank | Identifier | Source System | Trust Level | Assignment Trigger |
|------|-----------|---------------|-------------|-------------------|
| 1 | eCRVS NIN (Birth Registration) | eCRVS / CIVIS | Highest | Birth registration with biometric capture |
| 2 | National ID (Immigration NIN) | National ID System | High | Immigration identity verification (adult) |
| 3 | e-NHIS Member ID | e-NHIS | Medium-High | Insurance enrollment (verified against eCRVS where available) |
| 4 | Facility MRN | Facility registers / EHR | Medium | Patient registration at health facility |
| 5 | DHIS2 Tracker Entity ID | DHIS2 Tracker programs | Medium | Enrollment in Tracker program (EIR, IDSR, RMNCH) |
| 6 | SPT Child ID | SPT / Vaxa | Medium | Immunisation registration (during coexistence period) |

The eCRVS NIN is the anchor identifier. Where a patient has a NIN, all other identifiers are linked to it in the MPI golden record. Where a patient lacks a NIN (the ~50% of the population not yet registered in eCRVS), the MPI creates a provisional golden record using the best available identifier(s) and probabilistic matching on demographic attributes (name, date of birth, sex, mother's name, facility of birth/registration). When such patients subsequently register in eCRVS and receive a NIN, the MPI links the NIN to the existing provisional record.

**Matching Algorithm Configuration.** OpenCR supports configurable matching rules. For Progressa's context, the matching configuration uses a two-pass approach:

*Deterministic pass (first).* Exact match on any shared identifier — if a patient presents a NIN that matches an existing MPI record, the match is confirmed immediately with no ambiguity. This handles the majority of lookups once eCRVS coverage increases.

*Probabilistic pass (fallback).* When no identifier match is found, OpenCR applies a weighted probabilistic algorithm on demographic attributes: full name (accounting for variant spellings and naming conventions in the national languages), date of birth (exact match or ±3 days for neonates where birth dates may be approximate), sex, mother's name (critical for paediatric matching), and facility of birth or registration. Matches above a configurable threshold (e.g., 85% probability) are auto-linked; matches in the uncertain range (70–85%) are flagged for manual review by the DHDD Integration Data Steward; matches below 70% are treated as new patients.

**Data Quality Requirements.** The MPI is only as good as the data fed into it. Section 4.1.3 establishes data quality targets for completeness, accuracy, and uniqueness. For the MPI specifically:

- **Duplicate rate target:** Less than 5% unresolved duplicates by 2028; less than 2% by 2033.
- **Coverage target:** All patients presenting at EHR-enabled facilities are registered in the MPI by 2029; all eCRVS-registered individuals are loaded into the MPI by 2027.
- **Data quality enforcement:** New patient registrations from any connected system must include a minimum demographic data set (name, date of birth, sex, and at least one identifier) to be accepted by the MPI. Registrations missing mandatory fields are rejected with an error code directing the source system to collect the missing data.

**MPI Deployment Phasing.**

- **Phase 1 (2026–2027):** Deploy OpenCR, bulk-load eCRVS records (about 1 million registered identities), establish eCRVS→MPI real-time feed for new birth registrations, bulk-load e-NHIS beneficiary records (15,000–20,000), configure matching algorithms, and establish the eCRVS NIN→e-NHIS ID linkage as the first production use case.
- **Phase 2 (2027–2029):** Integrate MPI with EHR (OpenMRS) — patient lookup at registration, facility MRN linkage. Integrate MPI with DHIS2 Tracker (EIR, IDSR) — tracked entity identity resolution. Integrate MPI with LIS — specimen and result identity matching.
- **Phase 3 (2029–2033):** Full coverage — all health information systems perform MPI lookup before creating patient records. Deduplication drives duplicate rate below 2%. MPI serves as the patient identity authority for cross-border health data exchange.

---

## 5.3 Clinical Systems Layer

Clinical systems capture individual-level health data at the point of care. They are the primary interface between health workers and the digital health ecosystem — the applications that clinicians, nurses, pharmacists, and laboratory technicians interact with during patient encounters. The design of this layer is governed by two overarching principles: **offline-first architecture** (HP-03, reflecting ~60% national electricity access and single submarine cable dependency) and **incremental deployment** (HP-01, starting with the highest-impact clinical workflows before expanding).

### 5.3.1 Electronic Health Record (EHR) Strategy

**Design Decision Reference.** DD-03 (OpenMRS as preferred EHR platform) and DD-12 (phased deployment starting with 15–20 high-volume facilities, not all ~90).

**Current State.** Progressa currently has no national EHR system. Clinical records at ~90% of health facilities are paper-based. The NMRI operates a comprehensive EMR (NMRI EMRS, since 2015) for its research facilities, but this system is autonomous and not integrated with national health information systems. A 2022 survey found ~90% healthcare professional readiness for digital clinical tools — a significant asset, indicating that adoption barriers are more infrastructural than attitudinal.

**Platform Selection: OpenMRS.** OpenMRS is selected as the national EHR platform based on evidence from comparable African deployments:

- **Kenya (KenyaEMR):** Deployed across national HIV/ART and primary care programmes, managing over 130,000 HIV patients through the AMPATH programme, with OpenMRS serving millions of patient records.
- **Uganda (UgandaEMR):** National HIV programme EHR, deployed across hundreds of facilities.
- **Rwanda, Malawi, Mozambique, Zambia, Côte d'Ivoire:** All use OpenMRS-based platforms for national disease programme management.

OpenMRS is preferred over alternatives (Bahmni, GNU Health, OpenEMR) because it has the largest African public-sector deployment base, a mature implementer ecosystem in East and Southern Africa (IntelliSOFT, Palladium, Mekom), proven offline capability through facility-level servers with intermittent sync, a FHIR module providing native FHIR API access, and Java/Spring architecture with MySQL/PostgreSQL backend — technologies for which regional technical capacity exists. Bahmni (which wraps OpenMRS with Odoo ERP and OpenELIS) may be considered for hospitals requiring integrated ERP and laboratory modules, but the initial deployment will use core OpenMRS to minimise complexity.

**Phased Deployment Strategy.**

*Phase 1 (2026–2028): Maternal Health + HIV/ART at 15–20 High-Volume Facilities.* The first deployment targets two clinical domains with the strongest business case and existing donor support:

- **Maternal health**: Antenatal care, delivery, and postnatal care records. This aligns with the e-NHIS focus (19 essential interventions are predominantly maternal/newborn) and the EHSSP project objectives. Digitising maternal care records enables automated insurance eligibility verification at the point of care, continuity of care across facilities during the antenatal-delivery-postnatal continuum, and quality indicator tracking for EHSSP performance monitoring.
- **HIV/ART**: Treatment records, viral load tracking, and appointment management. HIV/ART programmes have the strongest precedent for OpenMRS deployment in Africa (PEPFAR-funded implementations across the continent) and generate high-value clinical data requiring longitudinal tracking.

Facility selection criteria for Phase 1: facilities with highest delivery volumes and HIV/ART patient loads, existing electricity supply (grid or solar), mobile network coverage for data synchronisation, and facility management willing to champion digital adoption. This typically selects regional hospitals, major health centres, and high-volume maternity facilities — estimated at 15–20 from the ~90-facility network.

*Phase 2 (2028–2030): Outpatient Services at 30–40 Facilities.* Expand OpenMRS to cover general outpatient encounters at Phase 1 facilities (adding outpatient consultations, prescribing, and referrals to the existing maternal health and HIV modules) and deploy to an additional 15–20 facilities, reaching a total of 30–40. Outpatient digitisation generates the encounter data needed for disease surveillance (suspected case detection triggers IDSR notification), pharmaceutical consumption data (informing eLMIS demand forecasting), and comprehensive patient records accessible through the SHR.

*Phase 3 (2030–2033): Consolidation and Selective Expansion.* Evaluate EHR adoption outcomes from Phases 1 and 2 before further expansion. Priorities include extending to remaining facilities where infrastructure and capacity allow, adding inpatient modules at hospitals, and deepening clinical decision support (drug interaction checking, treatment protocol alerts). This phase explicitly acknowledges that achieving 100% facility EHR coverage by 2033 is unrealistic given infrastructure constraints — the target is 30–40 facilities with functioning, well-adopted EHR systems rather than ~90 facilities with poorly adopted ones.

**Offline-First Architecture.** Every OpenMRS deployment operates on an offline-first model:

- Each facility runs a local OpenMRS instance on a facility server (minimum specification: Intel NUC or equivalent, 16GB RAM, 256GB SSD, UPS with 4-hour battery backup).
- Health workers interact with the local instance via the facility LAN (wired Ethernet or Wi-Fi).
- When internet connectivity is available, the local instance synchronises with the central OpenMRS server at the national data centre (G-Cloud or interim PDGA hosting) through a store-and-forward synchronisation protocol.
- Clinical workflows are never interrupted by connectivity loss. Data entry, patient lookup, and clinical decision support all function locally.
- Synchronisation frequency depends on connectivity: real-time where broadband exists, scheduled (e.g., twice daily) where only mobile data is available, and manual (USB data transfer on field officer visits) as a last resort for facilities with no regular connectivity.

**FHIR Integration.** OpenMRS exposes clinical data through its FHIR module, generating FHIR R4 resources (Patient, Encounter, Observation, Condition, MedicationRequest, Immunization) that flow through OpenHIM to the SHR and to other connected systems. This enables insurance claims auto-population from encounter data (EHR→e-NHIS), surveillance case detection from clinical encounters (EHR→IDSR), aggregate indicator generation from individual records (EHR→DHIS2), and longitudinal patient summaries in the SHR.

### 5.3.2 Electronic Immunisation Registry (EIR)

**Design Decision Reference.** DD-07 (phased transition from SPT to DHIS2 Tracker EIR).

**Current State.** SPT (Vaxa scanned paper tracking) is one of Progressa's most successful health information deployments. It operates at all ~90 service delivery points, has registered 350,000–400,000 children, and achieves over 99% data accuracy — a level that few fully electronic systems in comparable settings can match. SPT's hybrid paper-scan workflow is a deliberate design choice for reliability: health workers fill standardised paper forms at the point of care, forms are scanned at regional centres, optical recognition digitises the data, and aggregate results flow to DHIS2.

However, SPT's architecture imposes limitations that become increasingly significant as Progressa's digital health ecosystem matures:

- **Digitisation delay:** Data is available only after scanning at regional centres, preventing real-time defaulter tracking, point-of-care decision support, and immediate SMS reminders.
- **Limited interoperability:** SPT data enters the broader ecosystem only as aggregates in DHIS2, not as individual FHIR-compliant immunisation records that can be linked to the MPI.
- **Scanning infrastructure dependency:** Regional scanning centres and their logistics are single points of failure.
- **No real-time decision support:** Health workers cannot receive automated schedule validation, contraindication alerts, or age-interval checks during the vaccination encounter.

**Target State: DHIS2 Tracker EIR.** The target Electronic Immunisation Registry is based on the DHIS2 Immunization eRegistry Tracker package, aligned with the WHO Digital Adaptation Kit (DAK) for immunisation. This provides:

- Real-time individual child records at the point of care (online via the DHIS2 web interface or offline via the DHIS2 Android Capture App).
- Automated scheduling: generation of due and overdue doses, defaulter lists, and appointment reminders.
- Decision support: age and interval validation, contraindication checks, vaccine schedule validation.
- Native DHIS2 integration: individual Tracker data aggregates automatically into DHIS2 dashboards and indicators, eliminating duplicate reporting.
- FHIR-based interoperability: Tracker immunisation events can be exposed as FHIR Immunization resources through the HIE.
- MPI linkage: each child in the EIR is linked to the MPI via eCRVS NIN (for registered children) or provisional MPI identifier.

**Coexistence and Transition Strategy.** The transition from SPT to DHIS2 Tracker EIR is designed as a gradual, evidence-based process — not a sudden replacement of a proven system.

*Short Term (2026–2027): Maintain SPT, Pilot DHIS2 Tracker EIR.* SPT continues to operate at all ~90 facilities as the primary immunisation data capture system. The DHIS2 Tracker EIR is configured, tested, and piloted at 10–15 facilities selected for adequate connectivity and staff capacity. Pilot facilities run both systems in parallel: health workers continue using SPT paper forms (maintaining the proven workflow) while selected staff also enter data into DHIS2 Tracker to validate the configuration, test offline/online workflows, measure data quality, and identify training needs. Pilot success criteria include: data completeness in Tracker ≥95% compared to SPT, data accuracy comparable to SPT's >99%, health worker time burden acceptable (Tracker entry does not add more than 5 minutes per vaccination session), and system availability ≥95% (including offline mode).

*Medium Term (2027–2029): Progressive Transition Where Infrastructure Allows.* Based on pilot results, expand DHIS2 Tracker EIR to facilities with adequate connectivity (mobile network or better), trained staff, and functioning devices (Android tablets or smartphones). At these facilities, DHIS2 Tracker becomes the primary data capture tool; SPT paper forms may be retained as backup for periods of device failure or staff absence but are no longer the primary workflow. SPT is retained as the primary system at facilities where connectivity or device availability does not yet support Tracker.

*Long Term (2029–2033): SPT Phase-Out as Coverage Allows.* As broadband coverage expands (RDIP infrastructure investments) and device deployment reaches more facilities, DHIS2 Tracker EIR progressively replaces SPT as the primary immunisation data capture system nationally. SPT is formally decommissioned only when Tracker coverage and data quality meet or exceed SPT's current performance across the facility network. This timeline explicitly acknowledges that full SPT replacement may extend beyond 2033 at the most remote facilities.

**Country Precedents.** The DHIS2 Tracker EIR approach draws on successful implementations:

- **Rwanda:** National DHIS2 EPI Tracker rolled out from 2019–2020, evaluated as meeting EIR functional criteria.
- **Maldives:** National DHIS2 Tracker EIR implemented in 2022; in the first year, 96% of newborns were registered and 70% of facilities (all birthing facilities) actively used the system.
- **Lao PDR:** DHIS2 Tracker EIR built for COVID-19, now being integrated into routine immunisation.
- **Progressa (COVID-19):** Progressa itself used DHIS2 Tracker for COVID-19 vaccination tracking, providing a foundation of institutional experience with the Tracker module for immunisation use cases.

### 5.3.3 Laboratory Information System (LIS)

**Current State.** A-LIS (Africa Laboratory Information System) guidelines were published in January 2023, but the system is at an early pilot stage with limited adoption. Laboratory data flows to DHIS2 are limited to basic aggregate values for HMIS reporting. The national reference laboratory and regional hospital laboratories rely on paper-based or basic spreadsheet-based workflows for specimen tracking, result recording, and quality assurance.

**Target State.** The laboratory information system strategy deploys A-LIS (or OpenELIS, depending on the outcome of a platform assessment during Phase 1) at the national reference laboratory and five regional hospitals first, then expands to additional laboratories as capacity allows.

**Phase 1 (2026–2028): Core Laboratory Network.** Deploy the LIS at the national reference laboratory (NRL) and the five regional hospitals with the highest test volumes. Priority functions include:

- Specimen tracking: barcode-based specimen identification from collection to result reporting.
- Result recording: structured entry of test results with validation rules.
- LOINC coding: map the priority test panel (approximately 200 tests covering haematology, clinical chemistry, microbiology, HIV monitoring, TB diagnostics, and malaria) to LOINC codes, enabling standardised result exchange through the HIE.
- Quality assurance: internal quality control workflows and participation in external quality assessment programmes.

**Phase 2 (2028–2030): Integration and Expansion.** Connect the LIS to the broader health ecosystem through three integration flows:

- **LIS→DHIS2 (aggregate laboratory statistics):** Automated generation of aggregate laboratory indicators (test volumes by type, turnaround times, positivity rates) from individual test records, eliminating manual aggregate compilation.
- **LIS→IDSR (notifiable disease triggers):** Automatic notification to the IDSR surveillance system when a laboratory result confirms a notifiable disease (e.g., positive malaria RDT at the NRL, culture-confirmed cholera, newly detected HIV case). This reduces the notification delay from the current manual process (health worker remembers to fill an IDSR form) to near-real-time electronic alerting.
- **LIS→EHR (clinical result delivery):** At facilities where both LIS and EHR are deployed, laboratory results are delivered directly into the patient's electronic health record, eliminating paper-based result communication and enabling clinical decision support based on recent test results.

Expand LIS deployment to additional laboratories based on test volumes, regional coverage requirements, and available infrastructure.

**Phase 3 (2030–2033): Full Laboratory Network Integration.** All laboratories in the national laboratory network are connected to the LIS. Advanced functions include electronic test ordering from EHR (order entry at clinical facilities, specimen collection guided by LIS), reagent and consumable tracking integrated with eLMIS (laboratory consumption data informs supply chain planning), and national laboratory quality dashboards in DHIS2.

---

## 5.4 Health Administration Layer

Health administration systems support the operational and financial functions that underpin health service delivery. These systems are not clinical tools — they manage insurance, identity, and supply chain — but their integration with clinical systems is essential for efficient health system operation.

### 5.4.1 e-NHIS — National Health Insurance System

**Current State.** The e-NHIS launched with Phase 1 pilot at the national Maternal and Child Health Hospital (about 500 women enrolled) and then expanded nationally, reaching about 70 contracted facilities and 15,000–20,000 beneficiaries. Against a target of 60,000 beneficiaries, enrollment stands at ~30%. The benefit package covers 19 essential health interventions with a maternal and newborn focus. Beneficiary satisfaction is above 95% and quality of care score is ~90%. However, the system operates in isolation — no integration with eCRVS, no integration with clinical systems, and no automated claims processing from EHR encounter data.

**Target State.** The e-NHIS will be retained and invested in to achieve three strategic objectives: scale enrollment to 60,000 beneficiaries and beyond, modernise claims processing for efficiency and fraud reduction, and integrate with the broader health information ecosystem.

**Enrollment Scaling.** The current ~30% enrollment achievement reflects the difficulty of in-person, facility-based enrollment processes. The target state introduces multiple enrollment channels:

- **Facility-based enrollment (continuing):** In-person enrollment at contracted facilities remains the primary channel, improved with faster processing through MPI integration (instant identity verification against eCRVS records).
- **Mobile enrollment — USSD:** A USSD-based enrollment channel accessible from any mobile phone (~80% ownership rate nationally). The USSD flow collects essential enrollment data (name, NIN or date of birth, sex, contact number), verifies identity against the MPI, generates a provisional enrollment record, and directs the applicant to a facility for biometric capture and card issuance. This channel reaches populations in rural areas without internet access.
- **Mobile enrollment — app:** A smartphone application for enrollment, benefit inquiry, and claim status checking. This channel serves the growing smartphone user base (mobile internet penetration ~70%) and supports offline enrollment with data synchronisation when connectivity is available.
- **Birth-triggered automatic enrollment:** The highest-impact enrollment channel. When eCRVS registers a birth, the HIE orchestrates a workflow: birth notification→MPI identity creation→e-NHIS enrollment record creation. The newborn is automatically registered as an e-NHIS beneficiary, and the mother receives an SMS confirmation with the child's NHIS ID. This channel leverages the existing eCRVS registration flow (about 1 million people registered, ongoing) and eliminates the enrollment friction that currently limits coverage. This requires the eCRVS→MPI→e-NHIS integration flow (HIE Phase 1).

**Claims Processing Modernisation.** Current claims processing is primarily facility-based with limited automation. The target state introduces:

- **Offline claims via CLAIM-it pattern:** Drawing on the Ghanaian CLAIM-it model (widely used for NHIS claims entry), an offline-capable claims application that runs on facility computers or tablets. Health workers enter clinical service codes and diagnoses during or immediately after patient encounters. The application validates claims against e-NHIS business rules (covered interventions, eligibility status, prior authorisation requirements) locally, stores validated claims, and submits them in batch when connectivity is available. This eliminates claims backlogs caused by connectivity interruptions and improves claims data quality through point-of-entry validation.
- **EHR-to-claims auto-population:** At facilities where OpenMRS EHR is deployed (Phase 1: 15–20 facilities), encounter data generates pre-populated claims — the clinician's diagnosis, procedures, and prescriptions are automatically mapped to e-NHIS service codes, creating a draft claim that requires only review and submission rather than manual re-entry. This reduces the dual documentation burden (clinical record plus insurance claim) that currently limits provider engagement with e-NHIS.
- **Mobile money integration (via ProgressaPay):** Provider reimbursement and potentially member premium payments are processed through ProgressaPay, Progressa's government payment platform and the only operational cross-ministry real-time integration in the government. This leverages existing infrastructure and extends ProgressaPay's utility to the health financing domain.

**FHIR-Based Claims Interoperability.** New claims interfaces should conform to FHIR Financial Resources (Claim, ClaimResponse, ExplanationOfBenefit, Coverage), enabling standardised data exchange between the e-NHIS, the HIE, and potentially future integration with regional health financing mechanisms. This is a medium-term objective (Phase 2, 2028–2030) aligned with the overall FHIR adoption roadmap.

**Benefit Package Expansion.** The current 19-intervention package focused on maternal and newborn health will expand progressively as enrollment grows and financial sustainability improves. The EA does not prescribe the specific expansion path (a policy decision for NHIA and MoH), but the target architecture ensures that the e-NHIS platform can accommodate: additional intervention categories (outpatient, inpatient, chronic disease management), tiered benefit packages (basic, comprehensive), income-based premium differentiation, and integration with pharmaceutical benefits (e-NHIS authorisation for eLMIS dispensing).

### 5.4.2 eCRVS — Electronic Civil Registration and Vital Statistics

**Current State.** eCRVS (CIVIS platform) has registered about 1 million individuals (~50% population coverage) since its recent launch. It assigns NINs and QR codes, with GIS-based registration. The system is operated by MoH's Civil Registration Unit but is not integrated with any other health information system — the planned eCRVS-to-e-NHIS integration targeted for August 2025 remains undelivered. A critical complication is that eCRVS-issued NINs and Immigration Department NINs are not synchronised, creating two parallel national identifier systems.

**Target Role.** eCRVS is not an MoH-owned system for modernisation — its development roadmap is determined by the Civil Registration Unit and the eCRVS platform vendor. However, eCRVS is a critical integration partner for the health information ecosystem. The target architecture defines three essential integration flows that MoH requires from eCRVS, all mediated through the HIE:

**Integration 1: eCRVS→MPI (birth = identity creation).** Every birth registration in eCRVS triggers a message to the MPI containing the newborn's NIN, name, date of birth, sex, mother's NIN, and facility of birth. The MPI creates a golden record for the newborn, establishing the foundational identity to which all subsequent health system interactions will be linked. This is the single most important integration in the health ecosystem — without it, the MPI cannot achieve comprehensive coverage for the birth cohort.

**Integration 2: eCRVS→e-NHIS (birth = insurance enrollment).** Following identity creation in the MPI, the HIE orchestrates enrollment of the newborn in e-NHIS. The eCRVS birth notification, enriched with the MPI golden record identifier, triggers e-NHIS to create a beneficiary record with the NIN as the primary identifier. This automates the enrollment process that currently requires a separate facility visit.

**Integration 3: eCRVS→EIR (birth = immunisation schedule).** The birth notification also triggers creation of a child record in the EIR (DHIS2 Tracker) with a linked immunisation schedule. The child's date of birth determines the schedule of recommended vaccine doses; the EIR generates the schedule automatically, and the system begins tracking defaulters if scheduled doses are missed.

**NIN Synchronisation.** The eCRVS NIN and Immigration NIN discrepancy is a national-level identity governance issue that extends beyond MoH's authority. The health sector target architecture is designed to function with the eCRVS NIN as the primary health identifier while supporting eventual harmonisation. The MPI can federate both NIN types — when NIN synchronisation is achieved at the national level, the MPI will link the two identifiers to the same golden record. Until then, the MPI treats them as separate identifiers with different trust levels (eCRVS NIN rank 1, Immigration NIN rank 2).

### 5.4.3 eLMIS — Electronic Logistics Management Information System

**Current State.** SMS for Health has operated since 2010, providing basic drug supply tracking across 50 clinics, 6 regional stores, and 5 hospitals via SMS. This system provides stock visibility but is limited in scope (pharmaceuticals only, no laboratory consumables), depth (stock levels without consumption analytics), and integration (no connection to DHIS2 or clinical systems).

**Target State.** The eLMIS will be rolled out to all health facilities, replacing SMS for Health with a comprehensive logistics management platform that covers pharmaceutical products, laboratory reagents and consumables, medical supplies, and vaccines (cold chain). The specific platform selection (OpenLMIS, mSupply, or an equivalent open-source LMIS) will be determined during Phase 1 based on an assessment of existing government procurement platforms and donor preferences (EHSSP and Global Fund supply chain requirements). Regardless of platform selection, the eLMIS must meet these integration requirements:

- **eLMIS→DHIS2 (stock-out indicators):** Automated reporting of stock levels and stock-out events as DHIS2 data elements, enabling stock-out dashboards at national and regional levels and triggering alerts when critical commodities fall below minimum stock thresholds.
- **eLMIS→LIS (reagent and consumable tracking):** At facilities where both eLMIS and LIS are deployed, reagent consumption from LIS test records automatically updates eLMIS stock balances, improving reagent demand forecasting and reducing stock-outs of laboratory commodities.
- **eLMIS→EHR (stock-informed prescribing, Phase 3):** At facilities with both eLMIS and EHR, the prescribing module can display stock availability for prescribed medications, enabling clinicians to prescribe from available stock or recommend alternatives.

---

## 5.5 Surveillance Layer

Public health surveillance is among Progressa's most urgent digital health modernisation priorities. The current IDSR system is ~90% paper-based, severely limiting the speed and completeness of outbreak detection and response. The surveillance layer of the target architecture transforms this landscape through three complementary components.

### 5.5.1 IDSR Modernisation

**Current State.** Integrated Disease Surveillance and Response (IDSR) reporting is conducted through three channels: weekly aggregate reports submitted via paper forms to regional health directorates, immediate case-based notifications for epidemic-prone diseases (in principle), and quarterly summary reports. Approximately 90% of facilities have IDSR-trained focal persons and standard case definitions available. However, ~90% of the reporting workflow is paper-based, introducing delays in detection (reports arrive days after the reporting period ends), incomplete case information (paper forms capture limited variables), and no capacity for automated alert generation.

**Target State: Electronic Case-Based Surveillance via DHIS2 Tracker.** The IDSR modernisation strategy uses DHIS2 Tracker for individual case-based surveillance, complementing (not replacing) the existing aggregate IDSR reporting.

**DHIS2 Tracker IDSR+ Programme Design.** Each suspected notifiable disease case is registered as a tracked entity instance in DHIS2 Tracker. The programme captures: initial case notification (demographics, presenting symptoms, suspected diagnosis, facility, notifying health worker), case investigation (epidemiological data, exposure history, contacts, risk factors), laboratory results (linked via LIS integration where available, or manually entered), case classification (suspected → probable → confirmed, or discarded), outcome (recovered, died, lost to follow-up), and contact tracing (for diseases requiring it, such as Ebola, measles, cholera).

**Real-Time Notification Workflows.** The electronic case-based system enables automated notification workflows that are impossible in the current paper system:

- When a health worker registers a suspected case of an immediately notifiable disease, the system sends automated SMS and email alerts to the regional surveillance officer, the national IDSR coordinator, and the Directorate of Public Health.
- Alert escalation rules are configurable: a single cholera case triggers immediate notification; a cluster of acute febrile illness cases (defined as ≥3 cases from the same facility or catchment area within 7 days) triggers an investigation alert.
- Weekly aggregate IDSR reports are auto-generated from individual case records in Tracker, eliminating the need for manual compilation of aggregate reports.

**IHR Compliance.** The electronic case-based system improves compliance with International Health Regulations (IHR) obligations by enabling faster detection-to-notification timelines (target: notification within 24 hours of case detection, versus the current multi-day paper-based process), automated generation of IHR-required data formats, and direct electronic reporting to the WHO Country Office and Africa CDC.

**Deployment Phasing.**

- **Phase 1 (2026–2027):** Configure DHIS2 Tracker IDSR+ programme for priority notifiable diseases (cholera, measles, meningitis, Ebola/viral haemorrhagic fevers, acute flaccid paralysis). Pilot at 15–20 facilities (co-located with EHR Phase 1 sites to maximise infrastructure sharing). Maintain parallel paper IDSR for non-pilot facilities.
- **Phase 2 (2027–2029):** Expand to all disease notification categories. Deploy DHIS2 Android Capture App for IDSR+ at all facilities with mobile network coverage. Auto-generate weekly aggregate IDSR from Tracker. Integrate with LIS for automated laboratory confirmation alerts.
- **Phase 3 (2029–2033):** Full electronic case-based surveillance nationally. Paper IDSR forms retained only as fallback for facilities without connectivity or devices. Advanced analytics: automated cluster detection, spatiotemporal trend analysis, integrated surveillance dashboards.

### 5.5.2 Event-Based Surveillance (EBS)

Event-Based Surveillance complements the indicator-based IDSR system by detecting health threats from sources outside routine facility reporting — media reports, community rumours, social media, informal health worker communications, and unusual patterns in non-health data (animal deaths, environmental events).

**Target State.** Implement an event-based surveillance system using either Africa CDC's Event Management System (EMS) or a DHIS2 Event programme. The system captures signals from media monitoring, community reports, health facility informal communications, and cross-border intelligence (REC health security network). Trained surveillance officers triage signals, verify them against health facility and laboratory data, and escalate verified events into the IDSR+ Tracker programme for formal investigation.

**Implementation Timeline.** EBS is a Phase 2 priority (2027–2029), deployed after the core IDSR Tracker system is operational. The initial scope is national-level signal detection and triage (staffed by 2–3 surveillance officers at the Directorate of Public Health), with regional-level EBS capacity developed in Phase 3.

### 5.5.3 Community-Based Surveillance (CBS)

**Current State.** Community Health Workers (CHWs) play an important role in health service delivery in Progressa, particularly in rural areas. However, their surveillance contribution is limited to informal verbal reporting of unusual events to the nearest facility.

**Target State.** Equip CHWs with simple mobile tools for community-based surveillance. The system uses: a USSD or lightweight smartphone application for CHWs to report predefined trigger events (unusual numbers of sick people, unexplained deaths, disease in animals near communities, rumours of disease outbreaks), structured reporting forms with simple symptom-based categories (no medical terminology — e.g., "many people with diarrhoea" rather than "suspected cholera"), and automatic routing of CHW reports to the facility IDSR focal person and the regional surveillance officer for verification.

CBS is integrated with the IDSR+ Tracker system — verified community signals are escalated to formal case investigation through the same Tracker programme, creating a seamless surveillance chain from community detection to national reporting.

**Implementation Timeline.** CBS is a Phase 3 capability (2029–2033), building on the foundation of electronic IDSR+ and EBS. Initial deployment targets CHWs in the most remote areas where facility-based surveillance has the greatest gaps.

---

## 5.6 Application Modernisation Strategy

Every current health information system in Progressa requires a deliberate modernisation decision. The application modernisation strategy assigns each system one of five disposition categories:

- **RETAIN:** The system continues in its current form and role with routine maintenance.
- **INVEST:** The system is retained but receives significant new investment to expand its capabilities, coverage, or integration.
- **MIGRATE:** The system's functionality is progressively transferred to a new platform, with a defined coexistence period and transition milestones.
- **REPLACE:** The system is replaced by a new application that delivers equivalent or superior functionality.
- **RETIRE:** The system is decommissioned, and its functions are absorbed by other systems.

### 5.6.1 Modernisation Decision Table

| System | Current State | Disposition | Target State | Rationale |
|--------|--------------|-------------|-------------|-----------|
| **DHIS2** | Operational since 2010; aggregate HMIS, limited Tracker use | **RETAIN + INVEST** | Strengthened HMIS with expanded Tracker programmes (EIR, IDSR+, RMNCH), enhanced analytics, WHO data packages | DHIS2 is established and functional. Investment in Tracker programmes and analytics unlocks substantially more value from the existing platform without replacement risk. |
| **eCRVS / CIVIS** | Operational, launched recently; ~1M registered, ~50% coverage | **RETAIN + INVEST** | Expanded coverage toward universal registration; three critical HIE integration flows (MPI, e-NHIS, EIR) | eCRVS is functioning and growing. Investment focuses on integration rather than platform change. MoH does not control eCRVS development but specifies integration requirements. |
| **e-NHIS** | Operational nationally after a pilot; about 70 facilities, 15,000–20,000 beneficiaries | **RETAIN + INVEST** | Scale to 60,000+ beneficiaries; mobile enrollment (USSD + app); offline claims; ProgressaPay integration; FHIR claims; benefit expansion | The e-NHIS platform is functional with high satisfaction scores. Investment targets enrollment scaling and integration rather than platform replacement. |
| **SPT (Vaxa)** | Operational at all ~90 facilities; 350,000–400,000 children; >99% accuracy | **RETAIN short-term → MIGRATE to DHIS2 Tracker EIR long-term** | SPT continues at all facilities in short term. DHIS2 Tracker EIR piloted then progressively deployed. SPT decommissioned only when Tracker matches its performance. | SPT works well but its architecture limits real-time capability and interoperability. Migration is gradual and evidence-based — SPT is not replaced until its successor proves equal or better. |
| **A-LIS** | Early pilot stage; limited adoption | **INVEST** | Deploy at NRL + 5 regional hospitals; LOINC mapping for ~200 tests; integrate with DHIS2, IDSR, EHR | A-LIS (or OpenELIS) needs investment in adoption and integration rather than replacement. The pilot stage means the system has not yet proven its value — investment must demonstrate value at core sites first. |
| **IDSR (paper)** | ~90% paper-based; weekly aggregate reports | **REPLACE** with DHIS2 Tracker | Electronic case-based surveillance via DHIS2 Tracker IDSR+ programme; auto-generated aggregates; real-time notification | Paper IDSR cannot deliver the timeliness, completeness, or analytical capability required for effective outbreak detection. DHIS2 Tracker is the appropriate replacement platform. |
| **NMRI EMRS** | Operational since 2015; NMRI facilities only; research-focused | **RETAIN** | No change; research context, autonomous operation | NMRI EMRS serves a research institution with specific requirements outside the national health system scope. Integration with the national HIE is desirable but not a priority — any integration should be NMRI-initiated. |
| **SMS for Health** | Operational since 2010; 50 clinics + 6 stores + 5 hospitals | **RETIRE** (replaced by eLMIS) | Functions absorbed by comprehensive eLMIS deployment | SMS for Health provides basic stock visibility but cannot support the comprehensive logistics management required. eLMIS provides equivalent stock tracking plus consumption analytics, automated reorder points, and system integration. |

### 5.6.2 New System Requirements

All new health information systems procured, developed, or deployed as part of this architecture must comply with the following requirements, derived from the architecture principles (Section 2) and design decisions:

**FHIR compliance.** New systems must expose a minimum FHIR R4 API surface covering the FHIR resources relevant to their domain (Patient, Encounter, Observation, Immunization, Condition, Claim, MedicationRequest, DiagnosticReport, as applicable). Systems that cannot natively support FHIR must be wrapped with a FHIR Façade adapter before connecting to the HIE.

**Offline capability.** All clinical and frontline systems must function without continuous internet connectivity. This means local data storage and entry capability, background synchronisation when connectivity is restored, and no workflow interruptions during connectivity loss. This is non-negotiable given Progressa's infrastructure realities (~60% electricity access, single submarine cable).

**Open standards.** New systems must use open data standards (FHIR, ICD-11, LOINC, SNOMED CT GPS as applicable), open APIs (REST, documented, versioned), and preferably open-source platforms. Proprietary systems are permissible only where no viable open-source alternative exists, and must still provide open API access for HIE integration.

**Local hosting support.** Systems must support deployment on sovereign infrastructure (G-Cloud or interim PDGA data centre) for components handling identifiable health data. Cloud-hosted components are acceptable only for de-identified analytics workloads or where sovereign hosting is not yet available, subject to the data residency policy established in Section 4.5.

**MPI integration.** All patient-facing systems must perform MPI lookup during patient registration and link local patient records to the MPI golden record identifier. No new system may create a parallel patient identity scheme without MPI linkage.

---

## 5.7 Application Portfolio Summary Table

The following table consolidates the complete target application portfolio, providing a single reference for each system's layer, current status, target state, platform, key integrations, and implementation priority.

| System | Layer | Status (Current) | Target State | Platform | Key Integrations | Priority Phase |
|--------|-------|------------------|-------------|----------|-----------------|----------------|
| DHIS2 (Aggregate HMIS) | 1 — National Platform | Operational; all facilities | Strengthened; ≥95% completeness and timeliness; WHO data packages; enhanced analytics | DHIS2 (open-source) | EIR, IDSR+, LIS, eLMIS, EHR (aggregate feeds via HIE) | Phase 1 (ongoing strengthening) |
| DHIS2 Tracker (EIR) | 2 — Clinical | COVID-19 use only | National EIR per WHO DAK; progressive SPT replacement | DHIS2 Tracker | MPI, eCRVS, DHIS2 aggregate, HIE | Phase 1 (pilot) → Phase 2 (expansion) |
| DHIS2 Tracker (IDSR+) | 4 — Surveillance | Not deployed | Electronic case-based surveillance; real-time notification | DHIS2 Tracker | LIS, EHR, DHIS2 aggregate, HIE | Phase 1 (pilot) → Phase 2 (national) |
| DHIS2 Tracker (RMNCH) | 2 — Clinical | Not deployed | Maternal and child health tracking; antenatal/postnatal/growth | DHIS2 Tracker | MPI, EHR, e-NHIS, DHIS2 aggregate | Phase 2 |
| HIE (OpenHIM) | 1 — National Platform | Does not exist | Integration backbone; routing, transformation, audit, security | OpenHIM (open-source) | All systems (mediation layer) | Phase 1 (core deployment) |
| MPI (OpenCR) | 1 — National Platform | Does not exist | Unified patient identity; identifier federation; golden record | OpenCR (open-source) | eCRVS, e-NHIS, EHR, EIR, LIS, IDSR+ | Phase 1 (core deployment) |
| Facility Registry | 1 — National Platform | DHIS2 org units (partial) | Canonical registry via mCSD FHIR interface | DHIS2 Org Units | All systems (via HIE) | Phase 1 (expose via HIE) |
| Terminology Service | 1 — National Platform | Does not exist | ICD-11, LOINC, SNOMED CT GPS, ATC | OCL (open-source) | EHR, LIS, IDSR+, e-NHIS (via HIE) | Phase 1 (ICD-11, LOINC) → Phase 2 (expanded) |
| EHR (OpenMRS) | 2 — Clinical | Does not exist (~90% paper) | Maternal health + HIV/ART at 15–20 facilities (Phase 1); outpatient at 30–40 (Phase 2) | OpenMRS (open-source) | MPI, HIE, e-NHIS, LIS, IDSR+, DHIS2, eLMIS | Phase 1 (15–20 sites) → Phase 2 (30–40 sites) |
| EIR — SPT (coexistence) | 2 — Clinical | Operational; ~90 facilities | Maintained short-term; progressively replaced by DHIS2 Tracker | SPT / Vaxa | DHIS2 (aggregate), MPI (via adapter) | Maintain through Phase 2; retire Phase 3 |
| LIS (A-LIS / OpenELIS) | 2 — Clinical | Early pilot | NRL + 5 regional hospitals; LOINC coding; DHIS2/IDSR/EHR integration | A-LIS or OpenELIS | DHIS2, IDSR+, EHR, eLMIS, HIE | Phase 1 (core labs) → Phase 2 (integration) |
| e-NHIS | 3 — Administration | Operational; about 70 facilities; 15,000–20,000 beneficiaries | 60,000+ beneficiaries; mobile enrollment; offline claims; FHIR claims | e-NHIS (custom) | MPI, eCRVS, EHR, ProgressaPay, HIE | Phase 1 (integration + scaling) |
| eCRVS / CIVIS | 3 — Administration | Operational; ~50% coverage | Expanded coverage; 3 HIE integration flows (MPI, e-NHIS, EIR) | CIVIS platform | MPI, e-NHIS, EIR (via HIE) | Phase 1 (integration) |
| eLMIS | 3 — Administration | SMS for Health (limited) | Full facility coverage; stock, consumption, reorder analytics | OpenLMIS / mSupply (TBD) | DHIS2, LIS, EHR, HIE | Phase 2 (deployment) → Phase 3 (full integration) |
| EBS (Event Surveillance) | 4 — Surveillance | Does not exist | Signal detection from media, community, facilities | Africa CDC EMS or DHIS2 Events (TBD) | IDSR+ Tracker, DHIS2 analytics | Phase 2 |
| CBS (Community Surveillance) | 4 — Surveillance | Informal verbal only | Mobile tools for CHWs; USSD/smartphone reporting; IDSR+ integration | USSD/mobile app (TBD) | IDSR+ Tracker, facility IDSR focal points | Phase 3 |
| SHR (Shared Health Record) | 1 — National Platform | Does not exist | Longitudinal patient summary from all clinical sources | HAPI FHIR Server | EHR, EIR, LIS (via HIE) | Phase 2 (initial) → Phase 3 (comprehensive) |
| NMRI EMRS | 2 — Clinical | Operational; NMRI facilities | Retained; no change; optional HIE integration | NMRI proprietary | Optional HIE connection (NMRI-initiated) | No change planned |

---

*This section defines the target application landscape for the Ministry of Health. Section 6 (Integration Architecture) specifies the detailed integration patterns, data flows, and standards that connect these applications. Section 7 (Technology Architecture) defines the infrastructure on which they are hosted and operated.*

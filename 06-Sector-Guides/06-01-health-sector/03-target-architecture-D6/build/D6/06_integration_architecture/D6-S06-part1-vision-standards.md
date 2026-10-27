# 6. Integration Architecture (To-Be)

The integration architecture defines how Progressa's health information systems will exchange data — the patterns, standards, protocols, and governance mechanisms that transform a collection of siloed applications into a coherent health information ecosystem. Integration architecture is the technical realisation of the interoperability vision articulated in Section 2 and the practical mechanism through which the data architecture (Section 4), application architecture (Section 5), and technology architecture (Section 7) work together to deliver the business capabilities described in Section 3.

The current state is stark. The Ministry of Health operates at integration maturity Level 1 (Ad-hoc/Initial): there is no central integration platform, no middleware, no API management, no integration governance, and no health information exchange standards. The sole operational automated integration flow within MoH is SPT→DHIS2 for aggregate immunisation data. Every other interaction between systems — eCRVS and e-NHIS, DHIS2 and A-LIS, facility registers and national reporting — relies on manual processes, re-keying of data, or ad-hoc file transfers. The planned eCRVS-to-e-NHIS integration targeted for August 2025 remains undelivered. At the whole-of-government level, ProgressaPay (the mobile money payment platform used by Progressa Revenue Authority) is the only example of real-time cross-ministry system integration in Progressa — a benchmark that underscores both the ambition and the challenge of the target state.

This section specifies the integration architecture across five domains: the integration vision and maturity progression (Section 6.1), priority integration flows (Section 6.2), integration standards (Section 6.3), API management and governance (Section 6.4), and integration governance model (Section 6.5). Together, these domains establish the "digital glue" that connects the application portfolio into a functioning ecosystem.

---

## 6.1 Integration Architecture Vision

### 6.1.1 Current State: Point-to-Point Silos

Progressa's health information landscape in 2025 is characterised by isolated systems that do not share data in any structured, automated manner. This isolation is not the result of deliberate architectural choice but of the way each system was introduced — by different donors, at different times, with different implementing partners, and without a unifying interoperability framework.

The consequences of this fragmentation are tangible and measurable. A child born at a health facility and registered in eCRVS with a National Identification Number cannot have that NIN automatically linked to their immunisation record in SPT or their mother's insurance enrollment in e-NHIS. A laboratory test result from A-LIS must be manually transcribed into a facility register and separately entered into DHIS2. An IDSR case notification at ~90% of facilities requires a paper form to be physically transported to the district level before entering the electronic reporting chain. Insurance eligibility cannot be verified electronically at the point of care — facility staff must call the NHIA or rely on the patient's physical insurance card.

The current integration pattern — or more accurately, the absence of a pattern — can be summarised as follows:

```
Current State: Ad-Hoc / Point-to-Point

    ┌───────────┐       ┌───────────┐       ┌───────────┐
    │  eCRVS    │       │  e-NHIS   │       │  A-LIS    │
    │ (CIVIS)   │       │           │       │           │
    └───────────┘       └───────────┘       └───────────┘
          │ manual              │ manual          │ manual
          ▼                    ▼                  ▼
    ┌───────────────────────────────────────────────────┐
    │           Manual Data Re-Entry / Paper             │
    │   (No automated exchange between these systems)    │
    └───────────────────────────────────────────────────┘
          │                                    │
          ▼                                    ▼
    ┌───────────┐                        ┌───────────┐
    │   SPT     │───── automated ──────▶ │  DHIS2    │
    │ (Vaxa)    │   (sole MoH flow)     │           │
    └───────────┘                        └───────────┘
```

The SPT→DHIS2 flow — the only automated health data exchange in the Ministry — transfers aggregate immunisation data from the Vaxa platform into DHIS2 for national reporting. This single flow, while valuable, represents the extent of MoH's integration capability. Everything else is manual, paper-based, or simply not happening.

### 6.1.2 Target State: Hub-and-Spoke via National HIE

The target integration architecture replaces the current ad-hoc landscape with a hub-and-spoke model centred on a national Health Information Exchange (HIE). The hub is the OpenHIM interoperability layer, which serves as the single mediation point through which all inter-system data flows pass. The spokes are the individual health information systems — DHIS2, eCRVS, e-NHIS, OpenMRS, A-LIS/OpenELIS, SPT/DHIS2 Tracker EIR, OpenLMIS, iHRIS, and the IDSR surveillance module — each connecting to the hub through standardised interfaces.

This model is grounded in the OpenHIE (Open Health Information Exchange) reference architecture, an internationally recognised framework implemented in varying degrees of maturity in Tanzania, Ethiopia, Rwanda, Uganda, Malawi, and Kenya. The OpenHIE architecture is endorsed by WHO, supported by an active implementer community, and specifically designed for health information exchange in low- and middle-income country settings.

The target state architecture diagram:

```
Target State: Hub-and-Spoke via National HIE (OpenHIM)

┌──────────────────────────────────────────────────────────────────────┐
│                       SURVEILLANCE LAYER                             │
│   ┌──────────────┐   ┌───────────────┐   ┌──────────────────────┐   │
│   │ IDSR (DHIS2  │   │ Event-Based   │   │ Community-Based      │   │
│   │ Tracker)     │   │ Surveillance  │   │ Surveillance (CHW)   │   │
│   └──────┬───────┘   └──────┬────────┘   └──────────┬───────────┘   │
└──────────┼──────────────────┼───────────────────────┼────────────────┘
           │                  │                       │
┌──────────┼──────────────────┼───────────────────────┼────────────────┐
│          │       HEALTH ADMINISTRATION LAYER        │                │
│   ┌──────┴───────┐   ┌─────┴─────────┐   ┌─────────┴────────────┐   │
│   │ e-NHIS       │   │ eCRVS / CIVIS │   │ eLMIS (OpenLMIS)     │   │
│   │ (Insurance)  │   │ (Civil Reg.)  │   │ (Supply Chain)       │   │
│   └──────┬───────┘   └──────┬────────┘   └──────────┬───────────┘   │
└──────────┼──────────────────┼───────────────────────┼────────────────┘
           │                  │                       │
┌──────────┼──────────────────┼───────────────────────┼────────────────┐
│          │         CLINICAL SYSTEMS LAYER           │                │
│   ┌──────┴───────┐   ┌─────┴─────────┐   ┌─────────┴────────────┐   │
│   │ EHR          │   │ EIR           │   │ LIS                  │   │
│   │ (OpenMRS)    │   │ (DHIS2 Tracker│   │ (A-LIS / OpenELIS)   │   │
│   │              │   │  / SPT)       │   │                      │   │
│   └──────┬───────┘   └──────┬────────┘   └──────────┬───────────┘   │
└──────────┼──────────────────┼───────────────────────┼────────────────┘
           │                  │                       │
           ▼                  ▼                       ▼
┌──────────────────────────────────────────────────────────────────────┐
│                    INTEGRATION LAYER (OpenHIM)                        │
│                                                                      │
│   ┌──────────────┐  ┌───────────┐  ┌────────────┐  ┌────────────┐  │
│   │ Routing &    │  │ FHIR      │  │ Audit &    │  │ Legacy     │  │
│   │ Orchestration│  │ Façades   │  │ Logging    │  │ Adapters   │  │
│   └──────────────┘  └───────────┘  └────────────┘  └────────────┘  │
│                                                                      │
│   ┌──────────────┐  ┌───────────┐  ┌────────────┐  ┌────────────┐  │
│   │ Security &   │  │ Data      │  │ Error      │  │ Rate       │  │
│   │ Auth (mTLS)  │  │ Transform │  │ Handling   │  │ Limiting   │  │
│   └──────────────┘  └───────────┘  └────────────┘  └────────────┘  │
└──────────────────────────────┬───────────────────────────────────────┘
                               │
┌──────────────────────────────┼───────────────────────────────────────┐
│                NATIONAL HEALTH PLATFORM LAYER                        │
│                              │                                       │
│   ┌──────────────┐   ┌──────┴──────────┐   ┌────────────────────┐   │
│   │ DHIS2        │   │ Master          │   │ Terminology        │   │
│   │ (National    │   │ Registries      │   │ Service (OCL)      │   │
│   │  HMIS +      │   │ ┌─────────────┐ │   │                    │   │
│   │  Tracker     │   │ │ MPI (OpenCR)│ │   │ ICD-11, LOINC,     │   │
│   │  Programs)   │   │ ├─────────────┤ │   │ SNOMED CT GPS,     │   │
│   │              │   │ │ Facility    │ │   │ ATC                │   │
│   │              │   │ │ Registry    │ │   │                    │   │
│   │              │   │ ├─────────────┤ │   │ FHIR CodeSystem    │   │
│   │              │   │ │ HW Registry │ │   │ & ValueSet         │   │
│   │              │   │ │ (iHRIS)     │ │   │ resources          │   │
│   │              │   │ └─────────────┘ │   │                    │   │
│   └──────────────┘   └─────────────────┘   └────────────────────┘   │
│                                                                      │
│   ┌──────────────────────────────────────────────────────────────┐   │
│   │ Shared Health Record (HAPI FHIR)                             │   │
│   │ — Longitudinal patient summaries from contributing systems    │   │
│   └──────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────┘
```

The key architectural principle is **mediated integration** (Design Decision DD-01, Section 2.4): no application communicates directly with another application. All data exchange passes through OpenHIM, which enforces security policies, transforms data between formats, logs all transactions for audit, and routes requests to the appropriate destination. This principle eliminates the combinatorial explosion of point-to-point interfaces — with 10+ systems, unmediated integration would require up to 45 separate bilateral interfaces, each independently maintained. The hub-and-spoke model requires each system to maintain only a single interface to OpenHIM.

### 6.1.3 Integration Maturity Progression Model

The transition from the current ad-hoc state to the target mediated architecture cannot happen overnight. The integration maturity model defines four concrete phases, each building on the previous, with clear capabilities, technologies, and success criteria for each phase.

**Phase 1 — Batch/File-Based Integration (2026)**

*Objective:* Stabilise existing integration flows, introduce structured data exchange for the highest-priority use case (eCRVS→e-NHIS), and deploy foundational HIE infrastructure.

*Capabilities:*
- Deploy OpenHIM as the central integration platform (initially handling 2–3 flows).
- Deploy OpenCR (MPI) and bulk-load eCRVS records (about 1 million identities) as the seed population.
- Establish the eCRVS→MPI→e-NHIS flow using batch/file transfers: nightly CSV exports from eCRVS processed through OpenHIM, matched against MPI, and loaded into e-NHIS for insurance enrollment verification.
- Stabilise the existing SPT→DHIS2 aggregate immunisation data flow by routing it through OpenHIM for logging and monitoring.
- Introduce basic CSV/JSON batch exports for data exchange between systems not yet API-capable.
- Establish integration monitoring dashboards in OpenHIM (transaction volumes, error rates, response times).

*Technology:*
- Batch file transfers (CSV, JSON) via secure file exchange through OpenHIM.
- OpenHIM mediators for file parsing, validation, and routing.
- Scheduled jobs (cron-based) triggering batch processing at defined intervals (nightly, weekly).

*Success criteria:*
- OpenHIM operational with ≥99% uptime for processed batch transactions.
- eCRVS records loaded into MPI; eCRVS→e-NHIS data flow operational (batch, nightly).
- SPT→DHIS2 flow routed through OpenHIM with full audit logging.
- Integration monitoring dashboard operational.

*Estimated transaction volume:* ~500–1,000 transactions per day (batch).

**Phase 2 — API Point-to-Point via HIE (2027)**

*Objective:* Transition high-priority flows from batch to real-time API-based exchange through OpenHIM, establish FHIR as the integration standard for new connections.

*Capabilities:*
- Real-time eCRVS→MPI→e-NHIS flow: each new birth registration triggers immediate MPI record creation and e-NHIS enrollment initiation (replacing nightly batch).
- Real-time MPI lookup at point of care: OpenMRS (at pilot facilities) queries the MPI through OpenHIM during patient registration.
- e-NHIS eligibility verification: OpenMRS queries e-NHIS insurance status through OpenHIM before clinical encounter.
- DHIS2 Tracker EIR pilot integration: individual immunisation records from DHIS2 Tracker exposed as FHIR Immunization resources through OpenHIM.
- Laboratory results flow: A-LIS sends FHIR DiagnosticReport resources to OpenHIM for routing to DHIS2 (aggregate lab statistics) and IDSR (notifiable condition triggers).

*Technology:*
- RESTful APIs (FHIR R4 for new flows; REST/JSON for systems not yet FHIR-capable).
- FHIR Façade mediators in OpenHIM wrapping eCRVS, e-NHIS, and DHIS2 with FHIR-compliant interfaces.
- OAuth 2.0 / client certificate authentication for system-to-system API calls.
- Synchronous request-response pattern for real-time queries (MPI lookup, eligibility check).
- Asynchronous pattern for event notifications (birth registration, lab result availability).

*Success criteria:*
- eCRVS→MPI→e-NHIS flow operational in real-time (<30 seconds end-to-end).
- MPI lookup at point of care operational at ≥15 OpenMRS pilot facilities.
- ≥3 FHIR-based integration flows operational through OpenHIM.
- API response times <2 seconds for synchronous queries (95th percentile).

*Estimated transaction volume:* ~5,000–10,000 transactions per day (mix of real-time and batch).

**Phase 3 — Mediated Integration via HIE (2028–2029)**

*Objective:* OpenHIM mediates all inter-system flows; FHIR is the canonical message format for patient-level data; all systems connect exclusively through the HIE.

*Capabilities:*
- All six priority integration flows (defined in Section 6.2) operational through OpenHIM.
- FHIR Façades deployed for all legacy systems (DHIS2, eCRVS, e-NHIS, SPT during coexistence).
- Shared Health Record (HAPI FHIR) operational: longitudinal patient summaries aggregated from contributing systems (EHR, EIR, LIS, insurance).
- Terminology service (OCL) integrated: code validation and mapping for all FHIR messages passing through OpenHIM.
- Orchestration workflows operational: multi-step transactions (e.g., birth registration → MPI creation → insurance enrollment → immunisation schedule generation) managed end-to-end by OpenHIM.
- Cross-system analytics enabled: DHIS2 receives enriched aggregate data from multiple sources through standardised HIE feeds.

*Technology:*
- FHIR R4 as the mandatory canonical format for all patient-level data exchange.
- ADX for aggregate data exchange (DHIS2 ↔ international reporting).
- OpenHIM orchestration engine for multi-step workflows.
- FHIR Subscription (backport to R4) for event notifications.
- Comprehensive security: mTLS for all HIE connections, OAuth 2.0 for API authorisation, role-based access policies in OpenHIM.

*Success criteria:*
- All priority integration flows routed exclusively through OpenHIM (no residual point-to-point interfaces).
- ≥80% of inter-system data exchange uses FHIR canonical format.
- Shared Health Record operational with records from ≥3 contributing systems.
- OpenHIM processing ≥95% of transactions without manual intervention.
- Integration error rate <2% of total transactions.

*Estimated transaction volume:* ~20,000–50,000 transactions per day.

**Phase 4 — Event-Driven Architecture (2030+)**

*Objective:* Transition from request-response patterns to publish/subscribe event-driven architecture for real-time notifications and loosely coupled system interactions.

*Capabilities:*
- Publish/subscribe model: systems publish events to the HIE (e.g., "new birth registered," "immunisation administered," "lab result available," "disease case notified"), and subscribed systems consume events relevant to their function — without direct knowledge of or dependency on the publishing system.
- FHIR Subscriptions (R5 / R4 backport): event notification standard for health data changes, enabling systems to subscribe to specific resource types and receive real-time push notifications when matching resources are created or updated.
- Real-time surveillance: disease case notifications trigger immediate alerts to surveillance officers, district health teams, and the NDHSC dashboard — replacing the current weekly aggregation cycle.
- Cross-border integration readiness: HIE interfaces positioned for REC health data exchange and IHR electronic notification to WHO.
- Advanced analytics feeds: real-time data streams from the HIE feed the health data warehouse (if deployed per Section 4.4.2 Phase 3 assessment) for operational analytics and predictive modelling.

*Technology:*
- Event broker (e.g., Apache Kafka or NATS) integrated with OpenHIM for publish/subscribe message distribution.
- FHIR Subscriptions for standardised health event notifications.
- WebSocket or Server-Sent Events for real-time dashboard updates.
- Complex Event Processing (CEP) for pattern detection (e.g., outbreak signal detection from multiple surveillance events).

*Success criteria:*
- ≥50% of integration flows operate on publish/subscribe model.
- Real-time surveillance notification latency <5 minutes from case entry to alert.
- All new system integrations use event-driven patterns by default.
- Cross-border data exchange operational with ≥1 REC partner country.

*Estimated transaction volume:* ~50,000–100,000+ transactions per day.

**Integration Maturity Summary:**

| Phase | Period | Pattern | Key Capability | Standard | Est. Daily Txn |
|-------|--------|---------|---------------|----------|---------------|
| 1 | 2026 | Batch/file | Stabilise existing flows; MPI seed; eCRVS→e-NHIS batch | CSV/JSON batch | 500–1,000 |
| 2 | 2027 | API point-to-point | Real-time priority flows; FHIR for new connections | REST/JSON + FHIR R4 | 5,000–10,000 |
| 3 | 2028–2029 | Mediated via HIE | All flows through OpenHIM; FHIR canonical; SHR operational | FHIR R4 + ADX | 20,000–50,000 |
| 4 | 2030+ | Event-driven | Pub/sub; real-time notifications; cross-border readiness | FHIR Subscriptions | 50,000–100,000+ |

### 6.1.4 Integration Design Principles

The integration architecture is governed by the architecture principles established in Section 2.2 (HP-01 through HP-10) and the design decisions in Section 2.4 (DD-01 through DD-12). The following principles are specific to integration design and derive directly from those overarching commitments.

**IP-01: Single Mediation Point.** All inter-system data exchange passes through OpenHIM. No system-to-system direct communication is permitted for production data flows. This ensures consistent security enforcement, comprehensive audit logging, and a single point of control for integration governance. *(Derived from DD-01: OpenHIE as the interoperability framework.)*

**IP-02: Canonical Data Model.** The HIE operates on a single canonical data model — HL7 FHIR R4 — for all patient-level data exchange. Source systems that cannot natively produce FHIR are wrapped with FHIR Façade mediators that translate between the system's native format and the canonical model. This eliminates the need for N×N format translations between systems. *(Derived from DD-06: FHIR R4 as target integration standard.)*

**IP-03: Loose Coupling.** Systems connected to the HIE are loosely coupled: they depend on the HIE interface contract (FHIR resource profiles), not on the internal implementation of other systems. A change to eCRVS's internal database schema, for example, requires only an update to the eCRVS FHIR Façade mediator — not changes to e-NHIS, MPI, or any other consuming system. *(Derived from HP-02: Interoperability by Design.)*

**IP-04: Idempotent Operations.** All integration transactions must be idempotent — repeating a transaction produces the same result as executing it once. This is essential for reliability in an environment where network disruptions (single submarine cable, ~60% electricity access) may cause transaction retries. Each transaction carries a unique identifier that prevents duplicate processing. *(Derived from HP-03: Offline-First, Sync-When-Connected.)*

**IP-05: Graceful Degradation.** If a destination system is unavailable, the HIE queues the transaction and retries with exponential backoff rather than failing the entire workflow. The source system receives an acknowledgment that the transaction has been accepted by the HIE, even if downstream delivery is pending. Critical queries (MPI lookup, insurance eligibility) return cached results when the authoritative source is temporarily unavailable, with a clear indication that the result is from cache. *(Derived from HP-03: Offline-First, Sync-When-Connected.)*

**IP-06: Comprehensive Audit.** Every transaction through the HIE is logged with timestamp, source system, destination system, transaction type, patient MPI identifier (where applicable), payload hash, response code, and processing duration. Audit logs are retained for a minimum of seven years and are accessible to the DHDD Integration Data Steward and the Health Information Security Officer. *(Derived from HP-04: Sovereign Health Data.)*

**IP-07: Standards Before Custom.** Integration flows use international standards (FHIR, ADX, IHE profiles) wherever applicable. Custom integration patterns are permitted only when no suitable standard exists, and must be documented with a rationale and a migration path to standards-based alternatives. *(Derived from HP-05: Open Standards and Open Source.)*

**IP-08: Patient Identity Resolution.** Every integration flow involving patient-level data begins with a patient identity resolution step against the MPI. No patient-level data is exchanged between systems without first establishing a confirmed or high-confidence MPI match. This prevents the creation of orphaned records and ensures cross-system data linkage. *(Derived from HP-06: Patient-Centred Identity.)*

---

## 6.3 Integration Standards

### 6.3.1 HL7 FHIR R4 as Target Standard

HL7 FHIR (Fast Healthcare Interoperability Resources) Release 4 is the mandatory integration standard for all patient-level data exchange in Progressa's health information ecosystem. This decision (DD-06, Section 2.4) is grounded in four considerations.

First, FHIR R4 is the normative (formally approved) release of the FHIR standard, published by HL7 International in 2019 with a commitment to backward compatibility for all normative content. This provides stability: integrations built against FHIR R4 will remain valid as the standard evolves. Second, FHIR is endorsed by WHO for digital health implementations in low- and middle-income countries and is the interoperability standard adopted by the Smart Africa Digital Health initiative, of which Progressa is a participant. Third, FHIR's RESTful architecture, JSON-based payloads, and resource-oriented design make it significantly easier to implement than previous HL7 standards (V2, V3, CDA) — a critical consideration given Progressa's limited health informatics workforce. Fourth, the platforms selected for the target architecture — OpenMRS (FHIR module), DHIS2 (FHIR API support), OpenCR (FHIR-native), HAPI FHIR (reference server), and OpenHIM (FHIR routing) — all provide native or near-native FHIR R4 support.

**FHIR Resource Mapping to Integration Use Cases**

The following table maps the 14 priority FHIR R4 resource profiles defined in Section 4.3.1 to their specific integration use cases, source systems, and consuming systems. This table is the master reference for all integration flow specifications in Section 6.2.

| FHIR Resource | Integration Use Case | Source System(s) | Consuming System(s) | Phase |
|---------------|---------------------|------------------|---------------------|-------|
| **Patient** | Patient identity resolution; MPI record creation and query; cross-system patient matching | OpenCR (MPI), eCRVS, e-NHIS, OpenMRS | All HIE-connected systems | 1 |
| **Immunization** | Individual immunisation event records; EIR data exchange; immunisation history for continuity of care | SPT (via Façade), DHIS2 Tracker EIR | OpenMRS (patient record), DHIS2 (coverage aggregation), SHR | 2 |
| **Encounter** | Clinical visit records; facility encounter documentation; aggregate reporting from individual encounters | OpenMRS (EHR) | DHIS2 (aggregation), e-NHIS (claims support), SHR | 2–3 |
| **Observation** | Clinical measurements, vital signs, diagnostic findings; laboratory results as discrete values | OpenMRS, A-LIS, DHIS2 Tracker | DHIS2 (indicator aggregation), SHR, IDSR (surveillance triggers) | 2–3 |
| **DiagnosticReport** | Laboratory test results bundled with Observation resources; reference lab result dissemination | A-LIS, OpenELIS | OpenMRS (clinical decision support), DHIS2 (surveillance), IDSR | 2 |
| **Condition** | Active diagnoses and health problems; disease classification for surveillance and insurance | OpenMRS | e-NHIS (claims adjudication), DHIS2 (morbidity reporting), IDSR | 2–3 |
| **Claim** | Insurance claims submission from facilities to NHIA | e-NHIS (facility module), OpenMRS (future) | NHIA claims processing engine | 3 |
| **Coverage** | Insurance enrollment and eligibility status; point-of-care insurance verification | e-NHIS | OpenMRS (insurance verification), eCRVS (birth-triggered enrollment confirmation) | 2 |
| **Location** | Facility identity, attributes, and service availability; canonical facility registry | DHIS2 (organisation units) | All HIE-connected systems via mCSD | 1 |
| **Practitioner / PractitionerRole** | Health worker identity, credentials, and role; provider authentication and workforce reporting | iHRIS / HRMIS | OpenMRS (provider authentication), DHIS2 (workforce reporting) | 3 |
| **MedicationRequest** | Prescription records from EHR; demand signal for supply chain; pharmaceutical claims | OpenMRS | OpenLMIS (demand signal), e-NHIS (pharmaceutical claims) | 3 |
| **SupplyDelivery / SupplyRequest** | Pharmaceutical supply chain transactions; stock status for prescribing decisions | OpenLMIS | DHIS2 (stock reporting), OpenMRS (formulary availability) | 3 |
| **Bundle** | Transaction bundles for multi-resource operations; patient summary documents for SHR | OpenHIM (orchestrated), OpenMRS, A-LIS | SHR (HAPI FHIR), consuming systems | 2–3 |
| **Provenance** | Data lineage and audit trail; chain of custody for clinical data | OpenHIM (generated) | Audit repository, DHDD compliance | 1 |

**Progressa-Specific FHIR Profile Extensions**

Progressa MoH will define a small number of FHIR profile extensions to accommodate local requirements that are not covered by the base FHIR R4 specification:

- **Patient resource**: Extensions for eCRVS NIN (identifier system: `urn:oid:progressa.gov.crvs.nin`), Immigration NIN (`urn:oid:progressa.gov.immigration.nin`), e-NHIS beneficiary ID (`urn:oid:progressa.gov.nhia.beneficiary`), SPT child ID (`urn:oid:progressa.gov.moh.spt`), and facility MRN (with facility-specific namespace).
- **Location resource**: Extension for DHIS2 organisation unit identifier (`urn:oid:progressa.gov.moh.dhis2.orgunit`) and facility ownership type (government, private, NGO/faith-based).
- **Immunization resource**: Extension for SPT scanning metadata (scan date, scan station ID) during the SPT coexistence period, enabling traceability of the hybrid paper-digital workflow.

These extensions are published as FHIR ImplementationGuide resources and maintained by the DHDD Integration Data Steward. All connected systems must validate data against these profiles before submitting resources to the HIE.

### 6.3.2 FHIR Façade Pattern

The FHIR Façade pattern is the strategic mechanism for integrating existing systems — DHIS2, eCRVS/CIVIS, e-NHIS, SPT, and A-LIS — that were not designed with FHIR interfaces. Rather than replacing these systems or requiring their vendors to implement native FHIR support (which may be impractical or unjustified), the Façade pattern interposes a lightweight adapter between each system and the HIE that translates the system's native API or data format into FHIR resources and vice versa.

Each FHIR Façade is implemented as an OpenHIM mediator — a small, purpose-built service that runs within the OpenHIM infrastructure and performs bidirectional translation:

**Outbound (system → HIE):** The mediator reads data from the source system's native interface (REST API, database view, file export) and constructs FHIR resources conforming to the Progressa MoH FHIR profiles. For example, the eCRVS Façade reads birth registration records from the CIVIS platform's API and constructs FHIR Patient resources with the eCRVS NIN as the primary identifier.

**Inbound (HIE → system):** The mediator receives FHIR resources from the HIE and translates them into the format expected by the target system. For example, the e-NHIS Façade receives a FHIR Patient resource (new birth registration) and creates an enrollment record in the e-NHIS system using its native API.

**Façade Strategy per System:**

| System | Native Interface | Façade Responsibility | Phase |
|--------|-----------------|----------------------|-------|
| **DHIS2** | REST API (native), ADX | Expose Tracker data as FHIR Immunization, Condition, Encounter; accept FHIR Observation/DiagnosticReport and map to DHIS2 data elements | 1–2 |
| **eCRVS / CIVIS** | REST API (proprietary) | Expose birth/death registrations as FHIR Patient resources with eCRVS NIN; accept MPI confirmations | 1 |
| **e-NHIS** | REST API (proprietary) | Expose Coverage (enrollment status), accept Patient (new enrollments), expose/accept Claim resources | 2 |
| **SPT (Vaxa)** | Cloud API + data export | Expose immunisation records as FHIR Immunization resources during coexistence; read-only Façade (SPT is being progressively replaced) | 2 |
| **A-LIS** | HL7 V2 messages / local API | Expose lab results as FHIR DiagnosticReport + Observation; accept lab orders as FHIR ServiceRequest | 2 |

**Façade Lifecycle and Sunset Criteria.** FHIR Façades are transitional components. As source systems are upgraded (DHIS2 gains native FHIR support in newer versions), replaced (SPT progressively replaced by DHIS2 Tracker EIR), or re-implemented (e-NHIS may adopt FHIR-native architecture), the corresponding Façade is retired and replaced by direct FHIR communication. The sunset criteria for each Façade are:

1. The source system provides native FHIR R4 API endpoints conforming to the Progressa MoH FHIR profiles.
2. The native FHIR API has been validated against the conformance test suite maintained by the DHDD.
3. All consuming systems have been tested against the native FHIR interface.
4. A parallel-run period (minimum 3 months) confirms equivalence between Façade output and native output.

### 6.3.3 ADX (Aggregate Data Exchange)

ADX is the IHE-profiled standard for exchanging aggregate health data, purpose-built for the type of data that constitutes the bulk of routine health information in Progressa — monthly facility reports, quarterly disease summaries, annual health statistics, and international reporting to WHO and RHO.

DHIS2 natively supports ADX, making it the natural standard for aggregate data flows. ADX is used for:

- **DHIS2 → WHO/RHO:** Routine aggregate health statistics reporting using standardised indicator definitions aligned with the WHO 100 Core Health Indicators.
- **DHIS2 → PBoS:** National health statistics for statistical yearbooks and SDG monitoring.
- **DHIS2 → MoF:** Health budget performance indicators for the IFMIS health module.
- **eLMIS → DHIS2:** Aggregate pharmaceutical stock data (stock-on-hand, consumption, stock-out indicators) for health system monitoring dashboards.
- **A-LIS → DHIS2:** Aggregate laboratory statistics (test volumes, positivity rates) for HMIS indicators.

ADX is not used for patient-level data exchange — all individual-level data flows use FHIR. The two standards are complementary, not competing: FHIR handles the richness of individual clinical records, while ADX handles the efficiency of aggregate indicator exchange.

**ADX transaction pattern through OpenHIM:**

1. Source system (e.g., eLMIS) constructs an ADX data set containing aggregate indicators for the reporting period.
2. The ADX data set is submitted to OpenHIM with authentication credentials.
3. OpenHIM validates the ADX structure, logs the transaction, and routes the data set to DHIS2.
4. DHIS2 processes the ADX import, mapping ADX data elements to DHIS2 data elements.
5. OpenHIM records the processing outcome (success/failure) in the audit log.

### 6.3.4 REST/JSON as Transitional Mechanism

For systems that cannot support FHIR or ADX natively in the short term, REST/JSON APIs and CSV batch transfers serve as transitional formats. This applies particularly to eCRVS/CIVIS and e-NHIS in Phase 1, where the integration priority (establishing the eCRVS→MPI→e-NHIS flow) outweighs the benefit of waiting for full FHIR implementation.

**Sunset criteria for REST/JSON transitional interfaces:**

1. A FHIR Façade has been implemented and validated for the system.
2. The FHIR Façade has been in production for ≥6 months with an error rate <1%.
3. All batch/CSV flows have been replaced by API-based flows.
4. The transitional interface is formally deprecated with a 6-month notice period.

REST/JSON transitional interfaces must still conform to basic integration hygiene: all transactions pass through OpenHIM (no direct system-to-system communication), every request includes authentication credentials and a unique transaction identifier, responses include standard HTTP status codes and error messages, and the DHDD maintains interface documentation (OpenAPI/Swagger specification) for each transitional API.

The architecture enforces a clear progression: CSV/batch in Phase 1 → REST/JSON APIs in Phase 2 → FHIR Façades in Phase 2–3 → native FHIR in Phase 3–4. No transitional interface should persist beyond the end of Phase 3 (2029) without explicit NDHSC approval and a documented justification.

### 6.3.5 IHE Profiles for Health Information Exchange

Integrating the Healthcare Enterprise (IHE) profiles provide detailed, implementation-tested specifications for specific health information exchange use cases. They build on underlying standards (primarily FHIR) and define the precise transactions, actor roles, and content requirements for interoperability. The target architecture adopts the following IHE profiles:

**PIXm and PDQm — Patient Identity Management**

- **PIXm (Patient Identifier Cross-Referencing for Mobile):** Enables systems to query the MPI (OpenCR) for cross-referenced patient identifiers. When a system knows one patient identifier (e.g., a facility MRN), PIXm allows it to discover other identifiers (e.g., eCRVS NIN, e-NHIS beneficiary ID) linked to the same patient in the MPI. This is the core transaction used by OpenMRS, A-LIS, and DHIS2 Tracker when resolving patient identity at the point of care.
- **PDQm (Patient Demographics Query for Mobile):** Enables systems to search for patients in the MPI using demographic attributes (name, date of birth, sex) rather than identifiers. PDQm is used when a patient presents without any known identifier — a common scenario in Progressa where ~50% of the population is not yet registered in eCRVS. The probabilistic matching algorithm in OpenCR processes PDQm queries.

Both PIXm and PDQm use FHIR Patient resources and RESTful API operations, making them well-suited to the lightweight, mobile-friendly integration patterns appropriate for Progressa's environment. They replace the older PIX and PDQ profiles (which required HL7 V2 or V3 messaging) with modern FHIR-based equivalents.

**mCSD — Mobile Care Services Discovery**

mCSD provides a standardised interface for discovering health facilities (Location resources), healthcare organisations (Organization resources), and health workers (Practitioner/PractitionerRole resources) within the health information ecosystem. Progressa's HIE implements mCSD to expose the DHIS2-based facility registry and the iHRIS-based health worker registry through FHIR-compliant APIs.

mCSD supports two primary use cases:
- **Facility discovery:** A clinical system (OpenMRS, e-NHIS) queries the facility registry to validate a facility code, retrieve facility details (address, services, operating hours), or search for nearby facilities for referral purposes.
- **Practitioner discovery:** A clinical system queries the health worker registry to verify practitioner credentials, check licensing status, or identify practitioners at a specific facility for referral or consultation.

The mCSD Façade for DHIS2 organisation units is deployed in Phase 1, providing immediate value to all HIE-connected systems. The practitioner discovery component is deployed in Phase 3, aligned with the iHRIS deployment timeline.

**XDS — Cross-Enterprise Document Sharing (Future Consideration)**

XDS provides a comprehensive framework for sharing clinical documents (discharge summaries, referral letters, imaging reports, laboratory reports) across healthcare organisations. While the full XDS infrastructure (document registry, repository, and consumer actors) is beyond the immediate scope of Progressa's HIE — the current focus is on structured data exchange using FHIR resources rather than document-based exchange — XDS remains a strategic option for the long term (Phase 4, 2030+).

The more immediate path is the FHIR-based equivalent: the IHE MHD (Mobile Access to Health Documents) profile, which enables document sharing using FHIR DocumentReference and Binary resources within the existing FHIR infrastructure. MHD is considered for Phase 3 (2028–2029) if clinical document exchange (referral letters, discharge summaries) becomes a priority use case as EHR adoption expands.

### 6.3.6 Standards Adoption Roadmap

The following table consolidates the standards adoption timeline across all integration phases, providing a single reference for implementation planning.

| Standard | Scope | Phase 1 (2026) | Phase 2 (2027) | Phase 3 (2028–2029) | Phase 4 (2030+) |
|----------|-------|---------------:|---------------:|--------------------:|----------------:|
| **HL7 FHIR R4** | Patient-level data exchange | Adopted for MPI (Patient resource) | Mandatory for new flows (Immunization, DiagnosticReport, Coverage) | Canonical format for all HIE flows; Façades for legacy systems | FHIR-native for all systems; Façades retired |
| **ADX** | Aggregate data exchange | — | Deployed for eLMIS→DHIS2, A-LIS→DHIS2 aggregate | Standard for all aggregate reporting (WHO, RHO, PBoS) | Maintained for aggregate flows |
| **REST/JSON** | Transitional integration | Primary for eCRVS↔HIE, e-NHIS↔HIE | Maintained where FHIR Façade not yet deployed | Sunset: all transitional APIs replaced by FHIR Façades | Retired |
| **CSV/Batch** | Legacy data exchange | eCRVS batch export for MPI seed loading | Sunset: replaced by API flows | Retired | — |
| **IHE PIXm/PDQm** | Patient identity resolution | Deployed with MPI (OpenCR) | Operational for OpenMRS, A-LIS, DHIS2 Tracker | All systems use PIXm/PDQm for identity resolution | Maintained |
| **IHE mCSD** | Facility and practitioner discovery | Deployed for facility registry (DHIS2 org units) | Extended to e-NHIS provider directory | Practitioner discovery added (iHRIS) | Maintained |
| **IHE MHD** | Document sharing | — | — | Evaluated for clinical document exchange | Deployed if use case justified |
| **FHIR Subscriptions** | Event notifications | — | — | Pilot for priority notifications (outbreak alerts) | Standard for pub/sub integration |
| **OAuth 2.0** | API authentication | Deployed for all HIE connections | Extended to all system APIs | Mandatory for all API access | Maintained |
| **mTLS** | Transport security | Deployed for HIE-to-system connections | Standard for all inter-system communication | Mandatory | Maintained |
| **ICD-11** | Diagnosis coding | Piloted in DHIS2 morbidity reporting | Deployed in EHR, e-NHIS claims | Standard across all systems | Maintained |
| **LOINC** | Laboratory test coding | — | Deployed for A-LIS priority test panel (~80 tests) | Extended mapping (~200 tests) | Maintained |
| **SNOMED CT GPS** | Clinical terminology | — | — | Deployed in OpenMRS EHR | Extended coverage |
| **ATC** | Pharmaceutical coding | — | — | Deployed in eLMIS, EHR prescribing | Maintained |

This roadmap reflects a deliberate "crawl-walk-run" approach to standards adoption. Phase 1 establishes the foundational infrastructure and a minimum viable integration standard. Phase 2 introduces FHIR as the standard for new connections while supporting transitional formats. Phase 3 achieves standards consolidation, with FHIR as the universal canonical format and all transitional interfaces retired or on sunset timelines. Phase 4 advances to next-generation capabilities (event-driven, real-time, cross-border) built on the mature standards foundation.

---

*Section 6.2 (Priority Integration Flows), Section 6.4 (API Management and Governance), and Section 6.5 (Integration Governance Model) are specified in subsequent task outputs.*

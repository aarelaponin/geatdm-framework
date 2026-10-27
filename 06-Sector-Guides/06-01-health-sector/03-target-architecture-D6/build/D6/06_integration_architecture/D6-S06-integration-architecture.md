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


---

## 6.2 Priority Integration Flows

This section specifies the detailed integration flows that connect the application portfolio (Section 5) through the HIE (OpenHIM) using the standards defined in Section 6.3 and governed by the integration principles (IP-01 through IP-08) established in Section 6.1.4. Each flow is specified with sufficient detail for implementation: the actors involved, the triggering event, data exchanged, FHIR resources used, the message exchange pattern, the step-by-step mediation sequence through OpenHIM, error handling and retry logic, and the maturity phase in which the flow becomes operational.

The six priority integration flows are selected based on their alignment with the highest-value business capabilities (Section 3), the dependencies identified in the application architecture (Section 5), and the maturity progression model (Section 6.1.3). Flows 1–3 (Sections 6.2.1–6.2.3) address the foundational identity, immunisation, and surveillance chains; Flows 4–6 (Sections 6.2.4–6.2.6) address clinical reporting, insurance, and international data exchange.

---

### 6.2.1 Flow 1: Birth Registration → MPI → NHIS Enrollment

**Business Context.** This is the foundational integration flow for the entire health information ecosystem. It connects the three systems — eCRVS, MPI, and e-NHIS — that together establish a child's identity and insurance coverage at the moment of birth. Today, a child born at a health facility is registered in eCRVS (receiving a National Identification Number), but that NIN is not automatically linked to the child's insurance enrollment in e-NHIS. The planned eCRVS-to-e-NHIS integration targeted for August 2025 remains undelivered. Facility staff must manually initiate insurance enrollment, a process that depends on the mother's awareness and the facility's proximity to an e-NHIS enrollment point. The result: of the ~50% of the population registered in eCRVS, only a fraction are automatically enrolled in the national health insurance scheme. This flow closes that gap by automating the chain from birth registration through identity resolution to insurance enrollment initiation.

**Actors**

| Actor | Role | System |
|-------|------|--------|
| eCRVS / CIVIS | Source system — generates the birth registration event | CIVIS civil registration platform |
| OpenHIM | Integration mediator — routes, transforms, orchestrates | OpenHIM interoperability layer |
| OpenCR (MPI) | Identity resolution — creates or updates the child's golden record | OpenCR Master Patient Index |
| e-NHIS | Target system — receives enrollment notification for the newborn | e-NHIS health insurance platform |
| DHIS2 Tracker EIR | Secondary target — receives notification for immunisation schedule creation (Phase 2+) | DHIS2 Tracker Electronic Immunisation Registry |

**Trigger Event.** A birth registration is completed in the eCRVS/CIVIS platform. The registration may occur at the health facility where the birth takes place (immediate registration) or at a civil registration office within the statutory notification period. The trigger is the eCRVS system's confirmation that the birth record has been validated and a NIN assigned to the newborn.

**Pre-Conditions**

1. OpenHIM is operational and the eCRVS channel is configured and authenticated (client certificate registered).
2. OpenCR (MPI) is deployed and seeded with existing eCRVS records (about 1 million identities from the bulk load).
3. The eCRVS FHIR Façade mediator is deployed in OpenHIM, capable of receiving birth notifications from the CIVIS platform's API and constructing FHIR resources.
4. The e-NHIS FHIR Façade mediator is deployed in OpenHIM, capable of translating FHIR Patient resources into e-NHIS enrollment initiation requests.
5. The mother's eCRVS NIN is available in the birth registration record (required for linking the child to the mother's insurance coverage).
6. Network connectivity between eCRVS, OpenHIM, and e-NHIS is available (or the queuing mechanism in OpenHIM is operational for store-and-forward).

**Data Exchanged**

| Data Element | Source | FHIR Path | Required | Notes |
|-------------|--------|-----------|----------|-------|
| Child's full name | eCRVS | Patient.name | Yes | Given name(s) and family name as registered |
| Child's NIN | eCRVS | Patient.identifier (system: `urn:oid:progressa.gov.crvs.nin`) | Yes | 10-digit eCRVS NIN assigned at registration |
| Date of birth | eCRVS | Patient.birthDate | Yes | ISO 8601 format |
| Sex | eCRVS | Patient.gender | Yes | male / female |
| Place of birth (facility) | eCRVS | Patient.extension (birthPlace) | Yes | Linked to facility registry code (DHIS2 org unit ID) |
| Mother's full name | eCRVS | RelatedPerson.name | Yes | Used for MPI matching and e-NHIS enrollment linkage |
| Mother's NIN | eCRVS | RelatedPerson.identifier (system: `urn:oid:progressa.gov.crvs.nin`) | Conditional | Required when available; enables deterministic matching of mother in MPI |
| Mother's e-NHIS ID | MPI (lookup) | RelatedPerson.identifier (system: `urn:oid:progressa.gov.nhia.beneficiary`) | Conditional | Retrieved from MPI if mother has existing insurance enrollment |
| Father's name | eCRVS | RelatedPerson.name | No | Captured if provided; supports identity resolution |
| Registration date | eCRVS | Patient.extension (registrationDate) | Yes | Date the birth was registered in eCRVS |
| Birth weight | eCRVS | Observation.value | No | If captured during facility-based birth registration |

**FHIR Resources**

| Resource | Profile | Usage | Direction |
|----------|---------|-------|-----------|
| **Patient** | Progressa MoH Patient Profile (Section 4.3.1) | Newborn identity with eCRVS NIN, demographics, birth facility | eCRVS → OpenHIM → MPI |
| **RelatedPerson** | FHIR R4 RelatedPerson | Mother's identity and relationship to newborn; includes mother's NIN and e-NHIS ID if known | eCRVS → OpenHIM → MPI |
| **MessageHeader** | FHIR R4 MessageHeader | Transaction metadata: source (eCRVS), event type (birth-notification), timestamp, unique message ID | eCRVS → OpenHIM |
| **Bundle** | FHIR R4 Bundle (type: transaction) | Wraps Patient + RelatedPerson + MessageHeader into a single atomic transaction | eCRVS → OpenHIM |
| **Coverage** | Progressa MoH Coverage Profile | Insurance enrollment status — returned from e-NHIS confirming enrollment initiation | e-NHIS → OpenHIM → eCRVS (acknowledgment) |

**Message Exchange Pattern.** Asynchronous request with guaranteed delivery. The eCRVS system submits the birth notification to OpenHIM and receives an immediate HTTP 202 (Accepted) acknowledgment confirming that the HIE has accepted the message for processing. The downstream orchestration (MPI record creation, e-NHIS enrollment notification) proceeds asynchronously. eCRVS does not block waiting for e-NHIS to complete enrollment. OpenHIM sends a subsequent status notification to eCRVS when the full orchestration completes (success or failure), enabling the eCRVS operator to see the enrollment status.

**Sequence of Steps**

```
eCRVS          OpenHIM           OpenCR (MPI)       e-NHIS          EIR (Phase 2+)
  │                │                  │                │                │
  │ 1. POST /fhir  │                  │                │                │
  │    Bundle       │                  │                │                │
  │───────────────▶│                  │                │                │
  │                │ 2. Validate       │                │                │
  │                │    message        │                │                │
  │                │    structure      │                │                │
  │ 3. HTTP 202    │                  │                │                │
  │◀───────────────│                  │                │                │
  │  (Accepted)    │                  │                │                │
  │                │ 4. Extract        │                │                │
  │                │    Patient +      │                │                │
  │                │    RelatedPerson  │                │                │
  │                │                  │                │                │
  │                │ 5. POST /fhir/   │                │                │
  │                │    Patient/$match │                │                │
  │                │─────────────────▶│                │                │
  │                │                  │ 6. Deterministic│                │
  │                │                  │    match on NIN │                │
  │                │                  │    (or create   │                │
  │                │                  │    new record)  │                │
  │                │ 7. MPI ID +      │                │                │
  │                │    linked IDs    │                │                │
  │                │◀─────────────────│                │                │
  │                │                  │                │                │
  │                │ 8. Lookup mother │                │                │
  │                │    in MPI (NIN)  │                │                │
  │                │─────────────────▶│                │                │
  │                │ 9. Mother's MPI  │                │                │
  │                │    record +      │                │                │
  │                │    e-NHIS ID     │                │                │
  │                │◀─────────────────│                │                │
  │                │                  │                │                │
  │                │ 10. Construct    │                │                │
  │                │     enrollment   │                │                │
  │                │     request      │                │                │
  │                │     (child NIN + │                │                │
  │                │      mother's    │                │                │
  │                │      NHIS ID)    │                │                │
  │                │                  │                │                │
  │                │ 11. POST enrollment────────────▶ │                │
  │                │     notification │                │                │
  │                │                  │ 12. Create      │                │
  │                │                  │     dependent   │                │
  │                │                  │     enrollment  │                │
  │                │                  │     record      │                │
  │                │ 13. Enrollment   │                │                │
  │                │     confirmation │◀───────────────│                │
  │                │     (or pending) │                │                │
  │                │                  │                │                │
  │                │ 14. [Phase 2+]   │                │                │
  │                │     POST birth   │                │                │
  │                │     notification │                │                │
  │                │     to EIR───────┼────────────────┼───────────────▶│
  │                │                  │                │  15. Create    │
  │                │                  │                │      child     │
  │                │                  │                │      record +  │
  │                │                  │                │      immunisation
  │                │                  │                │      schedule  │
  │                │                  │                │                │
  │ 16. Status     │                  │                │                │
  │     notification                  │                │                │
  │◀───────────────│                  │                │                │
  │ (complete/     │                  │                │                │
  │  partial/fail) │                  │                │                │
```

**Step-by-Step Description**

1. **eCRVS submits birth notification.** The CIVIS platform POSTs a FHIR Bundle (type: transaction) to the OpenHIM eCRVS channel endpoint. The Bundle contains a Patient resource (the newborn), one or two RelatedPerson resources (mother, optionally father), and a MessageHeader identifying the event as `birth-notification`. The request includes the eCRVS client certificate for mTLS authentication and a unique transaction ID in the MessageHeader.

2. **OpenHIM validates the message.** OpenHIM authenticates the eCRVS client certificate, validates the Bundle structure against the Progressa MoH FHIR profiles (Patient must include NIN identifier, name, birthDate, gender; RelatedPerson must include mother's name), and logs the transaction in the audit repository.

3. **OpenHIM returns HTTP 202 Accepted.** eCRVS receives immediate confirmation that the message has been accepted for processing. This decouples eCRVS from downstream processing times.

4. **OpenHIM extracts resources.** The orchestration mediator extracts the Patient and RelatedPerson resources from the Bundle for downstream routing.

5. **OpenHIM submits patient to MPI.** The Patient resource (newborn) is submitted to OpenCR using the FHIR Patient/$match operation (IHE PDQm profile). The request includes all available identifiers (NIN) and demographics.

6. **MPI performs identity resolution.** OpenCR executes deterministic matching on the eCRVS NIN. For a new birth, this is typically a new record creation (the NIN was just assigned). OpenCR creates the golden record, assigns an MPI identifier, and stores the eCRVS NIN as a linked identifier. If a record with the same NIN already exists (edge case: duplicate registration), OpenCR returns the existing record with a match-status flag.

7. **MPI returns the golden record.** OpenCR responds with the canonical Patient resource including the MPI identifier and all linked identifiers.

8. **OpenHIM looks up the mother in MPI.** Using the mother's eCRVS NIN from the RelatedPerson resource, OpenHIM queries OpenCR to retrieve the mother's golden record, including any linked e-NHIS beneficiary ID.

9. **MPI returns the mother's record.** If the mother is registered in both eCRVS and e-NHIS, the response includes her e-NHIS beneficiary ID — the key linkage that enables automatic dependent enrollment.

10. **OpenHIM constructs the enrollment request.** The orchestration mediator builds an e-NHIS enrollment notification containing the child's NIN, demographics, MPI identifier, the mother's e-NHIS beneficiary ID (if available), and the facility of birth. If the mother has no e-NHIS ID (she is not yet enrolled in insurance), the flow still proceeds — the enrollment notification is flagged as "mother not enrolled" to enable e-NHIS outreach.

11. **OpenHIM submits enrollment notification to e-NHIS.** The e-NHIS FHIR Façade mediator translates the FHIR-based enrollment request into the e-NHIS native API format and submits it.

12. **e-NHIS creates dependent enrollment record.** If the mother is an active e-NHIS beneficiary, the system creates a dependent enrollment record for the newborn under the mother's coverage. If the mother is not enrolled, e-NHIS creates a pending enrollment record and adds the family to the outreach queue for community-based enrollment campaigns.

13. **e-NHIS returns confirmation.** The e-NHIS Façade returns a FHIR Coverage resource confirming the enrollment status (active, pending, or flagged for outreach).

14. **[Phase 2+] OpenHIM notifies the EIR.** In Phase 2 and beyond, the orchestration extends to notify the DHIS2 Tracker EIR of the new birth. The EIR receives the child's NIN, date of birth, and facility, and automatically generates the national immunisation schedule based on the child's age and Progressa's EPI calendar.

15. **EIR creates the child record and immunisation schedule.** The DHIS2 Tracker EIR Façade mediator creates a tracked entity instance for the child, links it to the MPI identifier, and generates scheduled events for each vaccine dose (BCG at birth, OPV-0 at birth, Penta-1 at 6 weeks, etc.).

16. **OpenHIM sends status notification to eCRVS.** A completion notification is sent to eCRVS indicating the outcome of the orchestration — whether MPI creation, insurance enrollment, and (Phase 2+) EIR scheduling all succeeded, partially succeeded, or failed. This enables the eCRVS operator to see a "linked" status on the birth record.

**Error Handling**

| Error Scenario | Detection | Response | Retry Logic |
|----------------|-----------|----------|-------------|
| **eCRVS message fails validation** | OpenHIM validation step (step 2) | HTTP 400 returned to eCRVS with OperationOutcome listing specific validation errors (missing NIN, invalid date format) | No retry — eCRVS must correct and resubmit |
| **MPI unavailable** | OpenHIM receives timeout or HTTP 5xx from OpenCR (step 5) | OpenHIM queues the transaction for retry; eCRVS has already received HTTP 202 | Exponential backoff: retry at 1 min, 5 min, 15 min, 1 hour, then hourly for 24 hours. Alert Integration Data Steward if unresolved after 4 hours. |
| **MPI match ambiguous** | OpenCR returns match-status "probable" with confidence 0.60–0.84 (step 6) | MPI creates a provisional record but flags it for manual review. Downstream flow proceeds with the provisional MPI ID. Integration Data Steward reviews within 48 hours. | No retry — manual resolution required |
| **Duplicate NIN detected** | OpenCR finds an existing record with the same NIN but different demographics (step 6) | Transaction halted for this branch. OperationOutcome flagged as "possible-duplicate." Integration Data Steward notified for investigation. | No automatic retry — duplicate resolved manually before flow resumes |
| **Mother not found in MPI** | OpenCR returns no match for mother's NIN (step 8) | Flow continues without mother's e-NHIS ID. Enrollment notification sent to e-NHIS flagged as "mother-not-registered." e-NHIS adds to outreach queue. | No retry needed — degraded but functional |
| **e-NHIS unavailable** | OpenHIM receives timeout or HTTP 5xx from e-NHIS Façade (step 11) | OpenHIM queues the enrollment notification for retry. MPI record creation is already complete and is not rolled back. | Exponential backoff: same schedule as MPI unavailability. e-NHIS enrollment is eventually consistent. |
| **e-NHIS rejects enrollment** | e-NHIS returns HTTP 422 with rejection reason (step 12) — e.g., duplicate beneficiary, invalid mother coverage | Error logged with rejection reason. eCRVS status notification includes rejection detail. No automatic retry — requires investigation. | Manual resolution by e-NHIS administrator |
| **Network interruption (general)** | Any step fails due to connectivity loss (single submarine cable, power outage) | OpenHIM's store-and-forward mechanism queues all pending transactions. Idempotent transaction IDs (IP-04) prevent duplicate processing on retry. | Automatic retry when connectivity is restored. Transaction ordering preserved by queue. |

**Maturity Phase Mapping**

| Phase | Flow Variant | Notes |
|-------|-------------|-------|
| **Phase 1 (2026)** | Batch: nightly CSV export from eCRVS → OpenHIM → MPI bulk load → e-NHIS batch enrollment | Initial capability using file-based transfer while FHIR Façades are developed. MPI seeded with ~1M existing eCRVS records. |
| **Phase 2 (2027)** | Real-time: each birth registration triggers immediate FHIR-based flow as described above. eCRVS→MPI→e-NHIS in real-time (<30 seconds). EIR notification added. | FHIR Façades operational for eCRVS and e-NHIS. Full orchestration through OpenHIM. |
| **Phase 3 (2028–2029)** | Enriched: flow extended with terminology validation (birth facility code validated against mCSD facility registry), SHR initialisation (patient summary created at birth), and FHIR Subscription notification to subscribing systems. | All components FHIR-native or Façade-wrapped. Full audit trail. |
| **Phase 4 (2030+)** | Event-driven: birth registration published as event; MPI, e-NHIS, EIR, and SHR subscribe independently. No orchestration needed — each system reacts to the event. | Publish/subscribe via event broker integrated with OpenHIM. |

---

### 6.2.2 Flow 2: Immunisation Recording → Aggregate Reporting

**Business Context.** Immunisation is Progressa's strongest digital health domain. SPT (scanned paper tracking) has been deployed at all ~90 facilities since 2022, covering 350,000–400,000 children with over 99% data accuracy. The existing SPT→DHIS2 aggregate data flow is the sole operational automated health data integration in the Ministry of Health. However, this flow has significant architectural limitations: SPT's hybrid paper-scan workflow introduces digitisation delays (records are not real-time), aggregate-level transmission loses individual-level detail needed for defaulter tracking and continuity of care, and the flow bypasses any integration infrastructure — it is a direct point-to-point feed with no mediation, audit, or standards compliance.

The target integration flow addresses these limitations through a phased approach that respects SPT's proven performance while transitioning toward individual-level, standards-based immunisation data exchange. The flow operates in two variants during the coexistence period (Phase 1–2): an interim variant routing the existing SPT aggregate flow through OpenHIM, and a target variant using DHIS2 Tracker EIR for individual-level recording with FHIR-based exchange and automated aggregation.

**Actors**

| Actor | Role | System |
|-------|------|--------|
| SPT (Vaxa) | Source system (interim) — aggregate immunisation data from paper-scan workflow | SPT cloud platform |
| DHIS2 Tracker EIR | Source system (target) — individual immunisation records from digital-first workflow | DHIS2 Tracker |
| OpenHIM | Integration mediator — routes, transforms, audits | OpenHIM interoperability layer |
| OpenCR (MPI) | Identity resolution — links immunisation records to the child's golden record | OpenCR Master Patient Index |
| DHIS2 (Aggregate) | Primary target — receives immunisation coverage data for national HMIS indicators | DHIS2 Aggregate |
| SHR (HAPI FHIR) | Secondary target (Phase 3+) — stores individual immunisation records in patient longitudinal record | Shared Health Record |
| WHO / RHO | External recipient — receives aggregate immunisation statistics via ADX | International reporting |

**Trigger Event.**

*Interim variant (SPT):* A batch of immunisation paper forms has been scanned at a regional scanning station and processed by the SPT cloud platform. SPT generates an aggregate dataset (total doses administered by antigen, by facility, for the reporting period) ready for transmission to DHIS2.

*Target variant (DHIS2 Tracker EIR):* A health worker records an individual vaccination event in the DHIS2 Tracker EIR at the point of care (or enters it retrospectively via the DHIS2 Android Capture App when connectivity is restored). The individual event is stored in DHIS2 Tracker and triggers aggregation into DHIS2 aggregate datasets at the end of the reporting period.

**Pre-Conditions**

1. OpenHIM is operational with SPT and DHIS2 channels configured.
2. The SPT FHIR Façade mediator (interim) is deployed, capable of translating SPT aggregate exports into FHIR/ADX format.
3. The DHIS2 Tracker EIR is configured with the national immunisation schedule (aligned with WHO DAK for Immunisation) and deployed at pilot facilities (Phase 1) or progressively expanded facilities (Phase 2+).
4. The MPI is operational and linked to eCRVS NINs for child identity resolution (required for the target variant).
5. DHIS2 aggregate indicators for immunisation coverage are configured with validation rules (doses ≤ live births, antigen-specific consistency checks).
6. For the target variant: the child has an MPI record (created via Flow 1 or facility registration).

**Data Exchanged**

*Individual-level data (target variant — DHIS2 Tracker EIR):*

| Data Element | Source | FHIR Path | Required | Notes |
|-------------|--------|-----------|----------|-------|
| Child identifier (MPI ID) | MPI lookup | Immunization.patient (Reference to Patient) | Yes | Linked to MPI golden record via eCRVS NIN or provisional MPI ID |
| Vaccine administered | EIR | Immunization.vaccineCode | Yes | Coded using WHO ICD-11 or CVX; mapped to Progressa EPI schedule antigens |
| Dose number | EIR | Immunization.protocolApplied.doseNumber | Yes | Sequential dose (e.g., Penta-1, Penta-2, Penta-3) |
| Date administered | EIR | Immunization.occurrenceDateTime | Yes | ISO 8601; must be ≥ child's birthDate |
| Administering facility | EIR | Immunization.location (Reference to Location) | Yes | Facility registry code (DHIS2 org unit ID) |
| Administering health worker | EIR | Immunization.performer.actor (Reference to Practitioner) | Conditional | Required at facilities with EHR; optional at others |
| Lot number | EIR | Immunization.lotNumber | No | Vaccine batch number for pharmacovigilance (captured when available) |
| Immunisation status | EIR | Immunization.status | Yes | completed / not-done (with statusReason if not-done) |
| Reason not given | EIR | Immunization.statusReason | Conditional | Required when status = not-done (e.g., contraindication, refusal, stock-out) |

*Aggregate-level data (interim variant — SPT; also auto-generated from Tracker):*

| Data Element | Format | Notes |
|-------------|--------|-------|
| Facility code | DHIS2 org unit ID | Must match facility registry |
| Reporting period | Month/year | Standard HMIS reporting period |
| Antigen + dose | DHIS2 data element ID | e.g., BCG dose, OPV-0, Penta-1, Penta-2, Penta-3, Measles-1, etc. |
| Doses administered (count) | Integer | Total doses given at facility for the antigen+dose in the period |
| Fully vaccinated children (count) | Integer | Children who completed the full schedule in the period |
| Defaulters identified (count) | Integer | Children overdue for scheduled doses (target variant only — requires individual records) |

**FHIR Resources**

| Resource | Profile | Usage | Direction |
|----------|---------|-------|-----------|
| **Immunization** | Progressa MoH Immunization Profile (Section 4.3.1) with SPT scanning metadata extension during coexistence | Individual vaccination event record | EIR → OpenHIM → SHR, DHIS2 aggregate (via aggregation) |
| **Patient** | Progressa MoH Patient Profile | Child identity reference (MPI-linked) | MPI → EIR (lookup at point of care) |
| **ImmunizationRecommendation** | FHIR R4 ImmunizationRecommendation | Next scheduled dose(s) per national EPI calendar; generated by EIR; used for defaulter tracking | EIR → OpenHIM → SHR |
| **Bundle** | FHIR R4 Bundle (type: batch) | Batch of Immunization resources for bulk transmission (interim SPT variant) | SPT Façade → OpenHIM → DHIS2 |
| **MeasureReport** | FHIR R4 MeasureReport (or ADX equivalent) | Aggregate immunisation coverage indicators for HMIS reporting | DHIS2 → OpenHIM → WHO/RHO (ADX format) |

**Message Exchange Pattern.**

*Interim variant (SPT → DHIS2 via OpenHIM):* Batch, asynchronous. SPT exports aggregate data as a scheduled batch (matching the existing daily or weekly cycle). The SPT Façade mediator in OpenHIM receives the batch, validates it, and routes it to DHIS2 using the DHIS2 Data Value Set Import API. This is the existing SPT→DHIS2 flow wrapped in OpenHIM mediation for audit, monitoring, and standards compliance — it does not change the data itself but gains transaction logging, error monitoring, and a migration path toward FHIR.

*Target variant (DHIS2 Tracker EIR → DHIS2 Aggregate):* The individual-to-aggregate flow is internal to DHIS2 — Tracker programme indicators automatically aggregate individual vaccination events into monthly facility-level datasets using DHIS2's built-in aggregation engine. The HIE (OpenHIM) is involved in two sub-flows: (a) the EIR queries the MPI for child identity resolution at the point of care (synchronous, request-response), and (b) the EIR pushes individual Immunization resources to the SHR for longitudinal patient records (asynchronous, guaranteed delivery).

*International reporting:* DHIS2 exports aggregate immunisation statistics to WHO and RHO using ADX format through OpenHIM. This is a scheduled batch export (quarterly or as required by reporting obligations).

**Sequence of Steps — Target Variant (DHIS2 Tracker EIR)**

```
Health Worker    DHIS2 Tracker    OpenHIM    OpenCR (MPI)    DHIS2 Agg    SHR
     │               │              │             │              │          │
     │ 1. Record     │              │             │              │          │
     │    vaccination │              │             │              │          │
     │──────────────▶│              │             │              │          │
     │               │ 2. MPI       │             │              │          │
     │               │    lookup    │             │              │          │
     │               │─────────────▶│             │              │          │
     │               │              │ 3. PIXm     │              │          │
     │               │              │    query    │              │          │
     │               │              │────────────▶│              │          │
     │               │              │ 4. Patient  │              │          │
     │               │              │    IDs      │              │          │
     │               │              │◀────────────│              │          │
     │               │ 5. MPI ID   │             │              │          │
     │               │◀─────────────│             │              │          │
     │               │              │             │              │          │
     │               │ 6. Store     │             │              │          │
     │               │    Immuniz.  │             │              │          │
     │               │    event     │             │              │          │
     │               │    (local)   │             │              │          │
     │               │              │             │              │          │
     │ 7. Confirm    │              │             │              │          │
     │◀──────────────│              │             │              │          │
     │               │              │             │              │          │
     │               │── [End of reporting period] ──│           │          │
     │               │              │             │              │          │
     │               │ 8. Auto-     │             │              │          │
     │               │    aggregate │             │              │          │
     │               │    Tracker → │             │              │          │
     │               │    Aggregate │             │              │          │
     │               │───────────────────────────────────────▶  │          │
     │               │              │             │   9. Store   │          │
     │               │              │             │      aggr.   │          │
     │               │              │             │      dataset │          │
     │               │              │             │              │          │
     │               │ 10. POST     │             │              │          │
     │               │     FHIR     │             │              │          │
     │               │     Immuniz. │             │              │          │
     │               │─────────────▶│             │              │          │
     │               │              │ 11. Route   │              │          │
     │               │              │     to SHR  │              │          │
     │               │              │─────────────┼──────────────┼────────▶│
     │               │              │             │              │  12. Add │
     │               │              │             │              │   to pt  │
     │               │              │             │              │   record │
```

**Step-by-Step Description**

1. **Health worker records vaccination.** At the point of care, the health worker opens the child's record in the DHIS2 Tracker EIR (Android Capture App or web interface). If the child is not yet registered, the worker enters demographics and the system performs an MPI lookup. For a returning child, the existing record is selected.

2. **DHIS2 Tracker initiates MPI lookup.** The EIR FHIR Façade sends a PIXm query to OpenHIM with the child's available identifiers (eCRVS NIN from the child health card, or facility MRN, or demographic search via PDQm).

3. **OpenHIM routes to MPI.** The PIXm/PDQm query is forwarded to OpenCR.

4. **MPI returns matched identifiers.** OpenCR returns the MPI golden record with all linked identifiers — confirming the child's identity across systems.

5. **MPI ID returned to EIR.** The child's record in DHIS2 Tracker is linked to the MPI identifier, ensuring the vaccination event is attributed to the correct patient.

6. **Vaccination event stored.** The health worker records the vaccine administered, dose number, date, lot number (if available), and any adverse events. The DHIS2 Tracker stores the event as an individual record linked to the child's tracked entity instance. If the device is offline, the record is stored locally and synced when connectivity is restored (HP-03 offline-first principle).

7. **Confirmation displayed.** The health worker sees confirmation of the recorded vaccination and the next scheduled dose date (generated from the ImmunizationRecommendation logic in the EIR programme).

8. **Automated aggregation.** At the end of each reporting period (monthly), DHIS2's built-in aggregation engine compiles individual vaccination events from Tracker into aggregate data sets — total doses by antigen, by facility, for the period. This replaces the manual compilation of tally sheets that currently feeds DHIS2 aggregate.

9. **Aggregate dataset stored in DHIS2.** The compiled aggregate data populates the standard immunisation indicators in the national HMIS, available for dashboards, scorecards, and coverage analysis.

10. **FHIR Immunization resource pushed to HIE.** For each vaccination event, the EIR FHIR Façade generates a FHIR Immunization resource conforming to the Progressa MoH Immunization Profile and submits it to OpenHIM.

11. **OpenHIM routes to SHR.** The Immunization resource is routed to the Shared Health Record (HAPI FHIR server) for inclusion in the child's longitudinal patient record.

12. **SHR adds to patient record.** The SHR stores the Immunization resource linked to the child's MPI identifier, building a cross-system immunisation history accessible to any authorised HIE-connected system.

**SPT→DHIS2 Interim Variant (Phase 1)**

During Phase 1, the existing SPT→DHIS2 flow is routed through OpenHIM without changing the data content:

1. SPT cloud platform generates aggregate immunisation data export (CSV or JSON).
2. The SPT FHIR Façade mediator in OpenHIM receives the export via scheduled pull or push.
3. OpenHIM validates the data structure (facility codes against the facility registry, antigen codes against the DHIS2 metadata).
4. OpenHIM logs the transaction (source: SPT, destination: DHIS2, record count, timestamp).
5. OpenHIM routes the data to DHIS2 using the DHIS2 Data Value Set Import API.
6. DHIS2 processes the import and returns success/failure status.
7. OpenHIM records the outcome in the audit log and alerts the Integration Data Steward on failure.

This wrapping achieves three objectives without disrupting the proven SPT workflow: comprehensive audit logging (every SPT data transmission is recorded), validation against the facility registry (catching facility code mismatches early), and a migration path — the SPT Façade mediator will be progressively replaced by the DHIS2 Tracker EIR Façade as facilities transition.

**Error Handling**

| Error Scenario | Detection | Response | Retry Logic |
|----------------|-----------|----------|-------------|
| **MPI unavailable during vaccination recording** | DHIS2 Tracker receives timeout from OpenHIM (step 2) | Health worker proceeds with local recording in DHIS2 Tracker using facility MRN. MPI linkage is retried in background when connectivity is restored. Vaccination record is not lost. | Automatic background retry every 15 minutes. Unlinked records flagged for batch MPI reconciliation (weekly). |
| **Child not found in MPI** | OpenCR returns no match (step 4) | EIR creates a new tracked entity with a provisional identifier. If the child has a NIN on their health card, a new MPI record is created. If no NIN, probabilistic match is attempted; if no match, a provisional MPI record is created. | No retry — new record created. Subsequent MPI reconciliation may merge if duplicate detected. |
| **DHIS2 Tracker offline** | Device has no connectivity (common in rural facilities) | DHIS2 Android Capture App stores the vaccination event locally in the device database. Data is queued for sync when connectivity returns. Health worker workflow is uninterrupted. | Automatic sync on reconnection. Sync conflict resolution per DHIS2 Android App standard logic. |
| **SPT batch import fails validation** | OpenHIM validation rejects batch (e.g., unrecognised facility code, antigen mismatch) | Error logged with specific validation failures. Integration Data Steward notified. SPT team contacted to correct source data. | Manual correction and resubmission. SPT batch retained in OpenHIM queue for 7 days. |
| **DHIS2 aggregate import fails** | DHIS2 returns import error (step 9 — SPT variant or auto-aggregation conflict) | OpenHIM logs the error. DHIS2 Data Manager notified. Common cause: metadata mismatch (indicator definition changed in DHIS2 without updating the Façade mapping). | Manual investigation. Data re-import after metadata alignment. |
| **SHR unavailable** | OpenHIM receives timeout from HAPI FHIR (step 11) | Immunization resource queued in OpenHIM for later delivery. Individual record in DHIS2 Tracker is unaffected. | Exponential backoff: 5 min, 15 min, 1 hour, then hourly for 24 hours. SHR delivery is eventually consistent. |

**Maturity Phase Mapping**

| Phase | Flow Variant | Notes |
|-------|-------------|-------|
| **Phase 1 (2026)** | SPT→OpenHIM→DHIS2 (aggregate, batch). DHIS2 Tracker EIR pilot at 10–15 facilities (parallel with SPT). | Existing flow wrapped in OpenHIM. EIR piloted but not yet primary. MPI linkage tested at pilot sites. |
| **Phase 2 (2027)** | DHIS2 Tracker EIR as primary at expanding facilities. SPT continues at non-Tracker sites. Both flows through OpenHIM. Individual Immunization resources sent to SHR (pilot). ADX export to WHO/RHO initiated. | Mixed environment: Tracker + SPT coexistence. Aggregate DHIS2 receives from both sources. |
| **Phase 3 (2028–2029)** | DHIS2 Tracker EIR primary at majority of facilities. SPT retained only at facilities without adequate infrastructure. Full FHIR-based immunisation data exchange. SHR receives all individual records. | FHIR Immunization resources are the canonical format. SPT Façade handles remaining SPT sites. |
| **Phase 4 (2030+)** | SPT decommissioned (subject to Tracker matching SPT's >99% accuracy nationally). Full event-driven: each vaccination event published as FHIR event; SHR, DHIS2, and international reporting subscribe independently. | Pub/sub model. ADX aggregates auto-generated from individual FHIR Immunization resources. |

---

### 6.2.3 Flow 3: Laboratory Result → Surveillance Notification

**Business Context.** Progressa's disease surveillance system is ~90% paper-based. When a laboratory confirms a notifiable disease — cholera from a stool culture, measles from serology, meningitis from CSF analysis — the current process relies on the laboratory technician remembering to alert the facility's IDSR focal person, who then fills a paper notification form, which is physically transported to the district level before entering the electronic reporting chain. This process introduces delays of days to weeks between laboratory confirmation and national-level awareness — delays that can be the difference between containing an outbreak at its source and managing a widespread epidemic.

This integration flow automates the path from laboratory result to surveillance notification. When the LIS records a positive result for a notifiable disease, the HIE automatically triggers a case notification in the DHIS2 Tracker IDSR+ surveillance programme, alerting the regional surveillance officer and the national IDSR coordinator in near-real-time.

**Actors**

| Actor | Role | System |
|-------|------|--------|
| A-LIS / OpenELIS | Source system — records laboratory test results | Laboratory Information System |
| OpenHIM | Integration mediator — routes, transforms, evaluates notification criteria | OpenHIM interoperability layer |
| OpenCR (MPI) | Identity resolution — links lab result to the patient's golden record | OpenCR Master Patient Index |
| DHIS2 Tracker (IDSR+) | Primary target — receives case notification for surveillance investigation | DHIS2 Tracker surveillance programme |
| DHIS2 (Aggregate) | Secondary target — receives aggregate laboratory statistics for HMIS | DHIS2 Aggregate |
| OpenMRS (EHR) | Secondary target (Phase 2+) — receives lab result for clinical decision support at the ordering facility | OpenMRS Electronic Health Record |
| Regional Surveillance Officer | Alert recipient — receives SMS/email notification for immediate-notification diseases | SMS/email gateway |

**Trigger Event.** A laboratory technician at a facility equipped with the LIS (A-LIS or OpenELIS) records a final, validated test result for a specimen. The trigger is the result being marked as "final" in the LIS (not preliminary or draft). The HIE evaluates whether the result matches a notifiable disease criterion — if it does, the surveillance notification flow is activated. If it does not, the result is still routed to DHIS2 (aggregate lab statistics) and the EHR (clinical result delivery) but no IDSR+ notification is generated.

**Notifiable Disease Trigger Criteria**

The following table defines the laboratory result criteria that trigger automatic IDSR+ case notifications. This list aligns with Progressa's IDSR priority diseases and the WHO IHR immediately notifiable conditions.

| Disease | Test Type | LOINC Code (indicative) | Trigger Criterion | Notification Priority |
|---------|-----------|------------------------|-------------------|----------------------|
| **Cholera** | Stool culture | 625-4 | *Vibrio cholerae* isolated | Immediate (within 1 hour) |
| **Measles** | Measles IgM serology | 21500-4 | Positive / Reactive | Immediate |
| **Meningitis (bacterial)** | CSF culture or Gram stain | 600-7 | *Neisseria meningitidis*, *Streptococcus pneumoniae*, or *Haemophilus influenzae* isolated | Immediate |
| **Viral haemorrhagic fever (Ebola, Marburg, Lassa)** | PCR / antigen detection | 41461-5 (Ebola) | Positive / Detected | Immediate (IHR) |
| **Acute flaccid paralysis (polio)** | Stool culture for poliovirus | 41463-1 | Poliovirus isolated | Immediate (IHR) |
| **Yellow fever** | Yellow fever IgM | 6588-5 | Positive / Reactive | Immediate (IHR) |
| **HIV (new diagnosis)** | HIV rapid test / ELISA | 68961-2 | Positive (confirmed per national algorithm) | Within 24 hours |
| **Tuberculosis** | Sputum smear / GeneXpert | 11545-1 (smear), 94500-6 (GeneXpert) | AFB positive / MTB detected | Within 24 hours |
| **Malaria (severe/unusual)** | Blood smear / RDT | 32700-7 | Positive with severity markers or unusual species | Within 24 hours (if sentinel surveillance site) |
| **Hepatitis B (acute)** | HBsAg + IgM anti-HBc | 5196-1, 16935-9 | Both positive | Within 7 days |
| **Neonatal tetanus** | Clinical diagnosis (no lab test) | N/A | Clinical case — entered directly into IDSR+ by clinician | Immediate |

The notification trigger criteria are configured as rules in an OpenHIM mediator — the "Surveillance Trigger Mediator" — which evaluates every incoming laboratory result against the notifiable disease list. The rule set is maintained by the Directorate of Public Health (data owner for surveillance data, per Section 4.1.1) and updated by the DHDD Integration Data Steward when the national notifiable disease list changes.

**Pre-Conditions**

1. The LIS (A-LIS or OpenELIS) is deployed and operational at the laboratory generating the result (Phase 1: NRL + 5 regional hospitals).
2. The LIS is connected to OpenHIM via the LIS FHIR Façade mediator, capable of translating laboratory results into FHIR DiagnosticReport and Observation resources.
3. The LOINC mapping for the priority test panel (~80 tests in Phase 1, ~200 in Phase 2) is configured in the LIS, enabling coded test identification.
4. The Surveillance Trigger Mediator is deployed in OpenHIM with the current notifiable disease rule set.
5. The DHIS2 Tracker IDSR+ programme is operational and the IDSR+ FHIR Façade mediator is deployed, capable of creating tracked entity instances from incoming FHIR resources.
6. The MPI is operational and the patient associated with the specimen has an MPI record (or can be matched probabilistically).
7. SMS/email gateway is configured for immediate notification diseases.

**Data Exchanged**

| Data Element | Source | FHIR Path | Required | Notes |
|-------------|--------|-----------|----------|-------|
| Patient identifier (MPI ID) | MPI lookup | DiagnosticReport.subject (Reference to Patient) | Yes | Linked to MPI golden record |
| Test code | LIS | Observation.code (LOINC) | Yes | LOINC code for the laboratory test performed |
| Test result value | LIS | Observation.value | Yes | Qualitative (positive/negative/detected) or quantitative (numeric + unit) |
| Result interpretation | LIS | Observation.interpretation | Yes | Normal / Abnormal / Critical; mapped from LIS flag |
| Specimen type | LIS | DiagnosticReport.specimen (Reference) | Yes | Blood, stool, CSF, sputum, etc. |
| Specimen collection date | LIS | Observation.effectiveDateTime | Yes | Date specimen was collected (not result date) |
| Result date | LIS | DiagnosticReport.issued | Yes | Date and time result was finalised |
| Performing laboratory | LIS | DiagnosticReport.performer (Reference to Organization) | Yes | Facility registry code |
| Ordering facility | LIS | DiagnosticReport.encounter.serviceProvider (Reference) | Conditional | If different from performing laboratory (referral specimens) |
| Ordering clinician | LIS | DiagnosticReport.resultsInterpreter (Reference to Practitioner) | No | When available from lab order |
| Patient demographics | MPI | Patient resource (name, DOB, sex, address) | Yes | Retrieved from MPI for IDSR+ case registration |
| Disease classification | Surveillance Trigger Mediator | Condition.code (ICD-11) | Generated | Mapped from lab result to ICD-11 disease code by the trigger mediator |

**FHIR Resources**

| Resource | Profile | Usage | Direction |
|----------|---------|-------|-----------|
| **DiagnosticReport** | Progressa MoH DiagnosticReport Profile | Container for lab result — references Observation(s), specimen, patient, performing lab | LIS → OpenHIM → EHR, DHIS2, IDSR+ |
| **Observation** | Progressa MoH Observation Profile (laboratory) | Individual test result — LOINC-coded test, value, interpretation, reference range | LIS → OpenHIM (within DiagnosticReport Bundle) |
| **Condition** | Progressa MoH Condition Profile | Suspected disease classification — generated by the Surveillance Trigger Mediator from the lab result | OpenHIM (Trigger Mediator) → IDSR+ |
| **MessageHeader** | FHIR R4 MessageHeader | Event type: `lab-result-notification` (general) or `surveillance-trigger` (notifiable disease detected) | LIS → OpenHIM |
| **Bundle** | FHIR R4 Bundle (type: transaction) | Wraps DiagnosticReport + Observation(s) + Patient reference | LIS → OpenHIM |
| **Patient** | Progressa MoH Patient Profile | Patient identity from MPI for IDSR+ case registration | MPI → OpenHIM → IDSR+ |

**Message Exchange Pattern.**

*Laboratory result submission:* Asynchronous, guaranteed delivery. The LIS submits the finalised result to OpenHIM and receives an HTTP 202 acknowledgment. Downstream processing (MPI linkage, notification evaluation, routing to IDSR+/DHIS2/EHR) proceeds asynchronously.

*Surveillance notification:* Near-real-time for immediately notifiable diseases. The Surveillance Trigger Mediator evaluates the result within seconds of receipt. If a notification criterion is met, the IDSR+ case creation and SMS/email alert are triggered immediately — target latency <5 minutes from result finalisation to surveillance notification.

*Aggregate lab statistics:* Batch. Laboratory result counts, positivity rates, and test volumes are aggregated daily by the LIS (or by the DHIS2 LIS Façade) and submitted to DHIS2 aggregate as part of the HMIS reporting chain.

**Sequence of Steps**

```
LIS            OpenHIM          MPI         Trigger       IDSR+        EHR      SMS GW
 │               │               │         Mediator        │            │         │
 │ 1. POST       │               │            │            │            │         │
 │    Bundle     │               │            │            │            │         │
 │    (DiagRpt   │               │            │            │            │         │
 │     + Obs)    │               │            │            │            │         │
 │──────────────▶│               │            │            │            │         │
 │               │ 2. Validate   │            │            │            │         │
 │               │    & log      │            │            │            │         │
 │ 3. HTTP 202   │               │            │            │            │         │
 │◀──────────────│               │            │            │            │         │
 │               │               │            │            │            │         │
 │               │ 4. Resolve    │            │            │            │         │
 │               │    patient    │            │            │            │         │
 │               │    identity   │            │            │            │         │
 │               │──────────────▶│            │            │            │         │
 │               │ 5. MPI ID    │            │            │            │         │
 │               │◀──────────────│            │            │            │         │
 │               │               │            │            │            │         │
 │               │ 6. Evaluate   │            │            │            │         │
 │               │    notifiable │            │            │            │         │
 │               │    criteria   │            │            │            │         │
 │               │──────────────────────────▶│            │            │         │
 │               │               │            │            │            │         │
 │               │               │  7a. [IF NOTIFIABLE]    │            │         │
 │               │               │            │            │            │         │
 │               │               │  8. Generate│            │            │         │
 │               │               │     Condition           │            │         │
 │               │               │     + case  │            │            │         │
 │               │               │     payload │            │            │         │
 │               │               │            │            │            │         │
 │               │ 9. POST case ◀────────────│            │            │         │
 │               │    notification            │            │            │         │
 │               │────────────────────────────────────────▶│            │         │
 │               │               │            │  10. Create│            │         │
 │               │               │            │      TEI + │            │         │
 │               │               │            │      initial            │         │
 │               │               │            │      event │            │         │
 │               │               │            │            │            │         │
 │               │ 11. Send      │            │            │            │         │
 │               │     immediate │            │            │            │         │
 │               │     alert     │            │            │            │         │
 │               │────────────────────────────┼────────────┼────────────┼────────▶│
 │               │               │            │            │            │  12. SMS│
 │               │               │            │            │            │  to RSO │
 │               │               │            │            │            │  + IDSR │
 │               │               │            │            │            │  coord. │
 │               │               │            │            │            │         │
 │               │  7b. [ALL RESULTS]         │            │            │         │
 │               │               │            │            │            │         │
 │               │ 13. Route to  │            │            │            │         │
 │               │     EHR       │            │            │            │         │
 │               │────────────────────────────┼────────────┼───────────▶│         │
 │               │               │            │            │  14. Store │         │
 │               │               │            │            │      in pt │         │
 │               │               │            │            │      chart │         │
 │               │               │            │            │            │         │
 │               │ 15. Aggregate │            │            │            │         │
 │               │     to DHIS2  │            │            │            │         │
 │               │     (batch)   │            │            │            │         │
```

**Step-by-Step Description**

1. **LIS submits laboratory result.** The laboratory technician finalises a test result in the LIS. The LIS FHIR Façade mediator constructs a FHIR Bundle containing a DiagnosticReport resource (with references to the ordering context) and one or more Observation resources (the actual test results with LOINC codes, values, and interpretations). The Bundle is POSTed to the OpenHIM LIS channel endpoint with client certificate authentication.

2. **OpenHIM validates and logs.** OpenHIM authenticates the LIS client, validates the Bundle structure (DiagnosticReport must reference at least one Observation; Observations must include LOINC code and value), and creates an audit log entry.

3. **OpenHIM returns HTTP 202 Accepted.** The LIS receives confirmation that the result has been accepted for processing.

4. **OpenHIM resolves patient identity.** Using the patient identifier from the DiagnosticReport (facility MRN, NIN, or other identifier submitted by the LIS), OpenHIM queries the MPI via PIXm.

5. **MPI returns golden record.** OpenCR responds with the patient's MPI identifier and linked identifiers. If no match is found, a provisional MPI record is created from the demographics available in the LIS (patient name, date of birth, sex — typically recorded at specimen collection).

6. **Surveillance Trigger Mediator evaluates the result.** OpenHIM routes the DiagnosticReport to the Surveillance Trigger Mediator — a purpose-built OpenHIM mediator that evaluates the Observation LOINC code and result value against the notifiable disease rule set (the trigger criteria table above). The evaluation is deterministic: each combination of LOINC code + result value either matches a rule or does not.

7. **Branching: notifiable vs. non-notifiable.**
   - **(7a) If the result matches a notifiable criterion:** The flow proceeds to steps 8–12 (surveillance notification) AND steps 13–15 (clinical delivery and aggregate reporting).
   - **(7b) If the result does not match a notifiable criterion:** The flow proceeds directly to steps 13–15 (clinical delivery and aggregate reporting). No IDSR+ notification is generated.

8. **Trigger Mediator generates surveillance payload.** The mediator constructs a FHIR Condition resource representing the suspected notifiable disease, coded in ICD-11. The Condition references the original DiagnosticReport (evidence) and the patient's MPI-linked identity. The notification priority (immediate, 24-hour, 7-day) is determined from the trigger criteria table.

9. **OpenHIM submits case notification to IDSR+.** The IDSR+ FHIR Façade mediator receives the surveillance payload (Condition + DiagnosticReport reference + Patient identity) and translates it into a DHIS2 Tracker event.

10. **DHIS2 Tracker creates the surveillance case.** A new tracked entity instance is created in the IDSR+ programme for the patient (or linked to an existing TEI if the patient already has a surveillance record). An initial event is created capturing the notification details: suspected disease, laboratory evidence, notifying laboratory, date of specimen collection, and date of result. The case status is set to "suspected" (pending epidemiological investigation).

11. **OpenHIM sends immediate alert.** For diseases classified as "immediate notification," OpenHIM triggers the SMS/email gateway.

12. **SMS and email alerts delivered.** The Regional Surveillance Officer for the laboratory's region and the national IDSR coordinator at the Directorate of Public Health receive alert messages containing: disease name, patient initials and age, laboratory name, date of result, and instructions to investigate via the DHIS2 Tracker IDSR+ dashboard. Alert messages do not include full patient demographics or clinical details — these are accessed only through the authenticated IDSR+ system.

13. **OpenHIM routes result to EHR.** For all results (notifiable and non-notifiable), if the ordering facility has an EHR (OpenMRS) connected to the HIE, the DiagnosticReport and associated Observations are routed to the EHR. The EHR FHIR module receives the result and makes it available in the patient's clinical record for the ordering clinician to review.

14. **EHR stores result in patient chart.** The laboratory result appears in the patient's OpenMRS record under the laboratory results section, linked to the original order if electronic ordering was used (Phase 2+) or as an unsolicited result if the order was paper-based.

15. **Aggregate lab statistics to DHIS2.** Laboratory test volumes, positivity rates, and turnaround times are aggregated (daily or per reporting period) and submitted to DHIS2 aggregate via OpenHIM. This provides the HMIS with laboratory performance indicators without requiring manual data compilation.

**Real-Time vs. Batch Considerations**

| Aspect | Real-Time (Immediate Notification Diseases) | Batch (Routine Results) |
|--------|---------------------------------------------|------------------------|
| **Trigger** | Each individual result matching immediate-notification criteria | End of day or reporting period |
| **Latency target** | <5 minutes from result finalisation to IDSR+ case creation and SMS alert | Same-day for clinical delivery (EHR); monthly for aggregate reporting (DHIS2) |
| **Volume** | Low — estimated 5–20 notifiable triggers per week nationally across the core laboratory network | Medium — estimated 200–500 test results per day across NRL + 5 regional hospitals (Phase 1) |
| **Infrastructure demand** | Minimal — small payload, single transaction | Moderate — batch processing of accumulated results |
| **Offline handling** | If LIS loses connectivity, the result is stored locally and the notification is sent as soon as connectivity is restored. The Surveillance Trigger Mediator processes queued results in order, preserving notification timeliness relative to receipt. | Batch results are queued and processed on next sync. No clinical urgency for aggregate statistics. |
| **Applicability** | Cholera, measles, meningitis, VHF, AFP, yellow fever, neonatal tetanus | HIV (new diagnosis — 24-hour notification but not minute-critical), TB, hepatitis B, routine lab results |

**Error Handling**

| Error Scenario | Detection | Response | Retry Logic |
|----------------|-----------|----------|-------------|
| **LIS result fails validation** | OpenHIM rejects Bundle (missing LOINC code, invalid structure) | HTTP 400 returned to LIS with OperationOutcome listing errors. Lab technician alerted to correct result in LIS. | No retry — LIS must correct and resubmit |
| **Patient not found in MPI** | OpenCR returns no match (step 4) | Provisional MPI record created from LIS demographics. IDSR+ case (if notifiable) created with provisional identity. Integration Data Steward notified for identity reconciliation. | No retry — surveillance notification proceeds with provisional identity. Identity resolved later. |
| **LOINC code not in trigger rule set** | Surveillance Trigger Mediator finds no matching rule (step 6) | Result treated as non-notifiable and routed only to EHR and DHIS2 aggregate. This is the normal path for the majority of results. | N/A — expected behaviour |
| **DHIS2 Tracker IDSR+ unavailable** | OpenHIM receives timeout or 5xx from IDSR+ Façade (step 9) | Case notification queued in OpenHIM for retry. SMS/email alert is still sent (step 11) — alerts are not dependent on IDSR+ availability. | Exponential backoff: 1 min, 5 min, 15 min, 1 hour, then hourly. Integration Data Steward alerted after 4 hours. |
| **SMS gateway unavailable** | OpenHIM receives delivery failure from SMS gateway (step 11) | Email alert attempted as fallback. If both fail, OpenHIM creates a high-priority alert in the integration monitoring dashboard for the Integration Data Steward. | SMS retry: 3 attempts at 2-minute intervals. Email retry: 3 attempts at 5-minute intervals. If all fail, manual escalation required. |
| **EHR not available at ordering facility** | Ordering facility does not have OpenMRS connected to HIE (common in Phase 1–2) | Result delivery to EHR is skipped. Result is available in the SHR (Phase 3+) and can be accessed by any authorised facility. Laboratory provides paper/phone result to ordering clinician as per current practice. | N/A — graceful degradation. EHR delivery becomes available as OpenMRS is deployed at the facility. |
| **Duplicate result submission** | LIS resubmits a result with the same transaction ID (e.g., after connectivity restoration) | OpenHIM detects duplicate transaction ID (IP-04 idempotent operations) and returns HTTP 200 with the previous processing result. No duplicate IDSR+ case or alert is generated. | N/A — idempotency prevents duplicate processing |
| **Power outage at laboratory** | LIS offline; results accumulate locally | LIS stores results in local database. On power/connectivity restoration, results are transmitted to OpenHIM in order. Surveillance Trigger Mediator processes each result regardless of delay — a cholera confirmation from 6 hours ago still generates an immediate notification. | Automatic bulk sync on restoration. Each result evaluated individually against trigger criteria. |

**Maturity Phase Mapping**

| Phase | Flow Variant | Notes |
|-------|-------------|-------|
| **Phase 1 (2026)** | Manual/batch: LIS at NRL and 5 regional hospitals. Lab results exported as CSV/JSON batches to DHIS2 via OpenHIM for aggregate statistics. Notifiable disease notifications remain manual (paper IDSR form) but logged in OpenHIM when Façade is piloted. | LIS FHIR Façade under development. Surveillance Trigger Mediator configured with priority disease rules. Integration tested at NRL. |
| **Phase 2 (2027)** | Real-time: LIS→OpenHIM→IDSR+ flow operational for immediate-notification diseases at LIS-equipped laboratories. Lab results delivered to EHR at pilot facilities. LOINC mapping covers ~80 priority tests. | Surveillance notification latency <5 minutes at equipped sites. Paper IDSR continues at non-LIS facilities. |
| **Phase 3 (2028–2029)** | Full: All LIS-equipped laboratories connected. LOINC mapping expanded to ~200 tests. All results routed through HIE to EHR, IDSR+, DHIS2, and SHR. Terminology validation via OCL for all coded results. | End-to-end electronic surveillance chain for LIS-connected facilities. Non-LIS facilities continue paper workflow with manual IDSR entry into Tracker. |
| **Phase 4 (2030+)** | Event-driven: lab result published as event; IDSR+, EHR, DHIS2, and SHR subscribe independently. Cross-border notification readiness for IHR reporting to WHO. | Pub/sub model. Automated IHR notification for internationally notifiable diseases. |


---


### 6.2.4 Flow 4: Clinical Encounter → Aggregate Reporting

**Business Context.** Progressa's national HMIS depends on aggregate facility reporting through DHIS2 — monthly tallies of outpatient visits, diagnoses, procedures, and service volumes compiled from paper registers by facility data focal points. This manual compilation process is labour-intensive, error-prone, and introduces reporting delays of weeks between service delivery and data availability. A recent HIS assessment found only about half of data sources adequate and approximately 70–80% monthly reporting completeness nationally, with significant variation between urban and rural facilities.

The introduction of an Electronic Health Record (OpenMRS) at priority facilities creates the opportunity to automate this pipeline: individual clinical encounters recorded in the EHR are transmitted as FHIR resources to the Shared Health Record (SHR) through the HIE, and aggregate indicators are extracted from the accumulated individual records and fed into DHIS2 — eliminating manual tally compilation and improving both the accuracy and timeliness of national health statistics. This flow is the mechanism through which individual-level clinical data (the domain of the EHR) is transformed into population-level health intelligence (the domain of DHIS2).

The flow also addresses a critical gap in the current architecture: the absence of individual-level clinical data outside of immunisation (SPT) and research (NMRI EMR). Without individual encounter data flowing from the point of care into the national data platform, MoH cannot compute indicators that depend on patient-level denominators (e.g., case fatality rates, treatment outcomes, continuity of care metrics), cannot support clinical decision support at the point of care from external data sources, and cannot build longitudinal patient records accessible across facilities.

**Actors**

| Actor | Role | System |
|-------|------|--------|
| OpenMRS (EHR) | Source system — records individual clinical encounters at the point of care | OpenMRS Electronic Health Record |
| OpenHIM | Integration mediator — routes, transforms, orchestrates | OpenHIM interoperability layer |
| OpenCR (MPI) | Identity resolution — ensures encounter is linked to the correct patient golden record | OpenCR Master Patient Index |
| HAPI FHIR (SHR) | Primary target — stores individual encounter records in the longitudinal patient record | Shared Health Record |
| DHIS2 (Aggregate) | Secondary target — receives aggregate indicators derived from individual encounters | DHIS2 National HMIS |

**Trigger Event.** A clinician completes a clinical encounter in OpenMRS — an outpatient consultation, an antenatal visit, a chronic disease follow-up, or any other patient interaction documented in the EHR. The trigger is the encounter being marked as "completed" (or "saved and validated") in OpenMRS. Encounters in "draft" or "in-progress" status are not transmitted to the HIE until the clinician confirms completion.

**Pre-Conditions**

1. OpenMRS is deployed and operational at the facility, with the FHIR module activated and the OpenHIM channel configured.
2. The patient has an MPI record (created via prior registration, Flow 1 birth registration, or facility-level registration through OpenMRS→MPI lookup).
3. The OpenMRS FHIR module is configured to generate Progressa MoH FHIR profiles for Encounter, Condition, Observation, Procedure, and MedicationRequest resources.
4. The SHR (HAPI FHIR server) is operational and accepting patient-linked FHIR resources.
5. DHIS2 aggregate indicators are configured with mapping rules that specify how individual FHIR resources translate to aggregate data elements (e.g., an Encounter with a Condition coded as J06.9 [acute upper respiratory infection] increments the "ARI cases" indicator for the facility and reporting period).
6. The aggregation service — either a purpose-built OpenHIM mediator or an intermediate analytics engine — is deployed and configured with the FHIR-to-aggregate mapping rules.

**Data Exchanged**

| Data Element | Source | FHIR Path | Required | Notes |
|-------------|--------|-----------|----------|-------|
| Patient identifier (MPI ID) | MPI lookup | Encounter.subject (Reference to Patient) | Yes | Linked to MPI golden record; ensures encounter is attributed to the correct patient |
| Encounter type | OpenMRS | Encounter.type | Yes | Outpatient, inpatient, emergency, antenatal, postnatal, chronic follow-up |
| Encounter date | OpenMRS | Encounter.period.start | Yes | Date and time of the clinical encounter |
| Facility | OpenMRS | Encounter.location (Reference to Location) | Yes | Facility registry code (DHIS2 org unit ID) |
| Clinician | OpenMRS | Encounter.participant.individual (Reference to Practitioner) | Conditional | Required at facilities with provider-level tracking; optional at others |
| Primary diagnosis | OpenMRS | Condition.code (ICD-11) | Yes | ICD-11 coded diagnosis linked to the encounter |
| Additional diagnoses | OpenMRS | Condition.code (ICD-11) | No | Secondary or comorbid diagnoses |
| Clinical observations | OpenMRS | Observation.code + Observation.value | Conditional | Vital signs (blood pressure, weight, temperature), clinical measurements |
| Procedures performed | OpenMRS | Procedure.code | Conditional | Coded procedure (if applicable to the encounter) |
| Medications prescribed | OpenMRS | MedicationRequest.medicationCodeableConcept (ATC) | Conditional | ATC-coded prescriptions linked to the encounter |
| Encounter outcome | OpenMRS | Encounter.status + Encounter.hospitalization.dischargeDisposition | Conditional | Relevant for inpatient encounters (discharged, transferred, deceased, absconded) |

**FHIR Resources**

| Resource | Profile | Usage | Direction |
|----------|---------|-------|-----------|
| **Encounter** | Progressa MoH Encounter Profile | Clinical visit container — references patient, location, clinician, period | OpenMRS → OpenHIM → SHR |
| **Condition** | Progressa MoH Condition Profile | Diagnosis — ICD-11 coded, linked to encounter | OpenMRS → OpenHIM → SHR, DHIS2 (aggregation) |
| **Observation** | Progressa MoH Observation Profile (clinical) | Vital signs and clinical measurements linked to encounter | OpenMRS → OpenHIM → SHR |
| **Procedure** | FHIR R4 Procedure | Procedures performed during encounter | OpenMRS → OpenHIM → SHR |
| **MedicationRequest** | FHIR R4 MedicationRequest | Prescriptions issued during encounter | OpenMRS → OpenHIM → SHR, eLMIS (demand signal, Phase 3) |
| **Bundle** | FHIR R4 Bundle (type: transaction) | Wraps Encounter + Condition(s) + Observation(s) + Procedure(s) + MedicationRequest(s) into a single atomic transaction | OpenMRS → OpenHIM |
| **Patient** | Progressa MoH Patient Profile | Patient identity reference (MPI-linked) | MPI → OpenMRS (at registration); included by reference in Bundle |

**Message Exchange Pattern.** Asynchronous, guaranteed delivery. When a clinician completes an encounter in OpenMRS, the FHIR module constructs a Bundle containing all resources generated during that encounter and submits it to OpenHIM. OpenMRS receives an HTTP 202 (Accepted) acknowledgment and does not block waiting for downstream processing. The SHR receives the individual resources for longitudinal storage; the aggregation service accumulates encounter data and periodically (daily batch or end-of-reporting-period) generates aggregate datasets for DHIS2.

The aggregation from individual FHIR resources to DHIS2 aggregate indicators operates as a daily batch process (not real-time) to avoid overloading the aggregation engine and to align with DHIS2's monthly reporting cycle. Real-time aggregation may be introduced in Phase 4 for priority indicators (e.g., disease-specific case counts for surveillance), but the default pattern is batch aggregation.

**Sequence of Steps**

```
Clinician       OpenMRS          OpenHIM          MPI           SHR          Aggregation    DHIS2
    │               │               │              │             │            Service         │
    │ 1. Complete   │               │              │             │              │              │
    │    encounter  │               │              │             │              │              │
    │──────────────▶│               │              │             │              │              │
    │               │ 2. Construct  │              │             │              │              │
    │               │    FHIR       │              │             │              │              │
    │               │    Bundle     │              │             │              │              │
    │               │               │              │             │              │              │
    │               │ 3. POST       │              │             │              │              │
    │               │    Bundle     │              │             │              │              │
    │               │──────────────▶│              │             │              │              │
    │               │               │ 4. Validate  │             │              │              │
    │               │               │    & log     │             │              │              │
    │               │ 5. HTTP 202   │              │             │              │              │
    │               │◀──────────────│              │             │              │              │
    │               │               │              │             │              │              │
    │               │               │ 6. Verify    │             │              │              │
    │               │               │    patient   │             │              │              │
    │               │               │    MPI ID    │             │              │              │
    │               │               │─────────────▶│             │              │              │
    │               │               │ 7. Confirmed │             │              │              │
    │               │               │◀─────────────│             │              │              │
    │               │               │              │             │              │              │
    │               │               │ 8. Route     │             │              │              │
    │               │               │    Bundle    │             │              │              │
    │               │               │    to SHR    │             │              │              │
    │               │               │─────────────────────────▶ │              │              │
    │               │               │              │  9. Store   │              │              │
    │               │               │              │     Encounter              │              │
    │               │               │              │     + linked │              │              │
    │               │               │              │     resources│              │              │
    │               │               │              │             │              │              │
    │               │               │ 10. Forward  │             │              │              │
    │               │               │     to       │             │              │              │
    │               │               │     aggregation            │              │              │
    │               │               │     queue    │             │              │              │
    │               │               │──────────────────────────────────────────▶│              │
    │               │               │              │             │  11. Accumulate              │
    │               │               │              │             │      encounter│              │
    │               │               │              │             │      data     │              │
    │               │               │              │             │              │              │
    │               │               │── [Daily batch / end of reporting period] ──│             │
    │               │               │              │             │              │              │
    │               │               │              │             │  12. Apply   │              │
    │               │               │              │             │      FHIR→   │              │
    │               │               │              │             │      aggregate│              │
    │               │               │              │             │      mapping  │              │
    │               │               │              │             │      rules    │              │
    │               │               │              │             │              │              │
    │               │               │              │             │  13. POST    │              │
    │               │               │              │             │      aggregate               │
    │               │               │              │             │      dataset ────────────▶  │
    │               │               │              │             │              │  14. Store   │
    │               │               │              │             │              │      in HMIS │
    │               │               │              │             │              │      dataset │
```

**Step-by-Step Description**

1. **Clinician completes encounter.** The health worker documents the clinical encounter in OpenMRS — recording diagnoses (ICD-11 coded), vital signs, procedures performed, and medications prescribed. The encounter is saved and marked as "completed."

2. **OpenMRS constructs FHIR Bundle.** The OpenMRS FHIR module generates a FHIR Bundle (type: transaction) containing an Encounter resource, one or more Condition resources (diagnoses), Observation resources (vital signs and clinical measurements), and optionally Procedure and MedicationRequest resources. All resources reference the patient by MPI identifier (established during the patient's registration in OpenMRS via MPI lookup).

3. **OpenMRS submits Bundle to OpenHIM.** The Bundle is POSTed to the OpenHIM EHR channel endpoint with client certificate authentication and a unique transaction ID.

4. **OpenHIM validates and logs.** OpenHIM authenticates the OpenMRS client, validates the Bundle structure against the Progressa MoH FHIR profiles (Encounter must include type, period, location, and patient reference; Condition must include ICD-11 code), and creates an audit log entry.

5. **OpenHIM returns HTTP 202 Accepted.** OpenMRS receives confirmation that the encounter data has been accepted for processing. The clinician's workflow is unaffected by downstream processing times.

6. **OpenHIM verifies patient identity.** The patient's MPI identifier from the Encounter.subject reference is verified against OpenCR to confirm the identity is current and valid. This is a lightweight verification (PIXm query), not a full matching operation — the matching was performed during patient registration.

7. **MPI confirms identity.** OpenCR returns confirmation of the patient's MPI record, including any updated linked identifiers.

8. **OpenHIM routes Bundle to SHR.** The complete FHIR Bundle is forwarded to the Shared Health Record (HAPI FHIR server) for longitudinal patient record storage.

9. **SHR stores encounter and linked resources.** The SHR persists the Encounter, Condition(s), Observation(s), Procedure(s), and MedicationRequest(s) linked to the patient's MPI identifier. This encounter becomes part of the patient's cross-facility health record, accessible to any authorised HIE-connected system.

10. **OpenHIM forwards encounter data to aggregation queue.** A copy of the encounter data (or a reference to the SHR-stored resources) is placed in the aggregation processing queue for the relevant facility and reporting period.

11. **Aggregation service accumulates encounter data.** The aggregation service collects individual encounters throughout the reporting period, maintaining running counts by facility, encounter type, diagnosis code, and other indicator dimensions.

12. **Aggregation service applies FHIR→aggregate mapping rules.** At the end of each daily batch cycle (or at reporting period close), the aggregation service applies the configured mapping rules to transform accumulated individual FHIR resources into DHIS2 aggregate data elements. Examples of mapping rules: each Encounter with type "outpatient" increments the "OPD attendance" indicator; each Condition coded J06.9 increments the "ARI cases" indicator; each Encounter with a Condition coded O80 (single spontaneous delivery) increments the "normal deliveries" indicator. The mapping rule set is maintained by the DHIS2 Data Manager in coordination with the Integration Data Steward.

13. **Aggregation service submits aggregate dataset to DHIS2.** The compiled aggregate data is submitted to DHIS2 using the Data Value Set Import API through OpenHIM. The dataset specifies the organisation unit (facility), period (month), and data element values.

14. **DHIS2 stores aggregate dataset.** The aggregate indicators populate the national HMIS, supplementing (and progressively replacing) manually compiled facility reports. At facilities with EHR deployment, auto-generated aggregate data provides a cross-check against manually entered data — discrepancies flag potential data quality issues in either source.

**Aggregation Strategy**

The FHIR→aggregate mapping rules define the translation from individual clinical resources to population-level indicators. The rule set is structured in three categories:

*Volume indicators:* Simple counts of encounters, disaggregated by type (OPD, ANC, PNC, chronic care), age group, sex, and facility. These replace the manual tally sheets currently used at facilities.

*Morbidity indicators:* Counts of specific diagnoses (ICD-11 coded Condition resources), disaggregated as required by the HMIS indicator definitions. A single encounter may contribute to multiple morbidity indicators if multiple diagnoses are recorded.

*Service delivery indicators:* Counts of specific procedures, medications prescribed, or clinical observations (e.g., number of HIV tests performed, number of patients with blood pressure recorded, number of deliveries by type). These indicators depend on the richness of EHR documentation and become more accurate as clinician adoption matures.

The aggregation frequency is daily batch processing with monthly period alignment. During each daily batch run, the aggregation service processes all encounters completed since the previous run, incrementing the running totals for the current reporting period. At month-end, the final aggregate dataset is submitted to DHIS2. This approach ensures that DHIS2 aggregate data is available within 24 hours of encounter completion (for daily monitoring dashboards) while maintaining alignment with the monthly HMIS reporting cycle.

**Error Handling**

| Error Scenario | Detection | Response | Retry Logic |
|----------------|-----------|----------|-------------|
| **OpenMRS encounter fails FHIR validation** | OpenHIM rejects Bundle (missing required fields: encounter type, patient reference, or ICD-11 diagnosis code) | HTTP 400 returned to OpenMRS with OperationOutcome listing specific validation errors. Encounter data remains in OpenMRS and is queued for retransmission after correction. | OpenMRS FHIR module retries automatically after the next encounter save or at the next scheduled sync cycle. If validation errors persist, the Integration Data Steward is notified for investigation (likely a FHIR module configuration issue). |
| **MPI identity verification fails** | OpenCR returns no match for the MPI identifier (step 6) — indicates a data integrity issue (patient was registered in OpenMRS with an invalid MPI ID) | Encounter data is queued in OpenHIM pending identity resolution. The Integration Data Steward is notified. The encounter is not lost — it is stored in OpenMRS and will be transmitted once the identity issue is resolved. | No automatic retry — requires manual investigation. The patient's OpenMRS record is flagged for MPI reconciliation. |
| **SHR unavailable** | OpenHIM receives timeout or HTTP 5xx from HAPI FHIR (step 8) | Bundle queued in OpenHIM for later delivery. Aggregation queue is still populated (step 10) — aggregate indicators are not delayed by SHR downtime. | Exponential backoff: 5 min, 15 min, 1 hour, then hourly for 24 hours. Integration Data Steward alerted after 4 hours. |
| **OpenMRS offline (facility connectivity loss)** | OpenMRS FHIR module cannot reach OpenHIM | Encounters are stored locally in OpenMRS. The FHIR module maintains a sync queue and transmits accumulated encounters when connectivity is restored. Clinical workflow at the facility is uninterrupted (HP-03 offline-first). | Automatic sync on reconnection. Encounters are transmitted in chronological order. Each encounter carries an idempotent transaction ID (IP-04) to prevent duplicates if a partial sync occurred before disconnection. |
| **Aggregation mapping rule mismatch** | Aggregation service encounters an Encounter or Condition code not covered by any mapping rule | The encounter is logged as "unmapped" and excluded from the aggregate dataset. The unmapped code is reported to the DHIS2 Data Manager for rule set expansion. | No retry — mapping rule set updated and historical unmapped encounters reprocessed in the next batch cycle. |
| **DHIS2 aggregate import fails** | DHIS2 returns import error (step 13) — e.g., metadata mismatch, data element not found, validation rule violation | Error logged in OpenHIM audit trail. DHIS2 Data Manager notified for investigation. Common causes: indicator definition changed in DHIS2 without updating the aggregation mapping rules; facility code mismatch between OpenMRS and DHIS2 organisation units. | Manual investigation and re-import after metadata alignment. Aggregation service retains the computed dataset for 30 days. |

**Maturity Phase Mapping**

| Phase | Flow Variant | Notes |
|-------|-------------|-------|
| **Phase 1 (2026)** | No EHR→aggregate flow. Facilities continue manual aggregate reporting into DHIS2. OpenMRS pilot deployment at 15 facilities begins generating encounter data locally but no automated HIE transmission. | Focus is on EHR deployment, clinician adoption, and FHIR module configuration. |
| **Phase 2 (2027)** | Pilot: OpenMRS at 15 pilot facilities transmits encounter Bundles to OpenHIM→SHR. Aggregation service piloted for a subset of indicators (OPD attendance, top-10 diagnoses). Auto-generated aggregates compared against manually reported data for validation. | Parallel reporting: both manual and auto-generated aggregates submitted to DHIS2. Discrepancy analysis informs data quality improvement. |
| **Phase 3 (2028–2029)** | Expanded: EHR deployed at 30+ facilities. Auto-generated aggregate reporting becomes primary source for EHR-equipped facilities. Manual reporting continues at non-EHR facilities. Full FHIR→aggregate mapping rule set covers all HMIS indicators. | Progressive replacement of manual tally compilation. National HMIS receives data from both auto-generated and manual sources. |
| **Phase 4 (2030+)** | Full: EHR deployed at majority of facilities. Auto-generated aggregate reporting is the standard. Real-time dashboards fed from individual encounter data (not just monthly aggregates). Event-driven: encounter completion published as event; SHR and aggregation service subscribe independently. | Near-real-time health intelligence from individual clinical data. Manual aggregate reporting retained only at facilities without EHR. |

---

### 6.2.5 Flow 5: Insurance Eligibility Verification and Claims Submission

**Business Context.** The National Health Insurance Authority (NHIA) currently operates the e-NHIS platform with 15,000–20,000 enrolled beneficiaries against a target of 60,000 — an enrollment achievement rate of ~30%. The scheme covers 19 essential interventions (predominantly maternal and newborn services) across about 70 contracted facilities, using a fee-for-service payment model. Insurance eligibility verification at the point of care is entirely manual: facility staff must either inspect the patient's physical NHIA card, telephone the NHIA office, or simply assume coverage and submit a claim retrospectively. Claims submission is also largely manual — paper claim forms completed at the facility and submitted to NHIA for adjudication, with payment processing through bank transfers.

This manual process creates three critical problems. First, eligibility verification delays — and outright failures when the patient has lost their card or the NHIA phone line is busy — mean that insured patients are sometimes turned away or charged out-of-pocket for services they are entitled to receive. Second, manual claims submission is slow and error-prone, with high rejection rates due to incomplete or incorrectly coded forms. Third, provider payment delays erode facility confidence in the insurance scheme, undermining the NHIA's ability to expand its contracted facility network and beneficiary base.

This integration flow automates two linked processes: real-time insurance eligibility verification at the point of care (synchronous), and electronic claims submission and adjudication (asynchronous). The flow connects the facility-level EHR (OpenMRS) to the national insurance platform (e-NHIS) through the HIE, and integrates ProgressaPay for provider payment disbursement.

**Actors**

| Actor | Role | System |
|-------|------|--------|
| OpenMRS (EHR) | Source system — initiates eligibility check and generates claims from clinical encounter data | OpenMRS Electronic Health Record |
| OpenHIM | Integration mediator — routes eligibility queries and claims transactions | OpenHIM interoperability layer |
| OpenCR (MPI) | Identity resolution — resolves patient identity for insurance lookup | OpenCR Master Patient Index |
| e-NHIS | Target system — verifies insurance eligibility, receives and adjudicates claims | National Health Insurance System |
| ProgressaPay | Payment system — disburses provider payments for adjudicated claims | ProgressaPay mobile money / payment platform |
| DHIS2 | Analytics — receives aggregate insurance utilisation statistics | DHIS2 National HMIS |

**Trigger Event.** The flow has two distinct triggers corresponding to the two sub-flows:

*Eligibility verification:* Triggered when a patient presents at a health facility and is registered (or looked up) in OpenMRS. The eligibility check occurs during patient registration or at the start of a clinical encounter — before services are rendered — so that the clinician and the patient know the coverage status upfront.

*Claims submission:* Triggered when a clinical encounter is completed and includes services covered under the e-NHIS benefit package. The claim is generated automatically from the encounter data recorded in OpenMRS, using the diagnosis codes (ICD-11), procedure codes, and medication codes documented during the encounter.

**Pre-Conditions**

1. OpenMRS is deployed at the facility with the insurance module activated and the e-NHIS FHIR Façade channel configured in OpenHIM.
2. The patient has an MPI record with a linked e-NHIS beneficiary ID (or the patient's identity can be resolved against the MPI to discover the e-NHIS ID).
3. The e-NHIS FHIR Façade mediator is deployed in OpenHIM, capable of translating FHIR CoverageEligibilityRequest/Response and Claim/ClaimResponse resources to/from the e-NHIS native API.
4. The e-NHIS benefit package (19 essential interventions and any expansions) is codified with ICD-11 diagnosis codes and procedure codes, enabling automated coverage determination.
5. ProgressaPay integration is operational for provider payment disbursement (or the ProgressaPay Façade mediator is deployed in OpenHIM).
6. Network connectivity between the facility, OpenHIM, and e-NHIS is available (or the offline claims workflow is configured — see below).

**Data Exchanged**

*Eligibility Verification:*

| Data Element | Source | FHIR Path | Required | Notes |
|-------------|--------|-----------|----------|-------|
| Patient identifier (MPI ID) | MPI lookup | CoverageEligibilityRequest.patient (Reference to Patient) | Yes | MPI golden record identifier |
| e-NHIS beneficiary ID | MPI (linked identifier) | CoverageEligibilityRequest.patient.identifier (system: `urn:oid:progressa.gov.nhia.beneficiary`) | Yes | Retrieved from MPI; primary key for e-NHIS lookup |
| Service type requested | OpenMRS | CoverageEligibilityRequest.item.category | Conditional | If checking eligibility for a specific service (e.g., antenatal care, delivery) |
| Facility identifier | OpenMRS | CoverageEligibilityRequest.facility (Reference to Location) | Yes | Must be a contracted e-NHIS facility |
| Coverage status | e-NHIS | CoverageEligibilityResponse.insurance.coverage | Returned | Active, inactive, pending |
| Benefit details | e-NHIS | CoverageEligibilityResponse.insurance.item | Returned | List of covered services with any co-payment requirements |
| Coverage period | e-NHIS | Coverage.period | Returned | Start and end dates of the patient's coverage |

*Claims Submission:*

| Data Element | Source | FHIR Path | Required | Notes |
|-------------|--------|-----------|----------|-------|
| Patient identifier (MPI ID) | MPI | Claim.patient (Reference to Patient) | Yes | MPI golden record identifier |
| e-NHIS beneficiary ID | MPI | Claim.patient.identifier | Yes | e-NHIS beneficiary ID from MPI |
| Provider (facility) | OpenMRS | Claim.provider (Reference to Organization) | Yes | Contracted facility code |
| Encounter reference | OpenMRS | Claim.supportingInfo (Reference to Encounter) | Yes | Links claim to the clinical encounter |
| Diagnosis codes | OpenMRS | Claim.diagnosis.diagnosisCodeableConcept (ICD-11) | Yes | Primary and secondary diagnoses from the encounter |
| Service items | OpenMRS | Claim.item.productOrService | Yes | Each service rendered, coded per e-NHIS tariff schedule |
| Service date | OpenMRS | Claim.item.servicedDate | Yes | Date service was rendered |
| Claimed amount | OpenMRS | Claim.item.unitPrice + Claim.item.net | Yes | Amount claimed per e-NHIS tariff schedule |
| Total claim amount | OpenMRS | Claim.total | Yes | Sum of all claim items |
| Adjudication outcome | e-NHIS | ClaimResponse.outcome | Returned | complete (approved), error (rejected), partial |
| Approved amount | e-NHIS | ClaimResponse.total | Returned | Amount approved for payment |
| Rejection reason | e-NHIS | ClaimResponse.error | Conditional | Reason codes for rejected or partially approved claims |

**FHIR Resources**

| Resource | Profile | Usage | Direction |
|----------|---------|-------|-----------|
| **CoverageEligibilityRequest** | FHIR R4 CoverageEligibilityRequest | Real-time eligibility query — patient identity, service type, facility | OpenMRS → OpenHIM → e-NHIS |
| **CoverageEligibilityResponse** | FHIR R4 CoverageEligibilityResponse | Eligibility result — coverage status, benefit details, co-payment requirements | e-NHIS → OpenHIM → OpenMRS |
| **Coverage** | Progressa MoH Coverage Profile | Insurance enrollment record — beneficiary ID, coverage type, period, payer | e-NHIS → OpenHIM → OpenMRS (cached for display) |
| **Claim** | Progressa MoH Claim Profile | Insurance claim — encounter details, diagnosis codes, service items, amounts | OpenMRS → OpenHIM → e-NHIS |
| **ClaimResponse** | FHIR R4 ClaimResponse | Adjudication result — outcome, approved amount, rejection reasons | e-NHIS → OpenHIM → OpenMRS |
| **Patient** | Progressa MoH Patient Profile | Patient identity reference (MPI-linked, includes e-NHIS beneficiary ID) | MPI → OpenMRS (at registration) |

**Message Exchange Pattern.**

*Eligibility verification:* Synchronous request-response. The EHR sends a CoverageEligibilityRequest and blocks (with a UI spinner) until the CoverageEligibilityResponse is returned. Target latency: <3 seconds end-to-end. This is a real-time point-of-care interaction — the clinician and patient need the eligibility result before proceeding with care. If the response is not received within the timeout window (5 seconds), the EHR falls back to cached eligibility data (if available from a previous check within 24 hours) or displays "eligibility unverified — proceed with caution."

*Claims submission:* Asynchronous request with guaranteed delivery. After the encounter is completed, OpenMRS generates the Claim resource and submits it to OpenHIM. OpenMRS receives an HTTP 202 (Accepted) acknowledgment. The claim is forwarded to e-NHIS for adjudication, which may take hours or days depending on NHIA's processing cycle. The ClaimResponse is returned asynchronously and stored in the OpenMRS insurance module for the facility's billing team to review.

*Provider payment:* Asynchronous, batch. After e-NHIS adjudicates approved claims for a provider (facility), a payment instruction is generated and submitted to ProgressaPay for disbursement. Payment processing follows ProgressaPay's settlement cycle (typically T+1 for mobile money).

**Sequence of Steps — Eligibility Verification (Sub-Flow A)**

```
Receptionist    OpenMRS          OpenHIM          MPI           e-NHIS
     │               │               │              │              │
     │ 1. Register   │               │              │              │
     │    / look up  │               │              │              │
     │    patient    │               │              │              │
     │──────────────▶│               │              │              │
     │               │ 2. MPI        │              │              │
     │               │    lookup     │              │              │
     │               │──────────────▶│              │              │
     │               │               │ 3. PIXm      │              │
     │               │               │    query     │              │
     │               │               │─────────────▶│              │
     │               │               │ 4. MPI ID +  │              │
     │               │               │    e-NHIS ID │              │
     │               │               │◀─────────────│              │
     │               │ 5. Patient    │              │              │
     │               │    identifiers│              │              │
     │               │◀──────────────│              │              │
     │               │               │              │              │
     │               │ 6. POST       │              │              │
     │               │    Eligibility│              │              │
     │               │    Request    │              │              │
     │               │──────────────▶│              │              │
     │               │               │ 7. Route to  │              │
     │               │               │    e-NHIS    │              │
     │               │               │    Façade    │              │
     │               │               │─────────────────────────▶  │
     │               │               │              │  8. Verify   │
     │               │               │              │     coverage │
     │               │               │              │     status & │
     │               │               │              │     benefits │
     │               │               │ 9. Eligibility              │
     │               │               │    Response  │              │
     │               │               │◀─────────────────────────── │
     │               │ 10. Coverage  │              │              │
     │               │     status    │              │              │
     │               │◀──────────────│              │              │
     │               │               │              │              │
     │ 11. Display   │              │              │              │
     │     coverage  │               │              │              │
     │     status    │               │              │              │
     │◀──────────────│               │              │              │
```

**Step-by-Step Description — Eligibility Verification**

1. **Patient registration or lookup.** When a patient presents at the facility, the receptionist or triage nurse searches for the patient in OpenMRS (by name, NIN, or facility MRN).

2. **OpenMRS initiates MPI lookup.** The OpenMRS FHIR module sends a PIXm query to OpenHIM to resolve the patient's identity and retrieve all linked identifiers.

3. **OpenHIM routes to MPI.** The PIXm query is forwarded to OpenCR.

4. **MPI returns identifiers.** OpenCR responds with the patient's MPI golden record, including the e-NHIS beneficiary ID if the patient is enrolled in the insurance scheme.

5. **Identifiers returned to OpenMRS.** The patient's record in OpenMRS is updated with the linked identifiers.

6. **OpenMRS sends eligibility request.** If an e-NHIS beneficiary ID is found, the OpenMRS insurance module automatically constructs a FHIR CoverageEligibilityRequest and sends it to OpenHIM. The request includes the patient's e-NHIS beneficiary ID, the facility code, and (optionally) the service type the patient is seeking.

7. **OpenHIM routes to e-NHIS Façade.** The e-NHIS FHIR Façade mediator translates the FHIR CoverageEligibilityRequest into the e-NHIS native API format and queries the insurance platform.

8. **e-NHIS verifies coverage.** The e-NHIS platform checks the patient's enrollment status (active, suspended, expired), confirms the facility is a contracted provider, and retrieves the applicable benefit package (covered services, co-payment requirements, annual limits).

9. **e-NHIS returns eligibility response.** The e-NHIS Façade translates the native response into a FHIR CoverageEligibilityResponse containing the coverage status and benefit details.

10. **OpenHIM returns response to OpenMRS.** The eligibility result is delivered to the OpenMRS insurance module.

11. **Coverage status displayed.** The receptionist or clinician sees the patient's insurance status on the OpenMRS screen: "NHIS Active — Covered Services: [list of covered interventions] — Co-payment: [amount if applicable]" or "NHIS Inactive/Not Enrolled — Patient pays out-of-pocket." This information is available before the clinical consultation begins.

**Sequence of Steps — Claims Submission and Adjudication (Sub-Flow B)**

```
Clinician       OpenMRS          OpenHIM          e-NHIS         ProgressaPay
    │               │               │               │              │
    │ 1. Complete   │               │               │              │
    │    encounter  │               │               │              │
    │──────────────▶│               │               │              │
    │               │ 2. Auto-      │               │              │
    │               │    generate   │               │              │
    │               │    Claim from │               │              │
    │               │    encounter  │               │              │
    │               │    data       │               │              │
    │               │               │               │              │
    │               │ 3. POST Claim │               │              │
    │               │──────────────▶│               │              │
    │               │               │ 4. Validate   │              │
    │               │               │    & log      │              │
    │               │ 5. HTTP 202   │               │              │
    │               │◀──────────────│               │              │
    │               │               │               │              │
    │               │               │ 6. Route to   │              │
    │               │               │    e-NHIS     │              │
    │               │               │    Façade     │              │
    │               │               │──────────────▶│              │
    │               │               │               │ 7. Register  │
    │               │               │               │    claim &   │
    │               │               │               │    queue for │
    │               │               │               │    adjudication
    │               │               │ 8. Claim      │              │
    │               │               │    receipt    │              │
    │               │               │    confirmation              │
    │               │               │◀──────────────│              │
    │               │               │               │              │
    │               │               │ ── [Adjudication period] ─── │
    │               │               │               │              │
    │               │               │               │ 9. Adjudicate│
    │               │               │               │    claim     │
    │               │               │               │    (rules    │
    │               │               │               │    engine)   │
    │               │               │               │              │
    │               │               │ 10. POST      │              │
    │               │               │     ClaimResponse            │
    │               │               │◀──────────────│              │
    │               │ 11. Claim     │               │              │
    │               │     result    │               │              │
    │               │◀──────────────│               │              │
    │               │               │               │              │
    │               │               │ ── [Payment settlement] ──── │
    │               │               │               │              │
    │               │               │               │ 12. Generate │
    │               │               │               │     payment  │
    │               │               │               │     batch    │
    │               │               │               │──────────────▶│
    │               │               │               │              │ 13. Disburse
    │               │               │               │              │     to
    │               │               │               │              │     provider
    │               │               │               │              │     account
    │               │               │               │ 14. Payment  │
    │               │               │               │     confirmation
    │               │               │               │◀─────────────│
```

**Step-by-Step Description — Claims Submission**

1. **Clinician completes encounter.** The health worker completes the clinical encounter in OpenMRS, documenting diagnoses (ICD-11), procedures, and medications.

2. **OpenMRS auto-generates claim.** The OpenMRS insurance module evaluates the encounter data against the e-NHIS tariff schedule and benefit package. If any services rendered are covered under the patient's insurance, a FHIR Claim resource is automatically constructed. The claim includes: patient identifier (e-NHIS beneficiary ID), facility code, encounter date, diagnosis codes, service items with tariff-based pricing, and total claimed amount. Services not covered by insurance are excluded from the claim and flagged for out-of-pocket payment.

3. **OpenMRS submits claim to OpenHIM.** The Claim resource is POSTed to the OpenHIM e-NHIS channel endpoint with authentication and a unique claim transaction ID.

4. **OpenHIM validates and logs.** OpenHIM authenticates the OpenMRS client, validates the Claim structure (patient must have e-NHIS ID, facility must be contracted, diagnosis codes must be ICD-11, service items must reference valid tariff codes), and creates an audit log entry.

5. **OpenHIM returns HTTP 202 Accepted.** OpenMRS receives confirmation that the claim has been accepted for processing.

6. **OpenHIM routes to e-NHIS Façade.** The e-NHIS FHIR Façade translates the FHIR Claim into the e-NHIS native claims format and submits it.

7. **e-NHIS registers and queues claim.** The claim is registered in the e-NHIS claims processing system with a unique claim reference number and queued for adjudication.

8. **e-NHIS returns claim receipt.** A confirmation with the claim reference number is returned to OpenHIM and logged.

9. **e-NHIS adjudicates claim.** The NHIA claims adjudication process — either automated (rules-based for standard claims) or manual (for complex or high-value claims) — evaluates the claim against the benefit package, tariff schedule, coverage period, annual limits, and duplicate submission checks. The outcome is one of: approved (full amount), partially approved (with adjustment reasons), or rejected (with rejection reason codes).

10. **e-NHIS returns ClaimResponse.** The adjudication result is pushed to OpenHIM as a FHIR ClaimResponse (or pulled by OpenHIM on a scheduled poll, depending on e-NHIS notification capabilities).

11. **OpenHIM delivers ClaimResponse to OpenMRS.** The adjudication result appears in the OpenMRS insurance module, visible to the facility's billing team. Approved claims are marked for payment tracking; rejected claims include the rejection reason for appeal or correction.

12. **e-NHIS generates payment batch.** On a regular payment cycle (weekly or bi-weekly), e-NHIS aggregates approved claims by provider and generates a payment batch instruction for ProgressaPay.

13. **ProgressaPay disburses payment.** ProgressaPay processes the payment instruction, transferring the approved amount to the facility's designated account (mobile money or bank account). ProgressaPay is the only operational cross-ministry real-time payment integration in Progressa — leveraging ProgressaPay for provider payment leverages proven infrastructure rather than building a separate payment channel.

14. **ProgressaPay confirms payment.** Payment confirmation is returned to e-NHIS, updating the claim status to "paid" and completing the claims lifecycle.

**Offline Claims Workflow (CLAIM-it)**

Connectivity at health facilities in Progressa is unreliable — ~60% electricity access, single submarine cable dependency, and mobile network coverage gaps particularly in rural regions. The integration architecture must support claims generation and submission even when the facility has no connectivity to the HIE.

The offline claims workflow — designated "CLAIM-it" (Claims Locally Accumulated and Integrated Manually for Immediate Transmission) — operates as follows:

1. **Offline encounter recording.** The clinician records the encounter in OpenMRS as normal. OpenMRS operates fully offline using its local database (HP-03 offline-first principle).

2. **Offline claim generation.** The OpenMRS insurance module generates the Claim resource locally, using a cached copy of the e-NHIS tariff schedule and benefit package (refreshed whenever connectivity is available, with a validity period of 30 days). The claim is stored in the OpenMRS local claim queue.

3. **Offline eligibility — cached data.** For eligibility verification, OpenMRS uses cached Coverage data from the patient's last successful eligibility check. If no cached data exists, the patient's insurance status is recorded as "unverified" and the encounter proceeds with a manual note that insurance eligibility must be confirmed when connectivity is restored.

4. **Store-and-forward on reconnection.** When connectivity is restored, the OpenMRS FHIR module transmits all queued claims to OpenHIM in chronological order. Each claim carries an idempotent transaction ID (IP-04) to prevent duplicate submission if a partial sync occurred.

5. **Retroactive eligibility verification.** For claims submitted with "unverified" eligibility, OpenHIM performs a retroactive eligibility check against e-NHIS. If the patient is confirmed as eligible, the claim proceeds normally. If the patient is not eligible, the claim is flagged and the facility is notified to pursue out-of-pocket collection.

6. **Tariff schedule refresh.** When connectivity is restored, the OpenMRS insurance module checks for tariff schedule updates and refreshes the cached copy.

**Error Handling**

| Error Scenario | Detection | Response | Retry Logic |
|----------------|-----------|----------|-------------|
| **Eligibility request timeout** | OpenHIM does not receive response from e-NHIS within 5 seconds (step 7–9 of Sub-Flow A) | OpenMRS displays "Eligibility unverified" with the most recent cached coverage status (if available within 24 hours) or "No insurance data available." Clinician proceeds with care; eligibility is re-verified at next sync. | No automatic retry during the encounter — patient should not wait. Background retry when e-NHIS becomes available; updated status displayed on the patient's next visit. |
| **Patient has no e-NHIS ID** | MPI returns no e-NHIS beneficiary ID (step 4 of Sub-Flow A) | OpenMRS displays "Patient not enrolled in NHIS." Facility staff may offer on-site NHIS enrollment (at facilities with enrollment capability) or direct the patient to the nearest NHIA office. | N/A — patient genuinely not enrolled. Flow does not generate a false claim. |
| **Facility not contracted with e-NHIS** | e-NHIS returns "facility not contracted" error (step 8 of Sub-Flow A) | Eligibility response shows "Facility not contracted — patient may be eligible but this facility cannot bill NHIS." This should be caught during facility onboarding, not at the point of care. | N/A — facility registration issue escalated to NHIA. |
| **Claim validation fails** | OpenHIM rejects Claim (e.g., invalid ICD-11 code, tariff code not in schedule, missing required fields) | HTTP 400 returned to OpenMRS with specific error details. The claim is retained in OpenMRS for correction by the billing team. | No automatic retry — billing team corrects and resubmits. |
| **e-NHIS rejects claim during adjudication** | e-NHIS ClaimResponse with outcome "error" (step 9) | Rejection reason displayed in OpenMRS insurance module. Facility billing team reviews and either corrects and resubmits (for correctable errors) or escalates to NHIA (for coverage disputes). | Manual resubmission after correction. Claims can be appealed through the NHIA dispute resolution process. |
| **ProgressaPay payment fails** | ProgressaPay returns failure (step 13) | e-NHIS retains the approved claim and re-queues for the next payment batch. Facility is notified of the payment delay. | Automatic retry in next payment cycle. If repeated failure, NHIA finance team investigates (possible account issue). |
| **Offline: tariff cache expired** | OpenMRS tariff cache older than 30 days | Claims generated with expired tariff data are flagged as "tariff-unverified." On reconnection, OpenHIM validates tariff codes against current schedule. If tariff has changed, the claim amount is recalculated before submission to e-NHIS. | Automatic on reconnection — tariff reconciliation before claim submission. |

**Maturity Phase Mapping**

| Phase | Flow Variant | Notes |
|-------|-------------|-------|
| **Phase 1 (2026)** | No automated eligibility/claims. Manual eligibility verification (phone/card). Manual paper claims. e-NHIS FHIR Façade development begins. | Focus on understanding e-NHIS API, designing FHIR Claim profiles, and building the Façade. |
| **Phase 2 (2027)** | Real-time eligibility verification at 15 pilot EHR facilities via OpenHIM→e-NHIS. Electronic claims submission piloted — auto-generated from OpenMRS encounter data. ProgressaPay integration for provider payments piloted. | Eligibility check target latency <3 seconds. Claims adjudication workflow tested with NHIA. |
| **Phase 3 (2028–2029)** | Eligibility and claims operational at all EHR-equipped facilities. Offline claims workflow (CLAIM-it) deployed. Full tariff schedule and benefit package codified in FHIR. ProgressaPay provider payments standard. | End-to-end electronic claims lifecycle: encounter → claim → adjudication → payment. Non-EHR facilities continue paper claims. |
| **Phase 4 (2030+)** | Universal electronic claims from all contracted facilities. Advanced claims analytics (fraud detection, utilisation patterns). Real-time provider payment via ProgressaPay. Event-driven: encounter completion publishes event; e-NHIS subscribes for claims-eligible encounters. | Full digital insurance value chain. Claims processing time reduced from weeks to days. |

---

### 6.2.6 Flow 6: National Aggregate Data → Regional and Global Reporting

**Business Context.** Progressa has international reporting obligations to the World Health Organization (WHO), the Regional Health Organisation (RHO), and the Regional Economic Community (REC). These obligations include routine annual health statistics (WHO Global Health Observatory indicators), disease-specific programme reports (HIV, TB, malaria, immunisation), International Health Regulations (IHR) event notifications, and regional health security reporting (REC/RHO epidemic preparedness).

Currently, international reporting is a manual, labour-intensive process. The Directorate of Planning and Information extracts data from DHIS2, compiles it into the required formats (WHO questionnaires, RHO reporting templates), and submits through each organisation's web portal or email. This process introduces delays (often months between the end of the reporting period and submission), is prone to transcription errors, and does not leverage the structured digital data already available in DHIS2.

DHIS2 supports the Aggregate Data Exchange (ADX) format — an IHE-profiled standard purpose-built for aggregate health data exchange between health management information systems (Section 6.3.3). The WHO operates a global DHIS2 instance that can receive ADX-formatted data, and RHO's regional health data platform is similarly ADX-capable. This flow automates the pipeline from national DHIS2 aggregate data to international reporting platforms, replacing manual compilation with structured, validated, automated data exchange.

**Actors**

| Actor | Role | System |
|-------|------|--------|
| DHIS2 (National) | Source system — the authoritative repository of national aggregate health data | Progressa National DHIS2 Instance |
| OpenHIM | Integration mediator — routes, validates, logs international data exchange | OpenHIM interoperability layer |
| WHO Global DHIS2 | Primary international target — receives aggregate health statistics for the WHO Global Health Observatory | WHO DHIS2 Global Instance |
| RHO Regional Platform | Regional target — receives aggregate health data for REC regional health monitoring | RHO Regional Health Data Platform |
| PBoS | National target — receives health statistics for the national statistical yearbook and SDG monitoring | Progressa Bureau of Statistics |

**Trigger Event.** The flow is triggered on a scheduled basis aligned with international reporting calendars:

*Monthly:* Disease surveillance aggregates (IDSR weekly aggregated to monthly) are exported for RHO regional epidemic preparedness monitoring.

*Quarterly:* Programme-specific aggregates (immunisation coverage, ANC attendance, HIV treatment cascade) are exported for WHO and RHO routine monitoring.

*Annually:* Comprehensive national health statistics are exported for the WHO Global Health Observatory, RHO annual health report, PBoS statistical yearbook, and SDG indicator reporting.

*Ad hoc:* IHR event notifications for Public Health Events of International Concern (PHEICs) are submitted immediately when declared — these are not aggregate data flows but event-based notifications (handled by Flow 3's surveillance channel; this flow covers only the routine aggregate reporting).

**Pre-Conditions**

1. The national DHIS2 instance contains validated, complete, and approved aggregate data for the reporting period. Validation rules have been applied, data quality scorecards reviewed, and the Directorate of Planning and Information has authorised the data for release.
2. National-to-international indicator mapping is configured: each WHO/RHO indicator is mapped to the corresponding DHIS2 data element(s), with any required transformation rules (denominator calculations, age group disaggregation, indicator formula application).
3. OpenHIM is configured with channels for WHO and RHO endpoints, including authentication credentials (API keys or certificates) for each international platform.
4. The ADX Export Mediator is deployed in OpenHIM, capable of extracting data from DHIS2, applying indicator mappings, and generating ADX-formatted datasets.
5. Data sharing agreements are in place between MoH and WHO, RHO, and PBoS specifying the indicators shared, the frequency, the data granularity (national, regional, or facility level), and the authorised use.

**Data Exchanged**

| Data Category | Source (DHIS2) | Target(s) | Indicators (examples) | Reporting Frequency |
|--------------|----------------|-----------|----------------------|-------------------|
| Immunisation coverage | DHIS2 Aggregate (from EIR/SPT via Flows 2 and 4) | WHO, RHO | DPT3 coverage, MCV1 coverage, fully immunised children, zero-dose children | Quarterly, annually |
| Reproductive and maternal health | DHIS2 Aggregate (from EHR via Flow 4, manual facility reports) | WHO, RHO | ANC 4+ visits, skilled birth attendance, institutional delivery rate, postnatal care within 48 hours | Quarterly, annually |
| Disease surveillance | DHIS2 Aggregate (from IDSR via Flow 3) | WHO (IHR), RHO | Notifiable disease case counts by disease, region, and month; outbreak summaries | Monthly, ad hoc |
| HIV/TB/Malaria | DHIS2 Aggregate (programme-specific) | WHO, RHO, Global Fund | ART coverage, TB treatment success rate, malaria incidence, ITN distribution | Quarterly, annually |
| Health workforce | DHIS2 / iHRIS (Phase 3) | WHO | Physician-to-population ratio, nursing density, CHW coverage | Annually |
| Health financing | DHIS2 / external (MoF inputs) | WHO, PBoS | Current health expenditure per capita, domestic general government health expenditure | Annually |
| SDG health indicators | DHIS2 (composite) | PBoS, WHO | Under-5 mortality rate, neonatal mortality rate, maternal mortality ratio, UHC service coverage index | Annually |

**ADX Format Specification**

ADX (Aggregate Data Exchange) is the IHE-profiled format used for all routine aggregate data exchange. An ADX data set consists of:

*Header:* Identifies the reporting country (PG — Progressa), the reporting period (e.g., 2026-Q1), the indicator set (e.g., WHO-CORE-100, RHO-ANNUAL), and metadata (generation timestamp, authorising official).

*Data values:* Each data value specifies an indicator code (mapped to the target organisation's indicator definition), a disaggregation (by region, by age group, by sex — as required by the indicator definition), and the numeric value. ADX supports both simple counts and calculated indicators (rates, ratios).

*Validation summary:* A quality metadata section indicating the completeness of the underlying data (e.g., "95% of facilities reported for this period"), any known data quality issues, and the validation rules applied before export.

The ADX Export Mediator in OpenHIM performs the following transformations:

1. Extracts the relevant DHIS2 data elements and indicators for the target reporting set.
2. Applies the national-to-international indicator mapping (DHIS2 data element IDs → WHO/RHO indicator codes).
3. Applies any required aggregation transformations (e.g., summing regional data to national totals, calculating rates from numerator/denominator data elements).
4. Disaggregates data as required by the target indicator definition (some WHO indicators require age/sex disaggregation that may differ from DHIS2's internal disaggregation structure).
5. Generates the ADX document in XML or JSON format.
6. Attaches quality metadata (reporting completeness, validation summary).

**Message Exchange Pattern.** Batch, asynchronous. ADX data sets are generated and submitted on a scheduled basis. The flow is not interactive — there is no real-time query from WHO or RHO. The national DHIS2 instance pushes data to the international platforms via OpenHIM.

For WHO Global DHIS2, data is submitted using the DHIS2 ADX Import API — the same protocol used for DHIS2-to-DHIS2 data exchange, which is natively supported by both the national and global DHIS2 instances.

For RHO, data is submitted using RHO's data submission API (ADX-formatted payload over HTTPS). If RHO's platform does not yet support ADX natively, the ADX Export Mediator can generate the data in RHO's current format (typically Excel templates) as a transitional measure, with ADX adoption planned as RHO modernises its data platform.

For PBoS, data is exported in the format required by the statistical office — typically structured CSV or Excel files with predefined templates. This is a simpler technical flow but is routed through OpenHIM for audit logging and versioning.

**Sequence of Steps**

```
DHIS2 Data     DHIS2          ADX Export       OpenHIM        WHO DHIS2    RHO         PBoS
Manager        (National)     Mediator                        (Global)     Platform
   │               │              │               │              │           │            │
   │ 1. Trigger    │              │               │              │           │            │
   │    export     │              │               │              │           │            │
   │    (scheduled │              │               │              │           │            │
   │     or manual)│              │               │              │           │            │
   │──────────────▶│              │               │              │           │            │
   │               │ 2. Extract   │               │              │           │            │
   │               │    data for  │               │              │           │            │
   │               │    period    │               │              │           │            │
   │               │─────────────▶│               │              │           │            │
   │               │              │ 3. Apply      │              │           │            │
   │               │              │    indicator  │              │           │            │
   │               │              │    mapping    │              │           │            │
   │               │              │              │              │           │            │
   │               │              │ 4. Run        │              │           │            │
   │               │              │    validation │              │           │            │
   │               │              │    rules      │              │           │            │
   │               │              │               │              │           │            │
   │               │              │ 5. Generate   │              │           │            │
   │               │              │    ADX        │              │           │            │
   │               │              │    datasets   │              │           │            │
   │               │              │    (WHO,      │              │           │            │
   │               │              │     RHO,      │              │           │            │
   │               │              │     PBoS)     │              │           │            │
   │               │              │               │              │           │            │
   │               │              │ 6. Submit     │              │           │            │
   │               │              │    to OpenHIM │              │           │            │
   │               │              │──────────────▶│              │           │            │
   │               │              │               │ 7. Log &     │           │            │
   │               │              │               │    authenticate           │            │
   │               │              │               │              │           │            │
   │               │              │               │ 8a. POST ADX │           │            │
   │               │              │               │     to WHO   │           │            │
   │               │              │               │─────────────▶│           │            │
   │               │              │               │              │ 9a. Import│            │
   │               │              │               │              │     &     │            │
   │               │              │               │              │  validate │            │
   │               │              │               │ 10a. Confirm │           │            │
   │               │              │               │◀─────────────│           │            │
   │               │              │               │              │           │            │
   │               │              │               │ 8b. POST ADX │           │            │
   │               │              │               │     to RHO   │           │            │
   │               │              │               │─────────────────────────▶│            │
   │               │              │               │              │  9b. Import            │
   │               │              │               │              │     &     │            │
   │               │              │               │              │  validate │            │
   │               │              │               │ 10b. Confirm │           │            │
   │               │              │               │◀─────────────────────────│            │
   │               │              │               │              │           │            │
   │               │              │               │ 8c. Export   │           │            │
   │               │              │               │     to PBoS  │           │            │
   │               │              │               │     (CSV/    │           │            │
   │               │              │               │      Excel)  │           │            │
   │               │              │               │──────────────────────────────────────▶│
   │               │              │               │              │           │   9c. Store│
   │               │              │               │              │           │            │
   │               │              │               │ 11. Log all  │           │            │
   │               │              │               │     outcomes │           │            │
   │               │              │               │              │           │            │
   │ 12. Export    │              │               │              │           │            │
   │     status    │              │               │              │           │            │
   │     report    │              │               │              │           │            │
   │◀──────────────│──────────────│◀──────────────│              │           │            │
```

**Step-by-Step Description**

1. **Export triggered.** The export is triggered either by the scheduled job (cron-based, aligned with the reporting calendar) or manually by the DHIS2 Data Manager when the data for a reporting period has been validated and approved for release. Manual triggering provides a human-in-the-loop quality gate — data is not automatically released to international platforms without explicit approval.

2. **DHIS2 extracts data.** The ADX Export Mediator queries the national DHIS2 instance for the relevant data elements and indicators covering the reporting period. The query uses the DHIS2 Web API (analytics endpoint) to retrieve pre-calculated indicator values with the required disaggregations.

3. **Indicator mapping applied.** The mediator applies the national-to-international indicator mapping — translating DHIS2 data element IDs and indicator IDs to WHO/RHO indicator codes. The mapping is maintained as a configuration file in the mediator, versioned and updated when indicator definitions change (which typically occurs annually when WHO updates reporting requirements).

4. **Validation rules executed.** Before generating the ADX dataset, the mediator applies a set of pre-submission validation rules: internal consistency checks (numerators ≤ denominators, sum of disaggregated values = total, year-on-year plausibility checks for >50% changes), completeness checks (all required indicators have values; indicators flagged if based on <80% facility reporting completeness), and cross-indicator consistency (e.g., DPT3 ≤ DPT1, institutional deliveries ≤ total expected deliveries).

5. **ADX datasets generated.** Separate ADX datasets are generated for each target: WHO Global DHIS2 (WHO core indicators), RHO regional platform (REC health indicators), and PBoS (national health statistics in the required format). Each dataset includes quality metadata.

6. **ADX datasets submitted to OpenHIM.** The generated datasets are submitted to OpenHIM for routing, logging, and delivery to each target.

7. **OpenHIM logs and authenticates.** OpenHIM logs the export transaction (source: national DHIS2, destination: WHO/RHO/PBoS, dataset size, indicator count, reporting period) and authenticates with each target platform using the configured credentials.

8a–8c. **OpenHIM delivers to each target.** The ADX datasets are delivered to each target using the appropriate protocol: DHIS2 ADX Import API for WHO Global DHIS2, RHO's data submission API for RHO, and secure file transfer (SFTP or HTTPS file upload) for PBoS.

9a–9c. **Targets import and validate.** Each receiving platform processes the imported data, running its own validation rules. Import success or failure status is returned.

10a–10b. **Confirmations returned.** WHO and RHO return import confirmation (or error details) to OpenHIM.

11. **OpenHIM logs all outcomes.** The outcome of each delivery (success, partial success with warnings, failure with error details) is logged in the OpenHIM audit repository.

12. **Export status report generated.** A summary report is produced for the DHIS2 Data Manager showing: which datasets were submitted, which targets accepted/rejected the data, any validation warnings raised by the targets, and any indicators that could not be mapped or were excluded due to data quality concerns. This report enables the DHIS2 Data Manager and the Directorate of Planning and Information to address any issues before the next reporting cycle.

**WHO and RHO: Separate Handling**

While both WHO and RHO receive aggregate health statistics from Progressa, they have distinct indicator sets, reporting frequencies, and platform requirements:

| Aspect | WHO Global DHIS2 | RHO Regional Platform |
|--------|------------------|------------------------|
| **Indicator set** | WHO 100 Core Health Indicators (subset applicable to Progressa), plus disease-specific indicators (HIV, TB, malaria, immunisation) | REC regional health indicators, aligned with RHO Health Convergence Criteria |
| **Reporting frequency** | Annually for core indicators; quarterly for disease-specific programmes | Monthly for surveillance; annually for comprehensive statistics |
| **Data granularity** | National totals with standard disaggregations (age, sex) | National totals; regional breakdown may be requested for cross-border surveillance |
| **Platform** | DHIS2 Global Instance (ADX native support) | RHO data platform (ADX support varies; transitional formats may be needed) |
| **Authentication** | OAuth 2.0 / API key via WHO data exchange credentials | RHO member state credentials |
| **Quality requirements** | WHO Data Quality Assurance (DQA) tool compliance | RHO health data completeness standards (≥80% facility reporting) |
| **Feedback mechanism** | WHO Global Health Observatory publishes validated data; discrepancies flagged back to country | RHO peer review at annual health ministers' meeting |

The ADX Export Mediator maintains separate mapping configurations for WHO and RHO, reflecting these differences. Updates to indicator definitions from either organisation are incorporated into the mapping configuration during an annual review cycle (or more frequently for urgent changes, such as new indicators introduced during epidemic responses).

**Quality Assurance: Pre-Submission Validation**

Before any dataset is submitted to an international platform, the following quality checks must pass:

1. **Completeness threshold.** The dataset must be based on ≥80% facility reporting completeness for the reporting period. If completeness falls below 80%, the dataset is flagged with a quality warning and the DHIS2 Data Manager decides whether to submit with a caveat or delay submission until completeness improves.

2. **Internal consistency.** All validation rules defined for the indicator set must pass. Failures are categorised as "blocking" (submission halted until resolved — e.g., numerator exceeds denominator) or "warning" (submission proceeds with quality flag — e.g., >30% change from previous period, plausible but worth verification).

3. **Temporal plausibility.** Year-on-year and quarter-on-quarter comparisons are performed for all indicators. Extreme variations (>50% change) trigger a manual review by the DHIS2 Data Manager before submission.

4. **Cross-indicator consistency.** Related indicators are checked against each other (e.g., DPT3 ≤ DPT1; measles 2nd dose ≤ measles 1st dose; postnatal care ≤ institutional deliveries).

5. **Reconciliation with previous submissions.** The dataset is compared against the previous submission to the same target. If significant revisions to historical data are detected (e.g., a correction to last quarter's data), the revision is flagged and the target is notified per the data revision policy.

**Error Handling**

| Error Scenario | Detection | Response | Retry Logic |
|----------------|-----------|----------|-------------|
| **DHIS2 data extraction fails** | ADX Export Mediator receives error from DHIS2 API (step 2) | Export aborted. DHIS2 Data Manager notified. Likely cause: DHIS2 server unavailable or API query timeout (large dataset). | Retry after DHIS2 recovery. If persistent, reduce dataset scope (fewer indicators) and retry in batches. |
| **Indicator mapping failure** | ADX Export Mediator cannot map a DHIS2 indicator to the target indicator set (step 3) | Unmapped indicator excluded from the ADX dataset and logged as "unmapped." Export proceeds with remaining indicators. DHIS2 Data Manager and Integration Data Steward notified to update the mapping. | No retry — mapping updated and indicator included in next export cycle. |
| **Validation rule failure (blocking)** | Pre-submission validation detects a blocking error (step 4) — e.g., numerator exceeds denominator | Export halted for the affected indicator(s). DHIS2 Data Manager reviews and corrects the source data in DHIS2 before re-triggering the export. | Manual re-trigger after data correction. |
| **WHO Global DHIS2 unavailable** | OpenHIM receives timeout or HTTP 5xx from WHO endpoint (step 8a) | ADX dataset queued in OpenHIM for retry. Other targets (RHO, PBoS) are submitted independently — failure at one target does not block the others. | Exponential backoff: 1 hour, 4 hours, 12 hours, then daily for 7 days. If still failing, DHIS2 Data Manager contacts WHO country office for support. |
| **RHO import rejected** | RHO platform returns validation error (step 9b) — e.g., indicator code not recognised, format mismatch | Error details logged. ADX Export Mediator configuration reviewed for mapping issues. If RHO recently updated indicator definitions, mapping configuration is updated. | Manual re-export after mapping correction. |
| **PBoS file delivery fails** | SFTP/HTTPS upload fails | File queued for retry. PBoS contacted if repeated failure (possible credential expiry or platform maintenance). | Retry hourly for 24 hours. If persistent, file delivered via alternative channel (encrypted email as fallback). |
| **Data revision required** | After submission, a data correction is identified in DHIS2 that affects previously submitted data | ADX Export Mediator generates a revision dataset containing only the corrected indicators, with a revision flag. The revision is submitted to the affected target(s) with a data revision note. | Immediate resubmission of corrected data per the revision protocol. |

**Maturity Phase Mapping**

| Phase | Flow Variant | Notes |
|-------|-------------|-------|
| **Phase 1 (2026)** | Manual international reporting continues. ADX Export Mediator development begins. National-to-WHO indicator mapping drafted. DHIS2→PBoS export automated (CSV/Excel via OpenHIM for audit trail). | Focus on establishing indicator mapping and building the export infrastructure. International reporting remains manual through WHO web portals and RHO templates. |
| **Phase 2 (2027)** | Semi-automated: ADX Export Mediator operational for WHO Global DHIS2. Quarterly immunisation and disease surveillance data submitted via ADX. RHO submission piloted (ADX or transitional format). PBoS export fully automated. | Human-in-the-loop approval before each submission. Validation rules cover core indicator set. |
| **Phase 3 (2028–2029)** | Fully automated: All routine international reporting (WHO, RHO, PBoS) through ADX via OpenHIM. Monthly surveillance exports to RHO. Annual comprehensive export to WHO. Indicator mapping covers all required indicators. Pre-submission validation fully operational. | Minimal manual intervention — DHIS2 Data Manager approves submission; ADX Export Mediator handles the rest. |
| **Phase 4 (2030+)** | Expanded: Cross-border health data exchange with REC partner countries (bilateral ADX exchange for cross-border disease surveillance). DHIS2 analytics dashboards include international comparison data received from WHO/RHO. Real-time surveillance data exchange for outbreak response. | Regional interoperability — not just reporting to global/regional platforms but peer-to-peer data exchange for cross-border health security. |

---

---


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


---

## 6.4 API Management and Governance

The integration flows specified in Section 6.2 depend on well-designed, well-documented, and consistently managed APIs. Without formal API management, the HIE risks becoming a black box of undocumented interfaces — replicating at the API level the same fragmentation that characterises the current point-to-point system landscape. This section defines the standards, lifecycle, security model, and operational practices for managing APIs within Progressa's health information ecosystem.

### 6.4.1 API Design Standards

All APIs published through the HIE conform to RESTful design conventions, ensuring consistency, predictability, and ease of implementation for the limited health informatics workforce available in Progressa.

**URI Structure.** API endpoints follow a standardised URI pattern:

```
https://hie.moh.gov.progressa.example/fhir/{version}/{ResourceType}/{id}
```

- Base URL: `https://hie.moh.gov.progressa.example/fhir` — all HIE APIs are served from a single domain, with OpenHIM routing requests to the appropriate backend system.
- Version prefix: `/v1/`, `/v2/` — URL-based versioning (not header-based), providing unambiguous version selection and simplifying debugging, logging, and client implementation.
- Resource type: FHIR resource names in PascalCase (e.g., `/v1/Patient`, `/v1/Immunization`, `/v1/DiagnosticReport`).
- Resource ID: Server-assigned logical identifier for individual resource retrieval (e.g., `/v1/Patient/mpi-12345`).

For non-FHIR transitional APIs (Phase 1–2, see Section 6.3.4), the URI pattern adapts:

```
https://hie.moh.gov.progressa.example/api/{version}/{domain}/{resource}
```

Where `{domain}` identifies the source system context (e.g., `/api/v1/ecrvs/births`, `/api/v1/enhis/eligibility`). Transitional APIs are documented with a sunset date and a migration path to the equivalent FHIR endpoint.

**HTTP Methods and Semantics.** APIs use standard HTTP methods with consistent semantics:

| Method | Semantics | Idempotent | Use Case |
|--------|-----------|------------|----------|
| GET | Read a resource or search for resources | Yes | MPI patient lookup, eligibility query, facility registry search |
| POST | Create a new resource or execute an operation | No (but transaction IDs enforce idempotency per IP-04) | Birth notification, lab result submission, claims submission |
| PUT | Update an existing resource (full replacement) | Yes | Update patient demographics in MPI, update facility attributes |
| PATCH | Partial update of an existing resource | No | Update specific fields (e.g., insurance status change) |
| DELETE | Logical delete (soft delete; physical deletion prohibited for health records) | Yes | Mark a record as inactive; never used for clinical data |

**Pagination.** Search results that may return large datasets use cursor-based pagination with `_count` (page size, default 20, maximum 100) and `_offset` or link-based navigation (`Bundle.link` with `next` and `previous` URLs). Pagination parameters and total result counts are included in the response Bundle.

**Error Response Format.** All API errors return standard HTTP status codes accompanied by a FHIR OperationOutcome resource in the response body, providing machine-readable error classification and human-readable diagnostic messages:

| HTTP Status | Meaning | OperationOutcome.issue.severity | Example |
|-------------|---------|--------------------------------|---------|
| 400 | Bad Request | error | Missing required field: Patient.identifier |
| 401 | Unauthorized | fatal | Invalid or expired authentication token |
| 403 | Forbidden | fatal | Client not authorised for this resource type |
| 404 | Not Found | warning | Patient with MPI ID mpi-99999 not found |
| 409 | Conflict | error | Duplicate transaction ID detected (idempotency check) |
| 422 | Unprocessable Entity | error | FHIR validation failed: Observation.code must be a valid LOINC code |
| 429 | Too Many Requests | warning | Rate limit exceeded; retry after {n} seconds |
| 500 | Internal Server Error | fatal | Unexpected server error; transaction logged for investigation |
| 502 | Bad Gateway | fatal | Downstream system (e.g., e-NHIS) unavailable |
| 503 | Service Unavailable | fatal | HIE under maintenance; retry after {timestamp} |

Error responses include a unique error reference ID (correlation ID) that maps to the OpenHIM transaction log, enabling rapid diagnosis when issues are reported by client systems.

### 6.4.2 API Lifecycle Management

Each API published through the HIE follows a defined lifecycle, ensuring that APIs are designed, tested, and operated with consistent quality and that changes are managed without disrupting consuming systems.

**Stage 1 — Design.** The API specification is drafted as an OpenAPI 3.0 (Swagger) document by the DHDD Integration Developer, in collaboration with the source system team and the Architecture and Interoperability TWG. The specification defines the endpoint URI, request/response schemas (FHIR resource profiles or JSON schemas for transitional APIs), authentication requirements, rate limits, and expected error codes. For FHIR APIs, the specification is supplemented by a FHIR CapabilityStatement resource that declares the supported resources, operations, and search parameters.

**Stage 2 — Develop.** The OpenHIM mediator implementing the API is developed — either as a FHIR Façade (for legacy systems) or as a routing configuration (for FHIR-native systems). The mediator code, configuration, and mapping rules are maintained in a version-controlled repository (Git) managed by the DHDD.

**Stage 3 — Test.** The API is tested in the sandbox HIE environment (Section 6.5.5) using synthetic data. Testing covers functional correctness (does the API return the expected FHIR resources for valid requests?), error handling (does the API return appropriate OperationOutcome responses for invalid requests?), performance (does the API meet the response time thresholds defined in the SLA framework — Section 6.5.6?), security (are authentication and authorisation enforced correctly?), and conformance (does the API pass the FHIR conformance test suite for the declared profiles?).

**Stage 4 — Publish.** The API is registered in the API catalogue (Section 6.4.6), the OpenAPI specification is published, and the API is activated on the production OpenHIM instance. Consuming systems are notified of the new API's availability and provided with onboarding documentation.

**Stage 5 — Monitor.** Once live, the API is continuously monitored for availability, response time, error rates, and transaction volumes (Section 6.4.5). Performance data feeds the integration monitoring dashboard reviewed by the DHDD and reported to the Architecture and Interoperability TWG.

**Stage 6 — Deprecate.** When a new version of the API is published or the API is no longer needed, it enters deprecation. Deprecated APIs remain operational for a minimum of six months (the deprecation notice period defined in Section 6.5.4), during which consuming systems migrate to the replacement. Deprecation is announced through the API catalogue, direct notification to all registered consumers, and a `Sunset` HTTP header in API responses indicating the retirement date.

**Stage 7 — Retire.** After the deprecation period, the API is deactivated. Requests to a retired API return HTTP 410 (Gone) with an OperationOutcome directing the consumer to the replacement endpoint. Retired API specifications are archived in the API catalogue for reference.

### 6.4.3 API Security Model

Health data is among the most sensitive categories of personal information. The API security model implements defence in depth, with controls at the transport, authentication, authorisation, and audit layers.

**Transport Security — Mutual TLS (mTLS).** All communication between systems and the HIE uses TLS 1.2 or higher. For system-to-system API calls carrying patient-level clinical data (Confidential or Restricted classification per Section 4.5.1), mutual TLS is mandatory — both the client and the server present X.509 certificates, providing bidirectional authentication at the transport layer. Client certificates are issued by the DHDD and registered in OpenHIM's client certificate store. Certificate lifecycle management (issuance, renewal, revocation) is the responsibility of the Health Information Security Officer (Section 4.1.2).

For lower-sensitivity APIs (Public or Internal classification — e.g., facility registry queries, terminology lookups), standard TLS (server-side certificate only) is sufficient, with authentication handled at the application layer.

**Authentication — OAuth 2.0 and API Keys.** Two authentication mechanisms are supported, selected based on the interaction pattern:

*OAuth 2.0 (Client Credentials Grant):* Used for APIs where the calling system acts on behalf of a specific user context (e.g., a clinician querying insurance eligibility for a patient in OpenMRS). The client system obtains an access token from the OAuth 2.0 authorisation server (hosted within the HIE infrastructure) using its registered client ID and client secret. The access token is included in the `Authorization: Bearer {token}` header of each API request. Token validity is limited to 1 hour; tokens are refreshed using the refresh token mechanism. Token revocation is supported for immediate access termination when a client system is compromised or decommissioned.

*API Keys + IP Whitelisting:* Used for system-to-system integrations where there is no user context (e.g., batch data transfers from eCRVS to MPI, scheduled ADX exports to WHO). The client system includes an API key in the `X-API-Key` header. API keys are long-lived (rotated annually) but are restricted by IP whitelist — requests are accepted only from pre-registered IP addresses of the source system's servers. This mechanism is simpler to implement for batch and server-to-server patterns where OAuth token management adds unnecessary complexity.

**Authorisation — Scope-Based Access Control.** Access tokens and API keys are associated with defined scopes that restrict which FHIR resource types and operations the client is authorised to perform. Scopes follow the SMART on FHIR convention:

- `system/Patient.read` — read Patient resources (system-level, no user context)
- `system/Immunization.write` — create/update Immunization resources
- `user/CoverageEligibilityRequest.write` — submit eligibility queries in a user context
- `system/*.read` — read all resource types (restricted to analytics and reporting systems)

Scope assignments are configured per client in OpenHIM and reviewed by the Health Information Security Officer during the connection onboarding process (Section 6.5.3). The principle of least privilege applies: each client receives only the scopes necessary for its designated integration flows.

**Token Policy.**

| Parameter | Value | Rationale |
|-----------|-------|-----------|
| Access token validity | 1 hour | Balances security (limits window of token theft) with usability (avoids constant re-authentication) |
| Refresh token validity | 24 hours | Enables background system operations without daily credential re-entry |
| API key rotation | Annually, or immediately upon compromise | Long-lived keys are acceptable for server-to-server with IP whitelisting |
| Failed authentication lockout | 5 consecutive failures → 15-minute lockout, then escalating | Prevents brute-force attacks; alerts Security Officer after 3 lockouts in 24 hours |
| Token revocation | Immediate effect; revocation list checked on every request | Enables rapid response to security incidents |

**Audit.** Every API call through OpenHIM is logged with: timestamp, source system, client identifier, requested resource type, HTTP method, patient MPI identifier (where applicable), response status code, response time, and payload size. Audit logs are retained for seven years (IP-06) and are accessible to the Health Information Security Officer and the DHDD Integration Data Steward. Audit log analysis supports both security monitoring (detecting anomalous access patterns) and performance management (identifying slow or failing integrations).

### 6.4.4 Rate Limiting

Rate limiting protects the HIE infrastructure from overload and ensures fair resource allocation across connected systems. Rate limits are applied per client and enforced at the OpenHIM gateway level.

**Per-Client Quotas.** Each connected system is assigned a rate limit profile based on its expected transaction volume and the criticality of its integration flows:

| Client Category | Requests per Minute | Requests per Hour | Burst Allowance | Example Systems |
|----------------|--------------------:|------------------:|----------------:|-----------------|
| High-volume real-time | 120 | 5,000 | 200 (10-second window) | OpenMRS (eligibility queries), DHIS2 Tracker (MPI lookups) |
| Standard real-time | 60 | 2,000 | 100 (10-second window) | e-NHIS (claims processing), A-LIS (lab results) |
| Batch / scheduled | 30 | 1,000 | 50 (10-second window) | eCRVS (batch exports), ADX Export Mediator, PBoS exports |
| Administrative / monitoring | 10 | 300 | 20 (10-second window) | API catalogue queries, health checks, monitoring dashboards |

**Burst Handling.** Short bursts exceeding the per-minute rate are accommodated within the burst allowance (a token bucket algorithm). Once the burst allowance is exhausted, additional requests receive HTTP 429 (Too Many Requests) with a `Retry-After` header indicating the number of seconds before the client should retry.

**Backpressure Signalling.** When the HIE approaches capacity limits (e.g., a downstream system is slow, causing request queuing), OpenHIM signals backpressure to clients through HTTP 429 responses with progressively increasing `Retry-After` values. This prevents cascading failures where aggressive retry behaviour from one client overwhelms the system for all clients.

Rate limit profiles are reviewed quarterly by the DHDD and adjusted based on observed traffic patterns. Clients experiencing legitimate rate limit issues can request a temporary increase through the Architecture and Interoperability TWG, with justification documented.

### 6.4.5 Monitoring and Logging

Integration monitoring provides the operational visibility necessary to detect and resolve issues before they affect health service delivery.

**API Call Logging.** Every transaction through OpenHIM is logged with the audit attributes defined in Section 6.4.3. Logs are stored in the OpenHIM transaction log database and are searchable by time range, source system, destination system, response status, and patient MPI identifier (for authorised users only — access to patient-linked logs requires Health Information Security Officer authorisation).

**Performance Dashboards.** The DHDD maintains an integration monitoring dashboard (built on OpenHIM's native monitoring capabilities, supplemented with Grafana or equivalent for advanced visualisation) displaying:

- Real-time transaction volumes by integration flow (e.g., birth notifications per hour, eligibility queries per minute, lab results per day).
- Response time distributions (median, 95th percentile, 99th percentile) by API endpoint.
- Error rates by source system, destination system, and error type (4xx client errors, 5xx server errors, timeouts).
- Queue depths for asynchronous transactions (pending delivery to downstream systems).
- System availability status for all HIE-connected systems (heartbeat monitoring).

**Alerting Thresholds.** Automated alerts are configured to notify the DHDD Integration Data Steward and the Health Information Security Officer when operational parameters breach defined thresholds:

| Metric | Warning Threshold | Critical Threshold | Alert Recipient |
|--------|------------------:|-------------------:|-----------------|
| API response time (95th percentile) | >3 seconds | >10 seconds | Integration Data Steward |
| Error rate (per integration flow) | >5% of transactions | >15% of transactions | Integration Data Steward + data owner |
| Queue depth (pending async transactions) | >500 pending | >2,000 pending | Integration Data Steward |
| System availability (heartbeat) | 1 missed heartbeat (5-min interval) | 3 consecutive missed heartbeats | Integration Data Steward + source system admin |
| Authentication failures | >10 failures per hour per client | >50 failures per hour per client | Health Information Security Officer |
| Rate limit breaches | >20 HTTP 429 responses per hour per client | >100 HTTP 429 responses per hour per client | Integration Data Steward + client system admin |

Alerts are delivered via email and SMS to the designated recipients. Critical alerts trigger an incident in the integration incident management process (Section 6.5.7).

### 6.4.6 API Catalogue and Registry

All APIs published through the HIE are documented in a centrally maintained API catalogue. The catalogue serves as the authoritative reference for system developers connecting to the HIE, the Architecture and Interoperability TWG when reviewing integration proposals, and the DHDD for lifecycle management.

**Catalogue Contents.** For each published API, the catalogue records:

- API name and description (business purpose and the integration flow it supports).
- Version number and status (active, deprecated, retired).
- OpenAPI 3.0 specification (Swagger document) — downloadable and viewable in a Swagger UI instance hosted by the DHDD.
- FHIR CapabilityStatement (for FHIR APIs) — declaring supported resources, operations, and search parameters.
- Authentication requirements (mTLS, OAuth 2.0, API key).
- Rate limit profile assigned.
- SLA targets (availability, response time).
- Source system and destination system(s).
- Data classification level (per Section 4.5.1) and any specific access restrictions.
- Contact: responsible team within the DHDD for support and issue escalation.
- Sunset date (for deprecated APIs).
- Change log: history of version changes with dates and descriptions.

**Catalogue Implementation.** In Phase 1–2, the API catalogue is maintained as a structured documentation repository (Markdown files in the DHDD's version-controlled documentation) with the OpenAPI specifications served through a lightweight Swagger UI instance. As the number of APIs grows in Phase 3–4, the catalogue may be upgraded to a dedicated API management platform (e.g., WSO2 API Manager, Kong, or Gravitee) if the operational complexity warrants it. The decision to invest in a dedicated API management platform is deferred to Phase 3, evaluated by the Architecture and Interoperability TWG based on the actual API portfolio size and operational needs.

---


---

## 6.5 Integration Governance Model

Operational governance ensures that the integration architecture is not merely specified on paper but is implemented consistently, maintained reliably, and evolved deliberately. This section defines the governance mechanisms that control how systems connect to the HIE, how changes are managed, how quality is assured, and how incidents are resolved.

### 6.5.1 Standards Approval Process

No integration specification, FHIR resource profile, API design, or mediator configuration is deployed to the production HIE without review and approval by the Architecture and Interoperability TWG.

**Approval Workflow:**

1. **Proposal.** The requesting team (DHDD Integration Developer, system vendor, or implementing partner) submits an integration specification to the TWG. The specification must include: the business requirement (which integration flow from Section 6.2 or new flow is being addressed), the technical design (FHIR resource profiles, API endpoint specifications, mediator logic), a security assessment (data classification, authentication mechanism, scope requirements), and a test plan.

2. **TWG Review.** The Architecture and Interoperability TWG reviews the specification against: compliance with the integration design principles (IP-01 through IP-08), conformance with the Progressa MoH FHIR profiles and terminology standards, alignment with the integration maturity progression model (does the proposal fit the current phase?), security adequacy (appropriate authentication, data classification handled correctly), and operational feasibility (can the DHDD support this in production?).

3. **Decision.** The TWG issues one of three decisions: approved (proceed to development and testing), approved with conditions (proceed after specific modifications are made), or deferred (proposal requires further analysis, additional resources, or is premature for the current phase). Decisions are recorded in the TWG minutes and the integration specification repository.

4. **NDHSC Endorsement.** For integration flows that involve cross-directorate or cross-agency data sharing (e.g., eCRVS→MPI→e-NHIS, MoH→WHO international reporting), the TWG's approval is forwarded to the NDHSC for strategic endorsement. The NDHSC confirms that the data sharing is consistent with the MoH Health Data Protection Policy (Section 4.1.4) and that any inter-agency agreements are in place.

The TWG meets monthly, with a standing agenda item for integration specification reviews. Urgent specifications (e.g., a new surveillance integration during an outbreak response) can be approved through an expedited email-based review with a 48-hour turnaround, ratified at the next scheduled TWG meeting.

### 6.5.2 Integration Certification Requirements

Before any system connects to the production HIE, it must demonstrate compliance with the integration standards through a formal certification process. Certification ensures that the connecting system will not introduce data quality issues, security vulnerabilities, or interoperability failures into the ecosystem.

**Certification Criteria:**

| Criterion | Requirement | Verification Method |
|-----------|-------------|-------------------|
| **FHIR Conformance** | The system (or its FHIR Façade) produces and consumes FHIR resources that conform to the Progressa MoH FHIR profiles declared in its CapabilityStatement. | Automated FHIR validation using the HAPI FHIR Validator against the published profiles. All mandatory elements present, data types correct, terminology bindings valid. |
| **Authentication** | The system supports the required authentication mechanism (mTLS, OAuth 2.0, or API key) and can handle token refresh, revocation, and expiry gracefully. | Authentication handshake tested in the sandbox environment. Token expiry and refresh cycle validated. |
| **Error Handling** | The system handles API errors correctly — retries on transient failures (5xx, timeout), does not retry on client errors (4xx), respects `Retry-After` headers, and logs errors for investigation. | Simulated error scenarios in the sandbox: forced timeouts, 429 responses, 500 errors. Client behaviour observed and validated. |
| **Idempotency** | The system generates unique transaction IDs for every request and handles duplicate responses (HTTP 409) without creating duplicate records. | Duplicate submission test: the same transaction is submitted twice; the system must detect the duplicate and not create a second record. |
| **Data Quality** | The system populates all required data elements as defined in the integration flow specification, using the correct coding systems (ICD-11, LOINC, facility codes from the registry). | Sample data review: 50 test transactions validated for completeness, coding accuracy, and conformance to the flow specification. |
| **Performance** | The system meets the response time requirements for its integration flows (e.g., <2 seconds for synchronous queries, within batch processing windows for asynchronous flows). | Load testing in the sandbox environment simulating expected transaction volumes. Response times measured at the 95th percentile. |
| **Offline Resilience** | For systems operating in facilities with unreliable connectivity, the system demonstrates store-and-forward capability, idempotent sync on reconnection, and no data loss during connectivity interruptions. | Connectivity interruption simulation: system operates offline for a defined period, then reconnects and successfully syncs all queued transactions without duplicates or data loss. |

**Certification Process:**

1. The system team submits a certification request to the DHDD Integration Data Steward, accompanied by the system's FHIR CapabilityStatement and test results from the system's own testing environment.
2. The DHDD schedules certification testing in the sandbox HIE environment (Section 6.5.5).
3. The DHDD Integration Developer executes the certification test suite, documenting results for each criterion.
4. If all criteria are met, the DHDD issues an integration certificate valid for 12 months. If criteria are not met, the system team receives a detailed report of failures and must remediate before re-testing.
5. Certification is renewed annually through a streamlined re-certification process (automated conformance testing plus review of any system changes since the last certification).

### 6.5.3 Connection Onboarding Process

Once a system is certified, connecting it to the production HIE follows a structured onboarding process that ensures proper configuration, security, and operational readiness.

**Onboarding Steps:**

1. **Request.** The data owner for the connecting system submits a connection request to the DHDD, specifying the integration flows to be activated, the data classification level, and the nominated technical contact.

2. **Specification Review.** The DHDD Integration Data Steward reviews the connection request against the approved integration specifications (Section 6.5.1) and the system's certification status (Section 6.5.2). Any gaps are identified and must be resolved before proceeding.

3. **Credential Provisioning.** The DHDD issues the connecting system's production credentials: client certificate for mTLS (issued by the HIE certificate authority), OAuth 2.0 client ID and secret (registered in the authorisation server), API key (if applicable), and the assigned scopes and rate limit profile.

4. **Sandbox Testing.** The connecting system executes its integration flows in the sandbox HIE environment using synthetic data, confirming that the end-to-end data flow works correctly with production-equivalent configurations.

5. **Production Deployment.** After successful sandbox testing, the connecting system's OpenHIM channel is activated on the production instance. Initial deployment uses a "soft launch" period (2 weeks) during which transaction volumes are monitored closely and the DHDD Integration Data Steward reviews a sample of transactions for data quality.

6. **Operational Handover.** The connection is formally handed over to the DHDD's monitoring and operations team. The system is added to the monitoring dashboard, alerting rules are configured, and the system's technical contact is registered for incident escalation.

### 6.5.4 Change Management

Changes to integration specifications, API versions, FHIR profiles, and mediator configurations are managed through a disciplined change process that prioritises backward compatibility and minimises disruption to connected systems.

**Semantic Versioning.** All APIs and FHIR profiles use semantic versioning (MAJOR.MINOR.PATCH):

- **MAJOR** version increment (e.g., v1 → v2): Breaking changes that require consuming systems to modify their implementation. Breaking changes include removing a required field, changing a resource structure, or altering authentication requirements. Major version changes trigger the full deprecation and migration cycle.
- **MINOR** version increment (e.g., v1.1 → v1.2): Non-breaking additions — new optional fields, new search parameters, additional supported operations. Consuming systems do not need to change but may benefit from new capabilities.
- **PATCH** version increment (e.g., v1.1.1 → v1.1.2): Bug fixes and documentation corrections. No functional changes to the API contract.

**Backward Compatibility Requirements.** Minor and patch changes must be backward compatible: existing consumers continue to function without modification. This is enforced through automated regression testing (Section 6.5.5) — every change to a production API triggers the full regression test suite against the current consumer test cases.

**Deprecation Policy.** When a major version change is required:

1. The new version is published alongside the existing version (both remain operational).
2. The existing version is marked as "deprecated" in the API catalogue, with a `Sunset` HTTP header in responses indicating the retirement date.
3. All registered consumers are notified directly (email to technical contacts) with a migration guide describing the changes and the steps required to upgrade.
4. A minimum six-month deprecation period is provided for standard changes. For urgent security-related changes, the NDHSC may authorise an accelerated deprecation period (minimum 30 days) with dedicated migration support from the DHDD.
5. During the deprecation period, both versions are monitored. The DHDD tracks consumer migration progress and proactively contacts consumers that have not migrated as the retirement date approaches.
6. At the end of the deprecation period, the deprecated version is retired per the API lifecycle (Section 6.4.2, Stage 7).

**Migration Windows.** Major API version migrations are scheduled during low-activity periods (weekends or public holidays) to minimise impact on health service delivery. The DHDD publishes a migration calendar at the start of each year, identifying planned migration windows.

### 6.5.5 Integration Testing Environment

A dedicated sandbox HIE environment replicates the production infrastructure and is used for all integration testing, certification, onboarding, and regression testing. The sandbox is not a luxury — it is a critical safeguard against deploying untested changes to the production HIE where failures could disrupt clinical data flows.

**Sandbox Architecture.** The sandbox mirrors the production HIE topology: OpenHIM instance, OpenCR (MPI) instance, HAPI FHIR (SHR) instance, and FHIR Façade mediators for each connected system. The sandbox operates on separate infrastructure (dedicated virtual machines or containers) with no connectivity to production databases.

**Synthetic Data.** The sandbox is populated with synthetic patient data — realistic but entirely fictional records generated using FHIR-compliant synthetic data tools (e.g., Synthea adapted for Progressa demographics). Synthetic data includes: 10,000 patient records with Progressa names, realistic age distributions, and representative clinical conditions; 5,000 immunisation records covering the national EPI schedule; 2,000 laboratory results including a subset of notifiable disease triggers; 1,000 insurance enrollment records with active and inactive coverage states. No real patient data is ever loaded into the sandbox.

**Regression Testing.** Every change to a production mediator, FHIR profile, or API configuration is tested in the sandbox before production deployment. The regression test suite includes:

- **Flow-level tests:** Each of the six priority integration flows (Section 6.2) has an end-to-end test case that exercises the complete flow from trigger to final delivery, verifying that all steps produce the expected outputs.
- **Consumer compatibility tests:** For each connected system, a set of representative API calls (the system's typical request patterns) are replayed against the sandbox to confirm that changes do not break existing consumers.
- **Error handling tests:** Simulated error conditions (system unavailability, invalid data, authentication failures) are injected to confirm that error handling and retry logic function correctly after the change.

The regression test suite is maintained by the DHDD Integration Developer and updated whenever a new integration flow or consumer is added. Test execution is automated where possible (scheduled test runs after each sandbox deployment) and supplemented by manual testing for complex orchestration scenarios.

### 6.5.6 Service Level Agreement (SLA) Framework

SLAs define the availability, performance, and support commitments for the HIE and its integration flows. SLA targets are reviewed annually by the Architecture and Interoperability TWG and approved by the NDHSC.

**Availability Targets:**

| Component | Availability Target | Measurement Window | Planned Maintenance Window |
|-----------|-------------------:|--------------------:|---------------------------|
| OpenHIM (HIE core) | 99.5% | Monthly | Sunday 02:00–06:00 (excluded from uptime calculation) |
| OpenCR (MPI) | 99.5% | Monthly | Aligned with OpenHIM maintenance window |
| HAPI FHIR (SHR) | 99.0% | Monthly | Aligned with OpenHIM maintenance window |
| FHIR Façade mediators | 99.0% | Monthly | Per-mediator; scheduled in coordination with source system maintenance |
| Sandbox environment | 95.0% | Monthly | Available on best-effort basis; may be unavailable during infrastructure updates |

99.5% monthly availability equates to a maximum of approximately 3.6 hours of unplanned downtime per month — a target that is demanding but achievable given the technology stack and infrastructure constraints in Progressa. The planned maintenance window (Sunday early morning) is selected to minimise impact on health service delivery.

**Response Time Thresholds:**

| Transaction Type | Target (95th Percentile) | Maximum Acceptable | Example |
|------------------|-------------------------:|-------------------:|---------|
| Synchronous query (real-time point-of-care) | <2 seconds | 5 seconds | MPI patient lookup, insurance eligibility check |
| Asynchronous submission (acknowledged) | <1 second (to HTTP 202) | 3 seconds | Birth notification, lab result submission, claims submission |
| Asynchronous processing (end-to-end orchestration) | <30 seconds | 2 minutes | Birth registration → MPI → e-NHIS enrollment complete |
| Batch processing | <5 minutes per batch | 30 minutes per batch | SPT→DHIS2 aggregate import, ADX international export |

**Incident Escalation:**

| Severity | Definition | Response Time | Resolution Target | Escalation Path |
|----------|-----------|:-------------:|:-----------------:|-----------------|
| Critical | HIE core (OpenHIM) unavailable; no transactions processing; patient care impacted | 15 minutes | 2 hours | Integration Data Steward → DHDD Director → NDHSC Chair (if >4 hours) |
| High | Single integration flow unavailable (e.g., eligibility verification down); workaround available (manual process) | 30 minutes | 4 hours | Integration Data Steward → DHDD Director |
| Medium | Degraded performance (response times above SLA) or elevated error rates; no data loss | 2 hours | 24 hours | Integration Data Steward |
| Low | Cosmetic issue, documentation update, non-urgent configuration change | Next business day | 5 business days | Integration Data Steward (standard queue) |

### 6.5.7 Integration Monitoring and Incident Management

Day-to-day integration monitoring and incident management is the operational responsibility of the DHDD, with escalation to the Architecture and Interoperability TWG and the NDHSC for systemic or strategic issues.

**Monitoring Responsibility.** The DHDD Integration Data Steward is the primary monitoring owner, responsible for reviewing the integration monitoring dashboard daily, responding to automated alerts, and initiating incident response when thresholds are breached. During non-business hours, the monitoring system sends SMS alerts to the on-call DHDD staff member (initially the Integration Data Steward or the HIE Manager, rotating weekly as the team grows).

**Alert Routing.** Alerts from the monitoring system (Section 6.4.5) are routed based on the alert type:

| Alert Type | Primary Recipient | Secondary Recipient | Escalation |
|-----------|-------------------|---------------------|------------|
| System availability (heartbeat failure) | Integration Data Steward | Source system administrator | DHDD Director (if >2 hours) |
| Performance degradation (response time) | Integration Data Steward | Source system administrator | Architecture and Interoperability TWG (if recurring) |
| Error rate spike | Integration Data Steward | Data owner for the affected flow | DHDD Director (if >15% error rate sustained >1 hour) |
| Security alert (authentication failures) | Health Information Security Officer | Integration Data Steward | DHDD Director + NDHSC (if breach confirmed) |
| Rate limit breaches | Integration Data Steward | Client system administrator | TWG (if persistent; may indicate need for rate limit adjustment) |

**Incident Lifecycle.** When a monitoring alert triggers an incident:

1. **Detection.** Automated alert received by the designated recipient.
2. **Triage.** The recipient assesses the severity (Critical, High, Medium, Low) and the scope (single system, single flow, or systemic).
3. **Investigation.** The Integration Data Steward examines the OpenHIM transaction logs, error details, and system availability status to identify the root cause. For issues in source or destination systems, the system administrator is engaged.
4. **Resolution.** The root cause is addressed — this may involve restarting a mediator, correcting a configuration, coordinating with a vendor for a system fix, or activating the manual fallback process for the affected integration flow.
5. **Communication.** Affected stakeholders (data owners, system administrators, and — for Critical incidents — the DHDD Director and NDHSC) are notified of the incident status and expected resolution time.
6. **Closure.** Once the issue is resolved and the affected integration flow is confirmed operational, the incident is closed with a documented root cause analysis.
7. **Post-Incident Review.** For Critical and High severity incidents, a post-incident review is conducted within 5 business days. The review identifies root causes, contributing factors, and preventive measures. Findings are reported to the Architecture and Interoperability TWG and, for Critical incidents, to the NDHSC.

**Escalation to TWG and NDHSC.** The Architecture and Interoperability TWG receives a monthly integration health report from the DHDD covering: transaction volumes and trends, SLA compliance, incident summary (count by severity, mean time to resolution), recurring issues and their root causes, and recommendations for architecture or process improvements. The NDHSC receives a quarterly integration health summary as part of the broader digital health progress review.

---


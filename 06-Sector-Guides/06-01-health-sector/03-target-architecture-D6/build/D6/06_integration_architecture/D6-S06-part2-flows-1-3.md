## 6.2 Priority Integration Flows

This section specifies the detailed integration flows that connect the application portfolio (Section 5) through the HIE (OpenHIM) using the standards defined in Section 6.3 and governed by the integration principles (IP-01 through IP-08) established in Section 6.1.4. Each flow is specified with sufficient detail for implementation: the actors involved, the triggering event, data exchanged, FHIR resources used, the message exchange pattern, the step-by-step mediation sequence through OpenHIM, error handling and retry logic, and the maturity phase in which the flow becomes operational.

The six priority integration flows are selected based on their alignment with the highest-value business capabilities (Section 3), the dependencies identified in the application architecture (Section 5), and the maturity progression model (Section 6.1.3). Flows 1–3 are specified in this section; Flows 4–6 are specified in Part 3.

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

*Flows 4–6 (Insurance Eligibility Verification at Point of Care, Clinical Referral with Patient Summary, and Supply Chain Demand Signal) are specified in Part 3.*

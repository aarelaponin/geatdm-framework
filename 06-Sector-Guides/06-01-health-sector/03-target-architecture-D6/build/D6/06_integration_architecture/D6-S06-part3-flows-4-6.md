## 6.2 Priority Integration Flows (continued)

This section specifies Flows 4–6 of the six priority integration flows, continuing from Part 2 (Flows 1–3). The same structured format is used: business context, actors, trigger event, pre-conditions, data exchanged, FHIR resources, message exchange pattern, sequence of steps, error handling, and maturity phase mapping.

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

*This concludes the specification of the six priority integration flows. Sections 6.4 (API Management and Governance) and 6.5 (Integration Governance Model) are specified in subsequent task outputs.*

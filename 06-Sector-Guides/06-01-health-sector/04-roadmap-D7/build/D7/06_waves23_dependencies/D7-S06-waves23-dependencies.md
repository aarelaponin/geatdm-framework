## Section 4.3: Wave 2 Plan (2027–2029) — "Exchange, Digitize, Scale"

*TOGAF ADM Phase F — Migration Planning (continued)*

Wave 2 builds upon the governance, shared platforms, and foundational registries established in Wave 1. Its strategic objective shifts from establishing prerequisites to deploying clinical and programme systems at scale, activating the full set of priority integration flows through the HIE, migrating to sovereign cloud infrastructure, and building the workforce required to sustain operations. Wave 2 is the highest-investment phase, aligned with the peak of RDIP infrastructure delivery (G-Cloud, broadband backbone, last-mile connectivity) and the transition between Global Fund NFM4 (ending 2027) and NFM5 (starting 2028).

Wave 2 comprises 10 initiatives, each building upon specific Wave 1 outputs and addressing gaps that could not be resolved until the foundational layer was operational.

---

### Wave 2 Initiative Summary

| ID | Initiative | Gaps Addressed | Duration | Indicative Cost (USD) |
|----|-----------|---------------|----------|-----------------------|
| W2-01 | HIE Expansion — Activate Priority Integration Flows | INT-02, INT-03, INT-04, INT-05, INT-06, APP-01 | 24 months | 280,000–480,000 |
| W2-02 | EHR Pilot and Scale (OpenMRS at 15–20 Facilities) | APP-02, INT-04, INT-05 | 30 months | 550,000–950,000 |
| W2-03 | e-NHIS Enhancement — Offline Claims, Mobile Enrollment, Scaling | APP-05, INT-05 | 24 months | 200,000–350,000 |
| W2-04 | DHIS2 Tracker EIR National Scale (SPT Transition) | APP-03, INT-02 | 24 months | 300,000–500,000 |
| W2-05 | Laboratory Information System Deployment | APP-06, INT-03 | 24 months | 250,000–450,000 |
| W2-06 | Electronic IDSR+ National Rollout | APP-04, INT-03 | 18 months | 150,000–280,000 |
| W2-07 | G-Cloud Migration — Sovereign Health Data Hosting | TEC-01, TEC-06, GEN-01, GEN-06 | 18 months | 180,000–300,000 |
| W2-08 | FHIR Adoption and Terminology Standards Maturation | DAT-02, DAT-03, INT-07, DAT-04 | 24 months | 120,000–220,000 |
| W2-09 | Digital Health Workforce Scale-Up | BUS-05, DAT-06 | 30 months | 350,000–600,000 |
| W2-10 | Cybersecurity Maturation and Disaster Recovery | TEC-03, TEC-04 | 18 months | 120,000–200,000 |
| **Total Wave 2** | | | | **USD 2,500,000–4,330,000** |

---

### W2-01: HIE Expansion — Activate Priority Integration Flows

**Gaps Addressed:** INT-02, INT-03, INT-04, INT-05, INT-06, APP-01

**Description:**
Expand the OpenHIM-based HIE from the single eCRVS→MPI→e-NHIS flow operational since Wave 1 to the full set of 5–6 priority integration flows defined in Section 3.5. This involves developing new mediators, FHIR adapters for legacy systems, and activating bidirectional data exchange. By the end of Wave 2, the HIE should process 4–5 integration flows with transaction volumes exceeding 500 messages per day. The HIE transitions from a proof-of-concept to the operational backbone of health data exchange.

**Wave 1 Prerequisites:**
- OpenHIM operational with ≥1 integration flow (W1-06)
- MPI containing ≥500,000 records with PIXm/PDQm APIs (W1-05)
- HAPI FHIR Server operational (W1-06)
- API governance standards published (W1-06)
- Keycloak IAM integrated (W1-06)

**Dependencies:**
- Internal: W2-02 (EHR deployment generates clinical data for Flows 4 and 5); W2-05 (LIS deployment enables Flow 3); W2-04 (EIR scaling generates immunisation data for Flow 2); W2-07 (G-Cloud migration requires platform readiness)
- Cross-sectoral: GEN-05 (future national Government Service Bus — HIE must be compatible); GEN-01 (G-Cloud hosting for production HIE)

**Key Integration Flows Activated:**

| Flow | Source → Target | Mediator Type | Dependency |
|------|----------------|---------------|------------|
| Flow 2 | EIR (DHIS2 Tracker) → DHIS2 Aggregate | Native DHIS2 programme-to-aggregate | W2-04 EIR scaling |
| Flow 3 | LIS → DHIS2 Tracker IDSR+ | FHIR DiagnosticReport mediator | W2-05 LIS deployment |
| Flow 4 | EHR → DHIS2 Aggregate | FHIR MeasureReport mediator | W2-02 EHR at ≥10 facilities |
| Flow 5 | EHR ↔ e-NHIS (eligibility/claims) | Bidirectional FHIR mediator | W2-02 + W2-03 both operational |
| Flow 6 | DHIS2 → WHO/RHO ADX | DHIS2 ADX module | DHIS2 quality gates configured |

**Deliverables:**
1. 4–5 new OpenHIM mediators developed, tested, and deployed (Flows 2–6)
2. FHIR adapters for LIS and e-NHIS legacy systems
3. Bidirectional e-NHIS eligibility/claims mediator with clinical-to-financial code mapping
4. DHIS2 ADX automated international reporting configured and validated
5. HIE transaction dashboard showing real-time flow volumes, error rates, and latency
6. Integration testing suite for regression testing across all flows
7. Updated API governance standards with lessons from Wave 1

**Indicative Cost:** USD 280,000–480,000
- Integration architect TA (12 months): USD 60,000–90,000
- Mediator developers (2 × 12 months): USD 80,000–130,000
- FHIR adapter development (LIS, e-NHIS): USD 60,000–100,000
- Testing infrastructure and QA: USD 30,000–50,000
- HIE operational hosting (24 months): USD 20,000–40,000
- ADX configuration and WHO/RHO coordination: USD 15,000–30,000
- Documentation and knowledge transfer: USD 15,000–40,000

**Funding Source:** RDIP (interoperability component) + WHO (ADX/international reporting)

**Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Legacy systems resist FHIR integration | High | High | FHIR façade pattern — adapter sits outside legacy system; no legacy modification required |
| Transaction volumes overwhelm interim hosting | Medium | High | G-Cloud migration (W2-07) provides scalable infrastructure; horizontal scaling of OpenHIM channels |
| Multiple mediator dependencies create cascading failures | Medium | High | Circuit breaker patterns in OpenHIM; independent mediator health checks; graceful degradation |

**Success Criteria:**
- ≥4 integration flows live through HIE by end of Wave 2
- HIE processes ≥500 messages per day with <5% error rate
- Integration maturity advanced from Level 1 (ad-hoc) to Level 3 (defined, API-based)
- ADX automated reporting operational for ≥3 WHO indicator sets
- All mediators documented with operational runbooks for DHDD

---

### W2-02: EHR Pilot and Scale (OpenMRS at 15–20 Facilities)

**Gaps Addressed:** APP-02 (EHR System), INT-04 (Clinical→Aggregate), INT-05 (Insurance Eligibility/Claims)

**Description:**
Deploy OpenMRS as the national EHR platform, starting with a pilot at 3–5 facilities focused on maternal health and HIV/ART modules, then scaling to 15–20 facilities. The EHR introduces structured, coded clinical data capture at the point of care, replacing the ~90% paper-based clinical documentation identified in the AS-IS assessment. The rollout follows a vertical-first strategy: specific clinical programmes (maternal health, HIV/ART) are digitised before expanding to general outpatient services. Each facility receives local server infrastructure with offline-first capability, ensuring operations continue during connectivity interruptions.

**Wave 1 Prerequisites:**
- DHDD operational with Architecture & Standards Lead (W1-01)
- Data governance framework in force with patient consent protocol (W1-03)
- MPI operational with ≥500,000 records (W1-05) — EHR queries MPI for patient identity
- HIE operational (W1-06) — EHR routes clinical data through OpenHIM
- Facility connectivity at pilot sites confirmed (W1-08)
- Change champions active at pilot facilities (W1-10)

**Dependencies:**
- Internal: W2-07 (G-Cloud for central EHR components); W2-08 (ICD-11/LOINC terminology for structured coding); W2-09 (training capacity for clinician adoption); W2-01 (HIE mediators for Flows 4 and 5)
- Cross-sectoral: GEN-02 (broadband connectivity determines EHR facility selection); GEN-01 (G-Cloud for central database replication)

**Deliverables:**
1. OpenMRS 3.x deployed at 3–5 pilot facilities with maternal health and HIV/ART modules (Months 1–12)
2. OpenMRS FHIR module configured — Patient, Encounter, Observation, Condition resources exposed
3. OpenMRS-to-MPI integration validated — patient lookup via PIXm at registration
4. Clinician training completed at pilot sites (20–40 hours per clinician, 50–100 staff trained)
5. Pilot evaluation report — adoption rates, data quality, clinical workflow impact, lesson learned
6. OpenMRS scaled to 15–20 facilities (Months 12–30) — targeting urban/peri-urban hospitals, e-NHIS-contracted sites, teaching hospitals
7. Local facility servers deployed with offline sync capability at all EHR sites
8. Paper-to-digital coexistence protocol documented (parallel operation for 6–12 months per facility)

**Indicative Cost:** USD 550,000–950,000
- OpenMRS implementation lead (18 months): USD 80,000–120,000
- Clinical informaticists (2 × 12 months — module configuration, clinical workflow): USD 70,000–120,000
- Facility hardware (20 facilities × USD 10,000–15,000 per facility): USD 200,000–300,000
- Clinician training (150 staff × multi-day): USD 60,000–100,000
- Local server infrastructure (20 servers with offline sync): USD 40,000–80,000
- OpenMRS community support / IntraHealth engagement: USD 30,000–60,000
- FHIR module configuration and HIE integration: USD 30,000–60,000
- Pilot evaluation and lesson documentation: USD 15,000–30,000
- Solar/power protection at EHR sites: USD 25,000–80,000

**Funding Source:** Dedicated health sector digitisation funding (World Bank / AfDB proposal) + Global Fund NFM5 (HIV/ART module) + GAVI (maternal health alignment)

**Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Clinician resistance to digital documentation | High | Critical | Change champion network; demonstrate time savings after learning curve; clinical workflow co-design with users |
| Paper-to-digital transition creates duplicate workload | High | High | Hybrid operation limited to 6–12 months; clear criteria for paper retirement per facility |
| Connectivity insufficient for real-time sync | Medium | Medium | Offline-first design with local facility servers; background sync when connected |
| Dedicated health digitisation funding not secured | Medium | Critical | Prepare World Bank/AfDB proposal during Wave 1; partial scale-up using Global Fund HIV/ART component |

**Success Criteria:**
- OpenMRS pilot operational at ≥3 facilities within 12 months of Wave 2 start
- ≥80% clinician adoption at pilot sites after 6 months
- EHR deployed at 15–20 facilities by Month 30
- FHIR-based clinical data flowing to HIE from ≥10 facilities
- Data quality in EHR matches or exceeds paper-based registers (≥90% completeness for key indicators)

---

### W2-03: e-NHIS Enhancement — Offline Claims, Mobile Enrollment, Scaling

**Gaps Addressed:** APP-05 (e-NHIS Enhancement), INT-05 (Insurance Eligibility/Claims)

**Description:**
Transform e-NHIS from a basic enrollment and claims platform (current 15,000–20,000 beneficiaries against a 60,000 target) into a robust national health insurance information system with offline claims processing, mobile enrollment, and integration with the EHR and HIE. This initiative builds on the eCRVS→e-NHIS auto-enrollment flow established in Wave 1 (W1-06) to dramatically expand coverage. The target is 60,000+ beneficiaries with active claims processing, supported by offline-capable claims submission from facilities with intermittent connectivity.

**Wave 1 Prerequisites:**
- eCRVS→MPI→e-NHIS auto-enrollment flow operational (W1-06)
- Data governance framework covering insurance data (W1-03)
- DHDD operational (W1-01) — coordinates e-NHIS integration with broader architecture

**Dependencies:**
- Internal: W2-01 (Flow 5 — EHR↔e-NHIS bidirectional integration); W2-02 (EHR at e-NHIS-contracted facilities); W2-07 (G-Cloud for e-NHIS hosting)
- Cross-sectoral: NHIA budget and policy direction; government commitment to universal health coverage

**Deliverables:**
1. e-NHIS offline claims module — Progressive Web App (PWA) enabling claims submission from facilities without continuous connectivity; sync when connected
2. Mobile enrollment module — community-based enrollment via mobile devices (tablets or smartphones) for outreach campaigns
3. e-NHIS beneficiary count target: ≥60,000 active beneficiaries (including auto-enrolled from eCRVS flow)
4. FHIR CoverageEligibilityRequest/Response APIs — real-time eligibility verification from EHR
5. Claims-to-clinical mapping — ICD-11 and procedure codes mapped to e-NHIS benefit package
6. e-NHIS provider performance dashboards — claims analysis, utilisation patterns, fraud detection indicators
7. e-NHIS migrated to G-Cloud hosting (from EHSSP-era interim hosting)

**Indicative Cost:** USD 200,000–350,000
- e-NHIS development (vendor engagement — offline, mobile, APIs): USD 80,000–140,000
- Mobile enrollment devices and connectivity (50 tablets): USD 15,000–30,000
- Claims-to-clinical code mapping (joint EHR/NHIS working group): USD 20,000–35,000
- Enrollment outreach campaigns (5 regions): USD 30,000–50,000
- G-Cloud migration for e-NHIS: USD 20,000–35,000
- Training (facility staff on offline claims, community agents on mobile enrollment): USD 20,000–35,000
- Dashboard development: USD 15,000–25,000

**Funding Source:** Government of Progressa (presidential priority — universal health coverage) + RDIP (e-government alignment)

**Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| e-NHIS vendor unable to deliver offline/mobile capability | Medium | High | Issue technical specifications early; competitive tender if current vendor cannot deliver; modular PWA approach |
| Beneficiary enrollment grows faster than NHIA financial capacity | Medium | Medium | Phased geographic enrollment; premium collection systems strengthened; actuarial review of benefit package |
| Claims fraud from offline submissions | Medium | Medium | Audit trail in offline module; claims review workflow; anomaly detection in dashboards |

**Success Criteria:**
- Offline claims module operational at ≥30 facilities
- Mobile enrollment used in ≥3 regional outreach campaigns
- ≥60,000 active beneficiaries by end of Wave 2
- FHIR eligibility API integrated with ≥5 EHR sites
- e-NHIS hosted on G-Cloud

---

### W2-04: DHIS2 Tracker EIR National Scale (SPT Transition Management)

**Gaps Addressed:** APP-03 (EIR — SPT→DHIS2 Tracker Transition), INT-02 (EIR→Aggregate Reporting)

**Description:**
Scale the DHIS2 Tracker EIR from the 10–15 facility pilot (Wave 1) to national coverage across all regions with adequate connectivity, while managing the controlled parallel operation and eventual transition from SPT. This is the most politically and operationally sensitive digital health transition in the roadmap — SPT has >99% accuracy and strong stakeholder trust. The transition must demonstrate that DHIS2 Tracker EIR matches or exceeds SPT's performance before any SPT facility is retired. The initiative follows a regional rollout strategy, with regions transitioning based on connectivity and readiness assessments.

**Wave 1 Prerequisites:**
- DHIS2 Tracker EIR pilot operational at ≥10 facilities with data quality comparable to SPT (W1-04)
- DHIS2 aggregate reporting completeness ≥90% (W1-04)
- mCSD FHIR Facility Registry interface operational (W1-04)
- Change champions active at pilot facilities (W1-10)
- Pilot evaluation report completed with lessons learned

**Dependencies:**
- Internal: W2-01 (HIE Flow 2 — EIR→Aggregate); W2-07 (G-Cloud for central DHIS2); W2-09 (training capacity for regional rollout)
- Cross-sectoral: GAVI next cycle dialogue (EIR transition investment case); Vaxa (SPT vendor) engagement for managed transition; RDIP broadband (determines which facilities have sufficient connectivity for Tracker)

**Deliverables:**
1. DHIS2 Tracker EIR deployed in 3–4 additional regions (40–60 facilities) based on connectivity readiness
2. SPT→DHIS2 Tracker data migration plan — historical immunisation data backfill for migrating facilities
3. Regional transition schedule — per-region timeline based on connectivity, staff readiness, and pilot performance
4. DHIS2 Tracker EIR performance report — accuracy comparison with SPT (target: ≥99% match)
5. 200+ facility staff trained on DHIS2 Tracker EIR (Android app, offline sync, defaulter management)
6. GAVI investment case for EIR transition submitted (aligning with GAVI 6.0 strategy)
7. SPT maintained at facilities without adequate connectivity — no premature retirement
8. National programme-to-aggregate reporting operational (DHIS2 Tracker → DHIS2 Aggregate for immunisation indicators)

**Indicative Cost:** USD 300,000–500,000
- DHIS2 Tracker specialists (2 × 18 months, HISP regional node support): USD 100,000–160,000
- Tablets and hardware (60 additional facilities × USD 300): USD 18,000–30,000
- Mobile data plans (60 facilities × 24 months): USD 15,000–30,000
- Training delivery (200+ staff × multi-day): USD 50,000–90,000
- SPT data migration and parallel operation coordination: USD 30,000–50,000
- Vaxa/SPT transition engagement: USD 20,000–40,000
- GAVI investment case preparation: USD 15,000–25,000
- Regional supervision and quality assurance: USD 30,000–50,000
- Contingency: USD 22,000–55,000

**Funding Source:** GAVI (EIR transition — next strategic period) + WHO (immunisation data quality) + Global Fund NFM5 (surveillance alignment)

**Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| DHIS2 Tracker EIR fails to match SPT accuracy at scale | Medium | Critical | Extended parallel operation; do not retire SPT until accuracy validated at regional level; invest in data quality monitoring |
| GAVI funding for transition not secured | Medium | High | Prepare strong investment case with pilot data; align with GAVI 6.0 country-owned EIR strategy; co-finance with WHO |
| Staff prefer SPT familiarity over DHIS2 Tracker | High | Medium | Demonstrate DHIS2 Tracker advantages (real-time data, defaulter lists, decision support); change champion advocacy |
| Connectivity constraints limit geographic coverage | High | Medium | Android offline capability mitigates; prioritise regions with RDIP broadband; maintain SPT where connectivity insufficient |

**Success Criteria:**
- DHIS2 Tracker EIR operational in ≥4 regions (≥50 facilities) by end of Wave 2
- Data accuracy ≥99% at Tracker facilities (matching SPT benchmark)
- Programme-to-aggregate immunisation reporting automated
- GAVI investment case submitted and acknowledged
- SPT retained only at facilities without adequate connectivity

---

### W2-05: Laboratory Information System Deployment

**Gaps Addressed:** APP-06 (LIS Strengthening), INT-03 (Lab→Surveillance Notification)

**Description:**
Deploy a standardised Laboratory Information System across the national reference laboratory, 3 regional hospital laboratories, and establish the foundation for HIE-mediated lab-to-surveillance data flow. The initiative begins with a platform assessment comparing A-LIS (currently piloted) against OpenELIS Global, selects the strategic platform, then deploys with LOINC coding for priority laboratory tests. The LIS provides electronic sample management, result reporting, quality assurance tracking, and instrument interfacing — replacing manual logbooks at target laboratories.

**Wave 1 Prerequisites:**
- HIE operational with API governance standards (W1-06)
- DHIS2 Tracker IDSR+ pilot operational at ≥10 facilities (W1-04)
- Data governance framework covering laboratory data (W1-03)
- Interim hosting operational (W1-09)

**Dependencies:**
- Internal: W2-01 (HIE Flow 3 — Lab→Surveillance); W2-06 (electronic IDSR+ receives notifications from LIS); W2-07 (G-Cloud for LIS hosting); W2-08 (LOINC coding for lab tests)
- Cross-sectoral: Global Fund laboratory strengthening component; National Public Health Laboratory governance

**Deliverables:**
1. LIS platform assessment and selection report (A-LIS vs. OpenELIS Global)
2. LIS deployed at National Public Health Laboratory (central reference lab)
3. LIS deployed at 3 regional hospital laboratories
4. LOINC mapping completed for 200–300 priority laboratory test codes
5. LIS→DHIS2 aggregate integration (laboratory indicators into HMIS)
6. LIS→Surveillance FHIR mediator (DiagnosticReport → IDSR+ notification for notifiable conditions)
7. Laboratory staff trained (30–50 technicians, 16–24 hours per person)
8. Instrument interfacing at national reference lab (2–3 high-volume analysers)

**Indicative Cost:** USD 250,000–450,000
- LIS specialist TA (12 months): USD 50,000–80,000
- Platform licencing and configuration: USD 30,000–60,000
- Laboratory hardware (4 sites × workstations, barcode readers, printers): USD 40,000–80,000
- Instrument interfacing (3 analysers): USD 30,000–60,000
- LOINC mapping and terminology work: USD 20,000–35,000
- FHIR mediator development (LIS→Surveillance): USD 25,000–45,000
- Training delivery (50 staff): USD 25,000–40,000
- DHIS2 integration: USD 15,000–25,000
- Contingency: USD 15,000–25,000

**Funding Source:** Global Fund NFM5 (laboratory strengthening, RSSH) + RDIP (interoperability)

**Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| A-LIS pilot does not meet FHIR interoperability requirements | Medium | High | Platform assessment in first 3 months; OpenELIS Global as alternative with native FHIR R4 |
| Instrument interfacing more complex than estimated | Medium | Medium | Start with high-volume analysers; vendor-supported interfaces; budget for customisation |
| Laboratory staff resistance to electronic workflows | Medium | Medium | Demonstrate time savings (report turnaround); involve lab directors in design; phased rollout |

**Success Criteria:**
- LIS operational at national reference lab and ≥3 regional labs by end of Wave 2
- LOINC coding applied to ≥200 priority tests
- Automated notifiable condition alerts sent to IDSR+ from ≥1 lab
- LIS aggregate indicators visible in DHIS2 dashboards
- Laboratory report turnaround time reduced by ≥20% at digital sites

---

### W2-06: Electronic IDSR+ National Rollout

**Gaps Addressed:** APP-04 (Electronic IDSR+ — national scale), INT-03 (Lab→Surveillance — surveillance side)

**Description:**
Scale the DHIS2 Tracker-based electronic case-based IDSR+ from the Wave 1 pilot (10–20 facilities) to all facilities with connectivity, establishing national electronic disease surveillance. The system transitions from aggregate indicator-based surveillance (current) to case-based electronic notification for priority conditions, with automated alerts and response tracking. Event-based surveillance (EBS) preparation begins, with community-based signal detection through mobile tools.

**Wave 1 Prerequisites:**
- DHIS2 Tracker IDSR+ pilot operational at ≥10 facilities (W1-04)
- DHIS2 reporting completeness ≥90% (W1-04)
- Facility connectivity at target sites (W1-08)

**Dependencies:**
- Internal: W2-05 (LIS provides automated lab notifications for notifiable conditions); W2-01 (HIE Flow 3); W2-09 (IDSR focal person training at scale)
- Cross-sectoral: WHO AFRO IHR compliance; Africa CDC EBS guidance

**Deliverables:**
1. DHIS2 Tracker IDSR+ deployed at all facilities with connectivity (target: 60–80 facilities)
2. Case-based surveillance for WHO priority VPDs and epidemic-prone diseases
3. Automated alert generation and response tracking workflow
4. EBS pilot initiated at 5–10 high-risk sites (hotline + community reporting)
5. Surveillance dashboards — real-time case maps, threshold alerts, response monitoring
6. DHIS2 Tracker IDSR+→aggregate surveillance reporting automated
7. 80+ IDSR focal persons trained on electronic case notification (8–16 hours each)
8. Weekly epidemiological bulletin automated from DHIS2 surveillance data

**Indicative Cost:** USD 150,000–280,000
- Surveillance specialist TA (12 months): USD 45,000–70,000
- DHIS2 Tracker IDSR+ configuration and deployment: USD 20,000–40,000
- Tablets for facilities without devices (30 units): USD 9,000–15,000
- Training delivery (80+ staff): USD 30,000–50,000
- EBS pilot (mobile reporting tools, hotline setup): USD 20,000–40,000
- Dashboard development: USD 10,000–25,000
- Supervision, field support, and quality assurance: USD 16,000–40,000

**Funding Source:** WHO (IHR compliance) + Global Fund NFM5 (disease surveillance) + Africa CDC (EBS)

**Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Facility staff overburdened with additional case-based reporting | Medium | Medium | Streamlined notification form (5 minutes per case); mobile-friendly interface; demonstrate value through response time improvements |
| Connectivity disrupts real-time notification | High | Medium | Offline DHIS2 Android with store-and-forward; SMS fallback for critical alerts |

**Success Criteria:**
- Electronic IDSR+ operational at ≥60 facilities by end of Wave 2
- Case-based notification for ≥10 priority conditions
- Automated alert response time <48 hours for epidemic-prone diseases
- EBS pilot operational at ≥5 sites
- Weekly epidemiological bulletin generated from electronic data

---

### W2-07: G-Cloud Migration — Sovereign Health Data Hosting

**Gaps Addressed:** TEC-01 (Sovereign Hosting), TEC-06 (Containerisation), GEN-01 (G-Cloud), GEN-06 (Cloud/Hosting Policy)

**Description:**
Migrate all centrally-hosted MoH health information systems from the interim PDGA DC Docker Compose deployment (established in W1-09) to the national G-Cloud Kubernetes platform when it becomes available (target 2027). This initiative establishes the MoH "cloud spoke" within the national G-Cloud architecture, ensuring sovereign hosting, high availability, automated scaling, and compliance with the national cloud-first policy. Each system is migrated individually with a 60-day parallel-run validation period.

**Wave 1 Prerequisites:**
- All central systems containerised and operational on Docker Compose at PDGA DC (W1-09)
- G-Cloud infrastructure delivered by RDIP (external dependency)
- Kubernetes deployment manifests prepared (W1-09)

**Dependencies:**
- Internal: All Wave 2 system deployments (W2-01 through W2-06) benefit from G-Cloud scalability
- Cross-sectoral: RDIP G-Cloud delivery timeline (critical external dependency); PDGA/MoDE G-Cloud governance and access policies

**Deliverables:**
1. MoH G-Cloud spoke provisioned — dedicated namespace, resource quotas, network policies
2. Kubernetes deployment manifests finalised for all systems (OpenHIM, OpenCR, HAPI FHIR, DHIS2, Keycloak, OCL, monitoring stack)
3. System-by-system migration with 60-day parallel-run per system (6 systems × 60 days = staged over 12 months)
4. Automated CI/CD pipeline — GitOps-based deployment for DHDD-managed applications
5. Disaster recovery validated — cross-availability-zone replication (if G-Cloud supports); offsite backup to encrypted storage
6. DHIS2 migrated to G-Cloud (largest and most critical migration)
7. Performance benchmarks documented — response time, throughput, availability compared to PDGA DC baseline
8. PDGA DC interim hosting decommissioned after all systems migrated

**Indicative Cost:** USD 180,000–300,000
- Cloud/DevOps engineer TA (12 months): USD 55,000–90,000
- G-Cloud subscription/hosting fees (18 months): USD 30,000–60,000
- Kubernetes deployment engineering: USD 30,000–50,000
- CI/CD pipeline setup: USD 15,000–30,000
- Migration testing and parallel-run costs: USD 20,000–35,000
- DR validation and backup infrastructure: USD 15,000–25,000
- Contingency: USD 15,000–10,000

**Funding Source:** RDIP (G-Cloud is a RDIP deliverable — migration aligns with G-Cloud adoption targets)

**Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| G-Cloud delivery delayed beyond 2027 | High | High | Extend PDGA DC interim hosting; Docker Compose scales for Wave 2 volumes; migration deferred but not blocked |
| G-Cloud specifications incompatible with health system requirements | Medium | High | Engage RDIP G-Cloud team early with MoH requirements document; health data sovereignty non-negotiable |
| Migration causes service disruption | Medium | Critical | 60-day parallel-run per system; automated rollback procedures; migrate lowest-risk system first |

**Success Criteria:**
- MoH G-Cloud spoke operational within 6 months of G-Cloud availability
- All central systems migrated within 18 months
- 99.9% availability on G-Cloud (improvement from 99.5% PDGA DC)
- Automated CI/CD pipeline operational for DHDD
- PDGA DC decommissioned with clean handover

---

### W2-08: FHIR Adoption and Terminology Standards Maturation

**Gaps Addressed:** DAT-02 (Health Data Dictionary), DAT-03 (Terminology Services), INT-07 (API Standards), DAT-04 (Data Quality — cross-system dimension)

**Description:**
Mature the health data standards environment from the foundational ICD-11 and LOINC deployments of Wave 1 to comprehensive FHIR profiling, SNOMED CT adoption for clinical coding, and cross-system data quality governance. This initiative establishes Progressa-specific FHIR Implementation Guides (IGs) for the 6 priority integration flows, ensures all systems share a common terminology baseline, and implements cross-system data quality monitoring through the HIE.

**Wave 1 Prerequisites:**
- OCL operational with ICD-11 and LOINC core loaded (W1 quick win)
- API governance standards published (W1-06)
- DHIS2 data quality tools configured (W1-04)

**Dependencies:**
- Internal: W2-01 (HIE flows consume FHIR profiles); W2-02 (EHR generates FHIR resources); W2-05 (LIS uses LOINC); all systems benefit from standardised terminology
- Cross-sectoral: WHO SMART Guidelines FHIR IGs; HL7 FHIR community; regional harmonisation (REC health data standards)

**Deliverables:**
1. Progressa Health FHIR Implementation Guide v1.0 — 10–15 resource profiles for priority integration flows (Patient, Encounter, Observation, DiagnosticReport, Immunization, Coverage, etc.)
2. SNOMED CT licence obtained and core clinical terminology loaded into OCL
3. OCL expanded: comprehensive value sets for all active systems (500+ concepts mapped)
4. Cross-system data quality dashboard — completeness, consistency, timeliness metrics across HIE-mediated flows
5. Data quality business rules engine in OpenHIM — reject or flag non-conformant messages
6. Annual data quality assessment framework aligned with WHO DQR methodology
7. FHIR conformance testing for all systems connecting to HIE

**Indicative Cost:** USD 120,000–220,000
- Health informatics / FHIR specialist TA (12 months): USD 50,000–80,000
- SNOMED CT licence and implementation: USD 15,000–30,000
- FHIR IG development: USD 20,000–40,000
- OCL expansion and terminology mapping: USD 15,000–30,000
- Data quality dashboard and business rules: USD 10,000–20,000
- Conformance testing tools: USD 10,000–20,000

**Funding Source:** WHO (health data standards) + RDIP (interoperability)

**Success Criteria:**
- Progressa Health FHIR IG published and enforced for all new integrations
- SNOMED CT operational in OCL for clinical coding
- Cross-system data quality score ≥85% across HIE flows
- All HIE-connected systems pass FHIR conformance tests

---

### W2-09: Digital Health Workforce Scale-Up

**Gaps Addressed:** BUS-05 (Change Management), DAT-06 (Data Stewardship)

**Description:**
Scale the digital health workforce from the Wave 1 foundation to full DHDD staffing (14 positions), complete Regional Health Data Officer deployment (7 regions), train 300+ facility staff on deployed systems, and establish a sustainable continuous professional development programme. This initiative addresses the critical finding that ~90% EHR readiness coexists with ~90% paper-based operations — demonstrating that adoption requires sustained investment in people, not just technology.

**Wave 1 Prerequisites:**
- DHDD operational with ≥6 staff (W1-01, W1-10)
- 20 change champions active (W1-10)
- 10 master trainers ToT-qualified (W1-10)
- 3 Regional Health Data Officers deployed (W1-10)

**Dependencies:**
- Internal: All Wave 2 system deployments generate training demand; W2-02 (EHR clinician training is highest-volume); W2-04 (EIR scaling training); W2-06 (IDSR+ training)
- Cross-sectoral: UoP (University of Progressa) partnership for health informatics curriculum; government civil service reform for digital health positions

**Deliverables:**
1. DHDD fully staffed — 14 positions (8 additional from Wave 1 base): Information Security Officer, Integration Engineers (2), Data Analysts (2), Help Desk/Support (2), additional Systems Administrator
2. 7 Regional Health Data Officers deployed (4 additional from Wave 1)
3. 300+ facility staff trained on deployed systems (EHR, EIR, IDSR+, eLMIS)
4. Continuous professional development programme established — annual training calendar, e-learning platform (Moodle or equivalent), competency assessments
5. 40 facility change champions active (expanded from 20 in Wave 1)
6. UoP health informatics module developed (partnership with university)
7. DHDD competency framework at Level 2–3 (Working to Practitioner) for core team
8. Annual staff satisfaction and retention survey conducted

**Indicative Cost:** USD 350,000–600,000
- DHDD additional staffing (8 positions × 24 months): USD 150,000–250,000
- Regional Health Data Officers (4 additional × 24 months): USD 60,000–100,000
- Training delivery (300+ staff on multiple systems): USD 60,000–100,000
- E-learning platform setup and content development: USD 20,000–40,000
- Change champion expansion and support: USD 15,000–25,000
- UoP partnership and curriculum development: USD 15,000–30,000
- Capacity building specialist TA (12 months): USD 30,000–55,000

**Funding Source:** Government of Progressa (recurrent staffing) + Global Fund NFM5 (RSSH) + GAVI + WHO

**Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Staff attrition to private sector/NGOs | High | High | Competitive compensation; career development pathways; meaningful work; regional balance |
| Training fatigue across multiple system rollouts | Medium | Medium | Integrated training calendar; avoid concurrent system launches at same facility; blended learning |
| Government unable to absorb recurrent salary costs | Medium | Critical | Phased salary absorption plan; link DHDD staffing to demonstrated value (data quality, system uptime metrics) |

**Success Criteria:**
- DHDD at 14 staff by end of Wave 2
- 7 Regional Health Data Officers deployed
- ≥300 facility staff trained with ≥80% completion rates
- E-learning platform operational with ≥5 courses
- Staff retention rate ≥75% annually

---

### W2-10: Cybersecurity Maturation and Disaster Recovery

**Gaps Addressed:** TEC-03 (Cybersecurity), TEC-04 (Disaster Recovery)

**Description:**
Mature the security and resilience posture from the Wave 1 baseline (Keycloak IAM, basic monitoring) to a comprehensive cybersecurity framework and validated disaster recovery capability. This initiative implements multi-factor authentication across all systems, establishes a security incident response plan, deploys vulnerability scanning, and validates the full disaster recovery plan through annual exercises. With health data increasingly digital and integrated through the HIE, the attack surface has expanded significantly since Wave 1.

**Wave 1 Prerequisites:**
- Keycloak IAM deployed and integrated with OpenHIM (W1-06)
- Prometheus/Grafana/Loki monitoring operational (W1-06)
- Automated backups in place (W1-09)

**Dependencies:**
- Internal: W2-07 (G-Cloud provides infrastructure-level security); all systems must integrate with Keycloak SSO
- Cross-sectoral: PDGA cybersecurity framework (national CERT coordination); GEN-04 (Data Protection Act — when enacted)

**Deliverables:**
1. Keycloak MFA enforced across all MoH health information systems (100% coverage)
2. SSO integration completed for all systems (OpenHIM, DHIS2, OpenMRS, e-NHIS, eLMIS, LIS)
3. Security incident response plan documented and DHDD-endorsed
4. Vulnerability scanning programme — quarterly scans with remediation tracking
5. Annual DR exercise — full system recovery from backup within defined RTO (8 hours) and RPO (24 hours)
6. User access review programme — quarterly review of access rights; role-based access enforcement
7. Security awareness training for 100+ MoH staff (annual)
8. Data breach notification procedure aligned with (anticipated) Data Protection Act

**Indicative Cost:** USD 120,000–200,000
- Cybersecurity specialist TA (9 months): USD 40,000–65,000
- Vulnerability scanning tools and licences: USD 10,000–20,000
- MFA token/authenticator deployment: USD 5,000–15,000
- DR exercise (annual): USD 15,000–25,000
- Security awareness training programme: USD 10,000–20,000
- SSO integration across all systems: USD 20,000–35,000
- Incident response plan development: USD 10,000–15,000
- Contingency: USD 10,000–5,000

**Funding Source:** RDIP (cybersecurity component) + Government budget (operational security)

**Success Criteria:**
- MFA enforced on 100% of system access points
- SSO operational across all MoH health information systems
- Annual DR exercise completed with successful recovery within RTO
- Zero critical unpatched vulnerabilities open >30 days
- Security incident response plan tested via tabletop exercise

---

### 4.3.1 Wave 2 Cost Summary

| Initiative | Indicative Cost (USD) | Primary Funding Source |
|-----------|----------------------|----------------------|
| W2-01: HIE Expansion | 280,000–480,000 | RDIP + WHO |
| W2-02: EHR Pilot and Scale | 550,000–950,000 | WB/AfDB + Global Fund + GAVI |
| W2-03: e-NHIS Enhancement | 200,000–350,000 | Government + RDIP |
| W2-04: EIR National Scale | 300,000–500,000 | GAVI + WHO + Global Fund |
| W2-05: LIS Deployment | 250,000–450,000 | Global Fund + RDIP |
| W2-06: Electronic IDSR+ | 150,000–280,000 | WHO + Global Fund + Africa CDC |
| W2-07: G-Cloud Migration | 180,000–300,000 | RDIP |
| W2-08: FHIR and Terminology | 120,000–220,000 | WHO + RDIP |
| W2-09: Workforce Scale-Up | 350,000–600,000 | Government + Global Fund + GAVI + WHO |
| W2-10: Cybersecurity and DR | 120,000–200,000 | RDIP + Government |
| **Total Wave 2** | **USD 2,500,000–4,330,000** | |

### 4.3.2 Wave 2 Funding Source Mapping

| Funding Source | Initiatives Supported | Estimated Contribution | Mechanism |
|---------------|----------------------|----------------------|-----------|
| **RDIP** | W2-01, W2-03, W2-05, W2-07, W2-08, W2-10 | USD 600,000–1,000,000 | Infrastructure, interoperability, G-Cloud |
| **Dedicated Health Digitisation (WB/AfDB)** | W2-02 | USD 350,000–600,000 | New proposal — health sector investment lending |
| **Global Fund NFM4 completion + NFM5** | W2-04, W2-05, W2-06, W2-09 | USD 350,000–600,000 | RSSH, laboratory, surveillance, supply chain |
| **GAVI (next cycle)** | W2-02, W2-04, W2-09 | USD 200,000–350,000 | EIR transition, immunisation integration |
| **WHO** | W2-01, W2-04, W2-06, W2-08, W2-09 | USD 100,000–200,000 | Normative support, standards, IHR |
| **Government of Progressa** | W2-03, W2-09, W2-10 | USD 300,000–500,000 | e-NHIS operations, recurrent staffing, security |
| **Africa CDC** | W2-06 | USD 30,000–60,000 | EBS pilot support |

---

## Section 4.4: Wave 3 Plan (2030–2033) — "Analyze, Optimize, Sustain"

Wave 3 shifts the strategic objective from system deployment to optimisation, sustainability, and innovation. By this phase, the core digital health infrastructure should be operational: governance structures mature, shared platforms processing thousands of daily transactions, clinical systems at 30+ facilities, and the workforce at full strength. Wave 3 focuses on three imperatives: achieving full coverage and integration maturity, building advanced analytics capabilities, and transitioning to sustainable government-funded operations that no longer depend on project-based donor financing for core operations.

Wave 3 is documented at a higher level than Waves 1 and 2 because the specific scope, sequencing, and costs will be refined during the Wave 2→Wave 3 transition review (end 2029), informed by actual performance data and the evolving funding landscape.

---

### Wave 3 Initiative Summary

| ID | Initiative | Focus Area | Duration | Indicative Cost (USD) |
|----|-----------|-----------|----------|-----------------------|
| W3-01 | EHR Coverage Expansion (30–40 Facilities) | Clinical Systems | 36 months | 500,000–900,000 |
| W3-02 | Health Data Warehouse and Advanced Analytics | Data & Analytics | 30 months | 250,000–450,000 |
| W3-03 | Cross-Border Surveillance and International Reporting | Public Health | 24 months | 120,000–220,000 |
| W3-04 | SPT Retirement and EIR Consolidation | Immunisation | 24 months | 100,000–180,000 |
| W3-05 | Full Integration Maturity (Level 3–4) | Interoperability | 36 months | 200,000–350,000 |
| W3-06 | Sustainability Transition — Government Budget Absorption | Governance | 48 months | 150,000–250,000 |
| W3-07 | Community-Based Digital Health Services | Service Delivery | 30 months | 180,000–320,000 |
| **Total Wave 3** | | | | **USD 1,500,000–2,670,000** |

---

### W3-01: EHR Coverage Expansion (30–40 Facilities)

**Description:** Expand OpenMRS from the 15–20 facilities achieved in Wave 2 to 30–40 facilities, covering all regional hospitals, major health centres, and teaching hospitals. Expand clinical modules beyond maternal health and HIV/ART to include general outpatient, NCD management, and pharmacy. The target is structured clinical data available for ≥60% of hospital encounters nationally.

**Dependencies on Wave 2:** W2-02 (EHR at 15–20 facilities with validated workflows), W2-07 (G-Cloud hosting), W2-09 (trained workforce), W2-08 (terminology standards for clinical coding).

**Cross-Sectoral Dependencies:** RDIP broadband at all target facilities; government budget for facility-level IT staff.

**Indicative Cost:** USD 500,000–900,000 (facility hardware, training, support, module development).

**Funding Source:** Government budget (increasing share) + Global Fund NFM5 (HIV/ART module) + bilateral donors.

---

### W3-02: Health Data Warehouse and Advanced Analytics

**Description:** Establish a cross-system health data warehouse (PostgreSQL/Apache Superset or similar) that aggregates data from DHIS2, OpenMRS, e-NHIS, LIS, and eLMIS through the HIE. Enable advanced analytics including disease burden modelling, resource allocation optimisation, quality-of-care indicators, and predictive outbreak detection. This transitions MoH from reactive data collection to proactive evidence-based decision-making.

**Dependencies on Wave 2:** W2-01 (≥4 integration flows providing structured data), W2-07 (G-Cloud for compute-intensive analytics), W2-08 (standardised data through FHIR profiles and coded terminology).

**Cross-Sectoral Dependencies:** University of Progressa partnership for data science capacity; national statistics coordination for population denominators.

**Indicative Cost:** USD 250,000–450,000 (data warehouse infrastructure, analytics platform, data science TA, dashboard development).

**Funding Source:** Government budget + WHO (health intelligence) + bilateral donors (data for decision-making programmes).

---

### W3-03: Cross-Border Surveillance and International Reporting

**Description:** Activate cross-border health data exchange for disease surveillance, particularly with neighbouring countries. Implement automated ADX-based reporting to WHO, RHO, and Africa CDC. Establish event-based surveillance at national scale (building on Wave 2 EBS pilot). Comply with IHR 2005 requirements for electronic surveillance notification. Deploy community-based surveillance through CHW mobile tools.

**Dependencies on Wave 2:** W2-06 (electronic IDSR+ at ≥60 facilities), W2-01 (ADX reporting configured), W2-08 (standardised coding for cross-border data exchange).

**Cross-Sectoral Dependencies:** Bilateral agreements with the ministries of health of neighbouring countries; REC health data sharing framework; WHO AFRO surveillance coordination.

**Indicative Cost:** USD 120,000–220,000 (cross-border protocol, ADX expansion, EBS national scale, CBS mobile tools).

**Funding Source:** WHO (IHR) + Africa CDC + REC health funds + Global Fund NFM5 (surveillance).

---

### W3-04: SPT Retirement and EIR Consolidation

**Description:** Complete the transition from SPT to DHIS2 Tracker EIR nationally, including historical data migration, SPT vendor decommissioning, and consolidation of the immunisation data platform. SPT is retired only at facilities where DHIS2 Tracker EIR has demonstrated ≥99% accuracy for at least 6 months. SPT decommissioning is managed collaboratively with Vaxa, honouring the partnership that delivered >99% accuracy for 350,000–400,000 children.

**Dependencies on Wave 2:** W2-04 (EIR at ≥50 facilities with validated accuracy), GAVI investment case approved.

**Cross-Sectoral Dependencies:** GAVI strategic period alignment; Vaxa collaboration for managed transition.

**Indicative Cost:** USD 100,000–180,000 (data migration, final training, decommissioning coordination, historical archive).

**Funding Source:** GAVI + WHO (immunisation data).

---

### W3-05: Full Integration Maturity (Level 3–4)

**Description:** Advance integration maturity from Level 3 (Defined, API-based) achieved in Wave 2 to Level 4 (Quantitatively Managed, event-driven). This involves transitioning from poll-based to event-driven architecture (pub/sub), implementing real-time clinical event notifications, and achieving all 6 priority integration flows at production maturity with >99% message delivery reliability. The HIE transitions from a routing platform to a comprehensive health data exchange with shared health record (SHR) capability.

**Dependencies on Wave 2:** W2-01 (≥4 flows live), W2-07 (G-Cloud Kubernetes for event-driven scaling), W2-08 (FHIR IG enforced).

**Cross-Sectoral Dependencies:** GEN-05 (national Government Service Bus — HIE aligns with or federates into national platform); MoDE interoperability framework.

**Indicative Cost:** USD 200,000–350,000 (event-driven architecture, SHR development, performance optimisation, integration testing).

**Funding Source:** RDIP follow-on + Government budget.

---

### W3-06: Sustainability Transition — Government Budget Absorption

**Description:** Execute the progressive transition from donor-funded project operations to government-sustained recurrent funding. The target is government budget absorbing ≥50% of digital health recurrent costs by 2033. This involves establishing dedicated MoH digital health budget lines, integrating DHDD operating costs into the Medium-Term Expenditure Framework (MTEF), and developing a Digital Health Sustainability Plan endorsed by MoF. Donor funding shifts from establishment costs to innovation and expansion.

**Dependencies on Wave 2:** W2-09 (workforce costs are the largest recurrent item), W2-07 (G-Cloud hosting costs to be absorbed), all Wave 2 systems generating demonstrable value.

**Cross-Sectoral Dependencies:** MoF budget allocation; Medium-Term Expenditure Framework cycle; public financial management reform.

**Indicative Cost:** USD 150,000–250,000 (sustainability planning TA, costing studies, budget advocacy, MTEF integration).

**Funding Source:** Government budget (core) + RDIP follow-on (transition support).

**Key Milestones:**
- 2030: Government absorbs DHDD salaries (14 positions) + Regional Health Data Officers (7 positions)
- 2031: Government absorbs G-Cloud hosting fees and connectivity costs
- 2032: Government absorbs system maintenance and support contracts
- 2033: ≥50% of total digital health recurrent costs funded from government budget; donor share limited to innovation, expansion, and capital investment

---

### W3-07: Community-Based Digital Health Services

**Description:** Extend digital health reach beyond facilities to community health workers (CHWs) and community-based services. Deploy mobile health tools for CHW data collection, referral management, and patient follow-up. Integrate community-level data with the national health information architecture through the HIE. This addresses the significant rural population that may not regularly access facility-based services.

**Dependencies on Wave 2:** W2-02 (EHR provides referral destination), W2-04 (EIR supports community-based defaulter tracing), W2-06 (IDSR+ CBS provides surveillance foundation), W2-09 (CHW training capacity).

**Cross-Sectoral Dependencies:** National Community Health Strategy; RDIP last-mile connectivity; mobile network operator partnerships.

**Indicative Cost:** USD 180,000–320,000 (mobile tools, CHW training, connectivity, data integration).

**Funding Source:** Global Fund NFM5 (community systems strengthening) + GAVI (immunisation outreach) + Government budget.

---

### 4.4.1 Wave 3 Cost Summary

| Initiative | Indicative Cost (USD) | Primary Funding Source |
|-----------|----------------------|----------------------|
| W3-01: EHR Expansion | 500,000–900,000 | Government + Global Fund + bilateral |
| W3-02: Health Data Warehouse | 250,000–450,000 | Government + WHO + bilateral |
| W3-03: Cross-Border Surveillance | 120,000–220,000 | WHO + Africa CDC + Global Fund |
| W3-04: SPT Retirement | 100,000–180,000 | GAVI + WHO |
| W3-05: Full Integration Maturity | 200,000–350,000 | RDIP follow-on + Government |
| W3-06: Sustainability Transition | 150,000–250,000 | Government + RDIP follow-on |
| W3-07: Community-Based Digital Health | 180,000–320,000 | Global Fund + GAVI + Government |
| **Total Wave 3** | **USD 1,500,000–2,670,000** | |

### 4.4.2 Wave 3 Funding Source Mapping

| Funding Source | Estimated Contribution | Shift from Wave 2 |
|---------------|----------------------|-------------------|
| **Government of Progressa** | USD 600,000–1,100,000 | **Major increase** — government becomes primary funder of recurrent costs |
| **Global Fund NFM5** | USD 300,000–500,000 | Continued but declining share |
| **RDIP follow-on / successor** | USD 200,000–350,000 | Transition support, not primary |
| **GAVI** | USD 100,000–200,000 | EIR consolidation only |
| **WHO** | USD 80,000–150,000 | Normative, surveillance, analytics |
| **Africa CDC** | USD 30,000–60,000 | Cross-border surveillance |
| **Bilateral donors** | USD 150,000–300,000 | Innovation and expansion |

---

### 4.4.3 Total Five-Year Investment Summary (All Waves)

| Wave | Period | Total Estimate (USD) | Government Share |
|------|--------|---------------------|-----------------|
| Wave 1 | 2025–2026 | 1,640,000–2,760,000 | ~15% |
| Wave 2 | 2027–2029 | 2,500,000–4,330,000 | ~15% |
| Wave 3 | 2030–2033 | 1,500,000–2,670,000 | ~40% |
| **Programme management overhead (10%)** | 2025–2033 | 564,000–976,000 | — |
| **Total** | **2025–2033** | **USD 6,204,000–10,736,000** | **Progressive increase** |

This range (USD 6.2–10.7M) is consistent with the Section 3.6.4 strategic investment estimate of USD 7.2–12.9M (which includes broader contingency and inflation adjustments over the full period).

---

## Section 4.5: Visual Roadmap

The following timeline presents all initiatives across the three transformation waves in a consolidated view. Initiatives are grouped by domain and colour-coded for visual tracking. Funding programme alignment is shown alongside the implementation timeline.

### 4.5.1 Initiative Timeline (All Waves)

**Legend — Domain Colour Coding:**

| Domain Code | Domain | Description |
|-------------|--------|-------------|
| 🔵 GOV | Governance & Policy | Institutional structures, strategies, frameworks |
| 🟢 DAT | Data & Standards | MPI, terminology, data quality, FHIR, analytics |
| 🟠 APP | Applications & Systems | DHIS2, EHR, EIR, LIS, eLMIS, e-NHIS, IDSR+ |
| 🔴 TEC | Technology Infrastructure | Hosting, connectivity, cloud, security |
| 🟣 INT | Integration & HIE | HIE platform, integration flows, interoperability |
| 🟡 WKF | Workforce & Capacity | Staffing, training, change management |

#### Wave 1 (2025–2026): "Govern, Connect, Register"

| ID | Initiative | Domain | 2025 Q1 | Q2 | Q3 | Q4 | 2026 Q1 | Q2 | Q3 | Q4 |
|----|-----------|--------|---------|----|----|----|---------|----|----|----|
| W1-11 | EHSSP Transition | 🔵 GOV | ████ | ██ | | | | | | |
| W1-01 | Digital Health Governance | 🔵 GOV | ████ | ████ | ████ | ████ | | | | |
| W1-02 | Digital Health Strategy | 🔵 GOV | | ████ | ████ | | | | | |
| W1-03 | Data Governance Framework | 🔵 GOV | | ████ | ████ | ████ | | | | |
| W1-09 | MoH Cloud Spoke (Interim) | 🔴 TEC | ████ | ████ | ████ | ████ | | | | |
| W1-05 | MPI/Client Registry | 🟢 DAT | | | ████ | ████ | ████ | ████ | | |
| W1-06 | eCRVS-NHIS Integration | 🟣 INT | | | | ████ | ████ | ████ | ████ | ████ |
| W1-04 | DHIS2 Strengthening | 🟠 APP | ████ | ████ | ████ | ████ | ████ | ████ | ████ | |
| W1-07 | eLMIS Rollout | 🟠 APP | ████ | ████ | ████ | ████ | ████ | ████ | | |
| W1-08 | Broadband Transition | 🔴 TEC | ████ | ████ | ████ | ████ | ████ | ████ | ████ | |
| W1-10 | Workforce Foundation | 🟡 WKF | ████ | ████ | ████ | ████ | ████ | ████ | ████ | |

**Key Wave 1 Milestones:**
- ⬥ 2025 Q2: EHSSP closure — all transitions must be complete
- ⬥ 2025 Q3: Ministerial Order signed (NDHSC + DHDD)
- ⬥ 2025 Q4: OpenHIM + MPI operational on interim hosting
- ⬥ 2026 Q2: eCRVS→MPI→e-NHIS integration flow live
- ⬥ 2026 Q3: DHIS2 Tracker EIR pilot at ≥10 facilities
- ⬥ 2026 Q4: **WAVE 1→2 TRANSITION DECISION (NDHSC)**

#### Wave 2 (2027–2029): "Exchange, Digitize, Scale"

| ID | Initiative | Domain | 2027 Q1 | Q2 | Q3 | Q4 | 2028 Q1 | Q2 | Q3 | Q4 | 2029 Q1 | Q2 | Q3 | Q4 |
|----|-----------|--------|---------|----|----|----|---------|----|----|----|---------|----|----|-----|
| W2-07 | G-Cloud Migration | 🔴 TEC | ████ | ████ | ████ | ████ | ████ | | | | | | | |
| W2-01 | HIE Expansion | 🟣 INT | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | | | |
| W2-02 | EHR Pilot and Scale | 🟠 APP | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | |
| W2-03 | e-NHIS Enhancement | 🟠 APP | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | | | |
| W2-04 | EIR National Scale | 🟠 APP | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | | | |
| W2-05 | LIS Deployment | 🟠 APP | | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | | | |
| W2-06 | Electronic IDSR+ | 🟠 APP | ████ | ████ | ████ | ████ | ████ | | | | | | | |
| W2-08 | FHIR & Terminology | 🟢 DAT | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | | | |
| W2-09 | Workforce Scale-Up | 🟡 WKF | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | |
| W2-10 | Cybersecurity & DR | 🔴 TEC | | ████ | ████ | ████ | ████ | ████ | | | | | | |

**Key Wave 2 Milestones:**
- ⬥ 2027 Q2: G-Cloud available; migration begins
- ⬥ 2027 Q3: EHR pilot at 3–5 facilities
- ⬥ 2027 Q4: Global Fund NFM4 ends; NFM5 begins
- ⬥ 2028 Q2: ≥4 HIE integration flows live
- ⬥ 2028 Q4: EHR at 15–20 facilities; EIR at ≥50 facilities
- ⬥ 2029 Q1: All central systems on G-Cloud
- ⬥ 2029 Q2: DHDD fully staffed (14 positions)
- ⬥ 2029 Q4: **WAVE 2→3 TRANSITION DECISION (NDHSC)**

#### Wave 3 (2030–2033): "Analyze, Optimize, Sustain"

| ID | Initiative | Domain | 2030 Q1 | Q2 | Q3 | Q4 | 2031 Q1 | Q2 | Q3 | Q4 | 2032 Q1 | Q2 | Q3 | Q4 | 2033 |
|----|-----------|--------|---------|----|----|----|---------|----|----|----|---------|----|----|-----|------|
| W3-01 | EHR Expansion | 🟠 APP | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | |
| W3-02 | Health Data Warehouse | 🟢 DAT | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | | |
| W3-03 | Cross-Border Surveillance | 🟣 INT | | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | | | | |
| W3-04 | SPT Retirement | 🟠 APP | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | | | | |
| W3-05 | Full Integration Maturity | 🟣 INT | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | |
| W3-06 | Sustainability Transition | 🔵 GOV | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ |
| W3-07 | Community Digital Health | 🟡 WKF | | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████ | | | |

**Key Wave 3 Milestones:**
- ⬥ 2030 Q2: Health data warehouse operational
- ⬥ 2030 Q4: Government absorbs DHDD salaries
- ⬥ 2031 Q2: EHR at 30+ facilities; cross-border surveillance with neighbouring countries operational
- ⬥ 2031 Q4: SPT fully retired nationally
- ⬥ 2032 Q2: Integration maturity Level 4 achieved
- ⬥ 2033: Government absorbs ≥50% of digital health recurrent costs
- ⬥ 2033 Q4: **national digital master plan target achieved**

### 4.5.2 Funding Programme Alignment

| Funding Programme | 2025 | 2026 | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033 |
|------------------|------|------|------|------|------|------|------|------|------|
| **EHSSP** | ██▓░ | | | | | | | | |
| **RDIP** | ████ | ████ | ████ | ████ | ██░░ | | | | |
| **Global Fund NFM4** | ████ | ████ | ████ | ░░░░ | | | | | |
| **Global Fund NFM5** | | | | ████ | ████ | ████ | ████ | ░░░░ | |
| **GAVI (current cycle)** | ████ | ████ | ████ | ░░░░ | | | | | |
| **GAVI (next cycle)** | | | | | ████ | ████ | ████ | ████ | ████ |
| **WHO CCS** | ████ | ████ | ████ | ████ | ░░░░ | | | | |
| **Dedicated Health Digitisation (new)** | | | ████ | ████ | ████ | ████ | ████ | ░░░░ | |
| **Government Budget** | ░░ | ░░ | ██ | ██ | ███ | ████ | ████ | ████ | ████ |

**Legend:** ████ = Active/full funding | ██░░ = Winding down | ░░░░ = Transition | ░░ = Minimal

---

## Section 4.6: Dependency Map — Critical Path Analysis

### 4.6.1 Intra-Wave Dependency Chains

#### Wave 1 Critical Path (reproduced from Section 4.2.2)

```
W1-01 (Governance) → W1-03 (Data Governance) → W1-09 (Hosting) → W1-05 (MPI) → W1-06 (HIE/Integration)
```

Duration: 12–15 months from start to first integration flow. This chain cannot be compressed without accepting governance or data governance shortcuts that create long-term technical debt.

#### Wave 2 Critical Path

```
W1-06 (HIE operational) → W2-07 (G-Cloud migration) → W2-02 (EHR deployment) → W2-01 (HIE expansion — Flows 4, 5)
                                                      ↘ W2-05 (LIS deployment) → W2-01 (HIE expansion — Flow 3)
                                                      ↘ W2-04 (EIR scaling) → W2-01 (HIE expansion — Flow 2)
```

The Wave 2 critical path converges on W2-01 (HIE Expansion), which can only activate additional integration flows as the source systems (EHR, LIS, EIR) become operational. The G-Cloud migration (W2-07) is the infrastructure prerequisite for scalable deployment.

#### Wave 3 Critical Path

```
W2-01 (≥4 flows) → W3-05 (Full integration maturity — Level 4)
W2-02 (EHR 15–20) → W3-01 (EHR expansion 30–40)
W2-04 (EIR ≥50) → W3-04 (SPT retirement)
W2-01 + W2-07 + W2-08 → W3-02 (Health data warehouse)
W3-06 (Sustainability) — depends on all other Wave 3 initiatives demonstrating value
```

### 4.6.2 Cross-Sectoral Dependencies

The MoH digital health roadmap depends on deliverables from external stakeholders and programmes that MoH does not directly control. These cross-sectoral dependencies represent the highest-risk items in the roadmap because delays are outside MoH's mitigation capacity.

| Dependency | Provider | Required By | Impact if Delayed | Severity |
|-----------|----------|-------------|-------------------|----------|
| **G-Cloud / National Data Centre** | RDIP / PDGA / MoDE | W2-07 (2027 Q1) | All Wave 2 systems remain on interim hosting; scalability constrained; no sovereignty guarantee | **Critical** |
| **Broadband Backbone and Last-Mile** | RDIP / ProgTel | W1-08 (2025–2026), W2 facilities | EHR, EIR, IDSR+ geographic coverage limited to facilities with existing connectivity | **Critical** |
| **eCRVS API / Data Access** | Civitas Group (eCRVS vendor) / MoDE | W1-06 (2026 Q1) | Priority 1 integration flow blocked; MPI cannot be seeded; health insurance auto-enrollment impossible | **Critical** |
| **National Digital ID Platform** | RDIP / Immigration / MoDE | W2 (2027–2028) | MPI remains multi-identifier workaround; no unified national health ID; deterministic matching limited to ~50% coverage | **High** |
| **Data Protection Act** | National Assembly / MoDE | W1-03 interim (2025), national (2027+) | MoH interim framework sufficient for Wave 1–2; national legislation needed for cross-sector data exchange at scale | **High** |
| **Government Service Bus** | MoDE / PDGA | W3-05 (2030+) | MoH HIE operates independently; future integration with national platform deferred | **Medium** |
| **Second Submarine Cable** | RDIP / cable consortium | W2 (2027–2028) | Single point of failure persists; international connectivity resilience not achieved | **Medium** |

### 4.6.3 Risk Impact Assessment — Cross-Sectoral Delays

#### Scenario A: G-Cloud Delayed by 18+ Months (Delivery 2029 instead of 2027)

**Impact:** Wave 2 systems (EHR, LIS, expanded HIE) remain on PDGA DC Docker Compose environment. Performance acceptable for Wave 1 volumes but may strain under Wave 2 transaction loads (500+ messages/day through HIE, 15–20 EHR facilities syncing). No Kubernetes orchestration, no auto-scaling, no redundancy.

**Fallback Plan:**
1. Extend PDGA DC hosting agreement — negotiate additional rack space, power, and bandwidth
2. Upgrade interim infrastructure — add servers to increase capacity (estimated USD 15,000–30,000)
3. Optimise Docker Compose deployment — implement Docker Swarm for basic orchestration and service replication
4. Defer G-Cloud-specific features (auto-scaling, multi-AZ DR) to Wave 3
5. Prepare migration at any time — Kubernetes manifests maintained and tested against a staging cluster

**Residual Risk:** Moderate. Docker Compose can handle Wave 2 volumes for a small country like Progressa. The risk is operational (no redundancy, no auto-recovery) rather than capacity.

#### Scenario B: Broadband Rollout Covers <30 Health Facilities by 2028

**Impact:** EHR, DHIS2 Tracker EIR, and electronic IDSR+ deployments limited to connected facilities. Target of 15–20 EHR facilities may not be achievable. EIR national scaling delayed. Rural facilities remain on satellite or 4G mobile data, with higher operational costs and lower reliability.

**Fallback Plan:**
1. Strict offline-first enforcement — all systems must function without connectivity (already mandated in Wave 1)
2. Extended 4G mobile data bridge — negotiate bulk data plans with ProgTel and private mobile operators for health sector
3. Prioritise EHR/EIR at facilities within broadband reach — adjust facility selection based on actual broadband coverage, not planned coverage
4. Advocate through RDIP governance (NDHSC → DTFA Steering Committee) for health facility prioritisation in broadband rollout
5. Solar + mobile connectivity packages for high-priority rural facilities (estimated USD 3,000–5,000 per facility)

**Residual Risk:** High for geographic coverage targets, low for system functionality (offline-first design mitigates).

#### Scenario C: eCRVS API Not Available by 2026

**Impact:** Priority 1 integration flow (birth registration → MPI → insurance enrollment) cannot operate in real-time. MPI seeding from eCRVS data blocked or limited to historical bulk import.

**Fallback Plan:**
1. Batch file exchange — eCRVS exports CSV/XML daily or weekly; OpenHIM batch mediator processes and routes to MPI and e-NHIS. Less elegant but functionally equivalent with 24–72 hour latency.
2. Manual enrollment bridge — trained health facility staff manually enroll newborns in e-NHIS at birth registration point (as currently done, but with MPI lookup for duplicate prevention)
3. Escalate through governance — NDHSC formal request to MoDE and RDIP DTFA Steering Committee for eCRVS vendor compliance; include in next eCRVS contract renewal as mandatory deliverable
4. Prepare for API when available — all OpenHIM mediators and MPI configurations built for real-time API; switch from batch to API requires configuration change only

**Residual Risk:** Low for health outcomes (enrollment happens with latency); high for integration maturity targets (Level 3 not achievable without real-time APIs).

#### Scenario D: National Digital ID Platform Delayed Beyond 2029

**Impact:** MPI continues operating with multi-identifier matching (eCRVS NIN at ~50% + probabilistic matching). No unified national health identifier. Cross-sector identity resolution limited.

**Fallback Plan:**
1. MPI is already designed for this scenario — OpenCR probabilistic matching provides coverage for population without NIN
2. Health-sector-specific identifier issued by MPI for patients without NIN (temporary health ID, replaced by NID when available)
3. Lobby for NIN production resumption through NDHSC and RDIP governance
4. MPI integration with NID platform prepared — when NID available, deterministic matching rate jumps from ~50% to target >90%

**Residual Risk:** Low for health operations; medium for data quality (probabilistic matching produces ~2% false positive rate vs. near-zero for deterministic).

#### Scenario E: Global Fund NFM5 Does Not Include Adequate Digital Health Component

**Impact:** Funding gap for Wave 2 laboratory, surveillance, and supply chain system scaling. W2-05 (LIS), W2-06 (IDSR+), and W2-04 (EIR) partially unfunded.

**Fallback Plan:**
1. Prepare strong digital health investment case for NFM5 country dialogue (begin preparation in 2026)
2. Alternative bilateral funding (USAID, DFID, GIZ) for laboratory and surveillance digitisation
3. Reduce scope — deploy LIS at national reference lab only; delay regional expansion to Wave 3
4. Co-finance from RDIP interoperability component where applicable

**Residual Risk:** Medium. Global Fund increasingly recognises digital health as RSSH investment, but allocation is not guaranteed.

### 4.6.4 Consolidated Dependency Map (Text Diagram)

```
CROSS-SECTORAL INPUTS                         MoH ROADMAP                                OUTCOMES
═══════════════════                           ══════════════                              ═════════

RDIP G-Cloud ───────────────┐
   (target 2027)            │
                            ├──→ W2-07 G-Cloud Migration ──→ Sovereign hosting
RDIP Broadband ─────────────┤                                     │
   (2025–2028)              ├──→ W1-08 → W2-02/04/06 ──→ EHR/EIR/IDSR+ at scale
                            │                                     │
eCRVS API ──────────────────┼──→ W1-06 → W2-01 ──→ Integration flows (4–5 live)
   (Civitas Group)          │         │                           │
                            │         └──→ W2-03 e-NHIS ──→ 60,000+ beneficiaries
NID Platform ───────────────┼──→ W1-05 MPI → W2-01 ──→ Patient identity maturity
   (RDIP, 2026–2028)        │                                     │
                            │                                     ▼
Data Protection Act ────────┼──→ W1-03 → W2-08 ──→ FHIR standards + governance
   (National Assembly)      │                                     │
                            │                                     ▼
Global Fund NFM4→NFM5 ─────┼──→ W2-04/05/06 ──→ EIR + LIS + IDSR+
                            │                                     │
GAVI next cycle ────────────┼──→ W2-04 ──→ SPT→EIR transition    │
                            │                                     │
Gov't Budget ───────────────┼──→ W2-09 workforce ──→ DHDD 14 staff │
   (progressive increase)   │         │                           │
                            │         ▼                           ▼
                            └──→ W3-06 Sustainability ──→ ≥50% gov't funded (2033)
                                      │
                                      └──→ National Digital Master Plan alignment
```

### 4.6.5 Dependency Risk Summary Matrix

| Dependency | Probability of Delay | Impact | Fallback Available | Net Risk |
|-----------|---------------------|--------|-------------------|----------|
| G-Cloud delivery | High (60%) | Critical | Yes — extended interim hosting | **Medium** |
| Broadband <30 facilities | High (50%) | Critical | Yes — offline-first + 4G bridge | **Medium** |
| eCRVS API | High (70%) | Critical | Yes — batch exchange | **Low–Medium** |
| NID Platform | High (60%) | High | Yes — multi-identifier MPI | **Low** |
| Data Protection Act | High (70%) | High | Yes — MoH interim framework | **Low** |
| Global Fund NFM5 digital health | Medium (40%) | High | Partial — bilateral donors | **Medium** |
| Gov't Service Bus | Medium (50%) | Medium | Yes — independent MoH HIE | **Low** |
| Second submarine cable | Medium (40%) | Medium | Yes — operational workaround | **Low** |

The roadmap is deliberately designed to be resilient to the most probable cross-sectoral delays. No single external dependency, if delayed, blocks the entire roadmap. The combination of fallback plans and offline-first design principles ensures that MoH can make progress even under adverse conditions, with full acceleration when cross-sectoral deliverables arrive.

---

*End of Sections 4.3–4.6 — Wave 2 and Wave 3 Plans, Visual Roadmap, and Dependency Map*
*Section 5 (Investment Requirements) continues in Task 07.*

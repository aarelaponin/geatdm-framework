# D6-S02 Patch: Sections 2.5 and 2.6

**Purpose:** Constraints, Assumptions, and Dependencies on National/Cross-Sectoral Infrastructure
**Patch Point:** Appended after Section 2.4 (Key Design Decisions and Rationale)
**Instructions:** Insert after the completed design decisions table (DD-01 through DD-12).

---

## 2.5 Constraints and Assumptions

The target architecture described in this document is designed within a clearly defined set of constraints — factors that bound what is achievable and that shape every design decision from platform selection to implementation sequencing. Recognising these constraints explicitly is not an expression of pessimism but an act of architectural discipline: an architecture that ignores the operating environment it must function within is an architecture that will fail in deployment. The constraints identified below are drawn from the current state assessment (D5), validated through stakeholder engagement, and cross-referenced against available programme documentation.

The constraints are organised into six categories, followed by the assumptions on which the architecture depends. The summary table below provides a quick reference before the narrative discussion.

| Category | Key Constraint | Architectural Implication |
|----------|---------------|--------------------------|
| Infrastructure | ~60% national electricity access; single submarine cable at mid-life | Offline-first design mandatory; UPS/solar provisioning at all EHR facilities; data synchronisation protocols required |
| Infrastructure | Limited rural broadband; RDIP expansion timeline uncertain | Satellite connectivity (EHSSP) as interim bridge; progressive rollout tied to connectivity availability |
| Human Capacity | Limited MoH ICT staff; no dedicated health informatics capacity | Conservative phasing; maximum 1–2 new system deployments per year; training absorption ceiling |
| Financial | Near-total donor dependence for digital health; no dedicated budget line | Sustainability planning embedded in every component; open-source preference; operational cost modelling required |
| Legal/Regulatory | No data protection law; no eHealth legislation; CRVS Bill pending | Sovereign hosting as compensating control; ministerial-level data governance as interim framework |
| Timeline | RDIP G-Cloud target 2027; EHSSP closing date; key investments needed 2025–2028 | Dual-mode architecture (interim + target); phased dependency management |

### Infrastructure Constraints

Progressa's digital infrastructure presents the most significant constraints on health system architecture. These are not temporary conditions but structural features of the operating environment that will persist for much of the architecture's validity period.

**Electricity access.** The national electricity access rate stands at ~60%, with reliability significantly lower in rural areas where many health facilities operate. This single statistic shapes the entire architecture more than any other factor. Facility-level systems — EHR, EIR, offline claims processing — must function during power outages that may last hours or days. The architectural response is threefold: all facility-level systems must implement offline-first design with local data storage; every facility selected for EHR deployment must have a functioning UPS (minimum four hours) and, where grid reliability is below 80%, solar power provisioning; and data synchronisation protocols must handle extended offline periods with robust conflict resolution. The EU/European Investment Bank has announced plans for renewable energy at all public health facilities, but the timeline and coverage remain unconfirmed.

**International connectivity.** Progressa depends on a single regional fibre-optic submarine cable, which is halfway through its technical lifespan with approximately four years of legal lifespan remaining. The cable has a documented history of frequent damages and disruptions. A terrestrial backup through a neighbouring country exists but offers limited bandwidth. The World Bank has allocated about USD 30 million for a second submarine cable under RDIP, but deployment is not yet complete. Until redundancy is established, any architecture that assumes continuous, high-bandwidth international connectivity is unreliable. Cloud services hosted outside Progressa, real-time synchronisation with international platforms, and large-scale data transfers are all subject to interruption. The sovereign hosting decision (DD-11) and the offline-first principle (HP-03) are direct responses to this vulnerability.

**Rural broadband and internet coverage.** Internet penetration stands at approximately 60% of the population, with mobile internet at ~70% and fixed broadband at only ~40,000 subscribers nationally. Coverage is heavily concentrated in the capital region. Rural health facilities — where a substantial portion of primary health care is delivered — have limited or no internet connectivity. RDIP's broadband expansion component will progressively address this, but the rollout timeline across all seven administrative regions is uncertain. In the interim, the EHSSP project has deployed satellite connectivity at selected health facilities, and mobile data networks (with ~80% mobile phone ownership and about 4 million cellular connections) provide a partial alternative. The architecture prioritises facility selection for EHR deployment based on verified connectivity status, and designs all facility-level workflows to function with intermittent connectivity rather than depending on always-on broadband.

**Satellite connectivity.** EHSSP has funded satellite connectivity at selected health facilities, providing an interim bridge for locations without terrestrial broadband. While this is a significant enabler, satellite connectivity carries inherent limitations: higher latency (500–600ms round-trip typical for geostationary systems), bandwidth constraints compared to fibre, weather sensitivity, and per-megabyte costs that make large data transfers expensive. The architecture uses satellite connectivity for critical synchronisation flows (EHR data sync, surveillance case notifications, claims submission) while keeping bulk data operations (software updates, analytics data transfers) for scheduled off-peak windows or for periods when terrestrial connectivity is available.

### Human Capacity Constraints

Human capacity is the constraint most likely to determine the pace of implementation, regardless of funding or infrastructure availability.

**MoH ICT staffing.** The Ministry of Health operates its entire digital health ecosystem with a severely constrained ICT workforce. Digital health units are fragmented across separate teams managing DHIS2, eCRVS, e-NHIS, A-LIS, and SPT, with limited coordination between them. There is no dedicated health informatics unit, no enterprise architect, and no integration specialist within MoH. The Directorate of Planning and Information holds custody of DHIS2 operations, but this represents data management rather than systems architecture or integration capability. The current staffing model relies heavily on project-funded technical assistance — WHO advisors, GAVI consultants, Vaxa Foundation support for SPT — which creates capability that disappears when project funding ends.

**DHIS2 expertise concentration.** Advanced DHIS2 skills — configuration, metadata management, indicator design, Tracker programme setup, API development — are concentrated in a small number of individuals. While ~90% of facilities have IDSR-trained focal persons and basic DHIS2 data entry is widely understood, the system administration and development capacity that would be needed to configure DHIS2 Tracker for case-based surveillance, build FHIR interfaces, or manage metadata governance rests with very few staff. Loss of any one of these individuals would create an immediate operational risk.

**No health informatics capacity.** Progressa currently has zero dedicated health informaticians within MoH — professionals trained at the intersection of health science, information science, and computer science. This gap means that the Ministry lacks the internal capacity to evaluate health information standards (FHIR, ICD-11, LOINC, SNOMED CT), design clinical workflows for electronic systems, manage terminology services, or lead interoperability initiatives without external technical assistance. Building this capacity is a multi-year endeavour that requires university-level training programmes, professional development pathways, and competitive remuneration to retain trained staff.

**Training absorption capacity.** Even with unlimited funding, MoH cannot deploy multiple new systems simultaneously. Each new system — whether EHR, eLMIS, DHIS2 Tracker for surveillance, or offline claims processing — requires training of health workers who are already managing heavy clinical workloads. The 2022 survey showing ~90% healthcare professional readiness for digital tools is encouraging, but readiness and capacity are different things. The architecture enforces a strict principle of sequential deployment: no more than one major new system introduction per facility per year, with a minimum stabilisation period of six months before the next system is introduced.

### Financial Constraints

Progressa's digital health investment landscape is characterised by substantial but time-bound external funding with minimal domestic resource mobilisation for digital health.

**Donor dependence.** Virtually all digital health investment in Progressa is externally funded. EHSSP (mostly IDA, within a total of about USD 100–150 million), RDIP (USD 50 million Progressa allocation), Global Fund, GAVI, WHO, and bilateral partners provide the capital and technical resources for system development, infrastructure deployment, and capacity building. MoH's recurrent budget does not include a dedicated line for digital health operations, maintenance, or staff. This creates a fundamental sustainability risk: systems built with project funding require operational budgets that the government has not yet committed to provide.

**Time-bound funding windows.** The active investment window for digital health is concentrated between 2024 and 2028, corresponding to the RDIP programme period and the extended EHSSP timeline. EHSSP's original closing date was August 2025, with Additional Financing 3 (AF3) extending resource availability. After these programmes close, the funding for system maintenance, hardware replacement, hosting costs, training refresher courses, and technical support must come from domestic sources or successor programmes that are not yet confirmed. The architecture must ensure that every component deployed during the active funding period has a credible sustainability pathway.

**Sustainability gap.** International benchmarks suggest that digital health operations require approximately 3–5% of the health budget for sustained effectiveness. Progressa does not currently allocate a percentage of the health budget to digital health. The gap between project-funded implementation and sustained operations is the single greatest risk to the long-term viability of this architecture. The sustainability planning principle (HP-10) and the requirement for operational cost modelling in D7 are direct responses to this risk.

### Legal and Regulatory Constraints

**Data protection.** Progressa currently has no comprehensive data protection law in force. The CRVS Bill is pending enactment and would provide a legal basis for civil registration data governance, but broader data protection legislation covering health data, consent frameworks, and cross-border data transfers does not exist. The Cyber Security Bill is also in formulation. This legal vacuum creates uncertainty around the permissibility of health data sharing between systems, the requirements for patient consent, the liability framework for data breaches, and the conditions under which health data may be used for research or analytics. The sovereign hosting decision (DD-11) serves as a compensating control — by keeping all identifiable health data on nationally controlled infrastructure, the architecture mitigates the risk of data leaving the jurisdiction in the absence of legal protections.

**No eHealth legislation.** There is no dedicated eHealth or digital health legislation in Progressa. This means there is no legal framework governing the validity of electronic health records (whether a digital clinical record carries the same legal weight as a paper record), the standards for health data exchange, the obligations of health data custodians, or the governance of health information systems. The national health sector policy and the HMIS policy provide policy direction, but policy is not legislation. This constrains the architecture's ability to mandate data sharing between systems — each integration must be established through institutional agreements rather than legal obligations.

**Health data sharing policies.** No formal health data sharing agreements exist between MoH directorates, between MoH and NHIA, or between MoH and other government ministries (MoF for health financing data, PDGA for infrastructure services). The eCRVS-NHIS integration planned for August 2025 will require such an agreement but, at the time of writing, no formal data sharing protocol has been established. The architecture proposes a MoH-internal data governance framework (Section 4) as an interim measure, but cross-ministerial data sharing will ultimately require either legislation or formal inter-ministerial memoranda of understanding.

**Regional and international obligations.** Progressa is a member of REC and participates in RHO (Regional Health Organisation) health data reporting. International Health Regulations (IHR) require timely disease notification. These obligations create requirements for cross-border health data exchange that are not yet formally addressed in national law or policy. The architecture accommodates these requirements through FHIR-based exchange interfaces and ICD-11/IDSR standards alignment, but the legal basis for routine cross-border health data sharing remains undefined.

### Timeline Constraints

**RDIP infrastructure delivery.** The architecture's target state assumes the availability of RDIP-delivered infrastructure: G-Cloud sovereign cloud (target 2027), national broadband backbone (progressive rollout 2026–2028), Government Service Bus (target 2027–2028), and digital identity platform (target 2026–2027). These timelines are projections based on current programme schedules, but large-scale infrastructure projects in Progressa's context are subject to procurement delays, construction challenges, and institutional readiness requirements. Delays in any RDIP component directly impact MoH's ability to transition from interim to target hosting, connectivity, and integration arrangements.

**EHSSP closing and AF3 timeline.** EHSSP's original closing date was August 2025. Additional Financing 3 extends the resource envelope, but the precise terms, scope, and timeline of AF3-funded digital health activities are subject to World Bank approval processes. Several key digital health investments — eCRVS-NHIS integration, eLMIS scale-up, satellite connectivity expansion — depend on EHSSP funding availability beyond the original closing date.

**Critical investment window.** The architecture has an eight-year validity period (2025–2033), but the first three years (2025–2028) are critical. This is the period when foundational components — the HIE, the MPI, the EHR pilot, eCRVS-NHIS integration, DHIS2 Tracker configuration — must be established. These components depend on the active investment period of both RDIP and EHSSP. If foundational investments are delayed beyond 2028, the 2033 targets become unachievable regardless of subsequent funding.

### Assumptions

The following assumptions underpin the target architecture. Each assumption is testable and should be reviewed at the scheduled architecture review points (2027, 2029, 2031). If any assumption proves invalid, the affected architectural components must be re-evaluated.

**Infrastructure Assumptions:**

1. **RDIP delivers G-Cloud by 2027.** The RDIP Tier 4 national data centre and G-Cloud sovereign cloud platform will reach operational readiness sufficient to host MoH health information systems by the end of 2027, enabling transition from interim hosting arrangements.

2. **Broadband expansion reaches regional health centres by 2028.** RDIP-funded broadband infrastructure will provide reliable connectivity to regional health centres and district hospitals in at least five of seven administrative regions by 2028, enabling progressive expansion of online-capable health system deployments.

3. **Second submarine cable operational by 2027.** The World Bank-funded second submarine cable (about USD 30 million) will be deployed and operational by 2027, providing international connectivity redundancy that reduces the risk of prolonged internet outages.

4. **Satellite connectivity maintained at EHSSP-equipped facilities.** The satellite connectivity installed at health facilities under EHSSP will remain operational and funded through the architecture validity period, providing a connectivity bridge for facilities not yet reached by terrestrial broadband.

**Funding Assumptions:**

5. **EHSSP AF3 extends digital health funding.** Additional Financing 3 for the Essential Health Services Strengthening Project will extend funding availability for digital health components (eCRVS scale-up, NHIS digitalisation, eLMIS deployment, health workforce digital capacity building) beyond the original August 2025 closing date.

6. **WHO and GAVI continue technical assistance.** WHO country cooperation strategy funding and GAVI support for immunisation data systems will continue through their current programme cycles, providing technical assistance and co-financing for HIE development, DHIS2 Tracker configuration, and EIR transition.

7. **Government commits digital health operational budget by 2028.** The Government of Progressa, through MoF and MoH, will establish a recurrent budget allocation for digital health operations (targeting 3–5% of the health budget) before the primary donor funding windows close, ensuring sustainability of systems deployed during the active investment period.

**Policy and Legal Assumptions:**

8. **Data protection legislation enacted by 2027.** Comprehensive data protection legislation — building on the pending CRVS Bill and the Cyber Security Bill under formulation — will be enacted and an enforcement framework established by 2027, providing the legal basis for health data governance, patient consent, and cross-border data exchange.

9. **Digital health governance structure established by 2026.** A National Digital Health Steering Committee (or equivalent governance body), endorsed by MoH leadership and including MoDE/PDGA, development partners, and clinical stakeholders, will be operational by 2026 to provide strategic oversight, standards approval, and investment coordination for digital health.

10. **eHealth strategy developed and adopted.** A comprehensive national eHealth or digital health strategy, aligned with this architecture and the National Health Sector Strategic Plan, will be developed and formally adopted by the Government by 2027.

**Capacity Assumptions:**

11. **MoH recruits and retains 3–5 additional ICT staff.** The Ministry of Health will recruit, train, and retain a minimum of three to five additional ICT professionals (systems administrator, health informatician, integration specialist, data analyst, help desk/support) within the Directorate of Planning and Information or a reconstituted digital health unit by 2027.

12. **Training programmes sustained beyond project funding.** Digital health training programmes for health workers (DHIS2, EHR, eLMIS, offline claims processing) will be institutionalised within MoH's continuing professional development framework rather than relying exclusively on project-funded training events.

**Technology Assumptions:**

13. **Core platforms continue active development.** The open-source platforms selected for this architecture — DHIS2, OpenMRS, OpenHIM, OpenCR, OpenLMIS — will continue to receive active development, security patches, and community support throughout the architecture validity period (2025–2033).

14. **FHIR R4 remains the prevailing health interoperability standard.** HL7 FHIR R4 will remain the dominant health data exchange standard through the architecture validity period, with backward compatibility maintained in any future FHIR releases.

15. **eCRVS NIN achieves 80%+ population coverage by 2028.** The eCRVS system, currently at ~50% population coverage, will expand to at least 80% coverage by 2028 through continued registration activities, making the NIN a viable foundational identifier for the Master Patient Index.

---

## 2.6 Dependencies on National and Cross-Sectoral Infrastructure

The MoH target architecture does not exist in isolation. It depends on national infrastructure, shared platforms, and cross-sectoral services that are being developed under RDIP and other government programmes. These dependencies are among the most significant risk factors for the architecture: if a national platform is delayed, the MoH architecture must function without it. This section identifies each dependency, assesses its expected timeline and impact, and specifies the interim strategy that MoH will follow until the national capability is available.

The dependency table below provides a consolidated view, followed by narrative discussion of each dependency.

| # | Dependency | Provider | Expected Timeline | Impact if Delayed | MoH Interim Strategy |
|---|-----------|----------|-------------------|-------------------|---------------------|
| 1 | RDIP Sovereign Cloud (G-Cloud) | MoDE / PDGA / RDIP | 2027 | MoH cannot migrate to sovereign infrastructure; identifiable health data remains on interim hosting with elevated security risk | MoH-managed hosting at existing ProgTel/e-Government data centre with enhanced access controls, encryption, and backup procedures |
| 2 | National Digital Identity Platform | MoDE / Immigration / PDGA | 2026–2027 | Patient identity verification relies solely on eCRVS NIN; no cross-government identity federation | eCRVS NIN as primary health identifier via OpenCR MPI; facility-level MRNs as fallback; probabilistic matching for patients without NIN |
| 3 | National Broadband Backbone | MoDE / ProgTel / RDIP | 2026–2028 (progressive) | EHR and online system deployment limited to facilities with existing connectivity; rural facilities remain offline-dependent | Offline-first system design; EHSSP satellite connectivity at priority facilities; mobile data connectivity for critical transactions; facility prioritisation based on verified connectivity |
| 4 | Government Service Bus / Interoperability Platform | MoDE / PDGA / RDIP | 2027–2028 | MoH cannot route cross-ministry data flows through a national integration layer; each integration requires bilateral arrangement | MoH-managed OpenHIM as the health sector HIE; point-to-point integrations with IFMIS and HRMIS; designed to register as a domain on the national service bus when available |
| 5 | ProgressaPay / National Payment Platform | MoF / AGD / CBP | Operational (limited adoption) | Health insurance premium collection and provider payments lack a standardised government payment channel | e-NHIS direct banking integration for claims settlement; mobile money partnerships (leveraging ~80% mobile phone ownership) for premium collection; ProgressaPay integration when health sector onboarding is facilitated |
| 6 | National Data Protection Framework | Attorney General / MoDE | 2027 (uncertain) | No legal basis for health data sharing, patient consent framework, or cross-border data exchange; limits MoH's ability to mandate system integration | Ministerial data sharing protocols between MoH directorates; MoH-internal data governance framework with classification, access controls, and audit logging; data protection by design in all new systems |

### Dependency 1: RDIP Sovereign Cloud (G-Cloud)

The RDIP programme includes the establishment of a Tier 3/4 national data centre and a Government Cloud (G-Cloud) platform, designed as a hub-and-spoke architecture with a central hardened load balancer cluster and isolated per-capability spokes. MoH is positioned as an isolated spoke within this architecture, hosting its major health information systems (DHIS2, eCRVS health data, e-NHIS, OpenMRS, OpenHIM, OpenCR) in dedicated Kubernetes-based environments.

The G-Cloud is targeted for operational readiness by 2027. If delivered on schedule, it provides MoH with enterprise-grade hosting including redundant power, physical security, network isolation, automated backup, and infrastructure-as-code operations — capabilities that far exceed what is available through current hosting arrangements. The sovereignty guarantee ensures that all identifiable health data remains under national jurisdiction, which is particularly important given the absence of a data protection law.

If G-Cloud delivery is delayed, MoH will continue operating on interim hosting at the existing ProgTel Private Cloud Data Centre and the Government e-Government Mini Data Centre. The interim hosting strategy includes enhanced security controls (encryption at rest and in transit, multi-factor authentication for administrative access, regular security audits), a defined backup and disaster recovery procedure, and contractual hosting agreements with ProgTel that specify data residency and access conditions. The interim arrangement is adequate for the initial deployment phase (HIE pilot, MPI establishment, early EHR deployment) but is not suitable for the full target state, which requires the reliability, scalability, and isolation guarantees of the G-Cloud spoke model.

The transition from interim to G-Cloud hosting is designed as a non-disruptive migration. Systems will be containerised from the outset (Docker/Kubernetes), enabling migration from interim infrastructure to G-Cloud through container orchestration rather than system reinstallation. The architecture specifies that no system may be deployed in a hosting configuration that cannot be migrated to the G-Cloud spoke model without redesign.

### Dependency 2: National Digital Identity Platform

A unified national digital identity platform — potentially based on the National Identification System unification infrastructure referenced in the RDIP technology roadmap — would provide a single, authoritative source of identity for all government interactions, including health services. This would resolve the current fragmentation between the eCRVS National Identification Number and the Immigration Department's NIN, which are not synchronised.

MoH needs reliable patient identity verification for multiple purposes: linking a child's birth record (eCRVS) to their immunisation record (SPT/EIR) to their clinical encounters (EHR) to their insurance enrollment (e-NHIS). Without a unified national identity, MoH must operate its own identity reconciliation mechanism.

The interim strategy is the OpenCR-based Master Patient Index (DD-02), which uses the eCRVS NIN as the foundational identifier while accepting and reconciling secondary identifiers (Immigration NIN, facility medical record numbers, e-NHIS beneficiary IDs). OpenCR provides both deterministic matching (exact NIN match) and probabilistic matching (demographic matching for patients who present without a NIN) to create a unified patient identity within the health sector even in the absence of a national identity platform. When the national platform becomes available, the MPI will federate with it, using the national identity as the authoritative root and retiring the health-sector-specific reconciliation logic.

### Dependency 3: National Broadband Backbone

RDIP's connectivity component includes broadband infrastructure expansion across Progressa's regions. For MoH, broadband connectivity at health facilities is the gating factor for online system deployment — facilities without reliable internet cannot operate an EHR in online mode, cannot submit real-time surveillance notifications, and cannot process insurance claims electronically.

The progressive rollout expected between 2026 and 2028 means that connectivity will arrive at different facilities at different times. The architecture accommodates this through a facility tiering approach: Tier 1 facilities (regional hospitals and high-volume urban health centres with existing broadband) receive EHR and online systems first; Tier 2 facilities (district hospitals and health centres expected to receive RDIP broadband by 2027) are scheduled for the second deployment wave; Tier 3 facilities (rural health posts and minor health centres dependent on satellite or mobile connectivity) operate with offline-first tools and batch synchronisation.

If broadband expansion is delayed, the architecture does not stall. The offline-first design principle (HP-03) ensures that every facility-level system functions without internet connectivity. Satellite connectivity from EHSSP and mobile data networks provide minimum viable connectivity for critical synchronisation flows. The deployment schedule adjusts — more facilities remain in Tier 2 or Tier 3 longer — but the architectural components themselves do not require modification.

### Dependency 4: Government Service Bus / Interoperability Platform

The RDIP programme envisions a national Government Service Bus and interoperability platform that would serve as the central integration layer for all government-to-government data exchange. This platform would provide API gateway services, message routing, protocol mediation, and security enforcement for cross-ministry interactions — for example, MoH requesting budget execution data from IFMIS, or MoF receiving health expenditure reports from MoH.

The national interoperability platform is expected to reach operational status in 2027–2028. Until then, MoH cannot rely on a shared government integration layer for cross-ministry data flows.

The interim strategy positions OpenHIM as the health sector's interoperability layer. OpenHIM manages all intra-MoH data exchange (between DHIS2, eCRVS, e-NHIS, OpenMRS, A-LIS, and OpenLMIS) and mediates the limited cross-ministry integrations required in the near term (IFMIS health budget reporting, HRMIS health workforce data). OpenHIM is designed to function as a domain-level mediator that can register with the national Government Service Bus when it becomes available — effectively becoming the health sector's gateway to the national integration platform. This design avoids two failure modes: building a health-specific integration layer that duplicates and conflicts with the national platform, and deferring all integration until the national platform is ready.

### Dependency 5: ProgressaPay / National Payment Platform

ProgressaPay is the Government of Progressa's central payment gateway, managed by the Accountant General's Department under MoF. It is fully operational for the IFMIS-to-banking chain and rated at API Maturity Level 4 (the highest in government). However, MoH has not yet onboarded to ProgressaPay for health-specific payment flows.

MoH needs digital payment capabilities for two primary use cases: health insurance premium collection from beneficiaries (particularly mobile and community-based enrollment) and provider payment processing for claims settlement under the NHIS. The e-NHIS currently processes claims through direct banking arrangements with contracted facilities.

The interim strategy proceeds on two tracks. For claims settlement, the existing e-NHIS banking integration continues to operate, with a planned transition to ProgressaPay-mediated provider payments when the NHIA onboards to the platform (this requires ProgressaPay API adaptation for health insurance claim workflows, which is a joint NHIA-AGD initiative). For premium collection — particularly for the mobile-first enrollment strategy targeting the ~80% mobile phone ownership rate — mobile money partnerships provide the immediate channel, with ProgressaPay integration as the medium-term objective. The architecture specifies FHIR-based Claim and Coverage resources within the HIE, which can route to either direct banking channels or ProgressaPay depending on the integration status at the time of deployment.

### Dependency 6: National Data Protection Framework

A national data protection framework — comprising legislation, an enforcement authority, and operational regulations — provides the legal foundation for health data sharing, patient consent management, and cross-border data exchange. Without it, every health data integration operates in a legal grey area.

MoH needs this framework to mandate data sharing between its own directorates and agencies (NHIA is semi-autonomous), to establish patient consent protocols for the EHR and the MPI, to define the conditions under which de-identified health data may be shared for research or analytics, and to comply with regional obligations (REC data protection harmonisation, RHO health data reporting requirements).

The interim strategy creates an MoH-internal data governance framework that operates within the Ministry's existing legal authority. This framework includes a health data classification scheme (public, internal, confidential, restricted), role-based access controls for all health information systems, audit logging for data access and sharing, data sharing agreements between MoH directorates and with NHIA, and data protection by design requirements for all new system deployments. The framework is designed to be subsumed into the national data protection regime when legislation is enacted, not to create a parallel or conflicting governance structure.

### The Dual-Mode Architecture Concept

The dependency analysis reveals a consistent pattern: the target architecture depends on national platforms that are planned but not yet delivered, while the health sector has urgent needs that cannot wait for those platforms to arrive. The architectural response to this pattern is a deliberate dual-mode design.

The **target mode** is the architecture's intended steady state. It leverages the full suite of RDIP-delivered national infrastructure: G-Cloud sovereign hosting, national broadband connectivity, Government Service Bus for cross-ministry integration, a unified national digital identity, ProgressaPay for health payment flows, and a comprehensive data protection framework. In target mode, MoH systems operate as a federated domain within the national digital architecture, sharing platforms and services with all government ministries while maintaining health-sector-specific capabilities.

The **interim mode** is the architecture's operating state during the transition period while national infrastructure is being delivered (approximately 2025–2028). In interim mode, MoH operates its health information ecosystem using: interim hosting on existing ProgTel and e-Government infrastructure, offline-first designs with satellite and mobile connectivity, OpenHIM as a self-contained health sector HIE, the OpenCR-based MPI with eCRVS NIN as the primary identifier, direct bilateral integrations for the limited cross-ministry data flows required, and a ministerial data governance framework operating within MoH's existing administrative authority.

The critical design requirement is that the transition from interim to target mode is non-disruptive. Systems deployed in interim mode must migrate to target mode without re-implementation. This is achieved through three mechanisms: containerised deployments that migrate between hosting environments, standards-based integration interfaces (FHIR, ADX) that work identically through OpenHIM or through the national Government Service Bus, and a modular architecture where each component (HIE, MPI, EHR, EIR) can transition independently rather than requiring a simultaneous "big bang" migration.

The dual-mode approach ensures that MoH can begin realising the benefits of digital health integration — starting with the HIE pilot, the MPI, eCRVS-NHIS integration, and the EHR at priority facilities — without waiting for the full national infrastructure to materialise. It also protects against the risk that RDIP timelines slip: if the G-Cloud is delayed by a year, MoH continues operating in interim mode with no loss of functionality, only a deferral of the performance and security improvements that the target infrastructure provides.

---

*End of Section 2.5 and 2.6 patch*

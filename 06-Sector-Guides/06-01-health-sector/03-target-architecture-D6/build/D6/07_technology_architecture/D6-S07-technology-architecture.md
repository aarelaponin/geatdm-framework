# 7. Technology Architecture (To-Be)

## 7.1 Infrastructure Architecture

### 7.1.1 Strategic Context

The technology infrastructure underpinning Progressa's health information ecosystem must be designed against a backdrop of severe constraints: ~60% national electricity access, dependence on a single submarine cable halfway through its operational lifespan, no Tier 3 or Tier 4 national data centre, and an ICT staffing base within MoH that currently numbers fewer than ten people across all digital health systems. At the same time, an unprecedented convergence of infrastructure investment — RDIP's USD 50 million for digital infrastructure, EHSSP's health-sector digitisation components, and planned EU/EIB renewable energy installations at health facilities — creates a realistic pathway to a fundamentally different technology landscape by 2030.

This section defines the target infrastructure architecture for the period 2025–2033, designed to function in two modes: an interim architecture that operates with existing infrastructure while RDIP components are delivered, and a full target state that leverages the planned national data centre, broadband backbone, sovereign cloud platform, and digital identity infrastructure. Every design decision prioritises offline-first operation, open-source portability, and minimal operational complexity, reflecting the Ministry's current capacity and the country's infrastructure realities.

### 7.1.2 Sovereign Cloud Strategy

Progressa's national sovereign cloud strategy, as defined in the GovStack-aligned cloud architecture plan, adopts a hub-and-spoke deployment model. This model has direct implications for how MoH systems are hosted, isolated, and interconnected.

**Hub-and-Spoke Model.** A central hardened load balancer cluster — built on the Envoy proxy — serves as the single controlled public entry point for all government digital services. This hub is the only component visible to the public internet. From the hub, secure internal pathways connect to isolated per-capability clusters (spokes), each hosting a ministry or system in its own independent environment. The primary strategic benefit is that all security monitoring, policy enforcement, and access control concentrate at a single, hardened point, dramatically simplifying security management and minimising the public-facing attack surface.

**MoH as an Isolated Spoke.** Within this model, the Ministry of Health operates as one isolated spoke. Each major MoH system — DHIS2, eCRVS/CIVIS, e-NHIS, OpenHIM (HIE), OpenCR (MPI), and future OpenMRS instances — runs in its own logically separated environment within the MoH spoke. This isolation-by-design principle ensures that a failure or security incident in one health system does not propagate to others. Inter-system communication within the MoH spoke is mediated through the OpenHIM interoperability layer, which itself communicates with the hub's API Gateway for cross-ministry data exchanges (such as ProgressaPay payment processing or IFMIS financial reporting).

**Shared Cross-Cutting Services.** Two cross-cutting "digital glue" services span the hub-and-spoke architecture and are consumed by MoH systems: (1) Identity and Access Management / Single Sign-On (IAM/SSO), which provides unified authentication for government staff accessing health systems, and (2) the API Gateway / Information Mediator, which governs cross-ministry data exchange, complementing OpenHIM's role as the health-sector-specific interoperability layer.

### 7.1.3 Sovereignty Principles for Health Data

Health data carries particular sensitivity due to the intimate nature of clinical information and the vulnerability of patient populations. The architecture applies a tiered sovereignty model:

**Sovereign infrastructure (mandatory).** All data that can identify a patient — electronic health records, MPI records, eCRVS birth/death registrations, e-NHIS enrollment and claims data, individual immunisation records, laboratory results linked to named patients, and clinical encounter data — must reside on nationally controlled sovereign infrastructure. This means the RDIP-funded G-Cloud platform once operational, and the existing ProgTel/e-Government data centre facilities in the interim period. No identifiable health data may be hosted on public cloud infrastructure outside Progressa's jurisdiction.

**Hybrid cloud (permitted for specific workloads).** De-identified aggregate health statistics (DHIS2 indicator summaries without patient-level data), anonymised analytics datasets prepared for research, development and staging environments using synthetic data, training and capacity-building platforms, and static content such as reference documentation and terminology code sets may be hosted on carefully scoped public cloud infrastructure, provided that de-identification is performed prior to transfer and that data classification review is completed by the Digital Health and Data Directorate (DHDD) before any workload is placed on non-sovereign infrastructure.

**On-premises and local devices (required at facility level).** Facility-level systems — EMR instances on local tablets or low-power servers, immunisation scanning stations, laboratory workstations — must store data locally with synchronisation to central sovereign infrastructure when connectivity permits. This is not a compromise; it is a deliberate architectural requirement driven by the offline-first principle.

### 7.1.4 RDIP Infrastructure Dependencies

The target technology architecture depends on six RDIP-funded infrastructure components, each at different stages of planning and delivery:

| Dependency | Description | Planned Delivery | Impact on MoH Architecture |
|---|---|---|---|
| National Data Centre | Tier 3/4 facility to host G-Cloud platform and all sovereign workloads | 2026–2027 (construction) | Provides primary hosting for all central MoH systems; eliminates reliance on ageing ProgTel infrastructure |
| Broadband Backbone | Terrestrial fibre-optic backbone connecting all administrative regions | 2025–2027 (phased rollout) | Enables reliable facility-to-central connectivity; reduces satellite dependency for health data synchronisation |
| Last-Mile Connectivity | Extension of broadband to health facilities and community access points | 2027–2028 | Transforms facility-level systems from predominantly offline to connected; enables real-time data exchange |
| Second Submarine Cable | International connectivity redundancy (about USD 30 million allocation) | 2027–2028 | Eliminates the single point of failure that currently threatens all internet-dependent health services |
| G-Cloud Platform | Sovereign Cloud Stack (SCS)-aligned Kubernetes-based cloud platform | 2027 target | Target deployment environment for containerised health applications (OpenHIM, OpenCR, DHIS2, future OpenMRS central) |
| Digital ID Platform | National digital identity infrastructure | 2026–2028 | Foundation for unified patient identification via MPI; links eCRVS NIN with Immigration NIN and health facility identifiers |

### 7.1.5 Transitional Hosting Strategy

Given that the RDIP national data centre and G-Cloud platform will not be operational before 2027 at the earliest, all MoH central systems must have viable interim hosting arrangements:

**Current hosting (maintained through 2027).** DHIS2 continues on its existing central server infrastructure managed by the HMIS team within the Directorate of Planning and Information. eCRVS/CIVIS remains on its current Civitas Group hosting arrangement. e-NHIS continues on its current hosting platform. SPT (scanned paper tracking) continues as a cloud-based Vaxa service with regional scanning stations. A-LIS remains on local servers at pilot facilities. These arrangements, while sub-optimal from a sovereignty perspective, are operational and should not be disrupted until the sovereign alternative is ready.

**Transition hosting (2027–2028).** As the national data centre becomes operational, MoH systems migrate to the G-Cloud MoH spoke in a sequenced order: OpenHIM and OpenCR (the HIE core) first, followed by DHIS2 (the most data-intensive health system), then e-NHIS and eCRVS integration endpoints. OpenMRS central services deploy directly to G-Cloud from inception, avoiding any interim hosting step. Each migration includes a parallel-run period of at minimum 60 days, during which both old and new hosting environments operate simultaneously to validate data integrity and performance.

**Risk mitigation.** If RDIP infrastructure delivery is delayed beyond 2028, the architecture must still function. The interim strategy therefore includes: maintaining current hosting contracts with extension options, ensuring all systems are containerised (Docker/Kubernetes-ready) so that migration to G-Cloud requires configuration changes rather than re-architecture, and deploying OpenHIM on interim infrastructure (ProgTel/e-Gov DC or a temporary dedicated server) to begin HIE operations before G-Cloud is available.

---

## 7.2 Network and Connectivity

### 7.2.1 Current State

Health facility connectivity in Progressa operates through a patchwork of arrangements. The EHSSP project has provided satellite-based internet connectivity (VSAT) to many health facilities, particularly in rural areas. This satellite connectivity, while a significant improvement over no connectivity, has inherent limitations: high latency (typically 600–800 milliseconds round-trip), limited bandwidth (typically 1–5 Mbps shared across a facility), weather susceptibility, and high recurring costs. Urban facilities in the capital region generally have access to terrestrial broadband through ProgTel or commercial ISPs, though reliability varies. The national internet backbone depends entirely on the existing submarine cable, which is approximately halfway through its operational lifespan. Disruptions to this cable — which have occurred multiple times in recent years — effectively disconnect the country from the global internet.

Mobile network coverage reaches approximately 80% of the population (primarily 2G/3G with expanding 4G in urban areas), making mobile data a viable supplementary connectivity channel for specific use cases such as USSD-based reporting and SMS notifications.

### 7.2.2 Target Network Architecture

The target connectivity architecture operates in three tiers, mapped to the types of health data exchange required:

**Tier 1: Central-to-Central (data centre to data centre).** High-bandwidth, low-latency connections between the national data centre (hosting the G-Cloud MoH spoke) and partner infrastructure — RDIP broadband backbone interconnects, the API Gateway/Information Mediator for cross-ministry exchanges, and international connectivity for WHO/RHO reporting and software update channels. Target: dedicated fibre links with 1 Gbps capacity and sub-10ms latency within Progressa, with redundant international transit via both the existing submarine cable and the planned second cable.

**Tier 2: Central-to-Facility (data centre to health facility).** The primary channel for synchronising facility-level data (EMR records, immunisation data, laboratory results, insurance claims) with central systems. The target is RDIP terrestrial broadband at all ~90 public health facilities, providing minimum 10 Mbps per facility with sub-50ms latency to the national data centre. Until RDIP broadband reaches a facility, EHSSP satellite connectivity serves as the primary link. Facilities within the capital region that already have terrestrial broadband retain those connections.

**Tier 3: Last-Mile and Community.** Connectivity for community health workers, mobile outreach teams, and patient-facing services. This tier relies on mobile networks (3G/4G data for app-based tools) and USSD/SMS for basic reporting and client communication. Target: all community health workers equipped with mobile devices capable of offline data collection with background synchronisation via mobile data.

### 7.2.3 Offline-First Design Principle

The offline-first principle is not a fallback strategy; it is a foundational design requirement for every system that operates at or below the facility level. The rationale is straightforward: with ~60% national electricity access, a single submarine cable, and variable satellite and terrestrial connectivity, no health facility in Progressa can guarantee uninterrupted internet access. Any system design that requires constant connectivity to function will fail in practice.

**Offline-first means:**

Every facility-level application (EMR, EIR, laboratory workstation, insurance claims tool) must store all data required for clinical operations locally on the device or local server. A clinician must be able to register a patient, record a clinical encounter, administer a vaccination, process an insurance eligibility check (against a locally cached beneficiary list), and enter laboratory results without any network connection.

Synchronisation happens opportunistically. When connectivity is available — whether broadband, satellite, mobile data, or even a physical data transport mechanism — the application automatically synchronises queued transactions with central systems. Synchronisation is bidirectional: local changes push upstream, and updated reference data (formularies, facility registries, beneficiary lists, terminology updates) pull downstream.

Conflict resolution follows explicit rules. When the same record is modified both locally and centrally during an offline period (an uncommon but possible scenario), the system applies last-writer-wins for demographic data, clinical-event-timestamp-wins for clinical data, and flags both versions for human review in ambiguous cases.

Data validation occurs at the point of entry, not at the point of synchronisation. This means facility-level applications must embed business rules (mandatory fields, range checks, referential integrity against local caches of registries) to ensure that data queued for synchronisation meets quality standards before it reaches the central HIE.

### 7.2.4 Rural Connectivity Strategy

For the estimated 40–50% of health facilities that will not have reliable broadband connectivity within the architecture's 2025–2033 validity period, the following progressive enhancement strategy applies:

**Baseline (all facilities, regardless of connectivity).** Offline-capable applications on local devices. Paper registers maintained as backup. Monthly physical data verification visits by regional data officers (existing DHIS2 practice, extended to EMR data where applicable).

**USSD/SMS fallback.** For facilities with mobile network coverage but no internet data, USSD-based reporting channels enable submission of critical indicators: disease surveillance alerts (IDSR immediate notifiable diseases), stock-out notifications (essential medicines), and birth/death registration notifications. These channels integrate with DHIS2 and the HIE through SMS gateway middleware.

**Satellite connectivity (current EHSSP).** Facilities with VSAT connectivity can synchronise daily, with data batched during offline periods and transmitted during scheduled connectivity windows. Bandwidth-conscious application design is essential: synchronisation payloads must be compressed, delta-only (sending only changes since last sync), and prioritised (surveillance alerts before routine aggregate data).

**Terrestrial broadband (RDIP target).** As RDIP extends fibre to facilities, those facilities transition from batch synchronisation to near-real-time exchange, enabling use cases that require low latency — real-time insurance eligibility verification, immediate laboratory result notification, and live dashboard updates.

### 7.2.5 Bandwidth Planning

Different health applications have different connectivity requirements. The following table provides indicative bandwidth needs to inform infrastructure planning:

| Application | Minimum Bandwidth | Acceptable Latency | Offline-Capable | Connectivity Tier |
|---|---|---|---|---|
| DHIS2 (aggregate data entry) | 256 Kbps | 2 seconds | Yes (web/Android) | Satellite or better |
| DHIS2 Tracker (EIR, surveillance) | 512 Kbps | 1 second | Yes (Android app) | Satellite or better |
| OpenMRS (EMR) | 1 Mbps (sync) | 500 ms (queries) | Yes (local server) | Broadband preferred |
| e-NHIS (claims) | 512 Kbps | 1 second (eligibility) | Yes (CLAIM-it offline) | Satellite or better |
| A-LIS (laboratory) | 512 Kbps | 1 second | Yes (local instance) | Broadband preferred |
| OpenHIM (HIE central) | 10 Mbps+ | < 100 ms | N/A (central only) | Data centre fibre |
| Video conferencing (telemedicine, future) | 2 Mbps | 150 ms | No | Broadband required |
| Software updates and patches | 5 Mbps (burst) | Non-critical | Scheduled offline | Any available |

---

## 7.3 Hosting Architecture

### 7.3.1 Central Services Hosting

All central health information systems — those that aggregate, mediate, or provide authoritative reference data — are hosted on sovereign infrastructure in the national data centre (G-Cloud MoH spoke when available, ProgTel/e-Gov DC in the interim):

**Health Information Exchange Core.** OpenHIM (interoperability layer), OpenCR (Master Patient Index), FHIR Terminology Service, and the Shared Health Record repository. These are the most critical infrastructure components and must have the highest availability targets. Deployment: Kubernetes pods within the MoH spoke, with persistent storage backed by replicated volumes. Target availability: 99.5% during business hours (06:00–22:00), with planned maintenance windows from 02:00–06:00.

**National Health Data Platform.** DHIS2 (aggregate HMIS, Tracker programs for EIR and surveillance), with PostgreSQL database backend. DHIS2 is the most data-intensive central health application, requiring substantial storage (currently approximately 50 GB, growing at an estimated 10–15 GB annually as Tracker programs expand) and moderate compute for analytics workloads. Deployment: dedicated database pod with high-performance storage; application pod with 8–16 GB RAM for analytics processing.

**Health Administration Systems.** eCRVS/CIVIS integration endpoint (the primary eCRVS system may remain on its current hosting, with an integration adapter on sovereign infrastructure), e-NHIS central services (claims processing, beneficiary registry, provider registry), and eLMIS central server. Deployment: individual Kubernetes pods per system within the MoH spoke.

**Development, Staging, and Production Environments.** Each centrally hosted system operates in three environments: development (for testing new configurations, integrations, and updates), staging (a production-mirror for final validation before changes go live), and production. Development and staging environments may use reduced resources (half the RAM and storage of production) and may be hosted on public cloud using synthetic data, provided no identifiable health data is used. Production environments are exclusively on sovereign infrastructure.

### 7.3.2 Facility-Level Hosting

Facility-level systems operate on local hardware with synchronisation to central infrastructure:

**Primary Health Facilities (health centres, minor health centres).** A ruggedised tablet (10-inch minimum, with protective case, stylus optional) serves as the primary clinical data entry device, running DHIS2 Android (for EIR and surveillance) and a lightweight EMR module (OpenMRS on Android or a progressive web app). Local data is stored on the device. Synchronisation occurs via available connectivity (satellite, mobile data, or broadband). Power: facility mains with UPS backup (minimum 4-hour battery for the tablet) and solar charging capability where EU/EIB renewable energy installations are in place.

**Regional and District Hospitals.** A low-power server (such as an Intel NUC or equivalent, with 16 GB RAM, 500 GB SSD) runs a local OpenMRS instance serving multiple clinical workstations via the facility LAN. The local server also hosts a local DHIS2 Android sync endpoint and caches reference data (formularies, beneficiary lists, facility registry). Power: facility mains with UPS (minimum 30-minute runtime for graceful shutdown) and generator backup. Network: facility LAN (wired Ethernet for clinical workstations, Wi-Fi for mobile devices).

**National Referral Hospital (National Teaching Hospital).** A more capable server configuration (dual redundant servers with 32 GB RAM each, 1 TB SSD, RAID storage) supporting a full OpenMRS deployment with Bahmni modules (for integrated ERP, pharmacy, and laboratory management), local A-LIS instance, and e-NHIS claims processing. This configuration supports 50–100 concurrent clinical users and maintains local copies of all patient data for the facility. Synchronisation with central systems occurs in near-real-time where broadband is available.

### 7.3.3 Disaster Recovery and Business Continuity

Progressa's single submarine cable dependency represents the most significant technology risk to the health information ecosystem. The disaster recovery strategy addresses three failure scenarios:

**Scenario 1: Internet connectivity loss (submarine cable disruption).** All facility-level systems continue operating offline. Central systems continue operating on local infrastructure (national data centre) for domestic users. International data exchanges (WHO reporting, remote technical support) are suspended until connectivity is restored. Satellite backup channels (EHSSP VSAT infrastructure) may provide limited connectivity for critical communications. Regional hospitals with stored-and-forward capability continue processing insurance claims and synchronising with the national data centre via any available domestic network path.

**Scenario 2: National data centre outage (power, hardware, or environmental failure).** Facility-level systems continue operating offline. Central system recovery targets: HIE core (OpenHIM, MPI) — Recovery Time Objective (RTO) of 4 hours, Recovery Point Objective (RPO) of 1 hour; DHIS2 — RTO 8 hours, RPO 4 hours; other systems — RTO 24 hours, RPO 8 hours. Recovery relies on automated infrastructure-as-code (IaC) redeployment from Git-managed configuration, combined with database backups stored on geographically separate media. A warm standby for the HIE core at a secondary site (such as the ProgTel data centre, if the primary national data centre is a separate facility) provides the fastest recovery path.

**Scenario 3: Regional disaster (affecting multiple facilities in one health region).** Neighbouring facilities and the central MPI/SHR retain copies of all patient data that has been synchronised. Regional data officers maintain offline extracts of critical facility data. Paper-based continuity procedures (maintained as part of the offline-first design) enable continued service delivery. Data reconciliation procedures apply once affected facilities are restored.

**Backup Strategy.** Automated daily backups of all central system databases, with 30-day retention for daily backups and 12-month retention for monthly backups. Backups are encrypted (AES-256) and stored on at least two physically separate media: one at the primary data centre and one at a geographically separate location. Backup restoration is tested quarterly, with results documented and reported to the National Digital Health Steering Committee (NDHSC).

---

## 7.4 Security Architecture

### 7.4.1 Health Data Security Context

Health data is among the most sensitive categories of personal information. Clinical records reveal intimate details about a person's physical and mental health, reproductive history, substance use, and genetic predispositions. In Progressa's context, where stigma around certain conditions (HIV, mental illness, reproductive health) remains significant, a breach of health data confidentiality could cause real harm to individuals. The security architecture must therefore go beyond compliance-driven controls to provide genuine protection proportionate to the sensitivity of the data and the social context.

The architecture aligns with the national cybersecurity policy, the REC regional framework on personal data protection, and international health data security standards (ISO 27001/27799). It also accounts for Progressa's current cybersecurity maturity — in the lower half of the ITU Global Cybersecurity Index, with a score of around 30 — and the reality that the planned National Cybersecurity Centre (NCSC) is not yet operational.

### 7.4.2 Encryption Standards

**Data in transit.** All data exchanged between systems — whether between facilities and central infrastructure, between components within the MoH spoke, or between the MoH spoke and other government systems via the API Gateway — must be encrypted using TLS 1.2 or higher. TLS 1.3 is preferred where supported. Mutual TLS (mTLS) is required for system-to-system communications within the HIE (OpenHIM to connected systems), ensuring that both the client and server authenticate each other before exchanging data. Certificate management follows the sovereign cloud platform's centralised approach, with certificates issued by a nationally controlled certificate authority or a trusted third-party CA.

**Data at rest.** All databases storing identifiable health data must implement AES-256 encryption at the storage layer. This includes PostgreSQL databases for DHIS2, OpenMRS, OpenCR (MPI), and e-NHIS; document stores for the Shared Health Record; and backup media. Encryption keys are managed through a dedicated key management service within the G-Cloud platform, with keys rotated annually and access restricted to authorised system administrators with multi-factor authentication.

**Data on devices.** Facility-level devices (tablets, local servers) storing patient data must have full-disk encryption enabled. Mobile devices used by community health workers must use encrypted application storage. Lost or stolen devices must be remotely wipeable (via mobile device management where mobile data is available) or locally wipeable (via configurable inactivity timeout with data destruction after a defined number of failed authentication attempts).

### 7.4.3 Role-Based Access Control

Access to health information is governed by a role-based access control (RBAC) framework that defines who can access what data, under what circumstances, and for what purposes. The framework defines the following role categories, with specific permissions per system:

| Role | DHIS2 | OpenMRS (EMR) | OpenHIM (HIE) | e-NHIS | MPI (OpenCR) |
|---|---|---|---|---|---|
| **Clinician** (nurse, doctor, clinical officer) | View facility reports | Read/write patient records at assigned facility | N/A (mediated access) | Verify eligibility, submit claims | Search patients by ID |
| **Facility Administrator** (in-charge) | Enter/approve facility data, view facility reports | Read patient records, manage facility users | N/A | Approve facility claims | View facility patient list |
| **District/Regional Health Officer** | View/approve district data, run district reports | View de-identified aggregate data for district | N/A | View district claims summary | N/A |
| **National DHDD Staff** | Full data access, system configuration | View de-identified national data | Monitor transactions, manage channels | System configuration, national reports | MPI administration, merge/unmerge |
| **System Administrator** | Server administration, no clinical data access | Server administration, database management | Channel configuration, certificate management | Technical administration | Technical administration |
| **External Auditor / Researcher** | Time-limited read access to approved de-identified datasets | No access | Transaction logs (de-identified) | Claims statistics (de-identified) | No access |

Access is enforced at the application level (each system manages its own user roles and permissions) and complemented by network-level controls (the hub-and-spoke architecture restricts which systems can communicate with which). The IAM/SSO service provides centralised authentication, while authorisation remains application-specific to accommodate the different permission models of each health system.

### 7.4.4 Audit Logging

Every access to patient-identifiable data must be logged with the following minimum information: who (authenticated user identity and role), what (which patient record, which data elements), when (timestamp in UTC), where (source IP address or device identifier), why (stated purpose — clinical care, administrative, audit, research), and how (which system and API endpoint). Audit logs are:

Immutable — stored in append-only log stores that cannot be modified or deleted by any user, including system administrators. Write-once storage on the sovereign cloud platform or a dedicated log aggregation service.

Retained for a minimum of seven years, aligned with typical health record retention requirements and anticipated national data protection legislation.

Reviewed regularly — the DHDD Data Governance team conducts monthly automated reviews for anomalous access patterns (such as accessing records of patients not under a clinician's care, bulk record downloads, or after-hours access to sensitive categories). Quarterly manual reviews assess compliance with access policies.

Available to patients — as the Patient Portal matures (a longer-term capability dependent on EHR and HIE maturity), patients will be able to view a log of who has accessed their health records, following the transparency model established in countries such as Estonia.

### 7.4.5 Incident Response

Health information security incidents are managed through a tiered response framework aligned with the National Cybersecurity Policy:

**Tier 1 (Facility-level).** Facility IT focal points (where available) or facility administrators handle routine issues: password resets, device lockouts, suspected phishing attempts. Escalation to Tier 2 if the issue involves potential data exposure or system compromise.

**Tier 2 (DHDD/National).** The DHDD's technical team investigates and responds to confirmed or suspected security incidents affecting health systems: unauthorised access to patient data, malware detection on health system servers, system intrusions. The DHDD coordinates with the national CSIRT (national Computer Security Incident Response Team) for incidents requiring national-level response.

**Tier 3 (National/International).** Major incidents — data breaches affecting large numbers of patient records, ransomware attacks on health infrastructure, advanced persistent threats — are escalated to the national CSIRT and, once operational, the NCSC. International support from ITU-IMPACT or WHO Health Emergency Information and Risk Assessment (HEIRA) may be engaged for incidents affecting health service delivery.

Incident response procedures are documented, tested annually through tabletop exercises, and reviewed after each significant incident. All health system vendors and integration partners must comply with a mandatory 24-hour notification requirement for any security vulnerability or breach affecting MoH systems.

### 7.4.6 Vulnerability Management

**Patching.** All operating systems and application components are patched within 30 days of a critical security update release, and within 90 days for non-critical updates. Security patches for internet-facing components (the hub load balancer, API endpoints) are applied within 7 days of critical vulnerability disclosure. Patching is managed through the G-Cloud platform's automated update mechanisms where containerised, and through scheduled maintenance windows for non-containerised systems.

**Penetration Testing.** Annual penetration testing of all internet-facing health system components, conducted by an independent qualified firm. Results are reviewed by the DHDD and remediation plans are approved by the NDHSC. Initial penetration testing is conducted before any new system or major integration goes live.

**Vulnerability Scanning.** Automated vulnerability scanning of all central health system servers runs weekly, with results triaged by the DHDD technical team. Scanning covers known vulnerabilities in operating systems, application frameworks, libraries, and container images.

### 7.4.7 Physical Security

**Data centre.** The national data centre hosting the G-Cloud platform must meet Tier 3 physical security requirements: controlled access with biometric authentication, 24/7 surveillance, environmental controls (fire suppression, flood protection, temperature/humidity management), and redundant power (dual utility feeds, generator backup with minimum 72-hour fuel capacity, UPS for clean power transition).

**Facility devices.** Tablets and local servers at health facilities must be physically secured when not in use — locked storage cabinets for tablets, secured server rooms or lockable server enclosures for local servers. Asset registers maintained at each facility track all ICT equipment. Quarterly physical inventory audits verify that all devices are accounted for.

---

## 7.5 Technology Standards

### 7.5.1 Approved Technology Stack

The health information ecosystem adopts an open-source-preferred technology stack. This preference is driven by three factors: cost sustainability (licence fees are a recurring burden in a donor-dependent funding environment), sovereignty (open-source code can be audited, modified, and hosted without vendor permission), and ecosystem alignment (the majority of WHO-endorsed health tools — DHIS2, OpenMRS, OpenHIM, OpenCR — are open-source). Where open-source alternatives are not mature or appropriate, commercial products may be used, provided they support open standards for data exchange and do not create vendor lock-in.

**Databases.**

| Database | Use Case | Justification |
|---|---|---|
| PostgreSQL (primary) | DHIS2, OpenMRS, OpenCR (MPI), OpenHIM, eLMIS, general-purpose | Most widely supported by health applications; strong community; ACID-compliant; spatial extensions for GIS |
| MySQL | Legacy DHIS2 instances (migration to PostgreSQL for new deployments) | DHIS2 historically supports MySQL; new deployments should use PostgreSQL |
| MongoDB (where required) | Document storage for FHIR resources in the Shared Health Record | Native JSON document storage aligns with FHIR resource format; used by some HAPI FHIR server deployments |

**Application Servers and Runtimes.**

| Technology | Use Case | Justification |
|---|---|---|
| Apache Tomcat | DHIS2, OpenMRS (Java-based applications) | Standard deployment platform for both DHIS2 and OpenMRS; well-understood by existing HMIS team |
| Node.js | OpenHIM, custom mediators, integration adapters, lightweight API services | OpenHIM is Node.js-based; appropriate for I/O-intensive integration workloads |
| Python (Flask/Django) | Analytics services, data transformation scripts, machine learning models (future) | Strong data science ecosystem; appropriate for health data analytics; widely taught |

**Operating Systems.**

| OS | Use Case | Justification |
|---|---|---|
| Ubuntu LTS (22.04 or later) | Primary server OS for all new deployments | Long-term support (5 years standard, 10 years ESM); wide community; extensive health application compatibility |
| CentOS Stream / Rocky Linux | Legacy DHIS2 servers (migration to Ubuntu LTS at next major upgrade) | Existing deployments may use CentOS; no new CentOS deployments after CentOS 8 end-of-life |
| Android 10+ | Facility tablets and mobile devices for DHIS2 Android, OpenMRS mobile | DHIS2 Android Capture requires Android 5+; OpenMRS supports Android; 10+ for current security patches |

**Messaging and Event Processing.**

| Technology | Use Case | Justification |
|---|---|---|
| RabbitMQ | Message queuing for asynchronous integration flows via OpenHIM; guaranteed delivery for offline-to-online sync | Mature, well-documented, moderate operational complexity; appropriate for Progressa's integration volume |
| Apache Kafka | Future consideration for high-volume event streaming (if integration volume exceeds RabbitMQ capacity) | Higher throughput but significantly higher operational complexity; defer until integration team matures |

The initial architecture uses RabbitMQ for all asynchronous messaging needs. Apache Kafka is identified as the evolution path if transaction volumes or event-streaming requirements (such as real-time analytics on clinical data flows) exceed RabbitMQ's practical capacity, which is unlikely within the 2025–2033 timeframe given the size of Progressa's health system.

**Containerisation and Orchestration.**

| Technology | Use Case | Justification |
|---|---|---|
| Docker | Container packaging for all central health applications | Standard container format; supported by all target deployment environments; simplifies deployment consistency |
| Kubernetes (via G-Cloud) | Orchestration for central services on sovereign cloud | G-Cloud platform is Kubernetes-native (kubeadm-based); provides auto-scaling, rolling updates, self-healing |
| Docker Compose | Development/staging environments; small-scale interim deployments before G-Cloud | Simpler than Kubernetes for single-node deployments; appropriate for interim hosting |

Facility-level systems (local OpenMRS instances, DHIS2 Android) do not require containerisation. Containerisation applies to central services deployed on the sovereign cloud platform.

**Monitoring and Observability.**

| Technology | Use Case | Justification |
|---|---|---|
| Prometheus | Metrics collection from all central health applications and infrastructure | De facto standard for Kubernetes-native monitoring; supported by G-Cloud platform |
| Grafana | Dashboards and visualisation for system health, performance, and SLA monitoring | Pairs with Prometheus; provides customisable dashboards for DHDD operations team |
| Loki (or ELK alternative) | Centralised log aggregation for all central health applications | Lightweight log aggregation that integrates with Grafana; simpler operational model than ELK stack |
| Nagios (or Uptime Kuma) | Uptime monitoring and alerting for critical services | Simple, proven uptime monitoring; SMS/email alerts when services become unavailable |

### 7.5.2 Hardware Standards for Facility Devices

Standardised hardware specifications ensure consistency in procurement, support, and training:

**Clinical Tablets (primary health facilities).**

| Specification | Minimum Requirement | Justification |
|---|---|---|
| Screen size | 10.1 inches | Sufficient for clinical data entry forms |
| Processor | Quad-core ARM, 2.0 GHz+ | Runs DHIS2 Android and progressive web apps smoothly |
| RAM | 4 GB | Supports multiple health applications simultaneously |
| Storage | 64 GB | Stores local patient data, cached reference data, and application packages |
| Battery | 7,000 mAh minimum | Supports full clinical shift (8 hours) without charging |
| Connectivity | Wi-Fi (802.11ac), 4G LTE, Bluetooth | Covers all connectivity scenarios |
| Protection | IP52 rating or ruggedised case | Dust and splash resistance for clinical environments |
| OS | Android 10+ with security updates | Compatibility with DHIS2 Android and health applications |

**Facility Local Servers (regional/district hospitals).**

| Specification | Minimum Requirement | Justification |
|---|---|---|
| Form factor | Small form factor (NUC-type or micro server) | Limited physical space at facilities; low power consumption |
| Processor | Intel i5/i7 or AMD Ryzen 5, 4 cores | Runs OpenMRS + local database for 10–30 concurrent users |
| RAM | 16 GB (32 GB for teaching hospital) | PostgreSQL + OpenMRS + sync services |
| Storage | 500 GB SSD (1 TB for teaching hospital) | Patient data, backups, application binaries |
| UPS | 30-minute minimum runtime | Graceful shutdown on power failure; data integrity protection |
| Network | Gigabit Ethernet, Wi-Fi AP capability | LAN connectivity for clinical workstations |

**Power Infrastructure (all facilities with digital systems).**

| Component | Specification | Purpose |
|---|---|---|
| UPS (tablet charging) | 1 kVA, 4-hour backup | Keeps tablets charged through power outages |
| UPS (server) | 2 kVA, 30-minute backup | Graceful server shutdown; data protection |
| Solar panel + battery (where EU/EIB installed) | Sized per facility load | Primary or supplementary power for ICT equipment |
| Surge protector | All power outlets for ICT equipment | Protects against voltage spikes (common in Progressa power grid) |

---

## 7.6 Service-Oriented Architecture Design

### 7.6.1 Pragmatic Approach to Service Architecture

The health application landscape in Progressa — and in most low- and middle-income countries — consists predominantly of monolithic applications. DHIS2 is a single Java web application with a PostgreSQL backend. OpenMRS is a modular but monolithic Java application. e-NHIS, eCRVS/CIVIS, and A-LIS are each self-contained systems with their own databases and user interfaces. Imposing a microservices architecture on these systems would be technically inappropriate, operationally unsustainable given the current ICT staffing levels, and contrary to the architecture principle of building on what works.

The service-oriented architecture for MoH health systems therefore adopts a pragmatic, layered approach:

**Monolithic systems remain monolithic.** DHIS2, OpenMRS, e-NHIS, eCRVS, A-LIS, and eLMIS continue to operate as self-contained applications with their own databases, business logic, and user interfaces. They are not decomposed into microservices. Investment focuses on strengthening these systems, not re-architecting them.

**The HIE layer provides the service bus.** OpenHIM serves as the mediation and routing layer — the de facto service bus — for all inter-system communication. OpenHIM receives requests from source systems, applies transformation and routing logic through mediators, and forwards them to target systems. This pattern achieves the interoperability benefits of service-oriented architecture (loose coupling, standard interfaces, centralised logging) without requiring each application to be redesigned as a collection of microservices.

**Mediators provide transformation and orchestration.** Custom mediators (lightweight Node.js applications deployed as Docker containers) handle specific integration logic: FHIR-to-ADX transformation (for DHIS2), eCRVS-to-MPI identity reconciliation, claims adjudication routing, surveillance notification triggers. Each mediator is a small, focused service that performs a single integration function — this is where the microservice pattern is applied, because these components are new, purpose-built, and operated by the integration team.

**Shared registries are services.** The MPI (OpenCR), Facility Registry (DHIS2 organisation units exposed via mCSD), Health Worker Registry (iHRIS), and Terminology Service (OCL or FHIR-native terminology server) are genuine shared services consumed by multiple applications through standardised APIs. These registries are the most "service-oriented" components of the architecture and are designed to be accessed exclusively through their APIs, never through direct database queries.

### 7.6.2 Containerisation Strategy

Containerisation using Docker is applied to central services deployed on the G-Cloud sovereign cloud platform. The benefits for Progressa's context are specific and practical:

**Deployment consistency.** A containerised OpenHIM instance behaves identically in development, staging, and production, regardless of the underlying server configuration. This reduces the "it works on my machine" class of deployment failures, which is particularly important when the DHDD technical team is small and cannot afford to spend time debugging environment-specific issues.

**Migration readiness.** Containerised applications can move from interim hosting (ProgTel/e-Gov DC with Docker Compose) to G-Cloud (Kubernetes) with configuration changes rather than re-architecture. This protects the investment in application deployment regardless of the RDIP infrastructure delivery timeline.

**Resource efficiency.** Multiple containerised health applications share the same physical or virtual infrastructure more efficiently than dedicated servers per application, which matters when data centre resources are limited.

The following central services are containerised:

| Service | Container Strategy | Orchestration |
|---|---|---|
| OpenHIM (core + mediators) | One container per mediator; core as separate container | Kubernetes (G-Cloud) / Docker Compose (interim) |
| OpenCR (MPI) | Single container with PostgreSQL sidecar | Kubernetes / Docker Compose |
| HAPI FHIR Server (if deployed for SHR) | Single container with database sidecar | Kubernetes / Docker Compose |
| Terminology Service | Single container | Kubernetes / Docker Compose |
| Integration mediators (custom) | One container per mediator | Kubernetes / Docker Compose |
| Monitoring stack (Prometheus, Grafana, Loki) | Individual containers per service | Kubernetes / Docker Compose |

DHIS2 and OpenMRS central instances may be containerised where the deployment team has validated containerised performance under production loads. Both projects maintain official Docker images. However, if the HMIS team is more comfortable with traditional Tomcat-on-VM deployment for DHIS2, this remains acceptable during the transition period, provided the deployment is documented in infrastructure-as-code for reproducibility.

### 7.6.3 Service Registry and Discovery

Given the scale of Progressa's health system (approximately 15–20 discrete services at full maturity), a heavyweight service discovery platform (such as Consul or Istio service mesh) is not warranted. Instead, a lightweight approach is adopted:

**DNS-based service discovery within the G-Cloud MoH spoke.** Each service is assigned a stable internal DNS name (e.g., `openhim.moh.gcloud.progressa.example`, `mpi.moh.gcloud.progressa.example`, `dhis2.moh.gcloud.progressa.example`). Kubernetes internal DNS provides automatic name resolution for containerised services. External services (those accessed via the hub API Gateway) are registered in the API Gateway's service catalogue.

**API Catalogue.** OpenHIM maintains a registry of all connected channels and their endpoints, serving as the de facto service catalogue for the health sector. The API catalogue, documented in OpenAPI 3.0 format, records each service's endpoint URL, supported FHIR resources or API operations, authentication requirements, rate limits, and SLA commitments. This catalogue is maintained by the Architecture and Interoperability TWG and published on the DHDD's internal documentation portal (DokuWiki or equivalent).

**Health checks.** Each service exposes a `/health` endpoint returning its operational status. The monitoring stack (Prometheus + Grafana) polls these endpoints at 30-second intervals and alerts the DHDD operations team via SMS and email when any service fails consecutive health checks. This provides the operational visibility of a service mesh without the operational complexity.

---

*End of Section 7: Technology Architecture (To-Be)*

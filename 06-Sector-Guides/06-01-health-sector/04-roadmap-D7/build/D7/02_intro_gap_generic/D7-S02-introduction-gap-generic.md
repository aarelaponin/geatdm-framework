# D7 — EA Implementation Roadmap: Ministry of Health, Progressa

**Deliverable 7 of Contract [contract reference]**
**Version:** 1.0 (Draft)
**Date:** February 2026
**Validity Period:** 2025–2033
**Prepared by:** ITU Lead Architect, Enterprise Architecture Initiative

---

## Section 1: Introduction

### 1.1 Purpose and Scope

This document constitutes Deliverable 7 (D7) — the EA Implementation Roadmap — for the Ministry of Health (MoH) of Progressa, developed under Contract [contract reference] between the International Telecommunication Union (ITU) and the Government of Progressa (represented by PDGA/MoDE).

The purpose of D7 is to provide a comprehensive, actionable roadmap that bridges the gap between the current state ("As-Is") architecture documented in D5 and the target state ("To-Be") architecture defined in D6. Specifically, this document:

- Identifies and analyses all significant gaps between current and target architectures across Business, Data, Application, and Technology (BDAT) domains.
- Distinguishes between gaps that MoH can address directly (sector-specific) and gaps that depend on cross-government or national infrastructure investments (generic/cross-sectoral).
- Proposes phased implementation waves with concrete milestones, dependencies, investment estimates, and responsible parties.
- Defines the governance, organisational, and capacity-building requirements necessary to execute the roadmap.
- Establishes monitoring, evaluation, and risk management frameworks for roadmap execution.

The scope is limited to MoH and its affiliated entities (NHIA, regional health directorates, public health facilities). However, the roadmap explicitly addresses MoH's dependencies on national-level infrastructure programmes — particularly RDIP — and on other ministries' digital transformation initiatives.

### 1.2 Relationship to Other Deliverables

D7 does not exist in isolation. It is the culmination of a structured architectural development process and draws directly from the following project deliverables:

**D5 — Current "As-Is" Architecture:** Provides the baseline from which all gaps are measured. D5 documented MoH's current systems (DHIS2, eCRVS, e-NHIS, SPT, A-LIS, IDSR, SMS for Health, NMRI EMRS), their integration status (Level 1 maturity, sole automated flow SPT→DHIS2), governance structures, data fragmentation across 8+ siloed data stores, and technology infrastructure constraints.

**D6 — Future "To-Be" Architecture:** Defines the target state against which gaps are assessed. D6 specifies the OpenHIE-based interoperability architecture, 12 key design decisions (DD-01 through DD-12), the three-tier governance model (NDHSC, DHDD, three TWGs), the four-layer application portfolio, the six priority integration flows, and the sovereign cloud hosting strategy.

**D2 — EA Framework:** Establishes the Generic EA Target Architecture Development Method (GEATDM) and its five phases (SCOPE, DISCOVER, DESIGN, PLAN, IMPLEMENT). D7 corresponds to the PLAN phase of GEATDM and to Phases E (Opportunities and Solutions) and F (Migration Planning) of the TOGAF Architecture Development Method (ADM).

**D1 — Inception Report:** Defines the project charter, stakeholder engagement plan, and work mobilisation approach that governs how D7 findings will be validated with MoH stakeholders.

**D10 — Integration and Interoperability Strategy:** Will provide the detailed technical standards and protocols for the integration flows identified in D7's roadmap. D7's integration gap analysis directly informs D10's scope.

**D11 — Conceptual Cloud Strategy:** Will elaborate the sovereign cloud (G-Cloud) migration pathway that D7 identifies as a critical cross-sectoral dependency.

**D13 — EA Governance and Sustainability Framework:** Will formalise the governance structures and sustainability mechanisms that D7 identifies as prerequisites for roadmap execution.

### 1.3 Methodology

This roadmap was developed using the following methodological foundations:

**GEATDM Phase 4 — PLAN:** the Generic EA Target Architecture Development Method's PLAN phase requires: (1) comparison of As-Is and To-Be architectures, (2) identification and prioritisation of gaps based on business value, technical dependencies, risk, budget, and capacity, (3) development of transition architectures (intermediate states), (4) creation of a phased implementation roadmap, and (5) estimation of costs and resources.

**TOGAF ADM Phase E — Opportunities and Solutions:** Systematic identification of major implementation projects, grouping into work packages, and assessment of build/buy/reuse/partner options for closing each gap.

**TOGAF ADM Phase F — Migration Planning:** Sequencing of work packages into a coordinated implementation plan that respects dependencies, resource constraints, and risk tolerances. This includes developing transition architectures that define stable intermediate states between the current and target architectures.

**Analytical methods applied:**

- Gap analysis across all four BDAT domains (Business, Data, Application, Technology) comparing D5 baseline against D6 target state.
- Dependency mapping to identify cross-sectoral prerequisites that MoH cannot control (e.g., G-Cloud, broadband, digital ID).
- Funding landscape analysis aligning roadmap phases with confirmed and projected funding windows (EHSSP closure August 2025, RDIP, Global Fund 2024–2027, GAVI cycles).
- International benchmarking drawing on comparable country experiences (Tanzania, Ethiopia, Rwanda, Kenya, Maldives) for timeline and cost estimation.
- Risk-adjusted planning that applies conservative assumptions for infrastructure delivery, staffing, and absorption capacity in a resource-constrained environment.

### 1.4 Roadmap Horizon and Wave Structure

The roadmap spans the period **2025–2033**, aligned with D6's eight-year architecture validity period and with Progressa's national digital master plan (ten-year). Implementation is organised into three waves:

**Wave 1 — Foundation and Stabilisation (2025–2027):**
The critical near-term period focused on bridging the EHSSP funding gap (August 2025 closure), stabilising existing operational systems, establishing the Digital Health and Data Directorate (DHDD), deploying foundational shared infrastructure (HIE/OpenHIM, MPI/OpenCR), and piloting new clinical systems (OpenMRS, DHIS2 Tracker EIR, DHIS2 Tracker IDSR+). Wave 1 operates primarily within existing and transitional hosting arrangements while RDIP infrastructure is built out.

**Wave 2 — Expansion and Integration (2027–2030):**
Building on Wave 1 foundations, this wave focuses on scaling proven pilots to regional/national coverage, activating all six priority integration flows through the HIE, migrating systems to G-Cloud sovereign infrastructure, deploying the EHR to 30–40 facilities, transitioning from SPT to DHIS2 Tracker EIR nationally, and establishing the full data governance framework. Wave 2 is timed to coincide with RDIP infrastructure availability (G-Cloud, broadband, data centre).

**Wave 3 — Optimisation and Maturity (2030–2033):**
The final wave focuses on advanced capabilities including event-driven integration (pub/sub), cross-border data sharing, a dedicated health data warehouse, community-based surveillance, and achieving integration maturity Level 4. Wave 3 also addresses system retirements (SPT, SMS for Health, paper registers) and transitions to fully government-funded sustainable operations.

Each wave defines a stable, operational intermediate state — a transition architecture — that delivers value independently, even if subsequent waves are delayed or modified.

### 1.5 How to Read This Document

This document is structured to serve multiple audiences:

**For executive decision-makers** (Permanent Secretary, NDHSC members, donor programme managers): Sections 1–2 provide the strategic context and cross-sectoral dependency analysis. Section 7 (Investment Requirements) and Section 8 (Governance) present the decisions and commitments required. The Executive Summary (to be added) provides a one-page overview.

**For programme and project managers** (DHDD leadership, RDIP coordinators, donor technical advisors): Sections 3–6 provide the detailed gap analysis, solution specifications, and wave-by-wave implementation plans with milestones and dependencies. Section 9 (Capacity and Risk) addresses implementation feasibility.

**For technical architects and implementers** (integration developers, system administrators, HIE managers): The detailed gap tables throughout Sections 2–4 provide specific AS-IS/TO-BE/gap specifications. The wave plans in Sections 5–6 include technical prerequisites and sequencing logic.

**Conventions used in this document:**

- **Gap IDs** follow the pattern `GEN-nn` (generic/cross-sectoral), `BUS-nn` (business), `DAT-nn` (data), `APP-nn` (application), `INT-nn` (integration), `TEC-nn` (technology).
- **Dependency owners** identify the ministry, agency, or programme responsible for delivering each prerequisite.
- **Funding sources** reference specific programmes (RDIP, Global Fund, GAVI, government budget) with confirmed or projected funding status.
- **Timeline references** use the three-wave structure: W1 (2025–2027), W2 (2027–2030), W3 (2030–2033).
- **Priority levels** use MoSCoW: Must (roadmap fails without it), Should (significant impact if absent), Could (valuable but deferrable), Won't (out of scope for this period).

---

## Section 2: Gap Analysis

### 2.1 Generic / Cross-Sectoral Component Gaps

This section identifies gaps that originate outside MoH's direct control but have profound implications for health sector digital transformation. These are national-level infrastructure, policy, and institutional prerequisites — primarily under RDIP, MoDE/PDGA, or cross-government mandates — without which MoH's target architecture cannot be fully realised.

MoH's role regarding these gaps is threefold: (1) advocate for health-sector requirements within national governance structures, (2) design MoH systems to be ready to leverage these capabilities when available, and (3) develop interim mitigation strategies for the period before national solutions are delivered.

---

#### GEN-01: Sovereign Cloud Infrastructure (G-Cloud)

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | No sovereign government cloud exists. MoH systems are hosted in fragmented arrangements: DHIS2 on central HMIS servers (ProgTel infrastructure), eCRVS on Civitas Group external hosting, e-NHIS on an external cloud provider, SPT on Vaxa cloud (external), A-LIS on local pilot facility servers. No Tier 3/4 national data centre is operational (ProgTel DC limited; PDGA DC functional but constrained). National cybersecurity posture is weak (ITU Global Cybersecurity Index score of around 30, in the lower half globally). |
| **TO-BE** | G-Cloud provides a Kubernetes-based sovereign cloud platform with hub-and-spoke architecture. MoH operates as one isolated spoke. All identifiable health data (EHR, MPI, eCRVS endpoints, e-NHIS, DHIS2 patient-level) is hosted on sovereign infrastructure within national borders. The national data centre operates at Tier 3/4 reliability. A cross-cutting IAM/SSO layer (Keycloak) and API Gateway/Information Mediator provide security and access management. |
| **Gap** | Complete absence of sovereign cloud platform. No Tier 3/4 data centre. No government container orchestration (Kubernetes) infrastructure. No shared IAM/SSO services. No standardised hosting SLAs for government systems. MoH has no pathway to meet data sovereignty requirements for Tiers 3–4 health data (clinical records, patient identity, insurance data) until G-Cloud is available. |
| **Dependency Owner** | **MoDE/PDGA** (G-Cloud policy and platform), **RDIP** (data centre construction and equipping, G-Cloud platform deployment), **ProgTel** (data centre operations). |
| **Funding Source** | RDIP (USD 50M allocation for Progressa, includes data centre and cloud components). Planned delivery: Data centre 2026–2027, G-Cloud platform target 2027. |
| **MoH Implications if Gap Persists** | MoH cannot meet its own data classification requirements (D6 Section 3.5): Tier 3 (Confidential PII) and Tier 4 (Restricted Clinical) data must reside on sovereign infrastructure. Without G-Cloud, MoH must either (a) continue fragmented external hosting — violating data sovereignty principles and creating unmanageable security risks for patient data, or (b) invest in standalone MoH-specific infrastructure — duplicating national investment and creating unsustainable cost burdens. The OpenHIM/OpenCR/HAPI FHIR deployment (central to the entire target architecture) has no appropriate hosting environment. The 2027–2028 system migration timeline in D6 becomes infeasible. |
| **MoH Interim Mitigation** | Containerise all new and existing MoH systems (Docker/Docker Compose) to ensure G-Cloud readiness. Maintain current hosting arrangements during Wave 1 with enhanced security measures. Deploy OpenHIM/OpenCR on interim infrastructure (PDGA DC or hardened HMIS servers) with planned migration to G-Cloud when available. Require all new system procurements to be Kubernetes-ready. Plan 60-day parallel-run for each eventual migration. |

---

#### GEN-02: National Broadband and Last-Mile Connectivity

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | National broadband infrastructure is limited: ~40,000 fixed broadband subscribers across the country. National electricity access is ~60%. Single submarine cable with approximately 4 years remaining legal lifespan — a critical single point of failure. MoH health facilities are connected via EHSSP-funded satellite internet, but this is expensive, bandwidth-constrained, and funded only through August 2025 (EHSSP closure). Mobile connectivity is more widespread (~70% internet penetration, ~4M mobile connections) but insufficient for reliable health system operations. |
| **TO-BE** | RDIP broadband backbone provides reliable facility-to-central connectivity. Last-mile connectivity reaches health facilities progressively. Bandwidth targets: 2 Mbps per facility (Phase 1), 5 Mbps (Phase 2), 10+ Mbps (Phase 3). A second submarine cable eliminates the single-cable point of failure. Terrestrial broadband progressively replaces satellite connectivity at health facilities. |
| **Gap** | Broadband backbone is under construction but not yet reaching health facilities. Last-mile connectivity to rural health facilities is 2–3 years away (2027–2028). Satellite connectivity funding ends August 2025 with no confirmed successor for the gap period. The second submarine cable is planned for 2027–2028 but not yet contracted. About 40% of the population lacks electricity access, limiting facility ICT operations. |
| **Dependency Owner** | **RDIP** (broadband backbone, last-mile, submarine cable), **ProgTel/the national utility** (terrestrial infrastructure, electricity), **MoDE/PDGA** (policy and coordination). |
| **Funding Source** | RDIP (broadband and submarine cable components within USD 50M Progressa allocation). EHSSP satellite funding ends August 2025. |
| **MoH Implications if Gap Persists** | Immediate risk (August 2025): loss of facility connectivity when EHSSP satellite funding ceases, before RDIP terrestrial broadband reaches facilities. This would disrupt DHIS2 reporting from facilities, SPT scanning operations, e-NHIS claims processing, and any new system deployments. Real-time integration flows (all six priority HIE flows from D6) are infeasible without reliable connectivity. The EHR rollout to 30–40 facilities requires minimum 2 Mbps sustained bandwidth at each site. Disease surveillance (IDSR+) transition from paper to electronic case-based reporting requires reliable connectivity or robust offline-first design. |
| **MoH Interim Mitigation** | All MoH systems must implement offline-first design (local storage, background sync) — this is already a D6 design principle. Negotiate bridge funding for satellite connectivity beyond August 2025 through either RDIP reallocation or emergency government allocation. Prioritise RDIP broadband rollout at health facilities in advocacy with RDIP governance. Plan EHR and DHIS2 Tracker deployments to start at facilities with existing reliable connectivity. Use mobile data (4G) as a transitional connectivity option for facilities where neither satellite nor broadband is available. |

---

#### GEN-03: National Digital Identity Platform

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | Two separate national identification numbering systems exist: eCRVS NIN (10-digit, assigned at birth registration, ~50% population coverage as of March 2023) and Immigration NIN (separate system, citizens 18+). These systems are not unified — there is no single national digital identity. NIN production has been suspended due to a contract issue with the service provider. The eCRVS system (CIVIS platform) has no operational integrations with any other government system. The planned eCRVS→e-NHIS integration (target August 2025) has not been delivered. |
| **TO-BE** | A unified national digital ID platform provides the foundation for the Master Patient Index (MPI/OpenCR). The eCRVS NIN serves as the foundational health identifier, accepted by all MoH systems. OpenCR performs deterministic matching on strong identifiers (eCRVS NIN, Immigration NIN) and probabilistic matching on demographics. All patient-level health systems (EHR, e-NHIS, EIR, LIS) perform MPI lookup during patient registration (integration principle IP-08). |
| **Gap** | No unified national digital ID (eCRVS and Immigration NINs remain separate). NIN production is suspended — no new NINs are being issued. eCRVS coverage is ~50% (leaving ~50% of the population without a foundational digital identifier). No operational integration between eCRVS and any other system. The legal framework for digital identity (CRVS Bill) is pending enactment. No data protection legislation governs identity data use and sharing. |
| **Dependency Owner** | **MoDE/PDGA** (NID programme, RDIP digital ID platform), **Ministry of Justice** (CRVS Bill enactment), **Immigration Department** (NIN unification), **eCRVS Team/Civitas Group** (eCRVS API development and integration readiness). |
| **Funding Source** | RDIP (digital ID platform component, 2026–2028). EHSSP AF3 funded eCRVS expansion (closing October 2025). |
| **MoH Implications if Gap Persists** | The Master Patient Index — the cornerstone of the entire health information exchange architecture — cannot achieve its target function. Without a reliable foundational identifier, MPI matching degrades to probabilistic-only, increasing duplicate records and misidentification risks (particularly critical for HIV, TB, and immunisation records). The Priority 1 integration flow (Birth Registration → MPI → NHIS Enrollment) cannot be implemented. Patient identity resolution across EHR, e-NHIS, EIR, and LIS remains impossible for ~50% of the population. Insurance enrollment automation (eliminating manual re-keying from eCRVS to e-NHIS) is blocked. |
| **MoH Interim Mitigation** | Deploy MPI (OpenCR) with support for multiple identifier types: eCRVS NIN (where available), e-NHIS ID, facility MRNs. Use probabilistic matching (name, date of birth, sex, facility) as fallback for patients without NIN. Design all MoH systems to accept and propagate NIN when available but not require it for service delivery. Advocate within RDIP governance for prioritisation of eCRVS API development and NIN production resumption. Prepare FHIR Patient resource profiles that accommodate both deterministic and probabilistic matching. |

---

#### GEN-04: Data Protection and Privacy Legislation

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | Progressa has no comprehensive data protection legislation. The CRVS Bill (which includes provisions for civil registration data protection) is pending enactment. The ICT sector law and the Cybersecurity Act provide limited, sector-specific provisions but do not constitute a comprehensive data protection framework. No data protection authority exists. No government-wide data classification policy is enforced. Health-specific data governance is absent — there is no health data governance framework, no data sharing agreements between systems, and no patient consent management framework. |
| **TO-BE** | A national data protection law governs personal data processing, including health data. A Data Protection Authority provides oversight and enforcement. MoH operates under a health data governance framework (established by DHDD) with defined data ownership across 11 domains, three-level data stewardship, and a four-tier data classification scheme (Public, Internal, Confidential PII, Restricted Clinical). Patient consent is managed through standardised protocols. Data sharing agreements govern all inter-system and cross-ministry data exchange. |
| **Gap** | No national data protection legislation. No Data Protection Authority. No health data governance framework. No standardised patient consent management. No data sharing agreements. No data classification enforcement. Health data (including HIV status, clinical records, insurance data) is processed without adequate legal safeguards. This creates legal uncertainty for any system that stores or transmits patient-identifiable information — including the entire target HIE architecture. |
| **Dependency Owner** | **Ministry of Justice / National Assembly** (data protection legislation), **MoDE/PDGA** (government data policy), **MoH** (health-sector data governance framework — this MoH can do independently). |
| **Funding Source** | No specific funding identified for data protection legislation. RDIP may include policy development components. WHO country cooperation strategy includes normative support for health data governance. |
| **MoH Implications if Gap Persists** | All patient-level data systems (EHR, MPI, e-NHIS, EIR, LIS) operate in a legal vacuum regarding data protection. This creates risks for patients (no enforceable privacy rights), for MoH (no legal basis for data sharing, potential liability), and for donor partners (who increasingly require data protection compliance as a condition of funding). The HIE architecture — which by design mediates patient data across multiple systems — has no legal framework governing data access, consent, or breach notification. International health data exchange (e.g., DHIS2→WHO/RHO) may be restricted by partner organisations' data protection requirements. Health worker compliance with data handling procedures has no legal enforcement mechanism. |
| **MoH Interim Mitigation** | MoH can and should establish a health-sector data governance framework through administrative action (Ministerial Order) without waiting for national legislation. This includes: defining data ownership across 11 domains (as specified in D6), establishing data stewardship roles at national, regional, and facility levels, creating standard data sharing agreements for inter-system exchange via HIE, implementing patient consent protocols for EHR and insurance systems, and enforcing the four-tier data classification scheme. These measures provide operational data governance even in the absence of national law, and position MoH to comply rapidly once legislation is enacted. |

---

#### GEN-05: National Interoperability Platform / Government Service Bus

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | No government-wide integration platform or government service bus exists. ProgressaPay (the government payment gateway) is the only real-time, cross-ministry integration in Progressa, demonstrating that API-based integration is achievable in the Progressa context. ProgressaPay uses REST APIs at API maturity Level 4 and integrates IFMIS, CBP T24, and commercial banks. However, ProgressaPay is limited to payment flows and does not provide general-purpose data exchange. Within MoH, integration maturity is Level 1 (Ad-hoc) with only one automated flow (SPT→DHIS2). No middleware, API management, or integration governance exists. |
| **TO-BE** | A national interoperability platform (Government Service Bus / Information Mediator) provides cross-ministry data exchange. MoH's Health Information Exchange (OpenHIM) connects to the national platform for cross-sectoral flows (e.g., eCRVS birth notification, digital ID verification, NHIS↔IFMIS financial reconciliation). Open API standards (REST/JSON, FHIR where applicable) are mandated for government systems. API management (documentation, versioning, security) is centralised. |
| **Gap** | No government service bus or national interoperability platform. No government API standards or API management. No cross-ministry data exchange framework (beyond ProgressaPay payments). The eCRVS→e-NHIS integration — the most critical cross-boundary health flow — has no technical infrastructure to mediate it. Each ministry operates in an integration silo. No government-wide integration governance or standards body exists. |
| **Dependency Owner** | **MoDE/PDGA** (national interoperability platform policy and governance), **RDIP** (platform investment), **MoF** (IFMIS integration requirements), **PRA** (potential shared integration infrastructure). |
| **Funding Source** | RDIP includes government service bus / interoperability platform as a planned component. ITU/RDIP EA contract (this project) produces D10 (Integration and Interoperability Strategy) which will define the national framework. |
| **MoH Implications if Gap Persists** | MoH can still deploy its sector-specific HIE (OpenHIM) for intra-health data exchange (EHR↔DHIS2, LIS→Surveillance, EIR→DHIS2 aggregate). However, the critical cross-sectoral flows are blocked: eCRVS birth notification→MPI→NHIS enrollment requires either direct point-to-point integration (fragile, not scalable) or a mediated platform. NHIS financial reconciliation with IFMIS requires cross-ministry integration. Digital ID verification requires connection to the national ID platform. Without a national platform, MoH's HIE becomes another silo — albeit a well-structured one — rather than a connected node in a government-wide integration ecosystem. |
| **MoH Interim Mitigation** | Deploy MoH's HIE (OpenHIM) as a sector-specific platform in Wave 1, designed to connect to a national platform when available. Implement the eCRVS→MPI→e-NHIS flow as a direct, mediated integration through OpenHIM (bilateral agreement with eCRVS team) rather than waiting for a national bus. Use ProgressaPay's proven REST API patterns as a reference architecture for health integration APIs. Design all HIE mediators with configuration for future national platform routing. Advocate in D10 development for a federated integration model where sector-specific HIEs (health, revenue, etc.) connect to a lightweight national mediation layer. |

---

#### GEN-06: Government Cloud and Hosting Policy

| Dimension | Description |
|-----------|-------------|
| **AS-IS** | The government cloud policy exists as a policy document but has not been operationalised. No cloud-first mandate is enforced for government systems. No standardised hosting SLAs for government applications. No shared infrastructure provisioning process. Each ministry and system independently arranges hosting — resulting in the fragmented landscape documented in D5 (6+ different hosting arrangements for MoH systems alone). No government container registry or DevOps pipeline. No data residency requirements are enforced. |
| **TO-BE** | The Government Cloud Policy is operationalised through G-Cloud. Cloud-first is the default for all new government systems. Standardised hosting tiers (development/staging/production) with defined SLAs. Shared container orchestration (Kubernetes). Government container registry for approved images. DevOps pipelines for automated deployment and testing. Data residency requirements enforced (sovereign hosting for Tiers 3–4 data). Migration pathways defined for existing systems. |
| **Gap** | Policy exists but no operational platform. No standardised hosting SLAs. No shared DevOps infrastructure. No data residency enforcement. No migration guidelines or support. No cost recovery model for shared cloud services. No government container registry. The gap between policy and platform (target 2027) is 4 years — during which systems continue to be deployed in ad-hoc hosting arrangements. |
| **Dependency Owner** | **MoDE/PDGA** (policy operationalisation, G-Cloud platform governance), **RDIP** (platform implementation), **Ministry of Finance** (cost recovery model, recurrent budget for cloud operations). |
| **Funding Source** | RDIP (G-Cloud platform deployment). Government recurrent budget required for ongoing cloud operations post-RDIP. |
| **MoH Implications if Gap Persists** | MoH cannot consolidate its fragmented hosting landscape. Each new system deployment (OpenHIM, OpenCR, OpenMRS, DHIS2 Tracker expansions) must negotiate its own hosting arrangement — increasing cost, complexity, and security risk. The containerisation strategy specified in D6 (Docker/Kubernetes for all MoH systems) has no target platform. System-to-system communication within MoH requires traversing multiple hosting environments rather than operating within a shared, secured network segment. Monitoring and observability (Prometheus/Grafana/Loki stack) must be duplicated across hosting environments rather than deployed centrally. Disaster recovery and backup strategies cannot be standardised. |
| **MoH Interim Mitigation** | Adopt containerisation (Docker Compose) as the standard deployment model for all MoH systems immediately, regardless of hosting location. This ensures G-Cloud readiness while working within current constraints. Consolidate hosting where possible — target PDGA DC as an interim consolidated hosting environment for OpenHIM, OpenCR, and HAPI FHIR server. Implement a unified monitoring stack (Prometheus/Grafana) across all MoH systems regardless of hosting location. Document hosting arrangements, SLAs, and costs for all MoH systems to support future migration planning. |

---

### 2.1.7 Cross-Sectoral Gap Summary and Risk Assessment

The six generic gaps described above share several critical characteristics:

**Compound dependency risk:** These gaps are interconnected. The sovereign cloud (GEN-01) depends on the data centre (RDIP infrastructure). The MPI (part of GEN-03) needs the sovereign cloud for hosting. The HIE needs both broadband (GEN-02) and the sovereign cloud (GEN-01). Data sharing through the HIE requires data protection legislation (GEN-04). This creates a compound dependency chain where delay in any single element cascades to multiple others.

**Single programme dependency:** All six gaps depend heavily on a single programme — RDIP (USD 50M for Progressa). While RDIP's scope is comprehensive, its delivery timeline is ambitious and any delays will directly impact MoH's roadmap. MoH has limited influence over RDIP prioritisation and delivery sequencing.

**Funding cliff risk:** The August 2025 EHSSP closure creates an immediate gap in facility connectivity (GEN-02) and system hosting (GEN-06) funding before RDIP infrastructure is ready to absorb these functions. The 2025–2027 period represents a "gap year" where existing services are at risk but successor infrastructure is not yet available.

**Policy-before-platform gaps:** Two gaps (GEN-04 data protection, GEN-06 cloud policy) involve policy frameworks that exist on paper but lack operational implementation. These require institutional action (legislation, operationalisation) that is harder to fund and track than infrastructure construction.

**MoH agency within constraints:** Despite these external dependencies, MoH retains significant agency. The interim mitigations identified for each gap — containerisation, offline-first design, health-sector data governance, sector-specific HIE deployment, probabilistic MPI matching — allow MoH to make meaningful progress during Waves 1–2 even if national infrastructure delivery is delayed. The roadmap in Sections 5–6 is designed with explicit fallback positions for each external dependency.

The following table summarises the timeline risk for each generic gap:

| Gap ID | Component | Planned Delivery | Risk of Delay | Impact on MoH if Delayed 12+ Months |
|--------|-----------|-----------------|---------------|--------------------------------------|
| GEN-01 | G-Cloud Platform | 2027 | **High** — complex platform, no precedent in Progressa | System migration timeline shifts; continued fragmented hosting; data sovereignty non-compliance |
| GEN-02 | Broadband + Last-Mile | 2025–2028 | **Medium** — construction underway; phased delivery | Connectivity gap widens post-EHSSP; real-time integration delayed; EHR rollout restricted to connected sites |
| GEN-03 | Digital ID Platform | 2026–2028 | **High** — NIN production suspended; legal framework pending | MPI operates with degraded matching; eCRVS→e-NHIS automation blocked; patient identity fragmentation continues |
| GEN-04 | Data Protection Law | No committed date | **Very High** — requires National Assembly action | Health data exchange operates in legal vacuum; donor compliance risks; patient privacy unprotected |
| GEN-05 | Government Service Bus | No committed date | **High** — depends on RDIP and national EA governance | Cross-sectoral integration remains point-to-point or manual; MoH HIE becomes sector silo |
| GEN-06 | Cloud/Hosting Policy Operationalisation | 2027 (with G-Cloud) | **High** — policy-to-platform gap | Continued fragmented hosting; no standardised SLAs; duplication of infrastructure investment |

---

*End of Section 2.1 — Generic / Cross-Sectoral Component Gaps*
*Sections 2.2–2.4 (Sector-Specific Gaps by BDAT Domain) continue in Task 03.*

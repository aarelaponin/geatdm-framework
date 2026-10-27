## Section 6: Organisational Structure and Governance

*TOGAF ADM Phase G — Implementation Governance*

This section defines the governance and organisational arrangements required to execute, oversee, and sustain the digital health transformation described in Sections 1–5. Without dedicated governance structures, clear roles, and enabling policies, the phased investment of USD 6.2–10.7M across three waves will replicate the fragmented, donor-driven pattern that produced the current siloed landscape. Section 6 bridges the strategic roadmap to operational reality by specifying who decides, who implements, and who is accountable.

---

### 6.1 AS-IS Organisational Structure for Digital Health

#### 6.1.1 Current Landscape

The Ministry of Health currently has no unified organisational structure for digital health. Digital functions are distributed across multiple directorates and programme teams, each managing its own system in isolation. The validated EA findings (D5, November 2025) confirm the following fragmented arrangement:

**Current Digital Health Units (No Unified Coordination):**

| Unit | Parent Directorate | System(s) Managed | Staff (Est.) |
|------|-------------------|-------------------|-------------|
| HMIS Team | Directorate of Planning & Information | DHIS2 aggregate reporting | 3–5 |
| eCRVS Team | Directorate of Health Services | CIVIS (eCRVS) | 2–3 |
| NHIS Digital Platform Team | NHIA (semi-autonomous) | e-NHIS | 2–3 |
| Laboratory Information Systems | Directorate of Laboratory Services | A-LIS (pilot) | 1–2 |
| Immunisation Data (SPT) | Directorate of Public Health (EPI) | SPT/Vaxa | 1–2 (+ Vaxa TA) |
| Malaria Programme Data | Directorate of Public Health | Programme databases | 1 |
| HIV Programme Data | Directorate of Public Health | Programme databases | 1 |
| Surveillance (IDSR) | Directorate of Public Health | Paper-based IDSR | 1–2 |
| eLMIS | Directorate of Pharmaceutical Services | OpenLMIS/mSupply | 1 |
| HR Information | Directorate of Human Resources for Health | HRMIS | 1 |

**Total estimated digital/data staff across MoH: 15–22 persons** — dispersed across 8+ directorates with no common reporting line, no shared standards, and no coordinated investment planning.

#### 6.1.2 Structural Deficiencies

The current arrangement produces five systemic failures that the target architecture must resolve:

**Ad-hoc decision-making.** There is no governance body authorised to review, approve, or coordinate digital health investments. Each directorate and each donor-funded programme procures or deploys systems independently. The result is the current portfolio of 8+ siloed systems with exactly one automated integration flow (SPT→DHIS2).

**No cross-system coordination.** Each team operates in isolation. The eCRVS team and the e-NHIS team work metres apart but have not operationalised their planned integration (target August 2025, not delivered as of late 2025). There is no forum where cross-cutting technical issues — patient identity, data standards, hosting, security — are resolved.

**Donor-driven fragmentation.** Digital health initiatives follow donor funding streams rather than a coherent architecture. EHSSP funded satellite connectivity; GAVI supports immunisation data; the Global Fund supports surveillance; the World Bank funded eCRVS. Each investment created a standalone system with its own hosting, its own identifiers, and its own reporting chain.

**No digital health strategy or policy framework.** Progressa has no comprehensive national eHealth strategy, no health data governance framework, and no data protection legislation enforced within the health sector. The HMIS policy is the closest approximation but covers only aggregate reporting, not the full digital health landscape.

**Acute capacity constraints.** The existing digital health workforce is small (15–22 persons), undertrained for interoperability and system integration, and dependent on external technical assistance (Vaxa for SPT, Civitas Group for eCRVS, HISP regional node for DHIS2). There are no integration developers, no data governance officers, no health information security officers, and no enterprise architects within MoH.

---

### 6.2 TO-BE Organisational Structure

The target organisational structure implements the three-tier governance model specified in the D6 Future State Architecture, aligned with the PDGA National EA Framework's governance hierarchy.

#### 6.2.1 Tier 1: National Digital Health Steering Committee (NDHSC)

The NDHSC is the apex decision-making body for all digital health investments, standards, and priorities within the health sector.

**Establishment Mechanism:** Ministerial Order signed by the Honourable Minister of Health (target: within 5 months of roadmap endorsement, per W1-01).

**Composition (14 members):**

| # | Position | Organisation | Role |
|---|----------|-------------|------|
| 1 | Permanent Secretary (Chair) | MoH | Strategic direction, political authority |
| 2 | Director, Planning & Information | MoH | HMIS/data strategy, M&E |
| 3 | Director, Health Services | MoH | Clinical systems, service delivery |
| 4 | Director, Public Health | MoH | Surveillance, immunisation, disease programmes |
| 5 | Director, Pharmaceutical Services | MoH | Supply chain, eLMIS |
| 6 | Director, Laboratory Services | MoH | Laboratory information systems |
| 7 | Director, Human Resources for Health | MoH | Health workforce, HRMIS |
| 8 | Executive Director | NHIA | Health insurance, e-NHIS |
| 9 | Director General | PDGA/MoDE | National EA alignment, shared infrastructure |
| 10 | Representative | MoF | Budget allocation, IFMIS alignment |
| 11 | Statistician General (or designee) | PBoS | National statistics, data standards |
| 12 | Country Representative (or designee) | WHO Progressa | Technical norms, global standards |
| 13 | RDIP Project Coordinator (or designee) | World Bank/RDIP | Infrastructure alignment |
| 14 | Civil Society Representative | CSO (rotating) | Community voice, accountability |

**Terms of Reference:**

- **Authority:** Approve or reject all digital health investments exceeding USD 50,000 regardless of funding source (government, donor, or private). Endorse national digital health strategy, architecture standards, and data governance policies.
- **Cadence:** Quarterly (4 meetings per year). Extraordinary meetings may be convened by the Chair for urgent matters (e.g., major system failure, critical procurement decision).
- **Quorum:** 8 of 14 members (simple majority), including the Chair or designated Deputy Chair (Director, Planning & Information).
- **Decision Protocol:** Consensus preferred; simple majority vote if consensus is not reached. Decisions recorded in formal minutes distributed within 5 working days.
- **Reporting:** The NDHSC reports to the Honourable Minister of Health. For cross-sectoral matters, it coordinates with the national Digital Transformation Steering Committee (DTSC) through the PDGA DG member.
- **Secretariat:** The Digital Health and Data Directorate (DHDD) provides secretariat services, including agenda preparation, briefing papers, minutes, and action tracking.

**Key Functions:**

1. Endorse the National Digital Health Strategy 2025–2033 and periodic updates
2. Approve the D7 implementation roadmap and annual work plans
3. Review and approve architecture compliance assessments for digital health investments >USD 50,000
4. Resolve cross-directorate disputes regarding system scope, data ownership, or integration priorities
5. Monitor roadmap implementation through quarterly dashboard reviews
6. Approve health data governance policies and data sharing agreements
7. Oversee the EHSSP-to-DHDD transition of digital health functions
8. Coordinate with the national EA Board and DTSC on whole-of-government matters
9. Review Wave transition go/no-go criteria (Wave 1→2 at end 2026; Wave 2→3 at end 2028)

#### 6.2.2 Tier 2: Digital Health and Data Directorate (DHDD)

The DHDD is the operational engine for digital health within MoH. It replaces the current fragmented arrangement with a single directorate that has mandate, budget, and authority over all digital health systems, data governance, and integration.

**Establishment:** Administrative establishment within MoH, approved by the Public Service Commission. The DHDD upgrades the existing Directorate of Planning & Information by expanding its mandate and adding new positions. Existing HMIS team staff are absorbed into the new structure.

**Reporting Line:** The Chief Director, DHDD reports directly to the Permanent Secretary, MoH. Functionally, the DHDD supports the NDHSC as its executive arm.

**Target Organogram (14 positions at full staffing):**

```
                    ┌─────────────────────────────┐
                    │     Permanent Secretary      │
                    │           (MoH)              │
                    └──────────────┬───────────────┘
                                   │
                    ┌──────────────▼───────────────┐
                    │   Chief Director, DHDD       │
                    │   (Senior Director Grade)     │
                    └──────────────┬───────────────┘
                                   │
         ┌─────────────┬───────────┼───────────┬─────────────┐
         │             │           │           │             │
   ┌─────▼──────┐ ┌───▼────┐ ┌───▼─────┐ ┌───▼────┐ ┌─────▼──────┐
   │Architecture │ │Data    │ │Systems  │ │Project │ │Capacity   │
   │& Standards │ │Govern- │ │Opera-   │ │Coordi- │ │Building & │
   │   Unit     │ │ance    │ │tions    │ │nation  │ │Engagement │
   │            │ │Unit    │ │Unit     │ │Unit    │ │Unit       │
   └─────┬──────┘ └───┬────┘ └───┬─────┘ └───┬────┘ └─────┬──────┘
         │             │           │           │             │
   ┌─────▼──────┐ ┌───▼────┐ ┌───▼─────┐ ┌───▼────┐ ┌─────▼──────┐
   │HIE Manager │ │Data    │ │DHIS2    │ │Project │ │Training   │
   │(1)         │ │Govern- │ │Manager  │ │Coord.  │ │Officer    │
   │            │ │ance    │ │(1)      │ │(1)     │ │(1)        │
   │Integration │ │Officer │ │         │ │        │ │           │
   │Developer   │ │(1)     │ │System   │ └────────┘ └───────────┘
   │(1)         │ │        │ │Admin    │
   └────────────┘ │Health  │ │(1)      │
                   │Info    │ └─────────┘
                   │Security│
                   │Officer │
                   │(1)     │
                   └────────┘
```

**6 Functional Areas:**

| # | Functional Area | Lead Position | Key Responsibilities |
|---|----------------|--------------|---------------------|
| 1 | Architecture & Standards | HIE Manager | Maintain health EA artefacts; architecture compliance review; integration standards; technology standards; FHIR profile governance |
| 2 | Data Governance | Data Governance Officer | Health data dictionary; data quality framework; data sharing agreements; master data management (MPI, registries); data classification enforcement |
| 3 | Systems Operations | DHIS2 Manager + System Admin | Day-to-day operations of DHIS2, OpenHIM, OpenCR, HAPI FHIR; system monitoring (Prometheus/Grafana); backup and DR; G-Cloud spoke management |
| 4 | Information Security | Health Info Security Officer | Health data protection policies; access management (Keycloak); security incident response; audit log review; compliance with national cybersecurity standards |
| 5 | Project Coordination | Project Coordinator | Wave initiative tracking; donor coordination; procurement support; reporting to NDHSC; RDIP alignment |
| 6 | Capacity Building & Engagement | Training Officer | Training programme design and delivery; regional HIS officer coordination; stakeholder engagement; change management; community of practice |

**Administrative Support:** 1 Administrative Assistant supporting the Chief Director and the full directorate.

**Key Positions and Required Competencies:**

| Position | Grade | Competencies Required | Phase |
|----------|-------|----------------------|-------|
| Chief Director, DHDD | Senior Director | Health informatics or public health + IT; 10+ years; EA literacy; stakeholder management | Wave 1 (Month 4–8) |
| Architecture & Standards Lead / HIE Manager | Principal Officer | Health informatics; OpenHIE/OpenHIM; FHIR; integration architecture; 5+ years | Wave 1 (Month 6–10) |
| Data Governance Officer | Principal Officer | Data management; data quality; DHIS2; statistics; health data standards | Wave 1 (Month 6–10) |
| Systems Operations Lead / DHIS2 Manager | Senior Officer | DHIS2 administration; Linux/Docker; PostgreSQL; system monitoring | Wave 1 (Month 6–10) |
| Project Coordinator | Senior Officer | Project management; donor coordination; health sector experience | Wave 1 (Month 6–10) |
| Administrative Assistant | Support Staff | Office management; meeting coordination; filing | Wave 1 (Month 6–10) |
| Health Info Security Officer | Principal Officer | Cybersecurity; Keycloak/IAM; health data privacy; audit | Wave 2 (Month 13–18) |
| Integration Developer | Officer | Java/Node.js; FHIR; OpenHIM mediator development; API integration | Wave 2 (Month 13–18) |
| System Administrator | Officer | Linux; Docker/Kubernetes; PostgreSQL; backup/DR; G-Cloud | Wave 2 (Month 13–18) |
| Training Officer | Officer | Training design; DHIS2 training; digital literacy; adult learning | Wave 2 (Month 13–18) |
| DHIS2 Data Analyst | Officer | DHIS2 analytics; data visualisation; SQL; data quality assessment | Wave 2 (Month 19–24) |
| eLMIS/Supply Chain Specialist | Officer | OpenLMIS; pharmaceutical supply chain; FHIR | Wave 2 (Month 19–24) |
| EHR Support Specialist | Officer | OpenMRS; clinical workflows; FHIR; facility support | Wave 2 (Month 19–24) |
| Surveillance Systems Specialist | Officer | DHIS2 Tracker; IDSR; case-based surveillance; epidemiology | Wave 2 (Month 19–24) |

**Total: 14 positions** (6 in Wave 1, 4 in early Wave 2, 4 in late Wave 2).

#### 6.2.3 Tier 3: Technical Working Groups (TWGs)

Three TWGs provide technical review, standards development, and implementation coordination below the NDHSC decision layer.

**TWG 1: Architecture & Interoperability TWG**

| Attribute | Specification |
|-----------|--------------|
| **Chair** | HIE Manager (DHDD) |
| **Members** | DHDD Architecture & Standards team; PDGA EA Focal Point; eCRVS technical lead; e-NHIS technical lead; DHIS2 Manager; HISP regional node representative; WHO eHealth focal person; integration vendors (as needed) |
| **Cadence** | Monthly (12 per year) |
| **Scope** | Review integration designs; approve FHIR profiles; resolve interoperability issues; review architecture compliance for new system procurements; maintain technology standards registry |
| **Authority** | Technical recommendation to NDHSC; binding for implementation teams on integration standards |
| **Outputs** | Architecture compliance reports; integration design approvals; FHIR profile specifications; technology standards updates |

**TWG 2: Data Standards & Governance TWG**

| Attribute | Specification |
|-----------|--------------|
| **Chair** | Data Governance Officer (DHDD) |
| **Members** | DHDD Data Governance team; PBoS health statistics focal person; DHIS2 data managers (national + regional); eCRVS data team; e-NHIS data team; WHO M&E focal person; programme M&E officers (EPI, Malaria, HIV, TB) |
| **Cadence** | Monthly (12 per year) + quarterly data quality review sessions |
| **Scope** | National health data dictionary maintenance; data quality standards and thresholds; indicator definitions; data sharing agreement templates; master data management (MPI, facility registry, terminology); data classification and access policies |
| **Authority** | Technical recommendation to NDHSC; binding for data reporting standards |
| **Outputs** | Data quality reports; updated data dictionary; data sharing agreements; indicator reference sheets; data classification decisions |

**TWG 3: Implementation & Capacity TWG**

| Attribute | Specification |
|-----------|--------------|
| **Chair** | Project Coordinator (DHDD) |
| **Members** | DHDD Project Coordination team; Regional Health Data Officers (when recruited); training focal persons; RDIP implementation team; Global Fund PMU; GAVI programme officer; facility-level IT/data representatives (rotating) |
| **Cadence** | Monthly (12 per year) + quarterly regional coordination meetings |
| **Scope** | Wave initiative progress tracking; implementation obstacle resolution; regional rollout coordination; training needs assessment; change management; facility readiness assessment; user feedback |
| **Authority** | Operational coordination; escalation to NDHSC for resource or policy decisions |
| **Outputs** | Monthly implementation progress reports; training calendars; regional readiness assessments; risk registers; user feedback summaries |

#### 6.2.4 Ministry EA Focal Point Role

The MoH EA Focal Point is the liaison between MoH and the national EA governance structure managed by MoDE/PDGA. This role ensures that MoH's sector-specific digital health architecture remains aligned with the whole-of-government EA framework.

**Position:** The Chief Director, DHDD serves as the MoH EA Focal Point (dual-hatted role). If the Chief Director delegates, the HIE Manager serves as alternate.

**Responsibilities:**

1. Represent MoH on the national EA Board (monthly meetings chaired by PS MoDE)
2. Ensure MoH digital health investments comply with national EA principles and standards
3. Submit MoH architecture artefacts to the National EA Repository (PDGA-managed)
4. Coordinate with the National EA Office on cross-ministry integration requirements (e.g., eCRVS↔NHIA, IFMIS budget integration)
5. Participate in national Architecture Compliance Reviews for health sector procurements >USD 50,000
6. Report MoH EA maturity status to the EA Board quarterly
7. Facilitate cross-ministry data sharing agreements through the national EA governance process (P-GOV-04 per PDGA EA Framework)

**Reporting:** Functionally to the National EA Office (PDGA) for EA guidance; administratively to the PS MoH.

---

### 6.3 Federated Custodianship Model

Progressa's whole-of-government EA governance establishes a federated model where MoDE/PDGA serves as the national EA custodian and MoH operates as the sector custodian for health. This section defines the system ownership and governance responsibilities within this federated structure.

#### 6.3.1 National-to-Sector Governance Linkage

```
┌────────────────────────────────────────────────────────────────┐
│          WHOLE-OF-GOVERNMENT EA GOVERNANCE                     │
│                                                                │
│   ┌──────────────────────────────────────────────────┐        │
│   │ Digital Transformation Steering Committee (DTSC)  │        │
│   │ (Cabinet Secretary, PS from key ministries)       │        │
│   │ Quarterly — approve EA strategy, resolve conflicts│        │
│   └────────────────────┬─────────────────────────────┘        │
│                        │                                       │
│   ┌────────────────────▼─────────────────────────────┐        │
│   │ Enterprise Architecture Board (EA Board)          │        │
│   │ Chair: PS MoDE                                    │        │
│   │ Members: CIOs/ICT Directors from ministries       │        │
│   │ Monthly — approve standards, compliance reviews   │        │
│   └────────────────────┬─────────────────────────────┘        │
│                        │                                       │
│   ┌────────────────────▼─────────────────────────────┐        │
│   │ National EA Office (within MoDE/PDGA)             │        │
│   │ Chief Enterprise Architect + 3–4 Domain Architects│        │
│   │ Framework, standards, compliance, capacity        │        │
│   └────────────────────┬─────────────────────────────┘        │
│                        │                                       │
└────────────────────────┼───────────────────────────────────────┘
                         │ Coordinates with (via MoH EA Focal Point)
┌────────────────────────▼───────────────────────────────────────┐
│          MoH SECTOR EA GOVERNANCE                              │
│                                                                │
│   ┌──────────────────────────────────────────────────┐        │
│   │ National Digital Health Steering Committee (NDHSC)│        │
│   │ Chair: PS MoH                                     │        │
│   │ Quarterly — health sector digital investments     │        │
│   └────────────────────┬─────────────────────────────┘        │
│                        │                                       │
│   ┌────────────────────▼─────────────────────────────┐        │
│   │ Digital Health and Data Directorate (DHDD)        │        │
│   │ Chief Director + 13 staff (phased)                │        │
│   │ Operations, standards, governance, capacity       │        │
│   └────────────────────┬─────────────────────────────┘        │
│                        │                                       │
│   ┌────────────┬───────┴──────┬───────────────┐               │
│   │ Arch & HIE │ Data Stds & │ Implementation │               │
│   │ TWG        │ Governance  │ & Capacity TWG │               │
│   │ (Monthly)  │ TWG (Mo.)   │ (Monthly)      │               │
│   └────────────┴─────────────┴───────────────┘               │
└────────────────────────────────────────────────────────────────┘
```

**Coordination Mechanisms:**

| Mechanism | Frequency | Participants | Purpose |
|-----------|-----------|-------------|---------|
| EA Board meeting | Monthly | MoH EA Focal Point + all ministry ICT directors | Cross-ministry EA standards, compliance reviews |
| DTSC meeting | Quarterly | PS MoH (or delegate) + PS from key ministries | Strategic digital transformation decisions |
| Bilateral coordination | As needed | DHDD + National EA Office | Health-specific architecture guidance, G-Cloud spoke setup, shared platform coordination |
| Architecture Compliance Review | Per procurement | DHDD prepares; National EA Office reviews | Ensure health sector procurements align with national EA |
| Cross-ministry integration design | Per integration flow | DHDD + relevant ministry IT team + National EA Office | Design integration flows crossing ministry boundaries (e.g., eCRVS, IFMIS) |

#### 6.3.2 System Ownership and Governance Matrix

Each digital health system has a designated Data Owner (accountable for the data domain), a System Custodian (responsible for operations and maintenance), and a Governance Forum (where system-level decisions are reviewed).

| System | Data Domain | Data Owner | System Custodian | Governance Forum | National/Shared? |
|--------|-----------|-----------|-----------------|-----------------|-----------------|
| DHIS2 (Aggregate HMIS) | Aggregate health statistics | Director, Planning & Information | DHDD — Systems Operations Unit | Data Standards TWG | National (MoH) |
| eCRVS / CIVIS | Civil registration (health births/deaths) | Director, Health Services | DHDD — Systems Operations + Civitas Group (vendor) | Architecture TWG + National EA Office (cross-ministry) | Shared (MoH + MoJ) |
| e-NHIS | Health insurance | Executive Director, NHIA | NHIA Digital Team (operational); DHDD (integration) | NDHSC (policy); Architecture TWG (integration) | Sector (NHIA under MoH) |
| SPT → DHIS2 Tracker EIR | Immunisation records | Director, Public Health (EPI) | DHDD — Systems Operations (post-transition) | Implementation TWG | National (MoH) |
| IDSR / DHIS2 Tracker IDSR+ | Disease surveillance | Director, Public Health | DHDD — Systems Operations | Data Standards TWG | National (MoH) |
| A-LIS | Laboratory data | Director, Laboratory Services | DHDD — Systems Operations (with NRL lab staff) | Architecture TWG | National (MoH) |
| OpenMRS (EHR) | Patient clinical records | Director, Health Services | DHDD — Systems Operations | Architecture TWG | National (MoH) |
| OpenHIM (HIE) | Integration transactions | Chief Director, DHDD | DHDD — Architecture & Standards Unit | Architecture TWG + National EA Office | Shared (national infrastructure) |
| OpenCR (MPI) | Patient identity | Director, Planning & Information | DHDD — Architecture & Standards Unit | Data Standards TWG + National EA Office | Shared (national infrastructure) |
| OpenLMIS (eLMIS) | Pharmaceutical supply | Director, Pharmaceutical Services | DHDD — Systems Operations | Implementation TWG | National (MoH) |
| iHRIS (future) | Health workforce | Director, HR for Health | DHDD — Systems Operations | Data Standards TWG | National (MoH) |
| Facility Registry (DHIS2 Org Units) | Health facility master data | Director, Planning & Information | DHDD — Data Governance Unit | Data Standards TWG | National (MoH) |

**Custodianship Principles:**

1. **Data Owners** are MoH directors accountable for data quality, access policies, and domain strategy. They do not need technical expertise but must approve data sharing agreements and data quality thresholds for their domain.
2. **System Custodians** are DHDD units responsible for system availability, performance, security, and maintenance. They operate systems on behalf of Data Owners.
3. **Cross-ministry systems** (eCRVS, OpenHIM, OpenCR) require dual governance: MoH is the health sector user; national governance (EA Board / National EA Office) ensures cross-ministry alignment. Data sharing agreements are approved at both levels.
4. **Vendor-managed systems** (eCRVS/Civitas Group, SPT/Vaxa during transition) require explicit SLA governance. The DHDD holds vendor contracts and manages SLAs; the relevant Data Owner approves functional requirements.

#### 6.3.3 MoDE/PDGA as National EA Custodian vs MoH as Sector Custodian

| Responsibility | National Custodian (MoDE/PDGA) | Sector Custodian (MoH/DHDD) |
|---------------|--------------------------------|---------------------------|
| EA Framework | Develop and maintain national EA framework | Adopt national framework; extend for health sector |
| Architecture Standards | Define cross-government standards (API, security, data classification) | Comply with national standards; define health-specific standards (FHIR profiles, health data dictionary, clinical coding) |
| Compliance Review | Review health sector procurements >USD 50,000 for national EA alignment | Conduct initial compliance review; submit to National EA Office for endorsement |
| Shared Infrastructure | Own and operate G-Cloud, broadband backbone, Government Service Bus (future) | Operate MoH spoke on G-Cloud; connect health systems to national shared infrastructure |
| Integration Governance | Define national API management standards; manage Government Service Bus (future) | Manage health sector HIE (OpenHIM); expose health APIs per national standards |
| Capacity Building | Train ministry EA Focal Points; run EA community of practice | Build health informatics capacity within MoH; participate in national EA community |
| Repository | Maintain national EA repository (architecture artefacts from all ministries) | Contribute MoH architecture artefacts to national repository; maintain health-specific documentation in DHDD |
| Budget | Fund national shared infrastructure and EA Office | Fund health sector digital operations and sector-specific systems |

---

### 6.4 Staffing Plan

The staffing plan addresses three levels: national (DHDD), regional, and facility. Numbers are derived from the D6 target architecture, the Wave 1–3 phasing strategy, and validated organisational baseline data.

#### 6.4.1 National Level: Digital Health and Data Directorate (15–20 Positions)

The DHDD core comprises 14 established positions (Section 6.2.2). An additional 1–6 positions may be required depending on the pace of system deployments and the availability of external technical assistance.

**Phased Recruitment Timeline:**

| Phase | Period | Positions Recruited | Cumulative Total | Funding Source |
|-------|--------|--------------------|-----------------|--------------| 
| Wave 1 — Foundation | Months 4–10 (2025–2026) | Chief Director; Architecture Lead / HIE Manager; Data Governance Officer; DHIS2 Manager; Project Coordinator; Administrative Assistant | 6 | RDIP (institutional strengthening) + Government salary budget |
| Wave 2a — Scale-Up | Months 13–18 (2027) | Health Info Security Officer; Integration Developer; System Administrator; Training Officer | 10 | RDIP + Government + Global Fund (programme-aligned positions) |
| Wave 2b — Specialisation | Months 19–24 (2027–2028) | DHIS2 Data Analyst; eLMIS/Supply Chain Specialist; EHR Support Specialist; Surveillance Systems Specialist | 14 | Government + programme funding (Global Fund, GAVI) |
| Wave 3 — Maturity (if needed) | 2029–2030 | Additional integration developers; analytics specialist; mobile application support; up to 6 additional | 15–20 | Government salary budget (primary); donor top-up for specialist roles |

**Salary Benchmarking Considerations:**

MoH government salary scales are significantly below NGO and donor rates, creating recruitment and retention risk (identified as High likelihood in W1-01 risk register). Mitigations include competitive salary supplementation through RDIP institutional strengthening funds (Wave 1–2), performance-based allowances, professional development opportunities (TOGAF certification, DHIS2 academy), secondment arrangements with WHO and HISP regional node for specialist roles, and progressive absorption of supplemented salaries into the government budget by Wave 3.

**Indicative Annual Salary Costs (at full 14-person staffing):**

| Category | Positions | Annual Cost (USD) |
|----------|-----------|------------------|
| Chief Director (Senior Director grade + supplement) | 1 | 18,000–25,000 |
| Principal Officers (HIE Manager, DGO, Security Officer) | 3 | 36,000–48,000 |
| Senior Officers (DHIS2 Manager, Project Coordinator) | 2 | 18,000–24,000 |
| Officers (8 specialist positions) | 8 | 56,000–80,000 |
| **Total (14 positions)** | **14** | **USD 128,000–177,000 per year** |

These estimates are consistent with the W1-01 costing (USD 100,000–160,000 for 6 positions prorated for 6–12 months) and the D7 Section 5 investment summary (W2-09 Digital Health Workforce Scale-Up: USD 350,000–600,000 over 30 months).

#### 6.4.2 Regional Level: Health Information System Focal Persons (7 Positions)

One Regional HIS/Digital Health Focal Person per region, deployed to the 7 Regional Health Directorates (RHDs).

| Region | Deployment Phase | Reporting Line | Key Responsibilities |
|--------|-----------------|---------------|---------------------|
| Region 1 (Progressa City) | Wave 2a (2027) | RHD Director (admin); DHDD (functional) | DHIS2 data quality supervision; facility support; regional data quality reviews; training delivery; user feedback collection |
| Region 2 | Wave 2a (2027) | Same | Same |
| Region 3 | Wave 2a (2027) | Same | Same |
| Region 4 | Wave 2b (2028) | Same | Same |
| Region 5 | Wave 2b (2028) | Same | Same |
| Region 6 | Wave 2b (2028) | Same | Same |
| Region 7 | Wave 2b (2028) | Same | Same |

**Total: 7 positions.** Recruitment: 3 in 2027 (priority regions with highest facility density), 4 in 2028.

**Profile:** Diploma or degree in health information management, statistics, or IT. DHIS2 training (DHIS2 Academy Level 1 minimum). Experience in health data management at district or regional level preferred.

**Indicative Annual Cost:** USD 5,000–7,000 per position × 7 = USD 35,000–49,000 per year (at full deployment).

**Funding Source:** Government salary budget (long-term); RDIP or Global Fund supplementation during initial deployment.

#### 6.4.3 Facility Level: IT Officers and Data Focal Persons

Facility-level digital health support follows a differentiated model based on facility tier:

| Facility Tier | Count | Digital Health Staff | Role | Phase |
|--------------|-------|---------------------|------|-------|
| Tertiary Hospitals (NTH and a regional referral hospital) | 2 | 1 IT Officer per hospital | System administration (EHR, LIS, eLMIS); local network; device management; user support; data backup | Wave 2 (with EHR deployment) |
| Regional/District Hospitals | 5–6 | 1 IT/Data Officer per hospital | EHR support; data entry supervision; connectivity management; local troubleshooting | Wave 2 (phased with EHR rollout) |
| Major Health Centres | 10–15 | Shared IT support from regional focal person | Data entry supervision; DHIS2 reporting; device management (shared with regional HIS officer) | Wave 2–3 |
| Minor Health Centres / Clinics | ~60–70 | Data focal person (existing health worker, dual role) | DHIS2 data entry; basic device care; reporting | Wave 1–2 (existing arrangement strengthened) |

**Total new facility-level IT/Data positions: 7–8** (hospitals only; health centres rely on regional support and dual-role existing staff).

**Indicative Annual Cost:** USD 4,000–6,000 per position × 8 = USD 32,000–48,000 per year.

#### 6.4.4 Consolidated Staffing Summary

| Level | Positions | Wave 1 (2025–2026) | Wave 2 (2027–2028) | Wave 3 (2029–2030) | Steady State |
|-------|-----------|-------------------|-------------------|-------------------|-------------|
| National (DHDD) | 14–20 | 6 | 14 | 15–20 | 15–20 |
| Regional | 7 | 0 | 7 | 7 | 7 |
| Facility (hospitals) | 7–8 | 0 | 5–6 | 7–8 | 7–8 |
| Facility (data focal — existing, retrained) | ~70 | 70 (existing) | 70 | 70 | 70 |
| **Total new positions** | **28–35** | **6** | **26–27** | **29–35** | **29–35** |

**Total incremental annual salary cost at steady state: USD 195,000–274,000** (DHDD + Regional + Hospital IT officers). This figure is consistent with the D7 Section 5 recurrent cost projection of USD 515,000 per year at steady state, of which personnel is the largest component.

---

### 6.5 Policy Support Requirements

Five key policies or policy amendments are required to enable and sustain the target organisational structure and governance model. Each is linked to a responsible body, a timeline aligned with the three-wave phasing, and the roadmap initiative that creates the demand.

#### Policy 1: Ministerial Order Establishing the NDHSC and DHDD

| Attribute | Specification |
|-----------|--------------|
| **Type** | Ministerial Order (administrative instrument) |
| **Responsible Body** | Honourable Minister of Health, upon recommendation of the Permanent Secretary |
| **Content** | Establishes the NDHSC (composition, TORs, decision authority, cadence); establishes the DHDD as a directorate within MoH (mandate, functional areas, reporting); designates the Chief Director, DHDD as MoH EA Focal Point |
| **Timeline** | Wave 1, Months 1–5 (target: signed within 5 months of roadmap endorsement) |
| **Roadmap Link** | W1-01 (Establish Digital Health Governance) |
| **Status** | To be drafted; D6 and D7 provide the substantive basis |
| **Dependencies** | PS commitment; Public Service Commission endorsement for new directorate establishment |

#### Policy 2: National Digital Health Strategy 2025–2033

| Attribute | Specification |
|-----------|--------------|
| **Type** | National sector strategy (PS-endorsed policy document) |
| **Responsible Body** | MoH Permanent Secretary (endorsement); DHDD (drafting); NDHSC (review and approval) |
| **Content** | Wraps the D6 target architecture into a concise strategy document suitable for donor partner circulation, government budget justification, and public communication. Includes: vision statement, strategic objectives (5–7), target architecture summary, governance model, investment framework, M&E framework |
| **Timeline** | Wave 1, Months 3–7 (draft within 4 months of W1-02 initiation) |
| **Roadmap Link** | W1-02 (Develop National Digital Health Strategy) |
| **Status** | To be drafted; D6 provides 90% of substantive content |
| **Dependencies** | W1-01 initiated (NDHSC at least informally constituted to review draft) |

#### Policy 3: Health Data Governance Framework

| Attribute | Specification |
|-----------|--------------|
| **Type** | Ministry policy / governance framework (PS-endorsed) |
| **Responsible Body** | DHDD — Data Governance Unit (drafting); Data Standards & Governance TWG (review); NDHSC (approval) |
| **Content** | Data ownership model (11 domains per D6 Section 6.1); data stewardship roles (national, regional, facility); data classification (4-tier: Public, Internal, Confidential PII, Restricted Clinical); data quality standards and thresholds; data sharing agreement template and approval process; data retention and archival policy; data breach notification procedures; compliance with future national data protection legislation |
| **Timeline** | Wave 1, Months 3–9 (6 months from initiation to NDHSC endorsement) |
| **Roadmap Link** | W1-03 (Establish Interim Health Data Governance Framework) |
| **Status** | No existing framework; to be developed from scratch using D6 data architecture as the basis |
| **Dependencies** | W1-01 (NDHSC established to approve); alignment with pending national Data Protection Bill |

#### Policy 4: Health Sector Integration and Interoperability Policy

| Attribute | Specification |
|-----------|--------------|
| **Type** | Ministry policy / technical standard (PS-endorsed; EA Board co-endorsed for cross-ministry flows) |
| **Responsible Body** | DHDD — Architecture & Standards Unit (drafting); Architecture & Interoperability TWG (review); NDHSC (approval); National EA Board (endorsement for cross-ministry scope) |
| **Content** | Mandate that all new health information systems expose APIs conforming to FHIR R4 minimum surface; require all inter-system data exchange to be mediated through the HIE (OpenHIM); define API management standards (OpenAPI 3.0, mTLS, OAuth 2.0); establish architecture compliance review process for health sector procurements; specify FHIR profiles for Progressa health context; mandate MPI lookup for all patient-level data transactions; define integration SLA requirements (uptime, latency, error rates) |
| **Timeline** | Wave 1, Months 6–12 (publish alongside first HIE integration flow, W1-06) |
| **Roadmap Link** | W1-06 (Operationalise eCRVS-NHIS Integration); aligned with national Interoperability Mandate (PDGA EA Framework, target Year 2) |
| **Status** | No existing policy; to be developed |
| **Dependencies** | W1-01 (governance), W1-03 (data governance framework), national API standards from PDGA |

#### Policy 5: Amendment to HMIS Policy (Expand Scope to Digital Health)

| Attribute | Specification |
|-----------|--------------|
| **Type** | Policy amendment / replacement (Minister-endorsed) |
| **Responsible Body** | MoH Policy Unit (drafting); DHDD (technical input); NDHSC (review); Minister of Health (endorsement) |
| **Content** | The current HMIS policy covers only aggregate health data reporting. It must be updated or replaced to cover: all digital health systems (EHR, MPI, HIE, LIS, eLMIS, e-NHIS, surveillance); patient-level data governance; health data privacy and protection; cross-system integration mandate; digital health workforce development; health data analytics and use; alignment with the National Digital Health Strategy 2025–2033 |
| **Timeline** | Wave 2, Months 13–18 (draft during Wave 1; formal endorsement early Wave 2 after NDHSC is fully operational) |
| **Roadmap Link** | W1-02 (Digital Health Strategy); W2-09 (Workforce Scale-Up) |
| **Status** | HMIS policy exists but is expiring and insufficient in scope |
| **Dependencies** | W1-01 (NDHSC operational), W1-02 (strategy endorsed), national Data Protection Bill progress |

#### Policy Summary Matrix

| # | Policy | Type | Responsible | Timeline | Roadmap Link |
|---|--------|------|------------|----------|-------------|
| 1 | Ministerial Order (NDHSC + DHDD) | Administrative order | Minister of Health | W1, M1–5 | W1-01 |
| 2 | National Digital Health Strategy 2025–2033 | Sector strategy | PS MoH / NDHSC | W1, M3–7 | W1-02 |
| 3 | Health Data Governance Framework | Ministry policy | DHDD / NDHSC | W1, M3–9 | W1-03 |
| 4 | Integration & Interoperability Policy | Ministry policy / EA Board | DHDD / NDHSC / EA Board | W1, M6–12 | W1-06 |
| 5 | HMIS Policy Update (→ Digital Health Policy) | Policy amendment | Minister of Health | W2, M13–18 | W1-02 / W2-09 |

---

### 6.6 Section Summary

This section has defined the complete governance and organisational framework required to implement the digital health roadmap:

**AS-IS to TO-BE Contrast:**

| Dimension | AS-IS | TO-BE |
|-----------|-------|-------|
| Decision-making | Ad-hoc, donor-driven, per-directorate | NDHSC with formal authority over all investments >USD 50,000 |
| Coordination | No cross-system forum; 8+ siloed teams | Three TWGs providing monthly technical coordination |
| Operational capacity | ~15–22 staff across 8+ directorates, no common reporting | DHDD with 14–20 staff under single directorate, phased recruitment |
| Standards | No integration, data, or security standards | 4 policies covering data governance, interoperability, architecture compliance |
| National alignment | No participation in national EA governance | EA Focal Point on EA Board; federated custodianship with MoDE/PDGA |
| Regional/facility support | No dedicated digital health staff below national level | 7 regional HIS officers + 7–8 hospital IT officers |
| Policy framework | HMIS policy (aggregate only) | 5 policies covering strategy, governance, data, interoperability, workforce |

The total incremental workforce of 28–35 new positions and 5 enabling policies represent the minimum institutional investment required to transform the current fragmented landscape into a governed, coordinated, and sustainable digital health ecosystem. Without this investment, the USD 6.2–10.7M technology roadmap will reproduce the siloed pattern it is designed to eliminate.

---

*End of Section 6: Organisational Structure and Governance*

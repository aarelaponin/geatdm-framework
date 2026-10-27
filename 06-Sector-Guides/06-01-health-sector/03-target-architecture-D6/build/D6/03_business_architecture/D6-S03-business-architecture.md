# 3. Business Architecture (To-Be)

## 3.1 Future Health Service Delivery Model

### 3.1.1 Digital Health Governance Structure

The most critical organisational gap identified in the current state assessment is the absence of a unified digital health governance structure. MoH operates at least eight distinct digital health systems — DHIS2, eCRVS, e-NHIS, SPT, A-LIS, IDSR, NMRI EMRS, and SMS for Health — each managed by separate teams within different directorates, with no overarching coordination mechanism, no shared standards, and no common investment oversight. This fragmentation is the root cause of the siloed system landscape described in D5.

The target governance structure establishes three tiers: a strategic steering body (the National Digital Health Steering Committee), an operational coordination unit (the Digital Health and Data Directorate), and thematic technical working groups. This structure is modelled on the governance frameworks that have proven effective in Tanzania (Digital Health Steering Committee and Secretariat under MoH), Rwanda (MoH-led digital health programme through Rwanda Biomedical Centre), and Kenya (national eHealth governance under the Health Act), adapted to Progressa's small-government context where lean structures are essential.

#### National Digital Health Steering Committee (NDHSC)

The NDHSC is the apex governance body for all digital health strategy, investment, and standards decisions. It provides strategic oversight, resolves cross-directorate and cross-ministerial issues, and ensures that digital health investments align with the National Digital Master Plan, the Health Sector Strategic Plan, and the Enterprise Architecture framework established in D2.

**Composition.** The NDHSC is chaired by the Permanent Secretary of the Ministry of Health, reflecting the principle that health sector digital transformation is a health leadership responsibility, not a technology-driven exercise. Membership includes:

| Role | Representative | Rationale |
|------|---------------|-----------|
| Chair | MoH Permanent Secretary | Strategic authority over health sector; accountable for health outcomes |
| Vice-Chair | Director of Planning and Information, MoH | Custodian of HMIS and health information systems; operational leadership |
| Member | Director of Health Services, MoH | Represents clinical service delivery needs across ~90 facilities |
| Member | Director of Public Health, MoH | Oversees disease surveillance (IDSR), immunisation (EPI), and health promotion |
| Member | Executive Director, NHIA | Semi-autonomous agency managing e-NHIS; requires coordination with MoH systems |
| Member | Director, Directorate of Laboratories | Represents laboratory systems (A-LIS) and laboratory network |
| Member | Director General, PDGA | National ICT authority; EA governance lead; RDIP coordination |
| Member | Representative, MoDE | National digital economy strategy alignment; broadband and infrastructure policy |
| Member | Representative, MoF | Health budget and IFMIS integration; financial sustainability oversight |
| Member | Chief Statistician, PBoS | National statistical coordination; alignment with NSS requirements |
| Member | WHO Country Representative (or delegate) | Technical advisory; CCS strategic-priority alignment |
| Member | RDIP Project Coordinator | Infrastructure delivery coordination; investment sequencing |
| Member | Civil Society Representative | Patient rights and community health perspective |
| Observer | Development Partners (rotating) | GAVI, Global Fund, UNICEF, and other active health development partners |

**Mandate.** The NDHSC has authority to:

1. Approve the national digital health strategy, investment roadmap, and annual work plan.
2. Approve all digital health standards (data, interoperability, security) recommended by the Technical Working Groups.
3. Review and endorse all new digital health investments exceeding a defined threshold (proposed: USD 50,000) regardless of funding source — ensuring that donor-funded projects align with the national architecture and use approved standards.
4. Resolve disputes between MoH directorates and between MoH and external stakeholders regarding digital health system scope, data sharing, and integration priorities.
5. Monitor implementation progress against the EA roadmap (D7) and commission reviews or corrective actions.
6. Champion digital health at the Cabinet level and with development partners to secure sustained political commitment and funding.

**Operating rhythm.** The NDHSC meets quarterly, with extraordinary sessions convened by the Chair for urgent matters. A standing agenda includes: implementation progress review (against D7 milestones), new investment review (any projects proposed since the last meeting), standards and policy approvals (recommendations from TWGs), and risk and dependency tracking (particularly RDIP infrastructure delivery status).

**Establishment mechanism.** The NDHSC is established by Ministerial Order of the Minister of Health, with Terms of Reference endorsed by the PDGA Board to ensure alignment with the national EA governance framework. This mechanism avoids the delays of legislative establishment while providing sufficient institutional authority. The NDHSC should be operational by mid-2026 (Assumption 9, Section 2.5).

#### Digital Health and Data Directorate (DHDD)

The current HMIS team within the Directorate of Planning and Information manages DHIS2 operations and health data reporting. This team has delivered consistent service for over a decade, but its mandate, staffing, and organisational positioning are insufficient for the integrated digital health ecosystem envisioned in this architecture.

The target architecture proposes upgrading and expanding this function into a **Digital Health and Data Directorate** — a dedicated organisational unit within MoH with a mandate that covers all digital health systems, not just HMIS. This is not a proposal to create an entirely new directorate from scratch; rather, it elevates and expands the existing HMIS team's mandate, adds the staff positions required for HIE management, integration, and data governance, and provides the organisational authority to coordinate across all MoH directorates that operate digital health systems.

**Functions of the DHDD:**

1. **Digital Health Strategy and Architecture.** Maintain the MoH digital health strategy and enterprise architecture (this document and its successors). Serve as the MoH focal point for the national EA initiative under PDGA. Prepare investment proposals and business cases for NDHSC review.

2. **Health Information Systems Management.** Operate and maintain the national HMIS (DHIS2), including metadata governance, indicator management, data quality assurance, and user support. Provide system administration for MoH-managed platforms (DHIS2, OpenHIM, OpenCR, and progressively other nationally hosted systems).

3. **Interoperability and Integration.** Manage the Health Information Exchange (OpenHIM), including mediator development, FHIR Façade maintenance, API management, and integration testing. Coordinate integration with national platforms (RDIP Government Service Bus, G-Cloud, digital identity) as they become available.

4. **Data Governance and Standards.** Maintain the health data dictionary, national terminology services (ICD-11, LOINC mappings), master data registries (facility registry, health worker registry), and data quality frameworks. Serve as the secretariat for the Data Standards and Governance TWG.

5. **Digital Health Project Coordination.** Track all active digital health projects across MoH (including donor-funded initiatives), ensure alignment with the national architecture, and report to the NDHSC on portfolio status.

6. **Capacity Building.** Coordinate training programmes for health workers on digital health systems, manage relationships with HISP regional node and other technical partners, and maintain a health informatics professional development pathway.

**Proposed staffing model.** The DHDD requires a phased staffing build-up aligned with system deployment timelines and funding availability:

| Position | Number | Phase | Priority | Funding Source |
|----------|--------|-------|----------|---------------|
| Director, Digital Health and Data | 1 | Phase 1 (2026) | Critical | Government + WHO TA |
| DHIS2/HMIS Specialists | 2–3 | Existing + 1 new | Critical | Government (existing) + EHSSP |
| Health Information Exchange Manager | 1 | Phase 1 (2026–2027) | High | RDIP / WHO |
| Integration Developer | 1 | Phase 2 (2027–2028) | High | RDIP / GAVI |
| Data Governance Officer | 1 | Phase 1 (2026–2027) | High | EHSSP / Government |
| Health Informatician | 1–2 | Phase 2 (2027–2028) | Medium | Government + scholarship |
| EHR Support Specialist | 1 | Phase 2 (2028) | Medium | EHSSP |
| Help Desk / User Support | 1–2 | Phase 1 (2026) | High | Government |
| Regional HIS Focal Persons | 7 | Phase 1–2 (2026–2028) | High | Government + EHSSP |

This staffing model brings the core national team to approximately 12–15 positions, with 7 additional regional focal persons. This is within the range recommended by WHO and comparable country experience for a small country managing a multi-system health information ecosystem (Section 3.3 of the external research synthesis). The phasing reflects the reality that MoH cannot recruit and absorb all positions simultaneously and that some positions (particularly the HIE Manager and Integration Developer) are only needed once the corresponding systems are deployed.

**Organisational positioning.** The DHDD reports to the Director of Planning and Information (who in turn reports to the Permanent Secretary), maintaining continuity with the current reporting line for HMIS. However, the DHDD Director has a dotted-line reporting relationship to the NDHSC for strategic matters, ensuring that digital health coordination is not filtered through a single directorate's priorities. The DHDD Director attends all NDHSC meetings as the technical secretariat and is responsible for preparing the NDHSC agenda, briefing materials, and progress reports.

#### Technical Working Groups

Three standing Technical Working Groups support the NDHSC by providing expert-level analysis, recommendations, and standards development. TWGs meet monthly and report to the NDHSC quarterly.

**Architecture and Interoperability TWG.** This group is responsible for the technical direction of the health information exchange, integration architecture, and application portfolio. Its mandate includes reviewing and recommending integration specifications (FHIR resource profiles, API designs, mediator configurations), evaluating new system proposals for architecture compliance, managing the integration testing and certification process for systems connecting to the HIE, and advising on technology platform decisions. Composition: DHDD Integration Developer (chair), DHIS2 specialists, system vendor representatives (eCRVS/CIVIS, e-NHIS, SPT/Vaxa, A-LIS), PDGA interoperability team, and invited technical experts from WHO and development partners.

**Data Standards and Governance TWG.** This group owns the health data standards landscape, including the national health data dictionary, terminology mappings (ICD-11, LOINC, SNOMED CT GPS), master data management policies, and data quality frameworks. Its mandate includes maintaining the DHIS2 metadata governance process (indicator definitions, data element standards, category combinations), reviewing and approving data sharing agreements between MoH directorates and with external partners, developing the health data classification scheme and consent management protocols, and advising on data protection policy ahead of and aligned with national legislation. Composition: DHDD Data Governance Officer (chair), DHIS2/HMIS specialists, epidemiologists from the Directorate of Public Health, NHIA data manager, PBoS representative, and invited WHO technical advisors.

**Implementation and Capacity TWG.** This group coordinates the practical aspects of system deployment, training, change management, and user support. Its mandate includes developing training curricula and materials for digital health systems, coordinating the facility readiness assessment process (infrastructure, staffing, connectivity) before system deployment, managing the relationship with HISP regional node and other capacity building partners, and tracking user adoption metrics and recommending interventions where adoption is lagging. Composition: DHDD Capacity Building coordinator (chair), regional HIS focal persons, health facility representatives, training institution partners (University of Progressa School of Medicine and Allied Health Sciences), HISP regional node representative, and implementing partner training leads.

### 3.1.2 Target Operating Model for MoH Digital Health

The target operating model describes how MoH operates differently in a digitally enabled environment compared to the current largely paper-based and siloed state.

**From fragmented system teams to integrated digital health management.** In the current state, each digital health system is managed by a separate team with its own reporting line, vendor relationship, and operating procedures. The DHIS2 team, the eCRVS team, the e-NHIS team, and the SPT support team operate largely independently. In the target state, these teams retain their programme-specific expertise but operate under the coordinating umbrella of the DHDD. System-specific operations (DHIS2 metadata management, eCRVS registration workflows, e-NHIS claims processing) remain with programme teams, but cross-cutting functions (integration management, data governance, infrastructure operations, security) are consolidated in the DHDD. This model preserves domain expertise while eliminating the coordination gaps that currently prevent systems from sharing data.

**From manual aggregation to automated data flows.** In the current state, health data moves from facilities to the national level primarily through manual processes: paper registers are transcribed into DHIS2, surveillance reports are compiled from paper forms, and aggregate indicators are calculated manually or semi-manually. In the target state, data flows are progressively automated through the HIE. Clinical encounters recorded in the EHR generate individual-level data that is automatically aggregated for DHIS2 reporting. Immunisation events recorded in the EIR flow to DHIS2 without manual intervention. Disease notifications trigger automatic case-based surveillance records. Insurance claims originate from clinical encounters rather than separate paper-based claims forms. This shift does not happen overnight — the phased implementation timeline (Section 2.4, DD-04 and DD-07) means that automated flows expand incrementally as systems are deployed and integrated.

**From reactive to proactive health information use.** In the current state, health information is primarily used for retrospective reporting — monthly HMIS reports, quarterly data verification, annual health statistics. In the target state, digital systems enable real-time or near-real-time information use: automated surveillance alerts trigger outbreak investigation within hours rather than days; NHIS claims data enables real-time monitoring of service utilisation and expenditure; facility-level dashboards show current stock levels, patient flow, and service coverage. The DHIS2 analytics platform, enhanced with cross-system data from the HIE, supports both routine monitoring and ad-hoc analysis for decision-making at every level from facility to national.

**From donor-driven system selection to architecture-governed investment.** In the current state, digital health investments are largely determined by donor project design — each project brings its own system, its own data model, and its own support structure. In the target state, the NDHSC and the DHDD serve as gatekeepers for all digital health investments. New systems must demonstrate compliance with the national architecture (FHIR interfaces, offline capability, open standards), alignment with the approved application portfolio, and a credible sustainability pathway. Donor proposals are reviewed against these criteria before approval, preventing the accumulation of new silos.

### 3.1.3 Proposed Organisational Changes

The organisational changes proposed in this architecture are designed to be achievable within MoH's existing administrative structure, requiring ministerial-level decisions rather than legislative reform.

**Change 1: Elevate the HMIS team to the Digital Health and Data Directorate.** The current HMIS team within the Directorate of Planning and Information is re-designated as the Digital Health and Data Directorate, with an expanded mandate covering all digital health systems, integration, data governance, and capacity building. The existing DHIS2 specialists transfer directly into the new directorate, preserving institutional knowledge. New positions are added as described in Section 3.1.1. This change requires a Ministerial Order redefining the organisational structure of the Directorate of Planning and Information.

**Change 2: Establish the NDHSC by Ministerial Order.** The National Digital Health Steering Committee is established with the composition and mandate described in Section 3.1.1. This requires drafting Terms of Reference, securing endorsement from the PDGA Board for EA alignment, and issuing a Ministerial Order. The NDHSC replaces any ad-hoc coordination meetings currently convened for digital health matters.

**Change 3: Designate regional HIS focal persons.** Each of the seven Regional Health Directorates designates (or recruits) a Health Information Systems focal person responsible for DHIS2 support, data quality monitoring, EHR user support (as systems are deployed), and first-line troubleshooting. These positions may be existing data officers with expanded terms of reference or new positions funded through EHSSP and progressively absorbed into the government payroll. Regional HIS focal persons report administratively to the Regional Health Director and technically to the DHDD.

**Change 4: Formalise the NHIA–MoH digital coordination mechanism.** NHIA operates with a degree of semi-autonomy within MoH. The e-NHIS system is managed by NHIA with its own ICT support. The target operating model requires that e-NHIS integrates with the HIE (for eCRVS-based identity verification, claims data exchange with the EHR, and aggregate reporting to DHIS2). A formal coordination protocol between NHIA and the DHDD, endorsed by both the MoH Permanent Secretary and the NHIA Executive Director, defines roles, data sharing agreements, integration responsibilities, and escalation procedures.

**Change 5: Establish system-level data stewardship roles.** Each major digital health system is assigned a designated Data Steward — a named individual responsible for data quality, metadata management, and data sharing decisions for that system. Data Stewards are drawn from the existing programme teams: the DHIS2 Data Steward from the HMIS team, the eCRVS Data Steward from the Civil Registration unit, the e-NHIS Data Steward from NHIA, the surveillance Data Steward from the Directorate of Public Health, and the immunisation Data Steward from the EPI programme. Data Stewards participate in the Data Standards and Governance TWG and are accountable to both their programme director and the DHDD for data quality outcomes.

---

## 3.2 Target Business Capability Map

### 3.2.1 Capability Map Structure

The MoH target business capability map follows the two-tier model established in Section 1.5: Tier 1 covers core PDU capabilities that MoH shares with every government ministry, drawn from the GEATDM PDU Reference Architecture; Tier 2 covers health-sector-specific capabilities that reflect MoH's extended role in health service oversight, public health programme management, and national health information systems. Each capability is assessed for current maturity, target maturity, the type of digital support required (new system, enhancement of existing, or integration improvement), and the expected timeline for reaching the target state.

Maturity levels used in this assessment:

| Level | Label | Description |
|-------|-------|-------------|
| 0 | Non-existent | Capability not performed or entirely manual without systematic process |
| 1 | Initial | Ad-hoc, person-dependent, paper-based or basic spreadsheet |
| 2 | Developing | Some digital support, partially standardised processes, limited coverage |
| 3 | Defined | Standardised processes with systematic digital support, reasonable coverage |
| 4 | Managed | Comprehensive digital support, measured performance, data-driven decisions |
| 5 | Optimised | Continuous improvement, fully integrated, analytics-driven, cross-system data use |

### 3.2.2 Tier 1: Core PDU Capabilities

These capabilities apply to MoH's functions as a policy development and sector coordination ministry.

| Capability | Current Maturity | Target Maturity (2033) | Digital Support Required | Timeline |
|-----------|-----------------|----------------------|------------------------|----------|
| **Health Policy Development and Management** | 1 — Policies developed through manual processes; no digital policy repository; limited evidence-based policy analysis | 3 — Policy repository with version control; evidence dashboards from DHIS2 analytics informing policy decisions; digital stakeholder consultation | Government DMS integration; DHIS2 enhanced analytics for policy evidence | 2027–2029 |
| **Legislative and Regulatory Management** | 1 — Paper-based legislative tracking; no digital regulatory management | 2 — Basic digital tracking of health legislation, regulations, and compliance; digital dissemination of standards | Part of government-wide DMS; regulatory tracking module | 2028–2030 |
| **Strategic Planning** | 2 — Health Sector Strategic Plan exists; DHIS2 provides some monitoring data; limited integrated planning tools | 3 — Digital strategic planning supported by cross-system analytics; integrated monitoring dashboard linking health outcomes to resource inputs | Enhanced DHIS2 dashboards + cross-system analytics (post-HIE) | 2028–2030 |
| **Stakeholder and Donor Coordination** | 1 — Coordination through meetings and email; no shared project tracking; fragmented donor reporting | 3 — Digital project portfolio tracking; standardised donor reporting from DHIS2 and system metrics; shared coordination platform | Lightweight project portfolio tool; automated donor reporting from DHIS2 | 2027–2029 |
| **Performance Monitoring and Evaluation** | 2 — DHIS2 provides aggregate indicators; quarterly data verification; limited real-time monitoring; about half of data sources adequate | 4 — Real-time performance dashboards drawing from multiple systems via HIE; automated indicator calculation; data quality index tracked continuously | DHIS2 strengthening + HIE-enabled cross-system dashboards | 2027–2030 |
| **Health Financing Oversight** | 1 — Limited visibility into health expenditure; no digital health financing analytics; IFMIS integration minimal | 3 — Digital health expenditure tracking linked to IFMIS; e-NHIS financial dashboards; budget execution monitoring | IFMIS integration; e-NHIS financial analytics module | 2028–2030 |
| **Document and Records Management** | 1 — Paper-based records; no formal records management system; ad-hoc filing | 2 — Basic electronic document management for core administrative records; digital archiving policy | Government DMS deployment (RDIP-aligned) | 2028–2029 |
| **Internal Communications and Collaboration** | 1 — Email and in-person meetings only; no digital collaboration platform | 2 — Basic digital collaboration (email, shared documents, calendar) aligned with government-wide platform | Government collaboration platform (Microsoft 365 or equivalent via RDIP) | 2027–2028 |
| **Human Resource Management** | 1 — Paper-based HR records; HRMIS planned but not deployed for MoH-specific functions | 2 — HRMIS integration for health workforce data; digital staff registry linked to Health Worker Registry | HRMIS integration; Health Worker Registry (HWR) | 2028–2030 |
| **Financial Management** | 2 — IFMIS operational for government-wide budgeting and expenditure; MoH uses IFMIS for budget execution | 3 — Full IFMIS integration with MoH programme budgeting; automated financial reporting; health-specific expenditure classification | IFMIS enhancement; health budget analytics | 2027–2029 |
| **Procurement Management** | 1 — Manual procurement processes; compliance with government procurement rules but no digital procurement platform | 2 — Government e-procurement platform for health sector procurement; digital contract management | Government e-procurement system (RDIP-aligned) | 2029–2031 |

### 3.2.3 Tier 2: Health-Sector-Specific Capabilities

These capabilities reflect MoH's unique responsibilities in health service oversight, public health programmes, and health information management.

| Capability | Current Maturity | Target Maturity (2033) | Digital Support Required | Timeline |
|-----------|-----------------|----------------------|------------------------|----------|
| **Health Information Management (HMIS/DHIS2)** | 3 — DHIS2 operational since 2010 at all facilities; aggregate reporting functional but with timeliness and completeness gaps; limited Tracker use | 4 — DHIS2 as integrated national health data platform; Tracker programmes for case-based surveillance and EIR; automated data flows from EHR and other systems via HIE; advanced analytics | DHIS2 strengthening (Tracker, analytics); HIE integration for automated data flows | 2026–2029 |
| **Disease Surveillance (IDSR)** | 2 — IDSR operational with 90% facilities having standard case definitions; ~90% paper-based clinical registers; weekly aggregate reporting via DHIS2; no electronic case-based notification; no event-based surveillance | 4 — Electronic case-based surveillance via DHIS2 Tracker for priority conditions; automated case notification triggered from EHR clinical encounters; event-based surveillance pilot; community-based surveillance via mobile tools | DHIS2 Tracker (IDSR case-based); EHR-to-DHIS2 automated notifications via HIE; mobile CBS tools | 2027–2030 |
| **Immunisation Programme Management (EPI)** | 3 — SPT operational at all ~90 facilities with 350,000–400,000 children registered, >99% accuracy, 60% admin time reduction; hybrid paper-digital with scanning delay; SPT→DHIS2 integration operational | 4 — Full electronic immunisation registry (DHIS2 Tracker EIR) at facilities with adequate infrastructure; SPT maintained at remaining facilities; real-time vaccination coverage tracking; automated defaulter identification and SMS follow-up; cold chain monitoring integration | DHIS2 Tracker EIR (phased from SPT); enhanced SMS follow-up; cold chain sensors; eLMIS vaccine supply integration | 2027–2031 |
| **Health Insurance Administration (NHIS)** | 2 — e-NHIS operational with 15,000–20,000 of 60,000 target beneficiaries; about 70 contracted facilities; >95% satisfaction; fee-for-service model with 19 essential interventions; limited digital claims; urban-centric | 4 — e-NHIS scaled to 60,000+ beneficiaries; mobile-first enrollment (USSD and mobile app); offline claims processing at all contracted facilities; eCRVS-NIN integration for identity verification; FHIR-based claims exchange with EHR via HIE; provider payment analytics | e-NHIS enhancement (mobile enrollment, offline claims, CLAIM-it pattern); eCRVS-NHIS integration; FHIR claims interface via HIE | 2026–2029 |
| **Laboratory Services Coordination** | 1 — A-LIS guidelines published January 2023; limited pilot deployment; weak DHIS2 integration; no standardised test coding | 3 — A-LIS operational at reference and regional laboratories; LOINC coding for 50–80 priority tests; automated lab results reporting to DHIS2 and surveillance via HIE; OpenELIS at Bahmni hospital sites | A-LIS scale-up; LOINC mapping; FHIR DiagnosticReport interface; OpenELIS at hospitals | 2028–2031 |
| **Civil Registration for Health Events (eCRVS)** | 3 — eCRVS/CIVIS operational with about 1 million registered (~50% coverage); NIN and QR code; simultaneous NHIS card issuance planned; NIN not synchronised with Immigration | 4 — eCRVS coverage above 80%; integrated with MPI for health identity verification; automated birth notification to e-NHIS for insurance enrollment; death registration linked to mortality surveillance; NIN reconciliation with national digital ID platform | eCRVS-MPI integration via HIE; eCRVS-NHIS integration; mortality-surveillance data flow; national ID reconciliation | 2026–2028 |
| **Drug Supply Chain Management** | 2 — SMS for Health operational at 50 clinics, 6 stores, 5 hospitals for stock tracking; eLMIS in pilot (~50 facilities); Global Fund co-financing eLMIS software | 4 — OpenLMIS operational at all health facilities; automated resupply calculations; consumption data integrated with DHIS2; vaccine supply chain linked to EIR; drug dispensing data available for pharmacovigilance | OpenLMIS full rollout; DHIS2 consumption integration; EIR-supply chain linkage; eLMIS-to-HIE integration | 2027–2030 |
| **Health Facility Management** | 1 — No formal facility registry; facility data maintained informally in DHIS2 organisation units; no systematic infrastructure or equipment tracking | 3 — National Health Facility Registry (master facility list) as authoritative source linked to DHIS2, EHR, e-NHIS; facility infrastructure and equipment inventory; facility readiness monitoring dashboard | Health Facility Registry (OpenHIE component); facility infrastructure module | 2027–2029 |
| **Vital Registration and Statistics** | 2 — eCRVS covers births at ~50%; death registration less mature; limited cause-of-death coding; no systematic link to health outcome monitoring | 3 — eCRVS integrated with mortality surveillance; ICD-11 cause-of-death coding for deaths occurring in health facilities; vital statistics automated reporting to PBoS | eCRVS enhancement (death registration); ICD-11 coding integration; PBoS data flow | 2028–2031 |
| **Community Health Services** | 1 — Community health workers operate with paper-based tools; limited mobile health (mHealth) support; no digital reporting from community level | 2 — Mobile tools for CHWs covering referral, data collection, and supply reporting; CHW activity data integrated with DHIS2; community-based surveillance inputs | CHW mobile application; DHIS2 community module | 2029–2032 |
| **Health Workforce Management** | 1 — No comprehensive health worker registry; limited digital tracking of workforce distribution, qualifications, and training | 3 — Health Worker Registry integrated with HRMIS and DHIS2; workforce distribution analytics supporting deployment decisions; digital training record management | Health Worker Registry (OpenHIE component); HRMIS integration | 2028–2030 |
| **Clinical Care (EHR)** | 0 — ~90% paper-based clinical registers; no national EHR standard; 60% EHR unavailability in public facilities; NMRI EMRS at NMRI facilities only (isolated) | 3 — OpenMRS deployed at 30–40 priority facilities (maternal health, HIV/ART, outpatient); offline-first with local data storage; FHIR-based data exchange with HIE; longitudinal patient record for enrolled facilities | OpenMRS deployment (phased, vertical-first); facility infrastructure provisioning; clinical workflow redesign and training | 2028–2032 |

### 3.2.4 Capability Development Priorities

The capability maturity targets reveal a clear sequencing logic. Foundational capabilities must be addressed first to enable downstream improvements:

**Foundation layer (2026–2027):** Health information management (DHIS2 strengthening), digital health governance (NDHSC and DHDD establishment), civil registration integration (eCRVS-MPI-NHIS), and health facility registry. These capabilities provide the governance structure, the identity foundation, and the data platform on which all other capabilities depend.

**Integration layer (2027–2029):** Disease surveillance modernisation, health insurance scaling, immunisation registry transition, and drug supply chain management. These capabilities require the HIE to be operational with initial integration flows, and they benefit from the MPI and facility registry established in the foundation layer.

**Clinical layer (2028–2032):** Clinical care (EHR deployment), laboratory services, community health services, and health workforce management. These capabilities represent the deepest transformation — moving from paper-based to digital clinical workflows — and require the most infrastructure, training, and change management investment.

---

## 3.3 Future Business Process Architecture

### 3.3.1 Process Prioritisation Framework

The selection of priority processes for digitisation is governed by four criteria: impact on health outcomes (processes where digitisation directly improves care quality, timeliness, or coverage); volume and frequency (high-volume processes yield the greatest efficiency gains from digitisation); existing system readiness (processes where digital systems already exist or are partially deployed are prioritised over those requiring entirely new systems); and integration value (processes that generate or consume data needed by other systems, where digitisation enables cross-system data flows through the HIE).

The eight priority processes described below represent the core health service delivery and public health management workflows that will be progressively digitised over the 2025–2033 architecture period.

### 3.3.2 Priority Process Descriptions

#### Process 1: Patient Registration and Identification

**Description.** Every interaction between a patient and the health system begins with identification. In the target state, patient registration establishes or verifies the patient's identity in the Master Patient Index, links the encounter to the patient's longitudinal record, and ensures that the patient's NIN (from eCRVS) is associated with all subsequent clinical, insurance, and programme data.

| Aspect | Current State | Target State |
|--------|--------------|--------------|
| **State** | Paper-based registration at most facilities; each facility maintains its own patient register with facility-specific medical record numbers; no cross-facility patient identification; eCRVS NIN exists for ~50% of the population but is not routinely used in clinical settings | Digital registration through MPI lookup; patient identified by NIN (primary) or demographic search (secondary); encounter linked to longitudinal record across all facilities; insurance eligibility verified automatically |
| **Key changes** | Shift from facility-specific paper registers to MPI-based digital identification; NIN becomes the universal health identifier; facilities equipped with NIN verification capability (QR code scanning or manual entry) | |
| **System support** | OpenCR (MPI) for identity resolution; eCRVS for NIN verification; OpenMRS (EHR) for registration at EHR-enabled facilities; DHIS2 for aggregate facility visit data; e-NHIS for insurance eligibility check via HIE | |
| **Integration flows** | Patient NIN → MPI query → Patient record retrieved/created → EHR encounter initiated → e-NHIS eligibility checked → Encounter context established for all downstream processes | |

#### Process 2: Clinical Encounter Documentation

**Description.** The clinical encounter — the interaction between a health worker and a patient for the purpose of assessment, diagnosis, treatment, or follow-up — is the fundamental unit of health care delivery. In the target state, clinical encounters at EHR-enabled facilities are recorded digitally, generating structured data that feeds surveillance, insurance claims, aggregate reporting, and the patient's longitudinal record.

| Aspect | Current State | Target State |
|--------|--------------|--------------|
| **State** | ~90% paper-based clinical registers; patient history reconstructed from memory or fragmented paper records; no standardised clinical documentation; diagnoses rarely coded; medication records incomplete | Digital clinical documentation in OpenMRS at priority facilities; structured encounter data (chief complaint, diagnosis [ICD-11], medications [ATC], procedures, observations); paper-based at non-EHR facilities with progressive expansion |
| **Key changes** | At EHR facilities: shift from paper registers to structured digital encounter forms; ICD-11 coding for all diagnoses; clinical decision support for priority protocols (RMNCH, HIV/ART); at non-EHR facilities: improved paper register design with standardised data elements for future digitisation | |
| **System support** | OpenMRS (EHR) for digital encounter documentation; DHIS2 for aggregate reporting of encounter data; terminology services (ICD-11, LOINC) for standardised coding | |
| **Integration flows** | Clinical encounter in OpenMRS → FHIR Encounter/Observation resources → HIE (OpenHIM) → DHIS2 aggregate (auto-calculated); Diagnosis data → IDSR (if notifiable condition detected); Medication data → eLMIS (consumption reporting); Insurance encounter → e-NHIS (claims) | |

#### Process 3: Immunisation Service Delivery and Recording

**Description.** Immunisation is one of Progressa's strongest digital health success stories, with SPT achieving >99% data accuracy across all ~90 facilities. The target state preserves this achievement while progressively transitioning to a fully electronic immunisation registry.

| Aspect | Current State | Target State |
|--------|--------------|--------------|
| **State** | SPT (scanned paper tracking) at all ~90 facilities; 350,000–400,000 children registered; 100,000–150,000 fully vaccinated; 200,000–250,000 SMS follow-ups; hybrid paper-digital workflow with scanning delay limiting real-time data; SPT→DHIS2 integration operational | DHIS2 Tracker EIR at facilities with adequate infrastructure (target: 40–50 facilities by 2031); SPT maintained at remaining facilities during transition; real-time vaccination recording; automated defaulter identification; SMS/USSD follow-up for caregivers; vaccine stock linked to eLMIS; cold chain temperature monitoring |
| **Key changes** | Phased transition from SPT to DHIS2 Tracker EIR (DD-05); no disruption to current >99% data accuracy; EIR facilities record vaccinations in real-time (no scanning delay); child identity linked to eCRVS NIN via MPI; vaccine supply chain visibility through eLMIS integration | |
| **System support** | DHIS2 Tracker (EIR programme); SPT (maintained during transition); MPI (child identity); eLMIS (vaccine stock); SMS gateway (defaulter follow-up) | |
| **Integration flows** | Birth registered in eCRVS → MPI creates child record → EIR enrols child → vaccination recorded → DHIS2 aggregate EPI indicators updated; vaccine administered → eLMIS stock decremented; defaulter identified → SMS to caregiver | |

#### Process 4: Disease Notification and Outbreak Response

**Description.** The Integrated Disease Surveillance and Response (IDSR) system is the backbone of public health emergency preparedness. The target state transforms surveillance from ~90% paper-based to electronic case-based reporting for priority conditions, with automated notification and faster outbreak detection.

| Aspect | Current State | Target State |
|--------|--------------|--------------|
| **State** | IDSR long established (third edition adapted recently); 90% of facilities have standard case definitions; ~90% have IDSR-trained focal persons; ~90% paper-based clinical registers; weekly aggregate reporting to DHIS2; 100% disease detection within 7 days; no electronic case-based notification; no event-based surveillance | Electronic case-based surveillance via DHIS2 Tracker for 7 priority conditions (measles, AFP/polio, cholera, meningitis, yellow fever, neonatal tetanus, COVID-19); automated case notification triggered from EHR diagnosis entry at connected facilities; event-based surveillance pilot using community reports and media monitoring; weekly aggregate IDSR maintained in parallel |
| **Key changes** | Case-based notification for priority conditions replaces aggregate-only reporting; EHR-connected facilities auto-generate case notifications when a notifiable diagnosis is coded; DHIS2 Tracker captures individual case details (demographics, symptoms, lab confirmation, outcome); alert thresholds trigger automated notifications to regional and national epidemiologists; community-based surveillance adds signals from CHWs via mobile tools | |
| **System support** | DHIS2 Tracker (IDSR case-based module, using WHO VPD surveillance package); OpenMRS (EHR, generating diagnosis triggers); SMS/USSD (CHW community-based reporting); A-LIS/OpenELIS (laboratory confirmation data) | |
| **Integration flows** | Notifiable diagnosis in EHR → FHIR Condition resource → HIE → DHIS2 Tracker case notification; Lab confirmation → A-LIS → HIE → DHIS2 Tracker case update; Alert threshold breached → SMS/email to regional epidemiologist and DPH; Aggregate IDSR → DHIS2 → WHO/RHO reporting (IHR compliance) | |

#### Process 5: Health Insurance Enrolment and Claims

**Description.** The National Health Insurance Scheme is a critical instrument for achieving universal health coverage. The target state scales enrolment from 15,000–20,000 to 60,000+ beneficiaries through mobile-first enrolment and improves claims efficiency through offline processing and eCRVS-based identity verification.

| Aspect | Current State | Target State |
|--------|--------------|--------------|
| **State** | e-NHIS operational nationally after a pilot; 15,000–20,000 beneficiaries (~30% of 60,000 target); about 70 contracted facilities; fee-for-service model with 19 essential interventions (maternal/newborn focus); >95% beneficiary satisfaction; limited digital claims processing; urban-centric enrolment; no eCRVS integration | Mobile-first enrolment via USSD and mobile app (leveraging ~80% mobile phone ownership); eCRVS NIN as beneficiary identifier (verified via MPI); offline claims processing at all contracted facilities (CLAIM-it pattern); claims data exchangeable with EHR via FHIR Claim/Coverage resources; provider payment analytics; progressive expansion of benefit package |
| **Key changes** | Enrolment channels expanded from in-person to mobile (USSD for feature phones, app for smartphones); identity verification automated through eCRVS-MPI linkage; claims processing enabled at rural facilities through offline-first design; claims generated from EHR encounters where available, reducing double data entry; beneficiary coverage tracking linked to DHIS2 population denominators | |
| **System support** | e-NHIS (enhanced platform); MPI/OpenCR (beneficiary identity); eCRVS (NIN verification); OpenMRS (encounter-based claims at EHR facilities); mobile/USSD gateway (enrolment); ProgressaPay (provider payments, when onboarded) | |
| **Integration flows** | Birth registered in eCRVS → MPI → e-NHIS auto-enrolment notification (for eligible populations); beneficiary presents at facility → NIN checked against MPI → e-NHIS eligibility confirmed → clinical encounter in EHR → FHIR Claim generated → e-NHIS processes claim → provider payment | |

#### Process 6: Laboratory Ordering and Results Reporting

**Description.** Laboratory services are essential for clinical care, disease surveillance, and programme monitoring. The target state connects the laboratory workflow to the broader health information ecosystem through standardised test ordering, coded results, and automated reporting.

| Aspect | Current State | Target State |
|--------|--------------|--------------|
| **State** | A-LIS guidelines published January 2023; limited pilot deployment; most lab ordering is paper-based (paper request forms); results communicated verbally or on paper; weak DHIS2 integration; no standardised test coding; NMRI EMRS has comprehensive lab integration but is isolated | A-LIS operational at reference and regional laboratories (6–8 sites); LOINC coding for 50–80 priority tests; electronic lab ordering from EHR (OpenMRS) at connected facilities; results returned electronically to EHR and patient record; automated reporting of key indicators to DHIS2 and surveillance; OpenELIS integrated with Bahmni at hospital sites |
| **Key changes** | Lab orders generated from EHR encounter forms; test results coded in LOINC and stored as FHIR DiagnosticReport resources; positive results for notifiable conditions automatically trigger surveillance case notification; aggregate lab indicators (test volumes, positivity rates) automatically reported to DHIS2; hospital laboratories use OpenELIS integrated with Bahmni EHR | |
| **System support** | A-LIS (reference/regional labs); OpenELIS (hospital labs within Bahmni); OpenMRS (EHR, generating lab orders and receiving results); DHIS2 (aggregate lab indicators); DHIS2 Tracker (surveillance case confirmation); OpenHIM (mediating lab data flows) | |
| **Integration flows** | Clinician orders test in EHR → FHIR ServiceRequest → HIE → LIS; Lab performs test → FHIR DiagnosticReport (LOINC-coded) → HIE → EHR (patient record); if notifiable → HIE → DHIS2 Tracker (case confirmation); aggregate indicators → HIE → DHIS2 | |

#### Process 7: Drug Supply Chain Management

**Description.** Reliable drug supply is fundamental to health service delivery. The target state replaces the SMS-based stock tracking system with a comprehensive logistics management platform that connects drug supply to clinical consumption.

| Aspect | Current State | Target State |
|--------|--------------|--------------|
| **State** | SMS for Health operational since 2010 at 50 clinics, 6 regional medical stores, 5 hospitals; basic stock level notifications via SMS; eLMIS in pilot at ~50 facilities; no automated resupply; no consumption-to-dispensing linkage; stock-outs detected late | OpenLMIS operational at all health facilities; automated resupply calculations based on consumption data; stock levels visible in real-time at regional and national level; vaccine supply chain linked to EIR; drug dispensing data from EHR (where deployed) feeds consumption analytics; expiry management and lot tracking |
| **Key changes** | Transition from SMS-based stock tracking to comprehensive eLMIS (OpenLMIS); facility staff record receipts, dispensing, and stock counts on tablets (offline-capable); automated resupply thresholds trigger reorder recommendations; vaccine supply chain integrated with EIR for stock-to-utilisation analysis; consumption data flows to DHIS2 for health system analytics | |
| **System support** | OpenLMIS (primary supply chain platform); DHIS2 (consumption reporting and analytics); EHR/OpenMRS (dispensing data at EHR facilities); EIR/DHIS2 Tracker (vaccine stock-utilisation linkage); OpenHIM (mediating data flows) | |
| **Integration flows** | Drug dispensed at EHR facility → OpenMRS → HIE → OpenLMIS stock decremented; stock level below threshold → OpenLMIS → resupply recommendation → regional medical store; consumption data → OpenLMIS → HIE → DHIS2 (aggregate supply chain indicators); vaccine administered (EIR) → vaccine stock decremented (OpenLMIS) | |

#### Process 8: Aggregate Health Data Reporting (Facility → District → National → WHO)

**Description.** The aggregate health data reporting chain is the backbone of health sector monitoring and accountability. The target state progressively automates this chain, reducing manual data entry and transcription errors while maintaining the accountability and verification mechanisms that ensure data quality.

| Aspect | Current State | Target State |
|--------|--------------|--------------|
| **State** | Facility staff compile monthly reports from paper registers; data entered into DHIS2 at facility or district level; quarterly data verification visits; data flows: facility → district → regional → national → WHO/RHO; about half of data sources adequate; untimely and incomplete reporting | At EHR-connected facilities: aggregate indicators auto-calculated from individual encounter data (no manual compilation); at non-EHR facilities: improved DHIS2 data entry with validation rules; automated data quality checks with immediate feedback; real-time dashboards at all levels; automated ADX-based reporting to WHO/RHO; quarterly data verification retained as quality assurance mechanism |
| **Key changes** | Progressive elimination of manual aggregation at EHR facilities — individual records aggregated automatically by DHIS2 analytics engine based on HIE data flows; enhanced validation rules in DHIS2 prevent common data entry errors at non-EHR facilities; automated data quality index scores visible to facility, district, regional, and national managers; ADX export to WHO/RHO replaces manual compilation of international reports; data use culture strengthened through dashboards and quarterly review meetings | |
| **System support** | DHIS2 (national aggregate platform and analytics engine); OpenHIM (HIE for automated individual-to-aggregate data flows); OpenMRS (EHR, generating individual encounter data); DHIS2 dashboards (all levels); ADX export module (international reporting) | |
| **Integration flows** | EHR encounter → HIE → DHIS2 (individual-to-aggregate); EIR vaccination → DHIS2 EPI indicators; e-NHIS claims → DHIS2 insurance coverage indicators; eLMIS consumption → DHIS2 supply chain indicators; DHIS2 aggregate → ADX → WHO/RHO; DHIS2 → PDGA national EA repository (health sector KPIs) | |

### 3.3.3 Process Digitisation Summary

| # | Process | Current State | Target State | Key System(s) | Integration Complexity |
|---|---------|--------------|--------------|---------------|----------------------|
| 1 | Patient Registration and Identification | Manual, paper, facility-specific | Digital, MPI-based, NIN-linked | MPI/OpenCR, eCRVS, EHR | Medium — requires MPI + eCRVS integration |
| 2 | Clinical Encounter Documentation | ~90% paper-based | Digital at 30–40 priority facilities | OpenMRS (EHR) | High — requires EHR deployment + HIE |
| 3 | Immunisation Service Delivery | SPT (hybrid, >99% accuracy) | DHIS2 Tracker EIR (phased from SPT) | DHIS2 Tracker, MPI, eLMIS | Medium — phased transition |
| 4 | Disease Notification and Outbreak Response | ~90% paper, weekly aggregate | Electronic case-based, automated alerts | DHIS2 Tracker, EHR, A-LIS | High — requires EHR + LIS + HIE |
| 5 | Insurance Enrolment and Claims | e-NHIS (~30% of target), urban-centric | Mobile enrolment, offline claims, 60,000+ | e-NHIS, MPI, eCRVS, EHR | Medium — requires eCRVS-NHIS + mobile |
| 6 | Laboratory Ordering and Results | Paper-based, A-LIS early stage | Electronic ordering/results, LOINC coded | A-LIS, OpenELIS, EHR, DHIS2 | High — requires LIS scale-up + HIE |
| 7 | Drug Supply Chain | SMS for Health + eLMIS pilot | OpenLMIS at all facilities, automated resupply | OpenLMIS, EHR, EIR, DHIS2 | Medium — requires eLMIS rollout + HIE |
| 8 | Aggregate Health Data Reporting | Manual compilation, DHIS2 entry | Auto-aggregation from individual systems | DHIS2, HIE, all clinical systems | High — requires HIE + multiple system integrations |

---

## 3.4 Stakeholder Ecosystem and Governance

### 3.4.1 NDHSC Terms of Reference

The National Digital Health Steering Committee's composition and strategic role are described in Section 3.1.1. This section provides the formal Terms of Reference suitable for inclusion in the Ministerial Order establishing the Committee.

**Name.** National Digital Health Steering Committee (NDHSC).

**Establishment.** Established by Order of the Minister of Health, with endorsement from the PDGA Board for alignment with the National Enterprise Architecture governance framework.

**Purpose.** To provide strategic governance, investment oversight, and standards authority for all digital health initiatives in Progressa, ensuring alignment with the National Health Sector Strategic Plan, the national digital master plan (ten-year), and the national Enterprise Architecture framework.

**Authority.** The NDHSC has decision-making authority over:

1. Approval of the national digital health strategy and its periodic revisions.
2. Approval of the annual digital health investment plan, including review and endorsement of all digital health projects exceeding USD 50,000 regardless of funding source.
3. Adoption of health data standards (data dictionaries, interoperability specifications, coding systems) recommended by the Data Standards and Governance TWG.
4. Adoption of integration standards and specifications recommended by the Architecture and Interoperability TWG.
5. Resolution of cross-directorate and cross-agency disputes relating to digital health systems, data sharing, and integration priorities.
6. Commissioning of architecture reviews (per the 2027, 2029, and 2031 review schedule defined in Section 1.3) and approval of architecture amendments.

**Composition.** As specified in Section 3.1.1 (14 members plus observers).

**Chair.** MoH Permanent Secretary. In the absence of the PS, the Director of Planning and Information serves as Acting Chair.

**Secretariat.** The Digital Health and Data Directorate provides secretariat support, including agenda preparation, meeting documentation, progress reports, and follow-up on decisions.

**Meeting frequency.** Quarterly (4 meetings per year), with extraordinary sessions convened by the Chair as required.

**Quorum.** A minimum of 8 of the 14 members must be present, including either the Chair or Vice-Chair.

**Reporting.** The NDHSC reports to the Minister of Health on digital health strategy implementation. It provides an annual report to the PDGA Board on health sector EA compliance and progress. It furnishes progress updates to the RDIP Project Steering Committee as requested.

**Review.** The NDHSC's Terms of Reference are reviewed every two years, coinciding with the scheduled architecture review cycles.

### 3.4.2 Architecture and Interoperability TWG

**Mandate.** To develop, maintain, and enforce the technical architecture and interoperability standards for Progressa's health information exchange and digital health ecosystem.

**Specific responsibilities:**

1. Develop and maintain FHIR resource profiles (Patient, Encounter, Observation, Immunization, DiagnosticReport, Claim, Coverage, and others as needed) adapted to Progressa's health data requirements.
2. Define API specifications and mediator configurations for the OpenHIM-based HIE.
3. Review and evaluate new digital health systems proposed for connection to the HIE, assessing architecture compliance, interoperability readiness, and security posture.
4. Manage the integration testing and certification process — no system connects to the production HIE without TWG certification.
5. Advise the NDHSC on technology platform decisions, including EHR, LIS, and eLMIS platform evaluations.
6. Maintain the integration catalogue (documentation of all active integration flows, API endpoints, mediator configurations) and the integration sandbox for developer testing.
7. Monitor international standards evolution (HL7 FHIR releases, IHE profile updates, WHO digital health guidelines) and recommend adoption timelines.

**Composition.** DHDD HIE Manager (Chair); DHIS2 system administrator; integration developer (DHDD); eCRVS/CIVIS technical lead; e-NHIS technical lead; SPT/Vaxa technical liaison; PDGA interoperability team representative; WHO digital health advisor (invited); implementing partner technical leads (as relevant).

**Meeting frequency.** Monthly, with ad-hoc working sessions as needed for specific integration specification development.

### 3.4.3 Data Standards and Governance TWG

**Mandate.** To develop and maintain health data standards, data governance policies, and data quality frameworks for Progressa's health information ecosystem.

**Specific responsibilities:**

1. Maintain the national health data dictionary, including data element definitions, coding standards, and permissible values.
2. Govern DHIS2 metadata: approve new data elements, indicators, category combinations, and organisation unit changes through a formal change management process.
3. Manage the adoption and localisation of international classification systems: ICD-11 (diagnosis and mortality coding), LOINC (laboratory test coding), SNOMED CT Global Patient Set (clinical terminology), and ATC (pharmaceutical classification).
4. Develop and maintain data sharing agreements — templates and specific agreements for data exchange between MoH directorates, between MoH and NHIA, and with external partners.
5. Develop and maintain the health data classification scheme (public, internal, confidential, restricted) and associated handling procedures.
6. Define consent management policies for the EHR, MPI, and HIE, appropriate to the Progressa context (considering low-literacy populations and the absence of data protection legislation).
7. Monitor data quality indicators across all health information systems and recommend corrective actions.
8. Advise on data protection policy alignment with the REC regional framework on personal data protection and any emerging national legislation.

**Composition.** DHDD Data Governance Officer (Chair); DHIS2/HMIS specialists; epidemiologist (Directorate of Public Health); NHIA data manager; PBoS representative; Civil Registration data officer; WHO health information advisor (invited); academic partner representative (University of Progressa).

**Meeting frequency.** Monthly, with quarterly data quality review sessions involving regional HIS focal persons.

### 3.4.4 Implementation and Capacity TWG

**Mandate.** To coordinate the practical deployment, training, change management, and user support activities required for digital health system implementation across Progressa's health facilities.

**Specific responsibilities:**

1. Develop and maintain facility readiness assessment criteria — a standardised checklist covering infrastructure (electricity, connectivity, physical space, devices), staffing (trained users, data focal persons), and organisational readiness (management buy-in, workflow redesign completion) that must be satisfied before a facility receives a new digital health system.
2. Coordinate training curricula development and delivery for all digital health systems, ensuring consistent quality across training events and alignment with adult learning principles.
3. Manage the relationship with HISP regional node (for DHIS2 training and mentorship), Vaxa Foundation (for SPT/EIR transition training), and other technical training partners.
4. Operate the train-the-trainer programme: identify and develop national and regional master trainers who can sustain training capacity beyond project-funded training events.
5. Track user adoption metrics (system login frequency, data entry completeness, feature utilisation) and recommend targeted interventions where adoption is below expected levels.
6. Coordinate change management activities — stakeholder communication, workflow redesign workshops, clinical champion identification — for each major system deployment.
7. Manage the help desk and user support escalation pathway from facility level (first-line: regional HIS focal person) to national level (DHDD system specialists) to vendor/partner support (third-line).

**Composition.** DHDD Capacity Building coordinator (Chair); regional HIS focal persons (7); health facility representatives (rotating); University of Progressa School of Medicine and Allied Health Sciences representative; HISP regional node representative; implementing partner training leads; WHO training advisor (invited).

**Meeting frequency.** Monthly, with quarterly regional coordination meetings.

### 3.4.5 Decision-Making Flow for Digital Health Investments

All digital health investments — whether government-funded, donor-funded, or partner-implemented — follow a standardised decision flow to ensure architecture alignment and prevent the accumulation of new system silos.

**Step 1: Proposal submission.** Any entity (MoH directorate, NHIA, development partner, or donor) proposing a new digital health system, a significant enhancement to an existing system, or a new integration flow submits a structured proposal to the DHDD. The proposal must describe the business need, the proposed technology approach, the estimated cost (including three-year operational costs), and the integration requirements.

**Step 2: Architecture compliance review.** The DHDD assesses the proposal against the target architecture documented in D6. The Architecture and Interoperability TWG reviews the technical specification. The review evaluates: Does the system use approved standards (FHIR, open-source preferred)? Does it integrate through the HIE or have a credible integration plan? Does it support offline-first operation where required? Is it consistent with the approved application portfolio? Does it have a sustainability pathway beyond project funding?

**Step 3: Data governance review.** The Data Standards and Governance TWG reviews data aspects: Does the proposal use approved data elements and coding systems? Does it respect the data classification scheme? Are data sharing agreements in place? Is the consent model appropriate?

**Step 4: NDHSC decision.** For investments exceeding USD 50,000 or involving a new system not in the approved portfolio, the DHDD presents the proposal to the NDHSC with TWG recommendations. The NDHSC approves, approves with conditions, defers pending further analysis, or rejects. For smaller investments within the approved portfolio, the DHDD Director may approve directly and report to the NDHSC at the next quarterly meeting.

**Step 5: Implementation coordination.** Approved projects are registered in the digital health project portfolio and assigned to the Implementation and Capacity TWG for deployment coordination. The DHDD monitors implementation against the approved specification and reports progress to the NDHSC.

This governance flow is intentionally lightweight — suitable for a small government context where elaborate approval processes would become bottlenecks — but sufficiently structured to prevent the pattern of uncoordinated donor-funded system proliferation that characterised the current fragmented landscape.

---

*End of Section 3: Business Architecture (To-Be)*

# PROMPT: D6 — Future State "To-Be" Architecture for Ministry of Health

## ROLE AND OBJECTIVE

You are the ITU Lead Enterprise Architect developing Deliverable D6: **Documented Future State "To-Be" Architecture** for Progressa's Ministry of Health (MoH). This deliverable is part of the Progressa Enterprise Architecture Initiative under World Bank contract [contract reference].

Your task is to produce a comprehensive, professional-quality target architecture document that covers all five BDAT+I domains (Business, Data, Application, Technology, and Integration Architecture), following the GEATDM method's ADAPT phase.

---

## CONTRACT REQUIREMENTS FOR D6

Per the ITU-PDGA agreement, D6 must deliver:

**Documented Future State "To-Be" Architecture** — the envisioned future state of IT systems, detailing desired improvements, innovations, and alignment with business objectives, thereby guiding strategic initiatives and facilitating the realization of organizational goals.

The To-Be architecture will have:
- **Generic components** for nationwide cross-sectorial infrastructure
- **Specific components** that have use case and sectoral dependencies

**Required outcomes**: Validity period for EA framework agreed on; To-Be EA considering readiness factors, constraints and priorities.

**Specific content required** (from deliverables specification):

1. **Business Architecture**: Future business model, Target operating model, Proposed organizational changes
2. **Application Architecture**: Future state vision, Application modernization strategy, Target application portfolio
3. **Data Architecture**: Enhanced data collection mechanisms, Unified data sources proposal, Data lake/EDW design, Master Data Management strategy, Advanced analytics platforms design
4. **Integration Architecture**: Unified integration framework, Central integration governance model, Future integration standards
5. **Technology Architecture**: Unified technology framework, Service-oriented architecture design, Interoperability standards, Central technology governance model

---

## ORGANIZATION CLASSIFICATION

MoH is classified as a **PDU (Policy Development Unit)** with significant **sector-specific service delivery oversight**. This means:

- **Core PDU functions**: Health policy development, sector coordination, health information systems governance, strategic planning, donor coordination
- **Sector-specific oversight**: MoH does not directly deliver mass transactional services (unlike PRA), but it oversees ~90 health facilities, coordinates health programs (immunization, disease surveillance, RMNCH, HIV/TB/malaria), and manages national health information systems
- **Reference architecture**: Use the GEATDM PDU Reference Architecture as the base, extended with health-sector-specific capabilities from the eHealth Reference Architecture

---

## STRATEGIC ALIGNMENT

The target architecture must align with:

1. **National digital master plan (ten-year)** — sets a national digitisation target for government services
2. **National Health Policy and Health Sector Strategic Plan**
3. **WHO country cooperation strategy** — a strategic priority: strengthen digital health, data and technology
4. **EHSSP** project objectives (health service quality, NHIS, eCRVS, eLMIS)
5. **RDIP/DTFA** infrastructure (broadband, cloud, digital ID, interoperability platform)
6. **EA Framework principles** established in D2: Reuse over build, Integrate over duplicate, Cloud-first where appropriate, Security by design

**Target EA maturity**: Progress from current 2.19 toward 4.1+ by 2030.

**Architecture validity period**: 2025-2033 (aligned with Digital Master Plan), with review cycles every 2-3 years.

---

## CURRENT STATE SUMMARY (AS-IS)

The following summarizes the key findings from D5 (ea-findings-BDAT-v3.docx). The target architecture must address ALL gaps identified.

### MoH Organization Structure
- 9 Directorates including Directorate of Planning & Information (owns HMIS)
- Separate teams for DHIS2, eCRVS, NHIS, Lab, Surveillance — limited coordination
- No unified digital health governance structure
- No comprehensive national eHealth/digital health strategy

### Current Application Portfolio
| System | Status | Coverage | Key Issues |
|--------|--------|----------|------------|
| DHIS2 | Operational since 2010 | National aggregate HMIS | Incomplete/untimely reporting, limited advanced use, used for COVID-19 Tracker |
| eCRVS/CIVIS | Operational | ~1M registered, ~50% coverage | Separate NIN from Immigration; eCRVS-NHIS integration planned not operational |
| e-NHIS | Operational | 15,000–20,000 of 60,000 target beneficiaries, about 70 facilities | Fee-for-service, maternal/newborn focus, limited digital claims |
| SPT (Vaxa) | Operational | All ~90 facilities, 350,000–400,000 children | Hybrid paper-digital; 99%+ accuracy; scanning delay limits real-time use |
| A-LIS | Early stage | Guidelines published Jan 2023 | Limited adoption, weak DHIS2 integration |
| IDSR | Partially electronic | ~90% paper-based facilities | No event-based or community-based surveillance |
| NMRI Unit EMRS | Operational | NMRI facilities only | Research-focused, not integrated with national systems |

### Critical Gaps to Address
1. **No health information exchange (HIE) layer** — systems operate as silos
2. **~90% paper-based clinical records** at facilities
3. **No national EHR standard** or interoperability
4. **No unified patient identifier** across health systems
5. **eCRVS-NHIS integration** planned but not operational
6. **Limited IT staff capacity** — insufficient for system maintenance
7. **No health data governance framework** — unclear data sharing policies
8. **No data protection law** (CRVS Bill pending)
9. **Limited rural connectivity**, ~60% electricity access
10. **Single submarine cable** — no redundancy
11. **No sovereign data center** yet (RDIP planned)

### Current EA Maturity: Level 1 (Initial/Ad-hoc) for health digital systems

---

## INPUT MATERIALS AND REFERENCES

### Files in the project folder:

1. **`_as-is/ea-findings-BDAT-v3.docx`** — Comprehensive AS-IS assessment across all BDAT domains. USE THIS as the baseline for gap identification and target state design.

2. **`_ehealth/e-health-ref-arch-*.md`** (7 chapters) — eHealth Reference Architecture covering:
   - Ch1: Legal, governance, and organizational framework
   - Ch2: Technical architecture (5 layers)
   - Ch3: Digital health service portfolio (31 services)
   - Ch4: Operations and maintenance
   - Ch5: Standards and interoperability (HL7 FHIR, DICOM, SNOMED CT, LOINC, ICD-11)
   - Ch6: Capacity building
   - Ch7: Implementation maturity model (Level 1→4)
   USE THIS as the primary reference architecture to adapt for Progressa MoH.

3. **`_cloud/cloud-plan.docx`** — GovStack sovereign cloud strategy: hub-and-spoke model, sovereignty principles, isolation by design. USE THIS for the technology architecture cloud components.

4. **`_ext-research/`** — Five research files with evidence from comparable countries:
   - `research-on-patterns.md` — OpenHIE, DHIS2, FHIR, cloud, offline-first patterns
   - `ehr-practices.md` — EHR platforms (OpenMRS), MPI/patient ID, NHIS scaling
   - `EHSSP...md` — Progressa funding landscape (EHSSP, RDIP, GAVI, Global Fund, WHO)
   - `MoH-current.md` — Governance models, sustainability, capacity, data privacy
   - `MoH-sectors.md` — Immunization (SPT→EIR), LIS, surveillance architecture
   USE THESE for evidence-based design decisions and country examples.

### Framework References (in GEATDM-Method-Repository/):

5. **`02-Reference-Architectures/`** — PDU Reference Architecture (base model for MoH)
6. **`01-Toolkit/GEATDM-WP6-T61-Toolkit-v1.0.md`** — TK-12 (TO-BE Architecture Template), TK-13 (Tailoring Decision Log), TK-14 (Capability Adaptation Worksheet), TK-15 (Application Mapping Worksheet)

### Project Knowledge (PK):
7. **PAERA Framework** (`paera-framework.docx`) — PDU, RA, SDA reference models
8. **PDGA EA Framework** (`PDGA_EA_Framework.md`) — National EA framework phases and principles
9. **Contract** (`contract-agreement.pdf`) — Deliverable specifications

---

## DOCUMENT STRUCTURE

Produce the D6 document with the following structure. Each section should be substantive (not just headings and bullet points) with narrative explanation, specific technical details, and justification for design decisions.

### Front Matter
- Cover page: "Deliverable D6: Future State 'To-Be' Architecture — Ministry of Health"
- Document control (version, date, authors, reviewers, approval)
- Table of contents
- Executive summary (2-3 pages: vision, key design decisions, alignment with national strategy)
- List of abbreviations

### 1. Introduction
- 1.1 Purpose and Scope
- 1.2 Relationship to Other Deliverables (D2 Framework, D5 AS-IS, D7 Roadmap, D10 Integration Strategy, D11 Cloud Strategy)
- 1.3 Architecture Validity Period (2025-2033)
- 1.4 Methodology (GEATDM ADAPT phase, TOGAF ADM Phase B-D equivalent)
- 1.5 MoH Classification and Reference Architecture Selection (PDU + health sector extensions)

### 2. Architecture Vision
- 2.1 Strategic Context and Drivers (Digital Master Plan, Health Sector Plan, EHSSP, RDIP)
- 2.2 Architecture Principles (from D2, adapted for health sector)
- 2.3 Target State Vision Statement
- 2.4 Key Design Decisions and Rationale (table of major decisions with justification)
- 2.5 Constraints and Assumptions (infrastructure, capacity, funding, timeline realities)
- 2.6 Dependencies on National/Cross-Sectoral Infrastructure (RDIP cloud, digital ID, ProgressaPay, G-Cloud)

### 3. Business Architecture (To-Be)
- 3.1 Future Health Service Delivery Model
  - Digital health governance structure (National Digital Health Steering Committee, Digital Health Directorate, TWGs)
  - Target operating model for MoH digital health
  - Proposed organizational changes (upgrade HMIS team → Digital Health & Data Directorate)
- 3.2 Target Business Capability Map
  - Core PDU capabilities (policy, coordination, oversight)
  - Sector-specific capabilities (health information management, disease surveillance, immunization program management, health insurance administration, laboratory oversight, health facility management)
- 3.3 Future Business Process Architecture
  - Priority processes for digitization (patient registration, clinical encounter, immunization, disease notification, insurance claims, lab ordering/results, aggregate reporting)
- 3.4 Stakeholder Ecosystem and Governance
  - NDHSC composition and TORs
  - Architecture & Interoperability TWG
  - Data Standards & Governance TWG
  - Implementation & Capacity TWG

### 4. Data Architecture (To-Be)
- 4.1 Data Governance Framework
  - Data ownership model (by system/domain)
  - Data stewardship roles
  - Data quality management framework
  - Health data protection policy (interim, pending national legislation)
- 4.2 Master Data Management Strategy
  - Master Patient Index (MPI) architecture — leveraging eCRVS NIN as foundational identifier, OpenCR-based client registry
  - Facility Registry (master facility list)
  - Health Worker Registry
  - Terminology services (ICD-11, LOINC, local code sets)
- 4.3 Data Integration Architecture
  - Unified data model approach
  - Data exchange standards (HL7 FHIR target, ADX for DHIS2 aggregate, REST/JSON transitional)
  - National health data dictionary
- 4.4 Analytics and Business Intelligence
  - DHIS2 as national health statistics and analytics platform
  - Enhanced dashboards and data use
  - Future: health data warehouse for cross-system analytics
- 4.5 Data Classification and Privacy
  - Health data classification tiers (public, internal, confidential, restricted)
  - Consent management framework
  - REC regional data protection framework alignment

### 5. Application Architecture (To-Be)
- 5.1 Target Application Portfolio Overview (high-level diagram)
- 5.2 National Health Platform Layer
  - **DHIS2** — Strengthen as national HMIS + selected Tracker programs (aggregate + EIR + surveillance + RMNCH)
  - **Health Information Exchange (HIE)** — OpenHIE-aligned: OpenHIM as interoperability layer, Client Registry (MPI), Facility Registry, Terminology Service, Shared Health Record
  - **Master Patient Index** — OpenCR-based, accepting eCRVS NIN + Immigration NIN + facility MRNs + e-NHIS IDs
- 5.3 Clinical Systems Layer
  - **EHR Strategy** — OpenMRS-based incremental digitization: start with maternal health, HIV/ART, outpatient registers in 30-40 priority facilities; offline-first with tablet/mobile point-of-care
  - **Electronic Immunization Registry (EIR)** — Phased transition: maintain SPT short-term → pilot DHIS2 Tracker EIR → progressive replacement where infrastructure allows
  - **Laboratory Information System** — A-LIS/OpenELIS at reference and regional labs first; LOINC mapping for priority tests; LIS→DHIS2 and LIS→surveillance integration
- 5.4 Health Administration Layer
  - **e-NHIS** — Platform scaling: mobile enrollment, offline claims (CLAIM-it pattern), mobile money integration, FHIR-based claims interoperability target
  - **eCRVS** — Expand interoperability: eCRVS→MPI, eCRVS→e-NHIS, eCRVS→EIR integration via HIE
  - **eLMIS** — Complete rollout to all facilities, integrate with LIS and DHIS2
- 5.5 Surveillance Layer
  - **IDSR Modernization** — Electronic case-based surveillance via DHIS2 Tracker; aggregate IDSR via DHIS2
  - **Event-Based Surveillance** — Africa CDC EMS / DHIS2 Event programs for signal capture
  - **Community-Based Surveillance** — Mobile tools for community health workers
- 5.6 Application Modernization Strategy
  - Retain, Invest, Migrate, Replace, Retire decisions for each current system
  - New system procurement requirements (FHIR compliance, offline-capable, open standards)
- 5.7 Application Portfolio Summary Table

### 6. Integration Architecture (To-Be)
- 6.1 Integration Architecture Vision
  - From point-to-point silos → hub-and-spoke via national HIE
  - OpenHIE-aligned interoperability layer (OpenHIM)
- 6.2 Priority Integration Flows (with sequence diagrams or flow descriptions)
  - Flow 1: eCRVS → MPI → e-NHIS (birth registration triggers insurance enrollment)
  - Flow 2: EIR/SPT → DHIS2 (immunization individual→aggregate)
  - Flow 3: LIS → DHIS2 + Surveillance (lab results trigger disease notification)
  - Flow 4: EMR → HIE → DHIS2 (clinical encounter → aggregate reporting)
  - Flow 5: e-NHIS → Facility EMR (eligibility check, claims submission)
  - Flow 6: DHIS2 → WHO/RHO regional platforms (aggregate reporting)
- 6.3 Integration Standards
  - HL7 FHIR as target standard (Patient, Encounter, Observation, Immunization, DiagnosticReport, Claim, Coverage)
  - FHIR Façade pattern for legacy systems
  - ADX for DHIS2 aggregate exchange
  - REST/JSON as transitional mechanism
- 6.4 API Management and Governance
  - API design standards
  - API lifecycle management
  - Security (OAuth 2.0, API keys, certificate-based auth)
- 6.5 Integration Governance Model
  - Standards approval process
  - Integration certification for connecting systems
  - Change management for integration specifications

### 7. Technology Architecture (To-Be)
- 7.1 Infrastructure Architecture
  - Sovereign cloud strategy (from cloud-plan.docx): hub-and-spoke, MoH as isolated spoke
  - RDIP-funded national data center and broadband as foundational infrastructure
  - Hybrid cloud model: sovereign for identifiable health data, public cloud for analytics/de-identified
- 7.2 Network and Connectivity
  - Facility connectivity: EHSSP satellite (current) → RDIP terrestrial broadband (target)
  - Offline-first design for unreliable connectivity
  - Rural connectivity strategy
- 7.3 Hosting Architecture
  - Central services: HIE, MPI, DHIS2, eCRVS, e-NHIS → Government sovereign cloud
  - Facility systems: local servers/devices with sync to central
  - Development/staging environments
- 7.4 Security Architecture
  - Health data encryption (transit + rest)
  - Role-based access control framework
  - Audit logging
  - Incident response
  - Alignment with the national cybersecurity policy
- 7.5 Technology Standards
  - Approved technology stack (open-source preference)
  - Database standards
  - Operating system standards
  - Messaging and queue standards
- 7.6 Service-Oriented Architecture Design
  - Microservices vs. monolithic decisions per system
  - Containerization strategy (where appropriate)
  - Service registry and discovery

### 8. Enterprise Architecture Core Diagram
- 8.1 MoH Target Architecture Overview Diagram (single-page visual showing all layers and their relationships)
- 8.2 Application Landscape Diagram
- 8.3 Integration Flow Diagram
- 8.4 Technology Stack Diagram

### 9. Architecture Decision Records
- Summary table of all major design decisions made in this document, with:
  - Decision ID, Description, Options Considered, Decision Made, Rationale, Implications

### Appendices
- A: Mapping to GEATDM PDU Reference Architecture
- B: Mapping to eHealth Reference Architecture Layers
- C: System-by-System Modernization Decision Table
- D: Standards and Specifications Reference List
- E: Glossary

---

## WRITING GUIDELINES

1. **Be specific, not generic**: Every statement should be grounded in Progressa MoH's actual context. Reference specific systems (DHIS2, eCRVS, e-NHIS, SPT, A-LIS, IDSR), specific numbers (~90 facilities, 2–3M population, 15,000–20,000 NHIS beneficiaries), and specific constraints (~60% electricity, single submarine cable).

2. **Evidence-based design**: Justify design decisions by referencing country examples from the research (Tanzania HIE, Rwanda Mutuelle, Maldives DHIS2 EIR, Kenya OpenMRS, Ghana NHIS). Cite specific findings from the _ext-research files.

3. **Realistic and conservative**: This is a low-resource, donor-dependent environment. The architecture must be achievable with limited local capacity, infrastructure constraints, and project-based funding. Avoid over-ambitious targets.

4. **Two-tier structure**: Per the contract, the architecture has (a) generic cross-sectoral components that depend on RDIP/national infrastructure, and (b) health-sector-specific components. Clearly distinguish between these.

5. **Build on what works**: SPT has 99%+ accuracy — don't propose replacing it overnight. DHIS2 is established — extend it, don't replace it. eCRVS has ~1M records — leverage it as the identity foundation.

6. **GEATDM compliance**: Follow the PDU Reference Architecture as the base model. Use the ADAPT phase approach: tailor the reference architecture to MoH's specific context, constraints, and priorities.

7. **Professional formatting**: Use clear headings, tables, diagrams (described in text where actual images aren't possible), and consistent terminology throughout.

---

## EXECUTION APPROACH

This is a large document (~60-80 pages). Produce it in sections:

1. **Session 1**: Front matter + Sections 1-2 (Introduction, Architecture Vision)
2. **Session 2**: Section 3 (Business Architecture)
3. **Session 3**: Section 4 (Data Architecture)
4. **Session 4**: Section 5 (Application Architecture)
5. **Session 5**: Section 6 (Integration Architecture)
6. **Session 6**: Section 7 (Technology Architecture)
7. **Session 7**: Sections 8-9 + Appendices (Diagrams, Decision Records, Appendices)
8. **Session 8**: Review, consolidation, and DOCX generation

At the start of each session, read the relevant input files from the project folder before writing. Produce output as markdown files that can later be consolidated and converted to DOCX.

---

## OUTPUT LOCATION

Save all outputs to: `03-target-architecture-D6/build/D6/`

File naming convention: `D6-S{session}-{description}.md`
- Example: `D6-S1-introduction-vision.md`, `D6-S2-business-architecture.md`, etc.
- Final consolidated: `D6-MoH-Future-State-Architecture-v1.0.md`
- Final DOCX: `D6-MoH-Future-State-Architecture-v1.0.docx`

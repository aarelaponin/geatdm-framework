# REGULATORY AGENCY (RA) REFERENCE ARCHITECTURE - COMPLETE

═══════════════════════════════════════════════════════════════════════════════
**REFERENCE ARCHITECTURE: Regulatory Agency (RA)**
**Inherits From:** Policy Development Unit (PDU)
**Version:** 1.0
**Date:** 2026-01-19
**Status:** Complete
═══════════════════════════════════════════════════════════════════════════════

---

## DOCUMENT CONTROL

| Attribute | Value |
|-----------|-------|
| **Document ID** | GEATDM-WP3-T35-RA-RA-Complete |
| **Version** | 1.0 |
| **Status** | Complete |
| **Author** | GovStack Solution Architect |
| **Dependencies** | T2.5 (PDU RA Complete), T3.1-T3.4 (RA Sections) |
| **Inheritance** | PDU → RA (this document); SDA will inherit from RA |

### Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-19 | GEATDM Project | Initial complete version - integrated from T3.1-T3.4 |

---

## INHERITANCE STATEMENT

> **This Regulatory Agency (RA) Reference Architecture builds upon the PDU Reference Architecture. All PDU elements are included.**

**Inheritance Chain:**
```
PDU (Base) → RA (This Document) → SDA (Next Level)
```

**What RA Inherits from PDU (Fully Included):**
- All Organization Profile elements (Section 1) with RA extensions
- All Business Architecture elements (Section 2) with RA extensions
- All Core Capabilities C1.x (Policy Development Domain)
- All Support Capabilities C2.x (Organizational Support Domain)
- All Channel Applications A0.x
- All Policy Development Applications A1.x
- All Stakeholder Engagement Applications A2.x
- All Knowledge & Collaboration Applications A3.x
- All Support Function Applications A4.x
- All Data & Analytics Applications A5.x
- All Data Domains D1-D5
- All DPI Integration Specifications
- All Technology Patterns
- All Implementation Approaches

**What RA Adds:**
- Regulatory-specific organization characteristics
- Extended stakeholder map (regulated entities, peer regulators, tribunals)
- Extended service catalog (licensing, inspection, compliance, enforcement)
- Regulatory Capabilities C3.x (Regulatory Domain) - 7 L1 capabilities, 42 L2 capabilities
- Applicant Portal A0.5
- Licensing & Permit Management Applications A6.x
- Inspection & Audit Applications A7.x
- Compliance & Enforcement Applications A8.x
- Public Services Applications A9.x
- Regulated Entity Data Domain D6
- Compliance Data Domain D7
- Enforcement Data Domain D8
- Public Registry Data Domain D9
- Payments BB integration (mandatory)
- Public-facing portal infrastructure
- Mobile inspection capability
- Higher availability requirements for public services

---

## HOW TO USE THIS DOCUMENT

This Reference Architecture provides a comprehensive blueprint for digital platform architecture in Regulatory Agencies. It serves as:

1. **Assessment Framework** - Evaluate current state against the target architecture
2. **Planning Guide** - Identify gaps and plan improvement initiatives
3. **Design Reference** - Guide solution design and technology selection
4. **Inheritance Base** - Foundation for Service Delivery Authority (SDA) architecture

**Key Navigation:**
- **Part I (Sections 1-3):** Organizational context and capabilities
- **Part II (Sections 4-5):** Technical architecture - Applications and Data
- **Part III (Sections 6-7):** Implementation guidance - Technology and Deployment
- **Part IV (Sections 8-11):** Integration &amp; Summary - Inheritance, DPI, Traceability, Quick Reference

---

## TABLE OF CONTENTS

**PART I: ORGANIZATIONAL CONTEXT**
- [1. Organization Profile](#1-organization-profile)
- [2. Business Architecture](#2-business-architecture)
- [3. Capability Map](#3-capability-map)

**PART II: TECHNICAL ARCHITECTURE**
- [4. Application Architecture](#4-application-architecture)
- [5. Data Architecture](#5-data-architecture)

**PART III: IMPLEMENTATION GUIDANCE**
- [6. Technology Considerations](#6-technology-considerations)
- [7. Implementation Guidance](#7-implementation-guidance)

**PART IV: INTEGRATION &amp; SUMMARY**
- [8. Inheritance Summary](#8-inheritance-summary)
- [9. DPI Integration Checklist](#9-dpi-integration-checklist)
- [10. Capability-Application-BB Traceability](#10-capability-application-bb-traceability)
- [11. Summary &amp; Quick Reference](#11-summary--quick-reference)

---

# PART I: ORGANIZATIONAL CONTEXT

---

# 1. ORGANIZATION PROFILE

## 1.1 Definition and Scope

A **Regulatory Agency (RA)** is a government organization responsible for the implementation and enforcement of regulatory policies within a specific functional area. RAs are accountable to the Policy Development Unit (PDU) that develops policy for their regulatory domain.

**RA = PDU + Regulatory Implementation Function**

While a PDU focuses on policy development and analysis, an RA takes those policies and operationalizes them through licensing, permitting, inspection, compliance monitoring, and enforcement activities. RAs have direct operational contact with regulated entities (citizens, businesses, professionals) that PDUs typically lack.

**Core Functions of a Regulatory Agency:**

1. **Policy Implementation** — Translating policy directives into detailed requirements, application forms, procedures, and operational guidelines
2. **License/Permit Management** — Processing applications, issuing licenses/permits, managing renewals and modifications
3. **Supervision of Regulated Entities** — Monitoring compliance, conducting inspections, managing risk-based oversight
4. **Enforcement** — Investigating violations, applying sanctions, managing appeals and dispute resolution
5. **Public Registry Management** — Maintaining authoritative registries of licensed/permitted entities

**Scope Boundaries:**

| Aspect | IN SCOPE | OUT OF SCOPE |
|--------|----------|--------------|
| **Regulatory Functions** | License/permit lifecycle, inspections, compliance monitoring, enforcement | High-volume transaction processing, complex multi-program service delivery |
| **From PDU** | Policy analysis, stakeholder consultation, inter-ministerial coordination | Duplicating PDU policy development functions |
| **Customer Interaction** | Application processing, inspections, inquiries, complaints | Mass service delivery at scale (SDA territory) |
| **Transaction Volume** | Moderate (thousands to tens of thousands of licenses/permits) | High-volume (millions of transactions) |

## 1.2 Typical Examples

Regulatory Agencies exist across all governmental functions, varying in scope and complexity:

| Regulatory Domain | Example Organizations | Typical Activities |
|-------------------|----------------------|-------------------|
| **Data Protection** | Data Protection Authority, Privacy Commissioner | Data breach investigation, consent management oversight, cross-border data transfer approvals |
| **Business Registration** | Commercial Register, Companies House | Business incorporation, company status changes, director registrations |
| **Professional Licensing** | Medical Council, Bar Association, Engineering Board | Professional credentials verification, practice licenses, disciplinary proceedings |
| **Financial Regulation (Lighter)** | Credit Union Regulator, Insurance Commissioner | Entity licensing, prudential supervision, consumer protection |
| **Environmental** | Environmental Protection Agency (licensing function) | Emission permits, environmental impact approvals, facility inspections |
| **Consumer Protection** | Consumer Protection Authority, Trading Standards | Product safety certification, complaint investigation, market surveillance |
| **Construction &amp; Safety** | Building Authority, Occupational Safety Board | Building permits, safety inspections, accident investigation |
| **Transport &amp; Vehicles** | Vehicle Registration Authority, Aviation Safety | Vehicle registration, driver licensing, operator certifications |
| **Food &amp; Agriculture** | Food Safety Authority, Veterinary Services | Food establishment licensing, animal health certificates, farm inspections |
| **Telecommunications** | Telecom Regulator (licensing function) | Spectrum licensing, operator licensing, equipment certification |

**Distinguishing RA from SDA:**

| Characteristic | RA (Regulatory Agency) | SDA (Service Delivery Authority) |
|----------------|------------------------|----------------------------------|
| Transaction volume | Thousands to tens of thousands | Hundreds of thousands to millions |
| Customer base | Hundreds to thousands of regulated entities | Entire population or business sector |
| Process complexity | Moderate, judgment-required | High volume, often automated |
| Staff specialization | Inspectors, technical experts, legal officers | Case workers, call center, data analysts |
| Example | Data Protection Authority (500 complaints/year) | Tax Authority (10M+ taxpayers) |

## 1.3 Key Characteristics

| Characteristic | Description | Distinction from PDU |
|----------------|-------------|---------------------|
| **Primary Function** | Implementation of regulatory policies through licensing, inspection, and enforcement | PDU: Policy development and analysis |
| **Transaction Volume** | Moderate (application processing, inspections, complaints) | PDU: Low (document-centric) |
| **Customer Interaction** | Direct — application processing, inspections, inquiries, enforcement actions | PDU: Indirect — consultation-based |
| **Staffing Profile** | Regulatory officers, inspectors, technical specialists, legal officers, case managers | PDU: Policy analysts, economists |
| **IT Intensity** | Higher — requires case management, mobile inspection, registry management | PDU: Moderate — office automation |
| **Data Focus** | Regulated entity data, compliance records, inspection results, enforcement actions | PDU: Policy research, external data consumption |
| **Compliance Burden** | External compliance oversight of regulated entities | PDU: Internal compliance only |
| **Decision Authority** | Licensing decisions, compliance determinations, enforcement actions | PDU: Policy recommendations |
| **Output Types** | Licenses, permits, inspection reports, enforcement notices, registry records | PDU: Policies, legislation, reports |

**RA adds the following characteristics to PDU base:**

1. **License/Permit Lifecycle Management** — End-to-end handling of applications, approvals, renewals, modifications, and revocations
2. **Basic Digital Service Delivery** — Online application portals, fee processing, status tracking
3. **Compliance Monitoring Framework** — Risk-based supervision, reporting requirements, compliance assessments
4. **Inspection and Audit Capability** — Scheduled and unannounced inspections, mobile inspection tools, finding management
5. **Enforcement Capability** — Investigation, sanctions, appeals handling, case management
6. **Public Registry Management** — Authoritative registries of licensed entities accessible to the public

## 1.4 Ecosystem Participation Patterns

RA participates in the same ecosystems as PDU, with additional patterns for regulated entities and peer regulators:

### 1.4.1 Inherited PDU Ecosystem Patterns [INHERITED]

| Ecosystem | Participation Pattern | Typical Interactions |
|-----------|----------------------|---------------------|
| **Cabinet/Executive** | Primary | Policy implementation reports, regulatory proposals |
| **Legislature/Parliament** | Primary | Annual reports, parliamentary inquiries, regulatory amendments |
| **Finance/Budget** | Primary | Budget preparation, fee structure proposals |
| **[Functional Area]** | Primary | Sector coordination, regulatory policy alignment |
| **Inter-Ministerial** | Primary | Cross-ministry coordination on regulatory matters |
| **Statistics/Data** | Secondary | Regulatory data provision, statistical reporting |
| **Media/Public** | Secondary | Communications, public awareness, regulatory guidance |
| **International** | Secondary | International regulatory standards, mutual recognition |
| **Civil Society** | Secondary | Consultation, complaint handling |
| **Academia/Research** | Secondary | Research partnerships, evidence gathering |

### 1.4.2 RA-Specific Ecosystem Patterns [NEW]

| Ecosystem | Participation Pattern | Typical Interactions |
|-----------|----------------------|---------------------|
| **Regulated Entities** | Primary (NEW) | Application processing, inspections, compliance communications, enforcement |
| **Peer Regulators** | Primary (NEW) | Cross-regulatory coordination, information sharing, joint enforcement |
| **Judiciary/Tribunals** | Secondary (NEW) | Appeals, enforcement proceedings, expert testimony |
| **Law Enforcement** | Secondary (NEW) | Criminal referrals, joint investigations, intelligence sharing |
| **Industry Associations** | Primary (Enhanced) | Sector dialogue, self-regulatory coordination, compliance guidance |
| **Consumers/Complainants** | Secondary (NEW) | Complaint intake, consumer protection, public inquiries |

### 1.4.3 Ecosystem Participation Summary

```
                             ┌─────────────────────┐
                             │    PARLIAMENT       │
                             │ (Oversight, Laws)   │
                             └─────────┬───────────┘
                                       │
          ┌────────────────────────────┼────────────────────────────┐
          │                            │                            │
          ▼                            ▼                            ▼
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│      PDU        │◄───────►│       RA        │◄───────►│  Peer Regulators│
│ (Policy Owner)  │ Policy  │ (Implementation)│ Coord.  │ (Other RAs)     │
└─────────────────┘         └────────┬────────┘         └─────────────────┘
                                     │
                    ┌────────────────┼────────────────┐
                    │                │                │
                    ▼                ▼                ▼
          ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
          │   Regulated     │ │   Public/       │ │  Judiciary/     │
          │   Entities      │ │   Complainants  │ │  Tribunals      │
          │ (Licensees)     │ │                 │ │  (Appeals)      │
          └─────────────────┘ └─────────────────┘ └─────────────────┘
```

## 1.5 DPI Integration Points

RA requires all PDU DPI integration points plus additional integrations for regulatory functions:

### 1.5.1 DPI Requirement Summary

| DPI Component | PDU Level | RA Level | Change |
|---------------|-----------|----------|--------|
| **Identity BB** | Mandatory | Mandatory | Extended to licensees |
| **Information Mediator BB** | Mandatory | Mandatory | Extended to regulated entities |
| **Messaging BB** | Recommended | Mandatory | Upgraded for compliance notifications |
| **Digital Registries BB** | Recommended | Mandatory | Upgraded for license registries |
| **Workflow BB** | Recommended | Mandatory | Upgraded for licensing workflows |
| **Consent BB** | Optional | Recommended | Upgraded for compliance data |
| **Scheduler BB** | Optional | Recommended | Upgraded for inspections |
| **Registration BB** | Optional | Mandatory | Upgraded for applications |
| **Payments BB** | Not Required | Mandatory | **NEW** for fee collection |
| **E-Signature Service** | Recommended | Mandatory | Upgraded for license documents |
| **Document Exchange** | Mandatory | Mandatory | Same as PDU |

---

# 2. BUSINESS ARCHITECTURE

## 2.1 Business Model Canvas

The RA Business Model Canvas extends the PDU model with regulatory implementation value propositions:

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              BUSINESS MODEL CANVAS                                   │
│                             Regulatory Agency (RA)                                   │
│                          [Extends PDU Business Model]                                │
├───────────────────┬───────────────────┬─────────────────────┬───────────────────────┤
│ KEY PARTNERS      │ KEY ACTIVITIES    │ VALUE PROPOSITION   │ CUSTOMER              │
│                   │                   │                     │ RELATIONSHIPS         │
│ [PDU Partners]:   │ [PDU Activities]: │                     │                       │
│ • Parliament      │ • Policy analysis │ 1. POLICY           │ [PDU Relations]:      │
│ • Government/     │ • Legislative     │    IMPLEMENTATION   │ • Permanent relations │
│   Cabinet         │   drafting        │                     │   with industrial     │
│ • Other           │ • Stakeholder     │ • Detailed          │   unions              │
│   Ministries      │   consultation    │   requirements      │ • Close relations     │
│ • Media           │ • Impact          │   formulation       │   with media          │
│ • Industrial      │   assessment      │ • Application forms │ • Formal relationship │
│   Unions          │ • Coordination    │   and procedures    │   with Parliament     │
│ • Public          │ • Performance     │   design            │                       │
│ • Academia        │   monitoring      │ • Review and        │ [RA-SPECIFIC]:        │
│ • International   │                   │   assessment of     │ • Ongoing relation    │
│                   │ [RA-SPECIFIC]:    │   applications      │   with licensees      │
│ [RA-SPECIFIC]:    │ • License         │ • Fee collection    │ • Inspection          │
│ • Responsible PDU │   processing      │ • License/permit    │   relationship with   │
│ • Peer regulators │ • Inspection      │   issuance          │   regulated entities  │
│ • Law enforcement │   execution       │ • Training delivery │ • Complaint handling  │
│ • Tribunals       │ • Compliance      │   to applicants     │   relationship        │
│ • IT providers    │   monitoring      │ • Registry          │ • Appeal relationship │
│                   │ • Enforcement     │   maintenance       │   with tribunals      │
│                   │ • Appeals         │ • Reporting to PDU  │                       │
│                   │   handling        │                     │                       │
│                   ├───────────────────┤ 2. SUPERVISION OF   ├───────────────────────┤
│                   │ KEY RESOURCES     │    LICENSEES        │ CHANNELS              │
│                   │                   │                     │                       │
│                   │ [PDU Resources]:  │ • Set up reporting  │ [PDU Channels]:       │
│                   │ • Functional area │   framework         │ • Formal documents    │
│                   │   expertise       │ • Collect regular   │ • Official            │
│                   │ • Legal experts   │   reports           │   correspondence      │
│                   │ • Policy analysts │ • Risk-based        │ • Public              │
│                   │ • Institutional   │   monitoring        │   consultations       │
│                   │   building        │ • Intervention on   │ • Awareness campaigns │
│                   │                   │   high risk         │ • Website/portal      │
│                   │ [RA-SPECIFIC]:    │ • Resolution of     │                       │
│                   │ • Inspectors      │   non-compliance    │ [RA-SPECIFIC]:        │
│                   │ • Technical       │                     │ • Online application  │
│                   │   specialists     │ 3. ENFORCEMENT      │   portal              │
│                   │ • Case managers   │    [RA-SPECIFIC]    │ • Mobile inspection   │
│                   │ • IT systems for  │                     │   interface           │
│                   │   licensing &amp;     │ • Investigation     │ • Public license      │
│                   │   inspection      │ • Sanction issuance │   registry            │
│                   │ • Mobile devices  │ • Appeals handling  │ • Call center         │
│                   │                   │ • Case management   │ • Walk-in offices     │
├───────────────────┴───────────────────┴─────────────────────┴───────────────────────┤
│ COST STRUCTURE                        │ REVENUE/FUNDING STRUCTURE                   │
│                                       │                                             │
│ [PDU Costs]:                          │ [PDU Revenue]:                              │
│ • Staff salaries (primary cost)       │ • Governmental budget allocation            │
│ • Office space and facilities         │   (primary funding source)                  │
│ • IT systems and infrastructure       │ • May receive international grants          │
│ • Utilities                           │                                             │
│ • Consulting and research services    │ [RA-SPECIFIC]:                              │
│ • Travel and stakeholder engagement   │ • License/permit fees                       │
│                                       │ • Inspection fees                           │
│ [RA-SPECIFIC]:                        │ • Penalty/fine revenue                      │
│ • Inspection operations (travel,      │ • Examination/certification fees            │
│   equipment, mobile devices)          │                                             │
│ • Case management systems             │ NOTE: Fee revenue may offset budget         │
│ • Compliance monitoring systems       │ allocation but typically does not           │
│ • Legal/enforcement proceedings       │ fully fund RA operations                    │
│ • Training delivery                   │                                             │
└───────────────────────────────────────┴─────────────────────────────────────────────┘
```

## 2.2 Stakeholder Map

### 2.2.1 Internal Stakeholders [INHERITED + EXTENDED]

| Stakeholder | Role | Key Interactions | RA Extension |
|-------------|------|------------------|--------------|
| **Executive Leadership** | Direction setting, decision authority | Policy approval, priority setting | Enforcement policy, fee structures |
| **Administrative Head** | Operational leadership, resource management | Strategy execution, staff direction | Inspection programs, case allocation |
| **Policy Departments** | Policy development units | Analysis, drafting, consultation | **Extended: Regulatory policy development** |
| **Legal Services** | Legal review and drafting | Legislative drafting, compliance review | **Extended: Enforcement proceedings, appeals** |
| **Communications Unit** | Public relations, stakeholder comms | Press releases, consultations | **Extended: Regulatory guidance publication** |
| **Finance &amp; Budget Unit** | Resource management | Budget preparation, expenditure tracking | **Extended: Fee management, fine collection** |
| **HR &amp; Administration** | Staff management | Recruitment, training, facilities | **Extended: Inspector certification** |
| **IT Unit** | Technology support | Systems maintenance, digital tools | **Extended: License systems, mobile inspection** |
| **Licensing Unit** [NEW] | Application processing | License review, approval, issuance | RA-specific |
| **Inspection Unit** [NEW] | Compliance verification | Inspection planning, execution, reporting | RA-specific |
| **Enforcement Unit** [NEW] | Sanctions and appeals | Investigation, penalty, appeal processing | RA-specific |
| **Registry Management** [NEW] | Data stewardship | Registry maintenance, public access | RA-specific |

### 2.2.2 External Stakeholders [INHERITED + EXTENDED]

| Stakeholder | Relationship Type | Key Interactions | RA Extension |
|-------------|-------------------|------------------|--------------|
| **Parliament/Legislature** | Authority/Oversight | Bill submissions, inquiries, hearings | **Annual regulatory reports** |
| **Cabinet/Government** | Authority/Direction | Policy proposals, government decisions | **Enforcement policy approval** |
| **Other Ministries** | Peer/Coordination | Joint policy development | **Cross-regulatory coordination** |
| **Responsible PDU** [ENHANCED] | Policy Owner | Policy direction, performance monitoring | **Regulatory policy guidance** |
| **Industry Associations** | Consultation | Policy input, compliance dialogue | **Self-regulatory coordination** |
| **Civil Society** | Consultation | Policy input, public interest | **Consumer advocacy coordination** |
| **Citizens/Public** | Beneficiary/Info | Consultations, campaigns, registry access | **License lookups, complaints** |
| **Media** | Information | Press briefings, public communications | **Enforcement announcements** |
| **Academia/Research** | Advisory | Evidence provision, research | **Regulatory research** |
| **International Bodies** | Coordination | Treaty obligations, standards | **Mutual recognition agreements** |
| **Regulated Entities/Licensees** [NEW] | Subject | Applications, compliance, inspections | RA-specific |
| **License Applicants** [NEW] | Customer | Application submission, fee payment | RA-specific |
| **Complainants** [NEW] | Informant | Complaint submission, case tracking | RA-specific |
| **Peer Regulators** [NEW] | Coordination | Information sharing, joint action | RA-specific |
| **Law Enforcement** [NEW] | Partner | Criminal referrals, investigations | RA-specific |
| **Judiciary/Tribunals** [NEW] | Adjudication | Appeals, enforcement proceedings | RA-specific |

## 2.3 Service Catalog

RA services build upon PDU services and add regulatory-specific services:

### 2.3.1 Inherited PDU Services [INHERITED]

| Service Category | Count | Examples |
|------------------|-------|----------|
| **Policy/Internal (G2G)** | 10 | Policy Development, Legislative Drafting, Impact Assessment, Policy Advice, Performance Monitoring |
| **Engagement/External (G2B/G2C)** | 7 | Public Consultation, Stakeholder Dialogue, Information Publication, Awareness Campaigns |
| **PDU TOTAL** | **17** | — |

### 2.3.2 RA-Specific Services [NEW]

| Service Category | Count | Examples |
|------------------|-------|----------|
| **Licensing (G2B, G2C)** | 8 | Application Intake, Assessment, Approval, Issuance, Renewal, Modification |
| **Inspection (G2B)** | 5 | Inspection Scheduling, On-Site Inspection, Report Delivery, CAPA Follow-up |
| **Compliance (G2B)** | 5 | Compliance Reporting Intake, Assessment, Risk Rating, Advisory |
| **Enforcement (G2B, G2G)** | 7 | Complaint Intake, Investigation, Penalty, Appeals, Criminal Referral |
| **Registry (G2C, G2B, G2G)** | 4 | Public License Search, G2G Verification, Data Extract, Authentication |
| **RA-SPECIFIC TOTAL** | **29** | — |

### 2.3.3 Service Catalog Summary

| Service Category | PDU Services | RA-Specific Services | Total |
|------------------|-------------|---------------------|-------|
| Policy/Internal (G2G) | 10 | — | 10 |
| Engagement/External (G2B/G2C) | 7 | — | 7 |
| Licensing (NEW) | — | 8 | 8 |
| Inspection (NEW) | — | 5 | 5 |
| Compliance (NEW) | — | 5 | 5 |
| Enforcement (NEW) | — | 7 | 7 |
| Registry (NEW) | — | 4 | 4 |
| **TOTAL** | **17** | **29** | **46** |

---

# 3. CAPABILITY MAP

## Capability Numbering Convention

Capabilities use the following numbering scheme to maintain inheritance clarity:

- **C1.x** — Core Policy Capabilities (Inherited from PDU)
- **C2.x** — Support Capabilities (Inherited from PDU)
- **C3.x** — Regulatory Capabilities (NEW for RA)

Each capability is marked for inheritance status:
- `[INHERITED]` — Capability inherited unchanged from PDU
- `[EXTENDED]` — PDU capability with RA-specific extensions
- `[NEW]` — RA-specific capability not in PDU

---

## 3.1 Core Capabilities - Inherited from PDU [INHERITED]

### C1: POLICY DEVELOPMENT DOMAIN [INHERITED]

> **Reference:** See PDU Reference Architecture Section 3 for complete capability definitions.

| Capability ID | Capability Name | L2 Capabilities | RA Relevance |
|---------------|-----------------|-----------------|--------------|
| **C1.1** | Policy Analysis and Research | 5 | Regulatory policy analysis |
| **C1.2** | Policy Formulation | 5 | Regulatory policy input |
| **C1.3** | Legislative Drafting | 5 | Regulatory rules |
| **C1.4** | Stakeholder Engagement | 5 | Regulated entity engagement |
| **C1.5** | Inter-Governmental Coordination | 5 | Cross-regulatory coordination |
| **C1.6** | Policy Monitoring and Evaluation | 5 | Regulatory effectiveness |
| | **C1 SUBTOTAL** | **30** | |

---

## 3.2 Support Capabilities - Inherited from PDU [INHERITED]

### C2: ORGANIZATIONAL SUPPORT DOMAIN [INHERITED]

> **Reference:** See PDU Reference Architecture Section 3 for complete capability definitions.

| Capability ID | Capability Name | L2 Capabilities | RA Extension |
|---------------|-----------------|-----------------|--------------|
| **C2.1** | Human Resource Management | 6 | Inspector certification |
| **C2.2** | Financial Management | 5 | Fee management |
| **C2.3** | Procurement Management | 5 | Same as PDU |
| **C2.4** | Information and Knowledge Management | 5 | Regulatory knowledge |
| **C2.5** | Corporate Communications | 5 | Regulatory communications |
| **C2.6** | IT and Digital Services | 5 | Regulatory systems |
| **C2.7** | Facilities and Administration | 5 | Walk-in centers |
| **C2.8** | Risk and Compliance Management | 5 | Internal compliance |
| **C2.9** | Strategic Management | 5 | Regulatory strategy |
| | **C2 SUBTOTAL** | **46** | |

---

## 3.3 Core Capabilities - RA-Specific [NEW]

### C3: REGULATORY DOMAIN [NEW]

The Regulatory Domain encompasses all capabilities specific to the regulatory function that are not present in PDU.

#### C3.1 License and Permit Management [NEW]

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C3.1.1 | Application Processing | Receive, validate, and process applications | Registration BB, Workflow BB |
| C3.1.2 | Eligibility Assessment | Assess applicant eligibility against requirements | — |
| C3.1.3 | Background Verification | Verify credentials, qualifications, history | Information Mediator BB, Identity BB |
| C3.1.4 | Decision Making | Make licensing decisions | Workflow BB |
| C3.1.5 | License Issuance | Generate and deliver license documents | Digital Registries BB, E-Signature |
| C3.1.6 | Renewal Management | Process license renewals | Workflow BB, Scheduler BB |
| C3.1.7 | License Modification | Process changes to license scope | Workflow BB |
| C3.1.8 | Fee Management | Collect and manage fees | Payments BB |

#### C3.2 Inspection and Audit [NEW]

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C3.2.1 | Inspection Planning | Plan inspections based on risk | Scheduler BB |
| C3.2.2 | Resource Allocation | Assign inspectors and resources | — |
| C3.2.3 | Pre-Inspection Preparation | Review history, prepare checklists | Digital Registries BB |
| C3.2.4 | On-Site Inspection Execution | Conduct physical inspections | Mobile (custom) |
| C3.2.5 | Evidence Collection | Collect and preserve evidence | — |
| C3.2.6 | Finding Documentation | Document inspection findings | Workflow BB |
| C3.2.7 | Report Generation | Generate inspection reports | — |
| C3.2.8 | Corrective Action Management | Track and verify CAPA | Workflow BB |

#### C3.3 Compliance Monitoring [NEW]

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C3.3.1 | Compliance Reporting Framework | Define reporting requirements | Digital Registries BB |
| C3.3.2 | Report Collection and Validation | Collect periodic reports | Registration BB |
| C3.3.3 | Compliance Assessment | Assess compliance status | — |
| C3.3.4 | Risk Profiling | Develop risk profiles | — |
| C3.3.5 | Risk-Based Supervision | Adjust supervision intensity | — |
| C3.3.6 | Early Warning Detection | Identify potential issues | Analytics |
| C3.3.7 | Regulatory Change Management | Communicate regulatory changes | Messaging BB |

#### C3.4 Enforcement [NEW]

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C3.4.1 | Complaint Intake | Receive and triage complaints | Registration BB |
| C3.4.2 | Investigation Management | Plan and conduct investigations | Workflow BB |
| C3.4.3 | Evidence Management | Collect and manage evidence | Digital Registries BB |
| C3.4.4 | Violation Determination | Determine whether violations occurred | — |
| C3.4.5 | Sanction Assessment | Determine appropriate sanctions | — |
| C3.4.6 | Warning and Notice Issuance | Issue formal warnings | Messaging BB |
| C3.4.7 | Penalty Administration | Assess, issue, collect penalties | Payments BB |
| C3.4.8 | License Suspension/Revocation | Process suspension/revocation | Workflow BB |
| C3.4.9 | Criminal Referral | Refer serious matters to law enforcement | Information Mediator BB |

#### C3.5 Appeals and Dispute Resolution [NEW]

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C3.5.1 | Appeal Intake | Receive and register appeals | Registration BB |
| C3.5.2 | Appeal Review | Review appeal submissions | Workflow BB |
| C3.5.3 | Hearing Management | Schedule and conduct hearings | Scheduler BB |
| C3.5.4 | Decision Documentation | Document appeal decisions | Digital Registries BB |
| C3.5.5 | Dispute Mediation | Facilitate dispute resolution | — |
| C3.5.6 | External Referral | Manage referrals to tribunals | Information Mediator BB |

#### C3.6 Public Registry Management [NEW]

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C3.6.1 | Registry Data Management | Maintain registry data | Digital Registries BB |
| C3.6.2 | Public Search Interface | Provide public search access | — |
| C3.6.3 | License Verification API | Provide verification services | Information Mediator BB |
| C3.6.4 | Certificate Authentication | Enable document authentication | Identity BB, E-Signature |
| C3.6.5 | Statistical Reporting | Generate regulatory statistics | Analytics |
| C3.6.6 | Data Quality Assurance | Ensure data accuracy | — |

#### C3.7 Regulated Entity Education [NEW]

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C3.7.1 | Guidance Development | Develop compliance guidance | — |
| C3.7.2 | Training Program Management | Design and deliver training | — |
| C3.7.3 | Awareness Campaigns | Conduct awareness campaigns | Messaging BB |
| C3.7.4 | Technical Assistance | Provide technical support | — |
| C3.7.5 | FAQ and Self-Help Resources | Maintain self-service resources | — |

### C3 Capability Summary

| Capability Area | L1 ID | L2 Capabilities |
|-----------------|-------|-----------------|
| License and Permit Management | C3.1 | 8 |
| Inspection and Audit | C3.2 | 8 |
| Compliance Monitoring | C3.3 | 7 |
| Enforcement | C3.4 | 9 |
| Appeals and Dispute Resolution | C3.5 | 6 |
| Public Registry Management | C3.6 | 6 |
| Regulated Entity Education | C3.7 | 5 |
| **C3 TOTAL** | **7** | **49** |

---

## 3.4 Capability Summary

| Capability Domain | L1 Capabilities | L2 Capabilities | Status |
|-------------------|-----------------|-----------------|--------|
| **C1: Policy Development (Inherited)** | 6 | 30 | [INHERITED] |
| **C2: Organizational Support (Inherited)** | 9 | 46 | [INHERITED] |
| **C3: Regulatory (NEW)** | 7 | 49 | [NEW] |
| **TOTAL** | **22** | **125** | |

---

# PART II: TECHNICAL ARCHITECTURE

---

# 4. APPLICATION ARCHITECTURE

## 4.1 Application Components Overview

The RA Application Architecture extends the PDU Application Architecture with regulatory-specific applications.

### 4.1.1 Application Landscape

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                           RA APPLICATION ARCHITECTURE                                     │
│                             Regulatory Agency                                             │
│                        [Extends PDU Application Architecture]                             │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                          │
│  ┌────────────────────────────────────────────────────────────────────────────────────┐  │
│  │                            CHANNELS ZONE                                           │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐   │  │
│  │  │  Internal  │  │ Stakeholder│  │    API     │  │    G2G     │  │ Applicant  │   │  │
│  │  │   Portal   │  │   Portal   │  │  Gateway   │  │  Interface │  │   Portal   │   │  │
│  │  │   (A0.1)   │  │   (A0.2)   │  │   (A0.3)   │  │   (A0.4)   │  │   (A0.5)   │   │  │
│  │  │ [INHERITED]│  │ [INHERITED]│  │ [INHERITED]│  │ [INHERITED]│  │   [NEW]    │   │  │
│  │  └────────────┘  └────────────┘  └────────────┘  └────────────┘  └────────────┘   │  │
│  └────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                          │
│  ┌────────────────────────────────────────────────────────────────────────────────────┐  │
│  │                         CORE SERVICES ZONE                                         │  │
│  │                                                                                    │  │
│  │  ┌─────────────────────────────────────────────────────────────────────────────┐  │  │
│  │  │     POLICY DEVELOPMENT (A1.x) + STAKEHOLDER (A2.x) + KNOWLEDGE (A3.x)       │  │  │
│  │  │                           [INHERITED FROM PDU]                              │  │  │
│  │  └─────────────────────────────────────────────────────────────────────────────┘  │  │
│  │                                                                                    │  │
│  │  ┌─────────────────────────────────────────────────────────────────────────────┐  │  │
│  │  │              SUPPORT FUNCTIONS (A4.x) [INHERITED FROM PDU]                  │  │  │
│  │  └─────────────────────────────────────────────────────────────────────────────┘  │  │
│  │                                                                                    │  │
│  │  ╔═════════════════════════════════════════════════════════════════════════════╗  │  │
│  │  ║         LICENSING &amp; PERMIT MANAGEMENT (A6.x) [RA-SPECIFIC - NEW]            ║  │  │
│  │  ║  A6.1 License Mgmt | A6.2 Application | A6.3 CE/CPD | A6.4 Fee Mgmt         ║  │  │
│  │  ╚═════════════════════════════════════════════════════════════════════════════╝  │  │
│  │                                                                                    │  │
│  │  ╔═════════════════════════════════════════════════════════════════════════════╗  │  │
│  │  ║         INSPECTION &amp; AUDIT (A7.x) [RA-SPECIFIC - NEW]                       ║  │  │
│  │  ║  A7.1 Inspection Mgmt | A7.2 Mobile Inspection | A7.3 CAPA Tracking         ║  │  │
│  │  ╚═════════════════════════════════════════════════════════════════════════════╝  │  │
│  │                                                                                    │  │
│  │  ╔═════════════════════════════════════════════════════════════════════════════╗  │  │
│  │  ║         COMPLIANCE &amp; ENFORCEMENT (A8.x) [RA-SPECIFIC - NEW]                 ║  │  │
│  │  ║  A8.1 Compliance Mon | A8.2 Case Mgmt | A8.3 Penalty | A8.4 Appeals         ║  │  │
│  │  ╚═════════════════════════════════════════════════════════════════════════════╝  │  │
│  │                                                                                    │  │
│  │  ╔═════════════════════════════════════════════════════════════════════════════╗  │  │
│  │  ║         PUBLIC SERVICES (A9.x) [RA-SPECIFIC - NEW]                          ║  │  │
│  │  ║  A9.1 Public License Registry | A9.2 Complaint Portal                       ║  │  │
│  │  ╚═════════════════════════════════════════════════════════════════════════════╝  │  │
│  │                                                                                    │  │
│  └────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                          │
│  ┌────────────────────────────────────────────────────────────────────────────────────┐  │
│  │                      INFRASTRUCTURE ZONE                                           │  │
│  │                                                                                    │  │
│  │  ┌─────────────────────────────────────────────────────────────────────────────┐  │  │
│  │  │              DATA &amp; ANALYTICS (A5.x) [INHERITED FROM PDU]                   │  │  │
│  │  └─────────────────────────────────────────────────────────────────────────────┘  │  │
│  │                                                                                    │  │
│  │  ┌─────────────────────────────────────────────────────────────────────────────┐  │  │
│  │  │                    DPI INTEGRATION LAYER [EXTENDED FOR RA]                  │  │  │
│  │  │  Identity BB | Info Med BB | Messaging BB | Registry BB | Workflow BB       │  │  │
│  │  │  Payments BB [NEW] | Registration BB | Scheduler BB | E-Signature           │  │  │
│  │  └─────────────────────────────────────────────────────────────────────────────┘  │  │
│  │                                                                                    │  │
│  └────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                          │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

### 4.1.2 Application Layers Summary

| Layer | PDU Components | RA Extensions | Total |
|-------|---------------|---------------|-------|
| **Channels** | A0.1-A0.4 (4) | A0.5 Applicant Portal (1) | 5 |
| **Core Services - Policy** | A1.1-A1.3 (3) | — | 3 |
| **Core Services - Stakeholder** | A2.1-A2.3 (3) | — | 3 |
| **Core Services - Knowledge** | A3.1-A3.3 (3) | — | 3 |
| **Core Services - Support** | A4.1-A4.4 (4) | — | 4 |
| **Core Services - Licensing** | — | A6.1-A6.4 (4) | 4 |
| **Core Services - Inspection** | — | A7.1-A7.3 (3) | 3 |
| **Core Services - Compliance** | — | A8.1-A8.4 (4) | 4 |
| **Core Services - Public** | — | A9.1-A9.2 (2) | 2 |
| **Infrastructure** | A5.1-A5.3 (3) | — | 3 |
| **TOTAL** | **20** | **14** | **34** |

## 4.2 Core Applications - Inherited from PDU [INHERITED]

| ID | Application | Description | BB Alignment | Status |
|----|-------------|-------------|--------------|--------|
| A0.1 | Internal Portal | Unified entry point for staff | — | [INHERITED] |
| A0.2 | Stakeholder Portal | Public-facing portal for consultation | Registration BB | [INHERITED] |
| A0.3 | API Gateway | External API access management | Information Mediator BB | [INHERITED] |
| A0.4 | G2G Interface | Inter-agency data exchange | Information Mediator BB | [INHERITED] |
| A1.1 | Document Management System | Centralized document repository | Digital Registries BB | [INHERITED] |
| A1.2 | Policy Management Platform | Policy lifecycle support | Workflow BB | [INHERITED] |
| A1.3 | Legislative Drafting System | Specialized legislation drafting | Workflow BB | [INHERITED] |
| A2.1 | Stakeholder Relationship Management | Stakeholder contacts database | Digital Registries BB | [INHERITED] |
| A2.2 | Consultation Platform | Public consultation facilitation | Registration BB | [INHERITED] |
| A2.3 | Communication Management | Outbound communications | Messaging BB | [INHERITED] |
| A3.1 | Knowledge Management System | Institutional knowledge organization | Digital Registries BB | [INHERITED] |
| A3.2 | Collaboration Platform | Real-time collaboration | Messaging BB | [INHERITED] |
| A3.3 | Intranet Portal | Internal web platform | — | [INHERITED] |
| A4.1 | HR Management System | Comprehensive HR functionality | Digital Registries BB | [INHERITED] |
| A4.2 | Financial Management System | Budget and accounting | Payments BB | [INHERITED] |
| A4.3 | Asset Management | Physical and IT assets | Digital Registries BB | [INHERITED] |
| A4.4 | Project Management | Project planning and execution | Workflow BB | [INHERITED] |
| A5.1 | Data Platform | Data consolidation | Information Mediator BB | [INHERITED] |
| A5.2 | Analytics Platform | Data analysis and modeling | — | [INHERITED] |
| A5.3 | Reporting Platform | Report production | — | [INHERITED] |

## 4.3 Core Applications - RA-Specific [NEW]

| ID | Application | Description | BB Alignment | Capability |
|----|-------------|-------------|--------------|------------|
| **A0.5** | **Applicant Portal** | Public portal for applications, renewals, status tracking | Registration BB, Payments BB, Identity BB | C3.1.1, C3.1.6 |
| **A6.1** | **License Management System** | Core system for license lifecycle | Digital Registries BB, Workflow BB | C3.1.4, C3.1.5 |
| **A6.2** | **Application Processing Engine** | Workflow-driven application processing | Workflow BB, Registration BB | C3.1.1-C3.1.3 |
| **A6.3** | **CE/CPD Management** | Continuing education requirements | Digital Registries BB, Scheduler BB | C3.1.6 |
| **A6.4** | **Fee Management System** | License fees, payments, refunds | Payments BB | C3.1.8 |
| **A7.1** | **Inspection Management System** | Risk-based inspection planning | Scheduler BB, Workflow BB | C3.2.1-C3.2.3 |
| **A7.2** | **Mobile Inspection App** | Field inspection with offline capability | Mobile (custom) | C3.2.4-C3.2.6 |
| **A7.3** | **CAPA Tracking System** | Corrective action management | Workflow BB | C3.2.8 |
| **A8.1** | **Compliance Monitoring Platform** | Risk profiling and early warning | Digital Registries BB | C3.3.1-C3.3.6 |
| **A8.2** | **Case Management System** | Enforcement case tracking | Workflow BB, Digital Registries BB | C3.4.1-C3.4.4 |
| **A8.3** | **Penalty/Sanction Management** | Sanction administration | Payments BB, Workflow BB | C3.4.5-C3.4.8 |
| **A8.4** | **Appeals Management System** | Appeals processing | Workflow BB, Scheduler BB | C3.5.1-C3.5.6 |
| **A9.1** | **Public License Registry** | Public search and verification | Digital Registries BB, Information Mediator BB | C3.6.1-C3.6.5 |
| **A9.2** | **Complaint Portal** | Public complaint submission | Registration BB, Workflow BB | C3.4.1 |

## 4.4 Application Summary

| Total RA Applications | PDU Inherited | RA-Specific | Grand Total |
|-----------------------|---------------|-------------|-------------|
| **Main Applications** | 20 | 14 | **34** |
| **Core Applications** | 17 | 13 | **30** |
| **Support Applications** | 3 | 1 | **4** |

---

# 5. DATA ARCHITECTURE

## 5.1 Key Data Domains - Inherited from PDU [INHERITED]

| ID | Domain Name | Sub-Domains | Description | RA Relevance |
|----|-------------|-------------|-------------|--------------|
| **D1** | Policy Data | 5 | Policy documents, legislative texts, analysis data | Regulatory policy documentation |
| **D2** | Stakeholder Data | 5 | Stakeholder registry, consultation responses | Extended for regulated entities |
| **D3** | Operational Data | 5 | Workflow data, document metadata, correspondence | License and enforcement workflows |
| **D4** | Reference Data | 5 | Classifications, taxonomies, geographic codes | Extended for license types |
| **D5** | Corporate Data | 5 | HR, finance, procurement, assets | Extended for inspector data |
| | **PDU TOTAL** | **25** | | |

## 5.2 Key Data Domains - RA-Specific [NEW]

| ID | Domain Name | Sub-Domains | Description |
|----|-------------|-------------|-------------|
| **D6** | Regulated Entity Data | 6 | Licensee registry, license records, application history, personnel, premises |
| **D7** | Compliance Data | 7 | Inspection records, findings, risk scores, CAPA, compliance reports |
| **D8** | Enforcement Data | 7 | Cases, complaints, investigations, violations, sanctions, appeals, evidence |
| **D9** | Public Registry Data | 5 | Published licenses, enforcement actions, statistics, guidance, verification |
| | **RA-SPECIFIC TOTAL** | **25** | |

## 5.3 Data Domain Summary

| Domain Category | Domain Count | Sub-Domain Count |
|-----------------|--------------|------------------|
| **PDU Inherited (D1-D5)** | 5 | 25 |
| **RA-Specific (D6-D9)** | 4 | 25 |
| **TOTAL** | **9** | **50** |

## 5.4 Data Ownership Model

| Domain | Owner | Status |
|--------|-------|--------|
| D1: Policy Data | Head of Policy Development | [INHERITED] |
| D2: Stakeholder Data | Head of Communications | [INHERITED] |
| D3: Operational Data | Operations Manager | [INHERITED] |
| D4: Reference Data | Chief Data Officer | [INHERITED] |
| D5: Corporate Data | Head of Corporate Services | [INHERITED] |
| **D6: Regulated Entity Data** | **Head of Licensing / Registrar** | **[NEW]** |
| **D7: Compliance Data** | **Chief Inspector** | **[NEW]** |
| **D8: Enforcement Data** | **Head of Enforcement / Legal Director** | **[NEW]** |
| **D9: Public Registry Data** | **CDO / Registrar** | **[NEW]** |

## 5.5 Data Quality Targets

| Data Type | Accuracy | Timeliness | Completeness |
|-----------|----------|------------|--------------|
| Licensee Registry (D6) | 99.5% | 24 hours | 99% |
| Inspection Findings (D7) | 99% | 48 hours | 99% |
| Enforcement Actions (D8) | 99.9% | Real-time | 100% |
| Public Registry (D9) | 99.9% | 24 hours | 99% |

---

# PART III: IMPLEMENTATION GUIDANCE

---

# 6. TECHNOLOGY CONSIDERATIONS

## 6.1 Infrastructure Patterns

### 6.1.1 Key Infrastructure Decisions

| Decision Area | RA Recommendation | Rationale |
|---------------|-------------------|-----------|
| **Platform Tier** | Standard | Moderate-high scale, self-service analytics, basic ML |
| **Public Portal** | Cloud with CDN | Scalability, availability, DDoS protection |
| **Mobile Platform** | Native app with offline | Field operations, unreliable connectivity |
| **Payment Integration** | Hosted payment page | PCI compliance, reduced RA scope |
| **Analytics** | 6-node cluster + BI | Self-service, risk scoring |
| **Integration** | API Gateway + Message Queue | Scalable, reliable external integrations |

### 6.1.2 Availability Requirements

| Service | PDU Availability | RA Availability | Justification |
|---------|------------------|-----------------|---------------|
| Internal Portal | 99.5% | 99.5% | Same as PDU |
| **Applicant Portal** | N/A | **99.9%** | Public-facing, critical for applications |
| **Public Registry** | N/A | **99.95%** | Public reliance for verification |
| **Verification API** | N/A | **99.95%** | Third-party integrations depend on it |
| License Management | N/A | 99.5% | Core business system |
| Mobile App (sync) | N/A | 95% | Offline capability compensates |

## 6.2 Security Requirements

### 6.2.1 RA-Specific Security Additions

| Requirement Area | Specification |
|------------------|---------------|
| **Licensee Data Protection** | Compliance with national data protection laws |
| **Public Registry Security** | Data integrity, publication controls, audit trail |
| **Mobile Device Security** | MDM enrollment, remote wipe, encryption |
| **Payment Security** | PCI DSS compliant, no card storage, tokenization |

### 6.2.2 Authentication Requirements

| User Category | Authentication Method |
|---------------|----------------------|
| Staff (Internal) | Government SSO + MFA |
| Applicants/Licensees | National eID (Mandatory for submission) |
| Inspectors (Field) | SSO + Device Certificate + PIN |
| Public Registry (View) | Anonymous (rate-limited) |
| Verification API Users | API Key + Rate Limit |

## 6.3 Platform Tier Recommendation

**Standard Tier Recommended for RA:**

| Characteristic | Standard Tier Specification | RA Application |
|----------------|----------------------------|----------------|
| **Infrastructure** | 6-node high-availability cluster | Supports 99.5% uptime requirement |
| **Concurrent Users** | 10x more than Basic | Handles staff + external licensees |
| **Reports** | 50+ reports | Licensing, compliance, enforcement |
| **Self-Service Analytics** | Yes | Licensing officers and compliance managers |
| **Basic ML Capability** | Yes | Risk scoring, anomaly detection |
| **Implementation Timeline** | 12-18 months | Aligns with RA implementation phases |

---

# 7. IMPLEMENTATION GUIDANCE

## 7.1 Typical Implementation Sequence

### Four-Phase Approach for RA (24-36 Months)

| Phase | Duration | Key Focus | Primary Applications |
|-------|----------|-----------|---------------------|
| **0: Foundation** | 0-6 months | PDU baseline (if needed) | A1.1, A3.2, A4.1-A4.2 |
| **1: Licensing Core** | 3-12 months | Online applications, registry | A0.5, A6.1, A6.2, A6.4, A9.1 |
| **2: Compliance** | 10-20 months | Inspection, risk monitoring | A7.1, A7.2, A7.3, A8.1 |
| **3: Enforcement** | 18-30 months | Cases, sanctions, appeals | A8.2, A8.3, A8.4, A9.2 |
| **4: Optimization** | 28-36 months | Analytics, automation | A5.2, continuous improvement |

## 7.2 Quick Wins Identification

| Priority | Quick Win | Timeline | Impact |
|----------|-----------|----------|--------|
| **1** | Online license application | 8-12 weeks | High |
| **2** | License verification portal | 4-6 weeks | High |
| **3** | Mobile inspection forms | 10-14 weeks | High |
| **4** | Automated renewal reminders | 2-4 weeks | Medium |
| **5** | Self-service status tracking | 3-5 weeks | Medium |
| **6** | Online fee payment | 8-10 weeks | High |

## 7.3 Key Risk Areas

| Risk Category | High-Priority Risks | Key Mitigations |
|---------------|---------------------|-----------------|
| **Security** | Portal DDoS, data breach, payment fraud | Cloud security, penetration testing, PCI compliance |
| **Data** | Legacy data quality, duplicates | Profiling, cleansing, match-merge |
| **Adoption** | Low online adoption, digital divide | Incentives, communication, offline channels |
| **Technology** | Mobile connectivity, app stability | Offline-first, staged rollout |
| **Change** | Staff resistance, licensee resistance | Champions, communication, training |

## 7.4 Success Factors

| # | Success Factor | Key Actions |
|---|----------------|-------------|
| 1 | **Executive Sponsorship** | Visible leadership, regular steering, resource commitment |
| 2 | **Stakeholder Engagement** | Advisory panel, beta program, communication |
| 3 | **Phased License Rollout** | Start simple, learn, expand |
| 4 | **Clear Communication** | Early, clear, multi-channel, supportive |
| 5 | **Training Investment** | Role-based, ongoing, self-service resources |
| 6 | **Quick Wins** | Demonstrate value early, build momentum |
| 7 | **Data Quality Focus** | Profiling, cleansing, ongoing monitoring |

---

# PART IV: INTEGRATION &amp; SUMMARY

---

# 8. INHERITANCE SUMMARY

## 8.1 Element Inheritance from PDU

| Element Type | From PDU | RA-Specific | Total |
|--------------|----------|-------------|-------|
| **Capabilities (L1)** | 15 | 7 | **22** |
| **Capabilities (L2)** | 76 | 49 | **125** |
| **Applications** | 20 | 14 | **34** |
| **Data Domains** | 5 | 4 | **9** |
| **Data Sub-Domains** | 25 | 25 | **50** |
| **Services** | 17 | 29 | **46** |

## 8.2 Capability Inheritance Summary

| Capability Domain | L1 Count | L2 Count | Source |
|-------------------|----------|----------|--------|
| C1: Policy Development | 6 | 30 | PDU [INHERITED] |
| C2: Organizational Support | 9 | 46 | PDU [INHERITED] |
| C3: Regulatory | 7 | 49 | RA [NEW] |
| **TOTAL** | **22** | **125** | |

## 8.3 Application Inheritance Summary

| Application Area | PDU Count | RA Count | Total |
|------------------|-----------|----------|-------|
| Channels (A0.x) | 4 | 1 | 5 |
| Policy Development (A1.x) | 3 | 0 | 3 |
| Stakeholder Engagement (A2.x) | 3 | 0 | 3 |
| Knowledge &amp; Collaboration (A3.x) | 3 | 0 | 3 |
| Support Functions (A4.x) | 4 | 0 | 4 |
| Data &amp; Analytics (A5.x) | 3 | 0 | 3 |
| Licensing &amp; Permits (A6.x) | 0 | 4 | 4 |
| Inspection &amp; Audit (A7.x) | 0 | 3 | 3 |
| Compliance &amp; Enforcement (A8.x) | 0 | 4 | 4 |
| Public Services (A9.x) | 0 | 2 | 2 |
| **TOTAL** | **20** | **14** | **34** |

## 8.4 Data Domain Inheritance Summary

| Data Domain | Sub-Domains | Source |
|-------------|-------------|--------|
| D1: Policy Data | 5 | PDU [INHERITED] |
| D2: Stakeholder Data | 5 | PDU [INHERITED] |
| D3: Operational Data | 5 | PDU [INHERITED] |
| D4: Reference Data | 5 | PDU [INHERITED] |
| D5: Corporate Data | 5 | PDU [INHERITED] |
| D6: Regulated Entity Data | 6 | RA [NEW] |
| D7: Compliance Data | 7 | RA [NEW] |
| D8: Enforcement Data | 7 | RA [NEW] |
| D9: Public Registry Data | 5 | RA [NEW] |
| **TOTAL** | **50** | |

---

# 9. DPI INTEGRATION CHECKLIST

## 9.1 DPI Component Requirements

| DPI Component | PDU Level | RA Level | Change | Primary RA Applications |
|---------------|-----------|----------|--------|------------------------|
| **Identity BB** | Mandatory | Mandatory | Extended | A0.5, A6.2, A9.1 |
| **Information Mediator BB** | Mandatory | Mandatory | Extended | A6.2, A8.2, A9.1 |
| **Digital Registries BB** | Recommended | Mandatory | Upgraded | A6.1, A9.1, A8.1 |
| **Workflow BB** | Recommended | Mandatory | Upgraded | A6.2, A7.1, A8.2, A8.4 |
| **Messaging BB** | Recommended | Mandatory | Upgraded | A6.1, A7.3, A8.1 |
| **Registration BB** | Optional | Mandatory | Upgraded | A0.5, A6.2, A9.2 |
| **Payments BB** | Not Required | Mandatory | **NEW** | A6.4, A8.3 |
| **Scheduler BB** | Optional | Recommended | Upgraded | A7.1, A8.4 |
| **Consent BB** | Optional | Recommended | Upgraded | A8.1 |
| **E-Signature Service** | Recommended | Mandatory | Upgraded | A6.1, A9.1 |
| **Document Exchange** | Mandatory | Mandatory | Same | All |

## 9.2 Integration Status Checklist

| # | DPI Component | RA Requirement | Implementation Status |
|---|---------------|----------------|----------------------|
| 1 | Identity BB | Mandatory | ☐ Not Started / ☐ In Progress / ☐ Complete |
| 2 | Information Mediator BB | Mandatory | ☐ Not Started / ☐ In Progress / ☐ Complete |
| 3 | Digital Registries BB | Mandatory | ☐ Not Started / ☐ In Progress / ☐ Complete |
| 4 | Workflow BB | Mandatory | ☐ Not Started / ☐ In Progress / ☐ Complete |
| 5 | Messaging BB | Mandatory | ☐ Not Started / ☐ In Progress / ☐ Complete |
| 6 | Registration BB | Mandatory | ☐ Not Started / ☐ In Progress / ☐ Complete |
| 7 | Payments BB | Mandatory | ☐ Not Started / ☐ In Progress / ☐ Complete |
| 8 | Scheduler BB | Recommended | ☐ Not Started / ☐ In Progress / ☐ Complete |
| 9 | Consent BB | Recommended | ☐ Not Started / ☐ In Progress / ☐ Complete |
| 10 | E-Signature Service | Mandatory | ☐ Not Started / ☐ In Progress / ☐ Complete |

## 9.3 External Integration Points

| Integration Partner | Purpose | DPI Component | Status |
|--------------------|---------|---------------|--------|
| National Business Registry | Entity verification | Information Mediator BB | ☐ |
| Population Registry | Person verification | Information Mediator BB | ☐ |
| Professional Registries | Credential verification | Information Mediator BB | ☐ |
| Criminal Records | Background checks | Information Mediator BB | ☐ |
| Tax Authority | Tax compliance | Information Mediator BB | ☐ |
| Peer Regulators | Cross-regulatory data | Information Mediator BB | ☐ |
| Payment Processors | Fee collection | Payments BB | ☐ |
| Law Enforcement | Criminal referrals | Information Mediator BB | ☐ |

---

# 10. CAPABILITY-APPLICATION-BB TRACEABILITY

## 10.1 Complete Traceability Matrix

### C3.1 License and Permit Management

| Capability | Application | Building Block |
|------------|-------------|----------------|
| C3.1.1 Application Processing | A6.2 | Registration BB, Workflow BB |
| C3.1.2 Eligibility Assessment | A6.2 | — |
| C3.1.3 Background Verification | A6.2 | Information Mediator BB, Identity BB |
| C3.1.4 Decision Making | A6.1 | Workflow BB |
| C3.1.5 License Issuance | A6.1 | Digital Registries BB, E-Signature |
| C3.1.6 Renewal Management | A6.1, A6.3 | Workflow BB, Scheduler BB |
| C3.1.7 License Modification | A6.1 | Workflow BB |
| C3.1.8 Fee Management | A6.4 | Payments BB |

### C3.2 Inspection and Audit

| Capability | Application | Building Block |
|------------|-------------|----------------|
| C3.2.1 Inspection Planning | A7.1 | Scheduler BB |
| C3.2.2 Resource Allocation | A7.1 | Scheduler BB |
| C3.2.3 Pre-Inspection Preparation | A7.1 | Digital Registries BB |
| C3.2.4 On-Site Inspection Execution | A7.2 | Mobile (custom) |
| C3.2.5 Evidence Collection | A7.2 | — |
| C3.2.6 Finding Documentation | A7.1, A7.2 | Workflow BB |
| C3.2.7 Report Generation | A7.1 | — |
| C3.2.8 Corrective Action Management | A7.3 | Workflow BB |

### C3.3 Compliance Monitoring

| Capability | Application | Building Block |
|------------|-------------|----------------|
| C3.3.1 Compliance Reporting Framework | A8.1 | Digital Registries BB |
| C3.3.2 Report Collection and Validation | A8.1 | Registration BB |
| C3.3.3 Compliance Assessment | A8.1 | — |
| C3.3.4 Risk Profiling | A8.1 | — |
| C3.3.5 Risk-Based Supervision | A8.1 | — |
| C3.3.6 Early Warning Detection | A8.1 | Messaging BB |
| C3.3.7 Regulatory Change Management | A8.1 | Messaging BB |

### C3.4 Enforcement

| Capability | Application | Building Block |
|------------|-------------|----------------|
| C3.4.1 Complaint Intake | A9.2 | Registration BB |
| C3.4.2 Investigation Management | A8.2 | Workflow BB |
| C3.4.3 Evidence Management | A8.2 | Digital Registries BB |
| C3.4.4 Violation Determination | A8.2 | — |
| C3.4.5 Sanction Assessment | A8.3 | — |
| C3.4.6 Warning and Notice Issuance | A8.3 | Messaging BB |
| C3.4.7 Penalty Administration | A8.3 | Payments BB |
| C3.4.8 License Suspension/Revocation | A8.3, A6.1 | Workflow BB |
| C3.4.9 Criminal Referral | A8.2 | Information Mediator BB |

### C3.5 Appeals and Dispute Resolution

| Capability | Application | Building Block |
|------------|-------------|----------------|
| C3.5.1 Appeal Intake | A8.4 | Registration BB |
| C3.5.2 Appeal Review | A8.4 | Workflow BB |
| C3.5.3 Hearing Management | A8.4 | Scheduler BB |
| C3.5.4 Decision Documentation | A8.4 | Digital Registries BB |
| C3.5.5 Dispute Mediation | A8.4 | — |
| C3.5.6 External Referral | A8.4 | Information Mediator BB |

### C3.6 Public Registry Management

| Capability | Application | Building Block |
|------------|-------------|----------------|
| C3.6.1 Registry Data Management | A9.1 | Digital Registries BB |
| C3.6.2 Public Search Interface | A9.1 | — |
| C3.6.3 License Verification API | A9.1 | Information Mediator BB |
| C3.6.4 Certificate Authentication | A9.1 | Identity BB, E-Signature |
| C3.6.5 Statistical Reporting | A9.1 | — |
| C3.6.6 Data Quality Assurance | A9.1 | — |

### C3.7 Regulated Entity Education

| Capability | Application | Building Block |
|------------|-------------|----------------|
| C3.7.1 Guidance Development | A3.1 [PDU] | — |
| C3.7.2 Training Program Management | A6.3 | — |
| C3.7.3 Awareness Campaigns | A2.3 [PDU] | Messaging BB |
| C3.7.4 Technical Assistance | A0.5 | — |
| C3.7.5 FAQ and Self-Help Resources | A0.5 | — |

## 10.2 Building Block Usage Summary

| GovStack Building Block | PDU Capabilities | RA Capabilities | Total | PDU Apps | RA Apps | Total Apps |
|------------------------|------------------|-----------------|-------|----------|---------|------------|
| **Identity BB** | Universal | 2 | Universal + 2 | All | 3 | All + 3 |
| **Information Mediator BB** | 5 | 4 | 9 | 2 | 3 | 5 |
| **Digital Registries BB** | 12 | 5 | 17 | 6 | 5 | 11 |
| **Workflow BB** | 14 | 9 | 23 | 4 | 7 | 11 |
| **Messaging BB** | 7 | 3 | 10 | 2 | 3 | 5 |
| **Registration BB** | 2 | 4 | 6 | 2 | 4 | 6 |
| **Scheduler BB** | 2 | 3 | 5 | 2 | 3 | 5 |
| **Consent BB** | 0 | 0 | 0 | 0 | 1 | 1 |
| **Payments BB** | 1 | 2 | 3 | 1 | 2 | 3 |
| **E-Signature** | — | 2 | 2 | 1 | 2 | 3 |

---

# 11. SUMMARY &amp; QUICK REFERENCE

## 11.1 RA Reference Architecture at a Glance

| Dimension | PDU (Inherited) | RA-Specific (New) | Total |
|-----------|-----------------|-------------------|-------|
| **Capabilities (L1)** | 15 | 7 | **22** |
| **Capabilities (L2)** | 76 | 49 | **125** |
| **Applications** | 20 | 14 | **34** |
| **Data Domains** | 5 | 4 | **9** |
| **Data Sub-Domains** | 25 | 25 | **50** |
| **Services** | 17 | 29 | **46** |
| **DPI Building Blocks** | 9 | 1 (new) | **10** |

## 11.2 Key RA Characteristics

| Characteristic | Value |
|----------------|-------|
| **Organization Type** | Regulatory Agency (RA) |
| **Inherits From** | Policy Development Unit (PDU) |
| **Primary Function** | Regulatory implementation through licensing, inspection, enforcement |
| **Transaction Volume** | Moderate (thousands to tens of thousands) |
| **Customer Base** | Regulated entities (businesses, professionals) |
| **Staff Profile** | Regulatory officers, inspectors, legal officers |
| **Platform Tier** | Standard |
| **Implementation Timeline** | 24-36 months |

## 11.3 RA Application Quick Reference

| Zone | PDU Apps | RA Apps | Total | Key RA Additions |
|------|----------|---------|-------|------------------|
| Channels | 4 | 1 | 5 | Applicant Portal |
| Core Services | 13 | 13 | 26 | Licensing, Inspection, Compliance, Enforcement, Public Services |
| Infrastructure | 3 | 0 | 3 | — |
| **TOTAL** | **20** | **14** | **34** | |

## 11.4 Key DPI Integrations

| Priority | DPI Component | Primary RA Use |
|----------|---------------|----------------|
| **1 (Mandatory)** | Identity BB | Applicant/licensee authentication |
| **1 (Mandatory)** | Information Mediator BB | External registry verification |
| **1 (Mandatory)** | Digital Registries BB | License registry |
| **1 (Mandatory)** | Workflow BB | Licensing and enforcement workflows |
| **1 (Mandatory)** | Registration BB | Application intake |
| **1 (Mandatory)** | Payments BB | Fee and penalty collection |
| **2 (Recommended)** | Messaging BB | Compliance notifications |
| **2 (Recommended)** | Scheduler BB | Inspection scheduling |

## 11.5 Implementation Phase Quick Reference

| Phase | Duration | Key Focus | Primary Applications |
|-------|----------|-----------|---------------------|
| **0: Foundation** | 0-6 months | PDU baseline (if needed) | A1.1, A3.2, A4.1-A4.2 |
| **1: Licensing Core** | 3-12 months | Online applications, registry | A0.5, A6.1, A6.2, A6.4, A9.1 |
| **2: Compliance** | 10-20 months | Inspection, risk monitoring | A7.1, A7.2, A7.3, A8.1 |
| **3: Enforcement** | 18-30 months | Cases, sanctions, appeals | A8.2, A8.3, A8.4, A9.2 |
| **4: Optimization** | 28-36 months | Analytics, automation | A5.2, continuous improvement |

## 11.6 Top Quick Wins

| Priority | Quick Win | Timeline | Impact |
|----------|-----------|----------|--------|
| 1 | Online license application | 8-12 weeks | High |
| 2 | License verification portal | 4-6 weeks | High |
| 3 | Mobile inspection forms | 10-14 weeks | High |
| 4 | Automated renewal reminders | 2-4 weeks | Medium |

## 11.7 Success Metrics by Phase

| Phase | Key Metrics | Target |
|-------|-------------|--------|
| **Phase 1** | Online application rate | &gt;80% |
| | Processing time reduction | &gt;50% |
| | Public registry accuracy | &gt;99% |
| **Phase 2** | Mobile inspection adoption | &gt;80% |
| | Risk-based inspection coverage | 100% |
| **Phase 3** | Online complaint submission | &gt;70% |
| | Case processing time reduction | &gt;40% |
| **Phase 4** | Automated renewal rate | &gt;30% |

---

## QUALITY VERIFICATION CHECKLIST

Before finalizing, verify the following:

- [x] All PDU capabilities are included/referenced (C1.x, C2.x)
- [x] All PDU applications are included/referenced (A0.x-A5.x)
- [x] All PDU data domains are included/referenced (D1-D5)
- [x] Numbering extends PDU (no conflicts) — C3.x, A6.x-A9.x, D6-D9
- [x] RA-specific additions are clearly marked [NEW]
- [x] Traceability is complete (Capability → Application → BB)
- [x] DPI checklist is complete with all 10 components
- [x] Inheritance summary provides accurate counts
- [x] Document is ready to serve as base for SDA

---

## DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-19 | GEATDM Project | Initial complete version - integrated from T3.1-T3.4 |

---

## NEXT STEPS

This RA Reference Architecture serves as the **MIDDLE layer** in the inheritance chain:

```
PDU (Base) → RA (This Document) → SDA (Next)
```

**T4.1 (SDA Business Architecture)** will inherit from this document and add:
- High-volume transaction processing capabilities
- Multi-channel service delivery
- Mass customer management
- Complex program administration

---

*End of RA Reference Architecture - Complete Document*

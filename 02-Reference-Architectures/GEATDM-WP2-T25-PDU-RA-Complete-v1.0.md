# PDU REFERENCE ARCHITECTURE - COMPLETE

═══════════════════════════════════════════════════════════════════════════
**REFERENCE ARCHITECTURE: Policy Development Unit (PDU)**
**Inherits From:** None (Base Architecture)
**Version:** 1.0
**Date:** 2026-01-19
**Status:** Complete
═══════════════════════════════════════════════════════════════════════════

---

## DOCUMENT CONTROL

| Attribute | Value |
|-----------|-------|
| **Document ID** | GEATDM-WP2-T25-PDU-RA-Complete |
| **Version** | 1.0 |
| **Status** | Complete |
| **Author** | GovStack Solution Architect |
| **Dependencies** | T0.2 (RA Template), T0.5 (Research Summary) |
| **Inheritance** | Base layer - RA and SDA will inherit and extend |

### Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-19 | GEATDM Project | Initial complete version - integrated from T2.1-T2.4 |

---

## HOW TO USE THIS DOCUMENT

This Reference Architecture (RA) provides a comprehensive blueprint for digital platform architecture in Policy Development Units (PDUs). It serves as:

1. **Assessment Framework** - Evaluate current state against the target architecture
2. **Planning Guide** - Identify gaps and plan improvement initiatives
3. **Design Reference** - Guide solution design and technology selection
4. **Inheritance Base** - Foundation for Regulatory Agency (RA) and Service Delivery Authority (SDA) architectures

**Key Navigation:**
- **Part I (Sections 1-3):** Organizational context and capabilities - Start here to understand the PDU archetype
- **Part II (Sections 4-5):** Technical architecture - Application and data specifications
- **Part III (Sections 6-7):** Implementation guidance - Technology patterns and deployment approach
- **Part IV (Sections 8-10):** Integration & Summary - DPI checklist, traceability, quick reference

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

**PART IV: INTEGRATION & SUMMARY**
- [8. DPI Integration Checklist](#8-dpi-integration-checklist)
- [9. Capability-Application-BB Traceability](#9-capability-application-bb-traceability)
- [10. Summary & Quick Reference](#10-summary--quick-reference)

**ANNEXES**
- [Annex A: Capability Definitions](#annex-a-capability-definitions)
- [Annex B: Application Component Specifications](#annex-b-application-component-specifications)
- [Annex C: Data Entity Reference](#annex-c-data-entity-reference)
- [Annex D: Glossary](#annex-d-glossary)

---

# PART I: ORGANIZATIONAL CONTEXT

---

# 1. ORGANIZATION PROFILE

## 1.1 Definition and Scope

A **Policy Development Unit (PDU)** is the most basic bureaucratic organizational unit in public administration. It is primarily responsible for policy analysis, development, and monitoring within a specific governmental functional area.

PDUs focus on knowledge work rather than transaction processing. Their primary outputs are policies, legislation, strategic guidance, and oversight reports rather than direct services to citizens or businesses. The digital platform in a PDU should support all main bureaucratic organizational activities across two primary areas:

1. **Direct support for specific function policy development** — Analysis, research, drafting, consultation, and evaluation activities related to the functional area
2. **Generic organization management services** — HR, finance, procurement, administrative operations, and internal communications

While PDUs may engage with external stakeholders for consultation and communication, they do not typically process applications, issue licenses, or deliver services at scale. Their customer touchpoints are primarily:
- Informal communication with stakeholders in society
- Formal communication to prepare legislation and policy documents

**Scope Boundaries:**
- **IN SCOPE:** Policy development, legislative drafting, stakeholder consultation, performance monitoring, inter-ministerial coordination, regulatory impact assessment, strategic planning
- **OUT OF SCOPE:** Direct service delivery to citizens/businesses, licensing and permitting, enforcement activities, high-volume transaction processing

## 1.2 Typical Examples

PDUs exist across all governmental functions and at various levels of government:

**Central Government Examples:**
- Line Ministries (Health, Education, Finance, Agriculture, Defense, Environment, etc.)
- Chancelleries of Constitutional Institutions (President's Office, Prime Minister's Office)
- Parliament Support Offices and Secretariats
- Cabinet Office / Government Coordination Bodies
- Government Audit Offices (policy/oversight function)
- National Statistics Offices (policy support function)
- State Planning Commissions / Policy Planning Departments

**Sub-National Examples:**
- Provincial/State Ministry Equivalents
- Regional Policy Offices
- Local Government Policy Departments

**Specialized Examples:**
- Intergovernmental Coordination Bodies
- Policy Research Institutes (government-affiliated)
- Budget and Economic Policy Units

## 1.3 Key Characteristics

| Characteristic | Description |
|----------------|-------------|
| **Primary Function** | Policy analysis, development, and monitoring within assigned functional area |
| **Transaction Volume** | Low (document-centric, not transaction-centric) |
| **Customer Interaction** | Indirect — through policy outputs rather than direct services; consultation-based engagement |
| **Staffing Profile** | Policy analysts, legal experts, economists, subject matter specialists, administrative support |
| **IT Intensity** | Moderate — primarily office automation, collaboration, document management, and analytics |
| **Data Focus** | External data consumption for analysis; limited internal data creation; emphasis on research and evidence |
| **Compliance Burden** | Internal compliance with government standards; limited external regulatory role |
| **Decision Authority** | Policy recommendations to executive/legislative; may have budget allocation influence |
| **Output Types** | Policies, legislation, regulations, strategic plans, reports, position papers, consultation documents |

**Distinguishing Features from Other Organization Types:**
- PDUs **develop policy** but do not directly implement or enforce it (unlike RA/SDA)
- PDUs have **minimal direct interaction** with citizens/businesses on transactional matters
- PDUs focus on **knowledge management** and **evidence-based decision support**
- PDUs require **general office automation** environment similar to private sector knowledge organizations

## 1.4 Ecosystem Participation Patterns

PDUs operate within and across multiple government ecosystems, primarily in coordination and oversight roles:

| Ecosystem | Participation Pattern | Typical Interactions |
|-----------|----------------------|---------------------|
| **Cabinet/Executive** | Primary | Policy proposals, cabinet papers, ministerial briefings |
| **Legislature/Parliament** | Primary | Bill drafting, parliamentary liaison, inquiry responses, amendment analysis |
| **Finance/Budget** | Primary | Budget preparation, expenditure policy, fiscal impact analysis |
| **[Functional Area]** | Primary | Sector policy leadership, coordination with implementing agencies |
| **Inter-Ministerial** | Primary | Cross-ministry coordination, joint policy development |
| **Statistics/Data** | Secondary | Data consumption for analysis, indicator development |
| **Media/Public** | Secondary | Communications, public consultations, awareness campaigns |
| **International** | Secondary | International agreements, coordination with international bodies |
| **Civil Society** | Secondary | Consultation, stakeholder engagement, feedback collection |
| **Academia/Research** | Secondary | Research partnerships, evidence gathering |

## 1.5 DPI Integration Points

As the base organization type, PDU requires integration with core DPI components for fundamental operations:

| DPI Component | Requirement Level | Integration Description |
|---------------|-------------------|------------------------|
| **Identity BB** | Mandatory | Staff authentication for systems access; may use national eID for citizens during consultations |
| **Information Mediator BB** | Mandatory | Cross-ministry data sharing for policy analysis; access to national registries |
| **Messaging BB** | Recommended | Stakeholder notifications, public consultations, internal communications |
| **Digital Registries BB** | Recommended | Access to population, business, and other national registries for policy analysis and impact assessment |
| **Workflow BB** | Recommended | Policy approval workflows, document routing, legislative tracking |
| **Consent BB** | Optional | Management of consent for consultation data and stakeholder information |
| **Scheduler BB** | Optional | Meeting scheduling, deadline management |
| **Registration BB** | Optional | Public consultation participant registration |
| **Payments BB** | Not Required | PDUs typically do not process external payments; internal budget systems separate |
| **E-Signature Service** | Recommended | Digital signing of official documents, policy papers, legislative submissions |
| **Document Exchange** | Mandatory | Secure exchange of official documents with other government entities |

**DPI Dependency Summary:**
- PDU operations assume functioning national **digital identity infrastructure** for staff authentication
- PDU requires access to **interoperability platform** for cross-ministry data exchange
- PDU benefits from **cloud infrastructure** for document storage and collaboration

---

# 2. BUSINESS ARCHITECTURE

## 2.1 Business Model Canvas

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              BUSINESS MODEL CANVAS                                   │
│                           Policy Development Unit (PDU)                              │
├───────────────────┬───────────────────┬─────────────────────┬───────────────────────┤
│ KEY PARTNERS      │ KEY ACTIVITIES    │ VALUE PROPOSITION   │ CUSTOMER              │
│                   │                   │                     │ RELATIONSHIPS         │
│ • Parliament      │ • Policy analysis │                     │                       │
│ • Government/     │   and research    │ 1. POLICY           │ • Permanent relations │
│   Cabinet         │ • Legislative     │    DEVELOPMENT      │   with industrial     │
│ • Other           │   drafting        │                     │   unions in relevant  │
│   Ministries      │ • Stakeholder     │ • Responsible for   │   functional area     │
│ • Media           │   consultation    │   specific area     │                       │
│ • Industrial      │ • Impact          │   (defense, health, │ • Close relations     │
│   Unions          │   assessment      │   social care, etc.)│   with media for      │
│ • Public/         │ • Inter-          │ • Develop and       │   awareness campaigns │
│   Citizens        │   ministerial     │   maintain          │                       │
│ • Academia        │   coordination    │   legislation       │ • Formal relationship │
│ • International   │ • Performance     │ • Communicate with  │   with Parliament     │
│   Bodies          │   monitoring      │   stakeholders      │   and other MDAs      │
│                   │                   │                     │                       │
│                   ├───────────────────┤ 2. SUPERVISION OF   ├───────────────────────┤
│                   │ KEY RESOURCES     │    IMPLEMENTATION   │ CHANNELS              │
│                   │                   │                     │                       │
│                   │ • Functional area │ • Set up KPIs and   │ • Formal documents    │
│                   │   expertise       │   reporting         │   (policies, bills,   │
│                   │ • Legal experts   │ • Monitor           │   regulations)        │
│                   │ • Policy analysts │   implementing      │ • Official            │
│                   │ • Institutional   │   agencies          │   correspondence      │
│                   │   building        │ • Evaluate policy   │ • Public              │
│                   │   expertise       │   outcomes          │   consultations       │
│                   │ • IT systems      │                     │ • Awareness campaigns │
│                   │                   │                     │ • Website/portal      │
│                   │                   │                     │ • Meetings/hearings   │
│                   │                   │ CUSTOMER SEGMENTS   │                       │
│                   │                   │                     │                       │
│                   │                   │ • Parliament        │                       │
│                   │                   │ • Cabinet/          │                       │
│                   │                   │   Government        │                       │
│                   │                   │ • Implementing      │                       │
│                   │                   │   agencies (RA/SDA) │                       │
│                   │                   │ • Industry/Business │                       │
│                   │                   │ • General Public    │                       │
│                   │                   │ • Civil Society     │                       │
├───────────────────┴───────────────────┴─────────────────────┴───────────────────────┤
│ COST STRUCTURE                        │ REVENUE/FUNDING STRUCTURE                   │
│                                       │                                             │
│ • Staff salaries (primary cost)       │ • Governmental budget allocation            │
│ • Office space and facilities         │   (primary funding source)                  │
│ • IT systems and infrastructure       │ • Typically no fee-based revenue            │
│ • Utilities                           │ • May receive international grants          │
│ • Consulting and research services    │   for specific projects                     │
│ • Travel and stakeholder engagement   │                                             │
└───────────────────────────────────────┴─────────────────────────────────────────────┘
```

## 2.2 Stakeholder Map

### 2.2.1 Internal Stakeholders

| Stakeholder | Role | Key Interactions |
|-------------|------|------------------|
| **Minister/Political Leadership** | Direction setting, decision authority | Policy approval, priority setting, public representation |
| **Permanent Secretary/Administrative Head** | Operational leadership, resource management | Strategy execution, staff direction, inter-ministry liaison |
| **Policy Departments** | Policy development units | Analysis, drafting, consultation |
| **Legal Services** | Legal review and drafting | Legislative drafting, compliance review |
| **Communications Unit** | Public relations, stakeholder comms | Press releases, consultations, awareness |
| **Finance & Budget Unit** | Resource management | Budget preparation, expenditure tracking |
| **HR & Administration** | Staff management | Recruitment, training, facilities |
| **IT Unit** | Technology support | Systems maintenance, digital tools |

### 2.2.2 External Stakeholders

| Stakeholder | Relationship Type | Key Interactions |
|-------------|-------------------|------------------|
| **Parliament/Legislature** | Authority/Oversight | Bill submissions, inquiry responses, committee hearings |
| **Cabinet/Government** | Authority/Direction | Policy proposals, cabinet papers, government decisions |
| **Other Ministries** | Peer/Coordination | Joint policy development, inter-ministerial consultations |
| **Implementing Agencies (RA/SDA)** | Subordinate/Direction | Policy direction, performance monitoring, guidance |
| **Industry/Business Associations** | Consultation | Policy input, impact feedback, compliance dialogue |
| **Civil Society Organizations** | Consultation | Policy input, public interest representation |
| **Citizens/Public** | Beneficiary/Consultation | Public consultations, awareness campaigns |
| **Media** | Information | Press briefings, public communications |
| **Academia/Research Institutions** | Advisory | Evidence provision, research partnerships |
| **International Bodies** | Coordination | Treaty obligations, international standards |

### 2.2.3 Stakeholder Influence Matrix

```
                        HIGH INFLUENCE
                              │
              ┌───────────────┼───────────────┐
              │   MANAGE      │    KEY        │
              │   CLOSELY     │   PLAYERS     │
              │               │               │
              │ Implementing  │ Parliament    │
              │ Agencies      │ Cabinet       │
              │ Media         │ Minister      │
              │               │ Other MDAs    │
   LOW        ├───────────────┼───────────────┤  HIGH
   INTEREST   │   MONITOR     │    KEEP       │  INTEREST
              │               │  INFORMED     │
              │ International │ Industry      │
              │ Bodies        │ Associations  │
              │ Academia      │ Civil Society │
              │               │ Public        │
              └───────────────┼───────────────┘
                              │
                        LOW INFLUENCE
```

## 2.3 Service Catalog

PDU services are organized into **internal services** (to government) and **external services** (to public stakeholders):

### 2.3.1 Internal Services (G2G)

| Service Category | Service ID | Service Name | Description | Primary Recipient |
|------------------|-----------|--------------|-------------|-------------------|
| **Policy Services** | PDU-INT-001 | Policy Development | Development of new policies within functional area | Cabinet, Parliament |
| | PDU-INT-002 | Legislative Drafting | Preparation of bills and regulations | Parliament |
| | PDU-INT-003 | Regulatory Impact Assessment | Analysis of policy impacts (economic, social, environmental) | Cabinet, Parliament |
| | PDU-INT-004 | Policy Advice | Ministerial briefings and policy recommendations | Minister, Cabinet |
| | PDU-INT-005 | Inter-Ministerial Coordination | Joint policy development across ministries | Other Ministries |
| **Oversight Services** | PDU-INT-006 | Performance Monitoring | Tracking KPIs of implementing agencies | Implementing Agencies |
| | PDU-INT-007 | Policy Evaluation | Ex-post evaluation of policy effectiveness | Cabinet, Parliament |
| | PDU-INT-008 | Strategic Planning | Development of sectoral strategies | Cabinet |
| **Support Services** | PDU-INT-009 | Budget Preparation | Sectoral budget development | Ministry of Finance |
| | PDU-INT-010 | Parliamentary Liaison | Support for parliamentary processes | Parliament |

### 2.3.2 External Services (G2B, G2C)

| Service Category | Service ID | Service Name | Description | Primary Recipient | Channel |
|------------------|-----------|--------------|-------------|-------------------|---------|
| **Engagement Services** | PDU-EXT-001 | Public Consultation | Formal consultation on proposed policies | Public, Industry | Digital/Physical |
| | PDU-EXT-002 | Stakeholder Dialogue | Ongoing engagement with sector representatives | Industry Associations | Meetings, Portal |
| | PDU-EXT-003 | Information Publication | Publication of policies, reports, guidelines | Public | Website, Gazette |
| **Awareness Services** | PDU-EXT-004 | Public Awareness Campaigns | Communication campaigns on policy matters | Public | Media, Digital |
| | PDU-EXT-005 | Educational Content | Explanatory materials on regulations | Public, Business | Website, Publications |
| **Inquiry Services** | PDU-EXT-006 | Parliamentary Inquiry Response | Responses to parliamentary questions | Parliament | Official Correspondence |
| | PDU-EXT-007 | FOI/RTI Processing | Processing freedom of information requests | Public | Official Correspondence |

---

# 3. CAPABILITY MAP

## Capability Numbering Convention

Capabilities are numbered using the following scheme:
- **C1.x** — Core Policy Capabilities (PDU-specific)
- **C2.x** — Support Capabilities (Generic organizational)

Each capability is marked for inheritance:
- `[BASE]` — Fundamental capability established at PDU level
- All PDU capabilities will be `[INHERITED]` by RA and SDA

## 3.1 Core Capabilities (Function-Specific)

### C1: POLICY DEVELOPMENT DOMAIN [BASE]

The Policy Development domain encompasses all capabilities related to the primary mission of a PDU.

#### C1.1 Policy Analysis and Research [BASE]

**Definition:** The ability to systematically analyze issues, gather evidence, and develop policy options.

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C1.1.1 | Evidence Gathering | Collect and synthesize research, data, and stakeholder input | Analytics, Information Mediator BB |
| C1.1.2 | Impact Assessment | Conduct regulatory, economic, social, and environmental impact analysis | Analytics |
| C1.1.3 | Options Development | Formulate and evaluate alternative policy approaches | — |
| C1.1.4 | Comparative Analysis | Benchmark against international practices and other jurisdictions | — |
| C1.1.5 | Risk Analysis | Identify and assess policy risks and unintended consequences | — |

#### C1.2 Policy Formulation [BASE]

**Definition:** The ability to develop policy proposals and recommendations for decision-makers.

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C1.2.1 | Policy Design | Structure policy interventions with clear objectives and mechanisms | — |
| C1.2.2 | Cabinet Paper Preparation | Prepare formal submissions for cabinet/government consideration | Workflow BB |
| C1.2.3 | Ministerial Brief Development | Prepare advice and briefing materials for ministers | Document Management |
| C1.2.4 | Strategic Planning | Develop medium and long-term sectoral strategies | — |
| C1.2.5 | Annual Work Planning | Develop annual policy and legislative programs | — |

#### C1.3 Legislative Drafting [BASE]

**Definition:** The ability to translate policy decisions into legal instruments.

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C1.3.1 | Primary Legislation Drafting | Draft bills for parliamentary consideration | Document Management |
| C1.3.2 | Secondary Legislation Drafting | Draft regulations, orders, and rules | Document Management |
| C1.3.3 | Legal Review | Ensure legal consistency and constitutional compliance | — |
| C1.3.4 | Amendment Processing | Process and incorporate legislative amendments | Workflow BB |
| C1.3.5 | Consolidation | Maintain consolidated versions of legislation | Digital Registries BB |

#### C1.4 Stakeholder Engagement [BASE]

**Definition:** The ability to engage with stakeholders to inform policy development and build consensus.

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C1.4.1 | Consultation Management | Plan and conduct formal public consultations | Registration BB, Workflow BB |
| C1.4.2 | Stakeholder Relationship Management | Maintain ongoing relationships with key stakeholders | — |
| C1.4.3 | Feedback Processing | Collect, analyze, and respond to stakeholder input | Analytics |
| C1.4.4 | Interest Group Liaison | Engage with industry associations and civil society | Messaging BB |
| C1.4.5 | Public Communication | Communicate policy matters to the public | Messaging BB |

#### C1.5 Inter-Governmental Coordination [BASE]

**Definition:** The ability to coordinate policy development across government entities.

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C1.5.1 | Inter-Ministerial Consultation | Coordinate with other ministries on cross-cutting issues | Information Mediator BB |
| C1.5.2 | Parliamentary Liaison | Manage relationships and communications with parliament | — |
| C1.5.3 | Cabinet Coordination | Support cabinet processes and decision-making | Workflow BB |
| C1.5.4 | Sub-National Coordination | Coordinate with regional/local government entities | — |
| C1.5.5 | International Coordination | Engage with international bodies and counterpart agencies | — |

#### C1.6 Policy Monitoring and Evaluation [BASE]

**Definition:** The ability to track policy implementation and assess outcomes.

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C1.6.1 | KPI Development | Define and maintain performance indicators | — |
| C1.6.2 | Implementation Monitoring | Track progress of policy implementation by agencies | Analytics, Information Mediator BB |
| C1.6.3 | Performance Reporting | Generate and publish performance reports | Analytics |
| C1.6.4 | Policy Evaluation | Conduct ex-post evaluation of policy effectiveness | Analytics |
| C1.6.5 | Learning and Adaptation | Incorporate lessons learned into policy refinement | — |

---

## 3.2 Support Capabilities (Generic Organizational)

### C2: ORGANIZATIONAL SUPPORT DOMAIN [BASE]

Support capabilities are required by all government organizations and form the foundation that RA and SDA inherit.

#### C2.1 Human Resource Management [BASE]

**Definition:** The ability to manage the organization's workforce effectively.

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C2.1.1 | Organization Structure Management | Define and maintain organizational structure and positions | — |
| C2.1.2 | Workforce Planning | Plan staffing needs and succession | — |
| C2.1.3 | Recruitment and Selection | Attract, assess, and onboard staff | Registration BB |
| C2.1.4 | Performance Management | Set objectives, conduct appraisals, manage performance | — |
| C2.1.5 | Learning and Development | Train and develop staff capabilities | — |
| C2.1.6 | Employee Administration | Manage employee records, leave, and benefits | — |

#### C2.2 Financial Management [BASE]

**Definition:** The ability to manage the organization's financial resources.

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C2.2.1 | Budget Planning | Develop and submit budget proposals | — |
| C2.2.2 | Budget Execution | Manage expenditure within approved budgets | — |
| C2.2.3 | Accounting | Record and report financial transactions | — |
| C2.2.4 | Financial Reporting | Prepare financial statements and reports | Analytics |
| C2.2.5 | Internal Audit | Conduct internal financial and compliance audits | — |

#### C2.3 Procurement Management [BASE]

**Definition:** The ability to acquire goods and services in compliance with regulations.

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C2.3.1 | Procurement Planning | Plan procurement activities and timelines | — |
| C2.3.2 | Supplier Management | Identify, evaluate, and manage suppliers | — |
| C2.3.3 | Tendering | Conduct procurement processes and evaluate bids | Workflow BB |
| C2.3.4 | Contract Management | Manage contracts through their lifecycle | Workflow BB |
| C2.3.5 | Procurement Compliance | Ensure adherence to procurement regulations | — |

#### C2.4 Information and Knowledge Management [BASE]

**Definition:** The ability to manage the organization's information assets and institutional knowledge.

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C2.4.1 | Document Management | Create, store, retrieve, and manage documents | Document Management (Workflow BB) |
| C2.4.2 | Records Management | Manage official records through retention lifecycle | Document Management |
| C2.4.3 | Knowledge Management | Capture and share institutional knowledge | Content Management |
| C2.4.4 | Information Security | Protect information assets from unauthorized access | Security BB |
| C2.4.5 | Archive Management | Preserve historical records | — |

#### C2.5 Corporate Communications [BASE]

**Definition:** The ability to manage internal and external communications.

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C2.5.1 | Internal Communications | Communicate with staff across the organization | Messaging BB |
| C2.5.2 | External Communications | Manage public and media relations | Messaging BB |
| C2.5.3 | Event Management | Plan and execute meetings, conferences, events | Scheduler BB |
| C2.5.4 | Brand and Identity | Maintain organizational brand and visual identity | — |
| C2.5.5 | Crisis Communications | Manage communications during incidents/crises | Messaging BB |

#### C2.6 IT and Digital Services [BASE]

**Definition:** The ability to provide and manage technology services.

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C2.6.1 | IT Service Management | Provide and support IT services to users | — |
| C2.6.2 | Application Management | Manage business applications | — |
| C2.6.3 | Infrastructure Management | Manage IT infrastructure (or cloud services) | — |
| C2.6.4 | Cybersecurity Management | Protect IT assets and respond to threats | Security BB |
| C2.6.5 | Digital Channel Management | Manage website and digital touchpoints | — |

#### C2.7 Facilities and Administration [BASE]

**Definition:** The ability to manage physical assets and administrative services.

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C2.7.1 | Facilities Management | Manage office space and physical infrastructure | — |
| C2.7.2 | Asset Management | Track and manage physical assets | Digital Registries BB |
| C2.7.3 | Administrative Services | Provide mail, courier, and administrative support | — |
| C2.7.4 | Travel Management | Manage official travel arrangements | — |
| C2.7.5 | Security and Safety | Manage physical security and workplace safety | — |

#### C2.8 Risk and Compliance Management [BASE]

**Definition:** The ability to identify and manage organizational risks and ensure compliance.

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C2.8.1 | Risk Identification | Identify and assess organizational risks | — |
| C2.8.2 | Risk Mitigation | Develop and implement risk mitigation measures | — |
| C2.8.3 | Compliance Monitoring | Monitor compliance with regulations and policies | — |
| C2.8.4 | Business Continuity | Plan for and manage business continuity | — |
| C2.8.5 | Internal Controls | Design and operate internal control systems | — |

#### C2.9 Strategic Management [BASE]

**Definition:** The ability to set direction and manage organizational strategy.

| Capability ID | Capability Name | Description | Related BB |
|---------------|-----------------|-------------|------------|
| C2.9.1 | Strategic Planning | Develop organizational strategy and plans | — |
| C2.9.2 | Performance Planning | Set organizational objectives and targets | — |
| C2.9.3 | Performance Monitoring | Track progress against objectives | Analytics |
| C2.9.4 | Change Management | Manage organizational change initiatives | — |
| C2.9.5 | Quality Management | Ensure quality of outputs and processes | — |

---

## 3.3 Capability-to-Process Mapping

The following matrix maps capabilities to the OECD 12-step policy-making process:

| OECD Process Step | Primary Capabilities | Supporting Capabilities |
|-------------------|---------------------|------------------------|
| 1. Define Government Priorities | C1.2.4, C1.2.5 | C2.9.1 |
| 2. Annual Policy & Legislative Planning | C1.2.5 | C2.9.2 |
| 3. Prepare Policy Proposals | C1.1.1-C1.1.5, C1.2.1-C1.2.3 | C2.4.1 |
| 4. Prepare Legal Drafts | C1.3.1-C1.3.3 | C2.4.1 |
| 5. Inter-ministerial Consultations | C1.5.1 | C2.5.1 |
| 6. Submit to Government Office | C1.2.2, C1.5.3 | C2.4.1 |
| 7. Review by Government Office | — (external process) | — |
| 8. Decision by Government | — (external process) | — |
| 9. Parliamentary Process | C1.5.2, C1.3.4 | C2.5.2 |
| 10. Enactment and Publication | C1.3.5 | C2.5.2 |
| 11. Implementation Planning | C1.6.1 | C2.9.2 |
| 12. Monitoring and Evaluation | C1.6.2-C1.6.5 | C2.9.3 |

**Stakeholder Engagement Integration:**
- C1.4.1-C1.4.5 support Steps 1-3 and 9-12
- C1.4.2 is ongoing throughout all steps

---

## 3.4 Capability Maturity Indicators

The following maturity model can be used to assess PDU capability levels:

| Level | Name | Description |
|-------|------|-------------|
| 1 | Initial | Ad-hoc, person-dependent; no standardized approach |
| 2 | Developing | Basic processes exist but inconsistently applied |
| 3 | Defined | Standardized processes documented and followed |
| 4 | Managed | Processes measured and continuously improved |
| 5 | Optimizing | Best-in-class, innovative, continuously adapting |

### Core Capability Maturity Indicators

| Capability | L1: Initial | L2: Developing | L3: Defined | L4: Managed | L5: Optimizing |
|------------|-------------|----------------|-------------|-------------|----------------|
| C1.1 Policy Analysis | Ad-hoc research | Basic templates | Formal methodology | Evidence quality tracked | Predictive analytics |
| C1.2 Policy Formulation | Individual approaches | Basic templates | Standard processes | Outcome tracking | Design thinking applied |
| C1.3 Legislative Drafting | Manual processes | Basic tools | Drafting standards | Quality metrics | AI-assisted drafting |
| C1.4 Stakeholder Engagement | Reactive only | Planned consultations | Consultation framework | Satisfaction tracked | Co-design practices |
| C1.5 Inter-Gov Coordination | Ad-hoc meetings | Scheduled coordination | Formal protocols | Collaboration metrics | Integrated planning |
| C1.6 Monitoring & Evaluation | No systematic review | Basic reporting | M&E framework | Performance dashboards | Real-time adaptation |

### Support Capability Maturity Indicators

| Capability | L1: Initial | L2: Developing | L3: Defined | L4: Managed | L5: Optimizing |
|------------|-------------|----------------|-------------|-------------|----------------|
| C2.1 HR Management | Manual records | HR database | HRM system | HR analytics | Talent management |
| C2.2 Financial Management | Manual accounting | Basic system | ERP integration | Financial dashboards | Predictive budgeting |
| C2.3 Procurement | Manual processes | E-procurement | Full automation | Spend analytics | Strategic sourcing |
| C2.4 Information Mgmt | File shares | Basic DMS | Enterprise DMS | Content analytics | Knowledge AI |
| C2.5 Communications | Ad-hoc | Planned comms | Multi-channel | Engagement tracking | Personalized comms |
| C2.6 IT Services | Reactive support | Service desk | ITSM framework | Service metrics | Proactive/self-service |

---

# PART II: TECHNICAL ARCHITECTURE

---

# 4. APPLICATION ARCHITECTURE

## Overview

The PDU Application Architecture defines the software components required to support the Policy Development Unit's capabilities. The architecture follows a three-zone model aligned with the PAERA framework:

1. **Channels Zone** - Implements secure omni-channel access for stakeholders
2. **Core Services Zone** - Supports PDU staff activities and policy development
3. **Infrastructure Zone** - Enables data processing, analytics, and integration with DPI

**Design Principles:**
- Leverage national digital infrastructure (DPI) components where available
- Minimize custom development through use of GovStack Building Blocks
- Support collaboration and knowledge-intensive work patterns
- Enable integration with other government agencies via Information Mediator

---

## 4.1 Application Components Diagram

### 4.1.1 High-Level Application Landscape

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        PDU APPLICATION ARCHITECTURE                              │
│                         Policy Development Unit                                  │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ┌───────────────────────────────────────────────────────────────────────────┐  │
│  │                         CHANNELS ZONE                                      │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐          │  │
│  │  │  Internal  │  │ Stakeholder│  │    API     │  │   G2G      │          │  │
│  │  │   Portal   │  │   Portal   │  │  Gateway   │  │  Interface │          │  │
│  │  │   (A0.1)   │  │   (A0.2)   │  │   (A0.3)   │  │   (A0.4)   │          │  │
│  │  └─────┬──────┘  └─────┬──────┘  └─────┬──────┘  └─────┬──────┘          │  │
│  └────────┼───────────────┼───────────────┼───────────────┼──────────────────┘  │
│           │               │               │               │                     │
│           └───────────────┴───────────────┴───────────────┘                     │
│                                   │                                              │
│  ┌────────────────────────────────┴────────────────────────────────────────┐    │
│  │                      CORE SERVICES ZONE                                  │    │
│  │                                                                          │    │
│  │  ┌─────────────────────────────────────────────────────────────────┐    │    │
│  │  │            POLICY DEVELOPMENT SUPPORT (A1.x)                     │    │    │
│  │  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │    │    │
│  │  │  │   Document   │  │    Policy    │  │ Legislative  │           │    │    │
│  │  │  │  Management  │──│  Management  │──│   Drafting   │           │    │    │
│  │  │  │    (A1.1)    │  │    (A1.2)    │  │    (A1.3)    │           │    │    │
│  │  │  └──────────────┘  └──────────────┘  └──────────────┘           │    │    │
│  │  └─────────────────────────────────────────────────────────────────┘    │    │
│  │                                                                          │    │
│  │  ┌─────────────────────────────────────────────────────────────────┐    │    │
│  │  │            STAKEHOLDER ENGAGEMENT (A2.x)                         │    │    │
│  │  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │    │    │
│  │  │  │  Stakeholder │  │ Consultation │  │Communication │           │    │    │
│  │  │  │  Relationship│──│   Platform   │──│  Management  │           │    │    │
│  │  │  │    (A2.1)    │  │    (A2.2)    │  │    (A2.3)    │           │    │    │
│  │  │  └──────────────┘  └──────────────┘  └──────────────┘           │    │    │
│  │  └─────────────────────────────────────────────────────────────────┘    │    │
│  │                                                                          │    │
│  │  ┌─────────────────────────────────────────────────────────────────┐    │    │
│  │  │            KNOWLEDGE & COLLABORATION (A3.x)                      │    │    │
│  │  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │    │    │
│  │  │  │  Knowledge   │  │ Collaboration│  │   Intranet   │           │    │    │
│  │  │  │  Management  │──│   Platform   │──│    Portal    │           │    │    │
│  │  │  │    (A3.1)    │  │    (A3.2)    │  │    (A3.3)    │           │    │    │
│  │  │  └──────────────┘  └──────────────┘  └──────────────┘           │    │    │
│  │  └─────────────────────────────────────────────────────────────────┘    │    │
│  │                                                                          │    │
│  │  ┌─────────────────────────────────────────────────────────────────┐    │    │
│  │  │            SUPPORT FUNCTIONS (A4.x) - PAO-CC                     │    │    │
│  │  │  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐       │    │    │
│  │  │  │    HR     │ │ Financial │ │   Asset   │ │  Project  │       │    │    │
│  │  │  │Management │ │Management │ │Management │ │Management │       │    │    │
│  │  │  │  (A4.1)   │ │  (A4.2)   │ │  (A4.3)   │ │  (A4.4)   │       │    │    │
│  │  │  └───────────┘ └───────────┘ └───────────┘ └───────────┘       │    │    │
│  │  └─────────────────────────────────────────────────────────────────┘    │    │
│  │                                                                          │    │
│  └──────────────────────────────────────────────────────────────────────────┘    │
│                                   │                                              │
│  ┌────────────────────────────────┴────────────────────────────────────────┐    │
│  │                      INFRASTRUCTURE ZONE                                 │    │
│  │                                                                          │    │
│  │  ┌───────────────────────────────────────────────────────────────────┐  │    │
│  │  │                    DATA & ANALYTICS (A5.x)                         │  │    │
│  │  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐             │  │    │
│  │  │  │     Data     │  │   Analytics  │  │  Reporting   │             │  │    │
│  │  │  │   Platform   │──│   Platform   │──│   Platform   │             │  │    │
│  │  │  │    (A5.1)    │  │    (A5.2)    │  │    (A5.3)    │             │  │    │
│  │  │  └──────────────┘  └──────────────┘  └──────────────┘             │  │    │
│  │  └───────────────────────────────────────────────────────────────────┘  │    │
│  │                                                                          │    │
│  │  ┌───────────────────────────────────────────────────────────────────┐  │    │
│  │  │                    DPI INTEGRATION LAYER                           │  │    │
│  │  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐     │  │    │
│  │  │  │Identity │ │Info Med │ │Messaging│ │Registry │ │Workflow │     │  │    │
│  │  │  │   BB    │ │   BB    │ │   BB    │ │   BB    │ │   BB    │     │  │    │
│  │  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘     │  │    │
│  │  └───────────────────────────────────────────────────────────────────┘  │    │
│  │                                                                          │    │
│  └──────────────────────────────────────────────────────────────────────────┘    │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘

LEGEND:
┌────────────┐
│   A#.#     │ = Application Component (numbered for traceability)
└────────────┘
     ──       = Integration/Data Flow
```

### 4.1.2 Application Layers

| Layer | Purpose | Key Components |
|-------|---------|----------------|
| **Channels** | Secure access for internal staff and external stakeholders | Portals, API Gateway, G2G interfaces |
| **Core Services** | Primary business applications supporting PDU capabilities | Policy management, stakeholder engagement, knowledge systems |
| **Infrastructure** | Data processing, analytics, and DPI integration | Data platform, analytics, Building Block integration |

---

## 4.2 Core Applications by Capability Area

### 4.2.1 Channels Zone (A0.x)

| ID | Application | Description | BB Alignment | Criticality |
|----|-------------|-------------|--------------|-------------|
| A0.1 | Internal Portal | Unified entry point for PDU staff to access all internal applications and services | — | Core |
| A0.2 | Stakeholder Portal | Public-facing portal for consultation participation, document access, and communication | Registration BB | Core |
| A0.3 | API Gateway | Manages external API access for system-to-system integration | Information Mediator BB | Support |
| A0.4 | G2G Interface | Standardized interface for inter-ministry communication and data exchange | Information Mediator BB | Core |

### 4.2.2 Policy Development Support (A1.x)

| ID | Application | Description | BB Alignment | Criticality |
|----|-------------|-------------|--------------|-------------|
| **A1.1** | **Document Management System (DMS)** | Centralized repository for policy drafts, official documents, legal texts; version control, audit trails, retention management | Digital Registries BB | Core |
| A1.1.1 | Document Repository | Stores and organizes all policy-related documents | Digital Registries BB | Core |
| A1.1.2 | Version Control | Tracks document changes and maintains revision history | Workflow BB | Core |
| A1.1.3 | Records Management | Handles retention, disposition, and archival policies | Digital Registries BB | Support |
| **A1.2** | **Policy Management Platform** | Supports full policy lifecycle from initiation through review, approval, publication, and monitoring | Workflow BB | Core |
| A1.2.1 | Policy Registry | Master registry of all policies and their current status | Digital Registries BB | Core |
| A1.2.2 | Approval Workflow Engine | Configurable workflows for policy review and approval | Workflow BB | Core |
| A1.2.3 | Change Management | Tracks policy amendments and change history | Workflow BB | Support |
| A1.2.4 | Impact Assessment Tool | Supports Regulatory Impact Assessment (RIA) activities | — | Support |
| **A1.3** | **Legislative Drafting System** | Specialized tool for drafting, editing, and tracking legislation | Workflow BB | Core |
| A1.3.1 | Legal Drafting Editor | Structured authoring for legal texts with templates | — | Core |
| A1.3.2 | Amendment Tracker | Tracks proposed amendments through legislative process | Workflow BB | Core |
| A1.3.3 | Legal Reference Manager | Links drafts to existing legislation and precedents | Digital Registries BB | Support |
| A1.3.4 | Publication Manager | Prepares texts for official gazette publication | Messaging BB | Support |

### 4.2.3 Stakeholder Engagement (A2.x)

| ID | Application | Description | BB Alignment | Criticality |
|----|-------------|-------------|--------------|-------------|
| **A2.1** | **Stakeholder Relationship Management (SRM)** | Centralized database for managing stakeholder contacts, interactions, and relationship health | Digital Registries BB | Core |
| A2.1.1 | Stakeholder Registry | Master list of stakeholders with profiles and categorization | Digital Registries BB | Core |
| A2.1.2 | Interaction Tracker | Logs all stakeholder communications and meetings | Workflow BB | Support |
| A2.1.3 | Relationship Dashboard | Visualizes stakeholder engagement health and metrics | — | Support |
| **A2.2** | **Consultation Platform** | Facilitates public consultations, surveys, and feedback collection for policy proposals | Registration BB | Core |
| A2.2.1 | Consultation Manager | Creates and manages consultation campaigns | Workflow BB | Core |
| A2.2.2 | Feedback Collection | Captures stakeholder responses via multiple channels | Registration BB | Core |
| A2.2.3 | Sentiment Analysis | Analyzes feedback themes and sentiment | — | Support |
| A2.2.4 | Consultation Archive | Stores historical consultations and outcomes | Digital Registries BB | Support |
| **A2.3** | **Communication Management** | Manages outbound communications including press releases, newsletters, and notifications | Messaging BB | Core |
| A2.3.1 | Campaign Manager | Plans and executes communication campaigns | Messaging BB | Core |
| A2.3.2 | Multi-channel Publisher | Distributes content across email, SMS, web, social | Messaging BB | Core |
| A2.3.3 | Media Relations | Manages press contacts and releases | Digital Registries BB | Support |
| A2.3.4 | Communication Archive | Stores all outbound communications | Digital Registries BB | Support |

### 4.2.4 Knowledge & Collaboration (A3.x)

| ID | Application | Description | BB Alignment | Criticality |
|----|-------------|-------------|--------------|-------------|
| **A3.1** | **Knowledge Management System** | Organizes and provides access to institutional knowledge, research, and reference materials | Digital Registries BB | Core |
| A3.1.1 | Digital Library | Repository for research, reports, and publications | Digital Registries BB | Core |
| A3.1.2 | Reference Manager | Organizes citations, bibliographies, and sources | — | Support |
| A3.1.3 | Expertise Locator | Directory of subject matter experts within organization | Digital Registries BB | Support |
| A3.1.4 | Best Practices Repository | Collection of lessons learned and proven approaches | Digital Registries BB | Support |
| **A3.2** | **Collaboration Platform** | Enables real-time collaboration on documents, projects, and communications | — | Core |
| A3.2.1 | Collaborative Editing | Real-time co-authoring of documents | — | Core |
| A3.2.2 | Team Messaging | Internal instant messaging and chat | Messaging BB | Core |
| A3.2.3 | Video Conferencing | Virtual meeting capabilities | — | Support |
| A3.2.4 | Shared Workspaces | Project-specific collaboration spaces | — | Support |
| **A3.3** | **Intranet Portal** | Internal web platform for news, announcements, and resource access | — | Support |
| A3.3.1 | Content Publishing | News, announcements, and internal communications | — | Support |
| A3.3.2 | Employee Directory | Staff profiles and contact information | Digital Registries BB | Support |
| A3.3.3 | Service Catalog | IT and administrative services available to staff | Digital Registries BB | Support |

### 4.2.5 Support Functions (A4.x) - PAO-CC

> **Note:** These applications form the **Public Administration Organization Core Components (PAO-CC)** and are inherited by all organization types (RA and SDA).

| ID | Application | Description | BB Alignment | Criticality |
|----|-------------|-------------|--------------|-------------|
| **A4.1** | **HR Management System** | Comprehensive HR functionality including structure, positions, hiring, performance | Digital Registries BB | Core |
| A4.1.1 | Organizational Structure | Manages org hierarchy and reporting lines | Digital Registries BB | Core |
| A4.1.2 | Position Management | Job descriptions, roles, and requirements | Digital Registries BB | Support |
| A4.1.3 | Recruitment | Hiring workflow and applicant tracking | Workflow BB | Support |
| A4.1.4 | Performance Management | Goal setting, reviews, and appraisals | Workflow BB | Support |
| A4.1.5 | Time & Attendance | Leave management and time tracking | Scheduler BB | Support |
| **A4.2** | **Financial Management System** | Budget management, accounting, procurement, and financial reporting | Payments BB | Core |
| A4.2.1 | Budget Management | Budget planning, allocation, and monitoring | — | Core |
| A4.2.2 | Accounting | General ledger, AP/AR, financial transactions | Payments BB | Core |
| A4.2.3 | Procurement | Purchase requisitions, vendor management, contracts | Workflow BB | Core |
| A4.2.4 | Financial Reporting | Statutory and management financial reports | — | Support |
| **A4.3** | **Asset Management** | Tracks physical assets, IT equipment, and facility resources | Digital Registries BB | Support |
| A4.3.1 | Asset Registry | Inventory of all organizational assets | Digital Registries BB | Support |
| A4.3.2 | Asset Lifecycle | Acquisition, maintenance, disposal tracking | Workflow BB | Support |
| A4.3.3 | Facility Management | Office space, utilities, maintenance requests | Scheduler BB | Support |
| **A4.4** | **Project Management** | Plans, executes, and monitors policy projects and initiatives | Workflow BB | Core |
| A4.4.1 | Project Planning | Work breakdown, scheduling, resource allocation | Scheduler BB | Core |
| A4.4.2 | Task Management | Assignment, tracking, and completion monitoring | Workflow BB | Core |
| A4.4.3 | Progress Reporting | Dashboards and status reports | — | Support |
| A4.4.4 | Risk Register | Project risk identification and mitigation | Digital Registries BB | Support |

### 4.2.6 Data & Analytics (A5.x)

| ID | Application | Description | BB Alignment | Criticality |
|----|-------------|-------------|--------------|-------------|
| **A5.1** | **Data Platform** | Consolidates data from multiple sources for analysis and reporting | Digital Registries BB | Core |
| A5.1.1 | Data Integration | ETL processes for data collection and consolidation | Information Mediator BB | Core |
| A5.1.2 | Master Data Management | Ensures data quality and consistency | Digital Registries BB | Support |
| A5.1.3 | Data Catalog | Metadata management and data discovery | Digital Registries BB | Support |
| **A5.2** | **Analytics Platform** | Enables data analysis, statistical modeling, and trend identification | — | Core |
| A5.2.1 | Statistical Analysis | Tools for quantitative policy analysis | — | Core |
| A5.2.2 | Data Visualization | Dashboards and visual analytics | — | Core |
| A5.2.3 | Predictive Analytics | Forecasting and scenario modeling | — | Support |
| **A5.3** | **Reporting Platform** | Produces operational, management, and performance reports | — | Core |
| A5.3.1 | Operational Reports | Day-to-day monitoring and status reports | — | Core |
| A5.3.2 | Management Reports | Executive dashboards and KPI tracking | — | Core |
| A5.3.3 | External Reports | Reports for Parliament, Cabinet, public | — | Support |

### 4.2.7 Application Summary

| Capability Area | Application Count | Core | Support |
|-----------------|-------------------|------|---------|
| Channels (A0.x) | 4 | 3 | 1 |
| Policy Development (A1.x) | 3 (+11 sub) | 3 | 0 |
| Stakeholder Engagement (A2.x) | 3 (+11 sub) | 3 | 0 |
| Knowledge & Collaboration (A3.x) | 3 (+10 sub) | 2 | 1 |
| Support Functions (A4.x - PAO-CC) | 4 (+14 sub) | 3 | 1 |
| Data & Analytics (A5.x) | 3 (+8 sub) | 3 | 0 |
| **TOTAL** | **20 (+54 sub)** | **17** | **3** |

---

## 4.3 Integration Requirements

### 4.3.1 Internal Integration Patterns

| From | To | Integration Type | Data Exchanged | Frequency |
|------|-----|------------------|----------------|-----------|
| A1.1 (DMS) | A1.2 (Policy Mgmt) | Bi-directional | Document references, versions | Real-time |
| A1.2 (Policy Mgmt) | A1.3 (Legislative) | Bi-directional | Policy decisions, drafts | Event-driven |
| A1.1 (DMS) | A3.1 (Knowledge Mgmt) | Uni-directional | Published documents | Event-driven |
| A2.1 (SRM) | A2.2 (Consultation) | Bi-directional | Stakeholder contacts, history | Real-time |
| A2.2 (Consultation) | A2.3 (Communications) | Uni-directional | Campaign triggers, recipients | Event-driven |
| A2.2 (Consultation) | A5.2 (Analytics) | Uni-directional | Feedback data | Batch (daily) |
| A3.2 (Collaboration) | A1.1 (DMS) | Bi-directional | Working documents | Real-time |
| A4.1 (HR) | A0.1 (Internal Portal) | Uni-directional | Staff directory | Batch (daily) |
| A4.2 (Finance) | A4.3 (Asset) | Bi-directional | Asset values, depreciation | Batch (monthly) |
| A4.4 (Project Mgmt) | A5.3 (Reporting) | Uni-directional | Project status data | Event-driven |
| A5.1 (Data Platform) | A5.2 (Analytics) | Uni-directional | Consolidated data | Batch (nightly) |
| A5.2 (Analytics) | A5.3 (Reporting) | Uni-directional | Analysis results | Real-time |

### 4.3.2 External Integration Requirements

| Integration Partner | Integration Type | Purpose | Data Exchanged | Protocol |
|--------------------|------------------|---------|----------------|----------|
| Other Ministries | G2G (A0.4) | Policy coordination, data sharing | Policy documents, coordination requests | Information Mediator BB |
| Parliament | G2G | Legislative submissions, inquiries | Draft legislation, responses | Information Mediator BB |
| Cabinet Office | G2G | Policy submissions, decisions | Policy proposals, cabinet decisions | Information Mediator BB |
| Statistics Bureau | G2G | Policy analysis data | Statistical datasets | Information Mediator BB / API |
| Population Registry | G2G | Stakeholder verification | Identity data | Information Mediator BB |
| Business Registry | G2G | Stakeholder verification | Entity data | Information Mediator BB |
| Official Gazette | G2G | Legislation publication | Legal texts | Information Mediator BB / API |
| Media Outlets | B2G | Press distribution | Press releases | API / Messaging BB |
| Public (Citizens) | G2C | Consultation participation | Feedback, submissions | A0.2 Portal / API |

---

## 4.4 DPI Integration Specifications

### 4.4.1 Identity Pillar Integration

**Purpose:** Enable secure authentication of PDU staff and optional authentication of external stakeholders participating in consultations.

| Aspect | Specification |
|--------|---------------|
| **Primary Use Case** | Staff authentication to internal systems |
| **Secondary Use Case** | Optional citizen authentication for consultation submissions |
| **Integration Pattern** | SAML 2.0 / OpenID Connect federated authentication |
| **Identity Provider** | National Digital ID system via Identity BB |
| **Authorization Model** | Role-Based Access Control (RBAC) with local role definitions |

**Data Exchanged:**

| Direction | Data Elements | Purpose |
|-----------|---------------|---------|
| TO Identity BB | Authentication request | User login validation |
| FROM Identity BB | Identity token, attributes (name, ID, organization) | Session establishment |
| TO Identity BB | Signature request | E-signature for official documents |
| FROM Identity BB | Signed document hash | Legal document authentication |

### 4.4.2 Interoperability Pillar Integration

**Purpose:** Enable secure data exchange between PDU and other government organizations using national interoperability infrastructure.

| Aspect | Specification |
|--------|---------------|
| **Primary Use Case** | Secure messaging between ministries |
| **Secondary Use Case** | Access to national registries |
| **Integration Pattern** | REST API / X-Road compatible |
| **Message Format** | JSON with national schema compliance |
| **Security** | TLS mutual authentication, message signing |

**Services Consumed (FROM other agencies via Information Mediator):**

| Service | Provider | Data Received | Frequency |
|---------|----------|---------------|-----------|
| Population Data | Population Registry | Citizen demographics for policy analysis | On-demand |
| Business Data | Business Registry | Entity data for stakeholder verification | On-demand |
| Statistical Data | Statistics Bureau | Economic/social indicators | On-demand |
| Legal Repository | Official Gazette | Current legislation texts | On-demand |
| Cabinet Decisions | Cabinet Office | Approved policy decisions | Event-driven |

**Services Provided (TO other agencies via Information Mediator):**

| Service | Consumer | Data Provided | Frequency |
|---------|----------|---------------|-----------|
| Policy Status | Other ministries | Policy development status | On-demand |
| Consultation Results | Other ministries | Public feedback summaries | On-demand |
| Legislative Drafts | Parliament | Draft legislation for review | Event-driven |

### 4.4.3 DPI Component Usage Summary

| DPI Component | PDU Requirement Level | Primary Use | Implementation Priority |
|---------------|----------------------|-------------|------------------------|
| **Identity BB** | Mandatory | Staff authentication, e-signatures | High (Phase 1) |
| **Information Mediator BB** | Mandatory | Inter-ministry data exchange | High (Phase 1) |
| **Messaging BB** | Recommended | Stakeholder notifications | Medium (Phase 2) |
| **Digital Registries BB** | Recommended | Document and policy storage | Medium (Phase 2) |
| **Workflow BB** | Recommended | Approval processes | Medium (Phase 2) |
| **Consent BB** | Optional | Consultation data management | Low (Phase 3) |
| **Payments BB** | Not Required | PDUs typically don't process payments | N/A |
| **Scheduler BB** | Optional | Meeting and deadline management | Low (Phase 3) |
| **Registration BB** | Optional | Public consultation registration | Low (Phase 3) |

---

## 4.5 Building Block Mapping

### 4.5.1 Capability to Application to Building Block Mapping

| Capability | Application Component | GovStack Building Block | Integration Type |
|------------|----------------------|------------------------|------------------|
| **Policy Development** | | | |
| Document Management | A1.1 - DMS | Digital Registries BB | Functional BB |
| Policy Lifecycle Management | A1.2 - Policy Management | Workflow BB | Functional BB |
| Legislative Drafting | A1.3 - Legislative Drafting | Workflow BB | Functional BB |
| **Stakeholder Engagement** | | | |
| Stakeholder Relationship | A2.1 - SRM | Digital Registries BB | Functional BB |
| Consultation Management | A2.2 - Consultation Platform | Registration BB | Functional BB |
| Communication | A2.3 - Communication Mgmt | Messaging BB | Infrastructure BB |
| **Knowledge & Collaboration** | | | |
| Knowledge Management | A3.1 - Knowledge Mgmt | Digital Registries BB | Functional BB |
| Team Collaboration | A3.2 - Collaboration Platform | Messaging BB | Infrastructure BB |
| Internal Communications | A3.3 - Intranet Portal | — | Custom |
| **Support Functions (PAO-CC)** | | | |
| HR Management | A4.1 - HR System | Digital Registries BB | Functional BB |
| Financial Management | A4.2 - Finance System | Payments BB | Infrastructure BB |
| Asset Management | A4.3 - Asset Mgmt | Digital Registries BB | Functional BB |
| Project Management | A4.4 - Project Mgmt | Workflow BB, Scheduler BB | Functional BB |
| **Data & Analytics** | | | |
| Data Integration | A5.1 - Data Platform | Information Mediator BB | Infrastructure BB |
| Analytics | A5.2 - Analytics Platform | — | Custom |
| Reporting | A5.3 - Reporting Platform | — | Custom |
| **Cross-Cutting** | | | |
| User Authentication | All internal apps | Identity BB | Infrastructure BB |
| Inter-agency Data Exchange | A0.4 - G2G Interface | Information Mediator BB | Infrastructure BB |
| Personal Data Consent | A2.2 - Consultation | Consent BB | Infrastructure BB |

### 4.5.2 Building Block Implementation Matrix

| GovStack Building Block | Usage in PDU | Implementation Approach | Customization Required |
|------------------------|--------------|------------------------|------------------------|
| **Identity BB** | Core | Use national implementation | Minimal - configure RBAC roles |
| **Information Mediator BB** | Core | Use national implementation | Configure service endpoints |
| **Digital Registries BB** | Core | Deploy instance(s) for PDU | Configure schemas per domain |
| **Workflow BB** | Core | Deploy instance(s) for PDU | Configure policy workflows |
| **Messaging BB** | Core | Use national or deploy instance | Configure channels and templates |
| **Scheduler BB** | Support | Deploy instance if needed | Configure scheduling rules |
| **Registration BB** | Support | Deploy for consultation | Configure forms and workflows |
| **Consent BB** | Support | Use national implementation | Configure consent types |
| **Payments BB** | Not Used | N/A | N/A |

---

# 5. DATA ARCHITECTURE

## 5.1 Key Data Domains

PDU data is organized into five primary domains, each supporting specific capability areas.

### 5.1.1 Domain Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        PDU DATA DOMAINS                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │   D1        │  │   D2        │  │   D3        │  │   D4        │     │
│  │  POLICY     │  │ STAKEHOLDER │  │ OPERATIONAL │  │ REFERENCE   │     │
│  │   DATA      │  │    DATA     │  │    DATA     │  │   DATA      │     │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘     │
│        │                │                │                │              │
│        └────────────────┼────────────────┼────────────────┘              │
│                         │                │                               │
│                   ┌─────────────┐                                        │
│                   │   D5        │                                        │
│                   │ CORPORATE   │                                        │
│                   │   DATA      │                                        │
│                   └─────────────┘                                        │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### 5.1.2 D1: Policy Data Domain

**Purpose:** Core data supporting the policy development lifecycle.

| ID | Data Sub-Domain | Description | Example Data Elements |
|----|-----------------|-------------|----------------------|
| **D1.1** | Policy Documents | Official policy drafts, approved policies, and archived versions | Policy ID, title, version, status, effective date, functional area, keywords |
| **D1.2** | Legislative Texts | Laws, regulations, and legal instruments | Law ID, title, enactment date, amendment history, jurisdiction, legal status |
| **D1.3** | Policy Analysis Data | Research data, impact assessments, and evidence base | Study ID, methodology, data sources, findings, recommendations, approval status |
| **D1.4** | Regulatory Proposals | Proposed regulations in development | Proposal ID, sponsoring unit, stage, public comment period, related policy |
| **D1.5** | Policy Monitoring Data | KPIs and implementation tracking data | Indicator ID, baseline, target, actual value, measurement period, responsible unit |

### 5.1.3 D2: Stakeholder Data Domain

**Purpose:** Data about external parties engaged in policy development.

| ID | Data Sub-Domain | Description | Example Data Elements |
|----|-----------------|-------------|----------------------|
| **D2.1** | Stakeholder Registry | Master list of stakeholders and their attributes | Stakeholder ID, type (individual/organization), name, sector, interests, contact preferences |
| **D2.2** | Consultation Responses | Feedback received during public consultations | Response ID, consultation ID, stakeholder ID, submission date, response content, themes |
| **D2.3** | Communication Records | History of stakeholder interactions | Communication ID, date, channel, direction, subject, stakeholder ID, handling officer |
| **D2.4** | Engagement History | Longitudinal record of stakeholder engagement | Stakeholder ID, engagement events, participation level, relationship quality score |
| **D2.5** | Expert Network Data | Information about subject matter experts | Expert ID, domain expertise, affiliation, credentials, availability, engagement history |

### 5.1.4 D3: Operational Data Domain

**Purpose:** Data supporting day-to-day PDU operations and workflows.

| ID | Data Sub-Domain | Description | Example Data Elements |
|----|-----------------|-------------|----------------------|
| **D3.1** | Workflow Data | Task assignments, approvals, and process tracking | Task ID, workflow type, assignee, status, deadline, dependencies, completion timestamp |
| **D3.2** | Document Metadata | Attributes describing documents in the repository | Document ID, title, author, creation date, classification, access level, retention category |
| **D3.3** | Collaboration Data | Records of collaborative work activities | Session ID, participants, document ID, comments, annotations, change history |
| **D3.4** | Meeting Records | Agendas, minutes, and action items | Meeting ID, type, participants, agenda items, decisions, action items, attachments |
| **D3.5** | Correspondence Data | Incoming and outgoing official correspondence | Correspondence ID, sender, recipient, date, subject, classification, response required |

### 5.1.5 D4: Reference Data Domain

**Purpose:** Standard classifications, taxonomies, and lookup data ensuring consistency.

| ID | Data Sub-Domain | Description | Example Data Elements |
|----|-----------------|-------------|----------------------|
| **D4.1** | Organizational Structures | Government hierarchy and unit definitions | Org unit ID, name, parent unit, type, mandate, establishment date, status |
| **D4.2** | Classification Schemes | Standard categorizations (COFOG, etc.) | Scheme ID, scheme name, code, label, definition, hierarchy level, valid from/to |
| **D4.3** | Standard Taxonomies | Domain-specific controlled vocabularies | Taxonomy ID, domain, term, definition, synonyms, relationships, source |
| **D4.4** | Geographic Codes | Administrative divisions and location data | Geo code, name, type (region/district/locality), parent code, coordinates |
| **D4.5** | Calendar and Period Data | Fiscal periods, holidays, planning cycles | Period ID, type, start date, end date, working days, special attributes |

### 5.1.6 D5: Corporate Data Domain

**Purpose:** Data supporting internal organizational management functions.

| ID | Data Sub-Domain | Description | Example Data Elements |
|----|-----------------|-------------|----------------------|
| **D5.1** | Human Resources Data | Employee records and organizational data | Employee ID, name, position, department, grade, start date, qualifications |
| **D5.2** | Financial Data | Budget, expenditure, and accounting data | Account code, budget allocation, commitment, expenditure, balance, fiscal period |
| **D5.3** | Procurement Data | Contracts, vendors, and purchasing records | Contract ID, vendor ID, value, start/end date, deliverables, payment terms |
| **D5.4** | Asset Data | Physical and IT asset inventory | Asset ID, type, location, custodian, acquisition date, value, condition |
| **D5.5** | Planning Data | Strategic and operational plans | Plan ID, type, period, objectives, initiatives, resources, status |

---

## 5.2 Data Ownership Model

### 5.2.1 Domain Ownership Assignment

| Domain | Primary Owner | Rationale |
|--------|---------------|-----------|
| **D1: Policy Data** | Head of Policy Development | Core business function |
| **D2: Stakeholder Data** | Head of Communications/Engagement | Primary user of stakeholder relationships |
| **D3: Operational Data** | Operations/Administration Manager | Day-to-day operations responsibility |
| **D4: Reference Data** | Chief Data Officer | Cross-cutting standardization |
| **D5: Corporate Data** | Head of Corporate Services | HR, Finance, Procurement functions |

### 5.2.2 Data Governance Responsibilities (RACI)

| Activity | Committee | CDO | Domain Owner | Steward | Custodian |
|----------|:---------:|:---:|:------------:|:-------:|:---------:|
| Set data strategy | A | R | C | I | I |
| Define data policies | A | R | C | C | I |
| Approve data standards | A | R | C | I | I |
| Determine business rules | I | C | A | R | I |
| Manage data quality | I | C | A | R | I |
| Grant access permissions | I | I | A | R | I |
| Technical implementation | I | C | I | I | R |
| Security and backup | I | C | I | I | R |
| Metadata maintenance | I | C | C | R | I |

*Legend: R = Responsible, A = Accountable, C = Consulted, I = Informed*

---

## 5.3 External Data Dependencies

| Registry | Data Consumed | Purpose | Integration Pattern |
|----------|---------------|---------|---------------------|
| **Population Register** | Person identification data | Verify stakeholder identity | Query via Information Mediator BB |
| **Business Register** | Organization data | Verify organizational stakeholders | Query via Information Mediator BB |
| **Civil Registry** | Birth, death, marriage records | Verify life events for policy analysis | Query via Information Mediator BB |
| **Land Registry** | Property ownership | Policy impact analysis | Batch extract for analysis |
| **Geographic Database** | Administrative divisions, boundaries | Spatial analysis, location coding | Reference data subscription |

---

## 5.4 Data Quality Requirements

### 5.4.1 Quality Dimensions

| Dimension | Definition | Why Important for PDU |
|-----------|------------|----------------------|
| **Accuracy** | Data correctly represents the real-world entity | Policy decisions require accurate information |
| **Completeness** | All required data elements are present | Incomplete data leads to flawed analysis |
| **Consistency** | Data is coherent across systems and over time | Enables reliable trend analysis |
| **Timeliness** | Data is available when needed | Policy development operates on deadlines |
| **Validity** | Data conforms to defined formats and rules | Ensures interoperability and processing |
| **Uniqueness** | No unintended duplicate records | Prevents double-counting and confusion |

### 5.4.2 Quality Targets

| Metric Category | Minimum Acceptable | Target | Stretch Goal |
|-----------------|-------------------|--------|--------------|
| Accuracy rate | 95% | 98% | 99.5% |
| Completeness (mandatory fields) | 98% | 99.5% | 100% |
| Duplicate rate | < 5% | < 2% | < 1% |
| Timeliness (within SLA) | 90% | 95% | 99% |
| Validation pass rate | 95% | 98% | 99.5% |

---

## 5.5 Analytics Requirements

### 5.5.1 Reporting Needs

| Report Category | Report Examples | Audience | Frequency |
|-----------------|-----------------|----------|-----------|
| **Executive Reporting** | Policy portfolio status, strategic KPIs, resource utilization | Senior leadership | Monthly |
| **Operational Reporting** | Workflow status, task completion, pending items | Middle management | Weekly |
| **Compliance Reporting** | Regulatory deadlines, mandatory submissions | Compliance officers | As required |
| **Stakeholder Reporting** | Engagement metrics, consultation outcomes | Communications team | Per consultation |
| **Performance Reporting** | Staff productivity, SLA compliance | HR, Operations | Monthly |
| **Financial Reporting** | Budget execution, expenditure analysis | Finance | Monthly/Quarterly |

### 5.5.2 Dashboard Requirements

| Dashboard | Purpose | Key Visualizations | Update Frequency |
|-----------|---------|-------------------|------------------|
| **Policy Pipeline** | Track policy development progress | Kanban board, timeline, milestone tracker | Real-time |
| **Stakeholder Engagement** | Monitor consultation and engagement | Participation trends, sentiment analysis, reach metrics | Daily |
| **Operational Performance** | Track workflow and productivity | SLA gauges, workload distribution, bottleneck identification | Real-time |
| **Strategic Scorecard** | Monitor strategic objectives | KPI traffic lights, trend lines, target vs. actual | Monthly |
| **Resource Management** | Track resource allocation and utilization | Capacity charts, allocation heat maps | Weekly |

---

# PART III: IMPLEMENTATION GUIDANCE

---

# 6. TECHNOLOGY CONSIDERATIONS

## 6.1 Infrastructure Patterns

### 6.1.1 Cloud-First Approach

PDU organizations should adopt a cloud-first strategy for new systems, selecting deployment models based on data sensitivity and government policy.

**Cloud Deployment Decision Matrix:**

| Workload Type | Recommended Deployment | Rationale |
|---------------|----------------------|-----------|
| Public-facing website | Public cloud | High availability, CDN, scalability |
| Email and productivity | SaaS (G Suite/M365) | Cost-effective, maintained by vendor |
| Stakeholder engagement portal | Public/Government cloud | Depends on data sensitivity |
| Document management system | Government cloud | Contains classified/sensitive documents |
| Policy management repository | Government cloud | Core mission-critical system |
| HR/Finance (if not shared services) | Government cloud / National horizontal system | Sensitive personal and financial data |
| Analytics/BI | Government cloud | May contain aggregated sensitive data |

### 6.1.2 SaaS Preference for PDU Scale

**SaaS-Appropriate Functions:**

| Function | SaaS Recommendation | Justification |
|----------|---------------------|---------------|
| **Email & Calendar** | Microsoft 365 / Google Workspace | Standard commodity, government editions available |
| **Video Conferencing** | Teams / Zoom / WebEx | No differentiation value in self-hosting |
| **Project Management** | Asana / Monday / Planner | Lower cost than custom solutions |
| **Survey & Consultation** | SurveyMonkey / Typeform / Citizen Space | Specialized functionality, maintained |
| **Basic Analytics** | Power BI / Tableau Cloud / Looker | Self-service reporting, no infrastructure |
| **Knowledge Base** | Confluence / Notion / SharePoint | Document collaboration built-in |

---

## 6.2 Security Requirements

### 6.2.1 Authentication Requirements

| User Category | Authentication Method | MFA Requirement |
|---------------|----------------------|-----------------|
| **Staff (Internal)** | National digital ID / Government SSO | Mandatory for all access |
| **Staff (Remote)** | Government SSO + VPN | Mandatory, certificate-based |
| **External Stakeholders** | National eID or organizational credentials | Required for sensitive functions |
| **Public Users** | Email verification (consultations) | Optional, based on sensitivity |
| **System Accounts** | API keys / certificates | Certificate-based authentication |

### 6.2.2 Data Classification Scheme

| Classification | Description | Handling Requirements |
|----------------|-------------|----------------------|
| **UNCLASSIFIED** | Public information | No restrictions, can be published |
| **OFFICIAL** | Normal business operations | Access controls, government network |
| **OFFICIAL-SENSITIVE** | Commercially sensitive, policy in development | Need-to-know, audit logging |
| **CONFIDENTIAL** | Cabinet documents, legal advice | Encryption, restricted distribution |
| **SECRET/TOP SECRET** | National security (rare in PDU) | Specialized handling, air-gapped systems |

---

## 6.3 Scalability Considerations

### 6.3.1 PDU Scale Profile

| Metric | Small PDU | Medium PDU | Large PDU |
|--------|-----------|------------|-----------|
| **Staff Count** | 50-150 | 150-300 | 300-500 |
| **Concurrent Users** | 30-80 | 80-180 | 180-300 |
| **Documents/Year** | 5,000-15,000 | 15,000-40,000 | 40,000-100,000 |
| **Storage Growth/Year** | 50-150 GB | 150-400 GB | 400 GB - 1 TB |
| **External Stakeholders** | 500-2,000 | 2,000-10,000 | 10,000-50,000 |
| **Consultation Responses/Year** | 1,000-5,000 | 5,000-20,000 | 20,000-100,000 |

---

## 6.4 Platform Tier Recommendation

### 6.4.1 Basic Tier Recommended for PDU

Based on the Data Platform Architecture framework, PDU organizations align with the **Basic Tier** (MVP) profile:

| Tier | Staff | Focus | Timeline | ROI |
|------|-------|-------|----------|-----|
| **TIER 1: BASIC (MVP)** | <500 | Office automation, document management, basic analytics | 9-12 months | 200% over 3 years |
| TIER 2: STANDARD | 500-2,500 | Full analytics, self-service BI, basic ML | 12-18 months | 300% over 4 years |
| TIER 3: ENTERPRISE | >2,500 | AI/ML, real-time processing, massive scale | 15-24 months | 400% over 5 years |

**PDU → Basic Tier**

### 6.4.2 When to Consider Standard Tier

PDU may need Standard Tier capabilities when:

| Trigger | Indicator | Standard Tier Feature Needed |
|---------|-----------|------------------------------|
| **Staff growth** | Exceeding 500 staff | Self-service analytics, enhanced scalability |
| **Advanced analytics** | Need for predictive policy impact | Machine learning capabilities |
| **Real-time requirements** | Stakeholder engagement at scale | Stream processing |
| **Complex integrations** | 20+ system integrations | Integration platform with orchestration |

---

# 7. IMPLEMENTATION GUIDANCE

## 7.1 Typical Implementation Sequence

### 7.1.1 Three-Phase Approach

```
┌─────────────────────────────────────────────────────────────────────────┐
│              PDU IMPLEMENTATION ROADMAP (18-24 MONTHS)                   │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  PHASE 1: FOUNDATION (Months 1-6)                                        │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │ • Document Management System (A1.1) deployment                   │   │
│  │ • Identity BB integration (Government SSO) [MANDATORY]           │   │
│  │ • Information Mediator BB connection [MANDATORY]                 │   │
│  │ • Collaboration Platform (A3.2)                                  │   │
│  │ • Security baseline (classification, access controls)            │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│         │                                                                │
│         ▼                                                                │
│  PHASE 2: CORE (Months 7-14)                                            │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │ • Policy Management Platform (A1.2) workflows                    │   │
│  │ • Legislative Drafting System (A1.3) integration                 │   │
│  │ • G2G Interface (A0.4) - inter-ministry exchange via IM BB       │   │
│  │ • Cabinet/decision tracking integration                          │   │
│  │ • Data & Analytics dashboards (A5.2, A5.3)                       │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│         │                                                                │
│         ▼                                                                │
│  PHASE 3: ENHANCEMENT (Months 15-24)                                    │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │ • Stakeholder Relationship Management (A2.1)                     │   │
│  │ • Consultation Platform & Stakeholder Portal (A2.2, A0.2)        │   │
│  │ • Policy analytics & KPIs (A5.2)                                 │   │
│  │ • Knowledge Management System (A3.1)                             │   │
│  │ • Process optimization                                           │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### 7.1.2 Phase 1: Foundation (Months 1-6)

**Objectives:**
- Establish secure document management foundation
- Enable staff authentication via government SSO (Identity BB)
- Establish interoperability foundation (Information Mediator BB)
- Provide basic collaboration capabilities
- Implement classification and access controls

**Key Deliverables:**

| Deliverable | App Reference | Timeline | Success Criteria |
|-------------|---------------|----------|------------------|
| Document Management System | A1.1 | Month 1-3 | 100% pilot users onboarded |
| Identity BB / SSO integration | DPI | Month 2-3 | All staff authenticating via government IdP |
| Information Mediator BB connection | DPI | Month 2-4 | Connected to national interoperability layer |
| Classification scheme | A1.1 | Month 2-4 | All new documents classified |
| Collaboration Platform | A3.2 | Month 3-5 | Teams/Slack deployed, training complete |
| Security baseline | Cross-cutting | Month 4-6 | Access controls operational, audit logging enabled |
| Full DMS rollout | A1.1 | Month 5-6 | 100% staff onboarded, legacy documents migrated |

### 7.1.3 Phase 2: Core (Months 7-14)

**Key Deliverables:**

| Deliverable | App Reference | Timeline | Success Criteria |
|-------------|---------------|----------|------------------|
| Policy Management Platform | A1.2 | Month 7-10 | 3+ policy types automated |
| Legislative Drafting System link | A1.3 | Month 8-11 | Bidirectional sync with national system |
| Inter-ministry exchange | A0.4 (G2G) | Month 9-12 | Data exchange with 3+ partner ministries via IM BB |
| Cabinet integration | A1.2 | Month 10-13 | Submissions routed digitally |
| Data & Analytics dashboards | A5.2, A5.3 | Month 12-14 | 5+ dashboards deployed, 80% adoption |

### 7.1.4 Phase 3: Enhancement (Months 15-24)

**Key Deliverables:**

| Deliverable | App Reference | Timeline | Success Criteria |
|-------------|---------------|----------|------------------|
| Stakeholder Relationship Management | A2.1 | Month 15-18 | 1,000+ stakeholders registered |
| Consultation Platform (public portal) | A2.2, A0.2 | Month 16-19 | 2+ consultations conducted digitally |
| Policy analytics & KPIs | A5.2 | Month 17-20 | KPI dashboards for all active policies |
| Knowledge Management System | A3.1 | Month 18-22 | 80% of institutional knowledge documented |
| Process optimization | Cross-cutting | Month 20-24 | 20% reduction in process cycle times |

### 7.1.5 Timeline Estimates

| PDU Size | Phase 1 | Phase 2 | Phase 3 | Total |
|----------|---------|---------|---------|-------|
| Small (<150 staff) | 4-5 months | 5-6 months | 6-8 months | 15-19 months |
| Medium (150-300 staff) | 5-6 months | 6-8 months | 8-10 months | 19-24 months |
| Large (300-500 staff) | 6-7 months | 7-9 months | 9-12 months | 22-28 months |

---

## 7.2 Quick Wins Identification

### 7.2.1 Document Management Improvements

| Quick Win | Implementation Time | Impact | Effort |
|-----------|---------------------|--------|--------|
| Centralized document repository | 4-6 weeks | High | Medium |
| Full-text search | 2-4 weeks (with DMS) | High | Low |
| Version control automation | 2-3 weeks | Medium | Low |
| Document templates standardization | 3-4 weeks | Medium | Low |
| Auto-classification (basic) | 4-6 weeks | Medium | Medium |

### 7.2.2 Basic Collaboration Tools

| Quick Win | Implementation Time | Impact | Effort |
|-----------|---------------------|--------|--------|
| Shared team spaces | 1-2 weeks | High | Low |
| Real-time co-editing | 2-3 weeks | High | Low |
| Integrated chat/messaging | 1-2 weeks | Medium | Low |
| Shared calendars | 1 week | Medium | Low |
| Meeting notes templates | 1-2 weeks | Low | Low |

### 7.2.3 Communication Automation

| Quick Win | Implementation Time | Impact | Effort |
|-----------|---------------------|--------|--------|
| Automated stakeholder notifications | 2-4 weeks | High | Medium |
| Email templates for common communications | 1-2 weeks | Medium | Low |
| Meeting scheduling automation | 1 week | Low | Low |
| Document approval notifications | 2-3 weeks | Medium | Low |
| Deadline reminders | 1-2 weeks | Medium | Low |

---

## 7.3 Risk Areas and Mitigation

### 7.3.1 Change Management Risks

| Risk | Likelihood | Impact | Mitigation Strategy |
|------|------------|--------|---------------------|
| **Staff resistance to new systems** | High | High | Early engagement, champion network, visible leadership support |
| **Parallel working (old and new systems)** | High | Medium | Clear cutover dates, mandatory adoption policies |
| **Loss of institutional knowledge** | Medium | High | Knowledge capture during transition, documentation sprints |
| **Training inadequacy** | Medium | Medium | Role-based training, ongoing support, quick reference guides |
| **Leadership disengagement** | Medium | High | Regular steering committee, visible sponsorship, progress communication |

### 7.3.2 Integration Complexity

| Risk | Likelihood | Impact | Mitigation Strategy |
|------|------------|--------|---------------------|
| **Government SSO unavailable** | Medium | High | Plan fallback local auth, engage IdP provider early |
| **Legacy system integration failures** | High | Medium | API wrappers, middleware, accept manual bridges initially |
| **Inter-ministry data exchange delays** | High | Medium | Start with bilateral MOUs, use standards-based approach |
| **National system changes mid-project** | Medium | Medium | Version control integrations, modular design |
| **Third-party API instability** | Medium | Low | SLAs, monitoring, graceful degradation |

### 7.3.3 Data Migration Challenges

| Risk | Likelihood | Impact | Mitigation Strategy |
|------|------------|--------|---------------------|
| **Data quality issues discovered** | High | Medium | Early data profiling, cleansing sprints |
| **Missing metadata** | High | Medium | Automated extraction, manual enrichment for critical docs |
| **Duplicate detection failures** | Medium | Low | Multiple match algorithms, human review for edge cases |
| **Classification mapping errors** | Medium | High | Sample-based validation, conservative defaults |
| **Migration performance** | Medium | Low | Off-hours execution, parallel processing |

### 7.3.4 User Adoption

| Risk | Likelihood | Impact | Mitigation Strategy |
|------|------------|--------|---------------------|
| **Low initial adoption** | Medium | High | Quick wins first, make new system easier than old |
| **Shadow IT emergence** | Medium | Medium | Address legitimate needs, monitor and redirect |
| **Inconsistent usage** | High | Medium | Usage dashboards, management accountability |
| **Feature overload** | Medium | Low | Phased feature release, role-based defaults |
| **Support overwhelm** | Medium | Medium | Self-service help, peer support network |

---

## 7.4 Success Factors

### 7.4.1 Leadership Commitment

**Critical Success Factor #1: Visible, sustained executive sponsorship**

| Leadership Action | Frequency | Impact |
|-------------------|-----------|--------|
| Steering committee participation | Monthly | Removes blockers, signals priority |
| Town hall messaging | Quarterly | Reinforces vision, celebrates progress |
| Personal system usage | Daily | Models expected behavior |
| Resource allocation | As needed | Ensures adequate funding/staff |
| Accountability for adoption | Monthly | Drives department-level ownership |

### 7.4.2 User Engagement

**Critical Success Factor #2: Staff involved from design through deployment**

| Engagement Mechanism | Phase | Purpose |
|---------------------|-------|---------|
| Requirements workshops | Discovery | Capture real needs |
| User experience testing | Design | Validate usability |
| Pilot groups | Build | Early feedback loop |
| Change champion network | All phases | Peer advocacy |
| Feedback channels | Deployment+ | Continuous improvement |

### 7.4.3 Phased Approach

**Critical Success Factor #3: Incremental delivery with regular value realization**

| Principle | Application |
|-----------|-------------|
| Start small | Foundation phase with clear scope |
| Deliver often | 6-8 week delivery cycles with visible progress |
| Fail fast | Pilot before full rollout |
| Learn and adapt | Retrospectives after each phase |
| Celebrate wins | Communicate successes widely |

### 7.4.4 Training Investment

**Critical Success Factor #4: Comprehensive, role-appropriate training**

| Training Component | Investment | ROI |
|-------------------|------------|-----|
| Initial training (all staff) | 2-4 hours per person | Baseline competency |
| Advanced training (power users) | 8-16 hours per person | Super-user capability |
| Ongoing refresher | 1 hour/quarter | Sustained adoption |
| Just-in-time resources | Always available | Self-service support |
| Train-the-trainer | 16-24 hours | Sustainable capacity |

**Training Budget Guidance:** Allocate 10-15% of implementation budget for training and change management.

---

# PART IV: INTEGRATION & SUMMARY

---

# 8. DPI INTEGRATION CHECKLIST

This checklist provides a structured assessment tool for evaluating PDU readiness for Digital Public Infrastructure integration.

## 8.1 DPI Component Readiness Assessment

| # | DPI Component | Required | Integration Point | PDU Status | Notes |
|---|---------------|----------|-------------------|------------|-------|
| 1 | **Identity BB** | **Mandatory** | User authentication (all systems) | ☐ Not Started ☐ In Progress ☐ Complete | Government SSO/eID integration |
| 2 | **Identity BB** | **Mandatory** | E-Signature for official documents | ☐ Not Started ☐ In Progress ☐ Complete | Legal document signing |
| 3 | **Information Mediator BB** | **Mandatory** | Inter-ministry data exchange (A0.4) | ☐ Not Started ☐ In Progress ☐ Complete | X-Road or equivalent |
| 4 | **Information Mediator BB** | **Mandatory** | Access to national registries | ☐ Not Started ☐ In Progress ☐ Complete | Population, Business registries |
| 5 | **Messaging BB** | **Recommended** | Stakeholder notifications (A2.3) | ☐ Not Started ☐ In Progress ☐ Complete | Email, SMS gateway |
| 6 | **Messaging BB** | **Recommended** | Internal communications (A3.2) | ☐ Not Started ☐ In Progress ☐ Complete | Team messaging integration |
| 7 | **Digital Registries BB** | **Recommended** | Document repository (A1.1) | ☐ Not Started ☐ In Progress ☐ Complete | Policy document storage |
| 8 | **Digital Registries BB** | **Recommended** | Policy registry (A1.2) | ☐ Not Started ☐ In Progress ☐ Complete | Master policy list |
| 9 | **Digital Registries BB** | **Recommended** | Stakeholder registry (A2.1) | ☐ Not Started ☐ In Progress ☐ Complete | CRM foundation |
| 10 | **Workflow BB** | **Recommended** | Policy approval workflows (A1.2) | ☐ Not Started ☐ In Progress ☐ Complete | Configurable approval chains |
| 11 | **Workflow BB** | **Recommended** | Legislative process tracking (A1.3) | ☐ Not Started ☐ In Progress ☐ Complete | Bill status tracking |
| 12 | **Consent BB** | **Optional** | Consultation data consent (A2.2) | ☐ Not Started ☐ In Progress ☐ Complete | GDPR/privacy compliance |
| 13 | **Scheduler BB** | **Optional** | Meeting management (A2.5.3) | ☐ Not Started ☐ In Progress ☐ Complete | Calendar integration |
| 14 | **Registration BB** | **Optional** | Consultation registration (A2.2) | ☐ Not Started ☐ In Progress ☐ Complete | Public consultation portal |
| 15 | **Payments BB** | **Not Required** | N/A | ☐ N/A | PDUs typically don't process payments |

## 8.2 Pre-Implementation Checklist

| # | Prerequisite | Status | Owner | Target Date |
|---|--------------|--------|-------|-------------|
| 1 | Government SSO/IdP operational and accessible | ☐ Complete | National DPI Team | |
| 2 | Information Mediator BB endpoints registered | ☐ Complete | IT Unit | |
| 3 | API credentials/certificates obtained | ☐ Complete | IT Unit | |
| 4 | Network connectivity to DPI services confirmed | ☐ Complete | IT Unit | |
| 5 | Data sharing MOUs with partner ministries signed | ☐ Complete | Policy Lead | |
| 6 | Staff training on DPI usage planned | ☐ Complete | HR/Training | |
| 7 | Security assessment for DPI integration completed | ☐ Complete | Security Officer | |
| 8 | Data classification policy aligned with DPI standards | ☐ Complete | CDO/Data Owner | |

## 8.3 Integration Success Criteria

| DPI Component | Success Metric | Target |
|---------------|----------------|--------|
| Identity BB | Staff authentication via government SSO | 100% of staff |
| Identity BB | E-signature adoption for official documents | >80% of policy documents |
| Information Mediator BB | Successful G2G data exchanges per month | >100 transactions |
| Information Mediator BB | Partner ministries connected | ≥3 ministries |
| Messaging BB | Stakeholder notifications delivered | >95% delivery rate |
| Digital Registries BB | Documents stored in compliant registry | 100% new documents |
| Workflow BB | Policies processed through digital workflow | >90% of new policies |

---

# 9. CAPABILITY-APPLICATION-BB TRACEABILITY

This section provides complete traceability from business capabilities through applications to GovStack Building Blocks.

## 9.1 Complete Traceability Matrix

### 9.1.1 Core Capabilities (C1.x) Traceability

| Capability ID | Capability Name | Application ID | Application Name | GovStack BB | BB Type |
|---------------|-----------------|----------------|------------------|-------------|---------|
| **C1.1** | **Policy Analysis and Research** | | | | |
| C1.1.1 | Evidence Gathering | A5.1 | Data Platform | Information Mediator BB | Infrastructure |
| C1.1.2 | Impact Assessment | A5.2 | Analytics Platform | — | Custom |
| C1.1.3 | Options Development | A1.2 | Policy Management | — | Custom |
| C1.1.4 | Comparative Analysis | A5.2 | Analytics Platform | — | Custom |
| C1.1.5 | Risk Analysis | A5.2 | Analytics Platform | — | Custom |
| **C1.2** | **Policy Formulation** | | | | |
| C1.2.1 | Policy Design | A1.2 | Policy Management | — | Custom |
| C1.2.2 | Cabinet Paper Preparation | A1.2 | Policy Management | Workflow BB | Functional |
| C1.2.3 | Ministerial Brief Development | A1.1 | Document Management | Digital Registries BB | Functional |
| C1.2.4 | Strategic Planning | A1.2 | Policy Management | — | Custom |
| C1.2.5 | Annual Work Planning | A4.4 | Project Management | Scheduler BB | Functional |
| **C1.3** | **Legislative Drafting** | | | | |
| C1.3.1 | Primary Legislation Drafting | A1.3 | Legislative Drafting | — | Custom |
| C1.3.2 | Secondary Legislation Drafting | A1.3 | Legislative Drafting | — | Custom |
| C1.3.3 | Legal Review | A1.3 | Legislative Drafting | Workflow BB | Functional |
| C1.3.4 | Amendment Processing | A1.3 | Legislative Drafting | Workflow BB | Functional |
| C1.3.5 | Consolidation | A1.3 | Legislative Drafting | Digital Registries BB | Functional |
| **C1.4** | **Stakeholder Engagement** | | | | |
| C1.4.1 | Consultation Management | A2.2 | Consultation Platform | Registration BB | Functional |
| C1.4.2 | Stakeholder Relationship Management | A2.1 | SRM | Digital Registries BB | Functional |
| C1.4.3 | Feedback Processing | A2.2 | Consultation Platform | — | Custom |
| C1.4.4 | Interest Group Liaison | A2.3 | Communication Mgmt | Messaging BB | Infrastructure |
| C1.4.5 | Public Communication | A2.3 | Communication Mgmt | Messaging BB | Infrastructure |
| **C1.5** | **Inter-Governmental Coordination** | | | | |
| C1.5.1 | Inter-Ministerial Consultation | A0.4 | G2G Interface | Information Mediator BB | Infrastructure |
| C1.5.2 | Parliamentary Liaison | A2.3 | Communication Mgmt | Messaging BB | Infrastructure |
| C1.5.3 | Cabinet Coordination | A1.2 | Policy Management | Workflow BB | Functional |
| C1.5.4 | Sub-National Coordination | A0.4 | G2G Interface | Information Mediator BB | Infrastructure |
| C1.5.5 | International Coordination | A2.3 | Communication Mgmt | Messaging BB | Infrastructure |
| **C1.6** | **Policy Monitoring and Evaluation** | | | | |
| C1.6.1 | KPI Development | A5.2 | Analytics Platform | — | Custom |
| C1.6.2 | Implementation Monitoring | A5.2, A0.4 | Analytics, G2G | Information Mediator BB | Infrastructure |
| C1.6.3 | Performance Reporting | A5.3 | Reporting Platform | — | Custom |
| C1.6.4 | Policy Evaluation | A5.2 | Analytics Platform | — | Custom |
| C1.6.5 | Learning and Adaptation | A3.1 | Knowledge Mgmt | Digital Registries BB | Functional |

### 9.1.2 Support Capabilities (C2.x) Traceability

| Capability ID | Capability Name | Application ID | Application Name | GovStack BB | BB Type |
|---------------|-----------------|----------------|------------------|-------------|---------|
| **C2.1** | **Human Resource Management** | | | | |
| C2.1.1 | Organization Structure Management | A4.1 | HR System | Digital Registries BB | Functional |
| C2.1.2 | Workforce Planning | A4.1 | HR System | — | Custom |
| C2.1.3 | Recruitment and Selection | A4.1 | HR System | Registration BB, Workflow BB | Functional |
| C2.1.4 | Performance Management | A4.1 | HR System | Workflow BB | Functional |
| C2.1.5 | Learning and Development | A4.1 | HR System | — | Custom |
| C2.1.6 | Employee Administration | A4.1 | HR System | Digital Registries BB | Functional |
| **C2.2** | **Financial Management** | | | | |
| C2.2.1 | Budget Planning | A4.2 | Finance System | — | Custom |
| C2.2.2 | Budget Execution | A4.2 | Finance System | — | Custom |
| C2.2.3 | Accounting | A4.2 | Finance System | Payments BB | Infrastructure |
| C2.2.4 | Financial Reporting | A4.2, A5.3 | Finance, Reporting | — | Custom |
| C2.2.5 | Internal Audit | A4.2 | Finance System | Workflow BB | Functional |
| **C2.3** | **Procurement Management** | | | | |
| C2.3.1 | Procurement Planning | A4.2 | Finance System | — | Custom |
| C2.3.2 | Supplier Management | A4.2 | Finance System | Digital Registries BB | Functional |
| C2.3.3 | Tendering | A4.2 | Finance System | Workflow BB | Functional |
| C2.3.4 | Contract Management | A4.2 | Finance System | Workflow BB | Functional |
| C2.3.5 | Procurement Compliance | A4.2 | Finance System | — | Custom |
| **C2.4** | **Information and Knowledge Management** | | | | |
| C2.4.1 | Document Management | A1.1 | DMS | Digital Registries BB | Functional |
| C2.4.2 | Records Management | A1.1 | DMS | Digital Registries BB | Functional |
| C2.4.3 | Knowledge Management | A3.1 | Knowledge Mgmt | Digital Registries BB | Functional |
| C2.4.4 | Information Security | All | Cross-cutting | Security BB | Infrastructure |
| C2.4.5 | Archive Management | A1.1 | DMS | Digital Registries BB | Functional |
| **C2.5** | **Corporate Communications** | | | | |
| C2.5.1 | Internal Communications | A3.2, A3.3 | Collaboration, Intranet | Messaging BB | Infrastructure |
| C2.5.2 | External Communications | A2.3 | Communication Mgmt | Messaging BB | Infrastructure |
| C2.5.3 | Event Management | A4.4 | Project Management | Scheduler BB | Functional |
| C2.5.4 | Brand and Identity | A3.3 | Intranet Portal | — | Custom |
| C2.5.5 | Crisis Communications | A2.3 | Communication Mgmt | Messaging BB | Infrastructure |
| **C2.6** | **IT and Digital Services** | | | | |
| C2.6.1 | IT Service Management | — | ITSM Tool | — | Custom |
| C2.6.2 | Application Management | — | Cross-cutting | — | Custom |
| C2.6.3 | Infrastructure Management | — | Cloud/Infrastructure | — | Custom |
| C2.6.4 | Cybersecurity Management | All | Cross-cutting | Security BB | Infrastructure |
| C2.6.5 | Digital Channel Management | A0.1, A0.2, A3.3 | Portals | — | Custom |
| **C2.7** | **Facilities and Administration** | | | | |
| C2.7.1 | Facilities Management | A4.3 | Asset Management | — | Custom |
| C2.7.2 | Asset Management | A4.3 | Asset Management | Digital Registries BB | Functional |
| C2.7.3 | Administrative Services | A4.3 | Asset Management | — | Custom |
| C2.7.4 | Travel Management | A4.2 | Finance System | Workflow BB | Functional |
| C2.7.5 | Security and Safety | A4.3 | Asset Management | — | Custom |
| **C2.8** | **Risk and Compliance Management** | | | | |
| C2.8.1 | Risk Identification | A4.4 | Project Management | — | Custom |
| C2.8.2 | Risk Mitigation | A4.4 | Project Management | Workflow BB | Functional |
| C2.8.3 | Compliance Monitoring | A4.2 | Finance System | — | Custom |
| C2.8.4 | Business Continuity | — | BCP Tool | — | Custom |
| C2.8.5 | Internal Controls | A4.2 | Finance System | Workflow BB | Functional |
| **C2.9** | **Strategic Management** | | | | |
| C2.9.1 | Strategic Planning | A1.2, A4.4 | Policy, Project Mgmt | — | Custom |
| C2.9.2 | Performance Planning | A4.4 | Project Management | — | Custom |
| C2.9.3 | Performance Monitoring | A5.3 | Reporting Platform | — | Custom |
| C2.9.4 | Change Management | A4.4 | Project Management | Workflow BB | Functional |
| C2.9.5 | Quality Management | A5.3 | Reporting Platform | — | Custom |

## 9.2 Building Block Usage Summary

| GovStack Building Block | Capabilities Using | Applications Using | Usage Count |
|-------------------------|-------------------|-------------------|-------------|
| **Identity BB** | All (authentication) | All internal apps | Universal |
| **Information Mediator BB** | C1.1.1, C1.5.1, C1.5.4, C1.6.2, C2.4.4 | A0.4, A5.1 | 5 capabilities |
| **Digital Registries BB** | C1.2.3, C1.3.5, C1.4.2, C1.6.5, C2.1.1, C2.1.6, C2.3.2, C2.4.1-C2.4.3, C2.4.5, C2.7.2 | A1.1, A1.2, A1.3, A2.1, A3.1, A4.1, A4.3 | 12 capabilities |
| **Workflow BB** | C1.2.2, C1.3.3, C1.3.4, C1.4.1, C1.5.3, C2.1.3, C2.1.4, C2.2.5, C2.3.3, C2.3.4, C2.7.4, C2.8.2, C2.8.5, C2.9.4 | A1.2, A1.3, A2.2, A4.1, A4.2, A4.4 | 14 capabilities |
| **Messaging BB** | C1.4.4, C1.4.5, C1.5.2, C1.5.5, C2.5.1, C2.5.2, C2.5.5 | A2.3, A3.2 | 7 capabilities |
| **Registration BB** | C1.4.1, C2.1.3 | A0.2, A2.2, A4.1 | 2 capabilities |
| **Scheduler BB** | C1.2.5, C2.5.3 | A4.1, A4.4 | 2 capabilities |
| **Consent BB** | — (optional for consultations) | A2.2 | 0 capabilities (optional) |
| **Payments BB** | C2.2.3 | A4.2 | 1 capability |
| **Security BB** | C2.4.4, C2.6.4 | All | 2 capabilities |

---

# 10. SUMMARY & QUICK REFERENCE

## 10.1 PDU Architecture at a Glance

| Dimension | Count | Details |
|-----------|-------|---------|
| **Total Capabilities** | **72** | 28 Core (C1.x) + 44 Support (C2.x) |
| **L1 Capability Domains** | **15** | 6 Core + 9 Support |
| **Total Applications** | **20** | + 54 sub-components |
| **Core Applications** | **17** | Mission-critical |
| **Support Applications** | **3** | Important but not critical |
| **Total Data Domains** | **5** | D1-D5 |
| **Data Sub-Domains** | **25** | 5 per domain |
| **Platform Tier** | **Basic** | <500 staff, 9-12 month implementation |
| **Implementation Phases** | **3** | 18-24 months total |

## 10.2 Key DPI Integrations

| Priority | DPI Component | Primary Use |
|----------|---------------|-------------|
| **1 (Mandatory)** | Identity BB | Staff authentication, e-signatures |
| **1 (Mandatory)** | Information Mediator BB | Inter-ministry data exchange |
| **2 (Recommended)** | Digital Registries BB | Document and policy storage |
| **2 (Recommended)** | Workflow BB | Policy approval processes |
| **2 (Recommended)** | Messaging BB | Stakeholder notifications |
| **3 (Optional)** | Registration BB | Public consultation |
| **3 (Optional)** | Scheduler BB | Meeting management |
| **3 (Optional)** | Consent BB | Privacy compliance |
| **N/A** | Payments BB | Not required for PDU |

## 10.3 Application Quick Reference

| Zone | Application | App ID | Primary BB |
|------|-------------|--------|------------|
| **Channels** | Internal Portal | A0.1 | Identity BB |
| | Stakeholder Portal | A0.2 | Registration BB |
| | API Gateway | A0.3 | Information Mediator BB |
| | G2G Interface | A0.4 | Information Mediator BB |
| **Policy Development** | Document Management | A1.1 | Digital Registries BB |
| | Policy Management | A1.2 | Workflow BB |
| | Legislative Drafting | A1.3 | Workflow BB |
| **Stakeholder Engagement** | Stakeholder Relationship | A2.1 | Digital Registries BB |
| | Consultation Platform | A2.2 | Registration BB |
| | Communication Mgmt | A2.3 | Messaging BB |
| **Knowledge & Collaboration** | Knowledge Management | A3.1 | Digital Registries BB |
| | Collaboration Platform | A3.2 | Messaging BB |
| | Intranet Portal | A3.3 | — |
| **Support (PAO-CC)** | HR Management | A4.1 | Digital Registries BB |
| | Financial Management | A4.2 | Payments BB |
| | Asset Management | A4.3 | Digital Registries BB |
| | Project Management | A4.4 | Workflow BB |
| **Data & Analytics** | Data Platform | A5.1 | Information Mediator BB |
| | Analytics Platform | A5.2 | — |
| | Reporting Platform | A5.3 | — |

## 10.4 Implementation Quick Start Guide

### Phase 1 Priorities (Months 1-6)
1. ☐ Deploy Document Management System (A1.1)
2. ☐ Integrate with Identity BB (Government SSO)
3. ☐ Connect to Information Mediator BB
4. ☐ Deploy Collaboration Platform (A3.2)
5. ☐ Implement security baseline and classification

### Phase 2 Priorities (Months 7-14)
1. ☐ Deploy Policy Management Platform (A1.2)
2. ☐ Integrate Legislative Drafting System (A1.3)
3. ☐ Enable inter-ministry exchange via G2G (A0.4)
4. ☐ Deploy Analytics dashboards (A5.2, A5.3)

### Phase 3 Priorities (Months 15-24)
1. ☐ Deploy Stakeholder Relationship Management (A2.1)
2. ☐ Launch Consultation Platform and Portal (A2.2, A0.2)
3. ☐ Implement Knowledge Management System (A3.1)
4. ☐ Optimize processes and measure outcomes

## 10.5 Inheritance Declaration

All capabilities and applications defined in this PDU Reference Architecture form the **BASE** that:

1. **Regulatory Agency (RA)** will inherit completely, adding regulatory-specific capabilities (C3.x) and applications
2. **Service Delivery Authority (SDA)** will inherit both PDU and RA, adding service delivery capabilities (C4.x, C5.x) and applications

**Inheritance Chain:**
```
PDU (C1 + C2) → RA (C1 + C2 + C3) → SDA (C1 + C2 + C3 + C4 + C5)
```

---

# ANNEXES

---

# Annex A: Capability Definitions

## A.1 Core Capability Definitions Summary

| ID | Capability | Definition |
|----|------------|------------|
| C1.1 | Policy Analysis and Research | The ability to systematically analyze issues, gather evidence, and develop policy options |
| C1.2 | Policy Formulation | The ability to develop policy proposals and recommendations for decision-makers |
| C1.3 | Legislative Drafting | The ability to translate policy decisions into legal instruments |
| C1.4 | Stakeholder Engagement | The ability to engage with stakeholders to inform policy development and build consensus |
| C1.5 | Inter-Governmental Coordination | The ability to coordinate policy development across government entities |
| C1.6 | Policy Monitoring and Evaluation | The ability to track policy implementation and assess outcomes |

## A.2 Support Capability Definitions Summary

| ID | Capability | Definition |
|----|------------|------------|
| C2.1 | Human Resource Management | The ability to manage the organization's workforce effectively |
| C2.2 | Financial Management | The ability to manage the organization's financial resources |
| C2.3 | Procurement Management | The ability to acquire goods and services in compliance with regulations |
| C2.4 | Information and Knowledge Management | The ability to manage the organization's information assets and institutional knowledge |
| C2.5 | Corporate Communications | The ability to manage internal and external communications |
| C2.6 | IT and Digital Services | The ability to provide and manage technology services |
| C2.7 | Facilities and Administration | The ability to manage physical assets and administrative services |
| C2.8 | Risk and Compliance Management | The ability to identify and manage organizational risks and ensure compliance |
| C2.9 | Strategic Management | The ability to set direction and manage organizational strategy |

---

# Annex B: Application Component Specifications

## B.1 Key Application Specifications

### B.1.1 Document Management System (A1.1)

| Attribute | Specification |
|-----------|---------------|
| **ID** | A1.1 |
| **Name** | Document Management System (DMS) |
| **Description** | Centralized repository for creating, storing, managing, and tracking policy documents with full version control and audit trails |
| **Capability Supported** | C2.4.1, C2.4.2, C1.2.3 |
| **Building Block Alignment** | Digital Registries BB |
| **Integration Points** | A1.2, A1.3, A3.1, A3.2 |
| **Data Managed** | D1.1, D3.2 |
| **Users** | All PDU staff (~50-500) |
| **Availability** | 99.5% (business hours) |
| **Criticality** | Core |

### B.1.2 Policy Management Platform (A1.2)

| Attribute | Specification |
|-----------|---------------|
| **ID** | A1.2 |
| **Name** | Policy Management Platform |
| **Description** | Manages the complete policy lifecycle from initiation through approval and publication |
| **Capability Supported** | C1.2.1, C1.2.2, C1.2.4 |
| **Building Block Alignment** | Workflow BB, Digital Registries BB |
| **Integration Points** | A1.1, A1.3, A2.2, A5.2 |
| **Data Managed** | D1.1, D1.4, D1.5 |
| **Users** | Policy officers, Legal staff, Executives (~20-100) |
| **Availability** | 99% |
| **Criticality** | Core |

### B.1.3 Consultation Platform (A2.2)

| Attribute | Specification |
|-----------|---------------|
| **ID** | A2.2 |
| **Name** | Consultation Platform |
| **Description** | Facilitates public and stakeholder consultations on policy proposals |
| **Capability Supported** | C1.4.1, C1.4.3 |
| **Building Block Alignment** | Registration BB, Workflow BB, Consent BB |
| **Integration Points** | A2.1, A2.3, A5.2, A0.2 |
| **Data Managed** | D2.2, D2.4 |
| **Users** | Policy officers (internal), Public (external) |
| **Availability** | 99% (public-facing) |
| **Criticality** | Core |

## B.2 PAO-CC Application Notes

The Support Functions applications (A4.x) constitute the **Public Administration Organization Core Components (PAO-CC)**:

- **A4.1 HR Management System**
- **A4.2 Financial Management System**
- **A4.3 Asset Management**
- **A4.4 Project Management**

**Key Characteristics:**
1. Required by ALL public administration organization types (PDU, RA, SDA)
2. Can be centralized (shared service) or distributed (per-organization)
3. Standard functionality - minimal customization needed
4. Often implemented as COTS/SaaS solutions
5. Should integrate with national finance and HR registries where available

---

# Annex C: Data Entity Reference

## C.1 Core Data Entities by Domain

**D1: Policy Data Domain**
- Policy Document
- Legislative Text
- Research Study
- Impact Assessment
- Regulatory Proposal
- Policy Indicator

**D2: Stakeholder Data Domain**
- Stakeholder (Person)
- Stakeholder (Organization)
- Consultation Event
- Consultation Response
- Communication Record
- Expert Profile

**D3: Operational Data Domain**
- Workflow Instance
- Task
- Document
- Meeting
- Correspondence
- Action Item

**D4: Reference Data Domain**
- Organization Unit
- Classification Code
- Taxonomy Term
- Geographic Entity
- Time Period

**D5: Corporate Data Domain**
- Employee
- Position
- Budget Line
- Contract
- Asset
- Plan/Initiative

---

# Annex D: Glossary

| Term | Definition |
|------|------------|
| **BB** | Building Block - a reusable software component defined by GovStack |
| **BDAT** | Business, Data, Application, Technology - the four EA domains |
| **COFOG** | Classification of Functions of Government (UN standard) |
| **DMS** | Document Management System |
| **DPI** | Digital Public Infrastructure |
| **G2B** | Government to Business |
| **G2C** | Government to Citizen |
| **G2G** | Government to Government |
| **GovStack** | ITU/GIZ initiative for government Building Blocks |
| **PAO-CC** | Public Administration Organization Core Components |
| **PAERA** | Public Administration Ecosystem Reference Architecture |
| **PDU** | Policy Development Unit |
| **RA** | Regulatory Agency (or Reference Architecture, context-dependent) |
| **RBAC** | Role-Based Access Control |
| **SDA** | Service Delivery Authority |
| **SRM** | Stakeholder Relationship Management |
| **SSO** | Single Sign-On |

---

## DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-19 | GEATDM Project | Initial complete version - integrated from T2.1-T2.4, added DPI checklist, traceability matrix, and summary |

---

*End of PDU Reference Architecture - Complete Document*

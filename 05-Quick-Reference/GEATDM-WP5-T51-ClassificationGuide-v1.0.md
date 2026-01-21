# ORGANIZATION CLASSIFICATION GUIDE

**GEATDM Application Method - DISCOVER Phase**

| Attribute | Value |
|-----------|-------|
| Document ID | GEATDM-WP5-T51 |
| Version | 1.0 |
| Date | 2026-01-19 |
| Status | Complete |
| Phase | DISCOVER |

---

## TABLE OF CONTENTS

1. [Introduction](#1-introduction)
2. [Organization Type Definitions](#2-organization-type-definitions)
3. [Classification Decision Tree](#3-classification-decision-tree)
4. [Classification Questionnaire](#4-classification-questionnaire)
5. [Special Cases and Hybrid Organizations](#5-special-cases-and-hybrid-organizations)
6. [Classification Examples](#6-classification-examples)
7. [What Happens After Classification](#7-what-happens-after-classification)

---

## 1. INTRODUCTION

### 1.1 Purpose of Classification

This guide provides a systematic approach to classifying public sector organizations into one of three standard types. Classification is the **first critical step** in the GEATDM method because it determines which Reference Architecture (RA) will serve as the foundation for the organization's digital transformation.

The three organization types are:

| Type | Abbreviation | Typical Examples |
|------|--------------|------------------|
| Policy Development Unit | **PDU** | Ministries, Chancelleries |
| Regulatory Agency | **RA** | Licensing Authorities, Data Protection Authorities |
| Service Delivery Authority | **SDA** | Tax Departments, Customs, Social Security |

### 1.2 Why Classification Matters

Correct classification is essential because:

1. **Appropriate Complexity**: Each organization type has different automation requirements. Misclassification leads to either over-engineering (wasteful) or under-engineering (ineffective).

2. **Right-Sized Investment**: Reference Architectures are progressively more complex: SDA > RA > PDU. Selecting the wrong RA wastes resources or creates gaps.

3. **Building Block Selection**: Each organization type requires different Building Blocks. Classification determines which BBs are mandatory, optional, or unnecessary.

4. **Implementation Sequence**: The path to digital maturity differs by organization type. Classification shapes the implementation roadmap.

5. **Inheritance Principle**: The Reference Architectures follow an inheritance model:
   - RA = PDU + regulatory-specific capabilities
   - SDA = RA + high-volume service delivery capabilities

### 1.3 How to Use This Guide

**Step 1: Read the Definitions (Section 2)**
Understand what each organization type means and its key characteristics.

**Step 2: Apply the Decision Tree (Section 3)**
Start with the decision tree for a quick preliminary classification.

**Step 3: Complete the Questionnaire (Section 4)**
Use the scoring questionnaire for validation and borderline cases.

**Step 4: Check for Special Cases (Section 5)**
Review whether any special case patterns apply.

**Step 5: Document Your Classification (Section 6)**
Record the classification with rationale for future reference.

**Step 6: Select the Reference Architecture (Section 7)**
Proceed to the appropriate Reference Architecture based on classification.

---

## 2. ORGANIZATION TYPE DEFINITIONS

### 2.1 Policy Development Unit (PDU)

#### Definition

The **Policy Development Unit** is the most basic bureaucratic organizational unit. It is responsible for policy analysis, development, monitoring, and supervision within a specific governmental functional area. PDUs focus on creating the legal and regulatory framework that other organizations implement.

#### Key Characteristics

| Characteristic | Description |
|----------------|-------------|
| **Primary Function** | Policy development and legislation maintenance |
| **Customer Interaction** | Minimal direct citizen/business interaction |
| **Transaction Volume** | Low - primarily document-centric work |
| **Processing Type** | Knowledge work, analysis, coordination |
| **Data Management** | Documents, reports, correspondence |
| **Enforcement Role** | None - delegates enforcement to RAs/SDAs |
| **Staff Profile** | Policy experts, legal experts, economists |

#### Typical Examples

| Country | Organization | Function |
|---------|--------------|----------|
| Generic | Ministry of Finance | Economic and fiscal policy |
| Generic | Ministry of Health | Healthcare policy |
| Generic | Ministry of Education | Education policy |
| Generic | Ministry of Interior | Security policy |
| Generic | Presidential/Prime Minister's Office | Executive coordination |
| Generic | Planning Commission | National development planning |

#### What PDUs Do

- Develop policies and legislation for their functional area
- Monitor implementation of policies through reporting
- Coordinate with other government bodies
- Engage stakeholders (parliament, industry, civil society)
- Supervise subordinate agencies (RAs and SDAs)
- Communicate policies to the public

#### What PDUs Do NOT Do

- Issue licenses, permits, or authorizations
- Process high volumes of transactions
- Conduct field inspections
- Enforce compliance with penalties
- Maintain large customer/citizen databases
- Collect revenue at scale

#### Digital Platform Needs

PDUs require a **general office automation environment**:
- Document Management Systems
- Collaboration and Communication Tools
- Data Analysis and Visualization Tools
- Project Management Software
- Stakeholder Engagement Platforms
- Content Management Systems

---

### 2.2 Regulatory Agency (RA)

#### Definition

The **Regulatory Agency** is responsible for implementing and enforcing regulations in a specific functional area. RAs translate policies created by PDUs into operational requirements and manage compliance through licensing, permitting, and oversight activities.

#### Key Characteristics

| Characteristic | Description |
|----------------|-------------|
| **Primary Function** | Regulation implementation and enforcement |
| **Customer Interaction** | Moderate - with regulated entities |
| **Transaction Volume** | Moderate - license applications, renewals |
| **Processing Type** | Application processing, decision-making, inspections |
| **Data Management** | Registries, compliance records, inspection reports |
| **Enforcement Role** | Yes - through licensing, inspections, sanctions |
| **Staff Profile** | Regulatory experts, inspectors, legal officers |

#### Typical Examples

| Country | Organization | Function |
|---------|--------------|----------|
| Generic | Data Protection Authority | Personal data regulation |
| Generic | Business Licensing Authority | Business permits |
| Generic | Professional Licensing Board | Professional credentials |
| Generic | Environmental Agency | Environmental permits |
| Generic | Financial Services Authority | Financial sector regulation |
| Generic | Telecommunications Regulator | Telecom sector regulation |
| Generic | Food Safety Authority | Food safety certification |
| Generic | Construction Permits Authority | Building permits |

#### What RAs Do

Everything PDUs do, PLUS:
- Design application forms and procedures for licenses/permits
- Review and assess applications
- Issue licenses, permits, and authorizations
- Maintain registers of licensees
- Collect fees for applications and licenses
- Conduct inspections of regulated entities
- Monitor compliance through reporting
- Apply sanctions for non-compliance
- Handle appeals and disputes
- Suspend or revoke licenses

#### What RAs Do NOT Do

- Process millions of transactions annually
- Manage continuous customer accounting
- Conduct mass enforcement operations
- Operate sophisticated risk-based selection systems
- Provide extensive public education programs
- Manage complex financial flows (refunds, credits)

#### Digital Platform Needs

Everything PDU needs, PLUS a **basic digital service delivery platform**:
- Online Application Portal
- License/Permit Management System
- Compliance Monitoring System
- Inspection Management System
- Case Management System
- Payment Processing (for fees)
- Decision Management System

---

### 2.3 Service Delivery Authority (SDA)

#### Definition

The **Service Delivery Authority** is a state authority with a complex set of responsibilities and multiple performance outcome areas. SDAs apply specialized methods to ensure enforcement of legal regulations at scale, dealing with high volumes of transactions and requiring sophisticated operational capabilities.

#### Key Characteristics

| Characteristic | Description |
|----------------|-------------|
| **Primary Function** | Mass service delivery and enforcement |
| **Customer Interaction** | High - extensive citizen/business interaction |
| **Transaction Volume** | High - millions of transactions annually |
| **Processing Type** | Industrial-scale processing, risk-based operations |
| **Data Management** | Large databases, data warehousing, analytics |
| **Enforcement Role** | Extensive - at scale with sophisticated methods |
| **Staff Profile** | Operations staff, auditors, investigators, IT specialists |

#### Typical Examples

| Country | Organization | Function |
|---------|--------------|----------|
| Generic | Tax Administration | Tax collection and enforcement |
| Generic | Customs Authority | Trade control and duties |
| Generic | Social Security Agency | Benefits administration |
| Generic | Immigration Department | Border control, visas, permits |
| Generic | Police Department | Law enforcement |
| Generic | Motor Vehicle Registry | Vehicle registration and licensing |
| Generic | Land Registry | Property registration |
| Generic | Healthcare Insurance | Health coverage administration |
| Generic | Employment Services | Job placement, unemployment benefits |
| Generic | Pension Authority | Pension administration |

#### What SDAs Do

Everything RAs do, PLUS:
- Process high volumes of registrations
- Manage ongoing customer accounts
- Collect revenue/contributions at scale
- Process refunds and credits
- Conduct risk-based selection for audit/inspection
- Execute mass compliance programs
- Apply sophisticated data analytics
- Manage debt and collection processes
- Deliver customer education at scale
- Coordinate internationally with counterpart agencies
- Operate multiple service channels (digital, physical, call centers)

#### What Makes SDAs Different

| Aspect | RA (Moderate Scale) | SDA (Industrial Scale) |
|--------|---------------------|------------------------|
| Customers | Thousands | Millions |
| Transactions/year | Thousands-Tens of thousands | Millions-Billions |
| Data volume | Gigabytes | Terabytes-Petabytes |
| Processing | Batch acceptable | Real-time required |
| Risk management | Basic | Sophisticated ML-based |
| Staff | Tens-Hundreds | Hundreds-Thousands |
| IT complexity | Moderate | High |

#### Digital Platform Needs

Everything RA needs, but at a **more robust and industrialized level**:
- Customer Registration & Profile Management (at scale)
- Customer Accounting System
- Risk Engine with ML capabilities
- Debt Management System
- Multi-Channel Service Platform
- Advanced Analytics & Business Intelligence
- Case Management (audit, investigation, enforcement)
- International Data Exchange
- High-Availability Infrastructure
- Data Platform (warehouse, lake, analytics)

---

## 3. CLASSIFICATION DECISION TREE

Use this decision tree for initial classification. Start at the top and follow the path based on your answers.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ORGANIZATION CLASSIFICATION DECISION TREE                 │
└─────────────────────────────────────────────────────────────────────────────┘

                                    START
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  Q1: What is the organization's PRIMARY function?                           │
│                                                                             │
│  (A) Developing policies and legislation                                    │
│  (B) Regulating a sector through licensing/permits                          │
│  (C) Delivering services with high-volume transactions                      │
└─────────────────────────────────────────────────────────────────────────────┘
          │                    │                    │
          A                    B                    C
          │                    │                    │
          ▼                    ▼                    ▼
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ Go to Q2         │  │ Go to Q3         │  │ Go to Q4         │
└──────────────────┘  └──────────────────┘  └──────────────────┘
          │                    │                    │
          ▼                    ▼                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  Q2: Does the organization also regulate a sector through licensing?        │
│                                                                             │
│  YES → Continue to Q3                                                       │
│  NO  → RESULT: PDU (Policy Development Unit)                                │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  Q3: Does the organization process more than 100,000 transactions           │
│      annually with individual customers/citizens?                           │
│                                                                             │
│  YES → Continue to Q4                                                       │
│  NO  → RESULT: RA (Regulatory Agency)                                       │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  Q4: Does the organization have ANY THREE of the following?                 │
│                                                                             │
│  □ Manages ongoing customer accounts (not just one-time registrations)      │
│  □ Collects revenue/fees at scale (not just application fees)               │
│  □ Conducts mass enforcement operations                                     │
│  □ Uses risk-based selection for audits/inspections                         │
│  □ Requires real-time transaction processing                                │
│  □ Processes refunds or credits                                             │
│  □ Has data warehouse with analytics                                        │
│                                                                             │
│  YES (3+ checked) → RESULT: SDA (Service Delivery Authority)                │
│  NO  (fewer than 3) → RESULT: RA (Regulatory Agency)                        │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Decision Tree Summary Table

| Q1 Answer | Q2 Answer | Q3 Answer | Q4 Answer | Classification |
|-----------|-----------|-----------|-----------|----------------|
| Policy | No | - | - | **PDU** |
| Policy | Yes | No | - | **RA** |
| Policy | Yes | Yes | No | **RA** |
| Policy | Yes | Yes | Yes | **SDA** |
| Regulatory | - | No | - | **RA** |
| Regulatory | - | Yes | No | **RA** |
| Regulatory | - | Yes | Yes | **SDA** |
| Service Delivery | - | - | Yes | **SDA** |
| Service Delivery | - | - | No | **RA** |

---

## 4. CLASSIFICATION QUESTIONNAIRE

This questionnaire provides a more detailed assessment. It is particularly useful for:
- Validating the decision tree result
- Handling borderline cases
- Documenting the classification rationale

### 4.1 Instructions

1. Answer each question with **Yes** or **No**
2. For "Yes" answers, add the points in the corresponding column
3. Sum each column at the end
4. The column with the highest score indicates the organization type
5. If scores are close (within 5 points), review Section 5 for special cases

### 4.2 Questionnaire

| # | Question | PDU | RA | SDA |
|---|----------|:---:|:---:|:---:|
| **FUNCTION** |||||
| 1 | Primary function is policy development and legislation | 5 | 1 | 0 |
| 2 | Primary function is sector regulation through licensing | 0 | 5 | 2 |
| 3 | Primary function is mass service delivery | 0 | 1 | 5 |
| 4 | Organization supervises other agencies | 3 | 1 | 0 |
| 5 | Organization implements policies set by a ministry | 0 | 3 | 3 |
| **CUSTOMER INTERACTION** |||||
| 6 | Limited direct customer/citizen interaction | 4 | 1 | 0 |
| 7 | Moderate interaction with regulated entities | 0 | 4 | 2 |
| 8 | High-volume interaction with citizens/businesses | 0 | 1 | 5 |
| 9 | Customer base exceeds 100,000 | 0 | 1 | 4 |
| 10 | Customer base exceeds 1,000,000 | 0 | 0 | 5 |
| **TRANSACTIONS & PROCESSING** |||||
| 11 | Primarily document-centric operations | 5 | 2 | 1 |
| 12 | Issues licenses, permits, or authorizations | 0 | 5 | 3 |
| 13 | Processes more than 100,000 transactions/year | 0 | 2 | 4 |
| 14 | Processes more than 1,000,000 transactions/year | 0 | 0 | 5 |
| 15 | Requires real-time transaction processing | 0 | 1 | 4 |
| **COMPLIANCE & ENFORCEMENT** |||||
| 16 | No direct enforcement powers | 5 | 0 | 0 |
| 17 | Conducts inspections of regulated entities | 0 | 4 | 3 |
| 18 | Has enforcement powers (fines, sanctions) | 0 | 3 | 4 |
| 19 | Uses risk-based selection for audit/inspection | 0 | 2 | 5 |
| 20 | Conducts mass enforcement operations | 0 | 1 | 5 |
| **DATA & SYSTEMS** |||||
| 21 | Manages customer/citizen accounts | 0 | 2 | 5 |
| 22 | Maintains registry of licensees/permits | 0 | 5 | 3 |
| 23 | Collects revenue/fees at scale | 0 | 2 | 5 |
| 24 | Processes refunds or credits | 0 | 1 | 4 |
| 25 | Requires data warehouse and analytics | 0 | 2 | 5 |
| 26 | Requires sophisticated risk scoring (ML/AI) | 0 | 1 | 5 |
| **COORDINATION & COMPLEXITY** |||||
| 27 | Coordinates policy across government | 4 | 1 | 0 |
| 28 | Coordinates with multiple agencies for service delivery | 1 | 2 | 4 |
| 29 | International coordination with counterparts | 1 | 2 | 4 |
| 30 | Requires 24/7 operations | 0 | 1 | 4 |
| | | | | |
| | **TOTALS** | ____ | ____ | ____ |

### 4.3 Scoring Interpretation

| PDU Score | RA Score | SDA Score | Interpretation |
|-----------|----------|-----------|----------------|
| Highest | - | - | **PDU** - Clear policy focus |
| - | Highest | - | **RA** - Regulatory focus |
| - | - | Highest | **SDA** - Service delivery focus |
| Close to RA | Close to PDU | Low | **RA** - PDU with regulatory elements |
| Low | Close to SDA | Close to RA | **SDA** - Large-scale regulatory agency |

### 4.4 Confidence Levels

| Score Difference | Confidence | Action |
|-----------------|------------|--------|
| >20 points | **High** | Classification is clear |
| 10-20 points | **Medium** | Review key differentiating factors |
| <10 points | **Low** | Review Section 5 (Special Cases) |

---

## 5. SPECIAL CASES AND HYBRID ORGANIZATIONS

### 5.1 Ministry with Regulatory Function

**Pattern:** A ministry (typically PDU) that also performs regulatory activities directly rather than delegating to a subordinate agency.

**Example:** Ministry of Health that directly issues professional licenses for healthcare practitioners, rather than having a separate Medical Licensing Board.

**Characteristics:**
- Primary function remains policy development
- Regulatory function is secondary/smaller
- Limited dedicated regulatory staff
- No separate regulatory identity

**Classification Approach:**
1. Primary classification: **PDU**
2. Note: "PDU with regulatory elements"
3. Reference Architecture: Start with PDU RA
4. Adaptation: Add RA components for the regulatory function

**Implementation Recommendation:**
- Implement PDU core first
- Add licensing module from RA application architecture
- Consider eventually spinning off regulatory function to dedicated RA

---

### 5.2 Small Regulatory Agency

**Pattern:** A small organization with regulatory functions but limited transaction volumes and staff.

**Example:** A professional licensing board for architects with 500 licensees and 5 staff members.

**Characteristics:**
- Clear regulatory mandate
- Low transaction volume (<10,000/year)
- Small staff (<20)
- Basic IT needs
- Limited budget

**Classification Approach:**
1. Classification: **RA (Basic Tier)**
2. Note: "Small-scale RA"
3. Reference Architecture: Use RA RA
4. Implementation: Basic tier technology recommendations

**Implementation Recommendation:**
- Use RA Reference Architecture
- Apply "Basic Tier" platform recommendations
- Consider low-code/no-code platforms
- Prioritize core capabilities, defer advanced features

---

### 5.3 Large Enforcement Agency

**Pattern:** An organization focused on enforcement with high operational intensity but not traditional "service delivery."

**Example:** Police department, immigration enforcement unit.

**Characteristics:**
- High transaction/case volumes
- Field operations at scale
- Risk-based deployment
- Complex case management
- Large staff
- 24/7 operations

**Classification Approach:**
1. Classification: **SDA**
2. Note: "Enforcement-focused SDA"
3. Reference Architecture: Use SDA RA
4. Adaptation: Emphasize compliance/enforcement capabilities

**Implementation Recommendation:**
- Use full SDA Reference Architecture
- Prioritize: Case Management, Risk Assessment, Field Operations
- De-prioritize: Filing Management, Revenue Processing (unless relevant)

---

### 5.4 Revenue-Generating Regulatory Agency

**Pattern:** A regulatory agency that generates significant revenue beyond basic fees.

**Example:** Telecommunications regulator that collects spectrum license fees, or gaming commission with substantial licensing revenue.

**Characteristics:**
- Regulatory mandate (clear RA function)
- Significant revenue collection
- Revenue management requirements
- But: Limited customer accounting needs
- But: No ongoing customer obligations

**Classification Approach:**
1. Classification: **RA** (not SDA)
2. Note: "RA with enhanced revenue management"
3. Reference Architecture: Use RA RA
4. Adaptation: Strengthen payment/revenue components

**Key Differentiator:** Revenue comes from periodic license fees, not continuous customer transactions. Customers do not have ongoing "accounts" with regular obligations.

---

### 5.5 Multi-Function Organization

**Pattern:** An organization that clearly performs functions of multiple types.

**Example:** Ministry of Labor that:
- Develops labor policy (PDU function)
- Issues work permits for foreigners (RA function)
- Administers unemployment benefits (SDA function)

**Classification Approach:**

**Option A: Classify by Primary Function**
1. Identify the function consuming most resources
2. Classify accordingly
3. Note secondary functions
4. Address secondary functions in adaptation

**Option B: Segment the Organization**
1. Identify distinct operational units
2. Classify each unit separately
3. Apply appropriate RA to each
4. Integrate at organization level

**Recommendation:** Use Option B when operational units are clearly separate and have distinct IT systems. Use Option A when the organization is integrated.

---

### 5.6 Nascent Digital Service Organization

**Pattern:** A newly created agency or one undergoing major transformation that doesn't yet have the characteristics of its intended type.

**Example:** A new tax authority being established, currently small but with mandate to grow to full SDA capabilities.

**Classification Approach:**
1. Classify by **intended end state**, not current state
2. Note: "Nascent [type] - phased implementation"
3. Reference Architecture: Select based on target state
4. Implementation: Phase the roadmap

**Implementation Recommendation:**
- Use target-state RA as the full reference
- Phase implementation over multiple years
- Start with foundational capabilities
- Build toward full RA over time

---

### 5.7 Classification Decision Matrix for Hybrid Cases

| Pattern | Primary | Secondary | Classification | Notes |
|---------|---------|-----------|----------------|-------|
| Ministry + Licensing | Policy (>70%) | Regulatory (<30%) | **PDU** | Add RA modules |
| Regulator + Small Transactions | Regulatory (>70%) | Service (<30%) | **RA** | Standard RA |
| Regulator + High Transactions | Regulatory (>50%) | Service (<50%) | **SDA** | Full SDA RA |
| Multi-Function Equal | Multiple | Multiple | **Segment** | Classify each unit |
| Revenue Authority | Service | Revenue | **SDA** | Tax/Customs pattern |
| Enforcement Agency | Enforcement | Service | **SDA** | Police/Immigration |

---

## 6. CLASSIFICATION EXAMPLES

### 6.1 Example Classifications by Country Pattern

| Organization Type | Generic Name | Classification | Rationale |
|-------------------|--------------|----------------|-----------|
| Central Bank | Monetary Policy Authority | **PDU/RA Hybrid** | Policy development + Financial sector regulation |
| Ministry of Finance | Finance Ministry | **PDU** | Policy and coordination focus |
| Statistics Office | National Statistics Bureau | **PDU** | Data/analysis focus, no transactions |
| Electoral Commission | Election Authority | **RA** | Event-based regulation (elections) |
| Data Protection Authority | Privacy Commission | **RA** | Regulatory oversight, moderate volume |
| Business Registry | Commercial Register | **RA** | License/registration focus |
| Telecommunications Regulator | Comms Authority | **RA** | Sector regulation, spectrum licensing |
| Tax Administration | Revenue Service | **SDA** | High-volume, account management |
| Customs Administration | Border Services | **SDA** | High-volume, real-time processing |
| Social Security | Pension/Benefits Agency | **SDA** | Mass service delivery, accounts |
| Immigration | Immigration Department | **SDA** | High-volume, enforcement |
| Motor Vehicle Registry | Transport Authority | **SDA** | Mass registration, ongoing compliance |
| Land Registry | Property Registry | **RA/SDA** | Depends on volume and complexity |
| Police | Law Enforcement | **SDA** | Large-scale operations, case management |
| Health Insurance | National Health Fund | **SDA** | Mass coverage, claims processing |

### 6.2 Detailed Classification Examples

#### Example 1: Data Protection Authority

**Assessment:**
- Primary function: Regulate data protection compliance
- Transactions: Moderate (breach notifications, registrations)
- Customers: Data controllers/processors (thousands)
- Enforcement: Through complaints, investigations, fines
- Revenue: Registration fees (modest)

**Questionnaire Results:**
- PDU score: 12
- RA score: 42
- SDA score: 18

**Classification:** **RA**

**Rationale:** Clear regulatory mandate, moderate transaction volumes, inspection/enforcement focus, no mass customer accounts.

---

#### Example 2: Tax Administration (Large Country)

**Assessment:**
- Primary function: Tax collection and enforcement
- Transactions: Millions per year
- Customers: All individuals and businesses (millions)
- Enforcement: Audits, penalties, prosecution
- Revenue: Government's primary revenue source

**Questionnaire Results:**
- PDU score: 5
- RA score: 28
- SDA score: 85

**Classification:** **SDA**

**Rationale:** Mass service delivery, customer accounts, high-volume real-time processing, sophisticated risk-based enforcement, data analytics requirements.

---

#### Example 3: Ministry of Education

**Assessment:**
- Primary function: Education policy development
- Transactions: Limited (mainly with institutions)
- Customers: Schools, universities (indirect: students)
- Enforcement: None (delegated to agencies)
- Revenue: None

**Questionnaire Results:**
- PDU score: 48
- RA score: 8
- SDA score: 3

**Classification:** **PDU**

**Rationale:** Policy focus, minimal transactions, coordination role, no direct service delivery to citizens.

---

#### Example 4: Professional Medical Licensing Board (Small)

**Assessment:**
- Primary function: License healthcare professionals
- Transactions: Low (thousands per year)
- Customers: Doctors, nurses (tens of thousands)
- Enforcement: License revocation, disciplinary
- Revenue: License fees

**Questionnaire Results:**
- PDU score: 6
- RA score: 38
- SDA score: 12

**Classification:** **RA (Basic Tier)**

**Rationale:** Clear regulatory function, but small scale. Use RA Reference Architecture with Basic Tier technology recommendations.

---

### 6.3 Classification Documentation Template

When classifying an organization, document the following:

```
ORGANIZATION CLASSIFICATION RECORD
══════════════════════════════════════════════════════════════

Organization Name: ________________________________________
Country/Jurisdiction: ____________________________________
Date of Classification: __________________________________
Classified By: __________________________________________

CLASSIFICATION RESULT
─────────────────────────────────────────────────────────────
Primary Classification: [ ] PDU  [ ] RA  [ ] SDA

Tier/Scale: [ ] Basic  [ ] Standard  [ ] Enterprise

Notes/Qualifiers: ________________________________________
_________________________________________________________

SUPPORTING EVIDENCE
─────────────────────────────────────────────────────────────
Decision Tree Path: Q1→__ Q2→__ Q3→__ Q4→__

Questionnaire Scores:
  PDU: ____  RA: ____  SDA: ____

Key Differentiating Factors:
1. ______________________________________________________
2. ______________________________________________________
3. ______________________________________________________

Special Case Applied: [ ] None  [ ] ____________________

VALIDATION
─────────────────────────────────────────────────────────────
Reviewed By: _____________________________________________
Review Date: _____________________________________________
Approved: [ ] Yes  [ ] No (reason: _____________________)

NEXT STEPS
─────────────────────────────────────────────────────────────
Reference Architecture to Use: ____________________________
DPI Readiness Check Required: [ ] Yes  [ ] No
Additional Notes: ________________________________________
══════════════════════════════════════════════════════════════
```

---

## 7. WHAT HAPPENS AFTER CLASSIFICATION

### 7.1 Reference Architecture Selection

Based on classification, select the appropriate Reference Architecture:

| Classification | Reference Architecture | Document Reference |
|----------------|----------------------|-------------------|
| **PDU** | PDU Reference Architecture | GEATDM-WP2-T25 |
| **RA** | RA Reference Architecture | GEATDM-WP3-T35 |
| **SDA** | SDA Reference Architecture | GEATDM-WP4-T47 |

### 7.2 Inheritance Understanding

Remember the inheritance principle:

```
PDU Reference Architecture
    │
    │  Contains: Core office automation, document management,
    │            collaboration, basic analytics
    │
    └──────► RA Reference Architecture
                │
                │  Contains: Everything in PDU, PLUS
                │            Licensing, compliance monitoring,
                │            inspections, basic digital services
                │
                └──────► SDA Reference Architecture
                            │
                            │  Contains: Everything in RA, PLUS
                            │            Mass registration, customer
                            │            accounting, risk management,
                            │            enforcement at scale, advanced
                            │            analytics
```

### 7.3 Next Steps in DISCOVER Phase

After classification, continue the DISCOVER phase:

1. **Check DPI Readiness** (Task T5.2)
   - Assess whether national Digital Public Infrastructure is sufficient
   - Identify DPI gaps that may need to be addressed

2. **Identify Ecosystem Context**
   - Map the organization's position in the ecosystem
   - Identify related organizations (upstream PDUs, peer agencies)

3. **Document DISCOVER Outputs**
   - Complete the DISCOVER phase documentation
   - Prepare for ASSESS phase

### 7.4 Revisiting Classification

Classification may need to be revisited if:

- Organization mandate changes significantly
- Major reform creates new functions
- Merger with another organization
- Significant growth in transaction volumes
- New enforcement powers granted

Periodic review (every 2-3 years) is recommended as part of architecture governance.

---

## APPENDIX A: QUICK REFERENCE CARD

### Organization Type Summary

| Aspect | PDU | RA | SDA |
|--------|-----|-----|-----|
| **Focus** | Policy | Regulation | Service at scale |
| **Customers** | Stakeholders | Regulated entities | Mass public |
| **Transactions** | Low | Moderate | High |
| **Example** | Ministry | Licensing Board | Tax Authority |
| **Key BB** | Content Mgmt | Workflow | Risk Engine |
| **Platform** | Office suite | Digital services | Industrial platform |

### Decision Tree Summary

```
Policy focus + No licensing → PDU
Policy focus + Licensing + Low volume → RA
Regulatory focus + Low-medium volume → RA
Any focus + High volume + Complex operations → SDA
```

### Key Questions

1. Does it **make** policy or **implement** policy?
2. Does it issue **licenses/permits**?
3. Does it handle **millions** of transactions?
4. Does it manage **customer accounts**?
5. Does it use **risk-based** enforcement?

---

## APPENDIX B: GLOSSARY

| Term | Definition |
|------|------------|
| **Building Block (BB)** | Reusable software component per GovStack specifications |
| **Customer** | External stakeholder (citizen, business) served by the organization |
| **DPI** | Digital Public Infrastructure - national-level shared digital services |
| **Enforcement** | Activities to ensure compliance (inspections, audits, sanctions) |
| **License** | Authorization to perform a regulated activity |
| **PDU** | Policy Development Unit - policy-focused organization |
| **RA (org type)** | Regulatory Agency - sector regulation organization |
| **RA (artifact)** | Reference Architecture - template architecture |
| **SDA** | Service Delivery Authority - high-volume service organization |
| **Transaction** | Single interaction/processing unit (application, filing, payment) |

---

*End of Organization Classification Guide*

**Document History:**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-19 | Claude | Initial version |

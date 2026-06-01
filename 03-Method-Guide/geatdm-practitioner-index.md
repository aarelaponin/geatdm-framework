# GEATDM Practitioner's Quick Reference Index
## Field Guide for Target Architecture Engagements

**Version:** 1.0  
**Date:** January 2026  
**Purpose:** Rapid navigation of GEATDM method for practitioners

---

## 1. Engagement Quick Start

### 1.1 First 30 Minutes Checklist

When starting a new TA engagement, immediately determine:

| Question | Action | Tool/Resource |
|----------|--------|---------------|
| What type of organization? | Run classification | TK-01 Classification Questionnaire |
| What's their primary function? | Map to PDU/RA/SDA | Section 2 below |
| What resources do they have? | Inventory inputs | Input Preprocessing Framework |
| What's the country DPI status? | Assess infrastructure | TK-02 DPI Checklist |

### 1.2 Organization Type Decision Tree

```
START: What is the organization's PRIMARY function?
│
├─► Develops policy, conducts research, provides advice?
│   └─► PDU (Policy Development Unit)
│       Examples: Ministry, Policy Institute, Research Agency
│       Use: GEATDM-WP2-T25-PDU-RA-Complete-v1.0.md
│
├─► Regulates a sector, issues licenses, conducts inspections?
│   └─► Does it process HIGH VOLUMES of transactions?
│       ├─► NO → RA (Regulatory Agency)
│       │   Examples: Data Protection Authority, Professional Board
│       │   Use: GEATDM-WP3-T35-RA-RA-Complete-v1.0.md
│       │
│       └─► YES → Continue to SDA check ↓
│
└─► Delivers mass services, processes millions of transactions?
    └─► SDA (Service Delivery Authority)
        Examples: Tax Authority, Customs, Social Security, Police
        Use: GEATDM-WP4-T47-SDA-RA-Complete-v1.0.md
```

### 1.3 Quick Classification Indicators

| Indicator | PDU | RA | SDA |
|-----------|-----|-----|-----|
| Transaction volume/year | <1,000 | 1K-100K | >100K |
| Customer base size | Indirect | Hundreds-Thousands | Millions |
| Staff profile | Analysts, Advisors | Officers, Inspectors | Case workers, IT specialists |
| IT intensity | Moderate | Higher | Very High |
| Availability requirement | Business hours | 99.5% | 99.9%+ |
| Primary output | Policies, Reports | Licenses, Permits | Processed transactions |

---

## 2. Reference Architecture Selection Matrix

### 2.1 By Organization Type

| Organization Type | Reference Architecture | Key Characteristics |
|-------------------|----------------------|---------------------|
| **Ministry** | PDU | Policy development, limited public interaction |
| **Policy Institute** | PDU | Research, analysis, recommendations |
| **Data Protection Authority** | RA | Licensing, compliance monitoring |
| **Professional Board** | RA | Certification, disciplinary |
| **Environmental Agency** | RA | Permits, inspections, enforcement |
| **Tax Authority** | SDA | Mass filing, payments, compliance |
| **Customs** | SDA | Declarations, duties, trade facilitation |
| **Social Security** | SDA | Benefits, contributions, mass payments |
| **Immigration** | SDA | Visas, permits, border control |
| **Police Department** | SDA | Reporting, investigations, mass services |
| **Land Registry** | SDA | Registration, transfers, records |
| **Motor Vehicles** | SDA | Licensing, registration, fees |

### 2.2 Hybrid Situations

Some organizations have mixed characteristics:

| Situation | Recommendation |
|-----------|----------------|
| RA with occasional high volumes | Use RA base, add selected SDA capabilities |
| SDA with strong policy role | Use SDA base (includes PDU via inheritance) |
| Multiple functions in one org | Assess dominant function, consider phased approach |
| New organization (greenfield) | Use full reference architecture for type |

---

## 3. Method Phase Quick Reference

### 3.1 Phase Overview

| Phase | Duration | Key Activities | Key Deliverables |
|-------|----------|----------------|------------------|
| **DISCOVER** | 2-4 weeks | Classification, DPI assessment, RA selection, stakeholder mapping | Organization Profile, DPI Assessment, RA Selection Report |
| **ASSESS** | 6-8 weeks | AS-IS documentation, gap analysis, readiness assessment | AS-IS Architecture, Gap Analysis, Readiness Report |
| **ADAPT** | 4-6 weeks | Tailor RA, create TO-BE, BB prioritization | Target Architecture, Tailoring Log, BB Specifications |
| **PLAN** | 4-6 weeks | Roadmap, business case, governance charter | Roadmap, Business Case, Governance Charter |
| **EXECUTE** | Ongoing | Implementation, compliance, improvement | Project deliverables, Compliance reports |

### 3.2 Phase-to-Toolkit Mapping

| Phase | Primary Tools | Templates |
|-------|--------------|-----------|
| DISCOVER | TK-01, TK-02, TK-03 | Organization Profile, DPI Checklist, Stakeholder Map |
| ASSESS | TK-04, TK-05, TK-10 | AS-IS Template, Interview Guide, Gap Analysis Worksheet |
| ADAPT | TK-06, TK-07, TK-08 | Tailoring Checklist, TO-BE Template, BB Mapping |
| PLAN | TK-11, TK-12, TK-13 | Roadmap Template, Business Case Template, Governance Charter |
| EXECUTE | TK-14, TK-15 | Compliance Checklist, KPI Dashboard |

### 3.3 Decision Points by Phase

**DISCOVER Phase Decisions:**
- [ ] Organization type confirmed (PDU/RA/SDA)
- [ ] Reference Architecture selected
- [ ] DPI gaps identified with mitigation strategies
- [ ] Key stakeholders mapped

**ASSESS Phase Decisions:**
- [ ] AS-IS architecture documented (all BDAT domains)
- [ ] Gaps categorized (Missing/Partial/Different/Excess)
- [ ] Gaps prioritized (Must/Should/Nice-to-have)
- [ ] Readiness assessed (Technical/Organizational/Financial/Governance)

**ADAPT Phase Decisions:**
- [ ] RA tailoring decisions documented
- [ ] TO-BE architecture created
- [ ] Building Blocks prioritized
- [ ] Integration patterns defined

**PLAN Phase Decisions:**
- [ ] Implementation phases defined
- [ ] Timeline approved
- [ ] Budget secured
- [ ] Governance structure established

---

## 4. BDAT Domain Quick Reference

### 4.1 Domain Definitions

| Domain | Focus | Key Questions |
|--------|-------|---------------|
| **B**usiness | What the organization does | Services? Processes? Stakeholders? KPIs? |
| **D**ata | What information is managed | Data entities? Quality? Governance? Integration? |
| **A**pplication | How work is automated | Systems? Functions? Integration? Technology stack? |
| **T**echnology | Infrastructure foundation | Hosting? Network? Security? Availability? |

### 4.2 Domain-to-Input Document Mapping

| Input Document Type | Primary Domain | Secondary Domains |
|--------------------|----------------|-------------------|
| Organization charts | Business | - |
| Process diagrams | Business | Application |
| Service catalogs | Business | Application |
| System inventories | Application | Technology |
| Data models/APIs | Data | Application |
| Integration diagrams | Application | Data, Technology |
| Infrastructure docs | Technology | Application |
| Security policies | Technology | All |
| Strategic plans | Business | All |

---

## 5. Capability-Application-BB Traceability

### 5.1 Quick Lookup: SDA Capabilities to Building Blocks

| Capability Domain | Key Capabilities | Primary Building Blocks |
|-------------------|------------------|------------------------|
| C1 Policy Development | C1.1-C1.15 | Workflow, Document Mgmt |
| C2 Organizational Support | C2.1-C2.12 | Identity, Workflow |
| C3 Regulatory | C3.1-C3.7 | Registration, Workflow, Payments |
| C4 Service Delivery | C4.1-C4.12 | All 9 mandatory BBs |

### 5.2 Building Block Priority by Organization Type

| Building Block | PDU | RA | SDA |
|---------------|-----|-----|-----|
| Identity BB | Mandatory | Mandatory | Mandatory |
| Information Mediator BB | Mandatory | Mandatory | Mandatory |
| Messaging BB | Mandatory | Mandatory | Mandatory |
| Digital Registries BB | Mandatory | Mandatory | Mandatory |
| Workflow BB | Mandatory | Mandatory | Mandatory |
| Registration BB | Recommended | Mandatory | Mandatory |
| Payments BB | Recommended | Mandatory | **Critical** |
| Scheduler BB | Recommended | Recommended | Mandatory |
| Consent BB | Recommended | Recommended | Mandatory |

---

## 6. Common Patterns by Sector

### 6.1 Revenue/Tax Sector (SDA)

**Key Capabilities:** C4.1 (Registration), C4.3 (Filing), C4.4 (Revenue), C4.9 (Risk)

**Typical Applications:**
- Tax Administration System (GamTax Net, ITAS, etc.)
- Taxpayer Portal
- Risk Engine
- Payment Gateway Integration

**Critical Success Factors:**
- Integration with Treasury/Finance
- Payment infrastructure readiness
- Data quality for risk management

### 6.2 Customs Sector (SDA)

**Key Capabilities:** C4.3 (Declaration), C4.4 (Revenue), C4.9 (Risk), C4.10 (Third-Party Data)

**Typical Applications:**
- Customs Management System (ASYCUDA, etc.)
- Single Window
- Risk/Selectivity Engine
- Manifest Management

**Critical Success Factors:**
- Border post connectivity
- Regional integration (SACU, SADC, ECOWAS, etc.)
- Multi-agency coordination

### 6.3 Social Security Sector (SDA)

**Key Capabilities:** C4.1 (Registration), C4.4 (Contributions), C4.5 (Benefits), C4.6 (Accounts)

**Typical Applications:**
- Contribution Management
- Benefits Calculation
- Payment Disbursement
- Employer Portal

**Critical Success Factors:**
- Identity verification
- Payment infrastructure for mass disbursements
- Fraud prevention

### 6.4 Regulatory Sector (RA)

**Key Capabilities:** C3.1 (Licensing), C3.2 (Inspection), C3.3 (Compliance), C3.5 (Enforcement)

**Typical Applications:**
- License Management System
- Inspection Management
- Case Management
- Public Registry

**Critical Success Factors:**
- Transparent decision-making
- Inspection mobility
- Appeals process

---

## 7. Document Location Quick Reference

### 7.1 GEATDM Repository Structure

```
GEATDM-Method-Repository/
├── 00-START-HERE/
│   ├── GEATDM-UsersGuide-v1.0.md          ← Start here for overview
│   └── GEATDM-WP6-T62-MainDocument-v1.0.md ← Complete reference
│
├── 01-Toolkit/
│   └── GEATDM-WP6-T61-Toolkit-v1.0.md     ← All templates and tools
│
├── 02-Reference-Architectures/
│   ├── GEATDM-WP2-T25-PDU-RA-Complete-v1.0.md  ← PDU baseline
│   ├── GEATDM-WP3-T35-RA-RA-Complete-v1.0.md   ← RA (extends PDU)
│   └── GEATDM-WP4-T47-SDA-RA-Complete-v1.0.md  ← SDA (extends RA)
│
├── 03-Method-Guide/
│   └── GEATDM-WP5-T58-MethodGuide-Complete-v1.0.md ← Detailed phases
│
├── 04-EA-Framework/
│   ├── GEATDM-WP1-T11-Metamodel-v1.0.md    ← EA metamodel
│   ├── GEATDM-WP1-T12-EAPrinciples-v1.0.md ← Architecture principles
│   ├── GEATDM-WP1-T13-Governance-v1.0.md   ← Governance framework
│   └── GEATDM-WP1-T14-EAServices-v1.0.md   ← EA services catalog
│
└── 05-Quick-Reference/
    ├── GEATDM-WP0-T03-Definitions-v1.0.md  ← Glossary
    ├── GEATDM-WP5-T51-ClassificationGuide-v1.0.md ← Classification
    └── GEATDM-WP5-T52-DPIChecklist-v1.0.md ← DPI assessment
```

### 7.2 Quick Access by Need

| I need to... | Go to... |
|--------------|----------|
| Understand GEATDM concepts | 00-START-HERE/GEATDM-UsersGuide |
| Classify an organization | 05-Quick-Reference/ClassificationGuide |
| Find a template | 01-Toolkit/Toolkit |
| Get PDU reference architecture | 02-Reference-Architectures/PDU-RA-Complete |
| Get RA reference architecture | 02-Reference-Architectures/RA-RA-Complete |
| Get SDA reference architecture | 02-Reference-Architectures/SDA-RA-Complete |
| Understand a phase in detail | 03-Method-Guide/MethodGuide-Complete |
| Set up EA governance | 04-EA-Framework/Governance |
| Check DPI readiness | 05-Quick-Reference/DPIChecklist |
| Look up a term | 05-Quick-Reference/Definitions |

---

## 8. Engagement Checklist

### 8.1 Pre-Engagement

- [ ] Received customer input documents
- [ ] Preprocessed inputs using Input Framework
- [ ] Initial organization classification done
- [ ] Reference Architecture identified
- [ ] Key stakeholders identified
- [ ] Engagement timeline proposed

### 8.2 DISCOVER Phase

- [ ] TK-01 Classification completed
- [ ] TK-02 DPI Assessment completed
- [ ] Stakeholder map created
- [ ] Organization Profile document created
- [ ] RA Selection Report created

### 8.3 ASSESS Phase

- [ ] Business Architecture documented
- [ ] Application Architecture documented
- [ ] Data Architecture documented
- [ ] Technology Architecture documented
- [ ] Integration Architecture documented
- [ ] Gap Analysis completed (TK-10)
- [ ] Readiness Assessment completed

### 8.4 ADAPT Phase

- [ ] RA tailoring decisions documented
- [ ] TO-BE Business Architecture created
- [ ] TO-BE Application Architecture created
- [ ] TO-BE Data Architecture created
- [ ] TO-BE Technology Architecture created
- [ ] Building Block priorities set
- [ ] Integration patterns defined

### 8.5 PLAN Phase

- [ ] Implementation phases defined
- [ ] Roadmap created
- [ ] Business case developed
- [ ] Governance charter created
- [ ] Stakeholder approval obtained

---

## 9. Common Pitfalls and Solutions

| Pitfall | Solution |
|---------|----------|
| Overcomplicating classification | Use decision tree; when in doubt, classify higher (RA→SDA) |
| Skipping DPI assessment | DPI gaps can derail implementation; always assess early |
| Incomplete AS-IS | Use structured templates; interview multiple stakeholders |
| Gap analysis without priorities | Always categorize (Must/Should/Nice) and sequence |
| TO-BE without tailoring | Start with RA, document every tailoring decision |
| Roadmap too ambitious | Phase delivery; quick wins in Phase 1-2 |
| Missing governance | Establish governance before EXECUTE phase |

---

## 10. Glossary Quick Reference

| Term | Definition |
|------|------------|
| **PDU** | Policy Development Unit - basic bureaucratic organization |
| **RA** | Regulatory Agency - implements regulations, moderate transactions |
| **SDA** | Service Delivery Authority - mass service delivery, high volumes |
| **BDAT** | Business, Data, Application, Technology architecture domains |
| **BB** | Building Block - standardized, reusable component (GovStack) |
| **DPI** | Digital Public Infrastructure - national-level digital services |
| **TO-BE** | Target architecture (future state) |
| **AS-IS** | Current architecture (present state) |

---

*Quick Reference Index v1.0 - January 2026*
*For use with GEATDM Method Repository*

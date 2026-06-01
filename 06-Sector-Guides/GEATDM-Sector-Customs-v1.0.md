# GEATDM Customs Sector Guide

## Practitioner's Handbook for Customs Target Architecture

**Version 1.0**  
**January 2026**

---

## Document Control

| Attribute | Value |
|-----------|-------|
| **Document ID** | GEATDM-SECTOR-CUSTOMS-v1.0 |
| **Title** | GEATDM Customs Sector Guide |
| **Subtitle** | Practitioner's Handbook for Customs Target Architecture |
| **Version** | 1.0 |
| **Date** | January 2026 |
| **Status** | Final |
| **Project** | Gambia Enterprise Architecture Initiative |
| **Contract** | WARDIP/C4.13.2/2024/DC009 |
| **Author** | Aare Laponin, ITU Lead Architect |
| **Organization Type** | Service Delivery Authority (SDA) |
| **Classification** | Public |

### Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 0.1 | 2026-01-21 | Aare Laponin | Initial draft - Sections 1-5 |
| 0.2 | 2026-01-21 | Aare Laponin | Added Sections 6-11 |
| 1.0 | 2026-01-21 | Aare Laponin | Final assembly and QA |

### Approval Record

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Author | Aare Laponin | 2026-01-21 | _____________ |
| Reviewer | ________________ | __________ | _____________ |
| Approver | ________________ | __________ | _____________ |

---

## Table of Contents

1. [Customs Sector Overview](#section-1-customs-sector-overview)
   - 1.1 Why Customs is Always a Service Delivery Authority
   - 1.2 Customs Mission and Functions
   - 1.3 Key Stakeholders
   - 1.4 International Standards

2. [Customs Capability Architecture](#section-2-customs-capability-architecture)
   - 2.1 SDA-to-Customs Capability Mapping
   - 2.2 Detailed Customs Capability Taxonomy
   - 2.3 Customs-Specific Extensions
   - 2.4 Capability Priorities

3. [Customs Application Architecture](#section-3-customs-application-architecture)
   - 3.1 Core Systems Landscape
   - 3.2 Application Domain Mapping
   - 3.3 Integration Patterns

4. [Customs Data Architecture](#section-4-customs-data-architecture)
   - 4.1 Data Domains
   - 4.2 WCO Data Model Alignment
   - 4.3 Master Data Management

5. [Customs Process Architecture](#section-5-customs-process-architecture)
   - 5.1 Core Processes
   - 5.2 Import Clearance Flow
   - 5.3 Risk-Based Processing
   - 5.4 Process Metrics

6. [Building Blocks for Customs](#section-6-building-blocks-for-customs)
   - 6.1 GovStack Building Block Overview
   - 6.2 Priority Building Blocks for Customs
   - 6.3 Building Block Integration Patterns
   - 6.4 Building Block to Capability Mapping
   - 6.5 Building Block Implementation Sequencing

7. [GEATDM Application for Customs](#section-7-geatdm-application-for-customs)
   - 7.1 DISCOVER Phase Guidance
   - 7.2 ASSESS Phase Guidance
   - 7.3 ADAPT Phase Guidance
   - 7.4 PLAN Phase Guidance
   - 7.5 EXECUTE Phase Guidance

8. [Customs Quick Wins](#section-8-customs-quick-wins)
   - 8.1 Quick Win Definition
   - 8.2 Quick Win Catalog
   - 8.3 Quick Win Implementation Approach
   - 8.4 ROI Indicators

9. [Input Document Checklist](#section-9-input-document-checklist)
   - 9.1 Expected _as-is/ Documents
   - 9.2 Expected _international/ Documents
   - 9.3 Expected _practical-experience/ Assets
   - 9.4 Document Completeness Assessment

10. [Reference Tables](#section-10-reference-tables)
    - 10.1 HS Code Structure
    - 10.2 Customs Regimes
    - 10.3 AEO Tier Levels
    - 10.4 Risk Categories
    - 10.5 WTO TFA Benchmarks

11. [Appendices](#section-11-appendices)
    - 11.1 Glossary
    - 11.2 GEATDM Cross-References
    - 11.3 Version History
    - 11.4 Document Control

---

# Section 1: Customs Sector Overview

## 1.1 Why Customs is Always a Service Delivery Authority

### 1.1.1 SDA Classification Rationale

Within the GEATDM framework, organizations are classified into three tiers based on their operational characteristics: Policy Development Units (PDU), Regulatory Authorities (RA), and Service Delivery Authorities (SDA). Customs administrations are definitively classified as SDAs—the most complex tier—because they meet all primary indicators for mass service delivery organizations:

| SDA Indicator | Customs Administration Evidence |
|---------------|--------------------------------|
| **Mass service delivery** | Processes millions of import/export declarations annually |
| **Customer base > 100,000** | Serves hundreds of thousands of traders, brokers, and agents |
| **Transactions > 100,000/year** | Millions of customs declarations and duty payments |
| **Real-time processing** | Immediate release decisions required at borders |
| **Revenue collection** | Collects significant government revenue (duties, taxes, fees) |
| **Customer accounts** | Maintains trader accounts with duty ledgers and bonds |
| **Multi-channel delivery** | Portal, EDI/API, mobile, and border office services |

### 1.1.2 Secondary SDA Confirmers

Beyond the primary indicators, customs administrations exhibit secondary characteristics that confirm their SDA classification:

| Indicator | Evidence |
|-----------|----------|
| Risk-based selection | Sophisticated targeting and selectivity algorithms (Green/Yellow/Red/Blue channels) |
| Refund processing | Duty drawback, overpayment refunds, ATA Carnet discharge |
| Advanced analytics | Trade data warehouses, predictive risk models, trade statistics |
| Debt management | Active duty debt recovery and enforcement operations |
| 24/7 operations | Continuous border processing at ports, airports, and land crossings |
| International exchange | WCO CEN, bilateral information sharing, mutual administrative assistance |

### 1.1.3 Inheritance Chain

As an SDA, a customs administration inherits capabilities from both PDU and RA tiers:

```
PDU (Policy Development Unit)
  └── Policy Development Capabilities (C1: 30 L2s)
        │
        └── RA (Regulatory Authority)
              └── Regulatory Capabilities (C3: 49 L2s)
              └── Organizational Support (C2: 46 L2s) [Extended]
                    │
                    └── SDA (Service Delivery Authority)
                          └── Service Delivery Capabilities (C4: 96 L2s)
                          └── All inherited capabilities enhanced for scale
```

This inheritance structure ensures that customs administrations possess the full range of government enterprise capabilities: policy formulation, regulatory oversight, organizational management, and high-volume service delivery.

---

## 1.2 Customs Mission and Functions

### 1.2.1 Core Mission

A customs administration serves a dual mission that must be carefully balanced:

1. **Trade Facilitation:** Enable legitimate trade to flow efficiently through borders, minimizing delays and costs for compliant traders while supporting economic growth and international competitiveness.

2. **Border Protection:** Protect national security, public health, and the economy by preventing smuggling, collecting lawful revenue, enforcing trade policy measures, and controlling prohibited/restricted goods.

### 1.2.2 Primary Functions

| Function | Description | Key Capabilities |
|----------|-------------|-----------------|
| **Revenue Collection** | Collect customs duties, VAT, excise taxes, and fees on imported goods | CU-C8 (Assessment), CU-C9 (Payment) |
| **Trade Facilitation** | Enable rapid clearance of legitimate shipments through risk-based processing | CU-C10 (Release), CU-C15 (AEO) |
| **Border Enforcement** | Detect and interdict prohibited goods, IPR violations, and smuggling | CU-C16 (Enforcement), CU-C7 (Inspection) |
| **Trade Policy Implementation** | Apply tariff measures, FTA preferences, quotas, and trade remedies | CU-C3 (Classification), CU-C5 (Origin) |
| **Statistical Compilation** | Generate trade statistics for national accounts and policy analysis | CU-C24.2 (Statistics) |
| **Compliance Management** | Monitor and improve trader compliance through risk-based interventions | CU-C11 (PCA), CU-C13 (CRM) |

### 1.2.3 Customs Value Proposition

Modern customs administrations create value across three dimensions:

**For Government:**
- Reliable revenue collection with minimal leakage
- Enforcement of trade policy measures and international agreements
- Border security and national protection
- Trade statistics for economic planning

**For Trade:**
- Predictable, time-bound clearance processes
- Reduced compliance costs through simplified procedures
- Trusted trader programs with tangible benefits
- Single Window access to border-related services

**For Society:**
- Protection from unsafe and dangerous goods
- Environmental protection (CITES, hazardous materials)
- Consumer protection (counterfeits, substandard goods)
- Food and health safety at borders

---

## 1.3 Key Stakeholders

### 1.3.1 Internal Stakeholders

| Stakeholder | Role | Architecture Relevance |
|-------------|------|----------------------|
| **Customs Officers** | Process declarations, conduct examinations, manage cases | Primary system users; workflow requirements |
| **Risk Analysts** | Develop profiles, analyze patterns, refine targeting | Risk engine configuration; analytics consumers |
| **Audit Specialists** | Conduct post-clearance audits, field examinations | PCA system; case management workflows |
| **Revenue Accountants** | Manage duty accounts, reconciliations, refunds | Accounting systems; treasury integration |
| **IT/Technical Staff** | Maintain systems, support operations | Infrastructure; integration maintenance |
| **Management** | Strategic direction, performance monitoring | Dashboards; reporting; KPI tracking |

### 1.3.2 External Stakeholders

| Stakeholder | Interaction | Integration Requirements |
|-------------|-------------|-------------------------|
| **Importers/Exporters** | Submit declarations, pay duties, receive releases | Portal; EDI/API; notifications |
| **Customs Brokers/Agents** | Represent traders, file declarations | Broker portal; license management |
| **Shipping Lines/Carriers** | Submit manifests, receive release instructions | Manifest system; port integration |
| **Banks** | Process payments, issue guarantees | Payment gateway; guarantee verification |
| **Treasury/MoF** | Receive revenue, set policy | IFMIS integration; reporting |
| **Other Government Agencies** | Issue permits, certificates, licenses | Single Window; agency gateway |
| **Port Authorities** | Coordinate cargo release, examinations | Port Community System integration |
| **Partner Customs** | Exchange data, mutual assistance | WCO exchange; bilateral channels |

### 1.3.3 Stakeholder Data Flows

```
                    ┌──────────────────┐
                    │   TRADERS        │
                    │ (Importers,      │
                    │  Exporters,      │
                    │  Brokers)        │
                    └────────┬─────────┘
                             │ Declarations, Documents, Payments
                             ▼
┌──────────────┐    ┌──────────────────┐    ┌──────────────┐
│   CARRIERS   │───▶│    CUSTOMS       │◀───│   TREASURY   │
│ (Manifests)  │    │  ADMINISTRATION  │    │   (Revenue)  │
└──────────────┘    └────────┬─────────┘    └──────────────┘
                             │
         ┌───────────────────┼───────────────────┐
         ▼                   ▼                   ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│     OGAs     │    │    BANKS     │    │   PARTNER    │
│ (Permits,    │    │ (Payments,   │    │   CUSTOMS    │
│  Licenses)   │    │  Guarantees) │    │ (Data Exch.) │
└──────────────┘    └──────────────┘    └──────────────┘
```

---

## 1.4 International Standards

### 1.4.1 Core International Frameworks

| Framework | Issuing Body | Relevance to Customs |
|-----------|--------------|---------------------|
| **Revised Kyoto Convention (RKC)** | WCO | Foundation for modern customs procedures; simplification, harmonization, transparency |
| **Trade Facilitation Agreement (TFA)** | WTO | Binding commitments on time release, single window, advance rulings, risk management |
| **SAFE Framework** | WCO | Supply chain security standards; AEO mutual recognition |
| **Data Model 3.9.0** | WCO | Standard data elements and messages for customs |
| **HS Convention** | WCO | Harmonized commodity classification system |
| **Valuation Agreement** | WTO | Six valuation methods for determining customs value |

### 1.4.2 WCO Revised Kyoto Convention Alignment

The RKC provides the blueprint for modern customs procedures:

| RKC Element | Sector Guide Coverage |
|-------------|----------------------|
| General Annex | Core procedures applicable to all customs regimes |
| Specific Annex A | Arrival and temporary storage of goods |
| Specific Annex B | Import procedures |
| Specific Annex C | Export procedures |
| Specific Annex D | Customs warehousing and free zones |
| Specific Annex E | Transit |
| Specific Annex F | Processing (inward/outward) |
| Specific Annex G | Temporary admission |
| Specific Annex H | Offences |
| Specific Annex J | Special procedures (travelers, postal, etc.) |
| Specific Annex K | Origin |

### 1.4.3 WTO Trade Facilitation Agreement Requirements

| TFA Article | Requirement | Architecture Implication |
|-------------|-------------|-------------------------|
| Art. 1 | Publication and availability of information | Public registry portal |
| Art. 3 | Advance rulings | Ruling management system |
| Art. 7.1 | Pre-arrival processing | Declaration system enhancement |
| Art. 7.3 | Separation of release from final determination | Release workflow |
| Art. 7.4 | Risk management | Risk engine; selectivity |
| Art. 7.5 | Post-clearance audit | PCA system |
| Art. 7.7 | Authorized operators | AEO program management |
| Art. 8 | Border agency cooperation | Single Window |
| Art. 10 | Formalities connected with importation/exportation | Simplified procedures |

### 1.4.4 Additional Standards References

| Standard | Purpose | Application |
|----------|---------|-------------|
| **UN/EDIFACT** | Electronic data interchange | CUSCAR (manifest), CUSDEC (declaration), CUSRES (response) |
| **ISO 20022** | Payment messaging | Bank payment integration |
| **ISO 3166** | Country codes | Reference data |
| **ISO 4217** | Currency codes | Reference data |
| **UN/LOCODE** | Location codes | Reference data |
| **UN/ECE Rec 21** | Package type codes | Reference data |
| **OECD CRM** | Compliance risk management | Risk management methodology |
| **IMF CRM** | Tax/customs administration standards | Analytics and compliance |

---

# Section 2: Customs Capability Architecture

## 2.1 SDA-to-Customs Capability Mapping

### 2.1.1 GEATDM SDA Reference Architecture Structure

The SDA Reference Architecture provides **34 L1 capabilities** with **221 L2 capabilities** across four domains:

| Domain | L1 Count | L2 Count | Inheritance |
|--------|----------|----------|-------------|
| **C1: Policy Development** | 6 | 30 | From PDU |
| **C2: Organizational Support** | 9 | 46 | Enhanced from PDU |
| **C3: Regulatory** | 7 | 49 | From RA |
| **C4: Service Delivery** | 12 | 96 | SDA-specific |
| **TOTAL** | **34** | **221** | |

### 2.1.2 Customs-Specific Capability Model

Based on practical experience analysis (Task T3.1), customs administrations require **24 L1 capabilities** with **117 L2 capabilities**:

| L1 ID | L1 Capability Name | L2 Count | GEATDM Mapping |
|-------|-------------------|----------|----------------|
| CU-C1 | Trader Registration and Management | 5 | C4.1 Registration |
| CU-C2 | Goods Declaration Management | 6 | C4.3 Filing |
| CU-C3 | Tariff Classification | 3 | C4.3 Filing |
| CU-C4 | Customs Valuation | 4 | C4.3 Filing |
| CU-C5 | Origin Determination | 3 | C4.3 Filing |
| CU-C6 | Risk Management and Selectivity | 5 | C4.9 Risk-Based Processing |
| CU-C7 | Physical Inspection and Control | 4 | C4.5 Audit & Examination |
| CU-C8 | Duty and Tax Assessment | 5 | C4.4 Revenue Collection |
| CU-C9 | Payment and Accounting | 5 | C4.4 Revenue Collection |
| CU-C10 | Release and Clearance | 4 | C4.3 Filing [Extended] |
| CU-C11 | Post Clearance Audit | 8 | C4.5 Audit & Examination |
| CU-C12 | Legal Proceedings | 4 | C4.6 Enforcement |
| CU-C13 | Compliance Risk Management | 4 | C4.9 Risk-Based Processing |
| CU-C14 | Special Customs Procedures | 7 | C4.8 Special Regime Mgmt |
| CU-C15 | AEO and Partnership Programs | 6 | C4.7 Taxpayer Services [Extended] |
| CU-C16 | Border Enforcement and Security | 5 | C4.6 Enforcement |
| CU-C17 | E-Commerce Facilitation | 5 | C4.3 Filing [Extended] |
| CU-C18 | Laboratory and Technical Services | 5 | C4.5 Audit & Examination [Extended] |
| CU-C19 | Service Management | 3 | C4.7 Taxpayer Services |
| CU-C20 | International Cooperation | 3 | C4.10 Information Exchange |
| CU-C21 | Digital Transformation and Technology | 5 | C1.1-C1.5 ICT Management |
| CU-C22 | Organizational Capabilities | 8 | C2.1-C2.6 Org Management |
| CU-C23 | Emergency and Disaster Response | 4 | C3.1 Business Continuity |
| CU-C24 | Supporting Processes | 6 | C2.5 Admin Support |

### 2.1.3 Mapping Type Classification

| Mapping Type | Count | Description |
|--------------|-------|-------------|
| **Direct** | 21 | One-to-one mapping with SDA Reference Architecture |
| **Extended** | 3 | SDA capability with customs-specific extensions |
| **Total** | 24 | Complete customs capability coverage |

---

## 2.2 Detailed Customs Capability Taxonomy

### 2.2.1 Core Revenue Function Capabilities

#### CU-C2: Goods Declaration Management (6 L2s)

| L2 ID | L2 Capability | Description |
|-------|--------------|-------------|
| CU-C2.1 | Pre-Arrival Processing | Advance cargo information, pre-lodgement, risk assessment before arrival |
| CU-C2.2 | Import Declaration Processing | Electronic submission via Single Window, automated validation, supporting document management |
| CU-C2.3 | Export Declaration Processing | Export controls/licensing verification, drawback claims, re-export procedures |
| CU-C2.4 | Transit Declaration Processing | Transit guarantees, seal/GPS tracking, destination confirmation, TIR Carnet |
| CU-C2.5 | Declaration Amendment | Pre-release and post-release amendments with duty recalculation |
| CU-C2.6 | E-Commerce Declaration Processing | UPU integration, express courier manifests, platform data integration |

#### CU-C8: Duty and Tax Assessment (5 L2s)

| L2 ID | L2 Capability | Description |
|-------|--------------|-------------|
| CU-C8.1 | Duty Calculation | Tariff rate application based on HS classification, ADD/CVD |
| CU-C8.2 | Preferential Treatment | Reduced rates under FTAs with origin verification |
| CU-C8.3 | VAT/GST on Imports | VAT calculation on duty-paid value, exemptions, deferred payment |
| CU-C8.4 | Excise Duties | Excise goods identification, calculation methods, bonded regime |
| CU-C8.5 | Exemptions Management | Industrial, investment, international agreement exemptions; end-use monitoring |

#### CU-C9: Payment and Accounting (5 L2s)

| L2 ID | L2 Capability | Description |
|-------|--------------|-------------|
| CU-C9.1 | Payment Processing | Electronic payments, bank guarantees, deferred payment accounts |
| CU-C9.2 | Customs Accounting | Trader account management, revenue accounting, reconciliation |
| CU-C9.3 | Refunds Processing | Refund eligibility verification, time limit checking, EFT execution |
| CU-C9.4 | Guarantee Management | Multiple guarantee types, release tracking, enforcement |
| CU-C9.5 | Inter-Country Settlement | Duty remittance between partner countries, settlement disputes |

### 2.2.2 Risk and Compliance Capabilities

#### CU-C6: Risk Management and Selectivity (5 L2s)

| L2 ID | L2 Capability | Description |
|-------|--------------|-------------|
| CU-C6.1 | Risk Strategy Management | Risk framework covering compliance, security, safety risks |
| CU-C6.2 | Selectivity System | Channel assignment (Green/Yellow/Red/Blue) based on risk |
| CU-C6.3 | Risk Engine and ML | Risk ratings, profiles, priorities with ML integration (85-90% accuracy target) |
| CU-C6.4 | Trader Risk Profiling | Compliance history, BISEP factors, rating maintenance |
| CU-C6.5 | Risk Management KPIs | Green channel >60%, detection >30%, false positive <20% |

#### CU-C11: Post Clearance Audit (8 L2s)

| L2 ID | L2 Capability | Description |
|-------|--------------|-------------|
| CU-C11.1 | Importer Targeting and Prioritization | Risk input reception, categorization, audit triggering |
| CU-C11.2 | Audit Scoping and Planning | Desk/field audit planning, scope definition, auditor assignment |
| CU-C11.3 | Audit Resource Management | Auditor profiles, team management, skills management |
| CU-C11.4 | Audit Execution | Document management, questionnaire-guided findings, evidence management |
| CU-C11.5 | Audit Analytical Tools | Financial ratios, trend analysis, statistical sampling |
| CU-C11.6 | Audit Tracking and Compliance | Audit rate monitoring (3-5% target), productivity, collection rate (10-15% recovery) |
| CU-C11.7 | Audit Conclusion | Report creation, approval workflow, closure, archival |
| CU-C11.8 | Revenue Recovery and Discrepancy Management | Charge initiation, collection tracking, appeal management |

#### CU-C13: Compliance Risk Management (4 L2s)

| L2 ID | L2 Capability | Description |
|-------|--------------|-------------|
| CU-C13.1 | Compliance Strategy Management | Compliance Pyramid Model with segment-specific treatment |
| CU-C13.2 | Voluntary Compliance Promotion | Clear guidance, self-assessment tools, recognition programs |
| CU-C13.3 | Trader Compliance Risk Analysis | Risk identification, assessment, prioritization, treatment selection |
| CU-C13.4 | Compliance Monitoring | Registration, filing, payment, and accuracy compliance monitoring |

### 2.2.3 Trade Facilitation Capabilities

#### CU-C10: Release and Clearance (4 L2s)

| L2 ID | L2 Capability | Description |
|-------|--------------|-------------|
| CU-C10.1 | Pre-Arrival Clearance | Advance ruling, pre-clearance for declarations submitted before arrival |
| CU-C10.2 | Automated Release | System-based release for low-risk transactions with completed payment |
| CU-C10.3 | Time Release Measurement | WTO TFA tracking, target <24 hours for low-risk cargo |
| CU-C10.4 | Simplified Procedures | AEO benefits, periodic declarations, local clearance, immediate release |

#### CU-C15: AEO and Partnership Programs (6 L2s)

| L2 ID | L2 Capability | Description |
|-------|--------------|-------------|
| CU-C15.1 | AEO Program Management | Criteria management (compliance, records, solvency, standards, security) |
| CU-C15.2 | AEO Application Processing | Documentation, desk review, on-site validation, authorization |
| CU-C15.3 | AEO Monitoring and Revalidation | Continuous monitoring, performance indicators, 3-5 year revalidation |
| CU-C15.4 | AEO Benefits Delivery | 50-70% inspection reduction, 30-50% faster clearance, 70% guarantee reduction |
| CU-C15.5 | Mutual Recognition Agreements | MRA implementation, secure data exchange, joint monitoring |
| CU-C15.6 | Customs-Business Partnership Programs | Trade advisory committees, industry MOUs, sector-specific programs |

---

## 2.3 Customs-Specific Extensions

### 2.3.1 Extensions to SDA Reference Architecture

The customs domain requires specific extensions beyond the generic SDA model:

| SDA Capability | Customs Extension | Rationale |
|----------------|-------------------|-----------|
| C4.3 Filing | **CU-C3 Tariff Classification** | HS code determination is customs-specific with deep technical requirements |
| C4.3 Filing | **CU-C4 Customs Valuation** | WTO Valuation Agreement methods require specialized implementation |
| C4.3 Filing | **CU-C5 Origin Determination** | Preferential and non-preferential origin rules are customs-specific |
| C4.7 Services | **CU-C15 AEO Programs** | Trusted trader programs with measurable benefits |
| C4.5 Audit | **CU-C18 Laboratory Services** | Technical testing for classification, origin, compliance |
| C4.6 Enforcement | **CU-C16 Border Security** | Physical border presence and enforcement operations |
| C4.8 Special Regimes | **CU-C14 Special Procedures** | Transit, temporary admission, warehousing, processing regimes |

### 2.3.2 Special Customs Procedures (CU-C14: 7 L2s)

| L2 ID | L2 Capability | Description |
|-------|--------------|-------------|
| CU-C14.1 | Transit Procedures | Customs transit with guarantee/control, GPS tracking, TIR Carnet |
| CU-C14.2 | Temporary Admission | ATA/CPD Carnet, eATA, eligible goods categories |
| CU-C14.3 | Customs Warehousing | Public/private warehouses, inventory management, 5-year max storage |
| CU-C14.4 | Inward Processing | Suspension/drawback systems, rate of yield, discharge upon re-export |
| CU-C14.5 | Outward Processing | Temporary export for processing, value-added calculation |
| CU-C14.6 | Free Zones and Free Warehouses | Manufacturing/processing without customs intervention, perimeter controls |
| CU-C14.7 | Duty-Free Shops | Sales to departing passengers, inventory tracking, operator licensing |

### 2.3.3 Border Enforcement and Security (CU-C16: 5 L2s)

| L2 ID | L2 Capability | Description |
|-------|--------------|-------------|
| CU-C16.1 | Border Control Operations | Surveillance, intelligence-led enforcement, coordinated border management |
| CU-C16.2 | Anti-Smuggling and Investigation | Detection, seizure, criminal investigation, controlled deliveries |
| CU-C16.3 | Prohibited and Restricted Goods | CITES, narcotics, precursors, weapons, hazardous materials |
| CU-C16.4 | IPR Enforcement | Counterfeit detection, rights holder registration, destruction procedures |
| CU-C16.5 | Supply Chain Security | Container screening, radiation detection, AEO-Security certification |

---

## 2.4 Capability Priorities

### 2.4.1 Priority Classification Framework

Capabilities are classified into three priority levels based on operational criticality and implementation sequence:

### 2.4.2 Critical Capabilities (Must Have)

Essential capabilities required for any operational customs administration:

| Capability | Priority Rationale |
|------------|-------------------|
| CU-C1 Trader Registration | Foundation for all customs transactions; trader identification required |
| CU-C2 Goods Declaration | Core customs function; all goods must be declared |
| CU-C3 Tariff Classification | Duty liability determination; HS code is mandatory |
| CU-C4 Customs Valuation | Revenue base determination; WTO compliance required |
| CU-C6 Risk Management | Modern customs requires risk-based selectivity |
| CU-C8 Duty/Tax Assessment | Revenue collection is primary customs function |
| CU-C9 Payment/Accounting | Collection and accounting of duties/taxes |
| CU-C10 Release/Clearance | Goods must be released; clearance is the outcome |
| CU-C19.1 G2B Services | Trader interface for declarations/payments |
| CU-C21.1 Core IT Systems | All modern customs requires automation |

### 2.4.3 Important Capabilities (Should Have)

Capabilities for mature customs operations:

| Capability | Priority Rationale |
|------------|-------------------|
| CU-C5 Origin Determination | Required for preferential treatment and trade agreements |
| CU-C7 Physical Inspection | Risk-selected inspections improve compliance |
| CU-C11 Post Clearance Audit | Shift from 100% checking to audit-based control |
| CU-C12 Legal Proceedings | Enforcement of violations |
| CU-C13 Compliance Risk Mgmt | Strategic compliance improvement |
| CU-C14 Special Procedures | Enable trade facilitation (transit, temporary admission, warehousing) |
| CU-C15 AEO/Partnerships | Trusted trader programs improve facilitation |
| CU-C16 Border Enforcement | Security and prohibited goods control |
| CU-C19.3 G2G Services | Single Window and inter-agency coordination |
| CU-C20 International Cooperation | Cross-border data exchange |
| CU-C22 Organizational | HR, training, integrity, performance management |
| CU-C24 Supporting Processes | Document management, user management, internal controls |

### 2.4.4 Advanced Capabilities (Nice to Have)

Leading-edge capabilities for optimized operations:

| Capability | Priority Rationale |
|------------|-------------------|
| CU-C17 E-Commerce Facilitation | Growing volume but not critical in all jurisdictions |
| CU-C18 Laboratory Services | Can be outsourced; not all customs have labs |
| CU-C21.3 Emerging Technologies | AI/ML, blockchain, IoT are optimization tools |
| CU-C23 Emergency Response | Important but not daily operations |
| CU-C6.3 ML Risk Engine | Advanced risk assessment (85-90% accuracy target) |
| CU-C7.2 Scanner/NII Integration | Capital-intensive; depends on trade volume |
| CU-C15.5 MRA | Requires bilateral/plurilateral agreements |
| CU-C21.4 Big Data Analytics | Requires mature data infrastructure |

### 2.4.5 Capability-to-Function Matrix

| Function | Critical Capabilities | Important Capabilities | Advanced Capabilities |
|----------|----------------------|------------------------|----------------------|
| **Trade Facilitation** | CU-C10, CU-C9.1 | CU-C15, CU-C14, CU-C19 | CU-C17, CU-C15.5 |
| **Revenue Collection** | CU-C2, CU-C3, CU-C4, CU-C8, CU-C9 | CU-C5, CU-C11.8 | CU-C6.3 |
| **Border Protection** | CU-C6 | CU-C7, CU-C12, CU-C16 | CU-C7.2, CU-C18 |
| **Compliance Management** | CU-C6 | CU-C11, CU-C13 | CU-C6.3, CU-C21.4 |

---

# Section 3: Customs Application Architecture

## 3.1 Core Systems Landscape

### 3.1.1 System Categories Overview

Modern customs administrations operate through integrated application ecosystems. Based on analysis of ASYCUDA World, CDPS, and Single Window architectures, the following system categories form the foundation:

| Category | Purpose | Example Systems |
|----------|---------|-----------------|
| **Declaration Processing** | Handle import/export/transit declarations | ASYCUDA World, CDPS, NEBRAS, SOFIX |
| **Risk Management** | Risk assessment and selectivity | RMS, Selectivity Module |
| **Revenue/Payments** | Duty collection, accounting | Payment Gateway, Revenue Ledger |
| **Manifest/Cargo** | Track cargo movement | Manifest Management, Port Interface |
| **Single Window** | Multi-agency coordination | NSW Platform, Trade Portal |
| **Reference Data** | Tariff, codes, regulations | RDS, Integrated Tariff |
| **Business Intelligence** | Reporting and analytics | Data Warehouse, Dashboard |
| **Document Management** | Electronic document handling | EDMS, Archive System |
| **User/Security** | Authentication, authorization | UMS, Identity Management |
| **Post Clearance** | Audit and compliance | PCA System, Case Management |

### 3.1.2 Declaration Processing System

The Declaration Processing System is the operational core of any customs administration:

**Functional Modules:**

| Module | Functions | Key Features |
|--------|-----------|--------------|
| **SAD Processing** | Create, validate, register, assess declarations | Single Administrative Document with general + item segments |
| **Document Validation** | Verify declaration data completeness | Mandatory/optional field validation, code verification |
| **Assessment** | Calculate duties and taxes | Automatic calculation based on tariff rules |
| **Registration** | Assign declaration numbers | Unique reference generation, manifest linking |
| **Amendment** | Modify registered declarations | Controlled changes with audit trail |
| **Cancellation** | Void declarations | Workflow-controlled with reason codes |
| **Archival** | Long-term storage | Searchable historical records (10+ years) |

**Declaration Types:**

| Type | Regime | Processing Flow |
|------|--------|-----------------|
| **Import (IM)** | Home use, warehousing, inward processing, temporary admission | Pre-arrival → Lodgement → Validation → Risk → Selectivity → Examination → Assessment → Payment → Release |
| **Export (EX)** | Permanent export, outward processing, temporary export | Office of Dispatch → Validation → Loading → Exit Confirmation |
| **Transit (TR)** | National transit, international transit (TIR, T1) | Departure → En route control → Destination discharge |
| **Warehouse (WH)** | Customs warehousing, bonded storage | Entry → Storage management → Exit procedures |

**Declaration Lifecycle States:**

```
STORED → REGISTERED → ASSESSED → PAID → EXAMINED → RELEASED → ARCHIVED
                                          ↓
                                     CANCELLED
```

### 3.1.3 Risk/Selectivity System

The Risk Management System determines examination intensity based on configurable risk profiles:

**Selectivity Features:**

| Feature | Description | Configuration |
|---------|-------------|---------------|
| **Risk Profiles** | Predefined targeting rules | Companies, Agents, Countries, Commodities |
| **Selection Criteria** | Custom risk rules | Script-based criteria with variables and functions |
| **Processing Lanes** | Risk-based routing | Red/Yellow/Blue/Green channel assignment |
| **Workload Management** | Examiner allocation | Weight-based automatic assignment |
| **Random Selection** | Statistical sampling | Minimum random rates by lane |

**Risk Channel Configuration:**

| Channel | Criteria | Actions | Target Rate |
|---------|----------|---------|-------------|
| **Red** 🔴 | High risk indicators | Physical + documentary inspection | 5-10% |
| **Yellow** 🟡 | Medium risk indicators | Documentary examination only | 10-15% |
| **Blue** 🔵 | Post-clearance selection | Audit selection for PCA | 0-5% |
| **Green** 🟢 | Low/no risk | Auto-release after payment | 70-85% |

**Selection Criteria Syntax (ASYCUDA Example):**

```
Criteria "HighValueGoods";
If [VALUE > 50000 AND COUNTRY IN ('CN','HK')] then
    SetSectionColour(Red);
    MESSAGE("High value goods from risk country");
Endif;
```

---

## 3.2 Application Domain Mapping

### 3.2.1 GEATDM SDA Application Domain Alignment

Customs systems map to the GEATDM SDA Application Architecture as follows:

| Customs System | SDA App Domain | Domain ID | Description |
|----------------|----------------|-----------|-------------|
| Declaration Processing | Filing & Registration | A11 | Core transaction intake |
| Risk Management System | Risk Intelligence | A14 | Risk assessment platform |
| Selectivity Module | Risk Intelligence | A14 | Selection criteria engine |
| Payment Processing | Payments | A17 | Revenue collection |
| Accounting System | Revenue Management | A18 | Financial recording |
| Tariff Management | Reference Data | A09 | Tariff database |
| Manifest Management | Workflow & Operations | A19 | Cargo tracking |
| Trader Portal | Engagement Portal | A01 | External user interface |
| User Management | Security & Identity | A20 | Authentication/authorization |
| Document Management | Content Management | A21 | Electronic archive |
| Business Intelligence | Analytics & Reporting | A22 | Statistical analysis |
| Post Clearance Audit | Compliance Management | A15 | Audit case management |
| Valuation System | Assessment & Valuation | A12 | Customs value determination |
| Single Window | Integration Hub | A05 | Multi-agency coordination |

### 3.2.2 Single Window Architecture

Based on analysis of operational Single Window systems (Armenian NSW model), the following subsystem structure represents comprehensive customs integration:

| # | Subsystem | Description |
|---|-----------|-------------|
| 1 | Preliminary Information | Pre-arrival data submission, risk evaluation |
| 2 | Transit Declaration | Cross-border transit procedures |
| 3 | Payment Securities | Guarantee management for deferred obligations |
| 4 | Declaration of Customs Values | Online valuation submission |
| 5 | Declaration of Goods | Full customs declaration processing |
| 6 | Statistical Reporting | Trade statistics compilation |
| 7 | Export of Goods | Export confirmation and tracking |
| 8 | Preliminary Classification | HS classification rulings |
| 9 | Transportation Monitoring | Vehicle border crossing control |
| 10 | Other Government Agency Integration | Health, agriculture, standards, etc. |
| 11 | Postal Packages | International mail processing |
| 12 | Risk Management | Centralized risk assessment |
| 13 | Unified Documents Archive | Single document repository |
| 14 | User Management | Role-based access control |
| 15 | Information Directories | Reference data management |
| 16 | Centralized Payments | Revenue recording and monitoring |
| 17 | Reporting | Custom statistical reports |
| 18 | Rules Management | Business logic configuration |
| 19 | Partner Customs Data Exchange | International interoperability |

---

## 3.3 Integration Patterns

### 3.3.1 Internal Integration Architecture

| Source System | Target System | Integration Type | Data Flow |
|---------------|---------------|------------------|-----------|
| Declaration Processing | Risk Management | Real-time | Declaration data for screening |
| Declaration Processing | Tariff System | Synchronous | HS code lookup, duty rates |
| Declaration Processing | Valuation | Synchronous | Value calculation |
| Manifest Management | Declaration Processing | Event-driven | Manifest linking, write-off |
| Selectivity | Declaration Processing | Real-time | Channel assignment |
| Assessment | Payment | Asynchronous | Payment request |
| Payment | Release | Event-driven | Release trigger |
| All Operational | BI/Reporting | Batch | Statistical data |

### 3.3.2 External Integration Architecture

| External System | Integration Type | Data Exchanged | Protocol |
|-----------------|------------------|----------------|----------|
| Treasury/IFMIS | API | Revenue reporting, payments | REST/SOAP |
| Central Bank | API | Exchange rates | REST |
| Immigration | API | Passenger data, vehicle records | EDIFACT |
| Port Authority | File/API | Vessel schedules, cargo manifest | CUSCAR |
| Banks | API | Payment confirmation | ISO 20022 |
| Partner Customs | API/EDIFACT | Transit data, export confirmation | CUSDEC |
| OGAs | API | License/permit verification | REST |
| IRU | Web service | TIR Carnet validation | AMIRUDE |

### 3.3.3 Integration Standards

| Standard | Purpose | Application |
|----------|---------|-------------|
| **WCO Data Model v3.9.0** | Customs data elements | Declaration, manifest messages |
| **UN/EDIFACT** | Electronic data interchange | CUSCAR, CUSDEC, CUSRES |
| **ISO 20022** | Payment messaging | Bank payment integration |
| **REST/JSON** | Modern API integration | Primary external connectivity |
| **SOAP/XML** | Legacy system connectivity | Legacy system support |

### 3.3.4 Target Integration Architecture

The recommended integration architecture follows a hub-and-spoke model with a Government Service Bus:

```
                    ┌─────────────────────┐
                    │   TRADER PORTAL     │
                    │   (Single Window)   │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │   API GATEWAY       │
                    │   (Authentication,  │
                    │    Rate Limiting)   │
                    └──────────┬──────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        ▼                      ▼                      ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│   DECLARATION │    │     RISK      │    │   PAYMENT     │
│   PROCESSING  │◄──►│   MANAGEMENT  │◄──►│   GATEWAY     │
│   (ASYCUDA)   │    │    (RMS)      │    │   (GamPay)    │
└───────────────┘    └───────────────┘    └───────────────┘
        │                      │                      │
        └──────────────────────┼──────────────────────┘
                               │
                    ┌──────────▼──────────┐
                    │   GOVERNMENT        │
                    │   SERVICE BUS       │
                    │   (ESB/Integration) │
                    └──────────┬──────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        ▼                      ▼                      ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│   TREASURY/   │    │     OGA       │    │   PARTNER     │
│   IFMIS       │    │   AGENCIES    │    │   CUSTOMS     │
└───────────────┘    └───────────────┘    └───────────────┘
```

---

# Section 4: Customs Data Architecture

## 4.1 Data Domains

### 4.1.1 Customs Data Domain Model

Based on analysis of 14 API specifications from operational customs systems, the following data domain structure provides comprehensive customs data coverage:

| Domain ID | Domain Name | Entity Count | Description |
|-----------|-------------|--------------|-------------|
| CU-D1 | Customer/Trader | 8 | Traders, brokers, agents, organizations |
| CU-D2 | Declaration | 12 | Declarations, items, tariff quotas, FTAs |
| CU-D3 | Cargo/Manifest | 7 | Carriers, manifests, bills of lading |
| CU-D4 | Risk | 6 | Risk profiles, indicators, selectivity |
| CU-D5 | Inspection | 5 | Physical/documentary examinations |
| CU-D6 | Payment | 8 | Assessments, payments, accounting |
| CU-D7 | Reference/MDM | 15+ | Tariff, countries, currencies, codes |
| CU-D8 | License | 4 | Import/export licenses, acts |
| CU-D9 | Permit | 5 | Permits, consignee/consignor details |
| CU-D10 | Warehouse | 5 | Bonded warehouse, destruction |
| CU-D11 | Post Clearance Audit | 6 | Audit cases, reports, findings |
| CU-D12 | Free Zone | 4 | Free zone declarations, associations |
| CU-D13 | Gateway/Security | 5 | API config, auth, rate limiting |

**Total Entities Identified:** 90+

### 4.1.2 Core Domain Details

#### CU-D1: Customer/Trader Domain

| Entity | Description | Key Attributes |
|--------|-------------|----------------|
| Account | User authentication | UserId, Username, Token, SessionId |
| UserProfile | User identity and roles | ProfileId, Name, Email, Roles[], Permissions[] |
| Organization | Business entity | OrgId, Name, TIN, Address, Status, Type |
| Trader | Importer/Exporter | TraderId, TIN, Name, Type, Status, RegistrationDate |
| CustomsBroker | Licensed agent | BrokerId, LicenseNo, Status, ValidFrom, ValidTo |
| Declarant | Declaration submitter | DeclarantId, Name, Type, AuthorizationLevel |
| Department | Customs office/unit | DeptId, Name, Code, Type, ParentId |

**Key Business Rules:**
- Traders must have valid TIN (Tax Identification Number)
- Brokers require valid customs license
- Declarants must be authorized by trader
- Organizations can have multiple associated traders

#### CU-D2: Declaration Domain

| Entity | Description | Key Attributes |
|--------|-------------|----------------|
| Declaration | Customs declaration | DeclarationId, MRN, Type, Status, SubmissionDate, DeclarantId |
| DeclarationItem | Line item | ItemId, ItemNo, HSCode, Description, Value, Quantity, Weight |
| TariffLine | HS code details | TariffLineId, HSCode, Description, DutyRate, UOM |
| TariffQuota | Tariff rate quota | TRQId, QuotaNumber, Volume, UsedVolume, ValidFrom, ValidTo |
| FTAManagement | Free Trade Agreement | FTAId, AgreementName, Countries[], ValidFrom, ValidTo |
| Amendment | Declaration change | AmendmentId, DeclarationId, ChangeType, OldValue, NewValue |
| Cancellation | Voided declaration | CancellationId, DeclarationId, Reason, CancelledBy, CancelDate |

**Declaration Lifecycle:**
```
STORED → REGISTERED → ASSESSED → PAID → EXAMINED → RELEASED → ARCHIVED
                                          ↓
                                     CANCELLED
```

#### CU-D6: Payment Domain

| Entity | Description | Key Attributes |
|--------|-------------|----------------|
| Assessment | Duty calculation | AssessmentId, DeclarationId, TotalDuty, TotalTax, Currency |
| Payment | Payment transaction | PaymentId, AssessmentId, Amount, Method, Reference, Status |
| Receipt | Payment confirmation | ReceiptId, PaymentId, ReceiptNo, IssueDate |
| Refund | Duty refund | RefundId, PaymentId, Amount, Reason, Status |
| CollectionAccount | Revenue account | AccountId, AccountNo, BankId, AccountType, Status |
| PaymentChannel | Payment method | ChannelId, Type, Provider, Status |
| Guarantee | Security instrument | GuaranteeId, Type, Amount, ValidTo, Status |

**Payment Flow:**
```
Declaration → Assessment Calculation → Payment Request → 
Bank Payment → Confirmation → Receipt → Release
```

### 4.1.3 GEATDM SDA Data Domain Alignment

| Customs Domain | SDA Data Domain | Domain ID | Alignment |
|----------------|-----------------|-----------|-----------|
| Customer/Trader (CU-D1) | D10 - Customer | Direct | ✅ Full |
| Declaration (CU-D2) | D11 - Transaction | Direct | ✅ Full |
| Cargo/Manifest (CU-D3) | D11 - Transaction | Partial | ⚠️ Extend |
| Risk (CU-D4) | D12 - Risk | Direct | ✅ Full |
| Inspection (CU-D5) | D13 - Compliance | Partial | ⚠️ Extend |
| Payment (CU-D6) | D14 - Financial | Direct | ✅ Full |
| Reference/MDM (CU-D7) | D09 - Reference | Direct | ✅ Full |
| License (CU-D8) | D15 - Authorization | Map | ⚠️ New |
| Permit (CU-D9) | D15 - Authorization | Map | ⚠️ New |
| Warehouse (CU-D10) | D16 - Inventory | Map | ⚠️ New |
| PCA (CU-D11) | D13 - Compliance | Partial | ⚠️ Extend |
| Free Zone (CU-D12) | D17 - Special Regime | Map | ⚠️ New |
| Gateway (CU-D13) | D20 - Security | Direct | ✅ Full |

---

## 4.2 WCO Data Model Alignment

### 4.2.1 WCO Data Model v3.9.0 Structure

The WCO Data Model provides the international standard for customs data exchange:

| WCO Component | Description | Customs Application |
|---------------|-------------|---------------------|
| **Declaration** | Core declaration message structure | Import/export/transit declarations |
| **Goods Item** | Line item details | Declaration items |
| **Transport** | Means of transport | Carrier, vessel, vehicle details |
| **Commodity** | Goods classification | HS code, description |
| **Party** | Business entities | Trader, consignee, consignor |
| **Customs Procedure** | Procedure codes | CPC codes, regime indicators |
| **Document** | Supporting documents | Invoices, certificates, permits |
| **Location** | Geographic references | Ports, customs offices |
| **Packaging** | Package details | Package type, marks, numbers |
| **Measurement** | Quantities and weights | Gross/net weight, quantity |

### 4.2.2 Standard Message Types

| Message | WCO Code | UN/EDIFACT | Purpose |
|---------|----------|------------|---------|
| Customs Declaration | N/A | CUSDEC | Declaration submission |
| Customs Response | N/A | CUSRES | Status/decision notification |
| Cargo Report | N/A | CUSCAR | Manifest submission |
| Release Notification | N/A | CUSREP | Release instruction |
| Export Declaration | N/A | CUSEXP | Export goods declaration |
| Transit Declaration | N/A | CUSTRD | Transit movement |

### 4.2.3 Data Element Standards

| Category | WCO Standard | Example Elements |
|----------|--------------|------------------|
| **Identification** | WCO ID | Declaration MRN, trader TIN |
| **Classification** | HS Convention | 6-digit HS code, national extensions |
| **Valuation** | WTO Agreement | Transaction value, adjustments |
| **Origin** | RKC Annex K | Country of origin, preference code |
| **Procedure** | RKC | CPC code, regime indicator |
| **Location** | UN/LOCODE | Port code, customs office code |
| **Party** | WCO | Role code, identification |
| **Document** | WCO | Document type code, reference |

---

## 4.3 Master Data Management

### 4.3.1 Reference Data Categories

| Category | Source | Update Frequency | Examples |
|----------|--------|------------------|----------|
| **HS Codes** | WCO | Annual (January 1) | 6-digit HS, national extensions |
| **Tariff Rates** | National | As amended | Duty rates, VAT rates, excise |
| **Country Codes** | ISO 3166 | Rare | 2-letter, 3-letter codes |
| **Currency Codes** | ISO 4217 | Rare | 3-letter currency codes |
| **Exchange Rates** | Central Bank | Daily | Conversion rates |
| **Package Codes** | UN/ECE Rec 21 | Rare | Package type codes |
| **Transport Modes** | UN/LOCODE | Rare | Mode indicators |
| **Customs Offices** | National | As reorganized | Office codes and details |
| **CPC Codes** | National | As amended | Procedure codes |
| **Document Codes** | WCO | Periodic | Document type codes |

### 4.3.2 HS Code Structure

The Harmonized System provides hierarchical classification:

| Level | Digits | Description | Authority |
|-------|--------|-------------|-----------|
| Section | I-XXI | 21 standard sections | WCO |
| Chapter | 01-97 | 97 chapters (+ national) | WCO |
| Heading | 4 digits | Tariff heading | WCO |
| Subheading | 6 digits | International HS code | WCO |
| National | 8-10 digits | National tariff line | National |

### 4.3.3 Data Quality Requirements

| Dimension | Definition | Target | Measurement |
|-----------|------------|--------|-------------|
| **Completeness** | Required fields populated | >95% | Count null/total |
| **Accuracy** | Values match reality | >98% | Validation rules |
| **Consistency** | Same value across systems | >99% | Cross-reference |
| **Timeliness** | Data currency | <1 hour | Timestamp delta |
| **Uniqueness** | No duplicates | 100% | Dedup checks |
| **Validity** | Conforms to format | >99% | Format validation |

### 4.3.4 Key Data Quality Rules

```
Rule DQ-001: Declaration.MRN must be unique
Rule DQ-002: Declaration.TraderId must exist in Trader table
Rule DQ-003: DeclarationItem.HSCode must be valid in TariffLine
Rule DQ-004: Payment.Amount must equal Assessment.TotalDue
Rule DQ-005: BillOfLading.Weight must be positive
Rule DQ-006: ExchangeRate.Date must be current business day
Rule DQ-007: Guarantee.ValidTo must be future date
Rule DQ-008: Trader.TIN must conform to national format
```

### 4.3.5 Data Pipeline Architecture

For analytics and business intelligence, a medallion architecture is recommended:

| Layer | Schema Prefix | Purpose | Technology |
|-------|---------------|---------|------------|
| **Bronze/Raw** | `raw_` | Exact source copy | No transformation |
| **Silver/Staging** | `stg_` | Cleaned, deduplicated | CDC merged |
| **Gold/Transformed** | `core_`, `dim_`, `fct_` | Business logic, SCD2 | Star schema |
| **Data Marts** | `mart_` | Pre-aggregated | Domain-specific |

**Dimensional Model Entities:**
- `dim_trader` - Trader dimension (SCD2)
- `dim_hs_code` - HS code dimension
- `dim_country` - Country dimension
- `dim_customs_office` - Office dimension
- `dim_date` - Date dimension
- `fct_declaration` - Declaration fact
- `fct_payment` - Payment fact
- `fct_inspection` - Inspection fact
- `fct_risk_assessment` - Risk assessment fact

---

# Section 5: Customs Process Architecture

## 5.1 Core Processes

### 5.1.1 Process Category Summary

Based on analysis of operational customs administrations, the following process categories comprise comprehensive customs operations:

| Category | Process Count | Description |
|----------|---------------|-------------|
| **Import Clearance** | 12 | Processing of import declarations, temporary admission, e-commerce |
| **Export Clearance** | 6 | Export declarations, re-exportation, temporary exportation |
| **Transit** | 8 | Inward/outward transit, TIR Carnet, cabotage |
| **Risk Management** | 8 | Pre-arrival risk, on-site assessment, whistle-blower processing |
| **Logistics (Manifest/Cargo)** | 10 | Manifest processing, bill of lading, trans-shipment |
| **Control Processes** | 22 | Audit, inspection, fraud investigation, field audit |
| **Registration & Licensing** | 39 | Trader registration, broker licenses, AEO program |
| **Accounting & Payments** | 40 | Revenue accounting, guarantees, refunds, penalties |
| **Case Management** | 23 | Collection cases, objections, appeals, advance rulings |
| **Reporting & Inquiry** | 25 | Shipment tracking, declarations reports, exemptions |
| **Valuation & Tariff** | 6 | Goods valuation, tariff maintenance, quotas |
| **Goods Management** | 8 | Abandoned cargo, seizure, auction, destruction |
| **Infrastructure** | 11 | Portal registration, account management, authentication |

**Total Processes:** 223

### 5.1.2 Process Type Classification

| Type | Code | Description | Count |
|------|------|-------------|-------|
| **User-facing** | U | Business/operational processes | 212 |
| **Core** | C | Backend/infrastructure processes | 11 |

### 5.1.3 Process-Capability Mapping

| Process Domain | Primary Capability | Secondary Capabilities |
|----------------|-------------------|------------------------|
| Import Clearance | CU-C2 (Goods Declaration) | CU-C10 (Release) |
| Export Clearance | CU-C2 (Goods Declaration) | CU-C16 (Border Enforcement) |
| Transit | CU-C14 (Special Procedures) | CU-C9.4 (Guarantees) |
| Risk Management | CU-C6 (Risk Management) | CU-C13 (Compliance Risk) |
| Control Processes | CU-C7 (Inspection) | CU-C11 (Post Clearance Audit) |
| Registration | CU-C1 (Trader Registration) | CU-C15 (AEO) |
| Accounting | CU-C8 (Assessment) | CU-C9 (Payment) |
| Case Management | CU-C12 (Legal Proceedings) | CU-C11.7-8 (Audit Conclusion) |
| Valuation | CU-C4 (Customs Valuation) | CU-C3 (Classification) |
| Tariff | CU-C3 (Tariff Classification) | CU-C4 (Valuation) |

---

## 5.2 Import Clearance Flow

### 5.2.1 Standard Import Process

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│    MANIFEST     │     │   DECLARATION   │     │   VALIDATION    │
│    ARRIVAL      │────▶│   SUBMISSION    │────▶│   & RISK        │
│                 │     │                 │     │   ASSESSMENT    │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                         │
         ┌───────────────────────────────────────────────┼───────────────────────────────────────────────┐
         │                                               │                                               │
         ▼                                               ▼                                               ▼
┌─────────────────┐                             ┌─────────────────┐                             ┌─────────────────┐
│   GREEN LANE    │                             │   YELLOW LANE   │                             │    RED LANE     │
│   (Auto-Release)│                             │   (Doc Check)   │                             │   (Physical)    │
│    70-85%       │                             │    10-15%       │                             │     5-10%       │
└────────┬────────┘                             └────────┬────────┘                             └────────┬────────┘
         │                                               │                                               │
         │                                               ▼                                               ▼
         │                                      ┌─────────────────┐                             ┌─────────────────┐
         │                                      │   DOCUMENTARY   │                             │    PHYSICAL     │
         │                                      │   EXAMINATION   │                             │   INSPECTION    │
         │                                      └────────┬────────┘                             └────────┬────────┘
         │                                               │                                               │
         └───────────────────────────────────────────────┼───────────────────────────────────────────────┘
                                                         │
                                                         ▼
                                                ┌─────────────────┐
                                                │   ASSESSMENT    │
                                                │   & PAYMENT     │
                                                └────────┬────────┘
                                                         │
                                                         ▼
                                                ┌─────────────────┐
                                                │    RELEASE      │
                                                │   (Goods Exit)  │
                                                └─────────────────┘
```

### 5.2.2 Import Declaration Types

| Process ID | Process Name | Type | Component |
|------------|--------------|------|-----------|
| IMP-01 | Process import declaration for local market | U | Declaration Engine |
| IMP-02 | Process import declaration or temporary admission | U | Declaration Engine |
| IMP-03 | Process temporary admission under ATA Carnet | U | Declaration Engine |
| IMP-04 | Process import declaration for re-exportation | U | Declaration Engine |
| IMP-05 | Process import declaration for E-commerce (UPU) | U | Declaration Engine |
| IMP-06 | Process import declaration for single goods import – frequent cargo | U | Declaration Engine |
| IMP-07 | Process import declaration for goods leaving customs warehouse | U | Declaration Engine |
| IMP-08 | Process import declaration for goods leaving Free Zone | U | Declaration Engine |
| IMP-09 | Issue immediate release | U | Declaration Engine |
| IMP-10 | Process placement of goods in duty-free shops | U | Declaration Engine |

### 5.2.3 Import Supporting Processes

| Process | Description | Actors |
|---------|-------------|--------|
| Manifest Processing | Shipping line registers vessel and submits manifest | Shipping Line, Port |
| Bill of Lading Processing | Documentation of cargo ownership and transfer | Freight Forwarder, Carrier |
| Document Verification | Review of supporting documents (invoices, certificates) | Customs Officer |
| Valuation | Assessment of goods value for duty calculation | Valuation Unit |
| Tariff Classification | Assignment of HS codes to goods | Classification Unit |
| OGA Clearance | Coordination with quarantine, health, standards | Other Government Agencies |

---

## 5.3 Risk-Based Processing

### 5.3.1 Risk Management Framework

The risk-based processing model follows international standards (WCO RKC, WTO TFA, IMF CRM):

**Core Risk Management Processes:**

| Process ID | Process Name | Type | Component |
|------------|--------------|------|-----------|
| RSK-01 | Define the Audit/Fraud investigation strategy/KPI | U | Risk Management |
| RSK-02 | Amendment/re-prioritization of the audit strategy/KPI | U | Risk Management |
| RSK-03 | Pre arrival risk & targeting (integration with risk engine) | U | Risk Management |
| RSK-04 | On-site risk assessment — consignments without declaration | U | Risk Management |
| RSK-05 | On-site risk assessment — consignments with declaration | U | Risk Management |
| RSK-06 | Identify ineligible refund requests | U | Risk Management |
| RSK-07 | Process whistle-blower reports | U | Risk Management |
| RSK-08 | Process reports from OGAs | U | Risk Management |

### 5.3.2 Risk Channel Framework

| Channel | Description | Selection Criteria | Actions | Target % |
|---------|-------------|-------------------|---------|----------|
| **Green** 🟢 | Low risk | Clean trader history, compliant goods | Auto-release after payment | 70-85% |
| **Blue** 🔵 | Post-clearance selection | Random, sector audit, intelligence | Release now, audit later | 0-5% |
| **Yellow** 🟡 | Medium risk | Documentary discrepancies, new trader | Document verification before release | 10-15% |
| **Red** 🔴 | High risk | Risk indicators, intelligence, prohibited goods | Physical + documentary examination | 5-10% |

### 5.3.3 Risk Assessment Data Sources

| Source | Type | Integration | Use Case |
|--------|------|-------------|----------|
| Declaration Data | Internal | Real-time | Transaction screening |
| Trader History | Internal | Profile lookup | Compliance scoring |
| Intelligence Reports | Internal | Case management | Targeted operations |
| Whistle-blower Reports | External | Tip processing | Investigation leads |
| OGA Alerts | External | Agency exchange | Risk indicators |
| International Databases | External | WCO CEN, INTERPOL | Cross-border intelligence |
| Third-Party Data | External | Data feeds | Market prices, shipping data |

### 5.3.4 Compliance Pyramid Model

Based on IMF CRM Framework, traders are segmented into compliance categories with differentiated treatment:

```
                    ▲
                   /│\      DELIBERATE EVADERS
                  / │ \     (Criminal prosecution, investigation)
                 /  │  \
                /───┼───\   RESIST COMPLIANCE
               /    │    \  (Enforcement, penalties, audit)
              /     │     \
             /──────┼──────\ TRY TO COMPLY
            /       │       \(Facilitation, education, targeted support)
           /        │        \
          /─────────┼─────────\ WILLING TO COMPLY
         /          │          \(Simplified procedures, AEO, self-assessment)
        └───────────┴───────────┘
```

| Segment | Treatment Strategy | Interventions |
|---------|-------------------|---------------|
| **Willing to Comply** | Preventive | AEO programs, simplified procedures, self-assessment |
| **Try to Comply** | Facilitative | Education, guidance, targeted support, correction opportunity |
| **Resist Compliance** | Enforced (soft) | Penalties, mandatory audits, increased scrutiny |
| **Deliberate Evaders** | Enforced (hard) | Criminal prosecution, seizure, license revocation |

---

## 5.4 Process Metrics

### 5.4.1 Key Performance Indicators

| Process Area | KPI | Target | Measurement |
|--------------|-----|--------|-------------|
| Declaration to Release | Time | <24 hours | Average release time |
| Green Channel | Percentage | >60% | % declarations auto-released |
| Yellow Channel | Percentage | <25% | % declarations doc check |
| Red Channel | Percentage | <15% | % declarations physical inspection |
| Declaration Processing | Time | <4 hours | Electronic submission to assessment |
| Payment Processing | Time | <2 hours | Bill generation to confirmation |
| Refund Processing | Time | <30 days | Request to disbursement |
| Audit Case Closure | Time | <90 days | Case creation to closure |
| Risk Profile Update | Frequency | Daily | Profile refresh cycle |
| System Availability | Percentage | >99.5% | Uptime percentage |

### 5.4.2 WCO/WTO TFA Clearance Benchmarks

| Measure | Standard | Best Practice |
|---------|----------|---------------|
| Pre-arrival processing | Enabled | <1 hour assessment |
| Green channel release | <1 hour | <15 minutes |
| Yellow channel release | <4 hours | <2 hours |
| Red channel release | <24 hours | <8 hours |
| Post clearance audit selection | <30 days | <7 days |

### 5.4.3 Trade Facilitation Targets

| Indicator | Typical Current | Target |
|-----------|-----------------|--------|
| Average Release Time | 4-7 days | <2 days |
| Physical Inspection Rate | 30-50% | <15% |
| Documents Required | 8-12 | <6 |
| Agencies at Border | 8-15 | <5 (coordinated) |
| Electronic Declaration | 50-70% | >95% |

### 5.4.4 Compliance Management Metrics

| Metric | Target | Calculation |
|--------|--------|-------------|
| Registration Compliance | >99% | Active traders with valid registration / Total active traders |
| Filing Compliance | >95% | On-time declarations / Total declarations |
| Accuracy Compliance | <5% amendment | Amended declarations / Total declarations |
| Payment Compliance | >98% | On-time payments / Total payments due |
| PCA Coverage | 3-5% | Audited declarations / Total declarations |
| Audit Recovery Rate | 10-15% | Additional duty recovered / Audit costs |
| Risk Detection Rate | >30% | Violations detected in red channel / Red channel selections |
| False Positive Rate | <20% | No-finding examinations / Total examinations |

---

# Section 6: Building Blocks for Customs

## 6.1 GovStack Building Block Overview

The GovStack initiative provides a standardized approach to digital government infrastructure through reusable, interoperable Building Blocks (BBs). For customs administrations classified as Service Delivery Authorities (SDAs), these Building Blocks serve as the foundational digital public infrastructure enabling modern customs operations.

### 6.1.1 Building Block Definition

A Building Block is a software component that performs a common function used across multiple government services. Building Blocks are characterized by:

- **Interoperability**: Standardized interfaces enabling system-to-system communication
- **Reusability**: Shared services reducing duplication across government
- **Scalability**: Designed to handle enterprise-scale transaction volumes
- **Modularity**: Can be implemented incrementally based on priority

### 6.1.2 Building Block Architecture Principles

| Principle | Description | Customs Application |
|-----------|-------------|---------------------|
| **API-First Design** | All BBs expose standardized REST APIs | Single Window integration, G2G exchange |
| **Technology Agnostic** | Specifications, not implementations | Vendor flexibility for procurement |
| **Cloud-Ready** | Deployable on various infrastructure | National Data Center or cloud |
| **Security by Design** | Built-in authentication and encryption | Trader data protection, audit trails |
| **Event-Driven** | Asynchronous messaging support | Real-time notifications, status updates |

## 6.2 Priority Building Blocks for Customs

Based on the GEATDM SDA Reference Architecture, customs administrations require **nine mandatory Building Blocks** for full operational capability. These are prioritized as follows:

### 6.2.1 Critical Building Blocks (Tier 1)

#### Payments Building Block

**Criticality:** CRITICAL  
**Primary Use Cases:** Duty collection, refund disbursement, bond management

| Attribute | Requirement |
|-----------|-------------|
| Transaction Volume | Millions of payments annually |
| Response Time | Sub-second for posting confirmation |
| Channels | Bank portal, mobile money, counter payment |
| Reconciliation | Real-time with treasury systems |
| Settlement | Same-day or T+1 bank settlement |

**Functional Requirements:**
- Multi-channel payment acceptance (bank transfer, card, mobile money)
- Real-time duty account posting
- Automated reconciliation with IFMIS/Treasury
- Bond and guarantee management
- Refund processing and disbursement
- Payment schedule and installment support
- Multi-currency handling

**Integration Points:**
- ASYCUDA/Customs Management System (assessment feed)
- Banking partners (payment gateway)
- Treasury/IFMIS (reconciliation)
- Trader portal (payment initiation)
- Notification service (receipt delivery)

**Reference Implementation:** GamPay demonstrates successful API-based payment integration with customs systems, providing a model for extending to Government Service Bus architecture.

#### Information Mediator Building Block

**Criticality:** CRITICAL  
**Primary Use Cases:** Single Window hub, inter-agency exchange, WCO data sharing

| Attribute | Requirement |
|-----------|-------------|
| Data Volume | Terabytes of transaction data |
| API Calls | Millions of calls per day |
| Latency | Sub-second for synchronous calls |
| Availability | 99.9% uptime requirement |
| Security | End-to-end encryption, audit logging |

**Functional Requirements:**
- API gateway and management
- Message routing and transformation
- Protocol translation (REST, SOAP, EDI)
- Service discovery and registry
- Rate limiting and throttling
- Audit trail and logging
- Certificate-based authentication

**Integration Patterns:**
- **Single Window Integration**: Central hub connecting customs, port authority, health, agriculture, and other OGAs
- **G2G Exchange**: Government-to-government data sharing (IFMIS, tax authority, company registry)
- **International Exchange**: WCO CEN data exchange, bilateral customs agreements
- **B2G Integration**: Trader EDI submissions, shipping line manifests

### 6.2.2 High Priority Building Blocks (Tier 2)

#### Identity Building Block

**Criticality:** HIGH  
**Primary Use Cases:** Trader authentication, officer single sign-on, broker verification

**Functional Requirements:**
- Multi-factor authentication
- Single sign-on (SSO) federation
- Role-based access control (RBAC)
- Identity verification services
- Digital signature support
- Session management
- Audit logging of access

**Customs-Specific Applications:**
- Trader portal authentication
- Customs officer workstation access
- Broker license verification
- AEO status validation
- Mobile application authentication

#### Registration Building Block

**Criticality:** HIGH  
**Primary Use Cases:** Trader registration, declaration intake, license applications

**Functional Requirements:**
- Form definition and management
- Workflow-driven registration processes
- Document upload and verification
- Status tracking and notifications
- Integration with identity services
- Duplicate detection
- Registration certificate generation

**Customs Applications:**
- Importer/Exporter registration
- Customs broker licensing
- AEO certification applications
- Temporary importation permits
- Transit guarantee applications

#### Workflow Building Block

**Criticality:** HIGH  
**Primary Use Cases:** Declaration processing, case management, approval workflows

**Functional Requirements:**
- Process definition (BPMN 2.0)
- Task assignment and routing
- Escalation management
- SLA monitoring
- Parallel and sequential processing
- Exception handling
- Audit trail maintenance

**Customs Workflow Examples:**
- Import declaration processing (Green/Yellow/Red/Blue channels)
- Export declaration clearance
- Post-clearance audit case management
- Refund approval workflow
- License renewal processing
- Appeals handling

#### Digital Registries Building Block

**Criticality:** HIGH  
**Primary Use Cases:** Trader registry, tariff database, restriction lists

**Functional Requirements:**
- Master data management
- Version control and history
- Search and lookup services
- Bulk data operations
- Change notification events
- API-based access
- Data quality rules

**Customs Registry Applications:**
- Trader Master Registry (importers, exporters, brokers, agents)
- Harmonized System (HS) Tariff Database
- Country and Currency Reference Data
- Customs Offices and Ports Registry
- Prohibited and Restricted Goods Lists
- Exchange Rate Tables
- Duty Exemption Registers

### 6.2.3 Supporting Building Blocks (Tier 3)

#### Messaging Building Block

**Criticality:** MEDIUM  
**Primary Use Cases:** Release notifications, compliance alerts, filing confirmations

**Channels Supported:**
- Email notifications
- SMS alerts
- Push notifications (mobile app)
- In-portal notifications
- Webhook callbacks

**Customs Messaging Scenarios:**
- Declaration acceptance confirmation
- Assessment notification
- Release authorization
- Inspection assignment
- Payment receipt
- Compliance alerts and reminders
- AEO status updates

#### Scheduler Building Block

**Criticality:** MEDIUM  
**Primary Use Cases:** Batch processing, report generation, periodic reconciliation

**Functional Requirements:**
- Job scheduling (cron-style)
- Dependency management
- Retry and error handling
- Job monitoring and alerting
- Resource management
- Distributed execution

**Customs Batch Operations:**
- Nightly manifest reconciliation
- Periodic duty rate updates
- Automated report generation
- Risk profile refresh
- Data archival jobs
- Performance metrics aggregation

#### Consent Building Block

**Criticality:** MEDIUM  
**Primary Use Cases:** Data sharing consent, third-party access authorization

**Functional Requirements:**
- Consent collection and storage
- Consent scope management
- Revocation handling
- Audit trail of consent decisions
- Integration with data exchange services

**Customs Applications:**
- Third-party broker authorization
- Bank data access consent
- WCO data exchange agreements
- Research data access
- Trader data portability

## 6.3 Building Block Integration Patterns

### 6.3.1 Hub-and-Spoke Pattern (Single Window)

```
                    ┌─────────────────────┐
                    │   Information       │
                    │   Mediator BB       │
                    │   (Central Hub)     │
                    └──────────┬──────────┘
           ┌───────────────────┼───────────────────┐
           │                   │                   │
    ┌──────▼──────┐     ┌──────▼──────┐     ┌──────▼──────┐
    │   Customs   │     │    Port     │     │    OGAs     │
    │   System    │     │  Authority  │     │  (Health,   │
    │  (ASYCUDA)  │     │             │     │  Agric...)  │
    └─────────────┘     └─────────────┘     └─────────────┘
```

**Use Case:** Single Window integration connecting customs with all border agencies through a central hub.

### 6.3.2 Event-Driven Pattern (Notifications)

```
    ┌─────────────┐         ┌─────────────┐         ┌─────────────┐
    │   Customs   │ ──1──▶  │  Messaging  │ ──2──▶  │   Trader    │
    │   System    │ Event   │     BB      │ Notify  │   Portal    │
    └─────────────┘         └─────────────┘         └─────────────┘
                                   │
                                   │ 3
                                   ▼
                            ┌─────────────┐
                            │   SMS/Email │
                            │   Gateway   │
                            └─────────────┘
```

**Use Case:** Real-time notification delivery when declaration status changes (release, hold, inspection required).

### 6.3.3 Orchestrated Workflow Pattern

```
    ┌─────────────┐
    │  Workflow   │
    │     BB      │
    └──────┬──────┘
           │ Orchestrates
    ┌──────┼──────────────────┬─────────────────┐
    │      │                  │                 │
    ▼      ▼                  ▼                 ▼
┌───────┐ ┌───────┐      ┌───────┐        ┌───────┐
│Regist-│ │Digital│      │Payment│        │Messag-│
│ration │ │Regist-│      │  BB   │        │ing BB │
│  BB   │ │ries BB│      └───────┘        └───────┘
└───────┘ └───────┘
```

**Use Case:** Trader registration workflow that validates identity, creates registry entry, and sends confirmation.

## 6.4 Building Block to Capability Mapping

The following matrix shows how Building Blocks support key customs capabilities:

| Capability | Identity | Info Med | Messaging | Digital Reg | Workflow | Regist | Payments | Scheduler | Consent |
|------------|----------|----------|-----------|-------------|----------|--------|----------|-----------|---------|
| **CU-C1: Trader Registration** | ● | ○ | ○ | ● | ● | ● | | | ○ |
| **CU-C2: Goods Declaration** | ● | ○ | ○ | ● | ● | ● | | ○ | |
| **CU-C4: Valuation** | | ○ | | ● | ○ | | | | |
| **CU-C6: Risk Management** | | ● | | ● | ● | | | ○ | ● |
| **CU-C8: Duty Assessment** | | | | ● | ● | | ● | | |
| **CU-C9: Payment Processing** | ● | ○ | ○ | ● | ○ | | ● | | |
| **CU-C10: Release** | ● | ● | ● | ● | ● | | ● | | |
| **CU-C11: Post-Clearance Audit** | ● | | ○ | ● | ● | | | ● | ● |
| **CU-C14: Refunds** | ● | | ○ | ● | ● | ● | ● | | |
| **CU-C15: AEO Program** | ● | | ○ | ● | ● | ● | | | |
| **CU-C19: Single Window** | ● | ● | ● | | | ● | ● | | |
| **CU-C20: International Cooperation** | | ● | | ● | ● | | | | ● |

**Legend:** ● = Primary dependency, ○ = Secondary/optional dependency

## 6.5 Building Block Implementation Sequencing

Based on dependencies and customs operational priorities:

| Phase | Duration | Building Blocks | Dependencies | Quick Wins |
|-------|----------|-----------------|--------------|------------|
| **Phase 1: Foundation** | 0-6 months | Payments BB, Identity BB | None (foundational) | GamPay operationalization, SSO |
| **Phase 2: Integration** | 6-18 months | Information Mediator BB, Registration BB | Phase 1 complete | GSB pilot, e-Registration |
| **Phase 3: Operations** | 12-24 months | Workflow BB, Digital Registries BB | Phase 2 complete | Declaration workflow, MDM |
| **Phase 4: Enhancement** | 18-36 months | Messaging BB, Scheduler BB, Consent BB | Phase 3 complete | Notifications, batch operations |

---

# Section 7: GEATDM Application for Customs

## 7.1 DISCOVER Phase Guidance

### 7.1.1 Phase Overview

**Purpose:** Establish organizational classification and digital public infrastructure readiness  
**Duration:** 1-2 weeks  
**Key Decision:** Confirm customs authority classification as SDA

### 7.1.2 Classification Confirmation

Customs authorities are definitively classified as **Service Delivery Authorities (SDAs)** based on:

| Indicator | Customs Evidence | Classification Impact |
|-----------|------------------|----------------------|
| Mass service delivery | Millions of import/export declarations | Confirms SDA |
| Customer base >100,000 | Thousands of traders, brokers, agents | Confirms SDA |
| Transactions >100,000/year | Continuous high-volume processing | Confirms SDA |
| Real-time processing | Border release decisions | Confirms SDA |
| Revenue collection | Duty and tax collection at scale | Confirms SDA |
| Customer accounts | Trader duty ledgers, bonds | Confirms SDA |
| Multi-channel delivery | Portal, EDI, mobile, border offices | Confirms SDA |

### 7.1.3 DPI Readiness Assessment

Assess national digital public infrastructure across five pillars:

| Pillar | Assessment Questions | Customs Impact |
|--------|---------------------|----------------|
| **Identity** | National ID system? Digital identity infrastructure? | Trader authentication |
| **Payments** | Digital payment systems? Government payment gateway? | Duty collection |
| **Data Exchange** | Government interoperability framework? APIs available? | Single Window |
| **Registries** | Central business registry? Reference data standards? | Trader registration |
| **Consent** | Data protection legislation? Consent framework? | Third-party data sharing |

### 7.1.4 DISCOVER Toolkit Items

| Tool ID | Tool Name | Application |
|---------|-----------|-------------|
| TK-01 | Classification Questionnaire | Confirm SDA classification |
| TK-02 | Classification Decision Tree | Document classification rationale |
| TK-03 | DPI Readiness Checklist | Assess national infrastructure |
| TK-04 | DISCOVER Summary Template | Document findings |
| TK-05 | Organization Profile Worksheet | Capture customs context |

### 7.1.5 DISCOVER Deliverables

1. **Organization Classification Record** - Documented SDA classification with evidence
2. **DPI Readiness Assessment** - Five-pillar assessment with gap identification
3. **Selected Reference Architecture** - SDA Reference Architecture confirmation
4. **DISCOVER Summary** - Executive summary with stakeholder approval

## 7.2 ASSESS Phase Guidance

### 7.2.1 Phase Overview

**Purpose:** Document current state (AS-IS) architecture and identify gaps against SDA Reference Architecture  
**Duration:** 4-8 weeks (depending on organization complexity)  
**Key Output:** Gap Analysis Report with prioritized improvement register

### 7.2.2 AS-IS Documentation Framework

Document current state across BDAT domains using the following structure:

**Business Architecture:**
- Current customs services and procedures catalog
- Organizational structure and responsibilities
- Stakeholder ecosystem mapping
- Key performance indicators (current state)

**Data Architecture:**
- Data entity inventory (declarations, traders, tariffs, etc.)
- Data flows between systems
- Data quality assessment
- Master data management status

**Application Architecture:**
- System inventory (ASYCUDA, Single Window, etc.)
- Integration architecture (current state)
- Technology stack assessment
- Technical debt identification

**Technology Architecture:**
- Infrastructure inventory (servers, networks, storage)
- Security architecture
- Disaster recovery capabilities
- Capacity and performance baselines

### 7.2.3 Gap Analysis Methodology

Compare AS-IS state against SDA Reference Architecture:

| Gap Category | Assessment Approach | Priority Criteria |
|--------------|---------------------|-------------------|
| **Capability Gaps** | Map current capabilities to 34 L1/221 L2 reference | Revenue impact, compliance risk |
| **Application Gaps** | Map systems to 16 application domains | Operational criticality |
| **Data Gaps** | Compare to 14 data domains | Decision support impact |
| **Integration Gaps** | Assess BB readiness | Service delivery impact |

**Gap Prioritization Framework:**

| Priority | Definition | Action Timeline |
|----------|------------|-----------------|
| **Must Have** | Critical for core operations, regulatory compliance | Phase 1 (0-12 months) |
| **Should Have** | Important for efficiency, service quality | Phase 2 (12-24 months) |
| **Could Have** | Desirable for optimization, innovation | Phase 3 (24-36 months) |
| **Won't Have** | Not applicable or not feasible | Document rationale |

### 7.2.4 ASSESS Toolkit Items

| Tool ID | Tool Name | Application |
|---------|-----------|-------------|
| TK-06 | Service Catalog Template | Document customs procedures |
| TK-07 | Application Inventory Template | System inventory |
| TK-08 | Data Inventory Template | Data entity catalog |
| TK-09 | Technology Assessment Template | Infrastructure assessment |
| TK-10 | Gap Analysis Worksheet | Systematic gap identification |
| TK-11 | ASSESS Summary Template | Phase summary document |
| TK-26 | Capability Mapping Template | Capability coverage analysis |
| TK-27 | Building Block Assessment | BB readiness evaluation |

### 7.2.5 ASSESS Deliverables

1. **AS-IS Architecture Document** - Comprehensive BDAT documentation
2. **Gap Analysis Report** - Detailed gap identification with evidence
3. **Prioritized Gap Register** - Must/Should/Could categorization
4. **ASSESS Summary** - Executive summary with approval

## 7.3 ADAPT Phase Guidance

### 7.3.1 Phase Overview

**Purpose:** Tailor the SDA Reference Architecture to customs context and create TO-BE target architecture  
**Duration:** 4-8 weeks  
**Key Output:** TO-BE Architecture Document with tailoring decisions

### 7.3.2 Tailoring Approach

**Adaptation Scope Options:**

| Scope | Definition | When to Use |
|-------|------------|-------------|
| **Minimal** | Accept RA with minor terminology changes | Greenfield implementation |
| **Moderate** | Adapt 20-40% of capabilities/applications | Modernization of legacy systems |
| **Extensive** | Significant adaptation (>40%) | Unique regulatory environment |

**Tailoring Decision Categories:**

| Category | Decision Type | Documentation Required |
|----------|---------------|----------------------|
| **Adopt** | Accept RA element as-is | None |
| **Adapt** | Modify RA element for context | Adaptation rationale |
| **Extend** | Add capability beyond RA | Extension justification |
| **Defer** | Accept but implement later | Deferral timeline |
| **Exclude** | Not applicable to context | Exclusion rationale |

### 7.3.3 Capability Tailoring

For each of the 34 L1 capabilities in the SDA Reference Architecture:

1. **Review** the capability definition and L2 sub-capabilities
2. **Assess** applicability to customs operations
3. **Decide** adoption, adaptation, extension, deferral, or exclusion
4. **Document** rationale in Tailoring Decision Log

**Customs-Specific Capability Adaptations:**

| SDA Capability | Customs Adaptation | Rationale |
|----------------|-------------------|-----------|
| C4.2 Filing Management | Declaration Management | Customs-specific terminology |
| C4.3 Payment Processing | Duty Collection | Includes bonds, guarantees |
| C4.4 Refund Processing | Drawback Processing | Trade-specific refund types |
| C4.7 Compliance Management | Risk-Based Targeting | Selectivity algorithms |
| C4.12 International Cooperation | WCO Data Exchange | Customs-specific protocols |

### 7.3.4 Application Mapping

Map current systems to SDA application domains and determine build/buy/reuse strategy:

| Decision | Criteria | Examples |
|----------|----------|----------|
| **Keep** | Adequate functionality, acceptable technical debt | ASYCUDA core |
| **Enhance** | Good foundation, needs modernization | Add APIs to legacy |
| **Replace** | Critical gaps, high technical debt | End-of-life systems |
| **Integrate** | Connect existing with new via BB | ASYCUDA + GamPay |
| **Procure** | New capability, buy vs build decision | Risk analytics platform |

### 7.3.5 ADAPT Toolkit Items

| Tool ID | Tool Name | Application |
|---------|-----------|-------------|
| TK-12 | TO-BE Architecture Template | Target state documentation |
| TK-13 | Tailoring Decision Log | Document all tailoring decisions |
| TK-14 | Capability Adaptation Worksheet | Capability-level decisions |
| TK-15 | Application Mapping Worksheet | System-level decisions |
| TK-28 | DPI Integration Specification | Building Block integration design |

### 7.3.6 ADAPT Deliverables

1. **TO-BE Architecture Document** - Target state BDAT architecture
2. **Tailoring Decision Log** - Complete record of all decisions
3. **Transition Requirements** - AS-IS to TO-BE migration needs
4. **ADAPT Summary** - Executive summary with approval

## 7.4 PLAN Phase Guidance

### 7.4.1 Phase Overview

**Purpose:** Develop actionable implementation roadmap with business case justification  
**Duration:** 2-4 weeks  
**Key Output:** Implementation Roadmap and Business Case

### 7.4.2 Implementation Approach Options

| Approach | Description | When to Use | Risk Level |
|----------|-------------|-------------|------------|
| **Big Bang** | Replace all systems simultaneously | Rarely recommended | High |
| **Phased** | Sequential implementation by domain | Most common for customs | Medium |
| **Incremental** | Progressive enhancement of existing | Limited budget/capacity | Low |
| **Parallel** | Run old and new concurrently | High-risk operations | Medium |

**Recommended Approach for Customs:** Phased implementation with quick wins in early phases to demonstrate value and build momentum.

### 7.4.3 Initiative Sequencing

Sequence implementation based on:

| Factor | Weight | Assessment Method |
|--------|--------|-------------------|
| **Dependency** | Critical | Cannot proceed without prerequisite |
| **Value** | High | Revenue impact, efficiency gains |
| **Complexity** | Medium | Technical difficulty, change management |
| **Risk** | Medium | Operational disruption, implementation risk |
| **Readiness** | Medium | Organizational and technical readiness |

### 7.4.4 Business Case Development

**Cost Categories:**
- Software (licenses, development, customization)
- Hardware (infrastructure, devices)
- Implementation services (consulting, integration)
- Training and change management
- Ongoing operations and maintenance

**Benefit Categories:**
- Revenue enhancement (improved compliance, reduced fraud)
- Cost reduction (automation, efficiency)
- Service improvement (faster clearance, trader satisfaction)
- Risk reduction (better targeting, reduced errors)
- Strategic value (modernization, regional leadership)

**ROI Calculation Framework:**

```
ROI = (Total Benefits - Total Costs) / Total Costs × 100%

Payback Period = Total Investment / Annual Net Benefits
```

### 7.4.5 PLAN Toolkit Items

| Tool ID | Tool Name | Application |
|---------|-----------|-------------|
| TK-16 | Implementation Roadmap Template | Multi-year visual roadmap |
| TK-17 | Business Case Template | Investment justification |
| TK-18 | Phase Definition Template | Phase scope and milestones |
| TK-19 | Risk Register Template | Implementation risks |
| TK-20 | Resource Estimation Template | Effort and cost estimates |

### 7.4.6 PLAN Deliverables

1. **Implementation Roadmap** - Visual multi-year plan with phases
2. **Business Case** - Cost-benefit analysis with ROI
3. **Phase Definitions** - Detailed scope for each phase
4. **Resource Plan** - Staffing and budget requirements
5. **Risk Register** - Implementation risks and mitigations
6. **Governance Framework** - Decision-making structure

## 7.5 EXECUTE Phase Guidance

### 7.5.1 Phase Overview

**Purpose:** Implement the architecture and maintain alignment through ongoing governance  
**Duration:** Ongoing (multi-year continuous operation)  
**Key Output:** Implemented architecture with governance compliance

### 7.5.2 Architecture Governance

**Architecture Board Structure:**

| Role | Responsibility | Meeting Frequency |
|------|----------------|-------------------|
| **Architecture Board** | Strategic decisions, policy approval | Monthly |
| **Technical Review Committee** | Solution design review | Weekly |
| **Change Advisory Board** | Change approval, coordination | Weekly |
| **Project Architects** | Implementation guidance | Daily |

**Governance Activities:**

| Activity | Frequency | Output |
|----------|-----------|--------|
| Architecture Review | Per project | Review report, recommendations |
| Compliance Assessment | Quarterly | Compliance scorecard |
| Dispensation Review | As needed | Approved exceptions |
| Standards Update | Annual | Updated standards document |
| EA Effectiveness Review | Annual | KPI report, improvement plan |

### 7.5.3 Solution Design Review

All new projects must undergo architecture review:

**Review Criteria:**
- Alignment with TO-BE architecture
- Building Block utilization
- Integration pattern compliance
- Data standards adherence
- Security requirements
- Scalability and performance
- Vendor/technology selection

**Review Outcomes:**
- **Approved** - Proceed with implementation
- **Conditional** - Proceed with documented conditions
- **Rejected** - Redesign required

### 7.5.4 Dispensation Management

When projects cannot fully comply with architecture standards:

1. **Request** - Project submits dispensation request with justification
2. **Review** - Architecture Board evaluates impact and alternatives
3. **Decision** - Approve (temporary or permanent), approve with conditions, or reject
4. **Monitor** - Track dispensation expiry and compliance plan
5. **Remediate** - Ensure remediation before dispensation expires

### 7.5.5 EXECUTE Toolkit Items

| Tool ID | Tool Name | Application |
|---------|-----------|-------------|
| TK-21 | Project EA Engagement Checklist | Project onboarding |
| TK-22 | Architecture Compliance Assessment | Solution review |
| TK-23 | Dispensation Request Form | Exception management |
| TK-24 | EA Status Report Template | Progress reporting |
| TK-25 | Architecture Review Checklist | Design review guide |

### 7.5.6 EA Effectiveness Metrics

| Metric Category | KPIs | Target |
|-----------------|------|--------|
| **Compliance** | % solutions aligned with architecture | >90% |
| **Reuse** | % Building Block utilization | >80% |
| **Quality** | Architecture review defect rate | <10% |
| **Velocity** | Time from request to architecture approval | <2 weeks |
| **Value** | Business benefits realized vs. planned | >85% |

---

# Section 8: Customs Quick Wins

## 8.1 Quick Win Definition

Quick wins are improvements that can be delivered within 3-6 months with limited investment, demonstrating immediate value while building momentum for larger transformation initiatives.

**Quick Win Criteria:**
- Deliverable in 3-6 months
- Limited budget requirement (<$100K typically)
- Low complexity and risk
- Visible impact to stakeholders
- Foundation for subsequent phases

## 8.2 Quick Win Catalog

### 8.2.1 Revenue and Payments Quick Wins

| ID | Quick Win | Timeline | Dependencies | Investment | Expected ROI |
|----|-----------|----------|--------------|------------|--------------|
| QW-01 | **GamPay Full Operationalization** | 3 months | Existing pilot | $50K | 15-20% collection efficiency |
| QW-02 | **Multi-Bank Payment Channels** | 6 months | QW-01 | $75K | 25% trader convenience |
| QW-03 | **Automated Reconciliation** | 4 months | QW-01 | $40K | 80% reduction in reconciliation effort |
| QW-04 | **Real-Time Duty Account Posting** | 3 months | QW-01 | $30K | Immediate revenue visibility |
| QW-05 | **Mobile Payment Option** | 6 months | QW-01 | $60K | 10% increase in on-time payment |

### 8.2.2 Service Delivery Quick Wins

| ID | Quick Win | Timeline | Dependencies | Investment | Expected ROI |
|----|-----------|----------|--------------|------------|--------------|
| QW-06 | **Trader Self-Service Portal Enhancement** | 4 months | Existing portal | $45K | 30% reduction in inquiries |
| QW-07 | **Declaration Status Tracking** | 3 months | ASYCUDA integration | $25K | Improved trader satisfaction |
| QW-08 | **SMS/Email Notifications** | 3 months | Messaging infrastructure | $20K | 50% reduction in status inquiries |
| QW-09 | **Online Tariff Lookup** | 4 months | Tariff database | $35K | Self-service classification |
| QW-10 | **Electronic Document Submission** | 6 months | Portal enhancement | $55K | 40% reduction in paper handling |

### 8.2.3 Risk Management Quick Wins

| ID | Quick Win | Timeline | Dependencies | Investment | Expected ROI |
|----|-----------|----------|--------------|------------|--------------|
| QW-11 | **Risk Profile Dashboard** | 3 months | ASYCUDA data access | $30K | Improved targeting visibility |
| QW-12 | **Automated Selectivity Reports** | 2 months | Selectivity module | $15K | Daily operational intelligence |
| QW-13 | **High-Risk Trader Watch List** | 3 months | Compliance database | $25K | Focused enforcement |
| QW-14 | **Basic Compliance Scorecard** | 4 months | Trader history data | $40K | Systematic risk assessment |
| QW-15 | **Mirror Data Analysis (Pilot)** | 6 months | WCO CCES access | $50K | Valuation fraud detection |

### 8.2.4 Operational Efficiency Quick Wins

| ID | Quick Win | Timeline | Dependencies | Investment | Expected ROI |
|----|-----------|----------|--------------|------------|--------------|
| QW-16 | **Standardized Inspection Checklists** | 2 months | Mobile devices | $15K | Consistent inspection quality |
| QW-17 | **Digital Work Assignment** | 4 months | Workflow system | $35K | Balanced workload distribution |
| QW-18 | **Automated Performance Reports** | 3 months | Data warehouse | $25K | Management visibility |
| QW-19 | **Officer Single Sign-On** | 4 months | Identity infrastructure | $40K | Reduced login time, security |
| QW-20 | **Centralized Document Repository** | 5 months | Document management | $45K | Document retrieval efficiency |

## 8.3 Quick Win Implementation Approach

### 8.3.1 Phased Delivery

**Phase 1 (Months 1-3): Foundation Quick Wins**
- QW-01: GamPay Full Operationalization (anchor initiative)
- QW-04: Real-Time Duty Account Posting
- QW-07: Declaration Status Tracking
- QW-08: SMS/Email Notifications
- QW-11: Risk Profile Dashboard

**Phase 2 (Months 4-6): Enhancement Quick Wins**
- QW-02: Multi-Bank Payment Channels
- QW-03: Automated Reconciliation
- QW-06: Trader Self-Service Portal Enhancement
- QW-14: Basic Compliance Scorecard
- QW-19: Officer Single Sign-On

### 8.3.2 Dependencies Map

```
QW-01 (GamPay)
    ├── QW-02 (Multi-Bank)
    ├── QW-03 (Reconciliation)
    ├── QW-04 (Real-Time Posting)
    └── QW-05 (Mobile Payment)

QW-06 (Portal)
    ├── QW-07 (Status Tracking)
    ├── QW-09 (Tariff Lookup)
    └── QW-10 (Document Submission)

QW-11 (Dashboard)
    ├── QW-12 (Selectivity Reports)
    ├── QW-13 (Watch List)
    └── QW-14 (Compliance Scorecard)
```

## 8.4 ROI Indicators

### 8.4.1 Revenue Impact Indicators

| Indicator | Baseline | Quick Win Target | Measurement |
|-----------|----------|------------------|-------------|
| Collection efficiency | 85% | 95% | Revenue collected / assessed |
| On-time payment rate | 75% | 90% | Payments by due date |
| Reconciliation time | 5 days | 1 day | Days to reconcile payments |
| Revenue leakage | 5-10% | <3% | Identified under-declarations |

### 8.4.2 Service Quality Indicators

| Indicator | Baseline | Quick Win Target | Measurement |
|-----------|----------|------------------|-------------|
| Average clearance time | 72 hours | 24 hours | Declaration to release |
| Green channel rate | 40% | 60% | Declarations without intervention |
| Status inquiries | 500/day | 250/day | Help desk calls |
| Trader satisfaction | 60% | 80% | Survey scores |

### 8.4.3 Operational Efficiency Indicators

| Indicator | Baseline | Quick Win Target | Measurement |
|-----------|----------|------------------|-------------|
| Paper documents | 10/declaration | 2/declaration | Physical documents handled |
| Manual data entry | 60% | 30% | Data entered manually |
| Report generation time | 2 days | 2 hours | Time to produce reports |
| System availability | 95% | 99% | Uptime percentage |

---

# Section 9: Input Document Checklist

## 9.1 Expected _as-is/ Documents

Documents required to assess current state architecture:

### 9.1.1 Business Architecture Documents

| Document Type | Purpose | Priority | Example |
|---------------|---------|----------|---------|
| **Organizational Charts** | Understand reporting structure | Critical | GRA/Customs Department org chart |
| **Service Catalogs** | Inventory of customs procedures | Critical | List of all customs clearance procedures |
| **Process Maps** | Detailed process flows | High | Import declaration processing flowchart |
| **Policy Documents** | Current regulations and policies | High | Customs Act, Procedural Manuals |
| **Performance Reports** | Baseline KPIs | High | Annual customs statistics |
| **Strategic Plans** | Organizational direction | Medium | GRA Strategic Plan |
| **Audit Reports** | Independent assessments | Medium | IMF/WCO diagnostic reports |

### 9.1.2 Application Architecture Documents

| Document Type | Purpose | Priority | Example |
|---------------|---------|----------|---------|
| **System Inventory** | List all applications | Critical | IT asset register |
| **System Documentation** | Technical specifications | Critical | ASYCUDA technical manual |
| **Integration Documentation** | Current interfaces | Critical | API specifications, data flows |
| **User Guides** | Functional understanding | High | ASYCUDA user manual |
| **System Diagrams** | Architecture visualization | High | Network topology, deployment diagrams |
| **Vendor Contracts** | Licensing and support | Medium | ASYCUDA license agreement |

### 9.1.3 Data Architecture Documents

| Document Type | Purpose | Priority | Example |
|---------------|---------|----------|---------|
| **Data Dictionaries** | Entity definitions | Critical | ASYCUDA data dictionary |
| **Database Schemas** | Technical data structure | High | ERD diagrams |
| **Data Flow Diagrams** | Data movement mapping | High | Declaration data flows |
| **Data Quality Reports** | Current data quality | Medium | Data completeness analysis |
| **Master Data Catalogs** | Reference data inventory | Medium | HS code lists, country codes |

### 9.1.4 Technology Architecture Documents

| Document Type | Purpose | Priority | Example |
|---------------|---------|----------|---------|
| **Infrastructure Inventory** | Hardware and network assets | Critical | Server inventory, network diagrams |
| **Security Documentation** | Security architecture | Critical | Security policy, penetration test reports |
| **Disaster Recovery Plans** | Business continuity | High | DR documentation |
| **Capacity Reports** | Performance baselines | Medium | System performance reports |
| **Vendor Assessments** | Technology roadmaps | Medium | ASYCUDA upgrade path |

## 9.2 Expected _international/ Documents

International standards and best practice references:

### 9.2.1 WCO Standards

| Document | Purpose | Priority |
|----------|---------|----------|
| **Revised Kyoto Convention** | International customs standards | Critical |
| **WCO Data Model v3.9.0** | Data standards for customs | Critical |
| **SAFE Framework** | Supply chain security standards | High |
| **AEO Guidelines** | Authorized trader programs | High |
| **Risk Management Compendium** | Risk-based processing | High |
| **Time Release Study Guide** | Performance measurement | Medium |
| **Single Window Guidelines** | Single Window implementation | Medium |

### 9.2.2 WTO Standards

| Document | Purpose | Priority |
|----------|---------|----------|
| **Trade Facilitation Agreement** | TFA implementation requirements | Critical |
| **TFA Implementation Guide** | Practical TFA guidance | High |
| **National Committee Guidelines** | TFA governance | Medium |

### 9.2.3 IMF/OECD Guidance

| Document | Purpose | Priority |
|----------|---------|----------|
| **CRM Framework (TNM/2022/005)** | Compliance risk management | Critical |
| **Essential Analytics for CRM** | Analytics capabilities | High |
| **Generative AI for CRM** | AI implementation guidance | Medium |
| **Understanding AI in Tax and Customs** | AI policy framework | Medium |
| **Developing CIPs** | Compliance improvement plans | High |
| **OECD Tax Administration 3.0** | Digital transformation vision | Medium |

### 9.2.4 Regional Standards

| Document | Purpose | Priority |
|----------|---------|----------|
| **ECOWAS Customs Code** | Regional harmonization | High |
| **AfCFTA Trade Protocol** | Continental trade facilitation | Medium |
| **Regional Transit Procedures** | Cross-border operations | Medium |

## 9.3 Expected _practical-experience/ Assets

Practical implementation references:

### 9.3.1 System Documentation

| Asset Type | Purpose | Example Sources |
|------------|---------|-----------------|
| **Functional Specifications** | System capabilities | ASYCUDA, NEBRAS, SOFIX documentation |
| **Technical Architecture** | Implementation patterns | Single Window technical specifications |
| **API Specifications** | Integration patterns | OpenAPI/Swagger files |
| **User Interface Mockups** | UX patterns | Portal design documents |

### 9.3.2 Implementation Case Studies

| Asset Type | Purpose | Example Sources |
|------------|---------|-----------------|
| **Project Documentation** | Lessons learned | Similar customs modernization projects |
| **Assessment Reports** | Benchmark comparisons | IMF diagnostic reports from other countries |
| **Benefits Realization Reports** | ROI evidence | Post-implementation reviews |

### 9.3.3 Reference Implementations

| Asset Type | Purpose | Example Sources |
|------------|---------|-----------------|
| **Capability Models** | Domain expertise | Tax/customs capability frameworks |
| **Data Models** | Entity patterns | Industry data models |
| **Process Libraries** | Best practice processes | Process documentation from mature administrations |

## 9.4 Document Completeness Assessment

| Category | Minimum Required | Ideal State | Assessment |
|----------|------------------|-------------|------------|
| **Business AS-IS** | Org chart, service catalog, 3 process maps | Full BDAT documentation | ☐ Complete ☐ Partial ☐ Missing |
| **Application AS-IS** | System inventory, key system docs, integration map | Complete system landscape | ☐ Complete ☐ Partial ☐ Missing |
| **Data AS-IS** | Data dictionary, key schemas | Full data catalog | ☐ Complete ☐ Partial ☐ Missing |
| **Technology AS-IS** | Infrastructure inventory, security docs | Complete tech stack | ☐ Complete ☐ Partial ☐ Missing |
| **International Standards** | RKC, TFA, CRM Framework | Full standards library | ☐ Complete ☐ Partial ☐ Missing |
| **Practical Experience** | 3+ system references | Comprehensive patterns library | ☐ Complete ☐ Partial ☐ Missing |

---

# Section 10: Reference Tables

## 10.1 HS Code Structure

The Harmonized System (HS) provides the international standard for classifying traded products.

### 10.1.1 HS Code Hierarchy

| Level | Digits | Description | Example |
|-------|--------|-------------|---------|
| **Section** | Roman I-XXI | 21 broad categories | Section XI: Textiles |
| **Chapter** | 2 digits | 99 chapters | 62: Articles of apparel |
| **Heading** | 4 digits | Product groups | 6203: Men's suits, jackets |
| **Subheading** | 6 digits | International standard | 6203.11: Men's suits, wool |
| **National** | 8+ digits | Country-specific | 6203.11.10.00: Specific classification |

### 10.1.2 HS Sections

| Section | Description | Chapters |
|---------|-------------|----------|
| I | Live animals, animal products | 01-05 |
| II | Vegetable products | 06-14 |
| III | Fats and oils | 15 |
| IV | Food, beverages, tobacco | 16-24 |
| V | Mineral products | 25-27 |
| VI | Chemical products | 28-38 |
| VII | Plastics and rubber | 39-40 |
| VIII | Leather and skins | 41-43 |
| IX | Wood and wood products | 44-46 |
| X | Paper and pulp | 47-49 |
| XI | Textiles and textile articles | 50-63 |
| XII | Footwear, headgear | 64-67 |
| XIII | Stone, ceramic, glass | 68-70 |
| XIV | Precious metals, jewelry | 71 |
| XV | Base metals | 72-83 |
| XVI | Machinery, electrical equipment | 84-85 |
| XVII | Vehicles, transport equipment | 86-89 |
| XVIII | Instruments, apparatus | 90-92 |
| XIX | Arms and ammunition | 93 |
| XX | Miscellaneous manufactured | 94-96 |
| XXI | Works of art, antiques | 97 |

## 10.2 Customs Regimes

Standard customs procedures/regimes aligned with Revised Kyoto Convention:

| Code | Regime | Description | Key Requirements |
|------|--------|-------------|------------------|
| **IM4** | Home Use | Import for domestic consumption | Full duty payment |
| **IM5** | Temporary Admission | Goods temporarily imported | Guarantee, re-export timeline |
| **IM6** | Inward Processing | Import for processing and re-export | Authorization, records |
| **IM7** | Customs Warehousing | Storage under customs control | Approved warehouse |
| **IM8** | Free Zone | Import into designated free zone | FZ authorization |
| **EX1** | Permanent Export | Export from customs territory | Export declaration |
| **EX2** | Temporary Export | Goods temporarily exported | Re-import timeline |
| **EX3** | Outward Processing | Export for processing and reimport | Authorization |
| **TR** | Transit | Movement under customs control | Guarantee, seals |
| **RE** | Re-export | Export of imported goods | Origin tracking |
| **RI** | Re-import | Import of previously exported goods | Proof of export |

## 10.3 AEO Tier Levels

Authorized Economic Operator program tiers based on WCO SAFE Framework:

| Tier | Name | Requirements | Benefits |
|------|------|--------------|----------|
| **Tier 1** | AEO-Compliance (AEOC) | Basic compliance history, financial solvency | Reduced physical inspections |
| **Tier 2** | AEO-Security (AEOS) | Tier 1 + security standards | Priority processing, mutual recognition |
| **Tier 3** | AEO-Full (AEOF) | Tier 1 + Tier 2 + enhanced compliance | Maximum facilitation, self-assessment |

**AEO Assessment Criteria:**

| Category | Assessment Elements |
|----------|---------------------|
| **Compliance Record** | Declaration accuracy, payment history, violation history |
| **Financial Solvency** | Credit worthiness, financial stability |
| **Record Keeping** | Audit trail, document retention, accessibility |
| **Security Standards** | Physical security, personnel security, information security |
| **Practical Standards** | Internal controls, quality management, training |

## 10.4 Risk Categories

### 10.4.1 Risk Classification

| Category | Description | Typical Treatments |
|----------|-------------|-------------------|
| **Green** | Low risk - automated release | No intervention, post-clearance monitoring |
| **Yellow** | Medium risk - documentary review | Document verification, may proceed to Green |
| **Red** | High risk - physical inspection | Full examination before release |
| **Blue** | Post-clearance audit | Release now, audit later |

### 10.4.2 Risk Indicators

| Risk Domain | Indicators | Data Sources |
|-------------|------------|--------------|
| **Trader Risk** | Compliance history, new trader, debt status | Trader registry, compliance database |
| **Origin Risk** | High-risk countries, preferential claims | Country profiles, trade agreements |
| **Valuation Risk** | Price variance, related party, low value | Price database, invoice analysis |
| **Classification Risk** | Sensitive commodities, rate shopping | HS database, historical patterns |
| **Quantity Risk** | Weight variance, container utilization | Manifest data, historical averages |
| **Documentation Risk** | Missing documents, inconsistencies | Document completeness checks |

### 10.4.3 Risk Matrix

| Likelihood ↓ / Consequence → | Minor | Moderate | Major | Severe |
|------------------------------|-------|----------|-------|--------|
| **Almost Certain** | Medium | High | High | Critical |
| **Likely** | Medium | Medium | High | High |
| **Possible** | Low | Medium | Medium | High |
| **Unlikely** | Low | Low | Medium | Medium |
| **Rare** | Low | Low | Low | Medium |

## 10.5 WTO TFA Benchmarks

Key Trade Facilitation Agreement provisions and measurement indicators:

| Article | Provision | Key Benchmark | Measurement |
|---------|-----------|---------------|-------------|
| **Art. 1** | Publication and Availability | Information accessible online | % procedures published online |
| **Art. 2** | Opportunity to Comment | Stakeholder consultation | Consultation events per year |
| **Art. 3** | Advance Rulings | Binding rulings program | Average ruling time |
| **Art. 5** | Enhanced Controls | Risk-based inspection | % risk-based selection |
| **Art. 6** | Fees and Charges | Transparent, cost-based fees | Fee schedule published |
| **Art. 7.1** | Pre-Arrival Processing | Advance declaration | % pre-arrival submissions |
| **Art. 7.2** | Electronic Payment | E-payment availability | % electronic payments |
| **Art. 7.3** | Separation of Release | Release before final determination | % provisional releases |
| **Art. 7.4** | Risk Management | Comprehensive RM program | Risk management coverage |
| **Art. 7.6** | Average Release Times | Published release times | Average release time (hours) |
| **Art. 7.7** | Authorized Operators | AEO program | # AEO traders |
| **Art. 7.8** | Expedited Shipments | Fast track for express | Express clearance time |
| **Art. 10.1** | Formalities | Minimize formalities | Documents required |
| **Art. 10.2** | Acceptance of Copies | Electronic/copy documents | % original requirements |
| **Art. 10.3** | Use of International Standards | Standards alignment | % WCO DM alignment |
| **Art. 10.4** | Single Window | Single Window system | SW availability, usage |
| **Art. 11** | Freedom of Transit | Transit facilitation | Transit processing time |
| **Art. 12** | Customs Cooperation | Cross-border cooperation | # cooperation agreements |

### TFA Time Release Study Benchmarks

| Measure | Target (Best Practice) | Developing Country Typical |
|---------|----------------------|---------------------------|
| **Import Release Time** | <24 hours | 48-120 hours |
| **Export Release Time** | <12 hours | 24-72 hours |
| **Green Channel** | >60% | 30-40% |
| **Physical Inspection Rate** | <5% | 15-30% |
| **Document Processing** | <2 hours | 4-24 hours |

---

# Section 11: Appendices

## 11.1 Glossary

### 11.1.1 Customs Terms

| Term | Definition |
|------|------------|
| **AEO** | Authorized Economic Operator - trusted trader with enhanced compliance status |
| **Assessment** | Determination of duties and taxes payable on imported goods |
| **Bill of Lading (B/L)** | Document of title for shipped goods |
| **Bond** | Financial guarantee for customs obligations |
| **Clearance** | Completion of customs formalities allowing goods to enter/exit |
| **CIF** | Cost, Insurance, and Freight - valuation method including delivery |
| **Consignment** | Shipment of goods from one person to another |
| **Customs Broker** | Licensed agent acting on behalf of importers/exporters |
| **Customs Value** | Value of goods for duty calculation purposes |
| **Declaration** | Formal statement of goods for customs purposes |
| **Drawback** | Refund of duties paid on imported goods that are re-exported |
| **Duty** | Tax levied on imported goods |
| **Examination** | Physical inspection of goods by customs |
| **FOB** | Free On Board - valuation method at point of export |
| **HS Code** | Harmonized System code for product classification |
| **Manifest** | Document listing all cargo on a conveyance |
| **Origin** | Country where goods were produced |
| **PCA** | Post-Clearance Audit - verification after goods release |
| **Release** | Action by customs permitting goods to leave customs control |
| **Selectivity** | Risk-based selection for examination |
| **Single Window** | Single entry point for trade documentation |
| **Tariff** | Schedule of customs duties |
| **Transit** | Movement of goods under customs control |
| **Valuation** | Determination of customs value for duty purposes |
| **Warehouse** | Premises approved for storage under customs control |

### 11.1.2 GEATDM Terms

| Term | Definition |
|------|------------|
| **BDAT** | Business, Data, Application, Technology - architecture domains |
| **Building Block (BB)** | Reusable software component for government services |
| **Capability** | Ability of an organization to perform a function |
| **DPI** | Digital Public Infrastructure |
| **Gap Analysis** | Comparison of current state to target state |
| **GovStack** | Initiative for standardized digital government building blocks |
| **L1 Capability** | Level 1 (high-level) capability in capability hierarchy |
| **L2 Capability** | Level 2 (detailed) capability in capability hierarchy |
| **PAERA** | Public Administration Ecosystem Reference Architecture |
| **PDU** | Policy Development Unit - simplest organization type |
| **RA** | Regulatory Authority - intermediate organization type |
| **Reference Architecture** | Standardized architecture template |
| **SDA** | Service Delivery Authority - most complex organization type |
| **Tailoring** | Adaptation of reference architecture to specific context |
| **TO-BE** | Target state architecture |
| **AS-IS** | Current state architecture |

### 11.1.3 Technology Terms

| Term | Definition |
|------|------------|
| **API** | Application Programming Interface |
| **ASYCUDA** | Automated System for Customs Data |
| **CRM** | Compliance Risk Management |
| **EDI** | Electronic Data Interchange |
| **ETL** | Extract, Transform, Load |
| **IFMIS** | Integrated Financial Management Information System |
| **ML** | Machine Learning |
| **REST** | Representational State Transfer (API style) |
| **SOA** | Service-Oriented Architecture |
| **SSO** | Single Sign-On |
| **XML** | Extensible Markup Language |

## 11.2 GEATDM Cross-References

### 11.2.1 Sector Guide to GEATDM Framework

| Sector Guide Section | GEATDM Reference | Document |
|---------------------|------------------|----------|
| Section 6: Building Blocks | WP4-T47 SDA RA, Section 5 | GEATDM-WP4-T47-SDA-RA-Complete |
| Section 7.1: DISCOVER | WP5-T58, Phase 1 | GEATDM-WP5-T58-MethodGuide |
| Section 7.2: ASSESS | WP5-T58, Phase 2 | GEATDM-WP5-T58-MethodGuide |
| Section 7.3: ADAPT | WP5-T58, Phase 3 | GEATDM-WP5-T58-MethodGuide |
| Section 7.4: PLAN | WP5-T58, Phase 4 | GEATDM-WP5-T58-MethodGuide |
| Section 7.5: EXECUTE | WP5-T58, Phase 5 | GEATDM-WP5-T58-MethodGuide |
| Section 9: Checklist | WP6-T61 Toolkit | GEATDM-WP6-T61-Toolkit |

### 11.2.2 Toolkit Cross-Reference

| Toolkit Item | GEATDM Phase | Customs Application |
|--------------|--------------|---------------------|
| TK-01 | DISCOVER | Confirm SDA classification |
| TK-03 | DISCOVER | DPI readiness for customs |
| TK-06 | ASSESS | Customs service catalog |
| TK-07 | ASSESS | ASYCUDA system inventory |
| TK-10 | ASSESS | Gap analysis vs SDA RA |
| TK-12 | ADAPT | Customs TO-BE architecture |
| TK-13 | ADAPT | Tailoring decisions log |
| TK-16 | PLAN | Modernization roadmap |
| TK-17 | PLAN | Business case for transformation |
| TK-21 | EXECUTE | Project EA engagement |
| TK-22 | EXECUTE | Solution compliance review |
| TK-27 | Cross-phase | Building Block assessment |
| TK-28 | Cross-phase | DPI integration specs |

### 11.2.3 Capability Cross-Reference

| Customs Capability | SDA RA Capability | Notes |
|-------------------|-------------------|-------|
| CU-C1: Trader Registration | C4.1: Mass Registration Management | Direct alignment |
| CU-C2: Goods Declaration | C4.2: Filing and Declaration Management | Direct alignment |
| CU-C4: Valuation | C3.2.3: Inspection Functions | Enhanced for customs |
| CU-C6: Risk Management | C4.7: Advanced Compliance Management | Enhanced for customs |
| CU-C8: Duty Assessment | C4.3: Payment and Revenue Management | Combined with payment |
| CU-C9: Payment Processing | C4.3: Payment and Revenue Management | Direct alignment |
| CU-C10: Release | C4.2.6: Filing Decision | Customs-specific |
| CU-C11: Post-Clearance Audit | C4.8: Advanced Audit Management | Direct alignment |
| CU-C14: Refund Management | C4.4: Refund Management | Direct alignment |
| CU-C15: AEO Program | C3.1: License and Permit Management | Enhanced for customs |
| CU-C19: Service Delivery | C4.10: Multi-Channel Service Delivery | Direct alignment |
| CU-C20: International Cooperation | C4.12: International Cooperation | Direct alignment |

### 11.2.4 Data Domain Cross-Reference

| Customs Data Domain | SDA RA Data Domain | Notes |
|--------------------|-------------------|-------|
| CU-D1: Customer/Trader | D6: Regulated Entity Data | Enhanced for customs |
| CU-D2: Declaration | D10: Transaction Data | Direct alignment |
| CU-D3: Cargo/Manifest | D14: Third-Party Data | Customs-specific |
| CU-D4: Risk | D12: Risk Data | Direct alignment |
| CU-D5: Inspection | D7: Compliance Data | Customs-specific |
| CU-D6: Payment | D11: Account Data | Direct alignment |
| CU-D7: Reference/MDM | D4: Reference Data | Enhanced for customs |

---

## GEATDM Repository Cross-References

This Sector Guide integrates with the following GEATDM Method Repository components:

| Repository Folder | Document | Relationship |
|-------------------|----------|--------------|
| `/01-Toolkit/` | GEATDM-WP6-T61-Toolkit-v1.0.md | Toolkit items referenced in Sections 7.1-7.5 |
| `/02-Reference-Architectures/` | GEATDM-WP4-T47-SDA-RA-Complete-v1.0.md | Source for capability, application, data mappings |
| `/03-Method-Guide/` | GEATDM-WP5-T58-MethodGuide-Complete-v1.0.md | Phase guidance adapted for customs |
| `/06-Sector-Guides/` | **This document** | Customs-specific sector guidance |

---

*End of GEATDM Customs Sector Guide*

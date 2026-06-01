# GEATDM Tax Administration Sector Guide

## Practitioner's Handbook for Tax Administration Target Architecture

**Document:** GEATDM-Sector-Tax-v1.0
**Part of:** Sector Guides
**Version:** 1.0
**Date:** May 2026
**Status:** Released
**License:** Creative Commons Attribution 4.0

---

## Document Control

| Attribute | Value |
|-----------|-------|
| Document ID | GEATDM-Sector-Tax |
| Title | GEATDM Tax Administration Sector Guide |
| Version | 1.0 |
| Date | May 2026 |
| Status | Released |
| Authors | FiscalAdmin OÜ |
| License | CC-BY 4.0 |

### Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | May 2026 | Initial release. |

---

## Table of Contents

- Section 1: Tax Administration Sector Overview
- Section 2: Tax Capability Architecture
- Section 3: Tax Application Architecture — the Five-Domain Model
- Section 4: Tax Data Architecture
- Section 5: Tax Process Architecture
- Section 6: Building Blocks for Tax Administration
- Section 7: Implementation Path

---

# Section 1: Tax Administration Sector Overview

## 1.1 Tax administration is always a Service Delivery Authority

Tax administration is one of the most operationally demanding public-sector domains. It processes millions to tens of millions of taxpayer transactions per year, maintains the country's authoritative taxpayer registry, executes regulated functions on behalf of the state, and is held to specific operational performance standards (filing deadlines, refund cycles, audit completion). In GEATDM terms it is always a Service Delivery Authority (SDA), like Customs (GEATDM-Sector-Customs §1.1).

The Reference Architecture for Tax Administration is therefore the SDA Reference Architecture (T47) extended with the tax-specific capabilities described in Section 2. This Sector Guide presents the GEATDM-aligned architecture of a tax administration. The IMF Tax Administration Reference Architecture v0.1 (TA RA, March 2026) provides the equivalent depth at the operational and technical level; both documents apply.

## 1.2 Tax sector entities in GEATDM organisation-type terms

| GEATDM type | Typical tax-sector entity |
|-------------|---------------------------|
| **PDU — Policy Development Unit** | Ministry of Finance (tax policy unit). In some countries this is a separate Ministry of Tax Policy or a sub-ministry. |
| **RA — Regulatory Agency** | The fiscal regulator role is generally absorbed into the Ministry of Finance, the Tax Administration, or the country's audit office. Where a separate Customs Authority exists, it is treated under GEATDM-Sector-Customs. |
| **SDA — Service Delivery Authority** | The Tax Administration itself (for example IRS, HMRC, Gambia Revenue Authority, Mauritius Revenue Authority, Kenya Revenue Authority, NTS, KGD). Typically a single national authority. |
| **State Registry** | National Taxpayer Registry; cross-references to civil registration, business registry, property registry, vehicle registry. |
| **Horizontal System** | Government Financial Management Information System (GFMIS), Treasury Single Account, Payment BB used for refund and remittance, Information Mediator BB. |

Tax administrations sometimes also operate functions adjacent to revenue collection — for example, payment of social-protection benefits, earned-income tax credits, or pension contributions. Where this occurs, the additional capabilities cross over into the relevant sector treatment without changing the SDA classification of the tax administration itself.

## 1.3 Tax sector mission and functions

A national tax administration fulfils five mission categories.

**Revenue collection.** The day-to-day work of receiving, processing, and accounting for tax payments. Delivered by the Tax Administration. Supporting digital systems are the taxpayer-facing platform, the e-filing and e-payment channels, the tax accounting system, and the bank integration.

**Taxpayer services.** Taxpayer registration, helpdesk, self-service portals, correspondence management, and proactive guidance. Delivered by the Tax Administration. The architectural philosophy in modern tax administration is increasingly platform-first: the Tax Administration provides APIs and a Rules as Code engine; the private sector embeds compliance into ERPs, accounting software, banking apps, and payroll platforms; the Tax Administration maintains a minimal "last resort" portal for taxpayers without commercial channels.

**Compliance management.** Risk-based identification of non-compliance; segmentation of the taxpayer base; selection of audit cases; investigation and enforcement; debt management. Delivered by the Tax Administration in close coordination with banks, customs, and (where applicable) the prosecution authority. Supporting digital systems are the risk scoring engine, the case management platform, and the data platform.

**Policy support.** Provision of analysis, compliance trend reports, revenue forecasts, and tax-gap estimates to the Ministry of Finance and to parliament. Supporting digital systems are the analytical data platform and statistical reporting tools.

**International cooperation.** Exchange of information with foreign tax authorities under treaties and standards (CRS, FATCA, Country-by-Country reporting, DAC for EU members, ViDA real-time reporting for EU). Supporting digital systems are the External Integration Platform and country-specific reporting modules.

## 1.4 Key stakeholders

The tax sector stakeholder set is wide because tax administration touches every economically active citizen and every business in the country. The Stakeholder Engagement Method Guide (T59) tier model applies, with the typical mapping:

| Tier | Tax-sector stakeholders | Engagement model |
|------|-------------------------|------------------|
| **Tier 1 — Champions** | Ministry of Finance (PDU); the Tax Administration itself (SDA — the core delivery organisation); Ministry of ICT / Digital Authority; the Treasury / Public Financial Management unit | Weekly working sessions; bi-weekly Steering Committee; quarterly Cabinet briefing |
| **Tier 2 — Early Adopters** | Customs Authority (parallel SDA); Banks Association (financial-sector integration); ERP and accounting-software industry association; the country's largest taxpayers (large-taxpayer office); Audit Office; National Bureau of Statistics | Bi-weekly working sessions; sector workshops |
| **Tier 3 — Observers** | Professional bodies (chartered accountants, tax advisers, legal practitioners); SME associations; civil-society organisations focused on tax justice; international development partners (IMF country office, World Bank tax programmes, OECD, EU programmes) | Monthly bulletin; quarterly community-of-practice |

Citizen-taxpayer stakeholders are addressed through public consultation on major architectural decisions (digitisation programmes, e-invoicing mandates, real-time reporting). Their architectural representation is the platform-first principle (Section 1.5) and the user-experience design discipline.

International development partners are a structural feature in lower-income contexts. IMF technical assistance funds many tax-administration modernisation programmes; the World Bank funds revenue-generation programmes; the EU funds accession-track work for candidate and neighbourhood countries. The PLAN phase explicitly accounts for donor versus state-budget components and the sustainability commitment per PAERA §4.5.

## 1.5 Architectural principles for tax administration

The 33 principles in T12 EA Principles apply to tax administration as to any sector. Ten principles, articulated in TA RA Chapter 4, deserve sector-specific elaboration in tax. They are stated below in the GEATDM voice and aligned to the T12 categories.

| Principle | Statement | Aligns to T12 |
|-----------|-----------|---------------|
| **Openness and vendor neutrality** | The architecture uses open standards and open APIs; vendor-proprietary mechanisms are admitted only where no open standard exists. | APP-05 API-First Design; CC-04 Transparency |
| **Domain autonomy and modularity** | Tax administration is decomposed into five operational domains (Section 3); each domain operates autonomously with explicit boundaries. | APP-02 Loose Coupling; APP-07 Modularity |
| **Interoperability and API-first design** | Every interface inside the tax administration and across to other government bodies is defined by an OpenAPI 3.x specification. | APP-05; DA-06 Data Sharing |
| **Sustainability and complexity reduction** | Every architectural decision is tested for whether it adds or reduces complexity; every change is expected to leave the system measurably simpler. | TECH-04 Standardisation and Simplification; TECH-07 Sustainable Technology |
| **Security and privacy by design** | Tax data is among the most sensitive personal data; encryption in transit and at rest, role-based access, comprehensive audit logging, and data minimisation are non-negotiable. | TECH-01 Security by Design; DA-05 Privacy by Design |
| **Data ownership and portability** | The taxpayer's data remains the taxpayer's property. The tax administration's data on taxpayers is held under explicit legal authority and is portable when the taxpayer requests data extracts under privacy law. | DA-01 Data as Strategic Asset; CC-04 Transparency |
| **User-centred design** | Taxpayer-facing interfaces (whether the Tax Administration's last-resort portal or the platform APIs consumed by ERPs) are designed against measured taxpayer experience. | BA-01 Customer-Centric Service Design |
| **Observability and maintainability** | Every transaction in the tax administration is traceable; every system action is logged; operational health is observable in real time. | TECH-06 Observability and Monitoring |
| **Policy as code** | Tax law is expressed as machine-consumable rules through a Rules as Code engine; tax-law changes propagate to filing forms, validation rules, assessment logic, and risk indicators within weeks rather than months. | DA-02 Once-Only Data Collection (extended to once-only rule definition) |
| **Cloud-native and elastic scaling** | The architecture runs on container-based infrastructure with elastic scaling to handle peak loads (filing deadlines often produce 10× normal volume). | APP-06 Cloud-Ready and Platform-Neutral; TECH-03 Scalability and Performance |

These ten principles are conditions. They are tested at every Architecture Decision Record (ADR) and every Architecture Compliance Assessment (TK-22).

## 1.6 International standards

The tax sector standards landscape is dense and continues to evolve under regulatory pressure (EU ViDA, OECD Pillar One and Pillar Two, automatic exchange of information). The standards listed below are the working set; not all are deployed in every country.

### 1.6.1 Tax administration policy and digital maturity standards

| Standard | Issuing body | Relevance |
|----------|--------------|-----------|
| **OECD Tax Administration 3.0** | OECD Forum on Tax Administration | The reference vision for digital transformation of tax administration; the Tax Administration 3.0 Digital Transformation Maturity Model is the canonical maturity assessment. |
| **IMF Tax Administration Diagnostic Assessment Tool (TADAT)** | IMF | Standardised assessment of tax-administration performance against nine performance outcome areas. |
| **OECD Compliance Risk Management framework** | OECD CFA | The international reference for risk-based compliance management. |

### 1.6.2 Digital reporting and e-invoicing standards

| Standard | Issuing body | Relevance |
|----------|--------------|-----------|
| **EN16931 e-invoicing** | European Committee for Standardization (CEN) | The European standard for electronic invoices. Implemented through national profiles (Italy SDI, France Factur-X, Germany ZUGFeRD, Estonia Riigi e-arve, etc.). |
| **EU VAT in the Digital Age (ViDA)** | European Commission | The EU regulatory programme mandating real-time digital reporting and e-invoicing across the single market. Sets implementation deadlines through 2030. |
| **EU Digital Reporting Requirements (DRR)** | European Commission | Real-time reporting obligations that complement EN16931. |
| **PEPPOL BIS Billing 3.0** | OpenPEPPOL | The interoperable e-invoicing transport standard; widely adopted in EU member states. |
| **UBL 2.x (Universal Business Language)** | OASIS | The XML representation of EN16931 e-invoices. |

### 1.6.3 International tax cooperation standards

| Standard | Issuing body | Relevance |
|----------|--------------|-----------|
| **OECD CRS (Common Reporting Standard)** | OECD Global Forum | Automatic exchange of financial-account information between tax authorities. The XML reporting schema is the operational standard. |
| **US FATCA reporting** | US Internal Revenue Service | US-specific reporting under intergovernmental agreements. |
| **OECD Country-by-Country Reporting (CbCR)** | OECD BEPS Action 13 | Standardised multinational-enterprise reporting. |
| **EU DAC1–DAC8** | European Commission | Successive Council Directives on Administrative Cooperation. DAC7 covers digital-platform reporting; DAC8 covers crypto-assets. |
| **VIES (VAT Information Exchange System)** | European Commission | EU VAT-number validation. |
| **OECD Pillar One and Pillar Two** | OECD Inclusive Framework | The reallocation of taxing rights and the global minimum tax. Significant architectural implications for international group reporting. |

### 1.6.4 Payments and financial integration standards

| Standard | Issuing body | Relevance |
|----------|--------------|-----------|
| **ISO 20022** | ISO TC 68 | The canonical financial-messaging standard. Used for tax payments, refunds, and bank-tax integration. |
| **SWIFT MT and MX messages** | SWIFT | Cross-border payment messaging. ISO 20022 migration is replacing MT progressively through 2025. |

### 1.6.5 Identifiers and reference data

| Standard | Purpose |
|----------|---------|
| **National Taxpayer Identification Number (TIN)** | Country-specific; cross-referenced to the National ID for individuals and to the Business Register for legal entities. |
| **Legal Entity Identifier (LEI, ISO 17442)** | Globally unique legal-entity identifier; relevant for cross-border cooperation. |
| **GS1 GTIN / GLN** | Product and location identification; used in e-invoicing. |
| **HS Convention codes** | Commodity codes used in customs-tax integration. |

### 1.6.6 Privacy, security, and quality standards

| Standard | Purpose |
|----------|---------|
| **OECD Tax Information Confidentiality and Use rules** | Confidentiality regime for tax data sharing under treaties. |
| **GDPR / national equivalents** | Personal data protection. Tax data is "special category" by virtue of its financial nature in many jurisdictions. |
| **OAuth 2.0 + OpenID Connect** | Authentication and authorisation for taxpayer portals and API access. |
| **NIST SP 800-53 / ISO 27001** | General security control frameworks. |

---

# Section 2: Tax Capability Architecture

## 2.1 The twelve core capability areas

All tax administrations need the same set of functional capabilities, regardless of country context, revenue structure, or tax types administered. The capabilities describe what the tax administration does, independent of how it does them. Twelve core capability areas form the functional foundation. Each area encompasses multiple sub-capabilities; the detailed sub-capability map is provided in TA RA Chapter 5.

| # | Capability area | Description |
|---|-----------------|-------------|
| 1 | **Registration & Identification** | Taxpayer registration, identity verification, classification, and maintenance of unique identifiers across all tax types. |
| 2 | **Filing & Returns** | Filing and submission of tax returns, declarations, and supporting documents; multiple filing channels and formats. |
| 3 | **Assessment** | Tax calculation, assessment determination, and generation of assessment notices based on filed returns and third-party data. |
| 4 | **Accounting / Payments / Refunds** | Financial accounting of tax receipts, payment processing, ledger management, reconciliation, refund issuance. |
| 5 | **Audit & Verification** | Risk-based audit selection, audit execution, evidence management, generation of audit reports and findings. |
| 6 | **Enforced Collection** | Collection of outstanding liabilities through enforcement actions, garnishment, asset recovery, third-party collection. |
| 7 | **Legal Proceedings** | Case management for disputes, appeals, administrative proceedings, penalties, prosecution of tax crimes. |
| 8 | **Compliance Risk Management** | Analytics-driven identification of compliance risks, stratification, segmentation, risk-scored case prioritisation. |
| 9 | **Taxpayer Services** | Helpdesk, self-service portals, correspondence management, proactive taxpayer guidance. |
| 10 | **International Cooperation** | Exchange of information with foreign tax authorities, country-by-country reporting compliance, treaty administration. |
| 11 | **Supporting Processes** | HR, procurement, budgeting, inventory, general administration. |
| 12 | **Security Management** | Authentication, authorisation, audit logging, access control, compliance with security standards. |

## 2.2 Capability dependencies — the compliance lifecycle

The twelve capability areas form an integrated system. The compliance lifecycle of a typical case illustrates how outputs of one capability become inputs to another:

A taxpayer registers (Registration & Identification) and becomes obligated to file returns (Filing & Returns). The tax administration assesses the return (Assessment), records the assessed amount in accounting systems (Accounting / Payments), and monitors whether the taxpayer pays (Payments). Concurrently, the system performs compliance risk analysis (Compliance Risk Management) to determine the taxpayer's risk profile. Based on risk scoring, the system selects the taxpayer for audit (Audit & Verification). The auditor conducts the examination and generates findings (Audit & Verification). Where appropriate the taxpayer appeals (Legal Proceedings). If tax is not paid, the administration issues enforcement notices (Enforced Collection). Throughout the lifecycle the taxpayer may contact the administration (Taxpayer Services) for guidance. Supporting processes (Supporting Processes) ensure the organisation can execute these activities. Security Management protects data and systems throughout.

This dependency structure is the input to Section 3 — the five-domain architectural decomposition that organises capabilities by their technical and operational characteristics.

## 2.3 SDA Reference Architecture extension for tax administration

A tax administration inherits the entire SDA Reference Architecture (T47) and adds approximately 80 sector-specific sub-capabilities across the twelve areas. The summary below uses TA RA Chapter 5 sub-capabilities, grouped per capability area.

### Registration & Identification

Single TIN issuance; classification of taxpayers (individual, sole proprietor, partnership, company, public-sector body, non-profit); taxpayer-segment determination (large taxpayer, small/medium, micro, non-resident); maintenance of taxpayer master data; registration of related parties and beneficial owners; cross-references to the Business Register and the National ID; deregistration on closure or death.

### Filing & Returns

Receipt of returns through multiple channels (Tax Administration portal; commercial accounting software via API; bank channels for withholding agents; ERP systems for large taxpayers); validation against the Rules as Code engine; format-conversion (paper-to-digital where paper still permitted); receipt acknowledgement and tracking; amendment handling; nil-return handling; bulk filing for withholding agents.

### Assessment

Calculation of tax liability against filed returns and third-party data; pre-population of returns from third-party data (employer reporting, bank-interest reporting, real-estate transactions); cross-tax assessment integration (income tax, VAT, payroll tax, social contributions); assessment notice generation; statutes of limitations and tax-year management.

### Accounting / Payments / Refunds

Tax-period ledger maintenance; payment receipt through multiple channels (bank transfer, fast payment, mobile money, card); allocation of payments to liabilities; reconciliation with the Treasury Single Account; refund calculation, eligibility check, fraud screening, and disbursement; offset of refunds against other liabilities; interest and penalty calculation.

### Audit & Verification

Audit case creation; audit-plan definition; risk-based selection; case allocation to auditor or team; document and evidence management during audit; audit working papers; audit-report drafting; opportunity-to-comment workflow; assessment adjustment; closing letter; appeal-rights notification.

### Enforced Collection

Demand notice generation; instalment-plan administration; bank-account garnishment; third-party demand (employer wage garnishment, customer payment redirection); asset-recovery workflow; legal-action initiation; debt write-off process; bankruptcy and insolvency interaction.

### Legal Proceedings

Administrative-appeal case management; tribunal case management; settlement negotiation; mutual agreement procedures (MAP) under double-tax treaties; tax-crime investigation; prosecution-support workflow; penalty assessment under the Penal Code or administrative-offence framework.

### Compliance Risk Management

Risk indicator definition and management; statistical risk model development, training, and deployment; machine-learning model lifecycle; network analysis for fraud detection; carousel-fraud detection (VAT); transfer-pricing manipulation detection; risk-score generation; segmentation maintenance; campaign-targeting workflow; explainability and audit trail of risk decisions.

### Taxpayer Services

Multi-channel helpdesk (phone, email, chat, in-person); self-service portal for individuals and businesses; correspondence management with audit trail; nudge campaigns; voluntary-disclosure programme administration; advance ruling administration; tax-residency certificate issuance; certificate-of-good-standing issuance.

### International Cooperation

CRS reporting and receipt; FATCA reporting (where applicable); CbCR submission and exchange; DAC reporting (EU); MAP case management; treaty-shopping risk analysis; withholding-tax certificate issuance; non-resident taxpayer registration.

### Supporting Processes

These follow T47 and are not tax-specific.

### Security Management

These follow T47 and are not tax-specific. Tax-specific extensions include: tax data confidentiality regime; treaty-based confidentiality compliance; tax-officer code-of-conduct enforcement.

## 2.4 Capability priorities by digital maturity

Tax-administration digital maturity is captured by the OECD Tax Administration 3.0 maturity model. Four maturity stages, with the indicative capability priorities:

| Stage | Definition | Capability priorities |
|-------|-----------|-----------------------|
| **Stage 1 — Tax Administration 1.0** | Paper-dominant; manual processes; primarily reactive compliance management | Registration; Filing & Returns (paper-with-some-digital); Assessment (manual); Accounting (basic) |
| **Stage 2 — Tax Administration 2.0** | E-filing dominant; partial e-payment; rudimentary risk profiling; monolithic ITAS | All twelve areas operational; quality varies; Compliance Risk Management at rule-based level |
| **Stage 3 — Tax Administration 2.5** | E-invoicing introduction; real-time reporting for VAT; data-platform-driven analytics; risk scoring with ML; case management on a low-code platform | Compliance Risk Management with ML; Filing & Returns extended to real-time reporting; International Cooperation operational; Audit & Verification largely digital |
| **Stage 4 — Tax Administration 3.0** | Seamless taxation: tax compliance embedded in the taxpayer's natural digital environment; Rules as Code; real-time across all transactional taxes; automated assessment for most taxpayers; risk management with explainable ML | All twelve areas operational at high maturity; the Tax Administration portal becomes a residual channel; private-sector software is the primary taxpayer-facing surface |

Wave allocation in the PLAN phase follows the Stage of the country at programme entry. Most middle-income countries enter at Stage 2; most low-income countries enter at Stage 1.

---

# Section 3: Tax Application Architecture — the Five-Domain Model

## 3.1 Why five domains

The most consequential architectural decision in a tax administration is whether to treat the function as a single Integrated Tax Administration System (ITAS) or as a domain-decomposed platform. Decades of country experience document the failure mode of monolithic ITAS replacements (T16 §4 — the Big-Bang Replacement Trap; TA RA §3.1 — Why Traditional Tax Systems Fail). Replacement projects routinely overrun budget by 2–3× and time by 3–7 years; many are abandoned.

The domain-decomposed approach separates tax administration into five loosely-coupled architectural zones, each optimised for fundamentally different operational patterns, technical requirements, scaling characteristics, release cycles, and sourcing strategies. The decomposition is consistent with PAERA §3.3 (Digital Infrastructure principles), with T16 §3.4 (vendor-driven trap mitigation through clear domain boundaries), and with the OECD Tax Administration 3.0 vision.

The five domains are:

| Domain | Operational mode | Primary technology profile |
|--------|-----------------|----------------------------|
| **Domain 1 — Tax Services Platform** | High-volume transactional; voluntary compliance; platform APIs and a Rules as Code engine | High-availability web/mobile; API gateway; rules engine; relational and document stores |
| **Domain 2 — Data Platform** | Analytical; cross-domain data foundation | Medallion data architecture (Bronze/Silver/Gold); data lake; analytical databases; ETL/ELT |
| **Domain 3 — Risk Management System** | Compliance management; risk scoring; ML | Statistical platforms; ML lifecycle tooling; network-analysis tools |
| **Domain 4 — Case Management Platform** | Structured back-office work; workflow | Low-code / no-code workflow platform |
| **Domain 5 — External Integration Platform** | Connectivity with external parties | API gateway; enterprise integration middleware; protocol translation |

The domains are connected through an event bus (Section 3.7). Each can be sourced, scaled, upgraded, and replaced independently. This structural independence is the response to both the Big-Bang Replacement Trap (T16 §4) and the Vendor-Driven Architecture Trap (T16 §3).

## 3.2 Domain 1 — Tax Services Platform

The Tax Services Platform is the data-acquisition surface of the tax administration. It accepts returns, invoices, payments, registrations, and all other data entering the tax ecosystem through a unified API layer. It operates under the highest volume and strictest availability requirements.

The architectural philosophy departs from the traditional "multi-channel service delivery" model in which government builds every interface. Instead the Tax Services domain is a **platform**: it provides APIs, a Rules as Code engine, and data services. The private sector then builds the actual taxpayer-facing interfaces in the taxpayer's natural digital environment — large businesses comply through their ERP systems; SMEs comply through accounting software that embeds tax rules through the Rules as Code API; individual taxpayers interact through banking apps, payroll platforms, or commercial tax-preparation software, all consuming the same platform services. The Tax Administration maintains a minimal "last resort" portal for taxpayers without commercial channels.

**Scope of the domain.** Unified API layer; Rules as Code engine; taxpayer registration and identity management; tax-return receipt, validation, and processing; payment receipt and reconciliation; taxpayer accounting (ledgers, statements, balances); refund calculation and disbursement; minimal last-resort taxpayer portal; notification services.

**Out of scope.** The domain does not perform compliance analysis or case work. Once data is captured and the immediate transaction is complete, downstream processing is the responsibility of other domains. The domain publishes events ("return filed", "payment received", "registration updated") that other domains consume.

**Technical profile.** Must handle peak loads during filing deadlines (often 10× normal volume); 24/7 availability; sub-second API response. Cloud-native deployment with horizontal scaling. PostgreSQL or equivalent for transactional data; document store for unstructured submissions; Redis or equivalent for session and cache.

**Architectural implication.** The Tax Services Platform is the place where "tax-as-a-platform" is realised. The success of platform thinking depends on three things: stable, well-documented APIs; a Rules as Code engine that third-party software can rely on; and government willingness to let private-sector software become the dominant interface.

## 3.3 Domain 2 — Data Platform

The Data Platform is the trusted analytical-data foundation for the entire tax administration. It implements a medallion architecture: a Bronze layer preserving raw source data exactly as received, a Silver layer where data is cleansed, deduplicated, and standardised, and a Gold layer where business logic produces consumption-ready datasets. The Tax Administration Data Platform Reference Architecture (TADPRA) is the more detailed specification of this domain.

**Scope of the domain.** Medallion data architecture; data ingestion pipelines (CDC, ETL, ELT); the enterprise data warehouse; operational reporting; metadata management (catalogues, lineage, business glossaries); data quality (profiling, validation, monitoring, remediation); data governance (policies, stewardship, access control, compliance); data security (encryption at rest and in transit, masking, tokenisation); master data management; the Data Management Office as an organisational unit.

**Out of scope.** The Data Platform does not make compliance decisions or manage cases. It provides data through query APIs, analytical views, and event streams.

**Technical profile.** Data lake (object storage) for Bronze; analytical database (ClickHouse, Apache Doris, or equivalent) for Silver and Gold; orchestration through Airflow or equivalent; transformation through dbt or equivalent. The Data Management Office grows from 10–15 FTE during initial implementation to 25–30 FTE at operational maturity (TA RA §18.2).

**Architectural implication.** The Data Platform delivers the highest analytical-value-per-effort in any tax modernisation programme. It is the natural Track 1 deliverable in a Strangler Fig roadmap (Section 7.2) because it can be built alongside the legacy ITAS without touching it.

## 3.4 Domain 3 — Risk Management System

The Risk Management System is the compliance-management engine of the tax administration. It is not "analytics" in the academic sense; it is the operational layer that decides which taxpayers receive educational outreach, which are selected for desk review, and which warrant full field audit. Every decision is logged, auditable, and explainable.

**Scope of the domain.** Risk indicator management (creation, calibration, validation); risk scoring and taxpayer segmentation; compliance-campaign design and targeting; ML model development, training, deployment, and monitoring; network analysis for fraud detection (carousel fraud, transfer-pricing manipulation); audit selection and case referral; compliance-outcome tracking and model refinement; explainability and transparency of risk decisions.

**Out of scope.** The domain does not itself manage cases or interact directly with taxpayers. It publishes risk-referral events that the Case Management domain picks up.

**Technical profile.** ML platform (Python ecosystem with MLflow, Kubeflow, or equivalent); rule engine for non-ML indicators; graph database for network analysis; explainability tooling (SHAP, LIME, or domain-specific equivalents). Tax officers configure risk indicators through a user-friendly interface without writing code.

**Architectural implication.** The Risk Management domain is the place where machine learning earns its place in tax administration. It also carries the highest explainability requirement of any domain because decisions affect taxpayer rights — every audit selection must be defensible.

## 3.5 Domain 4 — Case Management Platform

The Case Management Platform handles all structured back-office work: audit case management, debt management, appeals and dispute resolution, service-delivery incidents, taxpayer enquiry management, internal workflow automation, document and evidence management, work distribution, SLA tracking, and training and competency management.

The key architectural decision is that **case management is not bespoke software**. Instead the tax administration selects a low-code / no-code platform and builds all internal automation on this unified foundation. The choice dramatically reduces the bespoke-code footprint (T60 §5 — Bespoke Footprint KPI), enables business users to configure workflows without IT involvement, and ensures that the full diversity of case types — from a simple address change through a multi-year international transfer-pricing audit — can be handled within a single consistent platform.

**Scope of the domain.** Audit case management (desk review, field examination, specialist referral); debt management (payment plans, instalment arrangements, enforcement actions); appeals and dispute resolution; service-delivery incidents and taxpayer enquiry management; internal workflow automation (approvals, escalations, quality reviews); document and evidence management; work distribution, SLA tracking, workload balancing; training and competency management.

**Out of scope.** The platform does not write tax law or perform analytical work. It executes structured workflows defined by tax-law subject-matter experts.

**Technical profile.** Low-code platform (Joget DX 8.x as the GovStack reference; alternatives include Camunda, OutSystems, Mendix, ServiceNow). Configured rather than built. Document storage integrated with the country's records-management discipline.

**Architectural implication.** The Case Management Platform is the place where the Bespoke Footprint discipline (T60 §5) shows the most dramatic effect. A traditionally-built case-management system might be 200,000 lines of bespoke code; a low-code-configured equivalent is typically 5–15% of that figure.

## 3.6 Domain 5 — External Integration Platform

The External Integration Platform is the integration enabler for connections between the tax administration and external parties. In the modern digital economy, a tax administration does not operate in isolation. It exchanges data and services with an expanding ecosystem of partners.

**Scope of the domain.** Unified API gateway (authentication, rate limiting, audit logging); intra-government integrations (customs, social security, company registries, land registries, treasury); banking and financial-sector connections; integration with taxpayer accounting software and ERP systems; international and EU-mandated exchanges (ViDA, DRR, EN16931 e-invoicing, VIES, DAC reporting; CRS, FATCA, CbCR); protocol translation, message transformation, guaranteed delivery.

**Out of scope.** The domain does not perform tax-administration logic. It shields the internal domains from the complexity of external connectivity.

**Technical profile.** API management gateway; enterprise integration middleware; protocol-translation services; PKI for mutual authentication of cross-government and cross-border parties; message-queue infrastructure for guaranteed delivery. Where the country operates an Information Mediator BB (X-Road or equivalent), the External Integration Platform integrates through it for cross-government work; the international and EU exchange flows go through dedicated channels.

**Architectural implication.** The External Integration Platform is structurally critical for any country with EU accession on its agenda. ViDA, DRR, EN16931, VIES, and DAC compliance are non-negotiable for accession; the domain hosts the implementations.

## 3.7 Cross-domain integration — event-driven architecture

The five domains are loosely coupled at design but tightly choreographed at runtime. Integration is event-driven: each domain publishes business events to a shared event bus and subscribes to events it needs to react to, without knowing which other domains will consume its events.

**The compliance lifecycle as choreography.** A business files its monthly VAT return through its ERP system. The ERP calls the External Integration Platform's API gateway; the request flows into the Tax Services Platform, which validates the return, calculates the assessment, updates the taxpayer's account, and publishes a "return filed" event. The Data Platform ingests the event into Bronze; within seconds the return data is available in Silver and (after Gold business-rule application) in analytical views. Concurrently the Risk Management System evaluates the return against its risk models. For low-risk returns the process ends; the refund is processed automatically. For high-risk returns the Risk Management System publishes a "compliance risk detected" event; the Case Management Platform receives the event, automatically creates an audit case, and routes it to an appropriate officer with a complete case package queried from the Data Platform.

When the case concludes, the outcome is published as events consumed by multiple domains: Tax Services updates the taxpayer's account; Data Platform records the audit results for historical analysis; Risk Management uses the outcome to refine its models.

**Architectural property.** No domain needs to understand the internal workings of any other. This separation allows each domain to evolve, be upgraded, or be replaced without affecting the others. This is the structural key to long-term sustainability and the response to the architectural traps in T16.

## 3.8 Application architecture — typical product classes per domain

| Domain | Typical product / platform class |
|--------|----------------------------------|
| Tax Services Platform | Bespoke API layer (high differentiation; sector-unique business logic); commercial or open-source rules engine (Drools, KIE, OpenRules); commercial low-code for the residual portal (Joget DX, Bonita, Camunda) |
| Data Platform | Open-source analytical stack: ClickHouse or Apache Doris + dbt + Airflow; alternative commercial offerings (Snowflake, Databricks) where licensing fits |
| Risk Management System | Open-source ML stack: Python ecosystem + MLflow + Kubeflow; commercial offerings (DataRobot, H2O); rule engine for non-ML indicators |
| Case Management Platform | Commercial low-code COTS: Joget DX 8.x is the GovStack reference; alternatives Camunda, OutSystems, Mendix, ServiceNow |
| External Integration Platform | Information Mediator BB (X-Road) for cross-government; API management gateway (Kong, Apigee, Tyk); enterprise integration middleware (Apache Camel, MuleSoft) |

The application architecture mapping is the input to procurement decomposition (T60 §6.3, T16 §3.5). A "national tax administration platform" procurement that bundles Tax Services, Data Platform, Risk Management, Case Management, and External Integration into one contract is the canonical Vendor-Driven Architecture Trap.

---

# Section 4: Tax Data Architecture

## 4.1 Tax data domains

A national tax administration EA covers eight canonical data domains. Each domain has authoritative sources, semantic standards, and a governance owner.

| Domain | Authoritative source | Semantic standard |
|--------|---------------------|-------------------|
| **Taxpayer master data** | National Taxpayer Registry; cross-references to National ID and Business Register | Country-specific TIN; LEI for cross-border legal entities |
| **Tax return data** | Filing platform | Country-specific declaration schemas; EN16931 / UBL for e-invoicing |
| **Transaction data** | E-invoicing platform; bank integration; third-party reporting | EN16931 / UBL / PEPPOL BIS Billing 3.0 |
| **Payment data** | Payment processing | ISO 20022 |
| **Audit data** | Case Management Platform | Country-specific |
| **Third-party data** | Banks (interest reporting); employers (payroll); land registry; vehicle registry | National-data-exchange schemas |
| **International exchange data** | CRS, FATCA, CbCR, DAC, MAP exchanges | OECD CRS XML; FATCA XML; CbCR XML; DAC schemas |
| **Risk model data** | Risk Management System | Domain-specific feature store |

## 4.2 Taxpayer Registry as the master data spine

The single most important architectural decision in a tax-administration EA is the Taxpayer Registry (in some countries called the National Taxpayer Identification Number, NTIN, or simply the TIN registry). The Taxpayer Registry is the authoritative source of taxpayer identity across the tax system and serves as the foreign-key target for every record that references a taxpayer — return, payment, audit case, refund, enforcement action.

### 4.2.1 Registry architecture options

Three architectural options. The choice depends on country context.

| Option | Description | Suitable for |
|--------|-------------|-------------|
| **Option A — TIN is the National ID (for individuals) and the Business Registry ID (for legal entities)** | The taxpayer's identity in the tax system is identical to their identity in the national identity system or business register. No separate tax-system identifier. | Countries with mature digital National ID coverage and an electronic Business Register, plus legal authorisation for cross-sector use. |
| **Option B — TIN references the National ID and the Business Registry ID** | The tax system maintains its own TIN; the Taxpayer Registry is keyed to the National ID for individuals and to the Business Register for legal entities. | The most common model. Suitable for most countries with functioning identity systems but legal constraints on direct cross-sector use. |
| **Option C — TIN is independent** | The tax system maintains its own TIN; National ID and Business Registry linkage is opportunistic. | Countries with low coverage of National ID, no functioning Business Register, or significant administrative segregation. Plan migration to Option B as the underlying systems mature. |

The choice is a Wave 1 architectural decision recorded as an Architecture Decision Record (T13 governance, TK-30).

### 4.2.2 Registry attributes

A national Taxpayer Registry maintains, at minimum:

- TIN (the unique identifier).
- Cross-references to National ID (individuals) and Business Register (legal entities).
- Taxpayer type (individual, sole proprietor, partnership, company, public body, non-profit).
- Taxpayer segment (large taxpayer, SME, micro, non-resident).
- Registration status (active, inactive, deregistered, suspended).
- Tax-type registrations (income tax, VAT, payroll, withholding agent, excise).
- Address(es) for service of notice.
- Beneficial-ownership data for legal entities (where required by AML or tax-transparency law).
- Related-party network (group structure, controlling interests).
- Compliance history at a high level.

### 4.2.3 Pre-population from the Registry

Pre-population is a Stage-3 / Stage-4 capability. Returns are pre-populated from third-party data linked to the Taxpayer Registry — employer payroll reports for individuals; bank-interest reports for individuals; real-estate transaction data; vehicle ownership; cross-system integration via the External Integration Platform. The taxpayer reviews and confirms rather than re-entering data. This is the operationalisation of the Once-Only Principle (PAERA §5.2 #5) in the tax sector.

## 4.3 The CQRS pattern and the Medallion architecture

The Tax Services Platform (Domain 1) and the Data Platform (Domain 2) operate under a Command-Query Responsibility Segregation (CQRS) pattern: the Tax Services Platform handles transactional commands (filing a return, making a payment); the Data Platform handles analytical queries (compliance trends, risk scoring inputs). The two are linked through the event bus.

Inside the Data Platform, the **medallion architecture** organises data through three layers:

- **Bronze layer.** Raw source data, preserved exactly as received. Bronze data is immutable; corrections are applied as new records, not by editing. The Bronze layer is the audit-trail source-of-truth for any subsequent processing.
- **Silver layer.** Cleansed, deduplicated, standardised data. Silver data has been validated against the data-quality discipline; it is the layer most analytical work consumes.
- **Gold layer.** Business-logic-applied data. The Gold layer is consumption-ready: taxpayer-segment dashboards, VAT-gap estimates, monthly revenue collections, cross-tax compliance scores. Gold data is documented and versioned; tax-policy work cites Gold-layer figures.

The medallion separation is the response to two recurrent failure modes: re-processing requirements (when source data changes after derived figures have been published, the Bronze layer permits clean re-processing) and audit defensibility (any figure published can be traced from Gold through Silver back to a specific Bronze record).

## 4.4 Third-party data integration

Third-party data is structurally important in tax administration. Returns are increasingly pre-populated from data captured outside the tax administration. The integration list typically includes:

- **Banks.** Account-holder reporting; interest-paid reporting; CRS / FATCA reporting at source.
- **Employers.** Payroll data; PAYE withholding; social-contribution reporting.
- **Land Registry.** Real-estate transactions; ownership transfers; property tax base.
- **Vehicle Registry.** Vehicle registration; transfer-of-ownership for stamp-duty purposes.
- **Customs.** Import-duty / VAT-on-import; export rebates.
- **Business Register / Companies House.** Incorporation and dissolution; group-structure changes.
- **Civil Registration.** Births, deaths, marriages — for individual-tax administration.
- **Pension and Social Security Funds.** Contribution data; benefit data.
- **Insurance / Stock Exchange / Financial Markets.** Where withholding obligations apply.

All third-party flows go through the External Integration Platform (Domain 5). The data lands in Bronze, is cleansed in Silver, and is joined to the Taxpayer Registry in Gold to produce pre-populated return inputs and risk-management features.

## 4.5 International data exchange

Tax administrations exchange data with foreign tax authorities under multilateral and bilateral instruments. The architectural touch points:

- **CRS reporting.** Annual report from financial institutions to the home tax authority; subsequent automatic exchange to partner authorities. Schema is OECD CRS XML.
- **FATCA reporting.** Where the country has an intergovernmental agreement with the US. Schema is FATCA XML.
- **CbCR (Country-by-Country Reporting).** Multinational-enterprise filing of country-by-country tax data. Exchanged among partner authorities. Schema is OECD CbCR XML.
- **DAC reporting (EU).** DAC1 covers savings income; DAC2 (CRS); DAC3 (advance cross-border rulings); DAC4 (CbCR); DAC5 (beneficial ownership); DAC6 (cross-border arrangements); DAC7 (digital platforms); DAC8 (crypto-assets).
- **VIES (EU).** Real-time validation of EU VAT numbers.
- **MAP (Mutual Agreement Procedure).** Case-by-case exchange under double-tax treaties. Architectural support is in Domain 4 (Case Management) plus Domain 5 (External Integration).

For EU accession countries, the international exchange surface is the most prescriptive part of the EA. Compliance is non-negotiable for accession. The PLAN phase sequences the EU-mandated work as a parallel track in the Strangler Fig roadmap (Section 7.2).

---

# Section 5: Tax Process Architecture

## 5.1 Core processes

A national tax administration EA covers the following core processes. Each is a high-level workflow; detailed activity-level workflows are produced during ADAPT phase using the SDA Reference Architecture (T47).

| Process | Trigger | Outcome |
|---------|---------|---------|
| **Taxpayer registration** | Person or entity becomes liable for a tax | Taxpayer recorded in the Taxpayer Registry; TIN issued; tax-type registrations activated. |
| **Filing of a return** | Tax-period close (monthly / quarterly / annual) | Return submitted, validated, assessed; account updated. |
| **Real-time reporting / e-invoicing** | Business issues an invoice | Invoice transmitted to the Tax Administration in real time (EN16931 / DRR); reporting obligation discharged. |
| **Payment** | Liability falls due | Payment received, allocated, reconciled with Treasury; account updated. |
| **Refund** | Refund situation arises (over-withholding, excess credit) | Refund calculated, eligibility-checked, fraud-screened, disbursed. |
| **Audit selection and execution** | Risk Management System refers a case | Case created in Case Management; audit conducted; findings recorded; assessment adjusted. |
| **Appeal / dispute resolution** | Taxpayer disputes an assessment | Administrative appeal or tribunal case; resolution; assessment adjusted or upheld. |
| **Enforced collection** | Liability remains unpaid after demand | Enforcement action (garnishment, asset recovery, third-party demand); debt collected or written off. |
| **Information exchange (international)** | Reporting obligation under treaty / EU directive | Outbound or inbound data exchange; integration to the Taxpayer Registry; risk-management feature creation. |
| **Voluntary disclosure** | Taxpayer self-discloses non-compliance | Reduced-penalty processing; compliance regularised. |

## 5.2 The Tax Administration 3.0 vision — seamless taxation

The OECD Tax Administration 3.0 vision is that tax compliance is embedded in the taxpayer's natural digital environment rather than performed through a tax-administration interface. In the 3.0 model:

- A business issues an invoice through its accounting software; the software calls the Tax Administration's e-invoicing API and the invoice is reported in real time.
- A wage-earner is paid by their employer; the payroll software calls the Tax Administration's PAYE API; the wage-earner's monthly tax is calculated and remitted at source. The wage-earner never files a return.
- A bank pays interest on a savings account; the bank's core system calls the Tax Administration's withholding API; the interest income is captured and the withholding is remitted.
- The Tax Administration's last-resort portal serves only the residual case — taxpayers whose income or transactions are not captured by any private-sector system.

Architecturally, the 3.0 vision is the operational expression of three GEATDM principles: PAERA §5.2 #4 (No Legacy by Design — software embedded in the natural digital environment is the new norm); PAERA §5.2 #5 (Once-Only); PAERA §5.2 #7 (Natural Digital Environment Integration). It is the most consequential architectural ambition any tax-administration programme can hold.

## 5.3 e-Invoicing and real-time reporting flow

The e-invoicing flow is the single most architecturally demanding tax process in modern administration. Its shape:

1. The business issues an invoice (sale of goods or services) through its accounting software.
2. The accounting software validates the invoice against the country's e-invoicing schema (EN16931 / national profile / UBL representation).
3. The invoice is transmitted to the Tax Administration's e-invoicing platform via the External Integration Platform (Domain 5). Transmission is typically through PEPPOL, a country-specific bus, or a direct API.
4. The Tax Administration validates the invoice (TIN of the issuer and recipient; numbering continuity; mathematical consistency; cross-checks against prior invoices).
5. On valid receipt, the Tax Administration acknowledges the invoice. The e-invoice is then legally valid.
6. The e-invoice data lands in the Data Platform (Bronze) and is processed through Silver and Gold layers within seconds.
7. The Risk Management System evaluates the invoice in near-real-time for fraud indicators (issuer-recipient relationship; invoice value distribution; cross-VAT-period anomalies).
8. VAT liability is calculated against the invoice; the Tax Services Platform updates the taxpayer's VAT account.
9. Periodic VAT returns are pre-populated from the e-invoice data; the taxpayer reviews and confirms rather than entering data.
10. Cross-border invoices feed the EU exchange channel (ViDA, DRR) where applicable.

The flow demonstrates four architectural properties: (1) the Tax Services Platform and the External Integration Platform are the receivers; (2) the Data Platform is the analytical substrate; (3) the Risk Management System is the real-time evaluator; (4) all of this happens without taxpayer-facing interaction beyond the issuance of the original invoice through commercial software.

## 5.4 Risk management and audit selection flow

The architectural shape of the risk-management flow:

1. The Tax Services Platform publishes events at every transaction (filing, payment, registration change, e-invoice).
2. The Data Platform ingests events into Bronze, processes through Silver, and surfaces analytical features in Gold.
3. The Risk Management System computes risk scores: rule-based indicators evaluate at every event; ML models score in batch (typically nightly) or in near-real-time for high-priority indicators; network analysis detects fraud rings.
4. Risk scores are written back to the Taxpayer Registry as a Gold-layer feature.
5. Risk-management campaigns target taxpayers above thresholds. Low-risk: nudge campaign through Messaging BB. Medium-risk: desk review case. High-risk: full audit case.
6. Audit selections are referred to the Case Management Platform via the event bus.
7. Case officers receive complete case packages: the return data, the risk assessment with explanation, historical filing patterns, third-party data context.
8. Audit outcomes are written back to the Risk Management System; the ML models are retrained on the outcome data; risk-indicator calibration improves over time.

The flow is the operationalisation of the OECD Compliance Risk Management framework. Its quality is constrained by data quality (Domain 2), by ML capacity (Domain 3), and by case-officer capacity (Domain 4).

## 5.5 Cross-border tax cooperation flow

The cross-border flow architecture:

1. CRS reporting. Annually, financial institutions report account-holder data to the Tax Administration through the External Integration Platform. Data lands in Bronze; passes through Silver to Gold; cross-border exchange (outbound) is generated as OECD CRS XML and transmitted to partner authorities through the OECD's Common Transmission System.
2. Inbound CRS. Partner-country CRS data arrives, is ingested, and is matched to the Taxpayer Registry (typically by name/date-of-birth/bank-account heuristics; manual reconciliation is required for ambiguous matches).
3. Inbound CRS data feeds the Risk Management System as a feature. Discrepancies between domestic data and inbound CRS data trigger risk indicators.
4. CbCR. Multinational enterprises file CbCR with the home authority; outbound exchange to partner authorities; inbound CbCR is integrated into the Risk Management System for transfer-pricing risk.
5. DAC reporting (EU). Each DAC directive defines a specific reporting flow; the External Integration Platform carries the messages; the Data Platform integrates the data.
6. MAP cases. Where treaties permit, the Tax Administration negotiates double-tax disputes with foreign authorities through case-by-case exchange. Architectural support sits in Domain 4 (case management) plus Domain 5 (cross-border message exchange).

The architectural value of well-implemented international cooperation is high: it reduces tax-base erosion, increases revenue, and strengthens the international standing of the country's tax administration.

## 5.6 Process metrics

A national tax administration EA includes process metrics tracked quarterly by the EA Board (T13).

| Metric | Source | Target |
|--------|--------|--------|
| Taxpayer Registry coverage of economically-active population | Taxpayer Registry vs Statistics Office population estimates | >95% by Wave 3 |
| E-filing rate (where e-filing is mandatory or available) | Tax Services Platform | >90% by Wave 2 end |
| E-payment rate | Tax Services Platform | >80% by Wave 2 end |
| Pre-populated return uptake | Tax Services Platform | >60% of eligible taxpayers by Wave 3 |
| Real-time reporting / e-invoice volume per quarter | E-invoicing platform | All B2B by Wave 2 end (where mandated); B2G earlier |
| Risk-model audit-yield (additional revenue per audit selected) | Risk Management System + Case Management | Tracked, reviewed for model improvement |
| Average audit cycle time (start to closing letter) | Case Management | <12 months by Wave 3 |
| Refund cycle time (90th percentile) | Tax Services Platform | <30 days by Wave 2 end |
| Bespoke Footprint (overall) | Source code analysis | <20% by Wave 3 (T60 §5) |
| API uptime (Tax Services Platform) | Operational monitoring | >99.9% during filing periods |
| CRS / DAC reporting completeness | External Integration Platform | 100% on regulatory deadlines |

---

# Section 6: Building Blocks for Tax Administration

## 6.1 GovStack BB usage in the tax sector

The GovStack Building Block catalogue (PAERA Annex A1.3) provides the foundational BBs. The tax sector uses a subset directly, plus tax-specific complementary BBs.

### 6.1.1 Direct use of GovStack foundational BBs

| GovStack BB | Tax-sector use |
|-------------|----------------|
| **Identity BB** | Taxpayer authentication (linked to National ID for individuals; linked to Business Register for legal entities); tax-officer authentication; intermediary authentication (accountants, agents). |
| **Information Mediator BB** (X-Road or equivalent) | Cross-government integration — Tax Administration ↔ customs ↔ social security ↔ business register ↔ land registry ↔ banks. The substrate of the External Integration Platform (Domain 5) for domestic exchange. |
| **Registration BB** | Taxpayer registration; tax-type registration; intermediary registration. |
| **Workflow BB** | Audit workflow; appeal workflow; refund-approval workflow; large-taxpayer-office case workflow. The Case Management Platform (Domain 4) is configured on the Workflow BB or an equivalent low-code platform. |
| **Payment BB** | Tax payment receipt; refund disbursement; VAT remittance integration with banks; integration with the Treasury Single Account. |
| **Messaging BB** | Filing-deadline reminders; nudge campaigns; refund-status notifications; audit-correspondence delivery. |
| **Consent BB** | Where the country implements consent as a shared service — for taxpayer-initiated data-sharing authorisations (e.g., agent authority, lender data access). |
| **Digital Wallet BB** | Where the country has deployed a national wallet — taxpayer holds tax certificates (residency, good-standing), e-invoices, payment receipts. |

### 6.1.2 Tax-specific complementary BBs

Three complementary BBs are widely deployed in mature tax architectures.

| Tax BB | Function | Reference implementations |
|--------|----------|---------------------------|
| **Rules as Code Engine** | Tax law expressed as machine-consumable rules; consumed by the Tax Services Platform (validation), by accounting-software vendors (embedded compliance), by the assessment engine (calculation), and by the Risk Management System (rule-based indicators). | Drools, KIE, OpenRules; commercial offerings (Oracle Policy Automation, Decision Manager); country-specific (NZ Rules as Code; OpenFisca for tax-and-benefit modelling). |
| **E-Invoicing Platform** | Receipt, validation, storage, and exchange of e-invoices under EN16931 / national profile / PEPPOL. | Country-specific (Italy SDI, Saudi Arabia ZATCA platform); commercial (SAP Document Compliance, Pagero); open-source (PEPPOL access points). |
| **Risk Scoring Engine** | Risk-indicator runtime; ML-model serving; risk-score storage. | Open-source ML serving (MLflow Model Registry, BentoML, Seldon Core); commercial (DataRobot, Dataiku, H2O). |

### 6.1.3 Optional: country-specific BBs

Some jurisdictions deploy additional sector-specific BBs:

| Country-specific BB | Function | Where deployed |
|--------------------|----------|----------------|
| **Tax Knowledge Graph** | Linked-data representation of taxpayers, transactions, related parties, beneficial owners. Supports network analysis and transfer-pricing risk. | Estonia, Finland, others. |
| **VAT-Gap Estimator** | Statistical estimation of VAT compliance gap for policy reporting. | EU member states; some non-EU jurisdictions. |
| **Treaty Database** | Treaty-by-treaty data on withholding rates, MAP procedures, exchange-of-information conditions. | Used by tax officers during audit. |

## 6.2 Priority Building Blocks for Tax by maturity stage

| Stage / Wave | BBs deployed |
|--------------|--------------|
| **Stage 2 → Stage 2.5 (Wave 1)** | Identity BB; Registration BB; Information Mediator BB; Payment BB; Workflow BB (configured for Case Management). |
| **Stage 2.5 → Stage 3 (Wave 2)** | Rules as Code Engine; E-Invoicing Platform; Risk Scoring Engine; Messaging BB; Consent BB. |
| **Stage 3 → Stage 4 (Wave 3)** | Digital Wallet BB; Tax Knowledge Graph; advanced ML serving. |
| **Stage 4 (Wave 4)** | Country-specific innovations; AI-assisted assessment; cross-border settlement BBs. |

A country at Stage 2 with mature foundational DPI (Identity BB, Information Mediator BB, Payment BB) can deploy Wave 1 tax BBs in 12–18 months team-effort time. A country without these foundations needs the Wave-0 foundation programme first.

## 6.3 BB integration with tax-sector applications

| Application | BBs consumed |
|-------------|--------------|
| Tax Services Platform | Identity (taxpayer, intermediary, officer); Registration; Rules as Code Engine; Information Mediator (for inbound third-party data); Payment; Messaging |
| Data Platform | Information Mediator (data ingestion from cross-government sources); cross-domain event bus |
| Risk Management System | Risk Scoring Engine (the core); Information Mediator (third-party data); Tax Knowledge Graph (where deployed) |
| Case Management Platform | Workflow BB (the core); Identity (officer, taxpayer); Information Mediator; Messaging |
| External Integration Platform | Information Mediator (for cross-government); dedicated international-exchange channels (CRS, FATCA, DAC, ViDA, PEPPOL) |
| E-Invoicing Platform | E-Invoicing BB (the core); Information Mediator; Identity; Messaging |

## 6.4 Sourcing decisions and Bespoke Footprint

The Build vs Buy vs Configure decision framework (T60 §6.1, TK-39) applied to tax administration produces a recognisable per-domain pattern:

| Domain | Default sourcing | Indicative Bespoke Footprint |
|--------|------------------|------------------------------|
| Tax Services Platform | Build the API layer (sector-unique business logic; high differentiation); Configure the residual portal (low-code) | 30–40% bespoke |
| Data Platform | Configure open-source stack (ClickHouse / Doris + dbt + Airflow); Build only the country-specific transformation logic | 5–10% bespoke |
| Risk Management System | Build ML / analytical models (organisation-specific); Configure the rule engine | 50–60% bespoke |
| Case Management Platform | Configure low-code (Joget DX, Camunda, OutSystems) | < 5% bespoke |
| External Integration Platform | Configure Information Mediator BB; Build country-specific adapters | 10–15% bespoke |
| **Overall (weighted)** | | **15–20%** |

The overall figure of 15–20% is within the GEATDM v1.1 target of <20%. A tax-administration EA programme that ends Wave 3 above 25% has lost the discipline; the EA Board commissions a review per T60 §5.4.

---

# Section 7: Implementation Path

## 7.1 Indicative timeline

The implementation timeline is indicative and assumes a country at Stage 2 (Tax Administration 2.0) at programme start with a legacy ITAS in operation. Mobilisation phase (T15 §4.1 — legal, political, budget, procurement, capacity) precedes Wave 1 and typically takes 12–24 months for a national tax-administration EA programme. Team-effort time inside each Wave is shown below.

| Wave | Maturity target | Team-effort time | Indicative deliverables |
|------|----------------|------------------|-----------------------|
| Wave 1 — Foundation | Stage 2.5 partial | 18 months | API gateway over the legacy ITAS; Data Platform Bronze + Silver layers; architecture-governance live; Taxpayer Registry modernisation Wave 1; first cross-tax integration (typically VAT to income tax); EA Board operational |
| Wave 2 — Wrap and Extend | Stage 2.5 → Stage 3 | 18 months | Data Platform Gold layer; VAT-gap estimation; Risk Management System operational; e-invoicing pilot for B2G; first Case Management workflows live; CRS / DAC reporting compliance |
| Wave 3 — Selective Replacement | Stage 3 → Stage 4 partial | 18 months | E-invoicing for all B2B; full Case Management rollout; Rules as Code engine deployed; legacy modules retired where the legacy genuinely blocks new capability; pre-populated returns for individuals |
| Wave 4 — Domain Independence and Tax 3.0 | Stage 4 | Ongoing | Each domain independently deployable; private-sector software is the dominant taxpayer interface; AI-assisted compliance management; cross-border settlement automation |

Calendar time per T15 §4.2 is longer. A national tax-administration EA programme typically takes 5–7 years calendar time from Wave 1 start to Wave 3 completion.

## 7.2 Strangler Fig + EU Accession dual-track roadmap

Where the country has EU accession on its agenda — or any equivalent regulatory deadline (a regional tax-cooperation agreement, an OECD Pillar Two implementation, a national fiscal-reform commitment) — the roadmap runs as a **dual track** from Day 1:

- **Track 1 — Foundation.** Data Platform plus API-gateway over legacy. Delivers analytical value without touching the legacy core. Architecturally lowest-risk; politically high-value; produces visible quick wins.
- **Track 2 — Time-bound regulatory work.** EU ViDA / DRR / EN16931 / VIES / DAC compliance, or the equivalent regulatory deadline. Politically non-negotiable; technically delivered through the External Integration Platform and the e-invoicing BB. Runs in parallel with Track 1 from Day 1.
- **Track 3 — Selective Replacement.** Strangler Fig modernisation of the core systems. API gateway over legacy first; event bus second; selective replacement only where the legacy genuinely blocks new capability. Track 3 follows Track 1 and is paced by the foundation it inherits.

The dual-track structure is the response to the Big-Bang Replacement Trap (T16 §4) in the tax-specific context where regulatory deadlines cannot be flexed. It is consistent with PAERA §5.7's wave-based roadmap shape.

## 7.3 Critical path

The critical path runs through:

1. **Legal framework.** Tax law amendments authorising e-invoicing, real-time reporting, expanded data collection, expanded international cooperation, automated assessment, and Rules as Code. Estimated 12–24 months for new legislation. T60 §6.2 (Activity 13.5a Legal Sequencing) and TK-32 (Legal Touch Points Note) are the operational tools.
2. **Taxpayer Registry modernisation.** Without an authoritative TIN registry, downstream architectural work has weak foundations.
3. **Data Platform Wave 1.** Track 1 of the dual-track roadmap. Without the Data Platform, the Risk Management System has nothing to consume.
4. **EU accession compliance (where applicable).** Track 2 deliverables on the regulatory deadline. Slippage threatens accession.
5. **Workforce capacity.** Tax-administration ICT capacity is typically thinner than for general digital-government work; intentional capacity-building from Wave 1 (T59 §5.1).

## 7.4 Common anti-patterns

The four most common anti-patterns observed in tax-administration EA programmes:

- **Big-bang ITAS replacement.** Procurement of a single contract to replace the legacy ITAS with a new one. Documented failure rate above 50% (TA RA §19.1). Treated by the Strangler Fig pattern in T16 §5 and Section 7.2 above.
- **Vendor-driven architecture.** A single vendor's product covering Tax Services, Data Platform, Risk Management, and Case Management. The canonical Vendor-Driven Architecture Trap (T16 §3). Treated by the five-domain decomposition and the procurement-governance discipline in T16 §3.5.
- **Bespoke case-management platform.** Case management built as a custom system rather than configured on a low-code platform. Drives Bespoke Footprint above 30% on its own. Treated by the Configure-on-low-code default in Section 3.5.
- **Tax-administration portal as the dominant taxpayer interface.** Government continuing to invest in its own taxpayer-facing channels rather than embracing the platform-first model of Tax Administration 3.0. Treated by Architectural Principle 1 (Section 1.5) and by the Tax Services Platform decision (Section 3.2).

## 7.5 Cross-references

| Topic | Reference |
|-------|-----------|
| Public-sector reality (legal, political, budget, procurement, capacity) | T15 |
| Architectural traps and Strangler Fig | T16 |
| Stakeholder engagement (Tier 1 / Tier 2 / Tier 3) | T59 |
| Sourcing strategy and Bespoke Footprint | T60 |
| Interoperability framework (substrate of TA RA's External Integration Platform — Domain 5) | 08-Interoperability |
| DPI roadmap (foundational pillars consumed by tax administration) | 09-DPI |
| SDA Reference Architecture | T47 |
| GEATDM-Sector-Customs (parallel SDA sector guide) | 06-Sector-Guides/GEATDM-Sector-Customs-v1.0 |
| GEATDM-Sector-Health (multi-type sector guide) | 06-Sector-Guides/GEATDM-Sector-Health-v1.0 |
| GEATDM-Sector-Education (multi-type sector guide) | 06-Sector-Guides/GEATDM-Sector-Education-v1.0 |
| **IMF Tax Administration Reference Architecture v0.1** (the deeper-dive operational reference for tax administration) | March 2026; provides chapter-level depth for each domain (Chapters 7–11), the full capability map (Chapter 5), the architectural principles (Chapter 4), the sourcing strategy (Chapter 17), the organisational alignment (Chapter 18), and the Strangler Fig dual-track roadmap (Chapter 19) |
| OECD Tax Administration 3.0 | oecd.org/tax/forum-on-tax-administration |
| OECD Compliance Risk Management framework | oecd.org/tax |
| EU ViDA (VAT in the Digital Age) | ec.europa.eu/taxation_customs |
| OECD CRS / FATCA | oecd.org/tax/automatic-exchange |
| EN16931 e-invoicing | cen.eu |
| PEPPOL | peppol.org |
| ISO 20022 | iso20022.org |
| GovStack BB specifications | specs.govstack.global |
| IMF TADAT | tadat.org |

---

# DOCUMENT CONTROL

## Approval Record

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Author | FiscalAdmin OÜ | May 2026 | — |
| Reviewer | TBD | — | — |
| Approver | TBD | — | — |

## Distribution

| Recipient | Format | Date |
|-----------|--------|------|
| GEATDM Method Repository | Markdown | May 2026 |
| ITU / Giga | DOCX + PDF | TBD |

---

*GEATDM — Making Digital Transformation Practical*

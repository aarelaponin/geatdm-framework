# GEATDM — SOURCING STRATEGY (PLAN PHASE EXTENSION)

**Document:** GEATDM-WP5-T60-SourcingStrategy-v1.0
**Part of:** Method Guide (PLAN phase extension)
**Version:** 1.0
**Date:** May 2026
**Status:** Released
**License:** Creative Commons Attribution 4.0

---

## DOCUMENT CONTROL

| Attribute | Value |
|-----------|-------|
| Document ID | GEATDM-WP5-T60 |
| Title | Sourcing Strategy — Build vs Buy vs Configure, Vendor Lock-in Prevention, Bespoke Footprint KPI |
| Version | 1.0 |
| Date | May 2026 |
| Status | Released |
| Authors | FiscalAdmin OÜ |
| Reviewers | TBD |
| License | CC-BY 4.0 |

### Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | May 2026 | Initial release. |

---

## TABLE OF CONTENTS

1. Introduction
2. The Build vs Buy vs Configure decision framework
3. Per-domain default sourcing patterns
4. Vendor lock-in prevention
5. The Bespoke Footprint KPI
6. Integration with PLAN phase activities
7. Cross-references
8. Glossary

---

# 1. INTRODUCTION

## 1.1 Purpose

This document extends the PLAN phase of the Method Guide (T58 §13) with the sourcing-strategy discipline that GEATDM v1.1 makes explicit. It addresses three concerns that earlier versions of GEATDM treated as guidance rather than as part of the formal method:

- The Build vs Buy vs Configure decision for each capability in the TO-BE Architecture.
- The vendor-neutrality discipline that prevents the Vendor-Driven Architecture Trap (T16 §3).
- The Bespoke Footprint KPI that prevents the Bespoke Software Trap (T16 §2).

The extension is short. Practitioners run the PLAN phase as before; the activities defined here add four touch-points within Section 13 of the Method Guide.

## 1.2 Where it sits in GEATDM

| Document | Relationship |
|----------|-------------|
| T15 Public Sector Reality | Establishes the budget, procurement, and capacity constraints this extension operationalises. |
| T16 Architectural Traps | Names the Bespoke and Vendor-Driven traps; this extension is the practical response. |
| T58 Method Guide §13 PLAN | This document extends Section 13 with four new activities (13.4a Sourcing Decision; 13.5a Legal Sequencing; 13.8 Procurement Sequencing; 13.10 Bespoke Footprint Baseline). |
| T61 Toolkit | TK-17 Business Case Template and TK-20 Resource Estimation Template are extended; new templates TK-32, TK-37, TK-38, TK-39 are added by the companion Toolkit supplement. |
| T13 EA Governance | The EA Board enforces the discipline through quarterly KPI review and dispensation governance. |

## 1.3 Source frameworks

- **PAERA §4.5 Digital Co-creation** — Budget, Procurement, IT Project, Maintenance.
- **PAERA §5.6 Sourcing Strategy** — build / buy / share / sandbox.
- **IMF Tax Administration Reference Architecture v0.1, §17 Sourcing Strategy** — Build vs Buy vs Configure decision framework, vendor lock-in prevention, Bespoke Footprint KPI.
- **GEATDM-WP1-T16 Architectural Traps** — the Bespoke Software Trap (§2) and the Vendor-Driven Architecture Trap (§3).

## 1.4 How to read this document

Read Section 2 to understand the decision framework. Read Section 3 to see the per-domain defaults that the practitioner adapts. Read Section 4 for the contractual and architectural protections against vendor lock-in. Read Section 5 for the KPI definition. Read Section 6 for the specific PLAN-phase activities that consume this guidance.

---

# 2. THE BUILD vs BUY vs CONFIGURE DECISION FRAMEWORK

## 2.1 Three sourcing modes

GEATDM recognises three sourcing modes for each capability in the TO-BE Architecture:

- **Build** — bespoke development, where the organisation owns and maintains the code itself or through contracted suppliers. The capability is implemented as new code written specifically for the country and the sector.
- **Buy** — commercial off-the-shelf (COTS) software, where the organisation licenses a maintained third-party product. The vendor maintains the code; the organisation configures it within the limits the vendor allows.
- **Configure** — open-source platform configuration or low-code platform configuration, where the organisation uses a maintained platform and expresses its specific business logic through configuration (forms, workflows, rules, schemas) rather than through code.

The fourth mode in PAERA §5.6, **Share**, is a special case that crosses the build/buy/configure axis — the organisation shares a capability with another government organisation rather than producing its own. Sharing is treated in this document as a sourcing-mode modifier rather than a separate mode: a shared capability can be built jointly, bought jointly, or configured jointly.

## 2.2 Why public-sector defaults to "Configure" wherever possible

Three reasons, each grounded in the public-sector reality (T15):

- **Capacity.** Public-sector salaries cannot match the private sector at the architect and senior-engineer levels (T15 §3.5). An organisation that builds bespoke software at scale is committing to a sustained recruitment and retention effort that the salary structure does not support.
- **Maintenance horizon.** Public-sector systems run for 10 to 20 years. Bespoke code maintained over that horizon by a workforce that turns over twice produces the failure mode in T16 §2 (the Bespoke Software Trap).
- **Cost recovery.** Building bespoke software requires a higher up-front budget than configuring a platform. Multi-year budget cycles (T15 §3.3) make the up-front higher cost harder to fund. Configured platforms shift cost from CapEx to OpEx in a way that aligns better with annual budget appropriation.

The default sourcing mode for any capability is therefore **Configure**, unless the capability is genuinely unique to the country or the sector and no maintained platform supports it. Build is reserved for that residual case. Buy is selected where the country has an active commercial market for the capability and the licensing terms are sustainable.

## 2.3 The decision matrix

For each capability in the TO-BE Architecture, the practitioner selects a sourcing mode using the following decision matrix.

| Question | Answer | Indicative sourcing mode |
|----------|--------|--------------------------|
| Q1. Is the capability a maintained DPI Building Block (Identity, Payments, Information Mediator, Digital Wallet, Workflow)? | Yes | **Configure** the existing DPI BB. The organisation does not build foundational DPI; it integrates with what the country already operates. |
| Q2. Is the capability a generic enterprise function (case management, workflow, document management, reporting)? | Yes | **Configure** an open-source or commercial low-code platform. Joget DX 8.x is the GovStack reference low-code platform. |
| Q3. Is the capability a sectoral business function with a maintained commercial product on the market (financial accounting, HRMS, CRM)? | Yes | **Buy** a commercial off-the-shelf product. Configure within the vendor's supported configuration surface. |
| Q4. Is the capability genuinely unique to the country, the sector, or the operational model, with no maintained platform supporting it? | Yes | **Build** as bespoke development, with the disciplines in §4 (vendor lock-in prevention) and §5 (Bespoke Footprint KPI) applied. |
| Q5. Is the capability already operated by another government organisation that could share it? | Yes | **Share** the capability. Build, Buy, or Configure jointly with the partner organisation. |

The practitioner records the decision in a Sourcing Decision Matrix (Toolkit TK-39, companion supplement) for every capability in the TO-BE Architecture. The matrix is reviewed by the EA Board.

## 2.4 The "build" exception requires evidence

A Build decision for any capability requires the practitioner to record three pieces of evidence:

1. **Why the alternatives were rejected.** Specifically: what platforms were considered, what features were missing, what the gap analysis showed.
2. **What the long-term ownership and maintenance plan is.** Who maintains the bespoke code, with what staff, against what budget, over how many years.
3. **What the exit option is.** If the bespoke code becomes unsustainable in five years, what is the path to migrate to a maintained platform.

Without these three pieces of evidence, the EA Board does not approve Build decisions. This is the GEATDM v1.1 response to the Bespoke Software Trap (T16 §2) and is enforced by the EA Board governance process (T13).

---

# 3. PER-DOMAIN DEFAULT SOURCING PATTERNS

The decision matrix in §2.3 produces the right answer for any capability if applied carefully. To accelerate the practitioner's work, GEATDM publishes per-domain defaults. The defaults are starting points; the practitioner verifies each one against country context.

## 3.1 Per-domain defaults

| Architectural domain | Default sourcing mode | Rationale |
|---------------------|----------------------|-----------|
| Foundational DPI Building Blocks (Identity, Payments, Information Mediator) | **Configure** the existing national BB | The country operates these as DPI; the organisation integrates. |
| Government horizontal systems (HRMS, financial accounting, document management, case management) | **Configure** open-source or **Buy** commercial COTS | Mature commercial and open-source markets exist. |
| Authoritative registries (taxpayer, beneficiary, learner, patient, vehicle, parcel) | **Build** sectoral business logic + **Configure** generic registry capability on a low-code platform | Business rules are sector-unique; registry mechanics are generic. |
| Service portals (public-facing) | **Configure** low-code platform with country branding and language pack | Portal mechanics are generic; content is country-specific. |
| Workflow and approvals | **Configure** workflow engine (Joget DX, Camunda, alternative from GovMarket) | Workflow is generic; the specific business process is configuration. |
| Sectoral analytics and reporting | **Configure** open-source data platform (e.g., dbt + ClickHouse + Airflow) | Data platform tooling is generic; analytical models are sector-specific. |
| Sector-specific risk scoring and machine learning | **Build** ML pipelines using country-specific data | Models are organisation-specific. Pipelines configure standard ML libraries. |
| Public-sector application integration | **Configure** Information Mediator BB (X-Road or equivalent) | The integration platform is the country's DPI. |
| Cross-cutting concerns (audit, logging, monitoring, security) | **Configure** standard tooling | These are commodity capabilities. |

## 3.2 Reading the defaults

Two interpretation rules:

1. **Where the country's DPI is mature**, the Configure defaults compound. A new sectoral service consumes Identity from the national Identity BB, Payments from the national Payments BB, integration from the Information Mediator BB, and runs on a configured low-code platform. The Build footprint shrinks to sectoral business logic and sector-specific registries.

2. **Where the country's DPI is immature**, the practitioner cannot Configure what does not exist. The PLAN phase then includes either a Build decision for the foundational BB the country lacks (with appropriate scrutiny — these are large commitments), or a sequencing decision that defers the sectoral work until the foundational DPI is operational.

## 3.3 Worked example — Lesotho Agricultural Subsidy Management System

Drawn from the Lesotho ASMS implementation (October 2024 onwards):

| Capability | Sourcing decision | Rationale |
|-----------|------------------|-----------|
| Farmer Identity (national ID verification) | Configure existing PNIA-equivalent | National ID system is operational. |
| Subsidy payment disbursement | Configure existing Payment BB | Mobile-money + central-bank fast payment system available. |
| Farmer registration form and workflow | Configure on Joget DX 8.x | Generic form/workflow; sector-specific fields configured. |
| Eligibility rules engine | Build sector-specific rules in DRL/decision tables | Sector-unique business logic. |
| Reporting dashboard | Configure on the low-code platform | Generic dashboards; sector-specific data sources. |
| Information mediation between ASMS, Land Registry, and Ministry of Finance | Configure Information Mediator BB | Cross-government data exchange. |

Net Bespoke Footprint for the deployed ASMS: approximately 8% (eligibility rules engine and a small number of country-specific extensions). The remainder is configured on Joget DX 8.x and the country's existing DPI.

---

# 4. VENDOR LOCK-IN PREVENTION

## 4.1 Why this matters

The decision matrix in §2 produces a sourcing-mode decision per capability. That is necessary but not sufficient. If a Buy decision is taken without lock-in prevention, the organisation has chosen the Vendor-Driven Architecture Trap with extra steps. The protections in this section apply to every Buy and every Configure decision and to most Build decisions where bespoke development is contracted to a supplier.

## 4.2 Multi-vendor strategy

Where a domain capability has multiple credible suppliers, the architecture's default position is to use at least two. Specifically:

- **Case management.** Joget DX, Camunda, OutSystems, Mendix, ServiceNow are all credible. The organisation should be able to operate workflows on at least two of these.
- **Data platform.** ClickHouse, Apache Doris, PostgreSQL with appropriate tooling are credible. The organisation should be able to operate the analytical workload on at least two.
- **Identity providers.** The country's national ID is the authoritative source; for federation, multiple identity providers (Keycloak, the country's own platform, OAuth providers) should be able to integrate.
- **Cloud / infrastructure.** Government cloud where available; otherwise regulated public cloud with portability to a second provider verified by infrastructure-as-code.

Where only one credible supplier exists in the country market, the architecture treats this as a risk and documents it in the Risk Register (TK-19). Mitigation: verify that the supplier's product can be operated by the organisation itself if the supplier exits.

## 4.3 API contracts as supplier interface

The interface between the organisation and any supplier (Buy or contracted Build) is defined by API contracts. Specifically:

- Every interface that the supplier exposes to the rest of the architecture is defined by an OpenAPI 3.x specification.
- The OpenAPI specification is owned by the organisation, not by the supplier. The organisation publishes it; the supplier's product implements it.
- The supplier may change the implementation behind the API as long as the contract is honoured. The organisation may switch suppliers as long as the new supplier honours the contract.
- The OpenAPI specification is part of the procurement documentation and a contractual deliverable.

This discipline is the architectural protection against the Vendor-Driven Architecture Trap. It also operationalises EA Principle APP-05 (API-First Design).

## 4.4 Data portability requirements

Every contract with a supplier (Buy or Build) includes a data portability clause. The clause specifies:

- The organisation's data remains the organisation's property.
- On termination of the contract for any reason, the supplier delivers all of the organisation's data in standard, documented, non-proprietary formats (CSV, JSON, Parquet, or a domain-specific open standard) within 30 calendar days.
- The supplier delivers the database schema and any necessary documentation so that the organisation can load the data into a successor system.
- The supplier deletes all copies of the organisation's data after the data has been delivered, with documented confirmation.

The data portability clause is a procurement deliverable, not an afterthought. The Procurement Specification Template (TK-38) provides standard text.

## 4.5 Documentation requirements

Every supplier contract includes documentation requirements that allow another supplier to take over operations:

- Architecture documentation (system context, deployment, integration points) at the level of detail in T58 §11 ASSESS.
- Operational runbooks for routine operations and incident response.
- Configuration documentation: every configurable parameter with its purpose and acceptable range.
- Source code (for Build contracts) under the organisation's source control, not the supplier's.
- The organisation's test data and test cases under the organisation's source control.

These are contractual deliverables, not goodwill items. A supplier that resists is a supplier the organisation should not engage. The Procurement Specification Template (TK-38) makes this explicit.

---

# 5. THE BESPOKE FOOTPRINT KPI

## 5.1 Definition

**Bespoke Footprint** is the ratio of bespoke code to total production code, expressed as a percentage. The denominator is the total number of lines of code in production across all systems the organisation owns or contracts. The numerator is the number of those lines that are bespoke (custom code written specifically for the organisation, by the organisation or its contractors), as opposed to code provided by a maintained third-party product (commercial, open-source, or low-code platform).

The KPI is defined in T16 §2.5; this section provides the calculation discipline for the PLAN phase.

## 5.2 Calculation

The KPI is calculated quarterly, automatically, using source code analysis tools.

**Step 1.** Identify every system the organisation operates or contracts. The list is maintained by the EA Practice (T13) and includes every production system, regardless of supplier.

**Step 2.** For each system, calculate total lines of code in production. Use a standard code-counting tool (cloc, scc, or equivalent). Exclude blank lines and comments.

**Step 3.** For each system, classify each file:

- **Bespoke** — code written by the organisation or its contractors for the organisation. Includes custom modules, custom interfaces, custom reports, custom rules. Includes contracted bespoke development.
- **Configured** — declarative artefacts (forms, workflows, rules, schemas, configuration files) that express the organisation's specific behaviour on top of a maintained platform.
- **Platform** — code from the maintained third-party product (commercial product code, open-source library code, low-code platform code).

The classification is captured in the system's manifest. Where the boundary between Bespoke and Configured is unclear (for example, a Joget DX form that contains a non-trivial JavaScript expression), the practice maintains classification rules that are reviewed by the EA Board annually.

**Step 4.** Sum across systems. Bespoke Footprint = (total Bespoke lines) ÷ (total Bespoke + Configured + Platform lines), expressed as a percentage. Some organisations exclude Platform from the denominator, producing a stricter ratio Bespoke ÷ (Bespoke + Configured); GEATDM uses the inclusive denominator unless the EA Board specifies otherwise.

**Step 5.** Report quarterly to the EA Board.

## 5.3 Targets by domain

| Domain | Target Bespoke Footprint |
|--------|--------------------------|
| Foundational DPI BBs the country consumes | < 5% |
| Government horizontal systems | < 10% |
| Service portals and case management | < 10% |
| Sectoral business logic genuinely unique to the country | up to 60% |
| Cross-cutting concerns (audit, logging, monitoring, security) | < 5% |
| **Overall, weighted across all domains** | **< 20%** |

The overall target of 20% is an EA Board commitment, not a vanity metric. An organisation whose overall Bespoke Footprint exceeds 25% in any quarter triggers a review.

## 5.4 Drift response

When the overall Bespoke Footprint exceeds 25%, the EA Board commissions a review with three questions:

1. **Which build decisions in the last four quarters increased the footprint?** Were the alternatives properly considered? Were the §2.4 evidence requirements (alternatives rejected, ownership plan, exit option) actually met?
2. **Are configured artefacts being misclassified as bespoke?** Sometimes the drift is a measurement artefact: a change in how the platform expresses workflows, for example, can move lines from Platform to Configured.
3. **Is the architecture losing the discipline to prefer configuration over custom?** If so, the EA Board issues a formal directive to the next round of architectural decisions and reviews the Sourcing Decision Matrix template (TK-39) for clarity.

The review is published in the EA Board minutes. The remediation actions are tracked through the regular EA Board cadence.

## 5.5 What the KPI does not measure

The Bespoke Footprint KPI is a measure of code volume, not of code quality, value, or risk. Two limitations to keep in mind:

1. **A small bespoke footprint can carry disproportionate risk** if it is the most critical part of the architecture. A 5% bespoke footprint that contains the eligibility rules engine for the country's social protection system is mission-critical even though it is small.
2. **A large bespoke footprint can be acceptable** if it is genuinely unique sectoral business logic, well-managed, and supported by sustained ownership. The 60% target for sectoral business logic recognises this.

The KPI is a discipline against unintentional drift, not a scoring system for absolute quality.

---

# 6. INTEGRATION WITH PLAN PHASE ACTIVITIES

The PLAN phase in T58 §13 has 8 main activities. This extension adds four touch-points within those activities. The original activity numbering is preserved; the new touch-points are inserted as 13.4a, 13.5a, 13.8a, and 13.10a.

## 6.1 Activity 13.4a — Sourcing Decision (NEW)

**Inputs.** TO-BE Architecture from ADAPT phase.

**Purpose.** For every capability in the TO-BE Architecture, select a sourcing mode (Build, Buy, Configure, or Share) using the decision matrix in §2.3 above. Apply the per-domain defaults in §3.1 as starting points. Document the decision and the rationale.

**Output.** Sourcing Decision Matrix (Toolkit TK-39) covering the entire TO-BE Architecture.

**Decision authority.** EA Board approves the matrix. Build decisions require the §2.4 evidence (alternatives rejected, ownership plan, exit option).

## 6.2 Activity 13.5a — Legal Sequencing (NEW)

**Inputs.** Sourcing Decision Matrix; legal framework documentation (existing legislation, regulations, administrative decrees).

**Purpose.** For each capability that requires a sourcing decision, identify the legal touch points: which primary legislation, secondary legislation, or administrative legislation must be in force for the capability to operate lawfully (T15 §3.1, PAERA §5.2 Principle #1).

**Output.** Legal Touch Points Note (Toolkit TK-32) per capability or per cluster of related capabilities.

**Sequencing rule.** A capability that depends on legislation not yet in force is not a Wave 1 deliverable. The roadmap places it in a Wave that is consistent with the realistic legislative timeline. The Legal Touch Points Note documents the timeline assumptions.

**Decision authority.** Legal advisor signs off the Legal Touch Points Note. EA Board approves the sequencing impact on the roadmap.

## 6.3 Activity 13.8a — Procurement Sequencing (NEW)

**Inputs.** Sourcing Decision Matrix; Bespoke / Buy / Configure decisions; procurement law and standing framework agreements.

**Purpose.** For each capability that requires Buy or contracted Build, design the procurement vehicle. Apply the procurement-governance discipline from T16 §3.5 (outcome-based specifications; single-domain-per-procurement decomposition; published-and-binding architecture; framework contracts with multiple lots).

**Output.** Procurement Specification (Toolkit TK-38) per Wave-1 procurement; framework contract decomposition for Wave 2 onwards.

**Sequencing rule.** A capability that depends on a procurement vehicle that does not yet exist is not a Wave 1 deliverable until the procurement is administratively ready (RFP issued, evaluation criteria published, evaluation panel constituted).

**Decision authority.** Procurement officer (process); EA Board (architectural fit); programme sponsor (budget commitment).

## 6.4 Activity 13.7a — Budget Application (extended)

**Inputs.** Sourcing Decision Matrix; resource estimation from Activity 13.6.

**Purpose.** Where the funding for the roadmap is not yet secured (typical for Wave 2 onwards), prepare the budget application that the public-finance-management cycle requires. Apply the multi-year, outcome-based, dedicated-platform-fund framing recommended by PAERA §4.5.

**Output.** Budget Application Business Case (Toolkit TK-37). Distinct from the general Business Case Template (TK-17), which addresses the EA initiative as a whole; TK-37 is per-Wave or per-procurement.

**Sequencing rule.** The Wave's start date is the later of (a) the date when the budget application is approved, and (b) the date when the procurement vehicle is operational.

**Decision authority.** Programme sponsor and Finance Ministry.

## 6.5 Activity 13.10a — Bespoke Footprint Baseline (NEW)

**Inputs.** Production systems list; source code analysis results.

**Purpose.** Measure the organisation's current Bespoke Footprint as a baseline. The PLAN phase commits to a target footprint at the end of each Wave.

**Output.** Bespoke Footprint baseline measurement; per-Wave reduction targets in the Implementation Roadmap (TK-16).

**Decision authority.** EA Board approves the targets.

---

# 7. CROSS-REFERENCES

## 7.1 Internal GEATDM cross-references

| Topic | Document |
|-------|----------|
| Public-sector reality (legal, political, budget, procurement, capacity) | T15 |
| The Bespoke Trap and Vendor-Driven Trap | T16 §2, §3 |
| Strangler Fig pattern (the Wave-based modernisation that consumes these decisions) | T16 §5 |
| Stakeholder engagement (political sponsorship for budget applications) | T59 |
| EA Governance and the EA Board | T13 |
| Method Guide PLAN phase | T58 §13 |
| Toolkit — existing entries extended | TK-16 (Roadmap), TK-17 (Business Case), TK-19 (Risk Register), TK-20 (Resource Estimation) |
| Toolkit — new entries | TK-32 Legal Touch Points Note; TK-37 Budget Application Business Case; TK-38 Procurement Specification Template; TK-39 Sourcing Decision Matrix (companion supplement) |
| Cross-cutting modules where sourcing decisions are intensive | 08-Interoperability §3 (per-domain default sourcing); 09-DPI §7 (Investment Prioritisation with sourcing strategy) |

## 7.2 External references

- PAERA v1.0 — §3.2 Legal Framework, §4.5 Budget / Procurement / IT Project / Maintenance, §5.6 Sourcing Strategy.
- IMF Tax Administration Reference Architecture v0.1 — §17.1 Build vs Buy vs Configure Decision Framework, §17.2 Vendor Lock-In Prevention, §17.3 Bespoke Footprint KPI.
- GovStack GovMarket — govmarket.govstack.global — catalogue of low-code, COTS, and open-source platforms with current footprint and country adoption status.
- ITU DPI Safeguards Initiative — investment guidance and procurement principles.

---

# 8. GLOSSARY

| Term | Definition |
|------|------------|
| **Build** | Bespoke development. The organisation owns and maintains the code. |
| **Buy** | Commercial off-the-shelf. The organisation licenses a maintained third-party product. |
| **Configure** | Open-source or low-code platform configuration. Generic platform plus organisation-specific declarative artefacts. |
| **Share** | Sourcing-mode modifier. The capability is built, bought, or configured jointly with another government organisation. |
| **Bespoke Footprint** | Ratio of bespoke code to total production code; KPI tracked quarterly; target less than 20% overall. |
| **Sourcing Decision Matrix** | The PLAN-phase deliverable that records the Build / Buy / Configure / Share decision for every capability in the TO-BE Architecture. |
| **API contract** | The OpenAPI specification that defines the interface between the organisation and a supplier. Owned by the organisation, implemented by the supplier. |
| **Data portability clause** | The contract clause requiring the supplier to deliver all of the organisation's data in standard non-proprietary formats on contract termination, with deletion confirmed. |
| **Legal touch point** | A specific instrument (primary legislation, secondary legislation, administrative decree) that must be in force for an architectural capability to operate lawfully. |

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

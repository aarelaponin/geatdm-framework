# GEATDM Digital Public Infrastructure Reference Model

**Document:** GEATDM-DPI-Reference-Model-v1.0
**Part of:** DPI Module (09)
**Version:** 1.0
**Date:** May 2026
**Status:** Released
**License:** Creative Commons Attribution 4.0

---

## Document Control

| Attribute | Value |
|-----------|-------|
| Document ID | GEATDM-DPI-Reference-Model |
| Title | DPI Reference Model |
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

- Section 1: Introduction
- Section 2: The Five-Domain Model
- Section 3: Domain 1 — Digital Access
- Section 4: Domain 2 — Digital Data Infrastructure
- Section 5: Domain 3 — Interoperability
- Section 6: Domain 4 — Digital Identity
- Section 7: Domain 5 — Governance (Cross-cutting)
- Section 8: Maturity Model
- Section 9: Cross-References

---

# Section 1: Introduction

## 1.1 Purpose

Digital Public Infrastructure (DPI) is the foundational layer of digital government. It is the set of shared, reusable, openly-accessible national platforms on which every sectoral service is built. A country with mature DPI delivers new sectoral services in weeks; a country without it delivers them in years and at proportionately higher cost.

This document is the GEATDM reference model for national DPI. It defines what DPI is, how it is structured into five domains, what each domain contains, and how a country's DPI maturity is assessed. It is the conceptual foundation that the companion Method document (GEATDM-DPI-Method-v1.0) and Toolkit (GEATDM-DPI-Toolkit-v1.0) consume.

## 1.2 What DPI is and what it is not

**DPI is** a set of foundational, sector-neutral national capabilities — typically operated by the central digital authority of the country — that any sectoral application can consume. The five domains in this reference model describe the full scope.

**DPI is not** a sector-specific application (Education Management Information System, Hospital Management System, Tax Filing Platform). Sectoral applications consume DPI; they are not part of it.

**DPI is not** a single product. It is a portfolio of foundational capabilities, each of which can be sourced and operated independently within an integrated architecture.

**DPI is not** a one-off project. It is a permanent national capability requiring sustained funding, governance, and capacity-building.

## 1.3 Where this module sits in GEATDM

The DPI module sits parallel to the Interoperability module (08) and to the sector guides (06). Its relationship to the rest of GEATDM:

- **DPI before sectors.** A country's DPI assessment scopes the foundational pillars that any sectoral architecture will consume. Before designing a Health EA or an Education EA, the country knows where its DPI maturity stands and what gaps the sectoral architecture will encounter.
- **DPI includes Interoperability.** Interoperability is one of the five DPI domains. The Interoperability module (08) provides the depth treatment for that domain; this DPI module references it rather than duplicating it.
- **PAERA is normative.** PAERA §3.4 (Foundational Pillars) is the reference framework. PAERA §5.3 (DPI Assessment) and §5.7 (Recommended Roadmap) are the methodological anchors. The five-domain model in this document operationalises PAERA §3.4 with the addition of a Governance cross-cutting domain.

## 1.4 Source frameworks

| Framework | Role |
|-----------|------|
| **PAERA v1.0** | Normative reference. §3.4 Foundational Pillars (Access, Digital Data, Interoperability, Digital Identity); §5.1 Capabilities Assessment; §5.3 DPI Assessment; §5.6 Sourcing Strategy; §5.7 Recommended Roadmap (4 stages); §5.2 Principles. |
| **UNDP Universal DPI Safeguards Framework** | Policy framework for DPI governance and rights. |
| **ITU DPI Safeguards Initiative** | Investment guidance and procurement principles. |
| **World Bank ID4D Initiative + DE4A (Digital Economy for Africa)** | Investment models and country-comparator data. |
| **50-in-5** | Country-DPI commitments and peer learning. |
| **India DPI (IndiaStack, Aadhaar, UPI, DigiLocker, DEPA, ABDM)** | Reference implementation; the most cited country DPI model. |
| **Brazil Pix (BCB)** | Reference implementation for the payment pillar. |
| **Estonia X-Road and digital identity** | Reference implementation for interoperability and identity pillars. |
| **AU Digital Transformation Strategy 2020–2030** | Continental policy frame for DPI in Africa. |
| **GovStack BB specifications** | International specifications for the building blocks consumed by DPI domains. |

## 1.5 How to read this document

Read Section 2 to understand the five-domain model. Sections 3 to 7 are the per-domain depth — read each before assessing the corresponding pillar in your country. Section 8 is the maturity model — consult it during the assessment to score each domain. The companion Method document then describes the seven-step approach to producing a national DPI assessment and roadmap; the Toolkit provides the questionnaires and templates.

---

# Section 2: The Five-Domain Model

## 2.1 The five domains

A country's DPI is decomposed into five domains. The first four are PAERA's four Foundational Pillars (§3.4); the fifth, Governance, is a cross-cutting concern that enables and constrains the other four.

| Domain | Concern | PAERA section |
|--------|---------|---------------|
| **1. Digital Access** | The country's connectivity, devices, service-delivery channels, accessibility | §3.4.1 |
| **2. Digital Data Infrastructure** | Authoritative registries, data governance, master data management | §3.4.2 |
| **3. Interoperability** | The technical and legal framework for data exchange across systems | §3.4.3 |
| **4. Digital Identity** | Foundational and functional identity for citizens, businesses, public servants | §3.4.4 |
| **5. Governance** *(cross-cutting)* | Strategy, policy, legal framework, institutional structure, financing, capacity, oversight | §3.1, §3.2, §5 |

Each domain has sub-components (described in Sections 3–7) and an assessment-criteria framework (Section 8 plus the Toolkit).

## 2.2 Why five domains and not four

PAERA §3.4 names four foundational pillars. The fifth domain — Governance — is added in this reference model because:

- **Governance is the precondition for the other four.** Without a national digital strategy, a legal framework, an operating institution, and sustainable financing, the other four domains cannot be built or operated. PAERA §3.1 (Governance & Policy) and §3.2 (Legal Framework) document this dependency.
- **Governance is cross-cutting, not foundational in the same sense.** The four pillars produce technical capabilities. Governance produces the conditions under which those capabilities are usable.
- **Practical assessment requires it.** Country DPI assessments routinely surface that the gap is governance, not technology. Treating governance as a discrete domain makes the gap visible and addressable.

This is consistent with PAERA §5 (Implementation Framework) which devotes most of its attention to governance, principles, sourcing, and roadmap — not to the technology of the four pillars.

## 2.3 Inter-domain dependencies

The five domains are not independent. The standard dependency map:

```
Governance (5) ─┬──────────────────┬─ enables and bounds all other domains
                │                  │
       Identity (4) ───┐           │
                       ├─→ Interoperability (3) ───→ Sectoral applications
       Data (2) ───────┘           │
                                   │
       Access (1) ─────────────────┘
```

- **Identity (4) and Data (2) feed Interoperability (3).** Without authoritative identity and authoritative data, what is exchanged through the interoperability framework has no foundation.
- **Access (1) is the citizen-facing channel layer.** It allows citizens, businesses, and public servants to consume services that are built on the other domains.
- **Governance (5) is the precondition and the enforcement layer for all four.**

The dependency map shapes the assessment and the roadmap (Method §4 and §5).

---

# Section 3: Domain 1 — Digital Access

## 3.1 Sub-component structure

| Sub-component | Concern |
|---------------|---------|
| **3.1.1 Infrastructure and Connectivity** | Backbone, last-mile, mobile coverage, fixed broadband, government cloud, electricity reliability |
| **3.1.2 Service Delivery Channels** | Citizen-facing portals, mobile applications, USSD, IVR, kiosks, agent networks, paper fall-back |
| **3.1.3 Accessibility** | WCAG 2.1 AA compliance, multi-language support, disability accommodation, low-literacy and low-resource adaptation |

## 3.2 Sub-component 3.1.1 — Infrastructure and Connectivity

The infrastructure-and-connectivity sub-component covers the physical and platform infrastructure that enables digital service delivery.

**Core elements.** National backbone network; international connectivity; metro and last-mile networks; mobile coverage (2G / 3G / 4G / 5G); fixed broadband penetration; government cloud (where deployed); reliable electricity; data-centre capacity (Tier 2 / 3 / 4).

**Assessment focus.** Coverage of the population by mobile broadband; coverage by fixed broadband; affordability (cost relative to median income); reliability (uptime, fault rate); government-cloud availability; cross-border connectivity.

**Common patterns.** Lower-income countries: mobile-broadband-dominant; fixed-broadband sparse; government cloud often absent. Middle-income countries: mobile broadband near-universal; fixed broadband 30–60% of households; government cloud emerging. Upper-middle and high-income countries: mobile and fixed near-universal; government cloud mature.

## 3.3 Sub-component 3.1.2 — Service Delivery Channels

The service-delivery-channels sub-component covers the citizen-facing surfaces through which government services are consumed.

**Core elements.** National e-Government Portal (one-stop shop); ministry-specific portals where applicable; mobile applications; USSD-based services for feature-phone users; IVR-based voice services; physical kiosks (typically at post offices, banks, government one-stop centres); agent networks (mobile-money agents, rural service points); paper fall-back for non-digital citizens.

**Assessment focus.** Channel coverage of the population; service breadth per channel; user experience quality; integration across channels (single sign-on, transaction continuity); availability of services in citizens' preferred channels.

**Common patterns.** Inclusion principle requires multi-channel design — a service available only on a smartphone application excludes the 30–60% of the population that does not have a smartphone (in many lower-income contexts). The Reference Model's expectation is that core citizen services are available on at least three channels including a low-resource fall-back.

## 3.4 Sub-component 3.1.3 — Accessibility

The accessibility sub-component covers the inclusion-by-design of the access layer.

**Core elements.** WCAG 2.1 AA conformance for web interfaces; alternative-text accessibility for mobile; multi-language support reflecting the country's linguistic diversity; low-literacy adaptation (icon-driven, audio prompts); disability accommodation (screen-reader compatibility, contrast, font scaling); cultural adaptation.

**Assessment focus.** Number of services compliant with WCAG 2.1 AA; languages supported across services; accessibility-feature coverage; user-research evidence of disability and low-literacy use.

## 3.5 Typical indicators and metrics

| Indicator | Source |
|-----------|--------|
| Mobile-broadband coverage (% of population) | National regulator; ITU statistics |
| Fixed-broadband subscriptions (per 100 inhabitants) | National regulator; ITU |
| Affordability (mobile data cost as % of GNI per capita) | ITU; Alliance for Affordable Internet |
| Government-cloud availability (Yes / Partial / No) | Country observation |
| WCAG 2.1 AA compliance rate (% of central-government services) | Country audit; observation |
| Number of supported languages on national portal | Country observation |
| Smartphone penetration (% of adult population) | National household survey; GSMA |
| Service-delivery-channel diversity index (number of channels per priority service) | Country observation |

## 3.6 Common patterns and pitfalls

- **Smartphone-only design.** Designing services for the smartphone-using minority excludes the rest. The Reference Model's expectation is that any priority service has at least one low-resource channel.
- **English-only or French-only national portal.** Linguistic exclusion is a common architectural failure. Multi-language support from Day 1 of the service-design process is the discipline.
- **Treating accessibility as a Wave-4 concern.** WCAG 2.1 AA is a Wave-1 architectural commitment, not a future improvement.

---

# Section 4: Domain 2 — Digital Data Infrastructure

## 4.1 Sub-component structure

| Sub-component | Concern |
|---------------|---------|
| **4.1.1 Foundational Registries** | Authoritative national registries (population, business, land, vehicle, address) |
| **4.1.2 Data Governance** | Policy, standards, stewardship, data-quality discipline |
| **4.1.3 Master Data Management** | Cross-registry consistency; reference-data management |
| **4.1.4 Data Platform** | Analytical platforms enabling cross-government insight |

## 4.2 Foundational Registries

The foundational registries are the authoritative national records of the country's people, organisations, places, and things. They are the foreign-key targets of every sectoral system that references one of these entities.

**Standard portfolio.**

| Registry | Core data | Authority |
|----------|-----------|-----------|
| **Population register / Civil registration** | Births, deaths, marriages, identity | Civil registration authority; integrated with the National ID system |
| **Business register** | Companies, partnerships, sole traders, beneficial ownership | Companies House / Business Registry |
| **Land register** | Parcels, ownership, encumbrances | Land registry authority |
| **Address register** | Geo-located addresses, administrative areas | Mapping authority; Statistics Office |
| **Vehicle register** | Vehicles, ownership, technical attributes | Transport authority / DVLA-equivalent |
| **Tax register** | Taxpayer identifiers and segments | Revenue authority |

A country's DPI maturity in the data domain is largely a function of these registries' authoritative status, digital availability, and interoperability with each other and with sectoral systems.

## 4.3 Data Governance

The data-governance sub-component covers the policy, standards, and stewardship that make the data trustworthy.

**Core elements.** National data strategy; data-quality standards; data-stewardship roles (per registry); metadata management (ISO/IEC 11179 alignment); data-retention rules; personal-data-protection regime; open-data policy.

**Assessment focus.** Existence and operation of the national data strategy; data-quality measurements per registry; data-stewardship coverage; metadata-registry maturity; personal-data-protection law in force and enforced; open-data programme operational.

## 4.4 Master Data Management

The master-data-management sub-component covers the cross-registry consistency layer.

**Core elements.** Reference data registry (administrative areas, country codes, currency codes, sectoral code lists); cross-walk between registries (e.g., tax ID ↔ business register ID); change-propagation mechanism between authoritative source and consuming systems.

**Assessment focus.** Existence of a reference-data registry; coverage of common reference data; cross-walk maturity; change-propagation pattern.

## 4.5 Data Platform

The data-platform sub-component covers the analytical infrastructure that enables cross-government insight.

**Core elements.** National data warehouse or data lake; cross-ministry analytical platform; statistical-data infrastructure; medallion architecture (Bronze / Silver / Gold) where deployed; data-mesh patterns where adopted.

**Assessment focus.** Existence and operation of cross-government analytical platform; ministerial participation; cross-sector use cases live; analytical capability of the operating organisation.

## 4.6 Typical indicators

| Indicator | Source |
|-----------|--------|
| Authoritative-registry coverage (% of population in civil registration) | National statistics |
| Authoritative-registry coverage (% of businesses in business registry) | National statistics |
| Personal-data-protection law (enacted Yes / No) | Government information |
| Open-data datasets published | National open-data portal |
| Data-quality measurements available per registry | Operational observation |
| Cross-registry reconciliation rate | Operational observation |

---

# Section 5: Domain 3 — Interoperability

## 5.1 Reference

The Interoperability domain is treated in depth in the parallel Interoperability Module (08-Interoperability/GEATDM-Interop-Reference-Model-v1.0). This section provides the DPI-assessment-level summary; for substantive content consult the Interoperability Module.

## 5.2 Sub-component structure

| Sub-component | Concern |
|---------------|---------|
| **5.2.1 Technical Interoperability** | Connectivity, protocols, message formats, security mechanisms |
| **5.2.2 Semantic Interoperability** | Shared vocabularies, code lists, metadata registries, sectoral standards |
| **5.2.3 Organisational Interoperability** | Three-tier governance, member onboarding, SLA framework |
| **5.2.4 Legal Interoperability** | Decree, mandate of operating authority, enforcement powers, alignment with personal-data-protection |

## 5.3 Assessment criteria

For DPI assessment purposes, the principal criteria are:

| Criterion | Maturity Level 1 | Level 2 | Level 3 | Level 4 | Level 5 |
|-----------|------------------|---------|---------|---------|---------|
| Operational interoperability platform | None or pilot | Pilot deployment, 2–5 members | National rollout, 10–30 members, several priority services | National coverage, 30+ members, 100+ services | Mature platform, 60+ members, 500+ services, cross-border integration |
| Legal framework | No decree or weak | Decree exists but enforcement weak | Decree with enforcement; sanctions applied | Mature legal framework with personal-data-protection alignment | Mature legal framework with cross-border alignment (e.g., EU EIF / e-CODEX) |
| Semantic registry | Absent | Sectoral pockets | National registry emerging | National registry with sectoral cross-walks | Mature registry; cross-border interoperability |
| Three-tier governance | Absent or unclear | Steering Committee but no Council | Three-tier model in place | Three-tier model operational with regular cadence | Mature governance with measurable performance |

## 5.4 Technology options

| Option | Description | Reference deployment |
|--------|-------------|----------------------|
| **X-Road** (open-source, MIT) | The most-deployed national interoperability platform | Estonia, Finland, Iceland, multiple X-Road Trust Federation members |
| **GovStack Information Mediator BB** | International specification; X-Road is a conformant implementation | specs.govstack.global |
| **National-bespoke solution** | Where the country has invested in a country-specific platform | Various national models |
| **Federated mesh** (without central authority) | Less common; emerging pattern in some federations | Some European Federation contexts |

The GEATDM default (per T60 §3.1) is Configure on X-Road or an Information Mediator BB conformant alternative; bespoke development is reserved for country-specific extensions.

---

# Section 6: Domain 4 — Digital Identity

## 6.1 Sub-component structure

| Sub-component | Concern |
|---------------|---------|
| **6.1.1 Foundational Identity (Civil Registration + National ID)** | The legal-identity backbone: birth registration, death registration, identity issuance |
| **6.1.2 Functional Identity (e-KYC, attribute providers)** | Identity-related attributes (employment, education, health) used for service eligibility |
| **6.1.3 Authentication and Authorisation** | Credentials, multi-factor authentication, OAuth/OIDC at national scale |
| **6.1.4 Trust Services and Digital Signatures** | Qualified signatures, qualified seals, qualified time-stamps, registered electronic delivery |

## 6.2 The Identity Stack Model

A national digital identity is best understood as a stack:

```
Layer 4 — Trust Services             Qualified signatures, seals, time-stamps
                                     (eIDAS-conformant in EU; equivalent elsewhere)
Layer 3 — Authentication             OAuth 2.x / OpenID Connect; multi-factor
                                     authentication; biometrics; mobile ID
Layer 2 — Functional Identity        e-KYC, attribute providers, sector-specific
                                     credentials, verifiable credentials
Layer 1 — Foundational Identity      National ID system; population register;
                                     biometric back-end; cross-references to
                                     civil registration
```

A country's DPI maturity in the identity domain is largely a function of how complete each layer is and how well they integrate with each other and with sectoral applications.

## 6.3 Assessment criteria

| Criterion | Level 1 | Level 2 | Level 3 | Level 4 | Level 5 |
|-----------|---------|---------|---------|---------|---------|
| Foundational ID coverage (% adult population) | <30% | 30–60% | 60–80% | 80–95% | >95% |
| e-KYC platform | Absent | Pilot | Operational, limited use | Operational, broad use | Mature, mandatory for regulated services |
| Multi-factor authentication | Absent | Pilot | Available, optional | Available, often used | Standard, mandatory for high-assurance services |
| Trust services (qualified signatures) | Absent | Limited | Available | Mature, regulated | eIDAS-conformant or equivalent regulated |
| Verifiable credentials | Absent | Pilot | Pilot deployments | Operational across sectors | Cross-border verification |
| Identity governance | Absent | Initial | Defined | Operational with regulatory oversight | Mature with regular performance review |

## 6.4 Common patterns and pitfalls

- **Foundational-only.** The country has a National ID but no e-KYC platform, no MFA, no trust services. Identity exists but cannot be verified at scale or used for high-assurance services.
- **Fragmented authentication.** Each ministry runs its own authentication. The citizen has 20 logins; the architecture is unsustainable.
- **Privacy regression.** A National ID system without proper privacy-protection becomes a surveillance vehicle. The Reference Model's expectation is privacy-by-design at the foundational layer.

---

# Section 7: Domain 5 — Governance (Cross-cutting)

## 7.1 Sub-component structure

| Sub-component | Concern |
|---------------|---------|
| **7.1.1 Strategy and Policy** | National digital strategy; sectoral strategies; coordination |
| **7.1.2 Legal Framework** | Foundational laws, sectoral regulations, alignment |
| **7.1.3 Institutional Structure** | Central digital authority; relationship to sectoral ministries; oversight |
| **7.1.4 Financing** | Budget allocation; multi-year planning; donor coordination; sustainability |
| **7.1.5 Capacity** | Workforce shape; training; talent attraction and retention |
| **7.1.6 Monitoring and Oversight** | Performance management; transparency; accountability |

## 7.2 Governance Models

The standard institutional patterns for the central digital authority:

| Pattern | Description | Example |
|---------|-------------|---------|
| **Ministry of Digital Economy / ICT** | A dedicated ministry leads digital transformation | Many EU member states; Saudi Arabia; UAE |
| **Authority within a sectoral ministry** | Typically within the Ministry of Finance or the Office of the President | Several emerging economies |
| **Independent statutory authority** | A dedicated authority with statutory autonomy | Estonia (RIA); Singapore (GovTech); India (MeitY) |
| **Office of the President / PM** | Central coordinating office | Some federal structures |

The country's DPI maturity in the governance domain depends less on the specific pattern than on its operational effectiveness — clarity of mandate, sustained political support, predictable budget, ability to attract and retain talent, working relationship with sectoral ministries.

## 7.3 Assessment criteria

| Criterion | Level 1 | Level 2 | Level 3 | Level 4 | Level 5 |
|-----------|---------|---------|---------|---------|---------|
| National digital strategy | Absent or stale | In place; weak implementation | In place; partial implementation | In place; fully implemented and updated | Living strategy with measurable outcomes |
| Foundational legal framework | Major gaps | Some gaps; in revision | Most laws in place | Full set in place; alignment work ongoing | Mature, regularly updated, internationally aligned |
| Central digital authority | Absent or weak | Established but limited authority | Operational with cross-government mandate | Operational with strong mandate and resources | Mature; recognised cross-government authority |
| Multi-year financing | Absent | Year-by-year | Multi-year envelope agreed | Multi-year operational | Multi-year + sustainability commitment + outcome-based budgeting |
| Workforce capacity | Severe shortage | Significant gaps | Adequate at central authority; gaps in ministries | Adequate across central + ministries | Mature with talent pipeline |
| Performance and oversight | None | Ad-hoc reporting | Regular reporting | Regular reporting + independent oversight | Mature; comparative international reporting |

## 7.4 The governance gap is often the binding constraint

Country DPI assessments routinely surface that the governance domain is the binding constraint on the other four. Specifically:

- A country with a strong technical platform but weak central digital authority cannot extract value from the platform.
- A country with no multi-year financing cannot sustain DPI investments past the donor cycle.
- A country with weak workforce capacity cannot operate sophisticated DPI even where the technology is procured.

The Method document §3 (Gap Analysis) makes the governance gap explicit and treats it with equal weight to the technical-domain gaps.

---

# Section 8: Maturity Model

## 8.1 The five-level maturity scale

Each domain (and each sub-component) is scored on a five-level maturity scale.

| Level | Name | Description |
|-------|------|-------------|
| **1** | Initial / Ad-Hoc | Capability absent or in early pilot. No standardisation. Outcomes unpredictable. |
| **2** | Managed / Fragmented | Capability operational in parts of the system. Standardisation begun but incomplete. Performance variable. |
| **3** | Defined / Integrated | Capability operational across the system. Standards in place and enforced. Performance measurable. |
| **4** | Optimised / Innovating | Capability mature; continuous improvement; data-driven optimisation. |
| **5** | Leading | Country is a reference implementation cited by peers. Capability exceeds typical international benchmarks. |

The scale is generous at Level 1 (any country starting from a low base will have Level-1 scores in some sub-components) and deliberately demanding at Level 5 (only a small number of countries reach Level 5 in any domain). Level 3 is the realistic target for a country running a multi-year DPI roadmap.

## 8.2 Applying the maturity scale

The Method document §2 (Five-Pillar Assessment) describes the application. Briefly:

- Each sub-component is scored on the 1–5 scale based on evidence (statistical, documentary, interview).
- Domain-level scores are produced by weighted aggregation of sub-component scores.
- Scores are validated through stakeholder workshops (Method §7).
- Scores are documented with their evidence trail and uncertainty (where evidence is partial).

The scoring is not an end in itself. The score's value is in surfacing the gap between current and target state, which then drives the roadmap (Method §4).

## 8.3 Expected progression

A country at Level 1 in most domains can typically reach Level 2 in the priority pillars within 24 months team-effort time (Wave 1 of a roadmap). Level 3 is typically reached at the end of Wave 3 (around year 5). Level 4 across most pillars is the work of a decade. Level 5 is reached only by a small number of countries and only after sustained investment over decades.

The progression curve is not linear. The first transition (Level 1 → Level 2) is typically the hardest because it requires institutional change. Subsequent transitions are more incremental, building on the foundations established in Wave 1.

---

# Section 9: Cross-References

| Topic | Reference |
|-------|-----------|
| PAERA Foundational Pillars | PAERA §3.4 |
| PAERA DPI Assessment | PAERA §5.3 |
| PAERA Sourcing Strategy | PAERA §5.6 |
| PAERA Recommended Roadmap (4 stages) | PAERA §5.7 |
| PAERA 10 Principles | PAERA §5.2 |
| Public-sector reality (legal, political, budget, procurement, capacity) | T15 |
| Architectural traps | T16 |
| Stakeholder engagement | T59 |
| Sourcing strategy and Bespoke Footprint | T60 |
| AI plays for DPI | GEATDM-WP7-AI-Plays-Catalogue §5 (dpi-evidence-score, dpi-gap-analyse, dpi-roadmap-synth, dpi-invest-model) |
| Companion Method document | GEATDM-DPI-Method (this module) |
| Companion Toolkit | GEATDM-DPI-Toolkit (this module) |
| Interoperability module (depth treatment of Domain 3) | 08-Interoperability |
| Sector guides — consumers of DPI | 06-Sector-Guides |
| UNDP Universal DPI Safeguards | undp.org |
| ITU DPI Safeguards | itu.int |
| World Bank ID4D | id4d.worldbank.org |
| 50-in-5 country commitments | 50in5.org |
| India DPI / IndiaStack | indiastack.org |
| Brazil Pix | bcb.gov.br |
| Estonia X-Road | x-road.global |
| AU Digital Transformation Strategy 2020–2030 | au.int |
| GovStack BB specifications | specs.govstack.global |

---

# DOCUMENT CONTROL

## Approval Record

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Author | FiscalAdmin OÜ | May 2026 | — |
| Reviewer | TBD | — | — |
| Approver | TBD | — | — |

---

*GEATDM — Making Digital Transformation Practical*

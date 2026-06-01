# GEATDM Justice Sector Guide

## Practitioner's Handbook for Justice Target Architecture

**Document:** GEATDM-Sector-Justice-v1.0
**Part of:** Sector Guides
**Version:** 1.0
**Date:** May 2026
**Status:** Released
**License:** Creative Commons Attribution 4.0

---

## Document Control

| Attribute | Value |
|-----------|-------|
| Document ID | GEATDM-Sector-Justice |
| Title | GEATDM Justice Sector Guide |
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

- Section 1: Justice Sector Overview
- Section 2: Justice Capability Architecture
- Section 3: Justice Application Architecture
- Section 4: Justice Data Architecture
- Section 5: Justice Process Architecture
- Section 6: Building Blocks for Justice
- Section 7: Implementation Path

---

# Section 1: Justice Sector Overview

## 1.1 The justice sector spans all three GEATDM organisation types — and an additional one

Like Health and Education, the justice sector spans all three GEATDM organisation types simultaneously. Unlike health and education, it has an additional layer that is unique to the sector: the **judiciary itself as a constitutionally separate branch of government**. The judiciary is neither a PDU nor an RA nor an SDA in the GEATDM sense; it operates under a separation-of-powers principle that places it on a different institutional plane from the executive branch which the other GEATDM organisation types presume.

The architectural implication is that a national justice EA cannot be governed by the same EA Board as the executive-branch EA. The judiciary maintains its own governance over courts and judicial information systems; the executive-branch justice actors (Ministry of Justice, prosecution service where executive-aligned, prison administration, police) governance under the central digital authority. Cross-branch integration is by treaty-like arrangement, not by hierarchical decision.

| GEATDM type | Typical justice-sector entity | Reference Architecture |
|-------------|------------------------------|------------------------|
| **Constitutional separate branch — Judiciary** | Courts (first instance, appeal, supreme); Constitutional Court; specialised courts (administrative, labour, family, juvenile); Council for the Judiciary | Custom — judicial-branch-specific extension of T47, governed by the Council for the Judiciary rather than by the executive EA Board |
| **PDU — Policy Development Unit** | Ministry of Justice (or equivalent); legal-policy units in adjacent ministries | T25 PDU RA |
| **RA — Regulatory Agency** | Bar Association (regulating lawyers); Notaries' Chamber; Bailiffs' Chamber; Data Protection Authority (cross-cutting); Anti-Corruption Inspectorate; Law Reform Commission | T35 RA RA |
| **SDA — Service Delivery Authority** | Prosecution service (where executive-aligned); Prison Administration; Probation Service; Legal Aid Board; Court Administration Authority where separate from the judiciary; Bailiffs / Enforcement Service | T47 SDA RA |
| **State Registry** | National Case Registry; Land Registry (interfaces with court enforcement); Business Registry (court adjudication of company disputes); ECRIS records (in EU); Criminal Records Registry; Bankruptcy Registry | PAERA Annex A1.2.5 |
| **Horizontal System** | Court Information System (CMS); Information Mediator BB used for judicial cooperation; Online Dispute Resolution (ODR) platform; National Legal Data Space | PAERA Annex A1.2.6 |
| **Natural Digital Environment** | Citizen / lawyer portal; e-Justice national portal; mobile applications | PAERA Annex A1.2.7 |
| **Pan-European bodies (EU member states only)** | CJEU; ECtHR (Council of Europe, not EU); Eurojust; EPPO; Europol; CEPEJ; ENCJ; e-Justice Portal | Outside national taxonomy; consumed via cross-border integration |

The implication for the EA practitioner is that a national justice EA is a portfolio with two governance regimes — one for the judiciary (court systems, judicial information systems, case management) under the Council for the Judiciary, and one for the executive branch (Ministry of Justice systems, prosecution where executive-aligned, prison and probation administration) under the central digital authority. The portfolio is held together by the Information Mediator BB and a small set of shared semantic interoperability standards described in Section 4.

## 1.2 Justice sector mission and functions

A national justice system fulfils five mission categories. Each maps to one or more GEATDM organisation types.

**Adjudication.** The settlement of legal disputes by courts. Delivered by the judiciary. Supporting digital systems are the Case Management System (CMS), e-filing platform, hearing-management tools, electronic case files, and judgment publication.

**Prosecution.** The investigation and prosecution of crimes. Delivered primarily by the public prosecution service (sometimes structurally part of the judiciary, sometimes subordinated to the Ministry of Justice or operating as an independent authority — the structural choice differs by country). Supporting digital systems are the prosecution case management system, evidence management, electronic evidence exchange, and integration with police and courts.

**Corrections, rehabilitation, reintegration.** The execution of custodial and non-custodial sentences. Delivered by Prison Administration (custodial) and Probation Service (non-custodial). Supporting digital systems are the Offender Management System (OMS), risk-assessment tools, rehabilitation programme management, electronic monitoring, and reintegration-services portals.

**Access to justice.** Legal aid, alternative dispute resolution, mediation, citizen-facing digital portals. Delivered by Legal Aid Boards, court-annexed mediation services, and (increasingly) Online Dispute Resolution platforms. Supporting digital systems are the legal-aid case management, ODR platforms, and the citizen-facing e-Justice portal.

**System stewardship and oversight.** Policy, financing, planning, oversight, and the digital justice strategy. Delivered by the Ministry of Justice (PDU), the Council for the Judiciary (judiciary self-governance), oversight bodies (Ombudsman, National Human Rights Institution, Auditor General). Supporting digital systems are the justice-statistics platform, performance dashboards, and policy-modelling tools.

A national justice EA covers all five mission categories. A sectoral EA covering only one mission (for example, "the EA for the Court Information System") covers a subset and must explicitly state its boundaries and the cross-mission dependencies it inherits.

## 1.3 Key stakeholders

The justice sector stakeholder set is unusually wide because the sector touches every citizen at some point — through dispute resolution, criminal justice, family proceedings, property transactions, or licensing. The Stakeholder Engagement Method Guide (T59) tier model applies, with two notable adaptations: the **judiciary requires its own engagement track** outside the executive Steering Committee, and the **defence bar** (private legal practice) is institutionally capable of obstructing reforms it disagrees with and must be engaged early.

| Tier | Justice-sector stakeholders | Engagement model |
|------|-----------------------------|------------------|
| **Tier 1 — Champions (executive branch)** | Ministry of Justice (PDU); Ministry of Finance (cross-government); Ministry of ICT / Digital Authority; the largest single SDA (typically Prison Administration in low-income contexts; Court Administration where the executive operates court support functions) | Weekly working sessions; bi-weekly Steering Committee; quarterly Cabinet briefing |
| **Tier 1 — Champions (judiciary)** — separate engagement track | Council for the Judiciary (or equivalent constitutional body); Supreme Court IT committee; senior judges' association | Weekly judicial-track sessions; quarterly meeting with Council for the Judiciary leadership; coordination meeting with the executive Tier 1 every quarter |
| **Tier 2 — Early Adopters** | Public Prosecution Service; Probation Service; Legal Aid Board; Bar Association; Notaries' Chamber; the country's largest Court of First Instance (as the demonstration site); Police digital-justice integration unit | Bi-weekly working sessions; sector workshops |
| **Tier 3 — Observers** | Specialised courts (constitutional, labour, family, juvenile); Bailiffs' Chamber; civil society organisations focused on access to justice (legal aid NGOs, victim-support organisations, prisoners' rights organisations); academics (judicial academies, law schools, justice research institutes); international development partners (UNODC, UNDP Rule of Law programme, EU IPA / NDICI programmes, World Bank JROL — Justice and Rule of Law programme); mediation and arbitration providers | Monthly bulletin; quarterly community-of-practice |

Citizen stakeholders are addressed through formal consultation channels, victim-support organisations, and the design of the e-Justice portal user experience. Their primary architectural representation is the access-to-justice principle (Section 1.4) and the language-accessibility framework (multi-language support is more architecturally consequential in justice than in most sectors because of fundamental-rights guarantees of language accessibility in legal proceedings).

International development partners are a structural feature in lower-income and post-conflict contexts. The World Bank's Justice and Rule of Law programme (JROL), UNODC's criminal-justice technical assistance, the EU's IPA and NDICI programmes for accession and neighbourhood countries, and bilateral programmes (US INL, FCDO, GIZ) fund a substantial fraction of justice-sector EA work in these contexts. The PLAN phase explicitly accounts for donor versus state-budget components and the sustainability commitment per PAERA §4.5.

## 1.4 Architectural principles for justice (sector-specific extensions to T12)

The 33 principles in T12 EA Principles apply to justice as to any sector. Five principles deserve sector-specific elaboration in justice.

**Principle 1 — Independence of the judiciary.** The architectural separation of judicial systems from executive systems is not an organisational nicety; it is a constitutional requirement in most jurisdictions. Architecturally this requires: judicial information systems under judicial governance (the Council for the Judiciary or equivalent), not under executive central digital authority; judicial data sovereignty (the executive cannot read or alter judicial records without explicit legal authority); and cryptographically demonstrable separation of duties at integration points.

**Principle 2 — Access to justice.** The architecture must support access on equitable terms regardless of citizen language, literacy, location, disability, or income. Architecturally this requires: multi-language support as a first-class concern (not as an afterthought); WCAG 2.1 AA compliance at minimum for all citizen-facing interfaces; offline and low-bandwidth modes for rural areas; accommodation for litigants in person (without a lawyer); legal-aid integration as a standard service flow.

**Principle 3 — Privacy and victim protection.** Justice data is among the most sensitive personal data categories. Beyond the standard privacy-by-design requirements, justice carries: victim-protection obligations (witnesses, vulnerable persons, juveniles); pre-trial confidentiality; criminal-record handling under different rules from other personal data (rehabilitation periods, expungement); legal professional privilege protections.

**Principle 4 — Fair trial and due process by design.** The architecture must support due-process guarantees end-to-end: open and fair hearings; right to confront witnesses; equality of arms; right to appeal; adequate time and facilities for defence. AI-assisted decision-support tools (Section 5 below) carry particular architectural risk under this principle and are subject to explicit human-in-the-loop requirements.

**Principle 5 — Standards-based interoperability under fragmented supply.** Justice has the most fragmented semantic interoperability standards landscape in any public-sector domain (Section 4.2). The architectural rule is to adopt the canonical sub-layer for each entity (NIEM Justice for case-data exchange in NIEM-aligned jurisdictions; OASIS LegalXML ECF for electronic court filing; Akoma Ntoso / LegalDocML for legislation and judgments; ECLI for case-law identification; ELI for legislation identification; e-CODEX for EU cross-border judicial cooperation) and to compose them rather than build a country-specific complete data model.

## 1.5 International standards

The justice sector standards landscape is among the densest in any public-sector domain, reflecting decades of work by the OECD, UN bodies (UNODC, UNCITRAL, UNDP), the Council of Europe (CEPEJ), the European Union (e-Justice Portal, e-CODEX, eulisa), OASIS, NIEM, and judicial-cooperation networks.

### 1.5.1 Court and case-data exchange standards

| Standard | Issuing body | Relevance |
|----------|--------------|-----------|
| **OASIS LegalXML ECF 5.0 (Electronic Court Filing)** | OASIS | The canonical standard for court-filing message exchange. Defines the message structure for filing pleadings, motions, exhibits between attorney systems and court CMS. Mature; widely deployed in US state courts; growing international use. |
| **NIEM Justice domain** | NIEM Open / US Department of Justice / partners | National Information Exchange Model for justice-sector data. Includes person, case, charge, filing, citation, custody, and court-event semantic blocks. Used in NIEM-aligned jurisdictions; growing international relevance. |
| **NIEM Corrections domain** | NIEM Open | Corrections-specific semantic blocks complementing NIEM Justice. |
| **Akoma Ntoso / LegalDocML** | OASIS | XML standard for legal documents — legislation, judgments, parliamentary documents. Mature; used by EU legislative bodies, UN, several countries. |
| **ECLI — European Case Law Identifier** | EU Council Conclusions 2011 / ELI Forum | The canonical identifier for case-law decisions across EU jurisdictions. Required for case-law publication in the EU e-Justice Portal. |
| **ELI — European Legislation Identifier** | EU Council Conclusions 2017 | The canonical identifier for legislation across EU jurisdictions. |

### 1.5.2 Cross-border judicial cooperation standards

| Standard | Issuing body | Relevance |
|----------|--------------|-----------|
| **e-CODEX (Regulation 2022/850)** | European Union / eulisa | The EU's regulated infrastructure for cross-border civil and criminal judicial cooperation. Provides secure communication between national judicial authorities. The Digitalisation Regulation will fully digitalise 24 cross-border procedures by 2031. |
| **ECRIS-TCN** | EU / eu-LISA | European Criminal Records Information System for Third-Country Nationals. Centralised hit/no-hit system supporting national ECRIS exchanges. |
| **EVIDENCE2e-CODEX** | EU project | Digital-evidence cooperation patterns for cross-border criminal cases. |
| **Hague Conventions** (e.g., Service Abroad, Evidence, Apostille) | Hague Conference on Private International Law | International treaties on cross-border judicial cooperation. The Apostille Convention is the most widely deployed; the e-APP (electronic Apostille Programme) is the digital implementation. |
| **INTERPOL message infrastructure** | INTERPOL | Police cooperation messaging; integrates with prosecution and judicial systems for cross-border cases. |

### 1.5.3 Online Dispute Resolution (ODR) standards

| Standard | Issuing body | Relevance |
|----------|--------------|-----------|
| **UNCITRAL Technical Notes on ODR** | UNCITRAL | UN-level guidance on the design of online dispute resolution systems. |
| **ICODR ODR Standards** | International Council for Online Dispute Resolution | Practitioner standards for ODR systems. |
| **EU Online Dispute Resolution Platform** | European Commission | The EU's consumer-ODR platform (Regulation 524/2013); architecturally relevant as a reference implementation. |

### 1.5.4 Identity, signature, and trust standards

| Standard | Issuing body | Relevance |
|----------|--------------|-----------|
| **eIDAS 2.0 (Regulation 2024/1183)** | European Union | Electronic identity and trust services across the EU; defines qualified electronic signatures (QES), qualified electronic seals, qualified time-stamps, qualified electronic registered delivery, and the European Digital Identity Wallet. The architectural foundation for cross-border digital justice in the EU. |
| **ETSI AdES (Advanced Electronic Signatures)** | ETSI | Technical standards for the implementation of advanced and qualified electronic signatures. |
| **ISO/IEC 27037** | ISO/IEC | Guidelines for the identification, collection, acquisition and preservation of digital evidence. |
| **ISO 14721 (OAIS — Open Archival Information System)** | ISO | Long-term archival of court records, judgments, evidence. |

### 1.5.5 Statistics, evaluation, and indicator standards

| Standard | Issuing body | Relevance |
|----------|--------------|-----------|
| **CEPEJ EVALIN** | Council of Europe / CEPEJ | The Council of Europe's evaluation framework for judicial systems; produces the comparative judicial-statistics report every two years. |
| **EU Justice Scoreboard** | European Commission | Comparative tool monitoring efficiency, quality, and independence of EU justice systems; consumes data from CEPEJ and ENCJ. |
| **World Bank JROL / JUPITER** | World Bank | Global Programme on Justice and Rule of Law; JUPITER is the indicator platform. |
| **OECD People-Centred Justice indicator framework** | OECD | Framework for measuring access to justice and people-centred justice systems. |
| **UNODC criminal-justice statistics** | UNODC | International standards for crime and criminal-justice statistics; the basis for SDG-16 reporting. |

### 1.5.6 Privacy, security, and quality standards

| Standard | Purpose |
|----------|---------|
| **GDPR / national equivalents** | Personal data protection. Justice data is "special category" by virtue of the criminal-records dimension. Article 10 of GDPR specifically governs criminal-conviction data. |
| **WCAG 2.1 AA** | Web accessibility for citizen-facing interfaces. |
| **Council of Europe Convention 108+** | Modernised data-protection convention; relevant outside EU. |
| **Council of Europe Recommendation on AI in justice systems (CM/Rec(2024)10 series)** | Guidance on the use of AI in the judiciary. |

---

# Section 2: Justice Capability Architecture

## 2.1 Reading the capability map across two governance regimes

The justice sector's capability map differs from health and education in one important way: capabilities are organised across two governance regimes rather than one. Capabilities under judicial governance (the courts, the Council for the Judiciary, judicial information systems) are inherited but not directly extended from T47; the Council for the Judiciary owns the tailoring. Capabilities under executive governance (Ministry of Justice, prosecution where executive-aligned, prison administration, legal aid) follow the standard PDU/RA/SDA pattern.

The capability taxonomy below is organised in twelve top-level groups, totalling approximately 90 sector-specific capabilities. The grouping is consistent with the published actor / stakeholder taxonomies for the judiciary domain.

## 2.2 PDU capabilities — Ministry of Justice

Inherits all 72 PDU capabilities from T25. Adds 12 justice-specific capabilities:

| ID | Capability | Description |
|----|-----------|-------------|
| J-PDU-01 | National Justice Strategy Development | Multi-year strategy and digital justice strategy. |
| J-PDU-02 | Justice System Performance Monitoring | SDG-16 indicators, CEPEJ EVALIN reporting, EU Justice Scoreboard contribution, country-specific indicators. |
| J-PDU-03 | Justice Workforce Planning | Coordinating workforce planning across courts, prosecution, prisons, legal aid (subject to judicial-independence constraints for judges). |
| J-PDU-04 | Justice Financing Policy | State-budget allocation; legal-aid funding; court fees policy. |
| J-PDU-05 | Access-to-Justice Policy | Legal-aid eligibility; ADR promotion; barrier reduction; equity targets. |
| J-PDU-06 | Criminal Justice Policy | Penal-code policy; sentencing policy; pre-trial detention policy. |
| J-PDU-07 | Corrections and Reintegration Policy | Custodial regime; rehabilitation; reintegration programmes. |
| J-PDU-08 | Digital Justice Strategy | National digital-justice strategy aligned with GEATDM and PAERA; cross-border judicial cooperation in EU contexts. |
| J-PDU-09 | Legislative Drafting and Codification | Where the MoJ leads cross-government legislative drafting (varies by country); maintains the legislative-archive system. |
| J-PDU-10 | International and Cross-Border Justice | Treaty negotiation; mutual legal assistance; bilateral cooperation. |
| J-PDU-11 | Cross-Sectoral Justice Policy | Determinants of justice (mental health, social protection, education, drug policy). |
| J-PDU-12 | Rule of Law Coordination | Coordination with oversight bodies (Ombudsman, NHRI, Anti-Corruption Inspectorate). |

## 2.3 Judicial-branch capabilities

The judicial branch operates under the Council for the Judiciary (or equivalent — supreme court administrative structure, judicial council). It is not an executive PDU/RA/SDA; it is a constitutional separate branch. The capability taxonomy borrows structure from T47 (high-volume operational delivery) but governance is judicial.

| ID | Capability | Description |
|----|-----------|-------------|
| J-JUD-01 | Court Case Management | End-to-end case-lifecycle management: filing, docketing, scheduling, hearing, judgment, appeal. |
| J-JUD-02 | Hearing Management | Courtroom scheduling; physical, hybrid, and virtual hearing management; audio and video recording. |
| J-JUD-03 | Judgment Writing and Publication | Tools for drafting, internal review, citation, and publication of judgments; ECLI assignment. |
| J-JUD-04 | Case Allocation | Allocation of cases to judges (random or competence-based, with full audit trail to support judicial-independence guarantees). |
| J-JUD-05 | Court Statistics and Performance | Internal performance management for the judiciary; CEPEJ-aligned reporting; transparent publication. |
| J-JUD-06 | Court Administration | Non-judicial functions of the court — registrar's office, court fees, court infrastructure, court IT. |
| J-JUD-07 | Judicial Training | Continuing training for judges; cooperation with judicial academies. |
| J-JUD-08 | Judicial Conduct and Discipline | Internal disciplinary process for judges, under the Council for the Judiciary. |
| J-JUD-09 | Constitutional Adjudication | Where the Constitutional Court is operational, separate from the ordinary courts hierarchy. |
| J-JUD-10 | Cross-Border Judicial Cooperation | EU e-CODEX-based cooperation; Hague Convention service of documents and taking of evidence; preliminary references to the CJEU; ECtHR engagement. |

## 2.4 RA capabilities — Justice regulators

Multiple RAs operate in the justice sector, each with sector-specific extensions to T35.

**Public Prosecution Service** (where structurally executive-aligned). Inherits PDU + RA. Adds 6 capabilities:

| ID | Capability | Description |
|----|-----------|-------------|
| J-PPS-01 | Investigation Coordination | Working with police forces and special investigative units. |
| J-PPS-02 | Prosecution Case Management | Case lifecycle from charge through trial. |
| J-PPS-03 | Evidence Management | Digital evidence collection, preservation, chain of custody (ISO/IEC 27037). |
| J-PPS-04 | Plea Bargaining and Diversion | Where the legal system permits these. |
| J-PPS-05 | International Mutual Legal Assistance | Outbound and inbound MLA requests; cross-border cooperation through Eurojust / EPPO in EU contexts. |
| J-PPS-06 | Public-Interest Litigation | Where prosecution has a role beyond criminal prosecution (constitutional, public-interest, AML). |

**Bar Association**. Inherits PDU + RA. Adds 5 capabilities:

| ID | Capability | Description |
|----|-----------|-------------|
| J-BAR-01 | Lawyer Initial Registration | Admission to the bar; initial qualification. |
| J-BAR-02 | Continuing Professional Development | CPD compliance tracking. |
| J-BAR-03 | Disciplinary Process | Investigation and adjudication of complaints against lawyers. |
| J-BAR-04 | Specialty Recognition | Specialist accreditation. |
| J-BAR-05 | Cross-Border Mobility | Recognition of foreign-trained lawyers; outbound mobility (relevant in EU under Establishment Directive). |

**Notaries' Chamber** (in civil-law jurisdictions). Inherits PDU + RA. Adds 5 capabilities:

| ID | Capability | Description |
|----|-----------|-------------|
| J-NOT-01 | Notary Appointment and Discipline | Public-faith function; appointment under government authority; discipline by the chamber. |
| J-NOT-02 | Notarial Acts Registry | Authoritative registry of notarial acts. |
| J-NOT-03 | Land-Registry Integration | Notarial acts feed land registry transactions in civil-law systems. |
| J-NOT-04 | Succession Administration | Estate handling — particularly where the notary is the succession authority. |
| J-NOT-05 | Cross-Border Recognition of Notarial Acts | EU Apostille / authentic-instruments recognition. |

**Bailiffs / Enforcement Service**. Inherits PDU + RA + SDA (high-volume operational). Adds 5 capabilities:

| ID | Capability | Description |
|----|-----------|-------------|
| J-BAI-01 | Civil Enforcement Workflow | Enforcement of civil judgments. |
| J-BAI-02 | Asset Identification and Seizure | Identification of debtor assets; asset freeze; auction. |
| J-BAI-03 | Garnishment and Attachment | Wage garnishment; bank-account attachment. |
| J-BAI-04 | Cross-Border Enforcement | Recognition and enforcement of foreign judgments (Brussels I bis in EU). |
| J-BAI-05 | Criminal-Fines Collection | Where bailiffs collect criminal fines on behalf of the state. |

## 2.5 SDA capabilities — Justice service-delivery entities

**Prison Administration**. Inherits all PDU + RA + SDA. Adds 8 capabilities:

| ID | Capability | Description |
|----|-----------|-------------|
| J-PRI-01 | Offender Registration and Classification | Initial intake; security classification; vulnerability assessment. |
| J-PRI-02 | Custodial Regime Management | Day-to-day prison operations. |
| J-PRI-03 | Risk and Needs Assessment | Structured assessment driving individual-sentence planning. |
| J-PRI-04 | Rehabilitation Programme Delivery | Education, vocational training, mental-health and substance-abuse programmes. |
| J-PRI-05 | Inmate Healthcare | Integration with the health sector for prisoner healthcare. |
| J-PRI-06 | Visitor and Communication Management | Family visits; legal counsel access; digital communication channels. |
| J-PRI-07 | Pre-release Planning | Reintegration plan; coordination with probation and reintegration services. |
| J-PRI-08 | Cross-Border Transfer of Prisoners | Where applicable (EU Framework Decision 2008/909, Council of Europe Convention). |

**Probation Service**. Inherits all PDU + RA + SDA. Adds 6 capabilities:

| ID | Capability | Description |
|----|-----------|-------------|
| J-PRO-01 | Community Sanction Supervision | Community service, suspended sentences, parole. |
| J-PRO-02 | Pre-sentence Reports | Probation officer reports informing sentencing. |
| J-PRO-03 | Electronic Monitoring | GPS tagging, alcohol monitoring, curfew monitoring. |
| J-PRO-04 | Reintegration Services Coordination | Housing, employment, family-mediation linkages. |
| J-PRO-05 | Risk Management for Released Offenders | High-risk offender supervision in the community. |
| J-PRO-06 | Restorative Justice Programmes | Where offered. |

**Legal Aid Board**. Inherits all PDU + RA + SDA. Adds 5 capabilities:

| ID | Capability | Description |
|----|-----------|-------------|
| J-LAB-01 | Eligibility Determination | Means-tested and merit-based eligibility for legal aid. |
| J-LAB-02 | Lawyer Assignment | Allocation of cases to legal-aid lawyers. |
| J-LAB-03 | Legal-Aid Lawyer Payment | Tariff-based or hourly remuneration; quality assurance. |
| J-LAB-04 | First-line Legal Information | Helpdesk, kiosks, online-information services. |
| J-LAB-05 | Strategic Litigation | Public-interest litigation by the Legal Aid Board where mandated. |

## 2.6 Capability priorities by maturity level

Justice-sector digital maturity, drawing on CEPEJ evaluation reports, World Bank JROL, and the OECD People-Centred Justice framework:

| Maturity Level | Definition | Indicative national context |
|---------------|-----------|------------------------------|
| **Level 1 — Initial / Ad-Hoc** | Paper-based case files; manual scheduling; no national CMS; scattered statistics | Many low-income and post-conflict countries today |
| **Level 2 — Managed / Fragmented** | National CMS deployed at most courts; e-filing partial; basic court statistics; prosecution and prisons on separate digital systems | Many lower-middle-income countries; some upper-middle-income |
| **Level 3 — Defined / Integrated** | Cross-system data exchange via Information Mediator BB; e-Justice national portal; ODR for civil low-value disputes; cross-border cooperation through e-CODEX (in EU) | Most EU member states; many OECD countries |
| **Level 4 — Optimized / Innovating** | AI-assisted decision support (with explicit human-in-the-loop); predictive case-flow analytics; full e-evidence handling; virtual hearings as standard option | Estonia, Singapore, advanced EU member states |

| Maturity Level | Wave | Capability priorities |
|----------------|------|----------------------|
| Level 1 | Pre-Wave 1 (mobilisation) | J-PDU-01, J-PDU-08; basic CMS for the largest court; J-PRI-01 prisoner registration |
| Level 2 | Wave 1 | J-JUD-01 (national CMS rollout); J-JUD-04 (case allocation with audit trail); J-PPS-02; J-PRI-01; J-LAB-01; e-filing for civil proceedings |
| Level 3 | Waves 2–3 | J-JUD-02 (hearing management with virtual capability); J-JUD-03 (judgment publication with ECLI); J-PPS-03 (digital evidence); J-PRO-01; J-PRO-03; ODR for civil low-value; e-Justice national portal |
| Level 4 | Wave 4 | AI-assisted decision support (with human-in-the-loop); predictive analytics; cross-border full digital cooperation; advanced e-evidence handling |

---

# Section 3: Justice Application Architecture

## 3.1 Core systems landscape

A national justice EA covers a recognisable set of application domains. The taxonomy uses GEATDM application categories.

| Application domain | Function | Typical product class |
|--------------------|----------|----------------------|
| **CMS — Court Management System** | End-to-end case management for courts | Open-source (CourtStack, OpenJustice, OCMS); commercial (Tyler Technologies, Thomson Reuters Court Manager, Ecisbase); country-specific bespoke (Estonia KIS, several EU national systems) |
| **e-Filing Platform** | Electronic filing of pleadings and exhibits | OASIS LegalXML ECF-conformant systems; commercial e-filing platforms; integrated within the CMS |
| **Hearing Management System** | Courtroom scheduling, virtual-hearing platform, recording | Country-specific; commercial (Cisco / Pexip-based virtual courtroom platforms); open-source (Jitsi-based for low-resource contexts) |
| **Judgment Drafting and Publication Platform** | Drafting tools; ECLI assignment; publication portal | Country-specific; integrated with the CMS |
| **Online Dispute Resolution (ODR) Platform** | Online resolution of civil and consumer disputes | Country-specific; commercial (Modria, Tyler); EU ODR Platform reference implementation |
| **Prosecution Case Management System** | End-to-end prosecution case management | Country-specific; commercial (Niche RMS, Versaterm, US-style prosecutor case management); open-source emerging |
| **Police / Investigation case linkage** | Police-prosecution-court data exchange | Often built on NIEM Justice profile in NIEM-aligned jurisdictions |
| **Offender Management System (OMS)** | Prison administration and inmate records | Country-specific; commercial (Securus, GEO Group platform, European OMS providers) |
| **Probation Management System** | Probation case management | Country-specific; some shared platforms with OMS |
| **Electronic Monitoring Platform** | GPS, alcohol, curfew monitoring | Commercial (Sentinel, BI Inc., Buddi); proprietary in most cases |
| **Legal Aid Case Management** | Legal-aid eligibility, assignment, billing | Country-specific |
| **e-Justice National Portal** | Citizen-facing access to justice services | Country-specific; modelled on the EU e-Justice Portal pattern |
| **Lawyer / Notary Portal** | Practitioner-facing service portal | Country-specific |
| **National Legal Data Space** | Aggregated judicial data for analytics, research, AI | Emerging; modelled on the EU European Legal Data Space initiative |
| **Statistics and Performance Platform** | Justice-sector statistics and performance monitoring | DHIS2 with justice modules; country-specific platforms; CEPEJ-aligned reporting tools |
| **e-Evidence Management** | Digital evidence intake, preservation, chain of custody | Specialised (Cellebrite, MSAB Forensic Hub for forensic-evidence custody); generic case-management for non-forensic |
| **Prison Healthcare System** | Inmate healthcare records | Integrated with the country health sector via Information Mediator BB |
| **Cross-Border Cooperation Platform** | EU e-CODEX endpoint; INTERPOL integration; Hague Convention service | EU member states: e-CODEX reference implementation; non-EU: country-specific |

## 3.2 Application domain mapping to GEATDM organisation types

| Organisation type | Typical applications |
|-------------------|---------------------|
| **Judiciary** | CMS; e-Filing; Hearing Management; Judgment Platform; Court statistics; Constitutional Court system (where separate) |
| **PDU — Ministry of Justice** | Justice Strategy platform; Statistics and performance dashboards; Legislative drafting (where MoJ-led); Cross-border treaty management; Funding allocation system |
| **RA — Public Prosecution Service** | Prosecution CMS; Evidence management; MLA case management |
| **RA — Bar / Notaries / Bailiffs Chambers** | Professional registry; Disciplinary case management; Specialty recognition; Cross-border mobility tracking |
| **SDA — Prison Administration** | OMS; Risk-assessment tools; Rehabilitation programme management; Prisoner healthcare integration |
| **SDA — Probation Service** | Probation Management System; Electronic Monitoring; Reintegration coordination |
| **SDA — Legal Aid Board** | Legal Aid Case Management; Eligibility determination |
| **State Registry** | Criminal Records Registry (national + ECRIS in EU); Bankruptcy Registry; Trustees and Guardians Registry; Sex-Offender Registry |
| **Horizontal System** | National Legal Data Space; ECLI publication portal; cross-justice search; Legislative archive (ELI-aligned) |
| **Natural Digital Environment** | e-Justice national portal; Lawyer / notary portals; Citizen mobile applications |

The application-domain mapping is the key input to procurement decomposition. A single procurement should not span more than one architectural domain. A "national e-justice platform" procurement that bundles CMS, prosecution CMS, OMS, and e-Justice portal is the classic Vendor-Driven Architecture Trap (T16 §3) in justice form.

## 3.3 Integration patterns

Justice-sector applications exchange data through a small number of canonical integration patterns reflecting the fragmented standards landscape and the cross-border-cooperation focus.

### 3.3.1 NIEM-based integration (the NIEM Justice pattern)

Where the country adopts NIEM Justice (US states, federal US, increasingly Canada, Australia, and several other countries), cross-system exchange follows the NIEM Information Exchange Package Documentation (IEPD) pattern. The CMS, prosecution CMS, police RMS, OMS, and probation system all exchange via NIEM-conformant XML or JSON messages, routed through an integration broker (the country's Information Mediator BB or a sector-specific broker).

### 3.3.2 e-CODEX integration (EU cross-border)

Where the country is an EU member state or accession candidate, e-CODEX is the canonical integration for cross-border judicial cooperation. e-CODEX provides the secure transport layer for the 24 cross-border procedures covered by the Digitalisation Regulation. National CMS and prosecution systems integrate with e-CODEX through a national connector.

### 3.3.3 OASIS LegalXML ECF integration (e-filing)

Where the country deploys e-filing under OASIS LegalXML ECF, attorney systems exchange filings with the court CMS through ECF-conformant messages. Mature; widely deployed; vendor-neutral.

### 3.3.4 Information Mediator BB integration (cross-government)

Where the country operates an Information Mediator BB (X-Road or equivalent), justice-sector applications integrate cross-organisation through the same bus. Civil-status exchange (births, deaths, marriages — needed for inheritance, family proceedings); business registry exchange (company-related litigation); land registry exchange (property-related cases); national ID verification (party identification). Same pattern as health and education.

### 3.3.5 ECRIS integration (EU criminal records)

EU member states integrate criminal-records exchange through the ECRIS infrastructure plus ECRIS-TCN for third-country nationals. National criminal records systems exchange messages with peer member states upon request.

### 3.3.6 Akoma Ntoso and ECLI publication

Judgments and legislation are published in Akoma Ntoso XML and identified by ECLI / ELI respectively. This produces a structured, machine-readable corpus suitable for legal research, AI applications, and cross-border legal interoperability.

### 3.3.7 Legacy CSV / paper digitisation (transitional)

In Maturity Level 1 contexts, much justice-sector exchange is paper or via scanned PDFs. The Strangler Fig pattern (T16 §5) treats these as transitional: new exchanges adopt NIEM / ECF / e-CODEX / Akoma Ntoso; existing paper flows are wrapped progressively with digital adapters.

---

# Section 4: Justice Data Architecture

## 4.1 Justice data domains

A national justice EA covers eight canonical data domains.

| Domain | Authoritative source | Semantic standard |
|--------|---------------------|-------------------|
| **Case data** | Court CMS | NIEM Justice (where adopted) + OASIS LegalXML ECF; national extensions |
| **Party identity** | National ID + Civil Registration; cross-references in justice-system records | National identifier OID; NIEM Justice Person semantic block |
| **Charge / offence data** | Prosecution CMS; police RMS | NIEM Justice Charge; national criminal-code references |
| **Evidence** | Prosecution evidence system; e-evidence platform | ISO/IEC 27037; NIEM Justice; chain-of-custody metadata |
| **Judgment data** | Court judgment platform | Akoma Ntoso / LegalDocML; ECLI |
| **Legislation** | Official Gazette / Parliament platform | Akoma Ntoso; ELI |
| **Custodial records** | OMS | NIEM Corrections; national codes |
| **Cross-border exchange data** | e-CODEX (EU); INTERPOL channels | e-CODEX message profiles; INTERPOL message standards; Hague Convention forms |

## 4.2 The fragmented semantic interoperability stack in justice

The justice sector has the most fragmented semantic interoperability landscape of any sector covered by GEATDM. There is no single comprehensive standard analogous to FHIR for health. The space is fragmented across sub-domains, each with a canonical standard authoritative within its own scope.

| Sub-domain | Canonical layer | Publisher | Maturity |
|-----------|-----------------|-----------|----------|
| Case-data exchange (national) | **NIEM Justice domain** | NIEM Open / US DOJ / partners | Mature in NIEM-aligned jurisdictions |
| Electronic court filing | **OASIS LegalXML ECF 5.0** | OASIS | Mature, US-led, growing internationally |
| Cross-border judicial cooperation (EU) | **e-CODEX** (Reg. 2022/850) | EU / eu-LISA | Operational; expanding under Digitalisation Regulation |
| Case-law identification | **ECLI** | EU + adopting states | Mature in EU |
| Legislation identification | **ELI** | EU + adopting states | Mature in EU |
| Legal documents (legislation, judgments, parliamentary docs) | **Akoma Ntoso / LegalDocML** | OASIS | Mature; UN / EU / several national parliaments |
| Online Dispute Resolution | **UNCITRAL ODR Technical Notes; ICODR Standards** | UNCITRAL / ICODR | Maturing |
| Identity, signature, trust (EU) | **eIDAS 2.0 + ETSI AdES** | EU; ETSI | Mature in EU |
| Digital evidence handling | **ISO/IEC 27037** | ISO | Mature |
| Long-term archiving | **ISO 14721 (OAIS)** | ISO | Mature |
| Land / business registry interface | **ELRA standards (EU)** | European Land Registry Association | Mature in EU |

The architectural rule for the justice-sector EA is to adopt the canonical sub-layer for each entity rather than to invent a country-specific complete data model. A national CMS adopts NIEM Justice for cross-system data exchange; an e-filing component adopts OASIS LegalXML ECF; judgments are published in Akoma Ntoso with ECLI identifiers; cross-border EU procedures use e-CODEX. The composition is the country-specific architecture, not the sub-layers themselves.

## 4.3 Master Data Management — the National Case Registry

The single most important architectural decision in a national justice EA is the **National Case Registry** — the authoritative source of case identity across the justice system. The Case Registry is keyed by case identifier and serves as the foreign-key target for every record that references a case (filing, hearing, judgment, appeal, enforcement, prosecution, evidence, custody).

### 4.3.1 Case identifier architecture options

Three architectural options:

| Option | Description | Suitable for |
|--------|-------------|-------------|
| **Option A — National Case Identifier with ECLI for judgments** | The country adopts a national case-identifier scheme; ECLI is used additionally for case-law identification of published judgments. | Most common model; suitable for any country with a structured national CMS. |
| **Option B — Per-court identifiers federated through the National CMS** | Each court maintains its own case-identifier scheme; the National CMS layer provides a federated lookup. | Suitable for federal systems where state/regional courts have constitutional autonomy over their own registers. |
| **Option C — Per-jurisdiction with ECLI alignment** | Each jurisdiction independently maintains identifiers; ECLI is the only cross-jurisdiction identifier. | Common at Maturity Level 1; transitional toward Option A or B as the National CMS matures. |

The choice is a Wave 1 architectural decision recorded as an Architecture Decision Record (T13 governance, TK-30).

### 4.3.2 Party identification within the Case Registry

A separate but related concern: how parties to a case are identified. The architecture choices echo the National Patient Index choices in Health (§4.3 of GEATDM-Sector-Health):

- **Option A** — the National ID is the canonical party identifier in the Case Registry.
- **Option B** — Case Registry maintains a Party Identifier; cross-references the National ID where law permits.
- **Option C** — Case Registry party identifiers are independent.

Justice-sector specifics that distinguish from health:
- **Pseudonymisation in published judgments.** Personal-data protection law typically requires pseudonymisation of party names in published judgments; the Party Identifier supports both the internal record and the pseudonymised public form.
- **Victim and witness protection.** Victim and witness identifiers carry additional protection; the Case Registry architecture supports masked access for non-authorised parties.
- **Juvenile cases.** Juvenile party records carry additional protections under the UN Convention on the Rights of the Child and national equivalents.

### 4.3.3 Case access logs

Following the same pattern as the patient-access log in health and the learner-access log in education, the Case Registry architecture specifies that every access to case data is logged. Parties can view who accessed their case data — a transparency feature increasingly expected under modern data-protection law.

## 4.4 Cross-border data exchange

Cross-border data exchange is more architecturally consequential in justice than in any other sector covered by GEATDM:

- **EU member states.** Use e-CODEX for the 24 procedures covered by the Digitalisation Regulation (cross-border claims, EAW, EIO, mutual legal assistance, etc.).
- **EU criminal records.** ECRIS for member-state-to-member-state criminal-records exchange; ECRIS-TCN for third-country nationals.
- **Hague Convention parties.** e-APP for electronic Apostille; structured forms for service abroad and taking of evidence.
- **INTERPOL.** Police-cooperation channel that interfaces with prosecution and judicial systems for cross-border criminal matters.
- **EPPO and Eurojust.** Direct cooperation channels for prosecutorial cross-border cooperation in the EU.

The architectural implication is that the External Integration Platform (analogous to the Tax sector's Domain 5) is a substantial domain in any justice-sector EA — typically larger than in education or health.

## 4.5 Privacy, victim protection, and fair-trial provisions

Justice-sector data carries privacy and fair-trial requirements beyond standard data-protection regimes.

**Pre-trial confidentiality.** Investigation and prosecution data is held under strict confidentiality during the pre-trial phase. The architecture supports release upon the prescribed event (indictment, hearing) and not before.

**Criminal-records handling.** GDPR Article 10 specifically governs criminal-conviction data. Rehabilitation periods (after which a conviction is "spent" and not subject to background-check disclosure) are jurisdiction-specific and must be implemented in the architecture. Expungement and pardon orders erase records under strictly controlled processes.

**Open-justice versus pseudonymisation.** Public access to court records and judgments is a fair-trial guarantee. Pseudonymisation of personal data in published records is a privacy guarantee. The architecture balances both — typically by publishing judgments with pseudonymised parties and providing supervised access to non-pseudonymised records for parties and their lawyers.

**Legal professional privilege.** Communications between a lawyer and their client are protected. The architecture provides separate, encrypted channels for privileged communications.

**Victim and witness protection.** Identity protection in the Case Registry (§4.3.2); separate hearing-management for victims and vulnerable witnesses (separate-room video, voice modulation); restricted access to witness contact information.

---

# Section 5: Justice Process Architecture

## 5.1 Core processes

A national justice EA covers the following core processes.

| Process | Trigger | Outcome |
|---------|---------|---------|
| **Civil case filing** | Plaintiff files a claim | Case registered in the National Case Registry; allocated to a court and judge; scheduled for hearing. |
| **Criminal investigation** | Reported offence; police investigation | Case file built; charge decision by prosecutor; if charged, transferred to court. |
| **Criminal prosecution** | Prosecutor charges | Case before the court; trial; verdict; sentence (where convicted). |
| **Court hearing** | Scheduled hearing date | Hearing conducted (in-person, hybrid, or virtual); recorded; parties heard; rulings issued. |
| **Judgment issuance** | Court reaches decision | Judgment drafted, signed, published (with ECLI), entered in the Case Registry. |
| **Appeal** | Party appeals | Appellate case opened in the higher court; record of trial transferred. |
| **Enforcement of civil judgment** | Judgment becomes enforceable | Bailiff initiates enforcement; assets identified, garnished, or seized; debt collected. |
| **Custodial sentence execution** | Court orders imprisonment | Inmate transferred to prison; OMS opens record; rehabilitation plan; potentially pre-release planning. |
| **Probation supervision** | Court orders community sanction | Probation Officer assigned; monitoring; reintegration. |
| **ADR — Mediation / Online Dispute Resolution** | Parties opt in (or court refers) | Resolution; binding agreement; case closed. |
| **Cross-border judicial cooperation** | EU case crosses borders; treaty applies | e-CODEX exchange; service abroad; evidence taken; mutual recognition; enforcement abroad. |
| **Legal-aid eligibility and award** | Citizen applies for legal aid | Eligibility determination; lawyer assignment; billing tracking. |
| **Constitutional adjudication** | Constitutional Court referral | Constitutional review; binding ruling on the constitutional question. |

## 5.2 The citizen journey end-to-end

The citizen journey illustrates how the architectural elements compose. The example below illustrates a hypothetical civil dispute in a country at Maturity Level 3.

```
1. A small business in Akaba (Progressa's capital, used here as the
   illustrative country) has a contract dispute with a supplier in
   another district. The business owner accesses the e-Justice national
   portal, authenticates with the National ID, and reviews the
   self-help guide on contract disputes.

2. The portal recommends Online Dispute Resolution (ODR) as the
   first-line option for disputes under PGP 50,000. The business owner
   accepts. The supplier is invited (by registered electronic delivery,
   compliant with the eIDAS-equivalent national trust law) to
   participate. The supplier accepts.

3. ODR proceeds asynchronously over six weeks; documents are uploaded
   to the platform; an arbitrator-mediator (assigned by the platform
   from a roster) facilitates. Resolution is reached; both parties
   sign the digital agreement (qualified electronic signature). The
   agreement is recorded in the National Case Registry with case-status
   "Resolved by ADR — binding agreement". No court hearing.

4. Six months later the supplier defaults on the agreement. The
   business owner files an enforcement application through the e-Justice
   portal. The application is registered in the Case Registry as a new
   enforcement proceeding linked to the original ODR case. The bailiff
   service receives the application via Linkup (Progressa's
   information-mediation bus).

5. The bailiff conducts asset identification — querying the bank
   registry, the land registry, and the business registry through
   Linkup. The supplier's bank account is identified; garnishment
   notice issued; debt collected within 15 days.

6. The Case Registry records the enforcement outcome. The business
   owner views the case status through the portal and downloads the
   electronic case file (digitally signed, suitable for archive).

7. Two years later, in an unrelated criminal proceeding involving the
   supplier (fraud case opened by the prosecution), the case file is
   referenced — the prosecution sees the enforcement history through
   the Information Mediator BB, with appropriate access controls
   distinguishing pre-trial confidentiality protections.
```

The journey illustrates four architectural properties: (1) the National Case Registry is the spine connecting different proceedings concerning the same parties; (2) the fragmented semantic stack — eIDAS for trust services, ODR standards, NIEM-derived case data, ECLI for any judgment — is composed rather than replaced by a single standard; (3) the Information Mediator BB connects the actors (courts, bailiffs, banks, registries, prosecution); (4) citizens see and act on their case through a single Natural Digital Environment.

## 5.3 The criminal-justice cross-border flow

The cross-border flow architecture in EU contexts illustrates the complexity:

1. A crime is committed. Police investigate; prosecution opens a case in the prosecution CMS.
2. Investigation reveals the suspect has fled to another EU member state.
3. Prosecutor issues a European Arrest Warrant (EAW) through the prosecution CMS, which is profile-conformant with e-CODEX.
4. The EAW is transmitted via e-CODEX to the executing member state's judicial authority.
5. Receiving member state's court reviews the EAW; if valid, executes (subject to mandatory and optional grounds for refusal).
6. Subject is surrendered. Cross-border transfer is recorded in both states' criminal records (ECRIS).
7. Trial proceeds in the issuing state. If convicted, conviction is recorded in the issuing state's criminal records and exchanged via ECRIS to relevant member states.
8. Imprisonment may be served in the issuing or executing state under EU Framework Decision 2008/909 (transfer of prisoners).

This is one of 24 cross-border procedures covered by the EU Digitalisation Regulation. Architecturally each procedure has a similar shape: national system → e-CODEX gateway → recipient national system, with structured messages defined by procedure-specific profiles.

## 5.4 The corrections-rehabilitation flow

The architectural shape of the corrections-rehabilitation flow:

1. Court orders custodial sentence; OMS opens prisoner record on intake.
2. Risk and Needs Assessment performed; sentence plan defined; rehabilitation programmes (education, vocational, mental-health) assigned.
3. Prisoner participates in rehabilitation programmes through the prison-period; completions recorded in the OMS; certificates issued where relevant.
4. Pre-release planning begins 3–12 months before release; reintegration coordinator engaged; coordination with probation, social protection, employment services.
5. Release; transfer to probation supervision (where the sentence includes a community component); electronic monitoring may be applied.
6. Probation supervision proceeds; risk reassessment at intervals; reintegration support (housing, employment, family mediation) coordinated through Information Mediator BB.
7. Sentence completion or supervision termination; record retention under jurisdictional rules (often with rehabilitation-period rules for criminal-records disclosure).

## 5.5 Process metrics

| Metric | Source | Target |
|--------|--------|--------|
| Case Registry coverage | National Case Registry vs court-level data | >95% by Wave 3 |
| Average case duration (civil first instance) | CMS | <12 months by Wave 2; <6 months by Wave 4 (CEPEJ benchmarks) |
| e-Filing rate (civil cases) | CMS | >80% by Wave 2 end; 100% by Wave 3 |
| Judgment publication latency | Judgment Platform | <30 days from judgment to publication by Wave 2 |
| Cross-border procedure latency (EU) | e-CODEX gateway | within Digitalisation Regulation deadlines |
| Pre-trial detention rate | OMS | tracked, reviewed against UN benchmarks |
| Recidivism rate (3-year reconviction) | OMS + ECRIS | tracked, reviewed against international benchmarks |
| Legal-aid coverage of eligible population | Legal Aid Board | >90% by Wave 3 |
| ODR resolution rate (where offered) | ODR Platform | >60% by Wave 3 |
| Citizen satisfaction with e-Justice portal | Annual survey | >70% by Wave 3 |

---

# Section 6: Building Blocks for Justice

## 6.1 GovStack BB usage in the justice sector

The GovStack Building Block catalogue (PAERA Annex A1.3) provides foundational BBs. The justice sector uses a subset directly, plus justice-specific complementary BBs.

### 6.1.1 Direct use of GovStack foundational BBs

| GovStack BB | Justice-sector use |
|------------|--------------------|
| **Identity BB** | Citizen authentication for the e-Justice portal; lawyer / notary authentication; judge authentication (with elevated assurance); cross-border identity verification (eIDAS in EU). |
| **Information Mediator BB** (X-Road or equivalent) | Cross-organisation exchange — courts ↔ bailiffs ↔ prosecution ↔ prisons ↔ banks ↔ land registry ↔ business registry ↔ civil registration. The substrate of cross-government justice-sector integration. |
| **Registration BB** | Lawyer registration with bar; notary appointment registry; expert-witness registry; legal-aid lawyer registry. |
| **Workflow BB** | Court case workflow; prosecution case workflow; legal-aid workflow; ODR workflow; many internal administrative workflows. |
| **Payment BB** | Court fee collection; legal-aid disbursement to lawyers; criminal-fines collection; bail handling; restitution payments. |
| **Consent BB** | Where used — for cross-system data-sharing authorisation (witness consent, victim consent, party consent for information sharing). |
| **Digital Wallet BB** | Where deployed — citizen holds court documents (case file extracts, judgments, certificates of judgment, criminal-records extracts under controlled disclosure rules). |
| **Messaging BB** | Court-citizen communication (registered electronic delivery for procedurally-significant notifications); court-lawyer communication; prosecution-witness coordination. |

### 6.1.2 Justice-specific complementary BBs

Five complementary BBs are widely deployed in mature national justice architectures.

| Justice BB | Function | Reference implementations |
|------------|----------|---------------------------|
| **Court Management System (CMS)** | End-to-end case management — filing, allocation, scheduling, hearing, judgment, appeal. | CourtStack (open-source); CourtManager / OCMS (Tyler / Thomson Reuters family); national bespoke (Estonia KIS, German eAkte, French Portalis, Spanish LexNET, Italian Telematic Civil Trial). |
| **e-CODEX Connector** (EU member states) | National connector to the EU e-CODEX cross-border judicial-cooperation infrastructure. | EU-supplied reference connector; commercial integrators provide deployment. |
| **e-Filing Platform** | OASIS LegalXML ECF-conformant electronic court filing. | Tyler Odyssey (commercial, US-led); national bespoke; integrated within CMS in some deployments. |
| **Verifiable Trust Service** (eIDAS-conformant) | Qualified electronic signatures, qualified electronic seals, qualified time-stamps, qualified electronic registered delivery. | EU member states: regulated trust service providers; non-EU: country-specific or commercial (DocuSign, Adobe Sign with QES profiles). |
| **Online Dispute Resolution (ODR) Platform** | Asynchronous dispute resolution for civil and consumer disputes. | National platforms; commercial (Modria, Tyler ODR); EU ODR Platform reference. |

These five BBs are part of every national justice EA at Maturity Level 3 and above.

## 6.2 Priority Building Blocks for Justice by maturity level

| Maturity / Wave | BBs deployed |
|-----------------|--------------|
| **Wave 1 (Maturity Level 2)** | Identity BB; Registration BB; Information Mediator BB; CMS Wave 1 (largest courts); Workflow BB |
| **Wave 2 (Maturity Level 3)** | e-Filing Platform; Verifiable Trust Service; Payment BB (court fees); Messaging BB; Judgment Publication with ECLI; OMS modernisation |
| **Wave 3 (Maturity Level 3 → 4)** | ODR Platform; Consent BB; Digital Wallet BB; e-CODEX Connector (EU); ECRIS integration (EU); Cross-border full digital cooperation |
| **Wave 4 (Maturity Level 4)** | AI-assisted decision support (with mandatory human-in-the-loop); predictive analytics; advanced e-evidence handling; National Legal Data Space |

A country at Maturity Level 1 with no foundational DPI needs the Wave-0 health-or-justice-foundation programme first. A country at Maturity Level 2 with mature foundational DPI (Identity BB, Information Mediator BB, Registration BB across other sectors) can deploy Wave 1 justice BBs in 12–18 months team-effort time.

## 6.3 BB integration with justice-sector applications

| Application | BBs consumed |
|-------------|--------------|
| Court Management System (CMS) | Identity (judges, lawyers, citizens); Workflow; Information Mediator; e-Filing; Verifiable Trust Service |
| e-Filing Platform | Identity (lawyers, citizens); e-Filing BB; Verifiable Trust Service for signatures |
| Hearing Management | Identity; Workflow; Messaging (notifications) |
| Judgment Publication Platform | Identity (judge signatures); Verifiable Trust Service; ECLI assignment |
| Prosecution CMS | Identity; Workflow; Information Mediator; e-CODEX (EU); INTERPOL channel |
| OMS | Identity (officers); Workflow; Information Mediator (health, social protection); Messaging |
| Probation Management | Identity; Workflow; Information Mediator; Electronic Monitoring integration |
| Legal Aid Case Management | Identity; Workflow; Payment (lawyer disbursement); Information Mediator |
| ODR Platform | Identity; Workflow; Verifiable Trust Service; Messaging |
| e-Justice National Portal | Identity (via National ID); Consent BB; Digital Wallet; Messaging |
| Cross-Border Cooperation Platform | e-CODEX Connector (EU); INTERPOL gateway; Hague Convention forms |

## 6.4 Sourcing decisions and Bespoke Footprint

Per T60 §3 default sourcing patterns: foundational DPI BBs are Configure (the country operates them as DPI; the justice sector integrates). Justice-specific BBs (CMS, e-CODEX Connector, e-Filing, Verifiable Trust Service, ODR Platform) are Configure where mature open-source or commercial standards-conformant implementations exist; Build is reserved for country-specific business logic — local procedural rules, country-specific case-status models, country-specific docketing logic, jurisdiction-specific workflows.

A representative Bespoke Footprint for a deployed national justice EA at Maturity Level 3 is in the range 15–25% — comparable to or slightly above health and education, reflecting the substantial country-specific procedural-rule layer that no commercial product can encode out of the box. Above 25% indicates bespoke-trap drift; the EA Board commissions a review per T60 §5.4.

---

# Section 7: Implementation Path

## 7.1 Indicative timeline

The implementation timeline assumes a country at Maturity Level 1 (Initial / Ad-Hoc) at programme start with paper-dominant case files and no national CMS. Mobilisation phase per T15 §4.1 (legal, political, budget, procurement, capacity readiness) precedes Wave 1 and typically takes 18–30 months for a national justice-EA programme — longer than education or health because of the constitutional-separation requirement, which means coordination with the judiciary's own governance is needed in parallel with executive-branch mobilisation.

| Wave | Maturity target | Team-effort time | Indicative deliverables |
|------|----------------|------------------|-----------------------|
| Wave 1 — Foundation | Level 2 | 24 months | Legal framework (data-protection rules for justice; admissibility of electronic records; eIDAS-equivalent national trust law); Council for the Judiciary engagement and judicial-track governance; National Case Registry Wave 1; CMS deployed in the largest court; first prosecution-court data exchange; OMS modernisation Wave 1 |
| Wave 2 — Pilot expansion | Level 3 partial | 18 months | National CMS rollout to all first-instance courts; e-Filing for civil cases; Judgment Publication with ECLI; Probation Management modernisation; Legal Aid Case Management Wave 1; Verifiable Trust Service operational |
| Wave 3 — National rollout | Level 3 | 24 months | Appellate courts on national CMS; ODR Platform for civil low-value disputes; e-Justice national portal; Digital Wallet integration; cross-border cooperation through e-CODEX (in EU contexts) at full coverage |
| Wave 4 — Optimisation | Level 4 | Ongoing | AI-assisted decision support with human-in-the-loop; predictive case-flow analytics; advanced e-evidence handling; National Legal Data Space for research and AI |

Calendar time per T15 §4.2 is longer. A national justice-EA programme typically takes 6–8 years calendar time from Wave 1 start to Wave 3 completion — the longest of any GEATDM sector covered, reflecting the constitutional-coordination layer.

## 7.2 Critical path

The critical path runs through:

1. **Legal framework.** Justice-sector EA depends on substantial legal-framework work: rules on admissibility of electronic evidence; rules on electronic service of documents; rules on the legal validity of qualified electronic signatures in legal proceedings; data-protection rules for criminal-records data; rules on cross-border judicial cooperation. Estimated 18–30 months for the new legislative package.
2. **Council for the Judiciary engagement.** Without sustained judicial-track engagement, the architecture for courts cannot be deployed regardless of executive-branch progress. Engagement must begin at programme inception and continue through every Wave.
3. **National Case Registry Wave 1.** Without an authoritative case identifier, the entire architecture is unreliable.
4. **First-court CMS deployment.** Demonstrates the architecture; produces lessons that shape Wave 2 onwards.
5. **Workforce capacity.** Justice-sector ICT capacity in country governments is typically thinner than for general digital-government work — and judges in particular often have weak digital literacy. Intentional capacity-building from Wave 1, including dedicated judicial-academy partnership.
6. **Cross-border alignment (EU contexts).** EU member states and accession candidates have non-negotiable cross-border procedural deadlines under the Digitalisation Regulation. Wave 2 onwards must include e-CODEX integration on the regulatory deadline.

## 7.3 Common anti-patterns

The four most common anti-patterns observed in justice-sector EA programmes:

- **Single national e-Justice platform procurement.** Bundling CMS, prosecution CMS, OMS, e-Filing, ODR, and citizen portal into one contract. The Vendor-Driven Architecture Trap (T16 §3) in canonical form. Treated by domain decomposition (T60 §3) and procurement governance (T16 §3.5).
- **CMS deployment without judicial governance.** Executive procures and deploys a CMS that judges did not co-design; the CMS goes live but is rejected by the judiciary in practice. Treated by the parallel judicial-track governance described in §1.3.
- **e-Filing without lawyer co-design.** The bar association is not engaged; lawyers continue paper filing because the e-Filing system does not match their workflow. Treated by Tier 2 stakeholder engagement (T59 §5.2) including Bar Association from inception.
- **AI-assisted decision support without explicit human-in-the-loop.** AI tools (case classification, sentencing-recommendation, sentencing-guideline assistance) deployed without explicit constitutional review and explicit human-in-the-loop guarantees. Treated by Architectural Principle 4 (Section 1.4) and by T16 §3.4 (refusal of AI as decision-maker without human authority).

## 7.4 Cross-references

| Topic | Reference |
|-------|-----------|
| Public-sector reality (legal, political, budget, procurement, capacity) | T15 |
| Architectural traps and Strangler Fig | T16 |
| Stakeholder engagement (Tier 1 / Tier 2 / Tier 3) | T59 |
| Sourcing strategy and Bespoke Footprint | T60 |
| Interoperability framework (the substrate the justice sector consumes — Information Mediator BB; e-CODEX in EU contexts; cross-organisation integration of police, prosecution, courts, prisons, probation) | 08-Interoperability |
| DPI roadmap (foundational pillars — Identity for citizens, lawyers, judges, officers; Data for case registries; Interoperability) | 09-DPI |
| Health sector parallel patterns (constitutional governance separation; consent; sensitive-data handling) | GEATDM-Sector-Health |
| Tax sector parallel patterns (cross-border integration as a substantial domain) | GEATDM-Sector-Tax |
| EU e-CODEX | eulisa.europa.eu / e-CODEX |
| EU e-Justice Portal | e-justice.europa.eu |
| EU Digitalisation Regulation 2022/850 | EUR-Lex |
| OASIS LegalXML ECF | docs.oasis-open.org/legalxml-courtfiling |
| NIEM Justice and Corrections | niemopen.org |
| Akoma Ntoso / LegalDocML | docs.oasis-open.org/legaldocml |
| ECLI and ELI | EU Council Conclusions |
| eIDAS 2.0 | EU Regulation 2024/1183 |
| CEPEJ EVALIN | coe.int/cepej |
| World Bank Justice and Rule of Law (JROL) | worldbank.org/en/programs/global-program-on-justice-and-rule-of-law |
| OECD People-Centred Justice | oecd.org/en/publications/making-justice-systems-more-effective-and-people-centred |
| UNODC criminal-justice toolkit | unodc.org |
| UNCITRAL ODR Technical Notes | uncitral.un.org |
| GovStack BB specifications | specs.govstack.global |

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

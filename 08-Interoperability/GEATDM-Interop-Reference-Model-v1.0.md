# GEATDM Interoperability Reference Model

**Document:** GEATDM-Interop-Reference-Model-v1.0
**Part of:** Interoperability Module (08)
**Version:** 1.0
**Date:** May 2026
**Status:** Released
**License:** Creative Commons Attribution 4.0

---

## Document Control

| Attribute | Value |
|-----------|-------|
| Document ID | GEATDM-Interop-Reference-Model |
| Title | Interoperability Reference Model |
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
- Section 2: The Four Interoperability Layers
- Section 3: Functional Architecture
- Section 4: Technical Architecture
- Section 5: Governance Model Archetype
- Section 6: Standards Landscape
- Section 7: Building Blocks Consumed
- Section 8: Cross-References

---

# Section 1: Introduction

## 1.1 Purpose and scope

This document is the GEATDM reference model for a national Government Interoperability Framework (GIF). It describes the architectural shape that any country's GIF takes — irrespective of the technology choices, the governance structure, or the legal tradition. It is a normative starting point: a country adapts the reference model to context rather than designing one from scratch.

A GIF is a regulated, governed, technical infrastructure for the exchange of data and the integration of information systems across the public administration. It is one of the four foundational pillars of Digital Public Infrastructure (PAERA §3.4) — alongside Access, Digital Data, and Digital Identity — and it consumes services from the others. Its operation is a precondition for sectoral digital transformation: without an interoperability framework, every sectoral architecture either reinvents integration mechanics or accepts isolated systems and manual data movement.

## 1.2 Where this module sits in GEATDM

The Interoperability module sits parallel to the sector guides (06) and to the DPI module (09). The relationship is ordered:

- **DPI assessment first.** The country runs a DPI assessment (the DPI module, 09) to scope the foundational pillars that need investment. Interoperability is one of the five pillars assessed.
- **Interoperability framework next.** Where the DPI assessment shows that the country needs to build or modernise its interoperability framework, the country runs an Interoperability programme using this module as the methodology.
- **Sector EAs consume the framework.** Once the GIF is operational, sector guides (Health, Education, Tax, Justice, Customs) compose their services on top — using the Information Mediator BB, the trust services, the technical standards.

The Interoperability module is not a sector guide. It does not target one ministry; it targets a national capability that every ministry will use.

## 1.3 Source frameworks

| Framework | Role |
|-----------|------|
| **PAERA v1.0** | Normative reference. PAERA §3.4.3 (Interoperability) defines the conceptual frame; §3.2 (Legal Framework) defines the legal-pillar treatment; §5.2 Principles #2 (Whole-of-Government), #5 (Once-Only), #9 (Cross-border by Default) drive the design. |
| **EU European Interoperability Framework (EIF)** | Defines the four interoperability layers (technical, semantic, organisational, legal) used in §2 of this document. |
| **Estonia X-Road** (x-road.global, MIT-licensed) | Reference deployment of the technical-platform layer; many countries use X-Road or X-Road derivatives. |
| **GovStack Information Mediator BB specification** (specs.govstack.global) | The international BB specification for the technical platform; X-Road is one conformant implementation. |
| **EU eIDAS 2.0** | Trust services: qualified electronic signatures, qualified seals, qualified timestamps, qualified electronic registered delivery. |
| **EU Once-Only Technical System (OOTS)** | Reference implementation pattern for the Once-Only Principle in cross-border cooperation. |
| **W3C Verifiable Credentials Data Model** | Where credentials cross the framework. |
| **ISO/IEC 11179** | Metadata registries — semantic interoperability foundation. |
| **ISO/IEC 25010** | Software and system quality model — used in the technical-quality discipline. |
| **NIIS / Nordic Institute for Interoperability Solutions** | Operational guidance for X-Road deployments and X-Road Federation. |

## 1.4 How to read this document

Read Section 2 to understand the four-layer model; this is the conceptual frame. Sections 3 and 4 are the technical depth — read them if you are an architect or you are evaluating a vendor proposal. Section 5 is the governance archetype — read it if you are designing the institutional structure that will own and operate the framework. Section 6 is the standards landscape — consult it during procurement or during sectoral integration. Section 7 maps the framework's relationship to other GovStack BBs. The companion Method document (GEATDM-Interop-Method) sets out *how* to develop a country-specific GIF using this reference model; the Toolkit (GEATDM-Interop-Toolkit) provides the templates.

---

# Section 2: The Four Interoperability Layers

## 2.1 The four-layer model

Interoperability is conventionally analysed across four layers, following the EU European Interoperability Framework. The layers are concurrent, not sequential — every interoperability problem touches all four. The four-layer model is the basis for the eight-step method (companion document) and for the architectural structure described in §3 below.

| Layer | Concern | Examples |
|-------|---------|----------|
| **Technical** | Connectivity, protocols, message formats, security mechanisms | REST/OpenAPI 3.x; SOAP; mutual TLS; PKI; X-Road; AsyncAPI; event bus protocols |
| **Semantic** | Meaning of data — common vocabularies, code lists, ontologies, data models | ISO/IEC 11179 metadata registries; sectoral standards (HL7 FHIR for health, Giga School for education, ISO 20022 for finance); national data dictionaries |
| **Organisational** | Process alignment, RACI, service-level agreements, escalation, change management | Three-tier governance; Steering Committee membership; Technical Working Groups; SLA framework |
| **Legal** | Legal authority for data exchange, mandate of the operating authority, legal effect of electronic transactions, sanctions | Decree on interoperability; data-protection law; electronic-signatures law; constitutional grounding of the operating authority |

A GIF that addresses only the technical layer is a connectivity infrastructure — not an interoperability framework. The legal, organisational, and semantic layers are equally consequential; in practice the legal layer is often the most time-consuming to put in place (T15 §3.1).

## 2.2 Layer interactions

The four layers interact at three architectural seams:

**Legal authorises Organisational.** A decree or equivalent legal instrument establishes the operating authority, defines the membership obligations, and confers enforcement powers. Without legal authority, the organisational layer has no basis for setting standards or applying sanctions.

**Organisational governs Technical and Semantic.** The operating authority (typically a national ICT authority or its dedicated agency) selects and publishes binding technical standards (Technical Working Groups), curates the semantic standards portfolio (ISO 11179-aligned registry), and operates the change-management process for both layers.

**Technical and Semantic enable Legal compliance.** Once the technical layer is operational and the semantic layer is mature, the legal layer's obligations (Once-Only, evidentiary value of electronic records, audit trail) become enforceable. Without operational technical and semantic capabilities, the legal obligations cannot be met regardless of the wording.

The EA practitioner who treats the four layers as a sequence ("technical first, legal later") will find that the framework cannot operate when delivered. The four layers are developed in parallel through the eight-step method.

---

# Section 3: Functional Architecture

## 3.1 Functional layer overview

The technical platform has four functional layers. The layering is conceptual, not strictly tier-physical; many implementations collapse the layers into a smaller number of services for operational simplicity.

| Functional layer | Role |
|------------------|------|
| **Service Access Layer** | Point of contact for member organisations and their applications. Authenticates members, exposes service endpoints, applies access controls. |
| **Event Distribution Layer (Pub/Sub)** | Publishes business events from one member to subscribed members. Enables event-driven integration patterns alongside request/response. |
| **Trust and Security Infrastructure** | Operates the PKI; manages member certificates; signs and timestamps messages; logs for audit. |
| **Governance and Administration** | Member registration; service registration; standards publication; monitoring; compliance reporting. |

## 3.2 Service Access Layer

The Service Access Layer is the boundary between member organisations and the framework.

**Responsibilities.**
- **Member authentication.** Each member presents a member-grade certificate issued by the framework's PKI. Mutual TLS authentication is the default mechanism.
- **Service routing.** Requests are routed to the providing member based on the addressed service. Routing is by service descriptor, not by IP.
- **Access control.** Access to a service is governed by service-level access rules registered by the providing member with the framework. Rules typically combine member identity, role of the calling user (where applicable), and consent (where the data is personal).
- **Protocol mediation.** Members expose services in their preferred protocol (typically REST/OpenAPI; SOAP supported for legacy); the framework adapts where necessary, though architecture prefers protocol consistency at the wire.
- **Audit logging.** Every transaction is logged with correlation identifier, sender, recipient, service, timestamp, signature reference. The log is the evidentiary basis for the legal layer.

**Architectural patterns.** Two primary patterns: (a) X-Road-style **member-to-member** with the framework as the trusted intermediary; (b) **API gateway** centralised pattern for greenfield deployments without the X-Road heritage. GEATDM's default reference is the X-Road pattern for two reasons — proven scale (Estonia, Finland, Iceland, multiple others); MIT-licensed open-source codebase; structurally consistent with the Whole-of-Government principle (PAERA §5.2 #2).

## 3.3 Event Distribution Layer

The Event Distribution Layer supports the asynchronous half of the architecture.

**Responsibilities.**
- **Event publication.** A member publishes a business event ("birth registered", "VAT return filed", "license renewed") to the framework. The event carries a payload conformant with the registered semantic schema.
- **Subscription.** Other members subscribe to events of interest. Subscription is governed by access control under the same rules as request/response services.
- **Reliable delivery.** Events are delivered at least once; subscribers are responsible for idempotency. Where ordering matters, partition keys are defined per event type.
- **Replay and re-delivery.** A subscriber recovering from outage can request replay of events from a position in the event log.

**Architectural patterns.** The reference deployment uses Apache Kafka or equivalent for the broker; the broker sits behind the Service Access Layer for authentication and authorisation. AsyncAPI is the canonical contract format for event types; it complements OpenAPI (used for request/response). Members publish events through the same Service Access Layer that handles request/response — there is one ingress, two semantic patterns.

The event-distribution capability is the architectural foundation for the Once-Only Principle (PAERA §5.2 #5). Where authoritative sources publish events on data changes, downstream consumers are kept current without re-collecting from the citizen.

## 3.4 Trust and Security Infrastructure

The Trust and Security Infrastructure layer provides the cryptographic foundation that makes the framework's operations legally significant.

**Responsibilities.**
- **PKI operation.** A root CA (typically operated by the framework's authority or by the national e-government CA), an intermediate CA, and member-grade certificates. Certificate issuance, renewal, and revocation are managed by the Trust and Security Infrastructure.
- **Message signing.** Every message exchanged through the framework is signed by the sender's certificate. The signature is verified by the framework on ingress and stamped by the framework on egress; a recipient sees a doubly-signed message that cannot plausibly be repudiated.
- **Timestamping.** Where evidentiary value matters (financial transactions, judicial documents, regulatory filings), messages are also timestamped by a trusted timestamp authority. Where the country has eIDAS-equivalent qualified timestamp service, that service is used.
- **Audit logging.** The audit log itself is signed and timestamped at intervals; the log is then itself a tamper-evident record.
- **Key management.** HSM (hardware security module) protection of private keys for the framework's own certificates; member-side HSM is recommended but not always feasible — the framework specifies the minimum bar.

**Trust model.** Trust within the framework is hierarchical: the framework's root CA establishes the ground; member certificates derive from it. Trust *across* frameworks (cross-border interoperability) is bridged through trust federations — for example Estonia–Finland–Iceland federate their X-Road instances via NIIS.

## 3.5 Governance and Administration

The Governance and Administration layer is where the operating authority manages the framework as a system.

**Responsibilities.**
- **Member registration.** Onboarding of new member organisations. Member status, contacts, technical particulars, and certificates are recorded.
- **Service registration.** Each service exposed by a member is registered with descriptor (OpenAPI / AsyncAPI), access policy, SLA commitment, contact for issue resolution.
- **Standards publication.** The framework publishes binding technical standards (current and superseded versions) and the binding semantic registry.
- **Monitoring.** Real-time and historical monitoring of throughput, latency, error rates per service and per member. Operational health is observable to the operating authority and to the affected members.
- **Compliance reporting.** Periodic reports to the supervising authority (typically the council of ministers via the responsible minister) on member compliance, breaches, sanctions applied.
- **Change management.** A formal process for proposing and adopting changes to the technical and semantic standards; described in the Method document §6 and §8.

---

# Section 4: Technical Architecture

## 4.1 Deployment architecture

A reference deployment consists of:

- **Central Server.** Operated by the framework's authority. Holds the membership registry, the service catalogue, the central component of the PKI, and the central monitoring. Replicated across two or more sites for high availability.
- **Security Servers (one per member).** Deployed at the member's network edge. Apply mutual TLS to inbound and outbound traffic, sign outbound messages, verify inbound signatures, log every transaction. Provide the integration surface to the member's internal applications.
- **Time-Stamp Authority.** Either central, operated by the framework's authority, or external (national qualified TSA). Issues the timestamps used by the audit log and by transactional records that require evidential timestamps.

Each member organisation operates exactly one Security Server (or a redundant pair). Internal applications within the member's network call the Security Server; the Security Server handles the framework's protocol with the central server and with peer members' Security Servers.

This pattern — central server plus member-side security servers — is architecturally the X-Road pattern. Information Mediator BB conformant implementations follow the same pattern. Greenfield deployments without X-Road heritage may collapse the member-side Security Server into the central API gateway, but the architectural relationships are preserved.

## 4.2 Security layers

The security architecture is layered and explicit.

| Layer | Mechanism | Notes |
|-------|-----------|-------|
| **Network** | TLS 1.3; mutual authentication; member-grade certificates | Default everywhere; non-TLS traffic is rejected at ingress |
| **Application** | Member-grade certificate verification; service-level access policy | Access policy is registered with the framework; enforcement is at the Security Server |
| **Message** | Message signing by sender's certificate; framework counter-signature; timestamp | Every message; non-repudiation by both parties |
| **Audit** | Append-only log; signed and timestamped at intervals; replicated | The legal-evidence basis |
| **Identity** | Where end-user identity is conveyed, a separate user-token (typically OIDC ID Token) flows through the call | Identity assurance level is part of the access-policy decision |

The combination of network-layer mutual TLS, message signing with the sender's certificate, and framework counter-signature produces a non-repudiable audit trail that the legal layer can rely on. This is the architectural foundation for the legal effect of electronic transactions through the framework.

## 4.3 Trust model — three security zones

The architecture distinguishes three security zones:

- **Member internal zone.** The member's internal network where applications run. Trust within this zone is the member's own concern; the framework does not specify it.
- **Framework zone.** The boundary defined by the Security Server on each member side, plus the Central Server. Communication within this zone is mutually-authenticated, signed, timestamped, and logged.
- **Untrusted zone (Internet).** Used only for citizen-facing channels (web portal, mobile app) and for cross-framework federation. Citizen-facing channels do not access services through the framework directly; they call member applications which then call the framework on behalf of the user.

This three-zone model is the canonical X-Road / Information Mediator BB pattern. Departures are possible but require the EA Board to record the architectural rationale.

## 4.4 Scalability considerations

The framework scales horizontally. Three patterns of growth:

- **More members.** Add Security Servers and member-grade certificates. The Central Server's membership registry scales linearly with member count; in practice, modest national populations of members (a few hundred organisations) operate comfortably on a small Central Server cluster.
- **More services.** Each service is independently described and operated. Service growth is bounded by the operating authority's standards-publication capacity, not by the technical platform.
- **More transactions.** Throughput scales by adding Security Server capacity at the affected members and (for the central monitoring) by adding monitoring shards. The Central Server is not in the critical path of member-to-member messages — it serves only registration and discovery.

## 4.5 High availability and resilience

The reference deployment is multi-site active-active for the Central Server; multi-instance with fail-over for member Security Servers. Recovery time objective (RTO) for the Central Server is typically minutes; for member Security Servers, measured per member.

The architecture survives partial outage gracefully because the Central Server is not in the message path. Cached membership and service-catalogue data at member Security Servers continue to authorise message exchange even during a Central Server outage; only registration of new members or new services is impaired.

## 4.6 International standards alignment

The reference architecture aligns with:

| Standard | Alignment |
|----------|-----------|
| **GovStack Information Mediator BB** | Conformant implementation pattern. |
| **EU EIF** | Four-layer model adopted. |
| **eIDAS 2.0** (where applicable) | Trust services consumed; qualified timestamps and signatures from regulated providers. |
| **ISO/IEC 27001** | Information security management of the operating authority. |
| **ISO/IEC 27037** | Digital evidence handling — the audit-log architecture supports it. |
| **NIIS X-Road operational practice** | Adopted directly where the country uses X-Road. |

---

# Section 5: Governance Model Archetype

## 5.1 The three-tier governance

A national interoperability framework requires governance at three levels. The model below is the archetype; country variation is expected.

| Tier | Body | Composition | Cadence |
|------|------|-------------|---------|
| **Strategic** | National Interoperability Council | Chair: Minister responsible for digital government. Members: principal secretaries of the major member ministries (Finance, Interior, ICT, Health, Justice). Secretariat: the operating authority. | Quarterly |
| **Tactical** | Interoperability Steering Committee | Chair: Director-General of the operating authority. Members: ICT directors of major member ministries; representatives of regulators (data protection, audit). | Monthly |
| **Technical** | Technical Working Groups (TWGs) | One TWG per technical-standards domain (security, semantics, APIs, platform operations). Members are working-level architects nominated by member organisations. | Bi-weekly during active standards work |

The three-tier model maps to the standard EA Governance pattern (T13). The Steering Committee is the body that reviews and approves architectural decisions at the framework level. The TWGs do the substantive technical work and bring proposals to the Steering Committee. The Council provides the political and ministerial cover that the Steering Committee needs to compel reluctant member ministries.

## 5.2 The operating authority

Every national framework has an operating authority — a single legal entity that holds the legal mandate, runs the central technical platform, employs the technical staff, and is accountable to the supervising minister. Common patterns:

- **Dedicated agency** within the national ICT authority (the most common pattern in EU member states and in X-Road adopters).
- **Department of a ministry** (less common; tends toward governance challenges where the ministry has its own member-ministry interests).
- **Independent statutory body** with its own board (rare; the model in some federal structures).

The operating authority typically has 30–80 staff at scale, distributed across: technical platform operations (~30–40%), member onboarding and support (~20%), standards and architecture (~15%), legal and compliance (~10%), administration (~15–20%).

## 5.3 RACI for the framework's main decisions

| Decision | Council | Steering Committee | TWG | Operating Authority | Member |
|----------|---------|-------------------|-----|---------------------|--------|
| National strategy direction | A, R | C | I | C | I |
| New binding technical standard | I | A | R | C | C |
| Member admission | I | A | I | R | I (informed of own admission) |
| Sanction for non-compliance | A (severe sanctions only) | A (routine sanctions) | I | R | I |
| Operating-authority budget | A | C | I | R | C |
| Standards-publication change-management | I | A | R | R | C |
| Service registration | I | I | I | R, A | R (own services) |

R = Responsible, A = Accountable, C = Consulted, I = Informed. The pattern reflects the principle that strategic decisions are political (Council), tactical decisions are technical-administrative (Steering Committee), and operational decisions are delegated (Operating Authority and TWGs).

## 5.4 Member obligations

Each member organisation operates within a defined obligation set. The obligations are typically codified in the legal instrument (Decree) plus subordinate technical regulation issued by the operating authority. Standard obligations:

- Operate a Security Server compliant with the framework's technical standards.
- Maintain authoritative data within the member's mandate; expose authoritative services to the framework when registered to do so.
- Adopt, within the publication transition period, every binding technical standard issued by the operating authority.
- Cooperate with audit and monitoring; provide access to operational logs upon request.
- Designate a Data Protection Officer (where personal data flows through the framework) and a Technical Focal Point.
- Pay any cost-sharing contribution as agreed by the Council.

The Toolkit (companion document) provides the Member Requirements template that operationalises these obligations.

---

# Section 6: Standards Landscape

## 6.1 Technical standards portfolio

A national framework typically maintains a portfolio of binding technical standards across the following families. The framework adopts each by reference rather than re-specifying.

| Family | Standards (illustrative) | Notes |
|--------|--------------------------|-------|
| **API specification** | OpenAPI 3.x | Default for all REST services |
| **API specification — async** | AsyncAPI 2.6+ | For event-distribution-layer services |
| **Authentication / authorisation** | OAuth 2.x / OpenID Connect; mutual TLS | OAuth tokens for end-user identity propagation; mutual TLS for member-to-framework |
| **Transport** | TLS 1.3 | Mandatory minimum |
| **Cryptography** | NIST-approved suites (FIPS 140-2 / 140-3 reference) | Specific cipher suites in subordinate regulation |
| **Message integrity** | XAdES / CAdES / PAdES (per applicable standard) | Where the framework relies on signed messages for legal effect |
| **Time-stamping** | RFC 3161; eIDAS qualified TSA where applicable | |
| **Service discovery** | Framework-specific service catalogue API | Defined by the operating authority |
| **Logging and monitoring** | OpenTelemetry; Syslog (RFC 5424) | Standardised log formats simplify cross-member observability |

## 6.2 Semantic standards portfolio

The semantic standards portfolio is necessarily fragmented because semantic standards are sectoral. The framework's role is to register and publish (not to author) the semantic standards adopted by member sectors.

| Sector | Semantic standard | GEATDM Sector Guide reference |
|--------|------------------|-------------------------------|
| Health | HL7 FHIR R5; SNOMED CT; ICD-11; LOINC; ATC | GEATDM-Sector-Health §1.5 |
| Education — schools | Giga School (Project Connect) | GEATDM-Sector-Education §1.5 |
| Education — rostering | 1EdTech OneRoster | GEATDM-Sector-Education §1.5 |
| Education — credentials | W3C Verifiable Credentials + Europass | GEATDM-Sector-Education §1.5 |
| Finance / payments | ISO 20022 | GEATDM-Sector-Tax §1.5 |
| Tax — e-invoicing | EN16931; PEPPOL BIS Billing 3.0 | GEATDM-Sector-Tax §1.5 |
| Justice | NIEM Justice; OASIS LegalXML ECF; Akoma Ntoso; ECLI | GEATDM-Sector-Justice §1.5 |
| Customs | WCO Data Model; UN/EDIFACT CUSCAR/CUSDEC/CUSRES | GEATDM-Sector-Customs §1.4 |
| Identity | eIDAS 2.0 (EU); OpenID Connect | Cross-cutting |
| Cross-cutting | ISO/IEC 11179 metadata registry | The semantic-registry foundation |

The framework's semantic registry holds the country-specific extensions and the cross-walk between sectoral standards where one ministry's data needs to be consumed by another's.

## 6.3 Organisational standards

The organisational standards address the human and process dimension. Examples:

- Member Requirements template (Toolkit TK-IO-08).
- Service-Level Agreement template (Toolkit TK-IO-09).
- Incident-response runbook for the framework's central infrastructure.
- Change-management procedure for technical and semantic standards (Method §6).
- Data-protection-officer (DPO) coordination protocol where personal data flows.

## 6.4 Legal standards

The legal-layer treatment is jurisdictional and is described in detail in the companion Method document §5 and in the Toolkit's Decree Drafting Kit (TK-IO-05). Common features:

- The legal instrument grounding the framework (Decree, Statutory Instrument, Act).
- The mandate of the operating authority.
- Member obligations as enforceable rules.
- Sanctions for non-compliance, applied progressively.
- Co-ordination with personal-data-protection legislation.
- Cross-border alignment (EU EIF and Once-Only Regulation in EU contexts; AU Digital Transformation Strategy compatibility in African contexts).

---

# Section 7: Building Blocks Consumed and Produced

## 7.1 BBs consumed by the framework

The Interoperability Framework is itself a building block — the **Information Mediator BB** in the GovStack catalogue — but it consumes services from a small number of other foundational BBs.

| BB consumed | Use |
|-------------|-----|
| **Identity BB** | The framework's PKI integrates with national digital identity at member-organisation level; for end-user identity propagation, OIDC tokens issued under the national identity provider flow through framework messages. |
| **Registration BB** | Service registration and member registration use Registration BB patterns where the country has standardised on them; otherwise the framework's own registration capability is compatible. |
| **Time-Stamping (qualified)** | Where the country has a qualified TSA (eIDAS-conformant in EU; equivalent national authority elsewhere), the framework consumes its service for evidential timestamps. |
| **Messaging BB** | For citizen-facing notifications generated by member organisations using the framework. |

## 7.2 BBs produced by the framework

The framework produces three categories of services consumed by members and by other BBs:

| Service produced | Consumed by |
|------------------|-------------|
| **Information mediation (request/response)** | Every member-to-member service call; the canonical "Information Mediator BB" service |
| **Event distribution** | Members subscribing to events; particularly important for Once-Only patterns |
| **Audit log / evidentiary trail** | Audit office; courts (where electronic transactions are challenged); the operating authority's compliance team |

## 7.3 Sectoral consumption

Every sector guide describes the sector's consumption of the framework. Common patterns:

| Sector | Framework usage |
|--------|----------------|
| Health | Cross-system clinical-data exchange; National Patient Index queries; provider directory queries; vaccination registry updates |
| Education | National Learner Registry queries; Digital Credentials issuance and verification; School Facility Registry queries (Giga-aligned) |
| Tax | Cross-government data ingestion (banks, employers, land registry); cross-border CRS / DAC reporting |
| Justice | Cross-organisation case-data exchange (police-prosecution-courts-prisons); cross-border judicial cooperation (e-CODEX in EU) |
| Customs | Single Window integration; trader-to-customs data exchange; cross-border trade-data exchange |

The sector guides reference this Reference Model in their integration-pattern sections.

---

# Section 8: Cross-References

| Topic | Reference |
|-------|-----------|
| PAERA Interoperability Pillar | PAERA §3.4.3 |
| PAERA Legal Framework | PAERA §3.2 |
| PAERA Whole-of-Government, Once-Only, Cross-border principles | PAERA §5.2 #2, #5, #9 |
| GEATDM Method (5-phase) | GEATDM-WP5-T58 |
| EA Framework — Metamodel, Principles, Governance | GEATDM-WP1-T11 to T14 |
| Public-sector reality | GEATDM-WP1-T15 |
| Architectural traps | GEATDM-WP1-T16 |
| Stakeholder engagement (interoperability-specific tier mapping in the Method document) | GEATDM-WP5-T59 |
| Sourcing strategy | GEATDM-WP5-T60 |
| AI plays for GIF (gif-decree-draft, gif-semantic-map, gif-openapi-gen) | GEATDM-WP7-AI-Plays-Catalogue §4 |
| Companion Method document | GEATDM-Interop-Method (this module) |
| Companion Toolkit | GEATDM-Interop-Toolkit (this module) |
| DPI module | 09-DPI (parallel module) |
| Sector guides | 06-Sector-Guides |
| GovStack Information Mediator BB | specs.govstack.global |
| Estonia X-Road | x-road.global |
| EU EIF | ec.europa.eu/isa2/eif |
| EU eIDAS 2.0 | EUR-Lex Regulation 2024/1183 |

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

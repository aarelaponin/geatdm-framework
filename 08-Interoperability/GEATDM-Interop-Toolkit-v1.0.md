# GEATDM Interoperability Toolkit

**Document:** GEATDM-Interop-Toolkit-v1.0
**Part of:** Interoperability Module (08)
**Version:** 1.0
**Date:** May 2026
**Status:** Released
**License:** Creative Commons Attribution 4.0

---

## Document Control

| Attribute | Value |
|-----------|-------|
| Document ID | GEATDM-Interop-Toolkit |
| Title | Interoperability Toolkit |
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

- TK-IO-01: Strategic Foundation Document Template
- TK-IO-02: Stakeholder Engagement Plan (interoperability tier mapping)
- TK-IO-03: Use-Case Catalogue Template
- TK-IO-04: Decree Drafting Kit (5 sub-templates)
- TK-IO-05: Governance Model Document Template
- TK-IO-06: High-Level Architecture Document Template
- TK-IO-07: Technical Standards Catalogue Template
- TK-IO-08: Member Requirements Template
- TK-IO-09: Service-Level Agreement Template
- TK-IO-10: Member Onboarding Workflow
- TK-IO-11: Workshop Concept Note
- TK-IO-12: Conformance Test Plan Template
- TK-IO-13: Risk Register
- TK-IO-14: Success Metrics

---

# TK-IO-01: Strategic Foundation Document Template

## Purpose

The Strategic Foundation Document is the principal output of Method Step 1. It consolidates the policy intent, the sectoral demand, the Tier 1 commitments, the target benefits, the programme objectives, and the political-sponsorship picture into a single document for the Council of Ministers (or equivalent) at the formal programme launch.

## Template

```
NATIONAL INTEROPERABILITY FRAMEWORK PROGRAMME
Strategic Foundation Document

Programme Director:    [name, role]
Date:                  [date]
Status:                [Draft / For Council Approval / Approved]

1. POLICY INTENT
   1.1 Strategic basis (cite directive / cabinet decision / strategy document)
   1.2 Statement of policy intent (3–5 sentences)
   1.3 Alignment with national digital strategy

2. SECTORAL DEMAND
   2.1 Wave 1 sectors (5 sectors maximum)
       For each: brief description; Tier 1 / Tier 2 classification; primary
       use cases anticipated; expected benefits (citizen, business,
       government).
   2.2 Wave 2 sectors (indicative)
   2.3 Cross-sector themes

3. TIER 1 COMMITMENTS
   3.1 Tier 1 ministry list with sponsor names
   3.2 Stakeholder Commitment Letters (attached as Annex A)
   3.3 Designated focal points

4. TARGET BENEFITS
   4.1 Citizen benefit (e.g., reduced administrative burden, faster services)
   4.2 Business benefit (e.g., trade facilitation, regulatory simplification)
   4.3 Government benefit (e.g., reduced cost, improved data quality)
   4.4 Indicative quantification (where data permits)

5. PROGRAMME OBJECTIVES
   5.1 24-month objectives
   5.2 60-month objectives (full national coverage)
   5.3 Success metrics

6. POLITICAL SPONSORSHIP
   6.1 Supervising minister
   6.2 Operating authority
   6.3 Political champion in legislature (where required)
   6.4 Cabinet Office liaison

7. NEXT STEPS
   7.1 Council action requested
   7.2 Subsequent decisions and timeline
   7.3 Decree-drafting workstream initiation

ANNEXES
A. Stakeholder Commitment Letters (TK-36)
B. Stakeholder Engagement Plan summary (TK-IO-02)
C. Indicative Wave-1 Use-Case List
D. Indicative budget envelope (Phase 1)
```

---

# TK-IO-02: Stakeholder Engagement Plan (Interoperability Tier Mapping)

## Purpose

Adapt T59 (Stakeholder Engagement Method Guide) to the interoperability context. The interoperability programme has unusually wide cross-government engagement requirements — every ministry is a candidate user.

## Tier mapping for an interoperability programme

| Tier | Stakeholders | Engagement |
|------|--------------|------------|
| **Tier 1 — Champions** | Ministry of Finance (budget, major user); Ministry of ICT / Digital Authority (operating-authority home); Cabinet Office (political coordination); the largest SDA from Wave 1 sectors (typically Tax or Customs) | Weekly working sessions; bi-weekly Steering Committee; quarterly Cabinet briefing |
| **Tier 2 — Early Adopters** | Wave 1 sectoral ministries beyond the largest SDA (Health, Civil Registration, Business Register typically); Data Protection Authority; National Audit Office | Bi-weekly working sessions; monthly Steering Committee participation as observers; sector workshops |
| **Tier 3 — Observers** | Other ministries planned for Wave 2; civil-society organisations focused on digital rights; banking and financial-sector associations (where banking integration is in scope); international development partners (EU, IMF, World Bank, ITU) | Monthly bulletin; quarterly community-of-practice |

The full template follows T59 §5 with these tier substitutions.

---

# TK-IO-03: Use-Case Catalogue Template

## Purpose

The Use-Case Catalogue is the principal output of Method Step 2. It is the inventory of cross-government data exchanges that the framework will enable, prioritised, and documented in enough detail to drive Steps 3–6.

## Use-case entry template

For each priority use case, complete:

```
USE CASE: [name]
ID: UC-[number]
Priority: [Wave 1 / Wave 2 / Wave 3]

ACTORS
Calling member: [ministry / agency]
Providing member: [ministry / agency]
End-user (where applicable): [citizen / business / public servant]

BUSINESS NEED
[3–5 sentences describing what the use case addresses]

CURRENT STATE
[How is the data exchange handled today? Paper? Manual? Direct ad-hoc API?]

TARGET STATE
[How will the framework handle the exchange?]

DATA FIELDS
[List of data fields exchanged; classify as personal / non-personal;
identify any special-category personal data]

VOLUME
[Expected transactions per period — daily / monthly / annual]

LEGAL BASIS
[Existing legal basis for the data exchange, OR new legal authority required]

LEGAL TOUCH POINTS (TK-32 reference)
[Primary / secondary / administrative legislation needing amendment]

SEMANTIC STANDARDS
[Sectoral semantic standard that governs the data — e.g., HL7 FHIR for health,
Giga School for education facilities; cross-walks needed]

TECHNICAL READINESS OF PROVIDING MEMBER
[Is the providing member's data digitally accessible? In what format? Quality?]

EXPECTED BENEFIT
[Citizen / business / government benefit; quantification where feasible]

WAVE
[Implementation wave — Wave 1 / Wave 2 / etc.]
```

The catalogue is structured as a register; standard register fields plus the use-case entries above.

---

# TK-IO-04: Decree Drafting Kit

## Purpose

The Decree Drafting Kit is the principal output of Method Step 3. It comprises five sub-templates that together form the complete drafting package submitted to the legislative drafting office and ultimately to the Council of Ministers.

## Sub-template A1: Explanatory Memorandum

```
EXPLANATORY MEMORANDUM
[National Interoperability Decree title]

1. CONTEXT AND PURPOSE
   1.1 The country's digital-transformation context
   1.2 The state of the existing legal framework (if any prior decree, cite it)
   1.3 Why revision (or new instrument) is needed
   1.4 Specific policy aims of this decree

2. LEGAL BASIS
   2.1 Constitutional authority for the decree
   2.2 Statutory enabling provision
   2.3 Relationship to other relevant legislation:
       - Personal-data-protection law
       - Electronic-transactions law
       - Digital-signature / digital-certification law
       - Sectoral laws (where the decree affects them)
   2.4 Coherence note (no duplication; cross-reference handling)

3. KEY POLICY POSITIONS
   3.1 Strengthening of governance (operating authority's mandate)
   3.2 Establishment of enforcement mechanisms (proportionate sanctions)
   3.3 Alignment with anticipated personal-data-protection legislation
   3.4 Adoption of guiding principles
   3.5 Codification of Once-Only as a binding obligation

4. ADDITIONS AND REVISIONS
   4.1 New articles (with rationale)
   4.2 Strengthened existing articles (with rationale)
   4.3 Articles repealed (with rationale)

5. EFFECTIVE DATE AND TRANSITION
   5.1 Proposed effective date
   5.2 Transition period for existing systems
   5.3 Transition guidance to member organisations

6. EXPECTED IMPACT
   6.1 Public administration impact
   6.2 Citizen and business impact
   6.3 Cost implications

[Annexes as required]
```

## Sub-template A2: Preamble

```
PREAMBLE OF [DECREE NUMBER] OF [DATE]

Considering [the constitutional grounding];
Considering [the statutory enabling provision];
Considering [the policy basis — national strategy, prior cabinet decision];
Considering [the relationship to data protection and electronic transactions laws];
Considering the need to [the substantive policy intent];
Considering [where applicable: the international context, EU EIF or AU DTS or similar];

The Council of Ministers, at its meeting of [date], decides:

[The articles follow in Sub-template A3]
```

## Sub-template A3: Draft Articles Package

The Articles Package is the substantive body of the decree. Use the structure below:

```
[NATIONAL INTEROPERABILITY DECREE]
Draft Articles Package
A.3 | v[version] | [date]

[Document Status / Markup Key]

SECTION 1 — STRENGTHENED EXISTING ARTICLES
(For revision of an existing decree; for greenfield, omit this section.)

ARTICLE [N] (subject)
   [Existing paragraphs reproduced unchanged]
   [NEW ADDITION] [N+1]. [New paragraph text]
   [NEW ADDITION] [N+2]. [New paragraph text]
   [Source Note: cite source / context / rationale]

SECTION 2 — NEW ARTICLES

ARTICLE [N.A] (subject) [NEW ARTICLE]
   1. [Paragraph 1]
   2. [Paragraph 2]
   3. [Paragraph 3]
   [Source Note]

SECTION 3 — PRINCIPLES AND OBLIGATIONS

[Articles codifying the principles selected in Method Step 3.2]

SECTION 4 — INSTITUTIONAL ARRANGEMENTS

[Articles establishing the operating authority's mandate and the
governance structure agreed in Method Step 4]

SECTION 5 — ENFORCEMENT

[Articles establishing the progressive sanctions regime]

SECTION 6 — TRANSITION AND FINAL PROVISIONS

[Effective date, repeals, transition periods, subordinate-regulation
authority]
```

## Sub-template A4_1: Cover Note

A two-page transmittal letter to the legislative drafting office or the supervising authority. Standard structure: opening reference to the prior request or decision; summary of the package contents; key changes from any prior version; specific feedback sought; proposed timeline for the next iteration; signature.

## Sub-template A4_2: Two-Track Regulatory Memo

A memo addressing the relationship between the interoperability decree and the country's developing personal-data-protection law (where the latter is concurrent or anticipated). Structure:

```
TWO-TRACK REGULATORY MEMORANDUM

1. THE TWO INSTRUMENTS
   1.1 Interoperability decree (this proposal)
   1.2 Personal-data-protection law (in force / in development / anticipated)

2. POINTS OF INTERSECTION
   2.1 Definitions (where both instruments use the same concept)
   2.2 Data-subject rights (consent, access, rectification, erasure)
   2.3 Cross-border data transfer
   2.4 Data Protection Officer requirements
   2.5 Sanctions regime overlap

3. COORDINATION APPROACH
   3.1 Where the interoperability decree defers to the data-protection law
       (cross-references)
   3.2 Where the interoperability decree fills a gap in the data-protection
       law (and how this is forward-compatible)
   3.3 Where conflict could arise and how it is resolved
   3.4 Future-proofing for when the data-protection law is enacted (where
       the law is currently in development)

4. RECOMMENDED COORDINATION MECHANISMS
   4.1 Joint subordinate regulation by INTIC and the data-protection
       authority
   4.2 Memorandum of Understanding between the two authorities
   4.3 Joint enforcement protocols

5. RISKS
   5.1 If the data-protection law evolves materially during the
       interoperability decree's drafting cycle
   5.2 Mitigation: forward compatibility design choices
```

---

# TK-IO-05: Governance Model Document Template

## Purpose

The Governance Model Document is the principal output of Method Step 4. It documents the three-tier governance structure, the operating-authority's organisational form, the membership of each body, the decision rights, and the cadence.

## Template

```
NATIONAL INTEROPERABILITY FRAMEWORK
Governance Model Document

1. GOVERNANCE STRUCTURE OVERVIEW
   1.1 Three-tier model rationale
   1.2 Diagram of governance structure
   1.3 Relationship to existing government governance bodies

2. STRATEGIC TIER — NATIONAL INTEROPERABILITY COUNCIL
   2.1 Composition and chair
   2.2 Decision rights
   2.3 Meeting cadence
   2.4 Quorum and voting rules
   2.5 Secretariat arrangement

3. TACTICAL TIER — INTEROPERABILITY STEERING COMMITTEE
   3.1 Composition and chair
   3.2 Decision rights
   3.3 Meeting cadence
   3.4 Sub-committee structure (where applicable)
   3.5 Reporting to the Council

4. TECHNICAL TIER — TECHNICAL WORKING GROUPS (TWGs)
   4.1 List of TWGs and their scope
   4.2 Standard TWG charter
   4.3 Composition rules
   4.4 Meeting cadence
   4.5 Reporting to the Steering Committee

5. OPERATING AUTHORITY
   5.1 Organisational form (department / dedicated agency / independent body)
   5.2 Mandate and powers (cross-reference Decree articles)
   5.3 Reporting line to supervising minister
   5.4 Staffing structure
   5.5 Budget arrangements

6. MEMBER ORGANISATION GOVERNANCE
   6.1 Member obligations (cross-reference Decree)
   6.2 Technical Focal Point role
   6.3 Data Protection Officer role
   6.4 Member representation in governance bodies

7. RACI MATRIX FOR PRINCIPAL DECISIONS

8. CHANGE MANAGEMENT FOR THE GOVERNANCE MODEL ITSELF
   8.1 Process for amending the Governance Model
   8.2 Scope of changes that require Council ratification

[Annexes]
A. Council Standing Orders
B. Steering Committee Standing Orders
C. Standard TWG Charter
D. Operating Authority organisational chart
```

---

# TK-IO-06: High-Level Architecture Document Template

## Purpose

The HLA Document is the principal output of Method Step 5. It is the technology-agnostic description of the framework's structure consistent with the Reference Model.

## Template

```
NATIONAL INTEROPERABILITY FRAMEWORK
High-Level Architecture Document
Version: [version]; Date: [date]; Author: [name]; Reviewer: [name]

[Document History table]

1. OVERVIEW
   1.1 Introduction
   1.2 Architecture
   1.3 Relationship to GovStack Information Mediator BB and to PAERA
       Annex A1.1.4

2. FUNCTIONAL ARCHITECTURE
   2.1 Service Access Layer
   2.2 Event Distribution Layer (Pub/Sub)
   2.3 Trust and Security Infrastructure
   2.4 Governance and Administration

3. TECHNICAL ARCHITECTURE
   3.1 Deployment Architecture (central server, member-side security
       servers, time-stamp authority)
   3.2 Governance for Development (CI/CD; environment promotion;
       infrastructure-as-code)
   3.3 Security Layers (network / application / message / audit / identity)
   3.4 Trust Model (three security zones)

4. KEY DESIGN DECISIONS
   4.1 Technology Choices (with rationale and Architecture Decision Records)
   4.2 Scalability Considerations
   4.3 High Availability Design
   4.4 Service Integration Pattern (request/response)
   4.5 Event Distribution Pattern (publish/subscribe)

5. OPERATIONAL CONSIDERATIONS
   5.1 Monitoring and Management
   5.2 Maintenance Windows
   5.3 Support Model
   5.4 International Standards Alignment
   5.5 Regulatory Compliance

6. CONCLUSION

[Annexes — visual diagrams]
```

---

# TK-IO-07: Technical Standards Catalogue Template

## Purpose

The Technical Standards Catalogue is the principal output of Method Step 6. It is the registry of binding technical standards published by the operating authority.

## Per-standard entry template

```
STANDARD: [name]
Family: [API specification / authentication / transport / cryptography / etc.]
Version: [specific version adopted]
Reference: [URL or document reference to the canonical standard]
Status: [Active / Deprecated / Withdrawn]

SCOPE OF APPLICATION
[Which framework components and member services are required to conform]

BINDING DATE
[Date from which conformance is mandatory]

TRANSITION PERIOD
[Period during which legacy systems may continue non-conformant operation;
typically 12–24 months for major-version standards changes]

CONFORMANCE TEST APPROACH
[Self-assessment / third-party / Conformance Test Suite operated by the
operating authority]

VERSION HISTORY
[Prior versions with adoption / deprecation dates]

EXCEPTIONS
[Any standing exceptions; cross-reference TK-23 Dispensation Request]
```

---

# TK-IO-08: Member Requirements Template

## Purpose

The Member Requirements document is the operational specification of what a member organisation must do to participate in the framework. It is published by the operating authority and is binding on members under the decree.

## Template

```
MEMBER REQUIREMENTS FOR THE NATIONAL INTEROPERABILITY FRAMEWORK
Issued by: [Operating Authority]
Effective date: [date]
Version: [version]

1. ELIGIBILITY
   1.1 Member organisation criteria
   1.2 Application process

2. TECHNICAL REQUIREMENTS
   2.1 Security Server deployment specification
   2.2 PKI certificate requirements
   2.3 Network connectivity requirements
   2.4 Conformance with binding technical standards (cross-reference TK-IO-07)

3. ORGANISATIONAL REQUIREMENTS
   3.1 Technical Focal Point designation
   3.2 Data Protection Officer designation (where personal data flows)
   3.3 Senior accountability (typically Director of ICT)
   3.4 Cooperation in TWGs and Steering Committee participation

4. OPERATIONAL REQUIREMENTS
   4.1 Service-level commitments for services exposed by the member
   4.2 Incident-response cooperation
   4.3 Audit cooperation
   4.4 Logging and monitoring
   4.5 Change-management coordination

5. DATA REQUIREMENTS
   5.1 Authoritative-data designation
   5.2 Data-quality commitments
   5.3 Once-Only compliance (for member as a consumer of authoritative data)
   5.4 Personal-data handling

6. FINANCIAL REQUIREMENTS
   6.1 Cost-sharing contribution (if applicable)
   6.2 Member-side cost responsibilities (Security Server hardware, internal
       integration work, training)

7. SANCTIONS FOR NON-COMPLIANCE
   7.1 Cross-reference Decree articles on sanctions
   7.2 Operating-authority procedures for breach response

[Annexes]
A. Security Server technical specification
B. Certificate-issuance procedure
C. Conformance test plan
D. Member onboarding workflow (TK-IO-10)
```

---

# TK-IO-09: Service-Level Agreement Template

## Purpose

The SLA template is used by member organisations registering services with the framework. Each service exposed through the framework has an SLA describing the providing member's commitments.

## Template

```
SERVICE-LEVEL AGREEMENT
Service: [name]
Service ID: [framework-assigned identifier]
Providing member: [organisation]
Effective date: [date]

1. SERVICE DESCRIPTION
   1.1 Purpose
   1.2 Actors (calling members; end users)
   1.3 Use cases supported

2. SERVICE INTERFACE
   2.1 OpenAPI / AsyncAPI specification reference
   2.2 Operations exposed
   2.3 Error model

3. AVAILABILITY
   3.1 Uptime target (e.g., 99.5% during business hours; 99.0% 24/7)
   3.2 Maintenance windows (planned downtime)
   3.3 Notification policy for unplanned downtime

4. PERFORMANCE
   4.1 Response time targets (e.g., 95th percentile <500ms)
   4.2 Throughput capacity
   4.3 Rate-limiting policy

5. SUPPORT
   5.1 Support hours
   5.2 Severity classification and response targets
   5.3 Escalation contacts

6. DATA PROTECTION
   6.1 Personal-data classification (where applicable)
   6.2 Consent regime (where applicable)
   6.3 Data-subject rights handling

7. CHANGE MANAGEMENT
   7.1 Notice period for breaking changes
   7.2 Deprecation policy

8. MONITORING AND REPORTING
   8.1 Metrics reported to the operating authority
   8.2 Quarterly performance review

9. SANCTIONS FOR NON-COMPLIANCE
   9.1 Cross-reference Decree provisions
```

---

# TK-IO-10: Member Onboarding Workflow

## Purpose

The Member Onboarding Workflow is the operational procedure that the operating authority follows to onboard each new member organisation. The workflow is described in Method §10.2.

## Workflow

```
PHASE 1 — APPLICATION (week 0)
  - Member submits formal application (form per Annex A of TK-IO-08)
  - Member's senior representative signs Member Requirements acceptance
  - Operating-authority review

PHASE 2 — CERTIFICATE ISSUANCE (weeks 1–2)
  - PKI team issues member-grade certificate
  - Certificate delivered to member's Technical Focal Point
  - Certificate verification by member

PHASE 3 — SECURITY SERVER DEPLOYMENT (weeks 3–10)
  - Member procures Security Server hardware (or commissions virtual)
  - Member deploys Security Server software
  - Member configures Security Server with member-grade certificate
  - Operating-authority technical-support assists where needed

PHASE 4 — CONFORMANCE TEST (weeks 11–14)
  - Member runs Conformance Test Suite
  - Operating-authority conformance team validates results
  - Any non-conformance addressed by member; re-test until pass

PHASE 5 — FIRST SERVICE REGISTRATION (weeks 15–18)
  - Member identifies first service to register (provider) or to consume
  - Service descriptor (OpenAPI / AsyncAPI) submitted to operating authority
  - Service registered in framework catalogue
  - Test transactions in non-production environment

PHASE 6 — PRODUCTION GO-LIVE (weeks 19–20)
  - Production deployment
  - Operations handover from operating-authority support team to member
  - First production transactions monitored

ONGOING — STEADY-STATE OPERATIONS
  - Member operates Security Server
  - Member adds further services over time
  - Quarterly compliance review
```

---

# TK-IO-11: Workshop Concept Note

## Purpose

A standard concept note for any workshop the operating authority runs — Tier 1 Inception (Step 1), Stakeholder Workshops (across Steps 1–4), Technical Working Group plenary (Step 6), Standards Adoption Workshop (Step 6), Member Training (Step 8).

## Template

Adapted from TK-35 (Tier 1 Inception Workshop Concept Note). The standard structure — Background, Objectives, Expected Outcomes, Agenda, Participants, Logistics, Preparation, Follow-up — applies to all workshop types.

---

# TK-IO-12: Conformance Test Plan Template

## Purpose

The Conformance Test Plan describes the test approach for verifying member conformance with binding technical standards.

## Template

```
CONFORMANCE TEST PLAN
Standard(s) covered: [reference TK-IO-07 entries]
Version: [test plan version]
Effective date: [date]

1. SCOPE OF TESTING
   1.1 Standards covered by this test plan
   1.2 Components tested (Security Server / member services / member's
       internal applications)

2. TEST APPROACH
   2.1 Self-assessment versus third-party versus Conformance Test Suite
   2.2 Test environment
   2.3 Test data

3. TEST CASES
   For each standard covered, the test cases that verify conformance.
   Each test case: precondition; steps; expected result; pass / fail criteria.

4. RESULT REPORTING
   4.1 Test report template
   4.2 Submission to operating authority
   4.3 Operating-authority validation procedure

5. NON-CONFORMANCE HANDLING
   5.1 Remediation expectations
   5.2 Re-test cycle
   5.3 Sanctions for persistent non-conformance (cross-reference Decree)

6. RECERTIFICATION
   6.1 Triggers for recertification (e.g., new standard version; member
       infrastructure change)
   6.2 Cycle (typical: every 24 months and on standards change)
```

---

# TK-IO-13: Risk Register

## Purpose

The Risk Register is maintained throughout the programme and reviewed at each Steering Committee meeting. The register starts with the standard risks below and is extended as risks emerge.

## Standard programme risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Decree adoption delayed in legislative cycle | Medium | High | Early engagement with Cabinet Office; pre-drafted explanatory memorandum addresses Council concerns; political-sponsor escalation |
| Tier 1 ministry de-prioritises engagement | Medium | High | Quick wins early; visible programme value; sponsor escalation; signed Stakeholder Commitment Letters with 30-day notice clause |
| Member capacity shortfall (technical focal points) | High | Medium | Operating-authority technical-support capacity; capacity-building partnership with academic institutions; training programme |
| PKI compromise or operational error | Low | High | HSM protection; key rotation discipline; tested incident response; insurance |
| Operating-authority budget cut | Medium | High | Multi-year budget commitment from Council; sustainability commitment in donor-funded portions |
| Cross-government dependency missed (e.g., national ID system not at expected maturity) | Medium | Medium | DPI assessment (09-DPI module) before programme; contingency for foundational gaps |
| Vendor lock-in on the Security Server platform | Low (X-Road is open-source) | Medium | Default to X-Road or open-source alternative; multi-vendor strategy for hardware |
| Personal-data-protection law evolution during decree drafting | Medium | Medium | Two-Track Regulatory Memo (TK-IO-04 sub-template A4_2); forward compatibility |
| Cross-border integration deadline (e-CODEX in EU contexts) | Medium (EU) | High (where applicable) | Track 2 in dual-track roadmap; early integration with eulisa |
| Banking integration sensitivity | Medium | Medium | Banking association as Tier 2 stakeholder; phased approach with regulator co-design |

---

# TK-IO-14: Success Metrics

## Purpose

Standard success metrics for the programme, reviewed quarterly by the Steering Committee and annually by the Council.

## Metrics

| Metric | Target by end of Phase 4 (24 months) | Target by year 5 |
|--------|--------------------------------------|------------------|
| Members onboarded | 15+ | 60+ (national coverage of Wave 1+2 sectors) |
| Services registered | 20+ | 200+ |
| Transactions per quarter | 100 K+ | 10 M+ |
| Authentication-only services to data-exchange services ratio | 30:70 | 10:90 |
| Average member onboarding cycle | 12 weeks | 6 weeks |
| Operating authority uptime (central infrastructure) | 99.5% | 99.9% |
| Average transaction latency (95th percentile) | <500 ms | <200 ms |
| Audit findings remediated | 100% within 90 days | 100% within 60 days |
| Standards portfolio currency | 100% standards within 24 months of issue | All standards within latest minor version |
| Cross-border integration | EU members: e-CODEX live for the priority procedures by Year 4 | All Digitalisation Regulation procedures within deadline |
| Council-reported breaches | <5 per year | <2 per year |
| Member satisfaction (annual survey) | >70% | >85% |

---

# Cross-References

| Topic | Reference |
|-------|-----------|
| Reference Model | GEATDM-Interop-Reference-Model |
| Method | GEATDM-Interop-Method |
| Public-sector reality | T15 |
| Architectural traps | T16 |
| Stakeholder engagement (workshop concept note baseline) | T59 + TK-35, TK-36 |
| Sourcing strategy | T60 |
| AI plays for GIF | GEATDM-WP7-AI-Plays-Catalogue §4 |

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

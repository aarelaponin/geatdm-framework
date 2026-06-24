# GEATDM Method Repository

**Generic EA Target Architecture Development Method**

*A Framework for Public Sector Digital Transformation*

---

## Quick Start

| If you want to... | Start here |
|-------------------|------------|
| **Understand and use GEATDM** | `00-START-HERE/GEATDM-UsersGuide-v1.0.md` |
| **Find all the templates** | `01-Toolkit/GEATDM-WP6-T61-Toolkit-v1.0.md` |
| **Read the full reference** | `00-START-HERE/GEATDM-WP6-T62-MainDocument-v1.0.md` |

---

## Repository Structure

```
GEATDM-Method-Repository/
│
├── 00-START-HERE/                          ← Read these first
│   ├── GEATDM-UsersGuide-v1.0.md          (Practical how-to guide)
│   └── GEATDM-WP6-T62-MainDocument-v1.0.md (Complete reference)
│
├── 01-Toolkit/                             ← All 31 templates + v1.1 supplements
│   ├── GEATDM-WP6-T61-Toolkit-v1.0.md
│   ├── GEATDM-Toolkit-Supplement-StakeholderEngagement-v1.0.md   (v1.1, TK-33 to TK-36)
│   └── GEATDM-Toolkit-Supplement-SourcingStrategy-v1.0.md        (v1.1, TK-32, TK-37 to TK-39)
│
├── 02-Reference-Architectures/             ← The 3 RAs
│   ├── GEATDM-WP2-T25-PDU-RA-Complete-v1.0.md
│   ├── GEATDM-WP3-T35-RA-RA-Complete-v1.0.md
│   └── GEATDM-WP4-T47-SDA-RA-Complete-v1.0.md
│
├── 03-Method-Guide/                        ← Detailed method
│   ├── GEATDM-WP5-T58-MethodGuide-Complete-v1.0.md
│   ├── GEATDM-WP5-T59-StakeholderEngagement-v1.0.md   (v1.1)
│   └── GEATDM-WP5-T60-SourcingStrategy-v1.0.md        (v1.1)
│
├── 04-EA-Framework/                        ← EA framework components
│   ├── GEATDM-WP1-T11-Metamodel-v1.0.md
│   ├── GEATDM-WP1-T12-EAPrinciples-v1.0.md
│   ├── GEATDM-WP1-T13-Governance-v1.0.md
│   ├── GEATDM-WP1-T14-EAServices-v1.0.md
│   ├── GEATDM-WP1-T15-PublicSectorReality-v1.0.md     (v1.1)
│   └── GEATDM-WP1-T16-ArchitecturalTraps-v1.0.md      (v1.1)
│
├── 05-Quick-Reference/                     ← Standalone tools
│   ├── GEATDM-WP0-T03-Definitions-v1.0.md
│   ├── GEATDM-WP5-T51-ClassificationGuide-v1.0.md
│   └── GEATDM-WP5-T52-DPIChecklist-v1.0.md
│
├── 06-Sector-Guides/                       ← Sector guides
│   ├── GEATDM-Sector-Customs-v1.0.md
│   ├── GEATDM-Sector-Health-v1.0.md       (v1.1)
│   ├── GEATDM-Sector-Education-v1.0.md    (v1.1)
│   ├── GEATDM-Sector-Tax-v1.0.md          (v1.1)
│   └── GEATDM-Sector-Justice-v1.0.md      (v1.1)
│
├── 07-AI-Plays/                            ← AI plays catalogue (v1.1)
│   └── GEATDM-WP7-AI-Plays-Catalogue-v1.0.md
│
├── 08-Interoperability/                    ← Interoperability module (v1.3)
│   ├── GEATDM-Interop-Reference-Architecture-v1.0.docx   (RA — the layered rulebook; supersedes the earlier Reference Model)
│   ├── GEATDM-Interop-Method-v1.0.md
│   ├── GEATDM-Interop-Toolkit-v1.0.md
│   ├── GEATDM-Interop-RA-to-RFP-Guide-v1.0.md            (why & how to use the RA + plugin)
│   └── RA-to-RFP-Plugin/                                 (interop-ra-to-rfp plugin: 10 skills + .plugin)
│
├── 09-DPI/                                 ← Digital Public Infrastructure module (v1.2)
│   ├── GEATDM-DPI-Reference-Model-v1.0.md
│   ├── GEATDM-DPI-Method-v1.0.md
│   └── GEATDM-DPI-Toolkit-v1.0.md
│
└── README.md                               ← This file
```

---

## What is GEATDM?

The **Generic EA Target Architecture Development Method (GEATDM)** is a practical framework that helps public sector organizations plan and execute digital transformation using pre-built Reference Architectures.

### Key Concepts

**Three Organization Types:**
| Type | Description | Examples |
|------|-------------|----------|
| **PDU** | Policy Development Unit | Ministries, chancelleries |
| **RA** | Regulatory Agency | Data protection, business registry |
| **SDA** | Service Delivery Authority | Tax, customs, social security |

**Key Principle:** SDA ⊃ RA ⊃ PDU (inheritance)

**Five Phases:**
```
DISCOVER → ASSESS → ADAPT → PLAN → EXECUTE
 (2-4 wk)  (4-8 wk) (4-6 wk) (4-6 wk) (ongoing)
```

**DPI Integration:** Organizations integrate with national Digital Public Infrastructure (Identity BB, Payments BB, Information Mediator BB, etc.) — they don't build it.

---

## Document Summary

### Tier 1: Core Documents (Essential)

| Document | Purpose | Pages |
|----------|---------|-------|
| **User's Guide** | Practical how-to for practitioners | ~20 |
| **Main Document** | Complete reference | ~100 |
| **Toolkit** | All 31 templates and tools | ~50 |

### Tier 2: Reference Architectures (Implementation)

| Document | For | Contains |
|----------|-----|----------|
| **PDU RA** | Ministries, policy units | 72 capabilities, 20 applications |
| **RA RA** | Regulatory agencies | PDU + 49 regulatory capabilities |
| **SDA RA** | Tax, customs, etc. | RA + 96 service delivery capabilities |

### Tier 3: EA Framework (Deep-Dive)

| Document | Purpose |
|----------|---------|
| **Metamodel** | Architecture objects & relationships |
| **Principles** | 33 guiding principles |
| **Governance** | Decision-making & compliance |
| **Services** | EA service catalog |

### Tier 4: Quick Reference

| Document | Purpose |
|----------|---------|
| **Definitions** | Key terms and glossary |
| **Classification Guide** | Detailed org classification |
| **DPI Checklist** | National DPI assessment |

### Tier 5: Sector Guides

| Document | Sector |
|----------|--------|
| **GEATDM-Sector-Customs-v1.0** | Customs (SDA) |
| **GEATDM-Sector-Health-v1.0** | Health — Ministry of Health (PDU), Medicines Authority (RA), Hospital Network (SDA), Public Health Institute (SDA) |
| **GEATDM-Sector-Education-v1.0** | Education — Ministry of Education (PDU), Examinations Authority (RA), School Network (SDA), Higher Education (SDA), with worked example for the Progressa demonstration country |
| **GEATDM-Sector-Tax-v1.0** | Tax Administration (SDA) — five-domain decomposition (Tax Services Platform, Data Platform, Risk Management, Case Management, External Integration), 12-area capability map, OECD Tax Administration 3.0 maturity, Strangler Fig + EU Accession dual-track roadmap |
| **GEATDM-Sector-Justice-v1.0** | Justice — judiciary as a constitutionally separate branch (parallel to PDU/RA/SDA), Ministry of Justice (PDU), Prosecution / Bar / Notaries / Bailiffs (RAs), Prison / Probation / Legal Aid (SDAs); fragmented semantic stack (NIEM, OASIS LegalXML ECF, Akoma Ntoso, ECLI, ELI, e-CODEX, eIDAS) |

### Tier 6: AI Plays Catalogue (v1.1)

| Document | Purpose |
|----------|---------|
| **GEATDM-WP7-AI-Plays-Catalogue-v1.0** | Catalogue of AI plays supporting the GEATDM method — 16 plays to commission (3 cross-cutting on legal / budget / procurement; 5 KP1 GEA; 3 KP2 GIF; 4 KP3 DPI; 1 KP4 BBs) plus 7 existing Joget skills, each with prompt template, sample I/O, and reproduction notes |

### Tier 7: Cross-cutting Domain Modules (v1.2)

| Module | Documents | Purpose |
|--------|-----------|---------|
| **08-Interoperability** | **Reference Architecture (RA)** + Method (8 steps) + Toolkit (14 templates incl. Decree Drafting Kit) + **RA-to-RFP plugin (10 skills)** | National Government Interoperability Framework — the substrate every sectoral architecture consumes for cross-government data exchange. The RA gives the concrete target design (superseding the earlier Reference Model) and the RA-to-RFP plugin turns it into an issuable, funder-compliant tender (architecture → RFP). See `GEATDM-Interop-RA-to-RFP-Guide-v1.0.md`. PAERA §3.4.3 + §3.2 + §5.2 #2/#5/#9 |
| **09-DPI** | Reference Model (5-pillar) + Method (7 steps) + Toolkit (14 templates incl. 5-pillar questionnaires) | National Digital Public Infrastructure roadmap development — the foundational pillars (Access, Data, Interoperability, Identity, Governance) on which sectoral services are built. PAERA §3.4 + §5.3 + §5.7 |

---

## How to Use This Repository

### For Enterprise Architects

1. Start with **User's Guide** to understand the method
2. Use **Classification Guide** to determine organization type
3. Select appropriate **Reference Architecture**
4. Use **Toolkit** for templates during each phase

### For CIOs/Digital Transformation Leads

1. Read **User's Guide** Sections 1-2 for strategic overview
2. Review **Main Document** Executive Summary
3. Use **Business Case Template** from Toolkit for investment approval

### For Consultants

1. Master the full **Main Document**
2. Know all three **Reference Architectures**
3. Be fluent with **Toolkit** templates
4. Use **Method Guide** for detailed phase guidance

---

## Typical Timelines

| Organization Type | Through PLAN | Full Implementation |
|-------------------|--------------|---------------------|
| **PDU** | 3-6 months | 12-18 months |
| **RA** | 4-8 months | 18-24 months |
| **SDA** | 6-12 months | 24-36 months |

---

## Related Resources

- **PAERA Framework:** https://paera.govstack.global/
- **GovStack Building Blocks:** https://www.govstack.global/

---

## Version

| Attribute | Value |
|-----------|-------|
| Version | 1.0 |
| Date | January 2026 |
| Status | Complete |
| License | Creative Commons Attribution 4.0 |

---

*GEATDM — Making Digital Transformation Practical*

# GEATDM APPLICATION METHOD GUIDE

═══════════════════════════════════════════════════════════════════════════════

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║                     GEATDM APPLICATION METHOD GUIDE                           ║
║                                                                               ║
║             Generic Enterprise Architecture Target Architecture               ║
║                         Development Method                                    ║
║                                                                               ║
║                 For Public Sector Digital Transformation                      ║
║                                                                               ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║  Version:     1.0                                                             ║
║  Date:        2026-01-21                                                      ║
║  Status:      Complete (Merged)                                               ║
║  Document ID: GEATDM-WP5-T58                                                  ║
║                                                                               ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║  Based on:    GovStack Building Blocks Framework                              ║
║               Public Administration Ecosystem Reference Architecture (PAERA)  ║
║                                                                               ║
║  Website:     https://paera.govstack.global/                                  ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

═══════════════════════════════════════════════════════════════════════════════

---

# DOCUMENT CONTROL

## Version History

| Version | Date | Author | Changes | Reviewer |
|---------|------|--------|---------|----------|
| 1.0 | 2026-01-21 | GEATDM Team | Complete guide merged from WP5 component documents | - |

## Document Assembly

This complete guide is merged from the following component documents:

| Component | Document ID | Sections | Size |
|-----------|-------------|----------|------|
| Method Framework | GEATDM-WP5-T581 | 1-7 (Introduction & Framework) | ~71 KB |
| Entry Point Tools | GEATDM-WP5-T582a | 8-9 (Classification & DPI Readiness) | ~145 KB |
| DISCOVER & ASSESS | GEATDM-WP5-T582b | 10-11 (Understanding & Assessment) | ~198 KB |
| ADAPT & PLAN | GEATDM-WP5-T582c | 12-13 (Design & Planning) | ~216 KB |
| EXECUTE & GOVERN | GEATDM-WP5-T582d | 14 (Operations & Governance) | ~208 KB |
| Master Guide | GEATDM-WP5-T582e | Navigation & Cross-References | ~42 KB |
| Templates & Tools | GEATDM-WP5-T583 | Appendices A-E | ~114 KB |

## Approval Record

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Lead Author | __________ | __________ | __________ |
| Technical Reviewer | __________ | __________ | __________ |
| Quality Assurance | __________ | __________ | __________ |
| Approver | __________ | __________ | __________ |

## Distribution List

This document is intended for:
- Enterprise Architecture practitioners
- Digital transformation program teams
- Government CIOs and CTOs
- IT architects and solution designers
- Project managers
- GovStack implementation partners

---

# MASTER TABLE OF CONTENTS

## FRONT MATTER
- Document Control
- How to Use This Guide

## PART I: FRAMEWORK & INTRODUCTION (Sections 1-7)
- Section 1: Executive Summary
- Section 2: Introduction
- Section 3: Method Overview
- Section 4: Method Positioning
- Section 5: Method Inputs and Outputs
- Section 6: Success Factors
- Section 7: Document Structure

## PART II: ENTRY POINT TOOLS (Sections 8-9)
- Section 8: Organization Classification Guide
- Section 9: DPI Readiness Checklist

## PART III: DISCOVER & ASSESS (Sections 10-11)
- Section 10: DISCOVER Phase Guide
- Section 11: ASSESS Phase Guide

## PART IV: ADAPT & PLAN (Sections 12-13)
- Section 12: ADAPT Phase Guide
- Section 13: PLAN Phase Guide

## PART V: EXECUTE & GOVERN (Section 14)
- Section 14: EXECUTE & GOVERN Phase Guide

## PART VI: MASTER GUIDE & NAVIGATION
- Reading Path Recommendations
- Cross-Reference Guide
- Template Index

## PART VII: APPENDICES
- Appendix A: Template Catalog
- Appendix B: Checklists
- Appendix C: Tools Reference
- Appendix D: Quick Reference Cards
- Appendix E: Glossary & Cross-References

---


═══════════════════════════════════════════════════════════════════════════════
# PART I: FRAMEWORK & INTRODUCTION (Sections 1-7)
═══════════════════════════════════════════════════════════════════════════════


## 1. EXECUTIVE SUMMARY

### The Challenge

Public sector organizations worldwide face a common challenge: how to design and implement digital transformation effectively. Despite the existence of mature EA frameworks like TOGAF, many government agencies struggle with:

- **Starting Point Uncertainty**: Where to begin when resources are limited and needs are vast
- **Reference Gap**: Lack of public sector-specific architectural templates and patterns
- **DPI Integration**: Uncertainty about how to leverage national Digital Public Infrastructure
- **Scalability Concerns**: Methods designed for large enterprises that don't fit smaller agencies
- **Building Block Adoption**: How to effectively utilize standardized components like GovStack

### The Solution: GEATDM

The **Generic EA Target Architecture Development Method (GEATDM)** addresses these challenges through a practical, **Reference Architecture-centric approach** designed specifically for public sector organizations.

**Key Innovation:** Instead of starting from scratch, organizations select a pre-built Reference Architecture matching their type (Policy Unit, Regulatory Agency, or Service Delivery Authority), then systematically adapt it to their context.

### Value Proposition

| Benefit | Description |
|---------|-------------|
| **Accelerated Start** | Begin with 80% of architecture pre-defined in Reference Architectures |
| **Right-Sized Approach** | Three organization types ensure appropriate complexity |
| **DPI Integration** | Built-in guidance for national infrastructure integration |
| **Building Block Alignment** | Direct mapping to GovStack specifications |
| **Practical Focus** | Every component answers "how do I actually do this?" |
| **Proven Patterns** | Based on successful implementations across multiple countries |

### Target Outcomes

Organizations applying GEATDM can expect:

- **Reduced architecture development time** by 40-60% through RA reuse
- **Improved DPI integration** through standardized connection patterns
- **Better stakeholder alignment** through structured decision points
- **Sustainable architecture** that can evolve with national digital infrastructure

### Quick Start Guide

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         GEATDM QUICK START                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  1. CLASSIFY your organization (PDU / RA / SDA)     → Use Classification    │
│     What type of org are we?                           Guide (Section 8)     │
│                                                                              │
│  2. CHECK national DPI readiness                    → Use DPI Checklist     │
│     Is infrastructure ready?                           (Section 9)           │
│                                                                              │
│  3. SELECT the appropriate Reference Architecture   → DISCOVER Phase         │
│     Which RA fits us?                                  (Section 10)          │
│                                                                              │
│  4. DOCUMENT current state against RA structure     → ASSESS Phase          │
│     Where are we now?                                  (Section 11)          │
│                                                                              │
│  5. TAILOR the RA to your context                   → ADAPT Phase           │
│     What's our specific target?                        (Section 12)          │
│                                                                              │
│  6. CREATE implementation roadmap                   → PLAN Phase            │
│     How do we get there?                               (Section 13)          │
│                                                                              │
│  7. IMPLEMENT and maintain                          → EXECUTE & GOVERN      │
│     Make it happen and keep it aligned                 (Section 14)          │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. INTRODUCTION

### 2.1 Purpose of This Guide

This guide provides a complete, practical method for public sector organizations to develop their target enterprise architecture using pre-built Reference Architectures aligned with the GovStack approach and Digital Public Infrastructure (DPI) principles.

**What this guide helps achieve:**

| Goal | How GEATDM Addresses It |
|------|------------------------|
| **Define target architecture** | Provides Reference Architectures as starting templates |
| **Understand current state** | Structures AS-IS documentation using RA format |
| **Identify transformation gaps** | Systematic comparison methodology |
| **Create actionable roadmap** | Phased implementation planning framework |
| **Integrate with national DPI** | Built-in DPI readiness assessment and integration patterns |
| **Maintain architecture** | Governance framework for ongoing alignment |

**Why a specialized public sector method is needed:**

1. **Unique Organizational Types**: Public sector organizations follow distinct patterns (policy, regulatory, service delivery) that differ from private sector archetypes

2. **DPI as Given**: Unlike private sector, government agencies must integrate with national infrastructure—identity, payments, data exchange—rather than building their own

3. **Interoperability Imperative**: Public agencies must work together; architecture decisions have ecosystem-wide implications

4. **Building Block Economy**: GovStack's reusable components enable rapid, standardized implementation when properly integrated

5. **Resource Constraints**: Many agencies lack dedicated EA teams; the method must be accessible to practitioners with limited EA experience

### 2.2 Target Audience

This guide serves multiple stakeholder groups with different needs and entry points:

#### Primary Audiences

| Audience | Use of This Guide | Recommended Reading Path |
|----------|-------------------|-------------------------|
| **EA Practitioners** | End-to-end method application | Full guide, sequential reading |
| **Digital Transformation Leaders** | Strategic direction and oversight | Executive Summary → Overview → Success Factors |
| **IT Architects** | Technical architecture design | Method Overview → Reference Architectures → Technology sections |
| **Government CIOs/CTOs** | Program governance and decision-making | Executive Summary → Decision Points → Governance |

#### Secondary Audiences

| Audience | Use of This Guide |
|----------|-------------------|
| **Project Managers** | Understanding architecture deliverables and dependencies |
| **Business Analysts** | Business architecture and capability mapping |
| **Procurement Officers** | Building block specifications and vendor requirements |
| **Donors/Advisors** | Assessment of digital transformation programs |

#### Prerequisites

**Essential knowledge:**
- Basic understanding of enterprise architecture concepts
- Familiarity with the organization's mandate and operations
- Awareness of national digital government initiatives

**Helpful but not required:**
- TOGAF or other EA framework experience
- GovStack Building Block specifications
- IT strategy and governance experience

### 2.3 How to Use This Guide

#### Reading Approaches

**Sequential Reading (Recommended for First Use)**

For organizations new to GEATDM, read sections in order:
1. Executive Summary (context and value)
2. Method Overview (understand the approach)
3. Method Positioning (understand relationships)
4. Phase Guides in sequence (DISCOVER → ASSESS → ADAPT → PLAN → EXECUTE)

**Reference Use (For Experienced Practitioners)**

For those familiar with the method:
- Jump directly to the relevant phase guide
- Use templates and checklists as working documents
- Reference positioning section when explaining to stakeholders

**Quick Start for Different Scenarios**

| Scenario | Start Here |
|----------|------------|
| "We need to understand what type of organization we are" | Classification Guide (Section 8) |
| "We want to check if national DPI is ready" | DPI Checklist (Section 9) |
| "We know our type, need to document current state" | ASSESS Phase Guide (Section 11) |
| "We have an architecture, need implementation plan" | PLAN Phase Guide (Section 13) |
| "We're implementing, need governance guidance" | EXECUTE & GOVERN Guide (Section 14) |

#### Guide Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        GUIDE STRUCTURE                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  PART 1: FRAMEWORK & INTRODUCTION (This Document)                           │
│  ├── Executive Summary                                                      │
│  ├── Purpose and Audience                                                   │
│  ├── Method Overview                                                        │
│  ├── Method Positioning                                                     │
│  └── Success Factors                                                        │
│                                                                              │
│  PART 2: PHASE GUIDES                                                       │
│  ├── Classification Guide (Entry Point Tool)                                │
│  ├── DPI Readiness Checklist (Entry Point Tool)                             │
│  ├── DISCOVER Phase Guide                                                   │
│  ├── ASSESS Phase Guide                                                     │
│  ├── ADAPT Phase Guide                                                      │
│  ├── PLAN Phase Guide                                                       │
│  └── EXECUTE & GOVERN Phase Guide                                           │
│                                                                              │
│  PART 3: REFERENCE ARCHITECTURES (Separate Documents)                       │
│  ├── PDU Reference Architecture                                             │
│  ├── RA Reference Architecture                                              │
│  └── SDA Reference Architecture                                             │
│                                                                              │
│  PART 4: SUPPORTING MATERIALS                                               │
│  ├── Templates and Checklists                                               │
│  ├── EA Principles                                                          │
│  ├── EA Governance Framework                                                │
│  └── Glossary and Definitions                                               │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. METHOD OVERVIEW

### 3.1 GEATDM Method at a Glance

The GEATDM method guides organizations from initial classification through ongoing architecture governance in five phases, supported by two entry-point tools.

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                            GEATDM APPLICATION METHOD                                     │
│                         Reference Architecture-Centric Approach                          │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                          │
│  ENTRY POINT TOOLS                                                                       │
│  ┌──────────────────────────────┐    ┌──────────────────────────────┐                   │
│  │    CLASSIFICATION GUIDE      │    │     DPI READINESS            │                   │
│  │    (Organization Typing)     │    │     CHECKLIST                │                   │
│  │                              │    │                              │                   │
│  │  → PDU (Policy Unit)         │    │  → Identity Pillar           │                   │
│  │  → RA (Regulatory Agency)    │    │  → Interoperability Pillar   │                   │
│  │  → SDA (Service Authority)   │    │  → Data Infrastructure       │                   │
│  │                              │    │  → Digital Access            │                   │
│  │                              │    │  → Governance                │                   │
│  └──────────────┬───────────────┘    └──────────────┬───────────────┘                   │
│                 │                                    │                                   │
│                 └────────────────┬───────────────────┘                                   │
│                                  │                                                       │
│                                  ▼                                                       │
│  ═══════════════════════════════════════════════════════════════════════════════════    │
│                                                                                          │
│  PHASE 1         PHASE 2         PHASE 3         PHASE 4         PHASE 5                │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────────┐           │
│  │DISCOVER │───►│ ASSESS  │───►│  ADAPT  │───►│  PLAN   │───►│ EXECUTE &   │           │
│  │         │    │         │    │         │    │         │    │   GOVERN    │           │
│  └─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────────┘           │
│                                                                                          │
│  Classify       Document        Tailor RA       Develop         Implement               │
│  organization   AS-IS state     to context      roadmap         & maintain              │
│                                                                                          │
│  Select RA      Compare to RA   Create TO-BE    Define          Govern                  │
│                                 architecture    phases          compliance              │
│                                                                                          │
│  Check DPI      Identify        Document        Build           Continuous              │
│  readiness      gaps            transitions     business case   improvement             │
│                                                                                          │
│  ═══════════════════════════════════════════════════════════════════════════════════    │
│                                                                                          │
│  DURATION       1-2 weeks       4-8 weeks       4-8 weeks       2-4 weeks    Ongoing   │
│                                                                                          │
│  KEY OUTPUT     Organization    Gap Analysis    TO-BE           Implementation Governed │
│                 Classification  Report          Architecture    Roadmap       EA        │
│                 + RA Selection                  Document                                │
│                                                                                          │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 The Five Phases

#### PHASE 1: DISCOVER

**Purpose:** Understand organization type and establish foundations for architecture development

**Duration:** 1-2 weeks

**Key Activities:**
- Classify the organization using decision tree and questionnaire
- Assess national DPI readiness across five pillars
- Select appropriate Reference Architecture (PDU, RA, or SDA)
- Document DISCOVER findings and obtain stakeholder sign-off

**Key Outputs:**
- Organization Classification Record
- DPI Readiness Assessment
- Selected Reference Architecture
- DISCOVER Summary with approval

**Critical Success Factors:**
- Accurate classification (impacts everything downstream)
- Honest DPI assessment (identifies constraints early)
- Stakeholder alignment on organization type

---

#### PHASE 2: ASSESS

**Purpose:** Document current state architecture and identify gaps against the Reference Architecture

**Duration:** 4-8 weeks (depending on organization complexity)

**Key Activities:**
- Document AS-IS architecture using RA structure as template
- Document Business Architecture (capabilities, processes, services)
- Document Application Architecture (systems, integrations)
- Document Data Architecture (entities, flows, quality)
- Document Technology Architecture (infrastructure, platforms)
- Compare AS-IS to Reference Architecture
- Identify, categorize, and prioritize gaps

**Key Outputs:**
- AS-IS Architecture Document (BDAT domains)
- Gap Analysis Report
- Prioritized Gap Register (Must/Should/Could)
- ASSESS Summary with approval

**Critical Success Factors:**
- Comprehensive AS-IS documentation
- Systematic gap identification
- Realistic gap prioritization

---

#### PHASE 3: ADAPT

**Purpose:** Tailor the Reference Architecture to organization context and create the TO-BE (target) architecture

**Duration:** 4-8 weeks

**Key Activities:**
- Review and validate gap priorities
- Determine adaptation scope (minimal/moderate/extensive)
- Tailor capabilities to organization needs
- Tailor applications (build/buy/reuse decisions)
- Tailor data architecture
- Select technology platform tier
- Create TO-BE Architecture Document
- Define transition requirements (AS-IS → TO-BE)

**Key Outputs:**
- TO-BE Architecture Document
- Tailoring Decision Log
- Transition Requirements
- ADAPT Summary with approval

**Critical Success Factors:**
- Justified tailoring decisions (documented rationale)
- RA core integrity preserved
- Practical, achievable target state

---

#### PHASE 4: PLAN

**Purpose:** Develop actionable implementation roadmap with business case justification

**Duration:** 2-4 weeks

**Key Activities:**
- Define implementation approach (big bang/phased/incremental)
- Sequence initiatives based on dependencies and value
- Define phases with clear milestones and exit criteria
- Estimate resources and timeline
- Develop business case with costs, benefits, ROI
- Identify risks and dependencies
- Create visual roadmap
- Obtain approval and funding authorization

**Key Outputs:**
- Implementation Roadmap
- Business Case
- Phase Definitions
- Resource Plan
- Risk Register
- Governance Framework

**Critical Success Factors:**
- Realistic timeline and estimates
- Quick wins early (demonstrate value)
- Clear decision gates between phases

---

#### PHASE 5: EXECUTE & GOVERN

**Purpose:** Implement the architecture and maintain alignment through ongoing governance

**Duration:** Ongoing (multi-year continuous operation)

**Key Activities:**
- Support project execution with architectural guidance
- Conduct solution design reviews
- Ensure DPI integration compliance
- Monitor architecture compliance
- Manage exceptions and dispensations
- Operate Architecture Board
- Capture lessons learned
- Update Reference Architecture based on experience
- Track EA effectiveness KPIs

**Key Outputs:**
- Implemented Architecture
- Architecture Compliance Reports
- Dispensation Decisions
- Updated Reference Architecture
- Lessons Learned Documentation
- EA Effectiveness Metrics

**Critical Success Factors:**
- Consistent governance application
- Balance between compliance and agility
- Continuous improvement culture

---

### 3.3 Key Concepts

#### Reference Architecture (RA) Approach

GEATDM is **Reference Architecture-centric**. This means:

1. **Pre-Built Templates**: Three Reference Architectures (PDU, RA, SDA) provide 80% of target architecture content
2. **Inherit, Don't Reinvent**: Organizations adapt existing patterns rather than designing from scratch
3. **Progressive Inheritance**: Each RA builds on the previous (SDA includes RA includes PDU)
4. **Tailoring, Not Creation**: The method guides customization of proven templates

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                   REFERENCE ARCHITECTURE INHERITANCE                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │  PDU Reference Architecture                                         │    │
│  │  ├── Document Management                                            │    │
│  │  ├── Content Management                                             │    │
│  │  ├── Collaboration Tools                                            │    │
│  │  ├── Basic Analytics                                                │    │
│  │  └── Stakeholder Communication                                      │    │
│  └───────────────────────────────────┬─────────────────────────────────┘    │
│                                      │ INHERITS ALL                         │
│                                      ▼                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │  RA Reference Architecture                                          │    │
│  │  ├── All PDU capabilities PLUS:                                     │    │
│  │  ├── Licensing & Permit Management                                  │    │
│  │  ├── Compliance Monitoring                                          │    │
│  │  ├── Inspection Management                                          │    │
│  │  ├── Case Management (Basic)                                        │    │
│  │  └── Digital Service Delivery (Basic)                               │    │
│  └───────────────────────────────────┬─────────────────────────────────┘    │
│                                      │ INHERITS ALL                         │
│                                      ▼                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │  SDA Reference Architecture                                         │    │
│  │  ├── All RA capabilities PLUS:                                      │    │
│  │  ├── Mass Customer Registration                                     │    │
│  │  ├── Customer Accounting                                            │    │
│  │  ├── Risk-Based Compliance & Enforcement                            │    │
│  │  ├── Advanced Analytics & BI                                        │    │
│  │  ├── Multi-Channel Service Delivery                                 │    │
│  │  ├── Debt Management                                                │    │
│  │  └── International Data Exchange                                    │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### DPI Integration Model

A fundamental principle of GEATDM: **Organizations integrate WITH DPI; they do not BUILD DPI components.**

Digital Public Infrastructure is national-level shared infrastructure. Organizations are consumers, not providers.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        DPI INTEGRATION MODEL                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  NATIONAL DPI LAYER (Shared Infrastructure)                                  │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Identity │ Payments │ Data Exchange │ Registries │ Security        │   │
│  │  Services │ Platform │ Platform      │ (Base)     │ Services        │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│         │          │           │              │            │                │
│         │          │           │              │            │                │
│         ▼          ▼           ▼              ▼            ▼                │
│  ════════════════════════════════════════════════════════════════════════   │
│                         INTEGRATION INTERFACES                              │
│  ════════════════════════════════════════════════════════════════════════   │
│         │          │           │              │            │                │
│         ▼          ▼           ▼              ▼            ▼                │
│  ORGANIZATION LAYER (Uses DPI Services)                                     │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                    Organization's Applications                       │   │
│  │   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐   │   │
│  │   │ Service │  │ Case    │  │ License │  │ Risk    │  │ Report  │   │   │
│  │   │ Portal  │  │ Mgmt    │  │ Mgmt    │  │ Engine  │  │ System  │   │   │
│  │   └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘   │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  Organization's role: CONSUME and INTEGRATE                                 │
│  NOT: Build identity systems, payment platforms, or data exchange networks  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Capability-Driven Architecture

GEATDM uses **capabilities** as the organizing principle linking business needs to technical solutions:

```
Business Need  →  Capability  →  Application Components  →  Technology Platform
                     ↑
                     │
              What the organization
              must be able to DO
```

Capabilities are:
- **Stable**: Business needs change slower than technology
- **Measurable**: Can assess maturity levels
- **Reusable**: Apply across organization types
- **Mappable**: Link to Building Blocks

#### GovStack Building Blocks

Building Blocks are standardized, reusable software components. GEATDM aligns capabilities to specific BBs:

| BB Category | Examples | Organization Use |
|-------------|----------|------------------|
| **Infrastructure BBs** (DPI) | Identity BB, Payments BB, Information Mediator | Integrate with national platform |
| **Functional BBs** | Workflow BB, Registration BB, Scheduler BB | Configure for organization needs |
| **Back Office BBs** | HR, Finance, Document Management | Standard support functions |
| **Front Office BBs** | Portal, Mobile Services, Customer Management | Citizen/business interaction |

---

## 4. METHOD POSITIONING

### 4.1 Relationship to TOGAF ADM

GEATDM is designed to **complement TOGAF**, not replace it. Organizations familiar with TOGAF will find GEATDM phases align with ADM while adding public sector specificity.

#### Phase Mapping

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    GEATDM ↔ TOGAF ADM ALIGNMENT                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  TOGAF ADM                          GEATDM                                   │
│  ─────────────────────────────────  ──────────────────────────────────────  │
│                                                                              │
│  Preliminary                    ←→  (Pre-requisite: EA Framework Setup)     │
│  Architecture Vision           ←→  DISCOVER Phase                           │
│                                                                              │
│  Phase B: Business Architecture ─┐                                          │
│  Phase C: IS Architecture ───────┼→ ASSESS Phase (AS-IS) +                  │
│  Phase D: Technology Arch ───────┘  ADAPT Phase (TO-BE)                     │
│                                                                              │
│  Phase E: Opportunities/Solutions→  ADAPT Phase (Transition Planning)       │
│  Phase F: Migration Planning   ←→  PLAN Phase                               │
│                                                                              │
│  Phase G: Implementation Gov.  ─┐                                           │
│  Phase H: Arch. Change Mgmt ────┼→ EXECUTE & GOVERN Phase                   │
│  Requirements Management ───────┘                                           │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### What GEATDM Adds to TOGAF

| ADM Challenge | GEATDM Enhancement |
|---------------|-------------------|
| Starting from blank slate | Pre-built Reference Architectures (80% pre-defined) |
| Generic enterprise focus | Public sector organization types (PDU/RA/SDA) |
| Abstract BB concept | Specific GovStack Building Block alignment |
| No DPI guidance | Integrated DPI readiness assessment and integration patterns |
| Heavy documentation burden | Streamlined templates structured by RA |
| Requires extensive EA expertise | Accessible to practitioners with limited EA background |

#### Complementary Use Guidance

**If your organization uses TOGAF:**
- Use GEATDM Reference Architectures as content input to ADM phases
- Apply GEATDM classification to determine appropriate RA
- Leverage GEATDM DPI checklist for Architecture Vision completeness
- Use TOGAF governance structures with GEATDM-specific content

**If your organization doesn't use TOGAF:**
- GEATDM provides sufficient method structure standalone
- Consider TOGAF training for deeper EA understanding
- Reference TOGAF glossary for consistent terminology

### 4.2 Relationship to PAERA

GEATDM is the **application method** for PAERA (Public Administration Ecosystem Reference Architecture). While PAERA defines WHAT the reference architecture contains, GEATDM explains HOW to apply it.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        PAERA ↔ GEATDM RELATIONSHIP                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  PAERA (Framework)                    GEATDM (Method)                        │
│  ═══════════════════                  ═══════════════════                    │
│                                                                              │
│  Defines:                             Provides:                              │
│  ─────────                            ───────────                            │
│  • Organization taxonomy              • Classification questionnaire         │
│    (PDU, RA, SDA)                       to identify type                     │
│                                                                              │
│  • DPI structure and pillars          • DPI readiness checklist to          │
│                                         assess national infrastructure       │
│                                                                              │
│  • Building Block categories          • Building Block integration           │
│                                         guidance per organization type       │
│                                                                              │
│  • EA metamodel and domains           • Structured templates for             │
│    (BDAT)                               documenting BDAT architecture        │
│                                                                              │
│  • Reference Architecture content     • Step-by-step process to              │
│    for each organization type           apply and adapt RAs                  │
│                                                                              │
│  • Ecosystem context                  • Ecosystem mapping guidance           │
│                                                                              │
│  PAERA answers: WHAT is the architecture?                                    │
│  GEATDM answers: HOW do we apply it?                                         │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### How GEATDM Operationalizes PAERA

| PAERA Concept | GEATDM Operationalization |
|---------------|---------------------------|
| Three organization types | Classification Guide with decision tree and questionnaire |
| DPI five pillars | DPI Readiness Checklist with scoring and mitigation guidance |
| Reference Architecture content | ASSESS templates, ADAPT tailoring guidelines |
| Building Block alignment | BB mapping tables in each RA, integration specifications |
| EA principles | Principles template with public sector adaptations |
| Governance framework | EXECUTE & GOVERN phase with Architecture Board operation |

### 4.3 Relationship to GovStack

GovStack provides the **Building Blocks specifications** that GEATDM Reference Architectures reference. The relationship is one of alignment and practical integration.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      GOVSTACK ↔ GEATDM INTEGRATION                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  GovStack Ecosystem                                                          │
│  ═══════════════════════════════════════════════════════════════════════    │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │ GovStack Specifications                                             │    │
│  │ • Building Block API definitions                                    │    │
│  │ • Functional requirements                                           │    │
│  │ • Security specifications                                           │    │
│  └───────────────────────────────────┬─────────────────────────────────┘    │
│                                      │                                      │
│                                      ▼ Referenced by                        │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │ GEATDM Reference Architectures                                      │    │
│  │ • Capability-to-BB mapping                                          │    │
│  │ • Integration patterns                                              │    │
│  │ • Implementation guidance                                           │    │
│  └───────────────────────────────────┬─────────────────────────────────┘    │
│                                      │                                      │
│                                      ▼ Applied through                      │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │ GEATDM Method (DISCOVER → ASSESS → ADAPT → PLAN → EXECUTE)          │    │
│  │ • BB selection guidance                                             │    │
│  │ • BB implementation sequencing                                      │    │
│  │ • BB compliance verification                                        │    │
│  └───────────────────────────────────┬─────────────────────────────────┘    │
│                                      │                                      │
│                                      ▼ Results in                           │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │ Organization's Target Architecture                                  │    │
│  │ • GovStack-compliant applications                                   │    │
│  │ • DPI-integrated services                                           │    │
│  │ • Interoperable with national ecosystem                             │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Building Block Integration in GEATDM

| GEATDM Phase | GovStack Integration |
|--------------|---------------------|
| **DISCOVER** | Assess which BBs are available nationally (DPI) vs. need deployment |
| **ASSESS** | Document current BB usage and gaps |
| **ADAPT** | Select appropriate BBs for TO-BE architecture |
| **PLAN** | Sequence BB implementation; identify dependencies |
| **EXECUTE** | Implement BBs per specifications; verify compliance |

---

## 5. METHOD INPUTS AND OUTPUTS

### 5.1 Prerequisites

Before starting the GEATDM method, organizations should have:

#### Essential Prerequisites

| Prerequisite | Description | If Not Available |
|--------------|-------------|------------------|
| **Organizational Mandate** | Clear understanding of organization's legal mandate and scope | Cannot proceed—fundamental |
| **Executive Sponsorship** | Senior leadership commitment to EA initiative | Secure sponsorship first |
| **Minimum Team** | At least 1 person to lead the effort | May need external support |
| **Basic Documentation** | Organization structure, key services list | DISCOVER can create basics |

#### Recommended Prerequisites

| Prerequisite | Description | Impact if Missing |
|--------------|-------------|-------------------|
| **Strategic Plan** | Organization's strategic direction | May need parallel strategy work |
| **IT System Inventory** | List of current applications | ASSESS phase will take longer |
| **National Digital Strategy** | Country's digital government direction | DPI assessment more difficult |
| **Budget Allocation** | Resources for EA development | Limits what can be achieved |
| **Stakeholder Buy-in** | Business units willing to participate | Slower progress, resistance |

#### Minimum Readiness Criteria

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     GEATDM READINESS CHECKLIST                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  MUST HAVE (Cannot proceed without):                                         │
│  ⬜ Executive sponsor identified and committed                               │
│  ⬜ Organization's mandate/charter available                                 │
│  ⬜ At least 1 person allocated to lead the effort                          │
│  ⬜ Access to key stakeholders for interviews                                │
│                                                                              │
│  SHOULD HAVE (Significant impact if missing):                                │
│  ⬜ Basic organization structure documented                                  │
│  ⬜ List of main services/functions                                          │
│  ⬜ Information on national DPI status                                       │
│  ⬜ IT leadership engagement                                                 │
│                                                                              │
│  NICE TO HAVE (Accelerates progress):                                        │
│  ⬜ Strategic plan or IT strategy                                            │
│  ⬜ Application inventory                                                    │
│  ⬜ Process documentation                                                    │
│  ⬜ Previous architecture work                                               │
│                                                                              │
│  READINESS DECISION:                                                         │
│  ⬜ All MUST HAVE checked → Proceed to DISCOVER                             │
│  ⬜ Missing MUST HAVE items → Address gaps first                            │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 5.2 Key Deliverables

Each phase produces specific deliverables that serve as inputs to subsequent phases:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      DELIVERABLE FLOW ACROSS PHASES                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  DISCOVER Phase Outputs:                                                     │
│  ├── Organization Classification Record                                      │
│  ├── DPI Readiness Assessment                                               │
│  ├── Selected Reference Architecture (PDU/RA/SDA)                           │
│  └── DISCOVER Summary ──────────────────────────────┐                       │
│                                                      │                       │
│                                                      ▼                       │
│  ASSESS Phase Outputs:                              [Input]                  │
│  ├── AS-IS Architecture Document (BDAT domains)                             │
│  ├── Gap Analysis Report                                                    │
│  ├── Prioritized Gap Register                                               │
│  └── ASSESS Summary ────────────────────────────────┐                       │
│                                                      │                       │
│                                                      ▼                       │
│  ADAPT Phase Outputs:                               [Input]                  │
│  ├── TO-BE Architecture Document                                            │
│  ├── Tailoring Decision Log                                                 │
│  ├── Transition Requirements                                                │
│  └── ADAPT Summary ─────────────────────────────────┐                       │
│                                                      │                       │
│                                                      ▼                       │
│  PLAN Phase Outputs:                                [Input]                  │
│  ├── Implementation Roadmap                                                 │
│  ├── Business Case                                                          │
│  ├── Phase Definitions                                                      │
│  ├── Resource Plan                                                          │
│  ├── Risk Register                                                          │
│  └── PLAN Summary ──────────────────────────────────┐                       │
│                                                      │                       │
│                                                      ▼                       │
│  EXECUTE & GOVERN Outputs:                          [Input]                  │
│  ├── Architecture Compliance Reports                                        │
│  ├── Dispensation Decisions                                                 │
│  ├── Updated Reference Architecture                                         │
│  ├── Lessons Learned                                                        │
│  └── EA Effectiveness Metrics ──────────────────────┐                       │
│                                                      │                       │
│                                                      ▼                       │
│                                            [Feeds back to next cycle]        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 5.3 Deliverable Summary by Phase

| Phase | Primary Deliverable | Supporting Deliverables |
|-------|---------------------|------------------------|
| **DISCOVER** | DISCOVER Summary | Classification Record, DPI Assessment, RA Selection |
| **ASSESS** | Gap Analysis Report | AS-IS Document, Gap Register |
| **ADAPT** | TO-BE Architecture | Tailoring Log, Transition Requirements |
| **PLAN** | Implementation Roadmap | Business Case, Phase Definitions, Risk Register |
| **EXECUTE** | Architecture Compliance Reports | Dispensations, Lessons Learned |

---

## 6. SUCCESS FACTORS

### 6.1 Critical Success Factors

**For successful GEATDM application, organizations must address these critical factors:**

| Factor | Description | Mitigation if Missing |
|--------|-------------|----------------------|
| **Executive Sponsorship** | Active, visible support from senior leadership | Do not proceed without; secure sponsor first |
| **Accurate Classification** | Correct identification of organization type | Use multiple validation methods (questionnaire + decision tree) |
| **Realistic DPI Assessment** | Honest evaluation of national infrastructure | Don't over-rate; involve national digital agency |
| **Stakeholder Engagement** | Business and IT participation throughout | Build engagement plan; communicate benefits |
| **Appropriate Resources** | Sufficient time and people allocated | Set realistic timeline; phase work if needed |
| **Change Management** | Organizational readiness for transformation | Parallel change management program |

### 6.2 Common Pitfalls to Avoid

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        COMMON PITFALLS & MITIGATIONS                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  PITFALL 1: Over-Customizing the Reference Architecture                      │
│  ─────────────────────────────────────────────────────────                  │
│  Risk: Losing RA benefits, creating unsupportable architecture              │
│  Mitigation: Document and justify EVERY deviation; protect RA core          │
│                                                                              │
│  PITFALL 2: Skipping DPI Assessment                                          │
│  ─────────────────────────────────────────────────────────                  │
│  Risk: Planning for DPI that doesn't exist; failed integrations             │
│  Mitigation: Complete full DPI checklist; verify with national agency       │
│                                                                              │
│  PITFALL 3: Misclassifying Organization Type                                 │
│  ─────────────────────────────────────────────────────────                  │
│  Risk: Wrong RA selected; over/under-engineering                            │
│  Mitigation: Use both questionnaire AND decision tree; stakeholder review   │
│                                                                              │
│  PITFALL 4: AS-IS Documentation Paralysis                                    │
│  ─────────────────────────────────────────────────────────                  │
│  Risk: Never-ending ASSESS phase; perfectionism                             │
│  Mitigation: Set time-box; "good enough" for gap identification             │
│                                                                              │
│  PITFALL 5: Unrealistic Roadmap                                              │
│  ─────────────────────────────────────────────────────────                  │
│  Risk: Failed implementation; loss of credibility                           │
│  Mitigation: Conservative estimates; clear dependencies; decision gates     │
│                                                                              │
│  PITFALL 6: Architecture as Shelfware                                        │
│  ─────────────────────────────────────────────────────────                  │
│  Risk: Architecture created but never used                                  │
│  Mitigation: Link to projects; governance enforcement; quick wins           │
│                                                                              │
│  PITFALL 7: Ignoring Governance                                              │
│  ─────────────────────────────────────────────────────────                  │
│  Risk: Architecture divergence; shadow IT; wasted investment                │
│  Mitigation: Establish Architecture Board; mandatory reviews                │
│                                                                              │
│  PITFALL 8: Technology-First Approach                                        │
│  ─────────────────────────────────────────────────────────                  │
│  Risk: Solutions that don't address business needs                          │
│  Mitigation: Capability-driven; business validation at each step            │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6.3 Organizational Readiness Indicators

**Green Indicators (Proceed with confidence):**
- Clear executive mandate for digital transformation
- Dedicated team assigned with protected time
- National DPI at Level 2 or 3
- Previous successful IT initiatives
- Budget allocated for multi-year effort
- Business units requesting architecture support

**Yellow Indicators (Proceed with caution):**
- Executive support verbal but not formalized
- Part-time resources only
- National DPI at Level 1 with development roadmap
- Mixed history of IT project success
- Budget year-to-year only
- Business units neutral toward architecture

**Red Indicators (Address before proceeding):**
- No executive sponsor identified
- No dedicated resources
- National DPI gaps with no development plan
- History of failed IT initiatives
- No budget allocated
- Active resistance from business units

---

## 7. DOCUMENT STRUCTURE

### 7.1 Guide to Remaining Sections

This Method Framework (Part 1) establishes context and overview. The subsequent sections provide detailed operational guidance:

| Section | Content | When to Use |
|---------|---------|-------------|
| **Section 8: Classification Guide** | Detailed questionnaire, decision tree, special cases | Starting DISCOVER; classifying organization |
| **Section 9: DPI Readiness Checklist** | Five-pillar assessment, scoring, mitigation | Assessing national infrastructure |
| **Section 10: DISCOVER Phase Guide** | Complete DISCOVER process with templates | Executing Phase 1 |
| **Section 11: ASSESS Phase Guide** | AS-IS documentation, gap analysis | Executing Phase 2 |
| **Section 12: ADAPT Phase Guide** | Tailoring guidance, TO-BE creation | Executing Phase 3 |
| **Section 13: PLAN Phase Guide** | Roadmap development, business case | Executing Phase 4 |
| **Section 14: EXECUTE & GOVERN Guide** | Implementation, governance, improvement | Executing Phase 5 |

### 7.2 Cross-Reference to Reference Architectures

The Reference Architectures are separate documents containing the actual architecture content:

| Reference Architecture | Document ID | Use With |
|----------------------|-------------|----------|
| **PDU Reference Architecture** | GEATDM-WP2-T25 | Policy Development Units |
| **RA Reference Architecture** | GEATDM-WP3-T35 | Regulatory Agencies |
| **SDA Reference Architecture** | GEATDM-WP4-T47 | Service Delivery Authorities |

Each Reference Architecture contains:
- Organization Profile
- Business Architecture (Business Model Canvas, stakeholders, services)
- Capability Map (core and support capabilities)
- Application Architecture (components, integrations, BB mapping)
- Data Architecture (domains, entities, flows)
- Technology Considerations (platform tiers, security)
- Implementation Guidance (sequence, quick wins, risks)

### 7.3 Cross-Reference to Templates

Templates are provided throughout the phase guides. Key templates include:

| Template | Purpose | Location |
|----------|---------|----------|
| Classification Questionnaire | Organization typing | Section 8 |
| DPI Readiness Checklist | National infrastructure assessment | Section 9 |
| DISCOVER Summary | Phase 1 consolidation | Section 10 |
| AS-IS Architecture Template | Current state documentation | Section 11 |
| Gap Analysis Template | Gap identification and prioritization | Section 11 |
| Tailoring Decision Log | Customization tracking | Section 12 |
| TO-BE Architecture Template | Target state documentation | Section 12 |
| Implementation Roadmap Template | Visual planning | Section 13 |
| Business Case Template | Investment justification | Section 13 |
| Compliance Checklist | Architecture review | Section 14 |
| Dispensation Request Form | Exception handling | Section 14 |

### 7.4 Navigation Guide

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        NAVIGATION AIDS                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  "I want to..."                           Go to...                           │
│  ────────────────────────────────────────────────────────────────────────   │
│  Understand the overall method            Section 3: Method Overview         │
│  Know how this relates to TOGAF           Section 4.1: TOGAF Relationship    │
│  Know how this relates to PAERA           Section 4.2: PAERA Relationship    │
│  Classify my organization                 Section 8: Classification Guide    │
│  Check if national DPI is ready           Section 9: DPI Checklist           │
│  Start the DISCOVER phase                 Section 10: DISCOVER Guide         │
│  Document our current architecture        Section 11: ASSESS Guide           │
│  Create our target architecture           Section 12: ADAPT Guide            │
│  Develop an implementation roadmap        Section 13: PLAN Guide             │
│  Implement and govern architecture        Section 14: EXECUTE Guide          │
│  Find a specific template                 Section 7.3: Template Index        │
│  Understand a term                        Glossary (GEATDM-WP0-T03)         │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## APPENDIX A: GLOSSARY OF KEY TERMS

| Term | Definition |
|------|------------|
| **AS-IS Architecture** | The current state of the organization's architecture |
| **Building Block (BB)** | Reusable software component per GovStack specifications |
| **Capability** | An ability that an organization possesses or requires |
| **DPI** | Digital Public Infrastructure - national-level shared digital services |
| **GEATDM** | Generic EA Target Architecture Development Method |
| **PAERA** | Public Administration Ecosystem Reference Architecture |
| **PDU** | Policy Development Unit - policy-focused organization |
| **RA (org type)** | Regulatory Agency - sector regulation organization |
| **RA (artifact)** | Reference Architecture - template architecture |
| **SDA** | Service Delivery Authority - high-volume service organization |
| **TO-BE Architecture** | The target/future state of the organization's architecture |

---

## APPENDIX B: DOCUMENT REFERENCES

| Document | ID | Description |
|----------|-----|-------------|
| Master Context | GEATDM-WP0-T01 | Project context and foundational concepts |
| RA Template | GEATDM-WP0-T02 | Standard Reference Architecture structure |
| Definitions | GEATDM-WP0-T03 | Key definitions and glossary |
| EA Metamodel | GEATDM-WP1-T11 | Architecture metamodel |
| EA Principles | GEATDM-WP1-T12 | Architectural principles |
| EA Governance | GEATDM-WP1-T13 | Governance framework |
| PDU RA | GEATDM-WP2-T25 | Policy Development Unit Reference Architecture |
| RA RA | GEATDM-WP3-T35 | Regulatory Agency Reference Architecture |
| SDA RA | GEATDM-WP4-T47 | Service Delivery Authority Reference Architecture |
| Classification Guide | GEATDM-WP5-T51 | Organization classification methodology |
| DPI Checklist | GEATDM-WP5-T52 | DPI readiness assessment |
| DISCOVER Guide | GEATDM-WP5-T53 | Phase 1 detailed guide |
| ASSESS Guide | GEATDM-WP5-T54 | Phase 2 detailed guide |
| ADAPT Guide | GEATDM-WP5-T55 | Phase 3 detailed guide |
| PLAN Guide | GEATDM-WP5-T56 | Phase 4 detailed guide |
| EXECUTE Guide | GEATDM-WP5-T57 | Phase 5 detailed guide |

---

---

*This guide is part of the Generic EA Target Architecture Development Method (GEATDM), based on the GovStack Public Administration Ecosystem Reference Architecture (PAERA). For more information: https://paera.govstack.global/*

---

*End of Method Framework & Introduction*


═══════════════════════════════════════════════════════════════════════════════
# PART II: ENTRY POINT TOOLS (Sections 8-9)
═══════════════════════════════════════════════════════════════════════════════


# INTRODUCTION TO ENTRY POINT TOOLS

## Purpose of Entry Point Tools

Before entering the main GEATDM phases (DISCOVER → ASSESS → ADAPT → PLAN → EXECUTE), organizations must complete two foundational assessments that shape everything that follows:

1. **Organization Classification**: Determines WHICH Reference Architecture to use
2. **DPI Readiness Assessment**: Determines WHETHER national infrastructure supports implementation

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     ENTRY POINT TOOLS WORKFLOW                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                      ENTRY POINT TOOLS                               │    │
│  │                                                                       │    │
│  │   ┌───────────────────────┐      ┌───────────────────────┐          │    │
│  │   │  1. CLASSIFICATION    │      │  2. DPI READINESS     │          │    │
│  │   │     GUIDE             │      │     CHECKLIST         │          │    │
│  │   │                       │      │                       │          │    │
│  │   │  → PDU?               │─────►│  → Level 1?           │          │    │
│  │   │  → RA?                │      │  → Level 2?           │          │    │
│  │   │  → SDA?               │      │  → Level 3?           │          │    │
│  │   │                       │      │                       │          │    │
│  │   │  WHICH architecture?  │      │  CAN we proceed?      │          │    │
│  │   └───────────────────────┘      └───────────────────────┘          │    │
│  │              │                              │                        │    │
│  │              └──────────────┬───────────────┘                        │    │
│  │                             │                                        │    │
│  │                             ▼                                        │    │
│  │                  ┌─────────────────────┐                            │    │
│  │                  │ Combined Decision:  │                            │    │
│  │                  │ RA Type + DPI Level │                            │    │
│  │                  └─────────────────────┘                            │    │
│  │                             │                                        │    │
│  └─────────────────────────────┼────────────────────────────────────────┘    │
│                                │                                             │
│                                ▼                                             │
│  ════════════════════════════════════════════════════════════════════════   │
│                          MAIN METHOD PHASES                                  │
│  ════════════════════════════════════════════════════════════════════════   │
│                                │                                             │
│                                ▼                                             │
│  ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────────┐   │
│  │DISCOVER │──►│ ASSESS  │──►│  ADAPT  │──►│  PLAN   │──►│EXECUTE &    │   │
│  │         │   │         │   │         │   │         │   │GOVERN       │   │
│  └─────────┘   └─────────┘   └─────────┘   └─────────┘   └─────────────┘   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## How the Two Tools Relate

Classification and DPI assessment are complementary:

| Aspect | Classification | DPI Assessment |
|--------|----------------|----------------|
| **Question Answered** | What TYPE of organization? | Is INFRASTRUCTURE ready? |
| **Output** | PDU / RA / SDA selection | Level 1 / 2 / 3 readiness |
| **Drives** | Reference Architecture selection | Implementation approach |
| **Scope** | Internal to organization | External (national) |
| **Who Decides** | Organization leadership | National digital agency + org |

**Critical Relationship:** Classification determines DPI requirements. SDAs need more DPI infrastructure than PDUs. If an organization is classified as SDA but DPI is only Level 1, a gap mitigation strategy is required.

---

═══════════════════════════════════════════════════════════════════════════════
# SECTION 8: ORGANIZATION CLASSIFICATION GUIDE
═══════════════════════════════════════════════════════════════════════════════

## 8.1 Introduction to Classification

### 8.1.1 Purpose and Importance

This guide provides a systematic approach to classifying public sector organizations into one of three standard types. Classification is the **first critical step** in the GEATDM method because it determines which Reference Architecture (RA) will serve as the foundation for the organization's digital transformation.

The three organization types are:

| Type | Abbreviation | Typical Examples |
|------|--------------|------------------|
| Policy Development Unit | **PDU** | Ministries, Chancelleries |
| Regulatory Agency | **RA** | Licensing Authorities, Data Protection Authorities |
| Service Delivery Authority | **SDA** | Tax Departments, Customs, Social Security |

### 8.1.2 Why Classification Matters

Correct classification is essential because:

1. **Appropriate Complexity**: Each organization type has different automation requirements. Misclassification leads to either over-engineering (wasteful) or under-engineering (ineffective).

2. **Right-Sized Investment**: Reference Architectures are progressively more complex: SDA > RA > PDU. Selecting the wrong RA wastes resources or creates gaps.

3. **Building Block Selection**: Each organization type requires different Building Blocks. Classification determines which BBs are mandatory, optional, or unnecessary.

4. **Implementation Sequence**: The path to digital maturity differs by organization type. Classification shapes the implementation roadmap.

5. **DPI Requirements**: Each organization type has different DPI prerequisites. SDAs require robust identity and interoperability; PDUs have minimal requirements.

### 8.1.3 How Classification Drives RA Selection

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                   CLASSIFICATION TO RA SELECTION                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   Classification Result              Reference Architecture                  │
│   ══════════════════════             ══════════════════════════             │
│                                                                              │
│   ┌─────────────────────┐            ┌─────────────────────────┐            │
│   │       PDU           │───────────►│  PDU Reference          │            │
│   │                     │            │  Architecture           │            │
│   │  Policy Development │            │  (GEATDM-WP2-T25)       │            │
│   │  Unit               │            │                         │            │
│   └─────────────────────┘            │  • Document Management  │            │
│                                      │  • Collaboration        │            │
│                                      │  • Basic Analytics      │            │
│                                      └─────────────────────────┘            │
│                                                 │                           │
│   ┌─────────────────────┐            ┌─────────┴───────────────┐            │
│   │       RA            │───────────►│  RA Reference           │            │
│   │                     │            │  Architecture           │            │
│   │  Regulatory         │            │  (GEATDM-WP3-T35)       │            │
│   │  Agency             │            │                         │            │
│   └─────────────────────┘            │  • All PDU + Licensing  │            │
│                                      │  • Compliance           │            │
│                                      │  • Inspections          │            │
│                                      └─────────────────────────┘            │
│                                                 │                           │
│   ┌─────────────────────┐            ┌─────────┴───────────────┐            │
│   │       SDA           │───────────►│  SDA Reference          │            │
│   │                     │            │  Architecture           │            │
│   │  Service Delivery   │            │  (GEATDM-WP4-T47)       │            │
│   │  Authority          │            │                         │            │
│   └─────────────────────┘            │  • All RA + Mass Svc    │            │
│                                      │  • Customer Accounting  │            │
│                                      │  • Risk Engine          │            │
│                                      └─────────────────────────┘            │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 8.1.4 Link to DPI Requirements by Organization Type

Classification directly impacts DPI requirements:

| Organization Type | DPI Requirements | Rationale |
|-------------------|-----------------|-----------|
| **PDU** | Minimal | Limited external interaction; primarily internal operations |
| **RA** | Moderate | Must verify identity for licensing; needs data exchange for compliance |
| **SDA** | Extensive | High-volume citizen interaction; requires full identity, payments, interoperability |

**Key Insight:** If classification results in SDA but DPI assessment reveals Level 1 (Foundational), significant gap mitigation will be required before full architecture implementation.

### 8.1.5 How to Use This Section

**Step 1: Read the Definitions (Section 8.2)**
Understand what each organization type means and its key characteristics.

**Step 2: Apply the Decision Tree (Section 8.3)**
Start with the decision tree for a quick preliminary classification.

**Step 3: Complete the Questionnaire (Section 8.4)**
Use the scoring questionnaire for validation and borderline cases.

**Step 4: Check for Special Cases (Section 8.5)**
Review whether any special case patterns apply.

**Step 5: Document Your Classification (Section 8.6)**
Record the classification with rationale for future reference.

**Step 6: Proceed to DPI Assessment (Section 9)**
After classification, assess national DPI readiness.

---

## 8.2 Organization Type Definitions

### 8.2.1 Policy Development Unit (PDU)

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

#### DPI Requirements for PDU

| DPI Component | Requirement Level |
|---------------|-------------------|
| Digital Identity | Optional - basic authentication sufficient |
| Interoperability | Optional - document exchange standards helpful |
| Data Infrastructure | Recommended - data governance framework |
| Digital Access | Required - basic connectivity |
| Governance | Required - alignment with digital strategy |

---

### 8.2.2 Regulatory Agency (RA)

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

#### DPI Requirements for RA

| DPI Component | Requirement Level |
|---------------|-------------------|
| Digital Identity | Required - authentication API for verification |
| Interoperability | Required - data exchange with registries |
| Data Infrastructure | Required - access to citizen/business registries |
| Digital Access | Required - service portal capabilities |
| Governance | Required - compliance with standards |

---

### 8.2.3 Service Delivery Authority (SDA)

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

#### DPI Requirements for SDA

| DPI Component | Requirement Level |
|---------------|-------------------|
| Digital Identity | Required - full authentication with SSO |
| Interoperability | Required - full platform access |
| Data Infrastructure | Required - government cloud, analytics |
| Digital Access | Required - multi-channel service delivery |
| Governance | Required - full compliance with all standards |

---

### 8.2.4 Organization Type Comparison Table

| Aspect | PDU | RA | SDA |
|--------|-----|-----|-----|
| **Primary Focus** | Policy | Regulation | Service at scale |
| **Customers** | Stakeholders | Regulated entities | Mass public |
| **Transaction Volume** | Low | Moderate | High |
| **Key Examples** | Ministry | Licensing Board | Tax Authority |
| **Key Building Block** | Content Mgmt | Workflow BB | Risk Engine |
| **Platform Complexity** | Office suite | Digital services | Industrial platform |
| **DPI Dependency** | Low | Medium | High |
| **Implementation Time** | 6-12 months | 12-24 months | 24-48 months |
| **Budget Range** | $100K-500K | $500K-2M | $2M-20M+ |

---

## 8.3 Classification Decision Tree

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
│        └─► Proceed to DPI Assessment (Section 9) with PDU requirements      │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  Q3: Does the organization process more than 100,000 transactions           │
│      annually with individual customers/citizens?                           │
│                                                                             │
│  YES → Continue to Q4                                                       │
│  NO  → RESULT: RA (Regulatory Agency)                                       │
│        └─► Proceed to DPI Assessment (Section 9) with RA requirements       │
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
│                     └─► Proceed to DPI Assessment (Section 9) with SDA req  │
│  NO  (fewer than 3) → RESULT: RA (Regulatory Agency)                        │
│                       └─► Proceed to DPI Assessment (Section 9) with RA req │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Decision Tree Summary Table

| Q1 Answer | Q2 Answer | Q3 Answer | Q4 Answer | Classification | DPI Level Required |
|-----------|-----------|-----------|-----------|----------------|-------------------|
| Policy | No | - | - | **PDU** | Level 1 acceptable |
| Policy | Yes | No | - | **RA** | Level 2 recommended |
| Policy | Yes | Yes | No | **RA** | Level 2 recommended |
| Policy | Yes | Yes | Yes | **SDA** | Level 3 recommended |
| Regulatory | - | No | - | **RA** | Level 2 recommended |
| Regulatory | - | Yes | No | **RA** | Level 2 recommended |
| Regulatory | - | Yes | Yes | **SDA** | Level 3 recommended |
| Service Delivery | - | - | Yes | **SDA** | Level 3 recommended |
| Service Delivery | - | - | No | **RA** | Level 2 recommended |

---

## 8.4 Classification Questionnaire

This questionnaire provides a more detailed assessment. It is particularly useful for:
- Validating the decision tree result
- Handling borderline cases
- Documenting the classification rationale

### 8.4.1 Instructions

1. Answer each question with **Yes** or **No**
2. For "Yes" answers, add the points in the corresponding column
3. Sum each column at the end
4. The column with the highest score indicates the organization type
5. If scores are close (within 5 points), review Section 8.5 for special cases

### 8.4.2 Full 30-Question Questionnaire

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

### 8.4.3 Scoring Interpretation

| PDU Score | RA Score | SDA Score | Interpretation |
|-----------|----------|-----------|----------------|
| Highest | - | - | **PDU** - Clear policy focus |
| - | Highest | - | **RA** - Regulatory focus |
| - | - | Highest | **SDA** - Service delivery focus |
| Close to RA | Close to PDU | Low | **RA** - PDU with regulatory elements |
| Low | Close to SDA | Close to RA | **SDA** - Large-scale regulatory agency |

### 8.4.4 Confidence Levels and DPI Implications

| Score Difference | Confidence | Action | DPI Implication |
|-----------------|------------|--------|-----------------|
| >20 points | **High** | Classification is clear | Use standard DPI requirements |
| 10-20 points | **Medium** | Review key differentiating factors | Consider hybrid DPI approach |
| <10 points | **Low** | Review Section 8.5 (Special Cases) | Assess for both org types |

---

## 8.5 Special Cases and Hybrid Organizations

### 8.5.1 Ministry with Regulatory Function

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

**DPI Requirements:** Use PDU baseline + specific RA components for licensing function (identity verification, basic registry access)

**Implementation Recommendation:**
- Implement PDU core first
- Add licensing module from RA application architecture
- Consider eventually spinning off regulatory function to dedicated RA

---

### 8.5.2 Small Regulatory Agency

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

**DPI Requirements:** Moderate - can work with Level 1 DPI if identity verification is available even manually

**Implementation Recommendation:**
- Use RA Reference Architecture
- Apply "Basic Tier" platform recommendations
- Consider low-code/no-code platforms
- Prioritize core capabilities, defer advanced features

---

### 8.5.3 Large Enforcement Agency

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

**DPI Requirements:** Full SDA requirements - especially identity verification and interoperability for multi-agency coordination

**Implementation Recommendation:**
- Use full SDA Reference Architecture
- Prioritize: Case Management, Risk Assessment, Field Operations
- De-prioritize: Filing Management, Revenue Processing (unless relevant)

---

### 8.5.4 Revenue-Generating Regulatory Agency

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

**DPI Requirements:** Standard RA requirements + payment gateway integration

---

### 8.5.5 Multi-Function Organization

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

**DPI Requirements:** Based on highest-demand function (in example above, SDA requirements apply)

**Recommendation:** Use Option B when operational units are clearly separate and have distinct IT systems. Use Option A when the organization is integrated.

---

### 8.5.6 Nascent Digital Service Organization

**Pattern:** A newly created agency or one undergoing major transformation that doesn't yet have the characteristics of its intended type.

**Example:** A new tax authority being established, currently small but with mandate to grow to full SDA capabilities.

**Classification Approach:**
1. Classify by **intended end state**, not current state
2. Note: "Nascent [type] - phased implementation"
3. Reference Architecture: Select based on target state
4. Implementation: Phase the roadmap

**DPI Requirements:** Plan for target-state DPI requirements; implement in phases as organization grows

**Implementation Recommendation:**
- Use target-state RA as the full reference
- Phase implementation over multiple years
- Start with foundational capabilities
- Build toward full RA over time

---

### 8.5.7 Classification Decision Matrix for Hybrid Cases

| Pattern | Primary | Secondary | Classification | DPI Level | Notes |
|---------|---------|-----------|----------------|-----------|-------|
| Ministry + Licensing | Policy (>70%) | Regulatory (<30%) | **PDU** | Level 1-2 | Add RA modules |
| Regulator + Small Transactions | Regulatory (>70%) | Service (<30%) | **RA** | Level 2 | Standard RA |
| Regulator + High Transactions | Regulatory (>50%) | Service (<50%) | **SDA** | Level 3 | Full SDA RA |
| Multi-Function Equal | Multiple | Multiple | **Segment** | Highest of segments | Classify each unit |
| Revenue Authority | Service | Revenue | **SDA** | Level 3 | Tax/Customs pattern |
| Enforcement Agency | Enforcement | Service | **SDA** | Level 3 | Police/Immigration |

---

## 8.6 Classification Examples

### 8.6.1 Example Classifications by Country Pattern

| Organization Type | Generic Name | Classification | DPI Level Needed | Rationale |
|-------------------|--------------|----------------|-----------------|-----------|
| Central Bank | Monetary Policy Authority | **PDU/RA Hybrid** | Level 2 | Policy development + Financial sector regulation |
| Ministry of Finance | Finance Ministry | **PDU** | Level 1 | Policy and coordination focus |
| Statistics Office | National Statistics Bureau | **PDU** | Level 1 | Data/analysis focus, no transactions |
| Electoral Commission | Election Authority | **RA** | Level 2 | Event-based regulation (elections) |
| Data Protection Authority | Privacy Commission | **RA** | Level 2 | Regulatory oversight, moderate volume |
| Business Registry | Commercial Register | **RA** | Level 2 | License/registration focus |
| Telecommunications Regulator | Comms Authority | **RA** | Level 2 | Sector regulation, spectrum licensing |
| Tax Administration | Revenue Service | **SDA** | Level 3 | High-volume, account management |
| Customs Administration | Border Services | **SDA** | Level 3 | High-volume, real-time processing |
| Social Security | Pension/Benefits Agency | **SDA** | Level 3 | Mass service delivery, accounts |
| Immigration | Immigration Department | **SDA** | Level 3 | High-volume, enforcement |
| Motor Vehicle Registry | Transport Authority | **SDA** | Level 3 | Mass registration, ongoing compliance |
| Land Registry | Property Registry | **RA/SDA** | Level 2-3 | Depends on volume and complexity |
| Police | Law Enforcement | **SDA** | Level 3 | Large-scale operations, case management |
| Health Insurance | National Health Fund | **SDA** | Level 3 | Mass coverage, claims processing |

### 8.6.2 Detailed Worked Examples

#### Example 1: Data Protection Authority

**Organization Profile:**
- Country: Generic
- Staff: 45 employees
- Budget: $2M annually
- Established: 2018

**Assessment:**
- Primary function: Regulate data protection compliance
- Transactions: Moderate (breach notifications, registrations ~5,000/year)
- Customers: Data controllers/processors (thousands)
- Enforcement: Through complaints, investigations, fines
- Revenue: Registration fees (modest ~$200K)

**Questionnaire Results:**
- PDU score: 12
- RA score: 42
- SDA score: 18

**Classification:** **RA**

**Rationale:** Clear regulatory mandate, moderate transaction volumes, inspection/enforcement focus, no mass customer accounts.

**DPI Requirements:**
| Pillar | Requirement | Status Check |
|--------|-------------|--------------|
| Identity | Authentication for regulated entities | Must verify |
| Interoperability | Access to business registry | Must verify |
| Data | Data governance framework | Must verify |
| Access | Service portal for registrations | Must verify |
| Governance | Alignment with digital strategy | Must verify |

---

#### Example 2: Tax Administration (Large Country)

**Organization Profile:**
- Country: Generic (population 50M)
- Staff: 5,000 employees
- Budget: $500M annually
- Taxpayers: 8M individuals, 500K businesses

**Assessment:**
- Primary function: Tax collection and enforcement
- Transactions: 50M+ per year
- Customers: All individuals and businesses (millions)
- Enforcement: Audits, penalties, prosecution
- Revenue: Government's primary revenue source ($50B)

**Questionnaire Results:**
- PDU score: 5
- RA score: 28
- SDA score: 85

**Classification:** **SDA**

**Rationale:** Mass service delivery, customer accounts, high-volume real-time processing, sophisticated risk-based enforcement, data analytics requirements.

**DPI Requirements:**
| Pillar | Requirement | Criticality |
|--------|-------------|-------------|
| Identity | Full authentication + digital signature | Blocking |
| Interoperability | Complete platform access | Blocking |
| Data | All registries + government cloud | Critical |
| Access | Multi-channel delivery | Critical |
| Governance | Full framework compliance | Required |

---

#### Example 3: Ministry of Education

**Organization Profile:**
- Country: Generic
- Staff: 200 employees (ministry level)
- Function: Education policy and system oversight

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

**DPI Requirements:** Minimal - basic connectivity, alignment with digital strategy

---

#### Example 4: Professional Medical Licensing Board (Small)

**Organization Profile:**
- Country: Generic
- Staff: 8 employees
- Licensees: 25,000 healthcare professionals
- Transactions: ~3,000 applications/renewals per year

**Assessment:**
- Primary function: License healthcare professionals
- Transactions: Low (thousands per year)
- Customers: Doctors, nurses (tens of thousands)
- Enforcement: License revocation, disciplinary
- Revenue: License fees (~$500K)

**Questionnaire Results:**
- PDU score: 6
- RA score: 38
- SDA score: 12

**Classification:** **RA (Basic Tier)**

**Rationale:** Clear regulatory function, but small scale. Use RA Reference Architecture with Basic Tier technology recommendations.

**DPI Requirements:** Moderate - can function with Level 1 DPI but Level 2 preferred for identity verification

---

### 8.6.3 Classification Documentation Template

When classifying an organization, document the following:

```
═══════════════════════════════════════════════════════════════════════════════
                    ORGANIZATION CLASSIFICATION RECORD
═══════════════════════════════════════════════════════════════════════════════

ORGANIZATION DETAILS
─────────────────────────────────────────────────────────────────────────────
Organization Name: ________________________________________________________
Country/Jurisdiction: ____________________________________________________
Date of Classification: __________________________________________________
Classified By: __________________________________________________________

CLASSIFICATION RESULT
─────────────────────────────────────────────────────────────────────────────
Primary Classification: [ ] PDU  [ ] RA  [ ] SDA

Tier/Scale: [ ] Basic  [ ] Standard  [ ] Enterprise

Special Case Applied: [ ] None  [ ] ____________________________________

Notes/Qualifiers: ________________________________________________________
_________________________________________________________________________

SUPPORTING EVIDENCE
─────────────────────────────────────────────────────────────────────────────
Decision Tree Path: Q1→__ Q2→__ Q3→__ Q4→__

Questionnaire Scores:
  PDU: ____  RA: ____  SDA: ____

Score Difference: ____ points   Confidence: [ ] High [ ] Medium [ ] Low

Key Differentiating Factors:
1. ______________________________________________________________________
2. ______________________________________________________________________
3. ______________________________________________________________________

VALIDATION
─────────────────────────────────────────────────────────────────────────────
Reviewed By: _____________________________________________________________
Review Date: _____________________________________________________________
Approved: [ ] Yes  [ ] No (reason: _______________________________________)

DPI ASSESSMENT LINK
─────────────────────────────────────────────────────────────────────────────
DPI Readiness Level Required: [ ] Level 1  [ ] Level 2  [ ] Level 3
DPI Assessment Completed: [ ] Yes  [ ] Pending
DPI Assessment Date: _____________________________________________________

NEXT STEPS
─────────────────────────────────────────────────────────────────────────────
Reference Architecture to Use: ___________________________________________
Document Reference: GEATDM-WP__-T__
Proceed to DPI Assessment: [ ] Yes - Section 9
Additional Notes: ________________________________________________________

═══════════════════════════════════════════════════════════════════════════════
```

---

## 8.7 Post-Classification: What Happens Next

### 8.7.1 Link to DPI Assessment (Section 9)

After classification, the next step is to assess national DPI readiness. The classification result determines which DPI components are critical:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│              CLASSIFICATION → DPI ASSESSMENT FLOW                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                    CLASSIFICATION COMPLETE                                   │
│                            │                                                 │
│              ┌─────────────┼─────────────┐                                  │
│              │             │             │                                  │
│              ▼             ▼             ▼                                  │
│         ┌────────┐    ┌────────┐    ┌────────┐                             │
│         │  PDU   │    │   RA   │    │  SDA   │                             │
│         └───┬────┘    └───┬────┘    └───┬────┘                             │
│             │             │             │                                   │
│             ▼             ▼             ▼                                   │
│    ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                         │
│    │   Focus:    │ │   Focus:    │ │   Focus:    │                         │
│    │             │ │             │ │             │                         │
│    │ • Governance│ │ • Identity  │ │ • All 5     │                         │
│    │ • Basic     │ │ • Interop   │ │   Pillars   │                         │
│    │   Access    │ │ • Data      │ │ • Critical  │                         │
│    │             │ │ • Governance│ │   threshold │                         │
│    │             │ │             │ │   = high    │                         │
│    └──────┬──────┘ └──────┬──────┘ └──────┬──────┘                         │
│           │               │               │                                 │
│           └───────────────┼───────────────┘                                 │
│                           │                                                 │
│                           ▼                                                 │
│               ┌───────────────────────┐                                     │
│               │  PROCEED TO SECTION 9 │                                     │
│               │  DPI Readiness        │                                     │
│               │  Checklist            │                                     │
│               └───────────────────────┘                                     │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 8.7.2 Link to Reference Architecture Selection (DISCOVER Phase)

After both classification AND DPI assessment are complete, proceed to the DISCOVER phase to formally select and begin working with the Reference Architecture:

| Classification | Reference Architecture | Document Reference |
|----------------|----------------------|-------------------|
| **PDU** | PDU Reference Architecture | GEATDM-WP2-T25 |
| **RA** | RA Reference Architecture | GEATDM-WP3-T35 |
| **SDA** | SDA Reference Architecture | GEATDM-WP4-T47 |

### 8.7.3 Classification-DPI Decision Matrix

| Classification | DPI Level 1 | DPI Level 2 | DPI Level 3 |
|---------------|-------------|-------------|-------------|
| **PDU** | ✅ Proceed | ✅ Proceed | ✅ Proceed |
| **RA** | ⚠️ Proceed with mitigation | ✅ Proceed | ✅ Proceed |
| **SDA** | ❌ Address gaps first | ⚠️ Proceed with mitigation | ✅ Proceed |

**Legend:**
- ✅ Full implementation possible
- ⚠️ Phased approach with workarounds required
- ❌ Critical gaps must be addressed before proceeding

### 8.7.4 Revisiting Classification

Classification may need to be revisited if:

- Organization mandate changes significantly
- Major reform creates new functions
- Merger with another organization
- Significant growth in transaction volumes
- New enforcement powers granted

**Recommended Review Cycle:** Every 2-3 years as part of architecture governance.

---

═══════════════════════════════════════════════════════════════════════════════
# SECTION 9: DPI READINESS CHECKLIST
═══════════════════════════════════════════════════════════════════════════════

## 9.1 Introduction to DPI Assessment

### 9.1.1 What is DPI and Why It Matters

Digital Public Infrastructure (DPI) refers to the foundational digital systems and services that enable government operations and citizen-facing services at a national level. DPI encompasses the shared platforms, standards, and capabilities that multiple government organizations use to deliver digital services.

**Core DPI Domains (Five Pillars):**

| Domain | Description | Why It Matters |
|--------|-------------|----------------|
| **Digital Identity** | Authentication, digital signatures, trust services | Underpins secure, verified digital transactions |
| **Interoperability** | Technical infrastructure, standards, integration | Enables seamless data exchange and once-only principle |
| **Digital Data Infrastructure** | Data governance, registries, standards, analytics | Foundation for evidence-based decisions and integrated services |
| **Digital Access** | Infrastructure, channels, accessibility | Determines whether citizens can reach and use digital services |
| **Governance** | Leadership, coordination, policy, performance | Cross-cutting enabler that determines success of all other domains |

### 9.1.2 Why DPI Readiness Matters for Organizations

Before an organization can successfully implement a target enterprise architecture, the necessary DPI components must be available at the national level. Without adequate DPI:

- **No Identity Integration:** Organizations cannot verify citizens digitally
- **No Data Sharing:** Each organization becomes a data silo
- **No Service Integration:** Citizens must interact with each agency separately
- **No Legal Foundation:** Digital transactions may lack legal validity
- **Limited Reach:** Digital services cannot reach all citizens

**Key Insight:** Attempting digital transformation without adequate DPI leads to:
- Fragmented, incompatible systems
- Duplicated investments across agencies
- Poor citizen experience
- Unsustainable technical debt

### 9.1.3 How Organizations Integrate with (Not Build) DPI

**Critical Principle:** Organizations **integrate with** DPI; they do not **build** DPI components.

DPI is national infrastructure. Individual organizations are consumers of DPI services, not providers. This checklist helps organizations understand:

1. What DPI prerequisites must exist before starting their transformation
2. Which DPI components they will integrate with
3. What workarounds to plan for if DPI gaps exist
4. How to advocate for national DPI development where needed

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        DPI INTEGRATION MODEL                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  NATIONAL DPI LAYER (Shared Infrastructure - NOT built by organizations)    │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  Identity │ Payments │ Data Exchange │ Registries │ Security        │   │
│  │  Services │ Platform │ Platform      │ (Base)     │ Services        │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│         │          │           │              │            │                │
│         │          │           │              │            │                │
│         ▼          ▼           ▼              ▼            ▼                │
│  ════════════════════════════════════════════════════════════════════════   │
│                         INTEGRATION INTERFACES                              │
│  ════════════════════════════════════════════════════════════════════════   │
│         │          │           │              │            │                │
│         ▼          ▼           ▼              ▼            ▼                │
│  ORGANIZATION LAYER (Uses DPI Services via integration)                     │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                    Organization's Applications                       │   │
│  │   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐   │   │
│  │   │ Service │  │ Case    │  │ License │  │ Risk    │  │ Report  │   │   │
│  │   │ Portal  │  │ Mgmt    │  │ Mgmt    │  │ Engine  │  │ System  │   │   │
│  │   └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘   │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  Organization's role: CONSUME and INTEGRATE with DPI                        │
│  NOT: Build identity systems, payment platforms, or data exchange networks  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 9.1.4 Link Between Organization Type and DPI Requirements

**The relationship established in Section 8 directly impacts DPI assessment:**

| Organization Type | DPI Criticality | Minimum Viable DPI Level |
|-------------------|-----------------|-------------------------|
| **PDU** | Low | Level 1 (Foundational) acceptable |
| **RA** | Medium | Level 2 (Developing) recommended |
| **SDA** | High | Level 3 (Ready) strongly recommended |

Organizations classified as SDA face the highest DPI risk - if national DPI is inadequate, significant mitigation strategies will be required.

---

## 9.2 DPI Readiness Assessment Framework

### 9.2.1 Five Pillars Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     DPI FIVE PILLARS MODEL                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│            ┌───────────────────────────────────────────────┐                │
│            │         5. GOVERNANCE (Cross-cutting)         │                │
│            │  Strategy, Institutions, Legal, Standards     │                │
│            └───────────────────────────────────────────────┘                │
│                                    │                                         │
│            ┌───────────────────────┴───────────────────────┐                │
│            │                                               │                │
│  ┌─────────┴─────────┐  ┌─────────────────┐  ┌────────────┴────────────┐   │
│  │  1. DIGITAL       │  │ 2. INTEROPER-   │  │  3. DIGITAL DATA       │   │
│  │     IDENTITY      │  │    ABILITY      │  │     INFRASTRUCTURE     │   │
│  │                   │  │                 │  │                        │   │
│  │  • Civil Registry │  │ • NIF           │  │  • Data Governance     │   │
│  │  • National ID    │  │ • Exchange      │  │  • Foundational        │   │
│  │  • Authentication │  │   Platform      │  │    Registries          │   │
│  │  • Digital Sig    │  │ • API Standards │  │  • Cloud/Hosting       │   │
│  │  • Trust Services │  │ • Trust         │  │  • Data Standards      │   │
│  └─────────┬─────────┘  └────────┬────────┘  └────────────┬────────────┘   │
│            │                     │                        │                 │
│            └─────────────────────┼────────────────────────┘                 │
│                                  │                                          │
│                    ┌─────────────┴─────────────┐                            │
│                    │   4. DIGITAL ACCESS       │                            │
│                    │                           │                            │
│                    │  • Infrastructure         │                            │
│                    │  • Service Channels       │                            │
│                    │  • Accessibility          │                            │
│                    │  • Security               │                            │
│                    └───────────────────────────┘                            │
│                                                                              │
│   Weight Distribution:                                                       │
│   Identity: 25% | Interoperability: 25% | Data: 20% | Access: 15% | Gov: 15%│
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 9.2.2 Weighting Rationale

| Pillar | Weight | Rationale |
|--------|--------|-----------|
| **Digital Identity** | 25% | Foundation for all trusted digital interactions |
| **Interoperability** | 25% | Enables data reuse and integration - core to efficiency |
| **Data Infrastructure** | 20% | Provides authoritative information for services |
| **Digital Access** | 15% | Determines service reach (alternatives exist) |
| **Governance** | 15% | Enables coordination (can work around with bilateral agreements) |

### 9.2.3 Assessment Process

```
┌────────────────────────────────────────────────────────────────────────┐
│                    DPI READINESS ASSESSMENT PROCESS                     │
├────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Step 1: PREPARATION                                                    │
│  ───────────────────                                                    │
│  □ Identify assessment team (IT, legal, policy)                         │
│  □ Gather existing documentation on national DPI                        │
│  □ Schedule interviews with national digital agency                     │
│  □ Set assessment timeline (typically 2-4 weeks)                        │
│  □ Review organization classification (Section 8) to set focus          │
│                                                                         │
│  Step 2: PILLAR-BY-PILLAR ASSESSMENT                                   │
│  ────────────────────────────────────                                   │
│  □ Complete Digital Identity pillar checklist (Section 9.3)            │
│  □ Complete Interoperability pillar checklist (Section 9.4)             │
│  □ Complete Data Infrastructure pillar checklist (Section 9.5)          │
│  □ Complete Digital Access pillar checklist (Section 9.6)               │
│  □ Complete Governance pillar checklist (Section 9.7)                   │
│                                                                         │
│  Step 3: CALCULATE SCORES                                               │
│  ────────────────────────                                               │
│  □ Determine status for each pillar (Ready/Partial/Not Ready)           │
│  □ Apply weights and calculate overall score (Section 9.8)              │
│  □ Determine overall readiness level (Level 1/2/3)                      │
│                                                                         │
│  Step 4: CROSS-REFERENCE WITH CLASSIFICATION                           │
│  ───────────────────────────────────────────────                        │
│  □ Review requirements matrix for your org type (Section 9.9)           │
│  □ Identify blocking gaps vs. manageable gaps                           │
│  □ Determine if proceed, proceed-with-mitigation, or delay              │
│                                                                         │
│  Step 5: DEVELOP MITIGATION PLAN                                        │
│  ──────────────────────────────                                         │
│  □ For each critical gap, identify mitigation strategy (Section 9.10)   │
│  □ Estimate timeline and cost for workarounds                           │
│  □ Document assumptions and risks                                       │
│                                                                         │
│  Step 6: COMPLETE ASSESSMENT SUMMARY                                    │
│  ──────────────────────────────────                                     │
│  □ Complete summary template (Section 9.11)                             │
│  □ Make go/proceed-with-mitigation/delay recommendation                 │
│  □ Obtain stakeholder sign-off                                          │
│                                                                         │
│  Step 7: TRANSITION TO DISCOVER PHASE                                   │
│  ────────────────────────────────────                                   │
│  □ Document combined Classification + DPI decision (Section 9.12)       │
│  □ Proceed to DISCOVER Phase (Section 10)                               │
│                                                                         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 9.3 Pillar 1: Digital Identity

*The Digital Identity pillar underpins secure, verified digital transactions. Without digital identity, organizations cannot establish trust in online interactions.*

### 9.3.1 Component Checklist

| # | DPI Component | Status | Critical | Evidence/Notes |
|---|---------------|--------|:--------:|----------------|
| **1.1** | **Foundational Layer (Civil Registry)** | | | |
| 1.1.1 | Birth registration system exists | ⬜ | | Registration rate: ____% |
| 1.1.2 | Death registration system exists | ⬜ | | Registration rate: ____% |
| 1.1.3 | Civil registry is digitized | ⬜ | | Coverage: ____% |
| 1.1.4 | Vital events linked to identity lifecycle | ⬜ | | |
| **1.2** | **National Identity System** | | | |
| 1.2.1 | Unique national identifier exists | ⬜ | **★** | System name: ____________ |
| 1.2.2 | National ID coverage > 80% of adult population | ⬜ | | Coverage: ____% |
| 1.2.3 | ID credential (physical or digital) available | ⬜ | | Type: ____________ |
| 1.2.4 | Digital ID credential available | ⬜ | | Type: ____________ |
| **1.3** | **Authentication Services** | | | |
| 1.3.1 | Authentication API available for government use | ⬜ | **★** | API endpoint: ____________ |
| 1.3.2 | Multiple authentication methods supported | ⬜ | | Methods: ____________ |
| 1.3.3 | Multi-factor authentication (MFA) available | ⬜ | | |
| 1.3.4 | Defined assurance levels exist | ⬜ | | Levels: ____________ |
| 1.3.5 | Biometric authentication available | ⬜ | | Types: ____________ |
| **1.4** | **Digital Signature Infrastructure** | | | |
| 1.4.1 | Public Key Infrastructure (PKI) operational | ⬜ | | CA name: ____________ |
| 1.4.2 | Trust Service Providers (TSPs) exist | ⬜ | | Count: ____ |
| 1.4.3 | Qualified digital signatures legally recognized | ⬜ | **★** | Legal basis: ____________ |
| 1.4.4 | Digital signature services accessible to organizations | ⬜ | | |
| 1.4.5 | Time-stamping services available | ⬜ | | |
| **1.5** | **Integration & Management** | | | |
| 1.5.1 | Single Sign-On (SSO) for government services exists | ⬜ | | System: ____________ |
| 1.5.2 | Federated identity management operational | ⬜ | | |
| 1.5.3 | Identity verification (eKYC) services available | ⬜ | | |
| 1.5.4 | Credential lifecycle management (issue/revoke/renew) | ⬜ | | |
| 1.5.5 | Integration documentation available | ⬜ | | |

**★ = Critical Component for RA/SDA organizations**

### 9.3.2 Critical vs Optional Components by Organization Type

| Component | PDU | RA | SDA |
|-----------|:---:|:--:|:---:|
| 1.2.1 Unique national identifier | Optional | **Critical** | **Critical** |
| 1.3.1 Authentication API | Optional | **Critical** | **Critical** |
| 1.4.3 Digital signatures legally recognized | Recommended | **Critical** | **Critical** |
| 1.5.1 SSO for government | Optional | Recommended | **Critical** |

### 9.3.3 Pillar Scoring

**Count components marked as available:**

| Category | Available | Total | Percentage |
|----------|-----------|-------|------------|
| Foundational Layer (1.1) | ____/4 | 4 | ____% |
| National ID System (1.2) | ____/4 | 4 | ____% |
| Authentication Services (1.3) | ____/5 | 5 | ____% |
| Digital Signature (1.4) | ____/5 | 5 | ____% |
| Integration & Mgmt (1.5) | ____/5 | 5 | ____% |
| **TOTAL** | ____/23 | 23 | ____% |

**Critical Components Check (for RA/SDA):**
- [ ] 1.2.1 Unique national identifier: ⬜ Yes / ⬜ No
- [ ] 1.3.1 Authentication API: ⬜ Yes / ⬜ No
- [ ] 1.4.3 Digital signatures legal: ⬜ Yes / ⬜ No

**Pillar Readiness Determination:**

| If... | Then Status |
|-------|-------------|
| Total ≥70% AND all critical components met | **Ready** |
| Total 40-69% OR missing 1 critical component | **Partial** |
| Total <40% OR missing 2+ critical components | **Not Ready** |

**Digital Identity Pillar Status:** ⬜ Ready / ⬜ Partial / ⬜ Not Ready

**Notes:**
```
[Document key findings, limitations, or planned developments]


```

---

## 9.4 Pillar 2: Interoperability

*The Interoperability pillar enables seamless data exchange between government systems, supporting the once-only principle where citizens provide information only once.*

### 9.4.1 Component Checklist

| # | DPI Component | Status | Critical | Evidence/Notes |
|---|---------------|--------|:--------:|----------------|
| **2.1** | **Governance & Policy Framework** | | | |
| 2.1.1 | National Interoperability Framework (NIF) exists | ⬜ | | Document: ____________ |
| 2.1.2 | NIF is mandatory for government agencies | ⬜ | | Enforcement: ____________ |
| 2.1.3 | Compliance monitoring mechanism exists | ⬜ | | |
| 2.1.4 | Inter-agency data sharing agreements template | ⬜ | | |
| **2.2** | **Technical Infrastructure** | | | |
| 2.2.1 | Data exchange platform exists (X-Road type) | ⬜ | **★** | Platform: ____________ |
| 2.2.2 | Government Service Bus (ESB) available | ⬜ | | Platform: ____________ |
| 2.2.3 | API gateway operational | ⬜ | | URL: ____________ |
| 2.2.4 | Service registry/catalog maintained | ⬜ | | Count: ____ services |
| 2.2.5 | Message queue/broker available | ⬜ | | |
| **2.3** | **Standards & Formats** | | | |
| 2.3.1 | API design standards defined | ⬜ | **★** | Standard: ____________ |
| 2.3.2 | Data format standards defined (JSON, XML schemas) | ⬜ | | |
| 2.3.3 | Semantic interoperability standards exist | ⬜ | | |
| 2.3.4 | Code lists and reference data standardized | ⬜ | | |
| 2.3.5 | Integration patterns documented | ⬜ | | |
| **2.4** | **Security & Trust** | | | |
| 2.4.1 | Trust framework for inter-agency data sharing | ⬜ | **★** | |
| 2.4.2 | Secure data transport (TLS, encryption) mandated | ⬜ | | |
| 2.4.3 | API authentication/authorization standards | ⬜ | | |
| 2.4.4 | Audit logging for data exchanges | ⬜ | | |
| **2.5** | **Operational Support** | | | |
| 2.5.1 | Integration documentation available | ⬜ | | URL: ____________ |
| 2.5.2 | Developer sandbox/test environment | ⬜ | | |
| 2.5.3 | Onboarding process defined | ⬜ | | |
| 2.5.4 | Support/helpdesk for integrators | ⬜ | | Contact: ____________ |
| 2.5.5 | SLAs for platform availability | ⬜ | | Uptime: ____% |

**★ = Critical Component for RA/SDA organizations**

### 9.4.2 Critical vs Optional Components by Organization Type

| Component | PDU | RA | SDA |
|-----------|:---:|:--:|:---:|
| 2.2.1 Data exchange platform | Optional | **Critical** | **Critical** |
| 2.3.1 API design standards | Recommended | **Critical** | **Critical** |
| 2.4.1 Trust framework | Optional | **Critical** | **Critical** |
| 2.2.3 API gateway | Optional | Recommended | **Critical** |

### 9.4.3 Pillar Scoring

**Count components marked as available:**

| Category | Available | Total | Percentage |
|----------|-----------|-------|------------|
| Governance & Policy (2.1) | ____/4 | 4 | ____% |
| Technical Infrastructure (2.2) | ____/5 | 5 | ____% |
| Standards & Formats (2.3) | ____/5 | 5 | ____% |
| Security & Trust (2.4) | ____/4 | 4 | ____% |
| Operational Support (2.5) | ____/5 | 5 | ____% |
| **TOTAL** | ____/23 | 23 | ____% |

**Critical Components Check (for RA/SDA):**
- [ ] 2.2.1 Data exchange platform (or 2.2.2 ESB): ⬜ Yes / ⬜ No
- [ ] 2.3.1 API standards: ⬜ Yes / ⬜ No
- [ ] 2.4.1 Trust framework: ⬜ Yes / ⬜ No

**Interoperability Pillar Status:** ⬜ Ready / ⬜ Partial / ⬜ Not Ready

**Notes:**
```
[Document key findings, limitations, or planned developments]


```

---

## 9.5 Pillar 3: Digital Data Infrastructure

*The Digital Data Infrastructure pillar provides the foundation for evidence-based decisions and integrated services through proper data governance, quality management, and shared registries.*

### 9.5.1 Component Checklist

| # | DPI Component | Status | Critical | Evidence/Notes |
|---|---------------|--------|:--------:|----------------|
| **3.1** | **Policy & Governance Framework** | | | |
| 3.1.1 | Data protection legislation enacted | ⬜ | **★** | Law: ____________ |
| 3.1.2 | Data Protection Authority operational | ⬜ | | Authority: ____________ |
| 3.1.3 | Government data governance framework exists | ⬜ | | |
| 3.1.4 | Data classification scheme defined | ⬜ | | |
| 3.1.5 | Open data policy exists | ⬜ | | |
| **3.2** | **Cloud & Infrastructure** | | | |
| 3.2.1 | Government cloud services available | ⬜ | | Provider: ____________ |
| 3.2.2 | Government data centers operational | ⬜ | | Count: ____ |
| 3.2.3 | Disaster recovery capability exists | ⬜ | | RPO: ____ RTO: ____ |
| 3.2.4 | Cloud-first policy in place | ⬜ | | |
| 3.2.5 | Data residency requirements defined | ⬜ | | |
| **3.3** | **Foundational Registries** | | | |
| 3.3.1 | Population/citizen registry accessible | ⬜ | **★** | Coverage: ____% |
| 3.3.2 | Business/company registry accessible | ⬜ | **★** | Coverage: ____% |
| 3.3.3 | Land/property registry digitized | ⬜ | | Coverage: ____% |
| 3.3.4 | Address registry available | ⬜ | | Coverage: ____% |
| 3.3.5 | Registry APIs available for integration | ⬜ | | |
| **3.4** | **Data Standards & Quality** | | | |
| 3.4.1 | National data standards defined | ⬜ | | Standard: ____________ |
| 3.4.2 | Metadata standards mandatory | ⬜ | | |
| 3.4.3 | Data quality framework exists | ⬜ | | |
| 3.4.4 | Master Data Management (MDM) approach defined | ⬜ | | |
| **3.5** | **Analytics & Sharing** | | | |
| 3.5.1 | Open data portal operational | ⬜ | | URL: ____________ |
| 3.5.2 | Government analytics platform available | ⬜ | | |
| 3.5.3 | Data sharing protocols established | ⬜ | | |
| 3.5.4 | Consent management framework exists | ⬜ | | |

**★ = Critical Component for RA/SDA organizations**

### 9.5.2 Critical vs Optional Components by Organization Type

| Component | PDU | RA | SDA |
|-----------|:---:|:--:|:---:|
| 3.1.1 Data protection legislation | **Critical** | **Critical** | **Critical** |
| 3.3.1 Population registry access | Optional | **Critical** | **Critical** |
| 3.3.2 Business registry access | Optional | **Critical** | **Critical** |
| 3.2.1 Government cloud | Optional | Recommended | **Critical** |

### 9.5.3 Pillar Scoring

| Category | Available | Total | Percentage |
|----------|-----------|-------|------------|
| Policy & Governance (3.1) | ____/5 | 5 | ____% |
| Cloud & Infrastructure (3.2) | ____/5 | 5 | ____% |
| Foundational Registries (3.3) | ____/5 | 5 | ____% |
| Data Standards (3.4) | ____/4 | 4 | ____% |
| Analytics & Sharing (3.5) | ____/4 | 4 | ____% |
| **TOTAL** | ____/23 | 23 | ____% |

**Critical Components Check:**
- [ ] 3.1.1 Data protection law (ALL): ⬜ Yes / ⬜ No
- [ ] 3.3.1 Population registry (RA/SDA): ⬜ Yes / ⬜ No / ⬜ N/A
- [ ] 3.3.2 Business registry (RA/SDA): ⬜ Yes / ⬜ No / ⬜ N/A

**Data Infrastructure Pillar Status:** ⬜ Ready / ⬜ Partial / ⬜ Not Ready

**Notes:**
```
[Document key findings, limitations, or planned developments]


```

---

## 9.6 Pillar 4: Digital Access

*The Digital Access pillar determines whether citizens and businesses can actually reach and use digital services. Strong infrastructure means nothing if people cannot access or use it.*

### 9.6.1 Component Checklist

| # | DPI Component | Status | Critical | Evidence/Notes |
|---|---------------|--------|:--------:|----------------|
| **4.1** | **Infrastructure & Connectivity** | | | |
| 4.1.1 | Mobile network coverage > 80% of population | ⬜ | **★** | Coverage: ____% |
| 4.1.2 | 4G/LTE widely available | ⬜ | | Coverage: ____% |
| 4.1.3 | Internet penetration > 60% | ⬜ | | Penetration: ____% |
| 4.1.4 | Broadband available in major towns | ⬜ | | |
| 4.1.5 | Data affordability < 5% monthly income for 1GB | ⬜ | | Cost: ____% |
| **4.2** | **Government Network** | | | |
| 4.2.1 | Government network infrastructure exists | ⬜ | | |
| 4.2.2 | Government offices have reliable internet | ⬜ | **★** | Coverage: ____% |
| 4.2.3 | Secure government network (VPN/intranet) | ⬜ | | |
| **4.3** | **Service Delivery Channels** | | | |
| 4.3.1 | National government services portal exists | ⬜ | **★** | URL: ____________ |
| 4.3.2 | Portal has transactional capabilities | ⬜ | | |
| 4.3.3 | Mobile-responsive design standard | ⬜ | | |
| 4.3.4 | Physical service centers for assisted access | ⬜ | | Count: ____ |
| 4.3.5 | Alternative channels (USSD, SMS) available | ⬜ | | |
| **4.4** | **Accessibility & Inclusion** | | | |
| 4.4.1 | Accessibility standards defined (WCAG compliance) | ⬜ | | |
| 4.4.2 | Multi-language support available | ⬜ | | Languages: ____ |
| 4.4.3 | Assistive technology compatibility | ⬜ | | |
| 4.4.4 | Digital literacy programs exist | ⬜ | | |
| **4.5** | **Security** | | | |
| 4.5.1 | National cybersecurity framework exists | ⬜ | **★** | Framework: ____________ |
| 4.5.2 | Cybersecurity agency/authority operational | ⬜ | | Agency: ____________ |
| 4.5.3 | Security standards for government IT defined | ⬜ | | |
| 4.5.4 | Incident response capability exists | ⬜ | | |

**★ = Critical Component for all organizations**

### 9.6.2 Critical vs Optional Components by Organization Type

| Component | PDU | RA | SDA |
|-----------|:---:|:--:|:---:|
| 4.1.1 Mobile coverage | **Critical** | **Critical** | **Critical** |
| 4.2.2 Government office internet | **Critical** | **Critical** | **Critical** |
| 4.3.1 Service portal | Optional | Recommended | **Critical** |
| 4.5.1 Cybersecurity framework | Recommended | **Critical** | **Critical** |

### 9.6.3 Pillar Scoring

| Category | Available | Total | Percentage |
|----------|-----------|-------|------------|
| Infrastructure (4.1) | ____/5 | 5 | ____% |
| Government Network (4.2) | ____/3 | 3 | ____% |
| Service Channels (4.3) | ____/5 | 5 | ____% |
| Accessibility (4.4) | ____/4 | 4 | ____% |
| Security (4.5) | ____/4 | 4 | ____% |
| **TOTAL** | ____/21 | 21 | ____% |

**Critical Components Check:**
- [ ] 4.1.1 Mobile coverage (ALL): ⬜ Yes / ⬜ No
- [ ] 4.2.2 Government internet (ALL): ⬜ Yes / ⬜ No
- [ ] 4.3.1 Service portal (SDA): ⬜ Yes / ⬜ No / ⬜ N/A
- [ ] 4.5.1 Cybersecurity framework (RA/SDA): ⬜ Yes / ⬜ No / ⬜ N/A

**Digital Access Pillar Status:** ⬜ Ready / ⬜ Partial / ⬜ Not Ready

**Notes:**
```
[Document key findings, limitations, or planned developments]


```

---

## 9.7 Pillar 5: Governance

*Governance is a cross-cutting enabler. Weaknesses in governance will constrain progress in all other domains regardless of technical investment.*

### 9.7.1 Component Checklist

| # | DPI Component | Status | Critical | Evidence/Notes |
|---|---------------|--------|:--------:|----------------|
| **5.1** | **Strategy & Leadership** | | | |
| 5.1.1 | National digital government strategy exists | ⬜ | **★** | Document: ____________ |
| 5.1.2 | Strategy is current (< 3 years old) | ⬜ | | Date: ____________ |
| 5.1.3 | Political commitment at highest level | ⬜ | | |
| 5.1.4 | Implementation roadmap with milestones | ⬜ | | |
| **5.2** | **Institutional Framework** | | | |
| 5.2.1 | Central digital agency/authority exists | ⬜ | **★** | Agency: ____________ |
| 5.2.2 | Agency has enforcement/coordination mandate | ⬜ | | |
| 5.2.3 | Clear roles and responsibilities across government | ⬜ | | |
| 5.2.4 | Inter-agency coordination mechanism operational | ⬜ | | |
| **5.3** | **Legal & Regulatory Framework** | | | |
| 5.3.1 | E-government/digital services law enacted | ⬜ | **★** | Law: ____________ |
| 5.3.2 | Electronic transactions legally valid | ⬜ | | |
| 5.3.3 | Cybercrime legislation enacted | ⬜ | | Law: ____________ |
| 5.3.4 | Procurement regulations support digital | ⬜ | | |
| **5.4** | **Standards & Architecture** | | | |
| 5.4.1 | Government Enterprise Architecture framework | ⬜ | | Framework: ____________ |
| 5.4.2 | Standards body/function exists | ⬜ | | |
| 5.4.3 | Architecture review mandatory for IT projects | ⬜ | | |
| 5.4.4 | Technology standards published | ⬜ | | |
| **5.5** | **Resources & Capacity** | | | |
| 5.5.1 | Dedicated funding mechanism for digital initiatives | ⬜ | | |
| 5.5.2 | Budget allocation for DPI maintenance | ⬜ | | |
| 5.5.3 | Digital skills development program | ⬜ | | |
| 5.5.4 | Change management capability exists | ⬜ | | |
| **5.6** | **Performance Management** | | | |
| 5.6.1 | KPIs for digital government defined | ⬜ | | |
| 5.6.2 | Performance data published | ⬜ | | |
| 5.6.3 | Regular progress reporting mechanism | ⬜ | | |

**★ = Critical Component for all organizations**

### 9.7.2 Critical vs Optional Components by Organization Type

| Component | PDU | RA | SDA |
|-----------|:---:|:--:|:---:|
| 5.1.1 Digital strategy | **Critical** | **Critical** | **Critical** |
| 5.2.1 Central digital agency | Recommended | **Critical** | **Critical** |
| 5.3.1 E-government law | Recommended | **Critical** | **Critical** |
| 5.4.1 EA framework | Optional | Recommended | **Critical** |

### 9.7.3 Pillar Scoring

| Category | Available | Total | Percentage |
|----------|-----------|-------|------------|
| Strategy & Leadership (5.1) | ____/4 | 4 | ____% |
| Institutional Framework (5.2) | ____/4 | 4 | ____% |
| Legal & Regulatory (5.3) | ____/4 | 4 | ____% |
| Standards & Architecture (5.4) | ____/4 | 4 | ____% |
| Resources & Capacity (5.5) | ____/4 | 4 | ____% |
| Performance Management (5.6) | ____/3 | 3 | ____% |
| **TOTAL** | ____/23 | 23 | ____% |

**Critical Components Check:**
- [ ] 5.1.1 Digital strategy (ALL): ⬜ Yes / ⬜ No
- [ ] 5.2.1 Central digital agency (RA/SDA): ⬜ Yes / ⬜ No / ⬜ N/A
- [ ] 5.3.1 E-government law (RA/SDA): ⬜ Yes / ⬜ No / ⬜ N/A

**Governance Pillar Status:** ⬜ Ready / ⬜ Partial / ⬜ Not Ready

**Notes:**
```
[Document key findings, limitations, or planned developments]


```

---

## 9.8 Calculating Overall DPI Readiness

### 9.8.1 Pillar Summary Table

| Pillar | Status | Weight | Raw Score | Weighted Score |
|--------|--------|--------|-----------|----------------|
| Digital Identity | ⬜ Ready / ⬜ Partial / ⬜ Not Ready | 25% | ____% | ____% |
| Interoperability | ⬜ Ready / ⬜ Partial / ⬜ Not Ready | 25% | ____% | ____% |
| Digital Data Infrastructure | ⬜ Ready / ⬜ Partial / ⬜ Not Ready | 20% | ____% | ____% |
| Digital Access | ⬜ Ready / ⬜ Partial / ⬜ Not Ready | 15% | ____% | ____% |
| Governance | ⬜ Ready / ⬜ Partial / ⬜ Not Ready | 15% | ____% | ____% |
| **OVERALL** | | **100%** | | **_____%** |

### 9.8.2 Score Calculation Formula

**Pillar Status to Percentage Conversion:**
- **Ready** = 100%
- **Partial** = 50%
- **Not Ready** = 0%

**Weighted Score Calculation:**
```
Overall Score = (Identity × 0.25) + (Interoperability × 0.25) +
                (Data × 0.20) + (Access × 0.15) + (Governance × 0.15)
```

### 9.8.3 Worked Example

| Pillar | Status | Weight | Raw | Weighted |
|--------|--------|--------|-----|----------|
| Identity | Partial | 25% | 50% | 12.5% |
| Interoperability | Ready | 25% | 100% | 25% |
| Data | Partial | 20% | 50% | 10% |
| Access | Ready | 15% | 100% | 15% |
| Governance | Partial | 15% | 50% | 7.5% |
| **Total** | | | | **70%** |

**Result:** 70% = Level 2 (Developing)

### 9.8.4 Readiness Level Determination

| Score Range | Level | Description | Implementation Guidance |
|-------------|-------|-------------|------------------------|
| **71-100%** | Level 3: Ready | Most DPI components available and operational | Full implementation possible |
| **41-70%** | Level 2: Developing | Some DPI components available but incomplete | Phased approach with mitigation |
| **0-40%** | Level 1: Foundational | Significant gaps in core DPI components | Address critical gaps first |

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DPI READINESS LEVEL IMPLICATIONS                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌────────────────┬─────────────────────────────────────────────────────┐   │
│  │ SCORE RANGE    │ RECOMMENDED ACTION                                  │   │
│  ├────────────────┼─────────────────────────────────────────────────────┤   │
│  │ 71-100%        │ ✅ PROCEED with full RA implementation              │   │
│  │ (Level 3)      │    - Maximize DPI integration                       │   │
│  │                │    - Use national building blocks                   │   │
│  ├────────────────┼─────────────────────────────────────────────────────┤   │
│  │ 41-70%         │ ⚠️ PROCEED WITH CAUTION - phased approach           │   │
│  │ (Level 2)      │    - Prioritize available DPI components            │   │
│  │                │    - Plan workarounds for gaps                      │   │
│  │                │    - Design for future integration                  │   │
│  ├────────────────┼─────────────────────────────────────────────────────┤   │
│  │ 0-40%          │ ❌ ADDRESS GAPS before major investment             │   │
│  │ (Level 1)      │    - Implement standalone solutions                 │   │
│  │                │    - Focus on internal digitization                 │   │
│  │                │    - Advocate for national DPI development          │   │
│  └────────────────┴─────────────────────────────────────────────────────┘   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 9.9 DPI Requirements by Organization Type

### 9.9.1 Full Requirements Matrix

| DPI Component | PDU | RA | SDA |
|--------------|:---:|:--:|:---:|
| **IDENTITY PILLAR** | | | |
| Basic identity verification | Optional | Required | Required |
| Authentication API | Optional | Required | Required |
| Digital signatures | Recommended | Required | Required |
| PKI infrastructure | Optional | Required | Required |
| SSO integration | Optional | Recommended | Required |
| **INTEROPERABILITY PILLAR** | | | |
| Data exchange platform | Optional | Required | Required |
| API standards | Recommended | Required | Required |
| Integration documentation | Recommended | Required | Required |
| Service bus access | Optional | Recommended | Required |
| **DATA PILLAR** | | | |
| Data governance framework | Recommended | Required | Required |
| Data protection compliance | Required | Required | Required |
| Registry access (citizens) | Optional | Required | Required |
| Registry access (businesses) | Optional | Required | Required |
| Government cloud | Optional | Recommended | Required |
| Analytics platform | Optional | Recommended | Required |
| **ACCESS PILLAR** | | | |
| Internet connectivity | Required | Required | Required |
| Government network | Required | Required | Required |
| Cybersecurity framework | Recommended | Required | Required |
| Service portal | Optional | Recommended | Required |
| **GOVERNANCE PILLAR** | | | |
| Digital strategy alignment | Required | Required | Required |
| Legal framework compliance | Required | Required | Required |
| Standards compliance | Recommended | Required | Required |
| EA framework alignment | Optional | Recommended | Required |

**Legend:**
- **Required:** Must be available before implementation
- **Recommended:** Strongly advised; workarounds possible but suboptimal
- **Optional:** Useful but not blocking

### 9.9.2 Minimum Viable DPI Summary

| Organization Type | Must Have (Blocking) | Should Have | Nice to Have |
|-------------------|---------------------|-------------|--------------|
| **PDU** | Basic connectivity, Data protection law, Digital strategy | Document exchange standards, Basic identity | Government cloud, Analytics |
| **RA** | Identity + Auth API, Data exchange platform, Registry access, Digital signatures, Cybersecurity | Government cloud, Analytics, Payment gateway | Advanced integration, AI/ML |
| **SDA** | All RA requirements + SSO, Full interop platform, Enterprise cloud, Multi-channel | Full DPI stack, Real-time exchange | Advanced analytics, AI/ML |

### 9.9.3 Blocking vs Manageable Gaps

**Blocking Gaps (Cannot proceed without mitigation):**
- For RA/SDA: No identity verification mechanism available
- For RA/SDA: No legal basis for digital transactions
- For SDA: No data exchange capability
- For ALL: No basic connectivity

**Manageable Gaps (Can proceed with workarounds):**
- Government cloud not available → Use commercial cloud with compliance
- SSO not available → Implement organization-level identity
- Full interop platform not available → Point-to-point integrations
- Analytics platform not available → Build internal capability

---

## 9.10 Gap Mitigation Strategies

### 9.10.1 Identity Pillar Gaps

**Impact:** Cannot verify citizens digitally, no legal validity for digital transactions

| Gap | Interim Solution | Long-term Action | Risk Level |
|-----|-----------------|------------------|------------|
| No national ID system | Organization-level identity management (username/password) | Plan integration when national ID available | High |
| No authentication API | Build internal authentication service | Design for federation when APIs available | Medium |
| No digital signatures | Use paper-based signing for legal documents | Implement e-signature once PKI available | High for RA/SDA |
| No PKI | Use third-party certificate providers | Migrate to national TSP when available | Medium |

**Design Principle:** Build identity interfaces as abstraction layers that can switch backends when national identity becomes available.

### 9.10.2 Interoperability Pillar Gaps

**Impact:** Data silos, manual data re-entry, no once-only principle

| Gap | Interim Solution | Long-term Action | Risk Level |
|-----|-----------------|------------------|------------|
| No data exchange platform | Point-to-point integrations with key partners | Design for platform migration | High |
| No API standards | Adopt industry standards (REST, OpenAPI) | Align with national standards when published | Medium |
| No trust framework | Bilateral MoUs for data sharing | Formalize under national framework | Medium |
| No service registry | Maintain internal integration catalog | Register services when platform available | Low |

**Design Principle:** Use standard APIs and document all integration points to enable future migration to national platform.

### 9.10.3 Data Infrastructure Gaps

**Impact:** No access to authoritative data, data quality issues, compliance risks

| Gap | Interim Solution | Long-term Action | Risk Level |
|-----|-----------------|------------------|------------|
| No data protection law | Implement international best practices (GDPR-aligned) | Comply when law enacted | High |
| No government cloud | Use commercial cloud with compliance | Migrate to gov cloud when available | Medium |
| No registry access | Collect required data directly from customers | Integrate when registries open APIs | High for RA/SDA |
| No data standards | Adopt international standards (ISO, etc.) | Align with national standards | Low |

**Design Principle:** Implement data management with standards compliance from day one to ease future integration.

### 9.10.4 Digital Access Pillar Gaps

**Impact:** Citizens cannot reach services, digital divide persists

| Gap | Interim Solution | Long-term Action | Risk Level |
|-----|-----------------|------------------|------------|
| Limited internet coverage | Multi-channel approach (USSD, SMS, physical centers) | Expand digital as coverage improves | Medium |
| No service portal | Organization-specific website | Integrate with national portal when available | Low |
| No cybersecurity framework | Implement international standards (ISO 27001) | Align with national framework | Medium |
| Limited accessibility | Focus on mobile-first design | Full accessibility when standards enforced | Low |

**Design Principle:** Design for the lowest common denominator channel while enabling progressive enhancement.

### 9.10.5 Governance Pillar Gaps

**Impact:** No coordination, conflicting standards, unsustainable investments

| Gap | Interim Solution | Long-term Action | Risk Level |
|-----|-----------------|------------------|------------|
| No digital strategy | Align with sector strategy and international best practices | Align with national strategy when published | Medium |
| No central agency | Establish internal EA governance | Participate in national governance when formed | Low |
| No legal framework | Document legal requirements, plan for compliance | Implement when laws enacted | High for RA/SDA |
| No standards body | Adopt international/industry standards | Comply with national standards when defined | Low |

**Design Principle:** Participate in national digital governance discussions and position organization as a positive contributor.

---

## 9.11 DPI Assessment Summary Template

### 9.11.1 Consolidated Assessment Template

```
═══════════════════════════════════════════════════════════════════════════════
                    DPI READINESS ASSESSMENT SUMMARY
═══════════════════════════════════════════════════════════════════════════════

ASSESSMENT DETAILS
─────────────────────────────────────────────────────────────────────────────
Country: _________________________________________________________________
Assessment Date: _________________________________________________________
Assessment Team: _________________________________________________________

ORGANIZATION CONTEXT (from Classification - Section 8)
─────────────────────────────────────────────────────────────────────────────
Organization Name: _______________________________________________________
Organization Type: [ ] PDU  [ ] RA  [ ] SDA
Classification Date: _____________________________________________________

DPI READINESS SUMMARY
─────────────────────────────────────────────────────────────────────────────

┌─────────────────────┬────────┬──────────┬────────────┬───────────────────┐
│ Pillar              │ Status │ Weight   │ Score      │ Critical Met?     │
├─────────────────────┼────────┼──────────┼────────────┼───────────────────┤
│ Digital Identity    │ R/P/N  │ 25%      │ ____%      │ [ ] Yes  [ ] No   │
│ Interoperability    │ R/P/N  │ 25%      │ ____%      │ [ ] Yes  [ ] No   │
│ Data Infrastructure │ R/P/N  │ 20%      │ ____%      │ [ ] Yes  [ ] No   │
│ Digital Access      │ R/P/N  │ 15%      │ ____%      │ [ ] Yes  [ ] No   │
│ Governance          │ R/P/N  │ 15%      │ ____%      │ [ ] Yes  [ ] No   │
├─────────────────────┼────────┼──────────┼────────────┼───────────────────┤
│ OVERALL             │        │ 100%     │ ____%      │                   │
└─────────────────────┴────────┴──────────┴────────────┴───────────────────┘

READINESS LEVEL: [ ] Level 1 (Foundational)
                 [ ] Level 2 (Developing)
                 [ ] Level 3 (Ready)

CRITICAL GAPS IDENTIFIED
─────────────────────────────────────────────────────────────────────────────
┌───┬────────────────────────┬─────────┬────────────┬───────────────────────┐
│ # │ Gap                    │ Pillar  │ Blocking?  │ Mitigation Strategy   │
├───┼────────────────────────┼─────────┼────────────┼───────────────────────┤
│ 1 │                        │         │ [ ] Yes    │                       │
│ 2 │                        │         │ [ ] Yes    │                       │
│ 3 │                        │         │ [ ] Yes    │                       │
│ 4 │                        │         │ [ ] Yes    │                       │
│ 5 │                        │         │ [ ] Yes    │                       │
└───┴────────────────────────┴─────────┴────────────┴───────────────────────┘

COMBINED DECISION (Classification + DPI)
─────────────────────────────────────────────────────────────────────────────

Organization Type: _____________    DPI Level: _____________

┌─────────────────────────────────────────────────────────────────────────────┐
│ DECISION MATRIX RESULT                                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  [ ] ✅ PROCEED - Full implementation feasible                              │
│       Rationale: ___________________________________________________        │
│                                                                             │
│  [ ] ⚠️ PROCEED WITH MITIGATION - Phased approach required                  │
│       Key mitigations: _____________________________________________        │
│       Timeline impact: _____________________________________________        │
│                                                                             │
│  [ ] ❌ DELAY - Critical gaps must be addressed first                       │
│       Blocking gaps: _______________________________________________        │
│       Required actions: ____________________________________________        │
│       Estimated delay: _____________________________________________        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

NEXT STEPS
─────────────────────────────────────────────────────────────────────────────
┌───┬────────────────────────────────────────────┬──────────┬────────────────┐
│ # │ Action                                     │ Owner    │ Due Date       │
├───┼────────────────────────────────────────────┼──────────┼────────────────┤
│ 1 │                                            │          │                │
│ 2 │                                            │          │                │
│ 3 │                                            │          │                │
│ 4 │                                            │          │                │
└───┴────────────────────────────────────────────┴──────────┴────────────────┘

APPROVAL
─────────────────────────────────────────────────────────────────────────────
Assessed By: _________________________  Date: _______________  Sign: _______
Reviewed By: _________________________  Date: _______________  Sign: _______
Approved By: _________________________  Date: _______________  Sign: _______

═══════════════════════════════════════════════════════════════════════════════
```

### 9.11.2 Quick Reference Card

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DPI READINESS QUICK REFERENCE                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  OVERALL SCORE: _____% → LEVEL: ___                                         │
│                                                                              │
│  PILLAR STATUS SUMMARY                                                       │
│  ─────────────────────                                                       │
│  Identity:        [ ] Ready [ ] Partial [ ] Not Ready   Critical: [ ]Y [ ]N │
│  Interoperability:[ ] Ready [ ] Partial [ ] Not Ready   Critical: [ ]Y [ ]N │
│  Data:            [ ] Ready [ ] Partial [ ] Not Ready   Critical: [ ]Y [ ]N │
│  Access:          [ ] Ready [ ] Partial [ ] Not Ready   Critical: [ ]Y [ ]N │
│  Governance:      [ ] Ready [ ] Partial [ ] Not Ready   Critical: [ ]Y [ ]N │
│                                                                              │
│  CRITICAL BLOCKERS FOR YOUR ORG TYPE (Stop if any "Not Ready"):             │
│  ─────────────────────────────────────────────────────────────               │
│  For PDU:  [ ] Basic connectivity [ ] Data protection law                    │
│  For RA:   [ ] Identity auth API  [ ] Data exchange  [ ] Legal framework    │
│  For SDA:  [ ] All RA blockers    [ ] SSO           [ ] Full interop        │
│                                                                              │
│  PROCEED DECISION:                                                           │
│  ─────────────────                                                           │
│  [ ] ✅ Proceed with full implementation                                     │
│  [ ] ⚠️ Proceed with mitigation strategies                                  │
│  [ ] ❌ Address critical gaps before proceeding                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 9.12 Transition to DISCOVER Phase

### 9.12.1 How to Use Results in DISCOVER

Upon completing both Classification (Section 8) and DPI Assessment (Section 9), you have the key inputs for the DISCOVER phase:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│            ENTRY POINT TOOLS → DISCOVER PHASE TRANSITION                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  INPUTS FROM ENTRY POINT TOOLS                                              │
│  ─────────────────────────────────                                           │
│                                                                              │
│  From Classification (Section 8):                                            │
│  ├── Organization Type (PDU / RA / SDA)                                     │
│  ├── Special Case/Hybrid Notes (if any)                                     │
│  ├── Classification Confidence Level                                        │
│  └── Classification Documentation                                           │
│                                                                              │
│  From DPI Assessment (Section 9):                                            │
│  ├── DPI Readiness Level (1 / 2 / 3)                                        │
│  ├── Pillar-by-Pillar Status                                                │
│  ├── Critical Gap List                                                      │
│  ├── Mitigation Strategies                                                  │
│  └── Proceed/Mitigate/Delay Decision                                        │
│                                                                              │
│                              │                                               │
│                              ▼                                               │
│                                                                              │
│  DISCOVER PHASE ACTIVITIES (Section 10)                                     │
│  ─────────────────────────────────────────                                   │
│                                                                              │
│  1. CONFIRM Reference Architecture Selection                                 │
│     └── Use classification result to select PDU/RA/SDA RA                   │
│                                                                              │
│  2. DOCUMENT Ecosystem Context                                               │
│     └── Map organization's position relative to DPI and peers               │
│                                                                              │
│  3. ESTABLISH Implementation Approach                                        │
│     └── Based on DPI level: Full / Phased / Deferred                        │
│                                                                              │
│  4. IDENTIFY Key Stakeholders                                                │
│     └── Include DPI providers in stakeholder map                            │
│                                                                              │
│  5. PREPARE for ASSESS Phase                                                 │
│     └── Scope AS-IS documentation based on RA structure                     │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 9.12.2 Decision: Proceed vs Address Gaps

**Decision Matrix (Classification + DPI Combined):**

| Classification | DPI Level 1 | DPI Level 2 | DPI Level 3 |
|---------------|-------------|-------------|-------------|
| **PDU** | ✅ Proceed | ✅ Proceed | ✅ Proceed |
| **RA** | ⚠️ Mitigate | ✅ Proceed | ✅ Proceed |
| **SDA** | ❌ Delay/Major Mitigate | ⚠️ Mitigate | ✅ Proceed |

**Legend:**
- ✅ **Proceed**: Move to DISCOVER Phase immediately
- ⚠️ **Mitigate**: Move to DISCOVER with documented mitigation plan
- ❌ **Delay/Major Mitigate**: Address critical gaps before DISCOVER, or prepare extensive workaround plan

### 9.12.3 Documentation Required Before DISCOVER

Before proceeding to DISCOVER Phase (Section 10), ensure you have:

| Document | From Section | Status |
|----------|--------------|--------|
| Organization Classification Record | 8.6.3 | ⬜ Complete |
| Classification Questionnaire (if used) | 8.4.2 | ⬜ Complete |
| DPI Pillar Checklists (all 5) | 9.3-9.7 | ⬜ Complete |
| DPI Readiness Summary | 9.11.1 | ⬜ Complete |
| Gap Mitigation Plan (if applicable) | 9.10 | ⬜ Complete / ⬜ N/A |
| Combined Proceed Decision | 9.12.2 | ⬜ Complete |

### 9.12.4 Handoff to DISCOVER Phase

**Summary Statement to Include in DISCOVER:**

```
ENTRY POINT TOOLS SUMMARY
════════════════════════════════════════════════════════════════════════════

Organization: [Name]
Classification: [PDU / RA / SDA] (Confidence: [High/Medium/Low])
DPI Readiness: Level [1/2/3] (Overall Score: __%)
Combined Decision: [Proceed / Mitigate / Delay]

Key Findings:
• [Classification rationale in 1-2 sentences]
• [DPI status summary in 1-2 sentences]
• [Key gaps or strengths in 1-2 sentences]

Reference Architecture Selected: [PDU RA / RA RA / SDA RA] (GEATDM-WP_-T__)

Implementation Approach:
• [Full / Phased / Foundation-first based on DPI level]
• [Key mitigation required, if any]

Approved by: _____________ Date: _____________
════════════════════════════════════════════════════════════════════════════
```

---

═══════════════════════════════════════════════════════════════════════════════
# APPENDIX: ENTRY POINT TOOLS QUICK REFERENCE
═══════════════════════════════════════════════════════════════════════════════

## Appendix A: Classification Quick Reference Card

```
┌─────────────────────────────────────────────────────────────────────────────┐
│              ORGANIZATION CLASSIFICATION QUICK REFERENCE                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ORGANIZATION TYPE SUMMARY                                                   │
│  ═════════════════════════                                                   │
│                                                                              │
│  ┌──────────┬──────────────────────┬──────────────────┬──────────────────┐  │
│  │ Aspect   │ PDU                  │ RA               │ SDA              │  │
│  ├──────────┼──────────────────────┼──────────────────┼──────────────────┤  │
│  │ Focus    │ Policy development   │ Regulation       │ Service at scale │  │
│  │ Customers│ Stakeholders         │ Regulated entities│ Mass public     │  │
│  │ Trans/yr │ <10K                 │ 10K-100K         │ >100K            │  │
│  │ Example  │ Ministry             │ Licensing Board  │ Tax Authority    │  │
│  │ DPI Need │ Low                  │ Medium           │ High             │  │
│  └──────────┴──────────────────────┴──────────────────┴──────────────────┘  │
│                                                                              │
│  QUICK DECISION TREE                                                         │
│  ═══════════════════                                                         │
│                                                                              │
│  Policy focus + No licensing ─────────────────────────────────► PDU         │
│  Policy focus + Licensing + <100K transactions ───────────────► RA          │
│  Regulatory focus + <100K transactions ───────────────────────► RA          │
│  Any focus + >100K transactions + 3+ SDA indicators ─────────► SDA         │
│                                                                              │
│  SDA INDICATORS (need 3+):                                                   │
│  □ Manages ongoing customer accounts                                        │
│  □ Collects revenue at scale                                                │
│  □ Mass enforcement operations                                              │
│  □ Risk-based audit selection                                               │
│  □ Real-time processing required                                            │
│  □ Processes refunds/credits                                                │
│  □ Data warehouse with analytics                                            │
│                                                                              │
│  KEY QUESTIONS                                                               │
│  ═════════════                                                               │
│  1. Does it MAKE policy or IMPLEMENT policy?                                │
│  2. Does it issue LICENSES/PERMITS?                                         │
│  3. Does it handle MILLIONS of transactions?                                │
│  4. Does it manage CUSTOMER ACCOUNTS?                                       │
│  5. Does it use RISK-BASED enforcement?                                     │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Appendix B: DPI Quick Reference Card

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DPI READINESS QUICK REFERENCE                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  FIVE PILLARS WITH WEIGHTS                                                   │
│  ═════════════════════════                                                   │
│                                                                              │
│  Digital Identity      ████████████████████████████████ 25%                 │
│  Interoperability      ████████████████████████████████ 25%                 │
│  Data Infrastructure   ██████████████████████████ 20%                       │
│  Digital Access        ██████████████████ 15%                               │
│  Governance            ██████████████████ 15%                               │
│                                                                              │
│  READINESS LEVELS                                                            │
│  ═════════════════                                                           │
│                                                                              │
│  Level 3 (71-100%): Ready                                                   │
│  └─ Full implementation possible                                            │
│                                                                              │
│  Level 2 (41-70%): Developing                                               │
│  └─ Phased approach with mitigation                                         │
│                                                                              │
│  Level 1 (0-40%): Foundational                                              │
│  └─ Address critical gaps first                                             │
│                                                                              │
│  SCORE CALCULATION                                                           │
│  ═════════════════                                                           │
│                                                                              │
│  Status Values: Ready=100% | Partial=50% | Not Ready=0%                     │
│                                                                              │
│  Overall = (Identity × 0.25) + (Interop × 0.25) +                           │
│            (Data × 0.20) + (Access × 0.15) + (Governance × 0.15)            │
│                                                                              │
│  CRITICAL COMPONENTS BY ORG TYPE                                             │
│  ═══════════════════════════════                                             │
│                                                                              │
│  PDU:  Data protection law, Basic connectivity                              │
│  RA:   + Identity auth API, Data exchange platform, Digital signatures      │
│  SDA:  + SSO integration, Full interop access, Enterprise infrastructure    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Appendix C: Classification-to-DPI Cross-Reference

### C.1 Which DPI Components Required by Organization Type

```
┌─────────────────────────────────────────────────────────────────────────────┐
│          DPI COMPONENT REQUIREMENTS BY ORGANIZATION TYPE                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Legend: ■ Required  ◐ Recommended  ○ Optional                              │
│                                                                              │
│  ┌────────────────────────────────┬─────────┬─────────┬─────────┐          │
│  │ DPI Component                  │   PDU   │   RA    │   SDA   │          │
│  ├────────────────────────────────┼─────────┼─────────┼─────────┤          │
│  │ IDENTITY                       │         │         │         │          │
│  │ ├─ National ID access          │    ○    │    ■    │    ■    │          │
│  │ ├─ Authentication API          │    ○    │    ■    │    ■    │          │
│  │ ├─ Digital signatures          │    ◐    │    ■    │    ■    │          │
│  │ └─ SSO integration             │    ○    │    ◐    │    ■    │          │
│  ├────────────────────────────────┼─────────┼─────────┼─────────┤          │
│  │ INTEROPERABILITY               │         │         │         │          │
│  │ ├─ Data exchange platform      │    ○    │    ■    │    ■    │          │
│  │ ├─ API standards               │    ◐    │    ■    │    ■    │          │
│  │ └─ Service bus                 │    ○    │    ◐    │    ■    │          │
│  ├────────────────────────────────┼─────────┼─────────┼─────────┤          │
│  │ DATA                           │         │         │         │          │
│  │ ├─ Data protection law         │    ■    │    ■    │    ■    │          │
│  │ ├─ Population registry         │    ○    │    ■    │    ■    │          │
│  │ ├─ Business registry           │    ○    │    ■    │    ■    │          │
│  │ └─ Government cloud            │    ○    │    ◐    │    ■    │          │
│  ├────────────────────────────────┼─────────┼─────────┼─────────┤          │
│  │ ACCESS                         │         │         │         │          │
│  │ ├─ Basic connectivity          │    ■    │    ■    │    ■    │          │
│  │ ├─ Service portal              │    ○    │    ◐    │    ■    │          │
│  │ └─ Cybersecurity framework     │    ◐    │    ■    │    ■    │          │
│  ├────────────────────────────────┼─────────┼─────────┼─────────┤          │
│  │ GOVERNANCE                     │         │         │         │          │
│  │ ├─ Digital strategy            │    ■    │    ■    │    ■    │          │
│  │ ├─ E-government law            │    ◐    │    ■    │    ■    │          │
│  │ └─ EA framework                │    ○    │    ◐    │    ■    │          │
│  └────────────────────────────────┴─────────┴─────────┴─────────┘          │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### C.2 Combined Readiness Decision Matrix

```
┌─────────────────────────────────────────────────────────────────────────────┐
│              COMBINED CLASSIFICATION + DPI DECISION MATRIX                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                     DPI READINESS LEVEL                                      │
│                     ─────────────────────────────────────                    │
│                     Level 1        Level 2        Level 3                    │
│                     (0-40%)        (41-70%)       (71-100%)                  │
│  ┌─────────────────┬──────────────┬──────────────┬──────────────┐           │
│  │                 │              │              │              │           │
│  │      PDU        │   ✅ Go      │   ✅ Go      │   ✅ Go      │           │
│  │                 │              │              │              │           │
│  ├─────────────────┼──────────────┼──────────────┼──────────────┤           │
│  │                 │  ⚠️ Go with   │              │              │           │
│  │      RA         │  mitigation  │   ✅ Go      │   ✅ Go      │           │
│  │                 │              │              │              │           │
│  ├─────────────────┼──────────────┼──────────────┼──────────────┤           │
│  │                 │  ❌ Address   │  ⚠️ Go with   │              │           │
│  │      SDA        │  gaps first  │  mitigation  │   ✅ Go      │           │
│  │                 │              │              │              │           │
│  └─────────────────┴──────────────┴──────────────┴──────────────┘           │
│                                                                              │
│  C                                                                           │
│  L  LEGEND:                                                                  │
│  A  ─────────                                                                │
│  S  ✅ Go         = Proceed to DISCOVER Phase immediately                   │
│  S  ⚠️ Mitigate   = Proceed with documented mitigation plan                 │
│  I  ❌ Address    = Resolve critical gaps before proceeding                 │
│  F                                                                           │
│  I  RECOMMENDATIONS:                                                         │
│  C  ─────────────────                                                        │
│  A  • PDU + Level 1: Full proceed, minimal DPI dependency                   │
│  T  • RA + Level 1: Point-to-point integrations, manual identity            │
│  I  • RA + Level 2: Hybrid approach, prioritize available DPI               │
│  O  • SDA + Level 1: Major risk - delay or extensive workarounds            │
│  N  • SDA + Level 2: Phased rollout, critical paths first                   │
│     • Any + Level 3: Full DPI integration from start                        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### C.3 Implementation Approach by Combined Result

| Classification | DPI Level | Implementation Approach |
|---------------|-----------|------------------------|
| PDU + Level 1 | Full proceed | Standard PDU RA, minimal external integration |
| PDU + Level 2/3 | Full proceed | Standard PDU RA, leverage available DPI |
| RA + Level 1 | Mitigate | RA RA with internal identity, P2P integration |
| RA + Level 2 | Conditional proceed | RA RA with hybrid integration approach |
| RA + Level 3 | Full proceed | Standard RA RA with full DPI integration |
| SDA + Level 1 | Delay or major mitigate | Address identity + interop gaps first |
| SDA + Level 2 | Mitigate | Phased SDA RA, critical paths first |
| SDA + Level 3 | Full proceed | Full SDA RA with enterprise DPI integration |

---

---

## DOCUMENT REFERENCES

| Document | ID | Relationship |
|----------|-----|--------------|
| Method Framework | GEATDM-WP5-T581 | Parent (Sections 1-7) |
| Classification Guide (Source) | GEATDM-WP5-T51 | Integrated into Section 8 |
| DPI Checklist (Source) | GEATDM-WP5-T52 | Integrated into Section 9 |
| DISCOVER Phase Guide | GEATDM-WP5-T53 | Next in sequence (Section 10) |
| PDU Reference Architecture | GEATDM-WP2-T25 | Used when PDU classified |
| RA Reference Architecture | GEATDM-WP3-T35 | Used when RA classified |
| SDA Reference Architecture | GEATDM-WP4-T47 | Used when SDA classified |
| Country DPI Taxonomy | External | Aligned DPI assessment approach |

---

*This document is part of the Generic EA Target Architecture Development Method (GEATDM), based on the GovStack Public Administration Ecosystem Reference Architecture (PAERA). For more information: https://paera.govstack.global/*

---

*End of Entry Point Tools Document*


═══════════════════════════════════════════════════════════════════════════════
# PART III: DISCOVER & ASSESS (Sections 10-11)
═══════════════════════════════════════════════════════════════════════════════


# INTRODUCTION TO DISCOVER & ASSESS PHASES

## Purpose of This Document

This document provides detailed guidance for the **DISCOVER** and **ASSESS** phases of the GEATDM Application Method. These are the first two operational phases focused on "understanding":

- **DISCOVER**: Understanding *what you are* (organization classification) and *which target to aim for* (Reference Architecture selection)
- **ASSESS**: Understanding *where you are now* (AS-IS documentation) and *what needs to change* (gap identification)

Together, these phases establish the foundation for all subsequent transformation activities.

## Position in the GEATDM Method

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        GEATDM APPLICATION METHOD                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────┐      │
│  │                    ENTRY POINT TOOLS                               │      │
│  │   Section 8: Classification    Section 9: DPI Readiness           │      │
│  └───────────────────────────────────────────────────────────────────┘      │
│                                    │                                         │
│                                    ▼                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗      │
│  ║                    THIS DOCUMENT                                   ║      │
│  ║  ┌─────────────────────┐    ┌─────────────────────┐               ║      │
│  ║  │ Section 10:         │    │ Section 11:         │               ║      │
│  ║  │ DISCOVER Phase      │───►│ ASSESS Phase        │               ║      │
│  ║  │                     │    │                     │               ║      │
│  ║  │ • Confirm class     │    │ • Document AS-IS    │               ║      │
│  ║  │ • Verify DPI        │    │ • Compare to RA     │               ║      │
│  ║  │ • Select RA         │    │ • Identify gaps     │               ║      │
│  ║  └─────────────────────┘    └─────────────────────┘               ║      │
│  ╚═══════════════════════════════════════════════════════════════════╝      │
│                                    │                                         │
│                                    ▼                                         │
│  ┌───────────────────────────────────────────────────────────────────┐      │
│  │               DESIGN & PLANNING PHASES                             │      │
│  │   Section 12: ADAPT    Section 13: PLAN    Section 14: EXECUTE    │      │
│  └───────────────────────────────────────────────────────────────────┘      │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Relationship to Entry Point Tools (Sections 8-9)

The Entry Point Tools provide preliminary assessments that the DISCOVER phase confirms and formalizes:

| Entry Point Tool | What It Provides | DISCOVER Phase Action |
|------------------|------------------|----------------------|
| Classification Guide (Section 8) | Preliminary organization type (PDU/RA/SDA) | Validate with stakeholders, confirm formally |
| DPI Checklist (Section 9) | DPI readiness level (1/2/3) | Verify status, update if changed, confirm implications |

**Critical Transition Point:** If Entry Point Tools have not been completed, return to Sections 8-9 before proceeding with DISCOVER.

## How to Use This Document

**Sequential Use:** Work through DISCOVER completely before starting ASSESS. Each phase builds on the previous.

**Template-Driven:** Use the provided templates (Section 10.9 and 11.14) as working documents.

**Cross-Reference:** Refer to Reference Architecture documents (WP2-T25 for PDU, WP3-T35 for RA, WP4-T47 for SDA) when indicated.

---

═══════════════════════════════════════════════════════════════════════════════
# SECTION 10: DISCOVER PHASE GUIDE
═══════════════════════════════════════════════════════════════════════════════

## 10.1 Phase Overview

### 10.1.1 Purpose of DISCOVER Phase

The DISCOVER phase is the **first operational phase** in the GEATDM method. Its purpose is to establish the starting conditions for a successful digital transformation journey by answering three critical questions:

1. **What type of organization are we?** (PDU, RA, or SDA - confirming Entry Point classification)
2. **Is the national DPI infrastructure ready to support our transformation?** (Verifying Entry Point assessment)
3. **Which Reference Architecture should guide our target state?** (Formal selection and documentation)

### 10.1.2 Why DISCOVER Matters

Getting DISCOVER right is essential because decisions made here cascade through all subsequent phases:

| DISCOVER Decision | Impact on Later Phases |
|-------------------|----------------------|
| Organization Classification | Determines complexity of RA, scope of ASSESS, scale of transformation |
| DPI Readiness Level | Affects implementation approach, integration requirements, timeline |
| RA Selection | Shapes entire target architecture, defines capability requirements |
| Implementation Approach | Full/Phased/Basic determines PLAN phase structure |

**Error Cost:** An incorrect classification leads to selecting the wrong Reference Architecture, which results in either over-engineering (wasting resources) or under-engineering (creating capability gaps).

### 10.1.3 Inputs from Entry Point Tools

**From Section 8 (Classification Guide):**
| Input | Description |
|-------|-------------|
| Preliminary Classification | PDU, RA, or SDA determination |
| Questionnaire Results | Scored questionnaire with point totals |
| Decision Tree Path | Which questions led to the classification |
| Special Case Notes | Any hybrid or special patterns identified |
| Confidence Level | High, Medium, or Low based on score difference |

**From Section 9 (DPI Checklist):**
| Input | Description |
|-------|-------------|
| Pillar Assessments | Status for each of the 5 DPI pillars |
| Overall DPI Score | Weighted percentage score |
| DPI Readiness Level | Level 1 (Foundational), 2 (Developing), or 3 (Ready) |
| Critical Gaps List | DPI components that are missing or inadequate |
| Mitigation Strategies | Proposed workarounds for DPI gaps |

### 10.1.4 Outputs to ASSESS Phase

| Output | Description | Format |
|--------|-------------|--------|
| **Confirmed Classification** | Validated organization type with stakeholder sign-off | Classification Record |
| **Verified DPI Status** | Confirmed DPI readiness with any updates | Updated DPI Assessment |
| **Selected Reference Architecture** | Formal selection with rationale | RA Selection Decision |
| **Implementation Approach** | Full, Phased, or Basic tier | Documented in DISCOVER Summary |
| **DISCOVER Summary** | Consolidated findings with approval | Completed template |
| **Proceed Decision** | Go/No-Go for ASSESS phase | Decision record |

### 10.1.5 Expected Duration

| Organization Complexity | Typical Duration | Notes |
|------------------------|------------------|-------|
| Simple (clear mandate, PDU) | 1 week | Entry Point results are straightforward |
| Moderate (RA with standard functions) | 2 weeks | Some stakeholder discussion needed |
| Complex (SDA or hybrid functions) | 2-3 weeks | Multiple workshops, validation sessions |

**Note:** Duration includes time for stakeholder consultation and validation. Do not rush DISCOVER—errors here are costly to correct later.

### 10.1.6 Key Participants

| Role | Responsibility | Involvement |
|------|----------------|-------------|
| **EA Lead / Project Lead** | Drives the DISCOVER process, facilitates workshops | Full-time |
| **Senior Management** | Validates classification, approves RA selection | Decision points |
| **Business Unit Heads** | Provide information on functions, processes, volumes | Interviews, validation |
| **IT Management** | Assess current systems, verify DPI integration status | Technical input |
| **Strategy/Planning** | Align with organizational strategy | Context input |
| **National Digital Agency Rep** | Confirm DPI status and availability | DPI verification |
| **External Advisor** (optional) | Independent validation of classification | Quality assurance |

### 10.1.7 DISCOVER in Context

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        GEATDM APPLICATION METHOD                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ╔═══════════╗    ┌───────────┐    ┌───────────┐    ┌───────────┐    ┌───────────┐  │
│  ║ DISCOVER  ║ →  │  ASSESS   │ →  │   ADAPT   │ →  │   PLAN    │ →  │  EXECUTE  │  │
│  ║ (Phase 1) ║    │ (Phase 2) │    │ (Phase 3) │    │ (Phase 4) │    │ (Phase 5) │  │
│  ╚═══════════╝    └───────────┘    └───────────┘    └───────────┘    └───────────┘  │
│                                                                              │
│  ▲ YOU ARE HERE                                                              │
│                                                                              │
│  Confirm class     Document         Tailor RA        Develop         Implement    │
│  Verify DPI        AS-IS            to context       roadmap         & govern     │
│  Select RA         Identify gaps                     Define phases               │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 10.2 DISCOVER Process Flow

### 10.2.1 Visual Process Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           DISCOVER PHASE                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  PREREQUISITE CHECK: Entry Point Tools Complete?                     │   │
│  │  ├─ Classification Guide (Section 8) completed?                      │   │
│  │  └─ DPI Checklist (Section 9) completed?                             │   │
│  │  → If NO: Return to Entry Point Tools before proceeding              │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 1: CONFIRM ORGANIZATION CLASSIFICATION                                │
│  ├─ 1.1 Review Entry Point Tools classification result                      │
│  ├─ 1.2 Validate classification with key stakeholders                       │
│  ├─ 1.3 Handle any classification disputes                                  │
│  └─ 1.4 Document final confirmed classification                             │
│           │                                                                  │
│           ▼                                                                  │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  DECISION POINT 1 (DP1): Is classification confirmed?                │   │
│  │  ├─ YES → Proceed to Step 2                                          │   │
│  │  └─ NO  → Revisit Entry Point Tools, consult additional stakeholders │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 2: CONFIRM DPI READINESS                                              │
│  ├─ 2.1 Review Entry Point Tools DPI assessment result                      │
│  ├─ 2.2 Verify current status with national digital agency                  │
│  ├─ 2.3 Identify any changes since initial assessment                       │
│  ├─ 2.4 Confirm critical gaps and mitigation approach                       │
│  └─ 2.5 Document verified DPI status and constraints                        │
│           │                                                                  │
│           ▼                                                                  │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  DECISION POINT 2 (DP2): Is DPI adequate for organization type?      │   │
│  │  ├─ Ready (≥71%)        → Proceed with full RA implementation        │   │
│  │  ├─ Developing (41-70%) → Plan phased approach with mitigation       │   │
│  │  └─ Foundational (<41%) → Address critical gaps first or simplify    │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 3: SELECT REFERENCE ARCHITECTURE                                      │
│  ├─ 3.1 Match organization type to appropriate RA                           │
│  ├─ 3.2 Determine implementation approach (Full/Phased/Basic)               │
│  ├─ 3.3 Verify minimum DPI requirements for selected RA                     │
│  ├─ 3.4 Confirm RA selection with stakeholders                              │
│  └─ 3.5 Note anticipated customization needs for ADAPT phase                │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 4: DOCUMENT DISCOVER OUTPUTS                                          │
│  ├─ 4.1 Complete DISCOVER Summary template                                  │
│  ├─ 4.2 Compile supporting evidence                                         │
│  ├─ 4.3 Obtain stakeholder review and sign-off                              │
│  └─ 4.4 Decide: Proceed to ASSESS or address gaps first                     │
│           │                                                                  │
│           ▼                                                                  │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  DECISION POINT 3 (DP3): Proceed to ASSESS phase?                    │   │
│  │  ├─ YES → Initiate ASSESS phase with selected RA as template         │   │
│  │  └─ NO  → Define gap remediation plan, schedule re-assessment        │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 10.2.2 Activity Summary

| Step | Activities | Duration | Key Output |
|------|-----------|----------|------------|
| **Prerequisite** | Verify Entry Point Tools completion | 0.5 day | Confirmation |
| **Step 1** | Confirm Organization Classification | 2-4 days | Classification Confirmed |
| **Step 2** | Confirm DPI Readiness | 2-4 days | DPI Status Verified |
| **Step 3** | Select Reference Architecture | 1-2 days | RA Selection Decision |
| **Step 4** | Document & Sign-off | 1-2 days | DISCOVER Summary Approved |

### 10.2.3 Decision Points Summary

| ID | Decision Point | Criteria | Outcomes |
|----|---------------|----------|----------|
| **DP1** | Classification Confirmed? | Stakeholders agree, confidence is High or Medium | YES: Proceed / NO: Revisit |
| **DP2** | DPI Adequate? | Score meets minimum for org type, critical components available | Level determines approach |
| **DP3** | Proceed to ASSESS? | Classification confirmed, RA selected, DPI gaps accepted or addressed | YES: Start ASSESS / NO: Remediate |

---

## 10.3 Step 1: Confirm Organization Classification

### 10.3.1 Purpose

Validate and formalize the organization classification determined during Entry Point Tools. This step transforms a preliminary assessment into a confirmed, stakeholder-approved decision that will guide Reference Architecture selection.

### 10.3.2 Activities

#### Activity 1.1: Review Entry Point Tools Classification Result

**What to Review:**
- Classification Questionnaire scores (PDU: ___, RA: ___, SDA: ___)
- Decision Tree path followed
- Confidence level (High/Medium/Low based on score difference)
- Any special case or hybrid patterns identified
- Notes and rationale documented

**Review Checklist:**
| Item | Status | Notes |
|------|--------|-------|
| Classification Questionnaire completed | ⬜ | |
| Decision Tree applied | ⬜ | |
| Scores calculated correctly | ⬜ | |
| Special cases reviewed | ⬜ | |
| Documentation complete | ⬜ | |

#### Activity 1.2: Validate Classification with Key Stakeholders

**Validation Workshop Agenda:**
1. Present Entry Point Tools findings (15 min)
2. Review questionnaire results and scoring (20 min)
3. Walk through decision tree logic (15 min)
4. Discuss any concerns or disagreements (30 min)
5. Confirm or adjust classification (15 min)
6. Document decisions and rationale (15 min)

**Key Stakeholders to Include:**
- Senior Management (decision authority)
- Business Unit Heads (functional knowledge)
- IT Leadership (technical perspective)
- Strategy/Planning (strategic alignment)

**Validation Questions:**
| Question | Purpose |
|----------|---------|
| Does the primary function description match our mandate? | Validate function classification |
| Are the transaction volume estimates accurate? | Verify scale assessment |
| Do we have capabilities not captured in the assessment? | Identify gaps in assessment |
| Are there planned changes that affect classification? | Future-proof the decision |

#### Activity 1.3: Handle Classification Disputes

**If stakeholders disagree on classification:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    CLASSIFICATION DISPUTE RESOLUTION                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  DISPUTE DETECTED                                                            │
│       │                                                                      │
│       ▼                                                                      │
│  ┌───────────────────────────────────────────────────────────────────┐      │
│  │ 1. IDENTIFY THE SPECIFIC DISAGREEMENT                             │      │
│  │    • Which organization type is disputed?                         │      │
│  │    • What evidence supports each position?                        │      │
│  │    • Are there factual disagreements or interpretation issues?    │      │
│  └───────────────────────────────────────────────────────────────────┘      │
│       │                                                                      │
│       ▼                                                                      │
│  ┌───────────────────────────────────────────────────────────────────┐      │
│  │ 2. GATHER ADDITIONAL EVIDENCE                                     │      │
│  │    • Actual transaction data (volumes, types)                     │      │
│  │    • Organizational mandate documents                              │      │
│  │    • Strategic plans and intended evolution                       │      │
│  │    • Benchmarks from similar organizations                        │      │
│  └───────────────────────────────────────────────────────────────────┘      │
│       │                                                                      │
│       ▼                                                                      │
│  ┌───────────────────────────────────────────────────────────────────┐      │
│  │ 3. RE-SCORE WITH VERIFIED DATA                                    │      │
│  │    • Update questionnaire with confirmed figures                  │      │
│  │    • Re-run decision tree with verified inputs                    │      │
│  │    • Document changes and their impact                            │      │
│  └───────────────────────────────────────────────────────────────────┘      │
│       │                                                                      │
│       ▼                                                                      │
│  ┌───────────────────────────────────────────────────────────────────┐      │
│  │ 4. IF STILL UNRESOLVED                                            │      │
│  │    • Escalate to senior leadership for decision                   │      │
│  │    • Consider external advisor review                             │      │
│  │    • Document minority position for risk register                 │      │
│  │    • Classify by INTENDED END STATE if transforming               │      │
│  └───────────────────────────────────────────────────────────────────┘      │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Common Dispute Scenarios:**

| Scenario | Resolution Approach |
|----------|---------------------|
| Scores very close (<10 points) | Gather additional data, focus on key differentiators |
| Hybrid organization | Segment by function or classify by primary mandate |
| Organization in transition | Classify by intended end state with phased approach |
| Political disagreement | Escalate to executive sponsor with data |

#### Activity 1.4: Document Final Confirmed Classification

**Use Template 10.9.1: Organization Classification Record**

Complete all fields including:
- Final classification (PDU/RA/SDA)
- Confidence level (High/Medium/Low)
- Questionnaire scores
- Special case applied (if any)
- Validation date and participants
- Rationale for classification
- Any dissenting views (for risk register)

### 10.3.3 Output: Confirmed Classification

```
┌────────────────────────────────────────────────────────────────────────────┐
│                 STEP 1 OUTPUT: CONFIRMED ORGANIZATION CLASSIFICATION       │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  Organization Name: ________________________________________________       │
│                                                                            │
│  CONFIRMED Classification:  ⬜ PDU    ⬜ RA    ⬜ SDA                       │
│                                                                            │
│  Confidence Level:          ⬜ High   ⬜ Medium   ⬜ Low                    │
│                                                                            │
│  Questionnaire Scores:                                                     │
│    PDU: ______    RA: ______    SDA: ______                               │
│                                                                            │
│  Score Difference: ______ points                                           │
│                                                                            │
│  Special Case Applied:  ⬜ None   ⬜ ____________________________          │
│                                                                            │
│  Validation Workshop Held: ⬜ Yes  Date: _____________                     │
│                                                                            │
│  Participants: ______________________________________________________     │
│  ____________________________________________________________________     │
│                                                                            │
│  Rationale (key factors that determined classification):                   │
│  ________________________________________________________________________ │
│  ________________________________________________________________________ │
│  ________________________________________________________________________ │
│                                                                            │
│  Any Dissenting Views:  ⬜ None   ⬜ Documented in risk register           │
│                                                                            │
│  Confirmed by: ________________________  Date: _____________              │
│                                                                            │
│  DP1 DECISION: Classification is  ⬜ CONFIRMED  ⬜ REQUIRES FURTHER WORK  │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 10.4 Step 2: Confirm DPI Readiness

### 10.4.1 Purpose

Verify and update the DPI readiness assessment from Entry Point Tools, ensuring the organization has an accurate understanding of the national digital infrastructure that will support (or constrain) its transformation.

### 10.4.2 Why Verification is Needed

DPI status may have changed since the Entry Point assessment:
- New national systems launched
- Existing systems expanded or improved
- Planned deployments accelerated or delayed
- Policy or legal changes affecting DPI access
- New integration capabilities released

### 10.4.3 Activities

#### Activity 2.1: Review Entry Point Tools DPI Assessment

**What to Review:**
- Overall DPI score (percentage)
- Readiness level (1/2/3)
- Pillar-by-pillar status (Ready/Partial/Not Ready)
- Critical gaps identified
- Mitigation strategies proposed

**DPI Assessment Review Checklist:**
| Pillar | Entry Point Status | Verify Current Status | Change? |
|--------|-------------------|----------------------|---------|
| Digital Identity | ____________ | ____________ | ⬜ |
| Interoperability | ____________ | ____________ | ⬜ |
| Data Infrastructure | ____________ | ____________ | ⬜ |
| Digital Access | ____________ | ____________ | ⬜ |
| Governance | ____________ | ____________ | ⬜ |

#### Activity 2.2: Verify with National Digital Agency

**Actions:**
1. Schedule meeting with national digital agency representative
2. Review current DPI platform status and roadmap
3. Confirm availability of services for your organization
4. Understand onboarding requirements and timelines
5. Identify any constraints or limitations
6. Get documentation for integration planning

**Information to Obtain:**
| DPI Component | Questions to Ask |
|---------------|------------------|
| Identity | Current API availability? Onboarding process? Timeline? |
| Interoperability | Platform access status? Integration documentation? |
| Registries | Which registries accessible? API specifications? |
| Payments | Payment gateway available? Requirements? |
| Cloud | Government cloud access? Compliance requirements? |

#### Activity 2.3: Identify Changes Since Initial Assessment

**Update Form:**
| Pillar | Original Score | Updated Score | Change | Reason |
|--------|---------------|---------------|--------|--------|
| Identity | ____% | ____% | ⬜↑ ⬜↓ ⬜= | |
| Interoperability | ____% | ____% | ⬜↑ ⬜↓ ⬜= | |
| Data | ____% | ____% | ⬜↑ ⬜↓ ⬜= | |
| Access | ____% | ____% | ⬜↑ ⬜↓ ⬜= | |
| Governance | ____% | ____% | ⬜↑ ⬜↓ ⬜= | |
| **OVERALL** | ____% | ____% | | |

**If significant changes occurred:**
- Update the DPI Readiness Checklist
- Recalculate overall score
- Re-determine readiness level
- Update mitigation strategies as needed

#### Activity 2.4: Confirm Critical Gaps and Mitigation Approach

**For each critical DPI gap:**

| Gap ID | DPI Component | Blocking for Org Type? | Mitigation Strategy | Timeline |
|--------|---------------|----------------------|---------------------|----------|
| G1 | | ⬜ Yes ⬜ No | | |
| G2 | | ⬜ Yes ⬜ No | | |
| G3 | | ⬜ Yes ⬜ No | | |

**Mitigation Strategy Options (Reference Section 9.10):**
- Build interim solution designed for future integration
- Use alternative approach (point-to-point, manual process)
- Wait for DPI component (if timeline acceptable)
- Proceed without and accept limitation

#### Activity 2.5: Document Verified DPI Status

**Cross-Reference: DPI Requirements by Organization Type**

| Component | PDU Requirement | RA Requirement | SDA Requirement | Current Status |
|-----------|-----------------|----------------|-----------------|----------------|
| Identity Auth API | Optional | **Required** | **Required** | _____________ |
| Digital Signatures | Recommended | **Required** | **Required** | _____________ |
| Data Exchange Platform | Optional | **Required** | **Required** | _____________ |
| Registry Access | Optional | **Required** | **Required** | _____________ |
| Government Cloud | Optional | Recommended | **Required** | _____________ |
| Cybersecurity Framework | Recommended | **Required** | **Required** | _____________ |

### 10.4.4 Output: Verified DPI Status

```
┌────────────────────────────────────────────────────────────────────────────┐
│                    STEP 2 OUTPUT: VERIFIED DPI STATUS                      │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  PILLAR SUMMARY (Verified)                                                 │
│  ┌─────────────────────┬─────────┬─────────┬───────────┬──────────────┐   │
│  │ Pillar              │ Status  │ Weight  │ Raw Score │ Weighted     │   │
│  ├─────────────────────┼─────────┼─────────┼───────────┼──────────────┤   │
│  │ Digital Identity    │ R/P/N   │ 25%     │ _____%    │ _____%       │   │
│  │ Interoperability    │ R/P/N   │ 25%     │ _____%    │ _____%       │   │
│  │ Data Infrastructure │ R/P/N   │ 20%     │ _____%    │ _____%       │   │
│  │ Digital Access      │ R/P/N   │ 15%     │ _____%    │ _____%       │   │
│  │ Governance          │ R/P/N   │ 15%     │ _____%    │ _____%       │   │
│  ├─────────────────────┼─────────┼─────────┼───────────┼──────────────┤   │
│  │ OVERALL             │         │ 100%    │           │ _____%       │   │
│  └─────────────────────┴─────────┴─────────┴───────────┴──────────────┘   │
│                                                                            │
│  VERIFIED READINESS LEVEL:  ⬜ Level 1 (Foundational: 0-40%)              │
│                             ⬜ Level 2 (Developing: 41-70%)                │
│                             ⬜ Level 3 (Ready: 71-100%)                    │
│                                                                            │
│  Change from Entry Point:   ⬜ No change  ⬜ Improved  ⬜ Declined         │
│                                                                            │
│  CRITICAL GAPS FOR ORGANIZATION TYPE:                                      │
│  1. ________________________________________________________________      │
│     Mitigation: ____________________________________________________      │
│  2. ________________________________________________________________      │
│     Mitigation: ____________________________________________________      │
│  3. ________________________________________________________________      │
│     Mitigation: ____________________________________________________      │
│                                                                            │
│  Blocking Gaps Present:     ⬜ None  ⬜ Yes (see above)                    │
│                                                                            │
│  National Digital Agency Verification:                                     │
│  Contact: ________________________  Date: _____________                    │
│                                                                            │
│  Verified by: ________________________  Date: _____________               │
│                                                                            │
│  DP2 DECISION: DPI is  ⬜ ADEQUATE (proceed)                               │
│                        ⬜ ADEQUATE WITH MITIGATION (phased)                │
│                        ⬜ INADEQUATE (address gaps first)                  │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 10.5 Step 3: Select Reference Architecture

### 10.5.1 Purpose

Based on the confirmed organization classification and verified DPI readiness, formally select the Reference Architecture that will serve as the template for the organization's target state and determine the implementation approach.

### 10.5.2 RA Selection Matrix

| Organization Type | DPI Level 1 | DPI Level 2 | DPI Level 3 |
|-------------------|-------------|-------------|-------------|
| **PDU** | PDU RA (Basic) | PDU RA (Full) | PDU RA (Full) |
| **RA** | RA RA (Basic) + Gap Plan | RA RA (Phased) | RA RA (Full) |
| **SDA** | RA RA + Evolution Plan | SDA RA (Phased) | SDA RA (Full) |

**Implementation Approach Definitions:**

| Approach | Description | When to Use |
|----------|-------------|-------------|
| **Full** | Implement complete RA with all components | DPI Level 3, standard requirements |
| **Phased** | Implement RA in prioritized stages | DPI Level 2, resource constraints |
| **Basic** | Implement core capabilities only | DPI Level 1, limited DPI integration |
| **Evolution** | Start with simpler RA, evolve to target | SDA with Level 1 DPI |

### 10.5.3 Reference Architecture Documents

| Organization Type | Reference Architecture Document | Document ID |
|-------------------|--------------------------------|-------------|
| PDU | PDU Reference Architecture | GEATDM-WP2-T25 |
| RA | RA Reference Architecture | GEATDM-WP3-T35 |
| SDA | SDA Reference Architecture | GEATDM-WP4-T47 |

### 10.5.4 RA Inheritance Model

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    REFERENCE ARCHITECTURE INHERITANCE                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  PDU Reference Architecture (GEATDM-WP2-T25)                                │
│  ├─ Core office automation and collaboration                                │
│  ├─ Document and content management                                         │
│  ├─ Stakeholder engagement                                                  │
│  ├─ Basic analytics and reporting                                           │
│  └─ Policy development support                                              │
│      │                                                                       │
│      │ INHERITS ALL PDU CAPABILITIES +                                      │
│      ▼                                                                       │
│  RA Reference Architecture (GEATDM-WP3-T35)                                 │
│  ├─ Licensing and permit management                                         │
│  ├─ Compliance monitoring and inspection                                    │
│  ├─ Case management and workflow                                            │
│  ├─ Basic digital service delivery                                          │
│  ├─ Payment processing (fees)                                               │
│  └─ Decision management                                                     │
│      │                                                                       │
│      │ INHERITS ALL RA CAPABILITIES +                                       │
│      ▼                                                                       │
│  SDA Reference Architecture (GEATDM-WP4-T47)                                │
│  ├─ Mass customer registration and accounting                               │
│  ├─ Risk-based compliance and enforcement                                   │
│  ├─ Advanced analytics and business intelligence                            │
│  ├─ Multi-channel service delivery at scale                                 │
│  ├─ Debt management and collections                                         │
│  └─ International data exchange                                             │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 10.5.5 Minimum DPI Requirements Verification

Before confirming RA selection, verify that minimum DPI requirements are met or mitigation is approved:

**For PDU (Low DPI Dependency):**
| DPI Component | Requirement | Status | Action if Missing |
|---------------|-------------|--------|-------------------|
| Basic connectivity | Required | ⬜ | Cannot proceed |
| Data protection law | Required | ⬜ | Legal review needed |
| Digital strategy | Required | ⬜ | Align with sector standards |

**For RA (Medium DPI Dependency):**
| DPI Component | Requirement | Status | Action if Missing |
|---------------|-------------|--------|-------------------|
| All PDU requirements | Required | ⬜ | |
| Identity auth API | Required | ⬜ | Build internal auth, plan integration |
| Digital signatures | Required | ⬜ | Paper backup, plan e-sig |
| Data exchange | Required | ⬜ | Point-to-point integration |
| Registry access | Required | ⬜ | Collect data directly |
| Cybersecurity framework | Required | ⬜ | Implement ISO 27001 |

**For SDA (High DPI Dependency):**
| DPI Component | Requirement | Status | Action if Missing |
|---------------|-------------|--------|-------------------|
| All RA requirements | Required | ⬜ | |
| SSO integration | Required | ⬜ | Organization-level identity |
| Full interoperability | Required | ⬜ | Enterprise integration bus |
| Government cloud | Required | ⬜ | Compliant commercial cloud |
| Multi-channel platform | Required | ⬜ | Build progressively |

### 10.5.6 Activities

#### Activity 3.1: Match Organization Type to RA

**Selection Logic:**
```
IF Organization Type = PDU
    THEN Select PDU Reference Architecture (GEATDM-WP2-T25)

IF Organization Type = RA
    THEN Select RA Reference Architecture (GEATDM-WP3-T35)

IF Organization Type = SDA AND DPI Level >= 2
    THEN Select SDA Reference Architecture (GEATDM-WP4-T47)

IF Organization Type = SDA AND DPI Level = 1
    THEN Select RA Reference Architecture initially
         Plan evolution to SDA RA as DPI matures
```

#### Activity 3.2: Determine Implementation Approach

Based on DPI Level:

| DPI Level | Implementation Approach | Characteristics |
|-----------|------------------------|-----------------|
| **Level 3** | Full | All RA components, full DPI integration |
| **Level 2** | Phased | Core first, extend as DPI improves |
| **Level 1** | Basic | Essential capabilities, minimal DPI |

**Additional Factors to Consider:**
- Budget availability
- Organizational readiness
- Timeline constraints
- Risk tolerance

#### Activity 3.3: Confirm with Stakeholders

**RA Selection Confirmation Session:**
1. Present classification result (confirmed in Step 1)
2. Present DPI status (verified in Step 2)
3. Explain RA selection logic and inheritance model
4. Present recommended RA and implementation approach
5. Discuss implications and resource requirements
6. Address questions and concerns
7. Obtain stakeholder agreement

#### Activity 3.4: Note Anticipated Customizations

Document anticipated customizations that will be addressed in ADAPT phase:

| Category | Anticipated Customization | Rationale |
|----------|--------------------------|-----------|
| **Scope** | Capabilities to add/remove | |
| **Scale** | Capacity requirements | |
| **Integration** | Specific DPI integration needs | |
| **Compliance** | Country/sector-specific requirements | |
| **Legacy** | Systems to integrate/migrate | |
| **Timeline** | Phasing requirements | |

### 10.5.7 Output: RA Selection Decision

```
┌────────────────────────────────────────────────────────────────────────────┐
│                  STEP 3 OUTPUT: RA SELECTION DECISION                      │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  SELECTION INPUTS:                                                         │
│  Confirmed Organization Type: ⬜ PDU    ⬜ RA    ⬜ SDA                     │
│  Verified DPI Readiness Level: ⬜ Level 1  ⬜ Level 2  ⬜ Level 3          │
│  DPI Score: ______%                                                        │
│                                                                            │
│  SELECTED REFERENCE ARCHITECTURE:                                          │
│  ⬜ PDU Reference Architecture (GEATDM-WP2-T25)                            │
│  ⬜ RA Reference Architecture (GEATDM-WP3-T35)                             │
│  ⬜ SDA Reference Architecture (GEATDM-WP4-T47)                            │
│                                                                            │
│  IMPLEMENTATION APPROACH:                                                  │
│  ⬜ Full Implementation (DPI Ready, standard requirements)                 │
│  ⬜ Phased Implementation (DPI Developing, prioritized rollout)            │
│  ⬜ Basic Implementation (DPI Foundational, minimal scope first)           │
│  ⬜ Evolution Approach (Start with RA RA, evolve to SDA RA)               │
│                                                                            │
│  SELECTION RATIONALE:                                                      │
│  ________________________________________________________________________ │
│  ________________________________________________________________________ │
│  ________________________________________________________________________ │
│                                                                            │
│  MINIMUM DPI PREREQUISITES VERIFIED:                                       │
│  ⬜ All required DPI components available OR                               │
│  ⬜ Approved mitigation plans in place for gaps                            │
│                                                                            │
│  KEY CUSTOMIZATIONS ANTICIPATED FOR ADAPT PHASE:                           │
│  1. ________________________________________________________________      │
│  2. ________________________________________________________________      │
│  3. ________________________________________________________________      │
│                                                                            │
│  STAKEHOLDER CONFIRMATION:                                                 │
│  Confirmation session held: ⬜ Yes  Date: _____________                    │
│  Participants: ______________________________________________________     │
│  Agreement obtained: ⬜ Yes  ⬜ Conditional (note: ___________________)    │
│                                                                            │
│  Confirmed by: ________________________  Date: _____________              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 10.6 Step 4: Document DISCOVER Outputs

### 10.6.1 Purpose

Consolidate all DISCOVER phase findings into a formal summary document that provides a clear record of decisions, serves as input to the ASSESS phase, and secures stakeholder sign-off before proceeding.

### 10.6.2 Activities

#### Activity 4.1: Complete DISCOVER Summary Template

Use **Template 10.9.3: DISCOVER Summary** to document:
- Organization information
- Confirmed classification with rationale
- Verified DPI readiness with gaps and mitigations
- Selected RA with implementation approach
- Proceed/Delay decision
- Next steps and timeline

#### Activity 4.2: Compile Supporting Evidence

Organize all evidence collected during DISCOVER:

| Evidence Category | Documents to Include |
|-------------------|---------------------|
| **Classification** | Completed questionnaire, decision tree worksheet, validation workshop notes |
| **DPI Assessment** | Pillar checklists, national agency correspondence, updated scores |
| **RA Selection** | Selection criteria documentation, stakeholder confirmation notes |
| **Organization Info** | Charter, mandate, organizational structure |

#### Activity 4.3: Obtain Stakeholder Sign-off

**Sign-off Process:**
1. Circulate draft DISCOVER Summary for review (2-3 days)
2. Address comments and finalize document
3. Present summary to senior management
4. Obtain signatures from required approvers
5. Distribute final version to all stakeholders

**Required Approvers:**
| Role | Signs off on |
|------|--------------|
| EA/Project Lead | Completeness and accuracy |
| Business Representative | Classification correctness |
| IT Representative | DPI assessment validity |
| Senior Management | Proceed/Delay decision |

#### Activity 4.4: Proceed/Delay Decision

**Decision Criteria for PROCEED:**

| Criterion | Required for PROCEED | Status |
|-----------|---------------------|--------|
| Classification confirmed | High or Medium confidence | ⬜ |
| DPI adequate | Level 2-3 or Level 1 with mitigation | ⬜ |
| RA selected | Stakeholder agreement | ⬜ |
| Critical gaps addressed | All addressed or accepted | ⬜ |
| Resources available | Team and budget for ASSESS | ⬜ |

**If DELAY is selected:**
- Document specific gaps requiring remediation
- Define gap closure criteria
- Establish timeline for re-assessment
- Identify responsible parties
- Schedule DISCOVER refresh

### 10.6.3 Output: DISCOVER Summary

See **Template 10.9.3** for complete DISCOVER Summary template.

---

## 10.7 DISCOVER Deliverables Checklist

### 10.7.1 Required Deliverables

| Deliverable | Template | Status | Quality Check |
|-------------|----------|--------|---------------|
| Organization Classification Record | 10.9.1 | ⬜ | Signed, rationale documented |
| Verified DPI Assessment | 10.9.2 | ⬜ | Scores calculated, gaps identified |
| RA Selection Decision | Step 3 Output | ⬜ | Stakeholder confirmed |
| DISCOVER Summary | 10.9.3 | ⬜ | Complete, signed |
| Evidence Package | - | ⬜ | All documents compiled |

### 10.7.2 Quality Criteria

**For Classification Record:**
- [ ] Classification matches questionnaire scores
- [ ] Decision tree path documented
- [ ] Stakeholder validation recorded
- [ ] Special cases addressed if applicable
- [ ] Confidence level justified

**For DPI Assessment:**
- [ ] All five pillars assessed
- [ ] Scores calculated correctly
- [ ] Level determination accurate
- [ ] Critical gaps identified for org type
- [ ] Mitigation strategies documented

**For RA Selection:**
- [ ] Selection follows matrix logic
- [ ] Implementation approach appropriate for DPI level
- [ ] Minimum DPI requirements verified
- [ ] Customization needs noted
- [ ] Stakeholder agreement documented

**For DISCOVER Summary:**
- [ ] All sections completed
- [ ] Inputs from Steps 1-3 incorporated
- [ ] Proceed/Delay decision documented
- [ ] Next steps defined
- [ ] Required signatures obtained

---

## 10.8 Transition to ASSESS Phase

### 10.8.1 Handoff Checklist

Before starting the ASSESS phase, confirm:

| Item | Status | Notes |
|------|--------|-------|
| DISCOVER Summary signed and distributed | ⬜ | |
| Reference Architecture document obtained | ⬜ | PDU/RA/SDA RA |
| ASSESS phase team identified | ⬜ | |
| ASSESS phase timeline agreed | ⬜ | |
| Stakeholder availability confirmed for AS-IS | ⬜ | |
| Working spaces and tools ready | ⬜ | |
| Budget for ASSESS phase confirmed | ⬜ | |

### 10.8.2 What ASSESS Needs from DISCOVER

| DISCOVER Output | How ASSESS Uses It |
|-----------------|-------------------|
| Confirmed Classification | Determines scope and complexity of assessment |
| DPI Status | Identifies integration points to assess |
| Selected RA | Provides template structure for AS-IS documentation |
| Implementation Approach | Shapes depth of assessment |
| Customization Notes | Flags areas requiring special attention |

### 10.8.3 Preparing the ASSESS Team

**Team Briefing Agenda:**
1. Review DISCOVER Summary and decisions
2. Introduce selected Reference Architecture structure
3. Explain ASSESS process and deliverables
4. Assign domain responsibilities (Business, Application, Data, Technology)
5. Schedule kickoff activities
6. Distribute working documents

**Key Reference Materials for ASSESS Team:**
| Document | Purpose |
|----------|---------|
| Selected RA | Template for AS-IS documentation |
| DISCOVER Summary | Context and decisions |
| DPI Assessment | Integration requirements |
| This Guide (Section 11) | ASSESS methodology |

### 10.8.4 Transition Statement

```
┌────────────────────────────────────────────────────────────────────────────┐
│                    DISCOVER → ASSESS TRANSITION                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  DISCOVER PHASE COMPLETION:                                                │
│                                                                            │
│  ⬜ Classification confirmed: _____________ (PDU/RA/SDA)                   │
│  ⬜ DPI Level verified: _____________ (Level 1/2/3)                        │
│  ⬜ RA selected: _____________ (GEATDM-WP__-T__)                           │
│  ⬜ Implementation approach: _____________ (Full/Phased/Basic)             │
│  ⬜ DISCOVER Summary signed and distributed                                │
│                                                                            │
│  ASSESS PHASE READINESS:                                                   │
│                                                                            │
│  ⬜ ASSESS team assembled                                                  │
│  ⬜ RA document distributed to team                                        │
│  ⬜ Stakeholder interviews scheduled                                       │
│  ⬜ Timeline agreed                                                        │
│                                                                            │
│  PROCEED TO ASSESS: ⬜ YES  ⬜ NO (reason: ___________________________)   │
│                                                                            │
│  ASSESS Phase Start Date: _____________                                    │
│                                                                            │
│  Transition approved by: ________________________  Date: _____________    │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 10.9 DISCOVER Templates

### 10.9.1 Template: Organization Classification Record

```
══════════════════════════════════════════════════════════════════════════════
                    ORGANIZATION CLASSIFICATION RECORD
══════════════════════════════════════════════════════════════════════════════

ORGANIZATION DETAILS
─────────────────────────────────────────────────────────────────────────────
Organization Name: ________________________________________________________
Country/Jurisdiction: ____________________________________________________
Date of Classification: __________________________________________________
Classified By: __________________________________________________________
Document Version: 1.0

CLASSIFICATION RESULT
─────────────────────────────────────────────────────────────────────────────
Primary Classification: [ ] PDU  [ ] RA  [ ] SDA

Tier/Scale: [ ] Basic  [ ] Standard  [ ] Enterprise

Special Case Applied: [ ] None  [ ] ____________________________________

Notes/Qualifiers: ________________________________________________________
_________________________________________________________________________

SUPPORTING EVIDENCE
─────────────────────────────────────────────────────────────────────────────

Entry Point Tools Reference:
  Classification Guide completion date: _________________
  DPI Checklist completion date: _________________

Questionnaire Scores:
  PDU: ____  RA: ____  SDA: ____
  Score Difference: ____ points

Decision Tree Path:
  Q1 (Primary Function): ____ →
  Q2 (Licensing?): ____ →
  Q3 (>100K transactions?): ____ →
  Q4 (SDA indicators): ____ of 7 checked

Confidence Level: [ ] High (>20 pts)  [ ] Medium (10-20 pts)  [ ] Low (<10 pts)

Key Differentiating Factors:
1. ______________________________________________________________________
2. ______________________________________________________________________
3. ______________________________________________________________________

VALIDATION
─────────────────────────────────────────────────────────────────────────────

Validation Workshop:
  Date: _________________
  Participants: _________________________________________________________

Key Discussion Points:
1. ______________________________________________________________________
2. ______________________________________________________________________

Disputes/Concerns Raised: [ ] None  [ ] See notes below
_________________________________________________________________________

Resolution: ______________________________________________________________

Final Classification Confirmed: [ ] Yes  [ ] Requires further review

APPROVAL
─────────────────────────────────────────────────────────────────────────────

Prepared By: _________________________  Date: _______________  Sign: _______
Reviewed By: _________________________  Date: _______________  Sign: _______
Approved By: _________________________  Date: _______________  Sign: _______

══════════════════════════════════════════════════════════════════════════════
```

### 10.9.2 Template: DPI Verification Record

```
══════════════════════════════════════════════════════════════════════════════
                       DPI VERIFICATION RECORD
══════════════════════════════════════════════════════════════════════════════

ASSESSMENT DETAILS
─────────────────────────────────────────────────────────────────────────────
Country: _________________________________________________________________
Organization: ____________________________________________________________
Verification Date: _______________________________________________________
Verified By: _____________________________________________________________

ENTRY POINT RESULTS (From Section 9)
─────────────────────────────────────────────────────────────────────────────
Original Assessment Date: ________________________________________________
Original Overall Score: ___________%
Original Readiness Level: [ ] Level 1  [ ] Level 2  [ ] Level 3

VERIFICATION RESULTS
─────────────────────────────────────────────────────────────────────────────

┌─────────────────────┬───────────┬───────────┬─────────┬─────────────────┐
│ Pillar              │ Original  │ Verified  │ Change  │ Reason          │
│                     │ Status    │ Status    │         │                 │
├─────────────────────┼───────────┼───────────┼─────────┼─────────────────┤
│ Digital Identity    │ R / P / N │ R / P / N │ ↑ ↓ =   │                 │
│ Interoperability    │ R / P / N │ R / P / N │ ↑ ↓ =   │                 │
│ Data Infrastructure │ R / P / N │ R / P / N │ ↑ ↓ =   │                 │
│ Digital Access      │ R / P / N │ R / P / N │ ↑ ↓ =   │                 │
│ Governance          │ R / P / N │ R / P / N │ ↑ ↓ =   │                 │
└─────────────────────┴───────────┴───────────┴─────────┴─────────────────┘

Verified Overall Score: ___________%
Verified Readiness Level: [ ] Level 1  [ ] Level 2  [ ] Level 3

NATIONAL DIGITAL AGENCY VERIFICATION
─────────────────────────────────────────────────────────────────────────────
Contact Name: ____________________________________________________________
Agency: _________________________________________________________________
Verification Date: _______________________________________________________
Key Information Obtained:
_________________________________________________________________________
_________________________________________________________________________

CRITICAL GAPS FOR ORGANIZATION TYPE
─────────────────────────────────────────────────────────────────────────────

Organization Type: [ ] PDU  [ ] RA  [ ] SDA

┌─────┬────────────────────────┬───────────┬─────────────────────────────────┐
│ Gap │ DPI Component          │ Blocking? │ Approved Mitigation             │
├─────┼────────────────────────┼───────────┼─────────────────────────────────┤
│ 1   │                        │ [ ] Y [ ] N│                                │
│ 2   │                        │ [ ] Y [ ] N│                                │
│ 3   │                        │ [ ] Y [ ] N│                                │
│ 4   │                        │ [ ] Y [ ] N│                                │
│ 5   │                        │ [ ] Y [ ] N│                                │
└─────┴────────────────────────┴───────────┴─────────────────────────────────┘

DECISION
─────────────────────────────────────────────────────────────────────────────

DPI Status is: [ ] Adequate to proceed
               [ ] Adequate with approved mitigations
               [ ] Inadequate - gaps must be addressed

APPROVAL
─────────────────────────────────────────────────────────────────────────────

Verified By: _________________________  Date: _______________  Sign: _______
Reviewed By: _________________________  Date: _______________  Sign: _______
Approved By: _________________________  Date: _______________  Sign: _______

══════════════════════════════════════════════════════════════════════════════
```

### 10.9.3 Template: DISCOVER Summary

```
══════════════════════════════════════════════════════════════════════════════
                         DISCOVER PHASE SUMMARY
══════════════════════════════════════════════════════════════════════════════

ORGANIZATION INFORMATION
─────────────────────────────────────────────────────────────────────────────
Organization Name:     ___________________________________________________
Country/Jurisdiction:  ___________________________________________________
Assessment Date:       ___________________________________________________
Project Lead:          ___________________________________________________
Team Members:          ___________________________________________________

══════════════════════════════════════════════════════════════════════════════
1. CONFIRMED ORGANIZATION CLASSIFICATION
══════════════════════════════════════════════════════════════════════════════

Organization Type:    [ ] PDU (Policy Development Unit)
                      [ ] RA (Regulatory Agency)
                      [ ] SDA (Service Delivery Authority)

Classification Confidence:  [ ] High    [ ] Medium    [ ] Low

Questionnaire Scores:
  PDU: ______    RA: ______    SDA: ______

Decision Tree Path:   Q1 → ___    Q2 → ___    Q3 → ___    Q4 → ___

Special Case Applied: [ ] None  [ ] ________________________________________

Classification Rationale:
___________________________________________________________________________
___________________________________________________________________________
___________________________________________________________________________

Validation Workshop: Date: _________ Participants: _________________________

══════════════════════════════════════════════════════════════════════════════
2. VERIFIED DPI READINESS
══════════════════════════════════════════════════════════════════════════════

Pillar Scores (Verified):
┌─────────────────────┬─────────────────┬─────────────────┬────────────────┐
│ Pillar              │ Status          │ Raw Score       │ Weighted Score │
├─────────────────────┼─────────────────┼─────────────────┼────────────────┤
│ Digital Identity    │ R / P / N       │ ______%         │ ______%        │
│ Interoperability    │ R / P / N       │ ______%         │ ______%        │
│ Data Infrastructure │ R / P / N       │ ______%         │ ______%        │
│ Digital Access      │ R / P / N       │ ______%         │ ______%        │
│ Governance          │ R / P / N       │ ______%         │ ______%        │
├─────────────────────┼─────────────────┼─────────────────┼────────────────┤
│ OVERALL             │                 │                 │ ______%        │
└─────────────────────┴─────────────────┴─────────────────┴────────────────┘

Readiness Level:      [ ] Level 1 (Foundational: 0-40%)
                      [ ] Level 2 (Developing: 41-70%)
                      [ ] Level 3 (Ready: 71-100%)

National Digital Agency Verification: Contact: __________ Date: ___________

Critical Gaps and Mitigations:
┌─────────────────────┬─────────────────────────────────┬──────────────────┐
│ Gap                 │ Impact                          │ Mitigation       │
├─────────────────────┼─────────────────────────────────┼──────────────────┤
│ 1.                  │                                 │                  │
│ 2.                  │                                 │                  │
│ 3.                  │                                 │                  │
└─────────────────────┴─────────────────────────────────┴──────────────────┘

══════════════════════════════════════════════════════════════════════════════
3. REFERENCE ARCHITECTURE SELECTION
══════════════════════════════════════════════════════════════════════════════

Selected Reference Architecture:
  [ ] PDU Reference Architecture (GEATDM-WP2-T25)
  [ ] RA Reference Architecture (GEATDM-WP3-T35)
  [ ] SDA Reference Architecture (GEATDM-WP4-T47)

Implementation Approach:
  [ ] Full Implementation
  [ ] Phased Implementation
  [ ] Basic Implementation
  [ ] Evolution Approach (RA RA → SDA RA)

Selection Rationale:
___________________________________________________________________________
___________________________________________________________________________

Minimum DPI Requirements: [ ] All met  [ ] Met with approved mitigations

Key Customizations Anticipated for ADAPT Phase:
1. _______________________________________________________________________
2. _______________________________________________________________________
3. _______________________________________________________________________

Stakeholder Confirmation: Date: _________ Agreement: [ ] Yes  [ ] Conditional

══════════════════════════════════════════════════════════════════════════════
4. PROCEED/DELAY DECISION
══════════════════════════════════════════════════════════════════════════════

Decision:  [ ] PROCEED to ASSESS Phase
           [ ] DELAY - Address gaps first

PROCEED Criteria Assessment:
┌─────────────────────────────────────────┬──────────┬──────────────────────┐
│ Criterion                               │ Status   │ Notes                │
├─────────────────────────────────────────┼──────────┼──────────────────────┤
│ Classification confirmed (High/Medium)  │ [ ] Met  │                      │
│ DPI adequate (Level 2-3 or mitigated)   │ [ ] Met  │                      │
│ RA selected (stakeholder agreement)     │ [ ] Met  │                      │
│ Critical gaps addressed/accepted        │ [ ] Met  │                      │
│ Resources available for ASSESS          │ [ ] Met  │                      │
└─────────────────────────────────────────┴──────────┴──────────────────────┘

If PROCEED:
  ASSESS Phase Target Start Date: ________________________________________
  ASSESS Phase Duration Estimate: ________________________________________

If DELAY:
  Gap Remediation Plan Attached: [ ] Yes
  Re-assessment Target Date: _____________________________________________

══════════════════════════════════════════════════════════════════════════════
5. NEXT STEPS
══════════════════════════════════════════════════════════════════════════════

Immediate Actions:
┌─────────────────────────────────────────────────────────────────┬───────────┐
│ Action                                                          │ Due Date  │
├─────────────────────────────────────────────────────────────────┼───────────┤
│ 1. Distribute DISCOVER Summary to stakeholders                  │           │
│ 2. Obtain selected RA document                                  │           │
│ 3. Assemble ASSESS phase team                                   │           │
│ 4. Schedule ASSESS kickoff meeting                              │           │
│ 5. Confirm stakeholder availability for AS-IS documentation     │           │
└─────────────────────────────────────────────────────────────────┴───────────┘

══════════════════════════════════════════════════════════════════════════════
SIGN-OFF
══════════════════════════════════════════════════════════════════════════════

Prepared by:
Name: ________________________________  Role: _____________________________
Signature: ___________________________  Date: _____________________________

Reviewed by:
Name: ________________________________  Role: _____________________________
Signature: ___________________________  Date: _____________________________

Approved by (Senior Management):
Name: ________________________________  Role: _____________________________
Signature: ___________________________  Date: _____________________________

══════════════════════════════════════════════════════════════════════════════
ATTACHMENTS
══════════════════════════════════════════════════════════════════════════════

[ ] A. Organization Classification Record (Template 10.9.1)
[ ] B. DPI Verification Record (Template 10.9.2)
[ ] C. Entry Point Tools Documentation (Sections 8-9 outputs)
[ ] D. Stakeholder Consultation Notes
[ ] E. Gap Remediation Plan (if applicable)

══════════════════════════════════════════════════════════════════════════════
```

---

═══════════════════════════════════════════════════════════════════════════════
# SECTION 11: ASSESS PHASE GUIDE
═══════════════════════════════════════════════════════════════════════════════

## 11.1 Phase Overview

### 11.1.1 Purpose of ASSESS Phase

The ASSESS phase is the **second operational phase** in the GEATDM method. Its purpose is to establish a clear understanding of the organization's current state and systematically identify gaps between the current state and the selected Reference Architecture.

The ASSESS phase answers three critical questions:

1. **Where are we now?** (AS-IS documentation across all architecture domains)
2. **What's different from the target?** (Gap identification through RA comparison)
3. **What matters most?** (Gap prioritization for transformation planning)

### 11.1.2 Why ASSESS Matters

The quality of the ASSESS phase directly impacts subsequent phases:

| ASSESS Output | Impact on Later Phases |
|---------------|----------------------|
| AS-IS Documentation | Baseline for target architecture in ADAPT |
| Gap Register | Foundation for roadmap in PLAN |
| Priority Assessment | Investment sequencing in PLAN/EXECUTE |
| Complexity Analysis | Resource planning in PLAN |

**Error Cost:** Incomplete AS-IS documentation leads to missed gaps. Poor gap prioritization results in suboptimal transformation roadmaps and misallocated resources.

### 11.1.3 Inputs from DISCOVER Phase

| Input | Description | Where Used |
|-------|-------------|------------|
| **Confirmed Classification** | PDU, RA, or SDA | Determines assessment scope |
| **Verified DPI Status** | Level and gaps | Integration assessment |
| **Selected RA** | Target state template | Framework for AS-IS and comparison |
| **Implementation Approach** | Full/Phased/Basic | Depth of assessment |
| **DISCOVER Summary** | Consolidated context | Background for ASSESS team |

### 11.1.4 Outputs to ADAPT Phase

| Output | Description | Format |
|--------|-------------|--------|
| **AS-IS Architecture Document** | Current state across BDAT domains | Structured document |
| **Gap Analysis Report** | Systematic comparison with identified gaps | Structured report |
| **Prioritized Gap Register** | All gaps with priority, complexity, categorization | Spreadsheet |
| **ASSESS Summary** | Consolidated findings with sign-off | Summary document |
| **Proceed Recommendation** | Go/No-Go for ADAPT phase | Decision record |

### 11.1.5 Expected Duration

| Organization Type | Typical Duration | Notes |
|-------------------|------------------|-------|
| PDU | 4 weeks | Simpler architecture, fewer integrations |
| RA | 6 weeks | Regulatory systems, moderate complexity |
| SDA | 8 weeks | Multiple domains, extensive integrations |

**Note:** Duration includes stakeholder consultation and validation workshops. Rushing ASSESS leads to gaps being discovered during implementation—a costly outcome.

### 11.1.6 Key Participants

| Role | Responsibility | Involvement |
|------|----------------|-------------|
| **EA Lead** | Coordinates AS-IS documentation, leads gap analysis | Full-time |
| **Business Architect** | Documents business processes, capabilities, services | Full-time |
| **Application Architect** | Inventories applications, documents integrations | Full-time |
| **Data Architect** | Documents data assets, flows, quality issues | Part-time |
| **Technology Architect** | Documents infrastructure, platforms, technical debt | Part-time |
| **Domain Experts** | Provide detailed knowledge of functional areas | Interviews, validation |
| **IT Operations** | Provide system inventory, performance data | Technical input |
| **Senior Management** | Validate findings, approve gap priorities | Decision points |

### 11.1.7 ASSESS in Context

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        GEATDM APPLICATION METHOD                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌───────────┐    ╔═══════════╗    ┌───────────┐    ┌───────────┐    ┌───────────┐  │
│  │ DISCOVER  │ →  ║  ASSESS   ║ →  │   ADAPT   │ →  │   PLAN    │ →  │  EXECUTE  │  │
│  │ (Phase 1) │    ║ (Phase 2) ║    │ (Phase 3) │    │ (Phase 4) │    │ (Phase 5) │  │
│  └───────────┘    ╚═══════════╝    └───────────┘    └───────────┘    └───────────┘  │
│                                                                              │
│                   ▲ YOU ARE HERE                                             │
│                                                                              │
│  Confirm class     Document         Tailor RA        Develop         Implement    │
│  Verify DPI        AS-IS            to context       roadmap         & govern     │
│  Select RA         Identify gaps                     Define phases               │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 11.2 ASSESS Process Flow

### 11.2.1 Visual Process Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              ASSESS PHASE                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  PREREQUISITE CHECK: DISCOVER Phase Complete?                        │   │
│  │  ├─ Classification confirmed?                                        │   │
│  │  ├─ DPI status verified?                                             │   │
│  │  ├─ Reference Architecture selected?                                 │   │
│  │  └─ DISCOVER Summary approved?                                       │   │
│  │  → If NO: Complete DISCOVER Phase before proceeding                  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 1: DOCUMENT AS-IS BUSINESS ARCHITECTURE                               │
│  ├─ 1.1 Document current services and value proposition                     │
│  ├─ 1.2 Map current capabilities                                            │
│  ├─ 1.3 Document current processes                                          │
│  ├─ 1.4 Identify stakeholder relationships                                  │
│  └─ 1.5 Assess capability maturity                                          │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 2: DOCUMENT AS-IS APPLICATION ARCHITECTURE                            │
│  ├─ 2.1 Inventory all applications                                          │
│  ├─ 2.2 Document integration landscape                                      │
│  ├─ 2.3 Assess application health                                           │
│  ├─ 2.4 Map applications to capabilities                                    │
│  └─ 2.5 Document DPI integration status                                     │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 3: DOCUMENT AS-IS DATA ARCHITECTURE                                   │
│  ├─ 3.1 Inventory key data assets                                           │
│  ├─ 3.2 Document data flows                                                 │
│  ├─ 3.3 Assess data quality                                                 │
│  ├─ 3.4 Identify data ownership                                             │
│  └─ 3.5 Document external data dependencies                                 │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 4: DOCUMENT AS-IS TECHNOLOGY ARCHITECTURE                             │
│  ├─ 4.1 Document current infrastructure                                     │
│  ├─ 4.2 Assess technology health and debt                                   │
│  ├─ 4.3 Document security posture                                           │
│  ├─ 4.4 Assess operational capabilities                                     │
│  └─ 4.5 Document platform and hosting                                       │
│           │                                                                  │
│           ▼                                                                  │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  CHECKPOINT: Is AS-IS documentation complete?                        │   │
│  │  ├─ YES → Proceed to Step 5                                          │   │
│  │  └─ NO  → Complete missing sections before proceeding                │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 5: COMPARE AS-IS TO REFERENCE ARCHITECTURE                            │
│  ├─ 5.1 Map AS-IS capabilities to RA capabilities                           │
│  ├─ 5.2 Map AS-IS applications to RA applications                           │
│  ├─ 5.3 Map AS-IS data domains to RA data domains                           │
│  ├─ 5.4 Identify missing capabilities                                       │
│  ├─ 5.5 Identify application gaps                                           │
│  └─ 5.6 Identify data and technology gaps                                   │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 6: IDENTIFY AND PRIORITIZE GAPS                                       │
│  ├─ 6.1 Compile comprehensive gap register                                  │
│  ├─ 6.2 Categorize gaps (Capability/Application/Data/Technology)            │
│  ├─ 6.3 Assess gap severity and impact                                      │
│  ├─ 6.4 Estimate complexity and effort                                      │
│  └─ 6.5 Prioritize using MoSCoW methodology                                 │
│           │                                                                  │
│           ▼                                                                  │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  DECISION POINT: Gap Priority Review                                 │   │
│  │  ├─ Stakeholders agree on priorities → Proceed to Step 7             │   │
│  │  └─ Disagreement on priorities → Conduct prioritization workshop     │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 7: DOCUMENT ASSESS RESULTS                                            │
│  ├─ 7.1 Complete AS-IS Architecture Document                                │
│  ├─ 7.2 Complete Gap Analysis Report                                        │
│  ├─ 7.3 Prepare ASSESS Summary                                              │
│  ├─ 7.4 Obtain stakeholder sign-off                                         │
│  └─ 7.5 Make proceed/delay recommendation                                   │
│           │                                                                  │
│           ▼                                                                  │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  DECISION POINT: Proceed to ADAPT Phase?                             │   │
│  │  ├─ YES → Initiate ADAPT phase with prioritized gaps                 │   │
│  │  └─ NO  → Address critical issues; schedule re-assessment            │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 11.2.2 Activity Summary

| Step | Activities | Duration | Key Output |
|------|-----------|----------|------------|
| **Step 1** | Document AS-IS Business Architecture | 1-2 weeks | Business Architecture Document |
| **Step 2** | Document AS-IS Application Architecture | 1-2 weeks | Application Inventory & Landscape |
| **Step 3** | Document AS-IS Data Architecture | 0.5-1 week | Data Inventory & Assessment |
| **Step 4** | Document AS-IS Technology Architecture | 0.5-1 week | Technology Assessment |
| **Step 5** | Compare AS-IS to Reference Architecture | 1 week | Gap Mapping |
| **Step 6** | Identify and Prioritize Gaps | 1 week | Prioritized Gap Register |
| **Step 7** | Document and Sign-off | 0.5-1 week | ASSESS Summary |

### 11.2.3 Decision Points Summary

| ID | Decision Point | Criteria | Outcomes |
|----|---------------|----------|----------|
| **CP1** | AS-IS Complete? | All BDAT domains documented with required detail | Complete: Step 5 / Incomplete: Fill gaps |
| **DP1** | Gap Priorities Agreed? | Stakeholders agree on MoSCoW categorization | Agreed: Step 7 / Disagreed: Workshop |
| **DP2** | Proceed to ADAPT? | Documentation complete, gaps prioritized, no blockers | YES: ADAPT / NO: Address issues |

---

## 11.3 Using the Reference Architecture as Assessment Framework

### 11.3.1 The RA as Template

The selected Reference Architecture serves as both a **template** for organizing AS-IS documentation and a **baseline** for identifying gaps:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│               REFERENCE ARCHITECTURE AS ASSESSMENT FRAMEWORK                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   REFERENCE ARCHITECTURE                    AS-IS DOCUMENTATION              │
│   (Target State Template)                   (Current State)                  │
│                                                                              │
│   ┌─────────────────────┐                  ┌─────────────────────┐          │
│   │ 1. Org Profile      │    Template →    │ 1. Current Profile  │          │
│   │ 2. Business Arch    │    Template →    │ 2. Current Business │          │
│   │ 3. Capability Map   │    Template →    │ 3. Current Caps     │          │
│   │ 4. Application Arch │    Template →    │ 4. Current Apps     │          │
│   │ 5. Data Arch        │    Template →    │ 5. Current Data     │          │
│   │ 6. Technology       │    Template →    │ 6. Current Tech     │          │
│   │ 7. Implementation   │    (N/A)         │ (N/A)               │          │
│   └─────────────────────┘                  └─────────────────────┘          │
│            │                                         │                       │
│            │                                         │                       │
│            └─────────────────┬───────────────────────┘                       │
│                              │                                               │
│                              ▼                                               │
│                    ┌─────────────────────┐                                   │
│                    │   GAP ANALYSIS      │                                   │
│                    │  (RA vs. AS-IS)     │                                   │
│                    └─────────────────────┘                                   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 11.3.2 RA Cross-Reference Guide

When documenting AS-IS and identifying gaps, refer to the following sections of the selected Reference Architecture:

**For PDU (GEATDM-WP2-T25):**
| ASSESS Activity | RA Section to Reference |
|----------------|------------------------|
| Capability mapping | Section 3: Capability Model |
| Application inventory | Section 4: Application Architecture |
| Data domains | Section 5: Data Architecture |
| Technology baseline | Section 6: Technology Architecture |
| BB alignment | Section 7: Building Block Mapping |

**For RA (GEATDM-WP3-T35):**
| ASSESS Activity | RA Section to Reference |
|----------------|------------------------|
| Capability mapping | Section 3: Capability Model |
| Application inventory | Section 4: Application Architecture |
| Data domains | Section 5: Data Architecture |
| Technology baseline | Section 6: Technology Architecture |
| BB alignment | Section 7: Building Block Mapping |
| Regulatory functions | Section 3.2: Regulatory Capabilities |

**For SDA (GEATDM-WP4-T47):**
| ASSESS Activity | RA Section to Reference |
|----------------|------------------------|
| Capability mapping | Section 3: Capability Model |
| Application inventory | Section 4: Application Architecture |
| Data domains | Section 5: Data Architecture |
| Technology baseline | Section 6: Technology Architecture |
| BB alignment | Section 7: Building Block Mapping |
| Risk/Compliance functions | Section 3.3: Compliance Capabilities |
| Customer accounting | Section 4.2: Core Processing Systems |

### 11.3.3 Structuring AS-IS Documentation

Document your AS-IS state using the same structure as the RA, enabling direct comparison:

```
AS-IS ARCHITECTURE DOCUMENT STRUCTURE (mirrors RA structure)
══════════════════════════════════════════════════════════════

1. ORGANIZATION PROFILE
   ├── 1.1 Organization Context
   ├── 1.2 Strategic Objectives
   └── 1.3 Current Challenges

2. BUSINESS ARCHITECTURE
   ├── 2.1 Business Model (Current)
   ├── 2.2 Current Services
   ├── 2.3 Stakeholder Relationships
   └── 2.4 Key Processes

3. CAPABILITY MAP (Current)
   ├── 3.1 Enabling Capabilities
   ├── 3.2 Core Capabilities
   └── 3.3 Capability Maturity

4. APPLICATION ARCHITECTURE
   ├── 4.1 Application Inventory
   ├── 4.2 Application Landscape
   ├── 4.3 Integration Map
   └── 4.4 Application Health

5. DATA ARCHITECTURE
   ├── 5.1 Data Domains
   ├── 5.2 Data Flows
   ├── 5.3 Data Quality
   └── 5.4 Data Governance

6. TECHNOLOGY ARCHITECTURE
   ├── 6.1 Infrastructure
   ├── 6.2 Platforms
   ├── 6.3 Security
   └── 6.4 Operations
```

---

## 11.4 Step 1: Document AS-IS Business Architecture

### 11.4.1 Purpose

Document the organization's current business context, services, capabilities, and processes. This establishes the foundation for understanding what the organization does today before comparing it to the Reference Architecture.

**RA Cross-Reference:** Compare findings to Section 2 (Business Architecture) and Section 3 (Capability Model) of the selected RA.

### 11.4.2 Activities

#### Activity 1.1: Document Current Services and Value Proposition

**What to Document:**
- Current services provided to external customers (G2C, G2B, G2G)
- Internal services provided to other departments
- Value propositions for each customer segment
- Service delivery channels (physical, digital, hybrid)
- Service volumes and trends

**Information Sources:**
- Service catalogs
- Annual reports
- Strategic plans
- Customer feedback data
- Operational statistics

**Template: Current Service Catalog**

| Service ID | Service Name | Description | Customer Segment | Channel | Volume/Year | Digital? |
|------------|--------------|-------------|------------------|---------|-------------|----------|
| S001 | | | G2C/G2B/G2G | Portal/Counter/Both | | Yes/No |
| S002 | | | | | | |

#### Activity 1.2: Map Current Capabilities

**Purpose:** Document what the organization can do today, structured according to the capability model in the selected Reference Architecture.

**Approach:**
1. Obtain the capability map from the selected RA
2. For each RA capability, determine if the organization currently has it
3. Document the current state: Full / Partial / None / Manual
4. Note any capabilities the organization has that are not in the RA

**Template: Current Capability Assessment**

| RA Cap ID | RA Capability Name | Current Status | Current Description | Gap Notes |
|-----------|-------------------|----------------|---------------------|-----------|
| C1.1 | [From RA] | Full/Partial/None/Manual | [How it's done today] | |

**Capability Status Definitions:**

| Status | Definition |
|--------|------------|
| **Full** | Capability exists and is fully operational as described in RA |
| **Partial** | Capability exists but with limitations or differences |
| **None** | Capability does not currently exist |
| **Manual** | Capability exists but is entirely manual (RA expects automation) |
| **Planned** | Capability is in development or approved |

#### Activity 1.3: Document Current Processes

**Purpose:** Understand how key business processes operate today.

**What to Document:**
- Process name and purpose
- Key steps (high level)
- Automation level
- Pain points and bottlenecks
- Integration points with other processes
- Compliance requirements

**Template: Process Assessment**

| Process ID | Process Name | Key Steps | Automation Level | Pain Points | RA Reference |
|------------|--------------|-----------|------------------|-------------|--------------|
| P001 | | | Manual/Partial/Full | | |

#### Activity 1.4: Identify Stakeholder Relationships

**What to Document:**
- Internal stakeholders (departments, teams)
- External stakeholders (customers, partners, regulators, oversight bodies)
- Nature of relationship
- Services exchanged
- Communication channels
- Data exchange patterns

**Template: Stakeholder Matrix**

| Stakeholder | Type | Relationship | Services Exchanged | Channel | RA Reference |
|-------------|------|--------------|-------------------|---------|--------------|
| | Internal/External | | | | |

#### Activity 1.5: Assess Capability Maturity

**Purpose:** Evaluate the maturity of key capabilities to understand improvement potential.

**Maturity Level Definitions:**

| Level | Name | Description |
|-------|------|-------------|
| 1 | Initial | Ad-hoc, undocumented, inconsistent |
| 2 | Developing | Documented but not standardized |
| 3 | Defined | Standardized processes, metrics exist |
| 4 | Managed | Measured and controlled |
| 5 | Optimizing | Continuous improvement, data-driven |

**Template: Capability Maturity Assessment**

| Capability ID | Capability Name | Current Maturity | RA Expected | Gap |
|---------------|-----------------|------------------|-------------|-----|
| C1.1 | | 1/2/3/4/5 | [From RA] | |

### 11.4.3 Step 1 Output Summary

```
┌────────────────────────────────────────────────────────────────────────────┐
│           STEP 1 OUTPUT: AS-IS BUSINESS ARCHITECTURE SUMMARY               │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  CURRENT SERVICES SUMMARY                                                  │
│  Total Services Cataloged: ________                                        │
│  - G2C Services: ________  (Digital: ____%)                               │
│  - G2B Services: ________  (Digital: ____%)                               │
│  - G2G Services: ________  (Digital: ____%)                               │
│                                                                            │
│  CURRENT CAPABILITIES SUMMARY (vs. RA)                                     │
│  Total RA Capabilities Assessed: ________                                  │
│  - Full: ________ (___%)                                                   │
│  - Partial: ________ (___%)                                                │
│  - None: ________ (___%)                                                   │
│  - Manual: ________ (___%)                                                 │
│                                                                            │
│  KEY PROCESS FINDINGS                                                      │
│  Total Processes Documented: ________                                      │
│  - Fully Automated: ________ (___%)                                        │
│  - Partially Automated: ________ (___%)                                    │
│  - Manual: ________ (___%)                                                 │
│                                                                            │
│  AVERAGE CAPABILITY MATURITY: ____/5                                       │
│                                                                            │
│  TOP 5 BUSINESS PAIN POINTS:                                               │
│  1. ________________________________________________________________      │
│  2. ________________________________________________________________      │
│  3. ________________________________________________________________      │
│  4. ________________________________________________________________      │
│  5. ________________________________________________________________      │
│                                                                            │
│  Completed by: ________________________  Date: _____________              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 11.5 Step 2: Document AS-IS Application Architecture

### 11.5.1 Purpose

Create a comprehensive inventory of all applications currently used by the organization, understand their integrations, and assess their health. This is critical for identifying what systems need to be replaced, upgraded, or retained in the target state.

**RA Cross-Reference:** Compare findings to Section 4 (Application Architecture) of the selected RA.

### 11.5.2 Activities

#### Activity 2.1: Inventory All Applications

**What to Document:**
- Application name and vendor
- Purpose/function
- Technology stack
- Year implemented / last major upgrade
- Support status
- User count and departments served
- License type and cost

**Information Sources:**
- IT asset management system
- Software licensing records
- IT budget documents
- Department interviews

**Template: Application Inventory**

| App ID | Application | Vendor | Purpose | Tech Stack | Year | Users | Support | Health |
|--------|-------------|--------|---------|------------|------|-------|---------|--------|
| A001 | | | | | | | Active/Limited/EOL | |

#### Activity 2.2: Document Integration Landscape

**Purpose:** Understand how applications connect and exchange data.

**What to Document:**
- Source and target systems
- Integration type (API, file transfer, database link, manual)
- Data exchanged
- Frequency
- Direction (one-way, two-way)
- Reliability issues

**Template: Integration Matrix**

| Int ID | Source App | Target App | Type | Data | Frequency | Direction | Issues |
|--------|------------|------------|------|------|-----------|-----------|--------|
| I001 | | | API/File/DB/Manual | | | | |

**Integration Landscape Diagram:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    AS-IS INTEGRATION LANDSCAPE                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  EXTERNAL SYSTEMS                                                            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐                    │
│  │ [Name]   │  │ [Name]   │  │ [Name]   │  │ DPI Comp │                    │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘                    │
│       │             │             │             │                           │
│  ═════╪═════════════╪═════════════╪═════════════╪═════════════════════════  │
│       │             │             │             │     INTEGRATION LAYER     │
│  ═════╪═════════════╪═════════════╪═════════════╪═════════════════════════  │
│       │             │             │             │                           │
│  ┌────┴────┐   ┌────┴────┐   ┌────┴────┐   ┌────┴────┐                    │
│  │ App 1   │───│ App 2   │───│ App 3   │───│ App 4   │                    │
│  └─────────┘   └─────────┘   └─────────┘   └─────────┘                    │
│                                                                              │
│  Legend:  ──── = API   ≡≡≡≡ = File Transfer   .... = Manual                │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Activity 2.3: Assess Application Health

**Assessment Dimensions:**

| Dimension | Assessment Question |
|-----------|---------------------|
| **Functional Fit** | Does it meet current and future business needs? |
| **Technical Quality** | Is it maintainable, scalable, secure? |
| **Vendor/Support** | Is vendor viable? Support available? |
| **Integration** | Does it integrate well with other systems and DPI? |
| **User Satisfaction** | Do users find it effective? |

**Health Rating Scale:**

| Rating | Status | Description | Action |
|--------|--------|-------------|--------|
| 🟢 | Healthy | Meets needs, well-supported | Retain |
| 🟡 | Adequate | Some issues but functional | Evaluate |
| 🔴 | Problematic | Significant issues | Replace/Upgrade |
| ⚫ | End-of-Life | No longer viable | Replace urgently |

**Template: Application Health Assessment**

| App ID | Application | Functional | Technical | Support | Integration | Overall | Action |
|--------|-------------|------------|-----------|---------|-------------|---------|--------|
| A001 | | 🟢🟡🔴 | 🟢🟡🔴 | 🟢🟡🔴 | 🟢🟡🔴 | | Retain/Evaluate/Replace |

#### Activity 2.4: Map Applications to Capabilities

**Purpose:** Understand which applications support which business capabilities.

**Template: Application-to-Capability Mapping**

| Capability ID | Capability Name | Supporting Applications | Coverage | Gap Notes |
|---------------|-----------------|------------------------|----------|-----------|
| C1.1 | [From RA] | [App A], [App B] | Full/Partial/None | |

**Analysis Questions:**
- Are there capabilities with no application support (manual only)?
- Are there capabilities supported by multiple overlapping applications?
- Are there applications that don't clearly support any capability?

#### Activity 2.5: Document DPI Integration Status

**Purpose:** Understand current integration with national DPI components.

**Template: DPI Integration Status**

| DPI Component | Integration Status | Current Implementation | Notes |
|---------------|-------------------|----------------------|-------|
| Identity BB | Integrated/Partial/None | | |
| Information Mediator BB | Integrated/Partial/None | | |
| Payments BB | Integrated/Partial/None | | |
| Digital Registries BB | Integrated/Partial/None | | |
| Messaging BB | Integrated/Partial/None | | |
| E-Signature | Integrated/Partial/None | | |

### 11.5.3 Step 2 Output Summary

```
┌────────────────────────────────────────────────────────────────────────────┐
│          STEP 2 OUTPUT: AS-IS APPLICATION ARCHITECTURE SUMMARY             │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  APPLICATION INVENTORY SUMMARY                                             │
│  Total Applications Inventoried: ________                                  │
│  - Core Business Applications: ________                                    │
│  - Support Applications: ________                                          │
│  - Infrastructure/Platform: ________                                       │
│                                                                            │
│  APPLICATION HEALTH SUMMARY                                                │
│  - 🟢 Healthy: ________ (___%)                                             │
│  - 🟡 Adequate: ________ (___%)                                            │
│  - 🔴 Problematic: ________ (___%)                                         │
│  - ⚫ End-of-Life: ________ (___%)                                         │
│                                                                            │
│  INTEGRATION SUMMARY                                                       │
│  Total Integrations Documented: ________                                   │
│  - API-based: ________ (___%)                                              │
│  - File-based: ________ (___%)                                             │
│  - Manual: ________ (___%)                                                 │
│                                                                            │
│  DPI INTEGRATION STATUS                                                    │
│  - Fully Integrated: ________ components                                   │
│  - Partially Integrated: ________ components                               │
│  - Not Integrated: ________ components                                     │
│                                                                            │
│  TOP 5 APPLICATION ISSUES:                                                 │
│  1. ________________________________________________________________      │
│  2. ________________________________________________________________      │
│  3. ________________________________________________________________      │
│  4. ________________________________________________________________      │
│  5. ________________________________________________________________      │
│                                                                            │
│  Completed by: ________________________  Date: _____________              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 11.6 Step 3: Document AS-IS Data Architecture

### 11.6.1 Purpose

Document the organization's key data assets, data flows, quality issues, and ownership. This understanding is essential for identifying data-related gaps and planning data migration or integration.

**RA Cross-Reference:** Compare findings to Section 5 (Data Architecture) of the selected RA.

### 11.6.2 Activities

#### Activity 3.1: Inventory Key Data Assets

**What to Document:**
- Key databases and data stores
- Master data domains (customer, product, reference)
- Transactional data domains
- Analytical/reporting data
- Document/content repositories

**Template: Data Asset Inventory**

| Data ID | Asset Name | Type | Primary App | Records (Est.) | Sensitivity | Owner |
|---------|------------|------|-------------|----------------|-------------|-------|
| DA001 | | Master/Trans/Analytical | | | Public/Internal/Confidential | |

#### Activity 3.2: Document Data Flows

**Purpose:** Understand how data moves between systems.

**Template: Data Flow Documentation**

| Flow ID | Source | Destination | Data Elements | Transformation | Frequency | Quality Issues |
|---------|--------|-------------|---------------|----------------|-----------|----------------|
| DF001 | | | | | | |

#### Activity 3.3: Assess Data Quality

**Data Quality Dimensions:**

| Dimension | Definition | How to Assess |
|-----------|------------|---------------|
| **Completeness** | Required fields populated? | % of records with missing key fields |
| **Accuracy** | Reflects reality? | Sample verification, user feedback |
| **Consistency** | Same across systems? | Cross-system comparison |
| **Timeliness** | Current? | Age of data, update frequency |
| **Validity** | Conforms to rules? | Validation checks |

**Template: Data Quality Assessment**

| Data Domain | Completeness | Accuracy | Consistency | Timeliness | Overall | Priority Issues |
|-------------|--------------|----------|-------------|------------|---------|-----------------|
| | High/Med/Low | High/Med/Low | High/Med/Low | High/Med/Low | | |

#### Activity 3.4: Identify Data Ownership

**Template: Data Ownership Matrix**

| Data Domain | Data Owner | Data Steward | Data Custodian | Governance Issues |
|-------------|------------|--------------|----------------|-------------------|
| | | | | |

#### Activity 3.5: Document External Data Dependencies

**Template: External Data Dependencies**

| Dep ID | Data Type | External Source/Target | Direction | Method | Frequency | Issues |
|--------|-----------|----------------------|-----------|--------|-----------|--------|
| ED001 | | | In/Out/Both | API/File/Manual | | |

### 11.6.3 Step 3 Output Summary

```
┌────────────────────────────────────────────────────────────────────────────┐
│            STEP 3 OUTPUT: AS-IS DATA ARCHITECTURE SUMMARY                  │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  DATA ASSET SUMMARY                                                        │
│  Total Data Assets Inventoried: ________                                   │
│  - Master Data Domains: ________                                           │
│  - Transactional Data Domains: ________                                    │
│  - Analytical/Reporting: ________                                          │
│                                                                            │
│  DATA QUALITY SUMMARY                                                      │
│  - High Quality: ________ domains (___%)                                   │
│  - Medium Quality: ________ domains (___%)                                 │
│  - Low Quality: ________ domains (___%)                                    │
│                                                                            │
│  DATA GOVERNANCE STATUS                                                    │
│  - Domains with clear ownership: ________ (___%)                           │
│  - Domains with stewardship: ________ (___%)                               │
│  - Documented data flows: ________ (___%)                                  │
│                                                                            │
│  EXTERNAL DEPENDENCIES                                                     │
│  - DPI Registries accessed: ________                                       │
│  - Third-party data sources: ________                                      │
│  - Data shared externally: ________                                        │
│                                                                            │
│  TOP 5 DATA ISSUES:                                                        │
│  1. ________________________________________________________________      │
│  2. ________________________________________________________________      │
│  3. ________________________________________________________________      │
│  4. ________________________________________________________________      │
│  5. ________________________________________________________________      │
│                                                                            │
│  Completed by: ________________________  Date: _____________              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 11.7 Step 4: Document AS-IS Technology Architecture

### 11.7.1 Purpose

Document the current technology infrastructure, assess its health and fitness for future needs, and identify technical debt that must be addressed in the transformation.

**RA Cross-Reference:** Compare findings to Section 6 (Technology Architecture) of the selected RA.

### 11.7.2 Activities

#### Activity 4.1: Document Current Infrastructure

**What to Document:**
- Compute resources (servers, VMs, containers)
- Storage systems
- Network infrastructure
- Data centers / hosting arrangements
- Cloud services used

**Template: Infrastructure Inventory**

| Component ID | Component Type | Description | Location | Age | Capacity | Utilization |
|--------------|----------------|-------------|----------|-----|----------|-------------|
| INF001 | | | | | | |

#### Activity 4.2: Assess Technology Health and Debt

**Technical Debt Categories:**

| Category | Description | Impact |
|----------|-------------|--------|
| **Obsolete Technology** | End-of-life hardware/software | Security risk, no support |
| **Skills Debt** | Technology nobody knows how to maintain | Knowledge dependency |
| **Architecture Debt** | Poor design decisions accumulated | Maintenance difficulty |
| **Security Debt** | Unpatched vulnerabilities | Compliance risk |
| **Performance Debt** | Performance issues deferred | User impact |

**Template: Technical Debt Register**

| Debt ID | Component | Debt Type | Description | Risk Level | Est. Fix Effort |
|---------|-----------|-----------|-------------|------------|-----------------|
| TD001 | | | | High/Med/Low | |

#### Activity 4.3: Document Security Posture

**Template: Security Assessment**

| Security Domain | Current State | Compliance Status | Gap Notes |
|-----------------|---------------|-------------------|-----------|
| Access Control | | Compliant/Partial/Non-compliant | |
| Data Protection | | | |
| Network Security | | | |
| Incident Response | | | |
| Audit & Logging | | | |

#### Activity 4.4: Assess Operational Capabilities

**Template: Operational Capabilities Assessment**

| Capability | Current State | SLA Target | Achieved | Gap |
|------------|---------------|------------|----------|-----|
| System Availability | | | | |
| Backup Frequency | | | | |
| Recovery Time | | | | |
| Incident Response | | | | |

#### Activity 4.5: Document Platform and Hosting

**Template: Platform Summary**

| Platform Aspect | Current State | Contract Status | Monthly Cost | Notes |
|-----------------|---------------|-----------------|--------------|-------|
| Primary Hosting | | | | |
| Secondary/DR | | | | |
| Cloud Services | | | | |

### 11.7.3 Step 4 Output Summary

```
┌────────────────────────────────────────────────────────────────────────────┐
│          STEP 4 OUTPUT: AS-IS TECHNOLOGY ARCHITECTURE SUMMARY              │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  INFRASTRUCTURE SUMMARY                                                    │
│  - Physical Servers: ________                                              │
│  - Virtual Machines: ________                                              │
│  - Cloud Instances: ________                                               │
│  - Storage Capacity: ________ TB (____% utilized)                         │
│                                                                            │
│  HOSTING MODEL                                                             │
│  - Primary: [ ] On-Premise  [ ] Private Cloud  [ ] Public Cloud  [ ] Hybrid│
│  - DR Site: [ ] Yes  [ ] No  [ ] Planned                                  │
│                                                                            │
│  TECHNICAL DEBT SUMMARY                                                    │
│  - High Risk Items: ________                                               │
│  - Medium Risk Items: ________                                             │
│  - Low Risk Items: ________                                                │
│  - Estimated Remediation Effort: ________ person-months                   │
│                                                                            │
│  SECURITY POSTURE                                                          │
│  - Overall Compliance: [ ] Compliant  [ ] Partial  [ ] Non-compliant      │
│  - Critical Vulnerabilities: ________                                      │
│  - Certifications: ________________________________                        │
│                                                                            │
│  OPERATIONAL PERFORMANCE                                                   │
│  - System Availability: _____%                                             │
│  - Recovery Time Capability: ________ hours                                │
│  - Backup Coverage: _____%                                                 │
│                                                                            │
│  TOP 5 TECHNOLOGY ISSUES:                                                  │
│  1. ________________________________________________________________      │
│  2. ________________________________________________________________      │
│  3. ________________________________________________________________      │
│  4. ________________________________________________________________      │
│  5. ________________________________________________________________      │
│                                                                            │
│  Completed by: ________________________  Date: _____________              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 11.8 Step 5: Compare AS-IS to Reference Architecture

### 11.8.1 Purpose

Systematically compare the documented AS-IS state against the selected Reference Architecture to identify gaps across all architecture domains. This is the core analytical activity of the ASSESS phase.

### 11.8.2 Comparison Methodology

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        GAP IDENTIFICATION APPROACH                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  For each RA element (capability, application, data domain):                │
│                                                                              │
│  1. Does it exist in AS-IS?                                                  │
│     ├─ NO  → Gap Type: MISSING                                              │
│     └─ YES → Continue to question 2                                         │
│                                                                              │
│  2. Does it match the RA specification?                                     │
│     ├─ NO  → Gap Type: NON-CONFORMANCE                                      │
│     └─ YES → Continue to question 3                                         │
│                                                                              │
│  3. Is it at the required maturity level?                                   │
│     ├─ NO  → Gap Type: MATURITY                                             │
│     └─ YES → No gap (fully conformant)                                      │
│                                                                              │
│  Additionally:                                                               │
│  4. Are there AS-IS elements not in RA?                                     │
│     → Note: May indicate org-specific extension needs or retirement         │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 11.8.3 Activities

#### Activity 5.1: Map AS-IS Capabilities to RA Capabilities

**Template: Capability Comparison**

| RA Cap ID | RA Capability Name | RA Maturity | AS-IS Status | AS-IS Maturity | Gap Type | Gap Description |
|-----------|-------------------|-------------|--------------|----------------|----------|-----------------|
| C1.1 | [From RA] | [Expected] | Full/Partial/None | [Current] | Missing/NC/Mat/None | |

**Gap Type Definitions:**

| Gap Type | Code | Definition | Example |
|----------|------|------------|---------|
| **Missing** | M | Capability does not exist at all | No inspection capability |
| **Non-conformance** | NC | Capability exists but differs from RA | Manual process where RA expects automated |
| **Maturity** | Mat | Capability exists but at lower maturity | Level 2 where RA expects Level 4 |
| **None** | - | Fully aligned with RA | - |

#### Activity 5.2: Map AS-IS Applications to RA Applications

**Template: Application Comparison**

| RA App ID | RA Application | RA BB Alignment | AS-IS Application | Status | Gap Type | Description |
|-----------|---------------|-----------------|-------------------|--------|----------|-------------|
| A1.1 | [From RA] | [BB name] | [Current or "None"] | Aligned/Partial/None | | |

**Additional Analysis:**
- Applications in AS-IS but not in RA (retirement candidates or extensions)
- Applications rated 🔴 or ⚫ in health assessment (replacement candidates)
- Multiple AS-IS apps for single RA function (consolidation opportunity)

#### Activity 5.3: Map AS-IS Data Domains to RA Data Domains

**Template: Data Domain Comparison**

| RA Data ID | RA Data Domain | RA Sub-Domains | AS-IS Coverage | Data Quality | Gap Type | Description |
|------------|---------------|----------------|----------------|--------------|----------|-------------|
| D1 | [From RA] | [List] | Full/Partial/None | High/Med/Low | | |

#### Activity 5.4-5.6: Identify All Gap Categories

Compile summary lists for:
- Missing capabilities
- Missing applications
- Data gaps
- Technology gaps

### 11.8.4 Step 5 Output Summary

```
┌────────────────────────────────────────────────────────────────────────────┐
│             STEP 5 OUTPUT: AS-IS vs. RA COMPARISON SUMMARY                 │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  REFERENCE ARCHITECTURE: _________________________________ (GEATDM-WP_-T__)│
│                                                                            │
│  CAPABILITY COMPARISON                                                     │
│  RA Capabilities Assessed: ________                                        │
│  - Fully Aligned: ________ (___%)                                         │
│  - Non-conformant: ________ (___%)                                        │
│  - Missing: ________ (___%)                                               │
│                                                                            │
│  APPLICATION COMPARISON                                                    │
│  RA Applications Assessed: ________                                        │
│  - Fully Aligned: ________ (___%)                                         │
│  - Partial/Non-conformant: ________ (___%)                                │
│  - Missing: ________ (___%)                                               │
│                                                                            │
│  DATA DOMAIN COMPARISON                                                    │
│  RA Data Domains Assessed: ________                                        │
│  - Fully Aligned: ________ (___%)                                         │
│  - Partial/Quality Issues: ________ (___%)                                │
│  - Missing: ________ (___%)                                               │
│                                                                            │
│  TOTAL GAPS IDENTIFIED (Pre-prioritization)                                │
│  - Capability Gaps: ________                                               │
│  - Application Gaps: ________                                              │
│  - Data Gaps: ________                                                     │
│  - Technology Gaps: ________                                               │
│  - TOTAL: ________                                                         │
│                                                                            │
│  Completed by: ________________________  Date: _____________              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 11.9 Step 6: Identify and Prioritize Gaps

### 11.9.1 Purpose

Consolidate all identified gaps into a single register and prioritize them to guide the transformation roadmap. Not all gaps are equal—some are critical blockers while others are nice-to-have improvements.

### 11.9.2 Activities

#### Activity 6.1: Compile Comprehensive Gap Register

**Gap Register Fields:**

| Field | Description |
|-------|-------------|
| Gap ID | Unique identifier (G001, G002, ...) |
| Gap Name | Short descriptive name |
| Gap Description | Detailed description |
| Category | Capability / Application / Data / Technology |
| RA Reference | Reference to RA element (C1.1, A3.2, D5, etc.) |
| Gap Type | Missing / Non-conformance / Maturity / Quality |
| Severity | Critical / Major / Minor |
| Business Impact | Description of impact if not addressed |
| Complexity | High / Medium / Low |
| Estimated Effort | Person-months or T-shirt sizing |
| Dependencies | Other gaps this depends on |
| DPI Relevance | Related to DPI integration? Yes/No |
| Priority | Must / Should / Could / Won't |

#### Activity 6.2: Categorize Gaps

**Category Definitions:**

| Category | Scope | Examples |
|----------|-------|----------|
| **Capability** | Business ability to perform function | Missing inspection, immature risk assessment |
| **Application** | Software system to support capability | No license system, outdated case management |
| **Data** | Information assets and quality | Missing domain, poor quality, no governance |
| **Technology** | Infrastructure, security, platforms | Technical debt, vulnerabilities, platform limits |

#### Activity 6.3: Assess Gap Severity and Impact

**Severity Assessment Matrix:**

| Severity | Definition | Business Impact | Timeframe |
|----------|------------|-----------------|-----------|
| **Critical** | Blocking core operations or compliance | High | Immediate |
| **Major** | Significant negative impact on service | Medium-High | 6-12 months |
| **Minor** | Limited impact, workaround exists | Low-Medium | 12+ months |

**Severity Scoring (for each gap):**

| Criterion | Weight | Score (1-5) | Weighted Score |
|-----------|--------|-------------|----------------|
| Impact on core business | 30% | | |
| Compliance/legal risk | 25% | | |
| Customer/citizen impact | 20% | | |
| Operational efficiency impact | 15% | | |
| Strategic alignment impact | 10% | | |
| **Total Severity Score** | 100% | | |

- Score ≥ 4.0: Critical
- Score 2.5-3.9: Major
- Score < 2.5: Minor

#### Activity 6.4: Estimate Complexity and Effort

**Complexity Assessment:**

| Factor | High Complexity | Medium | Low |
|--------|-----------------|--------|-----|
| Technical | New technology, multiple integrations | Known technology | Standard implementation |
| Organizational | Multiple departments, culture change | Some process change | Single team |
| Data | Major migration, quality remediation | Moderate migration | Simple setup |
| External | DPI integration, vendor dependencies | Some coordination | Internal only |
| Risk | Significant uncertainty | Manageable risk | Well-understood |

**Effort Estimation (T-Shirt Sizing):**

| Size | Effort Range | Characteristics |
|------|--------------|-----------------|
| **XS** | < 1 person-month | Configuration, minor enhancement |
| **S** | 1-3 person-months | Single component implementation |
| **M** | 3-6 person-months | Module implementation with integration |
| **L** | 6-12 person-months | System implementation |
| **XL** | 12+ person-months | Major system, multiple integrations |

#### Activity 6.5: Prioritize Using MoSCoW Methodology

**MoSCoW Definitions:**

| Priority | Definition | Criteria |
|----------|------------|----------|
| **Must Have** | Critical for core function; compliance requirement | Without it, transformation fails |
| **Should Have** | Important for efficiency; expected by stakeholders | Degraded value without it |
| **Could Have** | Desirable enhancement | Adds value but not essential |
| **Won't Have** | Out of scope for this phase | Future consideration |

**Prioritization Workshop:**
1. Pre-work: Distribute Gap Register
2. Review: Walk through gaps by category
3. Initial Vote: Each stakeholder assigns priority
4. Discussion: Address disagreements
5. Consensus: Agree final priorities
6. Document: Record rationale

### 11.9.3 Step 6 Output Summary

```
┌────────────────────────────────────────────────────────────────────────────┐
│               STEP 6 OUTPUT: PRIORITIZED GAP REGISTER SUMMARY              │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  TOTAL GAPS IN REGISTER: ________                                          │
│                                                                            │
│  BY CATEGORY:                                                              │
│  - Capability Gaps: ________                                               │
│  - Application Gaps: ________                                              │
│  - Data Gaps: ________                                                     │
│  - Technology Gaps: ________                                               │
│                                                                            │
│  BY SEVERITY:                                                              │
│  - Critical: ________                                                      │
│  - Major: ________                                                         │
│  - Minor: ________                                                         │
│                                                                            │
│  BY PRIORITY (MoSCoW):                                                     │
│  - Must Have: ________                                                     │
│  - Should Have: ________                                                   │
│  - Could Have: ________                                                    │
│  - Won't Have (this time): ________                                        │
│                                                                            │
│  BY COMPLEXITY:                                                            │
│  - High: ________                                                          │
│  - Medium: ________                                                        │
│  - Low: ________                                                           │
│                                                                            │
│  ESTIMATED EFFORT:                                                         │
│  - Must Have items: ________ person-months                                 │
│  - Should Have items: ________ person-months                               │
│  - Could Have items: ________ person-months                                │
│                                                                            │
│  DPI-RELATED GAPS: ________ (___% of total)                               │
│                                                                            │
│  Prioritization Workshop: Date: _________  Participants: _________________│
│                                                                            │
│  Completed by: ________________________  Date: _____________              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 11.10 Step 7: Document ASSESS Results

### 11.10.1 Purpose

Consolidate all ASSESS phase findings into formal deliverables, obtain stakeholder sign-off, and make a proceed/delay recommendation for the ADAPT phase.

### 11.10.2 Activities

#### Activity 7.1: Complete AS-IS Architecture Document

**Structure:**

```
AS-IS ARCHITECTURE DOCUMENT
═══════════════════════════════════════════════════════════════════════════

DOCUMENT CONTROL
├── Version History
├── Authors
└── Reviewers

EXECUTIVE SUMMARY
├── Organization Overview
├── Key Findings Summary
└── Critical Issues Identified

1. ORGANIZATION CONTEXT
├── 1.1 Organization Profile (from DISCOVER)
├── 1.2 Current Strategic Objectives
└── 1.3 Scope of Assessment

2. AS-IS BUSINESS ARCHITECTURE (from Step 1)
├── 2.1 Current Services Catalog
├── 2.2 Current Capability Map
├── 2.3 Key Processes
├── 2.4 Stakeholder Relationships
└── 2.5 Capability Maturity Assessment

3. AS-IS APPLICATION ARCHITECTURE (from Step 2)
├── 3.1 Application Inventory
├── 3.2 Integration Landscape
├── 3.3 Application Health Assessment
├── 3.4 Application-Capability Mapping
└── 3.5 DPI Integration Status

4. AS-IS DATA ARCHITECTURE (from Step 3)
├── 4.1 Data Asset Inventory
├── 4.2 Data Flows
├── 4.3 Data Quality Assessment
├── 4.4 Data Ownership
└── 4.5 External Data Dependencies

5. AS-IS TECHNOLOGY ARCHITECTURE (from Step 4)
├── 5.1 Infrastructure Overview
├── 5.2 Technical Debt Assessment
├── 5.3 Security Posture
├── 5.4 Operational Capabilities
└── 5.5 Platform and Hosting

APPENDICES
├── A. Detailed Application Inventory
├── B. Integration Details
├── C. Data Inventory
└── D. Technical Debt Register
```

#### Activity 7.2: Complete Gap Analysis Report

**Structure:**

```
GAP ANALYSIS REPORT
═══════════════════════════════════════════════════════════════════════════

DOCUMENT CONTROL

EXECUTIVE SUMMARY
├── Key Findings
├── Gap Statistics
└── Priority Recommendations

1. METHODOLOGY
├── 1.1 Reference Architecture Used
├── 1.2 Comparison Approach
└── 1.3 Prioritization Methodology

2. CAPABILITY GAP ANALYSIS (from Step 5)
├── 2.1 Capability Comparison Matrix
├── 2.2 Missing Capabilities
├── 2.3 Maturity Gaps
└── 2.4 Capability Gap Summary

3. APPLICATION GAP ANALYSIS
├── 3.1 Application Comparison Matrix
├── 3.2 Missing Applications
├── 3.3 Applications to Replace
├── 3.4 Applications to Retain
└── 3.5 Application Gap Summary

4. DATA GAP ANALYSIS
├── 4.1 Data Domain Comparison
├── 4.2 Data Quality Gaps
├── 4.3 Data Governance Gaps
└── 4.4 Data Gap Summary

5. TECHNOLOGY GAP ANALYSIS
├── 5.1 Infrastructure Gaps
├── 5.2 Security Gaps
├── 5.3 Platform Gaps
└── 5.4 Technology Gap Summary

6. PRIORITIZED GAP REGISTER (from Step 6)
├── 6.1 Must Have Gaps
├── 6.2 Should Have Gaps
├── 6.3 Could Have Gaps
└── 6.4 Won't Have (this time)

7. RECOMMENDATIONS
├── 7.1 Critical Actions
├── 7.2 Quick Wins
└── 7.3 Long-term Initiatives

APPENDICES
├── A. Complete Gap Register (Spreadsheet)
├── B. Prioritization Workshop Notes
└── C. Evidence and References
```

#### Activity 7.3: Prepare ASSESS Summary

See **Template 11.14.4: ASSESS Summary** below.

#### Activity 7.4: Obtain Stakeholder Sign-off

**Sign-off Process:**
1. Circulate draft deliverables for comments (3-5 days)
2. Incorporate feedback, document disagreements
3. Present findings to senior stakeholders
4. Obtain signatures on ASSESS Summary
5. Distribute final documents

#### Activity 7.5: Proceed/Delay Recommendation

**Proceed Criteria:**

| Criterion | Threshold | Status |
|-----------|-----------|--------|
| AS-IS documentation complete | >90% coverage | ⬜ Met |
| Gap register validated | Stakeholder agreement | ⬜ Met |
| Priorities agreed | No critical disagreements | ⬜ Met |
| Resources available | Team for ADAPT phase | ⬜ Met |
| No blocking issues | Critical issues addressed | ⬜ Met |

---

## 11.11 Gap Analysis Framework

### 11.11.1 Gap Types and Categories

**Gap Types:**

| Gap Type | Definition | Example |
|----------|------------|---------|
| **Missing** | Element does not exist in AS-IS | No risk assessment capability |
| **Non-conformance** | Element exists but differs from RA | Manual process where automated expected |
| **Maturity** | Element exists but below required level | Level 2 maturity where Level 4 expected |
| **Quality** | Element exists but quality issues | Poor data quality in customer records |

**Gap Categories:**

| Category | Sub-Types |
|----------|-----------|
| **Capability** | Missing, Immature, Inconsistent, Capacity |
| **Application** | Missing, Outdated, Non-compliant, Integration, Functionality |
| **Data** | Missing, Quality, Governance, Access, External dependency |
| **Technology** | Infrastructure, Security, Performance, Availability, Skills |

### 11.11.2 Prioritization Matrix

**Priority Assignment Matrix:**

| Severity | Complexity LOW | Complexity MED | Complexity HIGH |
|----------|---------------|----------------|-----------------|
| **Critical** | MUST (Quick Win) | MUST | MUST |
| **Major** | SHOULD (Quick Win) | SHOULD | SHOULD |
| **Minor** | COULD | COULD | WON'T |

### 11.11.3 Dependency Mapping

Document dependencies between gaps:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           GAP DEPENDENCY MAP                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  G001 (Identity Integration)                                                 │
│    │                                                                         │
│    ├──► G003 (Customer Portal)                                              │
│    │      │                                                                  │
│    │      └──► G007 (Self-Service)                                          │
│    │                                                                         │
│    └──► G005 (Risk Engine)                                                  │
│           │                                                                  │
│           └──► G008 (Audit Selection)                                       │
│                                                                              │
│  G002 (Data Platform)                                                        │
│    │                                                                         │
│    ├──► G005 (Risk Engine)                                                  │
│    │                                                                         │
│    └──► G006 (Analytics)                                                    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 11.12 ASSESS Deliverables Checklist

### 11.12.1 Required Deliverables

| Deliverable | Template | Status | Quality Check |
|-------------|----------|--------|---------------|
| AS-IS Architecture Document | 11.14.1 | ⬜ | All domains documented |
| Gap Analysis Report | 11.14.2 | ⬜ | RA comparison complete |
| Prioritized Gap Register | 11.14.3 | ⬜ | All gaps prioritized |
| ASSESS Summary | 11.14.4 | ⬜ | Signed by stakeholders |
| Application Inventory | 11.5 | ⬜ | All apps cataloged |
| Technical Debt Register | 11.7 | ⬜ | All debt items listed |

### 11.12.2 Quality Criteria

**For AS-IS Documentation:**
- [ ] All four BDAT domains documented
- [ ] Templates completed with required detail
- [ ] Sources and evidence documented
- [ ] Stakeholders validated findings
- [ ] Consistent with RA structure

**For Gap Analysis:**
- [ ] All RA elements compared
- [ ] Gaps correctly categorized
- [ ] Severity assessed consistently
- [ ] Complexity estimated
- [ ] Effort estimated
- [ ] Dependencies mapped

**For Prioritization:**
- [ ] MoSCoW applied to all gaps
- [ ] Prioritization workshop held
- [ ] Stakeholder agreement documented
- [ ] Rationale recorded for Must/Should items

---

## 11.13 Transition to ADAPT Phase

### 11.13.1 Handoff Checklist

Before starting ADAPT phase:

| Item | Status | Notes |
|------|--------|-------|
| AS-IS Architecture Document complete and signed | ⬜ | |
| Gap Analysis Report complete and signed | ⬜ | |
| Prioritized Gap Register finalized | ⬜ | |
| ASSESS Summary signed by senior management | ⬜ | |
| Proceed recommendation accepted | ⬜ | |
| ADAPT phase team identified | ⬜ | |
| ADAPT phase timeline agreed | ⬜ | |
| Stakeholder availability confirmed | ⬜ | |

### 11.13.2 What ADAPT Needs from ASSESS

| ASSESS Output | How ADAPT Uses It |
|---------------|-------------------|
| AS-IS Architecture | Baseline for target architecture definition |
| Gap Register | Input for target architecture scope |
| Priority Assessment | Focus for adaptation decisions |
| Complexity Analysis | Input for transition planning |
| Technical Debt Register | Remediation planning |

### 11.13.3 Preparing for Target Architecture Creation

**Key Inputs for ADAPT:**
1. Selected Reference Architecture (template for target)
2. AS-IS Architecture Document (current baseline)
3. Prioritized Gap Register (what to address)
4. DPI Status (integration constraints)
5. Implementation Approach (Full/Phased/Basic)

### 11.13.4 Transition Statement

```
┌────────────────────────────────────────────────────────────────────────────┐
│                      ASSESS → ADAPT TRANSITION                             │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  ASSESS PHASE COMPLETION:                                                  │
│                                                                            │
│  ⬜ AS-IS Architecture documented across all BDAT domains                  │
│  ⬜ Gap Analysis completed against selected RA                             │
│  ⬜ Gap Register prioritized using MoSCoW                                  │
│  ⬜ ASSESS Summary signed and distributed                                  │
│                                                                            │
│  KEY METRICS:                                                              │
│  Total gaps identified: ________                                           │
│  Must Have gaps: ________                                                  │
│  Should Have gaps: ________                                                │
│  Estimated Must Have effort: ________ person-months                        │
│                                                                            │
│  ADAPT PHASE READINESS:                                                    │
│                                                                            │
│  ⬜ ADAPT team assembled                                                   │
│  ⬜ RA document available for tailoring                                    │
│  ⬜ Gap Register available for target scoping                              │
│  ⬜ Timeline agreed                                                        │
│                                                                            │
│  PROCEED TO ADAPT: ⬜ YES  ⬜ NO (reason: ___________________________)     │
│                                                                            │
│  ADAPT Phase Start Date: _____________                                     │
│                                                                            │
│  Transition approved by: ________________________  Date: _____________    │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 11.14 ASSESS Templates

### 11.14.1 Template: AS-IS Architecture Document Structure

*See detailed structure in Activity 7.1 above*

### 11.14.2 Template: Gap Analysis Report Structure

*See detailed structure in Activity 7.2 above*

### 11.14.3 Template: Gap Register

**Spreadsheet Format:**

| Gap ID | Name | Description | Category | RA Ref | Gap Type | Severity | Impact | Complexity | Effort | Dependencies | DPI? | Priority | Owner | Status | Notes |
|--------|------|-------------|----------|--------|----------|----------|--------|------------|--------|--------------|------|----------|-------|--------|-------|
| G001 | | | Cap/App/Data/Tech | | Missing/NC/Mat | Crit/Maj/Min | | H/M/L | | | Y/N | M/S/C/W | | Open | |

### 11.14.4 Template: ASSESS Summary

```
══════════════════════════════════════════════════════════════════════════════
                           ASSESS PHASE SUMMARY
══════════════════════════════════════════════════════════════════════════════

ORGANIZATION INFORMATION
─────────────────────────────────────────────────────────────────────────────
Organization Name:     ___________________________________________________
Country/Jurisdiction:  ___________________________________________________
Assessment Period:     __________________ to __________________
Project Lead:          ___________________________________________________

══════════════════════════════════════════════════════════════════════════════
1. DISCOVER PHASE INPUTS
══════════════════════════════════════════════════════════════════════════════

Organization Type:        [ ] PDU    [ ] RA    [ ] SDA
DPI Readiness Level:      [ ] Level 1    [ ] Level 2    [ ] Level 3
Selected Reference Architecture: ____________________________________

══════════════════════════════════════════════════════════════════════════════
2. AS-IS ARCHITECTURE SUMMARY
══════════════════════════════════════════════════════════════════════════════

BUSINESS ARCHITECTURE
Services Documented:          ________ (Digital: ____%)
Capabilities Assessed:        ________
  - Full: ___ (___%)
  - Partial: ___ (___%)
  - None: ___ (___%)
Average Capability Maturity:  ____/5

APPLICATION ARCHITECTURE
Applications Inventoried:     ________
Application Health:
  - Healthy: ___ (___%)
  - Adequate: ___ (___%)
  - Problematic: ___ (___%)
  - End-of-Life: ___ (___%)
DPI Integration Status:       ____ of ____ components integrated

DATA ARCHITECTURE
Data Domains Documented:      ________
Overall Data Quality:         [ ] High    [ ] Medium    [ ] Low
Data Governance Maturity:     [ ] Established    [ ] Developing    [ ] Initial

TECHNOLOGY ARCHITECTURE
Hosting Model:                [ ] On-Premise    [ ] Cloud    [ ] Hybrid
Technical Debt Items:         ________ (High Risk: ____)
Security Compliance:          [ ] Compliant    [ ] Partial    [ ] Non-compliant

══════════════════════════════════════════════════════════════════════════════
3. GAP ANALYSIS SUMMARY
══════════════════════════════════════════════════════════════════════════════

TOTAL GAPS IDENTIFIED: ________

BY CATEGORY:
┌──────────────────┬─────────┬──────────┬─────────┬────────────┐
│ Category         │ Total   │ Critical │ Major   │ Minor      │
├──────────────────┼─────────┼──────────┼─────────┼────────────┤
│ Capability       │         │          │         │            │
│ Application      │         │          │         │            │
│ Data             │         │          │         │            │
│ Technology       │         │          │         │            │
├──────────────────┼─────────┼──────────┼─────────┼────────────┤
│ TOTAL            │         │          │         │            │
└──────────────────┴─────────┴──────────┴─────────┴────────────┘

BY PRIORITY:
┌──────────────────┬─────────┬───────────────┬────────────────┐
│ Priority         │ Count   │ Est. Effort   │ % of Total     │
├──────────────────┼─────────┼───────────────┼────────────────┤
│ Must Have        │         │               │                │
│ Should Have      │         │               │                │
│ Could Have       │         │               │                │
│ Won't Have       │         │ N/A           │                │
└──────────────────┴─────────┴───────────────┴────────────────┘

TOP 10 PRIORITY GAPS:
┌─────┬────────────────────────────────────┬────────────┬──────────┐
│ #   │ Gap Description                    │ Priority   │ Effort   │
├─────┼────────────────────────────────────┼────────────┼──────────┤
│ 1   │                                    │            │          │
│ 2   │                                    │            │          │
│ 3   │                                    │            │          │
│ 4   │                                    │            │          │
│ 5   │                                    │            │          │
│ 6   │                                    │            │          │
│ 7   │                                    │            │          │
│ 8   │                                    │            │          │
│ 9   │                                    │            │          │
│ 10  │                                    │            │          │
└─────┴────────────────────────────────────┴────────────┴──────────┘

══════════════════════════════════════════════════════════════════════════════
4. KEY FINDINGS
══════════════════════════════════════════════════════════════════════════════

STRENGTHS:
1. _______________________________________________________________________
2. _______________________________________________________________________
3. _______________________________________________________________________

CRITICAL ISSUES:
1. _______________________________________________________________________
2. _______________________________________________________________________
3. _______________________________________________________________________

QUICK WINS:
1. _______________________________________________________________________
2. _______________________________________________________________________
3. _______________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
5. RECOMMENDATIONS
══════════════════════════════════════════════════════════════════════════════

PROCEED TO ADAPT PHASE:    [ ] YES    [ ] NO (with conditions)    [ ] DELAY

If YES, recommended focus areas:
1. _______________________________________________________________________
2. _______________________________________________________________________
3. _______________________________________________________________________

ESTIMATED TRANSFORMATION SCOPE:
- Total Effort (Must + Should): ________ person-months
- Suggested Duration: ________ months
- Suggested Phases: ________

══════════════════════════════════════════════════════════════════════════════
SIGN-OFF
══════════════════════════════════════════════════════════════════════════════

Prepared by:
Name: ________________________________  Role: _____________________________
Signature: ___________________________  Date: _____________________________

Reviewed by (Technical):
Name: ________________________________  Role: _____________________________
Signature: ___________________________  Date: _____________________________

Reviewed by (Business):
Name: ________________________________  Role: _____________________________
Signature: ___________________________  Date: _____________________________

Approved by (Senior Management):
Name: ________________________________  Role: _____________________________
Signature: ___________________________  Date: _____________________________

══════════════════════════════════════════════════════════════════════════════
ATTACHMENTS
══════════════════════════════════════════════════════════════════════════════

[ ] A. AS-IS Architecture Document
[ ] B. Gap Analysis Report
[ ] C. Prioritized Gap Register (Spreadsheet)
[ ] D. Workshop Notes and Evidence

══════════════════════════════════════════════════════════════════════════════
```

---

═══════════════════════════════════════════════════════════════════════════════
# APPENDICES
═══════════════════════════════════════════════════════════════════════════════

## Appendix A: DISCOVER Phase Quick Reference Card

```
┌─────────────────────────────────────────────────────────────────────────────┐
│              DISCOVER PHASE QUICK REFERENCE CARD                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  PURPOSE: Confirm classification, verify DPI, select Reference Architecture │
│  DURATION: 1-3 weeks depending on complexity                                │
│                                                                              │
│  ═══════════════════════════════════════════════════════════════════════    │
│  STEPS                                                                       │
│  ═══════════════════════════════════════════════════════════════════════    │
│                                                                              │
│  Step 1: CONFIRM ORGANIZATION CLASSIFICATION                                 │
│  ────────────────────────────────────────────                                │
│  • Review Entry Point Tools results (Section 8)                             │
│  • Validate with stakeholders in workshop                                   │
│  • Document confirmed type: PDU / RA / SDA                                  │
│  • Handle any disputes                                                      │
│  → OUTPUT: Classification Record (Template 10.9.1)                          │
│                                                                              │
│  Step 2: CONFIRM DPI READINESS                                               │
│  ────────────────────────────────                                           │
│  • Review Entry Point Tools DPI assessment (Section 9)                      │
│  • Verify with national digital agency                                      │
│  • Identify any changes since initial assessment                            │
│  • Confirm critical gaps and mitigation                                     │
│  → OUTPUT: DPI Verification Record (Template 10.9.2)                        │
│                                                                              │
│  Step 3: SELECT REFERENCE ARCHITECTURE                                       │
│  ─────────────────────────────────────────                                   │
│  • Match org type to RA using selection matrix                              │
│  • Determine approach: Full / Phased / Basic                                │
│  • Verify minimum DPI requirements                                          │
│  • Confirm with stakeholders                                                │
│  → OUTPUT: RA Selection Decision                                            │
│                                                                              │
│  Step 4: DOCUMENT OUTPUTS                                                    │
│  ───────────────────────────                                                 │
│  • Complete DISCOVER Summary                                                │
│  • Compile evidence                                                         │
│  • Obtain sign-off                                                          │
│  • Decide: Proceed to ASSESS?                                               │
│  → OUTPUT: DISCOVER Summary (Template 10.9.3)                               │
│                                                                              │
│  ═══════════════════════════════════════════════════════════════════════    │
│  KEY DECISION POINTS                                                         │
│  ═══════════════════════════════════════════════════════════════════════    │
│                                                                              │
│  DP1: Classification confirmed? → YES: proceed / NO: revisit                │
│  DP2: DPI adequate for org type? → Level determines approach                │
│  DP3: Proceed to ASSESS? → YES: start / NO: address gaps                    │
│                                                                              │
│  ═══════════════════════════════════════════════════════════════════════    │
│  RA SELECTION QUICK GUIDE                                                    │
│  ═══════════════════════════════════════════════════════════════════════    │
│                                                                              │
│  Classification + DPI Level = Selected RA + Approach                        │
│                                                                              │
│  PDU + Any Level → PDU RA (Full)                                            │
│  RA  + Level 3   → RA RA (Full)                                             │
│  RA  + Level 2   → RA RA (Phased)                                           │
│  RA  + Level 1   → RA RA (Basic)                                            │
│  SDA + Level 3   → SDA RA (Full)                                            │
│  SDA + Level 2   → SDA RA (Phased)                                          │
│  SDA + Level 1   → RA RA → SDA RA (Evolution)                               │
│                                                                              │
│  ═══════════════════════════════════════════════════════════════════════    │
│  DELIVERABLES CHECKLIST                                                      │
│  ═══════════════════════════════════════════════════════════════════════    │
│                                                                              │
│  [ ] Organization Classification Record                                      │
│  [ ] DPI Verification Record                                                │
│  [ ] RA Selection Decision                                                  │
│  [ ] DISCOVER Summary (signed)                                              │
│  [ ] Evidence Package                                                       │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Appendix B: ASSESS Phase Quick Reference Card

```
┌─────────────────────────────────────────────────────────────────────────────┐
│               ASSESS PHASE QUICK REFERENCE CARD                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  PURPOSE: Document AS-IS state, identify gaps against selected RA           │
│  DURATION: 4-8 weeks depending on organization complexity                   │
│                                                                              │
│  ═══════════════════════════════════════════════════════════════════════    │
│  STEPS                                                                       │
│  ═══════════════════════════════════════════════════════════════════════    │
│                                                                              │
│  Steps 1-4: DOCUMENT AS-IS (BDAT)                                           │
│  ────────────────────────────────                                            │
│  Step 1: Business Architecture (1-2 weeks)                                  │
│    • Services, capabilities, processes, stakeholders, maturity              │
│  Step 2: Application Architecture (1-2 weeks)                               │
│    • Inventory, integrations, health, DPI status                            │
│  Step 3: Data Architecture (0.5-1 week)                                     │
│    • Assets, flows, quality, ownership, dependencies                        │
│  Step 4: Technology Architecture (0.5-1 week)                               │
│    • Infrastructure, debt, security, operations                             │
│  → OUTPUT: AS-IS Architecture Document                                      │
│                                                                              │
│  Step 5: COMPARE TO REFERENCE ARCHITECTURE (1 week)                         │
│  ──────────────────────────────────────────────────                          │
│  • Map AS-IS capabilities to RA capabilities                                │
│  • Map AS-IS applications to RA applications                                │
│  • Compare data domains and technology                                      │
│  • Identify gaps: Missing / Non-conformance / Maturity                      │
│  → OUTPUT: Gap Mapping                                                      │
│                                                                              │
│  Step 6: PRIORITIZE GAPS (1 week)                                           │
│  ────────────────────────────────                                            │
│  • Compile gap register                                                     │
│  • Categorize: Capability / Application / Data / Technology                 │
│  • Assess severity and complexity                                           │
│  • Prioritize using MoSCoW                                                  │
│  • Conduct prioritization workshop                                          │
│  → OUTPUT: Prioritized Gap Register                                         │
│                                                                              │
│  Step 7: DOCUMENT RESULTS (0.5-1 week)                                      │
│  ─────────────────────────────────────                                       │
│  • Complete Gap Analysis Report                                             │
│  • Prepare ASSESS Summary                                                   │
│  • Obtain stakeholder sign-off                                              │
│  • Proceed/delay recommendation                                             │
│  → OUTPUT: ASSESS Summary (signed)                                          │
│                                                                              │
│  ═══════════════════════════════════════════════════════════════════════    │
│  GAP PRIORITIZATION QUICK GUIDE                                              │
│  ═══════════════════════════════════════════════════════════════════════    │
│                                                                              │
│  MoSCoW Priorities:                                                          │
│  ─────────────────                                                           │
│  MUST HAVE   - Critical for core function, compliance required              │
│  SHOULD HAVE - Important for efficiency, expected by stakeholders           │
│  COULD HAVE  - Desirable enhancement, adds value but not essential          │
│  WON'T HAVE  - Out of scope for this phase, future consideration            │
│                                                                              │
│  Priority Assignment Matrix:                                                 │
│  ─────────────────────────────                                               │
│                   │ Complexity LOW │ Complexity MED │ Complexity HIGH │      │
│  ─────────────────┼───────────────┼───────────────┼────────────────┤      │
│  Severity CRIT    │ MUST (QW)     │ MUST          │ MUST           │      │
│  Severity MAJOR   │ SHOULD (QW)   │ SHOULD        │ SHOULD         │      │
│  Severity MINOR   │ COULD         │ COULD         │ WON'T          │      │
│                                                                              │
│  QW = Quick Win                                                              │
│                                                                              │
│  ═══════════════════════════════════════════════════════════════════════    │
│  DELIVERABLES CHECKLIST                                                      │
│  ═══════════════════════════════════════════════════════════════════════    │
│                                                                              │


═══════════════════════════════════════════════════════════════════════════════
# PART IV: ADAPT & PLAN (Sections 12-13)
═══════════════════════════════════════════════════════════════════════════════


# SECTION 12: ADAPT PHASE GUIDE

## 12.1 PHASE OVERVIEW

### 12.1.1 Purpose of ADAPT Phase

The ADAPT phase is the **third phase** in the GEATDM (Generic EA Target Architecture Development Method). Its purpose is to tailor the selected Reference Architecture (PDU, RA, or SDA) to the organization's specific context and create the TO-BE (target) architecture.

The ADAPT phase bridges the gap between the generic Reference Architecture and the organization's unique requirements, answering three critical questions:

1. **What should our target state look like?** (Tailored RA = TO-BE Architecture)
2. **What modifications are justified?** (Tailoring decisions)
3. **What transitions are required?** (AS-IS → TO-BE migration path)

The ADAPT phase takes the prioritized gaps from ASSESS and transforms them into actionable architectural decisions, creating a target architecture that is both aligned with best practices (RA) and practical for the organization's context.

### 12.1.2 Expected Duration

| Organization Complexity | Typical Duration | Notes |
|------------------------|------------------|-------|
| PDU (Simple) | 4 weeks | Limited tailoring, straightforward target |
| RA (Moderate) | 6 weeks | Moderate customization, regulatory considerations |
| SDA (Complex) | 8 weeks | Extensive tailoring, multiple domains, complex transitions |

**Note:** Duration includes stakeholder workshops and validation. The ADAPT phase should not be rushed—poorly tailored architectures lead to implementation failures.

### 12.1.3 Key Participants

| Role | Responsibility | Involvement |
|------|----------------|-------------|
| **EA Lead** | Coordinates tailoring activities, ensures RA integrity | Full-time |
| **Business Architect** | Tailors capabilities, validates business alignment | Full-time |
| **Application Architect** | Tailors applications, defines build/buy decisions | Full-time |
| **Data Architect** | Tailors data domains, defines migration requirements | Part-time |
| **Technology Architect** | Selects platform tier, defines infrastructure | Part-time |
| **DPI Specialist** | Ensures DPI integration alignment | Part-time |
| **Business Stakeholders** | Validate tailoring decisions, confirm priorities | Workshops |
| **Senior Management** | Approve TO-BE architecture, endorse transitions | Decision points |

### 12.1.4 Inputs to ADAPT Phase

| Input | Source | Purpose |
|-------|--------|---------|
| **ASSESS Summary** | Phase 2 Output | Gap priorities, AS-IS baseline |
| **Gap Analysis Report** | Phase 2 Output | Detailed gaps to address |
| **Prioritized Gap Register** | Phase 2 Output | Must/Should/Could gaps |
| **AS-IS Architecture Document** | Phase 2 Output | Current state baseline |
| **Selected Reference Architecture** | GEATDM-WP2/3/4 | Target state template |
| **DPI Readiness Assessment** | DISCOVER Phase | Integration constraints |
| **EA Principles** | GEATDM-WP1-T12 | Governance constraints |

### 12.1.5 Outputs of ADAPT Phase

| Output | Description | Format |
|--------|-------------|--------|
| **TO-BE Architecture Document** | Tailored target state across all BDAT domains | Structured document |
| **Tailoring Decision Log** | Record of all customization decisions with justification | Structured log |
| **Transition Requirements** | AS-IS → TO-BE migration specifications | Requirements document |
| **ADAPT Summary** | Consolidated findings with sign-off | Summary document |
| **Proceed Recommendation** | Go/No-Go for PLAN phase | Decision record |

### 12.1.6 ADAPT in the GEATDM Context

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        GEATDM APPLICATION METHOD                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌───────────┐    ┌───────────┐    ╔═══════════╗    ┌───────────┐    ┌───────────┐  │
│  │ DISCOVER  │ →  │  ASSESS   │ →  ║   ADAPT   ║ →  │   PLAN    │ →  │  EXECUTE  │  │
│  │ (Phase 1) │    │ (Phase 2) │    ║ (Phase 3) ║    │ (Phase 4) │    │ (Phase 5) │  │
│  └───────────┘    └───────────┘    ╚═══════════╝    └───────────┘    └───────────┘  │
│                                                                              │
│                                    ▲ YOU ARE HERE                            │
│                                                                              │
│  Classify org      Document         Tailor RA        Develop         Implement    │
│  Check DPI         AS-IS            to context       roadmap         & govern     │
│  Select RA         Identify gaps    Create TO-BE     Define phases               │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 12.1.7 The Adaptation Principle

The ADAPT phase follows a fundamental principle:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        THE ADAPTATION PRINCIPLE                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────┐          ┌─────────────────┐         ┌─────────────────┐  │
│  │    REFERENCE    │          │    TAILORING    │         │     TO-BE       │  │
│  │  ARCHITECTURE   │    +     │    DECISIONS    │    =    │  ARCHITECTURE   │  │
│  │   (RA Template) │          │   (Context-fit) │         │ (Target State)  │  │
│  └─────────────────┘          └─────────────────┘         └─────────────────┘  │
│                                                                              │
│  The RA provides the proven       The organization adds      The result is a │
│  structure, capabilities,         context-specific elements, fit-for-purpose │
│  applications, and patterns       adjusts where justified,   target that     │
│  from best practices              and selects options        balances best   │
│                                                              practice with   │
│                                                              local reality   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Key Principles:**
- **Inherit, Don't Reinvent:** Start with the RA as the baseline; customize only where necessary
- **Justify Deviations:** Every modification from the RA must have documented rationale
- **Protect the Core:** Core RA elements (DPI integration, BB alignment, security principles) must be preserved
- **Context Matters:** Local regulations, capabilities, and constraints are valid customization drivers

---

## 12.2 ADAPT PROCESS FLOW

### 12.2.1 Visual Process Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              ADAPT PHASE                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  STEP 1: REVIEW GAP ANALYSIS RESULTS                                        │
│  ├─ 1.1 Review prioritized gaps from ASSESS                                 │
│  ├─ 1.2 Confirm priorities with stakeholders                                │
│  ├─ 1.3 Identify quick wins vs. major initiatives                           │
│  └─ 1.4 Validate DPI dependency gaps                                        │
│           │                                                                  │
│           ▼                                                                  │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  DECISION POINT DP4: Determine Adaptation Scope                      │   │
│  │  ├─ MINIMAL: Few changes, mostly adopt RA as-is                      │   │
│  │  ├─ MODERATE: Some customization needed                               │   │
│  │  └─ EXTENSIVE: Significant tailoring required                         │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 2: DETERMINE ADAPTATION SCOPE                                         │
│  ├─ 2.1 Assess adaptation factors                                           │
│  ├─ 2.2 Apply Adaptation Decision Matrix                                    │
│  ├─ 2.3 Define adaptation approach                                          │
│  └─ 2.4 Establish tailoring boundaries                                      │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 3: TAILOR CAPABILITIES                                                │
│  ├─ 3.1 Confirm required capabilities from RA                               │
│  ├─ 3.2 Add organization-specific capabilities                              │
│  ├─ 3.3 Remove non-applicable capabilities (with justification)             │
│  ├─ 3.4 Adjust capability definitions as needed                             │
│  └─ 3.5 Validate capability inheritance (PDU ⊂ RA ⊂ SDA)                    │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 4: TAILOR APPLICATIONS                                                │
│  ├─ 4.1 Map RA applications to existing/planned systems                     │
│  ├─ 4.2 Make build vs. buy decisions                                        │
│  ├─ 4.3 Define integration requirements                                     │
│  ├─ 4.4 Specify DPI/Building Block integrations                             │
│  └─ 4.5 Define application health targets                                   │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 5: TAILOR DATA ARCHITECTURE                                           │
│  ├─ 5.1 Adapt data domains to local context                                 │
│  ├─ 5.2 Define data migration requirements                                  │
│  ├─ 5.3 Specify data quality rules and targets                              │
│  ├─ 5.4 Plan analytics capabilities                                         │
│  └─ 5.5 Define data governance requirements                                 │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 6: TAILOR TECHNOLOGY                                                  │
│  ├─ 6.1 Select platform tier (Basic/Standard/Enterprise)                    │
│  ├─ 6.2 Define infrastructure requirements                                  │
│  ├─ 6.3 Specify security requirements                                       │
│  ├─ 6.4 Plan cloud/on-premise decisions                                     │
│  └─ 6.5 Define operational requirements                                     │
│           │                                                                  │
│           ▼                                                                  │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  CHECKPOINT: Are all domains tailored?                               │   │
│  │  ├─ YES → Proceed to Step 7                                          │   │
│  │  └─ NO  → Complete missing sections                                  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 7: CREATE TO-BE ARCHITECTURE                                          │
│  ├─ 7.1 Compile all tailored sections                                       │
│  ├─ 7.2 Create TO-BE Architecture Document                                  │
│  ├─ 7.3 Validate completeness and consistency                               │
│  ├─ 7.4 Verify RA inheritance compliance                                    │
│  └─ 7.5 Conduct stakeholder review                                          │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 8: DEFINE TRANSITION REQUIREMENTS                                     │
│  ├─ 8.1 Identify AS-IS to TO-BE transitions                                 │
│  ├─ 8.2 Define coexistence requirements                                     │
│  ├─ 8.3 Specify data migration needs                                        │
│  ├─ 8.4 Document integration changes                                        │
│  └─ 8.5 Define transition architectures (if needed)                         │
│           │                                                                  │
│           ▼                                                                  │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  DECISION POINT DP5: Approve TO-BE Architecture?                     │   │
│  │  ├─ APPROVED → Proceed to PLAN phase                                 │   │
│  │  └─ NOT APPROVED → Revise tailoring decisions                        │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 12.2.2 Activity Summary

| Step | Activities | Duration | Key Output |
|------|-----------|----------|------------|
| **Step 1** | Review Gap Analysis Results | 0.5 week | Validated gap priorities |
| **Step 2** | Determine Adaptation Scope | 0.5 week | Adaptation approach defined |
| **Step 3** | Tailor Capabilities | 1 week | Tailored capability map |
| **Step 4** | Tailor Applications | 1-1.5 weeks | Tailored application architecture |
| **Step 5** | Tailor Data Architecture | 0.5-1 week | Tailored data architecture |
| **Step 6** | Tailor Technology | 0.5-1 week | Technology decisions |
| **Step 7** | Create TO-BE Architecture | 1 week | TO-BE Architecture Document |
| **Step 8** | Define Transition Requirements | 1 week | Transition Requirements |

### 12.2.3 Decision Points Summary

| ID | Decision Point | Criteria | Outcomes |
|----|---------------|----------|----------|
| **DP4** | Adaptation Scope | Gap count, complexity, unique requirements | Minimal / Moderate / Extensive |
| **DP5** | TO-BE Architecture Approval | Completeness, RA compliance, stakeholder agreement | Approved / Revise |

---

## 12.3 STEP 1: REVIEW GAP ANALYSIS RESULTS

### 12.3.1 Purpose

Ensure the ADAPT phase begins with a clear, validated understanding of the gaps to be addressed. This step confirms the foundation for tailoring decisions.

### 12.3.2 Activities

#### Activity 1.1: Review Prioritized Gaps from ASSESS

**What to Review:**
- Prioritized Gap Register from ASSESS phase
- Gap Analysis Report findings
- ASSESS Summary recommendations

**Gap Priority Confirmation Checklist:**

| Priority | Count | Effort (est.) | Confirmed? | Notes |
|----------|-------|---------------|------------|-------|
| Must Have | ___ | ___ p-m | ⬜ | |
| Should Have | ___ | ___ p-m | ⬜ | |
| Could Have | ___ | ___ p-m | ⬜ | |
| Won't Have | ___ | N/A | ⬜ | |

#### Activity 1.2: Confirm Priorities with Stakeholders

**Workshop Agenda:**
1. Present gap summary by category
2. Review Must Have gaps—confirm criticality
3. Review Should Have gaps—confirm importance
4. Discuss any priority changes since ASSESS
5. Document agreed priorities

**Priority Change Log:**

| Gap ID | Original Priority | New Priority | Reason for Change | Approved By |
|--------|------------------|--------------|-------------------|-------------|
| | | | | |

#### Activity 1.3: Identify Quick Wins vs. Major Initiatives

**Classification Criteria:**

| Classification | Effort | Duration | Complexity | Value |
|----------------|--------|----------|------------|-------|
| **Quick Win** | < 3 p-m | < 3 months | Low | Immediate |
| **Standard** | 3-12 p-m | 3-12 months | Medium | Medium-term |
| **Major Initiative** | > 12 p-m | > 12 months | High | Strategic |

**Quick Win Identification Template:**

| Gap ID | Gap Name | Why Quick Win? | Estimated Duration | Dependencies |
|--------|----------|----------------|-------------------|--------------|
| | | Low complexity, high value | | |

#### Activity 1.4: Validate DPI Dependency Gaps

Review gaps that depend on national DPI components:

**DPI Gap Validation:**

| Gap ID | DPI Component Required | DPI Status | Impact on Gap Resolution |
|--------|----------------------|------------|-------------------------|
| | Identity BB | Available/Planned/Unavailable | |
| | Information Mediator BB | Available/Planned/Unavailable | |
| | Payments BB | Available/Planned/Unavailable | |
| | Digital Registries BB | Available/Planned/Unavailable | |

**Note:** Gaps dependent on unavailable DPI components may need alternative solutions or deferred implementation.

### 12.3.3 Output

```
┌────────────────────────────────────────────────────────────────────────────┐
│              STEP 1 OUTPUT: GAP ANALYSIS VALIDATION SUMMARY                │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  TOTAL GAPS TO ADDRESS: ________                                           │
│                                                                            │
│  BY PRIORITY (Confirmed):                                                  │
│  - Must Have: ________ gaps                                                │
│  - Should Have: ________ gaps                                              │
│  - Could Have: ________ gaps                                               │
│                                                                            │
│  PRIORITY CHANGES FROM ASSESS: ________ gaps modified                      │
│                                                                            │
│  QUICK WINS IDENTIFIED: ________                                           │
│  MAJOR INITIATIVES: ________                                               │
│                                                                            │
│  DPI DEPENDENCIES:                                                         │
│  - Gaps ready (DPI available): ________                                    │
│  - Gaps blocked (DPI unavailable): ________                                │
│                                                                            │
│  Validated by: ________________________  Date: _____________              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 12.4 STEP 2: DETERMINE ADAPTATION SCOPE

### 12.4.1 Purpose

Assess the extent of tailoring required and establish the approach for the ADAPT phase. The adaptation scope determines resource allocation and complexity management.

### 12.4.2 Decision Point DP4: Adaptation Scope

**Adaptation Scope Definitions:**

| Scope | Description | Typical Characteristics |
|-------|-------------|------------------------|
| **MINIMAL** | Few changes, mostly adopt RA as-is | < 10 gaps, low legacy complexity, few unique requirements |
| **MODERATE** | Some customization needed | 10-30 gaps, medium legacy complexity, some unique requirements |
| **EXTENSIVE** | Significant tailoring required | > 30 gaps, high legacy complexity, many unique requirements |

### 12.4.3 Adaptation Decision Matrix

| Factor | Weight | MINIMAL (1) | MODERATE (2) | EXTENSIVE (3) | Score |
|--------|--------|-------------|--------------|---------------|-------|
| **Gap Count** | 25% | < 10 | 10-30 | > 30 | |
| **Legacy Complexity** | 20% | Few systems, modern | Some legacy, manageable | Many legacy, complex | |
| **Unique Requirements** | 20% | Few, minor | Some, significant | Many, critical | |
| **DPI Readiness** | 15% | Full DPI available | Partial DPI | Limited DPI | |
| **Organizational Maturity** | 10% | High EA maturity | Medium maturity | Low maturity | |
| **Timeline Constraints** | 10% | Flexible | Some pressure | Aggressive | |
| **WEIGHTED SCORE** | 100% | | | | **___** |

**Score Interpretation:**
- 1.0 - 1.5: MINIMAL adaptation
- 1.5 - 2.5: MODERATE adaptation
- 2.5 - 3.0: EXTENSIVE adaptation

### 12.4.4 Activities

#### Activity 2.1: Assess Adaptation Factors

Complete the Adaptation Decision Matrix using information from ASSESS phase.

#### Activity 2.2: Apply Adaptation Decision Matrix

Calculate the weighted score and determine the adaptation scope.

#### Activity 2.3: Define Adaptation Approach

Based on the scope, define the approach:

**MINIMAL Approach:**
- Follow RA structure closely
- Focus on gap resolution, minimal customization
- Shorter timeline, smaller team
- Fewer stakeholder workshops

**MODERATE Approach:**
- Balance RA adherence with context fit
- Selective customization with clear justification
- Standard timeline and team
- Regular stakeholder validation

**EXTENSIVE Approach:**
- Significant context analysis required
- Multiple customization areas expected
- Extended timeline, larger team
- Intensive stakeholder engagement

#### Activity 2.4: Establish Tailoring Boundaries

Define what can and cannot be changed:

**Tailoring Boundaries Template:**

| Boundary Type | Elements | Can Be Tailored? | Notes |
|---------------|----------|------------------|-------|
| **Protected Core** | DPI Integration, BB Alignment, Security Principles, Core Capabilities | ⛔ NO | RA integrity |
| **Constrained** | Capability definitions, Application categories, Data domain structure | ⚠️ Limited | Strong justification required |
| **Flexible** | Specific applications, Technology platforms, Implementation sequence, Local terminology | ✅ YES | Document rationale |

### 12.4.5 Output

```
┌────────────────────────────────────────────────────────────────────────────┐
│               STEP 2 OUTPUT: ADAPTATION SCOPE DETERMINATION                │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  ADAPTATION SCOPE: ⬜ MINIMAL    ⬜ MODERATE    ⬜ EXTENSIVE               │
│                                                                            │
│  DECISION MATRIX SCORE: ________ / 3.0                                     │
│                                                                            │
│  FACTOR ASSESSMENT:                                                        │
│  - Gap Count: ________ (Score: ___)                                        │
│  - Legacy Complexity: ________ (Score: ___)                                │
│  - Unique Requirements: ________ (Score: ___)                              │
│  - DPI Readiness: ________ (Score: ___)                                    │
│  - Organizational Maturity: ________ (Score: ___)                          │
│  - Timeline Constraints: ________ (Score: ___)                             │
│                                                                            │
│  ADAPTATION APPROACH:                                                      │
│  _______________________________________________________________________  │
│  _______________________________________________________________________  │
│                                                                            │
│  TAILORING BOUNDARIES ESTABLISHED: ⬜ YES                                  │
│                                                                            │
│  Approved by: ________________________  Date: _____________               │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 12.5 STEP 3: TAILOR CAPABILITIES

### 12.5.1 Purpose

Adapt the Reference Architecture capability map to the organization's specific context while maintaining the core capability structure and inheritance principles.

### 12.5.2 Capability Inheritance Reminder

The RAs follow strict inheritance: **PDU ⊂ RA ⊂ SDA**

| RA Type | Capability Domains | L1 Capabilities | L2 Capabilities |
|---------|-------------------|-----------------|-----------------|
| **PDU** | C1 (Policy), C2 (Support) | 15 | 76 |
| **RA** | C1, C2 + C3 (Regulatory) | 22 | 125 |
| **SDA** | C1, C2, C3 + C4 (Service Delivery) | 34 | 221 |

### 12.5.3 Activities

#### Activity 3.1: Confirm Required Capabilities from RA

Review each capability in the selected RA and determine applicability:

**Capability Confirmation Template:**

| RA Cap ID | Capability Name | Required? | Rationale if NOT Required |
|-----------|-----------------|-----------|---------------------------|
| C1.1 | [From RA] | ⬜ Yes / ⬜ No | |

**Rules:**
- All capabilities marked as "Core" in the RA **must** be included
- Inherited capabilities from predecessor RAs should generally be retained
- Only remove capabilities with strong, documented justification

#### Activity 3.2: Add Organization-Specific Capabilities

If the organization has unique functions not covered by the RA:

**New Capability Template:**

| New Cap ID | Capability Name | Description | Justification | Mapped RA Parent |
|------------|-----------------|-------------|---------------|------------------|
| C*.1 | [Name] | [Description] | [Why needed] | [Closest RA capability] |

**Numbering Convention for Extensions:**
- Use next available number in the appropriate domain
- For PDU: C1.x or C2.x extensions
- For RA: C3.x extensions
- For SDA: C4.x extensions
- Document as [EXTENSION] in all references

#### Activity 3.3: Remove Non-Applicable Capabilities (with justification)

**Capability Removal Request Template:**

| RA Cap ID | Capability Name | Reason for Removal | Impact Analysis | Approval |
|-----------|-----------------|--------------------|-----------------| ---------|
| | | | | ⬜ Approved / ⬜ Denied |

**Removal Criteria:**
- ⛔ **CANNOT REMOVE:** Core capabilities, DPI-dependent capabilities, security capabilities
- ⚠️ **REQUIRES STRONG JUSTIFICATION:** Inherited capabilities, regulatory capabilities
- ✅ **CAN REMOVE IF NOT APPLICABLE:** Optional capabilities, context-specific capabilities

#### Activity 3.4: Adjust Capability Definitions as Needed

**Capability Definition Adjustment Template:**

| Cap ID | Original Definition | Adjusted Definition | Reason for Adjustment |
|--------|--------------------|--------------------|----------------------|
| | [From RA] | [Tailored] | |

**Rules:**
- Adjustments should clarify, not fundamentally change the capability
- Use local terminology where it improves understanding
- Maintain alignment with L2 capabilities

#### Activity 3.5: Validate Capability Inheritance

Verify that the tailored capability map maintains proper inheritance:

**Inheritance Validation Checklist:**

| Check | Status |
|-------|--------|
| All PDU capabilities (C1.x, C2.x) present if RA type is RA or SDA | ⬜ |
| All RA capabilities (C3.x) present if RA type is SDA | ⬜ |
| No capability numbering conflicts | ⬜ |
| All removed capabilities have documented justification | ⬜ |
| All added capabilities have documented rationale | ⬜ |

### 12.5.4 Output

```
┌────────────────────────────────────────────────────────────────────────────┐
│              STEP 3 OUTPUT: TAILORED CAPABILITY MAP SUMMARY                │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  REFERENCE ARCHITECTURE USED: ⬜ PDU    ⬜ RA    ⬜ SDA                    │
│                                                                            │
│  CAPABILITY SUMMARY:                                                       │
│  - RA Capabilities Confirmed: ________ / ________ (__%)                   │
│  - RA Capabilities Removed: ________ (all justified)                       │
│  - Organization-Specific Added: ________                                   │
│  - Capability Definitions Adjusted: ________                               │
│                                                                            │
│  TOTAL TO-BE CAPABILITIES:                                                 │
│  - L1 Capabilities: ________                                               │
│  - L2 Capabilities: ________                                               │
│                                                                            │
│  INHERITANCE VALIDATION: ⬜ PASSED    ⬜ ISSUES (see log)                  │
│                                                                            │
│  TAILORING DECISIONS LOGGED: ⬜ YES                                        │
│                                                                            │
│  Completed by: ________________________  Date: _____________              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 12.6 STEP 4: TAILOR APPLICATIONS

### 12.6.1 Purpose

Map the Reference Architecture applications to the organization's context, making build/buy/retain decisions and defining integration requirements.

### 12.6.2 Application Inheritance Reminder

| RA Type | Applications (from Quality Check) |
|---------|----------------------------------|
| **PDU** | 20 applications (A0.x - A5.x) |
| **RA** | 34 applications (+14 A6.x - A9.x) |
| **SDA** | 70 applications (+36 A10.x - A15.x) |

### 12.6.3 Activities

#### Activity 4.1: Map RA Applications to Existing/Planned Systems

**Application Mapping Template:**

| RA App ID | RA Application | AS-IS Application(s) | Mapping Status | Decision |
|-----------|---------------|---------------------|----------------|----------|
| A1.1 | [From RA] | [Current system] | ⬜ Full Match / ⬜ Partial / ⬜ None | Retain / Enhance / Replace |

**Mapping Status Definitions:**

| Status | Definition | Typical Action |
|--------|------------|----------------|
| **Full Match** | AS-IS system fully meets RA requirements | Retain |
| **Partial Match** | AS-IS system partially meets requirements | Enhance or Replace |
| **None** | No AS-IS system for this function | Implement new |

#### Activity 4.2: Make Build vs. Buy Decisions

**Build/Buy Decision Template:**

| RA App ID | Application | Build/Buy/Retain | Rationale | Estimated Cost | Timeline |
|-----------|-------------|------------------|-----------|----------------|----------|
| | | | | | |

**Decision Criteria:**

| Factor | Favors BUILD | Favors BUY |
|--------|--------------|------------|
| **Uniqueness** | Unique, competitive advantage | Common, standard functionality |
| **Availability** | No suitable products exist | Multiple products available |
| **Integration** | Complex, custom integrations | Standard integrations supported |
| **Control** | Full control required | Vendor control acceptable |
| **Cost** | Lower TCO for build | Lower TCO for buy |
| **Timeline** | Time available for development | Rapid deployment needed |
| **Skills** | Development capacity available | Development capacity limited |

#### Activity 4.3: Define Integration Requirements

**Integration Requirements Template:**

| App ID | Application | Integrates With | Integration Type | Data Exchanged | Priority |
|--------|-------------|-----------------|------------------|----------------|----------|
| | | | API/File/Event | | Must/Should/Could |

#### Activity 4.4: Specify DPI/Building Block Integrations

**DPI Integration Specification:**

| App ID | Application | BB Integration | Integration Pattern | Status |
|--------|-------------|----------------|--------------------| -------|
| | | Identity BB | [Pattern from BB spec] | Required/Recommended |
| | | Information Mediator BB | | |
| | | Payments BB | | |
| | | Digital Registries BB | | |
| | | Messaging BB | | |
| | | Consent BB | | |
| | | Workflow BB | | |
| | | Scheduler BB | | |

**BB Requirement Level Mapping (from Quality Check):**

| BB | PDU | RA | SDA |
|----|-----|-----|-----|
| Identity BB | Mandatory | Mandatory | Mandatory |
| Information Mediator BB | Mandatory | Mandatory | Mandatory |
| Digital Registries BB | Recommended | Mandatory | Mandatory |
| Workflow BB | Recommended | Mandatory | Mandatory |
| Payments BB | Not Required | Mandatory | Critical |

#### Activity 4.5: Define Application Health Targets

**Target Application Health:**

| App ID | Application | Current Health | Target Health | Improvement Actions |
|--------|-------------|----------------|---------------|---------------------|
| | | 🟢/🟡/🔴/⚫ | 🟢 | |

**Target:** All applications in TO-BE should target 🟢 Green health rating.

### 12.6.4 Output

```
┌────────────────────────────────────────────────────────────────────────────┐
│           STEP 4 OUTPUT: TAILORED APPLICATION ARCHITECTURE SUMMARY         │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  APPLICATION INVENTORY:                                                    │
│  - RA Applications Mapped: ________ / ________                             │
│  - Applications to Retain: ________                                        │
│  - Applications to Enhance: ________                                       │
│  - Applications to Replace: ________                                       │
│  - Applications to Implement (New): ________                               │
│                                                                            │
│  BUILD/BUY DECISIONS:                                                      │
│  - Build: ________                                                         │
│  - Buy: ________                                                           │
│  - Retain: ________                                                        │
│                                                                            │
│  INTEGRATION REQUIREMENTS:                                                 │
│  - Total Integrations Defined: ________                                    │
│  - DPI/BB Integrations: ________                                           │
│                                                                            │
│  ESTIMATED INVESTMENT:                                                     │
│  - New Applications: ________ (cost)                                       │
│  - Enhancements: ________ (cost)                                           │
│  - Integrations: ________ (cost)                                           │
│                                                                            │
│  Completed by: ________________________  Date: _____________              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 12.7 STEP 5: TAILOR DATA ARCHITECTURE

### 12.7.1 Purpose

Adapt the Reference Architecture data domains to the organization's context, defining data migration requirements, quality targets, and governance needs.

### 12.7.2 Data Domain Inheritance Reminder

| RA Type | Data Domains | Sub-Domains |
|---------|-------------|-------------|
| **PDU** | D1-D5 | 25 |
| **RA** | D1-D9 (+D6-D9) | 50 |
| **SDA** | D1-D14 (+D10-D14) | 75 |

### 12.7.3 Activities

#### Activity 5.1: Adapt Data Domains to Local Context

**Data Domain Adaptation Template:**

| RA Domain ID | Domain Name | Sub-Domains | Local Adaptations | Notes |
|--------------|-------------|-------------|-------------------|-------|
| D1 | Policy Data | [From RA] | [Local adjustments] | |

**Adaptation Types:**
- **Terminology:** Use local terms for data elements
- **Structure:** Add local sub-domains within RA domain structure
- **Attributes:** Extend data entities with local attributes
- **Registries:** Map to national registry structures

#### Activity 5.2: Define Data Migration Requirements

**Data Migration Specification:**

| Source System | Target System | Data Domain | Volume (est.) | Migration Type | Priority |
|---------------|---------------|-------------|---------------|----------------|----------|
| [AS-IS app] | [TO-BE app] | [Domain] | [Records] | Full/Incremental | Must/Should |

**Migration Complexity Assessment:**

| Factor | Low | Medium | High |
|--------|-----|--------|------|
| Data Volume | < 100K records | 100K - 10M | > 10M |
| Transformations | Minimal | Moderate | Complex |
| Quality Issues | Few | Some | Many |
| Dependencies | None | Some | Many |

#### Activity 5.3: Specify Data Quality Rules and Targets

**Data Quality Targets:**

| Data Domain | Current Quality | Target Quality | Key Quality Rules |
|-------------|-----------------|----------------|-------------------|
| | High/Med/Low | High | |

**Quality Rules Template:**

| Rule ID | Data Domain | Rule Description | Enforcement | Target Compliance |
|---------|-------------|------------------|-------------|-------------------|
| DQ001 | | | Warning/Block | 95% |

#### Activity 5.4: Plan Analytics Capabilities

**Analytics Capability Requirements:**

| Analytics Type | Current State | Target State | Priority |
|----------------|---------------|--------------|----------|
| Operational Reporting | | | |
| Management Dashboards | | | |
| Self-Service Analytics | | | |
| Predictive Analytics | | | |
| Advanced AI/ML | | | |

#### Activity 5.5: Define Data Governance Requirements

**Data Governance Specification:**

| Data Domain | Data Owner | Data Steward | Access Policy | Retention Policy |
|-------------|------------|--------------|---------------|------------------|
| | [Role] | [Role] | [Policy ref] | [Policy ref] |

### 12.7.4 Output

```
┌────────────────────────────────────────────────────────────────────────────┐
│           STEP 5 OUTPUT: TAILORED DATA ARCHITECTURE SUMMARY                │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  DATA DOMAIN SUMMARY:                                                      │
│  - RA Data Domains: ________                                               │
│  - Local Adaptations: ________                                             │
│  - Extensions Added: ________                                              │
│                                                                            │
│  DATA MIGRATION REQUIREMENTS:                                              │
│  - Migrations Identified: ________                                         │
│  - Total Records to Migrate: ________ (est.)                               │
│  - High Complexity Migrations: ________                                    │
│                                                                            │
│  DATA QUALITY TARGETS:                                                     │
│  - Domains at Target Quality: ________ / ________                          │
│  - Quality Rules Defined: ________                                         │
│                                                                            │
│  ANALYTICS CAPABILITY:                                                     │
│  - Current Level: _______________________                                  │
│  - Target Level: _______________________                                   │
│                                                                            │
│  DATA GOVERNANCE:                                                          │
│  - Domains with Defined Ownership: ________ / ________                     │
│  - Data Stewards Assigned: ________                                        │
│                                                                            │
│  Completed by: ________________________  Date: _____________              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 12.8 STEP 6: TAILOR TECHNOLOGY

### 12.8.1 Purpose

Select the appropriate technology platform tier and define infrastructure, security, and operational requirements aligned with the organization's capabilities and the TO-BE architecture.

### 12.8.2 Platform Tier Selection

The PAERA framework defines three platform tiers aligned with organizational complexity:

| Tier | Organization Type | Characteristics | Typical Selection |
|------|-------------------|-----------------|-------------------|
| **Basic** | PDU | Simple requirements, limited scale, smaller teams | Low-code/no-code, minimal infrastructure |
| **Standard** | RA | Moderate complexity, regulatory needs, medium scale | Enterprise platforms, moderate infrastructure |
| **Enterprise** | SDA | High complexity, massive scale, mission-critical | Enterprise-grade, high-availability |

### 12.8.3 Activities

#### Activity 6.1: Select Platform Tier

**Platform Tier Decision Factors:**

| Factor | Basic | Standard | Enterprise |
|--------|-------|----------|------------|
| **Transaction Volume** | < 10K/day | 10K - 1M/day | > 1M/day |
| **Users** | < 100 | 100 - 1,000 | > 1,000 |
| **Data Volume** | < 100 GB | 100 GB - 10 TB | > 10 TB |
| **Availability Requirement** | 99% | 99.5% | 99.9%+ |
| **Staff** | < 50 | 50 - 500 | > 500 |
| **Integration Complexity** | Low | Medium | High |

**Platform Tier Selection:**

Selected Tier: ⬜ Basic    ⬜ Standard    ⬜ Enterprise

Rationale: _________________________________________________________________

#### Activity 6.2: Define Infrastructure Requirements

**Infrastructure Specification Template:**

| Component | Current State | TO-BE Requirements | Gap |
|-----------|---------------|-------------------|-----|
| Compute (CPU/Memory) | | | |
| Storage | | | |
| Network | | | |
| Database | | | |
| Application Servers | | | |
| Load Balancing | | | |
| Backup/Recovery | | | |

#### Activity 6.3: Specify Security Requirements

**Security Requirements Template:**

| Security Domain | RA Requirement | TO-BE Specification | Compliance Standard |
|-----------------|----------------|---------------------|---------------------|
| Access Control | [From RA] | | |
| Authentication | [From RA] | | |
| Data Encryption | [From RA] | | |
| Network Security | [From RA] | | |
| Audit/Logging | [From RA] | | |
| Incident Response | [From RA] | | |

**Security Principle Alignment:**
- All TO-BE security specifications must align with EA Principles TECH-04 (Security by Design)
- DPI security integration requirements must be met (Identity BB, E-Signature)

#### Activity 6.4: Plan Cloud/On-Premise Decisions

**Deployment Model Decision:**

| Workload Type | On-Premise | Private Cloud | Public Cloud | Hybrid |
|---------------|------------|---------------|--------------|--------|
| Core Applications | ⬜ | ⬜ | ⬜ | ⬜ |
| Support Applications | ⬜ | ⬜ | ⬜ | ⬜ |
| Development/Test | ⬜ | ⬜ | ⬜ | ⬜ |
| DR Site | ⬜ | ⬜ | ⬜ | ⬜ |
| Analytics/AI | ⬜ | ⬜ | ⬜ | ⬜ |

**Decision Rationale:**

| Factor | On-Premise | Cloud | Hybrid |
|--------|------------|-------|--------|
| Data Sovereignty | Required | N/A | Partial |
| Cost Model | CAPEX preferred | OPEX preferred | Mixed |
| Scalability | Limited | High | Flexible |
| Compliance | On-premise mandated | Cloud-acceptable | Mixed |
| Skills | Available | Limited | Available |

#### Activity 6.5: Define Operational Requirements

**Operational Requirements Template:**

| Operational Aspect | TO-BE Requirement | Notes |
|-------------------|-------------------|-------|
| Availability Target | ____% uptime | |
| Recovery Time Objective (RTO) | ____ hours | |
| Recovery Point Objective (RPO) | ____ hours | |
| Backup Frequency | | |
| Monitoring Coverage | | |
| Incident Response Time | | |
| Change Management | | |
| Capacity Management | | |

### 12.8.4 Output

```
┌────────────────────────────────────────────────────────────────────────────┐
│             STEP 6 OUTPUT: TECHNOLOGY DECISIONS SUMMARY                    │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  PLATFORM TIER SELECTED: ⬜ Basic    ⬜ Standard    ⬜ Enterprise          │
│                                                                            │
│  DEPLOYMENT MODEL:                                                         │
│  - Primary: ⬜ On-Premise  ⬜ Private Cloud  ⬜ Public Cloud  ⬜ Hybrid    │
│  - DR: ⬜ On-Premise  ⬜ Private Cloud  ⬜ Public Cloud                    │
│                                                                            │
│  INFRASTRUCTURE SUMMARY:                                                   │
│  - Compute Upgrade Required: ⬜ Yes  ⬜ No                                 │
│  - Storage Expansion Required: ⬜ Yes  ⬜ No                               │
│  - Network Upgrade Required: ⬜ Yes  ⬜ No                                 │
│                                                                            │
│  SECURITY REQUIREMENTS:                                                    │
│  - Compliance Standards: _______________________                           │
│  - Security Gaps to Address: ________                                      │
│                                                                            │
│  OPERATIONAL TARGETS:                                                      │
│  - Availability: _____% uptime                                             │
│  - RTO: _____ hours                                                        │
│  - RPO: _____ hours                                                        │
│                                                                            │
│  ESTIMATED INFRASTRUCTURE INVESTMENT: ________                             │
│                                                                            │
│  Completed by: ________________________  Date: _____________              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 12.9 STEP 7: CREATE TO-BE ARCHITECTURE

### 12.9.1 Purpose

Compile all tailored architecture sections into a comprehensive TO-BE Architecture Document, validate completeness and consistency, and obtain stakeholder approval.

### 12.9.2 Activities

#### Activity 7.1: Compile All Tailored Sections

Bring together outputs from Steps 3-6:

**TO-BE Architecture Compilation Checklist:**

| Section | Source Step | Complete? | Notes |
|---------|-------------|-----------|-------|
| Tailored Capability Map | Step 3 | ⬜ | |
| Tailored Application Architecture | Step 4 | ⬜ | |
| Tailored Data Architecture | Step 5 | ⬜ | |
| Technology Decisions | Step 6 | ⬜ | |

#### Activity 7.2: Create TO-BE Architecture Document

Use **Template 5.5.1** (see Section 14) to create the formal document.

**TO-BE Architecture Document Structure:**

```
══════════════════════════════════════════════════════════════════════════════
                        TO-BE ARCHITECTURE DOCUMENT
══════════════════════════════════════════════════════════════════════════════

DOCUMENT CONTROL
├── Version History
├── Authors
└── Reviewers

EXECUTIVE SUMMARY
├── Organization Overview
├── Reference Architecture Used
├── Key Tailoring Decisions
└── TO-BE Architecture Highlights

1. INTRODUCTION
├── 1.1 Purpose of Document
├── 1.2 Scope
├── 1.3 Relationship to Reference Architecture
└── 1.4 Tailoring Approach

2. TO-BE BUSINESS ARCHITECTURE
├── 2.1 Tailored Capability Map
├── 2.2 Capability Changes Summary
├── 2.3 Service Delivery Model
└── 2.4 Stakeholder Model

3. TO-BE APPLICATION ARCHITECTURE
├── 3.1 Application Portfolio (Tailored)
├── 3.2 Build/Buy/Retain Decisions
├── 3.3 Integration Architecture
├── 3.4 DPI/BB Integration
└── 3.5 Application Roadmap

4. TO-BE DATA ARCHITECTURE
├── 4.1 Data Domain Model (Tailored)
├── 4.2 Data Quality Framework
├── 4.3 Data Governance Model
├── 4.4 Analytics Architecture
└── 4.5 Data Migration Strategy

5. TO-BE TECHNOLOGY ARCHITECTURE
├── 5.1 Platform Tier Selection
├── 5.2 Infrastructure Architecture
├── 5.3 Security Architecture
├── 5.4 Deployment Model
└── 5.5 Operational Architecture

6. TAILORING DECISION LOG
├── 6.1 Capability Tailoring Decisions
├── 6.2 Application Tailoring Decisions
├── 6.3 Data Tailoring Decisions
└── 6.4 Technology Tailoring Decisions

7. RA COMPLIANCE STATEMENT
├── 7.1 Inheritance Verification
├── 7.2 Core Elements Preserved
├── 7.3 Deviations and Justifications
└── 7.4 Compliance Summary

APPENDICES
├── A. Detailed Capability Map
├── B. Application Catalog
├── C. Data Domain Details
└── D. Technology Specifications
```

#### Activity 7.3: Validate Completeness and Consistency

**Completeness Check:**

| Element | Required? | Present? | Notes |
|---------|-----------|----------|-------|
| Executive Summary | Yes | ⬜ | |
| Capability Map | Yes | ⬜ | |
| Application Architecture | Yes | ⬜ | |
| Data Architecture | Yes | ⬜ | |
| Technology Architecture | Yes | ⬜ | |
| Tailoring Decision Log | Yes | ⬜ | |
| RA Compliance Statement | Yes | ⬜ | |

**Consistency Check:**

| Check | Status | Notes |
|-------|--------|-------|
| All capabilities have supporting applications | ⬜ | |
| All applications support identified capabilities | ⬜ | |
| Data domains align with application requirements | ⬜ | |
| Technology supports all application requirements | ⬜ | |
| DPI integrations consistently specified | ⬜ | |
| Security requirements consistent across layers | ⬜ | |

#### Activity 7.4: Verify RA Inheritance Compliance

**Inheritance Compliance Checklist:**

| Check | Status |
|-------|--------|
| All mandatory capabilities from base RAs included | ⬜ |
| Capability numbering follows RA conventions | ⬜ |
| Application alignment with BB specifications verified | ⬜ |
| Data domain structure follows RA hierarchy | ⬜ |
| Technology tier appropriate for organization type | ⬜ |
| DPI integration requirements met | ⬜ |
| Security principles preserved | ⬜ |
| All deviations documented and justified | ⬜ |

#### Activity 7.5: Conduct Stakeholder Review

**Stakeholder Review Process:**

1. **Distribute Draft:** Share TO-BE document with key stakeholders (5 business days)
2. **Collect Feedback:** Gather comments and concerns
3. **Review Workshop:** Conduct walkthrough with stakeholders
4. **Address Feedback:** Incorporate valid feedback, document rejected items
5. **Final Approval:** Obtain sign-off

### 12.9.3 Output

```
┌────────────────────────────────────────────────────────────────────────────┐
│              STEP 7 OUTPUT: TO-BE ARCHITECTURE DOCUMENT                    │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  DOCUMENT STATUS: ⬜ DRAFT    ⬜ UNDER REVIEW    ⬜ APPROVED               │
│                                                                            │
│  TO-BE ARCHITECTURE SUMMARY:                                               │
│  - Capabilities: ________ L1 / ________ L2                                 │
│  - Applications: ________                                                  │
│  - Data Domains: ________                                                  │
│  - Platform Tier: _______________________                                  │
│                                                                            │
│  TAILORING SUMMARY:                                                        │
│  - Total Tailoring Decisions: ________                                     │
│  - Deviations from RA: ________                                            │
│  - Extensions Added: ________                                              │
│                                                                            │
│  VALIDATION RESULTS:                                                       │
│  - Completeness Check: ⬜ PASSED                                           │
│  - Consistency Check: ⬜ PASSED                                            │
│  - RA Inheritance Check: ⬜ PASSED                                         │
│                                                                            │
│  STAKEHOLDER REVIEW:                                                       │
│  - Review Completed: ⬜ YES                                                │
│  - Feedback Items: ________ addressed / ________ rejected                  │
│                                                                            │
│  APPROVAL:                                                                 │
│  Approved by: ________________________  Date: _____________               │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 12.10 STEP 8: DEFINE TRANSITION REQUIREMENTS

### 12.10.1 Purpose

Document the requirements for moving from AS-IS to TO-BE architecture, including coexistence needs, data migration, and integration changes.

### 12.10.2 Activities

#### Activity 8.1: Identify AS-IS to TO-BE Transitions

**Transition Inventory:**

| Transition ID | From (AS-IS) | To (TO-BE) | Transition Type | Complexity |
|---------------|--------------|------------|-----------------|------------|
| TR001 | [AS-IS element] | [TO-BE element] | Replace/Enhance/Retire/New | H/M/L |

**Transition Types:**

| Type | Description | Example |
|------|-------------|---------|
| **Replace** | AS-IS system replaced by TO-BE system | Legacy LMS → New License Management |
| **Enhance** | AS-IS system enhanced to meet TO-BE | Current DMS + workflow automation |
| **Retire** | AS-IS system discontinued, no replacement | Redundant reporting tool |
| **New** | No AS-IS equivalent, new TO-BE system | New Analytics Platform |
| **Migrate** | Data moved from AS-IS to TO-BE | Customer data migration |
| **Integrate** | New integration between systems | DPI integration |

#### Activity 8.2: Define Coexistence Requirements

During transition, AS-IS and TO-BE systems may need to coexist:

**Coexistence Specification Template:**

| Transition ID | AS-IS System | TO-BE System | Coexistence Duration | Data Sync Required? | Process Changes |
|---------------|--------------|--------------|---------------------|--------------------| ----------------|
| | | | [Months] | Yes/No | |

**Coexistence Patterns:**

| Pattern | Description | When to Use |
|---------|-------------|-------------|
| **Parallel Run** | Both systems operate simultaneously | High-risk transitions, validation needed |
| **Phased Migration** | Users moved in groups | Large user bases, gradual rollout |
| **Big Bang** | Complete cutover at once | Low risk, simple migrations |
| **Strangler Pattern** | Gradually replace functionality | Complex systems, reduce risk |

#### Activity 8.3: Specify Data Migration Needs

**Data Migration Requirements Template:**

| Migration ID | Source | Destination | Data Volume | Transformation | Quality Target | Timeline |
|--------------|--------|-------------|-------------|----------------|----------------|----------|
| DM001 | [System] | [System] | [Records] | [Rules] | [%] | [Date] |

**Data Migration Checklist:**

| Check | Status |
|-------|--------|
| Source data inventoried | ⬜ |
| Target data model defined | ⬜ |
| Transformation rules documented | ⬜ |
| Data quality baseline established | ⬜ |
| Migration testing approach defined | ⬜ |
| Rollback strategy defined | ⬜ |
| Business validation approach defined | ⬜ |

#### Activity 8.4: Document Integration Changes

**Integration Changes Template:**

| Change ID | Integration | Change Type | Description | Impact Assessment |
|-----------|-------------|-------------|-------------|-------------------|
| IC001 | [Integration name] | Add/Modify/Remove | [Description] | [Impact] |

**DPI Integration Changes:**

| DPI Component | Current Integration | TO-BE Integration | Change Required |
|---------------|--------------------|--------------------|-----------------|
| Identity BB | | | |
| Information Mediator BB | | | |
| Payments BB | | | |
| Digital Registries BB | | | |

#### Activity 8.5: Define Transition Architectures (if needed)

For complex transitions, intermediate architectures may be needed:

**Transition Architecture Definition:**

| Phase | Name | Duration | Key Characteristics | Exit Criteria |
|-------|------|----------|--------------------| --------------|
| 1 | Foundation | X months | DPI integration, core infrastructure | |
| 2 | Core Systems | X months | Critical applications deployed | |
| 3 | Extended | X months | Full TO-BE achieved | |

### 12.10.3 Output

```
┌────────────────────────────────────────────────────────────────────────────┐
│             STEP 8 OUTPUT: TRANSITION REQUIREMENTS SUMMARY                 │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  TRANSITIONS IDENTIFIED:                                                   │
│  - Total: ________                                                         │
│  - Replace: ________                                                       │
│  - Enhance: ________                                                       │
│  - Retire: ________                                                        │
│  - New: ________                                                           │
│                                                                            │
│  COEXISTENCE REQUIREMENTS:                                                 │
│  - Systems requiring coexistence: ________                                 │
│  - Maximum coexistence duration: ________ months                           │
│                                                                            │
│  DATA MIGRATIONS:                                                          │
│  - Migrations required: ________                                           │
│  - Total records to migrate: ________ (est.)                               │
│  - High-complexity migrations: ________                                    │
│                                                                            │
│  INTEGRATION CHANGES:                                                      │
│  - Integrations to add: ________                                           │
│  - Integrations to modify: ________                                        │
│  - Integrations to remove: ________                                        │
│                                                                            │
│  TRANSITION ARCHITECTURES:                                                 │
│  - Phases defined: ________                                                │
│  - Estimated total transition duration: ________ months                    │
│                                                                            │
│  Completed by: ________________________  Date: _____________              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 12.11 TAILORING GUIDELINES

### 12.11.1 What Can Be Tailored

The following elements **can be customized** during the ADAPT phase:

| Element | Tailoring Allowed | Examples |
|---------|-------------------|----------|
| **Specific application choices** | ✅ YES | Select specific products for RA applications |
| **Technology platforms** | ✅ YES | Choose between on-premise, cloud, specific vendors |
| **Implementation sequence** | ✅ YES | Prioritize certain capabilities/applications |
| **Additional capabilities** | ✅ YES | Add organization-specific capabilities as extensions |
| **Local terminology** | ✅ YES | Use local terms in definitions |
| **Data attributes** | ✅ YES | Extend data entities with local attributes |
| **Integration patterns** | ✅ YES | Choose specific integration approaches |
| **Deployment models** | ✅ YES | Select hosting arrangements |
| **Analytics capabilities** | ✅ YES | Scale analytics to organizational needs |
| **Operational requirements** | ✅ YES | Define specific SLAs |

### 12.11.2 What Should NOT Be Tailored

The following elements **should be preserved** from the Reference Architecture:

| Element | Why Protected | Consequence of Deviation |
|---------|---------------|-------------------------|
| **Core capability definitions** | Ensures standard understanding | Loss of comparability with other implementations |
| **DPI integration requirements** | National infrastructure alignment | Integration failures, duplication |
| **Building Block usage patterns** | Interoperability | Compatibility issues |
| **Security principles** | Compliance, risk management | Security vulnerabilities |
| **Architecture principles** | Governance foundation | Inconsistent decisions |
| **Capability inheritance** | RA integrity (PDU ⊂ RA ⊂ SDA) | Architecture fragmentation |
| **Core application functions** | Standard functionality | Functionality gaps |
| **Data domain structure** | Data interoperability | Integration issues |

### 12.11.3 Tailoring Decision Framework

For each potential customization, apply this framework:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      TAILORING DECISION FRAMEWORK                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  1. IS THIS A PROTECTED ELEMENT?                                            │
│     ├─ YES → STOP: Cannot tailor                                            │
│     └─ NO  → Continue to question 2                                         │
│                                                                              │
│  2. IS THERE A VALID BUSINESS REASON?                                       │
│     ├─ NO  → STOP: Adopt RA as-is                                           │
│     └─ YES → Continue to question 3                                         │
│                                                                              │
│  3. DOES TAILORING MAINTAIN RA INTEGRITY?                                   │
│     ├─ NO  → STOP: Find alternative approach                                │
│     └─ YES → Continue to question 4                                         │
│                                                                              │
│  4. CAN TAILORING BE DOCUMENTED AND JUSTIFIED?                              │
│     ├─ NO  → STOP: Strengthen rationale                                     │
│     └─ YES → PROCEED: Document in Tailoring Decision Log                    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 12.11.4 Tailoring Documentation Requirements

Every tailoring decision must be documented in the Tailoring Decision Log:

| Field | Required | Purpose |
|-------|----------|---------|
| Decision ID | Yes | Unique identifier |
| RA Element | Yes | What is being tailored |
| Original RA Specification | Yes | Baseline for comparison |
| Tailored Specification | Yes | What it becomes |
| Justification | Yes | Why tailoring is needed |
| Impact Assessment | Yes | What changes as a result |
| Approver | Yes | Who authorized the decision |
| Date | Yes | When decision was made |

---

## 12.12 RA INTEGRITY PROTECTION

### 12.12.1 Purpose

Ensure that tailoring decisions do not compromise the fundamental value of the Reference Architecture—providing a proven, interoperable, standards-based foundation for digital transformation.

### 12.12.2 Core RA Elements

The following are **non-negotiable** elements that must be preserved:

**Business Architecture:**
- Capability domain structure (C1, C2, C3, C4)
- Core capability definitions (as defined in RA)
- Capability inheritance relationships

**Application Architecture:**
- Application zones structure (Channels, Core, Infrastructure)
- BB alignment requirements
- DPI integration patterns

**Data Architecture:**
- Data domain hierarchy (D1-D14 per RA type)
- Core data entities
- Data exchange standards

**Technology Architecture:**
- Security architecture principles
- Platform tier characteristics
- Operational requirements framework

### 12.12.3 Deviation Approval Process

Any deviation from protected elements requires formal approval:

**Deviation Request Template:**

| Field | Content |
|-------|---------|
| **Deviation ID** | DEV-001 |
| **Element** | [Protected element] |
| **Proposed Deviation** | [What is proposed] |
| **Justification** | [Why deviation is necessary] |
| **Impact Analysis** | [Consequences of deviation] |
| **Alternative Considered** | [Other options explored] |
| **Risk Mitigation** | [How risks will be managed] |
| **Approver Required** | EA Lead + Senior Management |

**Approval Criteria:**

| Criterion | Required Evidence |
|-----------|-------------------|
| Business necessity | Documented business case |
| No viable alternative | Options analysis |
| Impact understood | Full impact assessment |
| Risk acceptable | Risk analysis and mitigation plan |
| Reversible if needed | Approach to restore compliance |

### 12.12.4 Compliance Verification

Before completing the ADAPT phase, verify RA compliance:

**RA Compliance Checklist:**

| Check | Status | Notes |
|-------|--------|-------|
| **Capability Inheritance Verified** | | |
| └── PDU capabilities present (if RA/SDA) | ⬜ | |
| └── RA capabilities present (if SDA) | ⬜ | |
| └── No unauthorized capability removals | ⬜ | |
| **BB Alignment Verified** | | |
| └── All mandatory BBs integrated | ⬜ | |
| └── BB integration patterns followed | ⬜ | |
| **DPI Integration Verified** | | |
| └── All DPI components addressed | ⬜ | |
| └── Integration requirements met | ⬜ | |
| **Security Preserved** | | |
| └── Security principles maintained | ⬜ | |
| └── No security degradation | ⬜ | |
| **All Deviations Approved** | | |
| └── All deviations documented | ⬜ | |
| └── All deviations approved | ⬜ | |

---

## 12.13 ADAPT DELIVERABLES CHECKLIST

### 12.13.1 Before Completing ADAPT Phase

**Gap Review:**
- [ ] Prioritized gaps reviewed and confirmed
- [ ] Priority changes documented
- [ ] Quick wins identified
- [ ] DPI dependencies validated

**Adaptation Scope:**
- [ ] Adaptation Decision Matrix completed
- [ ] Scope determined (Minimal/Moderate/Extensive)
- [ ] Tailoring boundaries established

**Capability Tailoring:**
- [ ] All RA capabilities reviewed
- [ ] Required capabilities confirmed
- [ ] Extensions added (if any)
- [ ] Removals justified (if any)
- [ ] Definitions adjusted (if any)
- [ ] Inheritance validated

**Application Tailoring:**
- [ ] RA applications mapped to AS-IS
- [ ] Build/Buy/Retain decisions made
- [ ] Integration requirements defined
- [ ] DPI/BB integrations specified
- [ ] Health targets set

**Data Tailoring:**
- [ ] Data domains adapted
- [ ] Migration requirements defined
- [ ] Quality rules specified
- [ ] Analytics capabilities planned
- [ ] Governance requirements defined

**Technology Tailoring:**
- [ ] Platform tier selected
- [ ] Infrastructure requirements defined
- [ ] Security requirements specified
- [ ] Deployment model decided
- [ ] Operational requirements defined

**TO-BE Architecture:**
- [ ] TO-BE Architecture Document created
- [ ] Completeness validated
- [ ] Consistency verified
- [ ] RA inheritance compliance verified
- [ ] Stakeholder review completed
- [ ] Approval obtained

**Transition Requirements:**
- [ ] Transitions identified
- [ ] Coexistence requirements defined
- [ ] Data migrations specified
- [ ] Integration changes documented
- [ ] Transition architectures defined (if needed)

**Documentation:**
- [ ] Tailoring Decision Log complete
- [ ] All decisions documented
- [ ] All deviations approved
- [ ] ADAPT Summary prepared
- [ ] Sign-off obtained

---

## 12.14 TEMPLATES

### 12.14.1 Template 5.5.1: TO-BE Architecture Document

**Document Structure:**

```
══════════════════════════════════════════════════════════════════════════════
                        TO-BE ARCHITECTURE DOCUMENT
                        [ORGANIZATION NAME]
══════════════════════════════════════════════════════════════════════════════

Document ID:        TOBE-ARCH-[ORG]-001
Version:            1.0
Date:               [DATE]
Status:             [Draft/Under Review/Approved]
Reference Architecture: [PDU/RA/SDA] v1.0

DOCUMENT CONTROL
─────────────────────────────────────────────────────────────────────────────
Version  │ Date       │ Author        │ Changes
─────────┼────────────┼───────────────┼──────────────────────────────────────
1.0      │            │               │ Initial version
─────────┴────────────┴───────────────┴──────────────────────────────────────

APPROVALS
─────────────────────────────────────────────────────────────────────────────
Role                   │ Name              │ Signature        │ Date
───────────────────────┼───────────────────┼──────────────────┼─────────────
EA Lead                │                   │                  │
Business Owner         │                   │                  │
IT Director            │                   │                  │
Senior Management      │                   │                  │
───────────────────────┴───────────────────┴──────────────────┴─────────────

══════════════════════════════════════════════════════════════════════════════

EXECUTIVE SUMMARY
─────────────────────────────────────────────────────────────────────────────

[Provide 1-2 page summary covering:]
- Organization overview
- Reference Architecture used and rationale
- Key tailoring decisions
- TO-BE architecture highlights
- Major transitions required

══════════════════════════════════════════════════════════════════════════════

1. INTRODUCTION
─────────────────────────────────────────────────────────────────────────────

1.1 Purpose of Document
[Describe purpose and intended audience]

1.2 Scope
[Define what is included/excluded]

1.3 Relationship to Reference Architecture
[Explain how this document relates to the GEATDM RA]

1.4 Tailoring Approach
[Summarize the adaptation approach used]

══════════════════════════════════════════════════════════════════════════════

2. TO-BE BUSINESS ARCHITECTURE
─────────────────────────────────────────────────────────────────────────────

2.1 Tailored Capability Map

[L1 CAPABILITY MAP]

┌─────────────────────────────────────────────────────────────────────────┐
│ C1: POLICY DEVELOPMENT              │ C2: ORGANIZATIONAL SUPPORT        │
├─────────────────────────────────────┼───────────────────────────────────┤
│ C1.1 ...                            │ C2.1 ...                          │
│ C1.2 ...                            │ C2.2 ...                          │
│ ...                                 │ ...                               │
├─────────────────────────────────────┼───────────────────────────────────┤
│ C3: REGULATORY (if RA/SDA)          │ C4: SERVICE DELIVERY (if SDA)     │
├─────────────────────────────────────┼───────────────────────────────────┤
│ C3.1 ...                            │ C4.1 ...                          │
│ ...                                 │ ...                               │
├─────────────────────────────────────┴───────────────────────────────────┤
│ C*: ORGANIZATION-SPECIFIC EXTENSIONS                                    │
├─────────────────────────────────────────────────────────────────────────┤
│ C*.1 ...                                                                │
└─────────────────────────────────────────────────────────────────────────┘

2.2 Capability Changes Summary

| Change Type | Count | Details |
|-------------|-------|---------|
| Retained from RA | | |
| Adjusted Definitions | | |
| Extensions Added | | |
| Removed (justified) | | |

2.3 Service Delivery Model
[Describe TO-BE service delivery approach]

2.4 Stakeholder Model
[Describe key stakeholder relationships in TO-BE]

══════════════════════════════════════════════════════════════════════════════

3. TO-BE APPLICATION ARCHITECTURE
─────────────────────────────────────────────────────────────────────────────

3.1 Application Portfolio

| App ID | Application | Status | Decision | Timeline |
|--------|-------------|--------|----------|----------|
| | | Retain/Replace/New | Build/Buy | |

3.2 Build/Buy/Retain Decisions
[Summary of key decisions with rationale]

3.3 Integration Architecture
[Describe key integrations]

3.4 DPI/BB Integration
[Document required BB integrations]

3.5 Application Roadmap
[High-level implementation sequence]

══════════════════════════════════════════════════════════════════════════════

4. TO-BE DATA ARCHITECTURE
─────────────────────────────────────────────────────────────────────────────

4.1 Data Domain Model

| Domain ID | Domain Name | Sub-Domains | Changes from RA |
|-----------|-------------|-------------|-----------------|
| | | | |

4.2 Data Quality Framework
[Describe quality rules and targets]

4.3 Data Governance Model
[Describe ownership and stewardship]

4.4 Analytics Architecture
[Describe analytics capabilities]

4.5 Data Migration Strategy
[Summarize migration approach]

══════════════════════════════════════════════════════════════════════════════

5. TO-BE TECHNOLOGY ARCHITECTURE
─────────────────────────────────────────────────────────────────────────────

5.1 Platform Tier Selection
Selected Tier: [Basic/Standard/Enterprise]
Rationale: [...]

5.2 Infrastructure Architecture
[Describe compute, storage, network requirements]

5.3 Security Architecture
[Describe security controls and compliance]

5.4 Deployment Model
[Describe hosting approach]

5.5 Operational Architecture
[Describe operational requirements and SLAs]

══════════════════════════════════════════════════════════════════════════════

6. TAILORING DECISION LOG
─────────────────────────────────────────────────────────────────────────────

[Include summary; full log in Template 5.5.2]

══════════════════════════════════════════════════════════════════════════════

7. RA COMPLIANCE STATEMENT
─────────────────────────────────────────────────────────────────────────────

7.1 Inheritance Verification
[Confirm PDU ⊂ RA ⊂ SDA maintained]

7.2 Core Elements Preserved
[List protected elements preserved]

7.3 Deviations and Justifications
[List any deviations with approvals]

7.4 Compliance Summary
Overall RA Compliance: ⬜ COMPLIANT    ⬜ COMPLIANT WITH DEVIATIONS

══════════════════════════════════════════════════════════════════════════════

APPENDICES
─────────────────────────────────────────────────────────────────────────────

A. Detailed Capability Map
B. Application Catalog
C. Data Domain Details
D. Technology Specifications

══════════════════════════════════════════════════════════════════════════════
```

### 12.14.2 Template 5.5.2: Tailoring Decision Log

```
══════════════════════════════════════════════════════════════════════════════
                        TAILORING DECISION LOG
                        [ORGANIZATION NAME]
══════════════════════════════════════════════════════════════════════════════

Document ID:        TDL-[ORG]-001
Version:            1.0
Date:               [DATE]
Reference Architecture: [PDU/RA/SDA] v1.0

══════════════════════════════════════════════════════════════════════════════

DECISION LOG
─────────────────────────────────────────────────────────────────────────────

┌────────┬──────────────────────────────────────────────────────────────────┐
│ TD-001 │ [DECISION TITLE]                                                 │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Domain │ ⬜ Capability  ⬜ Application  ⬜ Data  ⬜ Technology             │
├────────┼──────────────────────────────────────────────────────────────────┤
│ RA Element │ [Reference to RA element being tailored]                     │
├────────┼──────────────────────────────────────────────────────────────────┤
│ RA Specification │                                                        │
│        │ [Original specification from RA]                                 │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Tailored Specification │                                                  │
│        │ [New specification after tailoring]                              │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Tailoring Type │ ⬜ Extension  ⬜ Adjustment  ⬜ Removal  ⬜ Deviation    │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Justification │                                                           │
│        │ [Detailed business/technical justification]                      │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Impact Assessment │                                                       │
│        │ [Impact on other architecture elements, implementation]          │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Approved By │ [Name, Role]                                                │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Approval Date │ [DATE]                                                    │
└────────┴──────────────────────────────────────────────────────────────────┘

[Repeat for each tailoring decision]

══════════════════════════════════════════════════════════════════════════════

DECISION SUMMARY
─────────────────────────────────────────────────────────────────────────────

| Decision Type | Capability | Application | Data | Technology | Total |
|---------------|------------|-------------|------|------------|-------|
| Extension | | | | | |
| Adjustment | | | | | |
| Removal | | | | | |
| Deviation | | | | | |
| **Total** | | | | | |

══════════════════════════════════════════════════════════════════════════════

DEVIATION REGISTER
─────────────────────────────────────────────────────────────────────────────

| DEV ID | Element | Deviation | Justification | Risk | Approval |
|--------|---------|-----------|---------------|------|----------|
| | | | | | |

══════════════════════════════════════════════════════════════════════════════
```

### 12.14.3 Template 5.5.3: Transition Requirements

```
══════════════════════════════════════════════════════════════════════════════
                        TRANSITION REQUIREMENTS
                        [ORGANIZATION NAME]
══════════════════════════════════════════════════════════════════════════════

Document ID:        TR-[ORG]-001
Version:            1.0
Date:               [DATE]

══════════════════════════════════════════════════════════════════════════════

1. TRANSITION INVENTORY
─────────────────────────────────────────────────────────────────────────────

| TR ID | From (AS-IS) | To (TO-BE) | Type | Complexity | Priority | Dependencies |
|-------|--------------|------------|------|------------|----------|--------------|
| TR001 | | | Replace | H/M/L | Must/Should | |
| TR002 | | | Enhance | | | |
| TR003 | | | Retire | | | |
| TR004 | | | New | | | |

══════════════════════════════════════════════════════════════════════════════

2. COEXISTENCE REQUIREMENTS
─────────────────────────────────────────────────────────────────────────────

| TR ID | AS-IS System | TO-BE System | Pattern | Duration | Data Sync | Notes |
|-------|--------------|--------------|---------|----------|-----------|-------|
| | | | Parallel/Phased/Strangler | X months | Yes/No | |

══════════════════════════════════════════════════════════════════════════════

3. DATA MIGRATION REQUIREMENTS
─────────────────────────────────────────────────────────────────────────────

┌────────┬──────────────────────────────────────────────────────────────────┐
│ DM-001 │ [MIGRATION NAME]                                                 │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Source │ System: [...]                                                    │
│        │ Data Domain: [...]                                               │
│        │ Volume: [...] records                                            │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Target │ System: [...]                                                    │
│        │ Data Domain: [...]                                               │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Transformation │                                                          │
│        │ [Describe transformation rules]                                  │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Quality │ Source Quality: [High/Med/Low]                                  │
│        │ Target Quality: [High/Med/Low]                                   │
│        │ Cleansing Required: [Yes/No]                                     │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Approach │ ⬜ Big Bang  ⬜ Incremental  ⬜ Phased                          │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Timeline │ Start: [...]  End: [...]                                       │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Complexity │ ⬜ Low  ⬜ Medium  ⬜ High                                    │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Dependencies │ [List dependencies]                                        │
└────────┴──────────────────────────────────────────────────────────────────┘

[Repeat for each migration]

══════════════════════════════════════════════════════════════════════════════

4. INTEGRATION CHANGES
─────────────────────────────────────────────────────────────────────────────

| IC ID | Integration | Change Type | Description | Timeline | Dependencies |
|-------|-------------|-------------|-------------|----------|--------------|
| IC001 | | Add/Modify/Remove | | | |

DPI Integration Changes:

| DPI Component | Current | TO-BE | Change Required | Timeline |
|---------------|---------|-------|-----------------|----------|
| Identity BB | | | | |
| Information Mediator BB | | | | |
| Payments BB | | | | |
| Digital Registries BB | | | | |
| Messaging BB | | | | |

══════════════════════════════════════════════════════════════════════════════

5. TRANSITION ARCHITECTURE PHASES
─────────────────────────────────────────────────────────────────────────────

Phase 1: [NAME]
─────────────────────────────────────────────────────────────────────────────
Duration: [X months]
Focus: [...]
Key Deliverables:
- [...]
Exit Criteria:
- [...]
Risks:
- [...]

Phase 2: [NAME]
─────────────────────────────────────────────────────────────────────────────
[Repeat structure]

Phase N: [NAME]
─────────────────────────────────────────────────────────────────────────────
[Final phase leading to full TO-BE]

══════════════════════════════════════════════════════════════════════════════

6. TRANSITION RISKS AND MITIGATIONS
─────────────────────────────────────────────────────────────────────────────

| Risk ID | Risk Description | Probability | Impact | Mitigation |
|---------|------------------|-------------|--------|------------|
| R001 | | H/M/L | H/M/L | |

══════════════════════════════════════════════════════════════════════════════

7. TRANSITION RESOURCE REQUIREMENTS
─────────────────────────────────────────────────────────────────────────────

| Resource Type | Phase 1 | Phase 2 | Phase N | Total |
|---------------|---------|---------|---------|-------|
| EA Team | | | | |
| Development | | | | |
| Testing | | | | |
| Data Migration | | | | |
| Training | | | | |
| Infrastructure | | | | |

══════════════════════════════════════════════════════════════════════════════
```

---

## 12.15 TRANSITION TO PLAN PHASE

### 12.15.1 Handoff Checklist

Before starting the PLAN phase, confirm:

| Item | Status | Notes |
|------|--------|-------|
| TO-BE Architecture Document complete and approved | ⬜ | |
| Tailoring Decision Log complete | ⬜ | |
| Transition Requirements documented | ⬜ | |
| RA Compliance verified | ⬜ | |
| ADAPT Summary signed by senior management | ⬜ | |
| PLAN phase team identified | ⬜ | |
| Budget implications understood | ⬜ | |

### 12.15.2 What Happens in PLAN Phase

The PLAN phase will:

1. **Develop Implementation Roadmap** based on transition requirements
2. **Define Project Portfolio** for gap closure
3. **Sequence Initiatives** considering dependencies
4. **Allocate Resources** across phases
5. **Define Governance** for implementation oversight
6. **Prepare for Execution** with detailed project plans

### 12.15.3 Key Inputs for PLAN Phase

| Document | Purpose | Critical Sections |
|----------|---------|-------------------|
| TO-BE Architecture | Target definition | All sections |
| Transition Requirements | Implementation scope | All transitions |
| Tailoring Decision Log | Understanding customizations | All decisions |
| ASSESS Gap Register | Gap-to-project mapping | Prioritized gaps |
| DPI Readiness | Integration dependencies | Gap mitigation |

### 12.15.4 ADAPT Phase Completion

**Phase Completion Criteria:**

| Criterion | Evidence |
|-----------|----------|
| TO-BE Architecture defined | Document complete and approved |
| Tailoring decisions documented | Decision log complete |
| RA integrity maintained | Compliance verification passed |
| Transitions defined | Transition requirements documented |
| Stakeholders aligned | Sign-off obtained |

**Phase Duration Summary:**

| Organization Type | Typical Duration | Notes |
|-------------------|------------------|-------|
| PDU | 4 weeks | Limited tailoring |
| RA | 6 weeks | Moderate customization |
| SDA | 8 weeks | Extensive tailoring |

---


# SECTION 13: PLAN PHASE GUIDE

## 13.1 PHASE OVERVIEW

### 13.1.1 Purpose of PLAN Phase

The PLAN phase is the **fourth phase** in the GEATDM (Generic EA Target Architecture Development Method). Its purpose is to transform the TO-BE architecture from the ADAPT phase into an actionable implementation roadmap with clear phases, milestones, resource requirements, and a compelling business case.

The PLAN phase bridges the gap between architectural design and execution, answering four critical questions:

1. **How will we get from AS-IS to TO-BE?** (Implementation Approach)
2. **In what order should we implement?** (Initiative Sequencing)
3. **What resources and time do we need?** (Estimates and Timeline)
4. **Is the investment justified?** (Business Case)

The PLAN phase ensures that the digital transformation journey is realistic, properly resourced, and aligned with organizational capacity, budget cycles, and governance requirements.

### 13.1.2 Expected Duration

| Organization Complexity | Typical Duration | Notes |
|------------------------|------------------|-------|
| PDU (Simple) | 2 weeks | Straightforward roadmap, limited stakeholders |
| RA (Moderate) | 3 weeks | Multiple phases, regulatory considerations |
| SDA (Complex) | 4 weeks | Extensive planning, multiple workstreams, complex governance |

**Note:** Duration assumes the ADAPT phase deliverables are complete and approved. Additional time may be required for budget cycle alignment and governance approval processes.

### 13.1.3 Key Participants

| Role | Responsibility | Involvement |
|------|----------------|-------------|
| **EA Lead** | Coordinates planning activities, ensures architectural alignment | Full-time |
| **PMO/Program Manager** | Develops timeline, coordinates resources, manages dependencies | Full-time |
| **Finance Representative** | Validates cost estimates, supports business case development | Part-time |
| **Business Sponsors** | Validate benefits, confirm priorities, approve business case | Workshops + approval |
| **IT Director/CIO** | Reviews technical feasibility, approves resource allocation | Decision points |
| **Solution Architects** | Provide detailed effort estimates, validate technical dependencies | Part-time |
| **HR/Training Lead** | Plans change management and training requirements | Part-time |
| **Senior Management** | Approves roadmap and business case, authorizes investment | Approval gate |

### 13.1.4 Inputs to PLAN Phase

| Input | Source | Purpose |
|-------|--------|---------|
| **TO-BE Architecture Document** | ADAPT Phase | Target state definition |
| **Transition Requirements** | ADAPT Phase | AS-IS to TO-BE transitions |
| **Tailoring Decision Log** | ADAPT Phase | Understanding customizations |
| **Gap Analysis Report** | ASSESS Phase | Gap-to-project mapping |
| **Prioritized Gap Register** | ASSESS Phase | Initiative priorities |
| **DPI Readiness Assessment** | DISCOVER Phase | Infrastructure dependencies |
| **Budget Cycle Information** | Finance | Fiscal constraints |
| **Organizational Capacity** | HR/PMO | Resource constraints |

### 13.1.5 Outputs of PLAN Phase

| Output | Description | Format |
|--------|-------------|--------|
| **Implementation Roadmap** | Visual multi-year plan with phases, milestones, and dependencies | Document + visual |
| **Business Case** | Investment justification with costs, benefits, and ROI | Structured document |
| **Phase Definitions** | Detailed objectives, deliverables, and exit criteria per phase | Structured document |
| **Resource Plan** | Staffing, skills, and budget requirements by phase | Plan document |
| **Risk Register** | Implementation risks with mitigation strategies | Structured register |
| **Governance Framework** | Decision gates and approval processes | Framework document |
| **PLAN Summary** | Consolidated findings with sign-off | Summary document |

### 13.1.6 PLAN in the GEATDM Context

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        GEATDM APPLICATION METHOD                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌───────────┐    ┌───────────┐    ┌───────────┐    ╔═══════════╗    ┌───────────┐  │
│  │ DISCOVER  │ →  │  ASSESS   │ →  │   ADAPT   │ →  ║   PLAN    ║ →  │  EXECUTE  │  │
│  │ (Phase 1) │    │ (Phase 2) │    │ (Phase 3) │    ║ (Phase 4) ║    │ (Phase 5) │  │
│  └───────────┘    └───────────┘    └───────────┘    ╚═══════════╝    └───────────┘  │
│                                                                              │
│                                                     ▲ YOU ARE HERE           │
│                                                                              │
│  Classify org      Document         Tailor RA        Develop          Implement    │
│  Check DPI         AS-IS            to context       roadmap          & govern     │
│  Select RA         Identify gaps    Create TO-BE     Define phases                │
│                                                      Build case                    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 13.1.7 The Planning Principle

The PLAN phase follows a fundamental principle based on PAERA implementation guidance:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        THE PLANNING PRINCIPLE                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │                     PROGRESSIVE VALUE DELIVERY                          │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  1. FOUNDATION BEFORE FUNCTION                                               │
│     - DPI/Building Blocks must be in place before dependent applications    │
│     - Infrastructure before applications, applications before optimization  │
│                                                                              │
│  2. QUICK WINS EARLY                                                         │
│     - Demonstrate value within 6-9 months                                    │
│     - Build organizational momentum and stakeholder confidence              │
│                                                                              │
│  3. INTERNAL BEFORE EXTERNAL                                                 │
│     - Prerequisites before customer-facing services                         │
│     - Mitigate risks before public exposure                                  │
│                                                                              │
│  4. PHASED APPROACH                                                          │
│     - Small, manageable projects (6-18 months)                               │
│     - Clear decision gates between phases                                    │
│     - Build organizational capacity iteratively                              │
│                                                                              │
│  5. VISIBLE IMPACT                                                           │
│     - Every phase should deliver tangible value to citizens/business        │
│     - Communicate successes broadly                                          │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 13.2 PLAN PROCESS FLOW

### 13.2.1 Visual Process Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                               PLAN PHASE                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  STEP 1: DEFINE IMPLEMENTATION APPROACH                                      │
│  ├─ 1.1 Review organizational context and constraints                        │
│  ├─ 1.2 Evaluate implementation approach options                            │
│  ├─ 1.3 Select approach (Big Bang / Phased / Incremental)                   │
│  └─ 1.4 Document approach rationale                                          │
│           │                                                                  │
│           ▼                                                                  │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  DECISION POINT DP6: Implementation Approach                         │   │
│  │  ├─ BIG BANG: All at once (small scope, greenfield)                  │   │
│  │  ├─ PHASED: Sequential releases (most common)                        │   │
│  │  └─ INCREMENTAL: Continuous small changes (agile environments)       │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 2: SEQUENCE INITIATIVES                                               │
│  ├─ 2.1 List all initiatives from TO-BE architecture                        │
│  ├─ 2.2 Identify dependencies between initiatives                           │
│  ├─ 2.3 Apply sequencing criteria                                           │
│  ├─ 2.4 Identify quick wins                                                 │
│  └─ 2.5 Create initiative sequence                                          │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 3: DEFINE PHASES AND MILESTONES                                       │
│  ├─ 3.1 Group initiatives into phases                                       │
│  ├─ 3.2 Define phase objectives                                             │
│  ├─ 3.3 Set milestone criteria                                              │
│  ├─ 3.4 Define decision gates                                               │
│  └─ 3.5 Align with budget cycles                                            │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 4: ESTIMATE RESOURCES AND TIMELINE                                    │
│  ├─ 4.1 Estimate effort for each initiative                                 │
│  ├─ 4.2 Identify resource requirements                                      │
│  ├─ 4.3 Create timeline                                                     │
│  ├─ 4.4 Consider constraints                                                │
│  └─ 4.5 Validate with delivery teams                                        │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 5: DEVELOP BUSINESS CASE                                              │
│  ├─ 5.1 Document current state costs                                        │
│  ├─ 5.2 Estimate benefits (quantified)                                      │
│  ├─ 5.3 Calculate investment required                                       │
│  ├─ 5.4 Determine ROI/payback period                                        │
│  └─ 5.5 Develop executive summary                                           │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 6: IDENTIFY RISKS AND DEPENDENCIES                                    │
│  ├─ 6.1 List implementation risks                                           │
│  ├─ 6.2 Assess probability and impact                                       │
│  ├─ 6.3 Define mitigation strategies                                        │
│  └─ 6.4 Document external dependencies                                      │
│           │                                                                  │
│           ▼                                                                  │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  CHECKPOINT: Are all planning elements complete?                     │   │
│  │  ├─ YES → Proceed to Step 7                                          │   │
│  │  └─ NO  → Complete missing sections                                  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 7: CREATE IMPLEMENTATION ROADMAP                                      │
│  ├─ 7.1 Create visual roadmap                                               │
│  ├─ 7.2 Show phases, milestones, dependencies                               │
│  ├─ 7.3 Align with fiscal years/budget cycles                               │
│  ├─ 7.4 Include decision gates                                              │
│  └─ 7.5 Validate with stakeholders                                          │
│           │                                                                  │
│           ▼                                                                  │
│  STEP 8: OBTAIN APPROVAL                                                    │
│  ├─ 8.1 Present to governance body (EA Board)                               │
│  ├─ 8.2 Address questions and concerns                                      │
│  ├─ 8.3 Obtain formal approval                                              │
│  └─ 8.4 Baseline the roadmap                                                │
│           │                                                                  │
│           ▼                                                                  │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  DECISION POINT DP7: Approve Roadmap and Business Case?              │   │
│  │  ├─ APPROVED → Proceed to EXECUTE phase                              │   │
│  │  └─ NOT APPROVED → Revise planning (return to relevant step)         │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 13.2.2 Activity Summary

| Step | Activities | Duration | Key Output |
|------|-----------|----------|------------|
| **Step 1** | Define Implementation Approach | 2 days | Implementation approach selected |
| **Step 2** | Sequence Initiatives | 3 days | Initiative sequence |
| **Step 3** | Define Phases and Milestones | 3 days | Phase definitions |
| **Step 4** | Estimate Resources and Timeline | 3-5 days | Resource plan and timeline |
| **Step 5** | Develop Business Case | 3-5 days | Business Case document |
| **Step 6** | Identify Risks and Dependencies | 2 days | Risk Register |
| **Step 7** | Create Implementation Roadmap | 2-3 days | Implementation Roadmap |
| **Step 8** | Obtain Approval | 2-5 days | Approved roadmap |

### 13.2.3 Decision Points Summary

| ID | Decision Point | Criteria | Outcomes |
|----|---------------|----------|----------|
| **DP6** | Implementation Approach | Scope, risk tolerance, organizational maturity | Big Bang / Phased / Incremental |
| **DP7** | Roadmap and Business Case Approval | Completeness, feasibility, ROI, stakeholder agreement | Approved / Revise |

---

## 13.3 STEP 1: DEFINE IMPLEMENTATION APPROACH

### 13.3.1 Purpose

Select the most appropriate implementation approach based on organizational context, risk tolerance, and the nature of the transformation. This foundational decision shapes all subsequent planning activities.

### 13.3.2 Decision Point DP6: Implementation Approach

**Implementation Approach Options:**

| Approach | Description | When to Use | Risk Level |
|----------|-------------|-------------|------------|
| **Big Bang** | Complete transformation deployed at once | Small scope, greenfield situations, regulatory mandates with fixed deadlines | High |
| **Phased** | Sequential releases with defined phases | Most digital transformations, complex environments, need for learning and adjustment | Medium |
| **Incremental** | Continuous small changes delivered regularly | Agile environments, organizations with mature DevOps, low-risk changes | Low |

### 13.3.3 Activities

#### Activity 1.1: Review Organizational Context and Constraints

**Context Assessment Checklist:**

| Factor | Assessment | Impact on Approach |
|--------|------------|-------------------|
| **Organizational Maturity** | ⬜ Low / ⬜ Medium / ⬜ High | Low = smaller phases needed |
| **Change Capacity** | ⬜ Limited / ⬜ Moderate / ⬜ Strong | Limited = incremental preferred |
| **Risk Tolerance** | ⬜ Risk-averse / ⬜ Moderate / ⬜ Risk-tolerant | Risk-averse = phased preferred |
| **Budget Flexibility** | ⬜ Fixed / ⬜ Moderate / ⬜ Flexible | Fixed = phase alignment with fiscal year |
| **Timeline Pressure** | ⬜ Flexible / ⬜ Moderate / ⬜ Urgent | Urgent = big bang may be required |
| **Stakeholder Alignment** | ⬜ Low / ⬜ Moderate / ⬜ High | Low = need quick wins to build support |
| **Technical Dependencies** | ⬜ Few / ⬜ Some / ⬜ Many | Many = phased to manage complexity |
| **Legacy System Complexity** | ⬜ Low / ⬜ Medium / ⬜ High | High = phased migration essential |

#### Activity 1.2: Evaluate Implementation Approach Options

**Approach Evaluation Matrix:**

| Criterion | Weight | Big Bang | Phased | Incremental |
|-----------|--------|----------|--------|-------------|
| **Risk Management** | 25% | Low (1) | High (3) | Medium (2) |
| **Value Delivery Speed** | 20% | High (3) | Medium (2) | Low (1) |
| **Organizational Fit** | 20% | [Score] | [Score] | [Score] |
| **Budget Alignment** | 15% | [Score] | [Score] | [Score] |
| **Technical Feasibility** | 10% | [Score] | [Score] | [Score] |
| **Change Management** | 10% | Low (1) | High (3) | Medium (2) |
| **WEIGHTED SCORE** | 100% | **___** | **___** | **___** |

**Scoring:** 1 = Poor fit, 2 = Acceptable, 3 = Good fit

#### Activity 1.3: Select Approach

Based on the evaluation matrix, select the approach with the highest weighted score. Document the selection:

**Implementation Approach Selection:**

Selected Approach: ⬜ Big Bang    ⬜ Phased    ⬜ Incremental

**Approach Characteristics for Selected Option:**

| If Big Bang | If Phased | If Incremental |
|-------------|-----------|----------------|
| Single cutover date | 3-5 distinct phases | Continuous delivery cycles |
| Comprehensive testing | Phase gate reviews | Sprint/iteration reviews |
| High-intensity execution | Progressive rollout | Steady-state delivery |
| One-time training | Phase-specific training | Just-in-time training |

#### Activity 1.4: Document Approach Rationale

**Approach Rationale Template:**

```
┌────────────────────────────────────────────────────────────────────────────┐
│                  IMPLEMENTATION APPROACH RATIONALE                         │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  SELECTED APPROACH: _______________                                        │
│                                                                            │
│  PRIMARY FACTORS:                                                          │
│  1. _________________________________________________________________    │
│  2. _________________________________________________________________    │
│  3. _________________________________________________________________    │
│                                                                            │
│  ALTERNATIVES CONSIDERED:                                                  │
│  - Alternative 1: _________________ - Rejected because: ________________  │
│  - Alternative 2: _________________ - Rejected because: ________________  │
│                                                                            │
│  KEY ASSUMPTIONS:                                                          │
│  1. _________________________________________________________________    │
│  2. _________________________________________________________________    │
│                                                                            │
│  CONSTRAINTS ADDRESSED:                                                    │
│  - Budget cycle: _________________________________________________       │
│  - Organizational capacity: _______________________________________       │
│  - Risk tolerance: ________________________________________________       │
│                                                                            │
│  Approved by: ________________________  Date: _____________               │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### 13.3.4 Output

```
┌────────────────────────────────────────────────────────────────────────────┐
│           STEP 1 OUTPUT: IMPLEMENTATION APPROACH DEFINITION                │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  SELECTED APPROACH: ⬜ Big Bang    ⬜ Phased    ⬜ Incremental             │
│                                                                            │
│  EVALUATION SCORE: ________ / 3.0                                          │
│                                                                            │
│  KEY SELECTION FACTORS:                                                    │
│  1. ________________________________________________________________     │
│  2. ________________________________________________________________     │
│  3. ________________________________________________________________     │
│                                                                            │
│  IMPLICATIONS FOR PLANNING:                                                │
│  - Number of Phases: ________                                              │
│  - Typical Phase Duration: ________ months                                 │
│  - Decision Gate Frequency: ________                                       │
│                                                                            │
│  Approved by: ________________________  Date: _____________               │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 13.4 STEP 2: SEQUENCE INITIATIVES

### 13.4.1 Purpose

Create a logical sequence of implementation initiatives that respects dependencies, delivers value progressively, and manages risk effectively.

### 13.4.2 Activities

#### Activity 2.1: List All Initiatives from TO-BE Architecture

Extract initiatives from the TO-BE Architecture and Transition Requirements:

**Initiative Inventory Template:**

| Init ID | Initiative Name | Source | Type | Priority (from ASSESS) |
|---------|-----------------|--------|------|------------------------|
| I001 | DPI Integration | TO-BE App Arch | Integration | Must Have |
| I002 | Core Registry Implementation | TO-BE App Arch | New Application | Must Have |
| I003 | Legacy System Retirement | Transition Req | Decommission | Should Have |
| ... | ... | ... | ... | ... |

**Initiative Types:**
- **New Application:** Implementing new system
- **Enhancement:** Upgrading existing system
- **Integration:** Connecting systems (including DPI/BB)
- **Migration:** Moving data or functionality
- **Decommission:** Retiring legacy systems
- **Infrastructure:** Platform/infrastructure changes
- **Process:** Business process changes
- **Training:** Capability building

#### Activity 2.2: Identify Dependencies Between Initiatives

**Dependency Matrix:**

| Initiative | Depends On | Dependency Type | Constraint |
|------------|------------|-----------------|------------|
| I002 | I001 (DPI Integration) | Technical | Cannot start until DPI is ready |
| I003 | I002 | Operational | Cannot retire until replacement is live |
| ... | ... | ... | ... |

**Dependency Types:**
- **Technical:** Technology dependency (e.g., BB must exist before integration)
- **Data:** Data dependency (e.g., master data must exist before transactional)
- **Operational:** Business dependency (e.g., process must be ready)
- **Resource:** Shared resources or skills
- **External:** Dependency on external parties (vendors, DPI providers)

#### Activity 2.3: Apply Sequencing Criteria

**Sequencing Criteria (Priority Order):**

1. **Foundation Before Function**
   - Infrastructure before applications
   - DPI/Building Blocks before dependent applications
   - Master data before transactional systems

2. **Quick Wins Early**
   - High-value, low-complexity initiatives first
   - Visible improvements within 6-9 months
   - Build momentum and stakeholder support

3. **Dependencies Respected**
   - Technical prerequisites before dependent systems
   - Integration readiness before data exchange

4. **Risk Mitigation**
   - Internal systems before public-facing
   - Pilot/POC before full deployment
   - Reversible changes before irreversible

**Sequencing Criteria Assessment:**

| Init ID | Foundation Score | Quick Win Score | Dependency Clear? | Risk Level | Sequence Score |
|---------|------------------|-----------------|-------------------|------------|----------------|
| I001 | 3 (foundation) | 2 (medium) | Yes | Medium | **8** |
| I002 | 2 (moderate) | 3 (high value) | After I001 | Low | **7** |
| ... | ... | ... | ... | ... | ... |

#### Activity 2.4: Identify Quick Wins

**Quick Win Identification:**

| Init ID | Initiative | Why Quick Win? | Expected Duration | Expected Value |
|---------|------------|----------------|-------------------|----------------|
| | | Low complexity, high visibility | < 6 months | Immediate impact |

**Quick Win Criteria:**
- Implementation duration < 6 months
- Complexity: Low to Medium
- Visible value to stakeholders or citizens
- Low dependency on other initiatives
- Can demonstrate approach/technology viability

#### Activity 2.5: Create Initiative Sequence

**Typical Sequencing Pattern (PAERA-aligned):**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    TYPICAL INITIATIVE SEQUENCING PATTERN                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  SEQUENCE 1: FOUNDATION                                                     │
│  ├─ Infrastructure provisioning (cloud/on-premise)                          │
│  ├─ Identity BB integration                                                  │
│  ├─ Information Mediator BB setup                                            │
│  ├─ Core data platform foundation                                            │
│  └─ Security framework implementation                                        │
│                                                                              │
│  SEQUENCE 2: CORE OPERATIONS                                                │
│  ├─ Core registry implementations                                            │
│  ├─ Primary business applications                                            │
│  ├─ Workflow BB integration                                                  │
│  ├─ Messaging BB integration                                                 │
│  └─ Portal/channel development                                               │
│                                                                              │
│  SEQUENCE 3: ENHANCED OPERATIONS                                            │
│  ├─ Analytics and reporting                                                  │
│  ├─ Mobile applications                                                      │
│  ├─ Business intelligence                                                    │
│  ├─ Advanced integrations                                                    │
│  └─ Legacy system retirement                                                 │
│                                                                              │
│  SEQUENCE 4: OPTIMIZATION                                                   │
│  ├─ AI/ML capabilities                                                       │
│  ├─ Advanced automation                                                      │
│  ├─ Predictive analytics                                                     │
│  └─ Continuous optimization                                                  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 13.4.3 Output

```
┌────────────────────────────────────────────────────────────────────────────┐
│                STEP 2 OUTPUT: INITIATIVE SEQUENCE                          │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  TOTAL INITIATIVES: ________                                               │
│                                                                            │
│  SEQUENCING SUMMARY:                                                       │
│  - Sequence 1 (Foundation): ________ initiatives                           │
│  - Sequence 2 (Core Operations): ________ initiatives                      │
│  - Sequence 3 (Enhanced Operations): ________ initiatives                  │
│  - Sequence 4 (Optimization): ________ initiatives                         │
│                                                                            │
│  QUICK WINS IDENTIFIED: ________                                           │
│  - Quick Win 1: ________________________________________________          │
│  - Quick Win 2: ________________________________________________          │
│  - Quick Win 3: ________________________________________________          │
│                                                                            │
│  CRITICAL PATH ITEMS: ________                                             │
│  - Critical Item 1: ______________________________________________        │
│  - Critical Item 2: ______________________________________________        │
│                                                                            │
│  DEPENDENCY ANALYSIS COMPLETE: ⬜ YES                                      │
│                                                                            │
│  Completed by: ________________________  Date: _____________              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 13.5 STEP 3: DEFINE PHASES AND MILESTONES

### 13.5.1 Purpose

Group sequenced initiatives into manageable phases with clear objectives, deliverables, and exit criteria. Define milestones that mark significant progress and enable governance oversight.

### 13.5.2 Activities

#### Activity 3.1: Group Initiatives into Phases

**Phase Grouping Principles:**
- Each phase should deliver tangible value
- Phase duration typically 6-12 months (max 18-24 months for complex phases)
- Clear logical grouping (e.g., infrastructure, core systems, enhancements)
- Manageable scope for governance and control
- Aligned with budget/fiscal year boundaries where possible

**Phase Definition Template:**

| Phase | Name | Duration | Initiatives Included | Primary Focus |
|-------|------|----------|---------------------|---------------|
| 1 | Foundation | X months | I001, I002, I003... | Infrastructure, DPI |
| 2 | Core Operations | X months | I010, I011... | Primary systems |
| 3 | Enhanced Operations | X months | I020, I021... | Analytics, Mobile |
| 4 | Optimization | X months | I030, I031... | AI/ML, Automation |

#### Activity 3.2: Define Phase Objectives

For each phase, define SMART objectives:

**Phase Objectives Template:**

```
┌────────────────────────────────────────────────────────────────────────────┐
│                      PHASE [N]: [NAME] OBJECTIVES                          │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  OBJECTIVE 1: ___________________________________________________         │
│  ├─ Specific: [What exactly will be achieved]                              │
│  ├─ Measurable: [How will success be measured]                             │
│  ├─ Achievable: [Why is this realistic]                                    │
│  ├─ Relevant: [How does this support TO-BE]                                │
│  └─ Time-bound: [When will this be complete]                               │
│                                                                            │
│  OBJECTIVE 2: ___________________________________________________         │
│  [Same structure]                                                          │
│                                                                            │
│  VALUE DELIVERED:                                                          │
│  - For Citizens: __________________________________________________       │
│  - For Businesses: _______________________________________________        │
│  - For Government: _______________________________________________        │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

#### Activity 3.3: Set Milestone Criteria

**Milestone Definition Template:**

| Milestone ID | Milestone Name | Phase | Target Date | Success Criteria |
|--------------|----------------|-------|-------------|------------------|
| M1.1 | Infrastructure Ready | 1 | [Date] | All infrastructure provisioned and tested |
| M1.2 | DPI Integration Complete | 1 | [Date] | Identity and IM BBs integrated |
| M2.1 | Core Registry Live | 2 | [Date] | Registry operational with data migrated |
| ... | ... | ... | ... | ... |

**Milestone Types:**
- **Capability Milestone:** New capability becomes available
- **Integration Milestone:** Systems successfully connected
- **Data Milestone:** Data migration or quality target achieved
- **Go-Live Milestone:** System enters production
- **Retirement Milestone:** Legacy system decommissioned

#### Activity 3.4: Define Decision Gates

**Decision Gate Framework:**

| Gate ID | Gate Name | Timing | Purpose | Decision Owner |
|---------|-----------|--------|---------|----------------|
| G1 | Foundation Validation | End of Phase 1 | Validate infrastructure readiness | EA Board |
| G2 | Core Operations Go-Live | End of Phase 2 | Approve production deployment | EA Board + Business |
| G3 | Enhancement Readiness | End of Phase 3 | Validate enhanced capabilities | EA Board |
| G4 | Optimization Readiness | End of Phase 4 | Approve advanced features | EA Board |

**Gate Review Criteria:**

| Criterion | G1 | G2 | G3 | G4 |
|-----------|-----|-----|-----|-----|
| Technical criteria met? | ✓ | ✓ | ✓ | ✓ |
| Budget within tolerance? | ✓ | ✓ | ✓ | ✓ |
| Schedule within tolerance? | ✓ | ✓ | ✓ | ✓ |
| Quality metrics achieved? | ✓ | ✓ | ✓ | ✓ |
| User acceptance complete? | - | ✓ | ✓ | ✓ |
| Business benefits validated? | - | ✓ | ✓ | ✓ |
| Risks acceptable for next phase? | ✓ | ✓ | ✓ | - |

#### Activity 3.5: Align with Budget Cycles

**Budget Alignment Template:**

| Fiscal Year | Phase(s) | Investment Required | Budget Source | Approval Status |
|-------------|----------|---------------------|---------------|-----------------|
| FY1 | Phase 1 | [Amount] | CAPEX/OPEX | ⬜ Requested / ⬜ Approved |
| FY2 | Phase 2 | [Amount] | CAPEX/OPEX | ⬜ Requested / ⬜ Approved |
| FY3 | Phase 3-4 | [Amount] | CAPEX/OPEX | ⬜ Planned |

**Budget Cycle Considerations:**
- Align phase start dates with fiscal year start where possible
- Plan major procurements 9-10 months in advance of fiscal year
- Include contingency (typically 15-20%) in budget requests
- Consider multi-year budgeting for large transformations
- Plan for ongoing operational costs (15-20% of initial investment annually)

### 13.5.3 Output

```
┌────────────────────────────────────────────────────────────────────────────┐
│             STEP 3 OUTPUT: PHASE AND MILESTONE DEFINITIONS                 │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  TOTAL PHASES: ________                                                    │
│                                                                            │
│  PHASE SUMMARY:                                                            │
│  ┌─────┬────────────────────┬────────────┬──────────────┐                 │
│  │Phase│ Name               │ Duration   │ Initiatives  │                 │
│  ├─────┼────────────────────┼────────────┼──────────────┤                 │
│  │  1  │ Foundation         │ __ months  │ __           │                 │
│  │  2  │ Core Operations    │ __ months  │ __           │                 │
│  │  3  │ Enhanced Ops       │ __ months  │ __           │                 │
│  │  4  │ Optimization       │ __ months  │ __           │                 │
│  └─────┴────────────────────┴────────────┴──────────────┘                 │
│                                                                            │
│  TOTAL PROGRAM DURATION: ________ months (________ years)                  │
│                                                                            │
│  MILESTONES: ________                                                      │
│  DECISION GATES: ________                                                  │
│                                                                            │
│  BUDGET ALIGNMENT: ⬜ Complete                                             │
│                                                                            │
│  Completed by: ________________________  Date: _____________              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 13.6 STEP 4: ESTIMATE RESOURCES AND TIMELINE

### 13.6.1 Purpose

Develop realistic resource estimates and timelines for each phase and initiative, considering organizational capacity, skill availability, and market conditions.

### 13.6.2 Activities

#### Activity 4.1: Estimate Effort for Each Initiative

**Effort Estimation Template:**

| Init ID | Initiative | Effort (person-months) | Duration (months) | Team Size |
|---------|------------|------------------------|-------------------|-----------|
| I001 | DPI Integration | 12 p-m | 4 | 3 |
| I002 | Core Registry | 24 p-m | 8 | 3-4 |
| ... | ... | ... | ... | ... |

**Estimation Methods:**
- **Analogous:** Based on similar past projects
- **Parametric:** Based on units (e.g., cost per application)
- **Bottom-up:** Detailed task-level estimation
- **Expert Judgment:** Senior team assessment

**Estimation Confidence Levels:**

| Confidence | Definition | Contingency |
|------------|------------|-------------|
| High | Well-understood scope, experienced team | 10-15% |
| Medium | Some uncertainties, adequate experience | 20-25% |
| Low | Significant uncertainties, new technology | 30-40% |

#### Activity 4.2: Identify Resource Requirements

**Resource Categories:**

| Category | Description | Typical Roles |
|----------|-------------|---------------|
| **Internal Staff** | Organization employees | Business analysts, project managers, SMEs |
| **External Consultants** | Specialized contractors | Architects, developers, integrators |
| **Technology/Licenses** | Software and tools | BB implementations, platforms, tools |
| **Infrastructure** | Hardware and cloud | Servers, storage, network, cloud services |
| **Training** | Capability building | End-user training, technical training |
| **Change Management** | Organizational change | Communications, adoption programs |

**Resource Requirements by Phase:**

| Resource Category | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Total |
|-------------------|---------|---------|---------|---------|-------|
| Internal Staff (FTE) | | | | | |
| External Consultants (FTE) | | | | | |
| Technology/Licenses | | | | | |
| Infrastructure | | | | | |
| Training | | | | | |
| Change Management | | | | | |
| **Contingency (20%)** | | | | | |
| **TOTAL** | | | | | |

**Staffing Model Example (from PAERA):**

| Phase | Permanent Staff | Contractors | Total FTE |
|-------|-----------------|-------------|-----------|
| Phase 1 | 5 | 5 | 10 |
| Phase 2 | 10 | 10 | 20 |
| Phase 3 | 15 | 13 | 28 |
| Phase 4 | 20 | 5 | 25 |
| Operational | 25-30 | 0 | 25-30 |

#### Activity 4.3: Create Timeline

**Timeline Development Approach:**

1. Map initiatives to calendar with dependencies
2. Account for parallel execution where possible
3. Include buffer for dependencies and risks
4. Align with budget cycles and organizational events
5. Validate with delivery teams

**Timeline Template:**

```
Year 1                  Year 2                  Year 3                  Year 4
├───────────────────────┼───────────────────────┼───────────────────────┼───────
│    PHASE 1            │     PHASE 2           │     PHASE 3           │ PHASE 4
│    Foundation         │     Core Operations   │     Enhanced Ops      │ Optimize
├───────────────────────┼───────────────────────┼───────────────────────┼───────
│ Q1 │ Q2 │ Q3 │ Q4    │ Q1 │ Q2 │ Q3 │ Q4    │ Q1 │ Q2 │ Q3 │ Q4    │ Q1 │ Q2
├────┼────┼────┼────   ├────┼────┼────┼────   ├────┼────┼────┼────   ├────┼────
│ Infrastructure  ──►  │ Core Systems    ──►   │ Analytics      ──►   │ AI/ML
│ DPI Integration ──►  │ Portal/Channels ──►   │ Mobile Apps    ──►   │ Auto
│ Data Foundation ──►  │ Workflow        ──►   │ Legacy Retire  ──►   │ Optim
│                      │                       │                       │
│ [G1]                 │ [G2]                  │ [G3]                  │ [G4]
└──────────────────────┴───────────────────────┴───────────────────────┴───────
```

#### Activity 4.4: Consider Constraints

**Constraint Analysis:**

| Constraint Type | Description | Impact | Mitigation |
|-----------------|-------------|--------|------------|
| **Budget** | Annual budget caps | Limits parallel work | Phase alignment with fiscal year |
| **Skills** | Scarce specialist skills | Longer duration | Training, external recruitment |
| **Technology** | DPI/BB availability | Dependency delays | Early engagement with DPI providers |
| **Organizational** | Change capacity limits | Adoption challenges | Phased rollout, change management |
| **External** | Vendor/partner timelines | Schedule risk | Early contracting, alternatives |

#### Activity 4.5: Validate with Delivery Teams

**Validation Checklist:**

| Validation Item | Validated By | Status | Notes |
|-----------------|--------------|--------|-------|
| Effort estimates realistic | Solution Architects | ⬜ | |
| Resource availability confirmed | HR/PMO | ⬜ | |
| Timeline achievable | Delivery Leads | ⬜ | |
| Dependencies accounted for | Technical Leads | ⬜ | |
| Risks reflected in contingency | Risk Manager | ⬜ | |

### 13.6.3 Output

```
┌────────────────────────────────────────────────────────────────────────────┐
│            STEP 4 OUTPUT: RESOURCE AND TIMELINE SUMMARY                    │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  TOTAL PROGRAM DURATION: ________ months                                   │
│                                                                            │
│  RESOURCE SUMMARY:                                                         │
│  - Total Effort: ________ person-months                                    │
│  - Peak Team Size: ________ FTE                                            │
│  - Internal Staff Required: ________ FTE                                   │
│  - External Consultants Required: ________ FTE                             │
│                                                                            │
│  INVESTMENT SUMMARY:                                                       │
│  ┌─────────────────────────┬─────────────────┐                             │
│  │ Category                │ Estimate        │                             │
│  ├─────────────────────────┼─────────────────┤                             │
│  │ Personnel               │ ____________    │                             │
│  │ Technology/Licenses     │ ____________    │                             │
│  │ Infrastructure          │ ____________    │                             │
│  │ Training                │ ____________    │                             │
│  │ Change Management       │ ____________    │                             │
│  │ Contingency (20%)       │ ____________    │                             │
│  ├─────────────────────────┼─────────────────┤                             │
│  │ TOTAL                   │ ____________    │                             │
│  └─────────────────────────┴─────────────────┘                             │
│                                                                            │
│  ESTIMATION CONFIDENCE: ⬜ High   ⬜ Medium   ⬜ Low                        │
│                                                                            │
│  VALIDATED BY DELIVERY TEAMS: ⬜ YES                                       │
│                                                                            │
│  Completed by: ________________________  Date: _____________              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 13.7 STEP 5: DEVELOP BUSINESS CASE

### 13.7.1 Purpose

Create a compelling business case that justifies the investment, quantifies benefits, and supports governance decision-making.

### 13.7.2 Activities

#### Activity 5.1: Document Current State Costs

**Current State Cost Analysis:**

| Cost Category | Annual Cost | Description | Data Source |
|---------------|-------------|-------------|-------------|
| **IT Operations** | | | |
| - Infrastructure maintenance | | | Finance records |
| - Application support | | | IT budget |
| - License fees | | | Contracts |
| **Manual Processes** | | | |
| - Staff time on manual tasks | | | Time studies |
| - Error correction costs | | | Process analysis |
| **Inefficiencies** | | | |
| - Duplicate data entry | | | Process analysis |
| - Delays and rework | | | Quality reports |
| **Risk Costs** | | | |
| - Compliance penalties (potential) | | | Risk register |
| - Security incidents | | | Security reports |
| **TOTAL CURRENT STATE COST** | | | |

#### Activity 5.2: Estimate Benefits (Quantified)

**Benefit Categories:**

| Category | Description | Quantification Approach |
|----------|-------------|------------------------|
| **Operational Efficiency** | Reduced manual effort, faster processing | FTE savings × average cost |
| **Revenue Enhancement** | Improved compliance, new services | Additional revenue captured |
| **Cost Avoidance** | Prevented penalties, avoided upgrades | Avoided cost estimates |
| **Risk Mitigation** | Reduced risk exposure | Expected loss reduction |
| **Quality Improvement** | Fewer errors, better service | Error cost × reduction % |
| **Strategic Value** | Competitive position, citizen satisfaction | Qualitative + proxy metrics |

**Benefit Realization Timeline:**

| Benefit Category | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 | Total |
|------------------|--------|--------|--------|--------|--------|-------|
| Operational Efficiency | | | | | | |
| Revenue Enhancement | | | | | | |
| Cost Avoidance | | | | | | |
| Risk Mitigation | | | | | | |
| **TOTAL BENEFITS** | | | | | | |

**Benefit Quantification Example (Tax Administration):**

| Benefit | Current | Year 1 | Year 2 | Year 3 | 5-Year Total |
|---------|---------|--------|--------|--------|--------------|
| Digital Filing Rate | 60% | 75% | 85% | 95% | - |
| Processing Time | Days | Hours | Minutes | Real-time | - |
| Cost per Transaction | €10 | €5 | €3 | €1 | - |
| Annual Savings | €0 | €300K | €800K | €1.5M | €5M+ |

#### Activity 5.3: Calculate Investment Required

**Investment Summary:**

| Investment Component | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Total |
|---------------------|---------|---------|---------|---------|-------|
| Personnel | | | | | |
| Technology/Licenses | | | | | |
| Infrastructure | | | | | |
| Implementation Services | | | | | |
| Training | | | | | |
| Change Management | | | | | |
| Contingency | | | | | |
| **TOTAL INVESTMENT** | | | | | |

**Investment by Year (for budget planning):**

| Fiscal Year | CAPEX | OPEX | Total |
|-------------|-------|------|-------|
| FY1 | | | |
| FY2 | | | |
| FY3 | | | |
| FY4 | | | |
| **TOTAL** | | | |

#### Activity 5.4: Determine ROI/Payback Period

**Financial Analysis:**

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| **Total Investment** | | | |
| **Total Benefits (5-year)** | | | |
| **Net Present Value (NPV)** | | > 0 | ⬜ Met / ⬜ Not Met |
| **Return on Investment (ROI)** | __% | > 200% | ⬜ Met / ⬜ Not Met |
| **Payback Period** | __ months | < 24 months | ⬜ Met / ⬜ Not Met |
| **Internal Rate of Return (IRR)** | __% | > 15% | ⬜ Met / ⬜ Not Met |

**ROI Calculation:**
```
ROI = (Total Benefits - Total Investment) / Total Investment × 100%

Example:
- Total Investment: €2,000,000
- 5-Year Benefits: €10,000,000
- ROI = (10,000,000 - 2,000,000) / 2,000,000 × 100% = 400%
```

**Payback Calculation:**
```
Payback Period = Total Investment / Annual Benefits

Example:
- Total Investment: €2,000,000
- Year 2 Annual Benefits: €2,000,000
- Payback = 12-18 months (during Year 2)
```

#### Activity 5.5: Develop Executive Summary

**Business Case Executive Summary Template:**

```
┌────────────────────────────────────────────────────────────────────────────┐
│                   BUSINESS CASE EXECUTIVE SUMMARY                          │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  PROGRAM: [Name]                                                           │
│  DATE: [Date]                                                              │
│                                                                            │
│  PROBLEM STATEMENT:                                                        │
│  [2-3 sentences describing the current state problems and their impact]   │
│                                                                            │
│  PROPOSED SOLUTION:                                                        │
│  [2-3 sentences describing the TO-BE architecture and approach]           │
│                                                                            │
│  INVESTMENT REQUIRED:                                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │ Total Investment:     €__________                                   │  │
│  │ Investment Period:    __ years                                      │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│  EXPECTED RETURNS:                                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │ 5-Year Benefits:      €__________                                   │  │
│  │ ROI:                  ___%                                          │  │
│  │ Payback Period:       __ months                                     │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│  KEY BENEFITS:                                                             │
│  - [Benefit 1]                                                             │
│  - [Benefit 2]                                                             │
│  - [Benefit 3]                                                             │
│                                                                            │
│  KEY RISKS:                                                                │
│  - [Risk 1 with mitigation]                                                │
│  - [Risk 2 with mitigation]                                                │
│                                                                            │
│  RECOMMENDATION:                                                           │
│  [Clear recommendation to proceed/not proceed with justification]         │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### 13.7.3 Output

```
┌────────────────────────────────────────────────────────────────────────────┐
│                 STEP 5 OUTPUT: BUSINESS CASE SUMMARY                       │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  BUSINESS CASE STATUS: ⬜ DRAFT    ⬜ COMPLETE    ⬜ APPROVED              │
│                                                                            │
│  FINANCIAL SUMMARY:                                                        │
│  ┌────────────────────────────────────────────────────────────────────┐   │
│  │ Total Investment:          €__________                             │   │
│  │ 5-Year Total Benefits:     €__________                             │   │
│  │ Net Present Value:         €__________                             │   │
│  │ Return on Investment:      __%                                     │   │
│  │ Payback Period:            __ months                               │   │
│  └────────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  INVESTMENT JUSTIFICATION: ⬜ STRONG    ⬜ MODERATE    ⬜ MARGINAL         │
│                                                                            │
│  KEY BENEFITS DOCUMENTED: ⬜ YES                                           │
│  RISKS ADDRESSED: ⬜ YES                                                   │
│  EXECUTIVE SUMMARY COMPLETE: ⬜ YES                                        │
│                                                                            │
│  Prepared by: ________________________  Date: _____________               │
│  Reviewed by: ________________________  Date: _____________               │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 13.8 STEP 6: IDENTIFY RISKS AND DEPENDENCIES

### 13.8.1 Purpose

Identify, assess, and plan mitigation strategies for implementation risks and external dependencies that could impact program success.

### 13.8.2 Activities

#### Activity 6.1: List Implementation Risks

**Risk Categories:**

| Category | Description | Common Risks |
|----------|-------------|--------------|
| **Technical** | Technology and integration risks | Legacy failure, integration issues, performance |
| **Resource** | People and skills risks | Skills gap, staff turnover, contractor dependency |
| **Organizational** | Change and adoption risks | Change resistance, adoption challenges, stakeholder conflict |
| **Financial** | Budget and funding risks | Budget cuts, cost overruns, procurement delays |
| **External** | Vendor and dependency risks | Vendor failure, DPI delays, regulatory changes |
| **Schedule** | Timeline risks | Scope creep, dependency delays, parallel work conflicts |

#### Activity 6.2: Assess Probability and Impact

**Risk Assessment Template:**

| Risk ID | Risk Description | Probability | Impact | Risk Score | Priority |
|---------|------------------|-------------|--------|------------|----------|
| R001 | Legacy system failure during transition | High | Critical | **12** | Critical |
| R002 | Skills gap in BB integration | High | High | **9** | High |
| R003 | Data quality issues during migration | Medium | High | **6** | Medium |
| R004 | Scope creep | Medium | Medium | **4** | Medium |
| R005 | Change resistance | Medium | Medium | **4** | Medium |
| ... | ... | ... | ... | ... | ... |

**Risk Scoring Matrix:**

| Probability / Impact | Low (1) | Medium (2) | High (3) | Critical (4) |
|---------------------|---------|------------|----------|--------------|
| **High (3)** | 3 | 6 | 9 | 12 |
| **Medium (2)** | 2 | 4 | 6 | 8 |
| **Low (1)** | 1 | 2 | 3 | 4 |

**Priority Thresholds:**
- Critical (9-12): Immediate attention, executive escalation
- High (6-8): Active management, regular review
- Medium (4-5): Monitor closely, contingency planned
- Low (1-3): Accept or monitor

#### Activity 6.3: Define Mitigation Strategies

**Risk Mitigation Template:**

| Risk ID | Risk | Mitigation Strategy | Owner | Status |
|---------|------|---------------------|-------|--------|
| R001 | Legacy system failure | Accelerate ORS deployment, maintain backup procedures | IT Director | ⬜ Active |
| R002 | Skills gap | Contractor bridge + training program, knowledge transfer | HR Lead | ⬜ Active |
| R003 | Data quality issues | Automated profiling tools, data cleansing phase | Data Architect | ⬜ Planned |
| R004 | Scope creep | Phased delivery with gates, change control process | PMO | ⬜ Active |
| R005 | Change resistance | Quick wins + engagement, communication program | Change Lead | ⬜ Planned |

**Mitigation Strategy Types:**

| Strategy | Description | When to Use |
|----------|-------------|-------------|
| **Avoid** | Change plan to eliminate risk | High probability, high impact |
| **Mitigate** | Reduce probability or impact | Moderate to high risks |
| **Transfer** | Shift risk to third party | Insurable or contractual risks |
| **Accept** | Acknowledge and monitor | Low probability or impact |
| **Escalate** | Refer to higher authority | Beyond team's control |

#### Activity 6.4: Document External Dependencies

**External Dependency Register:**

| Dep ID | Dependency | Provider | Required By | Status | Risk if Delayed |
|--------|------------|----------|-------------|--------|-----------------|
| D001 | Identity BB availability | National DPI | Phase 1 start | ⬜ Confirmed | Phase 1 delay |
| D002 | Information Mediator BB | National DPI | Phase 1 M3 | ⬜ In Progress | Integration delay |
| D003 | Vendor contract | [Vendor] | Phase 1 start | ⬜ In Procurement | Kick-off delay |
| D004 | Budget approval | Finance Ministry | FY Start | ⬜ Submitted | Program delay |
| ... | ... | ... | ... | ... | ... |

### 13.8.3 Output

```
┌────────────────────────────────────────────────────────────────────────────┐
│               STEP 6 OUTPUT: RISK AND DEPENDENCY SUMMARY                   │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  RISK SUMMARY:                                                             │
│  - Total Risks Identified: ________                                        │
│  - Critical Risks: ________                                                │
│  - High Risks: ________                                                    │
│  - Medium Risks: ________                                                  │
│  - Low Risks: ________                                                     │
│                                                                            │
│  TOP 5 RISKS:                                                              │
│  1. _____________________________________________ [Score: __]             │
│  2. _____________________________________________ [Score: __]             │
│  3. _____________________________________________ [Score: __]             │
│  4. _____________________________________________ [Score: __]             │
│  5. _____________________________________________ [Score: __]             │
│                                                                            │
│  MITIGATION STATUS:                                                        │
│  - Mitigations Defined: ________ / ________                                │
│  - Mitigations Active: ________                                            │
│                                                                            │
│  EXTERNAL DEPENDENCIES:                                                    │
│  - Total Dependencies: ________                                            │
│  - Dependencies Confirmed: ________                                        │
│  - Dependencies At Risk: ________                                          │
│                                                                            │
│  OVERALL RISK LEVEL: ⬜ LOW    ⬜ MEDIUM    ⬜ HIGH    ⬜ CRITICAL          │
│                                                                            │
│  Completed by: ________________________  Date: _____________              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 13.9 STEP 7: CREATE IMPLEMENTATION ROADMAP

### 13.9.1 Purpose

Create a comprehensive visual roadmap that consolidates phases, milestones, dependencies, decision gates, and budget alignment into a single authoritative plan.

### 13.9.2 Activities

#### Activity 7.1: Create Visual Roadmap

**Roadmap Components:**

| Component | Purpose | Visual Element |
|-----------|---------|----------------|
| **Phases** | Show major program stages | Horizontal bands/rows |
| **Initiatives** | Show work packages | Boxes within phases |
| **Milestones** | Mark key achievements | Diamond markers |
| **Decision Gates** | Show approval points | Gate symbols |
| **Dependencies** | Show relationships | Connecting arrows |
| **Timeline** | Show calendar | Horizontal axis |
| **Fiscal Years** | Show budget periods | Vertical dividers |

#### Activity 7.2: Show Phases, Milestones, Dependencies

**Visual Roadmap Template:**

```
═══════════════════════════════════════════════════════════════════════════════
                         IMPLEMENTATION ROADMAP
                    [Organization Name] Digital Transformation
═══════════════════════════════════════════════════════════════════════════════

         │ Year 1          │ Year 2          │ Year 3          │ Year 4
         │ FY____          │ FY____          │ FY____          │ FY____
         ├─────────────────┼─────────────────┼─────────────────┼───────────
         │ Q1│ Q2│ Q3│ Q4  │ Q1│ Q2│ Q3│ Q4  │ Q1│ Q2│ Q3│ Q4  │ Q1│ Q2│ Q3│ Q4
═════════╪════════════════╪════════════════╪════════════════╪════════════
         │                 │                 │                 │
PHASE 1  │████████████████│                 │                 │
Foundation│░░░░░░░░░░░░░░░░│                 │                 │
         │ ○ Infrastructure│                 │                 │
         │ ○ DPI Integration                 │                 │
         │ ○ Data Foundation                 │                 │
         │         ◊ [G1]  │                 │                 │
         ├────────────────►│                 │                 │
         │                 │                 │                 │
PHASE 2  │                 │████████████████│                 │
Core Ops │                 │░░░░░░░░░░░░░░░░│                 │
         │                 │ ○ Core Systems  │                 │
         │                 │ ○ Portal        │                 │
         │                 │ ○ Workflow      │                 │
         │                 │         ◊ [G2]  │                 │
         │                 ├────────────────►│                 │
         │                 │                 │                 │
PHASE 3  │                 │                 │████████████████│
Enhanced │                 │                 │░░░░░░░░░░░░░░░░│
         │                 │                 │ ○ Analytics     │
         │                 │                 │ ○ Mobile        │
         │                 │                 │ ○ Legacy Retire │
         │                 │                 │         ◊ [G3]  │
         │                 │                 ├────────────────►│
         │                 │                 │                 │
PHASE 4  │                 │                 │                 │████████████
Optimize │                 │                 │                 │░░░░░░░░░░░░
         │                 │                 │                 │ ○ AI/ML
         │                 │                 │                 │ ○ Automation
         │                 │                 │                 │     ◊ [G4]
═════════╧════════════════╧════════════════╧════════════════╧════════════

LEGEND:
████  Phase duration               ◊  Decision Gate
░░░░  Buffer/contingency           ○  Initiative/Workstream
────► Dependency arrow             │  Fiscal year boundary
═══════════════════════════════════════════════════════════════════════════════
```

#### Activity 7.3: Align with Fiscal Years/Budget Cycles

**Budget Alignment Table:**

| Fiscal Year | Phase(s) | Investment | Key Procurement | Budget Status |
|-------------|----------|------------|-----------------|---------------|
| FY1 | Phase 1 | €___ | Infrastructure, BB licenses | ⬜ Approved |
| FY2 | Phase 2 | €___ | Core system, integration | ⬜ Requested |
| FY3 | Phase 3 | €___ | Analytics platform, mobile | ⬜ Planned |
| FY4 | Phase 4 | €___ | AI/ML tools, optimization | ⬜ Planned |

#### Activity 7.4: Include Decision Gates

**Decision Gate Schedule:**

| Gate | Name | Target Date | Key Criteria | Decision Owner |
|------|------|-------------|--------------|----------------|
| G1 | Foundation Validation | [Date] | Infrastructure ready, DPI integrated | EA Board |
| G2 | Core Operations Go-Live | [Date] | Core systems operational, users trained | EA Board + Business |
| G3 | Enhancement Readiness | [Date] | Analytics operational, legacy retired | EA Board |
| G4 | Optimization Complete | [Date] | Full capabilities operational | EA Board |

#### Activity 7.5: Validate with Stakeholders

**Stakeholder Validation Checklist:**

| Stakeholder | Validated | Concerns Addressed | Sign-off |
|-------------|-----------|-------------------|----------|
| EA Lead | ⬜ | | |
| Business Sponsors | ⬜ | | |
| IT Director | ⬜ | | |
| Finance | ⬜ | | |
| PMO | ⬜ | | |
| HR/Training | ⬜ | | |

### 13.9.3 Output

```
┌────────────────────────────────────────────────────────────────────────────┐
│               STEP 7 OUTPUT: IMPLEMENTATION ROADMAP                        │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  ROADMAP STATUS: ⬜ DRAFT    ⬜ VALIDATED    ⬜ APPROVED                   │
│                                                                            │
│  ROADMAP SUMMARY:                                                          │
│  - Total Duration: ________ months (________ years)                        │
│  - Number of Phases: ________                                              │
│  - Number of Initiatives: ________                                         │
│  - Number of Milestones: ________                                          │
│  - Number of Decision Gates: ________                                      │
│                                                                            │
│  CRITICAL PATH:                                                            │
│  [List critical path initiatives]                                          │
│                                                                            │
│  BUDGET ALIGNMENT: ⬜ COMPLETE                                             │
│                                                                            │
│  STAKEHOLDER VALIDATION:                                                   │
│  - Stakeholders Validated: ________ / ________                             │
│  - Open Concerns: ________                                                 │
│                                                                            │
│  VISUAL ROADMAP CREATED: ⬜ YES                                            │
│                                                                            │
│  Completed by: ________________________  Date: _____________              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 13.10 STEP 8: OBTAIN APPROVAL

### 13.10.1 Purpose

Present the implementation roadmap and business case to the governance body, address concerns, and obtain formal approval to proceed to the EXECUTE phase.

### 13.10.2 Activities

#### Activity 8.1: Present to Governance Body (EA Board)

**Presentation Structure:**

1. **Executive Summary** (5 min)
   - Problem statement
   - Proposed solution summary
   - Investment and ROI headline

2. **TO-BE Architecture Overview** (10 min)
   - Target state summary
   - Key tailoring decisions
   - DPI/BB alignment

3. **Implementation Roadmap** (15 min)
   - Phases and timeline
   - Key milestones and decision gates
   - Resource requirements

4. **Business Case** (10 min)
   - Investment breakdown
   - Benefit realization
   - ROI and payback

5. **Risks and Dependencies** (5 min)
   - Top risks and mitigations
   - Critical dependencies

6. **Recommendation and Request** (5 min)
   - Clear recommendation
   - Approval request

**Presentation Materials Checklist:**

| Material | Prepared | Reviewed |
|----------|----------|----------|
| Executive presentation deck | ⬜ | ⬜ |
| Visual roadmap (large format) | ⬜ | ⬜ |
| Business case summary | ⬜ | ⬜ |
| Supporting documentation | ⬜ | ⬜ |

#### Activity 8.2: Address Questions and Concerns

**Common Questions and Prepared Responses:**

| Question Area | Typical Questions | Prepared Response |
|---------------|-------------------|-------------------|
| **Investment** | Why this amount? Can we reduce? | [Prepared justification] |
| **Timeline** | Why this long? Can we accelerate? | [Timeline rationale] |
| **Risks** | What if [risk] occurs? | [Mitigation strategy] |
| **Benefits** | How confident are estimates? | [Benefit validation approach] |
| **Resources** | Do we have the capacity? | [Resource plan] |
| **Alternatives** | Did we consider...? | [Options analysis] |

**Concern Resolution Log:**

| Concern Raised | Raised By | Resolution | Status |
|----------------|-----------|------------|--------|
| | | | ⬜ Resolved / ⬜ Pending |

#### Activity 8.3: Obtain Formal Approval

**Approval Request:**

```
┌────────────────────────────────────────────────────────────────────────────┐
│                         APPROVAL REQUEST                                   │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  PROGRAM: [Name]                                                           │
│  DATE: [Date]                                                              │
│                                                                            │
│  REQUEST:                                                                  │
│  Approval to proceed with the Implementation Roadmap and associated       │
│  Business Case as presented.                                               │
│                                                                            │
│  APPROVAL SCOPE:                                                           │
│  ⬜ Implementation Roadmap (phases, milestones, timeline)                  │
│  ⬜ Business Case (investment, benefits, ROI)                              │
│  ⬜ Resource Allocation (staffing, budget)                                 │
│  ⬜ Risk Management Approach                                               │
│  ⬜ Governance Framework (decision gates)                                  │
│                                                                            │
│  INVESTMENT APPROVAL:                                                      │
│  ⬜ Phase 1: €__________                                                   │
│  ⬜ Full Program: €__________                                              │
│                                                                            │
│  CONDITIONS (if any):                                                      │
│  _____________________________________________________________________    │
│  _____________________________________________________________________    │
│                                                                            │
│  DECISION: ⬜ APPROVED    ⬜ APPROVED WITH CONDITIONS    ⬜ NOT APPROVED   │
│                                                                            │
│  APPROVED BY:                                                              │
│  Name: _________________________ Role: _______________________________    │
│  Signature: ____________________ Date: _______________________________    │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

#### Activity 8.4: Baseline the Roadmap

Once approved, establish the roadmap baseline:

**Baselining Activities:**

| Activity | Status |
|----------|--------|
| Version approved documents as v1.0 | ⬜ |
| Store in official repository | ⬜ |
| Communicate approval to stakeholders | ⬜ |
| Establish change control process | ⬜ |
| Schedule first decision gate review | ⬜ |
| Initiate EXECUTE phase preparations | ⬜ |

### 13.10.3 Output

```
┌────────────────────────────────────────────────────────────────────────────┐
│                 STEP 8 OUTPUT: APPROVAL SUMMARY                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  APPROVAL STATUS: ⬜ APPROVED    ⬜ APPROVED W/CONDITIONS    ⬜ NOT APPROVED│
│                                                                            │
│  GOVERNANCE BODY: ________________________________                         │
│                                                                            │
│  APPROVAL DATE: _____________                                              │
│                                                                            │
│  APPROVED ELEMENTS:                                                        │
│  ⬜ Implementation Roadmap                                                 │
│  ⬜ Business Case                                                          │
│  ⬜ Resource Allocation                                                    │
│  ⬜ Risk Management Approach                                               │
│  ⬜ Governance Framework                                                   │
│                                                                            │
│  CONDITIONS (if any):                                                      │
│  _____________________________________________________________________    │
│  _____________________________________________________________________    │
│                                                                            │
│  INVESTMENT APPROVED: €__________                                          │
│                                                                            │
│  BASELINE ESTABLISHED: ⬜ YES                                              │
│                                                                            │
│  EXECUTE PHASE READY TO START: ⬜ YES                                      │
│                                                                            │
│  Approval recorded by: __________________  Date: _____________            │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 13.11 ROADMAP PATTERNS BY ORGANIZATION TYPE

### 13.11.1 PDU Roadmap Pattern

**Policy Development Unit characteristics:**
- Simple organizational structure
- Limited IT complexity
- Focus on policy development and internal processes
- Typically smaller budget and team

**Recommended Duration:** 18-24 months

```
PDU ROADMAP PATTERN
═══════════════════════════════════════════════════════════════════

Year 1                          Year 2
├───────────────────────────────┼───────────────────────────────┐
│ Phase 1 (6 months)            │ Phase 2 (6 months)            │
│ Foundation                    │ Core + Enhancement            │
├───────────────────────────────┼───────────────────────────────┤
│ ○ Basic infrastructure        │ ○ Core applications           │
│ ○ Identity BB (if available)  │ ○ Analytics/reporting         │
│ ○ Document management         │ ○ Process automation          │
│ ○ Basic data foundation       │ ○ User training               │
│                               │                               │
│                   ◊ [G1]      │                   ◊ [G2]      │
└───────────────────────────────┴───────────────────────────────┘

Investment Range: €500K - €1.5M
Team Size: 5-10 FTE peak
```

### 13.11.2 RA Roadmap Pattern

**Regulatory Authority characteristics:**
- Moderate complexity
- Regulatory/compliance requirements
- Mix of internal and external services
- Medium budget and team

**Recommended Duration:** 24-36 months

```
RA ROADMAP PATTERN
═══════════════════════════════════════════════════════════════════

Year 1              Year 2              Year 3
├───────────────────┼───────────────────┼───────────────────┐
│ Phase 1 (9 mo)    │ Phase 2 (12 mo)   │ Phase 3 (9 mo)    │
│ Foundation        │ Core Operations   │ Enhanced Ops      │
├───────────────────┼───────────────────┼───────────────────┤
│ ○ Infrastructure  │ ○ License mgmt    │ ○ Analytics       │
│ ○ DPI Integration │ ○ Compliance      │ ○ Mobile/portal   │
│ ○ Core registries │ ○ Inspection      │ ○ Advanced integ  │
│ ○ Data platform   │ ○ Workflow        │ ○ Legacy retire   │
│                   │ ○ Portal          │ ○ Optimization    │
│                   │                   │                   │
│           ◊ [G1]  │           ◊ [G2]  │           ◊ [G3]  │
└───────────────────┴───────────────────┴───────────────────┘

Investment Range: €1M - €3M
Team Size: 15-25 FTE peak
```

### 13.11.3 SDA Roadmap Pattern

**Service Delivery Agency characteristics:**
- High complexity
- Large-scale citizen/business services
- Mission-critical operations
- Large budget and team

**Recommended Duration:** 36-48 months

```
SDA ROADMAP PATTERN
═══════════════════════════════════════════════════════════════════

Year 1         Year 2         Year 3         Year 4
├──────────────┼──────────────┼──────────────┼──────────────┐
│ Phase 1      │ Phase 2      │ Phase 3      │ Phase 4      │
│ Foundation   │ Core Ops     │ Enhanced     │ Optimize     │
│ (12 mo)      │ (12 mo)      │ (12 mo)      │ (12 mo)      │
├──────────────┼──────────────┼──────────────┼──────────────┤
│ ○ Infra      │ ○ Core apps  │ ○ Analytics  │ ○ AI/ML      │
│ ○ Full DPI   │ ○ Channels   │ ○ Mobile     │ ○ Automation │
│ ○ Data plat  │ ○ Full BB    │ ○ BI/DW      │ ○ Predictive │
│ ○ Identity   │ ○ Payments   │ ○ Legacy     │ ○ Optimize   │
│ ○ Security   │ ○ Workflow   │ ○ Advanced   │ ○ Continuous │
│              │              │              │              │
│      ◊ [G1]  │      ◊ [G2]  │      ◊ [G3]  │      ◊ [G4]  │
└──────────────┴──────────────┴──────────────┴──────────────┘

Investment Range: €2M - €5M+
Team Size: 25-40 FTE peak
```

### 13.11.4 Timeline Guidance Summary

| Organization Type | Typical Duration | Phases | Peak Team | Investment Range |
|-------------------|------------------|--------|-----------|------------------|
| **PDU** | 18-24 months | 2 | 5-10 FTE | €500K - €1.5M |
| **RA** | 24-36 months | 3 | 15-25 FTE | €1M - €3M |
| **SDA** | 36-48 months | 4 | 25-40 FTE | €2M - €5M+ |

---

## 13.12 DECISION GATES FRAMEWORK

### 13.12.1 Purpose of Decision Gates

Decision gates provide structured checkpoints for governance oversight, ensuring that:
- Progress is validated before proceeding
- Issues are identified and addressed early
- Investment continues to be justified
- Risks remain acceptable
- Stakeholders remain aligned

### 13.12.2 Standard Gate Criteria

**Gate Review Criteria:**

| Criterion Category | Specific Criteria | All Gates? |
|-------------------|-------------------|------------|
| **Technical** | Deliverables complete, quality acceptable | ✓ |
| **Budget** | Spend within tolerance (±10%) | ✓ |
| **Schedule** | Timeline within tolerance (±10%) | ✓ |
| **Quality** | Quality metrics achieved | ✓ |
| **Risk** | Risks acceptable for next phase | ✓ |
| **Resources** | Resources available for next phase | ✓ |
| **User Acceptance** | Business validation complete | G2+ |
| **Benefits** | Expected benefits on track | G2+ |

### 13.12.3 Gate Review Process

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        GATE REVIEW PROCESS                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  PRE-GATE (1 week before)                                                   │
│  ├─ 1. Prepare gate review package                                          │
│  ├─ 2. Conduct internal readiness review                                    │
│  ├─ 3. Distribute materials to reviewers                                    │
│  └─ 4. Schedule gate review meeting                                         │
│                                                                              │
│  GATE REVIEW (Meeting)                                                      │
│  ├─ 1. Present status against criteria                                      │
│  ├─ 2. Review risks and issues                                              │
│  ├─ 3. Address questions and concerns                                       │
│  ├─ 4. Make gate decision                                                   │
│  └─ 5. Document decision and conditions                                     │
│                                                                              │
│  POST-GATE (if approved)                                                    │
│  ├─ 1. Communicate decision to team                                         │
│  ├─ 2. Address any conditions                                               │
│  ├─ 3. Update baseline if needed                                            │
│  └─ 4. Proceed to next phase                                                │
│                                                                              │
│  GATE DECISIONS                                                             │
│  ├─ ✅ GO: Proceed to next phase                                            │
│  ├─ ⚠️ GO WITH CONDITIONS: Proceed but address specific items               │
│  ├─ 🔄 RECYCLE: Repeat work, return for re-review                           │
│  └─ ❌ STOP: Significant issues, escalate for decision                      │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 13.12.4 Gate Review Package

**Gate Review Package Contents:**

| Document | Description |
|----------|-------------|
| **Executive Summary** | 1-page summary of phase status |
| **Criteria Assessment** | Status against all gate criteria |
| **Deliverables Status** | List of deliverables with status |
| **Risk Update** | Current risk register with mitigations |
| **Issue Log** | Open issues and resolution plans |
| **Budget Report** | Actual vs. planned spend |
| **Schedule Report** | Actual vs. planned timeline |
| **Next Phase Plan** | Summary of next phase activities |
| **Recommendation** | GO/NO-GO recommendation with rationale |

---

## 13.13 PLAN DELIVERABLES CHECKLIST

### 13.13.1 Before Completing PLAN Phase

**Implementation Approach:**
- [ ] Organizational context assessed
- [ ] Implementation approach selected (Big Bang/Phased/Incremental)
- [ ] Approach rationale documented

**Initiative Sequencing:**
- [ ] All initiatives inventoried
- [ ] Dependencies identified
- [ ] Sequencing criteria applied
- [ ] Quick wins identified
- [ ] Initiative sequence created

**Phases and Milestones:**
- [ ] Initiatives grouped into phases
- [ ] Phase objectives defined (SMART)
- [ ] Milestones defined with success criteria
- [ ] Decision gates defined
- [ ] Budget cycles aligned

**Resources and Timeline:**
- [ ] Effort estimates completed
- [ ] Resource requirements identified
- [ ] Timeline created
- [ ] Constraints considered
- [ ] Estimates validated with delivery teams

**Business Case:**
- [ ] Current state costs documented
- [ ] Benefits quantified
- [ ] Investment calculated
- [ ] ROI/payback determined
- [ ] Executive summary completed

**Risks and Dependencies:**
- [ ] Risks identified and assessed
- [ ] Mitigation strategies defined
- [ ] External dependencies documented
- [ ] Risk register created

**Implementation Roadmap:**
- [ ] Visual roadmap created
- [ ] Phases, milestones, dependencies shown
- [ ] Budget alignment completed
- [ ] Decision gates included
- [ ] Stakeholders validated

**Approval:**
- [ ] Governance presentation prepared
- [ ] Questions and concerns addressed
- [ ] Formal approval obtained
- [ ] Roadmap baselined
- [ ] PLAN Summary signed

---

## 13.14 TEMPLATES

### 13.14.1 Template 5.6.1: Implementation Roadmap

See Section 9.2 for detailed roadmap template.

### 13.14.2 Template 5.6.2: Business Case Template

```
══════════════════════════════════════════════════════════════════════════════
                           BUSINESS CASE
                        [ORGANIZATION NAME]
                    Digital Transformation Program
══════════════════════════════════════════════════════════════════════════════

Document ID:        BC-[ORG]-001
Version:            1.0
Date:               [DATE]
Status:             [Draft/Under Review/Approved]

DOCUMENT CONTROL
─────────────────────────────────────────────────────────────────────────────
Version  │ Date       │ Author        │ Changes
─────────┼────────────┼───────────────┼──────────────────────────────────────
1.0      │            │               │ Initial version
─────────┴────────────┴───────────────┴──────────────────────────────────────

══════════════════════════════════════════════════════════════════════════════

EXECUTIVE SUMMARY
─────────────────────────────────────────────────────────────────────────────

[See Section 7.2, Activity 5.5 for template]

══════════════════════════════════════════════════════════════════════════════

1. PROBLEM STATEMENT
─────────────────────────────────────────────────────────────────────────────

1.1 Current State Overview
[Describe the current state and its challenges]

1.2 Impact of Current State
[Quantify the impact: costs, inefficiencies, risks, citizen impact]

1.3 Drivers for Change
[List the key drivers requiring transformation]

══════════════════════════════════════════════════════════════════════════════

2. PROPOSED SOLUTION
─────────────────────────────────────────────────────────────────────────────

2.1 Solution Overview
[Describe the TO-BE architecture and transformation approach]

2.2 Key Components
[List the major components/initiatives]

2.3 Implementation Approach
[Describe the phased approach]

══════════════════════════════════════════════════════════════════════════════

3. INVESTMENT ANALYSIS
─────────────────────────────────────────────────────────────────────────────

3.1 Investment Summary

| Component | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Total |
|-----------|---------|---------|---------|---------|-------|
| Personnel | | | | | |
| Technology | | | | | |
| Infrastructure | | | | | |
| Implementation | | | | | |
| Training | | | | | |
| Contingency | | | | | |
| **TOTAL** | | | | | |

3.2 Investment by Fiscal Year

| FY | CAPEX | OPEX | Total |
|----|-------|------|-------|
| | | | |

══════════════════════════════════════════════════════════════════════════════

4. BENEFIT ANALYSIS
─────────────────────────────────────────────────────────────────────────────

4.1 Quantified Benefits

| Benefit Category | Y1 | Y2 | Y3 | Y4 | Y5 | Total |
|------------------|-----|-----|-----|-----|-----|-------|
| Operational Efficiency | | | | | | |
| Revenue Enhancement | | | | | | |
| Cost Avoidance | | | | | | |
| Risk Mitigation | | | | | | |
| **TOTAL** | | | | | | |

4.2 Qualitative Benefits
[List non-quantifiable benefits]

══════════════════════════════════════════════════════════════════════════════

5. FINANCIAL ANALYSIS
─────────────────────────────────────────────────────────────────────────────

5.1 Key Metrics

| Metric | Value |
|--------|-------|
| Total Investment | |
| 5-Year Total Benefits | |
| Net Present Value (NPV) | |
| Return on Investment (ROI) | |
| Payback Period | |
| Internal Rate of Return (IRR) | |

5.2 Assumptions
[List key assumptions]

5.3 Sensitivity Analysis
[Show impact of key variable changes]

══════════════════════════════════════════════════════════════════════════════

6. RISKS
─────────────────────────────────────────────────────────────────────────────

6.1 Key Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| | | | |

══════════════════════════════════════════════════════════════════════════════

7. IMPLEMENTATION TIMELINE
─────────────────────────────────────────────────────────────────────────────

[Include roadmap summary]

══════════════════════════════════════════════════════════════════════════════

8. RECOMMENDATION
─────────────────────────────────────────────────────────────────────────────

[Clear recommendation with justification]

══════════════════════════════════════════════════════════════════════════════

APPENDICES
─────────────────────────────────────────────────────────────────────────────

A. Detailed Cost Breakdown
B. Benefit Calculation Methodology
C. Risk Register
D. Implementation Roadmap (full)

══════════════════════════════════════════════════════════════════════════════
```

### 13.14.3 Template 5.6.3: Phase Definition Template

```
══════════════════════════════════════════════════════════════════════════════
                         PHASE DEFINITION
                      Phase [N]: [Phase Name]
══════════════════════════════════════════════════════════════════════════════

PHASE OVERVIEW
─────────────────────────────────────────────────────────────────────────────

Phase Number:           [N]
Phase Name:             [Name]
Duration:               [X] months
Start Date:             [Date]
End Date:               [Date]
Budget:                 €[Amount]

─────────────────────────────────────────────────────────────────────────────

OBJECTIVES
─────────────────────────────────────────────────────────────────────────────

Objective 1: [SMART objective]
Objective 2: [SMART objective]
Objective 3: [SMART objective]

─────────────────────────────────────────────────────────────────────────────

INITIATIVES INCLUDED
─────────────────────────────────────────────────────────────────────────────

| Init ID | Initiative Name | Effort | Duration | Priority |
|---------|-----------------|--------|----------|----------|
| | | | | |

─────────────────────────────────────────────────────────────────────────────

KEY DELIVERABLES
─────────────────────────────────────────────────────────────────────────────

| Deliverable | Target Date | Acceptance Criteria |
|-------------|-------------|---------------------|
| | | |

─────────────────────────────────────────────────────────────────────────────

MILESTONES
─────────────────────────────────────────────────────────────────────────────

| Milestone ID | Name | Target Date | Success Criteria |
|--------------|------|-------------|------------------|
| | | | |

─────────────────────────────────────────────────────────────────────────────

RESOURCES
─────────────────────────────────────────────────────────────────────────────

| Resource Type | Quantity | Source |
|---------------|----------|--------|
| Internal Staff | FTE | |
| Contractors | FTE | |
| Technology | € | |
| Infrastructure | € | |

─────────────────────────────────────────────────────────────────────────────

DEPENDENCIES
─────────────────────────────────────────────────────────────────────────────

| Dependency | Type | Provider | Required By |
|------------|------|----------|-------------|
| | | | |

─────────────────────────────────────────────────────────────────────────────

RISKS
─────────────────────────────────────────────────────────────────────────────

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| | | | |

─────────────────────────────────────────────────────────────────────────────

EXIT CRITERIA (for Decision Gate)
─────────────────────────────────────────────────────────────────────────────

| Criterion | Target | Measurement Method |
|-----------|--------|-------------------|
| All deliverables complete | 100% | Deliverable acceptance |
| Budget within tolerance | ±10% | Financial report |
| Schedule within tolerance | ±10% | Schedule report |
| Quality metrics achieved | [Target] | Quality report |
| Risks acceptable | No critical unmitigated | Risk register |

─────────────────────────────────────────────────────────────────────────────

VALUE DELIVERED
─────────────────────────────────────────────────────────────────────────────

For Citizens:
- [Value statement]

For Businesses:
- [Value statement]

For Government:
- [Value statement]

══════════════════════════════════════════════════════════════════════════════
```

### 13.14.4 Template 5.6.4: Risk Register

```
══════════════════════════════════════════════════════════════════════════════
                           RISK REGISTER
                        [ORGANIZATION NAME]
══════════════════════════════════════════════════════════════════════════════

Document ID:        RR-[ORG]-001
Version:            1.0
Date:               [DATE]

══════════════════════════════════════════════════════════════════════════════

RISK SUMMARY
─────────────────────────────────────────────────────────────────────────────

| Priority | Count |
|----------|-------|
| Critical | |
| High | |
| Medium | |
| Low | |
| **Total** | |

══════════════════════════════════════════════════════════════════════════════

RISK REGISTER
─────────────────────────────────────────────────────────────────────────────

┌────────┬──────────────────────────────────────────────────────────────────┐
│ R001   │ [RISK TITLE]                                                     │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Category │ ⬜ Technical  ⬜ Resource  ⬜ Organizational  ⬜ Financial      │
│          │ ⬜ External   ⬜ Schedule                                       │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Description │                                                             │
│        │ [Detailed description of the risk]                               │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Cause  │ [Root cause of the risk]                                         │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Impact │ [Consequence if risk occurs]                                     │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Probability │ ⬜ Low (1)  ⬜ Medium (2)  ⬜ High (3)                        │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Impact │ ⬜ Low (1)  ⬜ Medium (2)  ⬜ High (3)  ⬜ Critical (4)            │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Score  │ ________ Priority: ⬜ Critical  ⬜ High  ⬜ Medium  ⬜ Low         │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Strategy │ ⬜ Avoid  ⬜ Mitigate  ⬜ Transfer  ⬜ Accept  ⬜ Escalate       │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Mitigation │                                                              │
│        │ [Detailed mitigation strategy]                                   │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Owner  │ [Name, Role]                                                     │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Status │ ⬜ Identified  ⬜ Active  ⬜ Mitigated  ⬜ Occurred  ⬜ Closed     │
├────────┼──────────────────────────────────────────────────────────────────┤
│ Review Date │ [DATE]                                                      │
└────────┴──────────────────────────────────────────────────────────────────┘

[Repeat for each risk]

══════════════════════════════════════════════════════════════════════════════
```

---

## 13.15 TRANSITION TO EXECUTE PHASE

### 13.15.1 Handoff Checklist

Before starting the EXECUTE phase, confirm:

| Item | Status | Notes |
|------|--------|-------|
| Implementation Roadmap approved | ⬜ | |
| Business Case approved | ⬜ | |
| Phase definitions complete | ⬜ | |
| Resource plan approved | ⬜ | |
| Risk register established | ⬜ | |
| Governance framework defined | ⬜ | |
| Budget allocated for Phase 1 | ⬜ | |
| Project team identified | ⬜ | |
| PLAN Summary signed | ⬜ | |

### 13.15.2 What Happens in EXECUTE Phase

The EXECUTE phase will:

1. **Mobilize Resources** based on resource plan
2. **Establish Project Governance** per framework
3. **Execute Phase 1** initiatives
4. **Monitor Progress** against baseline
5. **Conduct Gate Reviews** at defined checkpoints
6. **Manage Changes** through change control
7. **Realize Benefits** through adoption

### 13.15.3 Key Inputs for EXECUTE Phase

| Document | Purpose | Critical Sections |
|----------|---------|-------------------|
| Implementation Roadmap | Execution guide | All phases |
| Business Case | Benefit tracking | Benefits, metrics |
| Phase Definitions | Phase execution | All phases |
| Resource Plan | Staffing | All phases |
| Risk Register | Risk management | All risks |
| Governance Framework | Decision making | Gates, criteria |

### 13.15.4 PLAN Phase Completion

**Phase Completion Criteria:**

| Criterion | Evidence |
|-----------|----------|
| Implementation approach defined | Documented rationale |
| Initiatives sequenced | Sequence document |
| Phases and milestones defined | Phase definitions |
| Resources estimated | Resource plan |
| Business case complete | Approved business case |
| Risks documented | Risk register |
| Roadmap created | Visual roadmap |
| Approval obtained | Signed approval |

---


═══════════════════════════════════════════════════════════════════════════════
# PART V: EXECUTE & GOVERN (Section 14)
═══════════════════════════════════════════════════════════════════════════════


### Section 14: EXECUTE & GOVERN Phase Guide
- [14.1 Phase Overview](#141-phase-overview)
- [14.2 EXECUTE & GOVERN Process Flow](#142-execute--govern-process-flow)
- [14.3 EXECUTE Activities](#143-execute-activities)
- [14.4 ENGAGE Activities](#144-engage-activities)
- [14.5 GOVERN Activities](#145-govern-activities)
- [14.6 IMPROVE Activities](#146-improve-activities)
- [14.7 EA Services Catalog](#147-ea-services-catalog)
- [14.8 Governance Framework Summary](#148-governance-framework-summary)
- [14.9 Architecture Compliance Process](#149-architecture-compliance-process)
- [14.10 Dispensation Process](#1410-dispensation-process)
- [14.11 Continuous Improvement Cycle](#1411-continuous-improvement-cycle)
- [14.12 EA Effectiveness Metrics](#1412-ea-effectiveness-metrics)
- [14.13 EXECUTE & GOVERN Deliverables](#1413-execute--govern-deliverables)
- [14.14 Cycle Completion and Refresh](#1414-cycle-completion-and-refresh)
- [14.15 EXECUTE & GOVERN Templates](#1415-execute--govern-templates)

### Appendix: EXECUTE & GOVERN Quick Reference
- [Appendix A: EXECUTE & GOVERN Quick Reference Card](#appendix-a-execute--govern-quick-reference-card)
- [Appendix B: Architecture Board Operating Guide](#appendix-b-architecture-board-operating-guide)
- [Appendix C: Compliance Assessment Quick Guide](#appendix-c-compliance-assessment-quick-guide)
- [Appendix D: Dispensation Decision Framework](#appendix-d-dispensation-decision-framework)
- [Appendix E: EA Metrics Quick Reference](#appendix-e-ea-metrics-quick-reference)

---

## SECTION 14: EXECUTE & GOVERN PHASE GUIDE

---

## 14.1 Phase Overview

### 14.1.1 Purpose

The EXECUTE & GOVERN phase represents the continuous operational stage of the Enterprise Architecture (EA) program where planning translates into action, and governance ensures sustained alignment and compliance. This phase covers the ongoing activities required to implement, engage, monitor, and govern the enterprise architecture throughout the organization's digital transformation journey.

Unlike the time-bounded planning phases (DISCOVER, ASSESS, ADAPT, PLAN), EXECUTE & GOVERN is a perpetual cycle that maintains architectural integrity while enabling organizational change and innovation.

### 14.1.2 Transition from PLAN Phase

The EXECUTE & GOVERN phase begins when the PLAN phase produces an approved implementation roadmap. The handoff includes:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PLAN → EXECUTE & GOVERN TRANSITION                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  FROM PLAN PHASE:                   TO EXECUTE & GOVERN PHASE:              │
│  ─────────────────                  ─────────────────────────               │
│  ✓ Approved Roadmap                 → Project execution starts              │
│  ✓ Sequenced Initiatives            → Initiative delivery begins            │
│  ✓ Business Case                    → Benefits tracking activates           │
│  ✓ Resource Plan                    → Team mobilization                     │
│  ✓ Governance Structure             → Governance operation begins           │
│  ✓ Risk Register                    → Risk monitoring activates             │
│                                                                              │
│  TRANSITION CHECKLIST:                                                       │
│  [ ] EA Board established and operational                                    │
│  [ ] EA Services available to projects                                       │
│  [ ] Compliance review process ready                                         │
│  [ ] Dispensation process documented                                         │
│  [ ] Metrics collection mechanisms in place                                  │
│  [ ] Communication channels established                                      │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 14.1.3 Phase Objectives

The EXECUTE & GOVERN phase aims to achieve the following objectives:

| # | Objective | Description |
|---|-----------|-------------|
| 1 | **Implement Architecture** | Execute the architecture roadmap through projects and initiatives |
| 2 | **Engage Stakeholders** | Provide architectural guidance and support to projects and business units |
| 3 | **Ensure Compliance** | Monitor and enforce adherence to architecture standards and principles |
| 4 | **Manage Exceptions** | Handle dispensation requests when deviations are necessary |
| 5 | **Enable Improvement** | Capture lessons learned and evolve the architecture practice |

### 14.1.4 Duration and Scope

**Duration:** Ongoing (multi-year continuous operation)

**Cycle Cadence:**

| Cadence | Activities |
|---------|-----------|
| **Daily** | Project engagement, consultation requests, issue resolution |
| **Weekly** | Status reviews, progress tracking, issue management |
| **Monthly** | Architecture Board meetings, compliance reporting, KPI dashboards |
| **Quarterly** | KPI review, framework updates, stakeholder feedback analysis |
| **Annual** | Comprehensive EA health assessment, roadmap refresh, cycle restart evaluation |

### 14.1.5 Key Participants

| Participant | Role in Phase |
|-------------|---------------|
| **Chief Enterprise Architect** | Lead EA practice, drive cross-domain integration, chair governance activities |
| **Domain Architects** | Provide domain expertise, conduct reviews, update artifacts |
| **EA Office/Team** | Lead engagement, conduct reviews, monitor compliance, drive improvements |
| **Projects/Programs** | Execute implementations, request support, comply with standards |
| **IT Departments** | Implement solutions, follow architectural guidance |
| **Business Units** | Define requirements, validate solutions, adopt changes |
| **EA Board** | Make architectural decisions, approve exceptions, oversee governance |
| **Digital Transformation Committee** | Provide strategic direction, resolve escalations |

### 14.1.6 Four Activity Streams

EXECUTE & GOVERN operates through four interconnected activity streams:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      FOUR ACTIVITY STREAMS                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────────┐     ┌─────────────────────┐                        │
│  │      EXECUTE        │     │       ENGAGE        │                        │
│  │                     │     │                     │                        │
│  │  Implementation of  │     │  Stakeholder        │                        │
│  │  architecture       │     │  interaction and    │                        │
│  │  through projects   │     │  EA service         │                        │
│  │  and initiatives    │     │  delivery           │                        │
│  └─────────────────────┘     └─────────────────────┘                        │
│                                                                              │
│  ┌─────────────────────┐     ┌─────────────────────┐                        │
│  │      GOVERN         │     │      IMPROVE        │                        │
│  │                     │     │                     │                        │
│  │  Compliance         │     │  Continuous         │                        │
│  │  monitoring and     │     │  improvement of     │                        │
│  │  exception          │     │  EA practice and    │                        │
│  │  management         │     │  artifacts          │                        │
│  └─────────────────────┘     └─────────────────────┘                        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 14.1.7 Inputs from PLAN Phase

| Input | Source | Use |
|-------|--------|-----|
| Approved Architecture Roadmap | PLAN Phase | Guide implementation sequencing |
| Sequenced Initiatives | PLAN Phase | Define project priorities |
| Business Case | PLAN Phase | Track benefits realization |
| Resource Plan | PLAN Phase | Allocate EA team capacity |
| Risk Register | PLAN Phase | Monitor and mitigate risks |
| Governance Charter | PLAN Phase | Establish governance operations |
| TO-BE Architecture | ADAPT Phase | Define compliance targets |
| Reference Architecture | DISCOVER Phase | Provide standards and patterns |

### 14.1.8 Key Outputs

| Output | Description | Frequency |
|--------|-------------|-----------|
| Implemented Architecture | Solutions aligned with target state | Continuous |
| Architecture Compliance Reports | Assessment of solution alignment | Per project milestone |
| Dispensation Decisions | Approved deviations with rationale | As needed |
| Updated Reference Architecture | Evolved standards and patterns | Quarterly |
| Lessons Learned | Insights from implementations | Per project, consolidated quarterly |
| EA Effectiveness Metrics | KPIs and health indicators | Monthly |
| Architecture Decision Records | Documented decisions and rationale | As decisions made |

---

## 14.2 EXECUTE & GOVERN Process Flow

### 14.2.1 Continuous Cycle Overview

The EXECUTE & GOVERN phase operates as a continuous cycle with four interconnected activity streams that work together to ensure architectural alignment throughout implementation.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                  EXECUTE & GOVERN CONTINUOUS CYCLE                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                        ┌───────────────────────┐                             │
│                        │    PLAN Phase         │                             │
│                        │    (Roadmap Input)    │                             │
│                        └───────────┬───────────┘                             │
│                                    │                                         │
│                                    ▼                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                    EXECUTE & GOVERN CYCLE                            │    │
│  │                                                                      │    │
│  │   ┌──────────────────┐       ┌──────────────────┐                   │    │
│  │   │     EXECUTE      │◄─────►│      ENGAGE      │                   │    │
│  │   │                  │       │                  │                   │    │
│  │   │ ○ Project        │       │ ○ Consultation   │                   │    │
│  │   │   Support        │       │ ○ Design Support │                   │    │
│  │   │ ○ Implementation │       │ ○ Guidance &     │                   │    │
│  │   │   Monitoring     │       │   Advisory       │                   │    │
│  │   │ ○ DPI            │       │ ○ Procurement    │                   │    │
│  │   │   Integration    │       │   Support        │                   │    │
│  │   │ ○ Deployment     │       │                  │                   │    │
│  │   └────────┬─────────┘       └────────┬─────────┘                   │    │
│  │            │                          │                              │    │
│  │            │          ┌───────────────┘                              │    │
│  │            │          │                                              │    │
│  │            ▼          ▼                                              │    │
│  │   ┌──────────────────────┐                                          │    │
│  │   │       GOVERN         │                                          │    │
│  │   │                      │                                          │    │
│  │   │ ○ Review & Approve   │                                          │    │
│  │   │ ○ Compliance Monitor │                                          │    │
│  │   │ ○ Exception Mgmt     │                                          │    │
│  │   │ ○ Architecture Board │                                          │    │
│  │   └──────────┬───────────┘                                          │    │
│  │              │                                                       │    │
│  │              ▼                                                       │    │
│  │   ┌──────────────────────┐                                          │    │
│  │   │       IMPROVE        │                                          │    │
│  │   │                      │                                          │    │
│  │   │ ○ Lessons Learned    │                                          │    │
│  │   │ ○ RA Updates         │                                          │    │
│  │   │ ○ Framework Evolve   │                                          │    │
│  │   │ ○ KPI Tracking       │                                          │    │
│  │   └──────────────────────┘                                          │    │
│  │                                                                      │    │
│  └──────────────────────────────────────────────────────────────────────┘    │
│                                    │                                         │
│                                    ▼                                         │
│                        ┌───────────────────────┐                             │
│                        │   Cycle Refresh?      │──► DISCOVER (Major Change)  │
│                        └───────────────────────┘                             │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 14.2.2 Activity Stream Interactions

The four activity streams interact continuously:

| From Stream | To Stream | Interaction |
|-------------|-----------|-------------|
| EXECUTE | ENGAGE | Projects request EA consultation and support |
| ENGAGE | EXECUTE | EA provides guidance enabling project progress |
| EXECUTE | GOVERN | Solutions submitted for compliance review |
| GOVERN | EXECUTE | Compliance decisions enable or redirect implementation |
| ENGAGE | GOVERN | Design reviews identify governance needs |
| GOVERN | ENGAGE | Governance decisions inform consultation guidance |
| All Streams | IMPROVE | Feed lessons learned and improvement opportunities |
| IMPROVE | All Streams | Updated practices, standards, and capabilities |

### 14.2.3 Cadence Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         GOVERNANCE CADENCE                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  DAILY                                                                       │
│  ├── Project consultations and ad-hoc support                               │
│  ├── Issue triage and assignment                                            │
│  └── Service request processing                                             │
│                                                                              │
│  WEEKLY                                                                      │
│  ├── EA team coordination meeting                                           │
│  ├── Project status review                                                  │
│  ├── Compliance review preparation                                          │
│  └── Issue escalation review                                                │
│                                                                              │
│  MONTHLY                                                                     │
│  ├── Architecture Board meeting                                             │
│  ├── Compliance status reporting                                            │
│  ├── KPI dashboard update                                                   │
│  ├── Dispensation review                                                    │
│  └── Stakeholder communication                                              │
│                                                                              │
│  QUARTERLY                                                                   │
│  ├── Framework maintenance review                                           │
│  ├── Reference architecture updates                                         │
│  ├── Lessons learned consolidation                                          │
│  ├── KPI trend analysis                                                     │
│  └── Stakeholder satisfaction survey                                        │
│                                                                              │
│  ANNUAL                                                                      │
│  ├── EA health assessment                                                   │
│  ├── Roadmap refresh                                                        │
│  ├── Governance effectiveness review                                        │
│  ├── Cycle restart evaluation                                               │
│  └── Strategic alignment verification                                       │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 14.3 EXECUTE Activities

The EXECUTE stream encompasses activities that support and monitor the actual implementation of solutions aligned with the target architecture.

### 14.3.1 Project Execution Support

**Purpose:** Provide architectural expertise to project teams during solution development and implementation.

**Activities:**

| Activity | Description | EA Role |
|----------|-------------|---------|
| **Solution Architecture** | Develop detailed solution designs aligned with reference architecture | Lead or Review |
| **Technical Design Review** | Review technical designs for architecture compliance | Review & Approve |
| **Implementation Guidance** | Provide technical direction during build phase | Advisory |
| **DPI Integration Support** | Guide integration with Digital Public Infrastructure building blocks | Lead or Support |
| **Standards Application** | Ensure correct application of architecture standards | Monitor & Guide |

**Key Deliverables:**

| Deliverable | Description | Responsibility |
|-------------|-------------|----------------|
| Solution Design Document (SDD) | Detailed technical architecture for the solution | Project Team with EA Review |
| Technical Architecture Specifications | Infrastructure and platform specifications | EA Office |
| Integration Specifications | API contracts and integration patterns | Domain Architects |
| Implementation Guidelines | Coding standards and development practices | EA Office |

**Decision Point DP7: Solution Design Approval**

| Decision | Criteria | Next Step |
|----------|----------|-----------|
| **Approved** | Compliant with RA, meets requirements | Proceed to implementation |
| **Approved with Conditions** | Minor deviations, acceptable risk | Proceed with documented conditions |
| **Requires Revision** | Significant gaps or non-compliance | Return to design phase |
| **Requires Dispensation** | Business need conflicts with standards | Initiate dispensation process |

### 14.3.2 Implementation Monitoring

**Purpose:** Track progress of architecture-aligned projects and ensure roadmap milestones are achieved.

**Activities:**

| Activity | Frequency | Responsibility |
|----------|-----------|----------------|
| Track Roadmap Progress | Weekly | EA Office |
| Monitor Milestone Achievement | Per project schedule | EA Office / PMO |
| Report to Governance | Monthly | Chief EA |
| Manage Deviations | As identified | Chief EA with EA Board |
| Update Architecture Artifacts | As changes occur | Domain Architects |

**Monitoring Framework:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                  IMPLEMENTATION MONITORING FRAMEWORK                         │
├─────────────────────────┬──────────────────────┬────────────────────────────┤
│       SCHEDULE          │       SCOPE          │       COMPLIANCE           │
├─────────────────────────┼──────────────────────┼────────────────────────────┤
│                         │                      │                            │
│ ○ Milestone tracking    │ ○ Requirements       │ ○ Standards adherence      │
│ ○ Timeline variance     │   coverage           │ ○ Principle compliance     │
│ ○ Dependency            │ ○ Feature            │ ○ Pattern usage            │
│   management            │   completeness       │ ○ Integration alignment    │
│ ○ Resource utilization  │ ○ Change management  │ ○ Security compliance      │
│ ○ Critical path         │ ○ Scope creep        │ ○ DPI alignment            │
│   analysis              │   monitoring         │                            │
│                         │                      │                            │
└─────────────────────────┴──────────────────────┴────────────────────────────┘
```

**Reporting Outputs:**

| Report | Audience | Frequency |
|--------|----------|-----------|
| Weekly Status Dashboard | EA Team, Project Managers | Weekly |
| Monthly Progress Report | EA Board | Monthly |
| Quarterly Portfolio Health Assessment | DT Committee | Quarterly |

### 14.3.3 DPI Integration Execution

**Purpose:** Ensure smooth integration with national Digital Public Infrastructure and GovStack Building Blocks.

**Integration Activities:**

| Activity | Description | Timing |
|----------|-------------|--------|
| **Platform Assessment** | Verify DPI platform readiness for integration | Pre-development |
| **Building Block Selection** | Identify appropriate BB components for solution | Design phase |
| **Integration Design** | Define integration patterns and APIs | Design phase |
| **Integration Testing** | Validate connectivity and data exchange | Testing phase |
| **Go-Live Coordination** | Coordinate with DPI providers for production | Pre-deployment |

**DPI Integration Checklist:**

| Domain | Verification Items |
|--------|-------------------|
| **Identity (BB-ID)** | [ ] SSO integration configured, [ ] Authentication flows tested, [ ] Role mapping verified |
| **Payments (BB-PAY)** | [ ] Payment gateway connected, [ ] Transaction flows validated, [ ] Reconciliation tested |
| **Data Exchange (BB-DE)** | [ ] API contracts finalized, [ ] Data formats validated, [ ] Security verified |
| **Messaging (BB-MSG)** | [ ] Notification channels configured, [ ] Templates approved, [ ] Delivery tested |
| **Registry (BB-REG)** | [ ] Registry connections established, [ ] Data synchronization verified |

### 14.3.4 Deployment and Go-Live

**Purpose:** Ensure smooth transition from development to production with architectural integrity maintained.

**Deployment Activities:**

| Activity | Description | Timing |
|----------|-------------|--------|
| **Go-Live Readiness Assessment** | Verify solution meets all deployment criteria | Pre-deployment |
| **Architecture Compliance Verification** | Final compliance check before production | Pre-deployment |
| **Cutover Planning Support** | Review and advise on transition plans | Pre-deployment |
| **Post-Deployment Validation** | Confirm solution operates as designed | Post-deployment |
| **EA Repository Update** | Document deployed solution in repository | Post-deployment |

**Go-Live Readiness Checklist:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       GO-LIVE READINESS CHECKLIST                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  COMPLIANCE                                                                  │
│  [ ] All compliance findings resolved or accepted                           │
│  [ ] Architecture sign-off obtained                                         │
│  [ ] Security assessment complete and approved                              │
│                                                                              │
│  INTEGRATION                                                                 │
│  [ ] All integration points validated                                       │
│  [ ] DPI connections tested in production-like environment                  │
│  [ ] End-to-end flows verified                                              │
│                                                                              │
│  PERFORMANCE                                                                 │
│  [ ] Performance requirements verified                                      │
│  [ ] Load testing completed                                                 │
│  [ ] Capacity planning validated                                            │
│                                                                              │
│  DATA                                                                        │
│  [ ] Data migration validated                                               │
│  [ ] Data quality checks passed                                             │
│  [ ] Data ownership confirmed                                               │
│                                                                              │
│  OPERATIONS                                                                  │
│  [ ] Rollback procedures documented and tested                              │
│  [ ] Operations handover complete                                           │
│  [ ] Monitoring and alerting configured                                     │
│  [ ] Support processes established                                          │
│                                                                              │
│  DOCUMENTATION                                                               │
│  [ ] EA repository updated                                                  │
│  [ ] Technical documentation complete                                       │
│  [ ] User documentation available                                           │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 14.4 ENGAGE Activities

The ENGAGE stream defines how the EA Office interacts with projects and stakeholders throughout the delivery lifecycle.

### 14.4.1 EA Consultation Services

**Purpose:** Provide responsive architectural guidance to projects and departments on demand.

**Service Request Process:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    EA SERVICE REQUEST PROCESS                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐              │
│  │ Submit   │───►│ Triage   │───►│ Assign   │───►│ Deliver  │              │
│  │ Request  │    │ & Accept │    │ Architect│    │ Service  │              │
│  └──────────┘    └──────────┘    └──────────┘    └──────────┘              │
│       │               │               │               │                     │
│       │               │               │               ▼                     │
│       │               │               │         ┌──────────┐               │
│       │               │               │         │ Collect  │               │
│       │               │               │         │ Feedback │               │
│       │               │               │         └──────────┘               │
│       │               │               │                                     │
│       ▼               ▼               ▼                                     │
│   Customer        EA Office      Chief EA                                   │
│   completes       reviews        assigns                                    │
│   request         within         based on                                   │
│   form            1 day          domain                                     │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Consultation Services:**

| Service | Description | Request Mechanism |
|---------|-------------|-------------------|
| Technical Architecture Consultation | Advice on solution design, patterns, and best practices | Service Request Form |
| Domain Architecture Guidance | Specialized guidance for Business, Application, Data, or Technology domains | Service Request Form |
| Integration Pattern Advice | Guidance on system integration approaches | Service Request Form |
| Technology Selection Support | Evaluation of technology options against standards | Service Request Form |
| Building Block Selection | Guidance on GovStack BB selection and configuration | Service Request Form |

**Response Time Expectations:**

| Request Type | Initial Response | Service Delivery |
|--------------|------------------|------------------|
| **Urgent** (Production Issue) | 4 hours | Same day |
| **High Priority** | 1 business day | 1 week |
| **Standard** | 2 business days | 2 weeks |
| **Low Priority** | 5 business days | 4 weeks |

### 14.4.2 Design Support

**Purpose:** Provide hands-on support for solution design and technical architecture development.

**Design Support Services:**

| Service | Description | Trigger |
|---------|-------------|---------|
| Solution Architecture Development | Create or review detailed solution designs | Project Initiation |
| Solution Architecture Review | Assess solution designs for compliance | Design Completion |
| Technical Design Review | Review technical specifications | Pre-Build |
| Security Architecture Review | Assess security architecture alignment | Design Phase |
| Data Architecture Review | Validate data models and governance | Design Phase |

**Design Support Process:**

| Step | Activity | Responsibility |
|------|----------|----------------|
| 1 | Understand solution requirements | Domain Architect |
| 2 | Review against reference architecture | Domain Architect |
| 3 | Identify alignment gaps | Domain Architect |
| 4 | Recommend design adjustments | Domain Architect |
| 5 | Document design decisions | Project Team |
| 6 | Sign off on design | Chief EA |

### 14.4.3 Guidance and Advisory

**Purpose:** Provide ongoing architectural guidance through standards interpretation, best practice sharing, and training.

**Advisory Activities:**

| Activity | Description | Audience |
|----------|-------------|----------|
| **Architecture Principles Interpretation** | Clarify application of principles to specific situations | Project Teams |
| **Standards Guidance** | Explain technology standards and when they apply | IT Departments |
| **Best Practice Sharing** | Share patterns and approaches from successful implementations | Organization-wide |
| **Training and Awareness** | Build architectural capability across the organization | IT and Business |
| **Architecture Office Hours** | Regular availability for ad-hoc questions | Anyone |

**Knowledge Transfer Mechanisms:**

| Mechanism | Description | Frequency |
|-----------|-------------|-----------|
| Architecture Community of Practice | Regular forum for sharing and learning | Monthly |
| Architecture Knowledge Base | Repository of patterns, decisions, FAQs | Continuously updated |
| Architecture Newsletter | Updates on standards, changes, success stories | Monthly |
| Training Sessions | Formal training on EA concepts and tools | Quarterly |
| Lunch-and-Learn Sessions | Informal knowledge sharing sessions | Bi-weekly |

### 14.4.4 Procurement Support

**Purpose:** Ensure procurement processes include appropriate architectural requirements and evaluation criteria.

**Procurement Support Activities:**

| Activity | Description | Timing |
|----------|-------------|--------|
| **RFP Architecture Requirements** | Define technical requirements for RFPs | RFP Development |
| **Evaluation Criteria Development** | Create architecture-aligned evaluation criteria | RFP Development |
| **Vendor Q&A Support** | Provide technical responses to vendor questions | RFP Process |
| **Proposal Evaluation** | Assess vendor proposals against architecture | Bid Evaluation |
| **Contract Architecture Provisions** | Define architecture requirements for contracts | Contract Negotiation |

**Procurement Engagement Points:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    EA PROCUREMENT ENGAGEMENT                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  NEED        RFP          VENDOR        BID           CONTRACT              │
│  IDENTIFIED  DEVELOPMENT  Q&A           EVALUATION    AWARD                 │
│     │            │           │              │            │                  │
│     ▼            ▼           ▼              ▼            ▼                  │
│  ┌──────┐    ┌──────┐    ┌──────┐      ┌──────┐    ┌──────┐               │
│  │ EA   │    │ EA   │    │ EA   │      │ EA   │    │ EA   │               │
│  │Review│    │Input │    │Support│      │Assess│    │Review│               │
│  └──────┘    └──────┘    └──────┘      └──────┘    └──────┘               │
│     │            │           │              │            │                  │
│     │            │           │              │            │                  │
│     ▼            ▼           ▼              ▼            ▼                  │
│  Alignment    Technical    Technical    Technical   Architecture           │
│  Check        Requirements Responses   Evaluation  Contract                │
│               in RFP                   Report      Clauses                  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 14.4.5 EA Engagement Touchpoints

The EA Office engages with projects at defined touchpoints throughout the IT project delivery lifecycle:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       EA ENGAGEMENT MODEL                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  IDEA        INITIATIVE    PROJECT      IMPLEMENTATION   RELEASE            │
│  │              │             │              │              │                │
│  ▼              ▼             ▼              ▼              ▼                │
│  ┌────────┐  ┌────────┐   ┌────────┐    ┌────────┐    ┌────────┐           │
│  │Research│  │Strategy│   │Gap     │    │IT      │    │Compliance│          │
│  │        │  │        │   │Analysis│    │Landscape│    │         │          │
│  └────────┘  └────────┘   └────────┘    └────────┘    └────────┘           │
│      │           │            │              │              │               │
│      ▼           ▼            ▼              ▼              ▼               │
│  Opportunity  Budget      Project       Solution     Compliance            │
│  Evaluation   Recommend   Alignment     Design       Report                │
│  Report       Report      Report        Report                             │
│                                                                              │
│  ───────────────────────────────────────────────────────────────────────    │
│  EA Activities:                                                             │
│  Strategic    Budgeting   Procurement   Design       Delivery              │
│  Planning                                                                   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Engagement by Project Stage:**

| Stage | Engagement Type | EA Activity | Output |
|-------|-----------------|-------------|--------|
| **Idea** | Mandatory | Evaluate opportunity for alignment with EA strategy | Opportunity Evaluation Report |
| **Initiative** | Mandatory | Review budget requests against IT strategy | Budget Recommendations Report |
| **Project** | Mandatory | Review RFP/scope for RA alignment | Project Alignment Review Report |
| **Implementation** | Mandatory | Review solution design | Solution Design Alignment Report |
| **Release** | Mandatory | Verify target architecture compliance | Compliance Report |
| **Operate** | As Needed | Support operational issues | Technical Recommendations |

### 14.4.6 Engagement Levels

Projects are assigned an engagement level based on their size, complexity, and risk profile:

| Level | Criteria | EA Involvement | Touchpoints |
|-------|----------|----------------|-------------|
| **Light** | Small project, low budget (<$100K), low risk, uses standard components | Advisory only, minimal documentation | Initiation, Design |
| **Standard** | Medium project, moderate budget ($100K-$1M), some integration | Review at key stages, standard documentation | All standard touchpoints |
| **Comprehensive** | Large project, high budget (>$1M), complex integration, high risk | Full engagement throughout, detailed documentation | All touchpoints + additional reviews |

**Level Assignment Matrix:**

| Factor | Light (1 pt) | Standard (2 pts) | Comprehensive (3 pts) |
|--------|--------------|------------------|----------------------|
| Budget | <$100K | $100K-$1M | >$1M |
| Duration | <3 months | 3-12 months | >12 months |
| Integration | None/Minimal | Moderate (2-3 systems) | Complex (4+ systems) |
| Data Sensitivity | Low | Medium | High |
| User Impact | <100 users | 100-1000 users | >1000 users |
| DPI Integration | None | Single BB | Multiple BBs |

**Total Score → Level:** 6-10 = Light | 11-14 = Standard | 15-18 = Comprehensive

### 14.4.7 Escalation Process

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       ESCALATION PROCESS                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Level 1: Domain Architect                                                  │
│  ─────────────────────────                                                  │
│  • Initial contact for all requests                                         │
│  • Resolves domain-specific issues                                          │
│  • Escalates if cross-domain or requires authority                          │
│            │                                                                 │
│            ▼ (if unresolved within SLA or requires authority)               │
│                                                                              │
│  Level 2: Chief Enterprise Architect                                        │
│  ────────────────────────────────────                                       │
│  • Cross-domain coordination                                                │
│  • Standards interpretation                                                 │
│  • Minor dispensation decisions                                             │
│  • Escalates if major impact or stakeholder disagreement                    │
│            │                                                                 │
│            ▼ (if requires decision authority or major impact)               │
│                                                                              │
│  Level 3: EA Board                                                          │
│  ──────────────────                                                         │
│  • Major architectural decisions                                            │
│  • Significant dispensations                                                │
│  • Standards approval                                                       │
│  • Stakeholder conflict resolution                                          │
│            │                                                                 │
│            ▼ (if strategic impact or executive decision needed)             │
│                                                                              │
│  Level 4: Digital Transformation Committee                                  │
│  ──────────────────────────────────────────                                 │
│  • Strategic direction                                                      │
│  • Enterprise-wide impact decisions                                         │
│  • Budget and resource conflicts                                            │
│  • Policy exceptions                                                        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 14.5 GOVERN Activities

The GOVERN stream ensures that implementations comply with established architecture standards and that deviations are properly managed.

### 14.5.1 Architecture Review and Approval

**Purpose:** Conduct formal reviews of proposed solutions to ensure alignment with target architecture and principles.

**Review Process Flow:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│               ARCHITECTURE COMPLIANCE REVIEW PROCESS                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌───────────┐   ┌───────────┐   ┌───────────┐   ┌───────────┐             │
│  │  Prepare  │──►│  Conduct  │──►│  Develop  │──►│  Review & │             │
│  │ Assessment│   │ Compliance│   │ Compliance│   │  Validate │             │
│  │           │   │   Check   │   │  Report   │   │  Findings │             │
│  └───────────┘   └───────────┘   └───────────┘   └─────┬─────┘             │
│       │                                                 │                   │
│       ▼                                                 ▼                   │
│  Architecture                                    ┌───────────┐             │
│  Checklist                                       │ COMPLIANT │──► Proceed  │
│                                                  └─────┬─────┘             │
│                                                        │                    │
│                                                  ┌─────▼─────┐             │
│                                                  │   NON-    │             │
│                                                  │ COMPLIANT │             │
│                                                  └─────┬─────┘             │
│                                                        │                    │
│                         ┌──────────────────────────────┼──────────┐        │
│                         │                              │          │        │
│                         ▼                              ▼          ▼        │
│                   ┌──────────┐                  ┌──────────┐ ┌────────┐   │
│                   │  Minor   │                  │  Major   │ │ Reject │   │
│                   │ Findings │                  │ Findings │ │        │   │
│                   └────┬─────┘                  └────┬─────┘ └────────┘   │
│                        │                             │                     │
│                        ▼                             ▼                     │
│                   Proceed with                  Dispensation               │
│                   Conditions                    Process                    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Review Activities:**

| Step | Responsibility | Activity |
|------|----------------|----------|
| 1 | Domain Architects | Customize architecture checklist for specific solution |
| 2 | Domain Architects | Conduct compliance check meetings with stakeholders |
| 3 | Domain Architects | Develop compliance report with findings |
| 4 | Chief EA | Review and approve compliance report |
| 5 | Stakeholders | Validate findings and provide clarification |
| 6 | Chief EA | Publish results and archive decision |
| 7 | Chief EA | Trigger dispensation if needed |

**Compliance Review Scope:**

| Domain | Review Focus |
|--------|--------------|
| **Business Architecture** | Process alignment, capability mapping, organizational fit |
| **Application Architecture** | Component reuse, integration patterns, API standards, BB usage |
| **Data Architecture** | Data models, ownership, quality requirements, MDM alignment |
| **Technology Architecture** | Infrastructure standards, security requirements, cloud policy |
| **Security Architecture** | Security controls, identity management, data protection |
| **DPI Alignment** | Building Block integration, national platform compliance |

**Review Triggers:**

| Trigger | Review Type | Timing |
|---------|-------------|--------|
| New Project Initiation | Full Compliance Review | Project Start |
| Major Change Request | Impact-Based Review | Before Change |
| Solution Design Complete | Design Compliance | Before Implementation |
| Implementation Complete | Delivery Compliance | Before Go-Live |
| Scheduled Audit | Periodic Assessment | Quarterly/Annual |

### 14.5.2 Compliance Monitoring

**Purpose:** Track ongoing adherence to architecture standards across the portfolio.

**Monitoring Activities:**

| Activity | Frequency | Responsibility |
|----------|-----------|----------------|
| Project Compliance Reviews | Per project milestone | Domain Architects |
| Portfolio Compliance Assessment | Quarterly | Chief EA |
| Standards Adherence Audit | Annual | EA Office |
| Technical Debt Tracking | Monthly | Domain Architects |
| Compliance Metrics Reporting | Monthly | EA Office |

**Compliance Status Definitions:**

| Status | Definition | Action Required |
|--------|------------|-----------------|
| **Fully Compliant** | Meets all standards and principles | None |
| **Conditionally Compliant** | Minor deviations accepted with conditions | Monitor conditions |
| **Dispensation Granted** | Approved deviation with documented rationale | Track expiry |
| **Non-Compliant** | Does not meet standards, not approved | Remediation required |

**Compliance Dashboard Metrics:**

| Metric | Description | Target |
|--------|-------------|--------|
| Compliance Rate by Domain | % of solutions compliant per domain | >90% |
| Compliance Rate by Project | % of projects meeting standards | >85% |
| Dispensation Volume | Number of active dispensations | Trending down |
| Technical Debt | Volume of accumulated non-compliance | Decreasing |
| Standards Adoption | Rate of new standards adoption | >70% in 6 months |

### 14.5.3 Exception Management (Dispensation)

**Purpose:** Handle requests for deviation from established architecture standards when business needs cannot be met through compliant approaches.

**When Dispensation is Needed:**

| Situation | Example |
|-----------|---------|
| Technology constraint | Required platform doesn't support approved integration pattern |
| Time pressure | Compliant approach would significantly delay critical deadline |
| Cost constraint | Compliant solution exceeds available budget |
| Legacy integration | Must integrate with legacy system that doesn't follow standards |
| Vendor limitation | Selected vendor solution uses non-standard approach |
| Business priority | Business benefit outweighs compliance cost |

**Dispensation Process Flow:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       DISPENSATION MANAGEMENT                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌────────────────┐                                                         │
│  │  Dispensation  │                                                         │
│  │    Request     │                                                         │
│  └───────┬────────┘                                                         │
│          │                                                                   │
│          ▼                                                                   │
│  ┌────────────────┐      Valid?      ┌────────────────┐                    │
│  │    Analyze     │──────No────────►│     Close      │                    │
│  │    Request     │                  │    Request     │                    │
│  └───────┬────────┘                  └────────────────┘                    │
│          │ Yes                                                              │
│          ▼                                                                   │
│  ┌────────────────┐                                                         │
│  │    Define      │                                                         │
│  │  Alternatives  │                                                         │
│  └───────┬────────┘                                                         │
│          │                                                                   │
│          ▼                                                                   │
│  ┌────────────────┐                                                         │
│  │   Finalize     │                                                         │
│  │   Response     │                                                         │
│  └───────┬────────┘                                                         │
│          │                                                                   │
│          ▼                                                                   │
│  ┌────────────────┐   Agree?    ┌────────────────┐                         │
│  │  Stakeholder   │────No──────►│   EA Board     │                         │
│  │    Review      │             │   Decision     │                         │
│  └───────┬────────┘             └───────┬────────┘                         │
│          │ Yes                          │                                   │
│          │          ┌───────────────────┘                                   │
│          │          │                                                       │
│          ▼          ▼                                                       │
│  ┌───────────────────────────────────────────┐                             │
│  │              DECISION OUTCOME              │                             │
│  ├─────────────┬─────────────┬───────────────┤                             │
│  │   Reject    │ Minor Change│ Major Change  │                             │
│  │             │             │               │                             │
│  │   Close     │  Update     │   Full EA     │                             │
│  │  Request    │   ABBs      │  Development  │                             │
│  └─────────────┴─────────────┴───────────────┘                             │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Dispensation Request Requirements:**

| Element | Description |
|---------|-------------|
| **Business Justification** | Clear explanation of why deviation is necessary |
| **Technical Impact** | Analysis of affected architecture building blocks |
| **Risk Assessment** | Identified risks and mitigation strategies |
| **Duration** | Temporary or permanent; expiry date if temporary |
| **Alternatives Considered** | Documentation of compliant alternatives evaluated |
| **Remediation Plan** | Plan to return to compliance (if temporary) |

**Dispensation Authority Matrix:**

| Impact Level | Decision Authority | Escalation Path |
|--------------|-------------------|-----------------|
| **Minor** (single component) | Chief EA | EA Board |
| **Moderate** (multiple components) | EA Board | DT Committee |
| **Major** (enterprise-wide impact) | DT Committee | Executive Leadership |

**Dispensation Tracking:**

| Field | Description |
|-------|-------------|
| Dispensation ID | Unique identifier |
| Request Date | Date submitted |
| Requestor | Person/project requesting |
| Standard Deviated | Which standard or principle |
| Duration | Temporary/Permanent, expiry date |
| Approval Authority | Who approved |
| Conditions | Any conditions attached |
| Status | Active/Expired/Remediated |
| Review Date | Next review date |

### 14.5.4 Architecture Board Operation

**Purpose:** Provide governance oversight, make architectural decisions, and ensure alignment with organizational strategy.

**Board Composition:**

| Role | Type | Responsibility |
|------|------|----------------|
| Chief Information Officer | Chairman | Strategic direction, final authority |
| Chief Enterprise Architect | Secretariat | Agenda, documentation, execution |
| Business Solutions Director | Permanent Member | Application portfolio perspective |
| Digital Business Development Director | Permanent Member | Business transformation perspective |
| IT Infrastructure Director | Permanent Member | Technology and infrastructure perspective |
| Information Security Director | Permanent Member | Security and risk perspective |
| IT Planning Director | Permanent Member | Portfolio and planning perspective |
| Business Unit Representatives | Contributors | Business domain input as needed |

**Meeting Cadence:**

| Situation | Frequency |
|-----------|-----------|
| Normal operations | Monthly |
| Active project phases | Bi-weekly |
| Emergency decisions | Ad-hoc (within 48 hours) |

**Standard Agenda:**

| Agenda Item | Duration | Purpose |
|-------------|----------|---------|
| Previous Actions Review | 10 min | Track completion of prior decisions |
| Compliance Status Report | 15 min | Review portfolio compliance metrics |
| Dispensation Decisions | 20 min | Approve/reject pending dispensations |
| Architecture Change Requests | 20 min | Decide on proposed architecture changes |
| Project Reviews | 20 min | Review projects at key milestones |
| Standards/Policy Updates | 15 min | Approve new or updated standards |
| Strategic Discussion | 20 min | Discuss emerging issues and opportunities |

**Decision Types:**

| Category | Examples |
|----------|----------|
| Standards Approval | New technology standards, updated patterns |
| Dispensation Decisions | Deviations from standards |
| Project Approvals | Major project initiation, scope changes |
| Architecture Changes | Updates to target architecture |
| Policy Updates | Changes to governance policies |
| Resource Allocation | EA team assignments to major initiatives |

**Decision-Making Process:**

| Step | Activity | Responsibility |
|------|----------|----------------|
| 1 | Prepare decision package | Chief EA |
| 2 | Distribute materials in advance | Chief EA |
| 3 | Present recommendation | Relevant Architect |
| 4 | Discussion and questions | Board Members |
| 5 | Decision (consensus or vote) | Board |
| 6 | Document decision and rationale | Chief EA |
| 7 | Communicate decision | Chief EA |
| 8 | Track implementation | EA Office |

### 14.5.5 RACI Matrix for Governance Activities

**Solution Architecture Compliance Assessment:**

| Activity | Chief EA | Domain Architects | EA Board | Stakeholders |
|----------|----------|-------------------|----------|--------------|
| Customize Architecture Checklist | A/C | R | - | - |
| Conduct Compliance Check | A/C | R | - | C |
| Develop Compliance Report | A/C | R | - | C |
| Review Compliance Report | A/R | C | - | - |
| Validate Compliance Findings | R | R | - | A/R |
| Publish Results & Decisions | A/R | I | I | I |
| Trigger Dispensation Process | A/R | I | I | I |

**Architecture Change Request Management:**

| Activity | Chief EA | Domain Architects | EA Board | Stakeholders |
|----------|----------|-------------------|----------|--------------|
| Review & Analyze RFC | A/R | C | - | - |
| Close and Archive Request | A/R | - | I | I |
| Develop Impact Assessment Report | A/C | R | - | - |
| Review and Finalize Assessment | A/R | C | - | - |
| Review and Discuss Change (Board) | R | R | A/R | - |
| Develop Implementation Plan | A/C | R | - | I |
| Update Impacted ABBs | A/C | R | - | I/C |

**Dispensation Management:**

| Activity | Chief EA | Domain Architects | EA Board | Stakeholders |
|----------|----------|-------------------|----------|--------------|
| Analyze and Evaluate Request | A/R | C | - | - |
| Define Alternatives for Compliance | A/R | R | - | C |
| Finalize Dispensation Response | A/R | R | - | - |
| Review & Discuss Response (Stakeholders) | R | C | - | A/R |
| Review & Discuss Response (EA Board) | R | C | A/R | R |
| Produce Final Dispensation Response | A/R | R | I | I |
| Update Impacted ABBs | A/C | R | - | I/C |
| Update Dispensation Log | A/R | I | I | I |

**Legend:** R = Responsible, A = Accountable, C = Consulted, I = Informed

---

## 14.6 IMPROVE Activities

The IMPROVE stream captures feedback and lessons learned to continuously enhance the EA practice and reference architecture.

### 14.6.1 Lessons Learned Capture

**Purpose:** Systematically capture insights from project implementations to improve future architectural guidance.

**Lessons Learned Process:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      LESSONS LEARNED CYCLE                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌────────────┐    ┌────────────┐    ┌────────────┐                        │
│  │   Capture  │───►│   Analyze  │───►│ Categorize │                        │
│  │            │    │            │    │            │                        │
│  │ ○ Project  │    │ ○ Root     │    │ ○ Process  │                        │
│  │   Reviews  │    │   Cause    │    │ ○ Standard │                        │
│  │ ○ Feedback │    │ ○ Impact   │    │ ○ Template │                        │
│  │ ○ Incidents│    │ ○ Patterns │    │ ○ Guidance │                        │
│  └────────────┘    └────────────┘    └────────────┘                        │
│                                            │                                │
│                    ┌───────────────────────┘                                │
│                    │                                                        │
│                    ▼                                                        │
│  ┌────────────┐    ┌────────────┐    ┌────────────┐                        │
│  │  Validate  │◄───│   Action   │◄───│ Prioritize │                        │
│  │            │    │            │    │            │                        │
│  │ ○ Measure  │    │ ○ Update   │    │ ○ Value    │                        │
│  │   Results  │    │   Docs     │    │ ○ Effort   │                        │
│  │ ○ Feedback │    │ ○ Train    │    │ ○ Risk     │                        │
│  │ ○ Refine   │    │ ○ Publish  │    │            │                        │
│  └────────────┘    └────────────┘    └────────────┘                        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Capture Sources:**

| Source | Frequency | Responsibility |
|--------|-----------|----------------|
| Project Post-Implementation Reviews | Per project completion | Project Team + EA |
| Stakeholder Feedback Surveys | Quarterly | EA Office |
| Compliance Review Findings | Per review | Domain Architects |
| Incident Analysis | As incidents occur | EA Office |
| Industry Best Practices | Ongoing | Chief EA |
| Architecture Board Discussions | Monthly | Chief EA |

**Lessons Categories:**

| Category | Impact Area | Examples |
|----------|-------------|----------|
| Process Improvements | EA engagement, governance workflows | Review process too slow |
| Standards Updates | Technology standards, design patterns | Pattern not working as expected |
| Template Enhancements | Documentation templates, checklists | Missing checklist items |
| Guidance Refinements | Best practices, implementation guidance | Integration approach needs update |
| Tool Improvements | Repository, automation capabilities | Repository missing functionality |
| Training Needs | Knowledge gaps, skill development | Team needs more training |

**Lessons Learned Template:**

| Field | Description |
|-------|-------------|
| Lesson ID | Unique identifier |
| Project/Source | Where the lesson came from |
| Category | Process/Standard/Template/Guidance/Tool/Training |
| Description | What was learned |
| Root Cause | Why it happened |
| Impact | What was affected |
| Recommendation | What to do about it |
| Priority | High/Medium/Low |
| Action Owner | Who will address it |
| Status | Open/In Progress/Closed |

### 14.6.2 Reference Architecture Updates

**Purpose:** Keep the reference architecture current and relevant based on implementation experience and technology evolution.

**Update Triggers:**

| Trigger | Example | Update Type |
|---------|---------|-------------|
| Lessons Learned | Pattern not working as expected | Guidance update |
| Technology Change | New cloud service available | Standard addition |
| Business Change | New service line | Capability update |
| Regulatory Change | New compliance requirement | Policy update |
| Industry Evolution | Emerging best practice | Pattern update |
| DPI Change | New Building Block available | Integration update |

**Update Process:**

| Step | Activity | Responsibility |
|------|----------|----------------|
| 1 | Identify update need | Anyone |
| 2 | Document proposed change | Domain Architect |
| 3 | Assess impact | EA Team |
| 4 | Review and approve | EA Board (significant) / Chief EA (minor) |
| 5 | Update artifacts | Domain Architects |
| 6 | Communicate changes | Chief EA |
| 7 | Train stakeholders | EA Office |

**Version Control:**

| Version Type | Description | Example |
|--------------|-------------|---------|
| Major version | Significant structural changes | 1.0 → 2.0 |
| Minor version | New components or substantial updates | 1.0 → 1.1 |
| Patch version | Corrections and clarifications | 1.0 → 1.0.1 |

**Update Communication:**

| Change Type | Communication Method | Timing |
|-------------|---------------------|--------|
| Major | Organization-wide announcement, training | 2 weeks before effective |
| Minor | EA newsletter, team meetings | 1 week before effective |
| Patch | Knowledge base update, email notification | Immediate |

### 14.6.3 Framework Evolution

**Purpose:** Continuously improve EA framework components based on lessons learned and stakeholder feedback.

**Framework Review Cycle:**

| Component | Review Frequency | Responsibility |
|-----------|------------------|----------------|
| EA Processes | Quarterly | Chief EA |
| EA Templates | Semi-annually | Domain Architects |
| EA Standards | Annually | EA Board |
| EA Principles | Annually | EA Board + DT Committee |
| EA Methodology | Annually | Chief EA |

**Framework Update Process:**

| Step | Activity | Responsibility |
|------|----------|----------------|
| 1 | Conduct Review Meeting | Chief EA with EA team |
| 2 | Define Enhancement Areas | EA Team |
| 3 | Assign Update Tasks | Chief EA |
| 4 | Draft Updates | Domain Architects |
| 5 | Review & Approve | Chief EA |
| 6 | Publish Framework | Chief EA |
| 7 | Communicate Changes | EA Office |

**Enhancement Areas:**

| Area | Examples |
|------|----------|
| EA Services and Processes | Streamline review process, add new service |
| EA Templates | Improve compliance checklist, add new form |
| Meta-model | Update entity definitions, add relationships |
| Management Processes | Improve escalation, enhance reporting |
| Tools | Enhance repository, improve automation |

### 14.6.4 KPI Tracking and Reporting

**Purpose:** Measure and report EA effectiveness to drive continuous improvement.

**KPI Categories:**

| Category | Purpose |
|----------|---------|
| Effectiveness | Measure EA impact and value delivery |
| Governance | Track compliance and exception management |
| Engagement | Assess stakeholder interaction quality |
| Roadmap | Monitor implementation progress |
| Improvement | Track continuous improvement activities |

**Reporting Cadence:**

| Report | Audience | Frequency |
|--------|----------|-----------|
| Operational Metrics | EA Team | Weekly |
| Governance Dashboard | EA Board | Monthly |
| Strategic KPIs | DT Committee | Quarterly |
| EA Health Assessment | Executive Leadership | Annually |

**Data Collection Methods:**

| Data Source | Collection Method | Frequency |
|-------------|-------------------|-----------|
| EA Repository | Automated extraction | Real-time |
| Service Requests | Request tracking system | Continuous |
| Project Reviews | Review documentation | Per milestone |
| Stakeholder Surveys | Online surveys | Quarterly |
| Compliance Assessments | Review reports | Per project |

---

## 14.7 EA Services Catalog

### 14.7.1 Service Portfolio Overview

EA Office services are organized into six categories that span strategic planning through operational support:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         EA SERVICE PORTFOLIO                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌────────────────┐   ┌────────────────┐   ┌────────────────┐              │
│  │   STRATEGIC    │   │    PROJECT     │   │    ADVISORY    │              │
│  │   SERVICES     │   │    SUPPORT     │   │    SERVICES    │              │
│  │                │   │    SERVICES    │   │                │              │
│  │ • IT Strategy  │   │ • Solution     │   │ • Technical    │              │
│  │   Support      │   │   Review       │   │   Consultation │              │
│  │ • Roadmap      │   │ • Procurement  │   │ • Domain       │              │
│  │   Planning     │   │   Support      │   │   Guidance     │              │
│  └────────────────┘   └────────────────┘   └────────────────┘              │
│                                                                              │
│  ┌────────────────┐   ┌────────────────┐   ┌────────────────┐              │
│  │   REPOSITORY   │   │   GOVERNANCE   │   │   ASSESSMENT   │              │
│  │   SERVICES     │   │   SERVICES     │   │   SERVICES     │              │
│  │                │   │                │   │                │              │
│  │ • Framework    │   │ • Compliance   │   │ • Maturity     │              │
│  │   Maintenance  │   │   Review       │   │   Assessment   │              │
│  │ • EA           │   │ • Change &     │   │ • Innovation   │              │
│  │   Development  │   │   Dispensation │   │   Research     │              │
│  └────────────────┘   └────────────────┘   └────────────────┘              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 14.7.2 Strategic Services

**EA-SRV-01: IT Strategic Planning Support**

| Attribute | Value |
|-----------|-------|
| Service Owner | Chief Enterprise Architect |
| Service Type | Request-Driven |
| SLA Timeframe | 2 Weeks |
| Priority | High |

**Description:** Increases cooperation between business and IT departments to develop and update the IT Strategy in alignment with organizational business strategy.

**Key Inputs:** Organizational Strategy Plan, Current and Planned Projects Portfolio, EA Artifacts, Business Capability Model

**Key Outputs:** Developed/Updated IT Strategy Document, Developed/Updated IT Roadmap, Strategy-Architecture Alignment Report

**EA-SRV-02: Architecture Roadmap Planning**

| Attribute | Value |
|-----------|-------|
| Service Owner | Chief Enterprise Architect |
| Service Type | Mandate-Driven |
| SLA Timeframe | 4 Weeks |
| Priority | High |

**Description:** Develops and maintains the architecture implementation roadmap that guides the organization from current state to target architecture.

**Key Inputs:** Target Architecture Artifacts, Current State Assessment, Strategic Priorities, Available Resources and Budget, Project Portfolio

**Key Outputs:** Architecture Roadmap Document, Project Cards for EA-driven initiatives, Resource and Budget Estimates, Risk Assessment

### 14.7.3 Project Support Services

**EA-SRV-03: Solution Architecture Review**

| Attribute | Value |
|-----------|-------|
| Service Owner | Chief Enterprise Architect |
| Service Type | Mandate-Driven / Request-Driven |
| SLA Timeframe | 1-2 Weeks (based on complexity) |
| Priority | High |

**Description:** Reviews and assesses the alignment of proposed solution designs with the target architecture and established standards.

**Key Inputs:** Solution Design Document (SDD), Architecture Requirements, Target Architecture Artifacts, Architecture Principles and Standards, Architecture Compliance Checklist

**Key Outputs:** Architecture Compliance Report, Recommendations for improvement, Dispensation Request (if required)

**EA-SRV-04: Procurement Support**

| Attribute | Value |
|-----------|-------|
| Service Owner | EA Office |
| Service Type | Request-Driven |
| SLA Timeframe | 2 Weeks |
| Priority | Medium |

**Description:** Supports the procurement cycle by providing enterprise architecture artifacts, standards, and technical requirements for RFPs and vendor evaluations.

**Key Inputs:** Problem Statement / Business Need, Draft RFP, Technical Proposals, Architecture Standards and Principles, Target Architecture Artifacts

**Key Outputs:** RFP Technical Requirements Input, Technical Evaluation Criteria, Technical Evaluation Report

### 14.7.4 Advisory Services

**EA-SRV-05: Technical Architecture Consultation**

| Attribute | Value |
|-----------|-------|
| Service Owner | EA Office |
| Service Type | Request-Driven |
| SLA Timeframe | 1-2 Weeks |
| Priority | Medium |

**Description:** Provides architectural advice to different departments to help them define the best approach, design, or architecture for solving problems they face.

**Key Inputs:** Problem Statement, Current State Documentation, Business Requirements, Constraints and Dependencies, Available Technology Options

**Key Outputs:** Architecture Recommendations Document, Solution Options Analysis, Implementation Guidance, Architecture Decision Record

**EA-SRV-06: Domain Architecture Guidance**

| Attribute | Value |
|-----------|-------|
| Service Owner | Domain Architect |
| Service Type | Request-Driven |
| SLA Timeframe | 1 Week |
| Priority | Medium |

**Description:** Provides specialized guidance within specific architecture domains (Business, Application, Data, Technology).

**Key Inputs:** Specific Domain Question or Problem, Current Domain Artifacts, Domain Standards and Guidelines, Reference Architectures

**Key Outputs:** Domain-Specific Guidance Document, Updated Domain Artifacts (if applicable), Architecture Decision Record

### 14.7.5 Repository Services

**EA-SRV-07: EA Framework Maintenance**

| Attribute | Value |
|-----------|-------|
| Service Owner | Chief Enterprise Architect |
| Service Type | Mandate-Driven |
| SLA Timeframe | 4 Weeks (after approval) |
| Priority | High |

**Description:** Manages and updates the EA framework by introducing and updating EA standards, services, patterns, and reference architectures based on feedback and lessons learned.

**Key Inputs:** Current EA Standards, Current Reference Architectures, Stakeholder Feedback, Lessons Learned from Projects, Industry Best Practices

**Key Outputs:** Updated EA Methodology, Updated EA Standards, Updated Reference Architectures, Framework Change Log

**EA-SRV-08: EA Development**

| Attribute | Value |
|-----------|-------|
| Service Owner | Chief Enterprise Architect |
| Service Type | Mandate-Driven / Request-Driven |
| SLA Timeframe | Continuous (based on change size) |
| Priority | High |

**Description:** Constructs and maintains enterprise architecture artifacts for all EA domains that fulfill business and technology demands.

**Key Inputs:** Problem Statement, Business Case, Current Architecture Artifacts, Architecture Principles and Standards

**Key Outputs:** Updated EA Artifacts for impacted domains, Architecture Contracts (if required), Implementation Roadmap, Updated EA Repository

### 14.7.6 Governance Services

**EA-SRV-09: Architecture Compliance & Governance**

| Attribute | Value |
|-----------|-------|
| Service Owner | Chief Enterprise Architect |
| Service Type | Mandate-Driven |
| SLA Timeframe | Continuous |
| Priority | High |

**Description:** Reviews and assures alignment of IT project execution with designed and approved target architecture artifacts through periodic inspections.

**Key Inputs:** EA Standards and Principles, Target Architecture Artifacts, Project Implementation Documents, Previous Compliance Reports

**Key Outputs:** EA Governance Plan, Compliance Assessment Reports, Audit Findings Documentation, Corrective Action Recommendations, Governance Metrics Report

**EA-SRV-10: Change & Dispensation Management**

| Attribute | Value |
|-----------|-------|
| Service Owner | Chief Enterprise Architect |
| Service Type | Request-Driven |
| SLA Timeframe | 1-2 Weeks |
| Priority | High |

**Description:** Manages architecture change requests and dispensation requests when projects cannot comply with established standards.

**Key Inputs:** Request for Change (RFC) or Dispensation Request, Architecture Compliance Report, Architecture Principles and Standards, Solution Design Document, Business Justification

**Key Outputs:** Impact Assessment Report, Dispensation Response Document, Alternative Solutions Analysis, Updated Architecture Artifacts, Change/Dispensation Log Entry

### 14.7.7 Assessment Services

**EA-SRV-11: Digital Maturity Assessment**

| Attribute | Value |
|-----------|-------|
| Service Owner | Chief Enterprise Architect |
| Service Type | Mandate-Driven |
| SLA Timeframe | Within assessment period |
| Priority | High |

**Description:** Leads digital maturity assessment activities to evaluate the organization's digital capabilities against established frameworks or regulatory requirements.

**Key Inputs:** Digital Maturity Assessment Framework/Guide, Assessment Questionnaire, Previous Assessment Results, Previous Enhancement Plans, Current State Documentation

**Key Outputs:** Digital Maturity Assessment Report, Gap Analysis Document, Digital Maturity Enhancement Plan, Prioritized Improvement Roadmap

**EA-SRV-12: Digital Research & Innovation**

| Attribute | Value |
|-----------|-------|
| Service Owner | EA Office |
| Service Type | Mandate-Driven / Request-Driven |
| SLA Timeframe | 4 Weeks (after approval) |
| Priority | High |

**Description:** Enables continuous response to market changes by studying and measuring the applicability of new trends and innovations for the organization's technical environment.

**Key Inputs:** EA Board Direction / Strategic Priorities, Service Requests from Business/IT, Industry Trend Reports, Current Technology Landscape, Business Pain Points

**Key Outputs:** Technology Trend Assessment Report, Innovation Opportunity Analysis, Business Case (if required), Pilot/PoC Recommendations

### 14.7.8 Service Applicability by Organization Type

| Service ID | Service Name | PDU | RA | SDA |
|------------|--------------|-----|-----|-----|
| **Strategic Services** |
| EA-SRV-01 | IT Strategic Planning Support | ○ | ● | ● |
| EA-SRV-02 | Architecture Roadmap Planning | ○ | ● | ● |
| **Project Support Services** |
| EA-SRV-03 | Solution Architecture Review | ○ | ◐ | ● |
| EA-SRV-04 | Procurement Support | ○ | ● | ● |
| **Advisory Services** |
| EA-SRV-05 | Technical Architecture Consultation | ○ | ◐ | ● |
| EA-SRV-06 | Domain Architecture Guidance | ○ | ◐ | ● |
| **Repository Services** |
| EA-SRV-07 | EA Framework Maintenance | ○ | ◐ | ● |
| EA-SRV-08 | EA Development | ○ | ◐ | ● |
| **Governance Services** |
| EA-SRV-09 | Architecture Compliance & Governance | ○ | ◐ | ● |
| EA-SRV-10 | Change & Dispensation Management | ○ | ◐ | ● |
| **Assessment Services** |
| EA-SRV-11 | Digital Maturity Assessment | ○ | ○ | ● |
| EA-SRV-12 | Digital Research & Innovation | ○ | ● | ● |

**Legend:** ● Required | ◐ Recommended | ○ Optional

---

## 14.8 Governance Framework Summary

### 14.8.1 Governance Bodies and Roles

**Governance Hierarchy:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       GOVERNANCE HIERARCHY                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │              Digital Transformation Committee                        │    │
│  │         (Strategic Direction & Executive Sponsorship)                │    │
│  │  • CEO/Agency Head (Chair)                                          │    │
│  │  • Business Deputies                                                │    │
│  │  • CIO/CDO                                                          │    │
│  └────────────────────────────────┬────────────────────────────────────┘    │
│                                   │                                         │
│                                   ▼                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                 Enterprise Architecture Board                        │    │
│  │         (Architecture Decisions & Standards Approval)                │    │
│  │  • CIO (Chair)                                                      │    │
│  │  • Chief EA (Secretariat)                                           │    │
│  │  • IT Directors                                                     │    │
│  │  • Business Representatives                                         │    │
│  └────────────────────────────────┬────────────────────────────────────┘    │
│                                   │                                         │
│                                   ▼                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                      EA Office / Team                                │    │
│  │         (Day-to-Day Governance & Implementation)                     │    │
│  │  • Chief Enterprise Architect                                       │    │
│  │  • Domain Architects (Business, Application, Data, Technology)      │    │
│  │  • EA Tool Expert                                                   │    │
│  │  • Supporting Specialists                                           │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 14.8.2 Decision Rights Matrix

| Decision Type | Chief EA | EA Board | DT Committee |
|---------------|----------|----------|--------------|
| Architecture Principles | Propose | Approve | Endorse |
| Technology Standards | Propose | Approve | Informed |
| Target Architecture | Develop | Approve | Endorse |
| Implementation Roadmap | Develop | Approve | Endorse |
| Minor Dispensation | Approve | Informed | - |
| Major Dispensation | Recommend | Approve | Informed |
| Enterprise Dispensation | Recommend | Recommend | Approve |
| Project Compliance | Assess | Informed | - |
| EA Framework Changes | Propose | Approve | - |
| EA Budget/Resources | Propose | Recommend | Approve |

### 14.8.3 Escalation Paths

| Escalation Trigger | From | To | Timeline |
|-------------------|------|-----|----------|
| Unresolved within SLA | Domain Architect | Chief EA | Same day |
| Cross-domain impact | Chief EA | EA Board | Next meeting or emergency session |
| Stakeholder disagreement | EA Board | DT Committee | Within 2 weeks |
| Strategic impact | EA Board | DT Committee | Next meeting |
| Budget/Resource conflict | EA Board | DT Committee | Within 1 week |
| Policy exception needed | EA Board | DT Committee | Next meeting |

### 14.8.4 Policy Framework

**Core Policies:**

| Policy | Description | Approval Authority |
|--------|-------------|-------------------|
| Architecture Governance Policy | Overall governance framework and authorities | DT Committee |
| Compliance Policy | Mandatory compliance requirements | EA Board |
| Dispensation Policy | Exception handling procedures | EA Board |
| Standards Management Policy | How standards are developed and maintained | EA Board |
| Change Management Policy | How architecture changes are managed | EA Board |

**Policy Hierarchy:**

| Level | Type | Examples |
|-------|------|----------|
| 1 | Principles | Architecture principles, design principles |
| 2 | Policies | Compliance policy, dispensation policy |
| 3 | Standards | Technology standards, integration standards |
| 4 | Guidelines | Implementation guidelines, best practices |
| 5 | Procedures | Review procedures, approval workflows |

---

## 14.9 Architecture Compliance Process

### 14.9.1 Compliance Review Triggers

| Trigger | Review Type | Timing | Responsibility |
|---------|-------------|--------|----------------|
| New Project Initiation | Full Compliance Review | Project Start | EA Office |
| Major Change Request | Impact-Based Review | Before Change | Domain Architect |
| Solution Design Complete | Design Compliance | Before Implementation | Domain Architect |
| Implementation Complete | Delivery Compliance | Before Go-Live | Domain Architect |
| Scheduled Audit | Periodic Assessment | Quarterly/Annual | EA Office |
| Incident | Post-Incident Review | After Major Incident | Chief EA |

### 14.9.2 Assessment Methodology

**Compliance Assessment Steps:**

| Step | Activity | Responsibility | Output |
|------|----------|----------------|--------|
| 1 | Prepare assessment scope and checklist | Domain Architect | Customized checklist |
| 2 | Gather solution documentation | Project Team | SDD, technical specs |
| 3 | Conduct compliance check | Domain Architect | Findings list |
| 4 | Assess each domain | Domain Architects | Domain assessments |
| 5 | Consolidate findings | Domain Architect | Draft report |
| 6 | Review with stakeholders | Domain Architect | Validated findings |
| 7 | Determine compliance status | Chief EA | Final status |
| 8 | Document decision | Chief EA | Compliance report |

**Domain Assessment Areas:**

| Domain | Assessment Focus |
|--------|-----------------|
| **Business** | Capability alignment, process compliance, organizational fit |
| **Application** | Component reuse, API standards, integration patterns, BB usage |
| **Data** | Data models, ownership, quality, MDM alignment, privacy |
| **Technology** | Infrastructure standards, cloud policy, security, performance |
| **Security** | Controls, identity, encryption, audit, access management |
| **DPI** | Building Block integration, national platform alignment |

### 14.9.3 Compliance Levels

| Level | Definition | Criteria | Action |
|-------|------------|----------|--------|
| **Fully Compliant** | Meets all applicable standards | All assessment items pass | Proceed |
| **Partially Compliant** | Meets most standards with minor gaps | >80% pass, no critical items fail | Proceed with conditions |
| **Non-Compliant** | Significant gaps in compliance | <80% pass or critical items fail | Remediation required |
| **Dispensation Required** | Cannot achieve compliance | Business need conflicts with standards | Initiate dispensation |

### 14.9.4 Remediation Process

**Remediation Steps:**

| Step | Activity | Timeline | Responsibility |
|------|----------|----------|----------------|
| 1 | Review findings with project team | Within 2 days | Domain Architect |
| 2 | Develop remediation plan | Within 1 week | Project Team |
| 3 | Approve remediation plan | Within 3 days | Chief EA |
| 4 | Execute remediation | Per plan | Project Team |
| 5 | Verify remediation | Upon completion | Domain Architect |
| 6 | Close findings | Upon verification | Chief EA |

**Remediation Plan Template:**

| Finding ID | Description | Remediation Action | Owner | Due Date | Status |
|------------|-------------|-------------------|-------|----------|--------|
| F001 | Example finding | Example action | Name | Date | Open/Closed |

---

## 14.10 Dispensation Process

### 14.10.1 When Dispensation is Needed

Dispensation is required when:

| Situation | Description |
|-----------|-------------|
| **Technical Constraint** | Required platform or technology doesn't support standard approach |
| **Time Pressure** | Compliant solution would significantly delay critical deadline |
| **Cost Constraint** | Compliant solution exceeds available budget significantly |
| **Legacy Integration** | Must integrate with legacy system using non-standard approach |
| **Vendor Limitation** | Vendor product uses proprietary, non-standard approach |
| **Business Priority** | Business benefit clearly outweighs compliance cost |
| **Regulatory Requirement** | External regulation conflicts with internal standard |

### 14.10.2 Request Submission

**Required Information:**

| Section | Required Content |
|---------|-----------------|
| **Request Details** | Project name, requestor, date, standard being deviated |
| **Exception Description** | Clear description of proposed deviation |
| **Business Justification** | Why deviation is necessary, impact if not approved |
| **Alternatives Considered** | Compliant alternatives evaluated and why rejected |
| **Risk Assessment** | Risks of deviation, likelihood, impact, mitigation |
| **Duration** | Temporary or permanent, expiry date if temporary |
| **Remediation Plan** | How compliance will be achieved (if temporary) |
| **Affected Components** | Architecture building blocks impacted |

### 14.10.3 Evaluation Criteria

**Assessment Factors:**

| Factor | Weight | Assessment Questions |
|--------|--------|---------------------|
| Business Justification | 25% | Is the business need valid and compelling? |
| Risk Level | 25% | What is the risk and can it be mitigated? |
| Alternatives Explored | 20% | Were compliant alternatives adequately explored? |
| Remediation Plan | 15% | Is there a credible path to compliance? |
| Precedent Impact | 15% | Will this set a problematic precedent? |

**Decision Matrix:**

| Factor Scores | Decision |
|---------------|----------|
| All factors High/Medium | Approve |
| 1-2 factors Low, others High | Approve with conditions |
| 3+ factors Low | Reject or require revision |
| Critical risk unmitigated | Reject |

### 14.10.4 Approval Workflow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       DISPENSATION APPROVAL WORKFLOW                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                     ┌─────────────────┐                                     │
│                     │ Request Received│                                     │
│                     └────────┬────────┘                                     │
│                              │                                              │
│                              ▼                                              │
│                     ┌─────────────────┐                                     │
│                     │ EA Office Review│                                     │
│                     │ (Completeness)  │                                     │
│                     └────────┬────────┘                                     │
│                              │                                              │
│              ┌───────────────┼───────────────┐                              │
│              │               │               │                              │
│              ▼               ▼               ▼                              │
│        ┌──────────┐   ┌──────────┐   ┌──────────┐                          │
│        │Incomplete│   │  Minor   │   │  Major   │                          │
│        │Return    │   │ Impact   │   │ Impact   │                          │
│        └──────────┘   └────┬─────┘   └────┬─────┘                          │
│                            │              │                                 │
│                            ▼              ▼                                 │
│                      ┌──────────┐   ┌──────────┐                           │
│                      │Chief EA  │   │ EA Board │                           │
│                      │Decision  │   │ Decision │                           │
│                      └────┬─────┘   └────┬─────┘                           │
│                           │              │                                  │
│              ┌────────────┼────────────┬─┘                                  │
│              │            │            │                                    │
│              ▼            ▼            ▼                                    │
│        ┌──────────┐ ┌──────────┐ ┌──────────┐                              │
│        │ Approve  │ │ Approve  │ │  Reject  │                              │
│        │          │ │  w/Cond. │ │          │                              │
│        └────┬─────┘ └────┬─────┘ └────┬─────┘                              │
│             │            │            │                                     │
│             └────────────┼────────────┘                                     │
│                          │                                                  │
│                          ▼                                                  │
│                   ┌──────────────┐                                          │
│                   │ Update Log & │                                          │
│                   │ Notify       │                                          │
│                   └──────────────┘                                          │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 14.10.5 Conditions and Tracking

**Standard Conditions:**

| Condition Type | Description |
|---------------|-------------|
| Time-bound | Must return to compliance by specified date |
| Monitoring | Regular progress reporting required |
| Risk mitigation | Specific risk controls must be implemented |
| Documentation | Additional documentation required |
| Review | Periodic review by EA Office required |
| Sunset | Component must be replaced by target date |

**Tracking Requirements:**

| Field | Description |
|-------|-------------|
| Dispensation ID | Unique identifier |
| Status | Active, Expired, Remediated, Extended |
| Expiry Date | When dispensation expires |
| Review Date | Next scheduled review |
| Conditions | List of attached conditions |
| Condition Status | Status of each condition |
| Remediation Progress | Progress toward compliance |

### 14.10.6 Expiration and Renewal

**Expiration Process:**

| Timeline | Activity | Responsibility |
|----------|----------|----------------|
| 90 days before | Reminder sent to dispensation owner | EA Office |
| 60 days before | Status review meeting | Domain Architect |
| 30 days before | Renewal or remediation plan required | Owner |
| Expiry date | Dispensation expires | Automatic |
| After expiry | Non-compliance status if not remediated | EA Office |

**Renewal Criteria:**

| Criteria | Description |
|----------|-------------|
| Valid reason | Original reason still applies |
| Progress shown | Remediation efforts underway |
| No alternatives | Compliant alternatives still not feasible |
| Risk managed | Risk mitigation measures in place |
| Time-limited | Renewal for defined period only |

---

## 14.11 Continuous Improvement Cycle

### 14.11.1 PDCA Application to EA

The EA practice applies Plan-Do-Check-Act (PDCA) methodology for continuous improvement:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      EA CONTINUOUS IMPROVEMENT CYCLE                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                          ┌─────────────┐                                    │
│                          │    PLAN     │                                    │
│                          │             │                                    │
│                          │ • Set goals │                                    │
│                          │ • Define    │                                    │
│                          │   metrics   │                                    │
│                          │ • Plan      │                                    │
│                          │   changes   │                                    │
│                          └──────┬──────┘                                    │
│                    ┌────────────┘                                           │
│                    │                                                        │
│         ┌──────────▼──────┐              ┌─────────────┐                   │
│         │      ACT        │              │     DO      │                   │
│         │                 │              │             │                   │
│         │ • Standardize   │◄────────────►│ • Execute   │                   │
│         │   improvements  │              │   plan      │                   │
│         │ • Update        │              │ • Deliver   │                   │
│         │   framework     │              │   services  │                   │
│         │ • Train team    │              │ • Collect   │                   │
│         │                 │              │   data      │                   │
│         └────────┬────────┘              └──────┬──────┘                   │
│                  │                              │                           │
│                  └────────────┐    ┌────────────┘                           │
│                               │    │                                        │
│                          ┌────▼────▼────┐                                   │
│                          │    CHECK     │                                   │
│                          │              │                                   │
│                          │ • Review     │                                   │
│                          │   metrics    │                                   │
│                          │ • Analyze    │                                   │
│                          │   results    │                                   │
│                          │ • Identify   │                                   │
│                          │   gaps       │                                   │
│                          └──────────────┘                                   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**PDCA Activities by Quarter:**

| Quarter | PLAN | DO | CHECK | ACT |
|---------|------|-----|-------|-----|
| Q1 | Set annual goals | Execute Q1 services | Review Q4 results | Implement Q4 improvements |
| Q2 | Review Q1, adjust plans | Execute Q2 services | Review Q1 results | Implement Q1 improvements |
| Q3 | Review Q2, adjust plans | Execute Q3 services | Review Q2 results | Implement Q2 improvements |
| Q4 | Plan next year | Execute Q4 services | Review Q3 results | Implement Q3 improvements |

### 14.11.2 Metrics-Driven Improvement

**Improvement Identification:**

| Metric Trend | Potential Improvement |
|--------------|----------------------|
| Declining compliance rate | Review standards applicability, enhance guidance |
| Increasing dispensation rate | Standards may be too restrictive, review policies |
| Slow review turnaround | Streamline process, add resources |
| Low stakeholder satisfaction | Enhance communication, improve service delivery |
| Slow roadmap progress | Review resource allocation, reassess priorities |

**Improvement Prioritization:**

| Factor | Weight | Assessment |
|--------|--------|------------|
| Value Impact | 30% | How much will this improve EA effectiveness? |
| Implementation Effort | 25% | How much effort is required? |
| Urgency | 20% | How quickly is improvement needed? |
| Risk | 15% | What is the risk of not improving? |
| Feasibility | 10% | Can we realistically implement this? |

### 14.11.3 Stakeholder Feedback Integration

**Feedback Collection:**

| Method | Frequency | Target Audience |
|--------|-----------|-----------------|
| Post-engagement survey | Per engagement | Project teams |
| Quarterly satisfaction survey | Quarterly | All stakeholders |
| Architecture community meeting | Monthly | EA practitioners |
| EA Board feedback | Monthly | Board members |
| Executive interviews | Annual | Senior leadership |

**Feedback Processing:**

| Step | Activity | Timeline |
|------|----------|----------|
| 1 | Collect and compile feedback | Ongoing |
| 2 | Categorize and analyze | Monthly |
| 3 | Identify improvement themes | Quarterly |
| 4 | Prioritize improvements | Quarterly |
| 5 | Plan implementation | Quarterly |
| 6 | Execute improvements | Per plan |
| 7 | Validate effectiveness | Post-implementation |

### 14.11.4 Innovation Incorporation

**Innovation Sources:**

| Source | Method |
|--------|--------|
| Industry trends | Technology radar monitoring |
| Peer organizations | Benchmarking and networking |
| Research | Academic and analyst reports |
| Vendors | Technology briefings |
| Internal ideas | Innovation suggestion process |
| GovStack evolution | Building Block updates |

**Innovation Assessment:**

| Criteria | Assessment Questions |
|----------|---------------------|
| Relevance | Does this address our challenges? |
| Maturity | Is the technology ready for use? |
| Alignment | Does this fit our architecture? |
| Value | What benefits would this provide? |
| Risk | What are the risks of adoption? |
| Feasibility | Can we implement this? |

---

## 14.12 EA Effectiveness Metrics

### 14.12.1 Leading Indicators

Leading indicators predict future EA performance:

| Indicator | Description | Target | Measurement |
|-----------|-------------|--------|-------------|
| EA Engagement Rate | % of eligible projects engaging EA early | >95% | Project tracking |
| Review Pipeline | Volume of pending reviews | <10 | Review queue |
| Training Completion | % of IT staff completing EA training | >80% | Training records |
| Standards Currency | % of standards reviewed in past year | >90% | Standards review log |
| Roadmap Updates | Timeliness of roadmap updates | Monthly | Update log |

### 14.12.2 Lagging Indicators

Lagging indicators measure actual EA results:

| Indicator | Description | Target | Measurement |
|-----------|-------------|--------|-------------|
| RA Compliance Rate | % of solutions compliant with RA | >90% | Compliance reviews |
| First-Time Compliance | % passing review on first submission | >70% | Review tracking |
| Dispensation Rate | % of projects requiring dispensation | <10% | Dispensation log |
| Roadmap Progress | % of milestones achieved on schedule | >80% | Milestone tracking |
| Technical Debt | Volume of accumulated non-compliance | Decreasing | Debt assessment |
| Benefits Realized | % of EA-traced benefits achieved | >60% | Benefits tracking |
| Customer Satisfaction | Stakeholder satisfaction rating | >4.0/5.0 | Surveys |

### 14.12.3 Measurement Methodology

**Data Collection:**

| Metric Type | Collection Method | Frequency | Responsibility |
|-------------|-------------------|-----------|----------------|
| Compliance | Review reports | Per project | Domain Architects |
| Engagement | Project tracking | Continuous | EA Office |
| Satisfaction | Surveys | Quarterly | EA Office |
| Dispensation | Dispensation log | Continuous | Chief EA |
| Roadmap | Milestone tracking | Monthly | Chief EA |
| Benefits | Benefits register | Quarterly | PMO with EA |

**Calculation Methods:**

| Metric | Formula |
|--------|---------|
| Compliance Rate | (Compliant Solutions / Total Solutions) × 100 |
| First-Time Compliance | (First Submission Passes / Total Submissions) × 100 |
| Engagement Rate | (Projects with EA Engagement / Eligible Projects) × 100 |
| Dispensation Rate | (Dispensations Granted / Total Compliance Reviews) × 100 |
| Roadmap Progress | (Milestones Achieved on Schedule / Total Milestones) × 100 |
| Satisfaction Score | Average of all satisfaction ratings |

### 14.12.4 Target Setting

**Target Setting Approach:**

| Year | Approach |
|------|----------|
| Year 1 | Establish baselines, set achievable targets |
| Year 2 | 10-20% improvement over baseline |
| Year 3+ | Industry benchmark alignment |

**Target Adjustment Triggers:**

| Trigger | Action |
|---------|--------|
| Target consistently met | Raise target by 5-10% |
| Target consistently missed | Investigate root cause, adjust process or target |
| External change | Reassess targets against new context |
| Benchmark change | Align with updated benchmarks |

### 14.12.5 Reporting Frequency

| Report | Content | Audience | Frequency |
|--------|---------|----------|-----------|
| Weekly Status | Operational metrics, issues | EA Team | Weekly |
| Governance Dashboard | All KPIs, trends | EA Board | Monthly |
| Strategic Report | Key KPIs, strategic insights | DT Committee | Quarterly |
| Annual Report | Comprehensive analysis | Executive Leadership | Annual |

### 14.12.6 KPI Dashboard Example

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       EA GOVERNANCE DASHBOARD                                │
│                           January 2026                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   EFFECTIVENESS              GOVERNANCE               ENGAGEMENT            │
│   ┌─────────────┐           ┌─────────────┐         ┌─────────────┐        │
│   │   Service   │           │ Compliance  │         │ Engagement  │        │
│   │ Utilization │           │    Rate     │         │    Rate     │        │
│   │     85%     │           │     92%     │         │     97%     │        │
│   │   ▲ +5%     │           │   ▲ +3%     │         │   ▼ -1%     │        │
│   │ Target: 80% │           │ Target: 90% │         │ Target: 95% │        │
│   └─────────────┘           └─────────────┘         └─────────────┘        │
│                                                                              │
│   ROADMAP                   EXCEPTIONS               SATISFACTION           │
│   ┌─────────────┐           ┌─────────────┐         ┌─────────────┐        │
│   │  Progress   │           │ Dispensation│         │  Customer   │        │
│   │             │           │    Rate     │         │  Feedback   │        │
│   │     82%     │           │      8%     │         │   4.2/5.0   │        │
│   │   ▲ +2%     │           │   ▼ -2%     │         │   ▲ +0.2    │        │
│   │ Target: 80% │           │ Target: <10%│         │ Target: 4.0 │        │
│   └─────────────┘           └─────────────┘         └─────────────┘        │
│                                                                              │
│   TREND INDICATORS: ▲ Improving   ▼ Declining   ─ Stable                   │
│                                                                              │
│   STATUS: ● On Target  ○ At Risk  ○ Off Track                              │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│   HIGHLIGHTS                                                                 │
│   • Compliance rate exceeds target for 3rd consecutive month                │
│   • 12 projects completed EA engagement this month                          │
│   • 2 dispensations expiring in next 30 days - remediation on track        │
│                                                                              │
│   CONCERNS                                                                   │
│   • Review turnaround time increased to 7 days (target: 5 days)            │
│   • Project X compliance review delayed due to incomplete documentation    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 14.13 EXECUTE & GOVERN Deliverables

### 14.13.1 Ongoing Deliverables

| Deliverable | Description | Frequency | Owner |
|-------------|-------------|-----------|-------|
| Compliance Reports | Assessment of solution alignment | Per project | Domain Architects |
| Dispensation Records | Approved exceptions documentation | As needed | Chief EA |
| Architecture Decision Records | Documented decisions | As decisions made | Chief EA |
| EA Status Reports | Progress and health reporting | Monthly | Chief EA |
| KPI Dashboard | Metrics and trends | Monthly | EA Office |
| Updated RA | Evolved standards and patterns | Quarterly | EA Office |
| Lessons Learned | Insights from implementations | Per project | EA Office |
| Framework Updates | Enhanced EA framework | Quarterly | Chief EA |

### 14.13.2 Quality Criteria

| Deliverable | Quality Criteria |
|-------------|-----------------|
| Compliance Reports | Complete assessment, clear findings, actionable recommendations |
| Dispensation Records | Full justification, risk assessment, conditions documented |
| Decision Records | Clear rationale, alternatives considered, stakeholders identified |
| Status Reports | Accurate data, clear trends, actionable insights |
| KPI Dashboard | Current data, accurate calculations, visual clarity |
| Updated RA | Traceable changes, version controlled, communicated |
| Lessons Learned | Specific, actionable, categorized, prioritized |
| Framework Updates | Documented changes, stakeholder reviewed, approved |

### 14.13.3 Retention Requirements

| Document Type | Retention Period | Storage Location |
|---------------|------------------|------------------|
| Compliance Reports | 7 years | EA Repository |
| Dispensation Records | Duration + 3 years | EA Repository |
| Decision Records | 10 years | EA Repository |
| Status Reports | 5 years | EA Repository |
| KPI Dashboards | 5 years | EA Repository |
| RA Versions | Permanent | EA Repository |
| Lessons Learned | 5 years | EA Repository |
| Framework Versions | Permanent | EA Repository |

---

## 14.14 Cycle Completion and Refresh

### 14.14.1 When to Restart DISCOVER

The EXECUTE & GOVERN cycle should transition back to DISCOVER when:

| Trigger | Description | Indicator |
|---------|-------------|-----------|
| **Strategic Shift** | Organizational strategy significantly changes | New strategic plan issued |
| **Major Technology Change** | Significant technology evolution | Major platform obsolescence |
| **Regulatory Change** | Significant regulatory requirements | New compliance mandates |
| **DPI Evolution** | Major changes to national DPI | New Building Blocks available |
| **Performance Gap** | Current architecture not meeting needs | KPIs consistently below target |
| **Scheduled Review** | Regular architecture refresh cycle | 3-5 year cycle completion |
| **Major Incident** | Architecture-related failure | Post-incident analysis |

### 14.14.2 Architecture Refresh Triggers

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ARCHITECTURE REFRESH DECISION                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │ TRIGGER ASSESSMENT                                                      │ │
│  │                                                                         │ │
│  │ □ New organizational strategy published                                 │ │
│  │ □ Major technology disruption (AI, quantum, etc.)                      │ │
│  │ □ Significant regulatory changes                                        │ │
│  │ □ DPI platform major upgrade                                            │ │
│  │ □ More than 3 years since last refresh                                  │ │
│  │ □ KPIs consistently below target for 2+ quarters                       │ │
│  │ □ Major architectural incident occurred                                 │ │
│  │ □ More than 30% of portfolio has dispensations                         │ │
│  │ □ Business model significantly changing                                 │ │
│  │ □ Merger, reorganization, or major restructuring                       │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  DECISION:                                                                   │
│  • 0-1 triggers: Continue EXECUTE & GOVERN                                  │
│  • 2-3 triggers: Consider targeted refresh (ASSESS/ADAPT only)             │
│  • 4+ triggers: Initiate full cycle restart (DISCOVER)                     │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 14.14.3 Major Change Handling

**Change Classification:**

| Change Type | Scope | Response |
|-------------|-------|----------|
| **Minor** | Single component or standard | Handle in IMPROVE stream |
| **Moderate** | Multiple components, one domain | ADAPT phase only |
| **Significant** | Multiple domains | ASSESS + ADAPT phases |
| **Major** | Entire architecture | Full cycle restart |

**Major Change Process:**

| Step | Activity | Duration |
|------|----------|----------|
| 1 | Identify and assess change scope | 1-2 weeks |
| 2 | Determine response level | 1 week |
| 3 | Plan refresh activities | 2-4 weeks |
| 4 | Execute appropriate phases | Per scope |
| 5 | Update roadmap | 2 weeks |
| 6 | Resume EXECUTE & GOVERN | Continuous |

### 14.14.4 Annual Planning Cycle

**Annual EA Cycle:**

| Month | Activity | Deliverable |
|-------|----------|-------------|
| Jan | Year kickoff, goal setting | Annual EA Plan |
| Feb | Q1 execution begins | Q1 priorities |
| Mar | Q1 review | Q1 report |
| Apr | Framework review | Framework update plan |
| May | Roadmap review | Updated roadmap |
| Jun | Q2 review, mid-year assessment | Mid-year report |
| Jul | Standards review | Standards update plan |
| Aug | Stakeholder feedback analysis | Improvement plan |
| Sep | Q3 review | Q3 report |
| Oct | Cycle assessment | Refresh decision |
| Nov | Annual planning | Draft annual plan |
| Dec | Year-end review, next year prep | Annual report |

---

## 14.15 EXECUTE & GOVERN Templates

### Template 14.1: Architecture Compliance Checklist

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                  ARCHITECTURE COMPLIANCE CHECKLIST                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Project: ________________________________  Date: _________________________  │
│ Solution: _______________________________  Assessor: _____________________  │
│ Version: ________________________________  Review Type: __________________  │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ BUSINESS ARCHITECTURE                               Status    Finding       │
├─────────────────────────────────────────────────────────────────────────────┤
│ [ ] Aligned with business capabilities              [Y/N/NA] _____________  │
│ [ ] Process flows documented                        [Y/N/NA] _____________  │
│ [ ] Organizational impact assessed                  [Y/N/NA] _____________  │
│ [ ] Business requirements traceable                 [Y/N/NA] _____________  │
│ [ ] Capability mapping complete                     [Y/N/NA] _____________  │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ APPLICATION ARCHITECTURE                            Status    Finding       │
├─────────────────────────────────────────────────────────────────────────────┤
│ [ ] Aligned with application landscape              [Y/N/NA] _____________  │
│ [ ] Integration patterns compliant                  [Y/N/NA] _____________  │
│ [ ] API standards followed                          [Y/N/NA] _____________  │
│ [ ] Existing components reused                      [Y/N/NA] _____________  │
│ [ ] Service boundaries appropriate                  [Y/N/NA] _____________  │
│ [ ] Building Blocks properly utilized               [Y/N/NA] _____________  │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ DATA ARCHITECTURE                                   Status    Finding       │
├─────────────────────────────────────────────────────────────────────────────┤
│ [ ] Data model aligned with standards               [Y/N/NA] _____________  │
│ [ ] Data ownership defined                          [Y/N/NA] _____________  │
│ [ ] Data quality requirements met                   [Y/N/NA] _____________  │
│ [ ] MDM requirements addressed                      [Y/N/NA] _____________  │
│ [ ] Data governance compliance                      [Y/N/NA] _____________  │
│ [ ] Privacy requirements met                        [Y/N/NA] _____________  │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ TECHNOLOGY ARCHITECTURE                             Status    Finding       │
├─────────────────────────────────────────────────────────────────────────────┤
│ [ ] Infrastructure standards followed               [Y/N/NA] _____________  │
│ [ ] Cloud policy compliance                         [Y/N/NA] _____________  │
│ [ ] Network architecture aligned                    [Y/N/NA] _____________  │
│ [ ] Performance requirements met                    [Y/N/NA] _____________  │
│ [ ] Scalability requirements addressed              [Y/N/NA] _____________  │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ SECURITY ARCHITECTURE                               Status    Finding       │
├─────────────────────────────────────────────────────────────────────────────┤
│ [ ] Security controls implemented                   [Y/N/NA] _____________  │
│ [ ] Identity management aligned                     [Y/N/NA] _____________  │
│ [ ] Data protection requirements met                [Y/N/NA] _____________  │
│ [ ] Security standards followed                     [Y/N/NA] _____________  │
│ [ ] Audit requirements addressed                    [Y/N/NA] _____________  │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ DPI INTEGRATION                                     Status    Finding       │
├─────────────────────────────────────────────────────────────────────────────┤
│ [ ] Building Blocks properly selected               [Y/N/NA] _____________  │
│ [ ] Integration patterns followed                   [Y/N/NA] _____________  │
│ [ ] National platform requirements met              [Y/N/NA] _____________  │
│ [ ] Data exchange standards followed                [Y/N/NA] _____________  │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ OVERALL ASSESSMENT                                                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Compliance Status: [ ] Fully Compliant  [ ] Partial  [ ] Non-Compliant      │
│                                                                              │
│ Summary: ________________________________________________________________   │
│ _________________________________________________________________________   │
│                                                                              │
│ Recommendations: ________________________________________________________   │
│ _________________________________________________________________________   │
│                                                                              │
│ Assessor: ____________________________  Date: ___________________________   │
│ Reviewer: ____________________________  Date: ___________________________   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Template 14.2: Dispensation Request Form

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       DISPENSATION REQUEST FORM                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Request ID: ___________________  Date: ________________________________     │
│ Project: ______________________  Requestor: ___________________________     │
│ Department: ___________________  Contact: _____________________________     │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. EXCEPTION DESCRIPTION                                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Standard/Principle Being Deviated:                                          │
│ _________________________________________________________________________   │
│                                                                              │
│ Description of Proposed Deviation:                                          │
│ _________________________________________________________________________   │
│ _________________________________________________________________________   │
│ _________________________________________________________________________   │
│                                                                              │
│ Affected Architecture Domains:                                              │
│ [ ] Business  [ ] Application  [ ] Data  [ ] Technology  [ ] Security       │
│                                                                              │
│ Affected Building Blocks: ______________________________________________    │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. BUSINESS JUSTIFICATION                                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Why is this deviation necessary?                                            │
│ _________________________________________________________________________   │
│ _________________________________________________________________________   │
│                                                                              │
│ Impact if deviation is NOT approved:                                        │
│ _________________________________________________________________________   │
│ _________________________________________________________________________   │
│                                                                              │
│ Benefits of proposed approach:                                              │
│ _________________________________________________________________________   │
│ _________________________________________________________________________   │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. ALTERNATIVES CONSIDERED                                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Alternative 1: _________________________________________________________    │
│ Why Not Selected: ______________________________________________________    │
│                                                                              │
│ Alternative 2: _________________________________________________________    │
│ Why Not Selected: ______________________________________________________    │
│                                                                              │
│ Alternative 3: _________________________________________________________    │
│ Why Not Selected: ______________________________________________________    │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ 4. RISK ASSESSMENT                                                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Risk              │ Likelihood │ Impact │ Mitigation                        │
│ ──────────────────┼────────────┼────────┼──────────────────────────────────  │
│                   │ [H/M/L]    │ [H/M/L]│                                    │
│                   │ [H/M/L]    │ [H/M/L]│                                    │
│                   │ [H/M/L]    │ [H/M/L]│                                    │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ 5. DURATION AND REMEDIATION                                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Dispensation Type: [ ] Temporary  [ ] Permanent                             │
│ Requested Duration: _______________  Expiry Date: _______________________   │
│                                                                              │
│ Remediation Plan (if temporary):                                            │
│ _________________________________________________________________________   │
│ _________________________________________________________________________   │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ 6. APPROVALS                                                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Requestor Signature: _______________________  Date: ____________________    │
│                                                                              │
│ ─────────────────────────────────────────────────────────────────────────── │
│ EA OFFICE USE ONLY                                                          │
│ ─────────────────────────────────────────────────────────────────────────── │
│                                                                              │
│ EA Assessment: ___________________________________________________________  │
│ _________________________________________________________________________   │
│                                                                              │
│ Recommendation: [ ] Approve  [ ] Approve with Conditions  [ ] Reject        │
│ Conditions: _____________________________________________________________   │
│                                                                              │
│ Domain Architect: _____________________  Date: __________________________   │
│ Chief EA: ____________________________  Date: __________________________    │
│                                                                              │
│ ─────────────────────────────────────────────────────────────────────────── │
│ EA BOARD DECISION (if escalated)                                            │
│ ─────────────────────────────────────────────────────────────────────────── │
│                                                                              │
│ Decision: [ ] Approved  [ ] Approved with Conditions  [ ] Rejected          │
│ Rationale: ______________________________________________________________   │
│ Board Chairman: _______________________  Date: __________________________   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Template 14.3: Architecture Board Meeting Agenda

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                 ARCHITECTURE BOARD MEETING AGENDA                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Date: _________________________  Time: ______________  Location: _________  │
│ Chair: ________________________  Secretariat: ___________________________   │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ ATTENDEES                                                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ [ ] CIO (Chair)                        [ ] Business Solutions Director      │
│ [ ] Chief Enterprise Architect         [ ] IT Infrastructure Director       │
│ [ ] Information Security Director      [ ] IT Planning Director             │
│ [ ] Business Representative: ________  [ ] Guest: _______________________   │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ AGENDA                                                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ 1. OPENING (5 min)                                                          │
│    • Welcome and quorum confirmation                                        │
│    • Approve previous meeting minutes                                       │
│                                                                              │
│ 2. PREVIOUS ACTIONS REVIEW (10 min)                                         │
│    • Review open action items                                               │
│    • Status updates                                                         │
│                                                                              │
│ 3. COMPLIANCE STATUS REPORT (15 min)                                        │
│    • Portfolio compliance metrics                                           │
│    • Key findings and trends                                                │
│    Presenter: ________________                                              │
│                                                                              │
│ 4. DISPENSATION DECISIONS (20 min)                                          │
│    • [DISP-001] _________________________________                           │
│    • [DISP-002] _________________________________                           │
│    Decision Required: [ ]                                                   │
│                                                                              │
│ 5. ARCHITECTURE CHANGE REQUESTS (20 min)                                    │
│    • [ACR-001] _________________________________                            │
│    • [ACR-002] _________________________________                            │
│    Decision Required: [ ]                                                   │
│                                                                              │
│ 6. PROJECT REVIEWS (20 min)                                                 │
│    • [Project A] ________________________________                           │
│    • [Project B] ________________________________                           │
│                                                                              │
│ 7. STANDARDS/POLICY UPDATES (15 min)                                        │
│    • [Update 1] ________________________________                            │
│    Decision Required: [ ]                                                   │
│                                                                              │
│ 8. STRATEGIC DISCUSSION (20 min)                                            │
│    • Topic: _____________________________________                           │
│                                                                              │
│ 9. ANY OTHER BUSINESS (10 min)                                              │
│                                                                              │
│ 10. NEXT MEETING                                                            │
│     Date: ________________  Time: ________________                          │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ PRE-READING MATERIALS                                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ • Previous meeting minutes                                                  │
│ • Compliance status report                                                  │
│ • Dispensation request packages                                             │
│ • Change request documentation                                              │
│ • Standards update proposals                                                │
│                                                                              │
│ Materials distributed: [ ] Yes  Date: _________________                     │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Template 14.4: Architecture Board Decision Log

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                   ARCHITECTURE BOARD DECISION LOG                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Meeting Date: _________________________  Meeting #: ______________________  │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ DECISIONS                                                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Decision ID: [AB-YYYY-###]                                                  │
│ Topic: _________________________________________________________________    │
│ Decision: ______________________________________________________________    │
│ ________________________________________________________________________    │
│ Rationale: _____________________________________________________________    │
│ ________________________________________________________________________    │
│ Conditions: ____________________________________________________________    │
│ Vote: For: ___  Against: ___  Abstain: ___                                 │
│ Effective Date: ________________________________________________________    │
│ Action Owner: ___________________________________________________________   │
│                                                                              │
│ ─────────────────────────────────────────────────────────────────────────── │
│                                                                              │
│ Decision ID: [AB-YYYY-###]                                                  │
│ Topic: _________________________________________________________________    │
│ Decision: ______________________________________________________________    │
│ ________________________________________________________________________    │
│ Rationale: _____________________________________________________________    │
│ ________________________________________________________________________    │
│ Conditions: ____________________________________________________________    │
│ Vote: For: ___  Against: ___  Abstain: ___                                 │
│ Effective Date: ________________________________________________________    │
│ Action Owner: ___________________________________________________________   │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ ACTION ITEMS                                                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ # │ Action                        │ Owner      │ Due Date   │ Status       │
│ ──┼───────────────────────────────┼────────────┼────────────┼───────────── │
│ 1 │                               │            │            │              │
│ 2 │                               │            │            │              │
│ 3 │                               │            │            │              │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ APPROVALS                                                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Chair: _____________________________  Date: _____________________________   │
│ Secretariat: _______________________  Date: _____________________________   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Template 14.5: EA Service Request Form

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       EA SERVICE REQUEST FORM                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Request ID: ___________________  Date: ________________________________     │
│ Requestor: ____________________  Department: __________________________     │
│ Email: ________________________  Phone: _______________________________     │
│ Project (if applicable): _____________________________________________      │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ SERVICE REQUESTED                                                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ [ ] Solution Architecture Review      [ ] Technical Consultation            │
│ [ ] Domain Architecture Guidance      [ ] Procurement Support               │
│ [ ] Compliance Review                 [ ] Design Support                    │
│ [ ] Other: _________________________________________________________       │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ REQUEST DETAILS                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Description of Request:                                                     │
│ _________________________________________________________________________   │
│ _________________________________________________________________________   │
│ _________________________________________________________________________   │
│                                                                              │
│ Expected Outcome:                                                           │
│ _________________________________________________________________________   │
│ _________________________________________________________________________   │
│                                                                              │
│ Priority: [ ] Urgent  [ ] High  [ ] Standard  [ ] Low                       │
│ Justification for Priority: ____________________________________________    │
│                                                                              │
│ Preferred Timeline: ____________________________________________________    │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ CONTEXT                                                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Related Documents (attach or reference):                                    │
│ _________________________________________________________________________   │
│                                                                              │
│ Key Stakeholders:                                                           │
│ _________________________________________________________________________   │
│                                                                              │
│ Constraints/Dependencies:                                                   │
│ _________________________________________________________________________   │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ EA OFFICE USE ONLY                                                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Received By: ____________________  Date: _______________________________    │
│ Assigned To: ____________________  Target Completion: __________________    │
│ Service SLA: ____________________  Status: _____________________________    │
│ Notes: _________________________________________________________________    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Template 14.6: Lessons Learned Template

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       LESSONS LEARNED RECORD                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Lesson ID: ____________________  Date: ________________________________     │
│ Project/Source: _______________  Author: ______________________________     │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ LESSON DETAILS                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Category: [ ] Process  [ ] Standard  [ ] Template  [ ] Guidance             │
│           [ ] Tool     [ ] Training  [ ] Other: _______________________     │
│                                                                              │
│ Title: _________________________________________________________________    │
│                                                                              │
│ Description:                                                                │
│ _________________________________________________________________________   │
│ _________________________________________________________________________   │
│ _________________________________________________________________________   │
│                                                                              │
│ What Happened:                                                              │
│ _________________________________________________________________________   │
│ _________________________________________________________________________   │
│                                                                              │
│ Root Cause:                                                                 │
│ _________________________________________________________________________   │
│ _________________________________________________________________________   │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ IMPACT                                                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Impact Area: [ ] Schedule  [ ] Quality  [ ] Cost  [ ] Risk  [ ] Other       │
│ Impact Level: [ ] High  [ ] Medium  [ ] Low                                 │
│ Impact Description:                                                         │
│ _________________________________________________________________________   │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ RECOMMENDATION                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Recommendation:                                                             │
│ _________________________________________________________________________   │
│ _________________________________________________________________________   │
│                                                                              │
│ Priority: [ ] High  [ ] Medium  [ ] Low                                     │
│ Effort Estimate: [ ] Low  [ ] Medium  [ ] High                              │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ ACTION                                                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Action Owner: ____________________  Target Date: _______________________    │
│ Action Taken: ___________________________________________________________   │
│ Status: [ ] Open  [ ] In Progress  [ ] Closed                               │
│ Closure Date: ___________________________________________________________   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Template 14.7: EA Metrics Dashboard Template

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    EA METRICS DASHBOARD                                      │
│                    Period: ________________                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ EXECUTIVE SUMMARY                                                           │
│ ─────────────────                                                           │
│ Overall EA Health: [ ] Green  [ ] Amber  [ ] Red                            │
│                                                                              │
│ Key Highlights: _________________________________________________________   │
│ Key Concerns: ___________________________________________________________   │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ EFFECTIVENESS METRICS                                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Metric                      │ Target │ Actual │ Trend │ Status │            │
│ ────────────────────────────┼────────┼────────┼───────┼────────┤            │
│ EA Service Utilization      │   %    │   %    │ ▲/▼/─ │ G/A/R  │            │
│ EA-Traced Benefits          │   %    │   %    │ ▲/▼/─ │ G/A/R  │            │
│ Customer Satisfaction       │  /5.0  │  /5.0  │ ▲/▼/─ │ G/A/R  │            │
│ Gaps Bridged                │        │        │ ▲/▼/─ │ G/A/R  │            │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ GOVERNANCE METRICS                                                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Metric                      │ Target │ Actual │ Trend │ Status │            │
│ ────────────────────────────┼────────┼────────┼───────┼────────┤            │
│ RA Compliance Rate          │   %    │   %    │ ▲/▼/─ │ G/A/R  │            │
│ First-Time Compliance       │   %    │   %    │ ▲/▼/─ │ G/A/R  │            │
│ Review Turnaround (days)    │        │        │ ▲/▼/─ │ G/A/R  │            │
│ Dispensation Rate           │   %    │   %    │ ▲/▼/─ │ G/A/R  │            │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ ENGAGEMENT METRICS                                                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Metric                      │ Target │ Actual │ Trend │ Status │            │
│ ────────────────────────────┼────────┼────────┼───────┼────────┤            │
│ EA Engagement Rate          │   %    │   %    │ ▲/▼/─ │ G/A/R  │            │
│ Service Request Response    │   %    │   %    │ ▲/▼/─ │ G/A/R  │            │
│ Consultation Adoption       │   %    │   %    │ ▲/▼/─ │ G/A/R  │            │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ ROADMAP METRICS                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Metric                      │ Target │ Actual │ Trend │ Status │            │
│ ────────────────────────────┼────────┼────────┼───────┼────────┤            │
│ Roadmap Progress            │   %    │   %    │ ▲/▼/─ │ G/A/R  │            │
│ Portfolio Alignment         │   %    │   %    │ ▲/▼/─ │ G/A/R  │            │
│ Technical Debt              │        │        │ ▲/▼/─ │ G/A/R  │            │
│ Architecture Currency       │   %    │   %    │ ▲/▼/─ │ G/A/R  │            │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ LEGEND                                                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Trend: ▲ Improving  ▼ Declining  ─ Stable                                  │
│ Status: G = Green (On Target)  A = Amber (At Risk)  R = Red (Off Track)    │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ PREPARED BY                                                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ Name: _________________________  Date: ________________________________     │
│ Next Update Due: _____________________________________________________      │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## APPENDIX A: EXECUTE & GOVERN QUICK REFERENCE CARD

```
┌─────────────────────────────────────────────────────────────────────────────┐
│            EXECUTE & GOVERN QUICK REFERENCE CARD                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  FOUR ACTIVITY STREAMS                                                       │
│  ─────────────────────                                                       │
│  EXECUTE: Project support, monitoring, DPI integration, deployment          │
│  ENGAGE: Consultation, design support, guidance, procurement support        │
│  GOVERN: Reviews, compliance, dispensation, Architecture Board              │
│  IMPROVE: Lessons learned, RA updates, framework evolution, KPIs            │
│                                                                              │
│  KEY PROCESSES                                                               │
│  ─────────────                                                               │
│  • Solution Architecture Review: 1-2 weeks SLA                              │
│  • Compliance Assessment: Per project milestone                             │
│  • Dispensation Request: 1-2 weeks SLA                                      │
│  • Architecture Board: Monthly meetings                                     │
│                                                                              │
│  ENGAGEMENT LEVELS                                                           │
│  ────────────────                                                            │
│  Light: <$100K, <3 months, low complexity                                   │
│  Standard: $100K-$1M, 3-12 months, moderate complexity                      │
│  Comprehensive: >$1M, >12 months, high complexity                           │
│                                                                              │
│  COMPLIANCE STATUS                                                           │
│  ─────────────────                                                           │
│  Fully Compliant → Proceed                                                  │
│  Partially Compliant → Proceed with conditions                              │
│  Non-Compliant → Remediation required                                       │
│  Dispensation Required → Exception process                                  │
│                                                                              │
│  KEY KPIS                                                                    │
│  ────────                                                                    │
│  • RA Compliance Rate: Target >90%                                          │
│  • EA Engagement Rate: Target >95%                                          │
│  • Dispensation Rate: Target <10%                                           │
│  • Stakeholder Satisfaction: Target >4.0/5.0                                │
│  • Roadmap Progress: Target >80%                                            │
│                                                                              │
│  ESCALATION PATH                                                             │
│  ───────────────                                                             │
│  L1: Domain Architect → L2: Chief EA → L3: EA Board → L4: DT Committee      │
│                                                                              │
│  CYCLE REFRESH TRIGGERS                                                      │
│  ─────────────────────                                                       │
│  • Strategic shift                  • Major technology change               │
│  • Regulatory change               • DPI evolution                          │
│  • 3-5 year cycle completion       • Major incident                         │
│                                                                              │
│  DELIVERABLES                                                                │
│  ────────────                                                                │
│  • Compliance Reports (per project)                                         │
│  • Dispensation Records (as needed)                                         │
│  • EA Status Reports (monthly)                                              │
│  • Updated RA (quarterly)                                                   │
│  • Lessons Learned (per project)                                            │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## APPENDIX B: ARCHITECTURE BOARD OPERATING GUIDE

### B.1 Board Charter Template

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ARCHITECTURE BOARD CHARTER                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  PURPOSE                                                                     │
│  ───────                                                                     │
│  The Architecture Board provides governance oversight for enterprise         │
│  architecture decisions, ensuring alignment between IT investments and       │
│  organizational strategy.                                                    │
│                                                                              │
│  AUTHORITY                                                                   │
│  ─────────                                                                   │
│  • Approve architecture principles, standards, and policies                 │
│  • Approve target architecture and implementation roadmap                   │
│  • Grant dispensations from architectural standards                         │
│  • Oversee compliance with architectural decisions                          │
│  • Escalate strategic issues to DT Committee                                │
│                                                                              │
│  MEMBERSHIP                                                                  │
│  ──────────                                                                  │
│  Permanent Members: CIO (Chair), Chief EA (Secretariat), IT Directors       │
│  Contributors: Business representatives as needed                           │
│  Quorum: Chair + 3 permanent members                                        │
│                                                                              │
│  MEETINGS                                                                    │
│  ────────                                                                    │
│  Frequency: Monthly (bi-weekly during active phases)                        │
│  Duration: 2 hours maximum                                                  │
│  Materials: Distributed 5 business days in advance                          │
│                                                                              │
│  DECISION MAKING                                                             │
│  ──────────────                                                              │
│  • Consensus preferred                                                      │
│  • Vote if consensus not reached (simple majority)                          │
│  • Chair has tie-breaking vote                                              │
│  • Decisions documented within 2 business days                              │
│                                                                              │
│  CHARTER REVIEW                                                              │
│  ──────────────                                                              │
│  Annual review by DT Committee                                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### B.2 Meeting Procedures

| Phase | Activity | Time | Responsibility |
|-------|----------|------|----------------|
| Pre-meeting | Distribute materials | T-5 days | Secretariat |
| Pre-meeting | Collect responses | T-2 days | Secretariat |
| Meeting | Open meeting, confirm quorum | Start | Chair |
| Meeting | Review previous minutes | +5 min | Chair |
| Meeting | Execute agenda | +10 min | Chair/Presenters |
| Meeting | Confirm decisions and actions | -10 min | Chair |
| Meeting | Close meeting | End | Chair |
| Post-meeting | Distribute minutes | +2 days | Secretariat |
| Post-meeting | Track actions | Ongoing | Secretariat |

### B.3 Decision Criteria

| Decision Type | Criteria for Approval |
|---------------|----------------------|
| Standards | Aligned with principles, industry standards considered, impact assessed |
| Dispensation | Business justification valid, risks mitigated, alternatives explored |
| Project | Aligned with roadmap, compliant with standards, resources available |
| Architecture Change | Impact assessed, stakeholders consulted, implementation planned |
| Policy | Legal reviewed (if needed), stakeholder impact assessed |

### B.4 RACI for Common Decisions

| Decision | Chief EA | Board Members | CIO |
|----------|----------|---------------|-----|
| New Technology Standard | Propose | Review/Approve | Approve |
| Minor Dispensation | Approve | Informed | - |
| Major Dispensation | Recommend | Approve | Informed |
| Project Approval | Recommend | Approve | Approve |
| Roadmap Change | Propose | Approve | Approve |
| Policy Change | Propose | Approve | Approve |

---

## APPENDIX C: COMPLIANCE ASSESSMENT QUICK GUIDE

### C.1 Assessment Checklist

**Before Assessment:**
- [ ] Review solution documentation
- [ ] Customize checklist for solution type
- [ ] Schedule review meeting
- [ ] Identify stakeholders to attend

**During Assessment:**
- [ ] Walk through each domain systematically
- [ ] Document findings with evidence
- [ ] Identify compliance status per item
- [ ] Discuss findings with stakeholders

**After Assessment:**
- [ ] Compile findings into report
- [ ] Determine overall compliance status
- [ ] Develop recommendations
- [ ] Review with Chief EA
- [ ] Communicate to stakeholders

### C.2 Scoring Methodology

| Score | Status | Definition |
|-------|--------|------------|
| 100% | Fully Compliant | All requirements met |
| 80-99% | Substantially Compliant | Minor gaps, acceptable |
| 60-79% | Partially Compliant | Moderate gaps, conditions needed |
| <60% | Non-Compliant | Significant gaps, remediation required |

### C.3 Common Findings and Remediation

| Finding | Typical Remediation | Timeline |
|---------|-------------------|----------|
| Missing API documentation | Document APIs per standard | 2 weeks |
| Non-standard integration | Refactor to approved pattern | 4-8 weeks |
| Incomplete data model | Complete data dictionary | 2 weeks |
| Missing security controls | Implement required controls | 4 weeks |
| No BB reuse considered | Evaluate BB options | 2 weeks |

---

## APPENDIX D: DISPENSATION DECISION FRAMEWORK

### D.1 Decision Tree

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DISPENSATION DECISION TREE                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                    ┌──────────────────────┐                                 │
│                    │ Request Submitted    │                                 │
│                    └──────────┬───────────┘                                 │
│                               │                                             │
│                               ▼                                             │
│              ┌────────────────────────────────┐                             │
│              │ Is justification compelling?   │                             │
│              └────────┬───────────────┬───────┘                             │
│                       │ No            │ Yes                                 │
│                       ▼               ▼                                     │
│                   ┌──────┐   ┌────────────────────┐                         │
│                   │Reject│   │Were alternatives   │                         │
│                   └──────┘   │explored?           │                         │
│                              └───────┬───────┬────┘                         │
│                                     │ No    │ Yes                           │
│                                     ▼       ▼                               │
│                              ┌────────┐ ┌────────────────┐                  │
│                              │Return  │ │Is risk         │                  │
│                              │for more│ │acceptable?     │                  │
│                              │analysis│ └───────┬────┬───┘                  │
│                              └────────┘         │ No │ Yes                  │
│                                                 ▼    ▼                      │
│                                          ┌────────┐ ┌──────────┐           │
│                                          │Reject  │ │Is it     │           │
│                                          │or add  │ │temporary?│           │
│                                          │controls│ └────┬───┬─┘           │
│                                          └────────┘      │   │ No          │
│                                                          │Yes│              │
│                                                          ▼   ▼             │
│                                              ┌──────────────────────┐      │
│                                              │APPROVE with:         │      │
│                                              │• Conditions          │      │
│                                              │• Expiry (if temp)    │      │
│                                              │• Monitoring req      │      │
│                                              └──────────────────────┘      │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### D.2 Risk Assessment Criteria

| Factor | Low Risk | Medium Risk | High Risk |
|--------|----------|-------------|-----------|
| Impact Scope | Single system | Multiple systems | Enterprise-wide |
| Data Sensitivity | Non-sensitive | Business-critical | Personal/financial |
| Reversibility | Easily reversed | Moderate effort | Difficult/costly |
| Precedent | Isolated case | Similar situations exist | Sets broad precedent |
| Duration | <6 months | 6-24 months | >24 months or permanent |

### D.3 Standard Conditions

| Condition Type | Example |
|---------------|---------|
| Time-limited | "Dispensation expires on [date]" |
| Monitoring | "Monthly progress report required" |
| Risk mitigation | "Implement compensating control X" |
| Documentation | "Document deviation in system records" |
| Review | "Review with EA at [milestone]" |
| Remediation | "Migrate to compliant solution by [date]" |

---

## APPENDIX E: EA METRICS QUICK REFERENCE

### E.1 KPI Definitions

| KPI | Definition | Formula |
|-----|------------|---------|
| RA Compliance Rate | % of solutions meeting standards | Compliant / Total × 100 |
| First-Time Compliance | % passing review first time | First Pass / Total Submissions × 100 |
| EA Engagement Rate | % of projects with EA involvement | Engaged / Eligible × 100 |
| Dispensation Rate | % requiring exceptions | Dispensations / Reviews × 100 |
| Customer Satisfaction | Average satisfaction score | Sum of Scores / Number of Responses |
| Roadmap Progress | % milestones on schedule | On-time / Total Milestones × 100 |

### E.2 Target Ranges

| KPI | Minimum | Target | Stretch |
|-----|---------|--------|---------|
| RA Compliance Rate | 80% | 90% | 95% |
| First-Time Compliance | 60% | 70% | 80% |
| EA Engagement Rate | 90% | 95% | 98% |
| Dispensation Rate | 15% | 10% | 5% |
| Customer Satisfaction | 3.5 | 4.0 | 4.5 |
| Roadmap Progress | 70% | 80% | 90% |

### E.3 Reporting Templates

**Weekly Operations Report:**
- Service requests received/completed
- Reviews in progress
- Issues requiring attention

**Monthly Governance Report:**
- All KPIs with trends
- Dispensation summary
- Compliance status by project
- Key decisions made

**Quarterly Strategic Report:**
- KPI trends analysis
- Roadmap progress
- Stakeholder satisfaction trends
- Improvement recommendations

---

---

*End of Document*


═══════════════════════════════════════════════════════════════════════════════
# PART VI: MASTER GUIDE & NAVIGATION
═══════════════════════════════════════════════════════════════════════════════


# MASTER TABLE OF CONTENTS

═══════════════════════════════════════════════════════════════════════════════

## PART 1: FRAMEWORK & INTRODUCTION
*Source: GEATDM-WP5-T581-MethodFramework-v1.0.md*

### Section 1: Executive Summary
- The Challenge
- The Solution: GEATDM
- Value Proposition
- Target Outcomes
- Quick Start Guide

### Section 2: Introduction
- 2.1 Purpose of This Guide
- 2.2 Target Audience
- 2.3 How to Use This Guide

### Section 3: Method Overview
- 3.1 GEATDM Method at a Glance
- 3.2 The Five Phases
  - PHASE 1: DISCOVER
  - PHASE 2: ASSESS
  - PHASE 3: ADAPT
  - PHASE 4: PLAN
  - PHASE 5: EXECUTE & GOVERN
- 3.3 Key Concepts
  - Reference Architecture (RA) Approach
  - DPI Integration Model
  - Capability-Driven Architecture
  - GovStack Building Blocks

### Section 4: Method Positioning
- 4.1 Relationship to TOGAF ADM
- 4.2 Relationship to PAERA
- 4.3 Relationship to GovStack

### Section 5: Method Inputs and Outputs
- 5.1 Prerequisites
- 5.2 Key Deliverables
- 5.3 Deliverable Summary by Phase

### Section 6: Success Factors
- 6.1 Critical Success Factors
- 6.2 Common Pitfalls to Avoid
- 6.3 Organizational Readiness Indicators

### Section 7: Document Structure
- 7.1 Guide to Remaining Sections
- 7.2 Cross-Reference to Reference Architectures
- 7.3 Cross-Reference to Templates
- 7.4 Navigation Guide

---

## PART 2: ENTRY POINT TOOLS
*Source: GEATDM-WP5-T582a-EntryPointTools-v1.0.md*

### Section 8: Organization Classification Guide
- 8.1 Introduction to Classification
  - 8.1.1 Purpose and Importance
  - 8.1.2 Why Classification Matters
  - 8.1.3 How Classification Drives RA Selection
  - 8.1.4 Link to DPI Requirements by Organization Type
  - 8.1.5 How to Use This Section
- 8.2 Organization Type Definitions
  - 8.2.1 Policy Development Unit (PDU)
  - 8.2.2 Regulatory Agency (RA)
  - 8.2.3 Service Delivery Authority (SDA)
  - 8.2.4 Organization Type Comparison Table
- 8.3 Classification Decision Tree
- 8.4 Classification Questionnaire
  - 8.4.1 Instructions
  - 8.4.2 Full 30-Question Questionnaire
  - 8.4.3 Scoring Interpretation
  - 8.4.4 Confidence Levels and DPI Implications
- 8.5 Special Cases and Hybrid Organizations
  - 8.5.1 Ministry with Regulatory Function
  - 8.5.2 Small Regulatory Agency
  - 8.5.3 Large Enforcement Agency
  - 8.5.4 Revenue-Generating Regulatory Agency
  - 8.5.5 Multi-Function Organization
  - 8.5.6 Nascent Digital Service Organization
  - 8.5.7 Classification Decision Matrix for Hybrid Cases
- 8.6 Classification Examples
  - 8.6.1 Example Classifications by Country Pattern
  - 8.6.2 Detailed Worked Examples
  - 8.6.3 Classification Documentation Template
- 8.7 Post-Classification: What Happens Next

### Section 9: DPI Readiness Checklist
- 9.1 Introduction to DPI Assessment
  - 9.1.1 What is DPI and Why It Matters
  - 9.1.2 Why DPI Readiness Matters for Organizations
  - 9.1.3 How Organizations Integrate with (Not Build) DPI
  - 9.1.4 Link Between Organization Type and DPI Requirements
- 9.2 DPI Readiness Assessment Framework
  - 9.2.1 Five Pillars Overview
  - 9.2.2 Weighting Rationale
  - 9.2.3 Assessment Process
- 9.3 Pillar 1: Digital Identity
  - 9.3.1 Component Checklist
  - 9.3.2 Critical vs Optional Components by Organization Type
  - 9.3.3 Pillar Scoring
- 9.4 Pillar 2: Interoperability
  - 9.4.1 Component Checklist
  - 9.4.2 Critical vs Optional Components by Organization Type
  - 9.4.3 Pillar Scoring
- 9.5 Pillar 3: Digital Data Infrastructure
  - 9.5.1 Component Checklist
  - 9.5.2 Critical vs Optional Components by Organization Type
  - 9.5.3 Pillar Scoring
- 9.6 Pillar 4: Digital Access
  - 9.6.1 Component Checklist
  - 9.6.2 Critical vs Optional Components by Organization Type
  - 9.6.3 Pillar Scoring
- 9.7 Pillar 5: Governance
  - 9.7.1 Component Checklist
  - 9.7.2 Critical vs Optional Components by Organization Type
  - 9.7.3 Pillar Scoring
- 9.8 Calculating Overall DPI Readiness
  - 9.8.1 Pillar Summary Table
  - 9.8.2 Score Calculation Formula
  - 9.8.3 Worked Example
  - 9.8.4 Readiness Level Determination
- 9.9 DPI Requirements by Organization Type
  - 9.9.1 Full Requirements Matrix
  - 9.9.2 Minimum Viable DPI Summary
  - 9.9.3 Blocking vs Manageable Gaps
- 9.10 Gap Mitigation Strategies
  - 9.10.1 Identity Pillar Gaps
  - 9.10.2 Interoperability Pillar Gaps
  - 9.10.3 Data Infrastructure Gaps
  - 9.10.4 Digital Access Pillar Gaps
  - 9.10.5 Governance Pillar Gaps
- 9.11 DPI Assessment Summary Template
  - 9.11.1 Consolidated Assessment Template
  - 9.11.2 Quick Reference Card
- 9.12 Transition to DISCOVER Phase

---

## PART 3: PHASE GUIDES
*Sources: GEATDM-WP5-T582b, T582c, T582d*

### Section 10: DISCOVER Phase Guide
*Source: GEATDM-WP5-T582b-DiscoverAssess-v1.0.md*

- 10.1 Phase Overview
  - 10.1.1 Purpose of DISCOVER Phase
  - 10.1.2 Why DISCOVER Matters
  - 10.1.3 Inputs from Entry Point Tools
  - 10.1.4 Outputs to ASSESS Phase
  - 10.1.5 Expected Duration
  - 10.1.6 Key Participants
  - 10.1.7 DISCOVER in Context
- 10.2 DISCOVER Process Flow
  - 10.2.1 Visual Process Flow
  - 10.2.2 Activity Summary
- 10.3 Step 1: Confirm Organization Classification
  - 10.3.1 Review Entry Point Classification
  - 10.3.2 Stakeholder Validation Workshop
  - 10.3.3 Classification Dispute Resolution
  - 10.3.4 Final Classification Documentation
- 10.4 Step 2: Confirm DPI Readiness
  - 10.4.1 Review Entry Point DPI Assessment
  - 10.4.2 Verification with National Digital Agency
  - 10.4.3 Update Assessment if Needed
  - 10.4.4 Document DPI Constraints
- 10.5 Step 3: Select Reference Architecture
  - 10.5.1 Match Classification to RA
  - 10.5.2 Determine Implementation Approach
  - 10.5.3 Verify DPI Requirements
  - 10.5.4 Confirm Selection with Stakeholders
- 10.6 Step 4: Document DISCOVER Outputs
  - 10.6.1 Complete DISCOVER Summary
  - 10.6.2 Compile Supporting Evidence
  - 10.6.3 Obtain Sign-off
- 10.7 DISCOVER Deliverables Checklist
- 10.8 Transition to ASSESS Phase
- 10.9 DISCOVER Templates

### Section 11: ASSESS Phase Guide
*Source: GEATDM-WP5-T582b-DiscoverAssess-v1.0.md*

- 11.1 Phase Overview
  - 11.1.1 Purpose of ASSESS Phase
  - 11.1.2 Why ASSESS Matters
  - 11.1.3 Inputs from DISCOVER Phase
  - 11.1.4 Outputs to ADAPT Phase
  - 11.1.5 Expected Duration
  - 11.1.6 Key Participants
- 11.2 ASSESS Process Flow
  - 11.2.1 Visual Process Flow
  - 11.2.2 Activity Summary
- 11.3 Using the Reference Architecture as Assessment Framework
  - 11.3.1 RA as AS-IS Template
  - 11.3.2 Domain Coverage
  - 11.3.3 Assessment Depth
- 11.4 Step 1: Document AS-IS Business Architecture
  - 11.4.1 Business Model Canvas
  - 11.4.2 Stakeholder Analysis
  - 11.4.3 Service Catalog
  - 11.4.4 Capability Assessment
  - 11.4.5 Process Documentation
- 11.5 Step 2: Document AS-IS Application Architecture
  - 11.5.1 Application Inventory
  - 11.5.2 Integration Mapping
  - 11.5.3 Application Assessment
- 11.6 Step 3: Document AS-IS Data Architecture
  - 11.6.1 Data Entity Inventory
  - 11.6.2 Data Flow Documentation
  - 11.6.3 Data Quality Assessment
- 11.7 Step 4: Document AS-IS Technology Architecture
  - 11.7.1 Infrastructure Inventory
  - 11.7.2 Platform Assessment
  - 11.7.3 Security Posture
- 11.8 Step 5: Compare AS-IS to Reference Architecture
  - 11.8.1 Capability Comparison
  - 11.8.2 Application Comparison
  - 11.8.3 Data Comparison
  - 11.8.4 Technology Comparison
- 11.9 Step 6: Identify and Prioritize Gaps
  - 11.9.1 Gap Identification Methods
  - 11.9.2 Gap Categorization
  - 11.9.3 Gap Prioritization
- 11.10 Step 7: Document ASSESS Results
  - 11.10.1 Gap Analysis Report
  - 11.10.2 ASSESS Summary
- 11.11 Gap Analysis Framework
  - 11.11.1 Gap Types
  - 11.11.2 Prioritization Matrix
  - 11.11.3 Gap Resolution Options
- 11.12 ASSESS Deliverables Checklist
- 11.13 Transition to ADAPT Phase
- 11.14 ASSESS Templates

### Section 12: ADAPT Phase Guide
*Source: GEATDM-WP5-T582c-AdaptPlan-v1.0.md*

- 12.1 Phase Overview
  - 12.1.1 Purpose of ADAPT Phase
  - 12.1.2 Why ADAPT Matters
  - 12.1.3 Inputs from ASSESS Phase
  - 12.1.4 Outputs to PLAN Phase
  - 12.1.5 Expected Duration
  - 12.1.6 Key Participants
- 12.2 ADAPT Process Flow
  - 12.2.1 Visual Process Flow
  - 12.2.2 Activity Summary
- 12.3 Step 1: Review Gap Analysis Results
  - 12.3.1 Gap Validation
  - 12.3.2 Priority Confirmation
- 12.4 Step 2: Determine Adaptation Scope
  - 12.4.1 Minimal Adaptation
  - 12.4.2 Moderate Adaptation
  - 12.4.3 Extensive Adaptation
- 12.5 Step 3: Tailor Capabilities
  - 12.5.1 Capability Selection
  - 12.5.2 Capability Customization
  - 12.5.3 Capability Documentation
- 12.6 Step 4: Tailor Applications
  - 12.6.1 Build/Buy/Reuse Decisions
  - 12.6.2 Application Selection
  - 12.6.3 Integration Design
- 12.7 Step 5: Tailor Data Architecture
  - 12.7.1 Data Entity Tailoring
  - 12.7.2 Data Flow Adaptation
  - 12.7.3 Data Governance Customization
- 12.8 Step 6: Tailor Technology
  - 12.8.1 Platform Tier Selection
  - 12.8.2 Infrastructure Decisions
  - 12.8.3 Security Architecture
- 12.9 Step 7: Create TO-BE Architecture Document
  - 12.9.1 TO-BE Business Architecture
  - 12.9.2 TO-BE Application Architecture
  - 12.9.3 TO-BE Data Architecture
  - 12.9.4 TO-BE Technology Architecture
- 12.10 Step 8: Define Transition Requirements
  - 12.10.1 Transition State Analysis
  - 12.10.2 Migration Requirements
  - 12.10.3 Dependency Mapping
- 12.11 Tailoring Guidelines
  - 12.11.1 When to Tailor
  - 12.11.2 How to Tailor
  - 12.11.3 Documentation Requirements
- 12.12 RA Integrity Protection
  - 12.12.1 Core vs Flexible Elements
  - 12.12.2 Deviation Justification
  - 12.12.3 Impact Assessment
- 12.13 ADAPT Deliverables Checklist
- 12.14 Transition to PLAN Phase
- 12.15 ADAPT Templates

### Section 13: PLAN Phase Guide
*Source: GEATDM-WP5-T582c-AdaptPlan-v1.0.md*

- 13.1 Phase Overview
  - 13.1.1 Purpose of PLAN Phase
  - 13.1.2 Why PLAN Matters
  - 13.1.3 Inputs from ADAPT Phase
  - 13.1.4 Outputs to EXECUTE Phase
  - 13.1.5 Expected Duration
  - 13.1.6 Key Participants
- 13.2 PLAN Process Flow
  - 13.2.1 Visual Process Flow
  - 13.2.2 Activity Summary
- 13.3 Step 1: Define Implementation Approach
  - 13.3.1 Big Bang Approach
  - 13.3.2 Phased Approach
  - 13.3.3 Incremental Approach
  - 13.3.4 Approach Selection Criteria
- 13.4 Step 2: Sequence Initiatives
  - 13.4.1 Dependency Analysis
  - 13.4.2 Value-Based Sequencing
  - 13.4.3 Risk-Based Sequencing
- 13.5 Step 3: Define Phases and Milestones
  - 13.5.1 Phase Definition
  - 13.5.2 Milestone Setting
  - 13.5.3 Exit Criteria
- 13.6 Step 4: Estimate Resources and Timeline
  - 13.6.1 Resource Estimation
  - 13.6.2 Timeline Development
  - 13.6.3 Budget Planning
- 13.7 Step 5: Develop Business Case
  - 13.7.1 Cost Analysis
  - 13.7.2 Benefit Analysis
  - 13.7.3 ROI Calculation
  - 13.7.4 Risk Assessment
- 13.8 Step 6: Identify Risks and Dependencies
  - 13.8.1 Risk Identification
  - 13.8.2 Risk Assessment
  - 13.8.3 Dependency Mapping
- 13.9 Step 7: Create Implementation Roadmap
  - 13.9.1 Roadmap Visualization
  - 13.9.2 Phase Details
  - 13.9.3 Integration Points
- 13.10 Step 8: Obtain Approval
  - 13.10.1 Stakeholder Review
  - 13.10.2 Governance Approval
  - 13.10.3 Funding Authorization
- 13.11 Roadmap Patterns by Organization Type
  - 13.11.1 PDU Roadmap Pattern
  - 13.11.2 RA Roadmap Pattern
  - 13.11.3 SDA Roadmap Pattern
- 13.12 Decision Gates Framework
  - 13.12.1 Gate Structure
  - 13.12.2 Gate Criteria
  - 13.12.3 Gate Governance
- 13.13 Quick Wins Identification
  - 13.13.1 Quick Win Criteria
  - 13.13.2 Quick Win Examples
- 13.14 PLAN Deliverables Checklist
- 13.15 Transition to EXECUTE Phase
- 13.16 PLAN Templates

### Section 14: EXECUTE & GOVERN Phase Guide
*Source: GEATDM-WP5-T582d-ExecuteGovern-v1.0.md*

- 14.1 Phase Overview
  - 14.1.1 Purpose
  - 14.1.2 Transition from PLAN Phase
  - 14.1.3 Phase Objectives
  - 14.1.4 Duration and Scope
  - 14.1.5 Key Participants
  - 14.1.6 Four Activity Streams
  - 14.1.7 Inputs from PLAN Phase
  - 14.1.8 Key Outputs
- 14.2 EXECUTE & GOVERN Process Flow
  - 14.2.1 Continuous Cycle Overview
  - 14.2.2 Activity Integration
- 14.3 EXECUTE Activities
  - 14.3.1 Project Initiation Support
  - 14.3.2 Architecture Guidance
  - 14.3.3 Solution Design Review
  - 14.3.4 DPI Integration Support
  - 14.3.5 Implementation Monitoring
- 14.4 ENGAGE Activities
  - 14.4.1 Stakeholder Communication
  - 14.4.2 Training and Awareness
  - 14.4.3 Architecture Consultation
  - 14.4.4 Change Management Support
- 14.5 GOVERN Activities
  - 14.5.1 Architecture Board Operation
  - 14.5.2 Compliance Monitoring
  - 14.5.3 Standards Management
  - 14.5.4 Decision Documentation
- 14.6 IMPROVE Activities
  - 14.6.1 Lessons Learned Capture
  - 14.6.2 Reference Architecture Updates
  - 14.6.3 Process Improvement
  - 14.6.4 Capability Development
- 14.7 EA Services Catalog
  - 14.7.1 Advisory Services
  - 14.7.2 Review Services
  - 14.7.3 Governance Services
  - 14.7.4 Support Services
- 14.8 Governance Framework Summary
  - 14.8.1 Governance Structure
  - 14.8.2 Roles and Responsibilities
  - 14.8.3 Decision Rights
- 14.9 Architecture Compliance Process
  - 14.9.1 Compliance Assessment
  - 14.9.2 Compliance Levels
  - 14.9.3 Non-Compliance Handling
- 14.10 Dispensation Process
  - 14.10.1 Dispensation Criteria
  - 14.10.2 Request Process
  - 14.10.3 Approval Workflow
  - 14.10.4 Tracking and Expiry
- 14.11 Continuous Improvement Cycle
  - 14.11.1 Improvement Identification
  - 14.11.2 Improvement Prioritization
  - 14.11.3 Improvement Implementation
- 14.12 EA Effectiveness Metrics
  - 14.12.1 Process Metrics
  - 14.12.2 Outcome Metrics
  - 14.12.3 Health Indicators
- 14.13 EXECUTE & GOVERN Deliverables
- 14.14 Cycle Completion and Refresh
  - 14.14.1 Annual Review
  - 14.14.2 Roadmap Refresh
  - 14.14.3 Method Evolution
- 14.15 EXECUTE & GOVERN Templates

---

## PART 4: APPENDICES

### Appendix A: Master Glossary
### Appendix B: Abbreviations
### Appendix C: Template Index
### Appendix D: Cross-Reference Matrix
### Appendix E: Document References
### Appendix F: Document Control

═══════════════════════════════════════════════════════════════════════════════

---

# SECTION CROSS-REFERENCE GUIDE

## Navigation by Topic

### "I want to..."

| If you want to... | Go to... | Section |
|-------------------|----------|---------|
| Understand the overall method | Method Overview | 3 |
| Know how GEATDM relates to TOGAF | TOGAF Relationship | 4.1 |
| Know how GEATDM relates to PAERA | PAERA Relationship | 4.2 |
| Know how GEATDM relates to GovStack | GovStack Integration | 4.3 |
| Classify my organization | Classification Guide | 8 |
| Use the classification questionnaire | 30-Question Questionnaire | 8.4.2 |
| Handle a hybrid organization | Special Cases | 8.5 |
| Check if national DPI is ready | DPI Checklist | 9 |
| Assess a specific DPI pillar | Pillar Checklists | 9.3-9.7 |
| Calculate DPI readiness score | Score Calculation | 9.8 |
| Understand DPI requirements by org type | Requirements Matrix | 9.9 |
| Plan for DPI gaps | Gap Mitigation | 9.10 |
| Start the DISCOVER phase | DISCOVER Guide | 10 |
| Document current state | ASSESS Guide | 11 |
| Perform gap analysis | Gap Analysis Framework | 11.11 |
| Create target architecture | ADAPT Guide | 12 |
| Understand tailoring guidelines | Tailoring Guidelines | 12.11 |
| Protect RA integrity | RA Integrity Protection | 12.12 |
| Develop implementation roadmap | PLAN Guide | 13 |
| Build a business case | Business Case Development | 13.7 |
| Identify quick wins | Quick Wins | 13.13 |
| Implement and govern architecture | EXECUTE & GOVERN Guide | 14 |
| Set up governance structures | Governance Framework | 14.8 |
| Handle architecture exceptions | Dispensation Process | 14.10 |
| Measure EA effectiveness | EA Metrics | 14.12 |
| Find a specific template | Template Index | Appendix C |
| Look up a term | Glossary | Appendix A |

## Phase Transition References

### Entry Point Tools → DISCOVER

| Output from Entry Point | Used in DISCOVER |
|-------------------------|------------------|
| Classification Record (Section 8.6.3) | Confirm Classification (Section 10.3) |
| DPI Assessment (Section 9.11) | Confirm DPI Readiness (Section 10.4) |
| Combined Decision (Section 9.12) | Select Reference Architecture (Section 10.5) |

### DISCOVER → ASSESS

| Output from DISCOVER | Used in ASSESS |
|----------------------|----------------|
| Confirmed Classification | RA Selection as Assessment Framework (Section 11.3) |
| Selected Reference Architecture | AS-IS Documentation Template (Section 11.4-11.7) |
| DPI Constraints | Integration Assessment Focus (Section 11.5) |

### ASSESS → ADAPT

| Output from ASSESS | Used in ADAPT |
|--------------------|---------------|
| Gap Analysis Report (Section 11.10) | Review Gap Analysis (Section 12.3) |
| Prioritized Gap Register | Determine Adaptation Scope (Section 12.4) |
| AS-IS Architecture | Baseline for TO-BE Development (Section 12.9) |

### ADAPT → PLAN

| Output from ADAPT | Used in PLAN |
|-------------------|--------------|
| TO-BE Architecture (Section 12.9) | Initiative Definition (Section 13.4) |
| Tailoring Decision Log | Business Case Input (Section 13.7) |
| Transition Requirements (Section 12.10) | Sequencing Input (Section 13.4) |

### PLAN → EXECUTE

| Output from PLAN | Used in EXECUTE |
|------------------|-----------------|
| Implementation Roadmap (Section 13.9) | Project Execution (Section 14.3) |
| Business Case (Section 13.7) | Benefits Tracking (Section 14.12) |
| Governance Structure | Board Operation (Section 14.5) |

---

# READING PATH RECOMMENDATIONS

## Path 1: Sequential Reading (First-Time Users)

**Recommended for:** New EA practitioners, first-time GEATDM users

**Duration:** ~4-6 hours total

```
Executive Summary (Section 1) → Introduction (Section 2) → Method Overview (Section 3)
    │
    ▼
Method Positioning (Section 4) → Inputs/Outputs (Section 5) → Success Factors (Section 6)
    │
    ▼
Classification Guide (Section 8) → DPI Checklist (Section 9)
    │
    ▼
DISCOVER (Section 10) → ASSESS (Section 11) → ADAPT (Section 12)
    │
    ▼
PLAN (Section 13) → EXECUTE & GOVERN (Section 14)
```

## Path 2: Executive Overview (Leadership)

**Recommended for:** CIOs, CTOs, Digital Transformation Leaders

**Duration:** ~1 hour

```
Executive Summary (Section 1)
    │
    ├── Value Proposition (Section 1)
    ├── Quick Start Guide (Section 1)
    │
    ▼
Method Overview (Section 3.1-3.2) → Success Factors (Section 6)
    │
    ▼
Business Case Framework (Section 13.7) → EA Effectiveness Metrics (Section 14.12)
```

## Path 3: Technical Implementation (IT Architects)

**Recommended for:** Solution Architects, IT Managers

**Duration:** ~2-3 hours

```
Method Overview (Section 3.3) - Key Concepts
    │
    ├── Reference Architecture Approach
    ├── DPI Integration Model
    ├── Building Blocks
    │
    ▼
DPI Checklist (Section 9) - Technical Assessment
    │
    ▼
ASSESS Phase (Section 11) → ADAPT Phase (Section 12)
    │
    ├── Application Tailoring (Section 12.6)
    ├── Technology Tailoring (Section 12.8)
    │
    ▼
EXECUTE Phase (Section 14.3) → Architecture Compliance (Section 14.9)
```

## Path 4: Project Manager Path

**Recommended for:** Project Managers, Program Managers

**Duration:** ~2 hours

```
Method Overview (Section 3.1-3.2) - Understand Phases
    │
    ▼
PLAN Phase (Section 13) - Complete Section
    │
    ├── Implementation Approach (Section 13.3)
    ├── Sequencing (Section 13.4)
    ├── Timeline/Resources (Section 13.6)
    ├── Risk Management (Section 13.8)
    │
    ▼
Decision Gates (Section 13.12) → EXECUTE Phase Overview (Section 14.1-14.2)
```

## Path 5: Quick Classification

**Recommended for:** Quick organization typing

**Duration:** ~30 minutes

```
Classification Overview (Section 8.1) → Decision Tree (Section 8.3)
    │
    ▼
[If borderline] → Questionnaire (Section 8.4)
    │
    ▼
[If special case] → Special Cases (Section 8.5)
    │
    ▼
Post-Classification (Section 8.7) → DPI Quick Reference (Appendix B in T582a)
```

## Path 6: DPI Assessment Focus

**Recommended for:** DPI readiness evaluation

**Duration:** ~1-2 hours

```
DPI Introduction (Section 9.1)
    │
    ▼
Five Pillars Assessment (Sections 9.3-9.7)
    │
    ├── Identity Pillar (Section 9.3)
    ├── Interoperability Pillar (Section 9.4)
    ├── Data Infrastructure Pillar (Section 9.5)
    ├── Digital Access Pillar (Section 9.6)
    ├── Governance Pillar (Section 9.7)
    │
    ▼
Score Calculation (Section 9.8) → Gap Mitigation (Section 9.10)
```

## Path 7: Governance Focus

**Recommended for:** EA Governance setup

**Duration:** ~1.5 hours

```
Success Factors (Section 6) - Governance Pitfalls
    │
    ▼
EXECUTE & GOVERN Overview (Section 14.1)
    │
    ▼
Governance Framework (Section 14.8) → Architecture Board (Section 14.5)
    │
    ▼
Compliance Process (Section 14.9) → Dispensation Process (Section 14.10)
    │
    ▼
EA Effectiveness Metrics (Section 14.12)
```

---

# APPENDIX A: MASTER GLOSSARY

*Consolidated from all sections, alphabetically ordered*

| Term | Definition | Source Section |
|------|------------|----------------|
| **ABB** | Architecture Building Block - A reusable architectural element that can be combined with other building blocks to create solutions | 3.3, Definitions |
| **ADAPT Phase** | Phase 3 of GEATDM that tailors the Reference Architecture to organization context and creates the TO-BE architecture | 3.2, 12 |
| **Application Architecture** | The description of an organization's applications and their relationships to business processes | 3.3, Definitions |
| **Application Component** | The actual software that delivers application functionality; a deployable unit providing specific capabilities | Definitions |
| **Architecture Board** | Governance body responsible for architecture decisions, exception handling, and compliance oversight | 14.5, 14.8 |
| **AS-IS Architecture** | The current state of the organization's architecture across all domains | 3.2, 11 |
| **ASSESS Phase** | Phase 2 of GEATDM that documents current state architecture and identifies gaps against Reference Architecture | 3.2, 11 |
| **BDAT** | Business, Data, Application, Technology - the four architecture domains | 3.3, 11 |
| **Building Block (BB)** | Reusable software component per GovStack specifications | 3.3, 4.3 |
| **Business Architecture** | The architectural layer addressing customers, services, processes, regulations, KPIs, organization structure | 3.3, Definitions |
| **Business Case** | Investment justification document with costs, benefits, ROI analysis | 13.7 |
| **Capability** | An organizational ability to perform a particular kind of work and achieve specific outcomes | 3.3, Definitions |
| **Classification** | Process of determining organization type (PDU/RA/SDA) | 8 |
| **Compliance** | Adherence to architecture standards, principles, and Reference Architecture | 14.9 |
| **Data Architecture** | The documentation and management of an organization's data assets | 3.3, Definitions |
| **Decision Gate** | Checkpoint in implementation roadmap where go/no-go decisions are made | 13.12 |
| **DISCOVER Phase** | Phase 1 of GEATDM that establishes classification, DPI readiness, and RA selection | 3.2, 10 |
| **Dispensation** | Approved deviation from architecture standards with documented rationale | 14.10 |
| **DPI** | Digital Public Infrastructure - national-level shared digital services | 3.3, 9 |
| **DPI Pillar** | One of five assessment areas: Identity, Interoperability, Data, Access, Governance | 9.2 |
| **DPI Readiness Level** | Assessment result: Level 1 (Foundational), Level 2 (Developing), Level 3 (Ready) | 9.8 |
| **EA** | Enterprise Architecture | Throughout |
| **EA Services** | Capabilities provided by EA function: advisory, review, governance, support | 14.7 |
| **EXECUTE & GOVERN Phase** | Phase 5 of GEATDM covering implementation support and ongoing governance | 3.2, 14 |
| **Gap** | Difference between AS-IS state and Reference Architecture/TO-BE target | 11.9, 11.11 |
| **Gap Analysis** | Systematic comparison of current state to target state to identify differences | 11.8-11.10 |
| **GEATDM** | Generic EA Target Architecture Development Method | Throughout |
| **GovStack** | Initiative providing Building Block specifications for digital government | 3.3, 4.3 |
| **Hybrid Organization** | Organization with characteristics of multiple types (PDU/RA/SDA) | 8.5 |
| **Implementation Roadmap** | Visual plan showing phases, milestones, and sequencing of transformation | 13.9 |
| **Interoperability** | Ability of systems to exchange data and work together | 9.4 |
| **Metamodel** | Framework defining entities for capturing, storing, and representing architectural concepts | Definitions |
| **PAERA** | Public Administration Ecosystem Reference Architecture | 4.2 |
| **PDU** | Policy Development Unit - policy-focused organization type | 8.2.1 |
| **Phase** | Major stage in GEATDM method (DISCOVER, ASSESS, ADAPT, PLAN, EXECUTE) | 3.2 |
| **PLAN Phase** | Phase 4 of GEATDM that develops implementation roadmap and business case | 3.2, 13 |
| **Platform Tier** | Technology complexity level: Basic, Standard, Enterprise | 12.8 |
| **Quick Win** | High-value, low-effort initiative for early implementation | 13.13 |
| **RA (Organization Type)** | Regulatory Agency - sector regulation organization type | 8.2.2 |
| **RA (Artifact)** | Reference Architecture - template architecture document | 3.3, 7.2 |
| **Reference Architecture** | Pre-built architecture template for specific organization type | 3.3 |
| **SBB** | Solution Building Block - specific implementation of an ABB | Definitions |
| **SDA** | Service Delivery Authority - high-volume service organization type | 8.2.3 |
| **Tailoring** | Process of adapting Reference Architecture to organization context | 12.5-12.8, 12.11 |
| **Technology Architecture** | Description of computing, networking, storage, and infrastructure | 3.3, Definitions |
| **TO-BE Architecture** | The target/future state of the organization's architecture | 3.2, 12.9 |
| **TOGAF** | The Open Group Architecture Framework | 4.1 |
| **Transition Requirements** | Specifications for moving from AS-IS to TO-BE state | 12.10 |

---

# APPENDIX B: ABBREVIATIONS

| Abbreviation | Full Form |
|--------------|-----------|
| ABB | Architecture Building Block |
| ADM | Architecture Development Method (TOGAF) |
| API | Application Programming Interface |
| AS-IS | Current State Architecture |
| BB | Building Block |
| BDAT | Business, Data, Application, Technology |
| CIO | Chief Information Officer |
| CTO | Chief Technology Officer |
| DPI | Digital Public Infrastructure |
| DRP | Disaster Recovery Plan |
| EA | Enterprise Architecture |
| EAO | Enterprise Architecture Office |
| ESB | Enterprise Service Bus |
| GDPR | General Data Protection Regulation |
| GEATDM | Generic EA Target Architecture Development Method |
| ISO | International Organization for Standardization |
| IT | Information Technology |
| KPI | Key Performance Indicator |
| MDM | Master Data Management |
| MFA | Multi-Factor Authentication |
| ML | Machine Learning |
| MoU | Memorandum of Understanding |
| NIF | National Interoperability Framework |
| PAERA | Public Administration Ecosystem Reference Architecture |
| PDU | Policy Development Unit |
| PKI | Public Key Infrastructure |
| RA | Regulatory Agency (organization type) |
| RA | Reference Architecture (artifact) |
| REST | Representational State Transfer |
| ROI | Return on Investment |
| RPO | Recovery Point Objective |
| RTO | Recovery Time Objective |
| SBB | Solution Building Block |
| SDA | Service Delivery Authority |
| SLA | Service Level Agreement |
| SOA | Service-Oriented Architecture |
| SSO | Single Sign-On |
| TLS | Transport Layer Security |
| TO-BE | Target State Architecture |
| TOGAF | The Open Group Architecture Framework |
| TSP | Trust Service Provider |
| WCAG | Web Content Accessibility Guidelines |
| XML | Extensible Markup Language |

---

# APPENDIX C: TEMPLATE INDEX

## Templates by Section

### Section 8: Classification Guide

| Template | Purpose | Location |
|----------|---------|----------|
| Classification Questionnaire | 30-question scoring questionnaire for organization typing | Section 8.4.2 |
| Classification Documentation Template | Record classification decision with rationale | Section 8.6.3 |

### Section 9: DPI Readiness Checklist

| Template | Purpose | Location |
|----------|---------|----------|
| Digital Identity Pillar Checklist | Assess identity infrastructure readiness | Section 9.3.1 |
| Interoperability Pillar Checklist | Assess data exchange readiness | Section 9.4.1 |
| Data Infrastructure Pillar Checklist | Assess data governance readiness | Section 9.5.1 |
| Digital Access Pillar Checklist | Assess connectivity and channels | Section 9.6.1 |
| Governance Pillar Checklist | Assess digital governance readiness | Section 9.7.1 |
| DPI Assessment Summary Template | Consolidated DPI readiness summary | Section 9.11.1 |
| DPI Quick Reference Card | One-page DPI assessment summary | Section 9.11.2 |

### Section 10: DISCOVER Phase

| Template | Purpose | Location |
|----------|---------|----------|
| DISCOVER Summary Template | Phase completion documentation | Section 10.9 |
| RA Selection Decision Template | Document Reference Architecture selection | Section 10.9 |
| Stakeholder Sign-off Form | Approval documentation | Section 10.9 |

### Section 11: ASSESS Phase

| Template | Purpose | Location |
|----------|---------|----------|
| AS-IS Architecture Template | Current state documentation structure | Section 11.14 |
| Business Architecture Assessment | Business domain documentation | Section 11.14 |
| Application Inventory Template | Application listing and assessment | Section 11.14 |
| Data Entity Inventory | Data documentation template | Section 11.14 |
| Technology Assessment Template | Infrastructure documentation | Section 11.14 |
| Gap Analysis Template | Gap identification and prioritization | Section 11.14 |
| Gap Register Template | Prioritized gap tracking | Section 11.14 |
| ASSESS Summary Template | Phase completion documentation | Section 11.14 |

### Section 12: ADAPT Phase

| Template | Purpose | Location |
|----------|---------|----------|
| Tailoring Decision Log | Track customization decisions | Section 12.15 |
| TO-BE Architecture Template | Target state documentation | Section 12.15 |
| Capability Tailoring Worksheet | Document capability adaptations | Section 12.15 |
| Build/Buy/Reuse Decision Matrix | Application sourcing decisions | Section 12.15 |
| Transition Requirements Template | Migration specifications | Section 12.15 |
| ADAPT Summary Template | Phase completion documentation | Section 12.15 |

### Section 13: PLAN Phase

| Template | Purpose | Location |
|----------|---------|----------|
| Implementation Roadmap Template | Visual planning document | Section 13.16 |
| Business Case Template | Investment justification | Section 13.16 |
| Phase Definition Template | Phase details and milestones | Section 13.16 |
| Resource Plan Template | Team and budget planning | Section 13.16 |
| Risk Register Template | Risk identification and tracking | Section 13.16 |
| Decision Gate Checklist | Gate criteria verification | Section 13.16 |
| Quick Win Assessment Template | Early initiative identification | Section 13.16 |
| PLAN Summary Template | Phase completion documentation | Section 13.16 |

### Section 14: EXECUTE & GOVERN Phase

| Template | Purpose | Location |
|----------|---------|----------|
| Architecture Compliance Checklist | Solution review criteria | Section 14.15 |
| Dispensation Request Form | Exception request documentation | Section 14.15 |
| Architecture Decision Record | Decision documentation | Section 14.15 |
| EA Services Request Form | Service engagement | Section 14.15 |
| Lessons Learned Template | Implementation insights | Section 14.15 |
| EA Effectiveness Dashboard | KPI tracking | Section 14.15 |
| Architecture Board Meeting Agenda | Governance meeting structure | Section 14.15 |

## Templates by Category

### Assessment Templates

| Template | Section |
|----------|---------|
| Classification Questionnaire | 8.4.2 |
| DPI Pillar Checklists (5) | 9.3-9.7 |
| DPI Assessment Summary | 9.11.1 |
| AS-IS Architecture Template | 11.14 |
| Gap Analysis Template | 11.14 |
| Architecture Compliance Checklist | 14.15 |

### Planning Templates

| Template | Section |
|----------|---------|
| Implementation Roadmap Template | 13.16 |
| Business Case Template | 13.16 |
| Phase Definition Template | 13.16 |
| Resource Plan Template | 13.16 |
| Risk Register Template | 13.16 |

### Decision Templates

| Template | Section |
|----------|---------|
| Classification Documentation | 8.6.3 |
| RA Selection Decision | 10.9 |
| Tailoring Decision Log | 12.15 |
| Build/Buy/Reuse Decision Matrix | 12.15 |
| Architecture Decision Record | 14.15 |
| Dispensation Request Form | 14.15 |

### Documentation Templates

| Template | Section |
|----------|---------|
| DISCOVER Summary | 10.9 |
| ASSESS Summary | 11.14 |
| TO-BE Architecture | 12.15 |
| ADAPT Summary | 12.15 |
| PLAN Summary | 13.16 |
| Lessons Learned | 14.15 |

---

# APPENDIX D: CROSS-REFERENCE MATRIX

## Phase-to-Phase Cross-References

| From Phase | To Phase | Key Outputs → Inputs |
|------------|----------|----------------------|
| Entry Point Tools | DISCOVER | Classification → Confirmation; DPI Assessment → Verification |
| DISCOVER | ASSESS | Selected RA → Assessment Framework; DPI Constraints → Focus Areas |
| ASSESS | ADAPT | Gap Analysis → Tailoring Scope; AS-IS → TO-BE Baseline |
| ADAPT | PLAN | TO-BE Architecture → Initiative Definition; Transitions → Sequencing |
| PLAN | EXECUTE | Roadmap → Project Execution; Business Case → Benefits Tracking |

## Tool-to-Phase Cross-References

| Tool/Template | Used In Phases | Purpose |
|---------------|----------------|---------|
| Classification Questionnaire | Entry Point, DISCOVER | Organization typing |
| DPI Checklist | Entry Point, DISCOVER | Infrastructure assessment |
| Reference Architectures | DISCOVER, ASSESS, ADAPT | Standard templates |
| Gap Analysis Framework | ASSESS | Identifying differences |
| Tailoring Guidelines | ADAPT | Customization guidance |
| Business Case Template | PLAN | Investment justification |
| Compliance Checklist | EXECUTE | Solution review |
| Dispensation Form | EXECUTE | Exception handling |

## Concept-to-Section Cross-References

| Concept | Primary Section | Related Sections |
|---------|-----------------|------------------|
| Organization Types (PDU/RA/SDA) | 8.2 | 3.3, 9.9, 12.4, 13.11 |
| DPI Pillars | 9.3-9.7 | 3.3, 9.9, 10.4 |
| Reference Architecture | 3.3 | 7.2, 10.5, 11.3, 12 |
| Capabilities | 3.3 | 11.4, 12.5 |
| Building Blocks | 3.3, 4.3 | 12.6 |
| Gap Analysis | 11.8-11.11 | 12.3 |
| Tailoring | 12.5-12.8, 12.11 | 12.12 |
| Business Case | 13.7 | 14.12 |
| Governance | 14.5, 14.8 | 6.1, 13.12 |
| Compliance | 14.9 | 14.5, 14.10 |
| Dispensation | 14.10 | 14.5, 14.9 |
| EA Metrics | 14.12 | 14.11 |

## Reference Architecture Cross-References

| RA Document | GEATDM Section | Usage |
|-------------|----------------|-------|
| PDU RA (GEATDM-WP2-T25) | 10.5, 11.3 | Template for PDU organizations |
| RA RA (GEATDM-WP3-T35) | 10.5, 11.3 | Template for Regulatory Agencies |
| SDA RA (GEATDM-WP4-T47) | 10.5, 11.3 | Template for Service Delivery Authorities |

---

# APPENDIX E: DOCUMENT REFERENCES

## GEATDM Document Suite

### Foundation Documents (WP0)

| Document ID | Title | Description |
|-------------|-------|-------------|
| GEATDM-WP0-T01 | Master Context | Project context and foundational concepts |
| GEATDM-WP0-T02 | RA Template | Standard Reference Architecture structure |
| GEATDM-WP0-T03 | Definitions | Key definitions and glossary |
| GEATDM-WP0-T05 | Research Summary | Research and benchmarking insights |

### Generic EA Framework (WP1)

| Document ID | Title | Description |
|-------------|-------|-------------|
| GEATDM-WP1-T11 | EA Metamodel | Architecture metamodel definition |
| GEATDM-WP1-T12 | EA Principles | Architectural principles |
| GEATDM-WP1-T13 | EA Governance | Governance framework |
| GEATDM-WP1-T14 | EA Services | EA services catalog |

### Reference Architectures (WP2-4)

| Document ID | Title | Description |
|-------------|-------|-------------|
| GEATDM-WP2-T25 | PDU RA Complete | Policy Development Unit Reference Architecture |
| GEATDM-WP3-T35 | RA RA Complete | Regulatory Agency Reference Architecture |
| GEATDM-WP4-T47 | SDA RA Complete | Service Delivery Authority Reference Architecture |

### Application Method Guide (WP5)

| Document ID | Title | Description |
|-------------|-------|-------------|
| GEATDM-WP5-T51 | Classification Guide | Organization classification methodology |
| GEATDM-WP5-T52 | DPI Checklist | DPI readiness assessment |
| GEATDM-WP5-T53 | DISCOVER Guide | Phase 1 detailed guide |
| GEATDM-WP5-T54 | ASSESS Guide | Phase 2 detailed guide |
| GEATDM-WP5-T55 | ADAPT Guide | Phase 3 detailed guide |
| GEATDM-WP5-T56 | PLAN Guide | Phase 4 detailed guide |
| GEATDM-WP5-T57 | EXECUTE Guide | Phase 5 detailed guide |
| GEATDM-WP5-T581 | Method Framework | Integrated framework (Sections 1-7) |
| GEATDM-WP5-T582a | Entry Point Tools | Integrated tools (Sections 8-9) |
| GEATDM-WP5-T582b | DISCOVER & ASSESS | Integrated phases (Sections 10-11) |
| GEATDM-WP5-T582c | ADAPT & PLAN | Integrated phases (Sections 12-13) |
| GEATDM-WP5-T582d | EXECUTE & GOVERN | Integrated phase (Section 14) |
| GEATDM-WP5-T582e | Master Guide | This document |

## External References

### Frameworks and Standards

| Reference | Description | URL |
|-----------|-------------|-----|
| TOGAF | The Open Group Architecture Framework | https://www.opengroup.org/togaf |
| GovStack | Digital Public Infrastructure Building Blocks | https://govstack.global |
| PAERA | Public Administration Ecosystem Reference Architecture | https://paera.govstack.global |

### Related Standards

| Standard | Description |
|----------|-------------|
| ISO 27001 | Information Security Management |
| ISO 38500 | IT Governance |
| WCAG 2.1 | Web Content Accessibility Guidelines |
| REST/OpenAPI | API Design Standards |

---

# APPENDIX F: DOCUMENT CONTROL

## Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-20 | GEATDM Team | Initial assembly of complete Application Method Guide |

## Document Assembly Log

| Component | Version | Integration Date | Status |
|-----------|---------|------------------|--------|
| T581 Method Framework | 1.0 | 2026-01-19 | Integrated |
| T582a Entry Point Tools | 1.0 | 2026-01-19 | Integrated |
| T582b DISCOVER & ASSESS | 1.0 | 2026-01-19 | Integrated |
| T582c ADAPT & PLAN | 1.0 | 2026-01-20 | Integrated |
| T582d EXECUTE & GOVERN | 1.0 | 2026-01-20 | Integrated |
| T582e Master Guide | 1.0 | 2026-01-20 | This document |

## Quality Assurance

| Check | Status | Date | Reviewer |
|-------|--------|------|----------|
| Section completeness | ✅ Complete | 2026-01-20 | GEATDM Team |
| Cross-reference validation | ✅ Complete | 2026-01-20 | GEATDM Team |
| Template index accuracy | ✅ Complete | 2026-01-20 | GEATDM Team |
| Glossary consolidation | ✅ Complete | 2026-01-20 | GEATDM Team |
| Navigation testing | ✅ Complete | 2026-01-20 | GEATDM Team |

## Approval Record

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Author | GEATDM Team | __________ | 2026-01-20 |
| Reviewer | __________ | __________ | __________ |
| Approver | __________ | __________ | __________ |

## Change Control

Future changes to this document should follow the GEATDM change control process:

1. Document change request with rationale
2. Assess impact on component documents
3. Update affected sections
4. Re-validate cross-references
5. Update version number
6. Obtain appropriate approvals

---

*This document is part of the Generic EA Target Architecture Development Method (GEATDM), based on the GovStack Public Administration Ecosystem Reference Architecture (PAERA). For more information: https://paera.govstack.global/*

---

*End of Master Guide Assembly Document*


═══════════════════════════════════════════════════════════════════════════════
# PART VII: APPENDICES
═══════════════════════════════════════════════════════════════════════════════


# A. TEMPLATE CATALOG

## A.1 Template Index

### Master Template Reference Table

| Template ID | Template Name | Phase | Purpose | Prerequisites | Outputs To |
|-------------|---------------|-------|---------|---------------|------------|
| **DISCOVER Phase** |||||
| TPL-1.1 | Organization Classification Questionnaire | DISCOVER | Determine org type (PDU/RA/SDA) | Sponsor commitment | TPL-1.3 |
| TPL-1.2 | Classification Decision Tree | DISCOVER | Rapid classification flow | Initial scope | TPL-1.3 |
| TPL-1.3 | Classification Record Template | DISCOVER | Document classification result | TPL-1.1, TPL-1.2 | TPL-1.6 |
| TPL-1.4 | DPI Readiness Checklist | DISCOVER | Assess national DPI maturity | Classification | TPL-1.5 |
| TPL-1.5 | DPI Score Calculator | DISCOVER | Calculate weighted DPI score | TPL-1.4 | TPL-1.6 |
| TPL-1.6 | DISCOVER Summary Template | DISCOVER | Phase summary & sign-off | TPL-1.3, TPL-1.5 | ASSESS Entry |
| **ASSESS Phase** |||||
| TPL-2.1 | Current Service Catalog | ASSESS | Inventory existing services | DISCOVER complete | TPL-2.2 |
| TPL-2.2 | Capability Assessment Matrix | ASSESS | Map capabilities to RA | TPL-2.1 | TPL-2.18 |
| TPL-2.3 | Process Assessment Template | ASSESS | Document current processes | TPL-2.2 | TPL-2.18 |
| TPL-2.4 | Stakeholder Matrix | ASSESS | Identify stakeholder landscape | Classification | All phases |
| TPL-2.5 | Capability Maturity Assessment | ASSESS | Rate capability maturity levels | TPL-2.2 | TPL-2.18 |
| TPL-2.6 | Application Inventory | ASSESS | Catalog current applications | System access | TPL-2.7, TPL-2.8 |
| TPL-2.7 | Integration Matrix | ASSESS | Map application integrations | TPL-2.6 | TPL-2.18 |
| TPL-2.8 | Application Health Assessment | ASSESS | Evaluate app business/technical fit | TPL-2.6 | TPL-2.9 |
| TPL-2.9 | Application-to-Capability Mapping | ASSESS | Link apps to capabilities | TPL-2.6, TPL-2.2 | TPL-2.18 |
| TPL-2.10 | DPI Integration Status | ASSESS | Assess current DPI connections | TPL-2.6 | TPL-2.18 |
| TPL-2.11 | Data Asset Inventory | ASSESS | Catalog data assets | Data access | TPL-2.12 |
| TPL-2.12 | Data Flow Documentation | ASSESS | Map data movements | TPL-2.11 | TPL-2.18 |
| TPL-2.13 | Data Quality Assessment | ASSESS | Evaluate data quality | TPL-2.11 | TPL-2.18 |
| TPL-2.14 | Data Ownership Matrix | ASSESS | Define data governance | TPL-2.11 | TPL-3.10 |
| TPL-2.15 | Infrastructure Inventory | ASSESS | Catalog infrastructure assets | Infra access | TPL-2.16 |
| TPL-2.16 | Technical Debt Register | ASSESS | Document technical debt | TPL-2.15, TPL-2.6 | TPL-2.18 |
| TPL-2.17 | Security Assessment | ASSESS | Assess security posture | All inventories | TPL-2.18 |
| TPL-2.18 | Gap Analysis Worksheet | ASSESS | Identify gaps against RA | All AS-IS docs | TPL-2.19 |
| TPL-2.19 | Gap Register | ASSESS | Consolidated gap tracking | TPL-2.18 | TPL-2.20 |
| TPL-2.20 | ASSESS Summary Template | ASSESS | Phase summary & sign-off | TPL-2.19 | ADAPT Entry |
| **ADAPT Phase** |||||
| TPL-3.1 | Adaptation Decision Matrix | ADAPT | Evaluate adaptation feasibility | TPL-2.19 | TPL-3.2 |
| TPL-3.2 | Capability Confirmation Template | ADAPT | Confirm RA capabilities | TPL-3.1 | TPL-3.16 |
| TPL-3.3 | New Capability Template | ADAPT | Define extension capabilities | TPL-3.2 | TPL-3.17 |
| TPL-3.4 | Capability Removal Request | ADAPT | Justify capability removal | TPL-3.2 | TPL-3.17 |
| TPL-3.5 | Capability Definition Adjustment | ADAPT | Modify capability definitions | TPL-3.2 | TPL-3.17 |
| TPL-3.6 | Application Mapping Template | ADAPT | Map capabilities to apps | TPL-3.2, TPL-2.8 | TPL-3.16 |
| TPL-3.7 | Build/Buy Decision Matrix | ADAPT | Evaluate build vs buy | TPL-3.6 | TPL-3.16 |
| TPL-3.8 | Integration Requirements | ADAPT | Define integration specs | TPL-3.6 | TPL-3.9 |
| TPL-3.9 | DPI/BB Integration Specification | ADAPT | Specify DPI/BB integrations | TPL-3.8 | TPL-3.16 |
| TPL-3.10 | Data Domain Adaptation | ADAPT | Adapt data architecture | TPL-2.14 | TPL-3.11 |
| TPL-3.11 | Data Migration Specification | ADAPT | Plan data migrations | TPL-3.10 | TPL-3.18 |
| TPL-3.12 | Data Quality Targets | ADAPT | Define quality targets | TPL-2.13 | TPL-3.16 |
| TPL-3.13 | Platform Tier Selection Matrix | ADAPT | Select infrastructure tier | Classification | TPL-3.14 |
| TPL-3.14 | Infrastructure Specification | ADAPT | Define infrastructure reqs | TPL-3.13 | TPL-3.16 |
| TPL-3.15 | Security Requirements | ADAPT | Define security requirements | TPL-2.17 | TPL-3.16 |
| TPL-3.16 | TO-BE Architecture Document | ADAPT | Complete target architecture | All ADAPT templates | TPL-3.20 |
| TPL-3.17 | Tailoring Decision Log | ADAPT | Record all adaptations | All decisions | TPL-3.20 |
| TPL-3.18 | Transition Requirements Document | ADAPT | Define transition needs | TPL-3.11 | TPL-3.19 |
| TPL-3.19 | Coexistence Specification | ADAPT | Plan system coexistence | TPL-3.18 | TPL-3.20 |
| TPL-3.20 | ADAPT Summary Template | ADAPT | Phase summary & sign-off | TPL-3.16, TPL-3.17 | PLAN Entry |
| **PLAN Phase** |||||
| TPL-4.1 | Implementation Approach Evaluation | PLAN | Compare approaches | TPL-3.20 | TPL-4.6 |
| TPL-4.2 | Initiative Inventory | PLAN | List all initiatives | TPL-2.19, TPL-3.16 | TPL-4.3 |
| TPL-4.3 | Dependency Matrix | PLAN | Map dependencies | TPL-4.2 | TPL-4.4 |
| TPL-4.4 | Sequencing Criteria Assessment | PLAN | Score for sequencing | TPL-4.3 | TPL-4.6 |
| TPL-4.5 | Quick Win Identification | PLAN | Identify quick wins | TPL-4.2 | TPL-4.6 |
| TPL-4.6 | Phase Definition Template | PLAN | Define each phase | TPL-4.4, TPL-4.5 | TPL-4.7 |
| TPL-4.7 | Milestone Definition | PLAN | Define milestones | TPL-4.6 | TPL-4.11 |
| TPL-4.8 | Decision Gate Framework | PLAN | Define governance gates | TPL-4.6 | TPL-4.21 |
| TPL-4.9 | Effort Estimation Template | PLAN | Estimate effort | TPL-4.2 | TPL-4.10 |
| TPL-4.10 | Resource Requirements by Phase | PLAN | Plan resources | TPL-4.9 | TPL-4.15 |
| TPL-4.11 | Timeline Template | PLAN | Visual timeline | TPL-4.7 | TPL-4.20 |
| TPL-4.12 | Business Case Document Structure | PLAN | Business case outline | All costs/benefits | TPL-4.22 |
| TPL-4.13 | Current State Cost Analysis | PLAN | Baseline costs | Financial data | TPL-4.12 |
| TPL-4.14 | Benefit Realization Timeline | PLAN | Project benefits | TPL-4.12 | TPL-4.16 |
| TPL-4.15 | Investment Summary | PLAN | Summarize investment | TPL-4.10 | TPL-4.16 |
| TPL-4.16 | ROI Calculation Worksheet | PLAN | Calculate ROI | TPL-4.14, TPL-4.15 | TPL-4.12 |
| TPL-4.17 | Risk Assessment Template | PLAN | Identify risks | All PLAN work | TPL-4.18 |
| TPL-4.18 | Risk Mitigation Template | PLAN | Plan mitigations | TPL-4.17 | TPL-4.20 |
| TPL-4.19 | External Dependency Register | PLAN | Track external deps | TPL-4.3 | TPL-4.20 |
| TPL-4.20 | Implementation Roadmap | PLAN | Visual roadmap | All PLAN templates | TPL-4.22 |
| TPL-4.21 | Gate Review Package Checklist | PLAN | Gate package contents | TPL-4.8 | EXECUTE |
| TPL-4.22 | PLAN Summary Template | PLAN | Phase summary & sign-off | TPL-4.20, TPL-4.12 | EXECUTE Entry |
| **EXECUTE Phase** |||||
| TPL-5.1 | Phase Kickoff Checklist | EXECUTE | Phase mobilization | Gate approval | TPL-5.2 |
| TPL-5.2 | Sprint/Iteration Planning | EXECUTE | Plan iterations | TPL-5.1 | TPL-5.3 |
| TPL-5.3 | Progress Report Template | EXECUTE | Track progress | Ongoing work | TPL-5.4 |
| TPL-5.4 | Change Request Template | EXECUTE | Manage changes | Issues identified | TPL-5.3 |
| TPL-5.5 | Go-Live Readiness Checklist | EXECUTE | Validate go-live ready | Testing complete | TPL-5.6 |
| TPL-5.6 | Lessons Learned Template | EXECUTE | Capture lessons | Phase/project end | Next phases |

---

## A.2 Templates by Phase

### A.2.1 DISCOVER Phase Templates

#### TPL-1.1: Organization Classification Questionnaire

**Purpose:** Determine organization type (PDU/RA/SDA) through structured 30-question assessment

**Usage:** Complete with key stakeholders during initial engagement. Score each answer according to the guide.

---

**Section 1: Mission & Authority (Q1-Q6)**

| Q# | Question | PDU (1) | RA (2) | SDA (3) |
|----|----------|---------|--------|---------|
| Q1 | What is the organization's primary mandate? | Policy development & advisory | Regulation & compliance enforcement | Direct service delivery |
| Q2 | Does the organization have regulatory powers? | No regulatory authority | Primary regulatory authority | Limited regulatory (service standards) |
| Q3 | Does the organization deliver services to citizens/businesses? | No direct services | Limited services (licensing) | Extensive direct services |
| Q4 | What is the scope of authority? | Advisory/coordinating | Enforcement within sector | Operational across services |
| Q5 | How does the organization interact with legislation? | Drafts/advises on policy | Implements regulations | Operationalizes policy |
| Q6 | What decisions does the organization make? | Policy recommendations | Regulatory determinations | Service delivery decisions |

**Section 1 Score:** ___/18

---

**Section 2: Core Functions (Q7-Q12)**

| Q# | Question | PDU (1) | RA (2) | SDA (3) |
|----|----------|---------|--------|---------|
| Q7 | Does the organization draft legislation/policy? | Primary function | Secondary function | Rare/never |
| Q8 | Does the organization set standards? | Policy standards | Regulatory standards | Service standards |
| Q9 | Does the organization issue licenses/permits? | Never | Primary function | As part of services |
| Q10 | Does the organization conduct inspections? | Never | Primary function | Quality assurance only |
| Q11 | Does the organization process transactions? | Minimal (<100/year) | Moderate (100-10K/year) | High volume (>10K/year) |
| Q12 | Does the organization manage citizen data? | Minimal | Sector-specific | Comprehensive |

**Section 2 Score:** ___/18

---

**Section 3: Stakeholder Relationships (Q13-Q18)**

| Q# | Question | PDU (1) | RA (2) | SDA (3) |
|----|----------|---------|--------|---------|
| Q13 | Primary reporting relationship? | Ministry/Cabinet | Ministry with autonomy | Ministry/multiple agencies |
| Q14 | Who are the primary stakeholders? | Other agencies/ministries | Regulated entities | Citizens/businesses |
| Q15 | Nature of external interactions? | Consultation/coordination | Compliance monitoring | Service transactions |
| Q16 | Frequency of citizen interactions? | Rare | Periodic | Continuous |
| Q17 | How many regulated entities (if any)? | N/A | <10,000 | >10,000 or N/A |
| Q18 | Cross-agency coordination role? | Primary coordinator | Sector coordinator | Service integrator |

**Section 3 Score:** ___/18

---

**Section 4: Operational Characteristics (Q19-Q24)**

| Q# | Question | PDU (1) | RA (2) | SDA (3) |
|----|----------|---------|--------|---------|
| Q19 | Annual transaction volume? | <1,000 | 1,000-100,000 | >100,000 |
| Q20 | Real-time processing requirements? | None | Limited | Extensive |
| Q21 | Field operations/inspections? | None | Significant | Extensive |
| Q22 | Multi-channel service delivery? | Single (internal) | 2-3 channels | 4+ channels |
| Q23 | Operating hours requirement? | Business hours | Extended hours | 24/7 availability |
| Q24 | Geographic distribution? | Central only | Regional presence | National coverage |

**Section 4 Score:** ___/18

---

**Section 5: Technical Requirements (Q25-Q30)**

| Q# | Question | PDU (1) | RA (2) | SDA (3) |
|----|----------|---------|--------|---------|
| Q25 | Number of core applications? | <5 | 5-20 | >20 |
| Q26 | External system integrations needed? | <5 | 5-15 | >15 |
| Q27 | Data volume (records managed)? | <100K | 100K-10M | >10M |
| Q28 | Availability requirement (SLA)? | 95% | 99% | 99.9% |
| Q29 | Security classification of data? | Internal | Confidential | Mix including Secret |
| Q30 | Disaster recovery requirement? | 72-hour RTO | 24-hour RTO | <4-hour RTO |

**Section 5 Score:** ___/18

---

**TOTAL SCORE:** ___/90

**Classification Guide:**
- **30-50:** Policy Development Unit (PDU)
- **51-70:** Regulatory Agency (RA)
- **71-90:** Service Delivery Authority (SDA)

---

#### TPL-1.2: Classification Decision Tree

**Purpose:** Rapid 4-question classification for initial validation

```
START
  │
  ▼
┌─────────────────────────────────────────────────────────────────────┐
│ Q1: Does the organization deliver services directly to             │
│     citizens or businesses?                                        │
└─────────────────────────────────────────────────────────────────────┘
  │                                    │
  │ YES                                │ NO
  ▼                                    ▼
┌─────────────────────┐      ┌─────────────────────────────────────┐
│ Potential SDA       │      │ Q2: Does the organization issue     │
│ (Continue to Q3)    │      │     licenses, permits, or enforce   │
└─────────────────────┘      │     regulations?                    │
  │                          └─────────────────────────────────────┘
  │                                    │              │
  │                                    │ YES          │ NO
  │                                    ▼              ▼
  │                          ┌──────────────┐   ┌──────────────────┐
  │                          │ Potential RA │   │ Q3: Does the org │
  │                          └──────────────┘   │ primarily develop│
  │                                             │ policy/legislation│
  │                                             └──────────────────┘
  │                                                    │        │
  │                                                    │ YES    │ NO
  │                                                    ▼        ▼
  │                                             ┌─────────┐  ┌────────────┐
  │                                             │ PDU     │  │ Reassess   │
  │                                             └─────────┘  │ with Q'aire│
  │                                                          └────────────┘
  ▼
┌─────────────────────────────────────────────────────────────────────┐
│ Q4: Is annual transaction volume >10,000/year?                     │
└─────────────────────────────────────────────────────────────────────┘
  │                     │
  │ YES                 │ NO
  ▼                     ▼
┌─────────────┐   ┌─────────────────────────────────┐
│ SDA         │   │ May be RA with service function │
│ Confirmed   │   │ Complete full questionnaire     │
└─────────────┘   └─────────────────────────────────┘
```

---

#### TPL-1.3: Classification Record Template

**Purpose:** Formal documentation of classification decision

| **Field** | **Value** |
|-----------|-----------|
| **Organization Name** | |
| **Ministry/Parent Agency** | |
| **Assessment Date** | YYYY-MM-DD |
| **Assessor(s)** | |
| **Questionnaire Score** | /90 |
| **Decision Tree Result** | PDU / RA / SDA |
| **Final Classification** | |
| **Classification Rationale** | |
| **Key Factors** | |
| **Ambiguities/Concerns** | |
| **Validator Name** | |
| **Validation Date** | YYYY-MM-DD |
| **Validation Notes** | |

**Sign-off:**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Assessor | | | |
| Validator | | | |
| Sponsor | | | |

---

#### TPL-1.4: DPI Readiness Checklist

**Purpose:** Assess national/shared Digital Public Infrastructure maturity across 5 pillars

**Instructions:** Score each component 0-4 based on implementation status:
- **0:** Not implemented
- **1:** Planned/Initial
- **2:** Partially implemented
- **3:** Largely implemented
- **4:** Fully operational

---

**Pillar 1: Digital Identity (Weight: 25%)**

| Component | Sub-component | Score (0-4) | Evidence/Notes |
|-----------|---------------|-------------|----------------|
| **1.1 National ID System** | Unique identifier scheme exists | | |
| | Coverage >80% of population | | |
| | Digital representation available | | |
| | Verification services operational | | |
| **1.2 Authentication Services** | Single Sign-On available | | |
| | Multi-factor authentication supported | | |
| | Federation protocols implemented | | |
| | Mobile authentication available | | |
| **1.3 Identity Verification APIs** | Real-time verification available | | |
| | API documentation published | | |
| | SLA defined and monitored | | |
| | Error handling standardized | | |
| **1.4 Consent Management** | Consent framework defined | | |
| | Audit trail maintained | | |
| | User control mechanisms exist | | |
| | Revocation process operational | | |

**Pillar 1 Sub-total:** ___/64

---

**Pillar 2: Interoperability (Weight: 25%)**

| Component | Sub-component | Score (0-4) | Evidence/Notes |
|-----------|---------------|-------------|----------------|
| **2.1 Data Exchange Platform** | X-Road or equivalent operational | | |
| | Security layer implemented | | |
| | Logging and monitoring active | | |
| | Disaster recovery tested | | |
| **2.2 API Gateway** | Central gateway available | | |
| | Rate limiting implemented | | |
| | Security policies enforced | | |
| | Analytics available | | |
| **2.3 Standards Adoption** | Data exchange standards defined | | |
| | API standards published | | |
| | Compliance verification process | | |
| | Version management | | |
| **2.4 Service Catalog** | Central catalog maintained | | |
| | Service discovery enabled | | |
| | SLA information published | | |
| | Usage metrics available | | |

**Pillar 2 Sub-total:** ___/64

---

**Pillar 3: Data Infrastructure (Weight: 20%)**

| Component | Sub-component | Score (0-4) | Evidence/Notes |
|-----------|---------------|-------------|----------------|
| **3.1 Base Registries** | Population register operational | | |
| | Business register operational | | |
| | Property register operational | | |
| | Vehicle register operational | | |
| **3.2 Data Quality Framework** | Quality standards defined | | |
| | Measurement processes exist | | |
| | Remediation procedures | | |
| | Quality reporting | | |
| **3.3 Master Data Management** | MDM strategy defined | | |
| | Golden records established | | |
| | Synchronization processes | | |
| | Data stewardship model | | |
| **3.4 Data Sharing Agreements** | Legal framework exists | | |
| | Template agreements available | | |
| | Approval process defined | | |
| | Compliance monitoring | | |

**Pillar 3 Sub-total:** ___/64

---

**Pillar 4: Digital Access (Weight: 15%)**

| Component | Sub-component | Score (0-4) | Evidence/Notes |
|-----------|---------------|-------------|----------------|
| **4.1 Connectivity** | Broadband coverage >80% | | |
| | Mobile coverage >90% | | |
| | Government network operational | | |
| | Redundancy in place | | |
| **4.2 Citizen Portal** | Single portal available | | |
| | Service integration | | |
| | User account management | | |
| | Accessibility compliant | | |
| **4.3 Mobile Access** | Mobile-responsive design | | |
| | Native apps available | | |
| | Offline capability (where needed) | | |
| | Push notifications | | |
| **4.4 Accessibility** | WCAG compliance | | |
| | Multi-language support | | |
| | Assisted digital support | | |
| | Alternative channels | | |

**Pillar 4 Sub-total:** ___/64

---

**Pillar 5: Governance (Weight: 15%)**

| Component | Sub-component | Score (0-4) | Evidence/Notes |
|-----------|---------------|-------------|----------------|
| **5.1 Legal Framework** | Digital governance law | | |
| | Data protection legislation | | |
| | Electronic signatures law | | |
| | Cybersecurity regulations | | |
| **5.2 Institutional Coordination** | Digital agency exists | | |
| | Coordination mechanisms | | |
| | Decision-making authority | | |
| | Stakeholder engagement | | |
| **5.3 Standards Bodies** | Technical standards body | | |
| | Standard approval process | | |
| | Compliance verification | | |
| | International alignment | | |
| **5.4 Funding Mechanisms** | Sustainable funding model | | |
| | Investment prioritization | | |
| | Cost-sharing arrangements | | |
| | Monitoring and evaluation | | |

**Pillar 5 Sub-total:** ___/64

---

#### TPL-1.5: DPI Score Calculator

**Purpose:** Calculate weighted DPI readiness score

| Pillar | Max Points | Raw Score | Normalized (%) | Weight | Weighted Score |
|--------|------------|-----------|----------------|--------|----------------|
| Digital Identity | 64 | | | ×0.25 | |
| Interoperability | 64 | | | ×0.25 | |
| Data Infrastructure | 64 | | | ×0.20 | |
| Digital Access | 64 | | | ×0.15 | |
| Governance | 64 | | | ×0.15 | |
| **TOTAL** | 320 | | | | **/100** |

**Readiness Level Determination:**

| Score Range | Level | Description | Suitable For |
|-------------|-------|-------------|--------------|
| 0-40 | Level 1 (Basic) | Minimum viable DPI | PDU implementations |
| 41-70 | Level 2 (Intermediate) | Established DPI | RA implementations |
| 71-100 | Level 3 (Advanced) | Mature DPI ecosystem | SDA implementations |

**Assessed Level:** ☐ Level 1 ☐ Level 2 ☐ Level 3

---

#### TPL-1.6: DISCOVER Summary Template

**Purpose:** Consolidate DISCOVER phase outputs and obtain sign-off

| **Section** | **Content** |
|-------------|-------------|
| **Organization Name** | |
| **Assessment Period** | to |
| **Classification Result** | ☐ PDU ☐ RA ☐ SDA |
| **Classification Score** | /90 |
| **Classification Confidence** | ☐ High ☐ Medium ☐ Low |
| **DPI Readiness Score** | /100 |
| **DPI Readiness Level** | ☐ Level 1 ☐ Level 2 ☐ Level 3 |
| **Key DPI Gaps Identified** | |
| **Recommended Reference Architecture** | ☐ PDU-RA ☐ RA-RA ☐ SDA-RA |
| **Alignment Assessment** | |
| **Key Findings** | |
| **Recommendations** | |
| **Proceed to ASSESS?** | ☐ Yes ☐ No ☐ Conditional |
| **Conditions (if any)** | |

**Sign-off:**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| EA Lead | | | |
| Project Sponsor | | | |

---

### A.2.2 ASSESS Phase Templates

#### TPL-2.1: Current Service Catalog

**Purpose:** Inventory all current services delivered by the organization

| Service ID | Service Name | Description | Channel(s) | Volume/Year | SLA | Owner | Status |
|------------|--------------|-------------|------------|-------------|-----|-------|--------|
| SVC-001 | | | ☐Portal ☐Counter ☐Mobile ☐Phone ☐Mail | | | | ☐Active ☐Planned ☐Retiring |
| SVC-002 | | | ☐Portal ☐Counter ☐Mobile ☐Phone ☐Mail | | | | ☐Active ☐Planned ☐Retiring |
| SVC-003 | | | ☐Portal ☐Counter ☐Mobile ☐Phone ☐Mail | | | | ☐Active ☐Planned ☐Retiring |

---

#### TPL-2.2: Capability Assessment Matrix

**Purpose:** Map current capabilities against Reference Architecture requirements

| Capability ID | Capability Name | RA Reference | Current Status | Maturity (1-5) | Gap? | Notes |
|---------------|-----------------|--------------|----------------|----------------|------|-------|
| CAP-001 | | [RA section] | ☐Full ☐Partial ☐None | | ☐Y ☐N | |
| CAP-002 | | [RA section] | ☐Full ☐Partial ☐None | | ☐Y ☐N | |
| CAP-003 | | [RA section] | ☐Full ☐Partial ☐None | | ☐Y ☐N | |

---

#### TPL-2.3: Process Assessment Template

**Purpose:** Document key business processes supporting capabilities

| Process ID | Process Name | Capability Supported | Steps | Pain Points | Automation Level | Improvement Opportunities |
|------------|--------------|----------------------|-------|-------------|------------------|---------------------------|
| PRC-001 | | CAP-xxx | | | ☐Manual ☐Semi ☐Full | |
| PRC-002 | | CAP-xxx | | | ☐Manual ☐Semi ☐Full | |

---

#### TPL-2.4: Stakeholder Matrix

**Purpose:** Identify and analyze key stakeholders

| Stakeholder | Type | Interest Level | Influence Level | Current Engagement | Strategy |
|-------------|------|----------------|-----------------|---------------------|----------|
| | ☐Internal ☐External | ☐High ☐Med ☐Low | ☐High ☐Med ☐Low | ☐Champion ☐Supporter ☐Neutral ☐Resistant | |

---

#### TPL-2.5: Capability Maturity Assessment

**Purpose:** Rate capability maturity using standardized scale

| Level | Name | Description | Indicators |
|-------|------|-------------|------------|
| 1 | Initial | Ad-hoc, undocumented | No formal processes, dependent on individuals |
| 2 | Managed | Documented but inconsistent | Basic documentation exists, variable execution |
| 3 | Defined | Standardized, measured | Consistent processes, basic metrics |
| 4 | Quantitatively Managed | Metrics-driven optimization | Statistical process control, predictable |
| 5 | Optimizing | Continuous improvement | Innovation-driven, industry-leading |

**Maturity Assessment:**

| Capability | Current Level | Evidence | Target Level | Gap |
|------------|---------------|----------|--------------|-----|
| CAP-001 | | | | |
| CAP-002 | | | | |

---

#### TPL-2.6: Application Inventory

**Purpose:** Comprehensive catalog of current applications

| App ID | Name | Type | Vendor | Version | Capabilities Supported | Users | Status | License End |
|--------|------|------|--------|---------|------------------------|-------|--------|-------------|
| APP-001 | | ☐COTS ☐Custom ☐SaaS | | | CAP-xxx, CAP-yyy | | ☐Production ☐Dev ☐Legacy | |
| APP-002 | | ☐COTS ☐Custom ☐SaaS | | | CAP-xxx, CAP-yyy | | ☐Production ☐Dev ☐Legacy | |

---

#### TPL-2.7: Integration Matrix

**Purpose:** Document current application integrations

| Integration ID | Source App | Target App | Integration Type | Protocol | Data Exchanged | Frequency | Status |
|----------------|------------|------------|------------------|----------|----------------|-----------|--------|
| INT-001 | APP-xxx | APP-xxx | ☐API ☐File ☐DB ☐Message | | | ☐Real-time ☐Near ☐Batch | ☐Active ☐Planned |

---

#### TPL-2.8: Application Health Assessment

**Purpose:** Evaluate application portfolio health

| App ID | Business Fit | Technical Health | Strategic Alignment | Overall | Recommendation |
|--------|--------------|------------------|---------------------|---------|----------------|
| APP-001 | ☐🟢 ☐🟡 ☐🔴 ☐⚫ | ☐🟢 ☐🟡 ☐🔴 ☐⚫ | ☐🟢 ☐🟡 ☐🔴 ☐⚫ | ☐🟢 ☐🟡 ☐🔴 ☐⚫ | ☐Retain ☐Invest ☐Migrate ☐Retire |

**Legend:**
- 🟢 Good: Meets requirements, no significant issues
- 🟡 Acceptable: Minor issues, manageable
- 🔴 Poor: Significant issues, needs attention
- ⚫ Critical: Major issues, immediate action required

---

#### TPL-2.9: Application-to-Capability Mapping

**Purpose:** Link applications to business capabilities

| Capability | Primary App | Supporting Apps | Coverage | Gaps |
|------------|-------------|-----------------|----------|------|
| CAP-001 | APP-xxx | APP-yyy, APP-zzz | ☐Full ☐Partial ☐None | |

---

#### TPL-2.10: DPI Integration Status

**Purpose:** Assess current connections to Digital Public Infrastructure

| DPI Component | Integration Status | App(s) Integrated | Coverage | Gap Description |
|---------------|--------------------|-------------------|----------|-----------------|
| National ID | ☐Connected ☐Planned ☐None | | % | |
| X-Road/Interop | ☐Connected ☐Planned ☐None | | % | |
| Base Registries | ☐Connected ☐Planned ☐None | | % | |
| Payment Gateway | ☐Connected ☐Planned ☐None | | % | |
| Citizen Portal | ☐Connected ☐Planned ☐None | | % | |

---

#### TPL-2.11: Data Asset Inventory

**Purpose:** Catalog organizational data assets

| Data Asset ID | Name | Type | Owner | Sensitivity | Storage | Format | Retention |
|---------------|------|------|-------|-------------|---------|--------|-----------|
| DAT-001 | | ☐Master ☐Reference ☐Transaction | | ☐Public ☐Internal ☐Confidential ☐Secret | | | years |

---

#### TPL-2.12: Data Flow Documentation

**Purpose:** Map data movements within and across the organization

| Flow ID | Source | Target | Data Elements | Trigger | Volume | Latency | Security |
|---------|--------|--------|---------------|---------|--------|---------|----------|
| FLW-001 | | | | ☐Event ☐Schedule | /day | ☐Real-time ☐Near ☐Batch | ☐Encrypted ☐Plain |

---

#### TPL-2.13: Data Quality Assessment

**Purpose:** Evaluate data quality across dimensions

| Data Asset | Completeness (1-5) | Accuracy (1-5) | Timeliness (1-5) | Consistency (1-5) | Validity (1-5) | Overall Avg |
|------------|-------------------|----------------|------------------|-------------------|----------------|-------------|
| DAT-001 | | | | | | |

**Dimension Definitions:**
- **Completeness:** All required data is present
- **Accuracy:** Data correctly represents real-world values
- **Timeliness:** Data is current and available when needed
- **Consistency:** Data is uniform across systems
- **Validity:** Data conforms to business rules and formats

---

#### TPL-2.14: Data Ownership Matrix

**Purpose:** Define data governance responsibilities

| Data Domain | Data Steward | Technical Owner | Business Owner | Governance Forum |
|-------------|--------------|-----------------|----------------|------------------|
| | | | | |

---

#### TPL-2.15: Infrastructure Inventory

**Purpose:** Catalog infrastructure assets

| Asset ID | Type | Specification | Location | Owner | Status | EOL Date |
|----------|------|---------------|----------|-------|--------|----------|
| INF-001 | ☐Server ☐Storage ☐Network ☐Security | | ☐DC ☐Cloud ☐Hybrid | | ☐Active ☐Planned ☐Retiring | |

---

#### TPL-2.16: Technical Debt Register

**Purpose:** Track and prioritize technical debt

| Debt ID | Category | Description | Impact | Remediation Cost | Priority |
|---------|----------|-------------|--------|------------------|----------|
| TDB-001 | ☐Code ☐Architecture ☐Infrastructure ☐Security ☐Documentation | | ☐High ☐Med ☐Low | € | 1-5 |

---

#### TPL-2.17: Security Assessment

**Purpose:** Assess current security posture

| Domain | Current State | Target State | Gap | Risk Level | Remediation |
|--------|---------------|--------------|-----|------------|-------------|
| Identity & Access | | | | ☐High ☐Med ☐Low | |
| Data Protection | | | | ☐High ☐Med ☐Low | |
| Network Security | | | | ☐High ☐Med ☐Low | |
| Application Security | | | | ☐High ☐Med ☐Low | |
| Endpoint Security | | | | ☐High ☐Med ☐Low | |
| Security Operations | | | | ☐High ☐Med ☐Low | |

---

#### TPL-2.18: Gap Analysis Worksheet

**Purpose:** Systematic identification of gaps between AS-IS and TO-BE

| Domain | AS-IS State | TO-BE State (from RA) | Gap Description | Gap Type | Severity |
|--------|-------------|----------------------|-----------------|----------|----------|
| Business | | | | ☐Missing ☐Partial ☐Misaligned | ☐High ☐Med ☐Low |
| Data | | | | ☐Missing ☐Partial ☐Misaligned | ☐High ☐Med ☐Low |
| Application | | | | ☐Missing ☐Partial ☐Misaligned | ☐High ☐Med ☐Low |
| Technology | | | | ☐Missing ☐Partial ☐Misaligned | ☐High ☐Med ☐Low |

---

#### TPL-2.19: Gap Register

**Purpose:** Consolidated tracking of all identified gaps

| Gap ID | Domain | Gap Description | RA Reference | Severity | Remediation Options | Priority | Owner | Status |
|--------|--------|-----------------|--------------|----------|---------------------|----------|-------|--------|
| GAP-001 | ☐B ☐D ☐A ☐T | | [RA section] | ☐High ☐Med ☐Low | | 1-5 | | ☐Open ☐In Progress ☐Closed |

---

#### TPL-2.20: ASSESS Summary Template

**Purpose:** Consolidate ASSESS phase outputs and obtain sign-off

| **Section** | **Content** |
|-------------|-------------|
| **Organization** | |
| **Assessment Period** | to |
| **AS-IS Completeness** | Business: % | Data: % | Application: % | Technology: % |
| **Total Gaps Identified** | (High: | Medium: | Low: ) |
| **Critical Gaps** | |
| **Key Findings** | |
| **Top Pain Points** | |
| **Recommended Focus Areas** | |
| **Data Quality Issues** | |
| **Technical Debt Summary** | |
| **Security Concerns** | |
| **Proceed to ADAPT?** | ☐ Yes ☐ No ☐ Conditional |
| **Conditions (if any)** | |

**Sign-off:**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| EA Lead | | | |
| Business Lead | | | |
| Technical Lead | | | |
| Project Sponsor | | | |

---

### A.2.3 ADAPT Phase Templates

#### TPL-3.1: Adaptation Decision Matrix

**Purpose:** Evaluate readiness to proceed with architecture adaptation

| Factor | Weight | Score (1-5) | Weighted | Notes |
|--------|--------|-------------|----------|-------|
| Strategic Alignment | 25% | | | |
| Gap Severity | 20% | | | |
| Implementation Complexity | 20% | | | |
| Resource Availability | 15% | | | |
| DPI/BB Availability | 10% | | | |
| Risk Level | 10% | | | |
| **TOTAL** | 100% | | **/5** | |

**Interpretation:**
- **≥4.0:** Proceed with adaptation
- **3.0-3.9:** Proceed with conditions/additional preparation
- **<3.0:** Reconsider scope or prerequisites

---

#### TPL-3.2: Capability Confirmation Template

**Purpose:** Document decisions on RA capabilities

| RA Capability ID | Capability Name | Confirmed? | Adaptation Required | Rationale |
|------------------|-----------------|------------|---------------------|-----------|
| [From RA] | | ☐Yes ☐No | ☐None ☐Minor ☐Major | |

---

#### TPL-3.3: New Capability Template

**Purpose:** Define capabilities beyond the Reference Architecture

| **Field** | **Value** |
|-----------|-----------|
| **Capability ID** | CAP-NEW-001 |
| **Capability Name** | |
| **Description** | |
| **Business Justification** | |
| **RA Extension Point** | [Reference to RA flexibility zone] |
| **Related RA Capabilities** | CAP-xxx |
| **Services Enabled** | |
| **Data Requirements** | |
| **Application Requirements** | |
| **Technology Requirements** | |
| **Approval Status** | ☐Pending ☐Approved ☐Rejected |
| **Approver** | |
| **Approval Date** | |

---

#### TPL-3.4: Capability Removal Request

**Purpose:** Formally request and justify removal of RA capability

| **Field** | **Value** |
|-----------|-----------|
| **RA Capability ID** | |
| **Capability Name** | |
| **Removal Justification** | |
| **Impact Assessment** | |
| **Affected Services** | |
| **Affected Integrations** | |
| **Compensating Control** | |
| **Risk Assessment** | |
| **Approval Status** | ☐Pending ☐Approved ☐Rejected |
| **Architecture Board Decision** | |
| **Decision Date** | |

---

#### TPL-3.5: Capability Definition Adjustment

**Purpose:** Document modifications to RA capability definitions

| **Field** | **Value** |
|-----------|-----------|
| **RA Capability ID** | |
| **Original Definition** | |
| **Adjusted Definition** | |
| **Adjustment Rationale** | |
| **Maintains RA Intent?** | ☐Yes ☐No (requires Architecture Board approval) |
| **Impact on Inheritance** | |
| **Approval Status** | ☐Pending ☐Approved ☐Rejected |

---

#### TPL-3.6: Application Mapping Template

**Purpose:** Map TO-BE capabilities to application decisions

| TO-BE Capability | Implementation Option | Application(s) | Status | Build/Buy | Notes |
|------------------|----------------------|----------------|--------|-----------|-------|
| CAP-001 | ☐Reuse ☐Extend ☐Replace ☐New | APP-xxx | ☐Confirmed ☐Planned | ☐Build ☐Buy | |

---

#### TPL-3.7: Build/Buy Decision Matrix

**Purpose:** Systematic evaluation of build vs buy options

| Factor | Weight | Build Score (1-5) | Buy Score (1-5) | Notes |
|--------|--------|-------------------|-----------------|-------|
| Strategic Fit | 20% | | | |
| Total Cost (5yr) | 20% | | | |
| Time to Implement | 15% | | | |
| Customization Need | 15% | | | |
| Vendor Viability | 10% | N/A | | |
| Internal Capability | 10% | | N/A | |
| Risk | 10% | | | |
| **TOTAL** | 100% | **Weighted:** | **Weighted:** | |

**Recommendation:** ☐ Build ☐ Buy

---

#### TPL-3.8: Integration Requirements

**Purpose:** Define application integration specifications

| Integration ID | Source | Target | Type | Data Elements | Volume | SLA | Priority | Security |
|----------------|--------|--------|------|---------------|--------|-----|----------|----------|
| INT-001 | | | ☐Sync ☐Async ☐Batch | | | | ☐Must ☐Should ☐Could | |

---

#### TPL-3.9: DPI/BB Integration Specification

**Purpose:** Specify Digital Public Infrastructure and Building Block integrations

| BB/DPI Component | Integration Pattern | API/Protocol | Data Elements | Security | Auth Method | Status |
|------------------|---------------------|--------------|---------------|----------|-------------|--------|
| Identity BB | | | | | | ☐Required ☐Optional |
| Payments BB | | | | | | ☐Required ☐Optional |
| Messaging BB | | | | | | ☐Required ☐Optional |
| Registration BB | | | | | | ☐Required ☐Optional |
| Consent BB | | | | | | ☐Required ☐Optional |
| Digital Registries BB | | | | | | ☐Required ☐Optional |
| Information Mediator BB | | | | | | ☐Required ☐Optional |
| Scheduler BB | | | | | | ☐Required ☐Optional |
| Workflow BB | | | | | | ☐Required ☐Optional |

---

#### TPL-3.10: Data Domain Adaptation

**Purpose:** Document data architecture adaptations

| RA Data Domain | Confirmed? | Adaptation Type | Local Extensions | Standards Compliance | Notes |
|----------------|------------|-----------------|------------------|----------------------|-------|
| [From RA] | ☐Yes ☐No | ☐None ☐Minor ☐Major | | ☐ISO ☐National ☐Custom | |

---

#### TPL-3.11: Data Migration Specification

**Purpose:** Plan data migrations from AS-IS to TO-BE

| Source | Target | Data Volume | Transformation Rules | Quality Rules | Migration Approach | Timeline |
|--------|--------|-------------|----------------------|---------------|-------------------|----------|
| | | records | | | ☐Big Bang ☐Phased ☐Parallel | Phase |

---

#### TPL-3.12: Data Quality Targets

**Purpose:** Define target data quality metrics

| Data Domain | Completeness | Accuracy | Timeliness | Consistency | Validity | Measurement Method |
|-------------|--------------|----------|------------|-------------|----------|--------------------|
| | % | % | hrs | % | % | |

---

#### TPL-3.13: Platform Tier Selection Matrix

**Purpose:** Select appropriate infrastructure tier based on organization type

| Factor | Tier 1 (Basic) | Tier 2 (Standard) | Tier 3 (Enterprise) | Current Value | Selected |
|--------|----------------|-------------------|---------------------|---------------|----------|
| **Org Type Fit** | PDU | RA | SDA | | |
| **User Scale** | <100 | 100-1,000 | >1,000 | | |
| **Transaction Volume** | <10K/yr | 10K-100K/yr | >100K/yr | | |
| **Availability** | 99% | 99.5% | 99.9% | | |
| **DR RTO** | 72 hrs | 24 hrs | 4 hrs | | |
| **Security Level** | Internal | Confidential | Secret-capable | | |
| **Estimated Cost** | € | €€ | €€€ | | |

**Selected Tier:** ☐ Tier 1 ☐ Tier 2 ☐ Tier 3

---

#### TPL-3.14: Infrastructure Specification

**Purpose:** Define infrastructure requirements

| Component | Requirement | Specification | Justification | RA Reference |
|-----------|-------------|---------------|---------------|--------------|
| Compute | | | | |
| Storage | | | | |
| Network | | | | |
| Database | | | | |
| Security | | | | |
| Backup/DR | | | | |
| Monitoring | | | | |

---

#### TPL-3.15: Security Requirements

**Purpose:** Define security architecture requirements

| Security Domain | Requirement | Implementation Approach | Standard/Framework | Priority |
|-----------------|-------------|-------------------------|-------------------|----------|
| Authentication | | | | |
| Authorization | | | | |
| Encryption (transit) | | | | |
| Encryption (at rest) | | | | |
| Audit Logging | | | | |
| Key Management | | | | |
| Threat Detection | | | | |
| Incident Response | | | | |

---

#### TPL-3.16: TO-BE Architecture Document Structure

**Purpose:** Standard structure for target architecture documentation

```
TO-BE ARCHITECTURE DOCUMENT

1. Executive Summary
   1.1 Purpose
   1.2 Scope
   1.3 Key Decisions

2. Architecture Overview
   2.1 Scope & Objectives
   2.2 Architecture Principles Applied
   2.3 Reference Architecture Basis (PDU-RA/RA-RA/SDA-RA)
   2.4 Tailoring Summary

3. Business Architecture
   3.1 Capability Model (confirmed + adapted)
   3.2 Service Portfolio
   3.3 Process Architecture
   3.4 Organization Model
   3.5 Business Metrics

4. Data Architecture
   4.1 Data Domains
   4.2 Conceptual Data Model
   4.3 Logical Data Model
   4.4 Data Flows
   4.5 Data Quality Framework
   4.6 Data Governance Model

5. Application Architecture
   5.1 Application Portfolio (TO-BE)
   5.2 Application Interactions
   5.3 DPI/BB Integrations
   5.4 API Specifications
   5.5 Build/Buy Decisions

6. Technology Architecture
   6.1 Infrastructure Design
   6.2 Platform Specifications
   6.3 Security Architecture
   6.4 Operations Model
   6.5 DR/BC Design

7. Transition Architecture
   7.1 Coexistence Requirements
   7.2 Migration Approach
   7.3 Phasing Considerations
   7.4 Risk Mitigations

8. Architecture Decisions
   8.1 Key Decisions Record
   8.2 Trade-offs Made
   8.3 Outstanding Decisions

Appendices
   A. Tailoring Decision Log (TPL-3.17)
   B. Transition Requirements (TPL-3.18)
   C. Coexistence Specifications (TPL-3.19)
   D. Detailed Specifications
```

---

#### TPL-3.17: Tailoring Decision Log

**Purpose:** Record all Reference Architecture tailoring decisions

| Decision ID | RA Element | Decision Type | Decision | Rationale | Impact Assessment | Approved By | Date |
|-------------|------------|---------------|----------|-----------|-------------------|-------------|------|
| TDL-001 | | ☐Confirm ☐Adapt ☐Extend ☐Remove | | | | | |

---

#### TPL-3.18: Transition Requirements Document

**Purpose:** Define requirements for transitioning from AS-IS to TO-BE

| Requirement ID | Category | Description | Priority | Dependencies | Target Phase | Owner |
|----------------|----------|-------------|----------|--------------|--------------|-------|
| TRQ-001 | ☐Data Migration ☐Integration ☐Parallel Run ☐Training ☐Cutover | | ☐Must ☐Should ☐Could | | Phase | |

---

#### TPL-3.19: Coexistence Specification

**Purpose:** Plan system coexistence during transition

| Legacy System | TO-BE Component | Coexistence Pattern | Duration | Data Sync | Exit Criteria |
|---------------|-----------------|---------------------|----------|-----------|---------------|
| | | ☐Parallel ☐Strangler ☐Facade | months | ☐One-way ☐Bi-directional | |

---

#### TPL-3.20: ADAPT Summary Template

**Purpose:** Consolidate ADAPT phase outputs and obtain sign-off

| **Section** | **Content** |
|-------------|-------------|
| **Organization** | |
| **Reference Architecture Used** | ☐ PDU-RA ☐ RA-RA ☐ SDA-RA |
| **TO-BE Architecture Version** | v . |
| **Capabilities Confirmed** | of |
| **Capabilities Adapted** | |
| **Capabilities Extended** | |
| **Capabilities Removed** | |
| **Key Tailoring Decisions** | |
| **DPI/BB Integrations Specified** | |
| **Platform Tier Selected** | ☐ Tier 1 ☐ Tier 2 ☐ Tier 3 |
| **Data Migrations Required** | |
| **Coexistence Required** | ☐ Yes ☐ No (Duration: months) |
| **Key Risks Identified** | |
| **Architecture Approval** | ☐ Approved ☐ Conditional ☐ Pending |
| **Proceed to PLAN?** | ☐ Yes ☐ No ☐ Conditional |
| **Conditions (if any)** | |

**Sign-off:**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Architecture Board Chair | | | |
| EA Lead | | | |
| Technical Lead | | | |
| Project Sponsor | | | |

---

### A.2.4 PLAN Phase Templates

#### TPL-4.1: Implementation Approach Evaluation Matrix

**Purpose:** Compare and select implementation approach

| Approach | Description | Pros | Cons | Risk | Cost | Duration | Score |
|----------|-------------|------|------|------|------|----------|-------|
| **Big Bang** | Full deployment at once | Fast transformation, no parallel running costs | High risk, difficult rollback | ☐High ☐Med ☐Low | € | mo | |
| **Phased** | Sequential capability deployment | Lower risk, learning opportunities | Longer duration, integration complexity | ☐High ☐Med ☐Low | € | mo | |
| **Parallel** | Old and new run simultaneously | Low risk, easy rollback | High cost, complexity | ☐High ☐Med ☐Low | € | mo | |
| **Pilot First** | Single unit then expand | Proof of concept, refinement | May not scale, limited learning | ☐High ☐Med ☐Low | € | mo | |

**Selected Approach:** ☐ Big Bang ☐ Phased ☐ Parallel ☐ Pilot First

---

#### TPL-4.2: Initiative Inventory

**Purpose:** Catalog all implementation initiatives

| Initiative ID | Name | Description | TO-BE Component | Gap(s) Addressed | Priority | Estimated Effort | Owner |
|---------------|------|-------------|-----------------|------------------|----------|------------------|-------|
| INI-001 | | | | GAP-xxx | ☐Must ☐Should ☐Could ☐Won't | person-days | |

---

#### TPL-4.3: Dependency Matrix

**Purpose:** Map dependencies between initiatives and external factors

| Initiative | Depends On | Dependency Type | Constraint | Lead Time | Risk if Delayed |
|------------|------------|-----------------|------------|-----------|-----------------|
| INI-001 | INI-xxx, DPI-xxx | ☐Technical ☐Resource ☐External ☐Data | | weeks | |

---

#### TPL-4.4: Sequencing Criteria Assessment

**Purpose:** Score initiatives for sequencing decisions

| Initiative | Dependencies (1-5) | Risk if Delayed (1-5) | Quick Win? (1-5) | Resource Availability (1-5) | Sequence Score | Recommended Order |
|------------|-------------------|----------------------|------------------|----------------------------|----------------|-------------------|
| INI-001 | | | | | Avg: | |

**Scoring Guide:**
- Dependencies: 5 = None, 1 = Many blocking dependencies
- Risk if Delayed: 5 = Critical path, 1 = Can wait
- Quick Win: 5 = High visibility, low effort, 1 = Low visibility, high effort
- Resource Availability: 5 = Fully available, 1 = Major constraints

---

#### TPL-4.5: Quick Win Identification

**Purpose:** Identify early wins to build momentum

| Initiative | Implementation Time | Visibility | Effort | Value | Quick Win Score |
|------------|---------------------|------------|--------|-------|-----------------|
| INI-001 | ☐<3mo=5 ☐3-6mo=3 ☐>6mo=1 | 1-5 | ☐Low=5 ☐Med=3 ☐High=1 | 1-5 | Avg (≥4 = QW) |

**Identified Quick Wins:**
1.
2.
3.

---

#### TPL-4.6: Phase Definition Template

**Purpose:** Define implementation phases

| **Field** | **Value** |
|-----------|-----------|
| **Phase Number** | |
| **Phase Name** | |
| **Duration** | months |
| **Start Date** | YYYY-MM-DD |
| **End Date** | YYYY-MM-DD |
| **Phase Objectives** | |
| **Initiatives Included** | INI-xxx, INI-yyy |
| **Key Deliverables** | |
| **Success Criteria** | |
| **Entry Criteria** | |
| **Exit Criteria** | |
| **Decision Gate** | DG- |
| **Dependencies** | |
| **Key Risks** | |

---

#### TPL-4.7: Milestone Definition

**Purpose:** Define key milestones

| Milestone ID | Name | Phase | Target Date | Deliverables | Verification Method | Owner |
|--------------|------|-------|-------------|--------------|---------------------|-------|
| MS-001 | | | YYYY-MM-DD | | | |

---

#### TPL-4.8: Decision Gate Framework

**Purpose:** Define governance decision gates

| Gate | Name | Timing | Purpose | Key Questions | Go/No-Go Criteria |
|------|------|--------|---------|---------------|-------------------|
| DG-0 | Initiation | Pre-DISCOVER | Confirm scope & commitment | Is scope clear? Sponsor committed? Resources available? | Sponsor sign-off, budget allocated |
| DG-1 | Classification | Post-DISCOVER | Confirm org classification | Classification confirmed? DPI assessed? RA identified? | TPL-1.6 signed |
| DG-2 | Baseline | Post-ASSESS | Confirm AS-IS & gaps | AS-IS complete? Gaps identified & prioritized? | TPL-2.20 signed |
| DG-3 | Architecture | Post-ADAPT | Approve TO-BE architecture | TO-BE approved? Transition defined? Risks acceptable? | Architecture Board approval |
| DG-4 | Plan | Post-PLAN | Approve roadmap & business case | Roadmap approved? Resources secured? Budget approved? | Steering Committee approval |
| DG-5 | Phase | Per-phase | Phase completion | Phase objectives met? Quality acceptable? Continue? | Phase exit criteria met |
| DG-6 | Go-Live | Pre-deployment | Production readiness | Ready for production? Rollback plan ready? Support ready? | Go-live checklist complete |
| DG-7 | Closure | Post-deployment | Project closure | Benefits realized? Lessons captured? Handover complete? | Closure report approved |

---

#### TPL-4.9: Effort Estimation Template

**Purpose:** Estimate effort for initiatives

| Initiative | Activity | Role(s) | Effort (person-days) | Duration (weeks) | Assumptions |
|------------|----------|---------|----------------------|------------------|-------------|
| INI-001 | Analysis | BA, Architect | | | |
| | Design | Architect, Tech Lead | | | |
| | Build | Developers | | | |
| | Test | Testers | | | |
| | Deploy | DevOps, Support | | | |
| | **Total** | | **** | **** | |

---

#### TPL-4.10: Resource Requirements by Phase

**Purpose:** Plan resource allocation across phases

| Role | Phase 1 (FTE) | Phase 2 (FTE) | Phase 3 (FTE) | Phase N (FTE) | Total (FTE-months) |
|------|---------------|---------------|---------------|---------------|---------------------|
| Project Manager | | | | | |
| Enterprise Architect | | | | | |
| Solution Architect | | | | | |
| Business Analyst | | | | | |
| Developer | | | | | |
| Tester | | | | | |
| Change Manager | | | | | |
| Training Lead | | | | | |
| **TOTAL** | | | | | |

---

#### TPL-4.11: Timeline Template

**Purpose:** Visual implementation timeline

```
IMPLEMENTATION TIMELINE

Year 1                          Year 2                          Year 3
Q1    Q2    Q3    Q4    Q1    Q2    Q3    Q4    Q1    Q2    Q3    Q4
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|

Project Phases:
[====Phase 1: Foundation====]
            [DG-5]
                  [========Phase 2: Core========]
                                    [DG-5]
                                          [========Phase 3: Advanced========]
                                                            [DG-6][DG-7]

DPI Dependencies:
────────Identity BB Ready────────┐
                                 └────Payments BB Ready────┐
                                                           └────Full Integration────

Key Milestones:
     MS-001        MS-002              MS-003              MS-004      MS-005
       ●             ●                   ●                   ●           ●

Decision Gates:
DG-1        DG-2        DG-3        DG-4        DG-5    DG-5    DG-6    DG-7
  ◆           ◆           ◆           ◆           ◆       ◆       ◆       ◆
```

---

#### TPL-4.12: Business Case Document Structure

**Purpose:** Standard structure for business case documentation

```
BUSINESS CASE DOCUMENT

1. Executive Summary
   - Investment Request
   - Key Benefits
   - Recommendation

2. Strategic Context
   2.1 Business Drivers
   2.2 Strategic Alignment
   2.3 Problem Statement
   2.4 Opportunity Assessment

3. Current State Costs
   3.1 Operating Costs (TPL-4.13)
   3.2 Hidden/Opportunity Costs
   3.3 Risk of Inaction

4. Proposed Solution
   4.1 Solution Overview
   4.2 Scope & Boundaries
   4.3 Implementation Approach
   4.4 Timeline Summary

5. Investment Required (TPL-4.15)
   5.1 Capital Costs
   5.2 Operating Costs
   5.3 Contingency
   5.4 Funding Sources

6. Benefits
   6.1 Quantified Benefits
   6.2 Qualitative Benefits
   6.3 Benefit Realization Timeline (TPL-4.14)
   6.4 Benefit Owners

7. Financial Analysis (TPL-4.16)
   7.1 ROI Calculation
   7.2 Payback Period
   7.3 NPV Analysis
   7.4 Sensitivity Analysis

8. Risk Assessment
   8.1 Key Risks
   8.2 Mitigation Strategies
   8.3 Residual Risks

9. Alternatives Considered
   9.1 Do Nothing
   9.2 Alternative Approaches
   9.3 Comparison Matrix

10. Recommendation
    10.1 Recommended Option
    10.2 Key Success Factors
    10.3 Decision Required

Appendices
   A. Detailed Cost Breakdown
   B. Benefit Calculations
   C. Risk Register
   D. Assumptions Log
```

---

#### TPL-4.13: Current State Cost Analysis

**Purpose:** Establish baseline costs for comparison

| Cost Category | Annual Cost | 5-Year Cost | Cost Driver | Notes |
|---------------|-------------|-------------|-------------|-------|
| Personnel | € | € | | |
| Systems Maintenance | € | € | | |
| Infrastructure | € | € | | |
| Licensing | € | € | | |
| Support Contracts | € | € | | |
| Manual Workarounds | € | € | | |
| Error/Rework Costs | € | € | | |
| Compliance/Penalties | € | € | | |
| **TOTAL** | **€** | **€** | | |

---

#### TPL-4.14: Benefit Realization Timeline

**Purpose:** Project benefits over time

| Benefit Category | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 | Total | Measurement Method |
|------------------|--------|--------|--------|--------|--------|-------|-------------------|
| Efficiency Gains | € | € | € | € | € | € | |
| Cost Avoidance | € | € | € | € | € | € | |
| Revenue Increase | € | € | € | € | € | € | |
| Risk Reduction | € | € | € | € | € | € | |
| **TOTAL QUANTIFIED** | **€** | **€** | **€** | **€** | **€** | **€** | |

**Qualitative Benefits:**
| Benefit | Description | Stakeholder Impact |
|---------|-------------|-------------------|
| | | |

---

#### TPL-4.15: Investment Summary

**Purpose:** Summarize total investment required

| Investment Category | Phase 1 | Phase 2 | Phase 3 | Total |
|---------------------|---------|---------|---------|-------|
| Software/Licenses | € | € | € | € |
| Hardware/Infrastructure | € | € | € | € |
| Cloud Services (Year 1) | € | € | € | € |
| Implementation Services | € | € | € | € |
| Training | € | € | € | € |
| Change Management | € | € | € | € |
| Data Migration | € | € | € | € |
| Testing | € | € | € | € |
| Contingency (15%) | € | € | € | € |
| **TOTAL CAPEX** | **€** | **€** | **€** | **€** |
| **Annual OPEX (post-impl)** | | | | **€/yr** |

---

#### TPL-4.16: ROI Calculation Worksheet

**Purpose:** Calculate return on investment

| Metric | Calculation | Value |
|--------|-------------|-------|
| **Total Investment** | Sum of all CAPEX | € |
| **Total Benefits (5yr)** | Sum of benefit streams | € |
| **Net Benefit** | Benefits - Investment | € |
| **ROI** | (Net Benefit / Investment) × 100 | % |
| **Payback Period** | Investment / Annual Benefit | years |
| **NPV (at % discount)** | Discounted cash flows | € |
| **IRR** | Internal Rate of Return | % |

**Cash Flow Analysis:**

| Year | Investment | Benefits | Net Cash Flow | Cumulative | Discounted (%) |
|------|------------|----------|---------------|------------|----------------|
| 0 | (€ ) | € 0 | (€ ) | (€ ) | (€ ) |
| 1 | (€ ) | € | € | € | € |
| 2 | € 0 | € | € | € | € |
| 3 | € 0 | € | € | € | € |
| 4 | € 0 | € | € | € | € |
| 5 | € 0 | € | € | € | € |
| **Total** | **(€ )** | **€** | **€** | | **NPV: €** |

---

#### TPL-4.17: Risk Assessment Template

**Purpose:** Identify and assess implementation risks

| Risk ID | Description | Category | Probability (1-5) | Impact (1-5) | Score (P×I) | Owner |
|---------|-------------|----------|-------------------|--------------|-------------|-------|
| RSK-001 | | ☐Technical ☐Resource ☐External ☐Organizational ☐Financial | | | | |

**Risk Matrix:**

```
        │ 1-Low    2          3-Medium   4          5-High
Impact  │
────────┼─────────────────────────────────────────────────────
5-High  │ 5        10         15         20         25
4       │ 4        8          12         16         20
3-Medium│ 3        6          9          12         15
2       │ 2        4          6          8          10
1-Low   │ 1        2          3          4          5
        └─────────────────────────────────────────────────────
         1-Low    2          3-Medium   4          5-High
                        Probability
```

**Risk Levels:** 1-6 = Low (🟢) | 7-12 = Medium (🟡) | 13-25 = High (🔴)

---

#### TPL-4.18: Risk Mitigation Template

**Purpose:** Plan risk mitigations

| Risk ID | Risk Description | Strategy | Mitigation Actions | Timeline | Cost | Residual Risk |
|---------|------------------|----------|-------------------|----------|------|---------------|
| RSK-001 | | ☐Avoid ☐Mitigate ☐Transfer ☐Accept | | | € | ☐High ☐Med ☐Low |

---

#### TPL-4.19: External Dependency Register

**Purpose:** Track external dependencies

| Dependency ID | Description | External Owner | Type | Status | Required Date | Risk if Delayed | Mitigation |
|---------------|-------------|----------------|------|--------|---------------|-----------------|------------|
| DEP-001 | | | ☐DPI ☐Vendor ☐Regulatory ☐Partner ☐Infrastructure | ☐On-track ☐At-risk ☐Delayed | | | |

---

#### TPL-4.20: Implementation Roadmap (Visual)

**Purpose:** Visual representation of implementation roadmap

```
IMPLEMENTATION ROADMAP

                    ─────────────────── TIMELINE ───────────────────
                    Year 1              Year 2              Year 3
                    Q1  Q2  Q3  Q4     Q1  Q2  Q3  Q4     Q1  Q2  Q3  Q4

PHASES              ├───────────────────────────────────────────────────┤
Phase 1: Foundation [█████████████]
Phase 2: Core                      [███████████████████]
Phase 3: Advanced                                       [████████████████]
Phase 4: Optimization                                               [████]

CAPABILITY STREAMS  ├───────────────────────────────────────────────────┤
Business Caps       [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]
Data Foundation     [░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]
App Development              [░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]
Infrastructure      [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]

DPI INTEGRATIONS    ├───────────────────────────────────────────────────┤
Identity BB         [░░░░▓▓▓▓]
Payments BB                        [░░░▓▓▓▓]
Messaging BB                                   [░░▓▓▓]

KEY MILESTONES      ├───────────────────────────────────────────────────┤
                        ●           ●              ●           ●      ●
                      MS-001      MS-002        MS-003      MS-004  MS-005

DECISION GATES      ├───────────────────────────────────────────────────┤
                    ◆       ◆           ◆           ◆       ◆   ◆   ◆
                   DG-3    DG-4       DG-5        DG-5    DG-5 DG-6 DG-7

LEGEND
█ Implementation    ░ Planning/Preparation    ● Milestone    ◆ Decision Gate
```

---

#### TPL-4.21: Gate Review Package Checklist

**Purpose:** Ensure complete gate review documentation

| Item | Required | Included | Document/Link | Notes |
|------|----------|----------|---------------|-------|
| Phase Summary Report | Yes | ☐ | | |
| Deliverables Checklist | Yes | ☐ | | |
| Quality Assessment | Yes | ☐ | | |
| Risk Status Update | Yes | ☐ | | |
| Budget Status | Yes | ☐ | | |
| Schedule Status | Yes | ☐ | | |
| Issues Log | Yes | ☐ | | |
| Stakeholder Feedback | Recommended | ☐ | | |
| Lessons Learned | Recommended | ☐ | | |
| Next Phase Plan | Yes | ☐ | | |
| Updated Roadmap | If changed | ☐ | | |
| Go/No-Go Recommendation | Yes | ☐ | | |

---

#### TPL-4.22: PLAN Summary Template

**Purpose:** Consolidate PLAN phase outputs and obtain sign-off

| **Section** | **Content** |
|-------------|-------------|
| **Organization** | |
| **Implementation Approach** | ☐ Big Bang ☐ Phased ☐ Parallel ☐ Pilot First |
| **Number of Phases** | |
| **Total Duration** | months |
| **Total Investment** | € |
| **Expected ROI** | % |
| **Payback Period** | years |
| **NPV** | € |
| **Key Milestones** | |
| **Critical Path Items** | |
| **Critical Dependencies** | |
| **Top 5 Risks** | |
| **Resource Requirements** | FTE-months |
| **External Dependencies** | |
| **Roadmap Approval** | ☐ Approved ☐ Conditional ☐ Pending |
| **Business Case Approval** | ☐ Approved ☐ Conditional ☐ Pending |
| **Proceed to EXECUTE?** | ☐ Yes ☐ No ☐ Conditional |
| **Conditions (if any)** | |

**Sign-off:**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Steering Committee Chair | | | |
| Finance Representative | | | |
| EA Lead | | | |
| Project Sponsor | | | |

---

### A.2.5 EXECUTE Phase Templates

#### TPL-5.1: Phase Kickoff Checklist

**Purpose:** Ensure phase readiness before execution begins

| Item | Status | Owner | Notes |
|------|--------|-------|-------|
| Gate approval received | ☐ | | |
| Phase plan finalized | ☐ | | |
| Team mobilized | ☐ | | |
| Roles & responsibilities confirmed | ☐ | | |
| Resources allocated | ☐ | | |
| Budget confirmed | ☐ | | |
| Environments ready | ☐ | | |
| Tools configured | ☐ | | |
| Communication plan in place | ☐ | | |
| Risk mitigations active | ☐ | | |
| Kickoff meeting held | ☐ | | |
| Stakeholders notified | ☐ | | |

---

#### TPL-5.2: Sprint/Iteration Planning Template

**Purpose:** Plan work iterations

| **Sprint Information** | |
|------------------------|---|
| Sprint Number | |
| Sprint Duration | weeks |
| Start Date | YYYY-MM-DD |
| End Date | YYYY-MM-DD |
| Sprint Goal | |

**Sprint Backlog:**

| Item ID | Description | Story Points | Assigned To | Status | Notes |
|---------|-------------|--------------|-------------|--------|-------|
| | | | | ☐Todo ☐In Progress ☐Done | |

**Sprint Capacity:**

| Team Member | Role | Available Days | Committed Points |
|-------------|------|----------------|------------------|
| | | | |
| **TOTAL** | | | |

---

#### TPL-5.3: Progress Report Template

**Purpose:** Regular status reporting

| **Report Information** | |
|------------------------|---|
| Reporting Period | to |
| Report Date | YYYY-MM-DD |
| Phase | |
| Prepared By | |

**Overall Status:** ☐ 🟢 On Track ☐ 🟡 At Risk ☐ 🔴 Off Track

**Status Summary:**

| Area | Status | Trend | Notes |
|------|--------|-------|-------|
| Scope | ☐🟢 ☐🟡 ☐🔴 | ☐↑ ☐→ ☐↓ | |
| Schedule | ☐🟢 ☐🟡 ☐🔴 | ☐↑ ☐→ ☐↓ | |
| Budget | ☐🟢 ☐🟡 ☐🔴 | ☐↑ ☐→ ☐↓ | |
| Quality | ☐🟢 ☐🟡 ☐🔴 | ☐↑ ☐→ ☐↓ | |
| Resources | ☐🟢 ☐🟡 ☐🔴 | ☐↑ ☐→ ☐↓ | |
| Risks | ☐🟢 ☐🟡 ☐🔴 | ☐↑ ☐→ ☐↓ | |

**Accomplishments This Period:**
1.
2.
3.

**Planned Activities Next Period:**
1.
2.
3.

**Issues Requiring Attention:**

| Issue | Impact | Action Required | Owner | Due |
|-------|--------|-----------------|-------|-----|
| | | | | |

**Budget Status:**
- Approved Budget: €
- Spent to Date: € ( %)
- Forecast at Completion: €
- Variance: € ( %)

**Schedule Status:**
- Planned % Complete: %
- Actual % Complete: %
- Variance: %

---

#### TPL-5.4: Change Request Template

**Purpose:** Formal change request management

| **Field** | **Value** |
|-----------|-----------|
| **Change ID** | CR- |
| **Request Date** | YYYY-MM-DD |
| **Requestor** | |
| **Change Title** | |
| **Description** | |
| **Justification** | |
| **Category** | ☐Scope ☐Schedule ☐Budget ☐Technical ☐Resource |
| **Priority** | ☐Critical ☐High ☐Medium ☐Low |

**Impact Assessment:**

| Area | Impact Description | Magnitude |
|------|-------------------|-----------|
| Scope | | ☐None ☐Low ☐Medium ☐High |
| Schedule | | days/weeks |
| Budget | | € |
| Resources | | |
| Quality | | ☐None ☐Low ☐Medium ☐High |
| Risk | | ☐None ☐Low ☐Medium ☐High |

**Options Analysis:**

| Option | Description | Pros | Cons | Recommendation |
|--------|-------------|------|------|----------------|
| 1 | | | | ☐ |
| 2 | | | | ☐ |
| 3 | Reject | | | ☐ |

**Approval:**

| Role | Decision | Name | Date |
|------|----------|------|------|
| Project Manager | ☐Approve ☐Reject ☐Escalate | | |
| Sponsor (if escalated) | ☐Approve ☐Reject | | |
| CCB (if required) | ☐Approve ☐Reject | | |

**Status:** ☐ Submitted ☐ Under Review ☐ Approved ☐ Rejected ☐ Implemented

---

#### TPL-5.5: Go-Live Readiness Checklist

**Purpose:** Validate production readiness

| **Category** | **Item** | **Status** | **Owner** | **Evidence** |
|--------------|----------|------------|-----------|--------------|
| **Technical** |||||
| | All functional tests passed | ☐ | | |
| | All integration tests passed | ☐ | | |
| | Performance tests passed | ☐ | | |
| | Security assessment completed | ☐ | | |
| | Penetration testing completed | ☐ | | |
| | Accessibility testing completed | ☐ | | |
| | Backup/recovery tested | ☐ | | |
| | DR procedures tested | ☐ | | |
| | Monitoring configured | ☐ | | |
| | Alerting configured | ☐ | | |
| | Production environment validated | ☐ | | |
| **Operational** |||||
| | Support team trained | ☐ | | |
| | Operations runbooks complete | ☐ | | |
| | Incident procedures defined | ☐ | | |
| | Escalation paths documented | ☐ | | |
| | Support tools configured | ☐ | | |
| | SLAs defined and agreed | ☐ | | |
| **Documentation** |||||
| | User documentation complete | ☐ | | |
| | Technical documentation complete | ☐ | | |
| | Training materials ready | ☐ | | |
| | Release notes prepared | ☐ | | |
| **Business** |||||
| | User training completed | ☐ | | |
| | UAT sign-off received | ☐ | | |
| | Communications sent | ☐ | | |
| | Change management activities complete | ☐ | | |
| | Business continuity plan updated | ☐ | | |
| **Contingency** |||||
| | Rollback plan documented | ☐ | | |
| | Rollback tested | ☐ | | |
| | Rollback decision criteria defined | ☐ | | |
| | War room arrangements confirmed | ☐ | | |

**Go-Live Decision:**

| Criterion | Met? | Notes |
|-----------|------|-------|
| All Critical items complete | ☐Yes ☐No | |
| No outstanding Critical defects | ☐Yes ☐No | |
| Key stakeholders approved | ☐Yes ☐No | |
| Support team ready | ☐Yes ☐No | |

**Decision:** ☐ GO ☐ NO-GO ☐ GO with conditions

**Conditions (if applicable):**

**Sign-off:**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Technical Lead | | | |
| Operations Lead | | | |
| Business Lead | | | |
| Project Sponsor | | | |

---

#### TPL-5.6: Lessons Learned Template

**Purpose:** Capture and share lessons from implementation

| **Session Information** | |
|-------------------------|---|
| Project/Phase | |
| Session Date | YYYY-MM-DD |
| Facilitator | |
| Participants | |

**What Worked Well:**

| Category | Success | Contributing Factors | How to Repeat |
|----------|---------|----------------------|---------------|
| Planning | | | |
| Execution | | | |
| Technology | | | |
| People | | | |
| Process | | | |
| Vendor/Partner | | | |

**What Didn't Work:**

| Category | Issue | Root Cause | Recommendation |
|----------|-------|------------|----------------|
| Planning | | | |
| Execution | | | |
| Technology | | | |
| People | | | |
| Process | | | |
| Vendor/Partner | | | |

**Key Recommendations:**

| # | Recommendation | Priority | Owner | Target Date |
|---|----------------|----------|-------|-------------|
| 1 | | ☐High ☐Med ☐Low | | |
| 2 | | ☐High ☐Med ☐Low | | |
| 3 | | ☐High ☐Med ☐Low | | |

**Distribution List:**
-
-
-

---

# B. CHECKLISTS

## B.1 Phase Entry/Exit Checklists

### DISCOVER Entry Checklist

| Item | Required | Status | Notes |
|------|----------|--------|-------|
| Sponsor identified and committed | Yes | ☐ | |
| Scope statement defined | Yes | ☐ | |
| Initial stakeholders identified | Yes | ☐ | |
| Assessment team assigned | Yes | ☐ | |
| Access to organization information granted | Yes | ☐ | |
| Timeline agreed | Yes | ☐ | |
| Kick-off meeting scheduled | Recommended | ☐ | |

**Entry Decision:** ☐ Proceed to DISCOVER ☐ Prerequisites not met

---

### DISCOVER Exit → ASSESS Entry

| Item | Required | Status | Notes |
|------|----------|--------|-------|
| Organization classification confirmed (TPL-1.3) | Yes | ☐ | |
| DPI readiness assessed (TPL-1.4/1.5) | Yes | ☐ | |
| DISCOVER summary signed off (TPL-1.6) | Yes | ☐ | |
| Appropriate Reference Architecture identified | Yes | ☐ | |
| DG-1 gate approval received | Yes | ☐ | |
| ASSESS team briefed on classification results | Yes | ☐ | |
| Access to systems/documentation for AS-IS analysis | Yes | ☐ | |
| ASSESS timeline agreed | Yes | ☐ | |

**Exit Decision:** ☐ Proceed to ASSESS ☐ Further work required

---

### ASSESS Exit → ADAPT Entry

| Item | Required | Status | Notes |
|------|----------|--------|-------|
| AS-IS documentation complete - Business domain | Yes | ☐ | |
| AS-IS documentation complete - Data domain | Yes | ☐ | |
| AS-IS documentation complete - Application domain | Yes | ☐ | |
| AS-IS documentation complete - Technology domain | Yes | ☐ | |
| All templates TPL-2.1 through TPL-2.17 completed | Yes | ☐ | |
| Gap analysis complete (TPL-2.18/2.19) | Yes | ☐ | |
| ASSESS summary signed off (TPL-2.20) | Yes | ☐ | |
| DG-2 gate approval received | Yes | ☐ | |
| Reference Architecture available for TO-BE design | Yes | ☐ | |
| Architecture team assigned for ADAPT | Yes | ☐ | |
| ADAPT timeline agreed | Yes | ☐ | |

**Exit Decision:** ☐ Proceed to ADAPT ☐ Further work required

---

### ADAPT Exit → PLAN Entry

| Item | Required | Status | Notes |
|------|----------|--------|-------|
| TO-BE architecture documented (TPL-3.16) | Yes | ☐ | |
| All tailoring decisions logged (TPL-3.17) | Yes | ☐ | |
| Transition requirements defined (TPL-3.18) | Yes | ☐ | |
| Coexistence requirements specified (TPL-3.19) | If applicable | ☐ | |
| ADAPT summary signed off (TPL-3.20) | Yes | ☐ | |
| DG-3 gate approval received | Yes | ☐ | |
| Architecture board approval received | Yes | ☐ | |
| Planning team mobilized | Yes | ☐ | |
| PLAN timeline agreed | Yes | ☐ | |

**Exit Decision:** ☐ Proceed to PLAN ☐ Further work required

---

### PLAN Exit → EXECUTE Entry

| Item | Required | Status | Notes |
|------|----------|--------|-------|
| Implementation roadmap approved (TPL-4.20) | Yes | ☐ | |
| Business case approved (TPL-4.12) | Yes | ☐ | |
| Resources secured and allocated | Yes | ☐ | |
| Budget approved | Yes | ☐ | |
| PLAN summary signed off (TPL-4.22) | Yes | ☐ | |
| DG-4 gate approval received | Yes | ☐ | |
| Steering committee approval received | Yes | ☐ | |
| Project team mobilized | Yes | ☐ | |
| Vendor contracts in place (if applicable) | Yes | ☐ | |
| Environments provisioned | Yes | ☐ | |

**Exit Decision:** ☐ Proceed to EXECUTE ☐ Further work required

---

## B.2 Quality Assurance Checklists

### AS-IS Documentation Quality Checklist

| Quality Criterion | Status | Evidence |
|-------------------|--------|----------|
| All BDAT domains covered | ☐ | |
| Current state accurately reflects reality | ☐ | Validated with stakeholders |
| Service catalog complete (TPL-2.1) | ☐ | |
| Capability assessment complete (TPL-2.2) | ☐ | |
| Application inventory complete (TPL-2.6) | ☐ | |
| Integration points documented (TPL-2.7) | ☐ | |
| Data assets catalogued (TPL-2.11) | ☐ | |
| Data flows documented (TPL-2.12) | ☐ | |
| Infrastructure inventory complete (TPL-2.15) | ☐ | |
| Technical debt identified (TPL-2.16) | ☐ | |
| Security assessment complete (TPL-2.17) | ☐ | |
| Stakeholder review completed | ☐ | |
| Documentation version controlled | ☐ | |

**Quality Assessment:** ☐ Meets quality standards ☐ Remediation required

---

### Gap Analysis Quality Checklist

| Quality Criterion | Status | Evidence |
|-------------------|--------|----------|
| Gaps traced to specific RA requirements | ☐ | |
| Gap severity consistently assessed | ☐ | |
| All high severity gaps have remediation options | ☐ | |
| All medium severity gaps have remediation options | ☐ | |
| No orphan gaps (all linked to capability/component) | ☐ | |
| Gap owners assigned | ☐ | |
| Gap priorities determined | ☐ | |
| Gaps validated with stakeholders | ☐ | |
| Dependencies between gaps identified | ☐ | |
| Gap register complete (TPL-2.19) | ☐ | |

**Quality Assessment:** ☐ Meets quality standards ☐ Remediation required

---

### TO-BE Architecture Quality Checklist

| Quality Criterion | Status | Evidence |
|-------------------|--------|----------|
| Addresses all high severity gaps | ☐ | |
| Addresses all medium severity gaps | ☐ | |
| Maintains RA inheritance integrity | ☐ | |
| All adaptations justified in decision log | ☐ | |
| Architecture principles applied and documented | ☐ | |
| DPI/BB integrations specified | ☐ | |
| Build/buy decisions documented | ☐ | |
| Data architecture complete | ☐ | |
| Security requirements defined | ☐ | |
| Transition requirements defined | ☐ | |
| Architecture traceability maintained | ☐ | |
| Peer review completed | ☐ | |
| Architecture board review completed | ☐ | |

**Quality Assessment:** ☐ Meets quality standards ☐ Remediation required

---

### Business Case Quality Checklist

| Quality Criterion | Status | Evidence |
|-------------------|--------|----------|
| All costs identified and justified | ☐ | |
| Cost assumptions documented | ☐ | |
| Benefits are measurable | ☐ | |
| Benefit assumptions realistic | ☐ | |
| Benefit realization timeline reasonable | ☐ | |
| Financial calculations verified | ☐ | |
| Risk-adjusted projections included | ☐ | |
| Sensitivity analysis performed | ☐ | |
| Alternatives considered and documented | ☐ | |
| Comparison with alternatives complete | ☐ | |
| Finance review completed | ☐ | |
| Recommendation clear and justified | ☐ | |

**Quality Assessment:** ☐ Meets quality standards ☐ Remediation required

---

### Roadmap Quality Checklist

| Quality Criterion | Status | Evidence |
|-------------------|--------|----------|
| All initiatives sequenced logically | ☐ | |
| Dependencies identified and managed | ☐ | |
| Critical path identified | ☐ | |
| Resources realistically allocated | ☐ | |
| Resource conflicts resolved | ☐ | |
| Decision gates defined | ☐ | |
| Milestones achievable | ☐ | |
| Risk mitigation integrated | ☐ | |
| External dependencies tracked | ☐ | |
| DPI dependencies accounted for | ☐ | |
| Contingency time included | ☐ | |
| Stakeholder review completed | ☐ | |

**Quality Assessment:** ☐ Meets quality standards ☐ Remediation required

---

## B.3 Consolidated DPI Readiness Checklist

*This comprehensive checklist consolidates the detailed DPI assessment from TPL-1.4 into a quick reference format.*

### Pillar 1: Digital Identity (Weight: 25%)

| # | Component | Sub-component | Status | Score |
|---|-----------|---------------|--------|-------|
| 1.1.1 | National ID System | Unique identifier scheme exists | ☐ | 0-4 |
| 1.1.2 | | Coverage >80% of population | ☐ | 0-4 |
| 1.1.3 | | Digital representation available | ☐ | 0-4 |
| 1.1.4 | | Verification services operational | ☐ | 0-4 |
| 1.2.1 | Authentication Services | Single Sign-On available | ☐ | 0-4 |
| 1.2.2 | | Multi-factor authentication supported | ☐ | 0-4 |
| 1.2.3 | | Federation protocols implemented | ☐ | 0-4 |
| 1.2.4 | | Mobile authentication available | ☐ | 0-4 |
| 1.3.1 | Identity Verification APIs | Real-time verification available | ☐ | 0-4 |
| 1.3.2 | | API documentation published | ☐ | 0-4 |
| 1.3.3 | | SLA defined and monitored | ☐ | 0-4 |
| 1.3.4 | | Error handling standardized | ☐ | 0-4 |
| 1.4.1 | Consent Management | Consent framework defined | ☐ | 0-4 |
| 1.4.2 | | Audit trail maintained | ☐ | 0-4 |
| 1.4.3 | | User control mechanisms exist | ☐ | 0-4 |
| 1.4.4 | | Revocation process operational | ☐ | 0-4 |

**Pillar 1 Score:** ___/64 → Weighted: ___/25

---

### Pillar 2: Interoperability (Weight: 25%)

| # | Component | Sub-component | Status | Score |
|---|-----------|---------------|--------|-------|
| 2.1.1 | Data Exchange Platform | X-Road or equivalent operational | ☐ | 0-4 |
| 2.1.2 | | Security layer implemented | ☐ | 0-4 |
| 2.1.3 | | Logging and monitoring active | ☐ | 0-4 |
| 2.1.4 | | Disaster recovery tested | ☐ | 0-4 |
| 2.2.1 | API Gateway | Central gateway available | ☐ | 0-4 |
| 2.2.2 | | Rate limiting implemented | ☐ | 0-4 |
| 2.2.3 | | Security policies enforced | ☐ | 0-4 |
| 2.2.4 | | Analytics available | ☐ | 0-4 |
| 2.3.1 | Standards Adoption | Data exchange standards defined | ☐ | 0-4 |
| 2.3.2 | | API standards published | ☐ | 0-4 |
| 2.3.3 | | Compliance verification process | ☐ | 0-4 |
| 2.3.4 | | Version management | ☐ | 0-4 |
| 2.4.1 | Service Catalog | Central catalog maintained | ☐ | 0-4 |
| 2.4.2 | | Service discovery enabled | ☐ | 0-4 |
| 2.4.3 | | SLA information published | ☐ | 0-4 |
| 2.4.4 | | Usage metrics available | ☐ | 0-4 |

**Pillar 2 Score:** ___/64 → Weighted: ___/25

---

### Pillar 3: Data Infrastructure (Weight: 20%)

| # | Component | Sub-component | Status | Score |
|---|-----------|---------------|--------|-------|
| 3.1.1 | Base Registries | Population register operational | ☐ | 0-4 |
| 3.1.2 | | Business register operational | ☐ | 0-4 |
| 3.1.3 | | Property register operational | ☐ | 0-4 |
| 3.1.4 | | Vehicle register operational | ☐ | 0-4 |
| 3.2.1 | Data Quality Framework | Quality standards defined | ☐ | 0-4 |
| 3.2.2 | | Measurement processes exist | ☐ | 0-4 |
| 3.2.3 | | Remediation procedures | ☐ | 0-4 |
| 3.2.4 | | Quality reporting | ☐ | 0-4 |
| 3.3.1 | Master Data Management | MDM strategy defined | ☐ | 0-4 |
| 3.3.2 | | Golden records established | ☐ | 0-4 |
| 3.3.3 | | Synchronization processes | ☐ | 0-4 |
| 3.3.4 | | Data stewardship model | ☐ | 0-4 |
| 3.4.1 | Data Sharing Agreements | Legal framework exists | ☐ | 0-4 |
| 3.4.2 | | Template agreements available | ☐ | 0-4 |
| 3.4.3 | | Approval process defined | ☐ | 0-4 |
| 3.4.4 | | Compliance monitoring | ☐ | 0-4 |

**Pillar 3 Score:** ___/64 → Weighted: ___/20

---

### Pillar 4: Digital Access (Weight: 15%)

| # | Component | Sub-component | Status | Score |
|---|-----------|---------------|--------|-------|
| 4.1.1 | Connectivity | Broadband coverage >80% | ☐ | 0-4 |
| 4.1.2 | | Mobile coverage >90% | ☐ | 0-4 |
| 4.1.3 | | Government network operational | ☐ | 0-4 |
| 4.1.4 | | Redundancy in place | ☐ | 0-4 |
| 4.2.1 | Citizen Portal | Single portal available | ☐ | 0-4 |
| 4.2.2 | | Service integration | ☐ | 0-4 |
| 4.2.3 | | User account management | ☐ | 0-4 |
| 4.2.4 | | Accessibility compliant | ☐ | 0-4 |
| 4.3.1 | Mobile Access | Mobile-responsive design | ☐ | 0-4 |
| 4.3.2 | | Native apps available | ☐ | 0-4 |
| 4.3.3 | | Offline capability (where needed) | ☐ | 0-4 |
| 4.3.4 | | Push notifications | ☐ | 0-4 |
| 4.4.1 | Accessibility | WCAG compliance | ☐ | 0-4 |
| 4.4.2 | | Multi-language support | ☐ | 0-4 |
| 4.4.3 | | Assisted digital support | ☐ | 0-4 |
| 4.4.4 | | Alternative channels | ☐ | 0-4 |

**Pillar 4 Score:** ___/64 → Weighted: ___/15

---

### Pillar 5: Governance (Weight: 15%)

| # | Component | Sub-component | Status | Score |
|---|-----------|---------------|--------|-------|
| 5.1.1 | Legal Framework | Digital governance law | ☐ | 0-4 |
| 5.1.2 | | Data protection legislation | ☐ | 0-4 |
| 5.1.3 | | Electronic signatures law | ☐ | 0-4 |
| 5.1.4 | | Cybersecurity regulations | ☐ | 0-4 |
| 5.2.1 | Institutional Coordination | Digital agency exists | ☐ | 0-4 |
| 5.2.2 | | Coordination mechanisms | ☐ | 0-4 |
| 5.2.3 | | Decision-making authority | ☐ | 0-4 |
| 5.2.4 | | Stakeholder engagement | ☐ | 0-4 |
| 5.3.1 | Standards Bodies | Technical standards body | ☐ | 0-4 |
| 5.3.2 | | Standard approval process | ☐ | 0-4 |
| 5.3.3 | | Compliance verification | ☐ | 0-4 |
| 5.3.4 | | International alignment | ☐ | 0-4 |
| 5.4.1 | Funding Mechanisms | Sustainable funding model | ☐ | 0-4 |
| 5.4.2 | | Investment prioritization | ☐ | 0-4 |
| 5.4.3 | | Cost-sharing arrangements | ☐ | 0-4 |
| 5.4.4 | | Monitoring and evaluation | ☐ | 0-4 |

**Pillar 5 Score:** ___/64 → Weighted: ___/15

---

### DPI Readiness Summary

| Pillar | Raw Score | Max | Weighted Score |
|--------|-----------|-----|----------------|
| Digital Identity | /64 | 25 | |
| Interoperability | /64 | 25 | |
| Data Infrastructure | /64 | 20 | |
| Digital Access | /64 | 15 | |
| Governance | /64 | 15 | |
| **TOTAL** | | **100** | **/100** |

**Readiness Level:** ☐ Level 1 (0-40) ☐ Level 2 (41-70) ☐ Level 3 (71-100)

---

# C. TOOLS REFERENCE

## C.1 Tool Categories

| Category | Purpose | Tool Examples |
|----------|---------|---------------|
| **EA Repository** | Architecture documentation, modeling, analysis | Sparx Enterprise Architect, Archi, Alfabet, LeanIX, Mega |
| **Gap Analysis** | Gap tracking, prioritization, management | Excel, Airtable, Jira, Monday.com |
| **Roadmap Planning** | Timeline, milestones, dependencies, Gantt charts | MS Project, Jira, Smartsheet, Asana |
| **Data Profiling** | Data quality assessment, profiling, cleansing | Informatica, Talend, Great Expectations, Apache Griffin |
| **Risk Management** | Risk register, assessment, mitigation tracking | Excel, ARM, RiskWatch, Archer |
| **Business Case** | Financial modeling, ROI analysis, business cases | Excel, Business Case Pro, commercial tools |
| **Diagramming** | Architecture diagrams, flowcharts, visualizations | Visio, Draw.io, Lucidchart, Miro |
| **Collaboration** | Team communication, document sharing, wikis | Confluence, SharePoint, Teams, Notion |
| **Requirements** | Requirements gathering, traceability, management | DOORS, Jira, Azure DevOps, Helix RM |
| **Testing** | Test management, automation, quality assurance | Jira, TestRail, Selenium, Postman |

---

## C.2 Tool Selection Guide

### Selection Criteria Matrix

| Criterion | Description | Weight | Assessment Method |
|-----------|-------------|--------|-------------------|
| **Functionality** | Meets required capabilities for intended use | 30% | Feature checklist comparison |
| **Cost** | Total cost of ownership (license, support, training) | 20% | 5-year TCO calculation |
| **Integration** | Works with existing tools and workflows | 20% | Integration testing, API assessment |
| **Usability** | Learning curve, user experience, adoption likelihood | 15% | User trials, vendor demos |
| **Vendor Viability** | Long-term support, community, market presence | 10% | Vendor assessment, references |
| **Scalability** | Grows with organization needs | 5% | Technical assessment |

### Tool Evaluation Template

| Tool Name | Functionality (30%) | Cost (20%) | Integration (20%) | Usability (15%) | Vendor (10%) | Scalability (5%) | Total |
|-----------|---------------------|------------|-------------------|-----------------|--------------|------------------|-------|
| Tool A | /5 × 0.30 = | /5 × 0.20 = | /5 × 0.20 = | /5 × 0.15 = | /5 × 0.10 = | /5 × 0.05 = | /5 |
| Tool B | /5 × 0.30 = | /5 × 0.20 = | /5 × 0.20 = | /5 × 0.15 = | /5 × 0.10 = | /5 × 0.05 = | /5 |
| Tool C | /5 × 0.30 = | /5 × 0.20 = | /5 × 0.20 = | /5 × 0.15 = | /5 × 0.10 = | /5 × 0.05 = | /5 |

---

## C.3 Minimum Tooling by Organization Type

### PDU (Policy Development Unit) - Minimum Tooling

| Category | Recommended Tool | Alternative | Notes |
|----------|------------------|-------------|-------|
| EA Repository | Archi (free, open source) | Draw.io + file structure | Lightweight modeling |
| Gap Tracking | Excel | Google Sheets | Simple tracking |
| Roadmap | Excel | Google Sheets | Basic Gantt |
| Data Profiling | Python scripts | Excel analysis | Basic profiling |
| Collaboration | SharePoint/Teams | Google Workspace | Document sharing |
| Diagramming | Draw.io (free) | Visio (if licensed) | Basic diagrams |

**Estimated Tool Budget:** €0 - €5,000/year

---

### RA (Regulatory Agency) - Recommended Tooling

| Category | Recommended Tool | Alternative | Notes |
|----------|------------------|-------------|-------|
| EA Repository | Archi or Sparx EA | LeanIX (SaaS) | Full modeling capability |
| Gap Tracking | Airtable or Excel | Jira | Structured tracking |
| Roadmap | MS Project | Smartsheet | Professional planning |
| Data Profiling | Talend Open Studio | Great Expectations | Automated profiling |
| Risk Management | Excel with templates | Simple GRC tool | Risk tracking |
| Collaboration | Confluence | SharePoint | Team wikis |
| Diagramming | Visio or Lucidchart | Draw.io | Professional diagrams |

**Estimated Tool Budget:** €5,000 - €25,000/year

---

### SDA (Service Delivery Authority) - Enterprise Tooling

| Category | Recommended Tool | Alternative | Notes |
|----------|------------------|-------------|-------|
| EA Repository | Sparx EA or LeanIX | Alfabet, Mega | Enterprise modeling |
| Gap Tracking | Jira + Confluence | Azure DevOps | Full traceability |
| Roadmap | MS Project or Jira | Smartsheet | Enterprise planning |
| Data Profiling | Informatica or Talend | Enterprise data tools | Enterprise profiling |
| Risk Management | Archer or ARM | ServiceNow GRC | Enterprise GRC |
| Requirements | DOORS or Azure DevOps | Jira | Requirements management |
| Testing | TestRail + Selenium | Azure DevOps | Test automation |
| Collaboration | Confluence + Teams | SharePoint + Slack | Enterprise collaboration |
| Diagramming | Visio or Sparx EA | Lucidchart Enterprise | Integrated diagramming |

**Estimated Tool Budget:** €25,000 - €100,000+/year

---

### Tool Compatibility Matrix

| Tool Category | Archi | Sparx EA | LeanIX | Jira | Confluence | Excel |
|---------------|-------|----------|--------|------|------------|-------|
| **Archi** | - | Export | - | - | - | Export |
| **Sparx EA** | Import | - | API | Add-on | Plugin | Export |
| **LeanIX** | - | API | - | Integration | - | Export |
| **Jira** | - | Add-on | Integration | - | Native | Export |
| **Confluence** | Plugin | Plugin | - | Native | - | Import |
| **Excel** | Import | Import | Import | Import | Import | - |

---

# D. QUICK REFERENCE CARDS

## D.1 Method Overview Card

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      GEATDM APPLICATION METHOD                               │
│          Government Enterprise Architecture Target Development Method        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│    DISCOVER ──→ ASSESS ──→ ADAPT ──→ PLAN ──→ EXECUTE                       │
│        │          │          │         │         │                          │
│       DG-1       DG-2       DG-3      DG-4    DG-5/6/7                      │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  KEY OUTPUTS BY PHASE:                                                       │
│                                                                              │
│  DISCOVER: Organization Classification & DPI Readiness Assessment           │
│  ASSESS:   AS-IS Documentation & Gap Analysis                               │
│  ADAPT:    TO-BE Architecture & Tailoring Decisions                         │
│  PLAN:     Implementation Roadmap & Business Case                           │
│  EXECUTE:  Implemented Solution & Realized Benefits                         │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  REFERENCE ARCHITECTURES (Inheritance Model):                                │
│                                                                              │
│  PDU-RA ──⊂── RA-RA ──⊂── SDA-RA                                            │
│  (Base)      (Extends PDU)  (Extends RA)                                    │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  CORE PRINCIPLES:                                                            │
│                                                                              │
│  • Reference Architecture Integrity: Protect RA during customization        │
│  • DPI-First: Leverage national Digital Public Infrastructure               │
│  • Building Block Reuse: Maximize GovStack BB adoption                      │
│  • BDAT Alignment: Business → Data → Application → Technology               │
│  • Inheritance Compliance: PDU ⊂ RA ⊂ SDA                                   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## D.2 Phase Cards

### DISCOVER Phase Card

```
┌─────────────────────────────────────────┐
│ DISCOVER PHASE                          │
│ "Know Your Organization"                │
├─────────────────────────────────────────┤
│ PURPOSE                                 │
│ Classify organization type and          │
│ assess national DPI readiness           │
│                                         │
├─────────────────────────────────────────┤
│ KEY ACTIVITIES                          │
│ • Organization classification           │
│   (PDU/RA/SDA)                          │
│ • DPI readiness assessment              │
│ • Reference Architecture selection      │
│ • Entry point validation                │
│                                         │
├─────────────────────────────────────────┤
│ KEY TEMPLATES                           │
│ TPL-1.1 Classification Questionnaire    │
│ TPL-1.2 Classification Decision Tree    │
│ TPL-1.3 Classification Record           │
│ TPL-1.4 DPI Readiness Checklist         │
│ TPL-1.5 DPI Score Calculator            │
│ TPL-1.6 DISCOVER Summary                │
│                                         │
├─────────────────────────────────────────┤
│ DURATION: 1-2 weeks                     │
│ EXIT GATE: DG-1                         │
│                                         │
│ EXIT CRITERIA                           │
│ ☐ Classification confirmed              │
│ ☐ DPI readiness assessed                │
│ ☐ RA identified                         │
│ ☐ Summary signed off                    │
└─────────────────────────────────────────┘
```

---

### ASSESS Phase Card

```
┌─────────────────────────────────────────┐
│ ASSESS PHASE                            │
│ "Know Your Current State"               │
├─────────────────────────────────────────┤
│ PURPOSE                                 │
│ Document current state architecture     │
│ and identify gaps against RA            │
│                                         │
├─────────────────────────────────────────┤
│ KEY ACTIVITIES                          │
│ • AS-IS documentation (BDAT domains)    │
│ • Service & capability inventory        │
│ • Application portfolio analysis        │
│ • Data asset cataloguing                │
│ • Infrastructure assessment             │
│ • Gap analysis against RA               │
│                                         │
├─────────────────────────────────────────┤
│ KEY TEMPLATES                           │
│ TPL-2.1  Current Service Catalog        │
│ TPL-2.6  Application Inventory          │
│ TPL-2.11 Data Asset Inventory           │
│ TPL-2.15 Infrastructure Inventory       │
│ TPL-2.18 Gap Analysis Worksheet         │
│ TPL-2.19 Gap Register                   │
│ TPL-2.20 ASSESS Summary                 │
│                                         │
├─────────────────────────────────────────┤
│ DURATION: 4-8 weeks                     │
│ EXIT GATE: DG-2                         │
│                                         │
│ EXIT CRITERIA                           │
│ ☐ AS-IS complete (all BDAT domains)     │
│ ☐ Gaps identified & prioritized         │
│ ☐ Summary signed off                    │
└─────────────────────────────────────────┘
```

---

### ADAPT Phase Card

```
┌─────────────────────────────────────────┐
│ ADAPT PHASE                             │
│ "Design Your Target State"              │
├─────────────────────────────────────────┤
│ PURPOSE                                 │
│ Tailor Reference Architecture to        │
│ create organization-specific TO-BE      │
│                                         │
├─────────────────────────────────────────┤
│ KEY ACTIVITIES                          │
│ • Capability confirmation/adaptation    │
│ • Application mapping & decisions       │
│ • Build/buy analysis                    │
│ • DPI/BB integration planning           │
│ • Platform tier selection               │
│ • TO-BE architecture creation           │
│ • Transition planning                   │
│                                         │
├─────────────────────────────────────────┤
│ KEY TEMPLATES                           │
│ TPL-3.2  Capability Confirmation        │
│ TPL-3.6  Application Mapping            │
│ TPL-3.7  Build/Buy Decision Matrix      │
│ TPL-3.9  DPI/BB Integration Spec        │
│ TPL-3.16 TO-BE Architecture Doc         │
│ TPL-3.17 Tailoring Decision Log         │
│ TPL-3.20 ADAPT Summary                  │
│                                         │
├─────────────────────────────────────────┤
│ DURATION: 4-6 weeks                     │
│ EXIT GATE: DG-3                         │
│                                         │
│ EXIT CRITERIA                           │
│ ☐ TO-BE architecture approved           │
│ ☐ Tailoring decisions logged            │
│ ☐ Architecture board sign-off           │
└─────────────────────────────────────────┘
```

---

### PLAN Phase Card

```
┌─────────────────────────────────────────┐
│ PLAN PHASE                              │
│ "Plan Your Journey"                     │
├─────────────────────────────────────────┤
│ PURPOSE                                 │
│ Create implementation roadmap and       │
│ justify investment with business case   │
│                                         │
├─────────────────────────────────────────┤
│ KEY ACTIVITIES                          │
│ • Approach selection                    │
│ • Initiative definition & sequencing    │
│ • Dependency analysis                   │
│ • Phase/milestone planning              │
│ • Resource & effort estimation          │
│ • Business case development             │
│ • Risk assessment & mitigation          │
│ • Roadmap creation                      │
│                                         │
├─────────────────────────────────────────┤
│ KEY TEMPLATES                           │
│ TPL-4.1  Approach Evaluation            │
│ TPL-4.2  Initiative Inventory           │
│ TPL-4.6  Phase Definition               │
│ TPL-4.8  Decision Gate Framework        │
│ TPL-4.12 Business Case Document         │
│ TPL-4.17 Risk Assessment                │
│ TPL-4.20 Implementation Roadmap         │
│ TPL-4.22 PLAN Summary                   │
│                                         │
├─────────────────────────────────────────┤
│ DURATION: 3-4 weeks                     │
│ EXIT GATE: DG-4                         │
│                                         │
│ EXIT CRITERIA                           │
│ ☐ Roadmap approved                      │
│ ☐ Business case approved                │
│ ☐ Resources secured                     │
│ ☐ Steering committee sign-off           │
└─────────────────────────────────────────┘
```

---

### EXECUTE Phase Card

```
┌─────────────────────────────────────────┐
│ EXECUTE PHASE                           │
│ "Realize Your Architecture"             │
├─────────────────────────────────────────┤
│ PURPOSE                                 │
│ Implement TO-BE architecture per        │
│ approved roadmap and realize benefits   │
│                                         │
├─────────────────────────────────────────┤
│ KEY ACTIVITIES                          │
│ • Phase kickoff & team mobilization     │
│ • Iterative development/procurement     │
│ • Testing & quality assurance           │
│ • Change management                     │
│ • Deployment & go-live                  │
│ • Transition & handover                 │
│ • Benefits realization tracking         │
│ • Lessons learned capture               │
│                                         │
├─────────────────────────────────────────┤
│ KEY TEMPLATES                           │
│ TPL-5.1  Phase Kickoff Checklist        │
│ TPL-5.2  Sprint/Iteration Planning      │
│ TPL-5.3  Progress Report                │
│ TPL-5.4  Change Request                 │
│ TPL-5.5  Go-Live Readiness Checklist    │
│ TPL-5.6  Lessons Learned                │
│                                         │
├─────────────────────────────────────────┤
│ DURATION: Per roadmap phases            │
│ GATES: DG-5 (per phase), DG-6, DG-7     │
│                                         │
│ EXIT CRITERIA                           │
│ ☐ Solution deployed to production       │
│ ☐ Users trained and transitioned        │
│ ☐ Benefits tracking initiated           │
│ ☐ Lessons captured                      │
└─────────────────────────────────────────┘
```

---

## D.3 Decision Points Reference

### Method Decision Points

| Decision Point | Phase | Question | Possible Outcomes | Determining Factors |
|----------------|-------|----------|-------------------|---------------------|
| **DP1** | DISCOVER | Is classification clear? | Proceed / Reassess | Score clarity, stakeholder agreement |
| **DP2** | DISCOVER | Is DPI sufficient? | Proceed / Address gaps first | DPI Level vs. org type requirement |
| **DP3** | DISCOVER | Ready for ASSESS? | Proceed / Not yet | Entry criteria met |
| **DP4** | ASSESS | Is AS-IS complete? | Proceed / Continue assessment | BDAT coverage, validation |
| **DP5** | ASSESS | Are gaps prioritized? | Proceed / Refine | Gap severity, ownership |
| **DP6** | ADAPT | Is adaptation scope acceptable? | Proceed / Reduce scope | RA integrity, feasibility |
| **DP7** | ADAPT | Is TO-BE approved? | Proceed / Revise | Architecture board decision |
| **DP8** | PLAN | Is approach selected? | Proceed with approach | Risk, cost, timeline balance |
| **DP9** | PLAN | Is roadmap feasible? | Proceed / Revise | Resource availability, dependencies |
| **DP10** | PLAN | Is business case approved? | Proceed to EXECUTE / Revise | ROI, risk acceptance |
| **DP11** | EXECUTE | Is phase ready to start? | Start phase / Resolve blockers | Entry criteria, resources |
| **DP12** | EXECUTE | Is go-live ready? | Go-live / Delay | Readiness checklist |

---

### Decision Gate Quick Reference

| Gate | Phase Boundary | Approver | Key Deliverables Required |
|------|----------------|----------|---------------------------|
| **DG-0** | Pre-DISCOVER | Sponsor | Scope statement, budget allocation |
| **DG-1** | DISCOVER → ASSESS | Sponsor, EA Lead | TPL-1.6 DISCOVER Summary |
| **DG-2** | ASSESS → ADAPT | Sponsor, EA Lead, Business Lead | TPL-2.20 ASSESS Summary |
| **DG-3** | ADAPT → PLAN | Architecture Board, Sponsor | TPL-3.20 ADAPT Summary, TO-BE approved |
| **DG-4** | PLAN → EXECUTE | Steering Committee | TPL-4.22 PLAN Summary, Business case |
| **DG-5** | Per EXECUTE phase | Project Board | Phase exit criteria, quality report |
| **DG-6** | Go-Live | Sponsor, Operations | TPL-5.5 Go-Live Readiness |
| **DG-7** | Closure | Sponsor | Closure report, lessons learned |

---

# E. GLOSSARY & CROSS-REFERENCES

## E.1 Terms & Definitions

| Term | Definition |
|------|------------|
| **AS-IS** | Current state architecture before transformation; baseline for gap analysis |
| **BB** | Building Block - reusable, interoperable software component from GovStack specification |
| **BDAT** | Business, Data, Application, Technology - the four enterprise architecture domains |
| **Capability** | A particular ability that a business may possess or exchange to achieve a specific purpose |
| **DG** | Decision Gate - formal governance checkpoint requiring approval to proceed |
| **DPI** | Digital Public Infrastructure - shared digital systems and platforms for public service delivery |
| **EA** | Enterprise Architecture - comprehensive framework for IT-business alignment |
| **Gap** | Difference between current (AS-IS) state and target (TO-BE) requirements |
| **GovStack** | International initiative defining reusable Building Blocks for digital government |
| **Inheritance** | Architecture pattern where child architectures include all parent elements plus additions |
| **MoSCoW** | Prioritization method: Must have, Should have, Could have, Won't have |
| **PAERA** | Public Administration Ecosystem Reference Architecture |
| **PDU** | Policy Development Unit - organization type focused on policy development and coordination |
| **RA** | Reference Architecture - standardized target architecture template; also Regulatory Agency (org type) |
| **SDA** | Service Delivery Authority - organization type focused on direct citizen/business services |
| **Tailoring** | Process of adapting Reference Architecture to specific organizational context |
| **TO-BE** | Target state architecture after transformation; goal of implementation |
| **TOGAF** | The Open Group Architecture Framework - industry standard EA methodology |

---

## E.2 Template Cross-Reference Matrix

### Template Flow by Phase

```
DISCOVER                 ASSESS                      ADAPT                      PLAN                       EXECUTE
─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
TPL-1.1 Classification   TPL-2.1 Service Catalog     TPL-3.1 Adaptation Matrix  TPL-4.1 Approach Eval      TPL-5.1 Kickoff
    │                        │                           │                          │                          │
    ▼                        ▼                           ▼                          ▼                          ▼
TPL-1.2 Decision Tree    TPL-2.2 Capability Matrix   TPL-3.2 Capability Confirm TPL-4.2 Initiatives        TPL-5.2 Sprint Plan
    │                        │                           │                          │                          │
    ▼                        ▼                           ▼                          ▼                          ▼
TPL-1.3 Classification   TPL-2.6 App Inventory       TPL-3.6 App Mapping        TPL-4.3 Dependencies       TPL-5.3 Progress
    │                        │                           │                          │                          │
    ▼                        ▼                           ▼                          ▼                          ▼
TPL-1.4 DPI Checklist    TPL-2.11 Data Inventory     TPL-3.7 Build/Buy Matrix   TPL-4.6 Phase Definition   TPL-5.4 Change Req
    │                        │                           │                          │                          │
    ▼                        ▼                           ▼                          ▼                          ▼
TPL-1.5 DPI Calculator   TPL-2.18 Gap Worksheet      TPL-3.9 DPI/BB Spec        TPL-4.12 Business Case     TPL-5.5 Go-Live
    │                        │                           │                          │                          │
    ▼                        ▼                           ▼                          ▼                          ▼
TPL-1.6 DISCOVER Summary TPL-2.19 Gap Register       TPL-3.16 TO-BE Doc         TPL-4.20 Roadmap           TPL-5.6 Lessons
                             │                           │                          │
                             ▼                           ▼                          ▼
                         TPL-2.20 ASSESS Summary     TPL-3.17 Tailoring Log     TPL-4.22 PLAN Summary
                                                         │
                                                         ▼
                                                     TPL-3.20 ADAPT Summary
```

---

### Template Dependency Matrix

| Template | Requires | Feeds Into |
|----------|----------|------------|
| TPL-1.1 | Sponsor commitment | TPL-1.3 |
| TPL-1.3 | TPL-1.1, TPL-1.2 | TPL-1.6 |
| TPL-1.4 | Classification | TPL-1.5 |
| TPL-1.6 | TPL-1.3, TPL-1.5 | TPL-2.x (all) |
| TPL-2.2 | TPL-2.1 | TPL-2.18 |
| TPL-2.6 | System access | TPL-2.7, TPL-2.8, TPL-2.9 |
| TPL-2.18 | All TPL-2.x | TPL-2.19 |
| TPL-2.19 | TPL-2.18 | TPL-2.20, TPL-3.x |
| TPL-3.2 | TPL-3.1 | TPL-3.16 |
| TPL-3.6 | TPL-3.2, TPL-2.8 | TPL-3.7, TPL-3.16 |
| TPL-3.16 | All TPL-3.x | TPL-3.20, TPL-4.x |
| TPL-4.2 | TPL-2.19, TPL-3.16 | TPL-4.3, TPL-4.4 |
| TPL-4.12 | TPL-4.13-4.16 | TPL-4.22 |
| TPL-4.20 | All TPL-4.x | TPL-4.22, TPL-5.x |
| TPL-5.5 | All testing complete | TPL-5.6 |

---

## E.3 Method Section References

### Phase-to-Method Chapter Mapping

| Phase | Method Chapter | Key Sections |
|-------|----------------|--------------|
| **DISCOVER** | Chapter 2: DISCOVER Phase | 2.1 Organization Classification, 2.2 DPI Readiness, 2.3 RA Selection |
| **ASSESS** | Chapter 3: ASSESS Phase | 3.1 AS-IS Documentation, 3.2 Gap Analysis, 3.3 Baseline Validation |
| **ADAPT** | Chapter 4: ADAPT Phase | 4.1 Capability Tailoring, 4.2 Architecture Design, 4.3 Transition Planning |
| **PLAN** | Chapter 5: PLAN Phase | 5.1 Roadmap Development, 5.2 Business Case, 5.3 Risk Management |
| **EXECUTE** | Chapter 6: EXECUTE Phase | 6.1 Implementation Management, 6.2 Quality Assurance, 6.3 Benefits Realization |

---

### Reference Architecture Cross-References

| RA Section | Related Templates | Method Section |
|------------|-------------------|----------------|
| Business Capability Model | TPL-2.2, TPL-3.2 | Ch 3.1.2, Ch 4.1 |
| Data Architecture | TPL-2.11-2.14, TPL-3.10-3.12 | Ch 3.1.3, Ch 4.2.2 |
| Application Architecture | TPL-2.6-2.10, TPL-3.6-3.9 | Ch 3.1.4, Ch 4.2.3 |
| Technology Architecture | TPL-2.15-2.17, TPL-3.13-3.15 | Ch 3.1.5, Ch 4.2.4 |
| Building Block Specifications | TPL-3.9 | Ch 4.2.5 |
| Security Architecture | TPL-2.17, TPL-3.15 | Ch 3.1.6, Ch 4.2.6 |

---

### GovStack Building Block Quick Reference

| Building Block | Purpose | Key Templates |
|----------------|---------|---------------|
| **Identity BB** | Digital identity & authentication | TPL-1.4 (1.x), TPL-3.9 |
| **Payments BB** | Financial transactions | TPL-3.9 |
| **Messaging BB** | Communications & notifications | TPL-3.9 |
| **Registration BB** | Register management | TPL-3.9 |
| **Consent BB** | Consent & privacy management | TPL-1.4 (1.4.x), TPL-3.9 |
| **Digital Registries BB** | Master data registries | TPL-1.4 (3.1.x), TPL-3.9 |
| **Information Mediator BB** | Secure data exchange | TPL-1.4 (2.x), TPL-3.9 |
| **Scheduler BB** | Appointment & scheduling | TPL-3.9 |
| **Workflow BB** | Business process automation | TPL-3.9 |

---

## Document Change History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-20 | GEATDM Team | Initial release |

---

*End of Document*


═══════════════════════════════════════════════════════════════════════════════

# DOCUMENT COMPLETION

## Verification Summary

| Check | Status |
|-------|--------|
| All sections included | ✅ |
| Section numbering verified | ✅ |
| Cross-references valid | ✅ |
| All phases present (DISCOVER → ASSESS → ADAPT → PLAN → EXECUTE & GOVERN) | ✅ |

## Document Statistics

| Metric | Value |
|--------|-------|
| **Phases** | 5 (DISCOVER → ASSESS → ADAPT → PLAN → EXECUTE & GOVERN) |
| **Main Sections** | 14 (Sections 1-14) |
| **Appendices** | 5 (A-E) |
| **Templates Referenced** | 31+ |
| **Quick Reference Cards** | 5 |

## Component Document Cross-References

| Component | Document ID | Sections Covered |
|-----------|-------------|------------------|
| Method Framework | GEATDM-WP5-T581 | 1-7 |
| Entry Point Tools | GEATDM-WP5-T582a | 8-9 |
| DISCOVER & ASSESS | GEATDM-WP5-T582b | 10-11 |
| ADAPT & PLAN | GEATDM-WP5-T582c | 12-13 |
| EXECUTE & GOVERN | GEATDM-WP5-T582d | 14 |
| Master Guide | GEATDM-WP5-T582e | Navigation |
| Templates & Tools | GEATDM-WP5-T583 | Appendices |

---

**Document ID:** GEATDM-WP5-T58-MethodGuide-Complete
**Version:** 1.0
**Status:** Complete
**Date:** 2026-01-21

═══════════════════════════════════════════════════════════════════════════════

*This guide is part of the Generic EA Target Architecture Development Method (GEATDM), based on the GovStack Public Administration Ecosystem Reference Architecture (PAERA).*

*For more information: https://paera.govstack.global/*

═══════════════════════════════════════════════════════════════════════════════

**END OF DOCUMENT: GEATDM Application Method Guide - Complete**

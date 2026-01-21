# GENERIC EA TARGET ARCHITECTURE DEVELOPMENT METHOD (GEATDM)

## Complete Reference Guide

═══════════════════════════════════════════════════════════════════════════════

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║           GENERIC EA TARGET ARCHITECTURE DEVELOPMENT METHOD                   ║
║                              (GEATDM)                                         ║
║                                                                               ║
║              A Framework for Public Sector Digital Transformation             ║
║                                                                               ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║  Version:        1.0                                                          ║
║  Date:           January 2026                                                 ║
║  Status:         Complete                                                     ║
║                                                                               ║
║  Based on:       PAERA Framework (Public Administration Ecosystem Reference   ║
║                  Architecture)                                                ║
║                  GovStack Building Blocks Initiative                          ║
║                                                                               ║
║  Website:        https://paera.govstack.global/                               ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

═══════════════════════════════════════════════════════════════════════════════

---

# FRONT MATTER

---

## Document Control

| Attribute | Value |
|-----------|-------|
| **Document ID** | GEATDM-WP6-T62-MainDocument-v1.0 |
| **Version** | 1.0 |
| **Release Date** | January 2026 |
| **Status** | Complete |
| **Classification** | Public |

### Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | January 2026 | GEATDM Project Team | Initial complete publication |

### Component Documents

This complete reference guide integrates the following GEATDM deliverables:

| Component | Document ID | Description |
|-----------|-------------|-------------|
| Master Context | GEATDM-WP0-T01 | Foundation document with core concepts |
| Definitions | GEATDM-WP0-T03 | Comprehensive glossary |
| EA Metamodel | GEATDM-WP1-T11 | Enterprise architecture metamodel |
| EA Principles | GEATDM-WP1-T12 | Architecture principles template |
| EA Governance | GEATDM-WP1-T13 | Governance framework |
| EA Services | GEATDM-WP1-T14 | EA services catalog |
| PDU RA | GEATDM-WP2-T25 | Policy Development Unit Reference Architecture |
| RA RA | GEATDM-WP3-T35 | Regulatory Agency Reference Architecture |
| SDA RA | GEATDM-WP4-T47 | Service Delivery Authority Reference Architecture |
| Method Guide | GEATDM-WP5-T58 | Application method guide |
| Toolkit | GEATDM-WP6-T61 | Practitioner toolkit |

---

## Executive Summary

### The Challenge

Public sector organizations worldwide face a common challenge: how to design and implement digital transformation effectively. Despite mature enterprise architecture frameworks like TOGAF, many government agencies struggle with:

- **Overwhelming scope** — Generic frameworks offer too much optionality without clear guidance
- **Lack of templates** — Organizations must start from scratch for each architecture initiative
- **Disconnection from Digital Public Infrastructure (DPI)** — Traditional frameworks don't account for national-level digital infrastructure
- **One-size-fits-all approaches** — Different organization types have different architecture requirements

### The GEATDM Solution

The **Generic EA Target Architecture Development Method (GEATDM)** addresses these challenges through:

1. **Reference Architecture-Centric Approach** — Pre-built architecture templates for three organization types
2. **Clear Taxonomy** — Classification of organizations into PDU, RA, and SDA types
3. **DPI Integration** — Built-in guidance for integrating with national digital infrastructure
4. **Building Block Orientation** — Alignment with GovStack Building Blocks for standardized, reusable components
5. **Practical Method** — Five-phase process from discovery through execution and governance

### Key Components

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        GEATDM COMPONENT OVERVIEW                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────┐     │
│  │                    EA FRAMEWORK (Foundation)                        │     │
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌─────────────┐│     │
│  │  │  Metamodel   │ │  Principles  │ │  Governance  │ │  Services   ││     │
│  │  └──────────────┘ └──────────────┘ └──────────────┘ └─────────────┘│     │
│  └────────────────────────────────────────────────────────────────────┘     │
│                                   │                                          │
│                                   ▼                                          │
│  ┌────────────────────────────────────────────────────────────────────┐     │
│  │               REFERENCE ARCHITECTURES (Templates)                   │     │
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐               │     │
│  │  │     PDU      │ │      RA      │ │     SDA      │               │     │
│  │  │    (Base)    │─│  (Extends)   │─│  (Extends)   │               │     │
│  │  └──────────────┘ └──────────────┘ └──────────────┘               │     │
│  └────────────────────────────────────────────────────────────────────┘     │
│                                   │                                          │
│                                   ▼                                          │
│  ┌────────────────────────────────────────────────────────────────────┐     │
│  │                 APPLICATION METHOD (Process)                        │     │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐      │     │
│  │  │DISCOVER │→│ ASSESS  │→│  ADAPT  │→│  PLAN   │→│ EXECUTE │      │     │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘      │     │
│  └────────────────────────────────────────────────────────────────────┘     │
│                                   │                                          │
│                                   ▼                                          │
│  ┌────────────────────────────────────────────────────────────────────┐     │
│  │              TOOLKIT (Templates, Checklists, Tools)                 │     │
│  └────────────────────────────────────────────────────────────────────┘     │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Target Audience

This document is intended for:

| Audience | Primary Use |
|----------|-------------|
| **Enterprise Architects** | Adapt Reference Architectures for specific organizations |
| **CIOs/CTOs** | Strategic planning for digital transformation |
| **Digital Transformation Teams** | Implementation guidance and roadmap planning |
| **Solution Architects** | Solution design aligned with target architecture |
| **Project Managers** | Project planning within EA governance framework |
| **GovStack Partners** | Implementation support using Building Blocks |
| **Government Policy Makers** | Understanding EA-driven transformation approach |

### How to Use This Document

| If you want to... | Start with... |
|-------------------|---------------|
| Understand GEATDM concepts | Part I, Chapter 1-2 |
| Establish EA governance | Part I, Chapter 3 |
| Assess your organization type | Part II, Chapter 4 |
| Apply Reference Architectures | Part II, Chapters 5-7 |
| Run an EA initiative | Part III, Chapters 8-13 |
| Find specific tools | Part IV, Appendix B |
| Look up definitions | Part IV, Appendix A |

---

## Table of Contents

### FRONT MATTER
- Document Control
- Executive Summary
- Table of Contents
- Document Conventions

### PART I: INTRODUCTION AND FOUNDATIONS

**Chapter 1: Introduction**
- 1.1 Purpose and Scope
- 1.2 Target Audience
- 1.3 Document Structure
- 1.4 Relationship to Other Frameworks

**Chapter 2: Key Concepts**
- 2.1 Digital Public Infrastructure (DPI)
- 2.2 Organization Taxonomy (PDU/RA/SDA)
- 2.3 Reference Architecture Concept
- 2.4 Building Blocks

**Chapter 3: EA Framework**
- 3.1 EA Metamodel
- 3.2 EA Principles
- 3.3 EA Governance Model
- 3.4 EA Services

### PART II: REFERENCE ARCHITECTURES

**Chapter 4: Reference Architecture Overview**
- 4.1 RA Hierarchy and Inheritance
- 4.2 RA Structure Template
- 4.3 How to Use Reference Architectures

**Chapter 5: PDU Reference Architecture**
- 5.1 Organization Profile
- 5.2 Business Architecture
- 5.3 Capability Map
- 5.4 Application Architecture
- 5.5 Data Architecture
- 5.6 Technology Considerations
- 5.7 Implementation Guidance

**Chapter 6: RA Reference Architecture**
- 6.1 Organization Profile (extends PDU)
- 6.2 Business Architecture (extends PDU)
- 6.3 Capability Map (extends PDU)
- 6.4 Application Architecture (extends PDU)
- 6.5 Data Architecture (extends PDU)
- 6.6 Technology Considerations
- 6.7 Implementation Guidance

**Chapter 7: SDA Reference Architecture**
- 7.1 Organization Profile (extends RA)
- 7.2 Business Architecture (extends RA)
- 7.3 Capability Map (extends RA)
- 7.4 Domain Architecture Model
- 7.5 Application Architecture (extends RA)
- 7.6 Data Architecture (extends RA)
- 7.7 Technology Considerations
- 7.8 Implementation Guidance

### PART III: APPLICATION METHOD

**Chapter 8: Method Overview**
- 8.1 GEATDM Method Introduction
- 8.2 Method Phases at a Glance
- 8.3 Decision Points Summary

**Chapter 9: DISCOVER Phase**
- 9.1 Phase Overview
- 9.2 Organization Classification
- 9.3 DPI Readiness Assessment
- 9.4 Reference Architecture Selection

**Chapter 10: ASSESS Phase**
- 10.1 Phase Overview
- 10.2 AS-IS Architecture Documentation
- 10.3 Gap Analysis
- 10.4 Readiness Assessment

**Chapter 11: ADAPT Phase**
- 11.1 Phase Overview
- 11.2 Tailoring the Reference Architecture
- 11.3 TO-BE Architecture Creation
- 11.4 Building Block Prioritization

**Chapter 12: PLAN Phase**
- 12.1 Phase Overview
- 12.2 Roadmap Development
- 12.3 Business Case Creation
- 12.4 Governance Charter

**Chapter 13: EXECUTE & GOVERN Phase**
- 13.1 Phase Overview
- 13.2 Implementation Execution
- 13.3 EA Engagement Model
- 13.4 Compliance Monitoring
- 13.5 Continuous Improvement

### PART IV: APPENDICES

**Appendix A: Glossary**
- A.1 Architecture Domain Terms
- A.2 Organization Type Definitions
- A.3 DPI Terms
- A.4 Method Terms
- A.5 Abbreviations

**Appendix B: Practitioner Toolkit**
- B.1 Tool Index by Phase
- B.2 Template Quick Reference
- B.3 Checklist Compilation

**Appendix C: Traceability Matrices**
- C.1 Capability Inheritance Matrix
- C.2 Application Inheritance Matrix
- C.3 Building Block Mapping

**Appendix D: Quick Start Guides**
- D.1 Quick Start for PDU
- D.2 Quick Start for RA
- D.3 Quick Start for SDA

**Appendix E: Case Studies and Examples**
- E.1 Estonia
- E.2 Singapore
- E.3 United Kingdom

**Appendix F: References and Further Reading**
- F.1 GEATDM Document Suite
- F.2 External References
- F.3 Related Standards

---

## Document Conventions

### Terminology

| Term | Definition | Usage |
|------|------------|-------|
| **Reference Architecture (RA)** | Template architecture for an organization type | "The SDA Reference Architecture" |
| **Target Architecture** | Organization-specific TO-BE architecture | "The organization's target architecture" |
| **Building Block (BB)** | Reusable component per GovStack specifications | "Identity BB", "Workflow BB" |
| **DPI** | Digital Public Infrastructure - national-level | "Integrate with DPI" (not "build DPI") |
| **PDU** | Policy Development Unit | First organization type |
| **RA (org type)** | Regulatory Agency | Second organization type |
| **SDA** | Service Delivery Authority | Third organization type |
| **BDAT** | Business, Data, Application, Technology domains | "BDAT architecture layers" |

### Visual Conventions

| Symbol | Meaning |
|--------|---------|
| ☐ | Checkbox (to do) |
| ☑ | Checkbox (complete) |
| ⬜ | Selection option |
| → | Flow or sequence |
| ⊂ | Subset/inheritance |
| [INHERITED] | Element inherited from parent RA |
| [NEW] | New element added at this level |
| [EXTENDED] | Element enhanced from parent RA |

### Formatting Conventions

- **Bold** — Key terms on first use, critical elements
- *Italic* — Emphasis, document titles
- `Code format` — Technical identifiers, system names
- > Blockquote — Important notes, definitions

### Numbering Conventions

| Convention | Example | Description |
|------------|---------|-------------|
| Capability IDs | C1.2.3 | Domain.Category.Item |
| Application IDs | A4.1 | Zone.Component |
| Data Domain IDs | D1.3 | Domain.Sub-domain |
| Tool IDs | TK-01 | Tool type-number |
| Document IDs | GEATDM-WP1-T11 | Project-Workpackage-Task |

---

# PART I: INTRODUCTION AND FOUNDATIONS

---

# Chapter 1: Introduction

## 1.1 Purpose and Scope

### 1.1.1 Document Purpose

This document presents the **Generic EA Target Architecture Development Method (GEATDM)** — a practical, replicable methodology that enables any public sector organization globally to develop their target enterprise architecture. The method leverages Reference Architectures as the primary instrument, combined with a practical process for discovering which RA applies and how to adapt it to organizational context.

### 1.1.2 Scope

**In Scope:**
- Generic EA Framework (metamodel, principles, governance, services)
- Three Reference Architectures for organization types: PDU, RA, SDA
- Practical application method (DISCOVER → ASSESS → ADAPT → PLAN → EXECUTE)
- DPI integration guidance (organizations integrate with DPI, not build it)
- Templates, checklists, and tools for practitioners

**Out of Scope (for this version):**
- Ecosystem-specific Reference Architectures (Healthcare, Construction, etc.)
- Certification program
- Training curriculum
- EA tool implementation guidance

### 1.1.3 Key Principles

| Principle | Description |
|-----------|-------------|
| **RA-Centric** | Reference Architectures are the primary tool; method supports their discovery and application |
| **Practical Focus** | Every component answers "how do I actually do this?" |
| **DPI as Given** | Organizations integrate with national DPI; they don't build DPI components |
| **Building Blocks** | Use GovStack Building Block names and specifications |
| **Incremental** | Organizations can start small and grow |
| **Inheritance-Based** | PDU ⊂ RA ⊂ SDA architecture hierarchy |

## 1.2 Target Audience

This document serves multiple audiences with different needs:

| Audience | Role | How They Use GEATDM |
|----------|------|---------------------|
| **Executive Leadership** | CIOs, CTOs, Digital Transformation Directors | Strategic direction, investment decisions, governance sponsorship |
| **Enterprise Architects** | Chief Architects, Domain Architects | RA selection, customization, gap analysis, roadmap development |
| **Solution Architects** | Technical Architects, Application Architects | Solution design within target architecture, compliance verification |
| **Project Managers** | Program Managers, Implementation Leads | Project planning, resource allocation, risk management |
| **Business Analysts** | Process Analysts, Requirements Specialists | Capability mapping, requirements gathering, gap documentation |
| **Consultants** | Implementation Partners, Advisors | Implementation support, methodology guidance |

## 1.3 Document Structure

This document is organized into four main parts:

| Part | Chapters | Purpose |
|------|----------|---------|
| **Part I: Introduction & Foundations** | 1-3 | Establish context, key concepts, and EA framework foundation |
| **Part II: Reference Architectures** | 4-7 | Present the three Reference Architectures (PDU, RA, SDA) |
| **Part III: Application Method** | 8-13 | Guide the five-phase application process |
| **Part IV: Appendices** | A-F | Provide supporting materials (glossary, tools, examples) |

## 1.4 Relationship to Other Frameworks

### 1.4.1 Relationship to TOGAF

GEATDM uses TOGAF vocabulary and concepts but does not mandate the TOGAF Architecture Development Method (ADM):

| Aspect | TOGAF | GEATDM |
|--------|-------|--------|
| **Vocabulary** | Used | Adopted (Architecture, Building Block, Metamodel) |
| **Metamodel** | Content Metamodel | Aligned, simplified for public sector |
| **ADM Phases** | Full cycle | Simplified to 5 phases |
| **Reference Models** | TRM, III-RM | Replaced by PDU/RA/SDA RAs |
| **Governance** | Architecture Governance | Adapted for public sector context |
| **Artifacts** | Extensive catalog | Focused, practical subset |

### 1.4.2 Relationship to PAERA

GEATDM operationalizes the Public Administration Ecosystem Reference Architecture (PAERA):

| PAERA Concept | GEATDM Implementation |
|---------------|----------------------|
| Organization Taxonomy (PDU/RA/SDA) | Three Reference Architectures |
| DPI Five Pillars | DPI Integration requirements per RA |
| Building Blocks | Capability-to-BB mapping |
| Ecosystems | Stakeholder maps per RA |
| Metamodel | EA Metamodel foundation |

### 1.4.3 Relationship to GovStack

GEATDM aligns with GovStack Building Blocks:

| GovStack Element | GEATDM Alignment |
|------------------|------------------|
| Building Block Specifications | Referenced in Application Architecture |
| Building Block APIs | Integration specifications |
| Sandbox/Testing | Implementation guidance |
| Use Cases | Capability-BB traceability |

---

# Chapter 2: Key Concepts

## 2.1 Digital Public Infrastructure (DPI)

### 2.1.1 Definition

**Digital Public Infrastructure (DPI)** refers to foundational digital systems that enable public services and digital transformation at a national scale. DPI consists of shared digital platforms, standards, and building blocks that can be reused across government and by private sector entities.

### 2.1.2 Critical Principle

> **DPI is national infrastructure. Organizations integrate with DPI; they do not build DPI components.**

### 2.1.3 DPI Five-Domain Model

| Domain | Scope | Organization's Responsibility |
|--------|-------|------------------------------|
| **Digital Access** | Infrastructure, service channels, accessibility | Ensure services are accessible via national channels |
| **Digital Data Infrastructure** | Data governance, registries, standards, analytics | Comply with data standards, integrate with national registries |
| **Interoperability** | Technical infrastructure, standards, integration | Use national interoperability platform |
| **Digital Identity** | Civil registry, national ID, authentication, trust services | Integrate with national identity services |
| **Governance** | Leadership, coordination, policy, performance | Align with national digital governance framework |

### 2.1.4 DPI Pillar Components

**Access Pillar:**
- High-Speed Connectivity
- Accessibility Features
- Cybersecurity Framework

**Data Pillar:**
- Data Centers and Cloud Services
- Monitoring and Analytics Tools
- Data Protection Infrastructure

**Interoperability Pillar:**
- API Management
- Identity and Access Management (IAM)
- Data Format Services
- Registry Services
- Security Services

**Identity Pillar:**
- Identity Management Systems
- Authentication Services
- Authorization Services
- PKI
- Digital Signature Services

## 2.2 Organization Taxonomy (PDU/RA/SDA)

### 2.2.1 Overview

Public sector organizations can be categorized into three major types based on their automation requirements and operational complexity:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      ORGANIZATION TYPE HIERARCHY                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                   SERVICE DELIVERY AUTHORITY (SDA)                   │    │
│  │         Tax, Customs, Police, Treasury, Social Security             │    │
│  │  ┌────────────────────────────────────────────────────────────┐     │    │
│  │  │              REGULATORY AGENCY (RA)                        │     │    │
│  │  │    Data Protection, Business Registration, Professional    │     │    │
│  │  │  ┌───────────────────────────────────────────────────┐     │     │    │
│  │  │  │        POLICY DEVELOPMENT UNIT (PDU)              │     │     │    │
│  │  │  │   Ministries, Chancelleries, Policy Departments   │     │     │    │
│  │  │  └───────────────────────────────────────────────────┘     │     │    │
│  │  └────────────────────────────────────────────────────────────┘     │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  INHERITANCE: SDA ⊃ RA ⊃ PDU                                                │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.2.2 Policy Development Unit (PDU)

**Definition:** The most basic bureaucratic organizational unit responsible for policy analysis, development, and monitoring.

| Characteristic | Description |
|----------------|-------------|
| **Primary Function** | Policy development and legislation |
| **Transaction Volume** | Low (document-centric) |
| **Customer Interaction** | Indirect (consultation-based) |
| **IT Intensity** | Moderate (office automation) |
| **Examples** | Ministries, Chancelleries, Parliament Offices |

### 2.2.3 Regulatory Agency (RA)

**Definition:** Organization responsible for regulating specific sectors through licensing, permitting, inspection, and enforcement.

| Characteristic | Description |
|----------------|-------------|
| **Primary Function** | Sector regulation and oversight |
| **Transaction Volume** | Moderate (thousands to tens of thousands) |
| **Customer Interaction** | Direct (applications, inspections) |
| **IT Intensity** | Higher (case management, mobile) |
| **Examples** | Data Protection Authority, Business Registry |

### 2.2.4 Service Delivery Authority (SDA)

**Definition:** Complex authority with high-volume transaction processing and extensive customer interaction.

| Characteristic | Description |
|----------------|-------------|
| **Primary Function** | Mass service delivery and enforcement |
| **Transaction Volume** | High (millions of transactions) |
| **Customer Interaction** | Extensive (multi-channel) |
| **IT Intensity** | Very High (enterprise platforms) |
| **Examples** | Tax Authority, Customs, Social Security |

### 2.2.5 Classification Decision Logic

```
START
  │
  ▼
Does the organization primarily develop 
policy and legislation? ─────────────────────► YES ──► PDU
  │
  NO
  │
  ▼
Does the organization regulate a specific 
sector through licensing/permits? ───────────► YES ──► RA
  │
  NO
  │
  ▼
Does the organization deliver services with 
high-volume transactions and enforcement? ───► YES ──► SDA
  │
  NO
  │
  ▼
Hybrid: Identify primary function, 
classify accordingly, note secondary functions
```

## 2.3 Reference Architecture Concept

### 2.3.1 Definition

> "Reference Architecture refers to the consolidation of previous experience in the domain of digitalization in public administration. It involves creating templates that structure components of applications and technology to support specific business models presented in the public sector."
> — PAERA Framework

### 2.3.2 Reference Architecture Value

| Value | Description |
|-------|-------------|
| **Acceleration** | Start from proven patterns, not blank slate |
| **Consistency** | Standardized approach across organizations |
| **Quality** | Built-in best practices and lessons learned |
| **Reuse** | Components can be shared across implementations |
| **Risk Reduction** | Known patterns reduce design uncertainty |

### 2.3.3 Inheritance Model

GEATDM Reference Architectures follow an inheritance pattern:

```
PDU (Base)
 │
 ├── All PDU capabilities, applications, data
 │
 └── RA (Extends PDU)
      │
      ├── Inherits ALL from PDU
      ├── Adds Regulatory capabilities (C3.x)
      ├── Adds Regulatory applications (A6.x-A9.x)
      ├── Adds Regulatory data domains (D6-D9)
      │
      └── SDA (Extends RA)
           │
           ├── Inherits ALL from PDU and RA
           ├── Adds Service Delivery capabilities (C4.x)
           ├── Adds Service Delivery applications (A10.x-A15.x)
           ├── Adds Service Delivery data domains (D10-D14)
           └── Industrialized scale requirements
```

## 2.4 Building Blocks

### 2.4.1 Definition

> "A building block is a separately deployable executable software component, described in a specification of the block's interface (API), and objectives to be achieved using the capabilities of that component."
> — PAERA Framework

### 2.4.2 Building Block Categories

| Category | Description | Deployment |
|----------|-------------|------------|
| **Infrastructure BBs** | Not specific to organization function; foundational | Deployed once nationally (e.g., Identity BB) |
| **Functional BBs** | Specific to business activities | Configured per organization (e.g., Workflow BB) |
| **Back Office BBs** | For internal use by staff | Per organization |
| **Front Office BBs** | For external stakeholders | Per organization |

### 2.4.3 Key GovStack Building Blocks

**Infrastructure BBs (DPI-level):**
- Identity BB
- Digital Registries BB
- Information Mediator BB
- Payments BB
- Messaging BB
- Consent BB
- Security BB

**Functional BBs (Organization-level):**
- Workflow BB
- Scheduler BB
- Registration BB
- Content Management BB
- Analytics BB
- E-Signature BB
- Geographic Information Services BB

---

# Chapter 3: EA Framework

The EA Framework provides the foundational components that support all GEATDM activities: the metamodel that defines architecture objects and relationships, principles that guide decisions, governance that ensures compliance, and services that the EA function delivers.

## 3.1 EA Metamodel

### 3.1.1 Purpose

The EA Metamodel defines the set of entities (objects), their attributes, and relationships that allow architectural concepts to be captured, stored, filtered, queried, and represented consistently.

### 3.1.2 Metamodel Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│                        EA METAMODEL STRUCTURE                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────────┐          ┌──────────────────┐                 │
│  │     OBJECTS      │◄────────►│  RELATIONSHIPS   │                 │
│  │                  │          │                  │                 │
│  │ Entities to      │          │ Links between    │                 │
│  │ define each      │          │ objects within   │                 │
│  │ architecture     │          │ and across       │                 │
│  │ domain           │          │ domains          │                 │
│  └──────────────────┘          └──────────────────┘                 │
│           │                             │                            │
│           ▼                             ▼                            │
│  ┌──────────────────┐          ┌──────────────────┐                 │
│  │   ATTRIBUTES     │          │   VIEWPOINTS     │                 │
│  │                  │          │                  │                 │
│  │ Properties that  │          │ Perspectives     │                 │
│  │ define and       │          │ addressing       │                 │
│  │ describe objects │          │ stakeholder      │                 │
│  │                  │          │ concerns         │                 │
│  └──────────────────┘          └──────────────────┘                 │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 3.1.3 Architecture Domains

The metamodel organizes objects across four architecture domains (BDAT):

| Domain | Focus | Key Objects |
|--------|-------|-------------|
| **Business** | What the organization does | Service, Process, Capability, Customer, Role |
| **Data** | Information managed | Data Entity, Data Object, Information Flow |
| **Application** | Systems used | Application, Application Component, Application Service |
| **Technology** | Infrastructure | Technology Component, Network, Server, Deployment |

### 3.1.4 Cross-Domain Relationships

Key relationship types in the metamodel:

| Relationship | Description | Example |
|--------------|-------------|---------|
| **Realizes** | Makes effective | Process realizes Service |
| **Supports** | Assists | Application supports Process |
| **Uses** | Employs | Process uses Data Entity |
| **Contains** | Composed of | Application contains Components |
| **Serves** | Provides to | Service serves Customer |

### 3.1.5 Traceability Chains

Critical traceability chains must be maintained:

1. **Strategy to Execution:** Vision → Goal → Objective → Initiative → Project → Building Block
2. **Service to Technology:** Customer → Service → Process → Application → Technology
3. **Capability Realization:** Capability → Process → Application Function → Application Component

> **Reference:** Complete metamodel specification available in GEATDM-WP1-T11-Metamodel-v1.0.md

## 3.2 EA Principles

### 3.2.1 Purpose

EA Principles are fundamental guidelines that inform architecture and technology decisions, ensuring consistency across BDAT domains and alignment with organizational strategy.

### 3.2.2 Principle Template

Each principle follows a standard structure:

| Element | Description |
|---------|-------------|
| **ID** | Domain identifier (e.g., BA-01, DA-03) |
| **Name** | Short, memorable name |
| **Statement** | Clear, actionable principle statement |
| **Rationale** | Why this principle exists |
| **Implications** | What this means in practice |

### 3.2.3 Principle Categories Summary

| Category | Count | Focus |
|----------|-------|-------|
| **Business Architecture (BA)** | 7 | Services, processes, customer experience |
| **Data Architecture (DA)** | 7 | Data management, quality, sharing |
| **Application Architecture (APP)** | 7 | Applications, integration, building blocks |
| **Technology Architecture (TECH)** | 7 | Infrastructure, security, operations |
| **Cross-Cutting (CC)** | 5 | Principles spanning all domains |

### 3.2.4 Key Principles Quick Reference

**Business Architecture:**
- BA-01: Customer-Centric Service Design
- BA-02: Process Standardization and Automation
- BA-03: Capability-Based Planning

**Data Architecture:**
- DA-01: Data as a Strategic Asset
- DA-02: Once-Only Data Collection
- DA-03: Single Source of Truth

**Application Architecture:**
- APP-01: Building Block Orientation
- APP-02: Loose Coupling and High Cohesion
- APP-03: Integration Through National DPI

**Technology Architecture:**
- TECH-01: Security by Design
- TECH-02: Resilience and Business Continuity
- TECH-04: Standardization and Simplification

**Cross-Cutting:**
- CC-01: Whole-of-Government Alignment
- CC-02: Digital by Default, Inclusive by Design
- CC-05: Value for Money and Sustainability

> **Reference:** Complete principles catalog available in GEATDM-WP1-T12-EAPrinciples-v1.0.md

## 3.3 EA Governance Model

### 3.3.1 Governance Hierarchy

```
┌─────────────────────────────────────────────────────────┐
│         Digital Transformation Committee                │
│    (Strategic Direction & Executive Sponsorship)        │
├─────────────────────────────────────────────────────────┤
│              Enterprise Architecture Board              │
│     (Architecture Decisions & Standards Approval)       │
├─────────────────────────────────────────────────────────┤
│                   EA Office / Team                      │
│      (Day-to-Day Governance & Implementation)           │
└─────────────────────────────────────────────────────────┘
```

### 3.3.2 Governance Processes

| Process | Purpose | Trigger |
|---------|---------|---------|
| **Solution Architecture Compliance** | Verify alignment with target architecture | Project reaching design phase |
| **Architecture Change Request** | Manage architecture modifications | Change request submission |
| **Architecture Dispensation** | Handle unavoidable deviations | Non-compliance identification |
| **EA Framework Maintenance** | Continuous improvement | Quarterly/annual review |

### 3.3.3 Scaling by Organization Type

| Organization Type | EA Governance Approach |
|-------------------|------------------------|
| **PDU** | Lightweight; focus on document management standards |
| **RA** | Moderate; add digital service delivery standards |
| **SDA** | Full governance model; comprehensive EA practice |

> **Reference:** Complete governance model available in GEATDM-WP1-T13-Governance-v1.0.md

## 3.4 EA Services

### 3.4.1 Service Portfolio Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                    EA SERVICE PORTFOLIO                          │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  STRATEGIC   │  │   PROJECT    │  │   ADVISORY   │          │
│  │  SERVICES    │  │   SUPPORT    │  │   SERVICES   │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  REPOSITORY  │  │  GOVERNANCE  │  │  ASSESSMENT  │          │
│  │   SERVICES   │  │   SERVICES   │  │   SERVICES   │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────────────────────────────────────────────┘
```

### 3.4.2 Key Services Summary

| Service ID | Service Name | Category |
|------------|--------------|----------|
| EA-SRV-01 | IT Strategic Planning Support | Strategic |
| EA-SRV-02 | Architecture Roadmap Planning | Strategic |
| EA-SRV-03 | Solution Architecture Review | Project Support |
| EA-SRV-04 | Procurement Support | Project Support |
| EA-SRV-05 | Technical Architecture Consultation | Advisory |
| EA-SRV-07 | EA Framework Maintenance | Repository |
| EA-SRV-08 | EA Development | Repository |
| EA-SRV-09 | Architecture Compliance & Governance | Governance |
| EA-SRV-10 | Change & Dispensation Management | Governance |
| EA-SRV-11 | Digital Maturity Assessment | Assessment |
| EA-SRV-12 | Digital Research & Innovation | Assessment |

### 3.4.3 Service Applicability by Organization Type

| Service Category | PDU | RA | SDA |
|------------------|:---:|:--:|:---:|
| Strategic Services | ○ | ● | ● |
| Project Support | ○ | ◐ | ● |
| Advisory Services | ○ | ◐ | ● |
| Repository Services | ○ | ◐ | ● |
| Governance Services | ○ | ◐ | ● |
| Assessment Services | ○ | ○ | ● |

**Legend:** ● Required | ◐ Recommended | ○ Optional

> **Reference:** Complete services catalog available in GEATDM-WP1-T14-EAServices-v1.0.md

---

# PART II: REFERENCE ARCHITECTURES

---

# Chapter 4: Reference Architecture Overview

## 4.1 RA Hierarchy and Inheritance

### 4.1.1 Inheritance Chain

The GEATDM Reference Architectures form an inheritance hierarchy where each successive level includes all elements from its predecessor:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    REFERENCE ARCHITECTURE INHERITANCE                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  PDU (Base Layer)                                                           │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │ • C1.x Policy Development Capabilities (28 capabilities)              │  │
│  │ • C2.x Support Capabilities (44 capabilities)                         │  │
│  │ • A0-A5 Applications (20 applications)                                │  │
│  │ • D1-D5 Data Domains (25 sub-domains)                                 │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│       │                                                                      │
│       ▼                                                                      │
│  RA (Extends PDU)                                                           │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │ • [INHERITED] All PDU elements                                        │  │
│  │ • [NEW] C3.x Regulatory Capabilities (49 capabilities)                │  │
│  │ • [NEW] A6-A9 Regulatory Applications (14 applications)               │  │
│  │ • [NEW] D6-D9 Data Domains (12 sub-domains)                           │  │
│  │ • [UPGRADED] DPI requirements (Payments BB mandatory)                 │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│       │                                                                      │
│       ▼                                                                      │
│  SDA (Extends RA)                                                           │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │ • [INHERITED] All PDU + RA elements                                   │  │
│  │ • [NEW] C4.x Service Delivery Capabilities (96 capabilities)          │  │
│  │ • [NEW] A10-A15 Service Delivery Applications (18 applications)       │  │
│  │ • [NEW] D10-D14 Data Domains (15 sub-domains)                         │  │
│  │ • [UPGRADED] Enterprise-grade requirements (99.9%+ availability)      │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.1.2 Inheritance Summary

| Element Category | PDU (Base) | RA (Adds) | SDA (Adds) | Total in SDA |
|------------------|-----------|-----------|------------|--------------|
| **Capability Domains** | 2 (C1, C2) | 1 (C3) | 1 (C4) | 4 |
| **L1 Capabilities** | 15 | 7 | 12 | 34 |
| **L2 Capabilities** | 72 | 49 | 96 | 217 |
| **Application Zones** | 6 (A0-A5) | 4 (A6-A9) | 6 (A10-A15) | 16 |
| **Data Domains** | 5 (D1-D5) | 4 (D6-D9) | 5 (D10-D14) | 14 |
| **Platform Tier** | Basic | Standard | Enterprise | Enterprise |

## 4.2 RA Structure Template

### 4.2.1 Standard RA Structure

Every Reference Architecture follows this consistent structure:

```
REFERENCE ARCHITECTURE: [Organization Type]

1. ORGANIZATION PROFILE
   1.1 Definition and Scope
   1.2 Typical Examples
   1.3 Key Characteristics
   1.4 Ecosystem Participation Patterns
   1.5 DPI Integration Points

2. BUSINESS ARCHITECTURE
   2.1 Business Model Canvas
   2.2 Stakeholder Map
   2.3 Service Catalog

3. CAPABILITY MAP
   3.1 Core Capabilities
   3.2 Support Capabilities
   3.3 Capability Maturity Indicators

4. APPLICATION ARCHITECTURE
   4.1 Application Components Diagram
   4.2 Core Applications by Capability Area
   4.3 Integration Requirements
   4.4 DPI Integration Specifications
   4.5 Building Block Mapping

5. DATA ARCHITECTURE
   5.1 Key Data Domains
   5.2 Data Ownership Model
   5.3 External Data Dependencies
   5.4 Data Quality Requirements
   5.5 Analytics Requirements

6. TECHNOLOGY CONSIDERATIONS
   6.1 Infrastructure Patterns
   6.2 Security Requirements
   6.3 Scalability Considerations
   6.4 Platform Tier Recommendation

7. IMPLEMENTATION GUIDANCE
   7.1 Typical Implementation Sequence
   7.2 Quick Wins Identification
   7.3 Risk Areas and Mitigation
   7.4 Success Factors
```

### 4.2.2 Section Purpose Summary

| Section | Purpose | Key Questions Answered |
|---------|---------|----------------------|
| Organization Profile | Define scope and context | What is this org type? How does it fit in the ecosystem? |
| Business Architecture | Define what the organization does | What value does it create? For whom? How? |
| Capability Map | Define required abilities | What must the organization be able to do? |
| Application Architecture | Define systems needed | What applications support the capabilities? |
| Data Architecture | Define information needs | What data is needed? Where does it come from? |
| Technology | Define infrastructure | What technical platform is needed? |
| Implementation | Guide execution | How do we get there? |

## 4.3 How to Use Reference Architectures

### 4.3.1 Usage Patterns

| Use Case | Approach |
|----------|----------|
| **Assessment** | Compare AS-IS against RA to identify gaps |
| **Planning** | Use RA as TO-BE baseline for roadmap development |
| **Design** | Reference RA patterns in solution architecture |
| **Governance** | Verify compliance with RA standards |
| **Procurement** | Include RA alignment in RFP requirements |

### 4.3.2 Customization Approach

Reference Architectures are templates, not mandates. Customization is expected:

| Customization Type | Guidance |
|-------------------|----------|
| **Selection** | Include all required capabilities; optional capabilities based on context |
| **Naming** | Rename capabilities/applications to match organizational terminology |
| **Grouping** | Combine or split components based on organization size |
| **Phasing** | Prioritize implementation based on business drivers |
| **Technology** | Select specific products that fulfill component requirements |

### 4.3.3 RA Integrity Protection

While customization is encouraged, certain elements should be preserved:

| Element | Treatment |
|---------|-----------|
| **Capability structure** | Maintain hierarchy; don't flatten |
| **Inheritance chain** | Include all inherited elements |
| **DPI integration points** | Maintain mandatory integrations |
| **BB alignment** | Preserve Building Block mapping |
| **Traceability** | Maintain capability-application-BB links |

---

# Chapter 5: PDU Reference Architecture

## 5.1 Organization Profile

### 5.1.1 Definition

A **Policy Development Unit (PDU)** is the most basic bureaucratic organizational unit in public administration, primarily responsible for policy analysis, development, and monitoring within a specific governmental functional area.

### 5.1.2 Key Characteristics

| Characteristic | Description |
|----------------|-------------|
| **Primary Function** | Policy analysis, development, monitoring |
| **Transaction Volume** | Low (document-centric) |
| **Customer Interaction** | Indirect (consultation-based) |
| **IT Intensity** | Moderate (office automation) |
| **Examples** | Ministries, Chancelleries, Policy Departments |

### 5.1.3 DPI Integration Requirements

| DPI Component | Requirement Level |
|---------------|-------------------|
| Identity BB | Mandatory |
| Information Mediator BB | Mandatory |
| Messaging BB | Recommended |
| Digital Registries BB | Recommended |
| Workflow BB | Recommended |
| Payments BB | Not Required |

## 5.2 Business Architecture

### 5.2.1 Value Propositions

1. **Policy Development** — Responsible for specific functional area (defense, health, social care, etc.); develop and maintain legislation; communicate with stakeholders
2. **Supervision of Implementation** — Set up KPIs and reporting; monitor implementing agencies; evaluate policy outcomes

### 5.2.2 Key Stakeholders

| Internal | External |
|----------|----------|
| Minister/Political Leadership | Parliament/Legislature |
| Permanent Secretary | Cabinet/Government |
| Policy Departments | Other Ministries |
| Legal Services | Implementing Agencies |
| Communications Unit | Industry/Business |
| Finance & Budget Unit | Civil Society |

## 5.3 Capability Map

### 5.3.1 Core Capabilities (C1.x)

| ID | Capability | Description |
|----|------------|-------------|
| C1.1 | Policy Analysis and Research | Analyze issues, gather evidence, develop options |
| C1.2 | Policy Formulation | Develop proposals and recommendations |
| C1.3 | Legislative Drafting | Translate decisions into legal instruments |
| C1.4 | Stakeholder Engagement | Engage stakeholders, build consensus |
| C1.5 | Inter-Governmental Coordination | Coordinate across government entities |
| C1.6 | Policy Monitoring and Evaluation | Track implementation, assess outcomes |

### 5.3.2 Support Capabilities (C2.x)

| ID | Capability | Description |
|----|------------|-------------|
| C2.1 | Human Resource Management | Manage workforce |
| C2.2 | Financial Management | Manage finances |
| C2.3 | Procurement Management | Acquire goods/services |
| C2.4 | Information and Knowledge Management | Manage information assets |
| C2.5 | Corporate Communications | Manage communications |
| C2.6 | IT and Digital Services | Provide technology services |
| C2.7 | Facilities and Administration | Manage physical assets |
| C2.8 | Risk and Compliance Management | Manage risks, ensure compliance |
| C2.9 | Strategic Management | Set direction, manage strategy |

## 5.4 Application Architecture

### 5.4.1 Application Zones

| Zone | Applications | Purpose |
|------|-------------|---------|
| **A0: Channels** | Internal Portal, Stakeholder Portal, API Gateway, G2G Interface | Access points |
| **A1: Policy Development** | Document Management, Policy Management, Legislative Drafting | Core function |
| **A2: Stakeholder Engagement** | SRM, Consultation Platform, Communication Management | External engagement |
| **A3: Knowledge & Collaboration** | Knowledge Management, Collaboration Platform, Intranet | Collaboration |
| **A4: Support Functions (PAO-CC)** | HR, Finance, Asset, Project Management | Corporate services |
| **A5: Data & Analytics** | Data Platform, Analytics Platform, Reporting Platform | Information |

### 5.4.2 Building Block Mapping (Key)

| Capability Area | Primary Building Block |
|-----------------|----------------------|
| Document Management | Digital Registries BB |
| Policy Workflows | Workflow BB |
| Stakeholder Communications | Messaging BB |
| Cross-Ministry Exchange | Information Mediator BB |
| Staff Authentication | Identity BB |

## 5.5 Data Architecture

### 5.5.1 Data Domains

| Domain | Description |
|--------|-------------|
| D1: Policy Data | Policy documents, legislation, analysis |
| D2: Stakeholder Data | Stakeholder profiles, interactions |
| D3: Operational Data | Workflows, documents, correspondence |
| D4: Reference Data | Classifications, taxonomies, codes |
| D5: Corporate Data | HR, finance, assets, plans |

## 5.6 Technology Considerations

### 5.6.1 Platform Tier

**Recommended Tier:** Basic (MVP)

| Profile | Value |
|---------|-------|
| Staff Size | <500 |
| Implementation Timeline | 9-12 months |
| Focus | Office automation, document management, basic analytics |

### 5.6.2 Cloud Strategy

Cloud-first, SaaS preference for commodity functions:
- Email/Calendar: Microsoft 365 / Google Workspace
- Video Conferencing: Teams / Zoom
- Project Management: Standard SaaS tools
- Document Collaboration: Cloud-based

## 5.7 Implementation Guidance

### 5.7.1 Three-Phase Approach

| Phase | Timeline | Focus |
|-------|----------|-------|
| **Phase 1: Foundation** | Months 1-6 | DMS, Identity BB integration, Collaboration |
| **Phase 2: Core** | Months 7-14 | Policy Management, Legislative Drafting, Analytics |
| **Phase 3: Enhancement** | Months 15-24 | Stakeholder Engagement, Knowledge Management |

### 5.7.2 Quick Wins

1. Centralized document repository with full-text search
2. Shared team collaboration spaces
3. Automated stakeholder notifications
4. Meeting scheduling automation
5. Document approval notifications

> **Reference:** Complete PDU RA available in GEATDM-WP2-T25-PDU-RA-Complete-v1.0.md

---

# Chapter 6: RA Reference Architecture

## 6.1 Organization Profile (extends PDU)

### 6.1.1 Definition

A **Regulatory Agency (RA)** is a government organization responsible for implementation and enforcement of regulatory policies within a specific functional area. RA = PDU + Regulatory Implementation Function.

### 6.1.2 Key Characteristics

| Characteristic | PDU | RA (adds) |
|----------------|-----|-----------|
| **Primary Function** | Policy development | + Sector regulation |
| **Transaction Volume** | Low | Moderate (thousands to tens of thousands) |
| **Customer Interaction** | Indirect | Direct (applications, inspections) |
| **IT Intensity** | Moderate | Higher (case management, mobile) |
| **Examples** | Ministries | Data Protection, Business Registry |

### 6.1.3 DPI Integration Requirements (Extended)

| DPI Component | PDU Level | RA Level |
|---------------|-----------|----------|
| Identity BB | Mandatory | Mandatory (extended to licensees) |
| Information Mediator BB | Mandatory | Mandatory |
| Messaging BB | Recommended | **Mandatory** |
| Digital Registries BB | Recommended | **Mandatory** |
| Workflow BB | Recommended | **Mandatory** |
| Payments BB | Not Required | **Mandatory** |
| Registration BB | Optional | **Mandatory** |

## 6.2 Business Architecture (extends PDU)

### 6.2.1 Additional Value Propositions

Beyond PDU value propositions, RA adds:

3. **Licensing and Authorization** — Process applications, issue licenses/permits, manage renewals
4. **Supervision and Compliance** — Monitor regulated entities, conduct inspections
5. **Enforcement** — Investigate violations, apply sanctions, manage appeals

### 6.2.2 Additional Stakeholders

| New Stakeholder Category | Examples |
|--------------------------|----------|
| Regulated Entities | Licensees, permit holders |
| Peer Regulators | Other RAs in related areas |
| Judiciary/Tribunals | Appeals bodies |
| Law Enforcement | For enforcement support |
| Consumers/Complainants | Public inquiries |

## 6.3 Capability Map (extends PDU)

### 6.3.1 Inherited Capabilities [INHERITED]

- C1.x Policy Development Domain (28 capabilities) — fully inherited from PDU
- C2.x Organizational Support Domain (44 capabilities) — fully inherited from PDU

### 6.3.2 New Regulatory Capabilities (C3.x) [NEW]

| ID | Capability | Description |
|----|------------|-------------|
| C3.1 | License & Permit Management | Full lifecycle from application to expiry |
| C3.2 | Inspection Management | Plan and execute inspections |
| C3.3 | Compliance Management | Monitor and assess compliance |
| C3.4 | Enforcement Management | Investigate, sanction, resolve |
| C3.5 | Public Registry Management | Maintain authoritative registries |
| C3.6 | Regulatory Communication | Sector guidance and notifications |
| C3.7 | Risk-Based Regulation | Prioritize activities by risk |

## 6.4 Application Architecture (extends PDU)

### 6.4.1 Inherited Applications [INHERITED]

All PDU applications (A0.x through A5.x) are fully inherited.

### 6.4.2 New Application Zones [NEW]

| Zone | Applications | Purpose |
|------|-------------|---------|
| **A0.5: Applicant Portal** | Public-facing application portal | New channel |
| **A6: Licensing & Permits** | License Management, Application Processing, Fee Collection | Core regulatory |
| **A7: Inspection & Audit** | Inspection Planning, Mobile Inspection, Finding Management | Oversight |
| **A8: Compliance & Enforcement** | Compliance Assessment, Enforcement Case Management, Sanctions | Enforcement |
| **A9: Public Services** | Public Registry Portal, Verification Services, Inquiry Management | Public access |

### 6.4.3 Key Building Block Mapping (New)

| Capability Area | Primary Building Block |
|-----------------|----------------------|
| Application Processing | Registration BB |
| Fee Collection | Payments BB |
| Inspection Scheduling | Scheduler BB |
| Compliance Notifications | Messaging BB |
| License Registry | Digital Registries BB |

## 6.5 Data Architecture (extends PDU)

### 6.5.1 Inherited Data Domains [INHERITED]

D1-D5 (Policy, Stakeholder, Operational, Reference, Corporate) — fully inherited from PDU.

### 6.5.2 New Data Domains [NEW]

| Domain | Description |
|--------|-------------|
| D6: Regulated Entity Data | Licensee profiles, history |
| D7: Compliance Data | Inspection results, assessments |
| D8: Enforcement Data | Cases, sanctions, appeals |
| D9: Public Registry Data | Published license records |

## 6.6 Technology Considerations

### 6.6.1 Platform Tier

**Recommended Tier:** Standard

| Profile | Value |
|---------|-------|
| Staff Size | 100-500 |
| Implementation Timeline | 12-18 months |
| Focus | Digital service delivery, case management |
| Availability | 99% for public-facing |

### 6.6.2 Additional Requirements

- Mobile inspection capability
- Online payment integration
- Public portal infrastructure
- Case management workflow

## 6.7 Implementation Guidance

### 6.7.1 Four-Phase Approach

| Phase | Timeline | Focus |
|-------|----------|-------|
| **Phase 1: Foundation** | Months 1-6 | PDU foundation + Identity/Payments BB |
| **Phase 2: Licensing Core** | Months 7-12 | Application processing, fee collection |
| **Phase 3: Compliance** | Months 13-18 | Inspection, compliance monitoring |
| **Phase 4: Enhancement** | Months 19-24 | Public registry, analytics |

> **Reference:** Complete RA Reference Architecture available in GEATDM-WP3-T35-RA-RA-Complete-v1.0.md

---

# Chapter 7: SDA Reference Architecture

## 7.1 Organization Profile (extends RA)

### 7.1.1 Definition

A **Service Delivery Authority (SDA)** is the most complex governmental organizational unit, responsible for high-volume service delivery with extensive customer interaction. SDA = RA + Industrialized Service Delivery Function.

### 7.1.2 Key Characteristics

| Characteristic | RA | SDA (adds) |
|----------------|-----|------------|
| **Primary Function** | Sector regulation | + Mass service delivery |
| **Transaction Volume** | Moderate | High (millions) |
| **Customer Interaction** | Direct | Extensive (multi-channel) |
| **IT Intensity** | Higher | Very High (enterprise) |
| **Examples** | Data Protection | Tax, Customs, Social Security |

### 7.1.3 DPI Integration Requirements (Enterprise-Grade)

| DPI Component | RA Level | SDA Level |
|---------------|----------|-----------|
| Identity BB | Mandatory | Mandatory (mass authentication) |
| Information Mediator BB | Mandatory | Mandatory (high-volume) |
| Messaging BB | Mandatory | Mandatory (multi-channel) |
| Digital Registries BB | Mandatory | Mandatory (large-scale) |
| Workflow BB | Mandatory | Mandatory (complex) |
| Payments BB | Mandatory | **Mandatory (real-time, high-volume)** |

## 7.2 Business Architecture (extends RA)

### 7.2.1 Additional Value Propositions

Beyond RA value propositions, SDA adds:

6. **Mass Registration** — Onboard and maintain millions of customers
7. **Filing and Declaration Processing** — Process high-volume submissions
8. **Revenue and Accounting** — Collect, account, and refund at scale
9. **Customer Service** — Multi-channel support for mass customer base
10. **Risk Intelligence** — Data-driven risk identification and response

### 7.2.2 Additional Stakeholders

| New Stakeholder Category | Examples |
|--------------------------|----------|
| Mass Customer Base | Taxpayers, benefit recipients |
| Financial Institutions | Banks, payment processors |
| International Partners | Foreign tax authorities |
| Third-Party Data Providers | Employers, financial institutions |

## 7.3 Capability Map (extends RA)

### 7.3.1 Inherited Capabilities [INHERITED]

- C1.x Policy Development (28 capabilities) — from PDU
- C2.x Organizational Support (44 capabilities) — from PDU
- C3.x Regulatory Domain (49 capabilities) — from RA

### 7.3.2 New Service Delivery Capabilities (C4.x) [NEW]

| ID | Capability | Description |
|----|------------|-------------|
| C4.1 | Mass Registration Management | High-volume customer onboarding |
| C4.2 | Customer Profile Management | Comprehensive customer data |
| C4.3 | Filing and Declaration Processing | Process submissions at scale |
| C4.4 | Revenue Management | Billing, collection, accounting |
| C4.5 | Refund Management | Process and track refunds |
| C4.6 | Customer Account Management | Unified account view |
| C4.7 | Multi-Channel Service Delivery | Consistent service across channels |
| C4.8 | Advanced Case Management | Complex, multi-step cases |
| C4.9 | Risk Intelligence | Data-driven risk assessment |
| C4.10 | Third-Party Data Integration | External data processing |
| C4.11 | Debt Management | Collection and recovery |
| C4.12 | Business Intelligence | Strategic analytics |

## 7.4 Domain Architecture Model

### 7.4.1 Four-Domain Architecture

SDA organizations benefit from a domain-driven architecture approach:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SDA DOMAIN ARCHITECTURE                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────┐        ┌─────────────────┐                     │
│  │   REGISTRATION  │        │    COMPLIANCE   │                     │
│  │     DOMAIN      │◄──────►│     DOMAIN      │                     │
│  │                 │        │                 │                     │
│  │ Customer mgmt   │        │ Risk assessment │                     │
│  │ Profile mgmt    │        │ Audit selection │                     │
│  │ Lifecycle       │        │ Enforcement     │                     │
│  └────────┬────────┘        └────────┬────────┘                     │
│           │                          │                               │
│           │      ┌──────────┐        │                               │
│           └─────►│ CUSTOMER │◄───────┘                               │
│                  │   HUB    │                                        │
│           ┌─────►│          │◄───────┐                               │
│           │      └──────────┘        │                               │
│           │                          │                               │
│  ┌────────┴────────┐        ┌────────┴────────┐                     │
│  │   TRANSACTION   │        │   COLLECTION    │                     │
│  │     DOMAIN      │◄──────►│     DOMAIN      │                     │
│  │                 │        │                 │                     │
│  │ Filing mgmt     │        │ Billing         │                     │
│  │ Declaration     │        │ Payment         │                     │
│  │ Processing      │        │ Debt recovery   │                     │
│  └─────────────────┘        └─────────────────┘                     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## 7.5 Application Architecture (extends RA)

### 7.5.1 Inherited Applications [INHERITED]

All PDU applications (A0-A5) and all RA applications (A6-A9) are fully inherited.

### 7.5.2 New Application Zones [NEW]

| Zone | Applications | Purpose |
|------|-------------|---------|
| **A10: Registration** | Mass Registration, Profile Management, Lifecycle Management | Customer onboarding |
| **A11: Filing** | Declaration Processing, Filing Portal, Submission Management | Transaction processing |
| **A12: Revenue** | Billing, Payment Processing, Accounting, Refund Management | Financial |
| **A13: Channels** | Contact Center, Mobile App, Self-Service Portal, Chatbot | Multi-channel |
| **A14: Risk Intelligence** | Risk Scoring, Analytics Engine, Fraud Detection | Intelligence |
| **A15: Case Management** | Case Management Platform, Workflow Engine, SLA Management | Complex cases |

## 7.6 Data Architecture (extends RA)

### 7.6.1 Inherited Data Domains [INHERITED]

D1-D9 (all PDU and RA domains) — fully inherited.

### 7.6.2 New Data Domains [NEW]

| Domain | Description |
|--------|-------------|
| D10: Customer Data | Mass customer profiles |
| D11: Account Data | Financial accounts |
| D12: Risk Data | Risk scores, indicators |
| D13: Analytics Data | BI data warehouse |
| D14: Third-Party Data | External data feeds |

## 7.7 Technology Considerations

### 7.7.1 Platform Tier

**Recommended Tier:** Enterprise

| Profile | Value |
|---------|-------|
| Staff Size | >500 |
| Implementation Timeline | 18-36 months |
| Focus | High-performance, high-availability |
| Availability | 99.9%+ |

### 7.7.2 Enterprise Requirements

- Real-time transaction processing
- Multi-channel integration
- Advanced analytics/ML
- High-availability infrastructure
- Disaster recovery
- Performance at scale

## 7.8 Implementation Guidance

### 7.8.1 Five-Phase Approach

| Phase | Timeline | Focus |
|-------|----------|-------|
| **Phase 1: Foundation** | Months 1-9 | Core infrastructure, DPI integration |
| **Phase 2: Registration** | Months 10-15 | Customer onboarding, profile management |
| **Phase 3: Transactions** | Months 16-24 | Filing, payments, core processing |
| **Phase 4: Intelligence** | Months 25-30 | Risk, analytics, compliance |
| **Phase 5: Optimization** | Months 31-36 | Multi-channel, advanced features |

> **Reference:** Complete SDA RA available in GEATDM-WP4-T47-SDA-RA-Complete-v1.0.md

---

# PART III: APPLICATION METHOD

---

# Chapter 8: Method Overview

## 8.1 GEATDM Method Introduction

The GEATDM Application Method provides a structured, five-phase approach to applying Reference Architectures for digital transformation.

### 8.1.1 Method Objectives

1. **Classify** the organization and select appropriate Reference Architecture
2. **Document** current state and identify gaps
3. **Tailor** the Reference Architecture to organizational context
4. **Plan** the implementation roadmap
5. **Execute** and maintain architecture alignment

### 8.1.2 Method Principles

| Principle | Description |
|-----------|-------------|
| **RA-Centric** | Reference Architecture as primary tool |
| **Evidence-Based** | Decisions grounded in assessment |
| **Incremental** | Value delivered in phases |
| **Governed** | Clear decision points and oversight |
| **DPI-Integrated** | National infrastructure leverage |

## 8.2 Method Phases at a Glance

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        GEATDM APPLICATION METHOD                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐  │
│  │ DISCOVER │ → │  ASSESS  │ → │  ADAPT   │ → │   PLAN   │ → │ EXECUTE  │  │
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘  │
│                                                                              │
│  Classify org   Document      Tailor RA     Develop       Implement         │
│  Select RA      AS-IS         to context    roadmap       & govern          │
│  Check DPI      Identify                    Define                          │
│                 gaps                        phases                          │
│                                                                              │
│  Duration:      Duration:     Duration:     Duration:     Duration:         │
│  2-4 weeks      4-8 weeks     4-6 weeks     4-6 weeks     Ongoing           │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 8.2.1 Phase Summary

| Phase | Purpose | Key Deliverables |
|-------|---------|------------------|
| **DISCOVER** | Classify organization, assess DPI, select RA | Organization Profile, DPI Assessment, RA Selection |
| **ASSESS** | Document AS-IS, identify gaps | AS-IS Architecture, Gap Analysis, Readiness Assessment |
| **ADAPT** | Tailor RA, create TO-BE | Target Architecture, Tailoring Decisions, BB Priorities |
| **PLAN** | Develop roadmap, build case | Implementation Roadmap, Business Case, Governance Charter |
| **EXECUTE** | Implement, govern, improve | Projects, Compliance Reports, Continuous Improvement |

## 8.3 Decision Points Summary

| ID | Phase | Decision | Options |
|----|-------|----------|---------|
| DP1 | DISCOVER | Organization Classification | PDU / RA / SDA / Hybrid |
| DP2 | DISCOVER | DPI Readiness | Proceed / Address Gaps First |
| DP3 | ASSESS | Gap Priority | Must-have / Should-have / Nice-to-have |
| DP4 | ADAPT | Adaptation Scope | Minimal / Moderate / Extensive |
| DP5 | PLAN | Implementation Approach | Big Bang / Phased / Incremental |
| DP6 | PLAN | Governance Level | Light / Standard / Comprehensive |
| DP7 | EXECUTE | Project Compliance | Compliant / Dispensation Required |

---

# Chapter 9: DISCOVER Phase

## 9.1 Phase Overview

**Purpose:** Classify the organization and select the appropriate Reference Architecture.

**Duration:** 2-4 weeks

**Key Activities:**
1. Organization Classification
2. DPI Readiness Assessment
3. Reference Architecture Selection

**Entry Criteria:**
- Executive sponsorship confirmed
- Project team established
- Scope boundaries defined

**Exit Criteria:**
- Organization type confirmed
- DPI gaps identified (if any)
- Reference Architecture selected

## 9.2 Organization Classification

### 9.2.1 Classification Approach

Use the classification questionnaire (TK-01) to score the organization:

| Criteria Category | Assessment Focus |
|-------------------|------------------|
| **Function** | Primary purpose (policy, regulation, service) |
| **Customer Interaction** | Volume and nature of external contact |
| **Transactions** | Processing volume and complexity |
| **Compliance** | Enforcement and oversight role |
| **Data** | Data processing requirements |
| **Technology** | IT intensity requirements |

### 9.2.2 Classification Decision

| Score Pattern | Classification |
|---------------|---------------|
| PDU highest | Policy Development Unit |
| RA highest | Regulatory Agency |
| SDA highest | Service Delivery Authority |
| Tie or close | Hybrid — use primary function |

## 9.3 DPI Readiness Assessment

### 9.3.1 Assessment Dimensions

| DPI Domain | Key Questions |
|------------|---------------|
| **Digital Access** | Is broadband infrastructure adequate? |
| **Data Infrastructure** | Are data standards established? |
| **Interoperability** | Is national interoperability platform available? |
| **Digital Identity** | Is national eID system operational? |
| **Governance** | Is digital governance framework in place? |

### 9.3.2 DPI Gap Response

| Gap Severity | Response |
|--------------|----------|
| **Critical** | Address before proceeding (e.g., no identity infrastructure) |
| **Major** | Plan mitigation (e.g., limited interoperability) |
| **Minor** | Proceed with workarounds |
| **None** | Full DPI leverage available |

## 9.4 Reference Architecture Selection

### 9.4.1 Selection Matrix

| Classification Result | Reference Architecture | Platform Tier |
|-----------------------|----------------------|---------------|
| PDU | PDU Reference Architecture | Basic |
| RA | RA Reference Architecture | Standard |
| SDA | SDA Reference Architecture | Enterprise |
| Hybrid (PDU-leaning) | PDU + selective RA elements | Basic-Standard |
| Hybrid (RA-leaning) | RA + selective SDA elements | Standard-Enterprise |

### 9.4.2 Phase Deliverables

1. **Organization Profile Document** — Classification results, rationale
2. **DPI Readiness Assessment** — Gap analysis, mitigation plan
3. **RA Selection Report** — Selected RA, customization approach

---

# Chapter 10: ASSESS Phase

## 10.1 Phase Overview

**Purpose:** Document current state and identify gaps against Reference Architecture.

**Duration:** 4-8 weeks

**Key Activities:**
1. AS-IS Architecture Documentation
2. Gap Analysis
3. Readiness Assessment

## 10.2 AS-IS Architecture Documentation

### 10.2.1 Documentation Scope

| Domain | Documentation Focus |
|--------|---------------------|
| **Business** | Current services, processes, capabilities |
| **Application** | Application inventory, integration map |
| **Data** | Data assets, quality assessment |
| **Technology** | Infrastructure, platforms, tools |

### 10.2.2 Documentation Approach

1. Use RA structure as template
2. Inventory existing elements
3. Map current state to RA components
4. Identify gaps and overlaps

## 10.3 Gap Analysis

### 10.3.1 Gap Categories

| Category | Description | Example |
|----------|-------------|---------|
| **Missing** | RA element not present | No document management system |
| **Partial** | Element exists but incomplete | Basic workflows, no complex routing |
| **Different** | Element exists but divergent | Different technology standard |
| **Excess** | Element not in RA | Legacy system to retire |

### 10.3.2 Gap Prioritization

| Priority | Criteria | Typical Action |
|----------|----------|----------------|
| **Must-Have** | Critical for core operations | Include in Phase 1 |
| **Should-Have** | Important for efficiency | Include in Phase 2-3 |
| **Nice-to-Have** | Enhances operations | Future phases |
| **Not Needed** | Context-specific exclusion | Exclude from scope |

## 10.4 Readiness Assessment

### 10.4.1 Readiness Dimensions

| Dimension | Assessment Focus |
|-----------|------------------|
| **Technical** | Infrastructure, skills, tools |
| **Organizational** | Change readiness, leadership, culture |
| **Financial** | Budget, funding model |
| **Governance** | Decision-making, accountability |

### 10.4.2 Phase Deliverables

1. **AS-IS Architecture Document** — Current state across BDAT domains
2. **Gap Analysis Report** — Prioritized gaps with recommendations
3. **Readiness Assessment** — Organizational readiness evaluation

---

# Chapter 11: ADAPT Phase

## 11.1 Phase Overview

**Purpose:** Tailor the Reference Architecture to create organization-specific target architecture.

**Duration:** 4-6 weeks

**Key Activities:**
1. Tailor Reference Architecture
2. Create TO-BE Architecture
3. Prioritize Building Blocks

## 11.2 Tailoring the Reference Architecture

### 11.2.1 Tailoring Decision Framework

| Aspect | Guidance |
|--------|----------|
| **Required Elements** | Include all mandatory capabilities and components |
| **Optional Elements** | Select based on organization context |
| **Naming** | Adapt terminology to local standards |
| **Grouping** | Combine/split based on organization size |
| **Timing** | Sequence based on priorities |

### 11.2.2 RA Integrity Rules

**DO:**
- Maintain capability hierarchy structure
- Include all inherited elements
- Preserve mandatory DPI integrations
- Document tailoring decisions

**DON'T:**
- Remove mandatory components
- Break inheritance chain
- Ignore BB alignment
- Skip traceability documentation

## 11.3 TO-BE Architecture Creation

### 11.3.1 Architecture Viewpoints

| Viewpoint | Content | Audience |
|-----------|---------|----------|
| **Strategic** | Vision, objectives, roadmap | Executive |
| **Capability** | Target capabilities, maturity | Business |
| **Application** | Target application landscape | IT |
| **Data** | Target data architecture | Data management |
| **Technology** | Target infrastructure | Operations |

### 11.3.2 Phase Deliverables

1. **Target Architecture Document** — TO-BE architecture across domains
2. **Tailoring Decision Log** — Documented customization decisions
3. **Building Block Priority List** — Prioritized BB implementation sequence

---

# Chapter 12: PLAN Phase

## 12.1 Phase Overview

**Purpose:** Develop implementation roadmap and build business case.

**Duration:** 4-6 weeks

**Key Activities:**
1. Roadmap Development
2. Business Case Creation
3. Governance Charter

## 12.2 Roadmap Development

### 12.2.1 Roadmap Components

| Component | Description |
|-----------|-------------|
| **Phases** | Time-bounded implementation stages |
| **Projects** | Discrete work packages |
| **Dependencies** | Prerequisites and sequences |
| **Milestones** | Key achievement points |
| **Resources** | Staffing and budget allocation |

### 12.2.2 Phasing Approaches

| Approach | Description | When to Use |
|----------|-------------|-------------|
| **Big Bang** | Full implementation at once | Small scope, urgent need |
| **Phased** | Sequential stages | Normal situations |
| **Incremental** | Continuous small releases | Agile contexts |

## 12.3 Business Case Creation

### 12.3.1 Business Case Components

| Section | Content |
|---------|---------|
| **Strategic Context** | Alignment with organizational strategy |
| **Problem Statement** | Current challenges being addressed |
| **Solution Overview** | Proposed approach and architecture |
| **Benefits** | Quantified expected outcomes |
| **Costs** | Investment required (capital and operational) |
| **Risks** | Key risks and mitigation strategies |
| **Timeline** | Implementation schedule |
| **Recommendation** | Proposed decision |

### 12.3.2 Phase Deliverables

1. **Implementation Roadmap** — Multi-year plan with phases, projects, milestones
2. **Business Case** — Investment justification with benefits and costs
3. **Governance Charter** — EA governance structure and processes

---

# Chapter 13: EXECUTE & GOVERN Phase

## 13.1 Phase Overview

**Purpose:** Implement the target architecture and maintain ongoing governance.

**Duration:** Ongoing (per roadmap)

**Key Activities:**
1. Implementation Execution
2. EA Engagement at Decision Points
3. Compliance Monitoring
4. Continuous Improvement

## 13.2 Implementation Execution

### 13.2.1 EA Role in Implementation

| Activity | EA Contribution |
|----------|-----------------|
| **Project Initiation** | Architecture requirements |
| **Solution Design** | Alignment review |
| **Procurement** | RFP input, evaluation |
| **Build** | Design consultation |
| **Test** | Compliance verification |
| **Deploy** | Architecture update |

## 13.3 EA Engagement Model

### 13.3.1 Touchpoints

| Stage | EA Activity | Output |
|-------|-------------|--------|
| **Idea** | Research opportunity | Evaluation Report |
| **Initiative** | Strategy alignment | Budget Recommendations |
| **Project** | Gap analysis | Alignment Review |
| **Implementation** | Design review | Design Recommendations |
| **Release** | Compliance check | Compliance Report |

## 13.4 Compliance Monitoring

### 13.4.1 Compliance Assessment

| Outcome | Action |
|---------|--------|
| **Fully Compliant** | Proceed |
| **Minor Non-Compliance** | Implement with conditions |
| **Major Non-Compliance** | Trigger dispensation process |
| **Critical Non-Compliance** | Block until resolved |

## 13.5 Continuous Improvement

### 13.5.1 Improvement Cycle

1. **Collect** feedback from stakeholders
2. **Analyze** lessons learned
3. **Update** EA framework and artifacts
4. **Communicate** changes to stakeholders

### 13.5.2 KPIs

| KPI | Target |
|-----|--------|
| EA Service Utilization | >80% of eligible projects |
| Compliance Rate | >70% first-time pass |
| Review Turnaround | <5 business days |
| Customer Satisfaction | >4.0/5.0 |

> **Reference:** Complete method guide available in GEATDM-WP5-T58-MethodGuide-Complete-v1.0.md

---

# PART IV: APPENDICES

---

# Appendix A: Glossary

## A.1 Architecture Domain Terms

| Term | Definition |
|------|------------|
| **Application Architecture** | Blueprint for applications, their interactions, and relationships to business processes |
| **Business Architecture** | Description of business strategy, governance, organization, and key processes |
| **Data Architecture** | Structure of logical and physical data assets and data management resources |
| **Technology Architecture** | Logical software and hardware capabilities for business, data, and application services |

## A.2 Organization Type Definitions

| Term | Definition |
|------|------------|
| **PDU** | Policy Development Unit — basic bureaucratic unit for policy analysis and development |
| **RA** | Regulatory Agency — organization for sector regulation through licensing and enforcement |
| **SDA** | Service Delivery Authority — complex authority for high-volume service delivery |
| **PAO-CC** | Public Administration Organization Core Components — standard building blocks for all types |

## A.3 DPI Terms

| Term | Definition |
|------|------------|
| **DPI** | Digital Public Infrastructure — foundational digital systems at national scale |
| **Building Block (BB)** | Separately deployable executable software component per GovStack specifications |
| **Information Mediator BB** | Building Block enabling secure data exchange between systems |
| **Identity BB** | Building Block providing authentication and identity services |

## A.4 Method Terms

| Term | Definition |
|------|------------|
| **Reference Architecture** | Template architecture for an organization type |
| **Target Architecture** | Organization-specific TO-BE architecture |
| **AS-IS Architecture** | Documentation of existing architecture state |
| **Gap Analysis** | Comparison of AS-IS against target to identify differences |

## A.5 Abbreviations

| Abbreviation | Expansion |
|--------------|-----------|
| BDAT | Business, Data, Application, Technology |
| BB | Building Block |
| DPI | Digital Public Infrastructure |
| EA | Enterprise Architecture |
| GEATDM | Generic EA Target Architecture Development Method |
| PAERA | Public Administration Ecosystem Reference Architecture |
| PDU | Policy Development Unit |
| RA | Reference Architecture (or Regulatory Agency, context-dependent) |
| SDA | Service Delivery Authority |
| TOGAF | The Open Group Architecture Framework |

---

# Appendix B: Practitioner Toolkit

## B.1 Tool Index by Phase

| Phase | Tool ID | Tool Name |
|-------|---------|-----------|
| **DISCOVER** | TK-01 | Classification Questionnaire |
| | TK-02 | Classification Decision Tree |
| | TK-03 | DPI Readiness Checklist |
| | TK-04 | DISCOVER Summary Template |
| | TK-05 | Organization Profile Worksheet |
| **ASSESS** | TK-06 | Service Catalog Template |
| | TK-07 | Application Inventory Template |
| | TK-08 | Data Inventory Template |
| | TK-09 | Technology Assessment Template |
| | TK-10 | Gap Analysis Worksheet |
| | TK-11 | ASSESS Summary Template |
| **ADAPT** | TK-12 | TO-BE Architecture Template |
| | TK-13 | Tailoring Decision Log |
| | TK-14 | Capability Adaptation Worksheet |
| | TK-15 | Application Mapping Worksheet |
| **PLAN** | TK-16 | Implementation Roadmap Template |
| | TK-17 | Business Case Template |
| | TK-18 | Phase Definition Template |
| | TK-19 | Risk Register Template |
| | TK-20 | Resource Estimation Template |
| **EXECUTE** | TK-21 | Project EA Engagement Checklist |
| | TK-22 | Architecture Compliance Assessment |
| | TK-23 | Dispensation Request Form |
| | TK-24 | EA Status Report Template |
| | TK-25 | Architecture Review Checklist |

> **Reference:** Complete toolkit available in GEATDM-WP6-T61-Toolkit-v1.0.md

---

# Appendix C: Traceability Matrices

## C.1 Capability Inheritance Matrix

| Capability Domain | PDU | RA | SDA |
|-------------------|:---:|:--:|:---:|
| C1.x Policy Development | ✓ | ✓ | ✓ |
| C2.x Organizational Support | ✓ | ✓ | ✓ |
| C3.x Regulatory | — | ✓ | ✓ |
| C4.x Service Delivery | — | — | ✓ |

## C.2 Application Inheritance Matrix

| Application Zone | PDU | RA | SDA |
|------------------|:---:|:--:|:---:|
| A0.x Channels | ✓ | ✓ | ✓ |
| A1.x Policy Development | ✓ | ✓ | ✓ |
| A2.x Stakeholder Engagement | ✓ | ✓ | ✓ |
| A3.x Knowledge & Collaboration | ✓ | ✓ | ✓ |
| A4.x Support Functions (PAO-CC) | ✓ | ✓ | ✓ |
| A5.x Data & Analytics | ✓ | ✓ | ✓ |
| A6.x Licensing & Permits | — | ✓ | ✓ |
| A7.x Inspection & Audit | — | ✓ | ✓ |
| A8.x Compliance & Enforcement | — | ✓ | ✓ |
| A9.x Public Services | — | ✓ | ✓ |
| A10.x Registration | — | — | ✓ |
| A11.x Filing | — | — | ✓ |
| A12.x Revenue | — | — | ✓ |
| A13.x Channels (Extended) | — | — | ✓ |
| A14.x Risk Intelligence | — | — | ✓ |
| A15.x Case Management | — | — | ✓ |

## C.3 Building Block Mapping Summary

| Building Block | PDU | RA | SDA |
|----------------|:---:|:--:|:---:|
| Identity BB | Mandatory | Mandatory | Mandatory |
| Information Mediator BB | Mandatory | Mandatory | Mandatory |
| Messaging BB | Recommended | Mandatory | Mandatory |
| Digital Registries BB | Recommended | Mandatory | Mandatory |
| Workflow BB | Recommended | Mandatory | Mandatory |
| Registration BB | Optional | Mandatory | Mandatory |
| Payments BB | Not Required | Mandatory | Mandatory |
| Scheduler BB | Optional | Recommended | Mandatory |
| Consent BB | Optional | Recommended | Mandatory |

---

# Appendix D: Quick Start Guides

## D.1 Quick Start for PDU

**Step 1: Confirm Classification (Week 1)**
- Complete TK-01 Classification Questionnaire
- Verify PDU is appropriate type
- Document organization profile

**Step 2: Assess DPI (Week 2)**
- Complete TK-03 DPI Readiness Checklist
- Focus on Identity BB and Information Mediator BB
- Identify critical gaps

**Step 3: Document AS-IS (Weeks 3-4)**
- Inventory current applications
- Map to PDU RA structure
- Identify gaps using TK-10

**Step 4: Create TO-BE (Weeks 5-6)**
- Tailor PDU RA using TK-12
- Prioritize Phase 1 components:
  - Document Management System
  - Collaboration Platform
  - DPI Integration (Identity, IM BBs)

**Step 5: Plan Implementation (Weeks 7-8)**
- Develop 18-month roadmap
- Create business case
- Establish lightweight governance

## D.2 Quick Start for RA

**Step 1-3: Same as PDU** (4 weeks)

**Step 4: Create TO-BE (Weeks 5-7)**
- Start from RA Reference Architecture
- Ensure PDU elements included
- Add regulatory-specific components:
  - Applicant Portal
  - License Management
  - Inspection Management
  - Payments BB integration

**Step 5: Plan Implementation (Weeks 8-10)**
- Develop 24-month roadmap
- Emphasize public-facing services
- Establish standard governance

## D.3 Quick Start for SDA

**Step 1-3: Same as PDU** (6 weeks — more comprehensive)

**Step 4: Create TO-BE (Weeks 7-10)**
- Start from SDA Reference Architecture
- Ensure PDU + RA elements included
- Add service delivery components:
  - Mass Registration
  - Multi-channel Service
  - Revenue/Accounting
  - Risk Intelligence

**Step 5: Plan Implementation (Weeks 11-14)**
- Develop 36-month roadmap
- Phase critical capabilities first
- Establish comprehensive governance
- Plan enterprise-grade infrastructure

---

# Appendix E: Case Studies and Examples

## E.1 Estonia

**Context:** Estonia is a global leader in digital government with comprehensive e-government infrastructure.

**Relevance to GEATDM:**
- X-Road interoperability platform = Information Mediator BB
- e-ID system = Identity BB
- Digital registries across government = Digital Registries BB
- Once-only principle implemented

**Key Lessons:**
1. Strong national DPI enables rapid organizational transformation
2. Interoperability platform critical for G2G integration
3. Digital identity foundation for all services

## E.2 Singapore

**Context:** Singapore's GovTech drives digital transformation across government agencies.

**Relevance to GEATDM:**
- Centralized digital infrastructure
- Government Technology Stack = Building Block approach
- National Digital Identity (SingPass) = Identity BB
- MyInfo platform = Data sharing

**Key Lessons:**
1. Centralized technology organization accelerates standardization
2. Platform approach enables agency-level customization
3. Citizen-centric design drives adoption

## E.3 United Kingdom

**Context:** UK Government Digital Service (GDS) established digital standards and platforms.

**Relevance to GEATDM:**
- GOV.UK platform = Standardized channels
- GOV.UK Verify = Identity BB
- Government as a Platform = Building Block thinking
- Service Standard = Design principles

**Key Lessons:**
1. Design standards ensure consistency
2. Common platforms reduce duplication
3. Agile delivery enables iteration

---

# Appendix F: References and Further Reading

## F.1 GEATDM Document Suite

| Document ID | Title | Purpose |
|-------------|-------|---------|
| GEATDM-WP0-T01 | Master Context | Foundation document |
| GEATDM-WP0-T03 | Key Definitions | Glossary |
| GEATDM-WP1-T11 | EA Metamodel | Architecture metamodel |
| GEATDM-WP1-T12 | EA Principles | Principles template |
| GEATDM-WP1-T13 | EA Governance | Governance framework |
| GEATDM-WP1-T14 | EA Services | Services catalog |
| GEATDM-WP2-T25 | PDU RA Complete | PDU Reference Architecture |
| GEATDM-WP3-T35 | RA RA Complete | RA Reference Architecture |
| GEATDM-WP4-T47 | SDA RA Complete | SDA Reference Architecture |
| GEATDM-WP5-T58 | Method Guide Complete | Application method |
| GEATDM-WP6-T61 | Toolkit | Practitioner tools |

## F.2 External References

| Reference | Description |
|-----------|-------------|
| **PAERA Framework** | Public Administration Ecosystem Reference Architecture (https://paera.govstack.global/) |
| **GovStack** | Building Block specifications and implementation guides |
| **TOGAF 9.2** | The Open Group Architecture Framework |
| **ArchiMate 3.1** | Architecture modeling language |

## F.3 Related Standards

| Standard | Relevance |
|----------|-----------|
| ISO/IEC 42010 | Architecture description |
| COBIT | IT governance |
| ITIL | Service management |
| ISO 27001 | Information security |

---

# DOCUMENT CONTROL

## Quality Checks

- [x] All chapters present
- [x] Consistent formatting throughout
- [x] Cross-references valid
- [x] TOC complete and accurate
- [x] Executive summary reflects content
- [x] No duplicate content
- [x] Consistent terminology
- [x] All figures/diagrams included

## Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | January 2026 | GEATDM Project Team | Initial complete publication |

---

**End of Document**

═══════════════════════════════════════════════════════════════════════════════

*Generic EA Target Architecture Development Method (GEATDM) — Version 1.0*

*© 2026 GEATDM Project. Released under Creative Commons Attribution 4.0 International License.*

═══════════════════════════════════════════════════════════════════════════════

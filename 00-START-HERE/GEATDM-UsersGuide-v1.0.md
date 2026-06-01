# GEATDM USER'S GUIDE

**Your Practical Guide to Digital Transformation Using Reference Architectures**

| Attribute | Value |
|-----------|-------|
| Document ID | GEATDM-UsersGuide-v1.0 |
| Version | 1.0 |
| Date | January 2026 |
| Status | Complete |
| Reading Time | 30-45 minutes |

---

## TABLE OF CONTENTS

1. [Introduction](#1-introduction)
2. [Understanding the Framework](#2-understanding-the-framework)
3. [Getting Started](#3-getting-started)
4. [Phase-by-Phase Guide](#4-phase-by-phase-guide)
5. [Common Scenarios](#5-common-scenarios)
6. [Tools Quick Reference](#6-tools-quick-reference)
7. [Frequently Asked Questions](#7-frequently-asked-questions)
8. [Glossary](#8-glossary)
9. [Appendices](#appendices)

---

# 1. INTRODUCTION

## 1.1 What is GEATDM?

The **Generic EA Target Architecture Development Method (GEATDM)** is a practical framework that helps public sector organizations plan and execute digital transformation. Instead of starting from scratch, you use pre-built **Reference Architectures** as templates and customize them for your organization.

Think of it like building a house: rather than designing every element from zero, you start with a proven floor plan (Reference Architecture) and adapt it to your needs.

**What GEATDM provides:**

- Three ready-to-use Reference Architectures for different organization types
- A five-phase process to apply them
- 31 templates and tools for every step
- Clear guidance on integrating with national Digital Public Infrastructure

## 1.2 Who Should Use This Guide?

This guide is for practitioners who need to:

| Role | How You'll Use GEATDM |
|------|----------------------|
| **Enterprise Architect** | Select and adapt Reference Architectures |
| **Digital Transformation Lead** | Guide your team through the five phases |
| **CIO/CTO** | Understand strategic implications and make decisions |
| **Consultant** | Support government clients with a proven method |
| **Project Manager** | Plan EA initiatives with clear milestones |

**Prerequisites:** Basic familiarity with enterprise architecture concepts. No prior GEATDM knowledge required.

## 1.3 How This Guide Is Organized

| Section | What You'll Learn | Time |
|---------|-------------------|------|
| **Section 2** | The three organization types and five phases | 5 min |
| **Section 3** | How to set up and start your project | 5 min |
| **Section 4** | Step-by-step guide for each phase | 15 min |
| **Section 5** | Real-world scenarios and solutions | 5 min |
| **Section 6** | Quick reference for all 31 tools | 3 min |
| **Section 7** | Answers to common questions | 5 min |

## 1.4 Quick Start: Your First 30 Minutes

**Can't read the whole guide right now?** Here's how to get started immediately:

```
QUICK START CHECKLIST
═════════════════════════════════════════════════════════════════

Step 1: Read Section 2 (5 minutes)
        Understand the three organization types and pick yours
        
Step 2: Answer these three questions:
        □ What is your organization's PRIMARY function?
          - Policy development → PDU
          - Sector regulation → RA  
          - High-volume service delivery → SDA
          
        □ Does your country have national digital ID?
          □ Yes → You can leverage Identity BB
          □ No → Plan for interim solution
          
        □ What's your implementation timeline?
          □ <12 months → Start with PDU scope
          □ 12-24 months → Standard approach
          □ 24-36 months → Full enterprise transformation

Step 3: Jump to Section 4.1 (DISCOVER Phase)
        Complete the Classification Questionnaire (TK-01)

Step 4: Review the GEATDM Toolkit (separate document)
        Find your templates by phase

═════════════════════════════════════════════════════════════════
```

---

# 2. UNDERSTANDING THE FRAMEWORK

## 2.1 The Three Organization Types

GEATDM classifies public sector organizations into three types. **Your first task is identifying which type you are.**

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                    ORGANIZATION TYPE PYRAMID                               ║
╠═══════════════════════════════════════════════════════════════════════════╣
║                                                                            ║
║         ┌─────────────────────────────────────────────────────────┐       ║
║         │              SERVICE DELIVERY AUTHORITY (SDA)           │       ║
║         │                                                         │       ║
║         │    Tax • Customs • Social Security • Police • Treasury  │       ║
║         │    High-volume transactions • Multi-channel service     │       ║
║         │                                                         │       ║
║         │    ┌─────────────────────────────────────────────┐     │       ║
║         │    │         REGULATORY AGENCY (RA)              │     │       ║
║         │    │                                             │     │       ║
║         │    │   Licensing • Data Protection • Business    │     │       ║
║         │    │   Registration • Professional Boards        │     │       ║
║         │    │                                             │     │       ║
║         │    │    ┌─────────────────────────────────┐     │     │       ║
║         │    │    │  POLICY DEVELOPMENT UNIT (PDU)  │     │     │       ║
║         │    │    │                                 │     │     │       ║
║         │    │    │  Ministries • Chancelleries •   │     │     │       ║
║         │    │    │  Policy Departments • Planning  │     │     │       ║
║         │    │    └─────────────────────────────────┘     │     │       ║
║         │    └─────────────────────────────────────────────┘     │       ║
║         └─────────────────────────────────────────────────────────┘       ║
║                                                                            ║
║    KEY INSIGHT: Each level INCLUDES everything from the level below       ║
║                 SDA = RA capabilities + PDU capabilities + SDA-specific   ║
║                                                                            ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Quick Comparison

| Characteristic | PDU | RA | SDA |
|---------------|-----|-----|-----|
| **Primary Function** | Policy & legislation | Sector regulation | Mass service delivery |
| **Customer Volume** | Low (consultation) | Moderate (thousands) | High (millions) |
| **Transaction Type** | Documents | Applications/permits | Filings/payments |
| **IT Complexity** | Office automation | Case management | Enterprise platforms |
| **Typical Staff** | <500 | 100-500 | >500 |
| **Timeline** | 9-12 months | 12-18 months | 18-36 months |

### How to Identify Your Type

Answer this one question first:

**"What does your organization primarily DO?"**

- **Develop policies and legislation** → You're likely a **PDU**
- **Issue licenses/permits and enforce regulations** → You're likely an **RA**
- **Deliver services to millions with payment/accounting** → You're likely an **SDA**

*Section 4.1 provides a detailed questionnaire for borderline cases.*

## 2.2 The Five Phases

GEATDM follows a five-phase process. You complete them in order, but can revisit earlier phases as you learn more.

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                         THE FIVE PHASES                                    ║
╠═══════════════════════════════════════════════════════════════════════════╣
║                                                                            ║
║   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌────────┐ ║
║   │ DISCOVER │──►│  ASSESS  │──►│  ADAPT   │──►│   PLAN   │──►│EXECUTE │ ║
║   └──────────┘   └──────────┘   └──────────┘   └──────────┘   └────────┘ ║
║                                                                            ║
║   Classify &     Document       Tailor RA      Develop        Implement   ║
║   Select RA      AS-IS &        to Your        Roadmap &      & Govern    ║
║                  Find Gaps      Context        Business Case               ║
║                                                                            ║
║   2-4 weeks      4-8 weeks      4-6 weeks      4-6 weeks      Ongoing     ║
║                                                                            ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Phase Summary Table

| Phase | Your Goal | Key Decision | Main Tools |
|-------|-----------|--------------|------------|
| **DISCOVER** | Know which Reference Architecture to use | Organization type (PDU/RA/SDA) | TK-01, TK-02, TK-03 |
| **ASSESS** | Understand your current state and gaps | Gap priorities | TK-06 to TK-11 |
| **ADAPT** | Create your tailored target architecture | Customization scope | TK-12 to TK-15 |
| **PLAN** | Build your implementation roadmap | Phasing approach | TK-16 to TK-20 |
| **EXECUTE** | Implement and maintain compliance | Project governance | TK-21 to TK-25 |

## 2.3 Key Principle: Inheritance

This is the most important concept in GEATDM:

> **Reference Architectures inherit from each other: PDU ⊂ RA ⊂ SDA**

What this means for you:

- If you're an **SDA**, your Reference Architecture automatically includes everything from PDU and RA
- If you're an **RA**, you inherit all PDU capabilities plus regulatory-specific additions
- You don't need to design PDU/RA elements separately—they're already in your template

**Practical benefit:** An SDA doesn't design policy management from scratch. It's already in the SDA Reference Architecture, inherited from PDU.

## 2.4 Key Principle: DPI Integration

**Digital Public Infrastructure (DPI)** refers to national-level shared digital platforms:

- National digital identity system
- Government data exchange platform  
- National payment gateway
- Shared registries

**Critical understanding:**

> You **integrate with** DPI. You don't **build** DPI.

Your organization uses these national services. The DISCOVER phase includes a DPI Readiness Assessment (TK-03) to check what's available in your country.

| DPI Component | What It Provides | Your Role |
|---------------|------------------|-----------|
| Identity BB | Citizen/business authentication | Connect your systems |
| Information Mediator BB | Secure data exchange | Use it to share data |
| Payments BB | Payment processing | Integrate for fees/revenue |
| Digital Registries BB | National data sources | Query for authoritative data |

---

# 3. GETTING STARTED

## 3.1 Prerequisites Checklist

Before starting your GEATDM initiative, ensure you have:

```
PREREQUISITES CHECKLIST
═════════════════════════════════════════════════════════════════

GOVERNANCE & SPONSORSHIP
☐ Executive sponsor identified (CIO, Deputy Director, or equivalent)
☐ Mandate or terms of reference for the initiative
☐ Initial budget approved or secured

TEAM
☐ Project lead assigned
☐ Core team identified (minimum 3-4 people)
☐ Business stakeholders committed to participate

SCOPE
☐ Organization boundaries defined (what's in scope, what's not)
☐ Initial timeline agreed (12-36 months typical)
☐ Success criteria outlined

ACCESS & RESOURCES
☐ Access to organization documentation
☐ Access to IT application inventory
☐ Time allocation for team members (min 30% for core team)

TOOLS
☐ Downloaded GEATDM Toolkit (GEATDM-WP6-T61-Toolkit-v1.0.md)
☐ Access to full Reference Architecture documents
☐ Document collaboration space (SharePoint, Google Drive, etc.)

═════════════════════════════════════════════════════════════════
```

## 3.2 Assembling Your Team

### Minimum Team Composition

| Role | Responsibility | Time Commitment |
|------|---------------|-----------------|
| **Project Lead** | Overall coordination, stakeholder management | 50%+ |
| **Enterprise Architect** | Technical architecture, RA adaptation | 50%+ |
| **Business Analyst** | AS-IS documentation, gap analysis | 50%+ |
| **Executive Sponsor** | Decision-making, remove blockers | 10% |

### Recommended Additions (for larger initiatives)

| Role | When Needed |
|------|-------------|
| **Data Architect** | SDA organizations with complex data requirements |
| **Solution Architect** | When solution design runs parallel to EA work |
| **Change Manager** | Large organizations (>200 staff) |
| **Domain Expert** | Specific business areas (tax, customs, etc.) |

## 3.3 Setting Up Your Project

### Step 1: Create Your Project Structure

```
your-ea-project/
├── 01-DISCOVER/
│   ├── classification-questionnaire.xlsx
│   ├── dpi-readiness-assessment.xlsx
│   └── discover-summary.docx
├── 02-ASSESS/
│   ├── as-is/
│   │   ├── service-catalog.xlsx
│   │   ├── application-inventory.xlsx
│   │   ├── data-inventory.xlsx
│   │   └── technology-assessment.xlsx
│   └── gap-analysis.xlsx
├── 03-ADAPT/
│   ├── to-be-architecture.docx
│   └── tailoring-decision-log.xlsx
├── 04-PLAN/
│   ├── roadmap.pptx
│   ├── business-case.docx
│   └── risk-register.xlsx
├── 05-EXECUTE/
│   ├── governance-charter.docx
│   └── status-reports/
└── references/
    ├── GEATDM-main-document.pdf
    ├── GEATDM-toolkit.xlsx
    └── reference-architecture-[PDU|RA|SDA].pdf
```

### Step 2: Kick-off Meeting Agenda

Hold a 2-hour kick-off meeting with your team and sponsor:

| Time | Topic | Outcome |
|------|-------|---------|
| 0:00-0:15 | Sponsor opening | Mandate confirmed |
| 0:15-0:45 | GEATDM overview | Team understands approach |
| 0:45-1:15 | Scope & boundaries | Clear scope statement |
| 1:15-1:30 | Team roles | Everyone knows their role |
| 1:30-1:50 | Timeline & milestones | Agreed schedule |
| 1:50-2:00 | Next steps | Week 1 actions assigned |

## 3.4 Choosing Your Starting Point

Most organizations start with the full DISCOVER phase. However, some scenarios allow shortcuts:

| If... | Then... |
|-------|---------|
| You already know you're a ministry with no regulatory or service functions | Start with PDU Reference Architecture directly, use DISCOVER for DPI assessment only |
| You're part of a government-wide EA program with central classification | Validate the pre-assigned classification, then proceed to ASSESS |
| You're doing a quick architecture review (not full transformation) | Focus on gap analysis only, skip roadmap development |

**When in doubt:** Start with DISCOVER. It takes only 2-4 weeks and prevents costly misclassification.

---

# 4. PHASE-BY-PHASE GUIDE

## 4.1 DISCOVER Phase

### Goal
Classify your organization and select the appropriate Reference Architecture.

### Duration
2-4 weeks

### What You'll Produce

| Deliverable | Description |
|-------------|-------------|
| **Organization Profile** | Documented classification with rationale |
| **DPI Readiness Assessment** | Analysis of national DPI availability |
| **RA Selection Report** | Confirmed Reference Architecture selection |

### Key Activities

**Activity 1: Classify Your Organization (Week 1)**

Use the Classification Decision Tree (TK-02) for a quick assessment:

```
CLASSIFICATION DECISION TREE
═════════════════════════════════════════════════════════════════

START
  │
  ▼
┌─────────────────────────────────────────────────────────────────┐
│  Q1: Is your PRIMARY function developing policies/legislation?  │
│                                                                 │
│      YES ──────────────────────────────────────────► Q2         │
│      NO ───────────────────────────────────────────► Q3         │
└─────────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│  Q2: Do you ALSO regulate a sector through licensing?           │
│                                                                 │
│      YES ──────────────────────────────────────────► Q3         │
│      NO ───────────────────────────────────────────► PDU ✓      │
└─────────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│  Q3: Do you process >100,000 transactions/year with citizens?   │
│                                                                 │
│      YES ──────────────────────────────────────────► Q4         │
│      NO ───────────────────────────────────────────► RA ✓       │
└─────────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│  Q4: Do you have AT LEAST THREE of these?                       │
│      ☐ Manage ongoing customer accounts                         │
│      ☐ Collect revenue at scale (not just application fees)     │
│      ☐ Conduct mass enforcement operations                      │
│      ☐ Use risk-based selection for audits                      │
│      ☐ Process refunds or credits                               │
│      ☐ Have data warehouse with analytics                       │
│                                                                 │
│      YES (3+ checked) ─────────────────────────────► SDA ✓      │
│      NO (<3 checked) ──────────────────────────────► RA ✓       │
└─────────────────────────────────────────────────────────────────┘

═════════════════════════════════════════════════════════════════
```

For borderline cases, complete the full Classification Questionnaire (TK-01) with 30 scored questions.

**Activity 2: Assess DPI Readiness (Week 2)**

Use the DPI Readiness Checklist (TK-03) to assess what national infrastructure is available:

| DPI Component | Critical Questions | Impact if Missing |
|---------------|-------------------|-------------------|
| **Identity BB** | Is there a national eID system? Can you authenticate citizens electronically? | Must build interim authentication solution |
| **Information Mediator BB** | Is there a government data exchange platform? | Must build point-to-point integrations |
| **Payments BB** | Is there a government payment gateway? | Must integrate with banks directly |
| **Digital Registries BB** | Can you access authoritative data (population, business)? | Must accept paper documents |

**Activity 3: Select Reference Architecture (Week 2)**

Based on your classification:

| Classification | Select This RA | Platform Tier |
|---------------|----------------|---------------|
| PDU | PDU Reference Architecture | Basic |
| RA | RA Reference Architecture | Standard |
| SDA | SDA Reference Architecture | Enterprise |

### Decision Point: Organization Classification

Document your classification decision:

```
CLASSIFICATION DECISION RECORD
═════════════════════════════════════════════════════════════════

Organization: ____________________________________________

Classification Result: ☐ PDU   ☐ RA   ☐ SDA

Confidence Level: ☐ High   ☐ Medium   ☐ Low

Key Factors:
1. ________________________________________________
2. ________________________________________________
3. ________________________________________________

Selected Reference Architecture: ____________________________

DPI Gaps Identified:
☐ Identity BB not available → Mitigation: ________________
☐ Interoperability platform not available → Mitigation: ____
☐ Payments BB not available → Mitigation: ________________
☐ Other: ________________________________________________

Approved By: _________________  Date: ____________________

═════════════════════════════════════════════════════════════════
```

### Common Pitfalls

| Pitfall | How to Avoid |
|---------|--------------|
| **Over-classifying** (choosing SDA when RA is appropriate) | Focus on current state, not aspirations |
| **Ignoring DPI gaps** | Complete TK-03 before selecting RA |
| **Skipping stakeholder validation** | Present classification to leadership before proceeding |

### Checklist: DISCOVER Complete?

```
☐ Classification questionnaire completed
☐ DPI readiness assessment completed
☐ Organization type confirmed with sponsor
☐ Reference Architecture selected
☐ DPI gap mitigation plans documented
☐ DISCOVER Summary Template (TK-04) completed
```

---

## 4.2 ASSESS Phase

### Goal
Document your current state (AS-IS) and identify gaps against the Reference Architecture.

### Duration
4-8 weeks

### What You'll Produce

| Deliverable | Description |
|-------------|-------------|
| **AS-IS Architecture** | Documentation of current services, applications, data, technology |
| **Gap Analysis** | Prioritized list of gaps against Reference Architecture |
| **Readiness Assessment** | Evaluation of organizational readiness for transformation |

### Key Activities

**Activity 1: Document Current Services (Weeks 1-2)**

Use TK-06 (Service Catalog Template) to inventory your services:

| Service Name | Description | Customers | Channel | Volume |
|--------------|-------------|-----------|---------|--------|
| *Example: Business Registration* | *Register new businesses* | *Entrepreneurs* | *Online + Office* | *5,000/year* |

**Activity 2: Inventory Applications (Weeks 2-3)**

Use TK-07 (Application Inventory Template):

| Application | Purpose | Technology | Age | Status | Criticality |
|------------|---------|------------|-----|--------|-------------|
| *Example: Legacy CRM* | *Customer tracking* | *Oracle Forms* | *15 years* | *End of life* | *High* |

**Activity 3: Map to Reference Architecture (Weeks 3-4)**

Compare your inventory against the Reference Architecture capability map:

| RA Capability | AS-IS Status | Gap? |
|---------------|--------------|------|
| C1.1 Policy Analysis and Research | Document management only | Yes - no analytics |
| C1.2 Policy Formulation | Excel-based | Yes - no workflow |
| C2.1 Human Resource Management | HR system in place | No |

**Activity 4: Prioritize Gaps (Week 4-5)**

For each gap, assign priority:

| Priority | Criteria | Typical Treatment |
|----------|----------|-------------------|
| **Must-Have** | Critical for operations, legally required, or high risk | Phase 1 |
| **Should-Have** | Important for efficiency, customer experience | Phase 2-3 |
| **Nice-to-Have** | Enhances operations but not critical | Future phases |
| **Not Needed** | Context-specific exclusion | Out of scope |

### Tools for ASSESS Phase

| Tool ID | Tool Name | Purpose |
|---------|-----------|---------|
| TK-06 | Service Catalog Template | Document services |
| TK-07 | Application Inventory Template | Inventory applications |
| TK-08 | Data Inventory Template | Catalog data assets |
| TK-09 | Technology Assessment Template | Document infrastructure |
| TK-10 | Gap Analysis Worksheet | Systematic gap identification |
| TK-11 | ASSESS Summary Template | Consolidate findings |

### Decision Point: Gap Priorities

Document priority decisions for key gaps:

```
GAP PRIORITY DECISION
═════════════════════════════════════════════════════════════════

Gap ID: GAP-001
Description: No integrated document management system
RA Capability: C2.4 Information and Knowledge Management

Impact Assessment:
- Operational impact: High (manual document handling)
- Customer impact: Medium (slow responses)
- Risk: High (version control issues)

Priority: ☐ Must-Have   ☐ Should-Have   ☐ Nice-to-Have

Rationale: ________________________________________________

Approved By: _________________  Date: ____________________

═════════════════════════════════════════════════════════════════
```

### Common Pitfalls

| Pitfall | How to Avoid |
|---------|--------------|
| **Boiling the ocean** (documenting everything in extreme detail) | Focus on capabilities in the RA, not every process |
| **Analysis paralysis** | Set a hard deadline; 80% documentation is good enough |
| **Ignoring technical debt** | Include legacy system risks in gap analysis |
| **Business-only view** | Include IT and business stakeholders in assessment |

### Checklist: ASSESS Complete?

```
☐ Service catalog documented
☐ Application inventory complete
☐ Data inventory complete
☐ Technology baseline documented
☐ Gaps identified and documented
☐ Gaps prioritized (Must/Should/Nice)
☐ Readiness assessment completed
☐ ASSESS Summary Template (TK-11) completed
☐ Gap analysis reviewed by stakeholders
```

---

## 4.3 ADAPT Phase

### Goal
Tailor the Reference Architecture to create your organization-specific target architecture.

### Duration
4-6 weeks

### What You'll Produce

| Deliverable | Description |
|-------------|-------------|
| **Target Architecture Document** | Your customized TO-BE architecture |
| **Tailoring Decision Log** | Record of all customization decisions |
| **Building Block Priorities** | Prioritized list of Building Blocks to implement |

### Key Activities

**Activity 1: Review Reference Architecture (Week 1)**

Study your selected Reference Architecture document:
- PDU: `GEATDM-WP2-T25-PDU-RA-Complete-v1.0.md`
- RA: `GEATDM-WP3-T35-RA-RA-Complete-v1.0.md`
- SDA: `GEATDM-WP4-T47-SDA-RA-Complete-v1.0.md`

**Activity 2: Make Tailoring Decisions (Weeks 2-3)**

For each Reference Architecture element, decide:

| Decision Type | When to Use | Example |
|---------------|-------------|---------|
| **Include as-is** | Element matches your needs exactly | Standard HR management |
| **Include with naming** | Element needed but local terminology differs | "Service Catalogue" → "Service Registry" |
| **Include with extension** | Element needed plus additional requirements | Standard + sector-specific functions |
| **Exclude** | Element not relevant to your context | Maritime functions for landlocked country |
| **Defer** | Element needed but not for initial phases | Advanced analytics in Phase 3 |

**Activity 3: Create TO-BE Architecture Views (Weeks 3-5)**

Create these views using TK-12 (TO-BE Architecture Template):

| View | Content | Audience |
|------|---------|----------|
| **Capability View** | Target capability map with maturity targets | Business leaders |
| **Application View** | Target application landscape diagram | IT leaders |
| **Data View** | Target data architecture | Data management |
| **Integration View** | DPI and internal integration map | Technical teams |

**Activity 4: Prioritize Building Blocks (Week 5-6)**

List Building Blocks by implementation priority:

| Priority | Building Block | Phase | Rationale |
|----------|---------------|-------|-----------|
| 1 | Identity BB Integration | 1 | Foundation for all digital services |
| 2 | Document Management | 1 | Immediate productivity gains |
| 3 | Workflow BB | 1 | Automate core processes |
| 4 | Digital Registry | 2 | Dependent on Identity BB |

### RA Integrity Rules

**DO maintain:**
- ☑ Capability hierarchy structure (don't flatten levels)
- ☑ Inheritance chain (include all parent RA elements)
- ☑ Mandatory DPI integrations
- ☑ Building Block alignment
- ☑ Traceability documentation

**DON'T:**
- ☒ Remove mandatory components
- ☒ Break the inheritance hierarchy
- ☒ Ignore BB specifications
- ☒ Skip tailoring documentation

### Decision Point: Adaptation Scope

```
ADAPTATION SCOPE DECISION
═════════════════════════════════════════════════════════════════

Selected Approach:

☐ MINIMAL (Conservative)
  - Keep RA as-is with only essential naming changes
  - Suitable for: First EA initiative, limited resources
  - Risk: May not address all local requirements

☐ MODERATE (Balanced)
  - Standard tailoring with extensions where needed
  - Suitable for: Most organizations
  - Risk: Balanced

☐ EXTENSIVE (Comprehensive)
  - Significant customization for local context
  - Suitable for: Complex organizations with unique requirements
  - Risk: May lose RA benefits if overdone

Rationale: ________________________________________________

Approved By: _________________  Date: ____________________

═════════════════════════════════════════════════════════════════
```

### Common Pitfalls

| Pitfall | How to Avoid |
|---------|--------------|
| **Over-customizing** (losing RA benefits) | Document every deviation; require approval for each |
| **Under-customizing** (doesn't fit organization) | Involve business stakeholders in tailoring decisions |
| **Ignoring inheritance** | Always include all elements from parent RAs |
| **Forgetting DPI constraints** | Reference DPI assessment from DISCOVER |

### Checklist: ADAPT Complete?

```
☐ Reference Architecture fully reviewed
☐ Tailoring decisions documented for all elements
☐ Capability map customized
☐ Application architecture adapted
☐ Data architecture adapted
☐ DPI integration points specified
☐ Building Block priorities established
☐ TO-BE Architecture document created
☐ Tailoring Decision Log (TK-13) completed
☐ Target architecture reviewed by stakeholders
```

---

## 4.4 PLAN Phase

### Goal
Develop your implementation roadmap and build the business case.

### Duration
4-6 weeks

### What You'll Produce

| Deliverable | Description |
|-------------|-------------|
| **Implementation Roadmap** | Multi-year plan with phases, projects, milestones |
| **Business Case** | Investment justification with costs and benefits |
| **Governance Charter** | EA governance structure and processes |
| **Risk Register** | Documented risks with mitigation strategies |

### Key Activities

**Activity 1: Define Implementation Phases (Weeks 1-2)**

Organize your transformation into phases:

| Phase | Typical Focus | Duration |
|-------|--------------|----------|
| **Phase 1: Foundation** | DPI integration, core infrastructure, quick wins | 6-12 months |
| **Phase 2: Core Capabilities** | Primary business capabilities, main applications | 12-18 months |
| **Phase 3: Enhancement** | Advanced capabilities, optimization | 12-18 months |
| **Phase 4: Optimization** | Analytics, AI, continuous improvement | Ongoing |

**Typical Roadmap by Organization Type:**

```
PDU ROADMAP (18 months)
═════════════════════════════════════════════════════════════════
Phase 1 (M1-6): DMS, Identity BB, Collaboration Platform
Phase 2 (M7-14): Policy Management, Stakeholder Engagement
Phase 3 (M15-18): Analytics, Knowledge Management
═════════════════════════════════════════════════════════════════

RA ROADMAP (24 months)
═════════════════════════════════════════════════════════════════
Phase 1 (M1-8): PDU foundation + Identity/Payments BB
Phase 2 (M9-16): License Management, Inspection, Compliance
Phase 3 (M17-24): Public Registry, Advanced Analytics
═════════════════════════════════════════════════════════════════

SDA ROADMAP (36 months)
═════════════════════════════════════════════════════════════════
Phase 1 (M1-12): Core infrastructure, DPI integration, Registration
Phase 2 (M13-24): Filing, Payments, Multi-channel service
Phase 3 (M25-30): Risk Intelligence, Analytics
Phase 4 (M31-36): AI/ML, Optimization
═════════════════════════════════════════════════════════════════
```

**Activity 2: Create Business Case (Weeks 2-4)**

Use TK-17 (Business Case Template):

| Section | Content |
|---------|---------|
| **Executive Summary** | One-page investment overview |
| **Strategic Context** | Alignment with government priorities |
| **Problem Statement** | Current challenges with quantified impact |
| **Solution Overview** | Proposed architecture and approach |
| **Benefits** | Quantified outcomes (cost savings, efficiency, service quality) |
| **Costs** | Capital and operational investment by year |
| **Risks** | Key risks with mitigation |
| **Timeline** | Implementation schedule |
| **Recommendation** | Clear ask with approval request |

**Activity 3: Establish Governance (Weeks 4-5)**

Define governance scaled to your organization:

| Organization Type | Governance Level | Key Bodies |
|-------------------|-----------------|------------|
| **PDU** | Lightweight | Sponsor + Project Team |
| **RA** | Standard | Architecture Board + Change Control |
| **SDA** | Comprehensive | Full EA Office + Steering Committee |

**Activity 4: Document Risks (Week 5-6)**

Use TK-19 (Risk Register Template):

| Risk ID | Risk Description | Probability | Impact | Mitigation |
|---------|------------------|-------------|--------|------------|
| R001 | DPI not ready on time | Medium | High | Develop interim solution |
| R002 | Change resistance | High | Medium | Change management program |
| R003 | Budget cuts | Medium | High | Phased approach with clear quick wins |

### Decision Point: Implementation Approach

```
IMPLEMENTATION APPROACH DECISION
═════════════════════════════════════════════════════════════════

Selected Approach:

☐ BIG BANG
  - Full implementation at once
  - When to use: Small scope, urgent deadline
  - Risk: High (all-or-nothing)

☐ PHASED (Recommended)
  - Sequential stages with defined scope each
  - When to use: Most situations
  - Risk: Medium (manageable increments)

☐ INCREMENTAL
  - Continuous small releases
  - When to use: Agile environments, stable funding
  - Risk: Low per release, requires sustained commitment

Rationale: ________________________________________________

Phase 1 Scope: ___________________________________________

Phase 1 Budget: __________________________________________

Approved By: _________________  Date: ____________________

═════════════════════════════════════════════════════════════════
```

### Common Pitfalls

| Pitfall | How to Avoid |
|---------|--------------|
| **Unrealistic timeline** | Use typical durations as baseline; add contingency |
| **Underestimating costs** | Include change management, training, contingency (20-30%) |
| **Ignoring dependencies** | Map DPI and BB dependencies explicitly |
| **Weak business case** | Quantify benefits; include efficiency metrics |

### Checklist: PLAN Complete?

```
☐ Implementation phases defined
☐ Projects identified per phase
☐ Dependencies mapped
☐ Timeline realistic (reviewed by implementation team)
☐ Business case developed
☐ Cost estimates validated
☐ Benefits quantified
☐ Risk register populated
☐ Governance charter drafted
☐ Roadmap approved by sponsor
```

---

## 4.5 EXECUTE & GOVERN Phase

### Goal
Implement the target architecture and maintain ongoing governance.

### Duration
Ongoing (per roadmap)

### What You'll Produce

| Deliverable | Description |
|-------------|-------------|
| **Implemented Projects** | Systems deployed per roadmap |
| **Compliance Reports** | Regular architecture compliance assessments |
| **Architecture Updates** | Maintained target architecture documentation |
| **Lessons Learned** | Captured experience for continuous improvement |

### Key Activities

**Activity 1: Establish EA Engagement Model**

Define touchpoints where EA engages with projects:

| Stage | EA Activity | Deliverable |
|-------|-------------|-------------|
| **Idea** | Review against roadmap | Alignment recommendation |
| **Initiative** | Verify strategic fit | Budget endorsement |
| **Project Start** | Provide architecture requirements | Architecture brief |
| **Design** | Review solution design | Design approval |
| **Build** | Consultation as needed | Design guidance |
| **Test** | Compliance verification | Compliance sign-off |
| **Deploy** | Update architecture repository | Updated documentation |

**Activity 2: Monitor Compliance**

Use TK-22 (Architecture Compliance Assessment) for each project:

| Assessment Result | Action |
|-------------------|--------|
| **Compliant** | Approve; proceed |
| **Minor deviation** | Approve with conditions; document |
| **Major deviation** | Require dispensation (TK-23) |
| **Critical deviation** | Block until resolved |

**Activity 3: Manage Dispensations**

When a project cannot comply with target architecture:

1. Project submits Dispensation Request (TK-23)
2. EA Office reviews impact
3. Architecture Board decides: approve, conditionally approve, or reject
4. If approved: document with expiration date and remediation plan

**Activity 4: Continuous Improvement**

Quarterly review cycle:

| Activity | Frequency | Outcome |
|----------|-----------|---------|
| Project compliance review | Monthly | Updated compliance status |
| Architecture update | Quarterly | Refreshed target architecture |
| Lessons learned capture | Per project | Improvement backlog |
| KPI review | Quarterly | Performance report |

### Governance KPIs

| KPI | Target | How to Measure |
|-----|--------|---------------|
| EA Service Utilization | >80% of eligible projects | Count of projects using EA services |
| Compliance Rate | >70% first-time pass | Compliance assessments |
| Review Turnaround | <5 business days | Request-to-response time |
| Customer Satisfaction | >4.0/5.0 | Project manager surveys |

### Common Pitfalls

| Pitfall | How to Avoid |
|---------|--------------|
| **Governance becomes a bottleneck** | Set SLAs; provide self-service guidance |
| **Architecture becomes stale** | Quarterly updates; trigger-based reviews |
| **Projects circumvent EA** | Mandate EA engagement at budget approval |
| **No enforcement** | Link compliance to project sign-off |

### Checklist: Governance Established?

```
☐ EA engagement model documented
☐ Compliance assessment process defined
☐ Dispensation process established
☐ Architecture repository set up
☐ Reporting cadence established
☐ KPIs defined and measurable
☐ First compliance assessment completed
☐ Continuous improvement process in place
```

---

# 5. COMMON SCENARIOS

## Scenario A: Ministry Starting Digital Transformation

**Situation:** Ministry of Trade (400 staff) wants to modernize operations. Currently uses paper-based processes with basic office systems.

**Classification:** PDU (policy development, no regulatory or service delivery functions)

**Approach:**
1. DISCOVER (2 weeks): Confirm PDU classification; assess DPI readiness
2. ASSESS (4 weeks): Document services; focus on document management gaps
3. ADAPT (3 weeks): Minimal tailoring; use PDU RA almost as-is
4. PLAN (3 weeks): 12-month roadmap; focus on quick wins

**Key Recommendations:**
- Start with Document Management System (immediate productivity gain)
- Integrate with national Identity BB for staff authentication
- Implement collaboration platform early
- Defer analytics to Phase 2

**Timeline:** 12-18 months to baseline digital maturity

---

## Scenario B: Regulatory Agency Modernizing Services

**Situation:** Data Protection Authority (150 staff) needs online registration and complaint handling. Currently processes 5,000 registrations/year manually.

**Classification:** RA (regulatory oversight function with moderate transaction volume)

**Approach:**
1. DISCOVER (3 weeks): Confirm RA; critically assess Payments BB availability
2. ASSESS (6 weeks): Focus on registration process and compliance workflows
3. ADAPT (4 weeks): Customize RA for data protection domain
4. PLAN (4 weeks): 18-month roadmap with public portal as centerpiece

**Key Recommendations:**
- Prioritize online registration portal (high citizen impact)
- Integrate Payments BB for registration fees
- Implement compliance case management system
- Design for self-service complaint submission

**Timeline:** 18-24 months to full digital service delivery

---

## Scenario C: Tax Authority Enterprise Architecture

**Situation:** National Tax Authority (2,500 staff) managing 2 million taxpayers needs enterprise architecture to guide system replacement.

**Classification:** SDA (high-volume service delivery with revenue management)

**Approach:**
1. DISCOVER (4 weeks): Confirm SDA; comprehensive DPI assessment
2. ASSESS (8 weeks): Full enterprise inventory; legacy system risk assessment
3. ADAPT (6 weeks): Extensive tailoring for tax domain specifics
4. PLAN (6 weeks): 36-month roadmap with phased legacy replacement

**Key Recommendations:**
- Start with customer account integration (single view of taxpayer)
- Prioritize Identity BB for authentication (foundation for all digital services)
- Plan phased legacy replacement (don't try big bang)
- Invest in risk intelligence and analytics in later phases

**Timeline:** 36-48 months to enterprise transformation

---

## Scenario D: Hybrid Organization

**Situation:** Business Registration Office (200 staff) both sets policy for business registration and processes 30,000 registrations/year.

**Classification:** Hybrid (RA-primary with some PDU characteristics)

**Resolution Approach:**
1. Complete classification questionnaire (TK-01)
2. Identify primary function: regulatory (processes registrations)
3. Score: RA scores highest
4. Decision: Use RA Reference Architecture
5. Note: Include strong document management (from PDU) for policy function

**Key Recommendations:**
- Use RA as base architecture
- Ensure PDU policy capabilities are well-covered (inherited in RA)
- Don't over-engineer to SDA level (transaction volume doesn't justify)
- Focus on registration workflow and public registry portal

---

## Scenario E: DPI Not Available

**Situation:** Country lacks operational national digital identity system. Ministry wants to proceed with digital transformation.

**Assessment Finding:** Identity BB not available (critical gap)

**Resolution Approach:**
1. Document the gap in DISCOVER phase
2. Develop interim solution specification:
   - Username/password authentication for staff
   - Organization-issued credentials for external users
   - Design for future National ID integration
3. Include in architecture: "Identity BB Integration Point" (placeholder)
4. Add to risk register with mitigation
5. Monitor national DPI progress; plan migration when available

**Key Recommendations:**
- Don't wait for DPI—proceed with interim solutions
- Design applications with authentication abstraction layer
- Maintain integration specifications for future connection
- Engage with national digital agency on DPI roadmap

---

# 6. TOOLS QUICK REFERENCE

## 6.1 Tool Index by Phase

| Phase | Tool ID | Tool Name | Purpose |
|-------|---------|-----------|---------|
| **DISCOVER** | TK-01 | Classification Questionnaire | Score-based org classification |
| | TK-02 | Classification Decision Tree | Visual quick classification |
| | TK-03 | DPI Readiness Checklist | Assess national DPI availability |
| | TK-04 | DISCOVER Summary Template | Document phase outputs |
| | TK-05 | Organization Profile Worksheet | Capture org context |
| **ASSESS** | TK-06 | Service Catalog Template | Document current services |
| | TK-07 | Application Inventory Template | Inventory all applications |
| | TK-08 | Data Inventory Template | Catalog data assets |
| | TK-09 | Technology Assessment Template | Document infrastructure |
| | TK-10 | Gap Analysis Worksheet | Systematic gap identification |
| | TK-11 | ASSESS Summary Template | Consolidate findings |
| **ADAPT** | TK-12 | TO-BE Architecture Template | Document target state |
| | TK-13 | Tailoring Decision Log | Record customization decisions |
| | TK-14 | Capability Adaptation Worksheet | Tailor capability map |
| | TK-15 | Application Mapping Worksheet | Map RA to AS-IS |
| **PLAN** | TK-16 | Implementation Roadmap Template | Visual multi-year plan |
| | TK-17 | Business Case Template | Investment justification |
| | TK-18 | Phase Definition Template | Define implementation phases |
| | TK-19 | Risk Register Template | Document and track risks |
| | TK-20 | Resource Estimation Template | Plan resources and budget |
| **EXECUTE** | TK-21 | Project EA Engagement Checklist | Track EA touchpoints |
| | TK-22 | Architecture Compliance Assessment | Verify solution compliance |
| | TK-23 | Dispensation Request Form | Request architecture exceptions |
| | TK-24 | EA Status Report Template | Report EA progress |
| | TK-25 | Architecture Review Checklist | Structured compliance review |

## 6.2 Tool Index by Purpose

| Purpose | Tool IDs |
|---------|----------|
| **Organization Classification** | TK-01, TK-02 |
| **DPI Assessment** | TK-03 |
| **AS-IS Documentation** | TK-06, TK-07, TK-08, TK-09 |
| **Gap Analysis** | TK-10 |
| **Target Architecture** | TK-12, TK-13, TK-14, TK-15 |
| **Planning & Roadmap** | TK-16, TK-17, TK-18, TK-19, TK-20 |
| **Governance** | TK-21, TK-22, TK-23, TK-24, TK-25 |
| **Quick Reference** | QR-01, QR-02, QR-03 |

## 6.3 Where to Find Templates

All templates are in the **GEATDM Practitioner Toolkit**:

📁 `GEATDM-WP6-T61-Toolkit-v1.0.md`

---

# 7. FREQUENTLY ASKED QUESTIONS

## Getting Started

**Q: How long does the full GEATDM process take?**

A: Typical timelines by organization type:
- PDU: 3-6 months through PLAN phase; 12-18 months to full implementation
- RA: 4-8 months through PLAN phase; 18-24 months to full implementation
- SDA: 6-12 months through PLAN phase; 24-36 months to full implementation

**Q: What if my organization doesn't fit neatly into PDU/RA/SDA?**

A: Most organizations lean toward one type. Complete the Classification Questionnaire (TK-01); the highest score determines your primary classification. Document secondary characteristics and address them through tailoring in the ADAPT phase. See Scenario D in Section 5.

**Q: What's the minimum viable approach?**

A: At minimum:
1. Complete Classification Decision Tree (TK-02) — 30 minutes
2. Review DPI Readiness at high level — 2 hours
3. Read your Reference Architecture — 2 hours
4. Identify top 5 gaps — 1 day
5. Define Phase 1 scope — 1 day

This "quick assessment" approach gives you enough to start planning, but won't provide the detailed artifacts needed for a formal business case.

## Technical Questions

**Q: What if DPI isn't available in my country?**

A: Proceed with interim solutions. Design your architecture with abstraction layers that allow future DPI integration. See Scenario E in Section 5. Common interim approaches:
- Username/password authentication instead of national eID
- Point-to-point integrations instead of interoperability platform
- Direct bank integration instead of government payment gateway

**Q: Can I skip phases?**

A: Not recommended. Each phase builds on the previous:
- Skip DISCOVER → Wrong Reference Architecture selection
- Skip ASSESS → Gaps not identified; roadmap misses reality
- Skip ADAPT → Generic architecture doesn't fit organization
- Skip PLAN → No roadmap; projects proceed without direction

You can compress phases (faster timeline) but shouldn't eliminate them.

**Q: How does GEATDM relate to TOGAF?**

A: GEATDM uses TOGAF concepts and vocabulary but simplifies the approach:

| Aspect | TOGAF | GEATDM |
|--------|-------|--------|
| **Phases** | 8-phase ADM cycle | 5-phase linear process |
| **Reference Models** | Generic (TRM, III-RM) | Public sector specific (PDU/RA/SDA) |
| **Artifacts** | Extensive catalog | Focused subset (31 tools) |
| **Governance** | Comprehensive framework | Scaled to organization type |

If you're TOGAF-certified, you'll recognize the concepts. GEATDM provides the public-sector specificity that TOGAF lacks.

## Organizational Questions

**Q: Who should lead the EA initiative?**

A: Best practice is dual leadership:
- **Executive Sponsor** (CIO, Deputy Director): Strategic direction, remove blockers, approve decisions
- **Project Lead** (Enterprise Architect, Senior Manager): Day-to-day management, technical direction

The Project Lead should have architecture experience or be supported by an experienced consultant.

**Q: How do we handle change resistance?**

A: Build support through:
1. **Early wins**: Phase 1 should deliver visible improvements
2. **Stakeholder involvement**: Include business users in ASSESS and ADAPT
3. **Communication**: Regular updates to all staff on progress and benefits
4. **Training**: Budget for user training on new systems
5. **Quick value**: Show ROI within 6 months if possible

**Q: What if we lose our executive sponsor mid-project?**

A: This is a top risk. Mitigations:
- Document all decisions and rationale
- Keep steering committee engaged (not just sponsor)
- Deliver visible value early (hard to cancel a successful project)
- Build relationships across leadership team
- Have a succession plan for sponsorship

## Budget Questions

**Q: What should we budget for an EA initiative?**

A: Budget components:
- **Team** (40-60% of budget): Core team, possibly consultants
- **Tools** (10-20%): EA repository, documentation, analysis tools
- **Training** (5-10%): Team capability building
- **Implementation** (remainder): Actual system changes (often separate budget)

Rule of thumb: EA initiative (DISCOVER through PLAN) typically costs 2-5% of total transformation budget.

**Q: What if our budget is cut mid-project?**

A: Options by severity:
- **Minor cut (<20%)**: Reduce scope to higher-priority items; extend timeline
- **Significant cut (20-50%)**: Complete current phase; pause before next phase
- **Major cut (>50%)**: Complete DISCOVER and ASSESS; document as baseline for future restart

Always complete at least through ASSESS—the documentation has lasting value even if implementation is delayed.

---

# 8. GLOSSARY

| Term | Definition |
|------|------------|
| **AS-IS Architecture** | Documentation of the current state of an organization's architecture |
| **Building Block (BB)** | A reusable software component per GovStack specifications |
| **BDAT** | Business, Data, Application, Technology — the four architecture domains |
| **Capability** | An ability that an organization needs to achieve its objectives |
| **DPI** | Digital Public Infrastructure — national-level digital systems (identity, payments, data exchange) |
| **EA** | Enterprise Architecture — discipline aligning IT with business strategy |
| **Gap Analysis** | Process of comparing AS-IS state to target state to identify differences |
| **GEATDM** | Generic EA Target Architecture Development Method |
| **Identity BB** | Building Block providing authentication and identity verification services |
| **Information Mediator BB** | Building Block enabling secure data exchange between systems |
| **Inheritance** | In GEATDM, the principle that RA and SDA include all PDU elements |
| **PAERA** | Public Administration Ecosystem Reference Architecture — the foundational framework |
| **PAO-CC** | Public Administration Organization Core Components — common functions across all org types |
| **Payments BB** | Building Block for payment processing integration |
| **PDU** | Policy Development Unit — organization type focused on policy/legislation |
| **RA (org type)** | Regulatory Agency — organization type focused on sector regulation |
| **Reference Architecture** | Pre-built architecture template for an organization type |
| **SDA** | Service Delivery Authority — organization type for high-volume service delivery |
| **Tailoring** | Customizing a Reference Architecture for specific organizational context |
| **Target Architecture** | The desired future state of an organization's architecture |
| **TO-BE Architecture** | Same as Target Architecture |
| **TOGAF** | The Open Group Architecture Framework |

---

# APPENDICES

## Appendix A: Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                     GEATDM QUICK REFERENCE CARD                           ║
╠═══════════════════════════════════════════════════════════════════════════╣
║                                                                           ║
║  ORGANIZATION TYPES                                                       ║
║  ─────────────────                                                        ║
║  PDU - Policy Development Unit (Ministries, policy departments)           ║
║  RA  - Regulatory Agency (Licensing, data protection, registries)         ║
║  SDA - Service Delivery Authority (Tax, customs, social security)         ║
║                                                                           ║
║  KEY PRINCIPLE: SDA includes RA includes PDU (inheritance)                ║
║                                                                           ║
║  FIVE PHASES                                                              ║
║  ───────────                                                              ║
║  1. DISCOVER (2-4 wk)  - Classify organization, assess DPI, select RA     ║
║  2. ASSESS (4-8 wk)    - Document AS-IS, identify and prioritize gaps     ║
║  3. ADAPT (4-6 wk)     - Tailor RA to create TO-BE architecture           ║
║  4. PLAN (4-6 wk)      - Develop roadmap and business case                ║
║  5. EXECUTE (ongoing)  - Implement projects, govern compliance            ║
║                                                                           ║
║  TYPICAL TIMELINES                                                        ║
║  ─────────────────                                                        ║
║  PDU: 12-18 months | RA: 18-24 months | SDA: 24-36 months                ║
║                                                                           ║
║  DPI BUILDING BLOCKS                                                      ║
║  ───────────────────                                                      ║
║  Identity BB      - Authentication, digital ID                            ║
║  Info Mediator BB - Secure data exchange                                  ║
║  Payments BB      - Payment processing                                    ║
║  Registries BB    - Authoritative data sources                            ║
║                                                                           ║
║  REMEMBER: You INTEGRATE with DPI. You don't BUILD DPI.                   ║
║                                                                           ║
║  KEY DOCUMENTS                                                            ║
║  ─────────────                                                            ║
║  • Main Document: GEATDM-WP6-T62-MainDocument-v1.0.md                    ║
║  • Toolkit: GEATDM-WP6-T61-Toolkit-v1.0.md                               ║
║  • PDU RA: GEATDM-WP2-T25-PDU-RA-Complete-v1.0.md                        ║
║  • RA RA: GEATDM-WP3-T35-RA-RA-Complete-v1.0.md                          ║
║  • SDA RA: GEATDM-WP4-T47-SDA-RA-Complete-v1.0.md                        ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

## Appendix B: Phase Transition Checklist

Use this checklist at each phase gate to confirm readiness to proceed:

```
DISCOVER → ASSESS TRANSITION
═══════════════════════════════════════════════════════════════
☐ Organization classified (PDU/RA/SDA) with rationale
☐ Classification validated by executive sponsor
☐ DPI readiness assessment completed
☐ DPI gaps identified with mitigation approach
☐ Reference Architecture selected
☐ DISCOVER Summary (TK-04) completed and filed
☐ Core team briefed on selected Reference Architecture
═══════════════════════════════════════════════════════════════

ASSESS → ADAPT TRANSITION
═══════════════════════════════════════════════════════════════
☐ Service catalog documented
☐ Application inventory completed
☐ Data inventory completed
☐ Technology baseline documented
☐ Gaps identified and documented
☐ Gaps prioritized (Must/Should/Nice)
☐ ASSESS Summary (TK-11) completed and filed
☐ Gap priorities validated by business stakeholders
═══════════════════════════════════════════════════════════════

ADAPT → PLAN TRANSITION
═══════════════════════════════════════════════════════════════
☐ Reference Architecture reviewed completely
☐ All tailoring decisions documented
☐ Target capability map created
☐ Target application architecture created
☐ DPI integration points specified
☐ Building Block priorities established
☐ TO-BE Architecture document created
☐ Target architecture validated by sponsor
═══════════════════════════════════════════════════════════════

PLAN → EXECUTE TRANSITION
═══════════════════════════════════════════════════════════════
☐ Implementation phases defined
☐ Roadmap with milestones created
☐ Business case approved
☐ Budget allocated for Phase 1
☐ Risk register populated
☐ Governance charter approved
☐ EA engagement model defined
☐ Phase 1 projects ready to initiate
═══════════════════════════════════════════════════════════════
```

## Appendix C: Links to Full Documentation

| Document | Purpose | Location |
|----------|---------|----------|
| **Main Document** | Complete GEATDM reference | `GEATDM-WP6-T62-MainDocument-v1.0.md` |
| **Toolkit** | All 31 templates | `GEATDM-WP6-T61-Toolkit-v1.0.md` |
| **Classification Guide** | Detailed classification guidance | `GEATDM-WP5-T51-ClassificationGuide-v1.0.md` |
| **DPI Checklist** | DPI assessment tool | `GEATDM-WP5-T52-DPIChecklist-v1.0.md` |
| **PDU Reference Architecture** | Full PDU architecture | `GEATDM-WP2-T25-PDU-RA-Complete-v1.0.md` |
| **RA Reference Architecture** | Full RA architecture | `GEATDM-WP3-T35-RA-RA-Complete-v1.0.md` |
| **SDA Reference Architecture** | Full SDA architecture | `GEATDM-WP4-T47-SDA-RA-Complete-v1.0.md` |
| **PAERA Framework** | Foundational concepts | https://paera.govstack.global/ |
| **GovStack** | Building Block specifications | https://www.govstack.global/ |

---

## Document Control

| Attribute | Value |
|-----------|-------|
| Version | 1.0 |
| Date | January 2026 |
| Status | Complete |
| Classification | Public |

---

**End of User's Guide**

*GEATDM — Making Digital Transformation Practical*

---

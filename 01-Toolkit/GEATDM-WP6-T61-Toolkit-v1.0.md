# GEATDM PRACTITIONER TOOLKIT

**Generic EA Target Architecture Development Method**  
**Complete Toolkit for Digital Transformation**

| Attribute | Value |
|-----------|-------|
| Document ID | GEATDM-WP6-T61 |
| Version | 1.0 |
| Date | 2026-01-20 |
| Status | Complete |
| Workpackage | WP6 - Final Integration |

---

## TABLE OF CONTENTS

1. [Introduction](#1-introduction)
2. [Toolkit Contents Overview](#2-toolkit-contents-overview)
3. [DISCOVER Phase Tools](#3-discover-phase-tools)
4. [ASSESS Phase Tools](#4-assess-phase-tools)
5. [ADAPT Phase Tools](#5-adapt-phase-tools)
6. [PLAN Phase Tools](#6-plan-phase-tools)
7. [EXECUTE & GOVERN Phase Tools](#7-execute--govern-phase-tools)
8. [Reference Architecture Tools](#8-reference-architecture-tools)
9. [Governance Tools](#9-governance-tools)
10. [Quick Reference Cards](#10-quick-reference-cards)
11. [Appendix: Tool Index by Phase](#appendix-tool-index-by-phase)

---

## 1. INTRODUCTION

### 1.1 Purpose of This Toolkit

This Practitioner Toolkit compiles all templates, checklists, questionnaires, and tools from the GEATDM (Generic EA Target Architecture Development Method) into a single, easy-to-use reference. The toolkit supports practitioners throughout the digital transformation journey, from initial organization classification to ongoing architecture governance.

### 1.2 How to Use This Toolkit

**Step 1:** Identify your current phase in the GEATDM method (DISCOVER → ASSESS → ADAPT → PLAN → EXECUTE & GOVERN)

**Step 2:** Navigate to the corresponding section in this toolkit

**Step 3:** Select the appropriate tool for your task

**Step 4:** Copy the template and customize it for your organization

### 1.3 Document Conventions

| Convention | Meaning |
|------------|---------|
| ⬜ | Checkbox for completion tracking |
| ⬜ Yes / ⬜ No | Selection option |
| ________ | Fill-in field |
| [Text] | Placeholder for organization-specific content |
| **Bold** | Required field or critical element |
| 🟢/🟡/🔴/⚫ | Health rating indicators |

### 1.4 Tool Identification System

All tools use a consistent numbering system:

| Prefix | Category |
|--------|----------|
| TK-01 to TK-05 | DISCOVER Phase Tools |
| TK-06 to TK-11 | ASSESS Phase Tools |
| TK-12 to TK-15 | ADAPT Phase Tools |
| TK-16 to TK-20 | PLAN Phase Tools |
| TK-21 to TK-25 | EXECUTE & GOVERN Phase Tools |
| TK-26 to TK-28 | Reference Architecture Tools |
| TK-29 to TK-31 | Governance Tools |
| QR-01 to QR-03 | Quick Reference Cards |

---

## 2. TOOLKIT CONTENTS OVERVIEW

| Tool ID | Tool Name | Purpose | Source |
|---------|-----------|---------|--------|
| **DISCOVER PHASE** ||||
| TK-01 | Classification Questionnaire | Score-based organization classification | T5.1 |
| TK-02 | Classification Decision Tree | Visual flow-based classification | T5.1 |
| TK-03 | DPI Readiness Checklist | Assess national DPI availability | T5.2 |
| TK-04 | DISCOVER Summary Template | Document DISCOVER phase outputs | T5.3 |
| TK-05 | Organization Profile Worksheet | Capture organization context | T5.3 |
| **ASSESS PHASE** ||||
| TK-06 | Service Catalog Template | Document current services | T5.4 |
| TK-07 | Application Inventory Template | Inventory all applications | T5.4 |
| TK-08 | Data Inventory Template | Catalog data assets | T5.4 |
| TK-09 | Technology Assessment Template | Document infrastructure | T5.4 |
| TK-10 | Gap Analysis Worksheet | Systematic gap identification | T5.4 |
| TK-11 | ASSESS Summary Template | Document ASSESS phase outputs | T5.4 |
| **ADAPT PHASE** ||||
| TK-12 | TO-BE Architecture Template | Document target state | T5.5 |
| TK-13 | Tailoring Decision Log | Record customization decisions | T5.5 |
| TK-14 | Capability Adaptation Worksheet | Tailor capability map | T5.5 |
| TK-15 | Application Mapping Worksheet | Map RA to AS-IS applications | T5.5 |
| **PLAN PHASE** ||||
| TK-16 | Implementation Roadmap Template | Visual multi-year plan | T5.6 |
| TK-17 | Business Case Template | Investment justification | T5.6 |
| TK-18 | Phase Definition Template | Define implementation phases | T5.6 |
| TK-19 | Risk Register Template | Document and track risks | T5.6 |
| TK-20 | Resource Estimation Template | Plan resources and budget | T5.6 |
| **EXECUTE & GOVERN PHASE** ||||
| TK-21 | Project EA Engagement Checklist | Track EA touchpoints | T5.7 |
| TK-22 | Architecture Compliance Assessment | Verify solution compliance | T5.7 |
| TK-23 | Dispensation Request Form | Request architecture exceptions | T5.7 |
| TK-24 | EA Status Report Template | Report EA progress | T5.7 |
| TK-25 | Architecture Review Checklist | Structured compliance review | T5.7 |
| **REFERENCE ARCHITECTURE TOOLS** ||||
| TK-26 | Capability Mapping Template | Map org to RA capabilities | T4.8 |
| TK-27 | Building Block Assessment | Assess BB implementation | T5.2 |
| TK-28 | DPI Integration Specification | Specify DPI integration | T5.5 |
| **GOVERNANCE TOOLS** ||||
| TK-29 | EA Board Meeting Agenda | Structure board meetings | T1.3 |
| TK-30 | Architecture Decision Record | Document decisions | T1.3 |
| TK-31 | Standards Approval Form | Approve new standards | T1.3 |
| **QUICK REFERENCE** ||||
| QR-01 | Method Overview Card | One-page GEATDM summary | All |
| QR-02 | RA Selection Card | Quick RA selection guide | T5.3 |
| QR-03 | Decision Points Card | All decision points summary | All |

---

## 3. DISCOVER PHASE TOOLS

### TK-01: Classification Questionnaire

**Purpose:** Systematically classify an organization as PDU, RA, or SDA based on scored assessment.

**Instructions:**
1. Answer each question with Yes or No
2. For Yes answers, add the points in the corresponding column
3. Sum each column at the end
4. The column with the highest score indicates the organization type

```
══════════════════════════════════════════════════════════════════════════════
                    TK-01: ORGANIZATION CLASSIFICATION QUESTIONNAIRE
══════════════════════════════════════════════════════════════════════════════

Organization Name: ___________________________________________________________
Assessment Date: _____________________________________________________________
Assessor: ____________________________________________________________________

┌────┬────────────────────────────────────────────────────────┬─────┬─────┬─────┐
│ #  │ Question                                               │ PDU │ RA  │ SDA │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│    │ **FUNCTION**                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 1  │ Primary function is policy development and legislation │  5  │  1  │  0  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 2  │ Primary function is sector regulation through licensing│  0  │  5  │  2  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 3  │ Primary function is mass service delivery              │  0  │  1  │  5  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 4  │ Organization supervises other agencies                 │  3  │  1  │  0  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 5  │ Organization implements policies set by a ministry     │  0  │  3  │  3  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│    │ **CUSTOMER INTERACTION**                               │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 6  │ Limited direct customer/citizen interaction            │  4  │  1  │  0  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 7  │ Moderate interaction with regulated entities           │  0  │  4  │  2  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 8  │ High-volume interaction with citizens/businesses       │  0  │  1  │  5  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 9  │ Customer base exceeds 100,000                          │  0  │  1  │  4  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 10 │ Customer base exceeds 1,000,000                        │  0  │  0  │  5  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│    │ **TRANSACTIONS & PROCESSING**                          │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 11 │ Primarily document-centric operations                  │  5  │  2  │  1  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 12 │ Issues licenses, permits, or authorizations            │  0  │  5  │  3  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 13 │ Processes more than 100,000 transactions/year          │  0  │  2  │  4  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 14 │ Processes more than 1,000,000 transactions/year        │  0  │  0  │  5  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 15 │ Requires real-time transaction processing              │  0  │  1  │  4  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│    │ **COMPLIANCE & ENFORCEMENT**                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 16 │ No direct enforcement powers                           │  5  │  0  │  0  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 17 │ Conducts inspections of regulated entities             │  0  │  4  │  3  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 18 │ Has enforcement powers (fines, sanctions)              │  0  │  3  │  4  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 19 │ Uses risk-based selection for audit/inspection         │  0  │  2  │  5  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 20 │ Conducts mass enforcement operations                   │  0  │  1  │  5  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│    │ **DATA & SYSTEMS**                                     │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 21 │ Manages customer/citizen accounts                      │  0  │  2  │  5  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 22 │ Maintains registry of licensees/permits                │  0  │  5  │  3  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 23 │ Collects revenue/fees at scale                         │  0  │  2  │  5  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 24 │ Processes refunds or credits                           │  0  │  1  │  4  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 25 │ Requires data warehouse and analytics                  │  0  │  2  │  5  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 26 │ Requires sophisticated risk scoring (ML/AI)            │  0  │  1  │  5  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│    │ **COORDINATION & COMPLEXITY**                          │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 27 │ Coordinates policy across government                   │  4  │  1  │  0  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 28 │ Coordinates with multiple agencies for service delivery│  1  │  2  │  4  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 29 │ International coordination with counterparts           │  1  │  2  │  4  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┼────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│ 30 │ Requires 24/7 operations                               │  0  │  1  │  4  │
│    │ Yes ⬜  No ⬜                                           │     │     │     │
├────┴────────────────────────────────────────────────────────┼─────┼─────┼─────┤
│                                             **TOTALS**      │     │     │     │
└─────────────────────────────────────────────────────────────┴─────┴─────┴─────┘

SCORING INTERPRETATION:
───────────────────────────────────────────────────────────────────────────────

Highest Score Column: ⬜ PDU    ⬜ RA    ⬜ SDA

Score Difference from Second Highest: ________

Confidence Level:
  ⬜ High (>20 point difference) - Classification is clear
  ⬜ Medium (10-20 point difference) - Review key differentiators
  ⬜ Low (<10 point difference) - Review special cases

Classification Result: ___________________________________________________

Rationale: _______________________________________________________________
__________________________________________________________________________
__________________________________________________________________________

Assessed By: _________________________  Date: _____________________________

Validated By: ________________________  Date: _____________________________

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-02: Classification Decision Tree

**Purpose:** Visual flow-based classification for quick preliminary assessment.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-02: ORGANIZATION CLASSIFICATION DECISION TREE
══════════════════════════════════════════════════════════════════════════════

                                    START
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  Q1: What is the organization's PRIMARY function?                           │
│                                                                             │
│  (A) Developing policies and legislation          ──────────────────► Q2   │
│  (B) Regulating a sector through licensing/permits ─────────────────► Q3   │
│  (C) Delivering services with high-volume transactions ─────────────► Q4   │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  Q2: Does the organization also regulate a sector through licensing?        │
│                                                                             │
│  YES → Continue to Q3                                                       │
│  NO  → RESULT: PDU (Policy Development Unit) ══════════════════════════     │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  Q3: Does the organization process more than 100,000 transactions           │
│      annually with individual customers/citizens?                           │
│                                                                             │
│  YES → Continue to Q4                                                       │
│  NO  → RESULT: RA (Regulatory Agency) ═════════════════════════════════     │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  Q4: Does the organization have ANY THREE of the following?                 │
│                                                                             │
│  ⬜ Manages ongoing customer accounts (not just one-time registrations)     │
│  ⬜ Collects revenue/fees at scale (not just application fees)              │
│  ⬜ Conducts mass enforcement operations                                    │
│  ⬜ Uses risk-based selection for audits/inspections                        │
│  ⬜ Requires real-time transaction processing                               │
│  ⬜ Processes refunds or credits                                            │
│  ⬜ Has data warehouse with analytics                                       │
│                                                                             │
│  YES (3+ checked) → RESULT: SDA (Service Delivery Authority) ══════════     │
│  NO  (fewer than 3) → RESULT: RA (Regulatory Agency) ══════════════════     │
└─────────────────────────────────────────────────────────────────────────────┘

QUICK REFERENCE TABLE:
───────────────────────────────────────────────────────────────────────────────

┌───────────────┬───────────┬───────────┬───────────┬────────────────────────┐
│ Q1 Answer     │ Q2 Answer │ Q3 Answer │ Q4 Answer │ Classification         │
├───────────────┼───────────┼───────────┼───────────┼────────────────────────┤
│ Policy (A)    │ No        │ -         │ -         │ **PDU**                │
│ Policy (A)    │ Yes       │ No        │ -         │ **RA**                 │
│ Policy (A)    │ Yes       │ Yes       │ <3 checked│ **RA**                 │
│ Policy (A)    │ Yes       │ Yes       │ 3+ checked│ **SDA**                │
│ Regulatory (B)│ -         │ No        │ -         │ **RA**                 │
│ Regulatory (B)│ -         │ Yes       │ <3 checked│ **RA**                 │
│ Regulatory (B)│ -         │ Yes       │ 3+ checked│ **SDA**                │
│ Service (C)   │ -         │ -         │ 3+ checked│ **SDA**                │
│ Service (C)   │ -         │ -         │ <3 checked│ **RA**                 │
└───────────────┴───────────┴───────────┴───────────┴────────────────────────┘

Decision Tree Path: Q1 → ____    Q2 → ____    Q3 → ____    Q4 → ____

Classification Result: ⬜ PDU    ⬜ RA    ⬜ SDA

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-03: DPI Readiness Checklist

**Purpose:** Comprehensive assessment of national Digital Public Infrastructure availability.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-03: DPI READINESS CHECKLIST
══════════════════════════════════════════════════════════════════════════════

Organization: ________________________________________________________________
Country: _____________________________________________________________________
Assessment Date: _____________________________________________________________
Assessed By: _________________________________________________________________

═══════════════════════════════════════════════════════════════════════════════
PILLAR 1: DIGITAL IDENTITY (Weight: 25%)
═══════════════════════════════════════════════════════════════════════════════

┌────────┬────────────────────────────────────────────────────┬────────┬──────┐
│ #      │ Component                                          │ Status │ Notes│
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 1.1    │ **FOUNDATIONAL LAYER**                             │        │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 1.1.1  │ Birth registration system exists                   │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 1.1.2  │ Death registration system exists                   │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 1.1.3  │ Civil registry is digitized                        │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 1.2    │ **NATIONAL IDENTITY SYSTEM**                       │        │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 1.2.1  │ Unique national identifier exists **(CRITICAL)**   │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 1.2.2  │ National ID coverage > 80% of adult population     │ ⬜ Yes │      │
│        │ Coverage: _____%                                   │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 1.2.3  │ Digital ID credential available                    │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 1.3    │ **AUTHENTICATION SERVICES**                        │        │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 1.3.1  │ Authentication API available **(CRITICAL)**        │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 1.3.2  │ Multiple authentication methods supported          │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 1.3.3  │ Multi-factor authentication (MFA) available        │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 1.4    │ **DIGITAL SIGNATURE INFRASTRUCTURE**               │        │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 1.4.1  │ Public Key Infrastructure (PKI) operational        │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 1.4.2  │ Digital signatures legally recognized **(CRITICAL)**│ ⬜ Yes│      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 1.4.3  │ SSO for government services exists                 │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
└────────┴────────────────────────────────────────────────────┴────────┴──────┘

Pillar 1 Status: ⬜ Ready    ⬜ Partial    ⬜ Not Ready

Critical Components Met: ⬜ Yes    ⬜ No

═══════════════════════════════════════════════════════════════════════════════
PILLAR 2: INTEROPERABILITY (Weight: 25%)
═══════════════════════════════════════════════════════════════════════════════

┌────────┬────────────────────────────────────────────────────┬────────┬──────┐
│ #      │ Component                                          │ Status │ Notes│
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 2.1    │ **GOVERNANCE & POLICY**                            │        │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 2.1.1  │ National Interoperability Framework (NIF) exists   │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 2.1.2  │ NIF is mandatory for government agencies           │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 2.2    │ **TECHNICAL INFRASTRUCTURE**                       │        │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 2.2.1  │ Data exchange platform exists **(CRITICAL)**       │ ⬜ Yes │      │
│        │ (X-Road type)                                      │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 2.2.2  │ API gateway operational                            │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 2.2.3  │ Service registry/catalog maintained                │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 2.3    │ **STANDARDS & FORMATS**                            │        │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 2.3.1  │ API design standards defined **(CRITICAL)**        │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 2.3.2  │ Data format standards defined                      │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 2.4    │ **SECURITY & TRUST**                               │        │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 2.4.1  │ Trust framework for data sharing **(CRITICAL)**    │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 2.4.2  │ Secure data transport mandated                     │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 2.5    │ **OPERATIONAL SUPPORT**                            │        │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 2.5.1  │ Integration documentation available                │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 2.5.2  │ Developer sandbox/test environment                 │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
└────────┴────────────────────────────────────────────────────┴────────┴──────┘

Pillar 2 Status: ⬜ Ready    ⬜ Partial    ⬜ Not Ready

Critical Components Met: ⬜ Yes    ⬜ No

═══════════════════════════════════════════════════════════════════════════════
PILLAR 3: DIGITAL DATA INFRASTRUCTURE (Weight: 20%)
═══════════════════════════════════════════════════════════════════════════════

┌────────┬────────────────────────────────────────────────────┬────────┬──────┐
│ #      │ Component                                          │ Status │ Notes│
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 3.1    │ **POLICY & GOVERNANCE**                            │        │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 3.1.1  │ Data protection legislation enacted **(CRITICAL)** │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 3.1.2  │ Data Protection Authority operational              │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 3.1.3  │ Government data governance framework exists        │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 3.2    │ **CLOUD & INFRASTRUCTURE**                         │        │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 3.2.1  │ Government cloud services available                │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 3.2.2  │ Disaster recovery capability exists                │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 3.3    │ **FOUNDATIONAL REGISTRIES**                        │        │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 3.3.1  │ Population/citizen registry accessible **(CRIT)**  │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 3.3.2  │ Business/company registry accessible **(CRITICAL)**│ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 3.3.3  │ Land/property registry digitized                   │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 3.3.4  │ Registry APIs available for integration            │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
└────────┴────────────────────────────────────────────────────┴────────┴──────┘

Pillar 3 Status: ⬜ Ready    ⬜ Partial    ⬜ Not Ready

Critical Components Met: ⬜ Yes    ⬜ No

═══════════════════════════════════════════════════════════════════════════════
PILLAR 4: DIGITAL ACCESS (Weight: 15%)
═══════════════════════════════════════════════════════════════════════════════

┌────────┬────────────────────────────────────────────────────┬────────┬──────┐
│ #      │ Component                                          │ Status │ Notes│
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 4.1    │ Mobile network coverage > 80% **(CRITICAL)**       │ ⬜ Yes │      │
│        │ Coverage: _____%                                   │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 4.2    │ Internet penetration > 60%                         │ ⬜ Yes │      │
│        │ Penetration: _____%                                │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 4.3    │ Government network infrastructure exists           │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 4.4    │ National government services portal **(CRITICAL)** │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 4.5    │ Cybersecurity framework exists **(CRITICAL)**      │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 4.6    │ Accessibility standards defined                    │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
└────────┴────────────────────────────────────────────────────┴────────┴──────┘

Pillar 4 Status: ⬜ Ready    ⬜ Partial    ⬜ Not Ready

Critical Components Met: ⬜ Yes    ⬜ No

═══════════════════════════════════════════════════════════════════════════════
PILLAR 5: GOVERNANCE (Weight: 15%)
═══════════════════════════════════════════════════════════════════════════════

┌────────┬────────────────────────────────────────────────────┬────────┬──────┐
│ #      │ Component                                          │ Status │ Notes│
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 5.1    │ National digital strategy exists **(CRITICAL)**    │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 5.2    │ Central digital agency exists **(CRITICAL)**       │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 5.3    │ E-government law enacted **(CRITICAL)**            │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 5.4    │ Government EA framework exists                     │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 5.5    │ Dedicated funding for digital initiatives          │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
├────────┼────────────────────────────────────────────────────┼────────┼──────┤
│ 5.6    │ Digital KPIs defined and measured                  │ ⬜ Yes │      │
│        │                                                    │ ⬜ No  │      │
└────────┴────────────────────────────────────────────────────┴────────┴──────┘

Pillar 5 Status: ⬜ Ready    ⬜ Partial    ⬜ Not Ready

Critical Components Met: ⬜ Yes    ⬜ No

═══════════════════════════════════════════════════════════════════════════════
OVERALL DPI READINESS SCORE CALCULATION
═══════════════════════════════════════════════════════════════════════════════

Pillar Status Conversion:  Ready = 100%  |  Partial = 50%  |  Not Ready = 0%

┌─────────────────────────┬────────────┬────────┬───────────┬────────────────┐
│ Pillar                  │ Status     │ Weight │ Raw Score │ Weighted Score │
├─────────────────────────┼────────────┼────────┼───────────┼────────────────┤
│ 1. Digital Identity     │ R / P / N  │  25%   │ _______%  │ __________%    │
├─────────────────────────┼────────────┼────────┼───────────┼────────────────┤
│ 2. Interoperability     │ R / P / N  │  25%   │ _______%  │ __________%    │
├─────────────────────────┼────────────┼────────┼───────────┼────────────────┤
│ 3. Data Infrastructure  │ R / P / N  │  20%   │ _______%  │ __________%    │
├─────────────────────────┼────────────┼────────┼───────────┼────────────────┤
│ 4. Digital Access       │ R / P / N  │  15%   │ _______%  │ __________%    │
├─────────────────────────┼────────────┼────────┼───────────┼────────────────┤
│ 5. Governance           │ R / P / N  │  15%   │ _______%  │ __________%    │
├─────────────────────────┼────────────┼────────┼───────────┼────────────────┤
│ **OVERALL SCORE**       │            │ 100%   │           │ **________%**  │
└─────────────────────────┴────────────┴────────┴───────────┴────────────────┘

READINESS LEVEL DETERMINATION:
───────────────────────────────────────────────────────────────────────────────

⬜ Level 3: READY (71-100%)
  → Proceed with full Reference Architecture implementation
  → Maximize DPI integration

⬜ Level 2: DEVELOPING (41-70%)
  → Phased approach recommended
  → Prioritize available DPI, plan workarounds for gaps

⬜ Level 1: FOUNDATIONAL (0-40%)
  → Address critical gaps first
  → Implement standalone solutions with future DPI integration design

CRITICAL GAPS IDENTIFIED:
───────────────────────────────────────────────────────────────────────────────

┌────┬──────────────────────────────────────┬──────────────┬──────────────────┐
│ #  │ Gap Description                      │ Impact       │ Mitigation       │
├────┼──────────────────────────────────────┼──────────────┼──────────────────┤
│ 1  │                                      │              │                  │
├────┼──────────────────────────────────────┼──────────────┼──────────────────┤
│ 2  │                                      │              │                  │
├────┼──────────────────────────────────────┼──────────────┼──────────────────┤
│ 3  │                                      │              │                  │
└────┴──────────────────────────────────────┴──────────────┴──────────────────┘

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-04: DISCOVER Summary Template

**Purpose:** Consolidated documentation of all DISCOVER phase outputs with sign-off.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-04: DISCOVER PHASE SUMMARY
══════════════════════════════════════════════════════════════════════════════

ORGANIZATION INFORMATION
───────────────────────────────────────────────────────────────────────────────
Organization Name:     ______________________________________________________
Country/Jurisdiction:  ______________________________________________________
Assessment Date:       ______________________________________________________
Project Lead:          ______________________________________________________
Team Members:          ______________________________________________________

══════════════════════════════════════════════════════════════════════════════
1. ORGANIZATION CLASSIFICATION
══════════════════════════════════════════════════════════════════════════════

Organization Type:    ⬜ PDU (Policy Development Unit)
                      ⬜ RA (Regulatory Agency)
                      ⬜ SDA (Service Delivery Authority)

Classification Confidence:  ⬜ High    ⬜ Medium    ⬜ Low

Questionnaire Scores:
  PDU: ______    RA: ______    SDA: ______

Decision Tree Path:   Q1 → ___    Q2 → ___    Q3 → ___    Q4 → ___

Special Case Applied: ⬜ None  ⬜ ________________________________________

Classification Rationale:
___________________________________________________________________________
___________________________________________________________________________
___________________________________________________________________________

Key Differentiating Factors:
1. _______________________________________________________________________
2. _______________________________________________________________________
3. _______________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
2. DPI READINESS ASSESSMENT
══════════════════════════════════════════════════════════════════════════════

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
(R = Ready, P = Partial, N = Not Ready)

Readiness Level:      ⬜ Level 1 (Foundational: 0-40%)
                      ⬜ Level 2 (Developing: 41-70%)
                      ⬜ Level 3 (Ready: 71-100%)

Critical Gaps Identified:
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
  ⬜ PDU Reference Architecture (GEATDM-WP2-T25)
  ⬜ RA Reference Architecture (GEATDM-WP3-T35)
  ⬜ SDA Reference Architecture (GEATDM-WP4-T47)

Implementation Approach:
  ⬜ Full Implementation
  ⬜ Phased Implementation
  ⬜ Basic Implementation

Selection Rationale:
___________________________________________________________________________
___________________________________________________________________________

Key Customizations Anticipated:
1. _______________________________________________________________________
2. _______________________________________________________________________
3. _______________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
4. PROCEED/DELAY DECISION
══════════════════════════════════════════════════════════════════════════════

Decision:  ⬜ PROCEED to ASSESS Phase
           ⬜ DELAY - Address gaps first

If PROCEED:
  Target start date for ASSESS phase: ____________________________________
  Key resources required: ________________________________________________

If DELAY:
  Gap remediation plan attached: ⬜ Yes
  Estimated remediation timeline: ________________________________________
  Re-assessment target date: _____________________________________________

══════════════════════════════════════════════════════════════════════════════
5. NEXT STEPS
══════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┬───────────┐
│ Action                                                          │ Due Date  │
├─────────────────────────────────────────────────────────────────┼───────────┤
│ 1.                                                              │           │
│ 2.                                                              │           │
│ 3.                                                              │           │
│ 4.                                                              │           │
│ 5.                                                              │           │
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

⬜ A. Completed Classification Questionnaire (TK-01)
⬜ B. Completed DPI Readiness Checklist (TK-03)
⬜ C. Stakeholder Consultation Notes
⬜ D. Evidence Documents Index
⬜ E. Gap Remediation Plan (if applicable)

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-05: Organization Profile Worksheet

**Purpose:** Capture essential organization context for the GEATDM engagement.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-05: ORGANIZATION PROFILE WORKSHEET
══════════════════════════════════════════════════════════════════════════════

BASIC INFORMATION
───────────────────────────────────────────────────────────────────────────────

Organization Name: ___________________________________________________________
Official Abbreviation: _______________________________________________________
Parent Ministry/Authority: ___________________________________________________
Country: ____________________________________________________________________
Established Year: ____________________________________________________________

ORGANIZATIONAL MANDATE
───────────────────────────────────────────────────────────────────────────────

Founding Legislation/Charter: ________________________________________________
Primary Mandate Statement:
___________________________________________________________________________
___________________________________________________________________________
___________________________________________________________________________

ORGANIZATIONAL SCOPE
───────────────────────────────────────────────────────────────────────────────

Functional Domain: ⬜ Finance  ⬜ Trade  ⬜ Health  ⬜ Education  ⬜ Security
                   ⬜ Social  ⬜ Environment  ⬜ Infrastructure  ⬜ Other: _____

Geographic Scope: ⬜ National  ⬜ Regional  ⬜ Local

ORGANIZATIONAL SIZE
───────────────────────────────────────────────────────────────────────────────

Total Employees: _______________
IT Staff: _______________
Budget (Annual): _______________
IT Budget (Annual): _______________ (____% of total)

CUSTOMER/STAKEHOLDER BASE
───────────────────────────────────────────────────────────────────────────────

┌─────────────────────┬──────────────────┬─────────────────┬────────────────┐
│ Customer Type       │ Estimated Count  │ Service Type    │ Key Services   │
├─────────────────────┼──────────────────┼─────────────────┼────────────────┤
│ Citizens (G2C)      │                  │                 │                │
│ Businesses (G2B)    │                  │                 │                │
│ Government (G2G)    │                  │                 │                │
│ Employees (G2E)     │                  │                 │                │
└─────────────────────┴──────────────────┴─────────────────┴────────────────┘

TRANSACTION VOLUMES (Annual Estimates)
───────────────────────────────────────────────────────────────────────────────

Total Transactions: _______________
License/Permit Applications: _______________
Returns/Declarations Filed: _______________
Payments Processed: _______________
Inspections Conducted: _______________
Customer Service Interactions: _______________

STRATEGIC CONTEXT
───────────────────────────────────────────────────────────────────────────────

Current Strategic Plan Period: ____________ to ____________

Strategic Priorities:
1. _______________________________________________________________________
2. _______________________________________________________________________
3. _______________________________________________________________________

Digital Transformation Status:
⬜ Not started  ⬜ Early stage  ⬜ In progress  ⬜ Advanced  ⬜ Mature

Key Digital Initiatives Underway:
1. _______________________________________________________________________
2. _______________________________________________________________________
3. _______________________________________________________________________

KEY CONTACTS
───────────────────────────────────────────────────────────────────────────────

┌─────────────────────┬──────────────────┬─────────────────┬────────────────┐
│ Role                │ Name             │ Phone           │ Email          │
├─────────────────────┼──────────────────┼─────────────────┼────────────────┤
│ Executive Sponsor   │                  │                 │                │
│ IT Director/CIO     │                  │                 │                │
│ EA Lead             │                  │                 │                │
│ Business Lead       │                  │                 │                │
│ Project Manager     │                  │                 │                │
└─────────────────────┴──────────────────┴─────────────────┴────────────────┘

Completed By: ________________________  Date: _____________________________

══════════════════════════════════════════════════════════════════════════════
```

---

## 4. ASSESS PHASE TOOLS

### TK-06: Service Catalog Template

**Purpose:** Document current services provided by the organization.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-06: CURRENT SERVICE CATALOG
══════════════════════════════════════════════════════════════════════════════

Organization: ________________________________________________________________
Date: ________________________________________________________________________

┌────────┬──────────────┬────────────────────┬──────────┬─────────┬──────────┐
│Svc ID  │ Service Name │ Description        │ Customer │ Channel │ Digital? │
│        │              │                    │ Type     │         │          │
├────────┼──────────────┼────────────────────┼──────────┼─────────┼──────────┤
│ S001   │              │                    │ G2C/G2B/ │ Portal/ │ Yes/No/  │
│        │              │                    │ G2G      │ Counter/│ Partial  │
│        │              │                    │          │ Both    │          │
├────────┼──────────────┼────────────────────┼──────────┼─────────┼──────────┤
│ S002   │              │                    │          │         │          │
├────────┼──────────────┼────────────────────┼──────────┼─────────┼──────────┤
│ S003   │              │                    │          │         │          │
├────────┼──────────────┼────────────────────┼──────────┼─────────┼──────────┤
│ S004   │              │                    │          │         │          │
├────────┼──────────────┼────────────────────┼──────────┼─────────┼──────────┤
│ S005   │              │                    │          │         │          │
├────────┼──────────────┼────────────────────┼──────────┼─────────┼──────────┤
│ S006   │              │                    │          │         │          │
├────────┼──────────────┼────────────────────┼──────────┼─────────┼──────────┤
│ S007   │              │                    │          │         │          │
├────────┼──────────────┼────────────────────┼──────────┼─────────┼──────────┤
│ S008   │              │                    │          │         │          │
├────────┼──────────────┼────────────────────┼──────────┼─────────┼──────────┤
│ S009   │              │                    │          │         │          │
├────────┼──────────────┼────────────────────┼──────────┼─────────┼──────────┤
│ S010   │              │                    │          │         │          │
└────────┴──────────────┴────────────────────┴──────────┴─────────┴──────────┘

(Add additional rows as needed)

SUMMARY:
───────────────────────────────────────────────────────────────────────────────
Total Services: ________
  - G2C: ________ (Digital: ____%)
  - G2B: ________ (Digital: ____%)
  - G2G: ________ (Digital: ____%)

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-07: Application Inventory Template

**Purpose:** Comprehensive inventory of all applications.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-07: APPLICATION INVENTORY
══════════════════════════════════════════════════════════════════════════════

Organization: ________________________________________________________________
Date: ________________________________________________________________________

┌───────┬─────────────┬────────┬──────────┬──────────┬────────┬─────────────┐
│App ID │ Application │ Vendor │ Purpose  │ Year     │ Users  │ Support     │
│       │ Name        │        │          │ Impl.    │        │ Status      │
├───────┼─────────────┼────────┼──────────┼──────────┼────────┼─────────────┤
│ A001  │             │        │          │          │        │ Active/     │
│       │             │        │          │          │        │ Limited/EOL │
├───────┼─────────────┼────────┼──────────┼──────────┼────────┼─────────────┤
│ A002  │             │        │          │          │        │             │
├───────┼─────────────┼────────┼──────────┼──────────┼────────┼─────────────┤
│ A003  │             │        │          │          │        │             │
├───────┼─────────────┼────────┼──────────┼──────────┼────────┼─────────────┤
│ A004  │             │        │          │          │        │             │
├───────┼─────────────┼────────┼──────────┼──────────┼────────┼─────────────┤
│ A005  │             │        │          │          │        │             │
├───────┼─────────────┼────────┼──────────┼──────────┼────────┼─────────────┤
│ A006  │             │        │          │          │        │             │
├───────┼─────────────┼────────┼──────────┼──────────┼────────┼─────────────┤
│ A007  │             │        │          │          │        │             │
├───────┼─────────────┼────────┼──────────┼──────────┼────────┼─────────────┤
│ A008  │             │        │          │          │        │             │
└───────┴─────────────┴────────┴──────────┴──────────┴────────┴─────────────┘

APPLICATION HEALTH ASSESSMENT:
───────────────────────────────────────────────────────────────────────────────

┌───────┬─────────────┬────────────┬──────────┬─────────┬───────────┬────────┐
│App ID │ Application │ Functional │ Technical│ Support │ Overall   │ Action │
│       │             │ Fit        │ Quality  │ Status  │ Health    │        │
├───────┼─────────────┼────────────┼──────────┼─────────┼───────────┼────────┤
│       │             │ 🟢/🟡/🔴  │ 🟢/🟡/🔴│ 🟢/🟡/🔴│ 🟢/🟡/🔴/⚫│ Retain/│
│       │             │            │          │         │           │ Replace│
├───────┼─────────────┼────────────┼──────────┼─────────┼───────────┼────────┤
│       │             │            │          │         │           │        │
├───────┼─────────────┼────────────┼──────────┼─────────┼───────────┼────────┤
│       │             │            │          │         │           │        │
├───────┼─────────────┼────────────┼──────────┼─────────┼───────────┼────────┤
│       │             │            │          │         │           │        │
├───────┼─────────────┼────────────┼──────────┼─────────┼───────────┼────────┤
│       │             │            │          │         │           │        │
└───────┴─────────────┴────────────┴──────────┴─────────┴───────────┴────────┘

Health Legend: 🟢 Green (Healthy) | 🟡 Yellow (Adequate) | 🔴 Red (Problem) | ⚫ Black (EOL)

SUMMARY:
───────────────────────────────────────────────────────────────────────────────
Total Applications: ________
  - 🟢 Healthy: ________ (__%)
  - 🟡 Adequate: ________ (__%)
  - 🔴 Problematic: ________ (__%)
  - ⚫ End-of-Life: ________ (__%)

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-08: Data Inventory Template

**Purpose:** Catalog data assets and assess data quality.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-08: DATA INVENTORY
══════════════════════════════════════════════════════════════════════════════

Organization: ________________________________________________________________
Date: ________________________________________________________________________

DATA ASSET INVENTORY:
───────────────────────────────────────────────────────────────────────────────

┌────────┬────────────────┬──────────┬─────────────┬──────────┬──────────────┐
│Data ID │ Asset Name     │ Type     │ Primary App │ Records  │ Owner        │
│        │                │          │             │ (Est.)   │              │
├────────┼────────────────┼──────────┼─────────────┼──────────┼──────────────┤
│ DA001  │                │ Master/  │             │          │              │
│        │                │ Trans/   │             │          │              │
│        │                │ Analytic │             │          │              │
├────────┼────────────────┼──────────┼─────────────┼──────────┼──────────────┤
│ DA002  │                │          │             │          │              │
├────────┼────────────────┼──────────┼─────────────┼──────────┼──────────────┤
│ DA003  │                │          │             │          │              │
├────────┼────────────────┼──────────┼─────────────┼──────────┼──────────────┤
│ DA004  │                │          │             │          │              │
├────────┼────────────────┼──────────┼─────────────┼──────────┼──────────────┤
│ DA005  │                │          │             │          │              │
└────────┴────────────────┴──────────┴─────────────┴──────────┴──────────────┘

DATA QUALITY ASSESSMENT:
───────────────────────────────────────────────────────────────────────────────

┌────────────────┬────────────┬──────────┬─────────────┬──────────┬──────────┐
│ Data Domain    │ Complete-  │ Accuracy │ Consistency │ Timeli-  │ Overall  │
│                │ ness       │          │             │ ness     │ Quality  │
├────────────────┼────────────┼──────────┼─────────────┼──────────┼──────────┤
│                │ High/Med/  │ High/Med/│ High/Med/   │ High/Med/│ High/Med/│
│                │ Low        │ Low      │ Low         │ Low      │ Low      │
├────────────────┼────────────┼──────────┼─────────────┼──────────┼──────────┤
│                │            │          │             │          │          │
├────────────────┼────────────┼──────────┼─────────────┼──────────┼──────────┤
│                │            │          │             │          │          │
├────────────────┼────────────┼──────────┼─────────────┼──────────┼──────────┤
│                │            │          │             │          │          │
└────────────────┴────────────┴──────────┴─────────────┴──────────┴──────────┘

DATA OWNERSHIP MATRIX:
───────────────────────────────────────────────────────────────────────────────

┌────────────────┬──────────────┬──────────────┬──────────────┬──────────────┐
│ Data Domain    │ Data Owner   │ Data Steward │ Data         │ Governance   │
│                │              │              │ Custodian    │ Issues       │
├────────────────┼──────────────┼──────────────┼──────────────┼──────────────┤
│                │              │              │              │              │
├────────────────┼──────────────┼──────────────┼──────────────┼──────────────┤
│                │              │              │              │              │
├────────────────┼──────────────┼──────────────┼──────────────┼──────────────┤
│                │              │              │              │              │
└────────────────┴──────────────┴──────────────┴──────────────┴──────────────┘

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-09: Technology Assessment Template

**Purpose:** Document current infrastructure and technical debt.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-09: TECHNOLOGY ASSESSMENT
══════════════════════════════════════════════════════════════════════════════

Organization: ________________________________________________________________
Date: ________________________________________________________________________

INFRASTRUCTURE INVENTORY:
───────────────────────────────────────────────────────────────────────────────

┌────────────┬──────────────┬────────────────┬────────┬──────────┬───────────┐
│Component ID│ Type         │ Description    │Location│ Age(yrs) │Utilization│
├────────────┼──────────────┼────────────────┼────────┼──────────┼───────────┤
│ INF001     │ Server/VM/   │                │        │          │     %     │
│            │ Cloud/Storage│                │        │          │           │
├────────────┼──────────────┼────────────────┼────────┼──────────┼───────────┤
│ INF002     │              │                │        │          │           │
├────────────┼──────────────┼────────────────┼────────┼──────────┼───────────┤
│ INF003     │              │                │        │          │           │
├────────────┼──────────────┼────────────────┼────────┼──────────┼───────────┤
│ INF004     │              │                │        │          │           │
└────────────┴──────────────┴────────────────┴────────┴──────────┴───────────┘

HOSTING MODEL:
───────────────────────────────────────────────────────────────────────────────

Primary Hosting: ⬜ On-Premise  ⬜ Private Cloud  ⬜ Public Cloud  ⬜ Hybrid
DR Site: ⬜ Yes  ⬜ No  ⬜ Planned

TECHNICAL DEBT REGISTER:
───────────────────────────────────────────────────────────────────────────────

┌────────┬────────────────┬──────────────┬────────────────┬────────┬─────────┐
│Debt ID │ Component      │ Debt Type    │ Description    │ Risk   │ Fix     │
│        │                │              │                │ Level  │ Effort  │
├────────┼────────────────┼──────────────┼────────────────┼────────┼─────────┤
│ TD001  │                │ Obsolete/    │                │High/Med│         │
│        │                │ Skills/Arch/ │                │/Low    │         │
│        │                │ Security/Perf│                │        │         │
├────────┼────────────────┼──────────────┼────────────────┼────────┼─────────┤
│ TD002  │                │              │                │        │         │
├────────┼────────────────┼──────────────┼────────────────┼────────┼─────────┤
│ TD003  │                │              │                │        │         │
├────────┼────────────────┼──────────────┼────────────────┼────────┼─────────┤
│ TD004  │                │              │                │        │         │
├────────┼────────────────┼──────────────┼────────────────┼────────┼─────────┤
│ TD005  │                │              │                │        │         │
└────────┴────────────────┴──────────────┴────────────────┴────────┴─────────┘

SECURITY ASSESSMENT:
───────────────────────────────────────────────────────────────────────────────

┌──────────────────────┬──────────────────┬────────────────────┬─────────────┐
│ Security Domain      │ Current State    │ Compliance Status  │ Gap Notes   │
├──────────────────────┼──────────────────┼────────────────────┼─────────────┤
│ Access Control       │                  │ Comp/Partial/Non   │             │
├──────────────────────┼──────────────────┼────────────────────┼─────────────┤
│ Data Protection      │                  │ Comp/Partial/Non   │             │
├──────────────────────┼──────────────────┼────────────────────┼─────────────┤
│ Network Security     │                  │ Comp/Partial/Non   │             │
├──────────────────────┼──────────────────┼────────────────────┼─────────────┤
│ Incident Response    │                  │ Comp/Partial/Non   │             │
├──────────────────────┼──────────────────┼────────────────────┼─────────────┤
│ Audit & Logging      │                  │ Comp/Partial/Non   │             │
└──────────────────────┴──────────────────┴────────────────────┴─────────────┘

OPERATIONAL CAPABILITIES:
───────────────────────────────────────────────────────────────────────────────

┌─────────────────────────┬──────────────────┬────────────┬────────┬─────────┐
│ Capability              │ Current State    │ SLA Target │Achieved│ Gap     │
├─────────────────────────┼──────────────────┼────────────┼────────┼─────────┤
│ System Availability     │                  │     %      │    %   │         │
├─────────────────────────┼──────────────────┼────────────┼────────┼─────────┤
│ Backup Frequency        │                  │            │        │         │
├─────────────────────────┼──────────────────┼────────────┼────────┼─────────┤
│ Recovery Time           │                  │   hours    │  hours │         │
├─────────────────────────┼──────────────────┼────────────┼────────┼─────────┤
│ Incident Response       │                  │            │        │         │
└─────────────────────────┴──────────────────┴────────────┴────────┴─────────┘

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-10: Gap Analysis Worksheet

**Purpose:** Systematic identification and prioritization of gaps.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-10: GAP ANALYSIS WORKSHEET
══════════════════════════════════════════════════════════════════════════════

Organization: ________________________________________________________________
Reference Architecture Used: ⬜ PDU    ⬜ RA    ⬜ SDA
Date: ________________________________________________________________________
Analyst: _____________________________________________________________________

ELEMENT-BY-ELEMENT COMPARISON:
───────────────────────────────────────────────────────────────────────────────

┌────────┬────────────────────────┬─────────────┬───────────────┬─────────────┐
│ RA ID  │ RA Element             │ AS-IS Match │ Match Quality │ Gap Notes   │
├────────┼────────────────────────┼─────────────┼───────────────┼─────────────┤
│        │                        │ ⬜ Yes      │ Full/Partial  │             │
│        │                        │ ⬜ No       │               │             │
├────────┼────────────────────────┼─────────────┼───────────────┼─────────────┤
│        │                        │ ⬜ Yes      │               │             │
│        │                        │ ⬜ No       │               │             │
├────────┼────────────────────────┼─────────────┼───────────────┼─────────────┤
│        │                        │ ⬜ Yes      │               │             │
│        │                        │ ⬜ No       │               │             │
├────────┼────────────────────────┼─────────────┼───────────────┼─────────────┤
│        │                        │ ⬜ Yes      │               │             │
│        │                        │ ⬜ No       │               │             │
├────────┼────────────────────────┼─────────────┼───────────────┼─────────────┤
│        │                        │ ⬜ Yes      │               │             │
│        │                        │ ⬜ No       │               │             │
└────────┴────────────────────────┴─────────────┴───────────────┴─────────────┘

GAP REGISTER:
───────────────────────────────────────────────────────────────────────────────

┌───────┬──────────────────────────────┬──────────┬──────────┬─────────┬──────┐
│Gap ID │ Gap Description              │ Category │ Gap Type │ Severity│ Prio │
├───────┼──────────────────────────────┼──────────┼──────────┼─────────┼──────┤
│ G001  │                              │ Cap/App/ │ Missing/ │ Crit/   │ Must/│
│       │                              │ Data/Tech│ Non-conf/│ Maj/Min │Should│
│       │                              │          │ Maturity │         │/Could│
├───────┼──────────────────────────────┼──────────┼──────────┼─────────┼──────┤
│ G002  │                              │          │          │         │      │
├───────┼──────────────────────────────┼──────────┼──────────┼─────────┼──────┤
│ G003  │                              │          │          │         │      │
├───────┼──────────────────────────────┼──────────┼──────────┼─────────┼──────┤
│ G004  │                              │          │          │         │      │
├───────┼──────────────────────────────┼──────────┼──────────┼─────────┼──────┤
│ G005  │                              │          │          │         │      │
├───────┼──────────────────────────────┼──────────┼──────────┼─────────┼──────┤
│ G006  │                              │          │          │         │      │
├───────┼──────────────────────────────┼──────────┼──────────┼─────────┼──────┤
│ G007  │                              │          │          │         │      │
├───────┼──────────────────────────────┼──────────┼──────────┼─────────┼──────┤
│ G008  │                              │          │          │         │      │
├───────┼──────────────────────────────┼──────────┼──────────┼─────────┼──────┤
│ G009  │                              │          │          │         │      │
├───────┼──────────────────────────────┼──────────┼──────────┼─────────┼──────┤
│ G010  │                              │          │          │         │      │
└───────┴──────────────────────────────┴──────────┴──────────┴─────────┴──────┘

PRIORITIZATION SUMMARY:
───────────────────────────────────────────────────────────────────────────────

┌───────────────────────┬─────────────┬───────────────────┬──────────────────┐
│ Priority              │ Count       │ Estimated Effort  │ % of Total       │
├───────────────────────┼─────────────┼───────────────────┼──────────────────┤
│ Must Have             │             │       p-m         │         %        │
├───────────────────────┼─────────────┼───────────────────┼──────────────────┤
│ Should Have           │             │       p-m         │         %        │
├───────────────────────┼─────────────┼───────────────────┼──────────────────┤
│ Could Have            │             │       p-m         │         %        │
├───────────────────────┼─────────────┼───────────────────┼──────────────────┤
│ Won't Have (this time)│             │       N/A         │         %        │
└───────────────────────┴─────────────┴───────────────────┴──────────────────┘

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-11: ASSESS Summary Template

**Purpose:** Consolidated documentation of all ASSESS phase outputs with sign-off.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-11: ASSESS PHASE SUMMARY
══════════════════════════════════════════════════════════════════════════════

Organization: ________________________________________________________________
Assessment Period: ___________________ to ___________________
Project Lead: ________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
1. INPUTS FROM DISCOVER PHASE
══════════════════════════════════════════════════════════════════════════════

Organization Type:        ⬜ PDU    ⬜ RA    ⬜ SDA
DPI Readiness Level:      ⬜ Level 1    ⬜ Level 2    ⬜ Level 3
Selected RA: _________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
2. AS-IS ARCHITECTURE SUMMARY
══════════════════════════════════════════════════════════════════════════════

BUSINESS ARCHITECTURE:
───────────────────────────────────────────────────────────────────────────────
Services Documented: ________ (Digital: ____%)
Capabilities Assessed: ________
  - Full: ________ (____%)
  - Partial: ________ (____%)
  - None: ________ (____%)

APPLICATION ARCHITECTURE:
───────────────────────────────────────────────────────────────────────────────
Applications Inventoried: ________
  - 🟢 Healthy: ________ (____%)
  - 🟡 Adequate: ________ (____%)
  - 🔴 Problematic: ________ (____%)
  - ⚫ End-of-Life: ________ (____%)
DPI Integration: ________ of ________ components integrated

DATA ARCHITECTURE:
───────────────────────────────────────────────────────────────────────────────
Data Domains Documented: ________
Overall Data Quality: ⬜ High    ⬜ Medium    ⬜ Low
Data Governance: ⬜ Established    ⬜ Developing    ⬜ Initial

TECHNOLOGY ARCHITECTURE:
───────────────────────────────────────────────────────────────────────────────
Hosting Model: ⬜ On-Premise    ⬜ Cloud    ⬜ Hybrid
Technical Debt Items: ________ (High Risk: ________)
Security Compliance: ⬜ Compliant    ⬜ Partial    ⬜ Non-compliant

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
┌───────────────────────┬─────────────┬───────────────────┬──────────────────┐
│ Priority              │ Count       │ Est. Effort       │ % of Total       │
├───────────────────────┼─────────────┼───────────────────┼──────────────────┤
│ Must Have             │             │       p-m         │         %        │
│ Should Have           │             │       p-m         │         %        │
│ Could Have            │             │       p-m         │         %        │
│ Won't Have            │             │       N/A         │         %        │
└───────────────────────┴─────────────┴───────────────────┴──────────────────┘

TOP 10 PRIORITY GAPS:
───────────────────────────────────────────────────────────────────────────────
1. ___________________________________________________________________________
2. ___________________________________________________________________________
3. ___________________________________________________________________________
4. ___________________________________________________________________________
5. ___________________________________________________________________________
6. ___________________________________________________________________________
7. ___________________________________________________________________________
8. ___________________________________________________________________________
9. ___________________________________________________________________________
10. __________________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
4. RECOMMENDATION
══════════════════════════════════════════════════════════════════════════════

PROCEED TO ADAPT PHASE: ⬜ YES    ⬜ NO (with conditions)    ⬜ DELAY

Estimated Transformation Scope:
  - Total Effort (Must + Should): ________ person-months
  - Suggested Duration: ________ months

══════════════════════════════════════════════════════════════════════════════
SIGN-OFF
══════════════════════════════════════════════════════════════════════════════

Prepared by: _________________________ Date: _______________
Reviewed by: _________________________ Date: _______________
Approved by: _________________________ Date: _______________

Attachments:
⬜ A. AS-IS Architecture Document
⬜ B. Gap Analysis Report
⬜ C. Prioritized Gap Register

══════════════════════════════════════════════════════════════════════════════
```

---

## 5. ADAPT PHASE TOOLS

### TK-12: TO-BE Architecture Template

**Purpose:** Document the tailored target state architecture.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-12: TO-BE ARCHITECTURE DOCUMENT
══════════════════════════════════════════════════════════════════════════════

Organization: ________________________________________________________________
Reference Architecture Base: ⬜ PDU    ⬜ RA    ⬜ SDA
Date: ________________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
1. ARCHITECTURE VISION
══════════════════════════════════════════════════════════════════════════════

Target State Vision Statement:
___________________________________________________________________________
___________________________________________________________________________
___________________________________________________________________________

Architecture Principles Applied:
1. _______________________________________________________________________
2. _______________________________________________________________________
3. _______________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
2. TO-BE BUSINESS ARCHITECTURE
══════════════════════════════════════════════════════════════════════════════

Tailored Capability Map Summary:
  - RA Capabilities Included: ________ / ________
  - RA Capabilities Removed: ________ (justified)
  - Organization-Specific Added: ________

Target Services:
  - Total: ________ (Target Digital: ____%)

══════════════════════════════════════════════════════════════════════════════
3. TO-BE APPLICATION ARCHITECTURE
══════════════════════════════════════════════════════════════════════════════

┌───────┬─────────────────┬──────────────────┬───────────────┬──────────────┐
│RA App │ RA Application  │ TO-BE Decision   │ Implementation│ DPI/BB       │
│ ID    │                 │                  │ Approach      │ Integration  │
├───────┼─────────────────┼──────────────────┼───────────────┼──────────────┤
│       │                 │ Retain/Enhance/  │ Build/Buy     │              │
│       │                 │ Replace/New      │               │              │
├───────┼─────────────────┼──────────────────┼───────────────┼──────────────┤
│       │                 │                  │               │              │
├───────┼─────────────────┼──────────────────┼───────────────┼──────────────┤
│       │                 │                  │               │              │
└───────┴─────────────────┴──────────────────┴───────────────┴──────────────┘

Application Summary:
  - Retain: ________    - Enhance: ________
  - Replace: ________   - New: ________
  - Build: ________     - Buy: ________

══════════════════════════════════════════════════════════════════════════════
4. TO-BE DATA ARCHITECTURE
══════════════════════════════════════════════════════════════════════════════

Data Domains Defined: ________
Data Quality Targets: ⬜ Defined
Data Governance Model: ⬜ Defined
Data Migration Required: ⬜ Yes (________ domains)  ⬜ No

══════════════════════════════════════════════════════════════════════════════
5. TO-BE TECHNOLOGY ARCHITECTURE
══════════════════════════════════════════════════════════════════════════════

Platform Tier Selected: ⬜ Basic    ⬜ Standard    ⬜ Enterprise
Hosting Strategy: ⬜ On-Premise    ⬜ Cloud    ⬜ Hybrid
Security Requirements: ⬜ Defined

══════════════════════════════════════════════════════════════════════════════
6. VALIDATION
══════════════════════════════════════════════════════════════════════════════

RA Inheritance Compliance: ⬜ Verified
All Tailoring Decisions Logged: ⬜ Yes
Stakeholder Validation: ⬜ Complete

Approved by: _________________________ Date: _______________

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-13: Tailoring Decision Log

**Purpose:** Record and justify all customization decisions.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-13: TAILORING DECISION LOG
══════════════════════════════════════════════════════════════════════════════

Organization: ________________________________________________________________
Reference Architecture: ⬜ PDU    ⬜ RA    ⬜ SDA
Date: ________________________________________________________________________

INSTRUCTIONS:
Document every modification from the Reference Architecture. All deviations
must have clear justification and approval.

┌────────┬────────┬────────────────┬───────────┬───────────────┬────────────┐
│Decision│ RA     │ Decision       │ Decision  │ Justification │ Approved   │
│ ID     │ Element│ Description    │ Type      │               │ By         │
├────────┼────────┼────────────────┼───────────┼───────────────┼────────────┤
│ TD-001 │        │                │ Add/      │               │            │
│        │        │                │ Remove/   │               │            │
│        │        │                │ Modify    │               │            │
├────────┼────────┼────────────────┼───────────┼───────────────┼────────────┤
│ TD-002 │        │                │           │               │            │
├────────┼────────┼────────────────┼───────────┼───────────────┼────────────┤
│ TD-003 │        │                │           │               │            │
├────────┼────────┼────────────────┼───────────┼───────────────┼────────────┤
│ TD-004 │        │                │           │               │            │
├────────┼────────┼────────────────┼───────────┼───────────────┼────────────┤
│ TD-005 │        │                │           │               │            │
├────────┼────────┼────────────────┼───────────┼───────────────┼────────────┤
│ TD-006 │        │                │           │               │            │
├────────┼────────┼────────────────┼───────────┼───────────────┼────────────┤
│ TD-007 │        │                │           │               │            │
├────────┼────────┼────────────────┼───────────┼───────────────┼────────────┤
│ TD-008 │        │                │           │               │            │
├────────┼────────┼────────────────┼───────────┼───────────────┼────────────┤
│ TD-009 │        │                │           │               │            │
├────────┼────────┼────────────────┼───────────┼───────────────┼────────────┤
│ TD-010 │        │                │           │               │            │
└────────┴────────┴────────────────┴───────────┴───────────────┴────────────┘

DECISION TYPES:
- ADD: Adding element not in RA (organization-specific extension)
- REMOVE: Removing element from RA (must justify why not applicable)
- MODIFY: Changing element definition (terminology, scope, etc.)

SUMMARY:
───────────────────────────────────────────────────────────────────────────────
Total Tailoring Decisions: ________
  - Additions: ________
  - Removals: ________
  - Modifications: ________

All Decisions Approved: ⬜ Yes    ⬜ No (pending: ________)

Log Maintained By: ___________________________________________________________

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-14: Capability Adaptation Worksheet

**Purpose:** Document capability tailoring decisions.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-14: CAPABILITY ADAPTATION WORKSHEET
══════════════════════════════════════════════════════════════════════════════

Organization: ________________________________________________________________
Reference Architecture: ⬜ PDU    ⬜ RA    ⬜ SDA
Date: ________________________________________________________________________

RA CAPABILITY CONFIRMATION:
───────────────────────────────────────────────────────────────────────────────

┌────────┬─────────────────────────────┬──────────┬────────────────────────────┐
│RA Cap  │ Capability Name             │ Include? │ If NO, Rationale           │
│ ID     │                             │          │                            │
├────────┼─────────────────────────────┼──────────┼────────────────────────────┤
│        │                             │ ⬜ Yes   │                            │
│        │                             │ ⬜ No    │                            │
├────────┼─────────────────────────────┼──────────┼────────────────────────────┤
│        │                             │ ⬜ Yes   │                            │
│        │                             │ ⬜ No    │                            │
├────────┼─────────────────────────────┼──────────┼────────────────────────────┤
│        │                             │ ⬜ Yes   │                            │
│        │                             │ ⬜ No    │                            │
├────────┼─────────────────────────────┼──────────┼────────────────────────────┤
│        │                             │ ⬜ Yes   │                            │
│        │                             │ ⬜ No    │                            │
├────────┼─────────────────────────────┼──────────┼────────────────────────────┤
│        │                             │ ⬜ Yes   │                            │
│        │                             │ ⬜ No    │                            │
└────────┴─────────────────────────────┴──────────┴────────────────────────────┘

ORGANIZATION-SPECIFIC CAPABILITIES (ADDITIONS):
───────────────────────────────────────────────────────────────────────────────

┌──────────┬──────────────────────┬──────────────────────┬─────────────────────┐
│ New ID   │ Capability Name      │ Description          │ Justification       │
├──────────┼──────────────────────┼──────────────────────┼─────────────────────┤
│ C*.1     │                      │                      │                     │
├──────────┼──────────────────────┼──────────────────────┼─────────────────────┤
│ C*.2     │                      │                      │                     │
├──────────┼──────────────────────┼──────────────────────┼─────────────────────┤
│ C*.3     │                      │                      │                     │
└──────────┴──────────────────────┴──────────────────────┴─────────────────────┘

INHERITANCE VALIDATION:
───────────────────────────────────────────────────────────────────────────────

⬜ All PDU capabilities present (if RA or SDA)
⬜ All RA capabilities present (if SDA)
⬜ No capability numbering conflicts
⬜ All removed capabilities have documented justification
⬜ All added capabilities have documented rationale

SUMMARY:
───────────────────────────────────────────────────────────────────────────────
RA Capabilities Confirmed: ________ / ________
RA Capabilities Removed: ________
Organization-Specific Added: ________
Total TO-BE Capabilities: ________

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-15: Application Mapping Worksheet

**Purpose:** Map RA applications to AS-IS and define TO-BE decisions.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-15: APPLICATION MAPPING WORKSHEET
══════════════════════════════════════════════════════════════════════════════

Organization: ________________________________________________________________
Reference Architecture: ⬜ PDU    ⬜ RA    ⬜ SDA
Date: ________________________________________________________________________

┌────────┬──────────────────┬─────────────────┬─────────────┬────────┬────────┐
│RA App  │ RA Application   │ AS-IS System    │ Mapping     │Decision│Build/  │
│ ID     │                  │                 │ Status      │        │Buy     │
├────────┼──────────────────┼─────────────────┼─────────────┼────────┼────────┤
│        │                  │                 │ Full/       │Retain/ │        │
│        │                  │                 │ Partial/    │Enhance/│        │
│        │                  │                 │ None        │Replace/│        │
│        │                  │                 │             │New     │        │
├────────┼──────────────────┼─────────────────┼─────────────┼────────┼────────┤
│        │                  │                 │             │        │        │
├────────┼──────────────────┼─────────────────┼─────────────┼────────┼────────┤
│        │                  │                 │             │        │        │
├────────┼──────────────────┼─────────────────┼─────────────┼────────┼────────┤
│        │                  │                 │             │        │        │
├────────┼──────────────────┼─────────────────┼─────────────┼────────┼────────┤
│        │                  │                 │             │        │        │
├────────┼──────────────────┼─────────────────┼─────────────┼────────┼────────┤
│        │                  │                 │             │        │        │
├────────┼──────────────────┼─────────────────┼─────────────┼────────┼────────┤
│        │                  │                 │             │        │        │
├────────┼──────────────────┼─────────────────┼─────────────┼────────┼────────┤
│        │                  │                 │             │        │        │
├────────┼──────────────────┼─────────────────┼─────────────┼────────┼────────┤
│        │                  │                 │             │        │        │
├────────┼──────────────────┼─────────────────┼─────────────┼────────┼────────┤
│        │                  │                 │             │        │        │
└────────┴──────────────────┴─────────────────┴─────────────┴────────┴────────┘

DPI/BUILDING BLOCK INTEGRATION REQUIREMENTS:
───────────────────────────────────────────────────────────────────────────────

┌────────┬──────────────────┬───────────────────┬──────────────┬──────────────┐
│App ID  │ Application      │ BB Integration    │ Integration  │ Status       │
│        │                  │                   │ Pattern      │              │
├────────┼──────────────────┼───────────────────┼──────────────┼──────────────┤
│        │                  │ ⬜ Identity BB    │              │ Required/    │
│        │                  │ ⬜ Info Mediator  │              │ Recommended  │
│        │                  │ ⬜ Payments BB    │              │              │
│        │                  │ ⬜ Registries BB  │              │              │
│        │                  │ ⬜ Workflow BB    │              │              │
├────────┼──────────────────┼───────────────────┼──────────────┼──────────────┤
│        │                  │                   │              │              │
├────────┼──────────────────┼───────────────────┼──────────────┼──────────────┤
│        │                  │                   │              │              │
└────────┴──────────────────┴───────────────────┴──────────────┴──────────────┘

SUMMARY:
───────────────────────────────────────────────────────────────────────────────
Applications Mapped: ________ / ________
  - Retain: ________    - Enhance: ________
  - Replace: ________   - New: ________
  - Build: ________     - Buy: ________

DPI/BB Integrations Required: ________

══════════════════════════════════════════════════════════════════════════════
```

---

## 6. PLAN PHASE TOOLS

### TK-16: Implementation Roadmap Template

**Purpose:** Visual multi-year implementation plan.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-16: IMPLEMENTATION ROADMAP
══════════════════════════════════════════════════════════════════════════════

Organization: ________________________________________________________________
Planning Horizon: ____________ to ____________
Date: ________________________________________________________________________

ROADMAP OVERVIEW:
───────────────────────────────────────────────────────────────────────────────

          Year 1             Year 2             Year 3             Year 4
    ┌─────────────────┬─────────────────┬─────────────────┬─────────────────┐
    │  Q1  Q2  Q3  Q4 │  Q1  Q2  Q3  Q4 │  Q1  Q2  Q3  Q4 │  Q1  Q2  Q3  Q4 │
────┼─────────────────┼─────────────────┼─────────────────┼─────────────────┤
Ph 1│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│                 │                 │                 │
    │ [Foundation]    │                 │                 │                 │
────┼─────────────────┼─────────────────┼─────────────────┼─────────────────┤
Ph 2│                 │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│                 │                 │
    │                 │ [Core Systems]  │                 │                 │
────┼─────────────────┼─────────────────┼─────────────────┼─────────────────┤
Ph 3│                 │                 │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│                 │
    │                 │                 │ [Enhancement]   │                 │
────┼─────────────────┼─────────────────┼─────────────────┼─────────────────┤
Ph 4│                 │                 │                 │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
    │                 │                 │                 │ [Optimization]  │
────┴─────────────────┴─────────────────┴─────────────────┴─────────────────┘
    ●                 ●                 ●                 ●
    Gate 1            Gate 2            Gate 3            Gate 4

PHASE SUMMARY:
───────────────────────────────────────────────────────────────────────────────

┌───────┬────────────────────────┬────────────┬───────────┬──────────────────┐
│ Phase │ Name / Objectives      │ Duration   │ Budget    │ Key Deliverables │
├───────┼────────────────────────┼────────────┼───────────┼──────────────────┤
│ 1     │                        │            │           │                  │
├───────┼────────────────────────┼────────────┼───────────┼──────────────────┤
│ 2     │                        │            │           │                  │
├───────┼────────────────────────┼────────────┼───────────┼──────────────────┤
│ 3     │                        │            │           │                  │
├───────┼────────────────────────┼────────────┼───────────┼──────────────────┤
│ 4     │                        │            │           │                  │
└───────┴────────────────────────┴────────────┴───────────┴──────────────────┘

KEY MILESTONES:
───────────────────────────────────────────────────────────────────────────────

┌────────────┬────────────────────────────────────────┬─────────────────────┐
│ Date       │ Milestone                              │ Gate                │
├────────────┼────────────────────────────────────────┼─────────────────────┤
│            │                                        │                     │
├────────────┼────────────────────────────────────────┼─────────────────────┤
│            │                                        │                     │
├────────────┼────────────────────────────────────────┼─────────────────────┤
│            │                                        │                     │
├────────────┼────────────────────────────────────────┼─────────────────────┤
│            │                                        │                     │
└────────────┴────────────────────────────────────────┴─────────────────────┘

DEPENDENCIES:
───────────────────────────────────────────────────────────────────────────────

┌────────────────────────┬────────────────────────┬────────────────────────┐
│ Predecessor            │ Successor              │ Type                   │
├────────────────────────┼────────────────────────┼────────────────────────┤
│                        │                        │ Technical/Resource/    │
│                        │                        │ External               │
├────────────────────────┼────────────────────────┼────────────────────────┤
│                        │                        │                        │
├────────────────────────┼────────────────────────┼────────────────────────┤
│                        │                        │                        │
└────────────────────────┴────────────────────────┴────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-17: Business Case Template

**Purpose:** Investment justification with costs, benefits, and ROI.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-17: BUSINESS CASE
══════════════════════════════════════════════════════════════════════════════

EXECUTIVE SUMMARY
───────────────────────────────────────────────────────────────────────────────

Project Name: ________________________________________________________________
Organization: ________________________________________________________________
Date: ________________________________________________________________________
Prepared By: _________________________________________________________________

Brief Description:
___________________________________________________________________________
___________________________________________________________________________

Total Investment Required: ___________________________________________________
Expected ROI: _________________ Payback Period: ______________________________

Recommendation: ⬜ Proceed    ⬜ Proceed with conditions    ⬜ Do not proceed

══════════════════════════════════════════════════════════════════════════════
1. CURRENT STATE COSTS (Annual)
══════════════════════════════════════════════════════════════════════════════

┌────────────────────────────────┬─────────────────┬────────────────────────┐
│ Cost Category                  │ Annual Cost     │ Notes                  │
├────────────────────────────────┼─────────────────┼────────────────────────┤
│ Legacy System Maintenance      │                 │                        │
├────────────────────────────────┼─────────────────┼────────────────────────┤
│ Manual Processing Labor        │                 │                        │
├────────────────────────────────┼─────────────────┼────────────────────────┤
│ Error Correction / Rework      │                 │                        │
├────────────────────────────────┼─────────────────┼────────────────────────┤
│ Compliance Penalties           │                 │                        │
├────────────────────────────────┼─────────────────┼────────────────────────┤
│ Other Current Costs            │                 │                        │
├────────────────────────────────┼─────────────────┼────────────────────────┤
│ **TOTAL CURRENT STATE COSTS**  │ **            **│                        │
└────────────────────────────────┴─────────────────┴────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
2. INVESTMENT REQUIRED
══════════════════════════════════════════════════════════════════════════════

┌────────────────────────────────┬────────┬────────┬────────┬────────┬───────┐
│ Investment Category            │ Year 1 │ Year 2 │ Year 3 │ Year 4 │ Total │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ Software / Licenses            │        │        │        │        │       │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ Implementation Services        │        │        │        │        │       │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ Infrastructure                 │        │        │        │        │       │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ Training / Change Management   │        │        │        │        │       │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ Project Management             │        │        │        │        │       │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ Contingency (15-20%)           │        │        │        │        │       │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ **TOTAL INVESTMENT**           │ **   **│ **   **│ **   **│ **   **│**   **│
└────────────────────────────────┴────────┴────────┴────────┴────────┴───────┘

══════════════════════════════════════════════════════════════════════════════
3. EXPECTED BENEFITS (Annual, once fully realized)
══════════════════════════════════════════════════════════════════════════════

┌────────────────────────────────┬─────────────────┬────────────────────────┐
│ Benefit Category               │ Annual Value    │ Calculation Basis      │
├────────────────────────────────┼─────────────────┼────────────────────────┤
│ Operational Efficiency         │                 │                        │
├────────────────────────────────┼─────────────────┼────────────────────────┤
│ Reduced Processing Time        │                 │                        │
├────────────────────────────────┼─────────────────┼────────────────────────┤
│ Error Reduction                │                 │                        │
├────────────────────────────────┼─────────────────┼────────────────────────┤
│ Improved Compliance            │                 │                        │
├────────────────────────────────┼─────────────────┼────────────────────────┤
│ Revenue Improvement            │                 │                        │
├────────────────────────────────┼─────────────────┼────────────────────────┤
│ **TOTAL ANNUAL BENEFITS**      │ **            **│                        │
└────────────────────────────────┴─────────────────┴────────────────────────┘

NON-FINANCIAL BENEFITS:
1. _______________________________________________________________________
2. _______________________________________________________________________
3. _______________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
4. FINANCIAL ANALYSIS
══════════════════════════════════════════════════════════════════════════════

┌────────────────────────────────┬────────┬────────┬────────┬────────┬───────┐
│ Item                           │ Year 1 │ Year 2 │ Year 3 │ Year 4 │ Year 5│
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ Investment                     │        │        │        │        │       │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ Operating Costs (New)          │        │        │        │        │       │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ Total Costs                    │        │        │        │        │       │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ Benefits (Savings)             │        │        │        │        │       │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ **Net Cash Flow**              │        │        │        │        │       │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ **Cumulative Cash Flow**       │        │        │        │        │       │
└────────────────────────────────┴────────┴────────┴────────┴────────┴───────┘

KEY METRICS:
  - Total Investment: _______________
  - NPV (5 years, __% discount): _______________
  - ROI: _______________%
  - Payback Period: _______________ years

══════════════════════════════════════════════════════════════════════════════
5. RISKS
══════════════════════════════════════════════════════════════════════════════

┌────────────────────────────────┬────────────┬────────────┬─────────────────┐
│ Risk                           │ Probability│ Impact     │ Mitigation      │
├────────────────────────────────┼────────────┼────────────┼─────────────────┤
│                                │ H/M/L      │ H/M/L      │                 │
├────────────────────────────────┼────────────┼────────────┼─────────────────┤
│                                │            │            │                 │
├────────────────────────────────┼────────────┼────────────┼─────────────────┤
│                                │            │            │                 │
└────────────────────────────────┴────────────┴────────────┴─────────────────┘

══════════════════════════════════════════════════════════════════════════════
6. APPROVAL
══════════════════════════════════════════════════════════════════════════════

Prepared by: _________________________ Date: _______________
Reviewed by: _________________________ Date: _______________
Approved by: _________________________ Date: _______________

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-18: Phase Definition Template

**Purpose:** Detailed definition of each implementation phase.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-18: PHASE DEFINITION
══════════════════════════════════════════════════════════════════════════════

Phase Number: ______    Phase Name: __________________________________________
Start Date: _______________    End Date: _______________
Duration: _______________ months

══════════════════════════════════════════════════════════════════════════════
1. PHASE OBJECTIVES
══════════════════════════════════════════════════════════════════════════════

Primary Objective:
___________________________________________________________________________
___________________________________________________________________________

Secondary Objectives:
1. _______________________________________________________________________
2. _______________________________________________________________________
3. _______________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
2. SCOPE
══════════════════════════════════════════════════════════════════════════════

IN SCOPE:
┌───────────┬────────────────────────────────────────────────────────────────┐
│ Category  │ Items Included                                                 │
├───────────┼────────────────────────────────────────────────────────────────┤
│Capabilities│                                                               │
├───────────┼────────────────────────────────────────────────────────────────┤
│Applications│                                                               │
├───────────┼────────────────────────────────────────────────────────────────┤
│ Data      │                                                                │
├───────────┼────────────────────────────────────────────────────────────────┤
│Technology │                                                                │
└───────────┴────────────────────────────────────────────────────────────────┘

OUT OF SCOPE (Deferred to later phases):
1. _______________________________________________________________________
2. _______________________________________________________________________
3. _______________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
3. INITIATIVES IN THIS PHASE
══════════════════════════════════════════════════════════════════════════════

┌─────────┬──────────────────────────────┬────────────┬───────────┬──────────┐
│Init ID  │ Initiative Name              │ Type       │ Priority  │ Effort   │
├─────────┼──────────────────────────────┼────────────┼───────────┼──────────┤
│         │                              │            │ Must/     │          │
│         │                              │            │ Should    │          │
├─────────┼──────────────────────────────┼────────────┼───────────┼──────────┤
│         │                              │            │           │          │
├─────────┼──────────────────────────────┼────────────┼───────────┼──────────┤
│         │                              │            │           │          │
├─────────┼──────────────────────────────┼────────────┼───────────┼──────────┤
│         │                              │            │           │          │
└─────────┴──────────────────────────────┴────────────┴───────────┴──────────┘

══════════════════════════════════════════════════════════════════════════════
4. DELIVERABLES
══════════════════════════════════════════════════════════════════════════════

┌────────────────────────────────────────┬──────────────────┬─────────────────┐
│ Deliverable                            │ Due Date         │ Owner           │
├────────────────────────────────────────┼──────────────────┼─────────────────┤
│                                        │                  │                 │
├────────────────────────────────────────┼──────────────────┼─────────────────┤
│                                        │                  │                 │
├────────────────────────────────────────┼──────────────────┼─────────────────┤
│                                        │                  │                 │
├────────────────────────────────────────┼──────────────────┼─────────────────┤
│                                        │                  │                 │
└────────────────────────────────────────┴──────────────────┴─────────────────┘

══════════════════════════════════════════════════════════════════════════════
5. EXIT CRITERIA (Gate Requirements)
══════════════════════════════════════════════════════════════════════════════

⬜ All Must Have deliverables complete
⬜ All critical defects resolved
⬜ User acceptance testing passed
⬜ Go-live readiness verified
⬜ Stakeholder sign-off obtained
⬜ _______________________________________________________________________
⬜ _______________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
6. RESOURCES
══════════════════════════════════════════════════════════════════════════════

Budget: _______________

┌──────────────────────────────┬───────────────┬─────────────────────────────┐
│ Role                         │ FTE Required  │ Source                      │
├──────────────────────────────┼───────────────┼─────────────────────────────┤
│                              │               │ Internal/Contractor/Vendor  │
├──────────────────────────────┼───────────────┼─────────────────────────────┤
│                              │               │                             │
├──────────────────────────────┼───────────────┼─────────────────────────────┤
│                              │               │                             │
└──────────────────────────────┴───────────────┴─────────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
7. DEPENDENCIES & RISKS
══════════════════════════════════════════════════════════════════════════════

Dependencies:
1. _______________________________________________________________________
2. _______________________________________________________________________

Key Risks:
1. _______________________________________________________________________
2. _______________________________________________________________________

Phase Owner: _________________________ Approved: _______________

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-19: Risk Register Template

**Purpose:** Document and track implementation risks.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-19: RISK REGISTER
══════════════════════════════════════════════════════════════════════════════

Project: _____________________________________________________________________
Date: ________________________________________________________________________

┌───────┬────────────────┬─────────┬───────┬───────┬───────────────┬─────────┐
│Risk ID│ Risk           │Category │ Prob. │Impact │ Mitigation    │ Owner   │
│       │ Description    │         │       │       │ Strategy      │         │
├───────┼────────────────┼─────────┼───────┼───────┼───────────────┼─────────┤
│ R001  │                │Tech/Org/│ H/M/L │ H/M/L │               │         │
│       │                │External/│       │       │               │         │
│       │                │Resource │       │       │               │         │
├───────┼────────────────┼─────────┼───────┼───────┼───────────────┼─────────┤
│ R002  │                │         │       │       │               │         │
├───────┼────────────────┼─────────┼───────┼───────┼───────────────┼─────────┤
│ R003  │                │         │       │       │               │         │
├───────┼────────────────┼─────────┼───────┼───────┼───────────────┼─────────┤
│ R004  │                │         │       │       │               │         │
├───────┼────────────────┼─────────┼───────┼───────┼───────────────┼─────────┤
│ R005  │                │         │       │       │               │         │
├───────┼────────────────┼─────────┼───────┼───────┼───────────────┼─────────┤
│ R006  │                │         │       │       │               │         │
├───────┼────────────────┼─────────┼───────┼───────┼───────────────┼─────────┤
│ R007  │                │         │       │       │               │         │
├───────┼────────────────┼─────────┼───────┼───────┼───────────────┼─────────┤
│ R008  │                │         │       │       │               │         │
├───────┼────────────────┼─────────┼───────┼───────┼───────────────┼─────────┤
│ R009  │                │         │       │       │               │         │
├───────┼────────────────┼─────────┼───────┼───────┼───────────────┼─────────┤
│ R010  │                │         │       │       │               │         │
└───────┴────────────────┴─────────┴───────┴───────┴───────────────┴─────────┘

RISK MATRIX:
───────────────────────────────────────────────────────────────────────────────

                          IMPACT
                    Low      Medium     High
              ┌─────────┬─────────┬─────────┐
      High    │ Medium  │  High   │ Critical│
              ├─────────┼─────────┼─────────┤
PROB  Medium  │  Low    │ Medium  │  High   │
              ├─────────┼─────────┼─────────┤
      Low     │  Low    │  Low    │ Medium  │
              └─────────┴─────────┴─────────┘

SUMMARY:
───────────────────────────────────────────────────────────────────────────────
Total Risks: ________
  - Critical: ________
  - High: ________
  - Medium: ________
  - Low: ________

Last Updated: _______________    Updated By: _______________

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-20: Resource Estimation Template

**Purpose:** Plan resources and budget.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-20: RESOURCE ESTIMATION
══════════════════════════════════════════════════════════════════════════════

Project: _____________________________________________________________________
Date: ________________________________________________________________________

STAFFING REQUIREMENTS:
───────────────────────────────────────────────────────────────────────────────

┌────────────────────────┬────────┬────────┬────────┬────────┬────────┬───────┐
│ Role                   │ Ph 1   │ Ph 2   │ Ph 3   │ Ph 4   │ Total  │Source │
│                        │ (FTE)  │ (FTE)  │ (FTE)  │ (FTE)  │ (p-m)  │       │
├────────────────────────┼────────┼────────┼────────┼────────┼────────┼───────┤
│ Project Manager        │        │        │        │        │        │ Int/  │
│                        │        │        │        │        │        │ Ext   │
├────────────────────────┼────────┼────────┼────────┼────────┼────────┼───────┤
│ Business Analyst       │        │        │        │        │        │       │
├────────────────────────┼────────┼────────┼────────┼────────┼────────┼───────┤
│ Solution Architect     │        │        │        │        │        │       │
├────────────────────────┼────────┼────────┼────────┼────────┼────────┼───────┤
│ Developer              │        │        │        │        │        │       │
├────────────────────────┼────────┼────────┼────────┼────────┼────────┼───────┤
│ QA/Tester              │        │        │        │        │        │       │
├────────────────────────┼────────┼────────┼────────┼────────┼────────┼───────┤
│ Data Specialist        │        │        │        │        │        │       │
├────────────────────────┼────────┼────────┼────────┼────────┼────────┼───────┤
│ Change Manager         │        │        │        │        │        │       │
├────────────────────────┼────────┼────────┼────────┼────────┼────────┼───────┤
│ **TOTAL**              │ **   **│ **   **│ **   **│ **   **│ **   **│       │
└────────────────────────┴────────┴────────┴────────┴────────┴────────┴───────┘

BUDGET SUMMARY:
───────────────────────────────────────────────────────────────────────────────

┌────────────────────────────────┬────────┬────────┬────────┬────────┬───────┐
│ Category                       │ Ph 1   │ Ph 2   │ Ph 3   │ Ph 4   │ Total │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ Internal Staff                 │        │        │        │        │       │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ External Resources             │        │        │        │        │       │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ Software/Licenses              │        │        │        │        │       │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ Hardware/Infrastructure        │        │        │        │        │       │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ Training                       │        │        │        │        │       │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ Other                          │        │        │        │        │       │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ Contingency (___%)             │        │        │        │        │       │
├────────────────────────────────┼────────┼────────┼────────┼────────┼───────┤
│ **TOTAL**                      │ **   **│ **   **│ **   **│ **   **│**   **│
└────────────────────────────────┴────────┴────────┴────────┴────────┴───────┘

Estimated By: _________________________ Date: _______________

══════════════════════════════════════════════════════════════════════════════
```

---

## 7. EXECUTE & GOVERN PHASE TOOLS

### TK-21: Project EA Engagement Checklist

**Purpose:** Track EA engagement touchpoints throughout project lifecycle.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-21: PROJECT EA ENGAGEMENT CHECKLIST
══════════════════════════════════════════════════════════════════════════════

Project Name: ________________________________________________________________
Project ID: __________________________________________________________________
Project Manager: _____________________________________________________________
EA Lead: _____________________________________________________________________

ENGAGEMENT LEVEL DETERMINATION:
───────────────────────────────────────────────────────────────────────────────

┌────────────────────────────┬──────────────┬──────────────┬─────────────────┐
│ Factor                     │ Light (1pt)  │ Standard (2) │ Compreh. (3pt)  │
├────────────────────────────┼──────────────┼──────────────┼─────────────────┤
│ Budget                     │ < $100K      │ $100K-$1M    │ > $1M           │
│                            │ ⬜           │ ⬜           │ ⬜              │
├────────────────────────────┼──────────────┼──────────────┼─────────────────┤
│ Duration                   │ < 3 months   │ 3-12 months  │ > 12 months     │
│                            │ ⬜           │ ⬜           │ ⬜              │
├────────────────────────────┼──────────────┼──────────────┼─────────────────┤
│ Integration                │ None/Minimal │ Moderate     │ Complex         │
│                            │ ⬜           │ ⬜           │ ⬜              │
├────────────────────────────┼──────────────┼──────────────┼─────────────────┤
│ Data Sensitivity           │ Low          │ Medium       │ High            │
│                            │ ⬜           │ ⬜           │ ⬜              │
├────────────────────────────┼──────────────┼──────────────┼─────────────────┤
│ User Impact                │ < 100        │ 100-1000     │ > 1000          │
│                            │ ⬜           │ ⬜           │ ⬜              │
└────────────────────────────┴──────────────┴──────────────┴─────────────────┘

Total Score: ________    Engagement Level: ⬜ Light    ⬜ Standard    ⬜ Comprehensive

EA ENGAGEMENT TOUCHPOINTS:
───────────────────────────────────────────────────────────────────────────────

┌────────────────────┬──────────────┬──────────────┬─────────┬────────────────┐
│ Stage              │ Required?    │ Status       │ Date    │ EA Sign-off    │
├────────────────────┼──────────────┼──────────────┼─────────┼────────────────┤
│ **IDEA**           │ ⬜ Yes ⬜ No │ ⬜ Not Started│         │                │
│ Opportunity        │              │ ⬜ In Progress│         │                │
│ Evaluation         │              │ ⬜ Complete   │         │                │
├────────────────────┼──────────────┼──────────────┼─────────┼────────────────┤
│ **INITIATIVE**     │ ⬜ Yes ⬜ No │ ⬜ Not Started│         │                │
│ Budget             │              │ ⬜ In Progress│         │                │
│ Recommendation     │              │ ⬜ Complete   │         │                │
├────────────────────┼──────────────┼──────────────┼─────────┼────────────────┤
│ **PROJECT**        │ ⬜ Yes ⬜ No │ ⬜ Not Started│         │                │
│ Alignment          │              │ ⬜ In Progress│         │                │
│ Review             │              │ ⬜ Complete   │         │                │
├────────────────────┼──────────────┼──────────────┼─────────┼────────────────┤
│ **IMPLEMENTATION** │ ⬜ Yes ⬜ No │ ⬜ Not Started│         │                │
│ Solution Design    │              │ ⬜ In Progress│         │                │
│ Review             │              │ ⬜ Complete   │         │                │
├────────────────────┼──────────────┼──────────────┼─────────┼────────────────┤
│ **RELEASE**        │ ⬜ Yes ⬜ No │ ⬜ Not Started│         │                │
│ Compliance         │              │ ⬜ In Progress│         │                │
│ Verification       │              │ ⬜ Complete   │         │                │
└────────────────────┴──────────────┴──────────────┴─────────┴────────────────┘

NOTES:
___________________________________________________________________________
___________________________________________________________________________
___________________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-22: Architecture Compliance Assessment Form

**Purpose:** Verify solution compliance with architecture standards.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-22: ARCHITECTURE COMPLIANCE ASSESSMENT
══════════════════════════════════════════════════════════════════════════════

Project Name: ________________________________________________________________
Solution Name: _______________________________________________________________
Assessment Date: _____________________________________________________________
Assessor: ____________________________________________________________________

COMPLIANCE CHECKLIST:
───────────────────────────────────────────────────────────────────────────────

BUSINESS ARCHITECTURE:
┌────┬────────────────────────────────────────────┬──────────┬───────────────┐
│ #  │ Requirement                                │ Compliant│ Notes         │
├────┼────────────────────────────────────────────┼──────────┼───────────────┤
│ B1 │ Aligns with target capabilities            │ ⬜Y ⬜N  │               │
├────┼────────────────────────────────────────────┼──────────┼───────────────┤
│ B2 │ Supports defined business processes        │ ⬜Y ⬜N  │               │
├────┼────────────────────────────────────────────┼──────────┼───────────────┤
│ B3 │ Maps to RA services                        │ ⬜Y ⬜N  │               │
└────┴────────────────────────────────────────────┴──────────┴───────────────┘

APPLICATION ARCHITECTURE:
┌────┬────────────────────────────────────────────┬──────────┬───────────────┐
│ #  │ Requirement                                │ Compliant│ Notes         │
├────┼────────────────────────────────────────────┼──────────┼───────────────┤
│ A1 │ Uses approved Building Blocks              │ ⬜Y ⬜N  │               │
├────┼────────────────────────────────────────────┼──────────┼───────────────┤
│ A2 │ Follows integration patterns               │ ⬜Y ⬜N  │               │
├────┼────────────────────────────────────────────┼──────────┼───────────────┤
│ A3 │ DPI integration as specified               │ ⬜Y ⬜N  │               │
├────┼────────────────────────────────────────────┼──────────┼───────────────┤
│ A4 │ API standards followed                     │ ⬜Y ⬜N  │               │
└────┴────────────────────────────────────────────┴──────────┴───────────────┘

DATA ARCHITECTURE:
┌────┬────────────────────────────────────────────┬──────────┬───────────────┐
│ #  │ Requirement                                │ Compliant│ Notes         │
├────┼────────────────────────────────────────────┼──────────┼───────────────┤
│ D1 │ Data model aligns with RA domains          │ ⬜Y ⬜N  │               │
├────┼────────────────────────────────────────────┼──────────┼───────────────┤
│ D2 │ Data quality rules implemented             │ ⬜Y ⬜N  │               │
├────┼────────────────────────────────────────────┼──────────┼───────────────┤
│ D3 │ Data protection requirements met           │ ⬜Y ⬜N  │               │
└────┴────────────────────────────────────────────┴──────────┴───────────────┘

TECHNOLOGY ARCHITECTURE:
┌────┬────────────────────────────────────────────┬──────────┬───────────────┐
│ #  │ Requirement                                │ Compliant│ Notes         │
├────┼────────────────────────────────────────────┼──────────┼───────────────┤
│ T1 │ Uses approved technology stack             │ ⬜Y ⬜N  │               │
├────┼────────────────────────────────────────────┼──────────┼───────────────┤
│ T2 │ Security requirements implemented          │ ⬜Y ⬜N  │               │
├────┼────────────────────────────────────────────┼──────────┼───────────────┤
│ T3 │ Performance requirements met               │ ⬜Y ⬜N  │               │
├────┼────────────────────────────────────────────┼──────────┼───────────────┤
│ T4 │ Operational requirements addressed         │ ⬜Y ⬜N  │               │
└────┴────────────────────────────────────────────┴──────────┴───────────────┘

COMPLIANCE SUMMARY:
───────────────────────────────────────────────────────────────────────────────

Total Requirements: ________
  - Compliant: ________ (____%)
  - Non-Compliant: ________ (____%)

OVERALL RESULT:
⬜ COMPLIANT - Proceed to next stage
⬜ COMPLIANT WITH CONDITIONS - Proceed with documented conditions
⬜ NON-COMPLIANT - Requires revision
⬜ DISPENSATION REQUIRED - Initiate dispensation process

CONDITIONS (if applicable):
1. _______________________________________________________________________
2. _______________________________________________________________________

Assessed By: _________________________ Date: _______________
Reviewed By: _________________________ Date: _______________

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-23: Dispensation Request Form

**Purpose:** Request architecture exceptions when compliance is not possible.

```
══════════════════════════════════════════════════════════════════════════════
                    TK-23: DISPENSATION REQUEST FORM
══════════════════════════════════════════════════════════════════════════════

Request ID: __________________________________________________________________
Project Name: ________________________________________________________________
Requestor: ___________________________________________________________________
Date: ________________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
1. DEVIATION DESCRIPTION
══════════════════════════════════════════════════════════════════════════════

Architecture Requirement Being Deviated From:
___________________________________________________________________________
___________________________________________________________________________

Reference (Principle/Standard/Guideline):
___________________________________________________________________________

Proposed Alternative:
___________________________________________________________________________
___________________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
2. JUSTIFICATION
══════════════════════════════════════════════════════════════════════════════

Business Justification:
___________________________________________________________________________
___________________________________________________________________________
___________________________________________________________________________

Technical Justification:
___________________________________________________________________________
___________________________________________________________________________
___________________________________________________________________________

Why Compliance Is Not Possible:
___________________________________________________________________________
___________________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
3. IMPACT ANALYSIS
══════════════════════════════════════════════════════════════════════════════

┌────────────────────────────────────┬──────────────────────────────────────┐
│ Impact Area                        │ Assessment                           │
├────────────────────────────────────┼──────────────────────────────────────┤
│ Architectural Integrity            │                                      │
├────────────────────────────────────┼──────────────────────────────────────┤
│ Future Flexibility                 │                                      │
├────────────────────────────────────┼──────────────────────────────────────┤
│ Security                           │                                      │
├────────────────────────────────────┼─────────────────────────────────────┤
│ Integration Complexity             │                                      │
├────────────────────────────────────┼──────────────────────────────────────┤
│ Operational Impact                 │                                      │
├────────────────────────────────────┼──────────────────────────────────────┤
│ Cost Implications                  │                                      │
└────────────────────────────────────┴──────────────────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
4. RISK MITIGATION PLAN
══════════════════════════════════════════════════════════════════════════════

┌────┬──────────────────────────────┬───────────┬────────────────────────────┐
│ #  │ Risk Identified              │ Likelihood│ Mitigation Approach        │
├────┼──────────────────────────────┼───────────┼────────────────────────────┤
│ R1 │                              │ H / M / L │                            │
├────┼──────────────────────────────┼───────────┼────────────────────────────┤
│ R2 │                              │ H / M / L │                            │
├────┼──────────────────────────────┼───────────┼────────────────────────────┤
│ R3 │                              │ H / M / L │                            │
└────┴──────────────────────────────┴───────────┴────────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
5. REMEDIATION PLAN (Timeline to Achieve Compliance)
══════════════════════════════════════════════════════════════════════════════

Is future compliance possible? ⬜ Yes  ⬜ No

If Yes, complete the remediation timeline:

┌────────────────────────────────────┬───────────────┬───────────────────────┐
│ Remediation Milestone              │ Target Date   │ Dependencies          │
├────────────────────────────────────┼───────────────┼───────────────────────┤
│                                    │               │                       │
├────────────────────────────────────┼───────────────┼───────────────────────┤
│                                    │               │                       │
├────────────────────────────────────┼───────────────┼───────────────────────┤
│ Full Compliance Achieved           │               │                       │
└────────────────────────────────────┴───────────────┴───────────────────────┘

If No, explain why compliance cannot be achieved:
___________________________________________________________________________
___________________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
6. APPROVAL SECTION
══════════════════════════════════════════════════════════════════════════════

REQUESTOR CERTIFICATION:

I certify that this dispensation request accurately describes the deviation,
its justification, and the associated impacts and risks.

Requestor: _________________________ Signature: _______________ Date: _______
Title: ____________________________

──────────────────────────────────────────────────────────────────────────────

EA REVIEW:

⬜ RECOMMENDED - Dispensation justified, risks acceptable
⬜ NOT RECOMMENDED - Insufficient justification or unacceptable risk
⬜ REQUIRES ADDITIONAL INFORMATION (specify below)

Reviewer Comments:
___________________________________________________________________________
___________________________________________________________________________

Recommended Conditions (if applicable):
___________________________________________________________________________

EA Reviewer: _______________________ Signature: _______________ Date: _______
Title: ____________________________

──────────────────────────────────────────────────────────────────────────────

ARCHITECTURE BOARD DECISION:

⬜ APPROVED - Dispensation granted
⬜ APPROVED WITH CONDITIONS (see below)
⬜ DENIED - Compliance required (see rationale)
⬜ DEFERRED - Additional information required

Decision Rationale:
___________________________________________________________________________
___________________________________________________________________________

Conditions (if applicable):
___________________________________________________________________________

Review Period (if time-limited): From _____________ To _____________

Board Chair: ________________________ Signature: _______________ Date: _______

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-24: EA Status Report Template

**Purpose:** Regular reporting on EA program progress and health.

**Source Reference:** GEATDM-WP5-T57-ExecuteGuide Section 5 (Governance)

**Usage Instructions:**
- Complete monthly or as per organization's governance cycle
- Use trend indicators: ↑ (improving), ↓ (declining), → (stable)
- Color-code status: 🟢 On Track, 🟡 At Risk, 🔴 Critical
- Present at EA Board meetings for review and decisions

```
══════════════════════════════════════════════════════════════════════════════
                      TK-24: EA STATUS REPORT
══════════════════════════════════════════════════════════════════════════════

ORGANIZATION: ________________________________________________________________
REPORTING PERIOD: _____________________ to _____________________
REPORT DATE: _________________________________________________________________
PREPARED BY: _________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
1. EXECUTIVE SUMMARY
══════════════════════════════════════════════════════════════════════════════

OVERALL EA HEALTH: 🟢 On Track  /  🟡 At Risk  /  🔴 Critical

KEY ACHIEVEMENTS THIS PERIOD:
• ___________________________________________________________________________
• ___________________________________________________________________________
• ___________________________________________________________________________

ISSUES REQUIRING ATTENTION:
• ___________________________________________________________________________
• ___________________________________________________________________________

EXECUTIVE SUMMARY STATEMENT:
___________________________________________________________________________
___________________________________________________________________________
___________________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
2. ROADMAP PROGRESS
══════════════════════════════════════════════════════════════════════════════

CURRENT PHASE: ⬜ DISCOVER  ⬜ ASSESS  ⬜ ADAPT  ⬜ PLAN  ⬜ EXECUTE

Phase Completion: _______% Complete

┌────────────────────────────────────────┬───────────┬───────────┬──────────┐
│ Milestone                              │ Target    │ Actual    │ Status   │
├────────────────────────────────────────┼───────────┼───────────┼──────────┤
│                                        │           │           │ 🟢/🟡/🔴 │
├────────────────────────────────────────┼───────────┼───────────┼──────────┤
│                                        │           │           │ 🟢/🟡/🔴 │
├────────────────────────────────────────┼───────────┼───────────┼──────────┤
│                                        │           │           │ 🟢/🟡/🔴 │
├────────────────────────────────────────┼───────────┼───────────┼──────────┤
│                                        │           │           │ 🟢/🟡/🔴 │
└────────────────────────────────────────┴───────────┴───────────┴──────────┘

TIMELINE STATUS: ⬜ On Track  ⬜ Delayed (_____ weeks)  ⬜ Ahead (_____ weeks)

══════════════════════════════════════════════════════════════════════════════
3. ARCHITECTURE COMPLIANCE
══════════════════════════════════════════════════════════════════════════════

┌────────────────────────────────────────┬───────────┬───────────┬──────────┐
│ Metric                                 │ Previous  │ Current   │ Trend    │
├────────────────────────────────────────┼───────────┼───────────┼──────────┤
│ Projects Reviewed                      │           │           │ ↑ / → / ↓│
├────────────────────────────────────────┼───────────┼───────────┼──────────┤
│ Compliance Rate (%)                    │           │           │ ↑ / → / ↓│
├────────────────────────────────────────┼───────────┼───────────┼──────────┤
│ Dispensations Issued                   │           │           │ ↑ / → / ↓│
├────────────────────────────────────────┼───────────┼───────────┼──────────┤
│ Open Non-Compliance Items              │           │           │ ↑ / → / ↓│
├────────────────────────────────────────┼───────────┼───────────┼──────────┤
│ Dispensations Pending Review           │           │           │ ↑ / → / ↓│
└────────────────────────────────────────┴───────────┴───────────┴──────────┘

COMPLIANCE SUMMARY:
___________________________________________________________________________
___________________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
4. KEY METRICS DASHBOARD
══════════════════════════════════════════════════════════════════════════════

┌────────────────────────────────────────┬────────┬────────┬───────┬────────┐
│ KPI                                    │ Target │ Actual │ Trend │ Status │
├────────────────────────────────────────┼────────┼────────┼───────┼────────┤
│ % Capabilities Implemented             │        │        │↑/→/↓  │🟢/🟡/🔴│
├────────────────────────────────────────┼────────┼────────┼───────┼────────┤
│ % Building Blocks Integrated           │        │        │↑/→/↓  │🟢/🟡/🔴│
├────────────────────────────────────────┼────────┼────────┼───────┼────────┤
│ % Architecture Debt Remediated         │        │        │↑/→/↓  │🟢/🟡/🔴│
├────────────────────────────────────────┼────────┼────────┼───────┼────────┤
│ % Projects with EA Engagement          │        │        │↑/→/↓  │🟢/🟡/🔴│
├────────────────────────────────────────┼────────┼────────┼───────┼────────┤
│ Time-to-Compliance (avg days)          │        │        │↑/→/↓  │🟢/🟡/🔴│
├────────────────────────────────────────┼────────┼────────┼───────┼────────┤
│ EA Team Capacity Utilization           │        │        │↑/→/↓  │🟢/🟡/🔴│
└────────────────────────────────────────┴────────┴────────┴───────┴────────┘

══════════════════════════════════════════════════════════════════════════════
5. RISKS AND ISSUES
══════════════════════════════════════════════════════════════════════════════

ACTIVE RISKS:

┌──────┬─────────────────────────────────┬──────────┬─────────────────────────┐
│ ID   │ Risk Description                │ Status   │ Mitigation Action       │
├──────┼─────────────────────────────────┼──────────┼─────────────────────────┤
│ R-   │                                 │ 🟢/🟡/🔴 │                         │
├──────┼─────────────────────────────────┼──────────┼─────────────────────────┤
│ R-   │                                 │ 🟢/🟡/🔴 │                         │
├──────┼─────────────────────────────────┼──────────┼─────────────────────────┤
│ R-   │                                 │ 🟢/🟡/🔴 │                         │
└──────┴─────────────────────────────────┴──────────┴─────────────────────────┘

OPEN ISSUES:

┌──────┬─────────────────────────────────┬─────────────────┬───────────────────┐
│ ID   │ Issue Description               │ Owner           │ Due Date          │
├──────┼─────────────────────────────────┼─────────────────┼───────────────────┤
│ I-   │                                 │                 │                   │
├──────┼─────────────────────────────────┼─────────────────┼───────────────────┤
│ I-   │                                 │                 │                   │
├──────┼─────────────────────────────────┼─────────────────┼───────────────────┤
│ I-   │                                 │                 │                   │
└──────┴─────────────────────────────────┴─────────────────┴───────────────────┘

══════════════════════════════════════════════════════════════════════════════
6. NEXT PERIOD PRIORITIES
══════════════════════════════════════════════════════════════════════════════

PLANNED ACTIVITIES:
1. ___________________________________________________________________________
2. ___________________________________________________________________________
3. ___________________________________________________________________________
4. ___________________________________________________________________________

KEY DECISIONS REQUIRED:
1. ___________________________________________________________________________
2. ___________________________________________________________________________

RESOURCE NEEDS:
┌────────────────────────────────────────┬───────────────────────────────────┐
│ Resource Required                      │ Purpose / Justification           │
├────────────────────────────────────────┼───────────────────────────────────┤
│                                        │                                   │
├────────────────────────────────────────┼───────────────────────────────────┤
│                                        │                                   │
└────────────────────────────────────────┴───────────────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
7. SIGN-OFF
══════════════════════════════════════════════════════════════════════════════

Prepared By: __________________________ Date: _______________
Title: _______________________________

Reviewed By: __________________________ Date: _______________
Title: _______________________________

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-25: Architecture Review Checklist

**Purpose:** Structured checklist for conducting architecture reviews of project designs.

**Source Reference:** GEATDM-WP5-T57-ExecuteGuide Section 3.2 (Solution Architecture Review)

**Usage Instructions:**
- Complete checklist for each project undergoing architecture review
- Mark Y (Yes), N (No), or N/A (Not Applicable) for each item
- Document notes for any item marked N or requiring clarification
- All N items require action plan or dispensation request

```
══════════════════════════════════════════════════════════════════════════════
                    TK-25: ARCHITECTURE REVIEW CHECKLIST
══════════════════════════════════════════════════════════════════════════════

PROJECT INFORMATION:
──────────────────────────────────────────────────────────────────────────────
Project Name: ________________________________________________________________
Review Date: _________________________________________________________________
Review Type: ⬜ Design Review  ⬜ Implementation Review  ⬜ Release Review

Reviewers:
  Lead Reviewer: _____________________________________________________________
  Domain Reviewers: __________________________________________________________
  
Documents Reviewed:
  ⬜ Solution Design Document (SDD)
  ⬜ Technical Architecture Specification
  ⬜ Integration Specification
  ⬜ Data Model Documentation
  ⬜ Security Assessment
  ⬜ Other: _______________________________________________________________

══════════════════════════════════════════════════════════════════════════════
BUSINESS ARCHITECTURE REVIEW
══════════════════════════════════════════════════════════════════════════════

┌────┬────────────────────────────────────────────────────────┬───────┬───────┐
│ #  │ Requirement                                            │Comply │ Notes │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ B1 │ Business requirements clearly documented               │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ B2 │ Alignment with organizational strategy verified        │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ B3 │ Stakeholder needs identified and addressed             │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ B4 │ Business process changes identified and planned        │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ B5 │ Change management approach defined                     │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ B6 │ Maps to target capability model                        │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ B7 │ Service delivery impact assessed                       │⬜Y ⬜N │       │
└────┴────────────────────────────────────────────────────────┴───────┴───────┘

══════════════════════════════════════════════════════════════════════════════
APPLICATION ARCHITECTURE REVIEW
══════════════════════════════════════════════════════════════════════════════

┌────┬────────────────────────────────────────────────────────┬───────┬───────┐
│ #  │ Requirement                                            │Comply │ Notes │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ A1 │ Solution aligns with target application landscape      │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ A2 │ Reuse opportunities identified (BB, existing systems)  │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ A3 │ Integration approach follows standards                 │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ A4 │ API design follows enterprise guidelines               │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ A5 │ Non-functional requirements addressed                  │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ A6 │ Solution modularity maintained                         │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ A7 │ User interface follows design standards                │⬜Y ⬜N │       │
└────┴────────────────────────────────────────────────────────┴───────┴───────┘

══════════════════════════════════════════════════════════════════════════════
DATA ARCHITECTURE REVIEW
══════════════════════════════════════════════════════════════════════════════

┌────┬────────────────────────────────────────────────────────┬───────┬───────┐
│ #  │ Requirement                                            │Comply │ Notes │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ D1 │ Data requirements clearly documented                   │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ D2 │ Data model aligns with enterprise data domains         │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ D3 │ Data quality requirements defined                      │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ D4 │ Data security and privacy requirements addressed       │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ D5 │ Data migration plan documented (if applicable)         │⬜Y⬜N⬜NA│       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ D6 │ Master data management approach defined                │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ D7 │ Data retention and archival requirements addressed     │⬜Y ⬜N │       │
└────┴────────────────────────────────────────────────────────┴───────┴───────┘

══════════════════════════════════════════════════════════════════════════════
TECHNOLOGY ARCHITECTURE REVIEW
══════════════════════════════════════════════════════════════════════════════

┌────┬────────────────────────────────────────────────────────┬───────┬───────┐
│ #  │ Requirement                                            │Comply │ Notes │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ T1 │ Technology choices align with approved standards       │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ T2 │ Infrastructure requirements documented                 │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ T3 │ Security architecture requirements addressed           │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ T4 │ Performance requirements defined and achievable        │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ T5 │ Operational requirements considered (monitoring, etc.) │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ T6 │ Disaster recovery and business continuity addressed    │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ T7 │ Scalability requirements addressed                     │⬜Y ⬜N │       │
└────┴────────────────────────────────────────────────────────┴───────┴───────┘

══════════════════════════════════════════════════════════════════════════════
DPI / BUILDING BLOCK INTEGRATION REVIEW
══════════════════════════════════════════════════════════════════════════════

┌────┬────────────────────────────────────────────────────────┬───────┬───────┐
│ #  │ Requirement                                            │Comply │ Notes │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ BB1│ Required Building Block integrations identified        │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ BB2│ Integration specifications documented                  │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ BB3│ DPI dependencies confirmed available                   │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ BB4│ Fallback approach defined for unavailable DPI          │⬜Y⬜N⬜NA│       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ BB5│ BB authentication/authorization approach defined       │⬜Y ⬜N │       │
├────┼────────────────────────────────────────────────────────┼───────┼───────┤
│ BB6│ BB error handling and resilience addressed             │⬜Y ⬜N │       │
└────┴────────────────────────────────────────────────────────┴───────┴───────┘

══════════════════════════════════════════════════════════════════════════════
REVIEW SUMMARY
══════════════════════════════════════════════════════════════════════════════

COMPLIANCE SUMMARY:
───────────────────────────────────────────────────────────────────────────────

┌────────────────────────────────┬────────────┬────────────┬─────────────────┐
│ Domain                         │ Items      │ Compliant  │ Non-Compliant   │
├────────────────────────────────┼────────────┼────────────┼─────────────────┤
│ Business Architecture          │     7      │            │                 │
├────────────────────────────────┼────────────┼────────────┼─────────────────┤
│ Application Architecture       │     7      │            │                 │
├────────────────────────────────┼────────────┼────────────┼─────────────────┤
│ Data Architecture              │     7      │            │                 │
├────────────────────────────────┼────────────┼────────────┼─────────────────┤
│ Technology Architecture        │     7      │            │                 │
├────────────────────────────────┼────────────┼────────────┼─────────────────┤
│ DPI/Building Block Integration │     6      │            │                 │
├────────────────────────────────┼────────────┼────────────┼─────────────────┤
│ TOTAL                          │    34      │            │                 │
└────────────────────────────────┴────────────┴────────────┴─────────────────┘

OVERALL REVIEW OUTCOME:
───────────────────────────────────────────────────────────────────────────────

⬜ APPROVED - Proceed to next stage
⬜ APPROVED WITH CONDITIONS - Proceed with documented conditions (see below)
⬜ NOT APPROVED - Requires revision (see action items)
⬜ DEFERRED - Review incomplete, schedule follow-up

CONDITIONS (if applicable):
1. ___________________________________________________________________________
2. ___________________________________________________________________________
3. ___________________________________________________________________________

ACTION ITEMS (for non-compliant items):
┌────┬─────────────────────────────────────────────┬─────────────┬───────────┐
│ Ref│ Action Required                             │ Owner       │ Due Date  │
├────┼─────────────────────────────────────────────┼─────────────┼───────────┤
│    │                                             │             │           │
├────┼─────────────────────────────────────────────┼─────────────┼───────────┤
│    │                                             │             │           │
├────┼─────────────────────────────────────────────┼─────────────┼───────────┤
│    │                                             │             │           │
└────┴─────────────────────────────────────────────┴─────────────┴───────────┘

DISPENSATION REQUESTS REQUIRED:
⬜ None required
⬜ Dispensation required for items: _________________________________________

══════════════════════════════════════════════════════════════════════════════
SIGN-OFF
══════════════════════════════════════════════════════════════════════════════

Lead Reviewer: _________________________ Signature: __________ Date: ________

Domain Reviewers:
Business: _____________________________ Signature: __________ Date: ________
Application: __________________________ Signature: __________ Date: ________
Data: _________________________________ Signature: __________ Date: ________
Technology: ___________________________ Signature: __________ Date: ________

Project Representative: ________________ Signature: __________ Date: ________
(Acknowledges review outcome)

══════════════════════════════════════════════════════════════════════════════
```

---

## 8. REFERENCE ARCHITECTURE TOOLS

This section provides tools for working with the GEATDM Reference Architectures during the ADAPT and implementation phases.

---

### TK-26: Capability Mapping Template

**Purpose:** Map organization capabilities to Reference Architecture capabilities.

**Source Reference:** GEATDM Reference Architectures (PDU, RA, SDA)

**Usage Instructions:**
- Complete during ASSESS phase to document current capability coverage
- Update during ADAPT phase to plan capability implementation
- Use mapping status to identify gaps requiring attention
- Serves as foundation for gap analysis and roadmap planning

```
══════════════════════════════════════════════════════════════════════════════
                    TK-26: CAPABILITY MAPPING TEMPLATE
══════════════════════════════════════════════════════════════════════════════

ORGANIZATION: ________________________________________________________________
REFERENCE ARCHITECTURE: ⬜ PDU  ⬜ RA  ⬜ SDA
ASSESSMENT DATE: _____________________________________________________________
ASSESSED BY: _________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
INSTRUCTIONS
══════════════════════════════════════════════════════════════════════════════

For each Reference Architecture capability:
1. Identify if your organization has an equivalent capability
2. Record the mapping status:
   - FULL: Organization capability fully maps to RA capability
   - PARTIAL: Organization capability partially addresses RA capability
   - NONE: No current capability exists (gap)
   - N/A: Capability not applicable to this organization
3. Document gap notes for PARTIAL or NONE mappings
4. Calculate coverage summary

══════════════════════════════════════════════════════════════════════════════
CAPABILITY MAPPING TABLE
══════════════════════════════════════════════════════════════════════════════

C1: POLICY DEVELOPMENT (PDU INHERITED)
┌─────────┬─────────────────────────────┬─────────────────────┬────────┬──────┐
│ RA ID   │ RA Capability Name          │ Org Capability      │ Status │ Gap  │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C1.1    │ Policy Analysis & Research  │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C1.2    │ Policy Formulation          │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C1.3    │ Legislative Drafting        │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C1.4    │ Stakeholder Engagement      │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C1.5    │ Inter-Governmental Coord.   │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C1.6    │ Policy Monitoring & Eval.   │                     │F/P/N/NA│      │
└─────────┴─────────────────────────────┴─────────────────────┴────────┴──────┘

C2: ORGANIZATIONAL SUPPORT (PDU INHERITED)
┌─────────┬─────────────────────────────┬─────────────────────┬────────┬──────┐
│ RA ID   │ RA Capability Name          │ Org Capability      │ Status │ Gap  │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C2.1    │ Human Resource Management   │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C2.2    │ Financial Management        │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C2.3    │ Procurement Management      │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C2.4    │ Information & Knowledge Mgmt│                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C2.5    │ Corporate Communications    │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C2.6    │ IT and Digital Services     │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C2.7    │ Facilities & Administration │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C2.8    │ Risk & Compliance Mgmt      │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C2.9    │ Strategic Management        │                     │F/P/N/NA│      │
└─────────┴─────────────────────────────┴─────────────────────┴────────┴──────┘

C3: REGULATORY (RA/SDA ONLY - Skip if PDU)
┌─────────┬─────────────────────────────┬─────────────────────┬────────┬──────┐
│ RA ID   │ RA Capability Name          │ Org Capability      │ Status │ Gap  │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C3.1    │ License & Permit Management │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C3.2    │ Inspection and Audit        │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C3.3    │ Compliance Monitoring       │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C3.4    │ Enforcement                 │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C3.5    │ Appeals & Dispute Resolution│                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C3.6    │ Public Registry Management  │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C3.7    │ Regulated Entity Education  │                     │F/P/N/NA│      │
└─────────┴─────────────────────────────┴─────────────────────┴────────┴──────┘

C4: SERVICE DELIVERY (SDA ONLY - Skip if PDU or RA)
┌─────────┬─────────────────────────────┬─────────────────────┬────────┬──────┐
│ RA ID   │ RA Capability Name          │ Org Capability      │ Status │ Gap  │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C4.1    │ Customer Registration       │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C4.2    │ Service Request Management  │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C4.3    │ Assessment & Determination  │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C4.4    │ Benefit/Service Delivery    │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C4.5    │ Revenue Collection          │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C4.6    │ Debt Management             │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C4.7    │ Customer Service            │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C4.8    │ Contact Center Operations   │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C4.9    │ Field Operations            │                     │F/P/N/NA│      │
├─────────┼─────────────────────────────┼─────────────────────┼────────┼──────┤
│ C4.10   │ Case Management             │                     │F/P/N/NA│      │
└─────────┴─────────────────────────────┴─────────────────────┴────────┴──────┘

══════════════════════════════════════════════════════════════════════════════
COVERAGE SUMMARY
══════════════════════════════════════════════════════════════════════════════

┌────────────────────────────────┬────────┬────────┬─────────┬──────┬────────┐
│ Capability Domain              │ Total  │ Full   │ Partial │ None │ N/A    │
├────────────────────────────────┼────────┼────────┼─────────┼──────┼────────┤
│ C1: Policy Development         │        │        │         │      │        │
├────────────────────────────────┼────────┼────────┼─────────┼──────┼────────┤
│ C2: Organizational Support     │        │        │         │      │        │
├────────────────────────────────┼────────┼────────┼─────────┼──────┼────────┤
│ C3: Regulatory (if applicable) │        │        │         │      │        │
├────────────────────────────────┼────────┼────────┼─────────┼──────┼────────┤
│ C4: Service Delivery (if appl.)│        │        │         │      │        │
├────────────────────────────────┼────────┼────────┼─────────┼──────┼────────┤
│ TOTAL                          │        │        │         │      │        │
└────────────────────────────────┴────────┴────────┴─────────┴──────┴────────┘

COVERAGE PERCENTAGE: _______% (Full + Partial) / (Total - N/A)

══════════════════════════════════════════════════════════════════════════════
PRIORITY GAPS
══════════════════════════════════════════════════════════════════════════════

┌────┬─────────────────────────────────┬──────────┬─────────────────────────┐
│ #  │ Capability Gap                  │ Priority │ Recommended Action      │
├────┼─────────────────────────────────┼──────────┼─────────────────────────┤
│ 1  │                                 │ H / M / L│                         │
├────┼─────────────────────────────────┼──────────┼─────────────────────────┤
│ 2  │                                 │ H / M / L│                         │
├────┼─────────────────────────────────┼──────────┼─────────────────────────┤
│ 3  │                                 │ H / M / L│                         │
├────┼─────────────────────────────────┼──────────┼─────────────────────────┤
│ 4  │                                 │ H / M / L│                         │
├────┼─────────────────────────────────┼──────────┼─────────────────────────┤
│ 5  │                                 │ H / M / L│                         │
└────┴─────────────────────────────────┴──────────┴─────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-27: Building Block Assessment

**Purpose:** Assess current state and readiness for each GovStack Building Block.

**Source Reference:** GEATDM Reference Architectures - Building Block sections

**Usage Instructions:**
- Complete during DISCOVER/ASSESS phases
- Identify which Building Blocks are required for your organization type
- Assess DPI availability at national/sector level
- Determine integration readiness and required actions
- Feed results into roadmap planning

```
══════════════════════════════════════════════════════════════════════════════
                    TK-27: BUILDING BLOCK ASSESSMENT
══════════════════════════════════════════════════════════════════════════════

ORGANIZATION: ________________________________________________________________
ORGANIZATION TYPE: ⬜ PDU  ⬜ RA  ⬜ SDA
COUNTRY/JURISDICTION: ________________________________________________________
ASSESSMENT DATE: _____________________________________________________________
ASSESSED BY: _________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
INSTRUCTIONS
══════════════════════════════════════════════════════════════════════════════

For each Building Block:
1. Determine if BB is REQUIRED, OPTIONAL, or NOT NEEDED for your org type
2. Assess current state of internal capability for this BB function
3. Confirm if national/sector DPI is available for this BB
4. Evaluate integration readiness (technical, organizational, legal)
5. Document gap or action required

Current State Ratings:
- NONE: No capability exists
- BASIC: Manual/limited capability exists
- PARTIAL: Some automation, not meeting BB standard
- FULL: Capability meets or exceeds BB specification

Integration Readiness:
- NOT READY: Significant barriers exist
- PARTIAL: Some readiness, work required
- READY: Organization prepared to integrate

══════════════════════════════════════════════════════════════════════════════
IDENTITY BUILDING BLOCK
══════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────┬────────────────────────────────────────────┐
│ BB Name                         │ Identity BB                                │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Primary Function                │ Digital identity verification and          │
│                                 │ authentication                             │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Required For                    │ ⬜ PDU  ⬜ RA  ⬜ SDA                       │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Current State                   │ ⬜ NONE ⬜ BASIC ⬜ PARTIAL ⬜ FULL         │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ National/Sector DPI Available?  │ ⬜ YES  ⬜ PLANNED  ⬜ NO                   │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ DPI Provider (if available)     │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Integration Readiness           │ ⬜ NOT READY ⬜ PARTIAL ⬜ READY            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Gap/Action Required             │                                            │
└─────────────────────────────────┴────────────────────────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
INFORMATION MEDIATOR (X-ROAD) BUILDING BLOCK
══════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────┬────────────────────────────────────────────┐
│ BB Name                         │ Information Mediator BB                    │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Primary Function                │ Secure data exchange between systems       │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Required For                    │ ⬜ PDU  ⬜ RA  ⬜ SDA                       │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Current State                   │ ⬜ NONE ⬜ BASIC ⬜ PARTIAL ⬜ FULL         │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ National/Sector DPI Available?  │ ⬜ YES  ⬜ PLANNED  ⬜ NO                   │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ DPI Provider (if available)     │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Integration Readiness           │ ⬜ NOT READY ⬜ PARTIAL ⬜ READY            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Gap/Action Required             │                                            │
└─────────────────────────────────┴────────────────────────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
DIGITAL REGISTRIES BUILDING BLOCK
══════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────┬────────────────────────────────────────────┐
│ BB Name                         │ Digital Registries BB                      │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Primary Function                │ Foundational registries (population,       │
│                                 │ business, land, etc.)                      │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Required For                    │ ⬜ PDU  ⬜ RA  ⬜ SDA                       │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Current State                   │ ⬜ NONE ⬜ BASIC ⬜ PARTIAL ⬜ FULL         │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ National/Sector DPI Available?  │ ⬜ YES  ⬜ PLANNED  ⬜ NO                   │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ DPI Provider (if available)     │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Integration Readiness           │ ⬜ NOT READY ⬜ PARTIAL ⬜ READY            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Gap/Action Required             │                                            │
└─────────────────────────────────┴────────────────────────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
PAYMENTS BUILDING BLOCK
══════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────┬────────────────────────────────────────────┐
│ BB Name                         │ Payments BB                                │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Primary Function                │ Digital payment processing and settlement  │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Required For                    │ ⬜ PDU  ⬜ RA  ⬜ SDA                       │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Current State                   │ ⬜ NONE ⬜ BASIC ⬜ PARTIAL ⬜ FULL         │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ National/Sector DPI Available?  │ ⬜ YES  ⬜ PLANNED  ⬜ NO                   │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ DPI Provider (if available)     │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Integration Readiness           │ ⬜ NOT READY ⬜ PARTIAL ⬜ READY            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Gap/Action Required             │                                            │
└─────────────────────────────────┴────────────────────────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
WORKFLOW BUILDING BLOCK
══════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────┬────────────────────────────────────────────┐
│ BB Name                         │ Workflow BB                                │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Primary Function                │ Process automation and orchestration       │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Required For                    │ ⬜ PDU  ⬜ RA  ⬜ SDA                       │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Current State                   │ ⬜ NONE ⬜ BASIC ⬜ PARTIAL ⬜ FULL         │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ National/Sector DPI Available?  │ ⬜ YES  ⬜ PLANNED  ⬜ NO                   │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ DPI Provider (if available)     │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Integration Readiness           │ ⬜ NOT READY ⬜ PARTIAL ⬜ READY            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Gap/Action Required             │                                            │
└─────────────────────────────────┴────────────────────────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
MESSAGING BUILDING BLOCK
══════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────┬────────────────────────────────────────────┐
│ BB Name                         │ Messaging BB                               │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Primary Function                │ Multi-channel notifications and messaging  │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Required For                    │ ⬜ PDU  ⬜ RA  ⬜ SDA                       │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Current State                   │ ⬜ NONE ⬜ BASIC ⬜ PARTIAL ⬜ FULL         │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ National/Sector DPI Available?  │ ⬜ YES  ⬜ PLANNED  ⬜ NO                   │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ DPI Provider (if available)     │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Integration Readiness           │ ⬜ NOT READY ⬜ PARTIAL ⬜ READY            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Gap/Action Required             │                                            │
└─────────────────────────────────┴────────────────────────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
SCHEDULING BUILDING BLOCK
══════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────┬────────────────────────────────────────────┐
│ BB Name                         │ Scheduling BB                              │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Primary Function                │ Appointment booking and resource scheduling│
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Required For                    │ ⬜ PDU  ⬜ RA  ⬜ SDA                       │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Current State                   │ ⬜ NONE ⬜ BASIC ⬜ PARTIAL ⬜ FULL         │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ National/Sector DPI Available?  │ ⬜ YES  ⬜ PLANNED  ⬜ NO                   │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ DPI Provider (if available)     │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Integration Readiness           │ ⬜ NOT READY ⬜ PARTIAL ⬜ READY            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Gap/Action Required             │                                            │
└─────────────────────────────────┴────────────────────────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
CONSENT BUILDING BLOCK
══════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────┬────────────────────────────────────────────┐
│ BB Name                         │ Consent BB                                 │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Primary Function                │ Consent management and data sharing control│
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Required For                    │ ⬜ PDU  ⬜ RA  ⬜ SDA                       │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Current State                   │ ⬜ NONE ⬜ BASIC ⬜ PARTIAL ⬜ FULL         │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ National/Sector DPI Available?  │ ⬜ YES  ⬜ PLANNED  ⬜ NO                   │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ DPI Provider (if available)     │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Integration Readiness           │ ⬜ NOT READY ⬜ PARTIAL ⬜ READY            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Gap/Action Required             │                                            │
└─────────────────────────────────┴────────────────────────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
ANALYTICS BUILDING BLOCK
══════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────┬────────────────────────────────────────────┐
│ BB Name                         │ Analytics BB                               │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Primary Function                │ Data analytics, reporting, dashboards      │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Required For                    │ ⬜ PDU  ⬜ RA  ⬜ SDA                       │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Current State                   │ ⬜ NONE ⬜ BASIC ⬜ PARTIAL ⬜ FULL         │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ National/Sector DPI Available?  │ ⬜ YES  ⬜ PLANNED  ⬜ NO                   │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ DPI Provider (if available)     │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Integration Readiness           │ ⬜ NOT READY ⬜ PARTIAL ⬜ READY            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Gap/Action Required             │                                            │
└─────────────────────────────────┴────────────────────────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
BUILDING BLOCK SUMMARY
══════════════════════════════════════════════════════════════════════════════

┌────────────────────────────┬──────────┬──────────┬──────────┬──────────────┐
│ Building Block             │ Required │DPI Avail │ Ready    │ Action Req'd │
├────────────────────────────┼──────────┼──────────┼──────────┼──────────────┤
│ Identity BB                │ Y / N    │ Y / P / N│ Y / P / N│ Y / N        │
├────────────────────────────┼──────────┼──────────┼──────────┼──────────────┤
│ Information Mediator BB    │ Y / N    │ Y / P / N│ Y / P / N│ Y / N        │
├────────────────────────────┼──────────┼──────────┼──────────┼──────────────┤
│ Digital Registries BB      │ Y / N    │ Y / P / N│ Y / P / N│ Y / N        │
├────────────────────────────┼──────────┼──────────┼──────────┼──────────────┤
│ Payments BB                │ Y / N    │ Y / P / N│ Y / P / N│ Y / N        │
├────────────────────────────┼──────────┼──────────┼──────────┼──────────────┤
│ Workflow BB                │ Y / N    │ Y / P / N│ Y / P / N│ Y / N        │
├────────────────────────────┼──────────┼──────────┼──────────┼──────────────┤
│ Messaging BB               │ Y / N    │ Y / P / N│ Y / P / N│ Y / N        │
├────────────────────────────┼──────────┼──────────┼──────────┼──────────────┤
│ Scheduling BB              │ Y / N    │ Y / P / N│ Y / P / N│ Y / N        │
├────────────────────────────┼──────────┼──────────┼──────────┼──────────────┤
│ Consent BB                 │ Y / N    │ Y / P / N│ Y / P / N│ Y / N        │
├────────────────────────────┼──────────┼──────────┼──────────┼──────────────┤
│ Analytics BB               │ Y / N    │ Y / P / N│ Y / P / N│ Y / N        │
└────────────────────────────┴──────────┴──────────┴──────────┴──────────────┘

TOTALS:
  Total BBs Required: ________
  DPI Available: ________
  DPI Planned: ________
  Local Implementation Needed: ________

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-28: DPI Integration Specification Template

**Purpose:** Document specifications for integrating with DPI/Building Blocks.

**Source Reference:** GEATDM Reference Architectures - Integration sections

**Usage Instructions:**
- Complete one specification per Building Block integration
- Use during ADAPT phase to define integration requirements
- Update during EXECUTE phase with implementation details
- Serves as technical handover document for development teams

```
══════════════════════════════════════════════════════════════════════════════
                    TK-28: DPI INTEGRATION SPECIFICATION
══════════════════════════════════════════════════════════════════════════════

SPECIFICATION ID: _____________________________________________________________
ORGANIZATION: _________________________________________________________________
DATE: ________________________________________________________________________
PREPARED BY: __________________________________________________________________
VERSION: _____________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
1. INTEGRATION OVERVIEW
══════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────┬────────────────────────────────────────────┐
│ Building Block Name             │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ DPI Provider                    │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Integration Purpose             │                                            │
│                                 │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Priority                        │ ⬜ Critical  ⬜ High  ⬜ Medium  ⬜ Low     │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Target Go-Live Date             │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Integration Pattern             │ ⬜ Synchronous  ⬜ Asynchronous  ⬜ Batch   │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Consuming Application(s)        │                                            │
└─────────────────────────────────┴────────────────────────────────────────────┘

BUSINESS CONTEXT:
___________________________________________________________________________
___________________________________________________________________________
___________________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
2. TECHNICAL SPECIFICATION
══════════════════════════════════════════════════════════════════════════════

API / SERVICE DETAILS:
┌─────────────────────────────────┬────────────────────────────────────────────┐
│ Endpoint / Service URL          │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ API Version                     │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Protocol                        │ ⬜ REST  ⬜ SOAP  ⬜ gRPC  ⬜ Other: ____   │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Authentication Method           │ ⬜ OAuth 2.0  ⬜ API Key  ⬜ mTLS          │
│                                 │ ⬜ SAML  ⬜ Other: ____                    │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Data Exchange Format            │ ⬜ JSON  ⬜ XML  ⬜ CSV  ⬜ Other: ____     │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Encryption Requirements         │ ⬜ TLS 1.2+  ⬜ End-to-end encryption      │
│                                 │ ⬜ Payload encryption  ⬜ Other: ____      │
└─────────────────────────────────┴────────────────────────────────────────────┘

OPERATIONS TO IMPLEMENT:
┌────┬────────────────────────┬───────────┬─────────────────────────────────────┐
│ #  │ Operation Name         │ Method    │ Description                         │
├────┼────────────────────────┼───────────┼─────────────────────────────────────┤
│ 1  │                        │GET/POST/..│                                     │
├────┼────────────────────────┼───────────┼─────────────────────────────────────┤
│ 2  │                        │GET/POST/..│                                     │
├────┼────────────────────────┼───────────┼─────────────────────────────────────┤
│ 3  │                        │GET/POST/..│                                     │
├────┼────────────────────────┼───────────┼─────────────────────────────────────┤
│ 4  │                        │GET/POST/..│                                     │
└────┴────────────────────────┴───────────┴─────────────────────────────────────┘

VOLUME AND PERFORMANCE:
┌─────────────────────────────────┬────────────────────────────────────────────┐
│ Expected Transaction Volume     │ _________ per ⬜ hour / ⬜ day / ⬜ month  │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Peak Transaction Volume         │ _________ per ⬜ hour / ⬜ day             │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Required Response Time          │ _________ ms / seconds                     │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Availability Requirement        │ _________ % uptime                         │
└─────────────────────────────────┴────────────────────────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
3. DATA MAPPING
══════════════════════════════════════════════════════════════════════════════

┌──────────────────────┬───────────────────────┬─────────────────────────────┐
│ Local Field          │ DPI Field             │ Transformation Required     │
├──────────────────────┼───────────────────────┼─────────────────────────────┤
│                      │                       │                             │
├──────────────────────┼───────────────────────┼─────────────────────────────┤
│                      │                       │                             │
├──────────────────────┼───────────────────────┼─────────────────────────────┤
│                      │                       │                             │
├──────────────────────┼───────────────────────┼─────────────────────────────┤
│                      │                       │                             │
├──────────────────────┼───────────────────────┼─────────────────────────────┤
│                      │                       │                             │
├──────────────────────┼───────────────────────┼─────────────────────────────┤
│                      │                       │                             │
├──────────────────────┼───────────────────────┼─────────────────────────────┤
│                      │                       │                             │
├──────────────────────┼───────────────────────┼─────────────────────────────┤
│                      │                       │                             │
└──────────────────────┴───────────────────────┴─────────────────────────────┘

DATA QUALITY REQUIREMENTS:
___________________________________________________________________________
___________________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
4. ERROR HANDLING
══════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────┬─────────────────────────┬─────────────────────┐
│ Error Type                  │ Handling Approach       │ Fallback Action     │
├─────────────────────────────┼─────────────────────────┼─────────────────────┤
│ Connection Timeout          │                         │                     │
├─────────────────────────────┼─────────────────────────┼─────────────────────┤
│ Authentication Failure      │                         │                     │
├─────────────────────────────┼─────────────────────────┼─────────────────────┤
│ Invalid Request (4xx)       │                         │                     │
├─────────────────────────────┼─────────────────────────┼─────────────────────┤
│ Server Error (5xx)          │                         │                     │
├─────────────────────────────┼─────────────────────────┼─────────────────────┤
│ Data Validation Error       │                         │                     │
├─────────────────────────────┼─────────────────────────┼─────────────────────┤
│ Rate Limiting               │                         │                     │
├─────────────────────────────┼─────────────────────────┼─────────────────────┤
│ DPI Service Unavailable     │                         │                     │
└─────────────────────────────┴─────────────────────────┴─────────────────────┘

RETRY POLICY:
  Maximum Retries: ________
  Retry Interval: _________ seconds
  Exponential Backoff: ⬜ Yes  ⬜ No

CIRCUIT BREAKER SETTINGS:
  Failure Threshold: _________ failures
  Recovery Time: _________ seconds

══════════════════════════════════════════════════════════════════════════════
5. TESTING REQUIREMENTS
══════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────┬────────────────────────────────────────────┐
│ Test Environment URL            │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Test Credentials Provider       │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Test Data Requirements          │                                            │
└─────────────────────────────────┴────────────────────────────────────────────┘

TEST SCENARIOS:
┌────┬─────────────────────────────────────────────┬──────────────────────────┐
│ #  │ Scenario Description                        │ Expected Result          │
├────┼─────────────────────────────────────────────┼──────────────────────────┤
│ 1  │                                             │                          │
├────┼─────────────────────────────────────────────┼──────────────────────────┤
│ 2  │                                             │                          │
├────┼─────────────────────────────────────────────┼──────────────────────────┤
│ 3  │                                             │                          │
├────┼─────────────────────────────────────────────┼──────────────────────────┤
│ 4  │                                             │                          │
├────┼─────────────────────────────────────────────┼──────────────────────────┤
│ 5  │                                             │                          │
└────┴─────────────────────────────────────────────┴──────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
6. SECURITY AND COMPLIANCE
══════════════════════════════════════════════════════════════════════════════

DATA CLASSIFICATION:
  ⬜ Public  ⬜ Internal  ⬜ Confidential  ⬜ Restricted

COMPLIANCE REQUIREMENTS:
  ⬜ Data Protection / Privacy Law
  ⬜ Sector-Specific Regulation: _______________
  ⬜ Audit Logging Required
  ⬜ Consent Required
  ⬜ Other: _______________

SECURITY CONTROLS:
___________________________________________________________________________
___________________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
7. SIGN-OFF
══════════════════════════════════════════════════════════════════════════════

Specification Prepared By: __________________ Date: _______________

Technical Review By: _______________________ Date: _______________

Security Review By: ________________________ Date: _______________

Business Owner Approval: ___________________ Date: _______________

══════════════════════════════════════════════════════════════════════════════
```

---

## 9. GOVERNANCE TOOLS

This section provides governance tools to support the ongoing EA program management.

---

### TK-29: EA Board Meeting Agenda Template

**Purpose:** Standard agenda for Architecture Board meetings.

**Source Reference:** GEATDM-WP1-T13-Governance Section 2.3 (EA Board)

**Usage Instructions:**
- Use to prepare monthly EA Board meetings
- Distribute agenda and materials at least 3 days before meeting
- Adjust time allocations based on agenda items
- Record decisions and actions during meeting

```
══════════════════════════════════════════════════════════════════════════════
                    TK-29: EA BOARD MEETING AGENDA
══════════════════════════════════════════════════════════════════════════════

MEETING DETAILS:
──────────────────────────────────────────────────────────────────────────────
Meeting Date: ________________________________________________________________
Time: _______________________ to _______________________
Location: ____________________________________________________________________
Meeting Type: ⬜ Regular Monthly  ⬜ Special  ⬜ Emergency

ATTENDEES:
  Chair: _____________________________________________________________________
  Secretariat: _______________________________________________________________
  Members Present: ___________________________________________________________
  _____________________________________________________________________________
  Apologies: _________________________________________________________________
  Guests: ____________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
AGENDA
══════════════════════════════════════════════════════════════════════════════

┌─────┬────────────────────────────────────────────────┬──────────┬──────────┐
│ #   │ Agenda Item                                    │ Duration │ Lead     │
├─────┼────────────────────────────────────────────────┼──────────┼──────────┤
│ 1   │ Opening & Quorum Confirmation                  │  5 min   │ Chair    │
├─────┼────────────────────────────────────────────────┼──────────┼──────────┤
│ 2   │ Review of Previous Minutes & Actions          │ 10 min   │ Secr.    │
│     │ • Approval of previous minutes                │          │          │
│     │ • Status of open action items                 │          │          │
├─────┼────────────────────────────────────────────────┼──────────┼──────────┤
│ 3   │ Architecture Compliance Report                │ 15 min   │ CEA      │
│     │ • Reviews conducted since last meeting        │          │          │
│     │ • Compliance statistics                       │          │          │
│     │ • Issues requiring attention                  │          │          │
├─────┼────────────────────────────────────────────────┼──────────┼──────────┤
│ 4   │ Dispensation Requests for Decision            │ 20 min   │ CEA      │
│     │ • Request 1: ____________________________     │          │          │
│     │ • Request 2: ____________________________     │          │          │
├─────┼────────────────────────────────────────────────┼──────────┼──────────┤
│ 5   │ Standards/Guidelines for Approval             │ 15 min   │ CEA      │
│     │ • Standard 1: ____________________________    │          │          │
│     │ • Guideline 1: ___________________________    │          │          │
├─────┼────────────────────────────────────────────────┼──────────┼──────────┤
│ 6   │ Roadmap Progress Update                       │ 10 min   │ CEA      │
│     │ • Current phase status                        │          │          │
│     │ • Key milestones                              │          │          │
│     │ • Timeline implications                       │          │          │
├─────┼────────────────────────────────────────────────┼──────────┼──────────┤
│ 7   │ Emerging Issues / Risks                       │ 10 min   │ All      │
│     │ • New risks identified                        │          │          │
│     │ • Escalations from EA Team                    │          │          │
│     │ • External factors                            │          │          │
├─────┼────────────────────────────────────────────────┼──────────┼──────────┤
│ 8   │ Any Other Business                            │  5 min   │ Chair    │
├─────┼────────────────────────────────────────────────┼──────────┼──────────┤
│     │ TOTAL MEETING TIME                            │ 90 min   │          │
└─────┴────────────────────────────────────────────────┴──────────┴──────────┘

══════════════════════════════════════════════════════════════════════════════
DECISION LOG
══════════════════════════════════════════════════════════════════════════════

┌─────┬────────────────────────────────────┬────────────────┬────────┬────────┐
│ Ref │ Decision Item                      │ Decision       │ Owner  │Due Date│
├─────┼────────────────────────────────────┼────────────────┼────────┼────────┤
│ D1  │                                    │Approved/Denied │        │        │
├─────┼────────────────────────────────────┼────────────────┼────────┼────────┤
│ D2  │                                    │Approved/Denied │        │        │
├─────┼────────────────────────────────────┼────────────────┼────────┼────────┤
│ D3  │                                    │Approved/Denied │        │        │
└─────┴────────────────────────────────────┴────────────────┴────────┴────────┘

══════════════════════════════════════════════════════════════════════════════
ACTION ITEMS
══════════════════════════════════════════════════════════════════════════════

┌─────┬────────────────────────────────────────────────┬────────────┬─────────┐
│ Ref │ Action Description                             │ Owner      │ Due Date│
├─────┼────────────────────────────────────────────────┼────────────┼─────────┤
│ A1  │                                                │            │         │
├─────┼────────────────────────────────────────────────┼────────────┼─────────┤
│ A2  │                                                │            │         │
├─────┼────────────────────────────────────────────────┼────────────┼─────────┤
│ A3  │                                                │            │         │
├─────┼────────────────────────────────────────────────┼────────────┼─────────┤
│ A4  │                                                │            │         │
└─────┴────────────────────────────────────────────────┴────────────┴─────────┘

══════════════════════════════════════════════════════════════════════════════
NEXT MEETING
══════════════════════════════════════════════════════════════════════════════

Next Meeting Date: ___________________________________________________________
Location: ____________________________________________________________________
Preliminary Agenda Items: ____________________________________________________

══════════════════════════════════════════════════════════════════════════════
SIGN-OFF
══════════════════════════════════════════════════════════════════════════════

Minutes Prepared By: __________________________ Date: _______________
Minutes Approved By (Chair): __________________ Date: _______________

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-30: Architecture Decision Record (ADR) Template

**Purpose:** Document significant architecture decisions for future reference.

**Source Reference:** GEATDM-WP1-T13-Governance Section 3 (Decision Processes)

**Usage Instructions:**
- Create ADR for each significant architectural decision
- Discuss options in EA team before presenting to EA Board
- Archive approved ADRs in EA repository
- Reference related ADRs to build decision trail

```
══════════════════════════════════════════════════════════════════════════════
                    TK-30: ARCHITECTURE DECISION RECORD
══════════════════════════════════════════════════════════════════════════════

══════════════════════════════════════════════════════════════════════════════
ADR METADATA
══════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────┬────────────────────────────────────────────┐
│ ADR ID                          │ ADR-                                       │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Title                           │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Date Proposed                   │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Date Decided                    │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Status                          │ ⬜ Proposed  ⬜ Accepted  ⬜ Deprecated     │
│                                 │ ⬜ Superseded by ADR-____                  │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Decision Domain                 │ ⬜ Business  ⬜ Application  ⬜ Data        │
│                                 │ ⬜ Technology  ⬜ Integration  ⬜ Security  │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Impact Level                    │ ⬜ Strategic  ⬜ Major  ⬜ Minor            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Author                          │                                            │
└─────────────────────────────────┴────────────────────────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
1. CONTEXT
══════════════════════════════════════════════════════════════════════════════

What is the issue or problem that we are trying to address?
___________________________________________________________________________
___________________________________________________________________________
___________________________________________________________________________
___________________________________________________________________________

What is the business or technical driver for this decision?
___________________________________________________________________________
___________________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
2. DECISION DRIVERS
══════════════════════════════════════════════════════════════════════════════

What are the key factors influencing this decision? (Rank by priority)

┌────┬─────────────────────────────────────────────────────────┬─────────────┐
│ #  │ Decision Driver                                         │ Priority    │
├────┼─────────────────────────────────────────────────────────┼─────────────┤
│ 1  │                                                         │ H / M / L   │
├────┼─────────────────────────────────────────────────────────┼─────────────┤
│ 2  │                                                         │ H / M / L   │
├────┼─────────────────────────────────────────────────────────┼─────────────┤
│ 3  │                                                         │ H / M / L   │
├────┼─────────────────────────────────────────────────────────┼─────────────┤
│ 4  │                                                         │ H / M / L   │
├────┼─────────────────────────────────────────────────────────┼─────────────┤
│ 5  │                                                         │ H / M / L   │
└────┴─────────────────────────────────────────────────────────┴─────────────┘

══════════════════════════════════════════════════════════════════════════════
3. CONSIDERED OPTIONS
══════════════════════════════════════════════════════════════════════════════

OPTION 1: ____________________________________________________________________

Description:
___________________________________________________________________________
___________________________________________________________________________

┌─────────────────────────────────┬────────────────────────────────────────────┐
│ PROS                            │ CONS                                       │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ •                               │ •                                          │
│ •                               │ •                                          │
│ •                               │ •                                          │
└─────────────────────────────────┴────────────────────────────────────────────┘

──────────────────────────────────────────────────────────────────────────────

OPTION 2: ____________________________________________________________________

Description:
___________________________________________________________________________
___________________________________________________________________________

┌─────────────────────────────────┬────────────────────────────────────────────┐
│ PROS                            │ CONS                                       │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ •                               │ •                                          │
│ •                               │ •                                          │
│ •                               │ •                                          │
└─────────────────────────────────┴────────────────────────────────────────────┘

──────────────────────────────────────────────────────────────────────────────

OPTION 3: ____________________________________________________________________

Description:
___________________________________________________________________________
___________________________________________________________________________

┌─────────────────────────────────┬────────────────────────────────────────────┐
│ PROS                            │ CONS                                       │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ •                               │ •                                          │
│ •                               │ •                                          │
│ •                               │ •                                          │
└─────────────────────────────────┴────────────────────────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
4. DECISION OUTCOME
══════════════════════════════════════════════════════════════════════════════

SELECTED OPTION: ______________________________________________________________

Why was this option selected?
___________________________________________________________________________
___________________________________________________________________________
___________________________________________________________________________

How does it satisfy the decision drivers?
___________________________________________________________________________
___________________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
5. CONSEQUENCES
══════════════════════════════════════════════════════════════════════════════

POSITIVE CONSEQUENCES:
• ___________________________________________________________________________
• ___________________________________________________________________________
• ___________________________________________________________________________

NEGATIVE CONSEQUENCES:
• ___________________________________________________________________________
• ___________________________________________________________________________

RISKS:
• ___________________________________________________________________________
• ___________________________________________________________________________

MITIGATION APPROACH:
___________________________________________________________________________
___________________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
6. RELATED DECISIONS
══════════════════════════════════════════════════════════════════════════════

┌─────────────────────┬──────────────────────────────────┬────────────────────┐
│ Related ADR ID      │ Title                            │ Relationship       │
├─────────────────────┼──────────────────────────────────┼────────────────────┤
│ ADR-                │                                  │ Depends on /       │
│                     │                                  │ Supersedes / etc.  │
├─────────────────────┼──────────────────────────────────┼────────────────────┤
│ ADR-                │                                  │                    │
└─────────────────────┴──────────────────────────────────┴────────────────────┘

══════════════════════════════════════════════════════════════════════════════
7. APPROVAL
══════════════════════════════════════════════════════════════════════════════

Decision Maker: _______________________________ Date: _______________
Title: _______________________________________

EA Board Reference (if applicable): ______________________________________

══════════════════════════════════════════════════════════════════════════════
```

---

### TK-31: Standards Approval Form

**Purpose:** Request approval for new or updated architecture standards.

**Source Reference:** GEATDM-WP1-T13-Governance Section 3.4 (Framework Maintenance)

**Usage Instructions:**
- Complete for all new standards or significant updates
- Include full standard documentation as attachment
- Submit to EA Office for technical review before EA Board
- Track compliance timeline after approval

```
══════════════════════════════════════════════════════════════════════════════
                    TK-31: STANDARDS APPROVAL FORM
══════════════════════════════════════════════════════════════════════════════

Request ID: __________________________________________________________________
Date Submitted: ______________________________________________________________
Submitted By: ________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
1. STANDARD INFORMATION
══════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────┬────────────────────────────────────────────┐
│ Standard Name                   │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Standard ID                     │ STD-                                       │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Version                         │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Category                        │ ⬜ Technology  ⬜ Data  ⬜ Integration      │
│                                 │ ⬜ Security  ⬜ Development  ⬜ Operations  │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Request Type                    │ ⬜ New Standard  ⬜ Update  ⬜ Retirement   │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Replaces (if update)            │                                            │
└─────────────────────────────────┴────────────────────────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
2. STANDARD DESCRIPTION
══════════════════════════════════════════════════════════════════════════════

PURPOSE:
Why is this standard needed? What problem does it solve?
___________________________________________________________________________
___________________________________________________________________________
___________________________________________________________________________

SCOPE:
What does this standard apply to?
___________________________________________________________________________
___________________________________________________________________________

KEY REQUIREMENTS:
What are the main requirements of this standard?
1. ___________________________________________________________________________
2. ___________________________________________________________________________
3. ___________________________________________________________________________
4. ___________________________________________________________________________
5. ___________________________________________________________________________

REFERENCE DOCUMENTS:
List any industry standards, frameworks, or specifications this is based on:
___________________________________________________________________________
___________________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
3. JUSTIFICATION
══════════════════════════════════════════════════════════════════════════════

Why is this standard needed?
___________________________________________________________________________
___________________________________________________________________________
___________________________________________________________________________

What are the benefits of adopting this standard?
___________________________________________________________________________
___________________________________________________________________________
___________________________________________________________________________

What are the risks of NOT adopting this standard?
___________________________________________________________________________
___________________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
4. IMPACT ASSESSMENT
══════════════════════════════════════════════════════════════════════════════

AFFECTED SYSTEMS:
┌────────────────────────────────────────┬────────────────────────────────────┐
│ System / Application                   │ Impact Level (H/M/L)               │
├────────────────────────────────────────┼────────────────────────────────────┤
│                                        │                                    │
├────────────────────────────────────────┼────────────────────────────────────┤
│                                        │                                    │
├────────────────────────────────────────┼────────────────────────────────────┤
│                                        │                                    │
└────────────────────────────────────────┴────────────────────────────────────┘

MIGRATION REQUIREMENTS:
What changes are required for existing systems to comply?
___________________________________________________________________________
___________________________________________________________________________

COST IMPLICATIONS:
┌─────────────────────────────────────────┬───────────────────────────────────┐
│ Cost Category                           │ Estimated Cost                    │
├─────────────────────────────────────────┼───────────────────────────────────┤
│ Implementation (new systems)            │                                   │
├─────────────────────────────────────────┼───────────────────────────────────┤
│ Migration (existing systems)            │                                   │
├─────────────────────────────────────────┼───────────────────────────────────┤
│ Training                                │                                   │
├─────────────────────────────────────────┼───────────────────────────────────┤
│ Ongoing Operations                      │                                   │
├─────────────────────────────────────────┼───────────────────────────────────┤
│ TOTAL                                   │                                   │
└─────────────────────────────────────────┴───────────────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
5. COMPLIANCE TIMELINE
══════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────┬───────────────────────────────────┐
│ Milestone                               │ Date                              │
├─────────────────────────────────────────┼───────────────────────────────────┤
│ Standard Effective Date                 │                                   │
├─────────────────────────────────────────┼───────────────────────────────────┤
│ New Systems Compliance Required         │                                   │
├─────────────────────────────────────────┼───────────────────────────────────┤
│ Grace Period End (existing systems)     │                                   │
├─────────────────────────────────────────┼───────────────────────────────────┤
│ Full Compliance Required                │                                   │
└─────────────────────────────────────────┴───────────────────────────────────┘

══════════════════════════════════════════════════════════════════════════════
6. EXCEPTIONS PROCESS
══════════════════════════════════════════════════════════════════════════════

How can projects request exceptions to this standard?
___________________________________________________________________________
___________________________________________________________________________

What criteria will be used to evaluate exception requests?
___________________________________________________________________________
___________________________________________________________________________

══════════════════════════════════════════════════════════════════════════════
7. APPROVAL SECTION
══════════════════════════════════════════════════════════════════════════════

PROPOSER:

Name: _________________________________ Signature: __________ Date: ________
Title: ________________________________

──────────────────────────────────────────────────────────────────────────────

TECHNICAL REVIEW (EA Office):

⬜ RECOMMENDED - Standard is technically sound and complete
⬜ NOT RECOMMENDED - See comments
⬜ REQUIRES REVISION - See comments

Comments:
___________________________________________________________________________
___________________________________________________________________________

Reviewer: _____________________________ Signature: __________ Date: ________
Title: ________________________________

──────────────────────────────────────────────────────────────────────────────

ARCHITECTURE BOARD DECISION:

⬜ APPROVED - Standard adopted
⬜ APPROVED WITH MODIFICATIONS (see below)
⬜ DEFERRED - Additional work required
⬜ REJECTED - See rationale

Modifications/Rationale:
___________________________________________________________________________
___________________________________________________________________________

Board Chair: ___________________________ Signature: __________ Date: ________

EA Board Meeting Reference: __________________________________________________

══════════════════════════════════════════════════════════════════════════════
```

---

## 10. QUICK REFERENCE CARDS

This section provides one-page quick reference cards for key GEATDM concepts.

---

### QR-01: Method Overview Card

**Purpose:** One-page visual summary of the GEATDM method.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                        GEATDM METHOD OVERVIEW                               │
│           Government Enterprise Architecture Target Development Method      │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  THE FIVE PHASES:                                                           │
│  ═══════════════════════════════════════════════════════════════════════   │
│                                                                             │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐  │
│  │ DISCOVER │ → │  ASSESS  │ → │  ADAPT   │ → │   PLAN   │ → │ EXECUTE  │  │
│  │  2-4 wks │   │  4-8 wks │   │  4-6 wks │   │  4-6 wks │   │ Ongoing  │  │
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘  │
│                                                                             │
│  DISCOVER: Classify organization, assess DPI readiness, select RA          │
│  ─────────────────────────────────────────────────────────────────────────  │
│  • Determine organization type (PDU/RA/SDA)                                 │
│  • Assess national DPI availability                                         │
│  • Select appropriate Reference Architecture                                │
│  • Key Tools: TK-01, TK-02, TK-03, TK-04, TK-05                            │
│                                                                             │
│  ASSESS: Document AS-IS state, perform gap analysis                        │
│  ─────────────────────────────────────────────────────────────────────────  │
│  • Document current capabilities and applications                           │
│  • Map to Reference Architecture                                            │
│  • Identify and prioritize gaps                                             │
│  • Key Tools: TK-06, TK-07, TK-08, TK-09, TK-10, TK-11                      │
│                                                                             │
│  ADAPT: Tailor Reference Architecture, define TO-BE state                   │
│  ─────────────────────────────────────────────────────────────────────────  │
│  • Customize RA for organization context                                    │
│  • Define target application portfolio                                      │
│  • Specify integration requirements                                         │
│  • Key Tools: TK-12, TK-13, TK-14, TK-15                                    │
│                                                                             │
│  PLAN: Create roadmap, build business case                                  │
│  ─────────────────────────────────────────────────────────────────────────  │
│  • Develop multi-year implementation roadmap                                │
│  • Create investment business case                                          │
│  • Define project portfolio                                                 │
│  • Key Tools: TK-16, TK-17, TK-18, TK-19, TK-20                            │
│                                                                             │
│  EXECUTE & GOVERN: Implement, monitor, improve continuously                 │
│  ─────────────────────────────────────────────────────────────────────────  │
│  • Execute implementation projects                                          │
│  • Monitor architecture compliance                                          │
│  • Manage exceptions via dispensation                                       │
│  • Key Tools: TK-21, TK-22, TK-23, TK-24, TK-25                            │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ORGANIZATION TYPES:                                                        │
│  ═══════════════════════════════════════════════════════════════════════   │
│                                                                             │
│  ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐           │
│  │      PDU        │ ⊂ │       RA        │ ⊂ │       SDA       │           │
│  │ Policy Dev Unit │   │ Regulatory Agency│   │Service Delivery │           │
│  │   72 caps       │   │   125 caps      │   │   214 caps      │           │
│  └─────────────────┘   └─────────────────┘   └─────────────────┘           │
│                                                                             │
│  Inheritance Principle: Each type contains all capabilities of predecessor  │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  KEY PRINCIPLES:                                                            │
│  ═══════════════════════════════════════════════════════════════════════   │
│                                                                             │
│  1. Reference Architecture Integrity - Customize within boundaries          │
│  2. DPI-First - Leverage national infrastructure before building            │
│  3. Building Block Reuse - GovStack BBs minimize custom development         │
│  4. Capability-Driven - Map functions to standard capability model          │
│  5. Governed Change - All deviations documented and approved                │
│                                                                             │
│                                                                             │
│  GEATDM v1.0 │ See full guide at: GEATDM-WP5-T582e-MasterGuide-v1.0.md     │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### QR-02: RA Selection Card

**Purpose:** Quick reference for selecting the appropriate Reference Architecture.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                    REFERENCE ARCHITECTURE SELECTION                         │
│                         Quick Decision Guide                                │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  QUICK SELECTION FLOWCHART:                                                 │
│  ═══════════════════════════════════════════════════════════════════════   │
│                                                                             │
│                      ┌────────────────────────┐                             │
│                      │   What is the PRIMARY  │                             │
│                      │   function of your     │                             │
│                      │   organization?        │                             │
│                      └───────────┬────────────┘                             │
│                                  │                                          │
│         ┌────────────────────────┼────────────────────────┐                 │
│         │                        │                        │                 │
│         ▼                        ▼                        ▼                 │
│  ┌────────────────┐    ┌────────────────┐    ┌────────────────┐            │
│  │  Policy &      │    │  Regulation &  │    │  Mass Service  │            │
│  │  Legislation   │    │  Licensing     │    │  Delivery      │            │
│  └───────┬────────┘    └───────┬────────┘    └───────┬────────┘            │
│          │                     │                     │                      │
│          ▼                     ▼                     ▼                      │
│     ┌─────────┐          ┌─────────┐          ┌─────────┐                  │
│     │   PDU   │          │   RA    │          │   SDA   │                  │
│     └─────────┘          └─────────┘          └─────────┘                  │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  COMPARISON TABLE:                                                          │
│  ═══════════════════════════════════════════════════════════════════════   │
│                                                                             │
│  ┌───────────────────┬───────────────────┬───────────────────┐             │
│  │       PDU         │        RA         │        SDA        │             │
│  │ Policy Dev Unit   │ Regulatory Agency │ Service Delivery  │             │
│  ├───────────────────┼───────────────────┼───────────────────┤             │
│  │ Policy-focused    │ Regulatory-focused│ Service-focused   │             │
│  │ Low transactions  │ Medium volume     │ High volume       │             │
│  │ <10K customers    │ 10K-100K entities │ >100K customers   │             │
│  │ No enforcement    │ Inspections       │ Mass enforcement  │             │
│  │ 72 capabilities   │ 125 capabilities  │ 214 capabilities  │             │
│  │ Basic Platform    │ Standard Platform │ Enterprise Platf. │             │
│  │ 5 data domains    │ 9 data domains    │ 14 data domains   │             │
│  │ 20 applications   │ 34 applications   │ 70 applications   │             │
│  └───────────────────┴───────────────────┴───────────────────┘             │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  EXAMPLE ORGANIZATIONS:                                                     │
│  ═══════════════════════════════════════════════════════════════════════   │
│                                                                             │
│  PDU Examples:                                                              │
│  • Ministry of Finance (policy division)                                    │
│  • National Planning Commission                                             │
│  • Policy Research Institute                                                │
│  • Chancellery / Cabinet Office                                             │
│                                                                             │
│  RA Examples:                                                               │
│  • Telecommunications Regulator                                             │
│  • Food Safety Authority                                                    │
│  • Building Permit Authority                                                │
│  • Data Protection Authority                                                │
│  • Professional Licensing Board                                             │
│                                                                             │
│  SDA Examples:                                                              │
│  • Tax Authority / Revenue Service                                          │
│  • Customs Administration                                                   │
│  • Social Security Administration                                           │
│  • Motor Vehicle Department                                                 │
│  • Land Registry (high volume)                                              │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  INHERITANCE PRINCIPLE:                                                     │
│  ═══════════════════════════════════════════════════════════════════════   │
│                                                                             │
│  PDU ⊂ RA ⊂ SDA                                                            │
│                                                                             │
│  Each successive type INHERITS all capabilities from its predecessor:       │
│  • RA = All PDU capabilities + Regulatory capabilities                      │
│  • SDA = All RA capabilities + Service Delivery capabilities                │
│                                                                             │
│  This means:                                                                │
│  • Start with the simplest RA that covers your needs                        │
│  • You won't "miss" capabilities by choosing a larger RA                    │
│  • Larger RAs require more implementation effort                            │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  BORDERLINE CASES:                                                          │
│  ═══════════════════════════════════════════════════════════════════════   │
│                                                                             │
│  When uncertain, use Classification Questionnaire (TK-01)                   │
│                                                                             │
│  Ministry with some regulatory function → Usually PDU                       │
│  Small regulator with simple licensing → Usually RA                         │
│  Regulator with high-volume enforcement → Consider SDA                      │
│  Multi-function organization → Use dominant function                        │
│                                                                             │
│                                                                             │
│  Full guide: GEATDM-WP5-T51-ClassificationGuide-v1.0.md                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### QR-03: Decision Points Card

**Purpose:** Summary of all key decision points in the GEATDM method.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                       GEATDM KEY DECISION POINTS                            │
│                          Quick Reference Guide                              │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  DISCOVER PHASE DECISIONS:                                                  │
│  ═══════════════════════════════════════════════════════════════════════   │
│                                                                             │
│  DP1: Organization Classification                                           │
│       Decision: PDU / RA / SDA                                              │
│       Tool: TK-01 Classification Questionnaire                              │
│       Authority: EA Team + Business Leadership                              │
│                                                                             │
│  DP2: DPI Readiness Level                                                   │
│       Decision: Level 1 (Limited) / Level 2 (Partial) / Level 3 (Full)     │
│       Tool: TK-02 DPI Readiness Checklist                                   │
│       Authority: EA Team                                                    │
│                                                                             │
│  DP3: Proceed / Delay Decision                                              │
│       Decision: Proceed to ASSESS / Address Prerequisites First             │
│       Tool: TK-04 DISCOVER Summary Template                                 │
│       Authority: EA Team + Steering Committee                               │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ASSESS PHASE DECISIONS:                                                    │
│  ═══════════════════════════════════════════════════════════════════════   │
│                                                                             │
│  DP4: Gap Prioritization                                                    │
│       Decision: Must Have / Should Have / Could Have / Won't Have           │
│       Tool: TK-10 Gap Analysis Workbook                                     │
│       Authority: EA Team + Business Stakeholders                            │
│                                                                             │
│  DP5: Technical Debt Treatment                                              │
│       Decision: Remediate Now / Remediate Later / Accept                    │
│       Tool: TK-10 Gap Analysis Workbook                                     │
│       Authority: EA Team + IT Leadership                                    │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ADAPT PHASE DECISIONS:                                                     │
│  ═══════════════════════════════════════════════════════════════════════   │
│                                                                             │
│  DP6: Capability Inclusion / Exclusion                                      │
│       Decision: Include (Core) / Include (Extended) / Exclude / Defer       │
│       Tool: TK-12 RA Customization Workbook                                 │
│       Authority: EA Team + Architecture Board                               │
│                                                                             │
│  DP7: Application Disposition                                               │
│       Decision: Retain / Enhance / Replace / Retire / New                   │
│       Tool: TK-14 Application Disposition Workbook                          │
│       Authority: EA Team + IT Leadership                                    │
│                                                                             │
│  DP8: Build vs Buy                                                          │
│       Decision: Build Custom / Buy COTS / Configure SaaS / Reuse Existing   │
│       Tool: TK-14 Application Disposition Workbook                          │
│       Authority: EA Team + Procurement                                      │
│                                                                             │
│  DP9: DPI Integration Approach                                              │
│       Decision: Full DPI / Hybrid / Local Implementation                    │
│       Tool: TK-15 Integration Requirements Template                         │
│       Authority: EA Team + Architecture Board                               │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PLAN PHASE DECISIONS:                                                      │
│  ═══════════════════════════════════════════════════════════════════════   │
│                                                                             │
│  DP10: Implementation Phasing Strategy                                      │
│        Decision: Big Bang / Phased / Pilot-then-Scale                       │
│        Tool: TK-16 Roadmap Development Workbook                             │
│        Authority: Steering Committee                                        │
│                                                                             │
│  DP11: Investment Approval (Go / No-Go)                                     │
│        Decision: Approve / Approve with Conditions / Reject / Defer         │
│        Tool: TK-17 Business Case Template                                   │
│        Authority: Steering Committee / Executive Board                      │
│                                                                             │
│  DP12: Resource Sourcing                                                    │
│        Decision: Internal / External / Mixed                                │
│        Tool: TK-19 Resource Requirements Template                           │
│        Authority: Steering Committee                                        │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  EXECUTE & GOVERN PHASE DECISIONS:                                          │
│  ═══════════════════════════════════════════════════════════════════════   │
│                                                                             │
│  DP13: Architecture Compliance                                              │
│        Decision: Compliant / Compliant with Conditions / Dispensation Req.  │
│        Tool: TK-21 Compliance Assessment Form                               │
│        Authority: EA Team (initial) / Architecture Board (escalation)       │
│                                                                             │
│  DP14: Phase Gate Approval                                                  │
│        Decision: Proceed / Proceed with Conditions / Rework / Cancel        │
│        Tool: TK-22 Project Checkpoint Template                              │
│        Authority: Architecture Board                                        │
│                                                                             │
│  DP15: Change Request Approval                                              │
│        Decision: Approve / Approve with Modifications / Reject              │
│        Tool: TK-30 Architecture Decision Record                             │
│        Authority: Architecture Board                                        │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  DECISION AUTHORITY SUMMARY:                                                │
│  ═══════════════════════════════════════════════════════════════════════   │
│                                                                             │
│  ┌───────────────────────────────┬─────────────────────────────────────┐    │
│  │ Decision Authority            │ Decision Types                      │    │
│  ├───────────────────────────────┼─────────────────────────────────────┤    │
│  │ EA Team                       │ DP1-DP3 (with stakeholders)         │    │
│  │ EA Team + Business            │ DP4-DP5                             │    │
│  │ EA Team + Architecture Board  │ DP6-DP9                             │    │
│  │ Steering Committee            │ DP10-DP12                           │    │
│  │ Architecture Board            │ DP13-DP15                           │    │
│  └───────────────────────────────┴─────────────────────────────────────┘    │
│                                                                             │
│                                                                             │
│  Full decision guidance: GEATDM-WP5-T582e-MasterGuide-v1.0.md              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## APPENDIX: TOOL INDEX

### Tool Index by Phase

```
┌─────────────────────────┬─────────────────────────────────────────────────────┐
│ Phase                   │ Tools                                               │
├─────────────────────────┼─────────────────────────────────────────────────────┤
│ DISCOVER                │ TK-01, TK-02, TK-03, TK-04, TK-05                   │
├─────────────────────────┼─────────────────────────────────────────────────────┤
│ ASSESS                  │ TK-06, TK-07, TK-08, TK-09, TK-10, TK-11            │
├─────────────────────────┼─────────────────────────────────────────────────────┤
│ ADAPT                   │ TK-12, TK-13, TK-14, TK-15                          │
├─────────────────────────┼─────────────────────────────────────────────────────┤
│ PLAN                    │ TK-16, TK-17, TK-18, TK-19, TK-20                   │
├─────────────────────────┼─────────────────────────────────────────────────────┤
│ EXECUTE & GOVERN        │ TK-21, TK-22, TK-23, TK-24, TK-25                   │
├─────────────────────────┼─────────────────────────────────────────────────────┤
│ Reference Architecture  │ TK-26, TK-27, TK-28                                 │
├─────────────────────────┼─────────────────────────────────────────────────────┤
│ Governance              │ TK-29, TK-30, TK-31                                 │
├─────────────────────────┼─────────────────────────────────────────────────────┤
│ Quick Reference         │ QR-01, QR-02, QR-03                                 │
└─────────────────────────┴─────────────────────────────────────────────────────┘
```

### Tool Index by Function

```
┌─────────────────────────────────────┬─────────────────────────────────────────┐
│ Function                            │ Tools                                   │
├─────────────────────────────────────┼─────────────────────────────────────────┤
│ Classification & Assessment         │ TK-01, TK-02, TK-03, TK-26, TK-27       │
├─────────────────────────────────────┼─────────────────────────────────────────┤
│ Inventory & Documentation           │ TK-05, TK-06, TK-07, TK-08, TK-09       │
├─────────────────────────────────────┼─────────────────────────────────────────┤
│ Analysis & Planning                 │ TK-10, TK-12, TK-14, TK-15, TK-16, TK-18│
├─────────────────────────────────────┼─────────────────────────────────────────┤
│ Business Case & Resources           │ TK-17, TK-19, TK-20                     │
├─────────────────────────────────────┼─────────────────────────────────────────┤
│ Compliance & Review                 │ TK-21, TK-22, TK-25                     │
├─────────────────────────────────────┼─────────────────────────────────────────┤
│ Exceptions & Reporting              │ TK-23, TK-24                            │
├─────────────────────────────────────┼─────────────────────────────────────────┤
│ Governance                          │ TK-29, TK-30, TK-31                     │
├─────────────────────────────────────┼─────────────────────────────────────────┤
│ Integration Specifications          │ TK-28                                   │
├─────────────────────────────────────┼─────────────────────────────────────────┤
│ Summary Templates                   │ TK-04, TK-11, TK-13                     │
├─────────────────────────────────────┼─────────────────────────────────────────┤
│ Quick Reference                     │ QR-01, QR-02, QR-03                     │
└─────────────────────────────────────┴─────────────────────────────────────────┘
```

### Complete Tool List

```
┌────────┬────────────────────────────────────────────────────────────────────┐
│ ID     │ Tool Name                                                          │
├────────┼────────────────────────────────────────────────────────────────────┤
│ TK-01  │ Organization Classification Questionnaire                          │
│ TK-02  │ DPI Readiness Checklist                                            │
│ TK-03  │ Reference Architecture Selection Matrix                            │
│ TK-04  │ DISCOVER Phase Summary Template                                    │
│ TK-05  │ Stakeholder Register Template                                      │
├────────┼────────────────────────────────────────────────────────────────────┤
│ TK-06  │ Capability Inventory Workbook                                      │
│ TK-07  │ Application Portfolio Inventory                                    │
│ TK-08  │ Data Asset Inventory                                               │
│ TK-09  │ Technology Standards Inventory                                     │
│ TK-10  │ Gap Analysis Workbook                                              │
│ TK-11  │ ASSESS Phase Summary Template                                      │
├────────┼────────────────────────────────────────────────────────────────────┤
│ TK-12  │ RA Customization Workbook                                          │
│ TK-13  │ Target Architecture Summary                                        │
│ TK-14  │ Application Disposition Workbook                                   │
│ TK-15  │ Integration Requirements Template                                  │
├────────┼────────────────────────────────────────────────────────────────────┤
│ TK-16  │ Roadmap Development Workbook                                       │
│ TK-17  │ Business Case Template                                             │
│ TK-18  │ Project Portfolio Template                                         │
│ TK-19  │ Resource Requirements Template                                     │
│ TK-20  │ Implementation Phase Specification                                 │
├────────┼────────────────────────────────────────────────────────────────────┤
│ TK-21  │ Compliance Assessment Form                                         │
│ TK-22  │ Project Checkpoint Template                                        │
│ TK-23  │ Dispensation Request Form                                          │
│ TK-24  │ EA Status Report Template                                          │
│ TK-25  │ Architecture Review Checklist                                      │
├────────┼────────────────────────────────────────────────────────────────────┤
│ TK-26  │ Capability Mapping Template                                        │
│ TK-27  │ Building Block Assessment                                          │
│ TK-28  │ DPI Integration Specification Template                             │
├────────┼────────────────────────────────────────────────────────────────────┤
│ TK-29  │ EA Board Meeting Agenda Template                                   │
│ TK-30  │ Architecture Decision Record (ADR) Template                        │
│ TK-31  │ Standards Approval Form                                            │
├────────┼────────────────────────────────────────────────────────────────────┤
│ QR-01  │ Method Overview Card                                               │
│ QR-02  │ RA Selection Card                                                  │
│ QR-03  │ Decision Points Card                                               │
└────────┴────────────────────────────────────────────────────────────────────┘
```

---

## END OF TOOLKIT

**Document Information:**
- Document ID: GEATDM-WP6-T61-Toolkit-v1.0
- Version: 1.0
- Date: 2026-01-20
- Status: Complete

**Total Tools:** 31 templates (TK-01 through TK-31) + 3 quick reference cards (QR-01 through QR-03)

**Related Documents:**
- GEATDM-WP5-T582e-MasterGuide-v1.0.md (Application Method Guide)
- GEATDM-WP2-PDU-RA-v1.0.md (PDU Reference Architecture)
- GEATDM-WP3-RA-RA-v1.0.md (RA Reference Architecture)
- GEATDM-WP4-SDA-RA-v1.0.md (SDA Reference Architecture)

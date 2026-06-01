# GEATDM Input Document Preprocessing Framework
## Standardized Intake and Analysis for Customer Materials

**Version:** 1.0  
**Date:** January 2026  
**Purpose:** Systematic preprocessing of customer input documents for TA engagements

---

## 1. Overview

### 1.1 Purpose

This framework provides a standardized approach for preprocessing customer input documents before beginning a Target Architecture engagement. It ensures consistent analysis regardless of the organization or sector.

### 1.2 Standard Input Folder Structure

All customer engagements should organize inputs in this structure:

```
[project-name]/
├── _as-is/                      # Current state documentation
│   ├── ea-findings-*.docx       # Existing EA assessments
│   ├── org-structure/           # Organization charts, governance
│   ├── systems-inventory/       # Application inventories
│   ├── process-docs/            # Process documentation
│   └── infrastructure/          # Technology infrastructure docs
│
├── _international/              # External best practices
│   ├── standards/               # Relevant standards (WCO, ISO, etc.)
│   ├── frameworks/              # Reference frameworks
│   ├── benchmarks/              # Comparative studies
│   └── guidance/                # International guidance (IMF, WB, etc.)
│
├── _practical-experience/       # Domain-specific knowledge
│   ├── capabilities/            # Capability models, taxonomies
│   ├── processes/               # Process templates, workflows
│   ├── data-models/             # Data models, APIs, schemas
│   ├── examples/                # Functional documentation examples
│   └── implementations/         # Case studies, lessons learned
│
├── _prompts/                    # Task prompts for phased work
│
└── _results/                    # Output documents
    └── [deliverables]
```

---

## 2. Preprocessing Workflow

### 2.1 High-Level Process

```
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│  1. INVENTORY   │ → │   2. CLASSIFY   │ → │   3. ANALYZE    │ → │   4. PREPARE    │
│  List all docs  │   │  Map to domains │   │  Extract value  │   │  Create summary │
└─────────────────┘   └─────────────────┘   └─────────────────┘   └─────────────────┘
```

### 2.2 Estimated Time by Engagement Size

| Engagement Size | Document Count | Preprocessing Time |
|-----------------|----------------|-------------------|
| Small | <20 documents | 2-4 hours |
| Medium | 20-50 documents | 4-8 hours |
| Large | 50+ documents | 1-2 days |

---

## 3. Step 1: Document Inventory

### 3.1 Inventory Template

For each folder, create an inventory using this template:

```markdown
## Document Inventory: [Folder Name]

| # | Document Name | Type | Size | Date | Language | Quality |
|---|---------------|------|------|------|----------|---------|
| 1 | [filename] | [type] | [MB] | [date] | [lang] | [H/M/L] |
| 2 | ... | | | | | |

### Summary
- Total documents: [n]
- Total size: [MB]
- Primary language: [language]
- Quality assessment: [overall rating]
```

### 3.2 Document Type Classification

| Type Code | Description | Examples |
|-----------|-------------|----------|
| **STR** | Strategy/Policy | Strategic plans, policy documents |
| **ORG** | Organizational | Org charts, governance, roles |
| **PRC** | Process | Process maps, workflows, procedures |
| **SYS** | Systems | System inventories, tech specs |
| **DAT** | Data | Data models, schemas, APIs |
| **INT** | Integration | Integration diagrams, API docs |
| **INF** | Infrastructure | Network diagrams, hosting docs |
| **SEC** | Security | Security policies, assessments |
| **STD** | Standards | Reference standards, guidelines |
| **BNC** | Benchmarks | Comparative studies, metrics |
| **EXP** | Examples | Functional docs, case studies |
| **REP** | Reports | Assessment reports, audits |

### 3.3 Quality Rating Criteria

| Rating | Criteria |
|--------|----------|
| **H (High)** | Complete, current (<2 years), detailed, well-structured |
| **M (Medium)** | Mostly complete, somewhat current (2-5 years), adequate detail |
| **L (Low)** | Incomplete, outdated (>5 years), limited detail, needs verification |

---

## 4. Step 2: Domain Classification

### 4.1 Document-to-BDAT Mapping Matrix

Map each document to the architecture domains it informs:

| Document | Business | Data | Application | Technology | Integration |
|----------|:--------:|:----:|:-----------:|:----------:|:-----------:|
| Org chart | ● | | | | |
| Process map | ● | ◐ | ◐ | | |
| System inventory | | | ● | ◐ | |
| Data model | | ● | ◐ | | |
| API specs | | ● | ● | | ● |
| Network diagram | | | | ● | ◐ |
| Integration diagram | | ◐ | ● | | ● |

**Legend:** ● Primary, ◐ Secondary

### 4.2 Folder-to-Phase Mapping

| Input Folder | Primary GEATDM Phase | Usage |
|--------------|---------------------|-------|
| `_as-is/` | ASSESS | Documents current state |
| `_international/` | ADAPT | Informs target design |
| `_practical-experience/` | ADAPT, PLAN | Provides patterns, templates |

### 4.3 Domain Coverage Assessment

After mapping, assess coverage gaps:

```markdown
## Domain Coverage Assessment

| Domain | Coverage | Key Sources | Gaps |
|--------|----------|-------------|------|
| Business | [%] | [doc list] | [missing items] |
| Data | [%] | [doc list] | [missing items] |
| Application | [%] | [doc list] | [missing items] |
| Technology | [%] | [doc list] | [missing items] |
| Integration | [%] | [doc list] | [missing items] |

### Actions Required
- [ ] Request missing documentation for [domain]
- [ ] Schedule interviews to fill gaps in [area]
- [ ] Verify currency of [document]
```

---

## 5. Step 3: Content Analysis

### 5.1 _as-is/ Folder Analysis

#### 5.1.1 AS-IS Analysis Checklist

| Element | Found | Document | Notes |
|---------|:-----:|----------|-------|
| **Business Architecture** | | | |
| Organization structure | ☐ | | |
| Service catalog | ☐ | | |
| Process inventory | ☐ | | |
| Stakeholder map | ☐ | | |
| Governance framework | ☐ | | |
| **Application Architecture** | | | |
| System inventory | ☐ | | |
| Technology stacks | ☐ | | |
| Vendor/support info | ☐ | | |
| **Data Architecture** | | | |
| Data sources list | ☐ | | |
| Data quality assessment | ☐ | | |
| Master data status | ☐ | | |
| **Technology Architecture** | | | |
| Infrastructure diagram | ☐ | | |
| Hosting arrangements | ☐ | | |
| Network topology | ☐ | | |
| Security architecture | ☐ | | |
| **Integration Architecture** | | | |
| Integration inventory | ☐ | | |
| API documentation | ☐ | | |
| Data flows | ☐ | | |

#### 5.1.2 AS-IS Document Analysis Template

For each AS-IS document, extract:

```markdown
## Document Analysis: [Document Name]

### Metadata
- **Source:** [Organization/Author]
- **Date:** [Creation/Update date]
- **Scope:** [What it covers]
- **Quality:** [H/M/L]

### Key Findings for BDAT Domains

#### Business Architecture Insights
- [Finding 1]
- [Finding 2]

#### Application Architecture Insights
- [Finding 1]
- [Finding 2]

#### Data Architecture Insights
- [Finding 1]
- [Finding 2]

#### Technology Architecture Insights
- [Finding 1]
- [Finding 2]

### Gaps Identified
- [Gap 1]
- [Gap 2]

### Questions for Clarification
- [Question 1]
- [Question 2]
```

### 5.2 _international/ Folder Analysis

#### 5.2.1 Best Practice Relevance Assessment

| Document | Sector Relevance | Applicability | Priority |
|----------|-----------------|---------------|----------|
| [doc name] | [H/M/L] | [Full/Partial/Reference] | [1/2/3] |

**Applicability Levels:**
- **Full**: Directly applicable to target architecture
- **Partial**: Concepts applicable but need adaptation
- **Reference**: Background information only

#### 5.2.2 International Standards Mapping

| Standard | Domain | How It Applies |
|----------|--------|----------------|
| [Standard name] | [Domain] | [Application description] |

**Common Standards by Sector:**

| Sector | Key Standards |
|--------|---------------|
| Customs | WCO RKC, WCO Data Model, WTO TFA, WCO SAFE |
| Tax | OECD Guidelines, TADAT Framework |
| Health | WHO Standards, HL7, ICD |
| Finance | PCI-DSS, ISO 27001, IFRS |
| Identity | ISO/IEC 24760, eIDAS |

#### 5.2.3 International Document Analysis Template

```markdown
## International Resource Analysis: [Document Name]

### Source & Authority
- **Organization:** [Issuing organization]
- **Date:** [Publication date]
- **Authority Level:** [Mandatory/Recommended/Guidance]

### Relevance to Engagement
- **Sector alignment:** [How well it fits]
- **Capability coverage:** [Which capabilities it addresses]
- **Architecture impact:** [What it influences]

### Key Takeaways for Target Architecture
1. [Takeaway 1 with reference section]
2. [Takeaway 2 with reference section]
3. [Takeaway 3 with reference section]

### Specific Recommendations to Incorporate
- [Recommendation 1]
- [Recommendation 2]
```

### 5.3 _practical-experience/ Folder Analysis

#### 5.3.1 Experience Asset Classification

| Asset Type | Description | TA Usage |
|------------|-------------|----------|
| **Capability Models** | Predefined capability hierarchies | Capability architecture baseline |
| **Process Templates** | Standard process flows | Business architecture patterns |
| **Data Models** | Entity definitions, APIs | Data architecture baseline |
| **Functional Specs** | System specifications | Application architecture patterns |
| **Case Studies** | Implementation examples | Lessons learned, risk mitigation |

#### 5.3.2 Reusability Assessment

For each practical experience document:

| Document | Reuse Level | Adaptation Required | Effort |
|----------|-------------|---------------------|--------|
| [doc name] | [High/Med/Low] | [Description] | [Hours] |

**Reuse Levels:**
- **High**: Can use directly with minimal changes
- **Medium**: Good foundation but needs customization
- **Low**: Reference value only, significant rework needed

#### 5.3.3 Practical Experience Analysis Template

```markdown
## Practical Experience Analysis: [Document Name]

### Asset Type & Origin
- **Type:** [Capability/Process/Data/Functional/Case Study]
- **Origin:** [Project/Country/Organization]
- **Date:** [When created]

### Content Summary
[Brief description of what the document contains]

### Mapping to GEATDM Reference Architecture

| RA Element | This Document Provides |
|------------|----------------------|
| Capability C[x.x] | [What it covers] |
| Application A[x.x] | [What it covers] |
| Data Domain D[x] | [What it covers] |

### Reusability Assessment
- **Direct reuse:** [What can be used as-is]
- **Adaptation needed:** [What needs modification]
- **Reference only:** [What is just for context]

### Integration Plan
- [ ] Use for [specific purpose] in [phase]
- [ ] Adapt [section] for [deliverable]
```

---

## 6. Step 4: Preprocessing Summary

### 6.1 Input Summary Report Template

Generate this report after preprocessing:

```markdown
# Input Document Preprocessing Summary
## [Organization Name] - [Engagement Name]

**Preprocessing Date:** [Date]
**Preprocessed By:** [Name]

---

## 1. Document Inventory Summary

| Folder | Document Count | Total Size | Quality |
|--------|---------------|------------|---------|
| _as-is/ | [n] | [MB] | [H/M/L] |
| _international/ | [n] | [MB] | [H/M/L] |
| _practical-experience/ | [n] | [MB] | [H/M/L] |
| **Total** | **[n]** | **[MB]** | |

## 2. Organization Classification

**Preliminary Classification:** [PDU / RA / SDA]

**Rationale:**
- Transaction volume: [Description]
- Customer base: [Description]
- Service complexity: [Description]
- Availability requirements: [Description]

**Reference Architecture:** [File name]

## 3. Domain Coverage Analysis

| Domain | Coverage | Primary Sources | Critical Gaps |
|--------|----------|-----------------|---------------|
| Business | [%] | [List] | [Gaps] |
| Data | [%] | [List] | [Gaps] |
| Application | [%] | [List] | [Gaps] |
| Technology | [%] | [List] | [Gaps] |
| Integration | [%] | [List] | [Gaps] |

## 4. Key Findings by Folder

### _as-is/ Key Findings
1. [Major finding 1]
2. [Major finding 2]
3. [Major finding 3]

### _international/ Key Resources
1. [Key resource 1 and its value]
2. [Key resource 2 and its value]
3. [Key resource 3 and its value]

### _practical-experience/ Reusable Assets
1. [Asset 1 and how it will be used]
2. [Asset 2 and how it will be used]
3. [Asset 3 and how it will be used]

## 5. Resource Mapping to GEATDM Phases

| Phase | Primary Inputs | Supporting Inputs |
|-------|----------------|-------------------|
| DISCOVER | [List] | [List] |
| ASSESS | [List] | [List] |
| ADAPT | [List] | [List] |
| PLAN | [List] | [List] |

## 6. Gaps and Data Collection Needs

### Critical Gaps (Must Address Before Starting)
- [ ] [Gap 1] - Recommend: [Action]
- [ ] [Gap 2] - Recommend: [Action]

### Important Gaps (Address During ASSESS)
- [ ] [Gap 1] - Recommend: [Action]
- [ ] [Gap 2] - Recommend: [Action]

### Nice-to-Have (If Available)
- [ ] [Gap 1]
- [ ] [Gap 2]

## 7. Recommended Interview Topics

| Stakeholder Role | Topics to Cover | Related Gap |
|------------------|-----------------|-------------|
| [Role 1] | [Topics] | [Gap it addresses] |
| [Role 2] | [Topics] | [Gap it addresses] |

## 8. Engagement Readiness Assessment

| Criterion | Status | Notes |
|-----------|--------|-------|
| Sufficient AS-IS documentation | [✓/✗] | |
| Clear organization classification | [✓/✗] | |
| Relevant international references | [✓/✗] | |
| Reusable practical experience | [✓/✗] | |
| Identified interview targets | [✓/✗] | |

**Overall Readiness:** [Ready / Ready with Conditions / Not Ready]

**Conditions/Actions Required:**
1. [Action 1]
2. [Action 2]
```

---

## 7. Sector-Specific Preprocessing Guides

### 7.1 Customs Sector

#### Expected Documents in _as-is/
- [ ] Organizational structure (customs divisions, border posts)
- [ ] ASYCUDA or customs system documentation
- [ ] Declaration processing workflows
- [ ] Integration with tax authority
- [ ] Payment processing arrangements
- [ ] Risk management procedures

#### Expected Documents in _international/
- [ ] WCO Revised Kyoto Convention references
- [ ] WCO Data Model specifications
- [ ] WTO Trade Facilitation Agreement guidance
- [ ] IMF Customs matters guidance
- [ ] Regional trade agreement requirements (SACU, SADC, ECOWAS, etc.)

#### Expected Documents in _practical-experience/
- [ ] Customs capability models
- [ ] Declaration/manifest/inspection process templates
- [ ] Customs data models (Declaration, Cargo, Risk, etc.)
- [ ] Selectivity system specifications
- [ ] Single window documentation

#### Customs-Specific Classification Indicators
- Number of border posts
- Annual declaration volumes
- Trade corridor complexity
- Regional integration requirements

### 7.2 Tax Sector

#### Expected Documents in _as-is/
- [ ] Tax authority organizational structure
- [ ] Tax administration system documentation
- [ ] Registration and filing processes
- [ ] Payment and collection procedures
- [ ] Audit and compliance operations

#### Expected Documents in _international/
- [ ] OECD tax administration guidance
- [ ] TADAT assessment framework
- [ ] IMF tax administration publications
- [ ] Regional tax harmonization requirements

#### Expected Documents in _practical-experience/
- [ ] Tax capability models
- [ ] Return processing workflows
- [ ] Taxpayer data models
- [ ] Risk-based audit selection models
- [ ] Digital tax service examples

### 7.3 Social Security Sector

#### Expected Documents in _as-is/
- [ ] Social security authority structure
- [ ] Contribution collection processes
- [ ] Benefit calculation and disbursement
- [ ] Employer registration and reporting
- [ ] Compliance and enforcement

#### Expected Documents in _international/
- [ ] ILO social security guidelines
- [ ] ISSA administration standards
- [ ] Regional social security agreements

#### Expected Documents in _practical-experience/
- [ ] Social security capability models
- [ ] Contribution and benefit data models
- [ ] Payment disbursement workflows
- [ ] Fraud detection patterns

### 7.4 Regulatory Agency Sector

#### Expected Documents in _as-is/
- [ ] Regulatory mandate and legal framework
- [ ] Licensing/permitting processes
- [ ] Inspection and audit procedures
- [ ] Enforcement mechanisms
- [ ] Public registry requirements

#### Expected Documents in _international/
- [ ] Sector-specific regulatory standards
- [ ] International regulatory cooperation agreements
- [ ] Best practice guides for regulatory agencies

#### Expected Documents in _practical-experience/
- [ ] Regulatory capability models
- [ ] License application workflows
- [ ] Inspection management processes
- [ ] Compliance monitoring patterns

---

## 8. Quality Assurance Checklist

### 8.1 Pre-Engagement Preprocessing QA

Before finalizing preprocessing:

- [ ] All three folders inventoried completely
- [ ] Each document classified by type and domain
- [ ] Domain coverage gaps identified
- [ ] Organization classification rationale documented
- [ ] Key reusable assets identified
- [ ] Critical gaps flagged with mitigation actions
- [ ] Interview topics derived from gaps
- [ ] Engagement readiness assessed
- [ ] Input Summary Report completed

### 8.2 Handoff Checklist

Before starting DISCOVER phase:

- [ ] Input Summary Report reviewed with engagement team
- [ ] Critical gap mitigation actions initiated
- [ ] Interview schedule created based on gap analysis
- [ ] Reference Architecture file identified and accessible
- [ ] Reusable assets earmarked for specific phases
- [ ] Customer confirmed on document completeness

---

## 9. Templates and Tools

### 9.1 Quick Inventory Script (Conceptual)

For large document sets, consider scripting inventory:

```python
# Conceptual script for document inventory
# Actual implementation depends on environment

import os
from pathlib import Path

def inventory_folder(folder_path):
    inventory = []
    for file in Path(folder_path).rglob('*'):
        if file.is_file():
            inventory.append({
                'name': file.name,
                'path': str(file.relative_to(folder_path)),
                'size_mb': file.stat().st_size / (1024*1024),
                'extension': file.suffix,
                'modified': file.stat().st_mtime
            })
    return inventory

# Usage:
# as_is_docs = inventory_folder('_as-is')
# international_docs = inventory_folder('_international')
# practical_docs = inventory_folder('_practical-experience')
```

### 9.2 Document Classification Tags

Use these tags for organizing documents:

```
#as-is #to-be #gap
#business #data #application #technology #integration
#strategy #process #system #infrastructure #security
#high-priority #medium-priority #low-priority
#reusable #reference-only #outdated
#customs #tax #social-security #regulatory #generic
```

---

## 10. Appendix: Sample Preprocessing for The Gambia Customs

### Folder Structure Applied

```
cu_ea_prj/
├── _as-is/
│   └── ea-findings-BDAT-v3.docx    # Gambia template
│
├── _international/
│   ├── IMF - CRM Framework.pdf
│   ├── IMF - Essential Analytics for CRM.pdf
│   ├── IMF - Generative AI for CRM.pdf
│   ├── IMF - Understanding AI in Tax and Customs.pdf
│   └── imf-on-customs.md
│
├── _practical-experience/
│   ├── customs-capabilities.docx    # WCO/WTO-aligned capabilities
│   ├── CDPS Detailed Functional Description.docx
│   ├── Customs Controls.docx
│   ├── KSA-Customs Processes.xlsx
│   ├── _Business Process/           # Process diagrams
│   ├── _Data Model/                 # API specifications
│   └── _examples/                   # Functional documentation
│
├── _prompts/
│
└── _results/
    └── gambia-customs-ta-approach.md
```

### Key Preprocessing Findings

| Folder | Documents | Key Value |
|--------|-----------|-----------|
| _as-is | 1 (Gambia reference) | Template structure; comparable context |
| _international | 6 | IMF CRM, Analytics, AI guidance |
| _practical-experience | 20+ | Rich customs-specific content from KSA |

### Domain Coverage

| Domain | Coverage | Primary Sources |
|--------|----------|-----------------|
| Business | 85% | customs-capabilities.docx, KSA processes |
| Data | 90% | _Data Model/ API specifications |
| Application | 80% | CDPS, _examples/ functional docs |
| Technology | 40% | Need customer-specific infrastructure docs |
| Integration | 60% | API models, some process diagrams |

### Classification Outcome

**Organization Type:** SDA (Service Delivery Authority)
**Reference Architecture:** GEATDM-WP4-T47-SDA-RA-Complete-v1.0.md

---

*Input Preprocessing Framework v1.0 - January 2026*
*For use with GEATDM Method*

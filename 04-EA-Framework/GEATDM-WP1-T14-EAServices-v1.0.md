# Enterprise Architecture Services Catalog

**Document ID:** GEATDM-WP1-T14-EAServices-v1.0  
**Version:** 1.0  
**Status:** Complete  
**Date:** 2025-01-19

---

## 1. EA Services Overview

### 1.1 Purpose

This document defines the service catalog for an Enterprise Architecture (EA) Office/function within public sector organizations. It provides a standardized set of services that EA teams deliver to support digital transformation, ensure architectural alignment, and maximize the value of IT investments.

### 1.2 Service Portfolio Structure

EA Office services are organized into six categories that span strategic planning through operational support:

```
┌─────────────────────────────────────────────────────────────────┐
│                    EA SERVICE PORTFOLIO                          │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  STRATEGIC   │  │   PROJECT    │  │   ADVISORY   │          │
│  │  SERVICES    │  │   SUPPORT    │  │   SERVICES   │          │
│  │              │  │   SERVICES   │  │              │          │
│  │ • IT Strategy│  │ • Solution   │  │ • Technical  │          │
│  │   Support    │  │   Review     │  │   Consult    │          │
│  │ • Roadmap    │  │ • Procure    │  │ • Domain     │          │
│  │   Planning   │  │   Support    │  │   Guidance   │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  REPOSITORY  │  │  GOVERNANCE  │  │  ASSESSMENT  │          │
│  │   SERVICES   │  │   SERVICES   │  │   SERVICES   │          │
│  │              │  │              │  │              │          │
│  │ • Framework  │  │ • Compliance │  │ • Maturity   │          │
│  │   Maint.     │  │   Review     │  │   Assessment │          │
│  │ • EA Dev     │  │ • Standards  │  │ • Innovation │          │
│  │ • Repository │  │   Enforce    │  │   Research   │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────────────────────────────────────────────┘
```

### 1.3 Service Delivery Principles

All EA services operate according to the following principles:

1. **Business Alignment** – Services prioritize business value and strategic alignment
2. **Stakeholder Focus** – Services are designed with stakeholder needs at the center
3. **Scalability** – Services can be scaled based on organization size and complexity
4. **Transparency** – Service processes, timelines, and outputs are clearly communicated
5. **Continuous Improvement** – Services evolve based on feedback and lessons learned
6. **Standards-Based** – Services follow industry standards and best practices

### 1.4 Service Trigger Types

EA services are triggered in two ways:

| Trigger Type | Description | Examples |
|--------------|-------------|----------|
| **Mandate-Driven** | Scheduled or required services initiated by the EA Office | Framework reviews, compliance audits, annual assessments |
| **Request-Driven** | Services initiated by stakeholder request | Architecture consultation, procurement support, solution review |

---

## 2. Service Card Template

All EA services are documented using a standardized service card format to ensure consistency and clarity.

### 2.1 Service Card Structure

```
┌──────────────────────────────────────────────────────────────────┐
│ SERVICE CARD                                                      │
├──────────────────────────────────────────────────────────────────┤
│ Service ID:        [EA-SRV-XX]                                   │
│ Service Name:      [Name]                                        │
│ Service Category:  [Strategic/Project/Advisory/Repository/       │
│                     Governance/Assessment]                        │
│ Service Owner:     [Role]                                        │
│ Service Type:      [Mandate-Driven / Request-Driven]             │
├──────────────────────────────────────────────────────────────────┤
│ SERVICE DESCRIPTION                                              │
│ [Brief description of the service purpose and value]             │
├──────────────────────────────────────────────────────────────────┤
│ SERVICE TRIGGER                                                  │
│ [What initiates this service]                                    │
├─────────────────────────────┬────────────────────────────────────┤
│ Execution Priority:  [H/M/L]│ SLA Timeframe: [Duration]          │
├─────────────────────────────┴────────────────────────────────────┤
│ KEY INPUTS              │ MAIN ACTIVITIES        │ KEY OUTPUTS   │
│ • [Input 1]             │ • [Activity 1]         │ • [Output 1]  │
│ • [Input 2]             │ • [Activity 2]         │ • [Output 2]  │
│ • [Input 3]             │ • [Activity 3]         │ • [Output 3]  │
├──────────────────────────────────────────────────────────────────┤
│ AFFECTED ARCHITECTURE DOMAINS                                    │
│ □ Strategy  □ Business  □ Application  □ Data  □ Technology      │
├──────────────────────────────────────────────────────────────────┤
│ SERVICE CUSTOMERS                                                │
│ □ IT Departments  □ Business Departments  □ External Agencies    │
├──────────────────────────────────────────────────────────────────┤
│ ORGANIZATION APPLICABILITY                                       │
│ □ PDU (Policy Development Unit)                                  │
│ □ RA (Regulatory Agency)                                         │
│ □ SDA (Service Delivery Authority)                               │
└──────────────────────────────────────────────────────────────────┘
```

### 2.2 Execution Priority Definitions

| Priority | Description | Response Expectation |
|----------|-------------|---------------------|
| **High** | Critical to business operations or strategic initiatives | Immediate attention; resources prioritized |
| **Medium** | Important but not time-critical | Scheduled within normal workflow |
| **Low** | Beneficial but can be deferred | Addressed when capacity permits |

---

## 3. Strategic Services

Strategic services support alignment between business strategy and IT capabilities, ensuring technology investments deliver maximum business value.

### 3.1 EA-SRV-01: IT Strategic Planning Support

| Attribute | Value |
|-----------|-------|
| **Service ID** | EA-SRV-01 |
| **Service Name** | IT Strategic Planning Support |
| **Service Category** | Strategic Services |
| **Service Owner** | Chief Enterprise Architect |
| **Service Type** | Request-Driven |

**Service Description:**

This service increases cooperation between business and IT departments to develop and update the IT Strategy in alignment with organizational business strategy. The EA Office provides required inputs (EA artifacts, architecture projects, IT roadmap components) and facilitates analysis of intersections between business strategy items and IT capabilities to optimize strategic planning.

**Service Trigger:** Service request from IT or business departments during strategic planning cycles

| Execution Priority | SLA Timeframe |
|-------------------|---------------|
| High | 2 Weeks |

**Key Inputs:**
- Organizational Strategy Plan
- Current and Planned Projects Portfolio
- EA Artifacts (current and target state)
- Business Capability Model

**Main Execution Activities:**
1. Define and analyze intersections and dependencies between business strategy and IT strategy components
2. Develop or update strategy components according to analysis results
3. Develop or update roadmap components including IT and EA projects
4. Validate alignment with architecture principles and target state

**Key Service Outputs:**
- Developed/Updated IT Strategy Document
- Developed/Updated IT Roadmap
- Strategy-Architecture Alignment Report

**Affected Architecture Domains:** ☑ Strategy ☑ Business ☑ Application ☑ Data ☑ Technology

**Service Customers:** IT Departments, Business Departments, Executive Leadership

**Organization Applicability:** ☐ PDU ☑ RA ☑ SDA

---

### 3.2 EA-SRV-02: Architecture Roadmap Planning

| Attribute | Value |
|-----------|-------|
| **Service ID** | EA-SRV-02 |
| **Service Name** | Architecture Roadmap Planning |
| **Service Category** | Strategic Services |
| **Service Owner** | Chief Enterprise Architect |
| **Service Type** | Mandate-Driven |

**Service Description:**

This service develops and maintains the architecture implementation roadmap that guides the organization from current state to target architecture. It identifies projects, establishes priorities, defines dependencies, and sequences initiatives to ensure orderly transformation.

**Service Trigger:** Annual planning cycle or major strategic change

| Execution Priority | SLA Timeframe |
|-------------------|---------------|
| High | 4 Weeks |

**Key Inputs:**
- Target Architecture Artifacts
- Current State Assessment
- Strategic Priorities
- Available Resources and Budget
- Project Portfolio

**Main Execution Activities:**
1. Analyze gaps between current and target architecture
2. Identify required projects to bridge gaps
3. Define project dependencies and sequencing
4. Establish priorities based on business value and risk
5. Develop implementation timeline
6. Identify resource requirements and risks

**Key Service Outputs:**
- Architecture Roadmap Document
- Project Cards for EA-driven initiatives
- Resource and Budget Estimates
- Risk Assessment

**Affected Architecture Domains:** ☑ Strategy ☑ Business ☑ Application ☑ Data ☑ Technology

**Service Customers:** IT Departments, Business Departments, PMO, Finance

**Organization Applicability:** ☐ PDU ☑ RA ☑ SDA

---

## 4. Project Support Services

Project support services ensure that IT projects align with enterprise architecture and follow established standards throughout the project lifecycle.

### 4.1 EA-SRV-03: Solution Architecture Review

| Attribute | Value |
|-----------|-------|
| **Service ID** | EA-SRV-03 |
| **Service Name** | Solution Architecture Review |
| **Service Category** | Project Support Services |
| **Service Owner** | Chief Enterprise Architect |
| **Service Type** | Mandate-Driven / Request-Driven |

**Service Description:**

This service reviews and assesses the alignment of proposed solution designs with the target architecture and established standards. It ensures that IT projects comply with architectural principles, identifies potential issues, and recommends improvements or corrective actions before implementation.

**Service Trigger:** Project reaching design phase or service request from project teams

| Execution Priority | SLA Timeframe |
|-------------------|---------------|
| High | 1-2 Weeks (based on complexity) |

**Key Inputs:**
- Solution Design Document (SDD)
- Architecture Requirements
- Target Architecture Artifacts
- Architecture Principles and Standards
- Architecture Compliance Checklist

**Main Execution Activities:**
1. Prepare and customize architecture compliance checklist for the specific solution
2. Conduct compliance review meetings with project stakeholders
3. Assess alignment across all architecture domains
4. Develop compliance report documenting findings and recommendations
5. Review and validate findings with stakeholders
6. Trigger dispensation process if non-compliance is identified

**Key Service Outputs:**
- Architecture Compliance Report
- Recommendations for improvement
- Dispensation Request (if required)
- Updated Solution Design guidance

**Affected Architecture Domains:** ☑ Strategy ☑ Business ☑ Application ☑ Data ☑ Technology

**Service Customers:** IT Departments, Project Teams, Vendors

**Organization Applicability:** ☐ PDU ☑ RA ☑ SDA

---

### 4.2 EA-SRV-04: Procurement Support

| Attribute | Value |
|-----------|-------|
| **Service ID** | EA-SRV-04 |
| **Service Name** | Procurement Support |
| **Service Category** | Project Support Services |
| **Service Owner** | EA Office |
| **Service Type** | Request-Driven |

**Service Description:**

This service supports the procurement cycle for technical components and solutions by providing enterprise architecture artifacts, standards, and technical requirements. It facilitates the creation of RFPs with appropriate technical specifications and supports the evaluation of vendor proposals to ensure alignment with target architecture.

**Service Trigger:** Service request from IT, business, or procurement departments

| Execution Priority | SLA Timeframe |
|-------------------|---------------|
| Medium | 2 Weeks |

**Key Inputs:**
- Problem Statement / Business Need
- Draft RFP (if available)
- Technical Proposals (for evaluation phase)
- Architecture Standards and Principles
- Target Architecture Artifacts

**Main Execution Activities:**
1. Review and provide input on RFP technical requirements
2. Ensure RFP references appropriate architecture standards
3. Develop technical evaluation criteria aligned with architecture
4. Review vendor technical proposals against architecture requirements
5. Produce technical evaluation report with recommendations
6. Support vendor clarification and Q&A process

**Key Service Outputs:**
- RFP Technical Requirements Input
- Updated RFP (if required)
- Technical Evaluation Criteria
- Technical Evaluation Report
- Response to Vendor Questions

**Affected Architecture Domains:** ☑ Strategy ☑ Business ☑ Application ☑ Data ☑ Technology

**Service Customers:** IT Departments, Business Departments, Procurement Department

**Organization Applicability:** ☐ PDU ☑ RA ☑ SDA

---

## 5. Advisory Services

Advisory services provide expert architectural guidance to help departments solve problems, design solutions, and make informed technology decisions.

### 5.1 EA-SRV-05: Technical Architecture Consultation

| Attribute | Value |
|-----------|-------|
| **Service ID** | EA-SRV-05 |
| **Service Name** | Technical Architecture Consultation |
| **Service Category** | Advisory Services |
| **Service Owner** | EA Office |
| **Service Type** | Request-Driven |

**Service Description:**

This service provides architectural advice to different departments to help them define the best approach, design, or architecture for solving problems they face. This includes solution architecture guidance, infrastructure optimization, integration patterns, and support for strategic project implementation through required expertise.

**Service Trigger:** Service request from IT or business departments

| Execution Priority | SLA Timeframe |
|-------------------|---------------|
| Medium | 1-2 Weeks |

**Key Inputs:**
- Problem Statement
- Current State Documentation
- Business Requirements
- Constraints and Dependencies
- Available Technology Options

**Main Execution Activities:**
1. Analyze the problem statement and understand requirements
2. Assess current state and constraints
3. Identify architectural options and alternatives
4. Evaluate options against architecture principles and standards
5. Develop recommendations with rationale
6. Present and discuss recommendations with stakeholders

**Key Service Outputs:**
- Architecture Recommendations Document
- Solution Options Analysis
- Implementation Guidance
- Architecture Decision Record (if applicable)

**Affected Architecture Domains:** ☑ Strategy ☑ Business ☑ Application ☑ Data ☑ Technology

**Service Customers:** IT Departments, Business Departments, Project Teams

**Organization Applicability:** ☐ PDU ☑ RA ☑ SDA

---

### 5.2 EA-SRV-06: Domain Architecture Guidance

| Attribute | Value |
|-----------|-------|
| **Service ID** | EA-SRV-06 |
| **Service Name** | Domain Architecture Guidance |
| **Service Category** | Advisory Services |
| **Service Owner** | Domain Architect |
| **Service Type** | Request-Driven |

**Service Description:**

This service provides specialized guidance within specific architecture domains (Business, Application, Data, Technology). Domain architects work with stakeholders to address domain-specific questions, provide expertise on best practices, and ensure consistency with domain standards and reference architectures.

**Service Trigger:** Service request from departments or project teams

| Execution Priority | SLA Timeframe |
|-------------------|---------------|
| Medium | 1 Week |

**Key Inputs:**
- Specific Domain Question or Problem
- Current Domain Artifacts
- Domain Standards and Guidelines
- Reference Architectures

**Main Execution Activities:**
1. Understand the domain-specific question or problem
2. Review relevant domain artifacts and standards
3. Provide expert guidance and recommendations
4. Document decisions and rationale
5. Update domain artifacts if needed

**Key Service Outputs:**
- Domain-Specific Guidance Document
- Updated Domain Artifacts (if applicable)
- Architecture Decision Record

**Affected Architecture Domains:** Varies by request (Business, Application, Data, or Technology)

**Service Customers:** IT Departments, Business Departments, Project Teams

**Organization Applicability:** ☐ PDU ☑ RA ☑ SDA

---

## 6. Repository Services

Repository services maintain the EA framework, standards, and artifacts that form the foundation of the organization's architectural practice.

### 6.1 EA-SRV-07: EA Framework Maintenance

| Attribute | Value |
|-----------|-------|
| **Service ID** | EA-SRV-07 |
| **Service Name** | EA Framework Maintenance |
| **Service Category** | Repository Services |
| **Service Owner** | Chief Enterprise Architect |
| **Service Type** | Mandate-Driven |

**Service Description:**

This service manages and updates the EA framework by introducing and updating EA standards, services, patterns, and reference architectures based on feedback and lessons learned from service implementations. It ensures that the technical environment remains aligned with leading practices and industry standards.

**Service Trigger:** Scheduled internal tasks (quarterly/annual review cycles)

| Execution Priority | SLA Timeframe |
|-------------------|---------------|
| High | 4 Weeks (after committee approval) |

**Key Inputs:**
- Current EA Standards
- Current Reference Architectures
- Stakeholder Feedback
- Lessons Learned from Projects
- Industry Best Practices

**Main Execution Activities:**
1. Define related standards for each architecture domain
2. Evaluate standard usability and applicability
3. Customize standards as required for organizational context
4. Assess impact of standards on EA methodology and reference architectures
5. Update EA methodology and reference architectures as required
6. Publish updated framework components

**Key Service Outputs:**
- Updated EA Methodology
- Updated EA Standards
- Updated Reference Architectures
- Framework Change Log

**Affected Architecture Domains:** ☑ Strategy ☑ Business ☑ Application ☑ Data ☑ Technology

**Service Customers:** IT Departments, Business Departments, EA Team

**Organization Applicability:** ☐ PDU ☑ RA ☑ SDA

---

### 6.2 EA-SRV-08: EA Development

| Attribute | Value |
|-----------|-------|
| **Service ID** | EA-SRV-08 |
| **Service Name** | EA Development |
| **Service Category** | Repository Services |
| **Service Owner** | Chief Enterprise Architect |
| **Service Type** | Mandate-Driven / Request-Driven |

**Service Description:**

This service constructs and maintains enterprise architecture artifacts for all EA domains (business, data, applications, technology) that fulfill business and technology demands. Development follows the established EA methodology, ensuring the enterprise architecture repository is kept up-to-date with changes published to related business units.

**Service Trigger:** Scheduled internal tasks OR service request from IT or business departments

| Execution Priority | SLA Timeframe |
|-------------------|---------------|
| High | Continuous (based on change size) |

**Key Inputs:**
- Problem Statement describing need for architecture change
- Business Case
- Current Architecture Artifacts
- Architecture Principles and Standards

**Main Execution Activities:**
1. Discuss and evaluate the problem statement or business case
2. Assess impact on current EA architecture
3. Develop implementation plan to execute EA methodology cycle
4. Implement architecture development cycle with stakeholder cooperation
5. Develop implementation roadmap reflecting required changes
6. Develop architecture contracts (if required)
7. Update EA repository with new/modified artifacts

**Key Service Outputs:**
- Updated EA Artifacts for impacted domains
- Architecture Contracts (if required)
- Implementation Roadmap
- Updated EA Repository

**Affected Architecture Domains:** ☑ Strategy ☑ Business ☑ Application ☑ Data ☑ Technology

**Service Customers:** IT Departments, Business Departments, External Agencies

**Organization Applicability:** ☐ PDU ☑ RA ☑ SDA

---

## 7. Governance Services

Governance services ensure compliance with architectural standards and manage changes and exceptions to the established architecture.

### 7.1 EA-SRV-09: Architecture Compliance & Governance

| Attribute | Value |
|-----------|-------|
| **Service ID** | EA-SRV-09 |
| **Service Name** | Architecture Compliance & Governance |
| **Service Category** | Governance Services |
| **Service Owner** | Chief Enterprise Architect |
| **Service Type** | Mandate-Driven |

**Service Description:**

This service reviews and assures alignment of IT project execution with designed and approved target architecture artifacts. It performs periodic inspections of the architecture environment to ensure control over the technical landscape, identify deviations from defined standards, and manage necessary dispensations.

**Service Trigger:** Scheduled internal tasks (based on governance calendar)

| Execution Priority | SLA Timeframe |
|-------------------|---------------|
| High | Continuous (based on change size) |

**Key Inputs:**
- EA Standards and Principles
- Target Architecture Artifacts
- Project Implementation Documents
- Previous Compliance Reports

**Main Execution Activities:**
1. Define EA governance plan and schedule
2. Request EA-related documents from concerned departments for review
3. Conduct compliance assessments against standards
4. Develop audit report documenting findings, deviations, and compliance status
5. Provide recommendations for corrective actions
6. Follow up with departments to ensure implementation of corrective actions
7. Track and report governance metrics

**Key Service Outputs:**
- EA Governance Plan
- Compliance Assessment Reports
- Audit Findings Documentation
- Corrective Action Recommendations
- Governance Metrics Report

**Affected Architecture Domains:** ☑ Strategy ☑ Business ☑ Application ☑ Data ☑ Technology

**Service Customers:** IT Departments, Business Departments, External Agencies

**Organization Applicability:** ☐ PDU ☑ RA ☑ SDA

---

### 7.2 EA-SRV-10: Change & Dispensation Management

| Attribute | Value |
|-----------|-------|
| **Service ID** | EA-SRV-10 |
| **Service Name** | Change & Dispensation Management |
| **Service Category** | Governance Services |
| **Service Owner** | Chief Enterprise Architect |
| **Service Type** | Request-Driven |

**Service Description:**

This service manages architecture change requests and dispensation requests when projects cannot comply with established standards. It ensures business objectives are met with minimum and calculated risk when deviations from target architecture are necessary, while maintaining architectural integrity.

**Service Trigger:** Change request or dispensation request from project teams

| Execution Priority | SLA Timeframe |
|-------------------|---------------|
| High | 1-2 Weeks |

**Key Inputs:**
- Request for Change (RFC) or Dispensation Request
- Architecture Compliance Report
- Architecture Principles and Standards
- Solution Design Document
- Business Justification

**Main Execution Activities:**
1. Review and analyze request for validity and impact
2. Assess impact on current and target architecture
3. Define alternatives that could achieve compliance
4. Evaluate alternatives with stakeholders
5. Develop response document with recommendations
6. Escalate to EA Board for major decisions
7. Update impacted architecture building blocks
8. Maintain change and dispensation logs

**Key Service Outputs:**
- Impact Assessment Report
- Dispensation Response Document
- Alternative Solutions Analysis
- Updated Architecture Artifacts
- Change/Dispensation Log Entry

**Affected Architecture Domains:** ☑ Strategy ☑ Business ☑ Application ☑ Data ☑ Technology

**Service Customers:** IT Departments, Project Teams, Vendors

**Organization Applicability:** ☐ PDU ☑ RA ☑ SDA

---

## 8. Assessment Services

Assessment services evaluate the organization's digital capabilities and research emerging technologies to drive continuous improvement and innovation.

### 8.1 EA-SRV-11: Digital Maturity Assessment

| Attribute | Value |
|-----------|-------|
| **Service ID** | EA-SRV-11 |
| **Service Name** | Digital Maturity Assessment |
| **Service Category** | Assessment Services |
| **Service Owner** | Chief Enterprise Architect |
| **Service Type** | Mandate-Driven |

**Service Description:**

This service leads digital maturity assessment activities to evaluate the organization's digital capabilities against established frameworks or regulatory requirements. It includes analyzing current state, identifying improvement areas, coordinating stakeholder input, and developing enhancement plans.

**Service Trigger:** Annual assessment cycle or regulatory requirement

| Execution Priority | SLA Timeframe |
|-------------------|---------------|
| High | Within assessment submission period |

**Key Inputs:**
- Digital Maturity Assessment Framework/Guide
- Assessment Questionnaire
- Previous Assessment Results
- Previous Enhancement Plans
- Current State Documentation

**Main Execution Activities:**
1. Review assessment framework and requirements
2. Compare with previous assessment results
3. Plan and schedule assessment activities
4. Gather required documents and conduct stakeholder meetings
5. Review and validate collected information
6. Compile assessment response
7. Review preliminary results and address gaps
8. Develop improvement plan based on final results

**Key Service Outputs:**
- Digital Maturity Assessment Report
- Gap Analysis Document
- Digital Maturity Enhancement Plan
- Prioritized Improvement Roadmap

**Affected Architecture Domains:** ☑ Strategy ☑ Business ☑ Application ☑ Data ☑ Technology

**Service Customers:** IT Departments, Business Departments, Executive Leadership

**Organization Applicability:** ☐ PDU ☐ RA ☑ SDA

---

### 8.2 EA-SRV-12: Digital Research & Innovation

| Attribute | Value |
|-----------|-------|
| **Service ID** | EA-SRV-12 |
| **Service Name** | Digital Research & Innovation |
| **Service Category** | Assessment Services |
| **Service Owner** | EA Office |
| **Service Type** | Mandate-Driven / Request-Driven |

**Service Description:**

This service enables continuous response to market changes by studying and measuring the applicability of new trends and innovations for the organization's technical environment. It allows the EA team to explore emerging technologies, assess their potential value, and recommend adoption where appropriate.

**Service Trigger:** Scheduled internal tasks OR service request from leadership or departments

| Execution Priority | SLA Timeframe |
|-------------------|---------------|
| High | 4 Weeks (after committee approval) |

**Key Inputs:**
- EA Board Direction / Strategic Priorities
- Service Requests from Business/IT
- Industry Trend Reports
- Current Technology Landscape
- Business Pain Points

**Main Execution Activities:**
1. Identify potential digital trends relevant to organization
2. Perform necessary assessments (SWOT, cost-efficiency, impact analysis)
3. Evaluate applicability and alignment with strategic goals
4. Develop proof-of-concept or pilot recommendations
5. Prepare assessment report with recommendations
6. Present findings to governance bodies

**Key Service Outputs:**
- Technology Trend Assessment Report
- Innovation Opportunity Analysis
- Business Case (if required)
- Pilot/PoC Recommendations

**Affected Architecture Domains:** ☑ Strategy ☑ Business ☑ Application ☑ Data ☑ Technology

**Service Customers:** IT Departments, Business Departments, Executive Leadership

**Organization Applicability:** ☐ PDU ☑ RA ☑ SDA

---

## 9. Service Applicability Matrix

This matrix shows which EA services are applicable or recommended for each organization type. Organizations should implement services appropriate to their complexity and digital transformation needs.

### 9.1 Service Applicability by Organization Type

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

**Legend:**
- ● Required – Service is essential for this organization type
- ◐ Recommended – Service is beneficial but may be simplified
- ○ Optional – Service may be needed based on specific circumstances

### 9.2 Organization Type Descriptions

| Type | Description | EA Service Needs |
|------|-------------|------------------|
| **PDU** (Policy Development Unit) | Responsible for policy analysis, development, and monitoring. Examples: ministries, policy departments | Minimal EA services focused on document management standards and basic IT oversight. EA function may be part-time or shared. |
| **RA** (Regulatory Agency) | Responsible for regulating specific sectors. Examples: licensing authorities, data protection authorities | Moderate EA services with emphasis on digital service delivery standards. Simplified versions of governance and development services. |
| **SDA** (Service Delivery Authority) | Complex service delivery with extensive customer interaction. Examples: tax authorities, customs authorities | Full EA service portfolio with comprehensive governance, development, and strategic services to support large-scale digital transformation. |

### 9.3 Scaling Recommendations

**For PDU Organizations:**
- Assign EA responsibility to existing IT role (part-time)
- Focus on IT standards and procurement guidance
- Implement simplified compliance checks for major initiatives
- Leverage central government EA resources where available

**For RA Organizations:**
- Establish dedicated EA function (1-2 staff)
- Implement core repository and governance services
- Focus on digital service delivery architecture
- Simplified strategic services aligned with parent PDU

**For SDA Organizations:**
- Establish full EA Office (4-8+ staff based on size)
- Implement complete service portfolio
- Formal governance structure with EA Board
- Comprehensive maturity assessment and innovation programs

---

## 10. Service Implementation Guidance

### 10.1 Phased Implementation Approach

Organizations should implement EA services in phases based on maturity and capacity:

**Phase 1: Foundation (3-6 months)**
- Establish EA function and assign ownership
- Implement EA-SRV-07 (EA Framework Maintenance) – basic version
- Implement EA-SRV-08 (EA Development) – current state documentation
- Define initial principles and standards

**Phase 2: Governance (6-12 months)**
- Implement EA-SRV-03 (Solution Architecture Review)
- Implement EA-SRV-09 (Architecture Compliance & Governance)
- Establish EA Board and governance processes
- Develop target architecture

**Phase 3: Strategic (12-18 months)**
- Implement EA-SRV-01 (IT Strategic Planning Support)
- Implement EA-SRV-02 (Architecture Roadmap Planning)
- Integrate EA with strategic planning processes

**Phase 4: Full Service (18+ months)**
- Implement remaining services based on demand
- Continuous improvement of all services
- Advanced analytics and KPI tracking

### 10.2 Service Level Agreements

Organizations should establish SLAs for each service based on their context:

| Service Category | Recommended SLA Range |
|------------------|----------------------|
| Strategic Services | 2-4 weeks |
| Project Support Services | 1-2 weeks |
| Advisory Services | 1-2 weeks |
| Repository Services | 2-4 weeks |
| Governance Services | 1-2 weeks |
| Assessment Services | 4-8 weeks |

### 10.3 Resource Requirements

**Minimum Resources by Organization Type:**

| Organization Type | Minimum EA Staff | Recommended EA Staff |
|-------------------|------------------|---------------------|
| PDU | 0.5 FTE (shared) | 1 FTE |
| RA | 1-2 FTE | 2-3 FTE |
| SDA | 4-5 FTE | 6-10+ FTE |

**Key Roles:**
- Chief Enterprise Architect (required for RA, SDA)
- Domain Architects (Business, Application, Data, Technology)
- EA Repository/Tool Administrator
- Solutions Architects (supporting role)

### 10.4 Success Factors

Key success factors for EA service implementation:

1. **Executive Sponsorship** – Secure commitment from senior leadership
2. **Clear Mandate** – Define EA Office authority and responsibilities
3. **Stakeholder Engagement** – Build relationships with service customers
4. **Quick Wins** – Demonstrate value through early successes
5. **Continuous Communication** – Keep stakeholders informed of EA value
6. **Practical Focus** – Prioritize practical outcomes over documentation
7. **Feedback Loops** – Continuously improve based on stakeholder input
8. **Tool Support** – Implement appropriate EA repository tools
9. **Skills Development** – Invest in EA team training and certification
10. **Integration** – Embed EA services in existing IT and business processes

### 10.5 Common Pitfalls to Avoid

- Over-documenting without delivering value
- Focusing on tools before processes
- Lacking executive sponsorship
- Operating in isolation from business
- Implementing all services simultaneously
- Ignoring organizational culture and change management
- Setting unrealistic expectations
- Insufficient stakeholder communication

---

## 11. Service Performance Metrics

### 11.1 Service-Level Metrics

Each service should track specific performance metrics:

| Service | Key Metrics |
|---------|-------------|
| IT Strategic Planning Support | Strategy alignment score, roadmap adoption rate |
| Solution Architecture Review | Review turnaround time, compliance rate |
| Procurement Support | RFP quality score, vendor selection accuracy |
| Technical Consultation | Customer satisfaction, recommendation adoption |
| EA Framework Maintenance | Framework currency, standard adoption rate |
| EA Development | Repository accuracy, artifact usage rate |
| Compliance & Governance | Compliance rate, audit findings trend |
| Digital Maturity Assessment | Maturity score improvement, action completion |
| Research & Innovation | Innovation adoption rate, business value delivered |

### 11.2 Portfolio-Level Metrics

| KPI | Description | Target |
|-----|-------------|--------|
| Service Utilization | % of eligible projects using EA services | > 80% |
| Customer Satisfaction | Average satisfaction rating across services | > 4.0/5.0 |
| SLA Compliance | % of services delivered within SLA | > 90% |
| Value Delivered | Benefits traced to EA involvement | Increasing |
| Request Volume | Number of service requests over time | Monitored |

---

## 12. References

This EA Services Catalog is based on industry best practices including:
- TOGAF 9.2 Architecture Governance
- COBIT Framework
- EA Management Frameworks
- GovStack Digital Transformation Framework
- PAERA (Public Administration Ecosystem Reference Architecture)

---

*Document End*

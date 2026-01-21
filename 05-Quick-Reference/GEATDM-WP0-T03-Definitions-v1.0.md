# GEATDM Key Definitions Glossary

**Document ID:** GEATDM-WP0-T03-Definitions-v1.0  
**Version:** 1.0  
**Date:** January 2026  
**Status:** COMPLETE

---

## Purpose

This glossary provides standardized definitions for terms used throughout the Government Enterprise Architecture Target Design Method (GEATDM). Definitions are generalized from source materials and aligned with TOGAF vocabulary where applicable.

---

## 1. Architecture Domain Definitions

### Application Architecture
The description of an organization's applications and their relationships to business processes. Application architecture defines all applications used by business processes and how they support organizational operations. It encompasses the logical structure of applications, their interactions, integrations, and the functional capabilities they provide.

*Source: PAERA Framework, ZATCA EAO Framework*

### Business Architecture
The architectural layer that addresses customers, services, business processes, regulations, key performance indicators, organizational structure, and strategic objectives. In EA practice, business architecture describes how an organization conducts its operations, including the strategies and tactics employed to achieve goals. It is often expressed using business model components.

*Source: PAERA Framework, ZATCA EAO Framework*

### Data Architecture
The documentation and management of an organization's data assets. Data architecture describes data entities, their relationships, storage, ownership, consumption, and the business capabilities they enable. It supports data analysis, business strategy adjustment, and informed decision-making by ensuring data is meaningfully documented and understood.

*Source: PAERA Framework, ZATCA EAO Framework*

### Technology Architecture
The description of all computing, networking, storage, and infrastructure devices that enable an organization to use digital services. Technology architecture covers IT infrastructure including servers, networks, data centers, disaster recovery systems, and information security components.

*Source: PAERA Framework, ZATCA EAO Framework*

---

## 2. EA Metamodel Object Definitions

### Application Component
The actual software that delivers application functionality. An application component is a deployable unit that provides specific capabilities to support business operations.

*Source: PAERA Framework*

### Application Function
Related functionality offered by an application component. An application function offers support to one or more business activities and represents the logical capabilities provided by software systems.

*Source: PAERA Framework*

### Architecture Building Block (ABB)
A reusable architectural element that can be combined with other building blocks to create solutions. ABBs are defined at different levels of abstraction and can be classified as new (to be introduced), retired (to be replaced), or reusable (for future EA activities).

*Source: ZATCA EAO Framework*

### Building Block
A modular, reusable component of enterprise architecture. Building blocks vary by EA layer:

- **Business Architecture Building Block**: A set of specific recommendations for legal and organizational arrangements.
- **Application Architecture Building Block**: A separately deployable executable software component, described by its interface (API) specification and objectives to be achieved.
- **Data Architecture Building Block**: A definition of required registries and information repositories and description of business capabilities they enable.
- **Technology Architecture Building Block**: An implementational pattern recommended for delivering secure and scalable ICT infrastructure services.

*Source: PAERA Framework*

### Business Process
An ordered series of work processes carried out within one organization with the aim of providing a service (or combination of services) to a citizen, company, or organization.

*Source: PAERA Framework*

### Business Service
A defined performance of a person or organization that meets a customer's needs. Business services represent the external value delivered by an organization to its stakeholders.

*Source: PAERA Framework*

### Capability
An organizational ability to perform a particular kind of work and achieve specific outcomes. Capabilities combine people, processes, and technology to deliver value.

*Source: ZATCA EAO Framework*

### Customer
A person or organization that is served by a public administration organization. Customers may include citizens, businesses, other government agencies, or international organizations.

*Source: PAERA Framework*

### Data Entity
A distinguishable object or concept about which data is stored. Data entities form the foundation of data architecture and represent the key information objects managed by an organization.

*Source: ZATCA EAO Framework*

### EA Metamodel
A framework defining a set of entities that allow architectural concepts to be captured, stored, filtered, queried, and represented in a way that supports consistency, completeness, and traceability. The metamodel provides abstraction for understanding complex systems, visualization using formalized notation, and a common vocabulary for communication.

*Source: ZATCA EAO Framework, TOGAF*

### Service
A defined performance that meets stakeholder needs. Services can be business services (delivered to customers) or application services (technical capabilities supporting business functions).

*Source: PAERA Framework*

### Solution Building Block (SBB)
A specific implementation of an Architecture Building Block. SBBs represent concrete, deployable solutions that realize architectural requirements.

*Source: ZATCA EAO Framework*

### Technology Component
An infrastructure element such as servers, networking equipment, storage systems, or security devices that supports the organization's digital services.

*Source: ZATCA EAO Framework*

### Viewpoint
A selected collection of metamodel objects and their relationships that addresses specific concerns for an EA stakeholder. Viewpoints enable different perspectives on the architecture to be communicated effectively.

*Source: ZATCA EAO Framework*

### Workflow
An ordered series of process steps (business activities) carried out within one organizational unit with the aim of making a specific contribution (performance) to a service. May be a supporting process.

*Source: PAERA Framework*

---

## 3. Organization Type Definitions

### Policy Development Unit (PDU)
The most basic bureaucratic organizational unit responsible for policy analysis, development, and monitoring. PDUs develop and maintain legislation to regulate their area of responsibility, communicate with stakeholders, and supervise policy implementation through KPIs and reporting.

**Typical Examples:** Government ministries, chancelleries of constitutional institutions (President, Prime Minister offices)

**Digital Requirements:** Document management, content management, analytics, and general office automation tools (PAO-CC components).

*Source: PAERA Framework, Public Sector Org Taxonomy*

### Regulatory Agency (RA)
An organization responsible for the implementation and enforcement of regulatory policies in specific functional areas. RAs are accountable to PDUs for policy development in their functional area. They handle licensing, supervision, compliance monitoring, and stakeholder awareness.

**Typical Examples:** Data Protection Authority, Business Registration Authority, Financial Services Authority, Trade Licensing bodies

**Digital Requirements:** Everything PDU needs plus basic digital service delivery platform for application processing, license management, and compliance tracking.

*Source: PAERA Framework, Public Sector Org Taxonomy*

### Service Delivery Authority (SDA)
The most complex governmental organizational unit, supporting not only internal process automation but also intensive communication with external customers. SDAs handle policy enforcement, compliance monitoring, and high-volume transactional service delivery.

**Typical Examples:** Tax Authority, Customs Department, Police Department, Treasury

**Digital Requirements:** Everything RA needs but at a more robust and industrialized level, including registration and profile management, customer accounting, compliance and enforcement systems, and extensive data management capabilities.

*Source: PAERA Framework, Public Sector Org Taxonomy*

### Public Administration Organisation Core Components (PAO-CC)
The standard set of building blocks required in all types of public administration organizations, including document management, content management, analytics, HR, budget, and accounting systems.

*Source: PAERA Framework, Public Sector Org Taxonomy*

---

## 4. Digital Public Infrastructure (DPI) Definitions

### Digital Public Infrastructure (DPI)
Foundational digital systems that enable public services and digital transformation at a national scale. DPI consists of shared digital platforms, standards, and building blocks that can be reused across government and by private sector entities.

*Source: PAERA Framework, Country DPI Taxonomy*

### DPI Five-Domain Model
A comprehensive framework for assessing and organizing DPI components across five interconnected domains:

| Domain | Scope | Purpose |
|--------|-------|---------|
| Digital Access | Infrastructure, service channels, accessibility | Determines whether citizens can reach and use digital services |
| Digital Data Infrastructure | Data governance, registries, standards, analytics | Foundation for evidence-based decisions and integrated services |
| Interoperability | Technical infrastructure, standards, integration | Enables seamless data exchange and once-only principle |
| Digital Identity | Civil registry, national ID, authentication, trust services | Underpins secure, verified digital transactions |
| Governance | Leadership, coordination, policy, performance management | Cross-cutting enabler for all other domains |

*Source: Country DPI Taxonomy*

### Access Pillar
The fundamental requirement for digital connectivity of offices and citizenry. Access encompasses high-speed connectivity, accessibility features for all citizens including those with disabilities, and cybersecurity frameworks.

*Source: PAERA Framework*

### Data Pillar
The digitization and management of government data. Includes data centers, cloud services, monitoring and analytics tools, and data protection institutional infrastructure. Critical for enabling data-driven decision-making.

*Source: PAERA Framework*

### Interoperability Pillar
The ability of government systems to exchange data internally and with external parties. Requires API management, identity and access management, data transformation services, registry/repository services, security services, and workflow management.

*Source: PAERA Framework*

### Identity Pillar
The national identity ecosystem enabling trusted establishment, use, and interoperability of digital identities. Components include identity management systems, authentication services, authorization services, credential management, PKI, federated identity management, and civil registry integration.

*Source: PAERA Framework*

### Governance (Cross-cutting)
The framework spanning policy, institutional, and legal components that enables and coordinates digital transformation efforts. Governance determines the success of all other DPI domains regardless of technical investment.

*Source: PAERA Framework, Country DPI Taxonomy*

### Foundation Framework
Horizontal preconditions applicable to all digital transformation efforts, consisting of:
- **Legal Frameworks**: Laws necessary for different types of building blocks
- **Governance & Policy Frameworks**: Coordination mechanisms for digitization efforts

*Source: PAERA Framework*

---

## 5. Method-Specific Terms

### Architecture Roadmap
A time-based sequence depicting the implementation of target architecture. The roadmap includes transition architectures (waves), project classification, dependencies, timelines, and implementation risks aligned with IT strategy.

*Source: ZATCA EAO Framework*

### AS-IS Architecture (Current State Architecture)
The documentation of the existing architecture state, capturing current business, data, application, and technology building blocks according to defined metamodel and viewpoints. AS-IS architecture serves as the baseline for gap analysis.

*Source: ZATCA EAO Framework*

### Enterprise Architecture (EA)
A collection of documents describing various aspects of an organization from an integrated business and IT perspective. EA bridges communication between business and IT stakeholders, facilitates information systems planning, and improves business and IT alignment. EA provides visibility into an organization, its activities, and its systems through four viewpoints: Business, Application, Data, and Technology.

*Source: PAERA Framework, ZATCA EAO Framework*

### Gap Analysis
The process of comparing AS-IS architecture with target architecture to identify differences in terms of architecture building blocks. Gap analysis identifies:
- **New ABBs**: Components that need to be introduced
- **Retired ABBs**: Components that need to be replaced
- **Reusable ABBs**: Components that can be leveraged for future activities

Each gap is documented with ID, description, and proposed solution.

*Source: ZATCA EAO Framework*

### Reference Architecture
The consolidation of previous experience in the domain of digitalization in public administration. Reference architecture creates templates that structure components of applications and technology to support specific business models. These templates accelerate solution development and reduce design decision risks.

*Source: PAERA Framework*

### Target Architecture (TO-BE Architecture)
The future-state architecture that responds to business requirements and strategic objectives. Target architecture identifies required building blocks across all domains (business, data, application, technology) and is developed through analysis, stakeholder validation, and alignment with current architecture.

*Source: ZATCA EAO Framework*

### Transition Architecture
Intermediate architectural states between AS-IS and target architecture, typically organized in implementation waves. Transition architectures enable incremental value delivery and structured implementation.

*Source: ZATCA EAO Framework*

---

## 6. Additional Key Terms

### Digital Transformation
The process of converting technological advances into new capabilities for citizens, economy, and government. Expected benefits include:
- **Society**: Enhanced well-being, healthcare, education, and civic participation
- **Economy**: Reduced bureaucratic barriers, financial inclusion, new jobs and industries
- **Government**: Cost-efficiency, proactive service delivery, improved workplace culture

*Source: PAERA Framework*

### GovStack
An initiative gathering best Digital Government practices from case studies worldwide, creating a reference architecture of building blocks for a Digital Government reference model. GovStack bridges governments seeking digital transformation with developers and vendors offering building block solutions.

*Source: PAERA Framework*

### Once-Only Principle
The principle that citizens should provide information to government only once, with subsequent uses enabled through secure data sharing and interoperability.

*Source: Country DPI Taxonomy*

### State Registry
An official record-keeping system maintained by a government entity storing vital information such as births, marriages, deaths, property deeds, business licenses, vehicle registrations, and professional credentials. State registries serve as reliable sources of legal documentation.

**Key Registries:**
- Population Registry
- Business Registry
- Cadastre/Land Register
- Official Publications
- Securities Register
- Registry of Economic Activities
- Vehicle Register
- Health Registers

*Source: PAERA Framework, Public Sector Org Taxonomy*

### Whole-of-Government
An approach to digital transformation that considers the entire public sector ecosystem rather than individual agency initiatives. Promotes standardization, interoperability, and shared infrastructure.

*Source: PAERA Framework*

---

## Source Documents

| Code | Document | Description |
|------|----------|-------------|
| PAERA | paera-framework.docx | Public Administration Ecosystem Reference Architecture |
| ZATCA-EAO | ZATCA-EAO-Framework-v1.2.pdf | ZATCA Enterprise Architecture Office Framework |
| PSO-TAX | public-sector-org-taxonomy.docx | Public Sector Organization Taxonomy |
| DPI-TAX | country-dpi-taxonomy-v1.0.docx | Country DPI Assessment Taxonomy |

---

## Document History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | January 2026 | Initial version - extracted definitions from source documents |

---

*This glossary is maintained as part of the GEATDM project and will be referenced by all subsequent work packages and tasks.*

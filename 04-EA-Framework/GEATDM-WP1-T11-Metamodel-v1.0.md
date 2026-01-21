# GEATDM Generic EA Metamodel

**Document ID:** GEATDM-WP1-T11-Metamodel-v1.0  
**Version:** 1.0  
**Date:** January 2026  
**Status:** COMPLETE

---

## Table of Contents

1. [Metamodel Overview](#1-metamodel-overview)
2. [Architecture Domains](#2-architecture-domains)
3. [Cross-Domain Relationships](#3-cross-domain-relationships)
4. [Core Objects Catalog](#4-core-objects-catalog)
5. [Metamodel Diagram](#5-metamodel-diagram)
6. [Usage Guidelines](#6-usage-guidelines)

---

## 1. Metamodel Overview

### 1.1 Purpose

The EA Metamodel defines the set of entities (objects), their attributes, and relationships that allow architectural concepts to be captured, stored, filtered, queried, and represented in a way that supports consistency, completeness, and traceability. This metamodel serves as the foundation for all enterprise architecture artifacts developed using the GEATDM approach.

### 1.2 Value Proposition

The metamodel provides three key benefits:

| Benefit | Description |
|---------|-------------|
| **Abstraction** | Provides an abstraction of a complex organizational system for the purpose of understanding it before building or changing it |
| **Visualization** | Enables the depiction of the architecture model using a formalized and precise notation (ArchiMate 3.1 recommended) |
| **Communication** | Provides a common vocabulary that enables stakeholders to communicate knowledge about the system effectively |

### 1.3 Metamodel Components

The metamodel consists of four interconnected components:

```
┌─────────────────────────────────────────────────────────────────────┐
│                        EA METAMODEL STRUCTURE                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────────┐          ┌──────────────────┐                 │
│  │     OBJECTS      │◄────────►│  RELATIONSHIPS   │                 │
│  │                  │          │                  │                 │
│  │ Set of entities  │          │ Interlinking     │                 │
│  │ required to      │          │ between related  │                 │
│  │ define each      │          │ objects within   │                 │
│  │ architecture     │          │ and across       │                 │
│  │ domain           │          │ domains          │                 │
│  └──────────────────┘          └──────────────────┘                 │
│           │                             │                            │
│           ▼                             ▼                            │
│  ┌──────────────────┐          ┌──────────────────┐                 │
│  │   ATTRIBUTES     │          │   VIEWPOINTS     │                 │
│  │                  │          │                  │                 │
│  │ Data elements    │          │ Selected         │                 │
│  │ associated with  │          │ collection of    │                 │
│  │ objects that     │          │ objects and      │                 │
│  │ define and       │          │ relationships    │                 │
│  │ describe them    │          │ addressing       │                 │
│  │                  │          │ stakeholder      │                 │
│  │                  │          │ concerns         │                 │
│  └──────────────────┘          └──────────────────┘                 │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 1.4 Alignment with Standards

This metamodel aligns with:

- **TOGAF 9.2**: Uses TOGAF Content Metamodel as conceptual foundation
- **ArchiMate 3.1**: Recommended notation for visualization
- **GovStack Specifications**: Building Block definitions and interfaces

---

## 2. Architecture Domains

The metamodel organizes objects across the standard BDAT (Business, Data, Application, Technology) architecture domains, plus cross-cutting strategic and portfolio management domains.

### 2.1 Domain Structure Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ARCHITECTURE DOMAIN STRUCTURE                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                  STRATEGY MANAGEMENT                         │    │
│  │         Vision │ Goal │ Objective │ Initiative               │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                              │                                       │
│                              ▼                                       │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                  SERVICE PORTFOLIO                           │    │
│  │              Business Service │ Support Service              │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                              │                                       │
│          ┌───────────────────┼───────────────────┐                  │
│          ▼                   ▼                   ▼                  │
│  ┌───────────────┐   ┌───────────────┐   ┌───────────────┐         │
│  │   BUSINESS    │   │  APPLICATION  │   │     DATA      │         │
│  │  PORTFOLIO    │   │  PORTFOLIO    │   │  (INFORMATION)│         │
│  │               │   │               │   │  PORTFOLIO    │         │
│  │ Process       │   │ Application   │   │               │         │
│  │ Capability    │   │ Application   │   │ Data Entity   │         │
│  │ Organization  │   │   Function    │   │ Information   │         │
│  │ Person/Role   │   │ Application   │   │   Flow        │         │
│  │ Workflow      │   │  Component    │   │               │         │
│  └───────────────┘   └───────────────┘   └───────────────┘         │
│          │                   │                   │                  │
│          └───────────────────┼───────────────────┘                  │
│                              ▼                                       │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                 TECHNOLOGY PORTFOLIO                         │    │
│  │   Network │ Server │ Location │ Component │ Deployment       │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                              │                                       │
│                              ▼                                       │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                 INVESTMENT PORTFOLIO                         │    │
│  │              Project │ Demand │ Budget                       │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 2.2 Strategy Management Domain

Objects in this domain capture the organization's strategic direction and how it translates into architectural initiatives.

| Object | Description | Key Relationships |
|--------|-------------|-------------------|
| **Vision** | The future-state aspiration of the organization | Realized by Goals |
| **Goal** | A high-level statement of intent or direction | Supports Vision; Achieved through Objectives |
| **Objective** | A measurable, time-bound target that advances a Goal | Supports Goal; Realized by Initiatives |
| **Initiative** | A structured effort to achieve one or more Objectives | Realizes Objectives; Delivered by Projects |

### 2.3 Service Portfolio Domain

Objects representing the services delivered by the organization to its stakeholders.

| Object | Description | Key Relationships |
|--------|-------------|-------------------|
| **Business Service** | A defined performance that meets external customer needs | Delivered to Customers; Realized by Processes |
| **Support Service** | An internal service that enables business operations | Supports Business Services; Realized by Processes |

### 2.4 Business Portfolio Domain

Objects representing the operational structure of the organization.

| Object | Description | Key Relationships |
|--------|-------------|-------------------|
| **Customer** | A person or organization served by the public administration | Receives Business Services |
| **Business Process** | An ordered series of activities providing a service | Realizes Services; Supported by Applications |
| **Workflow** | An ordered series of process steps within an organizational unit | Part of Business Process; Supported by Application Functions |
| **Capability** | An organizational ability to perform a particular kind of work | Enabled by Processes; Supported by Applications |
| **Organization Unit** | A structural grouping within the organization | Performs Processes; Owns Capabilities |
| **Role** | A named specific behavior of an individual participating in a context | Assigned to Organization Unit; Performs Activities |
| **Actor** | An entity that performs actions (person, system, or organization) | Fills Roles; Executes Workflows |

### 2.5 Application Portfolio Domain

Objects representing the application landscape of the organization.

| Object | Description | Key Relationships |
|--------|-------------|-------------------|
| **Application** | A logical grouping of application functionality | Contains Application Components; Supports Processes |
| **Application Component** | Deployable software that delivers application functionality | Part of Application; Provides Application Functions |
| **Application Function** | Related functionality offered by an application component | Supports Business Activities; Provided by Application Components |
| **Application Service** | An externally visible unit of functionality | Exposed by Application Components; Used by Processes |

### 2.6 Data (Information) Portfolio Domain

Objects representing the data and information managed by the organization.

| Object | Description | Key Relationships |
|--------|-------------|-------------------|
| **Data Entity** | A distinguishable object about which data is stored | Used by Processes; Managed by Applications |
| **Data Object** | A passive element that stores or conveys information | Instance of Data Entity; Processed by Applications |
| **Information Flow** | The exchange of data between processes or applications | Connects Processes; Carries Data Entities |
| **Data Domain** | A logical grouping of related data entities | Contains Data Entities; Owned by Organization Units |

### 2.7 Technology Portfolio Domain

Objects representing the infrastructure supporting the organization.

| Object | Description | Key Relationships |
|--------|-------------|-------------------|
| **Technology Component** | Infrastructure element (server, network device, etc.) | Hosts Applications; Located at Locations |
| **Server** | Computing resource providing processing capability | Type of Technology Component; Hosts Application Components |
| **Network** | Communication infrastructure connecting components | Connects Technology Components |
| **Location** | A physical or logical place | Contains Technology Components |
| **Deployment** | Assignment of software to infrastructure | Maps Application Components to Technology Components |
| **Vendor** | External provider of technology or services | Supplies Technology Components |
| **IT Capability** | A technical ability provided by infrastructure | Enabled by Technology Components |

### 2.8 Investment Portfolio Domain

Objects representing the management of IT investments.

| Object | Description | Key Relationships |
|--------|-------------|-------------------|
| **Project** | A temporary endeavor to create a unique result | Implements Initiatives; Delivers Building Blocks |
| **Demand** | A request for new or changed IT capability | Triggers Projects; Addresses Business Needs |
| **Budget** | Financial resources allocated for IT activities | Funds Projects |

---

## 3. Cross-Domain Relationships

### 3.1 Relationship Types

The metamodel uses the following standard relationship types:

| Relationship | Description | Example |
|--------------|-------------|---------|
| **Realizes** | One element makes another element effective | Process realizes Service |
| **Supports** | One element assists another element | Application supports Process |
| **Uses** | One element employs another element | Process uses Data Entity |
| **Contains** | One element is composed of other elements | Application contains Application Components |
| **Assigned To** | Allocation of responsibility | Role assigned to Organization Unit |
| **Serves** | Provision of functionality to another element | Service serves Customer |
| **Triggers** | One element initiates another | Demand triggers Project |
| **Flows To** | Movement of data or information | Information flows from Application A to Application B |

### 3.2 Key Cross-Domain Relationships

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      CROSS-DOMAIN RELATIONSHIP MAP                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  STRATEGY ──────────► BUSINESS ──────────► APPLICATION ──────────► TECH │
│                                                                          │
│  Vision              Customer              Application           Server  │
│    │                   ▲                      │                    ▲     │
│    ▼                   │ serves              │ supports           │     │
│  Goal                  │                      ▼                    │     │
│    │                 Service              App Component     hosts  │     │
│    ▼                   ▲                      │                    │     │
│  Objective             │ realizes            │ provides           │     │
│    │                   │                      ▼                    │     │
│    ▼                Process ◄──────────── App Function            │     │
│  Initiative            │       supports      │                     │     │
│    │                   │                      │                     │     │
│    ▼                   │ uses                │ accesses           │     │
│  Project ──────────────┼────────────────────►│                     │     │
│                        ▼                      ▼                    │     │
│                   Data Entity ◄────────── Data Object             │     │
│                        │                                           │     │
│                        │ stored in                                 │     │
│                        ▼                                           │     │
│                     Database ───────────► deployed on ─────────────┘     │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### 3.3 Critical Traceability Chains

The following traceability chains must be maintained for architecture integrity:

#### Chain 1: Strategy to Execution
```
Vision → Goal → Objective → Initiative → Project → Building Block → Deployment
```

#### Chain 2: Service to Technology
```
Customer → Service → Process → Application Component → Technology Component
```

#### Chain 3: Data Lineage
```
Data Entity → Data Object → Application Component → Information Flow → Process
```

#### Chain 4: Capability Realization
```
Capability → Process → Application Function → Application Component
```

---

## 4. Core Objects Catalog

### 4.1 Business Architecture Objects

#### 4.1.1 Customer

| Attribute | Description | Required |
|-----------|-------------|----------|
| ID | Unique identifier | Yes |
| Name | Customer segment name | Yes |
| Type | Citizen, Business, Government, International | Yes |
| Description | Detailed description of customer segment | Yes |
| Channel Preferences | Preferred interaction channels | No |
| Volume | Expected transaction volume | No |

**Relationships:**
- Receives → Business Service
- Interacts through → Channel

---

#### 4.1.2 Business Service

| Attribute | Description | Required |
|-----------|-------------|----------|
| ID | Unique identifier | Yes |
| Name | Service name | Yes |
| Description | What the service provides | Yes |
| Type | Core / Support | Yes |
| Status | Active, Planned, Retired | Yes |
| Service Level | Expected performance metrics | No |
| Owning Unit | Organization unit responsible | Yes |

**Relationships:**
- Serves → Customer
- Realized by → Business Process
- Supported by → Support Service
- Mapped to → Capability

---

#### 4.1.3 Business Process

| Attribute | Description | Required |
|-----------|-------------|----------|
| ID | Unique identifier | Yes |
| Name | Process name | Yes |
| Description | What the process does | Yes |
| Type | Core / Support / Management | Yes |
| Owner | Process owner (Organization Unit) | Yes |
| Status | AS-IS / TO-BE | Yes |
| Automation Level | Manual / Semi-automated / Fully automated | No |
| Frequency | How often executed | No |
| Duration | Average execution time | No |

**Relationships:**
- Realizes → Business Service
- Contains → Workflow
- Supported by → Application
- Uses → Data Entity
- Performed by → Organization Unit

---

#### 4.1.4 Workflow

| Attribute | Description | Required |
|-----------|-------------|----------|
| ID | Unique identifier | Yes |
| Name | Workflow name | Yes |
| Description | What the workflow accomplishes | Yes |
| Parent Process | Business Process this belongs to | Yes |
| Owner | Owning Organization Unit | Yes |
| Steps | Ordered list of activities | No |

**Relationships:**
- Part of → Business Process
- Supported by → Application Function
- Performed by → Role
- Uses → Data Entity

---

#### 4.1.5 Capability

| Attribute | Description | Required |
|-----------|-------------|----------|
| ID | Unique identifier | Yes |
| Name | Capability name (Verb + Noun format) | Yes |
| Description | What ability this represents | Yes |
| Level | Level 1 (Strategic) / Level 2 (Tactical) / Level 3 (Operational) | Yes |
| Parent Capability | Parent in capability hierarchy | No |
| Maturity Level | Current maturity (1-5) | No |
| Target Maturity | Desired maturity (1-5) | No |

**Relationships:**
- Parent of → Capability (sub-capabilities)
- Enabled by → Business Process
- Supported by → Application
- Owned by → Organization Unit

---

#### 4.1.6 Organization Unit

| Attribute | Description | Required |
|-----------|-------------|----------|
| ID | Unique identifier | Yes |
| Name | Unit name | Yes |
| Description | Unit responsibilities | Yes |
| Type | Department / Division / Team / Office | Yes |
| Parent Unit | Parent in organizational hierarchy | No |
| Location | Physical or logical location | No |

**Relationships:**
- Parent of → Organization Unit (sub-units)
- Performs → Business Process
- Owns → Capability
- Contains → Role

---

### 4.2 Application Architecture Objects

#### 4.2.1 Application

| Attribute | Description | Required |
|-----------|-------------|----------|
| ID | Unique identifier | Yes |
| Name | Application name | Yes |
| Description | What the application does | Yes |
| Type | Core / Support / Channel / Integration | Yes |
| Status | Operational / Planned / Retired | Yes |
| Vendor | Provider/developer | No |
| Version | Current version | No |
| Lifecycle Stage | Development / Production / Sunset | No |
| Classification | New / Reusable / To-be-Retired | No |

**Relationships:**
- Contains → Application Component
- Supports → Business Process
- Uses → Data Entity
- Integrated with → Application (other applications)

---

#### 4.2.2 Application Component

| Attribute | Description | Required |
|-----------|-------------|----------|
| ID | Unique identifier | Yes |
| Name | Component name | Yes |
| Description | Component functionality | Yes |
| Type | Module / Service / Library / Container | Yes |
| Technology Stack | Implementation technologies | No |
| Deployment Model | On-premise / Cloud / Hybrid | No |
| GovStack BB Mapping | Corresponding GovStack Building Block | No |

**Relationships:**
- Part of → Application
- Provides → Application Function
- Deployed on → Technology Component
- Accesses → Data Object
- Exposes → Application Service (API)

---

#### 4.2.3 Application Function

| Attribute | Description | Required |
|-----------|-------------|----------|
| ID | Unique identifier | Yes |
| Name | Function name | Yes |
| Description | What the function does | Yes |
| Type | User Interface / Processing / Data / Integration | No |

**Relationships:**
- Provided by → Application Component
- Supports → Workflow / Business Activity
- Accesses → Data Entity

---

#### 4.2.4 Application Service

| Attribute | Description | Required |
|-----------|-------------|----------|
| ID | Unique identifier | Yes |
| Name | Service name | Yes |
| Description | Service functionality | Yes |
| Interface Type | REST API / SOAP / Messaging / File | Yes |
| Status | Active / Deprecated | Yes |
| Version | API version | No |
| Documentation URL | Link to API documentation | No |

**Relationships:**
- Exposed by → Application Component
- Used by → Application Component (consumer)
- Processes → Data Entity

---

### 4.3 Data Architecture Objects

#### 4.3.1 Data Entity

| Attribute | Description | Required |
|-----------|-------------|----------|
| ID | Unique identifier | Yes |
| Name | Entity name | Yes |
| Description | What the entity represents | Yes |
| Domain | Data domain classification | Yes |
| Type | Master / Reference / Transactional | Yes |
| Owner | Data steward (Organization Unit) | Yes |
| Classification | Public / Internal / Confidential / Restricted | Yes |
| Source | Source system or external source | No |

**Relationships:**
- Belongs to → Data Domain
- Used by → Business Process
- Managed by → Application
- Contains → Attribute (data attributes)

---

#### 4.3.2 Information Flow

| Attribute | Description | Required |
|-----------|-------------|----------|
| ID | Unique identifier | Yes |
| Name | Flow name | Yes |
| Description | What data is exchanged | Yes |
| Source | Originating process/application | Yes |
| Target | Receiving process/application | Yes |
| Frequency | Real-time / Batch / Event-driven | Yes |
| Protocol | Transport mechanism | No |

**Relationships:**
- From → Application Component / Business Process
- To → Application Component / Business Process
- Carries → Data Entity

---

### 4.4 Technology Architecture Objects

#### 4.4.1 Technology Component

| Attribute | Description | Required |
|-----------|-------------|----------|
| ID | Unique identifier | Yes |
| Name | Component name | Yes |
| Description | Component purpose | Yes |
| Type | Server / Network / Storage / Security / Platform | Yes |
| Status | Active / Planned / Retired | Yes |
| Vendor | Supplier | No |
| Model | Product model/version | No |
| Location | Physical or logical location | No |

**Relationships:**
- Located at → Location
- Connected to → Network
- Hosts → Application Component
- Supplied by → Vendor
- Provides → IT Capability

---

#### 4.4.2 Deployment

| Attribute | Description | Required |
|-----------|-------------|----------|
| ID | Unique identifier | Yes |
| Application Component | Deployed software | Yes |
| Technology Component | Target infrastructure | Yes |
| Environment | Development / Test / Production | Yes |
| Date | Deployment date | No |

**Relationships:**
- Maps → Application Component
- To → Technology Component
- In → Environment

---

### 4.5 Investment Portfolio Objects

#### 4.5.1 Project

| Attribute | Description | Required |
|-----------|-------------|----------|
| ID | Unique identifier | Yes |
| Name | Project name | Yes |
| Description | Project scope and objectives | Yes |
| Status | Proposed / Approved / In Progress / Complete | Yes |
| Start Date | Project start | Yes |
| End Date | Project end | Yes |
| Budget | Allocated budget | No |
| Owner | Project sponsor | Yes |

**Relationships:**
- Implements → Initiative
- Delivers → Building Block (ABB/SBB)
- Addresses → Demand
- Funded by → Budget

---

#### 4.5.2 Demand

| Attribute | Description | Required |
|-----------|-------------|----------|
| ID | Unique identifier | Yes |
| Name | Demand name | Yes |
| Description | Business need description | Yes |
| Type | New Capability / Enhancement / Issue Resolution | Yes |
| Priority | Critical / High / Medium / Low | Yes |
| Requestor | Requesting Organization Unit | Yes |
| Status | Submitted / Approved / Rejected / Fulfilled | Yes |

**Relationships:**
- Raised by → Organization Unit
- Triggers → Project
- Related to → Capability Gap

---

### 4.6 Building Block Objects

#### 4.6.1 Architecture Building Block (ABB)

| Attribute | Description | Required |
|-----------|-------------|----------|
| ID | Unique identifier | Yes |
| Name | Building block name | Yes |
| Description | Functional description | Yes |
| Domain | Business / Application / Data / Technology | Yes |
| Type | New / Reusable / To-be-Retired | Yes |
| GovStack Specification | Link to GovStack BB spec if applicable | No |
| Interface Specification | API/interface definition | No |

**Relationships:**
- Realizes → Capability
- Implemented by → Solution Building Block
- Consists of → ABB (sub-building blocks)

---

#### 4.6.2 Solution Building Block (SBB)

| Attribute | Description | Required |
|-----------|-------------|----------|
| ID | Unique identifier | Yes |
| Name | Solution name | Yes |
| Description | Implementation details | Yes |
| ABB Reference | Architecture Building Block implemented | Yes |
| Product/Vendor | Specific product implementing the SBB | No |
| Version | Product version | No |
| Deployment Status | Planned / Deployed / Retired | Yes |

**Relationships:**
- Implements → Architecture Building Block
- Deployed as → Application Component
- Delivered by → Project

---

## 5. Metamodel Diagram

### 5.1 Complete Metamodel Visualization

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                           GEATDM EA METAMODEL - FULL VIEW                            │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│                              ┌───────────────────┐                                   │
│                              │     STRATEGY      │                                   │
│                              ├───────────────────┤                                   │
│                              │ Vision            │                                   │
│                              │    │              │                                   │
│                              │    ▼              │                                   │
│                              │ Goal              │                                   │
│                              │    │              │                                   │
│                              │    ▼              │                                   │
│                              │ Objective         │                                   │
│                              │    │              │                                   │
│                              │    ▼              │                                   │
│                              │ Initiative ───────┼─────────┐                        │
│                              └───────────────────┘         │ implements             │
│                                       │                    ▼                        │
│                                       │ drives   ┌─────────────────┐               │
│                                       ▼          │   INVESTMENT    │               │
│ ┌──────────────────────────────────────────────┐ ├─────────────────┤               │
│ │                    BUSINESS                   │ │ Demand          │               │
│ │ ┌─────────────────────────────────────────┐  │ │    │ triggers   │               │
│ │ │              SERVICE PORTFOLIO           │  │ │    ▼            │               │
│ │ │  ┌─────────────────────────────────┐    │  │ │ Project         │               │
│ │ │  │ Customer ◄────── Business       │    │  │ │    │ delivers   │               │
│ │ │  │            serves   Service     │    │  │ │    ▼            │               │
│ │ │  │                      │          │    │  │ │ Building Block  │               │
│ │ │  └──────────────────────┼──────────┘    │  │ └─────────────────┘               │
│ │ │                         │ realized by   │  │          │                         │
│ │ │                         ▼               │  │          │ implemented as          │
│ │ │  ┌────────────────────────────────────┐ │  │          │                         │
│ │ │  │ Business Process                   │ │  │          │                         │
│ │ │  │      │           │                 │ │  │          │                         │
│ │ │  │      │ contains  │ enabled by      │ │  │          │                         │
│ │ │  │      ▼           ▼                 │ │  │          │                         │
│ │ │  │ Workflow    Capability             │ │  │          │                         │
│ │ │  │      │           │                 │ │  │          │                         │
│ │ │  │      │           │ owned by        │ │  │          │                         │
│ │ │  │      │           ▼                 │ │  │          │                         │
│ │ │  │      │    Organization Unit        │ │  │          │                         │
│ │ │  │      │           │                 │ │  │          │                         │
│ │ │  │      │           │ contains        │ │  │          │                         │
│ │ │  │      │           ▼                 │ │  │          │                         │
│ │ │  │      └─────► Role ◄────────────────┼─┼──┼──────────┘                         │
│ │ │  └────────────────────────────────────┘ │  │                                    │
│ │ └─────────────────────────────────────────┘  │                                    │
│ │                    │ supported by            │                                    │
│ │                    │ uses                    │                                    │
│ └────────────────────┼─────────────────────────┘                                    │
│                      │                                                              │
│           ┌──────────┴──────────┐                                                   │
│           ▼                     ▼                                                   │
│ ┌─────────────────────┐  ┌─────────────────────┐                                   │
│ │    APPLICATION      │  │       DATA          │                                   │
│ ├─────────────────────┤  ├─────────────────────┤                                   │
│ │ Application         │  │ Data Entity         │                                   │
│ │    │                │  │    │                │                                   │
│ │    │ contains       │  │    │ belongs to     │                                   │
│ │    ▼                │  │    ▼                │                                   │
│ │ App Component ──────┼──┼─► Data Domain       │                                   │
│ │    │                │  │                     │                                   │
│ │    │ provides       │  │ Info Flow ──────────┤                                   │
│ │    ▼                │  │    carries ▲        │                                   │
│ │ App Function        │  │            │        │                                   │
│ │    │                │  └────────────┼────────┘                                   │
│ │    │ exposes        │              │                                             │
│ │    ▼                │              │                                             │
│ │ App Service ────────┼──────────────┘                                             │
│ └─────────────────────┘                                                            │
│           │ deployed on                                                            │
│           ▼                                                                        │
│ ┌─────────────────────────────────────────────────────────────────┐               │
│ │                         TECHNOLOGY                               │               │
│ ├─────────────────────────────────────────────────────────────────┤               │
│ │  Server ◄───────── Tech Component ───────► Network              │               │
│ │    │                    │                     │                  │               │
│ │    │                    │ located at          │                  │               │
│ │    │                    ▼                     │                  │               │
│ │    │               Location                   │                  │               │
│ │    │                    │                     │                  │               │
│ │    │                    │ supplied by         │                  │               │
│ │    │                    ▼                     │                  │               │
│ │    └─────────────► Vendor ◄───────────────────┘                  │               │
│ │                                                                  │               │
│ │  IT Capability ◄──── provides                                    │               │
│ └─────────────────────────────────────────────────────────────────┘               │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 5.2 Domain-Specific Views

Organizations should create the following standard viewpoints using this metamodel:

| Viewpoint | Primary Audience | Key Objects Included |
|-----------|-----------------|----------------------|
| **Strategic** | Executive Leadership | Vision, Goal, Objective, Initiative, Capability |
| **Business Services** | Business Managers | Customer, Business Service, Process, Organization |
| **Capability** | Enterprise Architects | Capability, Process, Application, Data Entity |
| **Application Portfolio** | IT Management | Application, Application Component, Application Service |
| **Data Flow** | Data Architects | Data Entity, Information Flow, Application Component |
| **Technology** | Infrastructure Team | Technology Component, Deployment, Network, Server |
| **Investment** | PMO, Finance | Project, Demand, Initiative, Building Block |

---

## 6. Usage Guidelines

### 6.1 When to Use This Metamodel

The metamodel should be used in the following EA activities:

| Activity | How Metamodel is Used |
|----------|----------------------|
| **Current State Documentation (AS-IS)** | Catalog existing objects across all domains; document actual relationships |
| **Target Architecture Development (TO-BE)** | Define desired objects and relationships; identify gaps |
| **Gap Analysis** | Compare AS-IS objects against TO-BE; identify new, changed, and retired objects |
| **Roadmap Planning** | Trace from strategic objectives through building blocks to projects |
| **Compliance Assessment** | Validate solution architectures against metamodel structure |
| **Impact Analysis** | Trace relationships to understand change impacts |

### 6.2 Object Instantiation Guidelines

#### Naming Conventions

| Object Type | Convention | Example |
|-------------|------------|---------|
| Business Service | \<Action\> \<Subject\> | "Process Tax Return", "Issue Business License" |
| Capability | \<Verb\> \<Noun\> | "Manage Registration", "Process Compliance" |
| Application | \<Function\> \<System/Module\> | "Case Management System", "Revenue Module" |
| Data Entity | \<Singular Noun\> | "Taxpayer", "License", "Transaction" |
| Process | \<Verb\> \<Object\> Process | "Registration Process", "Audit Process" |

#### Minimum Documentation Requirements

When creating architecture artifacts, ensure minimum attributes are documented:

**Level 1 (Essential) - Required for all objects:**
- ID, Name, Description, Status

**Level 2 (Standard) - Required for target architecture:**
- Level 1 + Type, Owner, Key Relationships

**Level 3 (Comprehensive) - Required for detailed design:**
- Level 2 + All attributes as defined in the catalog

### 6.3 Relationship Documentation

When documenting relationships:

1. **Always specify direction** - Relationships have a source and target
2. **Use standard relationship types** - Refer to Section 3.1
3. **Document relationship attributes** when relevant (e.g., frequency for Information Flows)
4. **Maintain traceability** - Ensure critical chains (Section 3.3) are complete

### 6.4 Integration with GovStack Building Blocks

When mapping to GovStack Building Blocks:

| Metamodel Object | GovStack Mapping |
|-----------------|------------------|
| Application Component | Map to GovStack BB using `GovStack BB Mapping` attribute |
| Application Service | Map to GovStack BB API specifications |
| Data Entity | Map to GovStack BB data models where applicable |
| Capability | Map to GovStack BB functional capabilities |

**Standard GovStack Building Blocks to consider:**
- Identity BB
- Registration BB
- Digital Registries BB
- Workflow BB
- Messaging BB
- Payments BB
- Consent BB
- Information Mediator BB
- Scheduler BB
- E-Signature BB

### 6.5 Tool Recommendations

This metamodel can be implemented in:

| Tool Category | Examples | Notes |
|--------------|----------|-------|
| **EA Tools** | Sparx EA, Archi, MEGA | Full metamodel implementation with custom profiles |
| **Repository Tools** | Confluence, SharePoint | Document-based for smaller organizations |
| **Specialized** | LeanIX, Ardoq | SaaS options with predefined metamodels |
| **Custom** | PostgreSQL, Airtable | For organizations needing flexibility |

### 6.6 Metamodel Governance

To maintain metamodel integrity:

1. **Central Custodian** - Designate an owner for metamodel maintenance
2. **Change Control** - Any metamodel changes require review and approval
3. **Version Control** - Track metamodel versions; document changes
4. **Training** - Ensure practitioners understand how to apply the metamodel
5. **Quality Checks** - Regular audits of metamodel usage in artifacts

### 6.7 Adapting the Metamodel

Organizations may need to extend the metamodel for specific needs:

**Allowed Extensions:**
- Adding attributes to existing objects
- Creating sub-types of existing objects
- Adding organization-specific viewpoints

**Not Recommended:**
- Removing core objects (breaks interoperability)
- Changing relationship semantics
- Creating overlapping object types

When extending, document:
- What was extended and why
- How the extension maps to the core metamodel
- Impact on standard viewpoints

---

## Source Documents

| Code | Document | Relevant Section |
|------|----------|------------------|
| ZATCA-EAO | ZATCA-EAO-Framework-v1.2.pdf | Section 3 (EA Metamodel) |
| PAERA | paera-framework.docx | Annex 2 (Metamodel of Reference Architecture) |
| T03 | GEATDM-WP0-T03-Definitions-v1.0.md | All definitions |
| TOGAF | TOGAF 9.2 Standard | Content Metamodel |

---

## Document History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | January 2026 | Initial version - generalized from ZATCA EAO Framework |

---

*This metamodel is maintained as part of the GEATDM project and serves as the foundation for all enterprise architecture documentation.*

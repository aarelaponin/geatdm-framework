**3. TECHNICAL ARCHITECTURE**

**Overview**

This section provides comprehensive technical guidance for designing and implementing national e-health ecosystem architectures. Drawing from Estonia's 30-year evolution and Progressa's modern standards-first approach, this reference architecture synthesizes proven patterns into actionable technical guidance.

**Key Architecture Principles Applied in This Section:**

**Standards-Based Interoperability**: HL7 FHIR, DICOM, and international terminologies as foundation

**Modularity and Loose Coupling**: Microservices communicating via standard APIs

**Scalability**: From pilot (thousands) to national scale (millions) without redesign

**Security by Default**: Multi-layer security embedded from inception

**Openness**: Avoid vendor lock-in through open standards and APIs

**3.1 Layered Architecture Model**

**Architecture Overview**

National e-health ecosystems are best conceptualized as **five interconnected layers**, each with specific responsibilities and well-defined interfaces between layers. This layered approach enables:

**Separation of concerns**: Each layer focuses on specific functionality

**Independent evolution**: Layers can be upgraded without disrupting others

**Technology flexibility**: Replace components within layers without system-wide impact

**Scalability**: Scale layers independently based on demand

```
┌─────────────────────────────────────────────────────────────┐
│                  5. USER INTERFACE LAYER                    │
│  Patient Portal • Provider Portal • Admin Dashboards •      │
│  Mobile Apps • Analytics Tools                              │
└─────────────────────────────────────────────────────────────┘
```

                            ↕ HTTPS/REST API

```
┌─────────────────────────────────────────────────────────────┐
│                    4. SERVICE LAYER                         │
│  Patient Services • Clinical Services • Administrative      │
│  Services • Public Health Services • Cross-Border Services  │
└─────────────────────────────────────────────────────────────┘
```

                            ↕ FHIR API

```
┌─────────────────────────────────────────────────────────────┐
│                  3. INTEGRATION LAYER                       │
│  FHIR Intermediary Server • API Gateway • ESB •             │
│  Transformation Services • Legacy Integration Adapters      │
└─────────────────────────────────────────────────────────────┘
```

                            ↕ FHIR/HL7/DICOM

```
┌─────────────────────────────────────────────────────────────┐
│                    2. DATA LAYER                            │
│  EHR Repository • Master Data Registries • Terminology      │
│  Server • Data Warehouse • Document Storage                 │
└─────────────────────────────────────────────────────────────┘
```

                            ↕ Database/File APIs

```
┌─────────────────────────────────────────────────────────────┐
│                  1. FOUNDATION LAYER                        │
│  National ID • Secure Data Exchange (X-Road) • Identity &  │
│  Access Management • Base Registries • Network Infrastructure│
└─────────────────────────────────────────────────────────────┘
```

**3.1.1 Foundation Layer**

**Purpose**: Provides fundamental infrastructure and national base registries that all higher layers depend upon. This is the digital backbone enabling trust, security, and identity.

**National Base Registries**

These authoritative data sources are essential for healthcare but typically exist outside the health sector:

**1. Population Registry**

**Purpose**: Authoritative source of citizen demographics and vital status

**Core Data Elements:**

Personal identification number (national ID)

Full legal name

Date and place of birth

Gender/sex

Nationality and citizenship

Current address

Vital status (alive/deceased, date of death)

Family relationships

**Healthcare Integration:**

Patient identification and matching

Demographics auto-population in EHR

Deceased patient flagging

Address for patient communication

Emergency contact identification

**Estonia Example**: Population Register provides demographics for patient portal and EHR. High data quality because single authoritative source used across all government services.

**Progressa Implementation**: Population register integration planned as foundational component. Patient identification relies on population registry data.

**Implementation Considerations:**

**API Access**: Real-time lookup and verification APIs

**Update Frequency**: Near real-time for vital status, daily/weekly for address

**Privacy**: Healthcare access logged and audited

**Fallback**: Procedures when registry unavailable

**2. Business Registry**

**Purpose**: Authoritative register of all legal entities including healthcare organizations

**Core Data Elements:**

Organization registration number

Legal name and trade names

Organization type and legal form

Registration date and status

Address and contact information

Ownership structure

Tax identification

**Healthcare Integration:**

Healthcare facility identification

Pharmacy registration verification

Laboratory accreditation status

Healthcare organization directory

Billing and claims processing

**Estonia Integration**: Business Register provides foundation for healthcare provider organizations, pharmacies, and laboratories.

**3. Healthcare Professional Registry**

**Purpose**: Authoritative register of licensed healthcare professionals

**Core Data Elements:**

Professional license number

Full name and personal ID

Professional qualifications and specialties

License issue and expiration dates

License status (active, suspended, revoked)

Restrictions or conditions

Continuing education requirements status

Practice locations

**Healthcare Integration:**

Professional authentication and authorization

Role-based access control

Digital signature verification

Prescription authority verification

Professional directory for patient search

**Estonia Example**: Health Board maintains healthcare professional registry including physicians, nurses, pharmacists. Integrated with authentication module for secure access control.

**Progressa Requirements**: Healthcare Professional Register as core master data registry with FHIR API exposure.

**Integration Pattern**:

```
Authentication Request → Query Professional Registry →
Verify Active License + Specialties → Determine Access Roles →
```

Grant/Deny Access

**4. Healthcare Facility Registry**

**Purpose**: Comprehensive register of all healthcare facilities

**Core Data Elements:**

Facility unique identifier

Facility name and type

Owner/operator organization

Services provided

Bed capacity (if applicable)

Geographic location

Contact information

Accreditation status and level

Operating hours

Emergency services availability

**Healthcare Integration:**

Facility directory for patient search

Referral routing and coordination

Appointment booking

Service availability checking

Quality and performance reporting

Geographic health system mapping

**Estonia Example**: Healthcare providers registered since 2009, enabling comprehensive facility directory and service planning.

**Progressa Implementation**: Healthcare Organization Register with detailed service directory (Health Service Directory - HSD).

**5. Medical Device Registry**

**Purpose**: Register of approved and marketed medical devices

**Core Data Elements:**

Device unique identifier (UDI)

Device name and type

Manufacturer information

Approval/registration date

Intended use and indications

Risk classification

Post-market surveillance data

Recalls and safety alerts

**Healthcare Integration:**

Device implant tracking

Adverse event reporting

Recall notification

Supply chain management

Clinical integration (pacemakers, insulin pumps)

**Identity and Access Management (IAM)**

**Purpose**: Ensure only authenticated and authorized users access health data

**Components:**

**1. National ID Infrastructure**

**Requirements:**

**Strong authentication**: ID-card, Mobile-ID, Smart-ID, biometrics

**High penetration**: >90% of population

**Legal validity**: Digital signatures legally binding

**Wide acceptance**: Used across government and private sectors

**Secure**: PKI-based, tamper-resistant

**Estonia Example**:

**ID-card**: Chip-based card with PKI certificates, 99% penetration

**Mobile-ID**: SIM-based authentication via mobile phone

**Smart-ID**: App-based authentication

**Usage**: Used for authentication across all e-government services including healthcare

**Progressa Challenge**: Building national electronic identification scheme recommended (following EU eIDAS model). Current password-based authentication considered high vulnerability.

**Implementation Recommendations:**

**If national ID exists**: Leverage it for healthcare authentication (Estonia model)

**If building from scratch**: Modern mobile-first approach (Progressa approach) 

Mobile ID apps (TOTP, push notifications, biometrics)

FIDO2/WebAuthn for passwordless authentication

PKI certificates for digital signatures

**Healthcare-specific credentials**: Layer on top of national ID (professional licenses, roles)

**2. Healthcare-Specific Authentication**

**Beyond national ID, healthcare needs:**

**Professional Credentials:**

License verification

Specialty certification

Facility affiliation

Current employment status

Delegation and proxy access

**Patient Proxy Access:**

Parent/guardian access to minor records

Legal representative access for incapacitated persons

Healthcare proxy for decision-making

Temporary delegation (share access with caregiver)

**Emergency Access ("Break-the-Glass"):**

Override normal access controls in life-threatening emergencies

Enhanced audit logging

Automatic notifications to patient

Post-event review and justification required

Potential disciplinary action for abuse

**3. Role-Based Access Control (RBAC)**

**Purpose**: Ensure users access only data necessary for their role and purpose

**RBAC Model:**

```
User → Assigned Roles → Roles Have Permissions → Access Resources
```

Example:

```
Dr. Jane Smith → Primary Care Physician Role →
[View Patient EHR, Create Prescriptions, Order Labs] →
```

Access John Doe's Record for Treatment Purpose

**Healthcare Role Examples:**

**Clinical Roles:**

**Physician** (by specialty: General Practice, Cardiology, Oncology, etc.)

**Nurse** (by type: Registered Nurse, Nurse Practitioner, etc.)

**Pharmacist**

**Laboratory Technician**

**Radiologist**

**Physical Therapist**

**Medical Assistant**

**Administrative Roles:**

**Registration Clerk**

**Billing Specialist**

**Medical Records Administrator**

**Quality Improvement Analyst**

**Public Health Officer**

**System Administrator**

**Permission Granularity:**

**Read vs. Write**: View data vs. create/modify

**Data Categories**: Demographics, medications, lab results, imaging, mental health, HIV

**Purpose**: Treatment, payment, operations, research, public health

**Time-based**: Temporary access for consultations

**Location-based**: Access only within facility network

**Highly Sensitive Data**:

**Mental Health**: Additional restrictions, specialized access

**HIV/AIDS**: Enhanced privacy protections

**Substance Abuse**: Federal regulations (US) or equivalent

**Genetic Data**: Special consent and access rules

**Reproductive Health**: Enhanced privacy in some contexts

**Implementation Pattern**:

def check_access(user, patient, data_category, purpose):

    # 1. Verify user authentication

    if not user.is_authenticated():

        return DENY

    # 2. Check active professional license

    if not professional_registry.verify_license(user.license_number):

        return DENY

    # 3. Verify role-based permissions

    roles = user.get_roles()

    required_permission = f"read:{data_category}"

    if not any(role.has_permission(required_permission) for role in roles):

        return DENY

    # 4. Check purpose-based access

    if purpose not in user.get_allowed_purposes():

        return DENY

    # 5. Check patient consent

    if patient.has_restricted_access(data_category, user):

        if not is_emergency_override():

            return DENY

        else:

            log_emergency_access(user, patient, data_category)

    # 6. Log access

    audit_log.record_access(user, patient, data_category, purpose, timestamp)

    # 7. Grant access

    return ALLOW

**4. Consent Management**

**Purpose**: Respect patient preferences for data sharing while enabling effective care

**Consent Models:**

**Opt-Out (Presumed Consent) - Recommended:**

**Default**: Data shared for treatment purposes

**Patient Control**: Can opt-out via patient portal

**Granularity**: Can restrict specific data categories or specific providers

**Emergency Override**: Treatment needs override restrictions in emergencies

**Transparency**: Patient sees all access via audit logs

**Implementation:**

Default: ALLOW treatment access

Patient sets restrictions:

  - Restrict all access from specific provider (e.g., employer-affiliated clinic)

  - Restrict specific data category from all (e.g., mental health records)

  - Restrict specific data from specific provider

Emergency override: Access granted, patient notified, post-review required

**Opt-In (Explicit Consent):**

**Default**: No data shared without explicit consent

**Patient Control**: Must explicitly grant access

**Granularity**: Per provider, per encounter, per purpose

**Challenge**: Lower adoption, fragmented records, care coordination difficulties

**Consent Types:**

**Treatment Consent** (usually presumed in opt-out model)

**Research Consent** (usually requires explicit opt-in)

**Teaching Consent** (medical students accessing records)

**Quality Improvement Consent**

**Public Health Reporting** (usually mandated, not consented)

**Commercial Use** (always requires explicit consent)

**Consent Lifecycle:**

**Grant**: Patient provides consent via portal or written form

**Record**: Consent stored with effective date and scope

**Enforce**: Access control enforces consent rules

**Revoke**: Patient can withdraw consent

**Expire**: Time-limited consents expire automatically

**Audit**: All consent changes logged

**5. Emergency Access Mechanisms**

**Challenge**: Balance routine privacy protection with life-saving emergency access needs

**"Break-the-Glass" Pattern:**

**Trigger**: Healthcare professional indicates emergency situation requiring immediate access to patient data despite normal restrictions

**Process:**

Professional indicates emergency access needed

System requires justification/attestation

System grants temporary elevated access

**Enhanced audit logging** captures: 

Professional identity and credentials

Patient identity

Emergency justification

All data accessed

Timestamp and duration

**Patient notification**: Automatic alert to patient of emergency access

**Post-event review**: Supervisor or audit team reviews within 24-72 hours

**Consequences**: Inappropriate use results in disciplinary action

**Implementation:**

if (professional.requests_emergency_access(patient)):

    justification = professional.provide_justification()

    system.log_emergency_access(professional, patient, justification)

    system.grant_temporary_access(professional, patient, duration=4_hours)

    system.notify_patient(patient, "Emergency access granted to Dr. Smith")

    system.queue_for_review(access_event, review_within=24_hours)

    return ALLOW_EMERGENCY_ACCESS

**Example Emergency Scenarios:**

Unconscious patient in emergency department

Cardiac arrest requiring immediate medication history

Suspected drug interaction in acute care

Mental health crisis requiring immediate history

**Secure Data Exchange Infrastructure**

**Purpose**: Enable secure, audited, and reliable data exchange between health information systems

**Pattern 1: X-Road (Estonia Model)**

**What is X-Road:**

Distributed data exchange layer connecting government and healthcare systems

Originally developed by Estonia, now used in multiple countries

Ensures secure, encrypted, logged data exchange

Enables federated architecture where data remains at source

**Architecture:**

```
┌──────────┐         ┌──────────┐         ┌──────────┐
│Healthcare│◄───────►│ X-Road   │◄───────►│Population│
│ System A │  Query  │ Gateway  │ Response│ Registry │
└──────────┘         └──────────┘         └──────────┘
```

                           ▲

```
│ All exchanges logged
```

                           ▼

```
┌──────────┐
│  Central │
│  Logging │
└──────────┘
```

**Key Capabilities:**

**Encryption**: All messages encrypted in transit (TLS)

**Digital Signatures**: All messages digitally signed (non-repudiation)

**Audit Logging**: Every query and response logged centrally

**Service Discovery**: Directory of available services and endpoints

**Load Balancing**: Distribute queries across multiple instances

**High Availability**: Redundant infrastructure

**Estonia Implementation:**

X-Road deployed 2001, healthcare integrated 2008+

All health data exchange goes through X-Road

Patient portal, provider portal, prescription center all use X-Road

Cross-border health data exchange via X-Road international

99.99% availability

**When to Use X-Road Model:**

National digital infrastructure already has X-Road or equivalent

Federated architecture desired (data stays at source)

Government services integration beyond healthcare needed

High security and audit requirements

Budget for infrastructure deployment and maintenance

**Pattern 2: FHIR Intermediary Server (Progressa Model)**

**What is FHIR Intermediary Server (FIS):**

Central hub managing FHIR-based data exchange

Routes FHIR requests to appropriate services/systems

Provides healthcare-specific benefits beyond generic API gateway

**Architecture:**

```
┌──────────┐         ┌──────────┐         ┌──────────┐
│ Patient  │         │   FHIR   │         │   EHR    │
│ Portal   │◄───────►│Intermediary◄───────►│Repository│
└──────────┘  FHIR   │  Server  │  FHIR   └──────────┘
└──────────┘
```

                           ▲

```
│
┌──────┴──────┐
```

                    ▼             ▼

```
┌──────────┐  ┌──────────┐
│ ePrescr. │  │  eLab    │
│ Service  │  │ Service  │
└──────────┘  └──────────┘
```

**Key Capabilities:**

**Routing**: Direct FHIR requests to correct services

**Content-Based Routing**: Analyze FHIR resources to determine destination

**Search Optimization**: Aggregate search across multiple FHIR servers

**Security**: Centralized authentication/authorization enforcement

**Audit Logging**: Standardized FHIR audit events

**Caching**: Performance optimization through caching

**Transformation**: FHIR version conversion, profile mapping

**Validation**: Ensure FHIR resources conform to profiles

**Progressa Implementation:**

FIS as central architectural component

Routes between 19 core services

Manages FHIR communication with external applications (MIS, PACS, LIS)

Provides single API surface for developers

**FIS vs. API Gateway:**


| Feature | API Gateway | FHIR Intermediary Server |
|---|---|---|
| Protocol | Any (REST, SOAP, etc.) | FHIR-specific |
| Healthcare semantics | No | Yes (understands FHIR resources) |
| Content routing | Limited | Advanced (based on FHIR content) |
| Search federation | No | Yes (FHIR search across servers) |
| FHIR validation | No | Yes (profile conformance) |
| Healthcare audit | Generic | FHIR-specific audit events |
| Use case | General APIs | Healthcare FHIR-native systems |


**When to Use FIS Model:**

FHIR-native architecture

Multiple FHIR servers to coordinate

Need content-based routing (e.g., route Medication resources to pharmacy service)

Healthcare-specific search and aggregation

Standards-first implementation (Progressa approach)

**Pattern 3: Hybrid Approach**

**Combine X-Road (or equivalent secure exchange) with FHIR Intermediary Server:**

```
External Systems → X-Road Gateway → FHIR Intermediary Server → Internal FHIR Services
```

**Benefits:**

Secure exchange with non-healthcare government systems (X-Road)

Healthcare-optimized routing and search (FIS)

Best of both patterns

**When to Use:**

National X-Road infrastructure already exists

Building modern FHIR-native healthcare services

Need both general government integration and healthcare-specific optimization

**Network Infrastructure**

**Requirements:**

**1. High-Speed Connectivity**

**Minimum**: 100 Mbps for small clinics

**Recommended**: 1 Gbps for hospitals

**Data Centers**: 10+ Gbps with redundancy

**Redundancy**: Multiple ISPs, failover mechanisms

**2. Virtual Private Networks (VPN)**

Secure connections from facilities to central infrastructure

Site-to-site VPN for facility networks

Client VPN for remote healthcare professionals (telemedicine)

Always-on encrypted tunnels

**3. Quality of Service (QoS)**

Priority for: 

Real-time telemedicine video

PACS imaging transfers

Emergency department systems

Bandwidth allocation and traffic shaping

**4. Content Delivery Network (CDN)**

Cache static content (images, documents) closer to users

Reduce load on central servers

Improve patient portal performance

Distribute medical images efficiently

**3.1.2 Data Layer**

**Purpose**: Store, manage, and provide access to all health data in standardized formats

**Central Health Data Repository**

**Architecture Decision: Document-Based vs. FHIR-Native**

**Option 1: Document-Based EHR (Estonia Pattern)**

**Approach**: Store complete clinical documents (HL7 CDA R2) as XML files

**Storage Model:**

EHR Document

```
├── Patient ID (reference to population registry)
├── Author (healthcare professional)
├── Facility
├── Document Type (discharge summary, progress note, lab report, etc.)
├── Document Date/Time
├── CDA XML Content
│   ├── Header (metadata)
│   ├── Body (clinical content)
│   └── Structured sections
└── Digital Signature
```

**Advantages:**

**Simplicity**: Documents are self-contained units

**Non-repudiation**: Digitally signed documents provide legal evidence

**Human Readability**: CDA documents render to HTML for viewing

**Proven**: Estonia 150M+ documents since 2008

**Disadvantages:**

**Limited Granularity**: Cannot query within documents easily

**Difficult Analytics**: Extracting structured data from documents for analysis

**Real-Time Decision Support**: Hard to access specific data points quickly

**Duplication**: Same data repeated across multiple documents

**When to Use:**

Mature clinical systems already generating CDA documents

Legal requirements for document-based records

Simpler implementation for initial deployment

Transition strategy to FHIR (FHIR Facade later)

**Estonia Example**:

150+ million documents stored

HL7 v3 and CDA R2 format

Documents stored after case closure

Transitioning to event-based/FHIR with upTIS modernization

**Option 2: FHIR-Native EHR (Progressa Pattern)**

**Approach**: Store atomic FHIR resources in database, compose into documents/views as needed

**Storage Model:**

FHIR Resources Database

```
├── Patient resources
├── Practitioner resources
├── Encounter resources
├── Observation resources (vital signs, lab results)
├── Condition resources (diagnoses)
├── MedicationRequest resources (prescriptions)
├── Procedure resources
├── DiagnosticReport resources
└── ... (all FHIR resource types)
```

Each resource:

  - Unique ID

  - Version history

  - References to related resources

  - Conformance to FHIR profiles

**Advantages:**

**Granular Access**: Query specific data points easily (all blood pressures)

**Real-Time Analytics**: Structured data ready for queries

**Decision Support**: Fast access to specific clinical facts

**Interoperability**: Native FHIR resources for exchange

**Flexible Composition**: Create different views/documents from same data

**Future-Proof**: Modern standard, active development

**Disadvantages:**

**Complexity**: More complex data model and queries

**Performance**: May require optimization for large-scale queries

**Learning Curve**: Development teams need FHIR expertise

**Migration**: Existing systems need FHIR transformation

**When to Use:**

New implementations starting from scratch (Progressa approach)

Advanced analytics and decision support requirements

Real-time clinical workflows

Future interoperability priority

Available FHIR expertise

**Progressa Implementation**:

FHIR R4 as primary data model

PostgreSQL database for FHIR resources

Microservices each managing specific resource types

FHIR server (HAPI FHIR or similar) for storage and retrieval

**Option 3: Hybrid Approach**

**Combine document storage with FHIR resource database:**

Store complete documents (legacy compatibility, legal record)

Parse and store FHIR resources (analytics, decision support)

Reference between documents and resources

Use FHIR resources for queries, documents for legal record

**Implementation:**

Document Storage (CDA/PDF)

```
↓
```

    Parser/Extractor

```
↓
```

FHIR Resource Database

```
↓
```

    FHIR API for queries

Legal record: Document

Analytics: FHIR resources

Display: Render from either

**When to Use:**

Transitioning from document-based to FHIR

Need both legal document record and structured data

Estonia's upTIS transition approach

**Recommendation by Context:**

**Greenfield Implementation**: FHIR-native (Progressa model)

**Existing Document Systems**: Hybrid or FHIR Facade (Estonia upTIS model)

**Simple/Resource-Constrained**: Document-based initially, plan FHIR migration

**Clinical Data Warehouse**

**Purpose**: Separate repository optimized for analytics, reporting, and population health

**Architecture:**

Operational EHR (OLTP)          Clinical Data Warehouse (OLAP)

```
├── Fast transactions           ├── Optimized for queries
├── Normalized data             ├── Denormalized/star schema
├── Current data                ├── Historical data
└── 24/7 availability           ├── Pseudonymized for analytics
└── Batch updates (daily/weekly)
```

```
↓ ETL Process
```

```
Extract → Transform → Load → Data Warehouse
↓
```

                            Analytics & BI Tools

**Key Differences:**


| Aspect | Operational EHR | Data Warehouse |
|---|---|---|
| Purpose | Clinical care | Analytics, reporting |
| Data model | Normalized (FHIR, relational) | Star schema, dimensional |
| Updates | Real-time | Batch (daily, weekly) |
| Queries | Specific patients | Population aggregates |
| Performance | Fast writes | Fast complex queries |
| Identifiable data | Yes (clinical need) | Pseudonymized when possible |


**Data Warehouse Schema:**

**Fact Tables** (metrics/events):

Encounters (visits, admissions)

Observations (lab results, vital signs)

Procedures performed

Medications prescribed/dispensed

Diagnoses documented

**Dimension Tables** (attributes):

Patient dimensions (age, gender, geography)

Provider dimensions (specialty, facility, experience)

Time dimensions (date, season, fiscal period)

Location dimensions (region, facility type, rural/urban)

Diagnosis/procedure code dimensions

**Estonia Example**: Pseudonymized health data warehouse since 2013. Separates personal identifiers from clinical data for analytics while preventing technical administrator access to identifiable patient data.

**Progressa Implementation**: Business Intelligence components (BI Core and BI Reports) with data warehouse for clinical quality, operational, financial, and public health analytics.

**ETL Process:**

**Extract**: Nightly extract from operational EHR

**Transform**: 

Cleanse data (fix errors, handle missing values)

Standardize terminologies

Pseudonymize identifiers

Calculate derived metrics

Aggregate to appropriate granularity

**Load**: Insert into warehouse dimensional model

**Validate**: Data quality checks

**Use Cases:**

Population health dashboards

Quality measure reporting

Resource utilization analysis

Disease surveillance

Research cohort identification

Predictive modeling (risk stratification)

**Data Retention and Archiving**

**Active Data** (frequent access needed):

Storage: High-performance SSD storage

Backup: Daily incremental, weekly full backups

Access: Sub-second query response

Example: Last 2-3 years of clinical data

**Archived Data** (infrequent access):

Storage: Cost-optimized storage (HDD, tape, cold cloud storage)

Backup: Less frequent, longer-term retention

Access: Minutes to hours retrieval time

Example: Data older than 3 years

**Archival Strategy:**

Operational Database (0-2 years)

```
↓ (Yearly archival process)
```

Archive Database (2-10 years)

```
↓ (Permanent archival)
```

Long-Term Archive (10+ years until legal retention expires)

```
↓ (Secure deletion after retention period)
```

Destroyed (certified data destruction)

**Legal Retention Requirements:**

Active patients: Indefinite retention

Deceased patients: 10-30 years after death (varies by jurisdiction)

Minors: Until age of majority + retention period

See Legal Framework section for detailed retention policies

**Backup and Disaster Recovery**

**Backup Strategy:**

**3-2-1 Rule:**

**3** copies of data (original + 2 backups)

**2** different media types (disk and tape, or on-premise and cloud)

**1** copy offsite (different geographic location)

**Backup Types:**

**Full Backup**: Complete copy (weekly)

**Incremental Backup**: Changes since last backup (daily)

**Continuous Replication**: Real-time sync to standby (critical systems)

**Recovery Time Objective (RTO):**

**Critical Systems** (EHR, ePrescription): <4 hours

**Important Systems** (patient portal, analytics): <24 hours

**Non-Critical Systems**: <72 hours

**Recovery Point Objective (RPO):**

**Critical Systems**: <15 minutes (near-zero data loss)

**Important Systems**: <24 hours

**Non-Critical Systems**: <72 hours

**Disaster Recovery Testing:**

**Frequency**: Quarterly full DR drills

**Scope**: Complete failover to DR site

**Documentation**: Detailed runbooks for recovery

**Validation**: Verify all systems operational after failover

**Geographic Redundancy:**

Primary data center in one region

Secondary DR data center in different region (>100km distance)

Real-time replication of critical data

Automated failover for critical services

**Master Data Management**

**1. Patient Master Index (EMPI / MPI)**

**Challenge**: Link patient records across multiple facilities and systems despite:

Name variations (Mary Smith vs. Marie Smith vs. Mary Johnson after marriage)

Data entry errors

Duplicate registrations

Incomplete demographics

**Solution: Probabilistic Matching**

**Matching Algorithm:**

Input: Patient demographic data

  - National ID (if available - highest weight)

  - Name (first, middle, last)

  - Date of birth

  - Gender

  - Address

  - Phone number

Matching Process:

```
1. Exact match on national ID → Definite match (if ID validated)
```

2. If no ID match, calculate similarity scores:

   - Name similarity (phonetic algorithms: Soundex, Metaphone)

   - DOB match (exact or close)

   - Gender match

   - Address similarity

   - Phone similarity

3. Calculate composite score (weighted):

   - Score > 0.9: Definite match

   - Score 0.7-0.9: Possible match (manual review)

   - Score < 0.7: Different patients

4. Human review of possible matches

5. Merge records or mark as distinct patients

**Governance:**

**Match Review**: Trained staff review possible matches daily

**Merge Process**: Documented procedure for merging duplicates

**Split Process**: Ability to undo incorrect merges

**Audit Trail**: All matching decisions logged

**Performance:**

**False Positive Rate**: <1% (incorrectly merged)

**False Negative Rate**: <5% (missed matches)

**Manual Review Queue**: <100 cases per day for large populations

**2. Provider Directory**

**Purpose**: Authoritative list of all healthcare professionals with current credentials

**Data Source**: Healthcare professional registry (Foundation Layer)

**Enhanced Attributes for EHR:**

Clinical interests and expertise

Languages spoken

Accepting new patients (yes/no)

Appointment booking availability

Telemedicine capability

Direct contact information for referrals

Professional network and group affiliations

**Update Frequency:**

**Credential updates**: Real-time from registry

**Clinical attributes**: Monthly or on-demand

**Availability**: Real-time or daily updates

**Patient-Facing Directory:**

Searchable by specialty, location, language, availability

Quality metrics (patient satisfaction, outcomes)

Insurance accepted

Accessibility (wheelchair accessible, parking)

**3. Facility Registry**

**Purpose**: Comprehensive directory of healthcare facilities

**Data Elements:**

Facility type (hospital, clinic, pharmacy, laboratory, imaging center)

Services offered (detailed service catalog)

Hours of operation

Emergency services (yes/no, capabilities)

Bed capacity and availability (for hospitals)

Accreditation and certifications

Quality ratings

Insurance accepted

Transportation access

**Use Cases:**

Patient search for nearby facilities

Referral routing (find appropriate specialist facility)

Capacity planning (bed availability)

Quality comparison

Public health planning

**4. Terminology Server**

**Purpose**: Central management of all clinical terminologies

**Architecture:**

Terminology Server (HAPI FHIR TS, Ontoserver, etc.)

```
├── SNOMED CT (clinical concepts)
├── LOINC (lab tests and clinical observations)
├── ICD-11 (disease classification)
├── ATC (medication classification)
├── ICF (functioning and disability)
├── Orphanet (rare diseases)
├── UCUM (units of measure)
└── Local/National Extensions
```

Services Provided:

```
├── Code Lookup (get details for specific code)
├── Value Set Expansion (get all codes in a value set)
├── Concept Search (find codes matching search term)
├── Code Validation (verify code valid in terminology)
├── Subsumption Testing (is concept A a type of concept B)
└── Translation/Mapping (map between terminologies)
```

**SNOMED CT Implementation:**

**Structure:**

**Concepts**: Clinical ideas (e.g., "Myocardial Infarction")

**Descriptions**: Human-readable terms for concepts (synonyms)

**Relationships**: How concepts relate (is-a, finding-site, causative-agent)

**Example:**

Concept: 22298006 | Myocardial infarction |

  Is-a: 128599005 | Myocardial disease |

  Is-a: 57054005 | Acute heart disease |

  Finding-site: 80891009 | Heart structure |

  Associated-with: 53741008 | Coronary arteriosclerosis |

Descriptions:

  - "Myocardial infarction" (preferred term)

  - "Heart attack" (synonym)

  - "MI" (synonym)

  - "Acute myocardial infarction" (synonym)

**Terminology Translation:**

**Progressa Example**: All terminologies translated to the local language and English

**Process:**

**Professional Translation**: Clinical experts translate preferred terms

**Synonym Generation**: Add culturally appropriate synonyms

**Quality Assurance**: Medical review of translations

**Testing**: Validate clinical usage

**Maintenance**: Regular updates with international releases

**Challenge Areas:**

Technical medical terms without direct translation

Cultural concepts not present in source language

Abbreviations and acronyms

Maintaining synchronization with international updates

**LOINC Implementation:**

**Structure:**

**Codes**: Laboratory tests and clinical observations

**Names**: Fully specified names

**Properties**: Specimen, scale, method

**Example:**

LOINC Code: 2093-3

Name: Cholesterol [Mass/volume] in Serum or Plasma

Synonym: Total cholesterol

Component: Cholesterol

Property: MCnc (Mass Concentration)

Timing: Pt (Point in time)

System: Ser/Plas (Serum or Plasma)

Scale: Qn (Quantitative)

Method: [blank] (any method)

**Value Sets:**

**Purpose**: Constrained lists of codes for specific purposes

**Example Value Sets:**

"Common Lab Tests" (subset of LOINC for typical primary care labs)

"Diabetes Diagnoses" (subset of ICD-11 for diabetes)

"Cardiovascular Medications" (subset of ATC)

"Allergy Substances" (subset of SNOMED CT)

**Value Set Management:**

Clinical committees define value sets

Regular review and updates

Version control (value sets evolve over time)

Implementation guides specify required value sets

**Terminology Server Performance:**

**Code Lookup**: <100ms

**Value Set Expansion**: <1 second for typical value sets

**Search**: <500ms for interactive use

**Caching**: Heavily cache frequent queries

**Data Standards Implementation**

**HL7 FHIR Profiles and Implementation Guides**

**FHIR Profile**: Constraints on FHIR resources for specific use cases

**Example: ****Progressa Patient Profile**

{

  "resourceType": "StructureDefinition",

  "id": "pg-patient",

  "url": "http://dhp.progressa.example/fhir/StructureDefinition/pg-patient",

  "name": "ProgressaPatient",

  "status": "active",

  "description": "Patient profile for Progressa DHP",

  "kind": "resource",

  "abstract": false,

  "type": "Patient",

  "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Patient",

  "differential": {

    "element": [

      {

        "id": "Patient.identifier",

        "path": "Patient.identifier",

        "min": 1,

        "mustSupport": true,

        "comment": "At minimum, national ID required"

      },

      {

        "id": "Patient.identifier:nationalId",

        "path": "Patient.identifier",

        "sliceName": "nationalId",

        "min": 1,

        "max": "1",

        "type": [{

          "code": "Identifier"

        }],

        "patternIdentifier": {

          "system": "http://gov.progressa.example/national-id"

        }

      },

      {

        "id": "Patient.name",

        "path": "Patient.name",

        "min": 1,

        "mustSupport": true

      },

      {

        "id": "Patient.birthDate",

        "path": "Patient.birthDate",

        "min": 1,

        "mustSupport": true

      },

      {

        "id": "Patient.address",

        "path": "Patient.address",

        "mustSupport": true,

        "binding": {

          "strength": "required",

          "valueSet": "http://dhp.progressa.example/fhir/ValueSet/pg-addresses"

        }

      }

    ]

  }

}

**Key Profile Elements:**

**Cardinality**: min/max occurrences (e.g., national ID required: min=1)

**Must Support**: Elements that implementations must support

**Value Set Bindings**: Constrain coded elements to specific value sets

**Extensions**: Add national-specific data elements not in base FHIR

**Implementation Guide (IG):**

**Purpose**: Document how to use FHIR for specific use case

**IG Contents:**

**Use Case Description**: Clinical scenario and workflows

**Profiles**: Resource profiles with constraints

**Value Sets**: Code sets used

**Search Parameters**: How to query resources

**Examples**: Sample FHIR resources demonstrating profiles

**Security Requirements**: Authentication, authorization

**Error Handling**: Expected error responses

**Example: ePrescription Implementation Guide**

**Profiles Defined:**

MedicationRequest (prescription order)

Medication (medication details)

Patient (patient receiving prescription)

Practitioner (prescribing physician)

Organization (prescribing facility)

**Workflows Defined:**

Physician creates MedicationRequest

MedicationRequest POSTed to FHIR server

Prescription Service validates and stores

Pharmacist queries for patient's active prescriptions

Pharmacist dispenses and records MedicationDispense

Patient views prescriptions in portal

**DICOM for Imaging**

**Purpose**: Medical imaging and related data exchange

**DICOM Services:**

**Storage (DICOM C-STORE)**: Send images to PACS

**Query/Retrieve (DICOM C-FIND, C-MOVE)**: Search and retrieve images

**Worklist (DICOM MWL)**: Procedure scheduling

**Structured Reports (DICOM SR)**: Radiology reports

**Web Services (DICOMweb)**: RESTful access to DICOM data

**Integration with FHIR:**

**ImagingStudy resource**: Metadata about imaging exam (references DICOM study)

**DiagnosticReport resource**: Radiology report (may embed DICOM SR)

**DICOMweb**: Modern RESTful DICOM access

**WADO (Web Access to DICOM Objects)**: Retrieve images via HTTP

**Architecture:**

Modality (CT, MRI, X-ray) 

```
↓ DICOM C-STORE
```

PACS (Picture Archiving)

```
↓ DICOM Query/Retrieve or DICOMweb
```

FHIR Server (ImagingStudy metadata)

```
↓ FHIR API
```

Patient Portal / Provider Portal (image viewing)

**Clinical Terminologies (SNOMED CT, LOINC, ICD-11)**

See Terminology Server section above for detailed implementation guidance.

**Data Validation and Quality Rules**

**Validation Levels:**

**1. Syntax Validation** (basic format checks):

Data type correct (string, integer, date, boolean)

Required fields present

String length within limits

Date formats valid

**2. Semantic Validation** (clinical meaning checks):

Codes from correct terminology (ICD-11 for diagnoses)

Codes active/current (not deprecated)

Value within clinical range (blood pressure 50-250 mmHg)

Units appropriate for measurement (glucose in mg/dL or mmol/L)

**3. Cross-Field Validation** (consistency checks):

Pregnancy diagnoses only for female patients

Medication dose appropriate for patient weight/age

Procedure date after patient birth date

Discharge date after admission date

**4. Temporal Validation** (time-based consistency):

Medication end date after start date

Follow-up visit after initial visit

Chronic disease diagnosis persists (not resolved immediately)

Immunization dates spaced appropriately

**5. Business Rule Validation** (clinical logic):

Prescription requires active license

Controlled substances require DEA authorization (US) or equivalent

Certain procedures require prior authorization

Age-appropriate immunizations (childhood vaccines for children)

**Implementation:**

function validateMedicationRequest(medicationRequest) {

  const errors = [];

  // Syntax validation

  if (!medicationRequest.patient) {

    errors.push("Patient reference required");

  }

  if (!medicationRequest.medicationCodeableConcept) {

    errors.push("Medication code required");

  }

  // Semantic validation

  if (medicationRequest.dosageInstruction) {

    const dose = medicationRequest.dosageInstruction[0].doseAndRate[0].doseQuantity;

    if (dose.value < 0) {

      errors.push("Dose must be positive");

    }

    // Check dose within therapeutic range

    const therapeuticRange = getTherapeuticRange(medicationRequest.medicationCodeableConcept);

    if (dose.value > therapeuticRange.max) {

      errors.push(`Dose ${dose.value} exceeds maximum ${therapeuticRange.max}`);

    }

  }

  // Business rule validation

  const prescriber = getPractitioner(medicationRequest.requester);

  if (!prescriber.hasActiveLicense()) {

    errors.push("Prescriber does not have active license");

  }

  if (isControlledSubstance(medicationRequest.medicationCodeableConcept)) {

    if (!prescriber.hasDEAAuthorization()) {

      errors.push("Controlled substance requires DEA authorization");

    }

  }

  return errors;

}

**Data Quality Monitoring:**

Daily reports on validation failures

Trending over time (improving or worsening)

Facility-level comparison

Individual provider feedback (e.g., frequent coding errors)

**3.1.3 Integration Layer**

**Purpose**: Enable communication between diverse systems using different standards and technologies

**Key Challenge**: Healthcare ecosystems have heterogeneous systems - legacy HL7 v2, newer FHIR, DICOM imaging, proprietary APIs, file transfers. Integration layer harmonizes these into coherent whole.

**FHIR Intermediary Server (FIS)**

See Foundation Layer section for detailed FIS architecture. Key integration layer responsibilities:

**Content-Based Routing:**

```
Incoming FHIR Request → Analyze Resource Type → Route to Appropriate Service
```

Examples:

```
- MedicationRequest → Route to Prescription Service
- DiagnosticReport (lab) → Route to Laboratory Service
- DiagnosticReport (imaging) → Route to PACS/Imaging Service
- Appointment → Route to Scheduling Service
```

**Search Optimization:**

Patient Portal Search: "All lab results for patient"

```
↓
```

FHIR Intermediary Server

```
↓ Parallel queries
├─→ Laboratory Service (FHIR search)
├─→ Legacy LIS (HL7 v2 query, converted to FHIR response)
└─→ External Lab (file-based results, converted to FHIR)
↓ Aggregate results
```

Combined FHIR Bundle returned to portal

**Security Enforcement:**

Every FHIR Request

```
↓
```

FIS: Validate authentication token

```
↓
```

FIS: Check authorization (RBAC)

```
↓
```

FIS: Verify patient consent

```
↓
```

FIS: Log access (audit trail)

```
↓ If all checks pass
```

Forward to target service

**Transformation and Mapping:**

FHIR R4 ↔ FHIR R5 conversion

US Core ↔ International Patient Summary

National profiles ↔ International profiles

**Legacy System Integration**

**Challenge**: Existing healthcare systems use older standards (HL7 v2, v3, CDA) or proprietary formats

**Pattern 1: FHIR Facade**

**Concept**: Create FHIR API layer in front of legacy system without modifying legacy system

**Architecture:**

```
┌─────────────────────────────────────────────┐
│         FHIR Facade Service                 │
│  ┌─────────────────────────────────────┐   │
│  │      FHIR API Endpoints             │   │
│  │ (GET /Patient, POST /Observation)   │   │
│  └─────────────────────────────────────┘   │
│                  ↕                          │
│  ┌─────────────────────────────────────┐   │
│  │    Transformation Engine            │   │
│  │  FHIR ↔ HL7 v2 / Proprietary      │   │
│  └─────────────────────────────────────┘   │
│                  ↕                          │
│  ┌─────────────────────────────────────┐   │
│  │    Legacy System Integration        │   │
│  │  (HL7 v2 messages, database, API)   │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

                  ↕

        Legacy HIS Database

**Implementation Steps:**

**Analyze Legacy**: Understand legacy data model and APIs

**Map to FHIR**: Define mapping from legacy to FHIR resources

**Build Transformation**: Implement bidirectional transformation

**Implement FHIR API**: Provide FHIR REST API

**Handle Limitations**: Document what legacy can't support

**Example: Lab Results Integration**

**Legacy System**: Laboratory Information System sending HL7 v2 ORU messages

**HL7 v2 ORU (Observation Result) Message:**

MSH|^~\&|LIS|LAB|EHR|HOSPITAL|20240115120000||ORU^R01|MSG001|P|2.5

PID|1||123456789||Doe^John||19800101|M

OBR|1||LAB001|80061^Lipid Panel|

OBX|1|NM|2093-3^Cholesterol^LN||250|mg/dL|<200|H|||F

OBX|2|NM|2571-8^Triglycerides^LN||180|mg/dL|<150|H|||F

**FHIR Transformation:**

{

  "resourceType": "DiagnosticReport",

  "id": "LAB001",

  "status": "final",

  "code": {

    "coding": [{

      "system": "http://loinc.org",

      "code": "80061",

      "display": "Lipid Panel"

    }]

  },

  "subject": {

    "reference": "Patient/123456789"

  },

  "effectiveDateTime": "2024-01-15T12:00:00Z",

  "result": [

    {

      "reference": "Observation/OBX1"

    },

    {

      "reference": "Observation/OBX2"

    }

  ]

}

{

  "resourceType": "Observation",

  "id": "OBX1",

  "status": "final",

  "code": {

    "coding": [{

      "system": "http://loinc.org",

      "code": "2093-3",

      "display": "Cholesterol"

    }]

  },

  "subject": {

    "reference": "Patient/123456789"

  },

  "valueQuantity": {

    "value": 250,

    "unit": "mg/dL",

    "system": "http://unitsofmeasure.org",

    "code": "mg/dL"

  },

  "interpretation": [{

    "coding": [{

      "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",

      "code": "H",

      "display": "High"

    }]

  }],

  "referenceRange": [{

    "high": {

      "value": 200,

      "unit": "mg/dL"

    }

  }]

}

**FHIR Facade Benefits:**

**Non-Invasive**: Legacy system unchanged

**Standards-Based**: Modern FHIR API for new applications

**Incremental**: Can facade multiple systems independently

**Transition**: Provides time to plan legacy system replacement

**FHIR Facade Limitations:**

**Performance Overhead**: Real-time transformation adds latency

**Feature Gaps**: Can't provide what legacy doesn't have

**Maintenance**: Changes to legacy require facade updates

**Not True FHIR**: Limitations of legacy still constrain capabilities

**When to Use:**

Integrating with mature legacy systems that won't be replaced soon

Need FHIR API immediately without waiting for system replacement

Budget constraints prevent full system replacement

Estonia's upTIS transition approach

**Pattern 2: HL7 v2/v3 to FHIR Transformation**

**Dedicated transformation services for common message types:**

**Common HL7 v2 Messages in Healthcare:**

**ADT (Admit/Discharge/Transfer)**: Patient registration and movements

**ORU (Observation Result)**: Lab results, vital signs

**ORM (Order)**: Lab orders, medication orders

**DFT (Detailed Financial Transaction)**: Billing

**SIU (Scheduling)**: Appointments

**Transformation Service:**

HL7 v2 Message Queue (Mirth Connect, Rhapsody, etc.)

```
↓
```

Transformation Engine

```
├─ Parse HL7 v2 message
├─ Extract data elements
├─ Map to FHIR resources
├─ Validate FHIR conformance
└─ Handle errors and edge cases
↓
```

FHIR Server (POST resources)

**HL7 CDA Document Support**

**CDA (Clinical Document Architecture)**: Structured clinical documents (discharge summaries, progress notes)

**Integration Pattern:**

CDA Document (XML)

```
↓
```

Parse CDA structure

```
↓
```

Extract: Header (metadata) + Body (clinical content)

```
↓
```

Create FHIR Resources:

```
├─ DocumentReference (metadata, link to CDA)
├─ Composition (FHIR-native document structure)
└─ Referenced resources (Observations, Conditions, etc.)
↓
```

Store both:

```
├─ Original CDA (legal record, digital signature preserved)
└─ FHIR resources (analytics, decision support)
```

**Estonia Example**: Existing CDA documents (150M+) remain as legal records. upTIS extracts FHIR resources for modern interoperability while preserving document-based legal records.

**Custom Integration Adapters**

**When Standard Transformations Insufficient:**

**File-Based Integration:**

Legacy systems exporting CSV, XML, proprietary formats

Scheduled batch processing (nightly, weekly)

ETL (Extract, Transform, Load) pipelines

**Example: Pharmacy Dispensing Data Integration**

Pharmacy Systems (multiple vendors)

```
↓ Export nightly CSV files
```

File Processor Service

```
├─ Validate file format
├─ Parse CSV rows
├─ Map to FHIR MedicationDispense resources
├─ Cross-reference with MedicationRequest (prescription)
├─ Handle errors (unmatched prescriptions, invalid data)
└─ Quality reporting (% successful, data issues)
↓
```

POST to FHIR Server

**Database-Level Integration:**

Direct database queries (for read-only access)

Change Data Capture (CDC) for real-time updates

Views or materialized views exposing data in standard format

**Warning**: Database-level integration bypasses application logic and security. Use only when:

System has no API or integration capabilities

Read-only access sufficient

Performance critical

Vendor approval obtained

**API Integration (REST, SOAP):**

Custom REST or SOAP APIs from vendors

Wrapper services translating to FHIR

Rate limiting and error handling

**API Management**

**Purpose**: Provide unified, secure, monitored API access to health data

**API Gateway Functions:**

**1. Authentication and Authorization:**

API Request with Bearer Token

```
↓
```

API Gateway: Validate token (OAuth 2.0 / OIDC)

```
↓
```

Extract user identity and roles

```
↓
```

Check authorization (user allowed to access resource?)

```
↓ If authorized
```

Forward to backend service

**2. Rate Limiting and Throttling:**

Track requests per user / per API key

```
↓
```

If exceeds rate limit (e.g., 1000 requests/hour):

    Return HTTP 429 (Too Many Requests)

    Include Retry-After header

Else:

    Forward request

**Purpose**: Prevent abuse, ensure fair resource allocation, protect backend services

**3. API Versioning Strategy:**

**Challenge**: APIs evolve but clients need stability

**Versioning Approaches:**

**Option 1: URL Versioning (Explicit)**

GET /api/v1/Patient/123

GET /api/v2/Patient/123

Pros: Clear, easy to route

Cons: URL changes when version changes

**Option 2: Header Versioning**

GET /api/Patient/123

Header: Accept: application/fhir+json; fhirVersion=4.0

Pros: Clean URLs

Cons: Harder to test, less visible

**Option 3: Content Negotiation**

GET /api/Patient/123

Header: Accept: application/fhir+json

Server returns:

Content-Type: application/fhir+json; fhirVersion=4.0

Pros: Client and server negotiate

Cons: Complexity

**Recommendation**: URL versioning for major versions, content negotiation for minor/patch

**Versioning Policy:**

```
Major Version (v1 → v2): Breaking changes (remove fields, change semantics)
Minor Version (v1.0 → v1.1): Additive changes (new fields, new endpoints)
Patch Version (v1.0.0 → v1.0.1): Bug fixes only
```

**Deprecation Process:**

Announce deprecation with 12-month notice

Mark deprecated endpoints in API documentation

Include deprecation warnings in API responses

Provide migration guide to new version

Monitor usage of deprecated endpoints

Remove deprecated endpoints after notice period

**4. Developer Portal:**

**Purpose**: Enable external developers to integrate with health platform

**Portal Contents:**

**API Documentation**: Interactive API reference (Swagger/OpenAPI)

**Getting Started Guides**: Tutorials and code samples

**Authentication Setup**: How to obtain API keys / OAuth tokens

**Rate Limits**: Published limits and request information

**Sandbox Environment**: Test APIs without affecting production data

**Support Forums**: Community and official support

**Change Log**: API changes and versioning

**Status Dashboard**: API uptime and performance

**Security for Developer Portal:**

Separate API keys for development vs. production

Sandbox with synthetic data only (no real patient data)

Approval process for production access

Monitoring and audit of API usage

Automated security scanning of API requests

**Example Developer Workflow:**

1. Developer registers on portal

2. Reviews API documentation

3. Obtains sandbox API key

4. Tests integration in sandbox

5. Applies for production access

6. Completes security review

7. Obtains production API key

8. Deploys integration

9. Monitors usage via developer portal dashboard

**3.1.4 Service Layer**

**Purpose**: Implement specific healthcare business capabilities as independently deployable services

**Microservices Architecture Benefits:**

**Independent Deployment**: Update one service without affecting others

**Technology Flexibility**: Different services can use different tech stacks

**Team Autonomy**: Different teams own different services

**Scalability**: Scale services independently based on demand

**Resilience**: Failure of one service doesn't bring down entire system

**Microservices Challenges:**

**Distributed Complexity**: More complex than monolith (network calls, data consistency)

**Monitoring**: Need comprehensive logging and tracing across services

**Deployment**: Requires container orchestration (Kubernetes, etc.)

**Testing**: Integration testing more complex

**Core Health Services**

**1. EHR Service (Document Repository)**

**Responsibility**: Store and retrieve electronic health records

**Estonia Pattern (Document-Based):**

Service: EHR Document Repository

Storage: 150M+ HL7 CDA R2 XML documents

Operations:

  - storeDocument(patient, document_type, cda_xml, digital_signature)

  - getDocuments(patient, date_range, document_type)

  - searchDocuments(query_parameters)

Access: Via X-Road, authenticated healthcare professionals only

**Progressa Pattern (FHIR-Based):**

Service: Patient Health Journey Management

Storage: FHIR resources (Patient, Encounter, Condition, etc.)

Operations:

  - Create/Update Patient

  - Manage Episodes of Care

  - Link/Unlink Patient Records

  - Track Health Improvement Goals

API: FHIR RESTful API

**2. ePrescription Service**

**Responsibility**: Electronic prescribing and dispensing workflow

**Architecture:**

```
┌────────────────────────────────────────┐
│       ePrescription Service            │
├────────────────────────────────────────┤
│ Resources Managed:                     │
│  - MedicationRequest (prescriptions)   │
│  - Medication (drug catalog)           │
│  - MedicationDispense (dispensing)     │
│  - MedicationStatement (patient-reported)│
├────────────────────────────────────────┤
│ Business Logic:                        │
│  - Prescribing authorization checks    │
│  - Drug-drug interaction checking      │
│  - Allergy checking                    │
│  - Formulary checking                  │
│  - Prior authorization workflows       │
│  - Refill management                   │
│  - Controlled substance monitoring     │
├────────────────────────────────────────┤
│ Integrations:                          │
│  - Drug database (interactions, etc.)  │
│  - Pharmacy systems                    │
│  - Health insurance (formulary)        │
│  - Patient allergy registry            │
└────────────────────────────────────────┘
```

**Key Workflows:**

**Prescribing Workflow:**

1. Physician searches drug database

2. Selects medication, dose, frequency, duration

3. System checks:

```
├─ Physician has prescribing authority
├─ Drug-drug interactions (with current medications)
├─ Patient allergies
├─ Age/weight appropriate dose
├─ Pregnancy contraindications
└─ Insurance formulary (preferred alternatives?)
```

4. Physician reviews alerts and warnings

5. Physician approves prescription (digital signature)

6. MedicationRequest created and stored

7. Patient and pharmacy notified

**Dispensing Workflow:**

1. Patient arrives at pharmacy

2. Pharmacist queries active prescriptions for patient

3. Pharmacist selects prescription to dispense

4. System verifies:

```
├─ Prescription valid and not expired
├─ Refills remaining
├─ No therapeutic duplications
└─ Patient insurance coverage
```

5. Pharmacist counsels patient

6. Pharmacist records dispensing (MedicationDispense)

7. Prescription marked as filled

8. Patient record updated

9. Insurance claim submitted

**Estonia Example**: Prescription Centre since January 2010, 100% electronic prescriptions, integrated with all pharmacies via X-Road.

**Progressa Implementation**: Prescription service as core DHP component with ePrescription and medication management workflows.

**3. eReferral Service**

**Responsibility**: Electronic referral and care coordination

**Architecture:**

```
┌────────────────────────────────────────┐
│       eReferral Service                │
├────────────────────────────────────────┤
│ Resources Managed:                     │
│  - ServiceRequest (referral request)   │
│  - Task (referral workflow tracking)   │
│  - CareTeam (care coordination)        │
│  - CarePlan (ongoing care management)  │
├────────────────────────────────────────┤
│ Business Logic:                        │
│  - Referral creation and routing       │
│  - Provider matching and selection     │
│  - Appointment coordination            │
│  - Status tracking (pending/accepted/  │
│    completed/rejected)                 │
│  - Communication between providers     │
│  - Document sharing                    │
│  - Transport coordination              │
├────────────────────────────────────────┤
│ Integrations:                          │
│  - Provider directory (find specialists)│
│  - Appointment scheduling              │
│  - EHR (clinical context)              │
│  - Insurance (authorization)           │
│  - Transport services                  │
└────────────────────────────────────────┘
```

**Referral Workflow:**

1. Primary care physician identifies need for specialist

2. Physician creates referral (ServiceRequest):

```
├─ Clinical indication / reason
├─ Urgency (routine, urgent, emergency)
├─ Preferred specialist (if known)
├─ Relevant clinical documents
└─ Insurance authorization
```

3. System routes to appropriate specialist or facility

4. Specialist receives notification

5. Specialist reviews referral and clinical context

6. Specialist accepts or rejects (with reason)

7. If accepted:

```
├─ Appointment scheduled
├─ Patient notified
└─ Referring physician notified
```

8. Specialist provides care

9. Specialist sends consultation note back to referring physician

10. Referral marked complete

**Benefits:**

**Reduced Wait Times**: Match patients to appropriate providers efficiently

**Better Coordination**: Shared clinical context reduces duplicate testing

**Tracking**: Visibility into referral status for all parties

**Quality**: Measure referral appropriateness and outcomes

**4. Laboratory Services Integration**

**Responsibility**: Electronic lab ordering and results delivery

**Architecture:**

```
┌────────────────────────────────────────┐
│     Laboratory Service                 │
├────────────────────────────────────────┤
│ Resources Managed:                     │
│  - ServiceRequest (lab orders)         │
│  - Specimen (samples)                  │
│  - Observation (individual results)    │
│  - DiagnosticReport (result summary)   │
├────────────────────────────────────────┤
│ Business Logic:                        │
│  - Order validation and routing        │
│  - Specimen tracking                   │
│  - Result entry and validation         │
│  - Critical result notification        │
│  - Quality control                     │
│  - Reporting and cumulative results    │
├────────────────────────────────────────┤
│ Integrations:                          │
│  - Laboratory Information Systems (LIS)│
│  - Specimen collection (phlebotomy)    │
│  - Test catalog and compendium         │
│  - Provider notification               │
│  - Patient portal (results viewing)    │
└────────────────────────────────────────┘
```

**Lab Ordering Workflow:**

1. Physician orders lab tests

2. System validates:

```
├─ Appropriate order (indication)
├─ Insurance coverage
├─ Recent duplicate checking
└─ Patient preparation (fasting, etc.)
```

3. Order routed to appropriate laboratory

4. Laboratory schedules specimen collection

5. Patient notified (where/when to get blood drawn)

6. Specimen collected with correct labels/tubes

7. Specimen transported to lab

8. Lab performs testing

9. Results entered (manually or via automated analyzer)

10. Results reviewed and approved by pathologist

11. Results transmitted to ordering physician

12. Critical results: immediate notification (phone + system alert)

13. Results available in EHR and patient portal

**LOINC Standardization:**

All tests coded with LOINC

Enables semantic interoperability

Facilitates cumulative results (trending over time)

Supports clinical decision support

**Estonia Example**: eLab service integrated since implementation, laboratory results flow into EHR via X-Road.

**5. Medical Imaging (PACS Integration)**

**Responsibility**: Store, manage, and provide access to medical images

**PACS (Picture Archiving and Communication System)**:

Central repository for medical images

DICOM standard for storage and transmission

High-performance image servers

Workstations for radiologist interpretation

**Integration Architecture:**

Modality (CT, MRI, X-Ray, Ultrasound)

```
↓ DICOM C-STORE
```

PACS (Image Storage)

```
↓
┌────────────────────────────────────────┐
│    Medical Imaging Service             │
├────────────────────────────────────────┤
│ FHIR Resources:                        │
│  - ImagingStudy (study metadata)       │
│  - DiagnosticReport (radiology report) │
│  - ServiceRequest (imaging order)      │
├────────────────────────────────────────┤
│ DICOM Services:                        │
│  - Query/Retrieve (C-FIND, C-MOVE)     │
│  - DICOMweb (RESTful access)           │
│  - WADO (Web Access to DICOM Objects)  │
├────────────────────────────────────────┤
│ Integrations:                          │
│  - PACS (image storage and retrieval)  │
│  - RIS (Radiology Information System)  │
│  - EHR (orders, reports, metadata)     │
│  - Image viewers (web and workstation) │
└────────────────────────────────────────┘
```

**Imaging Workflow:**

1. Physician orders imaging study

2. Order routed to radiology/imaging center

3. Patient scheduled for imaging

4. Patient arrives, imaging performed

5. Images stored in PACS (DICOM)

6. ImagingStudy resource created in FHIR (metadata)

7. Radiologist notified of study to read

8. Radiologist opens images in workstation

9. Radiologist interprets and dictates report

10. Report transcribed/approved

11. DiagnosticReport created in FHIR

12. Ordering physician notified

13. Images and report available in EHR

14. Patient can view report (and images if capable) in portal

**Estonia Example**: Picture Archive since 2005, Medical Image Bank for sharing across facilities.

**Progressa Implementation**: PACS project as separate subproject with integration into DHP via DICOM and FHIR standards.

**6. Appointment Booking**

**Responsibility**: Schedule and manage healthcare appointments

**Architecture:**

```
┌────────────────────────────────────────┐
│    Scheduling Service                  │
├────────────────────────────────────────┤
│ Resources Managed:                     │
│  - Schedule (provider availability)    │
│  - Slot (bookable time slots)          │
│  - Appointment (booked appointments)   │
│  - AppointmentResponse (accept/decline)│
├────────────────────────────────────────┤
│ Business Logic:                        │
│  - Availability management             │
│  - Booking and cancellation            │
│  - Waitlist management                 │
│  - Reminders and notifications         │
│  - No-show tracking                    │
│  - Overbooking strategies              │
├────────────────────────────────────────┤
│ Integrations:                          │
│  - Provider directory                  │
│  - Patient portal                      │
│  - EHR (pre-visit documentation)       │
│  - SMS/email notifications             │
│  - Transport coordination              │
└────────────────────────────────────────┘
```

**Patient Self-Scheduling:**

1. Patient logs into portal

2. Searches for providers:

```
├─ By specialty
├─ By location
├─ By availability
└─ By insurance acceptance
```

3. Views provider profiles and availability

4. Selects date/time from available slots

5. Confirms appointment

6. Receives confirmation (email, SMS)

7. Receives reminder 24 hours before appointment

8. Appointment appears in patient's schedule

9. Provider receives notification of booking

**Estonia Example**: eBooking system since 2019, allowing patients to book appointments online with providers across Estonia.

**7. Billing and Reimbursement**

**Responsibility**: Healthcare billing, claims, and reimbursement processing

**Architecture:**

```
┌────────────────────────────────────────┐
│    Billing Service                     │
├────────────────────────────────────────┤
│ Resources Managed:                     │
│  - Claim (insurance claim)             │
│  - ClaimResponse (adjudication)        │
│  - Account (patient account)           │
│  - Coverage (insurance coverage)       │
│  - Invoice (billing statement)         │
├────────────────────────────────────────┤
│ Business Logic:                        │
│  - Charge capture from clinical events │
│  - Claims generation and submission    │
│  - Adjudication and payment processing │
│  - Patient balance billing             │
│  - Payment posting                     │
│  - Denial management and appeals       │
├────────────────────────────────────────┤
│ Integrations:                          │
│  - EHR (clinical documentation)        │
│  - Insurance companies (claims)        │
│  - Payment processors                  │
│  - Patient portal (view bills, pay)    │
└────────────────────────────────────────┘
```

**Billing Workflow:**

1. Clinical encounter occurs (visit, procedure, prescription)

2. Charges automatically captured from documentation

3. Diagnosis codes (ICD-11) and procedure codes assigned

4. Claim generated with:

```
├─ Patient demographics and insurance
├─ Provider information
├─ Date of service
├─ Diagnosis codes (ICD-11)
├─ Procedure codes
└─ Charges
```

5. Claim submitted to insurance electronically

6. Insurance adjudicates claim:

```
├─ Approves and pays portion
├─ Denies (with reason)
└─ Requests additional information
```

7. Payment posted to patient account

8. Patient billed for remaining balance

9. Patient pays via portal, mail, or in-person

**Estonia Example**: Health Insurance Register processes reimbursement claims, integrated with ENHIS for automated claims from clinical documentation.

**Patient Services**

**8. Patient Portal**

**Responsibility**: Patient self-service access to health information and services

**Core Features:**

**Health Record Access:**

View complete medical history

Lab results with trending charts

Imaging reports (and images if capable)

Medication list (active and historical)

Immunization history

Allergies and adverse reactions

Problem list (diagnoses)

Vital signs tracking

**Access Transparency:**

"Who viewed my data" logs

See all healthcare professionals who accessed records

Details: name, facility, date/time, purpose

Builds trust through transparency

**Appointment Management:**

Search for providers

Book appointments online

View upcoming appointments

Cancel or reschedule appointments

Receive reminders

**Prescription Management:**

View active prescriptions

Request refills

View prescription history

Set up auto-refill for chronic medications

Check medication interactions

**Messaging:**

Secure messaging with healthcare providers

Ask non-urgent questions

Request prescription refills

Schedule follow-ups

**Document Sharing:**

Download health records (PDF, FHIR)

Share records with other providers

Grant temporary access to caregivers

Upload documents (e.g., external lab results, advance directives)

**Consent Management:**

View current consent settings

Restrict access to sensitive data

Grant research consent

View and manage data sharing preferences

**Estonia Example**: Patient portal since 2009 (v1), enhanced v2 2013, major update v3 2023. 1.3M users (~97% of population), demonstrating high adoption when services provide value and transparency.

**9. Mobile Health Apps**

**Extending Portal to Mobile:**

Native iOS and Android apps

Push notifications for reminders, results, messages

Biometric authentication (fingerprint, Face ID)

Offline access to recent records

Camera integration (scan insurance card, upload documents)

Location services (find nearby providers, pharmacies)

**Personal Health Records (PHR):**

Patient-entered data supplements EHR

Symptom tracking

Medication adherence logging

Wearable device integration (steps, heart rate, sleep)

Nutrition and exercise tracking

Mental health and mood tracking

**Health Education:**

Condition-specific education materials

Medication information

Preventive care recommendations

Symptom checker (AI-assisted triage)

**Provider Services**

**10. Healthcare Provider Portal**

**Responsibility**: Clinician-facing tools for documentation and workflows

**Core Features:**

**Patient Search and Access:**

Search patients by name, ID, birth date

View patient demographics

Access complete patient record

View recent visits and results

Track panel of assigned patients

**Clinical Documentation:**

Progress notes (SOAP format)

History and physical exams

Procedure documentation

Operative notes

Discharge summaries

Templates for common scenarios

Voice-to-text dictation

Copy-forward from previous notes (with caution)

**CPOE (Computerized Provider Order Entry):**

Medication orders (ePrescription)

Laboratory orders

Imaging orders

Procedure orders

Referrals

Order sets (pre-defined groups for common conditions)

**Results Review:**

Lab results with abnormal flagging

Imaging reports with images

Pathology reports

Cumulative results (trending over time)

Comparative displays

**Clinical Decision Support:**

Drug-drug interaction alerts

Allergy alerts

Duplicate order checking

Age/weight-based dose checking

Evidence-based guideline recommendations

Diagnostic support

Preventive care reminders

**Care Team Communication:**

Secure messaging between providers

Care team management

Handoff communications (shift changes)

Referral coordination

**Documentation Tools:**

Problem list management

Medication reconciliation

Allergy and adverse reaction documentation

Immunization recording

Growth charts and vital signs

Procedure notes and billing

**Estonia Example**: Doctors portal since 2013, comprehensive provider access to ENHIS, ePrescription, and coordination tools.

**Administrative Services**

**11. Statistics and Reporting**

**Responsibility**: Aggregated reporting for healthcare administration and quality

**Report Categories:**

**Operational Reports:**

Patient volumes (visits, admissions, procedures)

Provider productivity (patients seen, procedures performed)

Resource utilization (beds, OR time, equipment)

Wait times and access metrics

No-show rates

Length of stay

**Clinical Quality Reports:**

HEDIS measures (US) or equivalent

Process measures (e.g., % diabetics with annual eye exam)

Outcome measures (e.g., HbA1c control rates)

Patient safety indicators (medication errors, falls, infections)

Preventive care rates (cancer screening, immunizations)

Chronic disease management metrics

**Financial Reports:**

Revenue by service line

Cost per encounter

Collection rates

Payer mix

Claim denial rates

Profitability analysis

**Public Health Reports:**

Notifiable disease reporting

Immunization coverage rates

Disease surveillance

Health status indicators

Social determinants of health

**Estonia Example**: Statistics portal since 2013, providing aggregated health data for planning and policy.

**12. Business Intelligence**

**Responsibility**: Advanced analytics and data visualization for decision-makers

**BI Architecture:**

Clinical Data Warehouse (see Data Layer)

```
↓ OLAP cubes, star schema
```

Business Intelligence Platform

```
├─ Data modeling and ETL
├─ Reporting engine
├─ Data visualization
├─ Dashboards
├─ Ad-hoc query tools
└─ Predictive analytics
↓
```

User Roles:

```
├─ Executives (strategic dashboards)
├─ Department managers (operational dashboards)
├─ Clinicians (quality dashboards)
├─ Public health officers (surveillance dashboards)
└─ Researchers (cohort identification, analysis)
```

**Dashboard Examples:**

**Executive Dashboard:**

Key performance indicators (KPIs)

Patient satisfaction trends

Financial performance

Quality metric summary

Capacity utilization

Comparative benchmarks

**Clinical Quality Dashboard:**

Diabetes quality measures

Hypertension control rates

Medication adherence

Readmission rates

Patient outcomes by provider/facility

Alerts for patients overdue for care

**Population Health Dashboard:**

Risk stratification (high/medium/low risk patients)

Care gaps (patients overdue for preventive services)

Chronic disease prevalence

Social determinants of health

Geographic health disparities

Intervention impact tracking

**Progressa Implementation**: Dedicated Business Intelligence subproject with BI Core (data warehouse, analytics platform) and BI Reports (dashboards for multiple stakeholder types).

**Public Health Services**

**13. Disease Surveillance and Reporting**

**Responsibility**: Track and report diseases for public health monitoring and response

**Capabilities:**

Notifiable disease reporting (automated from EHR diagnoses)

Syndromic surveillance (emergency department chief complaints)

Laboratory-based surveillance (pathogens identified)

Outbreak detection (statistical algorithms for anomalies)

Case investigation support (contact tracing)

Immunization registry queries

**Estonia Example**: Communicable Diseases Information System integrated with ENHIS, enabling real-time disease surveillance and COVID-19 pandemic response.

**14. Screening Programs Management**

**Responsibility**: Coordinate population-based screening programs (cancer, maternal/child health, etc.)

**Features:**

Eligible population identification (from registries)

Invitation generation and tracking

Appointment scheduling integration

Results tracking and follow-up

Recall for positive results requiring intervention

Program evaluation and reporting

**Estonia Example**: Cancer screening registry operational, inviting eligible citizens for cervical, breast, and colorectal cancer screening.

**15. Vaccination Registry and Management**

**Responsibility**: Track immunizations, manage vaccination campaigns

**Capabilities:**

Lifetime immunization record

Vaccine inventory management

Vaccination event recording

Adverse event reporting

Coverage rate calculation

Forecasting (which vaccines due)

Recall for overdue vaccinations

Mass vaccination campaign management (e.g., COVID-19)

**Integration Points:**

EHR (clinician documentation of vaccines)

Patient portal (view immunization record)

Schools (school immunization requirements)

Public health (coverage reporting)

**Cross-Border Services**

**16. Patient Summary Exchange (IPS)**

**International Patient Summary (IPS)**: Standardized FHIR-based summary for cross-border care

**IPS Contents (Minimum Data Set):**

Patient demographics

Medication summary (current medications)

Allergy and intolerance summary

Problem list (active conditions)

Immunization summary

Past procedures

Medical devices / implants

Vital signs (recent)

**Cross-Border Exchange Workflow:**

Patient travels to foreign country

```
↓
```

Patient needs medical care

```
↓
```

Foreign healthcare provider requests patient summary

```
↓
```

Request routed through National Contact Points

```
↓
```

Home country: Patient identified, consent checked

```
↓
```

Home country: IPS generated from EHR

```
↓
```

IPS transmitted securely to foreign provider

```
↓
```

Foreign provider views IPS in local system

```
↓
```

Care provided with complete context

```
↓
```

Care documentation potentially sent back to home country (optional)

**Estonia Example**: Cross-border Patient Summary operational with EU countries via eHDSI (eHealth Digital Service Infrastructure), pilot with epSOS evolved into production service.

**17. ePrescription Exchange**

**Challenge**: Patient prescribed medication in one country, needs to fill prescription in another

**Cross-Border ePrescription:**

Patient prescribed in Home Country

```
↓
```

Prescription stored in Home Country ePrescription system

```
↓
```

Patient travels to Foreign Country

```
↓
```

Patient goes to Foreign Country pharmacy

```
↓
```

Pharmacist queries Home Country for active prescriptions

```
↓
```

Query routed through National Contact Points

```
↓
```

Home Country returns ePrescription data

```
↓
```

Foreign pharmacist validates prescription

```
↓
```

Foreign pharmacist dispenses medication

```
↓
```

Dispensing recorded in both countries' systems

**Estonia Example**: Cross-border ePrescription exchange operational with EU countries, allowing Estonian citizens to fill prescriptions anywhere in EU and vice versa.

**18. National Contact Point (NCP)**

**Purpose**: Single point of contact for international health data exchange

**Responsibilities:**

Receive cross-border data requests

Authenticate requesting country / provider

Route requests to appropriate domestic systems

Transform data to international formats (IPS)

Enforce consent and authorization rules

Audit all cross-border exchanges

Handle errors and exceptions

**Technical Requirements:**

**Authentication**: eIDAS electronic identification

**Encryption**: TLS 1.3 for transmission

**Standards**: IHE profiles (XCA, XDS, XDR) and/or FHIR

**Logging**: Comprehensive audit trail

**Availability**: 24/7 operation

**Estonia Implementation**: eHealth cross-border contact point operational since 2020, connected via TESTA network to other EU country NCPs, participating in eHDSI.

**3.1.5 User Interface Layer**

**Purpose**: Present health data and services to end users in intuitive, accessible interfaces

**Design Principles for User Interfaces**

**1. User-Centered Design:**

Involve actual users (patients, clinicians, administrators) in design process

Conduct usability testing with real workflows

Iterate based on feedback

Prioritize common tasks (80/20 rule: optimize for most frequent 20% of tasks)

**2. Simplicity:**

Minimize clicks to accomplish tasks

Clear navigation and information architecture

Avoid jargon (or explain when necessary)

Progressive disclosure (show simple options first, advanced features when needed)

**3. Consistency:**

Consistent visual design (colors, typography, spacing)

Consistent interaction patterns (buttons, forms, navigation)

Follow platform conventions (iOS Human Interface Guidelines, Material Design)

Reusable component library

**4. Feedback:**

Loading indicators for slow operations

Success/error messages after actions

Validation messages for form errors

Progress indicators for multi-step workflows

**5. Error Prevention and Recovery:**

Validation before submission (prevent errors)

Confirmation dialogs for destructive actions

Undo capabilities where feasible

Clear error messages with recovery instructions

**Patient-Facing Interfaces**

**Web Portal:**

**Technology Stack:**

**Frontend**: React, Angular, or Vue.js (modern JavaScript framework)

**Responsive Design**: Mobile-first, adapts to screen sizes

**Accessibility**: WCAG 2.1 AA compliance minimum

**Progressive Web App (PWA)**: Offline capabilities, installable

**Key Interface Patterns:**

**Dashboard (Home Page):**

```
┌─────────────────────────────────────────┐
│ Welcome, John Doe                   [⚙️] │
├─────────────────────────────────────────┤
│                                         │
│ 📅 Upcoming Appointments                │
│ ├─ Dr. Smith - Cardiology - Oct 20     │
│ └─ Annual Physical - Dr. Jones - Nov 5  │
│                                         │
│ 💊 Active Medications (3)               │
│ ├─ Lisinopril 10mg - Daily            │
│ ├─ Metformin 500mg - Twice daily      │
│ └─ Atorvastatin 20mg - Evening        │
│                                         │
│ 🧪 Recent Test Results (2 new)          │
│ ├─ Lipid Panel - Oct 1 - View         │
│ └─ HbA1c - Sep 15 - View              │
│                                         │
│ 💬 Messages (1 unread)                  │
│ └─ Response from Dr. Smith's office    │
│                                         │
│ 📋 Quick Actions                        │
│ [Request Refill] [Book Appointment]    │
│ [Send Message] [Download Records]      │
└─────────────────────────────────────────┘
```

**Lab Results Display:**

Lipid Panel - October 1, 2024

```
┌─────────────────────────────────────────┐
│ Total Cholesterol: 250 mg/dL ⚠️ HIGH   │
│ Normal Range: <200 mg/dL               │
│ Trend: [Chart showing last 5 results]  │
│                                         │
│ What this means:                        │
│ Your cholesterol is higher than         │
│ recommended. Talk to your doctor about  │
│ diet changes and medication options.    │
│                                         │
│ [View Full Report] [Message Doctor]    │
└─────────────────────────────────────────┘
```

**Appointment Booking Flow:**

Step 1: Select Reason

```
┌─────────────────────────────────────────┐
│ What do you need?                       │
│ ○ Annual Physical                       │
│ ○ Follow-up Visit                       │
│ ○ New Problem                           │
│ ○ Prescription Refill (no visit needed)│
└─────────────────────────────────────────┘
```

Step 2: Choose Provider

```
┌─────────────────────────────────────────┐
│ Your Providers:                         │
│ [●] Dr. Jane Smith - Primary Care       │
│ [ ] Dr. Robert Johnson - Cardiology     │
│ [ ] Search for New Provider             │
└─────────────────────────────────────────┘
```

Step 3: Select Date/Time

```
┌─────────────────────────────────────────┐
│ October 2024                            │
│ Mon Tue Wed Thu Fri Sat Sun             │
│                     1   2   3           │
│  4   5   6   7   8   9  10              │
│ 11  12  13  14 [15] 16  17              │
│                                         │
│ Available Times for Oct 15:             │
│ ○ 9:00 AM   ○ 10:30 AM   ○ 2:00 PM     │
└─────────────────────────────────────────┘
```

Step 4: Confirm

```
┌─────────────────────────────────────────┐
│ Your Appointment:                       │
│ Dr. Jane Smith - Annual Physical        │
│ Tuesday, October 15, 2024 at 10:30 AM  │
│ 123 Medical Plaza, Suite 200            │
│                                         │
│ [Back] [Confirm Appointment]            │
└─────────────────────────────────────────┘
```

**Mobile Apps:**

**Native vs. Hybrid:**

**Native**: Separate iOS (Swift) and Android (Kotlin) apps - best performance, native UX

**Hybrid**: React Native or Flutter - single codebase, faster development

**PWA**: Web app with offline capabilities - no app store needed

**Recommendation**: PWA for initial launch (fastest, widest reach), native apps for advanced features requiring deep OS integration

**Mobile-Specific Features:**

**Biometric Authentication**: Touch ID, Face ID, fingerprint

**Push Notifications**: Appointment reminders, test results, messages

**Camera**: Scan insurance cards, upload documents, QR codes

**Offline Access**: Cache recent records for offline viewing

**Location Services**: Find nearby providers, pharmacies, urgent care

**Health Kit Integration** (iOS) / **Google Fit** (Android): Sync wearable data

**Healthcare Provider Interfaces**

**Clinical Workstation:**

**Display Priorities:**

**Large Screens**: Providers typically have multiple monitors (24"+ each)

**Information Density**: Pack relevant information, minimize scrolling

**Keyboard Shortcuts**: Power users appreciate keyboard navigation

**Performance**: Sub-second response for common actions

**EHR Screen Layout Example:**

```
┌────────────────────────────────────────────────────────────┐
│ [Logo] Electronic Health Record      John Doe, M 45y  [≡]  │
├───────────────┬────────────────────────────────────────────┤
│ MENU          │ ┌──────────────────────────────────────┐   │
│               │ │ Visit Note - Dr. Jane Smith          │   │
│ ├─ Patients   │ │ October 15, 2024 - Annual Physical   │   │
│ ├─ Schedule   │ └──────────────────────────────────────┘   │
│ ├─ Messages   │                                            │
│ ├─ Inbox      │ Chief Complaint: Annual physical exam     │
│ └─ Reports    │                                            │
│               │ HPI: [Free text dictation or typing]      │
│ PATIENT       │                                            │
│               │ ROS: ☑ Constitutional ☑ HEENT ☑ Cardiac  │
│ ├─ Summary    │      ☑ Respiratory ...                    │
│ ├─ Visits     │                                            │
│ ├─ Problems   │ Physical Exam:                            │
│ ├─ Medications│   Vitals: BP 128/82, HR 72, Wt 185 lbs   │
│ ├─ Allergies  │   General: Well-appearing, no distress    │
│ ├─ Labs       │   ... [structured exam documentation]     │
│ ├─ Imaging    │                                            │
│ └─ Documents  │ Assessment/Plan:                           │
│               │ 1. Hypertension (I10) - Cont Lisinopril   │
│ QUICK ACCESS  │ 2. Hyperlipidemia (E78.5) - ↑ Statin     │
│               │ 3. Health maintenance - Order Labs        │
│ Recent Labs:  │                                            │
│ ├─ HbA1c 5.8% │ Orders: [Lipid Panel] [Metabolic Panel]  │
│ └─ Lipid Panel│                                            │
│               │ [Save Draft] [Sign Note] [Print]          │
│ Current Meds: │                                            │
│ ├─ Lisinopril │                                            │
│ └─ Metformin  │                                            │
└───────────────┴────────────────────────────────────────────┘
```

**Clinical Decision Support Alerts:**

```
┌────────────────────────────────────────┐
│ ⚠️ Drug Interaction Alert               │
├────────────────────────────────────────┤
│ Interaction: Moderate                  │
│                                        │
│ Medication Ordered: Clarithromycin     │
│ Current Medication: Atorvastatin       │
│                                        │
│ Risk: Increased risk of muscle injury │
│ (rhabdomyolysis) due to increased     │
│ atorvastatin levels.                   │
│                                        │
│ Recommendation:                        │
│ • Consider alternative antibiotic      │
│ • If continued, monitor for muscle     │
│   pain and weakness                    │
│ • Check CPK if symptoms develop        │
│                                        │
│ [Cancel Order] [Override] [More Info] │
└────────────────────────────────────────┘
```

**CPOE (Medication Order):**

New Medication Order

Drug: [Lisinopril_____________] [Search]

Matching Results:

○ Lisinopril 5mg tablet

```
● Lisinopril 10mg tablet  ← Selected
```

○ Lisinopril 20mg tablet

Dose: [10] mg

Route: [Oral ▾]

Frequency: [Once daily ▾]

Duration: [Ongoing (chronic medication)]

Special Instructions:

[Take in morning with food_______________]

Indication: [Hypertension__________________]

Quantity: [90] tablets

Refills: [11] (1 year supply)

☑ Substitute generic if available

☐ Patient counseling required

[Cancel] [Order Medication]

**Administrative Dashboards**

**Key Characteristics:**

**Executive-Level Metrics**: High-level KPIs

**Drill-Down Capabilities**: Click to see details

**Real-Time or Near-Real-Time**: Updated frequently

**Visualizations**: Charts, graphs, heat maps

**Comparative Views**: Benchmarks, trends over time

**Sample Executive Dashboard:**

Healthcare System Dashboard - October 2024

```
┌─────────────────────────────────────────────────────────┐
│ Key Performance Indicators                              │
├─────────┬─────────┬─────────┬─────────┬─────────┬──────┤
│ Patient │ Revenue │  Cost   │ Quality │  Staff  │ Beds │
│ Visits  │         │         │  Score  │  FTE    │ Used │
│         │         │         │         │         │      │
│ 45,234  │ $8.2M   │ $6.8M   │  87%    │  1,245  │ 82%  │
│ ↑ 5%    │ ↑ 3%    │ ↑ 2%    │ ↓ 2%    │ → 0%    │ ↑ 7% │
└─────────┴─────────┴─────────┴─────────┴─────────┴──────┘
```

```
┌──────────────────┐  ┌──────────────────────────────────┐
│ Patient          │  │ Revenue by Service Line          │
│ Satisfaction     │  │                                  │
│                  │  │ [Bar chart showing:]             │
│ 4.2 / 5.0 ⭐     │  │ Primary Care: $2.1M             │
│                  │  │ Surgery: $3.2M                   │
│ ↑ 0.1 from last  │  │ Emergency: $1.8M                │
│ quarter          │  │ Imaging: $0.7M                   │
│                  │  │ Laboratory: $0.4M                │
│ [View Comments]  │  │                                  │
└──────────────────┘  └──────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────┐
│ Quality Metrics                                        │
│ [Gauge charts for:]                                    │
│ • Readmission Rate: 12% (target <15%) ✓               │
│ • Medication Errors: 0.8 per 1000 (target <1.0) ✓     │
│ • Patient Falls: 2.3 per 1000 days (target <3.0) ✓    │
│ • C.Diff Rate: 4.2 per 10000 days (target <5.0) ✓     │
└────────────────────────────────────────────────────────┘
```

[Generate Report] [Export Data] [Configure Dashboard]

**Analytics and BI Tools**

**Self-Service BI:**

**Drag-and-Drop Report Builder**: Business users create own reports

**Pre-Built Report Templates**: Common reports ready to use

**Ad-Hoc Queries**: Flexible exploration of data

**Scheduled Reports**: Automatic generation and distribution

**Export Capabilities**: PDF, Excel, CSV

**Data Visualization:**

**Charts**: Line, bar, pie, area, scatter plots

**Maps**: Geographic heatmaps, choropleth maps

**Dashboards**: Multiple visualizations on single page

**Interactive**: Drill-down, filters, tooltips

**Popular BI Platforms:**

**Open Source**: Apache Superset, Metabase, Redash

**Commercial**: Tableau, Power BI, Qlik Sense, Looker

**Healthcare-Specific**: Health Catalyst, Arcadia Analytics

**Progressa Implementation**: Business Intelligence components using industry-standard BI platform (selection during implementation) with dashboards for multiple user types.

**Accessibility Considerations (WCAG Compliance)**

**WCAG 2.1 Level AA Requirements** (Minimum)

**1. Perceivable:**

**Alt Text**: All images have descriptive alt text

**Color Contrast**: 4.5:1 minimum for normal text, 3:1 for large text

**Not Color Alone**: Don't rely solely on color to convey information (use icons, text labels)

**Captions**: Video content has captions

**Transcripts**: Audio content has transcripts

**2. Operable:**

**Keyboard Navigation**: All functionality accessible via keyboard (no mouse required)

**Focus Indicators**: Clear visual indicator of keyboard focus

**No Keyboard Traps**: Users can navigate away from all elements

**Timing**: Sufficient time to read and complete tasks (or ability to extend time)

**Seizure Prevention**: No content flashes more than 3 times per second

**3. Understandable:**

**Page Language**: HTML lang attribute set correctly

**Predictable Navigation**: Consistent navigation across pages

**Input Assistance**: Error identification and suggestions for correction

**Labels**: Clear labels for all form inputs

**4. Robust:**

**Valid HTML**: Proper semantic markup

**Assistive Technology Compatibility**: Screen readers, voice control, etc.

**ARIA**: Appropriate ARIA labels for dynamic content

**Testing Tools:**

**Automated**: WAVE, axe DevTools, Lighthouse

**Manual**: Screen reader testing (JAWS, NVDA, VoiceOver)

**User Testing**: Test with users with disabilities

**Estonia Example**: Patient portal accessibility ensures all citizens can access their health records regardless of disabilities.

**Progressa Requirement**: WCAG compliance specified for all DHP applications.

**3.2 Architecture Patterns Library**

**Purpose**: Document proven architectural patterns with guidance on when to use each pattern

**3.2.1 Data Architecture Patterns**

**Pattern: Document-Based EHR**

**Context**: Existing clinical systems generate complete clinical documents (discharge summaries, progress notes, radiology reports)

**Problem**: Need to store and retrieve clinical documentation with legal validity and non-repudiation

**Solution**: Store complete CDA (Clinical Document Architecture) documents as XML with digital signatures

**Structure:**

Document Repository

```
├── Document Metadata Index
│   ├── Patient ID
│   ├── Document Type
│   ├── Author
│   ├── Date/Time
│   └── Document ID
└── Document Storage
├── CDA XML Content
└── Digital Signature
```

**When to Use:**

Clinical systems already producing CDA documents

Legal requirements for complete signed documents

Document-centric clinical workflows (discharge summaries, consultation notes)

Simpler implementation path for initial deployment

Transition strategy toward FHIR (add FHIR Facade later)

**Advantages:** ✅ Simple and proven (Estonia 150M+ documents) ✅ Legal non-repudiation via digital signatures ✅ Self-contained documents (all context included) ✅ Human-readable (CDA renders to HTML) ✅ Lower development complexity initially

**Disadvantages:** ❌ Difficult granular queries (can't easily query "all blood pressures") ❌ Analytics challenging (data locked in documents) ❌ Real-time decision support limited ❌ Data duplication across documents ❌ Future migration to FHIR will be needed (Estonia's upTIS experience)

**Implementation Guidance:**

**Document Storage Options:**

**File System**: Documents as files with metadata in database

**Database**: Documents as BLOBs (Binary Large Objects) in database

**Document Database**: MongoDB, CouchDB optimized for document storage

**Indexing Strategy:**

Metadata searchable (patient, type, date, author)

Full-text search on document content (optional, resource-intensive)

Fast retrieval by document ID

**Digital Signatures:**

XML Digital Signature standard

Sign entire document for non-repudiation

Verify signatures on retrieval

Timestamp for legal evidence

**Estonia Example:**

HL7 v3 extended messages

CDA R2 format

XML storage

Digital signatures mandatory

150+ million documents stored since 2008

**Migration Path to FHIR:**

Add FHIR Facade parsing CDA documents into FHIR resources

Dual storage: CDA for legal record, FHIR for analytics

Eventual transition to FHIR-native (Estonia upTIS project)

**Pattern: FHIR-Native EHR**

**Context**: Building new national EHR system or modernizing legacy system

**Problem**: Need granular data access for analytics, decision support, and interoperability while maintaining complete clinical context

**Solution**: Store atomic FHIR resources in database, compose into documents/views as needed

**Structure:**

FHIR Resource Database (Relational or NoSQL)

```
├── Patient resources
├── Practitioner resources
├── Encounter resources
├── Observation resources (vital signs, labs)
├── Condition resources (diagnoses)
├── MedicationRequest resources
├── Procedure resources
├── DiagnosticReport resources
└── ... (all FHIR resource types)
```

Each resource:

```
├── Unique ID (UUID)
├── Version history (audit trail)
├── References to related resources
├── Conformance to FHIR profiles
└── JSON or XML representation
```

**When to Use:**

Greenfield implementation starting from scratch (Progressa approach)

Advanced analytics and population health requirements

Real-time clinical decision support needed

Modern interoperability priority

Available FHIR expertise in team

Budget for more complex implementation

**Advantages:** ✅ Granular queries ("all HbA1c values for diabetic patients") ✅ Real-time analytics on structured data ✅ Fast clinical decision support (access specific data points) ✅ Native interoperability (FHIR resources ready for exchange) ✅ Flexible composition (create different views from same data) ✅ Future-proof (FHIR is active standard, ongoing development) ✅ No migration needed later

**Disadvantages:** ❌ More complex data model and queries ❌ Performance optimization needed for scale ❌ Steeper learning curve (FHIR expertise required) ❌ More complex transactions (multiple resources) ❌ Resource references must be maintained

**Implementation Guidance:**

**FHIR Server Options:**

**Open Source:**

**HAPI FHIR (Java)**: Most popular, feature-complete, active community

**IBM FHIR Server (Java)**: Enterprise-grade, highly performant

**Microsoft FHIR Server (.NET)**: Azure-optimized, good performance

**Google Cloud Healthcare API**: Managed FHIR service (cloud)

**Database Options:**

**PostgreSQL**: Relational, excellent JSON support, proven at scale

**MongoDB**: Document database, natural fit for FHIR resources

**Elasticsearch**: Search-optimized, great for FHIR search operations (supplemental)

**HAPI FHIR + PostgreSQL** is recommended combination: open source, proven, excellent community support.

**Storage Strategy:**

**Option A: Resources as JSON in Database**

CREATE TABLE fhir_resources (

  id VARCHAR(64) PRIMARY KEY,

  resource_type VARCHAR(64) NOT NULL,

  version_id INTEGER NOT NULL,

  resource_json JSONB NOT NULL,

  last_updated TIMESTAMP NOT NULL,

  deleted BOOLEAN DEFAULT FALSE,

  INDEX (resource_type, last_updated),

  INDEX ON (resource_json) USING GIN

);

**Option B: Hybrid (Metadata in Columns + Full Resource in JSON)**

CREATE TABLE observations (

  id VARCHAR(64) PRIMARY KEY,

  patient_id VARCHAR(64) NOT NULL,

  code VARCHAR(64) NOT NULL,  -- LOINC code

  value_quantity_value DECIMAL,

  value_quantity_unit VARCHAR(32),

  effective_date_time TIMESTAMP,

  status VARCHAR(32),

  resource_json JSONB NOT NULL,

  INDEX (patient_id, code, effective_date_time),

  FOREIGN KEY (patient_id) REFERENCES patients(id)

);

Hybrid approach provides:

Fast queries on indexed columns

Full FHIR resource available

Best of both worlds

**FHIR Search Implementation:**

**Common Search Parameters:**

GET /Patient?name=smith

GET /Observation?patient=123&code=2093-3&date=gt2024-01-01

GET /MedicationRequest?patient=123&status=active

GET /Condition?patient=123&clinical-status=active

**Search Performance Optimization:**

Index common search parameters

Pre-compute expensive queries

Use pagination for large result sets

Cache frequent queries

**Versioning:**

Every resource update creates new version

Previous versions retained for audit

Version history accessible via FHIR API

GET /Observation/123/_history

GET /Observation/123/_history/2  (specific version)

**Transaction Handling:**

**FHIR Transactions (Atomicity):**

POST /Bundle

{

  "resourceType": "Bundle",

  "type": "transaction",

  "entry": [

    {

      "request": { "method": "POST", "url": "Patient" },

      "resource": { ... patient resource ... }

    },

    {

      "request": { "method": "POST", "url": "Observation" },

      "resource": { ... observation resource referencing patient ... }

    }

  ]

}

Either all succeed or all fail (database transaction).

**Referential Integrity:**

FHIR resources reference each other by ID

Need to maintain referential integrity

Options: 

Database foreign keys (strict)

Application-level validation (flexible)

Hybrid (enforce critical references)

**Progressa Implementation:**

FHIR R4 as primary data model

PostgreSQL database

Microservices each managing specific resource types

HAPI FHIR or similar for FHIR server capabilities

FHIR Intermediary Server routing between services

**Migration from Legacy:**

Map legacy data model to FHIR resources

Build ETL pipeline to transform data

Validate transformed data against FHIR profiles

Iterative migration (resource type by resource type)

Dual operation period (legacy + FHIR)

Cutover when FHIR system fully validated

**Pattern: Hybrid (FHIR Facade on Legacy)**

**Context**: Existing legacy systems (HL7 v2/v3, proprietary) but need modern FHIR interoperability

**Problem**: Full system replacement too expensive or risky, but need FHIR capabilities now

**Solution**: Create FHIR API layer in front of legacy system, transforming data bidirectionally

**Structure:**

```
┌──────────────────────────────────────┐
│       FHIR API Layer                 │
│  GET /Patient/123 → FHIR JSON        │
│  POST /Observation → Creates in Legacy│
├──────────────────────────────────────┤
│    Transformation Engine              │
│  FHIR ↔ Legacy Format                │
├──────────────────────────────────────┤
│    Legacy System Adapter              │
│  Database queries, HL7 messages, APIs│
└──────────────────────────────────────┘
```

            ↕

    Legacy System

**When to Use:**

Mature legacy systems that won't be replaced soon (5+ year lifespan)

Need FHIR interoperability immediately

Budget constraints prevent full replacement

Risk mitigation (keep proven system running while adding modern capabilities)

Transition strategy (FHIR Facade now, full replacement later)

**Advantages:** ✅ Non-invasive to legacy system ✅ Provides modern FHIR API without replacement ✅ Reduces risk (legacy system unchanged) ✅ Incremental approach (facade multiple systems independently) ✅ Buys time to plan comprehensive modernization

**Disadvantages:** ❌ Performance overhead (real-time transformation) ❌ Feature gaps (can't provide what legacy doesn't have) ❌ Maintenance burden (changes in legacy require facade updates) ❌ Not "true FHIR" (limitations of legacy constrain facade) ❌ Duplicate logic (legacy + facade)

**Implementation Guidance:**

**Facade Architecture:**

**Components:**

**FHIR API Endpoints**: Standard FHIR REST API

**Transformation Engine**: Bidirectional FHIR ↔ Legacy

**Legacy Adapter**: Database queries, API calls, HL7 messages to legacy

**Caching Layer**: Cache frequent queries for performance

**Error Handling**: Deal with legacy limitations gracefully

**Transformation Mapping:**

```
Example: Legacy Lab Result → FHIR Observation
```

**Legacy Database Schema:**

lab_results (

  result_id PRIMARY KEY,

  patient_id,

  test_code,

  test_name,

  result_value,

  result_unit,

  reference_range,

  abnormal_flag,

  result_date

)

**FHIR Transformation:**

function transformLabResultToFHIR(legacyResult) {

  return {

    resourceType: "Observation",

    id: legacyResult.result_id,

    status: "final",

    category: [{

      coding: [{

        system: "http://terminology.hl7.org/CodeSystem/observation-category",

        code: "laboratory"

      }]

    }],

    code: {

      coding: [{

        system: "http://loinc.org",

        code: mapTestCodeToLOINC(legacyResult.test_code),

        display: legacyResult.test_name

      }]

    },

    subject: {

      reference: `Patient/${legacyResult.patient_id}`

    },

    effectiveDateTime: legacyResult.result_date,

    valueQuantity: {

      value: legacyResult.result_value,

      unit: legacyResult.result_unit,

      system: "http://unitsofmeasure.org",

      code: mapUnitToUCUM(legacyResult.result_unit)

    },

    interpretation: legacyResult.abnormal_flag ? [{

      coding: [{

        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",

        code: legacyResult.abnormal_flag, // H, L, etc.

      }]

    }] : undefined,

    referenceRange: legacyResult.reference_range ? [{

      text: legacyResult.reference_range

    }] : undefined

  };

}

**Terminology Mapping:**

```
Legacy codes → Standard terminologies (LOINC, SNOMED CT)
```

Mapping tables maintained

Fallback: text display when code mapping unavailable

**Performance Optimization:**

**Caching Strategy:**

FHIR Request

```
↓
```

Check Cache (Redis)

```
├─ Cache Hit → Return cached FHIR resource
└─ Cache Miss ↓
```

        Query Legacy System

```
↓
```

        Transform to FHIR

```
↓
```

        Store in Cache (TTL: 5 minutes for dynamic data, 1 hour for static)

```
↓
```

        Return FHIR resource

**Cache Invalidation:**

Time-to-live (TTL) for automatic expiration

Event-based invalidation when legacy data changes (if possible)

Manual cache clear operations

**Limitations Handling:**

**FHIR Features Legacy Can't Support:**

Document in API documentation

Return HTTP 501 Not Implemented or omit unsupported search parameters

Graceful degradation

**Example:**

GET /Observation?_revinclude=Provenance:target

Response:

{

  "resourceType": "OperationOutcome",

  "issue": [{

    "severity": "warning",

    "code": "not-supported",

    "details": {

      "text": "_revinclude not supported by legacy system. Returning Observations only."

    }

  }]

}

**Dual Storage (Document + FHIR):**

**Estonia upTIS Approach:**

Original CDA documents stored (legal record, digital signatures)

FHIR resources extracted and stored (analytics, decision support)

Reference between CDA document and FHIR resources

DocumentReference FHIR resource points to CDA

Observations, Conditions, etc. extracted from CDA

**Benefits:**

Preserve legal document record

Enable modern FHIR-based analytics

Smooth transition to FHIR-native future

**Migration Path:**

**Phase 1: FHIR Facade (Year 1-2)**

Build facade for high-priority resource types

Enable FHIR-based interoperability

Legacy system continues operation

**Phase 2: Dual Operation (Year 2-3)**

New applications use FHIR API

Legacy applications continue unchanged

Gradual migration of applications to FHIR

**Phase 3: FHIR Native (Year 3-5)**

New FHIR-native system built

Data migration from legacy

Cutover to FHIR system

Retire legacy system

**Phase 4: Facade Retirement (Year 5+)**

Direct FHIR system access

Remove facade layer

Full FHIR-native operation

**3.2.2 Integration Patterns**

Integration patterns define how systems communicate and exchange data within the e-health ecosystem. Selecting the right pattern depends on system capabilities, data volume, latency requirements, and interoperability standards support.

**Pattern 1: Service-to-Service Integration (Microservices)**

**Context**: Modern FHIR-native systems where services need real-time synchronous communication.

**Description**: Direct API calls between microservices using RESTful FHIR APIs.

**Architecture**:

```
Patient Portal → HTTPS/REST → FHIR Intermediary Server
↓ FHIR API
┌──────────────────┼──────────────────┐
↓                  ↓                  ↓
```

         ePrescription Service  Laboratory Service  Imaging Service

```
↓                  ↓                  ↓
```

              FHIR Server        FHIR Server        FHIR Server

**Key Characteristics**:

**Protocol**: HTTPS with TLS 1.3+

**Data Format**: HL7 FHIR JSON or XML

**Authentication**: OAuth 2.0 / OpenID Connect

**Authorization**: JWT tokens with role claims

**API Style**: RESTful (GET, POST, PUT, DELETE)

**Idempotency**: Critical for PUT/DELETE operations

**Retry Logic**: Exponential backoff for transient failures

**Implementation Example**:

# Service A calling Service B (FHIR API)

import requests

import jwt

# Authentication

token = jwt.encode(

    {"sub": "service-a", "role": "system", "exp": expiry},

    private_key,

    algorithm="RS256"

)

# FHIR API call

headers = {

    "Authorization": f"Bearer {token}",

    "Content-Type": "application/fhir+json",

    "Accept": "application/fhir+json"

}

# Create a MedicationRequest

medication_request = {

    "resourceType": "MedicationRequest",

    "status": "active",

    "intent": "order",

    "medicationCodeableConcept": {

        "coding": [{

            "system": "http://www.whocc.no/atc",

            "code": "N02BE01",

            "display": "Paracetamol"

        }]

    },

    "subject": {"reference": "Patient/12345"},

    "dosageInstruction": [...]

}

response = requests.post(

    "https://prescription-service.dhp.progressa.example/fhir/MedicationRequest",

    headers=headers,

    json=medication_request,

    timeout=30

)

if response.status_code == 201:

    created_resource = response.json()

    location = response.headers['Location']

else:

    # Handle error

    error_details = response.json()

**When to Use**:

✅ FHIR-native systems (Progressa DHP model)

✅ Real-time data exchange needed

✅ Modern microservices architecture

✅ Low-latency requirements (<500ms)

✅ Strong consistency requirements

**When NOT to Use**:

❌ Legacy systems without REST API support

❌ High-volume batch processing (use async instead)

❌ Network unreliability (use message queuing)

❌ Complex orchestration across many services

**Estonia Example**: upTIS microservices communicate via REST APIs with the FHIR Intermediary Server for routing.

**Progressa Example**: 19 core DHP services communicate via FHIR APIs through the FHIR Intermediary Server.

**Pattern 2: System-to-System Integration (HIS, LIS, PACS)**

**Context**: Integrating external healthcare information systems that may use different standards.

**Description**: Integration between the national e-health platform and facility-level systems (Hospital Information Systems, Laboratory Information Systems, Picture Archiving and Communication Systems).

**Sub-Pattern 2A: HL7 v2 Message Integration (Legacy LIS/HIS)**

**Architecture**:

Legacy LIS/HIS

```
↓ HL7 v2 Messages (MLLP protocol)
```

Integration Engine / Interface Engine

```
↓ Transform HL7 v2 → FHIR
```

FHIR Facade / Adapter Service

```
↓ FHIR API
```

National e-Health Platform

**Common HL7 v2 Messages**:

**ADT (Admission, Discharge, Transfer)**: Patient demographics, admissions 

ADT^A01: Admit patient

ADT^A03: Discharge patient

ADT^A08: Update patient information

**ORM (Order Messages)**: Laboratory orders, procedure orders 

ORM^O01: Order message

**ORU (Observation Result)**: Lab results, vital signs 

ORU^R01: Unsolicited observation message

**OML (Lab Orders)**: Complex laboratory orders

**DFT (Detailed Financial Transaction)**: Billing and charges

**Integration Engine Functions**:

**Message Reception**: Listen on TCP port (MLLP protocol, typically port 2575)

**Message Parsing**: Parse HL7 v2 pipe-delimited messages

**Validation**: Check message structure and required fields

**Transformation**: Map HL7 v2 to FHIR resources

**Enrichment**: Add missing data from registries

**Routing**: Send to appropriate FHIR service

**Acknowledgment**: Send ACK/NACK back to source

**HL7 v2 to FHIR Mapping Example** (Lab Result):

HL7 v2 ORU^R01 Message:

MSH|^~\&|LIS|LAB|DHIS|MOH|20251016120000||ORU^R01|MSG12345|P|2.5

PID|1||12345678^^^PG^NI||Doe^John||19800115|M

OBR|1||LAB789|GLU^Glucose^LN|||20251016100000

OBX|1|NM|GLU^Glucose^LN||120|mg/dL|70-110|H|||F

Maps to FHIR DiagnosticReport + Observation:

{

  "resourceType": "DiagnosticReport",

  "status": "final",

  "code": {

    "coding": [{

      "system": "http://loinc.org",

      "code": "GLU",

      "display": "Glucose"

    }]

  },

  "subject": {"reference": "Patient/12345678"},

  "effectiveDateTime": "2025-10-16T10:00:00Z",

  "result": [

    {"reference": "Observation/obs-123"}

  ]

}

{

  "resourceType": "Observation",

  "id": "obs-123",

  "status": "final",

  "code": {

    "coding": [{

      "system": "http://loinc.org",

      "code": "GLU",

      "display": "Glucose"

    }]

  },

  "subject": {"reference": "Patient/12345678"},

  "effectiveDateTime": "2025-10-16T10:00:00Z",

  "valueQuantity": {

    "value": 120,

    "unit": "mg/dL",

    "system": "http://unitsofmeasure.org",

    "code": "mg/dL"

  },

  "referenceRange": [{

    "low": {"value": 70, "unit": "mg/dL"},

    "high": {"value": 110, "unit": "mg/dL"}

  }],

  "interpretation": [{

    "coding": [{

      "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",

      "code": "H",

      "display": "High"

    }]

  }]

}

**When to Use HL7 v2 Integration**:

✅ Legacy LIS/HIS systems without FHIR support

✅ Vendors unwilling/unable to upgrade

✅ Short-term transitional integration

✅ Well-established HL7 v2 infrastructure

**Integration Engine Options**:

**Commercial**: Mirth Connect, Rhapsody, Ensemble

**Open Source**: Mirth Connect Community Edition, OpenELIS adapters

**Cloud**: AWS HealthLake, Google Cloud Healthcare API, Azure Health Data Services

**Sub-Pattern 2B: DICOM Integration (PACS)**

**Context**: Medical imaging systems use DICOM (Digital Imaging and Communications in Medicine) standard.

**Architecture**:

Imaging Modalities (CT, MRI, X-Ray, Ultrasound)

```
↓ DICOM C-STORE
```

        PACS (Picture Archiving)

```
↓ DICOM Query/Retrieve (C-FIND, C-MOVE)
```

        DICOM Gateway / Adapter

```
↓ DICOMweb (REST-based DICOM) or FHIR
```

National e-Health Platform

**DICOM Services**:

**DICOM Storage (C-STORE)**:

Modality sends images to PACS

Protocol: TCP/IP, port 104 (default)

Images transferred with study metadata

**DICOM Query/Retrieve**:

**C-FIND**: Query PACS for studies, series, instances

**C-MOVE**: Retrieve images from PACS

**C-GET**: Alternative retrieval method

**DICOMweb** (Modern RESTful DICOM):

**WADO-RS**: Retrieve images via HTTP

**QIDO-RS**: Query for studies via HTTP

**STOW-RS**: Store images via HTTP

Easier to integrate with web applications

**DICOM Structured Reports (SR)**:

Radiology reports in structured format

Measurements and annotations

**DICOM to FHIR Integration**:

FHIR **ImagingStudy** resource stores metadata, not images:

{

  "resourceType": "ImagingStudy",

  "id": "imaging-study-123",

  "status": "available",

  "subject": {"reference": "Patient/12345"},

  "started": "2025-10-16T09:00:00Z",

  "modality": [{

    "system": "http://dicom.nema.org/resources/ontology/DCM",

    "code": "CT",

    "display": "Computed Tomography"

  }],

  "description": "Chest CT with contrast",

  "numberOfSeries": 3,

  "numberOfInstances": 150,

  "series": [{

    "uid": "1.2.840.113619.2.1.1.1.1234567890",

    "number": 1,

    "modality": {

      "system": "http://dicom.nema.org/resources/ontology/DCM",

      "code": "CT"

    },

    "description": "Axial",

    "numberOfInstances": 50,

    "bodySite": {

      "system": "http://snomed.info/sct",

      "code": "51185008",

      "display": "Thorax"

    },

    "endpoint": [{

      "reference": "Endpoint/pacs-endpoint"

    }],

    "instance": [{

      "uid": "1.2.840.113619.2.1.1.1.1234567890.1",

      "sopClass": {

        "system": "urn:ietf:rfc:3986",

        "code": "urn:oid:1.2.840.10008.5.1.4.1.1.2"

      },

      "number": 1

    }]

  }]

}

**Endpoint Resource** (references PACS):

{

  "resourceType": "Endpoint",

  "id": "pacs-endpoint",

  "status": "active",

  "connectionType": {

    "system": "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",

    "code": "dicom-wado-rs"

  },

  "name": "National PACS WADO-RS Endpoint",

  "address": "https://pacs.dhp.progressa.example/dicomweb",

  "payloadType": [{

    "coding": [{

      "system": "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",

      "code": "DICOM"

    }]

  }]

}

**Image Access Workflow**:

```
Order Imaging Study: ServiceRequest → FHIR Server
```

**Study Performed**: Images sent to PACS (DICOM C-STORE)

**Study Available**: ImagingStudy resource created in FHIR

**Access Images**: 

Option A: Embedded viewer queries PACS directly via DICOMweb

Option B: National platform proxies PACS access with authorization

**Radiology Report**: DiagnosticReport resource references ImagingStudy

**Estonia Example**: Picture Archive operational since 2005, Medical Image Bank enables sharing across facilities via X-Road.

**Progressa Implementation**: PACS subproject with DICOM and FHIR integration into DHP.

**When to Use DICOM Integration**:

✅ Medical imaging workflows

✅ Radiology, cardiology, pathology imaging

✅ PACS already deployed at facilities

✅ Need to access historical images

**Pattern 3: Asynchronous Message-Based Integration**

**Context**: When real-time synchronous communication is not required or feasible.

**Description**: Use message queues for asynchronous, reliable communication between systems.

**Architecture**:

Producer Service

```
↓ Publish Message
```

Message Queue / Broker (RabbitMQ, Kafka, AWS SQS)

```
↓ Subscribe
```

Consumer Service(s)

**Message Broker Options**:

**RabbitMQ**: Feature-rich, AMQP protocol, good for complex routing

**Apache Kafka**: High-throughput, event streaming, good for analytics pipelines

**AWS SQS/SNS**: Cloud-managed, serverless, pay-per-use

**Azure Service Bus**: Enterprise messaging, supports AMQP, MQTT

**Use Cases in e-Health**:

**Background Processing**:

Report generation (long-running)

Data warehouse ETL jobs

Bulk data export/import

Analytics calculations

**Event Notifications**:

```
New prescription created → Notify pharmacy
Lab result available → Notify ordering physician
Appointment reminder → Send SMS/email
Critical value alert → Immediate notification
```

**System Decoupling**:

Producer doesn't need to know about consumers

Consumers can be added/removed without affecting producers

Resilient to consumer failures

**Load Leveling**:

Smooth out traffic spikes

Process messages at sustainable rate

Prevent overwhelming downstream systems

**Implementation Example (RabbitMQ)**:

import pika

import json

# Producer: Publish lab result availability

connection = pika.BlockingConnection(pika.ConnectionParameters('rabbitmq.dhp.progressa.example'))

channel = connection.channel()

# Declare exchange and queue

channel.exchange_declare(exchange='lab_results', exchange_type='topic', durable=True)

# Publish message

message = {

    "event_type": "lab_result_available",

    "patient_id": "12345",

    "diagnostic_report_id": "DR-789",

    "ordering_physician_id": "PHY-456",

    "critical": True,

    "timestamp": "2025-10-16T12:00:00Z"

}

channel.basic_publish(

    exchange='lab_results',

    routing_key='result.critical',

    body=json.dumps(message),

    properties=pika.BasicProperties(

        delivery_mode=2,  # Make message persistent

        content_type='application/json'

    )

)

connection.close()

# Consumer: Provider notification service

def callback(ch, method, properties, body):

    message = json.loads(body)

    if message['critical']:

        # Send immediate notification to physician

        send_sms(message['ordering_physician_id'], f"Critical lab result for patient {message['patient_id']}")

        send_email(message['ordering_physician_id'], "Critical Result Alert", message)

    else:

        # Non-critical: just flag in physician inbox

        create_inbox_notification(message['ordering_physician_id'], message)

    # Acknowledge message processing

    ch.basic_ack(delivery_tag=method.delivery_tag)

# Set up consumer

connection = pika.BlockingConnection(pika.ConnectionParameters('rabbitmq.dhp.progressa.example'))

channel = connection.channel()

channel.queue_declare(queue='physician_notifications', durable=True)

channel.queue_bind(exchange='lab_results', queue='physician_notifications', routing_key='result.*')

channel.basic_qos(prefetch_count=1)  # Process one message at a time

channel.basic_consume(queue='physician_notifications', on_message_callback=callback)

print("Waiting for messages. To exit press CTRL+C")

channel.start_consuming()

**Message Patterns**:

**Point-to-Point (Queue)**:

One producer, one consumer

Load balancing if multiple consumer instances

**Publish/Subscribe (Topic)**:

One producer, multiple consumers

Each consumer gets copy of message

**Request/Reply**:

Asynchronous RPC pattern

Producer sends request, waits for reply on temp queue

**Reliability Patterns**:

**Message Persistence**: Store messages on disk (durable queues)

**Acknowledgments**: Consumer confirms successful processing

**Dead Letter Queues**: Failed messages go to DLQ for investigation

**Retry Logic**: Exponential backoff for transient failures

**Idempotency**: Ensure duplicate messages don't cause problems

**When to Use Async Integration**:

✅ Background processing (reports, analytics)

✅ Event notifications

✅ High-volume data flows

✅ Unreliable networks

✅ Need for system decoupling

✅ Load leveling

**When NOT to Use**:

❌ Real-time user-facing operations

❌ Immediate consistency required

❌ Simple request/response workflows

**Pattern 4: Cross-Border Health Data Exchange**

**Context**: Exchanging health data between countries for patient care during travel/relocation.

**Description**: Standardized cross-border data exchange using IHE (Integrating the Healthcare Enterprise) profiles and EU eHDSI (Electronic Health Data Space Infrastructure) or equivalent.

**Architecture** (EU Model):

Country A                              Country B

```
↓                                      ↓
```

National Contact Point A <--internet--> National Contact Point B

```
↓ IHE XCA/XDR                           ↓ IHE XCA/XDR
```

National e-Health Platform           National e-Health Platform

**Key Components**:

**National Contact Point (NCP)**:

Gateway for cross-border exchange

Translates between national and international formats

Security enforcement

Patient identification matching

**IHE Profiles Used**:

**XCA (Cross-Community Access)**: Query and retrieve documents

**XDR (Cross-Enterprise Document Reliable Interchange)**: Push documents

**XDS (Cross-Enterprise Document Sharing)**: Document registry/repository

**PIX (Patient Identifier Cross-Referencing)**: Patient matching

**XCPD (Cross-Community Patient Discovery)**: Find patients across borders

**Standard Documents**:

**International Patient Summary (IPS)**: Core FHIR-based summary 

Allergies and Intolerances

Current Medications

Problems/Diagnoses

Immunizations

Procedures

Medical Devices

Functional Status

**ePrescription**: Cross-border prescription exchange

**Laboratory Results**

**Hospital Discharge Reports**

**International Patient Summary (IPS) FHIR Structure**:

Bundle (document type)

```
├── Composition (IPS document structure)
├── Patient
├── AllergyIntolerance (all known allergies)
├── MedicationStatement (current medications)
├── Condition (problem list)
├── Immunization (vaccination history)
├── Procedure (significant procedures)
├── DeviceUseStatement (implants, prosthetics)
└── ... other relevant resources
```

**Cross-Border Workflow** (Patient traveling from Estonia to Germany):

**Patient arrives** at German clinic

**German physician** requests patient's health summary

**German NCP** sends query to **Estonian NCP**

**Estonian NCP** verifies: 

Patient identity

German physician authorization

Patient consent

**Estonian NCP** retrieves IPS from Estonian ENHIS

**Estonian NCP** translates terminology to international codes (if needed)

**Estonian NCP** sends IPS to German NCP

**German NCP** delivers IPS to German physician's system

**German physician** reviews Estonian patient summary

**Access logged** in both countries; patient can see in Estonian portal

**Estonia Implementation**:

Cross-border exchange operational since 2015 via epSOS/eHDSI

IPS generation from Estonian EHR

Supports outgoing and incoming patient summaries

ePrescription cross-border exchange

**Security Considerations**:

**Mutual TLS** between NCPs

**Digital signatures** on documents (non-repudiation)

**Consent checking** before data release

**Audit logging** in both countries

**Terminology translation** to international standards

**Patient Identification Matching**:

Name, Date of Birth, Gender

Identity document numbers (passport, national ID)

Probabilistic matching algorithms

Manual verification if ambiguous

**When to Use Cross-Border Integration**:

✅ Countries with mutual recognition agreements

✅ Significant cross-border patient flows (tourism, migration, border regions)

✅ International standards adoption (IPS, eHDSI)

✅ Legal framework supports data sharing

**Pattern 5: Mobile App Integration**

**Context**: Mobile applications for patients and healthcare professionals.

**Description**: Native iOS/Android apps or Progressive Web Apps (PWA) integrating with backend FHIR APIs.

**Architecture**:

Mobile App (iOS/Android/PWA)

```
↓ HTTPS REST API
```

API Gateway / Mobile Backend for Frontend (BFF)

```
↓
```

Authentication Service + FHIR Intermediary Server

```
↓
```

Backend FHIR Services

**Mobile App Types**:

**Patient-Facing Apps**:

View health records

Appointment booking

Prescription renewal requests

Lab result viewing

Secure messaging with providers

Symptom checker / triage

Health education content

Wearable device integration

**Provider-Facing Apps**:

Mobile EHR access

CPOE (order entry) on rounds

Secure messaging

Patient list management

Clinical decision support

Camera for documentation

**Mobile-Specific Patterns**:

**1. Backend for Frontend (BFF) Pattern**:

Problem: Mobile apps have different data needs than web apps (smaller payloads, optimized queries)

Solution: Dedicated API layer for mobile

```
┌──────────────┐
│ Patient      │
│ Mobile App   │──┐
└──────────────┘  │
├──→ Mobile BFF API ──→ Backend Services
┌──────────────┐  │
│ Provider     │  │
│ Mobile App   │──┘
└──────────────┘
```

Mobile BFF provides:

Optimized API responses (less data)

Combined queries (reduce round trips)

Mobile-specific authentication handling

Push notification coordination

**2. Offline-First Pattern**:

Problem: Mobile devices may lose connectivity

Solution: Local data caching with synchronization

# Pseudo-code for offline-first mobile app

class MobileDataStore:

    def __init__(self):

        self.local_db = SQLiteDatabase()

        self.sync_queue = []

    def get_patient_data(self, patient_id):

        # Try local cache first

        local_data = self.local_db.query(f"SELECT * FROM patients WHERE id = {patient_id}")

        if local_data and not self.is_stale(local_data):

            return local_data

        # If no cache or stale, fetch from server

        if self.has_connectivity():

            try:

                remote_data = self.api.get_patient(patient_id)

                self.local_db.upsert(remote_data)

                return remote_data

            except NetworkError:

                return local_data  # Return stale data if network fails

        else:

            return local_data

    def update_patient_data(self, patient_id, data):

        # Always update local first

        self.local_db.update(patient_id, data)

        # Queue for sync

        self.sync_queue.append({

            'operation': 'UPDATE',

            'resource': 'Patient',

            'id': patient_id,

            'data': data,

            'timestamp': datetime.now()

        })

        # Attempt immediate sync if online

        if self.has_connectivity():

            self.sync()

    def sync(self):

        # Process queued operations

        while self.sync_queue and self.has_connectivity():

            operation = self.sync_queue.pop(0)

            try:

                if operation['operation'] == 'UPDATE':

                    self.api.update_patient(operation['id'], operation['data'])

                # Mark as synced in local DB

                self.local_db.mark_synced(operation['id'])

            except NetworkError:

                # Re-queue for later

                self.sync_queue.insert(0, operation)

                break

            except ConflictError as e:

                # Handle conflicts (server version changed)

                self.resolve_conflict(operation, e.server_version)

**3. Push Notifications**:

Integration with push notification services:

Event Occurs (e.g., lab result available)

```
↓
```

Backend Service publishes event

```
↓
```

Push Notification Service

```
├──→ Apple Push Notification Service (APNs) ──→ iOS Devices
└──→ Firebase Cloud Messaging (FCM) ──→ Android Devices
```

Use Cases:

Appointment reminders

Lab results available

Prescription ready for pickup

Secure message from provider

Medication reminders

Critical value alerts (for providers)

**4. Biometric Authentication**:

# iOS (Swift) - Face ID/Touch ID

import LocalAuthentication

let context = LAContext()

var error: NSError?

if context.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: &error) {

    let reason = "Authenticate to access your health records"

    context.evaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, localizedReason: reason) { success, authenticationError in

        DispatchQueue.main.async {

            if success {

                // Biometric authentication successful

                self.proceedToApp()

            } else {

                // Fall back to passcode

                self.requestPasscode()

            }

        }

    }

}

# Android (Kotlin) - Fingerprint/Face

import androidx.biometric.BiometricPrompt

val executor = ContextCompat.getMainExecutor(this)

val biometricPrompt = BiometricPrompt(this, executor,

    object : BiometricPrompt.AuthenticationCallback() {

        override fun onAuthenticationSucceeded(result: BiometricPrompt.AuthenticationResult) {

            super.onAuthenticationSucceeded(result)

            // Biometric authentication successful

            proceedToApp()

        }

        override fun onAuthenticationFailed() {

            super.onAuthenticationFailed()

            // Authentication failed

        }

    })

val promptInfo = BiometricPrompt.PromptInfo.Builder()

    .setTitle("Access Health Records")

    .setSubtitle("Authenticate with biometrics")

    .setNegativeButtonText("Use password instead")

    .build()

biometricPrompt.authenticate(promptInfo)

**5. SMART on FHIR Apps**:

Standard for launching clinical apps from within EHR:

1. User clicks app launch link in EHR

2. EHR redirects to app with authorization code

3. App exchanges code for access token (OAuth 2.0)

4. App receives patient context and FHIR server endpoint

5. App queries FHIR server for patient data

6. App displays data to user

**Mobile Security Considerations**:

**Data Encryption**: Encrypt data at rest on device (iOS Keychain, Android Keystore)

**Certificate Pinning**: Prevent man-in-the-middle attacks

**Jailbreak/Root Detection**: Refuse to run on compromised devices

**Secure Storage**: Never store auth tokens in plain text

**Session Management**: Short session timeouts, re-authentication for sensitive operations

**Code Obfuscation**: Prevent reverse engineering

**Secure Communication**: TLS 1.3+, strong cipher suites

**When to Use Mobile Integration**:

✅ Patient engagement initiatives

✅ Point-of-care provider access

✅ Appointment reminders and notifications

✅ Remote patient monitoring

✅ Telemedicine

**Pattern 6: IoT and Medical Device Integration**

**Context**: Integrating connected medical devices and wearables.

**Description**: Devices collect health data and transmit to e-health platform for clinical use.

**Architecture**:

Medical Device / Wearable

```
↓ Bluetooth/WiFi/Cellular
```

IoT Gateway / Device Hub

```
↓ HTTPS REST API or MQTT
```

IoT Integration Service

```
↓ FHIR API (Observation resources)
```

National e-Health Platform

**Device Categories**:

**Hospital Medical Devices**:

Vital signs monitors (continuous)

Infusion pumps

Ventilators

Patient monitors in ICU

Anesthesia machines

**Home Medical Devices**:

Blood pressure monitors

Glucose meters

Pulse oximeters

Weight scales

INR monitors (for anticoagulation)

**Consumer Wearables**:

Smartwatches (heart rate, activity, ECG)

Fitness trackers

Continuous glucose monitors (CGM)

Sleep trackers

**Integration Standards**:

**HL7 FHIR Device and Observation**:

{

  "resourceType": "Device",

  "identifier": [{

    "system": "urn:oid:1.2.3.4.5.6",

    "value": "GLUCOMETER-SN-123456"

  }],

  "status": "active",

  "manufacturer": "Acme Medical Devices",

  "modelNumber": "GM-2000",

  "type": {

    "coding": [{

      "system": "http://snomed.info/sct",

      "code": "43252007",

      "display": "Blood glucose monitor"

    }]

  },

  "patient": {"reference": "Patient/12345"}

}

{

  "resourceType": "Observation",

  "status": "final",

  "category": [{

    "coding": [{

      "system": "http://terminology.hl7.org/CodeSystem/observation-category",

      "code": "vital-signs"

    }]

  }],

  "code": {

    "coding": [{

      "system": "http://loinc.org",

      "code": "2339-0",

      "display": "Glucose [Mass/volume] in Blood"

    }]

  },

  "subject": {"reference": "Patient/12345"},

  "effectiveDateTime": "2025-10-16T08:00:00Z",

  "valueQuantity": {

    "value": 110,

    "unit": "mg/dL",

    "system": "http://unitsofmeasure.org",

    "code": "mg/dL"

  },

  "device": {"reference": "Device/glucometer-123"}

}

**IEEE 11073 Personal Health Devices (PHD)**:

Standard for personal health device communication

Used by blood pressure monitors, glucose meters, etc.

**Continua Design Guidelines**:

Interoperability guidelines for personal health devices

Bluetooth Low Energy (BLE) profiles

**IoT Communication Protocols**:

**MQTT (Message Queuing Telemetry Transport)**:

Lightweight publish/subscribe protocol

Low bandwidth, suitable for IoT

Quality of Service (QoS) levels

import paho.mqtt.client as mqtt

import json

# Device publishing glucose reading

client = mqtt.Client()

client.connect("iot.dhp.progressa.example", 1883, 60)

reading = {

    "device_id": "glucometer-123",

    "patient_id": "12345",

    "timestamp": "2025-10-16T08:00:00Z",

    "glucose_value": 110,

    "unit": "mg/dL"

}

client.publish("devices/glucose/readings", json.dumps(reading), qos=1)

client.disconnect()

# Backend service subscribing to readings

def on_message(client, userdata, msg):

    reading = json.loads(msg.payload)

    # Transform to FHIR Observation and store

    observation = transform_to_fhir_observation(reading)

    fhir_server.create_observation(observation)

client = mqtt.Client()

client.on_message = on_message

client.connect("iot.dhp.progressa.example", 1883, 60)

client.subscribe("devices/+/readings")

client.loop_forever()

**HTTPS REST API**:

Traditional request/response

Better for intermittent readings

**HL7 v2 over MLLP**:

Used by hospital medical devices

Real-time vital signs streaming

**Remote Patient Monitoring (RPM) Workflow**:

**Patient enrolls** in RPM program (e.g., heart failure monitoring)

**Device issued** to patient (blood pressure monitor, weight scale)

**Patient takes reading** daily

**Device transmits** reading to IoT gateway (smartphone app or home hub)

**Gateway sends** to national platform via API

**Platform stores** as FHIR Observation

**Platform evaluates** against thresholds (rules engine)

**Alert generated** if reading abnormal (e.g., weight gain >2kg in 2 days)

**Clinician notified** to contact patient

**Clinician reviews** trend data and adjusts treatment

**Data Quality Considerations**:

**Validation**: Is reading within physiologically plausible range?

**Calibration**: Is device calibrated and certified?

**Context**: Was patient fasting? Post-meal? At rest?

**Patient-Reported vs. Clinician-Observed**: Flag source in FHIR

**Frequency**: High-frequency data (e.g., continuous glucose) may need aggregation

**Security for IoT Devices**:

**Device Authentication**: Mutual TLS, device certificates

**Data Encryption**: TLS 1.3+ for transmission

**Firmware Security**: Secure boot, signed firmware updates

**Access Control**: RBAC for device data

**Audit Logging**: Who accessed device data when

**When to Use IoT Integration**:

✅ Chronic disease management (diabetes, hypertension, heart failure)

✅ Post-discharge monitoring

✅ Clinical trials with continuous monitoring

✅ ICU/hospital continuous monitoring

**Challenges**:

Device proliferation (many vendors, protocols)

Data volume (continuous monitoring generates huge data)

Data quality and validation

Patient burden (device fatigue)

Reimbursement and sustainability

**3.2.3 Security Patterns**

Security is paramount in e-health systems. These patterns provide defense-in-depth across multiple layers.

**Pattern 1: Zero-Trust Architecture**

**Principle**: "Never trust, always verify." Assume breach and verify every access request.

**Components**:

**Identity Verification**: Strong authentication for every user, every time

**Device Verification**: Verify device health and compliance

**Least Privilege Access**: Grant minimum necessary permissions

**Micro-Segmentation**: Network segmentation limits lateral movement

**Continuous Monitoring**: Real-time threat detection and response

**Implementation in e-Health**:

User Authentication

```
↓
```

Multi-Factor Authentication (MFA)

```
↓
```

Device Posture Check (managed device? up-to-date? not jailbroken?)

```
↓
```

Context Evaluation (location, time, risk score)

```
↓
```

Access Decision (ALLOW / DENY / STEP-UP AUTH)

```
↓
```

Micro-Segmentation (can only access authorized services/data)

```
↓
```

Continuous Session Monitoring (anomaly detection)

```
↓
```

Automatic Session Termination (if threat detected)

**Example Policy**:

{

  "policy": "access-patient-ehr",

  "conditions": {

    "user_authenticated": true,

    "mfa_completed": true,

    "device_managed": true,

    "device_compliant": true,

    "user_role": ["physician", "nurse"],

    "location": ["hospital_network", "vpn"],

    "time": "work_hours",

    "patient_relationship": "assigned_or_delegated"

  },

  "actions": {

    "allow": ["read_ehr", "write_notes"],

    "deny": ["delete_records", "bulk_export"],

    "audit": true,

    "session_timeout": "15_minutes"

  }

}

**Estonia Example**: Multi-layer security with ID-card authentication, encrypted databases, comprehensive logging, and real-time monitoring.

**Progressa Requirements**: ISKE security level (based on German IT-Grundschutz) enforcing zero-trust principles.

**Pattern 2: Encryption Patterns**

**Data at Rest Encryption**:

**Database Encryption**:

**Transparent Data Encryption (TDE)**: Entire database encrypted (PostgreSQL, Oracle, SQL Server support)

**Column-Level Encryption**: Encrypt specific sensitive fields (credit cards, SSNs)

**Application-Level Encryption**: Encrypt before storing in DB

-- PostgreSQL TDE (via pgcrypto extension)

CREATE EXTENSION pgcrypto;

-- Encrypt data before insert

INSERT INTO patient_records (id, ssn_encrypted, medical_data_encrypted)

VALUES (

  12345,

  pgp_sym_encrypt('123-45-6789', 'encryption_key'),

  pgp_sym_encrypt('Medical history...', 'encryption_key')

);

-- Decrypt on retrieval

SELECT 

  id,

  pgp_sym_decrypt(ssn_encrypted::bytea, 'encryption_key') as ssn,

  pgp_sym_decrypt(medical_data_encrypted::bytea, 'encryption_key') as medical_data

FROM patient_records

WHERE id = 12345;

**File Storage Encryption**:

Encrypt uploaded documents (lab reports, imaging, etc.)

AES-256 encryption

Key management: Hardware Security Module (HSM) or AWS KMS / Azure Key Vault

from cryptography.fernet import Fernet

import base64

# Generate encryption key (store securely in HSM/KMS)

key = Fernet.generate_key()

cipher_suite = Fernet(key)

# Encrypt file

with open('lab_report.pdf', 'rb') as f:

    file_data = f.read()

encrypted_data = cipher_suite.encrypt(file_data)

# Store encrypted data

with open('lab_report.pdf.encrypted', 'wb') as f:

    f.write(encrypted_data)

# Decrypt file

with open('lab_report.pdf.encrypted', 'rb') as f:

    encrypted_data = f.read()

decrypted_data = cipher_suite.decrypt(encrypted_data)

with open('lab_report.pdf', 'wb') as f:

    f.write(decrypted_data)

**Data in Transit Encryption**:

**TLS 1.3** (mandatory):

Strong cipher suites only

Perfect Forward Secrecy (PFS)

Certificate pinning for mobile apps

# Nginx TLS configuration

server {

    listen 443 ssl http2;

    server_name api.dhp.progressa.example;

    # TLS certificates

    ssl_certificate /etc/ssl/certs/api.dhp.progressa.example.crt;

    ssl_certificate_key /etc/ssl/private/api.dhp.progressa.example.key;

    # TLS 1.3 only

    ssl_protocols TLSv1.3;

    # Strong ciphers

    ssl_ciphers 'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256';

    ssl_prefer_server_ciphers on;

    # HSTS

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # Other security headers

    add_header X-Frame-Options "SAMEORIGIN" always;

    add_header X-Content-Type-Options "nosniff" always;

    add_header X-XSS-Protection "1; mode=block" always;

}

**VPN for Facility Connections**:

Site-to-site VPN between healthcare facilities and national data center

IPsec or WireGuard

Always-on encrypted tunnels

**Key Management**:

**Key Hierarchy**:

Master Key (HSM)

```
↓
```

Data Encryption Keys (DEK) - per service/tenant

```
↓
```

Encrypted Data

**Key Rotation**:

Regular rotation (e.g., annually for DEKs)

Re-encrypt data with new keys

Old keys retained for decryption of historical data

**Key Escrow** (Controversial):

Backup keys for emergency access

Multi-party control (require M of N keyholders)

Legal and ethical considerations

**Estonia Example**: Database-level encryption protecting against rogue administrators; even DBAs cannot read patient data without proper authorization.

**Pattern 3: Audit Logging Pattern**

**Purpose**: Comprehensive logging of all data access for security, compliance, and patient transparency.

**What to Log**:

**Who**: User ID, role, organization

**What**: Action performed, data accessed

**When**: Timestamp (precise to millisecond)

**Where**: IP address, location, device

**Why**: Purpose/reason (treatment, research, administrative)

**Result**: Success or failure, error messages

**Audit Event Structure** (FHIR AuditEvent):

{

  "resourceType": "AuditEvent",

  "type": {

    "system": "http://terminology.hl7.org/CodeSystem/audit-event-type",

    "code": "rest",

    "display": "RESTful Operation"

  },

  "subtype": [{

    "system": "http://hl7.org/fhir/restful-interaction",

    "code": "read",

    "display": "read"

  }],

  "action": "R",

  "recorded": "2025-10-16T14:30:00.123Z",

  "outcome": "0",

  "agent": [{

    "type": {

      "coding": [{

        "system": "http://terminology.hl7.org/CodeSystem/extra-security-role-type",

        "code": "humanuser",

        "display": "human user"

      }]

    },

    "who": {

      "identifier": {

        "system": "urn:oid:2.16.840.1.113883.4.6",

        "value": "PHY-456"

      },

      "display": "Dr. Jane Smith"

    },

    "role": [{

      "coding": [{

        "system": "http://terminology.hl7.org/CodeSystem/v3-RoleClass",

        "code": "PROV",

        "display": "healthcare provider"

      }]

    }],

    "requestor": true,

    "location": {

      "reference": "Location/hospital-central"

    },

    "network": {

      "address": "192.168.1.100",

      "type": "2"

    }

  }],

  "source": {

    "site": "EHR Portal",

    "observer": {

      "display": "EHR System"

    },

    "type": [{

      "system": "http://terminology.hl7.org/CodeSystem/security-source-type",

      "code": "4",

      "display": "Application Server"

    }]

  },

  "entity": [{

    "what": {

      "reference": "Patient/12345"

    },

    "type": {

      "system": "http://terminology.hl7.org/CodeSystem/audit-entity-type",

      "code": "1",

      "display": "Person"

    },

    "role": {

      "system": "http://terminology.hl7.org/CodeSystem/object-role",

      "code": "1",

      "display": "Patient"

    }

  }],

  "purposeOfEvent": [{

    "coding": [{

      "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",

      "code": "TREAT",

      "display": "Treatment"

    }]

  }]

}

**Audit Log Storage**:

**Immutable Logs**: Write-once, append-only (use blockchain or immutable databases)

**Tamper Detection**: Cryptographic hashing, digital signatures

**Long-Term Retention**: 10+ years (legal requirements)

**Separate Database**: Isolated from operational data

**High Performance**: Async logging to avoid performance impact

**Implementation Pattern**:

import asyncio

import hashlib

import json

from datetime import datetime

class AuditLogger:

    def __init__(self, log_store):

        self.log_store = log_store

        self.previous_hash = "0" * 64  # Genesis hash

    async def log_access(self, user, patient, action, purpose, result):

        audit_event = {

            "timestamp": datetime.utcnow().isoformat(),

            "user_id": user.id,

            "user_role": user.role,

            "patient_id": patient.id,

            "action": action,

            "purpose": purpose,

            "result": result,

            "ip_address": user.ip_address,

            "previous_hash": self.previous_hash

        }

        # Calculate hash (tamper detection)

        event_json = json.dumps(audit_event, sort_keys=True)

        current_hash = hashlib.sha256(event_json.encode()).hexdigest()

        audit_event["hash"] = current_hash

        # Store audit event (async, non-blocking)

        await self.log_store.append(audit_event)

        # Update previous hash for next event

        self.previous_hash = current_hash

        return audit_event

    def verify_integrity(self):

        """Verify audit log has not been tampered with"""

        events = self.log_store.get_all()

        previous_hash = "0" * 64

        for event in events:

            # Recalculate hash

            event_copy = event.copy()

            stored_hash = event_copy.pop("hash")

            calculated_hash = hashlib.sha256(json.dumps(event_copy, sort_keys=True).encode()).hexdigest()

            if stored_hash != calculated_hash:

                return False, f"Tampered event detected: {event['timestamp']}"

            if event["previous_hash"] != previous_hash:

                return False, f"Chain broken at: {event['timestamp']}"

            previous_hash = stored_hash

        return True, "Audit log integrity verified"

# Usage

audit_logger = AuditLogger(immutable_log_store)

# Log patient record access

await audit_logger.log_access(

    user=current_user,

    patient=patient,

    action="VIEW_EHR",

    purpose="TREATMENT",

    result="SUCCESS"

)

**Patient-Accessible Logs** (Transparency):

Patients can view who accessed their records

Web portal shows: Date, Time, Healthcare Professional, Organization, Purpose

Alerts for unusual access patterns

Builds trust and compliance

**Estonia Example**: Comprehensive audit logging since inception; patients can view access logs in patient portal. High-profile cases of unauthorized access prosecuted.

**Anomaly Detection** on Audit Logs:

Machine learning models detect unusual patterns: 

Provider accessing many patient records in short time

Access from unusual location

Access outside work hours

Access to VIP/celebrity patients without clinical relationship

Automatic alerts to security team

**Pattern 4: Emergency Access ("Break-the-Glass")**

**Context**: Emergency situations where normal access controls would prevent life-saving care.

**Description**: Override mechanism allowing clinicians to access patient data in emergencies, with enhanced logging and post-event review.

**Implementation**:

class EmergencyAccessManager:

    def request_emergency_access(self, user, patient, reason):

        # Verify user is authorized clinician

        if not user.is_clinical_role():

            return {"granted": False, "reason": "Not a clinical user"}

        # Grant temporary emergency access

        emergency_session = {

            "user_id": user.id,

            "patient_id": patient.id,

            "granted_at": datetime.utcnow(),

            "reason": reason,

            "expires_at": datetime.utcnow() + timedelta(hours=24),

            "status": "ACTIVE"

        }

        # Store emergency access grant

        self.emergency_access_store.create(emergency_session)

        # Create enhanced audit event

        audit_logger.log_access(

            user=user,

            patient=patient,

            action="EMERGENCY_ACCESS",

            purpose="EMERGENCY",

            result="GRANTED",

            reason=reason,

            enhanced_logging=True  # Flag for review

        )

        # Notify patient (after emergency resolved)

        self.notification_queue.add({

            "patient_id": patient.id,

            "type": "EMERGENCY_ACCESS_NOTIFICATION",

            "user_id": user.id,

            "timestamp": datetime.utcnow(),

            "deliver_after": datetime.utcnow() + timedelta(hours=48)

        })

        # Notify security team for review

        self.security_alerts.add({

            "type": "EMERGENCY_ACCESS",

            "user_id": user.id,

            "patient_id": patient.id,

            "review_required": True

        })

        return {

            "granted": True,

            "session_id": emergency_session["id"],

            "expires_at": emergency_session["expires_at"],

            "message": "Emergency access granted. This access will be reviewed."

        }

    def post_event_review(self, emergency_access_id, reviewer, justification_valid):

        emergency_access = self.emergency_access_store.get(emergency_access_id)

        review = {

            "emergency_access_id": emergency_access_id,

            "reviewer_id": reviewer.id,

            "reviewed_at": datetime.utcnow(),

            "justification_valid": justification_valid,

            "notes": reviewer.notes

        }

        if not justification_valid:

            # Escalate to disciplinary process

            self.disciplinary_queue.add({

                "user_id": emergency_access["user_id"],

                "violation": "UNJUSTIFIED_EMERGENCY_ACCESS",

                "details": review

            })

        return review

**Post-Event Review Process**:

**Automatic flagging**: All emergency access events flagged for review

**Review within 72 hours**: Security or compliance team reviews

**Justification assessment**: Was emergency genuine?

**Outcome**: 

Justified: Mark as reviewed, no action

Unjustified: Disciplinary action (warning, suspension, termination, prosecution)

**Patient Notification**:

Patient notified of emergency access (after emergency resolved)

Explanation of who accessed and why

Option to report concern

**Pattern 5: Role-Based Access Control (RBAC) Implementation**

See earlier section on RBAC for detailed implementation. Key points:

```
User → Roles → Permissions → Resources
Hierarchical roles (Physician → Specialist → Cardiologist)
```

Context-based access (treatment, research, administrative)

Temporary access (consultations, delegations)

Highly sensitive data categories (mental health, HIV, genetic)

**3.2.4 Scalability Patterns**

As e-health systems grow from pilots to national scale, scalability becomes critical.

**Pattern 1: Horizontal Scaling (Scale-Out)**

**Description**: Add more servers/instances to distribute load.

**Microservices Horizontal Scaling**:

Load Balancer

```
↓
┌──────┴──────┬──────────┬──────────┐
│   Service   │  Service │  Service │
│  Instance 1 │Instance 2│Instance 3│
└─────────────┴──────────┴──────────┘
↓          ↓          ↓
```

    Shared Database or Distributed Data Store

**Auto-Scaling Configuration** (Kubernetes example):

apiVersion: autoscaling/v2

kind: HorizontalPodAutoscaler

metadata:

  name: prescription-service-hpa

spec:

  scaleTargetRef:

    apiVersion: apps/v1

    kind: Deployment

    name: prescription-service

  minReplicas: 3

  maxReplicas: 20

  metrics:

  - type: Resource

    resource:

      name: cpu

      target:

        type: Utilization

        averageUtilization: 70

  - type: Resource

    resource:

      name: memory

      target:

        type: Utilization

        averageUtilization: 80

  behavior:

    scaleDown:

      stabilizationWindowSeconds: 300

      policies:

      - type: Percent

        value: 50

        periodSeconds: 60

    scaleUp:

      stabilizationWindowSeconds: 0

      policies:

      - type: Percent

        value: 100

        periodSeconds: 30

      - type: Pods

        value: 4

        periodSeconds: 30

      selectPolicy: Max

**Load Balancing Strategies**:

**Round Robin**: Distribute requests evenly

**Least Connections**: Send to instance with fewest active connections

**IP Hash**: Same client always goes to same instance (session affinity)

**Weighted**: More traffic to more powerful instances

**Progressa Implementation**: Microservices architecture designed for horizontal scaling from pilot to national deployment.

**Pattern 2: Vertical Scaling (Scale-Up)**

**Description**: Increase resources (CPU, memory, disk) of existing servers.

**When to Use**:

Database servers (scaling out databases is complex)

Specific resource-intensive services (imaging, analytics)

**Limitations**:

Hardware limits (can't scale forever)

Downtime for upgrades (unless using cloud auto-scaling)

Single point of failure

**Estonia Example**: Database servers vertically scaled as data volume grew from thousands to 150M+ documents.

**Pattern 3: Caching Patterns**

**Purpose**: Reduce database load and improve response times by caching frequently accessed data.

**Caching Layers**:

User Request

```
↓
```

CDN Cache (static content: images, CSS, JS)

```
↓ (cache miss)
```

Application Cache (Redis/Memcached)

```
↓ (cache miss)
```

Database Query

**1. In-Memory Cache (Redis)**:

import redis

import json

from functools import wraps

redis_client = redis.Redis(host='redis.dhp.progressa.example', port=6379, db=0)

def cache_patient_demographics(ttl=3600):

    """Decorator to cache patient demographics"""

    def decorator(func):

        @wraps(func)

        def wrapper(patient_id):

            cache_key = f"patient:demographics:{patient_id}"

            # Try cache first

            cached = redis_client.get(cache_key)

            if cached:

                return json.loads(cached)

            # Cache miss: fetch from database

            result = func(patient_id)

            # Store in cache

            redis_client.setex(

                cache_key,

                ttl,

                json.dumps(result)

            )

            return result

        return wrapper

    return decorator

@cache_patient_demographics(ttl=3600)  # Cache for 1 hour

def get_patient_demographics(patient_id):

    # Expensive database query

    return database.query(f"SELECT * FROM patients WHERE id = {patient_id}")

**2. Query Result Caching**:

def get_lab_results(patient_id, date_range):

    cache_key = f"lab_results:{patient_id}:{date_range}"

    cached = redis_client.get(cache_key)

    if cached:

        return json.loads(cached)

    # Query database

    results = database.query(

        "SELECT * FROM lab_results WHERE patient_id = ? AND date BETWEEN ? AND ?",

        patient_id, date_range.start, date_range.end

    )

    # Cache for 24 hours (lab results don't change once final)

    redis_client.setex(cache_key, 86400, json.dumps(results))

    return results

**3. CDN for Static Content**:

Images, stylesheets, JavaScript

Served from edge locations close to users

Reduces server load dramatically

**Cache Invalidation** (hardest problem in computer science):

def update_patient_demographics(patient_id, new_data):

    # Update database

    database.update("patients", patient_id, new_data)

    # Invalidate cache

    cache_key = f"patient:demographics:{patient_id}"

    redis_client.delete(cache_key)

    # Or update cache immediately

    redis_client.setex(cache_key, 3600, json.dumps(new_data))

**When NOT to Cache**:

Highly sensitive data that changes frequently

User-specific data with low reuse

Real-time vital signs

**Pattern 4: Database Optimization**

**1. Indexing**:

-- Index on frequently queried columns

CREATE INDEX idx_patient_id ON lab_results(patient_id);

CREATE INDEX idx_patient_date ON lab_results(patient_id, result_date);

-- Composite index for common queries

CREATE INDEX idx_patient_provider_date ON encounters(patient_id, provider_id, encounter_date);

-- Partial index for active records only

CREATE INDEX idx_active_prescriptions ON prescriptions(patient_id)

WHERE status = 'active';

**2. Query Optimization**:

-- BAD: Full table scan

SELECT * FROM patient_records WHERE YEAR(birth_date) = 1980;

-- GOOD: Use indexed column directly

SELECT * FROM patient_records WHERE birth_date BETWEEN '1980-01-01' AND '1980-12-31';

-- BAD: SELECT * returns unnecessary columns

SELECT * FROM patient_records WHERE patient_id = 12345;

-- GOOD: Select only needed columns

SELECT id, name, birth_date, gender FROM patient_records WHERE patient_id = 12345;

**3. Database Sharding** (for very large datasets):

Partition data across multiple database servers:

```
Patient ID 1-1,000,000  → Database Shard 1
Patient ID 1,000,001-2,000,000 → Database Shard 2
Patient ID 2,000,001-3,000,000 → Database Shard 3
```

...

**Sharding Key**: Patient ID (ensures all data for a patient is on same shard)

**Challenges**:

Cross-shard queries expensive

Rebalancing as data grows

Complex application logic

**4. Read Replicas**:

Primary Database (writes)

```
↓ Replication
┌──────┴──────┬──────────┬──────────┐
│   Read      │   Read   │   Read   │
│  Replica 1  │Replica 2 │Replica 3 │
└─────────────┴──────────┴──────────┘
↑          ↑          ↑
```

    (read queries distributed)

**Pattern 5: Asynchronous Processing**

**Context**: Long-running tasks should not block user requests.

**Examples**:

**Report Generation**:

@app.route('/api/reports/generate', methods=['POST'])

def generate_report(request):

    # Don't generate report synchronously (might take minutes)

    # Instead, queue for background processing

    job_id = uuid.uuid4()

    report_job = {

        'job_id': job_id,

        'user_id': request.user_id,

        'report_type': request.report_type,

        'parameters': request.parameters,

        'status': 'QUEUED'

    }

    # Queue for processing

    job_queue.enqueue(report_job)

    # Return immediately

    return jsonify({

        'job_id': job_id,

        'status': 'QUEUED',

        'estimated_time': '2-5 minutes',

        'check_status_url': f'/api/reports/status/{job_id}'

    }), 202  # 202 Accepted

# Background worker processes queue

def report_worker():

    while True:

        job = job_queue.dequeue()

        if job:

            try:

                # Generate report (long-running)

                report = generate_complex_report(job['parameters'])

                # Update status

                job['status'] = 'COMPLETED'

                job['report_url'] = f'/api/reports/download/{job["job_id"]}'

                job_store.update(job)

                # Notify user

                notify_user(job['user_id'], "Your report is ready")

            except Exception as e:

                job['status'] = 'FAILED'

                job['error'] = str(e)

                job_store.update(job)

**Data Warehouse ETL**:

Run overnight (off-peak hours)

Extract from operational DB

Transform and load to warehouse

Don't impact daytime performance

**3.2.5 API Management Patterns**

**API Gateway Functions**:

**Request Routing**: Direct requests to appropriate microservice

**Authentication**: Verify OAuth tokens

**Authorization**: Check permissions

**Rate Limiting**: Prevent abuse

**Caching**: Cache frequent responses

**Logging**: Audit all API calls

**Transformation**: Convert formats if needed

**Circuit Breaking**: Handle downstream failures gracefully

**Rate Limiting Example**:

from flask import Flask, jsonify, request

from functools import wraps

import redis

app = Flask(__name__)

redis_client = redis.Redis()

def rate_limit(requests_per_minute=60):

    def decorator(func):

        @wraps(func)

        def wrapper(*args, **kwargs):

            # Identify user

            user_id = request.headers.get('User-ID')

            if not user_id:

                return jsonify({"error": "Missing User-ID header"}), 400

            # Rate limit key

            key = f"rate_limit:{user_id}"

            # Increment request count

            pipe = redis_client.pipeline()

            pipe.incr(key)

            pipe.expire(key, 60)  # Reset after 60 seconds

            result = pipe.execute()

            request_count = result[0]

            if request_count > requests_per_minute:

                return jsonify({

                    "error": "Rate limit exceeded",

                    "limit": requests_per_minute,

                    "retry_after": 60

                }), 429  # Too Many Requests

            # Allow request

            return func(*args, **kwargs)

        return wrapper

    return decorator

@app.route('/api/patients/<patient_id>')

@rate_limit(requests_per_minute=100)

def get_patient(patient_id):

    # API logic

    patient = fetch_patient(patient_id)

    return jsonify(patient)

**3.3 Technical Standards Catalog**

**3.3.1 Data Exchange Standards**

**HL7 FHIR (Fast Healthcare Interoperability Resources)**

**Version**: R4 (v4.0.1) or R5 (v5.0.0)

**Purpose**: Modern RESTful API standard for healthcare data exchange.

**Key Resources for e-Health**:

**Patient Administration**:

Patient

RelatedPerson

Person

Practitioner

PractitionerRole

Organization

Location

HealthcareService

Endpoint

**Clinical**:

Encounter

Condition (diagnosis, problem list)

Procedure

Observation (vital signs, lab results, social history)

DiagnosticReport

ImagingStudy

DocumentReference

Media

MedicationRequest (prescriptions)

MedicationDispense

MedicationStatement

MedicationAdministration

Immunization

AllergyIntolerance

AdverseEvent

**Care Coordination**:

CarePlan

CareTeam

Goal

ServiceRequest (orders, referrals)

Appointment

Schedule

Slot

**Financial**:

Coverage (insurance)

Claim

ExplanationOfBenefit

**Security & Consent**:

Consent

AuditEvent

Provenance

**Implementation Guide Development**:

National implementation guides define:

Which resources to use

Constraints on resources (mandatory fields, prohibited fields)

Value sets and code systems

Search parameters

Extensions for national needs

**Example**: Progressa MedicationRequest Profile:

{

  "resourceType": "StructureDefinition",

  "id": "pg-medication-request",

  "url": "http://fhir.progressa.example/StructureDefinition/pg-medication-request",

  "name": "ProgressaMedicationRequest",

  "status": "active",

  "fhirVersion": "4.0.1",

  "kind": "resource",

  "abstract": false,

  "type": "MedicationRequest",

  "baseDefinition": "http://hl7.org/fhir/StructureDefinition/MedicationRequest",

  "derivation": "constraint",

  "differential": {

    "element": [

      {

        "id": "MedicationRequest.identifier",

        "path": "MedicationRequest.identifier",

        "min": 1,

        "mustSupport": true

      },

      {

        "id": "MedicationRequest.medicationCodeableConcept",

        "path": "MedicationRequest.medicationCodeableConcept",

        "type": [{"code": "CodeableConcept"}],

        "binding": {

          "strength": "required",

          "valueSet": "http://fhir.progressa.example/ValueSet/pg-medications"

        }

      },

      {

        "id": "MedicationRequest.subject",

        "path": "MedicationRequest.subject",

        "type": [{"code": "Reference", "targetProfile": ["http://fhir.progressa.example/StructureDefinition/pg-patient"]}]

      }

    ]

  }

}

**FHIR RESTful API Operations**:

# Create

POST [base]/Patient

Body: Patient resource JSON

# Read

GET [base]/Patient/12345

# Update

PUT [base]/Patient/12345

Body: Updated Patient resource JSON

# Delete

DELETE [base]/Patient/12345

# Search

GET [base]/Patient?name=Smith&birthdate=1980-01-15

# Search with POST (for complex searches)

POST [base]/Patient/_search

Body: name=Smith&birthdate=1980-01-15

# History

GET [base]/Patient/12345/_history

# Batch/Transaction

POST [base]

Body: Bundle with multiple operations

**Implementation Priority**: **MUST HAVE**

**Maturity Level**: All levels (start with core resources, expand to advanced)

**HL7 v2.x**

**Version**: 2.5.1 or 2.7

**Purpose**: Legacy messaging standard, still widely used.

**Common Message Types**:

ADT (Admission, Discharge, Transfer)

ORM (Order Messages)

ORU (Observation Result)

DFT (Detailed Financial Transaction)

**When to Use**:

Integration with legacy LIS/HIS

Transitional period before FHIR migration

**Implementation Priority**: **SHOULD HAVE** (for legacy integration)

**Maturity Level**: Intermediate (if legacy systems present)

**HL7 CDA (Clinical Document Architecture)**

**Version**: CDA R2

**Purpose**: XML-based standard for clinical documents.

**Document Types**:

Continuity of Care Document (CCD)

Discharge Summary

Progress Note

History and Physical

Consultation Note

**When to Use**:

Document-based architecture (Estonia model)

Cross-border exchange (IHE XDS profiles)

**Transition to FHIR**: Use FHIR Documents or FHIR resources instead

**Implementation Priority**: **COULD HAVE** (if document-based architecture)

**Estonia Example**: 150M+ CDA R2 documents stored in ENHIS.

**DICOM (Digital Imaging and Communications in Medicine)**

**Version**: DICOM 2024a (latest)

**Purpose**: Medical imaging standard.

**Key Standards**:

DICOM Storage (C-STORE)

DICOM Query/Retrieve (C-FIND, C-MOVE, C-GET)

DICOMweb (WADO-RS, QIDO-RS, STOW-RS)

DICOM Structured Reports

**Implementation Priority**: **MUST HAVE** (for medical imaging)

**Maturity Level**: Intermediate+ (when implementing PACS)

**3.3.2 Clinical Terminology Standards**

**SNOMED CT (Systematized Nomenclature of Medicine - Clinical Terms)**

**Purpose**: Comprehensive clinical terminology covering diseases, procedures, anatomy, etc.

**Coverage**:

350,000+ active concepts

Multiple hierarchies

Multi-axial structure (clinical finding, procedure, body structure, organism, etc.)

**Use Cases**:

Problem list / diagnosis coding

Procedure documentation

Allergy recording

Family history

Clinical findings

**Licensing**: Requires national license from SNOMED International

**National Release Center**: Progressa needs to establish NRC for translations and extensions

**Implementation Priority**: **MUST HAVE**

**Maturity Level**: Intermediate+

**Challenge**: Requires extensive training for clinicians

**LOINC (Logical Observation Identifiers Names and Codes)**

**Purpose**: Standard for laboratory and clinical observations.

**Coverage**:

90,000+ terms

Laboratory tests

Clinical measurements (vital signs)

Radiology procedures

Document types

**Use Cases**:

Laboratory test ordering and results

Vital signs recording

Diagnostic test identification

**Licensing**: Free

**Implementation Priority**: **MUST HAVE**

**Maturity Level**: Foundation (core to lab integration)

**Estonia Example**: Estonian LOINC release with translations and national extensions.

**ICD-11 (International Classification of Diseases, 11th Revision)**

**Purpose**: Disease classification by WHO.

**Coverage**:

55,000+ diagnostic categories

Multi-parent structure (more flexible than ICD-10)

Foundation layer for extensions

**Use Cases**:

Mortality reporting

Morbidity statistics

Reimbursement coding (primary diagnoses)

Epidemiological surveillance

**Licensing**: Free (WHO standard)

**Implementation Priority**: **MUST HAVE**

**Maturity Level**: Foundation

**Transition from ICD-10**: Many countries still using ICD-10; plan migration

**WHO ATC (Anatomical Therapeutic Chemical Classification)**

**Purpose**: Drug classification system.

**Structure**: 7 levels

Level 1: Anatomical main group (A-V)

Level 2: Therapeutic subgroup

Level 3: Pharmacological subgroup

Level 4: Chemical subgroup

Level 5: Chemical substance

**Example**: N02BE01 = Paracetamol

N = Nervous system

N02 = Analgesics

N02B = Other analgesics and antipyretics

N02BE = Anilides

N02BE01 = Paracetamol

**Use Cases**:

Medication classification

Drug-drug interaction checking

Formulary management

Prescription statistics

**Licensing**: Free (WHO)

**Implementation Priority**: **MUST HAVE**

**Maturity Level**: Foundation (core to ePrescription)

**WHO ICF (International Classification of Functioning, Disability and Health)**

**Purpose**: Framework for describing and organizing functioning and disability.

**Components**:

Body Functions

Body Structures

Activities and Participation

Environmental Factors

**Use Cases**:

Rehabilitation documentation

Disability assessment

Functional status tracking

**Licensing**: Free (WHO)

**Implementation Priority**: **SHOULD HAVE**

**Maturity Level**: Advanced (for rehabilitation services)

**Orphanet Rare Disease Ontology**

**Purpose**: Classification of rare diseases.

**Use Cases**:

Rare disease registries

Research cohort identification

Specialized care coordination

**Licensing**: Free

**Implementation Priority**: **COULD HAVE**

**Maturity Level**: Advanced

**UCUM (Unified Code for Units of Measure)**

**Purpose**: Standard for units of measure (kg, mg/dL, mmHg, etc.)

**Use Cases**:

Laboratory results

Vital signs

Medication dosing

**Licensing**: Free

**Implementation Priority**: **MUST HAVE**

**Maturity Level**: Foundation

**3.3.3 Security Standards**

**OAuth 2.0 + OpenID Connect**

**Purpose**: Authentication and authorization for APIs.

**Use Cases**:

API access control

Single Sign-On (SSO)

Mobile app authentication

**Implementation Priority**: **MUST HAVE**

**SAML 2.0**

**Purpose**: XML-based SSO standard.

**Use Cases**:

Enterprise SSO

Cross-organization authentication

**Implementation Priority**: **SHOULD HAVE** (if enterprise SSO needed)

**PKI (Public Key Infrastructure)**

**Purpose**: Digital signatures and certificates.

**Use Cases**:

Digital signatures on medical documents

ID-card authentication

Secure email (S/MIME)

**Implementation Priority**: **MUST HAVE**

**Estonia Example**: Widespread use of ID-card with PKI certificates for digital signatures.

**3.3.4 Standards Implementation Matrix**


| Standard | Priority | Maturity Level | Cost | Complexity |
|---|---|---|---|---|
| HL7 FHIR R4 | MUST | Foundation+ | Free | Medium |
| DICOM | MUST | Intermediate+ | Free | High |
| SNOMED CT | MUST | Intermediate+ | License Fee | High |
| LOINC | MUST | Foundation+ | Free | Medium |
| ICD-11 | MUST | Foundation | Free | Low |
| WHO ATC | MUST | Foundation | Free | Low |
| UCUM | MUST | Foundation | Free | Low |
| OAuth 2.0/OIDC | MUST | Foundation | Free | Medium |
| PKI | MUST | Foundation | Setup Cost | Medium |
| HL7 v2 | SHOULD | Intermediate | Free | Medium |
| HL7 CDA | COULD | Intermediate | Free | Medium |
| WHO ICF | SHOULD | Advanced | Free | Medium |
| Orphanet | COULD | Advanced | Free | Low |
| SAML 2.0 | COULD | Intermediate | Free | Medium |


**3.4 Security Architecture**

*(See 3.2.3 Security Patterns for detailed patterns)*

**Multi-Layer Security Model**:

```
┌─────────────────────────────────────────┐
│     PHYSICAL SECURITY LAYER             │
│  Data center access control, cameras    │
└─────────────────────────────────────────┘
```

              ↕

```
┌─────────────────────────────────────────┐
│     NETWORK SECURITY LAYER              │
│  Firewalls, IDS/IPS, VPN, DMZ           │
└─────────────────────────────────────────┘
```

              ↕

```
┌─────────────────────────────────────────┐
│     APPLICATION SECURITY LAYER          │
│  Authentication, Authorization, RBAC    │
└─────────────────────────────────────────┘
```

              ↕

```
┌─────────────────────────────────────────┐
│     DATA SECURITY LAYER                 │
│  Encryption, Pseudonymization, Auditing │
└─────────────────────────────────────────┘
```

**Security Principles**:

**Defense in Depth**: Multiple layers of security

**Least Privilege**: Grant minimum necessary access

**Zero Trust**: Never trust, always verify

**Privacy by Design**: Privacy built-in from start

**Security by Default**: Secure default configurations

**Key Security Controls**:

**Authentication**:

Strong authentication (MFA, ID-card, Mobile-ID)

No password-only authentication for healthcare professionals

Biometric authentication for mobile apps

**Authorization**:

Role-Based Access Control (RBAC)

Purpose-Based Access Control

Consent checking

Emergency access override with enhanced logging

**Encryption**:

TLS 1.3+ for all communications

AES-256 for data at rest

Database-level encryption

File storage encryption

**Audit Logging**:

Comprehensive logging of all access

Immutable logs with tamper detection

Patient-accessible logs

Long-term retention (10+ years)

**Monitoring**:

Real-time security monitoring (SIEM)

Anomaly detection (ML-based)

Automatic alerting

Security dashboards

**Security Compliance**:

**Estonia**: High security standards, comprehensive logging, patient access logs build trust.

**Progressa**: ISKE security level (based on German IT-Grundschutz), strong authentication, comprehensive auditing.

**3.5 Architecture Decision Records (ADRs)**

Architecture Decision Records document key architectural choices, rationale, and consequences.

**ADR-001: Adopt FHIR-First Architecture (Progressa Model)**

**Status**: Accepted

**Context**: Starting ground-up digital health transformation without legacy systems. Need to choose primary data exchange standard.

**Decision**: Adopt HL7 FHIR R4 as primary data exchange standard and native data model for all core services.

**Rationale**:

Modern RESTful API, easier for developers to learn and use

Growing industry adoption and tooling

Avoids future migration costs from HL7 v2/v3 to FHIR

Better suited for mobile and web applications

Strong international community and implementations

**Consequences**:

*Positive*:

Future-proof architecture aligned with international trends

Easier integration with modern systems

Attracts skilled developers familiar with REST APIs

Lower long-term maintenance costs

*Negative*:

FHIR still evolving (R5 coming, breaking changes possible)

Fewer FHIR-native legacy systems (need facades for integration)

Training required for healthcare professionals and developers

National implementation guide development required

*Neutral*:

Need to establish FHIR profiling governance

Must develop translation and localization processes

**Alternatives Considered**:

**HL7 v3 (Estonia early model)**: More mature but complex, declining adoption

**Hybrid (CDA documents + FHIR APIs)**: Transitional approach, adds complexity

**Proprietary standard**: Vendor lock-in risk, interoperability challenges

**Related Decisions**: ADR-002 (FHIR Intermediary Server)

**ADR-002: Implement FHIR Intermediary Server**

**Status**: Accepted

**Context**: Multiple FHIR-based microservices need coordinated access. Need content-based routing, search optimization, and centralized security enforcement.

**Decision**: Implement FHIR Intermediary Server (FIS) as central hub for FHIR-based communication.

**Rationale**:

Healthcare-specific benefits beyond generic API gateway

Content-based routing (route based on FHIR resource type)

Search optimization across multiple FHIR servers

Centralized authentication/authorization enforcement

Transformation and mapping capabilities

**Consequences**:

*Positive*:

Simplified API surface for external applications

Consistent security enforcement

Performance optimization through caching

Reduced coupling between services

*Negative*:

Additional component to develop and maintain

Potential single point of failure (mitigated by redundancy)

Performance overhead (mitigated by caching)

**Alternatives Considered**:

**Generic API Gateway**: Lacks healthcare-specific features

**Direct Service-to-Service**: Complex service discovery, no central security

**Enterprise Service Bus (ESB)**: Heavyweight, not RESTful

**Related Decisions**: ADR-001 (FHIR-First), ADR-005 (Microservices Architecture)

**ADR-003: Use X-Road for Secure Data Exchange (Estonia Model)**

**Status**: Accepted (Estonia)

**Context**: Need secure data exchange infrastructure connecting all government services, including healthcare.

**Decision**: Use X-Road as secure data exchange platform for all government and healthcare data sharing.

**Rationale**:

Proven at national scale (Estonia, Finland, Iceland)

Federated architecture (data stays at source)

Strong security and audit capabilities

Supports healthcare and non-healthcare integrations

Open source

**Consequences**:

*Positive*:

Secure, reliable data exchange

Interoperability across government sectors

Distributed architecture (no single point of failure)

International adoption (Nordic countries, Ukraine, etc.)

*Negative*:

Infrastructure deployment and maintenance costs

Complexity for developers

Requires security server at each participant

Not healthcare-specific (generic data exchange)

**Alternatives Considered**:

**Point-to-point VPN**: Not scalable

**Custom API Gateway**: Reinventing the wheel

**Cloud-based Integration Platform**: Vendor lock-in, data residency concerns

**Related Decisions**: ADR-001 (Estonia's document-based architecture leverages X-Road)

**ADR-004: Opt-Out Consent Model**

**Status**: Proposed (Legal framework dependent)

**Context**: Need to decide consent model for health data sharing. Opt-in requires explicit patient consent for each data sharing. Opt-out allows data sharing by default unless patient objects.

**Decision**: Adopt opt-out consent model for health data sharing for treatment purposes.

**Rationale**:

Enables better care coordination (providers have access by default)

Higher EHR adoption and utilization

Aligns with EU best practices (Estonia, Denmark, Finland, etc.)

Patients retain control (can opt-out or restrict access)

**Consequences**:

*Positive*:

Better clinical outcomes (providers have complete picture)

Reduced provider burden (no consent collection for each access)

Higher system utilization (more complete data)

*Negative*:

Privacy concerns (some patients uncomfortable with default sharing)

Requires robust opt-out mechanisms

Enhanced transparency needed (access logs, notifications)

Legal framework must support

**Alternatives Considered**:

**Opt-in**: Lower utilization, care coordination challenges, provider frustration

**Purpose-based**: Different rules for different purposes (treatment vs research)

**Requirements**:

Legal framework must explicitly authorize opt-out model

Patient education and communication critical

Accessible opt-out mechanisms (online, phone, in-person)

Patient access logs mandatory (transparency)

Enhanced security for highly sensitive data (mental health, HIV)

**Related Decisions**: ADR-007 (Patient Access Logs)

**ADR-005: Microservices Architecture**

**Status**: Accepted (Progressa Model)

**Context**: Need to choose application architecture for 19 core DHP services.

**Decision**: Adopt microservices architecture with independently deployable services.

**Rationale**:

Independent scaling of services based on load

Technology flexibility (different languages/frameworks per service if needed)

Parallel development by multiple teams

Easier maintenance and updates (change one service without affecting others)

Fault isolation (one service failure doesn't crash entire system)

**Consequences**:

*Positive*:

Agility and faster time-to-market

Scalability tailored to each service's needs

Team autonomy and productivity

Resilience and fault tolerance

*Negative*:

Increased operational complexity (many services to monitor and deploy)

Network latency between services

Data consistency challenges (distributed transactions)

Testing complexity (integration testing across services)

Infrastructure costs (more servers/containers)

**Mitigation**:

Kubernetes for orchestration and deployment

Service mesh (Istio) for observability and traffic management

API gateway for unified entry point

Comprehensive monitoring and tracing

**Alternatives Considered**:

**Monolithic**: Simpler but not scalable, single point of failure

**Modular Monolith**: Middle ground but limited scaling

**Related Decisions**: ADR-002 (FHIR Intermediary Server as service coordinator)

**ADR-006: PostgreSQL as Primary Database**

**Status**: Accepted (Progressa Model)

**Context**: Need to choose relational database for FHIR resources and application data.

**Decision**: Use PostgreSQL as primary RDBMS for all core services.

**Rationale**:

Open source (no licensing costs)

JSONB support (native FHIR resource storage)

Full-text search capabilities

Mature and stable

Strong community and tooling

Horizontal scaling possible (Citus extension)

**Consequences**:

*Positive*:

Cost savings (no licensing fees)

JSONB perfect for FHIR resources (schemaless flexibility)

Strong performance and reliability

Rich ecosystem of tools and extensions

*Negative*:

Requires database administration expertise

Scaling complexity for very large datasets

Backup and disaster recovery setup required

**Alternatives Considered**:

**Oracle Database**: Expensive licensing, vendor lock-in

**MongoDB**: NoSQL, but lacks relational capabilities for some use cases

**SQL Server**: Microsoft licensing costs

**Related Decisions**: ADR-005 (Microservices may use dedicated databases)

**ADR-007: Patient Access Logs (Transparency)**

**Status**: Accepted (Estonia Model, Recommended for All)

**Context**: Patients are concerned about who accesses their sensitive health data. Need to build trust.

**Decision**: Implement patient-accessible access logs showing all views of patient's health data.

**Rationale**:

Transparency builds trust

Deters unauthorized access (providers know patients can see)

Patient empowerment (patients can report suspicious access)

Regulatory compliance (GDPR "right to information")

**Consequences**:

*Positive*:

High patient trust and satisfaction

Reduced unauthorized access incidents

Early detection of privacy breaches

Strong deterrent effect on snooping

*Negative*:

Additional development and storage costs

Requires patient portal implementation

Some patients alarmed by number of accesses (need education)

**Implementation Requirements**:

Comprehensive audit logging (see ADR-008)

Patient portal with access log viewer

Plain language descriptions ("Dr. Smith viewed your blood test results")

Ability to report suspicious access

**Estonia Example**: Access logs available since patient portal launch. Proven to build trust and reduce unauthorized access. High-profile prosecutions of unauthorized access demonstrate accountability.

**Related Decisions**: ADR-008 (Comprehensive Audit Logging)

**ADR-008: Comprehensive Audit Logging**

**Status**: Accepted (Mandatory)

**Context**: Security, compliance, and transparency require complete logging of all data access and modifications.

**Decision**: Implement comprehensive, immutable audit logging for all EHR access and changes.

**Rationale**:

Legal requirement (GDPR, HIPAA, national laws)

Security incident investigation

Patient transparency (access logs)

Accountability and deterrence

Compliance reporting

**Consequences**:

*Positive*:

Complete audit trail for security investigations

Patient transparency and trust

Regulatory compliance

Deterrent effect on unauthorized access

*Negative*:

Storage costs (long-term retention, 10+ years)

Performance impact (every action logged)

Development effort (comprehensive instrumentation)

**Implementation Requirements**:

Log all EHR access (read, write, delete)

Log authentication and authorization events

Immutable logs (write-once, append-only)

Tamper detection (cryptographic hashing)

Patient-accessible view (simplified, non-technical)

Long-term retention (10+ years minimum)

Anomaly detection (ML-based)

**Related Decisions**: ADR-007 (Patient Access Logs), ADR-009 (Emergency Access)

**ADR-009: Emergency Access ("Break-the-Glass")**

**Status**: Accepted

**Context**: In emergencies, normal access controls may prevent life-saving care. Need override mechanism.

**Decision**: Implement emergency access override with enhanced logging and mandatory post-event review.

**Rationale**:

Patient safety is paramount

Legal "duty to treat" in emergencies

Rare but critical use case

Must be auditable to prevent abuse

**Consequences**:

*Positive*:

Clinicians can access data when needed for emergency care

No patient deaths due to access control restrictions

Balances security and patient safety

*Negative*:

Risk of abuse (if post-event review not enforced)

Patient concerns about emergency access

Additional process overhead (review)

**Implementation Requirements**:

Require reason documentation

Enhanced audit logging (flagged for review)

Automatic patient notification (after emergency)

Mandatory post-event review within 72 hours

Disciplinary action for unjustified access

Periodic reporting to governance committee

**Related Decisions**: ADR-008 (Audit Logging), ADR-004 (Even with opt-out, emergency access permitted)

**ADR-010: Multi-Language Support (Progressa Context)**

**Status**: Accepted (Progressa)

**Context**: Progressa has two official languages (the local language and English). System must support both for all users.

**Decision**: Implement full multi-language support for the local language and English in all user interfaces and clinical terminologies.

**Rationale**:

Legal requirement (official languages)

User diversity (English widely used, especially by older physicians)

Accessibility and usability

Reduced errors (clinicians work in preferred language)

**Consequences**:

*Positive*:

Improved user adoption and satisfaction

Reduced clinical errors (language barriers)

Legal compliance

Equity in access

*Negative*:

Translation costs for all standards (SNOMED CT, LOINC, etc.)

Ongoing maintenance (keeping translations current)

User interface complexity (language switching)

Testing complexity (validate both languages)

**Implementation Requirements**:

User-selectable language in all applications

Translate all UI text (screens, messages, help)

Translate all clinical terminologies (SNOMED CT, LOINC, ICD-11)

Translate documentation and training materials

Quality assurance for translations (clinical review)

Synchronize with international standard updates

**Related Decisions**: ADR-001 (FHIR profiles need translation metadata)

**3.6 Anti-Patterns**

**Anti-patterns** are common mistakes to avoid. Learning from others' failures prevents costly errors.

**⚠️**** ANTI-PATTERN #1: Big-Bang National Deployment**

**DON'T**: Deploy nationwide immediately without pilot testing.

**WHY IT FAILS**:

Unvalidated assumptions cause widespread problems

User resistance not addressed

Performance issues at scale unanticipated

Change management inadequate

Costly rollback or fixes under pressure

**DO INSTEAD**:

Pilot in 2-5 representative facilities (urban, rural, different types)

Validate assumptions and iterate

Train users and gather feedback

Gradually expand after pilot success

Phased rollout over 18-36 months

**Estonia Example**: Gradual evolution over 30 years, adding services incrementally.

**Progressa Approach**: Pilot phase (6-12 months) before national rollout.

**⚠️**** ANTI-PATTERN #2: Vendor Lock-In Architecture**

**DON'T**: Build architecture dependent on single proprietary vendor.

**WHY IT FAILS**:

High switching costs (data migration, retraining)

Vendor has pricing power

Limited innovation (vendor's roadmap, not yours)

Unsustainable long-term

**DO INSTEAD**:

Open standards (FHIR, DICOM, etc.)

Open-source components where feasible

Multi-vendor ecosystem

Data portability built-in

Contractual exit clauses

**Progressa Approach**: Open standards from day one, avoiding proprietary formats.

**⚠️**** ANTI-PATTERN #3: Standards Adoption Delayed**

**DON'T**: Start with proprietary formats, plan to migrate to standards "later."

**WHY IT FAILS**:

Migration extremely costly and disruptive

Data loss during conversion

Years of effort wasted

Interoperability delayed

**DO INSTEAD**:

Standards-first from day one (FHIR, DICOM, SNOMED CT)

Accept learning curve upfront

Invest in training and tooling

Benefit from interoperability immediately

**Estonia Lesson**: HL7 v3 to FHIR migration costs years of effort.

**Progressa Advantage**: FHIR-first avoids migration pain.

**⚠️**** ANTI-PATTERN #4: Ignoring Data Quality**

**DON'T**: Focus only on infrastructure without data governance.

**WHY IT FAILS**:

"Garbage in, garbage out"

Poor data quality undermines analytics

Clinical errors from bad data

User frustration

**DO INSTEAD**:

Data governance from day one

Validation rules and quality checks

Data quality monitoring and dashboards

Training on documentation standards

Incentives for quality data entry

**⚠️**** ANTI-PATTERN #5: Insufficient Security & Privacy**

**DON'T**: Add security as an afterthought or rely only on passwords.

**WHY IT FAILS**:

Data breaches devastating to trust

Legal penalties and liability

Retrofitting security extremely costly

Impossible to recover trust after breach

**DO INSTEAD**:

Security by design from inception

Multi-factor authentication mandatory

Encryption everywhere (rest and transit)

Comprehensive audit logging

Regular security audits and penetration testing

Patient access logs (transparency)

**Progressa Requirements**: ISKE security level, strong authentication, comprehensive auditing from day one.

**⚠️**** ANTI-PATTERN #6: Neglecting Change Management**

**DON'T**: Assume "build it and they will come."

**WHY IT FAILS**:

Healthcare professionals resist change

Poor adoption despite excellent technology

Users circumvent system (workarounds)

Investment wasted

**DO INSTEAD**:

Invest 30-40% of budget in change management (not just technology)

Early stakeholder engagement (co-design with users)

Comprehensive training (hands-on, role-based)

Champions and super-users program

Address concerns and feedback

Demonstrate value early (quick wins)

Continuous communication

**Progressa Approach**: Parallel capacity building and training alongside technical implementation.

**⚠️**** ANTI-PATTERN #7: Centralized Everything**

**DON'T**: Force all data and processing through single central system.

**WHY IT FAILS**:

Single point of failure

Performance bottleneck

Difficult to scale

Privacy concerns (all data in one place)

**DO INSTEAD**:

Distributed architecture where appropriate

Federated data (data stays at source)

Edge processing for real-time needs

Central aggregation for analytics only

Load balancing and redundancy

**Estonia Model**: X-Road federated approach, data distributed across providers.

**⚠️**** ANTI-PATTERN #8: Ignoring Legal Foundation**

**DON'T**: Start technical build before legal framework ready.

**WHY IT FAILS**:

Legal obstacles block deployment

Costly rework to comply with late legal changes

Delays and frustration

**DO INSTEAD**:

Legal analysis and reforms in parallel with technical planning

Engage legal experts early

Address consent, authentication, data protection, professional liability

Pass necessary legislation BEFORE deployment

**Progressa Approach**: Comprehensive legal gap analysis upfront, reforms in parallel with technical work.

**⚠️**** ANTI-PATTERN #9: Neglecting Interoperability Testing**

**DON'T**: Assume standards compliance means systems will interoperate.

**WHY IT FAILS**:

Standards have optionality and ambiguity

Vendors interpret standards differently

Integration failures discovered too late

**DO INSTEAD**:

Conformance testing early and often

Connectathons with vendors

Certification programs for vendors

Test data and reference implementations

IHE profiles for specific use cases

**⚠️**** ANTI-PATTERN #10: No Sustainability Plan**

**DON'T**: Focus on initial deployment without plan for long-term operation.

**WHY IT FAILS**:

Initial donor funding runs out

No budget for maintenance and support

System deteriorates and eventually fails

User abandonment

**DO INSTEAD**:

Sustainability planning from inception

Clear funding model (public budget, insurance fees, transaction fees)

In-country capacity building (not dependent on vendors)

Technology refresh cycles planned

Continuous improvement budget

**Progressa Challenge**: 5-year maintenance period included, but long-term sustainability plan critical.

**2. LEGAL & GOVERNANCE FRAMEWORK**

**2.1 Legal Foundation**

**Overview**

A comprehensive legal and regulatory framework is the foundation upon which all digital health systems are built. Without clear legal authority and patient rights definitions, technical capabilities cannot be fully utilized, and adoption will be hampered by legal uncertainty.

**Key Principle**: Legal framework development should proceed in parallel with (or preferably before) technical development. Progressa's upfront legal gap analysis demonstrates this best practice, identifying obstacles before they block implementation.

**2.1.1 Universal Legal Requirements**

These legal provisions are essential regardless of country context, healthcare system, or economic status:

**Requirement 1: Legal Basis for EHR Systems**

**Purpose**: Establish the legal authority and mandate for electronic health record systems to exist and operate.

**Essential Elements:**

Definition of what constitutes an EHR and digital health platform

Legal authority for the system operator (ministry, e-health agency, or other entity)

Mandate for healthcare providers to contribute data

Data retention requirements and timelines

System governance and oversight mechanisms

**Implementation Guidance:**

Can be standalone EHR law or section within health services legislation

Must define scope: national vs. regional, public vs. private facilities

Should specify mandatory vs. voluntary participation

Must address both current state and future evolution

**Estonia Example**: Health Services Organisation Act establishes requirement for maintaining records using classifications, directories, and address details prescribed in State Information Systems. Regulation No. 53 defines data compositions and submission procedures.

**Progressa Gap**: Presidential decrees on health digitisation establish DHP development but comprehensive EHR law needed. The current national health law has significant gaps and outdated provisions.

**Requirement 2: Patient Rights (Access, Correction, Deletion, Portability)**

**Purpose**: Establish fundamental patient rights over personal health data, aligning with international best practices (EU GDPR, WHO guidelines).

**Essential Rights:**

**Right to Access**: Patients can view their complete EHR online, not just upon request

**Implementation**: Patient portal with full EHR visibility

**Timeline**: Real-time or near-real-time access (within seconds/minutes, not days)

**Format**: Patient-friendly visualizations, not just raw medical data

**Right to Know Who Accessed Data**: Transparency about all access to personal health records

**Implementation**: Access audit logs visible in patient portal

**Detail Level**: Who accessed (name/role), when, what data, for what purpose

**Estonia Example**: "Who viewed my data" feature builds patient trust

**Right to Correction**: Patients can request corrections to inaccurate data

**Implementation**: Correction request workflow with professional review

**Note**: Clinical judgments remain professional prerogative, but factual errors (demographics, allergies) correctable

**Right to Data Portability**: Patients can download/transfer their health data

**Implementation**: Export in standard formats (FHIR JSON/XML, PDF)

**Use Cases**: Switching providers, second opinions, personal records, research participation

**Right to Restrict Access**: Patients can limit who accesses their data (with exceptions)

**Implementation**: Consent management tools in patient portal

**Exceptions**: Emergency care, legal requirements, public health mandates

**Progressa Gap**: Currently unclear; needs explicit legal provision

**Right to Delete/Right to be Forgotten**: Patients can request data deletion (with limitations)

**Limitations**: Legal retention requirements, public health needs, research commitments

**Implementation**: Logical deletion (marking as deleted) vs. physical deletion

**Balancing Act**: Patient rights must be balanced with:

Healthcare professional need for complete information for safe treatment

Public health surveillance requirements

Legal retention obligations

Research and innovation needs

**Implementation Template**:

Article X: Patient Rights in Digital Health


1. Every patient has the right to access their complete electronic health record 

   through a secure digital portal without delay.


2. Every patient has the right to view a log of all access to their health 

   records, including the identity of the accessor, date, time, and purpose.


3. Every patient has the right to request correction of inaccurate factual 

   information in their health record, subject to professional review.


4. Every patient has the right to download their health record in a standard, 

   machine-readable format for personal use or transfer to another provider.


5. Every patient has the right to restrict access to their health record, except:

   a. In medical emergencies where inability to access data would harm patient

   b. When required by law (court orders, public health mandates)

   c. For anonymous public health surveillance and research


6. Patients may request deletion of personal health data after the legal minimum 

   retention period, except data required for ongoing treatment, public health 

   surveillance, or de-identified research.

**Requirement 3: Healthcare Professional Authentication Requirements**

**Purpose**: Ensure only authorized healthcare professionals access patient data, with appropriate identification for accountability.

**Essential Elements:**

**Strong Authentication Methods**:

**Avoid**: Password-only authentication (high vulnerability)

**Preferred**: Multi-factor authentication 

Something you have: ID-card, smart card, Mobile-ID, hardware token

Something you are: Biometrics (fingerprint, facial recognition)

Something you know: PIN/password (as second factor only)

**Professional Credentials Verification**:

Integration with national healthcare professional registry

Verification of active licenses and credentials

Role-based access tied to professional qualifications

**Digital Signatures**:

Legal validity of electronic signatures on clinical documents

Non-repudiation: professional cannot deny signing

Timestamp and tamper protection

**Purpose Documentation**:

Professionals indicate reason for accessing patient data

Treatment, payment, healthcare operations, research, etc.

Enables purpose-based access control and auditing

**Estonia Example**: Secure authentication with ID-card or Mobile-ID (99% penetration). Digital signing/stamping of all medical documents. Professionals' actions monitored with organizational and technical countermeasures.

**Progressa Requirement**: Reliable mechanisms for identification and authentication. Professional rights and qualifications used for role-based access control. Recommendation: Implement national electronic identification scheme (following EU eIDAS model) rather than password-based authentication.

**Implementation Guidance**:

National ID infrastructure provides foundation (if available)

Healthcare-specific credentials layer on top

Mobile-ID solutions for convenient authentication

Biometrics for point-of-care access (emergency departments)

Regular credential review and revocation processes

**Requirement 4: Data Protection and Security Obligations**

**Purpose**: Establish comprehensive data protection requirements aligned with international standards (EU GDPR, WHO guidelines, ISO 27001).

**Essential Elements:**

**Data Protection Principles**:

**Lawfulness**: Legal basis for all data processing

**Purpose Limitation**: Data used only for stated purposes

**Data Minimization**: Collect only what's necessary

**Accuracy**: Ensure data is correct and current

**Storage Limitation**: Retain only as long as needed

**Integrity and Confidentiality**: Protect against unauthorized access

**Accountability**: Controllers responsible for compliance

**Security Requirements**:

**Encryption**: Data at rest (AES-256) and in transit (TLS 1.3+)

**Access Controls**: Role-based with least privilege principle

**Audit Logging**: Comprehensive logging of all access and modifications

**Security Testing**: Regular penetration testing and vulnerability assessments

**Incident Response**: Procedures for breach detection and response

**Physical Security**: Data center access controls

**Security Level Classification**:

**Progressa Approach**: ISKE security level (based on German IT-Grundschutz)

Three-tier system: Low (L), Medium (M), High (H)

Based on confidentiality, integrity, and availability requirements

Health data typically requires High (H) security level

**Data Processing Agreements**:

Clear contracts between data controllers and processors

Vendor security requirements and audits

Data location and transfer restrictions

Subprocessor approval requirements

**Breach Notification**:

Obligation to notify authorities within 72 hours (GDPR standard)

Patient notification when rights significantly affected

Breach assessment and mitigation procedures

Public disclosure requirements for significant breaches

**Implementation Template - Security Requirements**:

Article Y: Data Protection and Security


1. The [Digital Health Platform] shall implement security measures appropriate 

   to the high sensitivity of health data, including at minimum:

   a. AES-256 encryption for all data at rest

   b. TLS 1.3 or higher for all data in transit

   c. Multi-factor authentication for all user access

   d. Role-based access control based on professional credentials

   e. Comprehensive audit logging of all data access and modifications


2. All access to patient health data must be logged, including:

   a. Identity of the person accessing data

   b. Identity of the patient whose data was accessed

   c. Categories of data accessed

   d. Date and time of access

   e. Purpose of access


3. The operator shall conduct annual security audits and regular penetration 

   testing by independent third parties.


4. In case of data breach affecting patient data:

   a. The authority shall be notified within 72 hours

   b. Affected patients shall be notified without undue delay

   c. Breach assessment and mitigation shall be documented

   d. Public disclosure required if breach affects >1000 patients


5. Vendors and contractors processing health data shall:

   a. Meet the same security requirements as the primary operator

   b. Submit to regular security audits

   c. Maintain separate data processing agreements

   d. Process data only within authorized jurisdictions

**Requirement 5: Cross-Border Data Sharing Frameworks**

**Purpose**: Enable international health data exchange for medical tourism, cross-border care, emergency treatment, and research collaboration while protecting patient privacy.

**Essential Elements:**

**Adequacy Assessment**:

Determine which countries have adequate data protection

Basis for allowing data transfers

Regular review and updates

**International Agreements**:

Bilateral or multilateral health data sharing agreements

EU example: eIDAS for authentication, eHDSI for health data exchange

WHO frameworks and guidelines

Standard contractual clauses for data transfers

**Patient Consent**:

Explicit consent for cross-border data sharing (or clear opt-out)

Patient information about cross-border sharing

Consent withdrawal mechanisms

**Technical Standards**:

International Patient Summary (IPS) based on HL7 FHIR

ePrescription exchange using standardized formats

Secure transmission protocols

Translation of terminologies

**National Contact Point**:

Designated authority for international requests

Secure infrastructure for cross-border exchange

Query routing and response coordination

Audit and compliance monitoring

**Estonia Example**: Active participant in epSOS (now eHDSI). Cross-border Patient Summary and ePrescription exchange operational with EU countries. National Contact Point implemented. eIDAS authentication accepted.

**Implementation Progression**:

**Level 1**: Bilateral agreements with neighboring countries

**Level 2**: Regional integration (EU eHDSI, ASEAN, etc.)

**Level 3**: Global frameworks (WHO, ISO standards)

**2.1.2 Localization Guidance**

While universal requirements provide foundation, implementation must adapt to local context:

**Adapting Consent Models to Cultural Contexts**

**Opt-Out vs. Opt-In Models:**

**Opt-Out (Presumed Consent) Model:**

**Principle**: Health data shared by default for treatment purposes; patients can opt-out

**Benefits**:

Better care coordination (professionals have complete information)

Higher system adoption and data completeness

Fewer medical errors from missing information

Improved public health surveillance

Better research data availability

**Requirements**:

Comprehensive patient education about data sharing

Easy-to-use opt-out mechanisms

Transparency through access audit logs

Strong security and privacy protections

Clear exceptions (emergency care access even if opted-out)

**Countries Using**: Estonia, Denmark, Finland, Norway, Luxembourg, Poland, Australia, New Zealand

**OECD Research**: Opt-out systems achieve 90-95% data sharing rates vs. 30-50% for opt-in, significantly improving care coordination without harming patient trust when implemented with transparency.

**Opt-In (Explicit Consent) Model:**

**Principle**: Patient must explicitly consent before health data shared

**Benefits**:

Maximum patient control and privacy

Aligns with stronger cultural privacy expectations

Lower legal risk in jurisdictions without comprehensive data protection laws

**Challenges**:

Lower adoption rates (30-50% typical)

Incomplete patient records for treating professionals

Increased medical errors from missing information

Higher administrative burden for consent management

Reduced public health surveillance capability

**Countries Using**: Germany, Switzerland, United States (varies by state)

**Recommendation**: Most countries implementing new national EHR systems should adopt opt-out model with strong transparency (patient access logs) following EU best practices. Opt-in creates significant barriers to effective care coordination.

**Progressa Context**: Currently requires explicit consent. Analysis recommends shift to opt-out with transparent access logging and patient education programs. Phased implementation: start with opt-in during pilot, transition to opt-out for national rollout as trust builds.

**Medical Secrecy vs. Care Coordination Balance**

**Challenge**: How to balance traditional medical secrecy principles with modern care coordination needs?

**Traditional Medical Secrecy**:

Doctor-patient confidentiality is sacred

Information shared only with patient explicit permission

Strong cultural/ethical foundation in many countries

**Modern Care Coordination Needs**:

Average patient sees 5-7 different healthcare providers annually

Complex chronic diseases require multidisciplinary teams

Care transitions (hospital to primary care) are high-risk without information sharing

Emergency care requires immediate access to patient history

**Resolution Strategies**:

**Purpose-Based Access Control**:

Data shared automatically for treatment purposes

Explicit consent for other purposes (research, quality improvement, administrative)

Patient can see and control purposes

**Break-the-Glass for Emergencies**:

Emergency access overrides normal restrictions

Enhanced audit logging for emergency access

Professional accountability for inappropriate use

Post-event review and justification

**Tiered Sensitivity**:

General health data: opt-out sharing

Highly sensitive data: opt-in sharing (mental health, HIV, substance abuse, genetics)

Patient defines sensitivity levels

**Transparency and Accountability**:

Comprehensive access logging visible to patients

Investigation of unusual access patterns

Professional disciplinary procedures for privacy violations

Patient notification of access (optional, configurable)

**Estonia Example**: Broad data sharing for treatment purposes with comprehensive audit logging. Patients can see who accessed their data. Professional sanctions for inappropriate access. Balance achieved through transparency rather than restriction.

**Professional Liability in Digital Environments**

**New Legal Questions**:

Is professional liable if they don't access available EHR data and miss critical information?

Is professional liable if system is down and they proceed with incomplete information?

How do telemedicine consultations affect liability compared to in-person care?

Are clinical decision support alerts mandatory to follow or just advisory?

**Legal Provisions Needed**:

**Duty to Access**:

Professionals expected to review available EHR data before treatment

Liability if foreseeable harm results from not checking available records

Exception: Emergency situations where delay would cause harm

**System Availability**:

Operator liable for system downtime (SLA requirements)

Professional not liable if system unavailable despite reasonable efforts

Backup procedures documented for system outages

**Clinical Decision Support**:

Alerts are advisory, not mandatory

Professional can override with documentation

Liability shared between professional (clinical judgment) and system (alert accuracy)

**Telemedicine Liability**:

Same standards as in-person care

Documentation requirements for remote consultations

Technical requirements (video quality, connectivity) for different care types

Limitations clearly communicated to patients

**Data Quality**:

Professionals responsible for accuracy of data they enter

Corrections to errors entered by others follow documented process

System operator ensures data integrity and availability

**Reimbursement and Billing Regulations**

**Integration Requirements**:

Claims data flows from EHR to payer automatically

Diagnosis codes (ICD-11) and procedure codes standardized

Medication dispensing recorded for reimbursement

Pre-authorization workflows integrated

**Value-Based Payment Support**:

Quality metrics captured in EHR automatically

Outcomes tracking for performance-based contracts

Population health measures for capitation models

Patient satisfaction integrated with clinical data


**2.1.3 Legal Maturity Roadmap**

Countries should sequence legal reforms to align with technical implementation:

**Phase 1: Foundation (Months 0-12) - Basic EHR Legislation and Patient Rights**

**Legal Priorities:**

**EHR System Legal Basis**:

Law or decree establishing digital health platform

Authority and governance structure

Mandatory vs. voluntary participation

**Patient Rights Foundation**:

Right to access own health data

Right to know who accessed data

Basic data protection principles

**Healthcare Professional Requirements**:

Authentication mechanisms required

Digital signature validity

Professional registry integration

**Data Protection Basics**:

Encryption requirements

Audit logging mandates

Breach notification procedures

**Initial Consent Model**:

Define opt-in or opt-out approach

Consent management procedures

Emergency access exceptions

**Deliverables:**

Draft EHR legislation

Patient rights decree

Data protection regulations

Healthcare professional authentication requirements

**Progressa Example - Legal Gaps Identified**:

No specific DHP law (only presidential decrees)

EHRs not shared by default (patients must request)

Explicit consent required (recommend shift to opt-out)

Patient rights unclear (access only upon request)

Authentication methods undefined

Logging requirements absent

Restriction mechanisms unclear

**Phase 2: Expansion (Months 12-36) - ePrescription, Telemedicine, Cross-Border**

**Legal Priorities:**

**ePrescription Legal Framework**:

Electronic prescriptions legally equivalent to paper

Controlled substance prescribing rules

Dispensing without paper requirement

Cross-pharmacy prescription access

Prescription monitoring programs

**Telemedicine Regulations**:

Definition of telemedicine services

Provider licensing across jurisdictions

Reimbursement parity with in-person care

Informed consent for remote consultations

Patient safety requirements (appropriate use cases)

Technology standards (connectivity, video quality)

**Cross-Border Data Sharing**:

International agreements framework

Patient summary exchange rules

ePrescription recognition from other countries

Data protection adequacy assessments

National contact point designation

**Refined Consent and Privacy**:

Tiered consent for different purposes

Highly sensitive data (mental health, HIV) special protections

Research use of health data

Commercial use restrictions and requirements

**Professional Liability Refinement**:

Duty to access EHR data clarified

Clinical decision support alert obligations

Telemedicine liability standards

Documentation requirements updated

**Deliverables:**

ePrescription law or regulations

Telemedicine framework law

Cross-border data sharing agreements

Updated consent management regulations

Professional liability guidance

**Phase 3: Advanced (Months 36+) - AI/ML, Personalized Medicine, Data Economy**

**Legal Priorities:**

**AI/ML in Healthcare**:

Software as Medical Device (SaMD) regulations

Algorithm transparency and explainability requirements

Liability for AI-assisted decisions

Clinical validation requirements for AI

Continuous monitoring and performance requirements

Bias detection and mitigation mandates

**Genomics and Precision Medicine**:

Genetic data special protections

Genetic discrimination prohibitions

Genetic counseling requirements

Family member implications (genetic data affects relatives)

Genomic research consent

DTC genetic testing integration

**Health Data Economy**:

Secondary use of health data framework

Commercial use permissions and restrictions

Data de-identification standards

Patient compensation for data use

Research access procedures

Data marketplace regulations

**IoT and Wearables**:

Medical device vs. wellness device classification

Data quality and reliability standards

Integration with EHR regulations

Continuous monitoring protocols

Patient-generated health data status

**Advanced Cross-Border**:

Mutual recognition agreements

Prescription portability internationally

Medical tourism patient data flows

International research collaborations

Global health surveillance participation

**Deliverables:**

AI/ML in healthcare regulations

Genomic data protection law

Health data economy framework

IoT/wearables integration standards

Advanced cross-border agreements

**2.1.4 Reference Implementations - Legal Frameworks**

**Estonia Legal Framework Evolution**:

**Foundation (1990s-2000s):**

Digital Signatures Act (2000): Legal validity of electronic signatures

Personal Data Protection Act (1996, updated): Data protection framework

Health Services Organisation Act: Requirements for health records using standard classifications

**Expansion (2000s-2010s):**

Medicinal Products Act: ePrescription legal basis

Health Insurance Act: Reimbursement and claims processing

Regulation No. 53: Data compositions for Health Information System submission

**Current Challenges:**

Documentation purposes and forms outdated

Legislative process slow for new solutions

Need for event-based architecture legal support (vs. document-based)

**Strengths:**

Comprehensive digital signature framework

Clear data protection aligned with EU GDPR

Strong patient rights implementation

Cross-border agreements operational

**Progressa Legal Analysis and Recommendations**:

**Current State (2023):**

The national health law: Outdated, significant gaps

The personal data protection law: Basic data protection

Presidential decrees on health digitisation: DHP development mandate but not comprehensive

Gaps: No specific EHR law, unclear consent model, missing authentication requirements, no logging requirements

**Comprehensive Recommendations Developed:**

New section in the national health law specifically for DHP

Regulation for DHP functioning (government approval)

Decree on conditions and procedures for health data submission

Shift from opt-in to opt-out consent model

Patient data restriction mechanisms

Healthcare professional authentication requirements

Comprehensive audit logging mandates

Cross-border data sharing framework

**Lessons from Legal Analysis:**

Upfront comprehensive legal gap analysis prevents implementation obstacles

International best practices (EU GDPR, WHO guidelines) provide solid foundation

Opt-out consent model significantly improves system effectiveness

Authentication standards prevent security vulnerabilities

Patient transparency (access logs) builds trust and is legally required in advanced jurisdictions

**2.2 Governance Framework**

**Overview**

Governance provides the organizational structures, processes, and accountability mechanisms that ensure the e-health ecosystem operates effectively, evolves appropriately, and serves stakeholder needs. Strong governance is as critical as technical architecture.

**Key Principle**: Governance must balance centralized coordination with distributed authority. Over-centralization stifles innovation; under-centralization creates fragmentation.

**2.2.1 National Governance Structures**

**Model 1: Dedicated E-Health Agency (Estonia Historical Model)**

**Structure:**

**E-Health Foundation** (2005-2022): Independent legal entity

**Mandate**: Operate national health information systems

**Governance**: Board with Ministry of Health, Health Insurance Fund, patient representatives, professional associations

**Evolution**: Consolidated into TEHIK (Health and Welfare Information Systems Centre) in 2022

**Strengths:**

Clear accountability and focus

Ability to hire specialized talent

Flexible operations outside government bureaucracy

Multi-stakeholder representation in governance

**Challenges:**

Coordination with ministry and other agencies

Potential for conflicting priorities

Dependency on government funding despite independence

**When to Use**: Mature implementations with stable funding and need for operational flexibility

**Model 2: Ministry Department (Progressa Model)**

**Structure:**

**Digital Health Management Unit (DHMU)** within Ministry of Health

**Mandate**: Strategic oversight, governance, policy development

**Operator**: the national unified IT integrator (a state-owned company) - separate operational entity

**Funding**: Government budget + development-bank funding

**Strengths:**

Direct alignment with health policy

Clear ministerial accountability

Easier integration with health system reform

Strong political backing

**Challenges:**

Potential bureaucratic constraints

Slower decision-making

Talent acquisition limitations (government pay scales)

Political changes affect continuity

**When to Use**: New implementations needing strong political support and health system integration

**Model 3: Hybrid Governance-Operations Split**

**Structure:**

**Governance**: Ministry of Health or independent board

**Operations**: Separate agency, foundation, or private operator

**Separation**: Strategic direction vs. operational delivery

**Example**: Progressa's DHMU (governance) + the national IT integrator (operations)

**Strengths:**

Combines political accountability with operational flexibility

Allows specialized operational expertise

Risk distribution

Potential for public-private partnerships

**Challenges:**

Coordination complexity

Contract management overhead

Potential for misalignment

**When to Use**: Countries seeking to balance political oversight with operational agility

**2.2.2 Multi-Stakeholder Governance Boards**

**Purpose**: Ensure all stakeholder perspectives inform strategic decisions and build broad support.

**Recommended Board Structure:**

**Strategic Board (Senior Level)**:

**Chair**: Secretary of State for Health or equivalent

**Members**:

Representatives from Ministry of Health (2-3 members)

Health Insurance Fund director

Medical Association president

Nursing Association representative

Patient organization representative

Hospital Association representative

Primary Care Association representative

Technology sector representative

Academic/research representative

**Mandate**:

Approve strategic roadmap and major changes

Resolve stakeholder conflicts

Allocate major resources

Approve legal and regulatory recommendations

Review performance against national health goals

**Meeting Frequency**: Quarterly

**Technical Advisory Board**:

**Chair**: Chief Technology Officer or Chief Medical Information Officer

**Members**:

Technical architects (3-4)

Clinical informaticists (2-3)

Information security officer

Standards experts

Vendor representatives (rotating)

Academic researchers

International experts (advisory)

**Mandate**:

Technical architecture decisions

Standards adoption and profiles

Security requirements and audits

Interoperability testing and certification

Technology evaluation and selection

**Meeting Frequency**: Monthly or as needed

**Clinical Advisory Board**:

**Chair**: Chief Medical Officer

**Members**:

Physicians from various specialties (5-7)

Nurses (2-3)

Pharmacists (2)

Allied health professionals (2-3)

Patient representatives (2)

**Mandate**:

Clinical workflow design

Usability requirements

Clinical decision support content

Training program design

Provider adoption strategies

**Meeting Frequency**: Bi-monthly

**2.2.3 Standards and Terminology Governance**

**Critical Function**: Standards governance ensures consistency, quality, and evolution of technical standards and clinical terminologies.

**National Terminology Authority**

**Structure:**

**Authority Type**: Board or designated organization

**Mandate**: Oversee adoption, translation, maintenance of all clinical terminologies

**Members**: 

Clinical subject matter experts by domain

Medical coding specialists

Terminology/ontology specialists

Information technology representatives

Ministry of Health representative

**Responsibilities:**

**Standards Selection**:

Evaluate international standards for national adoption

Assess maturity, licensing, cost, translation needs

Recommend adoption to governance board

**Translation and Localization**:

Manage translation of SNOMED CT, LOINC, ICD-11, etc.

Ensure cultural appropriateness and clinical accuracy

Quality assurance of translations

Synchronization with international updates

**National Extensions**:

Define national extension concepts when international standards insufficient

Follow standard extension procedures (SNOMED CT National Release Centre, LOINC regional extensions)

Maintain national code sets

**Value Set Management**:

Define value sets for data entry validation

Approve institutional value set requests

Ensure consistency across applications

**Maintenance and Updates**:

Regular updates synchronized with international releases

Deprecation management for outdated codes

Communication of changes to stakeholders

**Estonia Example**: EE LOINC codes for laboratory services, terminology harmonization with international standards, uniform terminology requirements across health information systems.

**Progressa Requirements**: Terminology server managing SNOMED CT, LOINC, ICD-11, ATC, ICF, Orphanet, UCUM, HL7 THO. Translation into the local language and English. Standards Publishing Center for dissemination.

**Update Cycles:**

**Major releases**: Annually (SNOMED CT International Edition, ICD-11 updates)

**Minor updates**: Quarterly or as needed

**Critical fixes**: Immediate deployment

**Stakeholder Involvement:**

Clinical specialty representatives propose new concepts

Public comment periods for major changes

Vendor notification of upcoming changes

Training materials updated with releases

**2.2.4 Data Governance**

**Purpose**: Ensure health data is accurate, complete, timely, secure, and used appropriately throughout its lifecycle.

**Data Quality Management**

**Dimensions of Data Quality:**

**Completeness**: All required data elements present

**Accuracy**: Data correctly represents reality

**Timeliness**: Data available when needed for decision-making

**Consistency**: Data values consistent within and across systems

**Validity**: Data conforms to defined formats and value sets

**Uniqueness**: No duplicate patient or provider records

**Data Quality Monitoring:**

Automated data quality checks at entry and integration points

Regular data quality reports to healthcare facilities

Benchmarking and peer comparison

Data quality improvement programs

Consequences for persistently poor data quality

**Data Quality Rules Examples:**

Required fields enforcement (demographics, allergies, medications)

Format validation (dates, measurements with units)

Range checking (vital signs, lab values)

Terminology binding (diagnosis codes from ICD-11 value set)

Cross-field validation (pregnancy status consistent with gender)

Temporal validation (medication end date after start date)

**Data Stewardship**

**Data Steward Roles:**

**Domain Stewards**: Responsible for data quality in specific domains (medications, lab results, imaging)

**Institutional Stewards**: Responsible for data quality from their institution

**National Steward**: Overall data quality oversight

**Responsibilities:**

Define and enforce data quality standards

Investigate and resolve data quality issues

Approve data model changes

Manage master data (patients, providers, facilities)

Coordinate data cleansing initiatives

**Master Data Management**

**Patient Master Index (EMPI)**:

**Challenge**: Link patient records across facilities and time despite name changes, data entry errors, duplicate registrations

**Solution**: Probabilistic matching algorithms with manual review

**Governance**: Clear procedures for merging duplicates, splitting incorrectly merged records

**Data Quality**: Regular duplicate detection and resolution

**Provider Directory**:

**Purpose**: Authoritative list of all healthcare professionals

**Source**: Healthcare professional registry / licensing authority

**Maintenance**: Regular updates, credential verification, status changes

**Attributes**: Name, credentials, specialties, practice locations, contact information, active/inactive status

**Facility Registry**:

**Purpose**: All healthcare facilities (hospitals, clinics, pharmacies, labs, imaging centers)

**Attributes**: Name, type, services offered, contact information, geographic location, accreditation status

**Maintenance**: Annual updates, change notifications

**2.2.5 Data Lifecycle Policies**

**Data Retention:**

**Clinical Data:**

**Active Records**: Patient alive and receiving care - indefinite retention

**Inactive Patients**: 10-30 years after last contact (varies by jurisdiction)

**Deceased Patients**: 10-30 years after death

**Minors**: Until age of majority + retention period

**Administrative Data:**

**Billing/Claims**: 7-10 years (tax and audit requirements)

**Audit Logs**: 7-10 years minimum (legal investigation period)

**Consent Records**: Duration of data retention + 1 year

**Research Data:**

**De-identified Data**: Retention per research protocol and ethics approval

**Identified Research Data**: Destroyed after de-identification unless long-term follow-up required

**Archival and Disposal:**

**Archival**: Move inactive records to lower-cost storage while maintaining accessibility

**Secure Disposal**: Certified data destruction after retention period expires

**Legal Holds**: Suspension of disposal when legal proceedings pending

**2.2.6 Secondary Use and Research Governance**

**Purpose**: Enable appropriate use of health data for research, quality improvement, and innovation while protecting patient privacy.

**Research Access Framework:**

**Level 1: Aggregate Statistics (No Patient-Level Data)**

**Access**: Public dashboards, published reports

**Approval**: None required (data already public)

**Examples**: Disease prevalence, vaccination rates, health system utilization

**Level 2: De-identified Data**

**Access**: Researchers with approved protocol

**Approval**: Ethics committee, data access committee

**Protection**: Data de-identified following HIPAA Safe Harbor or similar standards

**Examples**: Epidemiological research, health services research, algorithm development

**Level 3: Pseudonymized Data**

**Access**: Researchers requiring linkage across time/datasets but not patient identity

**Approval**: Ethics committee, data access committee, legal review

**Protection**: Reversible pseudonyms, secure environment, strict access controls

**Examples**: Longitudinal outcomes research, rare disease research

**Level 4: Identified Data**

**Access**: Extremely restricted, specific compelling need

**Approval**: Ethics committee, data access committee, legal review, patient consent (typically)

**Protection**: Secure research environment, comprehensive audit logging, data use agreements

**Examples**: Precision medicine studies requiring patient contact, clinical trials recruitment

**Research Data Access Committee:**

**Composition**: Clinicians, researchers, ethicists, patient representatives, data protection officer, legal counsel

**Mandate**: Review research proposals, assess risks and benefits, enforce data protection requirements

**Process**: Formal application, ethics review, data access agreement, researcher training, audit monitoring

**Data Use Agreements:**

Specific research question and approved protocol

Data minimization (only requested variables)

Prohibition on re-identification attempts

Secure environment requirements

Output review (preventing inadvertent disclosure)

Data destruction after research completion

Publication requirements (acknowledgment, data availability statements)

**2.2.7 Decision-Making Framework**

**Strategic Decisions** (Requiring Board Approval):

National health information system strategy and roadmap

Major service launches or discontinuations

Significant architecture changes

International agreements and cross-border participation

Major vendor contracts (>1M EUR)

Legal and regulatory framework changes

Fee structures or funding model changes

**Operational Decisions** (Executive Authority):

Day-to-day service operations

Incident management and response

Minor feature enhancements

Routine maintenance and updates

Tactical resource allocation within approved budget

Vendor relationship management (existing contracts)

Performance monitoring and optimization

**Technical Decisions** (Technical Advisory Board):

Standards adoption and profiles

Technology platform selections (within architecture)

Security controls implementation

Interoperability testing and certification

Development methodology and tools

Infrastructure scaling and optimization

**Clinical Decisions** (Clinical Advisory Board):

Clinical workflow design

Clinical decision support content and rules

Data quality requirements from clinical perspective

Training content for healthcare professionals

Usability requirements

**Escalation Paths:**

Operational issues → Executive → Strategic Board (if major impact or policy change)

Technical issues → Technical Advisory Board → Executive → Strategic Board (if strategic)

Clinical workflow issues → Clinical Advisory Board → Executive

Cross-cutting issues → Joint committee meetings

**Decision Documentation:**

All major decisions documented with rationale

Architecture Decision Records (ADRs) for technical decisions

Meeting minutes and action items

Decision review and update processes

**2.3 Compliance Checklist**

**Purpose**

This checklist enables countries to assess their legal and regulatory readiness for national e-health implementation. Use it to identify gaps and prioritize legal reforms.

**How to Use This Checklist**

**Scoring**: For each item, rate your country's status:

✅ **Complete (3 points)**: Comprehensive provisions in place and enforced

🟡 **Partial (2 points)**: Some provisions exist but gaps or weak enforcement

🟠 **In Progress (1 point)**: Draft legislation or regulations under development

❌ **Missing (0 points)**: No provisions exist

**Interpretation:**

**80-100%**: Strong legal foundation, ready for advanced implementation

**60-79%**: Adequate foundation, address gaps during implementation

**40-59%**: Significant gaps, legal reforms needed before national rollout

**<40%**: Comprehensive legal framework development required


**SECTION 1: FOUNDATIONAL LEGAL FRAMEWORK (30 points possible)**

**1.1 EHR System Legal Basis** (9 points)

□ [ ] Specific legislation or decree establishing national EHR/digital health platform exists
□ [ ] System operator legally designated with clear mandate
□ [ ] Healthcare provider participation requirements defined (mandatory vs. voluntary)
□ [ ] Data retention periods specified
□ [ ] Governance and oversight mechanisms established
□ [ ] Penalties for non-compliance defined
□ [ ] Future evolution path considered in legislation
□ [ ] Private healthcare facility integration requirements included
□ [ ] Budget allocation and funding mechanism legally established

**Score: ____ / 9**

**1.2 Patient Rights** (12 points)

□ [ ] Right to access personal EHR legally established
□ [ ] Right to view access audit logs ("who accessed my data")
□ [ ] Right to correction of inaccurate data
□ [ ] Right to data portability (download/transfer)
□ [ ] Right to restrict access (with exceptions defined)
□ [ ] Right to deletion/be forgotten (with limitations defined)
□ [ ] Consent model clearly defined (opt-in or opt-out)
□ [ ] Patient education and information requirements
□ [ ] Complaint and redress mechanisms
□ [ ] Special protections for vulnerable populations (children, incapacitated)
□ [ ] Patient proxy/representative access rights
□ [ ] Emergency access overrides defined

**Score: ____ / 12**

**1.3 Data Protection Framework** (9 points)

□ [ ] Comprehensive data protection law aligned with international standards (GDPR-equivalent)
□ [ ] Health data classified as special category requiring enhanced protection
□ [ ] Data protection authority established and operational
□ [ ] Data protection principles legally enshrined (lawfulness, purpose limitation, minimization, etc.)
□ [ ] Data controller and processor responsibilities defined
□ [ ] Breach notification requirements (timeline, scope, procedures)
□ [ ] Patient notification requirements for breaches
□ [ ] Regular data protection impact assessments required
□ [ ] International data transfer restrictions and adequacy mechanisms

**Score: ____ / 9**

**SECTION 1 TOTAL: ____ / 30** (____%)


**SECTION 2: AUTHENTICATION & SECURITY (24 points possible)**

**2.1 Healthcare Professional Authentication** (8 points)

□ [ ] Strong authentication methods required (beyond passwords)
□ [ ] Multi-factor authentication required for healthcare professionals
□ [ ] National ID infrastructure integration specified
□ [ ] Digital signature legal validity established
□ [ ] Professional credential verification required
□ [ ] Role-based access control mandated
□ [ ] Purpose documentation required for data access
□ [ ] Emergency access ("break-the-glass") procedures defined

**Score: ____ / 8**

**2.2 Security Requirements** (10 points)

□ [ ] Security level classification system defined (e.g., ISKE, ISO 27001)
□ [ ] Encryption requirements (data at rest and in transit) specified
□ [ ] Audit logging requirements comprehensive (who, what, when, why)
□ [ ] Patient access to audit logs legally required
□ [ ] Security testing and audits mandated (frequency, scope)
□ [ ] Penetration testing requirements
□ [ ] Incident response procedures required
□ [ ] Security awareness training mandated
□ [ ] Physical security requirements for data centers
□ [ ] Vendor security requirements and audits specified

**Score: ____ / 10**

**2.3 Privacy Protections** (6 points)

□ [ ] Purpose-based access control required
□ [ ] Minimum necessary data access principle
□ [ ] Pseudonymization/anonymization for analytics and research
□ [ ] Privacy impact assessments required for new services
□ [ ] Privacy by design principles legally mandated
□ [ ] Data protection officer required

**Score: ____ / 6**

**SECTION 2 TOTAL: ____ / 24** (____%)


**SECTION 3: SERVICE-SPECIFIC LEGAL FRAMEWORKS (21 points possible)**

**3.1 ePrescription** (7 points)

□ [ ] Electronic prescriptions legally equivalent to paper prescriptions
□ [ ] Dispensing without paper prescription authorized
□ [ ] Controlled substance ePrescription rules defined
□ [ ] Cross-pharmacy prescription access authorized
□ [ ] Prescription monitoring program legal basis
□ [ ] Pharmacist verification and dispensing procedures
□ [ ] Electronic prescription validity and expiration rules

**Score: ____ / 7**

**3.2 Telemedicine** (7 points)

□ [ ] Telemedicine definition and scope legally established
□ [ ] Provider licensing for remote consultations defined
□ [ ] Reimbursement parity with in-person care established
□ [ ] Informed consent requirements for telemedicine
□ [ ] Patient safety requirements and appropriate use cases
□ [ ] Technology standards (connectivity, video quality) defined
□ [ ] Cross-jurisdictional practice rules (if federal system)

**Score: ____ / 7**

**3.3 Cross-Border Health Data Exchange** (7 points)

□ [ ] Legal framework for cross-border data sharing
□ [ ] International agreements authorization
□ [ ] Adequacy assessment mechanism for other countries
□ [ ] Patient consent for cross-border sharing
□ [ ] National Contact Point designation
□ [ ] International Patient Summary and ePrescription exchange authority
□ [ ] Authentication mutual recognition (e.g., eIDAS)

**Score: ____ / 7**

**SECTION 3 TOTAL: ____ / 21** (____%)


**SECTION 4: GOVERNANCE & ACCOUNTABILITY (15 points possible)**

**4.1 Organizational Structure** (5 points)

□ [ ] National e-health authority or designated body legally established
□ [ ] Governance structure defined (board composition, decision rights)
□ [ ] Stakeholder representation in governance
□ [ ] Funding mechanism and budget allocation
□ [ ] Performance accountability and reporting requirements

**Score: ____ / 5**

**4.2 Standards Governance** (5 points)

□ [ ] Standards adoption authority designated
□ [ ] Mandatory vs. recommended standards distinction
□ [ ] Standards update and maintenance procedures
□ [ ] National extensions and profiles approval process
□ [ ] Terminology governance body established

**Score: ____ / 5**

**4.3 Enforcement and Penalties** (5 points)

□ [ ] Penalties for unauthorized access or misuse
□ [ ] Professional sanctions for privacy violations
□ [ ] Institutional penalties for non-compliance
□ [ ] Whistleblower protections
□ [ ] Appeal and dispute resolution mechanisms

**Score: ____ / 5**

**SECTION 4 TOTAL: ____ / 15** (____%)


**SECTION 5: ADVANCED PROVISIONS (10 points possible)**

**5.1 Research and Secondary Use** (5 points)

□ [ ] Framework for secondary use of health data
□ [ ] Research access procedures and approvals
□ [ ] De-identification standards
□ [ ] Data access committee requirements
□ [ ] Research data use agreements template

**Score: ____ / 5**

**5.2 Innovation and Emerging Technologies** (5 points)

□ [ ] AI/ML in healthcare regulatory framework
□ [ ] Software as Medical Device (SaMD) regulations
□ [ ] Genomic data special protections
□ [ ] IoT and wearables integration provisions
□ [ ] Health data economy framework (commercial use)

**Score: ____ / 5**

**SECTION 5 TOTAL: ____ / 10** (____%)


**OVERALL COMPLIANCE SCORE**

**TOTAL SCORE: ____ / 100** (____%)


**COMPLIANCE INTERPRETATION & RECOMMENDATIONS**

**Score 80-100% (Strong Foundation):**

✅ Your legal framework is comprehensive and aligned with international best practices

**Recommendations**: 

Maintain continuous review and updates as technology evolves

Monitor enforcement and compliance

Consider advanced provisions (AI/ML, genomics, data economy)

Share best practices internationally

**Score 60-79% (Adequate Foundation with Gaps):**

🟡 Your legal framework provides adequate foundation for implementation but has important gaps

**Recommendations**: 

Identify specific gaps from checklist

Prioritize gaps by implementation impact

Address critical gaps (patient rights, security) before national rollout

Plan for legal updates during implementation phases

Consider pilot implementation while addressing gaps

**Score 40-59% (Significant Gaps - Legal Reforms Needed):**

🟠 Significant legal framework development needed before comprehensive implementation

**Recommendations**: 

Conduct comprehensive legal gap analysis (use Progressa annex as template)

Engage legal experts and international consultants

Develop comprehensive EHR legislation package

Focus on foundational elements: EHR legal basis, patient rights, data protection, authentication

Plan 12-18 month legal reform process before major technical deployment

Consider limited pilot under existing legal authority while reforms proceed

**Score <40% (Comprehensive Legal Framework Development Required):**

❌ Comprehensive legal framework development is urgent prerequisite to implementation

**Recommendations**: 

**STOP**: Do not proceed with major technical implementation

Prioritize legal framework development as Phase 1

Study international best practices (Estonia, EU GDPR, WHO guidelines)

Engage legal experts with digital health expertise

Develop comprehensive legal framework (18-24 months)

Consider minimal pilot to build case for legal reforms

Build political support for legal reforms through stakeholder engagement


**CRITICAL LEGAL BLOCKERS**

Regardless of overall score, these items are MANDATORY before national implementation:

**Must-Have Legal Provisions:**

☐ Legal basis for EHR system exists

☐ Patient right to access own data established

☐ Data protection law provides basic privacy safeguards

☐ Healthcare professional authentication requirements defined

☐ Audit logging requirements mandated

☐ Security requirements specified

☐ Consent model clearly defined

☐ Data breach notification requirements established

If ANY of these 8 critical items are missing, legal reform is URGENT before proceeding with implementation.


**NEXT STEPS BASED ON COMPLIANCE SCORE**

**For Countries Scoring 80-100%:**

Proceed with confidence to advanced implementation phases

Focus on operational governance and enforcement

Consider leadership role in international standards and best practices

Plan for emerging technology legal frameworks (AI/ML, genomics)

**For Countries Scoring 60-79%:**

Identify specific gaps from checklist scoring

Develop targeted legal amendments to address key gaps

Proceed with pilot implementation while addressing gaps

Plan for legal updates aligned with technical implementation phases

Engage stakeholders in legal refinement process

**For Countries Scoring 40-59%:**

Conduct comprehensive legal gap analysis using Progressa approach

Develop comprehensive EHR legal framework package

Engage legal experts and international consultants

Build political support for legal reforms

Consider limited pilot to demonstrate need and build case for reforms

Timeline: 12-18 months for legal framework development

**For Countries Scoring <40%:**

**PAUSE major technical implementation**

Make legal framework development **Priority #1**

Study Estonia, Progressa, and EU legal frameworks as models

Develop comprehensive legal package addressing all foundational elements

Build broad political coalition for legal reforms

Use small pilots to demonstrate value and urgency

Timeline: 18-24 months for comprehensive legal framework


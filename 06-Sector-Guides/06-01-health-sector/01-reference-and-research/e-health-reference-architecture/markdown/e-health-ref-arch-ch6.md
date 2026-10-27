# 6. STANDARDS & INTEROPERABILITY GUIDE

# 6.1 Standards Selection Framework

# 6.1.1 Overview

Standards selection is one of the most critical decisions in national e-health ecosystem architecture. The right standards enable interoperability, reduce vendor lock-in, facilitate future integration, and align with international best practices. The wrong choices create technical debt, increase costs, and limit system evolution.

This framework guides countries through systematic standards evaluation, selection, and adoption processes based on lessons learned from Estonia's 20-year evolution and Progressa's comprehensive standards-first approach.

# 6.1.2 Evaluation Criteria for Standards

When evaluating healthcare standards for national adoption, assess each standard across multiple dimensions:

**A. Technical Maturity**

**Criteria:**

**Development stage**: Draft, trial use, normative (approved), deprecated

**Version stability**: Frequent breaking changes vs. backward compatibility

**Implementation experience**: Number of successful implementations globally

**Tool ecosystem**: Availability of validators, servers, libraries, documentation

**Community support**: Active development, forums, training materials

**Assessment Questions:**

Is the standard actively maintained with regular updates?

Are there reference implementations available?

How many countries have successfully adopted this standard?

What is the learning curve for developers and implementers?

**Example from Estonia**: Started with HL7 v3 in 2008 (normative, mature) but now transitioning to FHIR (more modern). The migration demonstrates the cost of early adoption vs. waiting for maturity.

**Example from ****Progressa**: Chose HL7 FHIR R4 (normative, 2019) as FHIR-native from inception, benefiting from maturity while avoiding legacy technical debt.

**B. International Adoption**

**Criteria:**

**Global penetration**: Number of countries and organizations using the standard

**Regional relevance**: Adoption in comparable countries or regions

**Cross-border requirements**: Necessity for international health data exchange

**WHO/EU/Regional body endorsement**: Official recommendations

**Assessment Questions:**

Is this standard required for cross-border health data exchange (e.g., EU eHDSI)?

Do neighboring or peer countries use this standard?

Is the standard mandated by international health regulations or recommendations?

**Example**: ICD-11 (WHO standard) is becoming globally required for mortality and morbidity reporting, making adoption essential regardless of other considerations.

**C. Licensing and Cost**

**Criteria:**

**License type**: Free/open vs. commercial licensing

**Usage fees**: One-time vs. recurring, per-transaction vs. unlimited

**Membership requirements**: Need to join standards organization

**Translation costs**: Licensing for translated versions

**Update costs**: Fees for accessing new versions

**Cost Categories:**

**Free Standards**: LOINC, ICD-11, WHO ATC, WHO ICF, UCUM, HL7 THO

**Membership Standards**: HL7 FHIR (requires HL7 membership for full access), DICOM (NEMA membership beneficial)

**Licensed Standards**: SNOMED CT (requires national licensing agreement with SNOMED International)

**Progressa Budgeting**: ToR requires supplier to cover SNOMED CT national licensing costs, HL7 membership, DICOM membership, and all related fees in proposal price.

**Estonia Experience**: Established national SNOMED CT license, LOINC national release, HL7 membership for continued access to specifications.

**D. Translation and Localization Requirements**

**Criteria:**

**Language support**: Availability of translations in national languages

**Translation complexity**: Number of terms, technical difficulty

**Cultural adaptation**: Need for culturally appropriate alternatives

**Maintenance burden**: Effort to keep translations synchronized with updates

**Assessment Questions:**

Is professional medical translation available for this standard?

How many concepts/terms need translation?

Are there existing translations we can leverage (e.g., neighboring countries)?

What is the process for maintaining translations with each new release?

**Progressa Challenge**: All standards must be translated into both the local language and English (official languages), requiring:

Professional clinical translators

Cultural adaptation (not just literal translation)

Quality assurance processes

Ongoing synchronization with international releases

**Translation Volume Examples:**

SNOMED CT: 350,000+ concepts (massive translation effort)

LOINC: 90,000+ terms (large effort)

ICD-11: 55,000+ diagnostic categories (large effort)

HL7 FHIR: Resource definitions, profiles, implementation guides (moderate effort)

**E. Implementation Complexity**

**Criteria:**

**Learning curve**: Time required for developers and clinicians to become proficient

**Infrastructure requirements**: Servers, databases, terminology services needed

**Integration effort**: Ease of integrating with existing systems

**Vendor support**: Availability of commercial and open-source tools

**Complexity Levels:**

**Low**: UCUM (straightforward unit codes), WHO ATC (hierarchical drug classification)

**Medium**: HL7 FHIR (RESTful API, JSON format, good documentation)

**High**: SNOMED CT (complex ontology, compositional grammar, extensive training needed)

**F. Functional Coverage**

**Criteria:**

**Scope completeness**: Does the standard cover all required use cases?

**Extensibility**: Can it be extended for national needs?

**Specificity**: Level of detail (coarse vs. granular)

**Use case alignment**: Fit with planned e-health services

**Coverage Assessment Matrix:**


| Domain | Standard | Coverage | Gaps |
| --- | --- | --- | --- |
| Laboratory tests | LOINC | Excellent (90K+ tests) | Some rare local tests may need national extensions |
| Clinical findings | SNOMED CT | Comprehensive (350K+ concepts) | Minimal gaps |
| Diseases | ICD-11 | Complete for classification | Less granular than SNOMED CT |
| Medications | WHO ATC | Good for classification | Doesn't cover dosing, formulations (use SNOMED CT or local) |
| Medical imaging | DICOM | Complete for imaging | Not applicable to non-imaging |
| Data exchange | HL7 FHIR | Broad (150+ resources) | Some specialized domains may need profiling |

# 6.1.3 International vs. Regional vs. National Standards

**International Standards (Priority 1: Must Adopt)**

**Definition**: Globally recognized standards maintained by international organizations (WHO, HL7, ISO, IHE).

**Examples**:

HL7 FHIR (HL7 International)

DICOM (NEMA)

SNOMED CT (SNOMED International)

LOINC (Regenstrief Institute)

WHO ICD-11, ATC, ICF (World Health Organization)

**When to Use**:

✅ Core data exchange and interoperability

✅ Cross-border health data sharing requirements

✅ International reporting obligations (WHO statistics)

✅ Avoiding vendor lock-in (broad ecosystem)

**Advantages**:

Global interoperability

Large implementation community

Extensive tooling and support

Regular updates and evolution

Compliance with international regulations

**Disadvantages**:

May not perfectly fit local context

Translation costs

Less flexibility for rapid local innovation

**Regional Standards (Priority 2: Consider for Regional Integration)**

**Definition**: Standards adopted within a geographic or economic region (e.g., EU, ASEAN, African Union).

**Examples**:

EU eHDSI (European Health Data Space Infrastructure) profiles

IHE Europe profiles

Regional ICD-11 extensions

**When to Use**:

✅ Regional health data exchange (e.g., EU patient mobility)

✅ Harmonization with neighboring countries

✅ Regional grant/funding requirements

✅ Economic bloc integration

**Estonia Example**: Participates in EU eHDSI for cross-border patient summary and ePrescription exchange with EU member states.

**National Standards (Priority 3: Use Sparingly for National Extensions)**

**Definition**: Country-specific standards or extensions to international standards.

**Examples**:

National SNOMED CT extensions (concepts not in international edition)

National LOINC extensions (local laboratory tests)

National FHIR profiles (constraints on international FHIR resources)

National code sets (healthcare facility types, provider specialties)

**When to Use**:

✅ Truly unique national requirements not covered by international standards

✅ Administrative/regulatory codes (facility licenses, provider credentials)

✅ National health programs (specific to country)

✅ Interim solution while awaiting international standard development

**Cautions**:

⚠️ Creates maintenance burden

⚠️ Limits international interoperability

⚠️ Risk of divergence from international standards

⚠️ May become obsolete when international standard adds coverage

**Best Practices for National Extensions**:

**Minimize use**: Only when absolutely necessary

**Follow extension procedures**: SNOMED CT National Release Centre, LOINC regional extensions

**Document clearly**: Why extension needed, what it covers

**Propose to international body**: Try to get national needs added to international standard

**Sunset plan**: Phase out national extensions when international coverage available

**Estonia Example**: Created EE LOINC codes for laboratory services specific to Estonian health system, documented in national implementation guides.

**Progressa Approach**: Plan to establish National Release Centre for SNOMED CT to manage national extensions systematically.

# 6.1.4 Standards Maturity Assessment

Use this matrix to assess readiness of standards for national adoption:


| Maturity Level | Description | Adoption Recommendation |
| --- | --- | --- |
| Emerging | Draft, early development, limited implementations | ⚠️ Pilot only - Test in non-critical systems |
| Trial Use | Available for testing, may have breaking changes | ⚠️ Pilot with caution - Expect changes, budget for updates |
| Normative | Officially approved, stable, backward compatible | ✅ Production ready - Safe for national implementation |
| Mature | Years of stable use, large implementation base | ✅ Highly recommended - Proven in production |
| Deprecated | Superseded by newer standard, maintenance ending | ❌ Avoid - Plan migration from deprecated standards |

**Current Maturity (2025)**:

**HL7 FHIR R4**: Normative (since 2019), mature, recommended

**HL7 FHIR R5**: Normative (since 2023), increasingly adopted

**DICOM**: Mature (since 1993), industry standard

**SNOMED CT**: Mature, 50+ countries licensed

**LOINC**: Mature, globally adopted for lab data

**ICD-11**: Normative (WHO approved 2019), replacing ICD-10

**HL7 v2**: Mature but deprecated for new implementations (legacy support only)

**HL7 v3/CDA**: Mature but being superseded by FHIR

# 6.1.5 Cost-Benefit Analysis Framework

**Total Cost of Ownership (TCO) Calculation**

**Initial Costs**:

**Licensing fees** (SNOMED CT national license, HL7 membership, etc.)

**Translation costs** (professional medical translation)

**Infrastructure** (terminology servers, FHIR servers)

**Training** (developers, clinicians, administrators)

**Implementation effort** (integration, profiling, testing)

**Consultancy** (external expertise if needed)

**Ongoing Costs**:

**Annual license/membership renewals**

**Translation updates** (synchronizing with new releases)

**Maintenance** (servers, databases)

**Support staff** (standards governance, terminology management)

**Continuous training** (new staff, updates)

**Version upgrades** (FHIR R4 → R5, SNOMED CT releases)

**Hidden Costs**:

**Technical debt** if choosing proprietary/deprecated standards

**Migration costs** if standard becomes obsolete

**Interoperability failures** if standards poorly implemented

**Vendor lock-in** if avoiding open standards

**Benefit Quantification**

**Direct Benefits**:

**Interoperability savings**: Reduced custom integration costs

**Vendor negotiation**: Competitive procurement with standard APIs

**Reuse**: Leverage existing implementations and tools

**Compliance**: Meet international regulatory requirements

**Indirect Benefits**:

**Clinical outcomes**: Better care coordination, fewer errors

**Research enablement**: Standardized data for studies

**Innovation**: Third-party app ecosystem

**Public trust**: Alignment with international best practices

**ROI Example (Simplified)**:

**Scenario**: National implementation of HL7 FHIR vs. proprietary API

**Costs (5 years)**:

FHIR: €500K (licensing, training, implementation)

Proprietary: €200K initial (cheaper upfront)

**Benefits (5 years)**:

FHIR: €2M savings (reduced integration costs, avoided vendor lock-in, reusable implementations)

Proprietary: €500K savings (initial integration, but high ongoing custom costs)

**Net ROI**:

FHIR: €1.5M net benefit

Proprietary: €300K net benefit

**Decision**: FHIR provides 5x better ROI despite higher initial costs.

# 6.2 Core Standards Implementation

# 6.2.1 HL7 FHIR (Fast Healthcare Interoperability Resources)

**Standard Overview and Purpose**

**What is FHIR?**

HL7 FHIR is the modern standard for healthcare data exchange, designed to overcome limitations of previous HL7 standards (v2, v3, CDA). FHIR uses RESTful APIs, JSON/XML formats, and modular "resources" representing clinical and administrative concepts.

**Key Innovation**: FHIR balances simplicity (80% use cases with 20% effort) with extensibility (complex use cases possible through profiling and extensions).

**FHIR Versions**:

**R4** (2019): Normative, widely adopted, production-ready - **RECOMMENDED for new implementations**

**R5** (2023): Latest normative version with enhancements, growing adoption - **Consider for greenfield projects**

**STU3** (2017): Superseded, legacy support only - **Avoid for new projects**

**Scope and Applicability**

**FHIR Use Cases**:

Patient demographics and registration

Clinical documentation (observations, conditions, procedures)

Medication management (prescriptions, dispensing, administration)

Diagnostic reports (lab results, imaging reports)

Scheduling and appointments

Healthcare provider directories

Billing and claims

Public health reporting

Clinical decision support

Mobile health applications

**When to Use FHIR**:

✅ **New e-health implementations** (Progressa approach: FHIR-native from day one)

✅ **Modernizing legacy systems** (Estonia approach: Gradual transition via upTIS project)

✅ **API-first architectures** (microservices, mobile apps, third-party integrations)

✅ **Cross-border interoperability** (IPS - International Patient Summary)

✅ **Cloud-native deployments**

**When NOT to Use FHIR**:

❌ Medical imaging binary data (use DICOM, reference via FHIR ImagingStudy)

❌ Real-time device streaming (use HL7 v2 or device-specific protocols, store results in FHIR)

❌ Legacy system replacement where HL7 v2 deeply embedded (use FHIR Facade pattern instead)

**Implementation Guidance**

**FHIR Resource Model**

FHIR defines 150+ resources representing healthcare concepts:

**Administrative Resources**:

Patient, Practitioner, Organization, Location, HealthcareService

Schedule, Slot, Appointment

Account, Coverage, Claim

**Clinical Resources**:

Observation (lab results, vital signs, clinical findings)

Condition (diagnoses, problems)

Procedure, ServiceRequest

MedicationRequest, MedicationDispense, MedicationAdministration

AllergyIntolerance, Immunization

DiagnosticReport, ImagingStudy

CarePlan, Goal

**Foundation Resources**:

Bundle (collection of resources)

OperationOutcome (errors, warnings)

Subscription (event notifications)

**FHIR Profiling**

**What is Profiling?**

Profiling constrains base FHIR resources to fit specific national or use-case requirements:

Set cardinality (make optional fields required, or vice versa)

Constrain value sets (limit coded fields to specific codes)

Add national extensions (additional data elements)

Define slicing (specify multiple instances of repeating elements)

Specify must-support elements (implementations must handle these)

**Example: ****Progressa Patient Profile**

{

  "resourceType": "StructureDefinition",

  "url": "http://dhp.progressa.example/fhir/StructureDefinition/pg-patient",

  "name": "ProgressaPatient",

  "status": "active",

  "description": "Patient profile for Progressa DHP",

  "fhirVersion": "4.0.1",

  "kind": "resource",

  "abstract": false,

  "type": "Patient",

  "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Patient",

  "differential": {

    "element": [

      {

        "id": "Patient.identifier",

        "path": "Patient.identifier",

        "slicing": {

          "discriminator": [{

            "type": "value",

            "path": "system"

          }],

          "rules": "open"

        },

        "min": 1,

        "mustSupport": true

      },

      {

        "id": "Patient.identifier:nationalId",

        "path": "Patient.identifier",

        "sliceName": "nationalId",

        "min": 1,

        "max": "1",

        "patternIdentifier": {

          "system": "http://gov.progressa.example/national-id"

        }

      },

      {

        "id": "Patient.identifier:insuranceNumber",

        "path": "Patient.identifier",

        "sliceName": "insuranceNumber",

        "max": "1",

        "patternIdentifier": {

          "system": "http://insurance.progressa.example/member-id"

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

        "mustSupport": true

      }

    ]

  }

}

**Key Profile Decisions**:

National ID required (min=1) with specific system URI

Insurance number optional but supported

Name and birthdate mandatory

Address must be supported by all implementations

**FHIR Implementation Guides (IGs)**

**Purpose**: Document how to use FHIR for specific use cases or national contexts.

**IG Components**:

**Narrative**: Describe use cases, workflows, actors

**Profiles**: Constrained resource definitions

**Value Sets**: Allowed code sets for coded elements

**Code Systems**: National code systems

**Examples**: Sample FHIR instances demonstrating correct usage

**Search Parameters**: How to query resources

**Capability Statements**: Server capabilities and supported operations

**Example IGs**:

**International Patient Summary (IPS)**: WHO/HL7 standard for patient summary

**US Core**: US national FHIR profile

**Progressa DHP IG**: National implementation guide for DHP

**FHIR Server Selection**

**Open-Source FHIR Servers**:

**HAPI FHIR (Java)**

Most popular, feature-complete

R4 and R5 support

Active community, extensive documentation

Performance: Good (requires tuning for scale)

**Recommendation**: ✅ **Excellent choice for national implementations**

**IBM FHIR Server (Java)**

Enterprise-grade, high performance

Strong security features

R4 support

Less community support than HAPI

**Recommendation**: ✅ **Good for high-scale deployments**

**Firely Server (formerly Vonk) (.NET)**

Commercial with community edition

High performance

R4 and R5 support

**Recommendation**: ⚠️ **Evaluate licensing costs**

**Smile CDR (Commercial, based on HAPI)**

Enterprise support and SLAs

Advanced features (subscriptions, bulk data)

**Recommendation**: ⚠️ **Consider if budget allows commercial support**

**Cloud FHIR Services**:

**Azure Health Data Services**: Managed FHIR, DICOM, MedTech services

**Google Cloud Healthcare API**: Managed FHIR, DICOM, HL7v2

**AWS HealthLake**: Managed FHIR with analytics

**Selection Criteria**:

FHIR version support (R4 minimum, R5 preferred)

Performance and scalability

Security features (OAuth, audit logging)

Terminology service integration

Subscription support (event notifications)

Bulk data export

Community and support

Total cost of ownership

**Progressa Approach**: Likely HAPI FHIR or IBM FHIR Server (open-source, customizable, no vendor lock-in).

**Estonia upTIS**: Transitioning to FHIR-based architecture, likely using commercial or hybrid approach.

**FHIR API Design Patterns**

**RESTful Operations**:

**Create**: POST /Patient

{

  "resourceType": "Patient",

  "identifier": [{

    "system": "http://gov.progressa.example/national-id",

    "value": "AA1234567"

  }],

  "name": [{

    "family": "Doe",

    "given": ["Alex"]

  }],

  "birthDate": "1985-03-15",

  "gender": "male"

}

**Read**: GET /Patient/123

**Update**: PUT /Patient/123 (full resource replacement)

**Patch**: PATCH /Patient/123 (partial update using JSON Patch)

**Delete**: DELETE /Patient/123 (logical deletion, resource remains retrievable)

**Search**: GET /Patient?name=Doe&birthdate=1985-03-15

**History**: GET /Patient/123/_history (version history)

**Advanced Operations**:

**Transactions**: POST / with Bundle of type "transaction"

**Batch**: POST / with Bundle of type "batch"

**Operations**: POST /Patient/$validate (custom operations)

**Localization Considerations**

**Language Support**:

FHIR supports multiple languages via the language element

Translations can be provided for displays using extensions

**Example** (local-language and English translations):

{

  "resourceType": "Observation",

  "code": {

    "coding": [{

      "system": "http://loinc.org",

      "code": "2093-3",

      "display": "Cholesterol"

    }],

    "text": "Cholestérol" 

  }

}

**Translation Extension** (for multi-language support):

{

  "coding": [{

    "system": "http://loinc.org",

    "code": "2093-3",

    "display": "Cholesterol",

    "_display": {

      "extension": [

        {

          "url": "http://hl7.org/fhir/StructureDefinition/translation",

          "extension": [

            {"url": "lang", "valueCode": "fr"},

            {"url": "content", "valueString": "Cholestérol"}

          ]

        },

        {

          "url": "http://hl7.org/fhir/StructureDefinition/translation",

          "extension": [

            {"url": "lang", "valueCode": "pt"},

            {"url": "content", "valueString": "Colesterol"}

          ]

        }

      ]

    }

  }]

}

**Testing and Validation**

**Conformance Testing**:

**FHIR Validator**: Validate resources against profiles

**Touchstone**: HL7 official testing platform

**Crucible**: Open-source FHIR testing tool

**Inferno**: ONC certification testing (US-focused but useful patterns)

**Validation Example** (using FHIR Validator):

java -jar validator_cli.jar patient-example.json -version 4.0.1 -ig http://dhp.progressa.example/fhir/ImplementationGuide/pg-core

**Interoperability Testing**:

**Connectathons**: HL7 FHIR connectathons (participate to test with vendors)

**IHE Projectathons**: Test IHE profiles built on FHIR

**National testing events**: Organize vendor interoperability testing

**Progressa Requirements**: Rigorous validation and testing of FHIR integration to ensure seamless interoperability between DHP services and external systems.

**Resources and Training**

**Official Documentation**:

HL7 FHIR Specification: https://hl7.org/fhir/

FHIR Registry: https://registry.fhir.org/ (find implementation guides)

**Training Resources**:

HL7 FHIR Learning Tracks (online courses)

FHIR DevDays conferences (annual, global)

Books: "FHIR Fundamentals" by Rik Smithies

Online tutorials: fhir.org, fire.ly, smartonfhir.org

**Community**:

FHIR Chat (chat.fhir.org): Active Zulip community

HL7 Working Groups: Participate in standards development

GitHub: FHIR specification and tooling

# 6.2.2 DICOM (Digital Imaging and Communications in Medicine)

**Standard Overview and Purpose**

DICOM is the international standard for medical imaging and related data. It defines formats for images (CT, MRI, X-ray, ultrasound, etc.) and protocols for transmitting, storing, retrieving, and displaying images.

**DICOM Coverage**:

Image formats (all modalities)

Image metadata (patient, study, series, acquisition parameters)

Communication protocols (C-STORE, C-FIND, C-MOVE, C-GET)

Worklist management (scheduling procedures)

Structured reports (radiology findings)

DICOM web services (RESTful access)

**Scope and Applicability**

**Use Cases**:

Medical imaging acquisition (CT, MRI, X-ray, ultrasound, mammography)

Picture Archiving and Communication Systems (PACS)

Radiology Information Systems (RIS) integration

Teleradiology (remote interpretation)

Image viewing (diagnostic workstations, web viewers, mobile apps)

Image-guided therapy (surgical planning, radiation therapy)

**Integration with National e-Health**:

**PACS** stores DICOM images

**RIS** manages radiology workflows

**National EHR** references DICOM studies via FHIR ImagingStudy resource

**Patient Portal** allows patients to view images (via DICOM viewers)

**Implementation Guidance**

**DICOM Services**:

**DICOM Storage (C-STORE)**: Modality sends images to PACS

**DICOM Query/Retrieve (C-FIND, C-MOVE, C-GET)**: Search and retrieve images

**DICOM Worklist (MWL)**: Procedure scheduling

**DICOM Structured Reports (SR)**: Radiology findings

**DICOMweb**: Modern RESTful services (WADO-RS, QIDO-RS, STOW-RS)

**DICOMweb vs. Traditional DICOM**:

**Traditional DICOM**: TCP/IP-based, binary protocol, firewall-unfriendly

**DICOMweb**: HTTP/REST-based, JSON metadata, firewall-friendly, cloud-native

**Recommendation**: **Use DICOMweb for new implementations** (easier integration with web apps, cloud-friendly).

**DICOM → FHIR Integration**:

DICOM study metadata maps to FHIR ImagingStudy resource:

{

  "resourceType": "ImagingStudy",

  "id": "example-ct-chest",

  "identifier": [{

    "system": "urn:dicom:uid",

    "value": "urn:oid:1.2.840.113619.2.176.2025.1.10.1"

  }],

  "status": "available",

  "subject": {

    "reference": "Patient/12345"

  },

  "started": "2025-10-16T10:00:00Z",

  "modality": [{

    "system": "http://dicom.nema.org/resources/ontology/DCM",

    "code": "CT",

    "display": "Computed Tomography"

  }],

  "description": "CT Chest with contrast",

  "numberOfSeries": 2,

  "numberOfInstances": 150,

  "endpoint": [{

    "reference": "Endpoint/dicomweb-pacs"

  }],

  "series": [{

    "uid": "1.2.840.113619.2.176.2025.1.10.1.1",

    "modality": {

      "system": "http://dicom.nema.org/resources/ontology/DCM",

      "code": "CT"

    },

    "numberOfInstances": 75,

    "bodySite": {

      "system": "http://snomed.info/sct",

      "code": "51185008",

      "display": "Thorax structure"

    },

    "instance": [{

      "uid": "1.2.840.113619.2.176.2025.1.10.1.1.1",

      "sopClass": {

        "system": "urn:ietf:rfc:3986",

        "code": "urn:oid:1.2.840.10008.5.1.4.1.1.2"

      }

    }]

  }]

}

**PACS Architecture**:

Imaging Modalities (CT, MRI, X-ray, US)

  ↓ DICOM C-STORE

PACS (VNA - Vendor Neutral Archive)

  ↓ DICOMweb / Traditional DICOM

Viewers (Diagnostic Workstations, Web Viewers)

  ↕

National EHR (FHIR ImagingStudy metadata)

**Localization Considerations**

**Character Sets**: DICOM supports various character sets including UTF-8 (for Local, English, and other languages).

**Radiology Report Translation**: Structured Reports (DICOM SR) can include multi-language content.

**Testing and Validation**

**DICOM Conformance Testing**:

**DCM4CHE Validator**: Open-source DICOM validation

**RSNA MIRC**: Test DICOM integration

**IHE Connectathons**: Test IHE imaging profiles (XDS-I, XCA-I)

**IHE Profiles for Imaging**:

**XDS-I (Cross-Enterprise Document Sharing for Imaging)**: Share imaging across enterprises

**XCA-I (Cross-Community Access for Imaging)**: Query and retrieve images across communities

**PIR (Patient Information Reconciliation)**: Patient matching for imaging

**Resources and Training**

DICOM Standard: https://www.dicomstandard.org/

NEMA (National Electrical Manufacturers Association): DICOM steward

DICOM Library: https://dicomlibrary.com/ (sample DICOM files for testing)

Training: RSNA (Radiological Society of North America) offers DICOM courses

# 6.2.3 Clinical Terminologies (SNOMED CT, LOINC, ICD-11, WHO ATC, ICF, Orphanet)

**Overview**

Clinical terminologies provide standardized codes for clinical concepts, enabling consistent data capture, exchange, and analysis. Different terminologies serve different purposes and must be used together for comprehensive coverage.


| Terminology | Purpose | Coverage | License | Priority |
| --- | --- | --- | --- | --- |
| SNOMED CT | Comprehensive clinical terminology | 350K+ concepts (diagnoses, procedures, findings, anatomy, etc.) | Commercial (national license required) | MUST HAVE |
| LOINC | Laboratory and clinical observations | 90K+ tests and measurements | Free | MUST HAVE |
| ICD-11 | Disease classification | 55K+ diagnostic categories | Free (WHO) | MUST HAVE |
| WHO ATC | Drug classification | Hierarchical drug codes | Free (WHO) | MUST HAVE |
| WHO ICF | Functioning and disability | Body functions, activities, participation, environment | Free (WHO) | RECOMMENDED |
| Orphanet | Rare diseases | 6K+ rare diseases | Free | RECOMMENDED |
| UCUM | Units of measure | Standardized unit codes | Free | MUST HAVE |

**SNOMED CT Implementation**

**Structure and Use**

SNOMED CT is an ontology with:

**Concepts**: Unique identifiers for clinical ideas

**Descriptions**: Human-readable terms (preferred, synonyms)

**Relationships**: How concepts relate (is-a, finding-site, causative-agent, etc.)

**Example: Myocardial Infarction**

Concept ID: 22298006

Fully Specified Name: Myocardial infarction (disorder)

Preferred Term: Myocardial infarction

Synonyms:

- Heart attack
- MI
- Acute myocardial infarction
- Cardiac infarction
Relationships:

- Is-a: 128599005 | Myocardial disease |
- Is-a: 57054005 | Acute heart disease |
- Finding-site: 80891009 | Heart structure |
- Associated-with: 53741008 | Coronary arteriosclerosis |
**SNOMED CT Use Cases**

**Problem List / Diagnoses**: Record patient conditions

**Procedure Documentation**: Encode surgical and diagnostic procedures

**Allergy and Intolerance Recording**: Substances causing reactions

**Family History**: Conditions in family members

**Clinical Findings**: Signs, symptoms, clinical observations

**Body Structures**: Anatomical locations

**Medications and Devices**: Clinical products

**National Licensing and Release Center**

**Licensing Requirements**:

SNOMED CT requires a national license from SNOMED International

Cost varies by country (GDP-based)

License covers use within national health system

**National Release Center (NRC)**:

**Purpose**: Manage national editions, extensions, and translations

**Responsibilities**: 

Translation into national language(s)

National extensions (concepts not in international edition)

Quality assurance

Distribution and updates

Training and support

**Progressa Requirements**: Establish NRC, translate into the local language and English, manage national extensions.

**Estonia Experience**: Established NRC, created Estonian SNOMED CT edition with Estonian translations.

**Translation and Localization**

**Translation Process**:

**Prioritize**: Start with most frequently used concepts (core subsets)

**Professional Translation**: Medical professionals translate preferred terms

**Synonym Generation**: Add culturally appropriate synonyms

**Clinical Validation**: Clinicians review translations for accuracy

**Quality Assurance**: Automated and manual validation

**Testing**: Pilot use in clinical systems

**Release**: Publish national edition

**Maintenance**: Update with each international release (biannual)

**Challenges**:

**Volume**: 350,000+ concepts to translate (massive effort)

**Technical Terms**: Many concepts lack direct translation equivalents

**Cultural Adaptation**: Medical practices vary across cultures

**Synchronization**: Keep national translations aligned with international releases

**Strategies**:

**Phased Translation**: Start with core subset (10-20K concepts), expand over time

**Community Translation**: Engage clinical communities by specialty

**Machine Translation + Review**: Use MT for first pass, clinical review for validation

**International Collaboration**: Leverage translations from similar-language countries

**Progressa Approach**: Professional translation into the local language and English, integrated into Terminology Server, accessible via APIs.

**SNOMED CT Subsets**

**Core Subsets** (for initial implementation):

**Common Clinical Findings** (~5,000 concepts): Symptoms, signs, lab findings

**Common Disorders** (~10,000 concepts): Diseases, injuries, conditions

**Common Procedures** (~5,000 concepts): Surgical, diagnostic, therapeutic

**Medications** (~15,000 concepts): Clinical drugs and substances

**Body Structures** (~3,000 concepts): Anatomy

**Specialty Subsets**:

**Emergency Medicine**: Critical concepts for emergency department

**Primary Care**: Concepts for general practice

**Maternal and Child Health**: Pregnancy, childbirth, pediatrics

**Chronic Diseases**: Diabetes, hypertension, cardiovascular, respiratory

**Implementation Recommendation**: **Start with core subsets, expand based on service rollout.**

**LOINC Implementation**

**Structure and Use**

LOINC codes have a six-part name structure:

**Component**: What is measured (e.g., Glucose)

**Property**: Characteristic (e.g., Mass Concentration)

**Timing**: When measured (e.g., Point in time)

**System**: Where measured (e.g., Serum or Plasma)

**Scale**: Type of measurement (e.g., Quantitative)

**Method**: How measured (e.g., Enzymatic, optional)

**Example**:

LOINC Code: 2093-3

Name: Cholesterol [Mass/volume] in Serum or Plasma

Component: Cholesterol

Property: MCnc (Mass Concentration)

Timing: Pt (Point in time)

System: Ser/Plas (Serum or Plasma)

Scale: Qn (Quantitative)

Method: [blank] (any method)

**LOINC Use Cases**

**Laboratory Test Orders**: Standardized codes for ordering tests

**Laboratory Results**: Uniform reporting of results

**Clinical Observations**: Vital signs, physical findings

**Document Types**: Clinical document classification

**Survey Instruments**: Standardized assessments (e.g., depression screening)

**National Extensions**

**When Needed**:

Local laboratory tests not in LOINC

National-specific clinical measurements

Regional document types

**Estonia Example**: EE LOINC codes for Estonian-specific lab services.

**Progressa Plan**: Evaluate need for national LOINC extensions, establish process for requesting additions to international LOINC.

**Translation**

**Process**: Similar to SNOMED CT but smaller volume (~90,000 terms).

**Priority**: Translate most common tests first (top 500 tests cover 95% of usage).

**ICD-11 Implementation**

**Structure**

ICD-11 is a classification system with:

**55,000+ diagnostic codes**

**Multi-parent structure** (more flexible than ICD-10)

**Foundation layer**: Extensible base for national additions

**Linearizations**: Different views for different purposes (mortality, morbidity, primary care)

**Example**:

ICD-11 Code: BA00

Title: Essential (primary) hypertension

Parent: BA0Z | Hypertensive diseases

Also classified in: Other circulatory system diseases

**Use Cases**

**Mortality Reporting**: Death certificates (WHO requirement)

**Morbidity Statistics**: Disease prevalence and incidence

**Reimbursement Coding**: Primary diagnosis for billing

**Epidemiological Surveillance**: Public health monitoring

**Research**: Population health studies

**ICD-10 to ICD-11 Migration**

**Challenges**:

**Mapping Complexity**: Not one-to-one mapping

**Granularity Changes**: ICD-11 more detailed in some areas

**Training**: Coders need retraining

**System Updates**: All systems using ICD-10 must be updated

**Migration Strategy**:

**Dual Coding Period**: Support both ICD-10 and ICD-11 during transition (1-2 years)

**Training Programs**: Comprehensive coder training

**Mapping Tools**: Automated ICD-10 → ICD-11 mapping (with manual review)

**Pilot Testing**: Test in selected facilities before national rollout

**Cutover**: Phased or big-bang switch to ICD-11

**Timeline**: WHO recommends transition by 2027. Many countries still using ICD-10.

**WHO ATC Implementation**

**Structure**

ATC is a 7-level hierarchical classification:

**Level 1**: Anatomical main group (14 groups: A-V)

**Level 2**: Therapeutic subgroup

**Level 3**: Pharmacological subgroup

**Level 4**: Chemical subgroup

**Level 5**: Chemical substance

**Example**:

Code: N02BE01

Level 1: N | Nervous system

Level 2: N02 | Analgesics

Level 3: N02B | Other analgesics and antipyretics

Level 4: N02BE | Anilides

Level 5: N02BE01 | Paracetamol

**Use Cases**

**Medication Classification**: Group medications by therapeutic purpose

**Drug-Drug Interaction Checking**: Identify interactions by class

**Formulary Management**: Organize national formulary

**Prescription Statistics**: Analyze prescribing patterns

**Reimbursement**: Link to reimbursement policies

**Implementation**

**Integration with ePrescription**: Use ATC codes in FHIR Medication resources alongside national drug codes.

**Example**:

{

  "resourceType": "Medication",

  "id": "paracetamol-500mg",

  "code": {

    "coding": [

      {

        "system": "http://www.whocc.no/atc",

        "code": "N02BE01",

        "display": "Paracetamol"

      },

      {

        "system": "http://drugs.progressa.example/national-code",

        "code": "12345",

        "display": "Paracetamol 500mg tablet"

      }

    ]

  }

}

**WHO ICF, Orphanet, UCUM**

**WHO ICF (International Classification of Functioning, Disability and Health)**

**Purpose**: Framework for describing health and disability states.

**Components**:

**Body Functions and Structures**: Physiological and anatomical

**Activities and Participation**: Execution of tasks and involvement in life

**Environmental Factors**: Physical, social, attitudinal environment

**Use Cases**:

Disability assessment

Rehabilitation planning

Social services integration

Accessibility planning

**Priority**: RECOMMENDED (important for comprehensive care but not immediately critical).

**Orphanet**

**Purpose**: Reference portal for rare diseases.

**Coverage**: 6,000+ rare diseases with unique codes.

**Use Cases**:

Rare disease diagnosis coding

Research collaboration

Patient registries

Cross-border rare disease coordination

**Priority**: RECOMMENDED (important for specialized care).

**UCUM (Unified Code for Units of Measure)**

**Purpose**: Standardized codes for units of measure in healthcare.

**Examples**:

mg/dL (milligrams per deciliter)

mmol/L (millimoles per liter)

mm[Hg] (millimeters of mercury)

/min (per minute)

**Use Cases**:

Laboratory results reporting

Vital signs recording

Medication dosing

Any quantitative measurement

**Priority**: **MUST HAVE** (critical for unambiguous quantitative data).

**Implementation**: UCUM integrated in terminology server, used in FHIR Quantity datatypes.

## 6.3 Terminology Management

# 6.3.1 Terminology Server Architecture

**Purpose and Capabilities**

A **Terminology Server** is the central infrastructure for managing all clinical terminologies, providing services for:

**Code Lookup**: Get details for a specific code

**Value Set Expansion**: Retrieve all codes in a value set

**Concept Search**: Find codes matching a search term

**Code Validation**: Verify a code is valid in a terminology

**Subsumption Testing**: Determine if concept A is a type of concept B

**Mapping**: Translate between terminologies (e.g., ICD-11 to SNOMED CT)

**Multi-language Support**: Serve terminology in multiple languages

**Architecture**

Clinical Applications (EHR, Patient Portal, ePrescription)

       ↓ FHIR Terminology API

Terminology Server (HAPI FHIR TS, Ontoserver, etc.)

       ↓

Terminology Database

  ├── SNOMED CT (Local, English)

  ├── LOINC (Local, English)

  ├── ICD-11 (Local, English)

  ├── WHO ATC

  ├── WHO ICF

  ├── Orphanet

  ├── UCUM

  └── National Extensions

**Terminology Server Options**

**Open-Source**:

**HAPI FHIR Terminology Server (Java)**:

Feature-complete, FHIR-native

Good performance

Active community

**Recommendation**: ✅ **Excellent choice**

**Ontoserver (Commercial with free tier)**:

High performance

Advanced SNOMED CT support

FHIR R4 compliant

**Recommendation**: ✅ **Consider for SNOMED-heavy deployments**

**Snowstorm (Open-source, SNOMED International)**:

SNOMED CT specialist server

Can be combined with generic FHIR TS

**Recommendation**: ⚠️ **Use with generic TS for full coverage**

**Cloud Services**:

**AWS HealthLake**: Managed terminology services

**Azure Health Data Services**: Terminology support

**Google Cloud Healthcare API**: Terminology endpoint

**FHIR Terminology API**

**Core Operations** (defined by FHIR):

**$lookup**: Get details for a code

GET [base]/CodeSystem/$lookup?system=http://snomed.info/sct&code=22298006

Response:

{

  "resourceType": "Parameters",

  "parameter": [

    {"name": "name", "valueString": "SNOMED CT"},

    {"name": "display", "valueString": "Myocardial infarction"},

    {"name": "designation", "part": [

      {"name": "language", "valueCode": "en"},

      {"name": "value", "valueString": "Heart attack"}

    ]},

    {"name": "designation", "part": [

      {"name": "language", "valueCode": "fr"},

      {"name": "value", "valueString": "Infarctus du myocarde"} 

    ]},

    {"name": "designation", "part": [

      {"name": "language", "valueCode": "pt"},

      {"name": "value", "valueString": "Infarto do miocárdio"}

    ]}

  ]

}

**$expand**: Expand a value set to get all codes

GET [base]/ValueSet/$expand?url=http://dhp.progressa.example/fhir/ValueSet/diabetes-diagnoses

**$validate-code**: Check if a code is valid

GET [base]/ValueSet/$validate-code?url=http://dhp.progressa.example/fhir/ValueSet/diabetes-diagnoses&system=http://snomed.info/sct&code=73211009

**$translate**: Map between terminologies

GET [base]/ConceptMap/$translate?system=http://hl7.org/fhir/sid/icd-11&code=5A11&target=http://snomed.info/sct

**$subsumes**: Check if code A is a type of code B

GET [base]/CodeSystem/$subsumes?system=http://snomed.info/sct&codeA=22298006&codeB=128599005

**Performance Considerations**

**Terminology servers must be fast** (users expect <500ms response for interactive use).

**Optimization Strategies**:

**Aggressive Caching**: Cache frequent queries (concept lookups, value sets)

**Pre-computed Value Sets**: Expand common value sets at deployment time

**Database Indexing**: Index terminology tables for fast lookups

**Distributed Architecture**: Load balance across multiple instances

**CDN for Static Resources**: Serve static value sets via CDN

**Performance Targets**:

Code Lookup: <100ms

Value Set Expansion: <1 second (typical value sets with <1,000 codes)

Search: <500ms for interactive use

Validation: <200ms

# 6.3.2 Translation and Localization

**Translation Process**

**Step 1: Prioritization**

Identify most frequently used concepts (Pareto principle: 20% concepts = 80% usage)

Create core subsets by clinical specialty

Prioritize based on service rollout schedule

**Step 2: Professional Translation**

Engage medical professionals with language expertise

Translate preferred terms first, then synonyms

Use translation memory tools for consistency

**Step 3: Cultural Adaptation**

Adapt terms to local medical practice

Add culturally appropriate synonyms

Consider colloquial terms patients use

**Step 4: Quality Assurance**

Clinical review by specialists

Automated validation (check for duplicates, missing translations)

Pilot testing with clinicians

**Step 5: Integration**

Load translations into terminology server

Test APIs with translated content

Validate in clinical applications

**Step 6: Maintenance**

Synchronize with international updates (SNOMED CT biannual, LOINC biannual, ICD-11 annual)

Translate new concepts

Deprecate outdated translations

**Translation Challenges and Solutions**

**Challenge 1: Volume (350K+ SNOMED CT concepts)**

**Solution**: Phased translation starting with core subsets (10-20K concepts initially)

**Challenge 2: Technical Terms Without Direct Equivalents**

**Solution**: Create descriptive translations, consult international SNOMED NRCs for guidance

**Challenge 3: Maintaining Synchronization**

**Solution**: Automated processes for detecting new concepts, regular update cycles

**Challenge 4: Quality Assurance at Scale**

**Solution**: Combination of automated validation (structure, duplicates) and clinical review (sampling)

**Progressa-Specific Considerations**

**Dual Language Requirement**: the local language and English (official languages)

Both languages must be supported in all systems

User interface language selection

Terminology search in either language

Reports and documents in user-selected language

**Translation Extensions in FHIR**:

{

  "coding": [{

    "system": "http://snomed.info/sct",

    "code": "22298006",

    "display": "Myocardial infarction",

    "_display": {

      "extension": [

        {

          "url": "http://hl7.org/fhir/StructureDefinition/translation",

          "extension": [

            {"url": "lang", "valueCode": "fr"},

            {"url": "content", "valueString": "Infarctus du myocarde"}

          ]

        },

        {

          "url": "http://hl7.org/fhir/StructureDefinition/translation",

          "extension": [

            {"url": "lang", "valueCode": "pt"},

            {"url": "content", "valueString": "Infarto do miocárdio"}

          ]

        }

      ]

    }

  }]

}

# 6.3.3 Terminology Governance

**National Terminology Authority**

**Purpose**: Oversee adoption, translation, maintenance, and evolution of all clinical terminologies.

**Structure**:

**Authority Type**: Board, committee, or designated organization

**Members**: 

Clinical subject matter experts by domain (5-7 specialists)

Medical coding specialists (2-3)

Terminology/ontology specialists (2)

IT representatives (2)

Ministry of Health representative (1)

**Meeting Frequency**: Monthly or as needed

**Responsibilities**:

**Standards Selection**:

Evaluate international standards for national adoption

Assess maturity, licensing, cost, translation needs

Recommend adoption to governance board

**Translation and Localization**:

Manage translation of SNOMED CT, LOINC, ICD-11, etc.

Ensure clinical accuracy and cultural appropriateness

Quality assurance of translations

Synchronization with international updates

**National Extensions**:

Define national extension concepts when international standards insufficient

Follow standard extension procedures (SNOMED CT NRC, LOINC regional extensions)

Maintain national code sets

**Value Set Management**:

Define value sets for data entry validation

Approve institutional value set requests

Ensure consistency across applications

**Maintenance and Updates**:

Regular updates synchronized with international releases

Deprecation management for outdated codes

Communication of changes to stakeholders

**Value Set Governance**

**Value Sets** are constrained lists of codes for specific purposes.

**Examples**:

"Common Lab Tests" (subset of LOINC for primary care)

"Diabetes Diagnoses" (subset of SNOMED CT)

"Cardiovascular Medications" (subset of ATC)

"Allergy Substances" (subset of SNOMED CT)

**Value Set Lifecycle**:

**Request**: Clinical committee or application team requests new value set

**Review**: Terminology authority reviews clinical appropriateness

**Define**: Create value set with inclusion/exclusion criteria

**Test**: Validate in test environment

**Approve**: Terminology authority approves

**Publish**: Deploy to production terminology server

**Maintain**: Regular reviews, update as clinical practice evolves

**Value Set Versioning**:

Value sets evolve over time (codes added, removed)

Each version must be tracked

Applications should specify which version they use

Backward compatibility considerations

**Update Cycles**

**International Release Schedules**:

**SNOMED CT**: Biannual (January and July)

**LOINC**: Biannual (June and December)

**ICD-11**: Annual (January)

**WHO ATC**: Annual (January)

**FHIR**: Major versions every 3-4 years, minor updates more frequent

**National Update Process**:

**Monitor International Releases**: Track release dates and change logs

**Assess Impact**: Evaluate which changes affect national implementation

**Translate New Content**: Translate new concepts and updates

**Test**: Validate in test environment

**Communicate**: Notify stakeholders of upcoming changes

**Deploy**: Update production terminology server

**Verify**: Confirm successful deployment and functionality

**Emergency Updates**: Process for critical fixes outside regular cycle (e.g., new disease outbreak requiring new codes).

**Stakeholder Involvement**

**Clinical Communities**:

Specialty societies propose new concepts

Public comment periods for major changes

Clinical validation of translations

**Vendor Notification**:

Advance notice of terminology updates

Test datasets provided

Support for vendor integration testing

**Training Materials**:

Update training materials with each release

Webinars explaining significant changes

Documentation of deprecated concepts and replacements

# 6.4 Interoperability Testing

# 6.4.1 Conformance Testing Frameworks

**Purpose**: Verify that implementations conform to standards specifications and national profiles.

**FHIR Conformance Testing**

**Tools**:

**FHIR Validator (Official HL7 Tool)**: 

Validates resources against profiles

Command-line and API access

Supports custom implementation guides

**Example Usage**:

java -jar validator_cli.jar patient-example.json \

- version 4.0.1 \
- ig http://dhp.progressa.example/fhir/ImplementationGuide/pg-core
**Touchstone (AEGIS)**:

HL7 official testing platform

Web-based test execution

Pre-defined test scripts for common scenarios

Custom test script creation

**Crucible (MITRE)**:

Open-source FHIR testing framework

Automated conformance testing

Test patient scenarios

**Inferno (ONC/MITRE)**:

Certification testing (US-focused but useful patterns)

Automated test suites

Comprehensive FHIR testing

**Testing Scope**:

**Syntactic Conformance**: Valid JSON/XML, correct structure

**Profile Conformance**: Resource meets profile constraints (cardinality, value sets, must-support)

**Semantic Conformance**: Data makes clinical sense (cross-field validation)

**Business Logic**: Workflows execute correctly (create prescription → dispense → administration)

**DICOM Conformance Testing**

**Tools**:

**DCM4CHE Validator**: Open-source DICOM validation

**DVTK (DICOM Validation Toolkit)**: Comprehensive DICOM testing

**RSNA MIRC**: Test DICOM integration

**Testing Scope**:

**DICOM Conformance Statement**: Each system must publish conformance statement

**Image Transfer**: C-STORE operations

**Query/Retrieve**: C-FIND, C-MOVE, C-GET

**DICOMweb**: WADO-RS, QIDO-RS, STOW-RS

**Terminology Conformance Testing**

**Testing Scope**:

**Code Lookup**: Verify terminology server returns correct details

**Value Set Expansion**: Validate all codes in value set retrieved

**Multi-language**: Test translations in all supported languages

**Performance**: Ensure response times meet targets

# 6.4.2 Connectathons and Plugfests

**Purpose**: Real-world interoperability testing events where vendors and implementers test their systems together.

**HL7 FHIR Connectathons**

**Format**: Multi-day events (typically 3-5 days) with vendors, implementers, and standards experts.

**Activities**:

**Test Scenarios**: Pre-defined clinical workflows

**Pair Testing**: Systems test interactions with each other

**Issue Resolution**: Identify and resolve interoperability issues

**Networking**: Build relationships with implementation community

**Benefits**:

**Validate Interoperability**: Confirm systems work together

**Identify Issues Early**: Find problems before production deployment

**Learn from Peers**: Share implementation experiences

**Vendor Testing**: Test vendor solutions before procurement

**Frequency**: HL7 holds global connectathons 2-3 times per year, plus regional events.

**Recommendation**: **National e-health programs should participate in connectathons** to validate their implementations.

**IHE Projectathons**

**Purpose**: Test IHE profiles (cross-enterprise document sharing, imaging, etc.).

**IHE Domains**:

**ITI (IT Infrastructure)**: Patient identity, document sharing (XDS, XCA, PIX, PDQ)

**PCC (Patient Care Coordination)**: Clinical content profiles

**RAD (Radiology)**: Medical imaging integration

**PHARM (Pharmacy)**: Medication management

**QRPH (Quality Research and Public Health)**: Quality reporting, public health

**Profiles Relevant to National e-Health**:

**XDS (Cross-Enterprise Document Sharing)**: Share documents across organizations

**XCA (Cross-Community Access)**: Query and retrieve across communities

**PIX/PDQ (Patient Identifier Cross-Referencing/Patient Demographics Query)**: Patient matching

**ATNA (Audit Trail and Node Authentication)**: Security auditing

**Estonia Example**: Participates in IHE Europe projectathons to test cross-border interoperability (eHDSI National Contact Point).

# 6.4.3 Certification Programs

**Purpose**: Formal certification that systems meet national standards and interoperability requirements.

**National Certification Program Design**

**Certification Scope**:

**FHIR API Conformance**: Adherence to national FHIR profiles

**Terminology Compliance**: Correct use of SNOMED CT, LOINC, ICD-11, etc.

**Security Requirements**: Authentication, authorization, encryption, audit logging

**Functional Requirements**: Core capabilities (patient registration, clinical documentation, ePrescription)

**Interoperability**: Successful exchange with national platform

**Certification Process**:

**Self-Assessment**: Vendor completes self-assessment checklist

**Documentation Review**: Submit conformance statements, architecture diagrams

**Automated Testing**: Run conformance tests (FHIR validator, terminology tests)

**Manual Testing**: Test clinical workflows, usability, security

**Interoperability Testing**: Connect to national test environment, execute test scenarios

**Review and Approval**: Certification body reviews results, issues certificate

**Ongoing Compliance**: Periodic re-certification (annual or biennial)

**Certification Tiers** (Optional):

**Tier 1 (Basic)**: Core FHIR resources, basic functionality

**Tier 2 (Standard)**: Extended resources, advanced features

**Tier 3 (Advanced)**: Full feature set, cross-border capabilities

**Benefits of Certification**:

**Quality Assurance**: Ensures minimum quality standards

**Vendor Accountability**: Vendors must meet requirements to sell in market

**Procurement Simplification**: Certified systems pre-qualified

**Public Trust**: Citizens know systems meet national standards

**Implementation Recommendation**: **Establish certification program during pilot phase, make mandatory before national rollout.**

# 6.4.4 Test Data and Scenarios

**Purpose**: Standardized test datasets and clinical scenarios for consistent testing.

**Synthetic Test Data**

**Requirements**:

**Realistic but Fictional**: Mimics real data without privacy concerns

**Comprehensive Coverage**: All resource types, edge cases, error conditions

**Multi-language**: Test data in all supported languages (Local, English)

**Volume**: Sufficient data for performance testing

**Test Data Categories**:

**Patient Test Data**: Diverse demographics, ages, genders, addresses

**Clinical Test Data**: Diagnoses, procedures, medications, allergies, lab results, imaging

**Administrative Test Data**: Appointments, billing, claims, referrals

**Edge Cases**: Unusual names, complex family structures, multiple identifiers, conflicting data

**Error Cases**: Invalid data for negative testing

**Tools**:

**Synthea**: Open-source synthetic patient generator (US-focused, can be adapted)

**FHIR Test Data Generator**: Custom scripts to generate FHIR resources

**Test Patient Libraries**: Pre-built test patients for common scenarios

**Test Scenarios**

**Example Scenarios**:

**Scenario 1: Patient Registration and Appointment**

Register new patient

Create appointment

Check-in patient

Record vital signs

Document encounter

Prescribe medication

Generate bill

**Scenario 2: Laboratory Order and Results**

Physician orders lab tests (LOINC codes)

Order transmitted to LIS

Patient visits laboratory

Specimen collected and processed

Results generated in LIS

Results sent to EHR (HL7 v2 or FHIR)

Physician reviews results in portal

Patient views results in patient portal

**Scenario 3: ePrescription Workflow**

Physician prescribes medication (SNOMED CT/ATC codes)

Prescription created in EHR

Prescription transmitted to national ePrescription system

Patient visits pharmacy

Pharmacist queries for patient prescriptions

Pharmacist dispenses medication

Dispense record created

Patient views prescription history in portal

Automatic refill reminder sent

**Scenario 4: Cross-Border Patient Summary**

Patient from Estonia travels to Progressa

Local physician requests patient summary

Progressa NCP queries Estonia NCP

Estonia verifies patient consent

Estonia generates IPS (International Patient Summary)

IPS transmitted to Progressa

Local physician views translated summary

Treatment provided and documented locally

**Scenario 5: Medical Imaging Workflow**

Physician orders imaging study (CT scan)

Order sent to radiology (FHIR ServiceRequest)

Radiology creates worklist (DICOM MWL)

Technologist performs scan

Images sent to PACS (DICOM C-STORE)

Radiologist interprets images

Report created (DICOM SR or FHIR DiagnosticReport)

Report and images available in EHR

Referring physician reviews

Patient views report in portal (with image viewer)

**Scenario 6: Emergency Access (Break-the-Glass)**

Patient arrives unconscious at emergency department

Physician requires immediate access to EHR

Emergency access requested

Access granted with audit log entry

Critical information retrieved (allergies, medications, chronic conditions)

Treatment provided

Patient later views audit log showing emergency access

Patient can question access if necessary

**Scenario 7: Data Quality and Validation**

Clinician enters diagnosis code

System validates code exists in SNOMED CT

System checks code is not deprecated

System suggests more specific code if available

Clinician enters lab result

System validates value within clinical range

System flags abnormal results

System checks units match test type (UCUM validation)

**Scenario 8: Multi-Language Support**

Local-speaking patient uses patient portal

Interface displays in Local

Clinical terms shown in the local language (from terminology translations)

Patient switches to English

All content re-renders in English

Consistency validated across languages

**Negative Test Scenarios**

**Purpose**: Test error handling and security.

**Negative Scenario 1: Invalid Authentication**

User attempts login with wrong credentials

System denies access

Audit log records failed attempt

After multiple failures, account locked

**Negative Scenario 2: Unauthorized Data Access**

User attempts to access patient record without permission

System denies access

Audit log records unauthorized attempt

Security alert generated

**Negative Scenario 3: Invalid Data**

System receives FHIR resource with invalid structure

System validates and rejects

OperationOutcome returned with error details

Sending system notified

**Negative Scenario 4: Network Failure**

Connection lost during data transmission

System implements retry logic

If retry fails, message queued for later

Status visible to user

**Negative Scenario 5: Terminology Code Not Found**

Clinician enters code not in terminology

System flags invalid code

System suggests similar valid codes

Prevents saving with invalid code

# 6.5 Standards Publishing Center

# 6.5.1 Purpose and Structure

**Purpose**: Central repository for all standards documentation, implementation guides, and resources accessible to stakeholders.

**Target Audiences**:

**Developers**: Need technical specifications, APIs, code examples

**Healthcare Providers**: Need clinical documentation, workflows, training materials

**Administrators**: Need governance documents, policies, procedures

**Vendors**: Need integration requirements, certification criteria, test tools

**Researchers**: Need data dictionaries, terminology mappings, APIs

# 6.5.2 Content Organization

**Core Content Categories**

# 1. Standards Documentation

International standards summaries (FHIR, DICOM, SNOMED CT, LOINC, ICD-11)

National profiles and extensions

Version history and release notes

Deprecated standards and migration guides

# 2. Implementation Guides

National FHIR Implementation Guide (comprehensive)

Service-specific IGs (ePrescription IG, Laboratory IG, Imaging IG, etc.)

Cross-border interoperability guides (IPS, eHDSI)

Mobile app integration guide

Security and privacy implementation guide

# 3. Terminology Resources

Terminology access instructions

Value sets catalog

Code system documentation

Translation status (which terminologies translated, coverage percentage)

Terminology browser/search tool

# 4. API Documentation

FHIR API reference (all supported resources, operations, search parameters)

Authentication and authorization guide

Rate limits and throttling policies

Error codes and handling

API versioning strategy

Interactive API explorer (Swagger/OpenAPI)

# 5. Code Examples and Libraries

Sample FHIR resources for all profiles

Client libraries (Python, Java, JavaScript, C#)

Integration code examples

Test data generators

Open-source reference implementations

# 6. Testing and Certification

Certification requirements and process

Test scenarios and test data

Conformance testing tools

Connectathon information and registration

Certification status of vendors

# 7. Governance Documentation

Standards governance structure and processes

Terminology authority charter and membership

Change request process

Roadmap and upcoming changes

Decision logs (ADRs)

# 8. Training Materials

Video tutorials

Webinar recordings

Training slides and handouts

FAQs

Glossary of terms

Use case walkthroughs

# 9. Support Resources

Developer forum

Issue tracking system (GitHub, JIRA)

Contact information for support

SLA and support hours

Escalation procedures

# 6.5.3 Technology Platform

**Platform Requirements**:

**Static Site Generator**: Fast, secure, version-controlled (e.g., Jekyll, Hugo, MkDocs)

**Search Functionality**: Full-text search across all documentation

**API Documentation**: Interactive API explorer (Swagger UI, Redoc)

**Terminology Browser**: Web-based terminology search and browsing

**Version Control**: Document versioning, change tracking (Git backend)

**Multi-Language**: Support for Local, English, English

**Responsive Design**: Mobile-friendly

**Accessibility**: WCAG 2.1 AA compliant

**Analytics**: Track page views, popular content, user behavior

**Feedback Mechanism**: Users can comment, report issues, suggest improvements

**Recommended Tools**:

**Documentation**: MkDocs Material (beautiful, easy to use) or Docusaurus (React-based)

**API Docs**: Swagger UI / Redoc (OpenAPI 3.0)

**Terminology Browser**: HAPI FHIR built-in UI, or custom React app

**Search**: Algolia DocSearch (free for open-source) or Elasticsearch

**Hosting**: GitHub Pages (free, simple) or national cloud infrastructure

# 6.5.4 Publication Workflow

**Authoring Process**:

**Draft**: Authors create content in Markdown/AsciiDoc

**Review**: Technical review by standards team

**Approval**: Governance board approves major changes

**Staging**: Publish to staging environment for testing

**Production**: Deploy to production Standards Publishing Center

**Notification**: Announce updates via email, RSS feed, social media

**Version Control**:

All content in Git repository (transparency, auditability)

Semantic versioning for implementation guides (major.minor.patch)

Changelogs documenting all updates

Archived versions accessible (previous versions remain available)

**Update Cadence**:

**Major Updates**: Annually (new standard versions, significant profile changes)

**Minor Updates**: Quarterly (clarifications, new examples, bug fixes)

**Patches**: As needed (critical corrections, urgent changes)

# 6.5.5 Examples from Reference Implementations

**Estonia**: National Health IT standards published on e-Health Foundation website, including:

Architecture documentation

Data exchange specifications (X-Road services)

Document structure specifications (CDA templates)

Terminology guidelines (LOINC, SNOMED CT usage)

**Progressa Requirements**: DHP Standards Publishing Center to publish:

Translated standards documentation (Local, English)

Implementation guides for all DHP services

FHIR profiles and resources

Terminology access and usage guidelines

Developer onboarding materials

# 6.6 Standards Roadmap and Evolution

# 6.6.1 Standards Lifecycle Management

**Emerging Standards** (Monitor and Evaluate):

FHIR R6 (in development)

New IHE profiles

WHO SMART Guidelines (FHIR-based clinical decision support)

HL7 Bulk Data Access (FHIR bulk export for analytics)

**Trial Use Standards** (Pilot Testing):

FHIR R5 enhancements (consider for new services)

IPS 2.0 updates

New SNOMED CT compositional grammar

**Mature Standards** (Production Use):

FHIR R4 (current production standard)

DICOM 2024 edition

SNOMED CT International Edition

LOINC 2.78+

ICD-11 2024 version

**Deprecated Standards** (Plan Migration):

HL7 v2 (legacy support only, no new implementations)

HL7 v3/CDA (transition to FHIR)

ICD-10 (migrate to ICD-11 by 2027)

# 6.6.2 Migration Strategy for Deprecated Standards

**HL7 v3/CDA to FHIR Migration**

**Estonia's Challenge**: 150M+ CDA documents, need to transition to FHIR while preserving legal records.

**Migration Approach**:

**Preserve Legacy**: Keep CDA documents as immutable legal records

**FHIR Extraction**: Extract data from CDA into FHIR resources for analytics

**Dual Support**: Support both CDA and FHIR during transition (3-5 years)

**New Content in FHIR**: All new clinical content created as FHIR-native

**Gradual Deprecation**: Phase out CDA creation over time

**Technical Pattern**:

CDA Document (Existing)

   ↓ Parse and Extract

FHIR Resources (DiagnosticReport, Observations, Conditions, etc.)

   ↓ Store

FHIR Server (queryable, analytics-ready)

+

DocumentReference (FHIR) → links to original CDA (preserved)

**ICD-10 to ICD-11 Migration**

**Timeline**: WHO recommends transition by 2027.

**Migration Strategy**:

**Preparation Phase** (2024-2025):

Translate ICD-11 into national languages

Train medical coders on ICD-11

Develop ICD-10 to ICD-11 mapping tools

Update systems to support ICD-11

**Dual Coding Phase** (2025-2026):

Code in both ICD-10 and ICD-11

Validate mapping accuracy

Collect feedback from coders

Refine translation and mapping

**Transition Phase** (2026-2027):

Pilot ICD-11-only in selected facilities

Monitor quality and accuracy

Resolve issues

Prepare for national cutover

**Production Phase** (2027+):

National cutover to ICD-11

ICD-10 archived (read-only for historical data)

Ongoing ICD-11 updates

**Progressa Advantage**: Starting with ICD-11 from inception, avoiding migration costs.

# 6.6.3 Future Standards on the Horizon

**FHIR Evolution**:

**FHIR R6**: Expected ~2027, focus on maturity and performance

**FHIR Bulk Data**: Large-scale data export for analytics and research

**FHIR Subscriptions R5**: Real-time event notifications

**FHIR Shorthand (FSH)**: Simpler profile authoring

**Genomics and Precision Medicine**:

**HL7 Genomics Reporting IG**: FHIR-based genomic data

**GA4GH Standards**: Global Alliance for Genomics and Health

**AI and Machine Learning**:

**FHIR Clinical Reasoning Module**: Decision support rules

**WHO SMART Guidelines**: FHIR-based clinical guidelines

**MLOps for Healthcare**: Operationalizing AI/ML models

**Emerging Technologies**:

**Blockchain for Health**: Distributed ledger for consent, provenance

**FHIR IoT**: Integrating wearables and medical devices

**FHIR on IPFS**: Decentralized storage

**Recommendation**: **Monitor emerging standards through HL7 Working Groups, WHO, IHE. Pilot promising technologies in sandbox environments before production adoption.**

# 6.7 Key Takeaways and Implementation Priorities

# 6.7.1 Critical Success Factors

✅ **Standards-First Approach**: Adopt international standards from day one to avoid technical debt.

✅ **FHIR as Primary Standard**: Use HL7 FHIR R4 (minimum) or R5 for all new implementations.

✅ **Comprehensive Terminology**: Implement SNOMED CT, LOINC, ICD-11, WHO ATC, UCUM at minimum.

✅ **National Licensing**: Secure SNOMED CT national license, establish National Release Centre.

✅ **Translation as Core Function**: Invest in high-quality translation into all national languages from the start.

✅ **Terminology Governance**: Establish National Terminology Authority before implementation begins.

✅ **Interoperability Testing**: Participate in connectathons, establish certification program.

✅ **Standards Publishing Center**: Create comprehensive, accessible documentation portal.

✅ **Open Standards**: Avoid proprietary standards; use open, freely available standards wherever possible.

✅ **Community Engagement**: Build relationships with international standards communities (HL7, IHE, SNOMED, Regenstrief).

# 6.7.2 Implementation Sequence by Maturity Level

**Foundation Level (Months 1-6)**

**Priority**: Establish legal and infrastructure foundation.

**Standards Activities**:

✅ Secure SNOMED CT national license

✅ Join HL7 International (access FHIR specifications)

✅ Join DICOM working groups (if imaging planned)

✅ Download and evaluate terminology content (SNOMED CT, LOINC, ICD-11, ATC)

✅ Select terminology server platform (HAPI FHIR TS, Ontoserver)

✅ Select FHIR server platform (HAPI FHIR, IBM FHIR Server)

✅ Establish Standards Publishing Center platform

✅ Begin translation of core terminology subsets (top 5,000-10,000 concepts)

**Deliverables**:

Licensing agreements in place

Terminology server infrastructure deployed (test environment)

FHIR server infrastructure deployed (test environment)

Initial translated terminology subsets loaded

Standards Publishing Center online with initial content

**Pilot Level (Months 6-18)**

**Priority**: Validate standards in limited production environment.

**Standards Activities**:

✅ Deploy terminology server to pilot sites

✅ Deploy FHIR server to pilot sites

✅ Develop national FHIR profiles (Patient, Practitioner, Organization, Observation, Condition, MedicationRequest, etc.)

✅ Create pilot Implementation Guides (ePrescription IG, Laboratory IG)

✅ Translate additional terminology content (expand to 20,000-50,000 concepts)

✅ Define core value sets (common diagnoses, lab tests, medications)

✅ Test interoperability with pilot healthcare facilities

✅ Conduct internal connectathon with pilot vendors

✅ Establish certification criteria and process

**Deliverables**:

National FHIR profiles published

Pilot IGs published on Standards Publishing Center

Terminology coverage sufficient for pilot services

Successful interoperability testing with 3-5 pilot sites

Certification framework documented

**National Rollout Level (Months 18-36)**

**Priority**: Scale standards to national level.

**Standards Activities**:

✅ Complete terminology translation (all frequently used concepts)

✅ Deploy terminology server at national scale (production)

✅ Deploy FHIR server at national scale (production)

✅ Publish comprehensive national Implementation Guides (all services)

✅ Establish vendor certification program (mandatory for national integration)

✅ Conduct national connectathons (quarterly or biannual)

✅ Establish terminology update cycle (synchronized with international releases)

✅ Launch developer portal with API documentation, code samples, test data

✅ Integrate with cross-border infrastructure (if applicable: EU eHDSI, regional HIE)

**Deliverables**:

National-scale terminology and FHIR infrastructure

All services documented with IGs

Vendor certification program operational

Regular connectathon schedule

Active developer community

**Optimization Level (Months 36+)**

**Priority**: Continuous improvement and innovation.

**Standards Activities**:

✅ Monitor emerging standards (FHIR R6, new IHE profiles, WHO SMART Guidelines)

✅ Pilot emerging technologies (FHIR Bulk Data, AI/ML integration, genomics)

✅ Contribute to international standards development (propose national requirements to HL7, SNOMED)

✅ Expand terminology coverage to specialized domains (rare diseases, genomics)

✅ Enhance Standards Publishing Center (interactive tutorials, sandbox environments)

✅ Establish Center of Excellence for health interoperability

✅ Host regional connectathons (support neighboring countries)

✅ Publish research on standards implementation and outcomes

**Deliverables**:

Participation in international standards bodies

Center of Excellence operational

Regional leadership in health interoperability

Research publications and conference presentations

# 6.7.3 Budget Considerations

**Initial Costs (Years 1-2)**:

**SNOMED CT Licensing**: €20,000-€100,000/year (depends on country GDP)

**HL7 Membership**: €2,000-€5,000/year (organizational membership)

**DICOM Membership**: ~€2,000/year (if needed)

**Translation Services**: €200,000-€500,000 (professional medical translation for core terminology)

**Terminology Server**: €0 (open-source) or €20,000-€100,000/year (commercial with support)

**FHIR Server**: €0 (open-source) or €50,000-€200,000/year (commercial with support)

**Training**: €50,000-€100,000 (staff training on standards)

**Consultancy**: €100,000-€300,000 (international experts for initial setup)

**Connectathon Participation**: €10,000-€30,000/year (travel, registration)

**Standards Publishing Center**: €20,000-€50,000 (platform setup and initial content)

**Total Initial Investment**: €400,000-€1,300,000

**Ongoing Costs (Years 3+)**:

**Annual Licenses**: €22,000-€107,000/year (SNOMED CT, HL7, DICOM)

**Translation Updates**: €50,000-€100,000/year (synchronize with international releases)

**Infrastructure Maintenance**: €20,000-€100,000/year (servers, hosting, support)

**Terminology Governance**: €100,000-€200,000/year (staff, committees)

**Training**: €30,000-€50,000/year (ongoing training for new staff, updates)

**Connectathons**: €10,000-€30,000/year

**Standards Publishing Center**: €10,000-€30,000/year (updates, maintenance)

**Total Annual Operating Cost**: €242,000-€617,000

**ROI Justification**:

**Avoided Integration Costs**: €1-5M/year (reduced custom integration with standardized APIs)

**Vendor Competition**: €500K-€2M/year (competitive procurement with open standards)

**Future-Proofing**: €500K-€2M avoided migration costs (no technical debt from proprietary standards)

**Clinical Outcomes**: Unquantified but significant (better care coordination, fewer errors)

**Net Benefit**: €2-7M/year savings from Year 3 onwards.

# 6.7.4 Risk Mitigation

**Risk 1: Translation Quality Issues**

**Mitigation**: Engage board-certified medical professionals, implement multi-stage QA, pilot with clinicians before production.

**Risk 2: Vendor Non-Compliance**

**Mitigation**: Mandatory certification program, financial penalties for non-conformance, public certification registry.

**Risk 3: Standards Evolution (Breaking Changes)**

**Mitigation**: Use normative standards only (FHIR R4+), implement versioning strategy, dual-support during transitions.

**Risk 4: Insufficient Terminology Coverage**

**Mitigation**: Phased translation prioritising high-frequency concepts, a mechanism for rapid additions, and national extensions when needed.

**Risk 5: Interoperability Failures**

**Mitigation**: Rigorous conformance testing, regular connectathons, comprehensive test scenarios, sandbox environments.

**Risk 6: Under-Resourced Terminology Governance**

**Mitigation**: Dedicated staff, sustainable funding model, clear governance mandate, executive sponsorship.


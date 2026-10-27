# 4. Data Architecture (To-Be)

The data architecture defines how health data will be governed, organised, integrated, and protected across the Ministry of Health's digital health ecosystem. It translates the principles established in Section 2 — particularly HP-02 (Interoperability by Design), HP-04 (Sovereign Health Data), HP-05 (Open Standards and Open Source), and HP-06 (Patient-Centred Identity) — into specific data governance structures, master data management strategies, integration standards, and privacy frameworks.

The current state, documented in D5, reveals a data landscape characterised by fragmentation: at least eight distinct health information systems maintain separate data stores with no shared patient identifier, no national health data dictionary, no master data registries, and no data governance framework. A recent health information system assessment found only about half of data sources adequate and limited data use resources. DHIS2 serves as the national aggregate data platform, but its role as a decision-support tool is constrained by incomplete and untimely facility reporting, limited analytical capacity at sub-national levels, and the absence of individual-level clinical data from the ~90% of facilities that rely on paper-based clinical registers.

This section specifies the target data architecture across five domains: data governance (Section 4.1), master data management (Section 4.2), data integration architecture (Section 4.3), analytics and business intelligence (Section 4.4), and data classification and privacy (Section 4.5). Together, these domains create the information foundation on which the application architecture (Section 5), integration architecture (Section 6), and technology architecture (Section 7) are built.

---

## 4.1 Data Governance Framework

### 4.1.1 Data Ownership Model

Effective data governance begins with unambiguous ownership. Each health information system and its associated data assets must have a designated data owner — an accountable individual at directorate level or equivalent who has authority over data definitions, quality standards, access policies, and sharing decisions for their domain.

The following table establishes the data ownership model for the target architecture. Data owners are responsible not only for the quality and integrity of the data within their systems but also for authorising data flows to and from other systems through the HIE. This ownership model is enforced through the National Digital Health Steering Committee (Section 3.1.1) and operationalised through the Digital Health and Data Directorate (Section 3.1.1).

| Data Domain | System(s) | Data Owner | Directorate / Agency | Responsibilities |
|-------------|-----------|------------|---------------------|------------------|
| Aggregate health statistics | DHIS2 | Director of Planning and Information | Directorate of Planning and Information | HMIS indicator definitions, reporting templates, data quality assurance, facility reporting compliance |
| Civil registration and vital statistics | eCRVS / CIVIS | Director of Health Services (Civil Registration) | Civil Registration Unit, MoH | Birth/death registration standards, NIN assignment policy, data sharing authorisation with NHIA and MPI |
| Health insurance enrollment and claims | e-NHIS | Executive Director, NHIA | National Health Insurance Authority | Beneficiary data standards, claims data quality, enrollment verification rules, provider credentialing data |
| Immunisation records | SPT / DHIS2 Tracker EIR | Director of Public Health (EPI Manager) | Expanded Programme on Immunisation | Individual immunisation records, defaulter tracking, coverage calculation methodology, cold chain data |
| Disease surveillance | IDSR / DHIS2 Tracker | Director of Public Health | Directorate of Public Health | Case definitions, notification thresholds, outbreak data, IDSR reporting standards, IHR compliance |
| Laboratory data | A-LIS | Director of Laboratory Services | Directorate of Laboratories | Test result coding (LOINC), quality assurance, reference ranges, laboratory network data |
| Patient clinical records | OpenMRS (EHR) | Director of Health Services | Directorate of Health Services | Clinical data standards, EHR content requirements, clinical terminology governance, care protocol data |
| Patient identity | OpenCR (MPI) | Director of Planning and Information | Digital Health and Data Directorate | Identity matching rules, identifier lifecycle management, cross-system identity resolution policies |
| Pharmaceutical supply chain | OpenLMIS | Director of Pharmaceutical Services | National Drug Service | Stock data standards, consumption reporting, distribution tracking, expiry management |
| Health workforce | iHRIS / HRMIS | Director of Human Resources | Directorate of Human Resources | Health worker credentials, deployment data, professional licensing, training records |
| Facility registry | DHIS2 Organisation Units | Director of Planning and Information | Digital Health and Data Directorate | Facility master list, facility coding, GIS coordinates, service availability classification |

Data owners are accountable to the NDHSC and exercise their authority within the data governance policies approved by the Data Standards and Governance Technical Working Group (TWG-DSG, established in Section 3.1.1). No data owner may unilaterally change data definitions, identifier formats, or sharing policies that affect other systems in the health information ecosystem — such changes require TWG-DSG review and NDHSC approval.

### 4.1.2 Data Stewardship Roles

While data owners set policy, data stewards execute it. The stewardship model operates at three levels, reflecting the health system's administrative structure.

**National Level — Digital Health and Data Directorate (DHDD).** The DHDD (proposed in Section 3.1.1) serves as the custodian of data governance operations across MoH. Within the DHDD, the following stewardship roles are essential:

- **Chief Data Steward** (1 position): Coordinates data governance across all health information systems; maintains the national health data dictionary; manages data sharing agreements between MoH directorates and with external agencies; reports to TWG-DSG; chairs monthly data governance operational meetings.
- **DHIS2 Data Manager** (1 position, existing): Manages HMIS metadata, indicator definitions, data validation rules, and aggregate reporting; ensures consistency between DHIS2 metadata and the national health data dictionary.
- **Integration Data Steward** (1 position): Manages master data registries (MPI, facility registry, terminology services) within the HIE; monitors data quality across integration flows; maintains FHIR resource profiles and mapping documentation.
- **Health Information Security Officer** (1 position): Manages data classification enforcement, access control policies, audit log review, and incident response for health data breaches; coordinates with the planned NCSC on health-sector-specific security.

**Regional Level — Regional Health Data Officers.** Each of Progressa's seven administrative regions requires a Regional Health Data Officer (7 positions total, phased 2026–2028 per the DHDD staffing plan in Section 3.1.1). Regional data officers are responsible for:

- Supervising facility-level data quality for DHIS2 reporting in their region.
- Conducting quarterly data verification visits to facilities (currently ad hoc).
- Providing first-line support for digital health systems at facility level.
- Escalating data quality issues that require metadata changes to the national DHIS2 Data Manager.
- Monitoring eCRVS registration completeness and timeliness within their region.

**Facility Level — Facility Data Focal Points.** Every health facility using digital health systems (currently all ~90 for DHIS2/SPT; progressively more as EHR and eLMIS are deployed) designates a data focal point — typically a senior nurse, records officer, or health information assistant. Facility data focal points are responsible for:

- Ensuring timely and complete monthly DHIS2 reporting.
- Maintaining data quality at the point of entry (validation, completeness checks).
- Acting as the primary contact for data-related queries from regional and national levels.
- Supporting EHR and other system operations at their facility.

The current situation — where ~90% of facilities have IDSR-trained focal persons and basic DHIS2 data entry is widely practiced — provides a foundation on which this stewardship model can be built. The primary gap is formalising the role, providing structured training on data quality management (beyond data entry), and linking facility focal points into the regional and national stewardship chain.

### 4.1.3 Data Quality Management Framework

Data quality is not an abstract concern in Progressa's health sector — it directly affects resource allocation, disease outbreak detection, immunisation coverage calculations, and insurance claims accuracy. A recent HIS assessment found only about half of data sources adequate, indicating significant room for improvement.

The target data quality management framework defines five dimensions, each with measurable targets and accountable stewards.

| Dimension | Definition | Current Baseline | Target (2028) | Target (2033) | Measurement Method |
|-----------|-----------|-----------------|---------------|---------------|-------------------|
| **Completeness** | Percentage of expected data elements reported | Varies; DHIS2 monthly reporting rate ~70–80% nationally | ≥90% for DHIS2 monthly reports; ≥85% for eCRVS birth registration | ≥95% for all routine health data; ≥90% for real-time case-based surveillance | DHIS2 completeness dashboard; eCRVS registration rate; EHR record completeness audit |
| **Timeliness** | Percentage of data submitted within the designated reporting period | DHIS2: variable, many facilities report late | ≥85% of facilities report within 15 days of month-end | ≥95% within reporting deadline; surveillance case notification within 24 hours | DHIS2 timeliness indicator; IDSR notification timestamp analysis |
| **Accuracy** | Agreement between recorded values and verified values | SPT: >99% data accuracy; DHIS2: not systematically verified | Discrepancy rate <5% for key indicators at quarterly data verification | Discrepancy rate <3%; automated validation catches >80% of entry errors | Quarterly data verification visits (regional officers); automated DHIS2 validation rules |
| **Consistency** | Agreement between the same data reported through different systems or levels | Significant inconsistencies between facility registers and DHIS2 entries (paper-to-digital transcription) | Cross-system consistency checks operational for MPI-linked records; DHIS2 validation rules enforced | Automated cross-system reconciliation for all HIE-connected systems | MPI duplicate detection rate; DHIS2 inter-period consistency checks; HIE transaction audit logs |
| **Uniqueness** | Absence of duplicate records within and across systems | No MPI; duplicate patient records likely across eCRVS, e-NHIS, and facility registers | MPI operational with <5% unresolved duplicate rate | MPI duplicate rate <2%; all systems cross-reference MPI for patient identification | OpenCR matching statistics; e-NHIS enrollment deduplication rate |

**Operational mechanisms for data quality improvement:**

*Automated validation rules.* DHIS2 supports configurable validation rules that flag impossible or implausible values during data entry (e.g., facility reporting more vaccinations than live births, negative stock values, age-sex mismatches). The current rule set is limited. The target architecture expands the validation rule library to cover all priority indicators, with rules enforced at entry time (blocking submission of invalid data) rather than applied retrospectively. For EHR data, OpenMRS validation rules enforce mandatory fields for priority clinical forms (antenatal visit, HIV encounter, immunisation record).

*Quarterly data verification.* Regional Health Data Officers conduct structured data verification visits to a sample of facilities each quarter, comparing paper registers with digital entries to identify systematic errors, training gaps, and data entry shortcuts. This practice exists in limited form under the current HMIS programme but is not standardised or consistently funded. The target architecture makes quarterly verification a formal responsibility of regional data officers, with a standardised verification tool and results reported to TWG-DSG.

*Data quality scorecards.* DHIS2 dashboards are configured to display facility-level and regional-level scorecards showing completeness, timeliness, and selected accuracy indicators in a traffic-light format. These scorecards are reviewed at monthly regional health management meetings and quarterly NDHSC sessions, creating accountability at every level of the health system.

*Feedback loops.* When data quality issues are identified — whether through automated validation, verification visits, or scorecard reviews — the data governance framework requires a documented corrective action. This may include targeted retraining for facility staff, metadata corrections by the national DHIS2 Data Manager, system configuration changes (additional validation rules, clearer form instructions), or escalation to the data owner for policy-level decisions.

### 4.1.4 Health Data Protection Policy

Progressa currently lacks a comprehensive data protection law. The CRVS Bill is pending enactment, the Cyber Security Bill is under formulation, and the REC regional framework on personal data protection provides a regional framework but has limited enforcement mechanisms. This legal vacuum creates uncertainty around health data sharing, patient consent, and cross-border data exchange.

The target architecture addresses this through an interim MoH Health Data Protection Policy — an administrative instrument issued under the Permanent Secretary's authority — that establishes operational data protection practices while the national legal framework matures. This policy is designed to be subsumed into the national data protection regime when legislation is enacted, not to create a parallel governance structure.

**Core principles of the MoH Health Data Protection Policy:**

1. **Lawful purpose.** Health data shall be collected, used, and shared only for purposes directly related to healthcare delivery, public health management, health research (with appropriate ethics approval), and statutory health reporting obligations. Processing of health data for purposes unrelated to health (e.g., commercial marketing, political profiling) is prohibited.

2. **Data minimisation.** Health information systems shall collect only the data elements necessary for their designated function. Collection of additional data fields "for future use" without a defined and approved purpose is prohibited.

3. **Consent management.** Where data are collected directly from individuals (e.g., eCRVS registration, e-NHIS enrollment, EHR clinical encounters), informed consent for the specific data use is required. Consent must be recorded in the system and must specify the scope of data sharing authorised. For public health surveillance under IDSR, statutory reporting obligations provide the legal basis for data collection without individual consent, but the data may only be used for surveillance and outbreak response purposes.

4. **Data sharing agreements.** Any data flow between MoH directorates, between MoH and NHIA, or between MoH and external agencies (PBoS, RHO, WHO) requires a formal data sharing agreement approved by the relevant data owners and endorsed by the NDHSC. Data sharing agreements specify the data elements shared, the purpose, the retention period, the security controls, and the responsibilities of each party.

5. **Individual rights.** Individuals have the right to access their own health records, to request correction of inaccurate data, and to receive information about how their health data are used. These rights are operationalised progressively as digital systems mature — the EHR provides patient access capability that paper registers do not.

6. **Breach notification.** Any unauthorised access, disclosure, or loss of health data must be reported to the Health Information Security Officer within 24 hours, investigated, and affected individuals notified within 72 hours of confirmation. Breach reports are submitted to the NDHSC quarterly.

7. **Alignment with REC framework.** The policy aligns with the REC regional framework on personal data protection, specifically the principles of legitimacy, purpose limitation, proportionality, accuracy, transparency, confidentiality, and security. This positions MoH to comply with any national data protection law that implements the REC framework.

8. **Cross-border data exchange.** Identifiable health data may be shared across borders only for international health reporting obligations (WHO IHR, RHO, REC), approved health research collaborations with ethics approval and data sharing agreements, and emergency public health response (outbreak investigation, contact tracing). All cross-border data sharing must be authorised by the data owner and the NDHSC.

---

## 4.2 Master Data Management Strategy

Master data — the core reference data entities that multiple systems need to share and agree on — is the foundation of interoperability. Without consistent, authoritative master data, integration efforts produce unreliable results: a patient registered in eCRVS cannot be linked to their immunisation record in SPT or their insurance enrollment in e-NHIS; a health facility in DHIS2 may carry a different code or name than the same facility in the e-NHIS provider directory; and laboratory tests reported from A-LIS cannot be matched to clinical orders in the EHR.

The target master data management strategy addresses four primary master data domains: patient identity (the Master Patient Index), facility identity (the Facility Registry), health workforce identity (the Health Worker Registry), and clinical terminology (Terminology Services).

### 4.2.1 Master Patient Index (MPI)

The absence of a unified patient identifier across Progressa's health systems is the single most consequential data gap identified in the current state assessment. A child born and registered in eCRVS receives a National Identification Number, but that NIN is not used by SPT (which tracks the same child's immunisations), by e-NHIS (which may cover the child under the mother's insurance enrollment), or by any health facility's clinical records (where the child is identified by a facility-specific medical record number, or often by name and date of birth alone). This fragmentation prevents longitudinal care coordination, makes insurance verification difficult, and undermines the accuracy of aggregate statistics where deduplication is needed.

**Platform selection: OpenCR (Open Client Registry).** The target architecture deploys OpenCR as the Master Patient Index platform, aligned with the OpenHIE client registry component and design decision DD-02 (Section 2.4). OpenCR is an open-source, standards-based client registry deployed in Botswana, Haiti, and Uganda. It supports both deterministic and probabilistic matching algorithms, exposes FHIR-compatible APIs, and is designed to operate within an OpenHIE architecture alongside OpenHIM (the HIE interoperability layer).

**Identifier strategy.** The MPI accepts and reconciles multiple identifiers, organised in a hierarchy of trust:

| Identifier Type | Source | Coverage | Trust Level | MPI Role |
|----------------|--------|----------|-------------|----------|
| eCRVS NIN (10-digit) | eCRVS / CIVIS platform | about 1 million people (~50% population) | **Primary / foundational** | Root identifier; highest confidence for identity resolution |
| Immigration NIN | Progressa Immigration Department | Unknown coverage | **Secondary** | Accepted as alternate identity; linked to eCRVS NIN when both exist for same person |
| e-NHIS Beneficiary ID | e-NHIS platform | 15,000–20,000 beneficiaries | **Secondary** | Cross-referenced against MPI record; not a stand-alone identifier |
| Facility Medical Record Number (MRN) | Individual health facilities | Facility-specific; no standardisation | **Tertiary** | Facility-level identifier stored in MPI as a local alias; used for matching when no NIN available |
| SPT Child ID | SPT / Vaxa platform | 350,000–400,000 children | **Secondary** | Linked to MPI record; supports immunisation record linkage |
| EHR Patient ID | OpenMRS | New (as deployed) | **Secondary** | Generated during EHR enrollment; cross-referenced with MPI from creation |

**Matching approach.** OpenCR employs a combined matching strategy:

*Deterministic matching* is applied when a patient presents with a verified eCRVS NIN. The NIN is used as the primary lookup key against the MPI, producing a confirmed match when the NIN matches exactly. Deterministic matching also applies when two identifiers from different systems (e.g., eCRVS NIN and e-NHIS beneficiary ID) are both present in the MPI record.

*Probabilistic matching* is applied when a patient presents without a NIN — a situation that will remain common given that eCRVS covers only ~50% of the population and many existing health system users were not captured in the eCRVS mass registration. Probabilistic matching uses a weighted algorithm across multiple demographic fields:

| Field | Weight (indicative) | Notes |
|-------|---------------------|-------|
| Full name (phonetic) | High | Soundex or Double Metaphone for name variants; Progressa has naming patterns that require attention to patronymic variations |
| Date of birth | High | Exact match or ±1 day (to accommodate registration recording differences) |
| Sex | Medium | Binary field; contributes to match confidence |
| Mother's name | Medium | Particularly useful for paediatric matching (infants without own NIN) |
| Phone number | Medium | ~80% mobile phone ownership; useful discriminator but numbers change |
| Village/locality | Low-Medium | Useful as a discriminator but subject to variation in spelling and administrative boundary changes |
| Facility of first contact | Low | Stored in MPI; useful for manual review of uncertain matches |

The matching configuration targets a sensitivity of ≥95% (minimising false negatives — patients who are actually the same person but are not matched) and a specificity of ≥98% (minimising false positives — patients who are incorrectly identified as the same person). Matches above a configurable confidence threshold (e.g., ≥0.85 on a 0–1 scale) are auto-linked. Matches in a "grey zone" (e.g., 0.60–0.84) are queued for manual review by the Integration Data Steward. Matches below 0.60 result in a new MPI record.

**MPI-to-HIE integration.** The MPI operates as a core service within the HIE (OpenHIM). All systems that submit or query patient data through the HIE must first resolve patient identity against the MPI. The standard workflow is:

1. A clinical system (e.g., OpenMRS at a facility) submits a patient lookup request to OpenHIM, including available identifiers and demographics.
2. OpenHIM routes the request to OpenCR.
3. OpenCR performs deterministic and/or probabilistic matching and returns the canonical patient identifier (MPI ID) along with linked identifiers from other systems.
4. The clinical system uses the MPI ID for all subsequent transactions through the HIE.
5. If no match is found, OpenCR creates a new MPI record and returns the newly assigned MPI ID.

This workflow is implemented using the IHE PIXm (Patient Identifier Cross-referencing for Mobile) and PDQm (Patient Demographics Query for Mobile) FHIR-based profiles, which are purpose-built for patient identity resolution in health information exchanges.

**Phased deployment.** MPI deployment proceeds in three phases:

- **Phase 1 (2026–2027)**: Load eCRVS registration data as the seed population. Establish MPI-to-eCRVS integration. Begin linking e-NHIS beneficiary records to MPI entries (supports the eCRVS-NHIS integration planned for August 2025). Deploy OpenCR within the OpenHIM infrastructure.
- **Phase 2 (2027–2028)**: Integrate SPT child records with MPI. Begin linking EHR patient records (as OpenMRS is deployed at pilot facilities). Integrate laboratory system patient identifiers.
- **Phase 3 (2028–2030)**: Federate with the national digital identity platform when RDIP delivers it. Progressively reduce reliance on probabilistic matching as eCRVS NIN coverage expands toward the 80% target (Assumption 15, Section 2.5). Extend MPI to community health worker records and outreach programme beneficiary tracking.

### 4.2.2 Facility Registry

An authoritative, standardised master facility list is essential for consistent health reporting, service delivery mapping, resource allocation, and system interoperability. Currently, DHIS2 maintains the de facto facility registry as its organisation unit hierarchy (covering all ~90 public, private, and not-for-profit health facilities), but this registry is not systematically synchronised with facility identifiers in eCRVS (which uses facility names for place-of-birth coding), e-NHIS (which has its own provider directory of about 70 contracted facilities), or A-LIS.

**Target facility registry specifications:**

- **Canonical source**: DHIS2 organisation unit hierarchy serves as the master facility list, maintained by the DHIS2 Data Manager within the DHDD. This avoids duplicating the existing registry while ensuring it meets the requirements of all connected systems.
- **Facility coding standard**: Each facility receives a unique, persistent facility code that is used consistently across all health information systems. The coding scheme aligns with the WHO Master Facility List guidelines and the IHE mCSD (Mobile Care Services Discovery) profile for facility discovery services.
- **Data elements**: Facility name (official), facility code, facility type (hospital, health centre, health post, community health post, private clinic, NGO facility), administrative region, district, GIS coordinates (latitude/longitude), ownership (government, private, NGO/faith-based), service availability (inpatient, outpatient, maternity, laboratory, pharmacy), operational status (active, temporarily closed, decommissioned), contact details.
- **GIS integration**: All facility records include verified geographic coordinates, enabling GIS-based analytics within DHIS2 (catchment area mapping, service coverage analysis, distance-to-facility calculations).
- **Synchronisation**: The facility registry is exposed through the HIE (OpenHIM) as a FHIR Location resource endpoint. All connected systems (eCRVS, e-NHIS, A-LIS, OpenMRS, OpenLMIS) query the facility registry for facility identification rather than maintaining independent facility lists. Changes to the master facility list are propagated to connected systems through the HIE.
- **IHE mCSD compliance**: The facility registry implements the IHE mCSD profile, enabling standardised facility lookup by name, code, type, location, or service availability. This supports use cases such as e-NHIS verifying whether a facility is contracted, eCRVS identifying the facility where a birth occurred, and the EHR identifying referral destinations.

### 4.2.3 Health Worker Registry

A national health worker registry provides an authoritative source of identity and credentials for health professionals across the system. Currently, health workforce data is fragmented between MoH human resource records, professional licensing bodies (Nurses and Midwives Council, Medical and Dental Council), DHIS2 user accounts, and individual facility staffing records.

**Target health worker registry specifications:**

- **Platform**: iHRIS (Integrated Human Resource Information System) is the recommended platform, an open-source health workforce information system developed by IntraHealth International and deployed in over 30 countries. Where iHRIS is not deployed, the health worker registry function is served through the existing HRMIS with enhanced data elements and HIE integration.
- **Data elements**: Health worker unique identifier (linked to MPI where applicable), name, professional cadre, licensing status, licensing body, licence number, licence validity period, deploying facility (linked to facility registry), qualifications, specialisations, date of deployment, and employment status.
- **Integration with professional licensing**: The registry reflects the licensing status maintained by professional regulatory bodies. Changes in licensing status (suspension, renewal, revocation) are reflected in the registry and can be used for access control in clinical systems (e.g., a suspended clinician's EHR prescribing privileges are automatically revoked).
- **IHE mCSD compliance**: The health worker registry is exposed through the HIE as a FHIR Practitioner and PractitionerRole resource endpoint, enabling clinical systems to verify practitioner identity and credentials during care delivery and supporting workforce analytics (distribution by region, cadre gaps, training needs).
- **Phasing**: The health worker registry is a medium-term priority (2028–2029), deployed after the MPI and facility registry are operational. In the interim, DHIS2 user accounts and HRMIS records serve as the primary health worker data sources.

### 4.2.4 Terminology Services

Terminology services provide the standardised clinical vocabularies and classifications that enable meaningful data exchange between systems. Without consistent coding, a laboratory test result reported from A-LIS cannot be matched to a clinical order in the EHR, a diagnosis entered in DHIS2 cannot be aggregated with the same diagnosis from the insurance claims in e-NHIS, and international reporting to WHO and RHO requires manual code translation.

The target architecture adopts a phased terminology strategy (design decision DD-10, Section 2.4), introducing classification and coding systems sequentially as each consuming system reaches operational readiness.

**Phase 1 — ICD-11 (2026–2027):**

ICD-11 (International Classification of Diseases, 11th Revision) is the WHO mandatory classification for mortality and morbidity reporting. It replaces ICD-10 and is the non-negotiable starting point for Progressa's terminology strategy because it is required for statutory reporting to WHO and RHO, it is partially used in DHIS2 aggregate morbidity reporting already, and it provides the diagnostic coding foundation for both disease surveillance (IDSR case classification) and insurance claims (e-NHIS diagnosis-based processing).

Implementation approach: configure ICD-11 coding within DHIS2 for facility-level morbidity reporting; train facility data focal points on ICD-11 code selection for the most common conditions (a priority subset of approximately 200–300 codes covering the conditions responsible for 80% of outpatient visits and inpatient admissions); embed ICD-11 in the EHR encounter form as the diagnostic coding standard; and use ICD-11 codes in e-NHIS claims to enable diagnosis-based claims analysis.

**Phase 2 — LOINC (2027–2028):**

LOINC (Logical Observation Identifiers Names and Codes) provides standardised coding for laboratory tests and clinical observations. It is prioritised second because laboratory data standardisation directly supports both clinical care (EHR lab results interpretation) and surveillance (case confirmation requires specific test results).

Implementation approach: map the 50–80 most commonly performed laboratory tests in Progressa's health facility and reference laboratories to LOINC codes. This priority panel covers the tests used in routine diagnostics (complete blood count, malaria rapid diagnostic test, HIV rapid test, blood glucose, urinalysis, liver function, renal function), disease surveillance confirmation (culture and sensitivity for priority pathogens), and maternal health screening (haemoglobin, blood group, RPR/VDRL, urinalysis). The mapping is maintained by the Integration Data Steward and published as part of the national health data dictionary. A-LIS and OpenELIS (where deployed as part of Bahmni) use LOINC codes for test identification; laboratory results sent to the HIE as FHIR DiagnosticReport resources include LOINC-coded test identifiers.

Tanzania's experience demonstrates that mapping a core test panel (rather than the full LOINC dictionary of over 98,000 codes) is the pragmatic starting point for resource-constrained settings.

**Phase 3 — SNOMED CT Global Patient Set (2028–2030):**

SNOMED CT provides comprehensive clinical terminology for encoding clinical findings, procedures, anatomical sites, and other clinical concepts. The full SNOMED CT edition comprises over 350,000 concepts and requires significant informatics capacity to implement and maintain.

The target architecture adopts the SNOMED CT Global Patient Set (GPS) — a free, curated subset of approximately 7,500 concepts specifically designed for use in low- and middle-income country settings where the full SNOMED CT licence and implementation effort are not feasible in the short term. The GPS covers the clinical terms most commonly needed in primary care, maternal and child health, HIV/TB management, and basic inpatient care.

Implementation approach: integrate SNOMED CT GPS into the OpenMRS EHR as the clinical terminology for problem lists, clinical findings, and procedure documentation. Mapping between SNOMED CT GPS and ICD-11 (for diagnostic coding) and LOINC (for observations) enables automated translation between clinical documentation and reporting/billing terminologies. The EHR's terminology service provides clinicians with searchable, hierarchical access to SNOMED CT GPS concepts during clinical documentation.

**Phase 4 — ATC Classification (2029–2030):**

The Anatomical Therapeutic Chemical (ATC) classification system, maintained by the WHO Collaborating Centre for Drug Statistics Methodology, provides standardised coding for pharmaceutical products. ATC is deployed in alignment with the eLMIS (OpenLMIS) rollout, enabling standardised drug identification across supply chain management, prescribing (in the EHR), and insurance claims (in e-NHIS).

Implementation approach: map Progressa's Essential Medicines List to ATC codes. OpenLMIS uses ATC-coded product identifiers for stock management, consumption reporting, and distribution tracking. The EHR uses ATC codes in the prescribing module, linking prescriptions to the eLMIS inventory. e-NHIS uses ATC codes for pharmaceutical claims validation.

**Terminology service infrastructure.** The terminology services described above require a technical platform to store, manage, and serve coded content to consuming systems. The target architecture deploys a terminology service within the HIE infrastructure (hosted alongside OpenHIM and OpenCR) that provides:

- Centralised storage of ICD-11, LOINC, SNOMED CT GPS, ATC, and local code sets.
- FHIR ValueSet and CodeSystem resources for standards-based terminology access.
- Code lookup APIs for consuming systems (EHR, LIS, DHIS2, e-NHIS).
- Cross-mapping tables between coding systems (e.g., SNOMED CT GPS to ICD-11 for diagnostic coding; LOINC to local laboratory test names).
- Version management to ensure all systems use the same edition of each classification.

The OCL (Open Concept Lab) platform, developed as an OpenHIE-aligned terminology management tool, is evaluated as the terminology service platform. OCL provides dictionary management, version control, and FHIR-compatible API access for health terminology services.

---

## 4.3 Data Integration Architecture

### 4.3.1 Unified Data Model Approach

The target architecture does not impose a single, monolithic data model across all health information systems. Each system — DHIS2, eCRVS, e-NHIS, OpenMRS, A-LIS, OpenLMIS — retains its internal data model, which is optimised for its specific function. Instead, the architecture defines a canonical data model at the integration layer (the HIE) using HL7 FHIR R4 resources as the common language for data exchange between systems.

This approach — sometimes called a "canonical messaging model" — means that each system translates its internal data into FHIR resources when sending data to the HIE and translates incoming FHIR resources into its internal format when receiving data. OpenHIM mediators handle the transformation for systems that cannot natively produce FHIR, implementing the FHIR Façade pattern (DD-12, Section 2.4).

**Priority FHIR R4 resource profiles for the Progressa MoH HIE:**

| FHIR Resource | Use Case | Source Systems | Consuming Systems |
|---------------|----------|---------------|-------------------|
| **Patient** | Patient demographics and identifiers; canonical representation of the MPI record | OpenCR (MPI), eCRVS, e-NHIS, OpenMRS | All systems via HIE |
| **Encounter** | Clinical visit records; documents a patient-provider interaction at a facility | OpenMRS (EHR) | DHIS2 (aggregation), e-NHIS (claims support) |
| **Observation** | Clinical measurements, vital signs, and diagnostic findings | OpenMRS, A-LIS, SPT | DHIS2 (indicator aggregation), HIE (shared health record) |
| **Immunization** | Individual immunisation event records | SPT / DHIS2 Tracker EIR | OpenMRS (patient record), DHIS2 (coverage aggregation) |
| **DiagnosticReport** | Laboratory test results (bundled with Observation resources for individual results) | A-LIS, OpenELIS | OpenMRS (clinical decision support), DHIS2 (surveillance) |
| **Condition** | Active diagnoses and health problems on a patient's record | OpenMRS | e-NHIS (claims adjudication), DHIS2 (morbidity reporting) |
| **Claim** | Health insurance claims submitted by facilities | e-NHIS | NHIA claims processing |
| **Coverage** | Insurance enrollment status of a patient | e-NHIS | OpenMRS (insurance verification at point of care) |
| **Location** | Facility identity and attributes; canonical representation of the facility registry | DHIS2 (organisation units) | All systems via HIE |
| **Practitioner / PractitionerRole** | Health worker identity, credentials, and role assignments | iHRIS / HRMIS | OpenMRS (provider authentication), DHIS2 (workforce reporting) |
| **MedicationRequest** | Prescription records from the EHR | OpenMRS | OpenLMIS (demand signal), e-NHIS (pharmaceutical claims) |
| **SupplyDelivery / SupplyRequest** | Pharmaceutical supply chain transactions | OpenLMIS | DHIS2 (stock reporting), OpenMRS (formulary availability) |

Each FHIR resource profile is tailored to Progressa's context. For example, the Patient resource profile includes extensions for eCRVS NIN, Immigration NIN, and e-NHIS beneficiary ID as identifier types; the Location resource profile includes extensions for facility ownership type and DHIS2 organisation unit identifier; and the Immunization resource profile accommodates the SPT scanning workflow metadata.

### 4.3.2 Data Exchange Standards

The target architecture employs three complementary data exchange standards, reflecting the different maturity levels and capabilities of MoH's systems (DD-12, Section 2.4):

**HL7 FHIR R4 — Target standard for patient-level data exchange.** All new integrations involving individual patient data (EHR ↔ HIE, MPI queries, laboratory results, immunisation records, insurance verification) use FHIR R4 as the mandatory standard. FHIR's RESTful API design, JSON-based payloads, and resource-oriented architecture are well-suited to the lightweight integration patterns appropriate for Progressa's environment. The specific FHIR profiles for each integration flow are defined in the Integration Architecture (Section 6).

**ADX (Aggregate Data Exchange) — Standard for DHIS2 aggregate data flows.** ADX is the IHE-profiled standard for exchanging aggregate health data, natively supported by DHIS2. It provides an efficient, structured format for the bulk of routine health information flows — monthly facility reports, quarterly disease summaries, annual health statistics — without the overhead of mapping aggregate indicators to individual FHIR resources. ADX is used for all aggregate data flows between DHIS2 and external consumers (WHO, RHO, PBoS, MoF health budget reporting).

**REST/JSON and CSV — Transitional formats for legacy integration.** For systems that cannot support FHIR or ADX natively in the short term (particularly eCRVS/CIVIS and e-NHIS), REST/JSON APIs and CSV batch transfers serve as transitional formats. OpenHIM mediators translate these formats to and from FHIR, ensuring that the HIE operates on a consistent canonical model even when source systems use simpler formats. As systems are upgraded or replaced over the architecture validity period, the expectation is that native FHIR support progressively replaces transitional formats.

### 4.3.3 National Health Data Dictionary

A national health data dictionary is the authoritative catalogue of all data elements collected, stored, and exchanged across MoH's health information ecosystem. It defines the name, definition, data type, coding standard, source system, and allowable values for every data element, ensuring that all systems use consistent definitions.

**Structure and maintenance:**

- The data dictionary is organised by domain: patient demographics, clinical encounter, laboratory, immunisation, disease surveillance, insurance, supply chain, health workforce, and facility.
- Each data element entry includes: element name, definition, data type (text, numeric, date, coded), coding system (ICD-11, LOINC, SNOMED CT GPS, ATC, or local code), allowable values or value set reference, mandatory/optional classification, source system(s), and FHIR resource mapping.
- The data dictionary is maintained by the Chief Data Steward within the DHDD and governed by TWG-DSG. Changes to data element definitions require TWG-DSG approval.
- The data dictionary is published as a machine-readable artefact (FHIR StructureDefinition and ValueSet resources) accessible through the terminology service, enabling automated validation of data against the dictionary.

**Alignment with international standards.** The data dictionary aligns with the WHO 100 Core Health Indicators, the WHO-recommended minimum dataset for health facility reporting, and the REC/RHO health data reporting requirements. This ensures that Progressa's health data can be mapped to international reporting frameworks without manual translation.

### 4.3.4 Data Lineage and Provenance

As data flows between systems through the HIE, maintaining a clear record of where data originated, how it was transformed, and who accessed it is essential for data quality management, audit compliance, and troubleshooting.

**Provenance tracking.** Every data transaction through the HIE is logged by OpenHIM with: timestamp, source system, target system, FHIR resource type, patient MPI identifier (where applicable), transaction outcome (success, failure, partial), and any data transformations applied by mediators.

**FHIR Provenance resource.** For critical data elements — particularly patient identity operations (MPI matches, merges, and splits), clinical data sharing (EHR records accessed by other systems), and insurance transactions (claims submitted and adjudicated) — the HIE generates FHIR Provenance resources that record the complete chain of custody for the data. These provenance records are stored alongside the data in the shared health record component of the HIE and are accessible to authorised data stewards and auditors.

**Data lineage documentation.** Each integration flow documented in Section 6 includes a data lineage specification that traces data from its point of origin (e.g., a health worker entering a clinical observation at a facility) through transformation (e.g., FHIR Façade translation), mediation (OpenHIM routing), and destination (e.g., aggregation in DHIS2 or storage in the shared health record). This documentation is maintained as part of the national health data dictionary and updated whenever integration flows are modified.

---

## 4.4 Analytics and Business Intelligence

### 4.4.1 DHIS2 as the National Health Analytics Platform

DHIS2 has served as Progressa's national health management information system since 2010, providing the primary platform for aggregate health data collection, storage, analysis, and dissemination. The target architecture strengthens and extends DHIS2's analytics capabilities rather than introducing a separate analytics platform, consistent with principle HP-01 (Build on What Works).

**Current analytics capabilities and gaps:**

| Capability | Current State | Target State |
|-----------|--------------|-------------|
| Aggregate data collection | Operational; monthly facility reporting, weekly IDSR | Strengthened: improved completeness (≥90% → ≥95%), timeliness, and validation |
| Dashboard visualisation | Basic dashboards exist; limited use at sub-national levels | Enhanced: standardised national, regional, and facility dashboards with role-based access; GIS integration |
| Data quality analytics | Limited automated validation rules | Comprehensive: expanded validation rule library, data quality scorecards, automated outlier detection |
| Indicator calculation | Core HMIS indicators configured | Extended: full indicator set aligned with NHSSP, SDG health targets, and UHC monitoring framework |
| GIS-based analytics | DHIS2 supports GIS but limited use | Operational: facility-level mapping, catchment area analysis, service coverage overlays, outbreak mapping |
| Cross-programme analytics | Minimal; each programme uses separate DHIS2 dashboards | Integrated: cross-programme dashboards (e.g., immunisation coverage vs. NHIS enrollment vs. facility capacity) |
| Data use at sub-national levels | Limited; data primarily flows upward for national reporting | Strengthened: regional and district-level analytics training; routine data review meetings using DHIS2 dashboards |

**Enhanced analytics capabilities (2026–2028):**

*WHO Health Data Toolkit packages.* DHIS2 supports standardised WHO metadata packages for specific health programmes. The target architecture deploys the following DHIS2 packages:

- **Immunisation (EPI) package**: Aligns with WHO/GAVI reporting requirements; supports both aggregate (from SPT) and individual-level (from DHIS2 Tracker EIR) immunisation data.
- **IDSR surveillance package**: WHO Vaccine-Preventable Disease (VPD) surveillance metadata; supports case-based surveillance through DHIS2 Tracker.
- **HIV/ART package**: Programme-level aggregate indicators; supports patient-level tracking through DHIS2 Tracker (building on existing COVID-19 vaccination Tracker experience).
- **RMNCH scorecard package**: Reproductive, maternal, newborn, and child health indicators with traffic-light scorecard visualisation.
- **Data quality package**: Automated data quality checks, consistency analysis, and outlier detection.

*Bottleneck analysis.* DHIS2's bottleneck analysis tool identifies constraints in health service delivery cascades — for example, the dropout rate between first antenatal visit and facility-based delivery, or between first vaccination dose and complete immunisation series. This analysis capability, currently underutilised, is configured for priority health programmes and presented at quarterly regional health management meetings.

*GIS integration.* DHIS2's built-in GIS capabilities are activated with verified facility coordinates (from the facility registry) and administrative boundary shapefiles. GIS-based analytics support catchment area analysis (identifying underserved populations), disease outbreak mapping (spatial clustering of surveillance cases), service accessibility mapping (distance-to-facility calculations), and resource allocation modelling (correlating service demand with facility capacity and staffing).

### 4.4.2 Future Health Data Warehouse

As the HIE matures and multiple systems begin exchanging patient-level data, the demand for cross-system analytics will exceed what DHIS2's aggregate-focused architecture can efficiently support. Cross-system questions — such as correlating insurance claims data with clinical outcomes, or linking immunisation coverage with birth registration completeness — require a data warehouse that integrates data from multiple source systems into a unified analytical model.

The target architecture takes a conservative, phased approach to health data warehousing:

**Phase 1 (2026–2028): DHIS2 as the primary analytical engine.** DHIS2 continues to serve as the national health analytics platform. Cross-system data is accessible through DHIS2 where integration flows bring aggregate data from other systems into DHIS2 (e.g., aggregate immunisation data from SPT/EIR, aggregate claims data from e-NHIS). Advanced analytics use DHIS2's data visualiser, pivot tables, and GIS tools. This phase does not require a separate data warehouse.

**Phase 2 (2028–2030): DHIS2 Data Warehouse capabilities.** DHIS2 versions 2.38 and later include enhanced data warehouse features (data store, continuous analytics, improved SQL-based analytics). These capabilities are leveraged to create cross-programme analytical views that integrate data from DHIS2's aggregate and Tracker programmes. Where DHIS2's built-in warehouse capabilities are insufficient for specific analytical use cases (e.g., longitudinal patient journey analysis across EHR and insurance data), data extracts are provided to a lightweight analytical environment (e.g., PostgreSQL analytical database with Apache Superset for visualisation) operating on de-identified data in a separate environment.

**Phase 3 (2030–2033): Dedicated health data warehouse (if justified).** A dedicated health data warehouse is considered only if the volume and complexity of cross-system analytics exceeds DHIS2's capabilities and the lightweight Phase 2 analytical environment. This decision is made at the 2029 architecture review (Section 1.3). If deployed, the data warehouse operates on de-identified data extracted from the HIE, hosted on the G-Cloud sovereign infrastructure (for data that can be re-identified) or on public cloud (for fully de-identified analytical datasets).

### 4.4.3 Reporting Pipeline

The reporting pipeline defines how health data flows from the point of collection through successive levels of aggregation and analysis to national and international consumers.

**Facility level.** Health workers record clinical encounters (paper registers or EHR where deployed), programme data (SPT scanning, IDSR case notification, e-NHIS claims), and supply chain data (OpenLMIS stock management). Data enters DHIS2 through monthly aggregate reporting (manual entry from registers), real-time Tracker entry (where DHIS2 Tracker is deployed for surveillance or immunisation), and automated integration flows (SPT → DHIS2, OpenLMIS → DHIS2 for stock-out indicators).

**District / regional level.** Regional Health Data Officers review facility data for completeness and quality using DHIS2 dashboards and scorecards. Quarterly data verification visits sample facility registers against DHIS2 entries. Regional health management teams use DHIS2 analytics for programme monitoring and resource allocation within their region.

**National level.** The DHDD and data owners use DHIS2 for national health statistics compilation, programme performance monitoring, epidemiological analysis, and policy-relevant analytics. The NDHSC reviews quarterly performance dashboards. PBoS receives aggregate health statistics for national statistical reporting.

**International level.** WHO receives statutory health reports aligned with the 100 Core Health Indicators framework, IHR notifications for priority diseases, and programme-specific data (EPI, HIV, TB, malaria). RHO receives regional health statistics through established reporting channels. REC receives health data relevant to regional health security and disease surveillance coordination. All international reporting is generated from DHIS2 using standardised indicator definitions and ADX-formatted data exports where applicable.

---

## 4.5 Data Classification and Privacy

### 4.5.1 Health Data Classification Framework

The target architecture establishes a four-tier health data classification framework that determines the security controls, access restrictions, hosting requirements, and sharing rules for each category of health data. This classification aligns with the national data classification framework proposed in D2 (National EA Framework) and with the REC data protection principles.

| Classification Tier | Description | Examples | Access Control | Hosting Requirement | Sharing Rules |
|--------------------|-------------|----------|---------------|--------------------|--------------:|
| **Tier 1: Public** | Aggregate, non-identifiable health statistics intended for public consumption | DHIS2 national and regional health indicators; WHO/RHO health reports; published health system performance data | Open access; published on MoH website and DHIS2 public portals | Any hosting (sovereign, public cloud, CDN) | Freely shareable; proper attribution required |
| **Tier 2: Internal** | Operational health data used for internal MoH management; not individually identifiable but potentially sensitive in aggregate | Facility-level performance data (before publication); internal programme monitoring data; health workforce deployment details; procurement data | MoH staff with role-based access; development partner staff with data sharing agreements | Sovereign cloud or MoH-managed infrastructure | Shared within MoH and with authorised development partners under data sharing agreements |
| **Tier 3: Confidential** | Personally identifiable information (PII) without clinical content; demographic and administrative data that can identify individuals | eCRVS registration records; e-NHIS beneficiary enrollment data; patient demographic data in the MPI; health worker personal records | Named-user access with authentication; role-based access control; audit logging | Sovereign cloud (G-Cloud) or approved national hosting only; encrypted at rest and in transit | Shared only under formal data sharing agreements with specified purpose, retention period, and security controls |
| **Tier 4: Restricted** | Clinical health records containing sensitive health information that could cause significant harm if disclosed | EHR clinical encounter records; HIV status; mental health records; diagnostic results; prescribed medications; insurance claims with clinical detail | Named-user access with strong authentication (MFA where supported); minimum-necessary access principle; comprehensive audit logging; break-the-glass protocols for emergency access | Sovereign cloud (G-Cloud) only; encrypted at rest and in transit; backup encryption; no replication to non-sovereign infrastructure | Clinical data shared only for direct patient care (through HIE with consent), statutory public health reporting (anonymised or pseudonymised), or approved health research (de-identified, with ethics approval and data sharing agreement) |

### 4.5.2 Consent Management

Consent management in Progressa's health context must balance the individual's right to control their health data with the public health imperatives of a low-income country where disease surveillance, immunisation programmes, and insurance coverage expansion are critical to population health.

**Consent model: Opt-in for data sharing beyond the treatment purpose.**

The target architecture adopts the following consent framework:

- **Implied consent for treatment.** When a patient presents at a health facility for care, the act of seeking treatment implies consent for the health worker to access and record clinical data necessary for the patient's care within that facility. This is the standard clinical consent model worldwide and requires no additional digital consent mechanism.

- **Opt-in consent for cross-system data sharing through the HIE.** When a patient's data is shared between systems through the HIE — for example, sharing an EHR encounter record with e-NHIS for claims processing, or linking a child's birth record (eCRVS) with their immunisation record (SPT/EIR) through the MPI — the patient (or guardian) must provide consent. Consent is recorded in the MPI as a consent directive associated with the patient's MPI record, specifying which data categories may be shared and with which systems.

- **Statutory exception for public health surveillance.** IDSR case notification, disease outbreak investigation, and IHR-mandated reporting are statutory public health functions. Individual consent is not required for these activities, but the data collected under this authority may only be used for surveillance and outbreak response purposes. De-identification is applied before any secondary use (research, programme evaluation).

- **Opt-in consent for research use.** Use of identifiable or potentially re-identifiable health data for research requires individual consent (unless a research ethics committee grants a waiver based on minimal risk, impracticability of consent, and public benefit). De-identification is required for research datasets wherever feasible.

**Practical considerations for low-literacy contexts.** Given that Progressa includes populations with limited literacy, consent cannot rely solely on written forms. The consent management approach accommodates verbal consent (witnessed and recorded by the health worker in the system), pictographic consent aids (visual explanations of data sharing scope), and tiered consent (simple yes/no for basic data sharing, with the option for more granular consent where patients wish to exercise greater control). The consent recording mechanism in the MPI stores the consent status, the date, the method (written, verbal-witnessed), and the scope.

### 4.5.3 De-identification Requirements

De-identification is required whenever health data is used for purposes beyond direct patient care: analytics, research, programme evaluation, capacity building, and public reporting. The target architecture specifies two levels of de-identification:

**Pseudonymisation.** Patient identifiers (name, NIN, MRN, address, phone number) are replaced with pseudonyms (non-reversible tokens or hashed identifiers). The mapping table that links pseudonyms to real identifiers is held separately under restricted access. Pseudonymised data allows longitudinal analysis (tracking the same pseudonymised patient across multiple encounters) while preventing identification by analysts. Pseudonymised data is classified as Tier 3 (Confidential) because re-identification is technically possible if the mapping table is compromised.

**Full anonymisation.** All identifying information is removed, and statistical disclosure control techniques (suppression of small cells, generalisation of age/location) are applied to prevent re-identification even through combination with other data sources. Fully anonymised data is classified as Tier 1 (Public) or Tier 2 (Internal) depending on the aggregation level and intended audience.

De-identification is performed at the point of data extraction from operational systems — not within the operational systems themselves. The DHDD maintains a de-identification service (either embedded in the DHIS2 analytics pipeline or as a standalone data processing component) that applies the appropriate de-identification level based on the data use purpose and the data classification of the output.

### 4.5.4 Data Residency

The data residency policy, driven by design decision DD-11 (Section 2.4) and architecture principle HP-04 (Sovereign Health Data), establishes clear rules for where health data may be physically stored and processed:

- **Tier 3 and Tier 4 data** (Confidential and Restricted): must reside exclusively on sovereign infrastructure — the G-Cloud when operational, or the interim national hosting arrangement at ProgTel/e-Government data centre. This data may not be replicated to, backed up to, or processed on infrastructure outside Progressa's jurisdiction without NDHSC approval and a data sharing agreement that guarantees equivalent protection.

- **Tier 2 data** (Internal): should reside on sovereign infrastructure where available. Public cloud hosting is permitted for Tier 2 data when sovereign infrastructure lacks the required capability (e.g., advanced analytics processing), subject to encryption in transit and at rest and a hosting agreement that specifies data residency within the REC region at minimum.

- **Tier 1 data** (Public): may reside on any hosting infrastructure, including public cloud and content delivery networks, as it is aggregate, non-identifiable, and intended for public consumption.

- **Development, testing, and training environments** may use public cloud hosting but must use synthetic or fully anonymised data. Production health data — even de-identified production data — may not be used in cloud-hosted development environments without de-identification verification by the DHDD.

The transition from the current fragmented hosting arrangement (where eCRVS hosting location is unspecified, e-NHIS likely uses an external cloud provider, and SPT is cloud-hosted by Vaxa) to the sovereign hosting target requires systematic migration planning as part of the D7 roadmap. During the interim period, each system's current hosting arrangement is assessed against the data classification of the data it holds, and compensating controls (encryption, access controls, contractual data residency guarantees) are applied where sovereign hosting is not yet available.

---

*This section will be read alongside Section 5 (Application Architecture), which specifies the target application portfolio, and Section 6 (Integration Architecture), which defines the specific data flows between systems. The data governance, master data, and standards frameworks defined here serve as the foundational layer that makes application integration meaningful and trustworthy.*

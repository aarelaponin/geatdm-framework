# Ministry of Health — Target Application Architecture

## A Narrative Guide for the National Enterprise Architect

*Deliverable D6 — Future State Architecture, Ministry of Health, Progressa*
*Prepared as a companion briefing for national-level EA stakeholders*

---

## 1. Why This Document Exists

The Ministry of Health (MoH) is one of four Tier 1 government organisations in Progressa's national Enterprise Architecture initiative. Its target architecture — the "to-be" design documented in deliverable D6 — specifies how the ministry's information systems should be structured, integrated, and governed over the period 2025–2033.

This narrative translates the MoH target architecture into language familiar to an enterprise architect operating at the national level, without assuming prior exposure to health informatics standards, clinical workflow terminology, or the specialised acronyms used in the digital health community. Every health-specific concept is introduced with its general-purpose EA equivalent, so the reader can map MoH's design decisions onto the same architectural patterns used across other government sectors.

The architecture addresses a ministry serving approximately 2–3 million citizens through ~90 health facilities, with roughly 3–5 IT staff, operating in an environment where ~60% of the population has electricity access and a single submarine cable provides international connectivity. These constraints — typical of developing-country digital transformation — shape every design decision.

---

## 2. The Problem Being Solved

Today, the MoH operates at least eight distinct information systems that function as independent silos. There is exactly one automated data exchange between any two systems in the entire ministry: an immunisation tracking system sends aggregated monthly totals to the national health statistics platform. Everything else — patient identity matching, insurance enrolment verification, disease outbreak notification, laboratory result sharing, supply chain coordination — is handled through paper forms, email, telephone calls, or manual re-keying of data.

The consequences are tangible. When a child is born, the civil registration system records the birth, but the health insurance system does not automatically learn about the new citizen — enrolment requires a separate manual process. When a laboratory confirms a dangerous disease like cholera, the surveillance team may not learn about it for days because the notification travels on paper through multiple organisational levels. When a patient visits a health facility, the clinician has no way to verify whether that patient has insurance coverage, because the insurance system and the clinical system cannot talk to each other.

In enterprise architecture terms, the current state is characterised by zero integration maturity, no shared master data, no common data exchange standards, and no integration platform. The target architecture addresses all of these gaps.

---

## 3. The Foundational Design Decision: Mediated Integration

The single most important architectural decision in the MoH target state is the adoption of a **mediated integration pattern** — the same hub-and-spoke pattern used at the national level for cross-ministry interoperability, but applied within the health sector.

The principle is simple: no application communicates directly with any other application. All data exchange flows through a central integration hub. This hub authenticates every request, transforms data between different formats, logs every transaction for audit, and routes messages to the correct destination. If a clinical system needs to check a patient's insurance status, it asks the hub, which forwards the query to the insurance system, transforms the response, and returns it to the clinical system. Neither system needs to know the internal data format of the other.

Without this pattern, connecting ten systems to each other would require up to 45 separate bilateral interfaces, each independently built and maintained. With the hub, each system maintains exactly one interface — to the hub. Adding a new system requires building one connector, not nine.

The integration hub for the health sector is a software component called **OpenHIM** (Open Health Information Mediator). It is the health-sector equivalent of what the national Government Interoperability Platform (GIP, based on X-Road) provides for cross-ministry exchange. The two are designed to coexist: OpenHIM handles data flows within the health domain, and connects upward to the national GIP when health data needs to cross ministry boundaries — for example, when the MoH needs to send payment instructions to the Ministry of Finance through the government payment gateway.

This mediated approach is drawn from an internationally recognised reference architecture called **OpenHIE** (Open Health Information Exchange), which defines the standard components, workflows, and data standards that a national health information system should use. OpenHIE is endorsed by the World Health Organisation and has been implemented in varying degrees across Tanzania, Ethiopia, Rwanda, Uganda, Malawi, Kenya, South Africa, and Mozambique. For the national EA architect, OpenHIE can be understood as the health-sector equivalent of TOGAF's Integration Architecture or GovStack's Information Mediator Building Block — a reference architecture tailored to the specific business domain of healthcare.

---

## 4. The Four-Layer Application Portfolio

The target application landscape is organised into four functional layers. This layered model maps directly to the capability-based planning approach used in the national EA framework: each layer corresponds to a cluster of business capabilities, and each system within a layer implements one or more of those capabilities.

### Layer 1 — National Health Platform (Shared Foundation)

This is the equivalent of a government's shared digital infrastructure — the registries, the data platform, and the integration backbone that every other system depends on. In the national EA, shared platforms like the digital identity system, the government service bus, and the payment gateway serve this role for the whole government. Layer 1 does the same thing, but specifically for health.

**The national health statistics and programme management platform** (DHIS2) is the ministry's equivalent of a central management information system. It has been operational since 2010 and collects monthly aggregate reports from all ~90 facilities — facility-level totals like "how many children were vaccinated this month" or "how many malaria cases were treated." Think of it as a national business intelligence system that aggregates operational data from every service delivery point. In the target state, DHIS2 is retained and strengthened: its data quality controls are enhanced, its analytical dashboards are expanded, and importantly, it gains a new capability for tracking individual cases (explained in Layer 2 below).

**The master patient index** (MPI, implemented using OpenCR — Open Client Registry) is the health sector's equivalent of a national identity registry. Its purpose is to ensure that every patient has a single, unique identity across all health systems. Currently, each system maintains its own patient identity: the civil registration system uses one identifier, the insurance system uses another, the immunisation system uses a third. The MPI federates these identifiers — it links them together so that when any system queries "who is this patient?", it gets back a single canonical identity record with all associated identifiers. The MPI uses the civil registration number (NIN — National Identification Number) as its foundational identifier, supplemented by insurance numbers, facility-level medical record numbers, and immigration identifiers.

**The shared health record** (SHR, implemented using HAPI FHIR Server) is a longitudinal data store that accumulates clinical summaries from all contributing systems. When a patient visits a clinic, gets vaccinated, receives a laboratory test, or makes an insurance claim, a summary record of that event flows into the SHR through the integration hub. Over time, the SHR builds a comprehensive health history for each patient. For the national architect, the SHR is the health domain's equivalent of a cross-system data warehouse, except that it stores individual-level transactional records in a standardised format rather than pre-aggregated analytics.

**The terminology service** (implemented using Open Concept Lab) manages the standardised code lists used across all health systems — disease classification codes, laboratory test codes, medication codes, and similar reference data. This is the health sector's equivalent of a government-wide code list registry: it ensures that when one system says "malaria" and another system says "B54," they are referring to the same concept.

**The facility registry** (built on DHIS2's organisational unit hierarchy, exposed through a standardised interface) provides the canonical list of all health facilities — their names, codes, locations, service types, and administrative hierarchy. Every system that references a facility must use identifiers from this registry, eliminating the current problem of each system maintaining its own inconsistent facility list.

### Layer 2 — Clinical Systems (Point-of-Care Applications)

These are the operational systems used directly by health workers during patient encounters — the equivalent of front-office transaction processing systems in other government sectors.

**The electronic health record** (EHR, based on OpenMRS — Open Medical Record System) captures individual patient encounters: what brought the patient to the facility, what the clinician observed, what diagnosis was made, what treatment was prescribed. This is the health sector's equivalent of a case management system — it creates an electronic record of each service transaction. OpenMRS is an open-source platform deployed in Kenya, Rwanda, Uganda, and over 40 other countries.

**The electronic immunisation registry** (EIR) tracks individual vaccination records for every child. This is one of the most architecturally interesting components because it involves a carefully managed transition. The current system (called SPT — scanned paper tracking) uses a hybrid paper-and-scanning workflow that achieves remarkably high data accuracy (over 99%) across all ~90 facilities. However, SPT captures data in batches (paper forms are scanned at regional centres), which means the data is not available in real-time and cannot support point-of-care decision support. The target state introduces a new individual-level digital tracking capability within the DHIS2 platform (called "DHIS2 Tracker") that captures each vaccination event at the point of care using tablets or smartphones, enables automated scheduling and reminder generation, and produces standardised data records that can flow through the integration hub. The transition is deliberately cautious: the new system pilots at 10–15 facilities first, runs in parallel with the existing system until it demonstrably matches the existing system's accuracy, and only replaces the old system when the evidence supports it. This is a textbook example of conservative modernisation in a resource-constrained environment.

**The laboratory information system** (LIS, based on A-LIS / OpenELIS) manages laboratory test orders, sample tracking, and result reporting. Currently at early pilot stage. Its critical integration role is that laboratory confirmations of dangerous diseases (cholera, meningitis, measles) must automatically trigger surveillance notifications — a workflow that is currently ~90% paper-based.

**The maternal and child health tracking system** (RMNCH Tracker — Reproductive, Maternal, Newborn, and Child Health) tracks the continuum of care from pregnancy through antenatal care, delivery, postnatal care, and child growth monitoring. Like the immunisation registry, this is built on DHIS2's individual-level tracking capability and is planned for Phase 2 deployment.

### Layer 3 — Health Administration (Back-Office Systems)

These systems support the administrative functions that underpin health service delivery — insurance, civil registration, supply chain, and workforce management.

**The national health insurance system** (e-NHIS) manages beneficiary enrolment, eligibility verification, and claims processing for the national health insurance scheme. Currently operational but at limited scale (approximately 15,000–20,000 beneficiaries against a target of 60,000). Its key integration needs are: receiving birth registration events to automatically trigger insurance enrolment for newborns, providing real-time eligibility checks to clinical systems at the point of care, and connecting to the government payment gateway for claims settlement.

**The civil registration and vital statistics system** (eCRVS, implemented using the CIVIS platform) records births, deaths, and marriages. Already operational with about 1 million registrations (~50% population coverage). In the target architecture, eCRVS serves a dual role: it is both a standalone administrative system and the foundational identity source for the master patient index. When a birth is registered, the event should trigger a chain: create a patient identity in the MPI, and initiate insurance enrolment in e-NHIS. This birth-to-enrolment automation is the first priority integration flow.

**The logistics management information system** (eLMIS, based on OpenLMIS) manages the pharmaceutical and medical supply chain — from central warehouse to facility-level stock. Currently not deployed; planned for Phase 2. Its integration value is connecting clinical prescribing data to supply chain demand signals: when clinicians prescribe medications, the supply chain system should see the demand.

**The health workforce registry** (iHRIS / HRMIS) maintains records of health workers — their identities, credentials, qualifications, postings, and roles. Its integration role is authenticating health worker identities in clinical systems and providing workforce data for planning dashboards.

### Layer 4 — Surveillance (Public Health Monitoring)

These systems detect, track, and respond to disease outbreaks and public health threats — the health sector's equivalent of a government early-warning and monitoring system.

**The integrated disease surveillance system** (IDSR+, built on DHIS2 Tracker) replaces the current ~90% paper-based disease surveillance process. When a laboratory confirms a notifiable disease or a clinician diagnoses a suspected outbreak case, the current process requires manual paper-based notification through multiple organisational levels — a process that takes days to weeks. The target system captures individual case records electronically, triggers automated alerts when outbreak thresholds are breached, and enables real-time situational awareness at regional and national levels. The "+" in IDSR+ denotes the enhancement from aggregate weekly reporting to individual case-based surveillance.

**Event-based surveillance** adds signal detection from media reports, social media, and other informal sources — early indicators of potential health threats that may not yet appear in formal clinical reporting.

**Community-based surveillance** extends the detection network to community health workers in rural areas using mobile tools (SMS, simple mobile applications), capturing health events at the community level before patients reach formal facilities.

---

## 5. The Data Architecture: Standardised Exchange Through FHIR

The health sector's data exchange architecture is built on a standard called **FHIR** (Fast Healthcare Interoperability Resources, version R4). For the national EA architect, FHIR can be understood as a domain-specific API standard — analogous to what an open banking API standard does for financial services, or what a customs data model standard does for trade. FHIR defines a set of standardised data structures called "resources," each representing a specific type of health information, and specifies how systems should exchange them through RESTful APIs.

The MoH has defined fourteen priority FHIR resource profiles, each adapted to the Progressa context with local extensions (such as the national identification number as a patient identifier type). These profiles are the canonical data entities that flow through the integration hub:

**Patient** — the unified identity record, linking all identifiers from different systems. Source: MPI. Consumed by: every system.

**Encounter** — a clinical visit record documenting when a patient received care, where, and by whom. Source: EHR. Consumed by: statistics platform, insurance system, shared health record.

**Observation** — clinical measurements, vital signs, and diagnostic findings. Source: EHR, laboratory system. Consumed by: statistics platform, surveillance system.

**Immunization** — an individual vaccination event record. Source: immunisation registry. Consumed by: shared health record, statistics platform.

**DiagnosticReport** — a laboratory test result. Source: laboratory system. Consumed by: EHR, surveillance system, shared health record.

**Condition** — an active diagnosis or health problem. Source: EHR. Consumed by: insurance system, surveillance system, statistics platform.

**Claim / ClaimResponse / Coverage** — insurance claims, adjudication results, and enrolment status. Source: insurance system. Consumed by: EHR (for eligibility checks), payment gateway.

**Location / Organization** — facility and organisational identifiers. Source: facility registry (DHIS2). Consumed by: all systems.

**Practitioner / PractitionerRole** — health worker identity and credentials. Source: workforce registry. Consumed by: EHR, statistics platform.

**MedicationRequest** — prescriptions. Source: EHR. Consumed by: supply chain system, insurance system.

**SupplyDelivery** — supply chain transactions. Source: logistics system. Consumed by: statistics platform, EHR.

FHIR is the target standard for all individual patient-level data exchange. For aggregate data flows (monthly facility statistics), the architecture uses a complementary standard called **ADX** (Aggregate Data Exchange), which is natively supported by the statistics platform. For legacy systems that cannot natively produce FHIR data, the architecture employs a **FHIR Façade** pattern — a middleware adapter that wraps the existing system's API with a FHIR-compliant interface, allowing it to participate in the integrated ecosystem without requiring its internal replacement.

---

## 6. The Six Priority Integration Flows

The integration architecture specifies six priority data flows that deliver the most immediate cross-system value. Each flow passes through the OpenHIM integration hub.

**Flow 1 — Birth Registration to Insurance Enrolment (Phase 1).** When a birth is registered in the civil registration system, the event triggers a chain: create or update a patient identity in the master patient index, then initiate insurance enrolment in the health insurance system. This automates what is currently a manual, multi-step process. The data entities exchanged are the Patient and RelatedPerson resources.

**Flow 2 — Immunisation Recording to Aggregate Reporting (Phase 1–2).** When a child receives a vaccination (recorded in either the legacy paper-scanning system or the new digital registry), the individual event record flows through the hub to the shared health record, and aggregated totals flow to the national statistics platform. This replaces the current single direct data feed with a mediated, standards-based flow that supports both individual-level and aggregate reporting.

**Flow 3 — Laboratory Result to Surveillance Notification (Phase 2).** When a laboratory confirms a notifiable disease, the diagnostic report automatically triggers a case notification in the surveillance system. This replaces the current paper-based notification chain that introduces days of delay between laboratory confirmation and national awareness. For outbreak-prone diseases like cholera or meningitis, this delay reduction can be the difference between a contained incident and a widespread epidemic.

**Flow 4 — Clinical Encounter to Aggregate Reporting (Phase 2).** When a clinician completes a patient encounter in the electronic health record, a summary (encounter details, observations, diagnoses) flows through the hub to the shared health record and is aggregated into national statistics. This replaces the current practice of manual monthly tallying from paper registers.

**Flow 5 — Insurance Eligibility and Claims (Phase 2).** When a patient arrives at a facility, the clinical system queries the hub to check insurance coverage in real time. After treatment, the encounter data automatically generates a claims submission to the insurance system, which adjudicates the claim and (when approved) triggers payment through the government payment gateway. Currently, all of this is manual.

**Flow 6 — National to Global Reporting (Phase 1–2).** The statistics platform generates standardised aggregate reports for international obligations — World Health Organisation, Regional Health Organisation, and national statistics bureau — using the ADX standard. This replaces manual report compilation.

---

## 7. How the Health Architecture Connects to the National Architecture

The MoH target architecture is designed as a sector-specific layer that sits on top of, and integrates with, the national shared infrastructure being developed through the RDIP programme.

**Hosting.** Health systems are deployed as an isolated spoke within the national sovereign cloud (G-Cloud), following the hub-and-spoke deployment model defined in the national cloud strategy. All identifiable patient data resides on sovereign infrastructure within Progressa's jurisdiction. The health sector's integration hub (OpenHIM) runs within this spoke and communicates with the national API gateway for cross-ministry exchanges.

**Identity.** The health sector's master patient index uses the national identification number (NIN) from the civil registration system as its foundational identifier. As a national digital identity platform matures, the health MPI will federate with it. In the meantime, the MPI operates independently using the civil registration number as the link.

**Interoperability.** The health sector's integration hub (OpenHIM) handles within-sector data exchange. For cross-ministry flows — such as sending payment instructions to the Ministry of Finance's financial management system (IFMIS) through the government payment gateway (ProgressaPay), or receiving budget allocation data — the health hub connects upward to the national Government Interoperability Platform (GIP, based on X-Road). The two platforms are complementary: GIP handles cross-ministry governance and security policies; OpenHIM handles the health-specific data transformation, clinical workflow orchestration, and domain-specific audit requirements.

**Standards alignment.** The health architecture's use of FHIR and ADX for data exchange aligns with the national EA framework's API-first design principle. FHIR's RESTful architecture and JSON-based data structures are fully compatible with the API management capabilities of the national platform.

---

## 8. Technology Stack and Infrastructure Constraints

The entire technology stack is built on open-source components, reflecting both budget constraints and the national EA principle of technology-agnostic, vendor-neutral design. The key infrastructure choices are:

**Databases:** PostgreSQL across all systems (statistics platform, EHR, MPI, integration hub). **Application servers:** Java/Tomcat for the statistics platform and EHR; Node.js for the integration hub and its adapters. **Containerisation:** Docker containers orchestrated by Kubernetes on the sovereign cloud. **Message queuing:** RabbitMQ for asynchronous processing (laboratory results, batch immunisation data). **Identity management:** Keycloak for single sign-on and access control across all health systems. **Monitoring:** Prometheus for metrics collection and Grafana for dashboards and alerting. **Operating system:** Ubuntu LTS for all servers.

The architecture explicitly addresses Progressa's infrastructure constraints. All facility-level systems are designed "offline-first" — they must function for at least seven days without network connectivity, storing data locally and synchronising when connectivity is restored. This is achieved through the DHIS2 Android Capture App for the immunisation and surveillance trackers, and through OpenMRS's offline module for the electronic health record. Facility-level hardware consists of low-power tablets (10-inch, 4GB RAM) and mini-PC local servers with 4-hour minimum UPS battery backup. In areas where grid electricity availability falls below 80%, solar power supplements are specified.

---

## 9. Governance and Implementation Phasing

The architecture is governed through a proposed **National Digital Health Steering Committee** (NDHSC) that reports to the ministry's leadership and coordinates with the national EA governance structure. Beneath the steering committee, a **Digital Health and Data Directorate** (DHDD) provides day-to-day technical oversight, supported by three technical working groups: Architecture and Interoperability, Data Standards and Governance, and Implementation and Capacity Building.

Implementation follows a phased approach across three waves:

**Wave 1 (2025–2026): Govern, Connect, Register.** Deploy the foundational infrastructure — the integration hub, the master patient index, and the terminology service. Strengthen the existing statistics platform. Pilot the new individual-level immunisation and surveillance trackers at 10–15 facilities. Establish the governance framework.

**Wave 2 (2027–2029): Digitise, Integrate, Scale.** Deploy the electronic health record at priority facilities. Scale the immunisation and surveillance trackers nationally. Activate the priority integration flows (birth-to-enrolment, laboratory-to-surveillance, clinical-to-statistics). Deploy the supply chain system. Connect to the national payment gateway for insurance claims.

**Wave 3 (2030–2033): Optimise, Sustain, Innovate.** Complete national coverage of all systems. Retire legacy paper-based processes where digital alternatives are proven. Advance to full real-time data exchange. Optimise analytics and decision support. Transition from donor-funded project operations to government-sustained operations.

The architecture targets an improvement in EA maturity from the current 2.19 to 4.1 by 2030, aligned with the national digital master plan's goal of widespread service digitisation.

---

## 10. Key Takeaways for the National Enterprise Architect

**The MoH architecture follows the same patterns as the national architecture.** Hub-and-spoke integration, shared registries (master patient index ≈ national identity platform; facility registry ≈ government registry of services), mediated data exchange, sovereign cloud hosting, open-source technology stack, and standards-based API design. The health sector simply applies these patterns to its domain-specific requirements.

**The health sector's integration hub (OpenHIM) complements the national platform (GIP/X-Road), not competes with it.** OpenHIM handles the high-volume, domain-specific clinical data flows (patient encounters, laboratory results, immunisation records) with health-specific security and audit requirements. The national GIP handles cross-ministry governance flows (identity verification, payment processing, financial reporting). The two connect at well-defined interfaces.

**The data exchange standard (FHIR) is a domain-specific API specification.** Just as the revenue authority has its own domain data model and the financial management system has its own chart of accounts, the health sector uses FHIR as its standard data model. FHIR resources are the canonical data entities — the equivalent of "taxpayer record" or "budget line item" in other sectors. They flow through standard REST APIs, making them compatible with the national API management infrastructure.

**The conservative, phased approach is deliberate.** The architecture explicitly builds on what already works (the statistics platform, the civil registration system, the successful paper-scanning immunisation system) rather than replacing everything at once. New systems are piloted before scaling, and legacy systems are only retired when the replacement has proven equal or better performance. This approach reflects the reality of a low-resource, donor-dependent environment with limited IT capacity and significant infrastructure constraints.

**All identifiable health data stays sovereign.** Patient records, clinical data, and insurance information reside exclusively on nationally controlled infrastructure. This aligns with the national data sovereignty principles and the sovereign cloud strategy, with health data receiving additional protections due to its clinical sensitivity.

---

*This narrative is derived from the MoH D6 — Future State Architecture v1.0, prepared under the Progressa Enterprise Architecture Initiative (World Bank RDIP / ITU contract [contract reference]). It is intended as a companion briefing and should be read alongside the full D6 document and the target application architecture diagram for complete technical specifications.*

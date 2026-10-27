## 6.4 API Management and Governance

The integration flows specified in Section 6.2 depend on well-designed, well-documented, and consistently managed APIs. Without formal API management, the HIE risks becoming a black box of undocumented interfaces — replicating at the API level the same fragmentation that characterises the current point-to-point system landscape. This section defines the standards, lifecycle, security model, and operational practices for managing APIs within Progressa's health information ecosystem.

### 6.4.1 API Design Standards

All APIs published through the HIE conform to RESTful design conventions, ensuring consistency, predictability, and ease of implementation for the limited health informatics workforce available in Progressa.

**URI Structure.** API endpoints follow a standardised URI pattern:

```
https://hie.moh.gov.progressa.example/fhir/{version}/{ResourceType}/{id}
```

- Base URL: `https://hie.moh.gov.progressa.example/fhir` — all HIE APIs are served from a single domain, with OpenHIM routing requests to the appropriate backend system.
- Version prefix: `/v1/`, `/v2/` — URL-based versioning (not header-based), providing unambiguous version selection and simplifying debugging, logging, and client implementation.
- Resource type: FHIR resource names in PascalCase (e.g., `/v1/Patient`, `/v1/Immunization`, `/v1/DiagnosticReport`).
- Resource ID: Server-assigned logical identifier for individual resource retrieval (e.g., `/v1/Patient/mpi-12345`).

For non-FHIR transitional APIs (Phase 1–2, see Section 6.3.4), the URI pattern adapts:

```
https://hie.moh.gov.progressa.example/api/{version}/{domain}/{resource}
```

Where `{domain}` identifies the source system context (e.g., `/api/v1/ecrvs/births`, `/api/v1/enhis/eligibility`). Transitional APIs are documented with a sunset date and a migration path to the equivalent FHIR endpoint.

**HTTP Methods and Semantics.** APIs use standard HTTP methods with consistent semantics:

| Method | Semantics | Idempotent | Use Case |
|--------|-----------|------------|----------|
| GET | Read a resource or search for resources | Yes | MPI patient lookup, eligibility query, facility registry search |
| POST | Create a new resource or execute an operation | No (but transaction IDs enforce idempotency per IP-04) | Birth notification, lab result submission, claims submission |
| PUT | Update an existing resource (full replacement) | Yes | Update patient demographics in MPI, update facility attributes |
| PATCH | Partial update of an existing resource | No | Update specific fields (e.g., insurance status change) |
| DELETE | Logical delete (soft delete; physical deletion prohibited for health records) | Yes | Mark a record as inactive; never used for clinical data |

**Pagination.** Search results that may return large datasets use cursor-based pagination with `_count` (page size, default 20, maximum 100) and `_offset` or link-based navigation (`Bundle.link` with `next` and `previous` URLs). Pagination parameters and total result counts are included in the response Bundle.

**Error Response Format.** All API errors return standard HTTP status codes accompanied by a FHIR OperationOutcome resource in the response body, providing machine-readable error classification and human-readable diagnostic messages:

| HTTP Status | Meaning | OperationOutcome.issue.severity | Example |
|-------------|---------|--------------------------------|---------|
| 400 | Bad Request | error | Missing required field: Patient.identifier |
| 401 | Unauthorized | fatal | Invalid or expired authentication token |
| 403 | Forbidden | fatal | Client not authorised for this resource type |
| 404 | Not Found | warning | Patient with MPI ID mpi-99999 not found |
| 409 | Conflict | error | Duplicate transaction ID detected (idempotency check) |
| 422 | Unprocessable Entity | error | FHIR validation failed: Observation.code must be a valid LOINC code |
| 429 | Too Many Requests | warning | Rate limit exceeded; retry after {n} seconds |
| 500 | Internal Server Error | fatal | Unexpected server error; transaction logged for investigation |
| 502 | Bad Gateway | fatal | Downstream system (e.g., e-NHIS) unavailable |
| 503 | Service Unavailable | fatal | HIE under maintenance; retry after {timestamp} |

Error responses include a unique error reference ID (correlation ID) that maps to the OpenHIM transaction log, enabling rapid diagnosis when issues are reported by client systems.

### 6.4.2 API Lifecycle Management

Each API published through the HIE follows a defined lifecycle, ensuring that APIs are designed, tested, and operated with consistent quality and that changes are managed without disrupting consuming systems.

**Stage 1 — Design.** The API specification is drafted as an OpenAPI 3.0 (Swagger) document by the DHDD Integration Developer, in collaboration with the source system team and the Architecture and Interoperability TWG. The specification defines the endpoint URI, request/response schemas (FHIR resource profiles or JSON schemas for transitional APIs), authentication requirements, rate limits, and expected error codes. For FHIR APIs, the specification is supplemented by a FHIR CapabilityStatement resource that declares the supported resources, operations, and search parameters.

**Stage 2 — Develop.** The OpenHIM mediator implementing the API is developed — either as a FHIR Façade (for legacy systems) or as a routing configuration (for FHIR-native systems). The mediator code, configuration, and mapping rules are maintained in a version-controlled repository (Git) managed by the DHDD.

**Stage 3 — Test.** The API is tested in the sandbox HIE environment (Section 6.5.5) using synthetic data. Testing covers functional correctness (does the API return the expected FHIR resources for valid requests?), error handling (does the API return appropriate OperationOutcome responses for invalid requests?), performance (does the API meet the response time thresholds defined in the SLA framework — Section 6.5.6?), security (are authentication and authorisation enforced correctly?), and conformance (does the API pass the FHIR conformance test suite for the declared profiles?).

**Stage 4 — Publish.** The API is registered in the API catalogue (Section 6.4.6), the OpenAPI specification is published, and the API is activated on the production OpenHIM instance. Consuming systems are notified of the new API's availability and provided with onboarding documentation.

**Stage 5 — Monitor.** Once live, the API is continuously monitored for availability, response time, error rates, and transaction volumes (Section 6.4.5). Performance data feeds the integration monitoring dashboard reviewed by the DHDD and reported to the Architecture and Interoperability TWG.

**Stage 6 — Deprecate.** When a new version of the API is published or the API is no longer needed, it enters deprecation. Deprecated APIs remain operational for a minimum of six months (the deprecation notice period defined in Section 6.5.4), during which consuming systems migrate to the replacement. Deprecation is announced through the API catalogue, direct notification to all registered consumers, and a `Sunset` HTTP header in API responses indicating the retirement date.

**Stage 7 — Retire.** After the deprecation period, the API is deactivated. Requests to a retired API return HTTP 410 (Gone) with an OperationOutcome directing the consumer to the replacement endpoint. Retired API specifications are archived in the API catalogue for reference.

### 6.4.3 API Security Model

Health data is among the most sensitive categories of personal information. The API security model implements defence in depth, with controls at the transport, authentication, authorisation, and audit layers.

**Transport Security — Mutual TLS (mTLS).** All communication between systems and the HIE uses TLS 1.2 or higher. For system-to-system API calls carrying patient-level clinical data (Confidential or Restricted classification per Section 4.5.1), mutual TLS is mandatory — both the client and the server present X.509 certificates, providing bidirectional authentication at the transport layer. Client certificates are issued by the DHDD and registered in OpenHIM's client certificate store. Certificate lifecycle management (issuance, renewal, revocation) is the responsibility of the Health Information Security Officer (Section 4.1.2).

For lower-sensitivity APIs (Public or Internal classification — e.g., facility registry queries, terminology lookups), standard TLS (server-side certificate only) is sufficient, with authentication handled at the application layer.

**Authentication — OAuth 2.0 and API Keys.** Two authentication mechanisms are supported, selected based on the interaction pattern:

*OAuth 2.0 (Client Credentials Grant):* Used for APIs where the calling system acts on behalf of a specific user context (e.g., a clinician querying insurance eligibility for a patient in OpenMRS). The client system obtains an access token from the OAuth 2.0 authorisation server (hosted within the HIE infrastructure) using its registered client ID and client secret. The access token is included in the `Authorization: Bearer {token}` header of each API request. Token validity is limited to 1 hour; tokens are refreshed using the refresh token mechanism. Token revocation is supported for immediate access termination when a client system is compromised or decommissioned.

*API Keys + IP Whitelisting:* Used for system-to-system integrations where there is no user context (e.g., batch data transfers from eCRVS to MPI, scheduled ADX exports to WHO). The client system includes an API key in the `X-API-Key` header. API keys are long-lived (rotated annually) but are restricted by IP whitelist — requests are accepted only from pre-registered IP addresses of the source system's servers. This mechanism is simpler to implement for batch and server-to-server patterns where OAuth token management adds unnecessary complexity.

**Authorisation — Scope-Based Access Control.** Access tokens and API keys are associated with defined scopes that restrict which FHIR resource types and operations the client is authorised to perform. Scopes follow the SMART on FHIR convention:

- `system/Patient.read` — read Patient resources (system-level, no user context)
- `system/Immunization.write` — create/update Immunization resources
- `user/CoverageEligibilityRequest.write` — submit eligibility queries in a user context
- `system/*.read` — read all resource types (restricted to analytics and reporting systems)

Scope assignments are configured per client in OpenHIM and reviewed by the Health Information Security Officer during the connection onboarding process (Section 6.5.3). The principle of least privilege applies: each client receives only the scopes necessary for its designated integration flows.

**Token Policy.**

| Parameter | Value | Rationale |
|-----------|-------|-----------|
| Access token validity | 1 hour | Balances security (limits window of token theft) with usability (avoids constant re-authentication) |
| Refresh token validity | 24 hours | Enables background system operations without daily credential re-entry |
| API key rotation | Annually, or immediately upon compromise | Long-lived keys are acceptable for server-to-server with IP whitelisting |
| Failed authentication lockout | 5 consecutive failures → 15-minute lockout, then escalating | Prevents brute-force attacks; alerts Security Officer after 3 lockouts in 24 hours |
| Token revocation | Immediate effect; revocation list checked on every request | Enables rapid response to security incidents |

**Audit.** Every API call through OpenHIM is logged with: timestamp, source system, client identifier, requested resource type, HTTP method, patient MPI identifier (where applicable), response status code, response time, and payload size. Audit logs are retained for seven years (IP-06) and are accessible to the Health Information Security Officer and the DHDD Integration Data Steward. Audit log analysis supports both security monitoring (detecting anomalous access patterns) and performance management (identifying slow or failing integrations).

### 6.4.4 Rate Limiting

Rate limiting protects the HIE infrastructure from overload and ensures fair resource allocation across connected systems. Rate limits are applied per client and enforced at the OpenHIM gateway level.

**Per-Client Quotas.** Each connected system is assigned a rate limit profile based on its expected transaction volume and the criticality of its integration flows:

| Client Category | Requests per Minute | Requests per Hour | Burst Allowance | Example Systems |
|----------------|--------------------:|------------------:|----------------:|-----------------|
| High-volume real-time | 120 | 5,000 | 200 (10-second window) | OpenMRS (eligibility queries), DHIS2 Tracker (MPI lookups) |
| Standard real-time | 60 | 2,000 | 100 (10-second window) | e-NHIS (claims processing), A-LIS (lab results) |
| Batch / scheduled | 30 | 1,000 | 50 (10-second window) | eCRVS (batch exports), ADX Export Mediator, PBoS exports |
| Administrative / monitoring | 10 | 300 | 20 (10-second window) | API catalogue queries, health checks, monitoring dashboards |

**Burst Handling.** Short bursts exceeding the per-minute rate are accommodated within the burst allowance (a token bucket algorithm). Once the burst allowance is exhausted, additional requests receive HTTP 429 (Too Many Requests) with a `Retry-After` header indicating the number of seconds before the client should retry.

**Backpressure Signalling.** When the HIE approaches capacity limits (e.g., a downstream system is slow, causing request queuing), OpenHIM signals backpressure to clients through HTTP 429 responses with progressively increasing `Retry-After` values. This prevents cascading failures where aggressive retry behaviour from one client overwhelms the system for all clients.

Rate limit profiles are reviewed quarterly by the DHDD and adjusted based on observed traffic patterns. Clients experiencing legitimate rate limit issues can request a temporary increase through the Architecture and Interoperability TWG, with justification documented.

### 6.4.5 Monitoring and Logging

Integration monitoring provides the operational visibility necessary to detect and resolve issues before they affect health service delivery.

**API Call Logging.** Every transaction through OpenHIM is logged with the audit attributes defined in Section 6.4.3. Logs are stored in the OpenHIM transaction log database and are searchable by time range, source system, destination system, response status, and patient MPI identifier (for authorised users only — access to patient-linked logs requires Health Information Security Officer authorisation).

**Performance Dashboards.** The DHDD maintains an integration monitoring dashboard (built on OpenHIM's native monitoring capabilities, supplemented with Grafana or equivalent for advanced visualisation) displaying:

- Real-time transaction volumes by integration flow (e.g., birth notifications per hour, eligibility queries per minute, lab results per day).
- Response time distributions (median, 95th percentile, 99th percentile) by API endpoint.
- Error rates by source system, destination system, and error type (4xx client errors, 5xx server errors, timeouts).
- Queue depths for asynchronous transactions (pending delivery to downstream systems).
- System availability status for all HIE-connected systems (heartbeat monitoring).

**Alerting Thresholds.** Automated alerts are configured to notify the DHDD Integration Data Steward and the Health Information Security Officer when operational parameters breach defined thresholds:

| Metric | Warning Threshold | Critical Threshold | Alert Recipient |
|--------|------------------:|-------------------:|-----------------|
| API response time (95th percentile) | >3 seconds | >10 seconds | Integration Data Steward |
| Error rate (per integration flow) | >5% of transactions | >15% of transactions | Integration Data Steward + data owner |
| Queue depth (pending async transactions) | >500 pending | >2,000 pending | Integration Data Steward |
| System availability (heartbeat) | 1 missed heartbeat (5-min interval) | 3 consecutive missed heartbeats | Integration Data Steward + source system admin |
| Authentication failures | >10 failures per hour per client | >50 failures per hour per client | Health Information Security Officer |
| Rate limit breaches | >20 HTTP 429 responses per hour per client | >100 HTTP 429 responses per hour per client | Integration Data Steward + client system admin |

Alerts are delivered via email and SMS to the designated recipients. Critical alerts trigger an incident in the integration incident management process (Section 6.5.7).

### 6.4.6 API Catalogue and Registry

All APIs published through the HIE are documented in a centrally maintained API catalogue. The catalogue serves as the authoritative reference for system developers connecting to the HIE, the Architecture and Interoperability TWG when reviewing integration proposals, and the DHDD for lifecycle management.

**Catalogue Contents.** For each published API, the catalogue records:

- API name and description (business purpose and the integration flow it supports).
- Version number and status (active, deprecated, retired).
- OpenAPI 3.0 specification (Swagger document) — downloadable and viewable in a Swagger UI instance hosted by the DHDD.
- FHIR CapabilityStatement (for FHIR APIs) — declaring supported resources, operations, and search parameters.
- Authentication requirements (mTLS, OAuth 2.0, API key).
- Rate limit profile assigned.
- SLA targets (availability, response time).
- Source system and destination system(s).
- Data classification level (per Section 4.5.1) and any specific access restrictions.
- Contact: responsible team within the DHDD for support and issue escalation.
- Sunset date (for deprecated APIs).
- Change log: history of version changes with dates and descriptions.

**Catalogue Implementation.** In Phase 1–2, the API catalogue is maintained as a structured documentation repository (Markdown files in the DHDD's version-controlled documentation) with the OpenAPI specifications served through a lightweight Swagger UI instance. As the number of APIs grows in Phase 3–4, the catalogue may be upgraded to a dedicated API management platform (e.g., WSO2 API Manager, Kong, or Gravitee) if the operational complexity warrants it. The decision to invest in a dedicated API management platform is deferred to Phase 3, evaluated by the Architecture and Interoperability TWG based on the actual API portfolio size and operational needs.

---

## 6.5 Integration Governance Model

Operational governance ensures that the integration architecture is not merely specified on paper but is implemented consistently, maintained reliably, and evolved deliberately. This section defines the governance mechanisms that control how systems connect to the HIE, how changes are managed, how quality is assured, and how incidents are resolved.

### 6.5.1 Standards Approval Process

No integration specification, FHIR resource profile, API design, or mediator configuration is deployed to the production HIE without review and approval by the Architecture and Interoperability TWG.

**Approval Workflow:**

1. **Proposal.** The requesting team (DHDD Integration Developer, system vendor, or implementing partner) submits an integration specification to the TWG. The specification must include: the business requirement (which integration flow from Section 6.2 or new flow is being addressed), the technical design (FHIR resource profiles, API endpoint specifications, mediator logic), a security assessment (data classification, authentication mechanism, scope requirements), and a test plan.

2. **TWG Review.** The Architecture and Interoperability TWG reviews the specification against: compliance with the integration design principles (IP-01 through IP-08), conformance with the Progressa MoH FHIR profiles and terminology standards, alignment with the integration maturity progression model (does the proposal fit the current phase?), security adequacy (appropriate authentication, data classification handled correctly), and operational feasibility (can the DHDD support this in production?).

3. **Decision.** The TWG issues one of three decisions: approved (proceed to development and testing), approved with conditions (proceed after specific modifications are made), or deferred (proposal requires further analysis, additional resources, or is premature for the current phase). Decisions are recorded in the TWG minutes and the integration specification repository.

4. **NDHSC Endorsement.** For integration flows that involve cross-directorate or cross-agency data sharing (e.g., eCRVS→MPI→e-NHIS, MoH→WHO international reporting), the TWG's approval is forwarded to the NDHSC for strategic endorsement. The NDHSC confirms that the data sharing is consistent with the MoH Health Data Protection Policy (Section 4.1.4) and that any inter-agency agreements are in place.

The TWG meets monthly, with a standing agenda item for integration specification reviews. Urgent specifications (e.g., a new surveillance integration during an outbreak response) can be approved through an expedited email-based review with a 48-hour turnaround, ratified at the next scheduled TWG meeting.

### 6.5.2 Integration Certification Requirements

Before any system connects to the production HIE, it must demonstrate compliance with the integration standards through a formal certification process. Certification ensures that the connecting system will not introduce data quality issues, security vulnerabilities, or interoperability failures into the ecosystem.

**Certification Criteria:**

| Criterion | Requirement | Verification Method |
|-----------|-------------|-------------------|
| **FHIR Conformance** | The system (or its FHIR Façade) produces and consumes FHIR resources that conform to the Progressa MoH FHIR profiles declared in its CapabilityStatement. | Automated FHIR validation using the HAPI FHIR Validator against the published profiles. All mandatory elements present, data types correct, terminology bindings valid. |
| **Authentication** | The system supports the required authentication mechanism (mTLS, OAuth 2.0, or API key) and can handle token refresh, revocation, and expiry gracefully. | Authentication handshake tested in the sandbox environment. Token expiry and refresh cycle validated. |
| **Error Handling** | The system handles API errors correctly — retries on transient failures (5xx, timeout), does not retry on client errors (4xx), respects `Retry-After` headers, and logs errors for investigation. | Simulated error scenarios in the sandbox: forced timeouts, 429 responses, 500 errors. Client behaviour observed and validated. |
| **Idempotency** | The system generates unique transaction IDs for every request and handles duplicate responses (HTTP 409) without creating duplicate records. | Duplicate submission test: the same transaction is submitted twice; the system must detect the duplicate and not create a second record. |
| **Data Quality** | The system populates all required data elements as defined in the integration flow specification, using the correct coding systems (ICD-11, LOINC, facility codes from the registry). | Sample data review: 50 test transactions validated for completeness, coding accuracy, and conformance to the flow specification. |
| **Performance** | The system meets the response time requirements for its integration flows (e.g., <2 seconds for synchronous queries, within batch processing windows for asynchronous flows). | Load testing in the sandbox environment simulating expected transaction volumes. Response times measured at the 95th percentile. |
| **Offline Resilience** | For systems operating in facilities with unreliable connectivity, the system demonstrates store-and-forward capability, idempotent sync on reconnection, and no data loss during connectivity interruptions. | Connectivity interruption simulation: system operates offline for a defined period, then reconnects and successfully syncs all queued transactions without duplicates or data loss. |

**Certification Process:**

1. The system team submits a certification request to the DHDD Integration Data Steward, accompanied by the system's FHIR CapabilityStatement and test results from the system's own testing environment.
2. The DHDD schedules certification testing in the sandbox HIE environment (Section 6.5.5).
3. The DHDD Integration Developer executes the certification test suite, documenting results for each criterion.
4. If all criteria are met, the DHDD issues an integration certificate valid for 12 months. If criteria are not met, the system team receives a detailed report of failures and must remediate before re-testing.
5. Certification is renewed annually through a streamlined re-certification process (automated conformance testing plus review of any system changes since the last certification).

### 6.5.3 Connection Onboarding Process

Once a system is certified, connecting it to the production HIE follows a structured onboarding process that ensures proper configuration, security, and operational readiness.

**Onboarding Steps:**

1. **Request.** The data owner for the connecting system submits a connection request to the DHDD, specifying the integration flows to be activated, the data classification level, and the nominated technical contact.

2. **Specification Review.** The DHDD Integration Data Steward reviews the connection request against the approved integration specifications (Section 6.5.1) and the system's certification status (Section 6.5.2). Any gaps are identified and must be resolved before proceeding.

3. **Credential Provisioning.** The DHDD issues the connecting system's production credentials: client certificate for mTLS (issued by the HIE certificate authority), OAuth 2.0 client ID and secret (registered in the authorisation server), API key (if applicable), and the assigned scopes and rate limit profile.

4. **Sandbox Testing.** The connecting system executes its integration flows in the sandbox HIE environment using synthetic data, confirming that the end-to-end data flow works correctly with production-equivalent configurations.

5. **Production Deployment.** After successful sandbox testing, the connecting system's OpenHIM channel is activated on the production instance. Initial deployment uses a "soft launch" period (2 weeks) during which transaction volumes are monitored closely and the DHDD Integration Data Steward reviews a sample of transactions for data quality.

6. **Operational Handover.** The connection is formally handed over to the DHDD's monitoring and operations team. The system is added to the monitoring dashboard, alerting rules are configured, and the system's technical contact is registered for incident escalation.

### 6.5.4 Change Management

Changes to integration specifications, API versions, FHIR profiles, and mediator configurations are managed through a disciplined change process that prioritises backward compatibility and minimises disruption to connected systems.

**Semantic Versioning.** All APIs and FHIR profiles use semantic versioning (MAJOR.MINOR.PATCH):

- **MAJOR** version increment (e.g., v1 → v2): Breaking changes that require consuming systems to modify their implementation. Breaking changes include removing a required field, changing a resource structure, or altering authentication requirements. Major version changes trigger the full deprecation and migration cycle.
- **MINOR** version increment (e.g., v1.1 → v1.2): Non-breaking additions — new optional fields, new search parameters, additional supported operations. Consuming systems do not need to change but may benefit from new capabilities.
- **PATCH** version increment (e.g., v1.1.1 → v1.1.2): Bug fixes and documentation corrections. No functional changes to the API contract.

**Backward Compatibility Requirements.** Minor and patch changes must be backward compatible: existing consumers continue to function without modification. This is enforced through automated regression testing (Section 6.5.5) — every change to a production API triggers the full regression test suite against the current consumer test cases.

**Deprecation Policy.** When a major version change is required:

1. The new version is published alongside the existing version (both remain operational).
2. The existing version is marked as "deprecated" in the API catalogue, with a `Sunset` HTTP header in responses indicating the retirement date.
3. All registered consumers are notified directly (email to technical contacts) with a migration guide describing the changes and the steps required to upgrade.
4. A minimum six-month deprecation period is provided for standard changes. For urgent security-related changes, the NDHSC may authorise an accelerated deprecation period (minimum 30 days) with dedicated migration support from the DHDD.
5. During the deprecation period, both versions are monitored. The DHDD tracks consumer migration progress and proactively contacts consumers that have not migrated as the retirement date approaches.
6. At the end of the deprecation period, the deprecated version is retired per the API lifecycle (Section 6.4.2, Stage 7).

**Migration Windows.** Major API version migrations are scheduled during low-activity periods (weekends or public holidays) to minimise impact on health service delivery. The DHDD publishes a migration calendar at the start of each year, identifying planned migration windows.

### 6.5.5 Integration Testing Environment

A dedicated sandbox HIE environment replicates the production infrastructure and is used for all integration testing, certification, onboarding, and regression testing. The sandbox is not a luxury — it is a critical safeguard against deploying untested changes to the production HIE where failures could disrupt clinical data flows.

**Sandbox Architecture.** The sandbox mirrors the production HIE topology: OpenHIM instance, OpenCR (MPI) instance, HAPI FHIR (SHR) instance, and FHIR Façade mediators for each connected system. The sandbox operates on separate infrastructure (dedicated virtual machines or containers) with no connectivity to production databases.

**Synthetic Data.** The sandbox is populated with synthetic patient data — realistic but entirely fictional records generated using FHIR-compliant synthetic data tools (e.g., Synthea adapted for Progressa demographics). Synthetic data includes: 10,000 patient records with Progressa names, realistic age distributions, and representative clinical conditions; 5,000 immunisation records covering the national EPI schedule; 2,000 laboratory results including a subset of notifiable disease triggers; 1,000 insurance enrollment records with active and inactive coverage states. No real patient data is ever loaded into the sandbox.

**Regression Testing.** Every change to a production mediator, FHIR profile, or API configuration is tested in the sandbox before production deployment. The regression test suite includes:

- **Flow-level tests:** Each of the six priority integration flows (Section 6.2) has an end-to-end test case that exercises the complete flow from trigger to final delivery, verifying that all steps produce the expected outputs.
- **Consumer compatibility tests:** For each connected system, a set of representative API calls (the system's typical request patterns) are replayed against the sandbox to confirm that changes do not break existing consumers.
- **Error handling tests:** Simulated error conditions (system unavailability, invalid data, authentication failures) are injected to confirm that error handling and retry logic function correctly after the change.

The regression test suite is maintained by the DHDD Integration Developer and updated whenever a new integration flow or consumer is added. Test execution is automated where possible (scheduled test runs after each sandbox deployment) and supplemented by manual testing for complex orchestration scenarios.

### 6.5.6 Service Level Agreement (SLA) Framework

SLAs define the availability, performance, and support commitments for the HIE and its integration flows. SLA targets are reviewed annually by the Architecture and Interoperability TWG and approved by the NDHSC.

**Availability Targets:**

| Component | Availability Target | Measurement Window | Planned Maintenance Window |
|-----------|-------------------:|--------------------:|---------------------------|
| OpenHIM (HIE core) | 99.5% | Monthly | Sunday 02:00–06:00 (excluded from uptime calculation) |
| OpenCR (MPI) | 99.5% | Monthly | Aligned with OpenHIM maintenance window |
| HAPI FHIR (SHR) | 99.0% | Monthly | Aligned with OpenHIM maintenance window |
| FHIR Façade mediators | 99.0% | Monthly | Per-mediator; scheduled in coordination with source system maintenance |
| Sandbox environment | 95.0% | Monthly | Available on best-effort basis; may be unavailable during infrastructure updates |

99.5% monthly availability equates to a maximum of approximately 3.6 hours of unplanned downtime per month — a target that is demanding but achievable given the technology stack and infrastructure constraints in Progressa. The planned maintenance window (Sunday early morning) is selected to minimise impact on health service delivery.

**Response Time Thresholds:**

| Transaction Type | Target (95th Percentile) | Maximum Acceptable | Example |
|------------------|-------------------------:|-------------------:|---------|
| Synchronous query (real-time point-of-care) | <2 seconds | 5 seconds | MPI patient lookup, insurance eligibility check |
| Asynchronous submission (acknowledged) | <1 second (to HTTP 202) | 3 seconds | Birth notification, lab result submission, claims submission |
| Asynchronous processing (end-to-end orchestration) | <30 seconds | 2 minutes | Birth registration → MPI → e-NHIS enrollment complete |
| Batch processing | <5 minutes per batch | 30 minutes per batch | SPT→DHIS2 aggregate import, ADX international export |

**Incident Escalation:**

| Severity | Definition | Response Time | Resolution Target | Escalation Path |
|----------|-----------|:-------------:|:-----------------:|-----------------|
| Critical | HIE core (OpenHIM) unavailable; no transactions processing; patient care impacted | 15 minutes | 2 hours | Integration Data Steward → DHDD Director → NDHSC Chair (if >4 hours) |
| High | Single integration flow unavailable (e.g., eligibility verification down); workaround available (manual process) | 30 minutes | 4 hours | Integration Data Steward → DHDD Director |
| Medium | Degraded performance (response times above SLA) or elevated error rates; no data loss | 2 hours | 24 hours | Integration Data Steward |
| Low | Cosmetic issue, documentation update, non-urgent configuration change | Next business day | 5 business days | Integration Data Steward (standard queue) |

### 6.5.7 Integration Monitoring and Incident Management

Day-to-day integration monitoring and incident management is the operational responsibility of the DHDD, with escalation to the Architecture and Interoperability TWG and the NDHSC for systemic or strategic issues.

**Monitoring Responsibility.** The DHDD Integration Data Steward is the primary monitoring owner, responsible for reviewing the integration monitoring dashboard daily, responding to automated alerts, and initiating incident response when thresholds are breached. During non-business hours, the monitoring system sends SMS alerts to the on-call DHDD staff member (initially the Integration Data Steward or the HIE Manager, rotating weekly as the team grows).

**Alert Routing.** Alerts from the monitoring system (Section 6.4.5) are routed based on the alert type:

| Alert Type | Primary Recipient | Secondary Recipient | Escalation |
|-----------|-------------------|---------------------|------------|
| System availability (heartbeat failure) | Integration Data Steward | Source system administrator | DHDD Director (if >2 hours) |
| Performance degradation (response time) | Integration Data Steward | Source system administrator | Architecture and Interoperability TWG (if recurring) |
| Error rate spike | Integration Data Steward | Data owner for the affected flow | DHDD Director (if >15% error rate sustained >1 hour) |
| Security alert (authentication failures) | Health Information Security Officer | Integration Data Steward | DHDD Director + NDHSC (if breach confirmed) |
| Rate limit breaches | Integration Data Steward | Client system administrator | TWG (if persistent; may indicate need for rate limit adjustment) |

**Incident Lifecycle.** When a monitoring alert triggers an incident:

1. **Detection.** Automated alert received by the designated recipient.
2. **Triage.** The recipient assesses the severity (Critical, High, Medium, Low) and the scope (single system, single flow, or systemic).
3. **Investigation.** The Integration Data Steward examines the OpenHIM transaction logs, error details, and system availability status to identify the root cause. For issues in source or destination systems, the system administrator is engaged.
4. **Resolution.** The root cause is addressed — this may involve restarting a mediator, correcting a configuration, coordinating with a vendor for a system fix, or activating the manual fallback process for the affected integration flow.
5. **Communication.** Affected stakeholders (data owners, system administrators, and — for Critical incidents — the DHDD Director and NDHSC) are notified of the incident status and expected resolution time.
6. **Closure.** Once the issue is resolved and the affected integration flow is confirmed operational, the incident is closed with a documented root cause analysis.
7. **Post-Incident Review.** For Critical and High severity incidents, a post-incident review is conducted within 5 business days. The review identifies root causes, contributing factors, and preventive measures. Findings are reported to the Architecture and Interoperability TWG and, for Critical incidents, to the NDHSC.

**Escalation to TWG and NDHSC.** The Architecture and Interoperability TWG receives a monthly integration health report from the DHDD covering: transaction volumes and trends, SLA compliance, incident summary (count by severity, mean time to resolution), recurring issues and their root causes, and recommendations for architecture or process improvements. The NDHSC receives a quarterly integration health summary as part of the broader digital health progress review.

---

*This concludes Section 6.4 (API Management and Governance) and Section 6.5 (Integration Governance Model). The complete Section 6 is assembled in D6-S06-integration-architecture.md.*

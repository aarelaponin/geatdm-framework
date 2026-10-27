# Task 07: Outputs

## Primary Deliverable
- **`D6-S07-technology-architecture.md`** — Section 7: Technology Architecture (To-Be), ~12 pages

## Section Summary

### 7.1 Infrastructure Architecture
- Hub-and-spoke sovereign cloud model with MoH as isolated spoke
- Sovereignty tiering: sovereign (identifiable data), hybrid (de-identified analytics), on-premises (facility level)
- RDIP dependency table (6 components with delivery timelines and MoH impact)
- Transitional hosting strategy with parallel-run migration approach

### 7.2 Network and Connectivity
- Three-tier network architecture (central-to-central, central-to-facility, last-mile/community)
- Offline-first design principle as foundational requirement (not fallback)
- Rural connectivity strategy: baseline → USSD/SMS → satellite → broadband progressive enhancement
- Bandwidth planning table (7 applications with minimum requirements)

### 7.3 Hosting Architecture
- Central services hosting (HIE core, DHIS2, health administration) on sovereign cloud
- Facility-level hosting: tablets (primary), local servers (hospitals), full deployment (teaching hospital)
- Three disaster recovery scenarios with RTO/RPO targets
- Backup strategy with testing and retention requirements

### 7.4 Security Architecture
- Encryption: TLS 1.2+/mTLS in transit, AES-256 at rest, full-disk encryption on devices
- RBAC framework: 6 role categories × 5 systems with specific permissions
- Audit logging: immutable, 7-year retention, patient-visible (future)
- Three-tier incident response (facility, DHDD/national, national CSIRT/NCSC)
- Vulnerability management: patching SLAs, annual penetration testing, weekly scanning
- Physical security requirements for data centre and facility devices

### 7.5 Technology Standards
- Approved open-source stack: PostgreSQL, Tomcat, Node.js, Ubuntu LTS, RabbitMQ, Docker/Kubernetes, Prometheus/Grafana
- Hardware standards: clinical tablets (10.1", 4GB RAM, 64GB), facility servers (NUC-type, 16-32GB RAM)
- Power infrastructure specifications (UPS, solar, surge protection)

### 7.6 Service-Oriented Architecture Design
- Pragmatic approach: monoliths stay monolithic; HIE layer as service bus
- Containerisation for central services only (not facility-level)
- Lightweight service registry via DNS + OpenHIM channel catalogue + API catalogue (OpenAPI 3.0)
- Health check monitoring at 30-second intervals

## Downstream Dependencies
- **Task 08 (Diagrams)**: Technology stack diagram, infrastructure deployment diagram
- **Task 09 (Consolidation)**: Section 7 integrates into full D6 document
- **D7 (Roadmap)**: Technology migration phases, procurement timelines, capacity building requirements
- **D11 (Cloud Strategy)**: Detailed sovereign cloud deployment plan building on Section 7.1

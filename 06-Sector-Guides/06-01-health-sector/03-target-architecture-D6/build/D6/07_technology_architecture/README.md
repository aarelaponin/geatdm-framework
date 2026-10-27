# Task 07: Technology Architecture (To-Be)

## Purpose
Produces Section 7 of D6: Technology Architecture (To-Be) for the Ministry of Health, covering infrastructure, networking, hosting, security, technology standards, and service-oriented architecture design.

## Structure
- `D6-S07-technology-architecture.md` — Main section document (~12 pages)
- `_inputs.md` — Source materials consumed
- `_outputs.md` — Deliverables produced
- `README.md` — This file

## Section Coverage
- 7.1 Infrastructure Architecture (sovereign cloud, RDIP dependencies, transitional hosting)
- 7.2 Network and Connectivity (offline-first, rural strategy, bandwidth planning)
- 7.3 Hosting Architecture (central, facility-level, disaster recovery)
- 7.4 Security Architecture (encryption, RBAC, audit, incident response, vulnerability management)
- 7.5 Technology Standards (approved stack, hardware standards)
- 7.6 Service-Oriented Architecture Design (pragmatic approach, containerisation, service registry)

## Key Design Decisions Reflected
- DD-07: Hybrid cloud (sovereign for identifiable data, public cloud for de-identified analytics)
- DD-12: Design for RDIP infrastructure; implement with interim alternatives
- Offline-first as foundational design requirement (not fallback)
- Open-source-preferred technology stack
- Pragmatic SOA: monoliths stay monolithic; HIE layer provides service bus

## Dependencies
- Cloud strategy: `_cloud/cloud-plan.docx`
- Infrastructure context: Task 01 context synthesis
- Application portfolio: Task 05 (application architecture)
- Integration architecture: Task 06 (integration flows and OpenHIM design)

# Task 08: Diagrams, Decisions, and Appendices

## Purpose
Creates Section 8 (Enterprise Architecture Core Diagrams), Section 9 (Architecture Decision Records), and Appendices A–E for the MoH D6 Future State "To-Be" Architecture document.

## Outputs
- `D6-S08-diagrams-decisions-appendices.md` — Combined Section 8 (4 diagrams), Section 9 (21 ADRs), and Appendices A–E

## Contents

### Section 8: Enterprise Architecture Core Diagrams
- 8.1 MoH Target Architecture Overview Diagram (layered: Governance → Business → Data → Application → Integration → Technology → External)
- 8.2 Application Landscape Diagram (all systems by layer with integration lines through OpenHIM)
- 8.3 Integration Flow Diagram (hub-and-spoke with OpenHIM, 6 priority flows, standards per flow)
- 8.4 Technology Stack Diagram (User → App Runtime → Platform → Data → Monitoring → Security → Infrastructure)

### Section 9: Architecture Decision Records
- 21 ADRs (ADR-01 to ADR-21) covering all major design decisions from Sections 2–7
- Each with: Decision Area, Section Reference, Options Considered, Decision Made, Rationale, Implications

### Appendices
- **Appendix A:** Mapping to GEATDM PDU Reference Architecture (11 capabilities mapped)
- **Appendix B:** Mapping to eHealth Reference Architecture Layers (5 layers mapped)
- **Appendix C:** System-by-System Modernisation Decision Table (20 systems with disposition, timeline, dependencies, risks, success criteria)
- **Appendix D:** Standards and Specifications Reference List (5 categories: Exchange Standards, Classifications, Frameworks, FHIR Profiles, Security Standards)
- **Appendix E:** Glossary (100+ terms covering all acronyms and technical concepts)

## Diagram Format
All diagrams use Mermaid syntax for rendering in documentation tools. Each diagram includes accompanying narrative explaining architectural intent.

## Dependencies
- Sections 2–7 (all previous task outputs)
- GEATDM PDU Reference Architecture
- eHealth Reference Architecture

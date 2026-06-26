# Building-Block → spec → engine crosswalk

**The lookup behind `bb-config-gen`.** For every Building Block or exchange point KP2–4 configures, this gives: the **public spec to cite** (the only source allowed in deliverable content), the **internal engine** that generates the config (provenance stays internal), the **config artefact** produced, and the **Progressa instance** it is wired for.

The Progressa canon (Inception Report §4.2): **MoEYS** (Ministry of Education), **PLR** (national learner registry), **PNEA** (national examination authority), **PNIA** (national identity authority), **PDGA** (digital-government authority), **PayPro** (central-bank fast-payment scheme). Keep these names and the BB ids identical across all three packs — they are the join keys for the cumulative Progressa solution.

> Citation rule: the videos and the build pack cite **only** the public spec column. Never cite `joget-*`, `mtca-data-platform`, X-Road internal ops notes, or `GEATDM` as a source. The engine column is internal routing, not a citation.

---

## KP2 — Interoperability (the bus)

The four EIF layers realised on X-Road. The four-layer model is **EIF + NIIS X-Road**, not PAERA (PAERA §3.4.3 frames interoperability; the layered model is EIF). Legal layer anchors at PAERA §3.2; once-only at PAERA §5.2 Principle #5.

| BB id | What it is | Public spec to cite | Config artefact | Progressa instance |
|---|---|---|---|---|
| `x-road-bus` | The Information Mediator / central + security servers | NIIS X-Road docs (niis.org); EIF Technical layer | central/security-server + Test CA config | the Linkup federation |
| `member-plr` | A member system on the bus | X-Road member/subsystem registration API | member id + subsystem + service descriptions | PLR (learner registry) |
| `member-pnea` | A member system on the bus | X-Road subsystem + ACL API | subsystem + access-control list | PNEA (examination authority) |
| `member-pnia` | A member system on the bus | X-Road subsystem + service description | subsystem + OpenAPI/WSDL service desc | PNIA (identity authority) |
| (legal) | Data-sharing agreement, decree | EIF Legal/Organisational layers; PAERA §3.2 | membership + data-sharing artefacts | MoEYS-led |

**Engine:** X-Road CLI / REST admin API for subsystem registration, ACL, and REST/SOAP service descriptions. **Acceptance pattern:** a once-only cross-system query (e.g. PNEA → PLR) returns the learner record without re-entry; verified by an X-Road test call.

## KP3 — DPI (the building blocks on the bus)

GovStack BB specs (govstack.global). The five-domain DPI maturity scale is **UNDP DPI Maturity Model**; investment benchmarks **World Bank ID4D / ITU DPI Safeguards**; the registry pattern is the bronze/silver/gold MDM pipeline (Giga School Master Data architecture). PAERA §3 frames DPI; §5.6 sourcing; §5.7 the wave roadmap.

| BB id | What it is | Public spec to cite | Engine (internal) | Config artefact | Progressa instance |
|---|---|---|---|---|---|
| `registry-mds` | Master-data registry, bronze→silver→gold | GovStack Registration/Registries BB; UNDP DPI | `mtca-data-platform`: `build-dbt-model`, `onboard-source`, `add-dq-checks` | staging/int/mart models + DQ tests | school master-data registry |
| `identity` | Foundational identity | GovStack Identity BB; World Bank ID4D | adapter config + `expose-api` | identity adapter + read API | PNIA |
| `payment-paypro` | Fast-payment rail | GovStack Payment BB | adapter config | payment adapter | PayPro |
| `consent` | Consent / data-sharing control | GovStack Consent BB | adapter config | consent policy config | cross-agency |
| `notification` | Notification dispatch | GovStack Information Mediation / Notification BB | adapter config | notification config | learner-facing |

**Acceptance pattern:** the registry loads through bronze→silver→gold with DQ gates passing; identity validates a learner; the payment rail is reachable — each a named check in `acceptance/`.

## KP4 — Service delivery (services over the BBs)

GovStack BB patterns (PAERA Annex A1.3); Joget DX 8.x (internal + published Joget docs); W3C Verifiable Credentials for the credential service. The three services the IR commits to:

| BB id | Service | Public spec to cite | Engine (internal) | Config artefact | Composes |
|---|---|---|---|---|---|
| `svc-learner-registration` | Learner Registration | GovStack BB patterns; Joget docs | `joget-req-analyst` → `joget-component-architect` → `joget-form-gen`/`joget-workflow-gen`/`joget-datalist-gen`/`joget-userview-gen` | `services.yml` + form/workflow/list/userview JSON | identity + registry |
| `svc-scholarship` | Scholarship Management | GovStack Payment BB; Joget docs | same Joget loop | service JSON + payment call | registry + PayPro |
| `svc-credential` | Digital Credential Issuance | W3C Verifiable Credentials Data Model; Joget docs | same Joget loop | service JSON + VC issuance config | identity |

**Engine detail:** the `joget-*` family is the build loop — `joget-feature-loop` drives a service end-to-end; `joget-deploy` loads it; `joget-db-inspect` runs the acceptance query. **Acceptance pattern:** the service deploys, a citizen journey completes, and `joget-db-inspect` shows the record in the expected state.

---

## The cumulative chain (bottom-up)

```
KP2  x-road-bus + members            ──▶  a running once-only exchange
KP3  registry-mds, identity, payment ──▶  BBs reachable on the KP2 bus
KP4  the three services              ──▶  services composed over the KP3 BBs
                                          = one running Progressa solution
```

A config in a higher pack may reference a lower pack's output (a KP4 service calls the KP3 identity BB, which rides the KP2 bus). `kp-solution-verify` checks the prerequisite packs are deployed first.

## What is NOT a public anchor (do not cite in deliverables)

- `joget-*`, `mtca-data-platform`, the X-Road internal ops runbook, `GEATDM`, `TK-IO-`/`TK-DPI-` codes — internal engines/methodology. Cite the public spec the config implements instead.
- The four-layer interoperability model → EIF + NIIS, **not** PAERA.
- The DPI maturity scale → UNDP, **not** PAERA.
- BB specifications → GovStack, **not** PAERA (PAERA Annex A1.3 is the pattern level only).

---

*Maintained alongside `bb-config-gen/SKILL.md`. Update when a new Building Block or exchange point is introduced. Confirm every identifier against the published spec or the live registry — see the `[confirm]` discipline in the skill.*

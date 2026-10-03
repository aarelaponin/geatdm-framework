# specimen, not yet run

# Progressa's sheet of checks for the composition — configurations X1 to X7

This is the worked example of KP3 subtopic 5.4: for each configuration of the composition on the data exchange layer, what is run, what counts as a pass, and the result and date of the last run. It is written from the acceptance checks of the specification analysis (section 7.3), each of which rests on an interface the specification publishes. **No check on this sheet has been run.** The configurations do not exist yet, and the data exchange federation does not run on the date of writing (1 October 2026). A result is entered only from a run that took place, with its date; a failed check stays on the sheet, with its output, until a later run passes.

In the build pack the checks belong in `acceptance/3.5.md`, by the name the pack's manifest gives them.

| Configuration | What is run | What counts as a pass | Rests on | Last run |
|---|---|---|---|---|
| X1 — the registration service as a member, with its application | List the members of the instance from the registration service's security server (`listClients`). | The registration service's member and application are listed. | Information Mediator 1.1.1, section 8.2.1 | not yet run |
| X2 — the write service on the learner register, with its contract | List the services of the learner registry and fetch the write service's contract (`listMethods`, `getOpenApi`); write a test record through the exchange; ask the register whether it exists. | The write operation and its contract are returned; the register's `exists` confirms the test record. | Information Mediator 1.1.1, section 8.2.2; Digital Registries 3.0-alpha, section 8.2 | not yet run |
| X3 — the grants to the registration service | Make the write call from the registration service; make the same call from a member without a grant. | The first call is answered; the second is refused (on Linkup, `Server.ServerProxy.AccessDenied`). | Information Mediator 1.1.1, sections 6.2 and 8.6.2 | not yet run |
| X4 — the once-only sequence | Run the registration from the sign-in to the register's confirmation with the enrolled test person (storyboard of subtopic 5.3). | The test person signs in on PNIA's own page; only the approved claims arrive; the stored identifier is PNIA's identifier for this service, not the national number; no field is typed twice; the registrar approves; `exists` returns true. | Identity 2.0, section 9.1.1; Registration, section 6.3.2.7; Digital Registries 3.0-alpha, section 8.2 | not yet run |
| X5 — each call through the caller's own security server | Read the message-log records of the run of X4. | Each request was made to the caller's own security server, on the `/r1/` path. | Information Mediator 1.1.1, sections 6.3 and 8.1 | not yet run |
| X6 — full message logging and access to monitoring | Query the message log on every security server that took part in X4; read operational monitoring as each reader. | A signed, time-stamped record of each request and response of X4, with full logging; each reader sees what its role allows. With metadata logging only, the records are not evidence and the check fails. | Information Mediator 1.1.1, sections 6.5 ("Logging Services") and 6.6; X-Road 7.7.0, UG-SS sections 11 and 15 | not yet run |
| X7 — the Payments block as a member | List the services of the Payments block's member (`listMethods`). | The block's own published operations are listed, and no operation of a payment system in the market is listed as the block's. | Information Mediator 1.1.1, section 8.2.2; Payments 3.0, section 5.1.14 | not yet run |

Consent (CN1) and Messaging (MS1) have no row: KP3 cites those specifications and does not build them.

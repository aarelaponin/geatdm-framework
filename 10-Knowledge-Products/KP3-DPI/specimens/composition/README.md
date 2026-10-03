# specimen, not yet run

# Specimens for KP3 Module 5 — Join the blocks and prove the foundation

These files show the configurations of KP3 Module 5, X1 to X7, as specimens: files written for the fictional country Progressa in the terms of the published specifications, so that the scripts of Module 5 can teach what each configuration contains and what its check runs before anything is built. **None of them has been applied to any installation, and no check has been run on them.** The data exchange federation they describe, Linkup, does not run on the date they were written (1 October 2026).

The configurations themselves are the colleague's build. When a configuration is built and its check has passed, its specimen here is replaced by the file as built, the matching demonstration segment is recorded, and the script gains one sentence that states the result and its date. Nothing in this folder is part of the build pack, `KP3-build-pack/`, and nothing here should be copied into it unchanged: every value marked `[confirm: …]` is chosen by the build.

## What each file holds

| File | Configurations | What it is written in the terms of | Taught in |
|---|---|---|---|
| `once-only-composition.yaml` | X1, X2, X3, X5, X6, X7 | GovStack Information Mediator 1.1.1, sections 6.2, 6.3, 6.5 (Logging Services), 6.6, 7.2, 8.1 and 8.6.2; NIIS X-Road 7.7.0, UG-SS sections 6.1.2, 7, 11, 14.2 and 15; GovStack Digital Registries 3.0-alpha, DRS-33 and sections 8.1 and 8.2; GovStack Payments 3.0, section 5.1.14 | 5.1, 5.2, 5.5 |
| `once-only-sequence.yaml` | X4 | GovStack Registration, default edition, sections 6.3.2 and 6.3.2.7; GovStack Identity 2.0, sections 7.2.1 and 9.1.1; GovStack Information Mediator 1.1.1, section 4 (Out-of-scope requirements) and section 9.1; GovStack Digital Registries 3.0-alpha, section 8.2 | 5.2, 5.3 |
| `acceptance-sheet.md` | the checks X1 to X7 | the acceptance checks of the specification analysis, section 7.3, each resting on a published interface | 5.4 |

## Where the built files will live

The build pack's own index, `KP3-build-pack/manifest.yaml`, names `configs/_compose/3.5-once-only.yaml` for the composition (X1, X2, X3, X5, X6, X7). The sequence X4 is not a separate file in the build: it extends the registration service description of Module 2, which holds the write on approval (configuration R8), so that the sequence of the service lives in one place. The checks belong in `acceptance/3.5.md` by the manifest's name. Those files are the build's; this folder only shows their content in advance.

## Three rules these specimens follow

1. **The data exchange layer carries calls and enforces who may make them; it does not put the steps in order.** The order is held by the registration service, as its configured actions (X4). Nothing in `once-only-composition.yaml` sequences or maps a call.
2. **A person is checked through PNIA's sign-in with OpenID Connect, with the person present, and the service keeps the identifier PNIA gives it, never the national number.** PNIA's present service on Linkup, a read of a person by national number, is a Progressa contract from KP2. It appears here only as a named alternative that the build may show under its own name.
3. **Payment systems in the market stand behind the Payments block's payer bank.** The member on the exchange is the Payments block, publishing its own interface (X7).

## The names used

PDGA owns and operates Linkup. PNEA (the examination authority), PLR (the learner registry, publishing one enrolment service) and PNIA (the identity authority) have been members since KP2, with the identifiers KP2's build pack gives them in its `manifest.yaml`. MoEYS, the ministry of education, is not a member. KP3 sets up the authoritative learner register behind PLR (Module 3), and Module 5 adds its write service.

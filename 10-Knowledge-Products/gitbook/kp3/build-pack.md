---
description: "No build pack has been released yet. This page lists what the build will contain and how modules 2 to 5 teach it until then."
icon: toolbox
---

# The build plan

No build pack has been released yet. This page lists what the build will contain and how modules 2 to 5 teach it until then. Modules 2 to 5 build one education service on four shared blocks. What the build will set up is listed here: what must be in place around the configurations, every configuration with the subtopic that teaches it and the published specification it follows, and the demonstrations that will be recorded once the configurations exist. The build is a separate piece of work from the writing of this guide.

{% hint style="warning" %}
**Until a check has passed.** One rule holds for every build subtopic. Its script and its slides are written from the published specification named in its sources. They say what the configuration contains, what its check runs and what counts as a pass; those statements are true whether or not anything has been built. The configuration is shown as a specimen, a file written for Progressa in the specification's terms and marked "specimen, not yet run". The demonstration segment exists as a storyboard. When the check has passed on the built configuration, the specimen is replaced by the file as built, the segment is recorded, and the script gains a sentence that states the result and its date. Before that, no script, slide or page says that anything runs.
{% endhint %}

## What must be in place around the configurations

| What is needed | What it is | Subtopics that wait for it |
| --- | --- | --- |
| **The federation, running again** | Linkup, the X-Road federation of release 7.7.0 that the interoperability course defines, with PDGA as its owner and PNEA, PLR and PNIA as members, started from that course's build pack as it stands | [5.1](module-5/5-1.md), [5.3](module-5/5-3.md), [5.5](module-5/5-5.md) |
| **A product for the Registration block and for the register** | The build chooses it, and each configuration file names the product and the format it is written in | [2.3](module-2/2-3.md), [3.3](module-3/3-3.md) |
| **An identity provider with the published interface** | The checks of I1 to I7 need a provider that offers the published interface, OpenID Connect, in the identity authority's name. The identity service that the interoperability course left offers one read by national number. The build either sets such a provider up or states in the configuration file that only that read is offered | [4.3](module-4/4-3.md), [5.3](module-5/5-3.md) |
| **An installation of the Payments block** | The block with a programme account, a payer bank, and PayPro as the payment system behind the bank | [4.4](module-4/4-4.md), [4.5](module-4/4-5.md) |
| **The contract files of the blocks' interfaces** | The publishers' OpenAPI files, fixed at a named commit before any configuration depends on the name of a field | [3.7](module-3/3-7.md), [4.3](module-4/4-3.md), [4.5](module-4/4-5.md), [5.2](module-5/5-2.md) |
| **Test data** | A seeded load of learners that includes faulty rows; an enrolled test person; a test beneficiary | [3.2](module-3/3-2.md), [3.4](module-3/3-4.md), [4.3](module-4/4-3.md), [4.5](module-4/4-5.md) |
| **The pack's run book and scripts** | The instructions and the scripts that set the pack up, seed it and run the acceptance checks | [5.4](module-5/5-4.md) |

## The configurations

Each configuration has an acceptance check of the same name. The letters name the block: R for Registration, RG for Digital Registries, I for Identity, P for Payments, X for the composition on the data exchange layer. The federation and its rules come from [Building a Government Interoperability Framework (GIF)](../kp2/README.md).

### Registration

Published specification: [REG](https://specs.govstack.global/registration).

| Configuration | What is built | Taught in | State |
| --- | --- | --- | --- |
| **R1** | The service "Progressa learner registration", holding one registration whose entity in charge is the owner of the learner register | [2.3](module-2/2-3.md) | Not yet built |
| **R2** | The subjects and determinants of the registration, for example a learner who transfers from another school | [2.3](module-2/2-3.md) | Not yet built |
| **R3** | The data, the documents and the result that the registration requires and produces | [2.3](module-2/2-3.md) | Not yet built |
| **R4** | The applicant's screens in order, with the payment screen switched off | [2.3](module-2/2-3.md) | Not yet built |
| **R5** | The rules on fields and the control of completeness | [2.4](module-2/2-4.md) | Not yet built |
| **R6** | The check of the learner's name and identifier against the identity authority, built the published way, with the learner present | [2.4](module-2/2-4.md) | Not yet built |
| **R7** | The processing roles and their order: an automated role, then a human registrar who decides | [2.5](module-2/2-5.md) | Not yet built |
| **R8** | The write to the learner register on final approval, as an action of an automated role | [2.5](module-2/2-5.md) | Not yet built |
| **R9** | The statistics of applications processed | [2.6](module-2/2-6.md) | Not yet built |
| **R10** | The service as a description that can be exported, with the product format named in the file | [2.6](module-2/2-6.md) | Not yet built |

### Digital Registries

Published specification: [DR](https://specs.govstack.global/registries).

| Configuration | What is built | Taught in | State |
| --- | --- | --- | --- |
| **RG1** | The learner register: its name, short code, owner, retention policy, classification and lifecycle state | [3.3](module-3/3-3.md) | Not yet built |
| **RG2** | Its schema: typed fields, the rules on required and unique values, and the field that holds the identifier the register keys on | [3.3](module-3/3-3.md) | Not yet built |
| **RG3** | The link from each learner to a school, with its rule on deletion | [3.3](module-3/3-3.md) | Not yet built |
| **RG4** | The publication and the versions of the schema | [3.3](module-3/3-3.md) | Not yet built |
| **RG5** | The access rules: the registration service may create and update, other services may only read | [3.7](module-3/3-7.md) | Not yet built |
| **RG6** | The audit log and the record of the use of personal data | [3.7](module-3/3-7.md) | Not yet built |
| **RG7** | The load of the gold tier's records into the register | [3.6](module-3/3-6.md) | Not yet built |
| **RG8** | The list of the register's services, with descriptions of fields and examples | [3.7](module-3/3-7.md) | Not yet built |
| **RG9** | The tiered load, raw, bronze, staging, silver and gold, following Giga's published flow, with no code of Giga's copied | [3.2](module-3/3-2.md) | Not yet built |
| **RG10** | The data-quality checks at bronze | [3.4](module-3/3-4.md) | Not yet built |
| **RG11** | The reconciliation of each load, as the team's own practice | [3.6](module-3/3-6.md) | Not yet built |
| **RG12** | The schema as a file in JSON or YAML that can be exported | [3.3](module-3/3-3.md) | Not yet built |
| **RG13** | Deletion that keeps the logical record | [3.7](module-3/3-7.md) | Not yet built |

### Identity

Published specification: [ID](https://specs.govstack.global/identity).

| Configuration | What is built | Taught in | State |
| --- | --- | --- | --- |
| **I1** | The service registered as a client of the identity block | [4.3](module-4/4-3.md) | Not yet built |
| **I2** | The addresses where the block publishes its configuration and its keys | [4.3](module-4/4-3.md) | Not yet built |
| **I3** | The flow the service uses, with claims or without | [4.3](module-4/4-3.md) | Not yet built |
| **I4** | The scopes and claims requested, kept to what the service needs | [4.3](module-4/4-3.md) | Not yet built |
| **I5** | The levels of authentication the service accepts | [4.3](module-4/4-3.md) | Not yet built |
| **I6** | The identifier the service keeps: the one the block gives to that service, not the national number | [4.3](module-4/4-3.md) | Not yet built |
| **I7** | The enrolled test person as whom the checks sign in | [4.3](module-4/4-3.md) | Not yet built |

### Payments

Published specification: [PAY](https://specs.govstack.global/payments).

| Configuration | What is built | Taught in | State |
| --- | --- | --- | --- |
| **P1** | The calling block configured as an accepted source of payments | [4.5](module-4/4-5.md) | Not yet built |
| **P2** | The programme, its payment account and its currency | [4.5](module-4/4-5.md) | Not yet built |
| **P3** | The onboarding of a beneficiary into the account mapper | [4.5](module-4/4-5.md) | Not yet built |
| **P4** | The bulk payment, with the least a payment request must contain | [4.5](module-4/4-5.md) | Not yet built |
| **P5** | The route for status: the address to which status is sent, and the call for the status of one payment | [4.5](module-4/4-5.md) | Not yet built |
| **P6** | The payer bank behind the block, with PayPro reached through it as a payment system in the market | [4.4](module-4/4-4.md) | Not yet built |
| **P7** | Transport and security: publication through the Information Mediator, and authorised, authenticated calls | [4.5](module-4/4-5.md) | Not yet built |

### Composition on the data exchange layer

Published specification: [IM](https://specs.govstack.global/information-mediator) and [the X-Road documents](https://github.com/nordic-institute/X-Road/tree/7.7.0/doc).

| Configuration | What is built | Taught in | State |
| --- | --- | --- | --- |
| **X1** | The registration service as a member of the federation, with a registered application | [5.1](module-5/5-1.md) | Not yet built |
| **X2** | A write service on the learner register, registered with its OpenAPI contract | [5.1](module-5/5-1.md) | Not yet built |
| **X3** | The grants of access, on the identity service and on the register's write service, to the registration service | [5.1](module-5/5-1.md) | Not yet built |
| **X4** | The once-only sequence as actions of the registration service: sign-in, pre-fill from the released claims, submission, approval and write | [5.3](module-5/5-3.md) | Not yet built |
| **X5** | Each call made through the caller's own security server | [5.2](module-5/5-2.md) | Not yet built |
| **X6** | Full message logging on the security servers that take part, and access to monitoring for whoever reads the evidence | [5.5](module-5/5-5.md) | Not yet built |
| **X7** | The Payments block as a member, with its own interface published through the Information Mediator | [5.1](module-5/5-1.md) | Not yet built |

### Consent

Published specification: [CON](https://consent.govstack.global/).

| Configuration | What is built | Taught in | State |
| --- | --- | --- | --- |
| **CN1** | Not built. This guide cites the Consent specification, and nothing the guide teaches requires the block | [5.6](module-5/5-6.md) | Not built |

### Messaging

Published specification: [MSG](https://specs.govstack.global/messaging).

| Configuration | What is built | Taught in | State |
| --- | --- | --- | --- |
| **MS1** | Not built. This guide cites the Messaging specification, and nothing the guide teaches requires the block | [5.6](module-5/5-6.md) | Not built |

## Three settings that the build states

Three choices belong to the build. Each is stated in the configuration file concerned: the scripts teach the rule, and the build supplies the value.

| Setting | The rule | Stated in | Taught in |
| --- | --- | --- | --- |
| **The key of the learner register** | It is not the national number taken from the identity block. The register may hold a number of its own, with the identifier that the identity block gives to the service stored beside it | RG2 and I6 | [3.3](module-3/3-3.md) and [4.3](module-4/4-3.md) |
| **The identity interface of the demonstration** | The published interface is taught from the specification. If the build offers only the read by national number that the interoperability course left, the demonstration shows that read under its own name, as a contract of Progressa's beyond the published set | I1 to I7 | [4.2](module-4/4-2.md), [4.3](module-4/4-3.md) and [5.3](module-5/5-3.md) |
| **The product and the format of the descriptions** | The file of the registration service and the file of the register's schema each name the product and the format they are written in, and the edition of the specification they implement | R10 and RG12 | [2.3](module-2/2-3.md), [2.6](module-2/2-6.md) and [3.3](module-3/3-3.md) |

## How each module is taught until its configurations are built

| Module | What it waits for | How it is taught until then |
| --- | --- | --- |
| [Module 1](module-1/README.md) | Nothing that is built. It uses the assessment toolkit and the worked examples of steps 1 to 5 | In full. The demonstrations of 1.4 and 1.7 need only the toolkit |
| [Module 2](module-2/README.md) | R1 to R10, on the product chosen for the Registration block; R6 also needs the identity provider, and R8 the register | Subtopics 2.1 and 2.2 do not depend on the build. Subtopics 2.3 to 2.6 are taught by the rule above: the service description is a specimen, and the walkthroughs of the import, the refused applications, the approval with its write, and the export are storyboards |
| [Module 3](module-3/README.md) | RG1 to RG13, on the product chosen for the register, with a seeded load | Subtopics 3.1 and 3.5 do not depend on the build. Subtopics 3.2, 3.3, 3.4, 3.6 and 3.7 are taught by the rule above: the schema and the tier layout are specimens, and the load, the faulty rows, the reconciliation and the test of access are storyboards |
| [Module 4](module-4/README.md) | I1 to I7, on an identity provider with the published interface; P1 to P7, on an installation of the Payments block | Subtopics 4.1, 4.2, 4.4 and 4.6 do not depend on the build, except that 4.2 states what the identity authority offers once the build has settled it. Subtopics 4.3 and 4.5 are taught by the rule above. If the build offers only the read by national number, 4.3 still teaches the published connection from the specification, and its demonstration shows that read under its own name |
| [Module 5](module-5/README.md) | X1 to X7, on the federation running again, and with them everything modules 2 to 4 build | All six subtopics are taught from the specifications and the X-Road documents. The walkthroughs of 5.1, 5.3, 5.4 and 5.5 are storyboards. If only a part is built, the run of 5.3 is recorded as far as that part reaches, and the script says where the recording stops and the storyboard continues |
| [Module 6](module-6/README.md) | Nothing that is built. It uses the worked examples of steps 6 to 9 | In full. The demonstration of 6.9 needs only the toolkit |

## The demonstrations

A demonstration segment is a recording of the screen with a voice-over, inside the video of its subtopic. There are 18. Until a segment can be recorded, its storyboard stands in its place.

| Subtopic | What the walkthrough shows | What it needs |
| --- | --- | --- |
| [1.4](module-1/1-4.md) | The desk assessment run on Progressa's public record | The question bank of the assessment toolkit |
| [1.7](module-1/1-7.md) | The scorer applied to one domain of Progressa | The scoring criteria of the assessment toolkit |
| [2.3](module-2/2-3.md) | The service description drafted, imported and listed by the block | R1, R2, R3, R4 and R10 |
| [2.4](module-2/2-4.md) | An application refused by each of the three kinds of check | R5 and R6 |
| [2.5](module-2/2-5.md) | The registrar's approval, and the record appearing in the register | R7 and R8, with the register of RG1 and RG2 |
| [2.6](module-2/2-6.md) | The service exported, imported into a clean installation and compared | R9 and R10 |
| [3.2](module-3/3-2.md) | A load passing through the five tiers | RG9 |
| [3.3](module-3/3-3.md) | The schema drafted, and the register created from it | RG1, RG2, RG3, RG4 and RG12 |
| [3.4](module-3/3-4.md) | A faulty row set aside with its reason | RG10 |
| [3.6](module-3/3-6.md) | The reconciliation of one load | RG7 and RG11 |
| [3.7](module-3/3-7.md) | An update refused and an update accepted, and the record of use | RG5 and RG6 |
| [4.3](module-4/4-3.md) | A test person signs in, and the token is verified | I1 to I7 |
| [4.5](module-4/4-5.md) | A beneficiary registered, a batch of one payment, the status returned | P1 to P7 |
| [5.1](module-5/5-1.md) | The list of members and services, and a call refused for want of a grant | X1, X2, X3 and X7, on the running federation |
| [5.3](module-5/5-3.md) | The once-only registration from beginning to end; this is the principal walkthrough of this guide | X4, with everything it uses, on the running federation |
| [5.4](module-5/5-4.md) | The acceptance checks run, and the sheet of their results | Every configuration that is built |
| [5.5](module-5/5-5.md) | The three records of the run of 5.3 | X6, on the running federation |
| [6.9](module-6/6-9.md) | One AI play run from beginning to end: the scorer on a domain whose stage is known | The scoring criteria of the assessment toolkit |

## The specimens

**Module 2.** Specimens, not yet run:

- `specimens/registration/README.md`
- `specimens/registration/progressa-learner-registration.service.yaml`
- `specimens/registration/test-applications.yaml`
- `specimens/registration/write-mapping.yaml`

**Module 3.** Specimens, not yet run:

- `specimens/registry/plr-learner-register.schema.yaml`
- `specimens/registry/plr-load-tiers.yaml`

**Module 4.** Specimens, not yet run:

- `specimens/identity-payments/README.md`
- `specimens/identity-payments/acceptance-checks.specimen.md`
- `specimens/identity-payments/identity-connection.specimen.yaml`
- `specimens/identity-payments/payment-connection.specimen.yaml`

**Module 5.** Specimens, not yet run:

- `specimens/composition/README.md`
- `specimens/composition/acceptance-sheet.md`
- `specimens/composition/once-only-composition.yaml`
- `specimens/composition/once-only-sequence.yaml`

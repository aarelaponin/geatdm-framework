---
description: "The method has twelve documents, from the customer's own request to the working application."
icon: list-ol
---

# The twelve documents

The method has twelve documents, from the customer's own request to the working application. For each document this page says who writes it, what goes in, what comes out, which blank instrument the team uses, where a person decides, how the result is checked and which subtopic teaches it. The sector's catalogue of services, taught in subtopic 2.1, is written once for a whole sector before the first of the twelve, and is not one of them. It has a blank instrument of its own.

![F3. The twelve documents in order, with where the manager stands](figures/F3_twelve-documents.png)

*F3. The twelve documents in order, with where the manager stands.*

## The table of the twelve documents

In the column of what goes in, a number is the number of a document in this table. The customer's own documents are kept as received and never edited. The walk-through is produced from the screens, and the working application is generated from the application model; no person writes either, so neither has a blank instrument.

| Document | Who writes it | What goes in | What comes out | Blank instrument | Where a person decides | How it is checked | Taught in |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **1. The customer's own documents** | The customer | — | The mandate, the law and the requests, kept as received and never edited | None: the customer's own documents are kept as received | The customer, by what it hands over | Everything after is measured against it | [1.1](module-1/1-1.md), [2.2](module-2/2-2.md) |
| **2. The register of requirements** | An AI assistant extracts it; the analyst rules on each entry | 1 | One entry for each separate thing asked, with where it was said | [The register of requirements](toolkit/02_register-of-requirements.md) | The analyst accepts, amends or sets aside each entry | Its own checklist; no program | [2.2](module-2/2-2.md) |
| **3. The entity model, with its glossary and its business rules** | The analyst | 1, and the shared groundwork | The records the service keeps, what each means, and whose each fact is | [The entity model, with its glossary and its business rules](toolkit/03_entity-model.md) | The read-back to the business side | Its own checklist; no program | [2.3](module-2/2-3.md) |
| **4. The use case model** | One named architect | 2 and 3 | Every goal named, and each tied to the entries it serves | [The use case model](toolkit/04_use-case-model.md) | The model's owner at the review | Goals against entries in both directions | [2.4](module-2/2-4.md) |
| **5. The software architecture** | The solution architect | 2, 3 and 4 | What the service is built on, and every flow that crosses its boundary | [The software architecture](toolkit/05_software-architecture.md) | The architect, with the bodies on the other side of each crossing | Its own checklist; no program | [2.6](module-2/2-6.md), [5.4](module-5/5-4.md), [5.6](module-5/5-6.md) |
| **6. The rest of the shared groundwork** | A person, with an assistant | 3 | The states, settings, code lists and events every goal shares | [The shared groundwork: states, events, code lists and settings](toolkit/06_shared-groundwork.md) | The owner of each setting | Its own checklist; no program | [2.5](module-2/2-5.md), [4.3](module-4/4-3.md) |
| **7. One use case, written out in full, for each goal** | An AI assistant writes it; a person rules on it | 3, 4 and 6 | One goal as a story with every way it can fail | [One use case, written out in full](toolkit/07_use-case-in-full.md) | The person who rules on the draft | Its own checklist; no program | [3.1](module-3/3-1.md), [3.2](module-3/3-2.md) |
| **8. The screens of that use case** | Whoever wrote the use case, beside it | 7 and 3 | What a person sees at each step, with the source of every value | [The screens of a use case](toolkit/08_screens-of-a-use-case.md) | The review of three people | Against four lists the use case wrote | [3.3](module-3/3-3.md), [3.4](module-3/3-4.md), [3.6](module-3/3-6.md) |
| **9. The walk-through** | Nobody: it is produced from the screens | 8 | Web pages a person clicks through, each carrying its version | None: the walk-through is produced from the screens | The officials who click it, at the review | Produced by a program, never drawn | [3.5](module-3/3-5.md), [3.6](module-3/3-6.md) |
| **10. The interaction design** | One analyst writes it; the owner accepts it | 8, 3, 6 and 5 | How officers pick, find, move and act, settled once for the whole application | [The interaction design](toolkit/10_interaction-design.md) | The owner accepts it before the model is written | Its listings compared with the screens by a program | [4.1](module-4/4-1.md), [4.2](module-4/4-2.md), [4.3](module-4/4-3.md) |
| **11. The application model** | An AI assistant writes it and must refuse to guess; a person reviews and approves it | 7, 8, 3, 6, 5 and 10 | The one file from which the application is generated | [The review of the application model](toolkit/11_application-model-review.md) | The person who approves it, after reading what it assumed and could not express | A program refuses it if it contradicts the accepted interaction design or breaks a platform rule | [4.4](module-4/4-4.md), [4.5](module-4/4-5.md), [4.6](module-4/4-6.md) |
| **12. The working application** | Nobody: it is generated | 11 | The running service on the low-code platform | None: the application is generated from the model | The proof on the running system: a person finishes a real task | Read back against the model; acceptance journeys on the running service | [5.1](module-5/5-1.md), [5.2](module-5/5-2.md), [5.3](module-5/5-3.md), [5.7](module-5/5-7.md) |

Subtopic 1.4 teaches the table as a whole. Subtopic 6.1 teaches how to name the twelve documents as deliverables in a contract, each accepted by a named person.

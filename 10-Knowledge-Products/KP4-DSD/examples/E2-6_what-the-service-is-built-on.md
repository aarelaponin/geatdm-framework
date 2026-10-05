**Subtopic:** 2.6 — What the service is built on, and what crosses its boundary

**Public anchor:** GovStack, Architecture specification, edition 2.1.0, on the building block approach and how blocks are composed (its sections are fixed in the third production round); GovStack, Information Mediator Building Block specification, version 1.1.1, on the data exchange between bodies; GovStack, Registration Building Block specification, section 5.1.4 (all traffic between blocks passes through the Information Mediator)

**Simulated case:** This is a simulated case for Progressa, a fictional country; every institution, name, date and figure in it is invented.

# E2.6 — The architecture of Progressa's two applications, on one page

**What it shows.** The architecture of Progressa's two applications on one page: PHEQA's application and MoEYS's on two installations of the low-code platform, the sign-in through PNIA, MoEYS reading PHEQA's register of institutions across Linkup, and the table of crossings, each with its direction, the body on the other side and what crosses.

**Form of this example.** The shape of the page and the columns of the table of crossings are the team's blank instrument and name no country. The content is filled for Progressa.

## The picture

```
        Applicant, officers of PHEQA                 Minister, officers of MoEYS
                  │  sign in                                   │  sign in
                  ▼                                            ▼
   ┌───────────────────────────────┐            ┌───────────────────────────────┐
   │      PHEQA's application      │            │      MoEYS's application      │
   │  its own installation of the  │            │  its own installation of the  │
   │      low-code platform        │            │      low-code platform        │
   │                               │            │                               │
   │  keeps: the register of       │            │  keeps: the minister's        │
   │  institutions, applications,  │            │  decisions, the list for the  │
   │  licences, PHEQA's decisions  │            │  Gazette; no copy of the      │
   │                               │            │  register                     │
   └───────┬───────────────┬───────┘            └───────────────┬───────────────┘
           │               │       ┌────────────────────┐       │
           │               └───────┤       Linkup       ├───────┘
           │                       │ (operated by PDGA) │
           │                       └────────────────────┘
   ┌───────┴────────┐
   │ Payments block │        PNIA's sign-in: used by both applications
   └────────────────┘        when a person signs in
```

## Four statements the page makes

1. **What it is built on.** Each application runs on its own installation of the low-code platform, operated by its own body. They are two systems, not one system with two kinds of user, because the project exists to show one body reading another body's record across the exchange instead of asking the institution for it again.
2. **The shared blocks it uses.** PNIA for identity; PHEQA's register of institutions as the shared register; Linkup for every exchange between the two bodies; the Payments block for the fee. Neither application builds its own version of any of them.
3. **Who keeps the register.** PHEQA's application keeps the register of institutions and is the only one that writes it. MoEYS's application reads it and keeps no copy.
4. **How the bodies talk.** Every exchange between PHEQA and MoEYS passes through Linkup, as the GovStack Registration specification expects of all traffic between blocks. Neither application calls the other directly.

## The table of crossings, as PHEQA's application sees it

Every flow that crosses the boundary of PHEQA's application is listed, in both directions.

| # | What crosses | Direction | The body on the other side | Through | When |
|---|---|---|---|---|---|
| X-1 | Who the person signing in is: PHEQA's own identifier for the person, and the name PNIA releases | In | PNIA | PNIA's sign-in | Each time an applicant or an officer signs in |
| X-2 | An institution's entry in the register (its register number, name, kind, date of registration and standing), or the list of all institutions | Out, as an answer to MoEYS's reading | MoEYS | Linkup | Each time MoEYS's application needs an institution |
| X-3 | PHEQA's recommendation on an application, with the inspection's findings | Out | MoEYS | Linkup | When the registration officer sends the recommendation |
| X-4 | The minister's decision on a licence | In | MoEYS | Linkup | When the minister decides |
| X-5 | The minister's approval of an institution's new name | In | MoEYS | Linkup | When the minister approves |
| X-6 | A request to pay the application fee, and the confirmation of payment | Out, then in | The Payments block | The Payments block's own interface | When an applicant pays |

For each crossing the full architecture states three more things this page leaves out: what happens when a value is missing, when it is out of date, and when the other side cannot be reached. For X-2 the answer is simple and matters to a manager: if PHEQA's register cannot be reached, MoEYS's officer waits; she does not use an old copy, because there is none.

## Who must agree to the page

The head of the ICT unit of PHEQA accepts it. Before she does, the body on the other side of each crossing confirms its row: MoEYS for X-2 to X-5, PDGA for the use of Linkup, PNIA for X-1 and the operator of the Payments block for X-6.

**What to look for before you accept an architecture.** Count the crossings, and for each one ask: who is on the other side, and have they seen this row? A crossing nobody on the other side has agreed is a promise made on their behalf.

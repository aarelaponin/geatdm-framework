---
description: "The question bank holds every question an assessment team asks about a country's digital public infrastructure for education."
---

# The question bank

**Part of the assessment toolkit.** This is a blank instrument. It names no country, no institution and no person.

## What the question bank is for

The question bank holds every question an assessment team asks about a country's digital public infrastructure for education. In method step 2, an AI assistant reads the country's public documents against these questions and drafts a first answer to each, which is a claim to be checked and not a finding. In method step 3, the five questionnaires ask the officials who run the systems about the same sub-components, and ask for evidence with every answer; the first answers of step 2 go with them as points to confirm or correct. Because both steps are arranged by the same sub-components, every answer the team collects can be traced to the part of the infrastructure it is about, and every first answer of step 2 to the question that produced it.

The questions are arranged in the five domains of digital public infrastructure that PAERA, the GovStack Public Administration Ecosystem Reference Architecture (version 1.0, 2024), describes in its section 3.3.1: a foundation of governance, policy and law, and four pillars that stand on it, namely Access, Digital Data, Interoperability and Digital Identity. Within each domain the questions are arranged by sub-component. A sub-component is one part of a domain that is scored on its own in method step 5; the scoring criteria for every sub-component are in `scoring-criteria.md`, beside this file. The division of the domains into sub-components is the team's own, not PAERA's.

| Domain | Code | Which of the nine questions of PAERA section 5.3 it answers | Sub-components |
|---|---|---|---|
| Governance and policy, with the legal framework | GOV | Questions 1 to 4: principles and policies, the governance framework, the legal framework, human rights and the development goals in law | G1 to G5 |
| Access | ACC | Question 5: the status of digital access infrastructure | A1 to A5 |
| Digital Data | DAT | Question 6: the status of digital data management infrastructure | D1 to D6 |
| Interoperability | INT | Question 7: the status of interoperability infrastructure; and question 9, the building blocks available, shared with Digital Identity | I1 to I5 |
| Digital Identity | IDN | Question 8: the status of digital identity infrastructure; and question 9, shared with Interoperability | N1 to N5 |

## How to read an entry

Each question has five parts.

- **Code.** The domain code and a number, for example `GOV-Q01`. A code is a fixed name for the question. It is never given to another question and is not renumbered when questions are added, so the numbers within a domain do not follow the order of the list.
- **Informs.** The code of the sub-component the answer is scored under.
- **The question.** Written as it would be put to a public official. The same words are given to the AI assistant that reads the public record.
- **Evidence that answers it.** The documents or records that settle the answer. Evidence marked *(public)* is usually published and can be read at the desk in step 2; the rest is asked of the body that holds it in step 3.
- **What a good answer looks like.** The good practice the answer is compared with, in general terms. It is not a target set for any one country; the scoring criteria place an answer on the five stages.

Two terms are used in the questions. **The exchange** is the national platform through which public bodies' systems request and send data to each other; PAERA calls this kind of platform interoperability infrastructure, and GovStack calls it the Information Mediator. **The payment rail** is the shared payment service through which a government service pays out or receives money, connected to the payment systems already used in the country; the term is kept because it is part of the name of sub-component I5.

The scale for every question is one: the five stages of the UNDP Digital Development Compass, which are Basic, Opportunistic, Systematic, Differentiating and Transformational.

## The form of an entry for the desk assessment

In step 2 the assistant is given the bank as a list of entries in the form below, one entry per question. The settings of a run name the country, the sector and the list of public sources to read; the bank itself stays blank.

```yaml
- id: GOV-Q01                    # the question's code
  domain: GOV                    # GOV, ACC, DAT, INT or IDN
  sub_component: G2              # the code of the sub-component it informs
  paera_5_3_question: 1          # which of the nine questions of PAERA section 5.3
  question: Is there a national digital strategy that names education?
  good_practice: An approved strategy with an education chapter and a named lead body.
  look_for: [national digital strategy, sector plans, cabinet decisions]
  scale: compass-5               # the five Compass stages; see scoring-criteria.md
```

## GOV — Governance and policy, with the legal framework

This domain is the foundation the four pillars stand on. A pillar without a law, a budget and a body that decides about it is not yet infrastructure.

### G1 Leadership and coordination

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| GOV-Q03 | G1 | Which body decides on the digital infrastructure that education shares with other sectors, and who sits on it? | The decree or terms of reference that set the body up *(public)*; its list of members; the minutes of its recent meetings | A standing body with a written mandate, in which the education ministry and the national digital authority decide together, meeting on a set schedule |
| GOV-Q04 | G1 | When a new education system is planned, how does the education ministry agree it with the national digital authority? | A written review procedure; the record of the last systems reviewed | Every new system is reviewed before it is funded, and the review checks whether a shared national component can be used instead of building a new one |
| GOV-Q05 | G1 | Who in the education ministry is responsible for digital transformation, and how many staff work for that person? | The ministry's organisation chart *(public)*; job descriptions; the staff numbers of the ICT unit | A named senior post, with a unit staffed to plan, buy and run systems and not only to support office computers |

### G2 Strategy and policy

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| GOV-Q01 | G2 | Is there a national digital strategy that names education? | The national digital strategy and the decision approving it *(public)* | An approved strategy with an education chapter and a named lead body |
| GOV-Q06 | G2 | Does the education sector have its own plan for digital systems, and is it tied to the national strategy and to the budget? | The sector plan and its approval *(public)*; the medium-term budget lines that pay for its actions | An approved sector plan whose actions are costed, funded and each traced to the national strategy |
| GOV-Q07 | G2 | Is there a rule that new systems use the shared national components, such as identity, data exchange and payments, instead of building their own? | The policy or circular *(public)*; procurement guidance; the record of exceptions granted | A written rule applied in every procurement, with each exception justified in writing |

### G3 Legal framework

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| GOV-Q02 | G3 | Does the law allow a learner register and the sharing of learner data between public bodies? | The education act and its regulations *(public)*; any law on registers | A clause in law that names the register, its keeper and who may read it |
| GOV-Q08 | G3 | Which law governs how public bodies share data with each other, and does each exchange need its own agreement? | The law on electronic government or data exchange *(public)*; the model data-sharing agreements in use | One law sets the rule for exchanging data between public bodies, so that each exchange does not need an agreement negotiated on its own |
| GOV-Q09 | G3 | Are there rules still in force that require a paper document or a personal visit for an education service? | Admission, transfer and examination regulations *(public)*; the lists of documents each service asks for | None, or a list of such rules with a plan and dates to change them |

### G4 Funding and budgeting

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| GOV-Q10 | G4 | Is there a line in the state budget for shared digital infrastructure, and which body holds it? | The state budget and the medium-term expenditure framework *(public)* | A recurrent budget line for the shared components, held by the body that runs them |
| GOV-Q11 | G4 | When a system is built with a partner's or a project's money, who pays for running it after the project ends? | Project agreements; handover plans; budget lines for licences, hosting and staff | The running costs are planned and placed in the state budget before the project closes |
| GOV-Q12 | G4 | How is a digital investment in education judged and approved before money is committed? | Appraisal guidance *(public)*; decisions of the body that approves investments | A written appraisal that counts reuse and the cost over the system's whole life, decided by a named authority |

### G5 Rights and safeguards

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| GOV-Q13 | G5 | Is there a data protection law, a body that enforces it, and rules for children's data? | The law *(public)*; the founding act and annual report of the data protection authority *(public)*; any rules on minors | The law is in force, an independent authority with staff enforces it, and it has rules for children's data held by public bodies |
| GOV-Q14 | G5 | Can a person see the data public bodies hold about them, have it corrected, and complain about how it is used? | The law and its procedures *(public)*; figures on requests and complaints | These rights are in law, the procedure is simple and published, and figures on requests and complaints are published |
| GOV-Q15 | G5 | Before a shared system is put into use, is it reviewed for risks to privacy, to inclusion and to safety? | The review procedure; completed reviews | A review is required for every shared system before use and when it changes, and the reviews are published |

## ACC — Access

This domain asks whether people, schools and offices can reach education services at all: connections, devices, channels, skills, and help for those who need it.

### A1 Connectivity of schools and homes

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| ACC-Q01 | A1 | Is the connectivity of each school known and published? | A school-by-school record of connectivity *(public, where published)*; the school census | A school-by-school record of connectivity, updated at least yearly |
| ACC-Q03 | A1 | What share of schools, and what share of households, has an internet connection, and at what speed? | National statistics and household surveys *(public)*; the telecommunications regulator's data *(public)*; the school census | Known by school and by district, with the speed measured, and most schools connected |
| ACC-Q04 | A1 | Do the records of school connectivity use the same school identifier as the school records? | The connectivity records and the school master list, compared | Yes: one identifier, so that the connection of every school can be shown against its record |

### A2 Devices and channels

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| ACC-Q02 | A2 | Through which channels can parents reach education services? | The published description of each service *(public)*; the service's screens and forms | Online, by mobile phone and in person, with help available in person |
| ACC-Q05 | A2 | What devices do school offices and district offices have for the education systems they must use? | The inventory of devices; the school census | Every school office has a working device with a connection for administrative work |
| ACC-Q06 | A2 | What share of people own a mobile phone, and what share own a smartphone? | The telecommunications regulator's statistics *(public)*; household surveys *(public)* | The figures are known and recent, and services are designed to work on a basic phone as well as on a smartphone |

### A3 Digital skills of staff and parents

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| ACC-Q07 | A3 | Are school and district staff trained to use the education systems they are asked to use? | Training plans; attendance records; help-desk figures | Staff are trained on every system before it starts, with refresher training and a help desk |
| ACC-Q08 | A3 | What is known about the digital skills of parents and learners? | Household surveys and national skills statistics *(public)* | The skills are measured, and the measurements are used in designing services and the help offered with them |

### A4 Assisted and offline service channels

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| ACC-Q09 | A4 | Can a person with no device, or no connection, use an education service with an official's help? | The service descriptions *(public)*; the procedures at school and district offices | An assisted channel at a school or a public office, where an official completes the digital step with the person and the result is the same as online |
| ACC-Q10 | A4 | Do the education systems used in schools keep working when the connection is slow or interrupted? | The systems' design documents; the procedure for sending data once the connection returns | They work without a connection and send the data when it returns, with nothing lost |

### A5 Inclusion and accessibility

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| ACC-Q11 | A5 | Are education services offered in the languages people use, and can persons with disabilities use them? | The service screens *(public)*; the accessibility standard applied; test records | A national accessibility standard is applied to every service, services are in the main languages, and tests are recorded |
| ACC-Q12 | A5 | Are the figures on who uses education services broken down by sex, district, income and disability, so that the people left out can be seen? | Usage statistics | Yes, the figures are broken down, published and reviewed |

## DAT — Digital Data

This domain asks whether the data education services depend on is held digitally, kept under law, of known quality, shared instead of collected again, protected, and used.

### D1 Data governance and policy

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| DAT-Q01 | D1 | Is there a policy that says who owns each education register, who may use its data, and how long records are kept? | The data policy *(public)*; the list of register owners; the schedule for keeping records | A written policy, a named owner for each register, and a schedule for how long records are kept |
| DAT-Q02 | D1 | Which body sets the public sector's data standards, such as code lists, formats and identifiers, and does education follow them? | The national data standards *(public)*; the code lists of the education systems | The standards are published by a named body, and the education registers use them |

### D2 State registers

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| DAT-Q03 | D2 | Is there an authoritative register of learners, and which body keeps it? | Laws and regulations *(public)*; ministry annual reports *(public)*; statistical yearbooks *(public)*; procurement notices *(public)* | One register kept by a named body under law, linked to the national identity |
| DAT-Q05 | D2 | Which other registers does education depend on, such as schools, teachers and examination candidates, and how is each one kept? | The inventory of registers; the description of each system | Each register is held in a system, has a keeper named in law, and has its own identifier |

### D3 Data quality and master data

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| DAT-Q06 | D3 | Is there one identifier for each school, used by every system that holds data about schools? | The school master list; the code lists of each system, compared | One identifier, given by one body and used by every system |
| DAT-Q07 | D3 | Are there written data-quality rules, and a named person responsible for the quality of each register? | The data-quality rules; the appointment of each data steward; quality reports | Rules checked when data is entered, a named steward for each register, and regular reports on quality |
| DAT-Q08 | D3 | Is every change to a record logged, so that it is known who changed what and when? | The systems' change logs; the period the logs are kept for | Every change is logged and the logs are kept |

### D4 Data sharing and reuse

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| DAT-Q09 | D4 | How does an education body obtain data that another public body holds: through a system, by file, or by asking the person to bring a document? | The data flows between bodies; the list of documents each service asks applicants for *(public)* | Through a system; the person is not asked for data the government already holds |
| DAT-Q10 | D4 | Which data does a parent or a learner have to give more than once, to different education bodies? | The forms of each service, compared *(public)* | None: each piece of data is given once and reused |

### D5 Data protection in practice

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| DAT-Q11 | D5 | Has each education body that holds personal data assessed the risks of its main systems to the people whose data they hold? | The completed data protection impact assessments | An assessment for every system that holds personal data, repeated when the system changes |
| DAT-Q12 | D5 | Who can read learners' personal data, and is each reading recorded? | The access rights by role; the access logs | Access is given by role only, every access is logged, and the logs are reviewed |

### D6 Statistics and analysis

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| DAT-Q04 | D6 | At what level does the education information system hold data: school totals or individual learners? | The statistical yearbook *(public)*; the data model of the education information system | Learner-level records, with totals derived from them |
| DAT-Q13 | D6 | Which decisions are taken with the education statistics, and how soon after the school year are they available? | The publication dates of the yearbook *(public)*; planning and budget documents that use the statistics *(public)* | Available within the school year, and used to plan and budget school by school |
| DAT-Q14 | D6 | Are education data published, with personal details removed, for anyone to use? | The open data portal *(public)* | Published regularly, in a form a computer can read, under an open licence |

## INT — Interoperability

This domain asks whether public bodies' systems can exchange data with each other through one shared platform, under common rules, and whether the shared components, the shared payment service among them, can be reached through it.

### I1 The exchange platform

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| INT-Q03 | I1 | Is there a national platform through which public bodies' systems exchange data, and which body operates it? | The legal basis of the platform *(public)*; the operator's mandate *(public)*; its technical documentation | A running platform, operated by a named body under law, with published technical rules |
| INT-Q04 | I1 | Is the exchange safe and dependable enough for services the public relies on: is each message encrypted, signed and logged, and is its availability known? | Security documentation; availability reports; audit reports | Every message is encrypted, signed and logged; availability is measured and published; the platform is audited regularly |

### I2 Membership of the exchange

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| INT-Q01 | I2 | Is there a national data exchange, and is the education ministry a member? | The list of members of the exchange *(public, where published)*; the operator's reports | A running exchange with the education bodies as members |
| INT-Q05 | I2 | What must a body do to become a member of the exchange, and how long does it take? | The joining procedure *(public)*; the list of members with the dates they joined | A published procedure, completed in weeks, with help from the operator |

### I3 Exchange standards

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| INT-Q06 | I3 | Which technical standards must a service offered on the exchange follow? | The national interoperability framework *(public)*; the technical standards *(public)* | Published standards for interfaces, messages and security, applied to every service |
| INT-Q07 | I3 | When education data is exchanged, do the systems use shared code lists and data definitions, so that a field means the same thing in each? | The shared code lists and data models; the interface descriptions of the education systems | Shared definitions are published and used by every service that exchanges education data |

### I4 The catalogue of services

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| INT-Q08 | I4 | Is there a published list of the services offered on the exchange, saying what each provides and how to use it? | The catalogue of services | A catalogue every member can search, with each service's description and terms of use |
| INT-Q09 | I4 | How do the education systems exchange data with each other today: through the exchange, by direct links between systems, or by spreadsheet and file? | The inventory of interfaces between the education systems | Through the exchange, with every exchange listed in the catalogue |

### I5 Shared building blocks, including the payment rail

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| INT-Q02 | I5 | Can an education service request a payment through a shared payment rail? | The description of the shared payment service and its users; the rules of the national payment systems *(public)* | A payment service reachable on the exchange by any member |
| INT-Q10 | I5 | Which shared components, such as registration, messaging, consent and payments, can any service reuse, and which body runs each? | The list of shared components, with their operators and terms of use | Each component is listed with an operator and terms of use, and each is used by more than one service |
| INT-Q11 | I5 | How are scholarships, grants and fees paid today between the education sector and families or schools? | The payment procedures of the education bodies; the records of recent payments | Through the shared payment service, connected to the payment systems already used in the country, with every payment traced to the record it pays |

## IDN — Digital Identity

This domain asks whether people have a national identity, can prove it, and whether education services use it, including for children.

### N1 Identity coverage

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| IDN-Q01 | N1 | What share of the population holds a national identity, and since when? | The identity authority's annual report *(public)*; national statistics *(public)* | Coverage of nearly all adults, with a route for children |
| IDN-Q03 | N1 | Are nearly all births registered, and is the birth record linked to the national identity? | Civil registration statistics *(public)*; the law on civil registration *(public)* | Nearly all births are registered, and each birth record gives the person a unique number that the national identity carries forward |

### N2 Authentication services

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| IDN-Q04 | N2 | Can a person prove who they are online, and by which means, such as a one-time code, a card or a mobile identity? | The identity authority's description of its services *(public)* | Several means, each at a known level of assurance, usable by any service |
| IDN-Q05 | N2 | Does the identity authority offer a service that other bodies' systems can call to check a person's identity? | The description of the service *(public, where published)*; the list of bodies using it | A service on the exchange, with published terms of use and a record of every check |

### N3 Use of identity by services

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| IDN-Q02 | N3 | Do education services validate a person through the national identity service? | The service descriptions *(public)*; the list of bodies using the identity authority's checking service | Every education service that needs identity uses the national service |
| IDN-Q06 | N3 | Do education records carry the national identity number, or an identifier of their own that is linked to it? | The data models of the education registers | Each record is linked to the national identity, and the link is checked by the system, not typed in by hand |

### N4 Identity for children

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| IDN-Q07 | N4 | How does a child who is below the age at which identity is issued get an identifier? | The law on civil registration and identity *(public)*; the procedures | A unique number from birth registration, carried into the national identity when it is issued |
| IDN-Q08 | N4 | How is a parent or guardian linked to a child in the records, so that the parent can act for the child? | The civil registration and identity records; the procedures of the education services | The link is recorded from birth registration, and services check it before a parent acts for a child |

### N5 Legal validity and e-signature

| Code | Informs | The question | Evidence that answers it | What a good answer looks like |
|---|---|---|---|---|
| IDN-Q09 | N5 | Does the law give an electronic signature and an electronic document the same standing as signed paper? | The law on electronic transactions and its regulations *(public)* | The law is in force, and its regulations name the kinds of electronic signature and what each may be used for |
| IDN-Q10 | N5 | Can an education body issue a certificate, a transcript or a decision in electronic form that another body accepts without a paper copy? | Documents issued; the rules of the bodies that receive them | Electronic documents are issued with a signature or seal that any body receiving them can verify |

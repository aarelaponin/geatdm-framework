**Subtopic:** 3.1 — One goal, written as a story a builder can follow

**Public anchor:** GovStack, Registration Building Block specification, sections 6.3.2.1 and 6.3.2.2 (the applicant's screens and fields in a registration service) and section 6.2.3 (the operator's decision to approve, reject or send back), as the published picture of a registration that the story fills in

**Simulated case:** This is a simulated case for Progressa, a fictional country; every institution, name, date and figure in it is invented.

# E3.1 — "Apply for a provisional licence": the main story

**What it shows.** The main story of the goal "apply for a provisional licence" at PHEQA: who the applicant is, what the authority guarantees whatever happens, the main steps from signing in through PNIA to the confirmation that the application was received, and the register entries the goal serves.

**Form of this example.** The parts of a written-out goal are the method's and name no country. The goal is filled for Progressa. Its failures are in E3.2, its screens in E3.3.

## The test the story must pass

The builder must not have to work anything out or ask anybody anything. Every step says who acts and what happens. Every figure, list and rule the story uses is read from a document that owns it.

## The goal at a glance

| Line | Answer |
|---|---|
| The goal | Apply for a provisional licence |
| Who has it | The applicant: a person who intends to operate a private university, university college or technical institute in Progressa |
| Others involved | PNIA, which tells PHEQA who the applicant is; the Payments block, which takes the fee; the registration officer of PHEQA, who will check the application later and is not present |
| What starts it | The applicant decides to apply |
| What must already be true | PHEQA's standards for new institutions are in force; the application fee is set |
| The result the applicant sees | An application for a provisional licence, received by PHEQA on a stated date, which the applicant can find again in the self-service |
| The register entries it serves | R-01 (an application is made through the self-service); R-09 (the application fee); R-10 (the application carries the particulars the regulations list); R-11 (no two registered institutions carry the same name) |

## What PHEQA guarantees

**Whatever happens:** no application is recorded unless the applicant confirmed it and the fee was paid. Nothing the applicant did not confirm is treated as made.

**When it succeeds:** one application is recorded, made by the applicant on the day it confirmed, for an institution recorded under the name proposed, carrying every particular the regulations list for its kind, and naming the version of PHEQA's standards it will be judged against. The applicant is recorded as the person acting for the institution from that day.

## The main story

One path, on which nothing goes wrong.

| Step | Who acts | What happens |
|---|---|---|
| 1 | The applicant | Signs in to PHEQA's self-service through PNIA. |
| 2 | The applicant | Asks to apply for a provisional licence. |
| 3 | The system | Shows PHEQA's standards for new institutions, in the version in force, with that version. |
| 4 | The applicant | States the kind of institution it proposes, from the kinds of institution. |
| 5 | The system | Asks for the particulars the regulations list for that kind, one by one. |
| 6 | The applicant | Gives the proposed name and each particular, and attaches the evidence of funding as a document. |
| 7 | The system | Checks that every particular is given and that no registered institution holds the proposed name. |
| 8 | The applicant | Confirms the application and pays the application fee through the Payments block. |
| 9 | The system | Records the application as received that day and shows the applicant the confirmation, with the date received. |

## What the story fills in

The Registration specification publishes the general picture of a registration service: an applicant's screens and fields, and an operator who later approves, rejects or sends back. This story fills that picture for one service in one country. It says which particulars, from which list, checked against which register, with which fee, and what PHEQA promises whatever happens. The operator's decision is a later goal, *recommend a decision to the minister*; it is not part of this one.

## What the person who rules on the draft checked

An AI assistant drafted the story from the four register entries; the supplier's analyst ruled on each step. The assistant's draft had a tenth step, "The system sends the applicant an e-mail", with no entry behind it. Nobody had asked for it, and PHEQA holds no e-mail address it could trust. The analyst struck it out and recorded a question for the Registrar: *should the applicant be told by e-mail, and from where would PHEQA take the address?*

**What to look for before you accept a story.** Read the main story aloud to the head of the registration desk. Ask at each step: who does this, and where does what they see come from? Then check the last line of the table at a glance: every step should serve an entry, and every entry should be served by a step.

---
description: "The screens are worked out by walking the story, step by step, after it is written, and not by walking the list of records."
---

# E3.3 — The screens of "apply for a provisional licence", every value with its source

**Subtopic:** 3.3 — Screens worked out from the story, every value with its source

**Public anchor:** GovStack, Registration Building Block specification, sections 6.3.2.1 and 6.3.2.2 (the applicant's screens and fields)

**Simulated case:** This is a simulated case for Progressa, a fictional country; every institution, name, date and figure in it is invented.

**What it shows.** The screens of the provisional-licence goal, one for each step that needs one, with the source of every value: the applicant's name from PNIA's sign-in, the kinds of institution from the shared code list, the fee from the setting its owner keeps, the proposed name typed by the applicant and checked against the register.

**Form of this example.** The way a screen is recorded, with the steps it serves and the source of each value, is the method's and names no country. The screens are filled for Progressa from the story of E3.1 and its failures in E3.2.

## How the screens were worked out

The screens are worked out by walking the story, step by step, after it is written, and not by walking the list of records. Each step at which the applicant asks, states, gives or confirms something gets a screen. A step that is wholly the system's gets a screen only if it shows something the applicant must read before going on. Two steps share a screen when nothing the system does stands between them.

## The four sources of a value

Every value on every screen comes from exactly one of four places:

- **Taken from another body.** PNIA, the Payments block or another body supplies it; PHEQA does not type it or change it.
- **Chosen from a list.** The person picks it from a list kept in the shared groundwork.
- **Read from what PHEQA keeps.** The screen shows a record or setting PHEQA already holds.
- **Entered here.** The person types or attaches it, because no other place has it. Each value entered here says why it can be obtained no other way.

## The five screens

**S1 — Ask to apply for a provisional licence.** Serves step 2.

| Value | Source | Where from |
|---|---|---|
| The applicant's name | Taken from another body | PNIA's sign-in, as PNIA released it |
| The applicant's earlier applications, with the date each was received | Read from what PHEQA keeps | The applications this applicant made before |

**S2 — Read PHEQA's standards and state the kind of institution.** Serves steps 3 and 4.

| Value | Source | Where from |
|---|---|---|
| PHEQA's standards for new institutions | Read from what PHEQA keeps | The setting of that name, owned by the Registrar, in the version in force |
| The version of the standards | Read from what PHEQA keeps | The same setting |
| The kind of institution | Chosen from a list | The kinds of institution, PHEQA's shared code list: university, university college, technical institute |

**S3 — Give the particulars.** Serves steps 5 and 6, and the failures "a required document is left out" and "the proposed name is already held".

| Value | Source | Where from |
|---|---|---|
| The proposed name | Entered here | Typed by the applicant: no other body knows it yet. Checked against the register of institutions when the applicant goes on |
| The address of the premises | Entered here | Typed by the applicant: the institution does not yet exist in any register |
| The programmes to be offered, the governing board, the staff, the premises, the library and equipment, the funding | Entered here | Typed by the applicant, one particular each, as the regulations list them for the kind stated on S2 |
| The evidence of funding | Entered here | Attached by the applicant as a document, with a description of its own |

**S4 — Confirm and pay.** Serves step 8, and the failure "the fee is not recorded".

| Value | Source | Where from |
|---|---|---|
| Everything given on S2 and S3 | Read from what the applicant gave in this session | Shown back unchanged, for the applicant to confirm |
| The fee due | Read from what PHEQA keeps | The application fee, the setting owned by PHEQA's finance officer |
| The payment and its confirmation | Taken from another body | The Payments block |

**S5 — See the application received.** Serves step 9.

| Value | Source | Where from |
|---|---|---|
| The application's number | Read from what PHEQA keeps | Given by PHEQA when the application is recorded |
| The date received | Read from what PHEQA keeps | The day the application was recorded |
| The institution's name and kind, and every particular | Read from what PHEQA keeps | The application as recorded |

## What the check against the story found

The screens are checked against four lists the story wrote: its steps, its failures, the records it reads or changes, and the settings and lists it uses. Every step and failure must be served by a screen; every value must come from a record, setting or list the story names. The first draft of S3 had a field "phone number of the applicant", entered here. No list of the story names it, and PNIA does not release it. It was struck out, and a question went to the Registrar: *does PHEQA need to telephone an applicant, and if so, is this the place to ask?*

**What to look for before you accept the screens.** Point at any value on any screen and ask "where does this come from?" There should be one of four answers. A value typed by a person when PNIA, the register or a list already has it is a value that will one day disagree with its source.

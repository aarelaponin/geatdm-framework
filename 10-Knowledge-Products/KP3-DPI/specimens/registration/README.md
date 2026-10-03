# specimen, not yet run

# Specimens for KP3 Module 2 — the Registration block

These files show, for Progressa, what the configurations R1 to R10 of the KP3 build will contain. Each is written in the terms of the GovStack Registration Building Block specification, default edition (site label "23Q4", version history to 1.0), and each is marked at its head "specimen, not yet run". None has been imported into any product, and no check has been run on any of them.

They are not the build. The build of the configurations is a colleague's separate piece of work, which writes into `KP3-build-pack/`; nothing here is written there. When a configuration is built and its check has passed, the file as built replaces the specimen, and the script of the subtopic that teaches it gains one sentence stating the result and its date (KP3 outline and content plan, version 0.3, section 5).

| File | What it shows | Configurations | Subtopics and storyboards |
|---|---|---|---|
| `progressa-learner-registration.service.yaml` | The service description of Progressa's learner registration: the service, its registration and determinants, its data, documents and result, the applicant's screens, the checks, the processing roles, the write to the register, the statistics and what is exported | R1 to R10 | 2.3, 2.4, 2.5, 2.6 |
| `test-applications.yaml` | Four test applications — one refused by a field rule, one by the comparison with PNIA's record made with the person present, one by the completeness check, and one correct — and the pair that tests the transfer determinant | R2, R5, R6 | 2.4, and 2.5 for the correct application |
| `write-mapping.yaml` | The mapping of the form's fields to the learner register's fields, and the test sequence of the write for an approved and a rejected application | R8 | 2.5 |

Three statements hold throughout these files. PLR has been a member of Linkup since KP2, with one enrolment service; KP3 sets up the authoritative learner register behind it, and that register is where the service writes. A person is checked through PNIA's sign-in with OpenID Connect, with the person present, and the service keeps the identifier PNIA gives it, never the national number. The product that carries the service and the format of its description are the build's choice: the specification publishes no operation for creating or changing a service and defines no format, so each file as built names its product, its format and the edition it implements.

Each check of R1 to R10 runs against the installed block through the operations the specification publishes. The storyboards in `KP3-DPI/KP3_Module2_Script_Bundle_v0.2.md`, two folders up from this file, say for each demonstration what is shown, what the viewer sees and what counts as a pass.

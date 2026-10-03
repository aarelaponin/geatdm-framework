# specimen, not yet run

# Specimens for KP3 Module 4 — identity and payments

These files show, for Progressa, what configurations I1 to I7 and P1 to P7 of the KP3 build will contain. Each is written in the terms of the published specification it follows: the GovStack Identity Building Block specification, "Version 2.0; December 2025", and the GovStack Payments Building Block specification, "Version 3.0; December 2025". Every value is a test value invented for Progressa and taken from no country's records.

They are not the build. The build of the configurations is a colleague's separate piece of work, which writes into `KP3-build-pack/`; nothing here is written there. No check has been run on any of these files. When a configuration is built and its check has passed, the file as built replaces the specimen, the demonstration segment is recorded from its storyboard, and the script of the subtopic gains one sentence that states the result and its date.

| File | What it shows | Configurations | Subtopics and storyboards |
|---|---|---|---|
| `identity-connection.specimen.yaml` | The learner registration service as a registered client of the identity block: the client registration, the two published addresses, the flow, the scopes and claims kept to what the form needs, the accepted levels of authentication, the identifier the service keeps, and the enrolled test person | I1, I2, I3, I4, I5, I6, I7 | 4.3, and the storyboard of 4.3 |
| `payment-connection.specimen.yaml` | A scholarship test programme set up to pay through the Payments block: the accepted source, the programme with its account and currency, the onboarding of a test beneficiary, a batch of one payment, the route for status, the payer bank with PayPro behind it, and transport and security | P1, P2, P3, P4, P5, P6, P7 | 4.4 and 4.5, and the storyboard of 4.5 |
| `acceptance-checks.specimen.md` | The fourteen checks of these configurations: what each runs and what counts as a pass, each marked "not run" | I1 to I7, P1 to P7 | 4.3 and 4.5 |

Three statements hold throughout these files. A service checks a person through PNIA's sign-in with OpenID Connect, with the person present, and keeps the identifier PNIA gives to that service, never the national number. PLR has been a member of Linkup since KP2, with one enrolment service; KP3 sets up the authoritative learner register behind it, and that register keeps PNIA's identifier beside a learner number of its own. And the Payments block is what the country configures: PayPro is one of the payment systems in the market and is reached through the block's payer bank.

Two settings are the build's to state, and each file marks where: whether the identity block of the demonstration offers the published interface in PNIA's name or only the read of a person by national number that KP2 left; and the payer bank, the programme's account and Progressa's currency code. The fields whose exact names are defined only in the publishers' contract files are marked `[confirm]`; the build fixes those files at a named commit before any configuration depends on a field name.

# KP3 Module 5 (Topic 5) — Voice-over scripts

Spoken narration only, one section per video (5.1 – 5.6), slide-by-slide, matching `KP3_M5_Deck_v0.1.pptx`. Each video is standalone. Sources slides carry no narration — hold ~5 seconds; links go in the video description.

---

## 5.1 What must be in place before the blocks can call each other (~5 min)

> *Before one block can call another across ministries, each must be a member of the data exchange layer, each service registered with its contract, and access granted to the caller.*

### Slide — Title (5.1)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — A minister is told that the new registration service will reuse identity and the learner register.

A minister is told that the new registration service will reuse identity and the learner register. Your job is to check whether those calls can happen at all. Across ministries, three things must be in place first, and each one has an owner.

### Slide — Three things, in this order

The first is membership. An organisation asks to join the data exchange layer, and the operator checks and accepts it. The second is a registered service. The provider publishes each service with its contract, an OpenAPI description, so that callers know exactly what it offers. The third is a grant. The provider decides who may call. The Information Mediator specification asks for all three. X-Road, the software behind Progressa's exchange, works the same way: a new service starts switched off, and the owner of the data controls who can use it.

### Slide — Is the exchange required at all?

One choice comes before the three. The specification strongly recommends the data exchange layer for any exchange across the internet. It does not require it between blocks that sit together on one platform. So sending every call through the exchange is a choice the specification allows, not a rule it imposes. Progressa makes that choice because its blocks belong to different authorities, and each authority must control who reads its data.

### Slide — Progressa's members today

Progressa already has an exchange, called Linkup. The digital government authority, PDGA, owns and operates it. The examination authority, PNEA, is the caller. The learner registry, PLR, publishes one enrolment service, and only PNEA may call it. The identity authority, PNIA, publishes one service, a read of a person by national number. That is a contract of Progressa's own, and only PNEA may call it. The ministry of education, MoEYS, is not a member.

### Slide — What this course adds

This course adds four things. The registration service gets a member of its own, with its application registered. The learner register gets a write service, registered with its contract, because PLR's one service today is a read. Grants let the registration service call that write service, and PNIA's service too if the build uses it. And the Payments block joins as a member, publishing its own interface. PayPro stays behind the block's payer bank, as one of the payment systems in the market.

### Slide — A call without a grant is refused

The check is easy to read. The list of members shows the registration service. The list of services shows the register's write service and its contract. Then a member without a grant makes the same call, and the exchange refuses it with an access-denied fault. Being on the exchange is not permission.

### Slide — In one sentence

Before any plan says that two blocks will talk, check three things: membership, a registered contract, and a grant from the owner. If one is missing, the call fails.

### Slide — Sources

*(No narration.)*

---

## 5.2 Who puts the steps in order: contracts, and the block that calls them (~5 min)

> *The data exchange layer carries each call and enforces who may make it, but the registration service puts the steps in order, so know which block holds the sequence before you approve an integration plan.*

### Slide — Title (5.2)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — A vendor's integration plan says the exchange will run the registration from start to finish.

A vendor's integration plan says the exchange will run the registration from start to finish. Before you approve it, ask one question: which block holds the order of the steps? The published answer is not the exchange.

### Slide — What the exchange does

The data exchange layer does a narrow job, and does it well. It carries each call from the caller to the provider. It checks that the caller may make the call. It keeps a record of the message. The Information Mediator specification lists what it registers: members, services with their contracts, and the lists of who may call them. Each call goes first to the caller's own security server, the exchange's gateway, which forwards it.

### Slide — What the exchange does not do

The same specification is just as clear about what is not its job. Defining the steps of a transaction is out of its scope. So is mapping the fields of the identity system into a registration record. X-Road says the same about itself: its core does not convert protocols or data, and the organisation's own information system does that. A plan that puts the sequence in the exchange puts it where no published specification does.

### Slide — Who holds the sequence

The registration service holds the sequence. The Registration specification lets the analyst configure actions that fire on an event: a form loading, a button click, an application submitted. An action can pull data from an outside register through the exchange, or send data to one. So the steps of learner registration are written in the registration service's own description, and each step calls another block's published contract.

### Slide — Why go through the exchange at all

Why send the calls through the exchange at all, if it does not run the sequence? Because the alternative is a web of direct links between systems. The GovStack Architecture specification names that pattern fragmented point-to-point integration, and says it makes service delivery across agencies unpredictable and expensive to maintain. The Digital Registries specification asks for mediated integration rather than direct point-to-point coupling. One exchange, many calls, one set of rules.

### Slide — Progressa: the registration as one sequence

Here is Progressa's learner registration as one sequence. The learner signs in with the identity authority, PNIA, and approves the release of a name and a date of birth. The registration service fills the form with them. The learner submits, the checks run, and the registrar approves. Then the registration service calls the write service of the learner registry, PLR, through the exchange, and asks whether the record exists. Drawn on one page, the sequence gives the business side and IT one shared language, so a decision means the same thing in both rooms.

### Slide — In one sentence

The exchange carries the calls and checks who may make them. The registration service holds the order. Ask which block holds it before you approve the plan.

### Slide — Sources

*(No narration.)*

---

## 5.3 The once-only registration, from beginning to end (~5 min)

> *A learner signs in, the form fills with the facts the learner agrees to release, the registrar approves and the record is in the register: one run that proves four blocks work as one foundation.*

### Slide — Title (5.3)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — A parent should not carry the same birth details to a school, a district office and a ministry.

A parent should not carry the same birth details to a school, a district office and a ministry. Once-only means the state asks once and reuses what it already holds. One registration run shows whether your foundation can do it.

### Slide — Once-only, as PAERA states it

PAERA states the principle plainly: citizens and businesses should only have to provide information to the government once. In education, that means a learner's name and date of birth, which the identity authority already holds, are not typed again on every form. Four blocks have to work together for that: identity, registration, the learner register, and the data exchange layer between them.

### Slide — Step 1 — sign in and approve

The run starts with a sign-in. The registration service sends the learner to the identity authority's own sign-in page. The learner, with a parent beside them, signs in, and PNIA asks which facts it may share with this service. The learner approves a name and a date of birth. The service receives only those, with the identifier PNIA gives to this one service. It keeps that identifier, never the national number.

### Slide — Step 2 — the form fills itself

Next, the form fills. The Registration specification lets a screen pull data from an outside source through a configured action. Here, the action places the released name and date of birth into the form. The parent types only what PNIA does not hold: the school, the grade and a contact number. Mapping identity facts into a registration record is the registration service's work; the exchange specification places it outside the exchange.

### Slide — Step 3 — submit, decide, write

The learner submits once. The automated checks run, and the application reaches the registrar, a person who decides. On approval, an automated role in the registration service calls the learner register's write service through the exchange. That call is synchronous, signed, time-stamped and logged. Last, the service asks the register whether the record exists, and the register confirms it. Four blocks, one run.

### Slide — What the published Identity block does not offer

One limit must be said plainly. The Identity specification requires the block to answer a query for a person's facts from server to server, but it publishes no interface for that query. What it publishes is the sign-in with the person present. PNIA's present service on Linkup, a read of a person by national number, is a contract of Progressa's own. If a build shows a pre-fill from server to server, it shows that contract under its own name.

### Slide — The run, step by step

This run is the principal demonstration of the course. The walkthrough follows it step by step: what the viewer sees at each step, and what counts as a pass. Nine steps lead from the sign-in on PNIA's own page to the register's answer that the record exists. A pass counts only from a run that took place, with its date.

### Slide — In one sentence

Sign in, approve, fill, submit, decide, write. One run, nothing typed twice, and four blocks working as one foundation.

### Slide — Sources

*(No narration.)*

---

## 5.4 The acceptance checks: from "set up" to "proven" (~5 min)

> *Every configuration has a check that someone can run and read, and a block is called proven only when its checks have run and passed.*

### Slide — Title (5.4)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — A vendor tells your steering committee the platform is GovStack compliant at Level 2.

A vendor tells your steering committee the platform is GovStack compliant at Level 2. That describes the product, not how your country set it up. What you can ask for is simpler and stronger: a check for every configuration, run and passed, with its date.

### Slide — What GovStack itself offers

GovStack's own testing offers two things. A software provider can assess its product against the functional requirements: a self-assessment. And there are automated tests of the published interfaces, run against candidate software. The two tests lead to a compliance level for the product: Level 1, partial, or Level 2, full. The GovStack Architecture specification also asks each block for a machine-readable definition of every external interface, and for a mock implementation, so that others can test against it.

### Slide — One check for each configuration

This course follows the same idea, configuration by configuration. Every configuration has one check with the same name. The check says what is run, against which published interface, and what counts as a pass. For the exchange, check X1 lists the members and finds the registration service. Check X3 makes a call with a grant, which is answered, and the same call without one, which is refused. Check X4 is the whole run, from the sign-in to the register.

### Slide — Set up is not proven

Keep two words apart. A configuration that exists is set up. A block is proven only when every one of its checks has run and passed, and the result is written down with its date. Until then, the configuration is set up, and no more than that.

### Slide — Progressa's sheet of checks

Here is Progressa's sheet of checks for the exchange. Each row names a configuration, what is run, what counts as a pass, and the result and date of the last run. Before the first run, the last column reads 'not yet run' in every row. That is not a weakness to hide. It is the honest state, and it tells the minister exactly what lies between a design and a proof.

### Slide — Running the checks

When the build is ready, the checks are run one after another, and the sheet fills with results and dates. A failed check stays on the sheet with its output until it passes, and nobody edits a result by hand. That is what a good run shows, and nothing less.

### Slide — In one sentence

Ask for the sheet, not only the product's compliance level. A block is proven when its checks have run and passed, each with a date.

### Slide — Sources

*(No narration.)*

---

## 5.5 Reading the evidence of a call (~5 min)

> *Three records can show that a call took place, the message log, operational monitoring and the traffic view, but each only under settings you must choose before the first call.*

### Slide — Title (5.5)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — An auditor asks you to prove that the registration service wrote a learner's record on a given day.

An auditor asks you to prove that the registration service wrote a learner's record on a given day. Whether you can answer depends on choices made before the first call, not on what you do once the question arrives.

### Slide — Record 1 — the message log

The first record is the message log on each security server. X-Road offers three settings. With full logging, the whole message is kept, and the records can be verified afterwards and used as evidence. With metadata logging, only the details around the message are kept, and the records cannot be used as evidence. Or logging is switched off. The Information Mediator specification requires a signed, time-stamped message log.

### Slide — Record 2 — operational monitoring

The second record is operational monitoring. One record is made for each request: who called, which service, when, how large, and whether it succeeded. It never holds the content of the message. Who may read it matters. The owner of the security server and the central monitoring client can read the records of all clients. A regular member reads only the records about itself, through a monitoring service of its own.

### Slide — Record 3 — the traffic view

The third record is the traffic view on the security server's diagnostics page. It draws a graph of the requests that passed through, and you can filter it by period, by party, by role in the exchange, and by success or failure. It depends on the operational monitoring add-on. If that add-on is not installed, there is no traffic view to read.

### Slide — Progressa: one run, three readers

Take Progressa's registration run. The owner of the learner register sees, in its own message log, the request to write the record and its own answer. The registration service sees the same exchange from its side. PDGA, as operator, reads the traffic view and the records its role allows. No member sees another member's records by default. Each reader proves only what its own records show.

### Slide — Choose before the first call

So three settings are chosen before the first call. Full message logging on every security server that takes part. Access to monitoring for whoever must read the evidence, such as an auditor or the operator. And the monitoring add-on, so that the traffic view exists. Choose them late, and the first months of calls leave no evidence anyone can use.

### Slide — In one sentence

Three records can prove a call: the message log, monitoring and the traffic view. Each works only if you set it up before the first call.

### Slide — Sources

*(No narration.)*

---

## 5.6 What the next services can now use (~5 min)

> *Identity, the learner register and payments are now services with published contracts that the next education services can use without building them again, with consent and notification still to add.*

### Slide — Title (5.6)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Another team in the ministry wants to pay scholarships.

Another team in the ministry wants to pay scholarships. Its first plan is to build its own learner list and its own payment link. Your job is to show the team what it can use instead, and on what terms.

### Slide — On the exchange, with published contracts

Once the checks of the foundation have passed, three things are services with published contracts. Identity, through PNIA's sign-in, for any service registered as its client. The learner register, whose services other services may call once the owner grants access. And payments, through the Payments block's own interface on the exchange. A new service asks for access, the owner of each service decides, and the call goes through the exchange.

### Slide — A scholarship, block by block

Take a scholarship service. It confirms the learner by calling the learner register. It pays through the Payments block, on the path the Payments specification describes for bulk payments from government to people. Or it issues vouchers, which the same specification describes, and which can be limited so that only schools redeem them. It builds no learner list and no payment link of its own.

### Slide — Who sees the saving

Inside one project, building your own list looks quicker than asking another ministry for access. Procurement rules can make each contract cheaper, but only whole-of-government planning makes re-use possible. The first service paid for the foundation, and every service after it uses it. Ask the next team to put both options side by side before it commits.

### Slide — Still to add: consent and notification

Two blocks are cited here but not built. The Consent specification records consent when a person first registers and checks it before data is processed. It also warns that consent may be the wrong legal ground where a public authority processes data, so ask your lawyers first. The Messaging specification names informing people about their registration among its first uses, and the Registration block as one source of such a message.

### Slide — One page for the next team

Give the next team one page. For each service, it lists the contract, the conditions of access and the owner to ask. Generate that page from the exchange's own list of services and their contracts, not from memory or an old slide, and it stays true as the list changes.

### Slide — In one sentence

The foundation is now something to use, not to rebuild. Consent and notification are still to come.

### Slide — Sources

*(No narration.)*

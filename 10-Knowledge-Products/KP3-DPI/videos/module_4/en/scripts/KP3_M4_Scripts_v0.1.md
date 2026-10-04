# KP3 Module 4 (Topic 4) — Voice-over scripts

Spoken narration only, one section per video (4.1 – 4.6), slide-by-slide, matching `KP3_M4_Deck_v0.1.pptx`. Each video is standalone. Sources slides carry no narration — hold ~5 seconds; links go in the video description.

---

## 4.1 Why identity is built once (~5 min)

> *An identity system is costly to build and to run, so a country builds it once and every service uses it, and a ministry that builds its own pays those costs a second time.*

### Slide — Title (4.1)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — A ministry of education that wants to know who its learners are may be tempted to issue an identity of its own.

A ministry of education that wants to know who its learners are may be tempted to issue an identity of its own. Before it does, someone should show the finance ministry what that choice costs, and who has already paid it.

### Slide — Not an ordinary registration system

The GovStack Identity specification makes a sharp point. An identity system is not like the registration screen of an ordinary application. It establishes a person's foundational identity, the base for every digital interaction that person will have. That makes it valuable to the person and attractive to attackers, so it demands the highest level of security. Enrolling people well takes time, documents and trained staff. Running it well is a national task, not a side task of one ministry.

### Slide — What identity systems cost: the World Bank's study

The World Bank studied what foundational identity systems cost. It found six categories: human resources, the identity credential, central IT infrastructure, physical establishments such as offices, enrolment IT infrastructure, and information, education and communication. Together they made up over 90 percent of the cost in the start-up phase. Once a system runs, human resources are often greater than 80 percent of its annual cost. That is people, offices and machines, paid every year.

### Slide — Two findings for a ministry tempted to go alone

Two more findings matter for a ministry tempted to go alone. The credential, the card or document in the person's hand, ranged from as low as 3 percent to over 40 percent of the total cost. And the way the government bought the system changed the overall cost by 25 percent to over 100 percent. A sector scheme would carry those costs again, and would have to get its own purchase right again.

### Slide — Progressa: a learner identity of its own, or PNIA's service

Here is Progressa. Suppose the ministry of education, MoEYS, gave every learner an identity of its own. Category by category it would need staff to enrol and support learners, cards to print and hand out, central systems with their back-up, offices for enrolment, kits for the schools, and campaigns to explain it all. The national identity authority, PNIA, already carries each of these. Using PNIA's service, the ministry carries one thing: the work of connecting its service and testing it. No figures are given here. The point is which costs would appear twice.

### Slide — Reuse what exists

The specifications expect exactly this. A country that already runs an identity system, such as a population register or an identity document system, reuses it, equipped with a services facade, so that every other block can use it. The Registration specification goes the same way: an applicant can register on a service by signing in with the foundational identity. The country builds identity once, and every service uses it.

### Slide — In one sentence

Identity costs a great deal to build and more to run. A country pays that cost once. A ministry that builds its own pays it again.

### Slide — Sources

*(No narration.)*

---

## 4.2 The published Identity block, and what the identity authority offers today (~5 min)

> *The published Identity block verifies who a person is, releases only what that person approves and issues no learner identity, so check what your identity authority really offers before you plan on it.*

### Slide — Title (4.2)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Before a ministry plans a service on the national identity, someone has to answer a plain question.

Before a ministry plans a service on the national identity, someone has to answer a plain question. What does the identity authority actually offer today, and is it what the published Identity block offers? The two are often not the same.

### Slide — Foundational, not functional

The block's subject is foundational identity: the proof of who a person is, which serves a wide range of public and private services. Functional identity, the proof used for one purpose or one sector, is outside it, and the specification names education among the functional domains. So the block issues no learner identity. A learner number belongs to the education sector and its register. The block's work is to verify the person behind it.

### Slide — What the block offers, and to whom

The specification lists six services the block offers to others: enrolment, identity verification, queries on identity data for authorised partners, credential management, federation with a person's other identities, and notifications of events such as a birth. Four kinds of actor use it: the administrator who runs it, registered partners, the users who manage their own identity, and subscribers to notifications. A service of the ministry of education is a registered partner.

### Slide — The national number stays inside

Two rules shape every connection. When a person is enrolled, the block creates a unique identity number and keeps it secret inside the block. Each relying service receives instead an identifier made for that service and that person. It is the same each time the person signs in to that service, and different from the one any other service receives. The person can be verified everywhere, and no service holds the national number.

### Slide — How the published block verifies

The published interfaces are a minimal set, and verification among them is OpenID Connect, a common standard for signing in. In the published flow the person's browser is taken to the block's own screens. The person signs in there and approves what may be shared, and the block releases only that. Only the calls for the token and for the person's information pass from server to server. The specification names the Information Mediator for building blocks that talk to one another, not for the person's own sign-in.

### Slide — Progressa: what PNIA offers today, beside the published block

Now Progressa. On Linkup, PNIA offers one service today: a read of a person by national number, which only the examination authority may call. It is a contract of Progressa's own. It works server to server, with no person present, and it is keyed on the national number. The published block asks the person to sign in, and gives each service its own identifier. The specification's requirements also ask for a query of a person's attributes, but its published interfaces include none. So PNIA's read is useful, and it is Progressa's own, not the published block.

### Slide — In one sentence

Verify the person, release only what the person approves, issue nothing. Then check what your authority runs today before you plan on it.

### Slide — Sources

*(No narration.)*

---

## 4.3 Generating the identity connection (~5 min)

> *A service connects to the identity block as its registered client, asks only for what it needs, and keeps the identifier the block gives to that service, never the national number.*

### Slide — Title (4.3)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — A registration service that needs to know who the applicant is does not need an identity system of its own.

A registration service that needs to know who the applicant is does not need an identity system of its own. It needs a connection: registered once with the identity block, asking for little, and keeping the right identifier.

### Slide — Register the service as a client

The first step is to register the service as a client of the identity block. The client registration names the service, the addresses to which the block may send the person back after signing in, and the key the service signs its requests with. The block publishes two addresses every client needs: one where it describes its own configuration, and one where it publishes the keys that sign its tokens. The client identifier the block returns is the name the service carries from then on.

### Slide — Choose the flow, and ask for little

The specification gives two flows. With claims, the person signs in, sees what the service asks for, approves it, and the service receives those claims. Without claims, the service asks only for proof of the person, with the scope 'openid', and no consent page is shown. Scopes such as profile, address, email and phone each release a set of claims. Ask only for what a field of your form needs. A registration that needs a name and a date of birth should not ask for an address.

### Slide — How the person signed in, and the tokens

Each sign-in comes back with an ID token, a signed record of who signed in, for which service, and when. It carries an authentication context value that says how the person signed in: with a PIN or a password, with a one-time code, with biometrics, or with a combination of these. The country chooses which methods it offers. The service states which values it accepts, and refuses a token whose value is not on its list. The access token lets the service fetch the claims the person approved.

### Slide — Keep the identifier the block gives you

Now the rule that protects every learner. The token's subject is an identifier the block made for this service and this person. Keep that identifier, never the national number, which the specification says must stay secret inside the block. In Progressa, the learner register this course sets up behind PLR keeps a learner number of its own and stores PNIA's identifier beside it. The Digital Registries specification makes the mark for the owner's identifier optional, so the register's design must state it rather than assume it.

### Slide — The check: one sign-in, verified

The check that proves the connection is a sign-in, not a single call. An enrolled test person, never a real one, signs in on the block's own screen. The service receives a code, exchanges it for a token, and verifies the token's signature against the block's published keys. The check passes when the issuer, the audience, the expiry and the subject are present and valid. A second test service then signs in the same person, and the two identifiers must differ.

### Slide — In one sentence

Register once, ask for little, and keep the identifier the block gives you. The national number never leaves the block.

### Slide — Sources

*(No narration.)*

---

## 4.4 The Payments block and the payment systems behind it (~5 min)

> *The Payments block is not a new payment system: it connects government programmes to the payment systems your country already has, so every programme pays through one shared connection.*

### Slide — Title (4.4)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — A ministry that pays scholarships or school grants may be offered a payment system of its own.

A ministry that pays scholarships or school grants may be offered a payment system of its own. The published Payments block offers something else: one connection from government to the payment systems the country already runs.

### Slide — Not a new payment scheme

The GovStack Payments specification is clear about its own limits. The block provides the connections to existing systems in the market, and it does not set out to build a new payment scheme. It sits between the government's account systems, at the ministry of finance or the central bank, and the public or private switching the market already offers. Payment systems in the market, run by a public body, a quasi-public body or a commercial firm, are required for the block to work at all.

### Slide — What is inside the block

Inside the block are the parts a government needs to pay many people safely. An account mapper finds where each beneficiary is paid. Payment requests start there. A payment gateway lets banks and other financial service providers work together. There are vouchers, reconciliation, logs and an audit trail, all behind one gateway that receives the calls of other blocks. The block lets government programmes channel payments through one shared infrastructure to accounts at many providers.

### Slide — What stays outside the block

Just as important is what stays outside. Settlement between the financial institutions is handled outside the block. So are the identification and registration of people, and the checks that banks must make on their customers, such as the rules on knowing the customer and on money laundering. Those stay with the financial institutions and the systems the law gives them to. A vendor who says the block will do them is offering something the specification does not describe.

### Slide — Progressa: the path of a payment

In Progressa the path runs like this. The programme's account sits with the government. The Payments block receives the batch from the calling service, finds each beneficiary's account through its account mapper, and hands the batch to the payer bank, the bank that holds the programme's account. The payer bank executes the payment through the payment systems in the market. PayPro, Progressa's payment provider, is one of those systems, and it stands behind the payer bank.

### Slide — A public payment system, built to be shared

Brazil shows how much a shared payment system can carry. The Bank for International Settlements reports that its instant payment system, Pix, rested on two things: large banks were required to take part, and the central bank both operates the system and sets its rules. Fifteen months after launch, 67 percent of adults had used it. A government programme gains from such a system by connecting to it, not by building another.

### Slide — In one sentence

The block is a connection, not a new payment system. Every programme pays through it, to the systems the country already runs.

### Slide — Sources

*(No narration.)*

---

## 4.5 Generating the payment connection (~5 min)

> *To pay through the block you configure the sender, the programme, the beneficiary, the payment and the route for its status, and the proof is one test payment whose status comes back.*

### Slide — Title (4.5)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Once the Payments block is installed, a service still cannot pay anyone.

Once the Payments block is installed, a service still cannot pay anyone. Five things have to be set up first, and the proof that they work is one small test payment whose status comes back.

### Slide — The sender and the programme

First, the sender. The block accepts payment requests only from a calling block it has been configured to accept as a source. Second, the programme. Each programme has its payment account and its currency. The specification processes each currency on its own, without conversion, and names currencies by their ISO 4217 codes. So a programme that pays in one currency must pay into accounts held in that same currency.

### Slide — The beneficiary

Third, the beneficiary. Before anyone is paid, the service registers each beneficiary in the block's account mapper: a functional identifier, the way of payment, such as a bank account or mobile money, and the financial address where the money goes. The mapper answers on a callback address the service gives it. The service's own register keeps no payment details. In Progressa the functional identifier is the learner's number in the learner register, never the national number.

### Slide — The payment

Fourth, the payment. The service hands the block a batch, which may hold one payment or many. The specification sets the least a payment request must contain: the payer's identifier, the payee's identifier, the amount, the currency, the policy, and the sender's own identifier for the transaction. The block gives each payment in the batch an instruction identifier of its own, so that every payment can be followed.

### Slide — The route for status, and the security around it

Fifth, the route for status. The service gives the block an address to which status is sent, and it can also ask for the status of one payment. A status is success, failed, or in progress. Around all five sits transport and security. The block's interface is published through the Information Mediator, every call travels over a secure connection with an authorisation token, and the messages about a payment are authenticated.

### Slide — The check: one test payment, and its status

The check that proves the connection uses one test beneficiary, one test amount, and a test environment. The beneficiary is registered, and the callback confirms it. A batch of one payment is submitted. The service then asks for the status of that payment. The check passes when the answer is a status, success, failed or in progress, rather than an error, and when the same status arrives at the address configured for it.

### Slide — In one sentence

Sender, programme, beneficiary, payment, and the route for status. Then one test payment, and its status comes back.

### Slide — Sources

*(No narration.)*

---

## 4.6 Reuse is the return on planning (~5 min)

> *Learner registration reuses the identity block and the scholarship payment reuses the Payments block, a saving visible only to someone who plans for the whole government, because inside one project building your own looks quicker.*

### Slide — Title (4.6)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Inside a single project, building your own identity check or your own payment link often looks quicker than waiting for a shared one.

Inside a single project, building your own identity check or your own payment link often looks quicker than waiting for a shared one. Seen from the whole government, it is the more expensive choice.

### Slide — Two services, two shared blocks

Take two services in Progressa. Learner registration needs to know who the applicant is, so it reuses the identity block: one sign-in, one identifier for the service, and no identity system of its own. The scholarship payment needs to pay learners, so it reuses the Payments block: one account mapper, and one route through the payer bank to the payment systems the country already runs. Neither service builds what the country already has.

### Slide — What each would have built alone

Alone, the registration service would need its own enrolment, credentials, security and support staff, which are the costs of an identity system. Alone, the scholarship service would need its own links to each bank and mobile money provider, and every learner's account details in its own register. With the shared blocks, one verification service is used by many, and the account mapper keeps payment details out of each programme's register. The identity service can serve other blocks, public services and private services alike.

### Slide — Education is already in the specifications

Education is not a stretch for these blocks. The Payments specification itself names the payment of school fees, a group of vouchers that can be redeemed only at schools, and conditional transfers for school fee payment. The Registration specification asks that several registrations can be combined in one service, so that an applicant fills in one form instead of several. Each of these can run on the same two blocks.

### Slide — Why only planning sees the saving

So why does the saving so often go unclaimed? Each project is funded to deliver its own service on its own date, and inside the project building its own looks quicker. The first ministry pays for a shared block, and the second, third and fourth reuse it. That sum exists only at the level of the whole government. PAERA asks planners to identify shared services, workflows and data that meet the needs of several agencies, and its principles of whole-of-government and once-only point the same way. A table of which services reuse which block gives the business side and IT one shared language for that decision.

### Slide — In one sentence

Two services reuse two blocks. The saving is real, but only someone who plans for the whole government can see it.

### Slide — Sources

*(No narration.)*

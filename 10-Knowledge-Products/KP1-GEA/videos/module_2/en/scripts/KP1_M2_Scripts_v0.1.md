# KP1 Module 2 (Topic 2) — Voice-over scripts

Spoken narration only, one section per video (2.1 – 2.7), slide-by-slide, matching `KP1_M2_Deck_v0.1.pptx`. Each video is standalone. Sources slides carry no narration — hold ~5 seconds; links go in the video description.

---

## 2.1 Read any government in four layers (~5 min)

> *Every government, in any sector, can be read in four layers — Business, Data, Application, Technology. Learn the question each layer answers, the deliverable it produces, and the mistake first-time architects make, and you can decompose any ministry put in front of you.*

### Slide — Title (2.1)

An Enterprise Architecture describes a government in four layers. Business, Data, Application, Technology. As the architect, you do not just name them — you work inside them every day. So for each layer you need three things: the question it answers, the deliverable you produce, and the mistake that catches first-time architects.

### Slide — The Business layer describes what a body does — not how it is arranged

Start with the Business layer. The question it answers: what does this body do, for whom, and how well? Not how it is organised inside — what it actually does. The deliverable is a capability map and a service catalogue. A capability is something the body can do — register a learner, run an examination, certify a teacher. A service is how a citizen or another body receives that capability. The mistake first-time architects make is to copy the organisation chart and call it the Business layer. The org chart tells you who reports to whom. It does not tell you what the body does. Two bodies with the same chart can do completely different work. Describe the capabilities, not the boxes.

### Slide — The Data layer outlasts every application above it

Second, the Data layer. The question: what information does the body hold, who owns each kind, and where does the authoritative copy live? The deliverable is a data-domain catalogue. A data domain is a kind of information the government agrees on — a person, a learner, a school, a payment. For each domain you name the one body that owns it and holds the authoritative copy. Data is the longest-lived layer in any government. Applications come and go. Technology cycles every decade. The data outlasts them all. The mistake first-time architects make is to list the databases they can see, one per system. But five systems may each hold their own version of the same learner. The Data layer is not a list of databases. It is the agreed set of domains, each with one owner, sitting above all the databases.

### Slide — An application portfolio tells you why a system exists; an inventory does not

Third, the Application layer. The question: what software supports the work, and which capability does each application serve? The deliverable is an application portfolio — every system, mapped to the capability it supports and the data domain it touches. The mistake here is producing a software inventory that lists names and versions but never connects them to what the body does. An inventory tells you that a system exists. A portfolio tells you why it exists, what would break if it failed, and whether two systems are quietly doing the same job. The link up to the Business layer and across to the Data layer is the whole value. Without it, you have an IT asset list, not an architecture.

### Slide — On the Technology layer, the mistake runs the other way — too deep, too early

Fourth, the Technology layer. The question: what does all of this run on? Networks, hosting, the identity platform, the security controls, the data-exchange backbone. The deliverable is a short list of technology standards and a simple infrastructure picture — not a server-by-server audit. The mistake here is the opposite of the others. First-time architects go too deep, too early. They document every server and switch before they understand a single capability. At the architecture level, the Technology layer answers a few questions: what are we standardising on, where are the single points of failure, and what must be running for anything else to work. The detailed audit belongs to the operations team, not the architect.

### Slide — The layers connect downward — a layer that floats free is your first gap

The four layers are not four separate documents. They connect. Every service traces to a capability in the Business layer. Every capability is served by one or more applications. Every application uses one or more data domains. Every data domain and application runs on the technology layer. When you can trace a citizen-facing service all the way down to the infrastructure it depends on, you are reading the government as a system — which is the whole job. When a layer floats free, with no connection up or down, that is the first gap you have found.

### Slide — Sources

*(No narration.)*

---

## 2.2 The shared vocabulary that makes re-use possible (~5 min)

> *The metamodel is the small set of entities — Capability, Service, Application, Data Domain, Technology Component — and the relationships between them that PAERA already defines. Adopt it, and two ministries' architectures can be compared, connected and re-used.*

### Slide — Title (2.2)

Here is a problem you will hit in your first month as an architect. Two ministries each hand you an architecture. One calls a thing a 'service'. The other calls the same thing a 'function'. One ministry's 'application' is another's 'system' is a third's 'platform'. You cannot compare them. You cannot connect them. You cannot even tell whether they are doing the same work twice. The pictures exist, but they do not fit together.

### Slide — A metamodel is a small shared dictionary

The fix is a metamodel. A metamodel is a small, shared dictionary. It names the kinds of boxes everyone is allowed to draw, and it defines each one in plain words. PAERA defines them for you. A Capability — something a public body can do. A Service — how that capability reaches a citizen or another body. An Application — the software that supports a capability. A Data Domain — a kind of information, with one owner. A Technology Component — the infrastructure underneath. And the Organisation that owns each of these. Five or six entity types. That is most of the metamodel.

### Slide — The relationships matter as much as the entities

The entities are half of it. The relationships are the other half. A Capability is delivered by a Service. A Capability is supported by an Application. An Application uses a Data Domain. Everything runs on a Technology Component. An Organisation owns each of these. These relationships are fixed. You do not invent them per ministry. Once every team uses the same entities and the same relationships, every ministry's picture can be laid over every other ministry's picture — and they line up.

### Slide — Re-use is not a matter of good intentions

This is the part that matters most. Everyone says they want re-use — one identity system, used by many ministries, instead of five. But re-use is not a matter of good intentions. Before the agriculture ministry can consume the identity authority's building block, both must describe that building block the same way — same entity type, same relationships, same data domain. If each ministry models in its own private language, re-use is impossible even when everyone wants it. The metamodel is the precondition for re-use. It is the quiet, unglamorous thing that makes the whole-of-government saving — first ministry builds it, the rest consume it — actually achievable, instead of just hoped for.

### Slide — The same few entities let business and IT understand each other

The metamodel does a second job. The work of redesigning how a ministry serves citizens needs the business side — the minister, the director-general, the head of policy — and the IT side — you and your engineers — to decide together. They do not share a language. The metamodel gives them one. When the head of policy says 'we want to register every learner once', and you answer 'that is one Capability, one Service, and one Data Domain owned by the learner registry', you have translated a policy goal into an architecture — in words both sides can hold. The metamodel is the bridge. The same few entities that let two ministries connect also let business and IT understand each other.

### Slide — You adopt the metamodel — you don't design it

One more thing. You do not design the metamodel. PAERA publishes it in Annex 2 — the entities, the definitions, the relationships, already worked out and debated across many countries. Your job is to adopt it and use it from day one. If your country genuinely needs an entity PAERA does not have, you extend the metamodel deliberately, and you write the extension down so every team shares it. What you never do is let each team invent its own. The value of a shared dictionary disappears the moment two teams keep private ones.

### Slide — In one sentence

So the metamodel is not paperwork. It is the small shared dictionary that lets two ministries' architectures fit together, and lets business and IT understand each other. It is what turns re-use from a wish into a plan. Learn PAERA's entities and relationships, use them on every model you draw, and your architecture will connect to everyone else's instead of standing alone.

### Slide — Sources

*(No narration.)*

---

## 2.3 Adopt your principles, don't draft them (~4 min)

> *PAERA publishes ten architectural principles, already debated across many countries. Your job is to adopt them, tailor the wording to your context, and use them to settle design arguments — not to spend your first year drafting principles from scratch.*

### Slide — Title (2.3)

Every architecture team faces the same temptation early on. Someone says: let us write our country's architectural principles. A workshop is booked. Three months later there are forty draft principles, half of them contradicting each other, and no agreement. Meanwhile, no ministry has been modelled. There is a faster way. The principles already exist.

### Slide — A principle is a short rule that settles a design argument before it starts

First, be clear what a principle is for. An architectural principle is a short rule that settles a design argument before it starts. 'Reuse before you buy; buy before you build.' 'Data has one owner.' 'The citizen is asked for information only once.' A good principle is a decision you make once, so your team does not re-argue it on every project. Principles are working tools, not wall decorations. If a principle never changes a decision, it is not a principle — it is a slogan.

### Slide — PAERA gives you ten — already debated across many countries

PAERA publishes ten architectural principles in section 5.2. They cover the ground every public-sector architecture needs. Rule of law, so every system has a legal basis. Intrinsic security and privacy, built in, not added later. Openness and transparency. Interoperability by default. Once-only — the state asks a citizen for the same information only once. User-centred and inclusive design. Reuse and sharing before building new. Data as a managed asset, with one source of truth. Technology neutrality, to avoid lock-in. And sustainability, so what you build can be maintained. Ten principles, already debated across many countries, ready to adopt.

### Slide — Adopting them is three steps, not a three-month workshop

Adopting them is three steps, not a three-month workshop. Step one: take the ten as your baseline. Step two: tailor the wording to your country — point each principle at your own laws, your data-protection act, your procurement rules, so it has teeth in your context. Step three: add at most a few principles your country genuinely needs that PAERA does not cover, and add them deliberately, with a reason written down. That is the whole job. You inherit the thinking; you localise the wording. You do not start from a blank page.

### Slide — Make a principle bite — statement, reason, implication

One discipline makes principles useful instead of decorative. For each one, write three things: the statement, the reason, and the implication — what the principle forces you to do, or to refuse. Take 'reuse before build'. Statement: we consume an existing building block before we build a new one. Reason: the country pays once instead of many times. Implication: any project proposing to build its own identity or payment function must first show why the shared one cannot be used — and the EA Board can say no. A principle with a written implication can settle an argument. A principle without one cannot.

### Slide — In one sentence

So do not spend your first year writing principles. Adopt PAERA's ten, point each one at your country's laws, give each a written implication so it can settle a real argument, and add your own only where there is a genuine gap. Principles are decisions you make once so your team does not re-argue them on every project. PAERA already made the first ten for you.

### Slide — Sources

*(No narration.)*

---

## 2.4 Classify any public body before you model it (~4 min)

> *PAERA publishes a taxonomy of public bodies — policy unit, regulatory agency, service-delivery authority, plus supporting elements like state registries. Classify a body first, and you already know what capabilities, data and governance to expect from it.*

### Slide — Title (2.4)

Before you model a government body, you should know what kind of body it is. Because the kind tells you, in advance, roughly what to expect — what it does, what data it owns, how it is governed. PAERA publishes a taxonomy that sorts public bodies into a few types. Learn it, and you walk into the first interview already knowing what questions to ask.

### Slide — Three types cover most of government

Three main types cover most of government. A policy unit — usually a ministry's core — sets policy and owns the rules. It does not run services at scale; it decides what the services should be. A regulatory agency licenses, supervises and enforces. It holds registers of the things it regulates and records of its decisions. A service-delivery authority runs services to citizens at scale — it has the queues, the case files, the front-line systems. Tell me which of the three a body is, and I can already guess its main capabilities and its main data domains before I meet anyone.

### Slide — Around those three sit the foundations everyone else stands on

Around those three sit the supporting elements. State registries — the authoritative single source of truth for a kind of thing: the population register, the business register, the land register, the learner registry. A registry's whole job is to be the one place the truth lives. And shared platforms — identity, payments, data exchange — used across many bodies. These are not policy units or regulators or service authorities. They are the foundations the others stand on. The taxonomy names them so you treat them as shared, not as the private property of whichever ministry happens to host them.

### Slide — Each type comes with an expected profile

Why does classifying first save you time? Because each type comes with an expected profile. Name a body a regulatory agency, and you expect a licensing capability, a register of the regulated, an enforcement record, and an appeals process. You walk in looking for those, and you spend the interview confirming or correcting a profile — not building one from nothing. Misclassification is itself a finding. When a body that should be a neutral registry is acting like a policy unit and shaping rules to suit itself, the taxonomy is what lets you see it. Classification is not bureaucracy. It is the architect's fastest way to orient.

### Slide — It is already published — adopt it

Like the metamodel and the principles, the taxonomy is already published — PAERA section 4.6, with the detail in Annex A1.2. You do not invent a classification scheme for your country. You adopt this one, and you extend it only where your country has a body type it genuinely does not cover. A shared taxonomy means that when you say 'service-delivery authority', every other architect in the country pictures the same thing. That shared picture is worth more than a bespoke scheme that is perfectly tuned to your country but understood by no one else.

### Slide — In one sentence

So before you model, classify. Policy unit, regulatory agency, service-delivery authority, plus registries and shared platforms. Each type carries an expected profile of capabilities, data and governance. Classify first, and the modelling work starts from a head start instead of a blank page — using a taxonomy every other architect in your country already shares.

### Slide — Sources

*(No narration.)*

---

## 2.5 BDAT on a real ministry — the Progressa walkthrough (~5 min)

> *Watch the four layers and the shared entities applied to one real education system — Progressa's ministry, learner registry, examination authority and identity authority — and the abstract method becomes a concrete picture you can reproduce on your own sector.*

### Slide — Title (2.5)

Let us put the four layers on a real sector. Progressa is a demonstration country with an education system like many across the continent. It has a Ministry of Education, Youth and Sport. A national examination authority. A learner registry. A national identity authority. And a digital government authority that runs shared platforms. We will read this system in four layers, using the shared entities, exactly as you would on your own sector.

### Slide — Classify the bodies first — that is where the head start comes from

Start by classifying, because classification gives us the head start. The Ministry of Education is a policy unit — it sets education policy and owns the rules. The National Examination Authority runs examinations at scale and certifies results — a service-delivery authority with a regulatory edge. The Learner Registry is a state registry — the authoritative single source for who is a learner. The National Identity Authority is a registry and a shared platform — it owns the person identity every sector reuses. The Digital Government Authority runs shared platforms: data exchange and payments. Five bodies, classified in a minute, and we already expect what each one does.

### Slide — Business layer — capabilities belong to bodies, services sit on top

Now the Business layer — capabilities and services. Register a learner: owned by the Learner Registry. Run an examination and certify a result: the Examination Authority. Prove who a learner is: the Identity Authority. Set policy and fund schools: the Ministry. Notice that we describe what each body does — its capabilities — not how it is organised inside. The citizen-facing services sit on top: enrol a child, sit an examination, receive a certificate, transfer between schools. Each service traces down to a capability owned by exactly one body. When two bodies both claim the same capability — say, each keeping its own list of learners — you have found your first gap, just by drawing the Business layer.

### Slide — Data layer — one domain, one owner, one authoritative copy

The Data layer names the domains and their owners. The Person domain — owned by the Identity Authority; everyone else uses the person identity, no one else mints it. The Learner domain — owned by the Learner Registry. Examination results — owned by the Examination Authority. Schools — owned by the Ministry. One domain, one owner, one authoritative copy. The once-only principle now becomes concrete: when the Examination Authority needs to know who a learner is, it consumes the Learner Registry and the Identity Authority — it does not keep its own private copy of the learner that drifts out of date. If you find the Examination Authority maintaining its own learner list, that is a duplicate registry, and you write it down.

### Slide — Application and Technology — every system points up and across

The Application layer maps software to those capabilities. An enrolment system supports the register-a-learner capability and uses the Learner and Person domains. An examination-management system supports run-an-examination. An identity-verification service supports prove-identity. Each application points up to a capability and across to the data domains it uses — so you can see, at a glance, which systems would break if the Identity Authority changed, and whether two systems are quietly doing the same job. Underneath, the Technology layer: the shared identity platform, the data-exchange backbone run by the Digital Government Authority, the hosting. A short list of shared standards — not a server audit.

### Slide — Trace one service all the way down

Now trace one service all the way down. Sit an examination and get a certificate. The service is delivered by the Examination Authority's run-an-examination and certify-a-result capabilities. Those are supported by the examination-management application. That application uses three data domains — the learner, the person identity, and the examination result — each owned by a different body and reached over the data-exchange backbone, which runs on the shared technology layer. That single thread, from a citizen service down to the infrastructure, is a complete reading of the system in four layers. Reproduce that on your own sector — classify the bodies, draw the capabilities, name the data owners, map the applications, list the shared technology — and you have an architecture, not an inventory.

### Slide — In one sentence

That is BDAT on a real ministry. The method is the same on health, on agriculture, on social protection — only the bodies and the domains change. Classify, then read the four layers using the shared entities, and any sector in your country becomes a connected picture you can plan against.

### Slide — Sources

*(No narration.)*

---

## 2.6 Run a Phase 2 Assess (~5 min)

> *A good current-state picture is judged by a few quality tests per layer, not by its length. Learn the tests, learn the gaps you will always find, and you can run a Phase 2 Assess that names the right problems in the right order.*

### Slide — Title (2.6)

The Assess phase produces the current-state picture and the gap analysis your country's roadmap is built on. The hard part is not writing a lot. It is writing a description good enough to make decisions from. So you need to know what a good current-state picture looks like — the quality tests, layer by layer — and the gaps you will almost always find. That is what lets you assess, instead of just document.

### Slide — Three tests apply to every layer

Three tests apply to every layer. First, complete enough to decide — not exhaustive. A description that covers the capabilities and systems that matter, with the rest noted, beats a five-hundred-page audit no one reads. Second, owned — every capability, every data domain, every application has a named owner. An element with no owner is a finding, not a detail. Third, traceable — every element connects up and down. A service that traces to no capability, an application that traces to no data, a capability no application supports: each broken link is a gap. If your current-state picture passes these three tests, it is good enough to assess against. If it fails them, more pages will not fix it.

### Slide — Then hold each layer to its own test

Within that, each layer has its own test. The Business layer is good when it describes capabilities, not organisation boxes — when you could swap two ministers and the capability map would not change. The Data layer is good when every domain has exactly one owner and one authoritative copy named. The Application layer is good when every system maps to a capability and a data domain — no orphan systems. The Technology layer is good when it names the standards in use and the single points of failure — not when it lists every server. Hold each layer to its own test, and the quality of the whole picture takes care of itself.

### Slide — Four gaps show up in almost every first assessment — look for them on purpose

Now the gaps. Four of them show up in almost every first assessment, so look for them on purpose. One: duplicate registries — several bodies each keeping their own copy of the same domain, none agreeing. Two: orphan systems — applications that map to no current capability, often left over from a project that ended. Three: point-to-point spaghetti — every system connected to every other by its own custom link, with no shared data exchange. Four: no clear owner — a capability or a domain that everyone uses and no one owns, which is where accountability quietly disappears. You will find these. Naming them is most of the Assess.

### Slide — A list of gaps is not an assessment — the priority order is

A list of gaps is not an assessment. The assessment is the priority order. For each gap, judge two things: how much it hurts — the cost to the country, the burden on the citizen, the risk to the minister's programme — and how hard it is to close. The gaps you put at the top are the ones that hurt the most where movement is actually possible. A maturity scorecard per layer helps — a simple rating of how far each layer is from where it needs to be. The output your EA Board signs off is not 'here is everything wrong'. It is 'here are the right problems, in the right order, with the reasons'.

### Slide — The sign-off has one quality test of its own — honesty

The Assess phase ends with a sign-off: the senior decision-maker confirms the gap analysis reflects ground truth. That sign-off has one quality test of its own — honesty. An assessment that flatters the current state, that softens the duplicate-registry problem because a powerful ministry owns one of the copies, fails — quietly, and expensively, a year later. Your job in Assess is to name the right problems in the right order, including the politically uncomfortable ones, in language the decision-maker can act on. Get that sign-off honestly, and the roadmap that follows stands on solid ground.

### Slide — In one sentence

So a Phase 2 Assess is not about volume. It is a current-state picture that is owned, traceable and complete enough to decide from, plus a gap analysis that scores and orders the problems honestly. Hold each layer to its test, look for the four gaps on purpose, and rank by impact where movement is possible. Do that, and you can run the Assess — which is the work the whole roadmap depends on.

### Slide — Sources

*(No narration.)*

---

## 2.7 The two traps to catch at Assess (~4 min)

> *Two traps recur in every assessment: the bespoke trap, where each project builds its own version of a shared function, and the vendor-driven trap, where a supplier's product quietly becomes the architecture. Spot both early, and you protect the country from paying many times for one thing.*

### Slide — Title (2.7)

Two traps catch governments again and again. As the architect at the Assess phase, you are the one positioned to spot them early — before they are built, while they are still a line in a project plan. Learn to recognise both, and you save your country years and a great deal of money.

### Slide — Trap one — building your own is rational for a project and ruinous for a country

The first is the bespoke trap. A new project needs to identify citizens. Reusing the national identity platform means learning it, negotiating with the body that owns it, and accepting their timelines. Building its own small identity function is faster — for this project. So the project builds its own. This is not laziness. Inside the project, building is the rational choice, every time. But multiply it across ten projects and the country has ten identity functions, ten learner lists, ten payment integrations — and has paid ten times for what it should have built once. The math that makes reuse worth it only exists at the level of the whole government. No single project can see it. You can. At Assess, every time a project proposes to build a function that already exists as a shared building block, you flag it.

### Slide — Procurement rules cannot catch it — that is why this is architecture work

You might think procurement rules already prevent this. They do not. A rule can require a project to use open standards. It cannot make reusing another body's platform cheaper or faster than building fresh — so the project, optimising for its deadline, still builds. The only thing that catches the bespoke trap is the whole-of-government view that an architecture gives you, plus a governance board with the authority to say: not this one, reuse the shared platform. The rule sets the intention. The architecture and the Board enforce it. That is why catching this trap is architecture work, not procurement work.

### Slide — Trap two — a product becomes the architecture one step at a time

The second is the vendor-driven trap. A ministry buys a product to solve one problem. The product works. Slowly, more processes are bent to fit it. Data is stored the way the product wants. Other systems integrate to the product, not to a standard. Five years on, the product is not a system the government owns — it is the architecture, and the only people who understand it work for the vendor. Changing anything means calling them and paying what they ask. The government has lost the ability to leave, and the price reflects it. The trap is not buying from a vendor — sometimes buying is right. The trap is letting the vendor's product, rather than your architecture, decide how your government is shaped.

### Slide — Four questions catch both — asked at Assess, while both are still cheap to change

You catch both with a few questions, asked at Assess. Does a shared building block already exist for what this project wants to build? Is the data stored to an open standard, or to one vendor's format? If this supplier doubled their price, could we replace them within two years — and if not, why not? And for anything new: is the sourcing choice deliberate — build, buy, share another country's, or test in a sandbox first — or is it just the path of least resistance? These questions turn both traps from things you discover too late into things you flag while they are still cheap to change.

### Slide — In one sentence

So watch for the two traps. The bespoke trap — rational for a project, ruinous for a country, caught only by the whole-of-government view and a board that can say no. And the vendor-driven trap — where a product quietly becomes the architecture and the exit door closes. Both are cheap to fix at Assess and expensive to fix later. Spotting them early is one of the most valuable things you do as an architect.

### Slide — Sources

*(No narration.)*

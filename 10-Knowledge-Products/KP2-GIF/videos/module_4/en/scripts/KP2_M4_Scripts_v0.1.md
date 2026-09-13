# KP2 Module 4 (Topic 4) — Voice-over scripts

Spoken narration only, one section per video (4.1 – 4.8), slide-by-slide, matching `KP2_M4_Deck_v0.1.pptx`. Each video is standalone. Sources slides carry no narration — hold ~5 seconds; links go in the video description.

---

## 4.1 Place every component — the four functional layers (~5 min)

> *Four functional layers — Service Access, Event Distribution, Trust and Security, Governance and Administration — give every component of the platform a place.*

### Slide — Title (4.1)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Do not draw a new platform. Adopt a reference architecture.

As an architect, your first move is not to draw a new platform. It is to adopt a reference architecture, so you spend your scarce time on what is specific to your country instead of re-deriving the shape of an interoperability platform that other countries have already settled. The European framework and the X-Road experience give you a reference with four functional layers. Every component you will build or buy fits one of the four.

### Slide — Four functional layers — every component has a home

The four layers, by what they do. Service Access — how a member system reaches the bus and calls a service. Event Distribution — how messages and events actually move across the federation. Trust and Security Infrastructure — the certificates, the identities and the encryption that make a call trustworthy. And Governance and Administration — the registries of who is a member, what services exist, and the monitoring that watches it all run.

### Slide — The layers are a filing system for decisions

The value of the layers is that they are a filing system for decisions. When you ask 'where does the service catalogue live?', the answer is Governance and Administration. 'Where does mutual encryption sit?' — Trust and Security. Every component, every standard, every piece of configuration has a home. And when two architects disagree about where something belongs, the reference architecture settles it rather than the louder voice.

### Slide — A shared reference architecture is re-use, seen from the architect's chair

There is a deeper payoff, and it is the re-use argument seen from the architect's chair. The reference architecture is shared — built once and reused by every country and every sector that adopts it — so your agencies, and the next sector after education, plug into the same four-layer shape instead of each inventing their own. That is whole-of-government planning made concrete at the technical level: you re-use a settled structure rather than paying, again, to discover it.

### Slide — Event distribution — defer it on purpose, never skip it

One of the four deserves a word, because it is the one countries drop by accident. Request and response is a system asking a question and getting an answer. Event distribution is a system telling everyone who cares: a birth was registered, a learner was enrolled — published once by the authoritative source, delivered to every subscriber, replayable if a subscriber was down. That is what keeps every consumer current without anyone re-asking the citizen; it is once-only at scale. A first bus can run request and response only, and this knowledge product's demonstration does. But defer the event layer deliberately, with a place in the plan — do not discover in year three that nobody designed it.

### Slide — Place every component, and the sparse layers show what is missing

The practical exercise is simple. Take every component you plan to build or buy — the security server, the central registry, the monitoring tool, the identity adapter — and place each one in its layer. The layers that come out sparse show you exactly what you have not yet planned for. Used this way, the reference architecture is a checklist as much as a diagram: it tells you not only where things go, but what is still missing.

### Slide — In one sentence

So the architecture work starts not with a blank page but with a borrowed, proven structure. Four functional layers — Service Access, Event Distribution, Trust and Security, Governance and Administration. Place every component. Read off the gaps. You have re-used the world's experience of what an interoperability platform looks like, and kept your effort for what only your country can decide.

### Slide — Sources

*(No narration.)*

---

## 4.2 Secure every call — the three trust zones (~5 min)

> *Public, Member-Internal, Trust-Anchor — knowing which zone a call crosses tells you exactly what security it needs.*

### Slide — Title (4.2)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Security on the bus is not one wall around everything.

Security on an interoperability bus is not one wall around everything. It is zones, and the security a call needs depends on which zone boundaries it crosses. The X-Road trust model uses three zones. Once you know them, you can look at any exchange and state, precisely, what protects it — which is exactly the conversation a security reviewer or a data-protection officer will want to have with you.

### Slide — Three trust zones — and every message crosses them

The three zones. Public — the open internet, where nothing is trusted by default. Member-Internal — inside an agency's own network, where that agency trusts its own systems. And the Trust-Anchor — the certification authority that everyone in the federation trusts to vouch for who is who. A message from one agency to another starts in one member's internal zone, crosses the public zone, and arrives in another member's internal zone — with the Trust-Anchor underwriting the identities at both ends.

### Slide — The security falls out of the zones

Now the security falls out of the zones. When a message crosses the public zone between two security servers, it is protected by mutual TLS — meaning both sides present a certificate and prove who they are, not just one side as on an ordinary website. The message itself is signed and logged using the X-Road message protocol, so it cannot be forged, and neither side can later deny sending or receiving it. And the Trust-Anchor — the certification authority — issues those certificates and can revoke a compromised one, which is precisely how a misbehaving member gets cut off from the bus. And one more thing the security server does that is easy to overlook: every call is logged with its correlation identifier, sender, recipient, service and signature, and the log itself is timestamped and signed at intervals so it cannot be quietly altered. That tamper-evident log is not an operations nicety. It is the evidence base of the legal layer — the record a court, an auditor or a data-protection authority reads when an exchange is challenged. The decree can make an electronic exchange legally binding only because this log exists.

### Slide — The security server carries the trust burden at each member's edge

One device makes this practical: the security server, which sits at each member's edge and carries the trust burden. It is the member's gateway into the federation — it holds the certificates, does the mutual TLS, signs and logs the messages. The member's own systems stay safely in their internal zone and never face the public zone directly. That separation is exactly what lets a cautious agency join the bus without exposing its internal systems to the open internet — which is often the deciding factor in whether an agency will join at all.

### Slide — Trace the zones a call crosses, and its security is specified

The skill to take away is tracing any planned exchange across the zones and reading off its requirements. A call from the examination authority to the identity authority crosses from one internal zone, through the public zone, to another internal zone — so it needs mutual TLS between the two security servers, a signed and logged message, and valid certificates from the Trust-Anchor at both ends. Say exactly that, and you have specified the security of the exchange in terms any reviewer will accept.

### Slide — In one sentence

So security on the bus is zoned, not uniform. Three zones — public, member-internal, trust-anchor. The security server carries the trust burden at each member's edge. And the discipline is to trace each exchange across the zones, because that is what turns 'is it secure?' from a worried question into a specified answer.

### Slide — Sources

*(No narration.)*

---

## 4.3 Adopt the standards portfolio (~5 min)

> *Adopt the published standards — REST/OpenAPI, OAuth/OIDC, mTLS, X-Road — instead of writing your own; the portfolio is the menu every member shares.*

### Slide — Title (4.3)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Let each agency pick its own standards, and interoperability breaks.

The fastest way to break interoperability is to let each agency choose its own technical standards. The framework's answer is a standards portfolio — a single, published menu of the standards every member uses. As an architect, your job here is not to invent these. It is to select from the published menu, record your choices and their versions, and hold every member to them.

### Slide — Four needs, four published technical standards

The technical standards, in plain terms. For how a service describes and offers itself — REST with OpenAPI 3.x, the common way to define a web service. For proving who a user or system is and what they are allowed to do — OAuth 2.x and OpenID Connect. For securing the connection — mutual TLS, where both ends prove their identity. And for the bus itself — the X-Road message protocol. None of these is invented for your country; each is a widely used published standard, with tools, documentation and people who already know it.

### Slide — The semantic standards are the published vocabularies for meaning

Alongside the technical standards sit the semantic ones — the standards for meaning. ISO/IEC 11179 for describing data elements consistently. JSON-LD for linking data so its meaning travels with it. And W3C Verifiable Credentials for credentials a holder can carry and a verifier can trust without phoning the issuer. These are the published vocabularies you reuse rather than invent.

### Slide — A standard chosen once is reused by every member and every sector

The whole point of a portfolio is re-use across the whole of government. A standard chosen once, for the framework, is reused by every member and by every new sector that joins — so the second agency does not re-decide how a service is described, and the education work you do now is reused when health comes onto the bus. Interoperability is, at bottom, the discipline of everyone choosing the same published standards instead of each building their own — and only whole-of-government planning can impose that discipline. A procurement clause cannot.

### Slide — Your deliverable is the portfolio document

Your actual deliverable is the portfolio itself — a short document that names, for each need, the chosen standard, its version, and any profile, meaning the small local refinements you add on top. Each entry also says when the standard becomes binding, how long legacy systems have to comply — twelve to twenty-four months for a major version is usual — and how a member proves conformance: a self-assessment, a third-party check, or a test suite the operator runs. A standard with no binding date and no test is advice, not a standard. It becomes the thing the APIs Working Group maintains and every member conforms to. Two cautions. Name the version, because a standard adopted at the wrong version is a quiet incompatibility that surfaces only when two members fail to connect. And keep the profile thin — every local refinement you add is something the next sector must also adopt, so refine only where you must.

### Slide — In one sentence

So the standards portfolio is the agreed menu, not a free choice. Select the technical and semantic standards from the published options, write them down with versions and any thin profile, and hold every member to the same list. That shared, reused portfolio is what lets twenty agencies behave as one framework instead of twenty incompatible projects.

### Slide — Sources

*(No narration.)*

---

## 4.4 Generate the semantic map (~5 min)

> *Generate a semantic map so two agencies mean the same 'learner' before they exchange one — the hardest layer, made tractable.*

### Slide — Title (4.4)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — A working wire that carries misread data looks like success.

Of the four interoperability layers, the semantic one — meaning — is the hardest, and the one most projects skip, because it is slow, unglamorous and a little political. It is also where exchanges silently fail: a working wire that carries data the receiver misreads is still a failure, and a worse one, because it looks like success. The good news for the architect is that meaning can be made tractable by building a semantic map — and you can generate a first draft of one with Claude.

### Slide — A semantic map sets out five things for one exchange

A semantic map, for a single exchange, sets out five things. The entities involved — a learner, a school. Their fields — name, date of birth, enrolment status. The code lists — the allowed values for, say, enrolment status, because one agency's 'active' may be another's 'enrolled'. The identifier — which key reliably links the same learner across two agencies. And the mapping itself — each agency's own terms reconciled to one shared definition, so that the examination authority's 'learner' and the registry's 'learner' are confirmed to mean the same person, identified the same way.

### Slide — For education, much of the meaning is already published

You do not invent these definitions from scratch. For education, much of the meaning is already published. OneRoster gives you rostering and enrolment data. CEDS gives you a common vocabulary of education data elements. ISO/IEC 11179 gives you the discipline of describing each data element precisely, and W3C Verifiable Credentials covers the credential case. The semantic map's job is to adopt these published vocabularies and map your agencies' actual fields onto them — not to start from a blank page.

### Slide — Meaning is a business decision, written precisely enough for systems

This is the layer where business and IT must meet, and the semantic map is their shared language. Deciding that 'enrolment' means the same thing to the examination authority and to the learner registry is not a technical choice — it is a decision the business data owners make. But it has to be written down precisely enough for the systems to use. The semantic map is exactly that shared object: it lets the people who own the data and the architects who move it agree, once, what the data means — and then every exchange that touches a learner reuses that one agreement instead of re-arguing it.

### Slide — Generate fast, confirm against the registries carefully

The AI prompt for this video does the drafting. Give Claude the published vocabulary and the two agencies' field lists, and it drafts the mapping — which field maps to which, where the code lists differ and need translating, which identifier to use as the link. That is the fast ninety per cent. The essential ten per cent is yours: every identifier and every code value is a [confirm] until you check it against the real registries. An invented mapping reads convincingly and is wrong — and in the semantic layer, wrong means a learner's records silently merged with someone else's. Generate fast; confirm against the registries carefully.

### Slide — In one sentence

So you make the hardest layer tractable by building it, one exchange at a time, as a semantic map: the entities, fields, code lists, identifier and the mapping onto published vocabularies. It is the shared language between the data owners and the architects, generated with the AI prompt and confirmed against the registries. Get the semantic map right and the exchange carries meaning, not just bytes — which is the whole difference between interoperability that works and interoperability that only appears to.

### Slide — Sources

*(No narration.)*

---

## 4.5 Generate a service contract (~5 min)

> *Turn a service brief into an OpenAPI contract, then an X-Road service description — the configuration that puts a service on the bus.*

### Slide — Title (4.5)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — To put a service on the bus, you need a contract.

To put a service on the bus, you need a contract — a precise description of what the service offers: the operations, the inputs, the outputs, the errors. That contract is an OpenAPI document, and it is the configuration that makes the service callable. As an architect, you generate it from a short service brief and the semantic map, and then turn it into the X-Road service description the bus actually uses to route a call.

### Slide — An OpenAPI contract says exactly how to call a service

An OpenAPI 3.x contract specifies, for one service, the operations it offers — say, 'get a learner's record' — the inputs each operation takes, the outputs it returns, the errors it can raise, and the security it requires. The outputs come straight from the semantic map you built: the contract is where the agreed meaning becomes a concrete, callable interface. A consumer reads the contract and knows exactly how to call the service — the field names, the types, the errors — without a single meeting.

### Slide — Generate the contract, then confirm every field

The AI prompt for this video does the drafting. Give Claude the service brief — what the service does — and the semantic map for the data it returns, and it drafts the OpenAPI document: the paths, the request and response shapes, the error responses, the security scheme. As with the semantic map, every endpoint, field name and type is a [confirm] until you check it against what the provider system actually exposes. An OpenAPI document that looks right but names a field the provider does not return is a contract that fails at the first real call — and looks fine until then.

### Slide — One contract, two forms — generate the first, derive the second

The OpenAPI contract then becomes the X-Road service description — the form the bus uses to register the service and route a call to it. They are the same contract in two forms: OpenAPI for humans and tools to read, the X-Road service description for the bus to route. Generating the first and deriving the second is the core move of this whole knowledge product — using Claude to produce the configuration that puts a real service on the bus.

### Slide — The contract is executable configuration, not a diagram

And this is why the contract is a build-pack artefact, not a diagram. It is executable configuration — it is what the consumer's code calls and what the bus routes. When you have done the semantic map and the service contract for one exchange, you hold, for that exchange, the agreed meaning and the callable interface: the technical-layer configuration the live demonstration runs on. That is real output, not a picture of output.

### Slide — In one sentence

So the service contract is where meaning becomes a callable interface. Generate the OpenAPI document with the AI prompt from the brief and the semantic map, confirm every field against the provider, and derive the X-Road service description. That is the configuration that puts a service on the bus — executable, in the build pack, ready for a real call.

### Slide — Sources

*(No narration.)*

---

## 4.6 Put a real data source on the bus — the Giga case (~5 min)

> *Take Giga's real school data through a bronze/silver/gold pipeline onto the bus — a worked exchange you can copy for your sector.*

### Slide — Title (4.6)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Enough method. Here is a real source to copy.

Everything so far has been the method. Now a real worked case, so you have a template to copy rather than a theory to apply. Giga — the ITU and UNICEF initiative that maps the world's schools and their connectivity — publishes open APIs and real school data. Putting Giga's data onto the bus is a complete, concrete example of every step at once: the standards, the semantics, the contract, and the data pipeline that feeds them.

### Slide — Giga gives you real, published material to practise on

Giga gives you real, published material to work from. Open APIs you can actually call. A school-master schema describing each school, and a qos schema describing its connectivity — the quality of its internet service. GeoJSON, the standard way to express a location, for where each school sits. And ISO 3166-1 alpha-3, the three-letter country codes, for indexing. These are exactly the kind of published standards and schemas the standards portfolio and the semantic map told you to reuse — and here they are, in one real dataset, ready to practise on.

### Slide — Real data reaches the bus in three stages

Real source data is never clean enough to publish straight onto the bus, so it moves through a pipeline in three stages. Bronze — the raw data exactly as received from the source, kept untouched for audit. Silver — the cleaned and validated version, conformed to the schema and the semantic map, with bad or duplicate records flagged. Gold — the published, authoritative version that other services on the bus actually consume. This bronze, silver, gold pattern is how a messy real source becomes a registry other agencies can trust, and every data source you put on the bus follows it.

### Slide — One real source carries every step of this module

Now watch the whole module tie together on one source. The school-master data lands as bronze. It is cleaned and conformed to the schema and the semantic map as silver. It is published as gold. The gold-layer service is described by an OpenAPI contract, registered as an X-Road service description, secured across the three trust zones, and made lawful by the data-protection envelope. Every piece of this module appears, in order, on one real dataset. That is the template — and it is the same template whether the source is schools, health facilities, or a farmer registry.

### Slide — Practise on Giga before you touch a live national registry

The reason to learn it on Giga rather than your own data is that Giga is public, real and already standards-aligned, so you can practise the full pipeline before you touch a live national registry where a mistake has consequences. Once you have run it once on Giga, you apply the identical pattern — bronze, silver, gold, contract, bus — to your country's own school data, and then to the next sector.

### Slide — In one sentence

So the Giga case is the method made concrete. A real source, real schemas, the bronze-silver-gold pipeline, a service contract, and the bus — every step of this module on one dataset you can actually run. Learn it here, where the data is public and forgiving, and you have a template to copy onto your own national registries with confidence.

### Slide — Sources

*(No narration.)*

---

## 4.7 Wire a service onto the bus (~5 min)

> *The OpenAPI contract becomes an X-Road service description and the call resolves — the GovStack Information Mediation pattern.*

### Slide — Title (4.7)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Meaning, contract, data — now make them callable.

You have the meaning — the semantic map. The contract — the OpenAPI document. And the data — the gold dataset. Wiring is the step that makes them callable on the bus: registering the service so that a consumer in another agency can discover it and call it. The pattern has a name in the GovStack world — Information Mediation, the building block whose whole job is to mediate exchanges between systems.

### Slide — "Wired" means three concrete things

'Wired' means three concrete things. The service's description is registered on the provider agency's security server. A consumer in another agency can discover that the service exists. And when the consumer calls it, the request routes through the consumer's security server, across the bus, to the provider's security server, which runs the service and returns the data — all secured across the trust zones you mapped earlier. When that round trip works, the service is genuinely on the bus, not just designed for it.

### Slide — Three configuration artefacts make wiring real

Three configuration artefacts make wiring real, and you have largely produced them already. The subsystem — the member's registered identity on the bus. The service description — derived directly from your OpenAPI contract. And the access-control list — which other members are allowed to call this service, because being on the bus does not mean everyone may call everything. Registering the member as a subsystem and setting its access-control list is member-onboarding work; here you supply the service description that goes with it.

### Slide — Align to the published Information Mediation pattern

The GovStack Information Mediation building block is the published pattern for all of this — the reusable specification for the component that routes and mediates exchanges between agencies. Cross-linking your framework to it keeps you aligned with the wider GovStack ecosystem, which matters practically: a vendor's compliant Information Mediator implementation can drop into the role, rather than your country building the mediation component bespoke. That is the re-use principle reaching all the way down to the routing component itself.

### Slide — The acceptance is one test call that resolves

And the acceptance here is concrete and runnable — a test call. A consumer's security server calls the service and gets the expected data back, once, over the bus. That single resolving call is the proof that the technical layer works for this exchange: meaning agreed, contract honoured, security enforced, data returned. It is exactly the check the live demonstration runs, and it is the moment the technical-layer configuration stops being a set of documents and becomes a working exchange.

### Slide — In one sentence

So wiring is where the pieces become a working service. Register the service description on the security server, set the access-control list for who may call it, align to the GovStack Information Mediation pattern, and prove it with a test call that resolves. That resolving call is the technical layer's acceptance — and the technical configuration the framework actually runs on.

### Slide — Sources

*(No narration.)*

---

## 4.8 Make the exchange lawful — the data-protection envelope (~5 min)

> *Letters of Interest plus a data-protection envelope make a real exchange lawful as well as technically possible.*

### Slide — Title (4.8)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Perfectly wired, perfectly secured — and still not allowed to go live.

A service can be perfectly wired and perfectly secured and still must not be switched on, because technical capability is not lawful authority. The last thing the architect checks for an exchange is its data-protection envelope — the agreements and safeguards that make moving this data lawful, not merely possible. This is where the technical work you have done meets the legal and organisational layers built earlier in this knowledge product.

### Slide — Three things make an exchange lawful, not merely possible

The envelope has three parts. A lawful basis, which comes from the decree you drafted in the legal module — the exchange must be one the decree actually authorises. A bilateral agreement — a Letter of Interest between the two agencies, the practical record that they agree to this specific exchange, on these terms. And the data-protection safeguards — that the exchange uses only the data it needs, for the stated purpose, with consent where required, and a clear retention rule. Technical capability plus these three is what makes an exchange lawful.

### Slide — Data protection by design lives in the configuration

The architect's specific job is data protection by design — building the safeguards into the configuration rather than bolting them on after. Minimisation lives in the OpenAPI contract: the service returns only the fields the purpose needs, not the whole record. The purpose and the access-control list match: only the agencies with a lawful purpose can call the service. And retention and logging are configured, not merely promised in a policy. Built this way, the safeguards are part of the configuration the demonstration runs, not a document filed somewhere separate from the system.

### Slide — An exchange is ready only when all three layers line up

This is where the three layers meet on a single exchange. The decree, the legal layer, authorises it. The member agreement and the access-control list, the organisational layer, record who may do it. The contract, the security and the minimisation, the technical layer, carry it out within the envelope. An exchange is ready only when all three line up — and that is the architect's final check before a service goes live. It is also why the data-protection officer signs off, not the architect alone: the envelope is a shared responsibility, by design. This is also where the framework's most important quiet rule lives: joining the bus never, by itself, grants access to anything. Membership buys the secure channel and the trust. The right to read a specific dataset stays with the provider, who grants it per service — the Letter of Interest is that grant, and the access-control list is its technical shadow. An agency with valid certificates and a working connection still has access to nothing until a data owner says so.

### Slide — In one sentence

So the data-protection envelope is the final layer on a real exchange. A lawful basis from the decree, a Letter of Interest between the agencies, and data protection built into the configuration by design. With the technical work inside that envelope, an exchange is not just possible — it is lawful, and ready to go live. That completes the architecture module: meaning, contract, security, wiring, and the envelope that makes it all lawful.

### Slide — Sources

*(No narration.)*

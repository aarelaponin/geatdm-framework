# KP1 Module 1 (Topic 1) — Voice-over scripts

Spoken narration only, one section per video (1.1 – 1.7), slide-by-slide, matching `KP1_M1_Deck_v0.2.pptx`. Each video is standalone. Sources slides carry no narration — hold ~5 seconds; links go in the video description.

---

## 1.1 Why your country needs a national EA (~4 min)

> *Without a shared plan for your government’s digital systems, every new programme rebuilds what others have already built. The country pays. The citizen pays. Your minister cannot deliver what they promised.*

### Slide — Title (1.1)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — One citizen. Five counters. The same form, five times.

You have probably seen this pattern. One programme builds a system to register citizens. Another builds another, for a different service. A third builds a third. Each takes years, funded separately. And your citizen still fills the same form five times, at five different counters.

You cannot fix this inside any one programme. Each programme is doing exactly what it was funded to do.

### Slide — Four signs your government has no shared plan

There are four signs that this pattern is happening in your government.

Sign one. Your ministry has more than one register of the same people. The school list has one. The national ID register has another. The social register has a third. Each has its own list. None of them agree.

Sign two. Every time two systems need to share data, you build a new connection from zero. Last year your team connected the tax office to the business register. This year you are doing the same work for the health ministry. The connection is built again, from scratch.

Sign three. A vendor built one of your systems ten years ago. To change anything in it, you must call that vendor and pay what they ask. Nobody else knows how it works. The vendor knows this, and prices accordingly.

Sign four. Each ministry has its own digital systems, and they do not connect across ministries. The citizen who gave her ID number to the health ministry must give it again, on paper, when she enrols her child in school. The pledge to ask each citizen for information only once exists on paper. In practice, it is impossible.

### Slide — The country pays in four directions at once

The cost of this pattern runs in four directions at once. You pay more, because you build the same things many times. The country moves more slowly, because every new programme waits for cross-system work that nobody planned for. Your citizens carry the burden, because they fill the same form in five places. And your minister cannot deliver a flagship cross-ministry programme, because the systems will not talk to each other.

### Slide — One root cause: there is no shared plan

All four signs come from one root cause. There is no shared plan. No one has written down what your government's digital systems are, who owns them, and how they should fit together. That shared plan is what a national Enterprise Architecture provides. The rest of this knowledge product shows you how to commission one, what it will deliver, and what you will need from your minister to make it work.

### Slide — Sources

*(No narration.)*

---

## 1.2 What an EA actually is (~3 min)

> *An EA is the picture everyone agrees describes your government — minister, ministry CIO, donor, vendor. With it, you can lead the conversation. Without it, others lead it for you.*

### Slide — Title (1.2)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — An Enterprise Architecture is a set of documents and diagrams.

An Enterprise Architecture is a set of documents and diagrams. Together, they describe how your government works. What services it delivers, and to whom. What data it holds, and who owns it. What software supports those services. What infrastructure runs underneath.

### Slide — An EA is the agreed picture — not software you buy

An EA is not software. It is not a vendor product. It is not a tool you buy. It is the agreed picture.

Why does it matter that everyone has the same picture? Because every important conversation in your ministry breaks down on this point.

### Slide — Minister, donor, vendor — all use the same picture

Your minister uses the picture to brief cabinet. They cannot describe what the country's digital spend is buying if there is no agreed picture of what your government's systems are. The donor uses the picture before they fund the next programme. They want to see how their investment fits with the others. The vendor uses the picture when they propose a system. They must match what is already there. And you, the middle manager, use the picture to keep all three aligned — so the donor funds what the country needs, the vendor builds what fits, and the minister tells a coherent story.

### Slide — The picture has four parts

Every EA looks at your government in four parts. Services — what your government does, and for whom. This is the layer your minister talks about most, because it is the layer the public sees. Data — the information your government holds, who owns it, where the authoritative copy lives. Data is the longest-lived part of any government. Applications come and go. Technology cycles every decade. Data outlasts them all. Applications — the software that uses that data to deliver those services. This is what gets bought, built, integrated, replaced. Technology — the infrastructure underneath. Networks, hosting, identity, security. The basics that must be running for anything else to work.

### Slide — Written down, a list of projects becomes a system

When you write down all four parts, your government's digital landscape stops being a list of unrelated projects. It starts looking like a system. A system you can change deliberately. A system you can plan investments against. A system you can talk about across ministries, with donors and with vendors, without re-explaining the basics every time.

### Slide — In one sentence

That is what an Enterprise Architecture is. Not software. Not a tool. The agreed picture of your government — and the tool that lets you, instead of the vendor or the donor, lead the conversation about what comes next.

### Slide — Sources

*(No narration.)*

---

## 1.3 Why projects can't do this themselves (~4 min)

> *Procurement rules can require interoperability. They cannot deliver it. Only planning at the level of the whole government, supported by reference architectures, can.*

### Slide — Title (1.3)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — You already require interoperability. So why does the citizen still fill the form five times?

You may be thinking: my country already requires this. Every new digital project must specify open APIs; every contract must require interoperability. So why does the citizen still fill the same form five times? Procurement rules can require behaviour. They cannot make it the cheapest choice.

### Slide — Each project is rational — and builds its own

Inside any new programme, the team is rational. They have a contract, a budget, a deadline. Re-using another ministry's identity system means learning that system, negotiating with that ministry's team, accepting their delays. Building your own version is faster. So the team builds their own. That is not a failure of discipline. That is the project doing exactly what it was funded to do.

### Slide — The math changes only at whole-of-government level

Re-use becomes rational only when you can see across the whole government. From that view, the math changes. The first ministry pays to build the identity system. The second ministry does not — it consumes the first one. The third does not. The fourth does not. Over five years, the country saves a meaningful share of its sectoral digital spend.

But this view does not exist inside any single project. It exists only at the level of your country's whole digital portfolio. That is the view an EA gives you, and it is the view your minister needs to make funding decisions that look different from project-level cost choices.

### Slide — Two more things projects cannot deliver

There are two more things projects do not deliver. The first is sustainability. A project ships on time and moves on. Twelve years later, the original vendor is gone. The open-source library has forked. The technology has moved on. The system you are still running has nobody who fully understands it. Projects are not incentivised to plan for that moment — they are incentivised to ship.

The second is complexity reduction. A project says yes to most feature requests, because feature requests come from people the project must please. Five years later, your system is too complex to maintain or to change. Each yes has accumulated. Saying no requires authority the project does not have.

### Slide — A reference architecture is other countries' learning

Reference architectures answer the questions projects do not. Other countries have built these systems for decades. They learned what survives technology change and what does not. They learned which architectural decisions still hold up after twenty years and which decisions cost them dearly. A reference architecture is that learning, written down. PAERA is one such reference. Adopting it means starting with their lessons, instead of paying for the same lessons yourself over the next twenty years.

### Slide — In one sentence

So when you make the case for an EA, the case is this. The four-part picture is the artefact. Planning is the function. Re-use, sustainability and complexity reduction — three things every digital ministry says it wants — none of these come from projects alone. All of them come from the planning view that an EA gives, and from the reference architectures that EA practice connects you to. That is why projects cannot fix this themselves. That is why an EA is work your minister must commission, separately, deliberately, with sustained funding.

### Slide — Sources

*(No narration.)*

---

## 1.4 Why an EA matters more now (~4 min)

> *For thirty years, digital work meant putting paper online. That era is ending. The work now is to redesign how your ministry serves citizens — and that work needs business and IT in the same room, using the same words.*

### Slide — Title (1.4)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Putting paper online was the work. It is not any more.

For a long time, digital transformation in government meant one thing: take a paper process and put it online. The form becomes a web form, the queue an online appointment, the certificate a PDF. The ministry still does the same work — only the medium changes.

### Slide — Putting paper online is no longer the main work

That work is still important. But it is no longer the most important work your ministry is being asked to do. The countries — and the ministries — that are delivering real citizen results today are not just digitising forms. They are redesigning how citizens are served.

### Slide — The new work redesigns how citizens are served

Look at what the new work actually looks like. One farmer registry, used by the agriculture ministry, the cooperative bank, the input subsidy programme and the climate-resilience programme — the same farmer, recognised the same way, by all of them. One national identity that lets a citizen prove who they are at any service, without paper. One learner record that follows the child from primary school to university. None of these is 'put it online.' Each of them is a redesign of how the ministry works.

### Slide — The new work needs business and IT to decide together

But the new work comes with a new problem. When you redesign how the ministry works, two groups must decide together. The business side: your minister, your director-general, your head of policy. The IT side: your architects, your engineers. In the old work, they did not need to talk much. Business decided what; IT delivered how. In the new work, they decide together. About the same questions. With the same level of seriousness.

### Slide — They sit in the same meeting — and miss each other

But they do not share a language. Your minister talks about citizen services and policy goals. Your chief architect talks about systems, APIs and data. They sit in the same meeting and miss each other. The decision does not get made well — or it does not get made at all. And the ministry stays in the old work, even though the new work is what is needed.

### Slide — An EA gives both sides one language

This is the second job an Enterprise Architecture does. It gives both sides a shared language for the new work. The agreed picture — something both sides can point at. Plain words for the basic terms — service, capability, data domain — that mean the same thing to both sides. And a regular forum — the EA Board — where they sit together and decide. With these in place, the conversation about redesigning how the ministry works finally happens. Without them, it does not.

### Slide — In one sentence

In the era of digitising paper, an EA was useful. In the era of redesigning how the ministry works, an EA is necessary — because without it, business and IT cannot have the conversation the redesign requires.

### Slide — Sources

*(No narration.)*

---

## 1.5 Why PAERA-anchored (~4 min)

> *PAERA gives your team five years of head start. Adopt it, and the architecture work begins on day one. Do not adopt it, and your first year is spent inventing what others have already published.*

### Slide — Title (1.5)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Which framework do you use to draw the picture?

An Enterprise Architecture is the agreed picture of your government. Which framework do you use to draw it? You have two paths — design one for your country from scratch, or anchor on one that already exists.

### Slide — Two paths — one costs you a year before work begins

The first path: hire consultants to design an EA framework specifically for your country — new terms, new principles, a new method. Twelve to eighteen months before any architect has drawn a single picture of any ministry. You have paid for groundwork, not for architecture. The second path: anchor on a framework that already exists, built for the public-sector use case, with the groundwork done, so your team starts on day one. PAERA is that framework — the Public Administration Ecosystem Reference Architecture, published in 2024 under GovStack.

### Slide — Five things you do not pay to invent

Five things PAERA gives your team on day one. Five things you do not pay to invent.

First, a way to organise ministries and authorities. Every government body in your country fits one of three types — a policy unit, a regulatory agency, a service-delivery authority — with a small set of supporting elements like state registries. Your architects do not spend three months arguing about which type each ministry is. The classification is published.

Second, plain words for the basic terms. Capability. Service. Application. Data domain. Each one defined, in plain language. Day one, your architects are using the vocabulary, not designing it.

Third, a library of common building blocks. Identity. Payments. Information sharing. Registries. Each one is a published specification with working examples. When your team needs to design a national identity system, they reach for the pattern. They do not invent it from scratch.

Fourth, a set of architectural principles. Ten of them — from rule of law, through security and privacy, to user-centred design. Already debated across many countries. You extend them for your country's context. You do not draft them.

Fifth, a way to run the work. The lifecycle — Discover, Assess, Adapt, Plan, Execute and Govern — already exists, with roles, decisions and sign-off points defined per phase. We walk it in the next video.

### Slide — One framework — every sector reuses the investment

PAERA works across sectors. The same framework applies to education, to health, to social protection, to agriculture. Once your country builds the EA muscle for one sector, every next sector reuses the same investment. The framework does not get re-bought, re-trained, re-customised. The second sector is cheaper than the first. The third is cheaper still.

### Slide — PAERA connects your team to a working network

PAERA is not a standalone document. It connects to a working network — building block specifications, a marketplace of vendor-built implementations that have been checked for compliance, a certification programme, a sandbox you can test in, a shared knowledge base. Adopting PAERA means joining a network of countries and partners actively building these resources together.

### Slide — In one sentence

PAERA is not a vendor choice. It is the choice to start with the work other countries have already done — so your team spends their time on what is specific to your country.

### Slide — Sources

*(No narration.)*

---

## 1.6 The lifecycle on one page (~4 min)

> *Six months from start to a roadmap your minister can take to cabinet. Then ongoing governance. Five phases. Four sign-offs. One continuous practice.*

### Slide — Title (1.6)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — If you take one picture away from this knowledge product, take this one.

If you take one picture away from this knowledge product, take this one: the EA lifecycle on a single page.

### Slide — Five phases. Four sign-offs. Six months to a roadmap.

Five phases, four sign-offs. The first four take about six months; the fifth is ongoing — your country's permanent way of working.

### Slide — Each phase: one question, one deliverable, one sign-off

Phase one, Discover. What exists today? Your architects map the current landscape — the strategies in force, the systems, the sector plans, the legal framework — and produce a Discovery brief with no recommendations yet. Sign-off: the picture is accurate enough to build on. Three to four weeks.

Phase two, Assess. What is the gap? Architects compare what they found against PAERA-anchored standards, write the current state in the four parts of an EA, score maturity, and write the gap analysis. Sign-off: it names the right problems in the right order. Six to eight weeks.

Phase three, Adapt. What fits our country? PAERA is a starting point, not a constraint, so architects shape it with sector CIOs and your EA Board — your principles, your sector priorities, and for each building block a build, buy, share or sandbox call. Four to six weeks.

Phase four, Plan. How do we get there? Architects describe the target state and sequence the work into a roadmap with investment estimates. Sign-off: roadmap approved, budget committed. This is the deliverable your minister takes to cabinet. Six to eight weeks.

Phase five, Execute and Govern. How do we sustain this? The approved roadmap becomes a project pipeline, and a small permanent team of two to four senior architects turns the EA from a one-time delivery into a living repository. The Board reviews new projects against the architecture. Quarterly, indefinitely.

### Slide — Your minister reviews four times — not every diagram

Notice the rhythm. Four sign-offs in six months. Your minister does not review every diagram; they review at four moments, each tied to a defined deliverable. Between sign-offs the architects work, and the minister's job is to remove the political obstacles. And the phases depend on each other, in order: discover before you measure, measure before you adapt, adapt before you plan, plan before you execute, govern always.

### Slide — Week 1 to week 26 — then forever

Six months from Discovery to an approved roadmap. Then your country in permanent EA-governed mode. That is what 'months not years' actually means. It is not a slogan. It is the consequence of sequencing five phases — each with a clear question, a clear deliverable, a clear sign-off — and committing to the practice that runs after.

### Slide — Sources

*(No narration.)*

---

## 1.7 What you will need from your minister (~5 min)

> *Four asks. A small permanent EA team. An EA Board with real authority. About two per cent of digital budget, sustained for five years. And one promise — that the team will not be pulled onto the urgent project of the week.*

### Slide — Title (1.7)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Your minister is convinced. Now the harder part.

Suppose you have made the case and your minister is convinced. Now the harder part: agreeing the four specific things the minister must commit to. Each one is necessary; without any one of them the EA programme will struggle.

### Slide — Ask 1 — A small permanent EA team

First ask. A small permanent EA team. Two to four senior architects. Permanent. Reporting to your CDO or its equivalent. Not project consultants who arrive and leave. Not a temporary unit. The institutional home of architecture work in your country. Tell your minister: this team will exist whether or not any single programme is running. That is the point. It is your country's permanent muscle for cross-cutting digital decisions.

### Slide — Ask 2 — An EA Board with binding authority

Second ask. An EA Board with real authority. Chaired by your CDO, or by the minister directly. Members: sector ministry CIOs, owners of the major state registers, and where useful an external advisor. Cadence: quarterly meetings, with ad-hoc sessions for urgent decisions. The hardest part: the mandate must be binding, not advisory. Without binding authority the EA becomes documentation nobody reads; with it, the EA becomes the place every digital decision passes through.

### Slide — Ask 3 — About 2% of digital budget, for five years

Third ask. A sustained budget envelope. Three parts: the initial six-month engagement that runs the first four phases, about ten to fifteen senior person-months; the permanent practice, your two to four architects; and the governance overhead of Board time and occasional external review. As a share of your digital-government budget the whole thing is typically about two per cent. What you want is a five-year envelope, not an annual line that disappears when ministerial priorities shift.

### Slide — Ask 4 — One promise: the team stays protected

Fourth ask. One promise. The EA team will not be pulled onto the urgent project of the week. Not by you. Not by the minister. Not by anyone in cabinet. Get this in writing if you can. The most common way EA programmes quietly die is in their second year, when the team is moved onto a flagship delivery and the architecture work stops. The promise to protect the team must be explicit, must be visible, and must be recommitted whenever the minister changes.

### Slide — Be honest about the time horizon

And one note on time horizon, put honestly. Six months to an approved roadmap. Eighteen to twenty-four months to a fully operating practice. Five years to mature governance. The minister who launches this work will not be the one who completes it — and a minister who hears that as a feature is the right one to commission it.

### Slide — Four very different governments have committed to this

One more thing to take into the meeting. Four very different governments have already made these commitments. Rwanda, small with a strong centre, one citizen-services platform and a national identity linked across services. Kenya, with one-stop centres and an identity programme whose results are mixed and openly debated. South Africa, federal, coordinating through a central agency and shared standards rather than imposing them. And Estonia, mature, with distributed registries and the once-only principle.

### Slide — The same four elements show in all four

Four contexts, one pattern. A small central team with real authority. A published framework other agencies adopt. Binding governance rather than advisory. And a multi-year horizon with results visible inside months. Different sizes, different constitutions, the same four elements — which are the four asks, in four real governments.

### Slide — In one sentence

Four asks. A team. A Board. A budget envelope. A promise. Put them on a single page and ask for all four together — not in pieces. With all four committed, you have what you need.

### Slide — Sources

*(No narration.)*

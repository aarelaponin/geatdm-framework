# KP1 Module 3 (Topic 3) — Voice-over scripts

Spoken narration only, one section per video (3.1 – 3.7), slide-by-slide, matching `KP1_M3_Deck_v0.1.pptx`. Each video is standalone. Sources slides carry no narration — hold ~5 seconds; links go in the video description.

---

## 3.1 Set up the one place your architecture lives (~5 min)

> *An EA repository is the single agreed place the architecture lives — the four layers, the entities and the decisions — so that one picture of your government exists instead of many private copies. Set it up first; everything else governs what goes into it.*

### Slide — Title (3.1)

You have run an assessment. You have the four-layer picture of a sector. Now the question is: where does it live? If the answer is a slide deck on your laptop, the architecture will be out of date within a month and disagreed with within two. An Enterprise Architecture needs a home — one place where the current picture lives, that everyone works from. That home is the repository.

### Slide — A repository is a discipline, not a product

A repository is not a building, and it is not a particular software product. It is the single, agreed store of your architecture. It holds three things. The four layers — the capabilities, data domains, applications and technology you mapped. The relationships — how they connect, using the shared entities. And the decisions — what the EA Board ruled, and why. One place. One version everyone trusts.

### Slide — A second copy does not add a backup — it destroys the single source of truth

Why insist on one place? Because the moment there are two copies, they drift, and then they disagree. One ministry works from last year's picture; another from a newer one. People stop arguing about the architecture and start arguing about whose copy is right. A second copy does not add a backup — it destroys the single source of truth. One place, or effectively none.

### Slide — What it holds, concretely — a sector anyone can look up

Concretely, take Progressa's education sector. The repository holds the data domains and their owners — Person owned by the Identity Authority, Learner by the Learner Registry, examination results by the Examination Authority. It holds the capability map, the application portfolio, the shared technology. And it holds the decisions: when the Board ruled that the Examination Authority must consume the Learner Registry rather than keep its own list, that ruling lives in the repository, with its reason. Anyone can look up not just what the architecture is, but why it is that way.

### Slide — A spreadsheet everyone uses beats a platform nobody does

You do not need to buy anything to start. A well-structured spreadsheet, or a shared wiki, is a real repository if it holds the four layers, the relationships and the decisions, and if everyone uses it as the one source. Structure matters more than software. Many countries run a perfectly good early EA on a spreadsheet and a document store. The discipline of one place is what counts — not the price of the tool. When a spreadsheet starts to hurt, you graduate to a dedicated tool; the choice of tool is its own deliberate decision.

### Slide — The repository is the object both sides point at

One more reason the repository matters. It is the object both sides point at. When your minister briefs cabinet and when your architect designs a system, they are looking at the same picture — because there is only one. The repository is what makes the architecture a shared language between the business side and the IT side, instead of two private ones. Without it, each side keeps its own version, and the conversation breaks down.

### Slide — In one sentence

So before tooling, before governance, set up the one place. The single store of the layers, the relationships and the decisions. Get that right, and everything else in this module is about protecting what goes into it. Get it wrong — let copies multiply — and no amount of governance will save the architecture.

### Slide — Sources

*(No narration.)*

---

## 3.2 Choose EA tooling without locking yourself in (~4 min)

> *Choose your EA tooling the way you would choose any system — reuse before buy, buy before build, keep your data in open formats you control, and never let the EA tool itself become the vendor trap it is meant to help you avoid.*

### Slide — Title (3.2)

At some point a spreadsheet stops coping. You have hundreds of entities, several sectors, relationships you cannot see in rows and columns. It is time for a dedicated EA tool. And here is the danger: in buying a tool to help your government avoid vendor lock-in, you can lock yourself into the tool. Here is how to choose without falling into that trap.

### Slide — Graduate when the spreadsheet hurts in three specific ways

First, know when to graduate. The signs: you cannot see the relationships any more, because they are scattered across tabs. Several people edit and their changes collide. You cannot answer a simple cross-layer question — which systems touch the Person domain — without an afternoon of manual work. When the spreadsheet hurts in these specific ways, graduate. Not before. Buying a heavy tool too early just gives you an empty, expensive database.

### Slide — The rule you enforce on every ministry applies to your own tool too

Then apply the same sourcing rule you apply to every system — reuse before buy, buy before build. Is there already a shared tooling platform your government runs that you can use? Is there an open-source EA tool that fits? Only then a bought product. Building your own EA tool is almost never right — it is the most bespoke choice for a problem many others have already solved. The rule you enforce on every ministry's project applies to your own tool too.

### Slide — One question decides whether you own your architecture, or the tool does

The single most important rule: keep your architecture content in an open format you control. Before you adopt any tool, ask one question — can I export everything, in a format I can read without this tool, whenever I want? If the answer is no, the tool owns your architecture, not you. The content — the layers, the relationships, the decisions — is the asset. The tool is just a viewer. You must be able to change the viewer without losing the asset.

### Slide — Bend the tool to your metamodel, never the metamodel to the tool

One more trap. Every EA tool ships with its own built-in way of organising things — its own metamodel. The mistake is to let the tool's model quietly replace the one you adopted. You bend the tool to fit your entities and your principles — not the other way around. If a tool cannot represent your metamodel, that is a reason to question the tool, not to change your metamodel. The architecture is the content and the model. The tool serves them.

### Slide — In one sentence

So choose your tooling the way you would choose any government system. Graduate when the spreadsheet truly hurts. Reuse before buy, buy before build. Keep your content in open formats you control, so you can always leave. And bend the tool to your metamodel. Do that, and the tool helps you. Skip it, and you have bought yourself the very lock-in an EA exists to prevent.

### Slide — Sources

*(No narration.)*

---

## 3.3 Keep the repository true — the update discipline (~4 min)

> *A repository is only worth what it is current. Decide who owns it, what event triggers an update, and how a change is checked — so the architecture tracks reality instead of slowly becoming a confident work of fiction.*

### Slide — Title (3.3)

A repository has one enemy, and it is not technical. It is staleness. An architecture that is six months behind reality is worse than none — because people trust it, and it lies to them. The work of keeping the repository true is unglamorous and constant, and it is what separates a living EA from a binder on a shelf.

### Slide — A missing architecture makes people ask questions; a wrong one answers them

Start from why this matters. A missing architecture makes people ask questions. A wrong architecture answers them — wrongly. If the repository says the Examination Authority consumes the Learner Registry, and in reality it quietly built its own copy last quarter, then every decision made on the repository is built on a falsehood. Stale is worse than absent. Currency is not a nice-to-have. It is the whole value.

### Slide — When everyone owns currency, no one does

First, name one owner. One person — usually the chief architect or a named custodian on the EA team — is accountable for the repository being current. Not a committee. Not everyone. When everyone owns currency, no one does. One name, one accountability. That person does not do all the updating, but they are answerable for whether the picture is true.

### Slide — Tie updates to events, because a yearly review is eleven months stale

Second, define what triggers an update. Not review it every year — that guarantees it is eleven months stale. Tie updates to events. A new system goes live: update the application layer. A system is retired: remove it. A new data domain appears: add it with its owner. The Board makes a decision: record it. A ministry reorganises: revise the capabilities. When a real-world change happens, the repository changes with it. Events drive updates, not the calendar.

### Slide — A light gate keeps the repository conformant as it grows

Third, check each change. Not a heavy process — a light gate. When something is added, confirm it uses the shared entities correctly, that every data domain still has exactly one owner, and that any decision is logged with its reason. This keeps the repository conformant as it grows. The check is small. Skipping it lets the repository fill with private-language entries and orphaned items until it is as messy as the reality it was meant to clarify.

### Slide — The cheapest moment to update the repository is when a project comes to the Board

The cheapest moment to update the repository is when a project comes to the Board for review. The project tells you what it will build, what it will consume, what data it touches. That is exactly the information the repository needs. So tie the two together: a project that passes the gate leaves its architecture change in the repository as it goes. The governance process and the update discipline are the same motion, done once.

### Slide — In one sentence

So keep the repository true. One named owner accountable for currency. Updates triggered by real events, not a yearly review. A light check that each change stays conformant. Do this, and the repository stays a trustworthy picture of your government. Neglect it, and within a year you have a confident, detailed, widely-trusted work of fiction.

### Slide — Sources

*(No narration.)*

---

## 3.4 Stand up an EA Board that can actually say no (~5 min)

> *An EA Board with binding authority — the right chair, the right members, a regular cadence, and a mandate that lets it say no — is what turns the architecture from a document into the place every digital decision passes through.*

### Slide — Title (3.4)

The repository holds the architecture. The Board is what gives it authority. Without a governance board, the architecture is a document people can ignore. With one — a real one, that can say no — the architecture becomes the place every significant digital decision passes through. The difference between those two outcomes is whether the Board has binding authority. Everything else about the Board is detail; that is the point.

### Slide — An advisory board produces minutes; a binding board produces decisions

Start with the one thing that matters. The Board must be binding, not advisory. An advisory board looks at a project, offers an opinion, and the project does whatever it was going to do. That is governance theatre — it produces minutes, not decisions. A binding board's rulings are a condition of proceeding: a project told to consume the shared identity platform does so, or it does not get funded. If you cannot get binding authority, you do not yet have a governance board. You have a discussion group.

### Slide — The chair decides whether the no sticks

Who chairs it decides whether no sticks. The chair is your Chief Digitalisation Officer or its equivalent — or, in a smaller government, the minister directly. Senior enough that when the Board declines a powerful ministry's pet project, the decision holds. Note who does not chair it: you, the architect. You prepare the Board, you advise it, you bring the analysis. The authority to decide sits with someone who can carry it politically. The architect informs; the chair decides.

### Slide — Membership follows the affected systems, not convenience

Who sits on it: the people whose systems the decisions affect. The sector ministry CIOs. The owners of the major state registries — the identity authority, the population register. Where data-sharing is in play, the data-protection regulator. And, where useful, one external advisor for perspective. Keep it small enough to decide and broad enough that the decisions are owned by the people who must live with them. A Board of the right twelve is better than a Board of the convenient forty.

### Slide — Govern on a cadence that does not become the bottleneck

Set a cadence that governs without becoming the bottleneck. Quarterly main meetings to review the architecture as a whole — what changed, what is drifting, what to prioritise. And a fast ad-hoc path for urgent project decisions, so a programme on a deadline is not stuck for three months waiting for the next quarterly. If the Board is slow, projects will route around it, and you are back to no governance. Binding authority plus responsiveness is what keeps projects coming through the front door.

### Slide — The Board is the standing rhythm no single project can provide

There is a deeper reason the Board matters. Redesigning how government serves citizens needs the business side and the IT side to decide together — and they need a regular place to do it. The Board is that place. The repository gives them the shared picture; the metamodel gives them shared words; the Board gives them the shared rhythm — a standing forum where, four times a year and whenever it is urgent, business and IT sit down and decide together. That standing rhythm is part of what an EA provides that no single project ever can.

### Slide — In one sentence

So stand up a Board that can actually say no. Binding, not advisory. Chaired by someone senior enough that the no sticks. Made of the people whose systems are affected. Meeting on a rhythm that governs without blocking. Get that in place and the architecture has teeth. Leave it advisory, and you have a beautiful repository that everyone is free to ignore.

### Slide — Sources

*(No narration.)*

---

## 3.5 Review projects against the architecture (~5 min)

> *The architecture review gate — a short, consistent set of questions every project passes through before funding — is what turns principles and re-use from good intentions into the actual path of least resistance.*

### Slide — Title (3.5)

A Board with authority needs something to do with it. That something is the architecture review gate: the point where every significant new project passes through a short, consistent set of questions before it gets funded. This is where the architecture does its real work — not on a wall, but at the moment a project would otherwise quietly build its own version of something the country already has.

### Slide — Five questions, asked of every project, the same way every time

The gate is a few questions, asked of every project, the same way every time. Does a shared building block already exist for what you want to build? What data domains will you touch, and do you consume the owning body's copy rather than make your own? Do you meet the architecture principles — security by design, once-only, the rest? What is your sourcing choice, and is it deliberate? Can you export your data in an open format? Five questions. Asked consistently. That consistency is what makes the gate fair and predictable, so projects prepare for it rather than resent it.

### Slide — Building is rational for the project and ruinous for the country

Here is why this gate matters more than any document. Left alone, a project builds its own identity function, its own learner list, its own payment integration — because, inside the project, building is faster than reusing. That choice is rational for the project and ruinous for the country. The gate is the one place where the whole-of-government view meets that decision, while it can still be changed. When a project proposes to build what already exists as a shared block, the Board, at the gate, says: consume the shared one. That single moment, repeated across every project, is how re-use actually happens. Not because a strategy required it — because the gate enforced it.

### Slide — An exception without an expiry quietly becomes the permanent normal

Sometimes the project is right. The shared identity platform genuinely cannot do what this project needs yet. So the gate is not a wall — it grants exceptions. But every exception is written down, with its reason, and given a sunset — a date when it is revisited. An exception without an expiry quietly becomes the permanent normal, and ten of them become the fragmentation you were trying to prevent. Grant exceptions honestly, record them, and make them temporary by default.

### Slide — The decision log is the architecture’s memory

Every decision the gate makes goes into the repository's decision log — what was decided, and why. This is the architecture's memory. Two years on, when someone asks why the Examination Authority is not allowed its own learner list, the answer is in the log, with the reasoning, not lost with the architect who has moved on. The decision log is also what makes the gate consistent: this project is treated the way the last similar one was, because the precedent is written down.

### Slide — In one sentence

So build the gate. A few questions, asked of every project the same way. A clear ruling — consume the shared block, or a written, time-boxed exception. Every decision logged with its reason. This is where principles stop being words and become the path projects actually take. The gate is the engine of the whole EA. Everything else — the repository, the Board, the principles — exists so that this moment, repeated, goes the right way.

### Slide — Sources

*(No narration.)*

---

## 3.6 Show the EA is working — the few metrics that matter (~4 min)

> *A handful of honest metrics — coverage, re-use rate, open exceptions, decisions made — show the minister and the team that the EA is working, and tell you where it isn't, without drowning anyone in vanity numbers.*

### Slide — Title (3.6)

Sooner or later your minister asks the fair question: is this EA work actually doing anything? You need an answer that is honest, short, and true. Not a fifty-page report. A handful of metrics that show whether the architecture is working — and, just as usefully, where it is not. Pick them carefully, because the wrong metrics make a stalled EA look healthy.

### Slide — Four numbers carry most of the signal

Four metrics carry most of the signal. Coverage — how much of your government is actually in the repository, and current, not how many pages exist. Re-use rate — of the projects that came through the gate, how many consumed a shared building block instead of building their own. This is the one that shows the EA is paying for itself. Open exceptions — how many waivers are outstanding, and how old; a growing pile of aged exceptions is fragmentation returning. And decisions — how many gate decisions the Board made, and how fast, because a slow gate is one projects route around.

### Slide — The re-use rate is the one to put in front of the budget authority

Of the four, the re-use rate is the one to put in front of the budget authority. Every project that consumed the shared identity platform instead of building its own is a system the country paid for once instead of many times. Tracked over a year, a rising re-use rate is the closest thing you have to proof that the EA is returning its cost. It turns the abstract argument — planning enables re-use — into a number that goes up. That is the metric that protects your funding.

### Slide — If a metric would still rise while the architecture stopped mattering, it is wrong

Avoid the vanity metrics. The number of diagrams drawn, pages written, meetings held — these measure activity, not effect. A programme can produce a thousand pages and change nothing. Worse, busy-looking metrics let a stalled EA hide. If a metric would still go up while the architecture quietly stopped mattering, it is the wrong metric. Measure what the EA changes — re-use, coverage, decisions — not how busy the team looks.

### Slide — A scorecard that is always green is believed once

Report the four on a single page, every quarter, to the Board and the minister. Include what is not working — the coverage gap in a sector nobody will let you near, the aging exceptions a powerful ministry will not close. The temptation is to show only green. Resist it. A scorecard that is honestly amber where it should be is what builds the trust that keeps the EA funded across a change of minister. A scorecard that is always green is one nobody believes the second time.

### Slide — In one sentence

So measure a few things, honestly. Coverage. Re-use rate. Open exceptions. Decisions made and how fast. Put them on one page, every quarter, amber where they should be amber. This is how you show the minister the EA is working, how you catch it when it is not, and how you protect the funding that keeps the practice alive.

### Slide — Sources

*(No narration.)*

---

## 3.7 Keep the practice alive past year two (~5 min)

> *EA programmes rarely fail technically; they fade — the team gets pulled away, the repository goes stale, the Board drifts to advisory, the sponsor changes. Naming these four fade-modes and the move that counters each is how you keep the practice alive.*

### Slide — Title (3.7)

Most EA programmes do not fail in a dramatic way. They fade. The first six months go well — there is energy, a roadmap, a Board. Then, somewhere in the second year, the practice quietly stops mattering, and one day someone notices the repository is a year out of date and the Board has not met in two quarters. The fade is predictable. It comes in four forms. Name them, and you can counter each.

### Slide — Fade one — your architects are the obvious people to second to the crisis

The first fade: the team gets pulled away. A flagship programme runs into trouble and needs skilled people. Your architects are the obvious choice. They are seconded just for a few months, and the architecture work stops. This is the most common way EA programmes die. The counter is a protection promise — an explicit, written commitment that the EA team will not be pulled onto the urgent project of the week — and it must be recommitted whenever the minister or the sponsor changes, because the new one never feels bound by the old one's promise.

### Slide — Fade two — an unused repository is a dead one

The second fade: the repository goes stale. Updates slip during a busy quarter. The picture drifts from reality. Someone relies on it, gets burned, and word spreads that the repository cannot be trusted. Once trust goes, people stop using it, and an unused repository is a dead one. The counter is the update discipline — one named owner accountable for currency, updates tied to real events and to the review gate, so the repository stays true as a by-product of work that happens anyway.

### Slide — Fade three — a Board overruled in silence is a Board being dismantled

The third fade: the Board drifts back to advisory. Under delivery pressure, a powerful project is let through despite the Board's objection. Then another. The Board's no quietly becomes a suggestion, projects learn they can route around it, and within a year it is a discussion group again. The counter is to protect the binding authority deliberately — and to track and report every time the Board is overruled. Sunlight on overrides is what keeps the authority real; a Board overruled in silence is a Board being dismantled.

### Slide — Fade four — an EA that depends on one champion dies with that champion

The fourth fade: the sponsor changes. The minister or the digitalisation officer who championed the EA moves on. The successor has their own priorities and no attachment to this one. The counter is to make the EA outlive its sponsor — institutionalise it. A legal mandate for the Board, not just a memo. A budget line, not an annual favour. And the one-page scorecard, so a new sponsor can see in five minutes that the EA is returning its cost. An EA that depends on one champion dies with that champion's tenure. One that is institutionalised survives the handover.

### Slide — You are building something designed to outlast you

One honest thing to carry. A mature EA practice takes about five years. The architect who stands it up is rarely the one who sees it mature. That is not a reason for discouragement — it is the job. You are building something designed to outlast you: a repository that stays true without you, a Board that holds without you, a mandate that survives the next election. Build it to survive you, and you have done the work. Build it to depend on you, and it fades the moment you leave.

### Slide — In one sentence

So watch for the four fades. The team pulled away — counter with a protected, recommitted promise. The repository stale — counter with the update discipline. The Board gone advisory — counter by protecting and reporting its authority. The sponsor changed — counter by institutionalising the mandate, the budget and the scorecard. Keep the practice alive past year two, and the architecture becomes how your government works. Let it fade, and it becomes another binder on a shelf that once cost a great deal.

### Slide — Sources

*(No narration.)*

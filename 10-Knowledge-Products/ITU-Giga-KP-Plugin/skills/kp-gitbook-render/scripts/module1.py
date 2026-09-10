"""KP1 Module 1 — Why a PAERA-anchored EA. Content lifted from build_kp1_module1_v02.js (via the
v0.2 script bundle); worked examples are DRAFTS authored for the demo GitBook and marked as such."""
from fixture import *

MODULE = dict(
    number=1,
    title="Why a PAERA-anchored EA",
    persona="Strategist (CDO, Director-General, sector minister or ministerial-equivalent sponsor)",
    runtime="~31 minutes across seven videos",
    playlist="KP1 — Topic 1: Why a PAERA-anchored EA",
    intro_url=None,
    blurb="Seven short videos that make the case for a national Enterprise Architecture anchored on PAERA — what it is, why projects cannot do it themselves, what the lifecycle looks like, and what to ask your minister for. Each video hands you one play to run on your own country.",
)

ALL_SUBTOPICS = [
dict(
    yt=None, id="1.1", slug="1-1-why-your-country-needs-a-national-ea",
    title="Why your country needs a national EA",
    yt_title="Why every digital-government programme rebuilds the same plumbing — and how to stop it",
    runtime="~4 min", paera="§2.1 Problem statement; §5.2 Principle #5 (Once-Only)",
    message="Without a shared plan for your government's digital systems, every new programme rebuilds what others have already built. The country pays. The citizen pays. Your minister cannot deliver what they promised.",
    concept="""In your ministry you have probably seen this pattern. One programme builds a system to register citizens. Another builds a second system to register the same citizens for a different service. A third builds a third. Each takes years, each is funded separately, often by a different donor, and none of them work together. The citizen still fills the same form five times at five counters. You cannot fix this inside any one programme, because each programme is doing exactly what it was funded to do.

There are four signs that the pattern is present in your government. **More than one register of the same people:** the school list, the national ID and the social register each keep their own, and none agree. **Every system-to-system link built from scratch:** last year's tax-to-business-register connection is rebuilt this year for health. **Vendor lock-in on systems built years ago:** one vendor knows how it works and prices accordingly. **Ministries that do not connect:** the citizen who gave her ID number to health gives it again, on paper, at the school. The once-only pledge exists on paper; in practice it is impossible.

The cost runs in four directions at once: **money** (the same things built many times), **time** (every programme waits for cross-system work nobody planned), **citizens** (the same form in five places) and **the minister** (flagship cross-ministry programmes cannot land).

All four signs share one root cause: there is no shared plan. Nobody has written down what the government's digital systems are, who owns them and how they should fit together. A national Enterprise Architecture is that plan. The rest of this knowledge product shows you how to commission one, what it delivers, and what you will need from your minister to make it work.""",
    sources=["PAERA v1.0 §2.1 Problem statement and §5.2 Principle #5 Once-Only — https://paera.govstack.global", "EU European Interoperability Framework, Once-Only principle \u2014 https://ec.europa.eu/isa2/sites/default/files/eif_brochure_final.pdf"],
    play=dict(
        input_ref="A0 §1 Digital-landscape brief",
        title="Diagnose your country's fragmentation symptoms",
        est="~10 min",
        example_context=None,
        kind="diagnostic",
        does="A Strategist new to EA may need to assess whether their country actually shows the four symptoms described in this video, and how severely. This play produces a defensible diagnostic table you can take into a cabinet briefing.",
        when="Run it once, early, before you make the case to anyone. Re-run it after Discovery (Module 4, play 4.2) with the real inventory instead of your own description.",
        prompt="""Below is a description of [country X]'s digital landscape and recent digital initiatives [paste 1–3 paragraphs of context, including any known cross-agency systems, identity programmes, and recent digital-government strategy documents]. For each of the four common fragmentation symptoms — duplicate registries, bespoke point-to-point integrations, legacy vendor lock-in, sectoral islands — assess whether the described landscape shows that symptom. Output a 4-row table: symptom, severity (None / Partial / Severe), evidence cited from the input, illustrative cost direction (money / time / citizen experience / policy capacity). Be conservative — claim Severe only if the evidence is in the input. End with 3 bullets: which symptoms need immediate diagnostic work, which are likely false negatives, what additional information would sharpen the assessment.""",
        inputs="1–3 paragraphs of country-specific digital-landscape context. No personal data is needed — describe systems and institutions, not people.",
        outputs="A 4-row markdown table plus a 3-bullet summary.",
        safeguard="Treat the output as a hypothesis, not a finding. Validate each row against a named source (a published strategy document, a documented incident, or a direct stakeholder interview) before using it in a cabinet briefing.",
        feeds=["1.3", "1.5"],
        artefact="A1 — Fragmentation diagnostic",
        skill="country-context-pack",
        skill_also=["cite-or-discard"],
        example_input=PROGRESSA_LANDSCAPE,
        example_output="""| Symptom | Severity | Evidence cited from the input | Cost direction |
| --- | --- | --- | --- |
| Duplicate registries | **Severe** | Four identifiers for the same population: National ID (PNIA), MoEYS learner numbering in district EMIS, the 2016 Social Protection beneficiary register, and the Ministry of Health patient index. | Money (four registers maintained), citizen experience (re-supplying identity to each) |
| Bespoke point-to-point integrations | **Partial** | The 2022 tax-to-business-register link is a direct database link that predates Linkup and has not been migrated; MoEYS–Health exchange is by spreadsheet on request. Linkup exists and has four members, so the pattern is being addressed. | Time (each new link is a project), policy capacity (no reusable exchange for new programmes yet) |
| Legacy vendor lock-in | **Partial** | The Social Protection register was built in 2016 by a vendor that still holds the only maintenance contract. No other lock-in is described. | Money (single-vendor pricing), time (change requests queue behind one supplier) |
| Sectoral islands | **Severe** | Education, health and social protection each keep their own identity and exchange data manually or not at all; PDGA's mandate is coordinating, not binding; the 2021 Interoperability Framework is not referenced by current projects. | Policy capacity (cross-ministry flagships cannot land), citizen experience |

- **Immediate diagnostic work:** duplicate registries and sectoral islands — confirm the identifier map across the four registers and the actual sharing arrangements (or lack of them) between MoEYS, Health and Social Protection.
- **Likely false negatives:** legacy vendor lock-in. Only one contract is described; a 2018 National ID platform and a 2016 register almost certainly carry others. Ask each sector CIO for the maintenance-contract list.
- **Information that would sharpen this:** the Linkup member roadmap (who joins next and when); whether the Roadmap 2024–2030 gives PDGA any binding powers; the number of active system-to-system links outside Linkup.""",
        annotations=[
            ("The Severe on duplicate registries is earned", "Four identifiers are named in the input. This is the standard the safeguard asks for: severity claimed only where the evidence is in the pasted text."),
            ("Point-to-point was correctly downgraded to Partial", "A less careful reading would have called it Severe because two ugly links are described. The model noticed Linkup exists and credited it — that is the distinction a cabinet audience will probe."),
            ("The false-negative bullet is the most useful line on the page", "It says, in effect, 'your input is thin on contracts'. That is a diagnostic about your description, not about the country — and it tells you what to go and collect before Discovery."),
            ("What is missing", "Nothing in the output cites the 2021 Interoperability Framework as evidence of a governance gap, even though it is the strongest signal in the input. Add it yourself when you validate the sectoral-islands row."),
        ],
        what_next="""Validate each row against a named source: the Roadmap 2024–2030 draft, the Linkup onboarding register, and one interview per sector CIO. Then carry the validated table into two later plays — it is the input to the re-use business case in [1.3](./1-3.md) and the evidence base for the foundation map in [1.5](./1-5.md). In your country workbook this is artefact **A1**.""",
    ),
),
dict(
    yt=None, id="1.2", slug="1-2-what-an-ea-actually-is",
    title="What an EA actually is, in one breath",
    yt_title="What is Enterprise Architecture, really? A 3-minute explanation for government leaders",
    runtime="~3 min", paera="§2.3 Role of Enterprise Architecture",
    message="An EA is the picture everyone agrees describes your government — minister, ministry CIO, donor, vendor. With it, you can lead the conversation. Without it, others lead it for you.",
    concept="""An Enterprise Architecture is a set of documents and diagrams that together describe how your government works: what services it delivers and to whom, what data it holds and who owns it, what software supports those services, and what infrastructure runs underneath. An EA is not software, not a vendor product, not a tool you buy. It is the agreed picture.

Why does it matter that everyone has the same picture? Because every important conversation in your ministry breaks down on this point. Your minister uses the picture to brief cabinet — they cannot describe what the country's digital spend is buying without it. The donor uses it before funding the next programme, to see how their investment fits with the others. The vendor uses it when proposing a system, because they must match what is already there. And you use it to keep all three aligned.

Every EA looks at government in four parts. **Services:** what your government does and for whom; the layer the public sees and the minister talks about most. **Data:** the information your government holds, who owns it, where the authoritative copy lives; the longest-lived part of any government, outlasting every application and every technology cycle. **Applications:** the software that uses that data to deliver those services; what gets bought, built, integrated and replaced. **Technology:** networks, hosting, identity, security; the basics that must run for anything else to work.

When you write down all four parts, your digital landscape stops being a list of unrelated projects and starts looking like a system — one you can change deliberately, plan investments against, and discuss across ministries, with donors and with vendors, without re-explaining the basics every time. That is what an EA is: the agreed picture of your government, and the tool that lets you, rather than the vendor or the donor, lead the conversation about what comes next.""",
    sources=["PAERA v1.0 §2.3 Role of Enterprise Architecture — https://paera.govstack.global", "TOGAF Standard, 10th Edition \u2014 Architecture Content \u2014 https://pubs.opengroup.org/architecture/togaf10-doc/adm/"],
    play=dict(
        input_ref="A0 §1 (the named institutions and services)",
        title="Draft a one-slide 'what is EA' explainer for ministers",
        est="~10 min",
        example_context="A1 Fragmentation diagnostic was in the session above the prompt.",
        kind="drafting",
        does="A Strategist who has watched this video may need to brief their minister, cabinet or sector CIO on what an EA is, in one slide, in non-technical language. This play produces a country-tailored explainer.",
        when="Before the first briefing in which you use the word 'architecture' with a non-technical audience.",
        prompt="""Draft a one-slide explainer titled 'What is Enterprise Architecture' for a [Cabinet briefing / ministerial induction / sector CIO onboarding] in [country X]. The slide should include: a one-sentence definition; the four BDAT layers (Business, Data, Application, Technology) with one-line examples specific to [country X]'s public-sector context — e.g. mention a real sector ministry, a known state registry, a known service]; a single concluding line on why this matters for digital service delivery. Tone: factual, non-technical, suitable for ministers. Output as plain text formatted as: TITLE, then four BODY bullets, then CONCLUSION.""",
        inputs="The audience (minister / cabinet / CIO), the country name, optionally one or two named institutions or services.",
        outputs="A one-slide structure ready to paste into the country's slide template.",
        safeguard="Have a domain colleague (a sector CIO or chief architect) sanity-check the BDAT examples for the country before the briefing — generic examples may sound generic to ministers who expect specifics.",
        feeds=["1.4"],
        artefact="A2 — Ministerial explainer slide",
        skill="ea-institution-mapper",
        skill_also=[],
        example_input="""Audience: Cabinet briefing. Country: Progressa. Named institutions and services to use: the Ministry of Education, Youth and Skills (MoEYS); the National ID register run by PNIA; Linkup (the national data-exchange layer); the planned National Learner Registry; school enrolment as a citizen-facing service.""",
        example_output="""TITLE: What is Enterprise Architecture

- BUSINESS — the services Progressa delivers and to whom. Example: enrolling a child in a public school, from the parent's first contact to the learner's first credential.
- DATA — the information the state holds, who owns it, and where the authoritative copy lives. Example: the National ID register owned by PNIA; the planned National Learner Registry owned by MoEYS — one learner, one record.
- APPLICATION — the software that uses that data to deliver those services. Example: district EMIS today; the National Learner Registry and the examinations platform tomorrow.
- TECHNOLOGY — the shared foundations everything runs on. Example: Linkup, the national data-exchange layer, and the PNIA e-KYC service that lets any ministry verify an identity.

CONCLUSION: With the picture written down, every new programme — donor-funded or state-funded — builds on what Progressa already has instead of rebuilding it. Without it, the same plumbing is paid for again in every sector.""",
        annotations=[
            ("The definition sentence is missing", "The prompt asked for a one-sentence definition before the four bullets and the model went straight to the layers. Add it: 'An EA is the agreed description of how the government works — its services, data, software and infrastructure — written down once so every decision can refer to it.'"),
            ("The examples are specific because the input was specific", "Compare this to the same play run with only 'Progressa' as input — you would get 'e.g. the Ministry of Health' and 'e.g. a citizen registry'. The specificity comes from the six named things you pasted, not from the model."),
            ("'One learner, one record' is a political phrase", "It appeared because the Minister uses it; the model picked it up from context elsewhere in this course. Check with MoEYS that it is safe to repeat in cabinet before it is on a slide."),
            ("The conclusion re-uses the 1.1 argument", "That is deliberate and good: the explainer should land on the same cost-of-fragmentation point the cabinet heard in the diagnostic (A1)."),
        ],
        what_next="""Send the slide to your MoEYS ICT Director or chief architect for the sanity check the safeguard asks for. Then keep the four example lines — they become the shared vocabulary you will need when you convene business and IT together in [1.4](./1-4.md). Workbook artefact **A2**.""",
    ),
),
dict(
    yt=None, id="1.3", slug="1-3-why-projects-cant-do-this-themselves",
    title="Why projects can't do this themselves",
    yt_title="Why digital procurement rules don't fix fragmentation — and what an EA actually does",
    runtime="~5 min", paera="§1.3 GovStack Vision; §3.3 Digital Infrastructure principles; §5.2 Principles",
    message="Procurement rules can require interoperability. They cannot deliver it. Only planning at the level of the whole government, supported by reference architectures, can.",
    concept="""You may be thinking: my country already requires this. Every new project must specify open APIs, every contract must require interoperability, the national digital strategy is signed by cabinet. So why does the citizen still fill the same form five times? The answer is uncomfortable. Procurement rules can require behaviour. They cannot make that behaviour the cheapest choice for the project doing the work.

Inside any new programme the team is rational. They have a contract, a budget, a deadline. Re-using another ministry's identity system means learning that system, negotiating with that ministry's team and accepting their delays. Building your own version is faster. So the team builds their own. That is not a failure of discipline — it is the project doing exactly what it was funded to do.

Re-use becomes rational only when you can see across the whole government. From that view the maths changes: the first ministry pays to build the identity system, the second consumes it, the third and fourth consume it too, and over five years the country saves a meaningful share of its sectoral digital spend. That view does not exist inside any single project. It exists only at the level of the whole digital portfolio, which is the view an EA gives, and the view your minister needs in order to make funding decisions that look different from project-level cost choices.

Two more things projects do not deliver. **Sustainability**: twelve years after a project ships, the vendor is gone, the library has forked, and nobody fully understands the system still in service. Projects are incentivised to ship, not to plan for that moment. **Complexity reduction**: a project says yes to most feature requests, because they come from people it must please; five years later the system is too complex to change. Saying no requires authority the project does not have.

Reference architectures answer the questions projects do not. Other countries have built these systems for decades and learned which decisions still hold after twenty years and which cost them dearly. A reference architecture is that learning, written down; PAERA is one such reference. So the case is this: the four-part picture is the artefact, planning is the function, and re-use, sustainability and complexity reduction come from the planning view, not from projects. That is why an EA is work your minister must commission — separately, deliberately, with sustained funding.""",
    sources=["PAERA v1.0 §1.3 GovStack Vision; §3.3 Digital Infrastructure principles; §5.2 Principles — https://paera.govstack.global"],
    play=dict(
        input_ref="A0 §2 Programme list",
        title="Build the whole-of-government business case for building-block re-use",
        est="~15 min",
        example_context=None,
        kind="drafting",
        does="A Strategist needs to demonstrate to cabinet, budget authority or donor that re-use of building blocks is cheaper at the country level than at the project level, even though each individual project would not choose it. This play produces a draft business case that makes the maths visible.",
        when="After the fragmentation diagnostic (1.1) and before the budget ask (1.7). It is the 'why' behind the two-per-cent envelope.",
        prompt="""Below are 3 to 5 of [country X]'s current and planned digital-government programmes [paste short descriptions, ideally with rough budget envelopes and the identity / payment / data-exchange components each programme needs]. For the country as a whole, estimate the cost difference between (a) each programme building its own version of identity, payments and data-exchange components, vs (b) all programmes consuming a shared set of GovStack-aligned building blocks. Acknowledge that option (b) is locally MORE expensive for each individual project. Output: per-programme table showing the local cost of 'do it yourself' (cheaper for this project) vs the local cost of 'consume the BB' (more expensive for this project), plus a country-level total over 5 years. End with a 'what makes this calculation work' note — the conditions (BB availability, governance authority, sustained funding, training capacity) that turn the country-level math from theoretical to realised. If budget envelopes are not given, state the benchmark tier and the adjustment factors you apply before the table. Return the output as text in this chat, not as a file or chart.""",
        inputs="3–5 short programme descriptions, with rough budget envelopes if known.",
        outputs="A per-programme cost table plus a country-level 5-year saving estimate, plus the realisation-conditions note.",
        safeguard="This is a directional calculation, not a costed business case. Use it to motivate a detailed costing exercise — do not present the per-programme numbers as quotations.",
        feeds=["1.7"],
        artefact="A3 — Re-use business case (directional)",
        skill="ea-cost-case",
        skill_also=["cite-or-discard"],
        example_input=PROGRESSA_PROGRAMMES,
        example_output="""Assumption used throughout: in a programme of this size, identity, payments and data-exchange components typically absorb 15–25% of the build budget when built bespoke; consuming a shared building block costs a programme roughly 5–8% of budget in integration, onboarding and governance effort, but adds 2–4 months of dependency on the shared platform's team. Figures are illustrative.

| Programme | Budget | (a) Build own identity / payments / exchange | (b) Consume shared BBs | Why (b) looks worse to the project |
| --- | --- | --- | --- | --- |
| National Learner Registry | 6.5m | ≈1.3m (20%) — own learner ID, own consent module, bespoke PNIA link | ≈0.5m (8%) + 3 months waiting for Linkup membership and PNIA child-ID policy | Schedule risk sits with PNIA and Linkup, not the project |
| Scholarship Platform | 2.1m | ≈0.4m — own applicant identity, own cheque-to-bank module | ≈0.15m + dependency on PayPro onboarding and Social Register API | Cheques work today; PayPro onboarding is someone else's queue |
| Social Register modernisation | 4.8m | ≈1.0m — vendor rebuilds identity and household exchange | ≈0.35m + renegotiation of the incumbent vendor's scope | Incumbent vendor has no incentive to shrink its scope |
| Digital Health Records | 3.2m | ≈0.6m — own patient index and facility list | ≈0.25m + adopting PNIA identifiers mid-pilot | Pilot is already running; switching identifiers is rework |
| Farmer Registry & Subsidy | 2.9m | ≈0.6m — own farmer ID, own payment rail via cooperative bank | ≈0.2m + PayPro and Linkup onboarding | AfDB timeline does not wait for Linkup |
| **Total, 5 programmes** | **19.5m** | **≈3.9m bespoke** | **≈1.45m consumption + one-off shared cost** | |

Country-level view over 5 years: the shared set (Identity via PNIA, Payments via PayPro, Information Mediator via Linkup, plus Registration and Consent BBs) needs a one-off investment of roughly 1.0–1.5m to reach production-grade for sector use, plus ≈0.3m/year to run. Five-year cost of option (b) ≈ 1.45m + 1.25m + 1.5m ≈ 4.2m against ≈3.9m for option (a) on these five programmes alone — roughly break-even. The saving appears from programme six onwards and in avoided duplicate maintenance: each bespoke component carries ≈15%/year maintenance, so option (a) adds ≈0.6m/year indefinitely, while option (b)'s run cost is shared. Over 5 years with the sixth to tenth programmes that the Roadmap already lists, the directional saving is in the range 3–5m, before counting the citizen-side and policy-capacity effects that do not appear in a budget line.

What makes this calculation work:
- **BB availability** — PNIA's e-KYC, PayPro and Linkup must be production-ready for sector use before the first programme needs them; otherwise every project reverts to (a) for schedule reasons.
- **Governance authority** — someone must be able to say 'no' to a bespoke identity module. Today PDGA cannot. Without a binding Board, (b) is optional and rational projects will not choose it.
- **Sustained funding** — the shared platforms need a multi-year run budget that is not tied to any one programme or donor.
- **Training capacity** — sector teams need to know how to integrate with the BBs; a documented onboarding path and a sandbox shorten the 2–4 month dependency to weeks.""",
        annotations=[
            ("The headline says break-even. The table says otherwise", "Option (b) is priced with five years of platform run cost (1.5m); option (a) is priced with zero years of maintenance, although the same paragraph says bespoke components carry \u224815%/yr. Add 5 \u00d7 0.6m to column (a) and it is \u22486.9m against \u22484.2m \u2014 the shared route wins by ~2.7m on these five programmes, not 'from programme six'. The model built a good structure and then compared a build cost with a total cost of ownership. That asymmetry is the first thing a finance official will find; find it first."),
            ("The percentages are invented", "'15–25% of build budget' is a plausible rule of thumb, not a sourced figure. The safeguard applies in full: directional only. Before this reaches a budget authority, replace the assumption line with figures from your own past programmes or a GovStack cost study."),
            ("The 'why (b) looks worse' column is the most reusable part", "It names, per programme, the exact objection each project team will raise. Those five objections are your agenda for the first EA Board meeting, which is why this artefact feeds 1.7."),
            ("Check the arithmetic yourself", "The 5-year total in the prose was assembled from three numbers the model chose; recompute it before quoting it. Models are fluent at sums and occasionally wrong at them \u2014 here it was the comparison, not the sums, that was wrong."),
        ],
        what_next="""Take the four realisation conditions straight into the four asks in [1.7](./1-7.md): availability and training are the team's job; authority is the Board; sustained funding is the envelope. Commission a real costing before the cabinet paper. Workbook artefact **A3**.""",
    ),
),
dict(
    yt=None, id="1.4", slug="1-4-why-an-ea-matters-more-now",
    title="Why an EA matters more now — and what it lets your minister actually do",
    yt_title="Why an EA matters more in the transformation era than the automation era",
    runtime="~5 min", paera="§2.3 Role of Enterprise Architecture; §4.5 Digital Co-creation",
    message="For thirty years, digital work meant putting paper online. That era is ending. The work now is to redesign how your ministry serves citizens — and that work needs business and IT in the same room, using the same words.",
    concept="""For a long time, digital transformation in government meant one thing: take a paper process and put it online. The form becomes a web form, the queue becomes an online appointment, the certificate becomes a PDF. The ministry still does the same work, in the same order, with the same roles; only the medium changes. That work is still important, but it is no longer the most important work your ministry is being asked to do. The ministries delivering real citizen results today are redesigning how citizens are served.

Look at what the new work actually looks like. One farmer registry used by the agriculture ministry, the cooperative bank, the input-subsidy programme and the climate-resilience programme — the same farmer, recognised the same way by all of them. One national identity that lets a citizen prove who they are at any service, without paper. One learner record that follows the child from primary school to university. None of these is "put it online". Each is a redesign of how the ministry works.

The new work comes with a new problem. When you redesign how the ministry works, two groups must decide together: the business side (minister, director-general, head of policy) and the IT side (architects, engineers). In the old work they did not need to talk much — business decided what, IT delivered how. In the new work they decide together, about the same questions, with the same seriousness. But they do not share a language. The minister talks about citizen services and policy goals; the chief architect talks about systems, APIs and data. They sit in the same meeting and miss each other, and the decision is not made well, or not made at all.

This is the second job an Enterprise Architecture does. It gives both sides a shared language: the agreed picture that both can point at; plain words for the basic terms — service, capability, data domain — that mean the same thing to both; and a regular forum, the EA Board, where they decide together. In the era of digitising paper, an EA was useful. In the era of redesigning how the ministry works, an EA is necessary.""",
    sources=["PAERA v1.0 §2.3 Role of Enterprise Architecture; §4.5 Digital Co-creation — https://paera.govstack.global"],
    play=dict(
        input_ref="A0 §3 Ministry operating context",
        title="Translate an operating-model question into a business-IT joint agenda",
        est="~10 min",
        example_context=None,
        kind="translation",
        does="A Strategist contemplating operating-model change (rather than process automation) often struggles to surface what the joint business-IT decisions actually are. This play produces a structured agenda you can use to convene business management and IT leadership in the same room.",
        when="Whenever a minister's announcement ('one learner, one record') needs to become a meeting with a decision list.",
        prompt="""Below is a description of an operating-model question my [ministry / agency] is considering — for example 'should we move to a Once-Only data-sharing model', 'should we redesign citizen service delivery around digital identity', 'should we offer this service through digital-only channels': [paste the question and 1–3 paragraphs of context, including any known constraints — legal, policy, technical, political]. Decompose the question into (a) the pure business decisions only organisational management can make (policy, legal, who owns what), (b) the pure IT decisions only the architect can make (technology choice, security model, integration pattern), and (c) the joint decisions that require business and IT in the same room. For each joint decision, frame it in plain language both groups can understand, and identify what each side needs from the other to make a good decision. Output: a 3-column table (business / IT / joint), plus a 5-bullet 'agenda for the first joint meeting' with named decisions.""",
        inputs="A 1–3 paragraph operating-model question with context.",
        outputs="A 3-column decomposition plus a meeting agenda.",
        safeguard="The decomposition is a starting structure for the conversation, not a verdict. The actual lines between 'business decision' and 'IT decision' are politically negotiated in every country — use the output to surface the conversation, not to settle it.",
        feeds=["1.6"],
        artefact="A4 — Joint business–IT agenda",
        skill="ea-legal-context",
        skill_also=[],
        example_input=PROGRESSA_OPMODEL,
        example_output="""| Business decisions (management only) | IT decisions (architect only) | Joint decisions (same room) |
| --- | --- | --- |
| Legal basis for sharing minors' data between civil registration, PNIA and MoEYS under the Data Protection Act 2023 — statutory duty or consent? | Whether the NLR references the National ID (Option B) or holds its own identifier with a crosswalk, given child IDs are issued only at 16 | **What 'one record' means on day one.** Business needs to know what can honestly be announced in 12 months; IT needs to know which cohort (new primary entrants only?) is in scope. |
| Who owns the learner record — MoEYS centrally, or the school/district as data steward with MoEYS as custodian | Integration pattern: MoEYS joins Linkup as a member vs. a point solution with PNIA | **Which enrolment fields are 'once-only' and which stay with the school.** Business owns the policy; IT knows which fields PNIA and civil registration can actually supply at 71% birth registration. |
| Whether enrolment remains a head-teacher-keyed process or becomes parent-initiated (union and workload implications) | Consent capture and audit design; offline-first data capture for unconnected schools | **The transition for the 29% of children without a birth record and the under-16s without a National ID.** Business decides the fallback policy; IT designs a provisional identifier that does not become a fourth permanent register. |
| The 12-month announcement itself — scope, wording, what is promised | Data-quality tooling for the existing district/provincial/PNEA duplicates | **Sequencing against the union.** Business owns the negotiation; IT can make the first release invisible to head teachers (backfill from existing EMIS) if business accepts a slower parent-facing change. |

Agenda for the first joint meeting:
1. **Decide the day-one scope of 'one learner, one record'** — new primary entrants from 2027 vs. all learners — and the wording the Minister can use.
2. **Decide the legal basis** for civil-registration → NLR data flow (statutory duty preferred; consent as fallback) and who takes the paper to the Data Protection Commission.
3. **Decide the fallback identity policy** for learners without a National ID or birth record, and confirm that the provisional ID retires when PNIA issues one.
4. **Decide whether MoEYS applies for Linkup membership now** (IT recommends yes; business must fund the onboarding and accept PDGA's timeline).
5. **Decide the head-teacher change strategy** — backfill-first, no new keying in release one — and who opens the conversation with the union.""",
        annotations=[
            ("The joint column is where the value is — read it first", "Each joint row pairs a business fact with an IT fact ('71% birth registration' with 'which fields PNIA can supply'). That pairing is exactly the shared-language problem the video describes, made concrete."),
            ("'Legal basis' was placed in the business column, and that is contestable", "In many countries the architect drafts the data-sharing legal basis with counsel. The safeguard applies: this boundary is negotiated, not given. Move it to 'joint' if that is how Progressa works."),
            ("The model quietly made a recommendation ('IT recommends yes')", "It is inside agenda item 4. Recommendations belong to your architect, not the draft — strip it or attribute it before circulating."),
            ("Item 5 is the political one and the model handled it carefully", "It did not pretend the union issue is technical. It offered a technical option (backfill-first) that gives the business side room to negotiate. That is the translation job done well."),
        ],
        what_next="""The agenda is the first meeting of a body that does not yet exist. That is the point: take the roles it implies (who decides item 2, who owns item 5) into the RACI play in [1.6](./1-6.md) — role gaps show up immediately. Workbook artefact **A4**.""",
    ),
),
dict(
    yt=None, id="1.5", slug="1-5-why-paera-anchored",
    title="Why PAERA-anchored — the head start you do not pay for twice",
    yt_title="Why anchor your national Enterprise Architecture on PAERA? Five things you don't have to build from scratch",
    runtime="~4 min", paera="§1.2 Motivation; §1.3 GovStack Vision; §2.3 Role of EA",
    message="PAERA gives your team five years of head start. Adopt it, and the architecture work begins on day one. Do not adopt it, and your first year is spent inventing what others have already published.",
    concept="""An EA is the agreed picture of your government. The next question is which framework you use to draw it, and there are two paths. The first is to hire consultants to design an EA framework specifically for your country — a new way of organising ministries, new terms, new principles, a new method. That takes twelve to eighteen months before any architect has drawn a single picture of any ministry. You have paid for groundwork, not for architecture. The second path is to anchor on a framework that already exists, built for the public-sector case, with the groundwork done. PAERA — the Public Administration Ecosystem Reference Architecture, published in 2024 under GovStack — is that framework.

Five things PAERA gives your team on day one. **A way to organise ministries and authorities:** every government body fits one of three types (policy unit, regulatory agency, service-delivery authority) with a small set of supporting elements such as state registries; the classification is published, so your architects do not spend three months arguing about it. **Plain words for the basic terms:** capability, service, application, data domain, each defined. **A library of common building blocks:** identity, payments, information sharing, registries, each a published specification with working examples. **A set of architectural principles:** ten of them, already debated across many countries, which you extend rather than draft. **A way to run the work:** the lifecycle of Discover, Assess, Adapt, Plan, Execute & Govern, with roles, decisions and sign-off points per phase.

PAERA works across sectors: the same framework applies to education, health, social protection and agriculture, so once your country builds the EA muscle for one sector, every next sector reuses the investment. And PAERA is not a standalone document — it connects to building-block specifications, GovMarket's compliance-checked implementations, a certification programme, a sandbox and a shared knowledge base. Adopting it means joining a network of countries and partners building these resources together.

PAERA is not a vendor choice. It is the choice to start with the work other countries have already done, so your team can spend their time on what is specific to your country. That is the head start your minister is being asked to commit to.""",
    sources=["PAERA v1.0 — https://paera.govstack.global", "GovStack — https://govstack.global", "GovMarket \u2014 https://govmarket.govstack.global"],
    play=dict(
        input_ref="A0 §2 Programme list (plus any strategies from §1)",
        title="Map your country's existing initiatives against PAERA's five foundations",
        est="~15 min",
        example_context=None,
        kind="diagnostic",
        does="A Strategist needs to understand which PAERA foundations their country has already partially built and which need to be built from scratch — a defensible map that frames the EA business case.",
        when="Once, before you argue for PAERA adoption; it turns 'we should use PAERA' into 'here is what we keep, reframe and build'.",
        prompt="""Below are [country X]'s existing digital-government initiatives and reference materials [paste 2–6 short descriptions, including any national strategy documents, interoperability platforms, identity programmes, sector EAs already published]. For each initiative, indicate which of PAERA's five foundations it already addresses: (1) taxonomy of public-sector organisations, (2) metamodel of entities and relationships, (3) pattern library and building blocks, (4) architectural principles, (5) methodology. Each initiative may cover none, one or several. Then summarise: which foundations are already covered (and where), which need to be built, and where existing work would need to be reframed to fit PAERA. Output: per-initiative table plus 3-bullet summary.""",
        inputs="2–6 short descriptions of country initiatives.",
        outputs="A per-initiative coverage table plus a coverage summary.",
        safeguard="An initiative that says 'we have principles' may not have PAERA-aligned principles — confirm coverage by reading the actual document, not the marketing summary.",
        feeds=["1.6"],
        artefact="A5 — PAERA foundation coverage map",
        skill="paera-reference-check",
        skill_also=["cite-or-discard"],
        example_input=PROGRESSA_INITIATIVES,
        example_output="""| Initiative | (1) Taxonomy | (2) Metamodel | (3) Patterns & BBs | (4) Principles | (5) Methodology | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Digital Transformation Roadmap 2024–2030 | — | — | Partial (lists DPI projects, no specifications) | **Partial** (8 principles incl. once-only, open standards) | — | Principles overlap PAERA's ten but are not mapped to them |
| e-Gov Interoperability Framework 2021 | — | Partial (message formats imply an entity model) | Partial (approved-standards list) | Partial (implicit in standards choice) | — | Governance committee defunct; content may still be reusable |
| Linkup (X-Road 7.x) | — | — | **Covered** for the Information Mediator pattern | — | — | A working implementation of one BB, not a library |
| PNIA National ID / e-KYC | — | — | **Covered** for the Identity BB | — | — | No adoption framework for sectors |
| Education Sector Plan 2023–2028 | — | — | — | — | — | Strategy only; names the NLR (a Registry BB candidate) |
| GovStack membership / 50-in-5 | — | Access to PAERA metamodel | Access to BB specs and sandbox | Access to PAERA principles | Access to method | Access, not adoption — nothing localised yet |

- **Already covered (and where):** foundation (3) is the strongest — two building blocks (Identity via PNIA, Information Mediator via Linkup) exist as running systems, and GovStack membership gives access to the rest of the specifications. Foundation (4) has a partial local base in the Roadmap's eight principles.
- **Needs to be built:** foundations (1) taxonomy and (2) metamodel have no local equivalent at all — no document classifies Progressa's bodies as PDU/RA/SDA or defines capability, service and data domain. Foundation (5) methodology is absent; the Roadmap lists projects but no lifecycle, roles or sign-offs.
- **Needs reframing rather than rebuilding:** the 2021 Interoperability Framework's standards list can be re-issued as the technical annex of a PAERA-anchored EA rather than a standalone framework; the Roadmap's eight principles should be mapped onto PAERA's ten and extended, not replaced — that keeps cabinet's existing commitment intact.""",
        annotations=[
            ("Two foundations came back completely empty, and that is the finding", "No taxonomy, no metamodel. A Strategist reading this now knows exactly what the first six weeks of an EA programme produce — and can say so in the business case."),
            ("The safeguard fired on the Roadmap principles", "The model rated them 'Partial' and noted they are not mapped to PAERA's. It could not read the document; you can. Open the Roadmap and check whether the eight principles say what the summary claims before repeating 'partial' in a cabinet paper."),
            ("Watch the 'Covered' cells", "Linkup and PNIA cover two building blocks as implementations. They do not cover foundation (3) as a library. The table is right; a hurried reader will still conclude 'we have building blocks'. Say 'two of roughly twenty' out loud."),
            ("The reframing bullet is politically valuable", "Keeping the Roadmap's principles and re-issuing the 2021 Framework as an annex protects two existing cabinet commitments. That is the kind of line that turns PAERA from 'yet another framework' into 'the thing that rescues what we already did'."),
        ],
        what_next="""Read the two documents the model could not (the Roadmap and the 2021 Framework) and correct the table. The gaps in foundations (1), (2) and (5) tell you which roles you need in the RACI in [1.6](./1-6.md) — someone must own the taxonomy and the method. Workbook artefact **A5**.""",
    ),
),
dict(
    yt=None, id="1.6", slug="1-6-the-lifecycle-on-one-page",
    title="The lifecycle on one page",
    yt_title="The 5-phase Enterprise Architecture lifecycle — commission a national EA in six months",
    runtime="~5 min", paera="§3.1.3 Readiness Assessment; §5.4 Organisational Assessment & Roadmap",
    message="Six months from start to a roadmap your minister can take to cabinet. Then ongoing governance. Five phases. Four sign-offs. One continuous practice.",
    concept="""If you take one picture away from this knowledge product, take this one: the EA lifecycle on a single page. The picture on the wall of the EA Board room, in every cabinet briefing, and on the screen when your team explains where the work is. Five phases, each answering a single question, each producing a single deliverable, each ending with a sign-off by the senior decision-maker. The first four together take about six months; the fifth is ongoing.

```mermaid
flowchart LR
    D["Discover\\n3–4 wk\\nWhat exists today?"] -->|sign-off 1| A["Assess\\n6–8 wk\\nWhat is the gap?"]
    A -->|sign-off 2| Ad["Adapt\\n4–6 wk\\nWhat fits our country?"]
    Ad -->|sign-off 3| P["Plan\\n6–8 wk\\nHow do we get there?"]
    P -->|sign-off 4| E["Execute & Govern\\nongoing\\nHow do we sustain this?"]
    E -.->|quarterly Board review| E
```

**Discover:** what exists today? Your architects map the current landscape: strategies in force, systems, sector plans, stakeholders, legal framework. The deliverable is a Discovery brief with no recommendations yet; the sign-off is that the picture is accurate enough to build on. **Assess:** what is the gap? Architects compare Discovery against PAERA-anchored standards, write the current state in the four parts of an EA, produce maturity scorecards and the gap analysis; the sign-off is that the gap analysis reflects ground truth. **Adapt:** what fits our country? PAERA is a starting point, not a constraint; architects shape the framework with sector CIOs and the Board, and for each building block ask whether to build, buy from the marketplace, share another country's, or test in a sandbox first. **Plan:** how do we get there? Target state, sequenced roadmap, investment estimates; the Board approves and commits budget. This is the deliverable your minister takes to cabinet. **Execute & Govern:** how do we sustain this? The roadmap becomes a project pipeline, the small permanent EA team turns the EA into a living repository, and the Board reviews new projects against the architecture, quarterly, indefinitely.

Notice the rhythm. Four sign-offs in six months. Your minister does not review every diagram; they review at four moments, each tied to a defined deliverable. Between sign-offs the architects work, and the minister's job is to remove obstacles — the political ones, mostly. The phases depend on each other in order: discover before you measure, measure before you adapt, adapt before you plan, plan before you execute, govern always. You can skip a phase, but you will pay for it later, usually several times what skipping appeared to save. Six months to an approved roadmap, then your country in permanent EA-governed mode — that is what "months, not years" actually means.""",
    sources=["PAERA v1.0 §3.1.3 Readiness Assessment; §5.4 Organisational Assessment & Roadmap — https://paera.govstack.global"],
    play=dict(
        input_ref="A0 §4 Institutional roles register",
        title="Draft a phase-by-phase RACI for your country's EA programme",
        est="~15 min",
        example_context=None,
        kind="drafting",
        does="Before the lifecycle starts, the Strategist needs to know who in their country plays which role at which phase. This play produces a draft RACI matrix that surfaces the role gaps.",
        when="Before Discovery starts. The role-gap list is the thing to resolve first.",
        prompt="""Below is a description of [country X]'s existing institutional roles relevant to a national EA programme: [list the CDO/CTO or equivalent, sector ministry CIOs, ICT unit head, any existing EA function, the Governance Board if one exists, the procurement authority, the data protection regulator, the budget authority — and any roles you know are missing]. For each phase of the PAERA-anchored EA lifecycle (Discover, Assess, Adapt, Plan, Execute & Govern), draft a RACI matrix — who is Responsible, Accountable, Consulted, Informed. Identify any role gap (a phase responsibility with no existing role to assign it) and flag for resolution before the phase starts. Output: a 5-row RACI table (one row per phase, columns R/A/C/I) plus a 'role gaps' list at the end. For each role gap, name the phase it blocks and give 2–3 resolution options. Return the output as text in this chat, not as a file.""",
        inputs="A list of existing roles in the country, each tagged confirmed / partial / gap. Posts, not names.",
        outputs="A per-phase RACI matrix plus a list of role gaps to resolve.",
        safeguard="A RACI is only as useful as the people named in it have actual authority — if the 'Accountable' role for a phase is unclear in the country, the gap matters more than the matrix.",
        feeds=["1.7"],
        artefact="A6 — Phase RACI and role-gap list",
        skill="ea-governance-drafter",
        skill_also=["ea-institution-mapper"],
        example_input=PROGRESSA_ROLES,
        example_output="""| Phase | Responsible | Accountable | Consulted | Informed |
| --- | --- | --- | --- | --- |
| Discover | PDGA architecture unit (senior architect + analysts) | PDGA Director-General | Sector CIOs (MoEYS, Health, SPA); PNIA Director; Civil Registration; Data Protection Commission | Minister of ICT; Ministry of Finance budget dept |
| Assess | PDGA architecture unit | PDGA Director-General | Sector CIOs; PNIA; Procurement Authority (for existing-contract review); Data Protection Commission | Minister of ICT; ICT Steering Committee (if revived) |
| Adapt | PDGA architecture unit with sector CIOs | **⚠ EA Governance Board — does not exist** (interim: Minister of ICT) | PNIA; Procurement Authority (build/buy/share); Data Protection Commission; Ministry of Finance | Cabinet secretariat; donors (World Bank, AfDB, Global Fund) |
| Plan | PDGA architecture unit | **⚠ EA Governance Board — does not exist**; budget commitment: Minister of ICT + Ministry of Finance | Sector CIOs; Ministry of Finance budget dept; Procurement Authority; donors | Cabinet |
| Execute & Govern | **⚠ Permanent EA team — does not exist** (current unit is 1 contract architect) | **⚠ EA Governance Board — does not exist** | Sector CIOs; PNIA; Data Protection Commission; Procurement | Minister of ICT; Cabinet (annual) |

Role gaps to resolve before the phase starts:
1. **EA Governance Board** — Accountable role for Adapt, Plan and Execute & Govern has no holder. The ICT Steering Committee is dormant and was advisory. Needs a binding body with a chair (PDGA DG or Minister) before Adapt begins. → See play 1.7.
2. **Permanent EA team** — Responsible role for Execute & Govern has no holder; the one senior architect is donor-funded on contract. Needs 2–4 established posts before the end of Plan.
3. **Ministry of Agriculture CIO** — no ICT director; the Planning unit cannot represent the Farmer Registry in Consulted roles. Nominate a named officer before Discover.
4. **Multi-year budget authority** — Ministry of Finance runs annual cycles only; the Plan sign-off requires a commitment instrument that does not currently exist. Resolve with Finance before Plan, not during it.
5. **Data Protection Commission capacity** — Consulted in every phase with six staff and no enforcement history; confirm they can respond within phase timelines or agree a named liaison.""",
        annotations=[
            ("Three cells are flagged ⚠ and they all point at the same two missing things", "A Board and a team. That is the whole of 1.7 in one table. The RACI did its job by making the absence visible in the Accountable column — the safeguard's exact point."),
            ("The interim Accountable ('Minister of ICT') is the model's suggestion, not Progressa's decision", "It is a reasonable placeholder. Do not leave it in the version you circulate unless the Minister has agreed to hold that role until the Board exists."),
            ("Gap 4 is the one people miss", "The budget-cycle gap is institutional, not organisational — no post can fix it. The model found it because the input said 'no multi-year envelopes'. Thin inputs produce thin gap lists; this is why the roles input asks you to state what is missing."),
            ("Donors appear only as Informed", "Argue with that. In Progressa three donors fund the sectoral systems the EA will govern; many countries would put them in Consulted for Adapt. The RACI is a proposal — the boundary is yours to move."),
        ],
        what_next="""Gaps 1 and 2 are asks 1 and 2 in [1.7](./1-7.md); gap 4 is ask 3. Take the role-gap list, not the matrix, into the meeting with your minister. Workbook artefact **A6**.""",
    ),
),
dict(
    yt=None, id="1.7", slug="1-7-what-you-will-need-from-your-minister",
    title="What you will need from your minister — and how to ask for it",
    yt_title="Four asks every digital-government middle manager must make to commission a national EA",
    runtime="~5 min", paera="§4.2.1 Management; §4.2.2 Architecture; §5.4 Organisational Assessment & Roadmap",
    message="Four asks. A small permanent EA team. An EA Board with real authority. About two per cent of digital budget, sustained for five years. And one promise — that the team will not be pulled onto the urgent project of the week.",
    concept="""Suppose you have made the case and your minister is convinced. Now the harder part: agreeing the four specific things the minister must commit to. Each is necessary. Without any one of them the programme will struggle to deliver what it could.

**Ask 1: a small permanent EA team.** Two to four senior architects, permanent, reporting to your CDO or equivalent. Not project consultants who arrive and leave; not a temporary unit. The institutional home of architecture work in your country, which exists whether or not any single programme is running. That is the point: it is the country's permanent muscle for cross-cutting digital decisions. Smaller countries can run it with two senior people, each carrying several domains.

**Ask 2: an EA Board with real authority.** Chaired by your CDO or by the minister directly. Members: sector ministry CIOs, owners of the major state registers, and where useful an external advisor. Quarterly meetings, ad-hoc sessions for urgent decisions. The hardest part: the mandate must be binding, not advisory. The Board reviews new digital projects against the architecture, approves cross-ministry integrations and enforces boundaries between architectural domains. Without binding authority the EA becomes documentation nobody reads; with it, the EA becomes the place every digital decision passes through.

**Ask 3: a sustained budget envelope.** Three parts: the initial six-month engagement that runs the first four phases (about ten to fifteen senior person-months); the permanent practice (your two to four architects, ongoing); and governance overhead (Board time, occasional external review). As a share of the digital-government budget, typically about two per cent. What you want is a five-year envelope, not an annual line that disappears when priorities shift. This is the leverage decision: every other digital programme runs more efficiently when this two per cent is in place.

**Ask 4: one promise about protection.** The EA team will not be pulled onto the urgent project of the week. Not by you, not by the minister, not by anyone in cabinet. Get it in writing if you can. The most common way EA programmes quietly die is in their second year, when the team is moved onto a flagship delivery and the architecture work stops. The promise must be explicit, visible and recommitted whenever the minister changes.

And one honest note on time horizon: six months to an approved roadmap, eighteen to twenty-four months to a fully operating practice, five years to mature governance. The minister who launches this work will not be the one who completes it. A minister who hears that as a problem is sponsoring a deliverable, not an EA; a minister who hears it as a feature is the right minister to commission this work. A team, a Board, a budget envelope, a promise. Put them on a single page, bring them to the meeting, ask for all four together.""",
    sources=["PAERA v1.0 §4.2.1 Management; §4.2.2 Architecture; §5.4 Organisational Assessment & Roadmap — https://paera.govstack.global"],
    play=dict(
        input_ref="A0 §4 Institutional roles register (posts only) and the gap list from A6",
        title="Draft a Terms of Reference for your EA Governance Board",
        est="~20 min",
        example_context="A1, A3 and A6 were in the session above the prompt.",
        kind="drafting",
        does="A Strategist who agrees with this video needs to actually establish the Governance Board. This play produces a country-tailored Terms of Reference document.",
        when="After the RACI (1.6) has shown you the Board is missing, and before the meeting where you make the four asks — bring the draft ToR as the answer to ask 2.",
        prompt="""Draft a Terms of Reference for an EA Governance Board in [country X]. Include: (1) Purpose — why the Board exists and what it governs; (2) Binding decision scope — list 5–8 specific decision types within the Board's authority (e.g. approval of new digital-government projects above a threshold, cross-domain integration approvals, technology selections that create new vendor dependencies, exceptions to the architecture); (3) Membership composition — Chair (CDO/CTO equivalent), permanent members (sector ministry CIOs by name or by post), optional external advisor; (4) Cadence — quarterly main meetings, ad-hoc for urgent decisions; (5) Reporting line — to whom the Board reports up; (6) Escalation — how decisions the Board cannot resolve get escalated; (7) Mandate review — how often the Terms of Reference itself is reviewed. Tone: formal, ministerial document. Length: 1–2 pages. Output: structured Terms of Reference ready to circulate for cabinet approval.""",
        inputs="The country name and known role-holders (by post).",
        outputs="A structured ToR document.",
        safeguard="Have the country's legal counsel review the document before it is formally adopted — particularly the 'binding decision scope' section, which interacts with existing sectoral legislation.",
        feeds=["M3"],
        artefact="A7 — EA Governance Board Terms of Reference",
        skill="ea-governance-drafter",
        skill_also=["ea-legal-context"],
        example_input="""Country: Progressa. Known posts: Minister of ICT; PDGA Director-General (proposed Chair); sector CIOs at MoEYS, Ministry of Health, Social Protection Agency; Ministry of Agriculture (no CIO; Planning unit head); PNIA Director; Civil Registration Director; Ministry of Finance budget department; Data Protection Commissioner; Public Procurement Authority. Threshold for project review to be set in local currency equivalent of about USD 500,000.""",
        example_output="""**TERMS OF REFERENCE — PROGRESSA ENTERPRISE ARCHITECTURE GOVERNANCE BOARD**
*Draft for cabinet approval*

**1. Purpose.** The Progressa Enterprise Architecture Governance Board (the Board) is established to govern the national Enterprise Architecture as the agreed description of the Government of Progressa's services, data, applications and technology. The Board ensures that digital-government investments, whether state- or partner-funded, build on shared national foundations rather than duplicating them, and it is the forum in which business and technology leadership decide jointly on matters that cross ministerial boundaries.

**2. Binding decision scope.** The following decisions require the Board's approval and are binding on all ministries, agencies and statutory bodies of the Government of Progressa:
(a) approval of any new digital-government project with a total value above PGR [≈ USD 500,000], or any project regardless of value that creates a new register of persons, businesses or land;
(b) approval of any cross-ministry integration, and of membership applications to Linkup;
(c) technology selections that create a new vendor dependency lasting beyond three years, including maintenance contracts on existing systems;
(d) exceptions to the national architecture, including any proposal to build identity, payment or data-exchange functions that a national building block already provides;
(e) designation of authoritative data sources and their custodians (e.g. the National Learner Registry);
(f) adoption of, and changes to, the national architectural principles and standards annex;
(g) the sequencing of the national EA roadmap and any change to it.

**3. Membership.** Chair: Director-General, Progressa Digital Government Authority. Permanent members: ICT Director, Ministry of Education, Youth and Skills; ICT Director, Ministry of Health; IT Manager, Social Protection Agency; a designated representative of the Ministry of Agriculture at director level; Director, Progressa National ID Authority; Director, Civil Registration Department; a director-level representative of the Ministry of Finance budget department. Standing observers: the Data Protection Commissioner and the Public Procurement Authority. The Chair may invite one external advisor without voting rights. Secretariat: the PDGA architecture unit.

**4. Cadence.** Ordinary meetings quarterly. Extraordinary meetings within ten working days of a request by the Chair or any two members. Quorum: the Chair and four permanent members including at least two sector representatives.

**5. Reporting line.** The Board reports to the Minister of ICT and, through the Minister, annually to Cabinet on the state of the national architecture and compliance with these Terms.

**6. Escalation.** Decisions on which the Board cannot reach agreement, or which a member ministry contests, are referred by the Chair to the Minister of ICT within five working days. Where the matter concerns the budget of another ministry, the Minister of ICT resolves it jointly with the responsible minister; unresolved matters go to Cabinet.

**7. Mandate review.** These Terms of Reference are reviewed by the Board after twelve months of operation and thereafter every three years, or on a change of Minister. Amendments require Cabinet approval.""",
        annotations=[
            ("Scope item (a) has a second trigger the prompt did not ask for", "'…or any project that creates a new register of persons' — the model added it because of the duplicate-registry diagnostic earlier in the chain. It is a good clause and exactly the one Progressa needs. It is also the one that most needs legal counsel, because it touches sector statutes."),
            ("The Ministry of Agriculture seat is handled honestly", "There is no CIO, so the ToR asks for a 'director-level representative'. That is the RACI gap 3 from 1.6 turned into a membership clause. Chains of plays make each artefact sharper."),
            ("'Binding on all ministries' may not be something the Minister of ICT can grant", "In many constitutions a ministerial board cannot bind another ministry; it needs a cabinet decision or an instrument under the public-finance law. This is precisely why the safeguard says counsel first — and why the reporting line to Cabinet in §5 matters."),
            ("Budget authority sits in the room but not in the scope", "Finance is a member; the Board cannot approve money. That is correct and worth saying aloud to a minister who will ask 'so what does the Board actually control?' — it controls the architecture; Finance controls the envelope (ask 3)."),
        ],
        what_next="""Send to legal counsel. Bring the draft to the four-asks meeting as the concrete form of ask 2, with the RACI gap list (A6) as the reason and the business case (A3) as the money. This is the last artefact in Module 1; together A1–A7 are your draft cabinet-briefing pack. The Board's operating procedures are built out in Module 3. Workbook artefact **A7**.""",
    ),
),
dict(
    id="1.8", slug="1-8-four-signposts", play_only=True, retired=True,
    title="Four signposts — three African, one international",
    yt_title="Three African digital-government programmes (plus Estonia) — and what they teach",
    runtime="~5 min", paera="§5.7 Recommended Roadmap (intermediate-results pattern); §3.4.3 Interoperability",
    message="Rwanda, Kenya and South Africa show the pattern at African scale and in different governance shapes. Estonia is the international polestar. The pattern travels. Your country can apply it too.",
    concept="""Four countries did the work. Three are in Africa and differ in size, resources and governance type — and the EA pattern shows in all three. The fourth is Estonia, the most-cited international example, useful as a reference but with a very different starting context.

**Rwanda — small country, strong central authority.** The Ministry of ICT and Innovation, with Irembo as the unifying citizen-services platform, a national ID linked across services, and small but disciplined central coordination. The lesson: in a smaller country with political will the lifecycle can be compressed, and gains in the second and third sectors come faster than the first.

**Kenya — Huduma Centres and Huduma Namba.** Physical one-stop centres for many government services, with the Huduma Namba programme attempting a unifying digital identity underneath. The results are mixed and openly debated in Kenya's public arena. The lesson is not "Kenya solved this" — it is that Kenya tried, met concrete obstacles in courts, parliament and implementation, and the debate is documented and useful. It tells you what to plan for.

**South Africa — SITA and the federated model.** A federal democracy with strong provincial governments and constitutionally autonomous statutory bodies, where architecture cannot be imposed from the top. SITA coordinates: shared standards, common procurement frameworks, a maintained reference architecture that agencies adopt rather than have imposed. The lesson: where sub-national governments or autonomous bodies carry real authority, federation — coordination without coercion — is the realistic pattern.

**Estonia — the international polestar.** The Information System Authority (RIA), X-Road as the data-exchange backbone, distributed state registries owned by their accountable agencies, and the Once-Only principle. Almost every public service runs online. A small unitary state with very different starting conditions from most African countries: use it as a polestar for what mature digital government looks like, not a template to copy.

Four very different countries, the same elements in all four: a small central team with real authority; a published framework other agencies adopt rather than fight; binding governance; a horizon measured in years for full maturity with intermediate results visible inside months. These are not outliers. They are what committing to the lifecycle, the team, the governance and the time horizon looks like in practice. The pattern travels. The rest of this knowledge product shows you how to do the work, using a fictional country called Progressa so every step is visible in detail.""",
    sources=["Rwanda — Irembo (irembo.gov.rw); Ministry of ICT and Innovation", "Kenya — Huduma Kenya (huduma.go.ke); Huduma Namba", "South Africa — SITA (sita.co.za)", "Estonia — e-Estonia.com; RIA (ria.ee)"],
    play=dict(
        input_ref="A0 §5 Country characteristics",
        title="Generate comparator-country signposts that fit your context",
        est="~15 min",
        example_context=None,
        kind="diagnostic",
        does="Rwanda, Kenya, South Africa and Estonia are useful starting signposts but may not be the most directly comparable to your country. This play produces a comparator list tuned to your country's situation — for a cabinet briefing or a donor pitch.",
        when="When you need a 'countries like ours did this' slide. Run it with a tool that can browse and cite; the play is only as good as the sources you then open.",
        prompt="""My country is [country X], with these characteristics: [population, income classification, governance type (unitary / federal / hybrid), region, key political constraints, current digital-government maturity]. Drawing on publicly documented EA programmes — give priority to African and other developing-country examples — list 3 to 5 countries with similar characteristics that have a published national EA framework or comparable digital-government coordination function. For each: country name, similarity rationale (one sentence on why it is comparable to [country X]), what they actually built (2 to 3 bullets), one transferable lesson for [country X]. Cite a public source URL for each substantive claim — government strategy documents, published frameworks, peer-reviewed case studies, or credible journalism. Avoid examples where the public information is marketing rather than substance. Prefer primary sources — government sites, official documents, peer-reviewed work — and mark any mirror or blog source as secondary. Output: per-country card plus a 2-bullet 'most transferable lessons' summary, as text in this chat.""",
        inputs="Country characteristics.",
        outputs="3 to 5 comparator cards plus a transferable-lessons summary.",
        safeguard="A country example is useful only if the public source supports the claim — discard any example where the cited URL does not explicitly document what the prompt says it documents. Be especially careful with Kenya's Huduma Namba — there is contested public information; cite the contested sources too.",
        feeds=["1.7"],
        artefact="A8 — Comparator-country cards",
        skill="ea-comparator-evidence",
        skill_also=["cite-or-discard"],
        example_input=PROGRESSA_CHARACTERISTICS,
        example_output="""**Rwanda** — *Similar because:* small unitary state, early GovStack engagement, national ID as the anchor, donor-funded sectoral systems.
- Built a single citizen-service portal (Irembo) fronting services from many ministries, operated under a public–private arrangement. [source: irembo.gov.rw — VERIFY]
- Linked national ID to service access across sectors under central coordination by the Ministry of ICT and Innovation. [source: minict.gov.rw — VERIFY]
- *Transferable lesson:* a small central unit with real authority can compress the lifecycle; Progressa's PDGA has the unit but not the authority.

**Benin** — *Similar because:* lower-middle-income, unitary, Francophone West Africa, built an interoperability platform and a national digital agency within a decade.
- Established a national digital agency (ASIN) consolidating earlier bodies, and a national interoperability platform. [source: asin.bj — VERIFY]
- Deployed a national e-services portal (service-public.bj). [source: service-public.bj — VERIFY]
- *Transferable lesson:* consolidating fragmented digital bodies into one agency with a mandate preceded the platform work — the sequence Progressa is deciding now.

**Kenya** — *Similar because:* East Africa, delegated county administration, contested identity programme, active civil-society scrutiny.
- Huduma Centres as physical one-stop shops. [source: hudumakenya.go.ke — VERIFY]
- Huduma Namba unified identity, halted by court rulings on data protection and later re-launched as Maisha Namba. [sources: contested — court judgment and press coverage — VERIFY BOTH SIDES]
- *Transferable lesson:* run the data-protection legal basis before the identity rollout, not after; Progressa's 2023 Act and six-person Commission are the constraint to plan around.

**Ghana** — *Similar because:* lower-middle-income, unitary, national ID (Ghana Card) at high coverage, interoperability across tax, pensions and health insurance.
- Ghana Card integrated with tax identification, SSNIT and the health-insurance register. [source: nia.gov.gh — VERIFY]
- Interoperability platform and a national digital-property addressing system. [source: — VERIFY]
- *Transferable lesson:* linking the ID to two or three high-volume registers created the demand that pulled other sectors on — a sequencing choice for Progressa's Linkup member roadmap.

Most transferable lessons:
- In every case the coordinating body gained binding authority *before* the cross-sector results appeared; the platform alone did not produce them.
- The countries that stalled did so on identity legal basis, not on technology — front-load the data-protection work.""",
        annotations=[
            ("Every source is marked VERIFY — and that is what a good draft looks like", "None of these URLs has been opened. The safeguard is the whole play: open each one, and if it does not say what the card says, discard the claim. In this draft the Ghana second bullet already has an empty source and must go unless you find one."),
            ("Kenya is presented with both sides flagged", "The prompt's safeguard asked for contested sources to be cited too; the card says 'VERIFY BOTH SIDES'. Cite the court judgment and the government's account in the final version, not one of them."),
            ("Benin and Ghana are better comparators than Estonia for Progressa", "That is the value of running the play rather than reusing the video's four. The model matched on income class, governance type and sequence — not on fame."),
            ("Do not paste these cards into a briefing as they stand", "They are structurally right and factually unverified. Two hours with the sources turns them into something you can defend; ten minutes does not."),
        ],
        what_next="""Open every source. Keep the cards that survive. The two summary lessons — authority before results, legal basis before identity — are the closing slide of the four-asks meeting in [1.7](./1-7.md), so this artefact joins the cabinet-briefing pack even though it is the last in the module. Workbook artefact **A8**.""",
    ),
),
]

SUBTOPICS = [s for s in ALL_SUBTOPICS if not s.get("retired")]

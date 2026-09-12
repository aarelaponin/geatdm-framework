"""KP2 home-page material that used to be Module 6 (retired 12 Sep 2026, mirroring the KP1
decision of 3 Sep). The three genuinely new plays of Module 6 became 5.8–5.10 and render from
`build_kp2_module5_v02.js`; the three pieces here were not framework content but the product's
own framing, so they live on the site rather than in a video:

- the AI-play catalogue (former 6.1) — the site's own module table, grouped by configuration layer;
- the four role-paths (former 6.5) — the dissemination outline, ToR §4.7;
- the country storyboard (former 6.6) — the through-line of KP2, and the one Module 6 prompt a
  Strategist still needs (a minister-ready storyboard of their own country): a play with no video.

Voice-over prose is carried verbatim from `KP2-GIF/_retired/build_kp2_module6_v01.js` where it is
still true after the fold; the ownership of this text is now the site's.
"""

# ---- former 6.1: the one pattern every play shares ----
CATALOGUE_INTRO = (
    "Across KP2 you meet thirty-seven AI plays — named tools, each turning a slow specialist task into a "
    "fast, reviewed draft. They are worth reading as one catalogue, because they are not one-off tricks. They "
    "are a reusable toolkit your framework keeps and applies to every decree, every exchange, every service it "
    "builds. Three of them stand out: the decree drafter turns your Strategic Foundation Document into the "
    "components of a decree (2.3, 2.4); the semantic mapper turns two agencies' field lists into a shared "
    "semantic map (4.4); and the service-contract generator turns a service brief and that semantic map into a "
    "callable contract (4.5). Three slow specialist tasks — legal drafting, semantic reconciliation, interface "
    "design — each compressed from weeks into a reviewed afternoon."
)
CATALOGUE_PATTERN = (
    "Notice they share one pattern, and it is the pattern worth remembering. Each play generates from a "
    "published specification and a brief. Each output is confirmed against the source — the statute, the "
    "registry, the provider — before it is used. And a qualified human owns the result: the lawyer for the "
    "decree, the data owner for the semantic map, the architect for the contract. Generate fast, confirm "
    "carefully, a human always owns the result. That discipline is what makes AI a tool the framework can "
    "trust rather than a risk it runs."
)
CATALOGUE_LEVERAGE = (
    "The value to you as the Strategist is leverage. A small team, with these plays, can draft a framework "
    "that would otherwise need scarce, expensive specialists for months. The plays do not replace the "
    "specialists — they let a few of them go much further. And because the plays are a catalogue, they are "
    "reused: the same decree drafter serves the next sector's decree, the same semantic mapper serves the next "
    "exchange. You build the toolkit once and apply it everywhere the framework grows."
)
CATALOGUE_SAFEGUARD = (
    "The catalogue's value is in the confirm step — every entry below names what the output is checked "
    "against and who owns it, so no one treats a generated draft as final. A catalogue that lists the plays "
    "but drops the confirm-and-own discipline teaches the dangerous half of the lesson."
)

# ---- former 6.5: the four role-paths ----
ROLE_PATHS_INTRO = (
    "This knowledge product covers the whole framework, but no single person does all of it. A governance "
    "lead does not draft articles; a technical architect does not write decrees. So the content is shaped into "
    "role-paths — curated routes through the videos, the plays and the build pack for each role that builds a "
    "framework — so a learner finds their lane instead of being asked to watch everything."
)
# (role, who, subtopics they follow, the build-pack artefact their path ends at, what they can do after)
ROLE_PATHS = [
    ("Strategist", "the national interoperability authority, a ministry CIO, a Ministry of Justice sponsor or a development-partner lead — who commissions and oversees the whole",
     ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "5.1", "5.9", "5.10"],
     "the Strategic Foundation Document, the Use-Case Catalogue and the four-phase plan — and the sector-portability map for the next sector",
     "Make the case, set the foundation, fund the build in phases, and take the framework to the next sector."),
    ("Governance lead", "the person who will run the Operating Authority or chair the Steering Committee",
     ["1.1", "1.2", "1.3", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "5.9"],
     "the Governance Pack — the organisational configuration of the framework",
     "Stand up the three tiers, the RACI and the Working Groups — with the regulator and the operator kept apart — and keep the framework current instead of frozen at launch."),
    ("Legal drafter", "the Ministry of Justice or ministry legal officer who drafts the decree",
     ["1.4", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "4.8"],
     "the decree — the legal configuration of the framework, and the data-protection envelope of each exchange",
     "Draft, check and move an interoperability decree that authorises exactly the exchanges in the catalogue."),
    ("Technical architect", "the chief or senior architect, integration lead, or agency technical lead building on the bus",
     ["1.2", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "5.5", "5.6", "5.7", "5.8"],
     "the semantic map, the service contracts and the X-Road service descriptions — the technical configuration — and the running federation",
     "Design the layers, adopt the standards, generate the semantic map and contracts, stand the federation up, prove it and watch it."),
    ("Member-onboarding lead", "the Operating Authority's onboarding officer, or an agency's focal point for joining",
     ["1.6", "3.4", "5.2", "5.3", "5.4"],
     "the member registrations — Member Requirements, the SLA, and the subsystem + access-control list that admits an agency to the bus",
     "Take an agency from 'wants to join' to 'admitted, registered and dependable'."),
]
ROLE_PATHS_REACH = (
    "The value is reach. A knowledge product that asks every viewer to watch everything reaches few; one that says "
    "'if you are the legal drafter, watch these videos and use these plays' reaches each role where they are. The "
    "role-paths are how KP2 gets used rather than just published — and how a country trains the actual, distributed "
    "team that builds its framework, each member learning their part."
)
ROLE_PATHS_MAP = (
    "The role-paths map cleanly onto the build pack. The legal drafter's path ends at the decree "
    "configuration; the technical architect's at the semantic map and the service contracts; the onboarding "
    "lead's at the member registrations. Each role learns its part and produces its part of the runnable build "
    "pack. So dissemination is not just teaching — it is how the framework actually gets built, by a distributed "
    "team each contributing the artefact their role owns. The knowledge product and the build pack are two "
    "halves of the same thing: what to do, and what to produce."
)
ROLE_PATHS_SAFEGUARD = (
    "Role-paths curate, they do not silo. Each path notes the cross-dependencies the role must coordinate on — "
    "the architect needs the legal drafter's decree; the onboarding lead needs the architect's contracts — so a "
    "team that learns in lanes still builds one coherent framework."
)

# ---- former 6.6: the country storyboard ----
STORYBOARD_MESSAGE = (
    "The storyboard of a country going from nothing to its first live once-only exchange, mapped to the five "
    "modules — on an honest calendar, with a first visible service long before national coverage."
)
STORYBOARD_INTRO = (
    "End where a Strategist needs to end — with the whole journey in one picture. A country that starts with no "
    "interoperability framework, and the path it walks to its first live once-only service. This is the "
    "storyboard, and it is the through-line of everything this knowledge product teaches: the foundation, the "
    "decree, the governance, the architecture, the build, and a citizen finally asked once."
)
STORYBOARD_STEPS = [
    ("Module 1", "name the mandate, catalogue the exchanges, map the stakeholders",
     "The country starts with fragmentation — the citizen at five counters. The Strategist writes the Strategic Foundation Document, ranks the exchanges in a Use-Case Catalogue, and maps the stakeholders."),
    ("Module 2", "draft and enact the decree",
     "The decree is drafted and enacted — the legal on-switch."),
    ("Module 3", "stand up the three-tier governance and the Operating Authority",
     "The three-tier governance and the Operating Authority are stood up."),
    ("Module 4", "design the layers, adopt the standards, generate the semantic map and contracts",
     "The architects design the four layers, adopt the standards, and generate the semantic map and the service contracts."),
    ("Module 5", "stand up the federation, onboard members, run the once-only call — then operate it",
     "The federation is stood up, the first members are onboarded and conformance-tested, and the once-only exchange runs — a learner applies for a credential and is asked once. A first pilot service, live, with both go-live approvals recorded. Then the bus is watched from its logs, the framework's documents are kept honest, and the next sector is planned."),
]
STORYBOARD_TIMEFRAME = (
    "The time frame is the part that matters to a minister, so tell it honestly. The foundation — the decree, the "
    "governance, the architecture and the standards — is a year to eighteen months of work, longer in calendar time "
    "because legislative and budget cycles do not hurry. Then the four build phases: the platform and its first "
    "pilot members in the first six months, the first cross-ministry once-only exchanges in the second, the "
    "first-wave sectors by month eighteen. The first real milestone — a running platform with a handful of member "
    "services — lands two to three years from the day the programme starts; national coverage is a four-to-six-year "
    "programme. Not years of silent build and then a big-bang launch, but not six months either: a visible, gated "
    "win each phase, on a calendar the minister heard on day one. That is what makes the framework fundable and "
    "survivable — a plan that is still believable when the launch enthusiasm fades and the minister changes."
)
STORYBOARD_WHY = (
    "Step back to see why it worked, because that is the deeper lesson. At every step, the framework gave the "
    "policy side and the technical side a shared language and a shared rhythm to decide together — the decree, "
    "where business and IT agreed the lawful exchanges; the semantic map, where they agreed what the data means; "
    "the governance table, where they sat together. A framework is, in the end, the shared language that lets "
    "business and IT build the new thing together. Without it, the conversation the build requires never "
    "happens, and the project stalls. That is why this storyboard ends in a working service rather than a "
    "stalled programme."
)
STORYBOARD_CLOSE = (
    "An interoperability framework is built, not bought — and once it exists, procurement is how it is enforced. "
    "It is built in deliberate, gated phases, on an honest calendar. And it ends in a real once-only exchange that "
    "a citizen actually feels — asked once, not five times. A country with no framework can walk this exact path: "
    "name the foundation, pass the decree, govern it, architect it, stand it up, and ask the citizen once."
)
STORYBOARD_PLAY = dict(
    id="home", title="Draft your country's no-framework-to-first-service storyboard",
    does=("A Strategist needs a one-page storyboard taking their country from no interoperability framework to "
          "its first live once-only service, mapped to the five modules and the phased plan — a narrative for a "
          "minister or a funder. This prompt drafts it."),
    prompt=("Draft a one-page storyboard for [country X] going from no Government Interoperability Framework to "
            "its first live once-only service. Use this context [paste: the first exchange you want to enable, "
            "the agencies involved, any constraints]. Structure it as the journey across the five modules: (1) "
            "the starting fragmentation (the citizen's repeated burden today); (2) foundation — mandate, use-case "
            "catalogue, stakeholders; (3) the decree; (4) governance; (5) architecture, standards, semantic map, "
            "contracts; (6) stand-up, onboarding, the live once-only exchange — ending with the citizen asked "
            "once. Map it to the phased plan on an honest calendar: the foundation first (a year to eighteen months), "
            "then the first pilot members in the build's first six months, the first cross-ministry once-only exchange "
            "in the second, first-wave coverage by month eighteen, national coverage over four to six years. Close with one line on why it works: the framework gives business and IT a shared language to "
            "build together. Tone: for a minister or funder. Output: the one-page storyboard."),
    inputs="the first exchange, agencies and constraints.",
    outputs="a one-page no-framework-to-first-service storyboard mapped to the modules and phases.",
    safeguard=("A storyboard is a plan to inspire and align, not a guarantee — keep the timeline honest (the "
               "foundation before the build, the first cross-ministry exchange in the second build phase, national "
               "coverage over years) and avoid promising a big-bang. The credibility of the whole narrative rests on "
               "the first once-only service being genuinely achievable on the calendar stated; do not let the storyboard "
               "over-promise what the first phase delivers."),
)

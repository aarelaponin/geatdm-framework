# KP1 AI usage tips — review, and the Claude skills that would lift them

*Scope: all 37 AI usage tips in the five KP1 script bundles (Module 1 ×8, Module 2 ×7, Module 3 ×7, Module 4 ×8, Module 5 ×7), read against the Gambia play-test synthesis of 30 Aug, the "How to use the plays" chapter, the WP7 AI Plays Catalogue and the six GEATDM skills already in the kit. Date: 2 September 2026.*

## 1. What the review of the 37 tips shows

**The tips are consistent and well-formed.** Every one has the same four-part shape (named input, decomposed task, exact output format, safeguard), and the safeguards are the strongest part of the set — nearly all of them say the same thing in different words: *verify against a named source before you use this.* That single sentence is the design brief for the skills. A skill that does the verification, or that brings the named source in before the draft is written, removes the step the learner is least likely to do on their own.

**Thirty-seven tips collapse to about a dozen distinct artefacts.** The bundles were written to make each subtopic stand alone, so the same artefact recurs in different modules for different personas. The Governance Board ToR appears twice (1.7, 3.4), the sustainment risk register twice (3.7, 5.2), the scored gap analysis twice (2.6, 4.3), the comparator-country cards twice (1.8, 5.1), the sector transfer map twice (4.8, 5.3), the gate check three times (2.7, 3.5, 4.7), and the ministerial one-pager (5.4, 5.7) is 1.3 plus 1.8 assembled. This is fine for the videos but it means the skill layer should be much smaller than the tip layer: one skill per artefact family, not one per tip.

**The tips split cleanly by what they need from the outside world.** Roughly a third are *pure structuring* of what the learner pastes — the four-layer template (2.1), the joint agenda (1.4), the repository schema (3.1), the update policy (3.3), the gate checklist (3.5), the scorecard (3.6), the risk registers (3.7, 5.2), the Discovery brief outline (4.2), the wave roadmap (4.6). These gain little from web search; what they gain from is being grounded in the actual GEATDM toolkit templates and PAERA text rather than the model's general knowledge. The other two-thirds *depend on facts about the country or the world* that the tip currently asks the learner to paste and that the Gambia tests showed they never have: which bodies exist and what their legal mandates say; which laws are in force; which shared building blocks are actually live rather than planned; what comparable countries actually built and where that is documented; what EA tools actually export; which open learning materials actually exist. This is where trusted online sources change the quality class of the output, and where the skills should be concentrated.

**Three factual drifts in the tips themselves are worth fixing, and a skill can carry the correct version.** The metamodel in 2.2 (six entity types, five relationships) is a teaching simplification of PAERA Annex 2; the taxonomy in 2.4, 2.5, 4.1 and 4.8 uses five types where PAERA Annex A1.2 has seven (it drops Horizontal System, Natural Digital Environment and Public Ecosystem — the WP7 catalogue's `ea-classify-org` uses all seven); and the "five foundations" in 1.5 map to PAERA sections that the tip does not name (the Gambia run of `paera-assessor` produced that mapping and it was judged teaching content in its own right). The simplifications are right for a four-minute video; a skill should hold the full version and say when the simplification is being applied.

**The prompts assume text in, text out, and the tests showed the assistant drifts.** Screenshots (1.4), a .docx (1.7), charts (1.3), leaked reasoning (2.5), real office-holders' names instead of posts (1.6). None of this is fixed by better prompt wording alone; a skill can enforce the output contract and the posts-not-names rule as a hard rule rather than a habit the learner has to remember.

## 2. The trusted-source policy every skill should share

Rather than each skill inventing its own idea of "a public source", one shared reference file (`references/source-tiers.md`, included by every skill) should define four tiers and a verification loop.

| Tier | What counts | How the skill treats it |
| --- | --- | --- |
| **1 — Primary / official** | Government gazettes and law portals; ministries' and agencies' own sites; national digital strategies as published; establishing acts; UN, World Bank, ITU, OECD, IMF, UNESCO, UNICEF datasets and reports; the PAERA and GovStack specifications; the Open Group and standards bodies; peer-reviewed journals | Cite freely. A claim needs one Tier 1 source to be stated as fact. |
| **2 — Reputable secondary** | DIAL / ADLI snapshots, ID4Africa, GSMA, Smart Africa, UNECA, Digital Public Goods Alliance registry, MOSIP and X-Road (NIIS) deployment lists, established think tanks (CGD, ODI, Brookings, Carnegie), donor project documents (World Bank PADs and ICRs, EU and FCDO evaluations) | Cite, labelled *secondary*. Prefer to chase the primary it points to. |
| **3 — Journalism** | Named national and international outlets with an editorial process | Use for events (a system launched, a court ruling, a project cancelled) and for contested cases; always paired with the primary if one exists. |
| **Reject** | Document mirrors (docplayer, scribd), personal blogs and Medium posts, vendor marketing, Wikipedia as an end source, content farms, AI-generated summary sites | Never cited. Wikipedia may be used to *find* a Tier 1 source, never as the source. |

The verification loop, which the Gambia synthesis called *cite-or-discard*, becomes mechanical: for every claim the skill emits, it records the URL, the access date, the tier, and a one-line quotation or paraphrase of the passage that supports the claim. Before returning, it fetches each URL and confirms the passage is there; a claim whose source does not support it is dropped or downgraded to "unverified — learner to confirm", never silently kept. Contested cases (Kenya's Huduma Namba is the tip's own example) must carry both the supporting and the contesting source. Every artefact leaves the skill with a provenance header: country, date built, sources by tier, and the artefact number in the country workbook chain.

This policy also answers the calibration item about tool-neutral phrasing: the plays still run bare in any assistant; the skills are the "with the kit" layer, and the source policy is what the kit adds.

## 3. The skills

Eleven skills cover all 37 tips. They are ordered by how much they unlock, not by module. Six of the GEATDM skills already exist (`country-context-data`, `paera-assessor`, `bdat-assessor`, `ea-lifecycle-method`, `govstack-cost-estimator`, `bb-sourcing-researcher`); four of the proposals below are extensions of those rather than new builds, and are marked so.

### 3.1 `country-context-pack` — Play 0 as a skill *(extends `country-context-data`)*

The Gambia tests established that every play has a hidden step before it: building the input. `country-context-data` already knows the statistical APIs (World Bank, ITU DataHub, UN SDG, UNICEF, Giga) but it produces a country brief, not the seven A0 sections the plays consume. This skill takes the country name and returns the A0 pack section by section, each tagged with the plays it feeds: the digital-landscape brief (1.1, 1.2), the programme list with budget envelopes and BB needs (1.3, 1.5), the operating-context and constraints note (1.4), the institutional roles register by post (1.6, 1.7), the country-characteristics one-liner (1.8, 5.1), the public-bodies-and-systems register (2.1, 2.4, 2.5, 4.1), and the legal and policy list (2.3, 1.7). It gets programmes and budgets from national budget documents, donor project documents (World Bank PADs describe existing systems in unusual detail) and the UN E-Government Survey country data; it applies posts-not-names as a hard rule; it date-stamps the pack and files it as A0 in the workbook. Sections 3.3 and 3.4 below are the specialist sub-skills it calls for the bodies register and the legal list.

### 3.2 `cite-or-discard` — source verification *(new, cross-cutting)*

Takes any output that carries claims and URLs — a comparator card set, a business case, a foundation map, a tool comparison — and returns a verification table: claim, URL, tier, supported / partly supported / not supported, the supporting passage, and what to do (keep, downgrade, drop). It flags mirrors and blogs as *secondary* and tries to locate the primary. Its second mode runs *before* a draft: given an input pack, it audits which lines are sourced and which are the learner's or the model's assertion, so the Discovery brief's "source column" (4.2) is populated rather than promised. This is the skill that operationalises the safeguard in 1.8, 5.1, 5.4, 5.7, 1.5, 3.2 and 5.5, and it is cheap to build because it is mostly WebFetch plus a fixed rubric.

### 3.3 `ea-institution-mapper` — public bodies, mandates, systems, posts *(new; overlaps WP7 `ea-classify-org`)*

Serves 1.6, 2.4, 2.5, 4.1, 4.8 and 5.3 — every play that starts "here are the main bodies in [sector]". Given country and sector it finds the bodies from official portals and establishing acts, records each body's legal mandate with the instrument that grants it, the systems and registries it is known to operate (from strategy documents, donor project documents, ID4D and CRVS assessments, Giga for education), the post that heads it, and a PAERA Annex A1.2 classification using the full seven-type taxonomy with a confidence and a hybrid flag. Output is the A5 bodies register, the roles register with confirmed / partial / gap status tags (the 1.6 pattern the Gambia run produced), and the one-page canvas of 4.1 pre-filled. The safeguard in 2.4 ("confirm against the body's actual legal mandate") becomes the skill's own step rather than the learner's homework.

### 3.4 `ea-legal-context` — the national legal register *(new)*

Serves 1.7 and 3.4 (the ToR's binding-decision scope "interacts with existing sectoral legislation"), 2.3 (the principle card that "cites the wrong statute will not survive its first challenge"), 2.4 and 4.2 (legal framework collection area). Given a country it assembles the instruments an EA programme touches: data-protection act, e-government or e-transactions law, public procurement act, statistics act, civil-registration and identity acts, the act establishing the ICT agency or digital ministry, and any e-government decree or cabinet directive. Sources are the national gazette or law portal first, then the UNCTAD Global Cyberlaw Tracker, DLA Piper's Data Protection Laws of the World, World Bank ID4D country diagnostics and the OGP action plans. Each entry carries the citation, status (in force, bill, repealed), the regulator it creates, and the one line of it that matters for EA. It never drafts legal text and it ends every output with the legal-counsel-review flag the tips already carry.

### 3.5 `bb-landscape-check` — which shared building blocks are actually live *(new; complements `bb-sourcing-researcher`)*

The most repeated safeguard in Modules 2, 4 and 5 is "verify the shared block is authoritative and available, not merely planned" (2.7, 4.4, 4.7, 5.3, 5.6), and the tips ask the learner to paste "what shared building blocks already exist — or note if unknown". `bb-sourcing-researcher` answers a different question (which products could supply a block); this skill answers *what the country has*. For identity it reads ID4D, ID4Africa and the MOSIP deployment list; for payments, the central bank's instant-payment and mobile-money pages, GSMA and the World Bank fast-payments material; for data exchange, the NIIS X-Road world map, GovStack country engagements and the UNDP DPI map; for civil registration, UNICEF and the national CRVS agency; for cloud and hosting, the national data-centre and G-cloud announcements. Output is a BB status register — block, status (live / pilot / planned / none), operator, coverage figure where one exists, source and tier. It is the input the two-trap screen, the sourcing matrix and the gate decision all need, and it makes the "authoritative and available" test a fact rather than a claim.

### 3.6 `ea-comparator-evidence` — comparator-country cards with primary sources *(new)*

Serves 1.8 and 5.1 directly, and feeds the proof section of 5.4 and 5.7. Given the country characteristics one-liner it selects comparators by World Bank income classification, population band, governance type and region, giving priority to African and developing-country examples, then documents what each actually built from its published EA framework or digital-government coordination instrument — Kenya's GEA, Ghana's GEA, South Africa's GWEA, Rwanda's RISA framework, India's IndEA, Estonia's X-Road governance, and others as the search finds them — plus the UN EGDI, the World Bank GovTech Maturity Index and the OECD Digital Government Index as the comparable-maturity signal. Every card has a Tier 1 source per claim, one transferable mechanism (the Gambia run surfaced Liberia's "Technical Clearance" and a spending-gate authority as exactly this), and the skill is required to include at least one mixed or contested case with both sides cited. It runs `cite-or-discard` on itself before returning.

### 3.7 `ea-cost-case` *(extends `govstack-cost-estimator`)*

The existing skill already turned 1.3 from "the percentages are invented" into "the assumptions are these, confirm the tier". Two extensions make it serve 5.4 as well: pull the programme list and budget envelopes from A0 (national budget documents, donor project documents) instead of asking for them, and cite the benchmark sources it uses — GovStack cost-benefit material, ID4D cost models, published X-Road and data-exchange operating costs, World Bank project cost tables — so the "directional, not a quotation" label is backed by named benchmarks. It keeps the output as text tables in the chat (the Gambia run produced charts, which the chain could not consume).

### 3.8 `ea-tool-evaluator` — EA tool selection on verifiable facts *(new; narrow)*

Serves 3.2 only, but 3.2 is the play where vendor marketing does the most damage. The skill scores candidates on things that can be checked online: licence (OSI-listed or not), the Open Group's ArchiMate tool certification register, documented export formats (ArchiMate Exchange Format, CSV, OpenAPI, plain files), whether the metamodel is user-extensible per the vendor's own documentation, the published pricing page, and the DPGA registry for open tools such as Archi. It produces the comparison table the tip asks for, then a real export test script — "load these ten entities, export, open the file without the tool" — because the safeguard says to score the export you performed, not the brochure.

### 3.9 `ea-governance-drafter` — the institutional documents *(new; reference-grounded rather than web-heavy)*

One drafting skill for the family of documents that recur across Modules 1, 3 and 5: the Governance Board ToR (1.7, 3.4), the phase RACI (1.6), the repository structure and update policy (3.1, 3.3), the review-gate checklist and the gate-decision paper (3.5, 4.7), the health scorecard (3.6) and the sustainment risk register (3.7, 5.2). It drafts from the GEATDM Toolkit templates (TK-30 for decisions, the Stakeholder Engagement and Sourcing Strategy supplements) rather than from general knowledge, consumes the legal register from 3.4 so the binding-decision scope cites real statutes, consumes the roles register from 3.3 so the RACI names posts that exist, and cites two or three *published* real-world exemplars per document type with sources — a national EA governance charter, a digital spend-control policy, an architecture review board mandate — so the learner can see how a real government wrote it. The web is used for exemplars only; the drafting authority is the toolkit.

### 3.10 `ea-method-runner` *(extends `ea-lifecycle-method`)*

`ea-lifecycle-method` already carries the five phases and the six deliverables of Module 4 and the Gambia chain 4.1 → 4.7 closed with it. The extension is chain discipline: it reads the A-numbered artefacts from the workbook as inputs instead of asking for pastes, writes each output back with a provenance header, enforces text in / text out, strips its own reasoning before handing over, records clarifying-question answers as part of the input, and asks `bb-landscape-check` and `cite-or-discard` at the phases where the safeguards demand them (sourcing matrix, target architecture, gate decision). It also carries the transfer plays (4.8, 5.3, 5.6) as a "next sector" mode that reuses A0 and the BB register from the first sector.

### 3.11 `paera-reference-check` *(extends `paera-assessor`)*

Serves 2.2 (metamodel conformance) and 1.5 (five-foundations map), and quietly supports 2.3 (principle wording). Holds the PAERA v1.0 text — Annex 2 metamodel in full, Annex A1.2 taxonomy with all seven types, §5.2 principles verbatim, the section map for the five foundations — so the check is against the specification rather than against the video's simplification, and says explicitly when a learner's element maps to the teaching subset but not the full metamodel. When PAERA is updated it re-reads the published version at paera.govstack.global rather than relying on an embedded copy.

### 3.12 `ea-open-learning-catalogue` — the capability-building plan *(new; small)*

Serves 5.5, whose safeguard is "confirm the specific materials exist and are current". The skill checks, on the day it runs, that each item in the learning sequence resolves: the PAERA site, the GovStack specifications and learning material, the ITU Academy, the DPGA registry, the KP video playlists and GitBook, the World Bank Open Learning Campus, and the community channels. It outputs the sequence with a URL and a *checked on* date per item, and marks anything paywalled or stale.

## 4. Tip-to-skill mapping

| Tip | Artefact | Skill(s) | Why the web matters here |
| --- | --- | --- | --- |
| 1.1 | Fragmentation diagnostic | `country-context-pack` → bare play | Evidence must come from the strategy documents themselves, not a paraphrase |
| 1.2 | One-slide EA explainer | `ea-institution-mapper` | Real ministries, registries and services by name |
| 1.3 | Re-use business case | `ea-cost-case` | Benchmarks and budget envelopes |
| 1.4 | Business–IT joint agenda | bare play (+ `ea-legal-context` for constraints) | Little; legal constraints only |
| 1.5 | Initiatives vs five foundations | `paera-reference-check` + `cite-or-discard` | Read the actual document, not the marketing summary |
| 1.6 | Phase RACI | `ea-institution-mapper` → `ea-governance-drafter` | Posts that exist, with status tags |
| 1.7 | Governance Board ToR | `ea-legal-context` → `ea-governance-drafter` | Binding scope must cite real statutes |
| 1.8 | Comparator signposts | `ea-comparator-evidence` | Cite-or-discard |
| 2.1 | Four-layer reading template | `bdat-assessor` (existing) | Little |
| 2.2 | Metamodel conformance | `paera-reference-check` | Full Annex 2, not the subset |
| 2.3 | Principle card | `ea-legal-context` + `paera-reference-check` | Correct statute, verbatim principle |
| 2.4 | Classify a body | `ea-institution-mapper` | Legal mandate, seven-type taxonomy |
| 2.5 | Sector BDAT skeleton | `ea-institution-mapper` → `bdat-assessor` | Bodies, systems, registries from sources |
| 2.6 | Scored gap analysis | `bdat-assessor` / `ea-method-runner` | Little beyond the inputs |
| 2.7 | Two-trap screen | `bb-landscape-check` (+ `bb-sourcing-researcher`) | Which blocks are live; lock-in facts about named suppliers |
| 3.1 | Repository structure | `ea-governance-drafter` | Little |
| 3.2 | EA tool scoring | `ea-tool-evaluator` | Licence, export, certification, pricing |
| 3.3 | Repository update policy | `ea-governance-drafter` | Little |
| 3.4 | EA Board ToR | as 1.7 | as 1.7 |
| 3.5 | Review gate checklist | `ea-governance-drafter` + `bb-landscape-check` | Which blocks the gate can point to |
| 3.6 | Health scorecard | `ea-governance-drafter` | Little |
| 3.7 | Sustainment risk register | `ea-governance-drafter` | Little |
| 4.1 | Demonstration canvas | `ea-institution-mapper` | Bodies and symptoms from sources |
| 4.2 | Discovery brief outline | `ea-method-runner` + `cite-or-discard` (audit mode) | Populates the source column |
| 4.3 | Ranked gap analysis | `ea-method-runner` | Little |
| 4.4 | Sourcing matrix | `ea-method-runner` + `bb-landscape-check` + `bb-sourcing-researcher` | Live blocks; product options |
| 4.5 | Target architecture | `ea-method-runner` + `bb-landscape-check` | Path-to-acquire depends on what exists |
| 4.6 | Wave roadmap | `ea-method-runner` | Little |
| 4.7 | Gate decision | `ea-method-runner` + `bb-landscape-check` | "Authoritative and available" test |
| 4.8 | Transfer plan | `ea-institution-mapper` + `ea-method-runner` | New sector's bodies |
| 5.1 | Comparator evidence | `ea-comparator-evidence` | Cite-or-discard, contested cases |
| 5.2 | Programme risk register | `ea-governance-drafter` | Little |
| 5.3 | Second-sector map | `ea-institution-mapper` + `bb-landscape-check` | Reusable platforms must be real |
| 5.4 | Ministerial business case | `ea-cost-case` + `ea-comparator-evidence` → `cite-or-discard` | Every figure and comparator verified |
| 5.5 | Capability-building plan | `ea-open-learning-catalogue` | Materials exist and are current |
| 5.6 | National rollout waves | `ea-method-runner` + `bb-landscape-check` | Foundation platforms real before later waves are costed |
| 5.7 | Closing case | `ea-comparator-evidence` → `cite-or-discard` | As 5.4 |

## 5. Build order

Four skills unlock most of the value and should come first: `country-context-pack` (every play starts with it), `cite-or-discard` (every safeguard ends with it, and it is the cheapest to build), `bb-landscape-check` (the most repeated safeguard in Modules 2–5 and currently answered by "note if unknown"), and `ea-institution-mapper` (the input to nine plays). `ea-legal-context` and `ea-comparator-evidence` follow, because the Governance Board ToR and the ministerial case are the two artefacts most likely to be shown to someone with authority. The three extensions to existing skills (`ea-cost-case`, `ea-method-runner`, `paera-reference-check`) are edits rather than builds. `ea-governance-drafter`, `ea-tool-evaluator` and `ea-open-learning-catalogue` are last; they are worth having but the bare plays already produce acceptable drafts there.

Three things to carry back into the KP1 bundles as the skills are built: the `play.skill` and `play.input` fields already proposed for the build-script schema should name these skills and A0 sections so the mapping in section 4 renders on every play page; the "With the kit" table in *How to use the plays* grows from five rows to the list above; and the tool-neutrality calibration item for ITU can be framed as "plays run bare anywhere; the kit is an optional Claude layer that adds sourced inputs and verification".

## 6. Where the skills should live: a separate repo

Yes, a separate repo — for five reasons that are each sufficient on their own.

**Different audience and lifecycle.** `geatdm-framework` is the author's working repo: CC-BY method documents plus two FiscalAdmin production kits (`itu-giga-kp`, `interop-ra-to-rfp`) that exist to *make* the knowledge products. The skills in section 3 are the thing the *learner* installs. They are versioned against the GitBook plays, not against the video production pipeline, and a learner should never have to clone 6 MB of `.plugin` archives, deck builders and Whisper scripts to get them.

**A marketplace wants a repo of its own.** Claude Code installs plugins from a repo whose root holds `.claude-plugin/marketplace.json`; `/plugin marketplace add aarelaponin/<repo>` is the whole install story, and that URL will sit in every video description and on the "With the kit" page for years. It should point at a small, stable, public repo — not at the contract working tree that gets refactored weekly (Module 6 became Module 5 this week).

**The six existing GEATDM skills are currently unversioned.** `country-context-data`, `paera-assessor`, `bdat-assessor`, `ea-lifecycle-method`, `govstack-cost-estimator` and `bb-sourcing-researcher` live only as account skills in the Claude app; they are in no git repo at all. The new repo's first commit should be an export of those six, so that the four extensions in section 3 are diffs against a versioned baseline.

**Licence and provenance.** The learner kit will carry the GEATDM content licence (CC-BY 4.0) for the reference files and a code licence (MIT or Apache-2.0) for scripts, and ITU/Giga may want to fork or mirror it. That is a clean thing to hand over as one repo; it is not clean as a subfolder of a repo that also holds the contract's deliverables and the RFQ number in its manifests.

**Tool neutrality stays honest.** The plays on GitBook are the canonical, tool-neutral artefact; the repo is the optional Claude layer. Keeping them physically apart makes that separation visible to ITU rather than a claim.

Suggested name: `geatdm-plays` (matches the "AI plays" vocabulary of WP7 and the GitBook), under the same GitHub account as `geatdm-framework`. The framework repo keeps a one-paragraph pointer in `07-AI-Plays/` and the KP GitBook links the install command; no submodule, no copy.

## 7. Turning the skills into a plugin

### 7.1 Repo layout

One marketplace, one plugin to start, with room to split per KP later without changing the install command.

```
geatdm-plays/
├── .claude-plugin/
│   └── marketplace.json            # the marketplace: lists the plugins below
├── plugins/
│   └── ea-plays/                   # the plugin (split into kp1-plays, kp2-plays… later if it grows)
│       ├── .claude-plugin/
│       │   └── plugin.json         # name, version, description, author, keywords — nothing else lives here
│       ├── README.md               # what the kit is, the install command, the play → skill table (section 4)
│       ├── LICENSE-CONTENT (CC-BY-4.0) / LICENSE-CODE (MIT)
│       ├── shared/
│       │   ├── source-tiers.md     # the trusted-source policy of section 2 — single copy, synced into each skill
│       │   ├── provenance-header.md
│       │   └── workbook-chain.md   # A0…An artefact numbering and which play consumes which
│       ├── skills/
│       │   ├── country-context-pack/
│       │   │   ├── SKILL.md
│       │   │   ├── references/     # api-guide.md, source-selection.md (from country-context-data), source-tiers.md (synced)
│       │   │   └── scripts/        # query helpers, if any
│       │   ├── cite-or-discard/
│       │   ├── bb-landscape-check/
│       │   ├── ea-institution-mapper/
│       │   ├── ea-legal-context/
│       │   ├── ea-comparator-evidence/
│       │   ├── ea-cost-case/       # extends govstack-cost-estimator
│       │   ├── ea-tool-evaluator/
│       │   ├── ea-governance-drafter/
│       │   ├── ea-method-runner/   # extends ea-lifecycle-method
│       │   ├── paera-reference-check/  # extends paera-assessor
│       │   ├── ea-open-learning-catalogue/
│       │   ├── bdat-assessor/      # carried over unchanged
│       │   └── bb-sourcing-researcher/  # carried over unchanged
│       └── scripts/
│           └── sync-shared.sh      # copies shared/*.md into every skills/*/references/ before packaging
├── tests/
│   └── plays/                      # one fixture per play: Progressa input + expected shape of output
├── CHANGELOG.md
└── README.md                       # install in two lines; link to the GitBook "How to use the plays"
```

Two rules the layout encodes. First, `.claude-plugin/` holds only the manifest; `skills/`, `shared/`, `scripts/` sit at the plugin root, or Claude Code will not find them. Second, the source-tier policy exists once, in `shared/`, and is *copied* into every skill's `references/` by `sync-shared.sh` at packaging time. Inside a plugin a skill could read `${CLAUDE_PLUGIN_ROOT}/shared/source-tiers.md` directly, but a learner who uploads a single skill folder to the Claude app (Settings → Capabilities → Skills) gets no plugin root — so each skill must be self-contained. The sync script gives both.

### 7.2 The two manifests

`plugins/ea-plays/.claude-plugin/plugin.json` — only `name` is required; the rest is what the plugin browser shows:

```json
{
  "name": "ea-plays",
  "version": "0.1.0",
  "description": "The 'with the kit' layer for the GEATDM / ITU-Giga Knowledge Product AI plays: builds sourced country context (Play 0), verifies every claim against tiered public sources (cite-or-discard), checks which shared building blocks are actually live, maps public bodies and national law, finds comparator-country evidence with primary sources, and grounds the Module 2–5 artefacts in PAERA v1.0 and the GEATDM toolkit. Plays run bare in any assistant; this kit adds the sources and the verification.",
  "author": { "name": "FiscalAdmin OÜ", "url": "https://github.com/aarelaponin" },
  "keywords": ["enterprise-architecture", "paera", "govstack", "dpi", "digital-government", "geatdm", "itu", "giga", "ai-plays"]
}
```

`.claude-plugin/marketplace.json` at the repo root:

```json
{
  "name": "geatdm-plays",
  "owner": { "name": "FiscalAdmin OÜ", "url": "https://github.com/aarelaponin" },
  "plugins": [
    {
      "name": "ea-plays",
      "source": "./plugins/ea-plays",
      "description": "GEATDM AI plays kit — KP1 Government Enterprise Architecture",
      "version": "0.1.0"
    }
  ]
}
```

When KP2's interoperability plays arrive, they become a second entry (`kp2-gif-plays`, `./plugins/kp2-gif-plays`) in the same file; the marketplace name in every learner's install command does not change. Shared cross-cutting skills (`cite-or-discard`, `country-context-pack`, `bb-landscape-check`) can then move into a `plays-core` plugin that the KP plugins declare in `dependencies`.

### 7.3 Writing the SKILL.md files

Each skill follows the frontmatter the existing kits already use. The `description` is the trigger — it is the only thing Claude reads before deciding to load the skill — so it must name the plays and the artefacts in the learner's words:

```yaml
---
name: bb-landscape-check
description: >-
  Find out which shared digital building blocks a country actually has LIVE — not planned — and
  return a status register with sources: national ID, payments/instant payment, data exchange
  (X-Road, GovStack Information Mediator), civil registration, G-cloud. Use whenever a play asks
  "which shared building blocks already exist", before the two-trap screen (2.7), the sourcing
  matrix (4.4), the gate decision (4.7), the second-sector map (5.3) or the rollout waves (5.6),
  or whenever someone says "is the national ID live", "does the country have a data-exchange
  layer", "what DPI exists in [country]". Reads ID4D, MOSIP deployments, the NIIS X-Road map,
  central-bank payment pages, GovStack engagements; every status carries a URL, tier and date.
---
```

The body is the procedure: the inputs it reads from the workbook (A0 sections), the source list by tier with the query it runs against each, the output contract (text tables in the chat, provenance header, posts not names), and the safeguard it hands back to the learner. Anything longer than a page — the source list, the API notes, the PAERA annex text — goes in `references/` and is named in the body so Claude loads it only when needed. `skill-creator` (already in the kit) is the right tool to draft and eval each one: write the SKILL.md, run it against the Progressa fixture in `tests/plays/`, then against The Gambia, and compare with the bare-play output already recorded in the test synthesis.

Carry-over of the six existing skills: export each from the Claude app, drop it unchanged into `skills/`, commit, tag `v0.0.1-baseline`. Then make the extensions as ordinary commits so the diff shows exactly what the KP layer added.

### 7.4 Local test, validate, publish

Before anything is pushed, run the plugin from its folder rather than installing it:

```bash
cd geatdm-plays
bash plugins/ea-plays/scripts/sync-shared.sh          # copy shared/ into each skill's references/
claude plugin validate plugins/ea-plays                # manifest + layout check; --strict to fail on warnings
claude --plugin-dir plugins/ea-plays                   # load the plugin for this session only, nothing installed
```

Inside that session, run a play chain on Progressa — Play 0 → 1.6 → 1.7 is a good smoke test because it crosses three skills and ends in a document — and check the provenance headers and the cite-or-discard table are present. When it passes, bump `version` in both manifests, add the CHANGELOG entry, tag the commit (`v0.1.0`) and push. Learners then run, in Claude Code:

```
/plugin marketplace add aarelaponin/geatdm-plays
/plugin install ea-plays@geatdm-plays
```

and later `/plugin marketplace update geatdm-plays` to pull a new version. The install prompt asks for a scope; learners choose *user* so the kit follows them across folders. A country team that wants the kit pinned for everyone working in a shared repo adds it to that repo's `.claude/settings.json` instead:

```json
{
  "extraKnownMarketplaces": {
    "geatdm-plays": { "source": { "source": "github", "repo": "aarelaponin/geatdm-plays" }, "autoUpdate": true }
  },
  "enabledPlugins": ["ea-plays@geatdm-plays"]
}
```

### 7.5 The same kit for Cowork and the Claude app

Not every learner runs Claude Code. Three other routes, all from the same source tree:

For **Cowork** (the desktop app), package the plugin folder as a `.plugin` archive exactly as the two existing kits are packaged (`itu-giga-kp.plugin`, `interop-ra-to-rfp.plugin`); the `cowork-plugin` skill does this and produces the file, which is then attached to the GitHub release so the learner downloads one file and installs it from Settings → Capabilities. Keep the `.plugin` out of git — it is a build product — and attach it to the release instead, which is also what fixes the repo-size problem the framework repo has today.

For the **Claude app without a plugin**, each skill folder zips on its own (this is why `sync-shared.sh` exists) and uploads under Settings → Capabilities → Skills. The release should attach a `skills-standalone.zip` containing the twelve folders for this case.

For **any other assistant**, nothing installs: the GitBook plays are the product, and each play page's "With the kit" line simply names the skill that improves it.

### 7.6 Versioning and what triggers a release

The kit version tracks the GitBook, not the videos. A change to a play's prompt on GitBook that changes a skill's output contract is a minor bump; a new skill is a minor bump; a source-tier change or a fix to a reference file is a patch. PAERA moving from v1.0 changes `paera-reference-check` and is a minor bump with the PAERA version named in the CHANGELOG. Every release attaches the `.plugin`, the standalone skills zip and the play → skill table, and every KP video description links the marketplace command, never a release number, so learners always land on current.

## 8. Verification note

All 37 tips were extracted programmatically from the five bundle files and each appears once in the mapping table. The source names in sections 2 and 3 are the datasets and registries the existing `country-context-data` skill already lists plus the well-known governance, legal and DPI sources; each should be re-checked for current URL and access terms when the corresponding skill's `references/` file is written, which is itself the first job of `cite-or-discard`. The plugin and marketplace mechanics in section 7 (manifest layout, `marketplace.json` schema and source forms, `claude plugin validate`, `claude --plugin-dir`, `${CLAUDE_PLUGIN_ROOT}`, install scopes and `extraKnownMarketplaces`) were checked against the current Claude Code documentation at code.claude.com/docs (plugins, plugin-marketplaces, plugins-reference, skills, settings-reference) on 2 September 2026.

---
description: "The optional Claude layer for the plays — twenty-two skills, one per artefact family. Two lines to install; the plays run bare without it."
icon: plug
---

# The ea-plays kit

**The plays run bare in any assistant.** They are the product; this kit is optional. What it adds is the step a learner skips: it brings the named source in *before* it writes the draft, and checks the draft *after*.

## Install

```
/plugin marketplace add alaponin/ea-plays-kit
/plugin install ea-plays@ea-plays-kit
```

Choose the **user** scope so the kit follows you into every folder. Later, `/plugin marketplace update ea-plays-kit` picks up a new version.

Not using Claude Code? Two other routes from the same source tree:

- **Cowork** — download `ea-plays-v<version>.plugin` from the GitHub release, then install it at Settings → Capabilities.
- **The Claude app, one skill at a time** — download the repository (**Code → Download ZIP**) and upload one folder from `plugins/ea-plays/skills/` at Settings → Capabilities → Skills. Each skill folder is self-contained.

Source and licence: [github.com/alaponin/ea-plays-kit](https://github.com/alaponin/ea-plays-kit) — content CC BY 4.0, scripts MIT.

## The provenance header

Every skill's output opens with the same header: the country, the date it was built, the count of sources by tier, and the count of unverified lines. That header is what makes the chain work — the next play can read the artefact and see what it rests on, and so can you. It is also the honest version of the *cite or discard* safeguard: instead of a claim that everything was checked, a number saying how much was not.

## Play → skill

Each play has exactly one primary skill. Play numbers repeat across Knowledge Products — KP1's 2.4 is not KP2's 2.4 — so the two are listed separately. The `gif-` skills are KP2's; the rest are shared. `cite-or-discard` runs *inside* most of the others; you do not call it directly.

| Skill | KP1 plays | KP2 plays | What it adds |
| --- | --- | --- | --- |
| `country-context-pack` | Play 0, 1.1 | 1.1, 1.3, 1.5 | the seven-section A0 pack every other play consumes |
| `cite-or-discard` | *inside the others* | *inside the others* | fetches each URL, grades the source by tier, and drops what does not survive |
| `ea-institution-mapper` | 1.2, 2.4, 4.1 | 1.6, 3.1, 3.2 | bodies, legal mandates, systems, posts, PAERA classification |
| `ea-cost-case` | 1.3, 5.4 | — | the re-use case — assumptions first, benchmarks named, tables not charts |
| `ea-legal-context` | 1.4 | 2.1, 4.8 | the national legal register, so a ToR cites statutes that exist |
| `paera-reference-check` | 1.5, 2.2, 2.3 | *inside 1.7, 4.3* | checks against PAERA as published, not the video's simplification |
| `ea-governance-drafter` | 1.6, 1.7, 3.1, 3.3–3.7, 5.2 | 3.3–3.6, 5.2, 5.3 | ToR, RACI, repository policy, gate checklist, scorecard, risk register |
| `bdat-assessor` | 2.1, 2.5, 2.6 | — | the four-layer read and the metamodel conformance check |
| `bb-landscape-check` | 2.7 | 4.1, 4.2 | which shared building blocks are actually **live**, not planned |
| `bb-sourcing-researcher` | *inside 2.7* | — | which products could supply a block the country lacks |
| `ea-tool-evaluator` | 3.2 | — | tool scoring on verifiable facts, plus a real export test |
| `ea-method-runner` | 4.2–4.8, 5.3 | 5.1, 5.7, 5.10 | the five-phase lifecycle, reading and writing your workbook |
| `ea-comparator-evidence` | 5.1, 5.6 | 1.7, 4.3 | comparator cards with primary sources and one contested case |
| `ea-open-learning-catalogue` | 5.5 | — | a capability plan whose links were checked today |
| `gif-four-layer-map` | — | 1.2 | grades one exchange at the four EIF layers and names the binding constraint |
| `gif-foundation-drafter` | — | home, 1.4 | the two Strategist narratives: the foundation document and the country storyboard |
| `gif-decree-draft` | — | 2.2–2.5 | decree components drafted from published legal models, never from imagination |
| `gif-consistency-check` | — | 2.6, 5.9 | contradictions between the framework's documents, raised as questions not rulings |
| `gif-semantic-map` | — | 4.4, 4.6 | vocabulary alignment, code-list reconciliation and the linking identifier |
| `gif-openapi-gen` | — | 4.5, 4.7 | the OpenAPI contract and the X-Road service description derived from it |
| `gif-federation-standup` | — | 5.4–5.6 | member registration, the federation run book, the acceptance script |
| `gif-bus-monitor` | — | 5.8 | bus health read from exchange metadata only, never citizen data |

A skill can also run as a second pass inside a play another skill leads; the play page says so when it does.

Each play page carries a **With the kit** line naming the skill for that play. If you are not using Claude, ignore it — the prompt is the play.

## The rules every skill follows

- **Text in, text out.** No file, no chart, no image. The next play has to be able to read the output.
- **Posts, not names.** Never the name of a real office-holder, even a public one.
- **Cite or discard.** Each claim carries a URL, a tier and a date. A claim without one is marked ⚠ or dropped. A fetch the server refuses gives *unverified* — never *unsupported*.
- **The safeguard comes back to you.** Every output ends with what stays your judgement.

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>
<tr><td><strong>🧭 How to use the plays</strong></td><td>What a play is, the badges, the two-step rhythm.</td><td><a href="how-to-use-the-plays.md">how-to-use-the-plays</a></td></tr>
<tr><td><strong>🔍 Play 0</strong></td><td>Build the country context pack every play consumes.</td><td><a href="play-0.md">play-0</a></td></tr>
</tbody></table>

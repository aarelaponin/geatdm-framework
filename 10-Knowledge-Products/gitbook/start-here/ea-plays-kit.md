---
description: "The optional Claude layer for the plays and the AI usage tips — sixteen skills in two plugins. A few lines to install; the plays and the tips run bare without it."
icon: plug
---

# The ea-plays kit

**The plays and the tips run bare in any assistant.** They are the product; this kit is optional. What it adds is the step a learner skips: it brings the named source in *before* it writes the draft, and checks the draft *after*.

The kit is one repository with two plugins:

- **ea-plays** — skills that sharpen some of the plays and tips of all four Knowledge Products.
- **sdd-kit** — the method that *Designing Digital Government Services using a Building Block Approach* teaches: one skill for each document the team writes, with the standards it writes under and the programs it runs.

## Install

In Claude Code:

```
/plugin marketplace add alaponin/ea-plays-kit
/plugin install ea-plays@ea-plays-kit
/plugin install sdd-kit@ea-plays-kit
```

Choose the **user** scope so the kit follows you into every folder. Later, `/plugin marketplace update ea-plays-kit` picks up a new version.

Not using Claude Code? Three other routes from the same source tree:

- **Any agent, one skill at a time** — the skills are published through the ITU Skills Marketplace, and the skills CLI installs one into Claude Code, Codex and other agents: `npx skills add alaponin/ea-plays-kit --skill decision-cards`.
- **Cowork** — download `ea-plays-v<version>.plugin` from the GitHub release, then install it at Settings → Capabilities.
- **The Claude app, one skill at a time** — download the repository (**Code → Download ZIP**) and upload one skill's folder from `plugins/ea-plays/skills/` or `plugins/sdd-kit/skills/` at Settings → Capabilities → Skills. Each skill folder is self-contained.

Source and licence: [github.com/alaponin/ea-plays-kit](https://github.com/alaponin/ea-plays-kit) — content CC BY 4.0, scripts MIT.

## ea-plays — the skills for the plays and the tips

Play numbers repeat across Knowledge Products — 2.4 in *Developing a Gov Enterprise Architecture (GEA)* is not 2.4 in *Building a Government Interoperability Framework (GIF)* — so the two are listed separately. Every other play runs bare.

| Skill | GEA plays | GIF plays | What it adds |
| --- | --- | --- | --- |
| `paera-reference-check` | 1.5, 2.2, 2.3 | *inside 1.7, 4.3* | looks up PAERA by section and public address, and checks against PAERA as published, not the video's simplification |
| `ea-governance-drafter` | 1.6, 1.7, 3.1, 3.3–3.7, 5.2 | 3.3–3.6, 5.2, 5.3 | ToR, RACI, repository policy, gate checklist, scorecard, risk register |
| `gif-decree-draft` | — | 2.2–2.5 | decree components drafted from published legal models, never from imagination |
| `decision-cards` | *with 1.7* | — | one page of decision cards that the person who rules clicks through, with the same cards as a numbered list; it also serves the education DPI roadmap (6.7) and service design (3.6, 4.5) |

A skill can also run as a second pass inside a play another skill leads; the play page says so when it does.

Every output opens with the same header: the country, the date it was built, the count of sources by tier, and the count of unverified lines. That header is what makes the chain work — the next play can read the artefact and see what it rests on, and so can you. It is also the honest version of the *cite or discard* safeguard: instead of a claim that everything was checked, a number saying how much was not.

The rules every ea-plays skill follows:

- **Text in, text out.** No chart, no image, and no file except the one page of `decision-cards`, whose cards also come as a numbered list in the chat. The next play has to be able to read the output.
- **Posts, not names.** Never the name of a real office-holder, even a public one.
- **Cite or discard.** Each claim carries a URL, a tier and a date. A claim without one is marked ⚠ or dropped. A fetch the server refuses gives *unverified* — never *unsupported*.
- **The safeguard comes back to you.** Every output ends with what stays your judgement.

## sdd-kit — the service design method's skills

For the team that writes the documents of a service: the staff of the public body, its supplier, or an assistant working for either. A manager who only accepts the documents does not need it; the course pages and their tips serve the manager. Each skill walks the team through its document's standard, part by part, and a named person still accepts the document. The skills run Python programs, so they need Claude Code, or the Claude app with code execution turned on.

| Skill | Standard | Subtopics | The document it helps write |
| --- | --- | --- | --- |
| `sdd-specify` | SDD-01 | 1.4, 1.5, 6.2, 6.3, 6.4 | The specification as a whole: the twelve documents, their order, the handovers, the claim of conformance, and what a change made stale |
| `sector-services-catalogue` | SDD-10 | 2.1 | The catalogue of the services of a sector |
| `requirements-catalogue` | SDD-02 | 2.2 | The register of what the client asked for |
| `entity-model` | SDD-03 | 2.3 | The records the service keeps, with the glossary and the business rules |
| `use-case-model` | SDD-05 | 2.4 | The list of every goal, each named and tied to what was asked |
| `shared-registers` | SDD-04 | 2.3, 2.5 | The shared groundwork: who writes each fact, the states a record moves through, and the shared lists, events and settings every goal may use |
| `architecture-document` | SDD-08 | 2.6 | The architecture: what the service is built on, and what crosses its boundary |
| `use-case-description` | SDD-06 | 3.1, 3.2 | The description of one goal in full, with every way it can go wrong |
| `use-case-screens` | SDD-07 | 3.3, 3.5, 3.6 | The screens of one goal, every value with its source, and the walk-through officials click |
| `ux-enterprise-ruleset` | UX-01, UX-02 | 3.4 | Screens officers can use, under the rules every screen is generated and reviewed by |
| `interaction-design` | SDD-11 | 4.1, 4.2, 4.3 | The interaction design: the four questions decided once for every screen — pick, find, move, act |
| `application-model` | SDD-09 | 4.4, 4.5, 4.6 | The one file a program reads, and the review of what it assumed and could not express |

Each page with a skill carries a **With the kit** line naming it. If you are not using Claude, ignore it — the prompt is the play.

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>
<tr><td><strong>🧭 How to use the plays</strong></td><td>What a play is, the badges, the two-step rhythm.</td><td><a href="how-to-use-the-plays.md">how-to-use-the-plays</a></td></tr>
<tr><td><strong>🔍 Play 0</strong></td><td>Build the country context pack every play consumes.</td><td><a href="play-0.md">play-0</a></td></tr>
</tbody></table>

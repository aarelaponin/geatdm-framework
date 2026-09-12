---
description: "A drafting partner, not an oracle — why an assistant invents, why it agrees with you, what that costs, and the four safeguards every play depends on."
icon: shield
---

# Working with AI — the ground rules

These plays put an AI assistant in the middle of public-sector architecture work. That is a deliberate choice and it comes with conditions. This page is the conditions. Every claim on it about how assistants behave links to a source you can open — the course's own *cite or discard* rule, applied to the course.

## Drafting partner, not oracle

AI produces a strong first draft in minutes — a gap analysis, a terms of reference, a business case. It does not produce a finding you can trust without checking. It states a wrong section number, a plausible invented figure, a confident claim with no basis, in exactly the same tone as a correct one. **The draft is where your work starts, not where it ends.** Treat every output as a hypothesis to verify, never a fact to forward.

## Why it makes things up

This is not a bug that a better model will remove. Language models are trained and scored in ways that reward a confident guess over an admission of ignorance — a system that never says "I don't know" scores better on the benchmarks the field uses. [Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/) (OpenAI · Sep 2025) sets this out from inside a vendor. The learner's takeaway is one sentence: **fluency is not evidence.** A smooth paragraph and a correct paragraph look identical from the outside.

## What that costs when nobody checks

If you want the concrete version rather than the theory, read a few entries from [the AI Hallucination Cases database](https://www.damiencharlotin.com/hallucinations/) (Damien Charlotin · 2023→, updated daily) — well over a thousand court decisions worldwide (the database is updated daily) in which a fabricated citation or an invented quotation reached a judge. These are professionals under a duty of care, filing documents they did not check. The pattern is exactly the risk in an architecture programme: a comparator country that did not do what you say it did, a standard clause that does not exist, a figure with no source.

This is why plays 1.1 and 1.5 both say *open the source*, and why the workbook is worth nothing until each row is validated.

## It agrees with you

An assistant tends to accept the framing in your question. Ask "why is our fragmentation severe?" and you will get reasons; ask "why is it fine?" and you will get reasons for that too. [Expanding on what we missed with sycophancy](https://openai.com/index/expanding-on-sycophancy/) (OpenAI · May 2025) is a vendor's own account of shipping a model that flattered its users' framing and having to withdraw it.

This is why every diagnostic play in this course carries a line like *claim Severe only if the evidence is in the input* — the safeguard exists to stop the assistant agreeing with the severity you already believe.

## What a government expects of its staff

You are not the first public servant to use one of these tools on official work, and the expectations are written down. [AI Playbook for the UK Government](https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government) (GOV.UK · 10 Feb 2025) sets ten principles for civil servants — know the limitations, keep a human accountable, protect data, buy responsibly. It is the reference point behind two of the four safeguards below. For the regional policy frame, [Continental Artificial Intelligence Strategy](https://au.int/en/documents/20240809/continental-artificial-intelligence-strategy) (African Union · Aug 2024) covers responsible and equitable use across the African Union; for the wider picture of what governments are actually doing with these tools, [Governing with Artificial Intelligence](https://www.oecd.org/en/publications/2025/06/governing-with-artificial-intelligence_398fa287.html) (OECD · 18 Sep 2025) surveys some two hundred cases.

## The four safeguards

Every play on this site depends on these. They are not advice; they are the conditions under which the plays are safe to run.

**1. Verify against a named source.** Every fact the assistant states is a hypothesis until you check it against a document, a system or a named person. A wrong reference in a deliverable or a made-up statistic in a cabinet briefing damages your credibility more than a gap in the work would. *(UK Playbook principle: know the limitations.)*

**2. Cite or discard.** Any claim about the outside world — what a country did, what a standard requires — needs a real, checkable source. Assistants fabricate citations as fluently as they write prose. Open the source. If it does not say what the assistant claims, discard the claim, not just the citation.

**3. Never paste confidential or personal data.** No citizen records, security configurations, unpublished cabinet papers, or anything your data-protection act covers. The plays never need it: run every one with placeholders — *a learner*, *a powerful programme*, *country X*. Treat the prompt box as a public place, because it is. *(UK Playbook principle: use these tools lawfully, ethically and responsibly.)*

**4. Keep the decision human.** The assistant prepares; you decide. The Board rules on the gate paper, the architect defends the ranking, counsel approves the ToR, the minister owns the roadmap. When something the assistant drafted turns out wrong, the answer is never "the AI said so" — it is your name on the decision. *(UK Playbook principle: you know who is responsible.)*

## Two meta-plays

Two plays are about the plays themselves. Neither belongs to a module; both belong here.

{% hint style="warning" %}
**De-identify before you send.** If your context contains anything sensitive, strip it first with this play — and run *this step only* on a local or on-device model, never a public one, or the stripping defeats itself. No local model? Do it by hand: the table the play asks for — removed item / category / placeholder — is a ten-minute checklist a person can apply before pasting.

```text
Below is a prompt I am about to send to a public AI assistant for EA work [paste your intended prompt, including the context you would paste in]. Rewrite it so that any personal data, real citizen records, security configuration, unpublished or confidential government material is replaced with neutral placeholders (e.g. 'a learner', 'a powerful programme', 'country X', 'the sector registry'), while keeping enough structure for the task to still work. Then list everything you replaced and why it was sensitive. Output: the de-identified prompt, then a table of (removed item / category / placeholder used).
```
{% endhint %}

{% hint style="info" %}
**Your own prompt is vague?** The four-part rewrite lives on [Prompting techniques](prompting-techniques.md) — paste your draft prompt in and get the shape the plays use back.
{% endhint %}

## Which assistant?

The plays are tool-neutral. They work in Claude, ChatGPT, Gemini or a locally hosted model; the four-part prompt and the safeguards matter more than the vendor. Each prompt block has an **Open in Claude** link that pre-fills a new chat — treat it as a convenience, not a recommendation, and check the bracketed parts before sending. Two exceptions of substance: for comparator and evidence plays use an assistant that can browse and cite, and for the de-identification play above use one that runs locally.

## With the kit

The optional [ea-plays kit](ea-plays-kit.md) automates the safeguard that is easiest to skip. Its `cite-or-discard` skill fetches every URL a draft rests on, grades the source by tier, and drops what does not survive — then puts the count of unverified lines in a header at the top of the output. It does not remove your judgement; it makes the gap visible.

## Reading list

Everything asserted above, with dates. Open the source rather than trusting this page.

| Source | Publisher · date | Used for | Tier |
| --- | --- | --- | --- |
| [AI Playbook for the UK Government](https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government) | GOV.UK · 10 Feb 2025 | the ten principles: verification, accountability, data protection | T1 government |
| [Continental Artificial Intelligence Strategy](https://au.int/en/documents/20240809/continental-artificial-intelligence-strategy) | African Union · Aug 2024 | regional policy frame; responsible and equitable use | T1 intergovernmental |
| [Governing with Artificial Intelligence](https://www.oecd.org/en/publications/2025/06/governing-with-artificial-intelligence_398fa287.html) | OECD · 18 Sep 2025 | 200 government AI cases, risks and oversight | T1 intergovernmental |
| [Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/) | OpenAI · Sep 2025 | why fluency is not evidence | T2 vendor research |
| [Expanding on what we missed with sycophancy](https://openai.com/index/expanding-on-sycophancy/) | OpenAI · May 2025 | why it agrees with your framing | T2 vendor |
| [AI Hallucination Cases](https://www.damiencharlotin.com/hallucinations/) | Damien Charlotin · 2023→, updated daily | what unchecked citations cost | T2 curated primary sources |

*Links re-checked 2026-09-07 with `cite-or-discard`. "Living" pages are cited by title, not by a quoted passage — the wording changes.*

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>
<tr><td><strong>🧭 How to use the plays</strong></td><td>What a play is, the badges, the two-step rhythm.</td><td><a href="how-to-use-the-plays.md">how-to-use-the-plays</a></td></tr>
<tr><td><strong>🔌 The ea-plays kit</strong></td><td>The optional Claude layer: twenty-two skills, one per artefact family.</td><td><a href="ea-plays-kit.md">ea-plays-kit</a></td></tr>
<tr><td><strong>🔍 Play 0</strong></td><td>Build the country context pack every play consumes.</td><td><a href="play-0.md">play-0</a></td></tr>
</tbody></table>

---
description: "The four-part prompt every play on this site uses, how the vendor guides say the same thing, and where to go deeper."
icon: wand-magic-sparkles
---

# Prompting techniques

Every play in every Knowledge Product has the same shape. This page is that shape, plus the public guides that arrive at it independently — so you can write your own plays when the course runs out.

## The four-part prompt

{% stepper %}
{% step %}
### Name the input you are pasting
"Below is my Discovery brief." "Below are five of my country's programmes." The assistant should know what kind of thing it is looking at.
{% endstep %}
{% step %}
### Break the task into named outputs
"Score the capabilities, list the gaps, rank them." Not "help me with my architecture".
{% endstep %}
{% step %}
### State the exact output format
"A four-row table with these columns, plus three bullets." Formats you can paste into a document.
{% endstep %}
{% step %}
### Add a safeguard line for this prompt's specific risk
Not "AI can make mistakes" — that helps no one. Name the way *this* prompt can mislead you: "claim Severe only if the evidence is in the input"; "discard any country example whose source does not say what you claim".
{% endstep %}
{% endstepper %}

Play 1.1 is the worked example: it names the input (*a description of country X's digital landscape*), names the outputs (*a 4-row table, then 3 bullets*), fixes the format (*symptom, severity, evidence, cost direction*) and closes with the safeguard (*be conservative — claim Severe only if the evidence is in the input*). Read [1.1](../kp1/module-1/1-1.md) with the four parts in mind and you can write the fifth play yourself.

{% hint style="info" %}
**Your prompt is vague? Run this meta-play.** Paste your draft in and get the four-part version back.

```text
Below is a prompt I am using for EA work, and the output is too vague or unreliable: [paste your draft prompt]. Rewrite it into the four-part shape: (1) a clear statement of the input I will paste; (2) the task broken into named outputs; (3) an explicit output format (e.g. a table with named columns plus a short summary); (4) a safeguard line that names the specific way THIS prompt could mislead me — not generic 'AI can make mistakes'. Point out where my original was vague and what you changed. Output: the rewritten prompt, then a 3-bullet note on what was weak in the original.
```
{% endhint %}

## How the vendors say the same thing

Three vendors publish prompting guidance. None of them talks to public servants, and they use different words, but the structure is the same one.

| Guide | Their structure | Maps to |
| --- | --- | --- |
| [Prompting guide 101](https://services.google.com/fh/files/misc/gemini_for_workspace_prompt_guide_october_2024_digital_final.pdf) (Google · Oct 2024) | Persona · Task · Context · Format | Persona ≈ the play's persona line · Task ≈ the named outputs · Context ≈ "Below is …" · Format ≈ the output contract |
| [Prompt engineering best practices for ChatGPT](https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt) (OpenAI · living) | be specific, iterate, set the tone | Named outputs; the "re-run it with the correction" habit |
| [Prompt engineering overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) (Anthropic · living) | clarity and examples, structure, roles, thinking, prompt chaining | Chaining is the workbook: A1 feeds A3 feeds A7 |

**What none of the three has: the safeguard line.** That is this course's addition, and it is the part that matters in government. A vendor guide optimises the answer; the safeguard names how the answer can fool you.

## Where the plays use each technique

| Technique | Named by | Where you see it |
| --- | --- | --- |
| Give context, don't assume | Google, OpenAI, Anthropic | "Below is …" — every play, fed by A0 |
| Set a role | Google (Persona), Anthropic (roles) | the persona line on each module page |
| Name the outputs | all three | "Output a 4-row table plus 3 bullets" |
| Fix the format | Google (Format), Anthropic (structure) | the output contract in every prompt |
| Give an example | OpenAI, Anthropic | the *Example input* tab is the example |
| Iterate | OpenAI | the *What next* tab — re-run with what you learned |
| Chain prompts | Anthropic | the workbook: each artefact is the next play's input |
| Name the specific failure | *nobody* | the safeguard line — the course's own addition |

## Going deeper

For the vocabulary — few-shot, chain-of-thought, retrieval-augmented generation, and a section on reducing hallucination — [Prompt Engineering Guide](https://www.promptingguide.ai/) (DAIR.AI · living) is the community reference and stays current.

For working with an assistant rather than only prompting one, [AI Fluency: Framework & Foundations](https://academy.claude.com/courses/ai-fluency-framework-foundations) (Anthropic / Claude Academy · free course) is a free short course built on four Ds: Delegation, Description, Discernment, Diligence. Two of them are this course in other words — Discernment is the *Reading the output* tab, Diligence is the four safeguards.

## Skills — what they are

A *skill* is a prompt with its procedure, its references and its output contract packaged so an assistant loads it on demand instead of you pasting it. The plays on this site run bare as prompts; the [ea-plays kit](ea-plays-kit.md) is the same fourteen procedures as skills, for Claude.

## Reading list

| Source | Publisher · date | Used for | Tier |
| --- | --- | --- | --- |
| [Prompting guide 101](https://services.google.com/fh/files/misc/gemini_for_workspace_prompt_guide_october_2024_digital_final.pdf) | Google · Oct 2024 | Persona · Task · Context · Format | T2 vendor guide |
| [Prompt engineering best practices for ChatGPT](https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt) | OpenAI · living | be specific, iterate, set the tone | T2 vendor guide |
| [Prompt engineering overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) | Anthropic · living | clarity, examples, structure, roles, chaining | T2 vendor guide |
| [Prompt Engineering Guide](https://www.promptingguide.ai/) | DAIR.AI · living | the technique vocabulary; hallucination-reduction section | T3 community reference |
| [AI Fluency: Framework & Foundations](https://academy.claude.com/courses/ai-fluency-framework-foundations) | Anthropic / Claude Academy · free course | the four Ds — Delegation, Description, Discernment, Diligence | T2 vendor course |

*Links re-checked 2026-09-07 with `cite-or-discard`. "Living" pages are cited by title, not by a quoted passage — the wording changes.*

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>
<tr><td><strong>🧭 How to use the plays</strong></td><td>What a play is, the badges, the two-step rhythm.</td><td><a href="how-to-use-the-plays.md">how-to-use-the-plays</a></td></tr>
<tr><td><strong>🔌 The ea-plays kit</strong></td><td>The optional Claude layer: fourteen skills, one per artefact family.</td><td><a href="ea-plays-kit.md">ea-plays-kit</a></td></tr>
<tr><td><strong>🔍 Play 0</strong></td><td>Build the country context pack every play consumes.</td><td><a href="play-0.md">play-0</a></td></tr>
</tbody></table>

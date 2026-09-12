---
description: "The runnable companion to the KP2 videos — the configuration the modules generate, the prompts that generate it, the scripts that deploy it, and the acceptance checks that prove it."
icon: toolbox
---

# The build pack

KP2 is an implementation Knowledge Product, and this is the half that runs. The build pack stands up a real once-only exchange on an X-Road federation across Progressa's institutions: the National Examination Authority (PNEA) issues a credential and pre-fills identity from the National ID Authority (PNIA) and enrolment from the Learner Registry (PLR) — a learner asked once, over a real cross-server call, with the unauthorised caller denied. It is the Progressa "example output" of Modules 4 and 5: where a play page's worked example would be a pasted draft, here it is a file in the pack.

<table data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody>
<tr><td><strong>🧰 What the build pack is</strong></td><td>The manifest, the three configuration layers, the requirements, and what the pack proves.</td><td><a href="what-it-is.md">what-it-is</a></td></tr>
<tr><td><strong>▶️ Run it</strong></td><td>The run book — prerequisites, the steps, verifying a change, joining a member, teardown.</td><td><a href="run.md">run</a></td></tr>
<tr><td><strong>✅ Acceptance — the once-only proof</strong></td><td>The headline check: PNEA ← PNIA + PLR, four assertions mapped to the four layers.</td><td><a href="acceptance.md">acceptance</a></td></tr>
<tr><td><strong>🧪 Exercises</strong></td><td>Break and restore the proof, join a member, detect contract drift, un-join, and watch the reproducibility proof.</td><td><a href="exercises.md">exercises</a></td></tr>
</tbody></table>

{% hint style="info" %}
**Which plays it belongs to.** [4.4](../module-4/4-4.md) the semantic map · [4.5](../module-4/4-5.md) the contract · [4.7](../module-4/4-7.md) the wiring · [5.2](../module-5/5-2.md)–[5.4](../module-5/5-4.md) the member artefacts · [5.5](../module-5/5-5.md) the stand-up · [5.6](../module-5/5-6.md) the once-only exchange · [5.7](../module-5/5-7.md) the production gap · [5.8](../module-5/5-8.md) watching the bus · [5.9](../module-5/5-9.md) the gate register as the document cross-check made mechanical. Each of those pages says which pack file is its Progressa output.
{% endhint %}

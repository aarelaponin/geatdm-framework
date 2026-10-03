---
description: "Connecting a service to the identity block and the Payments block, and why neither is built twice"
icon: flag-checkered
---

# Module 4 — Identity and payments

**Written for:** the team that configures the service (Architect register). **Videos:** 6.

**What it teaches.** Connecting a service to the identity block and the Payments block, and why neither is built twice.

**What you can do afterwards.** Connect a service to the identity block and to the Payments block instead of building either again.

**What is built.** Configurations I1 to I7 and P1 to P7

## Subtopics

| # | Subtopic | Class | Demonstration | Single message |
| --- | --- | --- | --- | --- |
| [4.1](4-1.md) | Why identity is built once | Core | — | An identity system is costly to build and to run, so a country builds it once and every service uses it, and a ministry that builds its own pays those costs a second time. |
| [4.2](4-2.md) | The published Identity block, and what the identity authority offers today | Core | — | The published Identity block verifies who a person is, releases only what that person approves and issues no learner identity, so check what your identity authority really offers before you plan on it. |
| [4.3](4-3.md) | Generating the identity connection | Core | Yes | A service connects to the identity block as its registered client, asks only for what it needs, and keeps the identifier the block gives to that service, never the national number. |
| [4.4](4-4.md) | The Payments block and the payment systems behind it | Core | — | The Payments block is not a new payment system: it connects government programmes to the payment systems your country already has, so every programme pays through one shared connection. |
| [4.5](4-5.md) | Generating the payment connection | Core | Yes | To pay through the block you configure the sender, the programme, the beneficiary, the payment and the route for its status, and the proof is one test payment whose status comes back. |
| [4.6](4-6.md) | Reuse is the return on planning | Core | — | Learner registration reuses the identity block and the scholarship payment reuses the Payments block, a saving visible only to someone who plans for the whole government, because inside one project building your own looks quicker. |

{% hint style="info" %}
The reference pages hold what every module uses: [the nine steps](../nine-steps.md), [the assessment toolkit](../toolkit/README.md), [the worked examples](../examples/README.md), [the guide to the build pack](../build-pack.md), [the frameworks and standards](../frameworks-and-standards.md), [the glossary](../glossary.md) and [the figures](../figures.md).
{% endhint %}

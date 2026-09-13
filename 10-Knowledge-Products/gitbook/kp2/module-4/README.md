---
description: "Eight videos on the technical layer: the four functional layers and three trust zones, the standards portfolio adopted rather than written."
icon: flag-checkered
---

# Module 4 — Architecture and technical standards

{% hint style="info" %}
🎬 **Video in production:** *KP2 Module 4 — Architecture and technical standards* (~2 min).
The play below does not depend on the video: the concept section carries what the video will say. Come back for the embed, or follow the [video index](../../start-here/video-index.md).
{% endhint %}

{% hint style="info" %}
**Worked examples for this module are pending** — every prompt on these pages runs today.
{% endhint %}

**Persona:** A (Architect) — chief or senior architect, integration lead, or agency technical lead building on the interoperability bus.

**You leave with:** B20, B21, B22, B23, B24, B25, B26, B27, filed in your framework workbook — the technical configuration. Runtime ~40 minutes across 8 videos.

Eight videos on the technical layer: the four functional layers and three trust zones, the standards portfolio adopted rather than written, the semantic map and the OpenAPI contract generated for a real exchange, Giga's school data taken bronze-to-gold onto the bus, the X-Road wiring, and the data-protection envelope that makes an exchange lawful.

## Subtopics

| # | Subtopic | Single message | Your play | Kit skill |
| --- | --- | --- | --- | --- |
| [4.1](./4-1.md) | Place every component — the four functional layers | Four functional layers — Service Access, Event Distribution, Trust and Security, Governance and Administration — give every component of the platform a place. | 🔍 B20 | `bb-landscape-check` |
| [4.2](./4-2.md) | Secure every call — the three trust zones | Public, Member-Internal, Trust-Anchor — knowing which zone a call crosses tells you exactly what security it needs. | ✍️ B21 | `bb-landscape-check` |
| [4.3](./4-3.md) | Adopt the standards portfolio | Adopt the published standards — REST/OpenAPI, OAuth/OIDC, mTLS, X-Road — instead of writing your own; the portfolio is the menu every member shares. | 🔍 B22 | `ea-comparator-evidence` |
| [4.4](./4-4.md) | Generate the semantic map | Generate a semantic map so two agencies mean the same 'learner' before they exchange one — the hardest layer, made tractable. | ✍️ B23 | `gif-semantic-map` |
| [4.5](./4-5.md) | Generate a service contract | Turn a service brief into an OpenAPI contract, then an X-Road service description — the configuration that puts a service on the bus. | ✍️ B24 | `gif-openapi-gen` |
| [4.6](./4-6.md) | Put a real data source on the bus — the Giga case | Take Giga's real school data through a bronze/silver/gold pipeline onto the bus — a worked exchange you can copy for your sector. | ✍️ B25 | `gif-semantic-map` |
| [4.7](./4-7.md) | Wire a service onto the bus | The OpenAPI contract becomes an X-Road service description and the call resolves — the GovStack Information Mediation pattern. | ✍️ B26 | `gif-openapi-gen` |
| [4.8](./4-8.md) | Make the exchange lawful — the data-protection envelope | Letters of Interest plus a data-protection envelope make a real exchange lawful as well as technically possible. | ✍️ B27 | `ea-legal-context` |

## How the plays chain in this module

```mermaid
flowchart TD
    A0["A0 Country context pack\n(Play 0 + KP2 supplement)"]
    B20["B20 Component-to-layer map\n(4.1)"]
    B21["B21 Trust-zone trace\n(4.2)"]
    B22["B22 Standards portfolio\n(4.3)"]
    B23["B23 Semantic map\n(4.4)"]
    B24["B24 OpenAPI service contract\n(4.5)"]
    B25["B25 Bronze/silver/gold source map\n(4.6)"]
    B26["B26 X-Road service description and wiring checklist\n(4.7)"]
    B27["B27 Data-protection envelope\n(4.8)"]
    M1_B5["Module 1\nB5"]
    M1_B7["Module 1\nB7"]
    M5out["Module 5"]
    M1_B6["Module 1\nB6"]
    M2_B11["Module 2\nB11"]
    A0 --> B20
    B20 --> B21
    B20 --> B22
    M1_B5 --> B21
    M1_B7 --> B22
    B22 --> B23
    B22 --> B24
    B22 --> M5out
    M1_B5 --> B23
    B23 --> B24
    B23 --> B25
    B23 --> M5out
    B24 --> B26
    M1_B6 --> B26
    B26 --> M5out
    M1_B5 --> B27
    M2_B11 --> B27
    B27 --> M5out
```

The full chain, including where these artefacts come from and go next, is on [Your framework workbook](../your-framework-workbook.md).

{% hint style="info" %}
**Before you start.** Every play asks you to paste country context. Build it once with [Play 0](../../start-here/play-0.md) — that is **A0** — and add the three KP2 sections from the [Play 0 supplement](../play-0-supplement.md). No country to hand? Run them on [Progressa](../../start-here/progressa.md), the fictional demonstration country; for Modules 4 and 5 the [build pack](../build-pack/README.md) is Progressa's finished output.
{% endhint %}

{% hint style="info" %}
New to the plays? Read [How to use the plays](../../start-here/how-to-use-the-plays.md) and [Working with AI](../../start-here/working-with-ai.md) first — part of the about fifteen minutes of Start here, and they apply to every module of every Knowledge Product.
{% endhint %}

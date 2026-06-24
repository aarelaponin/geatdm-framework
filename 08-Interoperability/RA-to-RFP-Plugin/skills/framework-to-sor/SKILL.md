---
name: framework-to-sor
description: >-
  Internalise a national or reference interoperability / digital-government architecture (often
  unpublished or written as generic guidance) into a self-contained, numbered Statement of
  Requirements for a government tender — every requirement recast as a verifiable "the Supplier
  shall…" obligation, addressed to the right actor, country- and platform-specific, citing only
  published standards. Use WHENEVER turning a reference/enterprise architecture or interoperability
  framework into procurement requirements — a Statement of Requirements or an Annex of requirements.
  Trigger even without that phrase: "turn the architecture into requirements", "the requirements read
  like generic guidance", "internalise the architecture", "write Annex A for the platform tender".
  This authors requirements; extracting the integration map/inventory from a National EA is
  national-baseline-extractor, not this. Lifting an architecture verbatim yields generic, un-citable
  requirements; this skill encodes the fix.
---

# Framework → Statement of Requirements

## What this is for

A reference architecture, interoperability framework or National EA is written to *guide a government*. A tender's requirements must *bind a supplier*. Those are different documents with different grammar. This skill turns the first into the second: a **self-contained Statement of Requirements (SoR)** — usually issued as the technical-requirements annex of an RFP — that a supplier can be held to and an independent verifier (IV&V) can test.

It exists because the naïve approach (copy the architecture's bullet points into the tender) fails in four predictable ways, each of which this skill fixes:

- the requirement is **addressed to the wrong actor** ("countries must…", "institutions should…") instead of the bidder;
- it is **generic** ("assess the legal framework") instead of specific to this country and platform, and says nothing about what it is measured *against*;
- it **cites an unpublished or personal document** as authoritative — which a funded procurement cannot do; or
- it carries **dangling self-references** ("this architecture", "the national platform") that mean nothing once lifted out of the source.

## Inputs you need

1. **The reference architecture / interoperability framework** — the "should". Often unpublished or a personal synthesis. Its content is gold; its citability is zero.
2. **The country baseline** (National EA or equivalent) — the "is": the integration map, the technical/API standards already adopted, the data-classification scheme, the identity registries, the systems inventory. This grounds the requirements in reality.
3. **The platform and scope** — what is being built (e.g. the national interoperability/exchange platform) and, crucially, what is *not* (see Scope boundary).

If the user has only the architecture, proceed — but flag that the country baseline makes the requirements concrete and testable, and ask for it.

## The transformation — five rules

Apply these to every item you lift from the architecture. They are the whole method.

1. **Address the accountable actor.** Rewrite to "**The Supplier shall…**". Where the source describes how a *regulator*, *operator* or *institution* must behave, frame it as the Supplier's obligation to *build/configure the platform so that* that holds, or to *deliver* the instrument. Open the SoR with a short **actor-roles note** (who the regulator, operator and institutions are in this engagement) so role-based obligations are unambiguous.

2. **Make it country- and platform-specific.** Name the country, the platform, and the real systems. "the national platform" → "the Government Interoperability Platform (GIP)"; "citizens' data" → the actual registries. Generic nouns are a smell.

3. **Make it verifiable.** Every requirement needs an **acceptance basis** — the objective test, demonstration or document review that proves it, and the phase/gate at which it is checked. If you cannot say how it would be verified, it is not yet a requirement.

4. **Cite only published standards — never the source.** Internalise the architecture's substance into the SoR itself, then attribute requirements to **published, authoritative standards** where one applies (e.g. GovStack Building Block specs, OpenAPI, OAuth/OIDC, mutual TLS, CloudEvents, HL7 FHIR, ISO 20022, EIF/TOGAF, OWASP). The unpublished architecture is never named in the tender.

5. **Keep the rationale (Intent).** Give each requirement *area* a one-to-three sentence **Intent** — what the capability is and why it matters — drawn from the architecture's own "why it matters" reasoning. This is not padding: it lets the vendor understand what to build and the buyer understand what to expect, and it is what stops a reviewer asking "what is this and why?".

## Drop what isn't a build obligation

- **Document-meta rules.** Rules about how the *architecture document itself* is adopted, versioned or used in tenders are not supplier obligations — drop them (or move governance-of-the-standard to the operating model, addressed to the regulator).
- **Pure narrative / worked examples / reference-model essays.** Keep the normative core; drop the prose. A requirements spec strips rationale-essays and keeps obligations (this is *why* a 150-page architecture legitimately compresses to a far shorter SoR — you are keeping the binding part).

## Don't lose rules hidden under headings

Architectures often put their hardest, most concrete rules in boxes or under un-numbered sub-headings (e.g. "reuse-first", "the two-agreement model", "the minimum security baseline"). A heading-based or number-based extraction will silently miss these. **Sweep the whole document** for normative "MUST/shall" statements, not just numbered sections, or you will ship a SoR missing its sharpest requirements.

## Scope boundary — build vs integrate

A platform tender must state plainly what it **builds** versus what it **integrates with**. The exchange backbone and its intrinsic components (mediator, registry/catalogues, trust services/PKI, event layer, security, access-logging) are *built*. Separate national systems that already exist or belong to other programmes (payment rails, national identity/IAM, citizen portals, notification services, standalone terminology/open-data platforms) are *integrated with through standard interfaces under reuse-first — not rebuilt*. Write an explicit **in-scope / out-of-scope** statement; it prevents both gold-plating and the contradiction of a requirement that violates the reuse-first principle.

## Output structure

Organise the SoR on the five **EIF layers** (legal, organisational, semantic, technical, infrastructure) with governance and legal as cross-cutting. Number requirements **REQ-<Layer>-NN**. For each requirement *area*:

```
### <Area title>
Intent. <what the capability is, and why it matters — 1–3 sentences>
- REQ-<L>-01 — The Supplier shall <obligation, specific & verifiable>.
- REQ-<L>-02 — The Supplier shall <…>.
Applicable standard: <published standard, if any>.  Acceptance: <objective test/evidence; the gate at which it is checked>.
```

Mark target-state items "(target-state)" (apply once the platform is in production) and undecided items "(to be confirmed)" (a national decision the buyer confirms at inception). Keep the SoR self-contained: the supplier's obligations must not depend on any external or unpublished document; where a published standard satisfies a requirement, name it.

## Worked example

A line from a reference architecture:

> *Countries must systematically assess their existing legal framework before implementing interoperability. This assessment identifies gaps and priorities.*

Re-authored as a requirement:

> **REQ-LEG-06 — Legal-framework gap assessment.** The Supplier shall assess [Country]'s existing legal and regulatory framework **against** the data-exchange and data-protection requirements of this RFP (lawful basis for inter-agency exchange, data-protection compliance, electronic-transaction validity, the two-tier agreement model), **identify the gaps**, and recommend the specific instruments, amendments and Data Sharing Agreements needed for lawful operation.
> *Intent.* A platform moving personal and official data between agencies is lawful only if the legal basis exists first; this stops the build outrunning the law.
> *Acceptance:* Legal Gap Assessment & Instruments Plan delivered in the Foundation phase and approved by the authority before go-live.

Note what changed: addressed to the Supplier; specific to the country and to *this RFP* as the thing assessed against; a named deliverable and acceptance point; no citation of the source architecture.

## Quality checklist (run before handing off)

- Every requirement is an obligation of a **named actor** ("the Supplier shall…", or clearly the regulator/operator with the Supplier enabling it).
- Every requirement is **country/platform-specific** and **verifiable** (has an acceptance basis).
- **No citation of any unpublished or personal source**; published standards named where they apply.
- Each area carries an **Intent** (what + why).
- **No dangling self-references** ("this architecture", "the national platform").
- The hard boxed/un-numbered rules (reuse-first, agreement model, security baseline, etc.) are **present**, not lost.
- An explicit **in-scope / out-of-scope** (build vs integrate) statement exists.
- The SoR is **self-contained** — obligations depend on nothing external except named published standards.

## Pairs with

- **procurement-vehicle-selector** — decide the instrument (supply RFP vs consulting ToR) *before* finalising how the SoR is issued.
- **is-rfp-builder / annex-pack-builder** — wrap the SoR in the RFP and its annexes (CFR baseline, acceptance criteria, SLA, agreement templates).
- **traceability-matrix-builder** — turn the REQ-IDs into a requirement→clause→test matrix and the IV&V verification log.
- **procurement-qa** — the cross-document consistency gate; run before issuance.

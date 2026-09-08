---
description: "The fictional demonstration country used in every Knowledge Product — its bodies, systems, symptoms and stalled flagship, ready to paste into any play."
icon: flag
---

# Progressa — the demonstration country

Progressa is fictional, on purpose. It is the single worked example across all four Knowledge Products: KP1's Module 4 runs the whole lifecycle on its education sector, the KP2 build pack proves an exchange between its bodies, and every play on this site has a Progressa worked example. If you have no country of your own to hand — a student, a donor analyst, a trainer — run the plays on Progressa with the sections below as your context pack. An assistant reading this site over its MCP endpoint can pull this page directly.

## The sector in one paragraph

Progressa's education sector has five bodies that matter. The Ministry of Education, Youth and Skills (MoEYS) sets policy and funds schools. The Progressa National Examinations Authority (PNEA) runs examinations and certifies results. The Progressa Learner Registry (PLR) is the single list of learners the Education Sector Plan calls for — planned, not started; today three bodies keep their own. The Progressa National ID Authority (PNIA) owns the person identity every sector reuses. And the Progressa Digital Government Authority (PDGA) runs the shared data-exchange backbone (Linkup) and coordinates payments (PayPro). A policy unit, a service authority, two registries and a shared-platform provider.

The problem the minister feels: a learner is registered three times — in the school census, by the Examinations Authority, and by a social grant programme — and none of the lists agree. A parent proves the child's identity on paper at every counter. The minister has promised a **single learner record** that follows the child from primary school to university, and it cannot be delivered because the systems do not fit together. That is the stalled flagship.

## Baseline (2026)

Population 16.8 million, median age 18.7; 8,200 schools, ~47,000 teachers; primary enrolment 92%, completion 73%; mobile penetration 87%, internet 38%, school connectivity uneven. National ID since 2018 (78% adult coverage), e-KYC since 2024. Linkup (X-Road 7.x) in pilot since 2025. EMIS district-level only; no National Learner Registry; paper learner records in primary schools. GovStack member since 2024; 50-in-5 DPI pilot country; Digital Transformation Roadmap 2024–2030 in cabinet approval.

## Context pack sections — paste as needed

{% tabs %}
{% tab title="§1 Digital landscape" %}
Progressa is a lower-middle-income country of 16.8 million people (median age 18.7). It joined GovStack in 2024 and is a 50-in-5 DPI pilot country. The Digital Transformation Roadmap 2024–2030 is awaiting cabinet approval; it was drafted by the Progressa Digital Government Authority (PDGA), a unit under the Ministry of ICT with a coordinating but not binding mandate.

Identity: the Progressa National ID Authority (PNIA) has rolled out the National ID since 2018 (78% adult coverage) and runs an e-KYC platform since 2024. The Ministry of Education, Youth and Skills (MoEYS) keeps district-level EMIS records with its own learner numbering; the Social Protection Agency runs a separate beneficiary register built in 2016 by a vendor under a World Bank programme, with the vendor still holding the only maintenance contract; the Ministry of Health's patient index uses yet another identifier.

Data exchange: Linkup, an X-Road 7.x deployment, went live in 2025 in pilot with four members (PNIA, the business register, the tax authority, PDGA). The tax-to-business-register link was built as a direct database link in 2022 before Linkup existed and has not been migrated. MoEYS and Health exchange data by spreadsheet on request.

Payments: PayPro, the national fast-payment system, is operated by the central bank and is used by the tax authority; the scholarship programme still pays by cheque.

Strategies in force: the Digital Transformation Roadmap 2024–2030 (draft), the Education Sector Plan 2023–2028 (which calls for a National Learner Registry, not yet started), and a 2021 e-Government Interoperability Framework that was published by the previous PDGA leadership and is not referenced by current projects.
{% endtab %}
{% tab title="§2 Programmes" %}
1. National Learner Registry (MoEYS): planned, USD 6.5m over 3 years (World Bank human-capital programme). Needs: learner identity (link to National ID), school facility data, data exchange with PNIA and examinations authority, parental consent.
2. Scholarship Management Platform (MoEYS with Ministry of Finance): planned, USD 2.1m. Needs: applicant identity, eligibility data from the social register, payments to students/families (currently cheques), workflow.
3. Social Register modernisation (Social Protection Agency): procurement stage, USD 4.8m. Needs: beneficiary identity, household data exchange with civil registration, payment disbursement.
4. Digital Health Records pilot (Ministry of Health, 3 provinces): running, USD 3.2m (Global Fund). Needs: patient identity, facility registry, consent, data exchange with civil registration.
5. Farmer Registry and Input Subsidy (Ministry of Agriculture): planned, USD 2.9m (AfDB). Needs: farmer identity, land parcel link, subsidy payments, data exchange with the cooperative bank.
{% endtab %}
{% tab title="§3 Operating-model question" %}
Question: should MoEYS move to a Once-Only model for learner data, so that a parent enrolling a child in school never re-supplies information already held by civil registration, PNIA or a previous school?

Context: today enrolment is on paper at the school; the head teacher keys it into district EMIS; the same child may appear in a district file, a provincial secondary file and the examinations authority's candidate list with different spellings. The Education Sector Plan calls for a National Learner Registry (NLR). Linkup exists but MoEYS is not a member. The Data Protection Act 2023 requires a legal basis for sharing minors' data and parental consent for non-statutory uses. PNIA covers 78% of adults but issues child IDs only at 16; birth registration is at 71%. Head teachers are unionised and resisted the last EMIS change. The Minister wants a 'one learner, one record' announcement within 12 months.
{% endtab %}
{% tab title="§4 Roles register" %}
- Minister of ICT (political sponsor of the Digital Transformation Roadmap)
- PDGA Director-General (coordinating mandate; reports to Minister of ICT)
- PDGA architecture unit: 1 senior architect (contract, donor-funded), 2 junior analysts
- Sector CIOs: MoEYS ICT Director; Ministry of Health ICT Director; Social Protection Agency IT manager; Ministry of Agriculture has no ICT director (handled by the Planning unit)
- PNIA Director (National ID; owner of the identity register)
- Civil Registration Department (under Ministry of Interior)
- Progressa Public Procurement Authority
- Data Protection Commission (established 2023, 6 staff, no enforcement action yet)
- Ministry of Finance budget department (annual budget cycle; no multi-year envelopes for ICT)
- No EA Governance Board exists; an ICT Steering Committee met twice in 2024 and not since
{% endtab %}
{% tab title="§5 Characteristics" %}
Population 16.8 million; lower-middle-income; unitary state with 10 provinces that have delegated (not devolved) administration; East/Southern Africa region; GovStack member and 50-in-5 pilot; National ID 78% adult coverage; X-Road-based exchange layer in pilot; a coordinating digital agency (PDGA) without binding authority; annual budget cycle with no multi-year ICT envelopes; three donors (World Bank, AfDB, Global Fund) funding separate sectoral systems; no EA function or governance board yet.
{% endtab %}
{% tab title="§6 Initiatives" %}
1. Digital Transformation Roadmap 2024–2030 (draft, PDGA): a strategy with 5 pillars (connectivity, DPI, services, skills, governance); lists priority projects; contains a short 'guiding principles' section (8 principles including user-centricity, once-only, open standards).
2. e-Government Interoperability Framework 2021 (PDGA, previous leadership): defines message formats, an approved-standards list and a governance committee that no longer meets; not used by current projects.
3. Linkup (X-Road 7.x, 2025 pilot): technical data-exchange layer with 4 members; member onboarding procedure documented; no data-catalogue.
4. PNIA National ID and e-KYC (2018/2024): operational identity foundation, 78% adult coverage; API documented; no sector adoption framework.
5. Education Sector Plan 2023–2028 (MoEYS): sector strategy naming a National Learner Registry and EMIS modernisation; no architecture content.
6. GovStack membership (2024) and 50-in-5 pilot: access to GovStack BB specifications and the sandbox; no local adaptation yet.
{% endtab %}
{% tab title="§7 Legal and policy" %}
| Instrument | Year | Status | Owning body | The constraint it places on an EA design |
| --- | --- | --- | --- | --- |
| Data Protection Act | 2023 | enacted | Data Protection Commission (6 staff, no enforcement action yet) | A legal basis is needed to share a minor's data; parental consent for any non-statutory use |
| Public Procurement Act | in force | enacted | Progressa Public Procurement Authority | No framework for multi-year ICT procurement; awards run on an annual cycle |
| e-Government Interoperability Framework | 2021 | published, not applied | PDGA (previous leadership) | Names message formats and an approved-standards list; its governance committee no longer meets |
| Digital Transformation Roadmap 2024–2030 | 2024 | draft, awaiting cabinet | PDGA | Not yet binding, and PDGA's mandate coordinates rather than binds |
| Education Sector Plan 2023–2028 | 2023 | in force | MoEYS | Calls for a National Learner Registry; carries no architecture content |
| Civil Registration Act | in force | enacted | Civil Registration Department | Birth registration is the legal identity anchor for a child; PNIA issues IDs only at 16 |

Progressa has no e-transactions act and no access-to-information act.
{% endtab %}
{% endtabs %}

## Where Progressa appears

Module 1: worked example on every play page. Module 4: the five-phase lifecycle run end to end on this sector. GEATDM Education Sector Guide §5.2 (the learner journey) and §7 (the implementation path in four waves). KP2: the Linkup federation and the once-only exchange PNEA ← PNIA + PLR in the build pack.

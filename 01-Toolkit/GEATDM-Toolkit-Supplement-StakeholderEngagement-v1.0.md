# GEATDM TOOLKIT SUPPLEMENT — STAKEHOLDER ENGAGEMENT

**Document:** GEATDM-Toolkit-Supplement-StakeholderEngagement-v1.0
**Part of:** Toolkit (supplement)
**Version:** 1.0
**Date:** May 2026
**Status:** Released
**License:** Creative Commons Attribution 4.0

This supplement provides templates TK-33 through TK-36 referenced in T59 Stakeholder Engagement Method Guide. (TK-32 is reserved for the Legal Touch Points Note in the forthcoming T16 Architectural Traps supplement.) On the next consolidated Toolkit release these templates will be merged into GEATDM-WP6-T61-Toolkit; until then this file is the canonical source.

---

## TABLE OF CONTENTS

- TK-33: Stakeholder Tier Classification
- TK-34: PIC Matrix Worksheet
- TK-35: Tier 1 Inception Workshop Concept Note
- TK-36: Stakeholder Commitment Letter

---

# TK-33: STAKEHOLDER TIER CLASSIFICATION

## Purpose

Classify each ministry-level stakeholder into Tier 1 (Champion), Tier 2 (Early Adopter), or Tier 3 (Observer) on a structured, defensible basis. The classification determines the engagement intensity (Method Guide T59 §5).

## When to use

- DISCOVER phase, before designing the engagement plan.
- Refresh at the start of each subsequent phase.
- Refresh if a major event (cabinet reshuffle, major reorganisation, change of leadership) changes the picture.

## Inputs

- Ministry mandate documents (legal instruments establishing the ministry).
- Recent annual report or strategic plan.
- Public-finance management documents (where the ministry operates a budget envelope).
- Interview with Permanent Secretary or equivalent (recommended).

## Tier Classification Questionnaire

For each ministry, answer the questions and total the score. Tier classification follows the score band.

### Section A — Operational scale and integration role

| Question | Score |
|----------|-------|
| A1. Does the ministry operate a high-volume, citizen-facing service (>100,000 transactions/year)? | Yes = 3, No = 0 |
| A2. Does the ministry maintain authoritative data referenced by other ministries (national ID, civil registration, tax, customs)? | Yes = 3, No = 0 |
| A3. Does the ministry control budgets that other ministries depend on (Finance, Treasury, planning)? | Yes = 3, No = 0 |
| A4. Does the ministry set technical standards for the rest of government (ICT, digital authority, statistics)? | Yes = 3, No = 0 |
| A5. Does the ministry operate cross-government infrastructure (government bus, identity, payments)? | Yes = 3, No = 0 |

### Section B — Authority

| Question | Score |
|----------|-------|
| B1. Does the ministry have explicit cross-government authority (legislative basis for setting policy or standards across other ministries)? | Yes = 2, No = 0 |
| B2. Is the ministry chaired by a senior minister with cabinet seniority (Deputy PM, Treasurer, etc.)? | Yes = 2, No = 0 |
| B3. Does the ministry's Permanent Secretary chair or sit on cross-government committees (Cabinet committees, Treasury committees, ICT council)? | Yes = 1, No = 0 |

### Section C — Programme readiness

| Question | Score |
|----------|-------|
| C1. Has the ministry completed at least one major IT modernisation project in the last five years? | Yes = 1, No = 0 |
| C2. Does the ministry have an internal architecture or chief technology function? | Yes = 1, No = 0 |
| C3. Has the ministry leadership signed a Stakeholder Commitment Letter or equivalent for this programme? | Yes = 1, No = 0 |
| C4. Has the ministry assigned a named focal point with explicit time allocation? | Yes = 1, No = 0 |

### Score bands

| Total score | Indicative tier |
|-------------|-----------------|
| 12 or more | **Tier 1 — Champion** |
| 7 to 11 | **Tier 2 — Early Adopter** |
| 0 to 6 | **Tier 3 — Observer** |

The questionnaire produces an indicative tier. Apply the three classification rules from T59 §2.5 (Operational scale dominates; Integration role dominates; Political weight modifies but does not override) to confirm or adjust.

## Decision Tree

```
START
  │
  ▼
Is the ministry an integration hub (controls budget, sets standards,
or operates cross-government infrastructure)?
  │
  ├── YES ──► TIER 1 (Champion)
  │
  ▼ NO
Does the ministry operate a high-volume, citizen-facing service
(>100,000 transactions/year)?
  │
  ├── YES ──► Is leadership ready and is a focal point assigned?
  │            ├── YES ──► TIER 1 (Champion, operational scale)
  │            └── NO  ──► TIER 2 (Early Adopter)
  │
  ▼ NO
Does the ministry have a published digital strategy or recent
modernisation track record?
  │
  ├── YES ──► TIER 2 (Early Adopter)
  │
  ▼ NO
TIER 3 (Observer)
```

## Output template

Produce a one-page classification record per ministry.

```
MINISTRY: __________________________________________________________

Date of classification: _____________________________________________
Classified by: ______________________________________________________

Section A score: ______ / 15
Section B score: ______ / 5
Section C score: ______ / 4
Total score:    ______ / 24

Indicative tier (from score band): ___________________________________
Confirmed tier (after applying T59 §2.5 rules): ______________________

Rationale (3–5 sentences):
___________________________________________________________________
___________________________________________________________________
___________________________________________________________________

Sponsor: ___________________________________________________________
Focal point: _______________________________________________________
Engagement Readiness Assessment scheduled: ___________________________

Next refresh date: __________________________________________________

Signed (Programme Manager): _________________________________________
```

## Worked example — Gambia 2025

```
MINISTRY: Gambia Revenue Authority (GRA)

Date of classification: 15 June 2025
Classified by: FiscalAdmin / ITU EA Programme

Section A score: 9 / 15  (A1 yes, A2 yes, A3 no, A4 no, A5 yes — wait,
                          A5 was no for GRA; rescored to 6)
Section B score: 2 / 5   (B2 yes — Minister of Finance and Economic
                          Affairs sits on cabinet)
Section C score: 3 / 4   (C1 yes — recent ITAS upgrade; C3 yes —
                          signed; C4 yes — focal point named)
Total score:    11 / 24

Indicative tier: Tier 2 (score band 7–11)
Confirmed tier: Tier 1 (Champion, operational scale rule applied —
                        GRA processes >300,000 taxpayer transactions
                        per year and is an authoritative data source
                        for other ministries)

Rationale: GRA is an SDA with the highest transaction volume in
government and an authoritative data source for taxpayer registration
that other ministries (Customs, Trade, Statistics) reference. While
GRA itself does not have cross-government rule-setting authority,
its operational scale and data-source role make it a Champion under
the operational-scale rule of T59 §2.5.

Sponsor: Commissioner General, GRA
Focal point: Director of ICT, GRA
Engagement Readiness Assessment scheduled: 22 June 2025

Next refresh date: 1 December 2025

Signed (Programme Manager): [signature]
```

---

# TK-34: PIC MATRIX WORKSHEET

## Purpose

Score each ministry on Power, Interest, and Culture using a structured rubric. The PIC profile then drives the tier-specific engagement strategy in T59 §5.

## When to use

- DISCOVER phase, after Tier classification (TK-33).
- Refresh at quarterly EA Board cadence.
- Refresh on leadership change.

## Scoring rubric

### Power

| Score | Criterion |
|-------|-----------|
| **5 — Very high** | Cross-government rule-setting authority; controls a budget envelope that funds other ministries' work; veto capability over cross-government initiatives. |
| **4 — High** | Cross-government coordination role (chairs a major committee); standards-setting authority within a sector; integration hub. |
| **3 — Medium** | Operates an authoritative registry or service that other ministries reference; substantial but contained authority. |
| **2 — Low** | Operates within sector boundaries; influence on other ministries through normal inter-ministerial protocol only. |
| **1 — Very low** | No cross-ministry authority; effectively self-contained. |

### Interest

| Score | Criterion |
|-------|-----------|
| **5 — Very high** | The ministry's mission depends on the EA outcome; published strategy explicitly cites the EA work; visible internal demand from operational staff. |
| **4 — High** | The ministry derives clear operational benefit; leadership has expressed support; integration with other systems is on the active agenda. |
| **3 — Medium** | The ministry's operations are affected; benefits are real but not central; leadership is neutral to mildly supportive. |
| **2 — Low** | Limited direct benefit; participation is by inter-ministerial obligation rather than self-interest. |
| **1 — Very low** | No clear benefit; participation would be a net cost to the ministry. |

### Culture

| Score | Criterion |
|-------|-----------|
| **5 — Very high** | Track record of successful technology transformations; active innovation programme; leadership openly champions digital change. |
| **4 — High** | Recent successful modernisation; capacity to absorb change; constructive relationship with the central digital authority. |
| **3 — Medium** | Mixed track record; willingness to engage but limited capacity; cautious leadership posture. |
| **2 — Low** | Recent failed or abandoned IT initiatives; defensive posture; resistance to cross-ministry coordination. |
| **1 — Very low** | History of obstruction; no internal change capacity; leadership openly hostile to digital reform. |

## Worksheet

For each ministry, populate the worksheet:

```
MINISTRY: __________________________________________________________

Date of assessment: _________________________________________________
Assessed by: ________________________________________________________

POWER
  Score (1–5): _____
  Evidence (3 specific examples):
    1. _____________________________________________________________
    2. _____________________________________________________________
    3. _____________________________________________________________

INTEREST
  Score (1–5): _____
  Evidence (3 specific examples):
    1. _____________________________________________________________
    2. _____________________________________________________________
    3. _____________________________________________________________

CULTURE
  Score (1–5): _____
  Evidence (3 specific examples):
    1. _____________________________________________________________
    2. _____________________________________________________________
    3. _____________________________________________________________

PIC profile: (P, I, C) = (___, ___, ___)

Engagement implication (per T59 §3.4):
___________________________________________________________________
___________________________________________________________________

Refresh date: _______________________________________________________
```

## Reading the PIC profile

| Profile | Engagement implication |
|---------|-----------------------|
| **(5,5,5) (5,5,4) (5,4,5) (4,5,5) (4,5,4) (5,4,4)** | Champion — full engagement, expect leadership. |
| **(5,4,2) (5,4,3) (5,5,2) (5,5,3)** | Champion in mandate but not yet ready — invest in cultural readiness before deep engagement. |
| **(5,1,*) (5,2,*) (5,3,*) (4,1,*) (4,2,*)** | Champion in mandate but not engaged — use formal channels to elevate Interest. |
| **(2,5,5) (3,5,5) (2,5,4) (3,4,4)** | Early Adopter — operationalise quickly, use as a demonstration case. |
| **(2,4,2) (3,4,2) (2,5,2) (3,5,2)** | Early Adopter at risk — invest in capacity-building before relying on delivery. |
| **(1,*,*) (2,1,*) (2,2,*) (3,1,*) (3,2,*)** | Observer — light-touch engagement, no near-term delivery dependency. |

(\* = any score)

---

# TK-35: TIER 1 INCEPTION WORKSHOP CONCEPT NOTE

## Purpose

A one-day workshop to launch engagement with Champion ministries. Produces signed Stakeholder Commitment Letters, designated focal points, agreed communication matrix, and identified quick wins.

## When to use

- Once at the start of a GEATDM engagement, after Tier classification (TK-33) and PIC matrix (TK-34) are complete.
- Repeated at programme renewal (after a major political transition or after the original mandate expires).

## Workshop concept note template

Below is a generic template. Substitute the country-specific elements before issuing.

```
CONCEPT NOTE
Tier 1 Stakeholders Inception Workshop
[Country] Enterprise Architecture Initiative

Date:        [date TBD]
Duration:    One Day (9:00 — 16:00 [time zone])
Mode:        Hybrid (in-person at [host venue] + virtual facilitation
             from [partner organisation])
Target audience: Tier 1 Champion Ministries — [list, typically 3–4]

1. BACKGROUND

The Government of [country], through the [host ministry], has
initiated a comprehensive Enterprise Architecture (EA) project to
enable coordinated digital transformation across government
ministries. This [duration]-month initiative, supported by [partners],
aims to establish standardised IT governance and interoperability
frameworks aligned with [country's existing digital master plan or
equivalent].

This workshop marks the official launch of stakeholder engagement
activities and is the foundation for collaborative EA development
with the Champion ministries.

2. OBJECTIVES

Primary:
  1. Secure executive and operational commitment from Tier 1
     ministries.
  2. Gather initial technical and business requirements for the
     EA framework.
  3. Establish communication protocols and logistics agreements.
  4. Foster collaborative working relationships among the Champion
     ministries.

Secondary:
  - Introduce the EA project scope, methodology, and timeline.
  - Identify focal points and working group members.
  - Address initial concerns and expectations.
  - Demonstrate quick win opportunities.

3. EXPECTED OUTCOMES

  1. Signed Stakeholder Commitment Letters from each Tier 1 ministry
     (TK-36).
  2. Designated focal points with clear roles and responsibilities.
  3. Communication matrix with agreed protocols and schedules.
  4. Identified quick wins for the first 90 days.
  5. Press communiqué (where appropriate).

4. AGENDA

  09:00 — 09:30  Opening and welcome
                 Speaker: [Permanent Secretary, host ministry]
                 Speaker: [Partner organisation representative]

  09:30 — 10:30  Programme background, scope, methodology, timeline
                 Speaker: [Programme Manager]
                 Q&A

  10:30 — 10:45  Coffee break

  10:45 — 12:30  Tier 1 ministry presentations (15 min each + Q&A)
                 Each Champion ministry presents:
                   - Current state and priorities
                   - Key concerns
                   - Expected benefits from the programme

  12:30 — 13:30  Lunch

  13:30 — 14:30  Working session 1 — Communication matrix
                 Facilitator: [Programme Manager]
                 Output: Agreed cadence, channels, focal points

  14:30 — 15:30  Working session 2 — Quick wins and decisions
                 Facilitator: [Programme Manager]
                 Output: List of 3–5 quick wins per ministry for the
                 first 90 days

  15:30 — 16:00  Closing
                 Signing of Stakeholder Commitment Letters
                 Agreement on next steps
                 Press communiqué (where appropriate)

5. PARTICIPANTS

Tier 1 ministries (each):
  - Permanent Secretary or equivalent (1)
  - ICT Director or CIO (1)
  - Designated focal point (1)
  - Operational lead from one priority area (1)

Host ministry:
  - Permanent Secretary
  - Programme Manager
  - Programme Lead Architect

Partner organisations:
  - Programme sponsor representative (virtual)
  - Lead consultant (in person)
  - Technical advisor (virtual)

Cabinet Office observers:
  - 1–2 representatives, optional

6. LOGISTICS

Venue:        [host venue]
Catering:     Provided
Materials:    Pre-read pack circulated 5 working days in advance,
              including:
                - Programme overview (4 pages)
                - Methodology summary (4 pages, GEATDM User's Guide
                  excerpt)
                - Country digital master plan reference
                - Stakeholder Commitment Letter template (TK-36)
Recording:    Working sessions recorded for minute-taking; recording
              not for distribution.

7. PREPARATION REQUIRED

From each Tier 1 ministry:
  - Confirm participation and named participants by [deadline].
  - Submit a 2-page current-state summary for the ministry
    presentation slot, by [deadline].
  - Designate the focal point in advance.

From the Programme Manager:
  - Circulate pre-read pack 5 working days in advance.
  - Distribute Stakeholder Commitment Letter drafts to each ministry's
    legal advisor 10 working days in advance for review.

8. FOLLOW-UP

  Within 5 working days:
    - Workshop minutes circulated.
    - Updated programme plan reflecting commitments.
    - Communication matrix published.

  Within 30 days:
    - First Steering Committee scheduled.
    - First weekly working sessions begin.
    - First quick win launched.

CONTACT

  Programme Manager: [name, email, phone]
  Lead Architect: [name, email]
  Logistics: [name, email]
```

---

# TK-36: STAKEHOLDER COMMITMENT LETTER

## Purpose

A formal letter from the Tier 1 ministry leadership agreeing to programme participation, focal-point assignment, and resource allocation. Signed at the Tier 1 Inception Workshop or immediately afterwards.

## When to use

- At the Tier 1 Inception Workshop (TK-35).
- Within 30 days of the workshop if a ministry's representative was unable to sign on the day.
- Re-signed if the original signatory leaves the ministry, or at programme renewal.

## Letter template

The letter is short — one page on ministry letterhead. Below is the template; adapt the language to the country's administrative conventions.

```
[MINISTRY LETTERHEAD]

Date: ____________________

Reference: ____________________

To:     [Programme Manager]
        [Host ministry / partner organisation]

Subject: [Country] Enterprise Architecture Programme — Stakeholder
         Commitment

1. The [Ministry] confirms its commitment to participate as a [Tier 1
   Champion / Tier 2 Early Adopter] ministry in the [country]
   Enterprise Architecture Programme, in accordance with the programme
   methodology set out in the Generic EA Target Architecture
   Development Method (GEATDM).

2. The [Ministry] designates [Name, Role] as the programme focal
   point. The focal point is allocated [X]% of working time to the
   programme for its [Y]-month duration. The focal point is
   authorised to participate in working sessions, sign off on
   ministry-level deliverables, and represent the ministry at the
   EA Board.

3. The [Ministry] commits to:
     (a) Participation in weekly working sessions for the duration of
         the engagement;
     (b) Provision of documentary inputs (mandate documents, current
         architecture documentation, service catalogues) within 30
         days of request;
     (c) Participation in the EA Board (Tier 1 Champions only);
     (d) Bi-weekly Steering Committee participation by the
         Permanent Secretary or designated deputy (Tier 1 Champions
         only);
     (e) Compliance with architectural decisions taken under the
         programme governance, in accordance with the EA Governance
         Framework (GEATDM-WP1-T13).

4. The [Ministry] understands that the programme outputs (Reference
   Architecture, sector tailoring, roadmap) will be subject to
   ministry-level review and that material decisions affecting the
   ministry will be taken with the ministry's documented agreement.

5. This commitment is provisional on continued political sponsorship
   from the executive and continued availability of the programme
   funding envelope. The Ministry will give 30 days' written notice
   of withdrawal in the event of changed circumstances.

[Signature]
[Name]
[Permanent Secretary / equivalent]
[Ministry]

[Counter-signature, optional]
[Name]
[Minister, where political sign-off is customary]
[Ministry]

Cc:    [Cabinet Office]
       [Host ministry Permanent Secretary]
       [Partner organisation focal point]
       [Programme Manager — file copy]
```

## Notes for use

- The letter is **not** a contract. It is a public commitment whose force is political and reputational, not legal.
- Cabinet Office copy on the distribution list creates an institutional record that the ministry has signed up. This protects the programme against the loss of an individual signatory.
- The "30 days' written notice of withdrawal" clause is important: it converts an informal political commitment into a structured signal that withdrawal will be visible and accountable.
- Adapt clause 3 to the tier — the items above are the Tier 1 commitments. Tier 2 commitments are lighter (bi-weekly working sessions, monthly progress reports, Programme Manager–level rather than EA Board engagement).

---

# TEMPLATE INTEGRATION

When the main Toolkit (GEATDM-WP6-T61) is updated to its v1.1 release, the templates above are intended to be inserted as follows:

| Template | Insert after |
|----------|-------------|
| TK-33 Stakeholder Tier Classification | TK-04 DISCOVER Summary Template |
| TK-34 PIC Matrix Worksheet | TK-33 |
| TK-35 Tier 1 Inception Workshop Concept Note | TK-34 |
| TK-36 Stakeholder Commitment Letter | TK-35 |

The Toolkit's Tool Index by Phase will list TK-33 through TK-36 under DISCOVER. The Tool Index by Function will list them under Stakeholder Engagement (a new function).

---

*GEATDM — Making Digital Transformation Practical*

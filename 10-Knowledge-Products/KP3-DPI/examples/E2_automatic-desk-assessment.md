**Method step:** 2 of 9 — Run the automatic desk assessment

**Public anchor:** PAERA version 1.0 (GovStack, 2024), section 5.3, which says a quick assessment of the national infrastructure can be run with a tool, and section 3.1.3, its seven indicators of low maturity

**Simulated case:** This is a simulated case for Progressa, a fictional country; every institution, name, document and figure in it is invented.

# E2 — The automatic desk assessment: the question bank and a run for Progressa

**Form of this example.** The question bank and the workflow are the team's own instrument and name no country. The run is rebuilt for Progressa, on Progressa's invented public record.

## What this step does

An AI workflow reads a country's public record against a bank of questions before anyone meets the country's officials. It gives the team a first picture in days instead of months, and a list of points to check. **Nothing the workflow finds counts as a finding.** A desk result is a claim to verify; it becomes a finding only after steps 3 and 4 have confirmed it.

## The workflow, for any country

| Stage | What the workflow does | What it hands on |
|---|---|---|
| 1. Collect practice | For each question, gathers what public sources say the country does, and what good practice looks like | Evidence notes, each with its source and date |
| 2. Draft findings | Writes one draft result per question, with a provisional stage on the five-stage scale and a confidence between 0 and 1 | Draft results |
| 3. Draft the gap analysis | Compares each draft result with good practice and writes the difference as a desk gap | Desk gaps |
| 4. Make the report | Assembles the draft results and desk gaps into a desk report, one chapter per domain | The desk report |
| 5. Clean and sort | Removes duplicate desk gaps and sorts them by question, so that each one can be put to the right person in steps 3 and 4 | The sorted list of desk gaps |

A person reads every stage's output before the next stage runs. The workflow drafts; it does not decide.

### The question bank

Each entry of the bank is one question. The bank covers the five domains of E1 and uses one scale, the five stages of the UNDP Digital Development Compass (Basic, Opportunistic, Systematic, Differentiating, Transformational).

```yaml
# One entry per question. Domain codes as in E1: GOV, ACC, DAT, INT, IDN.
- id: DAT-Q03
  domain: DAT
  paera_5_3_question: 6          # which of the nine questions of PAERA section 5.3
  question: Is there an authoritative register of learners, and which body keeps it?
  good_practice: One register of learners, kept by a named body under law, linked to the national identity.
  look_for: [laws and regulations, ministry annual reports, statistical yearbooks, procurement notices]
  scale: compass-5                # the five Compass stages; see E5 for the scoring rule
```

The settings of a run carry one placeholder country, so that the same bank serves any country:

```yaml
country: <COUNTRY>
sector: education
sources: <the list of public documents and web pages to read>
bank: question-bank.yml
outputs: [draft-results, desk-gaps, desk-report, sorted-gaps]
```

An extract of the bank, two questions for each domain:

| Question | Domain | Question asked of the public record | Good practice the answer is compared with |
|---|---|---|---|
| GOV-Q01 | GOV | Is there a national digital strategy that names education? | An approved strategy with an education chapter and a named lead body |
| GOV-Q02 | GOV | Does the law allow a learner register and the sharing of learner data between public bodies? | A clause in law that names the register, its keeper and who may read it |
| ACC-Q01 | ACC | Is the connectivity of each school known and published? | A school-by-school record of connectivity, updated at least yearly |
| ACC-Q02 | ACC | Through which channels can parents reach education services? | Online, by mobile phone and in person, with help available in person |
| DAT-Q03 | DAT | Is there an authoritative register of learners, and which body keeps it? | One register kept by a named body under law, linked to the national identity |
| DAT-Q04 | DAT | At what level does the education information system hold data: school totals or individual learners? | Learner-level records, with totals derived from them |
| INT-Q01 | INT | Is there a national data exchange, and is the education ministry a member? | A running exchange with the education ministry, and every other public body that holds education data, as members |
| INT-Q02 | INT | Can an education service request a payment through a shared payment rail? | A payment service reachable on the exchange by any member |
| IDN-Q01 | IDN | What share of the population holds a national identity, and since when? | Coverage of nearly all adults, with a route for children |
| IDN-Q02 | IDN | Do education services check a person through the national identity authority's sign-in? | Every education service that needs identity checks a person through the national sign-in, with the person present, and keeps the identifier it is given, not the national number |

## Progressa's run (rebuilt, illustrative)

**Sources read by the workflow (invented):** the MoEYS education statistics yearbook 2025; the PNIA annual report 2025; the PDGA note on the Linkup pilot, 2025; the data protection act of 2019; the education act of 2011; the PayPro rules for participants, 2024.

### The seven indicators of PAERA section 3.1.3, as the record shows them (illustrative)

| Indicator (PAERA's words) | What Progressa's public record shows |
|---|---|
| Lack of sufficient connectivity. | Partly: mobile coverage is wide, but internet use is 38 per cent and school connectivity is uneven |
| Lack of integrated IT systems in government entities. | Yes, in education: PEMIS, examinations and schools exchange spreadsheets |
| Lack of digital data. | Yes, for learners: PLR holds enrolment records for some learners only, and no law names it the learner register |
| Lack of a wider legal framework for digital processing. | Partly: a data protection act exists; the education act has no clause on digital records |
| Absence of digital payments (i.e., using a bank account or mobile money or CBDC or similar). | No: PayPro runs a fast-payment system |
| Absence of national authentication infrastructure and digital signature. | No: PNIA runs a sign-in for people since 2024 |
| Lack of IT literate workforce that can support digital operations. | Partly: the MoEYS ICT unit is small; district offices have few ICT staff |

### Draft results (extract, illustrative)

Each draft result carries the question it answers, a provisional stage and the workflow's confidence. A confidence below 0.6 means the public record was thin and the point must be checked first.

| Draft result | Question | What the public record suggests | Provisional stage | Confidence |
|---|---|---|---|---|
| AF-GOV-01 | GOV-Q01 | A national digital transformation roadmap 2024–2030 awaits cabinet approval; no education chapter was found | Opportunistic | 0.7 |
| AF-GOV-02 | GOV-Q02 | The education act of 2011 has no clause on a learner register or on sharing learner data | Basic | 0.6 |
| AF-ACC-01 | ACC-Q01 | Connectivity records exist for some provinces only | Opportunistic | 0.5 |
| AF-ACC-02 | ACC-Q02 | Mobile penetration is 87 per cent, smartphone ownership 45 per cent; services are offered in person at school offices | Opportunistic | 0.8 |
| AF-DAT-01 | DAT-Q03 | PLR, a member of Linkup, holds enrolment records for some learners, but no law names it the learner register; enrolment is counted from school returns | Basic | 0.8 |
| AF-DAT-02 | DAT-Q04 | The yearbook appears to report learner-level data for secondary schools | Systematic | 0.4 |
| AF-INT-01 | INT-Q01 | Linkup runs as a pilot since 2025; PDGA is its owner, and PNEA, PLR and PNIA are listed among its members; MoEYS is not | Systematic | 0.7 |
| AF-INT-02 | INT-Q02 | PayPro runs a fast-payment system; no Payments block was found on Linkup through whose payer bank a programme could reach PayPro | Opportunistic | 0.6 |
| AF-IDN-01 | IDN-Q01 | National identity issued since 2018; 78 per cent of adults covered; a sign-in for people since 2024 | Systematic | 0.9 |
| AF-IDN-02 | IDN-Q02 | PNIA's one service on Linkup, a read of a person by national number, may be called by PNEA alone; no evidence that any education service checks a person through PNIA's sign-in | Opportunistic | 0.5 |

### The sorted desk gaps (extract)

| Desk gap | Question | Desk gap as drafted | Put to, in steps 3 and 4 |
|---|---|---|---|
| DG-01 | GOV-Q02 | No legal basis found for a learner register | MoEYS legal unit |
| DG-02 | ACC-Q01 | School connectivity not known for most provinces | MoEYS ICT unit |
| DG-03 | DAT-Q03 | PLR not yet the authoritative learner register | MoEYS statistics unit |
| DG-04 | DAT-Q04 | Level of PEMIS data unclear | MoEYS statistics unit |
| DG-05 | INT-Q01 | MoEYS not a member of Linkup | PDGA |
| DG-06 | IDN-Q02 | Education services do not appear to check people through PNIA's sign-in | PNIA |

**What happens next.** The sorted desk gaps are attached to the questionnaires of step 3 as points the respondents are asked to confirm or correct, and they become the agenda of the clarification interviews of step 4. AF-DAT-02, with the lowest confidence, turns out to be wrong; E4 shows how it was corrected.

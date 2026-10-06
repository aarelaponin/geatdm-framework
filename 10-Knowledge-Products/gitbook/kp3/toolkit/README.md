---
description: "The assessment toolkit is the set of blank instruments a government team uses to find out where its country's digital public infrastructure for education stands."
icon: file-pen
---

# The assessment toolkit

## What the toolkit is

The assessment toolkit is the set of blank instruments a government team uses to find out where its country's digital public infrastructure for education stands, before it decides what to build first. It is used in the first five steps of the method that this course teaches. With it a team reads what the country has already published, asks the officials who run the systems, checks their answers, and places each part of the infrastructure on one five-stage scale, so that the whole result fits on one table.

Every instrument in the toolkit is blank: it names no country, no institution and no person. A team fills it in for its own country. The worked examples in the folder `../examples/` show each instrument filled in for a fictional country.

The toolkit looks at five domains. The five names are those of PAERA, the GovStack Public Administration Ecosystem Reference Architecture (version 1.0, 2024, section 3.3.1), which describes a foundation of governance, policy and law and four pillars standing on it. The scale is the five stages of the UNDP Digital Development Compass: Basic, Opportunistic, Systematic, Differentiating and Transformational. The division of each domain into sub-components, the questions, and the way the Compass's scale is applied to PAERA's domains are the team's own.

| Domain | Code | Sub-components, each scored on its own |
|---|---|---|
| Governance and policy, with the legal framework | GOV | G1 leadership and coordination · G2 strategy and policy · G3 legal framework · G4 funding and budgeting · G5 rights and safeguards |
| Access | ACC | A1 connectivity of schools and homes · A2 devices and channels · A3 digital skills of staff and parents · A4 assisted and offline service channels · A5 inclusion and accessibility |
| Digital Data | DAT | D1 data governance and policy · D2 state registers · D3 data quality and master data · D4 data sharing and reuse · D5 data protection in practice · D6 statistics and analysis |
| Interoperability | INT | I1 the exchange platform · I2 membership of the exchange · I3 exchange standards · I4 the catalogue of services · I5 shared building blocks, including the payment rail |
| Digital Identity | IDN | N1 identity coverage · N2 authentication services · N3 use of identity by services · N4 identity for children · N5 legal validity and e-signature |

A country may add a sub-component or merge two, but it keeps the five domains and their codes, so that every finding, every gap and every line of the roadmap can be traced back to one domain.

## Who uses it, at which step

The people named below are those of the method. The **facilitator** is the member of the assessment team who plans and runs the assessment and keeps its evidence. A **respondent team** is the unit of the body that answers for one domain, led by its **respondent team lead**, with one **section lead** for each section of its questionnaire. A **focal point** is one person in each other body involved, who confirms or corrects what is said about that body's systems. The **validation chair** is a senior official named by the sponsor of the assessment, who chairs the final validation workshop and closes disputed points. The **reviewers** check the work of each step before the next one starts.

| Step of the method | What happens | Who uses the toolkit | The files used |
|---|---|---|---|
| 1. Fix the scope of the assessment | The team agrees which domains, systems and bodies the assessment covers, and which body answers for each domain | The facilitator, with the ministry that sponsors the assessment | This page: the five domains and their sub-components |
| 2. Run the automatic desk assessment | An AI assistant reads the country's public documents against every question and drafts a first answer to each, with its source; nothing it drafts counts as a finding | The facilitator runs it; the reviewers read the output of each stage before the next runs | `question-bank.md` |
| 3. Send the questionnaires | One questionnaire goes to the respondent team of each domain, which answers with evidence | The respondent teams, guided by the guide for the respondent; the facilitator, guided by the guide for the facilitator | `questionnaires/Q-GOV.md`, `questionnaires/Q-ACC.md`, `questionnaires/Q-DAT.md`, `questionnaires/Q-INT.md`, `questionnaires/Q-IDN.md` |
| 4. Verify before scoring | Each answer is checked against documents, in interviews and workshops, and in a validation session with the people who gave it | The facilitator, with the respondent team leads, section leads and focal points; the validation chair at the final validation workshop | `verification-templates.md` |
| 5. Score each domain | Each sub-component is placed at one of the five stages from the verified answers only, and each domain gets a score and a stage | The facilitator proposes, with the help of the scoring prompt; the reviewers check | `scoring-criteria.md` |

Steps 6 to 9 of the method, from the gap register to the adopted roadmap, use the results of step 5 and the worked examples, not the toolkit.

## The files of the toolkit

| File | What it holds |
|---|---|
| `README.md` | This page: what the toolkit is, who uses it at which step, and its files |
| `question-bank.md` | Every question of the assessment, arranged by domain and sub-component, each with its code, the evidence that answers it and what a good answer looks like; and the form in which the AI assistant is given the bank in step 2 |
| `scoring-criteria.md` | For every sub-component, what places it at each of the five stages; the rule by which sub-component scores make a domain's score and stage; the scoring prompt with which an AI assistant proposes a stage; and the record in which the assessor confirms it |
| `questionnaires/Q-GOV.md` | The questionnaire for governance and policy, with the legal framework, with its guide for the respondent and its guide for the facilitator |
| `questionnaires/Q-ACC.md` | The questionnaire for Access, with its two guides |
| `questionnaires/Q-DAT.md` | The questionnaire for Digital Data, with its two guides |
| `questionnaires/Q-INT.md` | The questionnaire for Interoperability, with its two guides |
| `questionnaires/Q-IDN.md` | The questionnaire for Digital Identity, with its two guides |
| `verification-templates.md` | The templates for verifying the answers: the map of the bodies involved, the plan of sessions, the table of reconciled answers and the agenda of the validation workshop |

The sub-component codes, such as `D2` for state registers, are the same in the question bank, the questionnaires and the scoring criteria, so that a first answer from the desk assessment, an answer in a questionnaire and a stage in a domain report can each be traced to one sub-component. The question codes, such as `DAT-Q03`, name the questions of the question bank; each questionnaire numbers its own questions within each sub-component.

## Where this course teaches it

Module 1 of this course teaches the use of the toolkit: subtopic 1.4 the desk assessment with the question bank, subtopic 1.5 the five questionnaires, subtopic 1.6 the verification, and subtopic 1.7 the scoring on the five stages. Subtopic 6.9 runs the scoring prompt from beginning to end.

## Sources

- GovStack, *Public Administration Ecosystem Reference Architecture (PAERA)*, version 1.0, 2024, sections 3.3.1 (the five domains) and 5.3 (the nine questions a national assessment answers). https://paera.govstack.global/
- UNDP, *Digital Development Compass — Methodology*, web page (the five stages and the range of scores). https://digitaldevelopmentcompass.undp.org/methodology

## The pages of the toolkit

- [The question bank](question-bank.md)
- [Q-ACC — The Access questionnaire, with its guide for the respondent and its guide for the facilitator](questionnaires/Q-ACC.md)
- [Q-DAT — The Digital Data questionnaire, with its guide for the respondent and its guide for the facilitator](questionnaires/Q-DAT.md)
- [Q-GOV — The Governance and Policy questionnaire, with its guide for the respondent and its guide for the facilitator](questionnaires/Q-GOV.md)
- [Q-IDN — The Digital Identity questionnaire, with its guide for the respondent and its guide for the facilitator](questionnaires/Q-IDN.md)
- [Q-INT — The Interoperability questionnaire, with its guide for the respondent and its guide for the facilitator](questionnaires/Q-INT.md)
- [The scoring criteria](scoring-criteria.md)
- [The templates for verification](verification-templates.md)

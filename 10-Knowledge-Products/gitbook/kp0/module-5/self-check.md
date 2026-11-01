---
description: "Four questions drawn from the pages of module 5."
icon: circle-check
---

# Self-check — Module 5

**Module 5 — Orchestrate with the plugin: build a toy prototype.** Answer each question before you read the answer beside it.

Five questions, drawn from the five pages. Questions 1 and 3 are multiple choice. Questions 2, 4 and 5 ask for a short answer, which is right if it makes the point of the model answer. Four or five right means Ready; below four, read again the page named beside each question you missed.

| # | Question | Model answer | Drawn from |
| --- | --- | --- | --- |
| 1 | Setting up the project refuses a constraint you typed: 'No session publishes anything (decided 26 October)'. What do you do? (a) Ask the session to accept it anyway. (b) Remove the date: the constraint stands without it, and the date belongs in the log. (c) Leave the constraint out. (d) Start a new project. | (b). The constants hold only what does not change with time. The rule is a constant; when it was decided is a dated fact, which the log keeps. | [5.1](5-1.md) Set up the project |
| 2 | The count of requirements against the goal says: 14 requirements, 11 carried by the goal, 3 by none. The orchestrator proposes to start building. What must be true first? | Each of the 3 is listed with a reason it is left out, and the reason holds; and the count was seen to fail once on a planted mistake. Otherwise the build silently drops three things the prototype was meant to do. | [5.2](5-2.md) Decide before you build |
| 3 | The work session reports: 'the goal is built and works'. Its evidence is that the code compiles. What do you rule? (a) Accepted. (b) Not accepted: building is reported only when it was seen running, with the checks' results. (c) Accepted, if the review agrees. (d) Ask the work session to say it again. | (b). A build that compiles is not a build that runs. The page of faults for building refuses exactly this, and the review must run the checks itself. | [5.3](5-3.md) Build one goal per round |
| 4 | Your toy's note says: 'The registry does not register a child twice.' Your duplicates count found 4 of the 8 children on more than one list caught from every entry. What should the note say instead? | What the count showed, as a limit of the one step it tested: the search finds 4 of the 8 from every list, and misses each of the other 4 on the list where the family name is spelt differently; whether any other step would find them is not shown. And that the numbers are set in the made-up data. | [5.4](5-4.md) Check at the real thing |
| 5 | The toy works on screen, and its note says what it shows and what it does not. The orchestrator proposes one more round: a way to look a learner up. What do you check before you rule? | Whether the question the prototype was built to answer is already answered. If it is, stop: a prototype that keeps growing turns into the system without anyone deciding to build one. Take its documents, not its code, to where the real thing is built. Deciding to stop is yours, not the orchestrator's. | [5.5](5-5.md) Judgement: what a toy proves |

Back to [Module 5](README.md).

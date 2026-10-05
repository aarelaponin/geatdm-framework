---
description: "An applicant uses PHEQA's self-service once or twice in its life. An inspector uses her screens every day, many times a day."
---

# E3.4 — An inspector's screen at PHEQA, before and after five rules

**Subtopic:** 3.4 — Screens officers can use (supplementary)

**Public anchor:** None; the content is the SDD method's own: the rules for screens that officers use every day, and the rule that the AI assistant that drafts a screen marks an open question as to be confirmed, with an owner, instead of inventing an answer

**Simulated case:** This is a simulated case for Progressa, a fictional country; every institution, name, date and figure in it is invented.

**What it shows.** An officer's screen at PHEQA before and after five rules: the institution's address retyped by the officer, then filled from the register; a list of all institutions to choose from, then a search; a decision recorded in free text, then chosen from the decisions allowed; a hidden rule, then stated on screen; and an open question the AI assistant that drafted the screen met, shown as "to be confirmed by the Registrar" instead of a guess.

**Form of this example.** The five rules are the method's and name no country. The screen is the inspector's screen *record an inspection visit*, filled for Progressa.

## Why officers' screens are different

An applicant uses PHEQA's self-service once or twice in its life. An inspector uses her screens every day, many times a day. A small waste on her screen, one field typed again, one long list scrolled, is repeated thousands of times a year, and every retyped value is a chance for a mistake. Screens left to habit come out like a form on a public website: everything typed, everything free. The five rules stop that.

## Before

The first draft of the screen *record an inspection visit*, as an AI assistant generated it from the story:

| Field on the screen | How the inspector fills it |
|---|---|
| Institution | Chooses from a drop-down list of all 214 institutions in the register, in the order they were registered |
| Address of the premises | Types the address |
| Date of the visit | Picks a date |
| Outcome | Types a sentence in a free-text box |
| Number of inspectors who must sign | A box already filled with "2" |
| *(nothing)* | — |

The inspector can save the visit on any date, even one more than a year before the recommendation it will support.

## After

| Field on the screen | How the inspector fills it | The rule applied |
|---|---|---|
| Institution | Types part of the name or the register number, and picks from the few that match | 2. Never choose from an endless list: a search, not a list of 214 |
| Address of the premises | Filled from the register of institutions for the institution chosen; shown, not typed | 1. Never type what the system already knows |
| Date of the visit | Picks a date | — |
| Outcome | Chooses one of the outcomes allowed: *meets the standards*, *meets the standards with conditions*, *does not meet the standards*; a box for the inspector's findings sits beside it | 3. A decision is chosen from the decisions allowed, not written as free text |
| A line of text under the date | "A recommendation to the minister may rest only on a visit made within 90 days before it." | 4. A rule that governs what the officer does is stated on the screen, not hidden in the system |
| Number of inspectors who must sign | Shown as **"To be confirmed by the Registrar of PHEQA"**, with no value | 5. An open question is shown with its owner, not answered by a guess |

## The fifth rule, up close

The AI assistant that drafted the screen met a question nobody had answered: how many inspectors must sign a visit? The regulations say "the inspectors", in the plural, and give no number. The first draft filled in "2", which looked reasonable and had no source. Under the fifth rule, the AI assistant marks the field as to be confirmed and names the owner of the question. The screen cannot be accepted while the mark is there, so the question reaches the Registrar instead of being built as a fact. She answered "one inspector and the head of the inspectorate", and the field became two named signatures.

## What the inspector said

The draft and the corrected screen were shown to an inspector of PHEQA, who confirmed each change. Of the first rule she said: "On paper I copy the address from the file. If the screen already knows it, I will copy it wrong one day." Of the second: "There are two institutions whose names begin the same way. In a long list I would pick the wrong one."

**What to look for in an officer's screen.** Sit beside an officer while she uses it. Count the values she types that the system already holds, the lists she scrolls, and the decisions she writes in her own words. Each one is a rule broken and a mistake waiting to happen.

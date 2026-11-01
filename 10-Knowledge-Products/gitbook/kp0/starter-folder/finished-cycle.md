---
description: "One finished cycle, from the starter folder: read it as a model before you write your own."
---

# One finished cycle

## A finished cycle: children on more than one list

*Save as `example/README.md`.*

This is one real piece of work from a prototype learner registry, built for the fictional country of Progressa. Here it is rewritten in plain language, one page per document. The prototype holds made-up data for 300 children, spread over three lists: the school census kept by the Ministry of Education (MoEYS), the candidate list of the National Examinations Authority (PNEA), and the list of the social grant programme. Some children appear on more than one list, and some have a name spelt differently on one list.

The question was how many children appear on more than one list, and how many of them the prototype's search recognises as already registered.

Read the three files in order:
1. `1-instruction.md`, written before the work started.
2. `2-report.md`, by the work chat, with no verdict.
3. `3-review.md`, by a review chat that worked the figures out again its own way.

The original documents are longer. This version keeps what you need to work by hand, and leaves out the rest.

---

## Instruction — How many children appear on more than one list, and how many does the prototype catch?

*Save as `example/1-instruction.md`.*

*Version 1 · 30 October 2026 · kind of work: checking*

### 1. What it serves
A note to the Permanent Secretary will say how well the registry avoids registering the same child twice. The note needs a figure that has been checked.

### 2. The material
- The three lists of children, and the key that says which entries belong to the same child.
- The prototype's search, and its description: it finds a child with "the same family name, given names and date of birth, letters compared without regard to case".
- The prototype itself, running.

### 3. The task
1. **The set.** From the key, list every child who appears on more than one list, with each entry and whether it is spelt differently. Count them. Then list the entries from the three lists themselves, and set the two lists against each other.
2. **The catch.** For every entry of those children, run the prototype's own search. An entry is *found* when the search returns exactly that child, *missed* when it returns nothing, and *wrong* for anything else. A child is *caught* only when every one of its entries is found.
3. **The planted fault.** Alter one found entry, in memory only, and see that the child leaves the caught count.
4. **At the real thing.** In the running prototype, try two entries, one found and one missed, and record what the screen shows.
5. **The figures.** In one paragraph: how many children are on more than one list, how many are caught, how many are not, and why.

### 4. How you will know it is done
- T1 — The set and its counts, both ways, with every difference named.
- T2 — One row per entry, with its result, and the counts worked out from those rows.
- T3 — The planted fault moved the caught count.
- T4 — The two tries on screen, and whether they agree with step 2.
- T5 — The figures, in the report's first paragraph.

### 5. How the review will check it
It will count again from the three lists alone, without the key and without the prototype's search, by matching names and dates itself.

### 6. How this work can fail while seeming to succeed
The faults of checking (`kinds/checking.md`). Particular to this task:
- quoting the planned figures instead of counting;
- matching the names yourself instead of using the prototype's search;
- counting a child as caught from one entry while another of its entries was missed;
- searching from only one list;
- searching an empty registry, so that nothing is found;
- the data changing between the count and the catch.

### 7. Out of scope
Change nothing you check. Whether the search *should* catch a spelling variant is a question for the owner: report the figure and leave the judgement.

### 8. Where the report goes
`2-reports/`, from the report form, with no verdict.

---

## Report — How many children appear on more than one list, and how many does the prototype catch?

*Save as `example/2-report.md`.*

*Answers: the instruction, version 1 · 30 October 2026*

### 1. The answer first
**40 children** appear on more than one list: 22 on two lists and 18 on three, with 98 entries between them. 20 of them have one entry spelt differently. The prototype's search **catches 20 of the 40 from every one of their entries**. **It does not catch the other 20**, and those are exactly the 20 with a spelling variant. Each of them is missed from the one entry spelt differently, and found from every other entry. No entry returned the wrong child. The reason is the search's own rule, which asks for "the same family name, given names and date of birth", and a variant spells the family name another way. On screen, both entries tried agreed with this. One altered entry moved the caught count from 20 to 19, so the count can fail.

### 2. The tests, one by one

| Test | Result | Evidence |
|---|---|---|
| T1 | 40 children, 98 entries. The key and the lists agree, with no differences | the set, counted both ways |
| T2 | 78 entries found, 20 missed, 0 wrong. 20 children caught, 20 not | one row per entry, and the count worked out from those rows |
| T3 | Caught count moved from 20 to 19 | the run with the altered entry |
| T4 | The found entry showed the child as already on the registry. The variant showed that no learner on the registry has this family name, given names and date of birth | two screenshots |
| T5 | The paragraph above | |

### 3. Found, not fixed
- No defect in the search: it does what its description says.
- Whether a later step, the check against the birth register, would catch some of the 20 was not asked and not run. It is a candidate for a new instruction, if the note needs the figure for the whole registration and not only its search.

### 4. What I could not establish
- Only two of the 98 entries were tried on screen, as instructed.
- A second start of this same piece of work appears in the record, 82 seconds after this one. This chat did not make it, and could not tell whether that other chat is still running.

### 5. Corrections to the instruction
None.

### 6. What was not finished
Nothing.

### 7. The outputs
The set, the table of entries, the planted run, the two screenshots and this report.

*No verdict.*

---

## Review — How many children appear on more than one list, and how many does the prototype catch?

*Save as `example/3-review.md`.*

*Reviews: the report against the instruction, version 1 · 30 October 2026*

**Verdict: accepted.** Both figures were worked out again from the three lists alone, by a route the report did not use, and they agree entry by entry.

### 1. The tests, one by one
T1 to T5 are met. Each test's evidence was opened and read, and the two screenshots show what the report says they show.

### 2. One figure worked out again
- **The report's route:** the key gave the set, and the prototype's search decided each entry.
- **This review's route:** the three lists only, without the key and without the prototype. The rule: two entries belong to the same child when the date of birth, the school and the given names are the same, and the family names are the same or differ by one letter.
- **Result:** 40 children on more than one list (22 on two, 18 on three), 98 entries, 20 spelt differently. Of these, 20 are caught and 20 are not, and the 20 not caught are exactly the 20 spelt differently. **Agree**, for every one of the 98 entries.
- **The review's own planted fault:** altering one entry split that child in two, and the counts moved. The count can fail by this route too.

### 3. The faults of checking
The figure was worked out again, the check was repeated on other members of the set, and a planted fault was seen to fail.

### 4. The verdict, and what follows
Accepted. The figure may go into the note: 20 of the 40 are caught from every entry, and the search misses each of the other 20 from the one entry spelt differently.

### 5. Found, not fixed
- The second start of the same piece of work, which the report raised, is for the owner to settle.

Back to [the starter folder](README.md).

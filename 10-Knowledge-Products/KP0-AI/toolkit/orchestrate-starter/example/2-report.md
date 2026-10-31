# Report — How many children appear on more than one list, and how many does the prototype catch?

*Answers: the instruction, version 1 · 30 October 2026*

## 1. The answer first
**40 children** appear on more than one list: 22 on two lists and 18 on three, with 98 entries between them. 20 of them have one entry spelt differently. The prototype's search **catches 20 of the 40 from every one of their entries**. **It does not catch the other 20**, and those are exactly the 20 with a spelling variant. Each of them is missed from the one entry spelt differently, and found from every other entry. No entry returned the wrong child. The reason is the search's own rule, which asks for "the same family name, given names and date of birth", and a variant spells the family name another way. On screen, both entries tried agreed with this. One altered entry moved the caught count from 20 to 19, so the count can fail.

## 2. The tests, one by one

| Test | Result | Evidence |
|---|---|---|
| T1 | 40 children, 98 entries. The key and the lists agree, with no differences | the set, counted both ways |
| T2 | 78 entries found, 20 missed, 0 wrong. 20 children caught, 20 not | one row per entry, and the count worked out from those rows |
| T3 | Caught count moved from 20 to 19 | the run with the altered entry |
| T4 | The found entry showed the child as already on the registry. The variant showed that no learner on the registry has this family name, given names and date of birth | two screenshots |
| T5 | The paragraph above | |

## 3. Found, not fixed
- No defect in the search: it does what its description says.
- Whether a later step, the check against the birth register, would catch some of the 20 was not asked and not run. It is a candidate for a new instruction, if the note needs the figure for the whole registration and not only its search.

## 4. What I could not establish
- Only two of the 98 entries were tried on screen, as instructed.
- A second start of this same piece of work appears in the record, 82 seconds after this one. This chat did not make it, and could not tell whether that other chat is still running.

## 5. Corrections to the instruction
None.

## 6. What was not finished
Nothing.

## 7. The outputs
The set, the table of entries, the planted run, the two screenshots and this report.

*No verdict.*

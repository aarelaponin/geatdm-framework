**Subtopic:** 3.2 — Every way it can go wrong, written down

**Public anchor:** GovStack, Registration Building Block specification, sections 6.3.3.1, 6.3.3.2 and 6.3.3.3 (rules on each field, the check against an external source, and the test of completeness), as published kinds of failure

**Simulated case:** This is a simulated case for Progressa, a fictional country; every institution, name, date and figure in it is invented.

# E3.2 — The failures of "apply for a provisional licence", each with its own ending

**What it shows.** The failures of the provisional-licence story, each with its own ending: PNIA does not answer at sign-in; the applicant leaves a required document out; the proposed name is already held by a registered institution; the fee is not recorded; the applicant abandons the form and returns two days later.

**Form of this example.** The way a failure is written, against the step it leaves, with its condition, its handling and its ending, is the method's and names no country. The failures are filled for Progressa, against the main story of E3.1.

## The rule

A story is finished only when every failure has its own ending. For each failure the story says three things: what the system notices, what it does, and how the story ends: in failure, in success, or by going back to a named step of the main story. And for each ending it says which of PHEQA's guarantees still holds.

## The five failures

| Leaves step | What the system notices | What it does | How it ends |
|---|---|---|---|
| 1 | **PNIA does not answer at sign-in.** The sign-in is sent to PNIA and no answer comes back within the time PNIA's service promises. | Tells the applicant that the national sign-in is not available at the moment and that nothing has been started. Offers no other way of signing in. | **In failure.** Nothing is recorded. The guarantee holds: no application without a confirmed applicant. |
| 7 | **A required document is left out.** The applicant has not attached the evidence of funding, which the regulations list for every kind of institution. | Names the missing document beside the particular it belongs to, and keeps everything the applicant has given. | **Back to step 6.** The applicant attaches it and goes on. |
| 7 | **The proposed name is already held.** The register of institutions holds a registered institution under the same name. | Says that the name is held by a registered institution and shows that institution's register number, so the applicant can see which one. Keeps every other particular. | **Back to step 6.** The applicant proposes another name. |
| 8 | **The fee is not recorded.** The Payments block does not confirm the payment: the applicant cancels it, or the confirmation does not arrive. | Tells the applicant that the fee has not been received and the application has not been made. Keeps everything the applicant gave, for as long as the applicant stays signed in. If the applicant says the money has left its account, the system tells it to bring the payment reference to PHEQA's finance officer, who records the payment by hand; that is the goal *record the application fee*. | **Back to step 8**, to pay again; or **in failure**, if the applicant stops. The guarantee holds: no application is recorded without the fee. |
| any step before 8 | **The applicant abandons the form and returns two days later.** The sign-in lapses before the application is confirmed. | Nothing given is kept. When the applicant signs in again, the self-service shows no application made in that session. | **In failure.** Nothing is recorded. |

## Two of them are decisions, not facts

Three of the five endings follow from the main story and the guarantee. Two are decisions that an official of PHEQA had to take, and the story records who took them.

**The fee that is not confirmed.** Should the application wait for the fee, or not be made at all? The head of the registration desk decided: not made at all. An application waiting for its fee would be a third state of an application, which no other goal uses and nobody had asked for.

**The applicant who returns two days later.** Should what the applicant gave be kept as a draft? Keeping a draft would need PHEQA to hold half-finished applications, with rules for how long and who may see them. The Registrar decided not to keep drafts in the first version, and recorded the cost: an applicant who stops loses what was typed. The question stays open, owned by the Registrar, for the next version.

## What the list does not claim

An AI assistant proposed the first list of failures, step by step, each with a proposed ending, and the officials accepted or set aside each one. The list is a starting point. It does not claim that every failure has been found; the review of the screens (E3.6) and the walk-through (E3.5) are where more are found.

**What to look for before you accept a story.** Count the endings. A story with only a success ending has not been finished. For each failure, ask who decided the ending. If the answer is "the builder", the decision was taken by the wrong person.

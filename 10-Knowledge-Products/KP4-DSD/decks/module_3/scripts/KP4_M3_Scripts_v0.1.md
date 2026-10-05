# KP4 Module 3 (Topic 3) — Voice-over scripts

Spoken narration only, one section per video (3.1 – 3.6), slide-by-slide, matching `KP4_M3_Deck_v0.1.pptx`. Each video is standalone. Sources slides carry no narration — hold ~5 seconds; links go in the video description.

---

## 3.1 One goal, written as a story a builder can follow (~5 min)

> *The builder must not have to work anything out or ask anybody anything.*

### Slide — Title (3.1)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — The builder builds what the documents say, and guesses the rest.

Your supplier's builder will build what the documents say, and guess at whatever they leave out. A guess made late, under deadline, is how an agreed service changes on the way. So every goal is written as a story the builder can follow.

### Slide — A goal, and its story

A service is made of goals. A goal is one thing a person wants to get done: apply for a licence, record a fee, record a visit. Each goal is written out as a story: step by step, who acts and what happens, until the person has what they came for. The story uses plain words, so the official who runs the service can read it and say: yes, that is our work.

### Slide — What a written goal holds

A written goal holds five things. Who has the goal, and who else takes part. What starts it, and what must already be true. What the authority guarantees, whatever happens. The main steps, on the path where nothing goes wrong. And the entries of the register of requirements that the goal serves, so that every step can be traced to something somebody asked for.

### Slide — Progressa: apply for a provisional licence

In Progressa, the quality authority for higher education, PHEQA, licenses private institutions. Its first goal is to apply for a provisional licence. The applicant is a person who intends to run a private university, university college or technical institute. PNIA, the national identity authority, tells PHEQA who the applicant is. The Payments block takes the fee. The goal serves four entries of PHEQA's register: applying through the self-service, the application fee, the particulars the regulations list, and a name no registered institution holds. PHEQA guarantees one thing, whatever happens: no application is recorded unless the applicant confirmed it and the fee was paid.

### Slide — The main story, in nine steps

The main story has nine steps. The applicant signs in through PNIA and asks to apply. The system shows PHEQA's standards for new institutions, with their version. The applicant states the kind of institution, gives the proposed name and each particular, and attaches the evidence of funding. The system checks that nothing is missing and that no registered institution holds the name. The applicant confirms and pays. The system records the application and shows the date it was received.

### Slide — What the published picture leaves to you

The GovStack Registration specification publishes the general picture of a registration service. An analyst creates the screens an applicant sees, their order, and the fields on each. An operator then decides: approve, reject, or send back for correction. Your story fills it for one service: which particulars, from which list, checked against which register, at which fee, and with what promise. The operator's decision is a goal of its own, with its own story.

### Slide — Before you accept a story

An AI assistant drafted the story from those four entries; the supplier's analyst ruled on each step. The draft had a tenth step, an e-mail to the applicant, that no entry asked for, and PHEQA holds no e-mail address it could trust. The analyst struck it out and wrote a question for the Registrar instead. Before you accept a story, read it aloud to the head of the registration desk. At each step, ask: who does this, and where does what they see come from?

### Slide — In one sentence

Read the story as the builder would. Wherever the builder would have to guess or ask, the story is not finished. Send it back, with the question written down.

### Slide — Sources

*(No narration.)*

---

## 3.2 Every way it can go wrong, written down (~5 min)

> *A story is finished only when every failure has its own ending.*

### Slide — Title (3.2)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — A service is judged on its bad days.

A service is judged on its bad days: the sign-in that does not answer, the document left out, the payment that never arrives. If nobody wrote down what happens then, the builder decides, alone and under deadline.

### Slide — Each failure, written down

For each failure, the story says what the system notices, what it does, and how the story ends. There are only three endings: the goal fails, the goal still succeeds, or the person goes back to a named step of the main story. For each ending, the story also says which of the authority's guarantees still holds. A failure without its own ending is a decision left to the builder.

### Slide — Kinds of failure the Registration specification names

The GovStack Registration specification names the checks a registration service makes. There are rules on each field: whether it is required, a number within limits, a date, a file of the right size and type. A field can be checked against another body's records. And the system checks that everything required is there, and should not let an applicant send an application that is incomplete. Every check that can fail needs its ending in the story.

### Slide — Progressa: five failures, five endings

Here are the five failures of PHEQA's goal. PNIA does not answer at sign-in: the applicant is told that nothing has started. The evidence of funding is left out: the system names it and keeps everything else. The proposed name is already held: the system shows which registered institution holds it. The fee is not confirmed: the application is not made. And the applicant who leaves and returns two days later finds nothing kept. Whatever the failure, PHEQA's guarantee holds: no application is recorded unless the applicant confirmed it and paid.

### Slide — Two endings were decisions

Three of those endings follow from the story. Two were decisions an official had to take. Should an application wait for its fee? The head of the registration desk said no: a waiting application would be a third state that no other goal uses and nobody asked for. Should half-finished applications be kept as drafts? The Registrar said not in the first version, and recorded the cost: an applicant who stops loses what was typed. That question stays open, and the Registrar owns it.

### Slide — Before you accept a story

Before you accept a story, count its endings. A story with only a success ending is not finished. Then, for each failure, ask who decided the ending. If the answer is the builder, the decision was taken by the wrong person. An AI assistant can propose the first list of failures, step by step, and officials accept or set aside each one. But no list is complete. The walk-through and the review are where more failures are found.

### Slide — In one sentence

Ask what happens when each step fails. If the story has no answer, the builder will choose one. Write the ending down before anything is built.

### Slide — Sources

*(No narration.)*

---

## 3.3 Screens worked out from the story, every value with its source (~5 min)

> *Each screen serves a step; each value on it says where it comes from.*

### Slide — Title (3.3)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — A screen built from a list of fields explains nothing.

A screen designed from a list of fields shows everything and explains nothing. A screen worked out from the story shows what a person needs at that step, and says where each value on it comes from.

### Slide — Walk the story, not the list of records

The screens are worked out after the story is written, by walking it step by step. A step where the person asks, states, gives or confirms something gets a screen. A step that is wholly the system's gets a screen only if it shows something the person must read before going on. Two steps share a screen when nothing the system does stands between them. So every screen serves a step, and you can say which one.

### Slide — Every value has one of four sources

Every value on every screen comes from one of four places. It is taken from another body, such as the identity authority or the Payments block. It is chosen from a list kept once for the whole service. It is read from a record or a setting the authority already keeps. Or it is entered here, typed by the person, and then the screen record says why no other place has it.

### Slide — Progressa: five screens

PHEQA's goal, to apply for a provisional licence, has five screens. The first asks to apply. The second shows PHEQA's standards and asks for the kind of institution. The third takes the particulars, and also serves two failures: a document left out, and a name already held. The fourth confirms and takes the fee. The fifth shows the application received. Each screen names the steps and the failures it serves.

### Slide — Where each value comes from

Now point at values. The applicant's name is taken from PNIA's sign-in; nobody types it. The kind of institution is chosen from PHEQA's shared list of three, kept once in the shared groundwork and re-used by every goal that asks for a kind. The fee is read from the setting that PHEQA's finance officer owns. The proposed name is entered here, because no other body knows it yet, and it is checked against the register of institutions.

### Slide — The published picture of screens and fields

The GovStack Registration specification describes the same work from the builder's side. An analyst creates the screens and their order: a guide, the applicant's form, the upload of documents, the payment, and a send screen. Each field has a name, a type, and whether it must be filled. Lists, which the specification calls catalogues, are reusable across all services in the same installation. Progressa's five screens follow much the same order.

### Slide — The check against the story

The screens are checked against four lists the story wrote: its steps, its failures, the records it reads or changes, and the settings and lists it uses. In Progressa's first draft, the third screen asked for the applicant's phone number. No list of the story names it, and PNIA does not release it. It was struck out, and a question went to the Registrar: does PHEQA need to telephone an applicant?

### Slide — In one sentence

Point at any value on any screen and ask where it comes from. There should be one of four answers. Anything else is a question for the story's owner.

### Slide — Sources

*(No narration.)*

---

## 3.4 Screens officers can use (~5 min)

> *An officer never types what the system already knows, and never chooses from an endless list.*

### Slide — Title (3.4)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — A small waste on an officer's screen is repeated thousands of times a year.

An applicant uses the authority's self-service once or twice. An officer uses her screens many times a day. A small waste on her screen is repeated thousands of times a year, and every value typed again is a chance for a mistake.

### Slide — Five rules for an officer's screen

Screens left to habit come out like a form on a public website: everything typed, everything free. The SDD method, specification-driven development, sets five rules for screens that officers use. Never type what the system already knows. Never choose from an endless list. Choose a decision from the decisions allowed. State on the screen the rule that governs the work. And show an open question with its owner, instead of a guess.

### Slide — Before: the inspector's first draft

Here is a screen at PHEQA, record an inspection visit, as an AI assistant first drafted it from the story. The inspector picks the institution from a list of all 214 in the register. She types the address of the premises. She writes the outcome as a sentence. A box says two inspectors must sign, though nobody said so. And she can save a visit made on any date, even one more than a year before the recommendation it will support.

### Slide — After: rules 1 to 4

After the first four rules, she types part of the name or the register number and picks from the few that match. The address is filled from the register and shown, not typed. The outcome is chosen from three: meets the standards, meets them with conditions, or does not meet them, with a box beside it for her findings. And a line under the date states the rule: a recommendation may rest only on a visit made within ninety days before it.

### Slide — Rule 5: to be confirmed, with an owner

The fifth rule matters most. The AI assistant that drafted the screen met a question nobody had answered: how many inspectors must sign? The regulations speak of inspectors and give no number. The draft filled in two, which looked reasonable and had no source. Under the fifth rule, the field shows: to be confirmed by the Registrar of PHEQA. The screen cannot be accepted while that mark stands, so the question reaches the Registrar. She answered: one inspector and the head of the inspectorate.

### Slide — Sit beside an officer

An inspector of PHEQA confirmed each change. Of the address, she said that on paper she copies it from the file, and that if the screen already knows it, she will copy it wrong one day. Of the long list, she said two institutions have names that begin the same way, and in a long list she would pick the wrong one. Before you accept an officer's screen, sit beside an officer while she uses it, and count what she types, scrolls and writes.

### Slide — In one sentence

Count what an officer types that the system already knows, and every list she scrolls. Each one is a rule not followed, and a mistake waiting to happen.

---

## 3.5 The walk-through your officials click (~5 min)

> *The walk-through is produced from the written screens, never drawn by hand, and every page shows its version.*

### Slide — Title (3.5)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Officials judge a service by clicking through it.

Officials cannot judge a service from a list of fields. They can judge it by clicking through it. A walk-through lets them do that before anything is built, and shows them that they are judging the screens the builder will build.

### Slide — What the walk-through is

The walk-through is a set of simple web pages, one for each screen, linked in the order the person meets them, with the failures as side paths. Nobody draws it. A program produces it from the written screens, so it shows exactly what the screens say and nothing else. When the screens change, the program produces the pages again, from the changed screens.

### Slide — Never by hand, and a version on every page

Nobody corrects a page by hand, because a page corrected by hand no longer shows what the builder will build. A drawing in a presentation tool has the same weakness: it may show what the designer hoped, and nobody can tell which version of the screens it shows. So every page carries a stamp at its top: the screens it was produced from, their version and their date.

### Slide — Progressa: the pages of one goal

In Progressa, the goal to apply for a provisional licence has five pages, one for each screen, with side pages for the failures and a page for each of the two endings. Every page carries the same stamp: the screens of that goal, version 1.2, of 14 November 2026. The Registrar of PHEQA and the supplier's builder sat at one screen, with the head of the registration desk beside them, and clicked from the first page to the end, then down each side path.

### Slide — What clicking found

Three things came up that a list of fields would never have shown. On page 2, the head of the desk asked where the applicant sees the fee. Not until page 4, so the Registrar asked for it beside the standards. On a side page, the Registrar asked whether a name held by an institution whose licence was cancelled is still held. Nobody knew, so it became an open line. On page 5, the builder learnt that the application number is not the register number.

### Slide — One shared picture

This is where the policy side and the technical side of a service meet. The Registrar and the head of the desk recognised their counter in the pages. The builder saw exactly what to build. They pointed at the same page, with the same version stamp, and agreed or disagreed about the same thing. The walk-through gives both sides one shared language, so a decision means the same thing in both rooms.

### Slide — The walk-through, clicked

Here the walk-through is clicked from the first page to the confirmation, and at each page the stamp is checked against the version of the screens. It passes when every page opens, every stamp shows the same version as the screens, and the path ends on the confirmation. Until the recording is made in Progressa's names, a storyboard stands in its place.

### Slide — In one sentence

Ask for the walk-through, not a drawing. Check the version stamp on every page, and let the official, not the builder, hold the mouse.

---

## 3.6 The review: three people, every open line given a name (~5 min)

> *The owner, the builder and the person who will live with the result agree the screens; nothing leaves the room unowned.*

### Slide — Title (3.6)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — "We will look into it" decides nothing.

A review that ends with 'we will look into it' has decided nothing. The review you convene for a goal's screens ends with a record: every open question, the person who owns it, and the date it is due.

### Slide — Three seats

Three people sit at the review. The owner of the screens answers for what the documents say. The builder says whether he can build each screen without asking anybody anything. And the person who will live with the result says whether the screens are her work as she does it. At PHEQA, those are the supplier's analyst, the supplier's builder and the head of the registration desk. The Registrar convenes the meeting and accepts its record, but takes no seat.

### Slide — Four questions every review of screens puts

The convener opens with four questions. Does every screen serve a step or a failure of the story, and is every step and failure served? Does every value say where it comes from? Could the builder build each screen without asking anybody anything? Would the person who will use it recognise it as her work? Then the person from the desk holds the mouse and clicks through the walk-through, page by page.

### Slide — Progressa: one hour, five open lines

PHEQA's review of the licence screens took one hour. Its record holds five open lines. Show the fee on the second screen as well. Decide whether a name held by an institution whose licence was cancelled is still held. List the members of the governing board one to a line. Decide what the screen may say when PNIA does not answer. Check whether anyone asked for a printed confirmation. Every line has a named owner and a date.

### Slide — After the room

After the meeting, the owner changes the screens for the lines that are his, and the walk-through is produced again. Each other answer is written into the document that owns the fact: the shared lists and settings, the architecture, or the register of requirements. If the room cannot name an owner for a line, the record says: owner to be named by the Registrar. She names one before she accepts the screens. She accepts them when every line is closed, or allowed to stay open with its owner.

### Slide — Working together, through a gate

PAERA, GovStack's reference architecture for public administration, gives a section to digital co-creation. It says a transformation has a higher chance of success when it is done within the local digital ecosystem, and it recommends robust project governance and stage gates. The review is a gate of that kind for one goal. Before you accept its record, count the open lines and the owners. A record with no open lines usually means the review was not held, or nobody spoke.

### Slide — In one sentence

Seat the owner, the builder and the person who will use the service. End with every open line written down, each with a name and a date.

### Slide — Sources

*(No narration.)*

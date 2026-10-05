# KP4 Module 1 (Topic 1) — Voice-over scripts

Spoken narration only, one section per video (1.1 – 1.5), slide-by-slide, matching `KP4_M1_Deck_v0.1.pptx`. Each video is standalone. Sources slides carry no narration — hold ~5 seconds; links go in the video description.

---

## 1.1 Where an agreed service gets lost (~5 min)

> *An agreed service is lost at three places: a question nobody decided, an answer nobody passed on, a rule nobody enforced.*

### Slide — Title (1.1)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — The service that arrives is not the one they agreed.

Your minister agreed a service with the officials who will run it. A year later, the service that arrives is not the one they agreed. You will be asked why. There is an answer you can give, and it has three parts.

### Slide — Between what was agreed and what runs

Between what officials agree and what a system does, there is a wide space. In that space, every question about the service must be answered by somebody. What happens when an applicant leaves a document out? Which body keeps the institution's address? If nothing forces those questions into the open, they are still answered: quietly, by whoever is at the keyboard that day, and with no record. The service is delivered. It simply does not do what anybody agreed it would do.

### Slide — Three places a service gets lost

The SDD method, short for specification-driven development, names three places where this happens. First, a question nobody decided: the people who agreed the service never settled a point, so the builder settled it alone, or nobody did. Second, an answer nobody passed on: somebody decided, but the decision never reached the document or the person who needed it. Third, a rule nobody enforced: the rule was written down, but no check, no person and no program held anyone to it.

### Slide — One institution, two counters

Here is how it looked in Progressa. Harbourview University College, a private institution, applied to PHEQA, the quality authority, for its licence. In June PHEQA entered it in the register of institutions, under the number INS-00217. In September MoEYS, the ministry of education, asked for the same particulars on its own form. The college had moved its office in August and told PHEQA, but not the ministry. So the ministry asked why the two addresses differed. In the college registrar's words: everybody had agreed, in the national strategy, that an institution gives its particulars to the state once. We gave them twice and were then asked to explain the difference.

### Slide — Each loss, placed

Now place each loss. Nobody ever decided whether MoEYS may read PHEQA's register, so the ministry built its own form and asked again. That is a question nobody decided. PHEQA gave the college a number, but nobody passed it to MoEYS, so the ministry's form had no place for it and could not look the college up. That is an answer nobody passed on. And the rule that a fact is entered once was written in the national strategy, but no document of either project tested it, and no review asked about it. That is a rule nobody enforced.

### Slide — None of the three is a programming error

Notice what is missing from this story: a programming error. Each loss is a decision about the service that was never made, never written into the right document, or never checked. That is why the method states its purpose in one sentence. A silence that is named, owned and counted is a specification. A silence filled in with a plausible answer is a fault dressed as a specification. The method's documents exist to close the three places, so that you can tell your minister where a service was lost, and what must change.

### Slide — In one sentence

When a service goes wrong, ask where it was lost: a question nobody decided, an answer nobody passed on, or a rule nobody enforced. Then fix that place.

---

## 1.2 Three rules you can hold a supplier to (~5 min)

> *Review a story, not a list; measure against a list the design did not write; end one check on the running system.*

### Slide — Title (1.2)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — A long, confident proposal lands on your desk.

A supplier's proposal lands on your desk. It is long, it is confident, and it promises a complete service. Before you sign, three rules tell you whether you will be able to check what you are buying.

### Slide — Rule 1: review a story, not a list

The first rule: officials review a story, not a list. A list of eighty decisions can be complete and still impossible to review, because nobody can see what is missing from a list. A story shows it: a step with no response, a person who never appears again, a way of going wrong that nobody mentions. So officials agree to what a person does, step by step, and what that person sees at each step. The part a program later reads is taken from the story, never the other way round.

### Slide — A story is the shared picture

PAERA, GovStack's reference architecture for public administration, describes enterprise architecture as a set of documents meant to bridge the communication gap between business and IT, so that both sides can plan together. For one service, a story with its screens does that job. The registrar recognises her own work in it, and the builder can build from it. A list of one hundred and forty fields is shared by nobody: the registrar cannot read it, and the builder never needed her signature on it.

### Slide — Rule 2: measure against a list the design did not write

The second rule: measure the design against a list the design did not write. If the list of what must be covered is drawn up from the design itself, the design will always look complete. This is the most common way a project reports full coverage of a system that is missing half of what it needed. So the list of what was asked is written first, in the customer's own words, before any design exists.

### Slide — Rule 3: end one check on the running system

The third rule: end at least one check on the running system. Checks that compare one document with another are needed, but they share a blind spot. A set of documents can agree with each other perfectly and still describe something that does not work. So at least one check ends outside the documents: a real person finishes a real task, on the system the service will run on.

### Slide — A proposal for PHEQA, read against the rules

In Progressa, PHEQA, the quality authority for higher education, received a proposal for its registration service. It asked officials to sign a data dictionary: a list of one hundred and forty fields, the boxes its screens would hold. It promised a requirements list written from the approved design. And its testing would end on the supplier's own test server, which nobody from PHEQA uses. Each shortfall becomes a clause. PHEQA accepts stories and a walk-through, linked pages its officials click through, not fields. A register of what PHEQA asked is accepted before any design. And acceptance ends when a registration officer finishes a real task on PHEQA's own installation.

### Slide — In one sentence

Before you sign a proposal, find three things: what officials approve, what the design is measured against, and where testing ends. If any is the supplier's own, write the clause.

### Slide — Sources

*(No narration.)*

---

## 1.3 A question with a name on it is part of the specification (~5 min)

> *An open question with an owner and a date is acceptable; a question answered by a guess is a fault.*

### Slide — Title (1.3)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Every line looks certain. That is the moment to be careful.

You are asked to sign a specification. Every line in it looks certain. That is the moment to be careful, because a line that looks certain may be a guess, and nobody can tell a guess from a fact.

### Slide — The appeal period, written as a guess

In Progressa, a supplier's analyst was writing the part of PHEQA's service in which an institution appeals against a decision of the quality authority. Progressa's regulations give the right to appeal, but the text the analyst had did not say within how long. The analyst needed a number to draw the screens, so the draft said thirty days. Nobody gave that figure. It looks like a fact, and it will be built as a fact: on day thirty-one, the self-service refuses the appeal.

### Slide — What the guess costs

If the true period is longer, an institution with a lawful appeal is turned away by the system, and nobody knows why the system says thirty. The guess may even be right. It is still a fault, and a worse one than a blank would have been, because a blank is visible and a guess is not. Nobody reading the document can tell which of its figures were given and which were invented to keep the work moving.

### Slide — The same line, as a named question

Now the same line, written under the SDD method. An institution may appeal within the appeal period. The appeal period is to be confirmed by the Registrar of PHEQA by the fifteenth of November. And the document counts it: open question seven of nine. This version is not weaker. It is more complete. It says exactly what is not yet known, who will settle it and by when. The builder builds everything else and leaves the one figure to a setting the Registrar fills in.

### Slide — Three questions before you sign

Before you sign, ask three questions. First: could the builder work from this document alone, without working anything out and without asking anybody anything, apart from the named open questions? Second: was the review held, with the owner of the document, the builder and the official who will live with the result in the room? Third: is every remaining gap named, owned and counted? When all three answers are yes, the document is good enough to sign.

### Slide — Where to look in a draft

When you read a draft, look for figures, periods, roles and rules with no source beside them. Ask of each one where it came from. An honest answer is either a source, or a name and a date. And be wary of a draft with no open questions at all. In a new service, that is a warning, not a result: it usually means that somebody answered the hard questions alone.

### Slide — In one sentence

A question with an owner and a date belongs in a document you sign. A guessed answer does not, even when the guess turns out right.

---

## 1.4 Twelve documents from the request to the running service (~5 min)

> *Each document has a writer, an input, an output, a person who accepts it and a check, in a fixed order.*

### Slide — Title (1.4)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — "The design is finished." What does that mean?

When a supplier says the design is finished, you need to know what that means. The SDD method answers with twelve documents, in a fixed order, and it tells you where in that order you must say yes.

### Slide — Five things written against every document

Every one of the twelve documents has five things written against it. Who writes it. What goes in: the earlier documents it is made from. What comes out. The person who accepts it before the next one is begun. And how it is checked: by a program, against an earlier document, or by a person with a checklist. The order is fixed because some documents exist to measure others, and a measure written after the thing it measures is not a measure.

### Slide — Twelve documents, in a fixed order

The first six are written before anything is designed. First, the customer's own documents: the law, the mandate and the requests, kept as received and never edited. Second, the register of what was asked, one entry for each separate thing. Third, the records the service keeps, and whose each fact is. Fourth, every goal people have in the service, each tied to what was asked. Fifth, the architecture: what the service is built on, and what crosses its boundary. Sixth, the states, settings and code lists every goal shares; a code list is a fixed list of choices, such as the kinds of institution. Before all six, a catalogue of the sector's services is written once for the whole sector; it is not one of the twelve.

The next three are written for each goal in turn: the goal as a story with every way it can fail, the screens worked out from that story, and a walk-through that officials can click. Then come two documents for the whole application: the interaction design, which settles once how officers pick, find, move and act, and the application model, the one file a program reads. The twelfth is the working application. Nobody writes it. A program generates it from the model, and nobody edits it by hand.

### Slide — Filled for PHEQA's registration of institutions

In Progressa, PHEQA filled this table for its registration of institutions. For the register, an AI assistant extracts the entries, the supplier's analyst rules on each one, and the Registrar of PHEQA accepts it. For the screens of a goal, three people decide at a review: the owner of the screens, the builder, and the head of the registration desk. For the application model, the head of PHEQA's ICT unit approves it after reading what it assumed. And the working application is accepted when a registration officer finishes a real task on it.

### Slide — Nine points where PHEQA says yes

Count the points where a person in PHEQA must say yes before the work goes on. There are nine. At each one, the next document is written from what was accepted, not from what was proposed. Two documents are written by nobody: a program produces the walk-through and the working application. Now lay your own project's documents beside the twelve. A missing row is a decision nobody will take in writing. A row with no point of acceptance is a place where the supplier, not your organisation, decides.

### Slide — In one sentence

Twelve documents, in a fixed order. For each one, ask who writes it, what goes in, what comes out, who accepts it and how it is checked.

---

## 1.5 Who writes, who checks, who accepts (~5 min)

> *The AI assistant may draft; a named person accepts, amends or sets aside each proposal, and only what was accepted stands.*

### Slide — Title (1.5)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — If a machine wrote it, who is answerable for it?

An AI assistant can draft a register of requirements in an afternoon. That is real help. It also raises a question your minister will ask: if a machine wrote it, who is answerable for it?

### Slide — The assistant proposes; a person rules

The SDD method's answer is simple. An AI assistant may draft any document a person would otherwise draft. It proposes; it never decides. A named person rules on each thing it proposes, and says one of three words: accepted, amended or set aside. The document then holds only what that person accepted, in that person's words. A draft is never accepted because it reads well. It is accepted line by line, by somebody whose name is on it, and who can be asked about it later.

### Slide — Where the source is silent, the assistant must say so

Inventing something plausible is the thing an assistant does best. So the method binds it with one rule: a gap is recorded as a question with an owner, and never filled with an invented answer. When an official's text is silent, the assistant does not guess a figure to keep the work moving. It writes the question down, and a person decides who must answer it and by when. Every invented answer it avoids is one less fault hidden in the service.

### Slide — Three roles for every document

For each of the twelve documents, three roles are named. Someone writes it. Someone else checks it. And a named person accepts it. In PHEQA's project in Progressa, the supplier's analyst and an AI assistant write. A second analyst of the supplier checks. The Registrar of PHEQA accepts, or the head of PHEQA's ICT unit for the technical documents. And the head of the registration desk sits at every review of something an officer will use.

### Slide — Where the assistant writes, in PHEQA's project

In four of PHEQA's documents, an AI assistant does the writing. It extracts the register of what was asked. It helps write the shared settings and lists. It drafts each goal as a story. And it writes the application model, the file a program reads, under the rule that it must refuse to guess. In each of the four, a named person rules on what it wrote, and a different named person accepts it: the Registrar, the owner of each setting, or the head of the ICT unit.

### Slide — Three checks on the table

Ask your supplier for this table before the first document is written, and check three things. No row ends with the assistant. In no row does the writer accept alone: where a writer sits at a review, as the owner of the screens does, two other people must agree. And at every review of something an officer will use, the person who will live with the result sits beside the owner and the builder. If a cell under 'accepts' names the supplier, or names nobody, that decision has not been given to anyone in your organisation.

### Slide — In one sentence

An assistant may draft any document. A named person rules on each line, and only what that person accepted stands.

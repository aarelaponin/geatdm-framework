# KP3 Module 3 (Topic 3) — Voice-over scripts

Spoken narration only, one section per video (3.1 – 3.7), slide-by-slide, matching `KP3_M3_Deck_v0.1.pptx`. Each video is standalone. Sources slides carry no narration — hold ~5 seconds; links go in the video description.

---

## 3.1 What a register is for: one authoritative record (~5 min)

> *A register gives every service one authoritative record of each learner, held as a service with rules on who may read and change it, and filled through a disciplined load.*

### Slide — Title (3.1)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Count the lists of learners your country keeps today.

Count the lists of learners your country keeps today. The schools keep one. The examination body keeps one. A donor project keeps a third. Each list says something different about the same child, and nobody can say which list is right.

### Slide — Many lists, no answer

This is how fragmentation looks in education. One donor funded a school census system. Another funded a cash transfer for girls. A third funded an examination system. Each project built its own list of learners, because each project had to deliver on time. Now a parent fills the same form at five counters, and the ministry cannot say how many learners it has.

### Slide — A register is a service

The GovStack Digital Registries specification describes the answer. A register is a trusted, authoritative service, and the single source of truth for the records it holds. Notice the word service. A register is not a spreadsheet on a shared drive. It has a schema, versions, an interface that other systems call, rules on who may read and change each record, and a log of every change. The same specification names the avoidance of duplicated registries across government as a standard. PAERA, the GovStack reference architecture, lists an education register among a country's main state registries, and calls state registries the authoritative source of information.

### Slide — Two building blocks

PAERA also says that putting a state registry online needs two building blocks. Registration is where a person applies and an officer decides. The Digital Registry keeps the record and serves it to others. That is why a register is built once and called by many services. Procurement rules can make each contract cheaper, but only whole-of-government planning makes re-use possible.

### Slide — Progressa today

Take Progressa, the fictional country of this course. Its learner registry, PLR, is already a member of the data exchange layer. It publishes one enrolment service, which only the examination authority may call. It is not yet the authoritative register the country needs. The education act gives it no basis. It does not hold one record for every learner. It has no quality rules and no link to the national identity. This module sets up the register behind PLR.

### Slide — Filled through a disciplined load

One more part matters. A register is only as good as the data that reaches it. Records arrive from schools in messy files. They are checked, approved by a person, and only then written to the register. UNICEF Giga publishes such a flow for its school data, and says it applies ideas from master data management to produce a single source of truth. The edition of the Digital Registries specification used here is an early release, version 3.0-alpha, and its numbers may change.

### Slide — In one sentence

One authoritative record of each learner, held as a service with rules on who reads and changes it, and filled through a disciplined load. That is what the register is for.

### Slide — Sources

*(No narration.)*

---

## 3.2 Five tiers between a messy file and a trusted record (~5 min)

> *Data reaches the register through five tiers, raw, bronze, staging, silver and gold, with quality checks at bronze and a person's approval before silver.*

### Slide — Title (3.2)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Every term, schools send lists of learners.

Every term, schools send lists of learners. Some are spreadsheets, some are exports, some were typed from paper. Column names differ. Dates are written three ways. Write such a file straight into the register, and the register becomes one more list nobody trusts.

### Slide — Five tiers

UNICEF Giga publishes a flow for school data that solves this. It has five tiers. Raw is the file as it arrived, with wrong column names and wrong data types. At bronze, the columns are mapped, the quality checks run, and the rows are split into two tables: those that passed and those that failed. At staging, a person with the right permission approves or rejects each passed row. Approved rows are merged into silver. Silver is merged into gold, which is split into a master table and a reference table.

### Slide — Two things to get right

Two things in this flow are easy to get wrong. First, raw is a tier of its own, and the checks run at bronze. The file is kept as it came, so you can always show what a school sent. Second, a person approves the rows before they reach silver. That approval is an act of responsibility. A program can prepare it, but it cannot replace it.

### Slide — Where the tiers live

Giga says its tiers were inspired by a common data pattern, which Databricks describes as layers that improve the structure and quality of data step by step. The GovStack Digital Registries specification does not describe tiers. It does let you keep several linked databases in one installation, and run scheduled, rule-based automation that moves records between them. So the tiers can be held as linked databases beside the register, or in a data platform in front of it. Applying Giga's school flow to learners is this course's own adaptation.

### Slide — What the walkthrough will show

Here is what a good run of this walkthrough shows. A seeded file of Progressa learners, with some faulty rows in it, enters raw. At bronze, the faulty rows go to the failed table. At staging, an officer of the learner registry approves the passed rows. The count of rows is read at every tier. A good run passes when only approved rows reach silver and gold holds the master records.

### Slide — In one sentence

Raw, bronze, staging, silver, gold: checks at bronze, a person's approval before silver, and only then a record the register can trust.

### Slide — Sources

*(No narration.)*

---

## 3.3 Generating the register's schema (~5 min)

> *The register is set up from one schema file, with its fields, rules, links and key, which an AI assistant drafts from the law and the form and the owner corrects and publishes.*

### Slide — Title (3.3)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — A register is set up from one file.

A register is set up from one file. The file names the register, lists its fields, states the rules on each field, links it to other registers and names its key. Get this file right, and the rest of the build follows from it.

### Slide — What the schema file holds

The Digital Registries specification says what goes in the file. The register has a name, a unique short code, an owning body, a retention policy, a classification and a lifecycle state, from draft to published to archived. Each field has a name and a type, such as text, date or a list of values. A field can be required or unique, with a minimum and a maximum. A link joins one database to another, for example each learner to a school, with a rule for what happens when the school is deleted. Every publication creates a new version. The schema can be exported and imported as JSON or YAML.

### Slide — The key is not the national number

One choice needs the owner's decision: the key. It is tempting to key the register on the national identity number. Do not. The GovStack Identity specification keeps that number secret inside the identity block. A service that checks a person signs the person in, with the person present, and receives an identifier made for that service alone. So Progressa's register keeps a learner number of its own, and stores beside it the identifier that the identity authority, PNIA, gives to the service. It never stores the national number.

### Slide — Drafted by AI, decided by the owner

An AI assistant drafts this file well, because its inputs are written down: the education act, the registration form, and the list of services that will read the register. The prompt asks it to trace every rule to the line it came from. The owner then decides the key and the fields that hold personal data. The marks for personal data are optional in the specification, so no check depends on them. The owner corrects the draft and publishes it. The file states the edition of the specification it implements: version 3.0-alpha, an early release.

### Slide — What the walkthrough will show

The walkthrough of this subtopic shows the schema drafted, and the register created from it through the published interface. The check lists the registers and reads this one back: its schema, its metadata and the state published. A record without a required field must be refused, and so must a second record with the same learner number.

### Slide — In one sentence

One schema file, drafted by AI from the law and the form, corrected and published by the owner, and keyed on the register's own number.

### Slide — Sources

*(No narration.)*

---

## 3.4 Quality checks that stop a bad row (~5 min)

> *Every row is checked at the bronze tier, and a row that fails is set aside with its reason, so that the people who sent the data know what to correct.*

### Slide — Title (3.4)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — A head teacher sends the term's list of learners.

A head teacher sends the term's list of learners. Three rows are wrong. If the register takes them, every service that reads it inherits the mistakes. If the register drops them silently, the school never learns what to fix.

### Slide — Checked at bronze

So every row is checked at the bronze tier, before anyone approves it. Giga's published flow runs its data-quality checks at bronze and splits the rows into two tables: those that passed and those that failed. The GovStack Digital Registries specification names validation rules, deduplication and data-quality controls among the functions of a register. It lets each field carry rules such as required, unique, minimum and maximum. The checks at bronze apply the same rules before a row comes near the register.

### Slide — Three faulty rows

Look at three faulty rows from a Progressa school. In the first, the same learner appears twice, with the same learner number. In the second, the date of birth is empty, and it is required. In the third, the date of birth says the child is three years old and in grade six. Each row goes to the failed table with its reason in plain words. Who sets the limits, such as the range of ages for each grade? The register's owner, not the programmer. A range is a policy choice.

### Slide — The sender is told

A failed row is not thrown away, and it is not a secret. In Giga's flow, a data-quality report is generated and emailed to the person who uploaded the file. Do the same. The head teacher gets a short list: which rows failed, and what to correct. The next file comes back cleaner. Over a few terms, the schools learn the rules, and the share of failed rows falls. That share is worth reporting to your director every term.

### Slide — What the walkthrough will show

The walkthrough of this subtopic shows a seeded load that contains three faulty rows: a duplicate, a missing required value and a value outside its range. A good run passes when each of the three lands among the failed rows with its reason stated, and no faulty row reaches staging.

### Slide — In one sentence

Check every row at bronze, set each failing row aside with its reason, and send the school the list of what to correct.

### Slide — Sources

*(No narration.)*

---

## 3.5 A published pattern, followed in the open (~5 min)

> *Giga's School Master Data shows the pattern at work for schools, and you may follow it for learners if you say what you took and changed and copy no unlicensed code.*

### Slide — Title (3.5)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — A vendor tells you their data platform is unique.

A vendor tells you their data platform is unique. A donor asks whether your register follows any known practice. Both questions have the same good answer: a published pattern, followed in the open, with every change you made written down.

### Slide — What Giga publishes

UNICEF Giga runs a data platform for school data. Its aim, in its own words, is to apply concepts from master data management and data governance to produce a single source of truth: the School Master Data. Its documentation shows five tiers, checks at bronze, a person's review at staging, and a gold tier split into a master table and a reference table. Giga says its tiers were inspired by the medallion pattern that Databricks describes. This is a real, published example of the pattern this module follows.

### Slide — What the learner register takes, and what it changes

Follow it, and say what you took. The learner register takes the five tiers, the checks at bronze, the person's review before silver, and the split of gold into master and reference. Then say what you changed. Giga's records are schools; Progressa's are learners. Giga's gold tier is its destination; Progressa's destination is a register, a service with its own rules of access. Applying a pattern built for schools to learners is this course's own adaptation, and it should be named as such.

### Slide — Follow the pattern, not the code

One more line matters. Neither of Giga's two public repositories carries a licence. A repository without a licence gives no permission to copy its code, even when anyone can read it. So you may read the documentation, cite the pattern and follow it, and your team writes its own code. Put the citation in your design document and in the register's files, so that an auditor or a donor can see where the pattern came from.

### Slide — Why this helps you

This helps you in the room where the money is decided. A pattern that a global programme has published and runs is easier to defend than one your vendor invented. It also keeps you free: the next vendor can follow the same published pattern. And because your choices are written down, they survive a change of team, a change of vendor and the end of a donor project.

### Slide — In one sentence

Follow Giga's published pattern for learners, say what you took and what you changed, and write your own code.

### Slide — Sources

*(No narration.)*

---

## 3.6 Account for every load (~5 min)

> *After every load, show that the rows received equal the rows passed plus the rows set aside, and that the rows approved equal the records the register added or changed.*

### Slide — Title (3.6)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — After a load, a director asks a simple question: did every learner the schools sent reach the register?

After a load, a director asks a simple question: did every learner the schools sent reach the register? Most teams answer with a feeling. You can answer with two lines of arithmetic, and show your working.

### Slide — Two lines

The first line is about the checks. The rows received must equal the rows that passed plus the rows set aside at bronze. If they do not, rows were lost or counted twice inside the load. The second line is about the register. The rows approved at staging must equal the records the register added plus the records it changed. If they do not, the load did not write what the officer approved.

### Slide — Where the numbers come from

The numbers come from things the GovStack Digital Registries specification already requires. The register logs every change, and shows the value before and after. It can import data and update entries. It answers statistical queries, such as how many records it holds, and it has an operation that says whether a given record exists. So the reconciliation needs no new system. Count the tiers, read the log, and read the record count before and after.

### Slide — An honest note, and a hard rule

Be clear with your readers on one point. No published source describes this reconciliation, neither the GovStack specification nor Giga's flow. It is the practice of the team that wrote this course, built on what the specification does publish. Present it to your auditors that way; it is simple enough for them to check. And keep one hard rule. A line that does not balance stops the next load until someone finds where the rows went and writes down the cause.

### Slide — What the walkthrough will show

The walkthrough of this subtopic shows one load of Progressa learners reconciled on a single sheet: rows received, passed, set aside, approved, added and changed, and the register's record count before and after. A good run passes when both lines balance and a sample of the loaded records is confirmed to exist in the register.

### Slide — In one sentence

Received equals passed plus set aside; approved equals added plus changed. Show both lines after every load.

### Slide — Sources

*(No narration.)*

---

## 3.7 The register as a service others can use (~5 min)

> *Other services reach the register only through its published interface, each seeing no more than its role allows, and every learner or parent can see who read their record.*

### Slide — Title (3.7)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Once the register holds good records, every office will want them: the scholarship office, the school feeding programme, the examination authority.

Once the register holds good records, every office will want them: the scholarship office, the school feeding programme, the examination authority. If each gets a copy, you are back to many lists. If each calls the register, you keep one.

### Slide — Only through the published interface

The GovStack Digital Registries specification is clear. Applicants do not reach the register directly. They come through other building blocks, such as the Registration block, with the Information Mediator between them. Each register generates services for creating, reading and updating records, described with OpenAPI, and lists them with a description and an example for every field. The specification also asks for bulk operations, archive and event subscription, but publishes no operation for them yet. Do not promise them to another ministry as published interfaces.

### Slide — Through the data exchange layer

In Progressa, these calls pass through Linkup, the data exchange layer. The Information Mediator specification sets the rule: a service is registered with its OpenAPI description, a consumer must ask for the service it wants, and the provider of that service decides whether the consumer may call it. So the learner registry, not the caller, decides who reaches the register at all.

### Slide — No more than the role allows

Inside the register, access is decided per service, per record and per field. A rule can rest on a role, an attribute, a policy or consent, and the specification names delegated access for a guardian or a parent. In Progressa, the registration service may create and update learner records. Every other service may only read, and only the fields it needs. A table of access rules gives the business side and IT one shared language, so a decision about a child's data means the same thing in both rooms.

### Slide — Who read my child's record?

The register logs every read of personal data: which record, which field, who read it and when. Every data owner has the right to see who looked at their personal data, and the register offers an interface for that report. For a learner who is a child, the parent sees it. Few features build more trust. And deleting a record keeps the logical record, so the history stays.

### Slide — What the walkthrough will show

The walkthrough of this subtopic shows an update sent by a service that may only read, and refused. The same update sent by the registration service is accepted. Then the parent's report shows the one read of the learner's record, who read it and when. A good run passes on all three.

### Slide — In one sentence

One interface, each service seeing only what its role allows, and every parent able to see who read their child's record.

### Slide — Sources

*(No narration.)*

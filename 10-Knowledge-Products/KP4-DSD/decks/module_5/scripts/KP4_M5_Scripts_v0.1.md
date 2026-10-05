# KP4 Module 5 (Topic 5) — Voice-over scripts

Spoken narration only, one section per video (5.1 – 5.7), slide-by-slide, matching `KP4_M5_Deck_v0.1.pptx`. Each video is standalone. Sources slides carry no narration — hold ~5 seconds; links go in the video description.

---

## 5.1 From one file to a running application (~5 min)

> *The kit turns the model into the platform's forms, lists, menus and workflow, and installs them.*

### Slide — Title (5.1)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — "The application is built." Built from what?

Your supplier reports that the ministry's new application is built. Before you accept that report, you need to know what was built from what, and which questions to ask of the result. One file decides almost everything you will see.

### Slide — One file, read by a program

In the SDD method, specification-driven development, each document a person writes is accepted before the next one begins. The last of them is the application model: one file, written for a program to read. It carries every record, screen, list, menu and step of the workflow, each taken from documents your officials have already accepted. Before anything is built, a program checks the file, and refuses it if it contradicts what was accepted.

### Slide — What the kit makes from it

The kit is the method's set of programs, which the supplier runs. From the file it makes the four things a low-code platform is built from. Forms are the screens where an officer enters or reads a record. Lists are the worklists and registers. Menus are what each role sees after signing in, grouped in categories. The workflow is the order of steps, and who may take each one. The platform's own documentation has a builder for each of them, and the kit fills those builders from the file instead of by hand.

### Slide — Installed, not rebuilt

Then the kit installs what it built. It packs the application's design and puts it on the platform's server. The platform's documentation describes the same kind of move, of one application from one server to another, and by default only the design travels, not the data. So the same package can go to a test server, be checked there, and then go to the live server, with nothing rebuilt by hand in between.

### Slide — Progressa: MoEYS's application

In Progressa, MoEYS's application is generated from its model onto MoEYS's own installation of the platform. The model asks for the forms on which the minister decides and an officer records the Gazette, for lists of what awaits the minister, and for a menu in five categories: licences; names, the list and reviews; suspension and cancellation; the Gazette; and requests for review. It asks for no table of institutions, because MoEYS reads PHEQA's register instead.

### Slide — The questions you ask of the result

Acceptance starts from the model, not from the supplier's account. For each goal, ask where it starts and who can start it. Check that every menu category is there, for the right role and no other. Open each list and check that it shows only what waits for an act. Then ask whether any screen exists that no accepted document asked for. Each answer is read on the running application, not on a slide.

### Slide — From the file to the menu

The demonstration follows these steps. The check admits the file. The kit builds the application and installs it on MoEYS's installation. Then the menu, one form and one list are opened on the platform. It passes when the build ends without error, the application appears on the installation, and every menu category of the interaction design is there. Until MoEYS's application is generated, this is a storyboard: the steps and the pass, written before anything is recorded.

### Slide — In one sentence

One accepted file, read by a program, becomes the forms, lists, menus and workflow on the platform. Ask your questions of the running result, one goal at a time.

### Slide — Sources

*(No narration.)*

---

## 5.2 Nothing generated is edited by hand (~5 min)

> *A correction goes into the description and the application is generated again; a program shows any hand edit.*

### Slide — Title (5.2)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — A wrong label, the evening before the demonstration.

The evening before the minister's demonstration, someone notices a wrong label on a form. The quickest fix is to change it on the platform. That fix is the one your contract should forbid, and a program can show whether it was made.

### Slide — Two versions of the truth

A hand edit creates two versions of the truth. The accepted description says one thing, and the platform now shows another. When the application is next generated from the description, one of two things happens. Either the edit is overwritten and the wrong label comes back. Or someone protects the edit by not generating again, and from then on nobody can say what the application is built from.

### Slide — Correct up, generate down

The SDD method has one rule for this: nothing generated is edited by hand. A correction goes into the description that owns the fact, is accepted there, and the application is generated again. A label belongs to the screens of its goal, so it is corrected in those screens, carried into the model, and generated. It takes a little longer than a change on the platform. In exchange, the description and the platform never disagree.

### Slide — The read-back

The method gives you a program to check this, the read-back. It compares each generated file on the platform with what the description would generate, and marks it in one of three ways: in step, out of date, or edited by hand. You do not need to read the files themselves. You read the program's list, and you ask about every line that is not in step.

### Slide — Progressa: a label on MoEYS's form

In Progressa, a builder changes a label on MoEYS's form for approving an institution's new name, directly on the platform, to meet the demonstration. The read-back lists that form as edited by hand. The head of MoEYS's ICT unit asks for the change to be made properly. The label is corrected in the goal's screens and in the model, the application is generated again, and the read-back is run once more. It passes only when every file shows in step.

### Slide — A hand edit shown up

The demonstration shows the same steps on a generated application. A label is changed by hand on the platform, the read-back runs and names the form, the correction is made in the model, and the read-back runs again. It passes when the first run names the edited file and the second shows every file in step. Until the application is generated, this is a storyboard.

### Slide — Write it into the contract

Put the rule into the supplier's contract, together with its evidence. No generated file may be edited by hand on the platform. The read-back is run before every acceptance, and its list is handed over with the delivery. A file marked as edited by hand is a defect, and it is corrected in the description, not argued about at the acceptance meeting.

### Slide — In one sentence

Correct the accepted document, not the platform, and generate the application again. The read-back shows any file that someone changed by hand.

### Slide — Sources

*(No narration.)*

---

## 5.3 The platform's traps, caught before deployment (~5 min)

> *What is known to fail on the platform is checked before anything is installed.*

### Slide — Title (5.3)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Every low-code platform has places where it does not do what its screens suggest.

Every low-code platform has places where it does not do what its screens suggest. Your officers should not be the ones who find them, on the first morning the new service is open to the public.

### Slide — Known, written down, checked

The SDD method keeps a register of the platform's known differences: places where the documentation promises one thing and a particular release does another. Each entry was found once, the hard way, by a team that lost time to it. Each entry that a program can test becomes a rule. The check applies those rules to the application model before anything is built or installed, so the same trap is not found twice.

### Slide — The maker's own lists

The platform's maker publishes two lists that feed the register. One is a page of known issues. It records cases such as a screen that shows a step as completed while the workflow behind it does not move on. The other is a list of what each release changed. Release 9.0.7, the one Progressa's two installations run, was published on 18 May 2026, with bug fixes and security upgrades among its changes. Read both lists before you agree the release your service will run on.

### Slide — Progressa: a list with two filters

Here is one trap, told by its kind. MoEYS's list of what awaits the minister's decision reads straight from the database, and it carries two filters: one by date, and one by the matter advised on. The platform saves that setting without complaint. But the register records that, on a list of this kind, the platform honours one filter at a time and quietly ignores the second. An officer who sets both sees more than she asked for, and never knows.

### Slide — Caught by the check, not by an officer

The check is written to catch this before installation. It reads the model, finds a list of that kind with two filters, and reports the list, the rule and the reason. The model is then corrected, either to one filter or to a kind of list that honours both, and checked again. The trap is found at the review, where it costs an hour, and not at the counter, where it costs the public's trust.

### Slide — What to ask a supplier

You cannot read the platform's code, and you do not need to. Ask the supplier three things. Which rules about this platform does your check apply? Show me the check running on our own model, not on a sample. And keep a table of the rules you saw running and the rules you were only told about. A rule that was only described is a promise, not evidence. Put the table in the acceptance file, beside the record of the check.

### Slide — In one sentence

Known traps belong in a check that runs before installation. Ask to see that check run on your own model, and keep the record of what you saw.

### Slide — Sources

*(No narration.)*

---

## 5.4 Identity and registries: use the block, do not rebuild it (~5 min)

> *The service takes a person's identity and an institution's record from the body that keeps them.*

### Slide — Title (5.4)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — "We will add a table of users and a table of institutions."

A supplier offers to add a table of users and a table of institutions to the ministry's new application. It sounds helpful and quick. It is the start of copies that will disagree, and of facts the ministry may have no reason to keep.

### Slide — Who someone is: the identity sign-in

Identity comes from the body that keeps it. The GovStack Identity specification describes the sign-in step by step. The application sends the person to the identity block's own page. The person signs in there, and the block asks which facts it may share. The person approves. The application receives a code, exchanges it for a token that says who signed in, and then reads the facts that were approved. This follows OpenID Connect, an open standard for signing in.

### Slide — Keep the identifier you are given

What the application keeps matters as much. The token carries an identifier that the block gives this one service for this one person. The Identity specification asks that the same person have a different identifier in each service, to protect privacy. So the application keeps the identifier it is given, and never the national number. Where a design must check a person who is not present, the specification requires the block to verify a person from a known identifier; settle with the identity authority what it offers before the design relies on it.

### Slide — What an institution is: the register

An institution's record works the same way. The GovStack Digital Registries specification requires a register to let other systems search, read, create and update its records through open interfaces, and to authorise which systems and users may do so. Progressa's design authorises only PHEQA's application to write the register of institutions. Every other service reads the record when it needs it, and keeps no copy.

### Slide — Progressa: one sign-in, one register, no copies

In Progressa, an officer of MoEYS signs in through PNIA, and MoEYS's application keeps the identifier PNIA gives it, not her national number. When she opens a case, the application reads Harbourview University College from PHEQA's register of institutions. Now picture the other design, with its own table of institutions inside MoEYS's application. One week PHEQA writes the college's new name into the register. MoEYS's copy keeps the old one, and the next week the minister signs a decision under a name the college no longer has.

### Slide — A block used, not a copy kept

A block paid for once and used by many services is re-use that only someone planning for the whole sector can see. A copy is the opposite: a second register that nobody planned, nobody keeps and nobody corrects. The reference architecture PAERA puts the deeper point plainly: digital public infrastructure is not neutral, and it shapes what can be built on top of it. Build on the block, and the next service inherits the same identity and the same register.

### Slide — Signed in, and read from the register

The demonstration shows both on MoEYS's application. A test officer signs in through the identity sign-in. The application shows the identifier it was given and no national number. Then an institution's record is opened, read from PHEQA's register. It passes when the sign-in completes, no national number appears, and the record shown agrees with the register. Until both applications are generated, this is a storyboard.

### Slide — In one sentence

Take who someone is from the identity block, and what an institution is from its register. Keep the identifier you are given, and no copy.

### Slide — Sources

*(No narration.)*

---

## 5.5 The service's contract with the registration block, and its data interface (~5 min)

> *The contract another system reads is produced from the description, not written beside it.*

### Slide — Title (5.5)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Two applications rely on one contract: what may be asked, and what comes back.

When the ministry's application asks the quality authority's application for an institution, both sides rely on a contract: what may be asked, and what comes back. If someone writes that contract by hand beside the application, the two will drift apart.

### Slide — What a contract is

A contract, here, is the written promise one system makes to others. It says what they may ask for, what they must send, and what comes back. It is written in a published standard form, the OpenAPI Specification, so that a program on the other side can read it. The data exchange carries the call; the contract says what the call may be. Across the data exchange, each call names the service it is made to, and the exchange's own rules ask that each service be described in this standard form.

### Slide — Produced from the description

In the SDD method, nobody writes the contract beside the application. The accepted description already says what the register holds and what it publishes. A program produces the contract from that description, in the same way the application itself is produced. When the description changes, the contract is produced again, so the application and the promise it makes to others cannot say different things. It is the same rule as for the application itself: correct the description, never the copy.

### Slide — The contract with the registration block

The same holds for a registration service and the GovStack Registration block. Its specification publishes the operations of applying online: the services and forms on offer, and sending an application with its documents. It publishes operations for processing: the applications and the officers' tasks. For managing and designing services and workflows, it says no interface is specified yet. So the service's contract with the block is produced from the description, in the block's published terms.

### Slide — Progressa: PHEQA's register, as MoEYS reads it

Read as a list, the contract of PHEQA's register is short. MoEYS may ask for one institution by its register number, such as INS-00217, and receive its name, its kind, its licence and its standing. MoEYS may ask for the list of registered institutions. It cannot ask for applications, inspections, fees, or anything else the register does not publish. Every call goes through Linkup. The manager reads this list; the builder's program reads the same contract as a file. One document gives the business side and IT one shared language.

### Slide — One institution, read across the exchange

The demonstration reads one institution. MoEYS's application asks for it across the data interface, and the contract it is read by is shown beside the call. It passes when the record returned agrees with PHEQA's register, and the call is one that the contract publishes. Until both applications are generated, this is a storyboard: the steps and the pass, written before anything is recorded.

### Slide — In one sentence

A contract produced from the accepted documents cannot drift from them. Read it as a plain list of what may be asked, and what may not.

### Slide — Sources

*(No narration.)*

---

## 5.6 Payments and information mediation as named crossings (~5 min)

> *A payment or a call across the data exchange is a crossing the architecture names, not a block the service rebuilds.*

### Slide — Title (5.6)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — A fee, another body's register, a sign-in: each leaves the service and comes back.

A registration service takes a fee, reads another body's register and signs people in. Each of these leaves the service and comes back. Your architecture should name every one of them before anyone builds anything.

### Slide — A crossing, named

A crossing is any flow that leaves the service or enters it. The architecture names each one in a table: what crosses, in which direction, the body on the other side, and the block it passes through. The GovStack Registration specification expects all traffic into and out of a block to go through an Information Mediator or a secure gateway. A service that goes round the exchange builds a private road that nobody else can check.

### Slide — The fee: through the Payments block

Take the fee first. The registration service does not build its own payment screen or deal with banks. It sends a payment request to the government's Payments block. The GovStack Payments specification lists what such a request must carry at the least: who pays, who is paid, the amount, the currency, the policy, and the service's own transaction number. The block's payment portal tracks each payment's status and history, and the confirmation comes back to the service. The service keeps the confirmation, not the payment details.

### Slide — When the block is not yet there

The block may not be ready on the first day. Then the service does what many services do today: the applicant pays into the authority's bank account, and the finance officer records the evidence of the payment against the application: who paid, how much, and when. That is honest, and it works. The architecture still names it as a crossing, one still to move to the Payments block, so that the move is planned and budgeted, and not forgotten.

### Slide — Progressa: the crossings of PHEQA's registration service

Here is the table for PHEQA's registration service. The application fee goes out to the Payments block, and the confirmation comes back. An institution's record goes out to MoEYS when MoEYS asks for it, through Linkup, which PDGA operates. Who signs in comes in from PNIA. And one more crossing of the same kind lies ahead: a graduate's credential, issued by PDCA into the learner's digital wallet. Each row names a body that must agree to it.

### Slide — Each row agreed by the other side

A crossing is a promise made together with someone else, so each row needs that body's agreement. The operator of the Payments block confirms the fee crossing. PDGA confirms the use of Linkup. PNIA confirms the sign-in. MoEYS confirms what it will read from the register. Then the head of PHEQA's ICT unit accepts the table. A row that nobody on the other side has seen is a promise made on their behalf, and the first test will show it.

### Slide — In one sentence

Name every crossing, the body on the other side and the block it goes through. Never rebuild a block that a crossing can use.

### Slide — Sources

*(No narration.)*

---

## 5.7 Proof on the running system: a task a person finishes (~5 min)

> *The last check is a person finishing a real task on the running service, and the record that they did.*

### Slide — Title (5.7)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Every check reports a pass. Can an officer finish a real task?

Every document is accepted, every check reports a pass, and the application is installed. One question is still open: can an officer finish a real task on it? Only a person on the running service can answer, and the answer must be recorded.

### Slide — The third rule

Most checks in the SDD method read documents. They compare a screen with its story, or the model with the interaction design. Those checks are needed, and they say nothing about whether the service works for the person at the counter. A pass on a document is not a working counter. So the method's third rule is that at least one check ends on the running system. A person goes through a real task on the installed application, and the run is recorded.

### Slide — A journey, written before it is run

That check is written as a journey. A journey starts where an officer really starts: at a menu entry, signed in with a real role. It goes through the real screens, step by step, as the goal's story says. And it states exactly what counts as finished. A program can drive a journey through the screens, but the journey is written from the story your officials agreed, not from the screens the supplier built. The same journey is a story the business side recognises and a test the builder can run.

### Slide — Progressa: approving a change of name

In Progressa the journey is the approval of a change of an institution's name. A test officer of MoEYS signs in with the minister's role. In the category Names, the list and reviews, she opens the list of advices that await a decision, and chooses the one on Harbourview University College. She reads PHEQA's advice, and the college as PHEQA's register shows it. She approves the new name. The journey is finished when the approval is recorded and sent to PHEQA.

### Slide — The record that it happened

The record of the run is the evidence of acceptance. It names the journey, the installation it ran on and the time, with the result of each step. A journey that was written and never run is reported as not run, never as passed. A journey that stopped at step three is reported as stopped at step three. The minister signs on records of what happened, not on descriptions of what should. Keep each record with the acceptance file.

### Slide — The change of name, on the running application

The demonstration shows this journey on MoEYS's running application, with the record of the run beside it. It passes when the journey ends on the recorded approval, and the record names the journey, the installation and the time. Until MoEYS's application is generated, this is a storyboard: written now, and recorded when the application runs.

### Slide — In one sentence

Acceptance ends with a person finishing a real task on the running service. Keep the record of the run; a journey not run is not passed.

### Slide — Sources

*(No narration.)*

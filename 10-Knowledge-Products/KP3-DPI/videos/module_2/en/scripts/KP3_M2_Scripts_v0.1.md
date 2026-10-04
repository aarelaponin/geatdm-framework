# KP3 Module 2 (Topic 2) — Voice-over scripts

Spoken narration only, one section per video (2.1 – 2.6), slide-by-slide, matching `KP3_M2_Deck_v0.1.pptx`. Each video is standalone. Sources slides carry no narration — hold ~5 seconds; links go in the video description.

---

## 2.1 What the Registration block does (~5 min)

> *A registration block takes an application, lets an officer decide and, on approval, writes to a register and gives the applicant proof, and built once it serves every ministry that registers people or things.*

### Slide — Title (2.1)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Every ministry registers something.

Every ministry registers something. Schools register learners. A business registry registers companies. A population registry records births. Each office asks for information, checks it, decides, records it and gives back proof. The Registration block is shared software that does exactly that.

### Slide — What registration means

The GovStack Registration specification defines registration in one sentence. It is the process through which an applicant gets information recorded in a registry and receives a credential as proof of registration. At least two parties are involved: the applicant, and the authorised representative of the registry, whom the specification calls the registrar. Others may join. A witness, another public body or a database may confirm what the applicant says. A bank may receive a fee. Notice the two outcomes. A record is written, and proof goes back to the applicant. A service that stops at capturing a form has done neither.

### Slide — Three capabilities

The block has three capabilities. The first is online registration. The applicant fills in a form, uploads documents, pays a fee where there is one, sends the file and follows its status until a decision arrives. The second is processing. In the back office an operator, who may be a person or an automated role, approves the file, rejects it or sends it back for correction. On approval the system sends the information to a registry and issues the credential. The third is the development platform. There an analyst sets up the rules, the screens and the checks of each service, without writing code.

### Slide — Progressa's learner registration, in three parts

Here is Progressa's learner registration seen through those three parts. A parent, or a learner old enough, applies online. The registrar of PLR, the Progressa Learner Registry, decides in the back office. An analyst in the ministry configures the service. In the service, the parent meets the guide, the form, the documents and the send button, and later the decision and the confirmation. One thing the block does not do is keep the record for the long term. The specification leaves storage to the Digital Registries block. The registration block's job is to connect to it and write there.

### Slide — Built once, used by every ministry

Now the reason this is a shared block and not a school system. PAERA, the GovStack reference architecture, says that digitising a state registry needs two building blocks: Registration and a Digital Registry. That holds for a business registry, a population registry and a learner register alike. So the ministry that builds the block first pays for it, and each ministry after it sets up a new service on the same block. That re-use is only visible to someone planning for the whole government, which is why the decision belongs above any single project.

### Slide — In one sentence

An application comes in, an officer decides, the register is written and proof goes out. Build that once, and every ministry that registers can use it.

### Slide — Sources

*(No narration.)*

---

## 2.2 The published specification, and how to judge a product against it (~5 min)

> *Ask every vendor to show the product against the published specification, requirement by requirement, and check whether GovStack lists it and at which compliance level.*

### Slide — Title (2.2)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — A vendor tells you the product is GovStack compliant.

A vendor tells you the product is GovStack compliant. That sentence alone tells you very little. What you need is the product shown against the published specification, one requirement at a time, with evidence your own team can check.

### Slide — What the specification contains

Start by naming the edition. The GovStack site labels the default edition of the Registration specification 23Q4. Write that edition into your tender and your questionnaire, so every answer refers to the same text. The edition holds forty-two functional requirements in three groups: ten for the applicant, six for the operator who processes applications, and twenty-six for the analyst who builds services. It defines twelve data structures, such as the service, the registration and the role, and thirteen published operations. Each requirement is marked required or recommended.

### Slide — Requirement by requirement

Turn that list into the vendor's homework. For every requirement, the vendor answers one of three things: met as delivered, met by configuration, or not met. Under every answer, ask for evidence you can check: a screen, a test record or a document. Do the same for the operations. Which of the thirteen does the product offer, and where are its test results? Ask also how the product exports and imports a service description, because the specification publishes no operation for creating or changing a service, and each product does it its own way. A product that answers in this form can be compared with the next one. A brochure cannot.

### Slide — What GovStack itself offers

Now what GovStack itself offers. Its testing application has a self-assessment form, where a software provider assesses the product against the functional requirements, and a set of automated tests of the interfaces. GovStack's website grades software at Level 1 or Level 2, depending on how many requirements are met. Its team checks a submission for completeness and plausibility, which is a review of what the provider sent, not a test of your installation. Accepted software is listed on the website with its level and a link to the full report. Be careful with thresholds, too: the website and the Architecture specification set different ones. When you quote a threshold, name its source.

### Slide — Progressa's self-assessment sheet

Here is such a sheet, built as an example for the product Progressa uses; it names no real product. Three rows show the pattern. The operator's decision is met by configuration, and the evidence is the registrar's screen with its three choices. Import and export of a service description is met, and the evidence is a file exported and imported into a second installation. The payment of fees is met but not used, because registering a learner carries no fee.

### Slide — In one sentence

Ask for evidence against each published requirement, and check whether GovStack lists the product and at which level.

### Slide — Sources

*(No narration.)*

---

## 2.3 Generating the registration service (~5 min)

> *Describe your registration in the specification's terms, and an AI assistant drafts the service description that sets the block up, which you then import, test and correct.*

### Slide — Title (2.3)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — The registration of a learner is written today in a law, a circular and a paper form.

The registration of a learner is written today in a law, a circular and a paper form. Before any product can carry it, someone has to restate it in the block's own terms. An AI assistant can draft that restatement in an afternoon.

### Slide — The specification's terms

The Registration specification gives you the words. A service is a name that holds one or more registrations. Each registration has a name and an entity in charge. Its subjects say who must register, and its determinants say what changes the requirements for a given case. Its result is the proof the applicant receives. Its requirements are the documents and the data asked for. Then come the screens and the fields, in order. These terms are a shared language: the officer who knows the procedure and the analyst who sets up the product mean the same thing by each word.

### Slide — Progressa's learner registration, in those terms

Here is Progressa's learner registration written that way. There is one registration, and PLR, the learner registry, is in charge of it. One determinant matters: a learner who transfers from another school must add a transfer letter. The data are the learner's names, date of birth, school and grade. The result is a registration confirmation with the learner's register number. The screens are the guide, the applicant form, the documents and the send screen. The payment screen is switched off, because registering a learner carries no fee.

### Slide — What the file is

From that brief the assistant drafts the service description. Be clear about what this file is. The specification requires that a full service description can be exported and imported, with its screens, fields, process flow and settings. But it publishes no operation for creating or changing a service, and it does not define the file's format. The format is the product's own. So the description names the product and the format it is written in, and every assumption the assistant made is marked for someone to confirm. Give the assistant the format as the product documents it, with an exported example if you have one, so that it does not invent one.

### Slide — Import, test, correct

Then the draft goes into a test installation. The check is simple to state. The block lists the service, and its screens come back in the order the brief gave. Then send one test application down each path the brief describes, one learner who transfers and one who does not; the two must be asked for different documents. Each marked assumption is confirmed by the registry's office or corrected. Progressa's description is a worked example, ready to import once the product is chosen.

### Slide — In one sentence

Write the registration in the specification's words. The assistant drafts the file that sets the block up; you import it, test it and correct it before anyone relies on it.

### Slide — Sources

*(No narration.)*

---

## 2.4 Checks before the officer decides (~5 min)

> *Three kinds of check stop a bad application before it reaches the officer: rules on each field, a comparison with the identity authority's record, and a test of completeness on sending.*

### Slide — Title (2.4)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — A registrar's time is the scarcest thing in a registration office.

A registrar's time is the scarcest thing in a registration office. Every application that arrives with a wrong date, a wrong name or a missing document costs that time twice. Three kinds of check catch those faults before the file reaches the desk.

### Slide — Check one: rules on each field

The first kind is a rule on each field. The specification lets the analyst set them without code: whether a field is required, a number range, a text pattern, a date that must be earlier or later than another, a minimum age, the size and type of an uploaded file. In Progressa, the rule on date of birth asks for a learner aged three or older. An application whose date makes the learner two is refused, with a message the parent can understand. Rules like these cost the analyst minutes and save the registrar hours, so set one for every field the law constrains.

### Slide — Check two: the identity record, with the person present

The second kind compares the application with an outside source. The specification's own example is a name and an identifier matched against a civil registry. For a person, the published way runs through the identity block's sign-in, OpenID Connect. The person signs in with PNIA, Progressa's identity authority, and approves what may be shared. PNIA releases the name, and an identifier made for this one service. The form's action compares the typed name with the released one, at the moment of applying, while the person is there. Progressa's second failing application has a name that differs, and it is refused. The service keeps PNIA's identifier for it, never the national number.

### Slide — What is not published

Be precise about one gap. The Identity specification requires a way to verify a person from a known identifier, but its published set of interfaces has none for it. Progressa has one service of that kind: PNIA's read of a person by national number on Linkup, a contract of Progressa's own that only the examination authority may call. Wherever it appears, it is named as Progressa's own contract, not as a GovStack interface.

### Slide — Check three: complete before sending

The third kind runs when the applicant presses send. Every required field must be filled and every required document uploaded, or the file cannot be sent, and the screen says what is missing. Write those messages with the registry's office, because a parent who cannot understand the message comes to the counter instead. Progressa's third application is a transferring learner without the transfer letter. It stops at the send screen. All three kinds of check act before a person sees the file, so the registrar's attention goes to judgement, not to typing errors.

### Slide — In one sentence

Field rules, a comparison with PNIA's record made with the person present, and a completeness test on sending. Faulty applications stop there, not at the registrar's desk.

### Slide — Sources

*(No narration.)*

---

## 2.5 The officer decides, and the record is written (~5 min)

> *A registrar approves, rejects or sends back each application, and only on approval does the block write the record to the register, in a sequence the specifications leave you to define and test.*

### Slide — Title (2.5)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — Software can check an application. It cannot take responsibility for it.

Software can check an application. It cannot take responsibility for it. In registration, a named officer decides, and the register is written only after that decision. Getting this order right is what makes the record worth trusting.

### Slide — The decision

The specification gives the operator three decisions: approve, reject, or send back for correction, marking the field that is wrong so the applicant sees it. The analyst builds the processing part as a chain of roles. Each role has a list of files and a screen on which to decide. For each status a role may give, pending, approved, rejected or sent back, the analyst sets where the file goes next: to another role, back to the applicant, or to the end. A role can be a person or an automated role, and the specification lets an automated role carry actions, such as a call to another service. The tasks are read and completed through published operations.

### Slide — Progressa's flow

Progressa's flow has three roles. An automated role takes the file as sent and checks it again. It decides nothing that the law gives to the registrar; it only prepares the file for the person who does. The registrar of PLR, a person, then decides. Only on approval does a second automated role write the record to the register and issue the confirmation with the learner's register number. A rejected file is closed, and nothing is written.

### Slide — The write, and what nobody publishes

Now the write. On approval, the specification says, the system sends the information to a registry, using an action that sends form data to another service. Its traffic must pass through an Information Mediator or a secure gateway; in Progressa that is Linkup. The register accepts the record through its create-or-update operation. But neither specification publishes the order of calls or the data between the two blocks. Joining them is your team's own work. Write it down as a short agreement between the two owners: which call is made, with which fields, at which moment, and what happens when the register refuses. Then test both outcomes: an approval that writes, and a refusal that leaves the file waiting.

### Slide — Where the record lands

Where does the record land? PLR, the Progressa Learner Registry, is already a member of Linkup, with one enrolment service. This course sets up the authoritative learner register behind it, and that register is what this service writes to. The record carries the identifier PNIA gave the service, never the national number. And the order matters to a minister as much as to an architect: a record written before a decision is a record nobody answers for.

### Slide — In one sentence

The registrar decides. Only an approval writes the record. The order between the two blocks is yours to define, so write it down and test it.

### Slide — Sources

*(No narration.)*

---

## 2.6 The whole service as a description you can move (~5 min)

> *The whole service is a description you can test, publish, export and import elsewhere, so a second ministry starts from yours and not from nothing.*

### Slide — Title (2.6)

*(Cold open — no scripted narration. The hosts name the module, the video number, the title and the single message; hold until the opener begins.)*

### Slide — The second ministry that needs a registration service should not start from a blank screen.

The second ministry that needs a registration service should not start from a blank screen. If the first ministry kept its service as a description, the second can take it, change what differs and test it. That is how a shared block pays back.

### Slide — Test before anyone uses it

Start with testing. The specification requires the analyst to preview the service before applicants see it, at three depths: each screen on its own, the full service, and the full service in a test installation, where it can be tried from beginning to end before it is published to the live one. Use test cases that look like the real cases your office sees: a transferring learner, a missing document, a learner of the wrong age. The test installation is also where the registry's office reads every screen before the public does. Nothing should reach a parent that has not been through that last step.

### Slide — Export, import, publish

Then the description itself. The specification requires that the full service can be exported and imported, and that the description holds at least the screens and fields, the process flow and the service settings. Settings that belong to one installation are made there and do not travel. A service can also be published to another installation; the specification recommends this rather than requiring it, so ask your vendor whether the product does it. One caution: no published operation creates, changes or exports a service. Export and import are the product's own tools, so the file names its product and format.

### Slide — Combine, and count

Two more things make the description worth keeping. Several registrations can be combined in one service, and a document that two of them need is asked for only once; one registration's result can even be another's input. And the block keeps statistics: the number of applications processed, by operator, registration, service and date. That count is how the owner of a service shows it is used. This is where planning for the whole government pays: each service kept as a description is re-use waiting to happen.

### Slide — Progressa's service, moved

For Progressa, the learner registration is exported, imported into a clean installation and compared with the original, screen by screen. The comparison is the check. If the copy's screens equal the original's, the file carried everything that matters. If not, the difference is either a setting that belongs to one installation or a gap in the product's export, and you need to know which. The number of applications processed is read from the block's own statistics. When a second ministry needs a registration, it begins from this file.

### Slide — In one sentence

Keep the whole service as one file. Test it, export it, import it elsewhere and compare. The next ministry then starts from your work, not from nothing.

### Slide — Sources

*(No narration.)*

# What identifies a learner on the PLR? — a paper with a recommendation

*For the head of the planning unit of the Ministry of Education, Youth and Skills (MoEYS), Progressa.
Written 28 October 2026 by a working session of the PLR project (PLR-003), for the decision the
groundwork (PLR-004) waits for. Progressa is fictional; every body, figure and law in this paper is
the course's invention. This is a recommendation, not a decision: the decision is the planning unit's.*

*How to read the citations.* Every fact is quoted in “curly quotes” and followed by the file and the
line that hold it, as `<path>:<line>`. Paths are relative to the project's root
(`plr-prototype/`). Four documents are cited: Progressa's page
(`../../gitbook/start-here/progressa.md`), the plan of the prototype
(`../KP0_Orchestrate_Demo_App_Plan_v0.1.md`), the Module 2 script bundle with MoEYS's project brief
(`../KP0_Module2_Script_Bundle_v0.1.md`), and the project's constants (`CONSTANTS.md`). Where the
paper reasons beyond what a document says, it says so with the words *reasoning, not in the
documents*.

*Version 2, 28 October 2026.* The review of version 1 found two facts counted against position B and
not against A: that the prototype's simulation shows a body doing what it has not agreed to, and that
a position depends on a body MoEYS cannot oblige. Both are now counted against every position they
touch (section 4: T3, T6a and T8, and the cross-check). **The recommendation of position A stands;
its ground is narrower** (section 5.2), and one recommended action is added: the request to the Civil
Registration Department that position A itself needs (section 5.1, item 3).

---

## The page for the planning unit

**The question.** When a child is enrolled on the Progressa Learner Registry (PLR), what number
identifies that child — a number the PLR issues itself, or the national identity issued by PNIA?

**Why it is hard.** PNIA “issues child IDs only at 16; birth registration is at 71%”
(`../../gitbook/start-here/progressa.md:44`). So no child of primary-school age holds a national
number today, and, on the plan's reading of 71% (section 1), about three children in ten have no
birth record to anchor one. Yet the country's design is that PNIA “owns the person identity every
sector reuses” (`../../gitbook/start-here/progressa.md:12`), while MoEYS today keeps “its own learner
numbering” (`../../gitbook/start-here/progressa.md:26`) beside other lists, of which “none of the
lists agree” (`../../gitbook/start-here/progressa.md:14`).

**The two positions**, as the plan states them:

- **A —** “the PLR issues its own number at first enrolment and holds the birth registration number
  where one exists” (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:185`).
- **B —** “the national identity is the key, which means PNIA issuing a number to every child at
  birth registration, a change in another body” (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:185`).

**The recommendation.** The planning unit is recommended to adopt **position A** for the PLR, with
two conditions written into the groundwork: the PLR number stays inside the education sector, and
the record carries a field for the national number so that it can be held, not keyed on, once a
child has one. Because A's link to the birth record needs the Civil Registration Department to
answer across Linkup, which MoEYS cannot oblige, the planning unit is recommended to ask that of the
Department whichever position it adopts. Separately, it is recommended to put position B to PNIA and
the Civil Registration Department as a request of its own, because B's case across sectors is real
but is not MoEYS's to decide, and B on its own would not identify the children with no birth record.

**The ground, in short.** Both positions depend on a change at the Civil Registration Department,
under the Ministry of Interior, that MoEYS cannot oblige: A for its look-up of the birth record, B for
passing each birth to PNIA (T3). B depends besides on PNIA issuing numbers to children, which today it
does “only at 16” (`../../gitbook/start-here/progressa.md:78`). If those bodies do not move, A still issues a key to every child and
loses the link to the birth record; B leaves every child under 16 without a key. Where Civil
Registration does answer, A holding the birth registration number reaches the same children B would
reach: those of the share at which “birth registration is at 71%” (`../../gitbook/start-here/progressa.md:44`), under either. B is the
stronger on reuse across sectors (T7), and that cost of A is accepted, not answered.

**What would change it.** A dated commitment by PNIA, with the Civil Registration Department, to
issue a number at birth registration *and* to issue one to the children already registered, within
the PLR programme's three years; or a binding whole-of-government rule that sectors key on the
national identity. Either would remove most of B's cost and turn the recommendation to B for the
birth-registered children. So would the Civil Registration Department declining to answer across
Linkup while agreeing to pass births to PNIA, with PNIA issuing at birth: B could then reach the
child through PNIA, already a Linkup member, and A could not reach the birth record (section 5.3).

**The decisions asked of the planning unit** (none of them is this paper's):

1. Which position identifies a learner on the PLR — A, B, or another.
2. Whether MoEYS asks the Civil Registration Department to answer across Linkup (needed under A),
   whether it puts position B to PNIA and the Department as a separate request, and who carries each.
3. Whether the prototype's goal G1 goes ahead on position A as the plan writes it, since PLR-004
   waits for this decision.
4. Whether G1, outside the simulation, gives the clerk a way to key the birth registration number
   from a paper record when Civil Registration cannot answer — a departure from G1 as the plan
   writes it (section 4, T3).

---

## 1. The question, and what the documents already settle

The minister has promised “a 'one learner, one record' announcement within 12 months”
(`../../gitbook/start-here/progressa.md:44`) for a record “that follows the child from primary school
to university” (`../../gitbook/start-here/progressa.md:14`). The question this paper answers is the
one the plan calls “the hard question of what identifies a learner”
(`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:38`), on which “What identifies a learner has two serious
positions with a case on each side” (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:39`).

What the documents settle, and this paper does not reopen:

- The PLR programme needs “learner identity (link to National ID)”
  (`../../gitbook/start-here/progressa.md:35`). Both positions must therefore link to the national
  identity; they differ on what *keys* the record.
- “Birth registration is the legal identity anchor for a child”
  (`../../gitbook/start-here/progressa.md:78`).
- The Data Protection Act 2023: “A legal basis is needed to share a minor's data; parental consent
  for any use the law does not require” (`../../gitbook/start-here/progressa.md:73`).
- The prototype is for agreement: “It is a prototype for agreement, not the registry itself.”
  (`CONSTANTS.md:7`), and it is for head teachers, PNIA, PNEA and the Data Protection Commission to
  agree on (`CONSTANTS.md:7`).

What the documents do **not** record: any stated preference of PNIA, of MoEYS, of the owner or of the
orchestrator between A and B. The plan says only that this paper “must be free to conclude against
PNIA's preference and against MoEYS's” (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:219`) without
saying what those preferences are. The one leaning the documents show is the plan's own: its goal G1
already ends with “A PLR number is issued” (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:68`), which is
position A. This paper recommends A, and so agrees with the plan's wording; the reader should weigh
that the paper was written knowing the leaning (section 6).

A note on the figure 71%. The country page gives it as “birth registration is at 71%”
(`../../gitbook/start-here/progressa.md:44`) without saying of which population — all children,
children under five, or births of a given year. The plan reads it as the share of children: “About
29% of” / “the children have no birth registration number, matching Progressa's 71%”
(`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:81`, `../KP0_Orchestrate_Demo_App_Plan_v0.1.md:82`). This
paper uses it the same way and says so; whichever population it is, the figure touches both positions
alike (section 4, test T2).

---

## 2. Position A at its strongest — the PLR's own number, holding the birth registration number

**The position.** At a child's first enrolment the PLR issues its own learner number. Where the child
has a birth record, the PLR holds its birth registration number beside it; where the child has none,
the child is enrolled all the same and flagged.

**The case, from the documents.**

1. **No child of school age has a national number today, and B cannot change that in time.** PNIA
   “issues child IDs only at 16” (`../../gitbook/start-here/progressa.md:44`), and the Civil
   Registration Act's row says the same: “PNIA issues IDs only at 16”
   (`../../gitbook/start-here/progressa.md:78`). A key that no primary-school learner holds cannot
   key a learner registry until another body changes how it issues numbers.
2. **A holds the legal anchor itself.** “Birth registration is the legal identity anchor for a
   child” (`../../gitbook/start-here/progressa.md:78`). Position A keeps exactly that anchor, the
   birth registration number, on the record wherever it exists — the same anchor B's number would be
   issued from. It reaches it through G1's look-up “at Civil Registration across Linkup”
   (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:68`), which needs the Civil Registration Department to answer there
   (section 4, T3).
3. **A enrols every child.** The plan's G1: “A child with no birth record is enrolled with the flag”
   (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:68`). With birth registration “at 71%”
   (`../../gitbook/start-here/progressa.md:44`), a registry keyed only on a number issued at birth
   registration leaves out the children without one; A does not.
4. **A's key is MoEYS's to decide.** The PLR number is issued on MoEYS's own authority. B's key
   needs PNIA to change how it issues numbers, and with it the Civil Registration Department,
   “under Ministry of Interior” (`../../gitbook/start-here/progressa.md:53`). Nobody in the documents can oblige
   either: PDGA has “a coordinating but not binding mandate”
   (`../../gitbook/start-here/progressa.md:24`), and “No EA Governance Board exists; an ICT Steering
   Committee met twice in 2024 and not since” (`../../gitbook/start-here/progressa.md:57`). A's
   *link* to the birth record needs the Civil Registration Department too (section 4, T3); A's key
   does not.
5. **The time the minister has set.** “The Minister wants a 'one learner, one record' announcement
   within 12 months” (`../../gitbook/start-here/progressa.md:44`). A's key can be issued on MoEYS's own
   authority; B's key waits on another body's date. (A's link to the birth record waits on the Civil
   Registration Department's date, T8.)
6. **The plan's goals are written on it.** G1 searches the PLR first, “so a learner already on it is
   found, not entered again”, and ends “A PLR number is issued”
   (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:68`); in G2 “the learner keeps the same number and the
   same history” (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:69`); V1 counts “enrolled learners
   without a birth record” (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:71`), a figure only a registry
   that enrols such learners can give.

## 3. Position B at its strongest — the national identity is the key

**The position.** The national identity keys the learner's record. For that to work at school age,
PNIA issues a number to every child at birth registration, a change in another body.

**The case, from the documents.**

1. **It is the country's design.** PNIA “owns the person identity every sector reuses”
   (`../../gitbook/start-here/progressa.md:12`), and the PLR programme's own need is “learner
   identity (link to National ID)” (`../../gitbook/start-here/progressa.md:35`). A sector number is
   the exception to that design, not the rule.
2. **A sector's own number is how the flagship stalled.** Today MoEYS “keeps district-level EMIS
   records with its own learner numbering” and “the Ministry of Health's patient index uses yet
   another identifier” (`../../gitbook/start-here/progressa.md:26`); “a learner is registered three
   times” and “none of the lists agree” (`../../gitbook/start-here/progressa.md:14`). Position A
   creates one more sector number — a better one, but of the same kind.
3. **Once-only, across sectors.** The question the ministry faces is a model in which “a parent
   enrolling a child in school never re-supplies information already held by civil registration, PNIA
   or a previous school” (`../../gitbook/start-here/progressa.md:42`), and the draft Roadmap lists
   “8 principles including user-centricity, once-only, open standards”
   (`../../gitbook/start-here/progressa.md:63`). Today “A parent proves the child's identity on paper
   at every counter” (`../../gitbook/start-here/progressa.md:14`). A national number given at birth
   would serve the school, the clinic and the grant programme alike; a PLR number serves the school.
4. **The record must outlive the education sector's own lists.** The promise is a record “that
   follows the child from primary school to university” (`../../gitbook/start-here/progressa.md:14`).
   By university a learner is past 16, the age at which PNIA issues; a record keyed on the national
   number from the start never needs re-linking at that age.
5. **The pieces exist.** PNIA's National ID and e-KYC are operational, with the “API documented”
   (`../../gitbook/start-here/progressa.md:66`); PNIA is already one of Linkup's “four members (PNIA,
   the business register, the tax authority, PDGA)” (`../../gitbook/start-here/progressa.md:28`).
6. **It avoids a second number to keep in step.** Under A, every learner who later receives a
   national number has two, and the PLR must keep them matched for the rest of the record's life
   (*reasoning, not in the documents*: the documents do not describe the cost of a mapping, but the
   instruction for this paper names it, and it follows from A holding a number of its own).

---

## 4. The table — each position against each test

How the tests were chosen: the instruction names six (the law; coverage; what another body must
change and who decides; duplicates at enrolment; what is hard to reverse; what each means for G1 to
G3, which is one test given a row for each goal, T6a to T6c, because the goals differ). Two are added because each position's strongest case rests on them: **T7**, the second number
and the cross-sector reuse (B's case 2, 3 and 6), and **T8**, time against the 12-month promise (A's
case 5).

| Test | Position A — the PLR's own number, holding the birth registration number | Position B — the national identity is the key (PNIA issues at birth registration) |
|---|---|---|
| **T1. The law on a minor's data** — “A legal basis is needed to share a minor's data; parental consent for any use the law does not require” (`../../gitbook/start-here/progressa.md:73`) | Allowed with a legal basis; none is named. A needs one sharing flow: Civil Registration to MoEYS, for the birth record G1 looks up (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:68`), and one onward, the PLR to PNEA for G3, which “receives only the fields its legal basis allows” (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:70`). The documents name no legal basis for MoEYS to receive the birth record; the pack says of the examinations authority “Not in the pack: the examinations authority's own legal mandate to hold learner data.” (`../KP0_Module2_Script_Bundle_v0.1.md:140`). | Allowed with a legal basis; none is named. B needs the same two flows as A, and one more: Civil Registration to PNIA for **every** registered birth, including children who never enrol (*reasoning, not in the documents*: the documents do not say whether PNIA already receives birth records). The same gap counts: no basis is named for MoEYS to receive the national number, nor for PNEA (`../KP0_Module2_Script_Bundle_v0.1.md:140`). Under neither position does the Act forbid the key; under both a basis must be found. |
| **T2. Coverage** — “birth registration is at 71%” (`../../gitbook/start-here/progressa.md:44`) | Every enrolled child gets a PLR number, the child with no birth record included, flagged (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:68`). The link to the legal anchor reaches the birth-registered share only: 71% at most. | A national number issued at birth registration reaches the birth-registered share only: 71% at most — the same share A's link reaches. The remaining children have no key and still need one to be enrolled at all; whatever is given them is a number of the PLR's own, that is, position A for them. Children already registered before the change hold no national number unless PNIA also issues to them; the documents say nothing of that. |
| **T3. What another body must change, and who decides** | **MoEYS** must join Linkup: “Linkup exists but MoEYS is not a member.” (`../../gitbook/start-here/progressa.md:44`). For G1's look-up of the birth record, which the plan places “at Civil Registration across Linkup” (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:68`), the **Civil Registration Department** must answer across Linkup, yet it is not among the “four members (PNIA, the business register, the tax authority, PDGA)” (`../../gitbook/start-here/progressa.md:28`); that is a change in another body, decided under the Ministry of Interior (`../../gitbook/start-here/progressa.md:53`). MoEYS cannot oblige it, and PDGA's mandate “coordinates rather than binds” (`../../gitbook/start-here/progressa.md:76`). Without it, A's key is still issued and every child is still enrolled, but G1 as the plan writes it cannot run outside the simulation, and the link to the legal anchor and the match key of T4 are lost for every child, not only for those without a birth record. The clerk could key the birth registration number from a paper record (*reasoning, not in the documents*: the documents say “today enrolment is on paper at the school” (`../../gitbook/start-here/progressa.md:44`) but not that the parent holds a paper record bearing the number). That path **departs from G1 as the plan writes it**, which looks the record up across Linkup and has no keyed path; whether to add it is the planning unit's (5.4, item 4). | **MoEYS** must join Linkup, as under A (`../../gitbook/start-here/progressa.md:44`). The child's national number would be read from PNIA, which is already among Linkup's “four members (PNIA, the business register, the tax authority, PDGA)” (`../../gitbook/start-here/progressa.md:28`), so B as such does not need the Civil Registration Department on Linkup; it needs the Department to pass each birth to PNIA (*reasoning, not in the documents*: the documents do not say whether PNIA receives birth records today, nor by what route) — a change in a body under the Ministry of Interior (`../../gitbook/start-here/progressa.md:53`), as A's look-up is. **And** PNIA must issue numbers to children, which today it does only at 16: “PNIA issues IDs only at 16” (`../../gitbook/start-here/progressa.md:78`). Decided by PNIA (“owner of the identity register”, `../../gitbook/start-here/progressa.md:52`) and the Ministry of Interior; the age rule sits in the Civil Registration Act's row (`../../gitbook/start-here/progressa.md:78`), so it may need the law changed — the documents do not say whether the rule is the Act's or PNIA's practice. MoEYS cannot oblige either body, and PDGA's mandate “coordinates rather than binds” (`../../gitbook/start-here/progressa.md:76`) — the same as for the change A needs. Without the change at PNIA, or without births passed to it, B has no key for any child under 16. |
| **T4. Duplicates caught at enrolment** | G1 searches the PLR first, “so a learner already on it is found, not entered again” (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:68`). For the birth-registered children the birth registration number is a match key one-to-one with the birth record (*reasoning, not in the documents*), once Civil Registration answers (T3). For the children without one, duplicates can be caught only by matching names and dates, and the same child “with different spellings” (`../../gitbook/start-here/progressa.md:44`) is the case that slips. | For the birth-registered children the national number is a match key, issued one-to-one with the same birth record (*reasoning, not in the documents*) — no stronger, for catching duplicates, than the birth registration number A holds. For the children without a birth record, B has no number, and duplicates are caught by names and dates exactly as under A: the same child “with different spellings” (`../../gitbook/start-here/progressa.md:44`) slips the same way. |
| **T5. What is hard to reverse** | Once PLR numbers are issued and used by schools and by PNEA (G3), they persist; a later move to key on the national number means a mapping kept for life — the second number of T7. Moving from A towards B is open: the national number can be added to the record once children hold one, without re-numbering anyone. | Numbers issued to infants by PNIA are a national design change, beyond education, and hard to undo once issued. If the PLR is keyed on them and the change stalls or is partial, the PLR must fall back on a number of its own for the children without one (T2) — position A arriving late, for part of the register — and those numbers then have to be kept in step with the national number when those children get one: the second number of T7, for fewer learners. |
| **T6a. The prototype — goal G1, enrol a learner** | G1 as the plan writes it: search the PLR, look up the birth record, enrol the child with no birth record with the flag, confirm the parent through PNIA's e-KYC, issue “A PLR number” (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:68`). V1's “enrolled learners without a birth record” (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:71`) is a count the registry can give. But the simulation shows two bodies doing what they have not agreed to: the Civil Registration Department answering across Linkup, though it is not among Linkup's “four members (PNIA, the business register, the tax authority, PDGA)” (`../../gitbook/start-here/progressa.md:28`), and MoEYS reading across Linkup, though “MoEYS is not a member” (`../../gitbook/start-here/progressa.md:44`). The plan says so of itself: “MoEYS reads across Linkup, which it has not yet joined” (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:38`). Both are joins to an exchange that has its “member onboarding procedure documented” (`../../gitbook/start-here/progressa.md:65`). | G1 can be built on simulated bodies, since “Civil Registration, PNIA and Linkup are simulated in the browser.” (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:85`), so B's change at PNIA costs the prototype little. But the simulation shows the same two bodies as A's doing what they have not agreed to — MoEYS reading across Linkup (`../../gitbook/start-here/progressa.md:44`), and the Civil Registration Department answering across it or passing births to PNIA (T3) — and a third: PNIA issuing children's numbers it does not issue, before PNIA has agreed. For that third, unlike Linkup's onboarding (`../../gitbook/start-here/progressa.md:65`), the documents name no procedure, and it may need the Civil Registration Act's rule changed (T3). And for the children without a birth record (about 29% of the fixture, `../KP0_Orchestrate_Demo_App_Plan_v0.1.md:81`) G1 must still issue a number of the PLR's own. |
| **T6b. The prototype — goal G2, move a learner to another school** | “the learner keeps the same number and the same history” (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:69`): the PLR number, unchanged. | The learner keeps the national number, unchanged, where the learner has one; the learner without one keeps whatever number G1 gave. G2 works the same way under both. |
| **T6c. The prototype — goal G3, register an examination candidate from the PLR** | PNEA reads the learner across Linkup by the PLR number and “receives only the fields its legal basis allows” (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:70`). PNEA learns one more number, the PLR's. | PNEA reads the learner by the national number where there is one, and by the PLR's own number otherwise — two keys for one reader. The refusal of a field without a basis (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:70`) is the same under both. |
| **T7. The second number, and reuse across sectors** | A **adds** a sector number, of the kind the country already suffers from (“its own learner numbering”, “yet another identifier”, `../../gitbook/start-here/progressa.md:26`). Every learner who later holds a national number has two, to be kept in step for life. Until PNIA changes, that is from 16: PNIA “issues child IDs only at 16” (`../../gitbook/start-here/progressa.md:44`), so the programme's need of “learner identity (link to National ID)” (`../../gitbook/start-here/progressa.md:35`) is met under A only from that age. A does not serve the clinic or the grant programme; the parent still proves the child's identity elsewhere (`../../gitbook/start-here/progressa.md:14`). | B adds no number for the birth-registered children, and the national number serves every sector (`../../gitbook/start-here/progressa.md:12`). But for the children with no birth record B also needs a second number (T2), a sector number of the same kind as A's; and every learner already enrolled before the change holds no national number until PNIA issues one: B too has numbers to keep in step, for fewer learners. |
| **T8. Time against the promise** — “announcement within 12 months” (`../../gitbook/start-here/progressa.md:44`); the prototype owed by “30 November 2026” (`CONSTANTS.md:13`) | A's key is within MoEYS's own authority. Its link to the birth record turns on the Civil Registration Department answering across Linkup (T3), a change under the Ministry of Interior for which the documents give no date and which MoEYS cannot oblige. Both turn on MoEYS joining Linkup and on the legal basis of T1, which B needs too. For the prototype the cost is small (simulated, T6a); for the registry, A without Civil Registration enrols every child but without the link. | Turns on MoEYS joining Linkup and on T1's legal basis, as A does; on the Civil Registration Department passing each birth to PNIA, as A's link turns on the Department answering (T3); **and** on PNIA issuing to children, which today it does only at 16 (“PNIA issues IDs only at 16”, `../../gitbook/start-here/progressa.md:78`). For neither change at the Ministry of Interior's side or at PNIA do the documents give a date or a body that can set one. For the prototype the cost is small (simulated, T6a); for the registry, B without these changes has no key for any child under 16. |

**The cross-check the instruction asks for — each fact counted against every position it touches.**

| Fact | Counted against A in | Counted against B in |
|---|---|---|
| birth registration at 71% | T2 (the link reaches 71% at most) | T2 (the key reaches 71% at most) |
| no legal basis named for sharing a minor's data | T1 | T1 (and one flow more) |
| MoEYS not a Linkup member | T3, T6a, T8 | T3, T6a, T8 |
| the Civil Registration Department, under the Ministry of Interior, must change, and MoEYS cannot oblige it | T3 (answer across Linkup), T4, T8; 5.2 | T3 (pass each birth to PNIA), T8; 5.2 |
| the simulation shows a body doing what it has not agreed to | T6a (Civil Registration, MoEYS) | T6a (the same two, and PNIA) |
| spelling variants of the same child | T4 (children without a birth record) | T4 (the same children) |
| a second number to keep in step | T5, T7 (every learner who later gets a national number) | T5, T7 (the children without a birth record; learners enrolled before the change) |
| PNIA issues only at 16 | T7 (the link to the national ID only from 16) | T3, T8 |
| a sector number repeats the fragmentation | T7 | T7 (for the children B leaves without a key) |

---

## 5. The recommendation

*This section is a recommendation to the planning unit. It is not a decision; the decisions are listed
in 5.4 and are the planning unit's.*

### 5.1 What is recommended

1. **The planning unit is recommended to adopt position A for the PLR**: the PLR issues its own number
   at first enrolment and holds the birth registration number where one exists.
2. **With two conditions written into the groundwork (PLR-004)**, so that A's cost under T5 and T7 is
   bounded from the start: (a) the PLR number is used inside the education sector only, and is not
   offered to other sectors as an identifier of the child; (b) the record carries a field for the
   national number, filled when a learner holds one (at 16 today; earlier if B is ever adopted), so
   that the PLR can *hold* the national identity as the programme's need says — “learner identity
   (link to National ID)” (`../../gitbook/start-here/progressa.md:35`) — without being keyed on it.
3. **The planning unit is recommended to ask the Civil Registration Department to answer across
   Linkup**, whichever position it adopts: A's link to the birth record and its match key (T3, T4)
   depend on it, and MoEYS cannot oblige it. This item is new in version 2.
4. **Separately, the planning unit is recommended to put position B to PNIA and the Civil Registration
   Department as a request of MoEYS's own**, carried by the post the planning unit names, with the
   case of section 3 and the gap of T2 stated in it. B's case across sectors (T7) is real; it is not
   MoEYS's to decide, and it does not depend on the PLR waiting for it.

### 5.2 On what ground

- On the two tests where B is strongest for the learner registry itself — the link to the legal
  identity (T2) and duplicates (T4) — position A holding the birth registration number reaches the
  same children, by the same anchor, as B would: 71% at most under either, because B's number is
  issued at the same birth registration A records. This holds **once the Civil Registration
  Department answers across Linkup** (T3); until it does, A keeps its key but loses the link and the
  match key, short of the paper path of T3, which is *reasoning, not in the documents* and departs
  from G1 as the plan writes it.
- For the remaining children, B has no key at all, and the PLR would need its own number for them in
  any case (T2, T6a): B on its own does not identify every learner; A does.
- **Both positions** rest on a change at the Civil Registration Department, under the Ministry of
  Interior, that MoEYS cannot decide and that no body in the documents can oblige (T3, T8): A for its
  look-up, B for passing each birth to PNIA. B rests besides on PNIA issuing to children, which may
  need the law changed (T3), with no date against a 12-month promise (T8). What differs is what
  fails when the other body does not move: under A the key is still issued, on MoEYS's authority, and
  what is lost is the link and the match key; under B no child under 16 has a key (T3, T8).
- Both positions' simulations show bodies doing what they have not agreed to (T6a): two under A, the
  same two and PNIA under B. For a prototype that is “for agreement, not the registry itself”
  (`CONSTANTS.md:7`), this weighs little against either; B's third differs in that no procedure for it is
  named (T6a).
- Against A, and not answered by it: A adds one more sector number (T7), and every learner who later
  holds a national number will have two, kept in step for life; the link to the national identity
  comes only at 16 until PNIA changes (T7). Condition (a) keeps that number from spreading beyond the
  sector; condition (b) makes the later link a field to fill, not a migration. That cost remains, and
  the planning unit should accept it knowingly.

**Whether the ground and the recommendation still stand (version 2).** Version 1's third point
counted the dependency on a body MoEYS cannot oblige against B alone, and leaned on a paper-keying
path it neither cited nor marked. Counted against both, the ground is narrower: A does not stand
clear of other bodies; it stands clear only of PNIA's issuing rule, and its advantage on T2 and T4
over a position with no key at all is conditional on the Civil Registration Department. The
recommendation of A stands, because the difference that remains — A degrades to a key without a link
where B has no key for any child under 16 (T3) — still favours A for the registry; and one action is
added, the request of 5.1, item 3, which A itself needs.

### 5.3 What would change the recommendation

- **A dated commitment from PNIA and the Civil Registration Department** to issue a national number
  at birth registration **and** to the children already registered, within the PLR programme's
  “USD 6.5m over 3 years” (`../../gitbook/start-here/progressa.md:35`). Then B's cost under T3 and
  T8 falls away, the second number of T7 would be needed only for the children without a birth
  record, and this paper would recommend B as the key for the birth-registered children, with the
  PLR's own number kept for the rest.
- **A binding rule that sectors key on the national identity** — for instance the Roadmap, now
  “Not yet binding” (`../../gitbook/start-here/progressa.md:76`), approved with such a rule and a body
  to enforce it. The planning unit would then be bound, and the question would be one of timing.
- **A finding that the PLR may not hold the birth registration number**, from the Data Protection
  Commission or in the legal basis T1 needs. A would lose its link to the legal anchor; the question
  would reopen.
- **A birth-registration coverage near the whole of the children.** T2's gap would close, and the
  remaining difference between A and B would be T7 alone, which favours B.
- **The Civil Registration Department declining to answer across Linkup, while agreeing to pass
  births to PNIA, with PNIA agreeing to issue at birth registration.** B could then reach the child
  through PNIA, already a Linkup member (T3), and A could reach the birth record only by the paper
  path of T3. The recommendation would turn to B for the birth-registered children.
- **The Civil Registration Department declining both.** A would lose its link and match key short of
  the paper path (T3); B would have no key. The recommendation of A would stand, with less behind it.

### 5.4 What the planning unit must decide

1. **Which position identifies a learner on the PLR** — A, B, or another. This paper recommends A, with
   the conditions of 5.1.
2. **Whether MoEYS asks the Civil Registration Department to answer across Linkup**, and whether it
   puts position B to PNIA and the Department as a separate request, and which post carries each.
3. **Whether the prototype's goal G1 goes ahead on position A** as the plan writes it. PLR-004 “Waits
   for PLR-003” (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:186`); the decision, not this paper, is
   what it waits for.
4. **Whether G1, outside the simulation, offers the clerk a keyed path** for the birth registration
   number from a paper record when Civil Registration cannot answer. It departs from G1 as the plan
   writes it (T3), and the documents do not say such a paper record exists.

### 5.5 Whom the recommendation may contradict

The documents record no preference of PNIA, of MoEYS, of the owner or of the orchestrator (section 1).
If PNIA prefers that every sector key on its number, the recommendation contradicts it for the PLR,
and section 5.1 item 3 is the way to put PNIA's case to work. If MoEYS prefers a number of its own
with no link to the national identity, the recommendation contradicts that too: condition (b) holds
the link, because the programme needs it (`../../gitbook/start-here/progressa.md:35`). The
recommendation agrees with the plan's wording of G1 (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md:68`).

---

## 6. What this paper could not establish

- **Of which population 71% is.** The country page does not say (section 1); the plan reads it as
  children. If it is births of a recent year, older children may be covered less, or more.
- **Whether the age rule of 16 is in the Civil Registration Act or is PNIA's practice.** The documents
  put it in the Act's row (`../../gitbook/start-here/progressa.md:78`) and in the question
  (`../../gitbook/start-here/progressa.md:44`) without saying which. It decides whether B needs a law
  changed.
- **The legal basis for any of the flows of T1.** None is named for MoEYS, PNIA or PNEA.
- **Any preference of PNIA or MoEYS.** None is recorded.
- **Whether a parent holds a paper record bearing the birth registration number**, on which the
  keyed path of T3 rests. The documents do not say.
- **Whether PNIA receives birth records today, and by what route**, on which B's T3 rests.
- **The paper was written knowing the plan's leaning to A** (section 1). The review should read the
  case for B (section 3) and the cells of B in section 4 for a fact against B that is not also counted
  against A. Version 2 did so for the two facts the review of version 1 found (the head's note).

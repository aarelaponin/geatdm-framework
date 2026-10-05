---
description: "An institution's record works the same way. The GovStack Digital Registries specification requires a register to let other systems search, read."
---

# E5.4 — Identity and registries: use the block, do not rebuild it

**Subtopic:** 5.4 — Identity and registries: use the block, do not rebuild it

**Public anchor:** GovStack Identity 2.0 §9.1.1, §7.2.1 and §8, requirement 6.2-r2; OpenID Connect Core 1.0 §2 and §3.1; GovStack Digital Registries 3.0-alpha, requirement DRS-33, §8.1 and §8.2; PAERA v1.0 §2.6

**Simulated case:** This is a simulated case for Progressa, a fictional country; every institution, name, date and figure in it is invented.

**What it shows.** The slides of the script of 5.4 that carry Progressa's example: 'What an institution is: the register'; 'Progressa: one sign-in, one register, no copies'; 'A block used, not a copy kept'; 'Signed in, and read from the register'.

**Form of this example.** Taken as it stands from the script of 5.4 in the script bundle of module 5: the slides that carry Progressa's example, each with what the slide shows and what the narrator says over it. The method's step names no country; the example is filled for Progressa.

## What an institution is: the register

> _Slide 4 — Title: 'What an institution is: the register'. Body, three text rows: 'The specification: other systems work with a register's records through open interfaces, as the register authorises.' 'Progressa's design: only PHEQA's application writes the register of institutions.' 'A reader takes the record when it needs it, and keeps no copy.'_

An institution's record works the same way. The GovStack Digital Registries specification requires a register to let other systems search, read, create and update its records through open interfaces, and to authorise which systems and users may do so. Progressa's design authorises only PHEQA's application to write the register of institutions. Every other service reads the record when it needs it, and keeps no copy.

## Progressa: one sign-in, one register, no copies

> _Slide 5 — Title: 'Progressa: one sign-in, one register, no copies'. Body, four text rows: 'An officer of MoEYS signs in through PNIA.' 'MoEYS's application keeps PNIA's identifier for her, not her national number.' 'Harbourview University College, INS-00217, is read from PHEQA's register when a case is opened.' 'Beside it, a design with its own table of institutions: two copies, drifting apart.'_

In Progressa, an officer of MoEYS signs in through PNIA, and MoEYS's application keeps the identifier PNIA gives it, not her national number. When she opens a case, the application reads Harbourview University College from PHEQA's register of institutions. Now picture the other design, with its own table of institutions inside MoEYS's application. One week PHEQA writes the college's new name into the register. MoEYS's copy keeps the old one, and the next week the minister signs a decision under a name the college no longer has.

## A block used, not a copy kept

> _Slide 6 — Title: 'A block used, not a copy kept'. Body, two text rows: 'A block paid for once serves every service that needs it.' 'A copy is a second register that nobody planned and nobody keeps.'_

A block paid for once and used by many services is re-use that only someone planning for the whole sector can see. A copy is the opposite: a second register that nobody planned, nobody keeps and nobody corrects. The reference architecture PAERA puts the deeper point plainly: digital public infrastructure is not neutral, and it shapes what can be built on top of it. Build on the block, and the next service inherits the same identity and the same register.

## Signed in, and read from the register

> _Slide 7 — Title: 'Signed in, and read from the register'. Demonstration segment, storyboard until recorded (section 4.10). Text-only stand-in until the recording exists: 'A test officer signs in through the identity sign-in.' 'The application shows the identifier it was given; no national number.' 'INS-00217 opened, as read from PHEQA's register.' 'Pass: sign-in complete; no national number; the record agrees with the register.'_

The demonstration shows both on MoEYS's application. A test officer signs in through the identity sign-in. The application shows the identifier it was given and no national number. Then an institution's record is opened, read from PHEQA's register. It passes when the sign-in completes, no national number appears, and the record shown agrees with the register. Until both applications are generated, this is a storyboard.

**What to look for before you accept it.** Take who someone is from the identity block, and what an institution is from its register. Keep the identifier you are given, and no copy.

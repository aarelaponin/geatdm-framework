**Subtopic:** 2.3 — The records the service keeps, and whose each one is

**Public anchor:** GovStack, Digital Registries Building Block specification, version 3.0-alpha, June 2026, on a register as the authoritative record kept by one body and read by others under rules (its sections are fixed in the third production round); GovStack, Identity Building Block specification, version 2.0, December 2025, section 9.1.1, on the facts the identity block releases after the person signs in and approves

**Simulated case:** This is a simulated case for Progressa, a fictional country; every institution, name, date and figure in it is invented.

# E2.3 — PHEQA's records, and the three answers for every fact

**What it shows.** The records of PHEQA's service, an institution, an application, a licence and a decision, each with one sentence saying what one of them means; for three facts the three answers on who keeps them; and the read-back of the records to the registrar in plain sentences.

**Form of this example.** The three answers and the read-back are the method's and name no country. The records are filled for Progressa.

## The four records, each in one sentence

| Record | What one of them means |
|---|---|
| An institution | One private higher-education institution, proposed or operating, that PHEQA knows of, under the identifier PHEQA gives it. |
| An application | One request in writing to PHEQA, by one applicant, for one kind of licence for one institution, made on one day. |
| A licence | One permission PHEQA grants to one institution to operate, of one kind, from one day, which may later be suspended or cancelled. |
| A decision | One act by which PHEQA or the minister settles an application or a licence, with its date, its ground and who took it. |

If two officers of PHEQA would define a record differently, that is a question for the Registrar to settle, with a name on it. One did come up: whether a university college that opens a second campus is one institution or two. It is recorded as an open question owned by the Registrar.

## The three answers

For every fact the service uses, the team gives one of three answers: **we keep it**, **we take it from another body**, or **we must not hold it**. Three facts show all three.

| Fact | The answer | What it means in practice |
|---|---|---|
| The institution's name | **PHEQA keeps it.** PHEQA is the body that registers institutions, so the name in PHEQA's register is the name. | When an institution changes its name, the change is written in PHEQA's register and nowhere else. Every other body reads it from there. |
| The applicant's identity | **Taken from PNIA, never copied.** PNIA's sign-in tells PHEQA who the applicant is and gives PHEQA its own identifier for the person. PHEQA keeps that identifier and the name PNIA released, and never the national number. | PHEQA does not ask the applicant to type a name, a date of birth or a national number. It cannot hold an identity that disagrees with PNIA's. |
| The institution's record, as MoEYS needs it | **MoEYS takes it from PHEQA's register and must not hold its own.** MoEYS reads the institution's name, kind and standing across Linkup each time it needs them, and keeps only the register number. | The ministry cannot drift out of step with PHEQA, because it has no copy to drift. The institution of subtopic 1.1 would have filled in nothing at the ministry. |

The Digital Registries specification describes a register in the same way: kept by one body as the authoritative record, and read by others under rules. The Identity specification describes the facts the identity block releases to a service after the person signs in and approves; PHEQA uses those and nothing more.

## The read-back

The supplier's analyst read the records back to the Registrar of PHEQA in plain sentences, with the head of the registration desk beside her, and asked them to stop him at any sentence they did not recognise.

1. "An institution may have many applications over its life, and each application is for one institution."
2. "An application is made by one person, who signs in through PNIA."
3. "An institution may hold one licence of each kind; a full licence is granted only after a provisional licence."
4. "A decision settles one application; a licence is granted only by a decision."
5. "When an application is made for an institution that PHEQA does not yet know, PHEQA records the institution at that moment, under the name proposed."

The Registrar stopped him at sentence 3. "A licence of each kind? An institution whose provisional licence was cancelled may apply again and be granted a second one." The sentence was wrong, and the records were changed: an institution may hold several licences of the same kind over its life, one at a time. That is the read-back working. A sentence the official does not recognise is a question for the records, not a wording to polish.

**What to look for before you accept the records.** Ask for the read-back in plain sentences, and have it read to the person who runs the service. For every fact, look for one of the three answers. A fact with no answer will be kept by whoever builds the screen that first needs it.

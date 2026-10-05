---
description: "1. Review a story, not a list. Officials agree to what a person does, step by step, and what they see at each step. They do not sign a list of fields."
---

# E1.2 — A supplier's proposal for PHEQA, read against the three rules

**Subtopic:** 1.2 — Three rules you can hold a supplier to

**Public anchor:** PAERA version 1.0 (GovStack, 2024), section 2.3, on enterprise architecture as the description that lets the policy side and the technical side plan together; the three rules themselves are the SDD method's own

**Simulated case:** This is a simulated case for Progressa, a fictional country; every institution, name, date and figure in it is invented.

**What it shows.** A supplier's proposal for Progressa's registration of institutions read against the three rules, with each shortfall rewritten as a clause the manager can put to the supplier.

**Form of this example.** The three rules are the method's and name no country. The proposal and the clauses are built for Progressa.

## The three rules

1. **Review a story, not a list.** Officials agree to what a person does, step by step, and what they see at each step. They do not sign a list of fields.
2. **Measure against a list the design did not write.** The design is checked against a list of what was asked, written before the design and from the customer's own words. A list the designers wrote from their own design proves nothing.
3. **End one check on the running system.** The last check is a real person finishing a real task on the system the service will run on.

## The proposal

In October 2026 PHEQA received a proposal to build its registration service. Three passages matter here.

> "Section 4. Design sign-off. The supplier will deliver a data dictionary of 140 fields covering the application, the institution and the licence. PHEQA's officials will sign each page of the dictionary to confirm the design."

> "Section 5. Traceability. The supplier's analysts will prepare a requirements list from the approved design, and every requirement will be traced to a screen."

> "Section 7. Testing. Testing is complete when all test scripts pass on the supplier's test server."

## Where it falls short, and the clause that fixes it

| Rule | What the proposal says | Why it falls short | The clause PHEQA puts to the supplier |
|---|---|---|---|
| Review a story, not a list | Officials sign 140 fields (section 4) | A registration officer cannot tell from a list of fields whether an applicant can finish an application, what happens when a document is missing, or who is told what. Signing it agrees to nothing an official can check | "For each goal of the service, the supplier delivers the story of what the person does, step by step, with every way it can fail, and the screens worked out from it, in a walk-through PHEQA's officials can click. PHEQA accepts the stories and the walk-through, not a list of fields." |
| Measure against a list the design did not write | The requirements list is written from the approved design (section 5) | A list written from the design will always match the design. It cannot show that something PHEQA asked for was left out | "Before any design is written, the supplier delivers a register of what PHEQA asked for, one entry for each separate thing, in the words of PHEQA's regulations and requests, with where each was said. The Registrar of PHEQA accepts the register. The design is measured against it in both directions: every entry served by a goal, and every goal serving an entry." |
| End one check on the running system | Testing ends on the supplier's test server (section 7) | Nobody from PHEQA uses that server. A test that passes there says nothing about the service PHEQA will run | "Acceptance ends when a registration officer of PHEQA, on PHEQA's own installation, finishes at least one real task of each goal, from signing in through PNIA to the recorded result, and the record of that journey is kept as the evidence of acceptance." |

## Why the first rule matters most for a manager

PAERA treats enterprise architecture as the shared description that lets the policy side and the technical side plan together. A story with its screens is that shared description for one service: the registrar recognises her work in it, and the builder can build from it. A list of 140 fields is shared by nobody: the registrar cannot read it and the builder did not need her signature on it.

**What to look for in your own procurement.** Before you sign a contract, find the three places in the proposal: what officials are asked to approve, what the design is measured against, and where testing ends. If any of the three is the supplier's own document or the supplier's own server, write the clause.

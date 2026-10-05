---
description: "What the service is built on, and every flow that crosses its boundary to another body. A crossing is written with both bodies, so that the body on the other side agrees to it."
---

# The software architecture

What the service is built on, and every flow that crosses its boundary to another body. A crossing is written with both bodies, so that the body on the other side agrees to it.

| | |
| --- | --- |
| **Document of the twelve** | 5 |
| **Who writes it** | The solution architect |
| **What goes in** | Documents 2, 3 and 4 |
| **Who accepts it** | The architect, with the bodies on the other side of each crossing |
| **Taught in** | 2.6, 5.4, 5.6 |

## How to use this blank instrument

Copy this page into your own document. Fill in the answer to every line. Do not leave a line empty: write "none" where nothing applies, and where the answer is not yet known write an open question with the name of its owner and a date. Do not guess an answer to close a question. When the document is finished, give it to the person who accepts it, together with the questions at the end of this page.

## The application, once

Write these once for the whole application.

| Line | What to write | Your answer |
| --- | --- | --- |
| **Application** | The one thing this document covers | |
| **Version, date and status** | The version, the date, and finished or draft | |
| **Platform, edition and database** | The exact value of each | |
| **What the edition forbids** | Each capability the design would have used and the edition does not allow, with what will be used instead | |
| **Conventions** | Naming, dates, numbering and language, stated once | |
| **Documents read** | The register, the use case model and the entity model this document was written from, each with its version | |

## Each component

Write one block for each building block or component the service uses.

| Line | What to write | Your answer |
| --- | --- | --- |
| **Component and version** | Which one, at which version | |
| **What it is switched on to do** | One sentence naming the entry or goal it serves | |
| **Configured** | Once for the whole application, or separately at each place it is used | |
| **Settings** | The settings, checked against what the component accepts | |

## Each process

Write one block for each business process that runs on a workflow.

| Line | What to write | Your answer |
| --- | --- | --- |
| **Process** | Which business process | |
| **What the machinery decides** | The routing and timing choices that belong to it | |
| **What it does not decide** | The business choices that are specified elsewhere and only carried here | |
| **States used** | Each state the process moves a record through, and confirmation that the entity model already has it | |
| **Who changes each state** | A person in a named role, a scheduled job, or an incoming instruction | |

## Each crossing

Write one block for each flow that crosses to another body.

| Line | What to write | Your answer |
| --- | --- | --- |
| **Direction** | In or out | |
| **Far side** | Which system, body or team is on the other end | |
| **What crosses** | Every field, listed one by one | |
| **What each field means** | In words, apart from how it travels | |
| **Who issues each borrowed field** | The body that creates and owns it | |
| **How long it stays valid** | On the issuer's terms | |
| **How a correct value is told from an incorrect one** | The check | |
| **How the reader can tell how old it is** | What is shown | |
| **If the value is missing, out of date, or the far side cannot be reached** | What the application does, and what the user sees. Never a silent default | |

## Before you accept it

1. Does every crossing name the body on the other side, and has that body seen it?
2. Is every borrowed fact given by the body that owns it, with what happens when it is missing or old?
3. Does every state used by a process already exist in the entity model?
4. Is everything the platform's edition forbids listed, with what replaces it?

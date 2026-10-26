# Using AI: Knowledge Product Structure

Three layers, ordered by how much work you hand to the AI, with judgement running through all of them.

| Layer | In one line |
|---|---|
| 1. Chat | Get good answers in one chat |
| 2. Prepare | Set up what the AI knows and can do |
| 3. Orchestrate | Give bigger jobs to AI, and check the results |
| Judgement | A core competency across every layer |

---

## 1. Chat — get good answers in one chat

Clear task description, examples, roles, iterating, and critically evaluating answers. Anchored in Anthropic's AI Fluency framework, which is not vendor-specific. Its four competencies:

- **Delegation**: deciding whether, when and how to use AI
- **Description**: describing goals to prompt useful outputs
- **Discernment**: assessing the usefulness of outputs
- **Diligence**: taking responsibility for what we do with AI

**Learn more**
- Main: [AI Fluency: Framework and foundations](https://academy.claude.com/courses/ai-fluency-framework-foundations) (Claude Academy). 14 lessons, about 4 hours, quiz and completion badge. Includes a lesson on effective prompting techniques.
- Secondary: [The AI Fluency Framework one-pager (PDF)](https://www-cdn.anthropic.com/b383cf6baddbfc72fdf8b0ed533a518e2872d531.pdf), a quick reference for people who won't take the full course.

---

## 2. Prepare — set up what the AI knows and can do

Context engineering for practitioners: persistent instructions (Projects, AGENTS.md/CLAUDE.md), Skills, tool connections (MCP), and memory. The core idea: give the AI the smallest set of high-signal information that makes the desired outcome most likely. Skills are the main hands-on example, along with how to choose between a skill, a connector and a subagent.

**Learn more**
- Main: [Skills explained: How Skills compares to prompts, Projects, MCP, and subagents](https://claude.com/blog/skills-explained) (Anthropic). Practical, written for users as well as developers.
- Secondary: [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) (Anthropic Engineering, Sept 2025), for the underlying principle.
- Also relevant: the [Agent Skills open standard](https://agentskills.io) and Thoughtworks Technology Radar Vol. 34 (April 2026), which moved context engineering to Adopt.

---

## 3. Orchestrate — give bigger jobs to AI, and check the results

The key frame is Birgitta Böckeler's harness model: **guides** steer the AI before it acts (specs, rules, Skills), and **sensors** check what it produced (tests, evals, review) so it can self-correct. Specs are the main guide; spec-driven development (SDD) is the case study for software teams.

**Learn more**
- Main: [Harness engineering for coding agent users](https://martinfowler.com/articles/harness-engineering.html) (Böckeler, martinfowler.com).
- Secondary: [Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl](https://www.martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html) (Böckeler, martinfowler.com).

> **Note:** both resources are written for software engineers. For a broader audience, this layer needs a plain-language bridge ("writing a brief for delegated work and checking it"). No strong non-developer resource exists yet, which is a gap this product could fill.

---

## Judgement — across every layer

When not to use AI, accountability for AI-assisted work, and cognitive debt. Taught as a thread in each layer, not as a final module.

**Learn more**
- Main: [How Generative and Agentic AI Shift Concern from Technical Debt to Cognitive Debt](https://margaretstorey.com/blog/2026/02/09/cognitive-debt/) (Margaret-Anne Storey).
- Secondary: [Fragments: April 2](https://www.martinfowler.com/fragments/2026-04-02.html) (Martin Fowler). Summarises Storey's three kinds of debt:
  - **Technical debt** lives in code
  - **Cognitive debt** lives in people
  - **Intent debt** lives in artifacts, when goals and constraints aren't captured

  It also distinguishes *cognitive surrender* (passive, uncritical trust in AI output) from *cognitive offloading* (deliberately handing off thinking), a useful teaching hook.

> **Link to Orchestrate:** intent debt is what specs (and data contracts) exist to prevent, which ties the Judgement thread back to layer 3.

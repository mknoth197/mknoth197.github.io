---
title: "Turning Agentic Engineering Into Shared Capability"
summary: "On a three-person team investigating how AI changes the software development lifecycle, I help turn field observations into reusable capability. We pair a practitioner cohort with a governed team brain, an explainable evidence product, and repository-owned harnesses so useful patterns can be tested, inspected, and shared."
period: "2026 – present"
stack: ["claude-code", "codex", "copilot", "mcp", "github-actions", "knowledge-graph"]
metric:
  value: "vibes → evidence"
  label: "Testing agentic engineering claims"
featured: true
order: 0
era: ai
---

## The operational tension

The same frontier models can look transformational in one repository and unreliable in another. The difference is easy to attribute to individual aptitude or model choice. In practice, much of it lives in the surrounding engineering system: available context, repository guidance, tools, permissions, tests, review, and the feedback that changes the next run.

I work on a three-person tiger team formed to investigate what the software development lifecycle looks like when AI becomes a first-class participant. We work alongside a broader practitioner cohort applying several AI tool stacks to real brownfield applications. The goal is not to declare a winning vendor or maximize generated code. It is to identify which practices produce trustworthy delivery, understand the conditions they depend on, and turn those lessons into capability other engineers can inherit.

That requires more than a tool rollout. It requires a learning system.

## The team’s learning loop

Our operating model connects research, product engineering, and enablement:

```text
field observation
      ↓
bounded hypothesis
      ↓
experiment in real engineering work
      ↓
inspectable evidence and explicit limits
      ↓
reviewed lesson
      ↓
shared context, harness, or workflow
```

The loop matters because isolated agent sessions do not compound. A useful prompt held by one engineer is personal leverage. A validated pattern captured as repository guidance, a test, a skill, an evaluation, or a product capability can raise the starting point for everyone who comes next.

The team is building three connected parts of that system: a shared brain, an evidence product, and the harnesses that let agents perform real work safely.

## A shared brain for humans and agents

Our team brain is a separately governed repository, not a copy of documentation embedded into every product. It preserves source material, synthesized knowledge, decisions, contradictions, product context, and the confidence behind emerging conclusions. A schema defines how agents ingest and maintain that material; hybrid search, a structural knowledge graph, and a memory lifecycle help retrieve the smallest relevant slice for the task.

Product work can open the product repository and the brain in the same agent session while keeping their ownership boundaries intact. The product repository remains authoritative for its code, tests, architecture, and local constraints. The brain remains authoritative for broader team knowledge and research. An agent can read the brain during implementation, but a reusable lesson returns through a separate, reviewable contribution rather than silently rewriting shared context.

Context is a load-bearing part of the harness, not a replacement for the model or the rest of the engineering system. The objective is to make institutional knowledge retrievable and portable so an engineer does not need another person’s laptop, shell history, or memory to reach the team’s established starting capability.

## An explainable evidence product

The team is also building a governed product that turns qualitative theses into inspectable evidence. Its purpose is not to rank engineers, produce an opaque readiness score, or declare that AI caused an outcome. It keeps distinct evidence surfaces distinct:

- **Code at rest:** repository structure, quality controls, ownership, and engineering practices
- **Code in motion:** delivery flow, pull requests, deployments, and developer-experience signals
- **Harness behavior:** controlled evaluations of how a model-and-harness configuration performs
- **Interpretation:** a bounded explanation of what those signals support, what they do not support, and what remains unavailable

Every useful observation needs an evidence envelope: repository or subject identity, scope, revision or observation window, freshness, coverage, provenance, permissions, and an explicit state for `unavailable` or `not assessed`. Missing identity is not zero activity. Tool interaction is not authorship. Correlation is not causality. A green check cannot inherit a claim it never tested.

Privacy is part of the product contract. Aggregate views are the default. Narrower research access requires explicit governance and consent, and protected fields are removed or obfuscated at the API boundary before a general user receives the payload. Those constraints are not paperwork around the product. They determine whether the evidence can be trusted and used responsibly.

## The harness around the model

My working model is **Agent = Model + Harness**. The model supplies learned capability. The harness makes that capability operational through four connected functions:

1. **Guides** provide repository instructions, examples, architecture, product context, and reusable skills.
2. **Controls** constrain actions through permissions, lifecycle hooks, protected targets, policy, and approval boundaries.
3. **Sensors** expose outcomes through tests, linters, continuous integration, security checks, evaluations, observability, and review.
4. **Compounding** turns repeated misses into clearer guidance, deterministic checks, safer tools, or reusable workflows.

Instructions remain interpretive. A lifecycle hook can enforce a gate when the runtime guarantees that the hook runs, but load-bearing invariants should not depend on one agent product. Repository policy, continuous integration, protected branches, and target-system authorization provide the durable boundary.

We apply this model through provider-neutral repository contracts, reusable planning and review skills, scoped instructions, cross-model evaluation, and scheduled agent workflows. One example is a weekly knowledge-graph refresh that runs on hosted infrastructure without a per-developer model key and returns a bounded draft pull request for human review. The value is not the schedule itself. It is that maintenance leaves the laptop, produces an inspectable artifact, and remains governed by repository review.

## My contribution within the team

The system is team-owned. My contribution centers on the connective architecture and the feedback loop:

- I facilitate agentic-engineering discussions and office hours, turning practitioner problems into research questions and reusable patterns.
- I help shape the team brain, retrieval, knowledge-graph, and memory approach so product and business context can travel across agent tools without becoming another private prompt collection.
- I design repository-owned instructions, skills, evaluators, review workflows, and evidence gates that make agent work bounded and inspectable.
- I work on the product contracts that preserve identity, scope, freshness, privacy, attribution, and the difference between observation and inference.
- I turn repeated failures into infrastructure so the correction survives the session and improves the next engineer’s starting point.

This is not about making every engineer produce identical output. Expertise still matters for framing problems, resolving ambiguity, evaluating tradeoffs, and evolving the system. The goal is to remove avoidable differences caused by hidden setup, undiscoverable context, and safeguards that exist only in one person’s habits.

## Measuring without lying to ourselves

The current research backlog includes ten falsifiable hypotheses grounded in available delivery and developer-experience signals. They test questions such as whether cohort-level agent-use patterns correlate with healthier delivery flow, whether a harness change improves task success under controlled conditions, and whether stronger context reduces ambiguity or rework.

The evidence has a proof ceiling. Observational delivery signals can describe relationships and changes over time; they do not establish that AI caused them. Controlled harness evaluations can compare bounded model-and-harness configurations; they do not establish universal productivity. Self-reports can reveal experience and friction; they do not replace target-system outcomes.

That is why we evaluate the complete system rather than asking which model is best. A useful comparison records the task, acceptance criteria, model, harness configuration, available context, actions, checks, artifacts, human review effort, and failure modes. “AI helped” becomes a claim that can be investigated instead of a conclusion smuggled in through confidence.

## What is established and what is still emerging

The team has operational building blocks: a maintained knowledge repository, hybrid retrieval, a typed knowledge graph, repository instructions and skills, automated quality checks, scheduled agent maintenance, and a working product used to explore engineering signals.

The broader organizational loop is still being proven. Cohort experiments, harness-neutral evaluations, cross-source evidence contracts, and a reusable playbook remain active work. Faster onboarding, lower defect rates, causal productivity gains, and enterprise-wide adoption are desired outcomes, not results I can honestly claim today.

That boundary is important. AI is an amplifier. A mature engineering system can turn stronger agents into useful leverage; weak context, missing tests, unclear ownership, and unsafe permissions scale just as readily.

## The throughline

The three parts of this work reinforce one another. The brain preserves what the team knows. The evidence product tests what the team believes. The harness turns validated lessons into the default way agents work. Each run can leave the system more capable than it found it.

That is the opportunity I care about: not another one-off treasure trove that gives one engineer a private advantage, but a shared capability that raises the floor for the next engineer, repository, and team.

The ideas behind this work are developed further in [The Model Is Table Stakes. The Harness Is the Engineering.](/writing/the-model-is-table-stakes/), [Done Is a Claim, Not a State](/writing/done-is-a-claim-not-a-state/), and [The Harness Should Not Live on Your Laptop](/writing/the-harness-should-not-live-on-your-laptop/).

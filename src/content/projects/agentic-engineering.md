---
title: "Agentic Engineering — AI as a First-Class SDLC Participant"
summary: "On a new enterprise AI team, I'm defining how software gets built when AI is a first-class participant in the SDLC — the control systems that make agent-written code reliable enough to ship, and the measurement that proves what actually works instead of trusting vibes. I originated enforcement patterns the team adopted as practice, and I'm building a provider-agnostic instruction layer and evaluation framework that span multiple AI coding assistants. Underneath it is context infrastructure: a knowledge layer that gives agents the institutional knowledge usually trapped in senior engineers' heads."
period: "2026 – present"
stack: ["claude-code", "copilot", "codex", "promptfoo", "github-actions", "knowledge-graphs"]
metric:
  value: "vibes → evidence"
  label: "Measuring AI's real impact"
featured: true
order: 0
---

## Scope

A new enterprise AI team with a deceptively simple charter: figure out what software development looks like when AI is a first-class participant in the SDLC — and turn "the teams getting real value from AI" into a repeatable standard instead of tribal knowledge. The work spans both halves of that problem: the technical control systems that make agents reliable, and the measurement that proves what actually works.

## Harness engineering

Most of the conversation about AI coding fixates on the model. I focus on the *harness* — the system of guides, hooks, and feedback sensors around the model that actually determines whether agent output is good enough to ship. I originated a principle the team adopted as practice: **hooks always execute; instructions are interpreted.** Anything that must hold gets enforced deterministically at the agent's lifecycle — before a tool runs, after a file is written, when the agent tries to stop — rather than left to model discretion. I also demonstrated cross-model adversarial review, using one model to critique another's output to break the self-evaluation bias a model has when grading its own work.

## Provider-agnostic by design

Engineering orgs don't standardize on a single AI tool, and the landscape shifts monthly. So I'm building a provider-agnostic instruction and skill layer: one version-controlled definition of "how we build software here" that works across multiple coding assistants — Claude Code, Copilot, Codex — instead of every team maintaining a separate proprietary file per tool.

## Beyond vibes — measuring AI impact

"Claude made me 3x faster" is an anecdote, not a measurement. I'm helping build the evaluation framework that replaces subjective tool comparison with objective, repeatable evidence: normalize instructions, context, and hooks across harnesses so they're on equal footing, then measure which harness-and-model combinations genuinely solve problems faster and respect engineering policy. The same thread runs through an internal platform that turns "AI helps" claims into measurable signals about developer productivity.

## Context as infrastructure

Agent output improves dramatically when the agent can reach the institutional knowledge that usually lives in senior engineers' heads. I architected a federated knowledge layer — a centralized, version-controlled knowledge base structured as a typed knowledge graph with semantic search, sub-moduled into product repositories so agents retrieve only the relevant subgraph instead of ingesting everything. Every entry carries a confidence score, so knowledge decay is visible and can be pruned automatically before the base rots.

## Bringing the org along

I founded and facilitate a recurring internal technical forum on agentic engineering, and authored a talk framework — *The Agentic Engineering Progression* — that walks engineers from a bare LLM through tool-aware models, instrumented harnesses, and confident continuous delivery to objective evaluation. The throughline is the same one that's run through the rest of my work: make the hard, important thing also the easy, default thing.

---
title: "Team Brain – Shared Context for Humans and Agents"
summary: "Designed and stood up a shared knowledge repository with an agent-maintained wiki schema, hybrid retrieval, a structural knowledge graph, and a memory lifecycle. Repository-owned skills, hooks, and CI lint checks make research and decisions reusable across agent tools."
period: "2026 – present"
stack: ["hybrid-search", "knowledge-graph", "memory", "skills", "github-actions"]
metric:
  value: "Shared context"
  label: "A maintained team brain across agent tools"
featured: true
order: 0.1
era: ai
---

## The problem

An agent can only use the context it can reach. Research, product decisions, and operating knowledge held in one engineer’s prompt collection leave everyone else starting from scratch.

I designed and stood up the team’s shared knowledge repository, then helped turn it into an operating system for maintaining that context: an agent-maintained wiki schema, hybrid search, a structural knowledge graph, a memory lifecycle, reusable skills, lifecycle hooks, and lint checks in CI.

## What it makes possible

The repository preserves source material, synthesized knowledge, decisions, contradictions, and the confidence behind emerging conclusions. Retrieval helps an engineer or agent reach the relevant slice rather than load the entire corpus.

Product work can open the product repository and the brain in the same session while preserving ownership. The product repository remains authoritative for its code, tests, architecture, and local constraints. Broader team knowledge stays in the brain. A reusable lesson returns through a separate, reviewable contribution.

I also wrote the team’s harness thesis and Agent Delegation Stack, connecting context work to the controls, evaluations, and operating practices needed for safe delegation.

## The boundary

Shared context is an operational building block, not evidence of universal productivity gains. It makes the team’s established starting capability accessible; engineers still frame problems, resolve ambiguity, and judge tradeoffs.

Scheduled knowledge maintenance is a separate reliability question. The weekly graph-refresh workflow is currently failing, so the delivered result here is the maintained repository and its retrieval and quality tooling, not a claim of reliable unattended refresh.

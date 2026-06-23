---
title: "Agentic Engineering — AI as a First-Class SDLC Participant"
summary: "On a three-person tiger team chartered by senior leadership, I'm defining how agentic AI reshapes the software development lifecycle — then building the harness, context substrate, and workflows that turn those findings into practice. I architect the infrastructure that makes AI agents safe, trustworthy, and effective: context platforms, orchestrators that plan and verify, and guardrails for security, observability, and compliance. The throughline is replacing 'AI helps' vibes with objective evidence — and operationalizing the finding that context, not the model, is the load-bearing layer of agentic delivery."
period: "2026 – present"
stack: ["claude-code", "codex", "copilot", "mcp", "github-actions", "knowledge-graph"]
metric:
  value: "vibes → evidence"
  label: "Measuring AI's real impact"
featured: true
order: 0
---

## Charter

A three-person special-ops tiger team, chartered by senior leadership, with a deceptively simple mandate: define how agentic AI reshapes the SDLC, then build the harness, context substrate, and workflows that turn those findings into practice. The work now informs the enterprise AI strategy. It splits cleanly into two halves — the systems that make agents reliable, and the measurement that proves what actually works.

## The harness

Most of the conversation about AI coding fixates on the model. I focus on the *harness* — the system of guides, hooks, and feedback sensors around the model that decides whether agent output is good enough to ship. I authored a **seven-layer reference model** that characterizes the harness by depth, from model runtime up through operational observability, giving leadership a shared vocabulary for evaluating AI-tooling investments across the SDLC. The principle I keep enforcing: **hooks always execute; instructions are interpreted** — anything that must hold gets enforced deterministically at the agent's lifecycle (before a tool runs, after a file is written, when the agent tries to stop) rather than left to model discretion.

## Context as the load-bearing layer

I architected the team's context platform for AI-native delivery: a **four-layer knowledge system** — a durable wiki, local hybrid search, a structural knowledge graph, and agent memory managed with write-select-compress strategies — fronted by a **harness-agnostic agent contract** and version-pinned skill management. It operationalizes the finding that **context, not the model, is the load-bearing layer** of agentic delivery: agents retrieve only the relevant subgraph instead of ingesting everything, and the contract lets the same institutional knowledge serve Claude Code, Copilot, or Codex without per-tool rework.

## Beyond vibes — measuring AI impact

"Claude made me 3x faster" is an anecdote, not a measurement. I designed a measurement framework of **eleven falsifiable hypotheses** spanning telemetry, workflow signals, and SDLC data — converting subjective AI-productivity claims into objective DORA and developer-experience metrics across the cohort. The same discipline drives tooling decisions: normalize instructions, context, and hooks across harnesses so they sit on equal footing, then measure which harness-and-model combinations genuinely solve problems faster and respect engineering policy, instead of arguing from gut feel.

## Agents doing the unglamorous work

A harness only earns its keep when agents do real work safely. I standardized pre-merge review by packaging agent-driven review as **reusable Claude Code skills and slash commands**, so every contributor gets a consistent automated pass before CI. I established the team's pattern for **recurring agentic work in CI** — a weekly knowledge-graph refresh that runs as a scheduled, GitHub-hosted agentic workflow, with no API keys to provision and no manual upkeep. And I collapsed dependency-update toil with a **subagent that fans out per pull request** into isolated workspaces, applies repository conventions, and fixes failing checks before a human ever looks.

## The throughline

Bringing AI-native development to a 45-engineer cohort — faster onboarding, lower defect rates — comes back to the same thing that's run through the rest of my work: make the hard, important thing also the easy, default thing.

---
title: "AI-Era SDLC – Evidence into Practice"
summary: "Helped take an engineering evidence product from requirements to production, move it onto live data, and ship a personal work view and freshness-aware caching. Alongside that delivery, I co-facilitate a practitioner cohort and turn research into shared context, review tools, and governed agent workflows."
period: "2026 – present"
stack: ["typescript", "redis", "github-actions", "claude-code", "codex", "copilot"]
metric:
  value: "In production"
  label: "Engineering evidence product, with growing use"
featured: true
order: 0
era: ai
---

## What shipped

On a three-person tiger team chartered by senior leadership, I helped take an internal observatory for AI’s impact on engineering from its first requirements to production. The product is in use, with steady, growing weekly adoption. That is a delivered capability; proving that AI causes better engineering outcomes remains a separate research question.

My contribution spans product definition, implementation, and the delivery system around it:

- **Product direction:** wrote the product requirements, much of the design record, and a substantial share of the backlog.
- **Live evidence:** moved key engineering views off mock data and onto live sources, then added a personal “my work” view that has become the most-visited page.
- **Performance and freshness:** designed and shipped shared caching, tier-specific lifetimes, and freshness-versioned keys. Main data endpoints became substantially faster; a cache failure falls through to the source rather than making the cache a new availability dependency.
- **Delivery and acceptance:** helped separate the CI gate from deployment and contributed dedicated acceptance checks alongside the product’s automated test suite.

The product is team-owned. My part is connecting the requirements, evidence contracts, implementation, and checks so the result can be inspected rather than taken on confidence.

## Evidence with a proof ceiling

The product keeps distinct evidence surfaces distinct: repository practices, delivery flow, agent-tool interactions, controlled harness evaluations, and the interpretation of those signals.

A useful observation needs identity, scope, an observation window, freshness, coverage, provenance, and permissions. Missing identity is not zero activity. Tool interaction is not authorship. Correlation is not causality. A green check cannot inherit a claim it never tested.

Aggregate views are the default. Narrower research access requires governance and consent, and protected fields are removed or obfuscated at the API boundary. Those constraints determine whether the evidence can be trusted and used responsibly.

Observational delivery signals describe relationships and changes over time; they do not establish that AI caused them. Controlled evaluations compare bounded model-and-harness configurations; they do not establish universal productivity. Self-reports reveal experience and friction; they do not replace target-system outcomes.

## From research to shared capability

I co-facilitate an agentic engineering guild and office hours for a practitioner cohort of around 38 engineers, and publish sourced guild briefs. The work starts with problems in real brownfield applications and turns them into bounded questions, experiments, reviewed lessons, and reusable engineering practices.

My working model is **Agent = Model + Harness**. The model supplies learned capability. The harness makes it operational through guides, controls, sensors, and compounding: repository instructions and context; permissions and policy; tests, CI, and review; then durable corrections when something breaks.

I wrote the team’s harness thesis and a seven-layer Agent Delegation Stack covering runtime, instructions, federated context, skills, evaluations, orchestration, and observability/trust. The stack gives engineers and leadership a shared vocabulary for deciding what a system is ready to delegate.

That thinking now has concrete implementations:

- A [shared team brain](/work/team-brain/) makes research, decisions, and product context retrievable across agent tools.
- [Cloud sandbox evaluations](/work/secure-agent-execution/) demonstrate execution with multiple coding agents while keeping the remaining security work explicit.
- A [trust layer and reusable review tools](/work/agent-trust/) turn safeguards into infrastructure other engineers can use.

## What remains in progress

Production adoption establishes that the evidence product is useful enough to return to. It does not establish causal productivity gains, lower defect rates, or enterprise-wide adoption.

The broader cohort experiments, cross-source explanations, and governed agent-team system remain active work. A scheduled knowledge-graph maintenance workflow has been implemented, but its current runs are failing; I do not count it as a reliable unattended capability.

The throughline is to make the hard, important thing the easy, default thing. The brain preserves what the team knows. The evidence product tests what the team believes. The harness turns reviewed lessons into the starting point for the next engineer.

I develop these ideas further in [The Model Is Table Stakes. The Harness Is the Engineering.](/writing/the-model-is-table-stakes/), [Done Is a Claim, Not a State](/writing/done-is-a-claim-not-a-state/), and [The Harness Should Not Live on Your Laptop](/writing/the-harness-should-not-live-on-your-laptop/).

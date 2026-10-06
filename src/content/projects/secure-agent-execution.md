---
title: "Coding Agents – Cloud Execution and Credential Boundaries"
summary: "Ran Codex and Claude Code in company-controlled cloud sandboxes and returned inspectable patches. Added credential proxying, then implemented a keyless Codex pilot with per-run identity federation. The execution proof, pilot, and planned agent-team controls have distinct completion boundaries."
period: "2026 – present"
stack: ["cloudflare-sandbox", "codex", "claude-code", "ai-gateway", "identity-federation"]
metric:
  value: "2 agents"
  label: "Codex and Claude Code evaluated in cloud sandboxes"
featured: true
order: 0.2
era: ai
---

## What I demonstrated

I ran Codex and Claude Code inside company-controlled cloud sandboxes, using disposable execution environments to work against a private repository and return logs and an inspectable patch. The execution layer can host multiple agent tools rather than depend on one model vendor.

That is an execution-plane proof. It is not a claim that a production-ready autonomous agent platform has been completed.

## Credentials belong outside the workspace

I added a GitHub credential proxy so the repository credential is injected at the network boundary instead of entering either agent’s sandbox.

The model-credential boundary has different maturity across the evaluations. The earlier Codex path uses a short-lived credential inside the sandbox. I subsequently implemented a separate keyless Codex pilot that exchanges the signed-in user’s identity for a per-run model token and injects it outside the sandbox through an identity-aware gateway. Its design includes bounded token lifetime, request restrictions, and human attribution.

The pilot has merged, but end-to-end live verification, human-attribution checks, and containment hardening remain incomplete. Keyless credentials are specific to that pilot; the earlier evaluations retain their own credential boundaries.

## What comes next

I wrote the specification and guardrails for a governed agent team: fail-closed authorization, credentials outside execution, independently checked results, and human review before publication.

That agent-team system remains in progress. The immediate work is proving the feedback loop and closing the execution and credential boundaries before expanding autonomous scope.

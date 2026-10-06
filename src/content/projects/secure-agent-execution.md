---
title: "Coding Agents – Cloud Execution and Credential Boundaries"
summary: "Ran Codex and Claude Code in company-controlled cloud sandboxes and returned inspectable patches. Added credential proxying, then implemented a keyless Codex pilot with per-run identity federation. The execution proof, pilot, and planned agent-team controls have distinct completion boundaries."
period: "2026 – present"
stack: ["cloudflare-sandbox", "codex", "claude-code", "ai-gateway", "identity-federation"]
metric:
  value: "Cloud execution"
  label: "Disposable agent runs that return inspectable patches, with explicit credential boundaries."
featured: true
order: 0.2
section: recent
---

## What I demonstrated

I ran Codex and Claude Code inside company-controlled cloud sandboxes, using disposable execution environments to work against a private repository and return logs and an inspectable patch. The execution layer can host multiple agent tools rather than depend on one model vendor.

My responsibility covered the execution evaluations and credential-proxy work. I implemented the later keyless Codex pilot and wrote the agent-team specification.

## The decision: mediate credentials at the network boundary

Cloning a private repository requires authorization, but placing its credential in an agent’s environment gives the execution process direct access to it. I added a GitHub credential proxy that injects authorization at the network boundary instead. Both evaluated tools can read the repository without receiving the repository credential inside their sandbox.

The model-credential boundary has different maturity across the evaluations. The earlier Codex path uses a short-lived credential inside the sandbox. I subsequently implemented a separate keyless Codex pilot that exchanges the signed-in user’s identity for a per-run model token and injects it outside the sandbox through an identity-aware gateway. Its design includes bounded token lifetime, request restrictions, and human attribution.

The pilot has merged, but end-to-end live verification, human-attribution checks, and containment hardening remain incomplete. Keyless credentials are specific to that pilot; the earlier evaluations retain their own credential boundaries.

## Result and completion status

I wrote the specification and guardrails for a governed agent team: fail-closed authorization, credentials outside execution, independently checked results, and human review before publication.

The delivered result is cloud execution with Codex and Claude Code, returned patches that can be inspected before publication, and repository-credential proxying. The keyless pilot and governed agent-team system remain active work; the demonstrated runs do not establish a production-ready autonomous platform.

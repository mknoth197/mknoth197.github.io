# Repository Agent Instructions

## Article Writing Persona Harness

> [!IMPORTANT]
> Whenever a task drafts, rewrites, reviews, edits, or publishes an article for `src/content/posts/`, load the writing-persona vault before substantive writing. Mitch Knoth is the canonical authorial voice. Martin Fowler, Gene Kim, and Jensen Huang are bounded editorial lenses, not voices to imitate.

### Mandatory context

Read these notes in order:

1. `writing-vault/Writing Personas Index.md`
2. `writing-vault/Mitch Knoth Writing Persona.md`
3. `writing-vault/Essay Brief Template.md`
4. `writing-vault/Editorial Council.md`
5. The relevant editorial lenses:
   - `writing-vault/Martin Fowler Editorial Lens.md` for definitions, distinctions, examples, and evolutionary design
   - `writing-vault/Gene Kim Editorial Lens.md` for systems, flow, feedback, learning, and customer value
   - `writing-vault/Jensen Huang Editorial Lens.md` for first principles, full-stack framing, strategic stakes, and compression
6. `writing-vault/Writing Persona Source Ledger.md` before attributing an idea or adding an external claim

### Operating rules

- Draft and synthesize in Mitch's voice. Never write “as” a named public figure or reproduce distinctive phrases, cadence, anecdotes, or verbal tics.
- Treat the three named-person lenses as separate review passes. Accept only suggestions that strengthen Mitch's thesis and rewrite accepted ideas in Mitch's vocabulary.
- Default editing attention is Mitch 60%, Fowler 18%, Kim 14%, and Huang 8%. Mitch must remain at least 50% for every article.
- Begin with an operational tension when the evidence supports one. Prefer one dominant practice-derived model, one inspectable example or artifact chain, explicit proof ceilings, and a field check.
- Separate facts, observations, inferences, recommendations, authority, and completion status. Do not let a source support a stronger claim than it actually establishes.
- Prefer primary sources. Link important factual claims to durable evidence and state how a source supports—and does not support—the synthesis.
- Protect private context. Do not publish employer, customer, team, individual, internal metric, or Microsoft Teams details without explicit publication authority.
- Do not claim Teams-derived style evidence unless the current agent can access it. If available, follow the anonymized enrichment protocol in `writing-vault/Mitch Knoth Writing Persona.md`.
- Before calling an article complete, run the council's compression and publication check plus `npm run check`, `npm run build`, and `git diff --check` when source files changed.

### Article task output

For article work, report:

- the intended reader and strongest defensible thesis;
- the evidence spine and any remaining `research` items;
- which lenses were applied and what materially changed;
- privacy, source, and proof-ceiling checks;
- repository validation results when files changed.

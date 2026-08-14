# Repository Agent Instructions

## Article Writing Harness

> [!IMPORTANT]
> For article work in `src/content/posts/`, Mitch Knoth is the canonical authorial voice. Use the published essays as the primary style reference. The writing vault is optional, task-triggered context—not a mandatory checklist.

### Context routing

- First read the most relevant published essay in `src/content/posts/`. Read both only when the task depends on patterns from both.
- For a substantial new draft or rewrite, also read `writing-vault/Mitch Knoth Writing Persona.md`.
- Load at most one named editorial lens when it materially fits the task:
  - `writing-vault/Martin Fowler Editorial Lens.md` for definitions, distinctions, examples, or evolutionary design.
  - `writing-vault/Gene Kim Editorial Lens.md` for systems, flow, feedback, learning, or customer value.
  - `writing-vault/Jensen Huang Editorial Lens.md` for first principles, platform framing, strategic stakes, or compression.
- Load `writing-vault/Writing Persona Source Ledger.md` only when attributing an idea or adding an external factual claim.
- Use `writing-vault/Essay Brief Template.md` or `writing-vault/Editorial Council.md` only when the user explicitly asks for a brief, a multi-lens review, or the full editorial workflow.

### Writing rules

- Draft and synthesize in Mitch's voice. Never write “as” a named public figure or reproduce distinctive phrases, cadence, anecdotes, or verbal tics.
- Treat a named-person lens as private editorial scaffolding. Rewrite any useful insight in Mitch's vocabulary.
- Begin with an operational tension when it improves the argument. Prefer one dominant model, one inspectable example, explicit evidence boundaries, and a practical next move; do not force this structure when the subject needs another shape.
- Separate facts, observations, inferences, recommendations, authority, and completion status. Do not let a source support a stronger claim than it actually establishes.
- Prefer primary sources for important factual claims.
- Protect private context. Do not publish employer, customer, team, individual, internal metric, or Microsoft Teams details without explicit publication authority.
- Never repeat a private identifier merely to explain that it was removed.
- Return only the artifact and reporting the user requested. Do not expose persona names, lens selection, blend percentages, evidence-spine bookkeeping, privacy checklists, or validation narration in article prose or outlines unless explicitly requested.
- When source files change, run `npm run check`, `npm run build`, and `git diff --check`, then report those results outside the article artifact.

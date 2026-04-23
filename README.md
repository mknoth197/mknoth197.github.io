# mitchknoth.dev

Personal site. Astro 5 + Tailwind v4 + MDX, dark-first with a light mode toggle. Deployed to GitHub Pages via Actions.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → ./dist
npm run preview    # preview the built site
```

## Deploying to GitHub Pages

This is configured for a **user site** hosted at `https://mknoth197.github.io`.

1. Make sure the repo is named exactly `mknoth197.github.io` and is **public**.
2. Repo → **Settings → Pages → Source → "GitHub Actions"**.
3. Push to `main`. The workflow at `.github/workflows/deploy.yml` builds and publishes.

First deploy takes ~1 minute. Subsequent deploys are incremental and usually under 30 seconds.

### If you ever change the repo name

Edit `SITE` in `astro.config.mjs` and `site.github` in `src/config.ts` to match the new URL. If you move from a user site to a project site (e.g., `you/portfolio`), also set `base: '/portfolio/'` in `astro.config.mjs`.

### Custom domain later

Add a `public/CNAME` file containing your domain (e.g., `mitchknoth.dev`), configure the DNS at your registrar per GitHub's docs, and set the `SITE` constant in `astro.config.mjs` to `https://mitchknoth.dev`.

## Writing posts

Posts live in `src/content/posts/` as `.md` or `.mdx` files. Frontmatter schema is enforced by `src/content.config.ts`:

```yaml
---
title: "Your post title"
summary: "One sentence pitch. Shows up in the list and meta tags."
date: 2026-04-20
draft: false            # true = shows "draft" badge in the list
readingTime: "6 min"    # optional but recommended
tags: ["ai", "sdlc"]    # optional
---
```

The URL for a post is `/writing/<filename-without-extension>/`. RSS and sitemap update automatically on build.

## Editing work / project entries

Entries live in `src/content/projects/` — one markdown file per project. The body is ignored for now; all content comes from frontmatter:

```yaml
---
title: "Project title"
summary: "2–3 sentences about what you did and the outcome."
period: "2023 – present"
stack: ["aws", "terraform", "python"]
metric:
  value: "$1M saved"
  label: "Annual spend"
order: 1       # lower numbers appear first
featured: true # reserved for future use
---
```

## Editing the home page

Most of the top content is driven by `src/config.ts`:

```ts
export const site = {
  currently: 'new enterprise AI team, week 1',
  // ...
};
```

The headline, lede, and metrics grid live directly in `src/pages/index.astro` — edit there. Tweak the metrics array to reflect whichever four numbers you want on the home page at any given time.

## Editing About

`src/pages/about.astro`. Straight MDX-like content. Certs are a small array at the top.

## Theme / visual tweaks

All design tokens (palette, fonts, radii) are in `src/styles/global.css` inside the `@theme` block. Change the accent color once and the whole site updates.

Two weights of Instrument Serif and three weights of Inter are loaded — don't add more without a reason, it hurts LCP.

## Accessibility notes

- `prefers-reduced-motion` kills the pulsing dot and view transitions.
- Every link has a hover state that isn't just color.
- Theme toggle is a real button with `aria-label`.
- Color contrast passes WCAG AA in both themes.

## Content TODOs before going public

- [ ] Change the pill text in `src/config.ts` when your "currently" status changes.
- [ ] Flip the starter post's `draft: true` to `false` when you're ready.
- [ ] Drop your real LinkedIn URL in `src/config.ts` if the handle there isn't right.
- [ ] Sanity-check the About page for anything you'd rather not make public.

## Stack choices, briefly

- **Astro** over Next: content-first, zero JS by default, MDX is first-class.
- **Tailwind v4** over hand-CSS: faster iteration, no runtime cost.
- **HashRouter-less**: Astro is fully static, so every page is a real HTML file that GitHub Pages serves directly — no 404-on-refresh hacks needed.
- **View Transitions API** via Astro's `<ClientRouter />`: smooth page transitions without shipping a SPA.

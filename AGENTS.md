# cv-astro — AGENTS.md

## Purpose
Personal CV / résumé site, data-driven with selectable layout templates.
Static site, deployed to GitHub Pages.

## Stack
Astro 6 (static output), Tailwind CSS v4 (via `@tailwindcss/vite`),
TypeScript strict (`astro/tsconfigs/strict`). No UI framework — `.astro`
components only. Runtime: Node.js 22 (matches README and CI).

## Package manager
pnpm (`pnpm@11.0.9`). `pnpm-lock.yaml` and `pnpm-workspace.yaml` are
committed — do not run `npm`/`yarn` or regenerate the lockfile without
reason.

## Commands
- Dev: `pnpm dev`
- Build: `pnpm build`
- Check (Astro diagnostics + typecheck): `pnpm check`
- Preview: `pnpm preview`
- Test: none configured
- Lint/format: not configured (no ESLint/Prettier; `pnpm check` does not
  lint or format)

## Architecture constraints
- CV content is data-driven: data lives in `src/data`, typed by
  `src/types/cv.ts`. Edit content via the data layer, not hardcoded markup.
- **Data privacy:** real personal CV data lives in `src/data/cv.json`,
  which is gitignored. The committed sample is `src/data/cv.example.json`.
  Never commit real personal data; keep `cv.example.json` in sync with the
  schema.
- Adding a layout template variant touches all of: `src/utils/templates.ts`
  (`TEMPLATES` registry), `src/pages/index.astro` (import + the
  `templateLayouts` map), and the corresponding files under
  `src/components/templates/<name>`, `src/layouts/templates`, and
  `src/styles/templates`.
- Styling is Tailwind v4 utilities (Vite plugin). No `@astrojs/tailwind`,
  no CSS-in-JS, no new styling system without justification.
- Import from `src` via the `@/*` alias.
- Static GitHub Pages deploy under `base: /cv-astro` — new or changed
  internal links and assets must be base-aware; avoid root-absolute
  (`/...`) paths. (Pre-existing follow-up: `src/layouts/BaseLayout.astro`
  uses `href='/favicon.svg'`, a root-absolute path that should be made
  base-aware.)

## Verification requirements
`pnpm check && pnpm build` must pass before declaring done. There is no
test suite or standalone linter; do not introduce one as part of unrelated
work.

Inherited frontend rules (below) apply primarily to new and changed work.
Pre-existing follow-ups not fixed as part of this file: the favicon
root-absolute path above, and leftover `console.*` calls in
`src/utils/data.ts`.

## Precedence
The global safety kernel loads automatically in every session — it needs no
reference here, and a bullet listing an absolute path does nothing because no
tool fetches it. Project rules above refine the kernel and cannot weaken its
secrets, approval or OS rules. They apply primarily to new and changed work,
not as a mandate to refactor pre-existing code in passing.

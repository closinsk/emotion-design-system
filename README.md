# Emotion Design System

This repository contains the Emotion Design System — a thoughtfully curated set of tokens, components, and utilities designed to deliver consistent, accessible, and themable interfaces.

This README is exhaustive: it documents tokens (with values), component APIs, theming and customization strategies, accessibility guidance, testing recommendations, and deployment flows (including GitHub Pages and an example GitHub Action).

Table of contents
- Overview
- Quick start
- Design tokens (full list)
- Component reference (selected components with full props & examples)
- Theming & customization
- Accessibility checklist
- Testing & Storybook
- CI/CD and GitHub Pages deployment
- Contributing, versioning & releases
- Files of interest

Overview
 - Purpose: provide a shared language for UI: tokens (colors, spacing, type), low-level components (atoms), composed components (molecules), and page sections (organisms).
 - Philosophy: semantic tokens, accessible defaults, composability, and clear public APIs.

Quick start
 - Install dependencies:

```bash
npm install
```

 - Start dev server:

```bash
npm run dev
```

 - Build (includes type-check):

```bash
npm run build
```

 - Preview production build:

```bash
npm run preview
```

 - Deploy to GitHub Pages (project includes `predeploy` and `deploy` scripts):

```bash
npm run deploy
```

Design tokens (complete)
The canonical token set lives in `src/components/tokens/variables.css`. Below is the full token list and short descriptions (copied from the token file):

- Colors: Brand & Primary
  - `--color-primary-dark`: #124d2c — Deep Forest Green (Cards/Buttons)
  - `--color-primary-base`: #1d6b41 — Main Brand Green
  - `--color-primary-light`: #5db985 — Lighter Green (Analytics/Progress)
  - `--color-accent-soft`: #d3f2e1 — Soft Mint (Background highlights)

- Neutral Palette
  - `--color-bg-main`: #f4f7f6 — Light Grey/White Background
  - `--color-bg-card`: #ffffff — Pure White for Card Surfaces
  - `--color-text-main`: #1a1a1a — Near Black for Headings
  - `--color-text-muted`: #6b7280 — Medium Grey for secondary text/labels
  - `--color-border`: #e5e7eb — Light Grey for Dividers/Borders

- Status & Feedback
  - `--color-status-completed`: #1d6b41
  - `--color-status-in-progress`: #fbbf24
  - `--color-status-pending`: #f87171

- Botanical aliases (semantic helper names)
  - `--succulent-green`: alias for `--color-primary-base`
  - `--deep-forest`: alias for `--color-primary-dark`
  - `--fern-leaf-green`: alias for `--color-primary-light`
  - `--sunlight-petal`: alias for `--color-accent-soft`

- Semantic aliases
  - `--color-success`: maps to `--color-status-completed`
  - `--color-warning`: maps to `--color-status-in-progress`
  - `--color-danger`: maps to `--color-status-pending`

- Typography
  - `--ff-sans`: 'Inter', system-ui, -apple-system, sans-serif
  - `--fs-xs`: 0.75rem (12px)
  - `--fs-sm`: 0.875rem (14px)
  - `--fs-base`: 1rem (16px)
  - `--fs-lg`: 1.25rem (20px)
  - `--fs-xl`: 1.5rem (24px)
  - `--fs-display`: 2rem (32px)
  - `--fw-normal`: 400, `--fw-medium`: 500, `--fw-bold`: 700

- Spacing & Layout
  - `--spacing-xs`: 0.5rem (8px)
  - `--spacing-sm`: 1rem (16px)
  - `--spacing-md`: 1.5rem (24px)
  - `--spacing-lg`: 2rem (32px)
  - `--layout-max-width`: 75rem

- Radii
  - `--radius-sm`: 8px
  - `--radius-md`: 16px
  - `--radius-lg`: 24px
  - `--radius-full`: 9999px

- Shadows
  - `--shadow-sm`: 0 1px 3px rgba(0,0,0,0.05)
  - `--shadow-card`: 0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -1px rgba(0,0,0,0.01)

- Surface helpers
  - `--color-surface`: default card surface (alias to `--color-bg-card`)
  - `--color-on-surface`: default readable text on surface (alias to `--color-text-main`)
  - `--color-on-primary`: readable text color on primary backgrounds (alias to `--color-bg-card`)

Usage guidance
- Prefer semantic aliases (e.g., `--color-success`) in components rather than raw color tokens. This enables easier theme swaps.
- Use spacing scale (`--spacing-*`) to maintain consistent rhythm.

Component reference (selected, concrete APIs)
The components below are exported from `src/components`. Each example shows props, default behavior, and short usage notes.

1) `Button` (atom)
- File: `src/components/atoms/Button/Button.tsx`
- Props:
  - All standard `button` HTML attributes (inferred via `React.ButtonHTMLAttributes<HTMLButtonElement>`)
  - `variant?: 'primary' | 'secondary' | 'ghost'` — defaults to `'primary'`
- CSS class: `eds-button eds-button--${variant}`
- Example:

```tsx
import { Button } from 'src/components/atoms/Button/Button'

<Button onClick={() => console.log('clicked')}>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
```

Accessibility notes:
- Use `aria-label` for icon-only buttons. Ensure `disabled` uses `aria-disabled` when needed.

2) `DownloadButton` (atom)
- File: `src/components/atoms/DownloadButton/DownloadButton.tsx`
- Props:
  - `href: string` (required) — link to file
  - `download?: string` — optional filename for `download` attribute
  - `variant?: 'primary' | 'secondary' | 'ghost'` — defaults to `primary`
  - `className?: string`
  - `children: React.ReactNode` — visible label
  - `ariaLabel?: string` — optional explicit ARIA label
- Example:

```tsx
import DownloadButton from 'src/components/atoms/DownloadButton/DownloadButton'

<DownloadButton href="/assets/report.pdf" download="monthly-report.pdf">Download report</DownloadButton>
```

Behavior:
- Renders an anchor `<a>` with `download` attribute when provided, includes an icon span with `aria-hidden="true"` and a label span for screen readers.

3) `Card` (molecule)
- File: `src/components/molecules/Card/Card.tsx`
- Props:
  - `title?: string`
  - `children?: React.ReactNode`
  - `footer?: React.ReactNode` — commonly used for action buttons
  - `className?: string`
- Example:

```tsx
import Card from 'src/components/molecules/Card/Card'

<Card title="Card Title" footer={<Button>Action</Button>}>
  <p>Card body content</p>
</Card>
```

Notes:
- Cards compose media and actions. Use `CardWithImageAndButton` for a common pattern (provided in the repo).

4) `CardWithImageAndButton` (molecule example)
- Demonstrates composing `Card`, image, and `DownloadButton`.

5) `FeatureSection` (organism)
- File: `src/components/organisms/FeatureSection/FeatureSection.tsx`
- Purpose: page-level section with media and copy. Includes `aria-labelledby` and semantic markup.

Component export conventions
- Each component folder exposes an `index.ts` that re-exports the component for simple imports, e.g. `import { Button } from 'src/components/atoms/Button'`.

Theming & customization
1) Static customization (build-time)
- Edit `src/components/tokens/variables.css` to change the default tokens.

2) Runtime theming (preferred for toggles)
- Strategy: create theme classes that override root variables, then toggle a theme class on `html` or `body`.

Example: add a `.theme-dark` override

```css
.theme-dark {
  --color-bg-main: #0f1720;
  --color-bg-card: #0b1220;
  --color-text-main: #e6eef6;
  --color-primary-base: #2aa76f;
}
```

Then toggle with JS:

```ts
document.documentElement.classList.toggle('theme-dark', true)
```

3) Theming tips
- Keep tokens semantic (use `--color-success` for success states) so theme swaps remain predictable.
- When adding new tokens, provide a semantic alias in `:root` and document it in `variables.css`.

Accessibility checklist (recommended for new components)
- Use semantic HTML: `<button>`, `<a>`, `<form>` elements as appropriate.
- Provide `aria-label` for icon-only controls.
- Ensure focus styles are visible and meet contrast requirements.
- All images must have meaningful `alt`; decorative images should use empty `alt=""`.
- Dynamic content should expose roles and ARIA properties for assistive technologies.

Testing & Storybook
- Unit test recommendation: use `vitest` + `@testing-library/react` for component snapshot and interaction tests.
- Visual regression: integrate Chromatic, Loki, or Playwright visual comparisons.
- Storybook: recommended structure — `src/components/<component>/<Component>.stories.tsx` to keep stories colocated.

CI/CD and GitHub Pages deployment
1) Local deploy
- The repo includes `gh-pages` in `devDependencies` and `predeploy`/`deploy` scripts in `package.json`. Usage:

```bash
npm install
npm run deploy
```

2) GitHub Actions (example)
- Add `.github/workflows/deploy-gh-pages.yml` with the following to automatically deploy from `main` on push:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build
        env:
          NODE_ENV: production
        run: npm run build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: dist
```

Notes:
- `vite.config.ts` derives `base` from `GITHUB_REPOSITORY` when `NODE_ENV=production`. This helps avoid needing to hardcode the base path in CI.

Contributing, versioning & releases
- Branching: `main` is the production branch. Use feature branches like `feat/<name>` or `fix/<name>`.
- Commits: follow Conventional Commits for changelog automation (e.g., `feat: add button variant`).
- Releases: tag semantically (v1.2.0) and use CI to create release artifacts. Optionally publish packages to npm if you turn this design system into a package.

Suggested contributing checklist for PRs
- Add/modify tokens only with a clear justification.
- Keep components small and composable.
- Include unit tests and accessibility checks for new components.
- Add or update documentation and examples in this README or in Storybook stories.

Files of interest
- `vite.config.ts` — Vite config and GH Pages `base` handling
- `package.json` — scripts and `gh-pages` dev dependency
- `src/components/tokens/variables.css` — canonical token definitions
- `src/components/atoms` — atom components like `Button`, `DownloadButton`
- `src/components/molecules` — composed components like `Card`
- `src/components/organisms` — page sections such as `FeatureSection`

Next steps I can take
- Add a dedicated `CONTRIBUTING.md` and `CHANGELOG.md`.
- Scaffold the `deploy-gh-pages.yml` workflow file and/or commit it for you.
- Add unit tests and a Storybook scaffold.

If you'd like me to proceed with any of the `Next steps`, tell me which and I'll implement it.



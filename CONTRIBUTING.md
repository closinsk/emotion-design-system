# Contributing to Emotion Design System

Thank you for contributing! This document explains the workflow, code style, and expectations for changes to this repository.

Scope
- Additive work is welcome: new components, token updates, accessibility fixes, docs, and tests.
- For breaking changes (token renames, public API changes), open an issue first and follow the release notes guidance.

Getting started
1. Fork the repo and create a feature branch from `main`:

```bash
git checkout -b feat/my-feature
```

2. Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Code style & linting
- This repository uses TypeScript and ESLint. Run `npm run lint` and fix issues before submitting a PR.
- Keep components small and composable. Prefer pure functions and small props objects.

Component guidelines
- Place components under `src/components/atoms`, `.../molecules`, or `.../organisms` according to responsibility.
- Each component folder should include:
  - `Component.tsx` (or `.tsx` files for multiple exports)
  - `Component.css` (or your chosen styling approach)
  - `index.ts` to export the public API
  - tests (recommended) and optional Storybook stories

Design tokens
- Tokens live in `src/components/tokens/variables.css` and are the single source of truth. When adding new tokens:
  - Add semantic aliases where appropriate (e.g., `--color-success`).
  - Document new tokens in `variables.css` and in this README if they are public-facing.

Accessibility
- Follow ARIA best practices. All interactive elements must be keyboard operable and have visible focus styles.
- Images must include `alt` text or be explicitly decorative (`alt=""`).

Testing
- Use `vitest` + `@testing-library/react` for unit tests. Place tests near components.

Commits & PRs
- Use Conventional Commits for consistent CHANGELOG generation (e.g., `feat:`, `fix:`, `chore:`).
- PR checklist:
  - Description of the change and motivation
  - Screenshots or Storybook story for visual changes
  - Tests added or explanation why not needed
  - Linting and type checks pass

Release process
- Tag releases using semantic versioning. CI can be configured to publish packages or create release artifacts.

Contact
- Open an issue or a PR; maintainers will review and provide feedback.

Thanks for improving the Emotion Design System!

Design system color tokens

This file contains the canonical color variables for the design system. Use the semantic aliases (e.g. `--color-background`, `--color-on-primary`, `--color-border`) inside components rather than raw brand or neutral variables so the system can evolve without component changes.

Botanical naming notes:
- Brand colors use plant-inspired names like `--fern-leaf-green`.
- Accent and semantic tokens are provided for clarity and accessibility.

Usage:
Import the tokens into your global stylesheet (e.g. `index.css`) with:

```css
@import './components/tokens/variables.css';
```

Then reference tokens in components:

```css
.card {
  background: var(--color-surface);
  color: var(--color-on-surface);
  border: 1px solid var(--color-border);
}
```

If you'd like different botanical names or a different shade scale, tell me which direction you prefer and I'll replant accordingly.

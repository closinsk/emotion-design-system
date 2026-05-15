import React, { useState } from 'react'
import './DocsPage.css'

const sections = ['Introduction', 'Getting Started', 'Design Tokens', 'Components', 'Contributing']

const content: Record<string, React.ReactNode> = {
  Introduction: (
    <>
      <h2 className="docs-heading">Introduction</h2>
      <p>Emotion Design System (EDS) is a botanical-inspired component library built with React and TypeScript. It provides a cohesive set of design tokens, UI components, and layout patterns to help teams build consistent, accessible, and visually intentional interfaces — faster.</p>
      <p>This documentation covers everything you need to understand, use, and contribute to EDS: from installing the library and importing tokens, to understanding the component hierarchy and the decisions behind each design choice.</p>

      <div className="docs-callout">
        <strong>Philosophy</strong>
        <p>Every decision in Emotion DS draws from nature — from the naming of color tokens (<code>--succulent-green</code>, <code>--deep-forest</code>) to the softness of shadows and the breathing room between elements. The system is designed to feel calm, grounded, and intentional, so that the interfaces built with it carry the same qualities.</p>
      </div>

      <h3>What this documentation covers</h3>
      <p>This documentation is organized into five sections:</p>
      <ul className="docs-list">
        <li><strong>Introduction</strong> — What EDS is, its goals, and how this document is structured (you are here).</li>
        <li><strong>Getting Started</strong> — How to install EDS, import the token stylesheet, and render your first component.</li>
        <li><strong>Design Tokens</strong> — The full reference for color, spacing, typography, radius, and shadow tokens.</li>
        <li><strong>Components</strong> — An overview of every component tier (atoms, molecules, organisms) with links to the live demo.</li>
        <li><strong>Contributing</strong> — How to set up a local development environment and submit changes.</li>
      </ul>

      <h3>Who this is for</h3>
      <p>EDS is intended for three audiences:</p>
      <ul className="docs-list">
        <li><strong>Product engineers</strong> building features with React who want to reach for a token-backed component without spending time on visual decisions.</li>
        <li><strong>Designers</strong> who want to understand how the visual language is expressed in code and how to propose changes to the token layer.</li>
        <li><strong>Contributors</strong> who want to add components, fix bugs, or improve documentation.</li>
      </ul>

      <h3>Core Principles</h3>
      <ul className="docs-list">
        <li><strong>Tokens first</strong> — every visual decision (color, size, radius, shadow) is expressed as a CSS custom property. Swapping a theme never requires touching component code.</li>
        <li><strong>Accessible by default</strong> — every interactive component ships with the correct ARIA roles, keyboard support, and visible focus indicators, with no opt-in required.</li>
        <li><strong>Composable</strong> — atoms compose into molecules, molecules into organisms. No component is a monolith; each layer depends only on the layer below it.</li>
        <li><strong>Minimal surface area</strong> — the API of each component exposes only what it needs. Complexity is hidden behind sensible defaults.</li>
      </ul>

      <h3>Versioning</h3>
      <p>EDS follows <strong>Semantic Versioning</strong> (semver). Breaking changes only ship in major versions. Each release is documented on the <strong>Releases</strong> page with a categorized changelog covering additions, changes, fixes, and removals.</p>

      <div className="docs-callout">
        <strong>Current version</strong>
        <p>This documentation describes <strong>v1.0.0</strong>, the first stable release. See the Releases page for the full history.</p>
      </div>
    </>
  ),
  'Getting Started': (
    <>
      <h2 className="docs-heading">Getting Started</h2>
      <p>Set up Emotion Design System in a new or existing React project.</p>
      <h3>Prerequisites</h3>
      <ul className="docs-list">
        <li>Node.js 18+</li>
        <li>React 18+ or React 19</li>
        <li>React Router v7 (for page-level navigation)</li>
      </ul>
      <h3>Installation</h3>
      <div className="docs-code">
        <pre>{`npm install emotion-design-system`}</pre>
      </div>
      <h3>Import Tokens</h3>
      <p>Add the global token stylesheet at the root of your app:</p>
      <div className="docs-code">
        <pre>{`import 'emotion-design-system/tokens/variables.css'`}</pre>
      </div>
      <h3>Use a Component</h3>
      <div className="docs-code">
        <pre>{`import { Button } from 'emotion-design-system'

export default function App() {
  return <Button variant="primary">Get started</Button>
}`}</pre>
      </div>
    </>
  ),
  'Design Tokens': (
    <>
      <h2 className="docs-heading">Design Tokens</h2>
      <p>Tokens are the single source of truth for all visual decisions. They are exposed as CSS custom properties and follow a botanical naming convention.</p>
      <h3>Colors</h3>
      <div className="docs-token-grid">
        {[
          { name: '--succulent-green', label: 'Succulent Green', swatch: 'var(--succulent-green)' },
          { name: '--deep-forest', label: 'Deep Forest', swatch: 'var(--deep-forest)' },
          { name: '--fern-leaf-green', label: 'Fern Leaf', swatch: 'var(--fern-leaf-green)' },
          { name: '--sunlight-petal', label: 'Sunlight Petal', swatch: 'var(--sunlight-petal)' },
        ].map(t => (
          <div key={t.name} className="docs-token-row">
            <div className="docs-token-swatch" style={{ background: t.swatch }} />
            <div>
              <div className="docs-token-name">{t.label}</div>
              <code className="docs-token-var">{t.name}</code>
            </div>
          </div>
        ))}
      </div>
      <h3>Spacing</h3>
      <div className="docs-table-wrap">
        <table className="docs-table">
          <thead><tr><th>Token</th><th>Value</th><th>Use</th></tr></thead>
          <tbody>
            <tr><td><code>--spacing-xs</code></td><td>8px</td><td>Tight gaps, icon padding</td></tr>
            <tr><td><code>--spacing-sm</code></td><td>16px</td><td>Default element gap</td></tr>
            <tr><td><code>--spacing-md</code></td><td>24px</td><td>Section padding</td></tr>
            <tr><td><code>--spacing-lg</code></td><td>32px</td><td>Page-level whitespace</td></tr>
          </tbody>
        </table>
      </div>
      <h3>Typography</h3>
      <div className="docs-table-wrap">
        <table className="docs-table">
          <thead><tr><th>Token</th><th>Size</th></tr></thead>
          <tbody>
            <tr><td><code>--font-size-xs</code></td><td>12px</td></tr>
            <tr><td><code>--font-size-sm</code></td><td>14px</td></tr>
            <tr><td><code>--font-size-base</code></td><td>16px</td></tr>
            <tr><td><code>--font-size-lg</code></td><td>20px</td></tr>
            <tr><td><code>--font-size-display</code></td><td>32px</td></tr>
          </tbody>
        </table>
      </div>
    </>
  ),
  Components: (
    <>
      <h2 className="docs-heading">Components</h2>
      <p>All components are built from the token layer upward. They follow an atom → molecule → organism hierarchy.</p>
      <div className="docs-component-list">
        {[
          { tier: 'Atoms', items: ['Button', 'ThemeToggle', 'TextStyleToggle', 'DownloadButton'] },
          { tier: 'Molecules', items: ['Card', 'FeatureCard', 'ImageCard'] },
          { tier: 'Organisms', items: ['Navbar', 'Hero', 'FeatureSection', 'Header'] },
        ].map(group => (
          <div key={group.tier} className="docs-component-group">
            <h3>{group.tier}</h3>
            <ul className="docs-list">
              {group.items.map(item => <li key={item}><code>{item}</code></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="docs-callout">
        <strong>Tip</strong>
        <p>Visit the <strong>Components</strong> page to see live demos of every component with all variants and states.</p>
      </div>
    </>
  ),
  Contributing: (
    <>
      <h2 className="docs-heading">Contributing</h2>
      <p>Emotion DS is open to contributions. Whether it is a bug fix, a new component, or a documentation improvement — all are welcome.</p>
      <h3>Development Setup</h3>
      <div className="docs-code">
        <pre>{`git clone https://github.com/your-org/emotion-design-system
cd emotion-design-system
npm install
npm run dev`}</pre>
      </div>
      <h3>Branch Conventions</h3>
      <ul className="docs-list">
        <li><code>feat/&lt;name&gt;</code> — new feature or component</li>
        <li><code>fix/&lt;name&gt;</code> — bug fix</li>
        <li><code>docs/&lt;name&gt;</code> — documentation only</li>
      </ul>
      <h3>Code Standards</h3>
      <ul className="docs-list">
        <li>TypeScript strict mode — no <code>any</code></li>
        <li>All interactive elements must have ARIA attributes and keyboard support</li>
        <li>New tokens must follow the botanical naming convention</li>
        <li>Components ship with a <code>.css</code> module that imports only from <code>tokens/variables.css</code></li>
      </ul>
    </>
  ),
}

const DocsPage: React.FC = () => {
  const [active, setActive] = useState('Introduction')

  return (
    <div className="docs-page eds-container">
      <div className="docs-layout">
        <aside className="docs-sidebar">
          <ul>
            {sections.map(s => (
              <li key={s} className={s === active ? 'is-active' : ''}>
                <button onClick={() => setActive(s)}>{s}</button>
              </li>
            ))}
          </ul>
        </aside>
        <main className="docs-content">
          {content[active]}
        </main>
      </div>
    </div>
  )
}

export default DocsPage

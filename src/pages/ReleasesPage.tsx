import React from 'react'
import './ReleasesPage.css'

type Release = {
  version: string
  date: string
  tag: 'major' | 'minor' | 'patch' | 'beta'
  summary: string
  changes: { type: 'added' | 'changed' | 'fixed' | 'removed'; items: string[] }[]
}

const releases: Release[] = [
  {
    version: '1.0.0',
    date: 'May 15, 2026',
    tag: 'major',
    summary: 'First stable release of Emotion Design System.',
    changes: [
      { type: 'added', items: ['Full component library: Button, Card, Toggle, Navbar, Hero, FeatureSection', 'Design token system with botanical naming convention', 'Light and dark theme support via CSS custom properties', 'Documentation and Releases pages', 'React Router–based multi-page navigation'] },
      { type: 'changed', items: ['Tokens renamed to Releases in top navigation', 'Navbar layout updated with left-side Documentation and Releases links'] },
    ],
  },
  {
    version: '0.9.0-beta',
    date: 'April 28, 2026',
    tag: 'beta',
    summary: 'Beta release with the components page and all component variants.',
    changes: [
      { type: 'added', items: ['ComponentsPage with sidebar navigation', 'Button variants: primary, secondary, danger, warning, success, disabled, loading', 'Toggle variants: sizes sm/md/lg, colors green/blue/red/yellow', 'Card variants: default, image, horizontal, compact', 'Typography and Input Field demo sections'] },
      { type: 'fixed', items: ['Card rows no longer overlap on resize', 'Fixed wrapper width for image cards to stop vertical overlap'] },
    ],
  },
  {
    version: '0.8.0-beta',
    date: 'April 10, 2026',
    tag: 'beta',
    summary: 'React Router integration and multi-page shell.',
    changes: [
      { type: 'added', items: ['React Router v7 integration', 'BrowserRouter wrapping in main.tsx', 'Route for / (HomePage) and /components (ComponentsPage)', 'Navbar with useNavigate–based routing'] },
      { type: 'changed', items: ['App.tsx split into route-level components'] },
    ],
  },
  {
    version: '0.5.0-beta',
    date: 'March 18, 2026',
    tag: 'beta',
    summary: 'Design token foundation and global theming.',
    changes: [
      { type: 'added', items: ['tokens/variables.css with full color, spacing, typography, radius, and shadow tokens', 'ThemeToggle atom for light/dark mode switching', 'TextStyleToggle atom for font style switching (sans/serif/mono)', 'Global index.css wired to token file'] },
    ],
  },
]

const tagColors: Record<Release['tag'], string> = {
  major: 'releases-tag--major',
  minor: 'releases-tag--minor',
  patch: 'releases-tag--patch',
  beta: 'releases-tag--beta',
}

const typeLabel: Record<string, string> = {
  added: 'Added',
  changed: 'Changed',
  fixed: 'Fixed',
  removed: 'Removed',
}

const ReleasesPage: React.FC = () => (
  <div className="releases-page eds-container">
    <div className="releases-header">
      <h1 className="releases-title">Releases</h1>
      <p className="releases-subtitle">A full changelog of every version of Emotion Design System.</p>
    </div>
    <div className="releases-list">
      {releases.map(release => (
        <div key={release.version} className="releases-entry">
          <div className="releases-entry__meta">
            <span className={`releases-tag ${tagColors[release.tag]}`}>{release.tag}</span>
            <span className="releases-entry__date">{release.date}</span>
          </div>
          <div className="releases-entry__body">
            <h2 className="releases-entry__version">v{release.version}</h2>
            <p className="releases-entry__summary">{release.summary}</p>
            {release.changes.map(group => (
              <div key={group.type} className="releases-change-group">
                <span className={`releases-change-type releases-change-type--${group.type}`}>{typeLabel[group.type]}</span>
                <ul className="releases-change-list">
                  {group.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default ReleasesPage

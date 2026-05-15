import React, { useState } from 'react'
import './ComponentsPage.css'

const categories = ['Buttons', 'Toggles', 'Cards', 'Typography']

const DemoStates: React.FC<{ children: React.ReactNode; demoClass?: string }> = ({ children, demoClass }) => {
  const [active, setActive] = useState(false)
  return (
    <div className="demo-states">
      <div className="demo-item">
        <div className={`demo-box ${demoClass ?? ''}`}>{children}</div>
        <div className="demo-label">Default</div>
      </div>

      <div className="demo-item">
        <div className={`demo-box ${demoClass ?? ''} is-hover`}>{children}</div>
        <div className="demo-label">Hover</div>
      </div>

      <div className="demo-item">
        <div
          className={`demo-box ${demoClass ?? ''} ${active ? 'is-active' : ''}`}
          onClick={() => setActive((v) => !v)}
          role="button"
          tabIndex={0}
        >
          {children}
        </div>
        <div className="demo-label">Active / Click</div>
      </div>
    </div>
  )
}

const ButtonsDemo = () => (
  <div className="component-block">
    <h4 style={{ color: 'var(--color-on-primary)' }}>Buttons</h4>
    <div className="buttons-row">
      <div className="button-variant">
        <div className="demo-box demo-button">
          <button className="eds-btn eds-btn--primary">Primary</button>
        </div>
        <div className="demo-label">Primary</div>
      </div>

      <div className="button-variant">
        <div className="demo-box demo-button">
          <button className="eds-btn eds-btn--secondary">Secondary</button>
        </div>
        <div className="demo-label">Secondary</div>
      </div>

      <div className="button-variant">
        <div className="demo-box demo-button">
          <button className="eds-btn eds-btn--disabled" disabled>Disabled</button>
        </div>
        <div className="demo-label">Disabled</div>
      </div>
    </div>
  </div>
)

const TogglesDemo = () => (
  <div className="component-block">
    <h4>Toggle</h4>
    <DemoStates demoClass="demo-toggle">
      <button className="eds-demo-toggle">On</button>
    </DemoStates>
  </div>
)

const CardsDemo = () => (
  <div className="component-block">
    <h4>Card</h4>
    <DemoStates demoClass="demo-card">
      <div className="eds-demo-card">Image Card</div>
    </DemoStates>
  </div>
)

const TypographyDemo = () => (
  <div className="component-block">
    <h4>Typography</h4>
    <DemoStates demoClass="demo-typography">
      <p style={{ margin: 0 }}>The quick brown fox jumps over the lazy dog.</p>
    </DemoStates>
  </div>
)

const ComponentsPage: React.FC = () => {
  const [selected, setSelected] = useState('Buttons')

  const renderContent = () => {
    // Conditionally render only the selected category
    switch (selected) {
      case 'Buttons':
        return <ButtonsDemo />
      case 'Toggles':
        return <TogglesDemo />
      case 'Cards':
        return <CardsDemo />
      case 'Typography':
        return <TypographyDemo />
      default:
        return null
    }
  }

  return (
    <main className="components-page eds-container">
      <div className="components-layout">
        <aside className="components-sidebar">
          <nav>
            <ul>
              {categories.map((cat) => (
                <li key={cat} className={cat === selected ? 'is-active' : ''}>
                  <button onClick={() => setSelected(cat)}>{cat}</button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <section className="components-content">
          <h3 className="components-heading">{selected}</h3>
          <div className="components-grid">{renderContent()}</div>
        </section>
      </div>
    </main>
  )
}

export default ComponentsPage

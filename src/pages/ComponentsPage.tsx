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
    <h4>Button</h4>
    <DemoStates demoClass="demo-button">
      <button className="eds-demo-btn">Primary</button>
    </DemoStates>
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
    // Show all components by default in a full list, but the sidebar still highlights a selection
    return (
      <>
        <ButtonsDemo />
        <TogglesDemo />
        <CardsDemo />
        <TypographyDemo />
      </>
    )
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

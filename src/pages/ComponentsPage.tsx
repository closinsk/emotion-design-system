import React, { useState } from 'react'
import './ComponentsPage.css'

const categories = ['Buttons', 'Toggles', 'Cards', 'Typography', 'Input Field']

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

const IconLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const LoadingSpinner = () => (
  <span className="spinner" aria-hidden></span>
)

const ButtonsDemo = () => (
  <div className="component-block">
    <h4 style={{ color: 'var(--color-on-primary)' }}>Buttons</h4>

    <div className="section-row">
      <h5>Color variants</h5>
      <div className="buttons-row">
        <div className="button-variant">
          <div className="demo-box"><button className="eds-btn eds-btn--primary">Primary</button></div>
          <div className="demo-label">Primary</div>
        </div>
        <div className="button-variant">
          <div className="demo-box"><button className="eds-btn eds-btn--secondary">Secondary</button></div>
          <div className="demo-label">Secondary</div>
        </div>
        <div className="button-variant">
          <div className="demo-box"><button className="eds-btn eds-btn--danger">Danger</button></div>
          <div className="demo-label">Danger</div>
        </div>
        <div className="button-variant">
          <div className="demo-box"><button className="eds-btn eds-btn--warning">Warning</button></div>
          <div className="demo-label">Warning</div>
        </div>
        <div className="button-variant">
          <div className="demo-box"><button className="eds-btn eds-btn--success">Success</button></div>
          <div className="demo-label">Success</div>
        </div>
      </div>
    </div>

    <div className="section-row">
      <h5>State variants</h5>
      <div className="buttons-row">
        <div className="button-variant">
          <div className="demo-box"><button className="eds-btn eds-btn--primary">Default</button></div>
          <div className="demo-label">Default</div>
        </div>
        <div className="button-variant">
          <div className="demo-box"><button className="eds-btn eds-btn--primary is-hover">Hover</button></div>
          <div className="demo-label">Hover</div>
        </div>
        <div className="button-variant">
          <div className="demo-box"><button className="eds-btn eds-btn--primary is-active">Active</button></div>
          <div className="demo-label">Active / Pressed</div>
        </div>
        <div className="button-variant">
          <div className="demo-box"><button className="eds-btn eds-btn--disabled" disabled>Disabled</button></div>
          <div className="demo-label">Disabled</div>
        </div>
        <div className="button-variant">
          <div className="demo-box"><button className="eds-btn eds-btn--primary eds-btn--loading"> <LoadingSpinner/> Loading</button></div>
          <div className="demo-label">Loading</div>
        </div>
      </div>
    </div>

    <div className="section-row">
      <h5>Size variants</h5>
      <div className="buttons-row">
        <div className="button-variant">
          <div className="demo-box"><button className="eds-btn eds-btn--sm eds-btn--primary">Small</button></div>
          <div className="demo-label">Small</div>
        </div>
        <div className="button-variant">
          <div className="demo-box"><button className="eds-btn eds-btn--md eds-btn--primary">Medium</button></div>
          <div className="demo-label">Medium</div>
        </div>
        <div className="button-variant">
          <div className="demo-box"><button className="eds-btn eds-btn--lg eds-btn--primary">Large</button></div>
          <div className="demo-label">Large</div>
        </div>
      </div>
    </div>

    <div className="section-row">
      <h5>Icon variants</h5>
      <div className="buttons-row">
        <div className="button-variant">
          <div className="demo-box"><button className="eds-btn eds-btn--primary"><span className="btn-icon left"><IconLeft/></span>With icon</button></div>
          <div className="demo-label">Icon left</div>
        </div>
        <div className="button-variant">
          <div className="demo-box"><button className="eds-btn eds-btn--primary">With icon<span className="btn-icon right"><IconRight/></span></button></div>
          <div className="demo-label">Icon right</div>
        </div>
        <div className="button-variant">
          <div className="demo-box"><button className="eds-btn eds-btn--primary eds-btn--icon-only"><IconLeft/></button></div>
          <div className="demo-label">Icon only</div>
        </div>
        <div className="button-variant">
          <div className="demo-box"><button className="eds-btn eds-btn--primary">Text only</button></div>
          <div className="demo-label">Text only</div>
        </div>
      </div>
    </div>
  </div>
)
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
      case 'Input Field':
        return <InputFieldDemo />
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

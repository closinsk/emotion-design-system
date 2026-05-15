import React, { useState } from 'react'
import './ComponentsPage.css'

const categories = ['Buttons', 'Toggles', 'Cards', 'Typography', 'Input Field']


const ToggleControl: React.FC<{
  size?: 'sm' | 'md' | 'lg'
  color?: 'green' | 'blue' | 'red' | 'yellow'
  initial?: boolean
  disabled?: boolean
  label?: string | null
  labelPosition?: 'left' | 'right' | 'none'
  showIndicator?: boolean
}> = ({ size = 'md', color = 'green', initial = false, disabled = false, label = null, labelPosition = 'right', showIndicator = false }) => {
  const [on, setOn] = useState(initial)
  const handleClick = () => { if (disabled) return; setOn((v) => !v) }
  const cls = `toggle toggle--${size} toggle--${color} ${on ? 'toggle--on' : ''} ${disabled ? 'toggle--disabled' : ''}`
  const inner = (
    <div className={cls} role="switch" aria-checked={on} onClick={handleClick} tabIndex={disabled ? -1 : 0}>
      <div className="toggle-track">
        <div className="toggle-thumb" />
      </div>
      {showIndicator && <div className="toggle-indicator">{on ? 'On' : 'Off'}</div>}
    </div>
  )
  return (
    <div className="button-variant">
      <div className={`demo-box demo-toggle ${disabled ? 'is-disabled' : ''}`}>
        {label && labelPosition === 'left' && <div className="toggle-label left">{label}</div>}
        {inner}
        {label && labelPosition === 'right' && <div className="toggle-label right">{label}</div>}
      </div>
      <div className="demo-label">{label ?? (disabled ? 'Disabled' : on ? 'On' : 'Off')}</div>
    </div>
  )
}

const TogglesDemo = () => (
  <div className="component-block">
    <h4>Toggles</h4>
    <div className="section-row">
      <h5>State variants</h5>
      <div className="buttons-row">
        <ToggleControl initial={false} label="Default" />
        <div className="button-variant">
          <div className="demo-box demo-toggle is-hover">
            <ToggleControl initial={false} />
          </div>
          <div className="demo-label">Hover</div>
        </div>
        <ToggleControl initial={true} label="Active / On" />
        <ToggleControl initial={false} disabled label={"Disabled"} />
      </div>
    </div>
    <div className="section-row">
      <h5>Size variants</h5>
      <div className="buttons-row">
        <ToggleControl size="sm" initial={false} label="Small" />
        <ToggleControl size="md" initial={true} label="Medium" />
        <ToggleControl size="lg" initial={false} label="Large" />
      </div>
    </div>
    <div className="section-row">
      <h5>Color variants</h5>
      <div className="buttons-row">
        <ToggleControl color="green" initial={true} label="Green" />
        <ToggleControl color="blue" initial={true} label="Blue" />
        <ToggleControl color="red" initial={true} label="Red" />
        <ToggleControl color="yellow" initial={true} label="Yellow" />
      </div>
    </div>
    <div className="section-row">
      <h5>Label variants</h5>
      <div className="buttons-row">
        <ToggleControl label="Left label" labelPosition="left" initial={true} />
        <ToggleControl label="Right label" labelPosition="right" initial={false} />
        <ToggleControl label={null} labelPosition="none" initial={true} />
        <ToggleControl showIndicator initial={true} label={null} />
      </div>
    </div>
  </div>
)

const CardsDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    
    <div style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
      <h5 style={{ marginBottom: '16px', color: 'var(--deep-forest)' }}>Image variants</h5>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div className="eds-card"><img src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Placeholder" className="eds-card__image" /><div className="eds-card__body"><h4>Card Title</h4><p>This is a short description.</p></div></div>
          <div className="demo-label">Full image</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div className="eds-card eds-card--thumb-left"><img src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Thumb" className="eds-card__thumb" /><div className="eds-card__body"><h4>Card Title</h4><p>This is a short description.</p></div></div>
          <div className="demo-label">Thumbnail left</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div className="eds-card eds-card--no-image"><div className="eds-card__body"><h4>Card Title</h4><p>This is a short description.</p></div></div>
          <div className="demo-label">No image</div>
        </div>
      </div>
    </div>

    <div style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
      <h5 style={{ marginBottom: '16px', color: 'var(--deep-forest)' }}>Content variants</h5>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div className="eds-card eds-card--no-image"><div className="eds-card__body"><h4>Card Title</h4></div></div>
          <div className="demo-label">Title only</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div className="eds-card eds-card--no-image"><div className="eds-card__body"><h4>Card Title</h4><p>This is a short description.</p></div></div>
          <div className="demo-label">Title + description</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div className="eds-card eds-card--no-image"><div className="eds-card__body"><h4>Card Title</h4><p>This is a short description.</p><div style={{ marginTop: 8 }}><button className="eds-btn eds-btn--primary">Action</button></div></div></div>
          <div className="demo-label">Title + desc + button</div>
        </div>
      </div>
    </div>

    <div style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
      <h5 style={{ marginBottom: '16px', color: 'var(--deep-forest)' }}>State variants</h5>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div className="eds-card"><div className="eds-card__body"><h4>Card Title</h4><p>This is a short description.</p></div></div>
          <div className="demo-label">Default</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div className="eds-card eds-card--hover"><div className="eds-card__body"><h4>Card Title</h4><p>This is a short description.</p></div></div>
          <div className="demo-label">Hover</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div className="eds-card eds-card--active"><div className="eds-card__body"><h4>Card Title</h4><p>This is a short description.</p></div></div>
          <div className="demo-label">Active</div>
        </div>
      </div>
    </div>

    <div style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
      <h5 style={{ marginBottom: '16px', color: 'var(--deep-forest)' }}>Layout variants</h5>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div className="eds-card eds-card--horizontal"><img src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Thumb" className="eds-card__thumb" /><div className="eds-card__body"><h4>Card Title</h4><p>This is a short description.</p></div></div>
          <div className="demo-label">Horizontal</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div className="eds-card eds-card--vertical"><img src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" className="eds-card__image" /><div className="eds-card__body"><h4>Card Title</h4><p>This is a short description.</p></div></div>
          <div className="demo-label">Vertical</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div className="eds-card eds-card--compact"><div className="eds-card__body"><h4>Card Title</h4><p>This is a short description.</p></div></div>
          <div className="demo-label">Compact</div>
        </div>
      </div>
    </div>

  </div>
)

const TypographyDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    <div style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
      <h5 style={{ marginBottom: '16px', color: 'var(--deep-forest)' }}>State variants</h5>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <p style={{ margin: 0, color: 'var(--deep-forest)' }}>The quick brown fox jumps over the lazy dog.</p>
          <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Default</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <p style={{ margin: 0, color: 'var(--deep-forest)', textDecoration: 'underline' }}>The quick brown fox jumps over the lazy dog.</p>
          <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Hover</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <p style={{ margin: 0, color: 'var(--deep-forest)', fontWeight: 'bold' }}>The quick brown fox jumps over the lazy dog.</p>
          <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Active / Click</span>
        </div>
      </div>
    </div>

    <div style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
      <h5 style={{ marginBottom: '16px', color: 'var(--deep-forest)' }}>Size variants</h5>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <p style={{ margin: 0, fontSize: '12px', color: 'var(--deep-forest)' }}>The quick brown fox.</p>
          <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Small</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <p style={{ margin: 0, fontSize: '16px', color: 'var(--deep-forest)' }}>The quick brown fox.</p>
          <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Medium</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <p style={{ margin: 0, fontSize: '24px', color: 'var(--deep-forest)' }}>The quick brown fox.</p>
          <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Large</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <p style={{ margin: 0, fontSize: '32px', color: 'var(--deep-forest)' }}>The quick brown fox.</p>
          <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>XLarge</span>
        </div>
      </div>
    </div>

    <div style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
      <h5 style={{ marginBottom: '16px', color: 'var(--deep-forest)' }}>Weight variants</h5>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <p style={{ margin: 0, fontWeight: 300, color: 'var(--deep-forest)' }}>The quick brown fox.</p>
          <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Light</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <p style={{ margin: 0, fontWeight: 400, color: 'var(--deep-forest)' }}>The quick brown fox.</p>
          <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Regular</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <p style={{ margin: 0, fontWeight: 600, color: 'var(--deep-forest)' }}>The quick brown fox.</p>
          <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Semi Bold</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <p style={{ margin: 0, fontWeight: 800, color: 'var(--deep-forest)' }}>The quick brown fox.</p>
          <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Extra Bold</span>
        </div>
      </div>
    </div>
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

const InputFieldDemo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
        <h5 style={{ marginBottom: '16px', color: 'var(--deep-forest)' }}>State variants</h5>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <input className="eds-input" placeholder="Type something..." />
            <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Default</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <input className="eds-input eds-input--focus" placeholder="Focused..." />
            <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Focus</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <input className="eds-input" placeholder="Disabled" disabled />
            <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Disabled</span>
          </div>
        </div>
      </div>
    </div>
  )
}

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
          <div className="demo-box"><button className="eds-btn eds-btn--primary eds-btn--loading"><LoadingSpinner/> Loading</button></div>
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

const ComponentsPage: React.FC = () => {
  const [selected, setSelected] = useState('Buttons')

  const renderContent = () => {
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
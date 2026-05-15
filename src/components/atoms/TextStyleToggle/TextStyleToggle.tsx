import React, { useEffect, useRef, useState } from 'react'
import './TextStyleToggle.css'

type FontOption = 'default' | 'serif' | 'mono'

const options: { value: FontOption; label: string }[] = [
  { value: 'default', label: 'Default' },
  { value: 'serif', label: 'Serif' },
  { value: 'mono', label: 'Mono' },
]

const TextStyleToggle: React.FC = () => {
  const [font, setFont] = useState<FontOption>(() => {
    if (typeof window !== 'undefined') return (document.documentElement.dataset.font as FontOption) || 'default'
    return 'default'
  })
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // set data attribute for global CSS rules
    if (font === 'default') {
      document.documentElement.removeAttribute('data-font')
    } else {
      document.documentElement.dataset.font = font
    }
  }, [font])

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  const handleSelect = (value: FontOption) => {
    setFont(value)
    setOpen(false)
  }

  return (
    <div className="eds-text-toggle" ref={ref}>
      <button
        className="eds-text-toggle__button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="eds-text-toggle__label">Font</span>
        <span className="eds-text-toggle__current">{options.find(o => o.value === font)?.label}</span>
        <span className="eds-text-toggle__chev" aria-hidden>{open ? '▴' : '▾'}</span>
      </button>

      {open && (
        <div className="eds-text-toggle__menu" role="menu">
          {options.map((opt) => (
            <button
              key={opt.value}
              role="menuitemradio"
              aria-checked={font === opt.value}
              className={`eds-text-toggle__menu-item ${font === opt.value ? 'eds-text-toggle__menu-item--selected' : ''}`}
              onClick={() => handleSelect(opt.value)}
            >
              <span className="eds-text-toggle__menu-label">{opt.label}</span>
              <span className="eds-text-toggle__menu-check" aria-hidden>{font === opt.value ? '✓' : ''}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default TextStyleToggle

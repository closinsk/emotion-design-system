import React, { useEffect, useRef, useState } from 'react'
import './ThemeToggle.css'

type Theme = 'light' | 'dark' | 'green'

const options: { value: Theme; label: string; icon: 'sun' | 'moon' | 'leaf' }[] = [
  { value: 'dark', label: 'Dark mode', icon: 'moon' },
  { value: 'light', label: 'Light mode', icon: 'sun' },
  { value: 'green', label: 'Green mode', icon: 'leaf' },
]

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (document.documentElement.dataset.theme as Theme) || 'light'
    }
    return 'light'
  })
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.body.classList.add('eds-theme-transition-capable')
  }, [theme])

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  const handleSelect = (value: Theme) => {
    setTheme(value)
    setOpen(false)
  }

  return (
    <div className={`eds-theme-toggle eds-theme-toggle--${theme}`} ref={ref}>
      <button
        className="eds-theme-toggle__button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        aria-label={`Theme menu, current ${options.find(o => o.value === theme)?.label ?? ''}`}
      >
        <span className="eds-theme-toggle__current-icon" aria-hidden>
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
          ) : theme === 'light' ? (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"/></svg>
          ) : (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8 6 4 8 5 13s5 7 9 7 5-6 5-9-3-9-7-9z"/></svg>
          )}
        </span>
        <span className="eds-theme-toggle__static-label">Theme</span>
        <span className="eds-theme-toggle__current-name">{options.find(o => o.value === theme)?.label ?? ''}</span>
        <span className="eds-theme-toggle__chev" aria-hidden>{open ? '▴' : '▾'}</span>
      </button>

      {open && (
        <div className="eds-theme-toggle__menu" role="menu">
          {options.map((opt) => (
            <button
              key={opt.value}
              role="menuitemradio"
              aria-checked={theme === opt.value}
              className={`eds-theme-toggle__menu-item ${theme === opt.value ? 'eds-theme-toggle__menu-item--selected' : ''}`}
              onClick={() => handleSelect(opt.value)}
            >
              <span className={`eds-theme-toggle__menu-icon eds-theme-toggle__menu-icon--${opt.icon}`} aria-hidden>
                {opt.icon === 'moon' && (
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
                )}
                {opt.icon === 'sun' && (
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"/></svg>
                )}
                {opt.icon === 'leaf' && (
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8 6 4 8 5 13s5 7 9 7 5-6 5-9-3-9-7-9z"/></svg>
                )}
              </span>
              <span className="eds-theme-toggle__menu-label">{opt.label}</span>
              <span className="eds-theme-toggle__menu-check" aria-hidden>{theme === opt.value ? '✓' : ''}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ThemeToggle

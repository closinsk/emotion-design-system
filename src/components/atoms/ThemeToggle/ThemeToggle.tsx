import React, { useEffect, useState } from 'react'
import './ThemeToggle.css'

type Theme = 'light' | 'dark'

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (document.documentElement.dataset.theme as Theme) || 'light'
    }
    return 'light'
  })
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    // ensure body uses CSS vars for smooth transition
    document.body.classList.add('eds-theme-transition-capable')
    return () => {
      document.body.classList.remove('eds-theme-transition-capable')
    }
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTransitioning(true)
    // start fade by setting the target theme; the body transition handles animation
    setTheme(next)
    // end transitioning after a short duration matching CSS transition
    window.setTimeout(() => setTransitioning(false), 350)
  }

  return (
    <div
      className={`eds-theme-toggle eds-theme-toggle--${theme} ${transitioning ? 'eds-theme-toggle--transitioning' : ''}`}>
      <button
        className="eds-theme-toggle__switch"
        onClick={toggle}
        aria-pressed={theme === 'dark'}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      >
        <span className="eds-theme-toggle__icon eds-theme-toggle__icon--sun" aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="4" className="eds-theme-toggle__sun-core" />
            <g className="eds-theme-toggle__sun-rays">
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="M4.93 4.93l1.41 1.41" />
              <path d="M17.66 17.66l1.41 1.41" />
              <path d="M4.93 19.07l1.41-1.41" />
              <path d="M17.66 6.34l1.41-1.41" />
            </g>
          </svg>
        </span>
        <span className="eds-theme-toggle__icon eds-theme-toggle__icon--moon" aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" className="eds-theme-toggle__moon" />
          </svg>
        </span>
      </button>
    </div>
  )
}

export default ThemeToggle

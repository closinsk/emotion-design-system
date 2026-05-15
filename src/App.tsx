import React, { useState } from 'react'
import './App.css'
import './components/molecules/Card/Card.css'
import Navbar from './components/organisms/Navbar'
import Hero from './components/organisms/Hero'
import FeatureSection from './components/organisms/FeatureSection'
import ComponentsPage from './pages/ComponentsPage'
import ThemeToggle from './components/atoms/ThemeToggle'
import TextStyleToggle from './components/atoms/TextStyleToggle/TextStyleToggle'
function App() {
  const [page, setPage] = useState<'home'|'components'|'docs'|'tokens'>('home')

  return (
    <>
      <Navbar onNavigate={(p) => setPage(p as any)} />
      <ThemeToggle />
      <TextStyleToggle />

      {page === 'home' && (
        <>
          <Hero />
          <FeatureSection />
          <main className="app__main">
            <div className="eds-card-column eds-container" style={{ marginTop: 24 }}>
              <div className="eds-card-column__item">
                {(() => {
                  const [overlayVisible, setOverlayVisible] = useState(false)
                  const toggle = () => setOverlayVisible((v) => !v)
                  const onKey = (e: React.KeyboardEvent) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggle()
                    }
                  }

                  return (
                    <div
                      className={`eds-card eds-card--image-large ${overlayVisible ? 'is-overlay-visible' : ''}`}
                      onClick={toggle}
                      onKeyDown={onKey}
                      role="button"
                      tabIndex={0}
                      aria-pressed={overlayVisible}
                    >
                      <img
                        className="eds-card__media eds-card__media--large"
                        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80"
                        alt="Nature"
                      />
                      <div className="eds-card__overlay" aria-hidden={!overlayVisible}>
                        <div className="eds-card__overlay-inner">Rooted in Nature — Every leaf, every line, designed with intention.</div>
                      </div>
                    </div>
                  )
                })()}
              </div>
              <div className="eds-card-column__item">
                <div className="eds-card eds-card--image-large">
                  <img
                    className="eds-card__media eds-card__media--large"
                    src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80"
                    alt="Nature"
                  />
                </div>
              </div>
              <div className="eds-card-column__item">
                <div className="eds-card eds-card--image-large">
                  <img
                    className="eds-card__media eds-card__media--large"
                    src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80"
                    alt="Nature"
                  />
                </div>
              </div>
            </div>
          </main>
        </>
      )}

      {page === 'components' && <ComponentsPage />}
    </>
  )
}

export default App

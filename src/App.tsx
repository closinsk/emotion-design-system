import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import './components/molecules/Card/Card.css'
import Navbar from './components/organisms/Navbar'
import Hero from './components/organisms/Hero'
import FeatureSection from './components/organisms/FeatureSection'
import ComponentsPage from './pages/ComponentsPage'
import DocsPage from './pages/DocsPage'
import ReleasesPage from './pages/ReleasesPage'
import ThemeToggle from './components/atoms/ThemeToggle'
import TextStyleToggle from './components/atoms/TextStyleToggle/TextStyleToggle'

const HomePage = () => {
  const [overlayVisible, setOverlayVisible] = useState(false)
  return (
    <>
      <Hero />
      <FeatureSection />
      <main className="app__main">
        <div className="eds-card-column eds-container" style={{ marginTop: 24 }}>
          <div className="eds-card-column__item">
            <div
              className={`eds-card eds-card--image-large ${overlayVisible ? 'is-overlay-visible' : ''}`}
              onClick={() => setOverlayVisible((v) => !v)}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setOverlayVisible((v) => !v)
                }
              }}
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
  )
}

function App() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar onNavigate={(p) => navigate(`/${p === 'home' ? '' : p}`)} />
      <ThemeToggle />
      <TextStyleToggle />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/releases" element={<ReleasesPage />} />
      </Routes>
    </>
  )
}

export default App
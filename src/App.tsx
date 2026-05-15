import './App.css'
import Navbar from './components/organisms/Navbar'
import Hero from './components/organisms/Hero'
import FeatureSection from './components/organisms/FeatureSection'
import ThemeToggle from './components/atoms/ThemeToggle'
function App() {
 
  return (
    <>
      <Navbar />
      <ThemeToggle />
      <Hero />
      <FeatureSection />
      <main className="app__main">
        <div className="eds-card-column eds-container" style={{ marginTop: 24 }}>
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

export default App

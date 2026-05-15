import './App.css'
import Navbar from './components/organisms/Navbar'
import Hero from './components/organisms/Hero'
import FeatureSection from './components/organisms/FeatureSection'
import ThemeToggle from './components/atoms/ThemeToggle'
import CardWithImageAndButton from './components/molecules/Card/CardWithImageAndButton'
import Card from './components/molecules/Card/Card'
function App() {
 
  return (
    <>
      <Navbar />
      <ThemeToggle />
      <Hero />
      <FeatureSection />
      <main className="app__main">
        <div className="eds-card-row eds-container">
          <div className="eds-card-row__col">
            <CardWithImageAndButton />
          </div>
          <div className="eds-card-row__col">
            <Card title="Designed to Grow" className="eds-card--mint">
              <h4 style={{ margin: '0 0 8px 0' }}>Designed to Grow</h4>
              <p style={{ margin: 0 }}>Every token, every component, every decision is made with scalability and harmony in mind.</p>
            </Card>
          </div>
        </div>
        <div className="eds-card-row eds-container" style={{ marginTop: 24 }}>
          <div className="eds-card-row__col">
            <Card className="eds-card--image-large">
              <img
                className="eds-card__media eds-card__media--large"
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80"
                alt="Nature"
              />
            </Card>
          </div>
          <div className="eds-card-row__col">
            <Card title="Designed to Grow" className="eds-card--mint">
              <p style={{ margin: 0 }}>Every token, every component, every decision is made with scalability and harmony in mind.</p>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}

export default App

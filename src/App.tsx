import './App.css'
import Button from './components/atoms/Button'
import Navbar from './components/organisms/Navbar'
import Hero from './components/organisms/Hero'
import FeatureSection from './components/organisms/FeatureSection'
function App() {
 
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureSection />
      <main className="app__main">
        <h1 className="app__heading">Emotion Design System — Demo</h1>
        <div className="app__controls">
          <div className="button-row">
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App

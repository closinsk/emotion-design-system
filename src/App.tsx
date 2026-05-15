import './App.css'
import Button from './components/atoms/Button'
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
        <h1 className="app__heading">Emotion Design System — Demo</h1>
        
      </main>
    </>
  )
}

export default App

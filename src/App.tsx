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
      </main>
    </>
  )
}

export default App

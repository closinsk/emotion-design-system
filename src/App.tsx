import heroImg from './assets/hero.png'
import './App.css'
import Button from './components/atoms/Button'
import DownloadButton from './components/atoms/DownloadButton'
import Navbar from './components/organisms/Navbar'
import Hero from './components/organisms/Hero'
// Card import not used directly here; variants are rendered instead
import CardNoImage from './components/molecules/Card/CardNoImage'
import CardNoButton from './components/molecules/Card/CardNoButton'
import CardWithImageAndButton from './components/molecules/Card/CardWithImageAndButton'
 

function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <main className="app__main">
        <h1 className="app__heading">Emotion Design System — Demo</h1>
        <p className="app__lead">A small demo showcasing the `DownloadButton` atom.</p>
        <div className="app__controls">
          <div className="button-row">
            <CardNoImage />
            <CardNoButton />
            <CardWithImageAndButton />
          </div>

          <div className="button-row">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>

          <div className="button-row">
            <DownloadButton href={heroImg} download="hero.png" variant="primary">Download Primary</DownloadButton>
            <DownloadButton href={heroImg} download="hero.png" variant="secondary">Download Secondary</DownloadButton>
            <DownloadButton href={heroImg} download="hero.png" variant="ghost">Download Ghost</DownloadButton>
          </div>
        </div>
      </main>
    </>
  )
}

export default App

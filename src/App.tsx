import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './components/atoms/Button'
import DownloadButton from './components/atoms/DownloadButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="app__main">
        <h1 className="app__heading">Emotion Design System — Demo</h1>
        <p className="app__lead">A small demo showcasing the `DownloadButton` atom.</p>
        <div className="app__controls">
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

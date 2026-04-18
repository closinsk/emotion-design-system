import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DownloadButton from './components/atoms/DownloadButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="app__main">
        <h1 className="app__heading">Emotion Design System — Demo</h1>
        <p className="app__lead">A small demo showcasing the `DownloadButton` atom.</p>
        <div className="app__controls">
          <DownloadButton href={heroImg} download="hero.png">Download Hero</DownloadButton>
        </div>
      </main>
    </>
  )
}

export default App

import React, { useState } from 'react'
import Card from './Card'
import heroImg from '../../../assets/hero.png'
import DownloadButton from '../../atoms/DownloadButton'

const CardWithImageAndButton: React.FC = () => {
  const [flipped, setFlipped] = useState(false)

  const toggle = () => setFlipped((v) => !v)
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <Card title="Image + Button Card" footer={<DownloadButton href={heroImg} download="hero.png">Download</DownloadButton>} className="eds-card--flippable">
      <div
        className={`eds-card__flip`}
        onClick={toggle}
        onKeyDown={onKey}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
      >
        <div className={`eds-card__flip-inner ${flipped ? 'is-flipped' : ''}`}>
          <div className="eds-card__face eds-card__face--front">
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <img src={heroImg} alt="plant" className="eds-card__media" />
              <div>
                <p style={{ margin: 0 }}>This card shows an image and includes a footer action button.</p>
              </div>
            </div>
          </div>

          <div className="eds-card__face eds-card__face--back">
            <h4 style={{ margin: '0 0 8px 0', color: '#fff' }}>Grounded in Nature</h4>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)' }}>A brief description about the plant—rooted, resilient, and thriving in green spaces.</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CardWithImageAndButton

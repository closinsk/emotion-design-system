import React, { useState } from 'react'
import './FeatureCard.css'

type FeatureCardProps = {
  title: string
  description: string
  extra?: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, extra }) => {
  const [expanded, setExpanded] = useState(false)
  const [hover, setHover] = useState(false)

  const toggle = () => setExpanded((v) => !v)

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <div
      className={`feature-card ${hover ? 'is-hover' : ''} ${expanded ? 'is-expanded' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={toggle}
      onKeyDown={onKey}
      role="button"
      tabIndex={0}
      aria-pressed={expanded}
    >
      <div className="feature-card__inner">
        <h4 className="feature-card__title">{title}</h4>
        <p className="feature-card__desc">{description}</p>

        <div className="feature-card__extra" aria-hidden={!expanded}>
          {extra ||
            'Built with design tokens, every decision scales beautifully across your entire system.'}
        </div>

        <div className="feature-card__arrow" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard

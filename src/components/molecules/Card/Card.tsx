import React from 'react'
import './Card.css'

export type CardProps = {
  title?: string
  children?: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ title, children, footer, className = '' }) => {
  return (
    <div className={`eds-card ${className}`.trim()}>
      {title && (
        <div className="eds-card__header">
          <h3 className="eds-card__title">{title}</h3>
        </div>
      )}

      <div className="eds-card__body">{children}</div>

      {footer && <div className="eds-card__footer">{footer}</div>}
    </div>
  )
}

export default Card

import React from 'react'
import './DownloadButton.css'

export type DownloadButtonProps = {
  href: string
  download?: string
  variant?: 'primary' | 'secondary'
  className?: string
  children: React.ReactNode
  ariaLabel?: string
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  href,
  download,
  variant = 'primary',
  className = '',
  children,
  ariaLabel,
}) => {
  return (
    <a
      href={href}
      download={download}
      className={`download-button download-button--${variant} ${className}`.trim()}
      aria-label={ariaLabel}
    >
      <span className="download-button__icon" aria-hidden="true">⬇︎</span>
      <span className="download-button__label">{children}</span>
    </a>
  )
}

export default DownloadButton

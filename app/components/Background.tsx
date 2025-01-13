'use client'

import { useBackground } from '../contexts/BackgroundContext'

export default function Background() {
  const { backgroundImage } = useBackground()

  return (
    <div 
      className="fixed inset-0 z-[-1]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    />
  )
}


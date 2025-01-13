'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const AnimatedBackground = dynamic(() => import('./AnimatedBackground'), {
  ssr: false,
})

export default function AnimatedBackgroundWrapper() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <AnimatedBackground />
    </Suspense>
  )
}


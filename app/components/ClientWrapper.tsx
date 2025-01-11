'use client'

import { LanguageProvider } from '../contexts/LanguageContext'
import { ThemeProvider } from './theme-provider'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </LanguageProvider>
  )
}


'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import { useEffect, useState } from 'react'

interface HeaderProps {
  t: {
    [key: string]: string
  }
  onLanguageChange: (lang: 'es' | 'en') => void
}

export default function Header({ t, onLanguageChange }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) {
    return null
  }

  return (
    <header className="py-4 px-6 flex justify-end items-center">
      <div className="flex items-center space-x-4">
        <LanguageSwitcher onLanguageChange={onLanguageChange} />
        <button
          onClick={toggleTheme}
          className="rounded-button transition-all duration-300 ease-in-out transform hover:scale-105"
          aria-label={theme === 'dark' ? t.switchToLightMode : t.switchToDarkMode}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Moon className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  )
}


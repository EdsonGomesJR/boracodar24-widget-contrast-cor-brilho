'use client'

import { useToggleTheme } from '../hooks/useToogleTheme'
import ThemeIcon from './ThemeIcon'
import { useState, useEffect } from 'react'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useToggleTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex  w-auto  items-center justify-center gap-2 rounded border-2 border-gray-200 p-2">
      <ThemeIcon width={20} height={20} theme={theme} />
      <button
        className="capitalize"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme}
      </button>
    </div>
  )
}

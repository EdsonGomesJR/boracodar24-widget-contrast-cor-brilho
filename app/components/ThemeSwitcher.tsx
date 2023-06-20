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
    <button
      className="flex  w-auto items-center  justify-center gap-2 rounded  border-2  border-gray-200 bg-white p-2 capitalize dark:bg-inherit"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <ThemeIcon width={20} height={20} theme={theme} />

      {theme}
    </button>
  )
}

'use client'
import MoonIcon from '../icons/moon'
import SunIcon from '../icons/sun'

interface ThemeIconProps {
  theme?: string
  width: number
  height: number
}

const ThemeIcon = ({ theme, ...props }: ThemeIconProps) => {
  switch (theme) {
    case 'light':
      return <SunIcon className="h-6 w-6 text-black" />

    case 'dark':
      return <MoonIcon className="h-6 w-6 text-white" />

    default:
      return <MoonIcon className="h-6 w-6 text-white" />
  }
}

export default ThemeIcon

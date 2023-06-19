'use client'
import MoonIcon from '../icons/moon'
import SunIcon from '../icons/sun';
import SystemIcon from '../icons/system';

interface ThemeIconProps {
  theme?: string;
  width: number;
  height: number;
}

const ThemeIcon = ({ theme, ...props }: ThemeIconProps) => {
  switch (theme) {
    case 'light':
      return <SunIcon className="h-6 w-6 text-current" />;

    case 'dark':
      return <MoonIcon className="h-6 w-6 text-current" />;

    default:
      return <SystemIcon className="h-6 w-6 text-current" />;
  }
};

export default ThemeIcon;

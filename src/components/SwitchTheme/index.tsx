import React from 'react';
import './switch-theme.scss';

import { AiOutlineEye } from 'react-icons/ai';
import { RiEyeCloseLine } from 'react-icons/ri';

export interface SwitchThemeProps {
  darkTheme: boolean
  onChangeTheme?: () => void
}

export function SwitchTheme({ darkTheme = false, onChangeTheme = () => { } }: SwitchThemeProps): React.ReactElement<SwitchThemeProps> {

  return (
    <button className="switch-theme" onClick={onChangeTheme}>
      {darkTheme
        ? <RiEyeCloseLine size={24} color="#FF868E" />
        : <AiOutlineEye size={24} color="#FF868E" />
      }
      <span className={`switch-theme__circle ${darkTheme ? 'active' : ''}`} />
    </button>
  )
}
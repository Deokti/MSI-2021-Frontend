import clsx from 'clsx';
import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { RiEyeCloseLine } from 'react-icons/ri';
import './switch-theme.scss';


export function SwitchTheme(): React.ReactElement {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <button className="switch-theme">
      {darkTheme
        ? <RiEyeCloseLine size={24} color="#FF868E" />
        : <AiOutlineEye size={24} color="#FF868E" />
      }
      <span className={clsx('switch-theme__circle', { active: darkTheme })} />
    </button>
  )
}

import React, { useEffect } from 'react';
import clsx from 'clsx';
import { AiOutlineEye } from 'react-icons/ai';
import { RiEyeCloseLine } from 'react-icons/ri';
import { IStore } from '../../types/store';
import { getDarkTheme, setDarkTheme } from '../../actions';
import { connect } from 'react-redux';
import { setThemeLocalStorage } from '../../utils/theme-local-storage';
import './switch-theme.scss';

interface SwitchThemeProps {
  darkTheme: boolean
  setDarkTheme: (value: boolean) => void;
  getDarkTheme: () => any;
}

function SwitchTheme({ darkTheme, setDarkTheme, getDarkTheme }: SwitchThemeProps): React.ReactElement<SwitchThemeProps> {

  // Проверка темы и её выставление происходит в middlewave --> isDarkTheme
  useEffect(getDarkTheme, [getDarkTheme]);

  function onChangeTheme(): void {
    // При передаче темы, передаётся текущая тема, 
    // по этой причине мы автоматически делает отричание,
    // чтобы побучилось, например false => true

    setDarkTheme(!darkTheme);
    setThemeLocalStorage(!darkTheme);
  }

  return (
    <button className="switch-theme" onClick={onChangeTheme}>
      <span className="switch-theme__image">
        {darkTheme
          ? <RiEyeCloseLine size={19} color="#FF868E" />
          : <AiOutlineEye size={22} color="#FF868E" />
        }
      </span>
      <span className={clsx('switch-theme__circle', { active: darkTheme })} />
    </button>
  )
}

const mapStateToProps = ({ data: { darkTheme } }: IStore) => ({ darkTheme });

export default connect(mapStateToProps, { setDarkTheme, getDarkTheme })(SwitchTheme);
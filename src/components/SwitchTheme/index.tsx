import React, { useEffect } from 'react';
import clsx from 'clsx';
import { AiOutlineEye } from 'react-icons/ai';
import { RiEyeCloseLine } from 'react-icons/ri';
import { IStore } from '../../types/store';
import { setDarkTheme } from '../../actions';
import { connect } from 'react-redux';
import { getThemeLocalStorage, setThemeLocalStorage } from '../../utils/theme-local-storage';
import './switch-theme.scss';

interface SwitchThemeProps {
  darkTheme: boolean
  setDarkTheme: (value: boolean) => void;
}

function SwitchTheme({ darkTheme, setDarkTheme }: SwitchThemeProps): React.ReactElement<SwitchThemeProps> {

  useEffect(isDarkTheme, [isDarkTheme]);

  function isDarkTheme() {
    const theme = getThemeLocalStorage();
    if (theme === false) {
      return setThemeLocalStorage(darkTheme);
    }

    return setDarkTheme(getThemeLocalStorage());
  }

  function onChangeTheme(): void {
    // При передаче темы, передаётся текущая тема, 
    // по этой причине мы автоматически делает отричание,
    // чтобы побучилось, например false => true

    setDarkTheme(!darkTheme);
    setThemeLocalStorage(!darkTheme);
  }

  return (
    <button className="switch-theme" onClick={onChangeTheme}>
      {darkTheme
        ? <RiEyeCloseLine size={24} color="#FF868E" />
        : <AiOutlineEye size={24} color="#FF868E" />
      }
      <span className={clsx('switch-theme__circle', { active: darkTheme })} />
    </button>
  )
}

const mapStateToProps = ({ data: { darkTheme } }: IStore) => ({ darkTheme });

export default connect(mapStateToProps, { setDarkTheme })(SwitchTheme);
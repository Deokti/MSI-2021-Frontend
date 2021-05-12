import React, { useEffect, ReactElement } from 'react';
import { useRef } from 'react';
import { connect } from 'react-redux';
import { IStore } from '../../types/store';
import { ContentPanel } from '../ContentPanel';
import { ControlPanel } from '../ControlPanel';
import { Row } from '../Row';
import './app.scss';

interface AppProsp {
  darkTheme: boolean
}

function App({ darkTheme }: AppProsp): ReactElement<AppProsp> {
  const appRef = useRef<HTMLDivElement>(null)

  useEffect(() => changeTheme(darkTheme), [darkTheme]);

  function changeTheme(darkTheme: boolean) {
    const { current: app } = appRef;

    return darkTheme === true
      ? app?.setAttribute('data-theme', 'dark')
      : app?.setAttribute('data-theme', 'light');
  }

  return (
    <main className="app" ref={appRef}>
      <Row
        left={ControlPanel}
        right={ContentPanel}
      />
    </main>
  )
}

const mapStateToProps = ({ data: { darkTheme } }: IStore) => ({ darkTheme });

export default connect(mapStateToProps)(App);

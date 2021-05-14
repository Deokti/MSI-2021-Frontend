import React, { useEffect, ReactElement } from 'react';
import { useRef } from 'react';
import { connect } from 'react-redux';
import { IStore } from '../../types/store';
import { changeTheme } from '../../utils/change-theme';
import { ContentPanel } from '../ContentPanel';
import { ControlPanel } from '../ControlPanel';
import { Row } from '../Row';
import './app.scss';

interface AppProsp {
  darkTheme: boolean
}

function App({ darkTheme }: AppProsp): ReactElement<AppProsp> {
  const appRef = useRef<HTMLDivElement>(null)

  useEffect(() => changeTheme(appRef, darkTheme), [darkTheme]);

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

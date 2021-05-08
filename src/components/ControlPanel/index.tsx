import React from 'react';
import { Header } from './Header';
import { Welcome } from './Welcome';
import { ControlPanelList } from './ControlPanelList';

import './style.scss';

export function ControlPanel(): React.ReactElement {

  return (
    <section className="control-panel">
      <Header />

      <div className="control-panel__welcome">
        <Welcome title="Привет, интерн!" subtitle="Добро пожаловать на MSI 2021 Front-end тест" />
      </div>

      <div className="control-panel__management">
        <ControlPanelList />
      </div>
    </section>
  )
}
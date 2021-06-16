import React from 'react';
import { Header } from './../components/ControlPanel/Header';
import { Welcome } from './../components/ControlPanel/Welcome';
import ControlPanelList from './../components/ControlPanel/ControlPanelList';

import '../components/ControlPanel/style.scss';

export function ControlPanel(): React.ReactElement {

  return (
    <section className="control-panel">
      <Header />
      <Welcome title="Привет, интерн!" subtitle="Добро пожаловать на MSI 2021 Front-end тест" />
      <ControlPanelList />
    </section>
  )
}
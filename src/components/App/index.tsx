import React from 'react';
import { ContentPanel } from '../ContentPanel';
import { ControlPanel } from '../ControlPanel';
import { Row } from '../Row';
import './app.scss';

function App() {

  return (
    <main className="app">
      <Row
        left={ControlPanel}
        right={ContentPanel}
      />
    </main>
  )
}

export default App;

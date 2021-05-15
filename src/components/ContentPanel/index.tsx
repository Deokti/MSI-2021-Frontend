import React from 'react';
import { Header } from '../Header';
import { ContentPanelPlug } from './ContentPanelPlug';
import { ContentPanelVoting } from './ContentPanelVoting';

import './style.scss';

export function ContentPanel() {
  return (
    <div className="content-panel">
      <Header />
      <ContentPanelVoting />
    </div>
  )
}
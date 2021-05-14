import React from 'react';
import { ContentPanelPlug } from './ContentPanelPlug';
import { ContentPanelVoting } from './ContentPanelVoting';

import './style.scss';

export function ContentPanel() {
  return (
    <div className="content-panel">
      <ContentPanelVoting />
    </div>
  )
}
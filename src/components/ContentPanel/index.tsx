import React from 'react';
import { ContentPanelPlug } from './ContentPanelPlug';
import ContentPanelVoting from './ContentPanelVoting';
import ContentPanelBreeds from './ContentPanelBreeds';
import { Switch, Route } from 'react-router-dom';

import './style.scss';
import { ROUTER_PATH } from '../../config/ROUTER_PATH';

export function ContentPanel() {
  return (
    <div className="content-panel">
      <Switch>
        <Route path={ROUTER_PATH.root} exact component={ContentPanelPlug} />
        <Route path={ROUTER_PATH.votes} exact component={ContentPanelVoting} />
        <Route path={ROUTER_PATH.breeds} exact component={ContentPanelBreeds} />

        <Route component={ContentPanelPlug} />
      </Switch>
    </div>
  )
}
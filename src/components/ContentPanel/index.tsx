import React from 'react';
import { ContentPanelPlug } from './ContentPanelPlug';
import ContentPanelVoting from './ContentPanelVoting';
import ContentPanelBreeds from './ContentPanelBreeds';
import { Switch, Route, useLocation } from 'react-router-dom';

import './style.scss';
import { ROUTER_PATH } from '../../config/ROUTER_PATH';
import ContentPanelBreed from './ContentPanelBreed/[id]';
import { HeaderSearch } from '../HeaderSearch';

export function ContentPanel() {
  const { pathname } = useLocation();


  return (
    <div className="content-panel">
      {pathname !== ROUTER_PATH.root && <HeaderSearch />}

      <Switch>
        <Route path={ROUTER_PATH.root} exact component={ContentPanelPlug} />
        <Route path={ROUTER_PATH.votes} exact component={ContentPanelVoting} />
        <Route path={ROUTER_PATH.breeds} exact component={ContentPanelBreeds} />
        <Route path={`${ROUTER_PATH.breeds}/:id`} exact component={ContentPanelBreed} />

        <Route component={ContentPanelPlug} />
      </Switch>
    </div>
  )
}
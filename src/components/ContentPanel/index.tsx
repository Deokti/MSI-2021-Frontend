import React from 'react';
import { HeaderSearch } from '../HeaderSearch';
import { ContentPanelPlug } from './ContentPanelPlug';
import ContentPanelVoting from './ContentPanelVoting';
import { Switch, Route } from 'react-router-dom';

import './style.scss';

export function ContentPanel() {
  return (
    <div className="content-panel">
      <Switch>
        <Route path="/" exact component={ContentPanelPlug} />
        <Route path="/votes" exact render={() => (
          <React.Fragment>
            <HeaderSearch />
            <ContentPanelVoting />
          </React.Fragment>
        )} />

        <Route component={ContentPanelPlug} />
      </Switch>
    </div>
  )
}
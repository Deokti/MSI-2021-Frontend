import React from 'react';
import { ContentPanelPlug } from '../components/ContentPanel/ContentPanelPlug';
import ContentPanelVoting from '../components/ContentPanel//ContentPanelVoting';
import ContentPanelBreeds from '../components/ContentPanel//ContentPanelBreeds';
import { Switch, Route, useLocation } from 'react-router-dom';

import { ROUTER_PATH } from '../config/ROUTER_PATH';
import { HeaderSearch } from '../components/HeaderSearch';
import ContentPanelGallery from '../components/ContentPanel/ContentPanelGallery';
import { BreedInfo } from './BreedInfo';
import '../components/ContentPanel/style.scss';

export function ContentPanel() {
  const { pathname } = useLocation();

  return (
    <div className="content-panel">
      {pathname !== ROUTER_PATH.root && <HeaderSearch />}

      <Switch>
        <Route path={ROUTER_PATH.root} exact component={ContentPanelPlug} />
        <Route path={ROUTER_PATH.votes} exact component={ContentPanelVoting} />
        <Route path={ROUTER_PATH.breeds} exact component={ContentPanelBreeds} />
        <Route path={ROUTER_PATH.gallery} exact component={ContentPanelGallery} />

        <Route path={`${ROUTER_PATH.breeds}/:id`} exact component={BreedInfo} />

        {/* --- Если не нашёлся ни один из Роутов --- */}
        <Route component={ContentPanelPlug} />
      </Switch>
    </div>
  )
}
import React from 'react';
import { HeaderSearch } from '../../HeaderSearch';
import Navigation from '../../Navigation';

import './style.scss';

function ContentPanelBreeds() {


  return (
    <React.Fragment>
      <HeaderSearch />

      <div className="content-panel-breeds">
        <header>
          <Navigation />
        </header>

        <ul className="content-panel-breeds__list">

        </ul>
      </div>
    </React.Fragment>
  )
}

export default ContentPanelBreeds;
import React from 'react';

import './style.scss';

import girlAndPet from '../../../assets/image/girl-and-pet.png';

export function ContentPanelPlug() {
  return (
    <div className="content-panel-plug">
      <img src={girlAndPet} alt="Девушка и собака" />
    </div>
  )
}
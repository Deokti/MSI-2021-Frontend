import React from 'react';
import { ControlPanelItem } from '../ControlPanelItem';
import './style.scss';

import voitingImage from '../../../assets/image/voting-image.png';
import breedsImage from '../../../assets/image/breeds-image.png';
import galleryImage from '../../../assets/image/gallery-image.png';

const CONTROLS = [
  {
    text: "VOTING",
    backgroundColor: "#B4B7FF",
    image: voitingImage
  },
  {
    text: "BREEDS",
    backgroundColor: "#97EAB9",
    image: breedsImage
  },
  {
    text: "GALLERY",
    backgroundColor: "#FFD280",
    image: galleryImage
  },
]

export function ControlPanelList() {

  return (
    <div className="control-list">
      <h2 className="control-list__title">Давайте начнем использовать Dogs API</h2>

      <ul className="control-list__items">
        {CONTROLS.map((item) => {
          const { text } = item;

          return (
            <li className="control-list__item" key={text}>
              <ControlPanelItem {...item} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
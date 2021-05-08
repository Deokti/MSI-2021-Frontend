import React from 'react';
import { ControlPanelItem } from '../ControlPanelItem';
import './style.scss';

import voitingImage from '../../../assets/image/voting-image.png';
import breedsImage from '../../../assets/image/breeds-image.png';
import galleryImage from '../../../assets/image/gallery-image.png';

const CONTROL = [
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
    <div className="management-list">
      <h2 className="management-list__title">Давайте начнем использовать Dogs API</h2>

      <ul className="management__items">
        {CONTROL.map((item) => {
          return (
            <li className="management__item">
              <ControlPanelItem {...item} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
import voitingImage from '../assets/image/voting-image.png';
import breedsImage from '../assets/image/breeds-image.png';
import galleryImage from '../assets/image/gallery-image.png';
import { IManagementState } from '../interfaces/reducers';
import { setActiveControl } from '../actions/management';

interface IManagementAction {
  type: string
  payload: string
}

const initialState: IManagementState = {
  active: null,
  controls: [
    {
      id: '/votes',
      text: "ГОЛОСОВАНИЕ",
      backgroundColor: "#B4B7FF",
      image: voitingImage
    },
    {
      id: '/breeds',
      text: "ПОРОДЫ",
      backgroundColor: "#97EAB9",
      image: breedsImage
    },
    {
      id: '/gallery',
      text: "ГАЛЕРЕЯ",
      backgroundColor: "#FFD280",
      image: galleryImage
    },
  ]
}

export function management(state: IManagementState = initialState, action: IManagementAction) {

  switch (action.type) {
    case setActiveControl.toString(): {
      return {
        ...state,
        active: action.payload
      }
    }

    default: { return state }
  }
}
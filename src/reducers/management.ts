import voitingImage from '../assets/image/voting-image.png';
import breedsImage from '../assets/image/breeds-image.png';
import galleryImage from '../assets/image/gallery-image.png';
import { IManagementState } from '../types/reducers';
import { setActiveControl } from '../actions';

interface IManagementAction {
  type: string
  payload: string
}

const initialState: IManagementState = {
  active: null,
  controls: [
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
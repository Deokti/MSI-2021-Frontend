import voitingImage from '../assets/image/voting-image.png';
import breedsImage from '../assets/image/breeds-image.png';
import galleryImage from '../assets/image/gallery-image.png';
import { IManagementState } from '../interfaces/reducers';
import { setActiveControlPath } from '../actions/management';

interface IManagementAction {
  type: string
  payload: string
}

const initialState: IManagementState = {
  currentPath: null,
  controls: [
    {
      path: '/votes',
      text: "ГОЛОСОВАНИЕ",
      backgroundColor: "#B4B7FF",
      image: voitingImage
    },
    {
      path: '/breeds',
      text: "ПОРОДЫ",
      backgroundColor: "#97EAB9",
      image: breedsImage
    },
    {
      path: '/gallery',
      text: "ГАЛЕРЕЯ",
      backgroundColor: "#FFD280",
      image: galleryImage
    },
  ]
}

export function management(state: IManagementState = initialState, action: IManagementAction) {

  switch (action.type) {
    case setActiveControlPath.toString(): {
      const custonPath = typeof action.payload === 'string'
        ? action.payload
          .replaceAll('/', ' ')
          .trim()
          .split(' ')
        : action.payload

      return {
        ...state,
        currentPath: custonPath
      }
    }

    default: { return state }
  }
}
import voitingImage from '../assets/image/voting-image.png';
import breedsImage from '../assets/image/breeds-image.png';
import galleryImage from '../assets/image/gallery-image.png';
import { IAction, IManagementState } from '../interfaces/reducers';
import { setActiveControlPath } from '../actions/management';

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

export function management(state: IManagementState = initialState, action: IAction): IManagementState {

  switch (action.type) {
    case setActiveControlPath.toString(): {
      // Проверяем пришедший путь и делаем с ним преобразования
      // Чтобы отдать его в качестве масива.
      // Если приходит массив, то просто вернуть его
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
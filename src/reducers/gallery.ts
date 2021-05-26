import { getGalleryFailure, getGalleryLoading, getGallerySucsess } from "../actions/gallery";
import { IGallery } from "../interfaces/reducers";

const initialState: IGallery = {
  data: null,
  order: 'Random',
  type: 'Static',
  breed: 'Все породы',
  limit: 5,
  error: null,
  loading: true,
}

export function gallery(state: IGallery = initialState, action: any): IGallery {

  switch (action.type) {

    case getGalleryLoading.toString(): {
      return state;
    }

    case getGallerySucsess.toString(): {
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      }
    }

    case getGalleryFailure.toString(): {
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload
      }
    }

    default: { return state }
  }
}
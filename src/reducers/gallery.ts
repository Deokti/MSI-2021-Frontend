import { getGalleryFailure, getGalleryLoading, getGalleryRequest } from "../actions/gallery";
import { IGallery } from "../interfaces/reducers";

const initialState: IGallery = {
  data: null,
  order: 'Random',
  type: 'Static',
  breed: null,
  limit: 5,
  error: null,
  loading: true,
}

export function gallery(state: IGallery = initialState, action: any): IGallery {

  switch (action.type) {

    case getGalleryLoading.toString(): {
      console.log('getGalleryLoading action -->', action);
      return state;
    }

    case getGalleryRequest.toString(): {
      console.log('getGalleryRequest action -->', action);

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
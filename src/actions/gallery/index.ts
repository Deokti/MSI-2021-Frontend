import { AnyAction } from "redux";
import { createAction } from "redux-actions";
import { ThunkDispatch } from "redux-thunk";
import { API_URL } from "../../config/API_URL";
import { axios } from '../../config/axios';

export const getGalleryLoading = createAction('GET_GALLERY_LOADING');
export const getGallerySucsess = createAction('GET_GALLERY_SUCCSESS');
export const getGalleryFailure = createAction('GET_GALLERY_FAILURE');


export const setGalleryLimit = createAction('SET_GALLERY_LIMIT');


export const getGalleryRequest = ({ limit }: { limit: number }) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getGalleryLoading());

    axios(`${API_URL.IMAGES_SEARCH_URL}?limit=${limit}`)
      .then(({ data }) => dispatch(getGallerySucsess(data)))
      .catch((error) => {
        console.log('ОШИБКА:', error);
        dispatch(getGalleryFailure(error));
      })
  }
}
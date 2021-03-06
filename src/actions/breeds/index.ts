import { AnyAction } from "redux";
import { createAction } from "redux-actions";
import { ThunkDispatch } from "redux-thunk";
import { API_URL } from "../../config/API_URL";
import { axios } from '../../config/axios';

export const getBreedsLoading = createAction('GET_BREEDS_LOADING');
export const getBreedsSucsess = createAction('GET_BREEDS_SUCCSESS');
export const getBreedsFailure = createAction('GET_BREEDS_FAILURE');

export const setBreedsActiveDog = createAction('SET_BREEDS_ACTIVE_DOG');
export const setBreedsLimit = createAction('SET_BREEDS_LIMIT');
export const setFilterDogName = createAction('SET_FILTER_DOG_NAME');
export const setSortedBreeds = createAction('SET_SORTED_BREEDS');

// Ассинхронный запрос для получения Пород 
export const getBreedsRequest = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  dispatch(getBreedsLoading());

  const PARAMS = { params: { order: "ASC" } }

  return axios.get(API_URL.BREEDS_URL, PARAMS)
    .then(response => dispatch(getBreedsSucsess(response.data)))
    .catch((error) => {
      console.error(error);
      dispatch(getBreedsFailure(error));
    });
};



import { AnyAction } from "redux";
import { createAction } from "redux-actions";
import { ThunkDispatch } from "redux-thunk";
import { API_KEY } from "../../config/API_KEY";
import { API_URL } from "../../config/API_URL";

export const getBreedsLoading = createAction('GET_BREEDS_LOADING');
export const getBreedsSucsess = createAction('GET_BREEDS_SUCCSESS');
export const getBreedsFailure = createAction('GET_BREEDS_FAILURE');

// Ассинхронный запрос для получения Пород 
export const getBreedsRequest = (limit: number) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  dispatch(getBreedsLoading());

  const PARAMS = { headers: { 'x-api-key': API_KEY } };

  return fetch(`${API_URL.BREEDS_URL}?limit=${limit}`, PARAMS)
    .then((response) => response.json())
    .then(data => dispatch(getBreedsSucsess(data)))
    .catch((error) => {
      console.error(error);
      dispatch(getBreedsFailure(error));
    })
};

export const setBreedsActiveDog = createAction('SET_BREEDS_ACTIVE_DOG');

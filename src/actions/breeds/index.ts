import { createAction } from "redux-actions";

export const getBreedsRequest = createAction('GET_BREEDS_REQUEST');
export const getBreedsSucsess = createAction('GET_BREEDS_SUCCSESS');
export const getBreedsFailure = createAction('GET_BREEDS_FAILURE');
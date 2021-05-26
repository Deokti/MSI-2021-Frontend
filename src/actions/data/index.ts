import { AnyAction } from "redux";
import { createAction } from "redux-actions";
import { ThunkDispatch } from "redux-thunk";
import { API_URL } from "../../config/API_URL";
import { axios } from "../../config/axios";
import { IResponseBreed } from "../../interfaces/response";
import { translateNameDogs } from "../../utils/translate-name-dogs";

// Data
export const getDarkTheme = createAction('GET_DARK_THEME');
export const setDarkTheme = createAction('SET_DARK_THEME');

export const getBreedsAllDogsLoading = createAction('GET_BREEDS_ALL_DOGS_LOADING');
export const getBreedsAllDogsSucsess = createAction('GET_BREEDS_ALL_DOGS_SUCCSESS');

export const getBreedsAllDogsRequest = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getBreedsAllDogsLoading());

    return axios.get(API_URL.BREEDS_URL)
      .then((response) => {
        dispatch(getBreedsAllDogsSucsess(sortingDogBreeds(translateNames(response.data))))
      })
      .catch((error) => console.error(error))
  }
}

function translateNames(breeds: Array<IResponseBreed>): Array<string> {
  return breeds && breeds.reduce((acc, prevValue) => {
    acc.push(translateNameDogs(prevValue.name))
    return acc;
  }, ['Все породы']);
}

function sortingDogBreeds(breeds: Array<string>): Array<string> {
  const [first, ...other] = breeds;
  return [first, ...other.sort()];
}

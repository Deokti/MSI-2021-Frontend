import { getBreedsAllDogsLoading, getBreedsAllDogsSucsess, getDarkTheme, setDarkTheme } from '../actions/data';
import { IData } from '../interfaces/reducers';

const initialState: IData = {
  darkTheme: false,
  breedsAllDogs: null
}

function data(state: IData = initialState, action: any): IData {

  switch (action.type) {

    case getDarkTheme.toString(): {
      return {
        ...state,
      }
    }

    case setDarkTheme.toString(): {
      return {
        ...state,
        darkTheme: action.payload
      };
    }

    case getBreedsAllDogsLoading.toString(): {
      return {
        ...state,
        breedsAllDogs: null
      }
    }

    case getBreedsAllDogsSucsess.toString(): {
      return {
        ...state,
        breedsAllDogs: action.payload
      }
    }

    default: { return state }
  }
}

export { data };
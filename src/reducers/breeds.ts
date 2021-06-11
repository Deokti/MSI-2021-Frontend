import { getBreedsFailure, getBreedsLoading, getBreedsSucsess, setBreedsActiveDog, setFilterDogName, setBreedsLimit, setSortedBreeds } from "../actions/breeds";
import { IAction, IBreeds } from "../interfaces/reducers";

const initialState: IBreeds = {
  data: null,
  loading: true,
  limit: 10,
  error: null,
  activeDog: null,
  filterDogName: 'Все породы',
  sorted: 'ASC'
}


export function breeds(state: IBreeds = initialState, action: IAction): IBreeds {

  switch (action.type) {

    case getBreedsLoading.toString(): {
      return state;
    }

    case getBreedsSucsess.toString(): {
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      }
    }

    case getBreedsFailure.toString(): {
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload
      }
    }

    case setBreedsActiveDog.toString(): {
      return {
        ...state,
        activeDog: action.payload
      }
    }

    case setBreedsLimit.toString(): {
      return {
        ...state,
        limit: action.payload
      }
    }

    case setFilterDogName.toString(): {
      return {
        ...state,
        filterDogName: action.payload
      }
    }

    case setSortedBreeds.toString(): {
      return {
        ...state,
        sorted: action.payload
      }
    }

    default: { return state }
  }
}
import { getBreedsFailure, getBreedsLoading, getBreedsSucsess, setBreedsActiveDog, setFilterDogName, setLimit, setSortedBreeds } from "../actions/breeds";
import { IBreeds } from "../interfaces/reducers";
import { IResponseBreed } from "../interfaces/response";

const initialState: IBreeds = {
  data: null,
  loading: true,
  limit: 10,
  error: null,
  activeDog: null,
  filterDogName: 'Все породы',
  sorted: 'ASC'
}

interface ActionProps {
  type: string
  payload: null | boolean | number | Array<IResponseBreed> | string | IResponseBreed
}

export function breeds(state: IBreeds = initialState, action: ActionProps) {

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

    case setLimit.toString(): {
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
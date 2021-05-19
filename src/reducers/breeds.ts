import { getBreedsFailure, getBreedsLoading, getBreedsSucsess, setBreedsActiveDog } from "../actions/breeds";
import { IBreeds } from "../interfaces/reducers";
import { IResponseBreed } from "../interfaces/response";

const initialState: IBreeds = {
  data: null,
  loading: true,
  limit: 10,
  error: null,
  activeDog: null
}

interface ActionProps {
  type: string
  payload: null | boolean | number | Array<IResponseBreed> | string | IResponseBreed
}

export function breeds(state: IBreeds = initialState, action: ActionProps) {

  switch (action.type) {

    case getBreedsLoading.toString(): {
      return initialState;
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

    default: { return state }
  }
}
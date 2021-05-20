import { getDarkTheme, setDarkTheme } from '../actions/data';
import { IDataState } from '../interfaces/reducers';

const initialState: IDataState = {
  darkTheme: false,
}

function data(state: IDataState = initialState, action: any) {

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

    default: { return state }
  }
}

export { data };
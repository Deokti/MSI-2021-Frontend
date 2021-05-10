import { setDarkTheme } from '../actions';
import { IDataState } from '../types/reducers';

const initialState: IDataState = {
  VOTING: [],
  BREEDS: [],
  GALLERY: [],
  darkTheme: false
}

function data(state: IDataState = initialState, action: any) {

  switch (action.type) {

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
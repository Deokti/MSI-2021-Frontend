import { IDataState } from '../types/reducers';

const initialState: IDataState = {
  VOTING: [],
  BREEDS: [],
  GALLERY: []
}

function data(state = initialState, action: any) {


  return state;
}

export { data };
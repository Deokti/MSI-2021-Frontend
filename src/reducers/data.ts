

interface IInitialState {
  VOTING: Array<object>
  BREEDS: Array<object>
  GALLERY: Array<object>
}

const initialState: IInitialState = {
  VOTING: [],
  BREEDS: [],
  GALLERY: []
}

function data(state = initialState, action: any) {


  return state;
}

export { data };
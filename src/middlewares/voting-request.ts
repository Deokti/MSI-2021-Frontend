import { MiddlewareAPI, Dispatch, Action } from 'redux';
import { getVotingRequest, getVotingSucsess, getVotingFailure } from '../actions';
import { API_KEY } from '../config/API_KEY';

export const votingRequest = (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {

  if (action.type === getVotingRequest.toString()) {
    console.log('Работает');

    fetch('https://api.thedogapi.com/v1/images/search', { headers: { 'x-api-key': API_KEY } })
      .then((response) => response.json())
      .then((voting) => {
        store.dispatch(getVotingSucsess(voting[0]));
      })
      .catch((error) => {
        store.dispatch(getVotingFailure(error));
      })
  }

  return next(action);
}

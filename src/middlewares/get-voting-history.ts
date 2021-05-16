import { MiddlewareAPI, Dispatch, Action } from 'redux';
import { getVotingHistory, getVotingHistorySucsess } from '../actions';
import { API_KEY } from '../config/API_KEY';

export const votingHistory = (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {

  if (action.type === getVotingHistory.toString()) {
    fetch('https://api.thedogapi.com/v1/votes', { headers: { 'x-api-key': API_KEY } })
      .then((response) => response.json())
      .then((voting) => {
        store.dispatch(getVotingHistorySucsess(voting));
      })
      .catch(() => store.dispatch(getVotingHistory()));
  }

  return next(action);
}

import { AnyAction } from 'redux';
import { createAction } from 'redux-actions';
import { ThunkDispatch } from 'redux-thunk';
import { API_KEY } from '../config/API_KEY';

// Data
export const getBreedsRequest = createAction('GET_BREEDS_REQUEST');
export const getGalleryRequest = createAction('GET_GALLERY_REQUEST');

export const getDarkTheme = createAction('GET_DARK_THEME');
export const setDarkTheme = createAction('SET_DARK_THEME');

// Management
export const setActiveControl = createAction('GET_CONTROLS_ITEMS');

// Voting
export const getVotingRequest = createAction('GET_VOTING_REQUEST');
export const getVotingSucsess = createAction('GET_VOTING_SUCCSESS');
export const getVotingFailure = createAction('GET_VOTING_FAILURE');

export const getVotingHistory = createAction('GET_VOTING_HISTORY');
export const getVotingHistorySucsess = createAction('GET_VOTING_SUCSESS');
export const getVotingHistoryFailure = createAction('GET_VOTING_FAILURE');

export const sendVotingRequest = ({ image_id, vote }: { image_id: string, vote: number }) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const voice = { image_id, value: vote };

    const PARAMS = {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(voice),
    }

    return fetch('https://api.thedogapi.com/v1/votes', PARAMS)
      .then(() => {
        dispatch(getVotingRequest())
        dispatch(getVotingHistory())
      })
      .catch((error) => {
        console.error(error);
      })
  }
}

export const onVotingLike = createAction('ON_VOTING_LIKE');

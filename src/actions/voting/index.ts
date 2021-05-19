import { AnyAction } from "redux";
import { createAction } from "redux-actions";
import { ThunkDispatch } from "redux-thunk";
import { API_KEY } from "../../config/API_KEY";
import { API_URL } from "../../config/API_URL";

export const getVotingLoading = createAction('GET_VOTING_LOADING');
export const getVotingSucsess = createAction('GET_VOTING_SUCCSESS');
export const getVotingFailure = createAction('GET_VOTING_FAILURE');

// Ассинхронный запрос для получение изображения для голосования
export const getVotingRequest = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getVotingLoading());

    fetch(API_URL.VOTES_URL, { headers: { 'x-api-key': API_KEY } })
      .then((response) => response.json())
      .then((voting) => {
        dispatch(getVotingSucsess(voting[0]));
      })
      .catch((error) => {
        dispatch(getVotingFailure(error));
      })
  }
};


export const getVotingHistorySucsess = createAction('GET_VOTING_SUCSESS');
export const getVotingHistoryFailure = createAction('GET_VOTING_FAILURE');

// Ассинхронный запрос на получение истории голосования
export const getVotingHistory = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const PARAMS = { headers: { 'x-api-key': API_KEY } };

    fetch(API_URL.VOTES_URL_POST, PARAMS)
      .then((response) => response.json())
      .then((voting) => {
        const votingReverse = voting.reverse();
        dispatch(getVotingHistorySucsess(votingReverse));
      })
      .catch((error) => {
        dispatch(getVotingHistoryFailure(error));
      });
  }
};


// Отправляем ассинхронный POST запрос на голосование
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

    await fetch(API_URL.VOTES_URL_POST, PARAMS)
      .then(() => {
        dispatch(getVotingRequest())
        dispatch(getVotingHistory())
      })
      .catch((error) => console.error(error))
  }
}
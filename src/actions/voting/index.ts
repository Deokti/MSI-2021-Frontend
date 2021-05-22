import { AnyAction } from "redux";
import { createAction } from "redux-actions";
import { ThunkDispatch } from "redux-thunk";
import { API_URL } from "../../config/API_URL";

import { axios } from '../../config/axios';

export const getVotingLoading = createAction('GET_VOTING_LOADING');
export const getVotingSucsess = createAction('GET_VOTING_SUCCSESS');
export const getVotingFailure = createAction('GET_VOTING_FAILURE');

// Ассинхронный запрос для получение изображения для голосования
export const getVotingRequest = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getVotingLoading());

    const PARAMS = {
      params: { limit: 1, },
    }

    axios.get(API_URL.VOTES_URL, PARAMS)
      .then((voting) => {
        dispatch(getVotingSucsess(voting.data[0]));
      })
      .catch((error) => {
        dispatch(getVotingFailure(error));
      })
  }
};

export const getVotingHistorySucsess = createAction('GET_VOTING_HISTORY_SUCSESS');
export const getVotingHistoryFailure = createAction('GET_VOTING_HISTORY_FAILURE');

// Ассинхронный запрос на получение истории голосования
export const getVotingHistory = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const PARAMS = {
      params: { order: "DESC", limit: 25 }
    }

    axios.get(API_URL.VOTES_URL_POST, PARAMS)
      .then((voting) => {
        dispatch(getVotingHistorySucsess(voting.data));
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

    await axios.post(API_URL.VOTES_URL_POST, voice)
      .then((data) => {
        if (data.status === 200) {
          // В компоненте ContentPanelVoting проходит логика,
          // что если voting.data равна null, отправляем запрос и получаем новые данные
          // Для достижения этого эффекта, после отправления мы обнуляем voting.data 
          // dispatch(getVotingSucsess(null));
          dispatch(getVotingSucsess(null));
        }
      })
      .catch((error) => console.error(error))
  }
}
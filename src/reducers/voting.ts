import { getVotingFailure, getVotingHistory, getVotingHistoryFailure, getVotingHistorySucsess, getVotingRequest, getVotingSucsess } from "../actions";
import { IVoting } from "../interfaces/reducers";

const initialState: IVoting = {
  VOTING: null,
  error: null,
  loading: null,
  history: [],
  historyError: null,
}

export function voting(state: IVoting = initialState, action: any): IVoting {

  switch (action.type) {

    case getVotingRequest.toString(): {
      return {
        ...state,
        VOTING: null,
        error: null,
        loading: true,
      }
    }

    case getVotingSucsess.toString(): {
      return {
        ...state,
        loading: false,
        VOTING: action.payload
      }
    }

    case getVotingFailure.toString(): {
      return {
        history: [],
        historyError: null,
        VOTING: null,
        error: action.payload,
        loading: false,
      }
    }

    case getVotingHistory.toString(): {
      return { ...state }
    }

    case getVotingHistorySucsess.toString(): {
      return {
        ...state,
        history: action.payload
      }
    }

    case getVotingHistoryFailure.toString(): {
      return {
        ...state,
        historyError: action.payload
      }
    }

    default: { return state }
  }
}
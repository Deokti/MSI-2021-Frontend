import { getVotingFailure, getVotingHistory, getVotingHistoryFailure, getVotingHistorySucsess, getVotingLoading, getVotingSucsess } from "../actions/voting";
import { IAction, IVoting } from "../interfaces/reducers";

const initialState: IVoting = {
  data: null,
  error: null,
  loading: true,
  history: [],
  historyError: null,
}


export function voting(state: IVoting = initialState, action: IAction): IVoting {

  switch (action.type) {

    case getVotingLoading.toString(): {
      return initialState
    }

    case getVotingSucsess.toString(): {
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    }

    case getVotingFailure.toString(): {
      return {
        history: [],
        historyError: null,
        data: null,
        error: action.payload,
        loading: false,
      }
    }

    case getVotingHistory.toString(): {
      return { ...state }
    }

    case getVotingHistorySucsess.toString(): {
      const sortedByData = action.payload.slice()
        .sort((a: any, b: any) => new Date(a.created_at).valueOf() - new Date(b.created_at).valueOf())
        .reverse();

      return {
        ...state,
        history: sortedByData
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
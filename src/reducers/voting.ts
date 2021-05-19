import { getVotingFailure, getVotingHistory, getVotingHistoryFailure, getVotingHistorySucsess, getVotingLoading, getVotingSucsess } from "../actions/voting";
import { IVoting } from "../interfaces/reducers";
import { IResponseHistoryVoting, IResponseVoting } from "../interfaces/response";

const initialState: IVoting = {
  data: null,
  error: null,
  loading: true,
  history: [],
  historyError: null,
}

interface ActionProps {
  type: 'string'
  payload: null | IResponseVoting | any | boolean | Array<IResponseHistoryVoting>
}

export function voting(state: IVoting = initialState, action: ActionProps): IVoting {

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
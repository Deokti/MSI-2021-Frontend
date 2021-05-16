import { getVotingFailure, getVotingHistory, getVotingHistorySucsess, getVotingRequest, getVotingSucsess } from "../actions";
import { IVoting } from "../interfaces/reducers";

const initialState: IVoting = {
  VOTING: null,
  error: null,
  loading: null,
  votingHistory: [],
}

export function voting(state: IVoting = initialState, action: any): IVoting {

  switch (action.type) {

    case getVotingRequest.toString(): {
      return {
        votingHistory: [],
        VOTING: null,
        error: null,
        loading: true,
      }
    }

    case getVotingSucsess.toString(): {
      return {
        votingHistory: [],
        error: null,
        loading: false,
        VOTING: action.payload
      }
    }

    case getVotingFailure.toString(): {
      return {
        votingHistory: [],
        VOTING: null,
        error: action.payload,
        loading: false,
      }
    }

    case getVotingHistory.toString(): {
      return {
        ...state
      }
    }

    case getVotingHistorySucsess.toString(): {
      return {
        ...state,
        votingHistory: action.payload
      }
    }

    default: { return state }
  }
}
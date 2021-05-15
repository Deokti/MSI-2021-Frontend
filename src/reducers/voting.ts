import { getVotingFailure, getVotingRequest, getVotingSucsess } from "../actions";
import { IVoting } from "../interfaces/reducers";

const initialState: IVoting = {
  VOTING: null,
  error: null,
  loading: null,
}

export function voting(state: IVoting = initialState, action: any): IVoting {

  switch (action.type) {

    case getVotingRequest.toString(): {
      return {
        VOTING: null,
        error: null,
        loading: true
      }
    }

    case getVotingSucsess.toString(): {
      return {
        error: null,
        loading: false,
        VOTING: action.payload
      }
    }

    case getVotingFailure.toString(): {
      return {
        VOTING: null,
        error: action.payload,
        loading: false,
      }
    }

    default: { return state }
  }
}
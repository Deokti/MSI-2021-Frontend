import { getVotesFailure, getVotesLoading, getVotesSucsess } from "../actions/votes";
import { IAction, IVotes } from "../interfaces/reducers";

const initialState: IVotes = {
  favorite: null,
  like: null,
  dislike: null,
  loading: true,
  error: null
}

export function votes(state: IVotes = initialState, action: IAction): IVotes {

  switch (action.type) {

    case getVotesLoading.toString(): {
      return initialState;
    }

    case getVotesSucsess.toString(): {
      return {
        ...state,
        loading: false,
        like: action.payload.like,
        dislike: action.payload.dislike
      }
    }

    case getVotesFailure.toString(): {
      return {
        favorite: null,
        like: null,
        dislike: null,
        loading: false,
        error: action.payload
      }
    }

    default: { return state }
  }
}


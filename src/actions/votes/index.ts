import { AnyAction } from "redux";
import { createAction } from "redux-actions";
import { ThunkDispatch } from "redux-thunk";
import { API_URL } from "../../config/API_URL";
import { axios } from "../../config/axios";
import { IVoteImage, IVoteSort } from "../../interfaces/other";
import { IVote } from "../../interfaces/response";

export const getVotesLoading = createAction('GET_VOTES_LOADING');
export const getVotesSucsess = createAction('GET_VOTES_SUCCSESS');
export const getVotesFailure = createAction('GET_VOTES_FAILURE');

export const getVotesRequest = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getVotesLoading());

    const PARAMS = { params: { order: "DESC", limit: 25 } }
    return axios(API_URL.VOTES_URL_POST, PARAMS)
      .then(async ({ data }) => {
        dispatch(getVotesSucsess(getVotesCategory(await getVotesImages(data))));
      })
      .catch((error) => dispatch(getVotesFailure(error)));
  }
}

function getVotesCategory(votes: Array<IVoteImage | null>) {
  return votes && votes.reduce((acc: IVoteSort, item: any) => {
    // Если 1 - это Like
    // Если 0 - это Dislike
    item.value === 1
      ? acc['like'].push(item)
      : acc['dislike'].push(item)

    return acc;
  }, { like: [], dislike: [] });
}

async function getVotesImages(votes: Array<IVote>): Promise<Array<IVoteImage | null>> {
  const request = await getVotesImagesRequest(votes);

  return axios.all(request)
    .then((response) => response.filter(item => Boolean(item)))
}

async function getVotesImagesRequest(votes: Array<IVote>) {
  return votes.map((vote) => {
    return axios.get(`${API_URL.IMAGES_SEARCH_ID}/${vote.image_id}`)
      .then(({ data }) => ({
        image_url: data.url,
        image_id: data.id,
        vote_id: vote.id,
        value: vote.value
      }))
      .catch(() => null);
  });
}

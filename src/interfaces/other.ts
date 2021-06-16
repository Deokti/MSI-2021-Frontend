import { IVote } from "./response";

export interface IVoteImage {
  image_id: string
  image_url: string
  value: number
  vote_id: number
}

export interface IVoteSort {
  like: Array<IVoteImage>
  dislike: Array<IVoteImage>
}
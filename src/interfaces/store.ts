import { IBreeds, IData, IGallery, IManagementState, IVotes, IVoting } from "./reducers";

export interface IStore {
  data: IData
  management: IManagementState
  voting: IVoting
  breeds: IBreeds
  gallery: IGallery
  votes: IVotes
}
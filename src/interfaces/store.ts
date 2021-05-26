import { IBreeds, IData, IGallery, IManagementState, IVoting } from "./reducers";

export interface IStore {
  data: IData
  management: IManagementState
  voting: IVoting
  breeds: IBreeds
  gallery: IGallery
}
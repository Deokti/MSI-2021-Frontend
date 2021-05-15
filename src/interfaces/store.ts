import { IDataState, IManagementState, IVoting } from "./reducers";

export interface IStore {
  data: IDataState
  management: IManagementState
  voting: IVoting
}
import { IDataState, IManagementState } from "./reducers";

export interface IStore {
  data: IDataState
  management: IManagementState
}
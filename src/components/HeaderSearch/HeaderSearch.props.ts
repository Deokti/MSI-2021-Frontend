import { IManagementState } from "../../interfaces/reducers";

export interface HeaderSearchProps {
  setActiveControlPath: (path: string) => any
  management: IManagementState
}

import { IManagementState } from "../../../interfaces/reducers";

export interface ControlPanelListProps {
  management: IManagementState
  setActiveControlPath: (text: string) => void
}

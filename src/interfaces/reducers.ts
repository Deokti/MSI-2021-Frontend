import { IResponseVoting } from "./response";

// Data
export interface IDataState {
  darkTheme: boolean
}

// Management
export interface IManagementState {
  active: string | null
  controls: Array<{
    id: string,
    text: string
    backgroundColor: string
    image: string
  }>
}

export interface IVoting {
  VOTING: null | IResponseVoting,
  error: any
  loading: boolean | null
}
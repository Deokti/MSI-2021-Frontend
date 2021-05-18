import { IResponseHistoryVoting, IResponseVoting } from "./response";

// Data
export interface IDataState {
  darkTheme: boolean
  navigation: string[] | null
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
  votingHistory: Array<IResponseHistoryVoting>
}
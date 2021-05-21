import { IResponseBreed, IResponseHistoryVoting, IResponseVoting } from "./response";

// Data
export interface IDataState {
  darkTheme: boolean
}

// Management
export interface IManagementState {
  currentPath: null | Array<string>
  controls: Array<{
    path: string,
    text: string
    backgroundColor: string
    image: string
  }>
}

// Voting
export interface IVoting {
  data: null | IResponseVoting,
  error: any
  loading: boolean
  history: Array<IResponseHistoryVoting>
  historyError: any
}

// Breeds
export interface IBreeds {
  data: null | Array<IResponseBreed>
  error: any
  loading: boolean
  limit: number
  activeDog: IResponseBreed | null
  filterDogName: string
}
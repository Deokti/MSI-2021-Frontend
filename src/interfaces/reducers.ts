import { IResponseBreed, IResponseHistoryVoting, IResponseVoting } from "./response";

// ACTIONS
export interface IAction {
  type: string
  payload: any
}

// Data
export interface IData {
  darkTheme: boolean
  breedsAllDogs: Array<string> | null
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
  sorted: 'ASC' | 'DESC'
}

export interface IGalleryType {
  request: 'gif,jpg,png' | 'jpg,png' | 'gif',
  value: 'Все' | 'Статические' | 'Анимационные'
}

export interface IGalleryOrder {
  request: 'rand' | 'desc' | 'asc',
  value: 'Случайно' | 'DESK' | 'ASC'
}

// Gallery
export interface IGallery {
  data: null | Array<IResponseVoting>
  order: IGalleryOrder
  type: IGalleryType
  breed: string,
  limit: 5
  error: any
  loading: boolean
}
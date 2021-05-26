import { IResponseBreed, IResponseHistoryVoting, IResponseVoting } from "./response";

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

// Gallery
export interface IGallery {
  data: null | Array<IResponseVoting>
  order: 'Случайно' | 'Desc' | 'Asc'
  type: 'Все' | 'Статические' | 'Анимационные'
  breed: string,
  limit: 5
  error: any
  loading: boolean
}
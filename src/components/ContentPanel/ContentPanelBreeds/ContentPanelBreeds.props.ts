import { IBreeds, IData } from "../../../interfaces/reducers";
import { IResponseBreed } from "../../../interfaces/response";

export interface ContentPanelBreedsProps {
  getBreedsRequest: () => any
  setBreedsActiveDog: (dog: IResponseBreed) => any
  breeds: IBreeds
  data: IData
  setBreedsLimit: (limit: number) => any
  setFilterDogName: (dogName: string) => any
  setSortedBreeds: (sort: 'ASC' | 'DESC') => any
  getBreedsAllDogsRequest: () => any
}
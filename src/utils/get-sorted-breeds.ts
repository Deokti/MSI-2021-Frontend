import { IResponseBreed } from "../interfaces/response"
import { translateNameDogs } from "./translate-name-dogs"

export function getSortedBreeds(sorted: 'ASC' | 'DESC', breeds: Array<IResponseBreed>): Array<IResponseBreed> {
  return sorted === 'DESC'
    ? breeds.sort((a, b) => {
      // Сортируем в алфавитном порядке наоборот, от Z до А
      if (translateNameDogs(a.name) > translateNameDogs(b.name)) return -1
      if (translateNameDogs(a.name) < translateNameDogs(b.name)) return 1
      return 0
    })
    : breeds.sort((a, b) => {
      // Сортируем в алфавитном порядке от A до Z
      if (translateNameDogs(a.name) > translateNameDogs(b.name)) return 1
      if (translateNameDogs(a.name) < translateNameDogs(b.name)) return -1
      return 0
    })
}
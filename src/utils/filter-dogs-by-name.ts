import { IResponseBreed } from "../interfaces/response";
import { translateNameDogs } from "./translate-name-dogs";

export function filterDogsByName(filter: string, breeds: Array<IResponseBreed>): Array<IResponseBreed> {
  if (filter === 'Все породы') return breeds;
  return breeds.filter((breed) => translateNameDogs(breed.name) === filter);
}
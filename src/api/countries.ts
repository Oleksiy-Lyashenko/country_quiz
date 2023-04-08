import { Country } from "../types/country"
import { client } from "../utils/fetchClient"

export const getCountries = () => {
  return client.get<Country[]>('/all')
}
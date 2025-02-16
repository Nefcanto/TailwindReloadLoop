import { get } from "Base"

const getCountries = async props => {
    const countries = await get(`/country/all`, props)
    return countries
}

export default getCountries

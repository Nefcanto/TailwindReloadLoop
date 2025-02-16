import { getFromCacheOrApi } from "Base"

const getAllCityDivisions = async props => {
    return await getFromCacheOrApi(`/cityDivision/all`, props)
}

export default getAllCityDivisions

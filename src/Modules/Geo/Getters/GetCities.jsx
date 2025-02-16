import { get } from "Base"

const getCities = async administrativeDivision => {
    const cities = await get(`/city/all?administrativeDivision=${administrativeDivision}`)
    return cities
}

export default getCities

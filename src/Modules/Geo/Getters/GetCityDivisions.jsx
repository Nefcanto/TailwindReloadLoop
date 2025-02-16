import { get } from "Base"

const getCityDivisions = async city => {
    return await get(`/cityDivision/all?city=${city}`)
}

export default getCityDivisions

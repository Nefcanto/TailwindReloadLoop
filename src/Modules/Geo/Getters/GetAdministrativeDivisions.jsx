import { get } from "Base"

const getAdministrativeDivisions = async country => {
    const administrativeDivisions = await get(`/administrativeDivision/all?country=${country}`)
    return administrativeDivisions
}

export default getAdministrativeDivisions

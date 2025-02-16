import { getFromCacheOrApi } from "Base"

const getAllSteps = async props => {

    const { steps: allSteps } = await getFromCacheOrApi(`/step/list`, props)

    return allSteps
}

export default getAllSteps

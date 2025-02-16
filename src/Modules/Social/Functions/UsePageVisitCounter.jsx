import { post } from "Base"

const usePageVisitCounter = async (pageUrl) => {

    const countVisit = await post(`/pageVisitCount/increaseVisitCount?pageUrl=${pageUrl}`)

    return countVisit
}

export default usePageVisitCounter

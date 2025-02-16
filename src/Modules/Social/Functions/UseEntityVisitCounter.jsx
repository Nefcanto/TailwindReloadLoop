import { post } from "Base"

const useEntityVisitCounter = async (entity, qwikRequestProps) => {
    if (!entity) {
        return
    }
    let countVisit = 0
    try {
        countVisit = await post(`/visitCount/increaseVisitCount?module=${entity.relatedItems.module}&entityType=${entity.relatedItems.entityType}&entity=${entity.guid}`, {}, qwikRequestProps)
    }
    catch (error) {
        console.log("The API is not updated and we have an error:", error)
    }
    return countVisit
}

export default useEntityVisitCounter

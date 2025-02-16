import { getFromCacheOrApi } from "Base"

const getCategories = async (entityType, props) => {
    const categories = await getFromCacheOrApi(`/taxonomy/categories?entityType=${entityType}`, props)
    return categories
}

export default getCategories

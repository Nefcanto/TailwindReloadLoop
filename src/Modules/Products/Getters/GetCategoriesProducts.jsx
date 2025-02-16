import {
    buildUrl,
    getFromCacheOrApi,
} from "Base"

const getCategoriesProducts = async (count, props) => {
    const builtUrl = buildUrl({
        path: "/products/getCategoriesWithProducts",
        queryParams: {
            count,
        }
    })
    const { categories } = await getFromCacheOrApi(builtUrl, props)
    return categories
}

export default getCategoriesProducts

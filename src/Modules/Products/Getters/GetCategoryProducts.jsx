import {
    buildUrl,
    getFromCacheOrApi,
} from "Base"

const getCategoryProducts = async (categorySlug, count, props) => {
    const builtUrl = buildUrl({
        path: "/products/categoryProducts",
        queryParams: {
            category: categorySlug,
            count,
        }
    })
    const { products } = await getFromCacheOrApi(builtUrl, props)
    return products
}

export default getCategoryProducts

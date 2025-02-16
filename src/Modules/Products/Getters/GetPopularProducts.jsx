import { getFromCacheOrApi } from "Base"

const getPopularProducts = async (count, props) => {
    const products = await getFromCacheOrApi(`/products/popularProducts?count=${count}`, props)
    return products
}

export default getPopularProducts

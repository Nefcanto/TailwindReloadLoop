import { getFromCacheOrApi } from "Base"

const getRecentProducts = async (count, props) => {
    const products = await getFromCacheOrApi(`/products/latestProducts?count=${count}`, props)
    return products
}

export default getRecentProducts

import { getFromCacheOrApi } from "Base"

const GetFeaturedProducts = async (count, props) => {
    const products = await getFromCacheOrApi(`/products/featuredProducts&count=${count}`, props)
    return products
}

export default GetFeaturedProducts

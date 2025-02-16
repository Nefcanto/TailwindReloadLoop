import { getFromCacheOrApi } from "Base"

const getBrands = async props => {
    const products = await getFromCacheOrApi(`/products/getBrands`, props)
    return products
}

export default getBrands

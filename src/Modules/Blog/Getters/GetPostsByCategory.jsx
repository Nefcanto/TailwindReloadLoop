import { getFromCacheOrApi } from "Base"

const getPostsByCategory = async (categorySlug, props) => {
    const { url } = props
    const categories = await getFromCacheOrApi(`/blog/data?category=${categorySlug}`, props)
    return categories
}

export default getPostsByCategory

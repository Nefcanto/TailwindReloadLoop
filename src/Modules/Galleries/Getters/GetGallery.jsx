import { getFromCacheOrApi } from "Base"

const getGallery = async (slug, props) => {
    const gallery = await getFromCacheOrApi(`/gallery/get?slug=${slug}`, props)
    return gallery
}

export default getGallery

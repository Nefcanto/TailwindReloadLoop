import { getFromCacheOrApi } from "Base"

const getLatestGalleries = async props => {
    const galleries = await getFromCacheOrApi(`/galleries/getLatest`, props)
    return galleries
}

export default getLatestGalleries

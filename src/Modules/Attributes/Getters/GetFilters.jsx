import { getFromCacheOrApi } from "Base"

const getFilters = async props => {
    const { url } = props
    const {
        pathname,
        searchParams,
    } = url || {}
    searchParams.set("requestingPath", pathname)
    const apiUrl = `/attributes/getFilters?${searchParams.toString()}`
    const filters = await getFromCacheOrApi(apiUrl, props)
    return filters
}

export default getFilters

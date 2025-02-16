import { getFromCacheOrApi } from "Base"

const getFilters = async (module, props) => {
    const { url } = props
    const {
        pathname,
        search,
    } = url || {}
    const apiUrl = `/filtering/getFilters?module=${module}&for=${pathname}${search}`
    const { filters } = await getFromCacheOrApi(apiUrl, props)
    return filters
}

export default getFilters

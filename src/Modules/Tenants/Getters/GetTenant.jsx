import { getFromCacheOrApi } from "Base"

const getTenant = async props => {
    const tenant = await getFromCacheOrApi(`/tenant/get`, props)
    return tenant
}

export default getTenant

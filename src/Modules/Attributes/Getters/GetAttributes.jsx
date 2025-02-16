import { getFromCacheOrApi } from "Base"

const getAttributes = async ({
    module,
    entityType,
    props
}) => {
    const { attributes } = await getFromCacheOrApi(`/attribute/list?module=${module}&entityType=${entityType}`, props)
    return attributes
}

export default getAttributes

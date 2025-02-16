import { getFromCacheOrApi } from "Base"

const getForm = async (key, props) => {
    const form = await getFromCacheOrApi(`/form/get?key=${key}&withoutSeo=true`, props)
    return form
}

export default getForm

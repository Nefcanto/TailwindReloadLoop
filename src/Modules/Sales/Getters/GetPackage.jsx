import { getWithAuthentication } from "Base"

const getPackage = (async (id, props) => {
    const result = await getWithAuthentication(`/package/get?id=${id}`, props)
    return result
})

export default getPackage

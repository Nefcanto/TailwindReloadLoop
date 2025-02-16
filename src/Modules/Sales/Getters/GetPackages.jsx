import { getWithAuthentication } from "Base"

const getPackages = (async props => {
    const { url } = props
    const { search } = url
    let newUrl = "/packages/data"
    if (search) {
        newUrl += `?${search.replace("?", "")}`
    }
    const result = await getWithAuthentication(newUrl, props)
    return result
})

export default getPackages

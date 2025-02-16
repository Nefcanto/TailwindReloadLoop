const buildUrl = ({
    pathAndQuery,
    localePathPrefix,
    path,
    queryParams,
}) => {
    let extraParams = ""
    let internalPath = path
    if (!pathAndQuery) {
        pathAndQuery = ""
    }
    if (pathAndQuery.includes("?")) {
        internalPath = pathAndQuery.split("?")[0]
        extraParams = pathAndQuery.split("?")[1]
    }
    else {
        internalPath = pathAndQuery || path
    }
    if (!queryParams) {
        queryParams = []
    }
    const mergedParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => {
        mergedParams.append(key, queryParams[key])
    })
    const keyValuePairs = extraParams.split('&')
    keyValuePairs.forEach(pair => {
        const [key, value] = pair.split('=')
        mergedParams.append(key, value)
    })
    if (localePathPrefix) {
        const url = `${localePathPrefix}/${internalPath}?${mergedParams.toString()}`.replace(/\/{2,}/g, '/')
        return url
    }
    else {
        const url = `/${internalPath}?${mergedParams.toString()}`.replace(/\/{2,}/g, '/')
        return url
    }
}

export default buildUrl

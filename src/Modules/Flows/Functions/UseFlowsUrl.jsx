const useFlowsUrl = ({
    entity,
    entityType,
    initialSearch,
    localePathPrefix,
    module,
    search,
}) => {

    if (localePathPrefix == undefined) {
        throw new Error("localePathPrefix was not provided")
    }
    let url = `${localePathPrefix}/track?module=${module}&entityType=${entityType}`
    if (entity) {
        url += `&entity=${entity}`
    }
    if (search) {
        url += `&search=${search}`
    }
    return url
}

export default useFlowsUrl

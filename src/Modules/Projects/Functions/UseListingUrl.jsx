const useListingUrl = ({
    category,
    cityDivision,
    localePathPrefix,
    search,
}) => {
    if (localePathPrefix == undefined) {
        throw new Error("localePathPrefix was not provided")
    }

    let url = `${localePathPrefix}/projects?`
    if (cityDivision) {
        url += `&city-division=${cityDivision}`
    }
    if (category) {
        url += `&category=${category}`
    }
    if (search) {
        url += `&search=${search}`
    }
    return url.replace("?&", "?")
}

export default useListingUrl

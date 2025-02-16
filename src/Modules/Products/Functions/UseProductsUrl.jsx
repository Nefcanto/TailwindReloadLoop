const useProductsUrl = ({
    brand,
    category,
    localePathPrefix,
    search,
}) => {
    if (localePathPrefix == undefined) {
        throw new Error("localePathPrefix was not provided")
    }

    let url = `${localePathPrefix}/products?`
    if (brand) {
        url += `&brand=${brand}`
    }
    if (category) {
        url += `&category=${category}`
    }
    if (search) {
        url += `&search=${search}`
    }
    return url.replace("?&", "?")
}

export default useProductsUrl

const useTagUrl = (slug, localePathPrefix) => {
    if (localePathPrefix == undefined) {
        throw new Error("localePathPrefix was not provided")
    }
    return `${localePathPrefix}/products?tag=${slug}`
}

export default useTagUrl

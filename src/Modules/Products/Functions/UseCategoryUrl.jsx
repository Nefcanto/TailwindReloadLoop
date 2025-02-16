const useCategoryUrl = (slug, localePathPrefix) => {
    if (localePathPrefix == undefined) {
        throw new Error("localePathPrefix was not provided")
    }
    return `${localePathPrefix}/products?category=${slug}`
}

export default useCategoryUrl

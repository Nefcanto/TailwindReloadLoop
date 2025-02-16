const useProductVariantsUrl = (slug, localePathPrefix) => {
    if (localePathPrefix == undefined) {
        throw new Error("localePathPrefix was not provided")
    }

    return `${localePathPrefix}/product/${slug}/variants`
}

export default useProductVariantsUrl

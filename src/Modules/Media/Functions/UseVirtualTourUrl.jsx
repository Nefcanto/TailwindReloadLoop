const useVirtualTourUrl = (slug, localePathPrefix) => {
    if (localePathPrefix == undefined) {
        throw new Error("localePathPrefix was not provided")
    }
    return `${localePathPrefix}/virtual-tour/${slug}`
}

export default useVirtualTourUrl

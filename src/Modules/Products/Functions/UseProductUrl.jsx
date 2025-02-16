const useProductUrl = (product, localePathPrefix, variant) => {
    if (localePathPrefix == undefined) {
        throw new Error("localePathPrefix was not provided")
    }
    if (variant) {
        return `${localePathPrefix}/product/${product?.slug || product}/${variant?.slug || variant}`
    }
    return `${localePathPrefix}/product/${product?.slug || product}`
}

export default useProductUrl

import { buildUrl } from "Base"

const useBrandUrl = ({
    brand,
    localePathPrefix
}) => {
    if (localePathPrefix == undefined) {
        throw new Error("localePathPrefix is not provided")
    }
    if (globalThis.settings.BrandNavigationExtra) {
        const url = buildUrl({
            localePathPrefix,
            pathAndQuery: globalThis.settings.BrandNavigationExtra,
            queryParams: {
                brand: brand.slug
            }
        })
        return url
    }
    return `${localePathPrefix}/brand/${brand.slug}`
}

export default useBrandUrl

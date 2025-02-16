import getLocale from "./GetLocale"

const getLocalePathPrefix = () => {
    const locale = getLocale()
    if (locale.key == globalThis.defaultLocale.key) {
        return ""
    }
    return `/${locale.key}`
}

export default getLocalePathPrefix

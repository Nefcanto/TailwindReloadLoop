import { getFromCacheOrApi } from "Base"

const getGlobalization = async props => {

    const { query } = props || {}
    const locale = query?.get("locale")

    const globalizationData = await getFromCacheOrApi(`/globalization/data?scopesCsv=all,site&interfacesCsv=all,site`, props)
    let mergedTranslations = {}
    if (Array.isArray(globalizationData.translations)) {
        globalizationData.translations.map(i => mergedTranslations = { ...mergedTranslations, ...i })
    }
    globalizationData.translations = mergedTranslations

    let currentLocale = globalizationData?.locales?.find(i => i.key == locale)
    const defaultLocale = globalizationData?.locales?.find(i => i.isDefault)

    if (!currentLocale) {
        currentLocale = globalizationData?.locale
    }

    const localesEnum = globalizationData?.locales?.reduce((locales, currentLocale) => {
        locales[currentLocale.key] = currentLocale.key
        return locales
    }, {})

    const localePathPrefix = currentLocale?.key === defaultLocale?.key ? "" : `/${currentLocale.key}`

    const getLocalizedPath = path => {
        return `${localePathPrefix}${path}`
    }

    return {
        ...globalizationData,
        currentLocale,
        defaultLocale,
        isRtl: currentLocale?.isRtl,
        localePathPrefix,
        localesEnum,
    }
}

export default getGlobalization

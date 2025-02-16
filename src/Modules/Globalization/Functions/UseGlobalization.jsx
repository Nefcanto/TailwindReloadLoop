import getLocale from "./GetLocale"

const useGlobalization = () => {
    const locale = getLocale()
    return {
        requestLocale: locale,
        supportedLocales: globalThis.supportedLocales
    }
}

export default useGlobalization

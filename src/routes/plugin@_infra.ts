// @ts-nocheck

import loadSettings from "../Base/SettingsLoader"
import getTenantDomain from "../Base/GetTenantDomain"

export const onRequest = async ({ url }) => {

    const { host } = url

    // if (globalThis.settings) {
    //     return globalThis.settings
    // }

    const settings = await loadSettings(true)
    globalThis.settings = settings

    let apiUrl = ""
    try {
        const domain = getTenantDomain(host)
        apiUrl = `${settings.ApiUrl}/globalization/data?scopesCsv=all,site&interfacesCsv=all,site&domain=${domain}`
        let res = await fetch(apiUrl)
        let retries = 0
        const maxRetries = 3
        while (res.status !== 200 && retries < maxRetries) {
            console.log(`${retries + 1}. Retrying to fetch ${apiUrl}`, res)
            retries++
            res = await fetch(apiUrl)
        }
        retries = 0
        const data = await res.json()

        const {
            defaultLocale,
            locales,
            locale,
        } = data

        globalThis.defaultLocale = defaultLocale
        globalThis.locales = locales
        globalThis.locale = locale
        return data

    } catch (error) {
        console.error(error, `Failed to fetch the globalization data from ${apiUrl}`)
    }
}

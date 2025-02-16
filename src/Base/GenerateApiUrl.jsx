import getTenantDomain from "./GetTenantDomain"

const generateApiUrl = (path, qwikRequestProps) => {
    const url = new URL(`${globalThis.settings.ApiUrl}${path}`)
    const domain = getTenantDomain(qwikRequestProps?.url?.hostname)
    url.searchParams.set("domain", domain)
    const locale = qwikRequestProps?.query?.get("locale")
    if (locale) {
        url.searchParams.set("locale", locale)
    }
    url.searchParams.sort()
    return url.toString()
}

export default generateApiUrl

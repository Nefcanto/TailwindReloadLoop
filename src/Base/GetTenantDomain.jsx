const getTenantDomain = host => {
    if (globalThis.settings.TenantDomain) {
        return globalThis.settings.TenantDomain
    }
    const tld = new URL(globalThis.settings.ApiUrl).hostname.split('.').pop()
    const domain = host?.replace(".local", `.${tld}`)
    return domain
}

export default getTenantDomain

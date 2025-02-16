const isDev = () => {
    if (globalThis.settings) {
        return globalThis.settings.IsDeveloping
    }
    const { PROD } = import.meta.env
    return !PROD
}

export default isDev

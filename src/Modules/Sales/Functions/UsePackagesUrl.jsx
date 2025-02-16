const usePackagesUrl = localePathPrefix => {
    if (localePathPrefix == undefined) {
        throw "localePathPrefix was not provided"
    }
    return `${localePathPrefix}/dashboard/packages`
}

export default usePackagesUrl

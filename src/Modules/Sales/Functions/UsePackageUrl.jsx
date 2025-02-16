const usePackageUrl = (id, localePathPrefix) => {
    if (localePathPrefix == undefined) {
        throw "localePathPrefix was not provided"
    }
    return `${localePathPrefix}/dashboard/package/${id}`
}

export default usePackageUrl

const useProjectsUrl = (localePathPrefix) => {
    if (localePathPrefix == undefined) {
        throw new Error("localePathPrefix was not provided")
    }
    return `${localePathPrefix}/projects`
}

export default useProjectsUrl

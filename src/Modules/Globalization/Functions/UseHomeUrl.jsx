const useHomeUrl = localePathPrefix => {
    if (localePathPrefix == undefined) {
        throw new Error("localePathPrefix was not provided")
    }
    return `${localePathPrefix == "" ? "/" : localePathPrefix}`
}

export default useHomeUrl

const useBlogUrl = localePathPrefix => {
    if (localePathPrefix == undefined) {
        throw new Error("localePathPrefix was not provided")
    }
    return `${localePathPrefix}/blog`
}

export default useBlogUrl

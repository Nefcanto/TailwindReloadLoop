const useDiscussionUrl = (slug, localePathPrefix) => {
    if (localePathPrefix == undefined) {
        throw new Error("localePathPrefix was not provided")
    }
    return `${localePathPrefix}/discussion/${slug}`
}

export default useDiscussionUrl

const usePostUrl = (post, localePathPrefix) => {
    if (localePathPrefix == undefined) {
        throw new Error("localePathPrefix was not provided")
    }
    return `${localePathPrefix}/post/${post?.slug || post}`
}

export default usePostUrl

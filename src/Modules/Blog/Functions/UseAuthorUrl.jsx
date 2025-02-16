const useAuthorUrl = (slugOrAuthor, localePathPrefix) => {
    const slug = (slugOrAuthor && slugOrAuthor.slug) ? slugOrAuthor.slug : slugOrAuthor
    if (localePathPrefix == undefined) {
        throw new Error("localePathPrefix was not provided")
    }
    return `${localePathPrefix}/blog/author/${slug}`
}

export default useAuthorUrl

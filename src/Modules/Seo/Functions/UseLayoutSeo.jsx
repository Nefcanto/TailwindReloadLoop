const useLayoutSeo = (loadData, resolveValue) => {
    console.log(loadData);

    const { settings } = resolveValue(loadData)
    if (!settings) {
        throw new Error("setting not loaded in layout.jsx")
    }
    const {
        googleAnalyticsId,
        googleTagManagerId,
        siteScripts,
    } = settings

    return {
        frontmatter: {
            googleAnalyticsId,
            googleTagManagerId,
            siteScripts,
        }
    }
}

export default useLayoutSeo

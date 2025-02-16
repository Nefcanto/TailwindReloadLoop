import { getFromCacheOrApi } from "Base"

const getCategoryPostsByConfigKeys = async (configKeys, props) => {
    let csv = ""
    configKeys.forEach(key => csv += `,${key}`)
    const posts = await getFromCacheOrApi(`/blog/getCategoryPostsByConfigKeys?configKeysCsv=${csv}`, props)

    return posts
}

export default getCategoryPostsByConfigKeys

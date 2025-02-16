import { getFromCacheOrApi } from "Base"

const getLatestPosts = async (count, props) => {
    const posts = await getFromCacheOrApi(`/blog/latestPosts?count=${count}`, props)
    return posts
}

export default getLatestPosts

import { component$ } from "@builder.io/qwik"
import { NotFound } from "Base"
import { useSeo } from "Seo"
import {
    Layout,
    loadBlog,
} from "Blog"
import { loadBlog as runnableLoader } from "Loaders"
import { Layout as RunnableLayout } from "BlogParts"

const Blog = component$(() => {

    const data = loadBlog().value
    const extraData = runnableLoader().value
    if (data === 404) {
        return <NotFound />
    }
    const {
        categories,
        latest,
        mostViewed,
        popular,
        posts,
        seo,
        tags,
    } = data || {}

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />
})

export default Blog

export { loadBlog }

export { runnableLoader }

const head = ({ resolveValue }) => {
    return useSeo(loadBlog, resolveValue)
}

export { head }

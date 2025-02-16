import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync
} from "Base"
import { getGlobalization } from "Globalization"
import { getLayout } from "Contents"
import { useEntityVisitCounter } from "Social"
import { getForm } from "Forms"

const loadPost = routeLoader$(async props => {
    const {
        params,
        status,
    } = props
    const { slug } = params || {}
    const [
        data,
        layout,
        globalization,
        form
    ] = await useAsync([
        getFromCacheOrApi(`/blogPost/get?slug=${slug}`, props),
        getLayout("post", props),
        getGlobalization(props),
        getForm(`comment`, props)
    ])
    if (data.error?.code === "404") {
        return status(404)
    }
    if (data.statusCode) {
        return status(data.statusCode)
    }
    const { content, ...contentLessForm } = form
    const { post } = data
    data.authors = post.relatedItems.authors
    if (data.authors && data.authors.length > 0) {
        data.author = data.authors[0]
    }
    let visitCount = 0
    if (post) {
        visitCount = await useEntityVisitCounter(post, props)
    }
    return {
        ...data,
        ...layout,
        ...globalization,
        ...contentLessForm,
        visitCount
    }
})

export default loadPost

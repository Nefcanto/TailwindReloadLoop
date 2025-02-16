import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync
} from "Base"
import { getLayout } from "Contents"
import { getGlobalization } from "Globalization"
import { useEntityVisitCounter } from "Social"

const loadPost = routeLoader$(async props => {
    const { params } = props
    const { slug } = params || {}
    const [
        data,
        layout,
        globalization
    ] = await useAsync([
        getFromCacheOrApi(`/vlogPost/get?slug=${slug}`, props),
        getLayout("vlog", props),
        getGlobalization(props)
    ])

    const { post } = data
    let visitCount = 0
    if (post) {
        visitCount = await useEntityVisitCounter(post, props)
    }

    return {
        ...data,
        ...layout,
        ...globalization,
        visitCount
    }
})

export default loadPost

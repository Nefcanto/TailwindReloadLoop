import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync
} from "Base"
import { getGlobalization } from "Globalization"
import { getLayout } from "Contents"
import { useEntityVisitCounter } from "Social"
import { getForm } from "Forms"

const loadEntry = routeLoader$(async props => {
    const {
        params,
        query,
        status,
    } = props
    const { slug } = params || {}
    const locale = query?.get("locale")
    const [
        data,
        layout,
        globalization,
        form
    ] = await useAsync([
        getFromCacheOrApi(`/entry/get?slug=${slug}&locale=${locale}`, props),
        getLayout("entry", props),
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
    const { entry } = data
    let visitCount = 0
    if (entry) {
        visitCount = await useEntityVisitCounter(entry, props)
    }
    return {
        ...data,
        ...layout,
        ...globalization,
        ...contentLessForm,
        visitCount
    }
})

export default loadEntry

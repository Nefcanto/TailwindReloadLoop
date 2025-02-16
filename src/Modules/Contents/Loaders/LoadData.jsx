import { routeLoader$ } from "@builder.io/qwik-city"
import { getLayout } from "Contents"
import {
    getFromCacheOrApi,
    useAsync
} from "Base"
import { getGlobalization } from "Globalization"
const loadData = routeLoader$(async (props) => {
    const {
        params,
        query,
        status,
        ...rest
    } = props
    const { slug } = params || {}
    const regex = /^(\/[^\/]*)?\/page\/([^/\?]+)\/?$/
    const locale = query.get("locale")

    const [
        data,
        sections,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(`/page/get?slug=${slug}`, props),
        getLayout("page", props),
        getGlobalization(props)
    ])
    if (data.error?.code === "404") {
        return status(404)
    }
    if (data.statusCode) {
        return status(data.statusCode)
    }

    return {
        ...data,
        ...sections,
        ...globalization
    }
})

export default loadData

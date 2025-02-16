import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync
} from "Base"
import { getLayout } from "Contents"
import { getGlobalization } from "Globalization"

const loadEpisode = routeLoader$(async (props) => {
    const {
        params,
        status,
        query
    } = props
    const { slug } = params || {}
    const locale = query?.get("locale")
    const [
        data,
        layout,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(`/episode/get?slug=${slug}&locale=${locale}`, props),
        getLayout("episode", props),
        getGlobalization(props),
    ])
    if (data.error?.code === "404") {
        return status(404)
    }
    if (data.statusCode) {
        return status(data.statusCode)
    }

    return {
        ...data,
        ...layout,
        ...globalization,
    }
})

export default loadEpisode


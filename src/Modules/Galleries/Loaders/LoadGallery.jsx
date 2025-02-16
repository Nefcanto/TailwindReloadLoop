import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync,
} from "Base"
import { getLayout } from "Contents"

const loadGallery = routeLoader$(async props => {
    const {
        params,
        status,
    } = props
    const { slug } = params || {}

    const [
        data,
        layout,
    ] = await useAsync([
        getFromCacheOrApi(`/gallery/get?slug=${slug}`, props),
        getLayout("gallery", props),
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
    }
})

export default loadGallery

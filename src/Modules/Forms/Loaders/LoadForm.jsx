import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync
} from "Base"
import { getGlobalization } from "Globalization"

const loadForm = routeLoader$(async props => {
    const {
        params,
        status,
    } = props
    const { slug } = params || {}

    const [
        data,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(`/form/get?slug=${slug}`, props),
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
        ...globalization
    }
})

export default loadForm

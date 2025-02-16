import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync,
} from "Base"
import { getGlobalization } from "Globalization"
import { getLayout } from "Contents"

const loadForums = routeLoader$(async props => {

    const {
        status,
        url,
    } = props

    const { search } = url

    let newUrl = `/forums/data${search}`

    const [
        data,
        layout,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(newUrl, props),
        getLayout("forums", props),
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

export default loadForums

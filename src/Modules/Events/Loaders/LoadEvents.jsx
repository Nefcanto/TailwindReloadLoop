import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync,
} from "Base"
import { getLayout } from "Contents"
import { getGlobalization } from "Globalization"

const loadEvents = routeLoader$(async props => {

    const { url } = props
    const { search } = url || {}

    let newUrl = "/events/data"

    if (search) {
        newUrl += search
    }

    const [
        data,
        layout,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(newUrl, props),
        getLayout("events", props),
        getGlobalization(props),
    ])

    return {
        ...data,
        ...layout,
        ...globalization,
    }
})

export default loadEvents

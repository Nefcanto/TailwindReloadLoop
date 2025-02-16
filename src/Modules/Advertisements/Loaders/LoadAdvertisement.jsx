import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync
} from "Base"
import { getLayout } from "Contents"
import { getForm } from "Forms"
import { getGlobalization } from "Globalization"

const loadAdvertisement = routeLoader$(async (props) => {
    const {
        params,
        status,
    } = props
    const { slug } = params || {}

    const [
        data,
        layout,
        postLayout,
        globalization,
        // form
    ] = await useAsync([
        getFromCacheOrApi(`/advertisement/get?slug=${slug}`, props),
        getLayout("advertisement", props),
        getGlobalization(props),
        // getForm(`comment`, props)
    ])
    if (data.error?.code === "404") {
        return status(404)
    }
    if (data.statusCode) {
        return status(data.statusCode)
    }
    // const { content, ...contentLessForm } = form
    return {
        ...data,
        ...layout,
        ...postLayout,
        ...globalization,
        // ...contentLessForm
    }
})

export default loadAdvertisement

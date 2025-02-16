import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync
} from "Base"
import { getGlobalization } from "Globalization"
import { getLayout } from "Contents"

const loadBoard = routeLoader$(async props => {
    const {
        params,
        status,
    } = props
    const { slug } = params || {}

    const [
        data,
        layout,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(`/board/get?slug=${slug}`, props),
        getLayout("board", props),
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

export default loadBoard

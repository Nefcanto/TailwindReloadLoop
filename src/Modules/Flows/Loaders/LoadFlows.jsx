import { routeLoader$ } from "@builder.io/qwik-city"
import {
    get,
    useAsync
} from "Base"
import {
    getGlobalization,
    applyGranularityInBatch,
} from "Globalization"
import { getLayout } from "Contents"

const loadFlows = routeLoader$(async props => {
    const {
        request,
        status,
    } = props
    const { url } = request
    const query = Object.fromEntries(new URL(url).searchParams.entries())
    const {
        entityType,
        module,
        search,
    } = query
    const apiUrl = `/flows/data?module=${module}&entityType=${entityType}&search=${search}`
    const [
        data,
        layout,
        globalization,
    ] = await useAsync([
        get(apiUrl, props),
        getLayout("flow", props),
        getGlobalization(props)
    ])
    applyGranularityInBatch(globalization.translations, [
        "Search",
        "NoResultsFound",
        "Results",
    ], "Flows")
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

export default loadFlows

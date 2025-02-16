import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync,
} from "Base"
import { getLayout } from "Contents"
import { getApplicationSettings } from "Settings"
import { getGlobalization } from "Globalization"

const loadCompare = routeLoader$(async props => {

    const { url } = props

    const { search } = url

    let newUrl = `/compare/data?${search.replace("?", "")}`

    const searchParams = new URLSearchParams(search)
    const entityType = searchParams.get("entityType")
    const ids = searchParams.get("ids").split(",")

    const [
        layout,
        globalization,
        settings,
        comparisonData
    ] = await useAsync([
        getLayout("compare", props),
        getGlobalization(props),
        getApplicationSettings(props),
        getFromCacheOrApi(newUrl, props),
    ])
    return {
        ...globalization,
        ...layout,
        ...settings,
        ...comparisonData,
    }
})

export default loadCompare

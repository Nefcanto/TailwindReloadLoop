import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync,
} from "Base"
import { getLayout } from "Contents"
import { getGlobalization } from "Globalization"

const loadProjects = routeLoader$(async props => {

    const { url } = props
    const { search } = url
    let newUrl = `/projects/data${search}`
    const [
        data,
        layout,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(newUrl, props),
        getLayout("projects", props),
        getGlobalization(props),

    ])

    return {
        ...data,
        ...layout,
        ...globalization
    }
})

export default loadProjects

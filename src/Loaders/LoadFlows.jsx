import { routeLoader$ } from "@builder.io/qwik-city"
import { useAsync } from "Base"
import { getPage } from "Contents"

const loadFlows = routeLoader$(async props => {

    const [
        data,
        page,
        globalization,
    ] = await useAsync([
        getPage("trucks", props),
    ])
    return {
        ...data,
        ...page,
        ...globalization
    }
})

export default loadFlows

import { routeLoader$ } from "@builder.io/qwik-city"
import { useAsync } from "Base"
import { getGlobalization } from "Globalization"
import { getPage } from "Contents"
import { getPackages } from "Sales"

const loadPackages = routeLoader$(async props => {

    const [
        page,
        globalization,
        packages
    ] = await useAsync([
        getPage("packages", props),
        getGlobalization(props),
        getPackages(props)
    ])
    return {
        ...page,
        ...globalization,
        ...packages
    }

})

export default loadPackages

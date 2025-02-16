import { routeLoader$ } from "@builder.io/qwik-city"
import { useAsync } from "Base"
import { getGlobalization } from "Globalization"
import { getPage } from "Contents"
import { getPackage } from "Sales"

const loadPackage = routeLoader$(async props => {

    const { params } = props
    const { id } = params
    const [
        page,
        globalization,
        data
    ] = await useAsync([
        getPage("package", props),
        getGlobalization(props),
        getPackage(id, props)
    ])
    return {
        ...page,
        ...globalization,
        ...data
    }

})

export default loadPackage

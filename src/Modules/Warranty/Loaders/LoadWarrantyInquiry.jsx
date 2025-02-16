import { routeLoader$ } from "@builder.io/qwik-city"
import { useAsync } from "Base"
import { getPage } from "Contents"
import { getGlobalization } from "Globalization"

const loadWarrantyInquiry = routeLoader$(async props => {

    const [
        page,
        globalization,
    ] = await useAsync([
        getPage("warrantyInquiry", props),
        getGlobalization(props),
    ])

    return {
        ...page,
        ...globalization,
    }
})

export default loadWarrantyInquiry

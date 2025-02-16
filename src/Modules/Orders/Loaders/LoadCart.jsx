import { routeLoader$ } from "@builder.io/qwik-city"
import { getPage } from "Contents"
import { getGlobalization } from "Globalization"
import { useAsync } from "Base"

const loadCart = routeLoader$(async (props) => {

    const [
        data,
        globalization,
    ] = await useAsync([
        getPage("cart", props),
        getGlobalization(props),
    ])

    return {
        ...data,
        ...globalization,
    }
})

export default loadCart

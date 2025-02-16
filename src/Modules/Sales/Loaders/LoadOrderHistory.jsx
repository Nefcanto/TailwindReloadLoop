import { routeLoader$ } from "@builder.io/qwik-city"
import { useAsync } from "Base"
import { getLayout } from "Contents"
import { getPackages } from "Sales"
import { getGlobalization } from "Globalization"

const loadOrderHistory = routeLoader$(async (props) => {
    const { sharedMap } = props
    const session = sharedMap.get("session")
    const [
        layout,
        packages,
        globalization,
    ] = await useAsync([
        getLayout("orderHistory", props),
        getPackages(props),
        getGlobalization(props),
    ])

    return {
        session,
        globalization,
        packages,
        ...layout,
    }
})

export default loadOrderHistory

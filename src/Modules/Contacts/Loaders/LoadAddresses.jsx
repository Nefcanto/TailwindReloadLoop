import { routeLoader$ } from "@builder.io/qwik-city"
import { useAsync } from "Base"
import { getLayout } from "Contents"
import { getAddresses } from "Contacts"
import { getGlobalization } from "Globalization"

const loadAddresses = routeLoader$(async (props) => {
    const { sharedMap } = props
    const session = sharedMap.get("session")

    const [
        addresses,
        layout,
        globalization,
    ] = await useAsync([
        getAddresses(props),
        getLayout("addresses", props),
        getGlobalization(props)
    ])

    return {
        addresses,
        session,
        globalization,
        ...layout,
    }
})

export default loadAddresses

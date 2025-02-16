import { routeLoader$ } from "@builder.io/qwik-city"
import { useAsync } from "Base"
import { getLayout } from "Contents"
import { getPersonInfo } from "Contacts"
import { getGlobalization } from "Globalization"
import { getSubscriptions } from "Subscriptions"

const loadSubscriptions = routeLoader$(async props => {
    const [
        personInfo,
        layout,
        globalization,
        subscriptions,
    ] = await useAsync([
        getPersonInfo(props),
        getLayout("subscriptions", props),
        getGlobalization(props),
        getSubscriptions(props)
    ])

    return {
        ...layout,
        globalization,
        personInfo,
        subscriptions,
    }
})

export default loadSubscriptions

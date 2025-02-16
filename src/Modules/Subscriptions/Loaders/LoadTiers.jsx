import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync
} from "Base"
import { getLayout } from "Contents"
import { getPersonInfo } from "Contacts"
import { getGlobalization } from "Globalization"

const loadTiers = routeLoader$(async props => {
    const { sharedMap } = props
    const session = sharedMap.get("session")
    const [
        personInfo,
        layout,
        globalization,
        tiers
    ] = await useAsync([
        getPersonInfo(props),
        getLayout("tiers", props),
        getGlobalization(props),
        getFromCacheOrApi("/tier/all", props)
    ])
    return {
        personInfo,
        session,
        ...globalization,
        ...layout,
        tiers,
    }
})

export default loadTiers

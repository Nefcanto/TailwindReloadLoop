import { routeLoader$ } from "@builder.io/qwik-city"
import { useAsync } from "Base"
import { getLayout } from "Contents"
import { getPersonInfo } from "Contacts"
import { getGlobalization } from "Globalization"

const loadProfile = routeLoader$(async (props) => {
    const { sharedMap } = props
    const session = sharedMap.get("session")
    const [
        personInfo,
        layout,
        globalization,
    ] = await useAsync([
        getPersonInfo(props),
        getLayout("profile", props),
        getGlobalization(props),
    ])

    return {
        personInfo,
        session,
        globalization,
        ...layout,
    }
})

export default loadProfile

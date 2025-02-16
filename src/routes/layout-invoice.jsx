import {
    component$,
    Slot,
} from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import {
    GoogleTagManagerNoScript,
    useAsync,
} from "Base"
import {
    getGlobalization,
    isRtl,
} from "Globalization"
import { getLayout } from "Contents"

const getData = routeLoader$(async props => {
    const [
        layout,
        globalization,
    ] = await useAsync([
        getLayout("invoice", props),
        getGlobalization(props),
    ])
    return {
        ...globalization,
        ...layout,
    }
})

const Layout = component$(() => {

    const data = getData().value

    return <div dir={isRtl() ? "rtl" : "ltr"}>
        <Slot />
    </div>
})

export default Layout

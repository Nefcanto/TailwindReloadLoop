import {
    component$,
    useVisibleTask$,
} from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import eruda from "eruda"

const DevTools = component$(() => {

    const { url } = useLocation()
    const { searchParams } = url
    const devTools = searchParams.get("devTools")

    useVisibleTask$(() => {
        if (devTools?.toLowerCase() === "true") {
            eruda.init()
        }
    })

    return null
})

export default DevTools

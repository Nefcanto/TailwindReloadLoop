import { component$ } from "@builder.io/qwik"
import { NotFound } from "Base"
import { useSeo } from "Seo"
import {
    VirtualTourLayout,
    loadVirtualTour,
} from "Media"
import { Layout as RunnableLayout } from "VirtualTourParts"

const index = component$(() => {

    const data = loadVirtualTour().value

    if (data === 404) {
        return <NotFound />
    }

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <VirtualTourLayout {...data} />

})

export default index

export { loadVirtualTour }

const head = ({ resolveValue }) => {
    return useSeo(loadVirtualTour, resolveValue)
}

export { head }

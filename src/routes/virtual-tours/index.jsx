import { component$ } from "@builder.io/qwik"
import {
    VirtualToursLayout,
    loadVirtualTours,
} from "Media"
import { useSeo } from "Seo"
import { Layout as RunnableLayout } from "VirtualToursParts"

const Index = component$(() => {

    const data = loadVirtualTours().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <VirtualToursLayout {...data} />
})

export default Index

export { loadVirtualTours }

const head = ({ resolveValue }) => {
    return useSeo(loadVirtualTours, resolveValue)
}

export { head }

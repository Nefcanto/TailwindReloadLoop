import { component$ } from "@builder.io/qwik"
import { NotFound } from "Base"
import { useSeo } from "Seo"
import {
    AdvertisementsLayout,
    loadAdvertisements,
} from "Advertisements"

import { Layout as RunnableLayout } from "AdvertisementsParts"

const Index = component$(() => {
    const data = loadAdvertisements().value

    if (data === 404) {
        return <NotFound />
    }
    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <AdvertisementsLayout {...data} />
})

export default Index

export { loadAdvertisements }

const head = ({ resolveValue }) => {
    return useSeo(loadAdvertisements, resolveValue)
}

export { head }

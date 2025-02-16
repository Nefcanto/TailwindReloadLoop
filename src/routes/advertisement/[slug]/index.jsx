import { component$ } from "@builder.io/qwik"
import { NotFound } from "Base"
import { useSeo } from "Seo"
import {
    AdvertisementLayout,
    loadAdvertisement,
} from "Advertisements"
import { Layout as RunnableLayout } from "AdvertisementParts"

const Advertisement = component$(() => {

    const data = loadAdvertisement().value

    if (data === 404) {
        return <NotFound />
    }

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <AdvertisementLayout {...data} />
})

export default Advertisement

export { loadAdvertisement }

const head = ({ resolveValue }) => {
    return useSeo(loadAdvertisement, resolveValue)
}

export { head }

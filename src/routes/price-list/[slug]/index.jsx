import { component$ } from "@builder.io/qwik"
import { NotFound } from "Base"
import { useSeo } from "Seo"
import {
    loadPriceList,
    PriceListLayout,
} from "Pricing"

import { Layout as RunnableLayout } from "PriceListParts"

export default component$(() => {

    const data = loadPriceList().value

    if (data === 404) {
        return <NotFound />
    }

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <PriceListLayout {...data} />
})

export { loadPriceList }

const head = ({ resolveValue }) => {
    return useSeo(loadPriceList, resolveValue)
}

export { head }

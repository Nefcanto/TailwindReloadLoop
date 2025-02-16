import { component$ } from "@builder.io/qwik"
import {
    BrandsLayout,
    loadBrands,
} from "Brands"
import { useSeo } from "Seo"
import { Layout as RunnableLayout } from "BrandsParts"

export default component$(() => {

    const data = loadBrands().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <BrandsLayout {...data} />
})

export { loadBrands }

const head = ({ resolveValue }) => {
    return useSeo(loadBrands, resolveValue)
}

export { head }

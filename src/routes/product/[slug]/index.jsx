import { component$ } from "@builder.io/qwik"
import { NotFound } from "Base"
import { useSeo } from "Seo"
import {
    loadProduct as loadProductBySlug,
    ProductLayout,
} from "Products"
import { loadProduct as runnableLoader } from "Loaders"
import { Layout as RunnableLayout } from "ProductParts"

const Product = component$(() => {

    const data = loadProductBySlug().value
    const extraData = runnableLoader().value

    if (data === 404) {
        return <NotFound />
    }

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <ProductLayout {...data} />
})

export default Product

export { loadProductBySlug }

export { runnableLoader }

const head = ({ resolveValue }) => {
    return useSeo(loadProductBySlug, resolveValue)
}

export { head }

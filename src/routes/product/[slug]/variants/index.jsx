import { component$ } from "@builder.io/qwik"
import { NotFound } from "Base"
import { useSeo } from "Seo"
import {
    loadProduct as loadProductWithVariants,
    ProductVariantsLayout,
} from "Products"
import { loadProductWithVariants as runnableLoader } from "Loaders"
import { Layout as RunnableLayout } from "ProductVariantsParts"

const ProductVariants = component$(() => {

    const data = loadProductWithVariants().value

    const extraData = runnableLoader().value

    if (data === 404) {
        return <NotFound />
    }

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <ProductVariantsLayout {...data} />
})

export default ProductVariants

export { loadProductWithVariants }

export { runnableLoader }

const head = ({ resolveValue }) => {
    return useSeo(loadProductWithVariants, resolveValue)
}

export { head }

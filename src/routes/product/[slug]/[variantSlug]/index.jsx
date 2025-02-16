import { component$ } from "@builder.io/qwik"
import { useSeo } from "Seo"
import {
    loadProduct as loadVariants,
    ProductLayout,
} from "Products"
import { Layout as RunnableLayout } from "ProductParts"

const Index = component$(() => {

    const data = loadVariants().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <ProductLayout {...data} />
})

export default Index

export { loadVariants }

const head = ({ resolveValue }) => {
    return useSeo(loadVariants, resolveValue)
}

export { head }

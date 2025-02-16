import {
    component$,
    useSignal,
} from "@builder.io/qwik"
import { useSeo } from "Seo"
import {
    Layout,
    loadProducts,
} from "Products"
import { Layout as RunnableLayout } from "ProductsParts"

const Index = component$(() => {

    const data = loadProducts().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />
})

export default Index

export { loadProducts }

const head = ({ resolveValue }) => {
    return useSeo(loadProducts, resolveValue)
}

export { head }

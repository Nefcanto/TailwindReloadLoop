import {
    component$,
    useSignal,
} from "@builder.io/qwik"
import { NotFound } from "Base"
import { useSeo } from "Seo"
import {
    loadData,
    Layout,
} from "Galleries"
import { Layout as RunnableLayout } from "GalleriesParts"

const Galleries = component$(() => {

    const data = loadData().value

    if (data === 404) {
        return <NotFound />
    }

    const {
        categories,
        latest,
        popular,
        galleries,
        seo,
    } = data || {}

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />
})

export default Galleries

export { loadData }

const head = ({ resolveValue }) => {
    return useSeo(loadData, resolveValue)
}

export { head }

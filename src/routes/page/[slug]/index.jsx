import { component$ } from "@builder.io/qwik"
import { NotFound } from "Base"
import { useSeo } from "Seo"
import {
    Layout,
    loadData,
} from "Contents"
import { Layout as RunnableLayout } from "PageParts"

const Page = component$(() => {

    const data = loadData().value

    if (data === 404) {
        return <NotFound />
    }

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />
})

export default Page

export { loadData }

const head = ({ resolveValue }) => {
    return useSeo(loadData, resolveValue)
}

export { head }

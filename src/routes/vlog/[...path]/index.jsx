import { component$ } from "@builder.io/qwik"
import { useSeo } from "Seo"
import {
    Layout,
    loadData,
} from "Vlog"
import { Layout as RunnableLayout } from "VlogParts"

const Index = component$(() => {

    const data = loadData().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />
})

export default Index

export { loadData }

const head = ({ resolveValue }) => {
    return useSeo(loadData, resolveValue)
}

export { head }

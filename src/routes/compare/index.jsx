import { component$ } from "@builder.io/qwik"
import { useSeo } from "Seo"
import { Layout as RunnableLayout } from "CompareParts"
import {
    Layout,
    loadCompare,
} from "Modules"

export default component$(() => {

    const data = loadCompare().value
    const {
        currentLocale,
    } = data

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />
})


export { loadCompare }

const head = ({ resolveValue }) => {
    return useSeo(loadCompare, resolveValue)
}

export { head }

import { component$ } from "@builder.io/qwik"
import { useSeo } from "Seo"
import {
    Layout,
    loadData,
} from "Courses"
import { Layout as RunnableLayout } from "CoursesParts"

export default component$(() => {

    const data = loadData().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />
})

export { loadData }

const head = ({ resolveValue }) => {
    return useSeo(loadData, resolveValue)
}

export { head }

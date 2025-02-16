import { component$ } from "@builder.io/qwik"
import {
    GlossaryLayout,
    loadGlossary,
} from "Glossary"
import { useSeo } from "Seo"
import { Layout as RunnableLayout } from "GlossaryParts"

const index = component$(() => {

    const data = loadGlossary().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <GlossaryLayout {...data} />
})

export default index

export { loadGlossary }

const head = ({ resolveValue }) => {
    return useSeo(loadGlossary, resolveValue)
}

export { head }

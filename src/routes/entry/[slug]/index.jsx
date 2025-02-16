import { component$ } from "@builder.io/qwik"
import { NotFound } from "Base"
import { useSeo } from "Seo"
import {
    EntryLayout,
    loadEntry,
} from "Glossary"
import { Layout as RunnableLayout } from "EntryParts"

const index = component$(() => {

    const data = loadEntry().value

    if (data === 404) {
        return <NotFound />
    }

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <EntryLayout {...data} />

})

export default index

export { loadEntry }

const head = ({ resolveValue }) => {
    return useSeo(loadEntry, resolveValue)
}

export { head }

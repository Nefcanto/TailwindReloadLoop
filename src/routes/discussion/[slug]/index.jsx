import { component$ } from "@builder.io/qwik"
import { NotFound } from "Base"
import { useSeo } from "Seo"
import {
    DiscussionLayout,
    loadDiscussion,
} from "Forums"
import { Layout as RunnableLayout } from "DiscussionParts"

const index = component$(() => {

    const data = loadDiscussion().value

    if (data === 404) {
        return <NotFound />
    }

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <DiscussionLayout {...data} />

})

export default index

export { loadDiscussion }

const head = ({ resolveValue }) => {
    return useSeo(loadDiscussion, resolveValue)
}

export { head }

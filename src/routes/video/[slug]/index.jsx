import {
    component$,
    useSignal,
} from "@builder.io/qwik"
import { useSeo } from "Seo"
import {
    loadPost,
    PostLayout,
} from "Vlog"
import { Layout as RunnableLayout } from "VlogPostParts"

const VlogPost = component$(() => {

    const data = loadPost().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <PostLayout {...data} />
})

export default VlogPost

export { loadPost }

const head = ({ resolveValue }) => {
    return useSeo(loadPost, resolveValue)
}

export { head }

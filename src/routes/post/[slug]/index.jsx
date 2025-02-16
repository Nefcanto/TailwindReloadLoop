import { component$ } from "@builder.io/qwik"
import { NotFound } from "Base"
import { useSeo } from "Seo"
import {
    loadPost,
    PostLayout,
} from "Blog"
import { loadPost as runnableLoader } from "Loaders"
import { Layout as RunnableLayout } from "PostParts"

const Index = component$(() => {

    const data = loadPost().value
    const extraData = runnableLoader().value

    if (data === 404) {
        return <NotFound />
    }

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <PostLayout {...data} />
})

export default Index

export { loadPost }

export { runnableLoader }

const head = ({ resolveValue }) => {
    return useSeo(loadPost, resolveValue)
}

export { head }

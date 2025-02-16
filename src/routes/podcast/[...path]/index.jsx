import { component$ } from "@builder.io/qwik"
import { useSeo } from "Seo"
import {
    loadPodcast,
    PodcastLayout,
} from "Podcast"
import { Layout as RunnableLayout } from "PodcastParts"

const Podcast = component$(() => {

    const data = loadPodcast().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <PodcastLayout {...data} />
})

export default Podcast

export { loadPodcast }

const head = ({ resolveValue }) => {
    return useSeo(loadPodcast, resolveValue)
}

export { head }

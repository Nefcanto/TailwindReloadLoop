import { component$ } from "@builder.io/qwik"
import { useSeo } from "Seo"
import {
    loadEpisode,
    EpisodeLayout,
} from "Podcast"
import { Layout as RunnableLayout } from "EpisodeParts"

const Episode = component$(() => {

    const data = loadEpisode().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <EpisodeLayout {...data} />
})

export default Episode

export { loadEpisode }

const head = ({ resolveValue }) => {
    return useSeo(loadEpisode, resolveValue)
}

export { head }

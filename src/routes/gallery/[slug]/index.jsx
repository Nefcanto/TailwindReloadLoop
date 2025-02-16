import { component$ } from "@builder.io/qwik"
import { useSeo } from "Seo"
import {
    GalleryLayout,
    loadGallery,
} from "Galleries"
import { Layout as RunnableLayout } from "GalleryParts"

const Index = component$(() => {

    const data = loadGallery().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <GalleryLayout {...data} />
})

export default Index

export { loadGallery }

const head = ({ resolveValue }) => {
    return useSeo(loadGallery, resolveValue)
}

export { head }

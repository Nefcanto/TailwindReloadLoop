import { component$ } from "@builder.io/qwik"
import { useSeo } from "Seo"
import {
    Layout,
    loadProjects,
} from "Projects"
import { Layout as RunnableLayout } from "ProjectsParts"

const Projects = component$(() => {

    const data = loadProjects().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />
})

export default Projects

export { loadProjects }

const head = ({ resolveValue }) => {
    return useSeo(loadProjects, resolveValue)
}

export { head }

import {
    component$,
    useContextProvider,
    useSignal
} from "@builder.io/qwik"
import { NotFound } from "Base"
import { useSeo } from "Seo"
import {
    loadProject,
    ProjectLayout,
} from "Projects"
import { loadProject as runnableLoader } from "Loaders"
import { Layout as RunnableLayout } from "ProjectParts"

const Project = component$(() => {

    const data = loadProject().value
    const extraData = runnableLoader().value || {}

    if (data === 404) {
        return <NotFound />
    }

    return RunnableLayout
        ?
        <RunnableLayout {...data} {...extraData} />
        :
        <ProjectLayout {...data} {...extraData} />
})

export default Project

export { loadProject }

export { runnableLoader }

const head = ({ resolveValue }) => {
    return useSeo(loadProject, resolveValue)
}

export { head }

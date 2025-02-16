import {
    component$,
    useVisibleTask$,
} from "@builder.io/qwik"
import {
    ForumsLayout,
    loadForums,
} from "Forums"
import { useSeo } from "Seo"
import { Layout as RunnableLayout } from "ForumParts"
import { loadForums as runnableLoader } from "Loaders"

const index = component$(() => {

    const data = loadForums().value
    const extraData = runnableLoader().value

    return RunnableLayout
        ?
        <RunnableLayout
            {...data}
            {...extraData}
        />
        :
        <ForumsLayout {...data} />

})

export default index

export { loadForums }

export { runnableLoader }

const head = ({ resolveValue }) => {
    return useSeo(loadForums, resolveValue)
}

export { head }

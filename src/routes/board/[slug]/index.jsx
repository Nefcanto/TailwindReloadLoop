import { component$ } from "@builder.io/qwik"
import { NotFound } from "Base"
import { useSeo } from "Seo"
import {
    BoardLayout,
    loadBoard,
} from "Forums"
import { Layout as RunnableLayout } from "BoardParts"

const index = component$(() => {

    const data = loadBoard().value

    if (data === 404) {
        return <NotFound />
    }

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <BoardLayout {...data} />

})

export default index

export { loadBoard }

const head = ({ resolveValue }) => {
    return useSeo(loadBoard, resolveValue)
}

export { head }

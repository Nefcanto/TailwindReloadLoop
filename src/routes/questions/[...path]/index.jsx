import {
    component$,
    useSignal,
} from "@builder.io/qwik"
import { useSeo } from "Seo"
import {
    loadQuestions,
    Layout,
} from "Questions"
import { Layout as RunnableLayout } from "QuestionsParts"

const Questions = component$(() => {

    const data = loadQuestions().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />
})

export default Questions

export { loadQuestions }

const head = ({ resolveValue }) => {
    return useSeo(loadQuestions, resolveValue)
}

export { head }

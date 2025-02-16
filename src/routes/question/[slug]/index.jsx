import { component$ } from "@builder.io/qwik"
import { NotFound } from "Base"
import { useSeo } from "Seo"
import {
    loadQuestion,
    QuestionLayout,
} from "Questions"
import { Layout as RunnableLayout } from "QuestionParts"

const Index = component$(() => {

    const data = loadQuestion().value

    if (data === 404) {
        return <NotFound />
    }

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <QuestionLayout {...data} />
})

export default Index

export { loadQuestion }

const head = ({ resolveValue }) => {
    return useSeo(loadQuestion, resolveValue)
}

export { head }

import { component$ } from "@builder.io/qwik"
import { NotFound } from "Base"
import { useSeo } from "Seo"
import { loadServices } from "Services"
import { Layout as RunnableLayout } from "ServicesParts"

const Index = component$(() => {

    const data = loadServices().value

    if (data === 404) {
        return <NotFound />
    }

    return <RunnableLayout {...data} />
})

export default Index

export { loadServices }

const head = ({ resolveValue }) => {
    return useSeo(loadServices, resolveValue)
}

export { head }

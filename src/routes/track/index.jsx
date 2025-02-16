import {
    $,
    component$,
    useComputed$,
    useSignal,
} from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import { useSeo } from "Seo"
import {
    loadFlows,
    FlowLayout,
} from "Flows"
import { loadFlows as runnableLoader } from "Loaders"
import { Layout as RunnableLayout } from "FlowParts"

const Index = component$(() => {

    const location = useLocation();
    const data = loadFlows().value
    const extraData = runnableLoader().value
    const term = useSignal("")
    const userIsSearching = useSignal(false)
    const systemIsSearching = useSignal(false)
    const searchDirty = useSignal(false)
    const emptySearch = useComputed$(() => {
        if (searchDirty.value === true && term.value?.trim() === "") {
            return true
        }
        return false
    })

    const getData = $(() => {
        systemIsSearching.value = true
        const newUrl = new URL(location.url);
        newUrl.searchParams.set('search', term.value);
        window.location.href = newUrl.toString();
    })

    const handleInput = $(e => {
        term.value = e.target.value
        systemIsSearching.value = false
    })

    const handleKeyDown = $(e => {
        if (e.key === "Enter") {
            getData()
        }
    })

    const inputBehavior = {
        onInput$: handleInput,
        onKeyDown$: handleKeyDown,
        onFocus$: $(e => userIsSearching.value = true),
        value: term.value,
    }

    const buttonBehavior = {
        onClick$: $(() => getData())
    }

    const props = {
        buttonBehavior,
        inputBehavior,
        systemIsSearching: systemIsSearching.value,
        userIsSearching: userIsSearching.value,
        ...data,
        ...extraData,
    }

    return RunnableLayout
        ?
        <RunnableLayout {...props} />
        :
        <FlowLayout {...props} />
})

export default Index

export { loadFlows }

export { runnableLoader }

const head = ({ resolveValue }) => {
    return useSeo(loadFlows, resolveValue)
}

export { head }

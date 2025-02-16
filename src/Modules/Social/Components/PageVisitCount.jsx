import {
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import { usePageVisitCounter } from "Social"

const PageVisitCount = component$(() => {
    const visitCount = useSignal(0)
    const location = useLocation()
    const url = useSignal(location.url)
    useVisibleTask$(async () => {
        const data = await usePageVisitCounter(url.value.pathname)
        visitCount.value = data

    }, {
        strategy: "document-ready"
    })

    return visitCount.value
})

export default PageVisitCount

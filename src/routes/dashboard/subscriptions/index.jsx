import {
    $,
    component$,
    useSignal,
} from "@builder.io/qwik"
import {
    loadSubscriptions,
    SubscriptionsLayout,
} from "Subscriptions"

const Index = component$(() => {

    const data = loadSubscriptions().value

    return <SubscriptionsLayout  {...data} />

})

export default Index

export { loadSubscriptions }

import { component$ } from "@builder.io/qwik"
import {
    loadPaymentResult,
    PaymentResultLayout,
} from "Payment"
import { Layout as RunnableLayout } from "PaymentParts"

const Index = component$(() => {
    const data = loadPaymentResult().value
    return RunnableLayout
        ?
        <RunnableLayout
            {...data}
        />
        :
        <PaymentResultLayout
            {...data}
        />
})

export default Index

export { loadPaymentResult }

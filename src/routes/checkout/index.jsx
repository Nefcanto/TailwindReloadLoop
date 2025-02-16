import { component$ } from "@builder.io/qwik"
import { checkLogin } from "Accounts"
import { useSeo } from "Seo"
import {
    CheckoutLayout,
    loadCheckout,
} from "Sales"
import { Layout as RunnableLayout } from "CheckoutParts"

export const onRequest = event => {
    checkLogin(event)
}

export default component$(() => {

    const data = loadCheckout().value

    return RunnableLayout
        ?
        <RunnableLayout
            {...data}
        />
        :
        <CheckoutLayout
            {...data}
        />
})

export { loadCheckout }

const head = ({ resolveValue }) => {
    return useSeo(loadCheckout, resolveValue)
}

export { head }

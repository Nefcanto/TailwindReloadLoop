import {
    $,
    component$,
    useSignal,
    useVisibleTask$,
} from "@builder.io/qwik"
import { useSession } from "Accounts"
import { useSeo } from "Seo"
import {
    CartLayout,
    getCart,
    loadCart,
} from "Orders"
import { Layout as RunnableLayout } from "CartParts"

export default component$(() => {

    const data = loadCart().value

    const cart = useSignal()

    const session = useSession()

    useVisibleTask$(async () => {
        cart.value = await getCart(session)
    })

    useVisibleTask$(() => {
        on("cartChanged", async () => {
            cart.value = await getCart(session)
        })
    })

    const props = {
        ...data,
        cart: cart
    }

    return RunnableLayout
        ?
        <RunnableLayout
            {...props}
        />
        :
        <CartLayout
            {...props}
        />
})

export { loadCart }

const head = ({ resolveValue }) => {
    return useSeo(loadCart, resolveValue)
}

export { head }

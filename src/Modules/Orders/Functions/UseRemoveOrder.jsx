import {
    $,
    useContext,
} from "@builder.io/qwik"
import {
    AppContext,
    post
} from "Base"
import { useAccounts } from "Accounts"

const userRemoveOrder = () => {
    const app = useContext(AppContext)
    const {
        isSignedIn,
        user
    } = useAccounts()

    const removeInLocaleStorage = $(() => {
        localStorage.removeItem("cart")
    })

    const removeInApi = $(async () => {
        await post("order/removeCart", {
            "user": user?.guid
        })
    })

    const removeCartHandler = $(async () => {
        if (isSignedIn) {
            await removeInApi()

        } else {
            await removeInLocaleStorage()
        }
        app.cart = undefined
        trigger("cartChanged")
    })

    return {
        removeCartHandler
    }

}

export default userRemoveOrder

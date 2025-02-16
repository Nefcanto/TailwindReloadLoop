import { post } from "Base"
import { useAccounts } from "Accounts"

const mergeCarts = async () => {
    const {
        isSignedIn,
        user
    } = useAccounts()
    const cart = localStorage.getItem("cart") || undefined

    if (!cart && !isSignedIn) {
        return;
    }
    const stringifiedCart = JSON.stringify(cart)
    const result = await post("/order/mergeCarts", {
        user: user?.guid,
        localCart: stringifiedCart
    })
    return result?.cart
}

export default mergeCarts

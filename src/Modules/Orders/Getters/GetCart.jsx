import { post } from "Base"

const getCart = async session => {

    let userGuid = null

    if (session?.value?.user && session?.value?.user?.guid) {
        userGuid = session.value.user.guid
    } else {
        if (session.user && session.user.guid) {
            userGuid = session.user.guid
        }
    }

    if (userGuid) {
        try {
            const { cart } = await post("/order/getCart", {
                "user": userGuid
            })
            return cart
        } catch (error) {
            console.log(error)
        }
    } else {
        const cart = localStorage.getItem("cart")
        if (cart) {
            const localCart = JSON.parse(cart)
            return localCart
        }
    }
}

export default getCart

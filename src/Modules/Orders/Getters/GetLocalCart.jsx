const getLocalCart = () => {
    const cart = localStorage.getItem("cart")
    if (cart) {
        const localCart = JSON.parse(cart)
        return localCart
    } else {
        return undefined
    }
}


export default getLocalCart

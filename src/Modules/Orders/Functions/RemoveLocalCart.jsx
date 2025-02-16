const removeLocalCart = () => {
    const cart = localStorage.getItem("cart")
    if (cart) {
        localStorage.removeItem("cart")
        return
    } else {
        return undefined
    }
}

export default removeLocalCart

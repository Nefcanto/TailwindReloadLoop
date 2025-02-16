import { $ } from "@builder.io/qwik"
import {
    post,
    useMessage
} from "Base"
import { useAccounts } from "Accounts"

const useDecreaseOrderItem = () => {

    const {
        isSignedIn,
        user
    } = useAccounts()

    const {
        error,
        success,
    } = useMessage()

    const decreaseQuantityLocally = $(entity => {
        let cart = localStorage.getItem("cart")
        const existingCart = JSON.parse(cart)
        const existingOrderItems = existingCart.orderItems
        const newOrderItems = existingOrderItems.map(orderItem => {
            if (orderItem.entity == (entity.guid || entity.id)) {
                orderItem.quantity -= 1
                orderItem.totalPrice = orderItem.totalPrice * orderItem.quantity
                return orderItem
            } else {
                return orderItem
            }
        })
        existingCart.orderItems = newOrderItems
        let newTotalQuantity = 0
        let newTotalPrice = 0
        newOrderItems.map(orderItem => {
            newTotalQuantity += orderItem.quantity
            newTotalPrice += orderItem.totalPrice
        })
        existingCart.order.totalPrice = newTotalPrice
        existingCart.order.totalQuantity = newTotalQuantity
        localStorage.setItem("cart", JSON.stringify(existingCart))
        success({
            message: "ordersOrderQuantityDecreased"
        })
        return existingCart
    })

    const decreaseQuantityInApi = $(async entity => {
        try {
            const requestBody = {
                "entity": entity.guid,
                "module": entity.relatedItems.module,
                "entityType": entity.relatedItems.entityType,
                "user": user.guid
            }
            const result = await post("order/decreaseQuantity", requestBody)
            success(result)
            trigger("cartChanged")
            return result.data
        } catch (e) {
            error(e)
        }
    })

    const decreaseQuantity = $(async entity => {
        if (isSignedIn) {
            const cart = await decreaseQuantityInApi(entity)
            return cart
        } else {
            const cart = await decreaseQuantityLocally(entity)
            return cart
        }
    })

    return {
        decreaseQuantity
    }
}

export default useDecreaseOrderItem

import { $ } from "@builder.io/qwik"
import {
    post,
    useMessage
} from "Base"
import { useAccounts } from "Accounts"

const useIncreaseOrderItem = () => {

    const {
        isSignedIn,
        user
    } = useAccounts()

    const {
        error,
        success,
    } = useMessage()

    const increaseQuantityLocally = $(entity => {
        let cart = localStorage.getItem("cart")
        const existingCart = JSON.parse(cart)
        const existingOrderItems = existingCart.orderItems
        const newOrderItems = existingOrderItems.map(orderItem => {
            if (orderItem.entity == (entity.guid || entity.id)) {
                orderItem.quantity += 1
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
            message: "ordersOrderQuantityIncreased"
        })
        return existingCart
    })

    const increaseQuantityInApi = $(async entity => {
        try {
            const requestBody = {
                "entity": entity.guid,
                "module": entity.relatedItems.module,
                "entityType": entity.relatedItems.entityType,
                "user": user.guid
            }
            const result = await post("order/increaseQuantity", requestBody)
            success(result)
            trigger("cartChanged")
            return result.data
        } catch (e) {
            error(e)
        }
    })

    const increaseQuantity = $(async entity => {
        if (isSignedIn) {
            const cart = await increaseQuantityInApi(entity)
            return cart
        } else {
            const cart = await increaseQuantityLocally(entity)
            return cart
        }
    })

    return {
        increaseQuantity
    }
}

export default useIncreaseOrderItem


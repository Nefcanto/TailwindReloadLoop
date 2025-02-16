import { $ } from "@builder.io/qwik"
import {
    post,
    useMessage
} from "Base"
import { useAccounts } from "Accounts"

const useDeleteOrderItem = () => {

    const {
        isSignedIn,
        user
    } = useAccounts()

    const {
        error,
        success,
    } = useMessage()

    const deleteOrderItemLocally = $(entity => {
        let cart = localStorage.getItem("cart")
        const existingCart = JSON.parse(cart)
        const existingOrderItems = existingCart.orderItems
        const newOrderItems = existingOrderItems.filter(orderItem => orderItem.entity != (entity.guid || entity.id))
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
            message: "ordersOrderOrderItemDeleted"
        })
        return existingCart
    })

    const deleteOrderItemInApi = $(async entity => {
        try {
            const requestBody = {
                "entity": entity.guid,
                "module": entity.relatedItems.module,
                "entityType": entity.relatedItems.entityType,
                "user": user.guid
            }
            const result = await post("order/deleteOrderItem", requestBody)
            success(result)
            trigger("cartChanged")
            return result.data
        } catch (e) {
            error(e)
        }
    })

    const deleteOrderItem = $(async entity => {
        if (isSignedIn) {
            const cart = await deleteOrderItemInApi(entity)
            return cart
        } else {
            const cart = await deleteOrderItemLocally(entity)
            return cart
        }
    })

    return {
        deleteOrderItem
    }
}

export default useDeleteOrderItem

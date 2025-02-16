import { $ } from "@builder.io/qwik"
import {
    post,
    useMessage
} from "Base"
import { useAccounts } from "Accounts"

const useAddOrderItem = () => {
    const {
        isSignedIn,
        user
    } = useAccounts()

    const {
        error,
        success,
    } = useMessage()

    const addItemLocally = $(async (entity, quantity) => {
        let cart = localStorage.getItem("cart")
        const existingCart = JSON.parse(cart)
        const existingOrderItems = existingCart?.orderItems || []
        const newOrderItems = [...existingOrderItems, {
            entityType: entity.relatedItems.entityType,
            entity: entity.guid,
            quantity: quantity,
            price: (entity.monetaryValuesMonetaryValueQuantity || 0),
            totalPrice: ((entity.monetaryValuesMonetaryValueQuantity || 0) * quantity),
            relatedItems: {
                entity: entity
            }
        }]
        let newTotalQuantity = 0
        let newTotalPrice = 0
        newOrderItems.map(orderItem => {
            newTotalQuantity += orderItem.quantity
            newTotalPrice += orderItem.totalPrice
        })
        let newCart = {
            order: {
                totalPrice: (newTotalPrice || 0),
                totalQuantity: newTotalQuantity,
            },
            orderItems: newOrderItems
        }
        localStorage.setItem("cart", JSON.stringify(newCart))
        success({
            message: "ordersOrderSuccessfullyAddedToCart"
        })
        return newCart
    })

    const addItem = $(async (entity, quantity) => {
        if (isSignedIn) {
            try {
                const result = await post("order/addItem", {
                    "module": entity.relatedItems.module,
                    "entityType": entity.relatedItems.entityType,
                    "entity": entity.guid,
                    "quantity": quantity,
                    "user": user?.guid
                })
                success(result)
                return result.data
            } catch (e) {
                error(e)
            }
        } else {
            let cart = null
            cart = localStorage.getItem("cart")
            cart = await addItemLocally(entity, quantity)
            success({
                message: "ordersOrderSuccessfullyAddedToCart"
            })
            return cart
        }
    })
    return {
        addItem
    }
}

export default useAddOrderItem

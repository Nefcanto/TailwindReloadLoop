import {
    $,
    useContext,
} from "@builder.io/qwik"
import { AppContext } from "Base"
import useAddOrderItem from "./UseAddOrderItem"
import useIncreaseOrderItem from "./UseIncreaseOrderItem"
import useRemoveOrder from "./UseRemoveOrder"
import useDecreaseOrderItem from "./UseDecreaseOrderItem"
import useDeleteOrderItem from "./UseDeleteOrderItem"
import { getCart } from "Orders"
import { useSession } from "Accounts"

const useOrders = () => {

    const session = useSession()
    const app = useContext(AppContext)
    const { increaseQuantity } = useIncreaseOrderItem()
    const { addItem } = useAddOrderItem()
    const { removeCartHandler } = useRemoveOrder()
    const { decreaseQuantity } = useDecreaseOrderItem()
    const { deleteOrderItem } = useDeleteOrderItem()

    const updateContextAndLocalStorage = $(async () => {
        app.cart = await getCart(session)
        trigger("cartChanged")
    })

    const getOrderItem = $(async entity => {
        const orderItem = app?.cart?.orderItems?.find(orderItem => orderItem?.entity == (entity?.guid || entity?.key || entity?.id))
        return orderItem
    })

    const hasEntityInCart = $(async entity => {
        if (app?.cart?.orderItems?.find(orderItem => orderItem?.entity == (entity?.guid || entity?.key || entity?.id))) {
            return true
        }
        return false
    })

    const addOrIncreaseHandler = $(async entity => {
        await updateContextAndLocalStorage()
        let cart = {}
        const hasEntity = await hasEntityInCart(entity)
        if (hasEntity) {
            cart = await increaseQuantity(entity)
        } else {
            cart = await addItem(entity, 1)
        }
        app.cart = cart

    })

    const deleteOrDecreaseOrderItemHandler = $(async entity => {
        await updateContextAndLocalStorage()
        let cart = {}
        const hasEntity = await hasEntityInCart(entity)
        if (!hasEntity) {
            return
        }
        const orderItem = await getOrderItem(entity)
        if (orderItem?.quantity == 1) {
            cart = await deleteOrderItem(entity)
        } else {
            cart = await decreaseQuantity(entity)
        }
        app.cart = cart
    })

    return {
        addOrIncreaseHandler,
        removeCartHandler,
        deleteOrDecreaseOrderItemHandler
    }

}

export default useOrders

import { component$ } from "@builder.io/qwik"
import {
    loadOrderHistory,
    OrderHistories,
} from "Sales"

const Index = component$(() => {

    const {
        globalization,
        orderHistoryStatics,
        packages,
        session,
    } = loadOrderHistory().value

    return <OrderHistories
        packages={packages}
        orderHistoryStatics={orderHistoryStatics}
        session={session}
        {...globalization}
    />
})

export default Index

export { loadOrderHistory }

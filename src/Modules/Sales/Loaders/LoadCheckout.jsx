import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getSession,
    useAsync,
} from "Base"
import { getGlobalization } from "Globalization"
import { getPage } from "Contents"
import { getShipmentMethods } from "Shipment"
import { getPayment } from "Payment"
import { getCart } from "Orders"
import { getAddresses } from "Contacts"

const loadCheckout = routeLoader$(async props => {
    const session = getSession(props)

    const [
        page,
        shipmentMethods,
        globalization,
        payment,
        cart,
        addresses
    ] = await useAsync([
        getPage("checkout", props),
        getShipmentMethods(props),
        getGlobalization(props),
        getPayment(props),
        getCart(session),
        getAddresses(props)
    ])
    return {
        ...globalization,
        ...page,
        ...payment,
        addresses,
        cart,
        shipmentMethods,
    }
})

export default loadCheckout

import { routeLoader$ } from "@builder.io/qwik-city"
import { useAsync } from "Base"
import { getLayout } from "Contents"
import { getGlobalization } from "Globalization"
import { getTruckInvoice } from "Trucks"

const loadTruckInvoice = routeLoader$(async props => {

    const { params } = props
    const { id } = params

    const [
        truckInvoice,
        invoiceLayout,
        truckInvoiceLayout,
        globalization,
    ] = await useAsync([
        getTruckInvoice(id, props),
        getLayout("invoice", props),
        getLayout("truckInvoice", props),
        getGlobalization(props),
    ])

    return {
        ...invoiceLayout,
        ...truckInvoiceLayout,
        ...globalization,
        truckInvoice
    }
})

export default loadTruckInvoice

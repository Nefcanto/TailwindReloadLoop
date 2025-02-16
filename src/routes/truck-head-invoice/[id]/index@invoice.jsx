import { component$ } from "@builder.io/qwik"
import { loadTruckInvoice } from "Trucks"
import { Layout } from "TruckInvoiceParts"

export default component$(() => {

    const data = loadTruckInvoice().value

    return <Layout {...data} />
})

export { loadTruckInvoice }

import {
    component$,
    useSignal,
} from "@builder.io/qwik"
import {
    InvoiceLayout,
    loadInvoice,
} from "Orders"
import { Layout as RunnableLayout } from "InvoiceParts"

export default component$(() => {

    const data = loadInvoice().value

    return RunnableLayout
        ?
        <RunnableLayout
            {...data}
        />
        :
        <InvoiceLayout
            {...data}
        />
})

export { loadInvoice }

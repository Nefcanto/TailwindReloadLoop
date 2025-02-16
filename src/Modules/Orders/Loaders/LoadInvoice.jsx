import { routeLoader$ } from "@builder.io/qwik-city"
import { getLayout } from "Contents"
import { getGlobalization } from "Globalization"
import { useAsync } from "Base"
import { getInvoice } from "Orders"

const loadInvoice = routeLoader$(async props => {

    const { params } = props
    const { id } = params

    const [
        invoice,
        data,
        globalization,
    ] = await useAsync([
        getInvoice(id),
        getLayout("invoice", props),
        getGlobalization(props),
    ])

    return {
        ...data,
        ...globalization,
        invoice
    }
})

export default loadInvoice

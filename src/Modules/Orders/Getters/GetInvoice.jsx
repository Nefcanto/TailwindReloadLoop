import { get } from "Base"

const getInvoice = (async id => {
    const { invoice } = await get(`/invoice/get?id=${id}`)
    return invoice
})

export default getInvoice

import { get } from "Base"

const getTruckInvoice = (async (id, qwikRequestProps) => {

    const {
        invoice,
        truck,
        truckInvoice,
    } = await get(`/TrucksInvoice/get?id=${id}`, qwikRequestProps)

    return {
        invoice,
        truck,
        truckInvoice
    }
})

export default getTruckInvoice

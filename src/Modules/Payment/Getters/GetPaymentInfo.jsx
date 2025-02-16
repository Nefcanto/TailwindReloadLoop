import { get } from "Base"

const getPaymentInfo = async () => {
    const { paymentMethods } = await get("/payment/data")
    return {
        paymentMethods
    }
}

export default getPaymentInfo

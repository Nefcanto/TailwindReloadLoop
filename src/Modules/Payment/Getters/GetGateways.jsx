import { get } from "Base"

const getGateways = async () => {
    const { gateways } = await get("/payment/data")
    return {
        gateways
    }
}

export default getGateways

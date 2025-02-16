import { getFromCacheOrApi } from "Base"

const getShipmentMethods = async props => {
    const shipmentMethods = await getFromCacheOrApi(`/shipmentMethod/all`, props)
    return shipmentMethods
}

export default getShipmentMethods

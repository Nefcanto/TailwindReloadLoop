import { getFromCacheOrApi } from "Base"
import { getApplicationSettings } from "Settings"

const getProductsByConfigKeys = async (configKeys, props) => {
    const { settings } = await getApplicationSettings(props)
    let csv = ""
    configKeys.forEach(key => csv += `,${settings[key] || ""}`)
    const configKeysCsv = configKeys.join(",")
    const products = await getFromCacheOrApi(`/products/getProductsByConfigKeys?configKeysCsv=${configKeysCsv}`, props)
    for (let product in products) {
        if (product === "milliseconds") {
            continue
        }
        // const key = getKeyFromValue(product)
        // products[key] = products[product]
    }
    return products
}

export default getProductsByConfigKeys

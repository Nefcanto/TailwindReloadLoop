import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync,
} from "Base"
import { getGlobalization } from "Globalization"
import { getPage } from "Contents"

const loadPaymentResult = routeLoader$(async props => {

    const {
        params,
        response,
        status,
        url,
    } = props

    const { id, pageNumber } = params || {}

    const [
        data,
        page,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(`/transaction/get?id=${id}`, props),
        getPage("paymentResult", props),
        getGlobalization(props),
    ])
    if (data.error?.code === "404") {
        return status(404)
    }
    if (data.statusCode) {
        return status(data.statusCode)
    }

    return {
        ...data,
        ...page,
        ...globalization,
    }
})

export default loadPaymentResult

import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync,
} from "Base"
import { getLayout } from "Contents"
import { getGlobalization } from "Globalization"

const loadPriceList = routeLoader$(async props => {

    const {
        url,
        params,
    } = props
    const { search } = url || {}
    const { slug } = params || {}

    let newUrl = `/priceList/data?slug=${slug}`

    // if (search) {
    //     newUrl += search
    // }

    const [
        data,
        layout,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(newUrl, props),
        getLayout("priceList", props),
        getGlobalization(props),
    ])

    return {
        ...data,
        ...layout,
        ...globalization,
    }
})

export default loadPriceList

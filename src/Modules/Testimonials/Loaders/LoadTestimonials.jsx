import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync,
} from "Base"
import { getGlobalization } from "Globalization"
import { getLayout } from "Contents"

const loadTestimonials = routeLoader$(async props => {

    const {
        status,
        url,
    } = props

    const { search } = url

    let newUrl = `/testimonials/data${search}`

    const [
        data,
        layout,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(newUrl, props),
        getLayout("testimonials", props),
        getGlobalization(props),
    ])

    return {
        ...data,
        ...layout,
        ...globalization,
    }
})

export default loadTestimonials

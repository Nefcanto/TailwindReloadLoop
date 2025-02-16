import { routeLoader$ } from "@builder.io/qwik-city"
import { getFromCacheOrApi } from "Base"

const loadInstructor = routeLoader$(async props => {

    const { slug } = props?.params || {}

    const url = `/instructor/get?slug=${slug}`

    const data = await getFromCacheOrApi(url, props)

    const { seo } = data

    return data
})

export default loadInstructor

import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync,
} from "Base"
import { getLayout } from "Contents"
import { getLatestPosts } from "Blog"
import { getGlobalization } from "Globalization"
import { getBrands } from "Brands"
import { getFilters } from "Base"

const loadProducts = routeLoader$(async props => {

    const { url } = props
    const { search } = url || {}

    let newUrl = "/products/data"

    if (search) {
        newUrl += search
    }

    const [
        data,
        layout,
        latestPosts,
        globalization,
        brands,
        filters,
        attributes,
    ] = await useAsync([
        getFromCacheOrApi(newUrl, props),
        getLayout("products", props),
        getLatestPosts(10, props),
        getGlobalization(props),
        getBrands(props),
        getFilters("Products", props),
    ])

    return {
        ...data,
        ...layout,
        ...globalization,
        ...brands,
        attributes,
        filters,
        latestPosts: latestPosts?.latestPosts,
    }
})

export default loadProducts

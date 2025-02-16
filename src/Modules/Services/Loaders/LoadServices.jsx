import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync,
} from "Base"
import {
    getLayout,
    getPage
} from "Contents"
import { getGlobalization } from "Globalization"

const loadServices = routeLoader$(async (props) => {

    const {
        params,
        response,
        status,
        url,
    } = props

    const { slug, pageNumber } = params || {}

    const { pathname, search } = url

    let newUrl = `/services/data?${search.replace("?", "")}`

    let matches = /\/services(\/\d+)?\/?$/.exec(pathname)

    if (matches != null) {
        const pageNumber = matches[1]
        if (pageNumber !== undefined) {
            newUrl += `&pageNumber=${pageNumber.replace("/", "")}`
        }
    }
    else {

        const secondSegments = ["category", "tag", "search"]

        if (pathname.split("/").length >= 2 && !secondSegments.includes(pathname.split("/")[2])) {
            return status(404)
        }

        for (let i = 0; i < secondSegments.length; i++) {
            const segment = secondSegments[i]

            if (pathname.startsWith(`/services/${segment}`)) {
                matches = new RegExp(`(?<=\\/services\\/${segment}\\/)[^/]+\\/?(\\d+)?\\/?$`).exec(pathname)
                if (matches == null) {
                    return status(404)
                }
                else {
                    newUrl += `&${segment}=${encodeURI(matches[0].split("/")[0])}`
                    const pageNumber = matches[1]
                    if (pageNumber !== undefined) {
                        newUrl += `&pageNumber=${pageNumber}`
                    }
                    break
                }
            }
        }
    }

    newUrl = newUrl.replace("?&", "?")

    const [
        data,
        layout,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(newUrl, props),
        getLayout("services", props),
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
        ...layout,
        ...globalization,
    }
})

export default loadServices

import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync,
} from "Base"
import { getLayout } from "Contents"
import { getGlobalization } from "Globalization"

const loadAdvertisements = routeLoader$(async (props) => {

    const {
        params,
        response,
        status,
        url,
    } = props

    const { pathname, search } = url

    let newUrl = `/advertisements/data?${search.replace("?", "")}`

    let matches = /\/advertisements(\/\d+)?\/?$/.exec(pathname)

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

            if (pathname.startsWith(`/advertisements/${segment}`)) {
                matches = new RegExp(`(?<=\\/advertisements\\/${segment}\\/)[^/]+\\/?(\\d+)?\\/?$`).exec(pathname)
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
        getLayout("advertisements", props),
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

export default loadAdvertisements

import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync,
} from "Base"
import { getLayout } from "Contents"
import { getGlobalization } from "Globalization"
import { getForm } from "Forms"

const loadQuestions = routeLoader$(async props => {

    const {
        params,
        response,
        url,
    } = props

    const { slug, pageNumber } = params || {}

    const { pathname, search } = url || {}

    let newUrl = `/questions/data?${search.replace("?", "")}`

    let matches = /\/questions(\/\d+)?\/?$/.exec(pathname)

    if (matches != null) {
        const pageNumber = matches[1]
        if (pageNumber !== undefined) {
            newUrl += `&pageNumber=${pageNumber.replace("/", "")}`
        }
    }
    else {

        const secondSegments = ["category", "tag", "author", "search"]

        if (pathname.split("/").length >= 2 && !secondSegments.includes(pathname.split("/")[2])) {
            response.status = 404
            return
        }

        for (let i = 0; i < secondSegments.length; i++) {
            const segment = secondSegments[i]

            if (pathname.startsWith(`/questions/${segment}`)) {
                matches = new RegExp(`(?<=\\/questions\\/${segment}\\/)[^/]+\\/?(\\d+)?\\/?$`).exec(pathname)
                if (matches == null) {
                    response.status = 404
                    return
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
        form
    ] = await useAsync([
        getFromCacheOrApi(newUrl, props),
        getLayout("questions", props),
        getGlobalization(props),
        getForm(`newQuestion`, props)
    ])

    return {
        ...data,
        ...layout,
        ...globalization,
        ...form,
    }
})

export default loadQuestions

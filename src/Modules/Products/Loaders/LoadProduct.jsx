import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync
} from "Base"
import { getLayout } from "Contents"
import { getForm } from "Forms"
import { getGlobalization } from "Globalization"

const loadProduct = routeLoader$(async props => {
    const {
        params,
        status,
    } = props
    const {
        slug,
        variantSlug,
    } = params || {}

    let newUrl = `/product/get?slug=${slug}`

    if (variantSlug && variantSlug !== "variants") {
        newUrl += `&variantSlug=${variantSlug}`
    }

    const [
        data,
        layout,
        globalization,
        commentForm,
        questionFormWithContent,
    ] = await useAsync([
        getFromCacheOrApi(newUrl, props),
        getLayout("product", props),
        getGlobalization(props),
        getForm(`comment`, props),
        getForm("question", props)
    ])
    if (data.error?.code === "404") {
        return status(404)
    }
    if (data.statusCode) {
        return status(data.statusCode)
    }

    const {
        content,
        ...contentLessForm
    } = commentForm
    const {
        content: questionContent,
        ...questionForm
    } = questionFormWithContent

    return {
        ...(
            variantSlug
            &&
            variantSlug !== "variants"
            &&
            { variantSlug }
        ),
        slug,
        ...data,
        ...layout,
        ...globalization,
        ...contentLessForm,
        questionForm,

    }
})

export default loadProduct

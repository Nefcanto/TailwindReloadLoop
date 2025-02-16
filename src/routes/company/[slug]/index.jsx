import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync
} from "Base"
import { getLayout } from "Contents"
import { useSeo } from "Seo"
import { Layout } from "CompanyParts"


const loadCompany = routeLoader$(async (props) => {
    const {
        params,
        status,
    } = props
    const { slug } = params || {}

    const [
        data,
        layout,
    ] = await useAsync([
        getFromCacheOrApi(`/company/get?slug=${slug}`),
        getLayout("company", props),
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
    }
})

const Index = component$(() => {

    const data = loadCompany().value

    return <Layout {...data} />
})

export default Index

export { loadCompany }

const head = ({ resolveValue }) => {
    return useSeo(loadCompany, resolveValue)
}

export { head }

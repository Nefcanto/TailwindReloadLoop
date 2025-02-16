import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import { useAsync } from "Base"
import { useSeo } from "Seo"
import { getPage } from "Contents"
import { getCompanies } from "Companies"
import { getGlobalization } from "Globalization"
import { Companies } from "CompaniesParts"
import { HeaderOffset } from "Layout"

const getData = routeLoader$(async (props) => {
    const [
        page,
        globalization,
        companies,
    ] = await useAsync([
        getPage("companies", props),
        getGlobalization(props),
        getCompanies(props),
    ])
    return {
        ...page,
        ...globalization,
        ...companies,
    }
})

const Index = component$(() => {

    const data = getData().value
    const {
        companies,
    } = data
    return <>
        <HeaderOffset />
        <Companies companies={companies} />
    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }


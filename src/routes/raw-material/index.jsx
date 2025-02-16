import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import { useAsync } from "Base"
import { useSeo } from "Seo"
import { getGlobalization } from "Globalization"
import { getPage } from "Contents"
import { getProductsByConfigKeys } from "Products"
import { HeaderOffset } from "Layout"
import {
    Intro,
    Production,
    Property,
    State,
    Summary,
} from "RawMaterial"

const getData = routeLoader$(async props => {

    const [
        globalization,
        page,
        products,
    ] = await useAsync([
        getGlobalization(props),
        getPage("rawMaterial", props),
        getProductsByConfigKeys(["rawMaterialProducts"], props)
    ])

    return {
        ...page,
        globalization,
        products
    }
})

const Index = component$(() => {

    const data = getData().value

    const {
        products,
        rawMaterialIntro,
        rawMaterialProduction,
        rawMaterialProperty,
        rawMaterialState,
        rawMaterialSummary,
    } = data

    return <>
        <HeaderOffset />
        <Intro
            rawMaterialIntro={rawMaterialIntro} />
        <Summary
            products={products}
            rawMaterialSummary={rawMaterialSummary}
        />
        <Property rawMaterialProperty={rawMaterialProperty} />
        <State rawMaterialState={rawMaterialState} />
        <Production
            products={products}
            rawMaterialProduction={rawMaterialProduction}
        />
    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }

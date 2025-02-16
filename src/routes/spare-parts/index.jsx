import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import { useAsync } from "Base"
import { useSeo } from "Seo"
import { getGlobalization } from "Globalization"
import { getProductsByConfigKeys } from "Products"
import { getPage } from "Contents"
import { HeaderOffset } from "Layout"
import {
    ContactUs,
    Hero,
    Products,
    Services,
} from "SpareParts"

const getData = routeLoader$(async props => {

    const [
        globalization,
        page,
        products
    ] = await useAsync([
        getGlobalization(props),
        getPage("spareParts", props),
        getProductsByConfigKeys(["sparePartsProducts"], props)

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
        sparePartsContactUs,
        sparePartsHero,
        sparePartsProducts,
        sparePartsServices,
    } = data
    return <>
        <HeaderOffset />
        <Hero hero={sparePartsHero} />
        <Products
            products={sparePartsProducts}
            productsItems={products}
        />
        <Services sparePartsServices={sparePartsServices} />
        <ContactUs sparePartsContactUs={sparePartsContactUs} />
    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }

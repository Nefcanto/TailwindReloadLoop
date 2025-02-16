import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import {
    Map,
    useAsync,
} from "Base"
import { getPage } from "Contents"
import { getGlobalization } from "Globalization"
import { getForm } from "Forms"
import { useSeo } from "Seo"
import { HeaderOffset } from "Layout"
import { PageHeader } from "Shared"
import {
    Form,
    Info,
} from "Contact"

const getData = routeLoader$(async props => {

    const [
        form,
        globalization,
        page,
    ] = await useAsync([
        getPage("contactUs", props),
        getForm("contact", props),
        getGlobalization(props),
    ])
    return {
        ...form,
        ...globalization,
        ...page,
    }
})

const Index = component$(() => {

    const data = getData().value
    const {
        contactInfo,
        contactUsHero,
        fields,
        form,
    } = data
    return <div class="max-w-6xl mx-auto px-5">
        <HeaderOffset />
        <PageHeader {...contactUsHero} />
        <Info {...contactInfo} />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-6 md:mt-10 lg:mb-10">
            <Form
                fields={fields}
                form={form}
            />
            <Map
                containerClass="w-full md:w-full h-[440px]"
                currentLocationMarker
                latitude={contactInfo?.mapLatitude}
                longitude={contactInfo?.mapLongitude}
                zoom="15"
            />

        </div>
    </div>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }

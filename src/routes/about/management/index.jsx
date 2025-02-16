import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import { useAsync } from "Base"
import { getPage } from "Contents"
import { getGlobalization } from "Globalization"
import {
    Hero,
    Introduction,
    MoreAboutUs
} from "Management"

const getData = routeLoader$(async (props) => {

    const [
        page,
        globalization,
    ] = await useAsync([
        getPage("aboutManagement", props),
        getGlobalization(props),
    ])
    return {
        ...page,
        ...globalization,
    }
})

const Index = component$(() => {

    const data = getData().value
    const {
        aboutHero,
        managementIntroduction,
        moreAboutUs,
    } = data
    return <>
        <Hero aboutHero={aboutHero} />
        <Introduction aboutManager={managementIntroduction} />
        <MoreAboutUs aboutUs={moreAboutUs} />
    </>
})

export default Index

import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import {
    Map,
    useAsync,
} from "Base"
import { useSeo } from "Seo"
import { getGlobalization } from "Globalization"
import { getPage } from "Contents"
import { getLatestPosts } from "Blog"
import { getMenu } from "Navigation"
import {
    CtaSection,
    Hero,
    Industries,
    Posts,
    Solutions,
    SpecialServicesCard,
    Stats,
} from "Index"

const getData = routeLoader$(async props => {
    const [
        page,
        menu,
        globalization,
        latestPosts,
    ] = await useAsync([
        getPage("home", props),
        getMenu(props),
        getGlobalization(props),
        getLatestPosts(10, props),
    ])
    return {
        ...globalization,
        ...menu,
        ...page,
        ...latestPosts,
    }
})

const Index = component$(() => {

    const data = getData().value
    const {
        contactInfo,
        cta,
        globalization,
        hero,
        industries,
        latestPosts,
        menuItems,
        posts,
        searchStatics,
        solutions,
        specialServicesCard,
        stats,
    } = data

    return <>
        <Hero
            {...data}
            {...globalization}
            {...hero}
            searchStatics={searchStatics}
        />
        <Solutions
            {...solutions}
            {...data}
        />
        <CtaSection
            {...cta}
            {...data}
        />
        <Industries {...industries} />
        <Stats
            {...stats}
            {...data}
        />
        <SpecialServicesCard services={specialServicesCard} />
        <Posts
            {...posts}
            {...data}
        />
        <Map
            containerClass="w-full aspect-[5/2] md:aspect-[5/1] relative z-10 -mb-10"
            currentLocationMarker
            latitude={contactInfo?.mapLatitude}
            longitude={contactInfo?.mapLongitude}
            zoom="15"
        />
    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }

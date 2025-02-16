import {
    component$,
    Slot,
    useContext,
    useVisibleTask$,
} from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import {
    AppContext,
    useAsync,
} from "Base"
import { useSession } from "Accounts"
import { getCart } from "Orders"
import {
    applyGranularity,
    getGlobalization,
    isRtl,
} from "Globalization"
import { getLayout } from "Contents"
import { getMenu } from "Navigation"
import { getApplicationSettings } from "Settings"
import { useLayoutSeo } from "Seo"
import {
    Footer,
    Header,
    Message,
    WhatsappFloatingAction,
} from "Layout"

const getData = routeLoader$(async props => {
    const [
        layout,
        menu,
        systemConfigs,
        globalization,
    ] = await useAsync([
        getLayout("main", props),
        getMenu(props),
        getApplicationSettings(props),
        getGlobalization(props),
    ])
    return {
        ...globalization,
        ...layout,
        ...menu,
        ...systemConfigs,
    }
})

const Layout = component$(() => {

    const session = useSession()
    const app = useContext(AppContext)
    const data = getData().value
    const { translations } = data

    useVisibleTask$(async () => {
        app.cart = await getCart(session)
        app.compare = []
    }, {
        strategy: "document-ready"
    })

    return <div
        class="relative"
        dir={isRtl() ? "rtl" : "ltr"}
    >
        <Message
            {...app}
            text={applyGranularity(data.translations, app.message)}
        />
        <Header {...data} />
        <Slot />
        <Footer {...data} />
        <WhatsappFloatingAction {...data} />
    </div>
})

export default Layout

const head = ({ resolveValue }) => {
    return useLayoutSeo(getData, resolveValue)
}

export { head }

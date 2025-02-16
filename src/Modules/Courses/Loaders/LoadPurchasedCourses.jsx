import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getSession,
    useAsync,
} from "Base"
import { getLayout } from "Contents"
import { getGlobalization } from "Globalization"
import { getPurchasedCourses } from "Courses"

const loadPurchasedCourses = routeLoader$(async props => {
    const session = getSession(props)

    const [
        purchasedCourses,
        layout,
        globalization,
    ] = await useAsync([
        getPurchasedCourses(props, session),
        getLayout("profile", props),
        getGlobalization(props),
    ])

    return {
        ...layout,
        ...globalization,
        purchasedCourses,
        session,
    }
})

export default loadPurchasedCourses

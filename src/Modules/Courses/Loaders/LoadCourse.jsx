import { routeLoader$ } from "@builder.io/qwik-city"
import {
    get,
    getFromCacheOrApi,
    getSession,
    useAsync
} from "Base"
import { getGlobalization } from "Globalization"
import { useEntityVisitCounter } from "Social"
import { getLayout } from "Contents"
import { getForm } from "Forms"

const loadCourse = routeLoader$(async props => {
    const { params } = props
    const { slug } = params || {}
    let courseStatus = {}
    const session = getSession(props)
    if (session?.user?.guid) {
        try {
            courseStatus = await get(`/learner/getCourseStatus?slug=${slug}&userGuid=${session.user.guid}`, props)
        } catch (error) {
            console.log("error checking purchase status", error)
        }
    }
    const newUrl = `/course/get?slug=${slug}`
    const [
        data,
        layout,
        globalization,
        form,
    ] = await useAsync([
        getFromCacheOrApi(newUrl, props),
        getLayout("course", props),
        getGlobalization(props),
        getForm(`comment`, props)
    ])
    const { content, ...contentLessForm } = form
    const { course } = data
    let visitCount = 0
    if (course) {
        visitCount = await useEntityVisitCounter(course, props)
    }
    return {
        courseStatus,
        ...data,
        ...layout,
        ...contentLessForm,
        ...globalization,
        visitCount
    }
})

export default loadCourse

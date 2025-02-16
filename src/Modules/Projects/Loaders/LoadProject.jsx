import { routeLoader$ } from "@builder.io/qwik-city"
import {
    getFromCacheOrApi,
    useAsync
} from "Base"
import { getLayout } from "Contents"
import { getForm } from "Forms"
import { getGlobalization } from "Globalization"
import { useEntityVisitCounter } from "Social"

const loadProject = routeLoader$(async props => {
    const {
        params,
        query,
        status,
    } = props

    const { slug } = params || {}
    const locale = query?.get("locale")
    const [
        data,
        layout,
        globalization,
        recommendedProjects,
        form
    ] = await useAsync([
        getFromCacheOrApi(`/project/get?slug=${slug}`, props),
        getLayout("project", props),
        getGlobalization(props),
        getFromCacheOrApi(`/project/recommendedProjects`, props),
        getForm(`comment`, props)
    ])

    if (data.error?.code === "404") {
        return status(404)
    }
    if (data.statusCode) {
        return status(data.statusCode)
    }
    const { content, ...contentLessForm } = form
    const { project } = data
    let visitCount = 0
    if (project) {
        visitCount = await useEntityVisitCounter(project, props)
    }
    return {
        ...data,
        ...layout,
        ...globalization,
        ...recommendedProjects,
        ...contentLessForm,
        visitCount
    }
})

export default loadProject

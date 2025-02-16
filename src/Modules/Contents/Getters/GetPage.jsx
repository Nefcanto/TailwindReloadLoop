import { getFromCacheOrApi } from "Base"
import { useSections } from "Contents"

const getPage = async (key, props) => {
    const { url } = props
    const { pathname } = url
    const page = await getFromCacheOrApi(`/page/get?key=${key}${pathname === "/" ? "&isHome=true" : ""}`, props)
    const transformedSections = useSections(page)
    const { sections, ...sectionlessPage } = page
    return {
        ...sectionlessPage,
        ...transformedSections
    }
}

export default getPage

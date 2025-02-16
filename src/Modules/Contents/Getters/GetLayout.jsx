import { getFromCacheOrApi } from "Base"
import { useSections } from "Contents"

const getLayout = async (key, props) => {

    const layout = await getFromCacheOrApi(`/layout/get?key=${key}`, props)
    const { sections, ...sectionlessLayout } = layout
    const transformedSections = useSections(layout)
    return {
        ...sectionlessLayout,
        ...transformedSections
    }
}

export default getLayout

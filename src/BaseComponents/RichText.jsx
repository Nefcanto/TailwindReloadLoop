import { component$ } from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import {
    Element,
    getTenantDomain,
    Toc,
} from "Base"

const RichText = component$(({
    content,
    hasToc,
    tocClosedByDefault,
    tocHeadingClass,
    tocScrollMarginTop,
    tocTitle,
    ...rest
}) => {

    let elements = content && JSON.parse(content)
    const { url } = useLocation()
    const domain = getTenantDomain(url.hostname)

    elements = elements?.map((element, index) => {
        if (element?.type == "heading-two") {
            if (element?.attributes) {
                element.attributes = [...element.attributes, { name: "id", value: `h2-${index}` }]
                return element
            }
            element.attributes = [{ name: "id", value: `h2-${index}` }]
            return element
        }
        return element
    })

    const headingTwoElements = elements?.filter(i => i.type == "heading-two")

    return <div
        class={"richText " + (rest.class || "")}
    >
        {
            hasToc && <Toc
                closedByDefault={tocClosedByDefault}
                headingClass={tocHeadingClass}
                headingTwoElements={headingTwoElements}
                scrollMarginTop={tocScrollMarginTop}
                title={tocTitle}
            />
        }
        {
            elements?.map((item, index) => <Element
                key={index}
                domain={domain}
                headingTwoElements={headingTwoElements}
                {...item}
                {...rest}
            />)
        }
    </div>
})

export default RichText

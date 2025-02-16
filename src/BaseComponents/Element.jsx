import * as Components from "RichTextComponents"

const Element = ({
    attributes,
    children,
    domain,
    headingTwoElements,
    text,
    type,
    ...rest
}) => {

    const transformedAttributes = attributes?.reduce((attrs, current) => {
        attrs[current.name.toLowerCase()] = current.value
        return attrs
    }, {})

    if (type === "component") {
        const { componentName } = rest
        const Component = Components[componentName]
        if (!Component)
            return <div class="w-full border border-red-600 border-dashed p-10 text-center">Component {componentName} is not implemented</div>

        return <Component {...transformedAttributes} {...rest} />
    }

    const {
        a,
        blockQuote,
        h1,
        h2,
        h3,
        h4,
        hr,
        img,
        li,
        ol,
        p,
        table,
        tableCell,
        tableRow,
        ul,
    } = rest

    const log = () => {
        console.table({
            attributes: JSON.stringify(attributes),
            children: JSON.stringify(children),
            rest: JSON.stringify(rest),
            text,
            type,
        })
    }

    if (text) {
        return <span {...transformedAttributes} {...rest} class={`${Object.getOwnPropertyNames(rest).reduce((a, b) => `${a} ${b}`, "")} `}>{text}</span>
    }

    const childElements = children?.map((child, index) => {
        return <Element
            key={index}
            domain={domain}
            {...child}
        />
    })

    switch (type) {
        case "block-quote":
            return <blockquote
                class={blockQuote || "text-xl italic font-semibold text-gray-900 mt-3 mb-2"}
                {...transformedAttributes}
            >
                {childElements}
            </blockquote>
        case "bulleted-list":
            return <ul
                class={ul || "space-y-1 list-disc list-inside"}
                {...transformedAttributes}
            >
                {childElements}
            </ul>
        case "heading-one":
            return <h1
                class={h1 || "text-3xl font-black mt-7 mb-3"}
                {...transformedAttributes}
            >
                {childElements}
            </h1>
        case "heading-two":
            return <h2

                class={h2 || "text-2xl font-bold mt-7 mb-3"}
                {...transformedAttributes}
            >
                {childElements}
            </h2>
        case "heading-three":
            return <h3
                class={h3 || "text-xl font-bold mt-4 mb-3"}
                {...transformedAttributes}
            >
                {childElements}
            </h3>
        case "heading-four":
            return <h4
                class={h4 || "text-lg font-bold mt-4 mb-3"}
                {...transformedAttributes}
            >
                {childElements}
            </h4>
        case "horizontal-rule":
            return <hr
                class={hr || p || ""}
            />
        case "list-item":
            return <li
                class={li || ""}
                {...transformedAttributes}
            >
                {childElements}
            </li>
        case "numbered-list":
            return <ol
                class={ol || "space-y-1 list-decimal list-inside"}
                {...transformedAttributes}
            >
                {childElements}
            </ol>
        case "list-entity":
            return <li
                class={li || "mx-2"}
                {...transformedAttributes}
            >
                {childElements}
            </li>
        case "paragraph":
            return <p
                class={p || "mb-2.5 text-lg"}
                {...transformedAttributes}
            >
                {childElements}
            </p>
        case "table":
            return <table class={table || "border-none my-5"}>
                <tbody {...transformedAttributes}>
                    {childElements}
                </tbody>
            </table>
        case "table-row":
            return <tr
                class={tableRow || ""}
                {...transformedAttributes}
            >
                {childElements}
            </tr>
        case "table-cell":
            return <td
                class={tableCell || "py-4 px-2 border border-slate-200"}
                {...transformedAttributes}
            >
                {childElements}
            </td>
        case "image":
            const url = rest.url + `?domain=${domain}`
            return <img
                alt={rest.alt}
                class={img || "h-auto max-w-full my-6 mx-auto"}
                src={url}
                title={rest.title}
                {...transformedAttributes}
            >
                {childElements}
            </img>


        case "link":
            return <a
                class={a || "font-medium text-blue-600 hover:underline"}
                download={rest.isDownload}
                href={rest.href}
                target={rest.target}
                {...transformedAttributes}
            >
                {childElements}
            </a>
        case "raw-html":
            return <div
                class="raw-html"
                dangerouslySetInnerHTML={rest.content}
            >
            </div>
        case "details":
            return <details>
                {childElements}
            </details>
        case "summary":
            return <summary>
                {childElements}
            </summary>
        default:
            return <span
                data-nonValidElement
                {...transformedAttributes}>{childElements}</span>
    }
}

export default Element

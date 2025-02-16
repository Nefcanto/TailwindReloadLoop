import { component$ } from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    FiresPageIcon,
    LastPageIcon,
    merge,
} from "Base"
import { isRtl } from "Globalization"

const Pagination = component$(({
    activeClass,
    container,
    count,
    ellipses,
    first,
    items,
    last,
    metadata,
    next,
    previous,
}) => {

    const pageNumber = metadata?.pageNumber
    const countOrDefault = count ? +count : 5
    const PageNumberOrDefault = pageNumber ? +pageNumber : 1
    const lastPageNumber = Math.ceil(metadata?.totalCount / metadata?.pageSize)

    const pages = [...Array(countOrDefault || 5).keys()]
    const middleCount = Math.floor(countOrDefault / 2)

    const isAllDataShown = metadata?.pageSize >= metadata?.totalCount
    const { url } = useLocation()
    const { pathname, searchParams } = url

    const getLink = (newPageNumber) => {
        let newSearchParams = searchParams
        if (newPageNumber == 1) {
            newSearchParams.delete("page-number")
        }
        else {
            newSearchParams.set("page-number", newPageNumber)
        }
        return `${pathname}${searchParams.size > 0 ? `?${searchParams.toString()}` : ""}`
    }

    const firstMarkup = metadata?.pageNumber > 1 &&
        <>
            <a
                href={getLink(1)}
                aria-label={`Go to the first page`}
                class={merge("flex items-center justify-center text-inherit", items)}

            >
                {
                    typeof first == "string" || typeof first == "boolean"
                        ?
                        <>
                            {
                                isRtl()
                                    ?
                                    <LastPageIcon class={merge("text-inherit w-6 aspect-square", first)} />
                                    :
                                    <FiresPageIcon class={merge("text-inherit w-6 aspect-square", first)} />
                            }

                        </>
                        :
                        { first }
                }
            </a>
            {
                ellipses && !previous &&
                !(PageNumberOrDefault <= Math.ceil(countOrDefault / 2)) &&
                <span class={`relative inline-flex items-center ${ellipses}`}>
                    ...
                </span>
            }
        </>

    const previousMarkup = metadata?.pageNumber > 1 &&
        <>
            <a
                href={getLink(metadata?.pageNumber - 1)}
                aria-label={`Go to the previous page`}
                class={merge("flex items-center justify-center text-inherit", items)}
            >
                <span class="sr-only">
                    previous page
                </span>

                {
                    typeof previous == "string" || typeof previous == "boolean"
                        ?
                        <>
                            {
                                isRtl()
                                    ?
                                    <ChevronRightIcon class={merge("text-inherit w-6 aspect-square", previous)} />
                                    :
                                    <ChevronLeftIcon class={merge("text-inherit w-6 aspect-square", previous)} />
                            }
                        </>
                        :
                        { previous }
                }
            </a>
            {
                ellipses &&
                !(PageNumberOrDefault <= Math.ceil(countOrDefault / 2)) &&
                <span class={`relative inline-flex items-center ${ellipses}`}>
                    ...
                </span>
            }
        </>

    const nextMarkup = metadata?.pageNumber < lastPageNumber &&
        <>
            {
                ellipses &&
                !(PageNumberOrDefault + middleCount >= lastPageNumber) &&
                <span class={`relative inline-flex items-center ${ellipses}`}>
                    ...
                </span>
            }
            <a
                href={getLink(metadata?.pageNumber + 1)}
                aria-label={`Go to the next page`}
                class={merge("flex items-center justify-center text-inherit", items)}
            >
                {
                    typeof next == "string" || typeof next == "boolean"
                        ?
                        <>
                            {
                                isRtl()
                                    ?
                                    <ChevronLeftIcon class={merge("text-inherit w-6 aspect-square", next)} />
                                    :
                                    <ChevronRightIcon class={merge("text-inherit w-6 aspect-square", next)} />
                            }
                        </>
                        :
                        { next }
                }
            </a>
        </>

    const lastMarkup = metadata?.pageNumber < lastPageNumber &&
        <>
            {
                ellipses && !next && !(PageNumberOrDefault + middleCount >= lastPageNumber) &&
                <span class={`relative inline-flex items-center ${ellipses}`}>
                    ...
                </span>
            }
            <a
                href={getLink(lastPageNumber)}
                aria-label={`Go to the last page`}
                class={merge("flex items-center justify-center text-inherit", items)}
            >
                {
                    typeof last == "string" || typeof last == "boolean"
                        ?
                        <>
                            {
                                isRtl()
                                    ?
                                    <FiresPageIcon class={merge("text-inherit w-6 aspect-square", last)} />
                                    :
                                    <LastPageIcon class={merge("text-inherit w-6 aspect-square", last)} />
                            }

                        </>
                        :
                        { last }
                }

            </a>
        </>

    return <div>
        {
            !isAllDataShown &&
            <nav class={`pagination flex items-center justify-center isolate-space-x-px flex-wrap text-center select-none ${container || ""}`}>
                {first && firstMarkup}
                {previous && previousMarkup}
                {
                    pages.map((item, index) => {
                        if (
                            PageNumberOrDefault >= 1 &&
                            PageNumberOrDefault <= lastPageNumber &&
                            PageNumberOrDefault + index - middleCount > 0 &&
                            PageNumberOrDefault + index - middleCount <= lastPageNumber
                        ) {
                            return <a
                                key={index}
                                aria-label={`Go to the page ${PageNumberOrDefault + index - middleCount}`}
                                class={merge(`relative inline-flex items-center numbers ${items}`,
                                    ` ${metadata?.pageNumber == (PageNumberOrDefault + index - middleCount) ? activeClass : ""}`)}
                                href={getLink(PageNumberOrDefault + index - middleCount)}
                            >
                                {PageNumberOrDefault + index - middleCount}
                            </a>
                        }
                    })
                }
                {next && nextMarkup}
                {last && lastMarkup}
            </nav>
        }

    </div>
})

export default Pagination

import { component$ } from "@builder.io/qwik"
import {
    DefaultBreadcrumb,
    Duration,
    Image,
    LocalizedDate,
    Pagination,
} from "Base"
import { FaqPages } from "Seo"
// import { Calendar } from "Svg"
import { usePostUrl } from "Vlog"

const Layout = component$(({
    breadcrumb,
    currentLocale,
    faqPages,
    localePathPrefix,
    localesEnum,
    videos,
    ...rest
}) => {

    return <section>
        <div class="w-full bg-gray-100">
            <DefaultBreadcrumb
                breadcrumb={breadcrumb}
                wrapperClass="max-w-7xl mx-auto px-6 py-3 flex items-center text-sm text-white overflow-x-auto"
                itemClass="min-w-fit whitespace-nowrap text-black hover:text-custom-color1 transition-all"
                lastItemClass="text-black"
                separatorClass="text-gray-500 mx-2"
            />
        </div>

        <div class="max-w-7xl px-6 mx-auto my-10">

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-6">
                {
                    videos?.data?.map && videos.data.map(item => <>
                        <a
                            class="w-full p-5 mx-auto rounded-lg"
                            href={usePostUrl(item.slug, localePathPrefix)}
                            key={item?.id}
                        >
                            <div class="relative">
                                <Image
                                    src={item?.relatedItems?.thumbnailUrl}
                                    alt={item?.title}
                                    containerClass="w-full aspect-video"
                                />
                                <span class="absolute z-10 end-3 bottom-3 px-1 pt-1 bg-neutral-800 text-white text-xs">
                                    <Duration seconds={item?.durationInSecond} />
                                </span>
                            </div>

                            <div class="line-clamp-1 my-2">
                                {item?.title}
                            </div>

                            <div class="flex justify-between items-center gap-2 text-xs">
                                <div class="flex items-center gap-1">
                                    {/* <Calendar
                                        class="w-4 aspect-square fill-custom-color1"
                                    /> */}
                                    <LocalizedDate
                                        localeKey={currentLocale?.key}
                                        localesEnum={localesEnum}
                                        utcDate={item?.utcDate}
                                    />
                                </div>
                            </div>

                        </a>
                    </>)
                }
            </div>

            <Pagination
                container="flex flex-wrap gap-2 max-w-7xl mx-auto px-6 mt-5 mb-20"
                items="flex items-center justify-center w-8 sm:w-10 aspect-square border-2 rounded-lg border-custom-color2 text-custom-color2 text-xs sm:text-base hover:bg-custom-color1 hover:border-custom-color1 hover:text-custom-color2 transition-all"
                activeClass="bg-custom-color1 border-custom-color2"
                ellipses
                next="w-10 aspect-square p-1 sm:p-2"
                last="w-10 aspect-square p-1 sm:p-2"
                previous="w-10 aspect-square p-1 sm:p-2"
                first="w-10 aspect-square p-1 sm:p-2"
                metadata={videos.metadata}
            />

            <FaqPages
                containerClass="bg-gray-100 shadow-none text-black"
                arrowClass="bg-white fill-custom-color1 rounded-full"
                faqPages={faqPages}
            />
        </div>
    </section>
})

export default Layout

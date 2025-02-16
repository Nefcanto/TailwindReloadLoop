import {
    Duration,
    Image,
    LocalizedDate,
} from "Base"
import { usePostUrl } from "Vlog"
// import { Calendar } from "Svg"

const Related = ({
    currentLocale,
    localePathPrefix,
    localesEnum,
    posts,
    // title,
}) => {
    return <>
        {/* <div class="text-neutral-600 font-bold text-lg mt-12 mb-4">
            {title}
        </div> */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                posts?.map(item => <>
                    <a
                        class="relative z-10 w-full p-5 mx-auto rounded-lg"
                        href={usePostUrl(
                            item?.slug,
                            localePathPrefix
                        )}
                        key={item?.id}
                    >
                        <div class="relative">
                            <Image
                                alt={item?.title}
                                containerClass="w-full aspect-[1/.5]"
                                src={item?.relatedItems?.thumbnailUrl}
                            />
                            <span class="absolute z-10 end-3 bottom-3 px-1 pt-1 bg-neutral-800 text-white text-xs">
                                <Duration seconds={item?.durationInSecond} />
                            </span>
                        </div>
                        <div class="line-clamp-1 my-2">
                            {item?.title}
                        </div>

                        <div class="flex justify-between items-center gap-2 text-xs text-custom-color21">
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
    </>
}

export default Related

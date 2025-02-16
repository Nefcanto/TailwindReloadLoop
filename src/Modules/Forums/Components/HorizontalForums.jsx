import { Image } from "Base"
import { useForumsUrl } from "Forums"

const HorizontalForums = ({
    forumsImage,
    forumsSubtitle,
    forumsTitle,
    items,
    localePathPrefix,
}) => {

    return <div class="w-full relative bg-custom-color1 p-5">
        <Image
            alt={forumsTitle}
            containerClass="absolute z-0 start-0 top-0 w-full h-full"
            priority
            src={forumsImage}
        />
        <div class="absolute z-10 start-0 top-0 w-full h-full bg-custom-color1/80"></div>
        <div class="relative z-20 w-full lg:container mx-auto p-5 bg-white rounded-2xl">
            <div class="flex gap-1.5 text-lg mb-6">
                <p>{forumsTitle}</p>
                <p class="text-gray-500">{forumsSubtitle}</p>
            </div>
            <div class="w-full flex gap-10 overflow-x-auto">
                {
                    items?.map(item => <div
                        class="flex flex-col gap-2 justify-start items-center text-center"
                        key={item.id}
                    >
                        <a href={useForumsUrl(item?.slug, localePathPrefix)}>
                            <Image
                                alt={item?.title}
                                containerClass="w-14 aspect-square rounded-full overflow-hidden border"
                                priority
                                src={item?.relatedItems?.imageUrl}
                            />
                        </a>
                        <a
                            class="text-sm text-gray-500"
                            href={useForumsUrl(item?.slug, localePathPrefix)}
                        >
                            {item?.title}
                        </a>
                    </div>)
                }
            </div>
        </div>
    </div >
}

export default HorizontalForums

import { Image } from "Base"
import {
    Cta,
    Paragraph,
    Title,
} from "Shared"

const Stats = ({
    ctaLink,
    ctaText,
    description,
    desktopImage,
    isRtl,
    items,
    mobileImage,
    title,
}) => {
    return <div class="stats relative py-10 text-white">
        <Title
            text={title}
            class="z-10 relative pt-12"
            colorsInverted
        />
        <Paragraph
            text={description}
            class="hidden md:block text-center text-white relative z-10 text-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl md:text-base mx-auto mt-6"
        />

        <Cta
            class="relative z-10 w-48 mt-10"
            link={ctaLink}
            colorsInverted
            text={ctaText}
        />

        <div class="z-10 relative grid grid-cols-2 md:grid-cols-4 gap-12 gap-y-24 md:gap-2 mx-auto place-items-center mt-32 md:mt-10 w-4/5 md:w-2/3 lg:2/5 xl:flex xl:justify-between xl:w-2/3">
            {
                items?.map((item, index) => <>
                    <div
                        class="flex flex-col xl:mt-10"
                        key={item.key}
                    >
                        <div
                            dangerouslySetInnerHTML={item.svg}
                            class="mb-5 w-16 fill-white transition-all duration-500"
                        />
                        <div class="text-3xl font-black text-center">{item.number}</div>
                        <div class="text-lg font-bold text-center">{item.title}</div>
                    </div>
                    {index + 1 < items?.length ? <span class="hidden xl:block border-dotted border-t border-t-custom-color1 border-t-[8px] flex-grow mx-12" /> : null}
                </>)
            }
        </div>
        <Image
            containerClass="absolute top-0 end-0 bottom-0 start-0 w-full h-full md:hidden"
            alt={title}
            src={mobileImage || desktopImage}
        />
        <Image
            containerClass="absolute top-0 end-0 bottom-0 start-0 max-w-full w-1/1 h-full hidden md:block"
            alt={title}
            src={desktopImage || mobileImage}
        />
        <div class="absolute z-0 w-full h-full top-0 start-0 bg-custom-color2/30"></div>

    </div>
}

export default Stats

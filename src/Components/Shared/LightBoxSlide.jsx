import { Image } from "Base"

const LightBoxSlide = ({
    items,
    rotate,
    title,
    name,
}) => {

    const rotateStyle = () => {
        switch (rotate) {
            case 1: return "rotate-90"
            case 2: return "rotate-180"
            case 3: return "rotate-[270deg]"
            default: return ""
        }
    }

    return <>
        <div class="w-full flex flex-col items-center justify-center gap-1 px-2.5 z-30 overflow-hidden">
            <div class={`${name} swiper w-full h-full"`}>
                <div class="swiper-wrapper">
                    {
                        items?.map((image, index) => <div
                            class="swiper-slide"
                            key={image.id}
                        >
                            <div class="h-[calc(100vh-7rem)] lg:h-[calc(100vh%-5.5rem)] swiper-zoom-container">
                                <Image
                                    alt={image.title || title}
                                    containerClass={`w-full w-[1536px] mx-auto aspect-auto duration-300 ${rotateStyle()} duration-300 transform origin-center transition-transform`}
                                    imageClass="prevent-close object-contain mx-auto cursor-grab active:cursor-grabbing rounded"
                                    priority={index < 1}
                                    src={image.relatedItems?.url}
                                />
                            </div>
                        </div>)
                    }
                </div>
                <div class="prevent-close border-custom-color21 bg-custom-color2/30 fixed bottom-0 end-1/2 z-10 mx-auto my-1.5 mt-auto flex h-11 w-full max-w-2xl -translate-x-1/2 transform cursor-auto flex-wrap items-center justify-center gap-y-1 overflow-hidden rounded border px-2 shadow">
                    {
                        items.length == 1
                            ?
                            <div class="bg-custom-color21 w-5 h-2 rounded-full cursor-pointer" />
                            :
                            <div class="swiper-pagination w-full bullet:bg-custom-color21 active-bullet:w-5 active-bullet:rounded-md" />
                    }
                </div>
            </div>
        </div>
    </>
}

export default LightBoxSlide

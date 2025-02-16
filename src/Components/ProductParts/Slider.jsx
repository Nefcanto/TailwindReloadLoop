import {
    $,
    component$,
    useSignal,
    useStyles$,
    useVisibleTask$,
} from "@builder.io/qwik"
import { Image } from "Base"
import Swiper from "swiper"
import swiperStyles from "swiper/css?inline"
import swiperThumbsStyles from "swiper/css/thumbs?inline"
import swiperFreeModeStyles from "swiper/css/free-mode?inline"
import swiperNavigationStyles from "swiper/css/navigation?inline"
import {
    Navigation,
    Thumbs,
} from "swiper/modules"
import { LightBoxGallery } from "Shared"
import { ZoomOut } from "Svg"

const Slider = component$(({
    relatedItems,
    slug,
    title,
}) => {

    useStyles$(swiperStyles)
    useStyles$(swiperFreeModeStyles)
    useStyles$(swiperThumbsStyles)
    useStyles$(swiperNavigationStyles)

    const lightBoxImageId = useSignal()
    const lightBoxHandler = $(id => {
        lightBoxImageId.value = id > 0 ? id : "0"
    })

    useVisibleTask$(() => {
        const thumbsSwiper = new Swiper(".thumbs-swiper", {
            modules: [Thumbs],
            clickable: true,
            slidesPerView: 4,
            spaceBetween: 20,
            freeMode: true,
            watchSlidesProgress: true,
        })

        const mainSwiper = new Swiper(".main-swiper", {
            modules: [Thumbs, Navigation],
            spaceBetween: 20,
            navigation: {
                nextEl: ".product-next",
                prevEl: ".product-prev",
            },

            slidesPerView: 1,
            thumbs: {
                swiper: thumbsSwiper
            },
        })
    }, {
        strategy: "document-ready"
    }
    )
    return <>
        <section class="col-span-1 lg:col-span-5">
            <div class="main-swiper swiper mb-4">
                <div class="swiper-wrapper">
                    {
                        relatedItems?.images.map((item, index) => <div
                            class="swiper-slide"
                            key={item.id}
                        >
                            <Image
                                alt={item?.title || title}
                                containerClass="max-w-full w-1/1 aspect-square rounded-lg overflow-hidden"
                                lqip
                                priority={index < 1}
                                src={item.relatedItems.url}
                            />
                            <div
                                class="bg-custom-color1 absolute end-1.5 top-1.5 z-20 aspect-square cursor-pointer rounded-full p-1 duration-500 sm:end-2 sm:top-2 md:end-2.5 md:top-2.5 lg:end-3 lg:top-3 group"
                                onClick$={() => lightBoxHandler(index)}
                            >
                                <ZoomOut class="w-5 aspect-square sm:w-6 fill-custom-color2" />
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div class="thumbs-swiper swiper">
                <div class="swiper-wrapper">
                    {
                        relatedItems?.images.map((item, index) => <div
                            class="swiper-slide"
                            key={item.id}
                        >
                            <Image
                                alt={item?.title || title}
                                containerClass="w-[67px] sm:w-[137px] md:w-[166px] lg:w-[82px] xl:w-[109px] xxl:w-[113px] aspect-square rounded-2xl overflow-hidden border border-custom-color1 cursor-pointer"
                                priority={index < 4}
                                src={item.relatedItems.url}
                            />
                        </div>)
                    }
                </div>
            </div>
            {
                lightBoxImageId.value && <LightBoxGallery
                    items={relatedItems?.images}
                    lightBoxImageId={lightBoxImageId}
                    name={`gallery-${slug}`}
                    title={title}
                />
            }
        </section>
    </>
})

export default Slider

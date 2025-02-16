import {
    component$,
    useSignal,
    useStyles$,
    useVisibleTask$,
} from "@builder.io/qwik"
import swiperStyles from "swiper/css?inline"
import swiperThumbsStyles from "swiper/css/thumbs?inline"
import swiperFreeModeStyles from "swiper/css/free-mode?inline"
import swiperNavigationStyles from "swiper/css/navigation?inline"
import Swiper from "swiper"
import {
    Navigation,
    Thumbs,
} from "swiper/modules"
import {
    Close,
    Image,
    lg,
    md,
    OpenInFull,
    sm,
    xl,
    xs,
    xxl,
    zero,
} from "Base"

const Slider = component$(({
    gallery,
    galleryIsOpen,
}) => {

    useStyles$(swiperStyles)
    useStyles$(swiperThumbsStyles)
    useStyles$(swiperFreeModeStyles)
    useStyles$(swiperNavigationStyles)

    const cursorIsShown = useSignal(false)

    useVisibleTask$(({ track }) => {

        track(() => galleryIsOpen.value)
        if (galleryIsOpen.value) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "scroll"
        }

        const thumbsSwiper = new Swiper(`.gallery-${gallery?.slug}-swiper-thumbs`, {
            modules: [Thumbs],
            clickable: true,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                [zero]: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                [xs]: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                [sm]: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                [md]: {
                    slidesPerView: 8,
                    spaceBetween: 10,
                },
                [lg]: {
                    slidesPerView: 10,
                    spaceBetween: 10,
                },
                [xl]: {
                    slidesPerView: 10,
                    spaceBetween: 10,
                },
                [xxl]: {
                    slidesPerView: 10,
                    spaceBetween: 10,
                }
            },
        })

        const mainSwiper = new Swiper(`.gallery-${gallery.slug}-swiper`, {
            modules: [Thumbs, Navigation],
            navigation: {
                nextEl: `gallery-${gallery.slug}-swiper-next`,
                prevEl: `gallery-${gallery.slug}-swiper-prev`,
            },
            slidesPerView: 1,
            spaceBetween: 20,
            thumbs: {
                swiper: thumbsSwiper,
            },
            breakpoints: {
                [zero]: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                [xs]: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                [sm]: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                [md]: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                [lg]: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                }
            },
        }, {
            strategy: "document-ready"
        })

        const galleryElement = document.getElementById(`gallery-${gallery.slug}`)

        const galleryWrapperElement = document.getElementById(`gallery-${gallery.slug}-swiper-wrapper`)

        const galleryThumbsWrapperElement = document.getElementById(`gallery-${gallery.slug}-thumbs-wrapper`)

        const galleryCursor = document.getElementById(`gallery-${gallery.slug}-cursor`)

        galleryWrapperElement.addEventListener("mousemove", (event) => {
            event.stopPropagation()
        })

        galleryWrapperElement.addEventListener("mouseenter", (event) => {
            cursorIsShown.value = false
        })

        galleryThumbsWrapperElement.addEventListener("mousemove", (event) => {
            event.stopPropagation()
        })
        galleryThumbsWrapperElement.addEventListener("mouseenter", (event) => {
            cursorIsShown.value = false
        })

        galleryElement.addEventListener("mouseleave", (event) => {
            cursorIsShown.value = false
        })

        galleryElement.addEventListener("mousemove", (event) => {
            cursorIsShown.value = true
            galleryCursor.style.left = (event.clientX + 5) + "px"
            galleryCursor.style.top = (event.clientY + 5) + "px"
        })

    }, { strategy: "document-ready" })

    return <>
        <div
            id={`gallery-${gallery.slug}`}
            class={`${galleryIsOpen.value ? "block" : "hidden"} hover:cursor-pointer fixed h-screen w-screen bg-black/95 z-50 top-0 end-0`}
            onClick$={() => galleryIsOpen.value = false}
        >
            <span
                class={`${cursorIsShown.value ? "block" : "hidden"} absolute bg-white p-1 rounded-md`}
                id={`gallery-${gallery.slug}-cursor`}
            >
                <Close class="w-6 h-6" />
            </span>
            <div
                id={`gallery-${gallery.slug}-thumbs-wrapper`}
                class="absolute h-fit inset-x-0 top-0 mx-auto w-full max-w-2xl p-4 z-30 bg-zinc-800 rounded-b-md"
                onClick$={e => e.stopPropagation()}
            >
                <div class={`gallery-${gallery.slug}-swiper-thumbs swiper`}>
                    <div class="swiper-wrapper">
                        {
                            gallery?.relatedItems?.images?.map(image => <div
                                class="swiper-slide"
                                key={image.id}
                            >
                                <Image
                                    imageClass="object-contain max-w-full w-1/1 h-full"
                                    containerClass="w-full aspect-square p-1 border rounded-sm cursor-pointer shadow-md"
                                    src={image?.relatedItems?.url}
                                />
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div
                id={`gallery-${gallery.slug}-swiper-wrapper`}
                class="w-3/4 h-fit md:max-w-md absolute inset-0 m-auto mt-48 z-30"
                onClick$={e => e.stopPropagation()}
            >
                <div
                    class={`gallery-${gallery.slug}-swiper swiper`}
                >
                    <div class="swiper-wrapper">
                        {
                            gallery?.relatedItems?.images?.map(image => <div
                                class="swiper-slide"
                                key={image?.id}
                            >
                                <Image
                                    containerClass={`max-w-full w-1/1 mx-auto aspect-square cursor-grab active:cursor-grabbing overflow-hidden`}
                                    imageClass="m-0 p-0 transition-all duration-200 object-contain w-full h-full mx-auto"
                                    src={image.relatedItems.url}
                                    alt={image.title || gallery.title}
                                />
                            </div>
                            )
                        }
                    </div>
                </div>
            </div >
        </div >
    </>
})

export default Slider

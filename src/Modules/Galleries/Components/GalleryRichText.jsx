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

const Gallery = component$(({
    galleries,
    slug,
}) => {

    useStyles$(swiperStyles)
    useStyles$(swiperThumbsStyles)
    useStyles$(swiperFreeModeStyles)
    useStyles$(swiperNavigationStyles)

    const gallery = galleries.find(gallery => gallery.slug === slug)
    const galleryIsOpen = useSignal(false)
    const cursorIsShown = useSignal(false)

    useVisibleTask$(({ track }) => {
        track(() => galleryIsOpen.value)
        if (galleryIsOpen.value) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "scroll"
        }
        const thumbsSwiper = new Swiper(`.gallery-${slug}-swiper-thumbs`, {
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
        const mainSwiper = new Swiper(`.gallery-${slug}-swiper`, {
            modules: [Thumbs, Navigation],
            navigation: {
                nextEl: `gallery-${slug}-swiper-next`,
                prevEl: `gallery-${slug}-swiper-prev`,
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
        })

        const galleryElement = document.getElementById(`gallery-${slug}`)

        const galleryWrapperElement = document.getElementById(`gallery-${slug}-swiper-wrapper`)

        const galleryThumbsWrapperElement = document.getElementById(`gallery-${slug}-thumbs-wrapper`)

        const galleryCursor = document.getElementById(`gallery-${slug}-cursor`)

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
            id={`gallery-${slug}`}
            class={`${galleryIsOpen.value ? "block" : "hidden"} hover:cursor-pointer fixed h-screen w-screen bg-black/95 z-50 top-0 end-0`}
            onClick$={() => galleryIsOpen.value = false}
        >
            <span
                class={`${cursorIsShown.value ? "block" : "hidden"} absolute bg-white p-1 rounded-md`}
                id={`gallery-${slug}-cursor`}
            >
                <Close class="w-6 h-6" />
            </span>
            <div
                id={`gallery-${slug}-thumbs-wrapper`}
                class="absolute h-fit inset-x-0 top-0 mx-auto w-full max-w-2xl p-4 z-30 bg-zinc-800 rounded-b-md"
                onClick$={e => e.stopPropagation()}
            >
                <div class={`gallery-${slug}-swiper-thumbs swiper`}>
                    <div class="swiper-wrapper">
                        {
                            gallery?.relatedItems?.images?.map(image => <div
                                class="swiper-slide"
                                key={image.id}
                            >
                                <Image
                                    imageClass="object-contain w-full h-full"
                                    containerClass="w-full aspect-square p-1 border rounded-xs cursor-pointer shadow-md"
                                    src={image?.relatedItems?.url}
                                />
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div
                id={`gallery-${slug}-swiper-wrapper`}
                class="w-3/4 h-fit md:max-w-md absolute inset-0 m-auto mt-48 z-30"
                onClick$={e => e.stopPropagation()}
            >
                <div
                    class={`gallery-${slug}-swiper swiper`}
                >
                    <div class="swiper-wrapper">
                        {
                            gallery?.relatedItems?.images?.map(image => <div
                                class="swiper-slide"
                                key={image.id}
                            >
                                <Image
                                    containerClass={`w-full mx-auto aspect-square cursor-grab active:cursor-grabbing overflow-hidden`}
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
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {
                gallery?.relatedItems?.images?.map(image => <div
                    key={image.id}
                    class="relative group overflow-hidden"
                    onClick$={() => {
                        console.log("before setting true")
                        galleryIsOpen.value = true
                        console.log("after setting true")
                    }}
                >
                    <OpenInFull class="w-8 h-8 absolute inset-0 m-auto z-10 fill-white bg-zinc-700 p-2 rounded-full md:translate-y-[180px] md:invisible md:group-hover:visible md:group-hover:translate-y-[0px] transition-all duration-500 ease-in-out" />
                    <Image
                        containerClass="w-full aspect-square cursor-pointer border-[10px] rounded-md border-gray-200 overflow-hidden"
                        imageClass="m-0 p-0 group-hover:brightness-50 group-hover:scale-110 brightness-75 transition-all duration-200"
                        src={image.relatedItems.url}
                        alt={image.title || gallery.title}
                    />
                </div>
                )
            }
        </div>
    </>
})

export default Gallery

import {
    $,
    component$,
    useSignal,
    useStyles$,
    useVisibleTask$,
} from "@builder.io/qwik"
import {
    Keyboard,
    Navigation,
    Pagination,
    Zoom,
} from "swiper/modules"
import Swiper from "swiper"
import paginationStyle from "swiper/css/pagination?inline"
import swiperNavigationStyles from "swiper/css/navigation?inline"
import swiperStyles from "swiper/css?inline"
import zoomStyles from "swiper/css/zoom?inline"
import {
    LightBoxNavigation,
    LightBoxSlide,
    LightBoxTools,
} from "Shared"

const LightBoxGallery = component$(({
    items,
    lightBoxImageId,
    name,
    title,
}) => {

    useStyles$(paginationStyle)
    useStyles$(swiperNavigationStyles)
    useStyles$(swiperStyles)
    useStyles$(zoomStyles)

    const rotate = useSignal(0)
    const currentImageIndex = useSignal(1)

    const handleSlideChange = $(swiper => {
        currentImageIndex.value = swiper.realIndex + 1
        rotate.value = 0
    })
    const handleRotate = $(direction => {
        rotate.value = (rotate.value + direction * 1 + 4) % 4
    })
    const closeLightBox = $(e => {
        if (!e?.target?.closest(".prevent-close")) {
            lightBoxImageId.value = ""
        }
    })
    const handleKeyDown = $(e => {
        if (["ArrowUp", "ArrowDown"].includes(e?.key)) {
            e.preventDefault()
        }
        switch (e?.key) {
            case "Escape": return lightBoxImageId.value = ""
            case "ArrowUp": return handleRotate(1)
            case "ArrowDown": return handleRotate(-1)
            default: return
        }
    })

    useVisibleTask$(() => {
        const mainSwiper = new Swiper(`.${name}`, {
            modules: [
                Navigation,
                Pagination,
                Zoom,
                Keyboard,
            ],
            loop: true,
            navigation: {
                nextEl: `.${name}-next`,
                prevEl: `.${name}-prev`,
            },
            on: { slideChange: swiper => handleSlideChange(swiper) },
            pagination: {
                clickable: true,
                el: ".swiper-pagination",
                type: "bullets",
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
            slidesPerView: 1,
            spaceBetween: 5,
            zoom: {
                maxRatio: 3,
                minRatio: 1,
                panOnMouseMove: true,
                toggle: true,
            },
            ...(lightBoxImageId.value > 0 && { initialSlide: lightBoxImageId.value }),
        })
        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, {
        strategy: "document-ready"
    })

    return <>
        <div
            class="w-full h-screen fixed z-50 top-0 start-0 flex flex-col bg-custom-color2/90 bg overflow-hidden cursor-pointer"
            onClick$={closeLightBox}
        >
            <LightBoxTools
                activeImageInfo={items.length + " / " + currentImageIndex.value}
                click={closeLightBox}
                handleRotate={handleRotate}
            />
            <LightBoxSlide
                items={items}
                name={name}
                rotate={rotate.value}
                title={title}
            />
            <LightBoxNavigation
                items={items}
                name={name}
            />
        </div>
    </>
})

export default LightBoxGallery

import { component$ } from "@builder.io/qwik"
import {
    lg,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xl,
    zero,
} from "Base"
import { Paragraph } from "Shared"
import { CategorySlide } from "BlogParts"

const Categories = component$(({
    categories,
    localePathPrefix,
    statics,
}) => {

    const categorySwiperConfig = {
        slidesPerView: 3,
        spaceBetween: 0,
        breakpoints: {
            [zero]: {
                slidesPerView: 2.4,
                spaceBetween: 20,
            },
            [sm]: {
                slidesPerView: 4.5,
                spaceBetween: 20,
            },
            [md]: {
                slidesPerView: 3.7,
                spaceBetween: 20,
            },
            [lg]: {
                slidesPerView: 3.9,
                spaceBetween: 20,
            },
            [xl]: {
                slidesPerView: 4.4,
                spaceBetween: 20,
            },
        },
    }

    return <section class="relative bg-custom-color1">
        <div class="mx-auto">
            <div class="flex flex-col my-5 justify-center items-center mx-auto">
                <h1 class="relative text-2xl font-bold mt-10">{statics.title}</h1>
                <Paragraph
                    class="mt-4 text-sm"
                    text={statics.description}
                />
            </div>
            <Swiper
                config={categorySwiperConfig}
                containerClass="max-w-7xl md:max-w-2xl lg:max-w-4xl px-4 m-auto"
                name="blogCategorySlider"
            >
                {
                    categories.map(item => <SwiperSlide key={item.id}>
                        <CategorySlide
                            category={item}
                            localePathPrefix={localePathPrefix}
                        />
                    </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    </section >
})

export default Categories

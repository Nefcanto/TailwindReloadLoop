import {
    md,
    sm,
    Swiper,
    SwiperSlide,
    xs,
} from "Base"
import { useCategoryUrl } from "Products"

const Categories = ({
    categories,
    localePathPrefix,
}) => {

    return categories?.length > 0 && <section>
        <nav class="mb-3 lg:mb-5">
            <Swiper
                config={{
                    navigation: true,
                    breakpoints: {
                        [xs]: {
                            slidesPerView: 1.5,
                            spaceBetween: 5,
                        },
                        [sm]: {
                            slidesPerView: 2.5,
                            spaceBetween: 5,
                        },
                        [md]: {
                            slidesPerView: 3.7,
                            spaceBetween: 20,
                        },
                    },
                }}
                containerClass="w-full ps-1.5 py-10 rounded-b shadow bg-gradient-to-b from-transparent to-custom-color23"
                name="CategoriesSwiper"
                paginationClass="pt-0 active-bullet:w-5 active-bullet:bg-custom-color1 active-bullet:rounded-md"
                wrapperClass="w-fit mx-auto"
            >
                {
                    categories?.map(category => {
                        return <SwiperSlide key={category.id}>
                            <a
                                class="flex justify-center bg-white hover:bg-custom-color1 border border-custom-color1 rounded-md block py-2 hover:border-opacity-80 whitespace-nowrap transition-all"
                                href={useCategoryUrl(category?.slug, localePathPrefix)}
                            >
                                {category?.title}
                            </a>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </nav>
    </section>
}

export default Categories

import {
    Image,
    lg,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xs,
    xxl,
    zero,
} from "Base"

const Brands = ({ productsBrands }) => {

    return productsBrands?.items.length > 0 && <>
        <section class="mt-8 md:mt-12">
            <Swiper
                config={{
                    loop: true,
                    autoplay: true,
                    spaceBetween: 20,
                    breakpoints: {
                        [zero]: { slidesPerView: 1.5 },
                        [xs]: { slidesPerView: 2.5 },
                        [md]: { slidesPerView: 4 },
                        [lg]: { slidesPerView: 5, },
                        [xxl]: { slidesPerView: 6, },
                    },
                }}
                containerClass="pb-10 sm:h-auto"
                name="products-brands"
                paginationClass="pt-0 active-bullet:w-5 active-bullet:rounded-md active-bullet:bg-custom-color1"
            >
                {
                    productsBrands?.items?.map(brand => {
                        return <SwiperSlide key={brand.id}>
                            <a
                                aria-label={brand?.title}
                                class="block w-full h-full flex items-center justify-center overflow-hidden aspect-square bg-custom-color21 rounded overflow-hidden"
                                href={brand?.link}
                            >
                                <Image
                                    alt={brand?.title}
                                    containerClass="max-w-full w-64 aspect-square overflow-hidden"
                                    imageClass="w-full h-full object-contain"
                                    lqip
                                    src={brand?.image}
                                />
                            </a>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </section>
    </>
}

export default Brands

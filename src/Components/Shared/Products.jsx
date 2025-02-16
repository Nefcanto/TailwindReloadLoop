import {
    lg,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xl,
    zero,
} from "Base"
import { Product } from "Shared"

const Products = ({
    products,
    sliderName,
    ...rest
}) => {

    return <>
        <Swiper
            config={{
                autoplay: true,
                loop: false,
                speed: 800,
                spaceBetween: 20,
                breakpoints: {
                    [zero]: { slidesPerView: 2.4 },
                    [sm]: { slidesPerView: 3.5 },
                    [md]: { slidesPerView: 4.7 },
                    [lg]: { slidesPerView: 5.7 },
                    [xl]: { slidesPerView: 6.6 },
                }
            }}
            containerClass="w-full pb-10"
            name={sliderName || "productsSlider"}
            paginationClass="bullet:w-4 bullet:h-4 bullet:md:w-3 bullet:md:h-3 active-bullet:bg-custom-color1"
        >
            {
                products.map((product, index) => <SwiperSlide key={product.id} >
                    <Product
                        {...rest}
                        priority={index < 7}
                        product={product}
                    />
                </SwiperSlide>)
            }
        </Swiper>
    </>
}

export default Products

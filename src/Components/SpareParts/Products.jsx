import {
    Image,
    lg,
    sm,
    Swiper,
    SwiperSlide,
    xl,
} from "Base"
import { Left } from "Svg"

const Products = ({
    products,
    productsItems
}) => {

    return <>
        <section class="bg-cyan-800 w-full mt-16">
            <div class="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 p-10 xl:p-16 max-w-7xl mx-auto">
                <div class="flex flex-col items-center md:items-start gap-4">
                    <span class="font-bold text-center text-2xl sm:text-3xl text-white leading-10">{products?.title}</span>
                    <span class="text-xl text-indigo-200 mb-8">
                        {products?.subtitle}
                    </span>
                </div>
                <a
                    class="border-2 rounded-lg border-sky-300 p-2 hover:scale-125 duration-300 transition-all"
                    href=""
                >
                    <div class="flex flex-row justify-between gap-5">
                        <span class="text-md font-bold text-sky-300 mx-auto">{products?.buttonTitle}</span>
                        <Left class="w-6 h-6 fill-sky-300" />
                    </div>
                </a>
            </div>
            <div>
                <Swiper
                    name="ProductsSlider"
                    containerClass="max-w-7xl px-10 pb-10 md:-mt-10"
                    paginationClass="active-bullet:bg-custom-color1 active-bullet:rounded-md"
                    config={{
                        slidesPerView: 1,
                        spaceBetween: 40,
                        breakpoints: {
                            [sm]: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            [lg]: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            [xl]: {
                                slidesPerView: 4,
                                spaceBetween: 40
                            }
                        }
                    }}
                >
                    {
                        productsItems?.sparePartsProducts?.map(item => <SwiperSlide
                            key={item.id}
                            class="relative cursor-pointer overflow-hidden group"
                        >
                            <a
                                class="flex flex-col justify-center items-center gap-5 bg-white rounded-lg p-10 hover:scale-90 duration-300 transition-all"
                            >
                                <Image
                                    containerClass="max-w-full w-1/1 aspect-square overflow-hidden"
                                    imageClass="brightness-75 group-hover:brightness-50 transition-all duration-500 rounded"
                                    src={item?.relatedItems?.imageUrl}
                                />
                                <span class=" text-md font-bold">{item?.title}</span>
                            </a>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    </>
}

export default Products

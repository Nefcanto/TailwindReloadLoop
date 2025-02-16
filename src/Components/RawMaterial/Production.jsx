import {
    Image,
    lg,
    Swiper,
    SwiperSlide,
} from "Base"
import { Title } from "Shared"

const Production = ({
    products,
    rawMaterialProduction,
}) => {

    return <>
        <section class="p-5 mt-5 max-w-7xl mx-auto">
            <Title
                class="text-xl font-bold after:h-[3px] after:mt-1"
                text={rawMaterialProduction?.title}
            />
            <div>
                <Swiper
                    name="ProductionSlider"
                    containerClass="h-full px-6 pb-10 mt-5 w-full"
                    paginationClass="active-bullet:bg-custom-color1 active-bullet:rounded-md"
                    config={{
                        slidesPerView: 2,
                        spaceBetween: 40,
                        breakpoints: {
                            [lg]: {
                                slidesPerView: 6,
                                spaceBetween: 40,
                            },
                        }
                    }}
                >
                    {
                        products?.rawMaterialProducts?.map(item => <SwiperSlide
                            key={item.id}
                            class=" relative cursor-pointer overflow-hidden group"
                        >
                            <a
                                class="flex flex-col justify-center items-center gap-5"
                            >
                                <Image
                                    containerClass="max-w-full w-1/1 aspect-square overflow-hidden hover:scale-90 duration-300 transition-all"
                                    imageClass="brightness-75 group-hover:brightness-50 transition-all duration-500 border-2 border-sky-600 "
                                    src={item?.relatedItems?.imageUrl}
                                />
                                <span class="text-sky-700">{item?.title}</span>
                            </a>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section >
    </>
}

export default Production

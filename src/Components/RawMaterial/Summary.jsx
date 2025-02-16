import {
    Image,
    lg,
    sm,
    Swiper,
    SwiperSlide,
    xl,
} from "Base"
import { Title } from "Shared"

const Summary = ({
    rawMaterialSummary,
    products,
}) => {

    return <>
        <section class="bg-gray-200 w-full mt-16 pb-10">
            <div class="flex flex-col justify-center items-center p-10 xl:p-16">
                <span class="font-bold text-center text-3xl leading-10">{rawMaterialSummary?.summary}</span>
            </div>
            <Title
                class="text-xl text-sky-700 mb-8 after:h-[3px] after:mt-1"
                text={rawMaterialSummary?.title}
            />
            <div>
                <Swiper
                    name="SummarySlider"
                    containerClass="max-w-7xl px-6 pb-10 mt-5"
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
                        products?.rawMaterialProducts?.map(item => <SwiperSlide
                            key={item.id}
                            class=" relative cursor-pointer overflow-hidden group"
                        >
                            <a
                                class="flex flex-col justify-center items-center gap-5"
                            >
                                <Image
                                    containerClass="max-w-full w-1/1 aspect-[3/4] overflow-hidden hover:scale-90 duration-300 transition-all"
                                    imageClass="brightness-75 group-hover:brightness-50 transition-all duration-500 border-2 border-sky-600"
                                    src={item?.relatedItems?.imageUrl}
                                />
                                <span class="text-sky-700">{item?.title}</span>
                            </a>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    </>
}

export default Summary

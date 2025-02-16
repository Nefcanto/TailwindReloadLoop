import {
    Image,
    Swiper,
    SwiperSlide,
} from "Base"

const Hero = ({ hero }) => {

    return <>
        <section class="w-full">
            <div>
                <Swiper
                    name="HeroSlider"
                    containerClass="w-full pb-10 mt-5"
                    paginationClass="active-bullet:bg-custom-color1 active-bullet:rounded-md"
                    config={{
                        // effect: "cube",
                        // grabCursor: true,
                        slidesPerView: 1,
                        spaceBetween: 40,
                    }}
                >
                    {
                        hero?.items?.map(item => <SwiperSlide
                            class=" relative cursor-pointer overflow-hidden group"
                            key={item.id}
                        >
                            <div
                                class="flex flex-col justify-center items-center gap-5"
                            >
                                <Image
                                    containerClass="max-w-full w-1/1 aspect-[7/3] overflow-hidden"
                                    imageClass="brightness-75 group-hover:brightness-50 transition-all duration-500"
                                    src={item?.image}
                                />
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    </>
}

export default Hero

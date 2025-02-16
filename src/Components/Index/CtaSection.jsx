import {
    Image,
    Swiper,
    SwiperSlide,
} from "Base"
import {
    Cta,
    Title,
} from "Shared"

const CtaSection = ({
    ctaLink,
    ctaText,
    image,
    isRtl,
    items,
    sliderActive,
    subtitle,
    title,
}) => {

    return !sliderActive ? <div class="cta h-[450px] bg-gradient-to-b from-custom-color3 to-custom-color31 py-12">
        <div class="max-w-screen-lg overflow-hidden relative w-full h-full flex flex-col md:flex-row mx-auto">
            <div class="md:flex-1 md:relative z-20">
                <Title
                    class="px-20"
                    colorsInverted
                    text={title}
                />
                <p class="text-center text-white px-12 mt-2">{subtitle}</p>
                <Cta
                    class="absolute bottom-1 end-0 start-0 mx-auto"
                    isRtl={isRtl}
                    link={ctaLink}
                    colorsInverted
                    text={ctaText}
                />
            </div>
            <Image
                alt={title}
                containerClass="z-10 absolute bottom-0 end-0 start-0 mx-auto min-w-full max-w-full w-1/1 max-h-full sm:-bottom-1/3 md:w-1/2 md:static"
                src={image}
            />
        </div>
    </div>
        :
        <>
            {/* <div class="flex justify-between gap-x-1 items-center px-2 absolute my-auto start-0 end-0 mx-auto z-20">
                <div class="best-seller-prev aspect-square border border-gray-600 rounded-md bg-custom-color3/40 hover:bg-custom-color3 hover:border-gray-800 transition-all cursor-pointer">
                    <Right class="w-8" />
                </div>
                <div class="best-seller-next aspect-square border border-gray-600 rounded-md bg-custom-color3/40 hover:bg-custom-color3 hover:border-gray-800 transition-all cursor-pointer">
                    <Left class="w-8" />
                </div>
            </div> */}
            <Swiper
                name="indexCtaSlider"
                containerClass="w-full"
                paginationClass="active-bullet:bg-custom-color1 active-bullet:w-10 active-bullet:rounded-md"
                config={{
                    navigation: {
                        nextEl: ".best-seller-next",
                        prevEl: ".best-seller-prev",
                    },
                    slidesPerView: 1,
                    spaceBetween: 0,
                }
                }
            >
                {
                    items.map((item, index) => <SwiperSlide
                        key={item.id}
                        class="w-full"
                    >
                        <div class="relative m-auto">
                            <Image
                                alt={item?.title}
                                containerClass="absolute top-0 start-0 -z-10 min-w-full max-w-full w-1/1 h-full aspect-[3/1]"
                                imageClass="w-full brightness-50 group-hover:brightness-50 transition-all duration-500"
                                src={item?.image}
                                priority={index < 1}
                            />
                            <div class="absolute -z-10 w-full h-full top-0 start-0 bg-gradient-to-b from-custom-color2/10 to-custom-color2/30"></div>
                            <div class="max-w-2xl flex flex-col sm:gap-5 md:gap-10 mx-auto justify-center items-center py-10">
                                <span class="p-4 sm:hidden text-white text-lg font-bold text-center mb-10 border-b-2 border-custom-color1">{item?.title}</span>
                                <Title
                                    class="hidden sm:block w-full pt-10 text-xl font-black"
                                    colorsInverted
                                    text={item?.title}
                                />
                                <p class="hidden sm:block text-center text-white mt-2 mb-5">{item?.subtitle}</p>
                                <Cta
                                    class="mx-auto mb-10"
                                    isRtl={item?.isRtl}
                                    link={item?.ctaLink}
                                    colorsInverted
                                    text={item?.ctaText}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    )
                }
            </Swiper>
        </>
}

export default CtaSection

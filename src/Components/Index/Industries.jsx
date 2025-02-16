import {
    Image,
    lg,
    md,
    Swiper,
    SwiperSlide,
    xxl,
} from "Base"
import {
    Overlay,
    Paragraph,
    Title,
} from "Shared"

const Industries = ({
    firstParagraph,
    items,
    secondParagraph,
    title,
}) => {

    const paragraphStyle = "px-6 text-center text-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl md:text-base mx-auto"

    return <div class="industries py-20">
        <Title
            text={title}
            class="px-4 mb-6"
        />
        <Paragraph
            text={firstParagraph}
            class={paragraphStyle}
        />
        <Paragraph
            text={secondParagraph}
            class={paragraphStyle + " mt-6"}
        />
        <Swiper
            name="industriesSlider"
            containerClass="h-full px-6 mt-20 pb-12 lg:px-[66px] w-full"
            paginationClass="active-bullet:bg-custom-color1 active-bullet:rounded-md"
            config={{
                slidesPerView: 1,
                spaceBetween: 40,
                breakpoints: {
                    [md]: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    [xxl]: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                },
            }}
        >
            {
                items?.map((item, index) => <SwiperSlide
                    key={item.id}
                    class=" relative cursor-pointer overflow-hidden group md:w-[350px] md:h-[200px] lg:w-[430px] lg:h-[250px] xl:h-[350px] xl:w-[550px]"
                >
                    <a
                        href={item.ctaLink}
                    >
                        <Image
                            containerClass="max-w-full w-1/1 h-full brightness-75 group-hover:brightness-50 transition-all duration-500"
                            src={item.image}
                            alt={item.title}
                            priority={index < 3}
                        />
                        <div class="absolute bottom-12 text-2xl text-white start-8 lg:start-4 font-bold">{item.title}</div>
                        <span class="absolute bottom-4 text-sm sm:text-md xl:text-lg text-white start-8 lg:start-4">
                            {item.ctaText}
                        </span>
                    </a>
                </SwiperSlide>)
            }
        </Swiper>
    </div>
}

export default Industries

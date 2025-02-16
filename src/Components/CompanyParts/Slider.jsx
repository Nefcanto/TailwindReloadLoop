import {
    Image,
    Swiper,
    SwiperSlide,
} from "Base"

const Slider = ({ images }) => {

    return <>
        <Swiper
            name="companySlider"
            containerClass="w-full h-screen md:h-[34rem] xl:h-[34rem]"
            config={{
                slidesPerView: 1,
                spaceBetween: 0,
            }}
        >
            {
                images.map(item => <SwiperSlide
                    key={item.id}
                    class="w-full h-full rounded-lg"
                >
                    <Image
                        containerClass="max-w-full w-1/1 h-full mt-20"
                        src={item.relatedItems.url}
                        alt={item.alt}
                    />
                </SwiperSlide>
                )}
        </Swiper>
    </>
}

export default Slider

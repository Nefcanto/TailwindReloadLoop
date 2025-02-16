import { component$ } from "@builder.io/qwik"
import {
    Image,
    Swiper,
    SwiperSlide,
} from "Base"

const Slider = component$(({
    relatedItems,
    title,
    sliderName,
}) => {
    return <>
        <div class="w-full lg:w-1/2 px-8 lg:px-0">
            <Swiper
                config={{
                    loop: true,
                    slidesPerView: 1,
                    spaceBetween: 10,
                }}
                containerClass="pb-10"
                name={sliderName ? sliderName : "slider"}
                paginationClass="pt-0 active-bullet:w-5 active-bullet:bg-custom-color1 active-bullet:rounded-md"
            >
                {
                    relatedItems?.images.map(image => <SwiperSlide key={image.id}>
                        <Image
                            alt={image?.relatedItems?.title || title}
                            containerClass="max-w-full aspect-square rounded-lg overflow-hidden bg-custom-color24/50"
                            imageClass="w-full h-full object-contain"
                            src={image?.relatedItems?.url}
                        />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    </>
})

export default Slider
